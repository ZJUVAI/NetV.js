/**
 * @description Box selection for NetV.js
 * @author Xiaodong Zhao
 */

export class BoxSelection {
    constructor(netv, configs) {
        this.$_svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        this.$_core = netv
        netv.$_container.prepend(this.$_svg)
        this.$_svg.setAttribute('id', 'box-selection')
        this.$_svg.setAttribute('width', netv.$_configs.width)
        this.$_svg.setAttribute('height', netv.$_configs.height)
        netv.$_container.style.position = 'relative'
        netv.$_container.style.overflow = 'hidden'
        netv.$_container.style.width = netv.$_configs.width
        netv.$_container.style.height = netv.$_configs.height
        this.$_svg.style.position = 'absolute'
        this.$_svg.style.zIndex = '20'
        this.$_svg.style.overflow = 'visible'
        this.$_svg.style.pointerEvents = 'none' // initially disabled

        this._width = netv.$_configs.width
        this._height = netv.$_configs.height

        this._rectStyle = {
            fill: 'rgba(200, 200, 200, 0.2)',
            stroke: 'black',
            'stroke-width': 1,
            'stroke-dasharray': [],
            ...configs.boxStyle
        }

        // this._pathPoints = []
        this._initPos = { x: 0, y: 0 }
        this._rectParams = {
            x: 0,
            y: 0,
            w: 0,
            h: 0
        }
        this._selectedItems = []
        this._selectedCallback = null
        this._onMouseDown = this._onMouseDown.bind(this)
        this._onMouseMove = this._onMouseMove.bind(this)
        this._onMouseUp = this._onMouseUp.bind(this)

        window.addEventListener('mousedown', this._onMouseDown)
        window.addEventListener('mousemove', this._onMouseMove)
        window.addEventListener('mouseup', this._onMouseUp)

        // check config to decide enable it or not
        if (configs && configs.enable === true) {
            this.enable()
        }
    }

    dispose() {
        this.$_svg.remove()
        window.removeEventListener('mousedown', this._onMouseDown)
        window.removeEventListener('mousemove', this._onMouseMove)
        window.removeEventListener('mouseup', this._onMouseUp)
    }

    enable() {
        this.$_svg.style.pointerEvents = 'visible'
    }

    disable() {
        this.$_svg.style.pointerEvents = 'none'
    }

    onSelected(callback) {
        this._selectedCallback = callback
    }

    _onMouseDown(evt) {
        if (evt.button !== 0) {
            // must select with left button
            return
        }
        this._selecting = true
        this._rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
        this._rect.setAttribute('fill', this._rectStyle['fill'])
        this._rect.setAttribute('stroke', this._rectStyle['stroke'])
        this._rect.setAttribute('stroke-width', this._rectStyle['stroke-width'])
        this._rect.setAttribute('stroke-dasharray', this._rectStyle['stroke-dasharray'])
        // this._rect.setAttribute('stroke-linejoin', 'round');
        // this._rect.setAttribute('stroke-linecap', 'round');
        this.$_svg.appendChild(this._rect)

        const x = evt.offsetX
        const y = evt.offsetY

        this._initPos = { x, y }
        this._rectParams.w = 0
        this._rectParams.h = 0
    }

    _onMouseMove(evt) {
        if (evt.button !== 0) {
            // must select with left button
            return
        }
        if (!this._selecting) return
        const x = evt.offsetX
        const y = evt.offsetY
        this._rectParams.w = Math.abs(this._initPos.x - x)
        this._rectParams.h = Math.abs(this._initPos.y - y)
        this._rectParams.x = Math.min(x, this._initPos.x)
        this._rectParams.y = Math.min(y, this._initPos.y)
        this._rect.setAttribute('x', this._rectParams.x)
        this._rect.setAttribute('y', this._rectParams.y)
        this._rect.setAttribute('width', this._rectParams.w)
        this._rect.setAttribute('height', this._rectParams.h)
    }

    _onMouseUp(evt) {
        if (evt.button !== 0) {
            // must select with left button
            return
        }
        this._rect.remove()
        this._getSelectedItems()
        this._selectedCallback && this._selectedCallback(this._selectedItems)
    }

    _getSelectedItems() {
        const items = this.$_core.nodes()
        const dataTransform = this.$_core.transform()
        this._selectedItems = items.filter((item) => {
            const x = item.x() * dataTransform.k + dataTransform.x
            const y = item.y() * dataTransform.k + dataTransform.y
            return (
                x > this._rectParams.x &&
                x < this._rectParams.x + this._rectParams.w &&
                y > this._rectParams.y &&
                y < this._rectParams.y + this._rectParams.h
            )
        })
    }
}
