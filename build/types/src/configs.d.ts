/**
 * @description default configurations in NetV
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 */
import Node from './node';
import Link from './link';
export declare const width = 800;
export declare const height = 600;
export declare const backgroundColor: {
    r: number;
    g: number;
    b: number;
    a: number;
};
export declare const enablePanZoom = true;
export declare const nodeLimit = 100;
export declare const linkLimit = 1000;
export declare const lazyUpdateThreshold = 10;
export declare const node: {
    r: number;
    fill: {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    strokeColor: {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    strokeWidth: number;
    showLabel: boolean;
    clickCallback: (node: Node) => void;
    hoverCallback: (node: Node) => void;
};
export declare const link: {
    strokeColor: {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    strokeWidth: number;
    clickCallback: (link: Link) => void;
    hoverCallback: (node: Node) => void;
};
export declare const label: {
    offset: {
        x: number;
        y: number;
    };
    fontSize: number;
    strokeWidth: number;
};
