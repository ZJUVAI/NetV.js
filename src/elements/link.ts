/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide a Link class.
 * @dependences interfaces.ts, utils/is.ts
 */

import Node from './node'
import * as interfaces from '../interfaces'
import Element from './element'

class Link extends Element {
    // style getter/setter
    public shape: (value?: interfaces.LinkShape) => interfaces.LinkShape
    public strokeWidth: (value?: number) => number
    public strokeColor: (value?: interfaces.Color) => interfaces.Color

    public $_source: Node
    public $_target: Node

    private $_elementReservedKeys = new Set(['source', 'target', 'style'])

    public constructor(core, linkData: interfaces.LinkData) {
        super(core, linkData, /* type: */ 'Link')

        // set attributes
        for (const key in linkData) {
            if (!this.$_elementReservedKeys.has(key)) {
                this.$_attributes[key] = linkData[key]
            }
        }

        const sourceNode = this.$_core.getNodeById(linkData.source)
        const targetNode = this.$_core.getNodeById(linkData.target)
        this.sourceTarget({
            source: sourceNode,
            target: targetNode
        })
    }

    /**
     * getter/setter of the source
     * @param {Node} [node]
     * @returns {Node} a source Node Object
     * @memberof Link
     */
    public source(node?: Node): Node {
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
    public target(node?: Node): Node {
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
}

export default Link
