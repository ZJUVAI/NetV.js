import * as interfaces from '../interfaces';
import NetV from '../index';
export default class Element {
    readonly type: string;
    $_style: interfaces.NodeStyle | interfaces.LinkStyle;
    $_mousedownCallbackSet: Set<(e: any) => void>;
    $_mouseupCallbackSet: Set<(e: any) => void>;
    $_mouseoverCallbackSet: Set<(e: any) => void>;
    $_mouseoutCallbackSet: Set<(e: any) => void>;
    $_mousemoveCallbackSet: Set<(e: any) => void>;
    $_clickCallbackSet: Set<(e: any) => void>;
    protected $_core: NetV;
    protected $_changeRenderAttribute: (element: Element, key: string) => void;
    protected $_attributes: {};
    constructor(core: NetV, data: interfaces.NodeData | interfaces.LinkData, type: 'Node' | 'Link');
    /**
     * @param {string} eventName
     * @param {(e: any) => any} callback
     * @memberof Element
     */
    on(eventName: string, callback?: (e: any) => any): void;
    /**
     * @param {string} eventName
     * @param {(e: any) => any} callback
     * @memberof Element
     */
    off(eventName: string, callback: (e: any) => any): void;
    /**
     * get/set custom attributes
     * @param key
     * @param value
     */
    attr(key: string, value?: any): any;
    private generateElementStyleGetterSetter;
}
