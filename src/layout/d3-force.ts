/**
 * @author Xiaodong Zhao
 * @description d3 force wrapper class
 */

import { Layout } from './layout'
import { NetV } from '../index'
import * as d3Force from 'd3-force'
import { NodeLinkData } from 'src/interfaces'

class D3ForceLayout extends Layout {
    private simulation
    private data: NodeLinkData
    public constructor(netv: NetV) {
        super(netv)

        const width = this.netv.$_configs.width
        const height = this.netv.$_configs.height
        // this.data = this.netv.data() // TODO: maybe need a deep copy
        this.data = {
            nodes: this.netv.nodes().map((node) => ({ id: node.id(), x: node.x(), y: node.y() })),
            links: this.netv
                .links()
                .map((link) => ({ source: link.source().id(), target: link.target().id() }))
        }
        this.simulation = d3Force
            .forceSimulation(this.data.nodes)
            .force(
                'link',
                // @ts-ignore
                d3Force.forceLink(this.data.links).id((d) => d.id)
            )
            .force('charge', d3Force.forceManyBody())
            .force('center', d3Force.forceCenter(width / 2, height / 2))
            .stop() // disable autostart
    }

    public start() {
        this.simulation.on('tick', () => {
            this.data.nodes.forEach((n) => {
                const node = this.netv.getNodeById(n.id)
                node.x(n.x)
                node.y(n.y)
            })

            this.netv.draw()
            this.tickCallback && this.tickCallback()
        })
        this.startCallback && this.startCallback()
        this.simulation.restart()
    }

    public stop() {
        this.simulation.stop()
        this.stopCallback && this.stopCallback()
    }

    public finish() {
        // TODO
    }
}

export { D3ForceLayout }
