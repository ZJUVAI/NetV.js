import Link from "src/elements/link";
import Node from "src/elements/node";
import { Position } from "src/interfaces";
import BaseLayout from "./base";
import { ConcentricLayoutOptions } from "./options";
import { isArray, isNumber,isString,getDegree } from "./util";

declare type INode = Node & {
    degree: number;
    size: number | Position;
};
/**
 * 同心圆布局
 */
export default class ConcentricLayout extends BaseLayout {
    /** 布局中心 */
    center: Position;
    nodeSize: number | Position;
    /** min spacing between outside of nodes (used for radius adjustment) */
    minNodeSpacing: number;
    /** prevents node overlap, may overflow boundingBox if not enough space */
    preventOverlap: boolean;
    /** how many radians should be between the first and last node (defaults to full circle) */
    sweep: number | undefined;
    /** whether levels have an equal radial distance betwen them, may cause bounding box overflow */
    equidistant: boolean;
    /** where nodes start in radians */
    startAngle: number;
    /** whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false) */
    clockwise: boolean;
    /** the letiation of concentric values in each level */
    maxLevelDiff: undefined | number;
    /** 根据 sortBy 指定的属性进行排布，数值高的放在中心，如果是 sortBy 则会计算节点度数，度数最高的放在中心 */
    sortBy: string;
    nodes: INode[];
    links: Link[];
    width: number;
    height: number;
    /** 迭代结束的回调函数 */
    onLayoutEnd: () => void;
    private maxValueNode;
    private counterclockwise;
    constructor(options?: ConcentricLayoutOptions){
        super();
        this.nodeSize = 30;
        /** min spacing between outside of nodes (used for radius adjustment) */
        this.minNodeSpacing = 10;
        /** prevents node overlap, may overflow boundingBox if not enough space */
        this.preventOverlap = false;
        /** whether levels have an equal radial distance betwen them, may cause bounding box overflow */
        this.equidistant = false;
        /** where nodes start in radians */
        this.startAngle = (3 / 2) * Math.PI;
        /** whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false) */
        this.clockwise = true;
        /** 根据 sortBy 指定的属性进行排布，数值高的放在中心，如果是 sortBy 则会计算节点度数，度数最高的放在中心 */
        this.sortBy = "degree";
        this.nodes = [];
        this.links = [];
        this.width = 300;
        this.height = 300;
        /** 迭代结束的回调函数 */
        this.onLayoutEnd = function () { };
        this.updateCfg(options);
        return this;
    }
    getDefaultCfg(){
        return {
            nodeSize: 30,
            minNodeSpacing: 10,
            preventOverlap: false,
            sweep: undefined,
            equidistant: false,
            startAngle: (3 / 2) * Math.PI,
            clockwise: true,
            maxLevelDiff: undefined,
            sortBy: "degree"
        };
    };
    /**
     * 执行布局
     */
    execute(){
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
            self.center = {x:self.width / 2,y:self.height / 2};
        }
        var center = self.center;
        if (n === 1) {
            nodes[0].x(center.x);
            nodes[0].y(center.y);
            if (self.onLayoutEnd)
                self.onLayoutEnd();
            return;
        }
        var layoutNodes = [];
        var maxNodeSize;
        if (isArray(self.nodeSize)) {
            maxNodeSize = Math.max(self.nodeSize[0], self.nodeSize[1]);
        }
        else {
            maxNodeSize = self.nodeSize;
        }
        nodes.forEach(function (node) {
            layoutNodes.push(node);
            var nodeSize = maxNodeSize;
            if (node.shape() === 'rect' || node.shape() === 'cross') {
                nodeSize = Math.max(node.width(), node.height());
            }
            else if (node.shape() === 'circle') {
                nodeSize = node.r();
            }
            maxNodeSize = Math.max(maxNodeSize, nodeSize);
        });
        self.clockwise =
            self.counterclockwise !== undefined
                ? !self.counterclockwise
                : self.clockwise;
        // layout
        var nodeMap = {};
        var indexMap = {};
        layoutNodes.forEach(function (node, i) {
            nodeMap[node.id()] = node;
            indexMap[node.id()] = i;
        });
        // get the node degrees
        if (self.sortBy === "degree" ||
            !isString(self.sortBy) ||
            layoutNodes[0][self.sortBy] === undefined) {
            self.sortBy = "degree";
            if (!isNumber(nodes[0].degree)) {
                var values_1 = getDegree(nodes.length, indexMap, links);
                layoutNodes.forEach(function (node, i) {
                    node.degree = values_1[i];
                });
            }
        }
        // sort nodes by value
        layoutNodes.sort(function (n1, n2) {
            return n2[self.sortBy] - n1[self.sortBy];
        });
        self.maxValueNode = layoutNodes[0];
        self.maxLevelDiff =
            self.maxLevelDiff || self.maxValueNode[self.sortBy] / 4;
        // put the values into levels
        var levels = [[]];
        var currentLevel = levels[0];
        layoutNodes.forEach(function (node) {
            if (currentLevel.length > 0) {
                var diff = Math.abs(currentLevel[0][self.sortBy] - node[self.sortBy]);
                if (self.maxLevelDiff && diff >= self.maxLevelDiff) {
                    currentLevel = [];
                    levels.push(currentLevel);
                }
            }
            currentLevel.push(node);
        });
        // create positions for levels
        var minDist = maxNodeSize + self.minNodeSpacing; // min dist between nodes
        if (!self.preventOverlap) {
            // then strictly constrain to bb
            var firstLvlHasMulti = levels.length > 0 && levels[0].length > 1;
            var maxR = Math.min(self.width, self.height) / 2 - minDist;
            var rStep = maxR / (levels.length + (firstLvlHasMulti ? 1 : 0));
            minDist = Math.min(minDist, rStep);
        }
        // find the metrics for each level
        var r = 0;
        levels.forEach(function (level) {
            var sweep = self.sweep;
            if (sweep === undefined) {
                sweep = 2 * Math.PI - (2 * Math.PI) / level.length;
            }
            level["dTheta"] = sweep / Math.max(1, level.length - 1)
            var dTheta = level["dTheta"];
            // calculate the radius
            if (level.length > 1 && self.preventOverlap) {
                // but only if more than one node (can't overlap)
                var dcos = Math.cos(dTheta) - Math.cos(0);
                var dsin = Math.sin(dTheta) - Math.sin(0);
                var rMin = Math.sqrt((minDist * minDist) / (dcos * dcos + dsin * dsin)); // s.t. no nodes overlapping
                r = Math.max(rMin, r);
            }
            level["r"] = r;
            r += minDist;
        });
        if (self.equidistant) {
            var rDeltaMax_1 = 0;
            var rr_1 = 0;
            for (var i = 0; i < levels.length; i++) {
                var level = levels[i];
                var rDelta = level["r"] - rr_1;
                rDeltaMax_1 = Math.max(rDeltaMax_1, rDelta);
            }
            rr_1 = 0;
            levels.forEach(function (level, i) {
                if (i === 0) {
                    rr_1 = level["r"];
                }
                level["r"] = rr_1;
                rr_1 += rDeltaMax_1;
            });
        }
        // calculate the node positions
        levels.forEach(function (level) {
            var dTheta = level["dTheta"];
            var rr = level["r"];
            level.forEach(function (node, j) {
                var theta = self.startAngle + (self.clockwise ? 1 : -1) * dTheta * j;
                node.x(center.x + rr * Math.cos(theta));
                node.y(center.y + rr * Math.sin(theta));
            });
        });
        if (self.onLayoutEnd)
            self.onLayoutEnd();
        return {
            nodes: nodes,
            links: links
        };
    };
    getType(){
        return "concentric";
    };
}