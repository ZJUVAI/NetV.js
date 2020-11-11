/**
 * @author Xiaodong Zhao
 * @description lasso interaction class
 */

import { Lasso } from 'lasso-selection'
import NetV from '../index'
import Node from '../elements/node'

export class LassoManager {
    private $_svg: SVGElement
    private $_lasso
    private $_core: NetV

    constructor(core: NetV) {
        this.$_svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg') as SVGElement
        this.$_core = core
        core.$_container.prepend(this.$_svg)
        this.$_svg.setAttribute('width', core.$_configs.width)
        this.$_svg.setAttribute('height', core.$_configs.height)
        core.$_container.style.position = 'relative'
        core.$_container.style.overflow = 'hidden'
        core.$_container.style.width = core.$_configs.width
        core.$_container.style.height = core.$_configs.height
        this.$_svg.style.position = 'absolute'
        this.$_svg.style.overflow = 'visible'
        this.$_svg.style.pointerEvents = 'none' // initially disabled

        this.$_lasso = new Lasso(this.$_svg)
    }

    /**
     * enable/disable lasso
     * @param enable use lasso or not
     */
    toggleLasso(enable: boolean) {
        if (enable) {
            this.$_svg.style.pointerEvents = 'visible'
        } else {
            this.$_svg.style.pointerEvents = 'none'
        }
    }

    /**
     * set lasso's data, pull from core
     */
    setData() {
        const data = this.$_core.nodes().map((node: Node) => ({
            x: node.x(),
            y: node.y(),
            node
        }))
        this.$_lasso.data(data)
    }

    /**
     * set lasso's data transfrom
     * @param transform
     */
    setTransform(transform: { x: number; y: number; k: number }) {
        this.$_lasso.dataTransform(transform)
    }

    /**
     * set lasso's selected callback
     * @param callback
     */
    onSelectedCallback(callback: (items: Node[]) => {}) {
        this.$_lasso.onSelected((selectedItems) => {
            const selectedNodes = selectedItems.map((item) => item.node)
            callback(selectedNodes)
        })
    }
}
