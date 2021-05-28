import { Link, Node } from './util';
import { Position } from "src/interfaces";
import BaseLayout from "./base";
import { FruchtermanLayoutOptions } from "./options";
import { isNumber } from "./util";

const SPEED_DIVISOR = 800;
declare type NodeMap = {
    [key: string]: INode;
};
declare type INode = Node & {
    cluster: string;
};
declare type IndexMap = {
    [key: string]: number;
};
/**
 * fruchterman 布局
 */
export default class FruchtermanLayout extends BaseLayout {
    /** 布局中心 */
    center: Position;
    /** 停止迭代的最大迭代数 */
    maxIteration: number;
    /** 重力大小，影响图的紧凑程度 */
    gravity: number;
    /** 速度 */
    speed: number;
    /** 是否产生聚类力 */
    clustering: boolean;
    /** 聚类力大小 */
    clusterGravity: number;
    nodes: INode[];
    links: Link[];
    width: number;
    height: number;
    nodeMap: NodeMap;
    nodeIdxMap: IndexMap;
    /** 迭代结束的回调函数 */
    onLayoutEnd: () => void;
    constructor(options?: FruchtermanLayoutOptions){
        super()
        /** 停止迭代的最大迭代数 */
        this.maxIteration = 1000;
        /** 重力大小，影响图的紧凑程度 */
        this.gravity = 10;
        /** 速度 */
        this.speed = 1;
        /** 是否产生聚类力 */
        this.clustering = false;
        /** 聚类力大小 */
        this.clusterGravity = 10;
        this.nodes = [];
        this.links = [];
        this.width = 300;
        this.height = 300;
        this.nodeMap = {};
        this.nodeIdxMap = {};
        /** 迭代结束的回调函数 */
        this.onLayoutEnd = function () { };
        this.updateCfg(options);
        return this;
    }
    getDefaultCfg(){
        return {
            maxIteration: 1000,
            gravity: 10,
            speed: 1,
            clustering: false,
            clusterGravity: 10
        };
    };
    /**
     * 执行布局
     */
    protected process(){
        var _this = this;
        var self = this;
        var nodes = self.nodes;
        if (!nodes || nodes.length === 0) {
            if (self.onLayoutEnd)
                self.onLayoutEnd();
            return;
        }
        if (!self.width && typeof window !== "undefined") {
            self.width = window.innerWidth;
        }
        if (!self.height && typeof window !== "undefined") {
            self.height = window.innerHeight;
        }
        if (!self.center) {
            self.center = {x:self.width / 2, y:self.height / 2};
        }
        var center = self.center;
        if (nodes.length === 1) {
            nodes[0].x = center.x;
            nodes[0].y = center.y;
            if (self.onLayoutEnd)
                self.onLayoutEnd();
            return;
        }
        var nodeMap = {};
        var nodeIdxMap = {};
        nodes.forEach(function (node, i) {
            if (!isNumber(node.x))
                node.x = Math.random() * _this.width;
            if (!isNumber(node.y))
                node.y = Math.random() * _this.height;
            nodeMap[node.id] = node;
            nodeIdxMap[node.id] = i;
        });
        self.nodeMap = nodeMap;
        self.nodeIdxMap = nodeIdxMap;
        // layout
        return self.run();
    };
    run(){
        var self = this;
        var nodes = self.nodes;
        var links = self.links;
        var maxIteration = self.maxIteration;
        var center = self.center;
        var area = self.height * self.width;
        var maxDisplace = Math.sqrt(area) / 10;
        var k2 = area / (nodes.length + 1);
        var k = Math.sqrt(k2);
        var gravity = self.gravity;
        var speed = self.speed;
        var clustering = self.clustering;
        var clusterMap = {};
        if (clustering) {
            nodes.forEach(function (n) {
                if (clusterMap[n.cluster] === undefined) {
                    var cluster = {
                        name: n.cluster,
                        cx: 0,
                        cy: 0,
                        count: 0
                    };
                    clusterMap[n.cluster] = cluster;
                }
                var c = clusterMap[n.cluster];
                if (isNumber(n.x)) {
                    c.cx += n.x;
                }
                if (isNumber(n.y)) {
                    c.cy += n.y;
                }
                c.count++;
            });
            for (var key in clusterMap) {
                clusterMap[key].cx /= clusterMap[key].count;
                clusterMap[key].cy /= clusterMap[key].count;
            }
        }
        var _loop_1 = function (i) {
            var displacements = [];
            nodes.forEach(function (_, j) {
                displacements[j] = { x: 0, y: 0 };
            });
            self.applyCalculate(nodes, links, displacements, k, k2);
            // gravity for clusters
            if (clustering) {
                var clusterGravity_1 = self.clusterGravity || gravity;
                nodes.forEach(function (n, j) {
                    if (!isNumber(n.x) || !isNumber(n.y))
                        return;
                    var c = clusterMap[n.cluster];
                    var distLength = Math.sqrt((n.x - c.cx) * (n.x - c.cx) + (n.y - c.cy) * (n.y - c.cy));
                    var gravityForce = k * clusterGravity_1;
                    displacements[j].x -= (gravityForce * (n.x - c.cx)) / distLength;
                    displacements[j].y -= (gravityForce * (n.y - c.cy)) / distLength;
                });
                for (var key in clusterMap) {
                    clusterMap[key].cx = 0;
                    clusterMap[key].cy = 0;
                    clusterMap[key].count = 0;
                }
                nodes.forEach(function (n) {
                    var c = clusterMap[n.cluster];
                    if (isNumber(n.x)) {
                        c.cx += n.x;
                    }
                    if (isNumber(n.y)) {
                        c.cy += n.y;
                    }
                    c.count++;
                });
                for (var key in clusterMap) {
                    clusterMap[key].cx /= clusterMap[key].count;
                    clusterMap[key].cy /= clusterMap[key].count;
                }
            }
            // gravity
            nodes.forEach(function (n, j) {
                if (!isNumber(n.x) || !isNumber(n.y))
                    return;
                var gravityForce = 0.01 * k * gravity;
                displacements[j].x -= gravityForce * (n.x - center.x);
                displacements[j].y -= gravityForce * (n.y - center.y);
            });
            // move
            nodes.forEach(function (n, j) {
                if (!isNumber(n.x) || !isNumber(n.y))
                    return;
                var distLength = Math.sqrt(displacements[j].x * displacements[j].x +
                    displacements[j].y * displacements[j].y);
                if (distLength > 0) {
                    // && !n.isFixed()
                    var limitedDist = Math.min(maxDisplace * (speed / SPEED_DIVISOR), distLength);
                    n.x = n.x+(displacements[j].x / distLength) * limitedDist ;
                    n.y = n.y+(displacements[j].y / distLength) * limitedDist;
                }
            });
        };
        for (var i = 0; i < maxIteration; i++) {
            _loop_1(i);
        }
        if (self.onLayoutEnd)
            self.onLayoutEnd();
        return {
            nodes: nodes,
            links: links
        };
    }
    private applyCalculate(nodes, links, displacements, k, k2) {
        var self = this;
        self.calRepulsive(nodes, displacements, k2);
        self.calAttractive(links, displacements, k);
    };
    private calRepulsive (nodes, displacements, k2) {
        nodes.forEach(function (v, i) {
            displacements[i] = { x: 0, y: 0 };
            nodes.forEach(function (u, j) {
                if (i === j) {
                    return;
                }
                if (!isNumber(v.x) ||
                    !isNumber(u.x) ||
                    !isNumber(v.y) ||
                    !isNumber(u.y))
                    return;
                var vecX = v.x - u.x;
                var vecY = v.y - u.y;
                var vecLengthSqr = vecX * vecX + vecY * vecY;
                if (vecLengthSqr === 0) {
                    vecLengthSqr = 1;
                    var sign = i > j ? 1 : -1;
                    vecX = 0.01 * sign;
                    vecY = 0.01 * sign;
                }
                var common = k2 / vecLengthSqr;
                displacements[i].x += vecX * common;
                displacements[i].y += vecY * common;
            });
        });
    };
    private calAttractive(links, displacements, k) {
        var _this = this;
        links.forEach(function (e) {
            if (!e.source || !e.target)
                return;
            var uIndex = _this.nodeIdxMap[e.source];
            var vIndex = _this.nodeIdxMap[e.target];
            if (uIndex === vIndex) {
                return;
            }
            var u = _this.nodeMap[e.source];
            var v = _this.nodeMap[e.target];
            if (!isNumber(v.x) || !isNumber(u.x) || !isNumber(v.y) || !isNumber(u.y))
                return;
            var vecX = v.x - u.x;
            var vecY = v.y - u.y;
            var vecLength = Math.sqrt(vecX * vecX + vecY * vecY);
            var common = (vecLength * vecLength) / k;
            displacements[vIndex].x -= (vecX / vecLength) * common;
            displacements[vIndex].y -= (vecY / vecLength) * common;
            displacements[uIndex].x += (vecX / vecLength) * common;
            displacements[uIndex].y += (vecY / vecLength) * common;
        });
    };
    getType(){
        return "fruchterman";
    };
}