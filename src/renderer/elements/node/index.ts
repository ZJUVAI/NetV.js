/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description Node using in Renderer
 */

import { vertShaderStr, fragShaderStr } from './shader'
import { createProgram, createArrayBuffer } from '../utils'

export class RNode {
    // program
    private gl: WebGL2RenderingContext
    private limit: number
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
        const program = createProgram(this.gl, vertShaderStr, fragShaderStr, attributes)

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
        const scaleLoc = this.gl.getUniformLocation(this.program, 'projection')
        const translateLoc = this.gl.getUniformLocation(this.program, 'projection')
        const viewportLoc = this.gl.getUniformLocation(this.program, 'projection')

        const projection = new Float32Array([2 / this.width, 0, 0, 0, -2 / this.height, 0, -1, 1, 1])
        this.gl.uniformMatrix3fv(projectionLoc, false, projection)
    }

    public draw() {}
}
