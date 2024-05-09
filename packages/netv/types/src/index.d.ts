/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide the entrance of NetV.js.
 * @dependences interfaces.ts, utils/map2.js, node.ts, link.ts
 */
import * as interfaces from './interfaces';
import Map2 from './utils/map2';
import Node from './elements/node';
import Link from './elements/link';
import { Renderer } from './renderer';
import { InteractionManager } from './interaction/interaction';
import * as Utils from './utils/utils';
import { Position } from './interfaces';
export default class NetV {
    static Utils: typeof Utils;
    $_id2node: Map<any, any>;
    $_ends2link: Map2;
    $_sourceId2links: Map<string, Set<Link>>;
    $_targetId2links: Map<string, Set<Link>>;
    $_container: HTMLDivElement;
    $_canvas: HTMLCanvasElement;
    $_renderer: Renderer;
    $_configs: any;
    $_transform: interfaces.Transform;
    $_lazyUpdate: boolean;
    $_interactionManager: InteractionManager;
    private $_data;
    /**
     * @description create NetV object.
     * @param configs configurations of NetV, must include a `container: HTMLDivElement` term
     */
    constructor(configs: any);
    /**
     * get/set canvas's background color
     * @param color
     */
    backgroundColor(color?: interfaces.Color): any;
    /**
     * @description data getter setter
     * @param nodeLinkData? the node-link-data of a graph, provided?setter:getter;
     */
    data(nodeLinkData?: interfaces.NodeLinkData): interfaces.NodeLinkData;
    /**
     * @description initialize and add a node
     * @param nodeData the data of a node, include id, styles...
     */
    addNode(nodeData: interfaces.NodeData): Node;
    /**
     * @description initialize and add a link
     * @param linkData the data of a link, include source, target, and styles...
     */
    addLink(linkData: interfaces.LinkData): any;
    /**
     * @description initialize and add an array of nodes.
     * @param {interfaces.NodeData[]} nodesData: a data array of nodes tobe added
     * @memberof NetV
     */
    addNodes(nodesData: interfaces.NodeData[]): Node[];
    /**
     * @description initialize and add an array of links.
     * @param {interfaces.LinkData[]} linksData: a data array of links tobe added
     * @memberof NetV
     */
    addLinks(linksData: interfaces.LinkData[]): any[];
    /**
     * @description get a Node object from the id2node Map data structure
     * @param id node id
     */
    getNodeById(id: string): any;
    /**
     * @description get a Link object from the ends2link Map2 data structure
     * @param endId1 one end id of the link (source or target)
     * @param endId2 another end id of the link (source or target)
     */
    getLinkByEnds(endId1: string, endId2: string): any;
    /**
     * @description get all nodes
     */
    nodes(): Node[];
    /**
     * @description get all links
     */
    links(): Link[];
    /**
     * @description wipe all the data in the instance
     * @memberof NetV
     */
    wipe(): void;
    /**
     * dispose NetV object, clear all stuffs
     */
    dispose(): void;
    /**
     * @description return build-in dataset according to name
     * @param name dataset name
     */
    loadDataset(name: string): any;
    /**
     * given position, return element on this pixel if exists
     * @param x x pos
     * @param y y pos
     */
    getElementByPosition(position: interfaces.Position): {
        type: 'node' | 'link';
        element: Node | Link;
    } | undefined;
    /**
     * @description draw elements
     */
    draw(): void;
    /**
     * @description transition between different transforms
     */
    transition(transforms: interfaces.Transform[], durationsMS: number[], callback?: (e: any) => {}): void;
    /**
     * pan on canvas to get given node centered
     * @param node
     */
    centerOn(node: Node): interfaces.Transform;
    /**
     * progmatically pan
     * @param x
     * @param y
     */
    panBy(x: number, y: number): interfaces.Transform;
    /**
     * progmatically zoom
     * @param factor zoom factor
     * @param center optional, zoom center position
     */
    zoomBy(factor: number, center?: Position): interfaces.Transform;
    /**
     * get/set netv's transform
     * @param value optional, transform to set
     */
    transform(value?: interfaces.Transform): interfaces.Transform;
    /**
     * @description event listener
     * @memberof NetV
     */
    on(eventName: string, callback: (e: any) => any): void;
    /**
     * @description turn off event listener
     *
     * @memberof NetV
     */
    off(eventName: string, callback?: (e: any) => any): void;
}
declare global {
    interface Window {
        NetV: any;
    }
}
