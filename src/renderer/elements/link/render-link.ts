/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description Link used in renderer
 */

import vertShaderStr from './vertex.glsl'
import fragShaderStr from './fragment.glsl'
import { RenderAttribute, createProgram, createArrayBuffer, Transform } from '../../utils'
import Link from '../../../link'

enum LinkAttrKey {
    TEMPLATE,
    SOURCE,
    TARGET,
    WIDTH,
    COLOR
}

export class RenderLink {
    private gl: WebGL2RenderingContext
    private limit: number
    private count = 0
    private width: number
    private height: number
    private program: WebGLProgram
    private attributes: RenderAttribute

    public constructor(gl: WebGL2RenderingContext, width: number, height: number, limit: number) {
        this.gl = gl
        this.limit = limit
        this.width = width
        this.height = height

        this.attributes = [
            {
                name: 'inVertexPos',
                index: 0,
                size: 3,
                isBuildIn: true
            },
            {
                name: 'inSource',
                index: 1,
                size: 2
            },
            {
                name: 'inTarget',
                index: 2,
                size: 2
            },
            {
                name: 'inWidth',
                index: 3,
                size: 1
            },
            {
                name: 'inColor',
                index: 4,
                size: 4
            }
        ]

        this.program = createProgram(this.gl, vertShaderStr, fragShaderStr, this.attributes)

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
            this.attributes[LinkAttrKey.SOURCE].array[2 * (this.count + i)] = source.x()
            this.attributes[LinkAttrKey.SOURCE].array[2 * (this.count + i) + 1] = source.y()

            const target = link.target()
            this.attributes[LinkAttrKey.TARGET].array[2 * (this.count + i)] = target.x()
            this.attributes[LinkAttrKey.TARGET].array[2 * (this.count + i) + 1] = target.y()

            this.attributes[LinkAttrKey.WIDTH].array[this.count + i] = link.strokeWidth()

            const color = link.strokeColor()
            this.attributes[LinkAttrKey.COLOR].array[4 * (this.count + i)] = color.r
            this.attributes[LinkAttrKey.COLOR].array[4 * (this.count + i) + 1] = color.g
            this.attributes[LinkAttrKey.COLOR].array[4 * (this.count + i) + 2] = color.b
            this.attributes[LinkAttrKey.COLOR].array[4 * (this.count + i) + 3] = color.a
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

        this.count += links.length
    }

    /**
     * set Transform in Render Node
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
    }

    /**
     * draw links
     */
    public draw() {
        if (this.count > 0) {
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
    }
}
