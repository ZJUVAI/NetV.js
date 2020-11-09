/**
 * @author Xiaodong Zhao
 * @description d3 force wrapper class
 */

import { Layout } from './layout'
import { NetV } from '../index'
import * as d3Force from 'd3-force'

class D3ForceLayout extends Layout {
    private simulation
    public constructor(netv: NetV) {
        super(netv)

        const width = this.netv.$_configs.width
        const height = this.netv.$_configs.height
        const data = this.netv.data() // TODO: maybe need a deep copy
        this.simulation = d3Force
            .forceSimulation(data.nodes)
            .force(
                'link',
                // @ts-ignore
                d3Force.forceLink(data.links).id((d) => d.id)
            )
            .force('charge', d3Force.forceManyBody())
            .force('center', d3Force.forceCenter(width / 2, height / 2))
            .stop() // disable autostart
    }

    public start() {
        this.simulation.on('tick', () => {
            data.nodes.forEach((n) => {
                const node = netv.getNodeById(n.id)
                node.x(n.x)
                node.y(n.y)
            })

            netv.draw()
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
