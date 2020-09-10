/**
 * @description default configurations in NetV
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 */

import Node from './node'
import Link from './link'

export const width = 800
export const height = 600
export const backgroundColor = { r: 1, g: 1, b: 1, a: 1 }
export const enablePanZoom = true
export const nodeLimit = 100
export const linkLimit = 1000

export const node = {
    r: 5,
    fill: { r: 0.2, g: 0.6, b: 0.2, a: 0.8 },
    // strokeColor: { r: 0.6, g: 0.6, b: 0.6, a: 0.5 },
    strokeColor: { r: 0.9, g: 0.9, b: 0.9, a: 0.6 },
    strokeWidth: 2,
    showLabel: false,
    textOffset: { x: 8, y: 0 },
    clickCallback: (node: Node) => {}
}

export const link = {
    // strokeColor: { r: 0.5, g: 0.5, b: 0.5, a: 0.2 },
    strokeColor: { r: 0.4, g: 0.6, b: 0.8, a: 0.5 },
    strokeWidth: 2,
    clickCallback: (link: Link) => {}
}

export const label = {
    offset: { x: 8, y: 0 }
}
