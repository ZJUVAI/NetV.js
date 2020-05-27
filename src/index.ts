/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide the entrance of NetV.js.
 * @dependences interfaces.ts, utils/map2.js, node.ts, link.ts
 */

import * as interfaces from './interfaces'
import Map2 from './utils/map2'
import Node from './node'
import Link from './link'

class NetV implements interfaces.Core {
    public $_id2node = new Map()
    public $_ends2link = new Map2()

    private $_data: interfaces.NodeLinkData = { nodes: [], links: [] }

    /**
     * @description data getter setter
     * @param nodeLinkData? the node-link-data of a graph, provided?setter:getter;
     */
    public data(nodeLinkData?: interfaces.NodeLinkData) {
        if (nodeLinkData === undefined) {
            return this.$_data
        } else {
            this.$_data = nodeLinkData
            nodeLinkData.nodes.forEach((node) => {
                this.addNode(node)
            })
            nodeLinkData.links.forEach((link) => {
                this.addLink(link)
            })
        }
    }

    /**
     * @description initilize and add a node
     * @param nodeData the data of a node, include id, styles...
     */
    public addNode(nodeData: interfaces.NodeData) {
        nodeData.id = nodeData.id.toString()
        if (!this.$_id2node.has(nodeData.id)) {
            const node = new Node(this, nodeData)
            return node
        } else {
            throw new Error(`Duplicate node (${nodeData.id}) is not allowed.`)
        }
    }

    /**
     * @description initilize and add a link
     * @param linkData the data of a link, include source, target, and styles...
     */
    public addLink(linkData: interfaces.LinkData) {
        linkData.source = linkData.source.toString()
        linkData.target = linkData.target.toString()
        if (!this.$_ends2link.has([linkData.source, linkData.target])) {
            const link = new Link(this, linkData)
            return link
        } else {
            throw new Error(
                `Duplicate node (${linkData.source} <=> ${linkData.target}) is not allowed.`
            )
        }
    }

    /**
     * @description get a Node object from the id2node Map data structure
     * @param id node id
     */
    public getNodeById(id: string) {
        return this.$_id2node.get(id)
    }

    /**
     * @description get a Link object from the ends2link Map2 data structure
     * @param endId1 one end id of the link (source or target)
     * @param endId2 another end id of the link (source or target)
     */
    public getLinkByEnds(endId1, endId2) {
        return this.$_ends2link.get([endId1, endId2])
    }
}

export default NetV
