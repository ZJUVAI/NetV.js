export interface Transform {
    x: number
    y: number
    k: number
}

/**
 * attribute used in render node and render link
 * contains attribute index, array and buffer
 */
export type RenderAttribute = {
    name: string
    index: number
    size: number
    isBuildIn?: boolean
    array?: Float32Array
    buffer?: WebGLBuffer
}[]
