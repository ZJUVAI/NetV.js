/**
 * @description render graph using webgl
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 */
import Node from '../elements/node';
import Link from '../elements/link';
import { RenderNodeManager } from './elements/render-node';
import { RenderLinkManager } from './elements/render-link';
import { Transform, Position, Color } from '../interfaces';
import { RendererConfigs } from './interfaces';
export declare class Renderer {
    nodeManager: RenderNodeManager;
    linkManager: RenderLinkManager;
    modifiedElementsCount: number;
    shouldLazyUpdate: boolean;
    pixelRatio: number;
    private gl;
    private backgroundColor;
    private width;
    private height;
    private idTexture;
    private getAllNodes;
    private getAllLinks;
    /**
     * create renderer object
     * @param configs {canvas: HTMLCanvasElement, width: number, height: number, backgroundColor: Color, defaultConfigs: Object} configs passed to renderer
     */
    constructor(configs: RendererConfigs);
    /**
     * dispose renderer stuffs
     */
    dispose(): void;
    /**
     * set clearColor for renderer
     * @param color
     */
    setBackgroundColor(color: Color): void;
    /**
     * clear data in renderer
     */
    clearData(): void;
    /**
     * add nodes to node manager
     * @param nodes node data in NetV
     */
    addNodes(nodes: Node[]): void;
    /**
     * add links to link manager
     * @param links link data in NetV
     */
    addLinks(links: Link[]): void;
    setTransform(transform: Transform): void;
    /**
     * draw all elements
     */
    draw(): void;
    /**
     * get element's id at (x, y) of canvas if exists
     * @param x x pos
     * @param y y pos
     */
    getIdByPosition(position: Position): string | [string, string];
    /**
     * read pixel value at (x, y) of texture
     * @param x x pos
     * @param y y pos
     */
    readIdTexture(position: Position): number;
    /**
     * increase modified elements count
     * When it is larger than a threshold, the lazy update mode will be turned on.
     */
    increaseModifiedElementsCountBy(n: number): void;
    /**
     * init WebGL texture for recording position of elements
     */
    private initIdTexture;
}
