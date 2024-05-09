/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide a Link class.
 * @dependences interfaces.ts, utils/is.ts
 */
import Node from './node';
import * as interfaces from '../interfaces';
import Element from './element';
declare class Link extends Element {
    shape: (value?: interfaces.LinkShape) => interfaces.LinkShape;
    strokeWidth: (value?: number) => number;
    strokeColor: (value?: interfaces.Color) => interfaces.Color;
    curveness: (value?: number) => number;
    dashInterval: (value?: number) => number;
    $_source: Node;
    $_target: Node;
    private $_elementReservedKeys;
    constructor(core: any, linkData: interfaces.LinkData);
    /**
     * getter/setter of the source
     * @param {Node} [node]
     * @returns {Node} a source Node Object
     * @memberof Link
     */
    source(node?: Node): Node;
    /**
     * getter/setter of the target
     * @param {Node} [node]
     * @returns {Node} a target Node Object
     * @memberof Link
     */
    target(node?: Node): Node;
    /**
     * getter/setter of source and target
     *
     * @param {sourceTargetObj} [{source: Node, target: Node}]
     * @returns Object {source: Node, target: Node}
     * @memberof Link
     */
    sourceTarget(sourceTargetObj?: {
        source: Node;
        target: Node;
    }): {
        source: Node;
        target: Node;
    };
}
export default Link;
