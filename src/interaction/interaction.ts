/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description handle all interaction in NetV
 */

import { NetV } from '../index'
import { Position, Transform } from '../interfaces'

export class InteractionManager {
    private netv: NetV
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
     * progmatically pan
     * @param x
     * @param y
     */
    public panBy(x: number, y: number) {
        const newTransform = { ...this.netv.$_transform }
        newTransform.x += x
        newTransform.y += y
        this.netv.transform(newTransform)
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

        this.netv.transform(newTransform)
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
        // newTransform.x += center.x - x
        // newTransform.y += center.y - y
        // interpolation
        const stepCount = 20
        const difference = {
            x: center.x - x,
            y: center.y - y
        }
        const originTranslate = {
            x: newTransform.x,
            y: newTransform.y
        }

        const ease = (x) => {
            return x * x
        }

        let steps = 1

        const animation = setInterval(() => {
            newTransform.x = originTranslate.x + difference.x * ease(steps / stepCount)
            newTransform.y = originTranslate.y + difference.y * ease(steps / stepCount)

            this.netv.transform(newTransform)

            steps += 1
            if (steps > stepCount) clearInterval(animation)
        }, 500 / stepCount)
    }

    /**
     * init zoom&pan interaction
     * currently no callback
     */
    public initZoom() {
        const canvas = this.netv.$_container.querySelector('canvas')
        const handleScroll = (evt: MouseWheelEvent) => {
            const newTransform = { ...this.netv.$_transform }
            const x = evt.offsetX || evt.pageX - canvas.offsetLeft
            const y = evt.offsetY || evt.pageY - canvas.offsetTop
            const delta = evt.deltaY ? evt.deltaY / 40 : evt.detail ? -evt.detail : 0
            if (delta) {
                const k = Math.pow(1.1, delta)
                newTransform.x = (1 - k) * x + k * newTransform.x
                newTransform.y = (1 - k) * y + k * newTransform.y

                newTransform.k *= k

                this.netv.transform(newTransform)
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
        let newTransform = { ...this.netv.$_transform }
        const canvas = this.netv.$_container.querySelector('canvas')
        const handleMouseDown = (evt: MouseEvent) => {
            newTransform = { ...this.netv.$_transform }
            const x = evt.offsetX || evt.pageX - canvas.offsetLeft
            const y = evt.offsetY || evt.pageY - canvas.offsetTop
            const yInv = this.netv.$_configs.height - y

            this.isMouseDown = true
            this.mouseDownPos = { x, y }
            this.dragStartTransform = JSON.parse(JSON.stringify(newTransform))

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
                    newTransform.x = this.dragStartTransform.x + x - this.mouseDownPos.x
                    newTransform.y = this.dragStartTransform.y + y - this.mouseDownPos.y

                    this.netv.transform(newTransform)
                } else {
                    // drag node
                    this.mouseDownElement.element.position({
                        x:
                            this.mouseDownElementOriginPos.x +
                            (x - this.mouseDownPos.x) / newTransform.k,
                        y:
                            this.mouseDownElementOriginPos.y +
                            (y - this.mouseDownPos.y) / newTransform.k
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
