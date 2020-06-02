/**
 * @description render graph using webgl
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 */

import { defaultConfigs } from '../utils/configs'
import { RNode } from './elements/node'

export class Renderer {
    private gl: WebGL2RenderingContext
    private nodeManager: RNode

    public constructor(canvas: HTMLCanvasElement, width: number, height: number) {
        try {
            this.gl = canvas.getContext('webgl2')
        } catch {
            throw new Error('NetV requires WebGL2 supported by your browser')
        }

        this.nodeManager = new RNode(this.gl, width, height, defaultConfigs.nodeLimit)
    }

    public draw() {
        this.nodeManager.draw()
    }
}
