/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description utility functions for renderer
 */
import { Color } from '../interfaces';
import { Variable, RenderAttribute } from './interfaces';
/**
 * compile webgl shader
 * @param gl WebGL instance
 * @param shaderStr shader file in string
 * @param shaderType vertex or fragment shader
 */
export declare function compileShader(gl: WebGL2RenderingContext, shaderStr: string, shaderType: number): WebGLShader;
/**
 * generate WebGL program
 * @param gl WebGL instance
 * @param vertShaderStr vertex shader in string format
 * @param fragShaderStr fragment shader in string format
 * @param attributes attributes
 */
export declare function createProgram(gl: WebGL2RenderingContext, vertShaderStr: string, fragShaderStr: string, attributes: Map<string, RenderAttribute>): WebGLProgram;
/**
 * create WebGL array buffer given data array
 * @param gl WebGL context
 * @param data data to store in buffer
 * @returns WebGL buffer store given data
 */
export declare function createArrayBuffer(gl: WebGL2RenderingContext, data: Float32Array): WebGLBuffer;
/**
 * extract attributes from a shader sring
 * @param {string} shaderStr
 * @returns {RenderAttribute[]} attributes array
 */
export declare function extractAttributesFromShader(shader: Shader): Map<string, RenderAttribute>;
/**
 * encode a render id as color to pass in texture
 * @param id render id
 */
export declare function encodeRenderId(id: number): Color;
/**
 * decode pixel value to number
 * @param pixelVal a pixel's value on texture
 */
export declare function decodeRenderId(pixelVal: Uint8Array): number;
export declare class Shader {
    inputs: Variable;
    outputs: Variable;
    uniforms: Variable;
    methods: string[][];
    main: string[];
    private header;
    copy(): Shader;
    connect(): string;
}
