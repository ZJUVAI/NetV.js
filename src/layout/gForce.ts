import Link from "src/elements/link";
import Node from "src/elements/node";
import { Position } from "src/interfaces";
import BaseLayout from "./base";
import { GForceLayoutOptions } from "./options";
import { getDegree, isArray, isFunction, isNumber, isRect } from "./util";

declare type NodeMap = {
    [key: string]: Node;
};
declare type IndexMap = {
    [key: string]: number;
};

const proccessToFunc = function (value, defaultV) {
    var func;
    if (!value) {
        func = function (d) {
            return defaultV || 1;
        };
    }
    else if (isNumber(value)) {
        func = function (d) {
            return value;
        };
    }
    else {
        func = value;
    }
    return func;
};
/**
 * graphin 中的 force 布局
 */
export default class GForceLayout extends BaseLayout {
    /** 布局中心 */
    center: Position;
    /** 停止迭代的最大迭代数 */
    maxIteration: number;
    /** 弹簧引力系数 */
    linkStrength: number | ((d?: any) => number) | undefined;
    /** 斥力系数 */
    nodeStrength: number | ((d?: any) => number) | undefined;
    /** 库伦系数 */
    coulombDisScale: number;
    /** 阻尼系数 */
    damping: number;
    /** 最大速度 */
    maxSpeed: number;
    /** 一次迭代的平均移动距离小于该值时停止迭代 */
    minMovement: number;
    /** 迭代中衰减 */
    interval: number;
    /** 斥力的一个系数 */
    factor: number;
    /** 每个节点质量的回调函数，若不指定，则默认使用度数作为节点质量 */
    getMass: ((d?: any) => number) | undefined;
    /** 每个节点中心力的 x、y、强度的回调函数，若不指定，则没有额外中心力 */
    getCenter: ((d?: any, degree?: number) => number[]) | undefined;
    /** 理想边长 */
    linkDistance: number | ((d?: any) => number) | undefined;
    /** 重力大小 */
    gravity: number;
    /** 是否防止重叠 */
    preventOverlap: boolean;
    /** 防止重叠时的节点大小，默认从节点数据中取 size */
    nodeSize: number | number[] | ((d?: any) => number) | undefined;
    /** 防止重叠时的节点之间最小间距 */
    nodeSpacing: number | number[] | ((d?: any) => number) | undefined;
    /** 每次迭代结束的回调函数 */
    tick: (() => void) | null;
    /** 是否允许每次迭代结束调用回调函数 */
    enableTick: boolean;
    gNodes: Node[];
    gLinks: Link[];
    width: number;
    height: number;
    nodeMap: NodeMap;
    nodeIdxMap: IndexMap;
    canvasEl: HTMLCanvasElement;
    onLayoutEnd: () => void;
    /** 存储节点度数 */
    private degrees;
    /** 迭代中的标识 */
    private timeInterval;
    constructor(options?: GForceLayoutOptions) {
        super()
        /** 停止迭代的最大迭代数 */
        this.maxIteration = 1000;
        /** 弹簧引力系数 */
        this.linkStrength = 200;
        /** 斥力系数 */
        this.nodeStrength = 1000;
        /** 库伦系数 */
        this.coulombDisScale = 0.005;
        /** 阻尼系数 */
        this.damping = 0.9;
        /** 最大速度 */
        this.maxSpeed = 1000;
        /** 一次迭代的平均移动距离小于该值时停止迭代 */
        this.minMovement = 0.5;
        /** 迭代中衰减 */
        this.interval = 0.02;
        /** 斥力的一个系数 */
        this.factor = 1;
        /** 理想边长 */
        this.linkDistance = 1;
        /** 重力大小 */
        this.gravity = 10;
        /** 是否防止重叠 */
        this.preventOverlap = true;
        /** 每次迭代结束的回调函数 */
        this.tick = function () { };
        this.gNodes = [];
        this.gLinks = [];
        this.width = 300;
        this.height = 300;
        this.nodeMap = {};
        this.nodeIdxMap = {};
        this.updateCfg(options);
        return this;
    }
    getDefaultCfg(){
        return {
            maxIteration: 500,
            gravity: 10,
            enableTick: true
        };
    };
    /**
     * 执行布局
     */
    protected execute(){
        var self = this;
        self.gNodes = self.core.nodes();
        var nodes = self.core.nodes();
        if (self.timeInterval !== undefined && typeof window !== "undefined") {
            window.clearInterval(self.timeInterval);
        }
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
            nodes[0].x(center.x);
            nodes[0].y(center.y);
            if (self.onLayoutEnd)
                self.onLayoutEnd();
            return;
        }
        var nodeMap = {};
        var nodeIdxMap = {};
        nodes.forEach(function (node, i) {
            if (!isNumber(node.x()))
                node.x(Math.random() * self.width);
            if (!isNumber(node.y()))
                node.y(Math.random() * self.height);
            nodeMap[node.id()] = node;
            nodeIdxMap[node.id()] = i;
        });
        self.nodeMap = nodeMap;
        self.nodeIdxMap = nodeIdxMap;
        self.linkDistance = proccessToFunc(self.linkDistance, 1);
        self.nodeStrength = proccessToFunc(self.nodeStrength, 1);
        self.linkStrength = proccessToFunc(self.linkStrength, 1);
        // node size function
        var nodeSize = self.nodeSize;
        var nodeSizeFunc;
        if (self.preventOverlap) {
            var nodeSpacing_1 = self.nodeSpacing;
            var nodeSpacingFunc_1;
            if (isNumber(nodeSpacing_1)) {
                nodeSpacingFunc_1 = function () { return nodeSpacing_1; };
            }
            else if (isFunction(nodeSpacing_1)) {
                nodeSpacingFunc_1 = nodeSpacing_1;
            }
            else {
                nodeSpacingFunc_1 = function () { return 0; };
            }
            if (!nodeSize) {
                nodeSizeFunc = function (d) {
                    if (d.shape()) {
                        if (d.shape() === 'rect' || d.shape() === 'cross') {
                            var res = Math.max(d.width(),d.height());
                            return res + nodeSpacingFunc_1(d);
                        }
                        else return d.r() + nodeSpacingFunc_1(d);
                    }
                    return 10 + nodeSpacingFunc_1(d);
                };
            }
            else if (isArray(nodeSize)) {
                nodeSizeFunc = function (d) {
                    var res = nodeSize[0] > nodeSize[1] ? nodeSize[0] : nodeSize[1];
                    return res + nodeSpacingFunc_1(d);
                };
            }
            else {
                nodeSizeFunc = function (d) { return nodeSize + nodeSpacingFunc_1(d); };
            }
        }
        self.nodeSize = nodeSizeFunc;
        var links = self.links;
        self.degrees = getDegree(nodes.length, self.nodeIdxMap, links);
        if (!self.getMass) {
            self.getMass = function (d) {
                return self.degrees[self.nodeIdxMap[d.id]] || 1;
            };
        }
        // layout
        self.run();
    };
    run(){
        var self = this;
        var nodes = self.core.nodes();
        var links = self.core.links();
        var maxIteration = self.maxIteration;
        if (typeof window === "undefined")
            return;
        var iter = 0;
        // interval for render the result after each iteration
        this.timeInterval = window.setInterval(function () {
            var accArray = [];
            var velArray = [];
            if (!nodes)
                return;
            nodes.forEach(function (_, i) {
                accArray[2 * i] = 0;
                accArray[2 * i + 1] = 0;
                velArray[2 * i] = 0;
                velArray[2 * i + 1] = 0;
            });
            self.calRepulsive(accArray, nodes);
            if (links)
                self.calAttractive(accArray, links);
            self.calGravity(accArray, nodes);
            var stepInterval = Math.max(0.02, self.interval - iter * 0.002);
            self.updateVelocity(accArray, velArray, stepInterval, nodes);
            var previousPos = [];
            nodes.forEach(function (node) {
                previousPos.push({
                    x: node.x(),
                    y: node.y()
                });
            });
            self.updatePosition(velArray, stepInterval, nodes);
            if (self.tick)
                self.tick();
            // whether to stop the iteration
            var movement = 0;
            nodes.forEach(function (node, j) {
                var vx = node.x() - previousPos[j].x;
                var vy = node.y() - previousPos[j].y;
                movement += Math.sqrt(vx * vx + vy * vy);
            });
            movement /= nodes.length;
            if (movement < self.minMovement) {
                window.clearInterval(self.timeInterval);
                if (self.onLayoutEnd)
                    self.onLayoutEnd();
            }
            iter++;
            if (iter > maxIteration) {
                window.clearInterval(self.timeInterval);
                if (self.onLayoutEnd)
                    self.onLayoutEnd();
            }
            self.core.draw()
        }, 0);
    };
    calRepulsive(accArray: number[], nodes){
        var self = this;
        // const nodes = self.nodes;
        var getMass = self.getMass;
        var nodeStrength = self.nodeStrength;
        var factor = self.factor;
        var coulombDisScale = self.coulombDisScale;
        var preventOverlap = self.preventOverlap;
        var nodeSize = self.nodeSize;
        nodes.forEach(function (ni, i) {
            var massi = getMass ? getMass(ni) : 1;
            nodes.forEach(function (nj, j) {
                if (i >= j)
                    return;
                // if (!accArray[j]) accArray[j] = 0;
                var vecX = ni.x() - nj.x();
                var vecY = ni.y() - nj.y();
                var vecLength = Math.sqrt(vecX * vecX + vecY * vecY) + 0.01;
                var nVecLength = (vecLength + 0.1) * coulombDisScale;
                var direX = vecX / vecLength;
                var direY = vecY / vecLength;
                var param = (((typeof nodeStrength==='function'?nodeStrength(ni) + nodeStrength(nj):2*nodeStrength) / 2) * factor) /
                    (nVecLength * nVecLength);
                var massj = getMass ? getMass(nj) : 1;
                accArray[2 * i] += (direX * param) / massi;
                accArray[2 * i + 1] += (direY * param) / massi;
                accArray[2 * j] -= (direX * param) / massj;
                accArray[2 * j + 1] -= (direY * param) / massj;
                if (preventOverlap && vecLength < (typeof nodeSize==='function'?nodeSize(ni) + nodeSize(nj):
                typeof nodeSize === 'number'?2*nodeSize:nodeSize.length) / 2) {
                    var paramOverlap = (typeof nodeStrength==='function'?nodeStrength(ni) + nodeStrength(nj):2*nodeStrength) / 2 / (vecLength * vecLength);
                    accArray[2 * i] += (direX * paramOverlap) / massi;
                    accArray[2 * i + 1] += (direY * paramOverlap) / massi;
                    accArray[2 * j] -= (direX * paramOverlap) / massj;
                    accArray[2 * j + 1] -= (direY * paramOverlap) / massj;
                }
            });
        });
    };
    calAttractive(accArray: number[], edges: Link[]) {
        var self = this;
        // const edges = self.edges;
        var nodeMap = self.nodeMap;
        var nodeIdxMap = self.nodeIdxMap;
        var linkDistance = self.linkDistance;
        var linkStrength = self.linkStrength;
        var getMass = self.getMass;
        edges.forEach(function (edge, i) {
            var sourceNode = nodeMap[edge.source().id()];
            var targetNode = nodeMap[edge.target().id()];
            var vecX = targetNode.x() - sourceNode.x();
            var vecY = targetNode.y() - sourceNode.y();
            var vecLength = Math.sqrt(vecX * vecX + vecY * vecY) + 0.01;
            var direX = vecX / vecLength;
            var direY = vecY / vecLength;
            var length = typeof linkDistance === 'function'?linkDistance(edge):linkDistance || 1;
            var diff = length - vecLength;
            var param = diff * (typeof linkStrength === 'function'?linkStrength(edge):linkStrength || 1);
            var sourceIdx = nodeIdxMap[edge.source().id()];
            var targetIdx = nodeIdxMap[edge.target().id()];
            var massSource = getMass ? getMass(sourceNode) : 1;
            var massTarget = getMass ? getMass(targetNode) : 1;
            accArray[2 * sourceIdx] -= (direX * param) / massSource;
            accArray[2 * sourceIdx + 1] -= (direY * param) / massSource;
            accArray[2 * targetIdx] += (direX * param) / massTarget;
            accArray[2 * targetIdx + 1] += (direY * param) / massTarget;
        });
    };
    calGravity(accArray: number[], nodes: Node[]){
        var self = this;
        // const nodes = self.nodes;
        var center = self.center;
        var defaultGravity = self.gravity;
        var degrees = self.degrees;
        var nodeLength = nodes.length;
        for (var i = 0; i < nodeLength; i++) {
            var node = nodes[i];
            var vecX = node.x() - center.x;
            var vecY = node.y() - center.y;
            var gravity = defaultGravity;
            if (self.getCenter) {
                var customCenterOpt = self.getCenter(node, degrees[i]);
                if (customCenterOpt &&
                    isNumber(customCenterOpt[0]) &&
                    isNumber(customCenterOpt[1]) &&
                    isNumber(customCenterOpt[2])) {
                    vecX = node.x() - customCenterOpt[0];
                    vecY = node.y() - customCenterOpt[1];
                    gravity = customCenterOpt[2];
                }
            }
            if (!gravity)
                continue;
            accArray[2 * i] -= gravity * vecX;
            accArray[2 * i + 1] -= gravity * vecY;
        }
    };
    updateVelocity(accArray: number[], velArray: number[], stepInterval: number, nodes: Node[]){
        var self = this;
        var param = stepInterval * self.damping;
        // const nodes = self.nodes;
        nodes.forEach(function (node, i) {
            var vx = accArray[2 * i] * param || 0.01;
            var vy = accArray[2 * i + 1] * param || 0.01;
            var vLength = Math.sqrt(vx * vx + vy * vy);
            if (vLength > self.maxSpeed) {
                var param2 = self.maxSpeed / vLength;
                vx = param2 * vx;
                vy = param2 * vy;
            }
            velArray[2 * i] = vx;
            velArray[2 * i + 1] = vy;
        });
    };
    updatePosition(velArray: number[], stepInterval: number, nodes: Node[]){
        nodes.forEach(function (node, i) {
            var distX = velArray[2 * i] * stepInterval;
            var distY = velArray[2 * i + 1] * stepInterval;
            node.x(node.x()+distX);
            node.y(node.y()+distY);
        });
    };
    stop(){
        if (this.timeInterval && typeof window !== "undefined") {
            window.clearInterval(this.timeInterval);
        }
    };
    destroy(){
        var self = this;
        self.stop();
        self.tick = null;
        self.nodes = null;
        self.links = null;
        self.destroyed = true;
    };
    getType(){
        return "gForce";
    };
}
export {};
