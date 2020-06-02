/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description utility functions for renderer
 */

/**
 * compile webgl shader
 * @param gl WebGL instance
 * @param shaderStr shader file in string
 * @param shaderType vertex or fragment shader
 */
export function compileShader(
    gl: WebGL2RenderingContext,
    shaderStr: string,
    shaderType: number
): WebGLShader {
    const shader = gl.createShader(shaderType)
    gl.shaderSource(shader, shaderStr)
    gl.compileShader(shaderStr)
    if (!gl.getShaderParameter(shaderStr, gl.COMPILE_STATUS)) {
        throw new Error('Shader compile failed')
    }

    return shader
}

/**
 * generate WebGL program
 * @param gl WebGL instance
 * @param vertShaderStr vertex shader in string format
 * @param fragShaderStr fragment shader in string format
 * @param attributes attributes
 */
export function createProgram(
    gl: WebGL2RenderingContext,
    vertShaderStr: string,
    fragShaderStr: string,
    // TODO: consider generate from shader file
    attributes: { name: string; index: number }[]
): WebGLProgram {
    const vertShader = compileShader(gl, vertShaderStr, gl.VERTEX_SHADER)
    const fragShader = compileShader(gl, fragShaderStr, gl.VERTEX_SHADER)

    const program = gl.createProgram()

    attributes.forEach((attr) => {
        gl.bindAttribLocation(program, attr.index, attr.name)
    })

    gl.attachShader(program, vertShader)
    gl.attachShader(program, fragShader)

    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        throw new Error(`Could not link shaders: ${gl.getProgramInfoLog(program)}`)
    }

    return program
}

/**
 *
 * @param gl WebGL context
 * @param data data to store in buffer
 * @returns WebGL buffer store given data
 */
export function createArrayBuffer(gl: WebGL2RenderingContext, data: Float32Array): WebGLBuffer {
    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.DYNAMIC_DRAW)
    return buffer
}
