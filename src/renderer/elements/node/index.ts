/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description Node using in Renderer
 */

import { Node } from '../../../interfaces'
import vertShaderStr from './vertex.glsl'
import fragShaderStr from './fragment.glsl'
import { createProgram, createArrayBuffer } from '../../utils'

export class RNode {
    // program
    private gl: WebGL2RenderingContext
    private limit: number
    private count = 0
    private width: number
    private height: number
    private program: WebGLProgram

    // attributes
    // TODO: consider export from shader
    private templateAttr = 0
    private posAttr = 1
    private sizeAttr = 2
    private colorAttr = 3

    // uniforms

    // buffers
    private templateBuffer: WebGLBuffer
    private posBuffer: WebGLBuffer
    private sizeBuffer: WebGLBuffer
    private colorBuffer: WebGLBuffer

    // arrays
    private templateArr: Float32Array
    private posArr: Float32Array
    private sizeArr: Float32Array
    private colorArr: Float32Array

    public constructor(gl: WebGL2RenderingContext, width: number, height: number, limit: number) {
        this.gl = gl
        this.limit = limit
        this.width = width
        this.height = height

        const attributes = [
            {
                name: 'inVertexPos',
                index: this.templateAttr
            },
            {
                name: 'inPos',
                index: this.posAttr
            },
            {
                name: 'inSize',
                index: this.sizeAttr
            },
            {
                name: 'inColor',
                index: this.colorAttr
            }
        ]

        this.program = createProgram(this.gl, vertShaderStr, fragShaderStr, attributes)

        // init arrays
        // prettier-ignore
        this.templateArr = new Float32Array([
            -0.5, 0.0, 1.0, 0.0, 0.0,
            0.0, -0.5, 1.0, 1.0, 0.0,
            0.0, 0.5, 1.0, 0.0, 1.0,
            0.5, 0.0, 1.0, 1.0, 1.0
        ])
        this.posArr = new Float32Array(2 * limit)
        this.sizeArr = new Float32Array(1 * limit)
        this.colorArr = new Float32Array(4 * limit)

        // init buffers
        this.templateBuffer = createArrayBuffer(this.gl, this.templateArr)
        this.posBuffer = createArrayBuffer(this.gl, this.posArr)
        this.sizeBuffer = createArrayBuffer(this.gl, this.sizeArr)
        this.colorBuffer = createArrayBuffer(this.gl, this.colorArr)

        // init uniforms
        this.gl.useProgram(this.program)
        const projectionLoc = this.gl.getUniformLocation(this.program, 'projection')
        const scaleLoc = this.gl.getUniformLocation(this.program, 'scale')
        const translateLoc = this.gl.getUniformLocation(this.program, 'translate')
        const viewportLoc = this.gl.getUniformLocation(this.program, 'viewport')

        this.gl.viewport(0, 0, this.width, this.height) // TODO: viewport set

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

        const viewport = new Float32Array([this.width, this.height])
        this.gl.uniform2fv(viewportLoc, viewport)
    }

    public addData(nodes: Node[]) {
        // set array
        nodes.forEach((node, i) => {
            this.posArr[2 * (this.count + i)] = node.x
            this.posArr[2 * (this.count + i) + 1] = node.y

            this.sizeArr[this.count + i] = node.r

            this.colorArr[4 * (this.count + i)] = node.fill.r
            this.colorArr[4 * (this.count + i) + 1] = node.fill.g
            this.colorArr[4 * (this.count + i) + 2] = node.fill.b
            this.colorArr[4 * (this.count + i) + 3] = node.fill.a
        })

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.posBuffer)
        this.gl.bufferSubData(
            this.gl.ARRAY_BUFFER,
            2 * this.count * this.posArr.BYTES_PER_ELEMENT,
            this.posArr,
            2 * this.count,
            2 * nodes.length
        )

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.sizeBuffer)
        this.gl.bufferSubData(
            this.gl.ARRAY_BUFFER,
            this.count * this.posArr.BYTES_PER_ELEMENT,
            this.sizeArr,
            this.count,
            nodes.length
        )

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorBuffer)
        this.gl.bufferSubData(
            this.gl.ARRAY_BUFFER,
            4 * this.count * this.posArr.BYTES_PER_ELEMENT,
            this.colorArr,
            4 * this.count,
            4 * nodes.length
        )

        this.count += nodes.length
    }

    public draw() {
        this.gl.clear(this.gl.COLOR_BUFFER_BIT)
        if (this.count > 0) {
            this.gl.useProgram(this.program)

            this.gl.enableVertexAttribArray(this.templateAttr)
            this.gl.enableVertexAttribArray(this.posAttr)
            this.gl.enableVertexAttribArray(this.sizeAttr)
            this.gl.enableVertexAttribArray(this.colorAttr)

            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.templateBuffer)
            this.gl.vertexAttribPointer(
                this.templateAttr,
                3,
                this.gl.FLOAT,
                false,
                5 * this.templateArr.BYTES_PER_ELEMENT,
                0
            )

            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.posBuffer)
            this.gl.vertexAttribPointer(
                this.posAttr,
                2,
                this.gl.FLOAT,
                false,
                2 * this.posArr.BYTES_PER_ELEMENT,
                0
            )
            this.gl.vertexAttribDivisor(this.posAttr, 1) // TODO: attribDivisor's usage

            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.sizeBuffer)
            this.gl.vertexAttribPointer(
                this.sizeAttr,
                1,
                this.gl.FLOAT,
                false,
                1 * this.sizeArr.BYTES_PER_ELEMENT,
                0
            )
            this.gl.vertexAttribDivisor(this.sizeAttr, 1)

            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorBuffer)
            this.gl.vertexAttribPointer(
                this.colorAttr,
                4,
                this.gl.FLOAT,
                false,
                4 * this.colorAttr.BYTES_PER_ELEMENT,
                0
            )
            this.gl.vertexAttribDivisor(this.colorAttr, 1)
        }

        this.gl.drawArraysInstanced(this.gl.TRIANGLE_STRIP, 0, 4, this.count)
    }
}
