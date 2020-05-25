/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide the entrance of NetV.js.
 * @dependences interfaces.ts, node.ts
 */

import * as interfaces from './interfaces'
import Map2 from './utils/map2.js'
import Node from './node'
import Link from './link'

class NetV implements interfaces.Core {
    public $_id2node = new Map()

    private $_data: interfaces.NodeLinkData = { nodes: [], links: [] }

    /**
     * @description data getter setter
     * @param {nodeLinkData?} the node-link-data of a graph, provided?setter:getter;
     */
    public data(nodeLinkData?: interfaces.NodeLinkData) {
        if (nodeLinkData === undefined) {
            return this.$_data
        } else {
            this.$_data = nodeLinkData
            try {
                nodeLinkData.nodes.forEach((node) => {
                    this.addNode(node)
                })
                nodeLinkData.links.forEach((link) => {
                    this.addLink(link)
                })
            } catch (e) {
                console.error(e)
            }
        }
    }

    /**
     * @description initilize and add a node
     * @param {nodeData} the data of a node, include id, styles...
     */
    public addNode(nodeData: interfaces.NodeData) {
        nodeData.id = nodeData.id.toString()
        const node = new Node(this, nodeData)
        return node
    }

    public addLink(linkData: interfaces.LinkData) {
        linkData.source = linkData.source.toString()
        linkData.target = linkData.target.toString()
        // TODO
        const source = this.getNodeById(linkData.source)
        const target = this.getNodeById(linkData.target)
    }

    /**
     * @description get an Node object from the Map data structure
     * @param {id} node id
     */
    public getNodeById(id: string) {
        return this.$_id2node.get[id]
    }
}

export { NetV }
