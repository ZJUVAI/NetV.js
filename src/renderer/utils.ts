/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description utility functions for renderer
 */

import { Color } from '../interfaces'

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
    gl.compileShader(shader)
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw new Error('Shader compile failed: ' + gl.getShaderInfoLog(shader))
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
    const fragShader = compileShader(gl, fragShaderStr, gl.FRAGMENT_SHADER)

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
 * create WebGL array buffer given data array
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

/**
 * extract attributes from a shader sring
 * @param {string} shaderStr
 * @returns {RenderAttribute[]} attributes array
 */
export function extractAttributesFromShader(shaderStr: string) {
    const matchings = shaderStr.match(/in\s.*;/g)
    return matchings.map((match, index) => {
        const name = match.split(' ')[2].slice(0, -1)
        const type = match.split(' ')[1]
        let size = 1
        if (type.slice(0, 3) === 'vec') {
            size = Number(type.slice(-1))
        }
        let isBuildIn = false
        if (name === 'inVertexPos') {
            isBuildIn = true
        }
        return {
            name,
            size,
            index,
            isBuildIn
        }
    })
}

/**
 * encode a render id as color to pass in texture
 * @param id render id
 */
export function encodeRenderId(id: number): Color {
    // split a large number by 8-bit: id = concat(a, b, g, r), and normalize them into (0, 1)
    const r = (id & 255) / 255.0
    const g = ((id >> 8) & 255) / 255.0
    const b = ((id >> 16) & 255) / 255.0
    const a = ((id >> 24) & 255) / 255.0
    return { r, g, b, a }
}

/**
 * decode pixel value to number
 * @param pixelVal a pixel's value on texture
 */
export function decodeRenderId(pixelVal: Uint8Array): number {
    // parse normalized parts of id number, bit shift to origin position and concat
    const renderId = pixelVal[0] | (pixelVal[1] << 8) | (pixelVal[2] << 16) | (pixelVal[3] << 24)
    return renderId
}
