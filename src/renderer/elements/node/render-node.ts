/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description Node using in Renderer
 */

import vertShaderStr from './vertex.glsl'
import fragShaderStr from './fragment.glsl'
import idVertShaderStr from './id-vertex.glsl'
import idFragShaderStr from './id-fragment.glsl'
import { encodeRenderId } from '../../utils'
import { NodeAttr, NodeManagerConfigs } from '../../interfaces'
import Node from '../../../elements/node'
import { RenderElementManager } from '../element/render-element'

enum NodeAttrKey {
    TEMPLATE,
    POSITION,
    R,
    COLOR,
    STROKE_WIDTH,
    STROKE_COLOR
}

enum NodeIdAttrKey {
    TEMPLATE,
    POSITION,
    R,
    COLOR,
    STROKE_WIDTH,
    STROKE_COLOR,
    ID
}

const NodeAttrMap = {
    position: NodeAttrKey.POSITION,
    r: NodeAttrKey.R,
    fill: NodeAttrKey.COLOR,
    strokeWidth: NodeAttrKey.STROKE_WIDTH,
    strokeColor: NodeAttrKey.STROKE_COLOR
}

export class RenderNodeManager extends RenderElementManager {
    private renderIdToId: { [key: number]: string }

    private idToIndex: { [key: string]: number }

    /**
     * create render node manager
     * @param gl WebGL context
     * @param params nessesary configs for node manager
     * @param idTexture texture store elements id of each pixel
     */
    public constructor(
        gl: WebGL2RenderingContext,
        params: NodeManagerConfigs,
        idTexture: WebGLTexture
    ) {
        super(
            /* webgl context */ gl,
            // prettier-ignore
            /* parameters */ {...params, instanceVerteces: [
                -0.5, 0.5, 1.0,
                -0.5, -0.5, 1.0,
                0.5, 0.5, 1.0,
                0.5, -0.5, 1.0,
            ]},
            /* shader series */ {
                vertex: vertShaderStr,
                fragment: fragShaderStr,
                idVertex: idVertShaderStr,
                idFragment: idFragShaderStr
            },
            /* idTexture */ idTexture
        )
        this.renderIdToId = {}
        this.idToIndex = {}

        this.attributes.forEach((attr) => {
            if (attr.name === 'in_position') {
                attr.extractValueFrom = (node: Node) => {
                    const position = node.position()
                    return [position.x, position.y]
                }
            } else if (attr.name === 'in_r') {
                attr.extractValueFrom = (node: Node) => {
                    return [node.r() * this.pixelRatio]
                }
            } else if (attr.name === 'in_fill') {
                attr.extractValueFrom = (node: Node) => {
                    const fill = node.fill()
                    return [fill.r, fill.g, fill.b, fill.a]
                }
            } else if (attr.name === 'in_strokeWidth') {
                attr.extractValueFrom = (node: Node) => {
                    return [node.strokeWidth() * this.pixelRatio]
                }
            } else if (attr.name === 'in_strokeColor') {
                attr.extractValueFrom = (node: Node) => {
                    const strokeColor = node.strokeColor()
                    return [strokeColor.r, strokeColor.g, strokeColor.b, strokeColor.a]
                }
            }
        })
    }

    /**
     * change node's attribute
     * @param node node data
     * @param attribute attribute key to change
     */
    public changeAttribute(node: Node, attribute: NodeAttr) {
        const index = this.idToIndex[node.id()]
        let data = null
        if (attribute === 'position') {
            const pos = node.position()
            data = [pos.x, pos.y]
        } else if (attribute === 'fill') {
            const col = node.fill()
            data = [col.r, col.g, col.b, col.a]
        } else if (attribute === 'r') {
            data = [node.r() * this.pixelRatio]
        } else if (attribute === 'strokeWidth') {
            data = [node.strokeWidth() * this.pixelRatio]
        } else if (attribute === 'strokeColor') {
            const col = node.strokeColor()
            data = [col.r, col.g, col.b, col.a]
        } else {
            console.error('Not supported Node attribute.')
            return
        }
        const attr = this.attributes.get(`in_${attribute}`)
        attr.array.set(data, attr.size * index)
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer)
        this.gl.bufferSubData(
            this.gl.ARRAY_BUFFER,
            attr.size * index * attr.array.BYTES_PER_ELEMENT,
            attr.array,
            attr.size * index,
            attr.size
        )
    }

    /**
     * refresh all nodes position after lazy update
     * @param nodes all node data
     */
    public refreshPosition(nodes: Node[]) {
        // set array
        nodes.forEach((node, i) => {
            // TODO: consider node and render node attribute mapping
            const position = node.position()
            this.attributes.get('in_position').array[2 * i] = position.x
            this.attributes.get('in_position').array[2 * i + 1] = position.y
        })

        this.attributes.forEach((attr) => {
            if (!attr.isBuildIn) {
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer)
                this.gl.bufferSubData(
                    this.gl.ARRAY_BUFFER,
                    0,
                    attr.array,
                    0,
                    attr.size * nodes.length
                )
            }
        })
    }

    /**
     * add nodes data to engine
     * @param nodes nodes data
     */
    public addData(nodes: Node[]) {
        // set array
        nodes.forEach((node, i) => {
            // node attribute => webgl attribute
            this.attributes.forEach((attr) => {
                if (!attr.isBuildIn) {
                    const value = attr.extractValueFrom(node)
                    value.forEach((v, j) => {
                        attr.array[attr.size * (this.count + i) + j] = v
                    })
                }
            })

            const renderIdColor = encodeRenderId(2 * (this.count + i)) // NOTE: node render id, use even integer
            this.idAttributes.get('in_id').array[4 * (this.count + i)] = renderIdColor.r
            this.idAttributes.get('in_id').array[4 * (this.count + i) + 1] = renderIdColor.g
            this.idAttributes.get('in_id').array[4 * (this.count + i) + 2] = renderIdColor.b
            this.idAttributes.get('in_id').array[4 * (this.count + i) + 3] = renderIdColor.a

            this.renderIdToId[2 * (this.count + i)] = node.id()
            this.idToIndex[node.id()] = this.count + i
        })

        this.attributes.forEach((attr) => {
            if (!attr.isBuildIn) {
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer)
                this.gl.bufferSubData(
                    this.gl.ARRAY_BUFFER,
                    attr.size * this.count * attr.array.BYTES_PER_ELEMENT,
                    attr.array,
                    attr.size * this.count,
                    attr.size * nodes.length
                )
            }
        })

        // id buffer data
        const attr = this.idAttributes.get('in_id')
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer)
        this.gl.bufferSubData(
            this.gl.ARRAY_BUFFER,
            attr.size * this.count * attr.array.BYTES_PER_ELEMENT,
            attr.array,
            attr.size * this.count,
            attr.size * nodes.length
        )

        this.count += nodes.length
    }

    /**
     * render id to id
     * @param renderId render id in number
     */
    public getIdByRenderId(renderId: number): string {
        return this.renderIdToId[renderId]
    }
}
