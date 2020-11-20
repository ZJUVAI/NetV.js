import NetV from '../index'

abstract class Layout {
    protected netv: NetV
    protected startCallback: () => {}
    protected tickCallback: () => {}
    protected stopCallback: () => {}

    public constructor(netv: NetV) {
        this.netv = netv
    }

    public abstract start(): void
    public abstract stop(): void

    public abstract onStart(cb: () => {}): void
    public abstract onTick?(cb: () => {}): void
    public abstract onStop(cb: () => {}): void
}
