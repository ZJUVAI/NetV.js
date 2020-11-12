/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide interfaces.
 * @dependences None
 */
import Node from './node';
import Link from './link';
export interface Color {
    r: number;
    g: number;
    b: number;
    a: number;
}
export interface Position {
    x?: number;
    y?: number;
}
export interface NodeData {
    id: string;
    x?: number;
    y?: number;
    r?: number;
    fill?: Color;
    strokeWidth?: number;
    strokeColor?: Color;
    clickCallback?: (node: Node) => void;
}
export interface LinkData {
    source: string;
    target: string;
    strokeColor?: Color;
    strokeWidth?: number;
    clickCallback?: (link: Link) => void;
}
export interface NodeLinkData {
    nodes: NodeData[];
    links: LinkData[];
}
export interface Transform {
    x: number;
    y: number;
    k: number;
}
