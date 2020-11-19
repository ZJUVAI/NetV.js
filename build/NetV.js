(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/d3-dispatch/src/dispatch.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-dispatch/src/dispatch.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var noop = {value: () => {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

/* harmony default export */ __webpack_exports__["default"] = (dispatch);


/***/ }),

/***/ "./node_modules/d3-dispatch/src/index.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-dispatch/src/index.js ***!
  \***********************************************/
/*! exports provided: dispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dispatch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatch.js */ "./node_modules/d3-dispatch/src/dispatch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return _dispatch_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./node_modules/d3-force/src/center.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-force/src/center.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x, y) {
  var nodes, strength = 1;

  if (x == null) x = 0;
  if (y == null) y = 0;

  function force() {
    var i,
        n = nodes.length,
        node,
        sx = 0,
        sy = 0;

    for (i = 0; i < n; ++i) {
      node = nodes[i], sx += node.x, sy += node.y;
    }

    for (sx = (sx / n - x) * strength, sy = (sy / n - y) * strength, i = 0; i < n; ++i) {
      node = nodes[i], node.x -= sx, node.y -= sy;
    }
  }

  force.initialize = function(_) {
    nodes = _;
  };

  force.x = function(_) {
    return arguments.length ? (x = +_, force) : x;
  };

  force.y = function(_) {
    return arguments.length ? (y = +_, force) : y;
  };

  force.strength = function(_) {
    return arguments.length ? (strength = +_, force) : strength;
  };

  return force;
});


/***/ }),

/***/ "./node_modules/d3-force/src/collide.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-force/src/collide.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_quadtree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-quadtree */ "./node_modules/d3-quadtree/src/index.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-force/src/constant.js");
/* harmony import */ var _jiggle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jiggle.js */ "./node_modules/d3-force/src/jiggle.js");




function x(d) {
  return d.x + d.vx;
}

function y(d) {
  return d.y + d.vy;
}

/* harmony default export */ __webpack_exports__["default"] = (function(radius) {
  var nodes,
      radii,
      random,
      strength = 1,
      iterations = 1;

  if (typeof radius !== "function") radius = Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(radius == null ? 1 : +radius);

  function force() {
    var i, n = nodes.length,
        tree,
        node,
        xi,
        yi,
        ri,
        ri2;

    for (var k = 0; k < iterations; ++k) {
      tree = Object(d3_quadtree__WEBPACK_IMPORTED_MODULE_0__["quadtree"])(nodes, x, y).visitAfter(prepare);
      for (i = 0; i < n; ++i) {
        node = nodes[i];
        ri = radii[node.index], ri2 = ri * ri;
        xi = node.x + node.vx;
        yi = node.y + node.vy;
        tree.visit(apply);
      }
    }

    function apply(quad, x0, y0, x1, y1) {
      var data = quad.data, rj = quad.r, r = ri + rj;
      if (data) {
        if (data.index > node.index) {
          var x = xi - data.x - data.vx,
              y = yi - data.y - data.vy,
              l = x * x + y * y;
          if (l < r * r) {
            if (x === 0) x = Object(_jiggle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(random), l += x * x;
            if (y === 0) y = Object(_jiggle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(random), l += y * y;
            l = (r - (l = Math.sqrt(l))) / l * strength;
            node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj));
            node.vy += (y *= l) * r;
            data.vx -= x * (r = 1 - r);
            data.vy -= y * r;
          }
        }
        return;
      }
      return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;
    }
  }

  function prepare(quad) {
    if (quad.data) return quad.r = radii[quad.data.index];
    for (var i = quad.r = 0; i < 4; ++i) {
      if (quad[i] && quad[i].r > quad.r) {
        quad.r = quad[i].r;
      }
    }
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length, node;
    radii = new Array(n);
    for (i = 0; i < n; ++i) node = nodes[i], radii[node.index] = +radius(node, i, nodes);
  }

  force.initialize = function(_nodes, _random) {
    nodes = _nodes;
    random = _random;
    initialize();
  };

  force.iterations = function(_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };

  force.strength = function(_) {
    return arguments.length ? (strength = +_, force) : strength;
  };

  force.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), initialize(), force) : radius;
  };

  return force;
});


/***/ }),

/***/ "./node_modules/d3-force/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-force/src/constant.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-force/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-force/src/index.js ***!
  \********************************************/
/*! exports provided: forceCenter, forceCollide, forceLink, forceManyBody, forceRadial, forceSimulation, forceX, forceY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _center_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./center.js */ "./node_modules/d3-force/src/center.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forceCenter", function() { return _center_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _collide_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collide.js */ "./node_modules/d3-force/src/collide.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forceCollide", function() { return _collide_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _link_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link.js */ "./node_modules/d3-force/src/link.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forceLink", function() { return _link_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _manyBody_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manyBody.js */ "./node_modules/d3-force/src/manyBody.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forceManyBody", function() { return _manyBody_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _radial_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./radial.js */ "./node_modules/d3-force/src/radial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forceRadial", function() { return _radial_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _simulation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./simulation.js */ "./node_modules/d3-force/src/simulation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forceSimulation", function() { return _simulation_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _x_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./x.js */ "./node_modules/d3-force/src/x.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forceX", function() { return _x_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _y_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./y.js */ "./node_modules/d3-force/src/y.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forceY", function() { return _y_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });











/***/ }),

/***/ "./node_modules/d3-force/src/jiggle.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-force/src/jiggle.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(random) {
  return (random() - 0.5) * 1e-6;
});


/***/ }),

/***/ "./node_modules/d3-force/src/lcg.js":
/*!******************************************!*\
  !*** ./node_modules/d3-force/src/lcg.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// https://en.wikipedia.org/wiki/Linear_congruential_generator#Parameters_in_common_use
const a = 1664525;
const c = 1013904223;
const m = 4294967296; // 2^32

/* harmony default export */ __webpack_exports__["default"] = (function() {
  let s = 1;
  return () => (s = (a * s + c) % m) / m;
});


/***/ }),

/***/ "./node_modules/d3-force/src/link.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-force/src/link.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-force/src/constant.js");
/* harmony import */ var _jiggle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jiggle.js */ "./node_modules/d3-force/src/jiggle.js");



function index(d) {
  return d.index;
}

function find(nodeById, nodeId) {
  var node = nodeById.get(nodeId);
  if (!node) throw new Error("node not found: " + nodeId);
  return node;
}

/* harmony default export */ __webpack_exports__["default"] = (function(links) {
  var id = index,
      strength = defaultStrength,
      strengths,
      distance = Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(30),
      distances,
      nodes,
      count,
      bias,
      random,
      iterations = 1;

  if (links == null) links = [];

  function defaultStrength(link) {
    return 1 / Math.min(count[link.source.index], count[link.target.index]);
  }

  function force(alpha) {
    for (var k = 0, n = links.length; k < iterations; ++k) {
      for (var i = 0, link, source, target, x, y, l, b; i < n; ++i) {
        link = links[i], source = link.source, target = link.target;
        x = target.x + target.vx - source.x - source.vx || Object(_jiggle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(random);
        y = target.y + target.vy - source.y - source.vy || Object(_jiggle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(random);
        l = Math.sqrt(x * x + y * y);
        l = (l - distances[i]) / l * alpha * strengths[i];
        x *= l, y *= l;
        target.vx -= x * (b = bias[i]);
        target.vy -= y * b;
        source.vx += x * (b = 1 - b);
        source.vy += y * b;
      }
    }
  }

  function initialize() {
    if (!nodes) return;

    var i,
        n = nodes.length,
        m = links.length,
        nodeById = new Map(nodes.map((d, i) => [id(d, i, nodes), d])),
        link;

    for (i = 0, count = new Array(n); i < m; ++i) {
      link = links[i], link.index = i;
      if (typeof link.source !== "object") link.source = find(nodeById, link.source);
      if (typeof link.target !== "object") link.target = find(nodeById, link.target);
      count[link.source.index] = (count[link.source.index] || 0) + 1;
      count[link.target.index] = (count[link.target.index] || 0) + 1;
    }

    for (i = 0, bias = new Array(m); i < m; ++i) {
      link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
    }

    strengths = new Array(m), initializeStrength();
    distances = new Array(m), initializeDistance();
  }

  function initializeStrength() {
    if (!nodes) return;

    for (var i = 0, n = links.length; i < n; ++i) {
      strengths[i] = +strength(links[i], i, links);
    }
  }

  function initializeDistance() {
    if (!nodes) return;

    for (var i = 0, n = links.length; i < n; ++i) {
      distances[i] = +distance(links[i], i, links);
    }
  }

  force.initialize = function(_nodes, _random) {
    nodes = _nodes;
    random = _random;
    initialize();
  };

  force.links = function(_) {
    return arguments.length ? (links = _, initialize(), force) : links;
  };

  force.id = function(_) {
    return arguments.length ? (id = _, force) : id;
  };

  force.iterations = function(_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initializeStrength(), force) : strength;
  };

  force.distance = function(_) {
    return arguments.length ? (distance = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initializeDistance(), force) : distance;
  };

  return force;
});


/***/ }),

/***/ "./node_modules/d3-force/src/manyBody.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-force/src/manyBody.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_quadtree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-quadtree */ "./node_modules/d3-quadtree/src/index.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-force/src/constant.js");
/* harmony import */ var _jiggle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jiggle.js */ "./node_modules/d3-force/src/jiggle.js");
/* harmony import */ var _simulation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simulation.js */ "./node_modules/d3-force/src/simulation.js");





/* harmony default export */ __webpack_exports__["default"] = (function() {
  var nodes,
      node,
      random,
      alpha,
      strength = Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(-30),
      strengths,
      distanceMin2 = 1,
      distanceMax2 = Infinity,
      theta2 = 0.81;

  function force(_) {
    var i, n = nodes.length, tree = Object(d3_quadtree__WEBPACK_IMPORTED_MODULE_0__["quadtree"])(nodes, _simulation_js__WEBPACK_IMPORTED_MODULE_3__["x"], _simulation_js__WEBPACK_IMPORTED_MODULE_3__["y"]).visitAfter(accumulate);
    for (alpha = _, i = 0; i < n; ++i) node = nodes[i], tree.visit(apply);
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length, node;
    strengths = new Array(n);
    for (i = 0; i < n; ++i) node = nodes[i], strengths[node.index] = +strength(node, i, nodes);
  }

  function accumulate(quad) {
    var strength = 0, q, c, weight = 0, x, y, i;

    // For internal nodes, accumulate forces from child quadrants.
    if (quad.length) {
      for (x = y = i = 0; i < 4; ++i) {
        if ((q = quad[i]) && (c = Math.abs(q.value))) {
          strength += q.value, weight += c, x += c * q.x, y += c * q.y;
        }
      }
      quad.x = x / weight;
      quad.y = y / weight;
    }

    // For leaf nodes, accumulate forces from coincident quadrants.
    else {
      q = quad;
      q.x = q.data.x;
      q.y = q.data.y;
      do strength += strengths[q.data.index];
      while (q = q.next);
    }

    quad.value = strength;
  }

  function apply(quad, x1, _, x2) {
    if (!quad.value) return true;

    var x = quad.x - node.x,
        y = quad.y - node.y,
        w = x2 - x1,
        l = x * x + y * y;

    // Apply the Barnes-Hut approximation if possible.
    // Limit forces for very close nodes; randomize direction if coincident.
    if (w * w / theta2 < l) {
      if (l < distanceMax2) {
        if (x === 0) x = Object(_jiggle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(random), l += x * x;
        if (y === 0) y = Object(_jiggle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(random), l += y * y;
        if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
        node.vx += x * quad.value * alpha / l;
        node.vy += y * quad.value * alpha / l;
      }
      return true;
    }

    // Otherwise, process points directly.
    else if (quad.length || l >= distanceMax2) return;

    // Limit forces for very close nodes; randomize direction if coincident.
    if (quad.data !== node || quad.next) {
      if (x === 0) x = Object(_jiggle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(random), l += x * x;
      if (y === 0) y = Object(_jiggle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(random), l += y * y;
      if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
    }

    do if (quad.data !== node) {
      w = strengths[quad.data.index] * alpha / l;
      node.vx += x * w;
      node.vy += y * w;
    } while (quad = quad.next);
  }

  force.initialize = function(_nodes, _random) {
    nodes = _nodes;
    random = _random;
    initialize();
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), initialize(), force) : strength;
  };

  force.distanceMin = function(_) {
    return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
  };

  force.distanceMax = function(_) {
    return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
  };

  force.theta = function(_) {
    return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
  };

  return force;
});


/***/ }),

/***/ "./node_modules/d3-force/src/radial.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-force/src/radial.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-force/src/constant.js");


/* harmony default export */ __webpack_exports__["default"] = (function(radius, x, y) {
  var nodes,
      strength = Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(0.1),
      strengths,
      radiuses;

  if (typeof radius !== "function") radius = Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+radius);
  if (x == null) x = 0;
  if (y == null) y = 0;

  function force(alpha) {
    for (var i = 0, n = nodes.length; i < n; ++i) {
      var node = nodes[i],
          dx = node.x - x || 1e-6,
          dy = node.y - y || 1e-6,
          r = Math.sqrt(dx * dx + dy * dy),
          k = (radiuses[i] - r) * strengths[i] * alpha / r;
      node.vx += dx * k;
      node.vy += dy * k;
    }
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length;
    strengths = new Array(n);
    radiuses = new Array(n);
    for (i = 0; i < n; ++i) {
      radiuses[i] = +radius(nodes[i], i, nodes);
      strengths[i] = isNaN(radiuses[i]) ? 0 : +strength(nodes[i], i, nodes);
    }
  }

  force.initialize = function(_) {
    nodes = _, initialize();
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initialize(), force) : strength;
  };

  force.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initialize(), force) : radius;
  };

  force.x = function(_) {
    return arguments.length ? (x = +_, force) : x;
  };

  force.y = function(_) {
    return arguments.length ? (y = +_, force) : y;
  };

  return force;
});


/***/ }),

/***/ "./node_modules/d3-force/src/simulation.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-force/src/simulation.js ***!
  \*************************************************/
/*! exports provided: x, y, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return y; });
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-dispatch */ "./node_modules/d3-dispatch/src/index.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/index.js");
/* harmony import */ var _lcg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lcg.js */ "./node_modules/d3-force/src/lcg.js");




function x(d) {
  return d.x;
}

function y(d) {
  return d.y;
}

var initialRadius = 10,
    initialAngle = Math.PI * (3 - Math.sqrt(5));

/* harmony default export */ __webpack_exports__["default"] = (function(nodes) {
  var simulation,
      alpha = 1,
      alphaMin = 0.001,
      alphaDecay = 1 - Math.pow(alphaMin, 1 / 300),
      alphaTarget = 0,
      velocityDecay = 0.6,
      forces = new Map(),
      stepper = Object(d3_timer__WEBPACK_IMPORTED_MODULE_1__["timer"])(step),
      event = Object(d3_dispatch__WEBPACK_IMPORTED_MODULE_0__["dispatch"])("tick", "end"),
      random = Object(_lcg_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

  if (nodes == null) nodes = [];

  function step() {
    tick();
    event.call("tick", simulation);
    if (alpha < alphaMin) {
      stepper.stop();
      event.call("end", simulation);
    }
  }

  function tick(iterations) {
    var i, n = nodes.length, node;

    if (iterations === undefined) iterations = 1;

    for (var k = 0; k < iterations; ++k) {
      alpha += (alphaTarget - alpha) * alphaDecay;

      forces.forEach(function(force) {
        force(alpha);
      });

      for (i = 0; i < n; ++i) {
        node = nodes[i];
        if (node.fx == null) node.x += node.vx *= velocityDecay;
        else node.x = node.fx, node.vx = 0;
        if (node.fy == null) node.y += node.vy *= velocityDecay;
        else node.y = node.fy, node.vy = 0;
      }
    }

    return simulation;
  }

  function initializeNodes() {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.index = i;
      if (node.fx != null) node.x = node.fx;
      if (node.fy != null) node.y = node.fy;
      if (isNaN(node.x) || isNaN(node.y)) {
        var radius = initialRadius * Math.sqrt(0.5 + i), angle = i * initialAngle;
        node.x = radius * Math.cos(angle);
        node.y = radius * Math.sin(angle);
      }
      if (isNaN(node.vx) || isNaN(node.vy)) {
        node.vx = node.vy = 0;
      }
    }
  }

  function initializeForce(force) {
    if (force.initialize) force.initialize(nodes, random);
    return force;
  }

  initializeNodes();

  return simulation = {
    tick: tick,

    restart: function() {
      return stepper.restart(step), simulation;
    },

    stop: function() {
      return stepper.stop(), simulation;
    },

    nodes: function(_) {
      return arguments.length ? (nodes = _, initializeNodes(), forces.forEach(initializeForce), simulation) : nodes;
    },

    alpha: function(_) {
      return arguments.length ? (alpha = +_, simulation) : alpha;
    },

    alphaMin: function(_) {
      return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
    },

    alphaDecay: function(_) {
      return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
    },

    alphaTarget: function(_) {
      return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
    },

    velocityDecay: function(_) {
      return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
    },

    randomSource: function(_) {
      return arguments.length ? (random = _, forces.forEach(initializeForce), simulation) : random;
    },

    force: function(name, _) {
      return arguments.length > 1 ? ((_ == null ? forces.delete(name) : forces.set(name, initializeForce(_))), simulation) : forces.get(name);
    },

    find: function(x, y, radius) {
      var i = 0,
          n = nodes.length,
          dx,
          dy,
          d2,
          node,
          closest;

      if (radius == null) radius = Infinity;
      else radius *= radius;

      for (i = 0; i < n; ++i) {
        node = nodes[i];
        dx = x - node.x;
        dy = y - node.y;
        d2 = dx * dx + dy * dy;
        if (d2 < radius) closest = node, radius = d2;
      }

      return closest;
    },

    on: function(name, _) {
      return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
    }
  };
});


/***/ }),

/***/ "./node_modules/d3-force/src/x.js":
/*!****************************************!*\
  !*** ./node_modules/d3-force/src/x.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-force/src/constant.js");


/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  var strength = Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(0.1),
      nodes,
      strengths,
      xz;

  if (typeof x !== "function") x = Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(x == null ? 0 : +x);

  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.vx += (xz[i] - node.x) * strengths[i] * alpha;
    }
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length;
    strengths = new Array(n);
    xz = new Array(n);
    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN(xz[i] = +x(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
  }

  force.initialize = function(_) {
    nodes = _;
    initialize();
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initialize(), force) : strength;
  };

  force.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initialize(), force) : x;
  };

  return force;
});


/***/ }),

/***/ "./node_modules/d3-force/src/y.js":
/*!****************************************!*\
  !*** ./node_modules/d3-force/src/y.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-force/src/constant.js");


/* harmony default export */ __webpack_exports__["default"] = (function(y) {
  var strength = Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(0.1),
      nodes,
      strengths,
      yz;

  if (typeof y !== "function") y = Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(y == null ? 0 : +y);

  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.vy += (yz[i] - node.y) * strengths[i] * alpha;
    }
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length;
    strengths = new Array(n);
    yz = new Array(n);
    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN(yz[i] = +y(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
  }

  force.initialize = function(_) {
    nodes = _;
    initialize();
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initialize(), force) : strength;
  };

  force.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initialize(), force) : y;
  };

  return force;
});


/***/ }),

/***/ "./node_modules/d3-quadtree/src/add.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-quadtree/src/add.js ***!
  \*********************************************/
/*! exports provided: default, addAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAll", function() { return addAll; });
/* harmony default export */ __webpack_exports__["default"] = (function(d) {
  const x = +this._x.call(null, d),
      y = +this._y.call(null, d);
  return add(this.cover(x, y), x, y, d);
});

function add(tree, x, y, d) {
  if (isNaN(x) || isNaN(y)) return tree; // ignore invalid points

  var parent,
      node = tree._root,
      leaf = {data: d},
      x0 = tree._x0,
      y0 = tree._y0,
      x1 = tree._x1,
      y1 = tree._y1,
      xm,
      ym,
      xp,
      yp,
      right,
      bottom,
      i,
      j;

  // If the tree is empty, initialize the root as a leaf.
  if (!node) return tree._root = leaf, tree;

  // Find the existing leaf for the new point, or add it.
  while (node.length) {
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
    if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
  }

  // Is the new point is exactly coincident with the existing point?
  xp = +tree._x.call(null, node.data);
  yp = +tree._y.call(null, node.data);
  if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;

  // Otherwise, split the leaf node until the old and new point are separated.
  do {
    parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
  } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | (xp >= xm)));
  return parent[j] = node, parent[i] = leaf, tree;
}

function addAll(data) {
  var d, i, n = data.length,
      x,
      y,
      xz = new Array(n),
      yz = new Array(n),
      x0 = Infinity,
      y0 = Infinity,
      x1 = -Infinity,
      y1 = -Infinity;

  // Compute the points and their extent.
  for (i = 0; i < n; ++i) {
    if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;
    xz[i] = x;
    yz[i] = y;
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
  }

  // If there were no (valid) points, abort.
  if (x0 > x1 || y0 > y1) return this;

  // Expand the tree to cover the new points.
  this.cover(x0, y0).cover(x1, y1);

  // Add the new points.
  for (i = 0; i < n; ++i) {
    add(this, xz[i], yz[i], data[i]);
  }

  return this;
}


/***/ }),

/***/ "./node_modules/d3-quadtree/src/cover.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-quadtree/src/cover.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x, y) {
  if (isNaN(x = +x) || isNaN(y = +y)) return this; // ignore invalid points

  var x0 = this._x0,
      y0 = this._y0,
      x1 = this._x1,
      y1 = this._y1;

  // If the quadtree has no extent, initialize them.
  // Integer extent are necessary so that if we later double the extent,
  // the existing quadrant boundaries don’t change due to floating point error!
  if (isNaN(x0)) {
    x1 = (x0 = Math.floor(x)) + 1;
    y1 = (y0 = Math.floor(y)) + 1;
  }

  // Otherwise, double repeatedly to cover.
  else {
    var z = x1 - x0 || 1,
        node = this._root,
        parent,
        i;

    while (x0 > x || x >= x1 || y0 > y || y >= y1) {
      i = (y < y0) << 1 | (x < x0);
      parent = new Array(4), parent[i] = node, node = parent, z *= 2;
      switch (i) {
        case 0: x1 = x0 + z, y1 = y0 + z; break;
        case 1: x0 = x1 - z, y1 = y0 + z; break;
        case 2: x1 = x0 + z, y0 = y1 - z; break;
        case 3: x0 = x1 - z, y0 = y1 - z; break;
      }
    }

    if (this._root && this._root.length) this._root = node;
  }

  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  return this;
});


/***/ }),

/***/ "./node_modules/d3-quadtree/src/data.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-quadtree/src/data.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var data = [];
  this.visit(function(node) {
    if (!node.length) do data.push(node.data); while (node = node.next)
  });
  return data;
});


/***/ }),

/***/ "./node_modules/d3-quadtree/src/extent.js":
/*!************************************************!*\
  !*** ./node_modules/d3-quadtree/src/extent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(_) {
  return arguments.length
      ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1])
      : isNaN(this._x0) ? undefined : [[this._x0, this._y0], [this._x1, this._y1]];
});


/***/ }),

/***/ "./node_modules/d3-quadtree/src/find.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-quadtree/src/find.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _quad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quad.js */ "./node_modules/d3-quadtree/src/quad.js");


/* harmony default export */ __webpack_exports__["default"] = (function(x, y, radius) {
  var data,
      x0 = this._x0,
      y0 = this._y0,
      x1,
      y1,
      x2,
      y2,
      x3 = this._x1,
      y3 = this._y1,
      quads = [],
      node = this._root,
      q,
      i;

  if (node) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](node, x0, y0, x3, y3));
  if (radius == null) radius = Infinity;
  else {
    x0 = x - radius, y0 = y - radius;
    x3 = x + radius, y3 = y + radius;
    radius *= radius;
  }

  while (q = quads.pop()) {

    // Stop searching if this quadrant can’t contain a closer node.
    if (!(node = q.node)
        || (x1 = q.x0) > x3
        || (y1 = q.y0) > y3
        || (x2 = q.x1) < x0
        || (y2 = q.y1) < y0) continue;

    // Bisect the current quadrant.
    if (node.length) {
      var xm = (x1 + x2) / 2,
          ym = (y1 + y2) / 2;

      quads.push(
        new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](node[3], xm, ym, x2, y2),
        new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](node[2], x1, ym, xm, y2),
        new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](node[1], xm, y1, x2, ym),
        new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](node[0], x1, y1, xm, ym)
      );

      // Visit the closest quadrant first.
      if (i = (y >= ym) << 1 | (x >= xm)) {
        q = quads[quads.length - 1];
        quads[quads.length - 1] = quads[quads.length - 1 - i];
        quads[quads.length - 1 - i] = q;
      }
    }

    // Visit this point. (Visiting coincident points isn’t necessary!)
    else {
      var dx = x - +this._x.call(null, node.data),
          dy = y - +this._y.call(null, node.data),
          d2 = dx * dx + dy * dy;
      if (d2 < radius) {
        var d = Math.sqrt(radius = d2);
        x0 = x - d, y0 = y - d;
        x3 = x + d, y3 = y + d;
        data = node.data;
      }
    }
  }

  return data;
});


/***/ }),

/***/ "./node_modules/d3-quadtree/src/index.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-quadtree/src/index.js ***!
  \***********************************************/
/*! exports provided: quadtree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _quadtree_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quadtree.js */ "./node_modules/d3-quadtree/src/quadtree.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quadtree", function() { return _quadtree_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./node_modules/d3-quadtree/src/quad.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-quadtree/src/quad.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(node, x0, y0, x1, y1) {
  this.node = node;
  this.x0 = x0;
  this.y0 = y0;
  this.x1 = x1;
  this.y1 = y1;
});


/***/ }),

/***/ "./node_modules/d3-quadtree/src/quadtree.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-quadtree/src/quadtree.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quadtree; });
/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.js */ "./node_modules/d3-quadtree/src/add.js");
/* harmony import */ var _cover_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cover.js */ "./node_modules/d3-quadtree/src/cover.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.js */ "./node_modules/d3-quadtree/src/data.js");
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extent.js */ "./node_modules/d3-quadtree/src/extent.js");
/* harmony import */ var _find_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./find.js */ "./node_modules/d3-quadtree/src/find.js");
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./remove.js */ "./node_modules/d3-quadtree/src/remove.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./root.js */ "./node_modules/d3-quadtree/src/root.js");
/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./size.js */ "./node_modules/d3-quadtree/src/size.js");
/* harmony import */ var _visit_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./visit.js */ "./node_modules/d3-quadtree/src/visit.js");
/* harmony import */ var _visitAfter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./visitAfter.js */ "./node_modules/d3-quadtree/src/visitAfter.js");
/* harmony import */ var _x_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./x.js */ "./node_modules/d3-quadtree/src/x.js");
/* harmony import */ var _y_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./y.js */ "./node_modules/d3-quadtree/src/y.js");













function quadtree(nodes, x, y) {
  var tree = new Quadtree(x == null ? _x_js__WEBPACK_IMPORTED_MODULE_10__["defaultX"] : x, y == null ? _y_js__WEBPACK_IMPORTED_MODULE_11__["defaultY"] : y, NaN, NaN, NaN, NaN);
  return nodes == null ? tree : tree.addAll(nodes);
}

function Quadtree(x, y, x0, y0, x1, y1) {
  this._x = x;
  this._y = y;
  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  this._root = undefined;
}

function leaf_copy(leaf) {
  var copy = {data: leaf.data}, next = copy;
  while (leaf = leaf.next) next = next.next = {data: leaf.data};
  return copy;
}

var treeProto = quadtree.prototype = Quadtree.prototype;

treeProto.copy = function() {
  var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
      node = this._root,
      nodes,
      child;

  if (!node) return copy;

  if (!node.length) return copy._root = leaf_copy(node), copy;

  nodes = [{source: node, target: copy._root = new Array(4)}];
  while (node = nodes.pop()) {
    for (var i = 0; i < 4; ++i) {
      if (child = node.source[i]) {
        if (child.length) nodes.push({source: child, target: node.target[i] = new Array(4)});
        else node.target[i] = leaf_copy(child);
      }
    }
  }

  return copy;
};

treeProto.add = _add_js__WEBPACK_IMPORTED_MODULE_0__["default"];
treeProto.addAll = _add_js__WEBPACK_IMPORTED_MODULE_0__["addAll"];
treeProto.cover = _cover_js__WEBPACK_IMPORTED_MODULE_1__["default"];
treeProto.data = _data_js__WEBPACK_IMPORTED_MODULE_2__["default"];
treeProto.extent = _extent_js__WEBPACK_IMPORTED_MODULE_3__["default"];
treeProto.find = _find_js__WEBPACK_IMPORTED_MODULE_4__["default"];
treeProto.remove = _remove_js__WEBPACK_IMPORTED_MODULE_5__["default"];
treeProto.removeAll = _remove_js__WEBPACK_IMPORTED_MODULE_5__["removeAll"];
treeProto.root = _root_js__WEBPACK_IMPORTED_MODULE_6__["default"];
treeProto.size = _size_js__WEBPACK_IMPORTED_MODULE_7__["default"];
treeProto.visit = _visit_js__WEBPACK_IMPORTED_MODULE_8__["default"];
treeProto.visitAfter = _visitAfter_js__WEBPACK_IMPORTED_MODULE_9__["default"];
treeProto.x = _x_js__WEBPACK_IMPORTED_MODULE_10__["default"];
treeProto.y = _y_js__WEBPACK_IMPORTED_MODULE_11__["default"];


/***/ }),

/***/ "./node_modules/d3-quadtree/src/remove.js":
/*!************************************************!*\
  !*** ./node_modules/d3-quadtree/src/remove.js ***!
  \************************************************/
/*! exports provided: default, removeAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAll", function() { return removeAll; });
/* harmony default export */ __webpack_exports__["default"] = (function(d) {
  if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this; // ignore invalid points

  var parent,
      node = this._root,
      retainer,
      previous,
      next,
      x0 = this._x0,
      y0 = this._y0,
      x1 = this._x1,
      y1 = this._y1,
      x,
      y,
      xm,
      ym,
      right,
      bottom,
      i,
      j;

  // If the tree is empty, initialize the root as a leaf.
  if (!node) return this;

  // Find the leaf node for the point.
  // While descending, also retain the deepest parent with a non-removed sibling.
  if (node.length) while (true) {
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
    if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
    if (!node.length) break;
    if (parent[(i + 1) & 3] || parent[(i + 2) & 3] || parent[(i + 3) & 3]) retainer = parent, j = i;
  }

  // Find the point to remove.
  while (node.data !== d) if (!(previous = node, node = node.next)) return this;
  if (next = node.next) delete node.next;

  // If there are multiple coincident points, remove just the point.
  if (previous) return (next ? previous.next = next : delete previous.next), this;

  // If this is the root point, remove it.
  if (!parent) return this._root = next, this;

  // Remove this leaf.
  next ? parent[i] = next : delete parent[i];

  // If the parent now contains exactly one leaf, collapse superfluous parents.
  if ((node = parent[0] || parent[1] || parent[2] || parent[3])
      && node === (parent[3] || parent[2] || parent[1] || parent[0])
      && !node.length) {
    if (retainer) retainer[j] = node;
    else this._root = node;
  }

  return this;
});

function removeAll(data) {
  for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
  return this;
}


/***/ }),

/***/ "./node_modules/d3-quadtree/src/root.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-quadtree/src/root.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this._root;
});


/***/ }),

/***/ "./node_modules/d3-quadtree/src/size.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-quadtree/src/size.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var size = 0;
  this.visit(function(node) {
    if (!node.length) do ++size; while (node = node.next)
  });
  return size;
});


/***/ }),

/***/ "./node_modules/d3-quadtree/src/visit.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-quadtree/src/visit.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _quad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quad.js */ "./node_modules/d3-quadtree/src/quad.js");


/* harmony default export */ __webpack_exports__["default"] = (function(callback) {
  var quads = [], q, node = this._root, child, x0, y0, x1, y1;
  if (node) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](node, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
      var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
      if (child = node[3]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, xm, ym, x1, y1));
      if (child = node[2]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, x0, ym, xm, y1));
      if (child = node[1]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, xm, y0, x1, ym));
      if (child = node[0]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, x0, y0, xm, ym));
    }
  }
  return this;
});


/***/ }),

/***/ "./node_modules/d3-quadtree/src/visitAfter.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-quadtree/src/visitAfter.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _quad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quad.js */ "./node_modules/d3-quadtree/src/quad.js");


/* harmony default export */ __webpack_exports__["default"] = (function(callback) {
  var quads = [], next = [], q;
  if (this._root) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](this._root, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    var node = q.node;
    if (node.length) {
      var child, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
      if (child = node[0]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, x0, y0, xm, ym));
      if (child = node[1]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, xm, y0, x1, ym));
      if (child = node[2]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, x0, ym, xm, y1));
      if (child = node[3]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, xm, ym, x1, y1));
    }
    next.push(q);
  }
  while (q = next.pop()) {
    callback(q.node, q.x0, q.y0, q.x1, q.y1);
  }
  return this;
});


/***/ }),

/***/ "./node_modules/d3-quadtree/src/x.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-quadtree/src/x.js ***!
  \*******************************************/
/*! exports provided: defaultX, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultX", function() { return defaultX; });
function defaultX(d) {
  return d[0];
}

/* harmony default export */ __webpack_exports__["default"] = (function(_) {
  return arguments.length ? (this._x = _, this) : this._x;
});


/***/ }),

/***/ "./node_modules/d3-quadtree/src/y.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-quadtree/src/y.js ***!
  \*******************************************/
/*! exports provided: defaultY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultY", function() { return defaultY; });
function defaultY(d) {
  return d[1];
}

/* harmony default export */ __webpack_exports__["default"] = (function(_) {
  return arguments.length ? (this._y = _, this) : this._y;
});


/***/ }),

/***/ "./node_modules/d3-timer/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-timer/src/index.js ***!
  \********************************************/
/*! exports provided: now, timer, timerFlush, timeout, interval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ "./node_modules/d3-timer/src/timer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "now", function() { return _timer_js__WEBPACK_IMPORTED_MODULE_0__["now"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return _timer_js__WEBPACK_IMPORTED_MODULE_0__["timer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timerFlush", function() { return _timer_js__WEBPACK_IMPORTED_MODULE_0__["timerFlush"]; });

/* harmony import */ var _timeout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeout.js */ "./node_modules/d3-timer/src/timeout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return _timeout_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-timer/src/interval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return _interval_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });








/***/ }),

/***/ "./node_modules/d3-timer/src/interval.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-timer/src/interval.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ "./node_modules/d3-timer/src/timer.js");


/* harmony default export */ __webpack_exports__["default"] = (function(callback, delay, time) {
  var t = new _timer_js__WEBPACK_IMPORTED_MODULE_0__["Timer"], total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  t._restart = t.restart;
  t.restart = function(callback, delay, time) {
    delay = +delay, time = time == null ? Object(_timer_js__WEBPACK_IMPORTED_MODULE_0__["now"])() : +time;
    t._restart(function tick(elapsed) {
      elapsed += total;
      t._restart(tick, total += delay, time);
      callback(elapsed);
    }, delay, time);
  }
  t.restart(callback, delay, time);
  return t;
});


/***/ }),

/***/ "./node_modules/d3-timer/src/timeout.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-timer/src/timeout.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ "./node_modules/d3-timer/src/timer.js");


/* harmony default export */ __webpack_exports__["default"] = (function(callback, delay, time) {
  var t = new _timer_js__WEBPACK_IMPORTED_MODULE_0__["Timer"];
  delay = delay == null ? 0 : +delay;
  t.restart(elapsed => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
});


/***/ }),

/***/ "./node_modules/d3-timer/src/timer.js":
/*!********************************************!*\
  !*** ./node_modules/d3-timer/src/timer.js ***!
  \********************************************/
/*! exports provided: now, Timer, timer, timerFlush */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timerFlush", function() { return timerFlush; });
var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}


/***/ }),

/***/ "./src/configs.ts":
/*!************************!*\
  !*** ./src/configs.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description default configurations in NetV
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.label = exports.link = exports.node = exports.lazyUpdateThreshold = exports.linkLimit = exports.nodeLimit = exports.enablePanZoom = exports.backgroundColor = exports.height = exports.width = void 0;
exports.width = 800;
exports.height = 600;
exports.backgroundColor = { r: 1, g: 1, b: 1, a: 1 };
exports.enablePanZoom = true;
exports.nodeLimit = 100;
exports.linkLimit = 1000;
exports.lazyUpdateThreshold = 10;
exports.node = {
    r: 5,
    fill: { r: 0.2, g: 0.6, b: 0.2, a: 0.8 },
    // strokeColor: { r: 0.6, g: 0.6, b: 0.6, a: 0.5 },
    strokeColor: { r: 0.9, g: 0.9, b: 0.9, a: 0.6 },
    strokeWidth: 2,
    showLabel: false,
    // textOffset: { x: 8, y: 0 }, put in label config instead of each node
    clickCallback: (node) => { },
    hoverCallback: (node) => { }
};
exports.link = {
    // strokeColor: { r: 0.5, g: 0.5, b: 0.5, a: 0.2 },
    strokeColor: { r: 0.4, g: 0.6, b: 0.8, a: 0.5 },
    strokeWidth: 2,
    clickCallback: (link) => { },
    hoverCallback: (node) => { }
};
exports.label = {
    offset: { x: 8, y: 0 },
    fontSize: 18,
    strokeWidth: 0.5
};


/***/ }),

/***/ "./src/dataset/index.ts":
/*!******************************!*\
  !*** ./src/dataset/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description build-in dataset in NetV
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.patents = exports.miserables = void 0;
const miserables_1 = __webpack_require__(/*! ./miserables */ "./src/dataset/miserables.ts");
Object.defineProperty(exports, "miserables", { enumerable: true, get: function () { return miserables_1.miserables; } });
const patents_1 = __webpack_require__(/*! ./patents */ "./src/dataset/patents.ts");
Object.defineProperty(exports, "patents", { enumerable: true, get: function () { return patents_1.patents; } });


/***/ }),

/***/ "./src/dataset/miserables.ts":
/*!***********************************!*\
  !*** ./src/dataset/miserables.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description Les Miserables relation dataset.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.miserables = void 0;
/**
 * @description generated by d3-force: https://observablehq.com/@d3/force-directed-graph
 */
exports.miserables = {
    nodes: [
        { id: 'Myriel', x: 293.47145117553623, y: 356.4335718104138, group: 1 },
        { id: 'Napoleon', x: 253.9025088618656, y: 374.3058116536445, group: 1 },
        { id: 'Mlle.Baptistine', x: 350.92724989918077, y: 332.3325539999943, group: 1 },
        { id: 'Mme.Magloire', x: 356.0916156539997, y: 352.7885799116015, group: 1 },
        { id: 'CountessdeLo', x: 254.29291520989335, y: 357.3175734076417, group: 1 },
        { id: 'Geborand', x: 257.857293626201, y: 335.85427628358957, group: 1 },
        { id: 'Champtercier', x: 259.6255563825028, y: 383.83027469832814, group: 1 },
        { id: 'Cravatte', x: 249.8596459829139, y: 346.18225516832496, group: 1 },
        { id: 'Count', x: 269.96793951350924, y: 390.6800842321571, group: 1 },
        { id: 'OldMan', x: 246.73952311277665, y: 364.59357494432066, group: 1 },
        { id: 'Labarre', x: 443.516583315026, y: 358.29204789477683, group: 2 },
        { id: 'Valjean', x: 442.16894757641506, y: 320.8315532160861, group: 2 },
        { id: 'Marguerite', x: 413.3816851007931, y: 240.04091559296504, group: 3 },
        { id: 'Mme.deR', x: 427.2361715950254, y: 355.10211589979514, group: 2 },
        { id: 'Isabeau', x: 405.85082858191834, y: 330.5201512205085, group: 2 },
        { id: 'Gervais', x: 405.2113121906881, y: 316.29125359396136, group: 2 },
        { id: 'Tholomyes', x: 422.4125307781646, y: 126.07649449775806, group: 3 },
        { id: 'Listolier', x: 363.1729422677979, y: 102.77890368289785, group: 3 },
        { id: 'Fameuil', x: 381.7947103094028, y: 66.58133724043948, group: 3 },
        { id: 'Blacheville', x: 383.1792676740261, y: 94.80320315500154, group: 3 },
        { id: 'Favourite', x: 361.893731644285, y: 70.38696381384074, group: 3 },
        { id: 'Dahlia', x: 398.75350988351653, y: 77.09700751527119, group: 3 },
        { id: 'Zephine', x: 349.0495914601376, y: 88.80888613372713, group: 3 },
        { id: 'Fantine', x: 398.01411438702473, y: 173.76444196945977, group: 3 },
        { id: 'Mme.Thenardier', x: 471.2516533386725, y: 262.218701666645, group: 4 },
        { id: 'Thenardier', x: 504.81672085603066, y: 283.04638900481723, group: 4 },
        { id: 'Cosette', x: 472.3346941487192, y: 228.68779443303478, group: 5 },
        { id: 'Javert', x: 460.05257689332836, y: 295.5578154268904, group: 4 },
        { id: 'Fauchelevent', x: 385.43935764589986, y: 302.12824588622857, group: 0 },
        { id: 'Bamatabois', x: 393.19041590383597, y: 345.4971667690817, group: 2 },
        { id: 'Perpetue', x: 367.53833132893976, y: 194.5556482306271, group: 3 },
        { id: 'Simplice', x: 401.3622252354655, y: 242.9982847994576, group: 2 },
        { id: 'Scaufflaire', x: 414.67072799627573, y: 344.0547720945736, group: 2 },
        { id: 'Woman1', x: 421.4167414392426, y: 293.31120219129394, group: 2 },
        { id: 'Judge', x: 420.04392007841335, y: 401.03233609152744, group: 2 },
        { id: 'Champmathieu', x: 377.79524254621833, y: 383.8105787115102, group: 2 },
        { id: 'Brevet', x: 401.9529844469992, y: 388.8684782987411, group: 2 },
        { id: 'Chenildieu', x: 400.6685707133538, y: 413.49417790523466, group: 2 },
        { id: 'Cochepaille', x: 379.04969704462354, y: 404.26974059233163, group: 2 },
        { id: 'Pontmercy', x: 553.1137401750198, y: 244.92830027360765, group: 4 },
        { id: 'Boulatruelle', x: 490.1571086086932, y: 249.2101923835803, group: 6 },
        { id: 'Eponine', x: 549.7584267571892, y: 302.9031065228431, group: 4 },
        { id: 'Anzelma', x: 515.3807399395134, y: 257.0179688983911, group: 4 },
        { id: 'Woman2', x: 433.6608665340514, y: 265.8174673886634, group: 5 },
        { id: 'MotherInnocent', x: 403.02536257416523, y: 289.03312200121326, group: 0 },
        { id: 'Gribier', x: 341.80973227456775, y: 294.212396148023, group: 0 },
        { id: 'Jondrette', x: 565.1965303422186, y: 470.65950349375856, group: 7 },
        { id: 'Mme.Burgon', x: 569.1896269242101, y: 426.66185053824563, group: 7 },
        { id: 'Gavroche', x: 572.1619393936826, y: 364.22606766497563, group: 8 },
        { id: 'Gillenormand', x: 524.5914505208005, y: 257.4012214828336, group: 5 },
        { id: 'Magnon', x: 492.548393202341, y: 222.5966351328885, group: 5 },
        { id: 'Mlle.Gillenormand', x: 514.3692655023644, y: 229.09670062389281, group: 5 },
        { id: 'Mme.Pontmercy', x: 549.3250508171474, y: 196.14056833084936, group: 5 },
        { id: 'Mlle.Vaubois', x: 517.8593572394071, y: 186.2488309111565, group: 5 },
        { id: 'Lt.Gillenormand', x: 543.274961139455, y: 223.68184285180976, group: 5 },
        { id: 'Marius', x: 574.2576699056139, y: 283.85211708310334, group: 8 },
        { id: 'BaronessT', x: 573.7140909650625, y: 245.59311909245818, group: 5 },
        { id: 'Mabeuf', x: 628.5432532486191, y: 314.22078408627164, group: 8 },
        { id: 'Enjolras', x: 588.2395498093626, y: 342.0594469923279, group: 8 },
        { id: 'Combeferre', x: 637.7370664614637, y: 351.69235762788395, group: 8 },
        { id: 'Prouvaire', x: 650.8833522869903, y: 386.83918103509916, group: 8 },
        { id: 'Feuilly', x: 626.8556606438109, y: 365.9084164593141, group: 8 },
        { id: 'Courfeyrac', x: 628.3448989975013, y: 336.7666454119022, group: 8 },
        { id: 'Bahorel', x: 656.7717772764985, y: 362.5885882509189, group: 8 },
        { id: 'Bossuet', x: 599.0185765743107, y: 363.8286723407053, group: 8 },
        { id: 'Joly', x: 656.6182923735408, y: 343.2375733559165, group: 8 },
        { id: 'Grantaire', x: 638.4375855314988, y: 402.4387250378995, group: 8 },
        { id: 'MotherPlutarch', x: 664.556723861883, y: 298.0336964526786, group: 9 },
        { id: 'Gueulemer', x: 508.16450525817805, y: 330.4502907444367, group: 4 },
        { id: 'Babet', x: 492.56005279882095, y: 325.9834092848427, group: 4 },
        { id: 'Claquesous', x: 510.93855506250077, y: 309.2869380697328, group: 4 },
        { id: 'Montparnasse', x: 502.7190894173557, y: 350.9275183133438, group: 4 },
        { id: 'Toussaint', x: 445.1254802056807, y: 266.46242665022004, group: 5 },
        { id: 'Child1', x: 588.0351552386961, y: 410.2195555961996, group: 10 },
        { id: 'Child2', x: 559.2777814782705, y: 408.3533184893569, group: 10 },
        { id: 'Brujon', x: 537.1787383904656, y: 337.86922775917947, group: 4 },
        { id: 'Mme.Hucheloup', x: 626.3775850466164, y: 384.35202066894516, group: 8 }
    ],
    links: [
        { source: 'Napoleon', target: 'Myriel', value: 1 },
        { source: 'Mlle.Baptistine', target: 'Myriel', value: 8 },
        { source: 'Mme.Magloire', target: 'Myriel', value: 10 },
        { source: 'Mme.Magloire', target: 'Mlle.Baptistine', value: 6 },
        { source: 'CountessdeLo', target: 'Myriel', value: 1 },
        { source: 'Geborand', target: 'Myriel', value: 1 },
        { source: 'Champtercier', target: 'Myriel', value: 1 },
        { source: 'Cravatte', target: 'Myriel', value: 1 },
        { source: 'Count', target: 'Myriel', value: 2 },
        { source: 'OldMan', target: 'Myriel', value: 1 },
        { source: 'Valjean', target: 'Labarre', value: 1 },
        { source: 'Valjean', target: 'Mme.Magloire', value: 3 },
        { source: 'Valjean', target: 'Mlle.Baptistine', value: 3 },
        { source: 'Valjean', target: 'Myriel', value: 5 },
        { source: 'Marguerite', target: 'Valjean', value: 1 },
        { source: 'Mme.deR', target: 'Valjean', value: 1 },
        { source: 'Isabeau', target: 'Valjean', value: 1 },
        { source: 'Gervais', target: 'Valjean', value: 1 },
        { source: 'Listolier', target: 'Tholomyes', value: 4 },
        { source: 'Fameuil', target: 'Tholomyes', value: 4 },
        { source: 'Fameuil', target: 'Listolier', value: 4 },
        { source: 'Blacheville', target: 'Tholomyes', value: 4 },
        { source: 'Blacheville', target: 'Listolier', value: 4 },
        { source: 'Blacheville', target: 'Fameuil', value: 4 },
        { source: 'Favourite', target: 'Tholomyes', value: 3 },
        { source: 'Favourite', target: 'Listolier', value: 3 },
        { source: 'Favourite', target: 'Fameuil', value: 3 },
        { source: 'Favourite', target: 'Blacheville', value: 4 },
        { source: 'Dahlia', target: 'Tholomyes', value: 3 },
        { source: 'Dahlia', target: 'Listolier', value: 3 },
        { source: 'Dahlia', target: 'Fameuil', value: 3 },
        { source: 'Dahlia', target: 'Blacheville', value: 3 },
        { source: 'Dahlia', target: 'Favourite', value: 5 },
        { source: 'Zephine', target: 'Tholomyes', value: 3 },
        { source: 'Zephine', target: 'Listolier', value: 3 },
        { source: 'Zephine', target: 'Fameuil', value: 3 },
        { source: 'Zephine', target: 'Blacheville', value: 3 },
        { source: 'Zephine', target: 'Favourite', value: 4 },
        { source: 'Zephine', target: 'Dahlia', value: 4 },
        { source: 'Fantine', target: 'Tholomyes', value: 3 },
        { source: 'Fantine', target: 'Listolier', value: 3 },
        { source: 'Fantine', target: 'Fameuil', value: 3 },
        { source: 'Fantine', target: 'Blacheville', value: 3 },
        { source: 'Fantine', target: 'Favourite', value: 4 },
        { source: 'Fantine', target: 'Dahlia', value: 4 },
        { source: 'Fantine', target: 'Zephine', value: 4 },
        { source: 'Fantine', target: 'Marguerite', value: 2 },
        { source: 'Fantine', target: 'Valjean', value: 9 },
        { source: 'Mme.Thenardier', target: 'Fantine', value: 2 },
        { source: 'Mme.Thenardier', target: 'Valjean', value: 7 },
        { source: 'Thenardier', target: 'Mme.Thenardier', value: 13 },
        { source: 'Thenardier', target: 'Fantine', value: 1 },
        { source: 'Thenardier', target: 'Valjean', value: 12 },
        { source: 'Cosette', target: 'Mme.Thenardier', value: 4 },
        { source: 'Cosette', target: 'Valjean', value: 31 },
        { source: 'Cosette', target: 'Tholomyes', value: 1 },
        { source: 'Cosette', target: 'Thenardier', value: 1 },
        { source: 'Javert', target: 'Valjean', value: 17 },
        { source: 'Javert', target: 'Fantine', value: 5 },
        { source: 'Javert', target: 'Thenardier', value: 5 },
        { source: 'Javert', target: 'Mme.Thenardier', value: 1 },
        { source: 'Javert', target: 'Cosette', value: 1 },
        { source: 'Fauchelevent', target: 'Valjean', value: 8 },
        { source: 'Fauchelevent', target: 'Javert', value: 1 },
        { source: 'Bamatabois', target: 'Fantine', value: 1 },
        { source: 'Bamatabois', target: 'Javert', value: 1 },
        { source: 'Bamatabois', target: 'Valjean', value: 2 },
        { source: 'Perpetue', target: 'Fantine', value: 1 },
        { source: 'Simplice', target: 'Perpetue', value: 2 },
        { source: 'Simplice', target: 'Valjean', value: 3 },
        { source: 'Simplice', target: 'Fantine', value: 2 },
        { source: 'Simplice', target: 'Javert', value: 1 },
        { source: 'Scaufflaire', target: 'Valjean', value: 1 },
        { source: 'Woman1', target: 'Valjean', value: 2 },
        { source: 'Woman1', target: 'Javert', value: 1 },
        { source: 'Judge', target: 'Valjean', value: 3 },
        { source: 'Judge', target: 'Bamatabois', value: 2 },
        { source: 'Champmathieu', target: 'Valjean', value: 3 },
        { source: 'Champmathieu', target: 'Judge', value: 3 },
        { source: 'Champmathieu', target: 'Bamatabois', value: 2 },
        { source: 'Brevet', target: 'Judge', value: 2 },
        { source: 'Brevet', target: 'Champmathieu', value: 2 },
        { source: 'Brevet', target: 'Valjean', value: 2 },
        { source: 'Brevet', target: 'Bamatabois', value: 1 },
        { source: 'Chenildieu', target: 'Judge', value: 2 },
        { source: 'Chenildieu', target: 'Champmathieu', value: 2 },
        { source: 'Chenildieu', target: 'Brevet', value: 2 },
        { source: 'Chenildieu', target: 'Valjean', value: 2 },
        { source: 'Chenildieu', target: 'Bamatabois', value: 1 },
        { source: 'Cochepaille', target: 'Judge', value: 2 },
        { source: 'Cochepaille', target: 'Champmathieu', value: 2 },
        { source: 'Cochepaille', target: 'Brevet', value: 2 },
        { source: 'Cochepaille', target: 'Chenildieu', value: 2 },
        { source: 'Cochepaille', target: 'Valjean', value: 2 },
        { source: 'Cochepaille', target: 'Bamatabois', value: 1 },
        { source: 'Pontmercy', target: 'Thenardier', value: 1 },
        { source: 'Boulatruelle', target: 'Thenardier', value: 1 },
        { source: 'Eponine', target: 'Mme.Thenardier', value: 2 },
        { source: 'Eponine', target: 'Thenardier', value: 3 },
        { source: 'Anzelma', target: 'Eponine', value: 2 },
        { source: 'Anzelma', target: 'Thenardier', value: 2 },
        { source: 'Anzelma', target: 'Mme.Thenardier', value: 1 },
        { source: 'Woman2', target: 'Valjean', value: 3 },
        { source: 'Woman2', target: 'Cosette', value: 1 },
        { source: 'Woman2', target: 'Javert', value: 1 },
        { source: 'MotherInnocent', target: 'Fauchelevent', value: 3 },
        { source: 'MotherInnocent', target: 'Valjean', value: 1 },
        { source: 'Gribier', target: 'Fauchelevent', value: 2 },
        { source: 'Mme.Burgon', target: 'Jondrette', value: 1 },
        { source: 'Gavroche', target: 'Mme.Burgon', value: 2 },
        { source: 'Gavroche', target: 'Thenardier', value: 1 },
        { source: 'Gavroche', target: 'Javert', value: 1 },
        { source: 'Gavroche', target: 'Valjean', value: 1 },
        { source: 'Gillenormand', target: 'Cosette', value: 3 },
        { source: 'Gillenormand', target: 'Valjean', value: 2 },
        { source: 'Magnon', target: 'Gillenormand', value: 1 },
        { source: 'Magnon', target: 'Mme.Thenardier', value: 1 },
        { source: 'Mlle.Gillenormand', target: 'Gillenormand', value: 9 },
        { source: 'Mlle.Gillenormand', target: 'Cosette', value: 2 },
        { source: 'Mlle.Gillenormand', target: 'Valjean', value: 2 },
        { source: 'Mme.Pontmercy', target: 'Mlle.Gillenormand', value: 1 },
        { source: 'Mme.Pontmercy', target: 'Pontmercy', value: 1 },
        { source: 'Mlle.Vaubois', target: 'Mlle.Gillenormand', value: 1 },
        { source: 'Lt.Gillenormand', target: 'Mlle.Gillenormand', value: 2 },
        { source: 'Lt.Gillenormand', target: 'Gillenormand', value: 1 },
        { source: 'Lt.Gillenormand', target: 'Cosette', value: 1 },
        { source: 'Marius', target: 'Mlle.Gillenormand', value: 6 },
        { source: 'Marius', target: 'Gillenormand', value: 12 },
        { source: 'Marius', target: 'Pontmercy', value: 1 },
        { source: 'Marius', target: 'Lt.Gillenormand', value: 1 },
        { source: 'Marius', target: 'Cosette', value: 21 },
        { source: 'Marius', target: 'Valjean', value: 19 },
        { source: 'Marius', target: 'Tholomyes', value: 1 },
        { source: 'Marius', target: 'Thenardier', value: 2 },
        { source: 'Marius', target: 'Eponine', value: 5 },
        { source: 'Marius', target: 'Gavroche', value: 4 },
        { source: 'BaronessT', target: 'Gillenormand', value: 1 },
        { source: 'BaronessT', target: 'Marius', value: 1 },
        { source: 'Mabeuf', target: 'Marius', value: 1 },
        { source: 'Mabeuf', target: 'Eponine', value: 1 },
        { source: 'Mabeuf', target: 'Gavroche', value: 1 },
        { source: 'Enjolras', target: 'Marius', value: 7 },
        { source: 'Enjolras', target: 'Gavroche', value: 7 },
        { source: 'Enjolras', target: 'Javert', value: 6 },
        { source: 'Enjolras', target: 'Mabeuf', value: 1 },
        { source: 'Enjolras', target: 'Valjean', value: 4 },
        { source: 'Combeferre', target: 'Enjolras', value: 15 },
        { source: 'Combeferre', target: 'Marius', value: 5 },
        { source: 'Combeferre', target: 'Gavroche', value: 6 },
        { source: 'Combeferre', target: 'Mabeuf', value: 2 },
        { source: 'Prouvaire', target: 'Gavroche', value: 1 },
        { source: 'Prouvaire', target: 'Enjolras', value: 4 },
        { source: 'Prouvaire', target: 'Combeferre', value: 2 },
        { source: 'Feuilly', target: 'Gavroche', value: 2 },
        { source: 'Feuilly', target: 'Enjolras', value: 6 },
        { source: 'Feuilly', target: 'Prouvaire', value: 2 },
        { source: 'Feuilly', target: 'Combeferre', value: 5 },
        { source: 'Feuilly', target: 'Mabeuf', value: 1 },
        { source: 'Feuilly', target: 'Marius', value: 1 },
        { source: 'Courfeyrac', target: 'Marius', value: 9 },
        { source: 'Courfeyrac', target: 'Enjolras', value: 17 },
        { source: 'Courfeyrac', target: 'Combeferre', value: 13 },
        { source: 'Courfeyrac', target: 'Gavroche', value: 7 },
        { source: 'Courfeyrac', target: 'Mabeuf', value: 2 },
        { source: 'Courfeyrac', target: 'Eponine', value: 1 },
        { source: 'Courfeyrac', target: 'Feuilly', value: 6 },
        { source: 'Courfeyrac', target: 'Prouvaire', value: 3 },
        { source: 'Bahorel', target: 'Combeferre', value: 5 },
        { source: 'Bahorel', target: 'Gavroche', value: 5 },
        { source: 'Bahorel', target: 'Courfeyrac', value: 6 },
        { source: 'Bahorel', target: 'Mabeuf', value: 2 },
        { source: 'Bahorel', target: 'Enjolras', value: 4 },
        { source: 'Bahorel', target: 'Feuilly', value: 3 },
        { source: 'Bahorel', target: 'Prouvaire', value: 2 },
        { source: 'Bahorel', target: 'Marius', value: 1 },
        { source: 'Bossuet', target: 'Marius', value: 5 },
        { source: 'Bossuet', target: 'Courfeyrac', value: 12 },
        { source: 'Bossuet', target: 'Gavroche', value: 5 },
        { source: 'Bossuet', target: 'Bahorel', value: 4 },
        { source: 'Bossuet', target: 'Enjolras', value: 10 },
        { source: 'Bossuet', target: 'Feuilly', value: 6 },
        { source: 'Bossuet', target: 'Prouvaire', value: 2 },
        { source: 'Bossuet', target: 'Combeferre', value: 9 },
        { source: 'Bossuet', target: 'Mabeuf', value: 1 },
        { source: 'Bossuet', target: 'Valjean', value: 1 },
        { source: 'Joly', target: 'Bahorel', value: 5 },
        { source: 'Joly', target: 'Bossuet', value: 7 },
        { source: 'Joly', target: 'Gavroche', value: 3 },
        { source: 'Joly', target: 'Courfeyrac', value: 5 },
        { source: 'Joly', target: 'Enjolras', value: 5 },
        { source: 'Joly', target: 'Feuilly', value: 5 },
        { source: 'Joly', target: 'Prouvaire', value: 2 },
        { source: 'Joly', target: 'Combeferre', value: 5 },
        { source: 'Joly', target: 'Mabeuf', value: 1 },
        { source: 'Joly', target: 'Marius', value: 2 },
        { source: 'Grantaire', target: 'Bossuet', value: 3 },
        { source: 'Grantaire', target: 'Enjolras', value: 3 },
        { source: 'Grantaire', target: 'Combeferre', value: 1 },
        { source: 'Grantaire', target: 'Courfeyrac', value: 2 },
        { source: 'Grantaire', target: 'Joly', value: 2 },
        { source: 'Grantaire', target: 'Gavroche', value: 1 },
        { source: 'Grantaire', target: 'Bahorel', value: 1 },
        { source: 'Grantaire', target: 'Feuilly', value: 1 },
        { source: 'Grantaire', target: 'Prouvaire', value: 1 },
        { source: 'MotherPlutarch', target: 'Mabeuf', value: 3 },
        { source: 'Gueulemer', target: 'Thenardier', value: 5 },
        { source: 'Gueulemer', target: 'Valjean', value: 1 },
        { source: 'Gueulemer', target: 'Mme.Thenardier', value: 1 },
        { source: 'Gueulemer', target: 'Javert', value: 1 },
        { source: 'Gueulemer', target: 'Gavroche', value: 1 },
        { source: 'Gueulemer', target: 'Eponine', value: 1 },
        { source: 'Babet', target: 'Thenardier', value: 6 },
        { source: 'Babet', target: 'Gueulemer', value: 6 },
        { source: 'Babet', target: 'Valjean', value: 1 },
        { source: 'Babet', target: 'Mme.Thenardier', value: 1 },
        { source: 'Babet', target: 'Javert', value: 2 },
        { source: 'Babet', target: 'Gavroche', value: 1 },
        { source: 'Babet', target: 'Eponine', value: 1 },
        { source: 'Claquesous', target: 'Thenardier', value: 4 },
        { source: 'Claquesous', target: 'Babet', value: 4 },
        { source: 'Claquesous', target: 'Gueulemer', value: 4 },
        { source: 'Claquesous', target: 'Valjean', value: 1 },
        { source: 'Claquesous', target: 'Mme.Thenardier', value: 1 },
        { source: 'Claquesous', target: 'Javert', value: 1 },
        { source: 'Claquesous', target: 'Eponine', value: 1 },
        { source: 'Claquesous', target: 'Enjolras', value: 1 },
        { source: 'Montparnasse', target: 'Javert', value: 1 },
        { source: 'Montparnasse', target: 'Babet', value: 2 },
        { source: 'Montparnasse', target: 'Gueulemer', value: 2 },
        { source: 'Montparnasse', target: 'Claquesous', value: 2 },
        { source: 'Montparnasse', target: 'Valjean', value: 1 },
        { source: 'Montparnasse', target: 'Gavroche', value: 1 },
        { source: 'Montparnasse', target: 'Eponine', value: 1 },
        { source: 'Montparnasse', target: 'Thenardier', value: 1 },
        { source: 'Toussaint', target: 'Cosette', value: 2 },
        { source: 'Toussaint', target: 'Javert', value: 1 },
        { source: 'Toussaint', target: 'Valjean', value: 1 },
        { source: 'Child1', target: 'Gavroche', value: 2 },
        { source: 'Child2', target: 'Gavroche', value: 2 },
        { source: 'Child2', target: 'Child1', value: 3 },
        { source: 'Brujon', target: 'Babet', value: 3 },
        { source: 'Brujon', target: 'Gueulemer', value: 3 },
        { source: 'Brujon', target: 'Thenardier', value: 3 },
        { source: 'Brujon', target: 'Gavroche', value: 1 },
        { source: 'Brujon', target: 'Eponine', value: 1 },
        { source: 'Brujon', target: 'Claquesous', value: 1 },
        { source: 'Brujon', target: 'Montparnasse', value: 1 },
        { source: 'Mme.Hucheloup', target: 'Bossuet', value: 1 },
        { source: 'Mme.Hucheloup', target: 'Joly', value: 1 },
        { source: 'Mme.Hucheloup', target: 'Grantaire', value: 1 },
        { source: 'Mme.Hucheloup', target: 'Bahorel', value: 1 },
        { source: 'Mme.Hucheloup', target: 'Courfeyrac', value: 1 },
        { source: 'Mme.Hucheloup', target: 'Gavroche', value: 1 },
        { source: 'Mme.Hucheloup', target: 'Enjolras', value: 1 }
    ]
};


/***/ }),

/***/ "./src/dataset/patents.ts":
/*!********************************!*\
  !*** ./src/dataset/patents.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description Patents dataset, from https://www.patentsview.org/web/#viz/relationships
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.patents = void 0;
exports.patents = {
    nodes: [
        {
            type: 'patent',
            id: '6516227',
            name: 'Rechargeable spinal cord stimulator system',
            numCitations: 1363,
            x: -146.50722772206416,
            y: 237.7898848864182
        },
        {
            type: 'patent',
            id: '6535909',
            name: 'System and method for record and playback of collaborative Web browsing session',
            numCitations: 1438,
            x: 301.0880840740178,
            y: 78.3544919158754
        },
        {
            type: 'patent',
            id: '6549908',
            name: 'Methods and apparatus for interpreting user selections in the context of a relation distributed as a set of orthogonalized sub-relations',
            numCitations: 1268,
            x: -13.814856590741202,
            y: -183.5501679350274
        },
        {
            type: 'patent',
            id: '6553563',
            name: 'Development tool, method, and system for client server applications',
            numCitations: 1351,
            x: -0.5224312790142777,
            y: -247.1495779627279
        },
        {
            type: 'patent',
            id: '6558320',
            name: 'Handheld personal data assistant (PDA) with a medical device and method of using the same',
            numCitations: 1514,
            x: -204.64071894654788,
            y: 71.57055284512312
        },
        {
            type: 'patent',
            id: '6558351',
            name: 'Closed loop system for controlling insulin infusion',
            numCitations: 1369,
            x: -212.97816000219387,
            y: 14.71564053417009
        },
        {
            type: 'patent',
            id: '6560461',
            name: 'Authorized location reporting paging system',
            numCitations: 1479,
            x: -250.43543062905093,
            y: -191.43720062406038
        },
        {
            type: 'patent',
            id: '6563174',
            name: 'Thin film transistor and matrix display device',
            numCitations: 3284,
            x: -12.588249503652401,
            y: -3.606638925074952
        },
        {
            type: 'patent',
            id: '6565509',
            name: 'Analyte monitoring device and methods of use',
            numCitations: 1333,
            x: -105.25511612362045,
            y: 157.11713360602621
        },
        {
            type: 'patent',
            id: '6571282',
            name: 'Block-based communication in a communication services patterns environment',
            numCitations: 1467,
            x: 139.669746748281,
            y: 253.01406501471942
        },
        {
            type: 'patent',
            id: '6574635',
            name: 'Application instantiation based upon attributes and values stored in a meta data repository, including tiering of application layers objects and components',
            numCitations: 1368,
            x: 11.002027627782116,
            y: -234.9180529832358
        },
        {
            type: 'patent',
            id: '6577726',
            name: 'Computer telephony integration hotelling method and system',
            numCitations: 1270,
            x: -87.19153245841262,
            y: -173.97644755929284
        },
        {
            type: 'patent',
            id: '6587835',
            name: 'Shopping assistance with handheld computing device',
            numCitations: 1471,
            x: -279.2865813378465,
            y: 110.1587912501507
        },
        {
            type: 'patent',
            id: '6601087',
            name: 'Instant document sharing',
            numCitations: 1397,
            x: 210.94821350137184,
            y: 92.53188786911404
        },
        {
            type: 'patent',
            id: '6602252',
            name: 'Combined dissecting, cauterizing, and stapling device',
            numCitations: 1503,
            x: 147.94977165043258,
            y: 170.08888855631307
        },
        {
            type: 'patent',
            id: '6604117',
            name: 'Method of maintaining a network of partially replicated database system',
            numCitations: 1261,
            x: -0.888555802742035,
            y: -218.23048820307227
        },
        {
            type: 'patent',
            id: '6604128',
            name: 'Method and system for distributing objects over a network',
            numCitations: 1261,
            x: -56.73872742120841,
            y: -243.3483841066443
        },
        {
            type: 'patent',
            id: '6606744',
            name: 'Providing collaborative installation management in a network-based supply chain environment',
            numCitations: 1271,
            x: 153.9948251850397,
            y: 231.46579888120272
        },
        {
            type: 'patent',
            id: '6609150',
            name: 'Web client-server system and method for incompatible page markup and presentation languages',
            numCitations: 1336,
            x: 13.182867607321255,
            y: -184.8342643188157
        },
        {
            type: 'patent',
            id: '6621834',
            name: 'System and method for voice transmission over network protocols',
            numCitations: 1265,
            x: 85.08228149344369,
            y: 105.43464571232896
        },
        {
            type: 'patent',
            id: '6641533',
            name: 'Handheld personal data assistant (PDA) with a medical device and method of using the same',
            numCitations: 1431,
            x: -218.09766118001224,
            y: 39.85760035797989
        },
        {
            type: 'patent',
            id: '6644532',
            name: 'Surgical stapling apparatus',
            numCitations: 1267,
            x: 304.6630925316294,
            y: -29.709611573491397
        },
        {
            type: 'patent',
            id: '6654032',
            name: 'Instant sharing of documents on a remote server',
            numCitations: 1413,
            x: 159.30050355296015,
            y: 108.98389585627005
        },
        {
            type: 'patent',
            id: '6656193',
            name: 'Device for attachment of buttress material to a surgical fastening device',
            numCitations: 1279,
            x: 116.90914153158597,
            y: -78.76626936858557
        },
        {
            type: 'patent',
            id: '6665648',
            name: 'State models for monitoring process',
            numCitations: 1288,
            x: -19.75185273935374,
            y: -126.65338912269928
        },
        {
            type: 'patent',
            id: '6665655',
            name: 'Implicit rating of retrieved information in an information search system',
            numCitations: 1294,
            x: -205.5103612199467,
            y: -62.615175772923976
        },
        {
            type: 'patent',
            id: '6684438',
            name: 'Method of using cache to determine the visibility to a remote database client of a plurality of database transactions',
            numCitations: 1265,
            x: -70.89621190805329,
            y: -211.65898126469475
        },
        {
            type: 'patent',
            id: '6690387',
            name: 'Touch-screen image scrolling system and method',
            numCitations: 1361,
            x: -96.0833335861014,
            y: 257.188666044209
        },
        {
            type: 'patent',
            id: '6693232',
            name: 'Inbred corn line LH295',
            numCitations: 1585,
            x: 225.21362396634333,
            y: -181.7023120873901
        },
        {
            type: 'patent',
            id: '6698643',
            name: 'Expanding parallel jaw device for use with an electromechanical driver device',
            numCitations: 1355,
            x: 116.93380088200308,
            y: 220.21419705439607
        },
        {
            type: 'patent',
            id: '6711565',
            name: 'Method, apparatus, and system for previewing search results',
            numCitations: 1388,
            x: -37.50448129076735,
            y: -273.41169584791356
        },
        {
            type: 'patent',
            id: '6716233',
            name: 'Electromechanical driver and remote surgical instrument attachment having computer assisted control capabilities',
            numCitations: 1244,
            x: 99.98744927740107,
            y: 212.59527229962606
        },
        {
            type: 'patent',
            id: '6718361',
            name: 'Method and apparatus for reliable and scalable distribution of data files in distributed networks',
            numCitations: 1349,
            x: -214.4706454200155,
            y: 179.76445383311545
        },
        {
            type: 'patent',
            id: '6724399',
            name: 'Methods and apparatus for enabling keyboard accelerators in applications implemented via a browser',
            numCitations: 1271,
            x: -3.865437098036597,
            y: -168.04665075977616
        },
        {
            type: 'patent',
            id: '6727522',
            name: 'Transistor and semiconductor device',
            numCitations: 3301,
            x: 45.493009086533476,
            y: -18.399336761865555
        },
        {
            type: 'patent',
            id: '6728702',
            name: 'System and method to implement an integrated search center supporting a full-text search and query on a database',
            numCitations: 1290,
            x: -50.77651269647964,
            y: -265.6439416642619
        },
        {
            type: 'patent',
            id: '6728960',
            name: 'Techniques for managing multiple threads in a browser environment',
            numCitations: 1287,
            x: -31.86098260027274,
            y: -177.09627925166075
        },
        {
            type: 'patent',
            id: '6732095',
            name: 'Method and apparatus for mapping between XML and relational representations',
            numCitations: 1318,
            x: -45.17430826877544,
            y: -152.23938355298804
        },
        {
            type: 'patent',
            id: '6732100',
            name: 'Database access method and system for user role defined access',
            numCitations: 1347,
            x: -59.210136806292674,
            y: -174.83877990849572
        },
        {
            type: 'patent',
            id: '6732111',
            name: 'Method, apparatus, system, and program product for attaching files and other objects to a partially replicated database',
            numCitations: 1294,
            x: -90.7397050479451,
            y: -244.71990328774314
        },
        {
            type: 'patent',
            id: '6754681',
            name: 'Partially replicated distributed database with multiple levels of remote clients',
            numCitations: 1269,
            x: -79.58083870312655,
            y: -228.1724054173842
        },
        {
            type: 'patent',
            id: '6763351',
            name: 'Method, apparatus, and system for attaching search results',
            numCitations: 1487,
            x: -25.243474733492743,
            y: -263.25740794021067
        },
        {
            type: 'patent',
            id: '6763501',
            name: 'Remote document serving',
            numCitations: 1319,
            x: 158.3253837620942,
            y: 93.49546231516919
        },
        {
            type: 'patent',
            id: '6768904',
            name: 'Data communication method using mobile terminal',
            numCitations: 1256,
            x: -307.97606158133414,
            y: 18.769756679797396
        },
        {
            type: 'patent',
            id: '6782383',
            name: 'System and method to implement a persistent and dismissible search center frame',
            numCitations: 1282,
            x: -12.976177557835852,
            y: -272.9194404073791
        },
        {
            type: 'patent',
            id: '6783524',
            name: 'Robotic surgical tool with ultrasound cauterizing and cutting instrument',
            numCitations: 1505,
            x: 43.38231098694066,
            y: 279.08217801147714
        },
        {
            type: 'patent',
            id: '6786382',
            name: 'Surgical stapling instrument incorporating an articulation joint for a firing bar track',
            numCitations: 1371,
            x: 134.94078164502835,
            y: -65.10082373566381
        },
        {
            type: 'patent',
            id: '6804330',
            name: 'Method and system for accessing CRM data via voice',
            numCitations: 1348,
            x: 41.445251723842865,
            y: -236.9915648109865
        },
        {
            type: 'patent',
            id: '6809653',
            name: 'Telemetered characteristic monitor system and method of using the same',
            numCitations: 1250,
            x: -192.3665947756808,
            y: 85.20039713859154
        },
        {
            type: 'patent',
            id: '6826565',
            name: 'Method and apparatus for serving files to browsing clients',
            numCitations: 1253,
            x: -187.202078612142,
            y: -205.8028067140975
        },
        {
            type: 'patent',
            id: '6826582',
            name: 'Method and system for using file systems for content management',
            numCitations: 1262,
            x: -173.39071713434592,
            y: -84.74810645391052
        },
        {
            type: 'patent',
            id: '6826745',
            name: 'System and method for smart scripting call centers and configuration thereof',
            numCitations: 1290,
            x: -76.78126433121005,
            y: -189.22148175125054
        },
        {
            type: 'patent',
            id: '6829655',
            name: 'Method and system for server synchronization with a computing device via a companion device',
            numCitations: 1292,
            x: 54.15067210701869,
            y: -193.55954311545358
        },
        {
            type: 'patent',
            id: '6830174',
            name: 'Medical instrument',
            numCitations: 1345,
            x: 241.6836563040002,
            y: 178.8101554942473
        },
        {
            type: 'patent',
            id: '6842748',
            name: 'Usage based strength between related information in an information retrieval system',
            numCitations: 1273,
            x: -255.7671401763918,
            y: -89.30941490160309
        },
        {
            type: 'patent',
            id: '6843403',
            name: 'Surgical clamping, cutting and stapling device',
            numCitations: 1278,
            x: 80.62267888317515,
            y: 204.67249292957572
        },
        {
            type: 'patent',
            id: '6850252',
            name: 'Intelligent electronic appliance system and method',
            numCitations: 1784,
            x: -269.0939625716982,
            y: 80.79152540917103
        },
        {
            type: 'patent',
            id: '6850895',
            name: 'Assignment manager',
            numCitations: 1429,
            x: -104.71523172899978,
            y: -237.67489051495383
        },
        {
            type: 'patent',
            id: '6850949',
            name: 'System and method for generating a dynamic interface via a communications network',
            numCitations: 1276,
            x: 170.8948478666423,
            y: -157.1623996387279
        },
        {
            type: 'patent',
            id: '6852915',
            name: 'Inbred corn line LH283BtMON810',
            numCitations: 1584,
            x: 214.2878252666797,
            y: -221.65064590625735
        },
        {
            type: 'patent',
            id: '6905057',
            name: 'Surgical stapling instrument incorporating a firing mechanism having a linked rack transmission',
            numCitations: 1398,
            x: 204.244314091743,
            y: -78.10023672232607
        },
        {
            type: 'patent',
            id: '6959852',
            name: 'Surgical stapling instrument with multistroke firing incorporating an anti-backup mechanism',
            numCitations: 1279,
            x: 214.47741140236582,
            y: -56.291587636591125
        },
        {
            type: 'patent',
            id: '6964363',
            name: 'Surgical stapling instrument having articulation joint support plates for supporting a firing bar',
            numCitations: 1330,
            x: 171.89247270898028,
            y: -97.41002462550293
        },
        {
            type: 'patent',
            id: '6978921',
            name: 'Surgical stapling instrument incorporating an E-beam firing mechanism',
            numCitations: 1271,
            x: 220.9998003804044,
            y: -71.42078135636545
        },
        {
            type: 'patent',
            id: '6981628',
            name: 'Surgical instrument with a lateral-moving articulation control',
            numCitations: 1588,
            x: 155.12209667738722,
            y: -93.69628751460294
        },
        {
            type: 'patent',
            id: '7000818',
            name: 'Surgical stapling instrument having separate distinct closing and firing systems',
            numCitations: 1422,
            x: 227.01768845379692,
            y: 7.024056611463051
        },
        {
            type: 'patent',
            id: '7025743',
            name: 'External infusion device with remote programming, bolus estimator and/or vibration alarm capabilities',
            numCitations: 1348,
            x: -139.33487275744275,
            y: 46.52061115334398
        },
        {
            type: 'patent',
            id: '7049190',
            name: 'Method for forming ZnO film, method for forming ZnO semiconductor layer, method for fabricating semiconductor device, and semiconductor device',
            numCitations: 3234,
            x: -289.10918833611,
            y: -97.96776938549537
        },
        {
            type: 'patent',
            id: '7055731',
            name: 'Surgical stapling instrument incorporating a tapered firing bar for increased flexibility around the articulation joint',
            numCitations: 1325,
            x: 230.49518386439988,
            y: -59.64224567858248
        },
        {
            type: 'patent',
            id: '7061014',
            name: 'Natural-superlattice homologous single crystal thin film, method for preparation thereof, and device using said single crystal thin film',
            numCitations: 3339,
            x: -5.800882044901439,
            y: 68.52641595031525
        },
        {
            type: 'patent',
            id: '7064346',
            name: 'Transistor and semiconductor device',
            numCitations: 3268,
            x: -3.4003031519913716,
            y: 25.981356836043688
        },
        {
            type: 'patent',
            id: '7105868',
            name: 'High-electron mobility transistor with zinc oxide',
            numCitations: 3233,
            x: -17.835785749785817,
            y: 199.91883720210305
        },
        {
            type: 'patent',
            id: '7111769',
            name: 'Surgical instrument incorporating an articulation mechanism having rotation about the longitudinal axis',
            numCitations: 1278,
            x: 151.22579832524045,
            y: -37.17099074749013
        },
        {
            type: 'patent',
            id: '7147138',
            name: 'Surgical stapling instrument having an electroactive polymer actuated buttress deployment mechanism',
            numCitations: 1428,
            x: 189.086143238575,
            y: -73.69130392683924
        },
        {
            type: 'patent',
            id: '7159750',
            name: 'Surgical stapling device',
            numCitations: 1258,
            x: -41.29995186519443,
            y: 292.8462674537822
        },
        {
            type: 'patent',
            id: '7211825',
            name: 'Indium oxide-based thin film transistors and circuits',
            numCitations: 3245,
            x: -312.3839057221477,
            y: -5.614541567133007
        },
        {
            type: 'patent',
            id: '7246734',
            name: 'Rotary hydraulic pump actuated multi-stroke surgical instrument',
            numCitations: 1288,
            x: 200.44563380086515,
            y: -63.18865588076886
        },
        {
            type: 'patent',
            id: '7282782',
            name: 'Combined binary oxide semiconductor device',
            numCitations: 3273,
            x: -125.8309041477986,
            y: -31.277877893580488
        },
        {
            type: 'patent',
            id: '7297977',
            name: 'Semiconductor device',
            numCitations: 3318,
            x: -128.28288629696726,
            y: -55.26147557803329
        },
        {
            type: 'patent',
            id: '7323356',
            name: 'LnCuO(S,Se,Te)monocrystalline thin film, its manufacturing method, and optical device or electronic device using the monocrystalline thin film',
            numCitations: 3251,
            x: -18.59755305395574,
            y: 88.95531610838968
        },
        {
            type: 'patent',
            id: '7340411',
            name: 'System and method for generating, capturing, and managing customer lead information over a computer network',
            numCitations: 1282,
            x: 171.1408315591698,
            y: -202.24883708044808
        },
        {
            type: 'patent',
            id: '7380695',
            name: 'Surgical stapling instrument having a single lockout mechanism for prevention of firing',
            numCitations: 1386,
            x: 186.25833530110194,
            y: -21.66321873245209
        },
        {
            type: 'patent',
            id: '7380696',
            name: 'Articulating surgical stapling instrument incorporating a two-piece E-beam firing mechanism',
            numCitations: 1388,
            x: 207.9029593903179,
            y: -8.531533737621885
        },
        {
            type: 'patent',
            id: '7385224',
            name: 'Thin film transistor having an etching protection film and manufacturing method thereof',
            numCitations: 3224,
            x: -209.82230482555335,
            y: -138.5100409900293
        },
        {
            type: 'patent',
            id: '7402506',
            name: 'Methods of making thin film transistors comprising zinc-oxide-based semiconductor materials and transistors made thereby',
            numCitations: 3258,
            x: 205.02475667447774,
            y: 185.67878066443038
        },
        {
            type: 'patent',
            id: '7404508',
            name: 'Surgical stapling and cutting device',
            numCitations: 1517,
            x: 142.8534886173237,
            y: 1.3325885281748553
        },
        {
            type: 'patent',
            id: '7411209',
            name: 'Field-effect transistor and method for manufacturing the same',
            numCitations: 3255,
            x: 98.46207221183528,
            y: 123.03084775370279
        },
        {
            type: 'patent',
            id: '7453065',
            name: 'Sensor and image pickup device',
            numCitations: 3230,
            x: -0.16573743942671854,
            y: 141.28922935299022
        },
        {
            type: 'patent',
            id: '7453087',
            name: 'Thin-film transistor and thin-film diode having amorphous-oxide semiconductor layer',
            numCitations: 3242,
            x: 64.92619908272222,
            y: 181.84593665090443
        },
        {
            type: 'patent',
            id: '7462862',
            name: 'Transistor using an isovalent semiconductor oxide as the active channel layer',
            numCitations: 3244,
            x: -69.61679142848251,
            y: -17.951431766711924
        },
        {
            type: 'patent',
            id: '7464846',
            name: 'Surgical instrument having a removable battery',
            numCitations: 1287,
            x: 181.84194955991686,
            y: -6.130356644541759
        },
        {
            type: 'patent',
            id: '7468304',
            name: 'Method of fabricating oxide semiconductor device',
            numCitations: 3240,
            x: 43.14447422876499,
            y: 84.30857449883901
        },
        {
            type: 'patent',
            id: '7501293',
            name: 'Semiconductor device in which zinc oxide is used as a semiconductor material and method for manufacturing the semiconductor device',
            numCitations: 3216,
            x: 100.75984495619763,
            y: 263.93928117765387
        },
        {
            type: 'patent',
            id: '7506791',
            name: 'Surgical stapling instrument with mechanical mechanism for limiting maximum tissue compression',
            numCitations: 1257,
            x: 162.8994374938383,
            y: -13.50766436461125
        },
        {
            type: 'patent',
            id: '7620655',
            name: 'Method, device and computer program product for identifying visitors of websites',
            numCitations: 1243,
            x: 273.7453257058471,
            y: -134.11969716806783
        },
        {
            type: 'patent',
            id: '7632985',
            name: 'Soybean event MON89788 and methods for detection thereof',
            numCitations: 1477,
            x: 25.156412731130995,
            y: 232.6383745363165
        },
        {
            type: 'patent',
            id: '7663607',
            name: 'Multipoint touchscreen',
            numCitations: 2217,
            x: 148.31729075714412,
            y: -252.1205411729562
        },
        {
            type: 'patent',
            id: '7674650',
            name: 'Semiconductor device and manufacturing method thereof',
            numCitations: 3439,
            x: 265.20775273511885,
            y: 97.08753175649879
        },
        {
            type: 'patent',
            id: '7732819',
            name: 'Semiconductor device and manufacturing method thereof',
            numCitations: 3288,
            x: 241.27432475696145,
            y: 92.57917159661595
        },
        {
            type: 'patent',
            id: '8053184',
            name: 'Soybean event MON89788 and methods for detection thereof',
            numCitations: 1249,
            x: 12.74173927451986,
            y: 223.33050946853854
        },
        {
            type: 'inventor',
            id: '4082602-2',
            name: 'Adam Heller',
            numPatents: 278,
            x: -78.97918367878395,
            y: 175.83458551945697
        },
        {
            type: 'inventor',
            id: '6551276-11',
            name: 'Adrian Gut',
            numPatents: 14,
            x: -126.49163896882082,
            y: 77.05392542894437
        },
        {
            type: 'inventor',
            id: '6551276-3',
            name: 'Alan Haubach',
            numPatents: 15,
            x: -133.54480618517556,
            y: 13.73644337954243
        },
        {
            type: 'inventor',
            id: '6732095-1',
            name: 'Alex Warshavsky',
            numPatents: 38,
            x: -41.43006091014681,
            y: -115.69468137064817
        },
        {
            type: 'inventor',
            id: '4082097-1',
            name: 'Alfred E. Mann',
            numPatents: 73,
            x: -166.25127823417688,
            y: 64.21424556623339
        },
        {
            type: 'inventor',
            id: '7402506-2',
            name: 'Andrea C. Scuderi',
            numPatents: 2,
            x: 232.021013564944,
            y: 201.54360553214553
        },
        {
            type: 'inventor',
            id: '6295530-1',
            name: 'Andrew M. Ritchie',
            numPatents: 3,
            x: -180.13270109380883,
            y: -175.89335875039285
        },
        {
            type: 'inventor',
            id: '5944791-1',
            name: 'Andrew W. Scherpbier',
            numPatents: 8,
            x: 89.03596788702271,
            y: 73.41966601562058
        },
        {
            type: 'inventor',
            id: '6665648-4',
            name: 'Andrzej P. Mazur',
            numPatents: 1,
            x: -17.75957738133269,
            y: -90.04327884141138
        },
        {
            type: 'inventor',
            id: '6577726-4',
            name: 'Anil K. Annadata',
            numPatents: 19,
            x: -90.27237726758581,
            y: -142.1198155312784
        },
        {
            type: 'inventor',
            id: '6336137-3',
            name: 'Anil Mukundan',
            numPatents: 24,
            x: 44.97570003882059,
            y: -173.1912630521635
        },
        {
            type: 'inventor',
            id: '6829655-3',
            name: 'Anupam Singhal',
            numPatents: 12,
            x: 68.03341497080808,
            y: -159.6164090183031
        },
        {
            type: 'inventor',
            id: '5276262-2',
            name: 'Arthur L. Johnson',
            numPatents: 9,
            x: 185.5095664352228,
            y: -228.8419915898405
        },
        {
            type: 'inventor',
            id: '7082832-4',
            name: 'Ayanori Endo',
            numPatents: 5,
            x: 116.09261573010951,
            y: 149.17176081875573
        },
        {
            type: 'inventor',
            id: '6370584-1',
            name: 'Azer Bestavros',
            numPatents: 8,
            x: -240.41292415194087,
            y: 197.40201072984638
        },
        {
            type: 'inventor',
            id: '5722997-2',
            name: 'Behrad Aria',
            numPatents: 75,
            x: -76.88639579899268,
            y: 140.59743480285144
        },
        {
            type: 'inventor',
            id: '4972224-1',
            name: 'Bennie Thompson',
            numPatents: 46,
            x: 129.80735052389812,
            y: -4.481972559839983
        },
        {
            type: 'inventor',
            id: '7620655-2',
            name: 'Björn Sperling',
            numPatents: 1,
            x: 265.69802466021343,
            y: -163.1748759268247
        },
        {
            type: 'inventor',
            id: '6551276-12',
            name: 'Bob Murtfeldt',
            numPatents: 14,
            x: -104.57602641605023,
            y: 43.21929386017491
        },
        {
            type: 'inventor',
            id: '6809653-9',
            name: 'Brad T. Hite',
            numPatents: 4,
            x: -178.740694429597,
            y: 114.56430107100311
        },
        {
            type: 'inventor',
            id: '6665648-5',
            name: 'Brian Groves',
            numPatents: 3,
            x: -4.063703727593559,
            y: -93.24666021615177
        },
        {
            type: 'inventor',
            id: '7000818-3',
            name: 'Brian J. Hemmelgarn',
            numPatents: 2,
            x: 251.87825271692208,
            y: 28.28980319526008
        },
        {
            type: 'inventor',
            id: '6658577-1',
            name: 'Brian Q. Huppi',
            numPatents: 94,
            x: 123.19631987835258,
            y: -269.5549552777111
        },
        {
            type: 'inventor',
            id: '5465895-1',
            name: 'Bryan D. Knodel',
            numPatents: 147,
            x: 249.27159352509696,
            y: 149.8942269653444
        },
        {
            type: 'inventor',
            id: '5948006-1',
            name: 'Carla M. Mann',
            numPatents: 30,
            x: -148.41153476987805,
            y: 268.2102368533701
        },
        {
            type: 'inventor',
            id: '6558351-8',
            name: 'Cary D. Talbot',
            numPatents: 51,
            x: -242.1201373960085,
            y: 1.0809105861722483
        },
        {
            type: 'inventor',
            id: '5176644-1',
            name: 'Chad Srisathapat',
            numPatents: 28,
            x: -106.59780325645289,
            y: 56.72415996247363
        },
        {
            type: 'inventor',
            id: '6732095-2',
            name: 'Chandrakant Ramkrishna Bhavsar',
            numPatents: 7,
            x: -56.44692423602858,
            y: -114.38936355952521
        },
        {
            type: 'inventor',
            id: '6804330-5',
            name: 'Chris Haven',
            numPatents: 8,
            x: 76.58996926607027,
            y: -233.59376421774968
        },
        {
            type: 'inventor',
            id: '5859916-3',
            name: 'Christopher A. Julian',
            numPatents: 35,
            x: 32.49529202915526,
            y: 307.85587157329917
        },
        {
            type: 'inventor',
            id: '5963953-3',
            name: 'Christopher Stauber',
            numPatents: 3,
            x: 38.876499177308936,
            y: -254.6853371485407
        },
        {
            type: 'inventor',
            id: '6593834-2',
            name: 'Chunong Qiu',
            numPatents: 30,
            x: -299.51357073275767,
            y: 28.693586133179505
        },
        {
            type: 'inventor',
            id: '5703357-3',
            name: 'Cindy Xing Qiu',
            numPatents: 37,
            x: -307.60494602088494,
            y: -36.09974297692554
        },
        {
            type: 'inventor',
            id: '5382232-1',
            name: 'Cliff Hague',
            numPatents: 25,
            x: -158.94889170792217,
            y: 75.57366125967091
        },
        {
            type: 'inventor',
            id: '6535909-1',
            name: 'David Bradley Rust',
            numPatents: 10,
            x: 293.89378266881215,
            y: 108.24045592690449
        },
        {
            type: 'inventor',
            id: '5713911-1',
            name: 'David C. Racenet',
            numPatents: 117,
            x: -70.73199996729076,
            y: 283.6884502132661
        },
        {
            type: 'inventor',
            id: '5512426-1',
            name: 'David H. Levy',
            numPatents: 97,
            x: 175.62273346829593,
            y: 195.03348092042785
        },
        {
            type: 'inventor',
            id: '5755737-3',
            name: 'David Karl Lee Peterson',
            numPatents: 10,
            x: -116.19997593920681,
            y: 235.42317467768706
        },
        {
            type: 'inventor',
            id: '6004276-13',
            name: 'David L. Rabbers',
            numPatents: 9,
            x: 90.05455138839467,
            y: -199.76724302660992
        },
        {
            type: 'inventor',
            id: '4127227-1',
            name: 'David T. Green',
            numPatents: 253,
            x: 320.0538956493474,
            y: -2.5674406983783777
        },
        {
            type: 'inventor',
            id: '5329655-1',
            name: 'Dean L. Garner',
            numPatents: 9,
            x: 82.9868378665844,
            y: -75.01472155002138
        },
        {
            type: 'inventor',
            id: '6551276-9',
            name: 'Deborah Ruppert',
            numPatents: 22,
            x: -118.26552937451507,
            y: 20.131481189101695
        },
        {
            type: 'inventor',
            id: '6551276-10',
            name: 'Dennis P. Bishop',
            numPatents: 16,
            x: -113.04138432659943,
            y: 68.5347918156229
        },
        {
            type: 'inventor',
            id: '5918159-2',
            name: 'Denzil Willoughby Chesney',
            numPatents: 8,
            x: -221.3438163197732,
            y: -180.31258868435725
        },
        {
            type: 'inventor',
            id: '6912839-2',
            name: 'Derek Dee Deville',
            numPatents: 127,
            x: 124.00562369714609,
            y: 30.303518573213328
        },
        {
            type: 'inventor',
            id: '6718361-8',
            name: 'Domenic J. LaRosa',
            numPatents: 7,
            x: -185.1634027151588,
            y: 191.49880558090896
        },
        {
            type: 'inventor',
            id: '6850949-1',
            name: 'Doug Warner',
            numPatents: 1,
            x: 197.4109586624888,
            y: -141.51137425901277
        },
        {
            type: 'inventor',
            id: '6530932-2',
            name: 'Douglas B. Hoffman',
            numPatents: 41,
            x: 112.65902202678886,
            y: -41.95179419340801
        },
        {
            type: 'inventor',
            id: '6434550-1',
            name: 'Douglas K. Warner',
            numPatents: 11,
            x: -240.213051803147,
            y: -58.38534522176044
        },
        {
            type: 'inventor',
            id: '6850895-5',
            name: 'Duane Wandless',
            numPatents: 3,
            x: -141.77120370957505,
            y: -235.84945888555336
        },
        {
            type: 'inventor',
            id: '7632985-4',
            name: 'Ellen Dickinson',
            numPatents: 5,
            x: -6.650712953659232,
            y: 243.85922494977996
        },
        {
            type: 'inventor',
            id: '5616532-3',
            name: 'Ephraim Heller',
            numPatents: 125,
            x: -136.66276931786788,
            y: 148.50833287306844
        },
        {
            type: 'inventor',
            id: '6724399-1',
            name: 'Ernst Katchour',
            numPatents: 2,
            x: 20.460705177816816,
            y: -138.6316174346047
        },
        {
            type: 'inventor',
            id: '4403687-2',
            name: 'Eugene L. Timperman',
            numPatents: 69,
            x: 167.81405976240322,
            y: 23.653794348670516
        },
        {
            type: 'inventor',
            id: '6905057-2',
            name: 'Frederick E. Shelton, IV',
            numPatents: 1047,
            x: 206.94055601161958,
            y: -33.63794401922105
        },
        {
            type: 'inventor',
            id: '5041086-4',
            name: 'Fredric C. Colman',
            numPatents: 119,
            x: -93.07141522233565,
            y: 187.61382791214774
        },
        {
            type: 'inventor',
            id: '6433921-2',
            name: 'G. Victor Treyz',
            numPatents: 19,
            x: -250.2141922087249,
            y: 117.70936188128789
        },
        {
            type: 'inventor',
            id: '6558351-1',
            name: 'Garry M. Steil',
            numPatents: 21,
            x: -197.55033843707088,
            y: -14.969054157255261
        },
        {
            type: 'inventor',
            id: '5707369-2',
            name: 'Geoffrey C. Hueil',
            numPatents: 37,
            x: 88.77732129975968,
            y: -59.34294469090431
        },
        {
            type: 'inventor',
            id: '6826582-2',
            name: 'George Ericsson',
            numPatents: 1,
            x: -158.02070855249937,
            y: -111.41355666075413
        },
        {
            type: 'inventor',
            id: 'RE28932-2',
            name: 'Graham W. Bryan',
            numPatents: 17,
            x: 302.15197174981995,
            y: 2.971153301217186
        },
        {
            type: 'inventor',
            id: '6144679-1',
            name: 'Gregory S Herman',
            numPatents: 70,
            x: -107.08721212438253,
            y: -22.999325980475344
        },
        {
            type: 'inventor',
            id: '6601087-2',
            name: 'Guanghong Yang',
            numPatents: 8,
            x: 181.9400868080221,
            y: 77.6677862338119
        },
        {
            type: 'inventor',
            id: '6577726-3',
            name: 'Henry D. Jay',
            numPatents: 7,
            x: -122.02320476982499,
            y: -157.95566732418285
        },
        {
            type: 'inventor',
            id: '4283024-1',
            name: 'Henry R. Sienkiewicz',
            numPatents: 35,
            x: 274.60415603712727,
            y: -27.27330962584567
        },
        {
            type: 'inventor',
            id: '7323356-5',
            name: 'Hidenori Hiramatsu',
            numPatents: 4,
            x: -36.605424251950446,
            y: 115.850089319988
        },
        {
            type: 'inventor',
            id: '4703019-2',
            name: 'Hideo Hosono',
            numPatents: 68,
            x: -9.859457094237333,
            y: 112.18374696348913
        },
        {
            type: 'inventor',
            id: '4253061-3',
            name: 'Hideo Ohno',
            numPatents: 55,
            x: 16.424397835913993,
            y: 1.5981290321141162
        },
        {
            type: 'inventor',
            id: '5272069-6',
            name: 'Hiromichi Ota',
            numPatents: 19,
            x: -42.930231233299565,
            y: 72.03081578296118
        },
        {
            type: 'inventor',
            id: '5041200-1',
            name: 'Hiromitsu Ishii',
            numPatents: 40,
            x: -240.4509629339296,
            y: -150.27601265988352
        },
        {
            type: 'inventor',
            id: '6863363-1',
            name: 'Hisato Yabuta',
            numPatents: 40,
            x: 60.4372147665455,
            y: 56.49664921881387
        },
        {
            type: 'inventor',
            id: '7385224-2',
            name: 'Hitoshi Hokari',
            numPatents: 3,
            x: -241.8310333799511,
            y: -133.54049779295428
        },
        {
            type: 'inventor',
            id: '5041200-4',
            name: 'Ikuhiro Yamaguchi',
            numPatents: 10,
            x: -228.78086701719153,
            y: -162.3667158856017
        },
        {
            type: 'inventor',
            id: '4997262-1',
            name: 'Ikuo Sakono',
            numPatents: 9,
            x: -22.451556652393943,
            y: -34.04750168418211
        },
        {
            type: 'inventor',
            id: '5081422-1',
            name: 'Ishiang Shih',
            numPatents: 28,
            x: -286.3270775940396,
            y: -23.733105119458497
        },
        {
            type: 'inventor',
            id: '6281898-2',
            name: 'Jacquelyn A. Martino',
            numPatents: 43,
            x: -77.40426674630258,
            y: 233.14366209397406
        },
        {
            type: 'inventor',
            id: '6665648-3',
            name: 'Jai-Jein Yu',
            numPatents: 3,
            x: -31.84005286492673,
            y: -91.62375747364119
        },
        {
            type: 'inventor',
            id: '4809697-1',
            name: 'James D. Causey, III',
            numPatents: 108,
            x: -178.265216120422,
            y: 51.755680930746685
        },
        {
            type: 'inventor',
            id: '4863425-2',
            name: 'James L. Henke',
            numPatents: 25,
            x: -229.82632326693144,
            y: 81.1483918350451
        },
        {
            type: 'inventor',
            id: '5533238-1',
            name: 'James Say',
            numPatents: 115,
            x: -110.26514650550313,
            y: 189.73841907261374
        },
        {
            type: 'inventor',
            id: '6711565-2',
            name: 'Jason Zoss',
            numPatents: 14,
            x: -36.79763583041338,
            y: -303.3606293140057
        },
        {
            type: 'inventor',
            id: '6551276-8',
            name: 'Jay Yonemoto',
            numPatents: 26,
            x: -108.39060115065696,
            y: 30.667530964984817
        },
        {
            type: 'inventor',
            id: '5863326-1',
            name: 'Jeffrey E. Nause',
            numPatents: 7,
            x: -34.97468782651399,
            y: 225.53781276672427
        },
        {
            type: 'inventor',
            id: '4951278-2',
            name: 'Jeffrey I. Cohen',
            numPatents: 45,
            x: -106.67729256003422,
            y: -275.96655765182123
        },
        {
            type: 'inventor',
            id: '6393605-1',
            name: 'Jeffrey Loomans',
            numPatents: 4,
            x: -12.089523280862164,
            y: -146.87295689250564
        },
        {
            type: 'inventor',
            id: '5243622-2',
            name: 'Jeffrey M. Fischer',
            numPatents: 23,
            x: -69.11510576403663,
            y: -121.59596238278911
        },
        {
            type: 'inventor',
            id: '5897563-4',
            name: 'Jeffrey S. Swayze',
            numPatents: 237,
            x: 182.7575218770712,
            y: -42.652264875397925
        },
        {
            type: 'inventor',
            id: '7608761-4',
            name: 'Jennifer Rinehart',
            numPatents: 9,
            x: 14.603033717644877,
            y: 258.01693807943076
        },
        {
            type: 'inventor',
            id: '7380696-3',
            name: 'Jerry R. Morgan',
            numPatents: 1,
            x: 240.77923512539172,
            y: 0.756185655222625
        },
        {
            type: 'inventor',
            id: '5715450-1',
            name: 'Jesse Ambrose',
            numPatents: 19,
            x: 36.180423514508206,
            y: -271.11815189166657
        },
        {
            type: 'inventor',
            id: '6711565-3',
            name: 'Jian-Jung Ying',
            numPatents: 15,
            x: -52.40594362916027,
            y: -298.6209852446577
        },
        {
            type: 'inventor',
            id: '6516227-4',
            name: 'Joey Chen',
            numPatents: 50,
            x: -154.54667136290993,
            y: 208.95072280734337
        },
        {
            type: 'inventor',
            id: '6233617-2',
            name: 'John Coker',
            numPatents: 29,
            x: -107.81893815632144,
            y: -170.9074676231656
        },
        {
            type: 'inventor',
            id: '4561444-1',
            name: 'John H. Livingston',
            numPatents: 31,
            x: -152.85300444583956,
            y: 85.10940008964967
        },
        {
            type: 'inventor',
            id: '5237178-2',
            name: 'John J. Mastrototaro',
            numPatents: 77,
            x: -205.49739590958532,
            y: 50.31477970484868
        },
        {
            type: 'inventor',
            id: '6424847-3',
            name: 'John J. Shin',
            numPatents: 6,
            x: -185.37446355710384,
            y: -3.2872027106235895
        },
        {
            type: 'inventor',
            id: '5713911-2',
            name: 'John W. Beardsley',
            numPatents: 110,
            x: -33.81475988638202,
            y: 262.88267211113725
        },
        {
            type: 'inventor',
            id: '6690387-1',
            name: 'John Zimmerman',
            numPatents: 16,
            x: -103.86436428501,
            y: 287.0324152077035
        },
        {
            type: 'inventor',
            id: '6295530-2',
            name: 'Jonathan Bradshaw',
            numPatents: 7,
            x: -211.8714260910478,
            y: -224.50904787445123
        },
        {
            type: 'inventor',
            id: '6964363-2',
            name: 'Joseph Charles Heuil',
            numPatents: 1,
            x: 157.89490960975428,
            y: -126.44781831975064
        },
        {
            type: 'inventor',
            id: '6804330-4',
            name: 'Joseph Harb',
            numPatents: 16,
            x: 61.12664822458566,
            y: -268.1908816611899
        },
        {
            type: 'inventor',
            id: '7154477-2',
            name: 'Joshua A. Strickon',
            numPatents: 31,
            x: 143.607727645999,
            y: -281.669369261142
        },
        {
            type: 'inventor',
            id: '6665648-1',
            name: 'Karen Brodersen',
            numPatents: 2,
            x: -52.887761617406746,
            y: -135.25324601212748
        },
        {
            type: 'inventor',
            id: '6914182-1',
            name: 'Katsutoshi Takeda',
            numPatents: 12,
            x: -301.89433487691184,
            y: -70.43324650808906
        },
        {
            type: 'inventor',
            id: '5925224-1',
            name: 'Kazuki Kobayashi',
            numPatents: 22,
            x: -41.900676918096416,
            y: 7.301358596622912
        },
        {
            type: 'inventor',
            id: '7061014-4',
            name: 'Kazushige Ueda',
            numPatents: 8,
            x: -37.66496363448323,
            y: 59.62475565738286
        },
        {
            type: 'inventor',
            id: '4356455-3',
            name: 'Keishi Saito',
            numPatents: 60,
            x: 10.219140633910085,
            y: 114.60611008460567
        },
        {
            type: 'inventor',
            id: '6175752-9',
            name: 'Keith A. Friedman',
            numPatents: 56,
            x: -72.76478399432692,
            y: 157.96280246014734
        },
        {
            type: 'inventor',
            id: 'D263987-1',
            name: 'Keith L. Milliman',
            numPatents: 148,
            x: 285.27055146309806,
            y: -4.161607699952845
        },
        {
            type: 'inventor',
            id: 'D304234-2',
            name: 'Keith Ratcliff',
            numPatents: 76,
            x: 298.25438655644587,
            y: -62.037733990730615
        },
        {
            type: 'inventor',
            id: '6838397-3',
            name: 'Kengo Akimoto',
            numPatents: 301,
            x: 233.30591089284124,
            y: 118.12865814744283
        },
        {
            type: 'inventor',
            id: '4072236-1',
            name: 'Kenji Nomura',
            numPatents: 72,
            x: -18.491573620748454,
            y: 164.3319743882085
        },
        {
            type: 'inventor',
            id: '4890611-3',
            name: 'Kenneth H. Mollenauer',
            numPatents: 139,
            x: 171.12139099125284,
            y: 149.8278932183207
        },
        {
            type: 'inventor',
            id: '5409498-4',
            name: 'Kenneth S. Wales',
            numPatents: 34,
            x: 151.61506500486365,
            y: -68.1715301096975
        },
        {
            type: 'inventor',
            id: '6558351-2',
            name: 'Kerstin Rebrin',
            numPatents: 8,
            x: -213.99832648219893,
            y: -18.21020350970695
        },
        {
            type: 'inventor',
            id: '7083075-3',
            name: 'Kevin R. Doll',
            numPatents: 33,
            x: 195.17161861296412,
            y: 21.82757190718286
        },
        {
            type: 'inventor',
            id: '6826745-3',
            name: 'Kevin R. Nix',
            numPatents: 5,
            x: -113.52318349679786,
            y: -186.65850464097767
        },
        {
            type: 'inventor',
            id: '4682596-2',
            name: 'Kevin W. Smith',
            numPatents: 245,
            x: 142.01517052619224,
            y: 35.31713032040018
        },
        {
            type: 'inventor',
            id: '6336137-1',
            name: 'King-Hwa Lee',
            numPatents: 7,
            x: 29.136416821389545,
            y: -152.83892279100135
        },
        {
            type: 'inventor',
            id: '6553563-3',
            name: 'Klaus W. Strobel',
            numPatents: 3,
            x: 18.502269802896187,
            y: -277.84229119164485
        },
        {
            type: 'inventor',
            id: '5715675-2',
            name: 'Korey Kline',
            numPatents: 67,
            x: 107.3928086404656,
            y: 0.12497168391208881
        },
        {
            type: 'inventor',
            id: '6718361-2',
            name: 'Krishna Mangiapudi',
            numPatents: 2,
            x: -221.42351181095376,
            y: 210.68462107621696
        },
        {
            type: 'inventor',
            id: '6577726-1',
            name: 'Kuang-Yang Huang',
            numPatents: 7,
            x: -110.90293474419634,
            y: -144.1107477274019
        },
        {
            type: 'inventor',
            id: '7159750-5',
            name: 'Lee Ann Olson',
            numPatents: 102,
            x: -12.291045729816593,
            y: 284.322824027671
        },
        {
            type: 'inventor',
            id: '6718361-4',
            name: 'Leroy R. Karge',
            numPatents: 6,
            x: -246.56898495901828,
            y: 176.8643082489128
        },
        {
            type: 'inventor',
            id: '6551276-4',
            name: 'Luis J. Malave',
            numPatents: 25,
            x: -150.46955158412106,
            y: 15.466681355594043
        },
        {
            type: 'inventor',
            id: '6048110-3',
            name: 'Lyn M. Irving',
            numPatents: 50,
            x: 185.89368255203638,
            y: 211.73497316837444
        },
        {
            type: 'inventor',
            id: '6718361-3',
            name: 'Lynne M. Murach',
            numPatents: 6,
            x: -184.59731612599379,
            y: 168.95459030128404
        },
        {
            type: 'inventor',
            id: '5948789-1',
            name: 'Magnus Larsson',
            numPatents: 32,
            x: 282.3498743492304,
            y: -105.85390576839409
        },
        {
            type: 'inventor',
            id: '6829655-2',
            name: 'Magnus Vejlstrup',
            numPatents: 5,
            x: 84.57683420505849,
            y: -211.60546591129122
        },
        {
            type: 'inventor',
            id: '6711565-4',
            name: 'Marc Caltabiano',
            numPatents: 18,
            x: -21.572503547031765,
            y: -303.25001204800884
        },
        {
            type: 'inventor',
            id: '7078503-3',
            name: 'Marianne Malven',
            numPatents: 24,
            x: 39.36478912183982,
            y: 204.50761088237962
        },
        {
            type: 'inventor',
            id: '6223205-2',
            name: 'Mark E. Crovella',
            numPatents: 11,
            x: -239.130673392076,
            y: 159.5386268120703
        },
        {
            type: 'inventor',
            id: '6621834-2',
            name: 'Mark Randle Boyns',
            numPatents: 9,
            x: 92.9515991340844,
            y: 139.72491699418129
        },
        {
            type: 'inventor',
            id: '5534132-1',
            name: 'Mark S. Vreeke',
            numPatents: 99,
            x: -126.17414240825202,
            y: 182.14886801748534
        },
        {
            type: 'inventor',
            id: '4892244-4',
            name: 'Mark S. Zeiner',
            numPatents: 112,
            x: 87.86551233944792,
            y: -93.61435949906866
        },
        {
            type: 'inventor',
            id: '6829655-6',
            name: 'Martin Susser',
            numPatents: 8,
            x: 86.5166449716311,
            y: -176.3680568624842
        },
        {
            type: 'inventor',
            id: '4486720-1',
            name: 'Masahiro Hirano',
            numPatents: 64,
            x: -26.473941021328834,
            y: 50.583877501287475
        },
        {
            type: 'inventor',
            id: '5622653-1',
            name: 'Masahiro Orita',
            numPatents: 13,
            x: -43.311943512469504,
            y: 88.05852401092362
        },
        {
            type: 'inventor',
            id: '6080998-3',
            name: 'Masao Isomura',
            numPatents: 3,
            x: -277.1673968733419,
            y: -69.16313590358769
        },
        {
            type: 'inventor',
            id: '4902671-3',
            name: 'Masashi Kawasaki',
            numPatents: 44,
            x: 25.499834981751505,
            y: 12.458835962907768
        },
        {
            type: 'inventor',
            id: '5117838-1',
            name: 'Matthew A. Palmer',
            numPatents: 213,
            x: 111.84440719512871,
            y: 17.55352243854731
        },
        {
            type: 'inventor',
            id: '6577726-2',
            name: 'Matthew S. Malden',
            numPatents: 15,
            x: -89.77281715762112,
            y: -212.5200099480745
        },
        {
            type: 'inventor',
            id: '6665655-2',
            name: 'Michael A. Myer',
            numPatents: 3,
            x: -222.1548984266278,
            y: -91.88370779987125
        },
        {
            type: 'inventor',
            id: '5632432-4',
            name: 'Michael E. Setser',
            numPatents: 46,
            x: 236.1453486905915,
            y: -29.533043437416676
        },
        {
            type: 'inventor',
            id: '5306623-3',
            name: 'Michael F. Tomasco',
            numPatents: 89,
            x: -136.35034022301926,
            y: 166.87376786095362
        },
        {
            type: 'inventor',
            id: '6606744-1',
            name: 'Michael G. Mikurak',
            numPatents: 14,
            x: 143.06107123828787,
            y: 203.68650030864686
        },
        {
            type: 'inventor',
            id: '6264087-1',
            name: 'Michael P. Whitman',
            numPatents: 134,
            x: 88.31330790988822,
            y: 237.10476528058422
        },
        {
            type: 'inventor',
            id: '6665648-2',
            name: 'Michael Tsunghsi Yu',
            numPatents: 2,
            x: 7.3045597411881005,
            y: -101.62893346986323
        },
        {
            type: 'inventor',
            id: '6081518-1',
            name: 'Michel K. Bowman-Amuah',
            numPatents: 56,
            x: 153.55805703292674,
            y: 278.7584163590403
        },
        {
            type: 'inventor',
            id: '4224725-1',
            name: 'Michio Kadota',
            numPatents: 173,
            x: 70.25249110067011,
            y: 260.17630684500784
        },
        {
            type: 'inventor',
            id: '6850949-2',
            name: 'Mike Myer',
            numPatents: 1,
            x: 200.98410027290677,
            y: -165.1800994159187
        },
        {
            type: 'inventor',
            id: '5261037-2',
            name: 'Min Zhu',
            numPatents: 119,
            x: 187.21787990519445,
            y: 119.18052322241124
        },
        {
            type: 'inventor',
            id: '6732100-4',
            name: 'Mingte J. Chen',
            numPatents: 1,
            x: -74.89396821135054,
            y: -144.48151011840986
        },
        {
            type: 'inventor',
            id: '5176502-3',
            name: 'Mitchell J. Palmer',
            numPatents: 40,
            x: 315.79092621337537,
            y: -58.79666939419763
        },
        {
            type: 'inventor',
            id: '7385224-3',
            name: 'Motohiko Yoshida',
            numPatents: 5,
            x: -231.18768324847443,
            y: -116.45107756791272
        },
        {
            type: 'inventor',
            id: '5918159-1',
            name: 'Mundi Fomukong',
            numPatents: 12,
            x: -221.62526815353186,
            y: -201.75317388265475
        },
        {
            type: 'inventor',
            id: '7632985-3',
            name: 'Nancy Taylor',
            numPatents: 5,
            x: 50.015886492956845,
            y: 227.2759540780497
        },
        {
            type: 'inventor',
            id: '7468304-1',
            name: 'Nobuyuki Kaji',
            numPatents: 16,
            x: 41.822376082161696,
            y: 52.514246752854255
        },
        {
            type: 'inventor',
            id: '7205716-5',
            name: 'Norihito Sone',
            numPatents: 19,
            x: 269.115065567314,
            y: 70.01224836249358
        },
        {
            type: 'inventor',
            id: '5358514-3',
            name: 'Paul M. Meadows',
            numPatents: 70,
            x: -171.2697553163847,
            y: 256.54794390887173
        },
        {
            type: 'inventor',
            id: '6558351-3',
            name: 'Paul V. Goode',
            numPatents: 154,
            x: -230.16114196390936,
            y: -13.410314845001913
        },
        {
            type: 'inventor',
            id: '6711565-1',
            name: 'Pavitra Subramaniam',
            numPatents: 20,
            x: -6.372748347947338,
            y: -297.9670264909068
        },
        {
            type: 'inventor',
            id: 'D423761-3',
            name: 'Peter Hong',
            numPatents: 25,
            x: -207.02913444458756,
            y: 113.2044477207746
        },
        {
            type: 'inventor',
            id: '6152987-2',
            name: 'Peter Mardilovich',
            numPatents: 110,
            x: -113.70541462763414,
            y: -71.63866878448928
        },
        {
            type: 'inventor',
            id: '5873096-1',
            name: 'Peter S. Lim',
            numPatents: 19,
            x: -41.4971575994779,
            y: -229.8634738486308
        },
        {
            type: 'inventor',
            id: '6732111-4',
            name: 'Peter Siam Sy Lim III',
            numPatents: 1,
            x: -119.68776087181291,
            y: -264.7441153149242
        },
        {
            type: 'inventor',
            id: '6850895-3',
            name: 'Peter Siam Sy Lim, III',
            numPatents: 3,
            x: -137.51327861868992,
            y: -253.05015263416013
        },
        {
            type: 'inventor',
            id: '7159750-4',
            name: 'Philip Roy',
            numPatents: 45,
            x: -55.915331837334584,
            y: 265.4527399859059
        },
        {
            type: 'inventor',
            id: '6103033-7',
            name: 'Phillip John Plante',
            numPatents: 76,
            x: -89.56172634273938,
            y: 128.49359954020937
        },
        {
            type: 'inventor',
            id: '5978829-1',
            name: 'Pi-Yu Chung',
            numPatents: 15,
            x: 79.03330309768333,
            y: -166.89620301402695
        },
        {
            type: 'inventor',
            id: '6092083-2',
            name: 'Prashant Chatterjee',
            numPatents: 12,
            x: -127.98166248978045,
            y: -226.09590322983067
        },
        {
            type: 'inventor',
            id: '7340411-1',
            name: 'Rachael L. Cook',
            numPatents: 1,
            x: 145.5816434953685,
            y: -185.9115227848251
        },
        {
            type: 'inventor',
            id: '4872603-1',
            name: 'Ralph Stearns',
            numPatents: 82,
            x: -17.638261139740077,
            y: 311.87440096016235
        },
        {
            type: 'inventor',
            id: '6836540-6',
            name: 'Randy Hoffman',
            numPatents: 66,
            x: -96.67915062271523,
            y: -18.863267642338357
        },
        {
            type: 'inventor',
            id: '4798594-1',
            name: 'Richard A. Hillstead',
            numPatents: 56,
            x: 220.9404304325887,
            y: 155.9212493217171
        },
        {
            type: 'inventor',
            id: '5097122-2',
            name: 'Richard E. Purvis',
            numPatents: 22,
            x: -231.6221173485312,
            y: 58.532788593406465
        },
        {
            type: 'inventor',
            id: '6268803-3',
            name: 'Richard Gorman',
            numPatents: 10,
            x: 76.71667439228202,
            y: -247.40756847543366
        },
        {
            type: 'inventor',
            id: '5271543-1',
            name: 'Richard L. Grant',
            numPatents: 22,
            x: 108.37790261638156,
            y: -109.53429774011205
        },
        {
            type: 'inventor',
            id: '6092083-1',
            name: 'Robert A. Brodersen',
            numPatents: 21,
            x: -116.78677329380332,
            y: -211.74312172754898
        },
        {
            type: 'inventor',
            id: '5873096-2',
            name: 'Robert Broderson',
            numPatents: 3,
            x: 32.470564362710334,
            y: -212.3565037616904
        },
        {
            type: 'inventor',
            id: '5963953-1',
            name: 'Robert Cram',
            numPatents: 3,
            x: 39.731656228036044,
            y: -159.70117419662853
        },
        {
            type: 'inventor',
            id: '4362387-1',
            name: 'Roy Clark',
            numPatents: 23,
            x: -143.38065467805583,
            y: -83.18646932332894
        },
        {
            type: 'inventor',
            id: '5417770-8',
            name: 'Ryo Hayashi',
            numPatents: 71,
            x: 109.56900270181322,
            y: 94.2690776193339
        },
        {
            type: 'inventor',
            id: '6081875-2',
            name: 'Sanjoy Chatterjee',
            numPatents: 2,
            x: -168.55351719373274,
            y: -55.00391327710072
        },
        {
            type: 'inventor',
            id: '5416255-1',
            name: 'Scott A. Bergemann',
            numPatents: 106,
            x: 236.9843658437831,
            y: -154.5385328936314
        },
        {
            type: 'inventor',
            id: '6724399-2',
            name: 'Shankar S. Nathan',
            numPatents: 1,
            x: 8.017651326713803,
            y: -132.67439205632664
        },
        {
            type: 'inventor',
            id: '6804330-1',
            name: 'Shannon Jones',
            numPatents: 5,
            x: 71.13206981844631,
            y: -258.49934239941376
        },
        {
            type: 'inventor',
            id: '6887736-4',
            name: 'Shanthi Ganesan',
            numPatents: 4,
            x: -36.994882107564074,
            y: 176.4435210395316
        },
        {
            type: 'inventor',
            id: '6183589-1',
            name: 'Shin Kim',
            numPatents: 47,
            x: -287.672664666798,
            y: 45.812611641390674
        },
        {
            type: 'inventor',
            id: '6654032-4',
            name: 'Songxiang Wei',
            numPatents: 7,
            x: 132.3199171044082,
            y: 86.33369201811875
        },
        {
            type: 'inventor',
            id: '6783524-1',
            name: 'Stephen C. Anderson',
            numPatents: 1,
            x: 62.6200720139505,
            y: 302.49618857083027
        },
        {
            type: 'inventor',
            id: '5774357-1',
            name: 'Steven M. Hoffberg',
            numPatents: 106,
            x: -298.14981578939944,
            y: 88.5680351045039
        },
        {
            type: 'inventor',
            id: '5594169-2',
            name: 'Steven P. Hotelling',
            numPatents: 306,
            x: 178.31356224420756,
            y: -255.43042507480578
        },
        {
            type: 'inventor',
            id: '6526335-2',
            name: 'Susan M. Treyz',
            numPatents: 15,
            x: -279.2338471304183,
            y: 139.99257336727945
        },
        {
            type: 'inventor',
            id: '6639246-1',
            name: 'Tatsuya Honda',
            numPatents: 109,
            x: 250.0602077201684,
            y: 66.33401322268637
        },
        {
            type: 'inventor',
            id: '5345639-6',
            name: 'Tatsuya Iwasaki',
            numPatents: 116,
            x: 86.3336134471773,
            y: 157.82593462060743
        },
        {
            type: 'inventor',
            id: '6324568-1',
            name: 'Thanh Diec',
            numPatents: 3,
            x: -78.03147469125184,
            y: -272.5886606861718
        },
        {
            type: 'inventor',
            id: '5715450-2',
            name: 'Thomas M. Rothwein',
            numPatents: 13,
            x: -19.165101013241493,
            y: -208.1804640840619
        },
        {
            type: 'inventor',
            id: 'RE39841-4',
            name: 'Todd Phillip Omaits',
            numPatents: 7,
            x: 129.99306854625007,
            y: -22.049901615038408
        },
        {
            type: 'inventor',
            id: '6850949-3',
            name: 'Tom Abshire',
            numPatents: 1,
            x: 140.26566902715228,
            y: -153.3917294843958
        },
        {
            type: 'inventor',
            id: '7061014-6',
            name: 'Toshio Kamiya',
            numPatents: 25,
            x: 9.126271276254377,
            y: 101.82298630556326
        },
        {
            type: 'inventor',
            id: '6718361-1',
            name: 'Vijay R. Basani',
            numPatents: 9,
            x: -201.38227173205027,
            y: 208.74327049926328
        },
        {
            type: 'inventor',
            id: '6718361-5',
            name: 'Vitaly S. Revsin',
            numPatents: 13,
            x: -198.70473078024983,
            y: 152.4052211665943
        },
        {
            type: 'inventor',
            id: '6978921-3',
            name: 'William B. Weisenburgh, II',
            numPatents: 152,
            x: 248.24393906293733,
            y: -90.29342524369324
        },
        {
            type: 'inventor',
            id: '5257971-2',
            name: 'William P. Van Antwerp',
            numPatents: 69,
            x: -243.520991916779,
            y: 23.417679977911327
        },
        {
            type: 'inventor',
            id: '6829655-1',
            name: 'Xiaofei Huang',
            numPatents: 5,
            x: 89.9887416103856,
            y: -187.79413998163483
        },
        {
            type: 'inventor',
            id: '5283452-1',
            name: 'Yi-Chi Shih',
            numPatents: 33,
            x: -323.71359641871163,
            y: 23.908936586494086
        },
        {
            type: 'inventor',
            id: '5901896-1',
            name: 'Yoram Gal',
            numPatents: 76,
            x: -107.23225510620489,
            y: 124.73541739026112
        },
        {
            type: 'inventor',
            id: '4573472-1',
            name: 'Yoshihiro Ito',
            numPatents: 189,
            x: 118.20250938383892,
            y: 287.9615326434283
        },
        {
            type: 'inventor',
            id: '5855957-1',
            name: 'Zheng Yuan',
            numPatents: 58,
            x: 138.0920695217319,
            y: 124.0644011797693
        },
        {
            type: 'assignee',
            id: 'org_Z59aUBGtZ9P5QzdFiKmZ',
            name: 'Ablaise Limited',
            numPatents: 2,
            x: -190.4821130010742,
            y: -236.53619698539487
        },
        {
            type: 'assignee',
            id: 'org_4zO2Bc08x56XjDq5TeBp',
            name: 'Accenture LLP',
            numPatents: 210,
            x: 172.86602300833957,
            y: 253.70330815416585
        },
        {
            type: 'assignee',
            id: 'org_bwq83jbccKqF4jJrPcaR',
            name: 'Advanced Bionics AG',
            numPatents: 633,
            x: -176.91468472981555,
            y: 233.6338835259619
        },
        {
            type: 'assignee',
            id: 'org_IDUbS09ZR0JhJ8jFEptT',
            name: 'Apple Inc.',
            numPatents: 21023,
            x: 151.68246641578867,
            y: -222.1248748814489
        },
        {
            type: 'assignee',
            id: 'org_EhYFPIJEmYQYRoYvsnpy',
            name: 'Canon Kabushiki Kaisha',
            numPatents: 74596,
            x: 49.48223920573296,
            y: 134.09228873115592
        },
        {
            type: 'assignee',
            id: 'org_Imeg9W6P1TE6I2QutS4y',
            name: 'Casio Computer Co., Ltd.',
            numPatents: 4521,
            x: -179.8175934120515,
            y: -142.71828852921044
        },
        {
            type: 'assignee',
            id: 'org_8csMgtgnN0mREZpNP1Ji',
            name: 'Cerebral Vascular Applications, Inc.',
            numPatents: 4,
            x: 268.8004541444387,
            y: 164.52369478315683
        },
        {
            type: 'assignee',
            id: 'org_0eTr3XIBjAKpXkC6823r',
            name: 'Cermet, Inc.',
            numPatents: 7,
            x: -48.40372768955156,
            y: 205.44025883826066
        },
        {
            type: 'assignee',
            id: 'org_107WKNPbvDDKrZBlmw8U',
            name: 'Contigo Software, Inc.',
            numPatents: 2,
            x: 299.3174359095953,
            y: 48.03492469800833
        },
        {
            type: 'assignee',
            id: 'org_ppElkEtQvFtG6A4754UI',
            name: 'Eastman Kodak Company',
            numPatents: 21539,
            x: 211.37525941352786,
            y: 217.58287786532108
        },
        {
            type: 'assignee',
            id: 'org_0jPWM7YqhtXm0lm3fm1Y',
            name: 'EMC Corporation',
            numPatents: 4976,
            x: -189.70156274838973,
            y: -110.01559890437628
        },
        {
            type: 'assignee',
            id: 'org_Wh2cnOIzKlhzjuqVmOqY',
            name: 'Enecto AB',
            numPatents: 1,
            x: 243.6765412246258,
            y: -131.2090311866099
        },
        {
            type: 'assignee',
            id: 'org_Xu6gXSsltDBZTAhMFBWD',
            name: 'Ethicon Endo-Surger, Inc.',
            numPatents: 3,
            x: 224.71243580316477,
            y: 39.60984252547865
        },
        {
            type: 'assignee',
            id: 'org_NfKBB9TWF4As8TSasJ5n',
            name: 'Ethicon Endo-Surgery, Inc.',
            numPatents: 2194,
            x: 171.0743702247664,
            y: -55.03680709894609
        },
        {
            type: 'assignee',
            id: 'org_vS6rcKyc2qN3rFdX0P2K',
            name: 'Hewlett-Packard Development Company, L.P.',
            numPatents: 35118,
            x: -90.3103968526694,
            y: -50.0521628929454
        },
        {
            type: 'assignee',
            id: 'per_tX2e2yVLgyNgobEpzWKT',
            name: 'Hideo Ohno',
            numPatents: 4,
            x: -39.53612842704436,
            y: -20.270273354977252
        },
        {
            type: 'assignee',
            id: 'org_MKvbnCcyPudXexUvsSwF',
            name: "Holden's Foundation Seeds, Inc.",
            numPatents: 83,
            x: 240.0999059851908,
            y: -206.02637614806125
        },
        {
            type: 'assignee',
            id: 'org_fA0azqoBGEzoPoy85Jyv',
            name: 'INTUITIVE SURGICAL OPERATIONS, INC.',
            numPatents: 1202,
            x: 15.378862865447624,
            y: 290.2178222875223
        },
        {
            type: 'assignee',
            id: 'org_DttZMvkyvW3fV6oCUMTF',
            name: 'Japan Science and Technology Agency',
            numPatents: 1157,
            x: 13.173450731061086,
            y: 56.48614099577767
        },
        {
            type: 'assignee',
            id: 'org_c5vyBzK7iikkU4DjQFHT',
            name: 'Japan Science and Technology Corporation',
            numPatents: 418,
            x: 63.56317058275,
            y: 6.273673519090753
        },
        {
            type: 'assignee',
            id: 'org_FvgvGFe8JZ0iYlZ80weF',
            name: 'Koninklijke Philips Electronics N.V.',
            numPatents: 17138,
            x: -123.24179123790191,
            y: 270.99746548441016
        },
        {
            type: 'assignee',
            id: 'org_XcqCjtT8pi8Mk3UjQlDt',
            name: 'LG Electronics Inc.',
            numPatents: 32725,
            x: -277.3460229984558,
            y: 7.13369822254301
        },
        {
            type: 'assignee',
            id: 'per_DIjUTM7lHhDsAz2u8jiO',
            name: 'Masashi Kawasaki',
            numPatents: 3,
            x: 19.895436596662908,
            y: -10.717178250900918
        },
        {
            type: 'assignee',
            id: 'org_GVMlLVbwCDSiqP9Og8Tn',
            name: 'Medtronic MiniMed, Inc.',
            numPatents: 800,
            x: -183.74023419057417,
            y: 37.687218769839085
        },
        {
            type: 'assignee',
            id: 'org_Qw8EsrN0M52nVQUM6vsV',
            name: 'Monsanto Technology LLC',
            numPatents: 8689,
            x: 19.763901488352673,
            y: 196.62236862589774
        },
        {
            type: 'assignee',
            id: 'org_j5U5IEa1FIbgtr7iNsQM',
            name: 'Murata Manufacturing Co., Ltd.',
            numPatents: 7342,
            x: 87.64878197108817,
            y: 291.1023195872352
        },
        {
            type: 'assignee',
            id: 'org_1p4FWEoItjyKbwTpCJol',
            name: 'Network Appliance, Inc.',
            numPatents: 530,
            x: -222.2920372118052,
            y: 149.08372155272062
        },
        {
            type: 'assignee',
            id: 'org_ATOWHd4GGaoh14zutXq7',
            name: 'Power Medical Interventions, Inc.',
            numPatents: 30,
            x: 108.88110399749706,
            y: 186.8533878262659
        },
        {
            type: 'assignee',
            id: 'org_k8V7c5gnmC7SVmup5Vu7',
            name: 'Raindance Communications, Inc.',
            numPatents: 3,
            x: 65.15717694264417,
            y: 83.41943637820401
        },
        {
            type: 'assignee',
            id: 'org_242hJegwfQCeP9hsfwpW',
            name: 'Right Now Technologies, Inc.',
            numPatents: 2,
            x: 186.81965281602268,
            y: -183.4017025145853
        },
        {
            type: 'assignee',
            id: 'org_6r9t7ZA6YT031Od4kMPg',
            name: 'Rightnow Technologies, Inc.',
            numPatents: 10,
            x: -231.73615880122236,
            y: -74.09916970934252
        },
        {
            type: 'assignee',
            id: 'org_2IF97zVymSuraSnUAXmq',
            name: 'Sanyo Electric Co., Ltd.',
            numPatents: 8383,
            x: -283.9028253608946,
            y: -127.87253381969171
        },
        {
            type: 'assignee',
            id: 'org_plZbLxiysESbaI9pOeym',
            name: 'SEMICONDUCTOR ENERGY LABORATORY CO., LTD.',
            numPatents: 13885,
            x: 256.2283987637905,
            y: 124.46141696066522
        },
        {
            type: 'assignee',
            id: 'org_CMWcoCJWPOfisLWrKvyd',
            name: 'Sharp Kabushiki Kaisha',
            numPatents: 22540,
            x: 4.095560406482671,
            y: -32.13618482579938
        },
        {
            type: 'assignee',
            id: 'org_83NNgJrP5lkIN876kNeG',
            name: 'Siebel Systems, Inc.',
            numPatents: 298,
            x: -33.91994752314842,
            y: -212.5994288988811
        },
        {
            type: 'assignee',
            id: 'org_J8VnAzFqEjWgxq4ev71z',
            name: 'Starion Instruments Corporation',
            numPatents: 20,
            x: 178.98416654116346,
            y: 169.54821211190276
        },
        {
            type: 'assignee',
            id: 'org_m2tNPJkA2g1AWOc7uzS1',
            name: 'TheraSense, Inc.',
            numPatents: 53,
            x: -125.9145998460851,
            y: 132.41739054516117
        },
        {
            type: 'assignee',
            id: 'org_JjrM6UmeOY0Q5MmoNiP8',
            name: 'TOKYO INSTITUTE OF TECHNOLOGY',
            numPatents: 395,
            x: 18.61413008116646,
            y: 165.21253699554214
        },
        {
            type: 'assignee',
            id: 'org_ewVsCutpRzD9pT07kBoE',
            name: 'Tyco Healtcare Group LP',
            numPatents: 5,
            x: -67.25430526742107,
            y: 308.6149282041579
        },
        {
            type: 'assignee',
            id: 'org_5wNNrJ4zFQ5KQ8OWnzRC',
            name: 'United States Surtical Corporation',
            numPatents: 1,
            x: 282.781009224431,
            y: -52.981590115087144
        },
        {
            type: 'assignee',
            id: 'org_3vI2Z5kC1SaSlbUBoOBT',
            name: 'WebEx Communications, Inc.',
            numPatents: 22,
            x: 187.36763951128714,
            y: 101.20849847080181
        }
    ],
    links: [
        { source: '6516227', target: '5358514-3' },
        { source: '6516227', target: '5755737-3' },
        { source: '6516227', target: '5948006-1' },
        { source: '6516227', target: '6516227-4' },
        { source: '6516227', target: 'org_bwq83jbccKqF4jJrPcaR' },
        { source: '6535909', target: '6535909-1' },
        { source: '6535909', target: 'org_107WKNPbvDDKrZBlmw8U' },
        { source: '6549908', target: '6393605-1' },
        { source: '6549908', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6553563', target: '5715450-1' },
        { source: '6553563', target: '5715450-2' },
        { source: '6553563', target: '6553563-3' },
        { source: '6553563', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6558320', target: '4809697-1' },
        { source: '6558320', target: '4863425-2' },
        { source: '6558320', target: '5097122-2' },
        { source: '6558320', target: 'org_GVMlLVbwCDSiqP9Og8Tn' },
        { source: '6558351', target: '5097122-2' },
        { source: '6558351', target: '5237178-2' },
        { source: '6558351', target: '5257971-2' },
        { source: '6558351', target: '6424847-3' },
        { source: '6558351', target: '6558351-1' },
        { source: '6558351', target: '6558351-2' },
        { source: '6558351', target: '6558351-3' },
        { source: '6558351', target: '6558351-8' },
        { source: '6558351', target: 'org_GVMlLVbwCDSiqP9Og8Tn' },
        { source: '6560461', target: '5918159-1' },
        { source: '6560461', target: '5918159-2' },
        { source: '6563174', target: '4253061-3' },
        { source: '6563174', target: '4902671-3' },
        { source: '6563174', target: '4997262-1' },
        { source: '6563174', target: '5925224-1' },
        { source: '6563174', target: 'org_CMWcoCJWPOfisLWrKvyd' },
        { source: '6563174', target: 'per_DIjUTM7lHhDsAz2u8jiO' },
        { source: '6563174', target: 'per_tX2e2yVLgyNgobEpzWKT' },
        { source: '6565509', target: '4082602-2' },
        { source: '6565509', target: '5041086-4' },
        { source: '6565509', target: '5306623-3' },
        { source: '6565509', target: '5533238-1' },
        { source: '6565509', target: '5534132-1' },
        { source: '6565509', target: '5616532-3' },
        { source: '6565509', target: '5722997-2' },
        { source: '6565509', target: '5901896-1' },
        { source: '6565509', target: '6103033-7' },
        { source: '6565509', target: '6175752-9' },
        { source: '6565509', target: 'org_m2tNPJkA2g1AWOc7uzS1' },
        { source: '6571282', target: '6081518-1' },
        { source: '6571282', target: 'org_4zO2Bc08x56XjDq5TeBp' },
        { source: '6574635', target: '5715450-1' },
        { source: '6574635', target: '5715450-2' },
        { source: '6574635', target: '5963953-3' },
        { source: '6574635', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6577726', target: '6577726-1' },
        { source: '6577726', target: '6577726-2' },
        { source: '6577726', target: '6577726-3' },
        { source: '6577726', target: '6577726-4' },
        { source: '6577726', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6587835', target: '6433921-2' },
        { source: '6587835', target: '6526335-2' },
        { source: '6601087', target: '5261037-2' },
        { source: '6601087', target: '6601087-2' },
        { source: '6601087', target: 'org_3vI2Z5kC1SaSlbUBoOBT' },
        { source: '6602252', target: '4890611-3' },
        { source: '6602252', target: 'org_J8VnAzFqEjWgxq4ev71z' },
        { source: '6604117', target: '5873096-1' },
        { source: '6604117', target: '5873096-2' },
        { source: '6604117', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6604128', target: '6324568-1' },
        { source: '6604128', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6606744', target: '6606744-1' },
        { source: '6606744', target: 'org_4zO2Bc08x56XjDq5TeBp' },
        { source: '6609150', target: '5963953-1' },
        { source: '6609150', target: '6336137-1' },
        { source: '6609150', target: '6336137-3' },
        { source: '6609150', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6621834', target: '5944791-1' },
        { source: '6621834', target: '6621834-2' },
        { source: '6621834', target: 'org_k8V7c5gnmC7SVmup5Vu7' },
        { source: '6641533', target: '4809697-1' },
        { source: '6641533', target: '4863425-2' },
        { source: '6641533', target: '5097122-2' },
        { source: '6641533', target: 'org_GVMlLVbwCDSiqP9Og8Tn' },
        { source: '6644532', target: '4127227-1' },
        { source: '6644532', target: '4283024-1' },
        { source: '6644532', target: '5176502-3' },
        { source: '6644532', target: 'D263987-1' },
        { source: '6644532', target: 'D304234-2' },
        { source: '6644532', target: 'RE28932-2' },
        { source: '6644532', target: 'org_5wNNrJ4zFQ5KQ8OWnzRC' },
        { source: '6654032', target: '5261037-2' },
        { source: '6654032', target: '5855957-1' },
        { source: '6654032', target: '6601087-2' },
        { source: '6654032', target: '6654032-4' },
        { source: '6654032', target: 'org_3vI2Z5kC1SaSlbUBoOBT' },
        { source: '6656193', target: '4892244-4' },
        { source: '6656193', target: '5271543-1' },
        { source: '6656193', target: '5329655-1' },
        { source: '6656193', target: '5409498-4' },
        { source: '6656193', target: '5707369-2' },
        { source: '6656193', target: 'org_NfKBB9TWF4As8TSasJ5n' },
        { source: '6665648', target: '6665648-1' },
        { source: '6665648', target: '6665648-2' },
        { source: '6665648', target: '6665648-3' },
        { source: '6665648', target: '6665648-4' },
        { source: '6665648', target: '6665648-5' },
        { source: '6665648', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6665655', target: '6434550-1' },
        { source: '6665655', target: '6665655-2' },
        { source: '6665655', target: 'org_6r9t7ZA6YT031Od4kMPg' },
        { source: '6684438', target: '5873096-1' },
        { source: '6684438', target: '6092083-1' },
        { source: '6684438', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6690387', target: '6281898-2' },
        { source: '6690387', target: '6690387-1' },
        { source: '6690387', target: 'org_FvgvGFe8JZ0iYlZ80weF' },
        { source: '6693232', target: '5416255-1' },
        { source: '6693232', target: 'org_MKvbnCcyPudXexUvsSwF' },
        { source: '6698643', target: '6264087-1' },
        { source: '6698643', target: 'org_ATOWHd4GGaoh14zutXq7' },
        { source: '6711565', target: '6711565-1' },
        { source: '6711565', target: '6711565-2' },
        { source: '6711565', target: '6711565-3' },
        { source: '6711565', target: '6711565-4' },
        { source: '6711565', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6716233', target: '6264087-1' },
        { source: '6716233', target: 'org_ATOWHd4GGaoh14zutXq7' },
        { source: '6718361', target: '6223205-2' },
        { source: '6718361', target: '6370584-1' },
        { source: '6718361', target: '6718361-1' },
        { source: '6718361', target: '6718361-2' },
        { source: '6718361', target: '6718361-3' },
        { source: '6718361', target: '6718361-4' },
        { source: '6718361', target: '6718361-5' },
        { source: '6718361', target: '6718361-8' },
        { source: '6718361', target: 'org_1p4FWEoItjyKbwTpCJol' },
        { source: '6724399', target: '6724399-1' },
        { source: '6724399', target: '6724399-2' },
        { source: '6724399', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6727522', target: '4253061-3' },
        { source: '6727522', target: '4902671-3' },
        { source: '6727522', target: 'org_c5vyBzK7iikkU4DjQFHT' },
        { source: '6728702', target: '6577726-2' },
        { source: '6728702', target: '6711565-1' },
        { source: '6728702', target: '6711565-2' },
        { source: '6728702', target: '6711565-3' },
        { source: '6728702', target: '6711565-4' },
        { source: '6728702', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6728960', target: '6393605-1' },
        { source: '6728960', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6732095', target: '5243622-2' },
        { source: '6732095', target: '6732095-1' },
        { source: '6732095', target: '6732095-2' },
        { source: '6732095', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6732100', target: '5715450-2' },
        { source: '6732100', target: '6577726-2' },
        { source: '6732100', target: '6577726-4' },
        { source: '6732100', target: '6665648-1' },
        { source: '6732100', target: '6732100-4' },
        { source: '6732100', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6732111', target: '4951278-2' },
        { source: '6732111', target: '6092083-1' },
        { source: '6732111', target: '6092083-2' },
        { source: '6732111', target: '6732111-4' },
        { source: '6732111', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6754681', target: '5873096-1' },
        { source: '6754681', target: '6092083-1' },
        { source: '6754681', target: '6092083-2' },
        { source: '6754681', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6763351', target: '6711565-1' },
        { source: '6763351', target: '6711565-2' },
        { source: '6763351', target: '6711565-3' },
        { source: '6763351', target: '6711565-4' },
        { source: '6763351', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6763501', target: '5261037-2' },
        { source: '6763501', target: '5855957-1' },
        { source: '6763501', target: '6601087-2' },
        { source: '6763501', target: '6654032-4' },
        { source: '6763501', target: 'org_3vI2Z5kC1SaSlbUBoOBT' },
        { source: '6768904', target: '6183589-1' },
        { source: '6768904', target: 'org_XcqCjtT8pi8Mk3UjQlDt' },
        { source: '6782383', target: '6711565-1' },
        { source: '6782383', target: '6711565-2' },
        { source: '6782383', target: '6711565-3' },
        { source: '6782383', target: '6711565-4' },
        { source: '6782383', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6783524', target: '5859916-3' },
        { source: '6783524', target: '6783524-1' },
        { source: '6783524', target: 'org_fA0azqoBGEzoPoy85Jyv' },
        { source: '6786382', target: '6530932-2' },
        { source: '6786382', target: 'org_NfKBB9TWF4As8TSasJ5n' },
        { source: '6804330', target: '5715450-1' },
        { source: '6804330', target: '6268803-3' },
        { source: '6804330', target: '6804330-1' },
        { source: '6804330', target: '6804330-4' },
        { source: '6804330', target: '6804330-5' },
        { source: '6804330', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6809653', target: '4082097-1' },
        { source: '6809653', target: '4561444-1' },
        { source: '6809653', target: '4809697-1' },
        { source: '6809653', target: '4863425-2' },
        { source: '6809653', target: '5097122-2' },
        { source: '6809653', target: '5237178-2' },
        { source: '6809653', target: '5382232-1' },
        { source: '6809653', target: '6809653-9' },
        { source: '6809653', target: 'D423761-3' },
        { source: '6809653', target: 'org_GVMlLVbwCDSiqP9Og8Tn' },
        { source: '6826565', target: '6295530-1' },
        { source: '6826565', target: '6295530-2' },
        { source: '6826565', target: 'org_Z59aUBGtZ9P5QzdFiKmZ' },
        { source: '6826582', target: '4362387-1' },
        { source: '6826582', target: '6081875-2' },
        { source: '6826582', target: '6826582-2' },
        { source: '6826582', target: 'org_0jPWM7YqhtXm0lm3fm1Y' },
        { source: '6826745', target: '6233617-2' },
        { source: '6826745', target: '6577726-2' },
        { source: '6826745', target: '6826745-3' },
        { source: '6826745', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6829655', target: '5978829-1' },
        { source: '6829655', target: '6004276-13' },
        { source: '6829655', target: '6829655-1' },
        { source: '6829655', target: '6829655-2' },
        { source: '6829655', target: '6829655-3' },
        { source: '6829655', target: '6829655-6' },
        { source: '6829655', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6830174', target: '4798594-1' },
        { source: '6830174', target: '5465895-1' },
        { source: '6830174', target: 'org_8csMgtgnN0mREZpNP1Ji' },
        { source: '6842748', target: '6434550-1' },
        { source: '6842748', target: '6665655-2' },
        { source: '6842748', target: 'org_6r9t7ZA6YT031Od4kMPg' },
        { source: '6843403', target: '6264087-1' },
        { source: '6843403', target: 'org_ATOWHd4GGaoh14zutXq7' },
        { source: '6850252', target: '5774357-1' },
        { source: '6850895', target: '6092083-1' },
        { source: '6850895', target: '6092083-2' },
        { source: '6850895', target: '6577726-2' },
        { source: '6850895', target: '6850895-3' },
        { source: '6850895', target: '6850895-5' },
        { source: '6850895', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6850949', target: '6850949-1' },
        { source: '6850949', target: '6850949-2' },
        { source: '6850949', target: '6850949-3' },
        { source: '6850949', target: 'org_242hJegwfQCeP9hsfwpW' },
        { source: '6852915', target: '5276262-2' },
        { source: '6852915', target: 'org_MKvbnCcyPudXexUvsSwF' },
        { source: '6905057', target: '5897563-4' },
        { source: '6905057', target: '6905057-2' },
        { source: '6905057', target: 'org_NfKBB9TWF4As8TSasJ5n' },
        { source: '6959852', target: '5632432-4' },
        { source: '6959852', target: '6905057-2' },
        { source: '6959852', target: 'org_NfKBB9TWF4As8TSasJ5n' },
        { source: '6964363', target: '5409498-4' },
        { source: '6964363', target: '6964363-2' },
        { source: '6964363', target: 'org_NfKBB9TWF4As8TSasJ5n' },
        { source: '6978921', target: '5632432-4' },
        { source: '6978921', target: '6905057-2' },
        { source: '6978921', target: '6978921-3' },
        { source: '6978921', target: 'org_NfKBB9TWF4As8TSasJ5n' },
        { source: '6981628', target: '5409498-4' },
        { source: '6981628', target: 'org_NfKBB9TWF4As8TSasJ5n' },
        { source: '7000818', target: '5632432-4' },
        { source: '7000818', target: '6905057-2' },
        { source: '7000818', target: '7000818-3' },
        { source: '7000818', target: 'org_Xu6gXSsltDBZTAhMFBWD' },
        { source: '7025743', target: '4082097-1' },
        { source: '7025743', target: '4561444-1' },
        { source: '7025743', target: '4809697-1' },
        { source: '7025743', target: '5176644-1' },
        { source: '7025743', target: '5382232-1' },
        { source: '7025743', target: '6551276-10' },
        { source: '7025743', target: '6551276-11' },
        { source: '7025743', target: '6551276-12' },
        { source: '7025743', target: '6551276-3' },
        { source: '7025743', target: '6551276-4' },
        { source: '7025743', target: '6551276-8' },
        { source: '7025743', target: '6551276-9' },
        { source: '7025743', target: 'org_GVMlLVbwCDSiqP9Og8Tn' },
        { source: '7049190', target: '6080998-3' },
        { source: '7049190', target: '6914182-1' },
        { source: '7049190', target: 'org_2IF97zVymSuraSnUAXmq' },
        { source: '7055731', target: '5632432-4' },
        { source: '7055731', target: '6905057-2' },
        { source: '7055731', target: '6978921-3' },
        { source: '7055731', target: 'org_NfKBB9TWF4As8TSasJ5n' },
        { source: '7061014', target: '4486720-1' },
        { source: '7061014', target: '4703019-2' },
        { source: '7061014', target: '5272069-6' },
        { source: '7061014', target: '5622653-1' },
        { source: '7061014', target: '7061014-4' },
        { source: '7061014', target: '7061014-6' },
        { source: '7061014', target: 'org_DttZMvkyvW3fV6oCUMTF' },
        { source: '7064346', target: '4253061-3' },
        { source: '7064346', target: '4902671-3' },
        { source: '7064346', target: 'org_DttZMvkyvW3fV6oCUMTF' },
        { source: '7105868', target: '5863326-1' },
        { source: '7105868', target: '6887736-4' },
        { source: '7105868', target: 'org_0eTr3XIBjAKpXkC6823r' },
        { source: '7111769', target: '5409498-4' },
        { source: '7111769', target: '5897563-4' },
        { source: '7111769', target: '6530932-2' },
        { source: '7111769', target: '6905057-2' },
        { source: '7111769', target: 'org_NfKBB9TWF4As8TSasJ5n' },
        { source: '7147138', target: '6905057-2' },
        { source: '7147138', target: 'org_NfKBB9TWF4As8TSasJ5n' },
        { source: '7159750', target: '4872603-1' },
        { source: '7159750', target: '5713911-1' },
        { source: '7159750', target: '5713911-2' },
        { source: '7159750', target: '7159750-4' },
        { source: '7159750', target: '7159750-5' },
        { source: '7159750', target: 'org_ewVsCutpRzD9pT07kBoE' },
        { source: '7211825', target: '5081422-1' },
        { source: '7211825', target: '5283452-1' },
        { source: '7211825', target: '5703357-3' },
        { source: '7211825', target: '6593834-2' },
        { source: '7246734', target: '6905057-2' },
        { source: '7246734', target: 'org_NfKBB9TWF4As8TSasJ5n' },
        { source: '7282782', target: '6144679-1' },
        { source: '7282782', target: '6152987-2' },
        { source: '7282782', target: '6836540-6' },
        { source: '7282782', target: 'org_vS6rcKyc2qN3rFdX0P2K' },
        { source: '7297977', target: '6144679-1' },
        { source: '7297977', target: '6152987-2' },
        { source: '7297977', target: '6836540-6' },
        { source: '7297977', target: 'org_vS6rcKyc2qN3rFdX0P2K' },
        { source: '7323356', target: '4486720-1' },
        { source: '7323356', target: '4703019-2' },
        { source: '7323356', target: '5272069-6' },
        { source: '7323356', target: '5622653-1' },
        { source: '7323356', target: '7061014-4' },
        { source: '7323356', target: '7323356-5' },
        { source: '7323356', target: 'org_DttZMvkyvW3fV6oCUMTF' },
        { source: '7340411', target: '7340411-1' },
        { source: '7380695', target: '5409498-4' },
        { source: '7380695', target: '5632432-4' },
        { source: '7380695', target: '6905057-2' },
        { source: '7380695', target: '7083075-3' },
        { source: '7380695', target: 'org_NfKBB9TWF4As8TSasJ5n' },
        { source: '7380696', target: '5632432-4' },
        { source: '7380696', target: '6905057-2' },
        { source: '7380696', target: '7083075-3' },
        { source: '7380696', target: '7380696-3' },
        { source: '7380696', target: 'org_NfKBB9TWF4As8TSasJ5n' },
        { source: '7385224', target: '5041200-1' },
        { source: '7385224', target: '5041200-4' },
        { source: '7385224', target: '7385224-2' },
        { source: '7385224', target: '7385224-3' },
        { source: '7385224', target: 'org_Imeg9W6P1TE6I2QutS4y' },
        { source: '7402506', target: '5512426-1' },
        { source: '7402506', target: '6048110-3' },
        { source: '7402506', target: '7402506-2' },
        { source: '7402506', target: 'org_ppElkEtQvFtG6A4754UI' },
        { source: '7404508', target: '4682596-2' },
        { source: '7404508', target: '5117838-1' },
        { source: '7404508', target: '5715675-2' },
        { source: '7404508', target: '6912839-2' },
        { source: '7404508', target: 'org_NfKBB9TWF4As8TSasJ5n' },
        { source: '7411209', target: '5345639-6' },
        { source: '7411209', target: '5417770-8' },
        { source: '7411209', target: '7082832-4' },
        { source: '7411209', target: 'org_EhYFPIJEmYQYRoYvsnpy' },
        { source: '7453065', target: '4072236-1' },
        { source: '7453065', target: '4356455-3' },
        { source: '7453065', target: '4703019-2' },
        { source: '7453065', target: '7061014-6' },
        { source: '7453065', target: 'org_EhYFPIJEmYQYRoYvsnpy' },
        { source: '7453065', target: 'org_JjrM6UmeOY0Q5MmoNiP8' },
        { source: '7453087', target: '5345639-6' },
        { source: '7453087', target: 'org_EhYFPIJEmYQYRoYvsnpy' },
        { source: '7462862', target: '6144679-1' },
        { source: '7462862', target: '6836540-6' },
        { source: '7462862', target: 'org_vS6rcKyc2qN3rFdX0P2K' },
        { source: '7464846', target: '4403687-2' },
        { source: '7464846', target: '5897563-4' },
        { source: '7464846', target: '6905057-2' },
        { source: '7464846', target: '7083075-3' },
        { source: '7464846', target: 'org_NfKBB9TWF4As8TSasJ5n' },
        { source: '7468304', target: '6863363-1' },
        { source: '7468304', target: '7468304-1' },
        { source: '7468304', target: 'org_EhYFPIJEmYQYRoYvsnpy' },
        { source: '7501293', target: '4224725-1' },
        { source: '7501293', target: '4573472-1' },
        { source: '7501293', target: 'org_j5U5IEa1FIbgtr7iNsQM' },
        { source: '7506791', target: '4403687-2' },
        { source: '7506791', target: '4972224-1' },
        { source: '7506791', target: '6905057-2' },
        { source: '7506791', target: 'RE39841-4' },
        { source: '7506791', target: 'org_NfKBB9TWF4As8TSasJ5n' },
        { source: '7620655', target: '5948789-1' },
        { source: '7620655', target: '7620655-2' },
        { source: '7620655', target: 'org_Wh2cnOIzKlhzjuqVmOqY' },
        { source: '7632985', target: '7078503-3' },
        { source: '7632985', target: '7608761-4' },
        { source: '7632985', target: '7632985-3' },
        { source: '7632985', target: '7632985-4' },
        { source: '7632985', target: 'org_Qw8EsrN0M52nVQUM6vsV' },
        { source: '7663607', target: '5594169-2' },
        { source: '7663607', target: '6658577-1' },
        { source: '7663607', target: '7154477-2' },
        { source: '7663607', target: 'org_IDUbS09ZR0JhJ8jFEptT' },
        { source: '7674650', target: '6639246-1' },
        { source: '7674650', target: '6838397-3' },
        { source: '7674650', target: '7205716-5' },
        { source: '7674650', target: 'org_plZbLxiysESbaI9pOeym' },
        { source: '7732819', target: '6639246-1' },
        { source: '7732819', target: '6838397-3' },
        { source: '7732819', target: '7205716-5' },
        { source: '7732819', target: 'org_plZbLxiysESbaI9pOeym' },
        { source: '8053184', target: '7078503-3' },
        { source: '8053184', target: '7608761-4' },
        { source: '8053184', target: '7632985-3' },
        { source: '8053184', target: '7632985-4' },
        { source: '8053184', target: 'org_Qw8EsrN0M52nVQUM6vsV' }
    ]
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide the entrance of NetV.js.
 * @dependences interfaces.ts, utils/map2.js, node.ts, link.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetV = void 0;
const map2_1 = __webpack_require__(/*! ./utils/map2 */ "./src/utils/map2.ts");
const node_1 = __webpack_require__(/*! ./node */ "./src/node.ts");
const link_1 = __webpack_require__(/*! ./link */ "./src/link.ts");
const defaultConfigs = __webpack_require__(/*! ./configs */ "./src/configs.ts");
const dataset = __webpack_require__(/*! ./dataset */ "./src/dataset/index.ts");
const renderer_1 = __webpack_require__(/*! ./renderer */ "./src/renderer/index.ts");
const interaction_1 = __webpack_require__(/*! ./interaction/interaction */ "./src/interaction/interaction.ts");
const Utils = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.ts");
const Layouts = __webpack_require__(/*! ./layout/index */ "./src/layout/index.ts");
const label_1 = __webpack_require__(/*! ./label/label */ "./src/label/label.ts");
class NetV {
    /**
     * @description create NetV object.
     * @param configs configurations of NetV, must include a `container: HTMLDivElement` term
     */
    constructor(configs) {
        this.Utils = Utils; // TODO: need refactor to static?
        this.$_id2node = new Map();
        this.$_ends2link = new map2_1.default();
        this.$_sourceId2links = new Map();
        this.$_targetId2links = new Map();
        this.$_configs = JSON.parse(JSON.stringify(defaultConfigs)); // NOTE: deep copy configs
        this.$_transform = { x: 0, y: 0, k: 1 };
        this.$_lazyUpdate = false; // flag to control lazy update
        this.$_data = { nodes: [], links: [] };
        this.$_modifiedLinkCount = 0; // record modified link num to control lazy update
        if (!('container' in configs) || configs.container.tagName !== 'DIV') {
            throw Error('Container should be specified as a div element!');
        }
        this.$_container = configs.container;
        // override configs
        for (const key in configs) {
            if (key === 'container')
                continue; // NOTE: exclude container in configs
            if (configs[key] === Object(configs[key])) {
                this.$_configs[key] = Object.assign(Object.assign({}, this.$_configs[key]), configs[key]);
            }
            else {
                this.$_configs[key] = configs[key];
            }
        }
        const canvas = document.createElement('canvas'); // TODO: consider node enviroment, document not defined
        const pixelRatio = window.devicePixelRatio || 1;
        canvas.style.width = this.$_configs.width + 'px';
        canvas.style.height = this.$_configs.height + 'px';
        canvas.setAttribute('width', String(this.$_configs.width * pixelRatio));
        canvas.setAttribute('height', String(this.$_configs.height * pixelRatio));
        this.$_container.appendChild(canvas);
        this.$_canvas = canvas;
        this.$_renderer = new renderer_1.Renderer({
            canvas,
            width: this.$_configs.width,
            height: this.$_configs.height,
            backgroundColor: this.$_configs.backgroundColor,
            nodeLimit: this.$_configs.nodeLimit,
            linkLimit: this.$_configs.linkLimit
        });
        this.labelManager = new label_1.LabelManager(this);
        this.$_interactionManager = new interaction_1.InteractionManager(this);
        if (this.$_configs.enablePanZoom) {
            this.$_interactionManager.initZoom();
        }
        this.$_interactionManager.initMouse();
    }
    /**
     * get/set canvas's background color
     * @param color
     */
    backgroundColor(color) {
        if (color) {
            this.$_configs.backgroundColor = color;
            this.$_renderer.setBackgroundColor(color);
        }
        return this.$_configs.backgroundColor;
    }
    $_addModifiedLinkCount(n) {
        this.$_modifiedLinkCount += n;
        if (this.$_modifiedLinkCount > this.$_configs.lazyUpdateThreshold) {
            this.$_lazyUpdate = true;
        }
    }
    /**
     * @description data getter setter
     * @param nodeLinkData? the node-link-data of a graph, provided?setter:getter;
     */
    data(nodeLinkData) {
        if (nodeLinkData === undefined) {
            return this.$_data;
        }
        else {
            // delete old data
            this.$_data = Object.assign(Object.assign({}, this.$_data), nodeLinkData);
            this.$_id2node = new Map();
            this.$_ends2link = new map2_1.default();
            this.$_sourceId2links = new Map();
            this.$_targetId2links = new Map();
            this.$_renderer.clearData();
            this.addNodes(this.$_data.nodes);
            this.addLinks(this.$_data.links);
        }
    }
    /**
     * @description initialize and add a node
     * @param nodeData the data of a node, include id, styles...
     */
    addNode(nodeData) {
        return this.addNodes([nodeData])[0];
    }
    /**
     * @description initialize and add a link
     * @param linkData the data of a link, include source, target, and styles...
     */
    addLink(linkData) {
        return this.addLinks([linkData])[0];
    }
    /**
     * @description initialize and add an array of nodes.
     * @param {interfaces.NodeData[]} nodesData: a data array of nodes tobe added
     * @memberof NetV
     */
    addNodes(nodesData) {
        const newNodes = nodesData.map((nodeData) => {
            nodeData.id = nodeData.id.toString();
            const node = new node_1.default(this, nodeData);
            return node;
        });
        this.$_renderer.addNodes(newNodes);
        return newNodes;
    }
    /**
     * @description initialize and add an array of links.
     * @param {interfaces.LinkData[]} linksData: a data array of links tobe added
     * @memberof NetV
     */
    addLinks(linksData) {
        const newLinks = linksData.map((linkData) => {
            linkData.source = linkData.source.toString();
            linkData.target = linkData.target.toString();
            const link = new link_1.default(this, linkData);
            return link;
        });
        // this.$_renderer.addLinks(newLinks)
        this.$_renderer.addLinks([...this.$_ends2link.values()]); // NOTE: preserve link order, not elegant
        return newLinks;
    }
    /**
     * @description get a Node object from the id2node Map data structure
     * @param id node id
     */
    getNodeById(id) {
        return this.$_id2node.get(id);
    }
    /**
     * @description get a Link object from the ends2link Map2 data structure
     * @param endId1 one end id of the link (source or target)
     * @param endId2 another end id of the link (source or target)
     */
    getLinkByEnds(endId1, endId2) {
        return this.$_ends2link.get([endId1, endId2]);
    }
    /**
     * @description get all nodes
     */
    nodes() {
        return [...this.$_id2node.values()];
    }
    /**
     * @description get all links
     */
    links() {
        return [...this.$_ends2link.values()];
    }
    /**
     * @description wipe all the data in the instance
     * @memberof NetV
     */
    wipe() {
        this.$_data = undefined;
        this.$_id2node = new Map();
        this.$_ends2link = new map2_1.default();
        this.$_sourceId2links = new Map();
        this.$_targetId2links = new Map();
        this.$_renderer.clearData();
    }
    /**
     * dispose NetV object, clear all stuffs
     */
    dispose() {
        this.wipe();
        this.$_renderer.dispose();
        this.$_canvas.remove();
        // remove label canvas
        // TODO: consider standalone interaction plugin
        this.labelManager.dispose();
    }
    /**
     * @description return build-in dataset according to name
     * @param name dataset name
     */
    loadDataset(name) {
        if (name in dataset)
            return dataset[name];
        console.error(`NetV does not have build-in dataset: ${name}`);
        return { nodes: [], links: [] };
    }
    /**
     * given position, return element on this pixel if exists
     * @param x x pos
     * @param y y pos
     */
    getElementByPosition(position) {
        const id = this.$_renderer.getIdByPosition(position);
        if (id) {
            if (typeof id === 'string') {
                const node = this.getNodeById(id);
                return {
                    type: 'node',
                    element: node
                };
            }
            if (Array.isArray(id)) {
                const link = this.getLinkByEnds(id[0], id[1]);
                return {
                    type: 'link',
                    element: link
                };
            }
        }
    }
    /**
     * @description draw elements
     */
    draw() {
        if (this.$_lazyUpdate) {
            this.$_renderer.nodeManager.refreshPosition([...this.$_id2node.values()]);
            // TODO: maybe need more efficient and reliable way to store and get all links
            this.$_renderer.linkManager.refreshPosition([...this.$_ends2link.values()]);
            this.$_lazyUpdate = false;
            this.$_modifiedLinkCount = 0;
        }
        this.$_renderer.draw();
    }
    /**
     * pan on canvas to get given node centered
     * @param node
     */
    centerOn(node) {
        const pos = node.position();
        this.$_interactionManager.centerPosition(pos);
    }
    /**
     * progmatically pan
     * @param x
     * @param y
     */
    panBy(x, y) {
        this.$_interactionManager.panBy(x, y);
        this.draw();
    }
    /**
     * progmatically zoom
     * @param factor zoom factor
     * @param center optional, zoom center position
     */
    zoomBy(factor, center) {
        this.$_interactionManager.zoomBy(factor, center);
        this.draw();
    }
    /**
     * get/set netv's transform
     * @param value optional, transform to set
     */
    transform(value) {
        if (value === undefined) {
            return this.$_transform;
        }
        this.$_transform = value;
        this.$_renderer.setTransform(this.$_transform);
        this.labelManager.setTransform(this.$_transform);
        this.draw();
    }
}
exports.NetV = NetV;
NetV.Layouts = Layouts;


/***/ }),

/***/ "./src/interaction/interaction.ts":
/*!****************************************!*\
  !*** ./src/interaction/interaction.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description handle all interaction in NetV
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractionManager = void 0;
class InteractionManager {
    constructor(netv) {
        this.isMouseDown = false;
        this.isMouseMove = false;
        this.netv = netv;
    }
    /**
     * progmatically pan
     * @param x
     * @param y
     */
    panBy(x, y) {
        const newTransform = Object.assign({}, this.netv.$_transform);
        newTransform.x += x;
        newTransform.y += y;
        this.netv.transform(newTransform);
    }
    /**
     * progmatically zoom
     * @param factor zoom factor
     * @param center optional, zoom center position
     */
    zoomBy(factor, center) {
        const newTransform = Object.assign({}, this.netv.$_transform);
        let centerPos = center;
        if (!centerPos) {
            centerPos = { x: this.netv.$_configs.width / 2, y: this.netv.$_configs.height / 2 };
        }
        const { x, y } = centerPos;
        newTransform.x = (1 - factor) * x + factor * newTransform.x;
        newTransform.y = (1 - factor) * y + factor * newTransform.y;
        newTransform.k *= factor;
        this.netv.transform(newTransform);
    }
    /**
     * move current position to center of canvas
     * @param pos
     */
    centerPosition(pos) {
        const newTransform = Object.assign({}, this.netv.$_transform);
        const x = pos.x * newTransform.k + newTransform.x;
        const y = pos.y * newTransform.k + newTransform.y;
        const center = {
            x: this.netv.$_configs.width / 2,
            y: this.netv.$_configs.height / 2
        };
        // newTransform.x += center.x - x
        // newTransform.y += center.y - y
        // interpolation
        const stepCount = 20;
        const difference = {
            x: center.x - x,
            y: center.y - y
        };
        const originTranslate = {
            x: newTransform.x,
            y: newTransform.y
        };
        const ease = (x) => {
            return x * x;
        };
        let steps = 1;
        const animation = setInterval(() => {
            newTransform.x = originTranslate.x + difference.x * ease(steps / stepCount);
            newTransform.y = originTranslate.y + difference.y * ease(steps / stepCount);
            this.netv.transform(newTransform);
            steps += 1;
            if (steps > stepCount)
                clearInterval(animation);
        }, 500 / stepCount);
    }
    /**
     * init zoom&pan interaction
     * currently no callback
     */
    initZoom() {
        const canvas = this.netv.$_container.querySelector('canvas');
        const handleScroll = (evt) => {
            const newTransform = Object.assign({}, this.netv.$_transform);
            const x = evt.offsetX || evt.pageX - canvas.offsetLeft;
            const y = evt.offsetY || evt.pageY - canvas.offsetTop;
            const delta = evt.deltaY ? evt.deltaY / 40 : evt.detail ? -evt.detail : 0;
            if (delta) {
                const k = Math.pow(1.1, delta);
                newTransform.x = (1 - k) * x + k * newTransform.x;
                newTransform.y = (1 - k) * y + k * newTransform.y;
                newTransform.k *= k;
                this.netv.transform(newTransform);
            }
            evt.preventDefault();
        };
        canvas.addEventListener('DOMMouseScroll', handleScroll, false);
        canvas.addEventListener('mousewheel', handleScroll, false);
    }
    /**
     * setup click utility
     */
    initMouse() {
        let newTransform = Object.assign({}, this.netv.$_transform);
        const canvas = this.netv.$_container.querySelector('canvas');
        const handleMouseDown = (evt) => {
            var _a;
            newTransform = Object.assign({}, this.netv.$_transform);
            const x = evt.offsetX || evt.pageX - canvas.offsetLeft;
            const y = evt.offsetY || evt.pageY - canvas.offsetTop;
            const yInv = this.netv.$_configs.height - y;
            this.isMouseDown = true;
            this.mouseDownPos = { x, y };
            this.dragStartTransform = JSON.parse(JSON.stringify(newTransform));
            this.mouseDownElement = this.netv.getElementByPosition({
                x,
                y: yInv
            });
            if ((_a = this.mouseDownElement) === null || _a === void 0 ? void 0 : _a.element.position) {
                // record orgin position for drag
                this.mouseDownElementOriginPos = Object.assign({}, this.mouseDownElement.element.position());
            }
        };
        const handleMouseMove = (evt) => {
            const x = evt.offsetX || evt.pageX - canvas.offsetLeft;
            const y = evt.offsetY || evt.pageY - canvas.offsetTop;
            if (this.isMouseDown) {
                this.isMouseMove = true;
                if (!this.mouseDownElement || !this.mouseDownElement.element.position) {
                    // pan, when not dragging node
                    newTransform.x = this.dragStartTransform.x + x - this.mouseDownPos.x;
                    newTransform.y = this.dragStartTransform.y + y - this.mouseDownPos.y;
                    this.netv.transform(newTransform);
                }
                else {
                    // drag node
                    this.mouseDownElement.element.position({
                        x: this.mouseDownElementOriginPos.x +
                            (x - this.mouseDownPos.x) / newTransform.k,
                        y: this.mouseDownElementOriginPos.y +
                            (y - this.mouseDownPos.y) / newTransform.k
                    });
                    this.netv.draw();
                    // when dragging, dynamic change label's position. because only operate on single element, it's ok to remove and recreate
                    this.mouseDownElement.element.showLabel(false);
                    this.mouseDownElement.element.showLabel(true);
                }
            }
            else {
                const yInv = this.netv.$_configs.height - y;
                const element = this.netv.getElementByPosition({ x, y: yInv });
                if (element === null || element === void 0 ? void 0 : element.element.$_hoverCallback) {
                    element.element.$_hoverCallback(element.element);
                }
                return; // currently not support hover
            }
        };
        const handleMouseUp = (evt) => {
            var _a;
            if (!this.isMouseMove && this.mouseDownElement) {
                // click
                if ((_a = this.mouseDownElement) === null || _a === void 0 ? void 0 : _a.element.$_clickCallback) {
                    this.mouseDownElement.element.$_clickCallback(this.mouseDownElement.element); // TODO: not elegant
                }
            }
            this.isMouseDown = false;
            this.isMouseMove = false;
            this.mouseDownElement = undefined;
        };
        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseup', handleMouseUp);
    }
}
exports.InteractionManager = InteractionManager;


/***/ }),

/***/ "./src/label/label.ts":
/*!****************************!*\
  !*** ./src/label/label.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description graph label related class or method
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelManager = void 0;
class LabelManager {
    constructor(core) {
        this.$_core = core;
        this.$_svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        core.$_container.prepend(this.$_svg);
        this.$_svg.setAttribute('width', core.$_configs.width);
        this.$_svg.setAttribute('height', core.$_configs.height);
        core.$_container.style.position = 'relative';
        core.$_container.style.overflow = 'hidden';
        core.$_container.style.width = core.$_configs.width;
        core.$_container.style.height = core.$_configs.height;
        this.$_svg.style.position = 'absolute';
        this.$_svg.style.overflow = 'visible';
        this.$_svg.style.pointerEvents = 'none';
        this.$_offset = this.$_core.$_configs.label.offset;
        this.$_fontSize = this.$_core.$_configs.label.fontSize;
        this.$_strokeWidth = this.$_core.$_configs.label.strokeWidth;
        this.$_svg.setAttribute('transform', `translate(${this.$_offset.x} ${this.$_offset.y})`);
        this.$_svg.setAttribute('font-size', `${this.$_fontSize}px`);
        this.$_svg.setAttribute('stroke', `white`);
        this.$_svg.setAttribute('stroke-width', `${this.$_strokeWidth}px`);
    }
    /**
     * dispose label's svg
     */
    dispose() {
        this.$_svg.remove();
    }
    /**
     * draw node's label
     * @param node node to add label
     */
    drawLabel(node) {
        const pos = node.position();
        const text = node.text();
        if (!text)
            return;
        const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        textElement.setAttribute('id', node.id());
        textElement.setAttribute('x', String(pos.x));
        textElement.setAttribute('y', String(pos.y));
        textElement.setAttribute('text-anchor', 'start');
        textElement.setAttribute('alignment-baseline', 'middle');
        textElement.style.userSelect = 'none'; // NOTE: prevent unexpected selection when dragging node(delete and recreate textElement)
        textElement.innerHTML = text;
        this.$_svg.prepend(textElement); // NOTE: make last added text at top
    }
    /**
     * remove node's label
     * @param node node to delete label
     */
    removeLabel(node) {
        var _a;
        // @ts-ignore
        (_a = this.$_svg.getElementById(node.id())) === null || _a === void 0 ? void 0 : _a.remove();
    }
    /**
     * set viewport transform
     * @param transform
     */
    setTransform(transform) {
        this.$_svg.setAttribute('transform', `translate(${this.$_offset.x +
            (1 - transform.k) * -(this.$_core.$_configs.width / 2) +
            transform.x}
             ${this.$_offset.y +
            (1 - transform.k) * -(this.$_core.$_configs.height / 2) +
            transform.y})
             scale(${transform.k})`);
        this.$_svg.setAttribute('font-size', `${this.$_fontSize / transform.k}px`);
        this.$_svg.setAttribute('stroke-width', `${this.$_strokeWidth / transform.k}px`);
    }
}
exports.LabelManager = LabelManager;


/***/ }),

/***/ "./src/layout/d3-force.ts":
/*!********************************!*\
  !*** ./src/layout/d3-force.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Xiaodong Zhao
 * @description d3 force wrapper class
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.D3ForceLayout = void 0;
const layout_1 = __webpack_require__(/*! ./layout */ "./src/layout/layout.ts");
const d3Force = __webpack_require__(/*! d3-force */ "./node_modules/d3-force/src/index.js");
class D3ForceLayout extends layout_1.Layout {
    constructor(netv) {
        super(netv);
        const width = this.netv.$_configs.width;
        const height = this.netv.$_configs.height;
        // this.data = this.netv.data() // TODO: maybe need a deep copy
        this.data = {
            nodes: this.netv.nodes().map((node) => ({ id: node.id(), x: node.x(), y: node.y() })),
            links: this.netv
                .links()
                .map((link) => ({ source: link.source().id(), target: link.target().id() }))
        };
        this.simulation = d3Force
            .forceSimulation(this.data.nodes)
            .force('link', 
        // @ts-ignore
        d3Force.forceLink(this.data.links).id((d) => d.id))
            .force('charge', d3Force.forceManyBody())
            .force('center', d3Force.forceCenter(width / 2, height / 2))
            .stop(); // disable autostart
    }
    start() {
        this.simulation.on('tick', () => {
            this.data.nodes.forEach((n) => {
                const node = this.netv.getNodeById(n.id);
                node.x(n.x);
                node.y(n.y);
            });
            this.netv.draw();
            this.tickCallback && this.tickCallback();
        });
        this.startCallback && this.startCallback();
        this.simulation.restart();
    }
    stop() {
        this.simulation.stop();
        this.stopCallback && this.stopCallback();
    }
    finish() {
        // TODO
    }
}
exports.D3ForceLayout = D3ForceLayout;


/***/ }),

/***/ "./src/layout/index.ts":
/*!*****************************!*\
  !*** ./src/layout/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description collect all layout releated objects and export
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.D3ForceLayout = exports.RandomLayout = void 0;
const random_1 = __webpack_require__(/*! ./random */ "./src/layout/random.ts");
Object.defineProperty(exports, "RandomLayout", { enumerable: true, get: function () { return random_1.RandomLayout; } });
const d3_force_1 = __webpack_require__(/*! ./d3-force */ "./src/layout/d3-force.ts");
Object.defineProperty(exports, "D3ForceLayout", { enumerable: true, get: function () { return d3_force_1.D3ForceLayout; } });


/***/ }),

/***/ "./src/layout/layout.ts":
/*!******************************!*\
  !*** ./src/layout/layout.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Xiaodong Zhao
 * @description Base class of layout
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
class Layout {
    constructor(netv) {
        this.netv = netv;
    }
    start() { }
    stop() { }
    /**
     * call finish to direct get layout result, without transition animation
     */
    finish() { }
    onStart(cb) {
        this.startCallback = cb;
    }
    onTick(cb) {
        this.tickCallback = cb;
    }
    onStop(cb) {
        this.stopCallback = cb;
    }
}
exports.Layout = Layout;


/***/ }),

/***/ "./src/layout/random.ts":
/*!******************************!*\
  !*** ./src/layout/random.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Xiaodong Zhao
 * @description random layout class
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomLayout = void 0;
const layout_1 = __webpack_require__(/*! ./layout */ "./src/layout/layout.ts");
/**
 * linear interpolation from source positions to target positions
 * @param source source positions
 * @param target target positions
 * @param ratio lerp ratio, (0, 1)
 */
function lerpPosition(source, target, ratio) {
    return Array(source.length)
        .fill(undefined)
        .map((_, i) => {
        const x = source[i].x + (target[i].x - source[i].x) * ratio;
        const y = source[i].y + (target[i].y - source[i].y) * ratio;
        return { x, y };
    });
}
class RandomLayout extends layout_1.Layout {
    constructor(netv) {
        super(netv);
    }
    /**
     * set total animation time
     * @param _time
     */
    time(_time) {
        this._time = _time;
    }
    start() {
        this.computePosition();
        let start;
        /**
         * animation step
         * @param timestamp
         */
        const step = (timestamp) => {
            if (start === undefined) {
                start = timestamp;
                this.startCallback && this.startCallback();
            }
            const elapsed = timestamp - start;
            this.currentPositions = lerpPosition(this.sourcePositions, this.targetPositions, elapsed / this._time);
            this.applyPosition();
            this.tickCallback && this.tickCallback();
            if (elapsed < this._time) {
                requestAnimationFrame(step);
            }
            else {
                this.stopCallback && this.stopCallback();
            }
        };
        requestAnimationFrame(step);
    }
    stop() { }
    finish() {
        this.computePosition();
        this.currentPositions = this.targetPositions;
        this.applyPosition();
    }
    /**
     * for random layout, can directly compute target position
     */
    computePosition() {
        if (this.targetPositions) {
            return;
        }
        const nodes = this.netv.nodes();
        this.sourcePositions = nodes.map((n) => ({ x: n.x(), y: n.y() }));
        // random target position
        const width = this.netv.$_configs.width;
        const height = this.netv.$_configs.height;
        this.targetPositions = Array(this.sourcePositions.length)
            .fill(undefined)
            .map(() => {
            return {
                x: Math.random() * width,
                y: Math.random() * height
            };
        });
    }
    /**
     * apply new position to canvas
     */
    applyPosition() {
        const nodes = this.netv.nodes();
        nodes.forEach((n, i) => {
            n.x(this.currentPositions[i].x);
            n.y(this.currentPositions[i].y);
        });
        this.netv.draw();
    }
}
exports.RandomLayout = RandomLayout;


/***/ }),

/***/ "./src/link.ts":
/*!*********************!*\
  !*** ./src/link.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide a Link class.
 * @dependences interfaces.ts, utils/is.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Link {
    constructor(core, linkData) {
        this.$_core = core;
        const defaultConfigs = this.$_core.$_configs;
        const data = Object.assign({
            strokeWidth: defaultConfigs.link.strokeWidth,
            strokeColor: defaultConfigs.link.strokeColor,
            clickCallback: defaultConfigs.link.clickCallback,
            hoverCallback: defaultConfigs.link.hoverCallback
        }, linkData);
        const sourceNode = this.$_core.getNodeById(data.source);
        const targetNode = this.$_core.getNodeById(data.target);
        this.sourceTarget({
            source: sourceNode,
            target: targetNode
        });
        this.$_strokeWidth = data.strokeWidth;
        this.$_strokeColor = data.strokeColor;
        this.setClickCallback(data.clickCallback);
        this.setHoverCallback(data.hoverCallback);
    }
    /**
     * getter/setter of the source
     * @param {Node} [node]
     * @returns {Node} a source Node Object
     * @memberof Link
     */
    source(node) {
        if (arguments.length === 1) {
            // setter
            this.sourceTarget({
                source: node,
                target: this.$_target
            });
        }
        return this.$_source;
    }
    /**
     * getter/setter of the target
     * @param {Node} [node]
     * @returns {Node} a target Node Object
     * @memberof Link
     */
    target(node) {
        if (arguments.length === 1) {
            // setter
            this.sourceTarget({
                source: this.$_source,
                target: node
            });
        }
        return this.$_target;
    }
    /**
     * getter/setter of source and target
     *
     * @param {sourceTargetObj} [{source: Node, target: Node}]
     * @returns Object {source: Node, target: Node}
     * @memberof Link
     */
    sourceTarget(sourceTargetObj) {
        var _a, _b;
        if (arguments.length > 0) {
            const oldSource = this.$_source;
            const oldTarget = this.$_target;
            const newSource = sourceTargetObj.source;
            const newTarget = sourceTargetObj.target;
            const newSourceId = newSource.id();
            const newTargetId = newTarget.id();
            if (newSource === newTarget) {
                // error: self loop
                throw new Error(`Self loop (${newSourceId} <=> ${newTargetId}) is not allowed.`);
            }
            if (this.$_core.$_ends2link.has([newSourceId, newTargetId])) {
                // error: multiple link
                throw new Error(`Multiple link (${newSourceId} <=> ${newTargetId}) is not allowd.`);
            }
            if (oldSource && oldTarget) {
                // delete old Map
                this.$_core.$_ends2link.delete([oldSource.id(), oldTarget.id()]);
                (_a = this.$_core.$_sourceId2links.get(oldSource.id())) === null || _a === void 0 ? void 0 : _a.delete(this);
                (_b = this.$_core.$_targetId2links.get(oldTarget.id())) === null || _b === void 0 ? void 0 : _b.delete(this);
            }
            this.$_source = newSource;
            this.$_target = newTarget;
            this.$_core.$_ends2link.set([newSourceId, newTargetId], this);
            if (!this.$_core.$_sourceId2links.has(newSourceId)) {
                this.$_core.$_sourceId2links.set(newSourceId, new Set([this]));
            }
            else {
                this.$_core.$_sourceId2links.get(newSourceId).add(this);
            }
            if (!this.$_core.$_targetId2links.has(newTargetId)) {
                this.$_core.$_targetId2links.set(newTargetId, new Set([this]));
            }
            else {
                this.$_core.$_targetId2links.get(newTargetId).add(this);
            }
        }
        return {
            source: this.$_source,
            target: this.$_target
        };
    }
    /**
     * set/get stroke width of a node
     * @param {number} [value]
     * @memberof Node
     */
    strokeWidth(value) {
        if (arguments.length === 1) {
            this.$_strokeWidth = value;
            this.$_core.$_renderer.linkManager.changeAttribute(this, 'strokeWidth');
        }
        return this.$_strokeWidth;
    }
    /**
     * set/get stroke color of a node
     * @param {Color} [value]
     */
    strokeColor(value) {
        if (arguments.length === 1) {
            this.$_strokeColor = value;
            this.$_core.$_renderer.linkManager.changeAttribute(this, 'strokeColor');
        }
        return this.$_strokeColor;
    }
    /**
     * set hover callback function
     * @param callback hover callback function
     */
    setHoverCallback(callback) {
        this.$_hoverCallback = callback;
    }
    /**
     * set click callback function
     * @param callback click callback function
     */
    setClickCallback(callback) {
        this.$_clickCallback = callback;
    }
}
exports.default = Link;


/***/ }),

/***/ "./src/node.ts":
/*!*********************!*\
  !*** ./src/node.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide a Node class.
 * @dependences interfaces.ts, utils/is.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = __webpack_require__(/*! ./utils/is */ "./src/utils/is.ts");
class Node {
    constructor(core, nodeData) {
        this.$_position = {
            x: 0,
            y: 0
        };
        this.$_core = core;
        const defaultConfigs = this.$_core.$_configs;
        const data = Object.assign({
            x: this.$_position.x,
            y: this.$_position.y,
            strokeWidth: defaultConfigs.node.strokeWidth,
            strokeColor: defaultConfigs.node.strokeColor,
            r: defaultConfigs.node.r,
            fill: defaultConfigs.node.fill,
            showLabel: defaultConfigs.node.showLabel,
            text: defaultConfigs.node.text,
            clickCallback: defaultConfigs.node.clickCallback,
            hoverCallback: defaultConfigs.node.hoverCallback
        }, nodeData);
        this.$_setId(data.id);
        this.$_position = {
            x: data.x,
            y: data.y
        };
        this.$_strokeWidth = data.strokeWidth;
        this.$_strokeColor = data.strokeColor;
        this.$_fill = data.fill;
        this.$_r = data.r;
        this.$_showLabel = data.showLabel;
        this.$_text = data.text;
        if (this.$_showLabel) {
            this.showLabel(true);
        }
        this.setClickCallback(data.clickCallback);
        this.setHoverCallback(data.hoverCallback);
    }
    /**
     * getter of private property $_id
     * @memberof Node
     */
    id() {
        return this.$_id;
    }
    /**
     * set/get x postion
     * @param {number} [value]
     * @memberof Node
     */
    x(value) {
        if (arguments.length > 0) {
            this.position({
                x: value
            });
        }
        return this.$_position.x;
    }
    /**
     * set/get y postion
     * @param {number} [value]
     * @memberof Node
     */
    y(value) {
        if (arguments.length > 0) {
            this.position({
                y: value
            });
        }
        return this.$_position.y;
    }
    /**
     * set/get postion
     * @memberof Node
     */
    position(position) {
        let linkSets = {};
        // e.g. setOnePosition('x', 1) means set x position with value 1
        const setOnePosition = (key, value) => {
            this.$_position[key] = value; // key: 'x' or 'y'
            Object.entries(linkSets).forEach((entry) => {
                // entry[0]: 'source' / 'target'
                // entry[1]: the link set
                const key = entry[0];
                const set = entry[1];
                if (set) {
                    this.$_core.$_addModifiedLinkCount(set.size);
                    for (const link of set) {
                        this.$_core.$_renderer.linkManager.changeAttribute(link, key);
                    }
                }
            });
        };
        if (arguments.length > 0 && ('x' in position || 'y' in position)) {
            if (this.$_core.$_lazyUpdate) {
                if ('x' in position) {
                    this.$_position['x'] = position.x;
                }
                if ('y' in position) {
                    this.$_position['y'] = position.y;
                }
                return this.$_position;
            }
            linkSets = {
                // find links from/to this node
                source: this.$_core.$_sourceId2links.get(this.$_id),
                target: this.$_core.$_targetId2links.get(this.$_id)
            };
            if ('x' in position) {
                setOnePosition('x', position.x);
            }
            if ('y' in position) {
                setOnePosition('y', position.y);
            }
            this.$_core.$_renderer.nodeManager.changeAttribute(this, 'position');
        }
        return this.$_position;
    }
    /**
     * set/get stroke width of a node
     * @param {number} [value]
     * @memberof Node
     */
    strokeWidth(value) {
        if (arguments.length === 1) {
            this.$_strokeWidth = value;
            this.$_core.$_renderer.nodeManager.changeAttribute(this, 'strokeWidth');
        }
        return this.$_strokeWidth;
    }
    /**
     * set/get stroke color of a node
     * @param {Color} [value]
     */
    strokeColor(value) {
        if (arguments.length === 1) {
            this.$_strokeColor = value;
            this.$_core.$_renderer.nodeManager.changeAttribute(this, 'strokeColor');
        }
        return this.$_strokeColor;
    }
    /**
     * set/get fill color of a node
     * @param {Color} [value]
     */
    fill(value) {
        if (arguments.length === 1) {
            this.$_fill = value;
            this.$_core.$_renderer.nodeManager.changeAttribute(this, 'fill');
        }
        return this.$_fill;
    }
    /**
     * set/get radius of a node
     * @param {number} [r]
     */
    r(value) {
        if (arguments.length === 1) {
            this.$_r = value;
            this.$_core.$_renderer.nodeManager.changeAttribute(this, 'radius');
        }
        return this.$_r;
    }
    /**
     * control label show or not
     * @param value
     */
    showLabel(value) {
        this.$_showLabel = value;
        if (value) {
            this.$_core.labelManager.drawLabel(this);
        }
        else {
            this.$_core.labelManager.removeLabel(this);
        }
    }
    /**
     * get/set node's label
     * @param value label text
     */
    text(value) {
        if (value) {
            this.$_text = value;
        }
        return this.$_text;
    }
    /**
     * get/set offset value
     * @param value offset value
     * @deprecated not used currently, not support set node's label offset individually
     */
    textOffset(value) {
        if (value) {
            this.$_textOffset = value;
        }
        return this.$_textOffset;
    }
    /**
     * set the id of this node.
     * it is only used for constructor
     * because a node's id is not allowed to be changed.
     * @private
     * @param {string} value
     * @returns nothing
     * @memberof Node
     */
    $_setId(value) {
        if (is_1.isValidId(value)) {
            if (this.$_core.$_id2node.has(value)) {
                throw new Error(`Duplicate node (${value}) is not allowed.`);
            }
            if (is_1.isValidId(this.$_id)) {
                throw new Error('Can not change the id of an exist node.');
            }
            this.$_core.$_id2node.set(value, this);
            this.$_id = value;
        }
        else {
            throw new Error(`Invalid ID ${value}`);
        }
    }
    /**
     * set hover callback function
     * @param callback hover callback function
     */
    setHoverCallback(callback) {
        this.$_hoverCallback = callback;
    }
    /**
     * set click callback function
     * @param callback click callback function
     */
    setClickCallback(callback) {
        this.$_clickCallback = callback;
    }
}
exports.default = Node;


/***/ }),

/***/ "./src/renderer/elements/link/fragment.glsl":
/*!**************************************************!*\
  !*** ./src/renderer/elements/link/fragment.glsl ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\r\nprecision highp float;\r\nin vec4 color;\r\n\r\nout vec4 fragmentColor;\r\n\r\nvoid main(void) {\r\n    fragmentColor = vec4(color.rgb * color.a, color.a);\r\n}");

/***/ }),

/***/ "./src/renderer/elements/link/id-fragment.glsl":
/*!*****************************************************!*\
  !*** ./src/renderer/elements/link/id-fragment.glsl ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\r\nprecision highp float;\r\nin vec4 color;\r\n\r\nin vec4 id;\r\n\r\n// TODO: all id related shader need clean up\r\nout vec4 fragmentColor;\r\n\r\nvoid main(void) {\r\n    fragmentColor = id;\r\n}");

/***/ }),

/***/ "./src/renderer/elements/link/id-vertex.glsl":
/*!***************************************************!*\
  !*** ./src/renderer/elements/link/id-vertex.glsl ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\r\nprecision highp float;\r\nin vec3 inVertexPos;\r\nin vec2 inSourcePosition;\r\nin vec2 inTargetPosition;\r\nin float inStrokeWidth;\r\nin vec4 inStrokeColor;\r\n\r\nin vec4 inId;\r\n\r\nout vec4 color;\r\n\r\nout vec4 id;\r\n\r\nuniform mat3 projection;\r\nuniform vec2 scale;\r\nuniform vec2 translate;\r\n\r\nvoid main(void) {\r\n    id = inId;\r\n\r\n    color = inStrokeColor;\r\n\r\n    vec2 source = inSourcePosition * scale + translate;\r\n    vec2 target = inTargetPosition * scale + translate;\r\n    vec2 delta = source - target;\r\n    vec2 center = 0.5 * (source + target);\r\n    float len = length(delta);\r\n    float phi = atan(delta.y / delta.x);\r\n\r\n    mat3 line_scale = mat3(\r\n        len, 0, 0,\r\n        0, inStrokeWidth, 0,\r\n        0, 0, 1\r\n    );\r\n    mat3 line_rotate = mat3(\r\n        cos(phi), sin(phi), 0,\r\n        -sin(phi), cos(phi), 0,\r\n        0, 0, 1\r\n    );\r\n    mat3 line_translate = mat3(\r\n        1, 0, 0,\r\n        0, 1, 0,\r\n        center.x, center.y, 1\r\n    );\r\n    \r\n    mat3 transform = line_translate * line_rotate * line_scale;\r\n\r\n    gl_Position = vec4(projection * transform * inVertexPos, 1.);\r\n}");

/***/ }),

/***/ "./src/renderer/elements/link/render-link.ts":
/*!***************************************************!*\
  !*** ./src/renderer/elements/link/render-link.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description Link used in renderer
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderLinkManager = void 0;
const vertex_glsl_1 = __webpack_require__(/*! ./vertex.glsl */ "./src/renderer/elements/link/vertex.glsl");
const fragment_glsl_1 = __webpack_require__(/*! ./fragment.glsl */ "./src/renderer/elements/link/fragment.glsl");
const id_vertex_glsl_1 = __webpack_require__(/*! ./id-vertex.glsl */ "./src/renderer/elements/link/id-vertex.glsl");
const id_fragment_glsl_1 = __webpack_require__(/*! ./id-fragment.glsl */ "./src/renderer/elements/link/id-fragment.glsl");
const utils_1 = __webpack_require__(/*! ../../utils */ "./src/renderer/utils.ts");
const map2_1 = __webpack_require__(/*! ../../../utils/map2 */ "./src/utils/map2.ts");
var LinkAttrKey;
(function (LinkAttrKey) {
    LinkAttrKey[LinkAttrKey["TEMPLATE"] = 0] = "TEMPLATE";
    LinkAttrKey[LinkAttrKey["SOURCE"] = 1] = "SOURCE";
    LinkAttrKey[LinkAttrKey["TARGET"] = 2] = "TARGET";
    LinkAttrKey[LinkAttrKey["WIDTH"] = 3] = "WIDTH";
    LinkAttrKey[LinkAttrKey["COLOR"] = 4] = "COLOR";
})(LinkAttrKey || (LinkAttrKey = {}));
var LinkIdAttrKey;
(function (LinkIdAttrKey) {
    LinkIdAttrKey[LinkIdAttrKey["TEMPLATE"] = 0] = "TEMPLATE";
    LinkIdAttrKey[LinkIdAttrKey["SOURCE"] = 1] = "SOURCE";
    LinkIdAttrKey[LinkIdAttrKey["TARGET"] = 2] = "TARGET";
    LinkIdAttrKey[LinkIdAttrKey["WIDTH"] = 3] = "WIDTH";
    LinkIdAttrKey[LinkIdAttrKey["COLOR"] = 4] = "COLOR";
    LinkIdAttrKey[LinkIdAttrKey["ID"] = 5] = "ID";
})(LinkIdAttrKey || (LinkIdAttrKey = {}));
const LinkAttrMap = {
    source: LinkAttrKey.SOURCE,
    target: LinkAttrKey.TARGET,
    strokeWidth: LinkAttrKey.WIDTH,
    strokeColor: LinkAttrKey.COLOR
};
class RenderLinkManager {
    /**
     * create render link manager
     * @param gl WebGL context
     * @param params nessesary configs for link manager
     * @param idTexture texture store elements id of each pixel
     */
    constructor(gl, params, idTexture) {
        this.count = 0;
        this.idsToIndex = new map2_1.default();
        const { limit, width, height } = params;
        this.gl = gl;
        this.limit = limit;
        this.width = width;
        this.height = height;
        this.pixelRatio = window.devicePixelRatio || 1;
        this.attributes = utils_1.extractAttributesFromShader(vertex_glsl_1.default);
        this.program = utils_1.createProgram(this.gl, vertex_glsl_1.default, fragment_glsl_1.default, this.attributes);
        this.idAttributes = utils_1.extractAttributesFromShader(id_vertex_glsl_1.default);
        this.idProgram = utils_1.createProgram(this.gl, id_vertex_glsl_1.default, id_fragment_glsl_1.default, this.idAttributes);
        this.idTexture = idTexture;
        this.renderIdToIds = {};
        // init arrays
        // prettier-ignore
        this.attributes[LinkAttrKey.TEMPLATE].array = new Float32Array([
            -0.5, 0.5, 1.0,
            -0.5, -0.5, 1.0,
            0.5, 0.5, 1.0,
            0.5, -0.5, 1.0,
        ]);
        this.attributes.forEach((attr) => {
            if (!attr.isBuildIn)
                attr.array = new Float32Array(attr.size * this.limit);
        });
        // init buffers
        this.attributes.forEach((attr) => {
            attr.buffer = utils_1.createArrayBuffer(this.gl, attr.array);
        });
        // init id attributes and buffers
        // TODO: hardcode check, need refactor
        this.idAttributes.forEach((attr, idx) => {
            if (idx < this.attributes.length) {
                this.idAttributes[idx] = this.attributes[idx];
            }
            else {
                if (!attr.isBuildIn)
                    attr.array = new Float32Array(attr.size * this.limit);
                attr.buffer = utils_1.createArrayBuffer(this.gl, attr.array);
            }
        });
        // init uniforms
        this.gl.useProgram(this.program);
        const projectionLoc = this.gl.getUniformLocation(this.program, 'projection');
        const scaleLoc = this.gl.getUniformLocation(this.program, 'scale');
        const translateLoc = this.gl.getUniformLocation(this.program, 'translate');
        // this.gl.viewport(0, 0, this.width, this.height) // TODO: viewport set, not needed? put here in case bug appear
        // prettier-ignore
        const projection = new Float32Array([
            2 / this.width, 0, 0,
            0, -2 / this.height, 0,
            -1, 1, 1
        ]);
        this.gl.uniformMatrix3fv(projectionLoc, false, projection);
        const scale = new Float32Array([1, 1]);
        this.gl.uniform2fv(scaleLoc, scale);
        const translate = new Float32Array([0, 0]);
        this.gl.uniform2fv(translateLoc, translate);
        // id uniforms, identical to link
        // TODO: need refactor too
        this.gl.useProgram(this.idProgram);
        const idProjectionLoc = this.gl.getUniformLocation(this.idProgram, 'projection');
        const idScaleLoc = this.gl.getUniformLocation(this.idProgram, 'scale');
        const idTranslateLoc = this.gl.getUniformLocation(this.idProgram, 'translate');
        this.gl.uniformMatrix3fv(idProjectionLoc, false, projection);
        this.gl.uniform2fv(idScaleLoc, scale);
        this.gl.uniform2fv(idTranslateLoc, translate);
    }
    /**
     * change link's attribute
     * @param link link data
     * @param attribute attribute key to change
     */
    changeAttribute(link, attribute) {
        const key = LinkAttrMap[attribute];
        const attr = this.attributes[key];
        const nodes = link.sourceTarget();
        const index = this.idsToIndex.get([nodes.source.id(), nodes.target.id()]);
        let data = null;
        if (attribute === 'source') {
            const pos = nodes.source.position();
            data = [pos.x, pos.y];
        }
        else if (attribute === 'target') {
            const pos = nodes.target.position();
            data = [pos.x, pos.y];
        }
        else if (attribute === 'strokeWidth') {
            data = [link.strokeWidth() * this.pixelRatio];
        }
        else if (attribute === 'strokeColor') {
            const col = link.strokeColor();
            data = [col.r, col.g, col.b, col.a];
        }
        else {
            console.error('Link attribute not supported.');
            return; // early return, skip following buffer change
        }
        attr.array.set(data, attr.size * index);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer);
        this.gl.bufferSubData(this.gl.ARRAY_BUFFER, attr.size * index * attr.array.BYTES_PER_ELEMENT, attr.array, attr.size * index, attr.size);
    }
    /**
     * refresh all position of edges
     * @param links all link data
     */
    refreshPosition(links) {
        let count = 0; // TODO: useless count
        links.forEach((link, i) => {
            // TODO: consider link and render link attribute mapping
            const source = link.source();
            const sourcePosition = source.position();
            this.attributes[LinkAttrKey.SOURCE].array[2 * (count + i)] = sourcePosition.x;
            this.attributes[LinkAttrKey.SOURCE].array[2 * (count + i) + 1] = sourcePosition.y;
            const target = link.target();
            const targetPosition = target.position();
            this.attributes[LinkAttrKey.TARGET].array[2 * (count + i)] = targetPosition.x;
            this.attributes[LinkAttrKey.TARGET].array[2 * (count + i) + 1] = targetPosition.y;
            // currently no need for color&renderId change
            /*
            this.attributes[LinkAttrKey.WIDTH].array[this.count + i] =
                link.strokeWidth() * this.pixelRatio

            const color = link.strokeColor()
            this.attributes[LinkAttrKey.COLOR].array[4 * (this.count + i)] = color.r
            this.attributes[LinkAttrKey.COLOR].array[4 * (this.count + i) + 1] = color.g
            this.attributes[LinkAttrKey.COLOR].array[4 * (this.count + i) + 2] = color.b
            this.attributes[LinkAttrKey.COLOR].array[4 * (this.count + i) + 3] = color.a

            const renderIdColor = encodeRenderId(2 * (this.count + i) + 1) // NOTE: link render id, use odd integer
            this.idAttributes[LinkIdAttrKey.ID].array[4 * (this.count + i)] = renderIdColor.r
            this.idAttributes[LinkIdAttrKey.ID].array[4 * (this.count + i) + 1] = renderIdColor.g
            this.idAttributes[LinkIdAttrKey.ID].array[4 * (this.count + i) + 2] = renderIdColor.b
            this.idAttributes[LinkIdAttrKey.ID].array[4 * (this.count + i) + 3] = renderIdColor.a
            */
        });
        const sourceAttr = this.attributes[LinkAttrKey.SOURCE];
        const targetAttr = this.attributes[LinkAttrKey.TARGET];
        const arr = [sourceAttr, targetAttr];
        arr.forEach((attr) => {
            if (!attr.isBuildIn) {
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer);
                this.gl.bufferSubData(this.gl.ARRAY_BUFFER, attr.size * count * attr.array.BYTES_PER_ELEMENT, attr.array, attr.size * count, attr.size * links.length);
            }
        });
    }
    /**
     * clear link data
     * not actually erase data, but reset count
     */
    clearData() {
        this.count = 0;
    }
    /**
     * add links data to engine
     * @param links links data
     */
    addData(links) {
        // set array
        links.forEach((link, i) => {
            // TODO: consider link and render link attribute mapping
            const source = link.source();
            const sourcePosition = source.position();
            this.attributes[LinkAttrKey.SOURCE].array[2 * (this.count + i)] = sourcePosition.x;
            this.attributes[LinkAttrKey.SOURCE].array[2 * (this.count + i) + 1] = sourcePosition.y;
            const target = link.target();
            const targetPosition = target.position();
            this.attributes[LinkAttrKey.TARGET].array[2 * (this.count + i)] = targetPosition.x;
            this.attributes[LinkAttrKey.TARGET].array[2 * (this.count + i) + 1] = targetPosition.y;
            this.attributes[LinkAttrKey.WIDTH].array[this.count + i] =
                link.strokeWidth() * this.pixelRatio;
            const color = link.strokeColor();
            this.attributes[LinkAttrKey.COLOR].array[4 * (this.count + i)] = color.r;
            this.attributes[LinkAttrKey.COLOR].array[4 * (this.count + i) + 1] = color.g;
            this.attributes[LinkAttrKey.COLOR].array[4 * (this.count + i) + 2] = color.b;
            this.attributes[LinkAttrKey.COLOR].array[4 * (this.count + i) + 3] = color.a;
            const renderIdColor = utils_1.encodeRenderId(2 * (this.count + i) + 1); // NOTE: link render id, use odd integer
            this.idAttributes[LinkIdAttrKey.ID].array[4 * (this.count + i)] = renderIdColor.r;
            this.idAttributes[LinkIdAttrKey.ID].array[4 * (this.count + i) + 1] = renderIdColor.g;
            this.idAttributes[LinkIdAttrKey.ID].array[4 * (this.count + i) + 2] = renderIdColor.b;
            this.idAttributes[LinkIdAttrKey.ID].array[4 * (this.count + i) + 3] = renderIdColor.a;
            const sourceTarget = link.sourceTarget();
            this.renderIdToIds[2 * (this.count + i) + 1] = [
                sourceTarget.source.id(),
                sourceTarget.target.id()
            ];
            this.idsToIndex.set([sourceTarget.source.id(), sourceTarget.target.id()], this.count + i);
        });
        this.attributes.forEach((attr) => {
            if (!attr.isBuildIn) {
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer);
                this.gl.bufferSubData(this.gl.ARRAY_BUFFER, attr.size * this.count * attr.array.BYTES_PER_ELEMENT, attr.array, attr.size * this.count, attr.size * links.length);
            }
        });
        // id buffer data
        const attr = this.idAttributes[LinkIdAttrKey.ID];
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer);
        this.gl.bufferSubData(this.gl.ARRAY_BUFFER, attr.size * this.count * attr.array.BYTES_PER_ELEMENT, attr.array, attr.size * this.count, attr.size * links.length);
        this.count += links.length;
    }
    /**
     * set Transform in Render Link
     * @param transform current transform(pan&zoom condition)
     */
    setTransform(transform) {
        this.gl.useProgram(this.program);
        const scaleLoc = this.gl.getUniformLocation(this.program, 'scale');
        const translateLoc = this.gl.getUniformLocation(this.program, 'translate');
        const scale = new Float32Array([transform.k, transform.k]);
        this.gl.uniform2fv(scaleLoc, scale);
        const translate = new Float32Array([transform.x, transform.y]);
        this.gl.uniform2fv(translateLoc, translate);
        // id uniforms, identical to link
        // TODO: need refactor too
        this.gl.useProgram(this.idProgram);
        const idScaleLoc = this.gl.getUniformLocation(this.idProgram, 'scale');
        const idTranslateLoc = this.gl.getUniformLocation(this.idProgram, 'translate');
        this.gl.uniform2fv(idScaleLoc, scale);
        this.gl.uniform2fv(idTranslateLoc, translate);
    }
    /**
     * render id to link ids(source and target)
     * @param renderId
     */
    getIdsByRenderId(renderId) {
        return this.renderIdToIds[renderId];
    }
    /**
     * draw links
     */
    draw() {
        if (this.count > 0) {
            this.gl.enable(this.gl.BLEND);
            this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
            this.gl.useProgram(this.program);
            this.attributes.forEach((attr) => {
                this.gl.enableVertexAttribArray(attr.index);
            });
            this.attributes.forEach((attr, i) => {
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer);
                this.gl.vertexAttribPointer(attr.index, attr.size, this.gl.FLOAT, false, attr.isBuildIn ? 0 : attr.size * attr.array.BYTES_PER_ELEMENT, 0);
                if (!attr.isBuildIn)
                    this.gl.vertexAttribDivisor(attr.index, 1);
            });
        }
        this.gl.drawArraysInstanced(this.gl.TRIANGLE_STRIP, 0, 4, this.count);
        // draw id
        this.gl.blendFunc(this.gl.ONE, this.gl.ZERO);
        this.gl.useProgram(this.idProgram);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.idTexture);
        this.idAttributes.forEach((attr) => {
            this.gl.enableVertexAttribArray(attr.index);
        });
        const attr = this.idAttributes[LinkIdAttrKey.ID];
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer);
        this.gl.vertexAttribPointer(attr.index, attr.size, this.gl.FLOAT, false, attr.size * attr.array.BYTES_PER_ELEMENT, 0);
        this.gl.vertexAttribDivisor(attr.index, 1);
        this.gl.drawArraysInstanced(this.gl.TRIANGLE_STRIP, 0, 4, this.count);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
    }
}
exports.RenderLinkManager = RenderLinkManager;


/***/ }),

/***/ "./src/renderer/elements/link/vertex.glsl":
/*!************************************************!*\
  !*** ./src/renderer/elements/link/vertex.glsl ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\r\nprecision highp float;\r\nin vec3 inVertexPos;\r\nin vec2 inSourcePosition;\r\nin vec2 inTargetPosition;\r\nin float inStrokeWidth;\r\nin vec4 inStrokeColor;\r\n\r\nout vec4 color;\r\n\r\nuniform mat3 projection;\r\nuniform vec2 scale;\r\nuniform vec2 translate;\r\n\r\nvoid main(void) {\r\n    color = inStrokeColor;\r\n\r\n    vec2 source = inSourcePosition * scale + translate;\r\n    vec2 target = inTargetPosition * scale + translate;\r\n    vec2 delta = source - target;\r\n    vec2 center = 0.5 * (source + target);\r\n    float len = length(delta);\r\n    float phi = atan(delta.y / delta.x);\r\n\r\n    mat3 line_scale = mat3(\r\n        len, 0, 0,\r\n        0, inStrokeWidth, 0,\r\n        0, 0, 1\r\n    );\r\n    mat3 line_rotate = mat3(\r\n        cos(phi), sin(phi), 0,\r\n        -sin(phi), cos(phi), 0,\r\n        0, 0, 1\r\n    );\r\n    mat3 line_translate = mat3(\r\n        1, 0, 0,\r\n        0, 1, 0,\r\n        center.x, center.y, 1\r\n    );\r\n    \r\n    mat3 transform = line_translate * line_rotate * line_scale;\r\n\r\n    gl_Position = vec4(projection * transform * inVertexPos, 1.);\r\n}");

/***/ }),

/***/ "./src/renderer/elements/node/fragment.glsl":
/*!**************************************************!*\
  !*** ./src/renderer/elements/node/fragment.glsl ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\r\nprecision highp float;\r\nin vec2 pos;\r\nin float radius;\r\nin vec4 color;\r\nin float strokeWidth;\r\nin vec4 strokeColor;\r\n\r\nout vec4 fragmentColor;\r\n\r\nuniform vec2 viewport;\r\nuniform float pixelRatio;\r\n\r\nfloat inCircle() {\r\n  vec2 flip_pos = pos;\r\n  flip_pos.y = viewport.y - pos.y;\r\n  float r = distance(gl_FragCoord.xy / pixelRatio, flip_pos);\r\n  float draw = 1. - step(radius - strokeWidth / 2., r);\r\n  return draw;\r\n}\r\n\r\nfloat inBorder() {\r\n  if (strokeWidth == 0.) {\r\n    return 0.;\r\n  }\r\n  vec2 flip_pos = pos;\r\n  flip_pos.y = viewport.y - pos.y;\r\n  float r = distance(gl_FragCoord.xy / pixelRatio, flip_pos);\r\n  float drawOuter = 1. - smoothstep((radius + strokeWidth / 2.) * 0.95, (radius + strokeWidth / 2.) * 1.05, r);\r\n  float drawInner = 1. - step(radius - strokeWidth / 2., r);\r\n  return drawOuter * (1. - drawInner);\r\n  // return drawOuter;\r\n}\r\n\r\nvoid main(void) {\r\n    // border check, using 0.5(center of smoothstep)\r\n    if (inCircle() < 1. && (strokeWidth < 0.8 || inBorder() < 0.5)) {\r\n        discard;\r\n    }\r\n    fragmentColor = inBorder() * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a) + inCircle() * vec4(color.rgb * color.a, color.a);\r\n}");

/***/ }),

/***/ "./src/renderer/elements/node/id-fragment.glsl":
/*!*****************************************************!*\
  !*** ./src/renderer/elements/node/id-fragment.glsl ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\r\nprecision highp float;\r\nin vec2 pos;\r\nin float radius;\r\nin vec4 color;\r\nin float strokeWidth;\r\nin vec4 strokeColor;\r\n\r\nin vec4 id;\r\n\r\nout vec4 fragmentColor;\r\n\r\nuniform vec2 viewport;\r\nuniform float pixelRatio;\r\n\r\nfloat inCircle() {\r\n  vec2 flip_pos = pos;\r\n  flip_pos.y = viewport.y - pos.y;\r\n  float r = distance(gl_FragCoord.xy / pixelRatio, flip_pos);\r\n  float draw = 1. - step(radius - strokeWidth / 2., r);\r\n  return draw;\r\n}\r\n\r\nfloat inBorder() {\r\n  if (strokeWidth == 0.) {\r\n    return 0.;\r\n  }\r\n  vec2 flip_pos = pos;\r\n  flip_pos.y = viewport.y - pos.y;\r\n  float r = distance(gl_FragCoord.xy / pixelRatio, flip_pos);\r\n  float drawOuter = 1. - smoothstep((radius + strokeWidth / 2.) * 0.95, (radius + strokeWidth / 2.) * 1.05, r);\r\n  float drawInner = 1. - step(radius - strokeWidth / 2., r);\r\n  return drawOuter * (1. - drawInner);\r\n  // return drawOuter;\r\n}\r\n\r\nvoid main(void) {\r\n    // border check, using 0.5(center of smoothstep)\r\n    if (inCircle() < 1. && (strokeWidth < 0.8 || inBorder() < 0.5)) {\r\n        discard;\r\n    }\r\n    fragmentColor = id;\r\n}");

/***/ }),

/***/ "./src/renderer/elements/node/id-vertex.glsl":
/*!***************************************************!*\
  !*** ./src/renderer/elements/node/id-vertex.glsl ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\r\nprecision highp float;\r\nin vec3 inVertexPos;\r\nin vec2 inPosition;\r\nin float inRadius;\r\nin vec4 inFill;\r\nin float inStrokeWidth;\r\nin vec4 inStrokeColor;\r\n\r\nin vec4 inId;\r\n\r\nout vec2 pos;\r\nout float radius;\r\nout vec4 color;\r\nout float strokeWidth;\r\nout vec4 strokeColor;\r\n\r\nout vec4 id;\r\n\r\nuniform mat3 projection;\r\nuniform vec2 scale;\r\nuniform vec2 translate;\r\nuniform vec2 viewport;\r\n\r\nvoid main(void) {\r\n    id = inId;\r\n\r\n    float size = inRadius + inStrokeWidth / 2.;\r\n    radius = inRadius;\r\n    color = inFill;\r\n    strokeWidth = inStrokeWidth;\r\n    strokeColor = inStrokeColor;\r\n    float vertexSize = size * (2. * sqrt(2.)) * 1.5; // NOTE: x 1.5 to prevent border factor\r\n    pos = scale * inPosition + translate;\r\n    mat3 transform = mat3(\r\n        vertexSize, 0, 0,\r\n        0, vertexSize, 0,\r\n        pos.x, pos.y, 1\r\n    );\r\n\r\n    gl_Position = vec4(projection * transform * inVertexPos, 1.);\r\n}");

/***/ }),

/***/ "./src/renderer/elements/node/render-node.ts":
/*!***************************************************!*\
  !*** ./src/renderer/elements/node/render-node.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description Node using in Renderer
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderNodeManager = void 0;
const vertex_glsl_1 = __webpack_require__(/*! ./vertex.glsl */ "./src/renderer/elements/node/vertex.glsl");
const fragment_glsl_1 = __webpack_require__(/*! ./fragment.glsl */ "./src/renderer/elements/node/fragment.glsl");
const id_vertex_glsl_1 = __webpack_require__(/*! ./id-vertex.glsl */ "./src/renderer/elements/node/id-vertex.glsl");
const id_fragment_glsl_1 = __webpack_require__(/*! ./id-fragment.glsl */ "./src/renderer/elements/node/id-fragment.glsl");
const utils_1 = __webpack_require__(/*! ../../utils */ "./src/renderer/utils.ts");
var NodeAttrKey;
(function (NodeAttrKey) {
    NodeAttrKey[NodeAttrKey["TEMPLATE"] = 0] = "TEMPLATE";
    NodeAttrKey[NodeAttrKey["POSITION"] = 1] = "POSITION";
    NodeAttrKey[NodeAttrKey["RADIUS"] = 2] = "RADIUS";
    NodeAttrKey[NodeAttrKey["COLOR"] = 3] = "COLOR";
    NodeAttrKey[NodeAttrKey["STROKE_WIDTH"] = 4] = "STROKE_WIDTH";
    NodeAttrKey[NodeAttrKey["STROKE_COLOR"] = 5] = "STROKE_COLOR";
})(NodeAttrKey || (NodeAttrKey = {}));
var NodeIdAttrKey;
(function (NodeIdAttrKey) {
    NodeIdAttrKey[NodeIdAttrKey["TEMPLATE"] = 0] = "TEMPLATE";
    NodeIdAttrKey[NodeIdAttrKey["POSITION"] = 1] = "POSITION";
    NodeIdAttrKey[NodeIdAttrKey["RADIUS"] = 2] = "RADIUS";
    NodeIdAttrKey[NodeIdAttrKey["COLOR"] = 3] = "COLOR";
    NodeIdAttrKey[NodeIdAttrKey["STROKE_WIDTH"] = 4] = "STROKE_WIDTH";
    NodeIdAttrKey[NodeIdAttrKey["STROKE_COLOR"] = 5] = "STROKE_COLOR";
    NodeIdAttrKey[NodeIdAttrKey["ID"] = 6] = "ID";
})(NodeIdAttrKey || (NodeIdAttrKey = {}));
const NodeAttrMap = {
    position: NodeAttrKey.POSITION,
    radius: NodeAttrKey.RADIUS,
    fill: NodeAttrKey.COLOR,
    strokeWidth: NodeAttrKey.STROKE_WIDTH,
    strokeColor: NodeAttrKey.STROKE_COLOR
};
class RenderNodeManager {
    /**
     * create render node manager
     * @param gl WebGL context
     * @param params nessesary configs for node manager
     * @param idTexture texture store elements id of each pixel
     */
    constructor(gl, params, idTexture) {
        this.count = 0;
        const { limit, width, height } = params;
        this.gl = gl;
        this.limit = limit;
        this.width = width;
        this.height = height;
        this.pixelRatio = window.devicePixelRatio || 1;
        this.attributes = utils_1.extractAttributesFromShader(vertex_glsl_1.default);
        this.program = utils_1.createProgram(this.gl, vertex_glsl_1.default, fragment_glsl_1.default, this.attributes);
        this.idAttributes = utils_1.extractAttributesFromShader(id_vertex_glsl_1.default);
        this.idProgram = utils_1.createProgram(this.gl, id_vertex_glsl_1.default, id_fragment_glsl_1.default, this.idAttributes);
        this.idTexture = idTexture;
        this.renderIdToId = {};
        this.idToIndex = {};
        // init arrays
        // prettier-ignore
        this.attributes[NodeAttrKey.TEMPLATE].array = new Float32Array([
            -0.5, 0.0, 1.0,
            0.0, -0.5, 1.0,
            0.0, 0.5, 1.0,
            0.5, 0.0, 1.0,
        ]);
        // TODO: combine the following two loop?
        this.attributes.forEach((attr) => {
            if (!attr.isBuildIn)
                attr.array = new Float32Array(attr.size * this.limit);
        });
        // init buffers
        this.attributes.forEach((attr) => {
            attr.buffer = utils_1.createArrayBuffer(this.gl, attr.array);
        });
        // init id attributes and buffers
        // TODO: hardcode check, need refactor
        this.idAttributes.forEach((attr, idx) => {
            if (idx < this.attributes.length) {
                this.idAttributes[idx] = this.attributes[idx];
            }
            else {
                if (!attr.isBuildIn)
                    attr.array = new Float32Array(attr.size * this.limit);
                attr.buffer = utils_1.createArrayBuffer(this.gl, attr.array);
            }
        });
        // init uniforms
        this.gl.useProgram(this.program);
        const projectionLoc = this.gl.getUniformLocation(this.program, 'projection');
        const scaleLoc = this.gl.getUniformLocation(this.program, 'scale');
        const translateLoc = this.gl.getUniformLocation(this.program, 'translate');
        const viewportLoc = this.gl.getUniformLocation(this.program, 'viewport');
        const pixelRatioLoc = this.gl.getUniformLocation(this.program, 'pixelRatio');
        // this.gl.viewport(0, 0, this.width, this.height) // TODO: viewport set, not needed? put here in case bug appear
        // prettier-ignore
        const projection = new Float32Array([
            2 / this.width, 0, 0,
            0, -2 / this.height, 0,
            -1, 1, 1
        ]);
        this.gl.uniformMatrix3fv(projectionLoc, false, projection);
        const scale = new Float32Array([1, 1]);
        this.gl.uniform2fv(scaleLoc, scale);
        const translate = new Float32Array([0, 0]);
        this.gl.uniform2fv(translateLoc, translate);
        const viewport = new Float32Array([this.width, this.height]);
        this.gl.uniform2fv(viewportLoc, viewport);
        this.gl.uniform1f(pixelRatioLoc, this.pixelRatio);
        // id uniforms, identical to node
        // TODO: need refactor too
        this.gl.useProgram(this.idProgram);
        const idProjectionLoc = this.gl.getUniformLocation(this.idProgram, 'projection');
        const idScaleLoc = this.gl.getUniformLocation(this.idProgram, 'scale');
        const idTranslateLoc = this.gl.getUniformLocation(this.idProgram, 'translate');
        const idViewportLoc = this.gl.getUniformLocation(this.idProgram, 'viewport');
        const idPixelRatioLoc = this.gl.getUniformLocation(this.idProgram, 'pixelRatio');
        this.gl.uniformMatrix3fv(idProjectionLoc, false, projection);
        this.gl.uniform2fv(idScaleLoc, scale);
        this.gl.uniform2fv(idTranslateLoc, translate);
        this.gl.uniform2fv(idViewportLoc, viewport);
        this.gl.uniform1f(idPixelRatioLoc, this.pixelRatio);
    }
    /**
     * set Transform in Render Node
     * @param transform current transform(pan&zoom condition)
     */
    setTransform(transform) {
        this.gl.useProgram(this.program);
        const scaleLoc = this.gl.getUniformLocation(this.program, 'scale');
        const translateLoc = this.gl.getUniformLocation(this.program, 'translate');
        const scale = new Float32Array([transform.k, transform.k]);
        this.gl.uniform2fv(scaleLoc, scale);
        const translate = new Float32Array([transform.x, transform.y]);
        this.gl.uniform2fv(translateLoc, translate);
        // id uniforms, identical to node
        // TODO: need refactor too
        this.gl.useProgram(this.idProgram);
        const idScaleLoc = this.gl.getUniformLocation(this.idProgram, 'scale');
        const idTranslateLoc = this.gl.getUniformLocation(this.idProgram, 'translate');
        this.gl.uniform2fv(idScaleLoc, scale);
        this.gl.uniform2fv(idTranslateLoc, translate);
    }
    /**
     * change node's attribute
     * @param node node data
     * @param attribute attribute key to change
     */
    changeAttribute(node, attribute) {
        const key = NodeAttrMap[attribute];
        const attr = this.attributes[key];
        const index = this.idToIndex[node.id()];
        let data = null;
        if (attribute === 'position') {
            const pos = node.position();
            data = [pos.x, pos.y];
        }
        else if (attribute === 'fill') {
            const col = node.fill();
            data = [col.r, col.g, col.b, col.a];
        }
        else if (attribute === 'radius') {
            data = [node.r() * this.pixelRatio];
        }
        else if (attribute === 'strokeWidth') {
            data = [node.strokeWidth() * this.pixelRatio];
        }
        else if (attribute === 'strokeColor') {
            const col = node.strokeColor();
            data = [col.r, col.g, col.b, col.a];
        }
        else {
            console.error('Not supported Node attribute.');
            return;
        }
        attr.array.set(data, attr.size * index);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer);
        this.gl.bufferSubData(this.gl.ARRAY_BUFFER, attr.size * index * attr.array.BYTES_PER_ELEMENT, attr.array, attr.size * index, attr.size);
    }
    /**
     * refresh all nodes position after lazy update
     * @param nodes all node data
     */
    refreshPosition(nodes) {
        // set array
        nodes.forEach((node, i) => {
            // TODO: consider node and render node attribute mapping
            const position = node.position();
            this.attributes[NodeAttrKey.POSITION].array[2 * i] = position.x;
            this.attributes[NodeAttrKey.POSITION].array[2 * i + 1] = position.y;
        });
        this.attributes.forEach((attr) => {
            if (!attr.isBuildIn) {
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer);
                this.gl.bufferSubData(this.gl.ARRAY_BUFFER, 0, attr.array, 0, attr.size * nodes.length);
            }
        });
    }
    /**
     * clear node data
     * not actually erase data, but reset count
     */
    clearData() {
        this.count = 0;
    }
    /**
     * add nodes data to engine
     * @param nodes nodes data
     */
    addData(nodes) {
        // set array
        nodes.forEach((node, i) => {
            // TODO: consider node and render node attribute mapping
            const position = node.position();
            this.attributes[NodeAttrKey.POSITION].array[2 * (this.count + i)] = position.x;
            this.attributes[NodeAttrKey.POSITION].array[2 * (this.count + i) + 1] = position.y;
            this.attributes[NodeAttrKey.RADIUS].array[this.count + i] = node.r() * this.pixelRatio;
            const fill = node.fill();
            this.attributes[NodeAttrKey.COLOR].array[4 * (this.count + i)] = fill.r;
            this.attributes[NodeAttrKey.COLOR].array[4 * (this.count + i) + 1] = fill.g;
            this.attributes[NodeAttrKey.COLOR].array[4 * (this.count + i) + 2] = fill.b;
            this.attributes[NodeAttrKey.COLOR].array[4 * (this.count + i) + 3] = fill.a;
            this.attributes[NodeAttrKey.STROKE_WIDTH].array[this.count + i] =
                node.strokeWidth() * this.pixelRatio;
            const strokeColor = node.strokeColor();
            this.attributes[NodeAttrKey.STROKE_COLOR].array[4 * (this.count + i)] = strokeColor.r;
            this.attributes[NodeAttrKey.STROKE_COLOR].array[4 * (this.count + i) + 1] =
                strokeColor.g;
            this.attributes[NodeAttrKey.STROKE_COLOR].array[4 * (this.count + i) + 2] =
                strokeColor.b;
            this.attributes[NodeAttrKey.STROKE_COLOR].array[4 * (this.count + i) + 3] =
                strokeColor.a;
            const renderIdColor = utils_1.encodeRenderId(2 * (this.count + i)); // NOTE: node render id, use even integer
            this.idAttributes[NodeIdAttrKey.ID].array[4 * (this.count + i)] = renderIdColor.r;
            this.idAttributes[NodeIdAttrKey.ID].array[4 * (this.count + i) + 1] = renderIdColor.g;
            this.idAttributes[NodeIdAttrKey.ID].array[4 * (this.count + i) + 2] = renderIdColor.b;
            this.idAttributes[NodeIdAttrKey.ID].array[4 * (this.count + i) + 3] = renderIdColor.a;
            this.renderIdToId[2 * (this.count + i)] = node.id();
            this.idToIndex[node.id()] = this.count + i;
        });
        this.attributes.forEach((attr) => {
            if (!attr.isBuildIn) {
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer);
                this.gl.bufferSubData(this.gl.ARRAY_BUFFER, attr.size * this.count * attr.array.BYTES_PER_ELEMENT, attr.array, attr.size * this.count, attr.size * nodes.length);
            }
        });
        // id buffer data
        const attr = this.idAttributes[NodeIdAttrKey.ID];
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer);
        this.gl.bufferSubData(this.gl.ARRAY_BUFFER, attr.size * this.count * attr.array.BYTES_PER_ELEMENT, attr.array, attr.size * this.count, attr.size * nodes.length);
        this.count += nodes.length;
    }
    /**
     * render id to id
     * @param renderId render id in number
     */
    getIdByRenderId(renderId) {
        return this.renderIdToId[renderId];
    }
    /**
     * draw nodes
     */
    draw() {
        if (this.count > 0) {
            this.gl.enable(this.gl.BLEND);
            this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
            this.gl.useProgram(this.program);
            this.attributes.forEach((attr) => {
                this.gl.enableVertexAttribArray(attr.index);
            });
            this.attributes.forEach((attr, i) => {
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer);
                this.gl.vertexAttribPointer(attr.index, attr.size, this.gl.FLOAT, false, attr.size * attr.array.BYTES_PER_ELEMENT, 0);
                if (!attr.isBuildIn)
                    this.gl.vertexAttribDivisor(attr.index, 1);
            });
        }
        this.gl.drawArraysInstanced(this.gl.TRIANGLE_STRIP, 0, 4, this.count);
        // draw id
        this.gl.blendFunc(this.gl.ONE, this.gl.ZERO);
        this.gl.useProgram(this.idProgram);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.idTexture);
        this.idAttributes.forEach((attr) => {
            this.gl.enableVertexAttribArray(attr.index);
        });
        const attr = this.idAttributes[NodeIdAttrKey.ID];
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer);
        this.gl.vertexAttribPointer(attr.index, attr.size, this.gl.FLOAT, false, attr.size * attr.array.BYTES_PER_ELEMENT, 0);
        this.gl.vertexAttribDivisor(attr.index, 1);
        this.gl.drawArraysInstanced(this.gl.TRIANGLE_STRIP, 0, 4, this.count);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
    }
}
exports.RenderNodeManager = RenderNodeManager;


/***/ }),

/***/ "./src/renderer/elements/node/vertex.glsl":
/*!************************************************!*\
  !*** ./src/renderer/elements/node/vertex.glsl ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\r\nprecision highp float;\r\nin vec3 inVertexPos;\r\nin vec2 inPosition;\r\nin float inRadius;\r\nin vec4 inFill;\r\nin float inStrokeWidth;\r\nin vec4 inStrokeColor;\r\n\r\nout vec2 pos;\r\nout float radius;\r\nout vec4 color;\r\nout float strokeWidth;\r\nout vec4 strokeColor;\r\n\r\nuniform mat3 projection;\r\nuniform vec2 scale;\r\nuniform vec2 translate;\r\nuniform vec2 viewport;\r\n\r\nvoid main(void) {\r\n    float size = inRadius + inStrokeWidth / 2.;\r\n    radius = inRadius;\r\n    color = inFill;\r\n    strokeWidth = inStrokeWidth;\r\n    strokeColor = inStrokeColor;\r\n    float vertexSize = size * (2. * sqrt(2.)) * 1.5; // NOTE: x 1.5 to prevent border factor\r\n    pos = scale * inPosition + translate;\r\n    mat3 transform = mat3(\r\n        vertexSize, 0, 0,\r\n        0, vertexSize, 0,\r\n        pos.x, pos.y, 1\r\n    );\r\n\r\n    gl_Position = vec4(projection * transform * inVertexPos, 1.);\r\n}");

/***/ }),

/***/ "./src/renderer/index.ts":
/*!*******************************!*\
  !*** ./src/renderer/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description render graph using webgl
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Renderer = void 0;
const render_node_1 = __webpack_require__(/*! ./elements/node/render-node */ "./src/renderer/elements/node/render-node.ts");
const render_link_1 = __webpack_require__(/*! ./elements/link/render-link */ "./src/renderer/elements/link/render-link.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/renderer/utils.ts");
class Renderer {
    /**
     * create renderer object
     * @param configs {canvas: HTMLCanvasElement, width: number, height: number, backgroundColor: Color, defaultConfigs: Object} configs passed to renderer
     */
    constructor(configs) {
        const { canvas, width, height, backgroundColor, nodeLimit, linkLimit } = configs;
        try {
            this.gl = canvas.getContext('webgl2');
        }
        catch (_a) {
            throw new Error('NetV requires WebGL2 supported by your browser');
        }
        this.backgroundColor = backgroundColor;
        this.width = width;
        this.height = height;
        this.initIdTexture();
        this.nodeManager = new render_node_1.RenderNodeManager(this.gl, { width, height, limit: nodeLimit }, this.idTexture);
        this.linkManager = new render_link_1.RenderLinkManager(this.gl, { width, height, limit: linkLimit }, this.idTexture);
    }
    /**
     * dispose renderer stuffs
     */
    dispose() {
        // refer: https://stackoverflow.com/a/23606581
        const numTextureUnits = this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS);
        for (let unit = 0; unit < numTextureUnits; ++unit) {
            this.gl.activeTexture(this.gl.TEXTURE0 + unit);
            this.gl.bindTexture(this.gl.TEXTURE_2D, null);
            this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, null);
        }
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
        this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, null);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.gl.getExtension('WEBGL_lose_context').loseContext();
        // TODO: maybe need free more buffers or something else
    }
    /**
     * set clearColor for renderer
     * @param color
     */
    setBackgroundColor(color) {
        this.backgroundColor = color;
    }
    /**
     * clear data in renderer
     */
    clearData() {
        this.nodeManager.clearData();
        this.linkManager.clearData();
    }
    /**
     * add nodes to node manager
     * @param nodes node data in NetV
     */
    addNodes(nodes) {
        this.nodeManager.addData(nodes);
    }
    /**
     * add links to link manager
     * @param links link data in NetV
     */
    addLinks(links) {
        this.linkManager.addData(links);
    }
    setTransform(transform) {
        this.nodeManager.setTransform(transform);
        this.linkManager.setTransform(transform);
        this.draw();
    }
    /**
     * draw all elements
     */
    draw() {
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.idTexture);
        this.gl.clearColor(1, 1, 1, 1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.gl.clearColor(this.backgroundColor.r, this.backgroundColor.g, this.backgroundColor.b, this.backgroundColor.a);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        this.linkManager.draw();
        this.nodeManager.draw();
    }
    /**
     * get element's id at (x, y) of canvas if exists
     * @param x x pos
     * @param y y pos
     */
    getIdByPosition(position) {
        const renderId = this.readIdTexture(position);
        if (renderId >= 0) {
            if (renderId % 2 === 0) {
                // NOTE: node has even render id, link has odd render id
                const nodeId = this.nodeManager.getIdByRenderId(renderId);
                return nodeId;
            }
            else {
                const linkIds = this.linkManager.getIdsByRenderId(renderId);
                return linkIds;
            }
        }
    }
    /**
     * read pixel value at (x, y) of texture
     * @param x x pos
     * @param y y pos
     */
    readIdTexture(position) {
        const ratio = window.devicePixelRatio || 1;
        this.gl.bindFramebuffer(this.gl.READ_FRAMEBUFFER, this.idTexture);
        const readPixelBuffer = new Uint8Array([255, 255, 255, 255]); // -1
        this.gl.readPixels(
        // !Warning: x and y are optional in Position, need to check them
        position.x * ratio, position.y * ratio, 1, 1, this.gl.RGBA, this.gl.UNSIGNED_BYTE, readPixelBuffer);
        const objectID = utils_1.decodeRenderId(readPixelBuffer);
        return objectID;
    }
    /**
     * init WebGL texture for recording position of elements
     */
    initIdTexture() {
        const gl = this.gl;
        const pixelRatio = window.devicePixelRatio || 1;
        const screenWidth = this.width * pixelRatio;
        const screenHeight = this.height * pixelRatio;
        const fbo = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
        const idTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, idTexture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, screenWidth, screenHeight, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, idTexture, 0);
        // TODO: need simplify
        gl.drawBuffers([0].map((v) => v + gl.COLOR_ATTACHMENT0));
        const rbo = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, rbo);
        gl.clearColor(1, 1, 1, 1);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH24_STENCIL8, screenWidth, screenHeight);
        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, rbo);
        if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {
            throw new Error('Framebuffer generate failed');
        }
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        this.idTexture = fbo;
    }
}
exports.Renderer = Renderer;


/***/ }),

/***/ "./src/renderer/utils.ts":
/*!*******************************!*\
  !*** ./src/renderer/utils.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description utility functions for renderer
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeRenderId = exports.encodeRenderId = exports.extractAttributesFromShader = exports.createArrayBuffer = exports.createProgram = exports.compileShader = void 0;
/**
 * compile webgl shader
 * @param gl WebGL instance
 * @param shaderStr shader file in string
 * @param shaderType vertex or fragment shader
 */
function compileShader(gl, shaderStr, shaderType) {
    const shader = gl.createShader(shaderType);
    gl.shaderSource(shader, shaderStr);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw new Error('Shader compile failed: ' + gl.getShaderInfoLog(shader));
    }
    return shader;
}
exports.compileShader = compileShader;
/**
 * generate WebGL program
 * @param gl WebGL instance
 * @param vertShaderStr vertex shader in string format
 * @param fragShaderStr fragment shader in string format
 * @param attributes attributes
 */
function createProgram(gl, vertShaderStr, fragShaderStr, attributes) {
    const vertShader = compileShader(gl, vertShaderStr, gl.VERTEX_SHADER);
    const fragShader = compileShader(gl, fragShaderStr, gl.FRAGMENT_SHADER);
    const program = gl.createProgram();
    attributes.forEach((attr) => {
        gl.bindAttribLocation(program, attr.index, attr.name);
    });
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        throw new Error(`Could not link shaders: ${gl.getProgramInfoLog(program)}`);
    }
    return program;
}
exports.createProgram = createProgram;
/**
 * create WebGL array buffer given data array
 * @param gl WebGL context
 * @param data data to store in buffer
 * @returns WebGL buffer store given data
 */
function createArrayBuffer(gl, data) {
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.DYNAMIC_DRAW);
    return buffer;
}
exports.createArrayBuffer = createArrayBuffer;
/**
 * extract attributes from a shader sring
 * @param {string} shaderStr
 * @returns {RenderAttribute[]} attributes array
 */
function extractAttributesFromShader(shaderStr) {
    const matchings = shaderStr.match(/in\s.*;/g);
    return matchings.map((match, index) => {
        const name = match.split(' ')[2].slice(0, -1);
        const type = match.split(' ')[1];
        let size = 1;
        if (type.slice(0, 3) === 'vec') {
            size = Number(type.slice(-1));
        }
        let isBuildIn = false;
        if (name === 'inVertexPos') {
            isBuildIn = true;
        }
        return {
            name,
            size,
            index,
            isBuildIn
        };
    });
}
exports.extractAttributesFromShader = extractAttributesFromShader;
/**
 * encode a render id as color to pass in texture
 * @param id render id
 */
function encodeRenderId(id) {
    // split a large number by 8-bit: id = concat(a, b, g, r), and normalize them into (0, 1)
    const r = (id & 255) / 255.0;
    const g = ((id >> 8) & 255) / 255.0;
    const b = ((id >> 16) & 255) / 255.0;
    const a = ((id >> 24) & 255) / 255.0;
    return { r, g, b, a };
}
exports.encodeRenderId = encodeRenderId;
/**
 * decode pixel value to number
 * @param pixelVal a pixel's value on texture
 */
function decodeRenderId(pixelVal) {
    // parse normalized parts of id number, bit shift to origin position and concat
    const renderId = pixelVal[0] | (pixelVal[1] << 8) | (pixelVal[2] << 16) | (pixelVal[3] << 24);
    return renderId;
}
exports.decodeRenderId = decodeRenderId;


/***/ }),

/***/ "./src/utils/is.ts":
/*!*************************!*\
  !*** ./src/utils/is.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidId = void 0;
/**
 * Test whether a string can be a valid id of a Node.
 * @param {string} value: the string tobe tested
 * @returns {boolean}
 */
function isValidId(value) {
    return value !== undefined && typeof value === 'string' && value.length > 0;
}
exports.isValidId = isValidId;


/***/ }),

/***/ "./src/utils/map2.ts":
/*!***************************!*\
  !*** ./src/utils/map2.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Map2 is a Map data structure which maps two keys to one value.
 * @Usage same to Map data structure in ES6.
 * @dependences None
 */
Object.defineProperty(exports, "__esModule", { value: true });
const JOIN = String.fromCharCode(7);
const isKeys = (keys) => {
    return (keys instanceof Array &&
        keys.length === 2 &&
        keys.every((key) => key !== undefined && key !== null));
};
class Map2 {
    constructor(entries) {
        this.map = new Map();
        if (entries instanceof Array) {
            entries.forEach((entry) => {
                let [key, value] = entry;
                this.set(key, value);
            });
        }
    }
    get size() {
        return this.map.size;
    }
    delete(keys) {
        if (isKeys(keys)) {
            const key = keys.join(JOIN);
            const key_ = keys[1] + JOIN + keys[0];
            let map = this.map;
            map.delete(key);
            map.delete(key_);
        }
    }
    set(keys, value) {
        if (isKeys(keys)) {
            const key = keys.join(JOIN);
            const key_ = keys[1] + JOIN + keys[0];
            let map = this.map;
            if (!map.has(key_)) {
                map.set(key, value);
            }
            else {
                map.set(key_, value);
            }
        }
        return this;
    }
    get(keys) {
        if (isKeys(keys)) {
            const key = keys.join(JOIN);
            const key_ = keys[1] + JOIN + keys[0];
            return this.map.get(key) || this.map.get(key_);
        }
        else {
            return undefined;
        }
    }
    has(keys) {
        if (isKeys(keys)) {
            const key = keys.join(JOIN);
            const key_ = keys[1] + JOIN + keys[0];
            return this.map.has(key) || this.map.has(key_);
        }
        else {
            return false;
        }
    }
    forEach(func) {
        this.map.forEach((value, key) => {
            let keys = key.split(JOIN);
            func(value, keys, this);
        });
    }
    entries() {
        return [...this.map.entries()].map((entry) => {
            const key = entry[0].split(JOIN);
            const value = entry[1];
            return [key, value];
        });
    }
    keys() {
        let keys = [...this.map.keys()];
        return keys.map((key) => key.split(JOIN));
    }
    values() {
        return [...this.map.values()];
    }
}
exports.default = Map2;


/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description some utility functions
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformGraphPosition = void 0;
/**
 * given a graph data with position, return a copy of graph, with position transformed to center of given size
 * @param graph node link graph data
 * @param size graph size (max(width, height))
 * @param centerX x pos of graph center
 * @param centerY y pos of graph center
 */
function transformGraphPosition(graph, size, centerX, centerY) {
    const targetGraph = JSON.parse(JSON.stringify(graph));
    const xs = targetGraph.nodes.map((node) => node.x);
    const ys = targetGraph.nodes.map((node) => node.y);
    const xMin = Math.min(...xs);
    const xMax = Math.max(...xs);
    const yMin = Math.min(...ys);
    const yMax = Math.max(...ys);
    const xMid = (xMin + xMax) / 2;
    const yMid = (yMin + yMax) / 2;
    targetGraph.nodes.forEach((node) => {
        node.x = ((node.x - xMid) / (xMax - xMin)) * size + centerX;
        node.y = ((node.y - yMid) / (yMax - yMin)) * size + centerY;
    });
    return targetGraph;
}
exports.transformGraphPosition = transformGraphPosition;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZGlzcGF0Y2gvc3JjL2Rpc3BhdGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1kaXNwYXRjaC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWZvcmNlL3NyYy9jZW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWZvcmNlL3NyYy9jb2xsaWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1mb3JjZS9zcmMvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWZvcmNlL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZm9yY2Uvc3JjL2ppZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZm9yY2Uvc3JjL2xjZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZm9yY2Uvc3JjL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWZvcmNlL3NyYy9tYW55Qm9keS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZm9yY2Uvc3JjL3JhZGlhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZm9yY2Uvc3JjL3NpbXVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWZvcmNlL3NyYy94LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1mb3JjZS9zcmMveS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL2FkZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL2NvdmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1xdWFkdHJlZS9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL2V4dGVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL2ZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL3F1YWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9xdWFkdHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL3JlbW92ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL3Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9zaXplLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1xdWFkdHJlZS9zcmMvdmlzaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy92aXNpdEFmdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1xdWFkdHJlZS9zcmMveC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL3kuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRpbWVyL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdGltZXIvc3JjL2ludGVydmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10aW1lci9zcmMvdGltZW91dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdGltZXIvc3JjL3RpbWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWdzLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhc2V0L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhc2V0L21pc2VyYWJsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGFzZXQvcGF0ZW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyYWN0aW9uL2ludGVyYWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9sYWJlbC9sYWJlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L2QzLWZvcmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9yYW5kb20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpbmsudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL2VsZW1lbnRzL2xpbmsvZnJhZ21lbnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvZWxlbWVudHMvbGluay9pZC1mcmFnbWVudC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlci9lbGVtZW50cy9saW5rL2lkLXZlcnRleC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlci9lbGVtZW50cy9saW5rL3JlbmRlci1saW5rLnRzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlci9lbGVtZW50cy9saW5rL3ZlcnRleC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlci9lbGVtZW50cy9ub2RlL2ZyYWdtZW50Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL2VsZW1lbnRzL25vZGUvaWQtZnJhZ21lbnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvZWxlbWVudHMvbm9kZS9pZC12ZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvZWxlbWVudHMvbm9kZS9yZW5kZXItbm9kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvZWxlbWVudHMvbm9kZS92ZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvbWFwMi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQSxZQUFZOztBQUVaO0FB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QyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkUsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMxRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZFLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDeEUsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMzRSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzFFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkUsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMxRSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3pFLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUM3RSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEUsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMzRSxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzVFLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDMUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUN2RSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQ3ZFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkUsRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtLQUNqRjtJQUVELEtBQUssRUFBRTtRQUNILEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQy9ELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMvQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2hELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDMUQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDeEQsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RCxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDeEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQzdELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0s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TUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDaEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQy9DLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDL0MsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNoRCxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDaEQsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMvQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUM5QyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzlDLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzNELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2hELEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQy9DLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNoRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUM1RCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzFELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDMUQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDaEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMvQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hELEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFB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QUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFO1FBQzNDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUU7UUFDM0MsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUU7UUFDM0MsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUU7UUFDM0MsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxF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S0FBSyxDQUFlO1FBQ3hGLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQ3RELElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUN4RCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVTtRQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUTtRQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLO1FBQ25ELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU07UUFDckQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVU7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFNBQVM7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLE1BQU07UUFFdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTTtRQUNsRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRO1FBQ3RELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVc7UUFDNUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLGFBQWEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxD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LENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBRTVFLE1BQU0sYUFBYSxHQUFHLHNCQUFjLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyx3Q0FBd0M7WUFDdkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQztZQUNqRixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQztZQUNyRixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQztZQUNyRixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQztZQUVyRixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRztnQkFDM0MsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hCLFlBQVks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LENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkUsTUFBTSxFQUFFLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEQsTUFBTSxFQUFFLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM1QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzVCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDNUIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUU1QixNQUFNLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQzlCLE1BQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7SUFFOUIsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUMvQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLE9BQU87UUFDM0QsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxPQUFPO0lBQy9ELENBQUMsQ0FBQztJQUVGLE9BQU8sV0FBVztBQUN0QixDQUFDO0FBdkJELHdEQXVCQyIsImZpbGUiOiJOZXRWLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJ2YXIgbm9vcCA9IHt2YWx1ZTogKCkgPT4ge319O1xuXG5mdW5jdGlvbiBkaXNwYXRjaCgpIHtcbiAgZm9yICh2YXIgaSA9IDAsIG4gPSBhcmd1bWVudHMubGVuZ3RoLCBfID0ge30sIHQ7IGkgPCBuOyArK2kpIHtcbiAgICBpZiAoISh0ID0gYXJndW1lbnRzW2ldICsgXCJcIikgfHwgKHQgaW4gXykgfHwgL1tcXHMuXS8udGVzdCh0KSkgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCB0eXBlOiBcIiArIHQpO1xuICAgIF9bdF0gPSBbXTtcbiAgfVxuICByZXR1cm4gbmV3IERpc3BhdGNoKF8pO1xufVxuXG5mdW5jdGlvbiBEaXNwYXRjaChfKSB7XG4gIHRoaXMuXyA9IF87XG59XG5cbmZ1bmN0aW9uIHBhcnNlVHlwZW5hbWVzKHR5cGVuYW1lcywgdHlwZXMpIHtcbiAgcmV0dXJuIHR5cGVuYW1lcy50cmltKCkuc3BsaXQoL158XFxzKy8pLm1hcChmdW5jdGlvbih0KSB7XG4gICAgdmFyIG5hbWUgPSBcIlwiLCBpID0gdC5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAoaSA+PSAwKSBuYW1lID0gdC5zbGljZShpICsgMSksIHQgPSB0LnNsaWNlKDAsIGkpO1xuICAgIGlmICh0ICYmICF0eXBlcy5oYXNPd25Qcm9wZXJ0eSh0KSkgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biB0eXBlOiBcIiArIHQpO1xuICAgIHJldHVybiB7dHlwZTogdCwgbmFtZTogbmFtZX07XG4gIH0pO1xufVxuXG5EaXNwYXRjaC5wcm90b3R5cGUgPSBkaXNwYXRjaC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBEaXNwYXRjaCxcbiAgb246IGZ1bmN0aW9uKHR5cGVuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciBfID0gdGhpcy5fLFxuICAgICAgICBUID0gcGFyc2VUeXBlbmFtZXModHlwZW5hbWUgKyBcIlwiLCBfKSxcbiAgICAgICAgdCxcbiAgICAgICAgaSA9IC0xLFxuICAgICAgICBuID0gVC5sZW5ndGg7XG5cbiAgICAvLyBJZiBubyBjYWxsYmFjayB3YXMgc3BlY2lmaWVkLCByZXR1cm4gdGhlIGNhbGxiYWNrIG9mIHRoZSBnaXZlbiB0eXBlIGFuZCBuYW1lLlxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgICAgd2hpbGUgKCsraSA8IG4pIGlmICgodCA9ICh0eXBlbmFtZSA9IFRbaV0pLnR5cGUpICYmICh0ID0gZ2V0KF9bdF0sIHR5cGVuYW1lLm5hbWUpKSkgcmV0dXJuIHQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgYSB0eXBlIHdhcyBzcGVjaWZpZWQsIHNldCB0aGUgY2FsbGJhY2sgZm9yIHRoZSBnaXZlbiB0eXBlIGFuZCBuYW1lLlxuICAgIC8vIE90aGVyd2lzZSwgaWYgYSBudWxsIGNhbGxiYWNrIHdhcyBzcGVjaWZpZWQsIHJlbW92ZSBjYWxsYmFja3Mgb2YgdGhlIGdpdmVuIG5hbWUuXG4gICAgaWYgKGNhbGxiYWNrICE9IG51bGwgJiYgdHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgY2FsbGJhY2s6IFwiICsgY2FsbGJhY2spO1xuICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICBpZiAodCA9ICh0eXBlbmFtZSA9IFRbaV0pLnR5cGUpIF9bdF0gPSBzZXQoX1t0XSwgdHlwZW5hbWUubmFtZSwgY2FsbGJhY2spO1xuICAgICAgZWxzZSBpZiAoY2FsbGJhY2sgPT0gbnVsbCkgZm9yICh0IGluIF8pIF9bdF0gPSBzZXQoX1t0XSwgdHlwZW5hbWUubmFtZSwgbnVsbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIGNvcHk6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb3B5ID0ge30sIF8gPSB0aGlzLl87XG4gICAgZm9yICh2YXIgdCBpbiBfKSBjb3B5W3RdID0gX1t0XS5zbGljZSgpO1xuICAgIHJldHVybiBuZXcgRGlzcGF0Y2goY29weSk7XG4gIH0sXG4gIGNhbGw6IGZ1bmN0aW9uKHR5cGUsIHRoYXQpIHtcbiAgICBpZiAoKG4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMikgPiAwKSBmb3IgKHZhciBhcmdzID0gbmV3IEFycmF5KG4pLCBpID0gMCwgbiwgdDsgaSA8IG47ICsraSkgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgaWYgKCF0aGlzLl8uaGFzT3duUHJvcGVydHkodHlwZSkpIHRocm93IG5ldyBFcnJvcihcInVua25vd24gdHlwZTogXCIgKyB0eXBlKTtcbiAgICBmb3IgKHQgPSB0aGlzLl9bdHlwZV0sIGkgPSAwLCBuID0gdC5sZW5ndGg7IGkgPCBuOyArK2kpIHRbaV0udmFsdWUuYXBwbHkodGhhdCwgYXJncyk7XG4gIH0sXG4gIGFwcGx5OiBmdW5jdGlvbih0eXBlLCB0aGF0LCBhcmdzKSB7XG4gICAgaWYgKCF0aGlzLl8uaGFzT3duUHJvcGVydHkodHlwZSkpIHRocm93IG5ldyBFcnJvcihcInVua25vd24gdHlwZTogXCIgKyB0eXBlKTtcbiAgICBmb3IgKHZhciB0ID0gdGhpcy5fW3R5cGVdLCBpID0gMCwgbiA9IHQubGVuZ3RoOyBpIDwgbjsgKytpKSB0W2ldLnZhbHVlLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBnZXQodHlwZSwgbmFtZSkge1xuICBmb3IgKHZhciBpID0gMCwgbiA9IHR5cGUubGVuZ3RoLCBjOyBpIDwgbjsgKytpKSB7XG4gICAgaWYgKChjID0gdHlwZVtpXSkubmFtZSA9PT0gbmFtZSkge1xuICAgICAgcmV0dXJuIGMudmFsdWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldCh0eXBlLCBuYW1lLCBjYWxsYmFjaykge1xuICBmb3IgKHZhciBpID0gMCwgbiA9IHR5cGUubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgaWYgKHR5cGVbaV0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgdHlwZVtpXSA9IG5vb3AsIHR5cGUgPSB0eXBlLnNsaWNlKDAsIGkpLmNvbmNhdCh0eXBlLnNsaWNlKGkgKyAxKSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgaWYgKGNhbGxiYWNrICE9IG51bGwpIHR5cGUucHVzaCh7bmFtZTogbmFtZSwgdmFsdWU6IGNhbGxiYWNrfSk7XG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwYXRjaDtcbiIsImV4cG9ydCB7ZGVmYXVsdCBhcyBkaXNwYXRjaH0gZnJvbSBcIi4vZGlzcGF0Y2guanNcIjtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgsIHkpIHtcbiAgdmFyIG5vZGVzLCBzdHJlbmd0aCA9IDE7XG5cbiAgaWYgKHggPT0gbnVsbCkgeCA9IDA7XG4gIGlmICh5ID09IG51bGwpIHkgPSAwO1xuXG4gIGZ1bmN0aW9uIGZvcmNlKCkge1xuICAgIHZhciBpLFxuICAgICAgICBuID0gbm9kZXMubGVuZ3RoLFxuICAgICAgICBub2RlLFxuICAgICAgICBzeCA9IDAsXG4gICAgICAgIHN5ID0gMDtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIG5vZGUgPSBub2Rlc1tpXSwgc3ggKz0gbm9kZS54LCBzeSArPSBub2RlLnk7XG4gICAgfVxuXG4gICAgZm9yIChzeCA9IChzeCAvIG4gLSB4KSAqIHN0cmVuZ3RoLCBzeSA9IChzeSAvIG4gLSB5KSAqIHN0cmVuZ3RoLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgbm9kZSA9IG5vZGVzW2ldLCBub2RlLnggLT0gc3gsIG5vZGUueSAtPSBzeTtcbiAgICB9XG4gIH1cblxuICBmb3JjZS5pbml0aWFsaXplID0gZnVuY3Rpb24oXykge1xuICAgIG5vZGVzID0gXztcbiAgfTtcblxuICBmb3JjZS54ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHggPSArXywgZm9yY2UpIDogeDtcbiAgfTtcblxuICBmb3JjZS55ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHkgPSArXywgZm9yY2UpIDogeTtcbiAgfTtcblxuICBmb3JjZS5zdHJlbmd0aCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzdHJlbmd0aCA9ICtfLCBmb3JjZSkgOiBzdHJlbmd0aDtcbiAgfTtcblxuICByZXR1cm4gZm9yY2U7XG59XG4iLCJpbXBvcnQge3F1YWR0cmVlfSBmcm9tIFwiZDMtcXVhZHRyZWVcIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudC5qc1wiO1xuaW1wb3J0IGppZ2dsZSBmcm9tIFwiLi9qaWdnbGUuanNcIjtcblxuZnVuY3Rpb24geChkKSB7XG4gIHJldHVybiBkLnggKyBkLnZ4O1xufVxuXG5mdW5jdGlvbiB5KGQpIHtcbiAgcmV0dXJuIGQueSArIGQudnk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHJhZGl1cykge1xuICB2YXIgbm9kZXMsXG4gICAgICByYWRpaSxcbiAgICAgIHJhbmRvbSxcbiAgICAgIHN0cmVuZ3RoID0gMSxcbiAgICAgIGl0ZXJhdGlvbnMgPSAxO1xuXG4gIGlmICh0eXBlb2YgcmFkaXVzICE9PSBcImZ1bmN0aW9uXCIpIHJhZGl1cyA9IGNvbnN0YW50KHJhZGl1cyA9PSBudWxsID8gMSA6ICtyYWRpdXMpO1xuXG4gIGZ1bmN0aW9uIGZvcmNlKCkge1xuICAgIHZhciBpLCBuID0gbm9kZXMubGVuZ3RoLFxuICAgICAgICB0cmVlLFxuICAgICAgICBub2RlLFxuICAgICAgICB4aSxcbiAgICAgICAgeWksXG4gICAgICAgIHJpLFxuICAgICAgICByaTI7XG5cbiAgICBmb3IgKHZhciBrID0gMDsgayA8IGl0ZXJhdGlvbnM7ICsraykge1xuICAgICAgdHJlZSA9IHF1YWR0cmVlKG5vZGVzLCB4LCB5KS52aXNpdEFmdGVyKHByZXBhcmUpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgICBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIHJpID0gcmFkaWlbbm9kZS5pbmRleF0sIHJpMiA9IHJpICogcmk7XG4gICAgICAgIHhpID0gbm9kZS54ICsgbm9kZS52eDtcbiAgICAgICAgeWkgPSBub2RlLnkgKyBub2RlLnZ5O1xuICAgICAgICB0cmVlLnZpc2l0KGFwcGx5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBseShxdWFkLCB4MCwgeTAsIHgxLCB5MSkge1xuICAgICAgdmFyIGRhdGEgPSBxdWFkLmRhdGEsIHJqID0gcXVhZC5yLCByID0gcmkgKyByajtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhLmluZGV4ID4gbm9kZS5pbmRleCkge1xuICAgICAgICAgIHZhciB4ID0geGkgLSBkYXRhLnggLSBkYXRhLnZ4LFxuICAgICAgICAgICAgICB5ID0geWkgLSBkYXRhLnkgLSBkYXRhLnZ5LFxuICAgICAgICAgICAgICBsID0geCAqIHggKyB5ICogeTtcbiAgICAgICAgICBpZiAobCA8IHIgKiByKSB7XG4gICAgICAgICAgICBpZiAoeCA9PT0gMCkgeCA9IGppZ2dsZShyYW5kb20pLCBsICs9IHggKiB4O1xuICAgICAgICAgICAgaWYgKHkgPT09IDApIHkgPSBqaWdnbGUocmFuZG9tKSwgbCArPSB5ICogeTtcbiAgICAgICAgICAgIGwgPSAociAtIChsID0gTWF0aC5zcXJ0KGwpKSkgLyBsICogc3RyZW5ndGg7XG4gICAgICAgICAgICBub2RlLnZ4ICs9ICh4ICo9IGwpICogKHIgPSAocmogKj0gcmopIC8gKHJpMiArIHJqKSk7XG4gICAgICAgICAgICBub2RlLnZ5ICs9ICh5ICo9IGwpICogcjtcbiAgICAgICAgICAgIGRhdGEudnggLT0geCAqIChyID0gMSAtIHIpO1xuICAgICAgICAgICAgZGF0YS52eSAtPSB5ICogcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHgwID4geGkgKyByIHx8IHgxIDwgeGkgLSByIHx8IHkwID4geWkgKyByIHx8IHkxIDwgeWkgLSByO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXBhcmUocXVhZCkge1xuICAgIGlmIChxdWFkLmRhdGEpIHJldHVybiBxdWFkLnIgPSByYWRpaVtxdWFkLmRhdGEuaW5kZXhdO1xuICAgIGZvciAodmFyIGkgPSBxdWFkLnIgPSAwOyBpIDwgNDsgKytpKSB7XG4gICAgICBpZiAocXVhZFtpXSAmJiBxdWFkW2ldLnIgPiBxdWFkLnIpIHtcbiAgICAgICAgcXVhZC5yID0gcXVhZFtpXS5yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgaWYgKCFub2RlcykgcmV0dXJuO1xuICAgIHZhciBpLCBuID0gbm9kZXMubGVuZ3RoLCBub2RlO1xuICAgIHJhZGlpID0gbmV3IEFycmF5KG4pO1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIG5vZGUgPSBub2Rlc1tpXSwgcmFkaWlbbm9kZS5pbmRleF0gPSArcmFkaXVzKG5vZGUsIGksIG5vZGVzKTtcbiAgfVxuXG4gIGZvcmNlLmluaXRpYWxpemUgPSBmdW5jdGlvbihfbm9kZXMsIF9yYW5kb20pIHtcbiAgICBub2RlcyA9IF9ub2RlcztcbiAgICByYW5kb20gPSBfcmFuZG9tO1xuICAgIGluaXRpYWxpemUoKTtcbiAgfTtcblxuICBmb3JjZS5pdGVyYXRpb25zID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGl0ZXJhdGlvbnMgPSArXywgZm9yY2UpIDogaXRlcmF0aW9ucztcbiAgfTtcblxuICBmb3JjZS5zdHJlbmd0aCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzdHJlbmd0aCA9ICtfLCBmb3JjZSkgOiBzdHJlbmd0aDtcbiAgfTtcblxuICBmb3JjZS5yYWRpdXMgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocmFkaXVzID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGluaXRpYWxpemUoKSwgZm9yY2UpIDogcmFkaXVzO1xuICB9O1xuXG4gIHJldHVybiBmb3JjZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB4O1xuICB9O1xufVxuIiwiZXhwb3J0IHtkZWZhdWx0IGFzIGZvcmNlQ2VudGVyfSBmcm9tIFwiLi9jZW50ZXIuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBmb3JjZUNvbGxpZGV9IGZyb20gXCIuL2NvbGxpZGUuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBmb3JjZUxpbmt9IGZyb20gXCIuL2xpbmsuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBmb3JjZU1hbnlCb2R5fSBmcm9tIFwiLi9tYW55Qm9keS5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGZvcmNlUmFkaWFsfSBmcm9tIFwiLi9yYWRpYWwuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBmb3JjZVNpbXVsYXRpb259IGZyb20gXCIuL3NpbXVsYXRpb24uanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBmb3JjZVh9IGZyb20gXCIuL3guanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBmb3JjZVl9IGZyb20gXCIuL3kuanNcIjtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHJhbmRvbSkge1xuICByZXR1cm4gKHJhbmRvbSgpIC0gMC41KSAqIDFlLTY7XG59XG4iLCIvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MaW5lYXJfY29uZ3J1ZW50aWFsX2dlbmVyYXRvciNQYXJhbWV0ZXJzX2luX2NvbW1vbl91c2VcbmNvbnN0IGEgPSAxNjY0NTI1O1xuY29uc3QgYyA9IDEwMTM5MDQyMjM7XG5jb25zdCBtID0gNDI5NDk2NzI5NjsgLy8gMl4zMlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgbGV0IHMgPSAxO1xuICByZXR1cm4gKCkgPT4gKHMgPSAoYSAqIHMgKyBjKSAlIG0pIC8gbTtcbn1cbiIsImltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudC5qc1wiO1xuaW1wb3J0IGppZ2dsZSBmcm9tIFwiLi9qaWdnbGUuanNcIjtcblxuZnVuY3Rpb24gaW5kZXgoZCkge1xuICByZXR1cm4gZC5pbmRleDtcbn1cblxuZnVuY3Rpb24gZmluZChub2RlQnlJZCwgbm9kZUlkKSB7XG4gIHZhciBub2RlID0gbm9kZUJ5SWQuZ2V0KG5vZGVJZCk7XG4gIGlmICghbm9kZSkgdGhyb3cgbmV3IEVycm9yKFwibm9kZSBub3QgZm91bmQ6IFwiICsgbm9kZUlkKTtcbiAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGxpbmtzKSB7XG4gIHZhciBpZCA9IGluZGV4LFxuICAgICAgc3RyZW5ndGggPSBkZWZhdWx0U3RyZW5ndGgsXG4gICAgICBzdHJlbmd0aHMsXG4gICAgICBkaXN0YW5jZSA9IGNvbnN0YW50KDMwKSxcbiAgICAgIGRpc3RhbmNlcyxcbiAgICAgIG5vZGVzLFxuICAgICAgY291bnQsXG4gICAgICBiaWFzLFxuICAgICAgcmFuZG9tLFxuICAgICAgaXRlcmF0aW9ucyA9IDE7XG5cbiAgaWYgKGxpbmtzID09IG51bGwpIGxpbmtzID0gW107XG5cbiAgZnVuY3Rpb24gZGVmYXVsdFN0cmVuZ3RoKGxpbmspIHtcbiAgICByZXR1cm4gMSAvIE1hdGgubWluKGNvdW50W2xpbmsuc291cmNlLmluZGV4XSwgY291bnRbbGluay50YXJnZXQuaW5kZXhdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcmNlKGFscGhhKSB7XG4gICAgZm9yICh2YXIgayA9IDAsIG4gPSBsaW5rcy5sZW5ndGg7IGsgPCBpdGVyYXRpb25zOyArK2spIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsaW5rLCBzb3VyY2UsIHRhcmdldCwgeCwgeSwgbCwgYjsgaSA8IG47ICsraSkge1xuICAgICAgICBsaW5rID0gbGlua3NbaV0sIHNvdXJjZSA9IGxpbmsuc291cmNlLCB0YXJnZXQgPSBsaW5rLnRhcmdldDtcbiAgICAgICAgeCA9IHRhcmdldC54ICsgdGFyZ2V0LnZ4IC0gc291cmNlLnggLSBzb3VyY2UudnggfHwgamlnZ2xlKHJhbmRvbSk7XG4gICAgICAgIHkgPSB0YXJnZXQueSArIHRhcmdldC52eSAtIHNvdXJjZS55IC0gc291cmNlLnZ5IHx8IGppZ2dsZShyYW5kb20pO1xuICAgICAgICBsID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICAgICAgICBsID0gKGwgLSBkaXN0YW5jZXNbaV0pIC8gbCAqIGFscGhhICogc3RyZW5ndGhzW2ldO1xuICAgICAgICB4ICo9IGwsIHkgKj0gbDtcbiAgICAgICAgdGFyZ2V0LnZ4IC09IHggKiAoYiA9IGJpYXNbaV0pO1xuICAgICAgICB0YXJnZXQudnkgLT0geSAqIGI7XG4gICAgICAgIHNvdXJjZS52eCArPSB4ICogKGIgPSAxIC0gYik7XG4gICAgICAgIHNvdXJjZS52eSArPSB5ICogYjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIGlmICghbm9kZXMpIHJldHVybjtcblxuICAgIHZhciBpLFxuICAgICAgICBuID0gbm9kZXMubGVuZ3RoLFxuICAgICAgICBtID0gbGlua3MubGVuZ3RoLFxuICAgICAgICBub2RlQnlJZCA9IG5ldyBNYXAobm9kZXMubWFwKChkLCBpKSA9PiBbaWQoZCwgaSwgbm9kZXMpLCBkXSkpLFxuICAgICAgICBsaW5rO1xuXG4gICAgZm9yIChpID0gMCwgY291bnQgPSBuZXcgQXJyYXkobik7IGkgPCBtOyArK2kpIHtcbiAgICAgIGxpbmsgPSBsaW5rc1tpXSwgbGluay5pbmRleCA9IGk7XG4gICAgICBpZiAodHlwZW9mIGxpbmsuc291cmNlICE9PSBcIm9iamVjdFwiKSBsaW5rLnNvdXJjZSA9IGZpbmQobm9kZUJ5SWQsIGxpbmsuc291cmNlKTtcbiAgICAgIGlmICh0eXBlb2YgbGluay50YXJnZXQgIT09IFwib2JqZWN0XCIpIGxpbmsudGFyZ2V0ID0gZmluZChub2RlQnlJZCwgbGluay50YXJnZXQpO1xuICAgICAgY291bnRbbGluay5zb3VyY2UuaW5kZXhdID0gKGNvdW50W2xpbmsuc291cmNlLmluZGV4XSB8fCAwKSArIDE7XG4gICAgICBjb3VudFtsaW5rLnRhcmdldC5pbmRleF0gPSAoY291bnRbbGluay50YXJnZXQuaW5kZXhdIHx8IDApICsgMTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwLCBiaWFzID0gbmV3IEFycmF5KG0pOyBpIDwgbTsgKytpKSB7XG4gICAgICBsaW5rID0gbGlua3NbaV0sIGJpYXNbaV0gPSBjb3VudFtsaW5rLnNvdXJjZS5pbmRleF0gLyAoY291bnRbbGluay5zb3VyY2UuaW5kZXhdICsgY291bnRbbGluay50YXJnZXQuaW5kZXhdKTtcbiAgICB9XG5cbiAgICBzdHJlbmd0aHMgPSBuZXcgQXJyYXkobSksIGluaXRpYWxpemVTdHJlbmd0aCgpO1xuICAgIGRpc3RhbmNlcyA9IG5ldyBBcnJheShtKSwgaW5pdGlhbGl6ZURpc3RhbmNlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplU3RyZW5ndGgoKSB7XG4gICAgaWYgKCFub2RlcykgcmV0dXJuO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIG4gPSBsaW5rcy5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgIHN0cmVuZ3Roc1tpXSA9ICtzdHJlbmd0aChsaW5rc1tpXSwgaSwgbGlua3MpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVEaXN0YW5jZSgpIHtcbiAgICBpZiAoIW5vZGVzKSByZXR1cm47XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbiA9IGxpbmtzLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgZGlzdGFuY2VzW2ldID0gK2Rpc3RhbmNlKGxpbmtzW2ldLCBpLCBsaW5rcyk7XG4gICAgfVxuICB9XG5cbiAgZm9yY2UuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKF9ub2RlcywgX3JhbmRvbSkge1xuICAgIG5vZGVzID0gX25vZGVzO1xuICAgIHJhbmRvbSA9IF9yYW5kb207XG4gICAgaW5pdGlhbGl6ZSgpO1xuICB9O1xuXG4gIGZvcmNlLmxpbmtzID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGxpbmtzID0gXywgaW5pdGlhbGl6ZSgpLCBmb3JjZSkgOiBsaW5rcztcbiAgfTtcblxuICBmb3JjZS5pZCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChpZCA9IF8sIGZvcmNlKSA6IGlkO1xuICB9O1xuXG4gIGZvcmNlLml0ZXJhdGlvbnMgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoaXRlcmF0aW9ucyA9ICtfLCBmb3JjZSkgOiBpdGVyYXRpb25zO1xuICB9O1xuXG4gIGZvcmNlLnN0cmVuZ3RoID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHN0cmVuZ3RoID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGluaXRpYWxpemVTdHJlbmd0aCgpLCBmb3JjZSkgOiBzdHJlbmd0aDtcbiAgfTtcblxuICBmb3JjZS5kaXN0YW5jZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChkaXN0YW5jZSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBpbml0aWFsaXplRGlzdGFuY2UoKSwgZm9yY2UpIDogZGlzdGFuY2U7XG4gIH07XG5cbiAgcmV0dXJuIGZvcmNlO1xufVxuIiwiaW1wb3J0IHtxdWFkdHJlZX0gZnJvbSBcImQzLXF1YWR0cmVlXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnQuanNcIjtcbmltcG9ydCBqaWdnbGUgZnJvbSBcIi4vamlnZ2xlLmpzXCI7XG5pbXBvcnQge3gsIHl9IGZyb20gXCIuL3NpbXVsYXRpb24uanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBub2RlcyxcbiAgICAgIG5vZGUsXG4gICAgICByYW5kb20sXG4gICAgICBhbHBoYSxcbiAgICAgIHN0cmVuZ3RoID0gY29uc3RhbnQoLTMwKSxcbiAgICAgIHN0cmVuZ3RocyxcbiAgICAgIGRpc3RhbmNlTWluMiA9IDEsXG4gICAgICBkaXN0YW5jZU1heDIgPSBJbmZpbml0eSxcbiAgICAgIHRoZXRhMiA9IDAuODE7XG5cbiAgZnVuY3Rpb24gZm9yY2UoXykge1xuICAgIHZhciBpLCBuID0gbm9kZXMubGVuZ3RoLCB0cmVlID0gcXVhZHRyZWUobm9kZXMsIHgsIHkpLnZpc2l0QWZ0ZXIoYWNjdW11bGF0ZSk7XG4gICAgZm9yIChhbHBoYSA9IF8sIGkgPSAwOyBpIDwgbjsgKytpKSBub2RlID0gbm9kZXNbaV0sIHRyZWUudmlzaXQoYXBwbHkpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAoIW5vZGVzKSByZXR1cm47XG4gICAgdmFyIGksIG4gPSBub2Rlcy5sZW5ndGgsIG5vZGU7XG4gICAgc3RyZW5ndGhzID0gbmV3IEFycmF5KG4pO1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIG5vZGUgPSBub2Rlc1tpXSwgc3RyZW5ndGhzW25vZGUuaW5kZXhdID0gK3N0cmVuZ3RoKG5vZGUsIGksIG5vZGVzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFjY3VtdWxhdGUocXVhZCkge1xuICAgIHZhciBzdHJlbmd0aCA9IDAsIHEsIGMsIHdlaWdodCA9IDAsIHgsIHksIGk7XG5cbiAgICAvLyBGb3IgaW50ZXJuYWwgbm9kZXMsIGFjY3VtdWxhdGUgZm9yY2VzIGZyb20gY2hpbGQgcXVhZHJhbnRzLlxuICAgIGlmIChxdWFkLmxlbmd0aCkge1xuICAgICAgZm9yICh4ID0geSA9IGkgPSAwOyBpIDwgNDsgKytpKSB7XG4gICAgICAgIGlmICgocSA9IHF1YWRbaV0pICYmIChjID0gTWF0aC5hYnMocS52YWx1ZSkpKSB7XG4gICAgICAgICAgc3RyZW5ndGggKz0gcS52YWx1ZSwgd2VpZ2h0ICs9IGMsIHggKz0gYyAqIHEueCwgeSArPSBjICogcS55O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBxdWFkLnggPSB4IC8gd2VpZ2h0O1xuICAgICAgcXVhZC55ID0geSAvIHdlaWdodDtcbiAgICB9XG5cbiAgICAvLyBGb3IgbGVhZiBub2RlcywgYWNjdW11bGF0ZSBmb3JjZXMgZnJvbSBjb2luY2lkZW50IHF1YWRyYW50cy5cbiAgICBlbHNlIHtcbiAgICAgIHEgPSBxdWFkO1xuICAgICAgcS54ID0gcS5kYXRhLng7XG4gICAgICBxLnkgPSBxLmRhdGEueTtcbiAgICAgIGRvIHN0cmVuZ3RoICs9IHN0cmVuZ3Roc1txLmRhdGEuaW5kZXhdO1xuICAgICAgd2hpbGUgKHEgPSBxLm5leHQpO1xuICAgIH1cblxuICAgIHF1YWQudmFsdWUgPSBzdHJlbmd0aDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5KHF1YWQsIHgxLCBfLCB4Mikge1xuICAgIGlmICghcXVhZC52YWx1ZSkgcmV0dXJuIHRydWU7XG5cbiAgICB2YXIgeCA9IHF1YWQueCAtIG5vZGUueCxcbiAgICAgICAgeSA9IHF1YWQueSAtIG5vZGUueSxcbiAgICAgICAgdyA9IHgyIC0geDEsXG4gICAgICAgIGwgPSB4ICogeCArIHkgKiB5O1xuXG4gICAgLy8gQXBwbHkgdGhlIEJhcm5lcy1IdXQgYXBwcm94aW1hdGlvbiBpZiBwb3NzaWJsZS5cbiAgICAvLyBMaW1pdCBmb3JjZXMgZm9yIHZlcnkgY2xvc2Ugbm9kZXM7IHJhbmRvbWl6ZSBkaXJlY3Rpb24gaWYgY29pbmNpZGVudC5cbiAgICBpZiAodyAqIHcgLyB0aGV0YTIgPCBsKSB7XG4gICAgICBpZiAobCA8IGRpc3RhbmNlTWF4Mikge1xuICAgICAgICBpZiAoeCA9PT0gMCkgeCA9IGppZ2dsZShyYW5kb20pLCBsICs9IHggKiB4O1xuICAgICAgICBpZiAoeSA9PT0gMCkgeSA9IGppZ2dsZShyYW5kb20pLCBsICs9IHkgKiB5O1xuICAgICAgICBpZiAobCA8IGRpc3RhbmNlTWluMikgbCA9IE1hdGguc3FydChkaXN0YW5jZU1pbjIgKiBsKTtcbiAgICAgICAgbm9kZS52eCArPSB4ICogcXVhZC52YWx1ZSAqIGFscGhhIC8gbDtcbiAgICAgICAgbm9kZS52eSArPSB5ICogcXVhZC52YWx1ZSAqIGFscGhhIC8gbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSwgcHJvY2VzcyBwb2ludHMgZGlyZWN0bHkuXG4gICAgZWxzZSBpZiAocXVhZC5sZW5ndGggfHwgbCA+PSBkaXN0YW5jZU1heDIpIHJldHVybjtcblxuICAgIC8vIExpbWl0IGZvcmNlcyBmb3IgdmVyeSBjbG9zZSBub2RlczsgcmFuZG9taXplIGRpcmVjdGlvbiBpZiBjb2luY2lkZW50LlxuICAgIGlmIChxdWFkLmRhdGEgIT09IG5vZGUgfHwgcXVhZC5uZXh0KSB7XG4gICAgICBpZiAoeCA9PT0gMCkgeCA9IGppZ2dsZShyYW5kb20pLCBsICs9IHggKiB4O1xuICAgICAgaWYgKHkgPT09IDApIHkgPSBqaWdnbGUocmFuZG9tKSwgbCArPSB5ICogeTtcbiAgICAgIGlmIChsIDwgZGlzdGFuY2VNaW4yKSBsID0gTWF0aC5zcXJ0KGRpc3RhbmNlTWluMiAqIGwpO1xuICAgIH1cblxuICAgIGRvIGlmIChxdWFkLmRhdGEgIT09IG5vZGUpIHtcbiAgICAgIHcgPSBzdHJlbmd0aHNbcXVhZC5kYXRhLmluZGV4XSAqIGFscGhhIC8gbDtcbiAgICAgIG5vZGUudnggKz0geCAqIHc7XG4gICAgICBub2RlLnZ5ICs9IHkgKiB3O1xuICAgIH0gd2hpbGUgKHF1YWQgPSBxdWFkLm5leHQpO1xuICB9XG5cbiAgZm9yY2UuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKF9ub2RlcywgX3JhbmRvbSkge1xuICAgIG5vZGVzID0gX25vZGVzO1xuICAgIHJhbmRvbSA9IF9yYW5kb207XG4gICAgaW5pdGlhbGl6ZSgpO1xuICB9O1xuXG4gIGZvcmNlLnN0cmVuZ3RoID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHN0cmVuZ3RoID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGluaXRpYWxpemUoKSwgZm9yY2UpIDogc3RyZW5ndGg7XG4gIH07XG5cbiAgZm9yY2UuZGlzdGFuY2VNaW4gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZGlzdGFuY2VNaW4yID0gXyAqIF8sIGZvcmNlKSA6IE1hdGguc3FydChkaXN0YW5jZU1pbjIpO1xuICB9O1xuXG4gIGZvcmNlLmRpc3RhbmNlTWF4ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGRpc3RhbmNlTWF4MiA9IF8gKiBfLCBmb3JjZSkgOiBNYXRoLnNxcnQoZGlzdGFuY2VNYXgyKTtcbiAgfTtcblxuICBmb3JjZS50aGV0YSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0aGV0YTIgPSBfICogXywgZm9yY2UpIDogTWF0aC5zcXJ0KHRoZXRhMik7XG4gIH07XG5cbiAgcmV0dXJuIGZvcmNlO1xufVxuIiwiaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHJhZGl1cywgeCwgeSkge1xuICB2YXIgbm9kZXMsXG4gICAgICBzdHJlbmd0aCA9IGNvbnN0YW50KDAuMSksXG4gICAgICBzdHJlbmd0aHMsXG4gICAgICByYWRpdXNlcztcblxuICBpZiAodHlwZW9mIHJhZGl1cyAhPT0gXCJmdW5jdGlvblwiKSByYWRpdXMgPSBjb25zdGFudCgrcmFkaXVzKTtcbiAgaWYgKHggPT0gbnVsbCkgeCA9IDA7XG4gIGlmICh5ID09IG51bGwpIHkgPSAwO1xuXG4gIGZ1bmN0aW9uIGZvcmNlKGFscGhhKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIG4gPSBub2Rlcy5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgIHZhciBub2RlID0gbm9kZXNbaV0sXG4gICAgICAgICAgZHggPSBub2RlLnggLSB4IHx8IDFlLTYsXG4gICAgICAgICAgZHkgPSBub2RlLnkgLSB5IHx8IDFlLTYsXG4gICAgICAgICAgciA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSksXG4gICAgICAgICAgayA9IChyYWRpdXNlc1tpXSAtIHIpICogc3RyZW5ndGhzW2ldICogYWxwaGEgLyByO1xuICAgICAgbm9kZS52eCArPSBkeCAqIGs7XG4gICAgICBub2RlLnZ5ICs9IGR5ICogaztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIGlmICghbm9kZXMpIHJldHVybjtcbiAgICB2YXIgaSwgbiA9IG5vZGVzLmxlbmd0aDtcbiAgICBzdHJlbmd0aHMgPSBuZXcgQXJyYXkobik7XG4gICAgcmFkaXVzZXMgPSBuZXcgQXJyYXkobik7XG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgcmFkaXVzZXNbaV0gPSArcmFkaXVzKG5vZGVzW2ldLCBpLCBub2Rlcyk7XG4gICAgICBzdHJlbmd0aHNbaV0gPSBpc05hTihyYWRpdXNlc1tpXSkgPyAwIDogK3N0cmVuZ3RoKG5vZGVzW2ldLCBpLCBub2Rlcyk7XG4gICAgfVxuICB9XG5cbiAgZm9yY2UuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICBub2RlcyA9IF8sIGluaXRpYWxpemUoKTtcbiAgfTtcblxuICBmb3JjZS5zdHJlbmd0aCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzdHJlbmd0aCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBpbml0aWFsaXplKCksIGZvcmNlKSA6IHN0cmVuZ3RoO1xuICB9O1xuXG4gIGZvcmNlLnJhZGl1cyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChyYWRpdXMgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgaW5pdGlhbGl6ZSgpLCBmb3JjZSkgOiByYWRpdXM7XG4gIH07XG5cbiAgZm9yY2UueCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh4ID0gK18sIGZvcmNlKSA6IHg7XG4gIH07XG5cbiAgZm9yY2UueSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh5ID0gK18sIGZvcmNlKSA6IHk7XG4gIH07XG5cbiAgcmV0dXJuIGZvcmNlO1xufVxuIiwiaW1wb3J0IHtkaXNwYXRjaH0gZnJvbSBcImQzLWRpc3BhdGNoXCI7XG5pbXBvcnQge3RpbWVyfSBmcm9tIFwiZDMtdGltZXJcIjtcbmltcG9ydCBsY2cgZnJvbSBcIi4vbGNnLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB4KGQpIHtcbiAgcmV0dXJuIGQueDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHkoZCkge1xuICByZXR1cm4gZC55O1xufVxuXG52YXIgaW5pdGlhbFJhZGl1cyA9IDEwLFxuICAgIGluaXRpYWxBbmdsZSA9IE1hdGguUEkgKiAoMyAtIE1hdGguc3FydCg1KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGVzKSB7XG4gIHZhciBzaW11bGF0aW9uLFxuICAgICAgYWxwaGEgPSAxLFxuICAgICAgYWxwaGFNaW4gPSAwLjAwMSxcbiAgICAgIGFscGhhRGVjYXkgPSAxIC0gTWF0aC5wb3coYWxwaGFNaW4sIDEgLyAzMDApLFxuICAgICAgYWxwaGFUYXJnZXQgPSAwLFxuICAgICAgdmVsb2NpdHlEZWNheSA9IDAuNixcbiAgICAgIGZvcmNlcyA9IG5ldyBNYXAoKSxcbiAgICAgIHN0ZXBwZXIgPSB0aW1lcihzdGVwKSxcbiAgICAgIGV2ZW50ID0gZGlzcGF0Y2goXCJ0aWNrXCIsIFwiZW5kXCIpLFxuICAgICAgcmFuZG9tID0gbGNnKCk7XG5cbiAgaWYgKG5vZGVzID09IG51bGwpIG5vZGVzID0gW107XG5cbiAgZnVuY3Rpb24gc3RlcCgpIHtcbiAgICB0aWNrKCk7XG4gICAgZXZlbnQuY2FsbChcInRpY2tcIiwgc2ltdWxhdGlvbik7XG4gICAgaWYgKGFscGhhIDwgYWxwaGFNaW4pIHtcbiAgICAgIHN0ZXBwZXIuc3RvcCgpO1xuICAgICAgZXZlbnQuY2FsbChcImVuZFwiLCBzaW11bGF0aW9uKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0aWNrKGl0ZXJhdGlvbnMpIHtcbiAgICB2YXIgaSwgbiA9IG5vZGVzLmxlbmd0aCwgbm9kZTtcblxuICAgIGlmIChpdGVyYXRpb25zID09PSB1bmRlZmluZWQpIGl0ZXJhdGlvbnMgPSAxO1xuXG4gICAgZm9yICh2YXIgayA9IDA7IGsgPCBpdGVyYXRpb25zOyArK2spIHtcbiAgICAgIGFscGhhICs9IChhbHBoYVRhcmdldCAtIGFscGhhKSAqIGFscGhhRGVjYXk7XG5cbiAgICAgIGZvcmNlcy5mb3JFYWNoKGZ1bmN0aW9uKGZvcmNlKSB7XG4gICAgICAgIGZvcmNlKGFscGhhKTtcbiAgICAgIH0pO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKG5vZGUuZnggPT0gbnVsbCkgbm9kZS54ICs9IG5vZGUudnggKj0gdmVsb2NpdHlEZWNheTtcbiAgICAgICAgZWxzZSBub2RlLnggPSBub2RlLmZ4LCBub2RlLnZ4ID0gMDtcbiAgICAgICAgaWYgKG5vZGUuZnkgPT0gbnVsbCkgbm9kZS55ICs9IG5vZGUudnkgKj0gdmVsb2NpdHlEZWNheTtcbiAgICAgICAgZWxzZSBub2RlLnkgPSBub2RlLmZ5LCBub2RlLnZ5ID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2ltdWxhdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVOb2RlcygpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbiA9IG5vZGVzLmxlbmd0aCwgbm9kZTsgaSA8IG47ICsraSkge1xuICAgICAgbm9kZSA9IG5vZGVzW2ldLCBub2RlLmluZGV4ID0gaTtcbiAgICAgIGlmIChub2RlLmZ4ICE9IG51bGwpIG5vZGUueCA9IG5vZGUuZng7XG4gICAgICBpZiAobm9kZS5meSAhPSBudWxsKSBub2RlLnkgPSBub2RlLmZ5O1xuICAgICAgaWYgKGlzTmFOKG5vZGUueCkgfHwgaXNOYU4obm9kZS55KSkge1xuICAgICAgICB2YXIgcmFkaXVzID0gaW5pdGlhbFJhZGl1cyAqIE1hdGguc3FydCgwLjUgKyBpKSwgYW5nbGUgPSBpICogaW5pdGlhbEFuZ2xlO1xuICAgICAgICBub2RlLnggPSByYWRpdXMgKiBNYXRoLmNvcyhhbmdsZSk7XG4gICAgICAgIG5vZGUueSA9IHJhZGl1cyAqIE1hdGguc2luKGFuZ2xlKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc05hTihub2RlLnZ4KSB8fCBpc05hTihub2RlLnZ5KSkge1xuICAgICAgICBub2RlLnZ4ID0gbm9kZS52eSA9IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUZvcmNlKGZvcmNlKSB7XG4gICAgaWYgKGZvcmNlLmluaXRpYWxpemUpIGZvcmNlLmluaXRpYWxpemUobm9kZXMsIHJhbmRvbSk7XG4gICAgcmV0dXJuIGZvcmNlO1xuICB9XG5cbiAgaW5pdGlhbGl6ZU5vZGVzKCk7XG5cbiAgcmV0dXJuIHNpbXVsYXRpb24gPSB7XG4gICAgdGljazogdGljayxcblxuICAgIHJlc3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHN0ZXBwZXIucmVzdGFydChzdGVwKSwgc2ltdWxhdGlvbjtcbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc3RlcHBlci5zdG9wKCksIHNpbXVsYXRpb247XG4gICAgfSxcblxuICAgIG5vZGVzOiBmdW5jdGlvbihfKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChub2RlcyA9IF8sIGluaXRpYWxpemVOb2RlcygpLCBmb3JjZXMuZm9yRWFjaChpbml0aWFsaXplRm9yY2UpLCBzaW11bGF0aW9uKSA6IG5vZGVzO1xuICAgIH0sXG5cbiAgICBhbHBoYTogZnVuY3Rpb24oXykge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoYWxwaGEgPSArXywgc2ltdWxhdGlvbikgOiBhbHBoYTtcbiAgICB9LFxuXG4gICAgYWxwaGFNaW46IGZ1bmN0aW9uKF8pIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGFscGhhTWluID0gK18sIHNpbXVsYXRpb24pIDogYWxwaGFNaW47XG4gICAgfSxcblxuICAgIGFscGhhRGVjYXk6IGZ1bmN0aW9uKF8pIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGFscGhhRGVjYXkgPSArXywgc2ltdWxhdGlvbikgOiArYWxwaGFEZWNheTtcbiAgICB9LFxuXG4gICAgYWxwaGFUYXJnZXQ6IGZ1bmN0aW9uKF8pIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGFscGhhVGFyZ2V0ID0gK18sIHNpbXVsYXRpb24pIDogYWxwaGFUYXJnZXQ7XG4gICAgfSxcblxuICAgIHZlbG9jaXR5RGVjYXk6IGZ1bmN0aW9uKF8pIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHZlbG9jaXR5RGVjYXkgPSAxIC0gXywgc2ltdWxhdGlvbikgOiAxIC0gdmVsb2NpdHlEZWNheTtcbiAgICB9LFxuXG4gICAgcmFuZG9tU291cmNlOiBmdW5jdGlvbihfKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChyYW5kb20gPSBfLCBmb3JjZXMuZm9yRWFjaChpbml0aWFsaXplRm9yY2UpLCBzaW11bGF0aW9uKSA6IHJhbmRvbTtcbiAgICB9LFxuXG4gICAgZm9yY2U6IGZ1bmN0aW9uKG5hbWUsIF8pIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID4gMSA/ICgoXyA9PSBudWxsID8gZm9yY2VzLmRlbGV0ZShuYW1lKSA6IGZvcmNlcy5zZXQobmFtZSwgaW5pdGlhbGl6ZUZvcmNlKF8pKSksIHNpbXVsYXRpb24pIDogZm9yY2VzLmdldChuYW1lKTtcbiAgICB9LFxuXG4gICAgZmluZDogZnVuY3Rpb24oeCwgeSwgcmFkaXVzKSB7XG4gICAgICB2YXIgaSA9IDAsXG4gICAgICAgICAgbiA9IG5vZGVzLmxlbmd0aCxcbiAgICAgICAgICBkeCxcbiAgICAgICAgICBkeSxcbiAgICAgICAgICBkMixcbiAgICAgICAgICBub2RlLFxuICAgICAgICAgIGNsb3Nlc3Q7XG5cbiAgICAgIGlmIChyYWRpdXMgPT0gbnVsbCkgcmFkaXVzID0gSW5maW5pdHk7XG4gICAgICBlbHNlIHJhZGl1cyAqPSByYWRpdXM7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICBkeCA9IHggLSBub2RlLng7XG4gICAgICAgIGR5ID0geSAtIG5vZGUueTtcbiAgICAgICAgZDIgPSBkeCAqIGR4ICsgZHkgKiBkeTtcbiAgICAgICAgaWYgKGQyIDwgcmFkaXVzKSBjbG9zZXN0ID0gbm9kZSwgcmFkaXVzID0gZDI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjbG9zZXN0O1xuICAgIH0sXG5cbiAgICBvbjogZnVuY3Rpb24obmFtZSwgXykge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gKGV2ZW50Lm9uKG5hbWUsIF8pLCBzaW11bGF0aW9uKSA6IGV2ZW50Lm9uKG5hbWUpO1xuICAgIH1cbiAgfTtcbn1cbiIsImltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHZhciBzdHJlbmd0aCA9IGNvbnN0YW50KDAuMSksXG4gICAgICBub2RlcyxcbiAgICAgIHN0cmVuZ3RocyxcbiAgICAgIHh6O1xuXG4gIGlmICh0eXBlb2YgeCAhPT0gXCJmdW5jdGlvblwiKSB4ID0gY29uc3RhbnQoeCA9PSBudWxsID8gMCA6ICt4KTtcblxuICBmdW5jdGlvbiBmb3JjZShhbHBoYSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBuID0gbm9kZXMubGVuZ3RoLCBub2RlOyBpIDwgbjsgKytpKSB7XG4gICAgICBub2RlID0gbm9kZXNbaV0sIG5vZGUudnggKz0gKHh6W2ldIC0gbm9kZS54KSAqIHN0cmVuZ3Roc1tpXSAqIGFscGhhO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgaWYgKCFub2RlcykgcmV0dXJuO1xuICAgIHZhciBpLCBuID0gbm9kZXMubGVuZ3RoO1xuICAgIHN0cmVuZ3RocyA9IG5ldyBBcnJheShuKTtcbiAgICB4eiA9IG5ldyBBcnJheShuKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBzdHJlbmd0aHNbaV0gPSBpc05hTih4eltpXSA9ICt4KG5vZGVzW2ldLCBpLCBub2RlcykpID8gMCA6ICtzdHJlbmd0aChub2Rlc1tpXSwgaSwgbm9kZXMpO1xuICAgIH1cbiAgfVxuXG4gIGZvcmNlLmluaXRpYWxpemUgPSBmdW5jdGlvbihfKSB7XG4gICAgbm9kZXMgPSBfO1xuICAgIGluaXRpYWxpemUoKTtcbiAgfTtcblxuICBmb3JjZS5zdHJlbmd0aCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzdHJlbmd0aCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBpbml0aWFsaXplKCksIGZvcmNlKSA6IHN0cmVuZ3RoO1xuICB9O1xuXG4gIGZvcmNlLnggPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBpbml0aWFsaXplKCksIGZvcmNlKSA6IHg7XG4gIH07XG5cbiAgcmV0dXJuIGZvcmNlO1xufVxuIiwiaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHkpIHtcbiAgdmFyIHN0cmVuZ3RoID0gY29uc3RhbnQoMC4xKSxcbiAgICAgIG5vZGVzLFxuICAgICAgc3RyZW5ndGhzLFxuICAgICAgeXo7XG5cbiAgaWYgKHR5cGVvZiB5ICE9PSBcImZ1bmN0aW9uXCIpIHkgPSBjb25zdGFudCh5ID09IG51bGwgPyAwIDogK3kpO1xuXG4gIGZ1bmN0aW9uIGZvcmNlKGFscGhhKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIG4gPSBub2Rlcy5sZW5ndGgsIG5vZGU7IGkgPCBuOyArK2kpIHtcbiAgICAgIG5vZGUgPSBub2Rlc1tpXSwgbm9kZS52eSArPSAoeXpbaV0gLSBub2RlLnkpICogc3RyZW5ndGhzW2ldICogYWxwaGE7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAoIW5vZGVzKSByZXR1cm47XG4gICAgdmFyIGksIG4gPSBub2Rlcy5sZW5ndGg7XG4gICAgc3RyZW5ndGhzID0gbmV3IEFycmF5KG4pO1xuICAgIHl6ID0gbmV3IEFycmF5KG4pO1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIHN0cmVuZ3Roc1tpXSA9IGlzTmFOKHl6W2ldID0gK3kobm9kZXNbaV0sIGksIG5vZGVzKSkgPyAwIDogK3N0cmVuZ3RoKG5vZGVzW2ldLCBpLCBub2Rlcyk7XG4gICAgfVxuICB9XG5cbiAgZm9yY2UuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICBub2RlcyA9IF87XG4gICAgaW5pdGlhbGl6ZSgpO1xuICB9O1xuXG4gIGZvcmNlLnN0cmVuZ3RoID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHN0cmVuZ3RoID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGluaXRpYWxpemUoKSwgZm9yY2UpIDogc3RyZW5ndGg7XG4gIH07XG5cbiAgZm9yY2UueSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh5ID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGluaXRpYWxpemUoKSwgZm9yY2UpIDogeTtcbiAgfTtcblxuICByZXR1cm4gZm9yY2U7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihkKSB7XG4gIGNvbnN0IHggPSArdGhpcy5feC5jYWxsKG51bGwsIGQpLFxuICAgICAgeSA9ICt0aGlzLl95LmNhbGwobnVsbCwgZCk7XG4gIHJldHVybiBhZGQodGhpcy5jb3Zlcih4LCB5KSwgeCwgeSwgZCk7XG59XG5cbmZ1bmN0aW9uIGFkZCh0cmVlLCB4LCB5LCBkKSB7XG4gIGlmIChpc05hTih4KSB8fCBpc05hTih5KSkgcmV0dXJuIHRyZWU7IC8vIGlnbm9yZSBpbnZhbGlkIHBvaW50c1xuXG4gIHZhciBwYXJlbnQsXG4gICAgICBub2RlID0gdHJlZS5fcm9vdCxcbiAgICAgIGxlYWYgPSB7ZGF0YTogZH0sXG4gICAgICB4MCA9IHRyZWUuX3gwLFxuICAgICAgeTAgPSB0cmVlLl95MCxcbiAgICAgIHgxID0gdHJlZS5feDEsXG4gICAgICB5MSA9IHRyZWUuX3kxLFxuICAgICAgeG0sXG4gICAgICB5bSxcbiAgICAgIHhwLFxuICAgICAgeXAsXG4gICAgICByaWdodCxcbiAgICAgIGJvdHRvbSxcbiAgICAgIGksXG4gICAgICBqO1xuXG4gIC8vIElmIHRoZSB0cmVlIGlzIGVtcHR5LCBpbml0aWFsaXplIHRoZSByb290IGFzIGEgbGVhZi5cbiAgaWYgKCFub2RlKSByZXR1cm4gdHJlZS5fcm9vdCA9IGxlYWYsIHRyZWU7XG5cbiAgLy8gRmluZCB0aGUgZXhpc3RpbmcgbGVhZiBmb3IgdGhlIG5ldyBwb2ludCwgb3IgYWRkIGl0LlxuICB3aGlsZSAobm9kZS5sZW5ndGgpIHtcbiAgICBpZiAocmlnaHQgPSB4ID49ICh4bSA9ICh4MCArIHgxKSAvIDIpKSB4MCA9IHhtOyBlbHNlIHgxID0geG07XG4gICAgaWYgKGJvdHRvbSA9IHkgPj0gKHltID0gKHkwICsgeTEpIC8gMikpIHkwID0geW07IGVsc2UgeTEgPSB5bTtcbiAgICBpZiAocGFyZW50ID0gbm9kZSwgIShub2RlID0gbm9kZVtpID0gYm90dG9tIDw8IDEgfCByaWdodF0pKSByZXR1cm4gcGFyZW50W2ldID0gbGVhZiwgdHJlZTtcbiAgfVxuXG4gIC8vIElzIHRoZSBuZXcgcG9pbnQgaXMgZXhhY3RseSBjb2luY2lkZW50IHdpdGggdGhlIGV4aXN0aW5nIHBvaW50P1xuICB4cCA9ICt0cmVlLl94LmNhbGwobnVsbCwgbm9kZS5kYXRhKTtcbiAgeXAgPSArdHJlZS5feS5jYWxsKG51bGwsIG5vZGUuZGF0YSk7XG4gIGlmICh4ID09PSB4cCAmJiB5ID09PSB5cCkgcmV0dXJuIGxlYWYubmV4dCA9IG5vZGUsIHBhcmVudCA/IHBhcmVudFtpXSA9IGxlYWYgOiB0cmVlLl9yb290ID0gbGVhZiwgdHJlZTtcblxuICAvLyBPdGhlcndpc2UsIHNwbGl0IHRoZSBsZWFmIG5vZGUgdW50aWwgdGhlIG9sZCBhbmQgbmV3IHBvaW50IGFyZSBzZXBhcmF0ZWQuXG4gIGRvIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQgPyBwYXJlbnRbaV0gPSBuZXcgQXJyYXkoNCkgOiB0cmVlLl9yb290ID0gbmV3IEFycmF5KDQpO1xuICAgIGlmIChyaWdodCA9IHggPj0gKHhtID0gKHgwICsgeDEpIC8gMikpIHgwID0geG07IGVsc2UgeDEgPSB4bTtcbiAgICBpZiAoYm90dG9tID0geSA+PSAoeW0gPSAoeTAgKyB5MSkgLyAyKSkgeTAgPSB5bTsgZWxzZSB5MSA9IHltO1xuICB9IHdoaWxlICgoaSA9IGJvdHRvbSA8PCAxIHwgcmlnaHQpID09PSAoaiA9ICh5cCA+PSB5bSkgPDwgMSB8ICh4cCA+PSB4bSkpKTtcbiAgcmV0dXJuIHBhcmVudFtqXSA9IG5vZGUsIHBhcmVudFtpXSA9IGxlYWYsIHRyZWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRBbGwoZGF0YSkge1xuICB2YXIgZCwgaSwgbiA9IGRhdGEubGVuZ3RoLFxuICAgICAgeCxcbiAgICAgIHksXG4gICAgICB4eiA9IG5ldyBBcnJheShuKSxcbiAgICAgIHl6ID0gbmV3IEFycmF5KG4pLFxuICAgICAgeDAgPSBJbmZpbml0eSxcbiAgICAgIHkwID0gSW5maW5pdHksXG4gICAgICB4MSA9IC1JbmZpbml0eSxcbiAgICAgIHkxID0gLUluZmluaXR5O1xuXG4gIC8vIENvbXB1dGUgdGhlIHBvaW50cyBhbmQgdGhlaXIgZXh0ZW50LlxuICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgaWYgKGlzTmFOKHggPSArdGhpcy5feC5jYWxsKG51bGwsIGQgPSBkYXRhW2ldKSkgfHwgaXNOYU4oeSA9ICt0aGlzLl95LmNhbGwobnVsbCwgZCkpKSBjb250aW51ZTtcbiAgICB4eltpXSA9IHg7XG4gICAgeXpbaV0gPSB5O1xuICAgIGlmICh4IDwgeDApIHgwID0geDtcbiAgICBpZiAoeCA+IHgxKSB4MSA9IHg7XG4gICAgaWYgKHkgPCB5MCkgeTAgPSB5O1xuICAgIGlmICh5ID4geTEpIHkxID0geTtcbiAgfVxuXG4gIC8vIElmIHRoZXJlIHdlcmUgbm8gKHZhbGlkKSBwb2ludHMsIGFib3J0LlxuICBpZiAoeDAgPiB4MSB8fCB5MCA+IHkxKSByZXR1cm4gdGhpcztcblxuICAvLyBFeHBhbmQgdGhlIHRyZWUgdG8gY292ZXIgdGhlIG5ldyBwb2ludHMuXG4gIHRoaXMuY292ZXIoeDAsIHkwKS5jb3Zlcih4MSwgeTEpO1xuXG4gIC8vIEFkZCB0aGUgbmV3IHBvaW50cy5cbiAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgIGFkZCh0aGlzLCB4eltpXSwgeXpbaV0sIGRhdGFbaV0pO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4LCB5KSB7XG4gIGlmIChpc05hTih4ID0gK3gpIHx8IGlzTmFOKHkgPSAreSkpIHJldHVybiB0aGlzOyAvLyBpZ25vcmUgaW52YWxpZCBwb2ludHNcblxuICB2YXIgeDAgPSB0aGlzLl94MCxcbiAgICAgIHkwID0gdGhpcy5feTAsXG4gICAgICB4MSA9IHRoaXMuX3gxLFxuICAgICAgeTEgPSB0aGlzLl95MTtcblxuICAvLyBJZiB0aGUgcXVhZHRyZWUgaGFzIG5vIGV4dGVudCwgaW5pdGlhbGl6ZSB0aGVtLlxuICAvLyBJbnRlZ2VyIGV4dGVudCBhcmUgbmVjZXNzYXJ5IHNvIHRoYXQgaWYgd2UgbGF0ZXIgZG91YmxlIHRoZSBleHRlbnQsXG4gIC8vIHRoZSBleGlzdGluZyBxdWFkcmFudCBib3VuZGFyaWVzIGRvbuKAmXQgY2hhbmdlIGR1ZSB0byBmbG9hdGluZyBwb2ludCBlcnJvciFcbiAgaWYgKGlzTmFOKHgwKSkge1xuICAgIHgxID0gKHgwID0gTWF0aC5mbG9vcih4KSkgKyAxO1xuICAgIHkxID0gKHkwID0gTWF0aC5mbG9vcih5KSkgKyAxO1xuICB9XG5cbiAgLy8gT3RoZXJ3aXNlLCBkb3VibGUgcmVwZWF0ZWRseSB0byBjb3Zlci5cbiAgZWxzZSB7XG4gICAgdmFyIHogPSB4MSAtIHgwIHx8IDEsXG4gICAgICAgIG5vZGUgPSB0aGlzLl9yb290LFxuICAgICAgICBwYXJlbnQsXG4gICAgICAgIGk7XG5cbiAgICB3aGlsZSAoeDAgPiB4IHx8IHggPj0geDEgfHwgeTAgPiB5IHx8IHkgPj0geTEpIHtcbiAgICAgIGkgPSAoeSA8IHkwKSA8PCAxIHwgKHggPCB4MCk7XG4gICAgICBwYXJlbnQgPSBuZXcgQXJyYXkoNCksIHBhcmVudFtpXSA9IG5vZGUsIG5vZGUgPSBwYXJlbnQsIHogKj0gMjtcbiAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICBjYXNlIDA6IHgxID0geDAgKyB6LCB5MSA9IHkwICsgejsgYnJlYWs7XG4gICAgICAgIGNhc2UgMTogeDAgPSB4MSAtIHosIHkxID0geTAgKyB6OyBicmVhaztcbiAgICAgICAgY2FzZSAyOiB4MSA9IHgwICsgeiwgeTAgPSB5MSAtIHo7IGJyZWFrO1xuICAgICAgICBjYXNlIDM6IHgwID0geDEgLSB6LCB5MCA9IHkxIC0gejsgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3Jvb3QgJiYgdGhpcy5fcm9vdC5sZW5ndGgpIHRoaXMuX3Jvb3QgPSBub2RlO1xuICB9XG5cbiAgdGhpcy5feDAgPSB4MDtcbiAgdGhpcy5feTAgPSB5MDtcbiAgdGhpcy5feDEgPSB4MTtcbiAgdGhpcy5feTEgPSB5MTtcbiAgcmV0dXJuIHRoaXM7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIGRhdGEgPSBbXTtcbiAgdGhpcy52aXNpdChmdW5jdGlvbihub2RlKSB7XG4gICAgaWYgKCFub2RlLmxlbmd0aCkgZG8gZGF0YS5wdXNoKG5vZGUuZGF0YSk7IHdoaWxlIChub2RlID0gbm9kZS5uZXh0KVxuICB9KTtcbiAgcmV0dXJuIGRhdGE7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihfKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMuY292ZXIoK19bMF1bMF0sICtfWzBdWzFdKS5jb3ZlcigrX1sxXVswXSwgK19bMV1bMV0pXG4gICAgICA6IGlzTmFOKHRoaXMuX3gwKSA/IHVuZGVmaW5lZCA6IFtbdGhpcy5feDAsIHRoaXMuX3kwXSwgW3RoaXMuX3gxLCB0aGlzLl95MV1dO1xufVxuIiwiaW1wb3J0IFF1YWQgZnJvbSBcIi4vcXVhZC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4LCB5LCByYWRpdXMpIHtcbiAgdmFyIGRhdGEsXG4gICAgICB4MCA9IHRoaXMuX3gwLFxuICAgICAgeTAgPSB0aGlzLl95MCxcbiAgICAgIHgxLFxuICAgICAgeTEsXG4gICAgICB4MixcbiAgICAgIHkyLFxuICAgICAgeDMgPSB0aGlzLl94MSxcbiAgICAgIHkzID0gdGhpcy5feTEsXG4gICAgICBxdWFkcyA9IFtdLFxuICAgICAgbm9kZSA9IHRoaXMuX3Jvb3QsXG4gICAgICBxLFxuICAgICAgaTtcblxuICBpZiAobm9kZSkgcXVhZHMucHVzaChuZXcgUXVhZChub2RlLCB4MCwgeTAsIHgzLCB5MykpO1xuICBpZiAocmFkaXVzID09IG51bGwpIHJhZGl1cyA9IEluZmluaXR5O1xuICBlbHNlIHtcbiAgICB4MCA9IHggLSByYWRpdXMsIHkwID0geSAtIHJhZGl1cztcbiAgICB4MyA9IHggKyByYWRpdXMsIHkzID0geSArIHJhZGl1cztcbiAgICByYWRpdXMgKj0gcmFkaXVzO1xuICB9XG5cbiAgd2hpbGUgKHEgPSBxdWFkcy5wb3AoKSkge1xuXG4gICAgLy8gU3RvcCBzZWFyY2hpbmcgaWYgdGhpcyBxdWFkcmFudCBjYW7igJl0IGNvbnRhaW4gYSBjbG9zZXIgbm9kZS5cbiAgICBpZiAoIShub2RlID0gcS5ub2RlKVxuICAgICAgICB8fCAoeDEgPSBxLngwKSA+IHgzXG4gICAgICAgIHx8ICh5MSA9IHEueTApID4geTNcbiAgICAgICAgfHwgKHgyID0gcS54MSkgPCB4MFxuICAgICAgICB8fCAoeTIgPSBxLnkxKSA8IHkwKSBjb250aW51ZTtcblxuICAgIC8vIEJpc2VjdCB0aGUgY3VycmVudCBxdWFkcmFudC5cbiAgICBpZiAobm9kZS5sZW5ndGgpIHtcbiAgICAgIHZhciB4bSA9ICh4MSArIHgyKSAvIDIsXG4gICAgICAgICAgeW0gPSAoeTEgKyB5MikgLyAyO1xuXG4gICAgICBxdWFkcy5wdXNoKFxuICAgICAgICBuZXcgUXVhZChub2RlWzNdLCB4bSwgeW0sIHgyLCB5MiksXG4gICAgICAgIG5ldyBRdWFkKG5vZGVbMl0sIHgxLCB5bSwgeG0sIHkyKSxcbiAgICAgICAgbmV3IFF1YWQobm9kZVsxXSwgeG0sIHkxLCB4MiwgeW0pLFxuICAgICAgICBuZXcgUXVhZChub2RlWzBdLCB4MSwgeTEsIHhtLCB5bSlcbiAgICAgICk7XG5cbiAgICAgIC8vIFZpc2l0IHRoZSBjbG9zZXN0IHF1YWRyYW50IGZpcnN0LlxuICAgICAgaWYgKGkgPSAoeSA+PSB5bSkgPDwgMSB8ICh4ID49IHhtKSkge1xuICAgICAgICBxID0gcXVhZHNbcXVhZHMubGVuZ3RoIC0gMV07XG4gICAgICAgIHF1YWRzW3F1YWRzLmxlbmd0aCAtIDFdID0gcXVhZHNbcXVhZHMubGVuZ3RoIC0gMSAtIGldO1xuICAgICAgICBxdWFkc1txdWFkcy5sZW5ndGggLSAxIC0gaV0gPSBxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFZpc2l0IHRoaXMgcG9pbnQuIChWaXNpdGluZyBjb2luY2lkZW50IHBvaW50cyBpc27igJl0IG5lY2Vzc2FyeSEpXG4gICAgZWxzZSB7XG4gICAgICB2YXIgZHggPSB4IC0gK3RoaXMuX3guY2FsbChudWxsLCBub2RlLmRhdGEpLFxuICAgICAgICAgIGR5ID0geSAtICt0aGlzLl95LmNhbGwobnVsbCwgbm9kZS5kYXRhKSxcbiAgICAgICAgICBkMiA9IGR4ICogZHggKyBkeSAqIGR5O1xuICAgICAgaWYgKGQyIDwgcmFkaXVzKSB7XG4gICAgICAgIHZhciBkID0gTWF0aC5zcXJ0KHJhZGl1cyA9IGQyKTtcbiAgICAgICAgeDAgPSB4IC0gZCwgeTAgPSB5IC0gZDtcbiAgICAgICAgeDMgPSB4ICsgZCwgeTMgPSB5ICsgZDtcbiAgICAgICAgZGF0YSA9IG5vZGUuZGF0YTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cbiIsImV4cG9ydCB7ZGVmYXVsdCBhcyBxdWFkdHJlZX0gZnJvbSBcIi4vcXVhZHRyZWUuanNcIjtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGUsIHgwLCB5MCwgeDEsIHkxKSB7XG4gIHRoaXMubm9kZSA9IG5vZGU7XG4gIHRoaXMueDAgPSB4MDtcbiAgdGhpcy55MCA9IHkwO1xuICB0aGlzLngxID0geDE7XG4gIHRoaXMueTEgPSB5MTtcbn1cbiIsImltcG9ydCB0cmVlX2FkZCwge2FkZEFsbCBhcyB0cmVlX2FkZEFsbH0gZnJvbSBcIi4vYWRkLmpzXCI7XG5pbXBvcnQgdHJlZV9jb3ZlciBmcm9tIFwiLi9jb3Zlci5qc1wiO1xuaW1wb3J0IHRyZWVfZGF0YSBmcm9tIFwiLi9kYXRhLmpzXCI7XG5pbXBvcnQgdHJlZV9leHRlbnQgZnJvbSBcIi4vZXh0ZW50LmpzXCI7XG5pbXBvcnQgdHJlZV9maW5kIGZyb20gXCIuL2ZpbmQuanNcIjtcbmltcG9ydCB0cmVlX3JlbW92ZSwge3JlbW92ZUFsbCBhcyB0cmVlX3JlbW92ZUFsbH0gZnJvbSBcIi4vcmVtb3ZlLmpzXCI7XG5pbXBvcnQgdHJlZV9yb290IGZyb20gXCIuL3Jvb3QuanNcIjtcbmltcG9ydCB0cmVlX3NpemUgZnJvbSBcIi4vc2l6ZS5qc1wiO1xuaW1wb3J0IHRyZWVfdmlzaXQgZnJvbSBcIi4vdmlzaXQuanNcIjtcbmltcG9ydCB0cmVlX3Zpc2l0QWZ0ZXIgZnJvbSBcIi4vdmlzaXRBZnRlci5qc1wiO1xuaW1wb3J0IHRyZWVfeCwge2RlZmF1bHRYfSBmcm9tIFwiLi94LmpzXCI7XG5pbXBvcnQgdHJlZV95LCB7ZGVmYXVsdFl9IGZyb20gXCIuL3kuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcXVhZHRyZWUobm9kZXMsIHgsIHkpIHtcbiAgdmFyIHRyZWUgPSBuZXcgUXVhZHRyZWUoeCA9PSBudWxsID8gZGVmYXVsdFggOiB4LCB5ID09IG51bGwgPyBkZWZhdWx0WSA6IHksIE5hTiwgTmFOLCBOYU4sIE5hTik7XG4gIHJldHVybiBub2RlcyA9PSBudWxsID8gdHJlZSA6IHRyZWUuYWRkQWxsKG5vZGVzKTtcbn1cblxuZnVuY3Rpb24gUXVhZHRyZWUoeCwgeSwgeDAsIHkwLCB4MSwgeTEpIHtcbiAgdGhpcy5feCA9IHg7XG4gIHRoaXMuX3kgPSB5O1xuICB0aGlzLl94MCA9IHgwO1xuICB0aGlzLl95MCA9IHkwO1xuICB0aGlzLl94MSA9IHgxO1xuICB0aGlzLl95MSA9IHkxO1xuICB0aGlzLl9yb290ID0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBsZWFmX2NvcHkobGVhZikge1xuICB2YXIgY29weSA9IHtkYXRhOiBsZWFmLmRhdGF9LCBuZXh0ID0gY29weTtcbiAgd2hpbGUgKGxlYWYgPSBsZWFmLm5leHQpIG5leHQgPSBuZXh0Lm5leHQgPSB7ZGF0YTogbGVhZi5kYXRhfTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbnZhciB0cmVlUHJvdG8gPSBxdWFkdHJlZS5wcm90b3R5cGUgPSBRdWFkdHJlZS5wcm90b3R5cGU7XG5cbnRyZWVQcm90by5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBjb3B5ID0gbmV3IFF1YWR0cmVlKHRoaXMuX3gsIHRoaXMuX3ksIHRoaXMuX3gwLCB0aGlzLl95MCwgdGhpcy5feDEsIHRoaXMuX3kxKSxcbiAgICAgIG5vZGUgPSB0aGlzLl9yb290LFxuICAgICAgbm9kZXMsXG4gICAgICBjaGlsZDtcblxuICBpZiAoIW5vZGUpIHJldHVybiBjb3B5O1xuXG4gIGlmICghbm9kZS5sZW5ndGgpIHJldHVybiBjb3B5Ll9yb290ID0gbGVhZl9jb3B5KG5vZGUpLCBjb3B5O1xuXG4gIG5vZGVzID0gW3tzb3VyY2U6IG5vZGUsIHRhcmdldDogY29weS5fcm9vdCA9IG5ldyBBcnJheSg0KX1dO1xuICB3aGlsZSAobm9kZSA9IG5vZGVzLnBvcCgpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyArK2kpIHtcbiAgICAgIGlmIChjaGlsZCA9IG5vZGUuc291cmNlW2ldKSB7XG4gICAgICAgIGlmIChjaGlsZC5sZW5ndGgpIG5vZGVzLnB1c2goe3NvdXJjZTogY2hpbGQsIHRhcmdldDogbm9kZS50YXJnZXRbaV0gPSBuZXcgQXJyYXkoNCl9KTtcbiAgICAgICAgZWxzZSBub2RlLnRhcmdldFtpXSA9IGxlYWZfY29weShjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvcHk7XG59O1xuXG50cmVlUHJvdG8uYWRkID0gdHJlZV9hZGQ7XG50cmVlUHJvdG8uYWRkQWxsID0gdHJlZV9hZGRBbGw7XG50cmVlUHJvdG8uY292ZXIgPSB0cmVlX2NvdmVyO1xudHJlZVByb3RvLmRhdGEgPSB0cmVlX2RhdGE7XG50cmVlUHJvdG8uZXh0ZW50ID0gdHJlZV9leHRlbnQ7XG50cmVlUHJvdG8uZmluZCA9IHRyZWVfZmluZDtcbnRyZWVQcm90by5yZW1vdmUgPSB0cmVlX3JlbW92ZTtcbnRyZWVQcm90by5yZW1vdmVBbGwgPSB0cmVlX3JlbW92ZUFsbDtcbnRyZWVQcm90by5yb290ID0gdHJlZV9yb290O1xudHJlZVByb3RvLnNpemUgPSB0cmVlX3NpemU7XG50cmVlUHJvdG8udmlzaXQgPSB0cmVlX3Zpc2l0O1xudHJlZVByb3RvLnZpc2l0QWZ0ZXIgPSB0cmVlX3Zpc2l0QWZ0ZXI7XG50cmVlUHJvdG8ueCA9IHRyZWVfeDtcbnRyZWVQcm90by55ID0gdHJlZV95O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZCkge1xuICBpZiAoaXNOYU4oeCA9ICt0aGlzLl94LmNhbGwobnVsbCwgZCkpIHx8IGlzTmFOKHkgPSArdGhpcy5feS5jYWxsKG51bGwsIGQpKSkgcmV0dXJuIHRoaXM7IC8vIGlnbm9yZSBpbnZhbGlkIHBvaW50c1xuXG4gIHZhciBwYXJlbnQsXG4gICAgICBub2RlID0gdGhpcy5fcm9vdCxcbiAgICAgIHJldGFpbmVyLFxuICAgICAgcHJldmlvdXMsXG4gICAgICBuZXh0LFxuICAgICAgeDAgPSB0aGlzLl94MCxcbiAgICAgIHkwID0gdGhpcy5feTAsXG4gICAgICB4MSA9IHRoaXMuX3gxLFxuICAgICAgeTEgPSB0aGlzLl95MSxcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgeG0sXG4gICAgICB5bSxcbiAgICAgIHJpZ2h0LFxuICAgICAgYm90dG9tLFxuICAgICAgaSxcbiAgICAgIGo7XG5cbiAgLy8gSWYgdGhlIHRyZWUgaXMgZW1wdHksIGluaXRpYWxpemUgdGhlIHJvb3QgYXMgYSBsZWFmLlxuICBpZiAoIW5vZGUpIHJldHVybiB0aGlzO1xuXG4gIC8vIEZpbmQgdGhlIGxlYWYgbm9kZSBmb3IgdGhlIHBvaW50LlxuICAvLyBXaGlsZSBkZXNjZW5kaW5nLCBhbHNvIHJldGFpbiB0aGUgZGVlcGVzdCBwYXJlbnQgd2l0aCBhIG5vbi1yZW1vdmVkIHNpYmxpbmcuXG4gIGlmIChub2RlLmxlbmd0aCkgd2hpbGUgKHRydWUpIHtcbiAgICBpZiAocmlnaHQgPSB4ID49ICh4bSA9ICh4MCArIHgxKSAvIDIpKSB4MCA9IHhtOyBlbHNlIHgxID0geG07XG4gICAgaWYgKGJvdHRvbSA9IHkgPj0gKHltID0gKHkwICsgeTEpIC8gMikpIHkwID0geW07IGVsc2UgeTEgPSB5bTtcbiAgICBpZiAoIShwYXJlbnQgPSBub2RlLCBub2RlID0gbm9kZVtpID0gYm90dG9tIDw8IDEgfCByaWdodF0pKSByZXR1cm4gdGhpcztcbiAgICBpZiAoIW5vZGUubGVuZ3RoKSBicmVhaztcbiAgICBpZiAocGFyZW50WyhpICsgMSkgJiAzXSB8fCBwYXJlbnRbKGkgKyAyKSAmIDNdIHx8IHBhcmVudFsoaSArIDMpICYgM10pIHJldGFpbmVyID0gcGFyZW50LCBqID0gaTtcbiAgfVxuXG4gIC8vIEZpbmQgdGhlIHBvaW50IHRvIHJlbW92ZS5cbiAgd2hpbGUgKG5vZGUuZGF0YSAhPT0gZCkgaWYgKCEocHJldmlvdXMgPSBub2RlLCBub2RlID0gbm9kZS5uZXh0KSkgcmV0dXJuIHRoaXM7XG4gIGlmIChuZXh0ID0gbm9kZS5uZXh0KSBkZWxldGUgbm9kZS5uZXh0O1xuXG4gIC8vIElmIHRoZXJlIGFyZSBtdWx0aXBsZSBjb2luY2lkZW50IHBvaW50cywgcmVtb3ZlIGp1c3QgdGhlIHBvaW50LlxuICBpZiAocHJldmlvdXMpIHJldHVybiAobmV4dCA/IHByZXZpb3VzLm5leHQgPSBuZXh0IDogZGVsZXRlIHByZXZpb3VzLm5leHQpLCB0aGlzO1xuXG4gIC8vIElmIHRoaXMgaXMgdGhlIHJvb3QgcG9pbnQsIHJlbW92ZSBpdC5cbiAgaWYgKCFwYXJlbnQpIHJldHVybiB0aGlzLl9yb290ID0gbmV4dCwgdGhpcztcblxuICAvLyBSZW1vdmUgdGhpcyBsZWFmLlxuICBuZXh0ID8gcGFyZW50W2ldID0gbmV4dCA6IGRlbGV0ZSBwYXJlbnRbaV07XG5cbiAgLy8gSWYgdGhlIHBhcmVudCBub3cgY29udGFpbnMgZXhhY3RseSBvbmUgbGVhZiwgY29sbGFwc2Ugc3VwZXJmbHVvdXMgcGFyZW50cy5cbiAgaWYgKChub2RlID0gcGFyZW50WzBdIHx8IHBhcmVudFsxXSB8fCBwYXJlbnRbMl0gfHwgcGFyZW50WzNdKVxuICAgICAgJiYgbm9kZSA9PT0gKHBhcmVudFszXSB8fCBwYXJlbnRbMl0gfHwgcGFyZW50WzFdIHx8IHBhcmVudFswXSlcbiAgICAgICYmICFub2RlLmxlbmd0aCkge1xuICAgIGlmIChyZXRhaW5lcikgcmV0YWluZXJbal0gPSBub2RlO1xuICAgIGVsc2UgdGhpcy5fcm9vdCA9IG5vZGU7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFsbChkYXRhKSB7XG4gIGZvciAodmFyIGkgPSAwLCBuID0gZGF0YS5sZW5ndGg7IGkgPCBuOyArK2kpIHRoaXMucmVtb3ZlKGRhdGFbaV0pO1xuICByZXR1cm4gdGhpcztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5fcm9vdDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgc2l6ZSA9IDA7XG4gIHRoaXMudmlzaXQoZnVuY3Rpb24obm9kZSkge1xuICAgIGlmICghbm9kZS5sZW5ndGgpIGRvICsrc2l6ZTsgd2hpbGUgKG5vZGUgPSBub2RlLm5leHQpXG4gIH0pO1xuICByZXR1cm4gc2l6ZTtcbn1cbiIsImltcG9ydCBRdWFkIGZyb20gXCIuL3F1YWQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgdmFyIHF1YWRzID0gW10sIHEsIG5vZGUgPSB0aGlzLl9yb290LCBjaGlsZCwgeDAsIHkwLCB4MSwgeTE7XG4gIGlmIChub2RlKSBxdWFkcy5wdXNoKG5ldyBRdWFkKG5vZGUsIHRoaXMuX3gwLCB0aGlzLl95MCwgdGhpcy5feDEsIHRoaXMuX3kxKSk7XG4gIHdoaWxlIChxID0gcXVhZHMucG9wKCkpIHtcbiAgICBpZiAoIWNhbGxiYWNrKG5vZGUgPSBxLm5vZGUsIHgwID0gcS54MCwgeTAgPSBxLnkwLCB4MSA9IHEueDEsIHkxID0gcS55MSkgJiYgbm9kZS5sZW5ndGgpIHtcbiAgICAgIHZhciB4bSA9ICh4MCArIHgxKSAvIDIsIHltID0gKHkwICsgeTEpIC8gMjtcbiAgICAgIGlmIChjaGlsZCA9IG5vZGVbM10pIHF1YWRzLnB1c2gobmV3IFF1YWQoY2hpbGQsIHhtLCB5bSwgeDEsIHkxKSk7XG4gICAgICBpZiAoY2hpbGQgPSBub2RlWzJdKSBxdWFkcy5wdXNoKG5ldyBRdWFkKGNoaWxkLCB4MCwgeW0sIHhtLCB5MSkpO1xuICAgICAgaWYgKGNoaWxkID0gbm9kZVsxXSkgcXVhZHMucHVzaChuZXcgUXVhZChjaGlsZCwgeG0sIHkwLCB4MSwgeW0pKTtcbiAgICAgIGlmIChjaGlsZCA9IG5vZGVbMF0pIHF1YWRzLnB1c2gobmV3IFF1YWQoY2hpbGQsIHgwLCB5MCwgeG0sIHltKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufVxuIiwiaW1wb3J0IFF1YWQgZnJvbSBcIi4vcXVhZC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjYWxsYmFjaykge1xuICB2YXIgcXVhZHMgPSBbXSwgbmV4dCA9IFtdLCBxO1xuICBpZiAodGhpcy5fcm9vdCkgcXVhZHMucHVzaChuZXcgUXVhZCh0aGlzLl9yb290LCB0aGlzLl94MCwgdGhpcy5feTAsIHRoaXMuX3gxLCB0aGlzLl95MSkpO1xuICB3aGlsZSAocSA9IHF1YWRzLnBvcCgpKSB7XG4gICAgdmFyIG5vZGUgPSBxLm5vZGU7XG4gICAgaWYgKG5vZGUubGVuZ3RoKSB7XG4gICAgICB2YXIgY2hpbGQsIHgwID0gcS54MCwgeTAgPSBxLnkwLCB4MSA9IHEueDEsIHkxID0gcS55MSwgeG0gPSAoeDAgKyB4MSkgLyAyLCB5bSA9ICh5MCArIHkxKSAvIDI7XG4gICAgICBpZiAoY2hpbGQgPSBub2RlWzBdKSBxdWFkcy5wdXNoKG5ldyBRdWFkKGNoaWxkLCB4MCwgeTAsIHhtLCB5bSkpO1xuICAgICAgaWYgKGNoaWxkID0gbm9kZVsxXSkgcXVhZHMucHVzaChuZXcgUXVhZChjaGlsZCwgeG0sIHkwLCB4MSwgeW0pKTtcbiAgICAgIGlmIChjaGlsZCA9IG5vZGVbMl0pIHF1YWRzLnB1c2gobmV3IFF1YWQoY2hpbGQsIHgwLCB5bSwgeG0sIHkxKSk7XG4gICAgICBpZiAoY2hpbGQgPSBub2RlWzNdKSBxdWFkcy5wdXNoKG5ldyBRdWFkKGNoaWxkLCB4bSwgeW0sIHgxLCB5MSkpO1xuICAgIH1cbiAgICBuZXh0LnB1c2gocSk7XG4gIH1cbiAgd2hpbGUgKHEgPSBuZXh0LnBvcCgpKSB7XG4gICAgY2FsbGJhY2socS5ub2RlLCBxLngwLCBxLnkwLCBxLngxLCBxLnkxKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0WChkKSB7XG4gIHJldHVybiBkWzBdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihfKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRoaXMuX3ggPSBfLCB0aGlzKSA6IHRoaXMuX3g7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGVmYXVsdFkoZCkge1xuICByZXR1cm4gZFsxXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oXykge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0aGlzLl95ID0gXywgdGhpcykgOiB0aGlzLl95O1xufVxuIiwiZXhwb3J0IHtcbiAgbm93LFxuICB0aW1lcixcbiAgdGltZXJGbHVzaFxufSBmcm9tIFwiLi90aW1lci5qc1wiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHRpbWVvdXRcbn0gZnJvbSBcIi4vdGltZW91dC5qc1wiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIGludGVydmFsXG59IGZyb20gXCIuL2ludGVydmFsLmpzXCI7XG4iLCJpbXBvcnQge1RpbWVyLCBub3d9IGZyb20gXCIuL3RpbWVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNhbGxiYWNrLCBkZWxheSwgdGltZSkge1xuICB2YXIgdCA9IG5ldyBUaW1lciwgdG90YWwgPSBkZWxheTtcbiAgaWYgKGRlbGF5ID09IG51bGwpIHJldHVybiB0LnJlc3RhcnQoY2FsbGJhY2ssIGRlbGF5LCB0aW1lKSwgdDtcbiAgdC5fcmVzdGFydCA9IHQucmVzdGFydDtcbiAgdC5yZXN0YXJ0ID0gZnVuY3Rpb24oY2FsbGJhY2ssIGRlbGF5LCB0aW1lKSB7XG4gICAgZGVsYXkgPSArZGVsYXksIHRpbWUgPSB0aW1lID09IG51bGwgPyBub3coKSA6ICt0aW1lO1xuICAgIHQuX3Jlc3RhcnQoZnVuY3Rpb24gdGljayhlbGFwc2VkKSB7XG4gICAgICBlbGFwc2VkICs9IHRvdGFsO1xuICAgICAgdC5fcmVzdGFydCh0aWNrLCB0b3RhbCArPSBkZWxheSwgdGltZSk7XG4gICAgICBjYWxsYmFjayhlbGFwc2VkKTtcbiAgICB9LCBkZWxheSwgdGltZSk7XG4gIH1cbiAgdC5yZXN0YXJ0KGNhbGxiYWNrLCBkZWxheSwgdGltZSk7XG4gIHJldHVybiB0O1xufVxuIiwiaW1wb3J0IHtUaW1lcn0gZnJvbSBcIi4vdGltZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY2FsbGJhY2ssIGRlbGF5LCB0aW1lKSB7XG4gIHZhciB0ID0gbmV3IFRpbWVyO1xuICBkZWxheSA9IGRlbGF5ID09IG51bGwgPyAwIDogK2RlbGF5O1xuICB0LnJlc3RhcnQoZWxhcHNlZCA9PiB7XG4gICAgdC5zdG9wKCk7XG4gICAgY2FsbGJhY2soZWxhcHNlZCArIGRlbGF5KTtcbiAgfSwgZGVsYXksIHRpbWUpO1xuICByZXR1cm4gdDtcbn1cbiIsInZhciBmcmFtZSA9IDAsIC8vIGlzIGFuIGFuaW1hdGlvbiBmcmFtZSBwZW5kaW5nP1xuICAgIHRpbWVvdXQgPSAwLCAvLyBpcyBhIHRpbWVvdXQgcGVuZGluZz9cbiAgICBpbnRlcnZhbCA9IDAsIC8vIGFyZSBhbnkgdGltZXJzIGFjdGl2ZT9cbiAgICBwb2tlRGVsYXkgPSAxMDAwLCAvLyBob3cgZnJlcXVlbnRseSB3ZSBjaGVjayBmb3IgY2xvY2sgc2tld1xuICAgIHRhc2tIZWFkLFxuICAgIHRhc2tUYWlsLFxuICAgIGNsb2NrTGFzdCA9IDAsXG4gICAgY2xvY2tOb3cgPSAwLFxuICAgIGNsb2NrU2tldyA9IDAsXG4gICAgY2xvY2sgPSB0eXBlb2YgcGVyZm9ybWFuY2UgPT09IFwib2JqZWN0XCIgJiYgcGVyZm9ybWFuY2Uubm93ID8gcGVyZm9ybWFuY2UgOiBEYXRlLFxuICAgIHNldEZyYW1lID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHdpbmRvdykgOiBmdW5jdGlvbihmKSB7IHNldFRpbWVvdXQoZiwgMTcpOyB9O1xuXG5leHBvcnQgZnVuY3Rpb24gbm93KCkge1xuICByZXR1cm4gY2xvY2tOb3cgfHwgKHNldEZyYW1lKGNsZWFyTm93KSwgY2xvY2tOb3cgPSBjbG9jay5ub3coKSArIGNsb2NrU2tldyk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyTm93KCkge1xuICBjbG9ja05vdyA9IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUaW1lcigpIHtcbiAgdGhpcy5fY2FsbCA9XG4gIHRoaXMuX3RpbWUgPVxuICB0aGlzLl9uZXh0ID0gbnVsbDtcbn1cblxuVGltZXIucHJvdG90eXBlID0gdGltZXIucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogVGltZXIsXG4gIHJlc3RhcnQ6IGZ1bmN0aW9uKGNhbGxiYWNrLCBkZWxheSwgdGltZSkge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcImNhbGxiYWNrIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgIHRpbWUgPSAodGltZSA9PSBudWxsID8gbm93KCkgOiArdGltZSkgKyAoZGVsYXkgPT0gbnVsbCA/IDAgOiArZGVsYXkpO1xuICAgIGlmICghdGhpcy5fbmV4dCAmJiB0YXNrVGFpbCAhPT0gdGhpcykge1xuICAgICAgaWYgKHRhc2tUYWlsKSB0YXNrVGFpbC5fbmV4dCA9IHRoaXM7XG4gICAgICBlbHNlIHRhc2tIZWFkID0gdGhpcztcbiAgICAgIHRhc2tUYWlsID0gdGhpcztcbiAgICB9XG4gICAgdGhpcy5fY2FsbCA9IGNhbGxiYWNrO1xuICAgIHRoaXMuX3RpbWUgPSB0aW1lO1xuICAgIHNsZWVwKCk7XG4gIH0sXG4gIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9jYWxsKSB7XG4gICAgICB0aGlzLl9jYWxsID0gbnVsbDtcbiAgICAgIHRoaXMuX3RpbWUgPSBJbmZpbml0eTtcbiAgICAgIHNsZWVwKCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdGltZXIoY2FsbGJhY2ssIGRlbGF5LCB0aW1lKSB7XG4gIHZhciB0ID0gbmV3IFRpbWVyO1xuICB0LnJlc3RhcnQoY2FsbGJhY2ssIGRlbGF5LCB0aW1lKTtcbiAgcmV0dXJuIHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lckZsdXNoKCkge1xuICBub3coKTsgLy8gR2V0IHRoZSBjdXJyZW50IHRpbWUsIGlmIG5vdCBhbHJlYWR5IHNldC5cbiAgKytmcmFtZTsgLy8gUHJldGVuZCB3ZeKAmXZlIHNldCBhbiBhbGFybSwgaWYgd2UgaGF2ZW7igJl0IGFscmVhZHkuXG4gIHZhciB0ID0gdGFza0hlYWQsIGU7XG4gIHdoaWxlICh0KSB7XG4gICAgaWYgKChlID0gY2xvY2tOb3cgLSB0Ll90aW1lKSA+PSAwKSB0Ll9jYWxsLmNhbGwobnVsbCwgZSk7XG4gICAgdCA9IHQuX25leHQ7XG4gIH1cbiAgLS1mcmFtZTtcbn1cblxuZnVuY3Rpb24gd2FrZSgpIHtcbiAgY2xvY2tOb3cgPSAoY2xvY2tMYXN0ID0gY2xvY2subm93KCkpICsgY2xvY2tTa2V3O1xuICBmcmFtZSA9IHRpbWVvdXQgPSAwO1xuICB0cnkge1xuICAgIHRpbWVyRmx1c2goKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBmcmFtZSA9IDA7XG4gICAgbmFwKCk7XG4gICAgY2xvY2tOb3cgPSAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBva2UoKSB7XG4gIHZhciBub3cgPSBjbG9jay5ub3coKSwgZGVsYXkgPSBub3cgLSBjbG9ja0xhc3Q7XG4gIGlmIChkZWxheSA+IHBva2VEZWxheSkgY2xvY2tTa2V3IC09IGRlbGF5LCBjbG9ja0xhc3QgPSBub3c7XG59XG5cbmZ1bmN0aW9uIG5hcCgpIHtcbiAgdmFyIHQwLCB0MSA9IHRhc2tIZWFkLCB0MiwgdGltZSA9IEluZmluaXR5O1xuICB3aGlsZSAodDEpIHtcbiAgICBpZiAodDEuX2NhbGwpIHtcbiAgICAgIGlmICh0aW1lID4gdDEuX3RpbWUpIHRpbWUgPSB0MS5fdGltZTtcbiAgICAgIHQwID0gdDEsIHQxID0gdDEuX25leHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHQyID0gdDEuX25leHQsIHQxLl9uZXh0ID0gbnVsbDtcbiAgICAgIHQxID0gdDAgPyB0MC5fbmV4dCA9IHQyIDogdGFza0hlYWQgPSB0MjtcbiAgICB9XG4gIH1cbiAgdGFza1RhaWwgPSB0MDtcbiAgc2xlZXAodGltZSk7XG59XG5cbmZ1bmN0aW9uIHNsZWVwKHRpbWUpIHtcbiAgaWYgKGZyYW1lKSByZXR1cm47IC8vIFNvb25lc3QgYWxhcm0gYWxyZWFkeSBzZXQsIG9yIHdpbGwgYmUuXG4gIGlmICh0aW1lb3V0KSB0aW1lb3V0ID0gY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICB2YXIgZGVsYXkgPSB0aW1lIC0gY2xvY2tOb3c7IC8vIFN0cmljdGx5IGxlc3MgdGhhbiBpZiB3ZSByZWNvbXB1dGVkIGNsb2NrTm93LlxuICBpZiAoZGVsYXkgPiAyNCkge1xuICAgIGlmICh0aW1lIDwgSW5maW5pdHkpIHRpbWVvdXQgPSBzZXRUaW1lb3V0KHdha2UsIHRpbWUgLSBjbG9jay5ub3coKSAtIGNsb2NrU2tldyk7XG4gICAgaWYgKGludGVydmFsKSBpbnRlcnZhbCA9IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9IGVsc2Uge1xuICAgIGlmICghaW50ZXJ2YWwpIGNsb2NrTGFzdCA9IGNsb2NrLm5vdygpLCBpbnRlcnZhbCA9IHNldEludGVydmFsKHBva2UsIHBva2VEZWxheSk7XG4gICAgZnJhbWUgPSAxLCBzZXRGcmFtZSh3YWtlKTtcbiAgfVxufVxuIiwiLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBkZWZhdWx0IGNvbmZpZ3VyYXRpb25zIGluIE5ldFZcclxuICogQGF1dGhvciBYaWFvZG9uZyBaaGFvIDx6aGFveGlhb2RvbmdAemp1LmVkdS5jbj5cclxuICovXHJcblxyXG5pbXBvcnQgTm9kZSBmcm9tICcuL25vZGUnXHJcbmltcG9ydCBMaW5rIGZyb20gJy4vbGluaydcclxuXHJcbmV4cG9ydCBjb25zdCB3aWR0aCA9IDgwMFxyXG5leHBvcnQgY29uc3QgaGVpZ2h0ID0gNjAwXHJcbmV4cG9ydCBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDEsIGE6IDEgfVxyXG5leHBvcnQgY29uc3QgZW5hYmxlUGFuWm9vbSA9IHRydWVcclxuZXhwb3J0IGNvbnN0IG5vZGVMaW1pdCA9IDEwMFxyXG5leHBvcnQgY29uc3QgbGlua0xpbWl0ID0gMTAwMFxyXG5leHBvcnQgY29uc3QgbGF6eVVwZGF0ZVRocmVzaG9sZCA9IDEwXHJcblxyXG5leHBvcnQgY29uc3Qgbm9kZSA9IHtcclxuICAgIHI6IDUsXHJcbiAgICBmaWxsOiB7IHI6IDAuMiwgZzogMC42LCBiOiAwLjIsIGE6IDAuOCB9LFxyXG4gICAgLy8gc3Ryb2tlQ29sb3I6IHsgcjogMC42LCBnOiAwLjYsIGI6IDAuNiwgYTogMC41IH0sXHJcbiAgICBzdHJva2VDb2xvcjogeyByOiAwLjksIGc6IDAuOSwgYjogMC45LCBhOiAwLjYgfSxcclxuICAgIHN0cm9rZVdpZHRoOiAyLFxyXG4gICAgc2hvd0xhYmVsOiBmYWxzZSxcclxuICAgIC8vIHRleHRPZmZzZXQ6IHsgeDogOCwgeTogMCB9LCBwdXQgaW4gbGFiZWwgY29uZmlnIGluc3RlYWQgb2YgZWFjaCBub2RlXHJcbiAgICBjbGlja0NhbGxiYWNrOiAobm9kZTogTm9kZSkgPT4ge30sXHJcbiAgICBob3ZlckNhbGxiYWNrOiAobm9kZTogTm9kZSkgPT4ge31cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmsgPSB7XHJcbiAgICAvLyBzdHJva2VDb2xvcjogeyByOiAwLjUsIGc6IDAuNSwgYjogMC41LCBhOiAwLjIgfSxcclxuICAgIHN0cm9rZUNvbG9yOiB7IHI6IDAuNCwgZzogMC42LCBiOiAwLjgsIGE6IDAuNSB9LFxyXG4gICAgc3Ryb2tlV2lkdGg6IDIsXHJcbiAgICBjbGlja0NhbGxiYWNrOiAobGluazogTGluaykgPT4ge30sXHJcbiAgICBob3ZlckNhbGxiYWNrOiAobm9kZTogTm9kZSkgPT4ge31cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxhYmVsID0ge1xyXG4gICAgb2Zmc2V0OiB7IHg6IDgsIHk6IDAgfSxcclxuICAgIGZvbnRTaXplOiAxOCxcclxuICAgIHN0cm9rZVdpZHRoOiAwLjVcclxufVxyXG4iLCIvKipcclxuICogQGF1dGhvciBYaWFvZG9uZyBaaGFvIDx6aGFveGlhb2RvbmdAemp1LmVkdS5jbj5cclxuICogQGRlc2NyaXB0aW9uIGJ1aWxkLWluIGRhdGFzZXQgaW4gTmV0VlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IG1pc2VyYWJsZXMgfSBmcm9tICcuL21pc2VyYWJsZXMnXHJcbmltcG9ydCB7IHBhdGVudHMgfSBmcm9tICcuL3BhdGVudHMnXHJcblxyXG5leHBvcnQgeyBtaXNlcmFibGVzLCBwYXRlbnRzIH1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XHJcbiAqIEBkZXNjcmlwdGlvbiBMZXMgTWlzZXJhYmxlcyByZWxhdGlvbiBkYXRhc2V0LlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gZ2VuZXJhdGVkIGJ5IGQzLWZvcmNlOiBodHRwczovL29ic2VydmFibGVocS5jb20vQGQzL2ZvcmNlLWRpcmVjdGVkLWdyYXBoXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IG1pc2VyYWJsZXMgPSB7XHJcbiAgICBub2RlczogW1xyXG4gICAgICAgIHsgaWQ6ICdNeXJpZWwnLCB4OiAyOTMuNDcxNDUxMTc1NTM2MjMsIHk6IDM1Ni40MzM1NzE4MTA0MTM4LCBncm91cDogMSB9LFxyXG4gICAgICAgIHsgaWQ6ICdOYXBvbGVvbicsIHg6IDI1My45MDI1MDg4NjE4NjU2LCB5OiAzNzQuMzA1ODExNjUzNjQ0NSwgZ3JvdXA6IDEgfSxcclxuICAgICAgICB7IGlkOiAnTWxsZS5CYXB0aXN0aW5lJywgeDogMzUwLjkyNzI0OTg5OTE4MDc3LCB5OiAzMzIuMzMyNTUzOTk5OTk0MywgZ3JvdXA6IDEgfSxcclxuICAgICAgICB7IGlkOiAnTW1lLk1hZ2xvaXJlJywgeDogMzU2LjA5MTYxNTY1Mzk5OTcsIHk6IDM1Mi43ODg1Nzk5MTE2MDE1LCBncm91cDogMSB9LFxyXG4gICAgICAgIHsgaWQ6ICdDb3VudGVzc2RlTG8nLCB4OiAyNTQuMjkyOTE1MjA5ODkzMzUsIHk6IDM1Ny4zMTc1NzM0MDc2NDE3LCBncm91cDogMSB9LFxyXG4gICAgICAgIHsgaWQ6ICdHZWJvcmFuZCcsIHg6IDI1Ny44NTcyOTM2MjYyMDEsIHk6IDMzNS44NTQyNzYyODM1ODk1NywgZ3JvdXA6IDEgfSxcclxuICAgICAgICB7IGlkOiAnQ2hhbXB0ZXJjaWVyJywgeDogMjU5LjYyNTU1NjM4MjUwMjgsIHk6IDM4My44MzAyNzQ2OTgzMjgxNCwgZ3JvdXA6IDEgfSxcclxuICAgICAgICB7IGlkOiAnQ3JhdmF0dGUnLCB4OiAyNDkuODU5NjQ1OTgyOTEzOSwgeTogMzQ2LjE4MjI1NTE2ODMyNDk2LCBncm91cDogMSB9LFxyXG4gICAgICAgIHsgaWQ6ICdDb3VudCcsIHg6IDI2OS45Njc5Mzk1MTM1MDkyNCwgeTogMzkwLjY4MDA4NDIzMjE1NzEsIGdyb3VwOiAxIH0sXHJcbiAgICAgICAgeyBpZDogJ09sZE1hbicsIHg6IDI0Ni43Mzk1MjMxMTI3NzY2NSwgeTogMzY0LjU5MzU3NDk0NDMyMDY2LCBncm91cDogMSB9LFxyXG4gICAgICAgIHsgaWQ6ICdMYWJhcnJlJywgeDogNDQzLjUxNjU4MzMxNTAyNiwgeTogMzU4LjI5MjA0Nzg5NDc3NjgzLCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdWYWxqZWFuJywgeDogNDQyLjE2ODk0NzU3NjQxNTA2LCB5OiAzMjAuODMxNTUzMjE2MDg2MSwgZ3JvdXA6IDIgfSxcclxuICAgICAgICB7IGlkOiAnTWFyZ3Vlcml0ZScsIHg6IDQxMy4zODE2ODUxMDA3OTMxLCB5OiAyNDAuMDQwOTE1NTkyOTY1MDQsIGdyb3VwOiAzIH0sXHJcbiAgICAgICAgeyBpZDogJ01tZS5kZVInLCB4OiA0MjcuMjM2MTcxNTk1MDI1NCwgeTogMzU1LjEwMjExNTg5OTc5NTE0LCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdJc2FiZWF1JywgeDogNDA1Ljg1MDgyODU4MTkxODM0LCB5OiAzMzAuNTIwMTUxMjIwNTA4NSwgZ3JvdXA6IDIgfSxcclxuICAgICAgICB7IGlkOiAnR2VydmFpcycsIHg6IDQwNS4yMTEzMTIxOTA2ODgxLCB5OiAzMTYuMjkxMjUzNTkzOTYxMzYsIGdyb3VwOiAyIH0sXHJcbiAgICAgICAgeyBpZDogJ1Rob2xvbXllcycsIHg6IDQyMi40MTI1MzA3NzgxNjQ2LCB5OiAxMjYuMDc2NDk0NDk3NzU4MDYsIGdyb3VwOiAzIH0sXHJcbiAgICAgICAgeyBpZDogJ0xpc3RvbGllcicsIHg6IDM2My4xNzI5NDIyNjc3OTc5LCB5OiAxMDIuNzc4OTAzNjgyODk3ODUsIGdyb3VwOiAzIH0sXHJcbiAgICAgICAgeyBpZDogJ0ZhbWV1aWwnLCB4OiAzODEuNzk0NzEwMzA5NDAyOCwgeTogNjYuNTgxMzM3MjQwNDM5NDgsIGdyb3VwOiAzIH0sXHJcbiAgICAgICAgeyBpZDogJ0JsYWNoZXZpbGxlJywgeDogMzgzLjE3OTI2NzY3NDAyNjEsIHk6IDk0LjgwMzIwMzE1NTAwMTU0LCBncm91cDogMyB9LFxyXG4gICAgICAgIHsgaWQ6ICdGYXZvdXJpdGUnLCB4OiAzNjEuODkzNzMxNjQ0Mjg1LCB5OiA3MC4zODY5NjM4MTM4NDA3NCwgZ3JvdXA6IDMgfSxcclxuICAgICAgICB7IGlkOiAnRGFobGlhJywgeDogMzk4Ljc1MzUwOTg4MzUxNjUzLCB5OiA3Ny4wOTcwMDc1MTUyNzExOSwgZ3JvdXA6IDMgfSxcclxuICAgICAgICB7IGlkOiAnWmVwaGluZScsIHg6IDM0OS4wNDk1OTE0NjAxMzc2LCB5OiA4OC44MDg4ODYxMzM3MjcxMywgZ3JvdXA6IDMgfSxcclxuICAgICAgICB7IGlkOiAnRmFudGluZScsIHg6IDM5OC4wMTQxMTQzODcwMjQ3MywgeTogMTczLjc2NDQ0MTk2OTQ1OTc3LCBncm91cDogMyB9LFxyXG4gICAgICAgIHsgaWQ6ICdNbWUuVGhlbmFyZGllcicsIHg6IDQ3MS4yNTE2NTMzMzg2NzI1LCB5OiAyNjIuMjE4NzAxNjY2NjQ1LCBncm91cDogNCB9LFxyXG4gICAgICAgIHsgaWQ6ICdUaGVuYXJkaWVyJywgeDogNTA0LjgxNjcyMDg1NjAzMDY2LCB5OiAyODMuMDQ2Mzg5MDA0ODE3MjMsIGdyb3VwOiA0IH0sXHJcbiAgICAgICAgeyBpZDogJ0Nvc2V0dGUnLCB4OiA0NzIuMzM0Njk0MTQ4NzE5MiwgeTogMjI4LjY4Nzc5NDQzMzAzNDc4LCBncm91cDogNSB9LFxyXG4gICAgICAgIHsgaWQ6ICdKYXZlcnQnLCB4OiA0NjAuMDUyNTc2ODkzMzI4MzYsIHk6IDI5NS41NTc4MTU0MjY4OTA0LCBncm91cDogNCB9LFxyXG4gICAgICAgIHsgaWQ6ICdGYXVjaGVsZXZlbnQnLCB4OiAzODUuNDM5MzU3NjQ1ODk5ODYsIHk6IDMwMi4xMjgyNDU4ODYyMjg1NywgZ3JvdXA6IDAgfSxcclxuICAgICAgICB7IGlkOiAnQmFtYXRhYm9pcycsIHg6IDM5My4xOTA0MTU5MDM4MzU5NywgeTogMzQ1LjQ5NzE2Njc2OTA4MTcsIGdyb3VwOiAyIH0sXHJcbiAgICAgICAgeyBpZDogJ1BlcnBldHVlJywgeDogMzY3LjUzODMzMTMyODkzOTc2LCB5OiAxOTQuNTU1NjQ4MjMwNjI3MSwgZ3JvdXA6IDMgfSxcclxuICAgICAgICB7IGlkOiAnU2ltcGxpY2UnLCB4OiA0MDEuMzYyMjI1MjM1NDY1NSwgeTogMjQyLjk5ODI4NDc5OTQ1NzYsIGdyb3VwOiAyIH0sXHJcbiAgICAgICAgeyBpZDogJ1NjYXVmZmxhaXJlJywgeDogNDE0LjY3MDcyNzk5NjI3NTczLCB5OiAzNDQuMDU0NzcyMDk0NTczNiwgZ3JvdXA6IDIgfSxcclxuICAgICAgICB7IGlkOiAnV29tYW4xJywgeDogNDIxLjQxNjc0MTQzOTI0MjYsIHk6IDI5My4zMTEyMDIxOTEyOTM5NCwgZ3JvdXA6IDIgfSxcclxuICAgICAgICB7IGlkOiAnSnVkZ2UnLCB4OiA0MjAuMDQzOTIwMDc4NDEzMzUsIHk6IDQwMS4wMzIzMzYwOTE1Mjc0NCwgZ3JvdXA6IDIgfSxcclxuICAgICAgICB7IGlkOiAnQ2hhbXBtYXRoaWV1JywgeDogMzc3Ljc5NTI0MjU0NjIxODMzLCB5OiAzODMuODEwNTc4NzExNTEwMiwgZ3JvdXA6IDIgfSxcclxuICAgICAgICB7IGlkOiAnQnJldmV0JywgeDogNDAxLjk1Mjk4NDQ0Njk5OTIsIHk6IDM4OC44Njg0NzgyOTg3NDExLCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdDaGVuaWxkaWV1JywgeDogNDAwLjY2ODU3MDcxMzM1MzgsIHk6IDQxMy40OTQxNzc5MDUyMzQ2NiwgZ3JvdXA6IDIgfSxcclxuICAgICAgICB7IGlkOiAnQ29jaGVwYWlsbGUnLCB4OiAzNzkuMDQ5Njk3MDQ0NjIzNTQsIHk6IDQwNC4yNjk3NDA1OTIzMzE2MywgZ3JvdXA6IDIgfSxcclxuICAgICAgICB7IGlkOiAnUG9udG1lcmN5JywgeDogNTUzLjExMzc0MDE3NTAxOTgsIHk6IDI0NC45MjgzMDAyNzM2MDc2NSwgZ3JvdXA6IDQgfSxcclxuICAgICAgICB7IGlkOiAnQm91bGF0cnVlbGxlJywgeDogNDkwLjE1NzEwODYwODY5MzIsIHk6IDI0OS4yMTAxOTIzODM1ODAzLCBncm91cDogNiB9LFxyXG4gICAgICAgIHsgaWQ6ICdFcG9uaW5lJywgeDogNTQ5Ljc1ODQyNjc1NzE4OTIsIHk6IDMwMi45MDMxMDY1MjI4NDMxLCBncm91cDogNCB9LFxyXG4gICAgICAgIHsgaWQ6ICdBbnplbG1hJywgeDogNTE1LjM4MDczOTkzOTUxMzQsIHk6IDI1Ny4wMTc5Njg4OTgzOTExLCBncm91cDogNCB9LFxyXG4gICAgICAgIHsgaWQ6ICdXb21hbjInLCB4OiA0MzMuNjYwODY2NTM0MDUxNCwgeTogMjY1LjgxNzQ2NzM4ODY2MzQsIGdyb3VwOiA1IH0sXHJcbiAgICAgICAgeyBpZDogJ01vdGhlcklubm9jZW50JywgeDogNDAzLjAyNTM2MjU3NDE2NTIzLCB5OiAyODkuMDMzMTIyMDAxMjEzMjYsIGdyb3VwOiAwIH0sXHJcbiAgICAgICAgeyBpZDogJ0dyaWJpZXInLCB4OiAzNDEuODA5NzMyMjc0NTY3NzUsIHk6IDI5NC4yMTIzOTYxNDgwMjMsIGdyb3VwOiAwIH0sXHJcbiAgICAgICAgeyBpZDogJ0pvbmRyZXR0ZScsIHg6IDU2NS4xOTY1MzAzNDIyMTg2LCB5OiA0NzAuNjU5NTAzNDkzNzU4NTYsIGdyb3VwOiA3IH0sXHJcbiAgICAgICAgeyBpZDogJ01tZS5CdXJnb24nLCB4OiA1NjkuMTg5NjI2OTI0MjEwMSwgeTogNDI2LjY2MTg1MDUzODI0NTYzLCBncm91cDogNyB9LFxyXG4gICAgICAgIHsgaWQ6ICdHYXZyb2NoZScsIHg6IDU3Mi4xNjE5MzkzOTM2ODI2LCB5OiAzNjQuMjI2MDY3NjY0OTc1NjMsIGdyb3VwOiA4IH0sXHJcbiAgICAgICAgeyBpZDogJ0dpbGxlbm9ybWFuZCcsIHg6IDUyNC41OTE0NTA1MjA4MDA1LCB5OiAyNTcuNDAxMjIxNDgyODMzNiwgZ3JvdXA6IDUgfSxcclxuICAgICAgICB7IGlkOiAnTWFnbm9uJywgeDogNDkyLjU0ODM5MzIwMjM0MSwgeTogMjIyLjU5NjYzNTEzMjg4ODUsIGdyb3VwOiA1IH0sXHJcbiAgICAgICAgeyBpZDogJ01sbGUuR2lsbGVub3JtYW5kJywgeDogNTE0LjM2OTI2NTUwMjM2NDQsIHk6IDIyOS4wOTY3MDA2MjM4OTI4MSwgZ3JvdXA6IDUgfSxcclxuICAgICAgICB7IGlkOiAnTW1lLlBvbnRtZXJjeScsIHg6IDU0OS4zMjUwNTA4MTcxNDc0LCB5OiAxOTYuMTQwNTY4MzMwODQ5MzYsIGdyb3VwOiA1IH0sXHJcbiAgICAgICAgeyBpZDogJ01sbGUuVmF1Ym9pcycsIHg6IDUxNy44NTkzNTcyMzk0MDcxLCB5OiAxODYuMjQ4ODMwOTExMTU2NSwgZ3JvdXA6IDUgfSxcclxuICAgICAgICB7IGlkOiAnTHQuR2lsbGVub3JtYW5kJywgeDogNTQzLjI3NDk2MTEzOTQ1NSwgeTogMjIzLjY4MTg0Mjg1MTgwOTc2LCBncm91cDogNSB9LFxyXG4gICAgICAgIHsgaWQ6ICdNYXJpdXMnLCB4OiA1NzQuMjU3NjY5OTA1NjEzOSwgeTogMjgzLjg1MjExNzA4MzEwMzM0LCBncm91cDogOCB9LFxyXG4gICAgICAgIHsgaWQ6ICdCYXJvbmVzc1QnLCB4OiA1NzMuNzE0MDkwOTY1MDYyNSwgeTogMjQ1LjU5MzExOTA5MjQ1ODE4LCBncm91cDogNSB9LFxyXG4gICAgICAgIHsgaWQ6ICdNYWJldWYnLCB4OiA2MjguNTQzMjUzMjQ4NjE5MSwgeTogMzE0LjIyMDc4NDA4NjI3MTY0LCBncm91cDogOCB9LFxyXG4gICAgICAgIHsgaWQ6ICdFbmpvbHJhcycsIHg6IDU4OC4yMzk1NDk4MDkzNjI2LCB5OiAzNDIuMDU5NDQ2OTkyMzI3OSwgZ3JvdXA6IDggfSxcclxuICAgICAgICB7IGlkOiAnQ29tYmVmZXJyZScsIHg6IDYzNy43MzcwNjY0NjE0NjM3LCB5OiAzNTEuNjkyMzU3NjI3ODgzOTUsIGdyb3VwOiA4IH0sXHJcbiAgICAgICAgeyBpZDogJ1Byb3V2YWlyZScsIHg6IDY1MC44ODMzNTIyODY5OTAzLCB5OiAzODYuODM5MTgxMDM1MDk5MTYsIGdyb3VwOiA4IH0sXHJcbiAgICAgICAgeyBpZDogJ0ZldWlsbHknLCB4OiA2MjYuODU1NjYwNjQzODEwOSwgeTogMzY1LjkwODQxNjQ1OTMxNDEsIGdyb3VwOiA4IH0sXHJcbiAgICAgICAgeyBpZDogJ0NvdXJmZXlyYWMnLCB4OiA2MjguMzQ0ODk4OTk3NTAxMywgeTogMzM2Ljc2NjY0NTQxMTkwMjIsIGdyb3VwOiA4IH0sXHJcbiAgICAgICAgeyBpZDogJ0JhaG9yZWwnLCB4OiA2NTYuNzcxNzc3Mjc2NDk4NSwgeTogMzYyLjU4ODU4ODI1MDkxODksIGdyb3VwOiA4IH0sXHJcbiAgICAgICAgeyBpZDogJ0Jvc3N1ZXQnLCB4OiA1OTkuMDE4NTc2NTc0MzEwNywgeTogMzYzLjgyODY3MjM0MDcwNTMsIGdyb3VwOiA4IH0sXHJcbiAgICAgICAgeyBpZDogJ0pvbHknLCB4OiA2NTYuNjE4MjkyMzczNTQwOCwgeTogMzQzLjIzNzU3MzM1NTkxNjUsIGdyb3VwOiA4IH0sXHJcbiAgICAgICAgeyBpZDogJ0dyYW50YWlyZScsIHg6IDYzOC40Mzc1ODU1MzE0OTg4LCB5OiA0MDIuNDM4NzI1MDM3ODk5NSwgZ3JvdXA6IDggfSxcclxuICAgICAgICB7IGlkOiAnTW90aGVyUGx1dGFyY2gnLCB4OiA2NjQuNTU2NzIzODYxODgzLCB5OiAyOTguMDMzNjk2NDUyNjc4NiwgZ3JvdXA6IDkgfSxcclxuICAgICAgICB7IGlkOiAnR3VldWxlbWVyJywgeDogNTA4LjE2NDUwNTI1ODE3ODA1LCB5OiAzMzAuNDUwMjkwNzQ0NDM2NywgZ3JvdXA6IDQgfSxcclxuICAgICAgICB7IGlkOiAnQmFiZXQnLCB4OiA0OTIuNTYwMDUyNzk4ODIwOTUsIHk6IDMyNS45ODM0MDkyODQ4NDI3LCBncm91cDogNCB9LFxyXG4gICAgICAgIHsgaWQ6ICdDbGFxdWVzb3VzJywgeDogNTEwLjkzODU1NTA2MjUwMDc3LCB5OiAzMDkuMjg2OTM4MDY5NzMyOCwgZ3JvdXA6IDQgfSxcclxuICAgICAgICB7IGlkOiAnTW9udHBhcm5hc3NlJywgeDogNTAyLjcxOTA4OTQxNzM1NTcsIHk6IDM1MC45Mjc1MTgzMTMzNDM4LCBncm91cDogNCB9LFxyXG4gICAgICAgIHsgaWQ6ICdUb3Vzc2FpbnQnLCB4OiA0NDUuMTI1NDgwMjA1NjgwNywgeTogMjY2LjQ2MjQyNjY1MDIyMDA0LCBncm91cDogNSB9LFxyXG4gICAgICAgIHsgaWQ6ICdDaGlsZDEnLCB4OiA1ODguMDM1MTU1MjM4Njk2MSwgeTogNDEwLjIxOTU1NTU5NjE5OTYsIGdyb3VwOiAxMCB9LFxyXG4gICAgICAgIHsgaWQ6ICdDaGlsZDInLCB4OiA1NTkuMjc3NzgxNDc4MjcwNSwgeTogNDA4LjM1MzMxODQ4OTM1NjksIGdyb3VwOiAxMCB9LFxyXG4gICAgICAgIHsgaWQ6ICdCcnVqb24nLCB4OiA1MzcuMTc4NzM4MzkwNDY1NiwgeTogMzM3Ljg2OTIyNzc1OTE3OTQ3LCBncm91cDogNCB9LFxyXG4gICAgICAgIHsgaWQ6ICdNbWUuSHVjaGVsb3VwJywgeDogNjI2LjM3NzU4NTA0NjYxNjQsIHk6IDM4NC4zNTIwMjA2Njg5NDUxNiwgZ3JvdXA6IDggfVxyXG4gICAgXSxcclxuXHJcbiAgICBsaW5rczogW1xyXG4gICAgICAgIHsgc291cmNlOiAnTmFwb2xlb24nLCB0YXJnZXQ6ICdNeXJpZWwnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWxsZS5CYXB0aXN0aW5lJywgdGFyZ2V0OiAnTXlyaWVsJywgdmFsdWU6IDggfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5NYWdsb2lyZScsIHRhcmdldDogJ015cmllbCcsIHZhbHVlOiAxMCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLk1hZ2xvaXJlJywgdGFyZ2V0OiAnTWxsZS5CYXB0aXN0aW5lJywgdmFsdWU6IDYgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvdW50ZXNzZGVMbycsIHRhcmdldDogJ015cmllbCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHZWJvcmFuZCcsIHRhcmdldDogJ015cmllbCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDaGFtcHRlcmNpZXInLCB0YXJnZXQ6ICdNeXJpZWwnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ3JhdmF0dGUnLCB0YXJnZXQ6ICdNeXJpZWwnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ291bnQnLCB0YXJnZXQ6ICdNeXJpZWwnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnT2xkTWFuJywgdGFyZ2V0OiAnTXlyaWVsJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1ZhbGplYW4nLCB0YXJnZXQ6ICdMYWJhcnJlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1ZhbGplYW4nLCB0YXJnZXQ6ICdNbWUuTWFnbG9pcmUnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnVmFsamVhbicsIHRhcmdldDogJ01sbGUuQmFwdGlzdGluZScsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdWYWxqZWFuJywgdGFyZ2V0OiAnTXlyaWVsJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hcmd1ZXJpdGUnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5kZVInLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0lzYWJlYXUnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dlcnZhaXMnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0xpc3RvbGllcicsIHRhcmdldDogJ1Rob2xvbXllcycsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYW1ldWlsJywgdGFyZ2V0OiAnVGhvbG9teWVzJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhbWV1aWwnLCB0YXJnZXQ6ICdMaXN0b2xpZXInLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmxhY2hldmlsbGUnLCB0YXJnZXQ6ICdUaG9sb215ZXMnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmxhY2hldmlsbGUnLCB0YXJnZXQ6ICdMaXN0b2xpZXInLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmxhY2hldmlsbGUnLCB0YXJnZXQ6ICdGYW1ldWlsJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Zhdm91cml0ZScsIHRhcmdldDogJ1Rob2xvbXllcycsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYXZvdXJpdGUnLCB0YXJnZXQ6ICdMaXN0b2xpZXInLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmF2b3VyaXRlJywgdGFyZ2V0OiAnRmFtZXVpbCcsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYXZvdXJpdGUnLCB0YXJnZXQ6ICdCbGFjaGV2aWxsZScsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdEYWhsaWEnLCB0YXJnZXQ6ICdUaG9sb215ZXMnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRGFobGlhJywgdGFyZ2V0OiAnTGlzdG9saWVyJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0RhaGxpYScsIHRhcmdldDogJ0ZhbWV1aWwnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRGFobGlhJywgdGFyZ2V0OiAnQmxhY2hldmlsbGUnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRGFobGlhJywgdGFyZ2V0OiAnRmF2b3VyaXRlJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1plcGhpbmUnLCB0YXJnZXQ6ICdUaG9sb215ZXMnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnWmVwaGluZScsIHRhcmdldDogJ0xpc3RvbGllcicsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdaZXBoaW5lJywgdGFyZ2V0OiAnRmFtZXVpbCcsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdaZXBoaW5lJywgdGFyZ2V0OiAnQmxhY2hldmlsbGUnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnWmVwaGluZScsIHRhcmdldDogJ0Zhdm91cml0ZScsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdaZXBoaW5lJywgdGFyZ2V0OiAnRGFobGlhJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhbnRpbmUnLCB0YXJnZXQ6ICdUaG9sb215ZXMnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmFudGluZScsIHRhcmdldDogJ0xpc3RvbGllcicsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYW50aW5lJywgdGFyZ2V0OiAnRmFtZXVpbCcsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYW50aW5lJywgdGFyZ2V0OiAnQmxhY2hldmlsbGUnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmFudGluZScsIHRhcmdldDogJ0Zhdm91cml0ZScsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYW50aW5lJywgdGFyZ2V0OiAnRGFobGlhJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhbnRpbmUnLCB0YXJnZXQ6ICdaZXBoaW5lJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhbnRpbmUnLCB0YXJnZXQ6ICdNYXJndWVyaXRlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhbnRpbmUnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDkgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5UaGVuYXJkaWVyJywgdGFyZ2V0OiAnRmFudGluZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuVGhlbmFyZGllcicsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogNyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnVGhlbmFyZGllcicsIHRhcmdldDogJ01tZS5UaGVuYXJkaWVyJywgdmFsdWU6IDEzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdUaGVuYXJkaWVyJywgdGFyZ2V0OiAnRmFudGluZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdUaGVuYXJkaWVyJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29zZXR0ZScsIHRhcmdldDogJ01tZS5UaGVuYXJkaWVyJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Nvc2V0dGUnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDMxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3NldHRlJywgdGFyZ2V0OiAnVGhvbG9teWVzJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Nvc2V0dGUnLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0phdmVydCcsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMTcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0phdmVydCcsIHRhcmdldDogJ0ZhbnRpbmUnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSmF2ZXJ0JywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKYXZlcnQnLCB0YXJnZXQ6ICdNbWUuVGhlbmFyZGllcicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKYXZlcnQnLCB0YXJnZXQ6ICdDb3NldHRlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhdWNoZWxldmVudCcsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogOCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmF1Y2hlbGV2ZW50JywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhbWF0YWJvaXMnLCB0YXJnZXQ6ICdGYW50aW5lJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhbWF0YWJvaXMnLCB0YXJnZXQ6ICdKYXZlcnQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFtYXRhYm9pcycsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnUGVycGV0dWUnLCB0YXJnZXQ6ICdGYW50aW5lJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1NpbXBsaWNlJywgdGFyZ2V0OiAnUGVycGV0dWUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnU2ltcGxpY2UnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1NpbXBsaWNlJywgdGFyZ2V0OiAnRmFudGluZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdTaW1wbGljZScsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdTY2F1ZmZsYWlyZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnV29tYW4xJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdXb21hbjEnLCB0YXJnZXQ6ICdKYXZlcnQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSnVkZ2UnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0p1ZGdlJywgdGFyZ2V0OiAnQmFtYXRhYm9pcycsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDaGFtcG1hdGhpZXUnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NoYW1wbWF0aGlldScsIHRhcmdldDogJ0p1ZGdlJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NoYW1wbWF0aGlldScsIHRhcmdldDogJ0JhbWF0YWJvaXMnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQnJldmV0JywgdGFyZ2V0OiAnSnVkZ2UnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQnJldmV0JywgdGFyZ2V0OiAnQ2hhbXBtYXRoaWV1JywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JyZXZldCcsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQnJldmV0JywgdGFyZ2V0OiAnQmFtYXRhYm9pcycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDaGVuaWxkaWV1JywgdGFyZ2V0OiAnSnVkZ2UnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hlbmlsZGlldScsIHRhcmdldDogJ0NoYW1wbWF0aGlldScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDaGVuaWxkaWV1JywgdGFyZ2V0OiAnQnJldmV0JywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NoZW5pbGRpZXUnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NoZW5pbGRpZXUnLCB0YXJnZXQ6ICdCYW1hdGFib2lzJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvY2hlcGFpbGxlJywgdGFyZ2V0OiAnSnVkZ2UnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29jaGVwYWlsbGUnLCB0YXJnZXQ6ICdDaGFtcG1hdGhpZXUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29jaGVwYWlsbGUnLCB0YXJnZXQ6ICdCcmV2ZXQnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29jaGVwYWlsbGUnLCB0YXJnZXQ6ICdDaGVuaWxkaWV1JywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvY2hlcGFpbGxlJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb2NoZXBhaWxsZScsIHRhcmdldDogJ0JhbWF0YWJvaXMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnUG9udG1lcmN5JywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCb3VsYXRydWVsbGUnLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Vwb25pbmUnLCB0YXJnZXQ6ICdNbWUuVGhlbmFyZGllcicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdFcG9uaW5lJywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdBbnplbG1hJywgdGFyZ2V0OiAnRXBvbmluZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdBbnplbG1hJywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdBbnplbG1hJywgdGFyZ2V0OiAnTW1lLlRoZW5hcmRpZXInLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnV29tYW4yJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdXb21hbjInLCB0YXJnZXQ6ICdDb3NldHRlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1dvbWFuMicsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNb3RoZXJJbm5vY2VudCcsIHRhcmdldDogJ0ZhdWNoZWxldmVudCcsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNb3RoZXJJbm5vY2VudCcsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3JpYmllcicsIHRhcmdldDogJ0ZhdWNoZWxldmVudCcsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuQnVyZ29uJywgdGFyZ2V0OiAnSm9uZHJldHRlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dhdnJvY2hlJywgdGFyZ2V0OiAnTW1lLkJ1cmdvbicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHYXZyb2NoZScsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR2F2cm9jaGUnLCB0YXJnZXQ6ICdKYXZlcnQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR2F2cm9jaGUnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dpbGxlbm9ybWFuZCcsIHRhcmdldDogJ0Nvc2V0dGUnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR2lsbGVub3JtYW5kJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYWdub24nLCB0YXJnZXQ6ICdHaWxsZW5vcm1hbmQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFnbm9uJywgdGFyZ2V0OiAnTW1lLlRoZW5hcmRpZXInLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWxsZS5HaWxsZW5vcm1hbmQnLCB0YXJnZXQ6ICdHaWxsZW5vcm1hbmQnLCB2YWx1ZTogOSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWxsZS5HaWxsZW5vcm1hbmQnLCB0YXJnZXQ6ICdDb3NldHRlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01sbGUuR2lsbGVub3JtYW5kJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuUG9udG1lcmN5JywgdGFyZ2V0OiAnTWxsZS5HaWxsZW5vcm1hbmQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLlBvbnRtZXJjeScsIHRhcmdldDogJ1BvbnRtZXJjeScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbGxlLlZhdWJvaXMnLCB0YXJnZXQ6ICdNbGxlLkdpbGxlbm9ybWFuZCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdMdC5HaWxsZW5vcm1hbmQnLCB0YXJnZXQ6ICdNbGxlLkdpbGxlbm9ybWFuZCcsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdMdC5HaWxsZW5vcm1hbmQnLCB0YXJnZXQ6ICdHaWxsZW5vcm1hbmQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTHQuR2lsbGVub3JtYW5kJywgdGFyZ2V0OiAnQ29zZXR0ZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJpdXMnLCB0YXJnZXQ6ICdNbGxlLkdpbGxlbm9ybWFuZCcsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJpdXMnLCB0YXJnZXQ6ICdHaWxsZW5vcm1hbmQnLCB2YWx1ZTogMTIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ1BvbnRtZXJjeScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJpdXMnLCB0YXJnZXQ6ICdMdC5HaWxsZW5vcm1hbmQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFyaXVzJywgdGFyZ2V0OiAnQ29zZXR0ZScsIHZhbHVlOiAyMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFyaXVzJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxOSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFyaXVzJywgdGFyZ2V0OiAnVGhvbG9teWVzJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFyaXVzJywgdGFyZ2V0OiAnRXBvbmluZScsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJpdXMnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYXJvbmVzc1QnLCB0YXJnZXQ6ICdHaWxsZW5vcm1hbmQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFyb25lc3NUJywgdGFyZ2V0OiAnTWFyaXVzJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hYmV1ZicsIHRhcmdldDogJ01hcml1cycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYWJldWYnLCB0YXJnZXQ6ICdFcG9uaW5lJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hYmV1ZicsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Vuam9scmFzJywgdGFyZ2V0OiAnTWFyaXVzJywgdmFsdWU6IDcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Vuam9scmFzJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogNyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRW5qb2xyYXMnLCB0YXJnZXQ6ICdKYXZlcnQnLCB2YWx1ZTogNiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRW5qb2xyYXMnLCB0YXJnZXQ6ICdNYWJldWYnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRW5qb2xyYXMnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvbWJlZmVycmUnLCB0YXJnZXQ6ICdFbmpvbHJhcycsIHZhbHVlOiAxNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29tYmVmZXJyZScsIHRhcmdldDogJ01hcml1cycsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb21iZWZlcnJlJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogNiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29tYmVmZXJyZScsIHRhcmdldDogJ01hYmV1ZicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdQcm91dmFpcmUnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdQcm91dmFpcmUnLCB0YXJnZXQ6ICdFbmpvbHJhcycsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdQcm91dmFpcmUnLCB0YXJnZXQ6ICdDb21iZWZlcnJlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZldWlsbHknLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGZXVpbGx5JywgdGFyZ2V0OiAnRW5qb2xyYXMnLCB2YWx1ZTogNiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmV1aWxseScsIHRhcmdldDogJ1Byb3V2YWlyZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGZXVpbGx5JywgdGFyZ2V0OiAnQ29tYmVmZXJyZScsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGZXVpbGx5JywgdGFyZ2V0OiAnTWFiZXVmJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZldWlsbHknLCB0YXJnZXQ6ICdNYXJpdXMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ291cmZleXJhYycsIHRhcmdldDogJ01hcml1cycsIHZhbHVlOiA5IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3VyZmV5cmFjJywgdGFyZ2V0OiAnRW5qb2xyYXMnLCB2YWx1ZTogMTcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvdXJmZXlyYWMnLCB0YXJnZXQ6ICdDb21iZWZlcnJlJywgdmFsdWU6IDEzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3VyZmV5cmFjJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogNyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ291cmZleXJhYycsIHRhcmdldDogJ01hYmV1ZicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3VyZmV5cmFjJywgdGFyZ2V0OiAnRXBvbmluZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3VyZmV5cmFjJywgdGFyZ2V0OiAnRmV1aWxseScsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3VyZmV5cmFjJywgdGFyZ2V0OiAnUHJvdXZhaXJlJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhaG9yZWwnLCB0YXJnZXQ6ICdDb21iZWZlcnJlJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhaG9yZWwnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWhvcmVsJywgdGFyZ2V0OiAnQ291cmZleXJhYycsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWhvcmVsJywgdGFyZ2V0OiAnTWFiZXVmJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhaG9yZWwnLCB0YXJnZXQ6ICdFbmpvbHJhcycsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWhvcmVsJywgdGFyZ2V0OiAnRmV1aWxseScsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWhvcmVsJywgdGFyZ2V0OiAnUHJvdXZhaXJlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhaG9yZWwnLCB0YXJnZXQ6ICdNYXJpdXMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQm9zc3VldCcsIHRhcmdldDogJ01hcml1cycsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCb3NzdWV0JywgdGFyZ2V0OiAnQ291cmZleXJhYycsIHZhbHVlOiAxMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQm9zc3VldCcsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Jvc3N1ZXQnLCB0YXJnZXQ6ICdCYWhvcmVsJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Jvc3N1ZXQnLCB0YXJnZXQ6ICdFbmpvbHJhcycsIHZhbHVlOiAxMCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQm9zc3VldCcsIHRhcmdldDogJ0ZldWlsbHknLCB2YWx1ZTogNiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQm9zc3VldCcsIHRhcmdldDogJ1Byb3V2YWlyZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCb3NzdWV0JywgdGFyZ2V0OiAnQ29tYmVmZXJyZScsIHZhbHVlOiA5IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCb3NzdWV0JywgdGFyZ2V0OiAnTWFiZXVmJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Jvc3N1ZXQnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0pvbHknLCB0YXJnZXQ6ICdCYWhvcmVsJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0pvbHknLCB0YXJnZXQ6ICdCb3NzdWV0JywgdmFsdWU6IDcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0pvbHknLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKb2x5JywgdGFyZ2V0OiAnQ291cmZleXJhYycsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKb2x5JywgdGFyZ2V0OiAnRW5qb2xyYXMnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSm9seScsIHRhcmdldDogJ0ZldWlsbHknLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSm9seScsIHRhcmdldDogJ1Byb3V2YWlyZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKb2x5JywgdGFyZ2V0OiAnQ29tYmVmZXJyZScsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKb2x5JywgdGFyZ2V0OiAnTWFiZXVmJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0pvbHknLCB0YXJnZXQ6ICdNYXJpdXMnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3JhbnRhaXJlJywgdGFyZ2V0OiAnQm9zc3VldCcsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHcmFudGFpcmUnLCB0YXJnZXQ6ICdFbmpvbHJhcycsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHcmFudGFpcmUnLCB0YXJnZXQ6ICdDb21iZWZlcnJlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dyYW50YWlyZScsIHRhcmdldDogJ0NvdXJmZXlyYWMnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3JhbnRhaXJlJywgdGFyZ2V0OiAnSm9seScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHcmFudGFpcmUnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHcmFudGFpcmUnLCB0YXJnZXQ6ICdCYWhvcmVsJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dyYW50YWlyZScsIHRhcmdldDogJ0ZldWlsbHknLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3JhbnRhaXJlJywgdGFyZ2V0OiAnUHJvdXZhaXJlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01vdGhlclBsdXRhcmNoJywgdGFyZ2V0OiAnTWFiZXVmJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0d1ZXVsZW1lcicsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3VldWxlbWVyJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHdWV1bGVtZXInLCB0YXJnZXQ6ICdNbWUuVGhlbmFyZGllcicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHdWV1bGVtZXInLCB0YXJnZXQ6ICdKYXZlcnQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3VldWxlbWVyJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3VldWxlbWVyJywgdGFyZ2V0OiAnRXBvbmluZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWJldCcsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogNiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFiZXQnLCB0YXJnZXQ6ICdHdWV1bGVtZXInLCB2YWx1ZTogNiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFiZXQnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhYmV0JywgdGFyZ2V0OiAnTW1lLlRoZW5hcmRpZXInLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFiZXQnLCB0YXJnZXQ6ICdKYXZlcnQnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFiZXQnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWJldCcsIHRhcmdldDogJ0Vwb25pbmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2xhcXVlc291cycsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2xhcXVlc291cycsIHRhcmdldDogJ0JhYmV0JywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NsYXF1ZXNvdXMnLCB0YXJnZXQ6ICdHdWV1bGVtZXInLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2xhcXVlc291cycsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2xhcXVlc291cycsIHRhcmdldDogJ01tZS5UaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NsYXF1ZXNvdXMnLCB0YXJnZXQ6ICdKYXZlcnQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2xhcXVlc291cycsIHRhcmdldDogJ0Vwb25pbmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2xhcXVlc291cycsIHRhcmdldDogJ0Vuam9scmFzJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01vbnRwYXJuYXNzZScsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNb250cGFybmFzc2UnLCB0YXJnZXQ6ICdCYWJldCcsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNb250cGFybmFzc2UnLCB0YXJnZXQ6ICdHdWV1bGVtZXInLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW9udHBhcm5hc3NlJywgdGFyZ2V0OiAnQ2xhcXVlc291cycsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNb250cGFybmFzc2UnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01vbnRwYXJuYXNzZScsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01vbnRwYXJuYXNzZScsIHRhcmdldDogJ0Vwb25pbmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW9udHBhcm5hc3NlJywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdUb3Vzc2FpbnQnLCB0YXJnZXQ6ICdDb3NldHRlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1RvdXNzYWludCcsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdUb3Vzc2FpbnQnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NoaWxkMScsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NoaWxkMicsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NoaWxkMicsIHRhcmdldDogJ0NoaWxkMScsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCcnVqb24nLCB0YXJnZXQ6ICdCYWJldCcsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCcnVqb24nLCB0YXJnZXQ6ICdHdWV1bGVtZXInLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQnJ1am9uJywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCcnVqb24nLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCcnVqb24nLCB0YXJnZXQ6ICdFcG9uaW5lJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JydWpvbicsIHRhcmdldDogJ0NsYXF1ZXNvdXMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQnJ1am9uJywgdGFyZ2V0OiAnTW9udHBhcm5hc3NlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5IdWNoZWxvdXAnLCB0YXJnZXQ6ICdCb3NzdWV0JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5IdWNoZWxvdXAnLCB0YXJnZXQ6ICdKb2x5JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5IdWNoZWxvdXAnLCB0YXJnZXQ6ICdHcmFudGFpcmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLkh1Y2hlbG91cCcsIHRhcmdldDogJ0JhaG9yZWwnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLkh1Y2hlbG91cCcsIHRhcmdldDogJ0NvdXJmZXlyYWMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLkh1Y2hlbG91cCcsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5IdWNoZWxvdXAnLCB0YXJnZXQ6ICdFbmpvbHJhcycsIHZhbHVlOiAxIH1cclxuICAgIF1cclxufVxyXG4iLCIvKipcclxuICogQGF1dGhvciBYaWFvZG9uZyBaaGFvIDx6aGFveGlhb2RvbmdAemp1LmVkdS5jbj5cclxuICogQGRlc2NyaXB0aW9uIFBhdGVudHMgZGF0YXNldCwgZnJvbSBodHRwczovL3d3dy5wYXRlbnRzdmlldy5vcmcvd2ViLyN2aXovcmVsYXRpb25zaGlwc1xyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBwYXRlbnRzID0ge1xyXG4gICAgbm9kZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY1MTYyMjcnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUmVjaGFyZ2VhYmxlIHNwaW5hbCBjb3JkIHN0aW11bGF0b3Igc3lzdGVtJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzYzLFxyXG4gICAgICAgICAgICB4OiAtMTQ2LjUwNzIyNzcyMjA2NDE2LFxyXG4gICAgICAgICAgICB5OiAyMzcuNzg5ODg0ODg2NDE4MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NTM1OTA5JyxcclxuICAgICAgICAgICAgbmFtZTogJ1N5c3RlbSBhbmQgbWV0aG9kIGZvciByZWNvcmQgYW5kIHBsYXliYWNrIG9mIGNvbGxhYm9yYXRpdmUgV2ViIGJyb3dzaW5nIHNlc3Npb24nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE0MzgsXHJcbiAgICAgICAgICAgIHg6IDMwMS4wODgwODQwNzQwMTc4LFxyXG4gICAgICAgICAgICB5OiA3OC4zNTQ0OTE5MTU4NzU0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY1NDk5MDgnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ01ldGhvZHMgYW5kIGFwcGFyYXR1cyBmb3IgaW50ZXJwcmV0aW5nIHVzZXIgc2VsZWN0aW9ucyBpbiB0aGUgY29udGV4dCBvZiBhIHJlbGF0aW9uIGRpc3RyaWJ1dGVkIGFzIGEgc2V0IG9mIG9ydGhvZ29uYWxpemVkIHN1Yi1yZWxhdGlvbnMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNjgsXHJcbiAgICAgICAgICAgIHg6IC0xMy44MTQ4NTY1OTA3NDEyMDIsXHJcbiAgICAgICAgICAgIHk6IC0xODMuNTUwMTY3OTM1MDI3NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NTUzNTYzJyxcclxuICAgICAgICAgICAgbmFtZTogJ0RldmVsb3BtZW50IHRvb2wsIG1ldGhvZCwgYW5kIHN5c3RlbSBmb3IgY2xpZW50IHNlcnZlciBhcHBsaWNhdGlvbnMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzNTEsXHJcbiAgICAgICAgICAgIHg6IC0wLjUyMjQzMTI3OTAxNDI3NzcsXHJcbiAgICAgICAgICAgIHk6IC0yNDcuMTQ5NTc3OTYyNzI3OVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NTU4MzIwJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdIYW5kaGVsZCBwZXJzb25hbCBkYXRhIGFzc2lzdGFudCAoUERBKSB3aXRoIGEgbWVkaWNhbCBkZXZpY2UgYW5kIG1ldGhvZCBvZiB1c2luZyB0aGUgc2FtZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTUxNCxcclxuICAgICAgICAgICAgeDogLTIwNC42NDA3MTg5NDY1NDc4OCxcclxuICAgICAgICAgICAgeTogNzEuNTcwNTUyODQ1MTIzMTJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjU1ODM1MScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDbG9zZWQgbG9vcCBzeXN0ZW0gZm9yIGNvbnRyb2xsaW5nIGluc3VsaW4gaW5mdXNpb24nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzNjksXHJcbiAgICAgICAgICAgIHg6IC0yMTIuOTc4MTYwMDAyMTkzODcsXHJcbiAgICAgICAgICAgIHk6IDE0LjcxNTY0MDUzNDE3MDA5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY1NjA0NjEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQXV0aG9yaXplZCBsb2NhdGlvbiByZXBvcnRpbmcgcGFnaW5nIHN5c3RlbScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTQ3OSxcclxuICAgICAgICAgICAgeDogLTI1MC40MzU0MzA2MjkwNTA5MyxcclxuICAgICAgICAgICAgeTogLTE5MS40MzcyMDA2MjQwNjAzOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NTYzMTc0JyxcclxuICAgICAgICAgICAgbmFtZTogJ1RoaW4gZmlsbSB0cmFuc2lzdG9yIGFuZCBtYXRyaXggZGlzcGxheSBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyODQsXHJcbiAgICAgICAgICAgIHg6IC0xMi41ODgyNDk1MDM2NTI0MDEsXHJcbiAgICAgICAgICAgIHk6IC0zLjYwNjYzODkyNTA3NDk1MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NTY1NTA5JyxcclxuICAgICAgICAgICAgbmFtZTogJ0FuYWx5dGUgbW9uaXRvcmluZyBkZXZpY2UgYW5kIG1ldGhvZHMgb2YgdXNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzMzLFxyXG4gICAgICAgICAgICB4OiAtMTA1LjI1NTExNjEyMzYyMDQ1LFxyXG4gICAgICAgICAgICB5OiAxNTcuMTE3MTMzNjA2MDI2MjFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjU3MTI4MicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdCbG9jay1iYXNlZCBjb21tdW5pY2F0aW9uIGluIGEgY29tbXVuaWNhdGlvbiBzZXJ2aWNlcyBwYXR0ZXJucyBlbnZpcm9ubWVudCcsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTQ2NyxcclxuICAgICAgICAgICAgeDogMTM5LjY2OTc0Njc0ODI4MSxcclxuICAgICAgICAgICAgeTogMjUzLjAxNDA2NTAxNDcxOTQyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY1NzQ2MzUnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ0FwcGxpY2F0aW9uIGluc3RhbnRpYXRpb24gYmFzZWQgdXBvbiBhdHRyaWJ1dGVzIGFuZCB2YWx1ZXMgc3RvcmVkIGluIGEgbWV0YSBkYXRhIHJlcG9zaXRvcnksIGluY2x1ZGluZyB0aWVyaW5nIG9mIGFwcGxpY2F0aW9uIGxheWVycyBvYmplY3RzIGFuZCBjb21wb25lbnRzJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzY4LFxyXG4gICAgICAgICAgICB4OiAxMS4wMDIwMjc2Mjc3ODIxMTYsXHJcbiAgICAgICAgICAgIHk6IC0yMzQuOTE4MDUyOTgzMjM1OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NTc3NzI2JyxcclxuICAgICAgICAgICAgbmFtZTogJ0NvbXB1dGVyIHRlbGVwaG9ueSBpbnRlZ3JhdGlvbiBob3RlbGxpbmcgbWV0aG9kIGFuZCBzeXN0ZW0nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNzAsXHJcbiAgICAgICAgICAgIHg6IC04Ny4xOTE1MzI0NTg0MTI2MixcclxuICAgICAgICAgICAgeTogLTE3My45NzY0NDc1NTkyOTI4NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NTg3ODM1JyxcclxuICAgICAgICAgICAgbmFtZTogJ1Nob3BwaW5nIGFzc2lzdGFuY2Ugd2l0aCBoYW5kaGVsZCBjb21wdXRpbmcgZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNDcxLFxyXG4gICAgICAgICAgICB4OiAtMjc5LjI4NjU4MTMzNzg0NjUsXHJcbiAgICAgICAgICAgIHk6IDExMC4xNTg3OTEyNTAxNTA3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2MDEwODcnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSW5zdGFudCBkb2N1bWVudCBzaGFyaW5nJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzk3LFxyXG4gICAgICAgICAgICB4OiAyMTAuOTQ4MjEzNTAxMzcxODQsXHJcbiAgICAgICAgICAgIHk6IDkyLjUzMTg4Nzg2OTExNDA0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2MDIyNTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ29tYmluZWQgZGlzc2VjdGluZywgY2F1dGVyaXppbmcsIGFuZCBzdGFwbGluZyBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE1MDMsXHJcbiAgICAgICAgICAgIHg6IDE0Ny45NDk3NzE2NTA0MzI1OCxcclxuICAgICAgICAgICAgeTogMTcwLjA4ODg4ODU1NjMxMzA3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2MDQxMTcnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWV0aG9kIG9mIG1haW50YWluaW5nIGEgbmV0d29yayBvZiBwYXJ0aWFsbHkgcmVwbGljYXRlZCBkYXRhYmFzZSBzeXN0ZW0nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNjEsXHJcbiAgICAgICAgICAgIHg6IC0wLjg4ODU1NTgwMjc0MjAzNSxcclxuICAgICAgICAgICAgeTogLTIxOC4yMzA0ODgyMDMwNzIyN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NjA0MTI4JyxcclxuICAgICAgICAgICAgbmFtZTogJ01ldGhvZCBhbmQgc3lzdGVtIGZvciBkaXN0cmlidXRpbmcgb2JqZWN0cyBvdmVyIGEgbmV0d29yaycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI2MSxcclxuICAgICAgICAgICAgeDogLTU2LjczODcyNzQyMTIwODQxLFxyXG4gICAgICAgICAgICB5OiAtMjQzLjM0ODM4NDEwNjY0NDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjYwNjc0NCcsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnUHJvdmlkaW5nIGNvbGxhYm9yYXRpdmUgaW5zdGFsbGF0aW9uIG1hbmFnZW1lbnQgaW4gYSBuZXR3b3JrLWJhc2VkIHN1cHBseSBjaGFpbiBlbnZpcm9ubWVudCcsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI3MSxcclxuICAgICAgICAgICAgeDogMTUzLjk5NDgyNTE4NTAzOTcsXHJcbiAgICAgICAgICAgIHk6IDIzMS40NjU3OTg4ODEyMDI3MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NjA5MTUwJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdXZWIgY2xpZW50LXNlcnZlciBzeXN0ZW0gYW5kIG1ldGhvZCBmb3IgaW5jb21wYXRpYmxlIHBhZ2UgbWFya3VwIGFuZCBwcmVzZW50YXRpb24gbGFuZ3VhZ2VzJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzM2LFxyXG4gICAgICAgICAgICB4OiAxMy4xODI4Njc2MDczMjEyNTUsXHJcbiAgICAgICAgICAgIHk6IC0xODQuODM0MjY0MzE4ODE1N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NjIxODM0JyxcclxuICAgICAgICAgICAgbmFtZTogJ1N5c3RlbSBhbmQgbWV0aG9kIGZvciB2b2ljZSB0cmFuc21pc3Npb24gb3ZlciBuZXR3b3JrIHByb3RvY29scycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI2NSxcclxuICAgICAgICAgICAgeDogODUuMDgyMjgxNDkzNDQzNjksXHJcbiAgICAgICAgICAgIHk6IDEwNS40MzQ2NDU3MTIzMjg5NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NjQxNTMzJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdIYW5kaGVsZCBwZXJzb25hbCBkYXRhIGFzc2lzdGFudCAoUERBKSB3aXRoIGEgbWVkaWNhbCBkZXZpY2UgYW5kIG1ldGhvZCBvZiB1c2luZyB0aGUgc2FtZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTQzMSxcclxuICAgICAgICAgICAgeDogLTIxOC4wOTc2NjExODAwMTIyNCxcclxuICAgICAgICAgICAgeTogMzkuODU3NjAwMzU3OTc5ODlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjY0NDUzMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTdXJnaWNhbCBzdGFwbGluZyBhcHBhcmF0dXMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNjcsXHJcbiAgICAgICAgICAgIHg6IDMwNC42NjMwOTI1MzE2Mjk0LFxyXG4gICAgICAgICAgICB5OiAtMjkuNzA5NjExNTczNDkxMzk3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2NTQwMzInLFxyXG4gICAgICAgICAgICBuYW1lOiAnSW5zdGFudCBzaGFyaW5nIG9mIGRvY3VtZW50cyBvbiBhIHJlbW90ZSBzZXJ2ZXInLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE0MTMsXHJcbiAgICAgICAgICAgIHg6IDE1OS4zMDA1MDM1NTI5NjAxNSxcclxuICAgICAgICAgICAgeTogMTA4Ljk4Mzg5NTg1NjI3MDA1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2NTYxOTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRGV2aWNlIGZvciBhdHRhY2htZW50IG9mIGJ1dHRyZXNzIG1hdGVyaWFsIHRvIGEgc3VyZ2ljYWwgZmFzdGVuaW5nIGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI3OSxcclxuICAgICAgICAgICAgeDogMTE2LjkwOTE0MTUzMTU4NTk3LFxyXG4gICAgICAgICAgICB5OiAtNzguNzY2MjY5MzY4NTg1NTdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjY2NTY0OCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTdGF0ZSBtb2RlbHMgZm9yIG1vbml0b3JpbmcgcHJvY2VzcycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI4OCxcclxuICAgICAgICAgICAgeDogLTE5Ljc1MTg1MjczOTM1Mzc0LFxyXG4gICAgICAgICAgICB5OiAtMTI2LjY1MzM4OTEyMjY5OTI4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2NjU2NTUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSW1wbGljaXQgcmF0aW5nIG9mIHJldHJpZXZlZCBpbmZvcm1hdGlvbiBpbiBhbiBpbmZvcm1hdGlvbiBzZWFyY2ggc3lzdGVtJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjk0LFxyXG4gICAgICAgICAgICB4OiAtMjA1LjUxMDM2MTIxOTk0NjcsXHJcbiAgICAgICAgICAgIHk6IC02Mi42MTUxNzU3NzI5MjM5NzZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjY4NDQzOCcsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnTWV0aG9kIG9mIHVzaW5nIGNhY2hlIHRvIGRldGVybWluZSB0aGUgdmlzaWJpbGl0eSB0byBhIHJlbW90ZSBkYXRhYmFzZSBjbGllbnQgb2YgYSBwbHVyYWxpdHkgb2YgZGF0YWJhc2UgdHJhbnNhY3Rpb25zJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjY1LFxyXG4gICAgICAgICAgICB4OiAtNzAuODk2MjExOTA4MDUzMjksXHJcbiAgICAgICAgICAgIHk6IC0yMTEuNjU4OTgxMjY0Njk0NzVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjY5MDM4NycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUb3VjaC1zY3JlZW4gaW1hZ2Ugc2Nyb2xsaW5nIHN5c3RlbSBhbmQgbWV0aG9kJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzYxLFxyXG4gICAgICAgICAgICB4OiAtOTYuMDgzMzMzNTg2MTAxNCxcclxuICAgICAgICAgICAgeTogMjU3LjE4ODY2NjA0NDIwOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NjkzMjMyJyxcclxuICAgICAgICAgICAgbmFtZTogJ0luYnJlZCBjb3JuIGxpbmUgTEgyOTUnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE1ODUsXHJcbiAgICAgICAgICAgIHg6IDIyNS4yMTM2MjM5NjYzNDMzMyxcclxuICAgICAgICAgICAgeTogLTE4MS43MDIzMTIwODczOTAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2OTg2NDMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRXhwYW5kaW5nIHBhcmFsbGVsIGphdyBkZXZpY2UgZm9yIHVzZSB3aXRoIGFuIGVsZWN0cm9tZWNoYW5pY2FsIGRyaXZlciBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzNTUsXHJcbiAgICAgICAgICAgIHg6IDExNi45MzM4MDA4ODIwMDMwOCxcclxuICAgICAgICAgICAgeTogMjIwLjIxNDE5NzA1NDM5NjA3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3MTE1NjUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWV0aG9kLCBhcHBhcmF0dXMsIGFuZCBzeXN0ZW0gZm9yIHByZXZpZXdpbmcgc2VhcmNoIHJlc3VsdHMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzODgsXHJcbiAgICAgICAgICAgIHg6IC0zNy41MDQ0ODEyOTA3NjczNSxcclxuICAgICAgICAgICAgeTogLTI3My40MTE2OTU4NDc5MTM1NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NzE2MjMzJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdFbGVjdHJvbWVjaGFuaWNhbCBkcml2ZXIgYW5kIHJlbW90ZSBzdXJnaWNhbCBpbnN0cnVtZW50IGF0dGFjaG1lbnQgaGF2aW5nIGNvbXB1dGVyIGFzc2lzdGVkIGNvbnRyb2wgY2FwYWJpbGl0aWVzJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjQ0LFxyXG4gICAgICAgICAgICB4OiA5OS45ODc0NDkyNzc0MDEwNyxcclxuICAgICAgICAgICAgeTogMjEyLjU5NTI3MjI5OTYyNjA2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3MTgzNjEnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ01ldGhvZCBhbmQgYXBwYXJhdHVzIGZvciByZWxpYWJsZSBhbmQgc2NhbGFibGUgZGlzdHJpYnV0aW9uIG9mIGRhdGEgZmlsZXMgaW4gZGlzdHJpYnV0ZWQgbmV0d29ya3MnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzNDksXHJcbiAgICAgICAgICAgIHg6IC0yMTQuNDcwNjQ1NDIwMDE1NSxcclxuICAgICAgICAgICAgeTogMTc5Ljc2NDQ1MzgzMzExNTQ1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3MjQzOTknLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ01ldGhvZHMgYW5kIGFwcGFyYXR1cyBmb3IgZW5hYmxpbmcga2V5Ym9hcmQgYWNjZWxlcmF0b3JzIGluIGFwcGxpY2F0aW9ucyBpbXBsZW1lbnRlZCB2aWEgYSBicm93c2VyJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjcxLFxyXG4gICAgICAgICAgICB4OiAtMy44NjU0MzcwOTgwMzY1OTcsXHJcbiAgICAgICAgICAgIHk6IC0xNjguMDQ2NjUwNzU5Nzc2MTZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjcyNzUyMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUcmFuc2lzdG9yIGFuZCBzZW1pY29uZHVjdG9yIGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzMwMSxcclxuICAgICAgICAgICAgeDogNDUuNDkzMDA5MDg2NTMzNDc2LFxyXG4gICAgICAgICAgICB5OiAtMTguMzk5MzM2NzYxODY1NTU1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3Mjg3MDInLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1N5c3RlbSBhbmQgbWV0aG9kIHRvIGltcGxlbWVudCBhbiBpbnRlZ3JhdGVkIHNlYXJjaCBjZW50ZXIgc3VwcG9ydGluZyBhIGZ1bGwtdGV4dCBzZWFyY2ggYW5kIHF1ZXJ5IG9uIGEgZGF0YWJhc2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyOTAsXHJcbiAgICAgICAgICAgIHg6IC01MC43NzY1MTI2OTY0Nzk2NCxcclxuICAgICAgICAgICAgeTogLTI2NS42NDM5NDE2NjQyNjE5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3Mjg5NjAnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVGVjaG5pcXVlcyBmb3IgbWFuYWdpbmcgbXVsdGlwbGUgdGhyZWFkcyBpbiBhIGJyb3dzZXIgZW52aXJvbm1lbnQnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyODcsXHJcbiAgICAgICAgICAgIHg6IC0zMS44NjA5ODI2MDAyNzI3NCxcclxuICAgICAgICAgICAgeTogLTE3Ny4wOTYyNzkyNTE2NjA3NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NzMyMDk1JyxcclxuICAgICAgICAgICAgbmFtZTogJ01ldGhvZCBhbmQgYXBwYXJhdHVzIGZvciBtYXBwaW5nIGJldHdlZW4gWE1MIGFuZCByZWxhdGlvbmFsIHJlcHJlc2VudGF0aW9ucycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTMxOCxcclxuICAgICAgICAgICAgeDogLTQ1LjE3NDMwODI2ODc3NTQ0LFxyXG4gICAgICAgICAgICB5OiAtMTUyLjIzOTM4MzU1Mjk4ODA0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3MzIxMDAnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRGF0YWJhc2UgYWNjZXNzIG1ldGhvZCBhbmQgc3lzdGVtIGZvciB1c2VyIHJvbGUgZGVmaW5lZCBhY2Nlc3MnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzNDcsXHJcbiAgICAgICAgICAgIHg6IC01OS4yMTAxMzY4MDYyOTI2NzQsXHJcbiAgICAgICAgICAgIHk6IC0xNzQuODM4Nzc5OTA4NDk1NzJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjczMjExMScsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnTWV0aG9kLCBhcHBhcmF0dXMsIHN5c3RlbSwgYW5kIHByb2dyYW0gcHJvZHVjdCBmb3IgYXR0YWNoaW5nIGZpbGVzIGFuZCBvdGhlciBvYmplY3RzIHRvIGEgcGFydGlhbGx5IHJlcGxpY2F0ZWQgZGF0YWJhc2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyOTQsXHJcbiAgICAgICAgICAgIHg6IC05MC43Mzk3MDUwNDc5NDUxLFxyXG4gICAgICAgICAgICB5OiAtMjQ0LjcxOTkwMzI4Nzc0MzE0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3NTQ2ODEnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1BhcnRpYWxseSByZXBsaWNhdGVkIGRpc3RyaWJ1dGVkIGRhdGFiYXNlIHdpdGggbXVsdGlwbGUgbGV2ZWxzIG9mIHJlbW90ZSBjbGllbnRzJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjY5LFxyXG4gICAgICAgICAgICB4OiAtNzkuNTgwODM4NzAzMTI2NTUsXHJcbiAgICAgICAgICAgIHk6IC0yMjguMTcyNDA1NDE3Mzg0MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NzYzMzUxJyxcclxuICAgICAgICAgICAgbmFtZTogJ01ldGhvZCwgYXBwYXJhdHVzLCBhbmQgc3lzdGVtIGZvciBhdHRhY2hpbmcgc2VhcmNoIHJlc3VsdHMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE0ODcsXHJcbiAgICAgICAgICAgIHg6IC0yNS4yNDM0NzQ3MzM0OTI3NDMsXHJcbiAgICAgICAgICAgIHk6IC0yNjMuMjU3NDA3OTQwMjEwNjdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjc2MzUwMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSZW1vdGUgZG9jdW1lbnQgc2VydmluZycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTMxOSxcclxuICAgICAgICAgICAgeDogMTU4LjMyNTM4Mzc2MjA5NDIsXHJcbiAgICAgICAgICAgIHk6IDkzLjQ5NTQ2MjMxNTE2OTE5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3Njg5MDQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRGF0YSBjb21tdW5pY2F0aW9uIG1ldGhvZCB1c2luZyBtb2JpbGUgdGVybWluYWwnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNTYsXHJcbiAgICAgICAgICAgIHg6IC0zMDcuOTc2MDYxNTgxMzM0MTQsXHJcbiAgICAgICAgICAgIHk6IDE4Ljc2OTc1NjY3OTc5NzM5NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NzgyMzgzJyxcclxuICAgICAgICAgICAgbmFtZTogJ1N5c3RlbSBhbmQgbWV0aG9kIHRvIGltcGxlbWVudCBhIHBlcnNpc3RlbnQgYW5kIGRpc21pc3NpYmxlIHNlYXJjaCBjZW50ZXIgZnJhbWUnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyODIsXHJcbiAgICAgICAgICAgIHg6IC0xMi45NzYxNzc1NTc4MzU4NTIsXHJcbiAgICAgICAgICAgIHk6IC0yNzIuOTE5NDQwNDA3Mzc5MVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NzgzNTI0JyxcclxuICAgICAgICAgICAgbmFtZTogJ1JvYm90aWMgc3VyZ2ljYWwgdG9vbCB3aXRoIHVsdHJhc291bmQgY2F1dGVyaXppbmcgYW5kIGN1dHRpbmcgaW5zdHJ1bWVudCcsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTUwNSxcclxuICAgICAgICAgICAgeDogNDMuMzgyMzEwOTg2OTQwNjYsXHJcbiAgICAgICAgICAgIHk6IDI3OS4wODIxNzgwMTE0NzcxNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2Nzg2MzgyJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdTdXJnaWNhbCBzdGFwbGluZyBpbnN0cnVtZW50IGluY29ycG9yYXRpbmcgYW4gYXJ0aWN1bGF0aW9uIGpvaW50IGZvciBhIGZpcmluZyBiYXIgdHJhY2snLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzNzEsXHJcbiAgICAgICAgICAgIHg6IDEzNC45NDA3ODE2NDUwMjgzNSxcclxuICAgICAgICAgICAgeTogLTY1LjEwMDgyMzczNTY2MzgxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY4MDQzMzAnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWV0aG9kIGFuZCBzeXN0ZW0gZm9yIGFjY2Vzc2luZyBDUk0gZGF0YSB2aWEgdm9pY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzNDgsXHJcbiAgICAgICAgICAgIHg6IDQxLjQ0NTI1MTcyMzg0Mjg2NSxcclxuICAgICAgICAgICAgeTogLTIzNi45OTE1NjQ4MTA5ODY1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY4MDk2NTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVGVsZW1ldGVyZWQgY2hhcmFjdGVyaXN0aWMgbW9uaXRvciBzeXN0ZW0gYW5kIG1ldGhvZCBvZiB1c2luZyB0aGUgc2FtZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI1MCxcclxuICAgICAgICAgICAgeDogLTE5Mi4zNjY1OTQ3NzU2ODA4LFxyXG4gICAgICAgICAgICB5OiA4NS4yMDAzOTcxMzg1OTE1NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2ODI2NTY1JyxcclxuICAgICAgICAgICAgbmFtZTogJ01ldGhvZCBhbmQgYXBwYXJhdHVzIGZvciBzZXJ2aW5nIGZpbGVzIHRvIGJyb3dzaW5nIGNsaWVudHMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNTMsXHJcbiAgICAgICAgICAgIHg6IC0xODcuMjAyMDc4NjEyMTQyLFxyXG4gICAgICAgICAgICB5OiAtMjA1LjgwMjgwNjcxNDA5NzVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjgyNjU4MicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNZXRob2QgYW5kIHN5c3RlbSBmb3IgdXNpbmcgZmlsZSBzeXN0ZW1zIGZvciBjb250ZW50IG1hbmFnZW1lbnQnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNjIsXHJcbiAgICAgICAgICAgIHg6IC0xNzMuMzkwNzE3MTM0MzQ1OTIsXHJcbiAgICAgICAgICAgIHk6IC04NC43NDgxMDY0NTM5MTA1MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2ODI2NzQ1JyxcclxuICAgICAgICAgICAgbmFtZTogJ1N5c3RlbSBhbmQgbWV0aG9kIGZvciBzbWFydCBzY3JpcHRpbmcgY2FsbCBjZW50ZXJzIGFuZCBjb25maWd1cmF0aW9uIHRoZXJlb2YnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyOTAsXHJcbiAgICAgICAgICAgIHg6IC03Ni43ODEyNjQzMzEyMTAwNSxcclxuICAgICAgICAgICAgeTogLTE4OS4yMjE0ODE3NTEyNTA1NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2ODI5NjU1JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdNZXRob2QgYW5kIHN5c3RlbSBmb3Igc2VydmVyIHN5bmNocm9uaXphdGlvbiB3aXRoIGEgY29tcHV0aW5nIGRldmljZSB2aWEgYSBjb21wYW5pb24gZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjkyLFxyXG4gICAgICAgICAgICB4OiA1NC4xNTA2NzIxMDcwMTg2OSxcclxuICAgICAgICAgICAgeTogLTE5My41NTk1NDMxMTU0NTM1OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2ODMwMTc0JyxcclxuICAgICAgICAgICAgbmFtZTogJ01lZGljYWwgaW5zdHJ1bWVudCcsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM0NSxcclxuICAgICAgICAgICAgeDogMjQxLjY4MzY1NjMwNDAwMDIsXHJcbiAgICAgICAgICAgIHk6IDE3OC44MTAxNTU0OTQyNDczXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY4NDI3NDgnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1VzYWdlIGJhc2VkIHN0cmVuZ3RoIGJldHdlZW4gcmVsYXRlZCBpbmZvcm1hdGlvbiBpbiBhbiBpbmZvcm1hdGlvbiByZXRyaWV2YWwgc3lzdGVtJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjczLFxyXG4gICAgICAgICAgICB4OiAtMjU1Ljc2NzE0MDE3NjM5MTgsXHJcbiAgICAgICAgICAgIHk6IC04OS4zMDk0MTQ5MDE2MDMwOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2ODQzNDAzJyxcclxuICAgICAgICAgICAgbmFtZTogJ1N1cmdpY2FsIGNsYW1waW5nLCBjdXR0aW5nIGFuZCBzdGFwbGluZyBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNzgsXHJcbiAgICAgICAgICAgIHg6IDgwLjYyMjY3ODg4MzE3NTE1LFxyXG4gICAgICAgICAgICB5OiAyMDQuNjcyNDkyOTI5NTc1NzJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjg1MDI1MicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdJbnRlbGxpZ2VudCBlbGVjdHJvbmljIGFwcGxpYW5jZSBzeXN0ZW0gYW5kIG1ldGhvZCcsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTc4NCxcclxuICAgICAgICAgICAgeDogLTI2OS4wOTM5NjI1NzE2OTgyLFxyXG4gICAgICAgICAgICB5OiA4MC43OTE1MjU0MDkxNzEwM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2ODUwODk1JyxcclxuICAgICAgICAgICAgbmFtZTogJ0Fzc2lnbm1lbnQgbWFuYWdlcicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTQyOSxcclxuICAgICAgICAgICAgeDogLTEwNC43MTUyMzE3Mjg5OTk3OCxcclxuICAgICAgICAgICAgeTogLTIzNy42NzQ4OTA1MTQ5NTM4M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2ODUwOTQ5JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdTeXN0ZW0gYW5kIG1ldGhvZCBmb3IgZ2VuZXJhdGluZyBhIGR5bmFtaWMgaW50ZXJmYWNlIHZpYSBhIGNvbW11bmljYXRpb25zIG5ldHdvcmsnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNzYsXHJcbiAgICAgICAgICAgIHg6IDE3MC44OTQ4NDc4NjY2NDIzLFxyXG4gICAgICAgICAgICB5OiAtMTU3LjE2MjM5OTYzODcyNzlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjg1MjkxNScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdJbmJyZWQgY29ybiBsaW5lIExIMjgzQnRNT044MTAnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE1ODQsXHJcbiAgICAgICAgICAgIHg6IDIxNC4yODc4MjUyNjY2Nzk3LFxyXG4gICAgICAgICAgICB5OiAtMjIxLjY1MDY0NTkwNjI1NzM1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY5MDUwNTcnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1N1cmdpY2FsIHN0YXBsaW5nIGluc3RydW1lbnQgaW5jb3Jwb3JhdGluZyBhIGZpcmluZyBtZWNoYW5pc20gaGF2aW5nIGEgbGlua2VkIHJhY2sgdHJhbnNtaXNzaW9uJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzk4LFxyXG4gICAgICAgICAgICB4OiAyMDQuMjQ0MzE0MDkxNzQzLFxyXG4gICAgICAgICAgICB5OiAtNzguMTAwMjM2NzIyMzI2MDdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjk1OTg1MicsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnU3VyZ2ljYWwgc3RhcGxpbmcgaW5zdHJ1bWVudCB3aXRoIG11bHRpc3Ryb2tlIGZpcmluZyBpbmNvcnBvcmF0aW5nIGFuIGFudGktYmFja3VwIG1lY2hhbmlzbScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI3OSxcclxuICAgICAgICAgICAgeDogMjE0LjQ3NzQxMTQwMjM2NTgyLFxyXG4gICAgICAgICAgICB5OiAtNTYuMjkxNTg3NjM2NTkxMTI1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY5NjQzNjMnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1N1cmdpY2FsIHN0YXBsaW5nIGluc3RydW1lbnQgaGF2aW5nIGFydGljdWxhdGlvbiBqb2ludCBzdXBwb3J0IHBsYXRlcyBmb3Igc3VwcG9ydGluZyBhIGZpcmluZyBiYXInLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzMzAsXHJcbiAgICAgICAgICAgIHg6IDE3MS44OTI0NzI3MDg5ODAyOCxcclxuICAgICAgICAgICAgeTogLTk3LjQxMDAyNDYyNTUwMjkzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY5Nzg5MjEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3VyZ2ljYWwgc3RhcGxpbmcgaW5zdHJ1bWVudCBpbmNvcnBvcmF0aW5nIGFuIEUtYmVhbSBmaXJpbmcgbWVjaGFuaXNtJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjcxLFxyXG4gICAgICAgICAgICB4OiAyMjAuOTk5ODAwMzgwNDA0NCxcclxuICAgICAgICAgICAgeTogLTcxLjQyMDc4MTM1NjM2NTQ1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY5ODE2MjgnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3VyZ2ljYWwgaW5zdHJ1bWVudCB3aXRoIGEgbGF0ZXJhbC1tb3ZpbmcgYXJ0aWN1bGF0aW9uIGNvbnRyb2wnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE1ODgsXHJcbiAgICAgICAgICAgIHg6IDE1NS4xMjIwOTY2NzczODcyMixcclxuICAgICAgICAgICAgeTogLTkzLjY5NjI4NzUxNDYwMjk0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzcwMDA4MTgnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1N1cmdpY2FsIHN0YXBsaW5nIGluc3RydW1lbnQgaGF2aW5nIHNlcGFyYXRlIGRpc3RpbmN0IGNsb3NpbmcgYW5kIGZpcmluZyBzeXN0ZW1zJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNDIyLFxyXG4gICAgICAgICAgICB4OiAyMjcuMDE3Njg4NDUzNzk2OTIsXHJcbiAgICAgICAgICAgIHk6IDcuMDI0MDU2NjExNDYzMDUxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzcwMjU3NDMnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ0V4dGVybmFsIGluZnVzaW9uIGRldmljZSB3aXRoIHJlbW90ZSBwcm9ncmFtbWluZywgYm9sdXMgZXN0aW1hdG9yIGFuZC9vciB2aWJyYXRpb24gYWxhcm0gY2FwYWJpbGl0aWVzJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzQ4LFxyXG4gICAgICAgICAgICB4OiAtMTM5LjMzNDg3Mjc1NzQ0Mjc1LFxyXG4gICAgICAgICAgICB5OiA0Ni41MjA2MTExNTMzNDM5OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MDQ5MTkwJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdNZXRob2QgZm9yIGZvcm1pbmcgWm5PIGZpbG0sIG1ldGhvZCBmb3IgZm9ybWluZyBabk8gc2VtaWNvbmR1Y3RvciBsYXllciwgbWV0aG9kIGZvciBmYWJyaWNhdGluZyBzZW1pY29uZHVjdG9yIGRldmljZSwgYW5kIHNlbWljb25kdWN0b3IgZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjM0LFxyXG4gICAgICAgICAgICB4OiAtMjg5LjEwOTE4ODMzNjExLFxyXG4gICAgICAgICAgICB5OiAtOTcuOTY3NzY5Mzg1NDk1MzdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzA1NTczMScsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnU3VyZ2ljYWwgc3RhcGxpbmcgaW5zdHJ1bWVudCBpbmNvcnBvcmF0aW5nIGEgdGFwZXJlZCBmaXJpbmcgYmFyIGZvciBpbmNyZWFzZWQgZmxleGliaWxpdHkgYXJvdW5kIHRoZSBhcnRpY3VsYXRpb24gam9pbnQnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzMjUsXHJcbiAgICAgICAgICAgIHg6IDIzMC40OTUxODM4NjQzOTk4OCxcclxuICAgICAgICAgICAgeTogLTU5LjY0MjI0NTY3ODU4MjQ4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzcwNjEwMTQnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ05hdHVyYWwtc3VwZXJsYXR0aWNlIGhvbW9sb2dvdXMgc2luZ2xlIGNyeXN0YWwgdGhpbiBmaWxtLCBtZXRob2QgZm9yIHByZXBhcmF0aW9uIHRoZXJlb2YsIGFuZCBkZXZpY2UgdXNpbmcgc2FpZCBzaW5nbGUgY3J5c3RhbCB0aGluIGZpbG0nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMzMzksXHJcbiAgICAgICAgICAgIHg6IC01LjgwMDg4MjA0NDkwMTQzOSxcclxuICAgICAgICAgICAgeTogNjguNTI2NDE1OTUwMzE1MjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzA2NDM0NicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUcmFuc2lzdG9yIGFuZCBzZW1pY29uZHVjdG9yIGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzI2OCxcclxuICAgICAgICAgICAgeDogLTMuNDAwMzAzMTUxOTkxMzcxNixcclxuICAgICAgICAgICAgeTogMjUuOTgxMzU2ODM2MDQzNjg4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzcxMDU4NjgnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSGlnaC1lbGVjdHJvbiBtb2JpbGl0eSB0cmFuc2lzdG9yIHdpdGggemluYyBveGlkZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzIzMyxcclxuICAgICAgICAgICAgeDogLTE3LjgzNTc4NTc0OTc4NTgxNyxcclxuICAgICAgICAgICAgeTogMTk5LjkxODgzNzIwMjEwMzA1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzcxMTE3NjknLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1N1cmdpY2FsIGluc3RydW1lbnQgaW5jb3Jwb3JhdGluZyBhbiBhcnRpY3VsYXRpb24gbWVjaGFuaXNtIGhhdmluZyByb3RhdGlvbiBhYm91dCB0aGUgbG9uZ2l0dWRpbmFsIGF4aXMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNzgsXHJcbiAgICAgICAgICAgIHg6IDE1MS4yMjU3OTgzMjUyNDA0NSxcclxuICAgICAgICAgICAgeTogLTM3LjE3MDk5MDc0NzQ5MDEzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzcxNDcxMzgnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1N1cmdpY2FsIHN0YXBsaW5nIGluc3RydW1lbnQgaGF2aW5nIGFuIGVsZWN0cm9hY3RpdmUgcG9seW1lciBhY3R1YXRlZCBidXR0cmVzcyBkZXBsb3ltZW50IG1lY2hhbmlzbScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTQyOCxcclxuICAgICAgICAgICAgeDogMTg5LjA4NjE0MzIzODU3NSxcclxuICAgICAgICAgICAgeTogLTczLjY5MTMwMzkyNjgzOTI0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzcxNTk3NTAnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3VyZ2ljYWwgc3RhcGxpbmcgZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjU4LFxyXG4gICAgICAgICAgICB4OiAtNDEuMjk5OTUxODY1MTk0NDMsXHJcbiAgICAgICAgICAgIHk6IDI5Mi44NDYyNjc0NTM3ODIyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzcyMTE4MjUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSW5kaXVtIG94aWRlLWJhc2VkIHRoaW4gZmlsbSB0cmFuc2lzdG9ycyBhbmQgY2lyY3VpdHMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyNDUsXHJcbiAgICAgICAgICAgIHg6IC0zMTIuMzgzOTA1NzIyMTQ3NyxcclxuICAgICAgICAgICAgeTogLTUuNjE0NTQxNTY3MTMzMDA3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzcyNDY3MzQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUm90YXJ5IGh5ZHJhdWxpYyBwdW1wIGFjdHVhdGVkIG11bHRpLXN0cm9rZSBzdXJnaWNhbCBpbnN0cnVtZW50JyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjg4LFxyXG4gICAgICAgICAgICB4OiAyMDAuNDQ1NjMzODAwODY1MTUsXHJcbiAgICAgICAgICAgIHk6IC02My4xODg2NTU4ODA3Njg4NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MjgyNzgyJyxcclxuICAgICAgICAgICAgbmFtZTogJ0NvbWJpbmVkIGJpbmFyeSBveGlkZSBzZW1pY29uZHVjdG9yIGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzI3MyxcclxuICAgICAgICAgICAgeDogLTEyNS44MzA5MDQxNDc3OTg2LFxyXG4gICAgICAgICAgICB5OiAtMzEuMjc3ODc3ODkzNTgwNDg4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzcyOTc5NzcnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU2VtaWNvbmR1Y3RvciBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMzMTgsXHJcbiAgICAgICAgICAgIHg6IC0xMjguMjgyODg2Mjk2OTY3MjYsXHJcbiAgICAgICAgICAgIHk6IC01NS4yNjE0NzU1NzgwMzMyOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MzIzMzU2JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdMbkN1TyhTLFNlLFRlKW1vbm9jcnlzdGFsbGluZSB0aGluIGZpbG0sIGl0cyBtYW51ZmFjdHVyaW5nIG1ldGhvZCwgYW5kIG9wdGljYWwgZGV2aWNlIG9yIGVsZWN0cm9uaWMgZGV2aWNlIHVzaW5nIHRoZSBtb25vY3J5c3RhbGxpbmUgdGhpbiBmaWxtJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjUxLFxyXG4gICAgICAgICAgICB4OiAtMTguNTk3NTUzMDUzOTU1NzQsXHJcbiAgICAgICAgICAgIHk6IDg4Ljk1NTMxNjEwODM4OTY4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzczNDA0MTEnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1N5c3RlbSBhbmQgbWV0aG9kIGZvciBnZW5lcmF0aW5nLCBjYXB0dXJpbmcsIGFuZCBtYW5hZ2luZyBjdXN0b21lciBsZWFkIGluZm9ybWF0aW9uIG92ZXIgYSBjb21wdXRlciBuZXR3b3JrJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjgyLFxyXG4gICAgICAgICAgICB4OiAxNzEuMTQwODMxNTU5MTY5OCxcclxuICAgICAgICAgICAgeTogLTIwMi4yNDg4MzcwODA0NDgwOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MzgwNjk1JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdTdXJnaWNhbCBzdGFwbGluZyBpbnN0cnVtZW50IGhhdmluZyBhIHNpbmdsZSBsb2Nrb3V0IG1lY2hhbmlzbSBmb3IgcHJldmVudGlvbiBvZiBmaXJpbmcnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzODYsXHJcbiAgICAgICAgICAgIHg6IDE4Ni4yNTgzMzUzMDExMDE5NCxcclxuICAgICAgICAgICAgeTogLTIxLjY2MzIxODczMjQ1MjA5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzczODA2OTYnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ0FydGljdWxhdGluZyBzdXJnaWNhbCBzdGFwbGluZyBpbnN0cnVtZW50IGluY29ycG9yYXRpbmcgYSB0d28tcGllY2UgRS1iZWFtIGZpcmluZyBtZWNoYW5pc20nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzODgsXHJcbiAgICAgICAgICAgIHg6IDIwNy45MDI5NTkzOTAzMTc5LFxyXG4gICAgICAgICAgICB5OiAtOC41MzE1MzM3Mzc2MjE4ODVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzM4NTIyNCcsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnVGhpbiBmaWxtIHRyYW5zaXN0b3IgaGF2aW5nIGFuIGV0Y2hpbmcgcHJvdGVjdGlvbiBmaWxtIGFuZCBtYW51ZmFjdHVyaW5nIG1ldGhvZCB0aGVyZW9mJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjI0LFxyXG4gICAgICAgICAgICB4OiAtMjA5LjgyMjMwNDgyNTU1MzM1LFxyXG4gICAgICAgICAgICB5OiAtMTM4LjUxMDA0MDk5MDAyOTNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzQwMjUwNicsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnTWV0aG9kcyBvZiBtYWtpbmcgdGhpbiBmaWxtIHRyYW5zaXN0b3JzIGNvbXByaXNpbmcgemluYy1veGlkZS1iYXNlZCBzZW1pY29uZHVjdG9yIG1hdGVyaWFscyBhbmQgdHJhbnNpc3RvcnMgbWFkZSB0aGVyZWJ5JyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjU4LFxyXG4gICAgICAgICAgICB4OiAyMDUuMDI0NzU2Njc0NDc3NzQsXHJcbiAgICAgICAgICAgIHk6IDE4NS42Nzg3ODA2NjQ0MzAzOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3NDA0NTA4JyxcclxuICAgICAgICAgICAgbmFtZTogJ1N1cmdpY2FsIHN0YXBsaW5nIGFuZCBjdXR0aW5nIGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTUxNyxcclxuICAgICAgICAgICAgeDogMTQyLjg1MzQ4ODYxNzMyMzcsXHJcbiAgICAgICAgICAgIHk6IDEuMzMyNTg4NTI4MTc0ODU1M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3NDExMjA5JyxcclxuICAgICAgICAgICAgbmFtZTogJ0ZpZWxkLWVmZmVjdCB0cmFuc2lzdG9yIGFuZCBtZXRob2QgZm9yIG1hbnVmYWN0dXJpbmcgdGhlIHNhbWUnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyNTUsXHJcbiAgICAgICAgICAgIHg6IDk4LjQ2MjA3MjIxMTgzNTI4LFxyXG4gICAgICAgICAgICB5OiAxMjMuMDMwODQ3NzUzNzAyNzlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzQ1MzA2NScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTZW5zb3IgYW5kIGltYWdlIHBpY2t1cCBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyMzAsXHJcbiAgICAgICAgICAgIHg6IC0wLjE2NTczNzQzOTQyNjcxODU0LFxyXG4gICAgICAgICAgICB5OiAxNDEuMjg5MjI5MzUyOTkwMjJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzQ1MzA4NycsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnVGhpbi1maWxtIHRyYW5zaXN0b3IgYW5kIHRoaW4tZmlsbSBkaW9kZSBoYXZpbmcgYW1vcnBob3VzLW94aWRlIHNlbWljb25kdWN0b3IgbGF5ZXInLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyNDIsXHJcbiAgICAgICAgICAgIHg6IDY0LjkyNjE5OTA4MjcyMjIyLFxyXG4gICAgICAgICAgICB5OiAxODEuODQ1OTM2NjUwOTA0NDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzQ2Mjg2MicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUcmFuc2lzdG9yIHVzaW5nIGFuIGlzb3ZhbGVudCBzZW1pY29uZHVjdG9yIG94aWRlIGFzIHRoZSBhY3RpdmUgY2hhbm5lbCBsYXllcicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzI0NCxcclxuICAgICAgICAgICAgeDogLTY5LjYxNjc5MTQyODQ4MjUxLFxyXG4gICAgICAgICAgICB5OiAtMTcuOTUxNDMxNzY2NzExOTI0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzc0NjQ4NDYnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3VyZ2ljYWwgaW5zdHJ1bWVudCBoYXZpbmcgYSByZW1vdmFibGUgYmF0dGVyeScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI4NyxcclxuICAgICAgICAgICAgeDogMTgxLjg0MTk0OTU1OTkxNjg2LFxyXG4gICAgICAgICAgICB5OiAtNi4xMzAzNTY2NDQ1NDE3NTlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzQ2ODMwNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNZXRob2Qgb2YgZmFicmljYXRpbmcgb3hpZGUgc2VtaWNvbmR1Y3RvciBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyNDAsXHJcbiAgICAgICAgICAgIHg6IDQzLjE0NDQ3NDIyODc2NDk5LFxyXG4gICAgICAgICAgICB5OiA4NC4zMDg1NzQ0OTg4MzkwMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3NTAxMjkzJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdTZW1pY29uZHVjdG9yIGRldmljZSBpbiB3aGljaCB6aW5jIG94aWRlIGlzIHVzZWQgYXMgYSBzZW1pY29uZHVjdG9yIG1hdGVyaWFsIGFuZCBtZXRob2QgZm9yIG1hbnVmYWN0dXJpbmcgdGhlIHNlbWljb25kdWN0b3IgZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjE2LFxyXG4gICAgICAgICAgICB4OiAxMDAuNzU5ODQ0OTU2MTk3NjMsXHJcbiAgICAgICAgICAgIHk6IDI2My45MzkyODExNzc2NTM4N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3NTA2NzkxJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdTdXJnaWNhbCBzdGFwbGluZyBpbnN0cnVtZW50IHdpdGggbWVjaGFuaWNhbCBtZWNoYW5pc20gZm9yIGxpbWl0aW5nIG1heGltdW0gdGlzc3VlIGNvbXByZXNzaW9uJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjU3LFxyXG4gICAgICAgICAgICB4OiAxNjIuODk5NDM3NDkzODM4MyxcclxuICAgICAgICAgICAgeTogLTEzLjUwNzY2NDM2NDYxMTI1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzc2MjA2NTUnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ01ldGhvZCwgZGV2aWNlIGFuZCBjb21wdXRlciBwcm9ncmFtIHByb2R1Y3QgZm9yIGlkZW50aWZ5aW5nIHZpc2l0b3JzIG9mIHdlYnNpdGVzJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjQzLFxyXG4gICAgICAgICAgICB4OiAyNzMuNzQ1MzI1NzA1ODQ3MSxcclxuICAgICAgICAgICAgeTogLTEzNC4xMTk2OTcxNjgwNjc4M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3NjMyOTg1JyxcclxuICAgICAgICAgICAgbmFtZTogJ1NveWJlYW4gZXZlbnQgTU9OODk3ODggYW5kIG1ldGhvZHMgZm9yIGRldGVjdGlvbiB0aGVyZW9mJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNDc3LFxyXG4gICAgICAgICAgICB4OiAyNS4xNTY0MTI3MzExMzA5OTUsXHJcbiAgICAgICAgICAgIHk6IDIzMi42MzgzNzQ1MzYzMTY1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzc2NjM2MDcnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTXVsdGlwb2ludCB0b3VjaHNjcmVlbicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMjIxNyxcclxuICAgICAgICAgICAgeDogMTQ4LjMxNzI5MDc1NzE0NDEyLFxyXG4gICAgICAgICAgICB5OiAtMjUyLjEyMDU0MTE3Mjk1NjJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzY3NDY1MCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTZW1pY29uZHVjdG9yIGRldmljZSBhbmQgbWFudWZhY3R1cmluZyBtZXRob2QgdGhlcmVvZicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzQzOSxcclxuICAgICAgICAgICAgeDogMjY1LjIwNzc1MjczNTExODg1LFxyXG4gICAgICAgICAgICB5OiA5Ny4wODc1MzE3NTY0OTg3OVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3NzMyODE5JyxcclxuICAgICAgICAgICAgbmFtZTogJ1NlbWljb25kdWN0b3IgZGV2aWNlIGFuZCBtYW51ZmFjdHVyaW5nIG1ldGhvZCB0aGVyZW9mJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjg4LFxyXG4gICAgICAgICAgICB4OiAyNDEuMjc0MzI0NzU2OTYxNDUsXHJcbiAgICAgICAgICAgIHk6IDkyLjU3OTE3MTU5NjYxNTk1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzgwNTMxODQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU295YmVhbiBldmVudCBNT044OTc4OCBhbmQgbWV0aG9kcyBmb3IgZGV0ZWN0aW9uIHRoZXJlb2YnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNDksXHJcbiAgICAgICAgICAgIHg6IDEyLjc0MTczOTI3NDUxOTg2LFxyXG4gICAgICAgICAgICB5OiAyMjMuMzMwNTA5NDY4NTM4NTRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0MDgyNjAyLTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnQWRhbSBIZWxsZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyNzgsXHJcbiAgICAgICAgICAgIHg6IC03OC45NzkxODM2Nzg3ODM5NSxcclxuICAgICAgICAgICAgeTogMTc1LjgzNDU4NTUxOTQ1Njk3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU1MTI3Ni0xMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBZHJpYW4gR3V0JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTQsXHJcbiAgICAgICAgICAgIHg6IC0xMjYuNDkxNjM4OTY4ODIwODIsXHJcbiAgICAgICAgICAgIHk6IDc3LjA1MzkyNTQyODk0NDM3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU1MTI3Ni0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0FsYW4gSGF1YmFjaCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE1LFxyXG4gICAgICAgICAgICB4OiAtMTMzLjU0NDgwNjE4NTE3NTU2LFxyXG4gICAgICAgICAgICB5OiAxMy43MzY0NDMzNzk1NDI0M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3MzIwOTUtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBbGV4IFdhcnNoYXZza3knLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzOCxcclxuICAgICAgICAgICAgeDogLTQxLjQzMDA2MDkxMDE0NjgxLFxyXG4gICAgICAgICAgICB5OiAtMTE1LjY5NDY4MTM3MDY0ODE3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDA4MjA5Ny0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0FsZnJlZCBFLiBNYW5uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNzMsXHJcbiAgICAgICAgICAgIHg6IC0xNjYuMjUxMjc4MjM0MTc2ODgsXHJcbiAgICAgICAgICAgIHk6IDY0LjIxNDI0NTU2NjIzMzM5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzQwMjUwNi0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0FuZHJlYSBDLiBTY3VkZXJpJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMixcclxuICAgICAgICAgICAgeDogMjMyLjAyMTAxMzU2NDk0NCxcclxuICAgICAgICAgICAgeTogMjAxLjU0MzYwNTUzMjE0NTUzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjI5NTUzMC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0FuZHJldyBNLiBSaXRjaGllJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcclxuICAgICAgICAgICAgeDogLTE4MC4xMzI3MDEwOTM4MDg4MyxcclxuICAgICAgICAgICAgeTogLTE3NS44OTMzNTg3NTAzOTI4NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU5NDQ3OTEtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBbmRyZXcgVy4gU2NoZXJwYmllcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDgsXHJcbiAgICAgICAgICAgIHg6IDg5LjAzNTk2Nzg4NzAyMjcxLFxyXG4gICAgICAgICAgICB5OiA3My40MTk2NjYwMTU2MjA1OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY2NjU2NDgtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBbmRyemVqIFAuIE1henVyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcclxuICAgICAgICAgICAgeDogLTE3Ljc1OTU3NzM4MTMzMjY5LFxyXG4gICAgICAgICAgICB5OiAtOTAuMDQzMjc4ODQxNDExMzhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTc3NzI2LTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQW5pbCBLLiBBbm5hZGF0YScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE5LFxyXG4gICAgICAgICAgICB4OiAtOTAuMjcyMzc3MjY3NTg1ODEsXHJcbiAgICAgICAgICAgIHk6IC0xNDIuMTE5ODE1NTMxMjc4NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYzMzYxMzctMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBbmlsIE11a3VuZGFuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjQsXHJcbiAgICAgICAgICAgIHg6IDQ0Ljk3NTcwMDAzODgyMDU5LFxyXG4gICAgICAgICAgICB5OiAtMTczLjE5MTI2MzA1MjE2MzVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODI5NjU1LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQW51cGFtIFNpbmdoYWwnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMixcclxuICAgICAgICAgICAgeDogNjguMDMzNDE0OTcwODA4MDgsXHJcbiAgICAgICAgICAgIHk6IC0xNTkuNjE2NDA5MDE4MzAzMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUyNzYyNjItMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBcnRodXIgTC4gSm9obnNvbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDksXHJcbiAgICAgICAgICAgIHg6IDE4NS41MDk1NjY0MzUyMjI4LFxyXG4gICAgICAgICAgICB5OiAtMjI4Ljg0MTk5MTU4OTg0MDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3MDgyODMyLTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQXlhbm9yaSBFbmRvJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNSxcclxuICAgICAgICAgICAgeDogMTE2LjA5MjYxNTczMDEwOTUxLFxyXG4gICAgICAgICAgICB5OiAxNDkuMTcxNzYwODE4NzU1NzNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MzcwNTg0LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQXplciBCZXN0YXZyb3MnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4LFxyXG4gICAgICAgICAgICB4OiAtMjQwLjQxMjkyNDE1MTk0MDg3LFxyXG4gICAgICAgICAgICB5OiAxOTcuNDAyMDEwNzI5ODQ2MzhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NzIyOTk3LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnQmVocmFkIEFyaWEnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3NSxcclxuICAgICAgICAgICAgeDogLTc2Ljg4NjM5NTc5ODk5MjY4LFxyXG4gICAgICAgICAgICB5OiAxNDAuNTk3NDM0ODAyODUxNDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0OTcyMjI0LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQmVubmllIFRob21wc29uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDYsXHJcbiAgICAgICAgICAgIHg6IDEyOS44MDczNTA1MjM4OTgxMixcclxuICAgICAgICAgICAgeTogLTQuNDgxOTcyNTU5ODM5OTgzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzYyMDY1NS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0Jqw7ZybiBTcGVybGluZycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXHJcbiAgICAgICAgICAgIHg6IDI2NS42OTgwMjQ2NjAyMTM0MyxcclxuICAgICAgICAgICAgeTogLTE2My4xNzQ4NzU5MjY4MjQ3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU1MTI3Ni0xMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdCb2IgTXVydGZlbGR0JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTQsXHJcbiAgICAgICAgICAgIHg6IC0xMDQuNTc2MDI2NDE2MDUwMjMsXHJcbiAgICAgICAgICAgIHk6IDQzLjIxOTI5Mzg2MDE3NDkxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjgwOTY1My05JyxcclxuICAgICAgICAgICAgbmFtZTogJ0JyYWQgVC4gSGl0ZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQsXHJcbiAgICAgICAgICAgIHg6IC0xNzguNzQwNjk0NDI5NTk3LFxyXG4gICAgICAgICAgICB5OiAxMTQuNTY0MzAxMDcxMDAzMTFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NjY1NjQ4LTUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQnJpYW4gR3JvdmVzJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcclxuICAgICAgICAgICAgeDogLTQuMDYzNzAzNzI3NTkzNTU5LFxyXG4gICAgICAgICAgICB5OiAtOTMuMjQ2NjYwMjE2MTUxNzdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3MDAwODE4LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQnJpYW4gSi4gSGVtbWVsZ2FybicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIsXHJcbiAgICAgICAgICAgIHg6IDI1MS44NzgyNTI3MTY5MjIwOCxcclxuICAgICAgICAgICAgeTogMjguMjg5ODAzMTk1MjYwMDhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NjU4NTc3LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQnJpYW4gUS4gSHVwcGknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA5NCxcclxuICAgICAgICAgICAgeDogMTIzLjE5NjMxOTg3ODM1MjU4LFxyXG4gICAgICAgICAgICB5OiAtMjY5LjU1NDk1NTI3NzcxMTFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NDY1ODk1LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQnJ5YW4gRC4gS25vZGVsJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTQ3LFxyXG4gICAgICAgICAgICB4OiAyNDkuMjcxNTkzNTI1MDk2OTYsXHJcbiAgICAgICAgICAgIHk6IDE0OS44OTQyMjY5NjUzNDQ0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTk0ODAwNi0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0NhcmxhIE0uIE1hbm4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzMCxcclxuICAgICAgICAgICAgeDogLTE0OC40MTE1MzQ3Njk4NzgwNSxcclxuICAgICAgICAgICAgeTogMjY4LjIxMDIzNjg1MzM3MDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTU4MzUxLTgnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ2FyeSBELiBUYWxib3QnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1MSxcclxuICAgICAgICAgICAgeDogLTI0Mi4xMjAxMzczOTYwMDg1LFxyXG4gICAgICAgICAgICB5OiAxLjA4MDkxMDU4NjE3MjI0ODNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MTc2NjQ0LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ2hhZCBTcmlzYXRoYXBhdCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI4LFxyXG4gICAgICAgICAgICB4OiAtMTA2LjU5NzgwMzI1NjQ1Mjg5LFxyXG4gICAgICAgICAgICB5OiA1Ni43MjQxNTk5NjI0NzM2M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3MzIwOTUtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDaGFuZHJha2FudCBSYW1rcmlzaG5hIEJoYXZzYXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3LFxyXG4gICAgICAgICAgICB4OiAtNTYuNDQ2OTI0MjM2MDI4NTgsXHJcbiAgICAgICAgICAgIHk6IC0xMTQuMzg5MzYzNTU5NTI1MjFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODA0MzMwLTUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ2hyaXMgSGF2ZW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4LFxyXG4gICAgICAgICAgICB4OiA3Ni41ODk5NjkyNjYwNzAyNyxcclxuICAgICAgICAgICAgeTogLTIzMy41OTM3NjQyMTc3NDk2OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU4NTk5MTYtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDaHJpc3RvcGhlciBBLiBKdWxpYW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzNSxcclxuICAgICAgICAgICAgeDogMzIuNDk1MjkyMDI5MTU1MjYsXHJcbiAgICAgICAgICAgIHk6IDMwNy44NTU4NzE1NzMyOTkxN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU5NjM5NTMtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDaHJpc3RvcGhlciBTdGF1YmVyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcclxuICAgICAgICAgICAgeDogMzguODc2NDk5MTc3MzA4OTM2LFxyXG4gICAgICAgICAgICB5OiAtMjU0LjY4NTMzNzE0ODU0MDdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTkzODM0LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ2h1bm9uZyBRaXUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzMCxcclxuICAgICAgICAgICAgeDogLTI5OS41MTM1NzA3MzI3NTc2NyxcclxuICAgICAgICAgICAgeTogMjguNjkzNTg2MTMzMTc5NTA1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTcwMzM1Ny0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0NpbmR5IFhpbmcgUWl1JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzcsXHJcbiAgICAgICAgICAgIHg6IC0zMDcuNjA0OTQ2MDIwODg0OTQsXHJcbiAgICAgICAgICAgIHk6IC0zNi4wOTk3NDI5NzY5MjU1NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUzODIyMzItMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDbGlmZiBIYWd1ZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI1LFxyXG4gICAgICAgICAgICB4OiAtMTU4Ljk0ODg5MTcwNzkyMjE3LFxyXG4gICAgICAgICAgICB5OiA3NS41NzM2NjEyNTk2NzA5MVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1MzU5MDktMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEYXZpZCBCcmFkbGV5IFJ1c3QnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMCxcclxuICAgICAgICAgICAgeDogMjkzLjg5Mzc4MjY2ODgxMjE1LFxyXG4gICAgICAgICAgICB5OiAxMDguMjQwNDU1OTI2OTA0NDlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NzEzOTExLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRGF2aWQgQy4gUmFjZW5ldCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDExNyxcclxuICAgICAgICAgICAgeDogLTcwLjczMTk5OTk2NzI5MDc2LFxyXG4gICAgICAgICAgICB5OiAyODMuNjg4NDUwMjEzMjY2MVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU1MTI0MjYtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEYXZpZCBILiBMZXZ5JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOTcsXHJcbiAgICAgICAgICAgIHg6IDE3NS42MjI3MzM0NjgyOTU5MyxcclxuICAgICAgICAgICAgeTogMTk1LjAzMzQ4MDkyMDQyNzg1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTc1NTczNy0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0RhdmlkIEthcmwgTGVlIFBldGVyc29uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTAsXHJcbiAgICAgICAgICAgIHg6IC0xMTYuMTk5OTc1OTM5MjA2ODEsXHJcbiAgICAgICAgICAgIHk6IDIzNS40MjMxNzQ2Nzc2ODcwNlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYwMDQyNzYtMTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRGF2aWQgTC4gUmFiYmVycycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDksXHJcbiAgICAgICAgICAgIHg6IDkwLjA1NDU1MTM4ODM5NDY3LFxyXG4gICAgICAgICAgICB5OiAtMTk5Ljc2NzI0MzAyNjYwOTkyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDEyNzIyNy0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0RhdmlkIFQuIEdyZWVuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjUzLFxyXG4gICAgICAgICAgICB4OiAzMjAuMDUzODk1NjQ5MzQ3NCxcclxuICAgICAgICAgICAgeTogLTIuNTY3NDQwNjk4Mzc4Mzc3N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUzMjk2NTUtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEZWFuIEwuIEdhcm5lcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDksXHJcbiAgICAgICAgICAgIHg6IDgyLjk4NjgzNzg2NjU4NDQsXHJcbiAgICAgICAgICAgIHk6IC03NS4wMTQ3MjE1NTAwMjEzOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1NTEyNzYtOScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEZWJvcmFoIFJ1cHBlcnQnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMixcclxuICAgICAgICAgICAgeDogLTExOC4yNjU1MjkzNzQ1MTUwNyxcclxuICAgICAgICAgICAgeTogMjAuMTMxNDgxMTg5MTAxNjk1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU1MTI3Ni0xMCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEZW5uaXMgUC4gQmlzaG9wJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTYsXHJcbiAgICAgICAgICAgIHg6IC0xMTMuMDQxMzg0MzI2NTk5NDMsXHJcbiAgICAgICAgICAgIHk6IDY4LjUzNDc5MTgxNTYyMjlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1OTE4MTU5LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnRGVuemlsIFdpbGxvdWdoYnkgQ2hlc25leScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDgsXHJcbiAgICAgICAgICAgIHg6IC0yMjEuMzQzODE2MzE5NzczMixcclxuICAgICAgICAgICAgeTogLTE4MC4zMTI1ODg2ODQzNTcyNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY5MTI4MzktMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEZXJlayBEZWUgRGV2aWxsZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEyNyxcclxuICAgICAgICAgICAgeDogMTI0LjAwNTYyMzY5NzE0NjA5LFxyXG4gICAgICAgICAgICB5OiAzMC4zMDM1MTg1NzMyMTMzMjhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzE4MzYxLTgnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRG9tZW5pYyBKLiBMYVJvc2EnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3LFxyXG4gICAgICAgICAgICB4OiAtMTg1LjE2MzQwMjcxNTE1ODgsXHJcbiAgICAgICAgICAgIHk6IDE5MS40OTg4MDU1ODA5MDg5NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4NTA5NDktMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEb3VnIFdhcm5lcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXHJcbiAgICAgICAgICAgIHg6IDE5Ny40MTA5NTg2NjI0ODg4LFxyXG4gICAgICAgICAgICB5OiAtMTQxLjUxMTM3NDI1OTAxMjc3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjUzMDkzMi0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0RvdWdsYXMgQi4gSG9mZm1hbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQxLFxyXG4gICAgICAgICAgICB4OiAxMTIuNjU5MDIyMDI2Nzg4ODYsXHJcbiAgICAgICAgICAgIHk6IC00MS45NTE3OTQxOTM0MDgwMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY0MzQ1NTAtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEb3VnbGFzIEsuIFdhcm5lcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDExLFxyXG4gICAgICAgICAgICB4OiAtMjQwLjIxMzA1MTgwMzE0NyxcclxuICAgICAgICAgICAgeTogLTU4LjM4NTM0NTIyMTc2MDQ0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjg1MDg5NS01JyxcclxuICAgICAgICAgICAgbmFtZTogJ0R1YW5lIFdhbmRsZXNzJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcclxuICAgICAgICAgICAgeDogLTE0MS43NzEyMDM3MDk1NzUwNSxcclxuICAgICAgICAgICAgeTogLTIzNS44NDk0NTg4ODU1NTMzNlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzc2MzI5ODUtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdFbGxlbiBEaWNraW5zb24nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1LFxyXG4gICAgICAgICAgICB4OiAtNi42NTA3MTI5NTM2NTkyMzIsXHJcbiAgICAgICAgICAgIHk6IDI0My44NTkyMjQ5NDk3Nzk5NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU2MTY1MzItMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdFcGhyYWltIEhlbGxlcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEyNSxcclxuICAgICAgICAgICAgeDogLTEzNi42NjI3NjkzMTc4Njc4OCxcclxuICAgICAgICAgICAgeTogMTQ4LjUwODMzMjg3MzA2ODQ0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjcyNDM5OS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0VybnN0IEthdGNob3VyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMixcclxuICAgICAgICAgICAgeDogMjAuNDYwNzA1MTc3ODE2ODE2LFxyXG4gICAgICAgICAgICB5OiAtMTM4LjYzMTYxNzQzNDYwNDdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0NDAzNjg3LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnRXVnZW5lIEwuIFRpbXBlcm1hbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDY5LFxyXG4gICAgICAgICAgICB4OiAxNjcuODE0MDU5NzYyNDAzMjIsXHJcbiAgICAgICAgICAgIHk6IDIzLjY1Mzc5NDM0ODY3MDUxNlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY5MDUwNTctMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdGcmVkZXJpY2sgRS4gU2hlbHRvbiwgSVYnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMDQ3LFxyXG4gICAgICAgICAgICB4OiAyMDYuOTQwNTU2MDExNjE5NTgsXHJcbiAgICAgICAgICAgIHk6IC0zMy42Mzc5NDQwMTkyMjEwNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUwNDEwODYtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdGcmVkcmljIEMuIENvbG1hbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDExOSxcclxuICAgICAgICAgICAgeDogLTkzLjA3MTQxNTIyMjMzNTY1LFxyXG4gICAgICAgICAgICB5OiAxODcuNjEzODI3OTEyMTQ3NzRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NDMzOTIxLTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnRy4gVmljdG9yIFRyZXl6JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTksXHJcbiAgICAgICAgICAgIHg6IC0yNTAuMjE0MTkyMjA4NzI0OSxcclxuICAgICAgICAgICAgeTogMTE3LjcwOTM2MTg4MTI4Nzg5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU1ODM1MS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0dhcnJ5IE0uIFN0ZWlsJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjEsXHJcbiAgICAgICAgICAgIHg6IC0xOTcuNTUwMzM4NDM3MDcwODgsXHJcbiAgICAgICAgICAgIHk6IC0xNC45NjkwNTQxNTcyNTUyNjFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NzA3MzY5LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnR2VvZmZyZXkgQy4gSHVlaWwnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzNyxcclxuICAgICAgICAgICAgeDogODguNzc3MzIxMjk5NzU5NjgsXHJcbiAgICAgICAgICAgIHk6IC01OS4zNDI5NDQ2OTA5MDQzMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4MjY1ODItMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdHZW9yZ2UgRXJpY3Nzb24nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxyXG4gICAgICAgICAgICB4OiAtMTU4LjAyMDcwODU1MjQ5OTM3LFxyXG4gICAgICAgICAgICB5OiAtMTExLjQxMzU1NjY2MDc1NDEzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnUkUyODkzMi0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0dyYWhhbSBXLiBCcnlhbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE3LFxyXG4gICAgICAgICAgICB4OiAzMDIuMTUxOTcxNzQ5ODE5OTUsXHJcbiAgICAgICAgICAgIHk6IDIuOTcxMTUzMzAxMjE3MTg2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjE0NDY3OS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0dyZWdvcnkgUyBIZXJtYW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3MCxcclxuICAgICAgICAgICAgeDogLTEwNy4wODcyMTIxMjQzODI1MyxcclxuICAgICAgICAgICAgeTogLTIyLjk5OTMyNTk4MDQ3NTM0NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY2MDEwODctMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdHdWFuZ2hvbmcgWWFuZycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDgsXHJcbiAgICAgICAgICAgIHg6IDE4MS45NDAwODY4MDgwMjIxLFxyXG4gICAgICAgICAgICB5OiA3Ny42Njc3ODYyMzM4MTE5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU3NzcyNi0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0hlbnJ5IEQuIEpheScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDcsXHJcbiAgICAgICAgICAgIHg6IC0xMjIuMDIzMjA0NzY5ODI0OTksXHJcbiAgICAgICAgICAgIHk6IC0xNTcuOTU1NjY3MzI0MTgyODVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0MjgzMDI0LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSGVucnkgUi4gU2llbmtpZXdpY3onLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzNSxcclxuICAgICAgICAgICAgeDogMjc0LjYwNDE1NjAzNzEyNzI3LFxyXG4gICAgICAgICAgICB5OiAtMjcuMjczMzA5NjI1ODQ1NjdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3MzIzMzU2LTUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSGlkZW5vcmkgSGlyYW1hdHN1JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNCxcclxuICAgICAgICAgICAgeDogLTM2LjYwNTQyNDI1MTk1MDQ0NixcclxuICAgICAgICAgICAgeTogMTE1Ljg1MDA4OTMxOTk4OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQ3MDMwMTktMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdIaWRlbyBIb3Nvbm8nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA2OCxcclxuICAgICAgICAgICAgeDogLTkuODU5NDU3MDk0MjM3MzMzLFxyXG4gICAgICAgICAgICB5OiAxMTIuMTgzNzQ2OTYzNDg5MTNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0MjUzMDYxLTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSGlkZW8gT2hubycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDU1LFxyXG4gICAgICAgICAgICB4OiAxNi40MjQzOTc4MzU5MTM5OTMsXHJcbiAgICAgICAgICAgIHk6IDEuNTk4MTI5MDMyMTE0MTE2MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUyNzIwNjktNicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdIaXJvbWljaGkgT3RhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTksXHJcbiAgICAgICAgICAgIHg6IC00Mi45MzAyMzEyMzMyOTk1NjUsXHJcbiAgICAgICAgICAgIHk6IDcyLjAzMDgxNTc4Mjk2MTE4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTA0MTIwMC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0hpcm9taXRzdSBJc2hpaScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQwLFxyXG4gICAgICAgICAgICB4OiAtMjQwLjQ1MDk2MjkzMzkyOTYsXHJcbiAgICAgICAgICAgIHk6IC0xNTAuMjc2MDEyNjU5ODgzNTJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODYzMzYzLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSGlzYXRvIFlhYnV0YScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQwLFxyXG4gICAgICAgICAgICB4OiA2MC40MzcyMTQ3NjY1NDU1LFxyXG4gICAgICAgICAgICB5OiA1Ni40OTY2NDkyMTg4MTM4N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzczODUyMjQtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdIaXRvc2hpIEhva2FyaScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXHJcbiAgICAgICAgICAgIHg6IC0yNDEuODMxMDMzMzc5OTUxMSxcclxuICAgICAgICAgICAgeTogLTEzMy41NDA0OTc3OTI5NTQyOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUwNDEyMDAtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdJa3VoaXJvIFlhbWFndWNoaScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEwLFxyXG4gICAgICAgICAgICB4OiAtMjI4Ljc4MDg2NzAxNzE5MTUzLFxyXG4gICAgICAgICAgICB5OiAtMTYyLjM2NjcxNTg4NTYwMTdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0OTk3MjYyLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSWt1byBTYWtvbm8nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA5LFxyXG4gICAgICAgICAgICB4OiAtMjIuNDUxNTU2NjUyMzkzOTQzLFxyXG4gICAgICAgICAgICB5OiAtMzQuMDQ3NTAxNjg0MTgyMTFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MDgxNDIyLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSXNoaWFuZyBTaGloJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjgsXHJcbiAgICAgICAgICAgIHg6IC0yODYuMzI3MDc3NTk0MDM5NixcclxuICAgICAgICAgICAgeTogLTIzLjczMzEwNTExOTQ1ODQ5N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYyODE4OTgtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKYWNxdWVseW4gQS4gTWFydGlubycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQzLFxyXG4gICAgICAgICAgICB4OiAtNzcuNDA0MjY2NzQ2MzAyNTgsXHJcbiAgICAgICAgICAgIHk6IDIzMy4xNDM2NjIwOTM5NzQwNlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY2NjU2NDgtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKYWktSmVpbiBZdScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXHJcbiAgICAgICAgICAgIHg6IC0zMS44NDAwNTI4NjQ5MjY3MyxcclxuICAgICAgICAgICAgeTogLTkxLjYyMzc1NzQ3MzY0MTE5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDgwOTY5Ny0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0phbWVzIEQuIENhdXNleSwgSUlJJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTA4LFxyXG4gICAgICAgICAgICB4OiAtMTc4LjI2NTIxNjEyMDQyMixcclxuICAgICAgICAgICAgeTogNTEuNzU1NjgwOTMwNzQ2Njg1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDg2MzQyNS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0phbWVzIEwuIEhlbmtlJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjUsXHJcbiAgICAgICAgICAgIHg6IC0yMjkuODI2MzIzMjY2OTMxNDQsXHJcbiAgICAgICAgICAgIHk6IDgxLjE0ODM5MTgzNTA0NTFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NTMzMjM4LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmFtZXMgU2F5JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTE1LFxyXG4gICAgICAgICAgICB4OiAtMTEwLjI2NTE0NjUwNTUwMzEzLFxyXG4gICAgICAgICAgICB5OiAxODkuNzM4NDE5MDcyNjEzNzRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzExNTY1LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmFzb24gWm9zcycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE0LFxyXG4gICAgICAgICAgICB4OiAtMzYuNzk3NjM1ODMwNDEzMzgsXHJcbiAgICAgICAgICAgIHk6IC0zMDMuMzYwNjI5MzE0MDA1N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1NTEyNzYtOCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKYXkgWW9uZW1vdG8nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyNixcclxuICAgICAgICAgICAgeDogLTEwOC4zOTA2MDExNTA2NTY5NixcclxuICAgICAgICAgICAgeTogMzAuNjY3NTMwOTY0OTg0ODE3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTg2MzMyNi0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0plZmZyZXkgRS4gTmF1c2UnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3LFxyXG4gICAgICAgICAgICB4OiAtMzQuOTc0Njg3ODI2NTEzOTksXHJcbiAgICAgICAgICAgIHk6IDIyNS41Mzc4MTI3NjY3MjQyN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQ5NTEyNzgtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKZWZmcmV5IEkuIENvaGVuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDUsXHJcbiAgICAgICAgICAgIHg6IC0xMDYuNjc3MjkyNTYwMDM0MjIsXHJcbiAgICAgICAgICAgIHk6IC0yNzUuOTY2NTU3NjUxODIxMjNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MzkzNjA1LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmVmZnJleSBMb29tYW5zJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNCxcclxuICAgICAgICAgICAgeDogLTEyLjA4OTUyMzI4MDg2MjE2NCxcclxuICAgICAgICAgICAgeTogLTE0Ni44NzI5NTY4OTI1MDU2NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUyNDM2MjItMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKZWZmcmV5IE0uIEZpc2NoZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMyxcclxuICAgICAgICAgICAgeDogLTY5LjExNTEwNTc2NDAzNjYzLFxyXG4gICAgICAgICAgICB5OiAtMTIxLjU5NTk2MjM4Mjc4OTExXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTg5NzU2My00JyxcclxuICAgICAgICAgICAgbmFtZTogJ0plZmZyZXkgUy4gU3dheXplJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjM3LFxyXG4gICAgICAgICAgICB4OiAxODIuNzU3NTIxODc3MDcxMixcclxuICAgICAgICAgICAgeTogLTQyLjY1MjI2NDg3NTM5NzkyNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzc2MDg3NjEtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKZW5uaWZlciBSaW5laGFydCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDksXHJcbiAgICAgICAgICAgIHg6IDE0LjYwMzAzMzcxNzY0NDg3NyxcclxuICAgICAgICAgICAgeTogMjU4LjAxNjkzODA3OTQzMDc2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzM4MDY5Ni0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0plcnJ5IFIuIE1vcmdhbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXHJcbiAgICAgICAgICAgIHg6IDI0MC43NzkyMzUxMjUzOTE3MixcclxuICAgICAgICAgICAgeTogMC43NTYxODU2NTUyMjI2MjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NzE1NDUwLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmVzc2UgQW1icm9zZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE5LFxyXG4gICAgICAgICAgICB4OiAzNi4xODA0MjM1MTQ1MDgyMDYsXHJcbiAgICAgICAgICAgIHk6IC0yNzEuMTE4MTUxODkxNjY2NTdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzExNTY1LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmlhbi1KdW5nIFlpbmcnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNSxcclxuICAgICAgICAgICAgeDogLTUyLjQwNTk0MzYyOTE2MDI3LFxyXG4gICAgICAgICAgICB5OiAtMjk4LjYyMDk4NTI0NDY1NzdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTE2MjI3LTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSm9leSBDaGVuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNTAsXHJcbiAgICAgICAgICAgIHg6IC0xNTQuNTQ2NjcxMzYyOTA5OTMsXHJcbiAgICAgICAgICAgIHk6IDIwOC45NTA3MjI4MDczNDMzN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYyMzM2MTctMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKb2huIENva2VyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjksXHJcbiAgICAgICAgICAgIHg6IC0xMDcuODE4OTM4MTU2MzIxNDQsXHJcbiAgICAgICAgICAgIHk6IC0xNzAuOTA3NDY3NjIzMTY1NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQ1NjE0NDQtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKb2huIEguIExpdmluZ3N0b24nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzMSxcclxuICAgICAgICAgICAgeDogLTE1Mi44NTMwMDQ0NDU4Mzk1NixcclxuICAgICAgICAgICAgeTogODUuMTA5NDAwMDg5NjQ5NjdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MjM3MTc4LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnSm9obiBKLiBNYXN0cm90b3Rhcm8nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3NyxcclxuICAgICAgICAgICAgeDogLTIwNS40OTczOTU5MDk1ODUzMixcclxuICAgICAgICAgICAgeTogNTAuMzE0Nzc5NzA0ODQ4NjhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NDI0ODQ3LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSm9obiBKLiBTaGluJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNixcclxuICAgICAgICAgICAgeDogLTE4NS4zNzQ0NjM1NTcxMDM4NCxcclxuICAgICAgICAgICAgeTogLTMuMjg3MjAyNzEwNjIzNTg5NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU3MTM5MTEtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKb2huIFcuIEJlYXJkc2xleScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDExMCxcclxuICAgICAgICAgICAgeDogLTMzLjgxNDc1OTg4NjM4MjAyLFxyXG4gICAgICAgICAgICB5OiAyNjIuODgyNjcyMTExMTM3MjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NjkwMzg3LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSm9obiBaaW1tZXJtYW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNixcclxuICAgICAgICAgICAgeDogLTEwMy44NjQzNjQyODUwMSxcclxuICAgICAgICAgICAgeTogMjg3LjAzMjQxNTIwNzcwMzVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2Mjk1NTMwLTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnSm9uYXRoYW4gQnJhZHNoYXcnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3LFxyXG4gICAgICAgICAgICB4OiAtMjExLjg3MTQyNjA5MTA0NzgsXHJcbiAgICAgICAgICAgIHk6IC0yMjQuNTA5MDQ3ODc0NDUxMjNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2OTY0MzYzLTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnSm9zZXBoIENoYXJsZXMgSGV1aWwnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxyXG4gICAgICAgICAgICB4OiAxNTcuODk0OTA5NjA5NzU0MjgsXHJcbiAgICAgICAgICAgIHk6IC0xMjYuNDQ3ODE4MzE5NzUwNjRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODA0MzMwLTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSm9zZXBoIEhhcmInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNixcclxuICAgICAgICAgICAgeDogNjEuMTI2NjQ4MjI0NTg1NjYsXHJcbiAgICAgICAgICAgIHk6IC0yNjguMTkwODgxNjYxMTg5OVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzcxNTQ0NzctMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKb3NodWEgQS4gU3RyaWNrb24nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzMSxcclxuICAgICAgICAgICAgeDogMTQzLjYwNzcyNzY0NTk5OSxcclxuICAgICAgICAgICAgeTogLTI4MS42NjkzNjkyNjExNDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NjY1NjQ4LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2FyZW4gQnJvZGVyc2VuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMixcclxuICAgICAgICAgICAgeDogLTUyLjg4Nzc2MTYxNzQwNjc0NixcclxuICAgICAgICAgICAgeTogLTEzNS4yNTMyNDYwMTIxMjc0OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY5MTQxODItMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLYXRzdXRvc2hpIFRha2VkYScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEyLFxyXG4gICAgICAgICAgICB4OiAtMzAxLjg5NDMzNDg3NjkxMTg0LFxyXG4gICAgICAgICAgICB5OiAtNzAuNDMzMjQ2NTA4MDg5MDZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1OTI1MjI0LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2F6dWtpIEtvYmF5YXNoaScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIyLFxyXG4gICAgICAgICAgICB4OiAtNDEuOTAwNjc2OTE4MDk2NDE2LFxyXG4gICAgICAgICAgICB5OiA3LjMwMTM1ODU5NjYyMjkxMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzcwNjEwMTQtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLYXp1c2hpZ2UgVWVkYScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDgsXHJcbiAgICAgICAgICAgIHg6IC0zNy42NjQ5NjM2MzQ0ODMyMyxcclxuICAgICAgICAgICAgeTogNTkuNjI0NzU1NjU3MzgyODZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0MzU2NDU1LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2Vpc2hpIFNhaXRvJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNjAsXHJcbiAgICAgICAgICAgIHg6IDEwLjIxOTE0MDYzMzkxMDA4NSxcclxuICAgICAgICAgICAgeTogMTE0LjYwNjExMDA4NDYwNTY3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjE3NTc1Mi05JyxcclxuICAgICAgICAgICAgbmFtZTogJ0tlaXRoIEEuIEZyaWVkbWFuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNTYsXHJcbiAgICAgICAgICAgIHg6IC03Mi43NjQ3ODM5OTQzMjY5MixcclxuICAgICAgICAgICAgeTogMTU3Ljk2MjgwMjQ2MDE0NzM0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnRDI2Mzk4Ny0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0tlaXRoIEwuIE1pbGxpbWFuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTQ4LFxyXG4gICAgICAgICAgICB4OiAyODUuMjcwNTUxNDYzMDk4MDYsXHJcbiAgICAgICAgICAgIHk6IC00LjE2MTYwNzY5OTk1Mjg0NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJ0QzMDQyMzQtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLZWl0aCBSYXRjbGlmZicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDc2LFxyXG4gICAgICAgICAgICB4OiAyOTguMjU0Mzg2NTU2NDQ1ODcsXHJcbiAgICAgICAgICAgIHk6IC02Mi4wMzc3MzM5OTA3MzA2MTVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODM4Mzk3LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2VuZ28gQWtpbW90bycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMwMSxcclxuICAgICAgICAgICAgeDogMjMzLjMwNTkxMDg5Mjg0MTI0LFxyXG4gICAgICAgICAgICB5OiAxMTguMTI4NjU4MTQ3NDQyODNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0MDcyMjM2LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2VuamkgTm9tdXJhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNzIsXHJcbiAgICAgICAgICAgIHg6IC0xOC40OTE1NzM2MjA3NDg0NTQsXHJcbiAgICAgICAgICAgIHk6IDE2NC4zMzE5NzQzODgyMDg1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDg5MDYxMS0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0tlbm5ldGggSC4gTW9sbGVuYXVlcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEzOSxcclxuICAgICAgICAgICAgeDogMTcxLjEyMTM5MDk5MTI1Mjg0LFxyXG4gICAgICAgICAgICB5OiAxNDkuODI3ODkzMjE4MzIwN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU0MDk0OTgtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLZW5uZXRoIFMuIFdhbGVzJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzQsXHJcbiAgICAgICAgICAgIHg6IDE1MS42MTUwNjUwMDQ4NjM2NSxcclxuICAgICAgICAgICAgeTogLTY4LjE3MTUzMDEwOTY5NzVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTU4MzUxLTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2Vyc3RpbiBSZWJyaW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4LFxyXG4gICAgICAgICAgICB4OiAtMjEzLjk5ODMyNjQ4MjE5ODkzLFxyXG4gICAgICAgICAgICB5OiAtMTguMjEwMjAzNTA5NzA2OTVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3MDgzMDc1LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2V2aW4gUi4gRG9sbCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMzLFxyXG4gICAgICAgICAgICB4OiAxOTUuMTcxNjE4NjEyOTY0MTIsXHJcbiAgICAgICAgICAgIHk6IDIxLjgyNzU3MTkwNzE4Mjg2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjgyNjc0NS0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0tldmluIFIuIE5peCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUsXHJcbiAgICAgICAgICAgIHg6IC0xMTMuNTIzMTgzNDk2Nzk3ODYsXHJcbiAgICAgICAgICAgIHk6IC0xODYuNjU4NTA0NjQwOTc3NjdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0NjgyNTk2LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2V2aW4gVy4gU21pdGgnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyNDUsXHJcbiAgICAgICAgICAgIHg6IDE0Mi4wMTUxNzA1MjYxOTIyNCxcclxuICAgICAgICAgICAgeTogMzUuMzE3MTMwMzIwNDAwMThcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MzM2MTM3LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2luZy1Id2EgTGVlJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNyxcclxuICAgICAgICAgICAgeDogMjkuMTM2NDE2ODIxMzg5NTQ1LFxyXG4gICAgICAgICAgICB5OiAtMTUyLjgzODkyMjc5MTAwMTM1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU1MzU2My0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0tsYXVzIFcuIFN0cm9iZWwnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxyXG4gICAgICAgICAgICB4OiAxOC41MDIyNjk4MDI4OTYxODcsXHJcbiAgICAgICAgICAgIHk6IC0yNzcuODQyMjkxMTkxNjQ0ODVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NzE1Njc1LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnS29yZXkgS2xpbmUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA2NyxcclxuICAgICAgICAgICAgeDogMTA3LjM5MjgwODY0MDQ2NTYsXHJcbiAgICAgICAgICAgIHk6IDAuMTI0OTcxNjgzOTEyMDg4ODFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzE4MzYxLTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnS3Jpc2huYSBNYW5naWFwdWRpJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMixcclxuICAgICAgICAgICAgeDogLTIyMS40MjM1MTE4MTA5NTM3NixcclxuICAgICAgICAgICAgeTogMjEwLjY4NDYyMTA3NjIxNjk2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU3NzcyNi0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0t1YW5nLVlhbmcgSHVhbmcnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3LFxyXG4gICAgICAgICAgICB4OiAtMTEwLjkwMjkzNDc0NDE5NjM0LFxyXG4gICAgICAgICAgICB5OiAtMTQ0LjExMDc0NzcyNzQwMTlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3MTU5NzUwLTUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTGVlIEFubiBPbHNvbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEwMixcclxuICAgICAgICAgICAgeDogLTEyLjI5MTA0NTcyOTgxNjU5MyxcclxuICAgICAgICAgICAgeTogMjg0LjMyMjgyNDAyNzY3MVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3MTgzNjEtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdMZXJveSBSLiBLYXJnZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDYsXHJcbiAgICAgICAgICAgIHg6IC0yNDYuNTY4OTg0OTU5MDE4MjgsXHJcbiAgICAgICAgICAgIHk6IDE3Ni44NjQzMDgyNDg5MTI4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU1MTI3Ni00JyxcclxuICAgICAgICAgICAgbmFtZTogJ0x1aXMgSi4gTWFsYXZlJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjUsXHJcbiAgICAgICAgICAgIHg6IC0xNTAuNDY5NTUxNTg0MTIxMDYsXHJcbiAgICAgICAgICAgIHk6IDE1LjQ2NjY4MTM1NTU5NDA0M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYwNDgxMTAtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdMeW4gTS4gSXJ2aW5nJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNTAsXHJcbiAgICAgICAgICAgIHg6IDE4NS44OTM2ODI1NTIwMzYzOCxcclxuICAgICAgICAgICAgeTogMjExLjczNDk3MzE2ODM3NDQ0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjcxODM2MS0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0x5bm5lIE0uIE11cmFjaCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDYsXHJcbiAgICAgICAgICAgIHg6IC0xODQuNTk3MzE2MTI1OTkzNzksXHJcbiAgICAgICAgICAgIHk6IDE2OC45NTQ1OTAzMDEyODQwNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU5NDg3ODktMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNYWdudXMgTGFyc3NvbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMyLFxyXG4gICAgICAgICAgICB4OiAyODIuMzQ5ODc0MzQ5MjMwNCxcclxuICAgICAgICAgICAgeTogLTEwNS44NTM5MDU3NjgzOTQwOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4Mjk2NTUtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNYWdudXMgVmVqbHN0cnVwJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNSxcclxuICAgICAgICAgICAgeDogODQuNTc2ODM0MjA1MDU4NDksXHJcbiAgICAgICAgICAgIHk6IC0yMTEuNjA1NDY1OTExMjkxMjJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzExNTY1LTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWFyYyBDYWx0YWJpYW5vJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTgsXHJcbiAgICAgICAgICAgIHg6IC0yMS41NzI1MDM1NDcwMzE3NjUsXHJcbiAgICAgICAgICAgIHk6IC0zMDMuMjUwMDEyMDQ4MDA4ODRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3MDc4NTAzLTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWFyaWFubmUgTWFsdmVuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjQsXHJcbiAgICAgICAgICAgIHg6IDM5LjM2NDc4OTEyMTgzOTgyLFxyXG4gICAgICAgICAgICB5OiAyMDQuNTA3NjEwODgyMzc5NjJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MjIzMjA1LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWFyayBFLiBDcm92ZWxsYScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDExLFxyXG4gICAgICAgICAgICB4OiAtMjM5LjEzMDY3MzM5MjA3NixcclxuICAgICAgICAgICAgeTogMTU5LjUzODYyNjgxMjA3MDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NjIxODM0LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWFyayBSYW5kbGUgQm95bnMnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA5LFxyXG4gICAgICAgICAgICB4OiA5Mi45NTE1OTkxMzQwODQ0LFxyXG4gICAgICAgICAgICB5OiAxMzkuNzI0OTE2OTk0MTgxMjlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NTM0MTMyLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWFyayBTLiBWcmVla2UnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA5OSxcclxuICAgICAgICAgICAgeDogLTEyNi4xNzQxNDI0MDgyNTIwMixcclxuICAgICAgICAgICAgeTogMTgyLjE0ODg2ODAxNzQ4NTM0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDg5MjI0NC00JyxcclxuICAgICAgICAgICAgbmFtZTogJ01hcmsgUy4gWmVpbmVyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTEyLFxyXG4gICAgICAgICAgICB4OiA4Ny44NjU1MTIzMzk0NDc5MixcclxuICAgICAgICAgICAgeTogLTkzLjYxNDM1OTQ5OTA2ODY2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjgyOTY1NS02JyxcclxuICAgICAgICAgICAgbmFtZTogJ01hcnRpbiBTdXNzZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4LFxyXG4gICAgICAgICAgICB4OiA4Ni41MTY2NDQ5NzE2MzExLFxyXG4gICAgICAgICAgICB5OiAtMTc2LjM2ODA1Njg2MjQ4NDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0NDg2NzIwLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWFzYWhpcm8gSGlyYW5vJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNjQsXHJcbiAgICAgICAgICAgIHg6IC0yNi40NzM5NDEwMjEzMjg4MzQsXHJcbiAgICAgICAgICAgIHk6IDUwLjU4Mzg3NzUwMTI4NzQ3NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU2MjI2NTMtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNYXNhaGlybyBPcml0YScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEzLFxyXG4gICAgICAgICAgICB4OiAtNDMuMzExOTQzNTEyNDY5NTA0LFxyXG4gICAgICAgICAgICB5OiA4OC4wNTg1MjQwMTA5MjM2MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYwODA5OTgtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNYXNhbyBJc29tdXJhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcclxuICAgICAgICAgICAgeDogLTI3Ny4xNjczOTY4NzMzNDE5LFxyXG4gICAgICAgICAgICB5OiAtNjkuMTYzMTM1OTAzNTg3NjlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0OTAyNjcxLTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWFzYXNoaSBLYXdhc2FraScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQ0LFxyXG4gICAgICAgICAgICB4OiAyNS40OTk4MzQ5ODE3NTE1MDUsXHJcbiAgICAgICAgICAgIHk6IDEyLjQ1ODgzNTk2MjkwNzc2OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUxMTc4MzgtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNYXR0aGV3IEEuIFBhbG1lcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIxMyxcclxuICAgICAgICAgICAgeDogMTExLjg0NDQwNzE5NTEyODcxLFxyXG4gICAgICAgICAgICB5OiAxNy41NTM1MjI0Mzg1NDczMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1Nzc3MjYtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNYXR0aGV3IFMuIE1hbGRlbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE1LFxyXG4gICAgICAgICAgICB4OiAtODkuNzcyODE3MTU3NjIxMTIsXHJcbiAgICAgICAgICAgIHk6IC0yMTIuNTIwMDA5OTQ4MDc0NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY2NjU2NTUtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNaWNoYWVsIEEuIE15ZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxyXG4gICAgICAgICAgICB4OiAtMjIyLjE1NDg5ODQyNjYyNzgsXHJcbiAgICAgICAgICAgIHk6IC05MS44ODM3MDc3OTk4NzEyNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU2MzI0MzItNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNaWNoYWVsIEUuIFNldHNlcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQ2LFxyXG4gICAgICAgICAgICB4OiAyMzYuMTQ1MzQ4NjkwNTkxNSxcclxuICAgICAgICAgICAgeTogLTI5LjUzMzA0MzQzNzQxNjY3NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUzMDY2MjMtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNaWNoYWVsIEYuIFRvbWFzY28nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4OSxcclxuICAgICAgICAgICAgeDogLTEzNi4zNTAzNDAyMjMwMTkyNixcclxuICAgICAgICAgICAgeTogMTY2Ljg3Mzc2Nzg2MDk1MzYyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjYwNjc0NC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ01pY2hhZWwgRy4gTWlrdXJhaycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE0LFxyXG4gICAgICAgICAgICB4OiAxNDMuMDYxMDcxMjM4Mjg3ODcsXHJcbiAgICAgICAgICAgIHk6IDIwMy42ODY1MDAzMDg2NDY4NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYyNjQwODctMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNaWNoYWVsIFAuIFdoaXRtYW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMzQsXHJcbiAgICAgICAgICAgIHg6IDg4LjMxMzMwNzkwOTg4ODIyLFxyXG4gICAgICAgICAgICB5OiAyMzcuMTA0NzY1MjgwNTg0MjJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NjY1NjQ4LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWljaGFlbCBUc3VuZ2hzaSBZdScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIsXHJcbiAgICAgICAgICAgIHg6IDcuMzA0NTU5NzQxMTg4MTAwNSxcclxuICAgICAgICAgICAgeTogLTEwMS42Mjg5MzM0Njk4NjMyM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYwODE1MTgtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNaWNoZWwgSy4gQm93bWFuLUFtdWFoJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNTYsXHJcbiAgICAgICAgICAgIHg6IDE1My41NTgwNTcwMzI5MjY3NCxcclxuICAgICAgICAgICAgeTogMjc4Ljc1ODQxNjM1OTA0MDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0MjI0NzI1LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWljaGlvIEthZG90YScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE3MyxcclxuICAgICAgICAgICAgeDogNzAuMjUyNDkxMTAwNjcwMTEsXHJcbiAgICAgICAgICAgIHk6IDI2MC4xNzYzMDY4NDUwMDc4NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4NTA5NDktMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNaWtlIE15ZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxyXG4gICAgICAgICAgICB4OiAyMDAuOTg0MTAwMjcyOTA2NzcsXHJcbiAgICAgICAgICAgIHk6IC0xNjUuMTgwMDk5NDE1OTE4N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUyNjEwMzctMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNaW4gWmh1JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTE5LFxyXG4gICAgICAgICAgICB4OiAxODcuMjE3ODc5OTA1MTk0NDUsXHJcbiAgICAgICAgICAgIHk6IDExOS4xODA1MjMyMjI0MTEyNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3MzIxMDAtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNaW5ndGUgSi4gQ2hlbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXHJcbiAgICAgICAgICAgIHg6IC03NC44OTM5NjgyMTEzNTA1NCxcclxuICAgICAgICAgICAgeTogLTE0NC40ODE1MTAxMTg0MDk4NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUxNzY1MDItMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNaXRjaGVsbCBKLiBQYWxtZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0MCxcclxuICAgICAgICAgICAgeDogMzE1Ljc5MDkyNjIxMzM3NTM3LFxyXG4gICAgICAgICAgICB5OiAtNTguNzk2NjY5Mzk0MTk3NjNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3Mzg1MjI0LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTW90b2hpa28gWW9zaGlkYScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUsXHJcbiAgICAgICAgICAgIHg6IC0yMzEuMTg3NjgzMjQ4NDc0NDMsXHJcbiAgICAgICAgICAgIHk6IC0xMTYuNDUxMDc3NTY3OTEyNzJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1OTE4MTU5LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTXVuZGkgRm9tdWtvbmcnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMixcclxuICAgICAgICAgICAgeDogLTIyMS42MjUyNjgxNTM1MzE4NixcclxuICAgICAgICAgICAgeTogLTIwMS43NTMxNzM4ODI2NTQ3NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzc2MzI5ODUtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdOYW5jeSBUYXlsb3InLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1LFxyXG4gICAgICAgICAgICB4OiA1MC4wMTU4ODY0OTI5NTY4NDUsXHJcbiAgICAgICAgICAgIHk6IDIyNy4yNzU5NTQwNzgwNDk3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzQ2ODMwNC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ05vYnV5dWtpIEthamknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNixcclxuICAgICAgICAgICAgeDogNDEuODIyMzc2MDgyMTYxNjk2LFxyXG4gICAgICAgICAgICB5OiA1Mi41MTQyNDY3NTI4NTQyNTVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3MjA1NzE2LTUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTm9yaWhpdG8gU29uZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE5LFxyXG4gICAgICAgICAgICB4OiAyNjkuMTE1MDY1NTY3MzE0LFxyXG4gICAgICAgICAgICB5OiA3MC4wMTIyNDgzNjI0OTM1OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUzNTg1MTQtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdQYXVsIE0uIE1lYWRvd3MnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3MCxcclxuICAgICAgICAgICAgeDogLTE3MS4yNjk3NTUzMTYzODQ3LFxyXG4gICAgICAgICAgICB5OiAyNTYuNTQ3OTQzOTA4ODcxNzNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTU4MzUxLTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUGF1bCBWLiBHb29kZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE1NCxcclxuICAgICAgICAgICAgeDogLTIzMC4xNjExNDE5NjM5MDkzNixcclxuICAgICAgICAgICAgeTogLTEzLjQxMDMxNDg0NTAwMTkxM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3MTE1NjUtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdQYXZpdHJhIFN1YnJhbWFuaWFtJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjAsXHJcbiAgICAgICAgICAgIHg6IC02LjM3Mjc0ODM0Nzk0NzMzOCxcclxuICAgICAgICAgICAgeTogLTI5Ny45NjcwMjY0OTA5MDY4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnRDQyMzc2MS0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ1BldGVyIEhvbmcnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyNSxcclxuICAgICAgICAgICAgeDogLTIwNy4wMjkxMzQ0NDQ1ODc1NixcclxuICAgICAgICAgICAgeTogMTEzLjIwNDQ0NzcyMDc3NDZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MTUyOTg3LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnUGV0ZXIgTWFyZGlsb3ZpY2gnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMTAsXHJcbiAgICAgICAgICAgIHg6IC0xMTMuNzA1NDE0NjI3NjM0MTQsXHJcbiAgICAgICAgICAgIHk6IC03MS42Mzg2Njg3ODQ0ODkyOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU4NzMwOTYtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdQZXRlciBTLiBMaW0nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxOSxcclxuICAgICAgICAgICAgeDogLTQxLjQ5NzE1NzU5OTQ3NzksXHJcbiAgICAgICAgICAgIHk6IC0yMjkuODYzNDczODQ4NjMwOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3MzIxMTEtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdQZXRlciBTaWFtIFN5IExpbSBJSUknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxyXG4gICAgICAgICAgICB4OiAtMTE5LjY4Nzc2MDg3MTgxMjkxLFxyXG4gICAgICAgICAgICB5OiAtMjY0Ljc0NDExNTMxNDkyNDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODUwODk1LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUGV0ZXIgU2lhbSBTeSBMaW0sIElJSScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXHJcbiAgICAgICAgICAgIHg6IC0xMzcuNTEzMjc4NjE4Njg5OTIsXHJcbiAgICAgICAgICAgIHk6IC0yNTMuMDUwMTUyNjM0MTYwMTNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3MTU5NzUwLTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUGhpbGlwIFJveScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQ1LFxyXG4gICAgICAgICAgICB4OiAtNTUuOTE1MzMxODM3MzM0NTg0LFxyXG4gICAgICAgICAgICB5OiAyNjUuNDUyNzM5OTg1OTA1OVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYxMDMwMzMtNycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdQaGlsbGlwIEpvaG4gUGxhbnRlJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNzYsXHJcbiAgICAgICAgICAgIHg6IC04OS41NjE3MjYzNDI3MzkzOCxcclxuICAgICAgICAgICAgeTogMTI4LjQ5MzU5OTU0MDIwOTM3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTk3ODgyOS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1BpLVl1IENodW5nJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTUsXHJcbiAgICAgICAgICAgIHg6IDc5LjAzMzMwMzA5NzY4MzMzLFxyXG4gICAgICAgICAgICB5OiAtMTY2Ljg5NjIwMzAxNDAyNjk1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjA5MjA4My0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ1ByYXNoYW50IENoYXR0ZXJqZWUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMixcclxuICAgICAgICAgICAgeDogLTEyNy45ODE2NjI0ODk3ODA0NSxcclxuICAgICAgICAgICAgeTogLTIyNi4wOTU5MDMyMjk4MzA2N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzczNDA0MTEtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSYWNoYWVsIEwuIENvb2snLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxyXG4gICAgICAgICAgICB4OiAxNDUuNTgxNjQzNDk1MzY4NSxcclxuICAgICAgICAgICAgeTogLTE4NS45MTE1MjI3ODQ4MjUxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDg3MjYwMy0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1JhbHBoIFN0ZWFybnMnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4MixcclxuICAgICAgICAgICAgeDogLTE3LjYzODI2MTEzOTc0MDA3NyxcclxuICAgICAgICAgICAgeTogMzExLjg3NDQwMDk2MDE2MjM1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjgzNjU0MC02JyxcclxuICAgICAgICAgICAgbmFtZTogJ1JhbmR5IEhvZmZtYW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA2NixcclxuICAgICAgICAgICAgeDogLTk2LjY3OTE1MDYyMjcxNTIzLFxyXG4gICAgICAgICAgICB5OiAtMTguODYzMjY3NjQyMzM4MzU3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDc5ODU5NC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1JpY2hhcmQgQS4gSGlsbHN0ZWFkJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNTYsXHJcbiAgICAgICAgICAgIHg6IDIyMC45NDA0MzA0MzI1ODg3LFxyXG4gICAgICAgICAgICB5OiAxNTUuOTIxMjQ5MzIxNzE3MVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUwOTcxMjItMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSaWNoYXJkIEUuIFB1cnZpcycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIyLFxyXG4gICAgICAgICAgICB4OiAtMjMxLjYyMjExNzM0ODUzMTIsXHJcbiAgICAgICAgICAgIHk6IDU4LjUzMjc4ODU5MzQwNjQ2NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYyNjg4MDMtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSaWNoYXJkIEdvcm1hbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEwLFxyXG4gICAgICAgICAgICB4OiA3Ni43MTY2NzQzOTIyODIwMixcclxuICAgICAgICAgICAgeTogLTI0Ny40MDc1Njg0NzU0MzM2NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUyNzE1NDMtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSaWNoYXJkIEwuIEdyYW50JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjIsXHJcbiAgICAgICAgICAgIHg6IDEwOC4zNzc5MDI2MTYzODE1NixcclxuICAgICAgICAgICAgeTogLTEwOS41MzQyOTc3NDAxMTIwNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYwOTIwODMtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSb2JlcnQgQS4gQnJvZGVyc2VuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjEsXHJcbiAgICAgICAgICAgIHg6IC0xMTYuNzg2NzczMjkzODAzMzIsXHJcbiAgICAgICAgICAgIHk6IC0yMTEuNzQzMTIxNzI3NTQ4OThcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1ODczMDk2LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnUm9iZXJ0IEJyb2RlcnNvbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXHJcbiAgICAgICAgICAgIHg6IDMyLjQ3MDU2NDM2MjcxMDMzNCxcclxuICAgICAgICAgICAgeTogLTIxMi4zNTY1MDM3NjE2OTA0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTk2Mzk1My0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1JvYmVydCBDcmFtJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcclxuICAgICAgICAgICAgeDogMzkuNzMxNjU2MjI4MDM2MDQ0LFxyXG4gICAgICAgICAgICB5OiAtMTU5LjcwMTE3NDE5NjYyODUzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDM2MjM4Ny0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1JveSBDbGFyaycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIzLFxyXG4gICAgICAgICAgICB4OiAtMTQzLjM4MDY1NDY3ODA1NTgzLFxyXG4gICAgICAgICAgICB5OiAtODMuMTg2NDY5MzIzMzI4OTRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NDE3NzcwLTgnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUnlvIEhheWFzaGknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3MSxcclxuICAgICAgICAgICAgeDogMTA5LjU2OTAwMjcwMTgxMzIyLFxyXG4gICAgICAgICAgICB5OiA5NC4yNjkwNzc2MTkzMzM5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjA4MTg3NS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ1NhbmpveSBDaGF0dGVyamVlJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMixcclxuICAgICAgICAgICAgeDogLTE2OC41NTM1MTcxOTM3MzI3NCxcclxuICAgICAgICAgICAgeTogLTU1LjAwMzkxMzI3NzEwMDcyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTQxNjI1NS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1Njb3R0IEEuIEJlcmdlbWFubicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEwNixcclxuICAgICAgICAgICAgeDogMjM2Ljk4NDM2NTg0Mzc4MzEsXHJcbiAgICAgICAgICAgIHk6IC0xNTQuNTM4NTMyODkzNjMxNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3MjQzOTktMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTaGFua2FyIFMuIE5hdGhhbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXHJcbiAgICAgICAgICAgIHg6IDguMDE3NjUxMzI2NzEzODAzLFxyXG4gICAgICAgICAgICB5OiAtMTMyLjY3NDM5MjA1NjMyNjY0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjgwNDMzMC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1NoYW5ub24gSm9uZXMnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1LFxyXG4gICAgICAgICAgICB4OiA3MS4xMzIwNjk4MTg0NDYzMSxcclxuICAgICAgICAgICAgeTogLTI1OC40OTkzNDIzOTk0MTM3NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4ODc3MzYtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTaGFudGhpIEdhbmVzYW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0LFxyXG4gICAgICAgICAgICB4OiAtMzYuOTk0ODgyMTA3NTY0MDc0LFxyXG4gICAgICAgICAgICB5OiAxNzYuNDQzNTIxMDM5NTMxNlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYxODM1ODktMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTaGluIEtpbScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQ3LFxyXG4gICAgICAgICAgICB4OiAtMjg3LjY3MjY2NDY2Njc5OCxcclxuICAgICAgICAgICAgeTogNDUuODEyNjExNjQxMzkwNjc0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjY1NDAzMi00JyxcclxuICAgICAgICAgICAgbmFtZTogJ1Nvbmd4aWFuZyBXZWknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3LFxyXG4gICAgICAgICAgICB4OiAxMzIuMzE5OTE3MTA0NDA4MixcclxuICAgICAgICAgICAgeTogODYuMzMzNjkyMDE4MTE4NzVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzgzNTI0LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3RlcGhlbiBDLiBBbmRlcnNvbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXHJcbiAgICAgICAgICAgIHg6IDYyLjYyMDA3MjAxMzk1MDUsXHJcbiAgICAgICAgICAgIHk6IDMwMi40OTYxODg1NzA4MzAyN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU3NzQzNTctMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTdGV2ZW4gTS4gSG9mZmJlcmcnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMDYsXHJcbiAgICAgICAgICAgIHg6IC0yOTguMTQ5ODE1Nzg5Mzk5NDQsXHJcbiAgICAgICAgICAgIHk6IDg4LjU2ODAzNTEwNDUwMzlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NTk0MTY5LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3RldmVuIFAuIEhvdGVsbGluZycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMwNixcclxuICAgICAgICAgICAgeDogMTc4LjMxMzU2MjI0NDIwNzU2LFxyXG4gICAgICAgICAgICB5OiAtMjU1LjQzMDQyNTA3NDgwNTc4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjUyNjMzNS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ1N1c2FuIE0uIFRyZXl6JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTUsXHJcbiAgICAgICAgICAgIHg6IC0yNzkuMjMzODQ3MTMwNDE4MyxcclxuICAgICAgICAgICAgeTogMTM5Ljk5MjU3MzM2NzI3OTQ1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjYzOTI0Ni0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1RhdHN1eWEgSG9uZGEnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMDksXHJcbiAgICAgICAgICAgIHg6IDI1MC4wNjAyMDc3MjAxNjg0LFxyXG4gICAgICAgICAgICB5OiA2Ni4zMzQwMTMyMjI2ODYzN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUzNDU2MzktNicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUYXRzdXlhIEl3YXNha2knLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMTYsXHJcbiAgICAgICAgICAgIHg6IDg2LjMzMzYxMzQ0NzE3NzMsXHJcbiAgICAgICAgICAgIHk6IDE1Ny44MjU5MzQ2MjA2MDc0M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYzMjQ1NjgtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUaGFuaCBEaWVjJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcclxuICAgICAgICAgICAgeDogLTc4LjAzMTQ3NDY5MTI1MTg0LFxyXG4gICAgICAgICAgICB5OiAtMjcyLjU4ODY2MDY4NjE3MThcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NzE1NDUwLTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnVGhvbWFzIE0uIFJvdGh3ZWluJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTMsXHJcbiAgICAgICAgICAgIHg6IC0xOS4xNjUxMDEwMTMyNDE0OTMsXHJcbiAgICAgICAgICAgIHk6IC0yMDguMTgwNDY0MDg0MDYxOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJ1JFMzk4NDEtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUb2RkIFBoaWxsaXAgT21haXRzJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNyxcclxuICAgICAgICAgICAgeDogMTI5Ljk5MzA2ODU0NjI1MDA3LFxyXG4gICAgICAgICAgICB5OiAtMjIuMDQ5OTAxNjE1MDM4NDA4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjg1MDk0OS0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ1RvbSBBYnNoaXJlJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcclxuICAgICAgICAgICAgeDogMTQwLjI2NTY2OTAyNzE1MjI4LFxyXG4gICAgICAgICAgICB5OiAtMTUzLjM5MTcyOTQ4NDM5NThcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3MDYxMDE0LTYnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVG9zaGlvIEthbWl5YScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI1LFxyXG4gICAgICAgICAgICB4OiA5LjEyNjI3MTI3NjI1NDM3NyxcclxuICAgICAgICAgICAgeTogMTAxLjgyMjk4NjMwNTU2MzI2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjcxODM2MS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1ZpamF5IFIuIEJhc2FuaScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDksXHJcbiAgICAgICAgICAgIHg6IC0yMDEuMzgyMjcxNzMyMDUwMjcsXHJcbiAgICAgICAgICAgIHk6IDIwOC43NDMyNzA0OTkyNjMyOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3MTgzNjEtNScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdWaXRhbHkgUy4gUmV2c2luJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTMsXHJcbiAgICAgICAgICAgIHg6IC0xOTguNzA0NzMwNzgwMjQ5ODMsXHJcbiAgICAgICAgICAgIHk6IDE1Mi40MDUyMjExNjY1OTQzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjk3ODkyMS0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ1dpbGxpYW0gQi4gV2Vpc2VuYnVyZ2gsIElJJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTUyLFxyXG4gICAgICAgICAgICB4OiAyNDguMjQzOTM5MDYyOTM3MzMsXHJcbiAgICAgICAgICAgIHk6IC05MC4yOTM0MjUyNDM2OTMyNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUyNTc5NzEtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdXaWxsaWFtIFAuIFZhbiBBbnR3ZXJwJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNjksXHJcbiAgICAgICAgICAgIHg6IC0yNDMuNTIwOTkxOTE2Nzc5LFxyXG4gICAgICAgICAgICB5OiAyMy40MTc2Nzk5Nzc5MTEzMjdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODI5NjU1LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnWGlhb2ZlaSBIdWFuZycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUsXHJcbiAgICAgICAgICAgIHg6IDg5Ljk4ODc0MTYxMDM4NTYsXHJcbiAgICAgICAgICAgIHk6IC0xODcuNzk0MTM5OTgxNjM0ODNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MjgzNDUyLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnWWktQ2hpIFNoaWgnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzMyxcclxuICAgICAgICAgICAgeDogLTMyMy43MTM1OTY0MTg3MTE2MyxcclxuICAgICAgICAgICAgeTogMjMuOTA4OTM2NTg2NDk0MDg2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTkwMTg5Ni0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1lvcmFtIEdhbCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDc2LFxyXG4gICAgICAgICAgICB4OiAtMTA3LjIzMjI1NTEwNjIwNDg5LFxyXG4gICAgICAgICAgICB5OiAxMjQuNzM1NDE3MzkwMjYxMTJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0NTczNDcyLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnWW9zaGloaXJvIEl0bycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE4OSxcclxuICAgICAgICAgICAgeDogMTE4LjIwMjUwOTM4MzgzODkyLFxyXG4gICAgICAgICAgICB5OiAyODcuOTYxNTMyNjQzNDI4M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU4NTU5NTctMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdaaGVuZyBZdWFuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNTgsXHJcbiAgICAgICAgICAgIHg6IDEzOC4wOTIwNjk1MjE3MzE5LFxyXG4gICAgICAgICAgICB5OiAxMjQuMDY0NDAxMTc5NzY5M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19aNTlhVUJHdFo5UDVRemRGaUttWicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBYmxhaXNlIExpbWl0ZWQnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyLFxyXG4gICAgICAgICAgICB4OiAtMTkwLjQ4MjExMzAwMTA3NDIsXHJcbiAgICAgICAgICAgIHk6IC0yMzYuNTM2MTk2OTg1Mzk0ODdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfNHpPMkJjMDh4NTZYakRxNVRlQnAnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQWNjZW50dXJlIExMUCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIxMCxcclxuICAgICAgICAgICAgeDogMTcyLjg2NjAyMzAwODMzOTU3LFxyXG4gICAgICAgICAgICB5OiAyNTMuNzAzMzA4MTU0MTY1ODVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfYndxODNqYmNjS3FGNGpKclBjYVInLFxyXG4gICAgICAgICAgICBuYW1lOiAnQWR2YW5jZWQgQmlvbmljcyBBRycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDYzMyxcclxuICAgICAgICAgICAgeDogLTE3Ni45MTQ2ODQ3Mjk4MTU1NSxcclxuICAgICAgICAgICAgeTogMjMzLjYzMzg4MzUyNTk2MTlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfSURVYlMwOVpSMEpoSjhqRkVwdFQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQXBwbGUgSW5jLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIxMDIzLFxyXG4gICAgICAgICAgICB4OiAxNTEuNjgyNDY2NDE1Nzg4NjcsXHJcbiAgICAgICAgICAgIHk6IC0yMjIuMTI0ODc0ODgxNDQ4OVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19FaFlGUElKRW1ZUVlSb1l2c25weScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDYW5vbiBLYWJ1c2hpa2kgS2Fpc2hhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNzQ1OTYsXHJcbiAgICAgICAgICAgIHg6IDQ5LjQ4MjIzOTIwNTczMjk2LFxyXG4gICAgICAgICAgICB5OiAxMzQuMDkyMjg4NzMxMTU1OTJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfSW1lZzlXNlAxVEU2STJRdXRTNHknLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ2FzaW8gQ29tcHV0ZXIgQ28uLCBMdGQuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDUyMSxcclxuICAgICAgICAgICAgeDogLTE3OS44MTc1OTM0MTIwNTE1LFxyXG4gICAgICAgICAgICB5OiAtMTQyLjcxODI4ODUyOTIxMDQ0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnXzhjc01ndGduTjBtUkVacE5QMUppJyxcclxuICAgICAgICAgICAgbmFtZTogJ0NlcmVicmFsIFZhc2N1bGFyIEFwcGxpY2F0aW9ucywgSW5jLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQsXHJcbiAgICAgICAgICAgIHg6IDI2OC44MDA0NTQxNDQ0Mzg3LFxyXG4gICAgICAgICAgICB5OiAxNjQuNTIzNjk0NzgzMTU2ODNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfMGVUcjNYSUJqQUtwWGtDNjgyM3InLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ2VybWV0LCBJbmMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNyxcclxuICAgICAgICAgICAgeDogLTQ4LjQwMzcyNzY4OTU1MTU2LFxyXG4gICAgICAgICAgICB5OiAyMDUuNDQwMjU4ODM4MjYwNjZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfMTA3V0tOUGJ2RERLclpCbG13OFUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ29udGlnbyBTb2Z0d2FyZSwgSW5jLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIsXHJcbiAgICAgICAgICAgIHg6IDI5OS4zMTc0MzU5MDk1OTUzLFxyXG4gICAgICAgICAgICB5OiA0OC4wMzQ5MjQ2OTgwMDgzM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19wcEVsa0V0UXZGdEc2QTQ3NTRVSScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdFYXN0bWFuIEtvZGFrIENvbXBhbnknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMTUzOSxcclxuICAgICAgICAgICAgeDogMjExLjM3NTI1OTQxMzUyNzg2LFxyXG4gICAgICAgICAgICB5OiAyMTcuNTgyODc3ODY1MzIxMDhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfMGpQV003WXFodFhtMGxtM2ZtMVknLFxyXG4gICAgICAgICAgICBuYW1lOiAnRU1DIENvcnBvcmF0aW9uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDk3NixcclxuICAgICAgICAgICAgeDogLTE4OS43MDE1NjI3NDgzODk3MyxcclxuICAgICAgICAgICAgeTogLTExMC4wMTU1OTg5MDQzNzYyOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19XaDJjbk9JektsaHpqdXFWbU9xWScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdFbmVjdG8gQUInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxyXG4gICAgICAgICAgICB4OiAyNDMuNjc2NTQxMjI0NjI1OCxcclxuICAgICAgICAgICAgeTogLTEzMS4yMDkwMzExODY2MDk5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX1h1NmdYU3NsdERCWlRBaE1GQldEJyxcclxuICAgICAgICAgICAgbmFtZTogJ0V0aGljb24gRW5kby1TdXJnZXIsIEluYy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxyXG4gICAgICAgICAgICB4OiAyMjQuNzEyNDM1ODAzMTY0NzcsXHJcbiAgICAgICAgICAgIHk6IDM5LjYwOTg0MjUyNTQ3ODY1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyxcclxuICAgICAgICAgICAgbmFtZTogJ0V0aGljb24gRW5kby1TdXJnZXJ5LCBJbmMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjE5NCxcclxuICAgICAgICAgICAgeDogMTcxLjA3NDM3MDIyNDc2NjQsXHJcbiAgICAgICAgICAgIHk6IC01NS4wMzY4MDcwOTg5NDYwOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ192UzZyY0t5YzJxTjNyRmRYMFAySycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdIZXdsZXR0LVBhY2thcmQgRGV2ZWxvcG1lbnQgQ29tcGFueSwgTC5QLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDM1MTE4LFxyXG4gICAgICAgICAgICB4OiAtOTAuMzEwMzk2ODUyNjY5NCxcclxuICAgICAgICAgICAgeTogLTUwLjA1MjE2Mjg5Mjk0NTRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdwZXJfdFgyZTJ5VkxneU5nb2JFcHpXS1QnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSGlkZW8gT2hubycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQsXHJcbiAgICAgICAgICAgIHg6IC0zOS41MzYxMjg0MjcwNDQzNixcclxuICAgICAgICAgICAgeTogLTIwLjI3MDI3MzM1NDk3NzI1MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19NS3ZibkNjeVB1ZFhleFV2c1N3RicsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiSG9sZGVuJ3MgRm91bmRhdGlvbiBTZWVkcywgSW5jLlwiLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4MyxcclxuICAgICAgICAgICAgeDogMjQwLjA5OTkwNTk4NTE5MDgsXHJcbiAgICAgICAgICAgIHk6IC0yMDYuMDI2Mzc2MTQ4MDYxMjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfZkEwYXpxb0JHRXpvUG95ODVKeXYnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSU5UVUlUSVZFIFNVUkdJQ0FMIE9QRVJBVElPTlMsIElOQy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMjAyLFxyXG4gICAgICAgICAgICB4OiAxNS4zNzg4NjI4NjU0NDc2MjQsXHJcbiAgICAgICAgICAgIHk6IDI5MC4yMTc4MjIyODc1MjIzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX0R0dFpNdmt5dlczZlY2b0NVTVRGJyxcclxuICAgICAgICAgICAgbmFtZTogJ0phcGFuIFNjaWVuY2UgYW5kIFRlY2hub2xvZ3kgQWdlbmN5JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTE1NyxcclxuICAgICAgICAgICAgeDogMTMuMTczNDUwNzMxMDYxMDg2LFxyXG4gICAgICAgICAgICB5OiA1Ni40ODYxNDA5OTU3Nzc2N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19jNXZ5QnpLN2lpa2tVNERqUUZIVCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKYXBhbiBTY2llbmNlIGFuZCBUZWNobm9sb2d5IENvcnBvcmF0aW9uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDE4LFxyXG4gICAgICAgICAgICB4OiA2My41NjMxNzA1ODI3NSxcclxuICAgICAgICAgICAgeTogNi4yNzM2NzM1MTkwOTA3NTNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfRnZndkdGZThKWjBpWWxaODB3ZUYnLFxyXG4gICAgICAgICAgICBuYW1lOiAnS29uaW5rbGlqa2UgUGhpbGlwcyBFbGVjdHJvbmljcyBOLlYuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTcxMzgsXHJcbiAgICAgICAgICAgIHg6IC0xMjMuMjQxNzkxMjM3OTAxOTEsXHJcbiAgICAgICAgICAgIHk6IDI3MC45OTc0NjU0ODQ0MTAxNlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19YY3FDanRUOHBpOE1rM1VqUWxEdCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdMRyBFbGVjdHJvbmljcyBJbmMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzI3MjUsXHJcbiAgICAgICAgICAgIHg6IC0yNzcuMzQ2MDIyOTk4NDU1OCxcclxuICAgICAgICAgICAgeTogNy4xMzM2OTgyMjI1NDMwMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ3Blcl9ESWpVVE03bEhoRHNBejJ1OGppTycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNYXNhc2hpIEthd2FzYWtpJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcclxuICAgICAgICAgICAgeDogMTkuODk1NDM2NTk2NjYyOTA4LFxyXG4gICAgICAgICAgICB5OiAtMTAuNzE3MTc4MjUwOTAwOTE4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX0dWTWxMVmJ3Q0RTaXFQOU9nOFRuJyxcclxuICAgICAgICAgICAgbmFtZTogJ01lZHRyb25pYyBNaW5pTWVkLCBJbmMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogODAwLFxyXG4gICAgICAgICAgICB4OiAtMTgzLjc0MDIzNDE5MDU3NDE3LFxyXG4gICAgICAgICAgICB5OiAzNy42ODcyMTg3Njk4MzkwODVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfUXc4RXNyTjBNNTJuVlFVTTZ2c1YnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTW9uc2FudG8gVGVjaG5vbG9neSBMTEMnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4Njg5LFxyXG4gICAgICAgICAgICB4OiAxOS43NjM5MDE0ODgzNTI2NzMsXHJcbiAgICAgICAgICAgIHk6IDE5Ni42MjIzNjg2MjU4OTc3NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19qNVU1SUVhMUZJYmd0cjdpTnNRTScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNdXJhdGEgTWFudWZhY3R1cmluZyBDby4sIEx0ZC4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3MzQyLFxyXG4gICAgICAgICAgICB4OiA4Ny42NDg3ODE5NzEwODgxNyxcclxuICAgICAgICAgICAgeTogMjkxLjEwMjMxOTU4NzIzNTJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfMXA0RldFb0l0anlLYndUcENKb2wnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTmV0d29yayBBcHBsaWFuY2UsIEluYy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1MzAsXHJcbiAgICAgICAgICAgIHg6IC0yMjIuMjkyMDM3MjExODA1MixcclxuICAgICAgICAgICAgeTogMTQ5LjA4MzcyMTU1MjcyMDYyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX0FUT1dIZDRHR2FvaDE0enV0WHE3JyxcclxuICAgICAgICAgICAgbmFtZTogJ1Bvd2VyIE1lZGljYWwgSW50ZXJ2ZW50aW9ucywgSW5jLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMwLFxyXG4gICAgICAgICAgICB4OiAxMDguODgxMTAzOTk3NDk3MDYsXHJcbiAgICAgICAgICAgIHk6IDE4Ni44NTMzODc4MjYyNjU5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX2s4VjdjNWdubUM3U1ZtdXA1VnU3JyxcclxuICAgICAgICAgICAgbmFtZTogJ1JhaW5kYW5jZSBDb21tdW5pY2F0aW9ucywgSW5jLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXHJcbiAgICAgICAgICAgIHg6IDY1LjE1NzE3Njk0MjY0NDE3LFxyXG4gICAgICAgICAgICB5OiA4My40MTk0MzYzNzgyMDQwMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ18yNDJoSmVnd2ZRQ2VQOWhzZndwVycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSaWdodCBOb3cgVGVjaG5vbG9naWVzLCBJbmMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMixcclxuICAgICAgICAgICAgeDogMTg2LjgxOTY1MjgxNjAyMjY4LFxyXG4gICAgICAgICAgICB5OiAtMTgzLjQwMTcwMjUxNDU4NTNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfNnI5dDdaQTZZVDAzMU9kNGtNUGcnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUmlnaHRub3cgVGVjaG5vbG9naWVzLCBJbmMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTAsXHJcbiAgICAgICAgICAgIHg6IC0yMzEuNzM2MTU4ODAxMjIyMzYsXHJcbiAgICAgICAgICAgIHk6IC03NC4wOTkxNjk3MDkzNDI1MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ18ySUY5N3pWeW1TdXJhU25VQVhtcScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTYW55byBFbGVjdHJpYyBDby4sIEx0ZC4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4MzgzLFxyXG4gICAgICAgICAgICB4OiAtMjgzLjkwMjgyNTM2MDg5NDYsXHJcbiAgICAgICAgICAgIHk6IC0xMjcuODcyNTMzODE5NjkxNzFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfcGxaYkx4aXlzRVNiYUk5cE9leW0nLFxyXG4gICAgICAgICAgICBuYW1lOiAnU0VNSUNPTkRVQ1RPUiBFTkVSR1kgTEFCT1JBVE9SWSBDTy4sIExURC4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMzg4NSxcclxuICAgICAgICAgICAgeDogMjU2LjIyODM5ODc2Mzc5MDUsXHJcbiAgICAgICAgICAgIHk6IDEyNC40NjE0MTY5NjA2NjUyMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19DTVdjb0NKV1BPZmlzTFdyS3Z5ZCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTaGFycCBLYWJ1c2hpa2kgS2Fpc2hhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjI1NDAsXHJcbiAgICAgICAgICAgIHg6IDQuMDk1NTYwNDA2NDgyNjcxLFxyXG4gICAgICAgICAgICB5OiAtMzIuMTM2MTg0ODI1Nzk5MzhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU2llYmVsIFN5c3RlbXMsIEluYy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyOTgsXHJcbiAgICAgICAgICAgIHg6IC0zMy45MTk5NDc1MjMxNDg0MixcclxuICAgICAgICAgICAgeTogLTIxMi41OTk0Mjg4OTg4ODExXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX0o4Vm5BekZxRWpXZ3hxNGV2NzF6JyxcclxuICAgICAgICAgICAgbmFtZTogJ1N0YXJpb24gSW5zdHJ1bWVudHMgQ29ycG9yYXRpb24nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMCxcclxuICAgICAgICAgICAgeDogMTc4Ljk4NDE2NjU0MTE2MzQ2LFxyXG4gICAgICAgICAgICB5OiAxNjkuNTQ4MjEyMTExOTAyNzZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfbTJ0TlBKa0EyZzFBV09jN3V6UzEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVGhlcmFTZW5zZSwgSW5jLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUzLFxyXG4gICAgICAgICAgICB4OiAtMTI1LjkxNDU5OTg0NjA4NTEsXHJcbiAgICAgICAgICAgIHk6IDEzMi40MTczOTA1NDUxNjExN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19KanJNNlVtZU9ZMFE1TW1vTmlQOCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUT0tZTyBJTlNUSVRVVEUgT0YgVEVDSE5PTE9HWScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDM5NSxcclxuICAgICAgICAgICAgeDogMTguNjE0MTMwMDgxMTY2NDYsXHJcbiAgICAgICAgICAgIHk6IDE2NS4yMTI1MzY5OTU1NDIxNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19ld1ZzQ3V0cFJ6RDlwVDA3a0JvRScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUeWNvIEhlYWx0Y2FyZSBHcm91cCBMUCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUsXHJcbiAgICAgICAgICAgIHg6IC02Ny4yNTQzMDUyNjc0MjEwNyxcclxuICAgICAgICAgICAgeTogMzA4LjYxNDkyODIwNDE1NzlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfNXdOTnJKNHpGUTVLUThPV256UkMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVW5pdGVkIFN0YXRlcyBTdXJ0aWNhbCBDb3Jwb3JhdGlvbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXHJcbiAgICAgICAgICAgIHg6IDI4Mi43ODEwMDkyMjQ0MzEsXHJcbiAgICAgICAgICAgIHk6IC01Mi45ODE1OTAxMTUwODcxNDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfM3ZJMlo1a0MxU2FTbGJVQm9PQlQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnV2ViRXggQ29tbXVuaWNhdGlvbnMsIEluYy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMixcclxuICAgICAgICAgICAgeDogMTg3LjM2NzYzOTUxMTI4NzE0LFxyXG4gICAgICAgICAgICB5OiAxMDEuMjA4NDk4NDcwODAxODFcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgbGlua3M6IFtcclxuICAgICAgICB7IHNvdXJjZTogJzY1MTYyMjcnLCB0YXJnZXQ6ICc1MzU4NTE0LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTE2MjI3JywgdGFyZ2V0OiAnNTc1NTczNy0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjUxNjIyNycsIHRhcmdldDogJzU5NDgwMDYtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1MTYyMjcnLCB0YXJnZXQ6ICc2NTE2MjI3LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTE2MjI3JywgdGFyZ2V0OiAnb3JnX2J3cTgzamJjY0txRjRqSnJQY2FSJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjUzNTkwOScsIHRhcmdldDogJzY1MzU5MDktMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1MzU5MDknLCB0YXJnZXQ6ICdvcmdfMTA3V0tOUGJ2RERLclpCbG13OFUnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTQ5OTA4JywgdGFyZ2V0OiAnNjM5MzYwNS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU0OTkwOCcsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTM1NjMnLCB0YXJnZXQ6ICc1NzE1NDUwLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTUzNTYzJywgdGFyZ2V0OiAnNTcxNTQ1MC0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1MzU2MycsIHRhcmdldDogJzY1NTM1NjMtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTM1NjMnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTU4MzIwJywgdGFyZ2V0OiAnNDgwOTY5Ny0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1ODMyMCcsIHRhcmdldDogJzQ4NjM0MjUtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTgzMjAnLCB0YXJnZXQ6ICc1MDk3MTIyLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTU4MzIwJywgdGFyZ2V0OiAnb3JnX0dWTWxMVmJ3Q0RTaXFQOU9nOFRuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1ODM1MScsIHRhcmdldDogJzUwOTcxMjItMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTgzNTEnLCB0YXJnZXQ6ICc1MjM3MTc4LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTU4MzUxJywgdGFyZ2V0OiAnNTI1Nzk3MS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1ODM1MScsIHRhcmdldDogJzY0MjQ4NDctMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTgzNTEnLCB0YXJnZXQ6ICc2NTU4MzUxLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTU4MzUxJywgdGFyZ2V0OiAnNjU1ODM1MS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1ODM1MScsIHRhcmdldDogJzY1NTgzNTEtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTgzNTEnLCB0YXJnZXQ6ICc2NTU4MzUxLTgnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTU4MzUxJywgdGFyZ2V0OiAnb3JnX0dWTWxMVmJ3Q0RTaXFQOU9nOFRuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2MDQ2MScsIHRhcmdldDogJzU5MTgxNTktMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjA0NjEnLCB0YXJnZXQ6ICc1OTE4MTU5LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTYzMTc0JywgdGFyZ2V0OiAnNDI1MzA2MS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2MzE3NCcsIHRhcmdldDogJzQ5MDI2NzEtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjMxNzQnLCB0YXJnZXQ6ICc0OTk3MjYyLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTYzMTc0JywgdGFyZ2V0OiAnNTkyNTIyNC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2MzE3NCcsIHRhcmdldDogJ29yZ19DTVdjb0NKV1BPZmlzTFdyS3Z5ZCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjMxNzQnLCB0YXJnZXQ6ICdwZXJfRElqVVRNN2xIaERzQXoydThqaU8nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTYzMTc0JywgdGFyZ2V0OiAncGVyX3RYMmUyeVZMZ3lOZ29iRXB6V0tUJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2NTUwOScsIHRhcmdldDogJzQwODI2MDItMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjU1MDknLCB0YXJnZXQ6ICc1MDQxMDg2LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTY1NTA5JywgdGFyZ2V0OiAnNTMwNjYyMy0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2NTUwOScsIHRhcmdldDogJzU1MzMyMzgtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjU1MDknLCB0YXJnZXQ6ICc1NTM0MTMyLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTY1NTA5JywgdGFyZ2V0OiAnNTYxNjUzMi0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2NTUwOScsIHRhcmdldDogJzU3MjI5OTctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjU1MDknLCB0YXJnZXQ6ICc1OTAxODk2LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTY1NTA5JywgdGFyZ2V0OiAnNjEwMzAzMy03JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2NTUwOScsIHRhcmdldDogJzYxNzU3NTItOScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjU1MDknLCB0YXJnZXQ6ICdvcmdfbTJ0TlBKa0EyZzFBV09jN3V6UzEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTcxMjgyJywgdGFyZ2V0OiAnNjA4MTUxOC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU3MTI4MicsIHRhcmdldDogJ29yZ180ek8yQmMwOHg1NlhqRHE1VGVCcCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NzQ2MzUnLCB0YXJnZXQ6ICc1NzE1NDUwLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTc0NjM1JywgdGFyZ2V0OiAnNTcxNTQ1MC0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU3NDYzNScsIHRhcmdldDogJzU5NjM5NTMtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NzQ2MzUnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTc3NzI2JywgdGFyZ2V0OiAnNjU3NzcyNi0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU3NzcyNicsIHRhcmdldDogJzY1Nzc3MjYtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1Nzc3MjYnLCB0YXJnZXQ6ICc2NTc3NzI2LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTc3NzI2JywgdGFyZ2V0OiAnNjU3NzcyNi00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU3NzcyNicsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1ODc4MzUnLCB0YXJnZXQ6ICc2NDMzOTIxLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTg3ODM1JywgdGFyZ2V0OiAnNjUyNjMzNS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYwMTA4NycsIHRhcmdldDogJzUyNjEwMzctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MDEwODcnLCB0YXJnZXQ6ICc2NjAxMDg3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjAxMDg3JywgdGFyZ2V0OiAnb3JnXzN2STJaNWtDMVNhU2xiVUJvT0JUJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYwMjI1MicsIHRhcmdldDogJzQ4OTA2MTEtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MDIyNTInLCB0YXJnZXQ6ICdvcmdfSjhWbkF6RnFFaldneHE0ZXY3MXonIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjA0MTE3JywgdGFyZ2V0OiAnNTg3MzA5Ni0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYwNDExNycsIHRhcmdldDogJzU4NzMwOTYtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MDQxMTcnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjA0MTI4JywgdGFyZ2V0OiAnNjMyNDU2OC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYwNDEyOCcsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MDY3NDQnLCB0YXJnZXQ6ICc2NjA2NzQ0LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjA2NzQ0JywgdGFyZ2V0OiAnb3JnXzR6TzJCYzA4eDU2WGpEcTVUZUJwJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYwOTE1MCcsIHRhcmdldDogJzU5NjM5NTMtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MDkxNTAnLCB0YXJnZXQ6ICc2MzM2MTM3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjA5MTUwJywgdGFyZ2V0OiAnNjMzNjEzNy0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYwOTE1MCcsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MjE4MzQnLCB0YXJnZXQ6ICc1OTQ0NzkxLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjIxODM0JywgdGFyZ2V0OiAnNjYyMTgzNC0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYyMTgzNCcsIHRhcmdldDogJ29yZ19rOFY3YzVnbm1DN1NWbXVwNVZ1NycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NDE1MzMnLCB0YXJnZXQ6ICc0ODA5Njk3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjQxNTMzJywgdGFyZ2V0OiAnNDg2MzQyNS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY0MTUzMycsIHRhcmdldDogJzUwOTcxMjItMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NDE1MzMnLCB0YXJnZXQ6ICdvcmdfR1ZNbExWYndDRFNpcVA5T2c4VG4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjQ0NTMyJywgdGFyZ2V0OiAnNDEyNzIyNy0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY0NDUzMicsIHRhcmdldDogJzQyODMwMjQtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NDQ1MzInLCB0YXJnZXQ6ICc1MTc2NTAyLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjQ0NTMyJywgdGFyZ2V0OiAnRDI2Mzk4Ny0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY0NDUzMicsIHRhcmdldDogJ0QzMDQyMzQtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NDQ1MzInLCB0YXJnZXQ6ICdSRTI4OTMyLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjQ0NTMyJywgdGFyZ2V0OiAnb3JnXzV3Tk5ySjR6RlE1S1E4T1duelJDJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY1NDAzMicsIHRhcmdldDogJzUyNjEwMzctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NTQwMzInLCB0YXJnZXQ6ICc1ODU1OTU3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjU0MDMyJywgdGFyZ2V0OiAnNjYwMTA4Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY1NDAzMicsIHRhcmdldDogJzY2NTQwMzItNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NTQwMzInLCB0YXJnZXQ6ICdvcmdfM3ZJMlo1a0MxU2FTbGJVQm9PQlQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjU2MTkzJywgdGFyZ2V0OiAnNDg5MjI0NC00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY1NjE5MycsIHRhcmdldDogJzUyNzE1NDMtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NTYxOTMnLCB0YXJnZXQ6ICc1MzI5NjU1LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjU2MTkzJywgdGFyZ2V0OiAnNTQwOTQ5OC00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY1NjE5MycsIHRhcmdldDogJzU3MDczNjktMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NTYxOTMnLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjY1NjQ4JywgdGFyZ2V0OiAnNjY2NTY0OC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY2NTY0OCcsIHRhcmdldDogJzY2NjU2NDgtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NjU2NDgnLCB0YXJnZXQ6ICc2NjY1NjQ4LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjY1NjQ4JywgdGFyZ2V0OiAnNjY2NTY0OC00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY2NTY0OCcsIHRhcmdldDogJzY2NjU2NDgtNScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NjU2NDgnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjY1NjU1JywgdGFyZ2V0OiAnNjQzNDU1MC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY2NTY1NScsIHRhcmdldDogJzY2NjU2NTUtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NjU2NTUnLCB0YXJnZXQ6ICdvcmdfNnI5dDdaQTZZVDAzMU9kNGtNUGcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2Njg0NDM4JywgdGFyZ2V0OiAnNTg3MzA5Ni0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY4NDQzOCcsIHRhcmdldDogJzYwOTIwODMtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2ODQ0MzgnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjkwMzg3JywgdGFyZ2V0OiAnNjI4MTg5OC0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY5MDM4NycsIHRhcmdldDogJzY2OTAzODctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2OTAzODcnLCB0YXJnZXQ6ICdvcmdfRnZndkdGZThKWjBpWWxaODB3ZUYnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjkzMjMyJywgdGFyZ2V0OiAnNTQxNjI1NS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY5MzIzMicsIHRhcmdldDogJ29yZ19NS3ZibkNjeVB1ZFhleFV2c1N3RicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2OTg2NDMnLCB0YXJnZXQ6ICc2MjY0MDg3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2Njk4NjQzJywgdGFyZ2V0OiAnb3JnX0FUT1dIZDRHR2FvaDE0enV0WHE3JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcxMTU2NScsIHRhcmdldDogJzY3MTE1NjUtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MTE1NjUnLCB0YXJnZXQ6ICc2NzExNTY1LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzExNTY1JywgdGFyZ2V0OiAnNjcxMTU2NS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcxMTU2NScsIHRhcmdldDogJzY3MTE1NjUtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MTE1NjUnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzE2MjMzJywgdGFyZ2V0OiAnNjI2NDA4Ny0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcxNjIzMycsIHRhcmdldDogJ29yZ19BVE9XSGQ0R0dhb2gxNHp1dFhxNycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MTgzNjEnLCB0YXJnZXQ6ICc2MjIzMjA1LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzE4MzYxJywgdGFyZ2V0OiAnNjM3MDU4NC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcxODM2MScsIHRhcmdldDogJzY3MTgzNjEtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MTgzNjEnLCB0YXJnZXQ6ICc2NzE4MzYxLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzE4MzYxJywgdGFyZ2V0OiAnNjcxODM2MS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcxODM2MScsIHRhcmdldDogJzY3MTgzNjEtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MTgzNjEnLCB0YXJnZXQ6ICc2NzE4MzYxLTUnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzE4MzYxJywgdGFyZ2V0OiAnNjcxODM2MS04JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcxODM2MScsIHRhcmdldDogJ29yZ18xcDRGV0VvSXRqeUtid1RwQ0pvbCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MjQzOTknLCB0YXJnZXQ6ICc2NzI0Mzk5LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzI0Mzk5JywgdGFyZ2V0OiAnNjcyNDM5OS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcyNDM5OScsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3Mjc1MjInLCB0YXJnZXQ6ICc0MjUzMDYxLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzI3NTIyJywgdGFyZ2V0OiAnNDkwMjY3MS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcyNzUyMicsIHRhcmdldDogJ29yZ19jNXZ5QnpLN2lpa2tVNERqUUZIVCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3Mjg3MDInLCB0YXJnZXQ6ICc2NTc3NzI2LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzI4NzAyJywgdGFyZ2V0OiAnNjcxMTU2NS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcyODcwMicsIHRhcmdldDogJzY3MTE1NjUtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3Mjg3MDInLCB0YXJnZXQ6ICc2NzExNTY1LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzI4NzAyJywgdGFyZ2V0OiAnNjcxMTU2NS00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcyODcwMicsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3Mjg5NjAnLCB0YXJnZXQ6ICc2MzkzNjA1LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzI4OTYwJywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjczMjA5NScsIHRhcmdldDogJzUyNDM2MjItMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MzIwOTUnLCB0YXJnZXQ6ICc2NzMyMDk1LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMDk1JywgdGFyZ2V0OiAnNjczMjA5NS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjczMjA5NScsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MzIxMDAnLCB0YXJnZXQ6ICc1NzE1NDUwLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMTAwJywgdGFyZ2V0OiAnNjU3NzcyNi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjczMjEwMCcsIHRhcmdldDogJzY1Nzc3MjYtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MzIxMDAnLCB0YXJnZXQ6ICc2NjY1NjQ4LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMTAwJywgdGFyZ2V0OiAnNjczMjEwMC00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjczMjEwMCcsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MzIxMTEnLCB0YXJnZXQ6ICc0OTUxMjc4LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMTExJywgdGFyZ2V0OiAnNjA5MjA4My0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjczMjExMScsIHRhcmdldDogJzYwOTIwODMtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MzIxMTEnLCB0YXJnZXQ6ICc2NzMyMTExLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMTExJywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc1NDY4MScsIHRhcmdldDogJzU4NzMwOTYtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3NTQ2ODEnLCB0YXJnZXQ6ICc2MDkyMDgzLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzU0NjgxJywgdGFyZ2V0OiAnNjA5MjA4My0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc1NDY4MScsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3NjMzNTEnLCB0YXJnZXQ6ICc2NzExNTY1LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzYzMzUxJywgdGFyZ2V0OiAnNjcxMTU2NS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc2MzM1MScsIHRhcmdldDogJzY3MTE1NjUtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3NjMzNTEnLCB0YXJnZXQ6ICc2NzExNTY1LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzYzMzUxJywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc2MzUwMScsIHRhcmdldDogJzUyNjEwMzctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3NjM1MDEnLCB0YXJnZXQ6ICc1ODU1OTU3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzYzNTAxJywgdGFyZ2V0OiAnNjYwMTA4Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc2MzUwMScsIHRhcmdldDogJzY2NTQwMzItNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3NjM1MDEnLCB0YXJnZXQ6ICdvcmdfM3ZJMlo1a0MxU2FTbGJVQm9PQlQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzY4OTA0JywgdGFyZ2V0OiAnNjE4MzU4OS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc2ODkwNCcsIHRhcmdldDogJ29yZ19YY3FDanRUOHBpOE1rM1VqUWxEdCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3ODIzODMnLCB0YXJnZXQ6ICc2NzExNTY1LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzgyMzgzJywgdGFyZ2V0OiAnNjcxMTU2NS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc4MjM4MycsIHRhcmdldDogJzY3MTE1NjUtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3ODIzODMnLCB0YXJnZXQ6ICc2NzExNTY1LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzgyMzgzJywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc4MzUyNCcsIHRhcmdldDogJzU4NTk5MTYtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3ODM1MjQnLCB0YXJnZXQ6ICc2NzgzNTI0LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzgzNTI0JywgdGFyZ2V0OiAnb3JnX2ZBMGF6cW9CR0V6b1BveTg1Snl2JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc4NjM4MicsIHRhcmdldDogJzY1MzA5MzItMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3ODYzODInLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA0MzMwJywgdGFyZ2V0OiAnNTcxNTQ1MC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgwNDMzMCcsIHRhcmdldDogJzYyNjg4MDMtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MDQzMzAnLCB0YXJnZXQ6ICc2ODA0MzMwLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA0MzMwJywgdGFyZ2V0OiAnNjgwNDMzMC00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgwNDMzMCcsIHRhcmdldDogJzY4MDQzMzAtNScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MDQzMzAnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA5NjUzJywgdGFyZ2V0OiAnNDA4MjA5Ny0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgwOTY1MycsIHRhcmdldDogJzQ1NjE0NDQtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MDk2NTMnLCB0YXJnZXQ6ICc0ODA5Njk3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA5NjUzJywgdGFyZ2V0OiAnNDg2MzQyNS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgwOTY1MycsIHRhcmdldDogJzUwOTcxMjItMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MDk2NTMnLCB0YXJnZXQ6ICc1MjM3MTc4LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA5NjUzJywgdGFyZ2V0OiAnNTM4MjIzMi0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgwOTY1MycsIHRhcmdldDogJzY4MDk2NTMtOScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MDk2NTMnLCB0YXJnZXQ6ICdENDIzNzYxLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA5NjUzJywgdGFyZ2V0OiAnb3JnX0dWTWxMVmJ3Q0RTaXFQOU9nOFRuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyNjU2NScsIHRhcmdldDogJzYyOTU1MzAtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MjY1NjUnLCB0YXJnZXQ6ICc2Mjk1NTMwLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI2NTY1JywgdGFyZ2V0OiAnb3JnX1o1OWFVQkd0WjlQNVF6ZEZpS21aJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyNjU4MicsIHRhcmdldDogJzQzNjIzODctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MjY1ODInLCB0YXJnZXQ6ICc2MDgxODc1LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI2NTgyJywgdGFyZ2V0OiAnNjgyNjU4Mi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyNjU4MicsIHRhcmdldDogJ29yZ18walBXTTdZcWh0WG0wbG0zZm0xWScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MjY3NDUnLCB0YXJnZXQ6ICc2MjMzNjE3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI2NzQ1JywgdGFyZ2V0OiAnNjU3NzcyNi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyNjc0NScsIHRhcmdldDogJzY4MjY3NDUtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MjY3NDUnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI5NjU1JywgdGFyZ2V0OiAnNTk3ODgyOS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyOTY1NScsIHRhcmdldDogJzYwMDQyNzYtMTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI5NjU1JywgdGFyZ2V0OiAnNjgyOTY1NS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyOTY1NScsIHRhcmdldDogJzY4Mjk2NTUtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4Mjk2NTUnLCB0YXJnZXQ6ICc2ODI5NjU1LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI5NjU1JywgdGFyZ2V0OiAnNjgyOTY1NS02JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyOTY1NScsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MzAxNzQnLCB0YXJnZXQ6ICc0Nzk4NTk0LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODMwMTc0JywgdGFyZ2V0OiAnNTQ2NTg5NS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgzMDE3NCcsIHRhcmdldDogJ29yZ184Y3NNZ3Rnbk4wbVJFWnBOUDFKaScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NDI3NDgnLCB0YXJnZXQ6ICc2NDM0NTUwLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODQyNzQ4JywgdGFyZ2V0OiAnNjY2NTY1NS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg0Mjc0OCcsIHRhcmdldDogJ29yZ182cjl0N1pBNllUMDMxT2Q0a01QZycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NDM0MDMnLCB0YXJnZXQ6ICc2MjY0MDg3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODQzNDAzJywgdGFyZ2V0OiAnb3JnX0FUT1dIZDRHR2FvaDE0enV0WHE3JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg1MDI1MicsIHRhcmdldDogJzU3NzQzNTctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NTA4OTUnLCB0YXJnZXQ6ICc2MDkyMDgzLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODUwODk1JywgdGFyZ2V0OiAnNjA5MjA4My0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg1MDg5NScsIHRhcmdldDogJzY1Nzc3MjYtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NTA4OTUnLCB0YXJnZXQ6ICc2ODUwODk1LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODUwODk1JywgdGFyZ2V0OiAnNjg1MDg5NS01JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg1MDg5NScsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NTA5NDknLCB0YXJnZXQ6ICc2ODUwOTQ5LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODUwOTQ5JywgdGFyZ2V0OiAnNjg1MDk0OS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg1MDk0OScsIHRhcmdldDogJzY4NTA5NDktMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NTA5NDknLCB0YXJnZXQ6ICdvcmdfMjQyaEplZ3dmUUNlUDloc2Z3cFcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODUyOTE1JywgdGFyZ2V0OiAnNTI3NjI2Mi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg1MjkxNScsIHRhcmdldDogJ29yZ19NS3ZibkNjeVB1ZFhleFV2c1N3RicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY5MDUwNTcnLCB0YXJnZXQ6ICc1ODk3NTYzLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2OTA1MDU3JywgdGFyZ2V0OiAnNjkwNTA1Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjkwNTA1NycsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY5NTk4NTInLCB0YXJnZXQ6ICc1NjMyNDMyLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2OTU5ODUyJywgdGFyZ2V0OiAnNjkwNTA1Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjk1OTg1MicsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY5NjQzNjMnLCB0YXJnZXQ6ICc1NDA5NDk4LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2OTY0MzYzJywgdGFyZ2V0OiAnNjk2NDM2My0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjk2NDM2MycsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY5Nzg5MjEnLCB0YXJnZXQ6ICc1NjMyNDMyLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2OTc4OTIxJywgdGFyZ2V0OiAnNjkwNTA1Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjk3ODkyMScsIHRhcmdldDogJzY5Nzg5MjEtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY5Nzg5MjEnLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2OTgxNjI4JywgdGFyZ2V0OiAnNTQwOTQ5OC00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjk4MTYyOCcsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMDA4MTgnLCB0YXJnZXQ6ICc1NjMyNDMyLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDAwODE4JywgdGFyZ2V0OiAnNjkwNTA1Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAwMDgxOCcsIHRhcmdldDogJzcwMDA4MTgtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMDA4MTgnLCB0YXJnZXQ6ICdvcmdfWHU2Z1hTc2x0REJaVEFoTUZCV0QnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDI1NzQzJywgdGFyZ2V0OiAnNDA4MjA5Ny0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAyNTc0MycsIHRhcmdldDogJzQ1NjE0NDQtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMjU3NDMnLCB0YXJnZXQ6ICc0ODA5Njk3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDI1NzQzJywgdGFyZ2V0OiAnNTE3NjY0NC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAyNTc0MycsIHRhcmdldDogJzUzODIyMzItMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMjU3NDMnLCB0YXJnZXQ6ICc2NTUxMjc2LTEwJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAyNTc0MycsIHRhcmdldDogJzY1NTEyNzYtMTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDI1NzQzJywgdGFyZ2V0OiAnNjU1MTI3Ni0xMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMjU3NDMnLCB0YXJnZXQ6ICc2NTUxMjc2LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDI1NzQzJywgdGFyZ2V0OiAnNjU1MTI3Ni00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAyNTc0MycsIHRhcmdldDogJzY1NTEyNzYtOCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMjU3NDMnLCB0YXJnZXQ6ICc2NTUxMjc2LTknIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDI1NzQzJywgdGFyZ2V0OiAnb3JnX0dWTWxMVmJ3Q0RTaXFQOU9nOFRuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA0OTE5MCcsIHRhcmdldDogJzYwODA5OTgtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNDkxOTAnLCB0YXJnZXQ6ICc2OTE0MTgyLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDQ5MTkwJywgdGFyZ2V0OiAnb3JnXzJJRjk3elZ5bVN1cmFTblVBWG1xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA1NTczMScsIHRhcmdldDogJzU2MzI0MzItNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNTU3MzEnLCB0YXJnZXQ6ICc2OTA1MDU3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDU1NzMxJywgdGFyZ2V0OiAnNjk3ODkyMS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA1NTczMScsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNjEwMTQnLCB0YXJnZXQ6ICc0NDg2NzIwLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDYxMDE0JywgdGFyZ2V0OiAnNDcwMzAxOS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA2MTAxNCcsIHRhcmdldDogJzUyNzIwNjktNicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNjEwMTQnLCB0YXJnZXQ6ICc1NjIyNjUzLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDYxMDE0JywgdGFyZ2V0OiAnNzA2MTAxNC00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA2MTAxNCcsIHRhcmdldDogJzcwNjEwMTQtNicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNjEwMTQnLCB0YXJnZXQ6ICdvcmdfRHR0Wk12a3l2VzNmVjZvQ1VNVEYnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDY0MzQ2JywgdGFyZ2V0OiAnNDI1MzA2MS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA2NDM0NicsIHRhcmdldDogJzQ5MDI2NzEtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNjQzNDYnLCB0YXJnZXQ6ICdvcmdfRHR0Wk12a3l2VzNmVjZvQ1VNVEYnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MTA1ODY4JywgdGFyZ2V0OiAnNTg2MzMyNi0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzEwNTg2OCcsIHRhcmdldDogJzY4ODc3MzYtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcxMDU4NjgnLCB0YXJnZXQ6ICdvcmdfMGVUcjNYSUJqQUtwWGtDNjgyM3InIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MTExNzY5JywgdGFyZ2V0OiAnNTQwOTQ5OC00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzExMTc2OScsIHRhcmdldDogJzU4OTc1NjMtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcxMTE3NjknLCB0YXJnZXQ6ICc2NTMwOTMyLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MTExNzY5JywgdGFyZ2V0OiAnNjkwNTA1Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzExMTc2OScsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcxNDcxMzgnLCB0YXJnZXQ6ICc2OTA1MDU3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MTQ3MTM4JywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzE1OTc1MCcsIHRhcmdldDogJzQ4NzI2MDMtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcxNTk3NTAnLCB0YXJnZXQ6ICc1NzEzOTExLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MTU5NzUwJywgdGFyZ2V0OiAnNTcxMzkxMS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzE1OTc1MCcsIHRhcmdldDogJzcxNTk3NTAtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcxNTk3NTAnLCB0YXJnZXQ6ICc3MTU5NzUwLTUnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MTU5NzUwJywgdGFyZ2V0OiAnb3JnX2V3VnNDdXRwUnpEOXBUMDdrQm9FJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzIxMTgyNScsIHRhcmdldDogJzUwODE0MjItMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcyMTE4MjUnLCB0YXJnZXQ6ICc1MjgzNDUyLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MjExODI1JywgdGFyZ2V0OiAnNTcwMzM1Ny0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzIxMTgyNScsIHRhcmdldDogJzY1OTM4MzQtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcyNDY3MzQnLCB0YXJnZXQ6ICc2OTA1MDU3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MjQ2NzM0JywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzI4Mjc4MicsIHRhcmdldDogJzYxNDQ2NzktMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcyODI3ODInLCB0YXJnZXQ6ICc2MTUyOTg3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MjgyNzgyJywgdGFyZ2V0OiAnNjgzNjU0MC02JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzI4Mjc4MicsIHRhcmdldDogJ29yZ192UzZyY0t5YzJxTjNyRmRYMFAySycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcyOTc5NzcnLCB0YXJnZXQ6ICc2MTQ0Njc5LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3Mjk3OTc3JywgdGFyZ2V0OiAnNjE1Mjk4Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzI5Nzk3NycsIHRhcmdldDogJzY4MzY1NDAtNicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcyOTc5NzcnLCB0YXJnZXQ6ICdvcmdfdlM2cmNLeWMycU4zckZkWDBQMksnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzIzMzU2JywgdGFyZ2V0OiAnNDQ4NjcyMC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzMyMzM1NicsIHRhcmdldDogJzQ3MDMwMTktMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczMjMzNTYnLCB0YXJnZXQ6ICc1MjcyMDY5LTYnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzIzMzU2JywgdGFyZ2V0OiAnNTYyMjY1My0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzMyMzM1NicsIHRhcmdldDogJzcwNjEwMTQtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczMjMzNTYnLCB0YXJnZXQ6ICc3MzIzMzU2LTUnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzIzMzU2JywgdGFyZ2V0OiAnb3JnX0R0dFpNdmt5dlczZlY2b0NVTVRGJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzM0MDQxMScsIHRhcmdldDogJzczNDA0MTEtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczODA2OTUnLCB0YXJnZXQ6ICc1NDA5NDk4LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzgwNjk1JywgdGFyZ2V0OiAnNTYzMjQzMi00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzM4MDY5NScsIHRhcmdldDogJzY5MDUwNTctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczODA2OTUnLCB0YXJnZXQ6ICc3MDgzMDc1LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzgwNjk1JywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzM4MDY5NicsIHRhcmdldDogJzU2MzI0MzItNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczODA2OTYnLCB0YXJnZXQ6ICc2OTA1MDU3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzgwNjk2JywgdGFyZ2V0OiAnNzA4MzA3NS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzM4MDY5NicsIHRhcmdldDogJzczODA2OTYtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczODA2OTYnLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3Mzg1MjI0JywgdGFyZ2V0OiAnNTA0MTIwMC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzM4NTIyNCcsIHRhcmdldDogJzUwNDEyMDAtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczODUyMjQnLCB0YXJnZXQ6ICc3Mzg1MjI0LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3Mzg1MjI0JywgdGFyZ2V0OiAnNzM4NTIyNC0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzM4NTIyNCcsIHRhcmdldDogJ29yZ19JbWVnOVc2UDFURTZJMlF1dFM0eScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0MDI1MDYnLCB0YXJnZXQ6ICc1NTEyNDI2LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDAyNTA2JywgdGFyZ2V0OiAnNjA0ODExMC0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQwMjUwNicsIHRhcmdldDogJzc0MDI1MDYtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0MDI1MDYnLCB0YXJnZXQ6ICdvcmdfcHBFbGtFdFF2RnRHNkE0NzU0VUknIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDA0NTA4JywgdGFyZ2V0OiAnNDY4MjU5Ni0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQwNDUwOCcsIHRhcmdldDogJzUxMTc4MzgtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0MDQ1MDgnLCB0YXJnZXQ6ICc1NzE1Njc1LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDA0NTA4JywgdGFyZ2V0OiAnNjkxMjgzOS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQwNDUwOCcsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0MTEyMDknLCB0YXJnZXQ6ICc1MzQ1NjM5LTYnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDExMjA5JywgdGFyZ2V0OiAnNTQxNzc3MC04JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQxMTIwOScsIHRhcmdldDogJzcwODI4MzItNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0MTEyMDknLCB0YXJnZXQ6ICdvcmdfRWhZRlBJSkVtWVFZUm9ZdnNucHknIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDUzMDY1JywgdGFyZ2V0OiAnNDA3MjIzNi0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ1MzA2NScsIHRhcmdldDogJzQzNTY0NTUtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NTMwNjUnLCB0YXJnZXQ6ICc0NzAzMDE5LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDUzMDY1JywgdGFyZ2V0OiAnNzA2MTAxNC02JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ1MzA2NScsIHRhcmdldDogJ29yZ19FaFlGUElKRW1ZUVlSb1l2c25weScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NTMwNjUnLCB0YXJnZXQ6ICdvcmdfSmpyTTZVbWVPWTBRNU1tb05pUDgnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDUzMDg3JywgdGFyZ2V0OiAnNTM0NTYzOS02JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ1MzA4NycsIHRhcmdldDogJ29yZ19FaFlGUElKRW1ZUVlSb1l2c25weScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NjI4NjInLCB0YXJnZXQ6ICc2MTQ0Njc5LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDYyODYyJywgdGFyZ2V0OiAnNjgzNjU0MC02JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ2Mjg2MicsIHRhcmdldDogJ29yZ192UzZyY0t5YzJxTjNyRmRYMFAySycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NjQ4NDYnLCB0YXJnZXQ6ICc0NDAzNjg3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDY0ODQ2JywgdGFyZ2V0OiAnNTg5NzU2My00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ2NDg0NicsIHRhcmdldDogJzY5MDUwNTctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NjQ4NDYnLCB0YXJnZXQ6ICc3MDgzMDc1LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDY0ODQ2JywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ2ODMwNCcsIHRhcmdldDogJzY4NjMzNjMtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NjgzMDQnLCB0YXJnZXQ6ICc3NDY4MzA0LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDY4MzA0JywgdGFyZ2V0OiAnb3JnX0VoWUZQSUpFbVlRWVJvWXZzbnB5JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzUwMTI5MycsIHRhcmdldDogJzQyMjQ3MjUtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc1MDEyOTMnLCB0YXJnZXQ6ICc0NTczNDcyLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NTAxMjkzJywgdGFyZ2V0OiAnb3JnX2o1VTVJRWExRkliZ3RyN2lOc1FNJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzUwNjc5MScsIHRhcmdldDogJzQ0MDM2ODctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc1MDY3OTEnLCB0YXJnZXQ6ICc0OTcyMjI0LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NTA2NzkxJywgdGFyZ2V0OiAnNjkwNTA1Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzUwNjc5MScsIHRhcmdldDogJ1JFMzk4NDEtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc1MDY3OTEnLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NjIwNjU1JywgdGFyZ2V0OiAnNTk0ODc4OS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzYyMDY1NScsIHRhcmdldDogJzc2MjA2NTUtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc2MjA2NTUnLCB0YXJnZXQ6ICdvcmdfV2gyY25PSXpLbGh6anVxVm1PcVknIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NjMyOTg1JywgdGFyZ2V0OiAnNzA3ODUwMy0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzYzMjk4NScsIHRhcmdldDogJzc2MDg3NjEtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc2MzI5ODUnLCB0YXJnZXQ6ICc3NjMyOTg1LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NjMyOTg1JywgdGFyZ2V0OiAnNzYzMjk4NS00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzYzMjk4NScsIHRhcmdldDogJ29yZ19RdzhFc3JOME01Mm5WUVVNNnZzVicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc2NjM2MDcnLCB0YXJnZXQ6ICc1NTk0MTY5LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NjYzNjA3JywgdGFyZ2V0OiAnNjY1ODU3Ny0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzY2MzYwNycsIHRhcmdldDogJzcxNTQ0NzctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc2NjM2MDcnLCB0YXJnZXQ6ICdvcmdfSURVYlMwOVpSMEpoSjhqRkVwdFQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3Njc0NjUwJywgdGFyZ2V0OiAnNjYzOTI0Ni0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzY3NDY1MCcsIHRhcmdldDogJzY4MzgzOTctMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc2NzQ2NTAnLCB0YXJnZXQ6ICc3MjA1NzE2LTUnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3Njc0NjUwJywgdGFyZ2V0OiAnb3JnX3BsWmJMeGl5c0VTYmFJOXBPZXltJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzczMjgxOScsIHRhcmdldDogJzY2MzkyNDYtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc3MzI4MTknLCB0YXJnZXQ6ICc2ODM4Mzk3LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NzMyODE5JywgdGFyZ2V0OiAnNzIwNTcxNi01JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzczMjgxOScsIHRhcmdldDogJ29yZ19wbFpiTHhpeXNFU2JhSTlwT2V5bScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzgwNTMxODQnLCB0YXJnZXQ6ICc3MDc4NTAzLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc4MDUzMTg0JywgdGFyZ2V0OiAnNzYwODc2MS00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnODA1MzE4NCcsIHRhcmdldDogJzc2MzI5ODUtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzgwNTMxODQnLCB0YXJnZXQ6ICc3NjMyOTg1LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc4MDUzMTg0JywgdGFyZ2V0OiAnb3JnX1F3OEVzck4wTTUyblZRVU02dnNWJyB9XHJcbiAgICBdXHJcbn1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgSmlhY2hlbmcgUGFuIDxqYWNraWVhbnhpc0BnbWFpbC5jb20+XHJcbiAqIEBkZXNjcmlwdGlvbiBQcm92aWRlIHRoZSBlbnRyYW5jZSBvZiBOZXRWLmpzLlxyXG4gKiBAZGVwZW5kZW5jZXMgaW50ZXJmYWNlcy50cywgdXRpbHMvbWFwMi5qcywgbm9kZS50cywgbGluay50c1xyXG4gKi9cclxuXHJcbmltcG9ydCAqIGFzIGludGVyZmFjZXMgZnJvbSAnLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgTWFwMiBmcm9tICcuL3V0aWxzL21hcDInXHJcbmltcG9ydCBOb2RlIGZyb20gJy4vbm9kZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnLi9saW5rJ1xyXG5pbXBvcnQgKiBhcyBkZWZhdWx0Q29uZmlncyBmcm9tICcuL2NvbmZpZ3MnXHJcbmltcG9ydCAqIGFzIGRhdGFzZXQgZnJvbSAnLi9kYXRhc2V0J1xyXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4vcmVuZGVyZXInXHJcbmltcG9ydCB7IEludGVyYWN0aW9uTWFuYWdlciB9IGZyb20gJy4vaW50ZXJhY3Rpb24vaW50ZXJhY3Rpb24nXHJcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJy4vdXRpbHMvdXRpbHMnXHJcbmltcG9ydCAqIGFzIExheW91dHMgZnJvbSAnLi9sYXlvdXQvaW5kZXgnXHJcbmltcG9ydCB7IExhYmVsTWFuYWdlciB9IGZyb20gJy4vbGFiZWwvbGFiZWwnXHJcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi9pbnRlcmZhY2VzJ1xyXG5cclxuY2xhc3MgTmV0ViB7XHJcbiAgICBwdWJsaWMgc3RhdGljIExheW91dHMgPSBMYXlvdXRzXHJcblxyXG4gICAgcHVibGljIFV0aWxzID0gVXRpbHMgLy8gVE9ETzogbmVlZCByZWZhY3RvciB0byBzdGF0aWM/XHJcblxyXG4gICAgcHVibGljIGxhYmVsTWFuYWdlcjogTGFiZWxNYW5hZ2VyXHJcbiAgICBwdWJsaWMgJF9pbnRlcmFjdGlvbk1hbmFnZXI6IEludGVyYWN0aW9uTWFuYWdlclxyXG5cclxuICAgIHB1YmxpYyAkX2lkMm5vZGUgPSBuZXcgTWFwKClcclxuICAgIHB1YmxpYyAkX2VuZHMybGluayA9IG5ldyBNYXAyKClcclxuICAgIHB1YmxpYyAkX3NvdXJjZUlkMmxpbmtzOiBNYXA8c3RyaW5nLCBTZXQ8TGluaz4+ID0gbmV3IE1hcCgpXHJcbiAgICBwdWJsaWMgJF90YXJnZXRJZDJsaW5rczogTWFwPHN0cmluZywgU2V0PExpbms+PiA9IG5ldyBNYXAoKVxyXG4gICAgcHVibGljICRfY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudFxyXG4gICAgcHVibGljICRfY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudFxyXG4gICAgcHVibGljICRfcmVuZGVyZXI6IFJlbmRlcmVyXHJcbiAgICBwdWJsaWMgJF9jb25maWdzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkZWZhdWx0Q29uZmlncykpIC8vIE5PVEU6IGRlZXAgY29weSBjb25maWdzXHJcblxyXG4gICAgcHVibGljICRfdHJhbnNmb3JtOiBpbnRlcmZhY2VzLlRyYW5zZm9ybSA9IHsgeDogMCwgeTogMCwgazogMSB9XHJcblxyXG4gICAgcHVibGljICRfbGF6eVVwZGF0ZSA9IGZhbHNlIC8vIGZsYWcgdG8gY29udHJvbCBsYXp5IHVwZGF0ZVxyXG5cclxuICAgIHByaXZhdGUgJF9kYXRhOiBpbnRlcmZhY2VzLk5vZGVMaW5rRGF0YSA9IHsgbm9kZXM6IFtdLCBsaW5rczogW10gfVxyXG5cclxuICAgIHByaXZhdGUgJF9tb2RpZmllZExpbmtDb3VudCA9IDAgLy8gcmVjb3JkIG1vZGlmaWVkIGxpbmsgbnVtIHRvIGNvbnRyb2wgbGF6eSB1cGRhdGVcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBjcmVhdGUgTmV0ViBvYmplY3QuXHJcbiAgICAgKiBAcGFyYW0gY29uZmlncyBjb25maWd1cmF0aW9ucyBvZiBOZXRWLCBtdXN0IGluY2x1ZGUgYSBgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudGAgdGVybVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoY29uZmlnczogYW55KSB7XHJcbiAgICAgICAgaWYgKCEoJ2NvbnRhaW5lcicgaW4gY29uZmlncykgfHwgY29uZmlncy5jb250YWluZXIudGFnTmFtZSAhPT0gJ0RJVicpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0NvbnRhaW5lciBzaG91bGQgYmUgc3BlY2lmaWVkIGFzIGEgZGl2IGVsZW1lbnQhJylcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy4kX2NvbnRhaW5lciA9IGNvbmZpZ3MuY29udGFpbmVyXHJcbiAgICAgICAgLy8gb3ZlcnJpZGUgY29uZmlnc1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNvbmZpZ3MpIHtcclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2NvbnRhaW5lcicpIGNvbnRpbnVlIC8vIE5PVEU6IGV4Y2x1ZGUgY29udGFpbmVyIGluIGNvbmZpZ3NcclxuICAgICAgICAgICAgaWYgKGNvbmZpZ3Nba2V5XSA9PT0gT2JqZWN0KGNvbmZpZ3Nba2V5XSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJF9jb25maWdzW2tleV0gPSB7IC4uLnRoaXMuJF9jb25maWdzW2tleV0sIC4uLmNvbmZpZ3Nba2V5XSB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRfY29uZmlnc1trZXldID0gY29uZmlnc1trZXldXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpIC8vIFRPRE86IGNvbnNpZGVyIG5vZGUgZW52aXJvbWVudCwgZG9jdW1lbnQgbm90IGRlZmluZWRcclxuICAgICAgICBjb25zdCBwaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMVxyXG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IHRoaXMuJF9jb25maWdzLndpZHRoICsgJ3B4J1xyXG4gICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSB0aGlzLiRfY29uZmlncy5oZWlnaHQgKyAncHgnXHJcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBTdHJpbmcodGhpcy4kX2NvbmZpZ3Mud2lkdGggKiBwaXhlbFJhdGlvKSlcclxuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBTdHJpbmcodGhpcy4kX2NvbmZpZ3MuaGVpZ2h0ICogcGl4ZWxSYXRpbykpXHJcbiAgICAgICAgdGhpcy4kX2NvbnRhaW5lci5hcHBlbmRDaGlsZChjYW52YXMpXHJcbiAgICAgICAgdGhpcy4kX2NhbnZhcyA9IGNhbnZhc1xyXG5cclxuICAgICAgICB0aGlzLiRfcmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoe1xyXG4gICAgICAgICAgICBjYW52YXMsXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLiRfY29uZmlncy53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLiRfY29uZmlncy5oZWlnaHQsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy4kX2NvbmZpZ3MuYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICBub2RlTGltaXQ6IHRoaXMuJF9jb25maWdzLm5vZGVMaW1pdCxcclxuICAgICAgICAgICAgbGlua0xpbWl0OiB0aGlzLiRfY29uZmlncy5saW5rTGltaXRcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmxhYmVsTWFuYWdlciA9IG5ldyBMYWJlbE1hbmFnZXIodGhpcylcclxuXHJcbiAgICAgICAgdGhpcy4kX2ludGVyYWN0aW9uTWFuYWdlciA9IG5ldyBJbnRlcmFjdGlvbk1hbmFnZXIodGhpcylcclxuICAgICAgICBpZiAodGhpcy4kX2NvbmZpZ3MuZW5hYmxlUGFuWm9vbSkge1xyXG4gICAgICAgICAgICB0aGlzLiRfaW50ZXJhY3Rpb25NYW5hZ2VyLmluaXRab29tKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuJF9pbnRlcmFjdGlvbk1hbmFnZXIuaW5pdE1vdXNlKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldC9zZXQgY2FudmFzJ3MgYmFja2dyb3VuZCBjb2xvclxyXG4gICAgICogQHBhcmFtIGNvbG9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBiYWNrZ3JvdW5kQ29sb3IoY29sb3I/OiBpbnRlcmZhY2VzLkNvbG9yKSB7XHJcbiAgICAgICAgaWYgKGNvbG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9jb25maWdzLmJhY2tncm91bmRDb2xvciA9IGNvbG9yXHJcbiAgICAgICAgICAgIHRoaXMuJF9yZW5kZXJlci5zZXRCYWNrZ3JvdW5kQ29sb3IoY29sb3IpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfY29uZmlncy5iYWNrZ3JvdW5kQ29sb3JcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgJF9hZGRNb2RpZmllZExpbmtDb3VudChuOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLiRfbW9kaWZpZWRMaW5rQ291bnQgKz0gblxyXG4gICAgICAgIGlmICh0aGlzLiRfbW9kaWZpZWRMaW5rQ291bnQgPiB0aGlzLiRfY29uZmlncy5sYXp5VXBkYXRlVGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9sYXp5VXBkYXRlID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBkYXRhIGdldHRlciBzZXR0ZXJcclxuICAgICAqIEBwYXJhbSBub2RlTGlua0RhdGE/IHRoZSBub2RlLWxpbmstZGF0YSBvZiBhIGdyYXBoLCBwcm92aWRlZD9zZXR0ZXI6Z2V0dGVyO1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGF0YShub2RlTGlua0RhdGE/OiBpbnRlcmZhY2VzLk5vZGVMaW5rRGF0YSkge1xyXG4gICAgICAgIGlmIChub2RlTGlua0RhdGEgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kX2RhdGFcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBkZWxldGUgb2xkIGRhdGFcclxuICAgICAgICAgICAgdGhpcy4kX2RhdGEgPSB7IC4uLnRoaXMuJF9kYXRhLCAuLi5ub2RlTGlua0RhdGEgfVxyXG4gICAgICAgICAgICB0aGlzLiRfaWQybm9kZSA9IG5ldyBNYXAoKVxyXG4gICAgICAgICAgICB0aGlzLiRfZW5kczJsaW5rID0gbmV3IE1hcDIoKVxyXG4gICAgICAgICAgICB0aGlzLiRfc291cmNlSWQybGlua3MgPSBuZXcgTWFwKClcclxuICAgICAgICAgICAgdGhpcy4kX3RhcmdldElkMmxpbmtzID0gbmV3IE1hcCgpXHJcblxyXG4gICAgICAgICAgICB0aGlzLiRfcmVuZGVyZXIuY2xlYXJEYXRhKClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWRkTm9kZXModGhpcy4kX2RhdGEubm9kZXMpXHJcbiAgICAgICAgICAgIHRoaXMuYWRkTGlua3ModGhpcy4kX2RhdGEubGlua3MpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIGluaXRpYWxpemUgYW5kIGFkZCBhIG5vZGVcclxuICAgICAqIEBwYXJhbSBub2RlRGF0YSB0aGUgZGF0YSBvZiBhIG5vZGUsIGluY2x1ZGUgaWQsIHN0eWxlcy4uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkTm9kZShub2RlRGF0YTogaW50ZXJmYWNlcy5Ob2RlRGF0YSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFkZE5vZGVzKFtub2RlRGF0YV0pWzBdXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gaW5pdGlhbGl6ZSBhbmQgYWRkIGEgbGlua1xyXG4gICAgICogQHBhcmFtIGxpbmtEYXRhIHRoZSBkYXRhIG9mIGEgbGluaywgaW5jbHVkZSBzb3VyY2UsIHRhcmdldCwgYW5kIHN0eWxlcy4uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkTGluayhsaW5rRGF0YTogaW50ZXJmYWNlcy5MaW5rRGF0YSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFkZExpbmtzKFtsaW5rRGF0YV0pWzBdXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gaW5pdGlhbGl6ZSBhbmQgYWRkIGFuIGFycmF5IG9mIG5vZGVzLlxyXG4gICAgICogQHBhcmFtIHtpbnRlcmZhY2VzLk5vZGVEYXRhW119IG5vZGVzRGF0YTogYSBkYXRhIGFycmF5IG9mIG5vZGVzIHRvYmUgYWRkZWRcclxuICAgICAqIEBtZW1iZXJvZiBOZXRWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGROb2Rlcyhub2Rlc0RhdGE6IGludGVyZmFjZXMuTm9kZURhdGFbXSkge1xyXG4gICAgICAgIGNvbnN0IG5ld05vZGVzID0gbm9kZXNEYXRhLm1hcCgobm9kZURhdGEpID0+IHtcclxuICAgICAgICAgICAgbm9kZURhdGEuaWQgPSBub2RlRGF0YS5pZC50b1N0cmluZygpXHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBuZXcgTm9kZSh0aGlzLCBub2RlRGF0YSlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBub2RlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLiRfcmVuZGVyZXIuYWRkTm9kZXMobmV3Tm9kZXMpXHJcbiAgICAgICAgcmV0dXJuIG5ld05vZGVzXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gaW5pdGlhbGl6ZSBhbmQgYWRkIGFuIGFycmF5IG9mIGxpbmtzLlxyXG4gICAgICogQHBhcmFtIHtpbnRlcmZhY2VzLkxpbmtEYXRhW119IGxpbmtzRGF0YTogYSBkYXRhIGFycmF5IG9mIGxpbmtzIHRvYmUgYWRkZWRcclxuICAgICAqIEBtZW1iZXJvZiBOZXRWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRMaW5rcyhsaW5rc0RhdGE6IGludGVyZmFjZXMuTGlua0RhdGFbXSkge1xyXG4gICAgICAgIGNvbnN0IG5ld0xpbmtzID0gbGlua3NEYXRhLm1hcCgobGlua0RhdGEpID0+IHtcclxuICAgICAgICAgICAgbGlua0RhdGEuc291cmNlID0gbGlua0RhdGEuc291cmNlLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgbGlua0RhdGEudGFyZ2V0ID0gbGlua0RhdGEudGFyZ2V0LnRvU3RyaW5nKClcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBuZXcgTGluayh0aGlzLCBsaW5rRGF0YSlcclxuICAgICAgICAgICAgcmV0dXJuIGxpbmtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIHRoaXMuJF9yZW5kZXJlci5hZGRMaW5rcyhuZXdMaW5rcylcclxuICAgICAgICB0aGlzLiRfcmVuZGVyZXIuYWRkTGlua3MoWy4uLnRoaXMuJF9lbmRzMmxpbmsudmFsdWVzKCldKSAvLyBOT1RFOiBwcmVzZXJ2ZSBsaW5rIG9yZGVyLCBub3QgZWxlZ2FudFxyXG4gICAgICAgIHJldHVybiBuZXdMaW5rc1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIGdldCBhIE5vZGUgb2JqZWN0IGZyb20gdGhlIGlkMm5vZGUgTWFwIGRhdGEgc3RydWN0dXJlXHJcbiAgICAgKiBAcGFyYW0gaWQgbm9kZSBpZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Tm9kZUJ5SWQoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRfaWQybm9kZS5nZXQoaWQpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gZ2V0IGEgTGluayBvYmplY3QgZnJvbSB0aGUgZW5kczJsaW5rIE1hcDIgZGF0YSBzdHJ1Y3R1cmVcclxuICAgICAqIEBwYXJhbSBlbmRJZDEgb25lIGVuZCBpZCBvZiB0aGUgbGluayAoc291cmNlIG9yIHRhcmdldClcclxuICAgICAqIEBwYXJhbSBlbmRJZDIgYW5vdGhlciBlbmQgaWQgb2YgdGhlIGxpbmsgKHNvdXJjZSBvciB0YXJnZXQpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRMaW5rQnlFbmRzKGVuZElkMTogc3RyaW5nLCBlbmRJZDI6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRfZW5kczJsaW5rLmdldChbZW5kSWQxLCBlbmRJZDJdKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIGdldCBhbGwgbm9kZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIG5vZGVzKCkge1xyXG4gICAgICAgIHJldHVybiBbLi4udGhpcy4kX2lkMm5vZGUudmFsdWVzKCldXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gZ2V0IGFsbCBsaW5rc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbGlua3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLiRfZW5kczJsaW5rLnZhbHVlcygpXVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIHdpcGUgYWxsIHRoZSBkYXRhIGluIHRoZSBpbnN0YW5jZVxyXG4gICAgICogQG1lbWJlcm9mIE5ldFZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHdpcGUoKSB7XHJcbiAgICAgICAgdGhpcy4kX2RhdGEgPSB1bmRlZmluZWRcclxuICAgICAgICB0aGlzLiRfaWQybm9kZSA9IG5ldyBNYXAoKVxyXG4gICAgICAgIHRoaXMuJF9lbmRzMmxpbmsgPSBuZXcgTWFwMigpXHJcbiAgICAgICAgdGhpcy4kX3NvdXJjZUlkMmxpbmtzID0gbmV3IE1hcCgpXHJcbiAgICAgICAgdGhpcy4kX3RhcmdldElkMmxpbmtzID0gbmV3IE1hcCgpXHJcbiAgICAgICAgdGhpcy4kX3JlbmRlcmVyLmNsZWFyRGF0YSgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBkaXNwb3NlIE5ldFYgb2JqZWN0LCBjbGVhciBhbGwgc3R1ZmZzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgIHRoaXMud2lwZSgpXHJcbiAgICAgICAgdGhpcy4kX3JlbmRlcmVyLmRpc3Bvc2UoKVxyXG4gICAgICAgIHRoaXMuJF9jYW52YXMucmVtb3ZlKClcclxuICAgICAgICAvLyByZW1vdmUgbGFiZWwgY2FudmFzXHJcbiAgICAgICAgLy8gVE9ETzogY29uc2lkZXIgc3RhbmRhbG9uZSBpbnRlcmFjdGlvbiBwbHVnaW5cclxuICAgICAgICB0aGlzLmxhYmVsTWFuYWdlci5kaXNwb3NlKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiByZXR1cm4gYnVpbGQtaW4gZGF0YXNldCBhY2NvcmRpbmcgdG8gbmFtZVxyXG4gICAgICogQHBhcmFtIG5hbWUgZGF0YXNldCBuYW1lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkRGF0YXNldChuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAobmFtZSBpbiBkYXRhc2V0KSByZXR1cm4gZGF0YXNldFtuYW1lXVxyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKGBOZXRWIGRvZXMgbm90IGhhdmUgYnVpbGQtaW4gZGF0YXNldDogJHtuYW1lfWApXHJcbiAgICAgICAgcmV0dXJuIHsgbm9kZXM6IFtdLCBsaW5rczogW10gfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2l2ZW4gcG9zaXRpb24sIHJldHVybiBlbGVtZW50IG9uIHRoaXMgcGl4ZWwgaWYgZXhpc3RzXHJcbiAgICAgKiBAcGFyYW0geCB4IHBvc1xyXG4gICAgICogQHBhcmFtIHkgeSBwb3NcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEVsZW1lbnRCeVBvc2l0aW9uKFxyXG4gICAgICAgIHBvc2l0aW9uOiBpbnRlcmZhY2VzLlBvc2l0aW9uXHJcbiAgICApOiB7IHR5cGU6ICdub2RlJyB8ICdsaW5rJzsgZWxlbWVudDogTm9kZSB8IExpbmsgfSB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLiRfcmVuZGVyZXIuZ2V0SWRCeVBvc2l0aW9uKHBvc2l0aW9uKVxyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGlkID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5SWQoaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub2RlJyxcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBub2RlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaWQpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5rID0gdGhpcy5nZXRMaW5rQnlFbmRzKGlkWzBdLCBpZFsxXSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2xpbmsnLFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGxpbmtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBkcmF3IGVsZW1lbnRzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkcmF3KCkge1xyXG4gICAgICAgIGlmICh0aGlzLiRfbGF6eVVwZGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLiRfcmVuZGVyZXIubm9kZU1hbmFnZXIucmVmcmVzaFBvc2l0aW9uKFsuLi50aGlzLiRfaWQybm9kZS52YWx1ZXMoKV0pXHJcblxyXG4gICAgICAgICAgICAvLyBUT0RPOiBtYXliZSBuZWVkIG1vcmUgZWZmaWNpZW50IGFuZCByZWxpYWJsZSB3YXkgdG8gc3RvcmUgYW5kIGdldCBhbGwgbGlua3NcclxuICAgICAgICAgICAgdGhpcy4kX3JlbmRlcmVyLmxpbmtNYW5hZ2VyLnJlZnJlc2hQb3NpdGlvbihbLi4udGhpcy4kX2VuZHMybGluay52YWx1ZXMoKV0pXHJcbiAgICAgICAgICAgIHRoaXMuJF9sYXp5VXBkYXRlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy4kX21vZGlmaWVkTGlua0NvdW50ID0gMFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiRfcmVuZGVyZXIuZHJhdygpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBwYW4gb24gY2FudmFzIHRvIGdldCBnaXZlbiBub2RlIGNlbnRlcmVkXHJcbiAgICAgKiBAcGFyYW0gbm9kZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2VudGVyT24obm9kZTogTm9kZSkge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IG5vZGUucG9zaXRpb24oKVxyXG4gICAgICAgIHRoaXMuJF9pbnRlcmFjdGlvbk1hbmFnZXIuY2VudGVyUG9zaXRpb24ocG9zKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcHJvZ21hdGljYWxseSBwYW5cclxuICAgICAqIEBwYXJhbSB4XHJcbiAgICAgKiBAcGFyYW0geVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcGFuQnkoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLiRfaW50ZXJhY3Rpb25NYW5hZ2VyLnBhbkJ5KHgsIHkpXHJcbiAgICAgICAgdGhpcy5kcmF3KClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHByb2dtYXRpY2FsbHkgem9vbVxyXG4gICAgICogQHBhcmFtIGZhY3RvciB6b29tIGZhY3RvclxyXG4gICAgICogQHBhcmFtIGNlbnRlciBvcHRpb25hbCwgem9vbSBjZW50ZXIgcG9zaXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIHpvb21CeShmYWN0b3I6IG51bWJlciwgY2VudGVyPzogUG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLiRfaW50ZXJhY3Rpb25NYW5hZ2VyLnpvb21CeShmYWN0b3IsIGNlbnRlcilcclxuICAgICAgICB0aGlzLmRyYXcoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0L3NldCBuZXR2J3MgdHJhbnNmb3JtXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgb3B0aW9uYWwsIHRyYW5zZm9ybSB0byBzZXRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHRyYW5zZm9ybSh2YWx1ZT86IGludGVyZmFjZXMuVHJhbnNmb3JtKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJF90cmFuc2Zvcm1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy4kX3RyYW5zZm9ybSA9IHZhbHVlXHJcbiAgICAgICAgdGhpcy4kX3JlbmRlcmVyLnNldFRyYW5zZm9ybSh0aGlzLiRfdHJhbnNmb3JtKVxyXG4gICAgICAgIHRoaXMubGFiZWxNYW5hZ2VyLnNldFRyYW5zZm9ybSh0aGlzLiRfdHJhbnNmb3JtKVxyXG4gICAgICAgIHRoaXMuZHJhdygpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IE5ldFYgfVxyXG4iLCIvKipcclxuICogQGF1dGhvciBYaWFvZG9uZyBaaGFvIDx6aGFveGlhb2RvbmdAemp1LmVkdS5jbj5cclxuICogQGRlc2NyaXB0aW9uIGhhbmRsZSBhbGwgaW50ZXJhY3Rpb24gaW4gTmV0VlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE5ldFYgfSBmcm9tICdzcmMnXHJcbmltcG9ydCB7IFBvc2l0aW9uLCBUcmFuc2Zvcm0gfSBmcm9tICcuLi9pbnRlcmZhY2VzJ1xyXG5leHBvcnQgY2xhc3MgSW50ZXJhY3Rpb25NYW5hZ2VyIHtcclxuICAgIHByaXZhdGUgbmV0djogTmV0VlxyXG4gICAgcHJpdmF0ZSBpc01vdXNlRG93biA9IGZhbHNlXHJcbiAgICBwcml2YXRlIGlzTW91c2VNb3ZlID0gZmFsc2VcclxuICAgIHByaXZhdGUgbW91c2VEb3duRWxlbWVudFxyXG4gICAgcHJpdmF0ZSBtb3VzZURvd25FbGVtZW50T3JpZ2luUG9zOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gLy8gTk9URTogcmVjb3JkIHBvcywgb25seSBzdXBwb3J0IG5vZGUncyBkcmFnXHJcblxyXG4gICAgcHJpdmF0ZSBtb3VzZURvd25Qb3M6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVxyXG4gICAgcHJpdmF0ZSBkcmFnU3RhcnRUcmFuc2Zvcm06IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IGs6IG51bWJlciB9XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG5ldHY6IE5ldFYpIHtcclxuICAgICAgICB0aGlzLm5ldHYgPSBuZXR2XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBwcm9nbWF0aWNhbGx5IHBhblxyXG4gICAgICogQHBhcmFtIHhcclxuICAgICAqIEBwYXJhbSB5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwYW5CeSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IG5ld1RyYW5zZm9ybSA9IHsgLi4udGhpcy5uZXR2LiRfdHJhbnNmb3JtIH1cclxuICAgICAgICBuZXdUcmFuc2Zvcm0ueCArPSB4XHJcbiAgICAgICAgbmV3VHJhbnNmb3JtLnkgKz0geVxyXG4gICAgICAgIHRoaXMubmV0di50cmFuc2Zvcm0obmV3VHJhbnNmb3JtKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcHJvZ21hdGljYWxseSB6b29tXHJcbiAgICAgKiBAcGFyYW0gZmFjdG9yIHpvb20gZmFjdG9yXHJcbiAgICAgKiBAcGFyYW0gY2VudGVyIG9wdGlvbmFsLCB6b29tIGNlbnRlciBwb3NpdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgem9vbUJ5KGZhY3RvcjogbnVtYmVyLCBjZW50ZXI/OiBQb3NpdGlvbikge1xyXG4gICAgICAgIGNvbnN0IG5ld1RyYW5zZm9ybSA9IHsgLi4udGhpcy5uZXR2LiRfdHJhbnNmb3JtIH1cclxuICAgICAgICBsZXQgY2VudGVyUG9zID0gY2VudGVyXHJcbiAgICAgICAgaWYgKCFjZW50ZXJQb3MpIHtcclxuICAgICAgICAgICAgY2VudGVyUG9zID0geyB4OiB0aGlzLm5ldHYuJF9jb25maWdzLndpZHRoIC8gMiwgeTogdGhpcy5uZXR2LiRfY29uZmlncy5oZWlnaHQgLyAyIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBjZW50ZXJQb3NcclxuXHJcbiAgICAgICAgbmV3VHJhbnNmb3JtLnggPSAoMSAtIGZhY3RvcikgKiB4ICsgZmFjdG9yICogbmV3VHJhbnNmb3JtLnhcclxuICAgICAgICBuZXdUcmFuc2Zvcm0ueSA9ICgxIC0gZmFjdG9yKSAqIHkgKyBmYWN0b3IgKiBuZXdUcmFuc2Zvcm0ueVxyXG5cclxuICAgICAgICBuZXdUcmFuc2Zvcm0uayAqPSBmYWN0b3JcclxuXHJcbiAgICAgICAgdGhpcy5uZXR2LnRyYW5zZm9ybShuZXdUcmFuc2Zvcm0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBtb3ZlIGN1cnJlbnQgcG9zaXRpb24gdG8gY2VudGVyIG9mIGNhbnZhc1xyXG4gICAgICogQHBhcmFtIHBvc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2VudGVyUG9zaXRpb24ocG9zOiBQb3NpdGlvbikge1xyXG4gICAgICAgIGNvbnN0IG5ld1RyYW5zZm9ybSA9IHsgLi4udGhpcy5uZXR2LiRfdHJhbnNmb3JtIH1cclxuICAgICAgICBjb25zdCB4ID0gcG9zLnggKiBuZXdUcmFuc2Zvcm0uayArIG5ld1RyYW5zZm9ybS54XHJcbiAgICAgICAgY29uc3QgeSA9IHBvcy55ICogbmV3VHJhbnNmb3JtLmsgKyBuZXdUcmFuc2Zvcm0ueVxyXG4gICAgICAgIGNvbnN0IGNlbnRlciA9IHtcclxuICAgICAgICAgICAgeDogdGhpcy5uZXR2LiRfY29uZmlncy53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIHk6IHRoaXMubmV0di4kX2NvbmZpZ3MuaGVpZ2h0IC8gMlxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBuZXdUcmFuc2Zvcm0ueCArPSBjZW50ZXIueCAtIHhcclxuICAgICAgICAvLyBuZXdUcmFuc2Zvcm0ueSArPSBjZW50ZXIueSAtIHlcclxuICAgICAgICAvLyBpbnRlcnBvbGF0aW9uXHJcbiAgICAgICAgY29uc3Qgc3RlcENvdW50ID0gMjBcclxuICAgICAgICBjb25zdCBkaWZmZXJlbmNlID0ge1xyXG4gICAgICAgICAgICB4OiBjZW50ZXIueCAtIHgsXHJcbiAgICAgICAgICAgIHk6IGNlbnRlci55IC0geVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBvcmlnaW5UcmFuc2xhdGUgPSB7XHJcbiAgICAgICAgICAgIHg6IG5ld1RyYW5zZm9ybS54LFxyXG4gICAgICAgICAgICB5OiBuZXdUcmFuc2Zvcm0ueVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZWFzZSA9ICh4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB4ICogeFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHN0ZXBzID0gMVxyXG5cclxuICAgICAgICBjb25zdCBhbmltYXRpb24gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIG5ld1RyYW5zZm9ybS54ID0gb3JpZ2luVHJhbnNsYXRlLnggKyBkaWZmZXJlbmNlLnggKiBlYXNlKHN0ZXBzIC8gc3RlcENvdW50KVxyXG4gICAgICAgICAgICBuZXdUcmFuc2Zvcm0ueSA9IG9yaWdpblRyYW5zbGF0ZS55ICsgZGlmZmVyZW5jZS55ICogZWFzZShzdGVwcyAvIHN0ZXBDb3VudClcclxuXHJcbiAgICAgICAgICAgIHRoaXMubmV0di50cmFuc2Zvcm0obmV3VHJhbnNmb3JtKVxyXG5cclxuICAgICAgICAgICAgc3RlcHMgKz0gMVxyXG4gICAgICAgICAgICBpZiAoc3RlcHMgPiBzdGVwQ291bnQpIGNsZWFySW50ZXJ2YWwoYW5pbWF0aW9uKVxyXG4gICAgICAgIH0sIDUwMCAvIHN0ZXBDb3VudClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGluaXQgem9vbSZwYW4gaW50ZXJhY3Rpb25cclxuICAgICAqIGN1cnJlbnRseSBubyBjYWxsYmFja1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdFpvb20oKSB7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5uZXR2LiRfY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpXHJcbiAgICAgICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKGV2dDogTW91c2VXaGVlbEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1RyYW5zZm9ybSA9IHsgLi4udGhpcy5uZXR2LiRfdHJhbnNmb3JtIH1cclxuICAgICAgICAgICAgY29uc3QgeCA9IGV2dC5vZmZzZXRYIHx8IGV2dC5wYWdlWCAtIGNhbnZhcy5vZmZzZXRMZWZ0XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBldnQub2Zmc2V0WSB8fCBldnQucGFnZVkgLSBjYW52YXMub2Zmc2V0VG9wXHJcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gZXZ0LmRlbHRhWSA/IGV2dC5kZWx0YVkgLyA0MCA6IGV2dC5kZXRhaWwgPyAtZXZ0LmRldGFpbCA6IDBcclxuICAgICAgICAgICAgaWYgKGRlbHRhKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrID0gTWF0aC5wb3coMS4xLCBkZWx0YSlcclxuICAgICAgICAgICAgICAgIG5ld1RyYW5zZm9ybS54ID0gKDEgLSBrKSAqIHggKyBrICogbmV3VHJhbnNmb3JtLnhcclxuICAgICAgICAgICAgICAgIG5ld1RyYW5zZm9ybS55ID0gKDEgLSBrKSAqIHkgKyBrICogbmV3VHJhbnNmb3JtLnlcclxuXHJcbiAgICAgICAgICAgICAgICBuZXdUcmFuc2Zvcm0uayAqPSBrXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXR2LnRyYW5zZm9ybShuZXdUcmFuc2Zvcm0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCBoYW5kbGVTY3JvbGwsIGZhbHNlKVxyXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgaGFuZGxlU2Nyb2xsLCBmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldHVwIGNsaWNrIHV0aWxpdHlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXRNb3VzZSgpIHtcclxuICAgICAgICBsZXQgbmV3VHJhbnNmb3JtID0geyAuLi50aGlzLm5ldHYuJF90cmFuc2Zvcm0gfVxyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMubmV0di4kX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKVxyXG4gICAgICAgIGNvbnN0IGhhbmRsZU1vdXNlRG93biA9IChldnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbmV3VHJhbnNmb3JtID0geyAuLi50aGlzLm5ldHYuJF90cmFuc2Zvcm0gfVxyXG4gICAgICAgICAgICBjb25zdCB4ID0gZXZ0Lm9mZnNldFggfHwgZXZ0LnBhZ2VYIC0gY2FudmFzLm9mZnNldExlZnRcclxuICAgICAgICAgICAgY29uc3QgeSA9IGV2dC5vZmZzZXRZIHx8IGV2dC5wYWdlWSAtIGNhbnZhcy5vZmZzZXRUb3BcclxuICAgICAgICAgICAgY29uc3QgeUludiA9IHRoaXMubmV0di4kX2NvbmZpZ3MuaGVpZ2h0IC0geVxyXG5cclxuICAgICAgICAgICAgdGhpcy5pc01vdXNlRG93biA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5tb3VzZURvd25Qb3MgPSB7IHgsIHkgfVxyXG4gICAgICAgICAgICB0aGlzLmRyYWdTdGFydFRyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobmV3VHJhbnNmb3JtKSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudCA9IHRoaXMubmV0di5nZXRFbGVtZW50QnlQb3NpdGlvbih7XHJcbiAgICAgICAgICAgICAgICB4LFxyXG4gICAgICAgICAgICAgICAgeTogeUludlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZiAodGhpcy5tb3VzZURvd25FbGVtZW50Py5lbGVtZW50LnBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAvLyByZWNvcmQgb3JnaW4gcG9zaXRpb24gZm9yIGRyYWdcclxuICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudE9yaWdpblBvcyA9IHsgLi4udGhpcy5tb3VzZURvd25FbGVtZW50LmVsZW1lbnQucG9zaXRpb24oKSB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IChldnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeCA9IGV2dC5vZmZzZXRYIHx8IGV2dC5wYWdlWCAtIGNhbnZhcy5vZmZzZXRMZWZ0XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBldnQub2Zmc2V0WSB8fCBldnQucGFnZVkgLSBjYW52YXMub2Zmc2V0VG9wXHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc01vdXNlRG93bikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdXNlTW92ZSA9IHRydWVcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubW91c2VEb3duRWxlbWVudCB8fCAhdGhpcy5tb3VzZURvd25FbGVtZW50LmVsZW1lbnQucG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBwYW4sIHdoZW4gbm90IGRyYWdnaW5nIG5vZGVcclxuICAgICAgICAgICAgICAgICAgICBuZXdUcmFuc2Zvcm0ueCA9IHRoaXMuZHJhZ1N0YXJ0VHJhbnNmb3JtLnggKyB4IC0gdGhpcy5tb3VzZURvd25Qb3MueFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1RyYW5zZm9ybS55ID0gdGhpcy5kcmFnU3RhcnRUcmFuc2Zvcm0ueSArIHkgLSB0aGlzLm1vdXNlRG93blBvcy55XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV0di50cmFuc2Zvcm0obmV3VHJhbnNmb3JtKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBkcmFnIG5vZGVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnQuZWxlbWVudC5wb3NpdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnRPcmlnaW5Qb3MueCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoeCAtIHRoaXMubW91c2VEb3duUG9zLngpIC8gbmV3VHJhbnNmb3JtLmssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnRPcmlnaW5Qb3MueSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoeSAtIHRoaXMubW91c2VEb3duUG9zLnkpIC8gbmV3VHJhbnNmb3JtLmtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV0di5kcmF3KClcclxuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIGRyYWdnaW5nLCBkeW5hbWljIGNoYW5nZSBsYWJlbCdzIHBvc2l0aW9uLiBiZWNhdXNlIG9ubHkgb3BlcmF0ZSBvbiBzaW5nbGUgZWxlbWVudCwgaXQncyBvayB0byByZW1vdmUgYW5kIHJlY3JlYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50LmVsZW1lbnQuc2hvd0xhYmVsKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudC5lbGVtZW50LnNob3dMYWJlbCh0cnVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeUludiA9IHRoaXMubmV0di4kX2NvbmZpZ3MuaGVpZ2h0IC0geVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubmV0di5nZXRFbGVtZW50QnlQb3NpdGlvbih7IHgsIHk6IHlJbnYgfSlcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Py5lbGVtZW50LiRfaG92ZXJDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZWxlbWVudC4kX2hvdmVyQ2FsbGJhY2soZWxlbWVudC5lbGVtZW50IGFzIGFueSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiAvLyBjdXJyZW50bHkgbm90IHN1cHBvcnQgaG92ZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlTW91c2VVcCA9IChldnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzTW91c2VNb3ZlICYmIHRoaXMubW91c2VEb3duRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY2xpY2tcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vdXNlRG93bkVsZW1lbnQ/LmVsZW1lbnQuJF9jbGlja0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50LmVsZW1lbnQuJF9jbGlja0NhbGxiYWNrKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnQuZWxlbWVudCBhcyBhbnlcclxuICAgICAgICAgICAgICAgICAgICApIC8vIFRPRE86IG5vdCBlbGVnYW50XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pc01vdXNlRG93biA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuaXNNb3VzZU1vdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnQgPSB1bmRlZmluZWRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVNb3VzZURvd24pXHJcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSlcclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZU1vdXNlVXApXHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XHJcbiAqIEBkZXNjcmlwdGlvbiBncmFwaCBsYWJlbCByZWxhdGVkIGNsYXNzIG9yIG1ldGhvZFxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE5ldFYgfSBmcm9tICdzcmMnXHJcbmltcG9ydCBOb2RlIGZyb20gJ3NyYy9ub2RlJ1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi9pbnRlcmZhY2VzJ1xyXG5cclxuZXhwb3J0IGNsYXNzIExhYmVsTWFuYWdlciB7XHJcbiAgICBwcml2YXRlICRfY29yZTogTmV0VlxyXG4gICAgcHJpdmF0ZSAkX3N2ZzogU1ZHRWxlbWVudFxyXG4gICAgcHJpdmF0ZSAkX29mZnNldDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XHJcbiAgICBwcml2YXRlICRfZm9udFNpemU6IG51bWJlclxyXG4gICAgcHJpdmF0ZSAkX3N0cm9rZVdpZHRoOiBudW1iZXJcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoY29yZTogTmV0Vikge1xyXG4gICAgICAgIHRoaXMuJF9jb3JlID0gY29yZVxyXG5cclxuICAgICAgICB0aGlzLiRfc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKSBhcyBTVkdFbGVtZW50XHJcbiAgICAgICAgY29yZS4kX2NvbnRhaW5lci5wcmVwZW5kKHRoaXMuJF9zdmcpXHJcbiAgICAgICAgdGhpcy4kX3N2Zy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgY29yZS4kX2NvbmZpZ3Mud2lkdGgpXHJcbiAgICAgICAgdGhpcy4kX3N2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGNvcmUuJF9jb25maWdzLmhlaWdodClcclxuICAgICAgICBjb3JlLiRfY29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJ1xyXG4gICAgICAgIGNvcmUuJF9jb250YWluZXIuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xyXG4gICAgICAgIGNvcmUuJF9jb250YWluZXIuc3R5bGUud2lkdGggPSBjb3JlLiRfY29uZmlncy53aWR0aFxyXG4gICAgICAgIGNvcmUuJF9jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gY29yZS4kX2NvbmZpZ3MuaGVpZ2h0XHJcbiAgICAgICAgdGhpcy4kX3N2Zy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcclxuICAgICAgICB0aGlzLiRfc3ZnLnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnXHJcbiAgICAgICAgdGhpcy4kX3N2Zy5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnXHJcblxyXG4gICAgICAgIHRoaXMuJF9vZmZzZXQgPSB0aGlzLiRfY29yZS4kX2NvbmZpZ3MubGFiZWwub2Zmc2V0XHJcbiAgICAgICAgdGhpcy4kX2ZvbnRTaXplID0gdGhpcy4kX2NvcmUuJF9jb25maWdzLmxhYmVsLmZvbnRTaXplXHJcbiAgICAgICAgdGhpcy4kX3N0cm9rZVdpZHRoID0gdGhpcy4kX2NvcmUuJF9jb25maWdzLmxhYmVsLnN0cm9rZVdpZHRoXHJcbiAgICAgICAgdGhpcy4kX3N2Zy5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt0aGlzLiRfb2Zmc2V0Lnh9ICR7dGhpcy4kX29mZnNldC55fSlgKVxyXG4gICAgICAgIHRoaXMuJF9zdmcuc2V0QXR0cmlidXRlKCdmb250LXNpemUnLCBgJHt0aGlzLiRfZm9udFNpemV9cHhgKVxyXG4gICAgICAgIHRoaXMuJF9zdmcuc2V0QXR0cmlidXRlKCdzdHJva2UnLCBgd2hpdGVgKVxyXG4gICAgICAgIHRoaXMuJF9zdmcuc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCBgJHt0aGlzLiRfc3Ryb2tlV2lkdGh9cHhgKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZGlzcG9zZSBsYWJlbCdzIHN2Z1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICB0aGlzLiRfc3ZnLnJlbW92ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBkcmF3IG5vZGUncyBsYWJlbFxyXG4gICAgICogQHBhcmFtIG5vZGUgbm9kZSB0byBhZGQgbGFiZWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRyYXdMYWJlbChub2RlOiBOb2RlKSB7XHJcbiAgICAgICAgY29uc3QgcG9zID0gbm9kZS5wb3NpdGlvbigpXHJcbiAgICAgICAgY29uc3QgdGV4dCA9IG5vZGUudGV4dCgpXHJcblxyXG4gICAgICAgIGlmICghdGV4dCkgcmV0dXJuXHJcblxyXG4gICAgICAgIGNvbnN0IHRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICd0ZXh0JylcclxuICAgICAgICB0ZXh0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgbm9kZS5pZCgpKVxyXG4gICAgICAgIHRleHRFbGVtZW50LnNldEF0dHJpYnV0ZSgneCcsIFN0cmluZyhwb3MueCkpXHJcbiAgICAgICAgdGV4dEVsZW1lbnQuc2V0QXR0cmlidXRlKCd5JywgU3RyaW5nKHBvcy55KSlcclxuICAgICAgICB0ZXh0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RleHQtYW5jaG9yJywgJ3N0YXJ0JylcclxuICAgICAgICB0ZXh0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FsaWdubWVudC1iYXNlbGluZScsICdtaWRkbGUnKVxyXG4gICAgICAgIHRleHRFbGVtZW50LnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZScgLy8gTk9URTogcHJldmVudCB1bmV4cGVjdGVkIHNlbGVjdGlvbiB3aGVuIGRyYWdnaW5nIG5vZGUoZGVsZXRlIGFuZCByZWNyZWF0ZSB0ZXh0RWxlbWVudClcclxuICAgICAgICB0ZXh0RWxlbWVudC5pbm5lckhUTUwgPSB0ZXh0XHJcblxyXG4gICAgICAgIHRoaXMuJF9zdmcucHJlcGVuZCh0ZXh0RWxlbWVudCkgLy8gTk9URTogbWFrZSBsYXN0IGFkZGVkIHRleHQgYXQgdG9wXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZW1vdmUgbm9kZSdzIGxhYmVsXHJcbiAgICAgKiBAcGFyYW0gbm9kZSBub2RlIHRvIGRlbGV0ZSBsYWJlbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlTGFiZWwobm9kZTogTm9kZSkge1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICB0aGlzLiRfc3ZnLmdldEVsZW1lbnRCeUlkKG5vZGUuaWQoKSk/LnJlbW92ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQgdmlld3BvcnQgdHJhbnNmb3JtXHJcbiAgICAgKiBAcGFyYW0gdHJhbnNmb3JtXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRUcmFuc2Zvcm0odHJhbnNmb3JtOiBUcmFuc2Zvcm0pIHtcclxuICAgICAgICB0aGlzLiRfc3ZnLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgJ3RyYW5zZm9ybScsXHJcbiAgICAgICAgICAgIGB0cmFuc2xhdGUoJHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJF9vZmZzZXQueCArXHJcbiAgICAgICAgICAgICAgICAoMSAtIHRyYW5zZm9ybS5rKSAqIC0odGhpcy4kX2NvcmUuJF9jb25maWdzLndpZHRoIC8gMikgK1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLnhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgJHtcclxuICAgICAgICAgICAgICAgICB0aGlzLiRfb2Zmc2V0LnkgK1xyXG4gICAgICAgICAgICAgICAgICgxIC0gdHJhbnNmb3JtLmspICogLSh0aGlzLiRfY29yZS4kX2NvbmZpZ3MuaGVpZ2h0IC8gMikgK1xyXG4gICAgICAgICAgICAgICAgIHRyYW5zZm9ybS55XHJcbiAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgc2NhbGUoJHt0cmFuc2Zvcm0ua30pYFxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLiRfc3ZnLnNldEF0dHJpYnV0ZSgnZm9udC1zaXplJywgYCR7dGhpcy4kX2ZvbnRTaXplIC8gdHJhbnNmb3JtLmt9cHhgKVxyXG4gICAgICAgIHRoaXMuJF9zdmcuc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCBgJHt0aGlzLiRfc3Ryb2tlV2lkdGggLyB0cmFuc2Zvcm0ua31weGApXHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhb1xyXG4gKiBAZGVzY3JpcHRpb24gZDMgZm9yY2Ugd3JhcHBlciBjbGFzc1xyXG4gKi9cclxuXHJcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4vbGF5b3V0J1xyXG5pbXBvcnQgeyBOZXRWIH0gZnJvbSAnLi4vaW5kZXgnXHJcbmltcG9ydCAqIGFzIGQzRm9yY2UgZnJvbSAnZDMtZm9yY2UnXHJcbmltcG9ydCB7IE5vZGVMaW5rRGF0YSB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJ1xyXG5cclxuY2xhc3MgRDNGb3JjZUxheW91dCBleHRlbmRzIExheW91dCB7XHJcbiAgICBwcml2YXRlIHNpbXVsYXRpb25cclxuICAgIHByaXZhdGUgZGF0YTogTm9kZUxpbmtEYXRhXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IobmV0djogTmV0Vikge1xyXG4gICAgICAgIHN1cGVyKG5ldHYpXHJcblxyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5uZXR2LiRfY29uZmlncy53aWR0aFxyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMubmV0di4kX2NvbmZpZ3MuaGVpZ2h0XHJcbiAgICAgICAgLy8gdGhpcy5kYXRhID0gdGhpcy5uZXR2LmRhdGEoKSAvLyBUT0RPOiBtYXliZSBuZWVkIGEgZGVlcCBjb3B5XHJcbiAgICAgICAgdGhpcy5kYXRhID0ge1xyXG4gICAgICAgICAgICBub2RlczogdGhpcy5uZXR2Lm5vZGVzKCkubWFwKChub2RlKSA9PiAoeyBpZDogbm9kZS5pZCgpLCB4OiBub2RlLngoKSwgeTogbm9kZS55KCkgfSkpLFxyXG4gICAgICAgICAgICBsaW5rczogdGhpcy5uZXR2XHJcbiAgICAgICAgICAgICAgICAubGlua3MoKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgobGluaykgPT4gKHsgc291cmNlOiBsaW5rLnNvdXJjZSgpLmlkKCksIHRhcmdldDogbGluay50YXJnZXQoKS5pZCgpIH0pKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNpbXVsYXRpb24gPSBkM0ZvcmNlXHJcbiAgICAgICAgICAgIC5mb3JjZVNpbXVsYXRpb24odGhpcy5kYXRhLm5vZGVzKVxyXG4gICAgICAgICAgICAuZm9yY2UoXHJcbiAgICAgICAgICAgICAgICAnbGluaycsXHJcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBkM0ZvcmNlLmZvcmNlTGluayh0aGlzLmRhdGEubGlua3MpLmlkKChkKSA9PiBkLmlkKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5mb3JjZSgnY2hhcmdlJywgZDNGb3JjZS5mb3JjZU1hbnlCb2R5KCkpXHJcbiAgICAgICAgICAgIC5mb3JjZSgnY2VudGVyJywgZDNGb3JjZS5mb3JjZUNlbnRlcih3aWR0aCAvIDIsIGhlaWdodCAvIDIpKVxyXG4gICAgICAgICAgICAuc3RvcCgpIC8vIGRpc2FibGUgYXV0b3N0YXJ0XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuc2ltdWxhdGlvbi5vbigndGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLm5vZGVzLmZvckVhY2goKG4pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLm5ldHYuZ2V0Tm9kZUJ5SWQobi5pZClcclxuICAgICAgICAgICAgICAgIG5vZGUueChuLngpXHJcbiAgICAgICAgICAgICAgICBub2RlLnkobi55KVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgdGhpcy5uZXR2LmRyYXcoKVxyXG4gICAgICAgICAgICB0aGlzLnRpY2tDYWxsYmFjayAmJiB0aGlzLnRpY2tDYWxsYmFjaygpXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnN0YXJ0Q2FsbGJhY2sgJiYgdGhpcy5zdGFydENhbGxiYWNrKClcclxuICAgICAgICB0aGlzLnNpbXVsYXRpb24ucmVzdGFydCgpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0b3AoKSB7XHJcbiAgICAgICAgdGhpcy5zaW11bGF0aW9uLnN0b3AoKVxyXG4gICAgICAgIHRoaXMuc3RvcENhbGxiYWNrICYmIHRoaXMuc3RvcENhbGxiYWNrKClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmluaXNoKCkge1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgRDNGb3JjZUxheW91dCB9XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIFhpYW9kb25nIFpoYW8gPHpoYW94aWFvZG9uZ0B6anUuZWR1LmNuPlxyXG4gKiBAZGVzY3JpcHRpb24gY29sbGVjdCBhbGwgbGF5b3V0IHJlbGVhdGVkIG9iamVjdHMgYW5kIGV4cG9ydFxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFJhbmRvbUxheW91dCB9IGZyb20gJy4vcmFuZG9tJ1xyXG5pbXBvcnQgeyBEM0ZvcmNlTGF5b3V0IH0gZnJvbSAnLi9kMy1mb3JjZSdcclxuXHJcbmV4cG9ydCB7IFJhbmRvbUxheW91dCwgRDNGb3JjZUxheW91dCB9XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIFhpYW9kb25nIFpoYW9cclxuICogQGRlc2NyaXB0aW9uIEJhc2UgY2xhc3Mgb2YgbGF5b3V0XHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgTmV0ViB9IGZyb20gJy4uL2luZGV4J1xyXG5jbGFzcyBMYXlvdXQge1xyXG4gICAgcHJvdGVjdGVkIG5ldHY6IE5ldFZcclxuICAgIHByb3RlY3RlZCBzdGFydENhbGxiYWNrOiAoKSA9PiB7fVxyXG4gICAgcHJvdGVjdGVkIHRpY2tDYWxsYmFjazogKCkgPT4ge31cclxuICAgIHByb3RlY3RlZCBzdG9wQ2FsbGJhY2s6ICgpID0+IHt9XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG5ldHY6IE5ldFYpIHtcclxuICAgICAgICB0aGlzLm5ldHYgPSBuZXR2XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0KCkge31cclxuICAgIHB1YmxpYyBzdG9wKCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNhbGwgZmluaXNoIHRvIGRpcmVjdCBnZXQgbGF5b3V0IHJlc3VsdCwgd2l0aG91dCB0cmFuc2l0aW9uIGFuaW1hdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZmluaXNoKCkge31cclxuXHJcbiAgICBwdWJsaWMgb25TdGFydChjYjogKCkgPT4ge30pIHtcclxuICAgICAgICB0aGlzLnN0YXJ0Q2FsbGJhY2sgPSBjYlxyXG4gICAgfVxyXG4gICAgcHVibGljIG9uVGljayhjYjogKCkgPT4ge30pIHtcclxuICAgICAgICB0aGlzLnRpY2tDYWxsYmFjayA9IGNiXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25TdG9wKGNiOiAoKSA9PiB7fSkge1xyXG4gICAgICAgIHRoaXMuc3RvcENhbGxiYWNrID0gY2JcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgTGF5b3V0IH1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhb1xyXG4gKiBAZGVzY3JpcHRpb24gcmFuZG9tIGxheW91dCBjbGFzc1xyXG4gKi9cclxuXHJcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4vbGF5b3V0J1xyXG5pbXBvcnQgeyBOZXRWIH0gZnJvbSAnLi4vaW5kZXgnXHJcblxyXG50eXBlIFBvc2l0aW9ucyA9IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVtdXHJcblxyXG4vKipcclxuICogbGluZWFyIGludGVycG9sYXRpb24gZnJvbSBzb3VyY2UgcG9zaXRpb25zIHRvIHRhcmdldCBwb3NpdGlvbnNcclxuICogQHBhcmFtIHNvdXJjZSBzb3VyY2UgcG9zaXRpb25zXHJcbiAqIEBwYXJhbSB0YXJnZXQgdGFyZ2V0IHBvc2l0aW9uc1xyXG4gKiBAcGFyYW0gcmF0aW8gbGVycCByYXRpbywgKDAsIDEpXHJcbiAqL1xyXG5mdW5jdGlvbiBsZXJwUG9zaXRpb24oc291cmNlOiBQb3NpdGlvbnMsIHRhcmdldDogUG9zaXRpb25zLCByYXRpbzogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gQXJyYXkoc291cmNlLmxlbmd0aClcclxuICAgICAgICAuZmlsbCh1bmRlZmluZWQpXHJcbiAgICAgICAgLm1hcCgoXywgaSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gc291cmNlW2ldLnggKyAodGFyZ2V0W2ldLnggLSBzb3VyY2VbaV0ueCkgKiByYXRpb1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gc291cmNlW2ldLnkgKyAodGFyZ2V0W2ldLnkgLSBzb3VyY2VbaV0ueSkgKiByYXRpb1xyXG4gICAgICAgICAgICByZXR1cm4geyB4LCB5IH1cclxuICAgICAgICB9KVxyXG59XHJcblxyXG5jbGFzcyBSYW5kb21MYXlvdXQgZXh0ZW5kcyBMYXlvdXQge1xyXG4gICAgcHJpdmF0ZSBfdGltZTogbnVtYmVyXHJcbiAgICBwcml2YXRlIHNvdXJjZVBvc2l0aW9uczogUG9zaXRpb25zXHJcbiAgICBwcml2YXRlIGN1cnJlbnRQb3NpdGlvbnM6IFBvc2l0aW9uc1xyXG4gICAgcHJpdmF0ZSB0YXJnZXRQb3NpdGlvbnM6IFBvc2l0aW9uc1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihuZXR2OiBOZXRWKSB7XHJcbiAgICAgICAgc3VwZXIobmV0dilcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldCB0b3RhbCBhbmltYXRpb24gdGltZVxyXG4gICAgICogQHBhcmFtIF90aW1lIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdGltZShfdGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fdGltZSA9IF90aW1lXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuY29tcHV0ZVBvc2l0aW9uKClcclxuXHJcbiAgICAgICAgbGV0IHN0YXJ0OiBudW1iZXJcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogYW5pbWF0aW9uIHN0ZXBcclxuICAgICAgICAgKiBAcGFyYW0gdGltZXN0YW1wIFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IHN0ZXAgPSAodGltZXN0YW1wOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0ID0gdGltZXN0YW1wXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0Q2FsbGJhY2sgJiYgdGhpcy5zdGFydENhbGxiYWNrKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBlbGFwc2VkID0gdGltZXN0YW1wIC0gc3RhcnRcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBvc2l0aW9ucyA9IGxlcnBQb3NpdGlvbihcclxuICAgICAgICAgICAgICAgIHRoaXMuc291cmNlUG9zaXRpb25zLFxyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXRQb3NpdGlvbnMsXHJcbiAgICAgICAgICAgICAgICBlbGFwc2VkIC8gdGhpcy5fdGltZVxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICB0aGlzLmFwcGx5UG9zaXRpb24oKVxyXG5cclxuICAgICAgICAgICAgdGhpcy50aWNrQ2FsbGJhY2sgJiYgdGhpcy50aWNrQ2FsbGJhY2soKVxyXG5cclxuICAgICAgICAgICAgaWYgKGVsYXBzZWQgPCB0aGlzLl90aW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcENhbGxiYWNrICYmIHRoaXMuc3RvcENhbGxiYWNrKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RvcCgpIHt9XHJcbiAgICBwdWJsaWMgZmluaXNoKCkge1xyXG4gICAgICAgIHRoaXMuY29tcHV0ZVBvc2l0aW9uKClcclxuICAgICAgICB0aGlzLmN1cnJlbnRQb3NpdGlvbnMgPSB0aGlzLnRhcmdldFBvc2l0aW9uc1xyXG4gICAgICAgIHRoaXMuYXBwbHlQb3NpdGlvbigpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmb3IgcmFuZG9tIGxheW91dCwgY2FuIGRpcmVjdGx5IGNvbXB1dGUgdGFyZ2V0IHBvc2l0aW9uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY29tcHV0ZVBvc2l0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRhcmdldFBvc2l0aW9ucykge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgbm9kZXMgPSB0aGlzLm5ldHYubm9kZXMoKVxyXG4gICAgICAgIHRoaXMuc291cmNlUG9zaXRpb25zID0gbm9kZXMubWFwKChuKSA9PiAoeyB4OiBuLngoKSwgeTogbi55KCkgfSkpXHJcbiAgICAgICAgLy8gcmFuZG9tIHRhcmdldCBwb3NpdGlvblxyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5uZXR2LiRfY29uZmlncy53aWR0aFxyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMubmV0di4kX2NvbmZpZ3MuaGVpZ2h0XHJcbiAgICAgICAgdGhpcy50YXJnZXRQb3NpdGlvbnMgPSBBcnJheSh0aGlzLnNvdXJjZVBvc2l0aW9ucy5sZW5ndGgpXHJcbiAgICAgICAgICAgIC5maWxsKHVuZGVmaW5lZClcclxuICAgICAgICAgICAgLm1hcCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IE1hdGgucmFuZG9tKCkgKiB3aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICB5OiBNYXRoLnJhbmRvbSgpICogaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhcHBseSBuZXcgcG9zaXRpb24gdG8gY2FudmFzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXBwbHlQb3NpdGlvbigpIHtcclxuICAgICAgICBjb25zdCBub2RlcyA9IHRoaXMubmV0di5ub2RlcygpXHJcbiAgICAgICAgbm9kZXMuZm9yRWFjaCgobiwgaSkgPT4ge1xyXG4gICAgICAgICAgICBuLngodGhpcy5jdXJyZW50UG9zaXRpb25zW2ldLngpXHJcbiAgICAgICAgICAgIG4ueSh0aGlzLmN1cnJlbnRQb3NpdGlvbnNbaV0ueSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubmV0di5kcmF3KClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUmFuZG9tTGF5b3V0IH1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgSmlhY2hlbmcgUGFuIDxqYWNraWVhbnhpc0BnbWFpbC5jb20+XHJcbiAqIEBkZXNjcmlwdGlvbiBQcm92aWRlIGEgTGluayBjbGFzcy5cclxuICogQGRlcGVuZGVuY2VzIGludGVyZmFjZXMudHMsIHV0aWxzL2lzLnRzXHJcbiAqL1xyXG5cclxuaW1wb3J0IE5vZGUgZnJvbSAnLi9ub2RlJ1xyXG5pbXBvcnQgKiBhcyBpbnRlcmZhY2VzIGZyb20gJy4vaW50ZXJmYWNlcydcclxuaW1wb3J0IHsgTmV0ViB9IGZyb20gJy4vaW5kZXgnXHJcblxyXG5jbGFzcyBMaW5rIHtcclxuICAgIHB1YmxpYyAkX2NsaWNrQ2FsbGJhY2s6IChsaW5rOiBMaW5rKSA9PiB2b2lkXHJcbiAgICBwdWJsaWMgJF9ob3ZlckNhbGxiYWNrOiAobGluazogTGluaykgPT4gdm9pZFxyXG5cclxuICAgIHByaXZhdGUgJF9jb3JlOiBOZXRWXHJcbiAgICBwcml2YXRlICRfc291cmNlOiBOb2RlXHJcbiAgICBwcml2YXRlICRfdGFyZ2V0OiBOb2RlXHJcbiAgICBwcml2YXRlICRfc3Ryb2tlV2lkdGg6IG51bWJlclxyXG4gICAgcHJpdmF0ZSAkX3N0cm9rZUNvbG9yOiBpbnRlcmZhY2VzLkNvbG9yXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvcmUsIGxpbmtEYXRhOiBpbnRlcmZhY2VzLkxpbmtEYXRhKSB7XHJcbiAgICAgICAgdGhpcy4kX2NvcmUgPSBjb3JlXHJcbiAgICAgICAgY29uc3QgZGVmYXVsdENvbmZpZ3MgPSB0aGlzLiRfY29yZS4kX2NvbmZpZ3NcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICAuLi57XHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogZGVmYXVsdENvbmZpZ3MubGluay5zdHJva2VXaWR0aCxcclxuICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiBkZWZhdWx0Q29uZmlncy5saW5rLnN0cm9rZUNvbG9yLFxyXG4gICAgICAgICAgICAgICAgY2xpY2tDYWxsYmFjazogZGVmYXVsdENvbmZpZ3MubGluay5jbGlja0NhbGxiYWNrLFxyXG4gICAgICAgICAgICAgICAgaG92ZXJDYWxsYmFjazogZGVmYXVsdENvbmZpZ3MubGluay5ob3ZlckNhbGxiYWNrXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC4uLmxpbmtEYXRhXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzb3VyY2VOb2RlID0gdGhpcy4kX2NvcmUuZ2V0Tm9kZUJ5SWQoZGF0YS5zb3VyY2UpXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IHRoaXMuJF9jb3JlLmdldE5vZGVCeUlkKGRhdGEudGFyZ2V0KVxyXG4gICAgICAgIHRoaXMuc291cmNlVGFyZ2V0KHtcclxuICAgICAgICAgICAgc291cmNlOiBzb3VyY2VOb2RlLFxyXG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldE5vZGVcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLiRfc3Ryb2tlV2lkdGggPSBkYXRhLnN0cm9rZVdpZHRoXHJcbiAgICAgICAgdGhpcy4kX3N0cm9rZUNvbG9yID0gZGF0YS5zdHJva2VDb2xvclxyXG5cclxuICAgICAgICB0aGlzLnNldENsaWNrQ2FsbGJhY2soZGF0YS5jbGlja0NhbGxiYWNrKVxyXG4gICAgICAgIHRoaXMuc2V0SG92ZXJDYWxsYmFjayhkYXRhLmhvdmVyQ2FsbGJhY2spXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXR0ZXIvc2V0dGVyIG9mIHRoZSBzb3VyY2VcclxuICAgICAqIEBwYXJhbSB7Tm9kZX0gW25vZGVdXHJcbiAgICAgKiBAcmV0dXJucyB7Tm9kZX0gYSBzb3VyY2UgTm9kZSBPYmplY3RcclxuICAgICAqIEBtZW1iZXJvZiBMaW5rXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzb3VyY2Uobm9kZT86IE5vZGUpIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAvLyBzZXR0ZXJcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VUYXJnZXQoe1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiBub2RlLFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLiRfdGFyZ2V0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfc291cmNlXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXR0ZXIvc2V0dGVyIG9mIHRoZSB0YXJnZXRcclxuICAgICAqIEBwYXJhbSB7Tm9kZX0gW25vZGVdXHJcbiAgICAgKiBAcmV0dXJucyB7Tm9kZX0gYSB0YXJnZXQgTm9kZSBPYmplY3RcclxuICAgICAqIEBtZW1iZXJvZiBMaW5rXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0YXJnZXQobm9kZT86IE5vZGUpIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAvLyBzZXR0ZXJcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VUYXJnZXQoe1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiB0aGlzLiRfc291cmNlLFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBub2RlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfdGFyZ2V0XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXR0ZXIvc2V0dGVyIG9mIHNvdXJjZSBhbmQgdGFyZ2V0XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzb3VyY2VUYXJnZXRPYmp9IFt7c291cmNlOiBOb2RlLCB0YXJnZXQ6IE5vZGV9XVxyXG4gICAgICogQHJldHVybnMgT2JqZWN0IHtzb3VyY2U6IE5vZGUsIHRhcmdldDogTm9kZX1cclxuICAgICAqIEBtZW1iZXJvZiBMaW5rXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzb3VyY2VUYXJnZXQoc291cmNlVGFyZ2V0T2JqPzogeyBzb3VyY2U6IE5vZGU7IHRhcmdldDogTm9kZSB9KSB7XHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9sZFNvdXJjZTogTm9kZSA9IHRoaXMuJF9zb3VyY2VcclxuICAgICAgICAgICAgY29uc3Qgb2xkVGFyZ2V0OiBOb2RlID0gdGhpcy4kX3RhcmdldFxyXG4gICAgICAgICAgICBjb25zdCBuZXdTb3VyY2UgPSBzb3VyY2VUYXJnZXRPYmouc291cmNlXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1RhcmdldCA9IHNvdXJjZVRhcmdldE9iai50YXJnZXRcclxuICAgICAgICAgICAgY29uc3QgbmV3U291cmNlSWQgPSBuZXdTb3VyY2UuaWQoKVxyXG4gICAgICAgICAgICBjb25zdCBuZXdUYXJnZXRJZCA9IG5ld1RhcmdldC5pZCgpXHJcblxyXG4gICAgICAgICAgICBpZiAobmV3U291cmNlID09PSBuZXdUYXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGVycm9yOiBzZWxmIGxvb3BcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgU2VsZiBsb29wICgke25ld1NvdXJjZUlkfSA8PT4gJHtuZXdUYXJnZXRJZH0pIGlzIG5vdCBhbGxvd2VkLmApXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRfY29yZS4kX2VuZHMybGluay5oYXMoW25ld1NvdXJjZUlkLCBuZXdUYXJnZXRJZF0pKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBlcnJvcjogbXVsdGlwbGUgbGlua1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBsaW5rICgke25ld1NvdXJjZUlkfSA8PT4gJHtuZXdUYXJnZXRJZH0pIGlzIG5vdCBhbGxvd2QuYClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG9sZFNvdXJjZSAmJiBvbGRUYXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSBvbGQgTWFwXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRfY29yZS4kX2VuZHMybGluay5kZWxldGUoW29sZFNvdXJjZS5pZCgpLCBvbGRUYXJnZXQuaWQoKV0pXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9zb3VyY2VJZDJsaW5rcy5nZXQob2xkU291cmNlLmlkKCkpPy5kZWxldGUodGhpcylcclxuICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfdGFyZ2V0SWQybGlua3MuZ2V0KG9sZFRhcmdldC5pZCgpKT8uZGVsZXRlKHRoaXMpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuJF9zb3VyY2UgPSBuZXdTb3VyY2VcclxuICAgICAgICAgICAgdGhpcy4kX3RhcmdldCA9IG5ld1RhcmdldFxyXG4gICAgICAgICAgICB0aGlzLiRfY29yZS4kX2VuZHMybGluay5zZXQoW25ld1NvdXJjZUlkLCBuZXdUYXJnZXRJZF0sIHRoaXMpXHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuJF9jb3JlLiRfc291cmNlSWQybGlua3MuaGFzKG5ld1NvdXJjZUlkKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9zb3VyY2VJZDJsaW5rcy5zZXQobmV3U291cmNlSWQsIG5ldyBTZXQoW3RoaXNdKSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfc291cmNlSWQybGlua3MuZ2V0KG5ld1NvdXJjZUlkKS5hZGQodGhpcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuJF9jb3JlLiRfdGFyZ2V0SWQybGlua3MuaGFzKG5ld1RhcmdldElkKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF90YXJnZXRJZDJsaW5rcy5zZXQobmV3VGFyZ2V0SWQsIG5ldyBTZXQoW3RoaXNdKSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfdGFyZ2V0SWQybGlua3MuZ2V0KG5ld1RhcmdldElkKS5hZGQodGhpcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzb3VyY2U6IHRoaXMuJF9zb3VyY2UsXHJcbiAgICAgICAgICAgIHRhcmdldDogdGhpcy4kX3RhcmdldFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldC9nZXQgc3Ryb2tlIHdpZHRoIG9mIGEgbm9kZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFt2YWx1ZV1cclxuICAgICAqIEBtZW1iZXJvZiBOb2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdHJva2VXaWR0aCh2YWx1ZT86IG51bWJlcikge1xyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9zdHJva2VXaWR0aCA9IHZhbHVlXHJcbiAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfcmVuZGVyZXIubGlua01hbmFnZXIuY2hhbmdlQXR0cmlidXRlKHRoaXMsICdzdHJva2VXaWR0aCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfc3Ryb2tlV2lkdGhcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldC9nZXQgc3Ryb2tlIGNvbG9yIG9mIGEgbm9kZVxyXG4gICAgICogQHBhcmFtIHtDb2xvcn0gW3ZhbHVlXVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3Ryb2tlQ29sb3IodmFsdWU/OiBpbnRlcmZhY2VzLkNvbG9yKSB7XHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy4kX3N0cm9rZUNvbG9yID0gdmFsdWVcclxuICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9yZW5kZXJlci5saW5rTWFuYWdlci5jaGFuZ2VBdHRyaWJ1dGUodGhpcywgJ3N0cm9rZUNvbG9yJylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9zdHJva2VDb2xvclxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0IGhvdmVyIGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgaG92ZXIgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzZXRIb3ZlckNhbGxiYWNrKGNhbGxiYWNrOiAobGluazogTGluaykgPT4gdm9pZCkge1xyXG4gICAgICAgIHRoaXMuJF9ob3ZlckNhbGxiYWNrID0gY2FsbGJhY2tcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldCBjbGljayBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIGNsaWNrIGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc2V0Q2xpY2tDYWxsYmFjayhjYWxsYmFjazogKGxpbms6IExpbmspID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLiRfY2xpY2tDYWxsYmFjayA9IGNhbGxiYWNrXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgSmlhY2hlbmcgUGFuIDxqYWNraWVhbnhpc0BnbWFpbC5jb20+XHJcbiAqIEBkZXNjcmlwdGlvbiBQcm92aWRlIGEgTm9kZSBjbGFzcy5cclxuICogQGRlcGVuZGVuY2VzIGludGVyZmFjZXMudHMsIHV0aWxzL2lzLnRzXHJcbiAqL1xyXG5cclxuaW1wb3J0ICogYXMgaW50ZXJmYWNlcyBmcm9tICcuL2ludGVyZmFjZXMnXHJcbmltcG9ydCB7IGlzVmFsaWRJZCB9IGZyb20gJy4vdXRpbHMvaXMnXHJcbmltcG9ydCB7IE5ldFYgfSBmcm9tICcuL2luZGV4J1xyXG5pbXBvcnQgeyBMaW5rQXR0ciB9IGZyb20gJy4vcmVuZGVyZXIvaW50ZXJmYWNlcydcclxuaW1wb3J0IExpbmsgZnJvbSAnLi9saW5rJ1xyXG5cclxuY2xhc3MgTm9kZSB7XHJcbiAgICBwdWJsaWMgJF9jbGlja0NhbGxiYWNrOiAobm9kZTogTm9kZSkgPT4gdm9pZFxyXG4gICAgcHVibGljICRfaG92ZXJDYWxsYmFjazogKG5vZGU6IE5vZGUpID0+IHZvaWRcclxuXHJcbiAgICBwcml2YXRlICRfY29yZTogTmV0VlxyXG4gICAgcHJpdmF0ZSAkX2lkOiBzdHJpbmdcclxuICAgIHByaXZhdGUgJF9wb3NpdGlvbiA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgIH1cclxuICAgIHByaXZhdGUgJF9zdHJva2VXaWR0aDogbnVtYmVyXHJcbiAgICBwcml2YXRlICRfc3Ryb2tlQ29sb3I6IGludGVyZmFjZXMuQ29sb3JcclxuICAgIHByaXZhdGUgJF9maWxsOiBpbnRlcmZhY2VzLkNvbG9yXHJcbiAgICBwcml2YXRlICRfcjogbnVtYmVyIC8vIHJhZGl1c1xyXG4gICAgcHJpdmF0ZSAkX3Nob3dMYWJlbDogYm9vbGVhblxyXG4gICAgcHJpdmF0ZSAkX3RleHQ6IHN0cmluZ1xyXG4gICAgcHJpdmF0ZSAkX3RleHRPZmZzZXQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSAvLyBOT1RFOiBkZXByZWNhdGVkLCBjdXJyZW50IG5vdCB1c2VkXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvcmUsIG5vZGVEYXRhOiBpbnRlcmZhY2VzLk5vZGVEYXRhKSB7XHJcbiAgICAgICAgdGhpcy4kX2NvcmUgPSBjb3JlXHJcbiAgICAgICAgY29uc3QgZGVmYXVsdENvbmZpZ3MgPSB0aGlzLiRfY29yZS4kX2NvbmZpZ3NcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICAuLi57XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLiRfcG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgIHk6IHRoaXMuJF9wb3NpdGlvbi55LFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IGRlZmF1bHRDb25maWdzLm5vZGUuc3Ryb2tlV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogZGVmYXVsdENvbmZpZ3Mubm9kZS5zdHJva2VDb2xvcixcclxuICAgICAgICAgICAgICAgIHI6IGRlZmF1bHRDb25maWdzLm5vZGUucixcclxuICAgICAgICAgICAgICAgIGZpbGw6IGRlZmF1bHRDb25maWdzLm5vZGUuZmlsbCxcclxuICAgICAgICAgICAgICAgIHNob3dMYWJlbDogZGVmYXVsdENvbmZpZ3Mubm9kZS5zaG93TGFiZWwsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBkZWZhdWx0Q29uZmlncy5ub2RlLnRleHQsXHJcbiAgICAgICAgICAgICAgICBjbGlja0NhbGxiYWNrOiBkZWZhdWx0Q29uZmlncy5ub2RlLmNsaWNrQ2FsbGJhY2ssXHJcbiAgICAgICAgICAgICAgICBob3ZlckNhbGxiYWNrOiBkZWZhdWx0Q29uZmlncy5ub2RlLmhvdmVyQ2FsbGJhY2tcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLi4ubm9kZURhdGFcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuJF9zZXRJZChkYXRhLmlkKVxyXG4gICAgICAgIHRoaXMuJF9wb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgeDogZGF0YS54LFxyXG4gICAgICAgICAgICB5OiBkYXRhLnlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy4kX3N0cm9rZVdpZHRoID0gZGF0YS5zdHJva2VXaWR0aFxyXG4gICAgICAgIHRoaXMuJF9zdHJva2VDb2xvciA9IGRhdGEuc3Ryb2tlQ29sb3JcclxuICAgICAgICB0aGlzLiRfZmlsbCA9IGRhdGEuZmlsbFxyXG4gICAgICAgIHRoaXMuJF9yID0gZGF0YS5yXHJcbiAgICAgICAgdGhpcy4kX3Nob3dMYWJlbCA9IGRhdGEuc2hvd0xhYmVsXHJcbiAgICAgICAgdGhpcy4kX3RleHQgPSBkYXRhLnRleHRcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuJF9zaG93TGFiZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93TGFiZWwodHJ1ZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0Q2xpY2tDYWxsYmFjayhkYXRhLmNsaWNrQ2FsbGJhY2spXHJcbiAgICAgICAgdGhpcy5zZXRIb3ZlckNhbGxiYWNrKGRhdGEuaG92ZXJDYWxsYmFjaylcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldHRlciBvZiBwcml2YXRlIHByb3BlcnR5ICRfaWRcclxuICAgICAqIEBtZW1iZXJvZiBOb2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kX2lkXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQvZ2V0IHggcG9zdGlvblxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFt2YWx1ZV1cclxuICAgICAqIEBtZW1iZXJvZiBOb2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB4KHZhbHVlPzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24oe1xyXG4gICAgICAgICAgICAgICAgeDogdmFsdWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9wb3NpdGlvbi54XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQvZ2V0IHkgcG9zdGlvblxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFt2YWx1ZV1cclxuICAgICAqIEBtZW1iZXJvZiBOb2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB5KHZhbHVlPzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24oe1xyXG4gICAgICAgICAgICAgICAgeTogdmFsdWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9wb3NpdGlvbi55XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQvZ2V0IHBvc3Rpb25cclxuICAgICAqIEBtZW1iZXJvZiBOb2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3NpdGlvbihwb3NpdGlvbj86IGludGVyZmFjZXMuUG9zaXRpb24pIHtcclxuICAgICAgICBsZXQgbGlua1NldHMgPSB7fVxyXG5cclxuICAgICAgICAvLyBlLmcuIHNldE9uZVBvc2l0aW9uKCd4JywgMSkgbWVhbnMgc2V0IHggcG9zaXRpb24gd2l0aCB2YWx1ZSAxXHJcbiAgICAgICAgY29uc3Qgc2V0T25lUG9zaXRpb24gPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRfcG9zaXRpb25ba2V5XSA9IHZhbHVlIC8vIGtleTogJ3gnIG9yICd5J1xyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhsaW5rU2V0cykuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGVudHJ5WzBdOiAnc291cmNlJyAvICd0YXJnZXQnXHJcbiAgICAgICAgICAgICAgICAvLyBlbnRyeVsxXTogdGhlIGxpbmsgc2V0XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbnRyeVswXSBhcyBMaW5rQXR0clxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2V0ID0gZW50cnlbMV0gYXMgU2V0PExpbms+XHJcbiAgICAgICAgICAgICAgICBpZiAoc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9hZGRNb2RpZmllZExpbmtDb3VudChzZXQuc2l6ZSlcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGxpbmsgb2Ygc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfcmVuZGVyZXIubGlua01hbmFnZXIuY2hhbmdlQXR0cmlidXRlKGxpbmssIGtleSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgKCd4JyBpbiBwb3NpdGlvbiB8fCAneScgaW4gcG9zaXRpb24pKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRfY29yZS4kX2xhenlVcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICgneCcgaW4gcG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRfcG9zaXRpb25bJ3gnXSA9IHBvc2l0aW9uLnhcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICgneScgaW4gcG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRfcG9zaXRpb25bJ3knXSA9IHBvc2l0aW9uLnlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRfcG9zaXRpb25cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaW5rU2V0cyA9IHtcclxuICAgICAgICAgICAgICAgIC8vIGZpbmQgbGlua3MgZnJvbS90byB0aGlzIG5vZGVcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogdGhpcy4kX2NvcmUuJF9zb3VyY2VJZDJsaW5rcy5nZXQodGhpcy4kX2lkKSxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy4kX2NvcmUuJF90YXJnZXRJZDJsaW5rcy5nZXQodGhpcy4kX2lkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgneCcgaW4gcG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHNldE9uZVBvc2l0aW9uKCd4JywgcG9zaXRpb24ueClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoJ3knIGluIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRPbmVQb3NpdGlvbigneScsIHBvc2l0aW9uLnkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9yZW5kZXJlci5ub2RlTWFuYWdlci5jaGFuZ2VBdHRyaWJ1dGUodGhpcywgJ3Bvc2l0aW9uJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfcG9zaXRpb25cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldC9nZXQgc3Ryb2tlIHdpZHRoIG9mIGEgbm9kZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFt2YWx1ZV1cclxuICAgICAqIEBtZW1iZXJvZiBOb2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdHJva2VXaWR0aCh2YWx1ZT86IG51bWJlcikge1xyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9zdHJva2VXaWR0aCA9IHZhbHVlXHJcbiAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfcmVuZGVyZXIubm9kZU1hbmFnZXIuY2hhbmdlQXR0cmlidXRlKHRoaXMsICdzdHJva2VXaWR0aCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfc3Ryb2tlV2lkdGhcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldC9nZXQgc3Ryb2tlIGNvbG9yIG9mIGEgbm9kZVxyXG4gICAgICogQHBhcmFtIHtDb2xvcn0gW3ZhbHVlXVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3Ryb2tlQ29sb3IodmFsdWU/OiBpbnRlcmZhY2VzLkNvbG9yKSB7XHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy4kX3N0cm9rZUNvbG9yID0gdmFsdWVcclxuICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9yZW5kZXJlci5ub2RlTWFuYWdlci5jaGFuZ2VBdHRyaWJ1dGUodGhpcywgJ3N0cm9rZUNvbG9yJylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9zdHJva2VDb2xvclxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0L2dldCBmaWxsIGNvbG9yIG9mIGEgbm9kZVxyXG4gICAgICogQHBhcmFtIHtDb2xvcn0gW3ZhbHVlXVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZmlsbCh2YWx1ZT86IGludGVyZmFjZXMuQ29sb3IpIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLiRfZmlsbCA9IHZhbHVlXHJcbiAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfcmVuZGVyZXIubm9kZU1hbmFnZXIuY2hhbmdlQXR0cmlidXRlKHRoaXMsICdmaWxsJylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9maWxsXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQvZ2V0IHJhZGl1cyBvZiBhIG5vZGVcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbcl1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHIodmFsdWU/OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLiRfciA9IHZhbHVlXHJcbiAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfcmVuZGVyZXIubm9kZU1hbmFnZXIuY2hhbmdlQXR0cmlidXRlKHRoaXMsICdyYWRpdXMnKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy4kX3JcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNvbnRyb2wgbGFiZWwgc2hvdyBvciBub3RcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2hvd0xhYmVsKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy4kX3Nob3dMYWJlbCA9IHZhbHVlXHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9jb3JlLmxhYmVsTWFuYWdlci5kcmF3TGFiZWwodGhpcylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLiRfY29yZS5sYWJlbE1hbmFnZXIucmVtb3ZlTGFiZWwodGhpcylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXQvc2V0IG5vZGUncyBsYWJlbFxyXG4gICAgICogQHBhcmFtIHZhbHVlIGxhYmVsIHRleHRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHRleHQodmFsdWU/OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy4kX3RleHQgPSB2YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy4kX3RleHRcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldC9zZXQgb2Zmc2V0IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgb2Zmc2V0IHZhbHVlXHJcbiAgICAgKiBAZGVwcmVjYXRlZCBub3QgdXNlZCBjdXJyZW50bHksIG5vdCBzdXBwb3J0IHNldCBub2RlJ3MgbGFiZWwgb2Zmc2V0IGluZGl2aWR1YWxseVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdGV4dE9mZnNldCh2YWx1ZT86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLiRfdGV4dE9mZnNldCA9IHZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfdGV4dE9mZnNldFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0IHRoZSBpZCBvZiB0aGlzIG5vZGUuXHJcbiAgICAgKiBpdCBpcyBvbmx5IHVzZWQgZm9yIGNvbnN0cnVjdG9yXHJcbiAgICAgKiBiZWNhdXNlIGEgbm9kZSdzIGlkIGlzIG5vdCBhbGxvd2VkIHRvIGJlIGNoYW5nZWQuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXHJcbiAgICAgKiBAcmV0dXJucyBub3RoaW5nXHJcbiAgICAgKiBAbWVtYmVyb2YgTm9kZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlICRfc2V0SWQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChpc1ZhbGlkSWQodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRfY29yZS4kX2lkMm5vZGUuaGFzKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEdXBsaWNhdGUgbm9kZSAoJHt2YWx1ZX0pIGlzIG5vdCBhbGxvd2VkLmApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzVmFsaWRJZCh0aGlzLiRfaWQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3QgY2hhbmdlIHRoZSBpZCBvZiBhbiBleGlzdCBub2RlLicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9pZDJub2RlLnNldCh2YWx1ZSwgdGhpcylcclxuICAgICAgICAgICAgdGhpcy4kX2lkID0gdmFsdWVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgSUQgJHt2YWx1ZX1gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldCBob3ZlciBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIGhvdmVyIGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc2V0SG92ZXJDYWxsYmFjayhjYWxsYmFjazogKG5vZGU6IE5vZGUpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLiRfaG92ZXJDYWxsYmFjayA9IGNhbGxiYWNrXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQgY2xpY2sgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBjbGljayBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNldENsaWNrQ2FsbGJhY2soY2FsbGJhY2s6IChub2RlOiBOb2RlKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy4kX2NsaWNrQ2FsbGJhY2sgPSBjYWxsYmFja1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb2RlXHJcbiIsImV4cG9ydCBkZWZhdWx0IFwiI3ZlcnNpb24gMzAwIGVzXFxyXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcbmluIHZlYzQgY29sb3I7XFxyXFxuXFxyXFxub3V0IHZlYzQgZnJhZ21lbnRDb2xvcjtcXHJcXG5cXHJcXG52b2lkIG1haW4odm9pZCkge1xcclxcbiAgICBmcmFnbWVudENvbG9yID0gdmVjNChjb2xvci5yZ2IgKiBjb2xvci5hLCBjb2xvci5hKTtcXHJcXG59XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIjdmVyc2lvbiAzMDAgZXNcXHJcXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxyXFxuaW4gdmVjNCBjb2xvcjtcXHJcXG5cXHJcXG5pbiB2ZWM0IGlkO1xcclxcblxcclxcbi8vIFRPRE86IGFsbCBpZCByZWxhdGVkIHNoYWRlciBuZWVkIGNsZWFuIHVwXFxyXFxub3V0IHZlYzQgZnJhZ21lbnRDb2xvcjtcXHJcXG5cXHJcXG52b2lkIG1haW4odm9pZCkge1xcclxcbiAgICBmcmFnbWVudENvbG9yID0gaWQ7XFxyXFxufVwiOyIsImV4cG9ydCBkZWZhdWx0IFwiI3ZlcnNpb24gMzAwIGVzXFxyXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcbmluIHZlYzMgaW5WZXJ0ZXhQb3M7XFxyXFxuaW4gdmVjMiBpblNvdXJjZVBvc2l0aW9uO1xcclxcbmluIHZlYzIgaW5UYXJnZXRQb3NpdGlvbjtcXHJcXG5pbiBmbG9hdCBpblN0cm9rZVdpZHRoO1xcclxcbmluIHZlYzQgaW5TdHJva2VDb2xvcjtcXHJcXG5cXHJcXG5pbiB2ZWM0IGluSWQ7XFxyXFxuXFxyXFxub3V0IHZlYzQgY29sb3I7XFxyXFxuXFxyXFxub3V0IHZlYzQgaWQ7XFxyXFxuXFxyXFxudW5pZm9ybSBtYXQzIHByb2plY3Rpb247XFxyXFxudW5pZm9ybSB2ZWMyIHNjYWxlO1xcclxcbnVuaWZvcm0gdmVjMiB0cmFuc2xhdGU7XFxyXFxuXFxyXFxudm9pZCBtYWluKHZvaWQpIHtcXHJcXG4gICAgaWQgPSBpbklkO1xcclxcblxcclxcbiAgICBjb2xvciA9IGluU3Ryb2tlQ29sb3I7XFxyXFxuXFxyXFxuICAgIHZlYzIgc291cmNlID0gaW5Tb3VyY2VQb3NpdGlvbiAqIHNjYWxlICsgdHJhbnNsYXRlO1xcclxcbiAgICB2ZWMyIHRhcmdldCA9IGluVGFyZ2V0UG9zaXRpb24gKiBzY2FsZSArIHRyYW5zbGF0ZTtcXHJcXG4gICAgdmVjMiBkZWx0YSA9IHNvdXJjZSAtIHRhcmdldDtcXHJcXG4gICAgdmVjMiBjZW50ZXIgPSAwLjUgKiAoc291cmNlICsgdGFyZ2V0KTtcXHJcXG4gICAgZmxvYXQgbGVuID0gbGVuZ3RoKGRlbHRhKTtcXHJcXG4gICAgZmxvYXQgcGhpID0gYXRhbihkZWx0YS55IC8gZGVsdGEueCk7XFxyXFxuXFxyXFxuICAgIG1hdDMgbGluZV9zY2FsZSA9IG1hdDMoXFxyXFxuICAgICAgICBsZW4sIDAsIDAsXFxyXFxuICAgICAgICAwLCBpblN0cm9rZVdpZHRoLCAwLFxcclxcbiAgICAgICAgMCwgMCwgMVxcclxcbiAgICApO1xcclxcbiAgICBtYXQzIGxpbmVfcm90YXRlID0gbWF0MyhcXHJcXG4gICAgICAgIGNvcyhwaGkpLCBzaW4ocGhpKSwgMCxcXHJcXG4gICAgICAgIC1zaW4ocGhpKSwgY29zKHBoaSksIDAsXFxyXFxuICAgICAgICAwLCAwLCAxXFxyXFxuICAgICk7XFxyXFxuICAgIG1hdDMgbGluZV90cmFuc2xhdGUgPSBtYXQzKFxcclxcbiAgICAgICAgMSwgMCwgMCxcXHJcXG4gICAgICAgIDAsIDEsIDAsXFxyXFxuICAgICAgICBjZW50ZXIueCwgY2VudGVyLnksIDFcXHJcXG4gICAgKTtcXHJcXG4gICAgXFxyXFxuICAgIG1hdDMgdHJhbnNmb3JtID0gbGluZV90cmFuc2xhdGUgKiBsaW5lX3JvdGF0ZSAqIGxpbmVfc2NhbGU7XFxyXFxuXFxyXFxuICAgIGdsX1Bvc2l0aW9uID0gdmVjNChwcm9qZWN0aW9uICogdHJhbnNmb3JtICogaW5WZXJ0ZXhQb3MsIDEuKTtcXHJcXG59XCI7IiwiLyoqXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XHJcbiAqIEBkZXNjcmlwdGlvbiBMaW5rIHVzZWQgaW4gcmVuZGVyZXJcclxuICovXHJcblxyXG5pbXBvcnQgdmVydFNoYWRlclN0ciBmcm9tICcuL3ZlcnRleC5nbHNsJ1xyXG5pbXBvcnQgZnJhZ1NoYWRlclN0ciBmcm9tICcuL2ZyYWdtZW50Lmdsc2wnXHJcbmltcG9ydCBpZFZlcnRTaGFkZXJTdHIgZnJvbSAnLi9pZC12ZXJ0ZXguZ2xzbCdcclxuaW1wb3J0IGlkRnJhZ1NoYWRlclN0ciBmcm9tICcuL2lkLWZyYWdtZW50Lmdsc2wnXHJcbmltcG9ydCB7XHJcbiAgICBjcmVhdGVQcm9ncmFtLFxyXG4gICAgY3JlYXRlQXJyYXlCdWZmZXIsXHJcbiAgICBleHRyYWN0QXR0cmlidXRlc0Zyb21TaGFkZXIsXHJcbiAgICBlbmNvZGVSZW5kZXJJZFxyXG59IGZyb20gJy4uLy4uL3V0aWxzJ1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyBSZW5kZXJBdHRyaWJ1dGUsIExpbmtBdHRyLCBMaW5rTWFuYWdlckNvbmZpZ3MgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgTGluayBmcm9tICcuLi8uLi8uLi9saW5rJ1xyXG5pbXBvcnQgTWFwMiBmcm9tICcuLi8uLi8uLi91dGlscy9tYXAyJ1xyXG5cclxuZW51bSBMaW5rQXR0cktleSB7XHJcbiAgICBURU1QTEFURSxcclxuICAgIFNPVVJDRSxcclxuICAgIFRBUkdFVCxcclxuICAgIFdJRFRILFxyXG4gICAgQ09MT1JcclxufVxyXG5cclxuZW51bSBMaW5rSWRBdHRyS2V5IHtcclxuICAgIFRFTVBMQVRFLFxyXG4gICAgU09VUkNFLFxyXG4gICAgVEFSR0VULFxyXG4gICAgV0lEVEgsXHJcbiAgICBDT0xPUixcclxuICAgIElEXHJcbn1cclxuXHJcbmNvbnN0IExpbmtBdHRyTWFwID0ge1xyXG4gICAgc291cmNlOiBMaW5rQXR0cktleS5TT1VSQ0UsXHJcbiAgICB0YXJnZXQ6IExpbmtBdHRyS2V5LlRBUkdFVCxcclxuICAgIHN0cm9rZVdpZHRoOiBMaW5rQXR0cktleS5XSURUSCxcclxuICAgIHN0cm9rZUNvbG9yOiBMaW5rQXR0cktleS5DT0xPUlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVuZGVyTGlua01hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dFxyXG4gICAgcHJpdmF0ZSBsaW1pdDogbnVtYmVyXHJcbiAgICBwcml2YXRlIGNvdW50ID0gMFxyXG4gICAgcHJpdmF0ZSB3aWR0aDogbnVtYmVyXHJcbiAgICBwcml2YXRlIGhlaWdodDogbnVtYmVyXHJcbiAgICBwcml2YXRlIHBpeGVsUmF0aW86IG51bWJlclxyXG4gICAgcHJpdmF0ZSBwcm9ncmFtOiBXZWJHTFByb2dyYW1cclxuICAgIHByaXZhdGUgYXR0cmlidXRlczogUmVuZGVyQXR0cmlidXRlXHJcbiAgICBwcml2YXRlIGlkUHJvZ3JhbTogV2ViR0xQcm9ncmFtXHJcbiAgICBwcml2YXRlIGlkQXR0cmlidXRlczogUmVuZGVyQXR0cmlidXRlXHJcbiAgICBwcml2YXRlIGlkVGV4dHVyZTogV2ViR0xUZXh0dXJlXHJcbiAgICBwcml2YXRlIHJlbmRlcklkVG9JZHM6IHsgW2tleTogbnVtYmVyXTogW3N0cmluZywgc3RyaW5nXSB9XHJcblxyXG4gICAgcHJpdmF0ZSBpZHNUb0luZGV4ID0gbmV3IE1hcDIoKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlIHJlbmRlciBsaW5rIG1hbmFnZXJcclxuICAgICAqIEBwYXJhbSBnbCBXZWJHTCBjb250ZXh0XHJcbiAgICAgKiBAcGFyYW0gcGFyYW1zIG5lc3Nlc2FyeSBjb25maWdzIGZvciBsaW5rIG1hbmFnZXJcclxuICAgICAqIEBwYXJhbSBpZFRleHR1cmUgdGV4dHVyZSBzdG9yZSBlbGVtZW50cyBpZCBvZiBlYWNoIHBpeGVsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICBnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dCxcclxuICAgICAgICBwYXJhbXM6IExpbmtNYW5hZ2VyQ29uZmlncyxcclxuICAgICAgICBpZFRleHR1cmU6IFdlYkdMVGV4dHVyZVxyXG4gICAgKSB7XHJcbiAgICAgICAgY29uc3QgeyBsaW1pdCwgd2lkdGgsIGhlaWdodCB9ID0gcGFyYW1zXHJcbiAgICAgICAgdGhpcy5nbCA9IGdsXHJcbiAgICAgICAgdGhpcy5saW1pdCA9IGxpbWl0XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoXHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcclxuICAgICAgICB0aGlzLnBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxXHJcblxyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IGV4dHJhY3RBdHRyaWJ1dGVzRnJvbVNoYWRlcih2ZXJ0U2hhZGVyU3RyKVxyXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0odGhpcy5nbCwgdmVydFNoYWRlclN0ciwgZnJhZ1NoYWRlclN0ciwgdGhpcy5hdHRyaWJ1dGVzKVxyXG5cclxuICAgICAgICB0aGlzLmlkQXR0cmlidXRlcyA9IGV4dHJhY3RBdHRyaWJ1dGVzRnJvbVNoYWRlcihpZFZlcnRTaGFkZXJTdHIpXHJcbiAgICAgICAgdGhpcy5pZFByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKHRoaXMuZ2wsIGlkVmVydFNoYWRlclN0ciwgaWRGcmFnU2hhZGVyU3RyLCB0aGlzLmlkQXR0cmlidXRlcylcclxuICAgICAgICB0aGlzLmlkVGV4dHVyZSA9IGlkVGV4dHVyZVxyXG4gICAgICAgIHRoaXMucmVuZGVySWRUb0lkcyA9IHt9XHJcblxyXG4gICAgICAgIC8vIGluaXQgYXJyYXlzXHJcbiAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW0xpbmtBdHRyS2V5LlRFTVBMQVRFXS5hcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgICAgICAgICAtMC41LCAwLjUsIDEuMCxcclxuICAgICAgICAgICAgLTAuNSwgLTAuNSwgMS4wLFxyXG4gICAgICAgICAgICAwLjUsIDAuNSwgMS4wLFxyXG4gICAgICAgICAgICAwLjUsIC0wLjUsIDEuMCxcclxuICAgICAgICBdKVxyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghYXR0ci5pc0J1aWxkSW4pIGF0dHIuYXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KGF0dHIuc2l6ZSAqIHRoaXMubGltaXQpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gaW5pdCBidWZmZXJzXHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIpID0+IHtcclxuICAgICAgICAgICAgYXR0ci5idWZmZXIgPSBjcmVhdGVBcnJheUJ1ZmZlcih0aGlzLmdsLCBhdHRyLmFycmF5KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIGluaXQgaWQgYXR0cmlidXRlcyBhbmQgYnVmZmVyc1xyXG4gICAgICAgIC8vIFRPRE86IGhhcmRjb2RlIGNoZWNrLCBuZWVkIHJlZmFjdG9yXHJcbiAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0ciwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpZHggPCB0aGlzLmF0dHJpYnV0ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkQXR0cmlidXRlc1tpZHhdID0gdGhpcy5hdHRyaWJ1dGVzW2lkeF1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghYXR0ci5pc0J1aWxkSW4pIGF0dHIuYXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KGF0dHIuc2l6ZSAqIHRoaXMubGltaXQpXHJcbiAgICAgICAgICAgICAgICBhdHRyLmJ1ZmZlciA9IGNyZWF0ZUFycmF5QnVmZmVyKHRoaXMuZ2wsIGF0dHIuYXJyYXkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBpbml0IHVuaWZvcm1zXHJcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSlcclxuICAgICAgICBjb25zdCBwcm9qZWN0aW9uTG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLCAncHJvamVjdGlvbicpXHJcbiAgICAgICAgY29uc3Qgc2NhbGVMb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sICdzY2FsZScpXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlTG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLCAndHJhbnNsYXRlJylcclxuXHJcbiAgICAgICAgLy8gdGhpcy5nbC52aWV3cG9ydCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkgLy8gVE9ETzogdmlld3BvcnQgc2V0LCBub3QgbmVlZGVkPyBwdXQgaGVyZSBpbiBjYXNlIGJ1ZyBhcHBlYXJcclxuXHJcbiAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICAgICAgY29uc3QgcHJvamVjdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgICAgICAgICAyIC8gdGhpcy53aWR0aCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgLTIgLyB0aGlzLmhlaWdodCwgMCxcclxuICAgICAgICAgICAgLTEsIDEsIDFcclxuICAgICAgICBdKVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybU1hdHJpeDNmdihwcm9qZWN0aW9uTG9jLCBmYWxzZSwgcHJvamVjdGlvbilcclxuXHJcbiAgICAgICAgY29uc3Qgc2NhbGUgPSBuZXcgRmxvYXQzMkFycmF5KFsxLCAxXSlcclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZnYoc2NhbGVMb2MsIHNjYWxlKVxyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2xhdGUgPSBuZXcgRmxvYXQzMkFycmF5KFswLCAwXSlcclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZnYodHJhbnNsYXRlTG9jLCB0cmFuc2xhdGUpXHJcblxyXG4gICAgICAgIC8vIGlkIHVuaWZvcm1zLCBpZGVudGljYWwgdG8gbGlua1xyXG4gICAgICAgIC8vIFRPRE86IG5lZWQgcmVmYWN0b3IgdG9vXHJcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMuaWRQcm9ncmFtKVxyXG4gICAgICAgIGNvbnN0IGlkUHJvamVjdGlvbkxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuaWRQcm9ncmFtLCAncHJvamVjdGlvbicpXHJcbiAgICAgICAgY29uc3QgaWRTY2FsZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuaWRQcm9ncmFtLCAnc2NhbGUnKVxyXG4gICAgICAgIGNvbnN0IGlkVHJhbnNsYXRlTG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5pZFByb2dyYW0sICd0cmFuc2xhdGUnKVxyXG5cclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm1NYXRyaXgzZnYoaWRQcm9qZWN0aW9uTG9jLCBmYWxzZSwgcHJvamVjdGlvbilcclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZnYoaWRTY2FsZUxvYywgc2NhbGUpXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmZ2KGlkVHJhbnNsYXRlTG9jLCB0cmFuc2xhdGUpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjaGFuZ2UgbGluaydzIGF0dHJpYnV0ZVxyXG4gICAgICogQHBhcmFtIGxpbmsgbGluayBkYXRhXHJcbiAgICAgKiBAcGFyYW0gYXR0cmlidXRlIGF0dHJpYnV0ZSBrZXkgdG8gY2hhbmdlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjaGFuZ2VBdHRyaWJ1dGUobGluazogTGluaywgYXR0cmlidXRlOiBMaW5rQXR0cikge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IExpbmtBdHRyTWFwW2F0dHJpYnV0ZV1cclxuICAgICAgICBjb25zdCBhdHRyID0gdGhpcy5hdHRyaWJ1dGVzW2tleV1cclxuICAgICAgICBjb25zdCBub2RlcyA9IGxpbmsuc291cmNlVGFyZ2V0KClcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaWRzVG9JbmRleC5nZXQoW25vZGVzLnNvdXJjZS5pZCgpLCBub2Rlcy50YXJnZXQuaWQoKV0pXHJcbiAgICAgICAgbGV0IGRhdGEgPSBudWxsXHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ3NvdXJjZScpIHtcclxuICAgICAgICAgICAgY29uc3QgcG9zID0gbm9kZXMuc291cmNlLnBvc2l0aW9uKClcclxuICAgICAgICAgICAgZGF0YSA9IFtwb3MueCwgcG9zLnldXHJcbiAgICAgICAgfSBlbHNlIGlmIChhdHRyaWJ1dGUgPT09ICd0YXJnZXQnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IG5vZGVzLnRhcmdldC5wb3NpdGlvbigpXHJcbiAgICAgICAgICAgIGRhdGEgPSBbcG9zLngsIHBvcy55XVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlID09PSAnc3Ryb2tlV2lkdGgnKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBbbGluay5zdHJva2VXaWR0aCgpICogdGhpcy5waXhlbFJhdGlvXVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlID09PSAnc3Ryb2tlQ29sb3InKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IGxpbmsuc3Ryb2tlQ29sb3IoKVxyXG4gICAgICAgICAgICBkYXRhID0gW2NvbC5yLCBjb2wuZywgY29sLmIsIGNvbC5hXVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0xpbmsgYXR0cmlidXRlIG5vdCBzdXBwb3J0ZWQuJylcclxuICAgICAgICAgICAgcmV0dXJuIC8vIGVhcmx5IHJldHVybiwgc2tpcCBmb2xsb3dpbmcgYnVmZmVyIGNoYW5nZVxyXG4gICAgICAgIH1cclxuICAgICAgICBhdHRyLmFycmF5LnNldChkYXRhLCBhdHRyLnNpemUgKiBpbmRleClcclxuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIGF0dHIuYnVmZmVyKVxyXG4gICAgICAgIHRoaXMuZ2wuYnVmZmVyU3ViRGF0YShcclxuICAgICAgICAgICAgdGhpcy5nbC5BUlJBWV9CVUZGRVIsXHJcbiAgICAgICAgICAgIGF0dHIuc2l6ZSAqIGluZGV4ICogYXR0ci5hcnJheS5CWVRFU19QRVJfRUxFTUVOVCxcclxuICAgICAgICAgICAgYXR0ci5hcnJheSxcclxuICAgICAgICAgICAgYXR0ci5zaXplICogaW5kZXgsXHJcbiAgICAgICAgICAgIGF0dHIuc2l6ZVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJlZnJlc2ggYWxsIHBvc2l0aW9uIG9mIGVkZ2VzXHJcbiAgICAgKiBAcGFyYW0gbGlua3MgYWxsIGxpbmsgZGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVmcmVzaFBvc2l0aW9uKGxpbmtzOiBMaW5rW10pIHtcclxuICAgICAgICBsZXQgY291bnQgPSAwIC8vIFRPRE86IHVzZWxlc3MgY291bnRcclxuICAgICAgICBsaW5rcy5mb3JFYWNoKChsaW5rLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IGNvbnNpZGVyIGxpbmsgYW5kIHJlbmRlciBsaW5rIGF0dHJpYnV0ZSBtYXBwaW5nXHJcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IGxpbmsuc291cmNlKClcclxuICAgICAgICAgICAgY29uc3Qgc291cmNlUG9zaXRpb24gPSBzb3VyY2UucG9zaXRpb24oKVxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTGlua0F0dHJLZXkuU09VUkNFXS5hcnJheVsyICogKGNvdW50ICsgaSldID0gc291cmNlUG9zaXRpb24ueFxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTGlua0F0dHJLZXkuU09VUkNFXS5hcnJheVsyICogKGNvdW50ICsgaSkgKyAxXSA9IHNvdXJjZVBvc2l0aW9uLnlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGxpbmsudGFyZ2V0KClcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSB0YXJnZXQucG9zaXRpb24oKVxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTGlua0F0dHJLZXkuVEFSR0VUXS5hcnJheVsyICogKGNvdW50ICsgaSldID0gdGFyZ2V0UG9zaXRpb24ueFxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTGlua0F0dHJLZXkuVEFSR0VUXS5hcnJheVsyICogKGNvdW50ICsgaSkgKyAxXSA9IHRhcmdldFBvc2l0aW9uLnlcclxuXHJcbiAgICAgICAgICAgIC8vIGN1cnJlbnRseSBubyBuZWVkIGZvciBjb2xvciZyZW5kZXJJZCBjaGFuZ2VcclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW0xpbmtBdHRyS2V5LldJRFRIXS5hcnJheVt0aGlzLmNvdW50ICsgaV0gPVxyXG4gICAgICAgICAgICAgICAgbGluay5zdHJva2VXaWR0aCgpICogdGhpcy5waXhlbFJhdGlvXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IGxpbmsuc3Ryb2tlQ29sb3IoKVxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTGlua0F0dHJLZXkuQ09MT1JdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpXSA9IGNvbG9yLnJcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW0xpbmtBdHRyS2V5LkNPTE9SXS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKSArIDFdID0gY29sb3IuZ1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTGlua0F0dHJLZXkuQ09MT1JdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpICsgMl0gPSBjb2xvci5iXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tMaW5rQXR0cktleS5DT0xPUl0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSkgKyAzXSA9IGNvbG9yLmFcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcklkQ29sb3IgPSBlbmNvZGVSZW5kZXJJZCgyICogKHRoaXMuY291bnQgKyBpKSArIDEpIC8vIE5PVEU6IGxpbmsgcmVuZGVyIGlkLCB1c2Ugb2RkIGludGVnZXJcclxuICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXNbTGlua0lkQXR0cktleS5JRF0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSldID0gcmVuZGVySWRDb2xvci5yXHJcbiAgICAgICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzW0xpbmtJZEF0dHJLZXkuSURdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpICsgMV0gPSByZW5kZXJJZENvbG9yLmdcclxuICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXNbTGlua0lkQXR0cktleS5JRF0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSkgKyAyXSA9IHJlbmRlcklkQ29sb3IuYlxyXG4gICAgICAgICAgICB0aGlzLmlkQXR0cmlidXRlc1tMaW5rSWRBdHRyS2V5LklEXS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKSArIDNdID0gcmVuZGVySWRDb2xvci5hXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3Qgc291cmNlQXR0ciA9IHRoaXMuYXR0cmlidXRlc1tMaW5rQXR0cktleS5TT1VSQ0VdXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0QXR0ciA9IHRoaXMuYXR0cmlidXRlc1tMaW5rQXR0cktleS5UQVJHRVRdXHJcblxyXG4gICAgICAgIGNvbnN0IGFyciA9IFtzb3VyY2VBdHRyLCB0YXJnZXRBdHRyXVxyXG5cclxuICAgICAgICBhcnIuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWF0dHIuaXNCdWlsZEluKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIGF0dHIuYnVmZmVyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5idWZmZXJTdWJEYXRhKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wuQVJSQVlfQlVGRkVSLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSAqIGNvdW50ICogYXR0ci5hcnJheS5CWVRFU19QRVJfRUxFTUVOVCxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLmFycmF5LFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSAqIGNvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSAqIGxpbmtzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNsZWFyIGxpbmsgZGF0YVxyXG4gICAgICogbm90IGFjdHVhbGx5IGVyYXNlIGRhdGEsIGJ1dCByZXNldCBjb3VudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xlYXJEYXRhKCkge1xyXG4gICAgICAgIHRoaXMuY291bnQgPSAwXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgbGlua3MgZGF0YSB0byBlbmdpbmVcclxuICAgICAqIEBwYXJhbSBsaW5rcyBsaW5rcyBkYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGREYXRhKGxpbmtzOiBMaW5rW10pIHtcclxuICAgICAgICAvLyBzZXQgYXJyYXlcclxuICAgICAgICBsaW5rcy5mb3JFYWNoKChsaW5rLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IGNvbnNpZGVyIGxpbmsgYW5kIHJlbmRlciBsaW5rIGF0dHJpYnV0ZSBtYXBwaW5nXHJcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IGxpbmsuc291cmNlKClcclxuICAgICAgICAgICAgY29uc3Qgc291cmNlUG9zaXRpb24gPSBzb3VyY2UucG9zaXRpb24oKVxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTGlua0F0dHJLZXkuU09VUkNFXS5hcnJheVsyICogKHRoaXMuY291bnQgKyBpKV0gPSBzb3VyY2VQb3NpdGlvbi54XHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tMaW5rQXR0cktleS5TT1VSQ0VdLmFycmF5WzIgKiAodGhpcy5jb3VudCArIGkpICsgMV0gPSBzb3VyY2VQb3NpdGlvbi55XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBsaW5rLnRhcmdldCgpXHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gdGFyZ2V0LnBvc2l0aW9uKClcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW0xpbmtBdHRyS2V5LlRBUkdFVF0uYXJyYXlbMiAqICh0aGlzLmNvdW50ICsgaSldID0gdGFyZ2V0UG9zaXRpb24ueFxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTGlua0F0dHJLZXkuVEFSR0VUXS5hcnJheVsyICogKHRoaXMuY291bnQgKyBpKSArIDFdID0gdGFyZ2V0UG9zaXRpb24ueVxyXG5cclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW0xpbmtBdHRyS2V5LldJRFRIXS5hcnJheVt0aGlzLmNvdW50ICsgaV0gPVxyXG4gICAgICAgICAgICAgICAgbGluay5zdHJva2VXaWR0aCgpICogdGhpcy5waXhlbFJhdGlvXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IGxpbmsuc3Ryb2tlQ29sb3IoKVxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTGlua0F0dHJLZXkuQ09MT1JdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpXSA9IGNvbG9yLnJcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW0xpbmtBdHRyS2V5LkNPTE9SXS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKSArIDFdID0gY29sb3IuZ1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTGlua0F0dHJLZXkuQ09MT1JdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpICsgMl0gPSBjb2xvci5iXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tMaW5rQXR0cktleS5DT0xPUl0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSkgKyAzXSA9IGNvbG9yLmFcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcklkQ29sb3IgPSBlbmNvZGVSZW5kZXJJZCgyICogKHRoaXMuY291bnQgKyBpKSArIDEpIC8vIE5PVEU6IGxpbmsgcmVuZGVyIGlkLCB1c2Ugb2RkIGludGVnZXJcclxuICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXNbTGlua0lkQXR0cktleS5JRF0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSldID0gcmVuZGVySWRDb2xvci5yXHJcbiAgICAgICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzW0xpbmtJZEF0dHJLZXkuSURdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpICsgMV0gPSByZW5kZXJJZENvbG9yLmdcclxuICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXNbTGlua0lkQXR0cktleS5JRF0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSkgKyAyXSA9IHJlbmRlcklkQ29sb3IuYlxyXG4gICAgICAgICAgICB0aGlzLmlkQXR0cmlidXRlc1tMaW5rSWRBdHRyS2V5LklEXS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKSArIDNdID0gcmVuZGVySWRDb2xvci5hXHJcblxyXG4gICAgICAgICAgICBjb25zdCBzb3VyY2VUYXJnZXQgPSBsaW5rLnNvdXJjZVRhcmdldCgpXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVySWRUb0lkc1syICogKHRoaXMuY291bnQgKyBpKSArIDFdID0gW1xyXG4gICAgICAgICAgICAgICAgc291cmNlVGFyZ2V0LnNvdXJjZS5pZCgpLFxyXG4gICAgICAgICAgICAgICAgc291cmNlVGFyZ2V0LnRhcmdldC5pZCgpXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgdGhpcy5pZHNUb0luZGV4LnNldChcclxuICAgICAgICAgICAgICAgIFtzb3VyY2VUYXJnZXQuc291cmNlLmlkKCksIHNvdXJjZVRhcmdldC50YXJnZXQuaWQoKV0sXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50ICsgaVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFhdHRyLmlzQnVpbGRJbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBhdHRyLmJ1ZmZlcilcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYnVmZmVyU3ViRGF0YShcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLkFSUkFZX0JVRkZFUixcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLnNpemUgKiB0aGlzLmNvdW50ICogYXR0ci5hcnJheS5CWVRFU19QRVJfRUxFTUVOVCxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLmFycmF5LFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSAqIHRoaXMuY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5zaXplICogbGlua3MubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBpZCBidWZmZXIgZGF0YVxyXG4gICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLmlkQXR0cmlidXRlc1tMaW5rSWRBdHRyS2V5LklEXVxyXG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYXR0ci5idWZmZXIpXHJcbiAgICAgICAgdGhpcy5nbC5idWZmZXJTdWJEYXRhKFxyXG4gICAgICAgICAgICB0aGlzLmdsLkFSUkFZX0JVRkZFUixcclxuICAgICAgICAgICAgYXR0ci5zaXplICogdGhpcy5jb3VudCAqIGF0dHIuYXJyYXkuQllURVNfUEVSX0VMRU1FTlQsXHJcbiAgICAgICAgICAgIGF0dHIuYXJyYXksXHJcbiAgICAgICAgICAgIGF0dHIuc2l6ZSAqIHRoaXMuY291bnQsXHJcbiAgICAgICAgICAgIGF0dHIuc2l6ZSAqIGxpbmtzLmxlbmd0aFxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgdGhpcy5jb3VudCArPSBsaW5rcy5sZW5ndGhcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldCBUcmFuc2Zvcm0gaW4gUmVuZGVyIExpbmtcclxuICAgICAqIEBwYXJhbSB0cmFuc2Zvcm0gY3VycmVudCB0cmFuc2Zvcm0ocGFuJnpvb20gY29uZGl0aW9uKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0VHJhbnNmb3JtKHRyYW5zZm9ybTogVHJhbnNmb3JtKSB7XHJcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSlcclxuICAgICAgICBjb25zdCBzY2FsZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3NjYWxlJylcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGVMb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sICd0cmFuc2xhdGUnKVxyXG5cclxuICAgICAgICBjb25zdCBzY2FsZSA9IG5ldyBGbG9hdDMyQXJyYXkoW3RyYW5zZm9ybS5rLCB0cmFuc2Zvcm0ua10pXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmZ2KHNjYWxlTG9jLCBzY2FsZSlcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlID0gbmV3IEZsb2F0MzJBcnJheShbdHJhbnNmb3JtLngsIHRyYW5zZm9ybS55XSlcclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZnYodHJhbnNsYXRlTG9jLCB0cmFuc2xhdGUpXHJcblxyXG4gICAgICAgIC8vIGlkIHVuaWZvcm1zLCBpZGVudGljYWwgdG8gbGlua1xyXG4gICAgICAgIC8vIFRPRE86IG5lZWQgcmVmYWN0b3IgdG9vXHJcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMuaWRQcm9ncmFtKVxyXG4gICAgICAgIGNvbnN0IGlkU2NhbGVMb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmlkUHJvZ3JhbSwgJ3NjYWxlJylcclxuICAgICAgICBjb25zdCBpZFRyYW5zbGF0ZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuaWRQcm9ncmFtLCAndHJhbnNsYXRlJylcclxuXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmZ2KGlkU2NhbGVMb2MsIHNjYWxlKVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdihpZFRyYW5zbGF0ZUxvYywgdHJhbnNsYXRlKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVuZGVyIGlkIHRvIGxpbmsgaWRzKHNvdXJjZSBhbmQgdGFyZ2V0KVxyXG4gICAgICogQHBhcmFtIHJlbmRlcklkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRJZHNCeVJlbmRlcklkKHJlbmRlcklkOiBudW1iZXIpOiBbc3RyaW5nLCBzdHJpbmddIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJJZFRvSWRzW3JlbmRlcklkXVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZHJhdyBsaW5rc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZHJhdygpIHtcclxuICAgICAgICBpZiAodGhpcy5jb3VudCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5nbC5lbmFibGUodGhpcy5nbC5CTEVORClcclxuICAgICAgICAgICAgdGhpcy5nbC5ibGVuZEZ1bmModGhpcy5nbC5PTkUsIHRoaXMuZ2wuT05FX01JTlVTX1NSQ19BTFBIQSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGF0dHIuaW5kZXgpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0ciwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBhdHRyLmJ1ZmZlcilcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wudmVydGV4QXR0cmliUG9pbnRlcihcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLkZMT0FULFxyXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuaXNCdWlsZEluID8gMCA6IGF0dHIuc2l6ZSAqIGF0dHIuYXJyYXkuQllURVNfUEVSX0VMRU1FTlQsXHJcbiAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgaWYgKCFhdHRyLmlzQnVpbGRJbikgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJEaXZpc29yKGF0dHIuaW5kZXgsIDEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdsLmRyYXdBcnJheXNJbnN0YW5jZWQodGhpcy5nbC5UUklBTkdMRV9TVFJJUCwgMCwgNCwgdGhpcy5jb3VudClcclxuXHJcbiAgICAgICAgLy8gZHJhdyBpZFxyXG4gICAgICAgIHRoaXMuZ2wuYmxlbmRGdW5jKHRoaXMuZ2wuT05FLCB0aGlzLmdsLlpFUk8pXHJcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMuaWRQcm9ncmFtKVxyXG4gICAgICAgIHRoaXMuZ2wuYmluZEZyYW1lYnVmZmVyKHRoaXMuZ2wuRlJBTUVCVUZGRVIsIHRoaXMuaWRUZXh0dXJlKVxyXG5cclxuICAgICAgICB0aGlzLmlkQXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYXR0ci5pbmRleClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBhdHRyID0gdGhpcy5pZEF0dHJpYnV0ZXNbTGlua0lkQXR0cktleS5JRF1cclxuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIGF0dHIuYnVmZmVyKVxyXG4gICAgICAgIHRoaXMuZ2wudmVydGV4QXR0cmliUG9pbnRlcihcclxuICAgICAgICAgICAgYXR0ci5pbmRleCxcclxuICAgICAgICAgICAgYXR0ci5zaXplLFxyXG4gICAgICAgICAgICB0aGlzLmdsLkZMT0FULFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgYXR0ci5zaXplICogYXR0ci5hcnJheS5CWVRFU19QRVJfRUxFTUVOVCxcclxuICAgICAgICAgICAgMFxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYkRpdmlzb3IoYXR0ci5pbmRleCwgMSlcclxuXHJcbiAgICAgICAgdGhpcy5nbC5kcmF3QXJyYXlzSW5zdGFuY2VkKHRoaXMuZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQsIHRoaXMuY291bnQpXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5GUkFNRUJVRkZFUiwgbnVsbClcclxuXHJcbiAgICAgICAgdGhpcy5nbC5lbmFibGUodGhpcy5nbC5CTEVORClcclxuICAgICAgICB0aGlzLmdsLmJsZW5kRnVuYyh0aGlzLmdsLk9ORSwgdGhpcy5nbC5PTkVfTUlOVVNfU1JDX0FMUEhBKVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IFwiI3ZlcnNpb24gMzAwIGVzXFxyXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcbmluIHZlYzMgaW5WZXJ0ZXhQb3M7XFxyXFxuaW4gdmVjMiBpblNvdXJjZVBvc2l0aW9uO1xcclxcbmluIHZlYzIgaW5UYXJnZXRQb3NpdGlvbjtcXHJcXG5pbiBmbG9hdCBpblN0cm9rZVdpZHRoO1xcclxcbmluIHZlYzQgaW5TdHJva2VDb2xvcjtcXHJcXG5cXHJcXG5vdXQgdmVjNCBjb2xvcjtcXHJcXG5cXHJcXG51bmlmb3JtIG1hdDMgcHJvamVjdGlvbjtcXHJcXG51bmlmb3JtIHZlYzIgc2NhbGU7XFxyXFxudW5pZm9ybSB2ZWMyIHRyYW5zbGF0ZTtcXHJcXG5cXHJcXG52b2lkIG1haW4odm9pZCkge1xcclxcbiAgICBjb2xvciA9IGluU3Ryb2tlQ29sb3I7XFxyXFxuXFxyXFxuICAgIHZlYzIgc291cmNlID0gaW5Tb3VyY2VQb3NpdGlvbiAqIHNjYWxlICsgdHJhbnNsYXRlO1xcclxcbiAgICB2ZWMyIHRhcmdldCA9IGluVGFyZ2V0UG9zaXRpb24gKiBzY2FsZSArIHRyYW5zbGF0ZTtcXHJcXG4gICAgdmVjMiBkZWx0YSA9IHNvdXJjZSAtIHRhcmdldDtcXHJcXG4gICAgdmVjMiBjZW50ZXIgPSAwLjUgKiAoc291cmNlICsgdGFyZ2V0KTtcXHJcXG4gICAgZmxvYXQgbGVuID0gbGVuZ3RoKGRlbHRhKTtcXHJcXG4gICAgZmxvYXQgcGhpID0gYXRhbihkZWx0YS55IC8gZGVsdGEueCk7XFxyXFxuXFxyXFxuICAgIG1hdDMgbGluZV9zY2FsZSA9IG1hdDMoXFxyXFxuICAgICAgICBsZW4sIDAsIDAsXFxyXFxuICAgICAgICAwLCBpblN0cm9rZVdpZHRoLCAwLFxcclxcbiAgICAgICAgMCwgMCwgMVxcclxcbiAgICApO1xcclxcbiAgICBtYXQzIGxpbmVfcm90YXRlID0gbWF0MyhcXHJcXG4gICAgICAgIGNvcyhwaGkpLCBzaW4ocGhpKSwgMCxcXHJcXG4gICAgICAgIC1zaW4ocGhpKSwgY29zKHBoaSksIDAsXFxyXFxuICAgICAgICAwLCAwLCAxXFxyXFxuICAgICk7XFxyXFxuICAgIG1hdDMgbGluZV90cmFuc2xhdGUgPSBtYXQzKFxcclxcbiAgICAgICAgMSwgMCwgMCxcXHJcXG4gICAgICAgIDAsIDEsIDAsXFxyXFxuICAgICAgICBjZW50ZXIueCwgY2VudGVyLnksIDFcXHJcXG4gICAgKTtcXHJcXG4gICAgXFxyXFxuICAgIG1hdDMgdHJhbnNmb3JtID0gbGluZV90cmFuc2xhdGUgKiBsaW5lX3JvdGF0ZSAqIGxpbmVfc2NhbGU7XFxyXFxuXFxyXFxuICAgIGdsX1Bvc2l0aW9uID0gdmVjNChwcm9qZWN0aW9uICogdHJhbnNmb3JtICogaW5WZXJ0ZXhQb3MsIDEuKTtcXHJcXG59XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIjdmVyc2lvbiAzMDAgZXNcXHJcXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxyXFxuaW4gdmVjMiBwb3M7XFxyXFxuaW4gZmxvYXQgcmFkaXVzO1xcclxcbmluIHZlYzQgY29sb3I7XFxyXFxuaW4gZmxvYXQgc3Ryb2tlV2lkdGg7XFxyXFxuaW4gdmVjNCBzdHJva2VDb2xvcjtcXHJcXG5cXHJcXG5vdXQgdmVjNCBmcmFnbWVudENvbG9yO1xcclxcblxcclxcbnVuaWZvcm0gdmVjMiB2aWV3cG9ydDtcXHJcXG51bmlmb3JtIGZsb2F0IHBpeGVsUmF0aW87XFxyXFxuXFxyXFxuZmxvYXQgaW5DaXJjbGUoKSB7XFxyXFxuICB2ZWMyIGZsaXBfcG9zID0gcG9zO1xcclxcbiAgZmxpcF9wb3MueSA9IHZpZXdwb3J0LnkgLSBwb3MueTtcXHJcXG4gIGZsb2F0IHIgPSBkaXN0YW5jZShnbF9GcmFnQ29vcmQueHkgLyBwaXhlbFJhdGlvLCBmbGlwX3Bvcyk7XFxyXFxuICBmbG9hdCBkcmF3ID0gMS4gLSBzdGVwKHJhZGl1cyAtIHN0cm9rZVdpZHRoIC8gMi4sIHIpO1xcclxcbiAgcmV0dXJuIGRyYXc7XFxyXFxufVxcclxcblxcclxcbmZsb2F0IGluQm9yZGVyKCkge1xcclxcbiAgaWYgKHN0cm9rZVdpZHRoID09IDAuKSB7XFxyXFxuICAgIHJldHVybiAwLjtcXHJcXG4gIH1cXHJcXG4gIHZlYzIgZmxpcF9wb3MgPSBwb3M7XFxyXFxuICBmbGlwX3Bvcy55ID0gdmlld3BvcnQueSAtIHBvcy55O1xcclxcbiAgZmxvYXQgciA9IGRpc3RhbmNlKGdsX0ZyYWdDb29yZC54eSAvIHBpeGVsUmF0aW8sIGZsaXBfcG9zKTtcXHJcXG4gIGZsb2F0IGRyYXdPdXRlciA9IDEuIC0gc21vb3Roc3RlcCgocmFkaXVzICsgc3Ryb2tlV2lkdGggLyAyLikgKiAwLjk1LCAocmFkaXVzICsgc3Ryb2tlV2lkdGggLyAyLikgKiAxLjA1LCByKTtcXHJcXG4gIGZsb2F0IGRyYXdJbm5lciA9IDEuIC0gc3RlcChyYWRpdXMgLSBzdHJva2VXaWR0aCAvIDIuLCByKTtcXHJcXG4gIHJldHVybiBkcmF3T3V0ZXIgKiAoMS4gLSBkcmF3SW5uZXIpO1xcclxcbiAgLy8gcmV0dXJuIGRyYXdPdXRlcjtcXHJcXG59XFxyXFxuXFxyXFxudm9pZCBtYWluKHZvaWQpIHtcXHJcXG4gICAgLy8gYm9yZGVyIGNoZWNrLCB1c2luZyAwLjUoY2VudGVyIG9mIHNtb290aHN0ZXApXFxyXFxuICAgIGlmIChpbkNpcmNsZSgpIDwgMS4gJiYgKHN0cm9rZVdpZHRoIDwgMC44IHx8IGluQm9yZGVyKCkgPCAwLjUpKSB7XFxyXFxuICAgICAgICBkaXNjYXJkO1xcclxcbiAgICB9XFxyXFxuICAgIGZyYWdtZW50Q29sb3IgPSBpbkJvcmRlcigpICogdmVjNChzdHJva2VDb2xvci5yZ2IgKiBzdHJva2VDb2xvci5hLCBzdHJva2VDb2xvci5hKSArIGluQ2lyY2xlKCkgKiB2ZWM0KGNvbG9yLnJnYiAqIGNvbG9yLmEsIGNvbG9yLmEpO1xcclxcbn1cIjsiLCJleHBvcnQgZGVmYXVsdCBcIiN2ZXJzaW9uIDMwMCBlc1xcclxcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcXHJcXG5pbiB2ZWMyIHBvcztcXHJcXG5pbiBmbG9hdCByYWRpdXM7XFxyXFxuaW4gdmVjNCBjb2xvcjtcXHJcXG5pbiBmbG9hdCBzdHJva2VXaWR0aDtcXHJcXG5pbiB2ZWM0IHN0cm9rZUNvbG9yO1xcclxcblxcclxcbmluIHZlYzQgaWQ7XFxyXFxuXFxyXFxub3V0IHZlYzQgZnJhZ21lbnRDb2xvcjtcXHJcXG5cXHJcXG51bmlmb3JtIHZlYzIgdmlld3BvcnQ7XFxyXFxudW5pZm9ybSBmbG9hdCBwaXhlbFJhdGlvO1xcclxcblxcclxcbmZsb2F0IGluQ2lyY2xlKCkge1xcclxcbiAgdmVjMiBmbGlwX3BvcyA9IHBvcztcXHJcXG4gIGZsaXBfcG9zLnkgPSB2aWV3cG9ydC55IC0gcG9zLnk7XFxyXFxuICBmbG9hdCByID0gZGlzdGFuY2UoZ2xfRnJhZ0Nvb3JkLnh5IC8gcGl4ZWxSYXRpbywgZmxpcF9wb3MpO1xcclxcbiAgZmxvYXQgZHJhdyA9IDEuIC0gc3RlcChyYWRpdXMgLSBzdHJva2VXaWR0aCAvIDIuLCByKTtcXHJcXG4gIHJldHVybiBkcmF3O1xcclxcbn1cXHJcXG5cXHJcXG5mbG9hdCBpbkJvcmRlcigpIHtcXHJcXG4gIGlmIChzdHJva2VXaWR0aCA9PSAwLikge1xcclxcbiAgICByZXR1cm4gMC47XFxyXFxuICB9XFxyXFxuICB2ZWMyIGZsaXBfcG9zID0gcG9zO1xcclxcbiAgZmxpcF9wb3MueSA9IHZpZXdwb3J0LnkgLSBwb3MueTtcXHJcXG4gIGZsb2F0IHIgPSBkaXN0YW5jZShnbF9GcmFnQ29vcmQueHkgLyBwaXhlbFJhdGlvLCBmbGlwX3Bvcyk7XFxyXFxuICBmbG9hdCBkcmF3T3V0ZXIgPSAxLiAtIHNtb290aHN0ZXAoKHJhZGl1cyArIHN0cm9rZVdpZHRoIC8gMi4pICogMC45NSwgKHJhZGl1cyArIHN0cm9rZVdpZHRoIC8gMi4pICogMS4wNSwgcik7XFxyXFxuICBmbG9hdCBkcmF3SW5uZXIgPSAxLiAtIHN0ZXAocmFkaXVzIC0gc3Ryb2tlV2lkdGggLyAyLiwgcik7XFxyXFxuICByZXR1cm4gZHJhd091dGVyICogKDEuIC0gZHJhd0lubmVyKTtcXHJcXG4gIC8vIHJldHVybiBkcmF3T3V0ZXI7XFxyXFxufVxcclxcblxcclxcbnZvaWQgbWFpbih2b2lkKSB7XFxyXFxuICAgIC8vIGJvcmRlciBjaGVjaywgdXNpbmcgMC41KGNlbnRlciBvZiBzbW9vdGhzdGVwKVxcclxcbiAgICBpZiAoaW5DaXJjbGUoKSA8IDEuICYmIChzdHJva2VXaWR0aCA8IDAuOCB8fCBpbkJvcmRlcigpIDwgMC41KSkge1xcclxcbiAgICAgICAgZGlzY2FyZDtcXHJcXG4gICAgfVxcclxcbiAgICBmcmFnbWVudENvbG9yID0gaWQ7XFxyXFxufVwiOyIsImV4cG9ydCBkZWZhdWx0IFwiI3ZlcnNpb24gMzAwIGVzXFxyXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcbmluIHZlYzMgaW5WZXJ0ZXhQb3M7XFxyXFxuaW4gdmVjMiBpblBvc2l0aW9uO1xcclxcbmluIGZsb2F0IGluUmFkaXVzO1xcclxcbmluIHZlYzQgaW5GaWxsO1xcclxcbmluIGZsb2F0IGluU3Ryb2tlV2lkdGg7XFxyXFxuaW4gdmVjNCBpblN0cm9rZUNvbG9yO1xcclxcblxcclxcbmluIHZlYzQgaW5JZDtcXHJcXG5cXHJcXG5vdXQgdmVjMiBwb3M7XFxyXFxub3V0IGZsb2F0IHJhZGl1cztcXHJcXG5vdXQgdmVjNCBjb2xvcjtcXHJcXG5vdXQgZmxvYXQgc3Ryb2tlV2lkdGg7XFxyXFxub3V0IHZlYzQgc3Ryb2tlQ29sb3I7XFxyXFxuXFxyXFxub3V0IHZlYzQgaWQ7XFxyXFxuXFxyXFxudW5pZm9ybSBtYXQzIHByb2plY3Rpb247XFxyXFxudW5pZm9ybSB2ZWMyIHNjYWxlO1xcclxcbnVuaWZvcm0gdmVjMiB0cmFuc2xhdGU7XFxyXFxudW5pZm9ybSB2ZWMyIHZpZXdwb3J0O1xcclxcblxcclxcbnZvaWQgbWFpbih2b2lkKSB7XFxyXFxuICAgIGlkID0gaW5JZDtcXHJcXG5cXHJcXG4gICAgZmxvYXQgc2l6ZSA9IGluUmFkaXVzICsgaW5TdHJva2VXaWR0aCAvIDIuO1xcclxcbiAgICByYWRpdXMgPSBpblJhZGl1cztcXHJcXG4gICAgY29sb3IgPSBpbkZpbGw7XFxyXFxuICAgIHN0cm9rZVdpZHRoID0gaW5TdHJva2VXaWR0aDtcXHJcXG4gICAgc3Ryb2tlQ29sb3IgPSBpblN0cm9rZUNvbG9yO1xcclxcbiAgICBmbG9hdCB2ZXJ0ZXhTaXplID0gc2l6ZSAqICgyLiAqIHNxcnQoMi4pKSAqIDEuNTsgLy8gTk9URTogeCAxLjUgdG8gcHJldmVudCBib3JkZXIgZmFjdG9yXFxyXFxuICAgIHBvcyA9IHNjYWxlICogaW5Qb3NpdGlvbiArIHRyYW5zbGF0ZTtcXHJcXG4gICAgbWF0MyB0cmFuc2Zvcm0gPSBtYXQzKFxcclxcbiAgICAgICAgdmVydGV4U2l6ZSwgMCwgMCxcXHJcXG4gICAgICAgIDAsIHZlcnRleFNpemUsIDAsXFxyXFxuICAgICAgICBwb3MueCwgcG9zLnksIDFcXHJcXG4gICAgKTtcXHJcXG5cXHJcXG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KHByb2plY3Rpb24gKiB0cmFuc2Zvcm0gKiBpblZlcnRleFBvcywgMS4pO1xcclxcbn1cIjsiLCIvKipcclxuICogQGF1dGhvciBYaWFvZG9uZyBaaGFvIDx6aGFveGlhb2RvbmdAemp1LmVkdS5jbj5cclxuICogQGRlc2NyaXB0aW9uIE5vZGUgdXNpbmcgaW4gUmVuZGVyZXJcclxuICovXHJcblxyXG5pbXBvcnQgdmVydFNoYWRlclN0ciBmcm9tICcuL3ZlcnRleC5nbHNsJ1xyXG5pbXBvcnQgZnJhZ1NoYWRlclN0ciBmcm9tICcuL2ZyYWdtZW50Lmdsc2wnXHJcbmltcG9ydCBpZFZlcnRTaGFkZXJTdHIgZnJvbSAnLi9pZC12ZXJ0ZXguZ2xzbCdcclxuaW1wb3J0IGlkRnJhZ1NoYWRlclN0ciBmcm9tICcuL2lkLWZyYWdtZW50Lmdsc2wnXHJcbmltcG9ydCB7XHJcbiAgICBjcmVhdGVQcm9ncmFtLFxyXG4gICAgY3JlYXRlQXJyYXlCdWZmZXIsXHJcbiAgICBleHRyYWN0QXR0cmlidXRlc0Zyb21TaGFkZXIsXHJcbiAgICBlbmNvZGVSZW5kZXJJZFxyXG59IGZyb20gJy4uLy4uL3V0aWxzJ1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyBSZW5kZXJBdHRyaWJ1dGUsIE5vZGVBdHRyLCBOb2RlTWFuYWdlckNvbmZpZ3MgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgTm9kZSBmcm9tICcuLi8uLi8uLi9ub2RlJ1xyXG5cclxuZW51bSBOb2RlQXR0cktleSB7XHJcbiAgICBURU1QTEFURSxcclxuICAgIFBPU0lUSU9OLFxyXG4gICAgUkFESVVTLFxyXG4gICAgQ09MT1IsXHJcbiAgICBTVFJPS0VfV0lEVEgsXHJcbiAgICBTVFJPS0VfQ09MT1JcclxufVxyXG5cclxuZW51bSBOb2RlSWRBdHRyS2V5IHtcclxuICAgIFRFTVBMQVRFLFxyXG4gICAgUE9TSVRJT04sXHJcbiAgICBSQURJVVMsXHJcbiAgICBDT0xPUixcclxuICAgIFNUUk9LRV9XSURUSCxcclxuICAgIFNUUk9LRV9DT0xPUixcclxuICAgIElEXHJcbn1cclxuXHJcbmNvbnN0IE5vZGVBdHRyTWFwID0ge1xyXG4gICAgcG9zaXRpb246IE5vZGVBdHRyS2V5LlBPU0lUSU9OLFxyXG4gICAgcmFkaXVzOiBOb2RlQXR0cktleS5SQURJVVMsXHJcbiAgICBmaWxsOiBOb2RlQXR0cktleS5DT0xPUixcclxuICAgIHN0cm9rZVdpZHRoOiBOb2RlQXR0cktleS5TVFJPS0VfV0lEVEgsXHJcbiAgICBzdHJva2VDb2xvcjogTm9kZUF0dHJLZXkuU1RST0tFX0NPTE9SXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZW5kZXJOb2RlTWFuYWdlciB7XHJcbiAgICAvLyBwcm9ncmFtXHJcbiAgICBwcml2YXRlIGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0XHJcbiAgICBwcml2YXRlIGxpbWl0OiBudW1iZXJcclxuICAgIHByaXZhdGUgY291bnQgPSAwXHJcbiAgICBwcml2YXRlIHdpZHRoOiBudW1iZXJcclxuICAgIHByaXZhdGUgaGVpZ2h0OiBudW1iZXJcclxuICAgIHByaXZhdGUgcGl4ZWxSYXRpbzogbnVtYmVyXHJcbiAgICBwcml2YXRlIHByb2dyYW06IFdlYkdMUHJvZ3JhbVxyXG4gICAgcHJpdmF0ZSBhdHRyaWJ1dGVzOiBSZW5kZXJBdHRyaWJ1dGVcclxuICAgIHByaXZhdGUgaWRQcm9ncmFtOiBXZWJHTFByb2dyYW1cclxuICAgIHByaXZhdGUgaWRBdHRyaWJ1dGVzOiBSZW5kZXJBdHRyaWJ1dGVcclxuICAgIHByaXZhdGUgaWRUZXh0dXJlOiBXZWJHTFRleHR1cmVcclxuICAgIHByaXZhdGUgcmVuZGVySWRUb0lkOiB7IFtrZXk6IG51bWJlcl06IHN0cmluZyB9XHJcblxyXG4gICAgcHJpdmF0ZSBpZFRvSW5kZXg6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNyZWF0ZSByZW5kZXIgbm9kZSBtYW5hZ2VyXHJcbiAgICAgKiBAcGFyYW0gZ2wgV2ViR0wgY29udGV4dFxyXG4gICAgICogQHBhcmFtIHBhcmFtcyBuZXNzZXNhcnkgY29uZmlncyBmb3Igbm9kZSBtYW5hZ2VyXHJcbiAgICAgKiBAcGFyYW0gaWRUZXh0dXJlIHRleHR1cmUgc3RvcmUgZWxlbWVudHMgaWQgb2YgZWFjaCBwaXhlbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQsXHJcbiAgICAgICAgcGFyYW1zOiBOb2RlTWFuYWdlckNvbmZpZ3MsXHJcbiAgICAgICAgaWRUZXh0dXJlOiBXZWJHTFRleHR1cmVcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IHsgbGltaXQsIHdpZHRoLCBoZWlnaHQgfSA9IHBhcmFtc1xyXG4gICAgICAgIHRoaXMuZ2wgPSBnbFxyXG4gICAgICAgIHRoaXMubGltaXQgPSBsaW1pdFxyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XHJcbiAgICAgICAgdGhpcy5waXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMVxyXG5cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSBleHRyYWN0QXR0cmlidXRlc0Zyb21TaGFkZXIodmVydFNoYWRlclN0cilcclxuICAgICAgICB0aGlzLnByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKHRoaXMuZ2wsIHZlcnRTaGFkZXJTdHIsIGZyYWdTaGFkZXJTdHIsIHRoaXMuYXR0cmlidXRlcylcclxuXHJcbiAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXMgPSBleHRyYWN0QXR0cmlidXRlc0Zyb21TaGFkZXIoaWRWZXJ0U2hhZGVyU3RyKVxyXG4gICAgICAgIHRoaXMuaWRQcm9ncmFtID0gY3JlYXRlUHJvZ3JhbSh0aGlzLmdsLCBpZFZlcnRTaGFkZXJTdHIsIGlkRnJhZ1NoYWRlclN0ciwgdGhpcy5pZEF0dHJpYnV0ZXMpXHJcbiAgICAgICAgdGhpcy5pZFRleHR1cmUgPSBpZFRleHR1cmVcclxuICAgICAgICB0aGlzLnJlbmRlcklkVG9JZCA9IHt9XHJcblxyXG4gICAgICAgIHRoaXMuaWRUb0luZGV4ID0ge31cclxuXHJcbiAgICAgICAgLy8gaW5pdCBhcnJheXNcclxuICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTm9kZUF0dHJLZXkuVEVNUExBVEVdLmFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShbXHJcbiAgICAgICAgICAgIC0wLjUsIDAuMCwgMS4wLFxyXG4gICAgICAgICAgICAwLjAsIC0wLjUsIDEuMCxcclxuICAgICAgICAgICAgMC4wLCAwLjUsIDEuMCxcclxuICAgICAgICAgICAgMC41LCAwLjAsIDEuMCxcclxuICAgICAgICBdKVxyXG4gICAgICAgIC8vIFRPRE86IGNvbWJpbmUgdGhlIGZvbGxvd2luZyB0d28gbG9vcD9cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWF0dHIuaXNCdWlsZEluKSBhdHRyLmFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShhdHRyLnNpemUgKiB0aGlzLmxpbWl0KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIGluaXQgYnVmZmVyc1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XHJcbiAgICAgICAgICAgIGF0dHIuYnVmZmVyID0gY3JlYXRlQXJyYXlCdWZmZXIodGhpcy5nbCwgYXR0ci5hcnJheSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBpbml0IGlkIGF0dHJpYnV0ZXMgYW5kIGJ1ZmZlcnNcclxuICAgICAgICAvLyBUT0RPOiBoYXJkY29kZSBjaGVjaywgbmVlZCByZWZhY3RvclxyXG4gICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaWR4IDwgdGhpcy5hdHRyaWJ1dGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXNbaWR4XSA9IHRoaXMuYXR0cmlidXRlc1tpZHhdXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWF0dHIuaXNCdWlsZEluKSBhdHRyLmFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShhdHRyLnNpemUgKiB0aGlzLmxpbWl0KVxyXG4gICAgICAgICAgICAgICAgYXR0ci5idWZmZXIgPSBjcmVhdGVBcnJheUJ1ZmZlcih0aGlzLmdsLCBhdHRyLmFycmF5KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gaW5pdCB1bmlmb3Jtc1xyXG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pXHJcbiAgICAgICAgY29uc3QgcHJvamVjdGlvbkxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3Byb2plY3Rpb24nKVxyXG4gICAgICAgIGNvbnN0IHNjYWxlTG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLCAnc2NhbGUnKVxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3RyYW5zbGF0ZScpXHJcbiAgICAgICAgY29uc3Qgdmlld3BvcnRMb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sICd2aWV3cG9ydCcpXHJcbiAgICAgICAgY29uc3QgcGl4ZWxSYXRpb0xvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3BpeGVsUmF0aW8nKVxyXG5cclxuICAgICAgICAvLyB0aGlzLmdsLnZpZXdwb3J0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KSAvLyBUT0RPOiB2aWV3cG9ydCBzZXQsIG5vdCBuZWVkZWQ/IHB1dCBoZXJlIGluIGNhc2UgYnVnIGFwcGVhclxyXG5cclxuICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgICAgICBjb25zdCBwcm9qZWN0aW9uID0gbmV3IEZsb2F0MzJBcnJheShbXHJcbiAgICAgICAgICAgIDIgLyB0aGlzLndpZHRoLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAtMiAvIHRoaXMuaGVpZ2h0LCAwLFxyXG4gICAgICAgICAgICAtMSwgMSwgMVxyXG4gICAgICAgIF0pXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtTWF0cml4M2Z2KHByb2plY3Rpb25Mb2MsIGZhbHNlLCBwcm9qZWN0aW9uKVxyXG5cclxuICAgICAgICBjb25zdCBzY2FsZSA9IG5ldyBGbG9hdDMyQXJyYXkoWzEsIDFdKVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdihzY2FsZUxvYywgc2NhbGUpXHJcblxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IG5ldyBGbG9hdDMyQXJyYXkoWzAsIDBdKVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdih0cmFuc2xhdGVMb2MsIHRyYW5zbGF0ZSlcclxuXHJcbiAgICAgICAgY29uc3Qgdmlld3BvcnQgPSBuZXcgRmxvYXQzMkFycmF5KFt0aGlzLndpZHRoLCB0aGlzLmhlaWdodF0pXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmZ2KHZpZXdwb3J0TG9jLCB2aWV3cG9ydClcclxuXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMWYocGl4ZWxSYXRpb0xvYywgdGhpcy5waXhlbFJhdGlvKVxyXG5cclxuICAgICAgICAvLyBpZCB1bmlmb3JtcywgaWRlbnRpY2FsIHRvIG5vZGVcclxuICAgICAgICAvLyBUT0RPOiBuZWVkIHJlZmFjdG9yIHRvb1xyXG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLmlkUHJvZ3JhbSlcclxuICAgICAgICBjb25zdCBpZFByb2plY3Rpb25Mb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmlkUHJvZ3JhbSwgJ3Byb2plY3Rpb24nKVxyXG4gICAgICAgIGNvbnN0IGlkU2NhbGVMb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmlkUHJvZ3JhbSwgJ3NjYWxlJylcclxuICAgICAgICBjb25zdCBpZFRyYW5zbGF0ZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuaWRQcm9ncmFtLCAndHJhbnNsYXRlJylcclxuICAgICAgICBjb25zdCBpZFZpZXdwb3J0TG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5pZFByb2dyYW0sICd2aWV3cG9ydCcpXHJcbiAgICAgICAgY29uc3QgaWRQaXhlbFJhdGlvTG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5pZFByb2dyYW0sICdwaXhlbFJhdGlvJylcclxuXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtTWF0cml4M2Z2KGlkUHJvamVjdGlvbkxvYywgZmFsc2UsIHByb2plY3Rpb24pXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmZ2KGlkU2NhbGVMb2MsIHNjYWxlKVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdihpZFRyYW5zbGF0ZUxvYywgdHJhbnNsYXRlKVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdihpZFZpZXdwb3J0TG9jLCB2aWV3cG9ydClcclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0xZihpZFBpeGVsUmF0aW9Mb2MsIHRoaXMucGl4ZWxSYXRpbylcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldCBUcmFuc2Zvcm0gaW4gUmVuZGVyIE5vZGVcclxuICAgICAqIEBwYXJhbSB0cmFuc2Zvcm0gY3VycmVudCB0cmFuc2Zvcm0ocGFuJnpvb20gY29uZGl0aW9uKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0VHJhbnNmb3JtKHRyYW5zZm9ybTogVHJhbnNmb3JtKSB7XHJcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSlcclxuICAgICAgICBjb25zdCBzY2FsZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3NjYWxlJylcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGVMb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sICd0cmFuc2xhdGUnKVxyXG5cclxuICAgICAgICBjb25zdCBzY2FsZSA9IG5ldyBGbG9hdDMyQXJyYXkoW3RyYW5zZm9ybS5rLCB0cmFuc2Zvcm0ua10pXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmZ2KHNjYWxlTG9jLCBzY2FsZSlcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlID0gbmV3IEZsb2F0MzJBcnJheShbdHJhbnNmb3JtLngsIHRyYW5zZm9ybS55XSlcclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZnYodHJhbnNsYXRlTG9jLCB0cmFuc2xhdGUpXHJcblxyXG4gICAgICAgIC8vIGlkIHVuaWZvcm1zLCBpZGVudGljYWwgdG8gbm9kZVxyXG4gICAgICAgIC8vIFRPRE86IG5lZWQgcmVmYWN0b3IgdG9vXHJcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMuaWRQcm9ncmFtKVxyXG4gICAgICAgIGNvbnN0IGlkU2NhbGVMb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmlkUHJvZ3JhbSwgJ3NjYWxlJylcclxuICAgICAgICBjb25zdCBpZFRyYW5zbGF0ZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuaWRQcm9ncmFtLCAndHJhbnNsYXRlJylcclxuXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmZ2KGlkU2NhbGVMb2MsIHNjYWxlKVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdihpZFRyYW5zbGF0ZUxvYywgdHJhbnNsYXRlKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2hhbmdlIG5vZGUncyBhdHRyaWJ1dGVcclxuICAgICAqIEBwYXJhbSBub2RlIG5vZGUgZGF0YVxyXG4gICAgICogQHBhcmFtIGF0dHJpYnV0ZSBhdHRyaWJ1dGUga2V5IHRvIGNoYW5nZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2hhbmdlQXR0cmlidXRlKG5vZGU6IE5vZGUsIGF0dHJpYnV0ZTogTm9kZUF0dHIpIHtcclxuICAgICAgICBjb25zdCBrZXkgPSBOb2RlQXR0ck1hcFthdHRyaWJ1dGVdXHJcbiAgICAgICAgY29uc3QgYXR0ciA9IHRoaXMuYXR0cmlidXRlc1trZXldXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmlkVG9JbmRleFtub2RlLmlkKCldXHJcbiAgICAgICAgbGV0IGRhdGEgPSBudWxsXHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ3Bvc2l0aW9uJykge1xyXG4gICAgICAgICAgICBjb25zdCBwb3MgPSBub2RlLnBvc2l0aW9uKClcclxuICAgICAgICAgICAgZGF0YSA9IFtwb3MueCwgcG9zLnldXHJcbiAgICAgICAgfSBlbHNlIGlmIChhdHRyaWJ1dGUgPT09ICdmaWxsJykge1xyXG4gICAgICAgICAgICBjb25zdCBjb2wgPSBub2RlLmZpbGwoKVxyXG4gICAgICAgICAgICBkYXRhID0gW2NvbC5yLCBjb2wuZywgY29sLmIsIGNvbC5hXVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlID09PSAncmFkaXVzJykge1xyXG4gICAgICAgICAgICBkYXRhID0gW25vZGUucigpICogdGhpcy5waXhlbFJhdGlvXVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlID09PSAnc3Ryb2tlV2lkdGgnKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBbbm9kZS5zdHJva2VXaWR0aCgpICogdGhpcy5waXhlbFJhdGlvXVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlID09PSAnc3Ryb2tlQ29sb3InKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IG5vZGUuc3Ryb2tlQ29sb3IoKVxyXG4gICAgICAgICAgICBkYXRhID0gW2NvbC5yLCBjb2wuZywgY29sLmIsIGNvbC5hXVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vdCBzdXBwb3J0ZWQgTm9kZSBhdHRyaWJ1dGUuJylcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF0dHIuYXJyYXkuc2V0KGRhdGEsIGF0dHIuc2l6ZSAqIGluZGV4KVxyXG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYXR0ci5idWZmZXIpXHJcbiAgICAgICAgdGhpcy5nbC5idWZmZXJTdWJEYXRhKFxyXG4gICAgICAgICAgICB0aGlzLmdsLkFSUkFZX0JVRkZFUixcclxuICAgICAgICAgICAgYXR0ci5zaXplICogaW5kZXggKiBhdHRyLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULFxyXG4gICAgICAgICAgICBhdHRyLmFycmF5LFxyXG4gICAgICAgICAgICBhdHRyLnNpemUgKiBpbmRleCxcclxuICAgICAgICAgICAgYXR0ci5zaXplXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVmcmVzaCBhbGwgbm9kZXMgcG9zaXRpb24gYWZ0ZXIgbGF6eSB1cGRhdGVcclxuICAgICAqIEBwYXJhbSBub2RlcyBhbGwgbm9kZSBkYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWZyZXNoUG9zaXRpb24obm9kZXM6IE5vZGVbXSkge1xyXG4gICAgICAgIC8vIHNldCBhcnJheVxyXG4gICAgICAgIG5vZGVzLmZvckVhY2goKG5vZGUsIGkpID0+IHtcclxuICAgICAgICAgICAgLy8gVE9ETzogY29uc2lkZXIgbm9kZSBhbmQgcmVuZGVyIG5vZGUgYXR0cmlidXRlIG1hcHBpbmdcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBub2RlLnBvc2l0aW9uKClcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW05vZGVBdHRyS2V5LlBPU0lUSU9OXS5hcnJheVsyICogaV0gPSBwb3NpdGlvbi54XHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tOb2RlQXR0cktleS5QT1NJVElPTl0uYXJyYXlbMiAqIGkgKyAxXSA9IHBvc2l0aW9uLnlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWF0dHIuaXNCdWlsZEluKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIGF0dHIuYnVmZmVyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5idWZmZXJTdWJEYXRhKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wuQVJSQVlfQlVGRkVSLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5hcnJheSxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSAqIG5vZGVzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNsZWFyIG5vZGUgZGF0YVxyXG4gICAgICogbm90IGFjdHVhbGx5IGVyYXNlIGRhdGEsIGJ1dCByZXNldCBjb3VudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xlYXJEYXRhKCkge1xyXG4gICAgICAgIHRoaXMuY291bnQgPSAwXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgbm9kZXMgZGF0YSB0byBlbmdpbmVcclxuICAgICAqIEBwYXJhbSBub2RlcyBub2RlcyBkYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGREYXRhKG5vZGVzOiBOb2RlW10pIHtcclxuICAgICAgICAvLyBzZXQgYXJyYXlcclxuICAgICAgICBub2Rlcy5mb3JFYWNoKChub2RlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IGNvbnNpZGVyIG5vZGUgYW5kIHJlbmRlciBub2RlIGF0dHJpYnV0ZSBtYXBwaW5nXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gbm9kZS5wb3NpdGlvbigpXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tOb2RlQXR0cktleS5QT1NJVElPTl0uYXJyYXlbMiAqICh0aGlzLmNvdW50ICsgaSldID0gcG9zaXRpb24ueFxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTm9kZUF0dHJLZXkuUE9TSVRJT05dLmFycmF5WzIgKiAodGhpcy5jb3VudCArIGkpICsgMV0gPSBwb3NpdGlvbi55XHJcblxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTm9kZUF0dHJLZXkuUkFESVVTXS5hcnJheVt0aGlzLmNvdW50ICsgaV0gPSBub2RlLnIoKSAqIHRoaXMucGl4ZWxSYXRpb1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZmlsbCA9IG5vZGUuZmlsbCgpXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tOb2RlQXR0cktleS5DT0xPUl0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSldID0gZmlsbC5yXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tOb2RlQXR0cktleS5DT0xPUl0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSkgKyAxXSA9IGZpbGwuZ1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTm9kZUF0dHJLZXkuQ09MT1JdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpICsgMl0gPSBmaWxsLmJcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW05vZGVBdHRyS2V5LkNPTE9SXS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKSArIDNdID0gZmlsbC5hXHJcblxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTm9kZUF0dHJLZXkuU1RST0tFX1dJRFRIXS5hcnJheVt0aGlzLmNvdW50ICsgaV0gPVxyXG4gICAgICAgICAgICAgICAgbm9kZS5zdHJva2VXaWR0aCgpICogdGhpcy5waXhlbFJhdGlvXHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdHJva2VDb2xvciA9IG5vZGUuc3Ryb2tlQ29sb3IoKVxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTm9kZUF0dHJLZXkuU1RST0tFX0NPTE9SXS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKV0gPSBzdHJva2VDb2xvci5yXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tOb2RlQXR0cktleS5TVFJPS0VfQ09MT1JdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpICsgMV0gPVxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3IuZ1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTm9kZUF0dHJLZXkuU1RST0tFX0NPTE9SXS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKSArIDJdID1cclxuICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yLmJcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW05vZGVBdHRyS2V5LlNUUk9LRV9DT0xPUl0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSkgKyAzXSA9XHJcbiAgICAgICAgICAgICAgICBzdHJva2VDb2xvci5hXHJcblxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXJJZENvbG9yID0gZW5jb2RlUmVuZGVySWQoMiAqICh0aGlzLmNvdW50ICsgaSkpIC8vIE5PVEU6IG5vZGUgcmVuZGVyIGlkLCB1c2UgZXZlbiBpbnRlZ2VyXHJcbiAgICAgICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzW05vZGVJZEF0dHJLZXkuSURdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpXSA9IHJlbmRlcklkQ29sb3IuclxyXG4gICAgICAgICAgICB0aGlzLmlkQXR0cmlidXRlc1tOb2RlSWRBdHRyS2V5LklEXS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKSArIDFdID0gcmVuZGVySWRDb2xvci5nXHJcbiAgICAgICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzW05vZGVJZEF0dHJLZXkuSURdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpICsgMl0gPSByZW5kZXJJZENvbG9yLmJcclxuICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXNbTm9kZUlkQXR0cktleS5JRF0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSkgKyAzXSA9IHJlbmRlcklkQ29sb3IuYVxyXG5cclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJJZFRvSWRbMiAqICh0aGlzLmNvdW50ICsgaSldID0gbm9kZS5pZCgpXHJcbiAgICAgICAgICAgIHRoaXMuaWRUb0luZGV4W25vZGUuaWQoKV0gPSB0aGlzLmNvdW50ICsgaVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghYXR0ci5pc0J1aWxkSW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYXR0ci5idWZmZXIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJ1ZmZlclN1YkRhdGEoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbC5BUlJBWV9CVUZGRVIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5zaXplICogdGhpcy5jb3VudCAqIGF0dHIuYXJyYXkuQllURVNfUEVSX0VMRU1FTlQsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5hcnJheSxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLnNpemUgKiB0aGlzLmNvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSAqIG5vZGVzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gaWQgYnVmZmVyIGRhdGFcclxuICAgICAgICBjb25zdCBhdHRyID0gdGhpcy5pZEF0dHJpYnV0ZXNbTm9kZUlkQXR0cktleS5JRF1cclxuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIGF0dHIuYnVmZmVyKVxyXG4gICAgICAgIHRoaXMuZ2wuYnVmZmVyU3ViRGF0YShcclxuICAgICAgICAgICAgdGhpcy5nbC5BUlJBWV9CVUZGRVIsXHJcbiAgICAgICAgICAgIGF0dHIuc2l6ZSAqIHRoaXMuY291bnQgKiBhdHRyLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULFxyXG4gICAgICAgICAgICBhdHRyLmFycmF5LFxyXG4gICAgICAgICAgICBhdHRyLnNpemUgKiB0aGlzLmNvdW50LFxyXG4gICAgICAgICAgICBhdHRyLnNpemUgKiBub2Rlcy5sZW5ndGhcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIHRoaXMuY291bnQgKz0gbm9kZXMubGVuZ3RoXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZW5kZXIgaWQgdG8gaWRcclxuICAgICAqIEBwYXJhbSByZW5kZXJJZCByZW5kZXIgaWQgaW4gbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRJZEJ5UmVuZGVySWQocmVuZGVySWQ6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVySWRUb0lkW3JlbmRlcklkXVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZHJhdyBub2Rlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZHJhdygpIHtcclxuICAgICAgICBpZiAodGhpcy5jb3VudCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5nbC5lbmFibGUodGhpcy5nbC5CTEVORClcclxuICAgICAgICAgICAgdGhpcy5nbC5ibGVuZEZ1bmModGhpcy5nbC5PTkUsIHRoaXMuZ2wuT05FX01JTlVTX1NSQ19BTFBIQSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGF0dHIuaW5kZXgpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0ciwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBhdHRyLmJ1ZmZlcilcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wudmVydGV4QXR0cmliUG9pbnRlcihcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLkZMT0FULFxyXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSAqIGF0dHIuYXJyYXkuQllURVNfUEVSX0VMRU1FTlQsXHJcbiAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgaWYgKCFhdHRyLmlzQnVpbGRJbikgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJEaXZpc29yKGF0dHIuaW5kZXgsIDEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdsLmRyYXdBcnJheXNJbnN0YW5jZWQodGhpcy5nbC5UUklBTkdMRV9TVFJJUCwgMCwgNCwgdGhpcy5jb3VudClcclxuXHJcbiAgICAgICAgLy8gZHJhdyBpZFxyXG4gICAgICAgIHRoaXMuZ2wuYmxlbmRGdW5jKHRoaXMuZ2wuT05FLCB0aGlzLmdsLlpFUk8pXHJcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMuaWRQcm9ncmFtKVxyXG4gICAgICAgIHRoaXMuZ2wuYmluZEZyYW1lYnVmZmVyKHRoaXMuZ2wuRlJBTUVCVUZGRVIsIHRoaXMuaWRUZXh0dXJlKVxyXG5cclxuICAgICAgICB0aGlzLmlkQXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYXR0ci5pbmRleClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBhdHRyID0gdGhpcy5pZEF0dHJpYnV0ZXNbTm9kZUlkQXR0cktleS5JRF1cclxuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIGF0dHIuYnVmZmVyKVxyXG4gICAgICAgIHRoaXMuZ2wudmVydGV4QXR0cmliUG9pbnRlcihcclxuICAgICAgICAgICAgYXR0ci5pbmRleCxcclxuICAgICAgICAgICAgYXR0ci5zaXplLFxyXG4gICAgICAgICAgICB0aGlzLmdsLkZMT0FULFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgYXR0ci5zaXplICogYXR0ci5hcnJheS5CWVRFU19QRVJfRUxFTUVOVCxcclxuICAgICAgICAgICAgMFxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYkRpdmlzb3IoYXR0ci5pbmRleCwgMSlcclxuXHJcbiAgICAgICAgdGhpcy5nbC5kcmF3QXJyYXlzSW5zdGFuY2VkKHRoaXMuZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQsIHRoaXMuY291bnQpXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5GUkFNRUJVRkZFUiwgbnVsbClcclxuXHJcbiAgICAgICAgdGhpcy5nbC5lbmFibGUodGhpcy5nbC5CTEVORClcclxuICAgICAgICB0aGlzLmdsLmJsZW5kRnVuYyh0aGlzLmdsLk9ORSwgdGhpcy5nbC5PTkVfTUlOVVNfU1JDX0FMUEhBKVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IFwiI3ZlcnNpb24gMzAwIGVzXFxyXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcbmluIHZlYzMgaW5WZXJ0ZXhQb3M7XFxyXFxuaW4gdmVjMiBpblBvc2l0aW9uO1xcclxcbmluIGZsb2F0IGluUmFkaXVzO1xcclxcbmluIHZlYzQgaW5GaWxsO1xcclxcbmluIGZsb2F0IGluU3Ryb2tlV2lkdGg7XFxyXFxuaW4gdmVjNCBpblN0cm9rZUNvbG9yO1xcclxcblxcclxcbm91dCB2ZWMyIHBvcztcXHJcXG5vdXQgZmxvYXQgcmFkaXVzO1xcclxcbm91dCB2ZWM0IGNvbG9yO1xcclxcbm91dCBmbG9hdCBzdHJva2VXaWR0aDtcXHJcXG5vdXQgdmVjNCBzdHJva2VDb2xvcjtcXHJcXG5cXHJcXG51bmlmb3JtIG1hdDMgcHJvamVjdGlvbjtcXHJcXG51bmlmb3JtIHZlYzIgc2NhbGU7XFxyXFxudW5pZm9ybSB2ZWMyIHRyYW5zbGF0ZTtcXHJcXG51bmlmb3JtIHZlYzIgdmlld3BvcnQ7XFxyXFxuXFxyXFxudm9pZCBtYWluKHZvaWQpIHtcXHJcXG4gICAgZmxvYXQgc2l6ZSA9IGluUmFkaXVzICsgaW5TdHJva2VXaWR0aCAvIDIuO1xcclxcbiAgICByYWRpdXMgPSBpblJhZGl1cztcXHJcXG4gICAgY29sb3IgPSBpbkZpbGw7XFxyXFxuICAgIHN0cm9rZVdpZHRoID0gaW5TdHJva2VXaWR0aDtcXHJcXG4gICAgc3Ryb2tlQ29sb3IgPSBpblN0cm9rZUNvbG9yO1xcclxcbiAgICBmbG9hdCB2ZXJ0ZXhTaXplID0gc2l6ZSAqICgyLiAqIHNxcnQoMi4pKSAqIDEuNTsgLy8gTk9URTogeCAxLjUgdG8gcHJldmVudCBib3JkZXIgZmFjdG9yXFxyXFxuICAgIHBvcyA9IHNjYWxlICogaW5Qb3NpdGlvbiArIHRyYW5zbGF0ZTtcXHJcXG4gICAgbWF0MyB0cmFuc2Zvcm0gPSBtYXQzKFxcclxcbiAgICAgICAgdmVydGV4U2l6ZSwgMCwgMCxcXHJcXG4gICAgICAgIDAsIHZlcnRleFNpemUsIDAsXFxyXFxuICAgICAgICBwb3MueCwgcG9zLnksIDFcXHJcXG4gICAgKTtcXHJcXG5cXHJcXG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KHByb2plY3Rpb24gKiB0cmFuc2Zvcm0gKiBpblZlcnRleFBvcywgMS4pO1xcclxcbn1cIjsiLCIvKipcclxuICogQGRlc2NyaXB0aW9uIHJlbmRlciBncmFwaCB1c2luZyB3ZWJnbFxyXG4gKiBAYXV0aG9yIFhpYW9kb25nIFpoYW8gPHpoYW94aWFvZG9uZ0B6anUuZWR1LmNuPlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFJlbmRlck5vZGVNYW5hZ2VyIH0gZnJvbSAnLi9lbGVtZW50cy9ub2RlL3JlbmRlci1ub2RlJ1xyXG5pbXBvcnQgTm9kZSBmcm9tICcuLi9ub2RlJ1xyXG5pbXBvcnQgTGluayBmcm9tICdzcmMvbGluaydcclxuaW1wb3J0IHsgUmVuZGVyTGlua01hbmFnZXIgfSBmcm9tICcuL2VsZW1lbnRzL2xpbmsvcmVuZGVyLWxpbmsnXHJcbmltcG9ydCB7IFRyYW5zZm9ybSwgUG9zaXRpb24gfSBmcm9tICcuLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyBSZW5kZXJlckNvbmZpZ3MgfSBmcm9tICcuL2ludGVyZmFjZXMnXHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnXHJcbmltcG9ydCB7IGRlY29kZVJlbmRlcklkIH0gZnJvbSAnLi91dGlscydcclxuXHJcbmV4cG9ydCBjbGFzcyBSZW5kZXJlciB7XHJcbiAgICBwdWJsaWMgbm9kZU1hbmFnZXI6IFJlbmRlck5vZGVNYW5hZ2VyXHJcbiAgICBwdWJsaWMgbGlua01hbmFnZXI6IFJlbmRlckxpbmtNYW5hZ2VyXHJcblxyXG4gICAgcHJpdmF0ZSBnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dFxyXG4gICAgcHJpdmF0ZSBiYWNrZ3JvdW5kQ29sb3I6IENvbG9yXHJcbiAgICBwcml2YXRlIHdpZHRoOiBudW1iZXJcclxuICAgIHByaXZhdGUgaGVpZ2h0OiBudW1iZXJcclxuICAgIHByaXZhdGUgaWRUZXh0dXJlOiBXZWJHTFRleHR1cmVcclxuXHJcbiAgICAvKipcclxuICAgICAqIGNyZWF0ZSByZW5kZXJlciBvYmplY3RcclxuICAgICAqIEBwYXJhbSBjb25maWdzIHtjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgYmFja2dyb3VuZENvbG9yOiBDb2xvciwgZGVmYXVsdENvbmZpZ3M6IE9iamVjdH0gY29uZmlncyBwYXNzZWQgdG8gcmVuZGVyZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZ3M6IFJlbmRlcmVyQ29uZmlncykge1xyXG4gICAgICAgIGNvbnN0IHsgY2FudmFzLCB3aWR0aCwgaGVpZ2h0LCBiYWNrZ3JvdW5kQ29sb3IsIG5vZGVMaW1pdCwgbGlua0xpbWl0IH0gPSBjb25maWdzXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5nbCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbDInKVxyXG4gICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldFYgcmVxdWlyZXMgV2ViR0wyIHN1cHBvcnRlZCBieSB5b3VyIGJyb3dzZXInKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvclxyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdElkVGV4dHVyZSgpXHJcblxyXG4gICAgICAgIHRoaXMubm9kZU1hbmFnZXIgPSBuZXcgUmVuZGVyTm9kZU1hbmFnZXIoXHJcbiAgICAgICAgICAgIHRoaXMuZ2wsXHJcbiAgICAgICAgICAgIHsgd2lkdGgsIGhlaWdodCwgbGltaXQ6IG5vZGVMaW1pdCB9LFxyXG4gICAgICAgICAgICB0aGlzLmlkVGV4dHVyZVxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLmxpbmtNYW5hZ2VyID0gbmV3IFJlbmRlckxpbmtNYW5hZ2VyKFxyXG4gICAgICAgICAgICB0aGlzLmdsLFxyXG4gICAgICAgICAgICB7IHdpZHRoLCBoZWlnaHQsIGxpbWl0OiBsaW5rTGltaXQgfSxcclxuICAgICAgICAgICAgdGhpcy5pZFRleHR1cmVcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBkaXNwb3NlIHJlbmRlcmVyIHN0dWZmc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICAvLyByZWZlcjogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIzNjA2NTgxXHJcbiAgICAgICAgY29uc3QgbnVtVGV4dHVyZVVuaXRzID0gdGhpcy5nbC5nZXRQYXJhbWV0ZXIodGhpcy5nbC5NQVhfVEVYVFVSRV9JTUFHRV9VTklUUylcclxuICAgICAgICBmb3IgKGxldCB1bml0ID0gMDsgdW5pdCA8IG51bVRleHR1cmVVbml0czsgKyt1bml0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuYWN0aXZlVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkUwICsgdW5pdClcclxuICAgICAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfMkQsIG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFX0NVQkVfTUFQLCBudWxsKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIG51bGwpXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG51bGwpXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kUmVuZGVyYnVmZmVyKHRoaXMuZ2wuUkVOREVSQlVGRkVSLCBudWxsKVxyXG4gICAgICAgIHRoaXMuZ2wuYmluZEZyYW1lYnVmZmVyKHRoaXMuZ2wuRlJBTUVCVUZGRVIsIG51bGwpXHJcbiAgICAgICAgdGhpcy5nbC5nZXRFeHRlbnNpb24oJ1dFQkdMX2xvc2VfY29udGV4dCcpLmxvc2VDb250ZXh0KClcclxuICAgICAgICAvLyBUT0RPOiBtYXliZSBuZWVkIGZyZWUgbW9yZSBidWZmZXJzIG9yIHNvbWV0aGluZyBlbHNlXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQgY2xlYXJDb2xvciBmb3IgcmVuZGVyZXJcclxuICAgICAqIEBwYXJhbSBjb2xvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0QmFja2dyb3VuZENvbG9yKGNvbG9yOiBDb2xvcikge1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gY29sb3JcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNsZWFyIGRhdGEgaW4gcmVuZGVyZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNsZWFyRGF0YSgpIHtcclxuICAgICAgICB0aGlzLm5vZGVNYW5hZ2VyLmNsZWFyRGF0YSgpXHJcbiAgICAgICAgdGhpcy5saW5rTWFuYWdlci5jbGVhckRhdGEoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIG5vZGVzIHRvIG5vZGUgbWFuYWdlclxyXG4gICAgICogQHBhcmFtIG5vZGVzIG5vZGUgZGF0YSBpbiBOZXRWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGROb2Rlcyhub2RlczogTm9kZVtdKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlTWFuYWdlci5hZGREYXRhKG5vZGVzKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIGxpbmtzIHRvIGxpbmsgbWFuYWdlclxyXG4gICAgICogQHBhcmFtIGxpbmtzIGxpbmsgZGF0YSBpbiBOZXRWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRMaW5rcyhsaW5rczogTGlua1tdKSB7XHJcbiAgICAgICAgdGhpcy5saW5rTWFuYWdlci5hZGREYXRhKGxpbmtzKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRUcmFuc2Zvcm0odHJhbnNmb3JtOiBUcmFuc2Zvcm0pIHtcclxuICAgICAgICB0aGlzLm5vZGVNYW5hZ2VyLnNldFRyYW5zZm9ybSh0cmFuc2Zvcm0pXHJcbiAgICAgICAgdGhpcy5saW5rTWFuYWdlci5zZXRUcmFuc2Zvcm0odHJhbnNmb3JtKVxyXG4gICAgICAgIHRoaXMuZHJhdygpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBkcmF3IGFsbCBlbGVtZW50c1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZHJhdygpIHtcclxuICAgICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLkZSQU1FQlVGRkVSLCB0aGlzLmlkVGV4dHVyZSlcclxuICAgICAgICB0aGlzLmdsLmNsZWFyQ29sb3IoMSwgMSwgMSwgMSlcclxuICAgICAgICB0aGlzLmdsLmNsZWFyKHRoaXMuZ2wuQ09MT1JfQlVGRkVSX0JJVClcclxuICAgICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLkZSQU1FQlVGRkVSLCBudWxsKVxyXG5cclxuICAgICAgICB0aGlzLmdsLmNsZWFyQ29sb3IoXHJcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yLnIsXHJcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yLmcsXHJcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yLmIsXHJcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yLmFcclxuICAgICAgICApXHJcbiAgICAgICAgdGhpcy5nbC5jbGVhcih0aGlzLmdsLkNPTE9SX0JVRkZFUl9CSVQpXHJcbiAgICAgICAgdGhpcy5saW5rTWFuYWdlci5kcmF3KClcclxuICAgICAgICB0aGlzLm5vZGVNYW5hZ2VyLmRyYXcoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0IGVsZW1lbnQncyBpZCBhdCAoeCwgeSkgb2YgY2FudmFzIGlmIGV4aXN0c1xyXG4gICAgICogQHBhcmFtIHggeCBwb3NcclxuICAgICAqIEBwYXJhbSB5IHkgcG9zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRJZEJ5UG9zaXRpb24ocG9zaXRpb246IFBvc2l0aW9uKTogc3RyaW5nIHwgW3N0cmluZywgc3RyaW5nXSB7XHJcbiAgICAgICAgY29uc3QgcmVuZGVySWQgPSB0aGlzLnJlYWRJZFRleHR1cmUocG9zaXRpb24pXHJcbiAgICAgICAgaWYgKHJlbmRlcklkID49IDApIHtcclxuICAgICAgICAgICAgaWYgKHJlbmRlcklkICUgMiA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gTk9URTogbm9kZSBoYXMgZXZlbiByZW5kZXIgaWQsIGxpbmsgaGFzIG9kZCByZW5kZXIgaWRcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVJZCA9IHRoaXMubm9kZU1hbmFnZXIuZ2V0SWRCeVJlbmRlcklkKHJlbmRlcklkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVJZFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGlua0lkcyA9IHRoaXMubGlua01hbmFnZXIuZ2V0SWRzQnlSZW5kZXJJZChyZW5kZXJJZClcclxuICAgICAgICAgICAgICAgIHJldHVybiBsaW5rSWRzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZWFkIHBpeGVsIHZhbHVlIGF0ICh4LCB5KSBvZiB0ZXh0dXJlXHJcbiAgICAgKiBAcGFyYW0geCB4IHBvc1xyXG4gICAgICogQHBhcmFtIHkgeSBwb3NcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRJZFRleHR1cmUocG9zaXRpb246IFBvc2l0aW9uKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCByYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcclxuICAgICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLlJFQURfRlJBTUVCVUZGRVIsIHRoaXMuaWRUZXh0dXJlKVxyXG4gICAgICAgIGNvbnN0IHJlYWRQaXhlbEJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KFsyNTUsIDI1NSwgMjU1LCAyNTVdKSAvLyAtMVxyXG4gICAgICAgIHRoaXMuZ2wucmVhZFBpeGVscyhcclxuICAgICAgICAgICAgLy8gIVdhcm5pbmc6IHggYW5kIHkgYXJlIG9wdGlvbmFsIGluIFBvc2l0aW9uLCBuZWVkIHRvIGNoZWNrIHRoZW1cclxuICAgICAgICAgICAgcG9zaXRpb24ueCAqIHJhdGlvLFxyXG4gICAgICAgICAgICBwb3NpdGlvbi55ICogcmF0aW8sXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgIHRoaXMuZ2wuUkdCQSxcclxuICAgICAgICAgICAgdGhpcy5nbC5VTlNJR05FRF9CWVRFLFxyXG4gICAgICAgICAgICByZWFkUGl4ZWxCdWZmZXJcclxuICAgICAgICApXHJcbiAgICAgICAgY29uc3Qgb2JqZWN0SUQgPSBkZWNvZGVSZW5kZXJJZChyZWFkUGl4ZWxCdWZmZXIpXHJcblxyXG4gICAgICAgIHJldHVybiBvYmplY3RJRFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaW5pdCBXZWJHTCB0ZXh0dXJlIGZvciByZWNvcmRpbmcgcG9zaXRpb24gb2YgZWxlbWVudHNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBpbml0SWRUZXh0dXJlKCkge1xyXG4gICAgICAgIGNvbnN0IGdsID0gdGhpcy5nbFxyXG4gICAgICAgIGNvbnN0IHBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxXHJcbiAgICAgICAgY29uc3Qgc2NyZWVuV2lkdGggPSB0aGlzLndpZHRoICogcGl4ZWxSYXRpb1xyXG4gICAgICAgIGNvbnN0IHNjcmVlbkhlaWdodCA9IHRoaXMuaGVpZ2h0ICogcGl4ZWxSYXRpb1xyXG5cclxuICAgICAgICBjb25zdCBmYm8gPSBnbC5jcmVhdGVGcmFtZWJ1ZmZlcigpXHJcbiAgICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBmYm8pXHJcblxyXG4gICAgICAgIGNvbnN0IGlkVGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKVxyXG4gICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIGlkVGV4dHVyZSlcclxuICAgICAgICBnbC50ZXhJbWFnZTJEKFxyXG4gICAgICAgICAgICBnbC5URVhUVVJFXzJELFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICBnbC5SR0JBLFxyXG4gICAgICAgICAgICBzY3JlZW5XaWR0aCxcclxuICAgICAgICAgICAgc2NyZWVuSGVpZ2h0LFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICBnbC5SR0JBLFxyXG4gICAgICAgICAgICBnbC5VTlNJR05FRF9CWVRFLFxyXG4gICAgICAgICAgICBudWxsXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVIpXHJcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLkxJTkVBUilcclxuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKVxyXG4gICAgICAgIGdsLmZyYW1lYnVmZmVyVGV4dHVyZTJEKGdsLkZSQU1FQlVGRkVSLCBnbC5DT0xPUl9BVFRBQ0hNRU5UMCwgZ2wuVEVYVFVSRV8yRCwgaWRUZXh0dXJlLCAwKVxyXG5cclxuICAgICAgICAvLyBUT0RPOiBuZWVkIHNpbXBsaWZ5XHJcbiAgICAgICAgZ2wuZHJhd0J1ZmZlcnMoWzBdLm1hcCgodikgPT4gdiArIGdsLkNPTE9SX0FUVEFDSE1FTlQwKSlcclxuXHJcbiAgICAgICAgY29uc3QgcmJvID0gZ2wuY3JlYXRlUmVuZGVyYnVmZmVyKClcclxuICAgICAgICBnbC5iaW5kUmVuZGVyYnVmZmVyKGdsLlJFTkRFUkJVRkZFUiwgcmJvKVxyXG4gICAgICAgIGdsLmNsZWFyQ29sb3IoMSwgMSwgMSwgMSlcclxuICAgICAgICBnbC5yZW5kZXJidWZmZXJTdG9yYWdlKGdsLlJFTkRFUkJVRkZFUiwgZ2wuREVQVEgyNF9TVEVOQ0lMOCwgc2NyZWVuV2lkdGgsIHNjcmVlbkhlaWdodClcclxuICAgICAgICBnbC5iaW5kUmVuZGVyYnVmZmVyKGdsLlJFTkRFUkJVRkZFUiwgbnVsbClcclxuICAgICAgICBnbC5mcmFtZWJ1ZmZlclJlbmRlcmJ1ZmZlcihcclxuICAgICAgICAgICAgZ2wuRlJBTUVCVUZGRVIsXHJcbiAgICAgICAgICAgIGdsLkRFUFRIX1NURU5DSUxfQVRUQUNITUVOVCxcclxuICAgICAgICAgICAgZ2wuUkVOREVSQlVGRkVSLFxyXG4gICAgICAgICAgICByYm9cclxuICAgICAgICApXHJcblxyXG4gICAgICAgIGlmIChnbC5jaGVja0ZyYW1lYnVmZmVyU3RhdHVzKGdsLkZSQU1FQlVGRkVSKSAhPT0gZ2wuRlJBTUVCVUZGRVJfQ09NUExFVEUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGcmFtZWJ1ZmZlciBnZW5lcmF0ZSBmYWlsZWQnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKVxyXG5cclxuICAgICAgICB0aGlzLmlkVGV4dHVyZSA9IGZib1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIFhpYW9kb25nIFpoYW8gPHpoYW94aWFvZG9uZ0B6anUuZWR1LmNuPlxyXG4gKiBAZGVzY3JpcHRpb24gdXRpbGl0eSBmdW5jdGlvbnMgZm9yIHJlbmRlcmVyXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuLi9pbnRlcmZhY2VzJ1xyXG5cclxuLyoqXHJcbiAqIGNvbXBpbGUgd2ViZ2wgc2hhZGVyXHJcbiAqIEBwYXJhbSBnbCBXZWJHTCBpbnN0YW5jZVxyXG4gKiBAcGFyYW0gc2hhZGVyU3RyIHNoYWRlciBmaWxlIGluIHN0cmluZ1xyXG4gKiBAcGFyYW0gc2hhZGVyVHlwZSB2ZXJ0ZXggb3IgZnJhZ21lbnQgc2hhZGVyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZVNoYWRlcihcclxuICAgIGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0LFxyXG4gICAgc2hhZGVyU3RyOiBzdHJpbmcsXHJcbiAgICBzaGFkZXJUeXBlOiBudW1iZXJcclxuKTogV2ViR0xTaGFkZXIge1xyXG4gICAgY29uc3Qgc2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHNoYWRlclR5cGUpXHJcbiAgICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzaGFkZXJTdHIpXHJcbiAgICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcilcclxuICAgIGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaGFkZXIgY29tcGlsZSBmYWlsZWQ6ICcgKyBnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcikpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNoYWRlclxyXG59XHJcblxyXG4vKipcclxuICogZ2VuZXJhdGUgV2ViR0wgcHJvZ3JhbVxyXG4gKiBAcGFyYW0gZ2wgV2ViR0wgaW5zdGFuY2VcclxuICogQHBhcmFtIHZlcnRTaGFkZXJTdHIgdmVydGV4IHNoYWRlciBpbiBzdHJpbmcgZm9ybWF0XHJcbiAqIEBwYXJhbSBmcmFnU2hhZGVyU3RyIGZyYWdtZW50IHNoYWRlciBpbiBzdHJpbmcgZm9ybWF0XHJcbiAqIEBwYXJhbSBhdHRyaWJ1dGVzIGF0dHJpYnV0ZXNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9ncmFtKFxyXG4gICAgZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQsXHJcbiAgICB2ZXJ0U2hhZGVyU3RyOiBzdHJpbmcsXHJcbiAgICBmcmFnU2hhZGVyU3RyOiBzdHJpbmcsXHJcbiAgICBhdHRyaWJ1dGVzOiB7IG5hbWU6IHN0cmluZzsgaW5kZXg6IG51bWJlciB9W11cclxuKTogV2ViR0xQcm9ncmFtIHtcclxuICAgIGNvbnN0IHZlcnRTaGFkZXIgPSBjb21waWxlU2hhZGVyKGdsLCB2ZXJ0U2hhZGVyU3RyLCBnbC5WRVJURVhfU0hBREVSKVxyXG4gICAgY29uc3QgZnJhZ1NoYWRlciA9IGNvbXBpbGVTaGFkZXIoZ2wsIGZyYWdTaGFkZXJTdHIsIGdsLkZSQUdNRU5UX1NIQURFUilcclxuXHJcbiAgICBjb25zdCBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpXHJcblxyXG4gICAgYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XHJcbiAgICAgICAgZ2wuYmluZEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIGF0dHIuaW5kZXgsIGF0dHIubmFtZSlcclxuICAgIH0pXHJcblxyXG4gICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZlcnRTaGFkZXIpXHJcbiAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnJhZ1NoYWRlcilcclxuXHJcbiAgICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKVxyXG4gICAgaWYgKCFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkxJTktfU1RBVFVTKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGxpbmsgc2hhZGVyczogJHtnbC5nZXRQcm9ncmFtSW5mb0xvZyhwcm9ncmFtKX1gKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwcm9ncmFtXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBjcmVhdGUgV2ViR0wgYXJyYXkgYnVmZmVyIGdpdmVuIGRhdGEgYXJyYXlcclxuICogQHBhcmFtIGdsIFdlYkdMIGNvbnRleHRcclxuICogQHBhcmFtIGRhdGEgZGF0YSB0byBzdG9yZSBpbiBidWZmZXJcclxuICogQHJldHVybnMgV2ViR0wgYnVmZmVyIHN0b3JlIGdpdmVuIGRhdGFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBcnJheUJ1ZmZlcihnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dCwgZGF0YTogRmxvYXQzMkFycmF5KTogV2ViR0xCdWZmZXIge1xyXG4gICAgY29uc3QgYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKClcclxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBidWZmZXIpXHJcbiAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgZGF0YSwgZ2wuRFlOQU1JQ19EUkFXKVxyXG4gICAgcmV0dXJuIGJ1ZmZlclxyXG59XHJcblxyXG4vKipcclxuICogZXh0cmFjdCBhdHRyaWJ1dGVzIGZyb20gYSBzaGFkZXIgc3JpbmdcclxuICogQHBhcmFtIHtzdHJpbmd9IHNoYWRlclN0clxyXG4gKiBAcmV0dXJucyB7UmVuZGVyQXR0cmlidXRlW119IGF0dHJpYnV0ZXMgYXJyYXlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0QXR0cmlidXRlc0Zyb21TaGFkZXIoc2hhZGVyU3RyOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IG1hdGNoaW5ncyA9IHNoYWRlclN0ci5tYXRjaCgvaW5cXHMuKjsvZylcclxuICAgIHJldHVybiBtYXRjaGluZ3MubWFwKChtYXRjaCwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBuYW1lID0gbWF0Y2guc3BsaXQoJyAnKVsyXS5zbGljZSgwLCAtMSlcclxuICAgICAgICBjb25zdCB0eXBlID0gbWF0Y2guc3BsaXQoJyAnKVsxXVxyXG4gICAgICAgIGxldCBzaXplID0gMVxyXG4gICAgICAgIGlmICh0eXBlLnNsaWNlKDAsIDMpID09PSAndmVjJykge1xyXG4gICAgICAgICAgICBzaXplID0gTnVtYmVyKHR5cGUuc2xpY2UoLTEpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaXNCdWlsZEluID0gZmFsc2VcclxuICAgICAgICBpZiAobmFtZSA9PT0gJ2luVmVydGV4UG9zJykge1xyXG4gICAgICAgICAgICBpc0J1aWxkSW4gPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIHNpemUsXHJcbiAgICAgICAgICAgIGluZGV4LFxyXG4gICAgICAgICAgICBpc0J1aWxkSW5cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG4vKipcclxuICogZW5jb2RlIGEgcmVuZGVyIGlkIGFzIGNvbG9yIHRvIHBhc3MgaW4gdGV4dHVyZVxyXG4gKiBAcGFyYW0gaWQgcmVuZGVyIGlkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlUmVuZGVySWQoaWQ6IG51bWJlcik6IENvbG9yIHtcclxuICAgIC8vIHNwbGl0IGEgbGFyZ2UgbnVtYmVyIGJ5IDgtYml0OiBpZCA9IGNvbmNhdChhLCBiLCBnLCByKSwgYW5kIG5vcm1hbGl6ZSB0aGVtIGludG8gKDAsIDEpXHJcbiAgICBjb25zdCByID0gKGlkICYgMjU1KSAvIDI1NS4wXHJcbiAgICBjb25zdCBnID0gKChpZCA+PiA4KSAmIDI1NSkgLyAyNTUuMFxyXG4gICAgY29uc3QgYiA9ICgoaWQgPj4gMTYpICYgMjU1KSAvIDI1NS4wXHJcbiAgICBjb25zdCBhID0gKChpZCA+PiAyNCkgJiAyNTUpIC8gMjU1LjBcclxuICAgIHJldHVybiB7IHIsIGcsIGIsIGEgfVxyXG59XHJcblxyXG4vKipcclxuICogZGVjb2RlIHBpeGVsIHZhbHVlIHRvIG51bWJlclxyXG4gKiBAcGFyYW0gcGl4ZWxWYWwgYSBwaXhlbCdzIHZhbHVlIG9uIHRleHR1cmVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVSZW5kZXJJZChwaXhlbFZhbDogVWludDhBcnJheSk6IG51bWJlciB7XHJcbiAgICAvLyBwYXJzZSBub3JtYWxpemVkIHBhcnRzIG9mIGlkIG51bWJlciwgYml0IHNoaWZ0IHRvIG9yaWdpbiBwb3NpdGlvbiBhbmQgY29uY2F0XHJcbiAgICBjb25zdCByZW5kZXJJZCA9IHBpeGVsVmFsWzBdIHwgKHBpeGVsVmFsWzFdIDw8IDgpIHwgKHBpeGVsVmFsWzJdIDw8IDE2KSB8IChwaXhlbFZhbFszXSA8PCAyNClcclxuICAgIHJldHVybiByZW5kZXJJZFxyXG59XHJcbiIsIi8qKlxyXG4gKiBUZXN0IHdoZXRoZXIgYSBzdHJpbmcgY2FuIGJlIGEgdmFsaWQgaWQgb2YgYSBOb2RlLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWU6IHRoZSBzdHJpbmcgdG9iZSB0ZXN0ZWRcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZElkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUubGVuZ3RoID4gMFxyXG59XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIEppYWNoZW5nIFBhbiA8amFja2llYW54aXNAZ21haWwuY29tPlxyXG4gKiBAZGVzY3JpcHRpb24gTWFwMiBpcyBhIE1hcCBkYXRhIHN0cnVjdHVyZSB3aGljaCBtYXBzIHR3byBrZXlzIHRvIG9uZSB2YWx1ZS5cclxuICogQFVzYWdlIHNhbWUgdG8gTWFwIGRhdGEgc3RydWN0dXJlIGluIEVTNi5cclxuICogQGRlcGVuZGVuY2VzIE5vbmVcclxuICovXHJcblxyXG5jb25zdCBKT0lOID0gU3RyaW5nLmZyb21DaGFyQ29kZSg3KVxyXG5jb25zdCBpc0tleXMgPSAoa2V5czogQXJyYXk8c3RyaW5nPikgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBrZXlzIGluc3RhbmNlb2YgQXJyYXkgJiZcclxuICAgICAgICBrZXlzLmxlbmd0aCA9PT0gMiAmJlxyXG4gICAgICAgIGtleXMuZXZlcnkoKGtleSkgPT4ga2V5ICE9PSB1bmRlZmluZWQgJiYga2V5ICE9PSBudWxsKVxyXG4gICAgKVxyXG59XHJcbmNsYXNzIE1hcDIge1xyXG4gICAgcHJpdmF0ZSBtYXAgPSBuZXcgTWFwKClcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihlbnRyaWVzPzogQXJyYXk8QXJyYXk8YW55Pj4pIHtcclxuICAgICAgICBpZiAoZW50cmllcyBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBba2V5LCB2YWx1ZV0gPSBlbnRyeVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoa2V5LCB2YWx1ZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IHNpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLnNpemVcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlKGtleXM6IEFycmF5PHN0cmluZz4pIHtcclxuICAgICAgICBpZiAoaXNLZXlzKGtleXMpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGtleXMuam9pbihKT0lOKVxyXG4gICAgICAgICAgICBjb25zdCBrZXlfID0ga2V5c1sxXSArIEpPSU4gKyBrZXlzWzBdXHJcbiAgICAgICAgICAgIGxldCBtYXAgPSB0aGlzLm1hcFxyXG4gICAgICAgICAgICBtYXAuZGVsZXRlKGtleSlcclxuICAgICAgICAgICAgbWFwLmRlbGV0ZShrZXlfKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0KGtleXM6IEFycmF5PHN0cmluZz4sIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBpZiAoaXNLZXlzKGtleXMpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGtleXMuam9pbihKT0lOKVxyXG4gICAgICAgICAgICBjb25zdCBrZXlfID0ga2V5c1sxXSArIEpPSU4gKyBrZXlzWzBdXHJcbiAgICAgICAgICAgIGxldCBtYXAgPSB0aGlzLm1hcFxyXG4gICAgICAgICAgICBpZiAoIW1hcC5oYXMoa2V5XykpIHtcclxuICAgICAgICAgICAgICAgIG1hcC5zZXQoa2V5LCB2YWx1ZSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1hcC5zZXQoa2V5XywgdmFsdWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KGtleXM6IEFycmF5PHN0cmluZz4pIHtcclxuICAgICAgICBpZiAoaXNLZXlzKGtleXMpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGtleXMuam9pbihKT0lOKVxyXG4gICAgICAgICAgICBjb25zdCBrZXlfID0ga2V5c1sxXSArIEpPSU4gKyBrZXlzWzBdXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcC5nZXQoa2V5KSB8fCB0aGlzLm1hcC5nZXQoa2V5XylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYXMoa2V5czogQXJyYXk8c3RyaW5nPikge1xyXG4gICAgICAgIGlmIChpc0tleXMoa2V5cykpIHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0ga2V5cy5qb2luKEpPSU4pXHJcbiAgICAgICAgICAgIGNvbnN0IGtleV8gPSBrZXlzWzFdICsgSk9JTiArIGtleXNbMF1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFwLmhhcyhrZXkpIHx8IHRoaXMubWFwLmhhcyhrZXlfKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9yRWFjaChmdW5jOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMubWFwLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgbGV0IGtleXMgPSBrZXkuc3BsaXQoSk9JTilcclxuICAgICAgICAgICAgZnVuYyh2YWx1ZSwga2V5cywgdGhpcylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbnRyaWVzKCkge1xyXG4gICAgICAgIHJldHVybiBbLi4udGhpcy5tYXAuZW50cmllcygpXS5tYXAoKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGVudHJ5WzBdLnNwbGl0KEpPSU4pXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZW50cnlbMV1cclxuICAgICAgICAgICAgcmV0dXJuIFtrZXksIHZhbHVlXVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGtleXMoKSB7XHJcbiAgICAgICAgbGV0IGtleXMgPSBbLi4udGhpcy5tYXAua2V5cygpXVxyXG4gICAgICAgIHJldHVybiBrZXlzLm1hcCgoa2V5KSA9PiBrZXkuc3BsaXQoSk9JTikpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbHVlcygpIHtcclxuICAgICAgICByZXR1cm4gWy4uLnRoaXMubWFwLnZhbHVlcygpXVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXAyXHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIFhpYW9kb25nIFpoYW8gPHpoYW94aWFvZG9uZ0B6anUuZWR1LmNuPlxyXG4gKiBAZGVzY3JpcHRpb24gc29tZSB1dGlsaXR5IGZ1bmN0aW9uc1xyXG4gKi9cclxuXHJcbmltcG9ydCB7IE5vZGVMaW5rRGF0YSB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJ1xyXG5cclxuLyoqXHJcbiAqIGdpdmVuIGEgZ3JhcGggZGF0YSB3aXRoIHBvc2l0aW9uLCByZXR1cm4gYSBjb3B5IG9mIGdyYXBoLCB3aXRoIHBvc2l0aW9uIHRyYW5zZm9ybWVkIHRvIGNlbnRlciBvZiBnaXZlbiBzaXplXHJcbiAqIEBwYXJhbSBncmFwaCBub2RlIGxpbmsgZ3JhcGggZGF0YVxyXG4gKiBAcGFyYW0gc2l6ZSBncmFwaCBzaXplIChtYXgod2lkdGgsIGhlaWdodCkpXHJcbiAqIEBwYXJhbSBjZW50ZXJYIHggcG9zIG9mIGdyYXBoIGNlbnRlclxyXG4gKiBAcGFyYW0gY2VudGVyWSB5IHBvcyBvZiBncmFwaCBjZW50ZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1HcmFwaFBvc2l0aW9uKFxyXG4gICAgZ3JhcGg6IE5vZGVMaW5rRGF0YSxcclxuICAgIHNpemU6IG51bWJlcixcclxuICAgIGNlbnRlclg6IG51bWJlcixcclxuICAgIGNlbnRlclk6IG51bWJlclxyXG4pIHtcclxuICAgIGNvbnN0IHRhcmdldEdyYXBoOiBOb2RlTGlua0RhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGdyYXBoKSlcclxuICAgIGNvbnN0IHhzID0gdGFyZ2V0R3JhcGgubm9kZXMubWFwKChub2RlKSA9PiBub2RlLngpXHJcbiAgICBjb25zdCB5cyA9IHRhcmdldEdyYXBoLm5vZGVzLm1hcCgobm9kZSkgPT4gbm9kZS55KVxyXG4gICAgY29uc3QgeE1pbiA9IE1hdGgubWluKC4uLnhzKVxyXG4gICAgY29uc3QgeE1heCA9IE1hdGgubWF4KC4uLnhzKVxyXG4gICAgY29uc3QgeU1pbiA9IE1hdGgubWluKC4uLnlzKVxyXG4gICAgY29uc3QgeU1heCA9IE1hdGgubWF4KC4uLnlzKVxyXG5cclxuICAgIGNvbnN0IHhNaWQgPSAoeE1pbiArIHhNYXgpIC8gMlxyXG4gICAgY29uc3QgeU1pZCA9ICh5TWluICsgeU1heCkgLyAyXHJcblxyXG4gICAgdGFyZ2V0R3JhcGgubm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgIG5vZGUueCA9ICgobm9kZS54IC0geE1pZCkgLyAoeE1heCAtIHhNaW4pKSAqIHNpemUgKyBjZW50ZXJYXHJcbiAgICAgICAgbm9kZS55ID0gKChub2RlLnkgLSB5TWlkKSAvICh5TWF4IC0geU1pbikpICogc2l6ZSArIGNlbnRlcllcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHRhcmdldEdyYXBoXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==