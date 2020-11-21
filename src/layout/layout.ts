import { NodeLinkData } from 'src/interfaces'

export default abstract class Layout {
    protected graph: NodeLinkData
    protected parameters: any
    protected isStopped = false
    protected startCallback: () => {}
    protected tickCallback: () => {}
    protected stopCallback: () => {}

    public constructor(graph: NodeLinkData, parameters) {
        this.graph = graph
        this.parameters = parameters
    }

    public start(): void {}
    public stop(): void {
        this.isStopped = true
    }

    public onStart(cb: () => {}): void {
        this.startCallback = cb
    }
    public onTick?(cb: () => {}): void {
        this.tickCallback = cb
    }
    public onStop(cb: () => {}): void {
        this.stopCallback = cb
    }
}
