/**
 * @author Jiacheng Pan <panjiacheng@zju.edu.cn>
 * @description some interfaces for webglrenderer
 */

import { Color } from 'src/interfaces'

export interface Transform {
    x: number
    y: number
    k: number
}

export interface RendererConfigs {
    canvas: HTMLCanvasElement
    width: number
    height: number
    backgroundColor: Color
    nodeLimit: number
    linkLimit: number
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

export type NodeAttr = 'position' | 'radius' | 'fill' | 'strokeWidth' | 'strokeColor'
export type LinkAttr = 'source' | 'target' | 'strokeWidth' | 'strokeColor'

interface ElementManagerConfigs {
    width: number
    height: number
    limit: number
}

export type NodeManagerConfigs = ElementManagerConfigs
export type LinkManagerConfigs = ElementManagerConfigs
