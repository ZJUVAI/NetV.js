import { Position } from "src/interfaces";
import BaseLayout from "../base";
import { ForceLayoutOptions } from "../options";
import * as d3Force from "d3-force"
import forceInABox from "./force-in-a-box";
import { isArray, isCircle, isFunction, isNumber, isRect } from "../util";
import { Link, Node } from '../util';
import NetV from "src";
/**
 * 经典力导布局 force-directed
 */
export default class ForceLayout extends BaseLayout {
    nodes: Node[]
    links: Link[]
    nodeDatum: d3Force.SimulationNodeDatum[]
    linkDatum: d3Force.SimulationLinkDatum<d3Force.SimulationNodeDatum>[]
    /** 向心力作用点 */
    center: Position;
    /** 节点作用力 */
    nodeStrength: number | null;
    /** 边的作用力, 默认为根据节点的入度出度自适应 */
    edgeStrength: number | null;
    /** 是否防止节点相互覆盖 */
    preventOverlap: boolean;
    /** 节点大小 / 直径，用于防止重叠时的碰撞检测 */
    nodeSize: number | number[] | ((d?: unknown) => number) | undefined;
    /** 节点间距，防止节点重叠时节点之间的最小距离（两节点边缘最短距离） */
    nodeSpacing: ((d?: unknown) => number) | undefined;
    /** 是否支持按类聚合 */
    clustering: boolean;
    /** 聚类节点作用力 */
    clusterNodeStrength: number | null;
    /** 聚类边作用力 */
    clusterEdgeStrength: number | null;
    /** 聚类边长度 */
    clusterEdgeDistance: number | null;
    /** 聚类节点大小 / 直径，直径越大，越分散 */
    clusterNodeSize: number | null;
    /** 用于 foci 的力 */
    clusterFociStrength: number | null;
    /** 默认边长度 */
    linkDistance: number;
    /** 自定义 force 方法 */
    forceSimulation: any;
    /** 迭代阈值的衰减率 [0, 1]，0.028 对应最大迭代数为 300 */
    alphaDecay: number;
    /** 停止迭代的阈值 */
    alphaMin: number;
    /** 当前阈值 */
    alpha: number;
    /** 防止重叠的力强度 */
    collideStrength: number;
    /** 是否启用web worker。前提是在web worker里执行布局，否则无效	*/
    workerEnabled: boolean;
    tick: () => void;
    /** 布局完成回调 */
    onLayoutEnd: () => void;
    /** 是否正在布局 */
    private ticking;
    private edgeForce;
    private clusterForce;
    constructor(options?: ForceLayoutOptions){
        super()
        /** 向心力作用点 */
        this.center = {x:0,y:0};
        /** 节点作用力 */
        this.nodeStrength = null;
        /** 边的作用力, 默认为根据节点的入度出度自适应 */
        this.edgeStrength = null;
        /** 是否防止节点相互覆盖 */
        this.preventOverlap = false;
        /** 聚类节点作用力 */
        this.clusterNodeStrength = null;
        /** 聚类边作用力 */
        this.clusterEdgeStrength = null;
        /** 聚类边长度 */
        this.clusterEdgeDistance = null;
        /** 聚类节点大小 / 直径，直径越大，越分散 */
        this.clusterNodeSize = null;
        /** 用于 foci 的力 */
        this.clusterFociStrength = null;
        /** 默认边长度 */
        this.linkDistance = 50;
        /** 迭代阈值的衰减率 [0, 1]，0.028 对应最大迭代数为 300 */
        this.alphaDecay = 0.028;
        /** 停止迭代的阈值 */
        this.alphaMin = 0.001;
        /** 当前阈值 */
        this.alpha = 0.3;
        /** 防止重叠的力强度 */
        this.collideStrength = 1;
        /** 是否启用web worker。前提是在web worker里执行布局，否则无效	*/
        this.workerEnabled = false;
        this.tick = function () {
            this.core.draw();
        };
        /** 布局完成回调 */
        this.onLayoutEnd = function () { };
        /** 是否正在布局 */
        this.ticking = undefined;
        if (options) {
            this.updateCfg(options);
        }
        return this;
    }
    getDefaultCfg(): {
        center: number[];
        nodeStrength: null;
        edgeStrength: null;
        preventOverlap: boolean;
        nodeSize: undefined;
        nodeSpacing: undefined;
        linkDistance: number;
        forceSimulation: null;
        alphaDecay: number;
        alphaMin: number;
        alpha: number;
        collideStrength: number;
        clustering: boolean;
        clusterNodeStrength: number;
        clusterEdgeStrength: number;
        clusterEdgeDistance: number;
        clusterFociStrength: number;
        clusterNodeSize: number;
        tick(): void;
        onLayoutEnd(): void;
        workerEnabled: boolean;
    }{
        return {
            center: [0, 0],
            nodeStrength: null,
            edgeStrength: null,
            preventOverlap: false,
            nodeSize: undefined,
            nodeSpacing: undefined,
            linkDistance: 50,
            forceSimulation: null,
            alphaDecay: 0.028,
            alphaMin: 0.001,
            alpha: 0.3,
            collideStrength: 1,
            clustering: false,
            clusterNodeStrength: -1,
            clusterEdgeStrength: 0.1,
            clusterEdgeDistance: 100,
            clusterFociStrength: 0.8,
            clusterNodeSize: 10,
            tick: function () { },
            onLayoutEnd: function () { },
            // 是否启用web worker。前提是在web worker里执行布局，否则无效
            workerEnabled: false
        };
    };
    /**
     * 初始化
     * @param {object} data 数据
     */
    init(core:NetV): void{
        super.init(core);
        var self = this;
        let idmap = {}
        self.nodeDatum = self.nodes.map((node,index)=>{
            let datum = new Proxy({
                x:node.x,
                y:node.y,
                index:index
            }, {
                get: function (target, propKey) {
                return target[propKey]
              },
              set: function (target, propKey, value) {
                switch (propKey) {
                  case "x":
                    target.x = value;
                    self.core.getNodeById(node.id).x(value);
                    break;
                  case "y":
                    target.y = value;
                    self.core.getNodeById(node.id).y(value);
                    break;
                  default: target[propKey] = value; break;
                }
                return true;
              }
            });
            idmap[node.id]=datum;
            return datum;
        }) || [];
        self.linkDatum =  self.links.map((link,index)=> {
            var datum = {
                index:index,
                source:idmap[link.source],
                target:idmap[link.target]
            }
            return datum;
        });
        self.ticking = false;
    };
    /**
     * 执行布局
     */
    execute(reloadData?: boolean): void{
        var self = this;
        var nodes = self.nodeDatum;
        var links = self.linkDatum;
        // 如果正在布局，忽略布局请求
        if (self.ticking) {
            return;
        }
        var simulation = self.forceSimulation;
        var alphaMin = self.alphaMin;
        var alphaDecay = self.alphaDecay;
        var alpha = self.alpha;
        if (!simulation) {
            try {
                // 定义节点的力
                var nodeForce = d3Force.forceManyBody();
                if (self.nodeStrength) {
                    nodeForce.strength(self.nodeStrength);
                }
                simulation = d3Force.forceSimulation().nodes(nodes);
                if (self.clustering) {
                    var clusterForce = forceInABox();
                    clusterForce
                        .centerX(self.center.x)
                        .centerY(self.center.y)
                        .template("force")
                        .strength(self.clusterFociStrength);
                    if (links) {
                        clusterForce.links(links);
                    }
                    if (nodes) {
                        clusterForce.nodes(nodes);
                    }
                    clusterForce
                        .forceLinkDistance(self.clusterEdgeDistance)
                        .forceLinkStrength(self.clusterEdgeStrength)
                        .forceCharge(self.clusterNodeStrength)
                        .forceNodeSize(self.clusterNodeSize);
                    self.clusterForce = clusterForce;
                    simulation.force("group", clusterForce);
                }
                simulation
                    .force("center", d3Force.forceCenter(self.center.x, self.center.y))
                    .force("charge", nodeForce)
                    .alpha(alpha)
                    .alphaDecay(alphaDecay)
                    .alphaMin(alphaMin);
                if (self.preventOverlap) {
                    self.overlapProcess(simulation);
                }
                // 如果有边，定义边的力
                if (links) {
                    // d3 的 forceLayout 会重新生成边的数据模型，为了避免污染源数据
                    var edgeForce = d3Force
                        .forceLink()
                        .id(function (d) { return d.index; })
                        .links(links);
                    if (self.edgeStrength) {
                        edgeForce.strength(self.edgeStrength);
                    }
                    if (self.linkDistance) {
                        edgeForce.distance(self.linkDistance);
                    }
                    self.edgeForce = edgeForce;
                    simulation.force("link", edgeForce);
                }
                simulation
                        .on("tick", function () {
                        self.tick();
                    })
                        .on("end", function () {
                        self.ticking = false;
                        if (self.onLayoutEnd)
                            self.onLayoutEnd();
                    });
                    self.ticking = true;
                self.forceSimulation = simulation;
                self.ticking = true;
                self.core.draw();
            }
            catch (e) {
                self.ticking = false;
                console.warn(e);
            }
        }
        else {
            if (reloadData) {
                if (self.clustering && self.clusterForce) {
                    self.clusterForce.nodes(nodes);
                    self.clusterForce.links(links);
                }
                simulation.nodes(nodes);
                if (links && self.edgeForce)
                    self.edgeForce.links(links);
                else if (links && !self.edgeForce) {
                    // d3 的 forceLayout 会重新生成边的数据模型，为了避免污染源数据
                    var edgeForce = d3Force
                        .forceLink()
                        .id(function (d) { return d.index; })
                        .links(links);
                    if (self.edgeStrength) {
                        edgeForce.strength(self.edgeStrength);
                    }
                    if (self.linkDistance) {
                        edgeForce.distance(self.linkDistance);
                    }
                    self.edgeForce = edgeForce;
                    simulation.force("link", edgeForce);
                }
            }
            if (self.preventOverlap) {
                self.overlapProcess(simulation);
            }
            simulation.alpha(alpha).restart();
            this.ticking = true;
        }
    };
    /**
     * 防止重叠
     * @param {object} simulation 力模拟模型
     */
    overlapProcess(simulation: any): void{
        var self = this;
        var nodeSize = self.nodeSize;
        var nodeSpacing = self.nodeSpacing;
        var nodeSizeFunc;
        var nodeSpacingFunc;
        var collideStrength = self.collideStrength;
        if (isNumber(nodeSpacing)) {
            nodeSpacingFunc = function () { return nodeSpacing; };
        }
        else if (isFunction(nodeSpacing)) {
            nodeSpacingFunc = nodeSpacing;
        }
        else {
            nodeSpacingFunc = function () { return 0; };
        }
        if (!nodeSize) {
            nodeSizeFunc = function (d) {
                if (isRect(d)) {
                    var res = d.size[0] > d.size[1] ? d.width() : d.height();
                    return res / 2 + nodeSpacingFunc(d);
                }
                else if(isCircle(d))return d.size[0] / 2 + nodeSpacingFunc(d);
                else return 10 + nodeSpacingFunc(d);
            };
        }
        else if (typeof nodeSize === 'function') {
            nodeSizeFunc = function (d) {
                var size = typeof nodeSize === 'function'?nodeSize(d):1;
                return size + nodeSpacingFunc(d);
            };
        }
        else if (isArray(nodeSize)) {
            var larger = nodeSize[0] > nodeSize[1] ? nodeSize[0] : nodeSize[1];
            var radius_1 = larger / 2;
            nodeSizeFunc = function (d) { return radius_1 + nodeSpacingFunc(d); };
        }
        else if (typeof nodeSize === 'number') {
            var radius_2 = nodeSize / 2;
            nodeSizeFunc = function (d) { return radius_2 + nodeSpacingFunc(d); };
        }
        else {
            nodeSizeFunc = function () { return 10; };
        }
        // forceCollide's parameter is a radius
        simulation.force("collisionForce", d3Force.forceCollide(nodeSizeFunc).strength(collideStrength));
    };
    /**
     * 更新布局配置，但不执行布局
     * @param {object} cfg 需要更新的配置项
     */
    updateCfg(cfg: ForceLayoutOptions): void{
        var self = this;
        if (self.ticking) {
            self.forceSimulation.stop();
            self.ticking = false;
        }
        self.forceSimulation = null;
        Object.assign(self, cfg);
    };
    destroy(): void{
        var self = this;
        if (self.ticking) {
            self.forceSimulation.stop();
            self.ticking = false;
        }
        self.nodes = null;
        self.links = null;
        self.destroyed = true;
    };
}
