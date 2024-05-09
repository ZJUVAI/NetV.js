/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide a Node class.
 * @dependences interfaces.ts, utils/is.ts
 */
import * as interfaces from '../interfaces';
import Link from './link';
import Element from './element';
declare class Node extends Element {
    shape: (value?: interfaces.NodeShape) => interfaces.NodeShape;
    offset: (value?: interfaces.Position) => interfaces.Position;
    strokeWidth: (value?: number) => number;
    strokeColor: (value?: interfaces.Color) => interfaces.Color;
    fill: (value?: interfaces.Color) => interfaces.Color;
    r?: (value?: number) => number;
    width?: (value?: number) => number;
    height?: (value?: number) => number;
    rotate?: (value?: number) => number;
    vertexAlpha: (value?: interfaces.Position) => interfaces.Position;
    vertexBeta: (value?: interfaces.Position) => interfaces.Position;
    vertexGamma: (value?: interfaces.Position) => interfaces.Position;
    innerHeight: (value?: number) => number;
    innerWidth: (value?: number) => number;
    $_position: {
        x: number;
        y: number;
    };
    $_dragstartCallbackSet: Set<(e: any) => void>;
    $_draggingCallbackSet: Set<(e: any) => void>;
    $_dragendCallbackSet: Set<(e: any) => void>;
    $_id: string;
    private $_elementReservedKeys;
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
     * set the id of this node.
     * it is only used for constructor
     * because a node's id is not allowed to be changed.
     * @private
     * @param {string} value
     * @returns nothing
     * @memberof Node
     */
    private $_setId;
}
export default Node;
