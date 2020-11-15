/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description handle all interaction in NetV
 */

import NetV from 'src'
import Node from '../elements/node'
import { LassoManager } from './lasso'

export class InteractionManager {
    public clickListenedElementsCount = 0
    public hoverListenedElementsCount = 0
    public dragListenedElementsCount = 0

    private netv: NetV
    private canvas: HTMLCanvasElement

    private lasso: LassoManager

    private transform = {
        x: 0,
        y: 0,
        k: 1
    }

    private isZoomListened = false
    private isMouseListened = false

    // map user defined callback => handlers, can be use to remove listeners
    private zoomCallbackSet: Set<(e: any) => any>
    private panCallbackSet: Set<(e: any) => any>

    private isMouseDown = false
    private isMouseMove = false
    private mouseDownElement
    private mouseDownElementOriginPos: { x: number; y: number } // NOTE: record pos, only support node's drag

    private mouseDownPos: { x: number; y: number }
    private dragStartTransform: { x: number; y: number; k: number }

    public constructor(netv: NetV) {
        this.netv = netv
        this.canvas = this.netv.$_container.querySelector('canvas')
        this.zoomCallbackSet = new Set()
        this.panCallbackSet = new Set()
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
     * init zoom interaction
     */
    public onZoom(callback: (e: any) => any) {
        this.zoomCallbackSet.add(callback)

        if (!this.isZoomListened) {
            this.canvas.addEventListener('DOMMouseScroll', this.handleZoom, false)
            this.canvas.addEventListener('mousewheel', this.handleZoom, false)
            this.isZoomListened = true
        }
    }

    public offZoom(callback: (e: any) => any) {
        const canvas = this.netv.$_container.querySelector('canvas')
        this.zoomCallbackSet.delete(callback)
        if (!this.zoomCallbackSet.size) {
            canvas.removeEventListener('DOMMouseScroll', this.handleZoom)
            canvas.removeEventListener('mousewheel', this.handleZoom)
            this.isZoomListened = false
        }
    }

    public onPan(callback: (e: any) => any) {
        const canvas = this.canvas

        this.panCallbackSet.add(callback)

        if (!this.isMouseListened) {
            canvas.addEventListener('mousedown', this.handleMouseDown)
            canvas.addEventListener('mousemove', this.handleMouseMove)
            canvas.addEventListener('mouseup', this.handleMouseUp)
            this.isMouseListened = true
        }
    }

    public offPan(callback: (e: any) => any) {
        const canvas = this.canvas

        this.panCallbackSet.delete(callback)

        // TODO maybe we need to removeEventListener, but the mouse event listener are shared by click/hover/...
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
                    this.lasso.setTransform(this.transform)
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

    /**
     * @private handle zoom (mouse wheel) event
     * @param {WheelEvent} evt
     * @memberof InteractionManager
     */
    private handleZoom(evt: WheelEvent) {
        const x = evt.offsetX || evt.pageX - this.canvas.offsetLeft
        const y = evt.offsetY || evt.pageY - this.canvas.offsetTop
        const delta = evt.deltaY ? evt.deltaY / 40 : evt.detail ? -evt.detail : 0
        if (delta) {
            const k = Math.pow(1.1, delta)
            this.transform.x = (1 - k) * x + k * this.transform.x
            this.transform.y = (1 - k) * y + k * this.transform.y

            this.transform.k *= k

            this.netv.$_renderer.setTransform(this.transform)
            this.netv.labelManager.setTransform(this.transform)
            this.lasso.setTransform(this.transform)
            this.netv.draw()
        }

        evt.preventDefault()

        this.zoomCallbackSet.forEach((callback) =>
            callback({
                event: evt,
                transform: this.transform
            })
        )
    }

    /**
     * @private handle mouse down event
     * @param {MouseEvent} evt
     * @memberof InteractionManager
     */
    private handleMouseDown(evt: MouseEvent) {
        const x = evt.offsetX || evt.pageX - this.canvas.offsetLeft
        const y = evt.offsetY || evt.pageY - this.canvas.offsetTop
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

    /**
     * @private handle mouse move event
     * @param {MouseEvent} evt
     * @memberof InteractionManager
     */
    private handleMouseMove(evt: MouseEvent) {
        const x = evt.offsetX || evt.pageX - this.canvas.offsetLeft
        const y = evt.offsetY || evt.pageY - this.canvas.offsetTop

        if (this.isMouseDown) {
            this.isMouseMove = true

            if (!this.mouseDownElement || !this.mouseDownElement.element.position) {
                // pan, when not dragging node
                this.transform.x = this.dragStartTransform.x + x - this.mouseDownPos.x
                this.transform.y = this.dragStartTransform.y + y - this.mouseDownPos.y

                this.netv.$_renderer.setTransform(this.transform)
                this.netv.labelManager.setTransform(this.transform)
                this.lasso.setTransform(this.transform)
                this.netv.draw()

                this.panCallbackSet.forEach((callback) =>
                    callback({
                        event: evt,
                        transform: this.transform
                    })
                )
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

    /**
     * @private handle mouse up event
     * @param {MouseEvent} evt
     * @memberof InteractionManager
     */
    private handleMouseUp(evt: MouseEvent) {
        if (!this.isMouseMove && this.mouseDownElement) {
            // click
            if (this.mouseDownElement?.element.$_clickCallback) {
                this.mouseDownElement.element.$_clickCallback(this.mouseDownElement.element as any) // TODO: not elegant
            }
        }
        this.isMouseDown = false
        this.isMouseMove = false
        this.mouseDownElement = undefined
    }
}
