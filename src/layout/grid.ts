/**
 * @fileOverview grid layout
 * @author shiwu.wyy@antfin.com
 * this algorithm refers to <cytoscape.js> - https://github.com/cytoscape/cytoscape.js/
 */
import Link from "src/elements/link";
import Node from "src/elements/node";
import { Position } from "src/interfaces";
import BaseLayout from "./base";
import { GridLayoutOptions } from "./options";
import { getDegree,isArray,isNumber,isNaN } from "./util";
declare type INode = Node & {
    degree: number;
    size: number | Position;
};
/**
 * 网格布局
 */
export default class GridLayout extends BaseLayout {
    /** 布局起始点 */
    begin: Position;
    /** prevents node overlap, may overflow boundingBox if not enough space */
    preventOverlap: boolean;
    /** extra spacing around nodes when preventOverlap: true */
    preventOverlapPadding: number;
    /** uses all available space on false, uses minimal space on true */
    condense: boolean;
    /** force num of rows in the grid */
    rows: number | undefined;
    /** force num of columns in the grid */
    cols: number | undefined;
    /** returns { row, col } for element */
    position: ((node: INode) => {
        row?: number;
        col?: number;
    }) | undefined;
    /** a sorting function to order the nodes; e.g. function(a, b){ return a.datapublic ('weight') - b.data('weight') } */
    sortBy: string;
    nodeSize: number | number[];
    nodes: INode[];
    links: Link[];
    width: number;
    height: number;
    private cells;
    private row;
    private col;
    private splits;
    private columns;
    private cellWidth;
    private cellHeight;
    private cellUsed;
    private id2manPos;
    /** 迭代结束的回调函数 */
    onLayoutEnd: () => void;
    public constructor(options?: GridLayoutOptions){
        super();
        /** 布局起始点 */
        this.begin = {x:0,y:0};
        /** prevents node overlap, may overflow boundingBox if not enough space */
        this.preventOverlap = true;
        /** extra spacing around nodes when preventOverlap: true */
        this.preventOverlapPadding = 10;
        /** uses all available space on false, uses minimal space on true */
        this.condense = false;
        /** a sorting function to order the nodes; e.g. function(a, b){ return a.datapublic ('weight') - b.data('weight') } */
        this.sortBy = "degree";
        this.nodeSize = 30;
        this.nodes = [];
        this.links = [];
        this.width = 300;
        this.height = 300;
        this.row = 0;
        this.col = 0;
        this.cellWidth = 0;
        this.cellHeight = 0;
        this.cellUsed = {};
        this.id2manPos = {};
        /** 迭代结束的回调函数 */
        this.onLayoutEnd = function () { };
        this.updateCfg(options);
        return this;
    }
    public getDefaultCfg(){
        return {
            begin: {x:0,y:0},
            preventOverlap: true,
            preventOverlapPadding: 10,
            condense: false,
            rows: undefined,
            cols: undefined,
            position: undefined,
            sortBy: "degree",
            nodeSize: 30
        };
    };
    /**
     * 执行布局
     */
    public execute(){
        var self = this;
        var nodes = self.nodes;
        var n = nodes.length;
        var begin = self.begin;
        if (n === 0) {
            if (self.onLayoutEnd)
                self.onLayoutEnd();
            return;
        }
        if (n === 1) {
            nodes[0].x(begin.x);
            nodes[0].y(begin.y);
            if (self.onLayoutEnd)
                self.onLayoutEnd();
            return;
        }
        var links = self.links;
        var layoutNodes = [];
        nodes.forEach(function (node) {
            layoutNodes.push(node);
        });
        var nodeIdxMap = {};
        layoutNodes.forEach(function (node, i) {
            nodeIdxMap[node.id()] = i;
        });
        if (self.sortBy === "degree" ||
            typeof self.sortBy !== 'string' ||
            layoutNodes[0][self.sortBy] === undefined) {
            self.sortBy = "degree";
            if (isNaN(nodes[0].degree)) {
                var values_1 = getDegree(layoutNodes.length, nodeIdxMap, links);
                layoutNodes.forEach(function (node, i) {
                    node.degree = values_1[i];
                });
            }
        }
        // sort nodes by value
        layoutNodes.sort(function (n1, n2) { return n2[self.sortBy] - n1[self.sortBy]; });
        if (!self.width && typeof window !== "undefined") {
            self.width = window.innerWidth;
        }
        if (!self.height && typeof window !== "undefined") {
            self.height = window.innerHeight;
        }
        var oRows = self.rows;
        var oCols = self.cols != null ? self.cols : self.columns;
        self.cells = n;
        // if rows or columns were set in self, use those values
        if (oRows != null && oCols != null) {
            self.rows = oRows;
            self.cols = oCols;
        }
        else if (oRows != null && oCols == null) {
            self.rows = oRows;
            self.cols = Math.ceil(self.cells / self.rows);
        }
        else if (oRows == null && oCols != null) {
            self.cols = oCols;
            self.rows = Math.ceil(self.cells / self.cols);
        }
        else {
            // otherwise use the automatic values and adjust accordingly	      // otherwise use the automatic values and adjust accordingly
            // width/height * splits^2 = cells where splits is number of times to split width
            self.splits = Math.sqrt((self.cells * self.height) / self.width);
            self.rows = Math.round(self.splits);
            self.cols = Math.round((self.width / self.height) * self.splits);
        }
        if (self.cols * self.rows > self.cells) {
            // otherwise use the automatic values and adjust accordingly
            // if rounding was up, see if we can reduce rows or columns
            var sm = self.small();
            var lg = self.large();
            // reducing the small side takes away the most cells, so try it first
            if ((sm - 1) * lg >= self.cells) {
                self.small(sm - 1);
            }
            else if ((lg - 1) * sm >= self.cells) {
                self.large(lg - 1);
            }
        }
        else {
            // if rounding was too low, add rows or columns
            while (self.cols * self.rows < self.cells) {
                var sm = self.small();
                var lg = self.large();
                // try to add to larger side first (adds less in multiplication)
                if ((lg + 1) * sm >= self.cells) {
                    self.large(lg + 1);
                }
                else {
                    self.small(sm + 1);
                }
            }
        }
        self.cellWidth = self.width / self.cols;
        self.cellHeight = self.height / self.rows;
        if (self.condense) {
            self.cellWidth = 0;
            self.cellHeight = 0;
        }
        if (self.preventOverlap) {
            layoutNodes.forEach(function (node) {
                if (!node.x() || !node.y()) {
                    // for bb
                    node.x(0);
                    node.y(0);
                }
                var nodew;
                var nodeh;
                if (isArray(node.size)) {
                    nodew = node.size[0];
                    nodeh = node.size[1];
                }
                else if (isNumber(node.size)) {
                    nodew = node.size;
                    nodeh = node.size;
                }
                if (nodew === undefined || nodeh === undefined) {
                    if (isArray(self.nodeSize)) {
                        nodew = self.nodeSize[0];
                        nodeh = self.nodeSize[1];
                    }
                    else if (isNumber(self.nodeSize)) {
                        nodew = self.nodeSize;
                        nodeh = self.nodeSize;
                    }
                    else {
                        nodew = 30;
                        nodeh = 30;
                    }
                }
                var p = self.preventOverlapPadding;
                var w = nodew + p;
                var h = nodeh + p;
                self.cellWidth = Math.max(self.cellWidth, w);
                self.cellHeight = Math.max(self.cellHeight, h);
            });
        }
        self.cellUsed = {}; // e.g. 'c-0-2' => true
        // to keep track of current cell position
        self.row = 0;
        self.col = 0;
        // get a cache of all the manual positions
        self.id2manPos = {};
        for (var i = 0; i < layoutNodes.length; i++) {
            var node = layoutNodes[i];
            var rcPos = void 0;
            if (self.position) {
                rcPos = self.position(node);
            }
            if (rcPos && (rcPos.row !== undefined || rcPos.col !== undefined)) {
                // must have at least row or col def'd
                var pos = {
                    row: rcPos.row,
                    col: rcPos.col
                };
                if (pos.col === undefined) {
                    // find unused col
                    pos.col = 0;
                    while (self.used(pos.row, pos.col)) {
                        pos.col++;
                    }
                }
                else if (pos.row === undefined) {
                    // find unused row
                    pos.row = 0;
                    while (self.used(pos.row, pos.col)) {
                        pos.row++;
                    }
                }
                self.id2manPos[node.id()] = pos;
                self.use(pos.row, pos.col);
            }
            self.getPos(node);
        }
        if (self.onLayoutEnd)
            self.onLayoutEnd();
        return {
            links: links,
            nodes: layoutNodes
        };
    }
    private small(val?) {
        var self = this;
        var res;
        var rows = self.rows || 5;
        var cols = self.cols || 5;
        if (val == null) {
            res = Math.min(rows, cols);
        }
        else {
            var min = Math.min(rows, cols);
            if (min === self.rows) {
                self.rows = val;
            }
            else {
                self.cols = val;
            }
        }
        return res;
    };
    private large(val?) {
        var self = this;
        var res;
        var rows = self.rows || 5;
        var cols = self.cols || 5;
        if (val == null) {
            res = Math.max(rows, cols);
        }
        else {
            var max = Math.max(rows, cols);
            if (max === self.rows) {
                self.rows = val;
            }
            else {
                self.cols = val;
            }
        }
        return res;
    };
    private used(row, col) {
        var self = this;
        return self.cellUsed["c-" + row + "-" + col] || false;
    };
    private use(row, col) {
        var self = this;
        self.cellUsed["c-" + row + "-" + col] = true;
    };
    private moveToNextCell () {
        var self = this;
        var cols = self.cols || 5;
        self.col++;
        if (self.col >= cols) {
            self.col = 0;
            self.row++;
        }
    };
    private getPos(node) {
        var self = this;
        var begin = self.begin;
        var cellWidth = self.cellWidth;
        var cellHeight = self.cellHeight;
        var x;
        var y;
        // see if we have a manual position set
        var rcPos = self.id2manPos[node.id()];
        if (rcPos) {
            x = rcPos.col * cellWidth + cellWidth / 2 + begin.x;
            y = rcPos.row * cellHeight + cellHeight / 2 + begin.y;
        }
        else {
            // otherwise set automatically
            while (self.used(self.row, self.col)) {
                self.moveToNextCell();
            }
            x = self.col * cellWidth + cellWidth / 2 + begin.x;
            y = self.row * cellHeight + cellHeight / 2 + begin.y;
            self.use(self.row, self.col);
            self.moveToNextCell();
        }
        node.x(x);
        node.y(y);
    };
    getType() {
        return "grid";
    };
}
