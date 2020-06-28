/**
 * @description render graph using webgl
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 */

import { RenderNodeManager } from './elements/node/render-node'
import Node from '../node'
import Link from 'src/link'
import { RenderLinkManager } from './elements/link/render-link'
import { Transform, RendererConfigs } from './interfaces'
import { Color } from 'src/interfaces'
import { decodeRenderId } from './utils'

export class Renderer {
    public nodeManager: RenderNodeManager
    public linkManager: RenderLinkManager

    private gl: WebGL2RenderingContext
    private backgroundColor: Color
    private width: number
    private height: number
    private idTexture: WebGLTexture

    /**
     * create renderer object
     * @param configs {canvas: HTMLCanvasElement, width: number, height: number, backgroundColor: Color, defaultConfigs: Object} configs passed to renderer
     */
    public constructor(configs: RendererConfigs) {
        const { canvas, width, height, backgroundColor, nodeLimit, linkLimit } = configs
        try {
            this.gl = canvas.getContext('webgl2')
        } catch {
            throw new Error('NetV requires WebGL2 supported by your browser')
        }
        this.backgroundColor = backgroundColor
        this.width = width
        this.height = height

        this.initIdTexture()

        // TODO: parameters too many
        this.nodeManager = new RenderNodeManager(this.gl, width, height, nodeLimit, this.idTexture)
        this.linkManager = new RenderLinkManager(this.gl, width, height, linkLimit, this.idTexture)
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
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.idTexture)
        this.gl.clearColor(1, 1, 1, 1)
        this.gl.clear(this.gl.COLOR_BUFFER_BIT)
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null)

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

    /**
     * get element's id at (x, y) of canvas if exists
     * @param x x pos
     * @param y y pos
     */
    public getIdByPosition(x: number, y: number): string | [string, string] {
        const renderId = this.readIdTexture(x, y)
        if (renderId >= 0) {
            if (renderId % 2 === 0) {
                // NOTE: node has even render id, link has odd render id
                const nodeId = this.nodeManager.getIdByRenderId(renderId)
                return nodeId
            } else {
                const linkIds = this.linkManager.getIdsByRenderId(renderId)
                return linkIds
            }
        }
    }

    /**
     * read pixel value at (x, y) of texture
     * @param x x pos
     * @param y y pos
     */
    public readIdTexture(x: number, y: number): number {
        const ratio = window.devicePixelRatio || 1
        this.gl.bindFramebuffer(this.gl.READ_FRAMEBUFFER, this.idTexture)
        const readPixelBuffer = new Uint8Array([255, 255, 255, 255]) // -1
        this.gl.readPixels(
            x * ratio,
            y * ratio,
            1,
            1,
            this.gl.RGBA,
            this.gl.UNSIGNED_BYTE,
            readPixelBuffer
        )
        const objectID = decodeRenderId(readPixelBuffer)

        return objectID
    }

    /**
     * init WebGL texture for recording position of elements
     */
    private initIdTexture() {
        const gl = this.gl
        const pixelRatio = window.devicePixelRatio || 1
        const screenWidth = this.width * pixelRatio
        const screenHeight = this.height * pixelRatio

        const fbo = gl.createFramebuffer()
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo)

        const idTexture = gl.createTexture()
        gl.bindTexture(gl.TEXTURE_2D, idTexture)
        gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            gl.RGBA,
            screenWidth,
            screenHeight,
            0,
            gl.RGBA,
            gl.UNSIGNED_BYTE,
            null
        )
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
        gl.bindTexture(gl.TEXTURE_2D, null)
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, idTexture, 0)

        // TODO: need simplify
        gl.drawBuffers([0].map((v) => v + gl.COLOR_ATTACHMENT0))

        const rbo = gl.createRenderbuffer()
        gl.bindRenderbuffer(gl.RENDERBUFFER, rbo)
        gl.clearColor(1, 1, 1, 1)
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH24_STENCIL8, screenWidth, screenHeight)
        gl.bindRenderbuffer(gl.RENDERBUFFER, null)
        gl.framebufferRenderbuffer(
            gl.FRAMEBUFFER,
            gl.DEPTH_STENCIL_ATTACHMENT,
            gl.RENDERBUFFER,
            rbo
        )

        if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {
            throw new Error('Framebuffer generate failed')
        }

        gl.bindFramebuffer(gl.FRAMEBUFFER, null)

        this.idTexture = fbo
    }
}
