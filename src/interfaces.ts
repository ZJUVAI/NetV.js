/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide interfaces.
 * @dependences None
 */

import Node from './elements/node'
import Link from './elements/link'

export interface Color {
    r: number
    g: number
    b: number
    a: number
}

export interface Position {
    x?: number
    y?: number
}

export type NodeShape = 'circle' | 'rect' | 'triangle' | 'cross'

export interface NodeStyle {
    shape?: NodeShape
    offset?: Position
    fill?: Color
    strokeWidth?: number
    strokeColor?: Color
    rotate?: number
    /* circle shape styles */
    r?: number
    /* rect shape styles */
    width?: number
    height?: number
    /* triangle shape styles */
    vertexAlpha?: Position
    vertexBeta?: Position
    vertexGamma?: Position
    /* cross shape styles */
    innerWidth?: number
    innerHeight?: number
}

export interface NodeData {
    id: string
    x?: number
    y?: number
    style?: NodeStyle
    clickCallback?: (node: Node) => void
    hoverCallback?: (node: Node) => void
}

export type LinkShape = 'line' | 'curve' | 'dash-line'

export interface LinkStyle {
    shape?: LinkShape
    strokeWidth?: number
    strokeColor?: Color
    /* curve shape */
    curveness?: number
    
    dashInterval?: number
}

export interface LinkData {
    source: string
    target: string
    style?: LinkStyle
    clickCallback?: (link: Link) => void
    hoverCallback?: (link: Link) => void
}

export interface NodeLinkData {
    nodes: NodeData[]
    links: LinkData[]
}

export interface Transform {
    x: number
    y: number
    k: number
}
