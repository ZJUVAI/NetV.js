import { Link, Node } from './util';
import { Position } from "src/interfaces";
import BaseLayout from "./base";
import {Matrix,SingularValueDecomposition} from "ml-matrix"
import { MDSLayoutOptions } from "./options";
import { floydWarshall, getAdjMatrix, scaleMatrix } from "./util";
/**
 * mds 布局
 */
export default class MDSLayout extends BaseLayout {
    /** 布局中心 */
    center: Position;
    /** 边长度 */
    linkDistance: number;
    private scaledDistances;
    nodes: Node[];
    links: Link[];
    /** 迭代结束的回调函数 */
    onLayoutEnd: () => void;
    constructor(options?: MDSLayoutOptions){
        super();
        /** 布局中心 */
        this.center = {x:0,y:0};
        /** 边长度 */
        this.linkDistance = 50;
        this.nodes = [];
        this.links = [];
        /** 迭代结束的回调函数 */
        this.onLayoutEnd = function () { };
        this.updateCfg(options);
        return this;
    }
    getDefaultCfg(): {
        center: Position;
        linkDistance: number;
    }{
        return {
            center: {x:0,y:0},
            linkDistance: 50
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
        var nodes = self.nodes, _a = self.links, links = _a === void 0 ? [] : _a;
        var center = self.center;
        if (!nodes || nodes.length === 0) {
            if (self.onLayoutEnd)
                self.onLayoutEnd();
            return;
        }
        if (nodes.length === 1) {
            nodes[0].x = center.x;
            nodes[0].y = center.y;
            if (self.onLayoutEnd)
                self.onLayoutEnd();
            return;
        }
        var linkDistance = self.linkDistance;
        // the graph-theoretic distance (shortest path distance) matrix
        var adjMatrix = getAdjMatrix({ nodes: nodes, links: links }, false);
        var distances = floydWarshall(adjMatrix);
        self.handleInfinity(distances);
        // scale the ideal edge length acoording to linkDistance
        var scaledD = scaleMatrix(distances, linkDistance);
        self.scaledDistances = scaledD;
        // get positions by MDS
        var positions = self.runMDS();
        self.positions = positions;
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
    /**
     * mds 算法
     * @return {array} positions 计算后的节点位置数组
     */
    runMDS(): number[][]{
        var self = this;
        var dimension = 2;
        var distances = self.scaledDistances;
        // square distances
        var M = Matrix.mul(Matrix.pow(distances, 2), -0.5);
        // double centre the rows/columns
        var rowMeans = M.mean("row");
        var colMeans = M.mean("column");
        var totalMean = M.mean();
        M.add(totalMean)
            .subRowVector(rowMeans)
            .subColumnVector(colMeans);
        // take the SVD of the double centred matrix, and return the
        // points from it
        var ret = new SingularValueDecomposition(M);
        var eigenValues = Matrix.sqrt(ret.diagonalMatrix).diagonal();
        return ret.leftSingularVectors.toJSON().map(function (row) {
            return Matrix.mul([row], [eigenValues])
                .toJSON()[0]
                .splice(0, dimension);
        });
    };
    handleInfinity(distances: number[][]): void{
        var maxDistance = -999999;
        distances.forEach(function (row) {
            row.forEach(function (value) {
                if (value === Infinity) {
                    return;
                }
                if (maxDistance < value) {
                    maxDistance = value;
                }
            });
        });
        distances.forEach(function (row, i) {
            row.forEach(function (value, j) {
                if (value === Infinity) {
                    distances[i][j] = maxDistance;
                }
            });
        });
    };
    getType(): string{
        return "mds";
    };
}
