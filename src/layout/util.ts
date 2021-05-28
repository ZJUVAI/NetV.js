function getDegree(n, nodeIdxMap, links) {
    var degrees = [];
    for (var i = 0; i < n; i++) {
        degrees[i] = 0;
    }
    if (!links)
        return degrees;
    links.forEach(function (e) {
        if (e.source) {
            degrees[nodeIdxMap[e.source]] += 1;
        }
        if (e.target) {
            degrees[nodeIdxMap[e.target]] += 1;
        }
    });
    return degrees;
};
function isArray(param){
    return Array.isArray(param);
}
function isNumber(param){
    return typeof param === 'number'
}
function isString(param){
    return typeof param === 'string'
}
function isNaN(param){
    return Number.isNaN(Number(param))
}
function isFunction(param){
    return typeof param === 'function';
}
function clone(target) {
    if (target === null) {
        return target;
    }
    if (target instanceof Date) {
        return new Date(target.getTime());
    }
    if (target instanceof Array) {
        var cp_1 = [];
        target.forEach(function (v) {
            cp_1.push(v);
        });
        return cp_1.map(function (n) { return exports.clone(n); });
    }
    if (typeof target === 'object' && target !== {}) {
        var cp_2 = Object.assign({}, target);
        Object.keys(cp_2).forEach(function (k) {
            cp_2[k] = exports.clone(cp_2[k]);
        });
        return cp_2;
    }
    return target;
};
function floydWarshall(adjMatrix) {
    // initialize
    var dist = [];
    var size = adjMatrix.length;
    for (var i = 0; i < size; i += 1) {
        dist[i] = [];
        for (var j = 0; j < size; j += 1) {
            if (i === j) {
                dist[i][j] = 0;
            }
            else if (adjMatrix[i][j] === 0 || !adjMatrix[i][j]) {
                dist[i][j] = Infinity;
            }
            else {
                dist[i][j] = adjMatrix[i][j];
            }
        }
    }
    // floyd
    for (var k = 0; k < size; k += 1) {
        for (var i = 0; i < size; i += 1) {
            for (var j = 0; j < size; j += 1) {
                if (dist[i][j] > dist[i][k] + dist[k][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
    return dist;
};
function getAdjMatrix(data, directed) {
    var nodes = data.nodes, links = data.links;
    var matrix = [];
    // map node with index in data.nodes
    var nodeMap = {};
    if (!nodes) {
        throw new Error('invalid nodes data!');
    }
    if (nodes) {
        nodes.forEach(function (node, i) {
            nodeMap[node.id] = i;
            var row = [];
            matrix.push(row);
        });
    }
    if (links) {
        links.forEach(function (link) {
            var source = link.source, target = link.target;
            var sIndex = nodeMap[source];
            var tIndex = nodeMap[target];
            matrix[sIndex][tIndex] = 1;
            if (!directed) {
                matrix[tIndex][sIndex] = 1;
            }
        });
    }
    return matrix;
};
function scaleMatrix(matrix, ratio) {
    var result = [];
    matrix.forEach(function (row) {
        var newRow = [];
        row.forEach(function (v) {
            newRow.push(v * ratio);
        });
        result.push(newRow);
    });
    return result;
};
function isRect(node){
    if(isFunction(node.shape)){
        return node.shape() === 'rect' || node.shape() === 'cross'
    }
    else if(node.shape){
        return node.shape === 'rect' || node.shape === 'cross'
    }
    return false
}
function isCircle(node){
    if(isFunction(node.shape)){
        return node.shape() === 'circle'
    }
    else if(node.shape){
        return node.shape === 'circle'
    }
    return false
}
declare type Node = {
    x:number,
    y:number,
    id:string,
    shape?:string,
    index?:number,
    size?:number[]
}
declare type Link = {
    source:string,
    target:string,
    width?:number,
    coutrolPoints?:Node[]
}
export{getDegree,floydWarshall,getAdjMatrix,scaleMatrix,isArray,isNumber,isNaN,isString,isFunction,isRect,isCircle,clone,Node,Link}