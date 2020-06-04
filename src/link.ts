/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide a Link class.
 * @dependences interfaces.ts, utils/is.ts
 */

import Node from './node'
import * as interfaces from './interfaces'
import { NetV } from './index'
import * as configs from './configs'

class Link {
    private $_core: NetV
    private $_source: Node
    private $_target: Node
    private $_strokeWidth = configs.link.storkeWidth
    private $_strokeColor = configs.link.strokeColor

    public constructor(core, linkData: interfaces.LinkData) {
        this.$_core = core
        const data = {
            ...{
                strokeWidth: this.$_strokeWidth,
                strokeColor: this.$_strokeColor
            },
            ...linkData
        }

        this.sourceTarget(data)

        this.strokeWidth(data.strokeWidth)
        this.strokeColor(data.strokeColor)
    }

    /**
     * getter/setter of the source
     * @param {string} [nodeId]
     * @returns {Node} a source Node Object
     * @memberof Link
     */
    public source(nodeId?: string) {
        if (arguments.length === 1) {
            // setter
            this.sourceTarget({
                source: nodeId,
                target: this.$_target.id()
            })
        }
        return this.$_source
    }

    /**
     * getter/setter of the target
     * @param {string} [nodeId]
     * @returns {Node} a target Node Object
     * @memberof Link
     */
    public target(nodeId?: string) {
        if (arguments.length === 1) {
            // setter
            this.sourceTarget({
                source: this.$_source.id(),
                target: nodeId
            })
        }
        return this.$_target
    }

    /**
     * getter/setter of source and target
     *
     * @param {interfaces.LinkData} [linkData]
     * @returns Object {source: Node, target: Node}
     * @memberof Link
     */
    public sourceTarget(linkData?: interfaces.LinkData) {
        if (arguments.length > 0) {
            linkData.source = linkData.source.toString()
            linkData.target = linkData.target.toString()
            const oldSource: Node = this.$_source
            const oldTarget: Node = this.$_target
            const newSource = this.$_core.$_id2node.get(linkData.source)
            const newTarget = this.$_core.$_id2node.get(linkData.target)

            if (newSource === undefined) {
                // error: undefined source
                throw new Error(`Input source (${linkData.source}) does not exist.`)
            }
            if (newSource === undefined) {
                // error: undefined target
                throw new Error(`Input target (${linkData.target}) does not exist.`)
            }

            if (newSource === newTarget) {
                // error: self loop
                throw new Error(
                    `Self loop (${linkData.source} <=> ${linkData.target}) is not allowed.`
                )
            }

            if (this.$_core.$_ends2link.has([linkData.source, linkData.target])) {
                // error: multiple link
                throw new Error(
                    `Multiple link (${linkData.source} <=> ${linkData.target}) is not allowd.`
                )
            }

            if (oldSource && oldTarget) {
                // delete old Map
                this.$_core.$_ends2link.delete([oldSource.id(), oldTarget.id()])
            }

            this.$_source = newSource
            this.$_target = newTarget
            this.$_core.$_ends2link.set([linkData.source, linkData.target], this)
        }
        return {
            source: this.$_source,
            target: this.$_target
        }
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
}

export default Link
