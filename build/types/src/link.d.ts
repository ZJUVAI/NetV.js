/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide a Link class.
 * @dependences interfaces.ts, utils/is.ts
 */
import Node from './node';
import * as interfaces from './interfaces';
declare class Link {
    $_clickCallback: (link: Link) => void;
    $_hoverCallback: (link: Link) => void;
    private $_core;
    private $_source;
    private $_target;
    private $_strokeWidth;
    private $_strokeColor;
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
export default Link;
