/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description graph label related class or method
 */
import { NetV } from 'src';
import Node from 'src/node';
import { Transform } from '../interfaces';
export declare class LabelManager {
    private $_core;
    private $_svg;
    private $_offset;
    private $_fontSize;
    private $_strokeWidth;
    constructor(core: NetV);
    /**
     * dispose label's svg
     */
    dispose(): void;
    /**
     * draw all labels
     */
    draw(): void;
    /**
     * update all labels for netv
     */
    update(): void;
    /**
     * remove all labels
     */
    remove(): void;
    /**
     * draw node's label
     * @param node node to add label
     */
    drawLabel(node: Node): void;
    /**
     * remove node's label
     * @param node node to delete label
     */
    removeLabel(node: Node): void;
    /**
     * set viewport transform
     * @param transform
     */
    setTransform(transform: Transform): void;
}
