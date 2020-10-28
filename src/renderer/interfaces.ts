/**
 * @author Jiacheng Pan <panjiacheng@zju.edu.cn>
 * @description some interfaces for webglrenderer
 */

import { Color } from 'src/interfaces'

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
export interface RenderAttribute {
    name: string
    location: number
    size: number
    isBuildIn?: boolean
    array?: Float32Array
    buffer?: WebGLBuffer
}

export type NodeAttr = 'position' | 'r' | 'fill' | 'strokeWidth' | 'strokeColor'
export type LinkAttr = 'source' | 'target' | 'strokeWidth' | 'strokeColor'

export interface ElementManagerConfigs {
    width: number
    height: number
    limit: number
}

export type NodeManagerConfigs = ElementManagerConfigs
export type LinkManagerConfigs = ElementManagerConfigs

export interface ShaderSeries {
    vertex: string
    fragment: string
    idVertex: string
    idFragment: string
}
