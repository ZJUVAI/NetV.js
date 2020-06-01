/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description Node using in Renderer
 */

export class RNode {
    // program
    private gl: WebGL2RenderingContext
    private limit: number
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
    private dotPosBuffer: WebGLBuffer
    private dotSizeBuffer: WebGLBuffer
    private dotColor: WebGLBuffer

    // arrays
    // prettier-ignore
    private templateArr = new Float32Array([
        -0.5, 0.0, 1.0, 0.0, 0.0,
        0.0, -0.5, 1.0, 1.0, 0.0,
        0.0, 0.5, 1.0, 0.0, 1.0,
        0.5, 0.0, 1.0, 1.0, 1.0
    ])
    private posArr: Float32Array
    private sizeArr: Float32Array
    private colorArr: Float32Array

    public constructor(gl: WebGL2RenderingContext, limit: number) {
        this.gl = gl
        this.limit = limit
    }

    public draw() {}
}
