/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description handle all interaction in NetV
 */

import { NetV } from 'src'

export class InteractionManager {
    private netv: NetV
    private transform = {
        x: 0,
        y: 0,
        k: 1
    }
    private isDragging = false
    private dragStartPos: {
        x: number
        y: number
    }
    private dragStartTransform: {
        x: number
        y: number
        k: number
    }

    public constructor(netv: NetV) {
        this.netv = netv
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

        // TODO: maybe can handle on div instead of canvas
        canvas.addEventListener('DOMMouseScroll', handleScroll, false)
        canvas.addEventListener('mousewheel', handleScroll, false)
    }

    /**
     * setup click utility
     */
    // TODO: need rename
    public initClick() {
        const canvas = this.netv.$_container.querySelector('canvas')
        const handleMouseDown = (evt: MouseEvent) => {
            const x = evt.offsetX || evt.pageX - canvas.offsetLeft
            const y = evt.offsetY || evt.pageY - canvas.offsetTop
            const yInv = this.netv.$_configs.height - y

            const element = this.netv.getElementByPosition(x, yInv)
            if (element?.element.$_clickCallback) {
                element.element.$_clickCallback(element.element as any) // TODO: not elegant
            } else {
                if (!this.netv.$_configs.enablePanZoom) return
                this.isDragging = true
                this.dragStartPos = { x, y }
                this.dragStartTransform = JSON.parse(JSON.stringify(this.transform))
            }
        }

        const handleMouseMove = (evt: MouseEvent) => {
            if (!this.isDragging) return

            const x = evt.offsetX || evt.pageX - canvas.offsetLeft
            const y = evt.offsetY || evt.pageY - canvas.offsetTop

            this.transform.x = this.dragStartTransform.x + x - this.dragStartPos.x
            this.transform.y = this.dragStartTransform.y + y - this.dragStartPos.y

            this.netv.$_renderer.setTransform(this.transform)
            this.netv.labelManager.setTransform(this.transform)
            this.netv.draw()
        }

        const handleMouseUp = (evt: MouseEvent) => {
            if (this.isDragging) {
                this.isDragging = false
            }
        }

        canvas.addEventListener('mousedown', handleMouseDown)
        canvas.addEventListener('mousemove', handleMouseMove)
        canvas.addEventListener('mouseup', handleMouseUp)
    }
}
