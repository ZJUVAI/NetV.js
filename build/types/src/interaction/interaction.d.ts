/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description handle all interaction in NetV
 */
import { NetV } from 'src';
export declare class InteractionManager {
    private netv;
    private transform;
    private isMouseDown;
    private isMouseMove;
    private mouseDownElement;
    private mouseDownElementOriginPos;
    private mouseDownPos;
    private dragStartTransform;
    constructor(netv: NetV);
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
