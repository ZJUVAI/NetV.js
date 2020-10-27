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
export const lazyUpdateThreshold = 10

export const node = {
    style: {
        shape: 'circle', // default shape
        circle: {
            x: 0,
            y: 0,
            r: 5,
            fill: { r: 0.2, g: 0.6, b: 0.2, a: 0.8 },
            strokeColor: { r: 0.9, g: 0.9, b: 0.9, a: 0.6 },
            strokeWidth: 2
        },
        rect: {
            x: 0,
            y: 0,
            width: 5,
            height: 5,
            fill: { r: 0.2, g: 0.6, b: 0.2, a: 0.8 },
            strokeColor: { r: 0.9, g: 0.9, b: 0.9, a: 0.6 },
            strokeWidth: 2
        }
    },
    showLabel: false,
    // textOffset: { x: 8, y: 0 }, put in label config instead of each node
    clickCallback: (node: Node) => {},
    hoverCallback: (node: Node) => {}
}

export const link = {
    style: {
        shape: 'line',
        line: {
            shape: 'line',
            strokeColor: { r: 0.4, g: 0.6, b: 0.8, a: 0.5 },
            strokeWidth: 2
        }
    },
    clickCallback: (link: Link) => {},
    hoverCallback: (node: Node) => {}
}

export const label = {
    offset: { x: 8, y: 0 },
    fontSize: 18,
    strokeWidth: 0.5
}
