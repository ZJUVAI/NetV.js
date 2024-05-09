/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description handle all interaction in NetV
 */
import NetV from '../index';
import { Position } from '../interfaces';
export declare class InteractionManager {
    private netv;
    private canvas;
    private isZoomListened;
    private isMouseListened;
    private mouseEventCallbackCount;
    private zoomCallbackSet;
    private panCallbackSet;
    private clickCallbackSet;
    private mousedownCallbackSet;
    private mouseupCallbackSet;
    private isMouseDown;
    private isMouseMove;
    private mouseDownElement;
    private mouseMoveElement;
    private mouseDownElementOriginPos;
    private mouseDownPos;
    private dragStartTransform;
    constructor(netv: NetV);
    /**
     * progmatically pan
     * @param x
     * @param y
     */
    panBy(x: number, y: number): import("../interfaces").Transform;
    /**
     * progmatically zoom
     * @param factor zoom factor
     * @param center optional, zoom center position
     */
    zoomBy(factor: number, center?: Position): import("../interfaces").Transform;
    /**
     * move current position to center of canvas
     * @param pos
     */
    centerPosition(pos: Position): {
        x: number;
        y: number;
        k: number;
    };
    /**
     * init zoom interaction
     */
    onZoom(callback: (e: any) => any): void;
    offZoom(callback: (e: any) => any): void;
    onClick(callback: (e: any) => any): void;
    offClick(callback: (e: any) => any): void;
    onMousedown(callback: (e: any) => any): void;
    offMousedown(callback: (e: any) => any): void;
    onMouseup(callback: (e: any) => any): void;
    offMouseup(callback: (e: any) => any): void;
    onPan(callback: (e: any) => any): void;
    offPan(callback: (e: any) => any): void;
    increaseMouseEventCallbackCountBy(n: number): void;
    decreaseMouseEventCallbackCountBy(n: number): void;
    /**
     * @private handle zoom (mouse wheel) event
     * @param {WheelEvent} evt
     * @memberof InteractionManager
     */
    private handleZoom;
    /**
     * @private handle mouse down event
     * @param {MouseEvent} evt
     * @memberof InteractionManager
     */
    private handleMouseDown;
    /**
     * @private handle mouse move event
     * @param {MouseEvent} evt
     * @memberof InteractionManager
     */
    private handleMouseMove;
    /**
     * @private handle mouse up event
     * @param {MouseEvent} evt
     * @memberof InteractionManager
     */
    private handleMouseUp;
    private addWheelListeners;
    private removeWheelListeners;
    private addMouseListeners;
    private removeMouseListeners;
}
