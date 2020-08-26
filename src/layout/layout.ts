/**
 * @author Xiaodong Zhao
 * @description Base class of layout
 */

import { NetV } from '../index'
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

    /**
     * call finish to direct get layout result, without transition animation
     */
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

export { Layout }
