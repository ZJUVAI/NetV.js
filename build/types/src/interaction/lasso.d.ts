/**
 * @author Xiaodong Zhao
 * @description lasso interaction class
 */
import { NetV } from '../index';
import Node from '../node';
export declare class LassoManager {
    private $_svg;
    private $_lasso;
    private $_core;
    constructor(core: NetV);
    /**
     * enable/disable lasso
     * @param enable use lasso or not
     */
    toggleLasso(enable: boolean): void;
    /**
     * set lasso's data, pull from core
     */
    setData(): void;
    /**
     * set lasso's data transfrom
     * @param transform
     */
    setTransform(transform: {
        x: number;
        y: number;
        k: number;
    }): void;
    /**
     * set lasso's selected callback
     * @param callback
     */
    onSelectedCallback(callback: (items: Node[]) => {}): void;
}
