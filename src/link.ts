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
    private $_strokeWidth
    private $_strokeColor

    public constructor(core, linkData: interfaces.LinkData) {
        this.$_core = core
        this.sourceTarget(linkData)

        const strokeWidth =
            'strokeWidth' in linkData ? linkData.strokeWidth : configs.link.storkeWidth
        const strokeColor =
            'strokeColor' in linkData ? linkData.strokeColor : configs.link.strokeColor

        this.strokeWidth(strokeWidth)
        this.strokeColor(strokeColor)
    }

    public source(nodeId?: string) {
        if (arguments.length === 0) {
            // getter
            return this.$_source
        } else {
            // setter
            return this.sourceTarget({
                source: nodeId,
                target: this.$_target.id()
            })
        }
    }

    public target(nodeId?: string) {
        if (arguments.length === 0) {
            // getter
            return this.$_target
        } else {
            // setter
            return this.sourceTarget({
                source: this.$_source.id(),
                target: nodeId
            })
        }
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
                throw new Error(`Source ${linkData.source} does not exist.`)
            }
            if (newTarget === undefined) {
                throw new Error(`Target ${linkData.target} does not exist.`)
            }

            if (newSource === newTarget) {
                // self loop
                throw new Error(
                    `Self loop (${linkData.source} <=> ${linkData.target}) is not allowed.`
                )
            }

            if (this.$_core.$_ends2link.has([linkData.source, linkData.target])) {
                // multiple link is not allowed
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
