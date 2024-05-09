/**
 * @description default configurations in NetV
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 */
export declare const width = 800;
export declare const height = 600;
export declare const backgroundColor: {
    r: number;
    g: number;
    b: number;
    a: number;
};
export declare const enablePanZoom = true;
export declare const nodeLimit = 1000;
export declare const linkLimit = 20000;
export declare const node: {
    style: {
        shape: string;
        offset: {
            x: number;
            y: number;
        };
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
        r: number;
        width: number;
        height: number;
        innerWidth: number;
        innerHeight: number;
        rotate: number;
        vertexAlpha: {
            x: number;
            y: number;
        };
        vertexBeta: {
            x: number;
            y: number;
        };
        vertexGamma: {
            x: number;
            y: number;
        };
    };
};
export declare const link: {
    style: {
        shape: string;
        strokeColor: {
            r: number;
            g: number;
            b: number;
            a: number;
        };
        strokeWidth: number;
        curveness: number;
        dashInterval: number;
    };
};
