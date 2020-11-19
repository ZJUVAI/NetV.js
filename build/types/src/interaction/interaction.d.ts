/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description handle all interaction in NetV
 */
import { NetV } from 'src';
import { Position } from '../interfaces';
export declare class InteractionManager {
    private netv;
    private isMouseDown;
    private isMouseMove;
    private mouseDownElement;
    private mouseDownElementOriginPos;
    private mouseDownPos;
    private dragStartTransform;
    constructor(netv: NetV);
    /**
     * progmatically pan
     * @param x
     * @param y
     */
    panBy(x: number, y: number): void;
    /**
     * progmatically zoom
     * @param factor zoom factor
     * @param center optional, zoom center position
     */
    zoomBy(factor: number, center?: Position): void;
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
