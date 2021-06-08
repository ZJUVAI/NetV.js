/**
 * @author Jiacheng Pan
 * @email panjiacheng@zju.edu.cn
 * @create date 2021-06-08 15:40:04
 * @modify date 2021-06-08 15:40:04
 * @desc [copy from Xiaodong Zhao's implementation]
 */

import * as d3 from 'd3'
import Layout from './abstract-layout'
import { Data, Callback, ID } from '../interfaces'

interface RadialTreeParams {
    rootID: ID
    directed: boolean
    width: number
    height: number
}

export default class RadialTree implements Layout {
    private _data: Data
    private _param: RadialTreeParams = {
        rootID: undefined,
        directed: false,
        width: 1,
        height: 1
    }
    private _onStopCallback: Callback
    public start() {
        if (this._data.nodes?.length) {
            if (this._param.rootID === undefined) {
                this._param.rootID = this._data.nodes[0].id
            }
            this._data.nodes = radialLayoutMultiple(this._data, this._param)

            this._onStopCallback?.(this._data)
        } else {
            throw new Error('Data is not specified.')
        }
    }
    public data(data?: Data) {
        if (data) this._data = data
        else return this._data
    }
    public parameters(param?: RadialTreeParams) {
        if (param) this._param = param
        else return this._param
    }
    public onStop(callback: Callback) {
        this._onStopCallback = callback
    }
}

function radialLayoutMultiple(graph, configs) {
    // eslint-disable-next-line no-param-reassign
    graph = {
        nodes: graph.nodes.map((node) => ({
            id: node.id
        })),
        links: graph.links.map((link) => ({
            source: link.source,
            target: link.target
        }))
    }
    const { directed = false, width, height, rootID } = configs

    const trees = graphBFS(graph, rootID, directed)
    const treesDegree = trees.map((tree) => tree.degree)
    const bubblePositions = computeBubbleLayoutPosition(treesDegree, width, height)

    graph.links = []

    for (let i = 0; i < trees.length; i++) {
        applyRadialTreeGraph(
            graph,
            trees[i],
            bubblePositions[i].x,
            bubblePositions[i].y,
            bubblePositions[i].r
        )
    }
    return graph
}

// eslint-disable-next-line max-params
function applyRadialTreeGraph(graph, tree, centerX, centerY, radius) {
    const links = getTreeLinks(tree)
    graph.links.push(...links)

    const hierachy = d3.hierarchy(tree).sort((a, b) => d3.ascending(a.data.id, b.data.id))

    const d3tree = d3
        .tree()
        .size([2 * Math.PI, radius])
        .separation((a, b) => (a.parent === b.parent ? 1 : 2) / a.depth)
    d3tree(hierachy)
    // console.log(hierachy)

    const nodeMap = {}
    for (const node of graph.nodes) {
        nodeMap[node.id] = node
    }

    // bfs hierachy
    const queue = [hierachy]

    while (queue.length > 0) {
        const curr = queue.shift()
        const degree = curr.x
        const radius = curr.y
        const x = centerX + radius * Math.cos(degree)
        const y = centerY + radius * Math.sin(degree)
        nodeMap[curr.data.id].x = x
        nodeMap[curr.data.id].y = y

        if (!curr.children) continue

        for (const child of curr.children) {
            queue.push(child)
        }
    }

    return graph
}

// eslint-disable-next-line max-params
function pack(data, width, height, padding, valueFunc) {
    return d3
        .pack()
        .size([width - padding, height - padding])
        .padding(padding)(d3.hierarchy({ children: data }).sum(valueFunc))
}

function computeBubbleLayoutPosition(data, width, height) {
    const bubbles = pack(data, width, height, 20, (d) => (d * 10 + 2) ** 2)
    return bubbles.children.map((x) => ({ x: x.x, y: x.y, r: x.r }))
}

function getTreeLinks(tree) {
    const links = []
    const queue = [tree]

    while (queue.length > 0) {
        const curr = queue.shift()
        for (const child of curr.children) {
            links.push({ source: curr.id, target: child.id })
            queue.push(child)
        }
    }

    return links
}

function rootBaseBFS(adjNodes, rootID, visitedSet) {
    visitedSet.add(rootID)

    const queue = []
    const tree = { id: rootID, depth: 0, parent: null, children: [], degree: undefined }
    queue.push(tree)

    let degree = 0
    while (queue.length > 0) {
        const x = queue.shift()
        degree = Math.max(degree, x.depth)
        if (!adjNodes[x.id]) continue
        for (const yId of adjNodes[x.id]) {
            if (visitedSet.has(yId)) continue
            const y = { id: yId, depth: x.depth + 1, parent: x, children: [] }
            x.children.push(y)
            queue.push(y)
            visitedSet.add(yId)
        }
    }

    tree.degree = degree // NOTE: only root node of tree has degree attribute

    return tree
}

function graphBFS(graph, rootID, directed = false) {
    // construct adjacient relation
    const adjNodes = {}
    for (const { source, target } of graph.links) {
        if (!(source in adjNodes)) {
            adjNodes[source] = new Set()
        }
        adjNodes[source].add(target)

        // consider undirected graph
        if (!directed) {
            if (!(target in adjNodes)) {
                adjNodes[target] = new Set()
            }
            adjNodes[target].add(source)
        }
    }

    const trees = []
    const visitedSet = new Set()
    trees.push(rootBaseBFS(adjNodes, rootID, visitedSet))

    for (const node of graph.nodes) {
        if (!visitedSet.has(node.id)) {
            trees.push(rootBaseBFS(adjNodes, node.id, visitedSet))
        }
    }

    return trees
}

// NOTE: not used, compute depth during BFS
function computeTreeDepth(tree) {
    let depth = 0
    let p = tree
    let q = [p]
    while (q.length > 0) {
        let qq = []
        for (const x of q) {
            if (x.children) {
                for (const y of x.children) {
                    qq.push(y)
                }
            }
        }
        if (qq.length > 0) depth += 1
        q = qq
    }

    return depth
}
