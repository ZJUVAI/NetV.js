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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description netv's label
 */
class Label {
  constructor(netv) {
    this.$_core = netv;
    this.$_svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.$_core.$_container.prepend(this.$_svg);
    this.$_svg.setAttribute('width', this.$_core.$_configs.width);
    this.$_svg.setAttribute('height', this.$_core.$_configs.height);
    this.$_core.$_container.style.position = 'relative';
    this.$_core.$_container.style.overflow = 'hidden';
    this.$_core.$_container.style.width = this.$_core.$_configs.width;
    this.$_core.$_container.style.height = this.$_core.$_configs.height;
    this.$_svg.style.position = 'absolute';
    this.$_svg.style.zIndex = '10';
    this.$_svg.style.pointerEvents = 'none';
  }

  _drawNode(node, transform, drawFunc) {
    const pos = node.position();
    const x = pos.x * transform.k + transform.x;
    const y = pos.y * transform.k + transform.y;
    const content = drawFunc(node);
    let gElement = this.getLabel(node);

    if (gElement) {
      this._removeContent(gElement);

      gElement.setAttribute('transform', `translate(${x} ${y})`);
      gElement.append(content);
    } else {
      gElement = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      gElement.setAttribute('id', `${node.id()}`);
      gElement.setAttribute('transform', `translate(${x} ${y})`);
      gElement.append(content);
      this.$_svg.prepend(gElement); // NOTE: make last added text at top
    }
  }

  _updateNodePosition(node, transform) {
    const pos = node.position();
    const x = pos.x * transform.k + transform.x;
    const y = pos.y * transform.k + transform.y;
    const gElement = this.getLabel(node);
    if (gElement) gElement.setAttribute('transform', `translate(${x} ${y})`);
  }

  _removeContent(element) {
    while (element.firstChild) element.removeChild(element.firstChild);
  }

  dispose() {
    this.$_svg.remove();
  }

  getLabel(node) {
    return this.$_svg.getElementById(node.id());
  }

  draw(node, drawFunc = node => rightText(node.id())) {
    const transform = this.$_core.transform();

    if (Array.isArray(node)) {
      // draw multiple nodes
      node.forEach(n => this._drawNode(n, transform, drawFunc));
    } else {
      // draw single node
      this._drawNode(node, transform, drawFunc);
    }
  }

  updatePosition(node) {
    const transform = this.$_core.transform();

    if (Array.isArray(node)) {
      // draw multiple nodes
      node.forEach(n => this._updateNodePosition(n, transform));
    } else {
      // draw single node
      this._updateNodePosition(node, transform);
    }
  }

  remove(node) {
    if (Array.isArray(node)) {
      // remove multiple nodes
      node.forEach(n => {
        var _this$getLabel;

        (_this$getLabel = this.getLabel(n)) === null || _this$getLabel === void 0 ? void 0 : _this$getLabel.remove();
      });
    } else {
      var _this$getLabel2;

      // remove single node
      (_this$getLabel2 = this.getLabel(node)) === null || _this$getLabel2 === void 0 ? void 0 : _this$getLabel2.remove();
    }
  }

} // eslint-disable-next-line max-params

const topText = (text, fontSize = 18, fill = 'black', strokeWidth = 0.5, offset = -8) => {
  const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  textElement.setAttribute('font-size', `${fontSize}px`);
  textElement.setAttribute('fill', `${fill}`);
  textElement.setAttribute('stroke', `white`);
  textElement.setAttribute('stroke-width', `${strokeWidth}px`);
  textElement.setAttribute('transform', `translate(0 ${offset})`);
  textElement.setAttribute('text-anchor', 'middle');
  textElement.setAttribute('alignment-baseline', 'bottom');
  textElement.style.userSelect = 'none'; // NOTE: prevent unexpected selection when dragging node(delete and recreate textElement)

  textElement.innerHTML = text;
  return textElement;
}; // eslint-disable-next-line max-params


const rightText = (text, fontSize = 18, fill = 'black', strokeWidth = 0.5, offset = 8) => {
  const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  textElement.setAttribute('font-size', `${fontSize}px`);
  textElement.setAttribute('fill', `${fill}`);
  textElement.setAttribute('stroke', `white`);
  textElement.setAttribute('stroke-width', `${strokeWidth}px`);
  textElement.setAttribute('transform', `translate(${offset} 0)`);
  textElement.setAttribute('text-anchor', 'start');
  textElement.setAttribute('alignment-baseline', 'middle');
  textElement.style.userSelect = 'none'; // NOTE: prevent unexpected selection when dragging node(delete and recreate textElement)

  textElement.innerHTML = text;
  return textElement;
};

Label.template = {
  rightText,
  topText
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=label.js.map