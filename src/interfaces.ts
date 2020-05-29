import Map2 from './utils/map2.js'

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

export interface Node {
    id: Function
}

export interface Link {
    source: Function
    target: Function
}

export interface Core {
    $_id2node: Map<string, Node>
    $_ends2link: Map2
    data: Function
    addNode: Function
    addLink: Function
    getNodeById: Function
    addNodes: Function
    addLinks: Function
    wipe: Function
}
