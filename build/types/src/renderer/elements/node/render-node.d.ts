/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description Node using in Renderer
 */
import { Transform } from '../../../interfaces';
import { NodeAttr, NodeManagerConfigs } from '../../interfaces';
import Node from '../../../node';
export declare class RenderNodeManager {
    private gl;
    private limit;
    private count;
    private width;
    private height;
    private pixelRatio;
    private program;
    private attributes;
    private idProgram;
    private idAttributes;
    private idTexture;
    private renderIdToId;
    private idToIndex;
    /**
     * create render node manager
     * @param gl WebGL context
     * @param params nessesary configs for node manager
     * @param idTexture texture store elements id of each pixel
     */
    constructor(gl: WebGL2RenderingContext, params: NodeManagerConfigs, idTexture: WebGLTexture);
    /**
     * set Transform in Render Node
     * @param transform current transform(pan&zoom condition)
     */
    setTransform(transform: Transform): void;
    /**
     * change node's attribute
     * @param node node data
     * @param attribute attribute key to change
     */
    changeAttribute(node: Node, attribute: NodeAttr): void;
    /**
     * refresh all nodes position after lazy update
     * @param nodes all node data
     */
    refreshPosition(nodes: Node[]): void;
    /**
     * clear node data
     * not actually erase data, but reset count
     */
    clearData(): void;
    /**
     * add nodes data to engine
     * @param nodes nodes data
     */
    addData(nodes: Node[]): void;
    /**
     * render id to id
     * @param renderId render id in number
     */
    getIdByRenderId(renderId: number): string;
    /**
     * draw nodes
     */
    draw(): void;
}
