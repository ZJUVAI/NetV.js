/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description some utility functions
 */

import { NodeLinkData } from 'src/interfaces'

/**
 * given a graph data with position, return a copy of graph, with position transformed to center of given size
 * @param graph node link graph data
 * @param size graph size (max(width, height))
 * @param centerX x pos of graph center
 * @param centerY y pos of graph center
 */
export function transformGraphPosition(
    graph: NodeLinkData,
    size: number,
    centerX: number,
    centerY: number
) {
    const targetGraph: NodeLinkData = JSON.parse(JSON.stringify(graph))
    const xs = targetGraph.nodes.map((node) => node.x)
    const ys = targetGraph.nodes.map((node) => node.y)
    const xMin = Math.min(...xs)
    const xMax = Math.max(...xs)
    const yMin = Math.min(...ys)
    const yMax = Math.max(...ys)

    const xMid = (xMin + xMax) / 2
    const yMid = (yMin + yMax) / 2

    targetGraph.nodes.forEach((node) => {
        node.x = ((node.x - xMid) / (xMax - xMin)) * size + centerX
        node.y = ((node.y - yMid) / (yMax - yMin)) * size + centerY
    })

    return targetGraph
}
