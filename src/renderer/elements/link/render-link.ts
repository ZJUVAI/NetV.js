/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description Link used in renderer
 */

import vertShaderStr from './vertex.glsl'
import fragShaderStr from './fragment.glsl'
import idVertShaderStr from './id-vertex.glsl'
import idFragShaderStr from './id-fragment.glsl'
import { encodeRenderId } from '../../utils'

import { LinkAttr, LinkManagerConfigs } from '../../interfaces'
import Link from '../../../elements/link'
import Map2 from '../../../utils/map2'
import { RenderElementManager } from '../element/render-element'

enum LinkAttrKey {
    TEMPLATE,
    SOURCE,
    TARGET,
    WIDTH,
    COLOR
}

enum LinkIdAttrKey {
    TEMPLATE,
    SOURCE,
    TARGET,
    WIDTH,
    COLOR,
    ID
}

const LinkAttrMap = {
    source: LinkAttrKey.SOURCE,
    target: LinkAttrKey.TARGET,
    strokeWidth: LinkAttrKey.WIDTH,
    strokeColor: LinkAttrKey.COLOR
}

export class RenderLinkManager extends RenderElementManager {
    private renderIdToIds: { [key: number]: [string, string] }
    private idsToIndex = new Map2()

    /**
     * create render link manager
     * @param gl WebGL context
     * @param params nessesary configs for link manager
     * @param idTexture texture store elements id of each pixel
     */
    public constructor(
        gl: WebGL2RenderingContext,
        params: LinkManagerConfigs,
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
        this.renderIdToIds = {}
    }

    /**
     * change link's attribute
     * @param link link data
     * @param attribute attribute key to change
     */
    public changeAttribute(link: Link, attribute: LinkAttr) {
        const key = LinkAttrMap[attribute]
        const attr = this.attributes[key]
        const nodes = link.sourceTarget()
        const index = this.idsToIndex.get([nodes.source.id(), nodes.target.id()])
        let data = null
        if (attribute === 'source') {
            const pos = nodes.source.position()
            data = [pos.x, pos.y]
        } else if (attribute === 'target') {
            const pos = nodes.target.position()
            data = [pos.x, pos.y]
        } else if (attribute === 'strokeWidth') {
            data = [link.strokeWidth() * this.pixelRatio]
        } else if (attribute === 'strokeColor') {
            const col = link.strokeColor()
            data = [col.r, col.g, col.b, col.a]
        } else {
            console.error('Link attribute not supported.')
            return // early return, skip following buffer change
        }
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
     * refresh all position of edges
     * @param links all link data
     */
    public refreshPosition(links: Link[]) {
        let count = 0 // TODO: useless count
        links.forEach((link, i) => {
            // TODO: consider link and render link attribute mapping
            const source = link.source()
            const sourcePosition = source.position()
            this.attributes[LinkAttrKey.SOURCE].array[2 * (count + i)] = sourcePosition.x
            this.attributes[LinkAttrKey.SOURCE].array[2 * (count + i) + 1] = sourcePosition.y

            const target = link.target()
            const targetPosition = target.position()
            this.attributes[LinkAttrKey.TARGET].array[2 * (count + i)] = targetPosition.x
            this.attributes[LinkAttrKey.TARGET].array[2 * (count + i) + 1] = targetPosition.y

            // currently no need for color&renderId change
            /*
            this.attributes[LinkAttrKey.WIDTH].array[this.count + i] =
                link.strokeWidth() * this.pixelRatio

            const color = link.strokeColor()
            this.attributes[LinkAttrKey.COLOR].array[4 * (this.count + i)] = color.r
            this.attributes[LinkAttrKey.COLOR].array[4 * (this.count + i) + 1] = color.g
            this.attributes[LinkAttrKey.COLOR].array[4 * (this.count + i) + 2] = color.b
            this.attributes[LinkAttrKey.COLOR].array[4 * (this.count + i) + 3] = color.a

            const renderIdColor = encodeRenderId(2 * (this.count + i) + 1) // NOTE: link render id, use odd integer
            this.idAttributes[LinkIdAttrKey.ID].array[4 * (this.count + i)] = renderIdColor.r
            this.idAttributes[LinkIdAttrKey.ID].array[4 * (this.count + i) + 1] = renderIdColor.g
            this.idAttributes[LinkIdAttrKey.ID].array[4 * (this.count + i) + 2] = renderIdColor.b
            this.idAttributes[LinkIdAttrKey.ID].array[4 * (this.count + i) + 3] = renderIdColor.a
            */
        })

        const sourceAttr = this.attributes[LinkAttrKey.SOURCE]
        const targetAttr = this.attributes[LinkAttrKey.TARGET]

        const arr = [sourceAttr, targetAttr]

        arr.forEach((attr) => {
            if (!attr.isBuildIn) {
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer)
                this.gl.bufferSubData(
                    this.gl.ARRAY_BUFFER,
                    attr.size * count * attr.array.BYTES_PER_ELEMENT,
                    attr.array,
                    attr.size * count,
                    attr.size * links.length
                )
            }
        })
    }

    /**
     * add links data to engine
     * @param links links data
     */
    public addData(links: Link[]) {
        // set array
        links.forEach((link, i) => {
            // TODO: consider link and render link attribute mapping
            const source = link.source()
            const sourcePosition = source.position()
            this.attributes[LinkAttrKey.SOURCE].array[2 * (this.count + i)] = sourcePosition.x
            this.attributes[LinkAttrKey.SOURCE].array[2 * (this.count + i) + 1] = sourcePosition.y

            const target = link.target()
            const targetPosition = target.position()
            this.attributes[LinkAttrKey.TARGET].array[2 * (this.count + i)] = targetPosition.x
            this.attributes[LinkAttrKey.TARGET].array[2 * (this.count + i) + 1] = targetPosition.y

            this.attributes[LinkAttrKey.WIDTH].array[this.count + i] =
                link.strokeWidth() * this.pixelRatio

            const color = link.strokeColor()
            this.attributes[LinkAttrKey.COLOR].array[4 * (this.count + i)] = color.r
            this.attributes[LinkAttrKey.COLOR].array[4 * (this.count + i) + 1] = color.g
            this.attributes[LinkAttrKey.COLOR].array[4 * (this.count + i) + 2] = color.b
            this.attributes[LinkAttrKey.COLOR].array[4 * (this.count + i) + 3] = color.a

            const renderIdColor = encodeRenderId(2 * (this.count + i) + 1) // NOTE: link render id, use odd integer
            this.idAttributes[LinkIdAttrKey.ID].array[4 * (this.count + i)] = renderIdColor.r
            this.idAttributes[LinkIdAttrKey.ID].array[4 * (this.count + i) + 1] = renderIdColor.g
            this.idAttributes[LinkIdAttrKey.ID].array[4 * (this.count + i) + 2] = renderIdColor.b
            this.idAttributes[LinkIdAttrKey.ID].array[4 * (this.count + i) + 3] = renderIdColor.a

            const sourceTarget = link.sourceTarget()
            this.renderIdToIds[2 * (this.count + i) + 1] = [
                sourceTarget.source.id(),
                sourceTarget.target.id()
            ]
            this.idsToIndex.set(
                [sourceTarget.source.id(), sourceTarget.target.id()],
                this.count + i
            )
        })

        this.attributes.forEach((attr) => {
            if (!attr.isBuildIn) {
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer)
                this.gl.bufferSubData(
                    this.gl.ARRAY_BUFFER,
                    attr.size * this.count * attr.array.BYTES_PER_ELEMENT,
                    attr.array,
                    attr.size * this.count,
                    attr.size * links.length
                )
            }
        })

        // id buffer data
        const attr = this.idAttributes[LinkIdAttrKey.ID]
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer)
        this.gl.bufferSubData(
            this.gl.ARRAY_BUFFER,
            attr.size * this.count * attr.array.BYTES_PER_ELEMENT,
            attr.array,
            attr.size * this.count,
            attr.size * links.length
        )

        this.count += links.length
    }

    /**
     * render id to link ids(source and target)
     * @param renderId
     */
    public getIdsByRenderId(renderId: number): [string, string] {
        return this.renderIdToIds[renderId]
    }

    /**
     * draw links
     */
    public draw() {
        if (this.count > 0) {
            this.gl.enable(this.gl.BLEND)
            this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)

            this.gl.useProgram(this.program)
            this.attributes.forEach((attr) => {
                this.gl.enableVertexAttribArray(attr.location)
            })

            this.attributes.forEach((attr, i) => {
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer)
                this.gl.vertexAttribPointer(
                    attr.location,
                    attr.size,
                    this.gl.FLOAT,
                    false,
                    attr.isBuildIn ? 0 : attr.size * attr.array.BYTES_PER_ELEMENT,
                    0
                )
                if (!attr.isBuildIn) this.gl.vertexAttribDivisor(attr.location, 1)
            })
        }

        this.gl.drawArraysInstanced(this.gl.TRIANGLE_STRIP, 0, 4, this.count)

        // draw id
        this.gl.blendFunc(this.gl.ONE, this.gl.ZERO)
        this.gl.useProgram(this.idProgram)
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.idTexture)

        this.idAttributes.forEach((attr) => {
            this.gl.enableVertexAttribArray(attr.location)
        })

        const attr = this.idAttributes[LinkIdAttrKey.ID]
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer)
        this.gl.vertexAttribPointer(
            attr.location,
            attr.size,
            this.gl.FLOAT,
            false,
            attr.size * attr.array.BYTES_PER_ELEMENT,
            0
        )
        this.gl.vertexAttribDivisor(attr.location, 1)

        this.gl.drawArraysInstanced(this.gl.TRIANGLE_STRIP, 0, 4, this.count)
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null)

        this.gl.enable(this.gl.BLEND)
        this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
    }
}
