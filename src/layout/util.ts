function getDegree(n, nodeIdxMap, links) {
    var degrees = [];
    for (var i = 0; i < n; i++) {
        degrees[i] = 0;
    }
    if (!links)
        return degrees;
    links.forEach(function (e) {
        if (e.source()) {
            degrees[nodeIdxMap[e.source().id()]] += 1;
        }
        if (e.target()) {
            degrees[nodeIdxMap[e.target().id()]] += 1;
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
export{getDegree,isArray,isNumber,isNaN,isString,clone}