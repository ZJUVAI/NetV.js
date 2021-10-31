/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description netv's label
 */

export class Label {
    constructor(netv) {
        this.$_core = netv

        this.$_svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        this.$_core.$_container.prepend(this.$_svg)
        this.$_svg.setAttribute('width', this.$_core.$_configs.width)
        this.$_svg.setAttribute('height', this.$_core.$_configs.height)
        this.$_core.$_container.style.position = 'relative'
        this.$_core.$_container.style.overflow = 'hidden'
        this.$_core.$_container.style.width = this.$_core.$_configs.width
        this.$_core.$_container.style.height = this.$_core.$_configs.height
        this.$_svg.style.position = 'absolute'
        this.$_svg.style.zIndex = '10'
        this.$_svg.style.pointerEvents = 'none'
    }

    _drawNode(node, transform, drawFunc) {
        const pos = node.position()
        const x = pos.x * transform.k + transform.x
        const y = pos.y * transform.k + transform.y

        const content = drawFunc(node)

        let gElement = this.getLabel(node)
        if (gElement) {
            this._removeContent(gElement)
            gElement.setAttribute('transform', `translate(${x} ${y})`)
            gElement.append(content)
        } else {
            gElement = document.createElementNS('http://www.w3.org/2000/svg', 'g')
            gElement.setAttribute('id', `${node.id()}`)
            gElement.setAttribute('transform', `translate(${x} ${y})`)
            gElement.append(content)

            this.$_svg.prepend(gElement) // NOTE: make last added text at top
        }
    }

    _updateNodePosition(node, transform) {
        const pos = node.position()
        const x = pos.x * transform.k + transform.x
        const y = pos.y * transform.k + transform.y

        const gElement = this.getLabel(node)
        if (gElement) gElement.setAttribute('transform', `translate(${x} ${y})`)
    }

    _removeContent(element) {
        while (element.firstChild) element.removeChild(element.firstChild)
    }

    dispose() {
        this.$_svg.remove()
    }

    getLabel(node) {
        return this.$_svg.getElementById(node.id())
    }

    draw(node, drawFunc = (node) => rightText(node.id())) {
        const transform = this.$_core.transform()
        if (Array.isArray(node)) {
            // draw multiple nodes
            node.forEach((n) => this._drawNode(n, transform, drawFunc))
        } else {
            // draw single node
            this._drawNode(node, transform, drawFunc)
        }
    }

    updatePosition(node) {
        const transform = this.$_core.transform()
        if (Array.isArray(node)) {
            // draw multiple nodes
            node.forEach((n) => this._updateNodePosition(n, transform))
        } else {
            // draw single node
            this._updateNodePosition(node, transform)
        }
    }

    remove(node) {
        if (Array.isArray(node)) {
            // remove multiple nodes
            node.forEach((n) => {
                this.getLabel(n)?.remove()
            })
        } else {
            // remove single node
            this.getLabel(node)?.remove()
        }
    }
}

// eslint-disable-next-line max-params
const topText = (text, fontSize = 18, fill = 'black', strokeWidth = 0.5, offset = -8) => {
    const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text')

    textElement.setAttribute('font-size', `${fontSize}px`)
    textElement.setAttribute('fill', `${fill}`)
    textElement.setAttribute('stroke', `white`)
    textElement.setAttribute('stroke-width', `${strokeWidth}px`)
    textElement.setAttribute('transform', `translate(0 ${offset})`)
    textElement.setAttribute('text-anchor', 'middle')
    textElement.setAttribute('alignment-baseline', 'bottom')
    textElement.style.userSelect = 'none' // NOTE: prevent unexpected selection when dragging node(delete and recreate textElement)
    textElement.innerHTML = text

    return textElement
}

// eslint-disable-next-line max-params
const rightText = (text, fontSize = 18, fill = 'black', strokeWidth = 0.5, offset = 8) => {
    const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text')

    textElement.setAttribute('font-size', `${fontSize}px`)
    textElement.setAttribute('fill', `${fill}`)
    textElement.setAttribute('stroke', `white`)
    textElement.setAttribute('stroke-width', `${strokeWidth}px`)
    textElement.setAttribute('transform', `translate(${offset} 0)`)
    textElement.setAttribute('text-anchor', 'start')
    textElement.setAttribute('alignment-baseline', 'middle')
    textElement.style.userSelect = 'none' // NOTE: prevent unexpected selection when dragging node(delete and recreate textElement)
    textElement.innerHTML = text

    return textElement
}

Label.template = {
    rightText,
    topText
}
