import { NetV } from '../index'
import { RandomLayout } from './random'
class Layout {
    protected netv: NetV

    public constructor(netv: NetV) {
        this.netv = netv
    }

    public start() {}
    public stop() {}
    public finish() {}

    public onStart() {}
    public onTick() {}
    public onStop() {}
}

export { Layout, RandomLayout }
