/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide a Link class.
 * @dependences interfaces.ts, utils/is.ts
 */

import Node from './node'
import * as interfaces from './interfaces'
import { NetV } from './index'

class Link {
    public $_clickCallback: (link: Link) => void

    private $_core: NetV
    private $_source: Node
    private $_target: Node
    private $_strokeWidth: number
    private $_strokeColor: interfaces.Color

    public constructor(core, linkData: interfaces.LinkData) {
        this.$_core = core
        const defaultConfigs = this.$_core.$_configs
        const data = {
            ...{
                strokeWidth: defaultConfigs.link.strokeWidth,
                strokeColor: defaultConfigs.link.strokeColor,
                clickCallback: defaultConfigs.link.clickCallback
            },
            ...linkData
        }

        const sourceNode = this.$_core.getNodeById(data.source)
        const targetNode = this.$_core.getNodeById(data.target)
        this.sourceTarget({
            source: sourceNode,
            target: targetNode
        })

        this.$_strokeWidth = data.strokeWidth
        this.$_strokeColor = data.strokeColor

        this.setClickCallback(data.clickCallback)
    }

    /**
     * getter/setter of the source
     * @param {Node} [node]
     * @returns {Node} a source Node Object
     * @memberof Link
     */
    public source(node?: Node) {
        if (arguments.length === 1) {
            // setter
            this.sourceTarget({
                source: node,
                target: this.$_target
            })
        }
        return this.$_source
    }

    /**
     * getter/setter of the target
     * @param {Node} [node]
     * @returns {Node} a target Node Object
     * @memberof Link
     */
    public target(node?: Node) {
        if (arguments.length === 1) {
            // setter
            this.sourceTarget({
                source: this.$_source,
                target: node
            })
        }
        return this.$_target
    }

    /**
     * getter/setter of source and target
     *
     * @param {sourceTargetObj} [{source: Node, target: Node}]
     * @returns Object {source: Node, target: Node}
     * @memberof Link
     */
    public sourceTarget(sourceTargetObj?: { source: Node; target: Node }) {
        if (arguments.length > 0) {
            const oldSource: Node = this.$_source
            const oldTarget: Node = this.$_target
            const newSource = sourceTargetObj.source
            const newTarget = sourceTargetObj.target
            const newSourceId = newSource.id()
            const newTargetId = newTarget.id()

            if (newSource === newTarget) {
                // error: self loop
                throw new Error(`Self loop (${newSourceId} <=> ${newTargetId}) is not allowed.`)
            }

            if (this.$_core.$_ends2link.has([newSourceId, newTargetId])) {
                // error: multiple link
                throw new Error(`Multiple link (${newSourceId} <=> ${newTargetId}) is not allowd.`)
            }

            if (oldSource && oldTarget) {
                // delete old Map
                this.$_core.$_ends2link.delete([oldSource.id(), oldTarget.id()])

                this.$_core.$_sourceId2links.get(oldSource.id())?.delete(this)
                this.$_core.$_targetId2links.get(oldTarget.id())?.delete(this)
            }

            this.$_source = newSource
            this.$_target = newTarget
            this.$_core.$_ends2link.set([newSourceId, newTargetId], this)

            if (!this.$_core.$_sourceId2links.has(newSourceId)) {
                this.$_core.$_sourceId2links.set(newSourceId, new Set([this]))
            } else {
                this.$_core.$_sourceId2links.get(newSourceId).add(this)
            }
            if (!this.$_core.$_targetId2links.has(newTargetId)) {
                this.$_core.$_targetId2links.set(newTargetId, new Set([this]))
            } else {
                this.$_core.$_targetId2links.get(newTargetId).add(this)
            }
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
            this.$_core.$_renderer.linkManager.changeAttribute(this, 'strokeWidth')
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
            this.$_core.$_renderer.linkManager.changeAttribute(this, 'strokeColor')
        }
        return this.$_strokeColor
    }

    /**
     * set click callback function
     * @param callback click callback function
     */
    private setClickCallback(callback: (link: Link) => void) {
        this.$_clickCallback = callback
    }
}

export default Link
