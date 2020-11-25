/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description Node using in Renderer
 */

import { NodeManagerConfigs, ShaderSeries } from '../interfaces'
import Node from '../../elements/node'
import { RenderElementManager } from './render-element'

export class RenderNodeManager extends RenderElementManager {
    // private idToIndex: { [key: string]: number }

    /**
     * create render node manager
     * @param gl WebGL context
     * @param params nessesary configs for node manager
     * @param idTexture texture store elements id of each pixel
     */
    public constructor(
        gl: WebGL2RenderingContext,
        params: NodeManagerConfigs,
        shaders: ShaderSeries,
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
                ...shaders
            },
            /* idTexture */ idTexture
        )
        this.renderIdToElement = {}
        // this.idToIndex = {}

        this.attributes.forEach((attr) => {
            if (attr.name === 'in_position') {
                attr.extractAttributeValueFrom = (node: Node) => {
                    const position = node.position()
                    return [position.x, position.y]
                }
            } else if (attr.name === 'in_r') {
                attr.extractAttributeValueFrom = (node: Node) => {
                    return [node.r() * this.pixelRatio]
                }
            } else if (attr.name === 'in_width') {
                attr.extractAttributeValueFrom = (node: Node) => {
                    return [node.width() * this.pixelRatio]
                }
            } else if (attr.name === 'in_height') {
                attr.extractAttributeValueFrom = (node: Node) => {
                    return [node.height() * this.pixelRatio]
                }
            } else if (attr.name === 'in_rotate') {
                attr.extractAttributeValueFrom = (node: Node) => {
                    return [node.rotate()]
                }
            } else if (attr.name === 'in_fill') {
                attr.extractAttributeValueFrom = (node: Node) => {
                    const fill = node.fill()
                    return [fill.r, fill.g, fill.b, fill.a]
                }
            } else if (attr.name === 'in_strokeWidth') {
                attr.extractAttributeValueFrom = (node: Node) => {
                    return [node.strokeWidth() * this.pixelRatio]
                }
            } else if (attr.name === 'in_strokeColor') {
                attr.extractAttributeValueFrom = (node: Node) => {
                    const strokeColor = node.strokeColor()
                    return [strokeColor.r, strokeColor.g, strokeColor.b, strokeColor.a]
                }
            } else if (attr.name === 'in_shape') {
                attr.extractAttributeValueFrom = (node: Node) => {
                    const shape = node.shape()
                    if (shape === 'rect') {
                        return [1]
                    } else if (shape === 'triangle') {
                        return [2]
                    } else {
                        return [0]
                    }
                }
            } else if (attr.name === 'in_vertex_alpha') {
                attr.extractAttributeValueFrom = (node: Node) => {
                    const vertexAlpha = node.vertexAlpha()
                    return [vertexAlpha.x, vertexAlpha.y]
                }
            } else if (attr.name === 'in_vertex_beta') {
                attr.extractAttributeValueFrom = (node: Node) => {
                    const vertexAlpha = node.vertexBeta()
                    return [vertexAlpha.x, vertexAlpha.y]
                }
            } else if (attr.name === 'in_vertex_gamma') {
                attr.extractAttributeValueFrom = (node: Node) => {
                    const vertexAlpha = node.vertexGamma()
                    return [vertexAlpha.x, vertexAlpha.y]
                }
            }
        })
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
}
