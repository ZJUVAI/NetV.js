/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide the entrance of NetV.js.
 * @dependences interfaces.ts, utils/map2.js, node.ts, link.ts
 */

import * as interfaces from './interfaces'
import Map2 from './utils/map2'
import Node from './node'
import Link from './link'
import * as defaultConfigs from './configs'
import * as dataset from './dataset'
import { Renderer } from './renderer'
import { InteractionManager } from './interaction/interaction'
import * as Utils from './utils/utils'

class NetV {
    public Utils = Utils

    public $_id2node = new Map()
    public $_ends2link = new Map2()
    public $_container: HTMLDivElement
    public $_renderer: Renderer
    public $_configs = defaultConfigs
    public $_interaction: InteractionManager

    private $_data: interfaces.NodeLinkData = { nodes: [], links: [] }

    /**
     * @description create NetV object.
     * @param configs configurations of NetV, must include a `container: HTMLDivElement` term
     */
    public constructor(configs: any) {
        if (!('container' in configs) || configs.container.tagName !== 'DIV') {
            throw Error('Container should be specified as a div element!')
        }
        this.$_container = configs.container
        // override configs
        for (const key in configs) {
            if (key === 'container') continue // NOTE: exclude container in configs
            if (configs[key] === Object(configs[key])) {
                this.$_configs[key] = { ...this.$_configs[key], ...configs[key] }
            } else {
                this.$_configs[key] = configs[key]
            }
        }

        const canvas = document.createElement('canvas') // TODO: consider node enviroment, document not defined
        canvas.setAttribute('width', String(this.$_configs.width))
        canvas.setAttribute('height', String(this.$_configs.height))
        this.$_container.appendChild(canvas)

        this.$_renderer = new Renderer({
            canvas,
            width: this.$_configs.width,
            height: this.$_configs.height,
            backgroundColor: this.$_configs.backgroundColor
        })

        this.$_interaction = new InteractionManager(this)
        if (this.$_configs.enablePanZoom) {
            this.$_interaction.initZoom()
        }
    }

    /**
     * @description data getter setter
     * @param nodeLinkData? the node-link-data of a graph, provided?setter:getter;
     */
    public data(nodeLinkData?: interfaces.NodeLinkData) {
        if (nodeLinkData === undefined) {
            return this.$_data
        } else {
            // delete old data
            this.$_data = { ...this.$_data, ...nodeLinkData }
            this.$_id2node = new Map()
            this.$_ends2link = new Map2()

            this.addNodes(this.$_data.nodes)
            this.addLinks(this.$_data.links)
        }
    }

    /**
     * @description initialize and add a node
     * @param nodeData the data of a node, include id, styles...
     */
    public addNode(nodeData: interfaces.NodeData) {
        nodeData.id = nodeData.id.toString()
        const node = new Node(this, nodeData)
        return node
    }

    /**
     * @description initialize and add a link
     * @param linkData the data of a link, include source, target, and styles...
     */
    public addLink(linkData: interfaces.LinkData) {
        linkData.source = linkData.source.toString()
        linkData.target = linkData.target.toString()

        const link = new Link(this, linkData)
        return link
    }

    /**
     * @description initialize and add an array of nodes.
     * @param {interfaces.NodeData[]} nodesData: a data array of nodes tobe added
     * @memberof NetV
     */
    public addNodes(nodesData: interfaces.NodeData[]) {
        nodesData.forEach((nodeData) => this.addNode(nodeData))
        this.$_renderer.addNodes([...this.$_id2node.values()])
    }

    /**
     * @description initialize and add an array of links.
     * @param {interfaces.LinkData[]} linksData: a data array of links tobe added
     * @memberof NetV
     */
    public addLinks(linksData: interfaces.LinkData[]) {
        linksData.forEach((linkData) => this.addLink(linkData))
        this.$_renderer.addLinks([...this.$_ends2link.values()])
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
    public getLinkByEnds(endId1: string, endId2: string) {
        return this.$_ends2link.get([endId1, endId2])
    }

    /**
     * @description wipe all the data in the instance
     * @memberof NetV
     */
    public wipe() {
        this.$_data = undefined
        this.$_id2node = new Map()
        this.$_ends2link = new Map2()
    }

    /**
     * @description return build-in dataset according to name
     * @param name dataset name
     */
    public loadDataset(name: string) {
        if (name in dataset) return dataset[name]

        console.error(`NetV does not have build-in dataset: ${name}`)
        return { nodes: [], links: [] }
    }

    /**
     * @description draw elements
     */
    public draw() {
        this.$_renderer.draw()
    }
}

export { NetV }
