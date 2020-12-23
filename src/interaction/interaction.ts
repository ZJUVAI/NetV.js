/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description handle all interaction in NetV
 */

import NetV from '../index'
import Node from '../elements/node'
import Element from '../elements/element'
import { Position } from '../interfaces'

export class InteractionManager {
    private netv: NetV
    private canvas: HTMLCanvasElement

    private isZoomListened = false
    private isMouseListened = false
    private mouseEventCallbackCount = 0

    // map user defined callback => handlers, can be use to remove listeners
    private zoomCallbackSet: Set<(e: any) => any>
    private panCallbackSet: Set<(e: any) => any>
    private clickCallbackSet: Set<(e: any) => any>
    private mousedownCallbackSet: Set<(e: any) => any>
    private mouseupCallbackSet: Set<(e: any) => any>

    private isMouseDown = false
    private isMouseMove = false
    private mouseDownElement
    private mouseMoveElement
    private mouseDownElementOriginPos: { x: number; y: number } // NOTE: record pos, only support node's drag

    private mouseDownPos: { x: number; y: number }
    private dragStartTransform: { x: number; y: number; k: number }

    public constructor(netv: NetV) {
        this.netv = netv
        this.canvas = this.netv.$_container.querySelector('canvas')
        this.zoomCallbackSet = new Set()
        this.panCallbackSet = new Set()
        this.clickCallbackSet = new Set()
        this.mousedownCallbackSet = new Set()
        this.mouseupCallbackSet = new Set()
    }

    /**
     * progmatically pan
     * @param x
     * @param y
     */
    public panBy(x: number, y: number) {
        const newTransform = { ...this.netv.$_transform }
        newTransform.x += x
        newTransform.y += y
        return this.netv.transform(newTransform)
    }

    /**
     * progmatically zoom
     * @param factor zoom factor
     * @param center optional, zoom center position
     */
    public zoomBy(factor: number, center?: Position) {
        const newTransform = { ...this.netv.$_transform }
        let centerPos = center
        if (!centerPos) {
            centerPos = { x: this.netv.$_configs.width / 2, y: this.netv.$_configs.height / 2 }
        }
        const { x, y } = centerPos

        newTransform.x = (1 - factor) * x + factor * newTransform.x
        newTransform.y = (1 - factor) * y + factor * newTransform.y

        newTransform.k *= factor

        return this.netv.transform(newTransform)
    }

    /**
     * move current position to center of canvas
     * @param pos
     */
    public centerPosition(pos: Position) {
        const newTransform = { ...this.netv.$_transform }
        const x = pos.x * newTransform.k + newTransform.x
        const y = pos.y * newTransform.k + newTransform.y

        const center = {
            x: this.netv.$_configs.width / 2,
            y: this.netv.$_configs.height / 2
        }
        newTransform.x += center.x - x
        newTransform.y += center.y - y
        this.netv.transform(newTransform)
        return newTransform
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

    public onClick(callback: (e: any) => any) {
        this.clickCallbackSet.add(callback)
        this.increaseMouseEventCallbackCountBy(1)
    }

    public offClick(callback: (e: any) => any) {
        this.clickCallbackSet.delete(callback)
        this.decreaseMouseEventCallbackCountBy(1)
    }

    public onMousedown(callback: (e: any) => any) {
        this.mousedownCallbackSet.add(callback)
        this.increaseMouseEventCallbackCountBy(1)
    }

    public offMousedown(callback: (e: any) => any) {
        this.mousedownCallbackSet.delete(callback)
        this.decreaseMouseEventCallbackCountBy(1)
    }

    public onMouseup(callback: (e: any) => any) {
        this.mouseupCallbackSet.add(callback)
        this.increaseMouseEventCallbackCountBy(1)
    }

    public offMouseup(callback: (e: any) => any) {
        this.mouseupCallbackSet.delete(callback)
        this.decreaseMouseEventCallbackCountBy(1)
    }

    public onPan(callback: (e: any) => any) {
        this.panCallbackSet.add(callback)
        this.increaseMouseEventCallbackCountBy(1)
    }

    public offPan(callback: (e: any) => any) {
        this.panCallbackSet.delete(callback)
        this.decreaseMouseEventCallbackCountBy(1)
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
        const newTransform = { ...this.netv.$_transform }
        const x = evt.offsetX || evt.pageX - this.canvas.offsetLeft
        const y = evt.offsetY || evt.pageY - this.canvas.offsetTop
        const delta = evt.deltaY ? evt.deltaY / 40 : evt.detail ? -evt.detail : 0
        if (delta) {
            const k = Math.pow(1.1, delta)
            newTransform.x = (1 - k) * x + k * newTransform.x
            newTransform.y = (1 - k) * y + k * newTransform.y

            newTransform.k *= k

            this.netv.transform(newTransform)
            this.netv.draw()

            this.zoomCallbackSet.forEach((callback) =>
                callback({
                    event: evt,
                    name: 'zoom',
                    transform: newTransform
                })
            )
        }

        evt.preventDefault()
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

        const newTransform = { ...this.netv.$_transform }

        this.isMouseDown = true
        this.mouseDownPos = { x, y }
        this.dragStartTransform = JSON.parse(JSON.stringify(newTransform))

        this.mouseDownElement = this.netv.getElementByPosition({
            x,
            y: yInv
        })

        if (this.mouseDownElement?.element) {
            const element = this.mouseDownElement.element
            if (element?.type === 'Node') {
                // only node can be dragged
                // record orgin position for drag
                this.mouseDownElementOriginPos = { ...element.position() }
            }
            element.$_mousedownCallbackSet.forEach((callback) => {
                callback({
                    event: evt,
                    name: 'mousedown',
                    element
                })
            })
        } else {
            this.mousedownCallbackSet.forEach((callback) => {
                callback({
                    event: evt,
                    name: 'mousedown'
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
        let newTransform = { ...this.netv.$_transform }
        const x = evt.offsetX || evt.pageX - this.canvas.offsetLeft
        const y = evt.offsetY || evt.pageY - this.canvas.offsetTop

        const lastIsMouseMove = this.isMouseMove
        const lastMouseMoveElement = this.mouseMoveElement

        if (this.isMouseDown) {
            this.isMouseMove = true
            const element = this.mouseDownElement?.element as Node
            // drag a node: 1. mousedown on a Node; and 2. the node is listened;
            // else pan
            if (
                element?.type === 'Node' &&
                element.$_dragstartCallbackSet.size +
                    element.$_draggingCallbackSet.size +
                    element.$_dragendCallbackSet.size
            ) {
                // drag a listened node
                if (!lastIsMouseMove) {
                    // last time, the mouse is not move
                    element.$_dragstartCallbackSet.forEach((callback) => {
                        callback({
                            event: evt,
                            name: 'dragstart',
                            element
                        })
                    })
                }

                // change node position
                element.position({
                    x:
                        this.mouseDownElementOriginPos.x +
                        (x - this.mouseDownPos.x) / newTransform.k,
                    y: this.mouseDownElementOriginPos.y + (y - this.mouseDownPos.y) / newTransform.k
                })

                this.netv.draw()

                element.$_draggingCallbackSet.forEach((callback) => {
                    callback({
                        event: evt,
                        name: 'dragging',
                        element
                    })
                })
            } else {
                // pan, when not dragging node
                newTransform.x = this.dragStartTransform.x + x - this.mouseDownPos.x
                newTransform.y = this.dragStartTransform.y + y - this.mouseDownPos.y
                if (this.panCallbackSet.size) {
                    this.netv.transform(newTransform)
                    this.netv.draw()
                    this.panCallbackSet.forEach((callback) =>
                        callback({
                            event: evt,
                            name: 'pan',
                            transform: newTransform
                        })
                    )
                }
            }
        } else {
            // hover
            const yInv = this.netv.$_configs.height - y
            const element = this.netv.getElementByPosition({ x, y: yInv })?.element
            this.mouseMoveElement = element
            if (lastMouseMoveElement === element) {
                element?.$_mousemoveCallbackSet.forEach((callback) =>
                    callback({
                        event: evt,
                        name: 'mousemove',
                        element
                    })
                )
            } else {
                lastMouseMoveElement?.$_mouseoutCallbackSet.forEach((callback) =>
                    callback({
                        event: evt,
                        name: 'mouseout',
                        element: lastMouseMoveElement
                    })
                )
                element?.$_mouseoverCallbackSet.forEach((callback) =>
                    callback({
                        event: evt,
                        name: 'mouseover',
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
            } else {
                // click
                const element = this.mouseDownElement.element
                element.$_clickCallbackSet.forEach((callback) =>
                    callback({
                        event: evt,
                        name: 'click',
                        element
                    })
                )
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
        } else {
            // canvas mouseup
            this.mouseupCallbackSet.forEach((callback) =>
                callback({
                    event: evt,
                    name: 'mouseup'
                })
            )
            if (!this.isMouseMove) {
                // click, not pan

                this.clickCallbackSet.forEach((callback) =>
                    callback({
                        event: evt,
                        name: 'click'
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
