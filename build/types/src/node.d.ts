/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide a Node class.
 * @dependences interfaces.ts, utils/is.ts
 */
import * as interfaces from './interfaces';
import Link from './link';
declare class Node {
    $_clickCallback: (node: Node) => void;
    $_hoverCallback: (node: Node) => void;
    private $_core;
    private $_id;
    private $_position;
    private $_strokeWidth;
    private $_strokeColor;
    private $_fill;
    private $_r;
    private $_showLabel;
    private $_text;
    private $_textOffset;
    constructor(core: any, nodeData: interfaces.NodeData);
    /**
     * getter of private property $_id
     * @memberof Node
     */
    id(): string;
    /**
     * get neighbor nodes for current node
     */
    neighborNodes(): Node[];
    /**
     * get neighbor links for current node
     */
    neighborLinks(): Link[];
    /**
     * set/get x postion
     * @param {number} [value]
     * @memberof Node
     */
    x(value?: number): number;
    /**
     * set/get y postion
     * @param {number} [value]
     * @memberof Node
     */
    y(value?: number): number;
    /**
     * set/get postion
     * @memberof Node
     */
    position(position?: interfaces.Position): {
        x: number;
        y: number;
    };
    /**
     * set/get stroke width of a node
     * @param {number} [value]
     * @memberof Node
     */
    strokeWidth(value?: number): number;
    /**
     * set/get stroke color of a node
     * @param {Color} [value]
     */
    strokeColor(value?: interfaces.Color): interfaces.Color;
    /**
     * set/get fill color of a node
     * @param {Color} [value]
     */
    fill(value?: interfaces.Color): interfaces.Color;
    /**
     * set/get radius of a node
     * @param {number} [r]
     */
    r(value?: number): number;
    /**
     * control label show or not
     * @param value
     */
    showLabel(value: boolean): void;
    /**
     * get/set node's label
     * @param value label text
     */
    text(value?: string): string;
    /**
     * get/set offset value
     * @param value offset value
     * @deprecated not used currently, not support set node's label offset individually
     */
    textOffset(value?: {
        x: number;
        y: number;
    }): {
        x: number;
        y: number;
    };
    /**
     * set the id of this node.
     * it is only used for constructor
     * because a node's id is not allowed to be changed.
     * @private
     * @param {string} value
     * @returns nothing
     * @memberof Node
     */
    private $_setId;
    /**
     * set hover callback function
     * @param callback hover callback function
     */
    private setHoverCallback;
    /**
     * set click callback function
     * @param callback click callback function
     */
    private setClickCallback;
}
export default Node;
