/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide a Link class.
 * @dependences interfaces.ts, utils/is.ts
 */

import Node from './node'
import * as interfaces from '../interfaces'
import { NetV } from '../index'
import { overrideDefaultStyle } from './utils'

class Link {
    public $_clickCallback: (link: Link) => void
    public $_hoverCallback: (link: Link) => void

    // style getter/setter
    public strokeWidth: (value?: number) => number
    public strokeColor: (value?: interfaces.Color) => interfaces.Color

    private $_core: NetV
    private $_source: Node
    private $_target: Node
    private $_style: interfaces.LinkStyle = {}

    public constructor(core, linkData: interfaces.LinkData) {
        this.$_core = core
        const defaultConfigs = this.$_core.$_configs
        const data = {
            ...{
                clickCallback: defaultConfigs.link.clickCallback,
                hoverCallback: defaultConfigs.link.hoverCallback
            },
            ...linkData
        }

        const sourceNode = this.$_core.getNodeById(data.source)
        const targetNode = this.$_core.getNodeById(data.target)
        this.sourceTarget({
            source: sourceNode,
            target: targetNode
        })

        // add default link style
        data.style = overrideDefaultStyle(defaultConfigs.link.style, data.style)

        this.$_style = data.style

        this.setClickCallback(data.clickCallback)
        this.setHoverCallback(data.hoverCallback)

        // generate style methods, e.g.: link.strokeWidth()
        Object.keys(defaultConfigs.link.style[this.$_style.shape]).forEach((key) => {
            this[key] = function(value?: any) {
                if (arguments.length === 1) {
                    if (value === Object(value)) {
                        // value is an object
                        this.$_style[key] = { ...value, ...this.$_style[key] }
                    } else {
                        this.$_style[key] = value
                    }
                    this.$_core.$_renderer.linkManager.changeAttribute(this, key)
                }
                return this.$_style[key]
            }
        })
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
     * set hover callback function
     * @param callback hover callback function
     */
    private setHoverCallback(callback: (link: Link) => void) {
        this.$_hoverCallback = callback
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
