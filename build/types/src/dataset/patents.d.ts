/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description Patents dataset, from https://www.patentsview.org/web/#viz/relationships
 */
export declare const patents: {
    nodes: ({
        type: string;
        id: string;
        name: string;
        numCitations: number;
        x: number;
        y: number;
        numPatents?: undefined;
    } | {
        type: string;
        id: string;
        name: string;
        numPatents: number;
        x: number;
        y: number;
        numCitations?: undefined;
    })[];
    links: {
        source: string;
        target: string;
    }[];
};
