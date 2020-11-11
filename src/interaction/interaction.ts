/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description handle all interaction in NetV
 */

import { NetV } from 'src'
import Node from '../node'
import { LassoManager } from './lasso'

export class InteractionManager {
    private netv: NetV

    private lasso: LassoManager

    private transform = {
        x: 0,
        y: 0,
        k: 1
    }
    private isMouseDown = false
    private isMouseMove = false
    private mouseDownElement
    private mouseDownElementOriginPos: { x: number; y: number } // NOTE: record pos, only support node's drag

    private mouseDownPos: { x: number; y: number }
    private dragStartTransform: { x: number; y: number; k: number }

    public constructor(netv: NetV) {
        this.netv = netv
    }

    /**
     * init Lasso interaction
     */
    public initLasso() {
        this.lasso = new LassoManager(this.netv)
    }

    /**
     * update lasso data
     */
    public setLassoData() {
        this.lasso.setData()
    }

    /**
     * control use lasso or not
     * @param enable enable lasso or not
     */
    public toggleLasso(enable: boolean) {
        this.lasso.toggleLasso(enable)
    }

    /**
     * set lasso callback
     * callback function can get selected Nodes
     * @param callback selected callback
     */
    public onLassoSelected(callback: (items: Node[]) => {}) {
        this.lasso.onSelectedCallback(callback)
    }

    /**
     * init zoom&pan interaction
     * currently no callback
     */
    public initZoom() {
        const canvas = this.netv.$_container.querySelector('canvas')
        const handleScroll = (evt: MouseWheelEvent) => {
            const x = evt.offsetX || evt.pageX - canvas.offsetLeft
            const y = evt.offsetY || evt.pageY - canvas.offsetTop
            const delta = evt.deltaY ? evt.deltaY / 40 : evt.detail ? -evt.detail : 0
            if (delta) {
                const k = Math.pow(1.1, delta)
                this.transform.x = (1 - k) * x + k * this.transform.x
                this.transform.y = (1 - k) * y + k * this.transform.y

                this.transform.k *= k

                this.netv.$_renderer.setTransform(this.transform)
                this.netv.labelManager.setTransform(this.transform)
                this.netv.draw()
            }

            evt.preventDefault()
        }

        canvas.addEventListener('DOMMouseScroll', handleScroll, false)
        canvas.addEventListener('mousewheel', handleScroll, false)
    }

    /**
     * setup click utility
     */
    public initMouse() {
        const canvas = this.netv.$_container.querySelector('canvas')
        const handleMouseDown = (evt: MouseEvent) => {
            const x = evt.offsetX || evt.pageX - canvas.offsetLeft
            const y = evt.offsetY || evt.pageY - canvas.offsetTop
            const yInv = this.netv.$_configs.height - y

            this.isMouseDown = true
            this.mouseDownPos = { x, y }
            this.dragStartTransform = JSON.parse(JSON.stringify(this.transform))

            this.mouseDownElement = this.netv.getElementByPosition({
                x,
                y: yInv
            })
            if (this.mouseDownElement?.element.position) {
                // record orgin position for drag
                this.mouseDownElementOriginPos = { ...this.mouseDownElement.element.position() }
            }
        }

        const handleMouseMove = (evt: MouseEvent) => {
            const x = evt.offsetX || evt.pageX - canvas.offsetLeft
            const y = evt.offsetY || evt.pageY - canvas.offsetTop

            if (this.isMouseDown) {
                this.isMouseMove = true

                if (!this.mouseDownElement || !this.mouseDownElement.element.position) {
                    // pan, when not dragging node
                    this.transform.x = this.dragStartTransform.x + x - this.mouseDownPos.x
                    this.transform.y = this.dragStartTransform.y + y - this.mouseDownPos.y

                    this.netv.$_renderer.setTransform(this.transform)
                    this.netv.labelManager.setTransform(this.transform)
                    this.netv.draw()
                } else {
                    // drag node
                    this.mouseDownElement.element.position({
                        x:
                            this.mouseDownElementOriginPos.x +
                            (x - this.mouseDownPos.x) / this.transform.k,
                        y:
                            this.mouseDownElementOriginPos.y +
                            (y - this.mouseDownPos.y) / this.transform.k
                    })
                    this.netv.draw()
                    // when dragging, dynamic change label's position. because only operate on single element, it's ok to remove and recreate
                    this.mouseDownElement.element.showLabel(false)
                    this.mouseDownElement.element.showLabel(true)
                }
            } else {
                const yInv = this.netv.$_configs.height - y
                const element = this.netv.getElementByPosition({ x, y: yInv })
                if (element?.element.$_hoverCallback) {
                    element.element.$_hoverCallback(element.element as any)
                }
                return // currently not support hover
            }
        }

        const handleMouseUp = (evt: MouseEvent) => {
            if (!this.isMouseMove && this.mouseDownElement) {
                // click
                if (this.mouseDownElement?.element.$_clickCallback) {
                    this.mouseDownElement.element.$_clickCallback(
                        this.mouseDownElement.element as any
                    ) // TODO: not elegant
                }
            }
            this.isMouseDown = false
            this.isMouseMove = false
            this.mouseDownElement = undefined
        }

        canvas.addEventListener('mousedown', handleMouseDown)
        canvas.addEventListener('mousemove', handleMouseMove)
        canvas.addEventListener('mouseup', handleMouseUp)
    }
}
