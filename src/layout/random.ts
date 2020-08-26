import { Layout } from './layout'
import { NetV } from '../index'

class RandomLayout extends Layout {
    private interval: number
    private sourcePositions: { x: number; y: number }[]
    private currentPositions: { x: number; y: number }[]
    private targetPositions: { x: number; y: number }[]

    public constructor(netv: NetV) {
        super(netv)
    }

    public time(interval: number) {
        this.interval = interval
    }

    public start() {}
    public stop() {}
    public finish() {
        this.computePosition()
        this.currentPositions = this.targetPositions
        this.applyPosition()
    }

    public onStart() {}
    public onTick() {}
    public onStop() {}

    private computePosition() {
        if (this.targetPositions) {
            return
        }
        const nodes = this.netv.nodes()
        this.sourcePositions = nodes.map((n) => ({ x: n.x(), y: n.y() }))
        // random target position
        const width = this.netv.$_configs.width
        const height = this.netv.$_configs.height
        this.targetPositions = Array(this.sourcePositions.length)
            .fill(undefined)
            .map(() => {
                return {
                    x: Math.random() * width,
                    y: Math.random() * height
                }
            })
    }

    private applyPosition() {
        const nodes = this.netv.nodes()
        nodes.forEach((n, i) => {
            n.x(this.currentPositions[i].x)
            n.y(this.currentPositions[i].y)
        })
        this.netv.draw()
    }
}

export { RandomLayout }
