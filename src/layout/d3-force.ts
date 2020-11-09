/**
 * @author Xiaodong Zhao
 * @description d3 force wrapper class
 */

import { Layout } from './layout'
import { NetV } from '../index'

class D3ForceLayout extends Layout {
    public constructor(netv: NetV) {
        super(netv)
    }

    public start() {

    }

    public stop() {

    }

    public finish() {

    }


    /**
     * apply new position to canvas
     */
    private applyPosition() {
        const nodes = this.netv.nodes()
        nodes.forEach((n, i) => {
            n.x(this.currentPositions[i].x)
            n.y(this.currentPositions[i].y)
        })
        this.netv.draw()
    }
}
