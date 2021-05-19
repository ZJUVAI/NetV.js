import BaseLayout from "./base";
import Node from "src/elements/node";
import { Position } from "src/interfaces";
import Link from "src/elements/link";
import { CircularLayoutOptions } from "./options";
import {clone, getDegree} from "./util"
declare type INode = Node & {
    degree: number;
    size: number | Position;
    weight: number;
    children: string[];
    parent: string[];
};
function initHierarchy(nodes, edges, nodeMap, directed) {
    nodes.forEach(function (_, i) {
        nodes[i].children = [];
        nodes[i].parent = [];
    });
    if (directed) {
        edges.forEach(function (e) {
            var sourceIdx = 0;
            if (e.source) {
                sourceIdx = nodeMap[e.source];
            }
            var targetIdx = 0;
            if (e.target) {
                targetIdx = nodeMap[e.target];
            }
            var child = nodes[sourceIdx].children;
            var parent = nodes[targetIdx].parent;
            child.push(nodes[targetIdx].id());
            parent.push(nodes[sourceIdx].id());
        });
    }
    else {
        edges.forEach(function (e) {
            var sourceIdx = 0;
            if (e.source) {
                sourceIdx = nodeMap[e.source];
            }
            var targetIdx = 0;
            if (e.target) {
                targetIdx = nodeMap[e.target];
            }
            var sourceChildren = nodes[sourceIdx].children;
            var targetChildren = nodes[targetIdx].children;
            sourceChildren.push(nodes[targetIdx].id());
            targetChildren.push(nodes[sourceIdx].id());
        });
    }
}
function connect(a, b, edges) {
    var m = edges.length;
    for (var i = 0; i < m; i++) {
        if ((a.id() === edges[i].source && b.id() === edges[i].target) ||
            (b.id() === edges[i].source && a.id() === edges[i].target)) {
            return true;
        }
    }
    return false;
}
function compareDegree(a, b) {
    var aDegree = a.degree;
    var bDegree = b.degree;
    if (aDegree < bDegree) {
        return -1;
    }
    if (aDegree > bDegree) {
        return 1;
    }
    return 0;
}
/**
 * 圆形布局
 */
export default class CircularLayout extends BaseLayout {
    /** 布局中心 */
    center: Position;
    /** 固定半径，若设置了 radius，则 startRadius 与 endRadius 不起效 */
    radius: number | null;
    /** 起始半径 */
    startRadius: number | null;
    /** 终止半径 */
    endRadius: number | null;
    /** 起始角度 */
    startAngle: number;
    /** 终止角度 */
    endAngle: number;
    /** 是否顺时针 */
    clockwise: boolean;
    /** 节点在环上分成段数（几个段将均匀分布），在 endRadius - startRadius != 0 时生效 */
    divisions: number;
    /** 节点在环上排序的依据，可选: 'topology', 'degree', 'null' */
    ordering: "topology" | "topology-directed" | "degree" | null;
    /** how many 2*pi from first to last nodes */
    angleRatio: number;
    nodes: INode[];
    links: Link[];
    private nodeMap;
    private degrees;
    width: number;
    height: number;
    onLayoutEnd: () => void;
    constructor(options?: CircularLayoutOptions){
        super();
        /** 固定半径，若设置了 radius，则 startRadius 与 endRadius 不起效 */
        this.radius = null;
        /** 起始半径 */
        this.startRadius = null;
        /** 终止半径 */
        this.endRadius = null;
        /** 起始角度 */
        this.startAngle = 0;
        /** 终止角度 */
        this.endAngle = 2 * Math.PI;
        /** 是否顺时针 */
        this.clockwise = true;
        /** 节点在环上分成段数（几个段将均匀分布），在 endRadius - startRadius != 0 时生效 */
        this.divisions = 1;
        /** 节点在环上排序的依据，可选: 'topology', 'degree', 'null' */
        this.ordering = null;
        /** how many 2*pi from first to last nodes */
        this.angleRatio = 1;
        this.nodes = [];
        this.links = [];
        this.nodeMap = {};
        this.degrees = [];
        this.width = 300;
        this.height = 300;
        this.updateCfg(options);
        return this;
    }
    getDefaultCfg(){
        return {
            radius: null,
            startRadius: null,
            endRadius: null,
            startAngle: 0,
            endAngle: 2 * Math.PI,
            clockwise: true,
            divisions: 1,
            ordering: null,
            angleRatio: 1
        };
    };
    /**
     * 执行布局
     */
    execute() {
        var self = this;
        var nodes = self.nodes;
        var links = self.links;
        var n = nodes.length;
        if (n === 0) {
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
        if (n === 1) {
            nodes[0].x(center.x);
            nodes[0].y(center.y);
            if (self.onLayoutEnd)
                self.onLayoutEnd();
            return;
        }
        var radius = self.radius;
        var startRadius = self.startRadius;
        var endRadius = self.endRadius;
        var divisions = self.divisions;
        var startAngle = self.startAngle;
        var endAngle = self.endAngle;
        var angleStep = (endAngle - startAngle) / n;
        // layout
        var nodeMap = {};
        nodes.forEach(function (node, i) {
            nodeMap[node.id()] = i;
        });
        self.nodeMap = nodeMap;
        var degrees = getDegree(nodes.length, nodeMap, links);
        self.degrees = degrees;
        if (!radius && !startRadius && !endRadius) {
            radius = self.height > self.width ? self.width / 2 : self.height / 2;
        }
        else if (!startRadius && endRadius) {
            startRadius = endRadius;
        }
        else if (startRadius && !endRadius) {
            endRadius = startRadius;
        }
        var angleRatio = self.angleRatio;
        var astep = angleStep * angleRatio;
        var ordering = self.ordering;
        var layoutNodes = [];
        if (ordering === "topology") {
            // layout according to the topology
            layoutNodes = self.topologyOrdering();
        }
        else if (ordering === "topology-directed") {
            // layout according to the topology
            layoutNodes = self.topologyOrdering(true);
        }
        else if (ordering === "degree") {
            // layout according to the descent order of degrees
            layoutNodes = self.degreeOrdering();
        }
        else {
            // layout according to the original order in the data.nodes
            layoutNodes = nodes;
        }
        var clockwise = self.clockwise;
        var divN = Math.ceil(n / divisions); // node number in each division
        for (var i = 0; i < n; ++i) {
            var r = radius;
            if (!r && startRadius !== null && endRadius !== null) {
                r = startRadius + (i * (endRadius - startRadius)) / (n - 1);
            }
            if (!r) {
                r = 10 + (i * 100) / (n - 1);
            }
            var angle = startAngle +
                (i % divN) * astep +
                ((2 * Math.PI) / divisions) * Math.floor(i / divN);
            if (!clockwise) {
                angle =
                    endAngle -
                        (i % divN) * astep -
                        ((2 * Math.PI) / divisions) * Math.floor(i / divN);
            }
            layoutNodes[i].x(center.x + Math.cos(angle) * r);
            layoutNodes[i].y(center.y + Math.sin(angle) * r);
            layoutNodes[i].weight = degrees[i];
        }
        if (self.onLayoutEnd)
            self.onLayoutEnd();
        return {
            nodes: layoutNodes,
            links: this.links
        };
    }
    /**
     * 根据节点的拓扑结构排序
     * @return {array} orderedNodes 排序后的结果
     */
    topologyOrdering(directed?: boolean){
        if (directed === void 0) { directed = false; }
        var self = this;
        var degrees = self.degrees;
        var links = self.links;
        var nodes = self.nodes;
        var cnodes = clone(nodes);
        var nodeMap = self.nodeMap;
        var orderedCNodes = [cnodes[0]];
        var resNodes = [nodes[0]];
        var pickFlags = [];
        var n = nodes.length;
        pickFlags[0] = true;
        initHierarchy(cnodes, links, nodeMap, directed);
        var k = 0;
        cnodes.forEach(function (cnode, i) {
            if (i !== 0) {
                if ((i === n - 1 ||
                    degrees[i] !== degrees[i + 1] ||
                    connect(orderedCNodes[k], cnode, links)) &&
                    !pickFlags[i]) {
                    orderedCNodes.push(cnode);
                    resNodes.push(nodes[nodeMap[cnode.id()]]);
                    pickFlags[i] = true;
                    k++;
                }
                else {
                    var children = orderedCNodes[k].children;
                    var foundChild = false;
                    for (var j = 0; j < children.length; j++) {
                        var childIdx = nodeMap[children[j]];
                        if (degrees[childIdx] === degrees[i] && !pickFlags[childIdx]) {
                            orderedCNodes.push(cnodes[childIdx]);
                            resNodes.push(nodes[nodeMap[cnodes[childIdx].id()]]);
                            pickFlags[childIdx] = true;
                            foundChild = true;
                            break;
                        }
                    }
                    var ii = 0;
                    while (!foundChild) {
                        if (!pickFlags[ii]) {
                            orderedCNodes.push(cnodes[ii]);
                            resNodes.push(nodes[nodeMap[cnodes[ii].id()]]);
                            pickFlags[ii] = true;
                            foundChild = true;
                        }
                        ii++;
                        if (ii === n) {
                            break;
                        }
                    }
                }
            }
        });
        return resNodes;
    };
    /**
     * 根据节点度数大小排序
     * @return {array} orderedNodes 排序后的结果
     */
    degreeOrdering() {
        var self = this;
        var nodes = self.nodes;
        var orderedNodes = [];
        var degrees = self.degrees;
        nodes.forEach(function (node, i) {
            node.degree = degrees[i];
            orderedNodes.push(node);
        });
        orderedNodes.sort(compareDegree);
        return orderedNodes;
    };
    getType() {
        return "circular";
    };
}