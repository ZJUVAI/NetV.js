/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description graph label related class or method
 */

import { NetV } from 'src'
import Node from 'src/node'
import { Transform } from '../interfaces'
import { transform } from '@babel/core'

export class LabelManager {
    private $_core: NetV
    private $_svg: SVGElement
    private $_offset: { x: number; y: number }
    private $_transform: Transform
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
        this.$_svg.setAttribute('transform', `translate(${this.$_offset.x} ${this.$_offset.y})`)
    }

    /**
     * draw node's label
     * @param node node to add label
     */
    public drawLabel(node: Node) {
        const pos = node.position()
        const offset = node.textOffset()
        const text = node.text()

        const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text')
        textElement.setAttribute('id', node.id())
        textElement.setAttribute('x', String(pos.x))
        textElement.setAttribute('y', String(pos.y))
        // textElement.setAttribute('x', String(pos.x + offset.x))
        // textElement.setAttribute('y', String(pos.y + offset.y))
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
        this.$_transform = transform
        this.$_svg.setAttribute(
            'transform',
            `translate(${this.$_offset.x + (1 - transform.k) * -400 + transform.x}
             ${this.$_offset.y + (1 - transform.k) * -300 + transform.y})
             scale(${transform.k})`
        )
        this.$_svg.setAttribute('font-size', `${1 / transform.k}em`) // TODO: not consider font size
    }
}
