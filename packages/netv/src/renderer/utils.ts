/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description utility functions for renderer
 */

import { Color } from '../interfaces'
import { Variable, RenderAttribute } from './interfaces'

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
    attributes: Map<string, RenderAttribute>
): WebGLProgram {
    const vertShader = compileShader(gl, vertShaderStr, gl.VERTEX_SHADER)
    const fragShader = compileShader(gl, fragShaderStr, gl.FRAGMENT_SHADER)

    const program = gl.createProgram()

    attributes.forEach((attr) => {
        gl.bindAttribLocation(program, attr.location, attr.name)
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
export function extractAttributesFromShader(shader: Shader): Map<string, RenderAttribute> {
    // const matchings = shaderStr.match(/in\s.*;/g)
    const inputs = shader.inputs
    const attributesMap = new Map()
    Object.entries(inputs).forEach(([name, type], location) => {
        let size = 1
        if (type.slice(0, 3) === 'vec') {
            size = Number(type.slice(-1))
        }
        let isBuildIn = false
        if (name === 'inVertexPos') {
            // an instance is formed by two triangles,
            // thus we need four point positions to initial the instance
            // more details: https://panjiacheng.site/wiki/2019/06/06/webGL/WebGL-BatchDraw%E4%BB%A3%E7%A0%81%E9%98%85%E8%AF%BB+%E7%90%86%E8%A7%A3/
            isBuildIn = true
        }
        attributesMap.set(name, {
            name,
            size, // the space of one attribute, e.g. vec3 ocuppies 3 units of space
            location, // the appearance order of one attribute in the shader code, which is equal to the result of getAttribLocation
            isBuildIn, // which means four vertices in one element: inVertexPos
            extractAttributeValueFrom: () => [] // a function which is use to append an element into the array of this attribute
        })
    })
    // matchings.forEach((match, location) => {
    //     const name = match.split(' ')[2].slice(0, -1)
    //     const type = match.split(' ')[1]
    //     let size = 1
    //     if (type.slice(0, 3) === 'vec') {
    //         size = Number(type.slice(-1))
    //     }
    //     let isBuildIn = false
    //     if (name === 'inVertexPos') {
    //         // an instance is formed by two triangles,
    //         // thus we need four point positions to initial the instance
    //         // more details: https://panjiacheng.site/wiki/2019/06/06/webGL/WebGL-BatchDraw%E4%BB%A3%E7%A0%81%E9%98%85%E8%AF%BB+%E7%90%86%E8%A7%A3/
    //         isBuildIn = true
    //     }
    //     attributesMap.set(name, {
    //         name,
    //         size, // the space of one attribute, e.g. vec3 ocuppies 3 units of space
    //         location, // the appearance order of one attribute in the shader code, which is equal to the result of getAttribLocation
    //         isBuildIn, // which means four vertices in one element: inVertexPos
    //         extractAttributeValueFrom: () => [] // a function which is use to append an element into the array of this attribute
    //     })
    // })
    return attributesMap
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

export class Shader {
    public inputs: Variable = {}
    public outputs: Variable = {}
    public uniforms: Variable = {}
    public methods: string[][] = [[]]
    public main: string[] = []
    private header = `#version 300 es\nprecision highp float;\n`
    public copy() {
        const copyShader = new Shader()
        copyShader.inputs = { ...this.inputs }
        copyShader.outputs = { ...this.outputs }
        copyShader.uniforms = { ...this.uniforms }
        copyShader.main = this.main.map((str) => str)
        copyShader.methods = this.methods.map((method) => method.map((str) => str))
        return copyShader
    }
    public connect() {
        const variablesPrefix = [
            { prefix: 'in', variables: this.inputs },
            { prefix: 'out', variables: this.outputs },
            { prefix: 'uniform', variables: this.uniforms }
        ]
        const variableDefinitions = variablesPrefix
            .map((variablePrefix) =>
                Object.entries(variablePrefix.variables)
                    .map(([name, type]) => {
                        return `${variablePrefix.prefix} ${type} ${name};\n`
                    })
                    .join('')
            )
            .join('')

        return (
            this.header +
            variableDefinitions +
            this.methods.map((method) => method.join('\n')).join('\n') +
            '\n' +
            this.main.join('\n')
        )
    }
}
