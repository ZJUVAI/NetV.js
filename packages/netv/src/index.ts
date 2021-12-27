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
import { Position } from './interfaces'
import { EMPTY_FUNCTION } from './utils/const'
import testjs = require('./testjs')
import Star = require('./stardust.bundle.min.js')
import  Stardust  = require('./stardust.bundle')
import  d3  = require('./d3')

//import * as d3 from "d3"

export default class NetV {
    public static Utils = Utils

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
    public $_platform: any
    public $_canvas2: any
    public $_circles: any
    public $_circles2: any
    public $_data_star: any
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



        console.log("lyhlyh11")
        testjs.logJs();
        var width = 960;
        var height = 500;
        const canvas2 = document.getElementById('main-canvas')
        const platform = Stardust.platform('webgl-2d', canvas2, this.$_configs.width, this.$_configs.height)
        this.$_platform = platform
        this.$_canvas2 = canvas2

        
        
       

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
        var Nx = 96 * 1;
        var Ny = 50 * 1;
        var data = [];
        for(var i = 0; i < Nx; i++) {
            for(var j = 0; j < Ny; j++) {
                var x = i / (Nx - 1) * 2 - 1;
                var y = j / (Ny - 1) * 2 - 1;
                var scale = 2;
                var len = Math.sqrt(x * x + y * y);
                var d = len * Math.exp(-len * len * 5);
                var dx = y / len * d;
                var dy = -x / len * d;
                data.push({
                    x: x + dx * scale,
                    y: y + dy * scale
                });
            }
        }
        this.$_data_star = data
        let circle = new Stardust.mark.circle(16);
        console.log('init mark')
        var circles = Stardust.mark.create(circle, this.$_platform);
        var circles2 = Stardust.mark.create(circle, this.$_platform);
    
        var scaleX = Stardust.scale.linear()
            .domain([ -1, 1 ])
            .range([ 10, this.$_configs.width - 10 ]);
        var scaleY = Stardust.scale.linear()
            .domain([ -1, 1 ])
            .range([ 10, this.$_configs.height - 10 ]);
        circles.attr("center", Stardust.scale.Vector2(scaleX(d => d.x), scaleY(d => d.y)));
        circles.attr("radius", 2);
        circles.attr("color", [ 0, 0, 0, 0.4 ]);
        circles2.attr("center", Stardust.scale.Vector2(scaleX(d => d.x), scaleY(d => d.y)));
        circles2.attr("radius", 4);
        circles2.attr("color", [ 255, 0, 0, 1 ]);
        circles.data(data);
        this.$_circles = circles
        this.$_circles2 = circles2
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
        const newLinks = new Array(linksData.length)
        for (let i = 0; i < linksData.length; i++) {
            const linkData = linksData[i]
            linkData.source = linkData.source.toString()
            linkData.target = linkData.target.toString()

            const link = new Link(this, linkData)
            newLinks[i] = link
        }
        this.$_renderer.addLinks(newLinks) // NOTE: preserve link order, not elegant
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
        this.$_circles.render();
        this.$_platform.endPicking();
    
        this.$_canvas2.onmousemove = e => {
            let bounds = this.$_canvas2.getBoundingClientRect();
            var x = e.clientX - bounds.left;
            var y = e.clientY - bounds.top;
            var p = this.$_platform.getPickingPixel(x * 2, y * 2);
            if(p) {
                this.$_platform.clear();
                this.$_circles.render();
                this.$_circles2.attr("color", [ 1, 0, 0, 1 ]);
                this.$_circles2.data([ this.$_data_star[p[1]] ]);
                this.$_circles2.render();
                console.log('log in render')
            }
        }
        this.$_renderer.draw()
    }

    /**
     * @description transition between different transforms
     */
    public transition(
        transforms: interfaces.Transform[],
        durationsMS: number[],
        callback?: (e: any) => {}
    ) {
        // interpolation
        const STEPS_PER_SECOND = 60
        const MS_PER_SECOND = 1000
        const STEPS_PER_MS = STEPS_PER_SECOND / MS_PER_SECOND
        const MS_PER_STEP = 1 / STEPS_PER_MS
        const transitionFromTransforms = (index: number) => {
            if (index >= transforms.length - 1) {
                return
            }
            const TOTAL_STEPS = Math.max(STEPS_PER_MS * durationsMS[index], 1)
            const newTransform = {
                ...transforms[index]
            }
            const difference = {
                x: transforms[index + 1].x - transforms[index].x,
                y: transforms[index + 1].y - transforms[index].y,
                k: transforms[index + 1].k - transforms[index].k
            }
            const originTranslate = {
                x: transforms[index].x,
                y: transforms[index].y,
                k: transforms[index].k
            }
            const ease = (x: number) => {
                return x * x
            }
            let step = 1
            const animation = setInterval(() => {
                newTransform.x = originTranslate.x + difference.x * ease(step / TOTAL_STEPS)
                newTransform.y = originTranslate.y + difference.y * ease(step / TOTAL_STEPS)
                newTransform.k = originTranslate.k + difference.k * ease(step / TOTAL_STEPS)
                this.transform(newTransform)
                this.draw()
                if (callback) callback({ transform: newTransform })
                step += 1
                if (step >= TOTAL_STEPS) {
                    clearInterval(animation)
                    transitionFromTransforms(index + 1)
                }
            }, MS_PER_STEP)
        }
        transitionFromTransforms(0)
    }

    /**
     * pan on canvas to get given node centered
     * @param node
     */
    public centerOn(node: Node): interfaces.Transform {
        const pos = node.position()
        return this.$_interactionManager.centerPosition(pos)
    }

    /**
     * progmatically pan
     * @param x
     * @param y
     */
    public panBy(x: number, y: number) {
        return this.$_interactionManager.panBy(x, y)
    }

    /**
     * progmatically zoom
     * @param factor zoom factor
     * @param center optional, zoom center position
     */
    public zoomBy(factor: number, center?: Position) {
        return this.$_interactionManager.zoomBy(factor, center)
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
        return this.$_transform
    }
    /**
     * @description event listener
     * @memberof NetV
     */
    public on(eventName: string, callback: (e: any) => any) {
        if (eventName.toLowerCase() === 'zoom') {
            this.$_interactionManager.onZoom(callback ? callback : EMPTY_FUNCTION)
        } else if (eventName.toLowerCase() === 'pan') {
            this.$_interactionManager.onPan(callback ? callback : EMPTY_FUNCTION)
        } else if (eventName.toLowerCase() === 'mousedown') {
            this.$_interactionManager.onMousedown(callback ? callback : EMPTY_FUNCTION)
        } else if (eventName.toLowerCase() === 'mouseup') {
            this.$_interactionManager.onMouseup(callback ? callback : EMPTY_FUNCTION)
        } else if (eventName.toLowerCase() === 'click') {
            this.$_interactionManager.onClick(callback ? callback : EMPTY_FUNCTION)
        }
    }

    /**
     * @description turn off event listener
     *
     * @memberof NetV
     */
    public off(eventName: string, callback?: (e: any) => any) {
        if (eventName.toLowerCase() === 'zoom') {
            this.$_interactionManager.offZoom(callback ? callback : EMPTY_FUNCTION)
        } else if (eventName.toLowerCase() === 'pan') {
            this.$_interactionManager.offPan(callback ? callback : EMPTY_FUNCTION)
        } else if (eventName.toLowerCase() === 'mousedown') {
            this.$_interactionManager.offMousedown(callback ? callback : EMPTY_FUNCTION)
        } else if (eventName.toLowerCase() === 'mouseup') {
            this.$_interactionManager.offMouseup(callback ? callback : EMPTY_FUNCTION)
        } else if (eventName.toLowerCase() === 'click') {
            this.$_interactionManager.offClick(callback ? callback : EMPTY_FUNCTION)
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
