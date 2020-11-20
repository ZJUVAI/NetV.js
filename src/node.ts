/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide a Node class.
 * @dependences interfaces.ts, utils/is.ts
 */

import * as interfaces from './interfaces'
import { isValidId } from './utils/is'
import { NetV } from './index'
import { LinkAttr } from './renderer/interfaces'
import Link from './link'

class Node {
    public $_clickCallback: (node: Node) => void
    public $_hoverCallback: (node: Node) => void

    private $_core: NetV
    private $_id: string
    private $_position = {
        x: 0,
        y: 0
    }
    private $_strokeWidth: number
    private $_strokeColor: interfaces.Color
    private $_fill: interfaces.Color
    private $_r: number // radius
    private $_showLabel: boolean
    private $_text: string
    private $_textOffset: { x: number; y: number } // NOTE: deprecated, current not used

    public constructor(core, nodeData: interfaces.NodeData) {
        this.$_core = core
        const defaultConfigs = this.$_core.$_configs
        const data = {
            ...{
                x: this.$_position.x,
                y: this.$_position.y,
                strokeWidth: defaultConfigs.node.strokeWidth,
                strokeColor: defaultConfigs.node.strokeColor,
                r: defaultConfigs.node.r,
                fill: defaultConfigs.node.fill,
                showLabel: defaultConfigs.node.showLabel,
                text: defaultConfigs.node.text,
                clickCallback: defaultConfigs.node.clickCallback,
                hoverCallback: defaultConfigs.node.hoverCallback
            },
            ...nodeData
        }

        this.$_setId(data.id)
        this.$_position = {
            x: data.x,
            y: data.y
        }
        this.$_strokeWidth = data.strokeWidth
        this.$_strokeColor = data.strokeColor
        this.$_fill = data.fill
        this.$_r = data.r
        this.$_showLabel = data.showLabel
        this.$_text = data.text

        if (this.$_showLabel) {
            this.showLabel(true)
        }

        this.setClickCallback(data.clickCallback)
        this.setHoverCallback(data.hoverCallback)
    }

    /**
     * getter of private property $_id
     * @memberof Node
     */
    public id() {
        return this.$_id
    }

    /**
     * get neighbor nodes for current node
     */
    public neighborNodes() {
        // NOTE: currently API not intent to support directed graph
        const nodeSet = new Set()
        this.$_core.$_sourceId2links.get(this.$_id).forEach((link) => {
            nodeSet.add(link.$_target)
        })

        this.$_core.$_targetId2links.get(this.$_id).forEach((link) => {
            nodeSet.add(link.$_source)
        })

        return Array.from(nodeSet)
    }

    /**
     * get neighbor links for current node
     */
    public neighborLinks() {
        // NOTE: currently API not intent to support directed graph
        const linkSet = new Set([
            ...this.$_core.$_sourceId2links.get(this.$_id),
            ...this.$_core.$_targetId2links.get(this.$_id)
        ])
        return Array.from(linkSet)
    }

    /**
     * set/get x postion
     * @param {number} [value]
     * @memberof Node
     */
    public x(value?: number) {
        if (arguments.length > 0) {
            this.position({
                x: value
            })
        }
        return this.$_position.x
    }

    /**
     * set/get y postion
     * @param {number} [value]
     * @memberof Node
     */
    public y(value?: number) {
        if (arguments.length > 0) {
            this.position({
                y: value
            })
        }
        return this.$_position.y
    }

    /**
     * set/get postion
     * @memberof Node
     */
    public position(position?: interfaces.Position) {
        let linkSets = {}

        // e.g. setOnePosition('x', 1) means set x position with value 1
        const setOnePosition = (key, value) => {
            this.$_position[key] = value // key: 'x' or 'y'
            Object.entries(linkSets).forEach((entry) => {
                // entry[0]: 'source' / 'target'
                // entry[1]: the link set
                const key = entry[0] as LinkAttr
                const set = entry[1] as Set<Link>
                if (set) {
                    this.$_core.$_addModifiedLinkCount(set.size)
                    for (const link of set) {
                        this.$_core.$_renderer.linkManager.changeAttribute(link, key)
                    }
                }
            })
        }

        if (arguments.length > 0 && ('x' in position || 'y' in position)) {
            if (this.$_core.$_lazyUpdate) {
                if ('x' in position) {
                    this.$_position['x'] = position.x
                }
                if ('y' in position) {
                    this.$_position['y'] = position.y
                }
                return this.$_position
            }
            linkSets = {
                // find links from/to this node
                source: this.$_core.$_sourceId2links.get(this.$_id),
                target: this.$_core.$_targetId2links.get(this.$_id)
            }
            if ('x' in position) {
                setOnePosition('x', position.x)
            }
            if ('y' in position) {
                setOnePosition('y', position.y)
            }
            this.$_core.$_renderer.nodeManager.changeAttribute(this, 'position')
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
            this.$_core.$_renderer.nodeManager.changeAttribute(this, 'strokeWidth')
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
            this.$_core.$_renderer.nodeManager.changeAttribute(this, 'strokeColor')
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
            this.$_core.$_renderer.nodeManager.changeAttribute(this, 'fill')
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
            this.$_core.$_renderer.nodeManager.changeAttribute(this, 'radius')
        }
        return this.$_r
    }

    /**
     * control label show or not
     * @param value
     */
    public showLabel(value: boolean) {
        this.$_showLabel = value
        if (value) {
            this.$_core.labelManager.drawLabel(this)
        } else {
            this.$_core.labelManager.removeLabel(this)
        }
    }

    /**
     * get/set node's label
     * @param value label text
     */
    public text(value?: string) {
        if (value) {
            this.$_text = value
        }
        return this.$_text
    }

    /**
     * get/set offset value
     * @param value offset value
     * @deprecated not used currently, not support set node's label offset individually
     */
    public textOffset(value?: { x: number; y: number }) {
        if (value) {
            this.$_textOffset = value
        }
        return this.$_textOffset
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

    /**
     * set hover callback function
     * @param callback hover callback function
     */
    private setHoverCallback(callback: (node: Node) => void) {
        this.$_hoverCallback = callback
    }

    /**
     * set click callback function
     * @param callback click callback function
     */
    private setClickCallback(callback: (node: Node) => void) {
        this.$_clickCallback = callback
    }
}

export default Node
