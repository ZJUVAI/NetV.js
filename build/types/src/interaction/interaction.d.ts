/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description handle all interaction in NetV
 */
import { NetV } from 'src';
import Node from '../node';
import { Position } from '../interfaces';
export declare class InteractionManager {
    private netv;
    private lasso;
    private transform;
    private isMouseDown;
    private isMouseMove;
    private mouseDownElement;
    private mouseDownElementOriginPos;
    private mouseDownPos;
    private dragStartTransform;
    constructor(netv: NetV);
    /**
     * init Lasso interaction
     */
    initLasso(): void;
    /**
     * update lasso data
     */
    setLassoData(): void;
    /**
     * control use lasso or not
     * @param enable enable lasso or not
     */
    toggleLasso(enable: boolean): void;
    /**
     * set lasso callback
     * callback function can get selected Nodes
     * @param callback selected callback
     */
    onLassoSelected(callback: (items: Node[]) => {}): void;
    /**
     * move current position to center of canvas
     * @param pos
     */
    centerPosition(pos: Position): void;
    /**
     * init zoom&pan interaction
     * currently no callback
     */
    initZoom(): void;
    /**
     * setup click utility
     */
    initMouse(): void;
}
