/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide a Link class.
 * @dependences interfaces.ts, utils/is.ts
 */

import * as interfaces from './interfaces'

class Link {
    private $_source: interfaces.Node = undefined
    private $_target: interfaces.Node = undefined
    private $_core: interfaces.Core = undefined

    public constructor(core, linkData: interfaces.LinkData) {
        this.$_core = core
        this.sourceTarget(linkData)
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
            const oldSource = this.$_source
            const oldTarget = this.$_target
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
                    `Self loop (${this.$_target.id()} <=> ${this.$_source.id()}) is not allowed.`
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
}

export default Link
