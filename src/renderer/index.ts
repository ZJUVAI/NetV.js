/**
 * @description render graph using webgl
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 */

import * as defaultConfigs from '../configs'
import { RNode } from './elements/node/render-node'
import Node from '../node'
import Link from 'src/link'
import { RenderLink } from './elements/link/render-link'
import { Transform, RendererConfigs } from './utils'
import { Color } from 'src/interfaces'

export class Renderer {
    private gl: WebGL2RenderingContext
    private nodeManager: RNode
    private linkManager: RenderLink
    private backgroundColor: Color

    /**
     * create renderer object
     * @param configs {canvas: HTMLCanvasElement, width: number, height: number, backgroundColor: Color} configs passed to renderer
     */
    public constructor(configs: RendererConfigs) {
        const { canvas, width, height, backgroundColor } = configs
        try {
            this.gl = canvas.getContext('webgl2')
        } catch {
            throw new Error('NetV requires WebGL2 supported by your browser')
        }
        this.backgroundColor = backgroundColor

        this.nodeManager = new RNode(this.gl, width, height, defaultConfigs.nodeLimit)
        this.linkManager = new RenderLink(this.gl, width, height, defaultConfigs.linkLimit)
    }

    /**
     * add nodes to node manager
     * @param nodes node data in NetV
     */
    public addNodes(nodes: Node[]) {
        this.nodeManager.addData(nodes)
    }

    /**
     * add links to link manager
     * @param links link data in NetV
     */
    public addLinks(links: Link[]) {
        this.linkManager.addData(links)
    }

    public setTransform(transform: Transform) {
        this.nodeManager.setTransform(transform)
        this.linkManager.setTransform(transform)
        this.draw()
    }

    /**
     * draw all elements
     */
    public draw() {
        this.gl.clearColor(
            this.backgroundColor.r,
            this.backgroundColor.g,
            this.backgroundColor.b,
            this.backgroundColor.a
        )
        this.gl.clear(this.gl.COLOR_BUFFER_BIT)
        this.linkManager.draw()
        this.nodeManager.draw()
    }
}
