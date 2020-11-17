/**
 * @author Xiaodong Zhao
 * @description d3 force wrapper class
 */
import { Layout } from './layout';
import { NetV } from '../index';
declare class D3ForceLayout extends Layout {
    private simulation;
    private data;
    constructor(netv: NetV);
    start(): void;
    stop(): void;
    finish(): void;
}
export { D3ForceLayout };
