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

export interface NodeStyle {
    shape?: string
    r?: number // for circle
    width?: number // for rect
    height?: number // for rect
    x?: number // offset
    y?: number // offset
    fill?: Color
    strokeWidth?: number
    strokeColor?: Color
}

export interface NodeData {
    id: string
    x?: number
    y?: number
    style?: NodeStyle
    clickCallback?: (node: Node) => void
    hoverCallback?: (node: Node) => void
}

export interface LinkStyle {
    shape?: string
    strokeWidth?: number
    strokeColor?: Color
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
