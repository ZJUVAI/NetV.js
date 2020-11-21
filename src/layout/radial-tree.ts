import * as d3 from 'd3'
import Layout from './layout'

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

    const queue = []
    const tree = { id: rootID, depth: 0, parent: null, children: [] }
    queue.push(tree)

    const visited = new Set([rootID])
    while (queue.length > 0) {
        const x = queue.shift()
        if (!adjNodes[x.id]) continue
        for (const yId of adjNodes[x.id]) {
            if (visited.has(yId)) continue
            const y = { id: yId, depth: x.depth + 1, parent: x, children: [] }
            x.children.push(y)
            queue.push(y)
            visited.add(yId)
        }
    }

    return tree
}

export default class RadialTree extends Layout {
    /**
     * @param {NodeLinkData} graph: the graph data
     * @param {object} parameters:
     *     @param {boolean} directed: the graph is a directed graph or not
     *     @param {number} radius: the max radius of the radial tree layout
     *     @param {string} rootID: the id of the root node
     *     @param {number} centerX/centerY: the position of the root node
     */
    public constructor(graph, parameters) {
        super(graph, parameters)
    }

    public start(): void {
        const graph = this.graph
        const {
            rootID,
            directed = false,
            radius = 300,
            centerX = 400,
            centerY = 300
        } = this.parameters

        graph.nodes.forEach((node) => {
            node.x = centerX
            node.y = centerY
        })

        if (this.startCallback) this.startCallback()
        const tree = graphBFS(graph, rootID, directed)
        const links = getTreeLinks(tree)
        graph.links = links

        const hierachy = d3.hierarchy(tree).sort((a, b) => d3.ascending(a.data.id, b.data.id))

        const d3tree = d3
            .tree()
            .size([2 * Math.PI, radius])
            .separation((a, b) => (a.parent === b.parent ? 1 : 2) / a.depth)
        d3tree(hierachy)
        console.log(hierachy)

        const nodeMap = {}
        for (const node of graph.nodes) {
            nodeMap[node.id] = node
        }

        // bfs hierachy
        const queue = [hierachy]
        const compute = () => {
            const curr = queue.shift()
            const degree = curr.x
            const radius = curr.y
            const x = centerX + radius * Math.cos(degree)
            const y = centerY + radius * Math.sin(degree)
            nodeMap[curr.data.id].x = x
            nodeMap[curr.data.id].y = y
            if (this.tickCallback) {
                this.tickCallback()
            }

            if (!curr.children) return

            for (const child of curr.children) {
                queue.push(child)
            }
            return
        }

        if (this.tickCallback) {
            const frame = () => {
                compute()
                if (!this.isStopped && queue.length > 0) {
                    window.requestAnimationFrame(frame)
                }
            }
            window.requestAnimationFrame(frame)
        } else {
            while (!this.isStopped && queue.length > 0) {
                compute()
            }
        }

        this.graph = graph

        if (this.stopCallback) this.stopCallback()
    }
}
