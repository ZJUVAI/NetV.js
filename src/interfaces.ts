/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide interfaces.
 * @dependences None
 */

export interface Color {
    r: number
    g: number
    b: number
    a: number
}

export interface NodeData {
    id: string
    x?: number
    y?: number
    r?: number
    fill?: Color
    strokeWidth?: number
    strokeColor?: Color
}

export interface LinkData {
    source: string
    target: string
    strokeColor?: Color
    strokeWidth?: number
}

export interface NodeLinkData {
    nodes: NodeData[]
    links: LinkData[]
}
