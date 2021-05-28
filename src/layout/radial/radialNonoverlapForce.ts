const SPEED_DIVISOR = 800;
export declare type RadialNonoverlapForceParam = {
    positions: number[][];
    adjMatrix: number[][];
    focusID: number;
    radii: number[];
    iterations?: number;
    height?: number;
    width?: number;
    speed?: number;
    gravity?: number;
    nodeSizeFunc: (node: any) => number;
    k: number;
    strictRadial: boolean;
    nodes: any[];
};
export default class RadialNonoverlapForce {
    /** node positions */
    positions: number[][];
    /** adjacency matrix */
    adjMatrix: number[][];
    /** focus node */
    focusID: number;
    /** radii */
    radii: number[];
    /** the number of iterations */
    iterations: number;
    /** the height of the canvas */
    height: number;
    /** the width of the canvas */
    width: number;
    /** the moving speed */
    speed: number;
    /** the gravity */
    gravity: number;
    /** the node size */
    nodeSizeFunc: (node: any) => number;
    /** the strength of forces */
    k: number;
    /** if each circle can be separated into subcircles to avoid overlappings */
    strictRadial: boolean;
    /** the nodes data */
    nodes: any[];
    private maxDisplace;
    private disp;
    constructor(params: RadialNonoverlapForceParam){
        this.disp = [];
        this.positions = params.positions;
        this.adjMatrix = params.adjMatrix;
        this.focusID = params.focusID;
        this.radii = params.radii;
        this.iterations = params.iterations || 10;
        this.height = params.height || 10;
        this.width = params.width || 10;
        this.speed = params.speed || 100;
        this.gravity = params.gravity || 10;
        this.nodeSizeFunc = params.nodeSizeFunc;
        this.k = params.k || 5;
        this.strictRadial = params.strictRadial;
        this.nodes = params.nodes;
    }
    layout(): number[][]{
        var self = this;
        var positions = self.positions;
        var disp = [];
        var iterations = self.iterations;
        var maxDisplace = self.width / 10;
        self.maxDisplace = maxDisplace;
        self.disp = disp;
        for (var i = 0; i < iterations; i++) {
            positions.forEach(function (_, k) {
                disp[k] = { x: 0, y: 0 };
            });
            // 给重叠的节点增加斥力
            self.getRepulsion();
            self.updatePositions();
        }
        return positions;
    };
    private getRepulsion() {
        var self = this;
        var positions = self.positions;
        var nodes = self.nodes;
        var disp = self.disp;
        var k = self.k;
        var radii = self.radii || [];
        positions.forEach(function (v, i) {
            disp[i] = { x: 0, y: 0 };
            positions.forEach(function (u, j) {
                if (i === j) {
                    return;
                }
                // v and u are not on the same circle, return
                if (radii[i] !== radii[j]) {
                    return;
                }
                var vecx = v[0] - u[0];
                var vecy = v[1] - u[1];
                var vecLength = Math.sqrt(vecx * vecx + vecy * vecy);
                if (vecLength === 0) {
                    vecLength = 1;
                    var sign = i > j ? 1 : -1;
                    vecx = 0.01 * sign;
                    vecy = 0.01 * sign;
                }
                // these two nodes overlap
                if (vecLength < self.nodeSizeFunc(nodes[i]) / 2 + self.nodeSizeFunc(nodes[j]) / 2) {
                    var common = (k * k) / vecLength;
                    disp[i].x += (vecx / vecLength) * common;
                    disp[i].y += (vecy / vecLength) * common;
                }
            });
        });
    };
    private updatePositions() {
        var self = this;
        var positions = self.positions;
        var disp = self.disp;
        var speed = self.speed;
        var strictRadial = self.strictRadial;
        var f = self.focusID;
        var maxDisplace = self.maxDisplace || self.width / 10;
        if (strictRadial) {
            disp.forEach(function (di, i) {
                var vx = positions[i][0] - positions[f][0];
                var vy = positions[i][1] - positions[f][1];
                var vLength = Math.sqrt(vx * vx + vy * vy);
                var vpx = vy / vLength;
                var vpy = -vx / vLength;
                var diLength = Math.sqrt(di.x * di.x + di.y * di.y);
                var alpha = Math.acos((vpx * di.x + vpy * di.y) / diLength);
                if (alpha > Math.PI / 2) {
                    alpha -= Math.PI / 2;
                    vpx *= -1;
                    vpy *= -1;
                }
                var tdispLength = Math.cos(alpha) * diLength;
                di.x = vpx * tdispLength;
                di.y = vpy * tdispLength;
            });
        }
        // move
        var radii = self.radii;
        positions.forEach(function (n, i) {
            if (i === f) {
                return;
            }
            var distLength = Math.sqrt(disp[i].x * disp[i].x + disp[i].y * disp[i].y);
            if (distLength > 0 && i !== f) {
                var limitedDist = Math.min(maxDisplace * (speed / SPEED_DIVISOR), distLength);
                n[0] += (disp[i].x / distLength) * limitedDist;
                n[1] += (disp[i].y / distLength) * limitedDist;
                if (strictRadial) {
                    var vx = n[0] - positions[f][0];
                    var vy = n[1] - positions[f][1];
                    var nfDis = Math.sqrt(vx * vx + vy * vy);
                    vx = (vx / nfDis) * radii[i];
                    vy = (vy / nfDis) * radii[i];
                    n[0] = positions[f][0] + vx;
                    n[1] = positions[f][1] + vy;
                }
            }
        });
    };
}
