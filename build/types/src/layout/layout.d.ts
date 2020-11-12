/**
 * @author Xiaodong Zhao
 * @description Base class of layout
 */
import { NetV } from '../index';
declare class Layout {
    protected netv: NetV;
    protected startCallback: () => {};
    protected tickCallback: () => {};
    protected stopCallback: () => {};
    constructor(netv: NetV);
    start(): void;
    stop(): void;
    /**
     * call finish to direct get layout result, without transition animation
     */
    finish(): void;
    onStart(cb: () => {}): void;
    onTick(cb: () => {}): void;
    onStop(cb: () => {}): void;
}
export { Layout };
