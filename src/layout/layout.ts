import { NetV } from '../index'
import { RandomLayout } from './random'
class Layout {
    protected netv: NetV
    protected startCallback: () => {}
    protected tickCallback: () => {}
    protected stopCallback: () => {}

    public constructor(netv: NetV) {
        this.netv = netv
    }

    public start() {}
    public stop() {}
    public finish() {}

    public onStart(cb: () => {}) {
        this.startCallback = cb
    }
    public onTick(cb: () => {}) {
        this.tickCallback = cb
    }
    public onStop(cb: () => {}) {
        this.stopCallback = cb
    }
}

export { Layout, RandomLayout }
