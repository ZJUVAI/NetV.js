import * as d3Force from "d3-force"
import NetV from "src";
interface INode {
    id: string;
    x: number;
    y: number;
    vx: number;
    vy: number;
    cluster: any;
}
export default function forceInABox(): {
    (alpha: number): any | undefined;
    initialize(_: any): void;
    template: (x: any) => string | any;
    groupBy: (x: any) => ((d: INode) => any) | any;
    enableGrouping: (x: any) => boolean | any;
    strength: (x: any) => number | any;
    centerX: (_: any) => number | any;
    centerY: (_: any) => number | any;
    nodes: (_: any) => INode[] | any;
    links: (_: any) => any[] | any;
    forceNodeSize: (_: any) => ((d: any) => number) | any;
    nodeSize: (_: any) => ((d: any) => number) | any;
    forceCharge: (_: any) => ((d: any) => number) | any;
    forceLinkDistance: (_: any) => ((d: any) => number) | any;
    forceLinkStrength: (_: any) => ((d: any) => number) | any;
    offset: (_: any) => number[] | any;
    getFocis: () => any;
} {
    function constant(_) {
        return function (a) { return _; };
    }
    var groupBy = function (d) {
        return d.cluster;
    };
    var forceNodeSize = constant(1);
    var forceCharge = constant(-1);
    var forceLinkDistance = constant(100);
    var forceLinkStrength = constant(0.1);
    var offset = [0, 0];
    var nodes = [];
    var nodesMap = {};
    var links = [];
    var centerX = 100;
    var centerY = 100;
    var foci = {
        none: {
            x: 0,
            y: 0,
        },
    };
    var templateNodes = [];
    var templateForce;
    var template = 'force';
    var enableGrouping = true;
    var strength = 0.1;
    function force(alpha) {
        if (!enableGrouping) {
            return force;
        }
        templateForce.tick();
        getFocisFromTemplate();
        for (var i = 0, n = nodes.length, node = void 0, k = alpha * strength; i < n; ++i) {
            node = nodes[i];
            node.vx += (foci[groupBy(node)].x - node.x) * k;
            node.vy += (foci[groupBy(node)].y - node.y) * k;
        }
    }
    function initialize() {
        if (!nodes)
            return;
        initializeWithForce();
    }
    function initializeWithForce() {
        if (!nodes || !nodes.length) {
            return;
        }
        if (groupBy(nodes[0]) === undefined) {
            throw Error("Couldnt find the grouping attribute for the nodes. Make sure to set it up with forceInABox.groupBy('clusterAttr') before calling .links()");
        }
        // checkLinksAsObjects();
        var net = getGroupsGraph();
        templateForce = d3Force
            .forceSimulation(net.nodes)
            .force('x', d3Force.forceX(centerX).strength(0.1))
            .force('y', d3Force.forceY(centerY).strength(0.1))
            .force('collide', d3Force.forceCollide(function (d) { return d.index; }).iterations(4))
            .force('charge', d3Force.forceManyBody().strength(forceCharge))
            .force('links', d3Force
            .forceLink(net.nodes.length ? net.links : [])
            .distance(forceLinkDistance)
            .strength(forceLinkStrength));
        templateNodes = templateForce.nodes();
        getFocisFromTemplate();
    }
    function getGroupsGraph() {
        var gnodes = [];
        var glinks = [];
        var dNodes = {};
        var clustersList = [];
        var clustersCounts = {};
        var clustersLinks = [];
        clustersCounts = computeClustersNodeCounts(nodes);
        clustersLinks = computeClustersLinkCounts(links);
        clustersList = Object.keys(clustersCounts);
        clustersList.forEach(function (key, index) {
            var val = clustersCounts[key];
            // Uses approx meta-node size
            gnodes.push({
                id: key,
                size: val.count,
                r: Math.sqrt(val.sumforceNodeSize / Math.PI),
            });
            dNodes[key] = index;
        });
        clustersLinks.forEach(function (l) {
            var source = dNodes[l.source];
            var target = dNodes[l.target];
            if (source !== undefined && target !== undefined) {
                glinks.push({
                    source: source,
                    target: target,
                    count: l.count,
                });
            }
        });
        return {
            nodes: gnodes,
            links: glinks,
        };
    }
    function computeClustersNodeCounts(nodes) {
        var clustersCounts = {};
        nodes.forEach(function (d) {
            var key = groupBy(d);
            if (!clustersCounts[key]) {
                clustersCounts[key] = {
                    count: 0,
                    sumforceNodeSize: 0,
                };
            }
        });
        nodes.forEach(function (d) {
            var key = groupBy(d);
            var nodeSize = forceNodeSize(d);
            var tmpCount = clustersCounts[key];
            tmpCount.count = tmpCount.count + 1;
            tmpCount.sumforceNodeSize =
                tmpCount.sumforceNodeSize + Math.PI * (nodeSize * nodeSize) * 1.3;
            clustersCounts[key] = tmpCount;
        });
        return clustersCounts;
    }
    function computeClustersLinkCounts(links) {
        var dClusterLinks = {};
        var clusterLinks = [];
        links.forEach(function (l) {
            var key = getLinkKey(l);
            var count = 0;
            if (dClusterLinks[key] !== undefined) {
                count = dClusterLinks[key];
            }
            count += 1;
            dClusterLinks[key] = count;
        });
        var entries = Object.entries(dClusterLinks);
        entries.forEach(function (_a) {
            var key = _a[0], count = _a[1];
            var source = key.split('~')[0];
            var target = key.split('~')[1];
            if (source !== undefined && target !== undefined) {
                clusterLinks.push({
                    source: source,
                    target: target,
                    count: count,
                });
            }
        });
        return clusterLinks;
    }
    function getFocisFromTemplate() {
        foci = {
            none: {
                x: 0,
                y: 0,
            },
        };
        templateNodes.forEach(function (d) {
            foci[d.id] = {
                x: d.x - offset[0],
                y: d.y - offset[1],
            };
        });
        return foci;
    }
    function getLinkKey(l) {
        var sourceID = groupBy(nodesMap[l.source]);
        var targetID = groupBy(nodesMap[l.target]);
        return sourceID <= targetID
            ? sourceID + "~" + targetID
            : targetID + "~" + sourceID;
    }
    function genNodesMap(nodes) {
        nodesMap = {};
        nodes.forEach(function (node) {
            nodesMap[node.id] = node;
        });
    }
    function setTemplate(x) {
        if (!arguments.length)
            return template;
        template = x;
        initialize();
        return force;
    }
    function setGroupBy(x) {
        if (!arguments.length)
            return groupBy;
        if (typeof x === 'string') {
            groupBy = function (d) {
                return d[x];
            };
            return force;
        }
        groupBy = x;
        return force;
    }
    function setEnableGrouping(x) {
        if (!arguments.length)
            return enableGrouping;
        enableGrouping = x;
        return force;
    }
    function setStrength(x) {
        if (!arguments.length)
            return strength;
        strength = x;
        return force;
    }
    function setCenterX(_) {
        if (arguments.length) {
            centerX = _;
            return force;
        }
        return centerX;
    }
    function setCenterY(_) {
        if (arguments.length) {
            centerY = _;
            return force;
        }
        return centerY;
    }
    function setNodes(_) {
        if (arguments.length) {
            genNodesMap(_ || []);
            nodes = _ || [];
            return force;
        }
        return nodes;
    }
    function setLinks(_) {
        if (arguments.length) {
            links = _ || [];
            initialize();
            return force;
        }
        return links;
    }
    function setForceNodeSize(_) {
        if (arguments.length) {
            if (typeof _ === 'function') {
                forceNodeSize = _;
            }
            else {
                forceNodeSize = constant(+_);
            }
            initialize();
            return force;
        }
        return forceNodeSize;
    }
    function setForceCharge(_) {
        if (arguments.length) {
            if (typeof _ === 'function') {
                forceCharge = _;
            }
            else {
                forceCharge = constant(+_);
            }
            initialize();
            return force;
        }
        return forceCharge;
    }
    function setForceLinkDistance(_) {
        if (arguments.length) {
            if (typeof _ === 'function') {
                forceLinkDistance = _;
            }
            else {
                forceLinkDistance = constant(+_);
            }
            initialize();
            return force;
        }
        return forceLinkDistance;
    }
    function setForceLinkStrength(_) {
        if (arguments.length) {
            if (typeof _ === 'function') {
                forceLinkStrength = _;
            }
            else {
                forceLinkStrength = constant(+_);
            }
            initialize();
            return force;
        }
        return forceLinkStrength;
    }
    function setOffset(_) {
        if (arguments.length) {
            offset = _;
            return force;
        }
        return offset;
    }
    force.initialize = function (_) {
        nodes = _;
        initialize();
    };
    force.template = setTemplate;
    force.groupBy = setGroupBy;
    force.enableGrouping = setEnableGrouping;
    force.strength = setStrength;
    force.centerX = setCenterX;
    force.centerY = setCenterY;
    force.nodes = setNodes;
    force.links = setLinks;
    force.forceNodeSize = setForceNodeSize;
    // Legacy support
    force.nodeSize = force.forceNodeSize;
    force.forceCharge = setForceCharge;
    force.forceLinkDistance = setForceLinkDistance;
    force.forceLinkStrength = setForceLinkStrength;
    force.offset = setOffset;
    force.getFocis = getFocisFromTemplate;
    return force;
}