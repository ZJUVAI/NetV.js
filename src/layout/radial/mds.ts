import {Matrix,SingularValueDecomposition} from "ml-matrix";

export default class MDS {
    /** distance matrix */
    distances: number[][];
    /** dimensions */
    dimension: number;
    /** link distance */
    linkDistance: number;
    constructor(params: {
        distances: number[][];
        dimension?: number;
        linkDistance: number;
    }){
        this.distances = params.distances;
        this.dimension = params.dimension || 2;
        this.linkDistance = params.linkDistance;
    }
    layout(): number[][]{
        var self = this;
        var dimension = self.dimension, distances = self.distances, linkDistance = self.linkDistance;
        try {
            // square distances
            var M = Matrix.mul(Matrix.pow(distances, 2), -0.5);
            // double centre the rows/columns
            var rowMeans = M.mean('row');
            var colMeans = M.mean('column');
            var totalMean = M.mean();
            M.add(totalMean).subRowVector(rowMeans).subColumnVector(colMeans);
            // take the SVD of the double centred matrix, and return the
            // points from it
            var ret = new SingularValueDecomposition(M);
            var eigenValues_1 = Matrix.sqrt(ret.diagonalMatrix).diagonal();
            return ret.leftSingularVectors.toJSON().map(function (row) {
                return Matrix.mul([row], [eigenValues_1]).toJSON()[0].splice(0, dimension);
            });
        }
        catch (_a) {
            var res = [];
            for (var i = 0; i < distances.length; i++) {
                var x = Math.random() * linkDistance;
                var y = Math.random() * linkDistance;
                res.push([x, y]);
            }
            return res;
        }
    };
}