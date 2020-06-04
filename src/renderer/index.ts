/**
 * @description render graph using webgl
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 */

import * as defaultConfigs from '../configs'
import { RNode } from './elements/node/render-node'
import Node from '../node'
import Link from 'src/link'
import { RenderLink } from './elements/link/render-link'

export class Renderer {
    private gl: WebGL2RenderingContext
    private nodeManager: RNode
    private linkManager: RenderLink

    /**
     * create renderer object
     * @param canvas where all elements are draw
     * @param width canvas width
     * @param height canvas height
     */
    public constructor(canvas: HTMLCanvasElement, width: number, height: number) {
        try {
            this.gl = canvas.getContext('webgl2')
        } catch {
            throw new Error('NetV requires WebGL2 supported by your browser')
        }

        this.nodeManager = new RNode(this.gl, width, height, defaultConfigs.nodeLimit)
        this.linkManager = new RenderLink(this.gl, width, height, defaultConfigs.nodeLimit)
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

    /**
     * draw all elements
     */
    public draw() {
        this.linkManager.draw()
        this.nodeManager.draw()
    }
}
