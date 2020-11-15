/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description handle all interaction in NetV
 */

import NetV from 'src'
import Node from 'src/elements/node'
import Element from '../elements/element'
import { LassoManager } from './lasso'

export class InteractionManager {
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
    private mouseEventCallbackCount = 0

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
            this.addWheelListeners()
            this.isZoomListened = true
        }
    }

    public offZoom(callback: (e: any) => any) {
        this.zoomCallbackSet.delete(callback)

        if (!this.zoomCallbackSet.size) {
            this.removeWheelListeners()
            this.isZoomListened = false
        }
    }

    public onPan(callback: (e: any) => any) {
        this.panCallbackSet.add(callback)

        if (!this.isMouseListened) {
            this.addMouseListeners()
            this.isMouseListened = true
        }
    }

    public offPan(callback: (e: any) => any) {
        this.panCallbackSet.delete(callback)

        if (!this.panCallbackSet.size && this.mouseEventCallbackCount <= 0) {
            // no pan callback functions and no listened mouse event on elements
            this.removeMouseListeners()
            this.isMouseListened = false
        }
    }

    public increaseMouseEventCallbackCountBy(n: number) {
        this.mouseEventCallbackCount += n
        if (!this.isMouseListened && this.mouseEventCallbackCount > 0) {
            // there is some mouse event listened elements
            this.addMouseListeners()
            this.isMouseListened = true
        }
    }

    public decreaseMouseEventCallbackCountBy(n: number) {
        this.mouseEventCallbackCount -= n
        if (this.mouseEventCallbackCount <= 0 && !this.panCallbackSet.size) {
            // no pan callback functions and no mouse event listened elements
            this.removeMouseListeners()
            this.isMouseListened = false
        }
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
                name: 'zoom',
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

        if (this.mouseDownElement?.element.constructor.name === 'Node') {
            const element = this.mouseDownElement.element as Node // only node can be dragged
            // record orgin position for drag
            this.mouseDownElementOriginPos = { ...element.position() }
            element.$_mousedownCallbackSet.forEach((callback) => {
                callback({
                    event: evt,
                    name: 'mousedown',
                    element
                })
            })
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

        const lastIsMouseMove = this.isMouseMove

        if (this.isMouseDown) {
            this.isMouseMove = true

            if (
                !this.mouseDownElement ||
                this.mouseDownElement.element.constructor.name !== 'Node'
            ) {
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
                        name: 'pan',
                        transform: this.transform
                    })
                )
            } else {
                const element: Node = this.mouseDownElement.element
                if (!lastIsMouseMove) {
                    element.$_dragstartCallbackSet.forEach((callback) => {
                        callback({
                            event: evt,
                            name: 'dragstart',
                            element
                        })
                    })
                }

                // drag node
                element.position({
                    x:
                        this.mouseDownElementOriginPos.x +
                        (x - this.mouseDownPos.x) / this.transform.k,
                    y:
                        this.mouseDownElementOriginPos.y +
                        (y - this.mouseDownPos.y) / this.transform.k
                })

                this.netv.draw()

                element.$_draggingCallbackSet.forEach((callback) => {
                    callback({
                        event: evt,
                        name: 'dragging',
                        element
                    })
                })

                // when dragging, dynamic change label's position. because only operate on single element, it's ok to remove and recreate
                element.showLabel(false)
                element.showLabel(true)
            }
        } else {
            const yInv = this.netv.$_configs.height - y
            const element = this.netv.getElementByPosition({ x, y: yInv })?.element
            if (element?.$_hoverCallbackSet.size) {
                element.$_hoverCallbackSet.forEach((callback) =>
                    callback({
                        event: evt,
                        name: 'hover',
                        element
                    })
                )
            }
        }
    }

    /**
     * @private handle mouse up event
     * @param {MouseEvent} evt
     * @memberof InteractionManager
     */
    private handleMouseUp(evt: MouseEvent) {
        if (this.mouseDownElement) {
            if (this.isMouseMove) {
                // drag
                if (this.mouseDownElement?.element.$_dragendCallbackSet) {
                    const element = this.mouseDownElement.element as Node
                    element.$_dragendCallbackSet.forEach((callback) =>
                        callback({
                            event: evt,
                            name: 'dragend',
                            element
                        })
                    )
                }
            }
            // mouseup
            if (this.mouseDownElement?.element.$_mouseupCallbackSet) {
                const element = this.mouseDownElement.element as Element
                element.$_mouseupCallbackSet.forEach((callback) =>
                    callback({
                        event: evt,
                        name: 'mouseup',
                        element
                    })
                )
            }
        }
        this.isMouseDown = false
        this.isMouseMove = false
        this.mouseDownElement = undefined
    }

    private addWheelListeners() {
        this.canvas.addEventListener('DOMMouseScroll', this.handleZoom.bind(this), false)
        this.canvas.addEventListener('mousewheel', this.handleZoom.bind(this), false)
    }

    private removeWheelListeners() {
        this.canvas.removeEventListener('DOMMouseScroll', this.handleZoom.bind(this))
        this.canvas.removeEventListener('mousewheel', this.handleZoom.bind(this))
    }

    private addMouseListeners() {
        const canvas = this.canvas
        canvas.addEventListener('mousedown', this.handleMouseDown.bind(this))
        canvas.addEventListener('mousemove', this.handleMouseMove.bind(this))
        canvas.addEventListener('mouseup', this.handleMouseUp.bind(this))
    }

    private removeMouseListeners() {
        const canvas = this.canvas
        canvas.removeEventListener('mousedown', this.handleMouseDown.bind(this))
        canvas.removeEventListener('mousemove', this.handleMouseMove.bind(this))
        canvas.removeEventListener('mouseup', this.handleMouseUp.bind(this))
    }
}
