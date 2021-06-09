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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Jiacheng Pan
 * @email panjiacheng@zju.edu.cn
 * @create date 2021-06-08 15:41:06
 * @modify date 2021-06-08 15:41:06
 * @desc [description]
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chaos = exports.Random = void 0;
const random_1 = __webpack_require__(1);
exports.Random = random_1.default;
const chaos_1 = __webpack_require__(2);
exports.Chaos = chaos_1.default;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Random {
    constructor() {
        this._param = {
            width: 1,
            height: 1
        };
    }
    start() {
        var _a, _b;
        (_a = this._data.nodes) === null || _a === void 0 ? void 0 : _a.forEach((node) => {
            node.x = Math.random() * this._param.width;
            node.y = Math.random() * this._param.height;
        });
        (_b = this._onStopCallback) === null || _b === void 0 ? void 0 : _b.call(this, this._data);
    }
    data(data) {
        if (data)
            this._data = data;
        else
            return this._data;
    }
    parameters(param) {
        if (param)
            this._param = param;
        else
            return this._param;
    }
    onStop(callback) {
        this._onStopCallback = callback;
    }
}
exports.default = Random;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Tobe implemented by Xiaoyu Yang
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Chaos {
    constructor() {
        this._param = {
            width: 1,
            height: 1,
            timeout: 0
        };
        this._stopped = false;
        this._timerHandler = () => {
            var _a, _b;
            (_a = this._data.nodes) === null || _a === void 0 ? void 0 : _a.forEach((node) => {
                node.x = Math.random() * this._param.width;
                node.y = Math.random() * this._param.height;
            });
            (_b = this._onEachCallback) === null || _b === void 0 ? void 0 : _b.call(this, this._data);
        };
    }
    start() {
        if (this._stopped) {
            return;
        }
        this._timeInterval = setInterval(this._timerHandler, this._param.timeout);
    }
    stop() {
        var _a;
        if (!this._stopped) {
            this.pause();
            this._timeInterval = null;
            this._stopped = true;
            (_a = this._onStopCallback) === null || _a === void 0 ? void 0 : _a.call(this, this._data);
        }
    }
    resume() {
        if (!this._timeInterval)
            this.start();
    }
    pause() {
        if (this._timeInterval && typeof window !== 'undefined') {
            clearInterval(this._timeInterval);
        }
        this._timeInterval = null;
    }
    onEach(callback) {
        this._onEachCallback = callback;
    }
    data(data) {
        if (data)
            this._data = data;
        else
            return this._data;
    }
    parameters(param) {
        if (param)
            this._param = Object.assign({}, this._param, param);
        else
            return this._param;
    }
    onStop(callback) {
        this._onStopCallback = callback;
    }
}
exports.default = Chaos;


/***/ })
/******/ ]);
});
//# sourceMappingURL=netv-layout.js.map