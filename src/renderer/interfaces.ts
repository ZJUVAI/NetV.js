/**
 * @author Jiacheng Pan <panjiacheng@zju.edu.cn>
 * @description some interfaces for webglrenderer
 */

import Node from '../elements/node'
import Link from '../elements/link'
import { Color } from '../interfaces'
import { Shader } from './utils'

export interface RendererConfigs {
    canvas: HTMLCanvasElement
    width: number
    height: number
    backgroundColor: Color
    nodeLimit: number
    linkLimit: number
    getAllNodes: () => Node[]
    getAllLinks: () => Link[]
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
    extractAttributeValueFrom: (element: Node | Link) => number[]
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

export interface Shaders {
    [index: string]: Shader
}

export interface Variable {
    [index: string]: 'float' | 'vec2' | 'vec3' | 'vec4' | 'mat3'
}
