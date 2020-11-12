/**
 * @author Xiaodong Zhao
 * @description random layout class
 */
import { Layout } from './layout';
import { NetV } from '../index';
declare class RandomLayout extends Layout {
    private _time;
    private sourcePositions;
    private currentPositions;
    private targetPositions;
    constructor(netv: NetV);
    /**
     * set total animation time
     * @param _time
     */
    time(_time: number): void;
    start(): void;
    stop(): void;
    finish(): void;
    /**
     * for random layout, can directly compute target position
     */
    private computePosition;
    /**
     * apply new position to canvas
     */
    private applyPosition;
}
export { RandomLayout };
