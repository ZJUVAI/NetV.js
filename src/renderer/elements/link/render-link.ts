/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description Link used in renderer
 */

import vertShaderStr from './vertex.glsl'
import fragShaderStr from './fragment.glsl'
import idVertShaderStr from './id-vertex.glsl'
import idFragShaderStr from './id-fragment.glsl'
import {
    createProgram,
    createArrayBuffer,
    extractAttributesFromShader,
    encodeRenderId
} from '../../utils'
import { Transform } from '../../../interfaces'
import { RenderAttribute, LinkAttr, LinkManagerConfigs } from '../../interfaces'
import Link from '../../../link'
import Map2 from '../../../utils/map2'

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

export class RenderLinkManager {
    private gl: WebGL2RenderingContext
    private limit: number
    private count = 0
    private width: number
    private height: number
    private pixelRatio: number
    private program: WebGLProgram
    private attributes: RenderAttribute
    private idProgram: WebGLProgram
    private idAttributes: RenderAttribute
    private idTexture: WebGLTexture
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
        const { limit, width, height } = params
        this.gl = gl
        this.limit = limit
        this.width = width
        this.height = height
        this.pixelRatio = window.devicePixelRatio || 1

        this.attributes = extractAttributesFromShader(vertShaderStr)
        this.program = createProgram(this.gl, vertShaderStr, fragShaderStr, this.attributes)

        this.idAttributes = extractAttributesFromShader(idVertShaderStr)
        this.idProgram = createProgram(this.gl, idVertShaderStr, idFragShaderStr, this.idAttributes)
        this.idTexture = idTexture
        this.renderIdToIds = {}

        // init arrays
        // prettier-ignore
        this.attributes[LinkAttrKey.TEMPLATE].array = new Float32Array([
            -0.5, 0.5, 1.0,
            -0.5, -0.5, 1.0,
            0.5, 0.5, 1.0,
            0.5, -0.5, 1.0,
        ])
        this.attributes.forEach((attr) => {
            if (!attr.isBuildIn) attr.array = new Float32Array(attr.size * this.limit)
        })

        // init buffers
        this.attributes.forEach((attr) => {
            attr.buffer = createArrayBuffer(this.gl, attr.array)
        })

        // init id attributes and buffers
        // TODO: hardcode check, need refactor
        this.idAttributes.forEach((attr, idx) => {
            if (idx < this.attributes.length) {
                this.idAttributes[idx] = this.attributes[idx]
            } else {
                if (!attr.isBuildIn) attr.array = new Float32Array(attr.size * this.limit)
                attr.buffer = createArrayBuffer(this.gl, attr.array)
            }
        })

        // init uniforms
        this.gl.useProgram(this.program)
        const projectionLoc = this.gl.getUniformLocation(this.program, 'projection')
        const scaleLoc = this.gl.getUniformLocation(this.program, 'scale')
        const translateLoc = this.gl.getUniformLocation(this.program, 'translate')

        // this.gl.viewport(0, 0, this.width, this.height) // TODO: viewport set, not needed? put here in case bug appear

        // prettier-ignore
        const projection = new Float32Array([
            2 / this.width, 0, 0,
            0, -2 / this.height, 0,
            -1, 1, 1
        ])
        this.gl.uniformMatrix3fv(projectionLoc, false, projection)

        const scale = new Float32Array([1, 1])
        this.gl.uniform2fv(scaleLoc, scale)

        const translate = new Float32Array([0, 0])
        this.gl.uniform2fv(translateLoc, translate)

        // id uniforms, identical to link
        // TODO: need refactor too
        this.gl.useProgram(this.idProgram)
        const idProjectionLoc = this.gl.getUniformLocation(this.idProgram, 'projection')
        const idScaleLoc = this.gl.getUniformLocation(this.idProgram, 'scale')
        const idTranslateLoc = this.gl.getUniformLocation(this.idProgram, 'translate')

        this.gl.uniformMatrix3fv(idProjectionLoc, false, projection)
        this.gl.uniform2fv(idScaleLoc, scale)
        this.gl.uniform2fv(idTranslateLoc, translate)
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
     * clear link data
     * not actually erase data, but reset count
     */
    public clearData() {
        this.count = 0
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
     * set Transform in Render Link
     * @param transform current transform(pan&zoom condition)
     */
    public setTransform(transform: Transform) {
        this.gl.useProgram(this.program)
        const scaleLoc = this.gl.getUniformLocation(this.program, 'scale')
        const translateLoc = this.gl.getUniformLocation(this.program, 'translate')

        const scale = new Float32Array([transform.k, transform.k])
        this.gl.uniform2fv(scaleLoc, scale)

        const translate = new Float32Array([transform.x, transform.y])
        this.gl.uniform2fv(translateLoc, translate)

        // id uniforms, identical to link
        // TODO: need refactor too
        this.gl.useProgram(this.idProgram)
        const idScaleLoc = this.gl.getUniformLocation(this.idProgram, 'scale')
        const idTranslateLoc = this.gl.getUniformLocation(this.idProgram, 'translate')

        this.gl.uniform2fv(idScaleLoc, scale)
        this.gl.uniform2fv(idTranslateLoc, translate)
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
                this.gl.enableVertexAttribArray(attr.index)
            })

            this.attributes.forEach((attr, i) => {
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer)
                this.gl.vertexAttribPointer(
                    attr.index,
                    attr.size,
                    this.gl.FLOAT,
                    false,
                    attr.isBuildIn ? 0 : attr.size * attr.array.BYTES_PER_ELEMENT,
                    0
                )
                if (!attr.isBuildIn) this.gl.vertexAttribDivisor(attr.index, 1)
            })
        }

        this.gl.drawArraysInstanced(this.gl.TRIANGLE_STRIP, 0, 4, this.count)

        // draw id
        this.gl.blendFunc(this.gl.ONE, this.gl.ZERO)
        this.gl.useProgram(this.idProgram)
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.idTexture)

        this.idAttributes.forEach((attr) => {
            this.gl.enableVertexAttribArray(attr.index)
        })

        const attr = this.idAttributes[LinkIdAttrKey.ID]
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer)
        this.gl.vertexAttribPointer(
            attr.index,
            attr.size,
            this.gl.FLOAT,
            false,
            attr.size * attr.array.BYTES_PER_ELEMENT,
            0
        )
        this.gl.vertexAttribDivisor(attr.index, 1)

        this.gl.drawArraysInstanced(this.gl.TRIANGLE_STRIP, 0, 4, this.count)
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null)

        this.gl.enable(this.gl.BLEND)
        this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
    }
}
