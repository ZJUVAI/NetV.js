/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide the entrance of NetV.js.
 * @dependences interfaces.ts, utils/map2.js, node.ts, link.ts
 */

import * as interfaces from './interfaces'
import Map2 from './utils/map2'
import Node from './elements/node'
import Link from './elements/link'
import * as defaultConfigs from './configs'
import * as dataset from './dataset'
import { Renderer } from './renderer'
import { InteractionManager } from './interaction/interaction'
import * as Utils from './utils/utils'
import { LabelManager } from './label/label'
import { Position } from './interfaces'

export default class NetV {
    public static Utils = Utils
    public labelManager: LabelManager

    public $_id2node = new Map()
    public $_ends2link = new Map2()
    public $_sourceId2links: Map<string, Set<Link>> = new Map()
    public $_targetId2links: Map<string, Set<Link>> = new Map()
    public $_container: HTMLDivElement
    public $_canvas: HTMLCanvasElement
    public $_renderer: Renderer
    public $_configs = JSON.parse(JSON.stringify(defaultConfigs)) // NOTE: deep copy configs

    public $_transform: interfaces.Transform = { x: 0, y: 0, k: 1 }

    public $_lazyUpdate = false // flag to control lazy update

    public $_interactionManager: InteractionManager
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

        this.$_configs = Utils.override(this.$_configs, configs)
        delete this.$_configs['container']

        const canvas = document.createElement('canvas') // TODO: consider node enviroment, document not defined
        const pixelRatio = window.devicePixelRatio || 1
        canvas.style.width = this.$_configs.width + 'px'
        canvas.style.height = this.$_configs.height + 'px'
        canvas.setAttribute('width', String(this.$_configs.width * pixelRatio))
        canvas.setAttribute('height', String(this.$_configs.height * pixelRatio))
        this.$_container.appendChild(canvas)
        this.$_canvas = canvas

        this.$_renderer = new Renderer({
            canvas,
            width: this.$_configs.width,
            height: this.$_configs.height,
            backgroundColor: this.$_configs.backgroundColor,
            nodeLimit: this.$_configs.nodeLimit,
            linkLimit: this.$_configs.linkLimit,
            getAllNodes: this.nodes.bind(this),
            getAllLinks: this.links.bind(this)
        })

        this.labelManager = new LabelManager(this)

        this.$_interactionManager = new InteractionManager(this)
    }

    /**
     * get/set canvas's background color
     * @param color
     */
    public backgroundColor(color?: interfaces.Color) {
        if (color) {
            this.$_configs.backgroundColor = color
            this.$_renderer.setBackgroundColor(color)
        }
        return this.$_configs.backgroundColor
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
            this.$_sourceId2links = new Map()
            this.$_targetId2links = new Map()

            this.$_renderer.clearData()

            this.addNodes(this.$_data.nodes)
            this.addLinks(this.$_data.links)
        }
    }

    /**
     * @description initialize and add a node
     * @param nodeData the data of a node, include id, styles...
     */
    public addNode(nodeData: interfaces.NodeData) {
        return this.addNodes([nodeData])[0]
    }

    /**
     * @description initialize and add a link
     * @param linkData the data of a link, include source, target, and styles...
     */
    public addLink(linkData: interfaces.LinkData) {
        return this.addLinks([linkData])[0]
    }

    /**
     * @description initialize and add an array of nodes.
     * @param {interfaces.NodeData[]} nodesData: a data array of nodes tobe added
     * @memberof NetV
     */
    public addNodes(nodesData: interfaces.NodeData[]) {
        const newNodes = nodesData.map((nodeData) => {
            nodeData.id = nodeData.id.toString()
            const node = new Node(this, nodeData)

            return node
        })
        this.$_renderer.addNodes(newNodes)
        return newNodes
    }

    /**
     * @description initialize and add an array of links.
     * @param {interfaces.LinkData[]} linksData: a data array of links tobe added
     * @memberof NetV
     */
    public addLinks(linksData: interfaces.LinkData[]) {
        const newLinks = linksData.map((linkData) => {
            linkData.source = linkData.source.toString()
            linkData.target = linkData.target.toString()

            const link = new Link(this, linkData)
            return link
        })
        // this.$_renderer.addLinks(newLinks)
        this.$_renderer.addLinks([...this.$_ends2link.values()]) // NOTE: preserve link order, not elegant
        return newLinks
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
     * @description get all nodes
     */
    public nodes(): Node[] {
        return [...this.$_id2node.values()]
    }

    /**
     * @description get all links
     */
    public links(): Link[] {
        return [...this.$_ends2link.values()]
    }

    /**
     * @description wipe all the data in the instance
     * @memberof NetV
     */
    public wipe() {
        this.$_data = undefined
        this.$_id2node = new Map()
        this.$_ends2link = new Map2()
        this.$_sourceId2links = new Map()
        this.$_targetId2links = new Map()
        this.$_renderer.clearData()
    }

    /**
     * dispose NetV object, clear all stuffs
     */
    public dispose() {
        this.wipe()
        this.$_renderer.dispose()
        this.$_canvas.remove()
        // remove label canvas
        // TODO: consider standalone interaction plugin
        this.labelManager.dispose()
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
     * given position, return element on this pixel if exists
     * @param x x pos
     * @param y y pos
     */
    public getElementByPosition(
        position: interfaces.Position
    ): { type: 'node' | 'link'; element: Node | Link } | undefined {
        const id = this.$_renderer.getIdByPosition(position)
        if (id) {
            if (typeof id === 'string') {
                const node = this.getNodeById(id)
                return {
                    type: 'node',
                    element: node
                }
            }
            if (Array.isArray(id)) {
                const link = this.getLinkByEnds(id[0], id[1])
                return {
                    type: 'link',
                    element: link
                }
            }
        }
    }

    /**
     * @description draw elements
     */
    public draw() {
        this.$_renderer.draw()
    }

    /**
     * pan on canvas to get given node centered
     * @param node
     */
    public centerOn(node: Node) {
        const pos = node.position()
        this.$_interactionManager.centerPosition(pos)
    }

    /**
     * progmatically pan
     * @param x
     * @param y
     */
    public panBy(x: number, y: number) {
        this.$_interactionManager.panBy(x, y)
        this.draw()
    }

    /**
     * progmatically zoom
     * @param factor zoom factor
     * @param center optional, zoom center position
     */
    public zoomBy(factor: number, center?: Position) {
        this.$_interactionManager.zoomBy(factor, center)
        this.draw()
    }

    /**
     * get/set netv's transform
     * @param value optional, transform to set
     */
    public transform(value?: interfaces.Transform) {
        if (value === undefined) {
            return this.$_transform
        }
        this.$_transform = value
        this.$_renderer.setTransform(this.$_transform)
        this.labelManager.setTransform(this.$_transform)
        this.draw()
    }
    /**
     * @description event listener
     * @memberof NetV
     */
    public on(eventName: string, callback?: (e: any) => any) {
        if (eventName.toLowerCase() === 'zoom') {
            this.$_interactionManager.onZoom(callback)
        } else if (eventName.toLowerCase() === 'pan') {
            this.$_interactionManager.onPan(callback)
        } else if (eventName.toLowerCase() === 'mousedown') {
            this.$_interactionManager.onMousedown(callback)
        } else if (eventName.toLowerCase() === 'mouseup') {
            this.$_interactionManager.onMouseup(callback)
        } else if (eventName.toLowerCase() === 'click') {
            this.$_interactionManager.onClick(callback)
        }
    }

    /**
     * @description turn off event listener
     *
     * @memberof NetV
     */
    public off(eventName: string, callback?: (e: any) => any) {
        if (eventName.toLowerCase() === 'zoom') {
            this.$_interactionManager.offZoom(callback)
        }
    }
}

declare global {
    // to ensure window.NetV will not report ts error
    interface Window {
        NetV: any
    }
}

window.NetV = NetV
