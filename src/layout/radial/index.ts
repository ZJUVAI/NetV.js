import { Link, Node } from '../util';
import { Position } from "src/interfaces";
import BaseLayout from "../base";
import { RadialLayoutOptions } from "../options";
import { floydWarshall, getAdjMatrix, isArray, isCircle, isFunction, isNaN, isNumber, isRect, isString } from "../util";
import MDS from "./mds";
import RadialNonoverlapForce from "./radialNonoverlapForce";

function getWeightMatrix(M) {
    var rows = M.length;
    var cols = M[0].length;
    var result = [];
    for (var i = 0; i < rows; i++) {
        var row = [];
        for (var j = 0; j < cols; j++) {
            if (M[i][j] !== 0) {
                row.push(1 / (M[i][j] * M[i][j]));
            }
            else {
                row.push(0);
            }
        }
        result.push(row);
    }
    return result;
}
function getIndexById(array, id) {
    var index = -1;
    array.forEach(function (a, i) {
        if (a.id === id) {
            index = i;
        }
    });
    return index;
}
function getEDistance(p1, p2) {
    return Math.sqrt((p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1]));
}
/**
 * 辐射状布局
 */
export default class RadialLayout extends BaseLayout {
    /** 布局中心 */
    center: Position;
    /** 停止迭代的最大迭代数 */
    maxIteration: number;
    /** 中心点，默认为数据中第一个点 */
    focusNode: string | Node | null;
    /** 每一圈半径 */
    unitRadius: number | null;
    /** 默认边长度 */
    linkDistance: number;
    /** 是否防止重叠 */
    preventOverlap: boolean;
    /** 节点直径 */
    nodeSize: number | number[] | undefined;
    /** 节点间距，防止节点重叠时节点之间的最小距离（两节点边缘最短距离） */
    nodeSpacing: number | Function | undefined;
    /** 是否必须是严格的 radial 布局，即每一层的节点严格布局在一个环上。preventOverlap 为 true 时生效 */
    strictRadial: boolean;
    /** 防止重叠步骤的最大迭代次数 */
    maxPreventOverlapIteration: number;
    sortBy: string | undefined;
    sortStrength: number;
    width: number | undefined;
    height: number | undefined;
    private focusIndex;
    private distances;
    private eIdealDistances;
    private weights;
    private radii;
    nodes: Node[];
    links: Link[];
    onLayoutEnd: () => void;
    constructor(options?: RadialLayoutOptions){
        super();
        /** 停止迭代的最大迭代数 */
        this.maxIteration = 1000;
        /** 中心点，默认为数据中第一个点 */
        this.focusNode = null;
        /** 每一圈半径 */
        this.unitRadius = null;
        /** 默认边长度 */
        this.linkDistance = 50;
        /** 是否防止重叠 */
        this.preventOverlap = false;
        /** 是否必须是严格的 radial 布局，即每一层的节点严格布局在一个环上。preventOverlap 为 true 时生效 */
        this.strictRadial = true;
        /** 防止重叠步骤的最大迭代次数 */
        this.maxPreventOverlapIteration = 200;
        this.sortStrength = 10;
        this.nodes = [];
        this.links = [];
        this.updateCfg(options);
        return this;
    }
    getDefaultCfg(): {
        maxIteration: number;
        focusNode: null;
        unitRadius: null;
        linkDistance: number;
        preventOverlap: boolean;
        nodeSize: undefined;
        nodeSpacing: undefined;
        strictRadial: boolean;
        maxPreventOverlapIteration: number;
        sortBy: undefined;
        sortStrength: number;
    }{
        return {
            maxIteration: 1000,
            focusNode: null,
            unitRadius: null,
            linkDistance: 50,
            preventOverlap: false,
            nodeSize: undefined,
            nodeSpacing: undefined,
            strictRadial: true,
            maxPreventOverlapIteration: 200,
            sortBy: undefined,
            sortStrength: 10
        };
    };
    /**
     * 执行布局
     */
    protected process(): {
        nodes: Node[];
        links: Link[];
    } | undefined{
        var self = this;
        var nodes = self.nodes;
        var links = self.links || [];
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
        var linkDistance = self.linkDistance;
        // layout
        var focusNode = null;
        if (isString(self.focusNode)) {
            var found = false;
            for (var i = 0; i < nodes.length; i++) {
                if (nodes[i].id === self.focusNode) {
                    focusNode = nodes[i];
                    self.focusNode = focusNode;
                    found = true;
                    i = nodes.length;
                }
            }
            if (!found) {
                focusNode = null;
            }
        }
        else {
            focusNode = self.focusNode;
        }
        // default focus node
        if (!focusNode) {
            focusNode = nodes[0];
            self.focusNode = focusNode;
        }
        // the index of the focusNode in data
        var focusIndex = getIndexById(nodes, focusNode.id);
        self.focusIndex = focusIndex;
        // the graph-theoretic distance (shortest path distance) matrix
        var adjMatrix = getAdjMatrix({ nodes: nodes, links: links }, false);
        var D = floydWarshall(adjMatrix);
        var maxDistance = self.maxToFocus(D, focusIndex);
        // replace first node in unconnected component to the circle at (maxDistance + 1)
        self.handleInfinity(D, focusIndex, maxDistance + 1);
        self.distances = D;
        // the shortest path distance from each node to focusNode
        var focusNodeD = D[focusIndex];
        var width = self.width || 500;
        var height = self.height || 500;
        var semiWidth = width - center.x > center.x ? center.x : width - center.x;
        var semiHeight = height - center.y > center.y ? center.y : height - center.y;
        if (semiWidth === 0) {
            semiWidth = width / 2;
        }
        if (semiHeight === 0) {
            semiHeight = height / 2;
        }
        // the maxRadius of the graph
        var maxRadius = semiHeight > semiWidth ? semiWidth : semiHeight;
        var maxD = Math.max.apply(Math, focusNodeD);
        // the radius for each nodes away from focusNode
        var radii = [];
        focusNodeD.forEach(function (value, i) {
            if (!self.unitRadius) {
                self.unitRadius = maxRadius / maxD;
            }
            radii[i] = value * self.unitRadius;
        });
        self.radii = radii;
        var eIdealD = self.eIdealDisMatrix();
        // const eIdealD = scaleMatrix(D, linkDistance);
        self.eIdealDistances = eIdealD;
        // the weight matrix, Wij = 1 / dij^(-2)
        var W = getWeightMatrix(eIdealD);
        self.weights = W;
        // the initial positions from mds
        var mds = new MDS({ linkDistance: linkDistance, distances: eIdealD });
        var positions = mds.layout();
        positions.forEach(function (p) {
            if (isNaN(p[0])) {
                p[0] = Math.random() * linkDistance;
            }
            if (isNaN(p[1])) {
                p[1] = Math.random() * linkDistance;
            }
        });
        self.positions = positions;
        positions.forEach(function (p, i) {
            nodes[i].x = p[0] + center.x;
            nodes[i].y = p[1] + center.y;
        });
        // move the graph to origin, centered at focusNode
        positions.forEach(function (p) {
            p[0] -= positions[focusIndex][0];
            p[1] -= positions[focusIndex][1];
        });
        self.run();
        var preventOverlap = self.preventOverlap;
        var nodeSize = self.nodeSize;
        var nodeSizeFunc;
        var strictRadial = self.strictRadial;
        // stagger the overlapped nodes
        if (preventOverlap) {
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
                    if (isRect(d)) {
                        var res = d.width() > d.height() ? d.width() : d.height();
                        return res + nodeSpacingFunc_1(d);
                    }
                    else if(isCircle(d))return d.r() + nodeSpacingFunc_1(d);
                    else return 10 + nodeSpacingFunc_1(d);
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
            var nonoverlapForceParams = {
                nodes: nodes,
                nodeSizeFunc: nodeSizeFunc,
                adjMatrix: adjMatrix,
                positions: positions,
                radii: radii,
                height: height,
                width: width,
                strictRadial: strictRadial,
                focusID: focusIndex,
                iterations: self.maxPreventOverlapIteration || 200,
                k: positions.length / 4.5
            };
            var nonoverlapForce = new RadialNonoverlapForce(nonoverlapForceParams);
            positions = nonoverlapForce.layout();
        }
        // move the graph to center
        positions.forEach(function (p, i) {
            nodes[i].x = p[0] + center.x;
            nodes[i].y = p[1] + center.y;
        });
        if (self.onLayoutEnd)
            self.onLayoutEnd();
        return {
            nodes: nodes,
            links: links
        };
    };
    run(): void{
        var self = this;
        var maxIteration = self.maxIteration;
        var positions = self.positions || [];
        var W = self.weights || [];
        var eIdealDis = self.eIdealDistances || [];
        var radii = self.radii || [];
        for (var i = 0; i <= maxIteration; i++) {
            var param = i / maxIteration;
            self.oneIteration(param, positions, radii, eIdealDis, W);
        }
    };
    private oneIteration(param, positions, radii, D, W) {
        var self = this;
        var vparam = 1 - param;
        var focusIndex = self.focusIndex;
        positions.forEach(function (v, i) {
            // v
            var originDis = getEDistance(v, [0, 0]);
            var reciODis = originDis === 0 ? 0 : 1 / originDis;
            if (i === focusIndex) {
                return;
            }
            var xMolecule = 0;
            var yMolecule = 0;
            var denominator = 0;
            positions.forEach(function (u, j) {
                // u
                if (i === j) {
                    return;
                }
                // the euclidean distance between v and u
                var edis = getEDistance(v, u);
                var reciEdis = edis === 0 ? 0 : 1 / edis;
                var idealDis = D[j][i];
                // same for x and y
                denominator += W[i][j];
                // x
                xMolecule += W[i][j] * (u[0] + idealDis * (v[0] - u[0]) * reciEdis);
                // y
                yMolecule += W[i][j] * (u[1] + idealDis * (v[1] - u[1]) * reciEdis);
            });
            var reciR = radii[i] === 0 ? 0 : 1 / radii[i];
            denominator *= vparam;
            denominator += param * reciR * reciR;
            // x
            xMolecule *= vparam;
            xMolecule += param * reciR * v[0] * reciODis;
            v[0] = xMolecule / denominator;
            // y
            yMolecule *= vparam;
            yMolecule += param * reciR * v[1] * reciODis;
            v[1] = yMolecule / denominator;
        });
    };
    private eIdealDisMatrix() {
        var self = this;
        var nodes = self.nodes;
        if (!nodes)
            return [];
        var D = self.distances;
        var linkDis = self.linkDistance;
        var radii = self.radii || [];
        var unitRadius = self.unitRadius || 50;
        var result = [];
        if (D) {
            D.forEach(function (row, i) {
                var newRow = [];
                row.forEach(function (v, j) {
                    if (i === j) {
                        newRow.push(0);
                    }
                    else if (radii[i] === radii[j]) {
                        // i and j are on the same circle
                        if (self.sortBy === "data") {
                            // sort the nodes on the same circle according to the ordering of the data
                            newRow.push((v * (Math.abs(i - j) * self.sortStrength)) /
                                (radii[i] / unitRadius));
                        }
                        else if (self.sortBy) {
                            // sort the nodes on the same circle according to the attributes
                            var iValue = nodes[i][self.sortBy] || 0;
                            var jValue = nodes[j][self.sortBy] || 0;
                            if (isString(iValue)) {
                                iValue = iValue.charCodeAt(0);
                            }
                            if (isString(jValue)) {
                                jValue = jValue.charCodeAt(0);
                            }
                            newRow.push((v * (Math.abs(iValue - jValue) * self.sortStrength)) /
                                (radii[i] / unitRadius));
                        }
                        else {
                            newRow.push((v * linkDis) / (radii[i] / unitRadius));
                        }
                    }
                    else {
                        // i and j are on different circle
                        // i and j are on different circle
                        var link = (linkDis + unitRadius) / 2;
                        newRow.push(v * link);
                    }
                });
                result.push(newRow);
            });
        }
        return result;
    };
    private handleInfinity(matrix, focusIndex, step) {
        var length = matrix.length;
        // 遍历 matrix 中遍历 focus 对应行
        for (var i = 0; i < length; i++) {
            // matrix 关注点对应行的 Inf 项
            if (matrix[focusIndex][i] === Infinity) {
                matrix[focusIndex][i] = step;
                matrix[i][focusIndex] = step;
                // 遍历 matrix 中的 i 行，i 行中非 Inf 项若在 focus 行为 Inf，则替换 focus 行的那个 Inf
                for (var j = 0; j < length; j++) {
                    if (matrix[i][j] !== Infinity && matrix[focusIndex][j] === Infinity) {
                        matrix[focusIndex][j] = step + matrix[i][j];
                        matrix[j][focusIndex] = step + matrix[i][j];
                    }
                }
            }
        }
        // 处理其他行的 Inf。根据该行对应点与 focus 距离以及 Inf 项点 与 focus 距离，决定替换值
        for (var i = 0; i < length; i++) {
            if (i === focusIndex) {
                continue;
            }
            for (var j = 0; j < length; j++) {
                if (matrix[i][j] === Infinity) {
                    var minus = Math.abs(matrix[focusIndex][i] - matrix[focusIndex][j]);
                    minus = minus === 0 ? 1 : minus;
                    matrix[i][j] = minus;
                }
            }
        }
    };
    private maxToFocus(matrix, focusIndex) {
        var max = 0;
        for (var i = 0; i < matrix[focusIndex].length; i++) {
            if (matrix[focusIndex][i] === Infinity) {
                continue;
            }
            max = matrix[focusIndex][i] > max ? matrix[focusIndex][i] : max;
        }
        return max;
    };
    getType(): string{
        return "radial";
    };
}