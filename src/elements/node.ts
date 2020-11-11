/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide a Node class.
 * @dependences interfaces.ts, utils/is.ts
 */

import * as interfaces from '../interfaces'
import { isValidId } from '../utils/is'
import { LinkAttr } from '../renderer/interfaces'
import Link from './link'
import Element from './element'

class Node extends Element {
    // style getter/setter
    public shape: (value?: interfaces.NodeShape) => interfaces.NodeShape
    public offset: (value?: interfaces.Position) => interfaces.Position
    public strokeWidth: (value?: number) => number
    public strokeColor: (value?: interfaces.Color) => interfaces.Color
    public fill: (value?: interfaces.Color) => interfaces.Color
    /* circle shape styles */
    public r?: (value?: number) => number
    /* rect shape styles */
    public width?: (value?: number) => number
    public height?: (value?: number) => number
    public rotate?: (value?: number) => number
    /* triangle shape styles */
    public vertexAlpha: (value?: interfaces.Position) => interfaces.Position
    public vertexBeta: (value?: interfaces.Position) => interfaces.Position
    public vertexGamma: (value?: interfaces.Position) => interfaces.Position

    private $_id: string
    private $_position = {
        x: 0,
        y: 0
    }

    private $_showLabel: boolean
    private $_text: string
    private $_textOffset: { x: number; y: number } // NOTE: deprecated, current not used

    public constructor(core, nodeData: interfaces.NodeData) {
        super(core, nodeData)
        const defaultConfigs = this.$_core.$_configs
        const data = {
            ...{
                x: this.$_position.x,
                y: this.$_position.y,
                showLabel: defaultConfigs.node.showLabel,
                text: defaultConfigs.node.text
            },
            ...nodeData
        }

        this.$_setId(data.id)
        this.$_position = {
            x: data.x,
            y: data.y
        }

        this.$_showLabel = data.showLabel
        this.$_text = data.text

        if (this.$_showLabel) {
            this.showLabel(true)
        }
    }

    /**
     * getter of private property $_id
     * @memberof Node
     */
    public id() {
        return this.$_id
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

        if (arguments.length > 0 && ('x' in position || 'y' in position)) {
            if ('x' in position) {
                this.$_position['x'] = position.x
            }
            if ('y' in position) {
                this.$_position['y'] = position.y
            }

            if (this.$_core.$_shouldLazyUpdate) {
                return this.$_position
            } else {
                linkSets = {
                    // find links from/to this node
                    source: this.$_core.$_sourceId2links.get(this.$_id),
                    target: this.$_core.$_targetId2links.get(this.$_id)
                }

                Object.entries(linkSets).forEach((entry) => {
                    // entry[0]: 'source' / 'target'
                    // entry[1]: the link set
                    const key = entry[0] as LinkAttr
                    const set = entry[1] as Set<Link>
                    if (set) {
                        this.$_core.$_addModifiedElementCount(set.size)
                        for (const link of set) {
                            this.$_core.$_renderer.linkManager.changeAttribute(link, key)
                        }
                    }
                })

                this.$_core.$_addModifiedElementCount(1)
                this.$_core.$_renderer.nodeManager.changeAttribute(this, 'position')
            }
        }

        return this.$_position
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
}

export default Node
