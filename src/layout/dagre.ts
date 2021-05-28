import { Link, Node } from './util';
import BaseLayout from "./base";
import { DagreLayoutOptions } from "./options";
import * as dagre from "dagre"
import { isArray, isCircle, isNumber, isRect } from "./util";
/**
 * 层次布局
 */
export default class DagreLayout extends BaseLayout {
    /** layout 方向, 可选 TB, BT, LR, RL */
    rankdir: "TB" | "BT" | "LR" | "RL";
    /** 节点对齐方式，可选 UL, UR, DL, DR */
    align: undefined | "UL" | "UR" | "DL" | "DR";
    /** 节点大小 */
    nodeSize: number | number[] | undefined;
    /** 节点水平间距(px) */
    nodesepFunc: ((d?: any) => number) | undefined;
    /** 每一层节点之间间距 */
    ranksepFunc: ((d?: any) => number) | undefined;
    /** 节点水平间距(px) */
    nodesep: number;
    /** 每一层节点之间间距 */
    ranksep: number;
    /** 是否保留布局连线的控制点 */
    controlPoints: boolean;
    nodes: Node[];
    links: Link[];
    /** 迭代结束的回调函数 */
    onLayoutEnd: () => void;
    constructor(options?: DagreLayoutOptions){
        super();
        /** layout 方向, 可选 TB, BT, LR, RL */
        this.rankdir = "TB";
        /** 节点水平间距(px) */
        this.nodesep = 50;
        /** 每一层节点之间间距 */
        this.ranksep = 50;
        /** 是否保留布局连线的控制点 */
        this.controlPoints = false;
        this.nodes = [];
        this.links = [];
        /** 迭代结束的回调函数 */
        this.onLayoutEnd = function () { };
        this.updateCfg(options);
        return this;
    }
    getDefaultCfg(): {
        rankdir: string;
        align: undefined;
        nodeSize: undefined;
        nodesepFunc: undefined;
        ranksepFunc: undefined;
        nodesep: number;
        ranksep: number;
        controlPoints: boolean;
    }{
        return {
            rankdir: "TB",
            align: undefined,
            nodeSize: undefined,
            nodesepFunc: undefined,
            ranksepFunc: undefined,
            nodesep: 50,
            ranksep: 50,
            controlPoints: false, // 是否保留布局连线的控制点
        };
    };
    /**
     * 执行布局
     */
    protected process(): {
        nodes: Node[];
        links: Link[];
    } | undefined {
        var self = this;
        var nodes = self.nodes, rankdir = self.rankdir;
        if (!nodes)
            return;
        var links = self.links || [];
        var g = new dagre.graphlib.Graph({
            multigraph: true,
            compound: true,
        });
        var nodeSizeFunc = function (d) {
            if (d.size) {
                return d.size
            }
            else return [40, 40];
        };
        var horisep = getFunc(self.nodesepFunc, self.nodesep, 50);
        var vertisep = getFunc(self.ranksepFunc, self.ranksep, 50);
        if (rankdir === "LR" || rankdir === "RL") {
            horisep = getFunc(self.ranksepFunc, self.ranksep, 50);
            vertisep = getFunc(self.nodesepFunc, self.nodesep, 50);
        }
        g.setDefaultEdgeLabel(function () { return ({}); });
        g.setGraph(self);
        nodes.forEach(function (node) {
            var size = nodeSizeFunc(node);
            var verti = vertisep(node);
            var hori = horisep(node);
            var width = size[0] + 2 * hori;
            var height = size[1] + 2 * verti;
            g.setNode(node.id, { width: width, height: height });
        });
        links.forEach(function (link) {
            // dagrejs Wiki https://github.com/dagrejs/dagre/wiki#configuring-the-layout
            g.setEdge(link.source, link.target, {
                weight: link.width || 1,
            });
        });
        dagre.layout(g);
        var coord;
        g.nodes().forEach(function (node) {
            coord = g.node(node);
            var i = nodes.findIndex(function (it) { return it.id === node; });
            if (!nodes[i])
                return;
            nodes[i].x = coord.x;
            nodes[i].y = coord.y;
        });
        g.edges().forEach(function (edge) {
            coord = g.edge(edge);
            var i = links.findIndex(function (it) { return it.source === edge.v && it.target === edge.w; });
            // if (self.controlPoints && links[i].type !== "loop") {
            //     links[i].controlPoints = coord.points.slice(1, coord.points.length - 1);
            // }
        });
        if (self.onLayoutEnd)
            self.onLayoutEnd();
        return {
            nodes: nodes,
            links: links,
        };
    };
    getType(): string {
        return "dagre";
    };
}
function getFunc(func, value, defaultValue) {
    var resultFunc;
    if (func) {
        resultFunc = func;
    }
    else if (isNumber(value)) {
        resultFunc = function () { return value; };
    }
    else {
        resultFunc = function () { return defaultValue; };
    }
    return resultFunc;
}