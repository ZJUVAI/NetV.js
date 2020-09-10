/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description graph label related class or method
 */

import { NetV } from 'src'
import Node from 'src/node'
import { Transform } from '../interfaces'

export class LabelManager {
    private $_core: NetV
    private $_svg: SVGElement
    private $_offset: { x: number; y: number }
    private $_fontSize: number
    private $_strokeWidth: number
    
    public constructor(core: NetV) {
        this.$_core = core

        this.$_svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg') as SVGElement
        core.$_container.prepend(this.$_svg)
        this.$_svg.setAttribute('width', core.$_configs.width)
        this.$_svg.setAttribute('height', core.$_configs.height)
        core.$_container.style.position = 'relative'
        core.$_container.style.overflow = 'hidden'
        this.$_svg.style.position = 'absolute'
        this.$_svg.style.overflow = 'visible'
        this.$_svg.style.pointerEvents = 'none'

        this.$_offset = this.$_core.$_configs.label.offset
        this.$_fontSize = this.$_core.$_configs.label.fontSize
        this.$_strokeWidth = this.$_core.$_configs.label.strokeWidth
        this.$_svg.setAttribute('transform', `translate(${this.$_offset.x} ${this.$_offset.y})`)
        this.$_svg.setAttribute('font-size', `${this.$_fontSize}px`)
        this.$_svg.setAttribute('stroke', `white`)
        this.$_svg.setAttribute('stroke-width', `${this.$_strokeWidth}px`)
    }

    /**
     * draw node's label
     * @param node node to add label
     */
    public drawLabel(node: Node) {
        const pos = node.position()
        const text = node.text()

        const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text')
        textElement.setAttribute('id', node.id())
        textElement.setAttribute('x', String(pos.x))
        textElement.setAttribute('y', String(pos.y))
        textElement.setAttribute('text-anchor', 'start')
        textElement.setAttribute('alignment-baseline', 'middle')
        textElement.innerHTML = text

        this.$_svg.appendChild(textElement)
    }

    /**
     * remove node's label
     * @param node node to delete label
     */
    public removeLabel(node: Node) {
        // @ts-ignore
        this.$_svg.getElementById(node.id())?.remove()
    }

    /**
     * set viewport transform
     * @param transform
     */
    public setTransform(transform: Transform) {
        this.$_svg.setAttribute(
            'transform',
            `translate(${this.$_offset.x + (1 - transform.k) * -400 + transform.x}
             ${this.$_offset.y + (1 - transform.k) * -300 + transform.y})
             scale(${transform.k})`
        )
        this.$_svg.setAttribute('font-size', `${this.$_fontSize / transform.k}px`)
        this.$_svg.setAttribute('stroke-width', `${this.$_strokeWidth / transform.k}px`)
    }
}
