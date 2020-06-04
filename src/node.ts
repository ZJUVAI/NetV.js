/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide a Node class.
 * @dependences interfaces.ts, utils/is.ts
 */

import * as interfaces from './interfaces'
import { isValidId } from './utils/is'
import { NetV } from './index'
import * as configs from './configs'

class Node {
    private $_id = ''
    private $_core: NetV = undefined
    private $_position = {
        x: 0,
        y: 0
    }
    private $_strokeWidth = configs.node.storkeWidth
    private $_strokeColor = configs.node.strokeColor
    private $_fill = configs.node.fill
    private $_r = configs.node.r

    public constructor(core, nodeData: interfaces.NodeData) {
        this.$_core = core
        this.$_setId(nodeData.id) // set id

        const position = {
            x: 'x' in nodeData ? nodeData.x : 0,
            y: 'y' in nodeData ? nodeData.y : 0
        }
        const strokeWidth =
            'strokeWidth' in nodeData ? nodeData.strokeWidth : configs.node.storkeWidth
        const strokeColor =
            'strokeColor' in nodeData ? nodeData.strokeColor : configs.node.strokeColor
        const fill = 'fill' in nodeData ? nodeData.fill : configs.node.fill
        const radius = 'r' in nodeData ? nodeData.r : configs.node.r

        this.position(position.x, position.y)
        this.strokeWidth(strokeWidth)
        this.strokeColor(strokeColor)
        this.fill(fill)
        this.r(radius)
    }

    /**
     * getter of private property $_id
     * @memberof Node
     */
    public get id() {
        return this.$_id
    }

    /**
     * set/get x postion
     * @param {number} [value]
     * @memberof Node
     */
    public x(value?: number) {
        if (arguments.length !== 0) {
            this.$_position.x = value
        }
        return this.$_position.x
    }

    /**
     * set/get y postion
     * @param {number} [value]
     * @memberof Node
     */
    public y(value?: number) {
        if (arguments.length !== 0) {
            this.$_position.y = value
        }
        return this.$_position.y
    }

    /**
     * set/get postion
     * @param {number} [value]
     * @memberof Node
     */
    public position(x?: number, y?: number) {
        if (arguments.length === 2) {
            this.$_position.x = x
            this.$_position.y = y
        } else if (arguments.length !== 0 && arguments.length !== 2) {
            throw Error(`Node.position() method can not deal with ${arguments.length} parameters.`)
        }
        return this.$_position
    }

    /**
     * set/get stroke width of a node
     * @param {number} [value]
     * @memberof Node
     */
    public strokeWidth(value?: number) {
        if (arguments.length === 1) {
            this.$_strokeWidth = value
        }
        return this.$_strokeWidth
    }

    /**
     * set/get stroke color of a node
     * @param {Color} [value]
     */
    public strokeColor(value?: interfaces.Color) {
        if (arguments.length === 1) {
            this.$_strokeColor = value
        }
        return this.$_strokeColor
    }

    /**
     * set/get fill color of a node
     * @param {Color} [value]
     */
    public fill(value?: interfaces.Color) {
        if (arguments.length === 1) {
            this.$_fill = value
        }
        return this.$_fill
    }

    /**
     * set/get radius of a node
     * @param {number} [r]
     */
    public r(value?: number) {
        if (arguments.length === 1) {
            this.$_r = value
        }
        return this.$_r
    }

    /**
     * set the id of this node.
     * it is only used for constructor
     * because a node's id is not allowed to be changed.
     * @private
     * @param {string} value
     * @returns nothing
     * @memberof Node
     */
    private $_setId(value: string) {
        if (isValidId(value)) {
            if (this.$_core.$_id2node.has(value)) {
                throw new Error(`Duplicate node (${value}) is not allowed.`)
            }
            if (isValidId(this.$_id)) {
                throw new Error('Can not change the id of an exist node.')
            }
            this.$_core.$_id2node.set(value, this)
            this.$_id = value
        } else {
            throw new Error(`Invalid ID ${value}`)
        }
    }
}

export default Node
