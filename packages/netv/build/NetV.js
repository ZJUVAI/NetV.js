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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description utility functions for renderer
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shader = exports.decodeRenderId = exports.encodeRenderId = exports.extractAttributesFromShader = exports.createArrayBuffer = exports.createProgram = exports.compileShader = void 0;
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
        gl.bindAttribLocation(program, attr.location, attr.name);
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
function extractAttributesFromShader(shader) {
    // const matchings = shaderStr.match(/in\s.*;/g)
    const inputs = shader.inputs;
    const attributesMap = new Map();
    Object.entries(inputs).forEach(([name, type], location) => {
        let size = 1;
        if (type.slice(0, 3) === 'vec') {
            size = Number(type.slice(-1));
        }
        let isBuildIn = false;
        if (name === 'inVertexPos') {
            // an instance is formed by two triangles,
            // thus we need four point positions to initial the instance
            // more details: https://panjiacheng.site/wiki/2019/06/06/webGL/WebGL-BatchDraw%E4%BB%A3%E7%A0%81%E9%98%85%E8%AF%BB+%E7%90%86%E8%A7%A3/
            isBuildIn = true;
        }
        attributesMap.set(name, {
            name,
            size,
            location,
            isBuildIn,
            extractAttributeValueFrom: () => [] // a function which is use to append an element into the array of this attribute
        });
    });
    // matchings.forEach((match, location) => {
    //     const name = match.split(' ')[2].slice(0, -1)
    //     const type = match.split(' ')[1]
    //     let size = 1
    //     if (type.slice(0, 3) === 'vec') {
    //         size = Number(type.slice(-1))
    //     }
    //     let isBuildIn = false
    //     if (name === 'inVertexPos') {
    //         // an instance is formed by two triangles,
    //         // thus we need four point positions to initial the instance
    //         // more details: https://panjiacheng.site/wiki/2019/06/06/webGL/WebGL-BatchDraw%E4%BB%A3%E7%A0%81%E9%98%85%E8%AF%BB+%E7%90%86%E8%A7%A3/
    //         isBuildIn = true
    //     }
    //     attributesMap.set(name, {
    //         name,
    //         size, // the space of one attribute, e.g. vec3 ocuppies 3 units of space
    //         location, // the appearance order of one attribute in the shader code, which is equal to the result of getAttribLocation
    //         isBuildIn, // which means four vertices in one element: inVertexPos
    //         extractAttributeValueFrom: () => [] // a function which is use to append an element into the array of this attribute
    //     })
    // })
    return attributesMap;
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
class Shader {
    constructor() {
        this.inputs = {};
        this.outputs = {};
        this.uniforms = {};
        this.methods = [[]];
        this.main = [];
        this.header = `#version 300 es\nprecision highp float;\n`;
    }
    copy() {
        const copyShader = new Shader();
        copyShader.inputs = { ...this.inputs };
        copyShader.outputs = { ...this.outputs };
        copyShader.uniforms = { ...this.uniforms };
        copyShader.main = this.main.map((str) => str);
        copyShader.methods = this.methods.map((method) => method.map((str) => str));
        return copyShader;
    }
    connect() {
        const variablesPrefix = [
            { prefix: 'in', variables: this.inputs },
            { prefix: 'out', variables: this.outputs },
            { prefix: 'uniform', variables: this.uniforms }
        ];
        const variableDefinitions = variablesPrefix
            .map((variablePrefix) => Object.entries(variablePrefix.variables)
            .map(([name, type]) => {
            return `${variablePrefix.prefix} ${type} ${name};\n`;
        })
            .join(''))
            .join('');
        return (this.header +
            variableDefinitions +
            this.methods.map((method) => method.join('\n')).join('\n') +
            '\n' +
            this.main.join('\n'));
    }
}
exports.Shader = Shader;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __webpack_require__(2);
const const_1 = __webpack_require__(3);
class Element {
    constructor(core, data, type) {
        this.$_style = {};
        this.$_mousedownCallbackSet = new Set();
        this.$_mouseupCallbackSet = new Set();
        this.$_mouseoverCallbackSet = new Set();
        this.$_mouseoutCallbackSet = new Set();
        this.$_mousemoveCallbackSet = new Set();
        this.$_clickCallbackSet = new Set();
        this.$_attributes = {};
        this.$_core = core;
        this.type = type;
        const defaultConfigs = this.$_core.$_configs;
        // override default style with user specified style in data
        // this.$_style = override(defaultConfigs[type].style, data.style)
        this.$_style = JSON.parse(JSON.stringify(defaultConfigs[this.type.toLowerCase()].style));
        if ('style' in data) {
            Object.entries(data.style).forEach(([key, value]) => {
                const style = value;
                const name = key;
                if (style !== Object(style)) {
                    // style is not an object
                    this.$_style[name] = style;
                }
                else {
                    // ! if the depth of style is more than one, it can cause bugs
                    // ! e.g. style = { xx: {...}, yy: ... }
                    this.$_style[name] = {
                        ...this.$_style[name],
                        ...style
                    };
                }
            });
        }
        const renderManager = this.$_core.$_renderer[`${this.type.toLowerCase()}Manager`];
        this.$_changeRenderAttribute = renderManager.changeAttribute.bind(renderManager);
        // generate style methods, e.g.: node.r(), link.strokeWidth()
        Object.keys(this.$_style).forEach((key) => {
            // generate style functions
            this[key] = this.generateElementStyleGetterSetter(key);
        });
    }
    /**
     * @param {string} eventName
     * @param {(e: any) => any} callback
     * @memberof Element
     */
    on(eventName, callback) {
        var _a;
        if (eventName.slice(0, 4) !== 'drag' ||
            (eventName.slice(0, 4) === 'drag' && this.type === 'Node') // only node can be dragged
        ) {
            const callbackSetName = `$_${eventName}CallbackSet`;
            (_a = this[callbackSetName]) === null || _a === void 0 ? void 0 : _a.add(callback ? callback : const_1.EMPTY_FUNCTION);
            if (this[callbackSetName]) {
                this.$_core.$_interactionManager.increaseMouseEventCallbackCountBy(1);
            }
        }
    }
    /**
     * @param {string} eventName
     * @param {(e: any) => any} callback
     * @memberof Element
     */
    off(eventName, callback) {
        var _a;
        if (eventName.slice(0, 4) !== 'drag' ||
            (eventName.slice(0, 4) === 'drag' && this.type === 'Node') // only node can be dragged
        ) {
            const callbackSetName = `$_${eventName}CallbackSet`;
            (_a = this[callbackSetName]) === null || _a === void 0 ? void 0 : _a.delete(callback ? callback : const_1.EMPTY_FUNCTION);
            if (this[callbackSetName]) {
                this.$_core.$_interactionManager.decreaseMouseEventCallbackCountBy(1);
            }
        }
    }
    /**
     * get/set custom attributes
     * @param key
     * @param value
     */
    attr(key, value) {
        if (arguments.length === 2) {
            this.$_attributes[key] = value;
        }
        else if (arguments.length === 1) {
            return this.$_attributes[key];
        }
        else if (arguments.length === 0) {
            return JSON.parse(JSON.stringify(this.$_attributes));
        }
    }
    generateElementStyleGetterSetter(key) {
        return (value) => {
            if (value !== undefined) {
                if (value === Object(value)) {
                    // value is an object
                    this.$_style[key] = utils_1.override(this.$_style[key], value); // { ...this.$_style[key], ...value }
                }
                else {
                    this.$_style[key] = value;
                }
                this.$_changeRenderAttribute(this, key);
            }
            return this.$_style[key];
        };
    }
}
exports.default = Element;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description some utility functions
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.override = exports.transformGraphPosition = void 0;
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
/**
 * the function is to override object recursively
 * @param overriddenObject: the Object to be overridden
 * @param overridingObject: the Object to override the overridden Object
 */
function override(overriddenObject, overridingObject) {
    if (overriddenObject !== Object(overriddenObject)) {
        // overriddenObject is not an object
        if (overridingObject !== Object(overridingObject)) {
            // overridingObject is not an object
            return overridingObject;
        }
        else {
            return JSON.parse(JSON.stringify(overridingObject)); // deep copy
        }
    }
    const object = JSON.parse(JSON.stringify(overriddenObject)); // deep copy
    for (const key in overridingObject) {
        if (key in object && overridingObject[key] === Object(overridingObject[key])) {
            // if overridingObject[key] is an object
            object[key] = override(object[key], overridingObject[key]);
        }
        else {
            object[key] = overridingObject[key];
        }
    }
    return object;
}
exports.override = override;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_FUNCTION", function() { return EMPTY_FUNCTION; });
const EMPTY_FUNCTION = () => {}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderElementManager = void 0;
const utils_1 = __webpack_require__(0);
class RenderElementManager {
    constructor(gl, params, shaders, idTexture) {
        this.count = 0;
        this.elementToRenderId = new Map();
        const { limit, width, height, instanceVerteces } = params;
        this.gl = gl;
        this.capacity = limit;
        this.width = width;
        this.height = height;
        this.pixelRatio = window.devicePixelRatio || 1;
        this.attributes = utils_1.extractAttributesFromShader(shaders.vertex);
        this.program = utils_1.createProgram(this.gl, shaders.vertex.connect(), shaders.fragment.connect(), this.attributes);
        this.idAttributes = utils_1.extractAttributesFromShader(shaders.idVertex);
        this.idProgram = utils_1.createProgram(this.gl, shaders.idVertex.connect(), shaders.idFragment.connect(), this.idAttributes);
        this.idTexture = idTexture;
        // initial attributes arrays and buffers
        this.attributes.forEach((attr) => {
            if (!attr.isBuildIn) {
                attr.array = new Float32Array(attr.size * this.capacity);
            }
            else {
                // build in attribute: veteces positions
                // four verteces of one element (https://panjiacheng.site/wiki/2019/06/06/webGL/WebGL-BatchDraw%E4%BB%A3%E7%A0%81%E9%98%85%E8%AF%BB+%E7%90%86%E8%A7%A3/)
                // prettier-ignore
                attr.array = new Float32Array(instanceVerteces);
            }
            attr.buffer = utils_1.createArrayBuffer(this.gl, attr.array);
        });
        // init id attributes and buffers
        this.idAttributes.forEach((attr, name) => {
            if (name === 'in_id') {
                // attr: in vec4 inId;
                // TODO: hardcode check, need refactor
                if (!attr.isBuildIn)
                    attr.array = new Float32Array(attr.size * this.capacity);
                attr.buffer = utils_1.createArrayBuffer(this.gl, attr.array);
            }
            else {
                this.idAttributes.set(name, this.attributes.get(name));
            }
        });
        // init uniforms
        this.gl.useProgram(this.program);
        // get uniform locations in Memory
        const projectionLocation = this.gl.getUniformLocation(this.program, 'projection');
        const scaleLocation = this.gl.getUniformLocation(this.program, 'scale');
        const translateLocation = this.gl.getUniformLocation(this.program, 'translate');
        const viewportLocation = this.gl.getUniformLocation(this.program, 'viewport');
        const pixelRatioLocation = this.gl.getUniformLocation(this.program, 'pixelRatio');
        // set uniform values
        // prettier-ignore
        const projection = new Float32Array([
            2 / this.width, 0, 0,
            0, -2 / this.height, 0,
            -1, 1, 1
        ]);
        projectionLocation !== null &&
            this.gl.uniformMatrix3fv(projectionLocation, false, projection);
        const scale = new Float32Array([1, 1]);
        scaleLocation !== null && this.gl.uniform2fv(scaleLocation, scale);
        const translate = new Float32Array([0, 0]);
        translateLocation !== null && this.gl.uniform2fv(translateLocation, translate);
        const viewport = new Float32Array([this.width, this.height]);
        viewportLocation !== null && this.gl.uniform2fv(viewportLocation, viewport);
        pixelRatioLocation !== null && this.gl.uniform1f(pixelRatioLocation, this.pixelRatio);
        // id uniforms, identical to node
        // TODO: need refactor too
        this.gl.useProgram(this.idProgram);
        const idProjectionLocation = this.gl.getUniformLocation(this.idProgram, 'projection');
        const idScaleLocation = this.gl.getUniformLocation(this.idProgram, 'scale');
        const idTranslateLocation = this.gl.getUniformLocation(this.idProgram, 'translate');
        const idViewportLocation = this.gl.getUniformLocation(this.idProgram, 'viewport');
        const idPixelRatioLocation = this.gl.getUniformLocation(this.idProgram, 'pixelRatio');
        idProjectionLocation !== null &&
            this.gl.uniformMatrix3fv(idProjectionLocation, false, projection);
        idScaleLocation !== null && this.gl.uniform2fv(idScaleLocation, scale);
        idTranslateLocation !== null && this.gl.uniform2fv(idTranslateLocation, translate);
        idViewportLocation !== null && this.gl.uniform2fv(idViewportLocation, viewport);
        idPixelRatioLocation !== null && this.gl.uniform1f(idPixelRatioLocation, this.pixelRatio);
    }
    setRenderIdOf(element, renderId) {
        this.renderIdToElement[renderId] = element;
        this.elementToRenderId.set(element, renderId);
    }
    getRenderIdOf(element) {
        return this.elementToRenderId.get(element);
    }
    /**
     * render id to link ids(source and target)
     * @param renderId
     */
    getElementByRenderId(renderId) {
        return this.renderIdToElement[renderId];
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
    draw() {
        if (this.count > 0) {
            this.gl.enable(this.gl.BLEND);
            this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
            this.gl.useProgram(this.program);
            this.attributes.forEach((attr) => {
                this.gl.enableVertexAttribArray(attr.location);
            });
            this.attributes.forEach((attr, i) => {
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer);
                this.gl.vertexAttribPointer(attr.location, attr.size, this.gl.FLOAT, false, attr.size * attr.array.BYTES_PER_ELEMENT, 0);
                if (!attr.isBuildIn)
                    this.gl.vertexAttribDivisor(attr.location, 1);
            });
            this.gl.drawArraysInstanced(this.gl.TRIANGLE_STRIP, 0, 4, this.count);
            // draw id
            this.gl.blendFunc(this.gl.ONE, this.gl.ZERO);
            this.gl.useProgram(this.idProgram);
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.idTexture);
            this.idAttributes.forEach((attr) => {
                this.gl.enableVertexAttribArray(attr.location);
            });
            const attr = this.idAttributes.get('in_id'); // ! HARDCODE CHECK
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer);
            this.gl.vertexAttribPointer(attr.location, attr.size, this.gl.FLOAT, false, attr.size * attr.array.BYTES_PER_ELEMENT, 0);
            this.gl.vertexAttribDivisor(attr.location, 1);
            this.gl.drawArraysInstanced(this.gl.TRIANGLE_STRIP, 0, 4, this.count);
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
            this.gl.enable(this.gl.BLEND);
            this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
        }
    }
    /**
     * add element data to engine
     * @param elements elements data
     */
    addData(elements) {
        // set array
        elements.forEach((element, i) => {
            const index = this.count + i;
            // link attribute => webgl attribute
            this.attributes.forEach((attr) => {
                if (!attr.isBuildIn) {
                    const array = getShaderAttributeValue(element, attr.name);
                    attr.array.set(array, attr.size * index);
                }
            });
            const offset = element.type === 'Node' ? 0 : 1; // NOTE: node render id, use even integer
            const renderId = 2 * index + offset;
            const renderIdColor = utils_1.encodeRenderId(renderId);
            const idAttr = this.idAttributes.get('in_id');
            idAttr.array.set([renderIdColor.r, renderIdColor.g, renderIdColor.b, renderIdColor.a], 4 * index);
            this.setRenderIdOf(element, renderId);
        });
        this.attributes.forEach((attr) => {
            if (!attr.isBuildIn) {
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer);
                this.gl.bufferSubData(this.gl.ARRAY_BUFFER, attr.size * this.count * attr.array.BYTES_PER_ELEMENT, attr.array, attr.size * this.count, attr.size * elements.length);
            }
        });
        // id buffer data
        const attr = this.idAttributes.get('in_id');
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer);
        this.gl.bufferSubData(this.gl.ARRAY_BUFFER, attr.size * this.count * attr.array.BYTES_PER_ELEMENT, attr.array, attr.size * this.count, attr.size * elements.length);
        this.count += elements.length;
    }
    /**
     * change an element's attribute
     * @param element link/node data
     * @param attribute attribute key to change
     */
    changeAttribute(element, attribute) {
        const renderId = this.getRenderIdOf(element);
        const index = Math.floor(renderId / 2);
        const shaderAttr = this.getAttributeByElement(element, attribute);
        const shaderVariableName = shaderAttr.name;
        const shaderVariableValue = shaderAttr.value;
        const attr = this.attributes.get(shaderVariableName);
        if (attr === undefined) {
            console.error(`Attribute: ${attribute} is not supported in a ${element.type} instance.`);
        }
        // const data = attr.extractAttributeValueFrom(element)
        attr.array.set(shaderVariableValue, attr.size * index);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer);
        this.gl.bufferSubData(this.gl.ARRAY_BUFFER, attr.size * index * attr.array.BYTES_PER_ELEMENT, attr.array, attr.size * index, attr.size);
    }
    /**
     * clear data
     * not actually erase data, but reset count
     */
    clearData() {
        this.count = 0;
    }
    getAttributeByElement(element, attributeName) {
        let map;
        if (element.type === 'Link') {
            const link = element;
            const style = link.$_style;
            map = {
                source: {
                    name: 'in_source',
                    value: [link.$_source.$_position.x, link.$_source.$_position.y]
                },
                target: {
                    name: 'in_target',
                    value: [link.$_target.$_position.x, link.$_target.$_position.y]
                },
                shape: {
                    name: 'in_shape',
                    value: [style.shape === 'dash-line' ? 2 : style.shape === 'curve' ? 1 : 0]
                },
                strokeWidth: {
                    name: 'in_strokeWidth',
                    value: [style.strokeWidth]
                },
                strokeColor: {
                    name: 'in_strokeColor',
                    value: [
                        style.strokeColor.r,
                        style.strokeColor.g,
                        style.strokeColor.b,
                        style.strokeColor.a
                    ]
                },
                curveness: {
                    name: 'in_curveness',
                    value: [style.curveness]
                },
                dashInterval: {
                    name: 'in_dashInterval',
                    value: [style.dashInterval]
                }
            };
        }
        else {
            const node = element;
            const style = node.$_style;
            map = {
                position: {
                    name: 'in_position',
                    value: [node.$_position.x, node.$_position.y]
                },
                shape: {
                    name: 'in_shape',
                    value: [
                        style.shape === 'rect'
                            ? 1
                            : style.shape === 'triangle'
                                ? 2
                                : style.shape === 'cross'
                                    ? 3
                                    : 0
                    ]
                },
                offset: {
                    name: 'in_offset',
                    value: [style.offset.x, style.offset.y]
                },
                fill: {
                    name: 'in_fill',
                    value: [style.fill.r, style.fill.g, style.fill.b, style.fill.a]
                },
                strokeWidth: {
                    name: 'in_strokeWidth',
                    value: [style.strokeWidth]
                },
                strokeColor: {
                    name: 'in_strokeColor',
                    value: [
                        style.strokeColor.r,
                        style.strokeColor.g,
                        style.strokeColor.b,
                        style.strokeColor.a
                    ]
                },
                rotate: {
                    name: 'in_rotate',
                    value: [style.rotate]
                },
                /* circle */
                r: {
                    name: 'in_r',
                    value: [style.r]
                },
                /* rect */
                width: {
                    name: 'in_size',
                    value: [style.width, style.height]
                },
                height: {
                    name: 'in_size',
                    value: [style.width, style.height]
                },
                /* triangle */
                vertexAlpha: {
                    name: 'in_vertexAlpha',
                    value: [style.vertexAlpha.x, style.vertexAlpha.y]
                },
                vertexBeta: {
                    name: 'in_vertexBeta',
                    value: [style.vertexBeta.x, style.vertexBeta.y]
                },
                vertexGamma: {
                    name: 'in_vertexGamma',
                    value: [style.vertexGamma.x, style.vertexGamma.y]
                },
                /* cross */
                innerWidth: {
                    name: 'in_innerSize',
                    value: [style.innerWidth, style.innerHeight]
                },
                innerHeight: {
                    name: 'in_innerSize',
                    value: [style.innerWidth, style.innerHeight]
                }
            };
        }
        if (attributeName in map) {
            return map[attributeName];
        }
        // TODO: consider unused reversed_map?
        const reversed_map = {};
        Object.entries(map).forEach(([k, v]) => {
            const value = v;
            const key = k;
            reversed_map[value.name] = {
                name: key,
                value: value.value
            };
        });
        return reversed_map[attributeName];
    }
}
exports.RenderElementManager = RenderElementManager;
const linkShaderAttrMap = {
    'in_source': (link) => [link.$_source.$_position.x, link.$_source.$_position.y],
    'in_target': (link) => [link.$_target.$_position.x, link.$_target.$_position.y],
    'in_shape': (link) => [link.$_style.shape === 'dash-line' ? 2 : link.$_style.shape === 'curve' ? 1 : 0],
    'in_strokeWidth': (link) => [link.$_style.strokeWidth],
    'in_strokeColor': (link) => [
        link.$_style.strokeColor.r,
        link.$_style.strokeColor.g,
        link.$_style.strokeColor.b,
        link.$_style.strokeColor.a
    ],
    'in_curveness': (link) => [link.$_style.curveness],
    'in_dashInterval': (link) => [link.$_style.dashInterval]
};
const nodeShaderAttrMap = {
    'in_position': (node) => [node.$_position.x, node.$_position.y],
    'in_shape': (node) => [
        node.$_style.shape === 'rect'
            ? 1
            : node.$_style.shape === 'triangle'
                ? 2
                : node.$_style.shape === 'cross'
                    ? 3
                    : 0
    ],
    'in_offset': (node) => [node.$_style.offset.x, node.$_style.offset.y],
    'in_fill': (node) => [node.$_style.fill.r, node.$_style.fill.g, node.$_style.fill.b, node.$_style.fill.a],
    'in_strokeWidth': (node) => [node.$_style.strokeWidth],
    'in_strokeColor': (node) => [
        node.$_style.strokeColor.r,
        node.$_style.strokeColor.g,
        node.$_style.strokeColor.b,
        node.$_style.strokeColor.a
    ],
    'in_rotate': (node) => [node.$_style.rotate],
    /* circle */
    'in_r': (node) => [node.$_style.r],
    /* rect */
    'in_size': (node) => [node.$_style.width, node.$_style.height],
    /* triangle */
    'in_vertexAlpha': (node) => [node.$_style.vertexAlpha.x, node.$_style.vertexAlpha.y],
    'in_vertexBeta': (node) => [node.$_style.vertexBeta.x, node.$_style.vertexBeta.y],
    'in_vertexGamma': (node) => [node.$_style.vertexGamma.x, node.$_style.vertexGamma.y],
    /* cross */
    'in_innerSize': (node) => [node.$_style.innerWidth, node.$_style.innerHeight],
};
function getShaderAttributeValue(element, attributeName) {
    if (element.type === 'Link') {
        return linkShaderAttrMap[attributeName](element);
    }
    else {
        return nodeShaderAttrMap[attributeName](element);
    }
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide the entrance of NetV.js.
 * @dependences interfaces.ts, utils/map2.js, node.ts, link.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
const map2_1 = __webpack_require__(6);
const node_1 = __webpack_require__(7);
const link_1 = __webpack_require__(9);
const defaultConfigs = __webpack_require__(10);
const dataset = __webpack_require__(11);
const renderer_1 = __webpack_require__(14);
const interaction_1 = __webpack_require__(19);
const Utils = __webpack_require__(2);
const const_1 = __webpack_require__(3);
const testjs = __webpack_require__(20);
const Stardust = __webpack_require__(21);
//import * as d3 from "d3"
class NetV {
    /**
     * @description create NetV object.
     * @param configs configurations of NetV, must include a `container: HTMLDivElement` term
     */
    constructor(configs) {
        this.$_id2node = new Map();
        this.$_ends2link = new map2_1.default();
        this.$_sourceId2links = new Map();
        this.$_targetId2links = new Map();
        this.$_configs = JSON.parse(JSON.stringify(defaultConfigs)); // NOTE: deep copy configs
        this.$_transform = { x: 0, y: 0, k: 1 };
        this.$_lazyUpdate = false; // flag to control lazy update
        this.$_data = { nodes: [], links: [] };
        if (!('container' in configs) || configs.container.tagName !== 'DIV') {
            throw Error('Container should be specified as a div element!');
        }
        this.$_container = configs.container;
        this.$_configs = Utils.override(this.$_configs, configs);
        delete this.$_configs['container'];
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
            linkLimit: this.$_configs.linkLimit,
            getAllNodes: this.nodes.bind(this),
            getAllLinks: this.links.bind(this)
        });
        console.log("lyhlyh11");
        testjs.logJs();
        var width = 960;
        var height = 500;
        const canvas2 = document.getElementById('main-canvas');
        const platform = Stardust.platform('webgl-2d', canvas2, this.$_configs.width, this.$_configs.height);
        this.$_platform = platform;
        this.$_canvas2 = canvas2;
        this.$_interactionManager = new interaction_1.InteractionManager(this);
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
    /**
     * @description data getter setter
     * @param nodeLinkData? the node-link-data of a graph, provided?setter:getter;
     */
    data(nodeLinkData) {
        var Nx = 96 * 1;
        var Ny = 50 * 1;
        var data = [];
        for (var i = 0; i < Nx; i++) {
            for (var j = 0; j < Ny; j++) {
                var x = i / (Nx - 1) * 2 - 1;
                var y = j / (Ny - 1) * 2 - 1;
                var scale = 2;
                var len = Math.sqrt(x * x + y * y);
                var d = len * Math.exp(-len * len * 5);
                var dx = y / len * d;
                var dy = -x / len * d;
                data.push({
                    x: x + dx * scale,
                    y: y + dy * scale
                });
            }
        }
        this.$_data_star = data;
        let circle = new Stardust.mark.circle(16);
        console.log('init mark');
        var circles = Stardust.mark.create(circle, this.$_platform);
        var circles2 = Stardust.mark.create(circle, this.$_platform);
        var scaleX = Stardust.scale.linear()
            .domain([-1, 1])
            .range([10, this.$_configs.width - 10]);
        var scaleY = Stardust.scale.linear()
            .domain([-1, 1])
            .range([10, this.$_configs.height - 10]);
        circles.attr("center", Stardust.scale.Vector2(scaleX(d => d.x), scaleY(d => d.y)));
        circles.attr("radius", 2);
        circles.attr("color", [0, 0, 0, 0.4]);
        circles2.attr("center", Stardust.scale.Vector2(scaleX(d => d.x), scaleY(d => d.y)));
        circles2.attr("radius", 4);
        circles2.attr("color", [255, 0, 0, 1]);
        circles.data(data);
        this.$_circles = circles;
        this.$_circles2 = circles2;
        if (nodeLinkData === undefined) {
            return this.$_data;
        }
        else {
            // delete old data
            this.$_data = { ...this.$_data, ...nodeLinkData };
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
        const newLinks = new Array(linksData.length);
        for (let i = 0; i < linksData.length; i++) {
            const linkData = linksData[i];
            linkData.source = linkData.source.toString();
            linkData.target = linkData.target.toString();
            const link = new link_1.default(this, linkData);
            newLinks[i] = link;
        }
        this.$_renderer.addLinks(newLinks); // NOTE: preserve link order, not elegant
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
        this.$_circles.render();
        this.$_platform.endPicking();
        this.$_canvas2.onmousemove = e => {
            let bounds = this.$_canvas2.getBoundingClientRect();
            var x = e.clientX - bounds.left;
            var y = e.clientY - bounds.top;
            var p = this.$_platform.getPickingPixel(x * 2, y * 2);
            if (p) {
                this.$_platform.clear();
                this.$_circles.render();
                this.$_circles2.attr("color", [1, 0, 0, 1]);
                this.$_circles2.data([this.$_data_star[p[1]]]);
                this.$_circles2.render();
                console.log('log in render');
            }
        };
        this.$_renderer.draw();
    }
    /**
     * @description transition between different transforms
     */
    transition(transforms, durationsMS, callback) {
        // interpolation
        const STEPS_PER_SECOND = 60;
        const MS_PER_SECOND = 1000;
        const STEPS_PER_MS = STEPS_PER_SECOND / MS_PER_SECOND;
        const MS_PER_STEP = 1 / STEPS_PER_MS;
        const transitionFromTransforms = (index) => {
            if (index >= transforms.length - 1) {
                return;
            }
            const TOTAL_STEPS = Math.max(STEPS_PER_MS * durationsMS[index], 1);
            const newTransform = {
                ...transforms[index]
            };
            const difference = {
                x: transforms[index + 1].x - transforms[index].x,
                y: transforms[index + 1].y - transforms[index].y,
                k: transforms[index + 1].k - transforms[index].k
            };
            const originTranslate = {
                x: transforms[index].x,
                y: transforms[index].y,
                k: transforms[index].k
            };
            const ease = (x) => {
                return x * x;
            };
            let step = 1;
            const animation = setInterval(() => {
                newTransform.x = originTranslate.x + difference.x * ease(step / TOTAL_STEPS);
                newTransform.y = originTranslate.y + difference.y * ease(step / TOTAL_STEPS);
                newTransform.k = originTranslate.k + difference.k * ease(step / TOTAL_STEPS);
                this.transform(newTransform);
                this.draw();
                if (callback)
                    callback({ transform: newTransform });
                step += 1;
                if (step >= TOTAL_STEPS) {
                    clearInterval(animation);
                    transitionFromTransforms(index + 1);
                }
            }, MS_PER_STEP);
        };
        transitionFromTransforms(0);
    }
    /**
     * pan on canvas to get given node centered
     * @param node
     */
    centerOn(node) {
        const pos = node.position();
        return this.$_interactionManager.centerPosition(pos);
    }
    /**
     * progmatically pan
     * @param x
     * @param y
     */
    panBy(x, y) {
        return this.$_interactionManager.panBy(x, y);
    }
    /**
     * progmatically zoom
     * @param factor zoom factor
     * @param center optional, zoom center position
     */
    zoomBy(factor, center) {
        return this.$_interactionManager.zoomBy(factor, center);
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
        return this.$_transform;
    }
    /**
     * @description event listener
     * @memberof NetV
     */
    on(eventName, callback) {
        if (eventName.toLowerCase() === 'zoom') {
            this.$_interactionManager.onZoom(callback ? callback : const_1.EMPTY_FUNCTION);
        }
        else if (eventName.toLowerCase() === 'pan') {
            this.$_interactionManager.onPan(callback ? callback : const_1.EMPTY_FUNCTION);
        }
        else if (eventName.toLowerCase() === 'mousedown') {
            this.$_interactionManager.onMousedown(callback ? callback : const_1.EMPTY_FUNCTION);
        }
        else if (eventName.toLowerCase() === 'mouseup') {
            this.$_interactionManager.onMouseup(callback ? callback : const_1.EMPTY_FUNCTION);
        }
        else if (eventName.toLowerCase() === 'click') {
            this.$_interactionManager.onClick(callback ? callback : const_1.EMPTY_FUNCTION);
        }
    }
    /**
     * @description turn off event listener
     *
     * @memberof NetV
     */
    off(eventName, callback) {
        if (eventName.toLowerCase() === 'zoom') {
            this.$_interactionManager.offZoom(callback ? callback : const_1.EMPTY_FUNCTION);
        }
        else if (eventName.toLowerCase() === 'pan') {
            this.$_interactionManager.offPan(callback ? callback : const_1.EMPTY_FUNCTION);
        }
        else if (eventName.toLowerCase() === 'mousedown') {
            this.$_interactionManager.offMousedown(callback ? callback : const_1.EMPTY_FUNCTION);
        }
        else if (eventName.toLowerCase() === 'mouseup') {
            this.$_interactionManager.offMouseup(callback ? callback : const_1.EMPTY_FUNCTION);
        }
        else if (eventName.toLowerCase() === 'click') {
            this.$_interactionManager.offClick(callback ? callback : const_1.EMPTY_FUNCTION);
        }
    }
}
exports.default = NetV;
NetV.Utils = Utils;
window.NetV = NetV;


/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide a Node class.
 * @dependences interfaces.ts, utils/is.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = __webpack_require__(8);
const element_1 = __webpack_require__(1);
class Node extends element_1.default {
    constructor(core, nodeData) {
        super(core, nodeData, /* type: */ 'Node');
        this.$_position = {
            x: 0,
            y: 0
        };
        this.$_dragstartCallbackSet = new Set();
        this.$_draggingCallbackSet = new Set();
        this.$_dragendCallbackSet = new Set();
        this.$_elementReservedKeys = new Set(['id', 'x', 'y', 'style']);
        // set attributes
        for (const key in nodeData) {
            if (!this.$_elementReservedKeys.has(key)) {
                this.$_attributes[key] = nodeData[key];
            }
        }
        const data = {
            ...{
                x: this.$_position.x,
                y: this.$_position.y
            },
            ...nodeData
        };
        this.$_setId(data.id);
        this.$_position = {
            x: data.x,
            y: data.y
        };
    }
    /**
     * getter of private property $_id
     * @memberof Node
     */
    id() {
        return this.$_id;
    }
    /**
     * get neighbor nodes for current node
     */
    neighborNodes() {
        // NOTE: currently API not intent to support directed graph
        let sourceLinks = this.$_core.$_sourceId2links.get(this.$_id);
        if (!sourceLinks)
            sourceLinks = new Set();
        let targetLinks = this.$_core.$_targetId2links.get(this.$_id);
        if (!targetLinks)
            targetLinks = new Set();
        const nodeSet = new Set([
            ...[...sourceLinks].map((link) => link.$_target),
            ...[...targetLinks].map((link) => link.$_source)
        ]);
        return Array.from(nodeSet);
    }
    /**
     * get neighbor links for current node
     */
    neighborLinks() {
        // NOTE: currently API not intent to support directed graph
        let sourceLinks = this.$_core.$_sourceId2links.get(this.$_id);
        if (!sourceLinks)
            sourceLinks = new Set();
        let targetLinks = this.$_core.$_targetId2links.get(this.$_id);
        if (!targetLinks)
            targetLinks = new Set();
        const linkSet = new Set([...sourceLinks, ...targetLinks]);
        return Array.from(linkSet);
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
        if (arguments.length > 0 && ('x' in position || 'y' in position)) {
            if ('x' in position) {
                this.$_position['x'] = position.x;
            }
            if ('y' in position) {
                this.$_position['y'] = position.y;
            }
            if (this.$_core.$_renderer.shouldLazyUpdate) {
                return this.$_position;
            }
            else {
                linkSets = {
                    // find links from/to this node
                    source: this.$_core.$_sourceId2links.get(this.$_id),
                    target: this.$_core.$_targetId2links.get(this.$_id)
                };
                Object.entries(linkSets).forEach((entry) => {
                    // entry[0]: 'source' / 'target'
                    // entry[1]: the link set
                    const key = entry[0];
                    const set = entry[1];
                    if (set) {
                        this.$_core.$_renderer.increaseModifiedElementsCountBy(set.size);
                        for (const link of set) {
                            this.$_core.$_renderer.linkManager.changeAttribute(link, key);
                        }
                    }
                });
                this.$_core.$_renderer.increaseModifiedElementsCountBy(1);
                this.$_core.$_renderer.nodeManager.changeAttribute(this, 'position');
            }
        }
        return this.$_position;
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
}
exports.default = Node;


/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide a Link class.
 * @dependences interfaces.ts, utils/is.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
const element_1 = __webpack_require__(1);
class Link extends element_1.default {
    constructor(core, linkData) {
        super(core, linkData, /* type: */ 'Link');
        this.$_elementReservedKeys = new Set(['source', 'target', 'style']);
        // set attributes
        for (const key in linkData) {
            if (!this.$_elementReservedKeys.has(key)) {
                this.$_attributes[key] = linkData[key];
            }
        }
        const sourceNode = this.$_core.getNodeById(linkData.source);
        const targetNode = this.$_core.getNodeById(linkData.target);
        this.sourceTarget({
            source: sourceNode,
            target: targetNode
        });
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
            const newSourceId = newSource.$_id;
            const newTargetId = newTarget.$_id;
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
                this.$_core.$_ends2link.delete([oldSource.$_id, oldTarget.$_id]);
                (_a = this.$_core.$_sourceId2links.get(oldSource.$_id)) === null || _a === void 0 ? void 0 : _a.delete(this);
                (_b = this.$_core.$_targetId2links.get(oldTarget.$_id)) === null || _b === void 0 ? void 0 : _b.delete(this);
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
}
exports.default = Link;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.link = exports.node = exports.linkLimit = exports.nodeLimit = exports.enablePanZoom = exports.backgroundColor = exports.height = exports.width = void 0;
/**
 * @description default configurations in NetV
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 */
exports.width = 800;
exports.height = 600;
exports.backgroundColor = { r: 1, g: 1, b: 1, a: 1 };
exports.enablePanZoom = true;
exports.nodeLimit = 1000;
exports.linkLimit = 20000;
exports.node = {
    style: {
        shape: 'circle',
        offset: { x: 0, y: 0 },
        fill: { r: 0.2, g: 0.6, b: 0.2, a: 1 },
        strokeColor: { r: 0.9, g: 0.9, b: 0.9, a: 0.6 },
        strokeWidth: 2,
        /* circle shape styles */
        r: 10,
        /* rect shape styles */
        width: 5,
        height: 5,
        innerWidth: 5,
        innerHeight: 5,
        rotate: 0,
        /* triangle shape styles */
        vertexAlpha: { x: 0, y: -4 },
        vertexBeta: { x: -2 * Math.sqrt(3), y: 2 },
        vertexGamma: { x: 2 * Math.sqrt(3), y: 2 }
    }
};
exports.link = {
    style: {
        shape: 'line',
        strokeColor: { r: 0.4, g: 0.6, b: 0.8, a: 0.5 },
        strokeWidth: 2,
        /* curve shape style */
        curveness: 0.2,
        dashInterval: 5
    }
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description build-in dataset in NetV
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.patents = exports.miserables = void 0;
const miserables_1 = __webpack_require__(12);
Object.defineProperty(exports, "miserables", { enumerable: true, get: function () { return miserables_1.miserables; } });
const patents_1 = __webpack_require__(13);
Object.defineProperty(exports, "patents", { enumerable: true, get: function () { return patents_1.patents; } });


/***/ }),
/* 12 */
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
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description render graph using webgl
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Renderer = void 0;
const nodeShaders = __webpack_require__(15);
const linkShaders = __webpack_require__(16);
const render_node_1 = __webpack_require__(17);
const render_link_1 = __webpack_require__(18);
const utils_1 = __webpack_require__(0);
const MODIFIED_ELEMENTS_COUNT_UPPER_THRESHOLD = 100; // when modifiedElementCount is larger than it, $_shouldLazyUpdate will be true
class Renderer {
    /**
     * create renderer object
     * @param configs {canvas: HTMLCanvasElement, width: number, height: number, backgroundColor: Color, defaultConfigs: Object} configs passed to renderer
     */
    constructor(configs) {
        this.modifiedElementsCount = 0; // record modified link num to control lazy update
        this.shouldLazyUpdate = false; // flag to control lazy update
        const { canvas, width, height, backgroundColor, nodeLimit, linkLimit, getAllNodes, getAllLinks } = configs;
        try {
            this.gl = canvas.getContext('webgl2');
        }
        catch (_a) {
            throw new Error('NetV requires WebGL2 supported by your browser');
        }
        this.backgroundColor = backgroundColor;
        this.width = width;
        this.height = height;
        this.pixelRatio = window.devicePixelRatio || 1;
        this.getAllNodes = getAllNodes;
        this.getAllLinks = getAllLinks;
        this.initIdTexture();
        this.nodeManager = new render_node_1.RenderNodeManager(this.gl, { width, height, limit: nodeLimit }, nodeShaders, this.idTexture);
        this.linkManager = new render_link_1.RenderLinkManager(this.gl, { width, height, limit: linkLimit }, linkShaders, this.idTexture);
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
    }
    /**
     * draw all elements
     */
    draw() {
        if (this.shouldLazyUpdate) {
            // TODO: not only position needs to be refreshed, but also other styles
            this.nodeManager.refreshPosition(this.getAllNodes());
            this.linkManager.refreshPosition(this.getAllLinks());
            this.shouldLazyUpdate = false;
            this.modifiedElementsCount = 0;
        }
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
                const node = this.nodeManager.getElementByRenderId(renderId);
                return node.id();
            }
            else {
                const link = this.linkManager.getElementByRenderId(renderId);
                const sourceTarget = link.sourceTarget();
                return [sourceTarget.source.id(), sourceTarget.target.id()];
            }
        }
    }
    /**
     * read pixel value at (x, y) of texture
     * @param x x pos
     * @param y y pos
     */
    readIdTexture(position) {
        const ratio = this.pixelRatio;
        this.gl.bindFramebuffer(this.gl.READ_FRAMEBUFFER, this.idTexture);
        const readPixelBuffer = new Uint8Array([255, 255, 255, 255]); // -1
        this.gl.readPixels(
        // !Warning: x and y are optional in Position, need to check them
        position.x * ratio, position.y * ratio, 1, 1, this.gl.RGBA, this.gl.UNSIGNED_BYTE, readPixelBuffer);
        const objectID = utils_1.decodeRenderId(readPixelBuffer);
        return objectID;
    }
    /**
     * increase modified elements count
     * When it is larger than a threshold, the lazy update mode will be turned on.
     */
    increaseModifiedElementsCountBy(n) {
        this.modifiedElementsCount += n;
        if (this.modifiedElementsCount > MODIFIED_ELEMENTS_COUNT_UPPER_THRESHOLD) {
            this.shouldLazyUpdate = true;
        }
    }
    /**
     * init WebGL texture for recording position of elements
     */
    initIdTexture() {
        const gl = this.gl;
        const pixelRatio = this.pixelRatio;
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
        if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {
            throw new Error('Framebuffer generate failed');
        }
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        this.idTexture = fbo;
    }
}
exports.Renderer = Renderer;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.idFragment = exports.fragment = exports.idVertex = exports.vertex = void 0;
const utils_1 = __webpack_require__(0);
const vertex = new utils_1.Shader();
exports.vertex = vertex;
vertex.inputs = {
    inVertexPos: 'vec3',
    in_shape: 'float',
    in_position: 'vec2',
    in_offset: 'vec2',
    in_size: 'vec2',
    in_innerSize: 'vec2',
    in_rotate: 'float',
    in_r: 'float',
    in_vertexAlpha: 'vec2',
    in_vertexBeta: 'vec2',
    in_vertexGamma: 'vec2',
    in_fill: 'vec4',
    in_strokeWidth: 'float',
    in_strokeColor: 'vec4'
};
vertex.outputs = {
    position: 'vec2',
    shape: 'float',
    size: 'vec2',
    innerSize: 'vec2',
    rotate: 'float',
    r: 'float',
    vertexAlpha: 'vec2',
    vertexBeta: 'vec2',
    vertexGamma: 'vec2',
    fill: 'vec4',
    strokeWidth: 'float',
    strokeColor: 'vec4'
};
vertex.uniforms = {
    projection: 'mat3',
    scale: 'vec2',
    translate: 'vec2',
    viewport: 'vec2',
    pixelRatio: 'float'
};
vertex.methods = [
    [
        `vec2 calculate_inner_point (vec2 p1, vec2 p2, vec2 p3) {`,
        `    float inner_p1 = distance(p2, p3);`,
        `    float inner_p2 = distance(p1, p3);`,
        `    float inner_p3 = distance(p1, p2);`,
        `    vec2 inner = (p1 * inner_p1 + p2 * inner_p2 + p3 * inner_p3) / (inner_p1 + inner_p2 + inner_p3);`,
        `    return inner;`,
        `}`
    ],
    [
        `float distance2line (vec2 point, vec2 line_begin, vec2 line_end) {`,
        `   vec3 cross_product = cross(vec3(point - line_begin, 0), vec3(line_end - line_begin, 0));`,
        `   float area = length(cross_product);`,
        `   return area / length(line_begin - line_end);`,
        `}`
    ],
    [
        `float calculate_stroke_scale (vec2 p1, vec2 p2, vec2 p3) {`,
        `   vec2 inner = calculate_inner_point(p1, p2, p3);`,
        `   float radius = distance2line(inner, p1, p2);`,
        `   float stroke_scale = strokeWidth / 2.0 / radius;`,
        `   return stroke_scale;`,
        `}`
    ]
];
vertex.main = [
    `void main(void) {`,
    `   r = in_r;`,
    `   size = in_size;`,
    `   float width = size.x;`,
    `   float height = size.y;`,
    `   innerSize = in_innerSize;`,
    `   shape = in_shape;`,
    `   fill = in_fill;`,
    `   strokeColor = in_strokeColor;`,
    `   strokeWidth = in_strokeWidth;`,
    `   rotate = in_rotate;`,
    `   position = scale * (in_position + in_offset) + translate;`,
    `   vertexAlpha = in_vertexAlpha;`,
    `   vertexBeta = in_vertexBeta;`,
    `   vertexGamma = in_vertexGamma;`,
    `   mat3 scale_mat = mat3(`,
    `       1, 0, 0,`,
    `       0, 1, 0,`,
    `       0, 0, 1`,
    `   );`,
    `   mat3 rotate_mat = mat3(`,
    `       cos(rotate), sin(rotate), 0,`,
    `       -sin(rotate), cos(rotate), 0,`,
    `       0, 0, 1`,
    `   );`,
    `   mat3 translate_mat = mat3(`,
    `       1, 0, 0,`,
    `       0, 1, 0,`,
    `       position.x, position.y, 1`,
    `   );`,
    `   if (shape == 0.0) {`,
    `       float size = (r + strokeWidth / 2.) * 2. * 1.5;`,
    `       scale_mat = mat3(`,
    `           size, 0, 0,`,
    `           0, size, 0,`,
    `           0, 0, 1`,
    `           );`,
    `   } else if (shape == 1.0 || shape == 3.0) {`,
    `       scale_mat = mat3(`,
    `           width + strokeWidth, 0, 0,`,
    `           0, height + strokeWidth, 0,`,
    `           0, 0, 1`,
    `       );`,
    `   } else if (shape == 2.0) {`,
    // calculate the normal of the edge: alpha => beta
    `       vec2 inner = calculate_inner_point(vertexAlpha, vertexBeta, vertexGamma);`,
    `       float stroke_scale = calculate_stroke_scale(vertexAlpha, vertexBeta, vertexGamma);`,
    `       vec2 outer_vertexAlpha = (vertexAlpha - inner) * (1.0 + stroke_scale) + inner;`,
    `       vec2 outer_vertexBeta = (vertexBeta - inner) * (1.0 + stroke_scale) + inner;`,
    `       vec2 outer_vertexGamma = (vertexGamma - inner) * (1.0 + stroke_scale) + inner;`,
    // to ensure the fragment cutting is within the rectangle
    // `       width = 1.5 * (max(max(outer_vertexAlpha.x, outer_vertexBeta.x), outer_vertexGamma.x) - min(min(outer_vertexAlpha.x, outer_vertexBeta.x), outer_vertexGamma.x));`,
    // `       height = 1.5 * (max(max(outer_vertexAlpha.y, outer_vertexBeta.y), outer_vertexGamma.y)- min(min(outer_vertexAlpha.y, outer_vertexBeta.y), outer_vertexGamma.y));`,
    `       width = 2.0 * max(abs(max(max(outer_vertexAlpha.x, outer_vertexBeta.x), outer_vertexGamma.x)), abs(min(min(outer_vertexAlpha.x, outer_vertexBeta.x), outer_vertexGamma.x)));`,
    `       height = 2.0 * max(abs(max(max(outer_vertexAlpha.y, outer_vertexBeta.y), outer_vertexGamma.y)), abs(min(min(outer_vertexAlpha.y, outer_vertexBeta.y), outer_vertexGamma.y)));`,
    `       scale_mat = mat3(`,
    `           width, 0, 0,`,
    `           0, height, 0,`,
    `           0, 0, 1`,
    `       );`,
    `   }`,
    `   mat3 transform = translate_mat * rotate_mat * scale_mat;`,
    `   gl_Position = vec4(projection * transform * inVertexPos, 1.);`,
    `}`
];
const idVertex = vertex.copy();
exports.idVertex = idVertex;
idVertex.inputs['in_id'] = 'vec4';
idVertex.outputs['id'] = 'vec4';
idVertex.main.splice(1, 0, `id = in_id;`);
const fragment = new utils_1.Shader();
exports.fragment = fragment;
fragment.inputs = { ...vertex.outputs };
fragment.outputs = {
    fragmentColor: 'vec4'
};
fragment.uniforms = {
    viewport: 'vec2',
    pixelRatio: 'float'
};
fragment.methods = [
    vertex.methods[0],
    vertex.methods[1],
    vertex.methods[2],
    [
        `float sign (vec2 p1, vec2 p2, vec2 p3) {`,
        `    return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);`,
        `}`
    ],
    [
        `float inTriangle() {`,
        `    mat2 rotate_mat = mat2(`,
        `        cos(rotate), sin(rotate),`,
        `        -sin(rotate), cos(rotate)`,
        `    );`,
        `    vec2 inner = calculate_inner_point(vertexAlpha, vertexBeta, vertexGamma);`,
        `    float stroke_scale = calculate_stroke_scale(vertexAlpha, vertexBeta, vertexGamma);`,
        `    vec2 flip_pos = vec2(position.x, viewport.y - position.y);`,
        `    vec2 rotate_related_FragCoord = rotate_mat * (gl_FragCoord.xy / pixelRatio - flip_pos);`,
        `    vec2 inner_vertexAlpha = (vertexAlpha - inner) * (1.0 - stroke_scale) + inner;`,
        `    vec2 inner_vertexBeta = (vertexBeta - inner) * (1.0 - stroke_scale) + inner;`,
        `    vec2 inner_vertexGamma = (vertexGamma - inner) * (1.0 - stroke_scale) + inner;`,
        `    vec2 flip_vertexAlpha = vec2(inner_vertexAlpha.x, - inner_vertexAlpha.y);`,
        `    vec2 flip_vertexBeta = vec2(inner_vertexBeta.x, - inner_vertexBeta.y);`,
        `    vec2 flip_vertexGamma = vec2(inner_vertexGamma.x, - inner_vertexGamma.y);`,
        `    float d1 = sign(rotate_related_FragCoord, flip_vertexAlpha, flip_vertexBeta);`,
        `    float d2 = sign(rotate_related_FragCoord, flip_vertexBeta, flip_vertexGamma);`,
        `    float d3 = sign(rotate_related_FragCoord, flip_vertexGamma, flip_vertexAlpha);`,
        `    bool has_neg = (d1 < 0.0) || (d2 < 0.0) || (d3 < 0.0);`,
        `    bool has_pos = (d1 > 0.0) || (d2 > 0.0) || (d3 > 0.0);`,
        `    if (!(has_neg && has_pos)) {`,
        `        return 1.0;`,
        `    } else {`,
        `        return 0.0;`,
        `    }`,
        `}`
    ],
    [
        `float inTriangleBorder() {`,
        `    mat2 rotate_mat = mat2(`,
        `        cos(rotate), sin(rotate),`,
        `        -sin(rotate), cos(rotate)`,
        `    );`,
        `    vec2 inner = calculate_inner_point(vertexAlpha, vertexBeta, vertexGamma);`,
        `    float stroke_scale = calculate_stroke_scale(vertexAlpha, vertexBeta, vertexGamma);`,
        `    vec2 outer_vertexAlpha = (vertexAlpha - inner) * (1.0 + stroke_scale) + inner;`,
        `    vec2 outer_vertexBeta = (vertexBeta - inner) * (1.0 + stroke_scale) + inner;`,
        `    vec2 outer_vertexGamma = (vertexGamma - inner) * (1.0 + stroke_scale) + inner;`,
        `    vec2 flip_pos = vec2(position.x, viewport.y - position.y);`,
        `    vec2 rotate_related_FragCoord = rotate_mat * (gl_FragCoord.xy / pixelRatio - flip_pos);`,
        `    vec2 flip_vertexAlpha = vec2(outer_vertexAlpha.x, - outer_vertexAlpha.y);`,
        `    vec2 flip_vertexBeta = vec2(outer_vertexBeta.x, - outer_vertexBeta.y);`,
        `    vec2 flip_vertexGamma =vec2(outer_vertexGamma.x, - outer_vertexGamma.y);`,
        ``,
        `    float d1 = sign(rotate_related_FragCoord, flip_vertexAlpha, flip_vertexBeta);`,
        `    float d2 = sign(rotate_related_FragCoord, flip_vertexBeta, flip_vertexGamma);`,
        `    float d3 = sign(rotate_related_FragCoord, flip_vertexGamma, flip_vertexAlpha);`,
        ``,
        `    bool has_neg = (d1 <= 0.0) || (d2 <= 0.0) || (d3 <= 0.0);`,
        `    bool has_pos = (d1 >= 0.0) || (d2 >= 0.0) || (d3 >= 0.0);`,
        ``,
        `    bool inTriangle = inTriangle() > 0.5;`,
        `    bool inTriangleBorder = !(has_neg && has_pos);`,
        ``,
        `    if (!inTriangle && inTriangleBorder) {`,
        `        return 1.0;`,
        `    } else {`,
        `        return 0.0;`,
        `    }`,
        `}`
    ],
    [
        `float inRect() {`,
        `    float width = size.x;`,
        `    float height = size.y;`,
        `    vec2 flip_pos = position;`,
        `    flip_pos.y = viewport.y - position.y;`,
        `    mat2 rotate_mat = mat2(`,
        `        cos(rotate), sin(rotate),`,
        `        -sin(rotate), cos(rotate)`,
        `    );`,
        `    vec2 rotate_related_FragCoord = rotate_mat * (gl_FragCoord.xy / pixelRatio - flip_pos);`,
        `    float x_in = step(rotate_related_FragCoord.x, width / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.x, - width / 2.0 + strokeWidth / 2.0));`,
        `    float y_in = step(rotate_related_FragCoord.y, height / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.y, - height / 2.0 + strokeWidth / 2.0));`,
        `    return x_in * y_in;`,
        `}`
    ],
    [
        `float inRectBorder() {`,
        `    float width = size.x;`,
        `    float height = size.y;`,
        `    vec2 flip_pos = position;`,
        `    flip_pos.y = viewport.y - position.y;`,
        `    mat2 rotate_mat = mat2(`,
        `        cos(rotate), sin(rotate),`,
        `        -sin(rotate), cos(rotate)`,
        `    );`,
        `    vec2 rotate_related_FragCoord = rotate_mat * (gl_FragCoord.xy / pixelRatio - flip_pos);`,
        `    float x_in_outer = step(rotate_related_FragCoord.x, width / 2.0 + strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.x, - width / 2.0 - strokeWidth / 2.0));`,
        `    float y_in_outer = step(rotate_related_FragCoord.y, height / 2.0 + strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.y, - height / 2.0 - strokeWidth / 2.0));`,
        `    float x_in_inner = step(rotate_related_FragCoord.x, width / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.x, - width / 2.0 + strokeWidth / 2.0));`,
        `    float y_in_inner = step(rotate_related_FragCoord.y, height / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.y, - height / 2.0 + strokeWidth / 2.0));`,
        ``,
        `    return x_in_outer * y_in_outer * (1.0 - x_in_inner * y_in_inner);`,
        `}`
    ],
    [
        `float inCross() {`,
        `    vec2 flip_pos = position;`,
        `    flip_pos.y = viewport.y - position.y;`,
        `    mat2 rotate_mat = mat2(`,
        `        cos(rotate), sin(rotate),`,
        `        -sin(rotate), cos(rotate)`,
        `    );`,
        `    vec2 rotate_related_FragCoord = rotate_mat * (gl_FragCoord.xy / pixelRatio - flip_pos);`,
        `    float innerWidth = innerSize.x;`,
        `    float innerHeight = innerSize.y;`,
        `    float width = size.x;`,
        `    float height = size.y;`,
        `    float x_in1 = step(rotate_related_FragCoord.x, width / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.x, - width / 2.0 + strokeWidth / 2.0));`,
        `    float y_in1 = step(rotate_related_FragCoord.y, innerHeight / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.y, - innerHeight / 2.0 + strokeWidth / 2.0));`,
        `    float x_in2 = step(rotate_related_FragCoord.x, innerWidth / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.x, - innerWidth / 2.0 + strokeWidth / 2.0));`,
        `    float y_in2 = step(rotate_related_FragCoord.y, height / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.y, - height / 2.0 + strokeWidth / 2.0));`,
        `    return min(1., x_in1 * y_in1 + x_in2 * y_in2);`,
        `}`
    ],
    [
        `float inCrossBorder() {`,
        `    vec2 flip_pos = position;`,
        `    flip_pos.y = viewport.y - position.y;`,
        `    mat2 rotate_mat = mat2(`,
        `        cos(rotate), sin(rotate),`,
        `        -sin(rotate), cos(rotate)`,
        `    );`,
        `    vec2 rotate_related_FragCoord = rotate_mat * (gl_FragCoord.xy / pixelRatio - flip_pos);`,
        `    float innerWidth = innerSize.x;`,
        `    float innerHeight = innerSize.y;`,
        `    float width = size.x;`,
        `    float height = size.y;`,
        // TODO: need refactor
        `    float x_in1 = step(rotate_related_FragCoord.x, width / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.x, - width / 2.0 + strokeWidth / 2.0));`,
        `    float y_in1 = step(rotate_related_FragCoord.y, innerHeight / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.y, - innerHeight / 2.0 + strokeWidth / 2.0));`,
        `    float x_in2 = step(rotate_related_FragCoord.x, innerWidth / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.x, - innerWidth / 2.0 + strokeWidth / 2.0));`,
        `    float y_in2 = step(rotate_related_FragCoord.y, height / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.y, - height / 2.0 + strokeWidth / 2.0));`,
        `    float outCross = 1. - min(1., x_in1 * y_in1 + x_in2 * y_in2);`,
        ``,
        `    float x_out1 = step(rotate_related_FragCoord.x, width / 2.0 + strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.x, - width / 2.0 - strokeWidth / 2.0));`,
        `    float y_out1 = step(rotate_related_FragCoord.y, innerHeight / 2.0 + strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.y, - innerHeight / 2.0 - strokeWidth / 2.0));`,
        `    float x_out2 = step(rotate_related_FragCoord.x, innerWidth / 2.0 + strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.x, - innerWidth / 2.0 - strokeWidth / 2.0));`,
        `    float y_out2 = step(rotate_related_FragCoord.y, height / 2.0 + strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.y, - height / 2.0 - strokeWidth / 2.0));`,
        `    float inCrossBorder = min(1., x_out1 * y_out1 + x_out2 * y_out2);`,
        `    return inCrossBorder * outCross;`,
        `}`
    ],
    [
        `float inCircle() {`,
        `    vec2 flip_pos = position;`,
        `    flip_pos.y = viewport.y - position.y;`,
        `    float dist = distance(gl_FragCoord.xy / pixelRatio, flip_pos);`,
        `    return 1. - smoothstep((r - strokeWidth / 2.) - 2. * fwidth(dist), (r - strokeWidth / 2.), dist);`,
        `}`
    ],
    [
        `float inCircleBorder() {`,
        `    if (strokeWidth == 0.) {`,
        `      return 0.;`,
        `    }`,
        `    vec2 flip_pos = position;`,
        `    flip_pos.y = viewport.y - position.y;`,
        ``,
        `    float dist = distance(gl_FragCoord.xy / pixelRatio, flip_pos);`,
        `    float drawOuter = 1. - smoothstep((r + strokeWidth / 2.) - fwidth(dist), (r + strokeWidth / 2.), dist);`,
        `    float drawInner = 1. - smoothstep((r - strokeWidth / 2.) - fwidth(dist), (r - strokeWidth / 2.), dist);`,
        `    return drawOuter * (1. - drawInner);`,
        `}`
    ]
];
fragment.main = [
    `void main(void) {`,
    `    if (shape == 0.0) {`,
    `        // circle shape`,
    `        // border check, using 0.5(center of smoothstep)`,
    `        if (inCircle() < 0.1 && (inCircleBorder() < 0.1)) {`,
    `            discard;`,
    `        }`,
    `        fragmentColor = inCircleBorder() * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a) + inCircle() * vec4(fill.rgb * fill.a, fill.a);`,
    `    } else if (shape == 1.0) {`,
    `        if (inRect() < 0.5 && (inRectBorder() < 0.5)) {`,
    `            discard;`,
    `        }`,
    `        // rect shape`,
    `        fragmentColor = inRectBorder() * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a) + inRect() * vec4(fill.rgb * fill.a, fill.a);`,
    `    } else if (shape == 2.0) {`,
    `        if (inTriangle() < 0.5 && (inTriangleBorder() < 0.5)) {`,
    `            discard;`,
    `        }`,
    `        // triangle shape`,
    `        fragmentColor = inTriangleBorder() * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a) + inTriangle() * vec4(fill.rgb * fill.a, fill.a);`,
    `    } else if (shape == 3.0) {`,
    `        if (inCross() < 0.5 && (inCrossBorder() < 0.5)) {`,
    `            discard;`,
    `        }`,
    `        // cross shape`,
    `        fragmentColor = inCrossBorder() * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a) + inCross() * vec4(fill.rgb * fill.a, fill.a);`,
    `    }`,
    `}`
];
const idFragment = fragment.copy();
exports.idFragment = idFragment;
idFragment.inputs['id'] = 'vec4';
// delete old fragmentColor and add new fragmentColor
const sentencesTobeReplaced = [
    `        fragmentColor = inCircleBorder() * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a) + inCircle() * vec4(fill.rgb * fill.a, fill.a);`,
    `        fragmentColor = inRectBorder() * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a) + inRect() * vec4(fill.rgb * fill.a, fill.a);`,
    `        fragmentColor = inTriangleBorder() * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a) + inTriangle() * vec4(fill.rgb * fill.a, fill.a);`,
    `        fragmentColor = inCrossBorder() * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a) + inCross() * vec4(fill.rgb * fill.a, fill.a);`
];
sentencesTobeReplaced.forEach((sentence) => {
    idFragment.main[idFragment.main.indexOf(sentence)] = `fragmentColor = id;`;
});


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.idFragment = exports.fragment = exports.idVertex = exports.vertex = void 0;
const utils_1 = __webpack_require__(0);
const vertex = new utils_1.Shader();
exports.vertex = vertex;
vertex.inputs = {
    inVertexPos: 'vec3',
    in_shape: 'float',
    in_source: 'vec2',
    in_target: 'vec2',
    in_curveness: 'float',
    in_dashInterval: 'float',
    in_strokeWidth: 'float',
    in_strokeColor: 'vec4'
};
vertex.outputs = {
    shape: 'float',
    strokeColor: 'vec4',
    strokeWidth: 'float',
    cpA: 'vec2',
    cpB: 'vec2',
    cpC: 'vec2',
    curveness: 'float',
    dashInterval: 'float'
};
vertex.uniforms = {
    projection: 'mat3',
    scale: 'vec2',
    translate: 'vec2'
};
vertex.main = [
    `void main(void) {`,
    `    strokeColor = in_strokeColor;`,
    `    strokeWidth = in_strokeWidth;`,
    `    shape = in_shape;`,
    `    dashInterval = in_dashInterval;`,
    `    vec2 source = in_source * scale + translate;`,
    `    vec2 target = in_target * scale + translate;`,
    `    vec2 delta = target - source;`,
    `    vec2 center = 0.5 * (source + target);`,
    `    float len = length(delta);`,
    `    float phi = atan(delta.y / delta.x);`,
    `    float containerWidth = in_strokeWidth;`,
    `    if (in_shape == 1.) {`,
    `       containerWidth = 2. * (in_curveness * len + in_strokeWidth); // TODO: can optimize to half`,
    `    }`,
    `    vec2 normal = normalize(vec2(delta.y, -delta.x)); // TODO: link's normal, need control side`,
    `    cpA = source;`,
    `    cpB = center + normal * len * in_curveness;`,
    `    cpC = target;`,
    ``,
    `    mat3 line_scale = mat3(`,
    `        len, 0, 0,`,
    `        0, containerWidth, 0,`,
    `        0, 0, 1`,
    `    );`,
    `    mat3 line_rotate = mat3(`,
    `        cos(phi), sin(phi), 0,`,
    `        -sin(phi), cos(phi), 0,`,
    `        0, 0, 1`,
    `    );`,
    `    mat3 line_translate = mat3(`,
    `        1, 0, 0,`,
    `        0, 1, 0,`,
    `        center.x, center.y, 1`,
    `    );`,
    `    `,
    `    mat3 transform = line_translate * line_rotate * line_scale;`,
    ``,
    `    gl_Position = vec4(projection * transform * inVertexPos, 1.);`,
    `}`
];
const idVertex = vertex.copy();
exports.idVertex = idVertex;
idVertex.inputs['in_id'] = 'vec4';
idVertex.outputs['id'] = 'vec4';
idVertex.main.splice(1, 0, `id = in_id;`);
const fragment = new utils_1.Shader();
exports.fragment = fragment;
fragment.inputs = { ...vertex.outputs };
fragment.outputs = {
    fragmentColor: 'vec4'
};
fragment.uniforms = {
    viewport: 'vec2',
    pixelRatio: 'float'
};
fragment.methods = [
    [
        `// reference paper: http://hhoppe.com/ravg.pdf`,
        `// distance vector to origin(0, 0)`,
        `float det(vec2 a, vec2 b) { return a.x * b.y - b.x * a.y; }`,
        ``,
        `vec2 get_distance_vector(vec2 b0, vec2 b1, vec2 b2) {`,
        `  float a = det(b0, b2), b = 2.0 * det(b1, b0), d = 2.0 * det(b2, b1);`,
        `  float f = b * d - a * a;`,
        `  vec2 d21 = b2 - b1, d10 = b1 - b0, d20 = b2 - b0;`,
        `  vec2 gf = 2.0 * (b * d21 + d * d10 + a * d20);`,
        `  gf = vec2(gf.y, -gf.x);`,
        `  vec2 pp = -f * gf / dot(gf, gf);`,
        `  vec2 d0p = b0 - pp;`,
        `  float ap = det(d0p, d20), bp = 2.0 * det(d10, d0p);`,
        `  float t = clamp((ap + bp) / (2.0 * a + b + d), 0.0, 1.0);`,
        `  return mix(mix(b0, b1, t), mix(b1, b2, t), t);`,
        `}`
    ],
    [
        `float distToQuadraticBezierCurve(vec2 p, vec2 b0, vec2 b1, vec2 b2) {`,
        `  return length(get_distance_vector(b0 - p, b1 - p, b2 - p));`,
        `}`
    ],
    [
        `float isInDash(vec2 p, vec2 p0, vec2 p1, int dashInterval) {`,
        `  if (dashInterval <= 0) {`,
        `    return 0.;`,
        `  }`,
        `  if (dashInterval >= int(length(p1 - p0))) {`,
        `    return 1.;`,
        `  }`,
        `  float d = dot((p - p0), (p1 - p0)) / length(p1 - p0);`,
        `  int idx = int(d) / dashInterval;`,
        `  return 1. - float(idx % 2);`,
        `}`
    ]
];
fragment.main = [
    `void main(void) {`,
    `  if (shape == 0.) {`,
    `    // line`,
    `    fragmentColor = vec4(strokeColor.rgb * strokeColor.a, strokeColor.a);`,
    `  } else if (shape == 1.) {`,
    `    // curve`,
    `    vec2 pos = gl_FragCoord.xy / pixelRatio;`,
    `    vec2 cpAFlipped = vec2(cpA.x, viewport.y - cpA.y);`,
    `    vec2 cpBFlipped = vec2(cpB.x, viewport.y - cpB.y);`,
    `    vec2 cpCFlipped = vec2(cpC.x, viewport.y - cpC.y);`,
    `    float dist = distToQuadraticBezierCurve(pos, cpAFlipped, cpBFlipped, cpCFlipped);`,
    `    float epsilon = fwidth(dist);`,
    `    if (dist < strokeWidth / 2. + epsilon) {`,
    `      float inCurve = 1. - smoothstep(strokeWidth / 2. - epsilon, strokeWidth / 2. + epsilon, dist);`,
    `      fragmentColor = inCurve * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a);`,
    `    } else {`,
    `      discard;`,
    `    }`,
    `  } else if (shape == 2.) {`,
    `    // dash-line`,
    `    vec2 pos = gl_FragCoord.xy / pixelRatio;`,
    `    vec2 cpAFlipped = vec2(cpA.x, viewport.y - cpA.y);`,
    `    vec2 cpCFlipped = vec2(cpC.x, viewport.y - cpC.y);`,
    `    if(isInDash(pos, cpAFlipped, cpCFlipped, int(dashInterval)) > 0.5) {`,
    `      fragmentColor = vec4(strokeColor.rgb * strokeColor.a, strokeColor.a);`,
    `    } else {`,
    `      discard;`,
    `    }`,
    `  }`,
    `}`
];
const idFragment = fragment.copy();
exports.idFragment = idFragment;
idFragment.inputs['id'] = 'vec4';
const sentencesTobeReplaced = [
    `    fragmentColor = vec4(strokeColor.rgb * strokeColor.a, strokeColor.a);`,
    `      fragmentColor = inCurve * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a);`,
    `      fragmentColor = vec4(strokeColor.rgb * strokeColor.a, strokeColor.a);`
];
sentencesTobeReplaced.forEach((sentence) => {
    idFragment.main[idFragment.main.indexOf(sentence)] = `fragmentColor = id;`;
});


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description Node using in Renderer
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderNodeManager = void 0;
const render_element_1 = __webpack_require__(4);
class RenderNodeManager extends render_element_1.RenderElementManager {
    // private idToIndex: { [key: string]: number }
    /**
     * create render node manager
     * @param gl WebGL context
     * @param params nessesary configs for node manager
     * @param idTexture texture store elements id of each pixel
     */
    constructor(gl, params, shaders, 
    // shaders: ShaderSeries,
    idTexture) {
        super(
        /* webgl context */ gl, 
        // prettier-ignore
        /* parameters */ { ...params, instanceVerteces: [
                -0.5, 0.5, 1.0,
                -0.5, -0.5, 1.0,
                0.5, 0.5, 1.0,
                0.5, -0.5, 1.0,
            ] }, 
        /* shader series */ {
            ...shaders
        }, 
        /* idTexture */ idTexture);
        this.renderIdToElement = {};
    }
    /**
     * refresh all nodes position after lazy update
     * @param nodes all node data
     */
    refreshPosition(nodes) {
        // set array
        const attr = this.attributes.get('in_position');
        nodes.forEach((node, i) => {
            attr.array[2 * i] = node.$_position.x;
            attr.array[2 * i + 1] = node.$_position.y;
        });
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer);
        this.gl.bufferSubData(this.gl.ARRAY_BUFFER, 0, attr.array, 0, attr.size * nodes.length);
    }
}
exports.RenderNodeManager = RenderNodeManager;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description Link used in renderer
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderLinkManager = void 0;
const render_element_1 = __webpack_require__(4);
class RenderLinkManager extends render_element_1.RenderElementManager {
    /**
     * create render link manager
     * @param gl WebGL context
     * @param params nessesary configs for link manager
     * @param idTexture texture store elements id of each pixel
     */
    constructor(gl, params, shaders, idTexture) {
        super(
        /* webgl context */ gl, 
        // prettier-ignore
        /* parameters */ { ...params, instanceVerteces: [
                -0.5, 0.5, 1.0,
                -0.5, -0.5, 1.0,
                0.5, 0.5, 1.0,
                0.5, -0.5, 1.0,
            ] }, 
        /* shader series */ {
            ...shaders
        }, 
        /* idTexture */ idTexture);
        this.renderIdToElement = {};
    }
    /**
     * refresh all position of edges
     * @param links all link data
     */
    refreshPosition(links) {
        const sourceAttribute = this.attributes.get('in_source');
        const targetAttribute = this.attributes.get('in_target');
        links.forEach((link, i) => {
            sourceAttribute.array[2 * i] = link.$_source.$_position.x;
            sourceAttribute.array[2 * i + 1] = link.$_source.$_position.y;
            targetAttribute.array[2 * i] = link.$_target.$_position.x;
            targetAttribute.array[2 * i + 1] = link.$_target.$_position.y;
        });
        const arr = [sourceAttribute, targetAttribute];
        arr.forEach((attr) => {
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer);
            this.gl.bufferSubData(this.gl.ARRAY_BUFFER, 0, attr.array, 0, attr.size * links.length);
        });
    }
}
exports.RenderLinkManager = RenderLinkManager;


/***/ }),
/* 19 */
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
        this.isZoomListened = false;
        this.isMouseListened = false;
        this.mouseEventCallbackCount = 0;
        this.isMouseDown = false;
        this.isMouseMove = false;
        this.netv = netv;
        this.canvas = this.netv.$_container.querySelector('canvas');
        this.zoomCallbackSet = new Set();
        this.panCallbackSet = new Set();
        this.clickCallbackSet = new Set();
        this.mousedownCallbackSet = new Set();
        this.mouseupCallbackSet = new Set();
    }
    /**
     * progmatically pan
     * @param x
     * @param y
     */
    panBy(x, y) {
        const newTransform = { ...this.netv.$_transform };
        newTransform.x += x;
        newTransform.y += y;
        return this.netv.transform(newTransform);
    }
    /**
     * progmatically zoom
     * @param factor zoom factor
     * @param center optional, zoom center position
     */
    zoomBy(factor, center) {
        const newTransform = { ...this.netv.$_transform };
        let centerPos = center;
        if (!centerPos) {
            centerPos = { x: this.netv.$_configs.width / 2, y: this.netv.$_configs.height / 2 };
        }
        const { x, y } = centerPos;
        newTransform.x = (1 - factor) * x + factor * newTransform.x;
        newTransform.y = (1 - factor) * y + factor * newTransform.y;
        newTransform.k *= factor;
        return this.netv.transform(newTransform);
    }
    /**
     * move current position to center of canvas
     * @param pos
     */
    centerPosition(pos) {
        const newTransform = { ...this.netv.$_transform };
        const x = pos.x * newTransform.k + newTransform.x;
        const y = pos.y * newTransform.k + newTransform.y;
        const center = {
            x: this.netv.$_configs.width / 2,
            y: this.netv.$_configs.height / 2
        };
        newTransform.x += center.x - x;
        newTransform.y += center.y - y;
        this.netv.transform(newTransform);
        return newTransform;
    }
    /**
     * init zoom interaction
     */
    onZoom(callback) {
        this.zoomCallbackSet.add(callback);
        if (!this.isZoomListened) {
            this.addWheelListeners();
            this.isZoomListened = true;
        }
    }
    offZoom(callback) {
        this.zoomCallbackSet.delete(callback);
        if (!this.zoomCallbackSet.size) {
            this.removeWheelListeners();
            this.isZoomListened = false;
        }
    }
    onClick(callback) {
        this.clickCallbackSet.add(callback);
        this.increaseMouseEventCallbackCountBy(1);
    }
    offClick(callback) {
        this.clickCallbackSet.delete(callback);
        this.decreaseMouseEventCallbackCountBy(1);
    }
    onMousedown(callback) {
        this.mousedownCallbackSet.add(callback);
        this.increaseMouseEventCallbackCountBy(1);
    }
    offMousedown(callback) {
        this.mousedownCallbackSet.delete(callback);
        this.decreaseMouseEventCallbackCountBy(1);
    }
    onMouseup(callback) {
        this.mouseupCallbackSet.add(callback);
        this.increaseMouseEventCallbackCountBy(1);
    }
    offMouseup(callback) {
        this.mouseupCallbackSet.delete(callback);
        this.decreaseMouseEventCallbackCountBy(1);
    }
    onPan(callback) {
        this.panCallbackSet.add(callback);
        this.increaseMouseEventCallbackCountBy(1);
    }
    offPan(callback) {
        this.panCallbackSet.delete(callback);
        this.decreaseMouseEventCallbackCountBy(1);
    }
    increaseMouseEventCallbackCountBy(n) {
        this.mouseEventCallbackCount += n;
        if (!this.isMouseListened && this.mouseEventCallbackCount > 0) {
            // there is some mouse event listened elements
            this.addMouseListeners();
            this.isMouseListened = true;
        }
    }
    decreaseMouseEventCallbackCountBy(n) {
        this.mouseEventCallbackCount -= n;
        if (this.mouseEventCallbackCount <= 0 && !this.panCallbackSet.size) {
            // no pan callback functions and no mouse event listened elements
            this.removeMouseListeners();
            this.isMouseListened = false;
        }
    }
    /**
     * @private handle zoom (mouse wheel) event
     * @param {WheelEvent} evt
     * @memberof InteractionManager
     */
    handleZoom(evt) {
        const newTransform = { ...this.netv.$_transform };
        const x = evt.offsetX || evt.pageX - this.canvas.offsetLeft;
        const y = evt.offsetY || evt.pageY - this.canvas.offsetTop;
        const delta = evt.deltaY ? evt.deltaY / 40 : evt.detail ? -evt.detail : 0;
        if (delta) {
            const k = Math.pow(1.1, delta);
            newTransform.x = (1 - k) * x + k * newTransform.x;
            newTransform.y = (1 - k) * y + k * newTransform.y;
            newTransform.k *= k;
            this.netv.transform(newTransform);
            this.netv.draw();
            this.zoomCallbackSet.forEach((callback) => callback({
                event: evt,
                name: 'zoom',
                transform: newTransform
            }));
        }
        evt.preventDefault();
    }
    /**
     * @private handle mouse down event
     * @param {MouseEvent} evt
     * @memberof InteractionManager
     */
    handleMouseDown(evt) {
        var _a;
        const x = evt.offsetX || evt.pageX - this.canvas.offsetLeft;
        const y = evt.offsetY || evt.pageY - this.canvas.offsetTop;
        const yInv = this.netv.$_configs.height - y;
        const newTransform = { ...this.netv.$_transform };
        this.isMouseDown = true;
        this.mouseDownPos = { x, y };
        this.dragStartTransform = JSON.parse(JSON.stringify(newTransform));
        this.mouseDownElement = this.netv.getElementByPosition({
            x,
            y: yInv
        });
        if ((_a = this.mouseDownElement) === null || _a === void 0 ? void 0 : _a.element) {
            const element = this.mouseDownElement.element;
            if ((element === null || element === void 0 ? void 0 : element.type) === 'Node') {
                // only node can be dragged
                // record orgin position for drag
                this.mouseDownElementOriginPos = { ...element.position() };
            }
            element.$_mousedownCallbackSet.forEach((callback) => {
                callback({
                    event: evt,
                    name: 'mousedown',
                    element
                });
            });
        }
        else {
            this.mousedownCallbackSet.forEach((callback) => {
                callback({
                    event: evt,
                    name: 'mousedown'
                });
            });
        }
    }
    /**
     * @private handle mouse move event
     * @param {MouseEvent} evt
     * @memberof InteractionManager
     */
    handleMouseMove(evt) {
        var _a, _b;
        let newTransform = { ...this.netv.$_transform };
        const x = evt.offsetX || evt.pageX - this.canvas.offsetLeft;
        const y = evt.offsetY || evt.pageY - this.canvas.offsetTop;
        const lastIsMouseMove = this.isMouseMove;
        const lastMouseMoveElement = this.mouseMoveElement;
        if (this.isMouseDown) {
            this.isMouseMove = true;
            const element = (_a = this.mouseDownElement) === null || _a === void 0 ? void 0 : _a.element;
            // drag a node: 1. mousedown on a Node; and 2. the node is listened;
            // else pan
            if ((element === null || element === void 0 ? void 0 : element.type) === 'Node' &&
                element.$_dragstartCallbackSet.size +
                    element.$_draggingCallbackSet.size +
                    element.$_dragendCallbackSet.size) {
                // drag a listened node
                if (!lastIsMouseMove) {
                    // last time, the mouse is not move
                    element.$_dragstartCallbackSet.forEach((callback) => {
                        callback({
                            event: evt,
                            name: 'dragstart',
                            element
                        });
                    });
                }
                // change node position
                element.position({
                    x: this.mouseDownElementOriginPos.x +
                        (x - this.mouseDownPos.x) / newTransform.k,
                    y: this.mouseDownElementOriginPos.y + (y - this.mouseDownPos.y) / newTransform.k
                });
                this.netv.draw();
                element.$_draggingCallbackSet.forEach((callback) => {
                    callback({
                        event: evt,
                        name: 'dragging',
                        element
                    });
                });
            }
            else {
                // pan, when not dragging node
                newTransform.x = this.dragStartTransform.x + x - this.mouseDownPos.x;
                newTransform.y = this.dragStartTransform.y + y - this.mouseDownPos.y;
                if (this.panCallbackSet.size) {
                    this.netv.transform(newTransform);
                    this.netv.draw();
                    this.panCallbackSet.forEach((callback) => callback({
                        event: evt,
                        name: 'pan',
                        transform: newTransform
                    }));
                }
            }
        }
        else {
            // hover
            const yInv = this.netv.$_configs.height - y;
            const element = (_b = this.netv.getElementByPosition({ x, y: yInv })) === null || _b === void 0 ? void 0 : _b.element;
            this.mouseMoveElement = element;
            if (lastMouseMoveElement === element) {
                element === null || element === void 0 ? void 0 : element.$_mousemoveCallbackSet.forEach((callback) => callback({
                    event: evt,
                    name: 'mousemove',
                    element
                }));
            }
            else {
                lastMouseMoveElement === null || lastMouseMoveElement === void 0 ? void 0 : lastMouseMoveElement.$_mouseoutCallbackSet.forEach((callback) => callback({
                    event: evt,
                    name: 'mouseout',
                    element: lastMouseMoveElement
                }));
                element === null || element === void 0 ? void 0 : element.$_mouseoverCallbackSet.forEach((callback) => callback({
                    event: evt,
                    name: 'mouseover',
                    element
                }));
            }
        }
    }
    /**
     * @private handle mouse up event
     * @param {MouseEvent} evt
     * @memberof InteractionManager
     */
    handleMouseUp(evt) {
        var _a, _b;
        if (this.mouseDownElement) {
            if (this.isMouseMove) {
                // drag
                if ((_a = this.mouseDownElement) === null || _a === void 0 ? void 0 : _a.element.$_dragendCallbackSet) {
                    const element = this.mouseDownElement.element;
                    element.$_dragendCallbackSet.forEach((callback) => callback({
                        event: evt,
                        name: 'dragend',
                        element
                    }));
                }
            }
            else {
                // click
                const element = this.mouseDownElement.element;
                element.$_clickCallbackSet.forEach((callback) => callback({
                    event: evt,
                    name: 'click',
                    element
                }));
            }
            // mouseup
            if ((_b = this.mouseDownElement) === null || _b === void 0 ? void 0 : _b.element.$_mouseupCallbackSet) {
                const element = this.mouseDownElement.element;
                element.$_mouseupCallbackSet.forEach((callback) => callback({
                    event: evt,
                    name: 'mouseup',
                    element
                }));
            }
        }
        else {
            // canvas mouseup
            this.mouseupCallbackSet.forEach((callback) => callback({
                event: evt,
                name: 'mouseup'
            }));
            if (!this.isMouseMove) {
                // click, not pan
                this.clickCallbackSet.forEach((callback) => callback({
                    event: evt,
                    name: 'click'
                }));
            }
        }
        this.isMouseDown = false;
        this.isMouseMove = false;
        this.mouseDownElement = undefined;
    }
    addWheelListeners() {
        this.canvas.addEventListener('DOMMouseScroll', this.handleZoom.bind(this), false);
        this.canvas.addEventListener('mousewheel', this.handleZoom.bind(this), false);
    }
    removeWheelListeners() {
        this.canvas.removeEventListener('DOMMouseScroll', this.handleZoom.bind(this));
        this.canvas.removeEventListener('mousewheel', this.handleZoom.bind(this));
    }
    addMouseListeners() {
        const canvas = this.canvas;
        canvas.addEventListener('mousedown', this.handleMouseDown.bind(this));
        canvas.addEventListener('mousemove', this.handleMouseMove.bind(this));
        canvas.addEventListener('mouseup', this.handleMouseUp.bind(this));
    }
    removeMouseListeners() {
        const canvas = this.canvas;
        canvas.removeEventListener('mousedown', this.handleMouseDown.bind(this));
        canvas.removeEventListener('mousemove', this.handleMouseMove.bind(this));
        canvas.removeEventListener('mouseup', this.handleMouseUp.bind(this));
    }
}
exports.InteractionManager = InteractionManager;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logJs", function() { return logJs; });
function logJs(){
    console.log("js log")
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require("stardust-core"));
var stardust_webgl_1 = require("stardust-webgl");
exports.WebGLPlatform = stardust_webgl_1.WebGLPlatform;
exports.WebGLCanvasPlatform2D = stardust_webgl_1.WebGLCanvasPlatform2D;
var stardust_isotype_1 = require("stardust-isotype");
var mark;
(function (mark) {
    mark.isotype = stardust_isotype_1.isotype;
})(mark = exports.mark || (exports.mark = {}));
require("stardust-webgl");

},{"stardust-core":27,"stardust-isotype":28,"stardust-webgl":33}],2:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var types_1 = require("./types");
var TextureBinding = (function () {
    function TextureBinding() {
    }
    return TextureBinding;
}());
exports.TextureBinding = TextureBinding;
var Array = (function (_super) {
    __extends(Array, _super);
    function Array() {
        _super.apply(this, arguments);
        this._data = null;
        this._valueFunction = null;
        this._dirty = false;
        this._textureData = null;
    }
    Array.prototype.getTextureData = function () {
        if (this._dirty) {
            var values = this._data.map(this._valueFunction).map(types_1.getBindingValue);
            if (values.length == 0) {
                this._textureData = null;
            }
            else {
                var array_1;
                var numberComponents = void 0;
                if (typeof (values[0]) == "number") {
                    numberComponents = 1;
                    array_1 = new Float32Array(values.length * 4);
                    for (var i = 0; i < values.length; i++) {
                        array_1[i * 4] = values[i];
                    }
                }
                else {
                    numberComponents = values[0].length;
                    array_1 = new Float32Array(values.length * 4);
                    var offset = 0;
                    for (var i = 0; i < values.length; i++) {
                        var v = values[i];
                        for (var j = 0; j < numberComponents; j++) {
                            array_1[offset++] = v[j];
                        }
                        offset += 4 - numberComponents;
                    }
                }
                this._textureData = {
                    width: this._data.length,
                    height: 1,
                    dimensions: 1,
                    numberComponents: numberComponents,
                    data: array_1
                };
            }
        }
        return this._textureData;
    };
    Array.prototype.data = function (data) {
        if (data != null) {
            this._data = data;
            this._dirty = true;
            return this;
        }
        else {
            return this._data;
        }
    };
    Array.prototype.value = function (func) {
        if (func != null) {
            this._valueFunction = func;
            this._dirty = true;
            return this;
        }
        else {
            return this._valueFunction;
        }
    };
    return Array;
}(TextureBinding));
exports.Array = Array;
function array() {
    return new Array();
}
exports.array = array;

},{"./types":4}],3:[function(require,module,exports){
// binding.js:
// Take care of data binding.
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var spec_1 = require("../spec/spec");
var array_1 = require("./array");
var exceptions_1 = require("../exceptions");
var types_1 = require("./types");
__export(require("./types"));
__export(require("./array"));
// The main binding class.
var Binding = (function () {
    function Binding(typeName, value) {
        this._type = spec_1.types[typeName];
        this._value = value;
    }
    Object.defineProperty(Binding.prototype, "valueType", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "bindingType", {
        get: function () {
            if (this._value instanceof array_1.TextureBinding) {
                return types_1.BindingType.TEXTURE;
            }
            if (typeof (this._value) == "function") {
                return types_1.BindingType.FUNCTION;
            }
            return types_1.BindingType.VALUE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "specValue", {
        get: function () {
            return types_1.getBindingValue(this._value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "textureValue", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    Binding.prototype.forEach = function (data, callback) {
        switch (this.bindingType) {
            case types_1.BindingType.FUNCTION:
                {
                    var f = this._value;
                    for (var i = 0; i < data.length; i++) {
                        callback(types_1.getBindingValue(f(data[i], i)), i);
                    }
                }
                break;
            case types_1.BindingType.VALUE:
                {
                    var value = types_1.getBindingValue(this._value);
                    for (var i = 0; i < data.length; i++) {
                        callback(value, i);
                    }
                }
                break;
            case types_1.BindingType.TEXTURE: {
                throw new exceptions_1.RuntimeError("Texture binding does not support for each");
            }
        }
    };
    Binding.prototype.map = function (data) {
        switch (this.bindingType) {
            case types_1.BindingType.FUNCTION: {
                var f_1 = this._value;
                return data.map(function (d, i) { return types_1.getBindingValue(f_1(d, i)); });
            }
            case types_1.BindingType.VALUE: {
                var value_1 = types_1.getBindingValue(this._value);
                return data.map(function () { return value_1; });
            }
            case types_1.BindingType.TEXTURE: {
                throw new exceptions_1.RuntimeError("Texture binding does not support for map");
            }
        }
    };
    Binding.prototype.fillBinary = function (data, rep, array) {
        var n = data.length;
        var p = this._type.primitiveCount;
        var ptr = 0;
        switch (this.bindingType) {
            case types_1.BindingType.FUNCTION:
                {
                    var f = this._value;
                    if (p == 1) {
                        for (var i = 0; i < n; i++) {
                            var result = types_1.getBindingValue(f(data[i], i));
                            for (var k = 0; k < rep; k++) {
                                array[ptr++] = result;
                            }
                        }
                    }
                    else {
                        for (var i = 0; i < n; i++) {
                            var result = types_1.getBindingValue(f(data[i], i));
                            for (var k = 0; k < rep; k++) {
                                for (var j = 0; j < p; j++) {
                                    array[ptr++] = result[j];
                                }
                            }
                        }
                    }
                }
                break;
            case types_1.BindingType.VALUE:
                {
                    var value = types_1.getBindingValue(this._value);
                    if (p == 1) {
                        var v = value;
                        for (var i = 0; i < n; i++) {
                            for (var k = 0; k < rep; k++) {
                                array[ptr++] = v;
                            }
                        }
                    }
                    else {
                        var v = value;
                        for (var i = 0; i < n; i++) {
                            for (var k = 0; k < rep; k++) {
                                for (var j = 0; j < p; j++) {
                                    array[ptr++] = v[j];
                                }
                            }
                        }
                    }
                }
                break;
            case types_1.BindingType.TEXTURE: {
                throw new exceptions_1.RuntimeError("Texture binding does not support for fillBinary");
            }
        }
    };
    return Binding;
}());
exports.Binding = Binding;

},{"../exceptions":11,"../spec/spec":23,"./array":2,"./types":4}],4:[function(require,module,exports){
"use strict";
var math_1 = require("../math/math");
(function (BindingType) {
    BindingType[BindingType["VALUE"] = 0] = "VALUE";
    BindingType[BindingType["FUNCTION"] = 1] = "FUNCTION";
    BindingType[BindingType["TEXTURE"] = 2] = "TEXTURE";
})(exports.BindingType || (exports.BindingType = {}));
var BindingType = exports.BindingType;
var ShiftBinding = (function () {
    function ShiftBinding(name, offset) {
        this.name = name;
        this.offset = offset;
    }
    return ShiftBinding;
}());
exports.ShiftBinding = ShiftBinding;
// Resolve binding primitives to Value (Value = number or number[]).
function getBindingValue(value) {
    if (value instanceof math_1.MathType) {
        return value.toArray();
    }
    else {
        return value;
    }
}
exports.getBindingValue = getBindingValue;

},{"../math/math":18}],5:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var math_1 = require("../math/math");
// Stardust use colors with range 0-1 instead of 0-255, different from HTML!
var Color = (function (_super) {
    __extends(Color, _super);
    function Color(r, g, b, a) {
        if (r === void 0) { r = 0; }
        if (g === void 0) { g = 0; }
        if (b === void 0) { b = 0; }
        if (a === void 0) { a = 1; }
        _super.call(this);
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    Color.prototype.toArray = function () {
        return [this.r, this.g, this.b, this.a];
    };
    Color.prototype.clone = function () {
        return new Color(this.r, this.g, this.b, this.a);
    };
    Color.FromArray = function (_a) {
        var r = _a[0], g = _a[1], b = _a[2], a = _a[3];
        return new Color(r, g, b, a);
    };
    Color.FromHTML = function (html) {
        return Color.FromArray(color.fromHTML(html));
    };
    return Color;
}(math_1.MathType));
exports.Color = Color;
var color;
(function (color) {
    function fromHTML(html, alpha) {
        if (html === void 0) { html = "#000000"; }
        var m;
        m = html.match(/^ *rgb *\( *([0-9\.\-e]+) *, *([0-9\.\-e]+) *, *([0-9\.\-e]+) *\) *$/);
        if (m) {
            return [+m[1] / 255.0, +m[2] / 255.0, +m[3] / 255.0, alpha != null ? alpha : 1];
        }
        m = html.match(/^ *rgba *\( *([0-9\.\-e]+) *, *([0-9\.\-e]+) *, *([0-9\.\-e]+) *, *([0-9\.\-e]+) *\) *$/);
        if (m) {
            return [+m[1] / 255.0, +m[2] / 255.0, +m[3] / 255.0, alpha != null ? alpha * +m[4] : +m[4]];
        }
        m = html.match(/^ *\#([0-9a-fA-F]{3}) *$/);
        if (m) {
            var r = parseInt(m[1][0], 16) * 17;
            var g = parseInt(m[1][1], 16) * 17;
            var b = parseInt(m[1][2], 16) * 17;
            return [r / 255.0, g / 255.0, b / 255.0, alpha != null ? alpha : 1];
        }
        m = html.match(/^ *\#([0-9a-fA-F]{6}) *$/);
        if (m) {
            var r = parseInt(m[1].slice(0, 2), 16);
            var g = parseInt(m[1].slice(2, 4), 16);
            var b = parseInt(m[1].slice(4, 6), 16);
            return [r / 255.0, g / 255.0, b / 255.0, alpha != null ? alpha : 1];
        }
        return [0, 0, 0, 1];
    }
    color.fromHTML = fromHTML;
})(color = exports.color || (exports.color = {}));

},{"../math/math":18}],6:[function(require,module,exports){
"use strict";
var exceptions_1 = require("../exceptions");
var parser_1 = require("./parser");
var utils_1 = require("../utils/utils");
var Intrinsics = require("../intrinsics/intrinsics");
var Library = require("../library/library");
var ModuleResolver = (function () {
    function ModuleResolver() {
        var _this = this;
        this._functions = new utils_1.Dictionary();
        this._functionModule = new utils_1.Dictionary();
        this._currentMoudles = [];
        Intrinsics.forEachIntrinsicFunction(function (info) {
            _this.addIntrinsicFunction(info.name, {
                type: "function",
                isMark: false,
                isShader: false,
                name: info.internalName,
                returnType: info.returnType,
                arguments: info.argTypes.map(function (x, idx) { return { name: "a" + idx, type: x }; }),
                statements: null
            });
        });
    }
    ModuleResolver.prototype.addIntrinsicFunction = function (name, func) {
        if (!this._functions.has(name)) {
            var resolver = new FunctionOverloadResolver(name);
            this._functions.set(name, resolver);
            resolver.addFunction(func);
        }
        else {
            var resolver = this._functions.get(name);
            resolver.addFunction(func);
        }
    };
    ModuleResolver.prototype.addFunction = function (name, func) {
        if (!this._functions.has(name)) {
            var resolver = new FunctionOverloadResolver(name);
            this._functions.set(name, resolver);
            resolver.addFunction(func);
        }
        else {
            var resolver = this._functions.get(name);
            resolver.addFunction(func);
        }
    };
    ModuleResolver.prototype.importFunction = function (module, name) {
        this.addFunction(name, module.get(name));
        this._functionModule.set(name, module);
    };
    ModuleResolver.prototype.getFunction = function (name) {
        for (var i = this._currentMoudles.length - 1; i >= 0; i--) {
            var cm = this._currentMoudles[i];
            if (cm && cm.has(name)) {
                var resolver = new FunctionOverloadResolver(name);
                resolver.addFunction(cm.get(name));
                return resolver;
            }
        }
        if (this._functions.has(name)) {
            return this._functions.get(name);
        }
        else {
            return null;
        }
    };
    ModuleResolver.prototype.enterFunctionImplementation = function (name) {
        this._currentMoudles.push(this._functionModule.get(name));
    };
    ModuleResolver.prototype.leaveFunctionImplementation = function (name) {
        this._currentMoudles.pop();
    };
    return ModuleResolver;
}());
exports.ModuleResolver = ModuleResolver;
var ScopeVariables = (function () {
    function ScopeVariables(owner, parentScope, argMap) {
        if (parentScope === void 0) { parentScope = null; }
        if (argMap === void 0) { argMap = null; }
        this._owner = owner;
        this._variables = new utils_1.Dictionary();
        this._parentScope = parentScope || null;
        this._argMap = argMap;
    }
    // Add a variable with name and type, shadows the ones from previous scopes.
    ScopeVariables.prototype.addVariable = function (name, type) {
        if (this._variables.has(name) || (this._argMap != null && this._argMap.has(name))) {
            // If the variable is defined in the current scope, throw exception.
            throw new exceptions_1.CompileError(name + " is already declared.");
        }
        else {
            // Create new translated name and set variable info.
            var translatedName = this._owner.newTranslatedName(name, type);
            this._variables.set(name, {
                name: name,
                type: type,
                translatedName: translatedName
            });
        }
    };
    // Create a new variable of type.
    ScopeVariables.prototype.nextVariable = function (type) {
        var _this = this;
        var name = utils_1.attemptName("tmp", function (name) { return !_this._variables.has(name) && !(_this._argMap != null && _this._argMap.has(name)); });
        this.addVariable(name, type);
        return this.getVariable(name);
    };
    ScopeVariables.prototype.getVariable = function (name) {
        if (this._variables.has(name)) {
            return this._variables.get(name);
        }
        else if (this._argMap != null && this._argMap.has(name)) {
            return this._parentScope.getVariable(this._argMap.get(name));
        }
        else if (this._parentScope) {
            return this._parentScope.getVariable(name);
        }
        else {
            throw new exceptions_1.CompileError(name + " is undefined.");
        }
    };
    Object.defineProperty(ScopeVariables.prototype, "parentScope", {
        get: function () {
            return this._parentScope;
        },
        enumerable: true,
        configurable: true
    });
    return ScopeVariables;
}());
exports.ScopeVariables = ScopeVariables;
var ScopeStack = (function () {
    function ScopeStack() {
        this._translatedNames = new utils_1.Dictionary();
        this._globalScope = new ScopeVariables(this);
        this._currentScope = this._globalScope;
    }
    // Reset scope to empty.
    ScopeStack.prototype.resetScope = function () {
        this._translatedNames = new utils_1.Dictionary();
        this._globalScope = new ScopeVariables(this);
        this._currentScope = this._globalScope;
    };
    // Push a scope.
    ScopeStack.prototype.pushScope = function (argMap) {
        if (argMap === void 0) { argMap = null; }
        this._currentScope = new ScopeVariables(this, this._currentScope, argMap);
    };
    // Pop a scope.
    ScopeStack.prototype.popScope = function () {
        this._currentScope = this._currentScope.parentScope;
    };
    // Create a new translated variable.
    ScopeStack.prototype.newTranslatedName = function (name, type) {
        var _this = this;
        var candidate = utils_1.attemptName(name, function (c) { return !_this._translatedNames.has(c); });
        this._translatedNames.set(candidate, {
            name: name,
            type: type,
            translatedName: candidate
        });
        return candidate;
    };
    // Iterate through translated variables.
    ScopeStack.prototype.forEach = function (callback) {
        this._translatedNames.forEach(function (o) {
            callback(o.translatedName, o.type);
        });
    };
    // Create a new variable in current scope, return its translated name.
    ScopeStack.prototype.nextVariableTranslatedName = function (type) {
        return this.nextVariable(type).translatedName;
    };
    // Create a new variable in current scope, return its name.
    ScopeStack.prototype.nextVariableName = function (type) {
        return this.nextVariable(type).name;
    };
    // Create a new variable in current scope, return its info.
    ScopeStack.prototype.nextVariable = function (type) {
        return this._currentScope.nextVariable(type);
    };
    // Add a new variable.
    ScopeStack.prototype.addVariable = function (name, type, scope) {
        if (scope == "global") {
            this._globalScope.addVariable(name, type);
        }
        else {
            this._currentScope.addVariable(name, type);
        }
    };
    // Translate variable from current scope to its translated name.
    ScopeStack.prototype.translateVariableName = function (name) {
        return this.getVariable(name).translatedName;
    };
    // Get variable info.
    ScopeStack.prototype.getVariable = function (name) {
        return this._currentScope.getVariable(name);
    };
    return ScopeStack;
}());
exports.ScopeStack = ScopeStack;
function typeConversionAttempt(src, dest) {
    var info = Intrinsics.getTypeConversion(src.valueType, dest);
    if (info) {
        var rank = info.rank;
        return [{
                type: "function",
                valueType: dest,
                arguments: [src],
                functionName: info.internalName,
            }, rank];
    }
    else {
        return [null, null];
    }
}
var FunctionOverloadResolver = (function () {
    function FunctionOverloadResolver(name) {
        this._name = name;
        this._functions = [];
    }
    FunctionOverloadResolver.prototype.addFunction = function (func) {
        this._functions.push(func);
    };
    FunctionOverloadResolver.prototype.resolveArguments = function (args, kwargs) {
        var result = null;
        var resultRank = null;
        for (var _i = 0, _a = this._functions; _i < _a.length; _i++) {
            var func = _a[_i];
            var funcRank = 0;
            var matched = true;
            var argExpressions = [];
            var argIndexUsed = [];
            var kwargsUsed = [];
            for (var argIndex in func.arguments) {
                var arg = func.arguments[argIndex];
                var argExpression = args[argIndex] || kwargs[arg.name];
                if (args[argIndex] != null) {
                    argIndexUsed.push(argIndex);
                }
                else if (kwargs[arg.name]) {
                    kwargsUsed.push(arg.name);
                }
                if (argExpression != null) {
                    if (argExpression.valueType != arg.type) {
                        var _b = typeConversionAttempt(argExpression, arg.type), conversion = _b[0], rank = _b[1];
                        if (conversion) {
                            argExpressions.push(conversion);
                            funcRank += rank;
                        }
                        else {
                            matched = false;
                            break;
                        }
                    }
                    else {
                        argExpressions.push(argExpression);
                    }
                }
                else {
                    if (arg.default === null || arg.default === undefined) {
                        matched = false;
                        break;
                    }
                    else {
                        argExpressions.push({
                            type: "constant",
                            value: arg.default,
                            valueType: arg.type
                        });
                    }
                }
            }
            var isAllUsed = true;
            for (var argIndex in args) {
                if (argIndexUsed.indexOf(argIndex) < 0)
                    isAllUsed = false;
            }
            for (var argName in kwargs) {
                if (kwargsUsed.indexOf(argName) < 0)
                    isAllUsed = false;
            }
            if (matched && isAllUsed) {
                if (!result || funcRank < resultRank) {
                    result = [func, argExpressions];
                    resultRank = funcRank;
                }
            }
        }
        if (result) {
            return result;
        }
        else {
            var argspec = args.map(function (x) { return x.valueType; }).join(", ");
            throw new exceptions_1.CompileError("unable to resolve function '" + this._name + "' with arguments (" + argspec + ")");
        }
    };
    return FunctionOverloadResolver;
}());
exports.FunctionOverloadResolver = FunctionOverloadResolver;
var Compiler = (function () {
    function Compiler() {
        this._scope = new ScopeStack();
        // this._functions = new Dictionary<FunctionOverloadResolver>();
        // this._intrinsicFunctions = new Dictionary<FunctionOverloadResolver>();
        this._constants = new utils_1.Dictionary();
        this._moduleResolver = new ModuleResolver();
        this._statements = [];
        this._lastIndex = 1;
        this.prepareFieldTypeRegistry();
        this.prepareConstants();
    }
    Compiler.prototype.prepareFieldTypeRegistry = function () {
        this._fieldTypeRegistry = {};
        var r = this._fieldTypeRegistry;
        for (var _i = 0, _a = ["x", "y"]; _i < _a.length; _i++) {
            var f = _a[_i];
            r[("Vector2." + f)] = "float";
        }
        for (var _b = 0, _c = ["x", "y", "z", "r", "g", "b"]; _b < _c.length; _b++) {
            var f = _c[_b];
            r[("Vector3." + f)] = "float";
        }
        for (var _d = 0, _e = ["x", "y", "z", "w", "r", "g", "b", "a"]; _d < _e.length; _d++) {
            var f = _e[_d];
            r[("Vector4." + f)] = "float";
        }
        for (var _f = 0, _g = ["r", "g", "b", "a"]; _f < _g.length; _f++) {
            var f = _g[_f];
            r[("Color." + f)] = "float";
        }
    };
    Compiler.prototype.prepareConstants = function () {
        var _this = this;
        Intrinsics.forEachConstant(function (info) {
            _this._constants.set(info.name, info);
        });
    };
    Compiler.prototype.resolveFunction = function (name, args, kwargs) {
        var resolver = this._moduleResolver.getFunction(name);
        if (resolver) {
            return resolver.resolveArguments(args, kwargs);
        }
        else {
            throw new exceptions_1.CompileError("function '" + name + " is undefined.");
        }
    };
    Compiler.prototype.loadFile = function (file) {
        var _this = this;
        var _loop_1 = function(block) {
            if (block.type == "function") {
                var blockFunction = block;
                this_1._moduleResolver.addFunction(blockFunction.name, blockFunction);
            }
            if (block.type == "import") {
                var blockImport_1 = block;
                if (blockImport_1.functionNames != null) {
                    blockImport_1.functionNames.forEach(function (name) {
                        _this._moduleResolver.importFunction(Library.getModule(blockImport_1.moduleName), name);
                    });
                }
                else {
                    var module_1 = Library.getModule(blockImport_1.moduleName);
                    module_1.forEach(function (func, name) {
                        _this._moduleResolver.importFunction(module_1, name);
                    });
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = file.blocks; _i < _a.length; _i++) {
            var block = _a[_i];
            _loop_1(block);
        }
    };
    Compiler.prototype.getDefaultValueForType = function (type) {
        if (type == "float")
            return 0;
        if (type == "Vector2")
            return [0, 0];
        if (type == "Vector3")
            return [0, 0, 0];
        if (type == "Vector4")
            return [0, 0, 0, 0];
        if (type == "Color")
            return [0, 0, 0, 1];
        if (type == "Quaternion")
            return [0, 0, 0, 1];
        return 0;
    };
    Compiler.prototype.compileFunctionToMark = function (globals, block) {
        // Re-init state.
        this._scope.resetScope();
        this._lastIndex = 1;
        var markInput = {};
        var markOutput = {};
        var markVariables = {};
        // Setup input parameters.
        for (var _i = 0, globals_1 = globals; _i < globals_1.length; _i++) {
            var global = globals_1[_i];
            this._scope.addVariable(global.name, global.valueType, "global");
            markInput[global.name] = {
                type: global.valueType,
                default: global.default || this.getDefaultValueForType(global.valueType)
            };
        }
        for (var _a = 0, _b = block.arguments; _a < _b.length; _a++) {
            var arg = _b[_a];
            this._scope.addVariable(arg.name, arg.type, "local");
            markInput[arg.name] = {
                type: arg.type,
                default: arg.default || this.getDefaultValueForType(arg.type)
            };
        }
        // Flatten statements.
        this.compileStatements({
            type: "statements",
            statements: block.statements
        });
        // Figure out variables.
        this._scope.forEach(function (name, type) {
            if (!markInput[name]) {
                markVariables[name] = type;
            }
        });
        // Figure out outputs.
        var processStatementsForOutputs = function (statements) {
            statements.forEach(function (x) {
                if (x.type == "emit") {
                    var sEmit = x;
                    for (var attr in sEmit.attributes) {
                        if (markOutput.hasOwnProperty(attr)) {
                            if (markOutput[attr].type != sEmit.attributes[attr].valueType) {
                                throw new exceptions_1.CompileError("output variable '" + attr + " has conflicting types.");
                            }
                        }
                        else {
                            markOutput[attr] = { type: sEmit.attributes[attr].valueType };
                        }
                    }
                }
                if (x.type == "condition") {
                    var sCondition = x;
                    processStatementsForOutputs(sCondition.trueStatements);
                    processStatementsForOutputs(sCondition.falseStatements);
                }
                if (x.type == "for") {
                    var sForLoop = x;
                    processStatementsForOutputs(sForLoop.statements);
                }
            });
        };
        processStatementsForOutputs(this._statements);
        return {
            input: markInput,
            output: markOutput,
            variables: markVariables,
            statements: this._statements
        };
    };
    Compiler.prototype.addStatement = function (statement) {
        this._statements.push(statement);
    };
    Compiler.prototype.addStatements = function (statements) {
        this._statements = this._statements.concat(statements);
    };
    Compiler.prototype.captureStatements = function (callback) {
        var currentStatements = this._statements;
        this._statements = [];
        callback();
        var result = this._statements;
        this._statements = currentStatements;
        return result;
    };
    Compiler.prototype.compileExpression = function (expression) {
        switch (expression.type) {
            case "value": {
                var expr = expression;
                return {
                    type: "constant",
                    value: expr.value,
                    valueType: expr.valueType
                };
            }
            case "variable": {
                var expr = expression;
                if (this._constants.has(expr.name)) {
                    var cinfo = this._constants.get(expr.name);
                    return {
                        type: "constant",
                        value: cinfo.value,
                        valueType: cinfo.type
                    };
                }
                else {
                    return {
                        type: "variable",
                        variableName: this._scope.translateVariableName(expr.name),
                        valueType: this._scope.getVariable(expr.name).type
                    };
                }
            }
            case "field": {
                var expr = expression;
                var valueExpr = this.compileExpression(expr.value);
                return {
                    type: "field",
                    fieldName: expr.fieldName,
                    value: valueExpr,
                    valueType: this._fieldTypeRegistry[valueExpr.valueType + "." + expr.fieldName]
                };
            }
            case "function": {
                var expr = expression;
                var args = [];
                var kwargs = {};
                for (var _i = 0, _a = expr.args.args; _i < _a.length; _i++) {
                    var arg = _a[_i];
                    args.push(this.compileExpression(arg));
                }
                for (var key in expr.args.kwargs) {
                    var e = expr.args.kwargs[key];
                    kwargs[key] = this.compileExpression(expr.args.kwargs[key]);
                }
                var _b = this.resolveFunction(expr.name, args, kwargs), func = _b[0], argExpressions = _b[1];
                var returnValueExpression = null;
                if (!func.statements) {
                    returnValueExpression = {
                        type: "function",
                        functionName: func.name,
                        arguments: argExpressions,
                        valueType: func.returnType
                    };
                }
                else {
                    var argMap = new utils_1.Dictionary();
                    for (var argIndex in func.arguments) {
                        var arg = func.arguments[argIndex];
                        var mapped = this._scope.nextVariableName(arg.type);
                        argMap.set(arg.name, mapped);
                        this.addStatement({
                            type: "assign",
                            variableName: this._scope.translateVariableName(mapped),
                            expression: argExpressions[argIndex]
                        });
                    }
                    this._scope.pushScope(argMap);
                    this._moduleResolver.enterFunctionImplementation(expr.name);
                    for (var _c = 0, _d = func.statements; _c < _d.length; _c++) {
                        var statement = _d[_c];
                        if (statement.type == "return") {
                            var statement_return = statement;
                            returnValueExpression = this.compileExpression(statement_return.value);
                            break;
                        }
                        else {
                            this.compileStatement(statement);
                        }
                    }
                    this._moduleResolver.leaveFunctionImplementation(expr.name);
                    this._scope.popScope();
                }
                return returnValueExpression;
            }
        }
        return null;
    };
    Compiler.prototype.compileStandaloneExpression = function (expression, variables) {
        switch (expression.type) {
            case "value": {
                var expr = expression;
                return {
                    type: "constant",
                    value: expr.value,
                    valueType: expr.valueType
                };
            }
            case "variable": {
                var expr = expression;
                if (variables.has(expr.name)) {
                    return variables.get(expr.name);
                }
                else {
                    if (this._constants.has(expr.name)) {
                        var cinfo = this._constants.get(expr.name);
                        return {
                            type: "constant",
                            value: cinfo.value,
                            valueType: cinfo.type
                        };
                    }
                    else {
                        throw new exceptions_1.CompileError("variable " + expr.name + " is undefined");
                    }
                }
            }
            case "field": {
                var expr = expression;
                var valueExpr = this.compileStandaloneExpression(expr.value, variables);
                return {
                    type: "field",
                    fieldName: expr.fieldName,
                    value: valueExpr,
                    valueType: this._fieldTypeRegistry[valueExpr.valueType + "." + expr.fieldName]
                };
            }
            case "function": {
                var expr = expression;
                var args = [];
                var kwargs = {};
                for (var _i = 0, _a = expr.args.args; _i < _a.length; _i++) {
                    var arg = _a[_i];
                    args.push(this.compileStandaloneExpression(arg, variables));
                }
                for (var key in expr.args.kwargs) {
                    var e = expr.args.kwargs[key];
                    kwargs[key] = this.compileStandaloneExpression(expr.args.kwargs[key], variables);
                }
                var _b = this.resolveFunction(expr.name, args, kwargs), func = _b[0], argExpressions = _b[1];
                return {
                    type: "function",
                    functionName: func.name,
                    arguments: argExpressions,
                    valueType: func.returnType
                };
            }
        }
        return null;
    };
    Compiler.prototype.compileStatements = function (statements) {
        this._scope.pushScope();
        for (var _i = 0, _a = statements.statements; _i < _a.length; _i++) {
            var s = _a[_i];
            this.compileStatement(s);
        }
        this._scope.popScope();
    };
    Compiler.prototype.compileStatement = function (statement) {
        var _this = this;
        switch (statement.type) {
            case "declare":
                {
                    var s = statement;
                    if (s.initial) {
                        var ve = this.compileExpression(s.initial);
                        var variableType = s.variableType;
                        if (variableType == "auto")
                            variableType = ve.valueType;
                        this._scope.addVariable(s.variableName, variableType, "local");
                        if (ve.valueType != variableType) {
                            var veType = ve.valueType;
                            ve = typeConversionAttempt(ve, this._scope.getVariable(s.variableName).type)[0];
                            if (ve === null) {
                                throw new exceptions_1.CompileError("cannot convert type '" + veType + "' to '" + variableType + "'.");
                            }
                        }
                        this.addStatement({
                            type: "assign",
                            variableName: this._scope.translateVariableName(s.variableName),
                            expression: ve
                        });
                    }
                    else {
                        this._scope.addVariable(s.variableName, s.variableType, "local");
                    }
                }
                break;
            case "expression":
                {
                    var s = statement;
                    this.compileExpression(s.expression);
                }
                break;
            case "assign":
                {
                    var s = statement;
                    var ve = this.compileExpression(s.expression);
                    var targetType = this._scope.getVariable(s.variableName).type;
                    if (ve.valueType != targetType) {
                        var veType = ve.valueType;
                        ve = typeConversionAttempt(ve, this._scope.getVariable(s.variableName).type)[0];
                        if (ve === null) {
                            throw new exceptions_1.CompileError("cannot convert type '" + veType + " to '" + targetType + "'.");
                        }
                    }
                    this.addStatement({
                        type: "assign",
                        variableName: this._scope.translateVariableName(s.variableName),
                        expression: ve
                    });
                }
                break;
            case "emit":
                {
                    var s = statement;
                    s.vertices.forEach(function (v) {
                        var attrs = {};
                        for (var argName in v) {
                            var expr = v[argName];
                            attrs[argName] = _this.compileExpression(expr);
                        }
                        _this.addStatement({
                            type: "emit",
                            attributes: attrs
                        });
                    });
                }
                break;
            case "statements":
                {
                    var s = statement;
                    this.compileStatements(s);
                }
                break;
            case "for":
                {
                    var s_1 = statement;
                    this._scope.pushScope();
                    // Declare the loop variable
                    this._scope.addVariable(s_1.variableName, "int", "local");
                    var loopVariable = this._scope.translateVariableName(s_1.variableName);
                    // Compile for statements
                    var forStatement = {
                        type: "for",
                        variableName: loopVariable,
                        rangeMin: s_1.start,
                        rangeMax: s_1.end,
                        statements: this.captureStatements(function () { return _this.compileStatement(s_1.statement); })
                    };
                    this.addStatement(forStatement);
                    this._scope.popScope();
                }
                break;
            case "if":
                {
                    var s_2 = statement;
                    // Function to compile the i-th condition in the if-elseif-else syntax.
                    var compileIthCondition_1 = function (i) {
                        if (i < s_2.conditions.length) {
                            var statements = [];
                            _this._scope.pushScope();
                            var ve = _this.compileExpression(s_2.conditions[i].condition);
                            var cond = {
                                type: "condition",
                                condition: ve,
                                trueStatements: _this.captureStatements(function () { return _this.compileStatement(s_2.conditions[i].statement); }),
                                falseStatements: _this.captureStatements(function () { return compileIthCondition_1(i + 1); })
                            };
                            _this.addStatement(cond);
                            _this._scope.popScope();
                        }
                        else {
                            if (s_2.else) {
                                _this.compileStatement(s_2.else);
                            }
                        }
                    };
                    compileIthCondition_1(0);
                }
                break;
            case "return": {
                throw new exceptions_1.CompileError("unexpected return statement");
            }
        }
    };
    return Compiler;
}());
exports.Compiler = Compiler;
function compileTree(file) {
    var spec = {};
    var globals = file.blocks.filter(function (x) { return x.type == "global"; });
    for (var _i = 0, _a = file.blocks; _i < _a.length; _i++) {
        var block = _a[_i];
        if (block.type == "function") {
            var blockFunction = block;
            if (blockFunction.isMark || blockFunction.isShader) {
                var scope = new Compiler();
                scope.loadFile(file);
                var mark = scope.compileFunctionToMark(globals, blockFunction);
                spec[blockFunction.name] = mark;
            }
        }
    }
    return spec;
}
exports.compileTree = compileTree;
var standaloneCompiler = new Compiler();
function compileExpression(expr, variables) {
    return standaloneCompiler.compileStandaloneExpression(expr, variables);
}
exports.compileExpression = compileExpression;
function compileString(content) {
    var file = parser_1.parseFile(content);
    return compileTree(file);
}
exports.compileString = compileString;

},{"../exceptions":11,"../intrinsics/intrinsics":12,"../library/library":13,"../utils/utils":26,"./parser":8}],7:[function(require,module,exports){
// Declare mark code with Javascript calls.
"use strict";
var utils_1 = require("../utils/utils");
var compiler_1 = require("./compiler");
var CustomMarkItem = (function () {
    function CustomMarkItem(name) {
        this._name = name;
        this._attrs = new utils_1.Dictionary();
    }
    CustomMarkItem.prototype.attr = function (name, expression) {
        this._attrs.set(name, expression);
        return this;
    };
    CustomMarkItem.prototype.generateCode = function () {
        var attrDefs = [];
        this._attrs.forEach(function (value, key) {
            attrDefs.push(key + " = " + value);
        });
        return this._name + "(" + attrDefs.join(", ") + ")";
    };
    return CustomMarkItem;
}());
exports.CustomMarkItem = CustomMarkItem;
var CustomMark = (function () {
    function CustomMark() {
        this._imports = [];
        this._inputs = [];
        this._variables = [];
        this._items = [];
    }
    CustomMark.prototype.input = function (name, type, initial) {
        this._inputs.push([name, type, initial]);
        return this;
    };
    CustomMark.prototype.variable = function (name, expression) {
        this._variables.push([name, expression]);
        return this;
    };
    CustomMark.prototype.add = function (name) {
        var _a = name.split("."), libraryName = _a[0], markName = _a[1];
        var alreadyImported = false;
        for (var _i = 0, _b = this._imports; _i < _b.length; _i++) {
            var _c = _b[_i], lib = _c[0], mark = _c[1];
            if (lib == libraryName && mark == markName) {
                alreadyImported = true;
            }
        }
        if (!alreadyImported) {
            this._imports.push([libraryName, markName]);
        }
        var item = new CustomMarkItem(markName);
        this._items.push(item);
        return item;
    };
    CustomMark.prototype.generateCode = function (markName) {
        var lines = [];
        for (var _i = 0, _a = this._imports; _i < _a.length; _i++) {
            var _b = _a[_i], library = _b[0], name_1 = _b[1];
            lines.push("import { " + name_1 + " } from " + library + ";");
        }
        // Input attributes:
        var inputDefs = [];
        for (var _c = 0, _d = this._inputs; _c < _d.length; _c++) {
            var _e = _d[_c], name_2 = _e[0], type = _e[1], initial = _e[2];
            if (initial == null) {
                inputDefs.push(name_2 + ": " + type);
            }
            else {
                inputDefs.push(name_2 + ": " + type + " = " + initial);
            }
        }
        lines.push("mark " + markName + "(");
        lines.push("    " + inputDefs.join(", "));
        lines.push(") {");
        // Variables
        for (var _f = 0, _g = this._variables; _f < _g.length; _f++) {
            var _h = _g[_f], name_3 = _h[0], expression = _h[1];
            lines.push("    let " + name_3 + " = " + expression + ";");
        }
        for (var _j = 0, _k = this._items; _j < _k.length; _j++) {
            var item = _k[_j];
            lines.push("    " + item.generateCode() + ";");
        }
        lines.push("}");
        return lines.join("\n");
    };
    CustomMark.prototype.compile = function () {
        var code = this.generateCode("Mark");
        var specs = compiler_1.compileString(code);
        return specs["Mark"];
    };
    return CustomMark;
}());
exports.CustomMark = CustomMark;

},{"../utils/utils":26,"./compiler":6}],8:[function(require,module,exports){
"use strict";
var exceptions_1 = require("../exceptions");
var parser_pegjs = require("./parser_pegjs");
function stripComments(content) {
    content = content.replace(/\/\/[^\n]*\n/g, "\n");
    content = content.replace(/\/\/[^\n]*$/g, "");
    return content;
}
function parseFile(content) {
    content = stripComments(content);
    var result = null;
    try {
        result = parser_pegjs.parse(content, { startRule: "FileEntry" });
    }
    catch (e) {
        if (e.location) {
            throw new exceptions_1.ParseError(e.message, e.location.start, e.location.end);
        }
        else {
            throw new exceptions_1.ParseError(e.message);
        }
    }
    return result;
}
exports.parseFile = parseFile;
function parseExpression(content) {
    var result = null;
    try {
        result = parser_pegjs.parse(content, { startRule: "ExpressionEntry" });
    }
    catch (e) {
        if (e.location) {
            throw new exceptions_1.ParseError(e.message, e.location.start, e.location.end);
        }
        else {
            throw new exceptions_1.ParseError(e.message);
        }
    }
    return result;
}
exports.parseExpression = parseExpression;

},{"../exceptions":11,"./parser_pegjs":9}],9:[function(require,module,exports){
module.exports = (function() {
  "use strict";

  /*
   * Generated by PEG.js 0.9.0.
   *
   * http://pegjs.org/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function peg$SyntaxError(message, expected, found, location) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.location = location;
    this.name     = "SyntaxError";

    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, peg$SyntaxError);
    }
  }

  peg$subclass(peg$SyntaxError, Error);

  function peg$parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},
        parser  = this,

        peg$FAILED = {},

        peg$startRuleFunctions = { FileEntry: peg$parseFileEntry, ExpressionEntry: peg$parseExpressionEntry },
        peg$startRuleFunction  = peg$parseFileEntry,

        peg$c0 = function(blocks) { return { blocks: blocks.map(function(d) { return d[0]; }) }; },
        peg$c1 = function(expr) { return expr; },
        peg$c2 = "function",
        peg$c3 = { type: "literal", value: "function", description: "\"function\"" },
        peg$c4 = "mark",
        peg$c5 = { type: "literal", value: "mark", description: "\"mark\"" },
        peg$c6 = "shader",
        peg$c7 = { type: "literal", value: "shader", description: "\"shader\"" },
        peg$c8 = "(",
        peg$c9 = { type: "literal", value: "(", description: "\"(\"" },
        peg$c10 = ")",
        peg$c11 = { type: "literal", value: ")", description: "\")\"" },
        peg$c12 = ":",
        peg$c13 = { type: "literal", value: ":", description: "\":\"" },
        peg$c14 = "{",
        peg$c15 = { type: "literal", value: "{", description: "\"{\"" },
        peg$c16 = "}",
        peg$c17 = { type: "literal", value: "}", description: "\"}\"" },
        peg$c18 = function(type, name, args, ret, statements) {
              return {
                type: "function",
                isMark: flatten(type) == "mark",
                isShader: flatten(type) == "shader",
                name: name,
                returnType: ret ? ret[3] : "void",
                arguments: args,
                statements: statements
              };
            },
        peg$c19 = "let",
        peg$c20 = { type: "literal", value: "let", description: "\"let\"" },
        peg$c21 = "=",
        peg$c22 = { type: "literal", value: "=", description: "\"=\"" },
        peg$c23 = ";",
        peg$c24 = { type: "literal", value: ";", description: "\";\"" },
        peg$c25 = function(name, type, value) {
              return {
                type: "global",
                name: name,
                valueType: type ? type[3] : "auto",
                default: value ? value[3] : undefined
              };
            },
        peg$c26 = "import",
        peg$c27 = { type: "literal", value: "import", description: "\"import\"" },
        peg$c28 = "*",
        peg$c29 = { type: "literal", value: "*", description: "\"*\"" },
        peg$c30 = "from",
        peg$c31 = { type: "literal", value: "from", description: "\"from\"" },
        peg$c32 = function(moduleName) { return { type: "import", moduleName: moduleName, functionNames: null }; },
        peg$c33 = ",",
        peg$c34 = { type: "literal", value: ",", description: "\",\"" },
        peg$c35 = function(name, others, moduleName) { return { type: "import", moduleName: moduleName, functionNames: resolveList(name, others, 3) }; },
        peg$c36 = function(first, others) { return resolveList(first, others, 3); },
        peg$c37 = function() { return []; },
        peg$c38 = function(name, type, value) { return { type: type, name: name, default: value } },
        peg$c39 = function(name, type) { return { type: type, name: name } },
        peg$c40 = function(first, others) { return resolveList(first, others, 1); },
        peg$c41 = function(s) { return s; },
        peg$c42 = function(statements) { return { type: "statements", statements: statements }; },
        peg$c43 = "return",
        peg$c44 = { type: "literal", value: "return", description: "\"return\"" },
        peg$c45 = function(expr) { return { type: "return", value: expr }; },
        peg$c46 = "emit",
        peg$c47 = { type: "literal", value: "emit", description: "\"emit\"" },
        peg$c48 = "[",
        peg$c49 = { type: "literal", value: "[", description: "\"[\"" },
        peg$c50 = "]",
        peg$c51 = { type: "literal", value: "]", description: "\"]\"" },
        peg$c52 = function(vertices) { return { type: "emit", vertices: vertices }; },
        peg$c53 = function(args) { return { type: "emit", vertices: [ args ] }; },
        peg$c54 = function(name, expr) { return { name: name, value: expr }; },
        peg$c55 = function(first, others) { return resolveArgumentList(resolveList(first, others, 3)).kwargs; },
        peg$c56 = function() { return {}; },
        peg$c57 = function(first, others) { return resolveList(first, others, 4); },
        peg$c58 = function(expr) { return { type: "expression", expression: expr }; },
        peg$c59 = function(name, type, initial) {
              return {
                type: "declare",
                variableType: type ? type[3] : "auto",
                variableName: name,
                initial: initial ? initial[3] : undefined
              };
            },
        peg$c60 = function(variable, value) { return { type: "assign", variableName: variable, expression: value }; },
        peg$c61 = "for",
        peg$c62 = { type: "literal", value: "for", description: "\"for\"" },
        peg$c63 = "in",
        peg$c64 = { type: "literal", value: "in", description: "\"in\"" },
        peg$c65 = "..",
        peg$c66 = { type: "literal", value: "..", description: "\"..\"" },
        peg$c67 = function(variable, start, end, statement) { return { type: "for", variableName: variable, statement: statement, start: start, end: end }; },
        peg$c68 = "if",
        peg$c69 = { type: "literal", value: "if", description: "\"if\"" },
        peg$c70 = "else",
        peg$c71 = { type: "literal", value: "else", description: "\"else\"" },
        peg$c72 = function(condition, statement, elseifs, lastelse) {
              var conditions = [ { condition: condition, statement: statement } ].concat(elseifs.map(function(x) {
                return { condition: x[7], statement: x[11] };
              }));
              return {type: "if", conditions: conditions, else: lastelse ? lastelse[3] : null };
            },
        peg$c73 = "&&",
        peg$c74 = { type: "literal", value: "&&", description: "\"&&\"" },
        peg$c75 = "||",
        peg$c76 = { type: "literal", value: "||", description: "\"||\"" },
        peg$c77 = ">=",
        peg$c78 = { type: "literal", value: ">=", description: "\">=\"" },
        peg$c79 = ">",
        peg$c80 = { type: "literal", value: ">", description: "\">\"" },
        peg$c81 = "<=",
        peg$c82 = { type: "literal", value: "<=", description: "\"<=\"" },
        peg$c83 = "<",
        peg$c84 = { type: "literal", value: "<", description: "\"<\"" },
        peg$c85 = "==",
        peg$c86 = { type: "literal", value: "==", description: "\"==\"" },
        peg$c87 = "!=",
        peg$c88 = { type: "literal", value: "!=", description: "\"!=\"" },
        peg$c89 = "+",
        peg$c90 = { type: "literal", value: "+", description: "\"+\"" },
        peg$c91 = "-",
        peg$c92 = { type: "literal", value: "-", description: "\"-\"" },
        peg$c93 = "/",
        peg$c94 = { type: "literal", value: "/", description: "\"/\"" },
        peg$c95 = "%",
        peg$c96 = { type: "literal", value: "%", description: "\"%\"" },
        peg$c97 = "not",
        peg$c98 = { type: "literal", value: "not", description: "\"not\"" },
        peg$c99 = function(expr) { return makeOperatorFunction({ type: "operator", operator: "!", args: [ item ] }); },
        peg$c100 = function(first, others) { return resolveExpressionBinaryOp(first, others); },
        peg$c101 = function(item) { return makeOperatorFunction({ type: "operator", operator: "-", args: [ item ] }); },
        peg$c102 = function(name) { return { type: "variable", name: name }; },
        peg$c103 = ".",
        peg$c104 = { type: "literal", value: ".", description: "\".\"" },
        peg$c105 = function(expr, field) { return { type: "field", value: expr, fieldName: field }; },
        peg$c106 = function(name, args) { return { type: "function", name: name, args: resolveArgumentList(args) }; },
        peg$c107 = function(expr) { return { value: expr }; },
        peg$c108 = function(value) { return { type: "value", valueType: "float", value: value }; },
        peg$c109 = function(value) { return { type: "value", valueType: "bool", value: value }; },
        peg$c110 = function(value) { return { type: "value", valueType: "int", value: value }; },
        peg$c111 = function(first, others) {
              var list = resolveList(first, others, 3);
              return { type: "value", valueType: "Vector" + list.length, value: list };
            },
        peg$c112 = /^[+\-]/,
        peg$c113 = { type: "class", value: "[+-]", description: "[+-]" },
        peg$c114 = /^[0-9]/,
        peg$c115 = { type: "class", value: "[0-9]", description: "[0-9]" },
        peg$c116 = function(str) { return parseFloat(flatten(str)); },
        peg$c117 = /^[eE]/,
        peg$c118 = { type: "class", value: "[eE]", description: "[eE]" },
        peg$c119 = "true",
        peg$c120 = { type: "literal", value: "true", description: "\"true\"" },
        peg$c121 = function() { return true; },
        peg$c122 = "false",
        peg$c123 = { type: "literal", value: "false", description: "\"false\"" },
        peg$c124 = function() { return false; },
        peg$c125 = /^[a-zA-Z_]/,
        peg$c126 = { type: "class", value: "[a-zA-Z_]", description: "[a-zA-Z_]" },
        peg$c127 = /^[a-zA-Z0-9_]/,
        peg$c128 = { type: "class", value: "[a-zA-Z0-9_]", description: "[a-zA-Z0-9_]" },
        peg$c129 = function(name) { return flatten(name); },
        peg$c130 = /^[ \t\n]/,
        peg$c131 = { type: "class", value: "[ \\t\\n]", description: "[ \\t\\n]" },
        peg$c132 = function() { return ' '; },

        peg$currPos          = 0,
        peg$savedPos         = 0,
        peg$posDetailsCache  = [{ line: 1, column: 1, seenCR: false }],
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$savedPos, peg$currPos);
    }

    function location() {
      return peg$computeLocation(peg$savedPos, peg$currPos);
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        input.substring(peg$savedPos, peg$currPos),
        peg$computeLocation(peg$savedPos, peg$currPos)
      );
    }

    function error(message) {
      throw peg$buildException(
        message,
        null,
        input.substring(peg$savedPos, peg$currPos),
        peg$computeLocation(peg$savedPos, peg$currPos)
      );
    }

    function peg$computePosDetails(pos) {
      var details = peg$posDetailsCache[pos],
          p, ch;

      if (details) {
        return details;
      } else {
        p = pos - 1;
        while (!peg$posDetailsCache[p]) {
          p--;
        }

        details = peg$posDetailsCache[p];
        details = {
          line:   details.line,
          column: details.column,
          seenCR: details.seenCR
        };

        while (p < pos) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }

          p++;
        }

        peg$posDetailsCache[pos] = details;
        return details;
      }
    }

    function peg$computeLocation(startPos, endPos) {
      var startPosDetails = peg$computePosDetails(startPos),
          endPosDetails   = peg$computePosDetails(endPos);

      return {
        start: {
          offset: startPos,
          line:   startPosDetails.line,
          column: startPosDetails.column
        },
        end: {
          offset: endPos,
          line:   endPosDetails.line,
          column: endPosDetails.column
        }
      };
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, found, location) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0100-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1000-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new peg$SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        location
      );
    }

    function peg$parseFileEntry() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseFileBlock();
        if (s4 !== peg$FAILED) {
          s5 = peg$parse_();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseFileBlock();
          if (s4 !== peg$FAILED) {
            s5 = peg$parse_();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c0(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseExpressionEntry() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseExpressionLevel1();
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c1(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseFileBlock() {
      var s0;

      s0 = peg$parseFunction();
      if (s0 === peg$FAILED) {
        s0 = peg$parseGlobalVariable();
        if (s0 === peg$FAILED) {
          s0 = peg$parseImportStatement();
        }
      }

      return s0;
    }

    function peg$parseFunction() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 8) === peg$c2) {
        s1 = peg$c2;
        peg$currPos += 8;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c3); }
      }
      if (s1 === peg$FAILED) {
        if (input.substr(peg$currPos, 4) === peg$c4) {
          s1 = peg$c4;
          peg$currPos += 4;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c5); }
        }
        if (s1 === peg$FAILED) {
          if (input.substr(peg$currPos, 6) === peg$c6) {
            s1 = peg$c6;
            peg$currPos += 6;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c7); }
          }
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse__();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseName();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 40) {
                s5 = peg$c8;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c9); }
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parseFunctionArgumentList();
                if (s6 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 41) {
                    s7 = peg$c10;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c11); }
                  }
                  if (s7 !== peg$FAILED) {
                    s8 = peg$currPos;
                    s9 = peg$parse_();
                    if (s9 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 58) {
                        s10 = peg$c12;
                        peg$currPos++;
                      } else {
                        s10 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c13); }
                      }
                      if (s10 !== peg$FAILED) {
                        s11 = peg$parse_();
                        if (s11 !== peg$FAILED) {
                          s12 = peg$parseName();
                          if (s12 !== peg$FAILED) {
                            s9 = [s9, s10, s11, s12];
                            s8 = s9;
                          } else {
                            peg$currPos = s8;
                            s8 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s8;
                          s8 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s8;
                        s8 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s8;
                      s8 = peg$FAILED;
                    }
                    if (s8 === peg$FAILED) {
                      s8 = null;
                    }
                    if (s8 !== peg$FAILED) {
                      s9 = peg$parse_();
                      if (s9 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 123) {
                          s10 = peg$c14;
                          peg$currPos++;
                        } else {
                          s10 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c15); }
                        }
                        if (s10 !== peg$FAILED) {
                          s11 = peg$parse_();
                          if (s11 !== peg$FAILED) {
                            s12 = peg$parseStatements();
                            if (s12 !== peg$FAILED) {
                              s13 = peg$parse_();
                              if (s13 !== peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 125) {
                                  s14 = peg$c16;
                                  peg$currPos++;
                                } else {
                                  s14 = peg$FAILED;
                                  if (peg$silentFails === 0) { peg$fail(peg$c17); }
                                }
                                if (s14 !== peg$FAILED) {
                                  peg$savedPos = s0;
                                  s1 = peg$c18(s1, s3, s6, s8, s12);
                                  s0 = s1;
                                } else {
                                  peg$currPos = s0;
                                  s0 = peg$FAILED;
                                }
                              } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseGlobalVariable() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c19) {
        s1 = peg$c19;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c20); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse__();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseName();
          if (s3 !== peg$FAILED) {
            s4 = peg$currPos;
            s5 = peg$parse_();
            if (s5 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 58) {
                s6 = peg$c12;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c13); }
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parse_();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseName();
                  if (s8 !== peg$FAILED) {
                    s5 = [s5, s6, s7, s8];
                    s4 = s5;
                  } else {
                    peg$currPos = s4;
                    s4 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
            if (s4 === peg$FAILED) {
              s4 = null;
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$currPos;
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 61) {
                  s7 = peg$c21;
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c22); }
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parse_();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseValue();
                    if (s9 !== peg$FAILED) {
                      s6 = [s6, s7, s8, s9];
                      s5 = s6;
                    } else {
                      peg$currPos = s5;
                      s5 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s5;
                    s5 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s5;
                  s5 = peg$FAILED;
                }
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
              if (s5 === peg$FAILED) {
                s5 = null;
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();
                if (s6 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 59) {
                    s7 = peg$c23;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c24); }
                  }
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c25(s3, s4, s5);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseImportStatement() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c26) {
        s1 = peg$c26;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c27); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse__();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 42) {
            s3 = peg$c28;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c29); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse__();
            if (s4 !== peg$FAILED) {
              if (input.substr(peg$currPos, 4) === peg$c30) {
                s5 = peg$c30;
                peg$currPos += 4;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c31); }
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parse__();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseName();
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parse_();
                    if (s8 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 59) {
                        s9 = peg$c23;
                        peg$currPos++;
                      } else {
                        s9 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c24); }
                      }
                      if (s9 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c32(s7);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 6) === peg$c26) {
          s1 = peg$c26;
          peg$currPos += 6;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c27); }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parse_();
          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 123) {
              s3 = peg$c14;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c15); }
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parse_();
              if (s4 !== peg$FAILED) {
                s5 = peg$parseName();
                if (s5 !== peg$FAILED) {
                  s6 = [];
                  s7 = peg$currPos;
                  s8 = peg$parse_();
                  if (s8 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 44) {
                      s9 = peg$c33;
                      peg$currPos++;
                    } else {
                      s9 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c34); }
                    }
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parse_();
                      if (s10 !== peg$FAILED) {
                        s11 = peg$parseName();
                        if (s11 !== peg$FAILED) {
                          s8 = [s8, s9, s10, s11];
                          s7 = s8;
                        } else {
                          peg$currPos = s7;
                          s7 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s7;
                        s7 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s7;
                      s7 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s7;
                    s7 = peg$FAILED;
                  }
                  while (s7 !== peg$FAILED) {
                    s6.push(s7);
                    s7 = peg$currPos;
                    s8 = peg$parse_();
                    if (s8 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 44) {
                        s9 = peg$c33;
                        peg$currPos++;
                      } else {
                        s9 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c34); }
                      }
                      if (s9 !== peg$FAILED) {
                        s10 = peg$parse_();
                        if (s10 !== peg$FAILED) {
                          s11 = peg$parseName();
                          if (s11 !== peg$FAILED) {
                            s8 = [s8, s9, s10, s11];
                            s7 = s8;
                          } else {
                            peg$currPos = s7;
                            s7 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s7;
                          s7 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s7;
                        s7 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s7;
                      s7 = peg$FAILED;
                    }
                  }
                  if (s6 !== peg$FAILED) {
                    s7 = peg$parse_();
                    if (s7 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 125) {
                        s8 = peg$c16;
                        peg$currPos++;
                      } else {
                        s8 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c17); }
                      }
                      if (s8 !== peg$FAILED) {
                        s9 = peg$parse_();
                        if (s9 !== peg$FAILED) {
                          if (input.substr(peg$currPos, 4) === peg$c30) {
                            s10 = peg$c30;
                            peg$currPos += 4;
                          } else {
                            s10 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c31); }
                          }
                          if (s10 !== peg$FAILED) {
                            s11 = peg$parse__();
                            if (s11 !== peg$FAILED) {
                              s12 = peg$parseName();
                              if (s12 !== peg$FAILED) {
                                s13 = peg$parse_();
                                if (s13 !== peg$FAILED) {
                                  if (input.charCodeAt(peg$currPos) === 59) {
                                    s14 = peg$c23;
                                    peg$currPos++;
                                  } else {
                                    s14 = peg$FAILED;
                                    if (peg$silentFails === 0) { peg$fail(peg$c24); }
                                  }
                                  if (s14 !== peg$FAILED) {
                                    peg$savedPos = s0;
                                    s1 = peg$c35(s5, s6, s12);
                                    s0 = s1;
                                  } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                  }
                                } else {
                                  peg$currPos = s0;
                                  s0 = peg$FAILED;
                                }
                              } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      return s0;
    }

    function peg$parseFunctionArgumentList() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseFunctionArgument();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$currPos;
          s5 = peg$parse_();
          if (s5 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s6 = peg$c33;
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c34); }
            }
            if (s6 !== peg$FAILED) {
              s7 = peg$parse_();
              if (s7 !== peg$FAILED) {
                s8 = peg$parseFunctionArgument();
                if (s8 !== peg$FAILED) {
                  s5 = [s5, s6, s7, s8];
                  s4 = s5;
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$currPos;
            s5 = peg$parse_();
            if (s5 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 44) {
                s6 = peg$c33;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c34); }
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parse_();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseFunctionArgument();
                  if (s8 !== peg$FAILED) {
                    s5 = [s5, s6, s7, s8];
                    s4 = s5;
                  } else {
                    peg$currPos = s4;
                    s4 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c36(s2, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parse_();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c37();
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parseFunctionArgument() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

      s0 = peg$currPos;
      s1 = peg$parseName();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 58) {
            s3 = peg$c12;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c13); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseName();
              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();
                if (s6 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 61) {
                    s7 = peg$c21;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c22); }
                  }
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parse_();
                    if (s8 !== peg$FAILED) {
                      s9 = peg$parseValue();
                      if (s9 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c38(s1, s5, s9);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseName();
        if (s1 !== peg$FAILED) {
          s2 = peg$parse_();
          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 58) {
              s3 = peg$c12;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c13); }
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parse_();
              if (s4 !== peg$FAILED) {
                s5 = peg$parseName();
                if (s5 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c39(s1, s5);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      return s0;
    }

    function peg$parseStatements() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseStatement();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parse_();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseStatement();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseStatement();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c40(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parse_();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c37();
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parseStatement() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseReturnStatement();
      if (s1 === peg$FAILED) {
        s1 = peg$parseEmitStatement();
        if (s1 === peg$FAILED) {
          s1 = peg$parseVariableDeclaration();
          if (s1 === peg$FAILED) {
            s1 = peg$parseVariableAssignment();
            if (s1 === peg$FAILED) {
              s1 = peg$parseExpressionStatement();
            }
          }
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 59) {
            s3 = peg$c23;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c24); }
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c41(s1);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseForLoop();
        if (s0 === peg$FAILED) {
          s0 = peg$parseIfStatement();
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 123) {
              s1 = peg$c14;
              peg$currPos++;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c15); }
            }
            if (s1 !== peg$FAILED) {
              s2 = peg$parse_();
              if (s2 !== peg$FAILED) {
                s3 = peg$parseStatements();
                if (s3 !== peg$FAILED) {
                  s4 = peg$parse_();
                  if (s4 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 125) {
                      s5 = peg$c16;
                      peg$currPos++;
                    } else {
                      s5 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c17); }
                    }
                    if (s5 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c42(s3);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          }
        }
      }

      return s0;
    }

    function peg$parseReturnStatement() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c43) {
        s1 = peg$c43;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c44); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse__();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseExpressionLevel1();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c45(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseEmitStatement() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c46) {
        s1 = peg$c46;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c47); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 91) {
            s3 = peg$c48;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c49); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseEmitVertexList();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 93) {
                s5 = peg$c50;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c51); }
              }
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c52(s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 4) === peg$c46) {
          s1 = peg$c46;
          peg$currPos += 4;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c47); }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parse_();
          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 123) {
              s3 = peg$c14;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c15); }
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parseEmitArgumentList();
              if (s4 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 125) {
                  s5 = peg$c16;
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c17); }
                }
                if (s5 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c53(s4);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      return s0;
    }

    function peg$parseEmitArgument() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseName();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 58) {
            s3 = peg$c12;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c13); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseExpressionLevel1();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c54(s1, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseEmitArgumentList() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseEmitArgument();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$currPos;
          s5 = peg$parse_();
          if (s5 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s6 = peg$c33;
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c34); }
            }
            if (s6 !== peg$FAILED) {
              s7 = peg$parse_();
              if (s7 !== peg$FAILED) {
                s8 = peg$parseEmitArgument();
                if (s8 !== peg$FAILED) {
                  s5 = [s5, s6, s7, s8];
                  s4 = s5;
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$currPos;
            s5 = peg$parse_();
            if (s5 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 44) {
                s6 = peg$c33;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c34); }
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parse_();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseEmitArgument();
                  if (s8 !== peg$FAILED) {
                    s5 = [s5, s6, s7, s8];
                    s4 = s5;
                  } else {
                    peg$currPos = s4;
                    s4 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c55(s2, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parse_();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c56();
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parseEmitVertexList() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 123) {
          s2 = peg$c14;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c15); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseEmitArgumentList();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 125) {
              s4 = peg$c16;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c17); }
            }
            if (s4 !== peg$FAILED) {
              s5 = [];
              s6 = peg$currPos;
              s7 = peg$parse_();
              if (s7 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 44) {
                  s8 = peg$c33;
                  peg$currPos++;
                } else {
                  s8 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c34); }
                }
                if (s8 !== peg$FAILED) {
                  s9 = peg$parse_();
                  if (s9 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 123) {
                      s10 = peg$c14;
                      peg$currPos++;
                    } else {
                      s10 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c15); }
                    }
                    if (s10 !== peg$FAILED) {
                      s11 = peg$parseEmitArgumentList();
                      if (s11 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 125) {
                          s12 = peg$c16;
                          peg$currPos++;
                        } else {
                          s12 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c17); }
                        }
                        if (s12 !== peg$FAILED) {
                          s7 = [s7, s8, s9, s10, s11, s12];
                          s6 = s7;
                        } else {
                          peg$currPos = s6;
                          s6 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s6;
                        s6 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s6;
                      s6 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s6;
                    s6 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s6;
                  s6 = peg$FAILED;
                }
              } else {
                peg$currPos = s6;
                s6 = peg$FAILED;
              }
              while (s6 !== peg$FAILED) {
                s5.push(s6);
                s6 = peg$currPos;
                s7 = peg$parse_();
                if (s7 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 44) {
                    s8 = peg$c33;
                    peg$currPos++;
                  } else {
                    s8 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c34); }
                  }
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parse_();
                    if (s9 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 123) {
                        s10 = peg$c14;
                        peg$currPos++;
                      } else {
                        s10 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c15); }
                      }
                      if (s10 !== peg$FAILED) {
                        s11 = peg$parseEmitArgumentList();
                        if (s11 !== peg$FAILED) {
                          if (input.charCodeAt(peg$currPos) === 125) {
                            s12 = peg$c16;
                            peg$currPos++;
                          } else {
                            s12 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c17); }
                          }
                          if (s12 !== peg$FAILED) {
                            s7 = [s7, s8, s9, s10, s11, s12];
                            s6 = s7;
                          } else {
                            peg$currPos = s6;
                            s6 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s6;
                          s6 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s6;
                        s6 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s6;
                      s6 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s6;
                    s6 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s6;
                  s6 = peg$FAILED;
                }
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();
                if (s6 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c57(s3, s5);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parse_();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c37();
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parseExpressionStatement() {
      var s0, s1;

      s0 = peg$currPos;
      s1 = peg$parseExpressionLevel1();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c58(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseVariableDeclaration() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c19) {
        s1 = peg$c19;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c20); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse__();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseName();
          if (s3 !== peg$FAILED) {
            s4 = peg$currPos;
            s5 = peg$parse_();
            if (s5 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 58) {
                s6 = peg$c12;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c13); }
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parse_();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseName();
                  if (s8 !== peg$FAILED) {
                    s5 = [s5, s6, s7, s8];
                    s4 = s5;
                  } else {
                    peg$currPos = s4;
                    s4 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
            if (s4 === peg$FAILED) {
              s4 = null;
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$currPos;
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 61) {
                  s7 = peg$c21;
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c22); }
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parse_();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseExpressionLevel1();
                    if (s9 !== peg$FAILED) {
                      s6 = [s6, s7, s8, s9];
                      s5 = s6;
                    } else {
                      peg$currPos = s5;
                      s5 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s5;
                    s5 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s5;
                  s5 = peg$FAILED;
                }
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
              if (s5 === peg$FAILED) {
                s5 = null;
              }
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c59(s3, s4, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseVariableAssignment() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseName();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 61) {
            s3 = peg$c21;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c22); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseExpressionLevel1();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c60(s1, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseForLoop() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c61) {
        s1 = peg$c61;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c62); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 40) {
            s3 = peg$c8;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c9); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseName();
              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();
                if (s6 !== peg$FAILED) {
                  if (input.substr(peg$currPos, 2) === peg$c63) {
                    s7 = peg$c63;
                    peg$currPos += 2;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c64); }
                  }
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parse_();
                    if (s8 !== peg$FAILED) {
                      s9 = peg$parseInteger();
                      if (s9 !== peg$FAILED) {
                        s10 = peg$parse_();
                        if (s10 !== peg$FAILED) {
                          if (input.substr(peg$currPos, 2) === peg$c65) {
                            s11 = peg$c65;
                            peg$currPos += 2;
                          } else {
                            s11 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c66); }
                          }
                          if (s11 !== peg$FAILED) {
                            s12 = peg$parse_();
                            if (s12 !== peg$FAILED) {
                              s13 = peg$parseInteger();
                              if (s13 !== peg$FAILED) {
                                s14 = peg$parse_();
                                if (s14 !== peg$FAILED) {
                                  if (input.charCodeAt(peg$currPos) === 41) {
                                    s15 = peg$c10;
                                    peg$currPos++;
                                  } else {
                                    s15 = peg$FAILED;
                                    if (peg$silentFails === 0) { peg$fail(peg$c11); }
                                  }
                                  if (s15 !== peg$FAILED) {
                                    s16 = peg$parse_();
                                    if (s16 !== peg$FAILED) {
                                      s17 = peg$parseStatement();
                                      if (s17 !== peg$FAILED) {
                                        peg$savedPos = s0;
                                        s1 = peg$c67(s5, s9, s13, s17);
                                        s0 = s1;
                                      } else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                      }
                                    } else {
                                      peg$currPos = s0;
                                      s0 = peg$FAILED;
                                    }
                                  } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                  }
                                } else {
                                  peg$currPos = s0;
                                  s0 = peg$FAILED;
                                }
                              } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseIfStatement() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c68) {
        s1 = peg$c68;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c69); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 40) {
            s3 = peg$c8;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c9); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseExpressionLevel1();
              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();
                if (s6 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 41) {
                    s7 = peg$c10;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c11); }
                  }
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parse_();
                    if (s8 !== peg$FAILED) {
                      s9 = peg$parseStatement();
                      if (s9 !== peg$FAILED) {
                        s10 = [];
                        s11 = peg$currPos;
                        s12 = peg$parse_();
                        if (s12 !== peg$FAILED) {
                          if (input.substr(peg$currPos, 4) === peg$c70) {
                            s13 = peg$c70;
                            peg$currPos += 4;
                          } else {
                            s13 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c71); }
                          }
                          if (s13 !== peg$FAILED) {
                            s14 = peg$parse__();
                            if (s14 !== peg$FAILED) {
                              if (input.substr(peg$currPos, 2) === peg$c68) {
                                s15 = peg$c68;
                                peg$currPos += 2;
                              } else {
                                s15 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c69); }
                              }
                              if (s15 !== peg$FAILED) {
                                s16 = peg$parse_();
                                if (s16 !== peg$FAILED) {
                                  if (input.charCodeAt(peg$currPos) === 40) {
                                    s17 = peg$c8;
                                    peg$currPos++;
                                  } else {
                                    s17 = peg$FAILED;
                                    if (peg$silentFails === 0) { peg$fail(peg$c9); }
                                  }
                                  if (s17 !== peg$FAILED) {
                                    s18 = peg$parse_();
                                    if (s18 !== peg$FAILED) {
                                      s19 = peg$parseExpressionLevel1();
                                      if (s19 !== peg$FAILED) {
                                        s20 = peg$parse_();
                                        if (s20 !== peg$FAILED) {
                                          if (input.charCodeAt(peg$currPos) === 41) {
                                            s21 = peg$c10;
                                            peg$currPos++;
                                          } else {
                                            s21 = peg$FAILED;
                                            if (peg$silentFails === 0) { peg$fail(peg$c11); }
                                          }
                                          if (s21 !== peg$FAILED) {
                                            s22 = peg$parse_();
                                            if (s22 !== peg$FAILED) {
                                              s23 = peg$parseStatement();
                                              if (s23 !== peg$FAILED) {
                                                s12 = [s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23];
                                                s11 = s12;
                                              } else {
                                                peg$currPos = s11;
                                                s11 = peg$FAILED;
                                              }
                                            } else {
                                              peg$currPos = s11;
                                              s11 = peg$FAILED;
                                            }
                                          } else {
                                            peg$currPos = s11;
                                            s11 = peg$FAILED;
                                          }
                                        } else {
                                          peg$currPos = s11;
                                          s11 = peg$FAILED;
                                        }
                                      } else {
                                        peg$currPos = s11;
                                        s11 = peg$FAILED;
                                      }
                                    } else {
                                      peg$currPos = s11;
                                      s11 = peg$FAILED;
                                    }
                                  } else {
                                    peg$currPos = s11;
                                    s11 = peg$FAILED;
                                  }
                                } else {
                                  peg$currPos = s11;
                                  s11 = peg$FAILED;
                                }
                              } else {
                                peg$currPos = s11;
                                s11 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s11;
                              s11 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s11;
                            s11 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s11;
                          s11 = peg$FAILED;
                        }
                        while (s11 !== peg$FAILED) {
                          s10.push(s11);
                          s11 = peg$currPos;
                          s12 = peg$parse_();
                          if (s12 !== peg$FAILED) {
                            if (input.substr(peg$currPos, 4) === peg$c70) {
                              s13 = peg$c70;
                              peg$currPos += 4;
                            } else {
                              s13 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c71); }
                            }
                            if (s13 !== peg$FAILED) {
                              s14 = peg$parse__();
                              if (s14 !== peg$FAILED) {
                                if (input.substr(peg$currPos, 2) === peg$c68) {
                                  s15 = peg$c68;
                                  peg$currPos += 2;
                                } else {
                                  s15 = peg$FAILED;
                                  if (peg$silentFails === 0) { peg$fail(peg$c69); }
                                }
                                if (s15 !== peg$FAILED) {
                                  s16 = peg$parse_();
                                  if (s16 !== peg$FAILED) {
                                    if (input.charCodeAt(peg$currPos) === 40) {
                                      s17 = peg$c8;
                                      peg$currPos++;
                                    } else {
                                      s17 = peg$FAILED;
                                      if (peg$silentFails === 0) { peg$fail(peg$c9); }
                                    }
                                    if (s17 !== peg$FAILED) {
                                      s18 = peg$parse_();
                                      if (s18 !== peg$FAILED) {
                                        s19 = peg$parseExpressionLevel1();
                                        if (s19 !== peg$FAILED) {
                                          s20 = peg$parse_();
                                          if (s20 !== peg$FAILED) {
                                            if (input.charCodeAt(peg$currPos) === 41) {
                                              s21 = peg$c10;
                                              peg$currPos++;
                                            } else {
                                              s21 = peg$FAILED;
                                              if (peg$silentFails === 0) { peg$fail(peg$c11); }
                                            }
                                            if (s21 !== peg$FAILED) {
                                              s22 = peg$parse_();
                                              if (s22 !== peg$FAILED) {
                                                s23 = peg$parseStatement();
                                                if (s23 !== peg$FAILED) {
                                                  s12 = [s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23];
                                                  s11 = s12;
                                                } else {
                                                  peg$currPos = s11;
                                                  s11 = peg$FAILED;
                                                }
                                              } else {
                                                peg$currPos = s11;
                                                s11 = peg$FAILED;
                                              }
                                            } else {
                                              peg$currPos = s11;
                                              s11 = peg$FAILED;
                                            }
                                          } else {
                                            peg$currPos = s11;
                                            s11 = peg$FAILED;
                                          }
                                        } else {
                                          peg$currPos = s11;
                                          s11 = peg$FAILED;
                                        }
                                      } else {
                                        peg$currPos = s11;
                                        s11 = peg$FAILED;
                                      }
                                    } else {
                                      peg$currPos = s11;
                                      s11 = peg$FAILED;
                                    }
                                  } else {
                                    peg$currPos = s11;
                                    s11 = peg$FAILED;
                                  }
                                } else {
                                  peg$currPos = s11;
                                  s11 = peg$FAILED;
                                }
                              } else {
                                peg$currPos = s11;
                                s11 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s11;
                              s11 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s11;
                            s11 = peg$FAILED;
                          }
                        }
                        if (s10 !== peg$FAILED) {
                          s11 = peg$currPos;
                          s12 = peg$parse_();
                          if (s12 !== peg$FAILED) {
                            if (input.substr(peg$currPos, 4) === peg$c70) {
                              s13 = peg$c70;
                              peg$currPos += 4;
                            } else {
                              s13 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c71); }
                            }
                            if (s13 !== peg$FAILED) {
                              s14 = peg$parse_();
                              if (s14 !== peg$FAILED) {
                                s15 = peg$parseStatement();
                                if (s15 !== peg$FAILED) {
                                  s12 = [s12, s13, s14, s15];
                                  s11 = s12;
                                } else {
                                  peg$currPos = s11;
                                  s11 = peg$FAILED;
                                }
                              } else {
                                peg$currPos = s11;
                                s11 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s11;
                              s11 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s11;
                            s11 = peg$FAILED;
                          }
                          if (s11 === peg$FAILED) {
                            s11 = null;
                          }
                          if (s11 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c72(s5, s9, s10, s11);
                            s0 = s1;
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseExpressionOp1() {
      var s0;

      if (input.substr(peg$currPos, 2) === peg$c73) {
        s0 = peg$c73;
        peg$currPos += 2;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c74); }
      }
      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c75) {
          s0 = peg$c75;
          peg$currPos += 2;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c76); }
        }
      }

      return s0;
    }

    function peg$parseExpressionOp2() {
      var s0;

      if (input.substr(peg$currPos, 2) === peg$c77) {
        s0 = peg$c77;
        peg$currPos += 2;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c78); }
      }
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 62) {
          s0 = peg$c79;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c80); }
        }
        if (s0 === peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c81) {
            s0 = peg$c81;
            peg$currPos += 2;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c82); }
          }
          if (s0 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 60) {
              s0 = peg$c83;
              peg$currPos++;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c84); }
            }
            if (s0 === peg$FAILED) {
              if (input.substr(peg$currPos, 2) === peg$c85) {
                s0 = peg$c85;
                peg$currPos += 2;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c86); }
              }
              if (s0 === peg$FAILED) {
                if (input.substr(peg$currPos, 2) === peg$c87) {
                  s0 = peg$c87;
                  peg$currPos += 2;
                } else {
                  s0 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c88); }
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parseExpressionOp3() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 43) {
        s0 = peg$c89;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c90); }
      }
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 45) {
          s0 = peg$c91;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c92); }
        }
      }

      return s0;
    }

    function peg$parseExpressionOp4() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 42) {
        s0 = peg$c28;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c29); }
      }
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 47) {
          s0 = peg$c93;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c94); }
        }
        if (s0 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 37) {
            s0 = peg$c95;
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c96); }
          }
        }
      }

      return s0;
    }

    function peg$parseExpressionLevel1() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c97) {
        s1 = peg$c97;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c98); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseExpressionLevel1();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c99(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseExpressionLevel2();
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$currPos;
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseExpressionOp1();
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseExpressionLevel2();
                if (s7 !== peg$FAILED) {
                  s4 = [s4, s5, s6, s7];
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$currPos;
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseExpressionOp1();
              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseExpressionLevel2();
                  if (s7 !== peg$FAILED) {
                    s4 = [s4, s5, s6, s7];
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          }
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c100(s1, s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      return s0;
    }

    function peg$parseExpressionLevel2() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$parseExpressionLevel3();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parse_();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseExpressionOp2();
          if (s5 !== peg$FAILED) {
            s6 = peg$parse_();
            if (s6 !== peg$FAILED) {
              s7 = peg$parseExpressionLevel3();
              if (s7 !== peg$FAILED) {
                s4 = [s4, s5, s6, s7];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseExpressionOp2();
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseExpressionLevel3();
                if (s7 !== peg$FAILED) {
                  s4 = [s4, s5, s6, s7];
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c100(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseExpressionLevel3();
      }

      return s0;
    }

    function peg$parseExpressionLevel3() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$parseExpressionLevel4();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parse_();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseExpressionOp3();
          if (s5 !== peg$FAILED) {
            s6 = peg$parse_();
            if (s6 !== peg$FAILED) {
              s7 = peg$parseExpressionLevel4();
              if (s7 !== peg$FAILED) {
                s4 = [s4, s5, s6, s7];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseExpressionOp3();
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseExpressionLevel4();
                if (s7 !== peg$FAILED) {
                  s4 = [s4, s5, s6, s7];
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c100(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseExpressionLevel4();
      }

      return s0;
    }

    function peg$parseExpressionLevel4() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$parseExpressionLevelN();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parse_();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseExpressionOp4();
          if (s5 !== peg$FAILED) {
            s6 = peg$parse_();
            if (s6 !== peg$FAILED) {
              s7 = peg$parseExpressionLevelN();
              if (s7 !== peg$FAILED) {
                s4 = [s4, s5, s6, s7];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseExpressionOp4();
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseExpressionLevelN();
                if (s7 !== peg$FAILED) {
                  s4 = [s4, s5, s6, s7];
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c100(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseExpressionLevelN();
      }

      return s0;
    }

    function peg$parseExpressionLevelN() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 45) {
        s1 = peg$c91;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c92); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseExpressionItem();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c101(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseExpressionItem();
      }

      return s0;
    }

    function peg$parseExpressionParenthesis() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 40) {
        s1 = peg$c8;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c9); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseExpressionLevel1();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 41) {
                s5 = peg$c10;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c11); }
              }
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c1(s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseExpressionItem() {
      var s0;

      s0 = peg$parseExpressionFunction();
      if (s0 === peg$FAILED) {
        s0 = peg$parseExpressionField();
        if (s0 === peg$FAILED) {
          s0 = peg$parseExpressionVariable();
          if (s0 === peg$FAILED) {
            s0 = peg$parseExpressionValue();
            if (s0 === peg$FAILED) {
              s0 = peg$parseExpressionParenthesis();
            }
          }
        }
      }

      return s0;
    }

    function peg$parseExpressionVariable() {
      var s0, s1;

      s0 = peg$currPos;
      s1 = peg$parseName();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c102(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseExpressionField() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseExpressionFunction();
      if (s1 === peg$FAILED) {
        s1 = peg$parseExpressionVariable();
        if (s1 === peg$FAILED) {
          s1 = peg$parseExpressionParenthesis();
        }
      }
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 46) {
          s2 = peg$c103;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c104); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseName();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c105(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseExpressionFunction() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseName();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 40) {
            s3 = peg$c8;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c9); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseExpressionFunctionArgumentList();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 41) {
                s5 = peg$c10;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c11); }
              }
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c106(s1, s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseExpressionFunctionArgumentList() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseExpressionArgument();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$currPos;
          s5 = peg$parse_();
          if (s5 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s6 = peg$c33;
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c34); }
            }
            if (s6 !== peg$FAILED) {
              s7 = peg$parse_();
              if (s7 !== peg$FAILED) {
                s8 = peg$parseExpressionArgument();
                if (s8 !== peg$FAILED) {
                  s5 = [s5, s6, s7, s8];
                  s4 = s5;
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$currPos;
            s5 = peg$parse_();
            if (s5 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 44) {
                s6 = peg$c33;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c34); }
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parse_();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseExpressionArgument();
                  if (s8 !== peg$FAILED) {
                    s5 = [s5, s6, s7, s8];
                    s4 = s5;
                  } else {
                    peg$currPos = s4;
                    s4 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c36(s2, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parse_();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c37();
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parseExpressionArgument() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseName();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 61) {
            s3 = peg$c21;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c22); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseExpressionLevel1();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c54(s1, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseExpressionLevel1();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c107(s1);
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parseExpressionValue() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

      s0 = peg$currPos;
      s1 = peg$parseFloat();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c108(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseInteger();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c109(s1);
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parseBoolean();
          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c110(s1);
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 91) {
              s1 = peg$c48;
              peg$currPos++;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c49); }
            }
            if (s1 !== peg$FAILED) {
              s2 = peg$parse_();
              if (s2 !== peg$FAILED) {
                s3 = peg$parseFloat();
                if (s3 !== peg$FAILED) {
                  s4 = [];
                  s5 = peg$currPos;
                  s6 = peg$parse_();
                  if (s6 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 44) {
                      s7 = peg$c33;
                      peg$currPos++;
                    } else {
                      s7 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c34); }
                    }
                    if (s7 !== peg$FAILED) {
                      s8 = peg$parse_();
                      if (s8 !== peg$FAILED) {
                        s9 = peg$parseFloat();
                        if (s9 !== peg$FAILED) {
                          s6 = [s6, s7, s8, s9];
                          s5 = s6;
                        } else {
                          peg$currPos = s5;
                          s5 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s5;
                        s5 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s5;
                      s5 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s5;
                    s5 = peg$FAILED;
                  }
                  while (s5 !== peg$FAILED) {
                    s4.push(s5);
                    s5 = peg$currPos;
                    s6 = peg$parse_();
                    if (s6 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 44) {
                        s7 = peg$c33;
                        peg$currPos++;
                      } else {
                        s7 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c34); }
                      }
                      if (s7 !== peg$FAILED) {
                        s8 = peg$parse_();
                        if (s8 !== peg$FAILED) {
                          s9 = peg$parseFloat();
                          if (s9 !== peg$FAILED) {
                            s6 = [s6, s7, s8, s9];
                            s5 = s6;
                          } else {
                            peg$currPos = s5;
                            s5 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s5;
                          s5 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s5;
                        s5 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s5;
                      s5 = peg$FAILED;
                    }
                  }
                  if (s4 !== peg$FAILED) {
                    s5 = peg$parse_();
                    if (s5 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 93) {
                        s6 = peg$c50;
                        peg$currPos++;
                      } else {
                        s6 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c51); }
                      }
                      if (s6 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c111(s3, s4);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          }
        }
      }

      return s0;
    }

    function peg$parseValue() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

      s0 = peg$parseFloat();
      if (s0 === peg$FAILED) {
        s0 = peg$parseInteger();
        if (s0 === peg$FAILED) {
          s0 = peg$parseBoolean();
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 91) {
              s1 = peg$c48;
              peg$currPos++;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c49); }
            }
            if (s1 !== peg$FAILED) {
              s2 = peg$parse_();
              if (s2 !== peg$FAILED) {
                s3 = peg$parseFloat();
                if (s3 !== peg$FAILED) {
                  s4 = [];
                  s5 = peg$currPos;
                  s6 = peg$parse_();
                  if (s6 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 44) {
                      s7 = peg$c33;
                      peg$currPos++;
                    } else {
                      s7 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c34); }
                    }
                    if (s7 !== peg$FAILED) {
                      s8 = peg$parse_();
                      if (s8 !== peg$FAILED) {
                        s9 = peg$parseFloat();
                        if (s9 !== peg$FAILED) {
                          s6 = [s6, s7, s8, s9];
                          s5 = s6;
                        } else {
                          peg$currPos = s5;
                          s5 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s5;
                        s5 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s5;
                      s5 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s5;
                    s5 = peg$FAILED;
                  }
                  while (s5 !== peg$FAILED) {
                    s4.push(s5);
                    s5 = peg$currPos;
                    s6 = peg$parse_();
                    if (s6 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 44) {
                        s7 = peg$c33;
                        peg$currPos++;
                      } else {
                        s7 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c34); }
                      }
                      if (s7 !== peg$FAILED) {
                        s8 = peg$parse_();
                        if (s8 !== peg$FAILED) {
                          s9 = peg$parseFloat();
                          if (s9 !== peg$FAILED) {
                            s6 = [s6, s7, s8, s9];
                            s5 = s6;
                          } else {
                            peg$currPos = s5;
                            s5 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s5;
                          s5 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s5;
                        s5 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s5;
                      s5 = peg$FAILED;
                    }
                  }
                  if (s4 !== peg$FAILED) {
                    s5 = peg$parse_();
                    if (s5 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 93) {
                        s6 = peg$c50;
                        peg$currPos++;
                      } else {
                        s6 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c51); }
                      }
                      if (s6 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c36(s3, s4);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          }
        }
      }

      return s0;
    }

    function peg$parseInteger() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (peg$c112.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c113); }
      }
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        if (peg$c114.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c115); }
        }
        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            if (peg$c114.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c115); }
            }
          }
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c116(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseFloat() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (peg$c112.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c113); }
      }
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        if (peg$c114.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c115); }
        }
        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            if (peg$c114.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c115); }
            }
          }
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 46) {
            s5 = peg$c103;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c104); }
          }
          if (s5 !== peg$FAILED) {
            s6 = [];
            if (peg$c114.test(input.charAt(peg$currPos))) {
              s7 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s7 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c115); }
            }
            if (s7 !== peg$FAILED) {
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                if (peg$c114.test(input.charAt(peg$currPos))) {
                  s7 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c115); }
                }
              }
            } else {
              s6 = peg$FAILED;
            }
            if (s6 !== peg$FAILED) {
              s5 = [s5, s6];
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$currPos;
            if (peg$c117.test(input.charAt(peg$currPos))) {
              s6 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c118); }
            }
            if (s6 !== peg$FAILED) {
              if (peg$c112.test(input.charAt(peg$currPos))) {
                s7 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s7 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c113); }
              }
              if (s7 === peg$FAILED) {
                s7 = null;
              }
              if (s7 !== peg$FAILED) {
                s8 = [];
                if (peg$c114.test(input.charAt(peg$currPos))) {
                  s9 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s9 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c115); }
                }
                if (s9 !== peg$FAILED) {
                  while (s9 !== peg$FAILED) {
                    s8.push(s9);
                    if (peg$c114.test(input.charAt(peg$currPos))) {
                      s9 = input.charAt(peg$currPos);
                      peg$currPos++;
                    } else {
                      s9 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c115); }
                    }
                  }
                } else {
                  s8 = peg$FAILED;
                }
                if (s8 !== peg$FAILED) {
                  s6 = [s6, s7, s8];
                  s5 = s6;
                } else {
                  peg$currPos = s5;
                  s5 = peg$FAILED;
                }
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
            if (s5 === peg$FAILED) {
              s5 = null;
            }
            if (s5 !== peg$FAILED) {
              s2 = [s2, s3, s4, s5];
              s1 = s2;
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c116(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseBoolean() {
      var s0, s1;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c119) {
        s1 = peg$c119;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c120); }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c121();
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 5) === peg$c122) {
          s1 = peg$c122;
          peg$currPos += 5;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c123); }
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c124();
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parseName() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (peg$c125.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c126); }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        if (peg$c127.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c128); }
        }
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          if (peg$c127.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c128); }
          }
        }
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c129(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parse_() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      if (peg$c130.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c131); }
      }
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c130.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c131); }
        }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c132();
      }
      s0 = s1;

      return s0;
    }

    function peg$parse__() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      if (peg$c130.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c131); }
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          if (peg$c130.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c131); }
          }
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c132();
      }
      s0 = s1;

      return s0;
    }


        function flatten(vars) {
            if(vars instanceof Array) {
                var r = "";
                for(var i = 0; i < vars.length; i++)
                    r += flatten(vars[i]);
                return r;
            } else return vars || "";
        }

        function resolveList(first, others, k) {
            if(others) {
                return [ first ].concat(others.map(function(d) { return d[k]; }));
            } else {
                return [ first ];
            }
        }

        function resolveExpressionBinaryOp(first, others) {
            var expr = first;
            others.forEach(function(d) {
              var op = d[1];
              var rhs = d[3];
              expr = makeOperatorFunction({ type: "operator", operator: op, args: [ expr, rhs ] });
            });
            return expr;
        }

        function resolveArgumentList(list) {
            var result = { args: [], kwargs: {} };
            list.forEach(function(d) {
                if(d.name !== undefined) {
                    result.kwargs[d.name] = d.value;
                } else {
                    result.args.push(d.value);
                }
            });
            return result;
        }

        function makeOperatorFunction(op) {
            return { type: "function", name: "@" + op.operator, args: { args: op.args, kwargs: {} } };
        }


    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(
        null,
        peg$maxFailExpected,
        peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
        peg$maxFailPos < input.length
          ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
          : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
      );
    }
  }

  return {
    SyntaxError: peg$SyntaxError,
    parse:       peg$parse
  };
})();

},{}],10:[function(require,module,exports){
"use strict";
var exceptions_1 = require("../exceptions");
var utils_1 = require("../utils/utils");
var Intrinsics = require("../intrinsics/intrinsics");
var Context = (function () {
    function Context() {
        this._variables = new utils_1.Dictionary();
    }
    Context.prototype.get = function (name) {
        if (!this._variables.has(name)) {
            throw new exceptions_1.RuntimeError("'" + name + "' is undefined.");
        }
        return this._variables.get(name);
    };
    Context.prototype.set = function (name, value) {
        this._variables.set(name, value);
    };
    Context.prototype.evaluateExpression = function (expression) {
        var _this = this;
        switch (expression.type) {
            case "function": {
                var expr = expression;
                var args = expr.arguments.map(function (arg) { return _this.evaluateExpression(arg); });
                var func = Intrinsics.getIntrinsicFunction(expr.functionName);
                if (!func) {
                    throw new exceptions_1.RuntimeError("function '" + expr.functionName + "' is undefined.");
                }
                return func.javascriptImplementation.apply(func, args);
            }
            case "field": {
                var expr = expression;
                var value = this.evaluateExpression(expr.value);
                switch (expr.fieldName) {
                    case "x": return value[0];
                    case "y": return value[1];
                    case "z": return value[2];
                    case "w": return value[3];
                    case "r": return value[0];
                    case "g": return value[1];
                    case "b": return value[2];
                    case "a": return value[3];
                }
                throw new exceptions_1.RuntimeError("invalid field.");
            }
            case "constant": {
                var expr = expression;
                return expr.value;
            }
            case "variable": {
                var expr = expression;
                return this.get(expr.variableName);
            }
        }
    };
    Context.prototype.evaluateStatement = function (statement) {
        switch (statement.type) {
            case "assign": {
                var s = statement;
                this.set(s.variableName, this.evaluateExpression(s.expression));
                return [];
            }
            case "condition": {
                var s = statement;
                var condition = this.evaluateExpression(s.condition);
                if (condition != 0) {
                    return this.evaluateStatements(s.trueStatements);
                }
                else {
                    return this.evaluateStatements(s.falseStatements);
                }
            }
            case "emit": {
                var s = statement;
                var emitInfo = {};
                for (var name_1 in s.attributes) {
                    var value = this.evaluateExpression(s.attributes[name_1]);
                    emitInfo[name_1] = value;
                }
                return [emitInfo];
            }
        }
    };
    Context.prototype.evaluateStatements = function (statements) {
        var result = [];
        for (var _i = 0, statements_1 = statements; _i < statements_1.length; _i++) {
            var s = statements_1[_i];
            var v = this.evaluateStatement(s);
            for (var _a = 0, v_1 = v; _a < v_1.length; _a++) {
                var r = v_1[_a];
                result.push(r);
            }
        }
        return result;
    };
    Context.prototype.evaluateMark = function (mark, inputs) {
        for (var name_2 in inputs) {
            this.set(name_2, inputs[name_2]);
        }
        return this.evaluateStatements(mark.statements);
    };
    return Context;
}());
exports.Context = Context;

},{"../exceptions":11,"../intrinsics/intrinsics":12,"../utils/utils":26}],11:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Base class for errors.
var BaseError = (function (_super) {
    __extends(BaseError, _super);
    function BaseError(message) {
        _super.call(this, message);
        this.stack = (new Error(message)).stack;
    }
    return BaseError;
}(Error));
exports.BaseError = BaseError;
// Parse error.
var ParseError = (function (_super) {
    __extends(ParseError, _super);
    function ParseError(message, start, end) {
        _super.call(this, message);
        this.name = "ParseError";
        this.message = message;
        this.start = start;
        this.end = end;
    }
    return ParseError;
}(BaseError));
exports.ParseError = ParseError;
// Compile error.
var CompileError = (function (_super) {
    __extends(CompileError, _super);
    function CompileError(message, start, end) {
        _super.call(this, message);
        this.name = "CompileError";
        this.message = message;
        this.start = start;
        this.end = end;
    }
    return CompileError;
}(BaseError));
exports.CompileError = CompileError;
// Runtime error.
var RuntimeError = (function (_super) {
    __extends(RuntimeError, _super);
    function RuntimeError(message, start, end) {
        _super.call(this, message);
        this.name = "RuntimeError";
        this.message = message;
        this.start = start;
        this.end = end;
    }
    return RuntimeError;
}(BaseError));
exports.RuntimeError = RuntimeError;

},{}],12:[function(require,module,exports){
"use strict";
var utils_1 = require("../utils/utils");
var math_1 = require("../math/math");
// Global intrinsic functions.
var intrinsicFunctions = new utils_1.Dictionary();
var intrinsicFunctionList = [];
var typeConversions = new utils_1.Dictionary();
var constants = new utils_1.Dictionary();
function getInternalName(func) {
    return "@" + func.name + ":" + func.argTypes.join(",") + ":" + func.returnType;
}
exports.getInternalName = getInternalName;
function getIntrinsicFunction(internalName) {
    if (!intrinsicFunctions.has(internalName)) {
        console.log(internalName);
    }
    return intrinsicFunctions.get(internalName);
}
exports.getIntrinsicFunction = getIntrinsicFunction;
function forEachIntrinsicFunction(callback) {
    intrinsicFunctionList.forEach(callback);
}
exports.forEachIntrinsicFunction = forEachIntrinsicFunction;
function addIntrinsicFunction(func) {
    func.internalName = getInternalName(func);
    intrinsicFunctions.set(func.internalName, func);
    intrinsicFunctionList.push(func);
}
exports.addIntrinsicFunction = addIntrinsicFunction;
function addConstant(name, type, value) {
    var constant = {
        name: name,
        type: type,
        value: value
    };
    constants.set(name, constant);
}
exports.addConstant = addConstant;
function forEachConstant(callback) {
    constants.forEach(callback);
}
exports.forEachConstant = forEachConstant;
function forEachTypeConversion(callback) {
    typeConversions.forEach(callback);
}
exports.forEachTypeConversion = forEachTypeConversion;
function getTypeConversion(srcType, destType) {
    return typeConversions.get(srcType + ":" + destType);
}
exports.getTypeConversion = getTypeConversion;
function RegisterTypeConversion(srcType, destType, rank, func) {
    var name = "cast:" + srcType + ":" + destType;
    var info = {
        name: name, argTypes: [srcType], returnType: destType, javascriptImplementation: func
    };
    addIntrinsicFunction(info);
    typeConversions.set(srcType + ":" + destType, { internalName: info.internalName, rank: rank });
}
function RegisterFunction(name, argTypes, returnType, func) {
    addIntrinsicFunction({
        name: name, argTypes: argTypes, returnType: returnType, javascriptImplementation: func
    });
}
function RegisterOperator(name, argTypes, returnType, func) {
    addIntrinsicFunction({
        name: "@" + name, argTypes: argTypes, returnType: returnType, javascriptImplementation: func
    });
}
function not_implemented() {
    throw new Error("not implemented");
}
var RegisterConstructor = function (type, srcTypes, func) { return RegisterFunction(type, srcTypes, type, func); };
// Basic arithmetics: +, -, *, /.
RegisterOperator("+", ["float", "float"], "float", function (a, b) { return a + b; });
RegisterOperator("-", ["float", "float"], "float", function (a, b) { return a - b; });
RegisterOperator("*", ["float", "float"], "float", function (a, b) { return a * b; });
RegisterOperator("/", ["float", "float"], "float", function (a, b) { return a / b; });
RegisterOperator("+", ["float"], "float", function (a) { return +a; });
RegisterOperator("-", ["float"], "float", function (a) { return -a; });
RegisterOperator("%", ["int", "int"], "int", function (a, b) { return a % b; });
RegisterOperator("%", ["float", "float"], "float", function (a, b) { return a % b; });
RegisterOperator("+", ["int", "int"], "int", function (a, b) { return a + b; });
RegisterOperator("-", ["int", "int"], "int", function (a, b) { return a - b; });
RegisterOperator("*", ["int", "int"], "int", function (a, b) { return a * b; });
RegisterOperator("/", ["int", "int"], "int", function (a, b) { return a / b; });
RegisterOperator("+", ["int"], "int", function (a) { return +a; });
RegisterOperator("-", ["int"], "int", function (a) { return -a; });
RegisterOperator("+", ["Vector2", "Vector2"], "Vector2", function (a, b) { return [a[0] + b[0], a[1] + b[1]]; });
RegisterOperator("-", ["Vector2", "Vector2"], "Vector2", function (a, b) { return [a[0] - b[0], a[1] - b[1]]; });
RegisterOperator("*", ["Vector2", "Vector2"], "Vector2", function (a, b) { return [a[0] * b[0], a[1] * b[1]]; });
RegisterOperator("/", ["Vector2", "Vector2"], "Vector2", function (a, b) { return [a[0] / b[0], a[1] / b[1]]; });
RegisterOperator("+", ["Vector2"], "Vector2", function (a) { return a; });
RegisterOperator("-", ["Vector2"], "Vector2", function (a) { return [-a[0], -a[1]]; });
RegisterOperator("+", ["Vector3", "Vector3"], "Vector3", function (a, b) { return [a[0] + b[0], a[1] + b[1], a[2] + b[2]]; });
RegisterOperator("-", ["Vector3", "Vector3"], "Vector3", function (a, b) { return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]; });
RegisterOperator("*", ["Vector3", "Vector3"], "Vector3", function (a, b) { return [a[0] * b[0], a[1] * b[1], a[2] * b[2]]; });
RegisterOperator("/", ["Vector3", "Vector3"], "Vector3", function (a, b) { return [a[0] / b[0], a[1] / b[1], a[2] / b[2]]; });
RegisterOperator("+", ["Vector3"], "Vector3", function (a) { return a; });
RegisterOperator("-", ["Vector3"], "Vector3", function (a) { return [-a[0], -a[1], -a[2]]; });
RegisterOperator("+", ["Vector4", "Vector4"], "Vector4", function (a, b) { return [a[0] + b[0], a[1] + b[1], a[2] + b[2], a[3] + b[3]]; });
RegisterOperator("-", ["Vector4", "Vector4"], "Vector4", function (a, b) { return [a[0] - b[0], a[1] - b[1], a[2] - b[2], a[3] - b[3]]; });
RegisterOperator("*", ["Vector4", "Vector4"], "Vector4", function (a, b) { return [a[0] * b[0], a[1] * b[1], a[2] * b[2], a[3] * b[3]]; });
RegisterOperator("/", ["Vector4", "Vector4"], "Vector4", function (a, b) { return [a[0] / b[0], a[1] / b[1], a[2] / b[2], a[3] / b[3]]; });
RegisterOperator("+", ["Vector4"], "Vector4", function (a) { return a; });
RegisterOperator("-", ["Vector4"], "Vector4", function (a) { return [-a[0], -a[1], -a[2], -a[3]]; });
RegisterOperator("*", ["float", "Vector2"], "Vector2", function (a, b) { return [a * b[0], a * b[1]]; });
RegisterOperator("*", ["Vector2", "float"], "Vector2", function (a, b) { return [a[0] * b, a[1] * b]; });
RegisterOperator("*", ["Vector2", "float"], "Vector2", function (a, b) { return [a[0] / b, a[1] / b]; });
RegisterOperator("*", ["float", "Vector3"], "Vector3", function (a, b) { return [a * b[0], a * b[1], a * b[2]]; });
RegisterOperator("*", ["Vector3", "float"], "Vector3", function (a, b) { return [a[0] * b, a[1] * b, a[2] * b]; });
RegisterOperator("*", ["Vector3", "float"], "Vector3", function (a, b) { return [a[0] / b, a[1] / b, a[2] / b]; });
RegisterOperator("*", ["float", "Vector4"], "Vector4", function (a, b) { return [a * b[0], a * b[1], a * b[2], a * b[3]]; });
RegisterOperator("*", ["Vector4", "float"], "Vector4", function (a, b) { return [a[0] * b, a[1] * b, a[2] * b, a[3] * b]; });
RegisterOperator("*", ["Vector4", "float"], "Vector4", function (a, b) { return [a[0] / b, a[1] / b, a[2] / b, a[3] / b]; });
// Comparison operators.
RegisterOperator("==", ["float", "float"], "bool", function (a, b) { return a == b ? 1 : 0; });
RegisterOperator(">", ["float", "float"], "bool", function (a, b) { return a > b ? 1 : 0; });
RegisterOperator("<", ["float", "float"], "bool", function (a, b) { return a < b ? 1 : 0; });
RegisterOperator(">=", ["float", "float"], "bool", function (a, b) { return a >= b ? 1 : 0; });
RegisterOperator("<=", ["float", "float"], "bool", function (a, b) { return a <= b ? 1 : 0; });
RegisterOperator("==", ["int", "int"], "bool", function (a, b) { return a == b ? 1 : 0; });
RegisterOperator(">", ["int", "int"], "bool", function (a, b) { return a > b ? 1 : 0; });
RegisterOperator("<", ["int", "int"], "bool", function (a, b) { return a < b ? 1 : 0; });
RegisterOperator(">=", ["int", "int"], "bool", function (a, b) { return a >= b ? 1 : 0; });
RegisterOperator("<=", ["int", "int"], "bool", function (a, b) { return a <= b ? 1 : 0; });
RegisterOperator("==", ["bool", "bool"], "bool", function (a, b) { return a == b ? 1 : 0; });
// Boolean operators.
RegisterOperator("!", ["bool"], "bool", function (a) { return !a ? 1 : 0; });
RegisterOperator("&&", ["bool", "bool"], "bool", function (a, b) { return a && b ? 1 : 0; });
RegisterOperator("||", ["bool", "bool"], "bool", function (a, b) { return a || b ? 1 : 0; });
// Vector/quaternion constructors.
RegisterConstructor("Vector2", ["float", "float"], function (a, b) { return [a, b]; });
RegisterConstructor("Vector3", ["float", "float", "float"], function (a, b, c) { return [a, b, c]; });
RegisterConstructor("Vector4", ["float", "float", "float", "float"], function (a, b, c, d) { return [a, b, c, d]; });
RegisterConstructor("Color", ["float", "float", "float", "float"], function (a, b, c, d) { return [a, b, c, d]; });
RegisterConstructor("Quaternion", ["float", "float", "float", "float"], function (a, b, c, d) { return [a, b, c, d]; });
// Math functions.
RegisterFunction("abs", ["float"], "float", function (a) { return Math.abs(a); });
RegisterFunction("sqrt", ["float"], "float", function (a) { return Math.sqrt(a); });
RegisterFunction("exp", ["float"], "float", function (a) { return Math.exp(a); });
RegisterFunction("log", ["float"], "float", function (a) { return Math.log(a); });
RegisterFunction("sin", ["float"], "float", function (a) { return Math.sin(a); });
RegisterFunction("cos", ["float"], "float", function (a) { return Math.cos(a); });
RegisterFunction("tan", ["float"], "float", function (a) { return Math.tan(a); });
RegisterFunction("asin", ["float"], "float", function (a) { return Math.asin(a); });
RegisterFunction("acos", ["float"], "float", function (a) { return Math.acos(a); });
RegisterFunction("atan", ["float"], "float", function (a) { return Math.atan(a); });
RegisterFunction("atan2", ["float", "float"], "float", function (a, b) { return Math.atan2(a, b); });
RegisterFunction("abs", ["int"], "int", function (a) { return Math.abs(a); });
RegisterFunction("min", ["int", "int"], "int", function (a, b) { return Math.min(a, b); });
RegisterFunction("max", ["int", "int"], "int", function (a, b) { return Math.max(a, b); });
RegisterFunction("min", ["float", "float"], "float", function (a, b) { return Math.min(a, b); });
RegisterFunction("max", ["float", "float"], "float", function (a, b) { return Math.max(a, b); });
RegisterFunction("ceil", ["float"], "float", function (a, b) { return Math.ceil(a); });
RegisterFunction("floor", ["float"], "float", function (a, b) { return Math.floor(a); });
RegisterFunction("mix", ["float", "float", "float"], "float", function (a, b, t) { return a + (b - a) * t; });
RegisterFunction("mix", ["Vector2", "Vector2", "float"], "Vector2", null); // TODO
RegisterFunction("mix", ["Vector3", "Vector3", "float"], "Vector3", null);
RegisterFunction("mix", ["Vector4", "Vector4", "float"], "Vector4", null);
RegisterFunction("mix", ["Color", "Color", "float"], "Color", null);
RegisterFunction("clamp", ["float"], "float", function (a) { return Math.max(0, Math.min(1, a)); });
// Vector functions.
RegisterFunction("dot", ["Vector2", "Vector2"], "float", function (a, b) { return a[0] * b[0] + a[1] * b[1]; });
RegisterFunction("dot", ["Vector3", "Vector3"], "float", function (a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; });
RegisterFunction("dot", ["Vector4", "Vector4"], "float", function (a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]; });
RegisterFunction("length", ["Vector2"], "float", function (a) { return math_1.Vector2.FromArray(a).normalize().toArray(); });
RegisterFunction("length", ["Vector3"], "float", function (a) { return math_1.Vector3.FromArray(a).normalize().toArray(); });
RegisterFunction("length", ["Vector4"], "float", function (a) { return math_1.Quaternion.FromArray(a).normalize().toArray(); });
RegisterFunction("length", ["Quaternion"], "float", function (a) { return math_1.Quaternion.FromArray(a).normalize().toArray(); });
RegisterFunction("normalize", ["Vector2"], "Vector2", function (a) { return math_1.Vector2.FromArray(a).length(); });
RegisterFunction("normalize", ["Vector3"], "Vector3", function (a) { return math_1.Vector3.FromArray(a).length(); });
RegisterFunction("normalize", ["Vector4"], "Vector4", function (a) { return math_1.Quaternion.FromArray(a).length(); });
RegisterFunction("normalize", ["Quaternion"], "Quaternion", function (a) { return math_1.Quaternion.FromArray(a).length(); });
RegisterFunction("cross", ["Vector3", "Vector3"], "Vector3", function (a, b) {
    return math_1.Vector3.FromArray(a).cross(math_1.Vector3.FromArray(b)).toArray();
});
// Quaternion functions.
RegisterFunction("quat_mul", ["Quaternion", "Quaternion"], "Quaternion", function (a, b) {
    return math_1.Quaternion.FromArray(a).mul(math_1.Quaternion.FromArray(b)).toArray();
});
RegisterFunction("quat_conj", ["Quaternion"], "Quaternion", function (a) {
    return math_1.Quaternion.FromArray(a).conj().toArray();
});
RegisterFunction("quat_slerp", ["Quaternion", "Quaternion", "float"], "Quaternion", function (a, b, t) {
    return math_1.Quaternion.Slerp(math_1.Quaternion.FromArray(a), math_1.Quaternion.FromArray(b), t).toArray();
});
RegisterFunction("quat_rotate", ["Quaternion", "Vector3"], "Vector3", function (q, v) {
    return math_1.Quaternion.FromArray(q).rotate(math_1.Vector3.FromArray(v)).toArray();
});
RegisterFunction("quat_rotation", ["Vector3", "float"], "Quaternion", function (axis, angle) {
    return math_1.Quaternion.Rotation(math_1.Vector3.FromArray(axis), angle).toArray();
});
// Color functions.
RegisterConstructor("Color", ["float", "float", "float", "float"], function (r, g, b, a) { return [r, g, b, a]; });
RegisterConstructor("Color", ["float", "float", "float"], function (r, g, b) { return [r, g, b, 1]; });
RegisterConstructor("Color", ["float", "float"], function (v, a) { return [v, v, v, a]; });
RegisterConstructor("Color", ["float"], function (v) { return [v, v, v, 1]; });
RegisterFunction("lab2rgb", ["Color"], "Color", function (color) { return color; });
RegisterFunction("hcl2rgb", ["Color"], "Color", function (color) { return color; });
// Type conversions.
// We only allow low-precision to high-precision conversions to be automated.
RegisterTypeConversion("bool", "int", 1, function (a) { return a; });
RegisterTypeConversion("int", "float", 1, function (a) { return a; });
// Explicit conversions.
RegisterFunction("int", ["float"], "int", function (a) { return Math.floor(a); });
RegisterFunction("float", ["int"], "float", function (a) { return a; });
RegisterTypeConversion("Quaternion", "Vector4", 0, function (a) { return a; });
RegisterTypeConversion("Vector4", "Quaternion", 0, function (a) { return a; });
RegisterTypeConversion("Color", "Vector4", 0, function (a) { return a; });
RegisterTypeConversion("Vector4", "Color", 0, function (a) { return a; });
RegisterTypeConversion("Vector4Array", "ColorArray", 0, function (a) { return a; });
RegisterTypeConversion("ColorArray", "Vector4Array", 0, function (a) { return a; });
RegisterTypeConversion("Vector4Array2D", "Image", 0, function (a) { return a; });
RegisterTypeConversion("Image", "Vector4Image", 0, function (a) { return a; });
// Constants
addConstant("PI", "float", Math.PI);
addConstant("SQRT2", "float", Math.SQRT2);
addConstant("SQRT1_2", "float", Math.SQRT1_2);
addConstant("RED", "Color", [1, 0, 0, 1]);
// Array and image
RegisterFunction("array", ["FloatArray", "float"], "float", not_implemented);
RegisterFunction("array", ["Vector2Array", "float"], "Vector2", not_implemented);
RegisterFunction("array", ["Vector3Array", "float"], "Vector3", not_implemented);
RegisterFunction("array", ["Vector4Array", "float"], "Vector4", not_implemented);
RegisterFunction("array", ["ColorArray", "float"], "Color", not_implemented);
RegisterFunction("image", ["Image", "Vector2"], "Color", not_implemented);
RegisterFunction("image", ["Vector4Image", "Vector2"], "Vector4", not_implemented);
RegisterFunction("image", ["Vector3Image", "Vector2"], "Vector3", not_implemented);
RegisterFunction("image", ["Vector2Image", "Vector2"], "Vector2", not_implemented);
RegisterFunction("image", ["FloatImage", "Vector2"], "float", not_implemented);

},{"../math/math":18,"../utils/utils":26}],13:[function(require,module,exports){
"use strict";
var parser_1 = require("../compiler/parser");
var utils_1 = require("../utils/utils");
var modules = new utils_1.Dictionary();
function importPrimitiveCode(name, code) {
    var thisModule = null;
    if (modules.has(name)) {
        thisModule = modules.get(name);
    }
    else {
        thisModule = new utils_1.Dictionary();
        modules.set(name, thisModule);
    }
    var tree = parser_1.parseFile(code);
    for (var _i = 0, _a = tree.blocks; _i < _a.length; _i++) {
        var f = _a[_i];
        if (f.type == "function") {
            var fn = f;
            thisModule.set(fn.name, fn);
        }
    }
}
var P2D = require("./primitives2d");
importPrimitiveCode("P2D", P2D.primitives);
var P3D = require("./primitives3d");
importPrimitiveCode("P3D", P3D.primitives);
function getModule(name) {
    return modules.get(name);
}
exports.getModule = getModule;
function getModuleFunction(name, functionName) {
    return modules.get(name).get(functionName);
}
exports.getModuleFunction = getModuleFunction;
function forEachModuleFunction(name, callback) {
    return modules.get(name).forEach(callback);
}
exports.forEachModuleFunction = forEachModuleFunction;

},{"../compiler/parser":8,"../utils/utils":26,"./primitives2d":14,"./primitives3d":15}],14:[function(require,module,exports){
"use strict";
exports.primitives = "\n    mark Triangle(\n        p1: Vector2,\n        p2: Vector2,\n        p3: Vector2,\n        color: Color = [ 0, 0, 0, 1 ]\n    ) {\n        emit [\n            { position: p1, color: color },\n            { position: p2, color: color },\n            { position: p3, color: color }\n        ];\n    }\n\n    mark Rectangle(\n        p1: Vector2,\n        p2: Vector2,\n        color: Color = [ 0, 0, 0, 1 ]\n    ) {\n        emit [\n            { position: Vector2(p1.x, p1.y), color: color },\n            { position: Vector2(p2.x, p1.y), color: color },\n            { position: Vector2(p2.x, p2.y), color: color }\n        ];\n        emit [\n            { position: Vector2(p1.x, p1.y), color: color },\n            { position: Vector2(p1.x, p2.y), color: color },\n            { position: Vector2(p2.x, p2.y), color: color }\n        ];\n    }\n\n    mark OutlinedRectangle(\n        p1: Vector2,\n        p2: Vector2,\n        width: float = 1,\n        color: Color = [ 0, 0, 0, 1 ]\n    ) {\n        Rectangle(p1, Vector2(p1.x + width, p2.y - width), color);\n        Rectangle(Vector2(p1.x, p2.y - width), Vector2(p2.x - width, p2.y), color);\n        Rectangle(Vector2(p1.x + width, p1.y), Vector2(p2.x, p1.y + width), color);\n        Rectangle(Vector2(p2.x - width, p1.y + width), p2, color);\n    }\n\n    mark Hexagon(\n        center: Vector2,\n        radius: float,\n        color: Color = [ 0, 0, 0, 1 ]\n    ) {\n        for(i in 0..5) {\n            let a1 = i / 6.0 * PI * 2.0;\n            let a2 = (i + 1) / 6.0 * PI * 2.0;\n            let p1 = Vector2(radius * cos(a1), radius * sin(a1));\n            let p2 = Vector2(radius * cos(a2), radius * sin(a2));\n            emit [\n                { position: center + p1, color: color },\n                { position: center, color: color },\n                { position: center + p2, color: color }\n            ];\n        }\n    }\n\n    mark Circle16(\n        center: Vector2,\n        radius: float,\n        color: Color = [ 0, 0, 0, 1 ]\n    ) {\n        for(i in 0..15) {\n            let a1 = i / 16.0 * PI * 2.0;\n            let a2 = (i + 1) / 16.0 * PI * 2.0;\n            let p1 = Vector2(radius * cos(a1), radius * sin(a1));\n            let p2 = Vector2(radius * cos(a2), radius * sin(a2));\n            emit [\n                { position: center + p1, color: color },\n                { position: center, color: color },\n                { position: center + p2, color: color }\n            ];\n        }\n    }\n\n    mark Circle(\n        center: Vector2,\n        radius: float,\n        color: Color = [ 0, 0, 0, 1 ]\n    ) {\n        for(i in 0..31) {\n            let a1 = i / 32.0 * PI * 2.0;\n            let a2 = (i + 1) / 32.0 * PI * 2.0;\n            let p1 = Vector2(radius * cos(a1), radius * sin(a1));\n            let p2 = Vector2(radius * cos(a2), radius * sin(a2));\n            emit [\n                { position: center + p1, color: color },\n                { position: center, color: color },\n                { position: center + p2, color: color }\n            ];\n        }\n    }\n\n    mark Line(\n        p1: Vector2,\n        p2: Vector2,\n        width: float = 1,\n        color: Color = [ 0, 0, 0, 1 ]\n    ) {\n        let d = normalize(p2 - p1);\n        let t = Vector2(d.y, -d.x) * (width / 2);\n        emit [\n            { position: p1 + t, color: color },\n            { position: p1 - t, color: color },\n            { position: p2 + t, color: color }\n        ];\n        emit [\n            { position: p1 - t, color: color },\n            { position: p2 - t, color: color },\n            { position: p2 + t, color: color }\n        ];\n    }\n\n    mark Sector2(\n        c: Vector2,\n        p1: Vector2,\n        p2: Vector2,\n        color: Color\n    ) {\n        let pc = c + normalize(p1 + p2 - c - c) * length(p1 - c);\n        Triangle(c, p1, pc, color);\n        Triangle(c, pc, p2, color);\n    }\n\n    mark Sector4(\n        c: Vector2,\n        p1: Vector2,\n        p2: Vector2,\n        color: Color\n    ) {\n        let pc = c + normalize(p1 + p2 - c - c) * length(p1 - c);\n        Sector2(c, p1, pc, color);\n        Sector2(c, pc, p2, color);\n    }\n\n    mark Polyline(\n        p: Vector2, p_p: Vector2, p_n: Vector2, p_nn: Vector2,\n        width: float,\n        color: Color = [ 0, 0, 0, 1 ]\n    ) {\n        let EPS = 1e-5;\n        let w = width / 2;\n        let d = normalize(p - p_n);\n        let n = Vector2(d.y, -d.x);\n        let m1: Vector2;\n        if(length(p - p_p) < EPS) {\n            m1 = n * w;\n        } else {\n            m1 = normalize(d + normalize(p - p_p)) * w;\n        }\n        let m2: Vector2;\n        if(length(p_n - p_nn) < EPS) {\n            m2 = -n * w;\n        } else {\n            m2 = normalize(normalize(p_n - p_nn) - d) * w;\n        }\n        let c1a: Vector2;\n        let c1b: Vector2;\n        let a1: Vector2;\n        let a2: Vector2;\n        if(dot(m1, n) > 0) {\n            c1a = p + m1;\n            c1b = p + n * w;\n            a2 = c1b;\n            a1 = p - m1 * (w / dot(m1, n));\n        } else {\n            c1a = p + m1;\n            c1b = p - n * w;\n            a2 = p + m1 * (w / dot(m1, n));\n            a1 = c1b;\n        }\n        let c2a: Vector2;\n        let c2b: Vector2;\n        let b1: Vector2;\n        let b2: Vector2;\n        if(dot(m2, n) < 0) {\n            c2a = p_n + m2;\n            c2b = p_n - n * w;\n            b1 = c2b;\n            b2 = p_n + m2 * (w / dot(m2, n));\n        } else {\n            c2a = p_n + m2;\n            c2b = p_n + n * w;\n            b2 = c2b;\n            b1 = p_n - m2 * (w / dot(m2, n));\n        }\n        emit [\n            { position: p, color: color },\n            { position: c1a, color: color },\n            { position: c1b, color: color }\n        ];\n        emit [\n            { position: p_n, color: color },\n            { position: c2a, color: color },\n            { position: c2b, color: color }\n        ];\n        emit [\n            { position: p, color: color },\n            { position: a1, color: color },\n            { position: b1, color: color }\n        ];\n        emit [\n            { position: p, color: color },\n            { position: b1, color: color },\n            { position: p_n, color: color }\n        ];\n        emit [\n            { position: p, color: color },\n            { position: a2, color: color },\n            { position: b2, color: color }\n        ];\n        emit [\n            { position: p, color: color },\n            { position: b2, color: color },\n            { position: p_n, color: color }\n        ];\n    }\n\n    mark Wedge(\n        p1: Vector2 = [ 0, 0 ],\n        theta1: float = 0,\n        theta2: float = 0,\n        length: float = 10,\n        width: float = 1,\n        color: Color = [ 0, 0, 0, 1 ]\n    ) {\n        let dTheta = (theta2 - theta1) / 60;\n        let dL = length / 60;\n        for(i in 0..59) {\n            let dThetaA = i * dTheta;\n            let dThetaB = (i + 1) * dTheta;\n            let thetaA = theta1 + dThetaA;\n            let thetaB = theta1 + dThetaB;\n            let thetaCenterA = theta1 + dThetaA / 2;\n            let thetaCenterB = theta1 + dThetaB / 2;\n            let dlA = dL * i;\n            let dlB = dL * (i + 1);\n            if(dThetaA > 1e-5 || dThetaA < -1e-5) {\n                dlA = dlA / dThetaA * 2 * sin(dThetaA / 2);\n            }\n            if(dThetaB > 1e-5 || dThetaB < -1e-5) {\n                dlB = dlB / dThetaB * 2 * sin(dThetaB / 2);\n            }\n            let pAdvA = Vector2(-sin(thetaCenterA), cos(thetaCenterA)) * dlA;\n            let pAdvB = Vector2(-sin(thetaCenterB), cos(thetaCenterB)) * dlB;\n            let pA = p1 + pAdvA;\n            let pB = p1 + pAdvB;\n\n            let dpA = Vector2(cos(thetaA), sin(thetaA)) * width * 0.5;\n            let dpB = Vector2(cos(thetaB), sin(thetaB)) * width * 0.5;\n\n            Triangle(pA + dpA, pB + dpB, pB - dpB, color);\n            Triangle(pA + dpA, pB - dpB, pA - dpA, color);\n        }\n    }\n";

},{}],15:[function(require,module,exports){
"use strict";
exports.primitives = "\n    mark Triangle(\n        p1: Vector3,\n        p2: Vector3,\n        p3: Vector3,\n        color: Color = [ 0, 0, 0, 1 ]\n    ) {\n        let normal = normalize(cross(p2 - p1, p3 - p1));\n        emit [\n            { position: p1, color: color, normal: normal },\n            { position: p2, color: color, normal: normal },\n            { position: p3, color: color, normal: normal }\n        ];\n    }\n\n    mark Tetrahedron(\n        p1: Vector3,\n        p2: Vector3,\n        p3: Vector3,\n        p4: Vector3\n    ) {\n        Triangle(p3, p4, p1);\n        Triangle(p1, p4, p2);\n        Triangle(p1, p2, p3);\n        Triangle(p2, p3, p4);\n    }\n\n    mark Cube(\n        center: Vector3,\n        radius: float,\n        color: Color\n    ) {\n        let p000 = Vector3(center.x - radius, center.y - radius, center.z - radius);\n        let p001 = Vector3(center.x - radius, center.y - radius, center.z + radius);\n        let p010 = Vector3(center.x - radius, center.y + radius, center.z - radius);\n        let p011 = Vector3(center.x - radius, center.y + radius, center.z + radius);\n        let p100 = Vector3(center.x + radius, center.y - radius, center.z - radius);\n        let p101 = Vector3(center.x + radius, center.y - radius, center.z + radius);\n        let p110 = Vector3(center.x + radius, center.y + radius, center.z - radius);\n        let p111 = Vector3(center.x + radius, center.y + radius, center.z + radius);\n        let nx = Vector3(1, 0, 0);\n        let ny = Vector3(0, 1, 0);\n        let nz = Vector3(0, 0, 1);\n        emit [ { position: p000, color: color, normal: nz }, { position: p110, color: color, normal: nz }, { position: p100, color: color, normal: nz } ];\n        emit [ { position: p000, color: color, normal: nz }, { position: p010, color: color, normal: nz }, { position: p110, color: color, normal: nz } ];\n        emit [ { position: p001, color: color, normal: nz }, { position: p101, color: color, normal: nz }, { position: p111, color: color, normal: nz } ];\n        emit [ { position: p001, color: color, normal: nz }, { position: p111, color: color, normal: nz }, { position: p011, color: color, normal: nz } ];\n        emit [ { position: p000, color: color, normal: ny }, { position: p100, color: color, normal: ny }, { position: p101, color: color, normal: ny } ];\n        emit [ { position: p000, color: color, normal: ny }, { position: p101, color: color, normal: ny }, { position: p001, color: color, normal: ny } ];\n        emit [ { position: p010, color: color, normal: ny }, { position: p111, color: color, normal: ny }, { position: p110, color: color, normal: ny } ];\n        emit [ { position: p010, color: color, normal: ny }, { position: p011, color: color, normal: ny }, { position: p111, color: color, normal: ny } ];\n        emit [ { position: p000, color: color, normal: nx }, { position: p001, color: color, normal: nx }, { position: p011, color: color, normal: nx } ];\n        emit [ { position: p000, color: color, normal: nx }, { position: p011, color: color, normal: nx }, { position: p010, color: color, normal: nx } ];\n        emit [ { position: p100, color: color, normal: nx }, { position: p101, color: color, normal: nx }, { position: p111, color: color, normal: nx } ];\n        emit [ { position: p100, color: color, normal: nx }, { position: p111, color: color, normal: nx }, { position: p110, color: color, normal: nx } ];\n    }\n";

},{}],16:[function(require,module,exports){
"use strict";
var binding_1 = require("../binding/binding");
var exceptions_1 = require("../exceptions");
var utils_1 = require("../utils/utils");
var scale_1 = require("../scale/scale");
var shiftBindingDescriptions = [
    { shift: -2, suffix: "_pp" },
    { shift: -1, suffix: "_p" },
    { shift: +1, suffix: "_n" },
    { shift: +2, suffix: "_nn" }
];
var Mark = (function () {
    function Mark(spec, shader, platform) {
        this._spec = spec;
        this._shader = shader;
        this._data = [];
        this._platform = platform;
        this._bindings = new utils_1.Dictionary();
        this._shiftBindings = new utils_1.Dictionary();
        this._platformMark = null;
        this._shouldUploadData = true;
        this._instanceFunctions = null;
        // Set bindings to default value whenever exists.
        for (var name_1 in this._spec.input) {
            if (this._spec.input.hasOwnProperty(name_1)) {
                var input = this._spec.input[name_1];
                if (input.default != null) {
                    this._bindings.set(name_1, new binding_1.Binding(input.type, input.default));
                }
            }
        }
        // Assign shift bindings based on naming convention.
        for (var name_2 in this._spec.input) {
            if (this._spec.input.hasOwnProperty(name_2)) {
                for (var _i = 0, shiftBindingDescriptions_1 = shiftBindingDescriptions; _i < shiftBindingDescriptions_1.length; _i++) {
                    var _a = shiftBindingDescriptions_1[_i], shift = _a.shift, suffix = _a.suffix;
                    if (this._spec.input.hasOwnProperty(name_2 + suffix)) {
                        this._shiftBindings.set(name_2 + suffix, new binding_1.ShiftBinding(name_2, shift));
                    }
                }
            }
        }
    }
    Object.defineProperty(Mark.prototype, "spec", {
        get: function () {
            return this._spec;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mark.prototype, "shader", {
        get: function () {
            return this._shader;
        },
        enumerable: true,
        configurable: true
    });
    Mark.prototype.attr = function (name, value) {
        if (value === undefined) {
            if (!this._bindings.has(name)) {
                throw new exceptions_1.RuntimeError("attr '" + name + " is undefined.");
            }
            var binding = this._bindings.get(name);
            if (binding instanceof binding_1.Binding) {
                return binding.value;
            }
            else {
                return binding;
            }
        }
        else {
            if (!this._spec.input.hasOwnProperty(name)) {
                throw new exceptions_1.RuntimeError("attr '" + name + " is undefined.");
            }
            if (value instanceof scale_1.ScaleBinding) {
                if (this._platformMark) {
                    if (this._bindings.get(name) != value) {
                        this._platformMark = null;
                    }
                }
                this._bindings.set(name, value);
            }
            else {
                // Create new binding.
                var newBinding = new binding_1.Binding(this._spec.input[name].type, value);
                // Decide if we should recompile the platform code.
                if (this._platformMark) {
                    // Recompile if the input was compiled as input,
                    // and the new binding is not a function.
                    if (this._platformMark.isUniform(name) && newBinding.bindingType != binding_1.BindingType.FUNCTION) {
                        if (newBinding.bindingType == binding_1.BindingType.VALUE) {
                            this._platformMark.updateUniform(name, newBinding.specValue);
                        }
                        if (newBinding.bindingType == binding_1.BindingType.TEXTURE) {
                            this._platformMark.updateTexture(name, newBinding.textureValue);
                        }
                    }
                    else {
                        this._platformMark = null;
                    }
                }
                this._bindings.set(name, newBinding);
            }
            return this;
        }
    };
    Mark.prototype.data = function (data) {
        if (data === undefined) {
            return this._data;
        }
        else {
            this._data = data.slice();
            this._shouldUploadData = true;
            return this;
        }
    };
    Mark.prototype.instance = function (datum, attrs) {
        if (datum === undefined && attrs === undefined) {
            return this._instanceFunctions;
        }
        else {
            this._instanceFunctions = {
                datum: datum,
                attrs: attrs
            };
        }
    };
    // Make alternative spec to include ScaleBinding values.
    Mark.prototype.prepareSpecification = function () {
        var newSpec = {
            input: utils_1.shallowClone(this._spec.input),
            output: this._spec.output,
            statements: this._spec.statements.slice(),
            variables: utils_1.shallowClone(this._spec.variables),
            repeatBegin: this._spec.repeatBegin,
            repeatEnd: this._spec.repeatEnd
        };
        var newBindings = this._bindings.clone();
        var shiftBindings = this._shiftBindings.clone();
        this._bindings.forEach(function (binding, name) {
            if (binding instanceof scale_1.ScaleBinding) {
                var attributes = binding.getAttributes();
                var attrs_1 = {};
                attributes.forEach(function (attr) {
                    var bindedName = name + attr.bindedName;
                    newBindings.set(bindedName, new binding_1.Binding(attr.type, attr.binding));
                    attrs_1[attr.bindedName] = {
                        type: "variable",
                        valueType: attr.type,
                        variableName: bindedName
                    };
                    newSpec.input[bindedName] = {
                        type: attr.type,
                        default: null
                    };
                });
                // Move the attribute to variables.
                newSpec.variables[name] = newSpec.input[name].type;
                newSpec.statements.splice(0, 0, {
                    type: "assign",
                    variableName: name,
                    expression: binding.getExpression(attrs_1),
                    valueType: newSpec.input[name].type
                });
                var _loop_1 = function(suffix, shift) {
                    if (newSpec.input.hasOwnProperty(name + suffix)) {
                        newSpec.variables[name + suffix] = newSpec.input[name].type;
                        var shiftAttrs_1 = {};
                        attributes.forEach(function (attr) {
                            var bindedName = name + attr.bindedName;
                            if (newBindings.get(bindedName).bindingType == binding_1.BindingType.FUNCTION) {
                                var shiftBindedName = bindedName + suffix;
                                shiftBindings.set(shiftBindedName, new binding_1.ShiftBinding(bindedName, shift));
                                shiftAttrs_1[attr.bindedName] = {
                                    type: "variable",
                                    valueType: attr.type,
                                    variableName: shiftBindedName
                                };
                                newSpec.input[shiftBindedName] = {
                                    type: attr.type,
                                    default: null
                                };
                            }
                            else {
                                shiftAttrs_1[attr.bindedName] = {
                                    type: "variable",
                                    valueType: attr.type,
                                    variableName: bindedName
                                };
                            }
                        });
                        newSpec.statements.splice(0, 0, {
                            type: "assign",
                            variableName: name + suffix,
                            expression: binding.getExpression(shiftAttrs_1),
                            valueType: newSpec.input[name].type
                        });
                    }
                };
                for (var _i = 0, shiftBindingDescriptions_2 = shiftBindingDescriptions; _i < shiftBindingDescriptions_2.length; _i++) {
                    var _a = shiftBindingDescriptions_2[_i], suffix = _a.suffix, shift = _a.shift;
                    _loop_1(suffix, shift);
                }
                delete newSpec.input[name];
                newBindings.delete(name);
                for (var _b = 0, shiftBindingDescriptions_3 = shiftBindingDescriptions; _b < shiftBindingDescriptions_3.length; _b++) {
                    var suffix = shiftBindingDescriptions_3[_b].suffix;
                    if (shiftBindings.has(name + suffix)) {
                        delete newSpec.input[name + suffix];
                        shiftBindings.delete(name + suffix);
                    }
                }
            }
        });
        return [newSpec, newBindings, shiftBindings];
    };
    Mark.prototype.uploadScaleUniforms = function () {
        var _this = this;
        this._bindings.forEach(function (binding, name) {
            if (binding instanceof scale_1.ScaleBinding) {
                var attributes = binding.getAttributes();
                var attrs = {};
                attributes.forEach(function (attr) {
                    if (attr.binding instanceof binding_1.TextureBinding) {
                        _this._platformMark.updateTexture(name + attr.bindedName, attr.binding);
                    }
                    else {
                        _this._platformMark.updateUniform(name + attr.bindedName, attr.binding);
                    }
                });
            }
        });
    };
    Mark.prototype.prepare = function () {
        var _this = this;
        if (!this._platformMark) {
            var _a = this.prepareSpecification(), spec = _a[0], binding = _a[1], shiftBinding = _a[2];
            this._platformMark = this._platform.compile(this, spec, this._shader, binding, shiftBinding);
            this._shouldUploadData = true;
        }
        if (this._shouldUploadData) {
            if (this._instanceFunctions == null) {
                this._platformMarkData = this._platformMark.uploadData([this._data]);
            }
            else {
                var allData_1 = [];
                this._data.forEach(function (datum, index) {
                    var data = _this._instanceFunctions.datum(datum, index, _this._data);
                    allData_1.push(data);
                });
                this._platformMarkData = this._platformMark.uploadData(allData_1);
            }
            this._shouldUploadData = false;
        }
        return this;
    };
    Mark.prototype.render = function () {
        var _this = this;
        this.prepare();
        if (this._instanceFunctions == null) {
            this._platformMark.render(this._platformMarkData, function () {
                _this.uploadScaleUniforms();
            });
        }
        else {
            this._platformMark.render(this._platformMarkData, function (index) {
                var datum = _this._data[index];
                if (_this._instanceFunctions.attrs) {
                    var attrs = _this._instanceFunctions.attrs(datum, index, _this._data);
                    if (attrs != null) {
                        for (var attr in attrs) {
                            if (attrs.hasOwnProperty(attr)) {
                                _this._platformMark.updateUniform(attr, binding_1.getBindingValue(attrs[attr]));
                            }
                        }
                    }
                }
                _this.uploadScaleUniforms();
            });
        }
        return this;
    };
    return Mark;
}());
exports.Mark = Mark;

},{"../binding/binding":3,"../exceptions":11,"../scale/scale":20,"../utils/utils":26}],17:[function(require,module,exports){
"use strict";
var compiler_1 = require("../compiler/compiler");
var declare_1 = require("../compiler/declare");
var mark_1 = require("./mark");
var platform_1 = require("../platform/platform");
var mark;
(function (mark) {
    function create(arg1, arg2, arg3) {
        if (arg2 instanceof platform_1.Platform) {
            var default_shader = shader.basic();
            if (arg1 instanceof declare_1.CustomMark) {
                return new mark_1.Mark(arg1.compile(), default_shader, arg2);
            }
            else {
                return new mark_1.Mark(arg1, default_shader, arg2);
            }
        }
        else {
            var default_shader = arg2;
            if (arg1 instanceof declare_1.CustomMark) {
                return new mark_1.Mark(arg1.compile(), default_shader, arg3);
            }
            else {
                return new mark_1.Mark(arg1, default_shader, arg3);
            }
        }
    }
    mark.create = create;
    // export function create(spec: CustomMark | Specification.Mark, platform: Platform): Mark {
    //     if(spec instanceof CustomMark) {
    //         return new Mark(spec.compile(), platform);
    //     } else {
    //         return new Mark(spec, platform);
    //     }
    // }
    function custom() {
        return new declare_1.CustomMark();
    }
    mark.custom = custom;
    function compile(code) {
        return compiler_1.compileString(code);
    }
    mark.compile = compile;
    function circle(sides) {
        if (sides === void 0) { sides = 32; }
        return mark.compile("\n            mark Circle(\n                center: Vector2 = [ 0, 0 ],\n                radius: float = 1,\n                color: Color = [ 0, 0, 0, 1 ]\n            ) {\n                for(i in 0.." + (sides - 1) + ") {\n                    let a1 = i / " + sides.toFixed(1) + " * PI * 2.0;\n                    let a2 = (i + 1) / " + sides.toFixed(1) + " * PI * 2.0;\n                    let p1 = Vector2(radius * cos(a1), radius * sin(a1));\n                    let p2 = Vector2(radius * cos(a2), radius * sin(a2));\n                    emit [\n                        { position: center + p1, color: color },\n                        { position: center, color: color },\n                        { position: center + p2, color: color }\n                    ];\n                }\n            }\n        ")["Circle"];
    }
    mark.circle = circle;
    function rect() {
        return mark.compile("\n            mark Rectangle(\n                p1: Vector2 = [ 0, 0 ],\n                p2: Vector2 = [ 0, 0 ],\n                color: Color = [ 0, 0, 0, 1 ]\n            ) {\n                emit [\n                    { position: Vector2(p1.x, p1.y), color: color },\n                    { position: Vector2(p2.x, p1.y), color: color },\n                    { position: Vector2(p2.x, p2.y), color: color }\n                ];\n                emit [\n                    { position: Vector2(p1.x, p1.y), color: color },\n                    { position: Vector2(p1.x, p2.y), color: color },\n                    { position: Vector2(p2.x, p2.y), color: color }\n                ];\n            }\n        ")["Rectangle"];
    }
    mark.rect = rect;
    function line() {
        return mark.compile("\n            mark Line(\n                p1: Vector2 = [ 0, 0 ],\n                p2: Vector2 = [ 0, 0 ],\n                width: float = 1,\n                color: Color = [ 0, 0, 0, 1 ]\n            ) {\n                let d = normalize(p2 - p1);\n                let t = Vector2(d.y, -d.x) * (width / 2);\n                emit [\n                    { position: p1 + t, color: color },\n                    { position: p1 - t, color: color },\n                    { position: p2 + t, color: color }\n                ];\n                emit [\n                    { position: p1 - t, color: color },\n                    { position: p2 - t, color: color },\n                    { position: p2 + t, color: color }\n                ];\n            }\n        ")["Line"];
    }
    mark.line = line;
    function wedge(sides) {
        if (sides === void 0) { sides = 60; }
        return mark.compile("\n            import { Triangle } from P2D;\n\n            mark Wedge(\n                p1: Vector2 = [ 0, 0 ],\n                theta1: float = 0,\n                theta2: float = 0,\n                length: float = 10,\n                width: float = 1,\n                color: Color = [ 0, 0, 0, 1 ]\n            ) {\n                let dTheta = (theta2 - theta1) / 60;\n                let dL = length / 60;\n                for(i in 0..59) {\n                    let dThetaA = i * dTheta;\n                    let dThetaB = (i + 1) * dTheta;\n                    let thetaA = theta1 + dThetaA;\n                    let thetaB = theta1 + dThetaB;\n                    let thetaCenterA = theta1 + dThetaA / 2;\n                    let thetaCenterB = theta1 + dThetaB / 2;\n                    let dlA = dL * i;\n                    let dlB = dL * (i + 1);\n                    if(dThetaA > 1e-5 || dThetaA < -1e-5) {\n                        dlA = dlA / dThetaA * 2 * sin(dThetaA / 2);\n                    }\n                    if(dThetaB > 1e-5 || dThetaB < -1e-5) {\n                        dlB = dlB / dThetaB * 2 * sin(dThetaB / 2);\n                    }\n                    let pAdvA = Vector2(-sin(thetaCenterA), cos(thetaCenterA)) * dlA;\n                    let pAdvB = Vector2(-sin(thetaCenterB), cos(thetaCenterB)) * dlB;\n                    let pA = p1 + pAdvA;\n                    let pB = p1 + pAdvB;\n\n                    let dpA = Vector2(cos(thetaA), sin(thetaA)) * width * 0.5;\n                    let dpB = Vector2(cos(thetaB), sin(thetaB)) * width * 0.5;\n\n                    Triangle(pA + dpA, pB + dpB, pB - dpB, color);\n                    Triangle(pA + dpA, pB - dpB, pA - dpA, color);\n                }\n            }\n        ")["Wedge"];
    }
    mark.wedge = wedge;
    function polyline() {
        var spec = mark.compile("\n            import { Triangle } from P2D;\n\n            mark Sector2(\n                c: Vector2,\n                p1: Vector2,\n                p2: Vector2,\n                color: Color\n            ) {\n                let pc = c + normalize(p1 + p2 - c - c) * length(p1 - c);\n                Triangle(c, p1, pc, color);\n                Triangle(c, pc, p2, color);\n            }\n\n            mark Sector4(\n                c: Vector2,\n                p1: Vector2,\n                p2: Vector2,\n                color: Color\n            ) {\n                let pc = c + normalize(p1 + p2 - c - c) * length(p1 - c);\n                Sector2(c, p1, pc, color);\n                Sector2(c, pc, p2, color);\n            }\n\n            mark PolylineRound(\n                p: Vector2, p_p: Vector2, p_n: Vector2, p_nn: Vector2,\n                width: float = 1,\n                color: Color = [ 0, 0, 0, 1 ]\n            ) {\n                let EPS = 1e-5;\n                let w = width / 2;\n                let d = normalize(p - p_n);\n                let n = Vector2(d.y, -d.x);\n                let m1: Vector2;\n                if(length(p - p_p) < EPS) {\n                    m1 = n * w;\n                } else {\n                    m1 = normalize(d + normalize(p - p_p)) * w;\n                }\n                let m2: Vector2;\n                if(length(p_n - p_nn) < EPS) {\n                    m2 = -n * w;\n                } else {\n                    m2 = normalize(normalize(p_n - p_nn) - d) * w;\n                }\n                let c1a: Vector2;\n                let c1b: Vector2;\n                let a1: Vector2;\n                let a2: Vector2;\n                if(dot(m1, n) > 0) {\n                    c1a = p + m1;\n                    c1b = p + n * w;\n                    a2 = c1b;\n                    a1 = p - m1 * (w / dot(m1, n));\n                } else {\n                    c1a = p + m1;\n                    c1b = p - n * w;\n                    a2 = p + m1 * (w / dot(m1, n));\n                    a1 = c1b;\n                }\n                let c2a: Vector2;\n                let c2b: Vector2;\n                let b1: Vector2;\n                let b2: Vector2;\n                if(dot(m2, n) < 0) {\n                    c2a = p_n + m2;\n                    c2b = p_n - n * w;\n                    b1 = c2b;\n                    b2 = p_n + m2 * (w / dot(m2, n));\n                } else {\n                    c2a = p_n + m2;\n                    c2b = p_n + n * w;\n                    b2 = c2b;\n                    b1 = p_n - m2 * (w / dot(m2, n));\n                }\n                Sector4(p, c1a, c1b, color);\n                Sector4(p_n, c2a, c2b, color);\n                Triangle(p, a1, b1, color);\n                Triangle(p, b1, p_n, color);\n                Triangle(p, a2, b2, color);\n                Triangle(p, b2, p_n, color);\n            }\n        ")["PolylineRound"];
        spec.repeatBegin = 1;
        spec.repeatEnd = 1;
        return spec;
    }
    mark.polyline = polyline;
})(mark = exports.mark || (exports.mark = {}));
var shader;
(function (shader) {
    function compile(code) {
        return compiler_1.compileString(code);
    }
    shader.compile = compile;
    function basic() {
        return shader.compile("\n            shader Default(\n                color: Color = [ 0, 0, 0, 1 ]\n            ) {\n                emit { color: color };\n            }\n        ")["Default"];
    }
    shader.basic = basic;
    function lighting() {
        return shader.compile("\n            shader Default(\n                color: Color = [ 0, 0, 0, 1 ],\n                normal: Vector3,\n                position: Vector3\n            ) {\n                let lighting = normalize(position);\n                let NdotL = abs(dot(normal, lighting));\n                let s = NdotL * 0.5 + 0.5;\n                emit { color: Color(s * color.r, s * color.g, s * color.b, color.a) };\n            }\n        ")["Default"];
    }
    shader.lighting = lighting;
})(shader = exports.shader || (exports.shader = {}));

},{"../compiler/compiler":6,"../compiler/declare":7,"../platform/platform":19,"./mark":16}],18:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MathType = (function () {
    function MathType() {
    }
    return MathType;
}());
exports.MathType = MathType;
var Vector2 = (function (_super) {
    __extends(Vector2, _super);
    function Vector2(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        _super.call(this);
        this.x = x;
        this.y = y;
    }
    Vector2.prototype.clone = function () {
        return new Vector2(this.x, this.y);
    };
    Vector2.prototype.add = function (rhs) {
        return new Vector2(this.x + rhs.x, this.y + rhs.y);
    };
    Vector2.prototype.sub = function (rhs) {
        return new Vector2(this.x - rhs.x, this.y - rhs.y);
    };
    Vector2.prototype.mul = function (rhs) {
        return new Vector2(this.x * rhs.x, this.y * rhs.y);
    };
    Vector2.prototype.div = function (rhs) {
        return new Vector2(this.x / rhs.x, this.y / rhs.y);
    };
    Vector2.prototype.scale = function (rhs) {
        return new Vector2(this.x * rhs, this.y * rhs);
    };
    Vector2.prototype.dot = function (rhs) {
        return this.x * rhs.x + this.y * rhs.y;
    };
    Vector2.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Vector2.prototype.normalize = function () {
        var l = Math.sqrt(this.x * this.x + this.y * this.y);
        return new Vector3(this.x / l, this.y / l);
    };
    Vector2.prototype.toArray = function () {
        return [this.x, this.y];
    };
    Vector2.FromArray = function (_a) {
        var a = _a[0], b = _a[1];
        return new Vector2(a, b);
    };
    return Vector2;
}(MathType));
exports.Vector2 = Vector2;
var Vector3 = (function (_super) {
    __extends(Vector3, _super);
    function Vector3(x, y, z) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        _super.call(this);
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Vector3.prototype.clone = function () {
        return new Vector3(this.x, this.y, this.z);
    };
    Vector3.prototype.add = function (rhs) {
        return new Vector3(this.x + rhs.x, this.y + rhs.y, this.z + rhs.z);
    };
    Vector3.prototype.sub = function (rhs) {
        return new Vector3(this.x - rhs.x, this.y - rhs.y, this.z - rhs.z);
    };
    Vector3.prototype.mul = function (rhs) {
        return new Vector3(this.x * rhs.x, this.y * rhs.y, this.z * rhs.z);
    };
    Vector3.prototype.div = function (rhs) {
        return new Vector3(this.x / rhs.x, this.y / rhs.y, this.z / rhs.z);
    };
    Vector3.prototype.scale = function (rhs) {
        return new Vector3(this.x * rhs, this.y * rhs, this.z * rhs);
    };
    Vector3.prototype.dot = function (rhs) {
        return this.x * rhs.x + this.y * rhs.y + this.z * rhs.z;
    };
    Vector3.prototype.cross = function (rhs) {
        return new Vector3(this.y * rhs.z - this.z * rhs.y, this.z * rhs.x - this.x * rhs.z, this.x * rhs.y - this.y * rhs.x);
    };
    Vector3.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    };
    Vector3.prototype.normalize = function () {
        var l = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        return new Vector3(this.x / l, this.y / l, this.z / l);
    };
    Vector3.prototype.toArray = function () {
        return [this.x, this.y, this.z];
    };
    Vector3.FromArray = function (_a) {
        var a = _a[0], b = _a[1], c = _a[2];
        return new Vector3(a, b, c);
    };
    return Vector3;
}(MathType));
exports.Vector3 = Vector3;
var Quaternion = (function (_super) {
    __extends(Quaternion, _super);
    function Quaternion(x, y, z, w) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        if (w === void 0) { w = 0; }
        _super.call(this);
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    Quaternion.prototype.clone = function () {
        return new Quaternion(this.x, this.y, this.z, this.w);
    };
    Quaternion.prototype.conj = function () {
        return new Quaternion(-this.x, -this.y, -this.z, this.w);
    };
    Quaternion.prototype.mul = function (rhs) {
        return new Quaternion(rhs.x * this.w + this.x * rhs.w + this.y * rhs.z - this.z * rhs.y, rhs.y * this.w + this.y * rhs.w + this.z * rhs.x - this.x * rhs.z, rhs.z * this.w + this.z * rhs.w + this.x * rhs.y - this.y * rhs.x, this.w * rhs.w - this.x * rhs.x - this.y * rhs.y - this.z * rhs.z);
    };
    Quaternion.prototype.rotate = function (vector) {
        var q = new Quaternion(vector.x, vector.y, vector.z, 0);
        var qv = this.mul(q).mul(this.conj());
        return new Vector3(qv.x, qv.y, qv.z);
    };
    Quaternion.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.w * this.w);
    };
    Quaternion.prototype.normalize = function () {
        var s = Math.sqrt(this.x * this.x + this.y * this.y + this.w * this.w);
        return new Quaternion(this.x / s, this.y / s, this.z / s, this.w / s);
    };
    Quaternion.prototype.slerp = function (rhs, t) {
        return Quaternion.Slerp(this, rhs, t);
    };
    Quaternion.Slerp = function (q1, q2, t) {
        var acos_arg = q1.x * q2.x + q1.y * q2.y + q1.z * q2.z + q1.w * q2.w;
        if (acos_arg > 1)
            acos_arg = 1;
        if (acos_arg < -1)
            acos_arg = -1;
        var omega = Math.acos(acos_arg);
        var st0, st1;
        if (Math.abs(omega) < 1e-10) {
            st0 = 1 - t;
            st1 = t;
        }
        else {
            var som = Math.sin(omega);
            st0 = Math.sin((1 - t) * omega) / som;
            st1 = Math.sin(t * omega) / som;
        }
        return new Quaternion(q1.x * st0 + q2.x * st1, q1.y * st0 + q2.y * st1, q1.z * st0 + q2.z * st1, q1.w * st0 + q2.w * st1);
    };
    Quaternion.Rotation = function (axis, angle) {
        var axis_normal = axis.normalize().scale(Math.sin(angle / 2));
        return new Quaternion(axis_normal.x, axis_normal.y, axis_normal.z, Math.cos(angle / 2));
    };
    Quaternion.prototype.toArray = function () {
        return [this.x, this.y, this.z, this.w];
    };
    Quaternion.FromArray = function (_a) {
        var a = _a[0], b = _a[1], c = _a[2], d = _a[3];
        return new Quaternion(a, b, c, d);
    };
    return Quaternion;
}(MathType));
exports.Quaternion = Quaternion;
var Pose = (function () {
    function Pose(position, rotation) {
        if (position === void 0) { position = new Vector3(0, 0, 0); }
        if (rotation === void 0) { rotation = new Quaternion(0, 0, 0, 1); }
        this.position = position;
        this.rotation = rotation;
    }
    return Pose;
}());
exports.Pose = Pose;

},{}],19:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var utils_1 = require("../utils/utils");
var PlatformMarkData = (function () {
    function PlatformMarkData() {
    }
    return PlatformMarkData;
}());
exports.PlatformMarkData = PlatformMarkData;
var PlatformMark = (function () {
    function PlatformMark() {
    }
    return PlatformMark;
}());
exports.PlatformMark = PlatformMark;
var Viewport = (function () {
    function Viewport() {
    }
    return Viewport;
}());
exports.Viewport = Viewport;
var Viewport2D = (function (_super) {
    __extends(Viewport2D, _super);
    function Viewport2D(width, height) {
        _super.call(this);
        this.width = width;
        this.height = height;
    }
    return Viewport2D;
}(Viewport));
exports.Viewport2D = Viewport2D;
var Viewport3D = (function (_super) {
    __extends(Viewport3D, _super);
    function Viewport3D(width, height, fov) {
        _super.call(this);
        this.width = width;
        this.height = height;
        this.fov = fov;
    }
    return Viewport3D;
}(Viewport));
exports.Viewport3D = Viewport3D;
var Platform = (function () {
    function Platform() {
    }
    return Platform;
}());
exports.Platform = Platform;
var platformConstructors = new utils_1.Dictionary();
function registerPlatformConstructor(name, ctor) {
    platformConstructors.set(name, ctor);
}
exports.registerPlatformConstructor = registerPlatformConstructor;
function platform(name) {
    console.log('log in stardust')
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return platformConstructors.get(name).apply(void 0, args);
}
exports.platform = platform;

},{"../utils/utils":26}],20:[function(require,module,exports){
"use strict";
var ScaleBinding = (function () {
    function ScaleBinding(scale, returnType, argTypes) {
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        this._scale = scale;
        this._returnType = returnType;
        this._argTypes = argTypes;
        this._args = args;
    }
    ScaleBinding.prototype.getReturnType = function () {
        return this._returnType;
    };
    ScaleBinding.prototype.getAttributes = function () {
        var _this = this;
        var result = [];
        for (var _i = 0, _a = this._scale.getAttributes(); _i < _a.length; _i++) {
            var attr = _a[_i];
            result.push({
                scaleBinding: this,
                bindedName: "s" + attr.name,
                name: attr.name,
                type: attr.type,
                binding: attr.binding
            });
        }
        this._args.forEach(function (arg, index) {
            if (arg instanceof ScaleBinding) {
                var a = arg;
                var attributes = a.getAttributes();
                for (var _i = 0, attributes_1 = attributes; _i < attributes_1.length; _i++) {
                    var attr = attributes_1[_i];
                    result.push({
                        scaleBinding: _this,
                        bindedName: "a" + index + attr.bindedName,
                        name: attr.name,
                        type: attr.type,
                        binding: attr.binding
                    });
                }
            }
            else {
                // Binded values become attributes here.
                result.push({
                    scaleBinding: _this,
                    bindedName: "a" + index,
                    name: "a" + index,
                    type: _this._argTypes[index],
                    binding: arg
                });
            }
        });
        return result;
    };
    ScaleBinding.prototype.getExpression = function (attrs) {
        var sAttrs = {};
        for (var _i = 0, _a = this._scale.getAttributes(); _i < _a.length; _i++) {
            var attr = _a[_i];
            sAttrs[attr.name] = attrs[("s" + attr.name)];
        }
        var values = this._args.map(function (arg, index) {
            if (arg instanceof ScaleBinding) {
                var a = arg;
                var attributes = a.getAttributes();
                var aAttrs = {};
                for (var _i = 0, attributes_2 = attributes; _i < attributes_2.length; _i++) {
                    var attr = attributes_2[_i];
                    aAttrs[attr.bindedName] = attrs[("a" + index + attr.bindedName)];
                }
                return arg.getExpression(aAttrs);
            }
            else {
                return attrs[("a" + index)];
            }
        });
        return (_b = this._scale).getExpression.apply(_b, [sAttrs].concat(values));
        var _b;
    };
    return ScaleBinding;
}());
exports.ScaleBinding = ScaleBinding;

},{}],21:[function(require,module,exports){
"use strict";
// Prebuilt scales.
var utils_1 = require("../utils/utils");
var compiler_1 = require("../compiler/compiler");
var parser_1 = require("../compiler/parser");
var scale_1 = require("./scale");
var SC = require("../spec/construct");
var scale;
(function (scale_2) {
    function linear(valueType) {
        if (valueType === void 0) { valueType = "float"; }
        var scale = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            return new (scale_1.ScaleBinding.bind.apply(scale_1.ScaleBinding, [void 0].concat([scale, valueType, ["float"]], args)))();
        });
        var domain = [0, 1];
        var range = [0, 1];
        scale.domain = function (value) {
            if (value == null)
                return domain;
            domain[0] = value[0];
            domain[1] = value[1];
            return scale;
        };
        scale.range = function (value) {
            if (value == null)
                return range;
            range[0] = value[0];
            range[1] = value[1];
            return scale;
        };
        scale.getAttributes = function () {
            return [
                { name: "d0", type: valueType, binding: domain[0] },
                { name: "d1", type: valueType, binding: domain[1] },
                { name: "r0", type: valueType, binding: range[0] },
                { name: "r1", type: valueType, binding: range[1] }
            ];
        };
        scale.getExpression = function (attrs, value) {
            return SC.mix(attrs["r0"], attrs["r1"], SC.div(SC.sub(value, attrs["d0"]), SC.sub(attrs["d1"], attrs["d0"])));
        };
        return scale;
    }
    scale_2.linear = linear;
    function log(valueType) {
        if (valueType === void 0) { valueType = "float"; }
        var scale = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            return new (scale_1.ScaleBinding.bind.apply(scale_1.ScaleBinding, [void 0].concat([scale, valueType, ["float"]], args)))();
        });
        var domain = [0, 1];
        var range = [0, 1];
        scale.domain = function (value) {
            if (value == null)
                return domain;
            domain[0] = value[0];
            domain[1] = value[1];
            return scale;
        };
        scale.range = function (value) {
            if (value == null)
                return range;
            range[0] = value[0];
            range[1] = value[1];
            return scale;
        };
        scale.getAttributes = function () {
            return [
                { name: "d0", type: valueType, binding: domain[0] },
                { name: "d1", type: valueType, binding: domain[1] },
                { name: "r0", type: valueType, binding: range[0] },
                { name: "r1", type: valueType, binding: range[1] }
            ];
        };
        scale.getExpression = function (attrs, value) {
            return SC.mix(attrs["r0"], attrs["r1"], SC.div(SC.log(SC.div(value, attrs["d0"])), SC.log(SC.div(attrs["d1"], attrs["d0"]))));
        };
        return scale;
    }
    scale_2.log = log;
    // Common arithmetics
    function addScale() {
        var scale = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            return new (scale_1.ScaleBinding.bind.apply(scale_1.ScaleBinding, [void 0].concat([scale, "float", ["float", "float"]], args)))();
        });
        scale.getAttributes = function () { return []; };
        scale.getExpression = function (attrs, value1, value2) { return SC.add(value1, value2); };
        return scale;
    }
    scale_2.addScale = addScale;
    function subScale() {
        var scale = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            return new (scale_1.ScaleBinding.bind.apply(scale_1.ScaleBinding, [void 0].concat([scale, "float", ["float", "float"]], args)))();
        });
        scale.getAttributes = function () { return []; };
        scale.getExpression = function (attrs, value1, value2) { return SC.sub(value1, value2); };
        return scale;
    }
    scale_2.subScale = subScale;
    function mulScale() {
        var scale = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            return new (scale_1.ScaleBinding.bind.apply(scale_1.ScaleBinding, [void 0].concat([scale, "float", ["float", "float"]], args)))();
        });
        scale.getAttributes = function () { return []; };
        scale.getExpression = function (attrs, value1, value2) { return SC.mul(value1, value2); };
        return scale;
    }
    scale_2.mulScale = mulScale;
    function divScale() {
        var scale = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            return new (scale_1.ScaleBinding.bind.apply(scale_1.ScaleBinding, [void 0].concat([scale, "float", ["float", "float"]], args)))();
        });
        scale.getAttributes = function () { return []; };
        scale.getExpression = function (attrs, value1, value2) { return SC.div(value1, value2); };
        return scale;
    }
    scale_2.divScale = divScale;
    // Common arithmetics
    function vector2Scale() {
        var scale = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            return new (scale_1.ScaleBinding.bind.apply(scale_1.ScaleBinding, [void 0].concat([scale, "Vector2", ["float", "float"]], args)))();
        });
        scale.getAttributes = function () { return []; };
        scale.getExpression = function (attrs, value1, value2) { return SC.func("Vector2", "Vector2", value1, value2); };
        return scale;
    }
    scale_2.vector2Scale = vector2Scale;
    function add(value1, value2) {
        return addScale()(value1, value2);
    }
    scale_2.add = add;
    function sub(value1, value2) {
        return subScale()(value1, value2);
    }
    scale_2.sub = sub;
    function mul(value1, value2) {
        return mulScale()(value1, value2);
    }
    scale_2.mul = mul;
    function div(value1, value2) {
        return divScale()(value1, value2);
    }
    scale_2.div = div;
    function interpolate(valueType) {
        if (valueType === void 0) { valueType = "float"; }
        var scale = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            return new (scale_1.ScaleBinding.bind.apply(scale_1.ScaleBinding, [void 0].concat([scale, valueType, [valueType, valueType]], args)))();
        });
        var t;
        scale.t = function (value) {
            if (value == null)
                return t;
            t = value;
            return scale;
        };
        scale.getAttributes = function () {
            return [
                { name: "t", type: "float", binding: t }
            ];
        };
        scale.getExpression = function (attrs, value1, value2) {
            return SC.mix(value1, value2, attrs["t"]);
        };
        return scale;
    }
    scale_2.interpolate = interpolate;
    function Vector2(value1, value2) {
        return vector2Scale()(value1, value2);
    }
    scale_2.Vector2 = Vector2;
    function custom(expr) {
        var parsed = parser_1.parseExpression(expr);
        var scale = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            // Inference the return type
            var vars = new utils_1.Dictionary();
            attributes.forEach(function (attr, name) {
                vars.set(name, { type: "constant", valueType: attr.type, value: null });
            });
            vars.set("value", { type: "constant", valueType: "float", value: null });
            var e = compiler_1.compileExpression(parsed, vars);
            return new (scale_1.ScaleBinding.bind.apply(scale_1.ScaleBinding, [void 0].concat([scale, e.valueType, ["float"]], args)))();
        });
        var attributes = new utils_1.Dictionary();
        scale.attr = function (name, typeOrValue, value) {
            if (typeOrValue == null && value == null) {
                return attributes.get(name).value;
            }
            else if (typeof (typeOrValue) == "string") {
                attributes.set(name, { type: typeOrValue, value: value });
                return scale;
            }
            else {
                attributes.set(name, { type: "float", value: typeOrValue });
                return scale;
            }
        };
        scale.getAttributes = function () {
            var r = [];
            ;
            attributes.forEach(function (attr, name) {
                r.push({ name: name, type: attr.type, binding: attr.value });
            });
            return r;
        };
        scale.getExpression = function (attrs, value) {
            var vars = new utils_1.Dictionary();
            for (var name_1 in attrs) {
                if (attrs.hasOwnProperty(name_1)) {
                    vars.set(name_1, attrs[name_1]);
                }
            }
            vars.set("value", value);
            return compiler_1.compileExpression(parsed, vars);
        };
        return scale;
    }
    scale_2.custom = custom;
})(scale = exports.scale || (exports.scale = {}));

},{"../compiler/compiler":6,"../compiler/parser":8,"../spec/construct":22,"../utils/utils":26,"./scale":20}],22:[function(require,module,exports){
"use strict";
// Construct part of specification.
var intrinsics_1 = require("../intrinsics/intrinsics");
function func(name, returnType) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return {
        type: "function",
        functionName: intrinsics_1.getInternalName({
            name: name,
            argTypes: args.map(function (arg) { return arg.valueType; }),
            returnType: returnType
        }),
        arguments: args,
        valueType: returnType
    };
}
exports.func = func;
function op(name, returnType) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return {
        type: "function",
        functionName: intrinsics_1.getInternalName({
            name: "@" + name,
            argTypes: args.map(function (arg) { return arg.valueType; }),
            returnType: returnType
        }),
        valueType: returnType,
        arguments: args,
    };
}
exports.op = op;
function cast(from, to) {
    return {
        type: "function",
        functionName: intrinsics_1.getInternalName({
            name: "cast:" + from.valueType + ":" + to,
            argTypes: [from.valueType],
            returnType: to
        }),
        valueType: to,
        arguments: [from],
    };
}
exports.cast = cast;
function variable(varName, varType) {
    return {
        type: "variable",
        variableName: varName,
        valueType: varType
    };
}
exports.variable = variable;
function constant(value, valueType) {
    return {
        type: "constant",
        value: value,
        valueType: valueType
    };
}
exports.constant = constant;
function mix(a1, a2, t) {
    return func("mix", a1.valueType, a1, a2, t);
}
exports.mix = mix;
function exp(x) {
    return func("exp", "float", x);
}
exports.exp = exp;
function log(x) {
    return func("log", "float", x);
}
exports.log = log;
function add(a1, a2) {
    return op("+", a1.valueType, a1, a2);
}
exports.add = add;
function sub(a1, a2) {
    return op("-", a1.valueType, a1, a2);
}
exports.sub = sub;
function mul(a1, a2) {
    return op("*", a1.valueType, a1, a2);
}
exports.mul = mul;
function div(a1, a2) {
    return op("/", a1.valueType, a1, a2);
}
exports.div = div;
function equals(a1, a2) {
    return op("==", "bool", a1, a2);
}
exports.equals = equals;
function greaterThan(a1, a2) {
    return op(">", "bool", a1, a2);
}
exports.greaterThan = greaterThan;
function lessThan(a1, a2) {
    return op("<", "bool", a1, a2);
}
exports.lessThan = lessThan;
function greaterThanOrEquals(a1, a2) {
    return op(">=", "bool", a1, a2);
}
exports.greaterThanOrEquals = greaterThanOrEquals;
function lessThanOrEquals(a1, a2) {
    return op("<=", "bool", a1, a2);
}
exports.lessThanOrEquals = lessThanOrEquals;

},{"../intrinsics/intrinsics":12}],23:[function(require,module,exports){
"use strict";
exports.types = {
    "float": { name: "float", size: 4, primitive: "float", primitiveCount: 1 },
    "int": { name: "int", size: 4, primitive: "int", primitiveCount: 1 },
    "Vector2": { name: "Vector2", size: 8, primitive: "float", primitiveCount: 2 },
    "Vector3": { name: "Vector3", size: 12, primitive: "float", primitiveCount: 3 },
    "Quaternion": { name: "Quaternion", size: 16, primitive: "float", primitiveCount: 4 },
    "Color": { name: "Color", size: 16, primitive: "float", primitiveCount: 4 }
};

},{}],24:[function(require,module,exports){
// Flattener: Resolve emit statements into individual render calls.
"use strict";
var SC = require("../spec/construct");
var utils_1 = require("../utils/utils");
// For now, assume there is no conditional emits.
function flattenEmits(mark) {
    var vertexIndexNameFloat = utils_1.attemptName("s3idx", function (c) { return !mark.variables.hasOwnProperty(c) && !mark.input.hasOwnProperty(c); });
    var vertexIndexName = utils_1.attemptName("s3idx_i", function (c) { return !mark.variables.hasOwnProperty(c) && !mark.input.hasOwnProperty(c); });
    var emitIndexName = utils_1.attemptName("s3emitidx", function (c) { return !mark.variables.hasOwnProperty(c) && !mark.input.hasOwnProperty(c); });
    var newMark = {
        input: {},
        output: mark.output,
        variables: mark.variables,
        statements: [],
        repeatBegin: mark.repeatBegin,
        repeatEnd: mark.repeatEnd
    };
    for (var i in mark.input) {
        if (mark.input.hasOwnProperty(i)) {
            newMark.input[i] = mark.input[i];
        }
    }
    newMark.input[vertexIndexNameFloat] = {
        type: "float",
        default: 0
    };
    newMark.variables[vertexIndexName] = "int";
    newMark.variables[emitIndexName] = "int";
    newMark.statements.push({
        type: "assign",
        variableName: vertexIndexName,
        expression: SC.cast(SC.variable(vertexIndexNameFloat, "float"), "int")
    });
    newMark.statements.push({
        type: "assign",
        variableName: emitIndexName,
        expression: SC.constant(0, "int")
    });
    var generateStatements = function (statements) {
        var result = [];
        var maxNumberEmits = 0;
        for (var i = 0; i < statements.length; i++) {
            switch (statements[i].type) {
                case "emit":
                    {
                        result.push({
                            type: "condition",
                            condition: SC.equals(SC.variable(vertexIndexName, "int"), SC.variable(emitIndexName, "int")),
                            trueStatements: [statements[i]],
                            falseStatements: []
                        });
                        result.push({
                            type: "assign",
                            variableName: emitIndexName,
                            expression: SC.add(SC.variable(emitIndexName, "int"), SC.constant(1, "int"))
                        });
                        maxNumberEmits += 1;
                    }
                    break;
                case "for":
                    {
                        var forStatement = statements[i];
                        var _a = generateStatements(forStatement.statements), generatedStatements_1 = _a[0], maxNumber = _a[1];
                        var mappingMode = true;
                        if (mappingMode) {
                            // Here we assume for loops only alter its internal variables, not anything outside, so each turn is independent.
                            var tStatements = [];
                            tStatements.push({
                                type: "assign",
                                variableName: forStatement.variableName,
                                expression: SC.add(SC.div(SC.sub(SC.variable(vertexIndexName, "int"), SC.variable(emitIndexName, "int")), SC.constant(maxNumber, "int")), SC.constant(forStatement.rangeMin, "int"))
                            });
                            tStatements.push({
                                type: "assign",
                                variableName: emitIndexName,
                                expression: SC.add(SC.variable(emitIndexName, "int"), SC.mul(SC.constant(maxNumber, "int"), SC.sub(SC.variable(forStatement.variableName, "int"), SC.constant(forStatement.rangeMin, "int"))))
                            });
                            tStatements = tStatements.concat(generatedStatements_1);
                            tStatements.push({
                                type: "assign",
                                variableName: emitIndexName,
                                expression: SC.add(SC.variable(emitIndexName, "int"), SC.mul(SC.constant(maxNumber, "int"), SC.sub(SC.constant(forStatement.rangeMax, "int"), SC.variable(forStatement.variableName, "int"))))
                            });
                            result.push({
                                type: "condition",
                                condition: SC.op("&&", "bool", SC.greaterThanOrEquals(SC.variable(vertexIndexName, "int"), SC.variable(emitIndexName, "int")), SC.lessThan(SC.variable(vertexIndexName, "int"), SC.add(SC.variable(emitIndexName, "int"), SC.constant(maxNumber * (forStatement.rangeMax - forStatement.rangeMin + 1), "int")))),
                                trueStatements: tStatements,
                                falseStatements: [{
                                        type: "assign",
                                        variableName: emitIndexName,
                                        expression: SC.add(SC.variable(emitIndexName, "int"), SC.constant((forStatement.rangeMax - forStatement.rangeMin + 1) * maxNumber, "int"))
                                    }
                                ]
                            });
                        }
                        else {
                            result.push({
                                type: "for",
                                variableName: forStatement.variableName,
                                rangeMin: forStatement.rangeMin,
                                rangeMax: forStatement.rangeMax,
                                statements: generatedStatements_1
                            });
                        }
                        maxNumberEmits += (forStatement.rangeMax - forStatement.rangeMin + 1) * maxNumber;
                    }
                    break;
                case "condition":
                    {
                        var condStatement = statements[i];
                        var _b = generateStatements(condStatement.trueStatements), gTrueStatements = _b[0], gTrueStatementsMax = _b[1];
                        var _c = generateStatements(condStatement.falseStatements), gFalseStatements = _c[0], gFalseStatementsMax = _c[1];
                        result.push({
                            type: "condition",
                            condition: condStatement.condition,
                            trueStatements: gTrueStatements,
                            falseStatements: gFalseStatements
                        });
                        maxNumberEmits = Math.max(gTrueStatementsMax, gFalseStatementsMax);
                    }
                    break;
                default:
                    {
                        result.push(statements[i]);
                    }
                    break;
            }
        }
        return [result, maxNumberEmits];
    };
    var _a = generateStatements(mark.statements), generatedStatements = _a[0], maxNumberEmits = _a[1];
    newMark.statements = newMark.statements.concat(generatedStatements);
    return {
        specification: newMark,
        count: maxNumberEmits,
        indexVariable: vertexIndexNameFloat
    };
}
exports.flattenEmits = flattenEmits;

},{"../spec/construct":22,"../utils/utils":26}],25:[function(require,module,exports){
"use strict";
var flattener_1 = require("./flattener");
exports.flattenEmits = flattener_1.flattenEmits;

},{"./flattener":24}],26:[function(require,module,exports){
"use strict";
var Dictionary = (function () {
    function Dictionary() {
        this._dict = {};
    }
    Dictionary.prototype.set = function (key, value) {
        this._dict[key] = value;
    };
    Dictionary.prototype.has = function (key) {
        return this._dict.hasOwnProperty(key);
    };
    Dictionary.prototype.delete = function (key) {
        delete this._dict[key];
    };
    Dictionary.prototype.get = function (key) {
        if (this._dict.hasOwnProperty(key)) {
            return this._dict[key];
        }
        else {
            return undefined;
        }
    };
    Dictionary.prototype.forEach = function (cb) {
        for (var key in this._dict) {
            if (this._dict.hasOwnProperty(key)) {
                cb(this._dict[key], key);
            }
        }
    };
    Dictionary.prototype.clone = function () {
        var result = new Dictionary();
        this.forEach(function (value, key) {
            result.set(key, value);
        });
        return result;
    };
    return Dictionary;
}());
exports.Dictionary = Dictionary;
function shallowClone(object) {
    var result = {};
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            result[key] = object[key];
        }
    }
    return result;
}
exports.shallowClone = shallowClone;
function attemptName(prefix, check) {
    if (check(prefix))
        return prefix;
    for (var i = 1;; i++) {
        var c = prefix + i.toString();
        if (check(c))
            return c;
    }
}
exports.attemptName = attemptName;
function timeTask(name, cb) {
    var t0 = new Date().getTime();
    cb();
    var t1 = new Date().getTime();
    console.log(name + ": " + ((t1 - t0) / 1000).toFixed(3) + "s");
}
exports.timeTask = timeTask;

},{}],27:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.version = "0.1.1";
// Math classes and utilities
__export(require("./core/utils/utils"));
__export(require("./core/math/math"));
__export(require("./core/color/color"));
// Mark class and mark specification
__export(require("./core/mark/mark"));
__export(require("./core/mark/marks"));
__export(require("./core/binding/binding"));
__export(require("./core/spec/spec"));
__export(require("./core/intrinsics/intrinsics"));
__export(require("./core/exceptions"));
// Parsing and compiling
__export(require("./core/compiler/parser"));
__export(require("./core/compiler/compiler"));
__export(require("./core/compiler/declare"));
// Code transformation
__export(require("./core/transform/transforms"));
// Javascript context
__export(require("./core/evaluator/evaluator"));
// Platform base class
__export(require("./core/platform/platform"));
// Scales
__export(require("./core/scale/scale"));
var scales_1 = require("./core/scale/scales");
exports.scale = scales_1.scale;

},{"./core/binding/binding":3,"./core/color/color":5,"./core/compiler/compiler":6,"./core/compiler/declare":7,"./core/compiler/parser":8,"./core/evaluator/evaluator":10,"./core/exceptions":11,"./core/intrinsics/intrinsics":12,"./core/mark/mark":16,"./core/mark/marks":17,"./core/math/math":18,"./core/platform/platform":19,"./core/scale/scale":20,"./core/scale/scales":21,"./core/spec/spec":23,"./core/transform/transforms":25,"./core/utils/utils":26}],28:[function(require,module,exports){
/// <reference path="./earcut.d.ts" />
"use strict";
var stardust_core_1 = require("stardust-core");
var earcut = require("earcut");
function parseSVGTriangles(svg) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(svg, "image/svg+xml");
    function findNodeByType(node, type) {
        if (node instanceof Element) {
            if (node.tagName && node.tagName.toLowerCase() == type)
                return [node];
        }
        var nodes = [];
        for (var i = 0; i < node.children.length; i++) {
            nodes = nodes.concat(findNodeByType(node.children.item(i), type));
        }
        return nodes;
    }
    var svgNode = findNodeByType(doc, "svg")[0];
    var polygons = findNodeByType(doc, "polygon");
    var triangles = [];
    polygons.forEach(function (p) {
        var pointsString = p.getAttribute("points");
        var points = pointsString.split(/[, \t]/).map(function (x) { return x.trim(); }).filter(function (x) { return x != ""; }).map(function (x) { return parseFloat(x); });
        var cut = earcut(points);
        var color = "black";
        if (p.style.fill && p.style.fill != "")
            color = p.style.fill;
        for (var i = 0; i < cut.length; i += 3) {
            var i1 = cut[i + 0];
            var i2 = cut[i + 1];
            var i3 = cut[i + 2];
            var triangle = {
                p1: [points[i1 * 2], points[i1 * 2 + 1]],
                p2: [points[i2 * 2], points[i2 * 2 + 1]],
                p3: [points[i3 * 2], points[i3 * 2 + 1]],
                color: color
            };
            triangles.push(triangle);
        }
    });
    var parseSize = function (sz) {
        if (sz == null || sz == "")
            return 0;
        if (sz.match(/px$/))
            return parseFloat(sz.substr(0, sz.length - 2));
        if (sz.match(/em$/))
            return parseFloat(sz.substr(0, sz.length - 2));
        return parseFloat(sz);
    };
    return {
        x: parseSize(svgNode.getAttribute("x")),
        y: parseSize(svgNode.getAttribute("y")),
        width: parseSize(svgNode.getAttribute("width")),
        height: parseSize(svgNode.getAttribute("height")),
        triangles: triangles
    };
}
function isotype(svg) {
    var custom = stardust_core_1.mark.custom();
    custom.input("position", "Vector2", "[ 0, 0 ]");
    custom.input("size", "float", "1");
    custom.input("color", "Color", "[ 0, 0, 0, 1 ]");
    var triangles = parseSVGTriangles(svg);
    var cx = triangles.x + triangles.width / 2;
    var cy = triangles.y + triangles.height / 2;
    for (var _i = 0, _a = triangles.triangles; _i < _a.length; _i++) {
        var t = _a[_i];
        custom.add("P2D.Triangle")
            .attr("p1", "position + Vector2(" + (t.p1[0] - cx) + ", " + (t.p1[1] - cy) + ") * size")
            .attr("p2", "position + Vector2(" + (t.p2[0] - cx) + ", " + (t.p2[1] - cy) + ") * size")
            .attr("p3", "position + Vector2(" + (t.p3[0] - cx) + ", " + (t.p3[1] - cy) + ") * size")
            .attr("color", "color");
    }
    return custom.compile();
}
exports.isotype = isotype;

},{"earcut":29,"stardust-core":27}],29:[function(require,module,exports){
'use strict';

module.exports = earcut;

function earcut(data, holeIndices, dim) {

    dim = dim || 2;

    var hasHoles = holeIndices && holeIndices.length,
        outerLen = hasHoles ? holeIndices[0] * dim : data.length,
        outerNode = linkedList(data, 0, outerLen, dim, true),
        triangles = [];

    if (!outerNode) return triangles;

    var minX, minY, maxX, maxY, x, y, size;

    if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);

    // if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
    if (data.length > 80 * dim) {
        minX = maxX = data[0];
        minY = maxY = data[1];

        for (var i = dim; i < outerLen; i += dim) {
            x = data[i];
            y = data[i + 1];
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
        }

        // minX, minY and size are later used to transform coords into integers for z-order calculation
        size = Math.max(maxX - minX, maxY - minY);
    }

    earcutLinked(outerNode, triangles, dim, minX, minY, size);

    return triangles;
}

// create a circular doubly linked list from polygon points in the specified winding order
function linkedList(data, start, end, dim, clockwise) {
    var i, last;

    if (clockwise === (signedArea(data, start, end, dim) > 0)) {
        for (i = start; i < end; i += dim) last = insertNode(i, data[i], data[i + 1], last);
    } else {
        for (i = end - dim; i >= start; i -= dim) last = insertNode(i, data[i], data[i + 1], last);
    }

    if (last && equals(last, last.next)) {
        removeNode(last);
        last = last.next;
    }

    return last;
}

// eliminate colinear or duplicate points
function filterPoints(start, end) {
    if (!start) return start;
    if (!end) end = start;

    var p = start,
        again;
    do {
        again = false;

        if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
            removeNode(p);
            p = end = p.prev;
            if (p === p.next) return null;
            again = true;

        } else {
            p = p.next;
        }
    } while (again || p !== end);

    return end;
}

// main ear slicing loop which triangulates a polygon (given as a linked list)
function earcutLinked(ear, triangles, dim, minX, minY, size, pass) {
    if (!ear) return;

    // interlink polygon nodes in z-order
    if (!pass && size) indexCurve(ear, minX, minY, size);

    var stop = ear,
        prev, next;

    // iterate through ears, slicing them one by one
    while (ear.prev !== ear.next) {
        prev = ear.prev;
        next = ear.next;

        if (size ? isEarHashed(ear, minX, minY, size) : isEar(ear)) {
            // cut off the triangle
            triangles.push(prev.i / dim);
            triangles.push(ear.i / dim);
            triangles.push(next.i / dim);

            removeNode(ear);

            // skipping the next vertice leads to less sliver triangles
            ear = next.next;
            stop = next.next;

            continue;
        }

        ear = next;

        // if we looped through the whole remaining polygon and can't find any more ears
        if (ear === stop) {
            // try filtering points and slicing again
            if (!pass) {
                earcutLinked(filterPoints(ear), triangles, dim, minX, minY, size, 1);

            // if this didn't work, try curing all small self-intersections locally
            } else if (pass === 1) {
                ear = cureLocalIntersections(ear, triangles, dim);
                earcutLinked(ear, triangles, dim, minX, minY, size, 2);

            // as a last resort, try splitting the remaining polygon into two
            } else if (pass === 2) {
                splitEarcut(ear, triangles, dim, minX, minY, size);
            }

            break;
        }
    }
}

// check whether a polygon node forms a valid ear with adjacent nodes
function isEar(ear) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    // now make sure we don't have other points inside the potential ear
    var p = ear.next.next;

    while (p !== ear.prev) {
        if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.next;
    }

    return true;
}

function isEarHashed(ear, minX, minY, size) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    // triangle bbox; min & max are calculated like this for speed
    var minTX = a.x < b.x ? (a.x < c.x ? a.x : c.x) : (b.x < c.x ? b.x : c.x),
        minTY = a.y < b.y ? (a.y < c.y ? a.y : c.y) : (b.y < c.y ? b.y : c.y),
        maxTX = a.x > b.x ? (a.x > c.x ? a.x : c.x) : (b.x > c.x ? b.x : c.x),
        maxTY = a.y > b.y ? (a.y > c.y ? a.y : c.y) : (b.y > c.y ? b.y : c.y);

    // z-order range for the current triangle bbox;
    var minZ = zOrder(minTX, minTY, minX, minY, size),
        maxZ = zOrder(maxTX, maxTY, minX, minY, size);

    // first look for points inside the triangle in increasing z-order
    var p = ear.nextZ;

    while (p && p.z <= maxZ) {
        if (p !== ear.prev && p !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.nextZ;
    }

    // then look for points in decreasing z-order
    p = ear.prevZ;

    while (p && p.z >= minZ) {
        if (p !== ear.prev && p !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;
    }

    return true;
}

// go through all polygon nodes and cure small local self-intersections
function cureLocalIntersections(start, triangles, dim) {
    var p = start;
    do {
        var a = p.prev,
            b = p.next.next;

        if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {

            triangles.push(a.i / dim);
            triangles.push(p.i / dim);
            triangles.push(b.i / dim);

            // remove two nodes involved
            removeNode(p);
            removeNode(p.next);

            p = start = b;
        }
        p = p.next;
    } while (p !== start);

    return p;
}

// try splitting polygon into two and triangulate them independently
function splitEarcut(start, triangles, dim, minX, minY, size) {
    // look for a valid diagonal that divides the polygon into two
    var a = start;
    do {
        var b = a.next.next;
        while (b !== a.prev) {
            if (a.i !== b.i && isValidDiagonal(a, b)) {
                // split the polygon in two by the diagonal
                var c = splitPolygon(a, b);

                // filter colinear points around the cuts
                a = filterPoints(a, a.next);
                c = filterPoints(c, c.next);

                // run earcut on each half
                earcutLinked(a, triangles, dim, minX, minY, size);
                earcutLinked(c, triangles, dim, minX, minY, size);
                return;
            }
            b = b.next;
        }
        a = a.next;
    } while (a !== start);
}

// link every hole into the outer loop, producing a single-ring polygon without holes
function eliminateHoles(data, holeIndices, outerNode, dim) {
    var queue = [],
        i, len, start, end, list;

    for (i = 0, len = holeIndices.length; i < len; i++) {
        start = holeIndices[i] * dim;
        end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
        list = linkedList(data, start, end, dim, false);
        if (list === list.next) list.steiner = true;
        queue.push(getLeftmost(list));
    }

    queue.sort(compareX);

    // process holes from left to right
    for (i = 0; i < queue.length; i++) {
        eliminateHole(queue[i], outerNode);
        outerNode = filterPoints(outerNode, outerNode.next);
    }

    return outerNode;
}

function compareX(a, b) {
    return a.x - b.x;
}

// find a bridge between vertices that connects hole with an outer ring and and link it
function eliminateHole(hole, outerNode) {
    outerNode = findHoleBridge(hole, outerNode);
    if (outerNode) {
        var b = splitPolygon(outerNode, hole);
        filterPoints(b, b.next);
    }
}

// David Eberly's algorithm for finding a bridge between hole and outer polygon
function findHoleBridge(hole, outerNode) {
    var p = outerNode,
        hx = hole.x,
        hy = hole.y,
        qx = -Infinity,
        m;

    // find a segment intersected by a ray from the hole's leftmost point to the left;
    // segment's endpoint with lesser x will be potential connection point
    do {
        if (hy <= p.y && hy >= p.next.y) {
            var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
            if (x <= hx && x > qx) {
                qx = x;
                if (x === hx) {
                    if (hy === p.y) return p;
                    if (hy === p.next.y) return p.next;
                }
                m = p.x < p.next.x ? p : p.next;
            }
        }
        p = p.next;
    } while (p !== outerNode);

    if (!m) return null;

    if (hx === qx) return m.prev; // hole touches outer segment; pick lower endpoint

    // look for points inside the triangle of hole point, segment intersection and endpoint;
    // if there are no points found, we have a valid connection;
    // otherwise choose the point of the minimum angle with the ray as connection point

    var stop = m,
        mx = m.x,
        my = m.y,
        tanMin = Infinity,
        tan;

    p = m.next;

    while (p !== stop) {
        if (hx >= p.x && p.x >= mx &&
                pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {

            tan = Math.abs(hy - p.y) / (hx - p.x); // tangential

            if ((tan < tanMin || (tan === tanMin && p.x > m.x)) && locallyInside(p, hole)) {
                m = p;
                tanMin = tan;
            }
        }

        p = p.next;
    }

    return m;
}

// interlink polygon nodes in z-order
function indexCurve(start, minX, minY, size) {
    var p = start;
    do {
        if (p.z === null) p.z = zOrder(p.x, p.y, minX, minY, size);
        p.prevZ = p.prev;
        p.nextZ = p.next;
        p = p.next;
    } while (p !== start);

    p.prevZ.nextZ = null;
    p.prevZ = null;

    sortLinked(p);
}

// Simon Tatham's linked list merge sort algorithm
// http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
function sortLinked(list) {
    var i, p, q, e, tail, numMerges, pSize, qSize,
        inSize = 1;

    do {
        p = list;
        list = null;
        tail = null;
        numMerges = 0;

        while (p) {
            numMerges++;
            q = p;
            pSize = 0;
            for (i = 0; i < inSize; i++) {
                pSize++;
                q = q.nextZ;
                if (!q) break;
            }

            qSize = inSize;

            while (pSize > 0 || (qSize > 0 && q)) {

                if (pSize === 0) {
                    e = q;
                    q = q.nextZ;
                    qSize--;
                } else if (qSize === 0 || !q) {
                    e = p;
                    p = p.nextZ;
                    pSize--;
                } else if (p.z <= q.z) {
                    e = p;
                    p = p.nextZ;
                    pSize--;
                } else {
                    e = q;
                    q = q.nextZ;
                    qSize--;
                }

                if (tail) tail.nextZ = e;
                else list = e;

                e.prevZ = tail;
                tail = e;
            }

            p = q;
        }

        tail.nextZ = null;
        inSize *= 2;

    } while (numMerges > 1);

    return list;
}

// z-order of a point given coords and size of the data bounding box
function zOrder(x, y, minX, minY, size) {
    // coords are transformed into non-negative 15-bit integer range
    x = 32767 * (x - minX) / size;
    y = 32767 * (y - minY) / size;

    x = (x | (x << 8)) & 0x00FF00FF;
    x = (x | (x << 4)) & 0x0F0F0F0F;
    x = (x | (x << 2)) & 0x33333333;
    x = (x | (x << 1)) & 0x55555555;

    y = (y | (y << 8)) & 0x00FF00FF;
    y = (y | (y << 4)) & 0x0F0F0F0F;
    y = (y | (y << 2)) & 0x33333333;
    y = (y | (y << 1)) & 0x55555555;

    return x | (y << 1);
}

// find the leftmost node of a polygon ring
function getLeftmost(start) {
    var p = start,
        leftmost = start;
    do {
        if (p.x < leftmost.x) leftmost = p;
        p = p.next;
    } while (p !== start);

    return leftmost;
}

// check if a point lies within a convex triangle
function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
    return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 &&
           (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 &&
           (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
}

// check if a diagonal between two polygon nodes is valid (lies in polygon interior)
function isValidDiagonal(a, b) {
    return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) &&
           locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b);
}

// signed area of a triangle
function area(p, q, r) {
    return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
}

// check if two points are equal
function equals(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
}

// check if two segments intersect
function intersects(p1, q1, p2, q2) {
    if ((equals(p1, q1) && equals(p2, q2)) ||
        (equals(p1, q2) && equals(p2, q1))) return true;
    return area(p1, q1, p2) > 0 !== area(p1, q1, q2) > 0 &&
           area(p2, q2, p1) > 0 !== area(p2, q2, q1) > 0;
}

// check if a polygon diagonal intersects any polygon segments
function intersectsPolygon(a, b) {
    var p = a;
    do {
        if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i &&
                intersects(p, p.next, a, b)) return true;
        p = p.next;
    } while (p !== a);

    return false;
}

// check if a polygon diagonal is locally inside the polygon
function locallyInside(a, b) {
    return area(a.prev, a, a.next) < 0 ?
        area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 :
        area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
}

// check if the middle point of a polygon diagonal is inside the polygon
function middleInside(a, b) {
    var p = a,
        inside = false,
        px = (a.x + b.x) / 2,
        py = (a.y + b.y) / 2;
    do {
        if (((p.y > py) !== (p.next.y > py)) && (px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x))
            inside = !inside;
        p = p.next;
    } while (p !== a);

    return inside;
}

// link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
// if one belongs to the outer ring and another to a hole, it merges it into a single ring
function splitPolygon(a, b) {
    var a2 = new Node(a.i, a.x, a.y),
        b2 = new Node(b.i, b.x, b.y),
        an = a.next,
        bp = b.prev;

    a.next = b;
    b.prev = a;

    a2.next = an;
    an.prev = a2;

    b2.next = a2;
    a2.prev = b2;

    bp.next = b2;
    b2.prev = bp;

    return b2;
}

// create a node and optionally link it with previous one (in a circular doubly linked list)
function insertNode(i, x, y, last) {
    var p = new Node(i, x, y);

    if (!last) {
        p.prev = p;
        p.next = p;

    } else {
        p.next = last.next;
        p.prev = last;
        last.next.prev = p;
        last.next = p;
    }
    return p;
}

function removeNode(p) {
    p.next.prev = p.prev;
    p.prev.next = p.next;

    if (p.prevZ) p.prevZ.nextZ = p.nextZ;
    if (p.nextZ) p.nextZ.prevZ = p.prevZ;
}

function Node(i, x, y) {
    // vertice index in coordinates array
    this.i = i;

    // vertex coordinates
    this.x = x;
    this.y = y;

    // previous and next vertice nodes in a polygon ring
    this.prev = null;
    this.next = null;

    // z-order curve value
    this.z = null;

    // previous and next nodes in z-order
    this.prevZ = null;
    this.nextZ = null;

    // indicates whether this is a steiner point
    this.steiner = false;
}

// return a percentage difference between the polygon area and its triangulation area;
// used to verify correctness of triangulation
earcut.deviation = function (data, holeIndices, dim, triangles) {
    var hasHoles = holeIndices && holeIndices.length;
    var outerLen = hasHoles ? holeIndices[0] * dim : data.length;

    var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
    if (hasHoles) {
        for (var i = 0, len = holeIndices.length; i < len; i++) {
            var start = holeIndices[i] * dim;
            var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
            polygonArea -= Math.abs(signedArea(data, start, end, dim));
        }
    }

    var trianglesArea = 0;
    for (i = 0; i < triangles.length; i += 3) {
        var a = triangles[i] * dim;
        var b = triangles[i + 1] * dim;
        var c = triangles[i + 2] * dim;
        trianglesArea += Math.abs(
            (data[a] - data[c]) * (data[b + 1] - data[a + 1]) -
            (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
    }

    return polygonArea === 0 && trianglesArea === 0 ? 0 :
        Math.abs((trianglesArea - polygonArea) / polygonArea);
};

function signedArea(data, start, end, dim) {
    var sum = 0;
    for (var i = start, j = end - dim; i < end; i += dim) {
        sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
        j = i;
    }
    return sum;
}

// turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts
earcut.flatten = function (data) {
    var dim = data[0][0].length,
        result = {vertices: [], holes: [], dimensions: dim},
        holeIndex = 0;

    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
            for (var d = 0; d < dim; d++) result.vertices.push(data[i][j][d]);
        }
        if (i > 0) {
            holeIndex += data[i - 1].length;
            result.holes.push(holeIndex);
        }
    }
    return result;
};

},{}],30:[function(require,module,exports){
// Common code for GLSL-based shader languages
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var types_1 = require("./types");
var intrinsics_1 = require("./intrinsics");
var stardust_core_1 = require("stardust-core");
var LinesGenerator = (function () {
    function LinesGenerator() {
        this._lines = [];
        this._currentIndent = "";
        this._blocks = new stardust_core_1.Dictionary();
    }
    LinesGenerator.prototype.addNamedBlock = function (name, code) {
        if (this._blocks.has(name)) {
            this._blocks.set(name, this._blocks.get(name) + "\n" + code);
        }
        else {
            this._blocks.set(name, code);
        }
    };
    LinesGenerator.prototype.addLine = function (code) {
        this._lines.push(this._currentIndent + code);
    };
    LinesGenerator.prototype.indent = function () {
        this._currentIndent += "    ";
    };
    LinesGenerator.prototype.unindent = function () {
        this._currentIndent = this._currentIndent.slice(0, this._currentIndent.length - 4);
    };
    LinesGenerator.prototype.getCode = function () {
        var _this = this;
        return this._lines.map(function (line) {
            if (line[0] == "@" && _this._blocks.has(line.substr(1))) {
                return _this._blocks.get(line.substr(1));
            }
            else {
                return line;
            }
        }).join("\n");
    };
    return LinesGenerator;
}());
exports.LinesGenerator = LinesGenerator;
// The basic GLSL generator
var ShaderGenerator = (function (_super) {
    __extends(ShaderGenerator, _super);
    function ShaderGenerator() {
        _super.call(this);
    }
    ShaderGenerator.prototype.addAdditionalCode = function (code) {
        this.addNamedBlock("additionalCode", code);
    };
    ShaderGenerator.prototype.addDeclaration = function (name, type, modifier) {
        if (modifier === void 0) { modifier = null; }
        if (modifier == null) {
            this.addLine(types_1.convertTypeName(type) + " " + name + ";");
        }
        else {
            this.addLine(modifier + " " + types_1.convertTypeName(type) + " " + name + ";");
        }
    };
    ShaderGenerator.prototype.addArrayDeclaration = function (name, type, count, modifier) {
        if (count === void 0) { count = 1; }
        if (modifier === void 0) { modifier = null; }
        if (modifier == "null") {
            this.addLine(types_1.convertTypeName(type) + "[" + count + "] " + name + ";");
        }
        else {
            this.addLine(modifier + " " + types_1.convertTypeName(type) + "[" + count + "] " + name + ";");
        }
    };
    ShaderGenerator.prototype.addUniform = function (name, type) {
        this.addLine("uniform " + types_1.convertTypeName(type) + " " + name + ";");
        if (type == "Vector2Array" || type == "FloatArray" || type == "Vector3Array" || type == "Vector4Array" || type == "ColorArray") {
            this.addLine("uniform int " + name + "_length;");
        }
        if (type == "Vector2Image" || type == "FloatImage" || type == "Vector3Image" || type == "Vector4Image" || type == "Image") {
            this.addLine("uniform int " + name + "_width;");
            this.addLine("uniform int " + name + "_height;");
        }
    };
    ShaderGenerator.prototype.addAttribute = function (name, type) {
        this.addLine("attribute " + types_1.convertTypeName(type) + " " + name + ";");
    };
    ShaderGenerator.prototype.addVarying = function (name, type) {
        this.addLine("varying " + types_1.convertTypeName(type) + " " + name + ";");
    };
    ShaderGenerator.prototype.addIn = function (name, type) {
        this.addLine("in " + types_1.convertTypeName(type) + " " + name + ";");
    };
    ShaderGenerator.prototype.addOut = function (name, type) {
        this.addLine("out " + types_1.convertTypeName(type) + " " + name + ";");
    };
    ShaderGenerator.prototype.generateExpression = function (expr) {
        var _this = this;
        switch (expr.type) {
            case "constant": {
                var eConstant = expr;
                return types_1.convertConstant(eConstant.valueType, eConstant.value);
            }
            case "variable": {
                var eVariable = expr;
                return eVariable.variableName;
            }
            case "function": {
                var eFunction = expr;
                var args = eFunction.arguments.map(function (arg) { return _this.generateExpression(arg); });
                var _a = intrinsics_1.generateIntrinsicFunction(eFunction.functionName, args), code = _a.code, additionalCode = _a.additionalCode;
                if (additionalCode != null) {
                    this.addAdditionalCode(additionalCode);
                }
                return code;
            }
            case "field": {
                var eField = expr;
                return this.generateExpression(eField.value) + "." + eField.fieldName;
            }
        }
    };
    ShaderGenerator.prototype.addStatement = function (stat) {
        switch (stat.type) {
            case "assign":
                {
                    var sAssign = stat;
                    var expr = this.generateExpression(sAssign.expression);
                    this.addLine(sAssign.variableName + " = " + expr + ";");
                }
                break;
            case "condition":
                {
                    var sCondition = stat;
                    if (sCondition.trueStatements.length > 0 && sCondition.falseStatements.length > 0) {
                        this.addLine("if(" + this.generateExpression(sCondition.condition) + ") {");
                        this.indent();
                        this.addStatements(sCondition.trueStatements);
                        this.unindent();
                        this.addLine("} else {");
                        this.indent();
                        this.addStatements(sCondition.falseStatements);
                        this.unindent();
                        this.addLine("}");
                    }
                    else if (sCondition.trueStatements.length > 0) {
                        this.addLine("if(" + this.generateExpression(sCondition.condition) + ") {");
                        this.indent();
                        this.addStatements(sCondition.trueStatements);
                        this.unindent();
                        this.addLine("}");
                    }
                    else if (sCondition.falseStatements.length > 0) {
                        this.addLine("if(!" + this.generateExpression(sCondition.condition) + ") {");
                        this.indent();
                        this.addStatements(sCondition.trueStatements);
                        this.unindent();
                        this.addLine("}");
                    }
                }
                break;
            case "for":
                {
                    var sForLoop = stat;
                    this.addLine("for(int " + sForLoop.variableName + " = " + sForLoop.rangeMin + "; " + sForLoop.variableName + " <= " + sForLoop.rangeMax + "; " + sForLoop.variableName + "++) {");
                    this.indent();
                    this.addStatements(sForLoop.statements);
                    this.unindent();
                    this.addLine("}");
                }
                break;
            case "emit":
                {
                    var sEmit = stat;
                    this.addEmitStatement(sEmit);
                }
                break;
        }
    };
    ShaderGenerator.prototype.addStatements = function (stat) {
        var _this = this;
        stat.forEach(function (s) { return _this.addStatement(s); });
    };
    // Override these
    ShaderGenerator.prototype.addEmitStatement = function (s) {
        this.addLine("// Emit Statement");
    };
    return ShaderGenerator;
}(LinesGenerator));
exports.ShaderGenerator = ShaderGenerator;
var ProgramGenerator = (function () {
    function ProgramGenerator(spec, shader, asUniform) {
        var _this = this;
        this._spec = spec;
        this._shader = shader;
        this._asUniform = asUniform;
        // Make a record of existing names
        this._names = {};
        var record_names = function (map) {
            for (var name_1 in map) {
                if (map.hasOwnProperty(name_1)) {
                    _this._names[name_1] = true;
                }
            }
        };
        record_names(spec.input);
        record_names(spec.output);
        record_names(spec.variables);
        record_names(shader.input);
        record_names(shader.output);
    }
    ProgramGenerator.prototype.getUnusedName = function (hint) {
        var index = 0;
        while (true) {
            var candidate = "s3" + hint + index.toString();
            if (this._names[candidate] === true) {
                index += 1;
                continue;
            }
            this._names[candidate] = true;
            return candidate;
        }
    };
    // Should we pass the mark input `name` to the fragment shader?
    ProgramGenerator.prototype.fragmentPassthru = function (name) {
        return this._spec.input.hasOwnProperty(name) && !this._spec.output.hasOwnProperty(name);
    };
    return ProgramGenerator;
}());
exports.ProgramGenerator = ProgramGenerator;

},{"./intrinsics":31,"./types":32,"stardust-core":27}],31:[function(require,module,exports){
"use strict";
var stardust_core_1 = require("stardust-core");
var stardust_core_2 = require("stardust-core");
var intrinsicImplementations = new stardust_core_2.Dictionary();
var intrinsicsCodeBase = new stardust_core_2.Dictionary();
function ImplementFunction(name, argTypes, returnType, code) {
    var internalName = stardust_core_1.getInternalName({ name: name, argTypes: argTypes, returnType: returnType });
    intrinsicImplementations.set(internalName, code);
}
function ImplementSimpleFunction(name, argTypes, returnType, funcName, funcCode) {
    ImplementFunction(name, argTypes, returnType, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return funcName + "(" + args.join(", ") + ")";
    });
    if (funcCode) {
        var internalName = stardust_core_1.getInternalName({ name: name, argTypes: argTypes, returnType: returnType });
        intrinsicsCodeBase.set(internalName, funcCode);
    }
}
function ImplementOperator(name, argTypes, returnType, code) {
    ImplementFunction("@" + name, argTypes, returnType, code);
}
function ImplementTypeConversion(srcType, destType, code) {
    ImplementFunction("cast:" + srcType + ":" + destType, [srcType], destType, code);
}
for (var _i = 0, _a = ["float", "int", "Vector2", "Vector3", "Vector4", "Color"]; _i < _a.length; _i++) {
    var type = _a[_i];
    ImplementOperator("+", [type, type], type, function (a, b) { return ("(" + a + ") + (" + b + ")"); });
    ImplementOperator("-", [type, type], type, function (a, b) { return ("(" + a + ") - (" + b + ")"); });
    ImplementOperator("*", [type, type], type, function (a, b) { return ("(" + a + ") * (" + b + ")"); });
    ImplementOperator("/", [type, type], type, function (a, b) { return ("(" + a + ") / (" + b + ")"); });
    if (type != "Color") {
        ImplementOperator("+", [type], type, function (a, b) { return ("" + a); });
        ImplementOperator("-", [type], type, function (a, b) { return ("-(" + a + ")"); });
    }
}
ImplementOperator("*", ["float", "Vector2"], "Vector2", function (a, b) { return ("(" + a + ") * (" + b + ")"); });
ImplementOperator("*", ["float", "Vector3"], "Vector3", function (a, b) { return ("(" + a + ") * (" + b + ")"); });
ImplementOperator("*", ["float", "Vector4"], "Vector4", function (a, b) { return ("(" + a + ") * (" + b + ")"); });
ImplementOperator("*", ["Vector2", "float"], "Vector2", function (a, b) { return ("(" + a + ") * (" + b + ")"); });
ImplementOperator("*", ["Vector3", "float"], "Vector3", function (a, b) { return ("(" + a + ") * (" + b + ")"); });
ImplementOperator("*", ["Vector4", "float"], "Vector4", function (a, b) { return ("(" + a + ") * (" + b + ")"); });
ImplementOperator("/", ["Vector2", "float"], "Vector2", function (a, b) { return ("(" + a + ") / (" + b + ")"); });
ImplementOperator("/", ["Vector3", "float"], "Vector3", function (a, b) { return ("(" + a + ") / (" + b + ")"); });
ImplementOperator("/", ["Vector4", "float"], "Vector4", function (a, b) { return ("(" + a + ") / (" + b + ")"); });
// ImplementOperator("%", [ "int", "int" ], "int", (a, b) => `(${a}) % (${b})`);
ImplementOperator("%", ["float", "float"], "float", function (a, b) { return ("mod(" + a + ", " + b + ")"); });
for (var _b = 0, _c = ["float", "int", "bool"]; _b < _c.length; _b++) {
    var type = _c[_b];
    ImplementOperator("==", [type, type], "bool", function (a, b) { return ("(" + a + ") == (" + b + ")"); });
}
for (var _d = 0, _e = ["float", "int"]; _d < _e.length; _d++) {
    var type = _e[_d];
    ImplementOperator(">", [type, type], "bool", function (a, b) { return ("(" + a + ") > (" + b + ")"); });
    ImplementOperator("<", [type, type], "bool", function (a, b) { return ("(" + a + ") < (" + b + ")"); });
    ImplementOperator(">=", [type, type], "bool", function (a, b) { return ("(" + a + ") >= (" + b + ")"); });
    ImplementOperator("<=", [type, type], "bool", function (a, b) { return ("(" + a + ") <= (" + b + ")"); });
}
ImplementOperator("!", ["bool"], "bool", function (a) { return ("!(" + a + ")"); });
ImplementOperator("&&", ["bool", "bool"], "bool", function (a, b) { return ("(" + a + ") && (" + b + ")"); });
ImplementOperator("||", ["bool", "bool"], "bool", function (a, b) { return ("(" + a + ") || (" + b + ")"); });
ImplementSimpleFunction("Vector2", ["float", "float"], "Vector2", "vec2");
ImplementSimpleFunction("Vector3", ["float", "float", "float"], "Vector3", "vec3");
ImplementSimpleFunction("Vector4", ["float", "float", "float", "float"], "Vector4", "vec4");
ImplementSimpleFunction("Color", ["float", "float", "float", "float"], "Color", "vec4");
ImplementSimpleFunction("Quaternion", ["float", "float", "float", "float"], "Quaternion", "vec4");
ImplementSimpleFunction("normalize", ["Vector2"], "Vector2", "normalize");
ImplementSimpleFunction("normalize", ["Vector3"], "Vector3", "normalize");
ImplementSimpleFunction("normalize", ["Vector4"], "Vector4", "normalize");
ImplementSimpleFunction("normalize", ["Quaternion"], "Vector4", "normalize");
ImplementSimpleFunction("dot", ["Vector2", "Vector2"], "float", "dot");
ImplementSimpleFunction("dot", ["Vector3", "Vector3"], "float", "dot");
ImplementSimpleFunction("dot", ["Vector4", "Vector4"], "float", "dot");
ImplementSimpleFunction("length", ["Vector2"], "float", "length");
ImplementSimpleFunction("length", ["Vector3"], "float", "length");
ImplementSimpleFunction("length", ["Vector4"], "float", "length");
ImplementSimpleFunction("length", ["Quaternion"], "float", "length");
ImplementSimpleFunction("cross", ["Vector3", "Vector3"], "Vector3", "cross");
ImplementSimpleFunction("quat_mul", ["Quaternion", "Quaternion"], "Quaternion", "s3_quat_mul", "\n    vec4 s3_quat_mul(vec4 q1, vec4 q2) {\n        return vec4(\n            q1.w * q2.xyz + q2.w * q1.xyz + cross(q1.xyz, q2.xyz),\n            q1.w * q2.w - dot(q1.xyz, q2.xyz)\n        );\n    }\n");
ImplementSimpleFunction("quat_rotate", ["Quaternion", "Vector3"], "Vector3", "s3_quat_rotate", "\n    vec3 s3_quat_rotate(vec4 q, vec3 v) {\n        float d = dot(q.xyz, v);\n        vec3 c = cross(q.xyz, v);\n        return q.w * q.w * v + (q.w + q.w) * c + d * q.xyz - cross(c, q.xyz);\n    }\n");
var colorCode = "\n    float s3_lab2rgb_curve(float v) {\n        float p = pow(v, 3.0);\n        if(p > 0.008856) {\n            return p;\n        } else {\n            return (v - 16.0 / 116.0) / 7.787;\n        }\n    }\n    float s3_lab2rgb_curve2(float v) {\n        if(v > 0.0031308) {\n            return 1.055 * pow(v , (1.0 / 2.4)) - 0.055;\n        } else {\n            return 12.92 * v;\n        }\n    }\n    vec4 s3_lab2rgb(vec4 lab) {\n        float var_Y = (lab.x + 0.160) / 1.160;\n        float var_X = lab.y / 5.0 + var_Y;\n        float var_Z = var_Y - lab.z / 2.0;\n\n        var_X = s3_lab2rgb_curve(var_X) * 0.95047;\n        var_Y = s3_lab2rgb_curve(var_Y);\n        var_Z = s3_lab2rgb_curve(var_Z) * 1.08883;\n\n        float var_R = var_X *  3.2406 + var_Y * -1.5372 + var_Z * -0.4986;\n        float var_G = var_X * -0.9689 + var_Y *  1.8758 + var_Z *  0.0415;\n        float var_B = var_X *  0.0557 + var_Y * -0.2040 + var_Z *  1.0570;\n\n        var_R = s3_lab2rgb_curve2(var_R);\n        var_G = s3_lab2rgb_curve2(var_G);\n        var_B = s3_lab2rgb_curve2(var_B);\n\n        return vec4(var_R, var_G, var_B, lab.a);\n    }\n    vec4 s3_hcl2rgb(vec4 hcl) {\n        vec4 lab = vec4(hcl.z, hcl.y * cos(hcl.x), hcl.y * sin(hcl.x), hcl.a);\n        return s3_lab2rgb(lab);\n    }\n";
ImplementSimpleFunction("lab2rgb", ["Color"], "Color", "s3_lab2rgb", colorCode);
ImplementSimpleFunction("hcl2rgb", ["Color"], "Color", "s3_hcl2rgb", colorCode);
ImplementSimpleFunction("abs", ["float"], "float", "abs");
ImplementSimpleFunction("sqrt", ["float"], "float", "sqrt");
ImplementSimpleFunction("exp", ["float"], "float", "exp");
ImplementSimpleFunction("log", ["float"], "float", "log");
ImplementSimpleFunction("sin", ["float"], "float", "sin");
ImplementSimpleFunction("cos", ["float"], "float", "cos");
ImplementSimpleFunction("tan", ["float"], "float", "tan");
ImplementSimpleFunction("asin", ["float"], "float", "asin");
ImplementSimpleFunction("acos", ["float"], "float", "acos");
ImplementSimpleFunction("atan", ["float"], "float", "atan");
ImplementSimpleFunction("atan2", ["float", "float"], "float", "atan2");
ImplementSimpleFunction("abs", ["int"], "int", "abs");
ImplementSimpleFunction("min", ["float", "float"], "float", "min");
ImplementSimpleFunction("max", ["float", "float"], "float", "max");
ImplementSimpleFunction("ceil", ["float"], "float", "ceil");
ImplementSimpleFunction("floor", ["float"], "float", "floor");
ImplementSimpleFunction("mix", ["float", "float", "float"], "float", "mix");
ImplementSimpleFunction("mix", ["Vector2", "Vector2", "float"], "Vector2", "mix");
ImplementSimpleFunction("mix", ["Vector3", "Vector3", "float"], "Vector3", "mix");
ImplementSimpleFunction("mix", ["Vector4", "Vector4", "float"], "Vector4", "mix");
ImplementSimpleFunction("mix", ["Color", "Color", "float"], "Color", "mix");
ImplementFunction("clamp", ["float"], "float", function (a) { return ("clamp(" + a + ", 0, 1)"); });
ImplementTypeConversion("float", "int", function (a) { return ("int(" + a + ")"); });
ImplementTypeConversion("int", "float", function (a) { return ("float(" + a + ")"); });
ImplementFunction("array", ["FloatArray", "float"], "float", function (a, b) { return ("texture2D(" + a + ", vec2((" + b + " + 0.5) / float(" + a + "_length), 0.5)).x"); });
ImplementFunction("array", ["Vector2Array", "float"], "Vector2", function (a, b) { return ("texture2D(" + a + ", vec2((" + b + " + 0.5) / float(" + a + "_length), 0.5)).xy"); });
ImplementFunction("array", ["Vector3Array", "float"], "Vector3", function (a, b) { return ("texture2D(" + a + ", vec2((" + b + " + 0.5) / float(" + a + "_length), 0.5)).xyz"); });
ImplementFunction("array", ["Vector4Array", "float"], "Vector4", function (a, b) { return ("texture2D(" + a + ", vec2((" + b + " + 0.5) / float(" + a + "_length), 0.5)).xyzw"); });
ImplementFunction("array", ["ColorArray", "float"], "Color", function (a, b) { return ("texture2D(" + a + ", vec2((" + b + " + 0.5) / float(" + a + "_length), 0.5)).rgba"); });
ImplementFunction("image", ["FloatImage", "Vector2"], "float", function (a, b) { return ("texture2D(" + a + ", (" + b + " + 0.5) / vec2(" + a + "_width, " + a + "_height))).x"); });
ImplementFunction("image", ["Vector2Image", "Vector2"], "Vector2", function (a, b) { return ("texture2D(" + a + ", (" + b + " + 0.5) / vec2(" + a + "_width, " + a + "_height))).xy"); });
ImplementFunction("image", ["Vector3Image", "Vector2"], "Vector3", function (a, b) { return ("texture2D(" + a + ", (" + b + " + 0.5) / vec2(" + a + "_width, " + a + "_height))).xyz"); });
ImplementFunction("image", ["Vector4Image", "Vector2"], "Vector4", function (a, b) { return ("texture2D(" + a + ", (" + b + " + 0.5) / vec2(" + a + "_width, " + a + "_height))).xyzw"); });
ImplementFunction("image", ["ColorImage", "Vector2"], "Color", function (a, b) { return ("texture2D(" + a + ", (" + b + " + 0.5) / vec2(" + a + "_width, " + a + "_height))).rgba"); });
function generateIntrinsicFunction(name, args) {
    if (intrinsicImplementations.has(name)) {
        if (intrinsicsCodeBase.has(name)) {
            return { code: intrinsicImplementations.get(name).apply(void 0, args), additionalCode: intrinsicsCodeBase.get(name) };
        }
        else {
            return { code: intrinsicImplementations.get(name).apply(void 0, args), additionalCode: null };
        }
    }
    else {
        throw new Error("intrinsic function " + name + " is not defined.");
    }
}
exports.generateIntrinsicFunction = generateIntrinsicFunction;

},{"stardust-core":27}],32:[function(require,module,exports){
// Declare the types
"use strict";
var typeName2GLSLTypeName = {
    "float": "float",
    "int": "int",
    "bool": "bool",
    "Vector2": "vec2",
    "Vector3": "vec3",
    "Vector4": "vec4",
    "Matrix3": "mat3",
    "Matrix4": "mat4",
    "Quaternion": "vec4",
    "Color": "vec4",
    "FloatArray": "sampler2D",
    "Vector2Array": "sampler2D",
    "Vector3Array": "sampler2D",
    "Vector4Array": "sampler2D"
};
function convertTypeName(name) {
    return typeName2GLSLTypeName[name];
}
exports.convertTypeName = convertTypeName;
function convertConstant(type, value) {
    if (type == "float") {
        return value.toFixed(5);
    }
    if (type == "int") {
        return value.toString();
    }
    if (type == "bool") {
        return value != 0 ? "true" : "false";
    }
    if (type == "Vector2") {
        return "vec2(" + value.join(", ") + ")";
    }
    if (type == "Vector3") {
        return "vec3(" + value.join(", ") + ")";
    }
    if (type == "Vector4") {
        return "vec4(" + value.join(", ") + ")";
    }
    if (type == "Quaternion") {
        return "vec4(" + value.join(", ") + ")";
    }
    if (type == "Color") {
        return "vec4(" + value.join(", ") + ")";
    }
}
exports.convertConstant = convertConstant;

},{}],33:[function(require,module,exports){
"use strict";
exports.version = "0.1.1";
var webgl_1 = require("./webgl/webgl");
exports.WebGLPlatform = webgl_1.WebGLPlatform;
exports.WebGLCanvasPlatform2D = webgl_1.WebGLCanvasPlatform2D;
exports.WebGLCanvasPlatform3D = webgl_1.WebGLCanvasPlatform3D;
exports.WebGLCanvasPlatformWebVR = webgl_1.WebGLCanvasPlatformWebVR;
var stardust_core_1 = require("stardust-core");
var webgl_2 = require("./webgl/webgl");
stardust_core_1.registerPlatformConstructor("webgl-2d", function (canvas, width, height) {
    if (width === void 0) { width = 600; }
    if (height === void 0) { height = 400; }
    return new webgl_2.WebGLCanvasPlatform2D(canvas, width, height);
});
stardust_core_1.registerPlatformConstructor("webgl-3d", function (canvas, width, height) {
    if (width === void 0) { width = 600; }
    if (height === void 0) { height = 400; }
    return new webgl_2.WebGLCanvasPlatform3D(canvas, width, height);
});
stardust_core_1.registerPlatformConstructor("webgl-webvr", function (canvas, width, height) {
    if (width === void 0) { width = 600; }
    if (height === void 0) { height = 400; }
    return new webgl_2.WebGLCanvasPlatformWebVR(canvas, width, height);
});

},{"./webgl/webgl":35,"stardust-core":27}],34:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var glsl_1 = require("../glsl/glsl");
var stardust_core_1 = require("stardust-core");
(function (GenerateMode) {
    GenerateMode[GenerateMode["NORMAL"] = 0] = "NORMAL";
    GenerateMode[GenerateMode["PICK"] = 1] = "PICK";
    GenerateMode[GenerateMode["FRAGMENT"] = 2] = "FRAGMENT";
})(exports.GenerateMode || (exports.GenerateMode = {}));
var GenerateMode = exports.GenerateMode;
(function (ViewType) {
    ViewType[ViewType["VIEW_2D"] = 0] = "VIEW_2D";
    ViewType[ViewType["VIEW_3D"] = 1] = "VIEW_3D";
    ViewType[ViewType["VIEW_WEBVR"] = 2] = "VIEW_WEBVR"; // WebVR mode.
})(exports.ViewType || (exports.ViewType = {}));
var ViewType = exports.ViewType;
var GLSLVertexShaderGenerator = (function (_super) {
    __extends(GLSLVertexShaderGenerator, _super);
    function GLSLVertexShaderGenerator(parent) {
        _super.call(this);
        this._parent = parent;
    }
    GLSLVertexShaderGenerator.prototype.addEmitStatement = function (sEmit) {
        for (var name_1 in sEmit.attributes) {
            this.addLine(this._parent._voutMapping.get(name_1) + " = " + this.generateExpression(sEmit.attributes[name_1]) + ";");
        }
        if (this._parent._mode == GenerateMode.PICK) {
            this.addLine("out_pick_index = vec4(s3_pick_index.rgb, s3_pick_index_alpha);");
        }
        var position = this._parent._voutMapping.get("position");
        switch (this._parent._spec.output["position"].type) {
            case "Vector2":
                {
                    this.addLine("gl_Position = s3_render_vertex(vec3(" + position + ", 0.0));");
                }
                break;
            case "Vector3":
                {
                    this.addLine("gl_Position = s3_render_vertex(" + position + ");");
                }
                break;
            case "Vector4":
                {
                    this.addLine("gl_Position = s3_render_vertex(" + position + ".xyz);");
                }
                break;
        }
    };
    return GLSLVertexShaderGenerator;
}(glsl_1.ShaderGenerator));
exports.GLSLVertexShaderGenerator = GLSLVertexShaderGenerator;
var GLSLFragmentShaderGenerator = (function (_super) {
    __extends(GLSLFragmentShaderGenerator, _super);
    function GLSLFragmentShaderGenerator(parent) {
        _super.call(this);
        this._parent = parent;
    }
    GLSLFragmentShaderGenerator.prototype.addEmitStatement = function (sEmit) {
        this.addLine("gl_FragColor = " + this.generateExpression(sEmit.attributes["color"]) + ";");
    };
    return GLSLFragmentShaderGenerator;
}(glsl_1.ShaderGenerator));
exports.GLSLFragmentShaderGenerator = GLSLFragmentShaderGenerator;
var Generator = (function (_super) {
    __extends(Generator, _super);
    function Generator(spec, shader, asUniform, viewType, mode) {
        if (mode === void 0) { mode = GenerateMode.NORMAL; }
        _super.call(this, spec, shader, asUniform);
        this._mode = mode;
        this._viewType = viewType;
        this._vertex = new GLSLVertexShaderGenerator(this);
        this._fragment = new GLSLFragmentShaderGenerator(this);
        this.compile();
    }
    Generator.prototype.compile = function () {
        var _this = this;
        var spec = this._spec;
        var shader = this._shader;
        var asUniform = this._asUniform;
        this._voutMapping = new stardust_core_1.Dictionary();
        this._foutMapping = new stardust_core_1.Dictionary();
        this._vertex.addLine("precision highp float;");
        this._fragment.addLine("precision highp float;");
        if (this._mode == GenerateMode.PICK) {
            this._vertex.addAttribute("s3_pick_index", "Vector4");
            this._vertex.addUniform("s3_pick_index_alpha", "float");
        }
        switch (this._viewType) {
            case ViewType.VIEW_2D:
                {
                    this._vertex.addUniform("s3_view_params", "Vector4");
                    this._vertex.addAdditionalCode("\n                    vec4 s3_render_vertex(vec3 p) {\n                        return vec4(p.xy * s3_view_params.xy + s3_view_params.zw, 0.0, 1.0);\n                    }\n                ");
                }
                break;
            case ViewType.VIEW_3D:
                {
                    this._vertex.addUniform("s3_view_params", "Vector4");
                    this._vertex.addUniform("s3_view_position", "Vector3");
                    this._vertex.addUniform("s3_view_rotation", "Vector4");
                    this._vertex.addAdditionalCode("\n                    vec4 s3_render_vertex(vec3 p) {\n                        // Get position in view coordinates:\n                        //   v = quaternion_inverse_rotate(rotation, p - position)\n                        vec3 v = p - s3_view_position;\n                        float d = dot(s3_view_rotation.xyz, v);\n                        vec3 c = cross(s3_view_rotation.xyz, v);\n                        v = s3_view_rotation.w * s3_view_rotation.w * v - (s3_view_rotation.w + s3_view_rotation.w) * c + d * s3_view_rotation.xyz - cross(c, s3_view_rotation.xyz);\n                        // Compute projection.\n                        vec4 r;\n                        r.xy = v.xy * s3_view_params.xy;\n                        r.z = v.z * s3_view_params.z + s3_view_params.w;\n                        r.w = -v.z;\n                        return r;\n                    }\n                ");
                }
                break;
            case ViewType.VIEW_WEBVR:
                {
                    // For WebVR, we use the MVP matrix provided by it.
                    this._vertex.addUniform("s3_projection_matrix", "Matrix4");
                    this._vertex.addUniform("s3_view_matrix", "Matrix4");
                    this._vertex.addUniform("s3_view_position", "Vector3");
                    this._vertex.addUniform("s3_view_rotation", "Vector4");
                    this._vertex.addAdditionalCode("\n                    vec4 s3_render_vertex(vec3 p) {\n                        vec3 v = p - s3_view_position;\n                        float d = dot(s3_view_rotation.xyz, v);\n                        vec3 c = cross(s3_view_rotation.xyz, v);\n                        v = s3_view_rotation.w * s3_view_rotation.w * v - (s3_view_rotation.w + s3_view_rotation.w) * c + d * s3_view_rotation.xyz - cross(c, s3_view_rotation.xyz);\n                        return s3_projection_matrix * s3_view_matrix * vec4(v, 1);\n                    }\n                ");
                }
                break;
        }
        // Input attributes.
        for (var name_2 in spec.input) {
            if (spec.input.hasOwnProperty(name_2)) {
                if (asUniform(name_2)) {
                    this._vertex.addUniform(name_2, spec.input[name_2].type);
                }
                else {
                    this._vertex.addAttribute(name_2, spec.input[name_2].type);
                }
            }
        }
        this._vertex.addLine("@additionalCode");
        // Output attributes.
        for (var name_3 in spec.output) {
            if (spec.output.hasOwnProperty(name_3)) {
                var oname = this.getUnusedName(name_3);
                this._voutMapping.set(name_3, oname);
                this._vertex.addVarying(oname, spec.output[name_3].type);
            }
        }
        // Fragment shader inputs
        var fragment_passthrus = []; // gname, input_name
        for (var name_4 in shader.input) {
            if (shader.input.hasOwnProperty(name_4)) {
                if (this.fragmentPassthru(name_4)) {
                    var gname = this.getUnusedName(name_4);
                    fragment_passthrus.push([gname, name_4]);
                    this._vertex.addVarying(gname, shader.input[name_4].type);
                    this._fragment.addVarying(gname, shader.input[name_4].type);
                }
                else {
                    var gname = this._voutMapping.get(name_4);
                    this._fragment.addVarying(gname, shader.input[name_4].type);
                }
            }
        }
        if (this._mode == GenerateMode.PICK) {
            this._vertex.addVarying("out_pick_index", "Vector4");
        }
        // The main function.
        this._vertex.addLine("void main() {");
        this._vertex.indent();
        // Define arguments.
        for (var name_5 in spec.variables) {
            if (spec.variables.hasOwnProperty(name_5)) {
                var type = spec.variables[name_5];
                this._vertex.addDeclaration(name_5, type);
            }
        }
        this._vertex.addStatements(spec.statements);
        this._vertex.unindent();
        this._vertex.addLine("}");
        this._vertexCode = this._vertex.getCode();
        if (this._mode == GenerateMode.PICK) {
            this._fragmentCode = "\n                precision highp float;\n                varying vec4 out_pick_index;\n                void main() {\n                    gl_FragColor = out_pick_index;\n                }\n            ";
        }
        else {
            // Input attributes.
            // Output attributes.
            for (var name_6 in shader.output) {
                if (shader.output.hasOwnProperty(name_6)) {
                    var oname = this.getUnusedName(name_6);
                    this._foutMapping.set(name_6, oname);
                    this._fragment.addDeclaration(oname, shader.output[name_6].type);
                }
            }
            // The main function.
            this._fragment.addLine("void main() {");
            this._fragment.indent();
            // Define arguments.
            for (var name_7 in shader.variables) {
                if (shader.variables.hasOwnProperty(name_7)) {
                    var type = shader.variables[name_7];
                    this._fragment.addDeclaration(name_7, type);
                }
            }
            var _loop_1 = function(name_8) {
                if (shader.input.hasOwnProperty(name_8)) {
                    if (this_1.fragmentPassthru(name_8)) {
                        fragment_passthrus.forEach(function (_a) {
                            var gname = _a[0], vname = _a[1];
                            if (vname == name_8) {
                                _this._fragment.addLine(name_8 + " = " + gname + ";");
                            }
                        });
                    }
                    else {
                        this_1._fragment.addDeclaration(name_8, shader.input[name_8].type);
                        this_1._fragment.addLine(name_8 + " = " + this_1._voutMapping.get(name_8) + ";");
                    }
                }
            };
            var this_1 = this;
            for (var name_8 in shader.input) {
                _loop_1(name_8);
            }
            this._fragment.addStatements(shader.statements);
            this._fragment.unindent();
            this._fragment.addLine("}");
            this._fragmentCode = this._fragment.getCode();
        }
    };
    Generator.prototype.getVertexCode = function () {
        return this._vertexCode;
    };
    Generator.prototype.getFragmentCode = function () {
        return this._fragmentCode;
    };
    return Generator;
}(glsl_1.ProgramGenerator));
exports.Generator = Generator;

},{"../glsl/glsl":30,"stardust-core":27}],35:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var stardust_core_1 = require("stardust-core");
var stardust_core_2 = require("stardust-core");
var stardust_core_3 = require("stardust-core");
var generator_1 = require("./generator");
var stardust_core_4 = require("stardust-core");
var stardust_core_5 = require("stardust-core");
var WebGLUtils = require("./webglutils");
;
var WebGLPlatformMarkProgram = (function () {
    function WebGLPlatformMarkProgram(GL, spec, shader, asUniform, viewType, mode) {
        this._GL = GL;
        var generator = new generator_1.Generator(spec, shader, asUniform, viewType, mode);
        this._program = WebGLUtils.compileProgram(this._GL, generator.getVertexCode(), generator.getFragmentCode());
        this._uniformLocations = new stardust_core_3.Dictionary();
        this._attribLocations = new stardust_core_3.Dictionary();
        this._textures = new stardust_core_3.Dictionary();
        this._currentTextureUnit = 0;
    }
    WebGLPlatformMarkProgram.prototype.use = function () {
        this._GL.useProgram(this._program);
    };
    WebGLPlatformMarkProgram.prototype.setUniform = function (name, type, value) {
        var location = this.getUniformLocation(name);
        if (location == null)
            return;
        var GL = this._GL;
        if (type.primitive == "float") {
            var va = value;
            switch (type.primitiveCount) {
                case 1:
                    GL.uniform1f(location, value);
                    break;
                case 2:
                    GL.uniform2f(location, va[0], va[1]);
                    break;
                case 3:
                    GL.uniform3f(location, va[0], va[1], va[2]);
                    break;
                case 4:
                    GL.uniform4f(location, va[0], va[1], va[2], va[3]);
                    break;
            }
        }
        if (type.primitive == "int") {
            var va = value;
            switch (type.primitiveCount) {
                case 1:
                    GL.uniform1i(location, value);
                    break;
                case 2:
                    GL.uniform2i(location, va[0], va[1]);
                    break;
                case 3:
                    GL.uniform3i(location, va[0], va[1], va[2]);
                    break;
                case 4:
                    GL.uniform4i(location, va[0], va[1], va[2], va[3]);
                    break;
            }
        }
    };
    WebGLPlatformMarkProgram.prototype.setTexture = function (name, texture) {
        var GL = this._GL;
        if (!this._textures.has(name)) {
            var newTexture = GL.createTexture();
            var unit = this._currentTextureUnit++;
            this._textures.set(name, {
                data: null,
                texture: newTexture,
                unit: unit
            });
            GL.bindTexture(GL.TEXTURE_2D, newTexture);
            GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MAG_FILTER, GL.LINEAR);
            GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MIN_FILTER, GL.LINEAR);
            GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_WRAP_S, GL.CLAMP_TO_EDGE);
            GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_WRAP_T, GL.CLAMP_TO_EDGE);
            GL.bindTexture(GL.TEXTURE_2D, null);
            this.use();
            this.setUniform(name, stardust_core_1.types["int"], unit);
        }
        var cache = this._textures.get(name);
        var newData = texture.getTextureData();
        if (cache.data == newData) {
            return;
        }
        else {
            cache.data = newData;
            // We need non-power-of-2 textures and floating point texture support.
            GL.bindTexture(GL.TEXTURE_2D, cache.texture);
            GL.texImage2D(GL.TEXTURE_2D, 0, GL.RGBA, newData.width, newData.height, 0, GL.RGBA, GL.FLOAT, newData.data);
            GL.bindTexture(GL.TEXTURE_2D, null);
            this.use();
            if (newData.dimensions == 1) {
                this.setUniform(name + "_length", stardust_core_1.types["int"], newData.width);
            }
            if (newData.dimensions == 2) {
                this.setUniform(name + "_width", stardust_core_1.types["int"], newData.width);
                this.setUniform(name + "_height", stardust_core_1.types["int"], newData.height);
            }
        }
    };
    WebGLPlatformMarkProgram.prototype.bindTextures = function () {
        var GL = this._GL;
        this._textures.forEach(function (cache) {
            GL.activeTexture(GL.TEXTURE0 + cache.unit);
            GL.bindTexture(GL.TEXTURE_2D, cache.texture);
        });
    };
    WebGLPlatformMarkProgram.prototype.unbindTextures = function () {
        var GL = this._GL;
        this._textures.forEach(function (cache) {
            GL.activeTexture(GL.TEXTURE0 + cache.unit);
            GL.bindTexture(GL.TEXTURE_2D, null);
        });
    };
    WebGLPlatformMarkProgram.prototype.getUniformLocation = function (name) {
        if (this._uniformLocations.has(name)) {
            return this._uniformLocations.get(name);
        }
        else {
            var location_1 = this._GL.getUniformLocation(this._program, name);
            this._uniformLocations.set(name, location_1);
            return location_1;
        }
    };
    WebGLPlatformMarkProgram.prototype.getAttribLocation = function (name) {
        if (this._attribLocations.has(name)) {
            return this._attribLocations.get(name);
        }
        else {
            var location_2 = this._GL.getAttribLocation(this._program, name);
            if (location_2 < 0)
                location_2 = null;
            this._attribLocations.set(name, location_2);
            return location_2;
        }
    };
    return WebGLPlatformMarkProgram;
}());
var WebGLPlatformMarkData = (function (_super) {
    __extends(WebGLPlatformMarkData, _super);
    function WebGLPlatformMarkData() {
        _super.apply(this, arguments);
    }
    return WebGLPlatformMarkData;
}(stardust_core_1.PlatformMarkData));
exports.WebGLPlatformMarkData = WebGLPlatformMarkData;
var WebGLPlatformMark = (function (_super) {
    __extends(WebGLPlatformMark, _super);
    function WebGLPlatformMark(platform, GL, mark, spec, shader, bindings, shiftBindings) {
        var _this = this;
        _super.call(this);
        this._platform = platform;
        this._GL = GL;
        this._mark = mark;
        this._bindings = bindings;
        this._shiftBindings = shiftBindings;
        this._spec = spec;
        this._shader = shader;
        var flattenedInfo = stardust_core_2.flattenEmits(spec);
        this._specFlattened = flattenedInfo.specification;
        this._flattenedVertexIndexVariable = flattenedInfo.indexVariable;
        this._flattenedVertexCount = flattenedInfo.count;
        this._program = new WebGLPlatformMarkProgram(GL, this._specFlattened, this._shader, function (name) { return _this.isUniform(name); }, this._platform.viewInfo.type, generator_1.GenerateMode.NORMAL);
        this._programPick = new WebGLPlatformMarkProgram(GL, this._specFlattened, this._shader, function (name) { return _this.isUniform(name); }, this._platform.viewInfo.type, generator_1.GenerateMode.PICK);
        this.initializeUniforms();
    }
    WebGLPlatformMark.prototype.initializeUniforms = function () {
        for (var name_1 in this._specFlattened.input) {
            if (this.isUniform(name_1)) {
                var binding = this._bindings.get(name_1);
                if (binding.bindingType == stardust_core_1.BindingType.VALUE) {
                    this.updateUniform(name_1, binding.specValue);
                }
                if (binding.bindingType == stardust_core_1.BindingType.TEXTURE) {
                    this.updateTexture(name_1, binding.textureValue);
                }
            }
        }
    };
    WebGLPlatformMark.prototype.initializeBuffers = function () {
        var _this = this;
        var GL = this._GL;
        var data = new WebGLPlatformMarkData();
        data.buffers = new stardust_core_3.Dictionary();
        ;
        this._bindings.forEach(function (binding, name) {
            if (!_this.isUniform(name)) {
                var location_3 = _this._program.getAttribLocation(name);
                if (location_3 != null) {
                    data.buffers.set(name, GL.createBuffer());
                }
            }
        });
        data.buffers.set(this._flattenedVertexIndexVariable, GL.createBuffer());
        if (this._programPick) {
            data.buffers.set("s3_pick_index", GL.createBuffer());
        }
        data.ranges = [];
        return data;
    };
    // Is the input attribute compiled as uniform?
    WebGLPlatformMark.prototype.isUniform = function (name) {
        // Extra variables we add are always not uniforms.
        if (name == this._flattenedVertexIndexVariable)
            return false;
        if (this._bindings.get(name) == null) {
            if (this._shiftBindings.get(name) == null) {
                throw new stardust_core_4.RuntimeError("attribute " + name + " is not specified.");
            }
            else {
                return this._bindings.get(this._shiftBindings.get(name).name).bindingType != stardust_core_1.BindingType.FUNCTION;
            }
        }
        else {
            // Look at the binding to determine.
            return this._bindings.get(name).bindingType != stardust_core_1.BindingType.FUNCTION;
        }
    };
    WebGLPlatformMark.prototype.updateUniform = function (name, value) {
        var binding = this._bindings.get(name);
        var type = binding.valueType;
        this._program.use();
        this._program.setUniform(name, type, value);
        if (this._programPick) {
            this._programPick.use();
            this._programPick.setUniform(name, type, value);
        }
    };
    WebGLPlatformMark.prototype.updateTexture = function (name, value) {
        this._program.setTexture(name, value);
        if (this._programPick) {
            this._programPick.setTexture(name, value);
        }
    };
    WebGLPlatformMark.prototype.uploadData = function (datas) {
        var buffers = this.initializeBuffers();
        buffers.ranges = [];
        var repeatBegin = this._spec.repeatBegin || 0;
        var repeatEnd = this._spec.repeatEnd || 0;
        var GL = this._GL;
        var bindings = this._bindings;
        var rep = this._flattenedVertexCount;
        var totalCount = 0;
        datas.forEach(function (data) {
            var n = data.length;
            if (n == 0) {
                buffers.ranges.push(null);
                return;
            }
            else {
                var c1 = totalCount;
                totalCount += n + repeatBegin + repeatEnd;
                var c2 = totalCount;
                buffers.ranges.push([c1 * rep, c2 * rep]);
            }
        });
        this._bindings.forEach(function (binding, name) {
            var buffer = buffers.buffers.get(name);
            if (buffer == null)
                return;
            var type = binding.valueType;
            var array = new Float32Array(type.primitiveCount * totalCount * rep);
            var currentIndex = 0;
            var multiplier = type.primitiveCount * rep;
            datas.forEach(function (data) {
                if (data.length == 0)
                    return;
                for (var i = 0; i < repeatBegin; i++) {
                    binding.fillBinary([data[0]], rep, array.subarray(currentIndex, currentIndex + multiplier));
                    currentIndex += multiplier;
                }
                binding.fillBinary(data, rep, array.subarray(currentIndex, currentIndex + data.length * multiplier));
                currentIndex += data.length * multiplier;
                for (var i = 0; i < repeatEnd; i++) {
                    binding.fillBinary([data[data.length - 1]], rep, array.subarray(currentIndex, currentIndex + multiplier));
                    currentIndex += multiplier;
                }
            });
            GL.bindBuffer(GL.ARRAY_BUFFER, buffer);
            GL.bufferData(GL.ARRAY_BUFFER, array, GL.STATIC_DRAW);
        });
        // The vertex index attribute.
        var array = new Float32Array(totalCount * rep);
        for (var i = 0; i < totalCount * rep; i++) {
            array[i] = i % rep;
        }
        GL.bindBuffer(GL.ARRAY_BUFFER, buffers.buffers.get(this._flattenedVertexIndexVariable));
        GL.bufferData(GL.ARRAY_BUFFER, array, GL.STATIC_DRAW);
        // The pick index attribute.
        if (this._programPick) {
            var array_1 = new Float32Array(totalCount * rep * 4);
            for (var i = 0; i < totalCount * rep; i++) {
                var index = Math.floor(i / rep);
                array_1[i * 4 + 0] = (index & 0xff) / 255.0;
                array_1[i * 4 + 1] = ((index & 0xff00) >> 8) / 255.0;
                array_1[i * 4 + 2] = ((index & 0xff0000) >> 16) / 255.0;
                array_1[i * 4 + 3] = ((index & 0xff000000) >> 24) / 255.0;
            }
            GL.bindBuffer(GL.ARRAY_BUFFER, buffers.buffers.get("s3_pick_index"));
            GL.bufferData(GL.ARRAY_BUFFER, array_1, GL.STATIC_DRAW);
        }
        return buffers;
    };
    // Render the graphics.
    WebGLPlatformMark.prototype.renderBase = function (buffers, mode, onRender) {
        var _this = this;
        if (buffers.ranges.length > 0) {
            var GL_1 = this._GL;
            var spec = this._specFlattened;
            var bindings = this._bindings;
            // Decide which program to use
            var program_1 = this._program;
            if (mode == generator_1.GenerateMode.PICK) {
                program_1 = this._programPick;
            }
            program_1.use();
            var minOffset_1 = 0;
            var maxOffset_1 = 0;
            this._shiftBindings.forEach(function (shift, name) {
                if (shift.offset > maxOffset_1)
                    maxOffset_1 = shift.offset;
                if (shift.offset < minOffset_1)
                    minOffset_1 = shift.offset;
            });
            // Assign attributes to buffers
            for (var name_2 in spec.input) {
                var attributeLocation = program_1.getAttribLocation(name_2);
                if (attributeLocation == null)
                    continue;
                if (this._shiftBindings.has(name_2)) {
                    var shift = this._shiftBindings.get(name_2);
                    GL_1.bindBuffer(GL_1.ARRAY_BUFFER, buffers.buffers.get(shift.name));
                    GL_1.enableVertexAttribArray(attributeLocation);
                    var type = bindings.get(shift.name).valueType;
                    GL_1.vertexAttribPointer(attributeLocation, type.primitiveCount, type.primitive == "float" ? GL_1.FLOAT : GL_1.INT, false, 0, type.size * (shift.offset - minOffset_1) * this._flattenedVertexCount);
                }
                else {
                    GL_1.bindBuffer(GL_1.ARRAY_BUFFER, buffers.buffers.get(name_2));
                    GL_1.enableVertexAttribArray(attributeLocation);
                    if (name_2 == this._flattenedVertexIndexVariable) {
                        GL_1.vertexAttribPointer(attributeLocation, 1, GL_1.FLOAT, false, 0, 4 * (-minOffset_1) * this._flattenedVertexCount);
                    }
                    else {
                        var type = bindings.get(name_2).valueType;
                        GL_1.vertexAttribPointer(attributeLocation, type.primitiveCount, type.primitive == "float" ? GL_1.FLOAT : GL_1.INT, false, 0, type.size * (-minOffset_1) * this._flattenedVertexCount);
                    }
                }
            }
            // For pick mode, assign the pick index buffer
            if (mode == generator_1.GenerateMode.PICK) {
                var attributeLocation = program_1.getAttribLocation("s3_pick_index");
                GL_1.bindBuffer(GL_1.ARRAY_BUFFER, buffers.buffers.get("s3_pick_index"));
                GL_1.enableVertexAttribArray(attributeLocation);
                GL_1.vertexAttribPointer(attributeLocation, 4, GL_1.FLOAT, false, 0, 0);
            }
            // Set view uniforms
            var viewInfo = this._platform.viewInfo;
            var pose = this._platform.pose;
            switch (viewInfo.type) {
                case generator_1.ViewType.VIEW_2D:
                    {
                        GL_1.uniform4f(program_1.getUniformLocation("s3_view_params"), 2.0 / viewInfo.width, -2.0 / viewInfo.height, -1, +1);
                    }
                    break;
                case generator_1.ViewType.VIEW_3D:
                    {
                        GL_1.uniform4f(program_1.getUniformLocation("s3_view_params"), 1.0 / Math.tan(viewInfo.fovY / 2.0) / viewInfo.aspectRatio, 1.0 / Math.tan(viewInfo.fovY / 2.0), (viewInfo.near + viewInfo.far) / (viewInfo.near - viewInfo.far), (2.0 * viewInfo.near * viewInfo.far) / (viewInfo.near - viewInfo.far));
                        if (pose) {
                            // Rotation and position.
                            GL_1.uniform4f(program_1.getUniformLocation("s3_view_rotation"), pose.rotation.x, pose.rotation.y, pose.rotation.z, pose.rotation.w);
                            GL_1.uniform3f(program_1.getUniformLocation("s3_view_position"), pose.position.x, pose.position.y, pose.position.z);
                        }
                        else {
                            GL_1.uniform4f(program_1.getUniformLocation("s3_view_rotation"), 0, 0, 0, 1);
                            GL_1.uniform3f(program_1.getUniformLocation("s3_view_position"), 0, 0, 0);
                        }
                    }
                    break;
                case generator_1.ViewType.VIEW_WEBVR:
                    {
                        GL_1.uniformMatrix4fv(program_1.getUniformLocation("s3_view_matrix"), false, viewInfo.viewMatrix);
                        GL_1.uniformMatrix4fv(program_1.getUniformLocation("s3_projection_matrix"), false, viewInfo.projectionMatrix);
                        if (pose) {
                            // Rotation and position.
                            GL_1.uniform4f(program_1.getUniformLocation("s3_view_rotation"), pose.rotation.x, pose.rotation.y, pose.rotation.z, pose.rotation.w);
                            GL_1.uniform3f(program_1.getUniformLocation("s3_view_position"), pose.position.x, pose.position.y, pose.position.z);
                        }
                        else {
                            GL_1.uniform4f(program_1.getUniformLocation("s3_view_rotation"), 0, 0, 0, 1);
                            GL_1.uniform3f(program_1.getUniformLocation("s3_view_position"), 0, 0, 0);
                        }
                    }
                    break;
            }
            // For pick, set the mark index
            if (mode == generator_1.GenerateMode.PICK) {
                GL_1.uniform1f(program_1.getUniformLocation("s3_pick_index_alpha"), this._pickIndex / 255.0);
            }
            program_1.bindTextures();
            // Draw arrays
            buffers.ranges.forEach(function (range, index) {
                if (onRender) {
                    onRender(index);
                }
                if (range != null) {
                    program_1.use();
                    program_1.bindTextures();
                    GL_1.drawArrays(GL_1.TRIANGLES, range[0], range[1] - range[0] - (maxOffset_1 - minOffset_1) * _this._flattenedVertexCount);
                }
            });
            program_1.unbindTextures();
            // Unbind attributes
            for (var name_3 in spec.input) {
                var attributeLocation = program_1.getAttribLocation(name_3);
                if (attributeLocation != null) {
                    GL_1.disableVertexAttribArray(attributeLocation);
                }
            }
            // Unbind the pick index buffer
            if (mode == generator_1.GenerateMode.PICK) {
                var attributeLocation = program_1.getAttribLocation("s3_pick_index");
                GL_1.disableVertexAttribArray(attributeLocation);
            }
        }
    };
    WebGLPlatformMark.prototype.setPickIndex = function (index) {
        this._pickIndex = index;
    };
    WebGLPlatformMark.prototype.render = function (buffers, onRender) {
        if (this._platform.renderMode == generator_1.GenerateMode.PICK) {
            this.setPickIndex(this._platform.assignPickIndex(this._mark));
        }
        this.renderBase(buffers, this._platform.renderMode, onRender);
    };
    return WebGLPlatformMark;
}(stardust_core_1.PlatformMark));
exports.WebGLPlatformMark = WebGLPlatformMark;
var WebGLPlatform = (function (_super) {
    __extends(WebGLPlatform, _super);
    function WebGLPlatform(GL) {
        _super.call(this);
        this._GL = GL;
        this.set2DView(500, 500);
        this.setPose(new stardust_core_5.Pose());
        this._renderMode = generator_1.GenerateMode.NORMAL;
        this._pickFramebuffer = null;
    }
    Object.defineProperty(WebGLPlatform.prototype, "viewInfo", {
        get: function () { return this._viewInfo; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(WebGLPlatform.prototype, "pose", {
        get: function () { return this._pose; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(WebGLPlatform.prototype, "renderMode", {
        get: function () { return this._renderMode; },
        enumerable: true,
        configurable: true
    });
    WebGLPlatform.prototype.getPickFramebuffer = function (width, height) {
        if (this._pickFramebuffer == null || width != this._pickFramebufferWidth || height != this._pickFramebufferHeight) {
            var GL = this._GL;
            this._pickFramebuffer = GL.createFramebuffer();
            this._pickFramebufferWidth = width;
            this._pickFramebufferHeight = height;
            GL.bindFramebuffer(GL.FRAMEBUFFER, this._pickFramebuffer);
            this._pickFramebufferTexture = GL.createTexture();
            GL.bindTexture(GL.TEXTURE_2D, this._pickFramebufferTexture);
            GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MAG_FILTER, GL.LINEAR);
            GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MIN_FILTER, GL.LINEAR);
            GL.texImage2D(GL.TEXTURE_2D, 0, GL.RGBA, width, height, 0, GL.RGBA, GL.UNSIGNED_BYTE, null);
            GL.framebufferTexture2D(GL.FRAMEBUFFER, GL.COLOR_ATTACHMENT0, GL.TEXTURE_2D, this._pickFramebufferTexture, 0);
            GL.bindTexture(GL.TEXTURE_2D, null);
            GL.bindFramebuffer(GL.FRAMEBUFFER, null);
        }
        return this._pickFramebuffer;
    };
    WebGLPlatform.prototype.beginPicking = function (width, height) {
        this._renderMode = generator_1.GenerateMode.PICK;
        var GL = this._GL;
        var fb = this.getPickFramebuffer(width, height);
        GL.bindFramebuffer(GL.FRAMEBUFFER, fb);
        GL.clearColor(1, 1, 1, 1);
        GL.clear(GL.COLOR_BUFFER_BIT);
        GL.disable(GL.BLEND);
        this._pickMarks = [];
    };
    WebGLPlatform.prototype.assignPickIndex = function (mark) {
        var idx = this._pickMarks.indexOf(mark);
        if (idx >= 0) {
            return idx;
        }
        else {
            var num = this._pickMarks.length;
            this._pickMarks.push(mark);
            return num;
        }
    };
    WebGLPlatform.prototype.endPicking = function () {
        var GL = this._GL;
        GL.bindFramebuffer(GL.FRAMEBUFFER, null);
        GL.enable(GL.BLEND);
        this._renderMode = generator_1.GenerateMode.NORMAL;
    };
    WebGLPlatform.prototype.getPickingPixel = function (x, y) {
        if (this._pickMarks == null || x < 0 || y < 0 || x >= this._pickFramebufferWidth || y >= this._pickFramebufferHeight) {
            return null;
        }
        var GL = this._GL;
        var fb = this._pickFramebuffer;
        GL.bindFramebuffer(GL.FRAMEBUFFER, fb);
        var data = new Uint8Array(4);
        GL.readPixels(x, this._pickFramebufferHeight - 1 - y, 1, 1, GL.RGBA, GL.UNSIGNED_BYTE, data);
        GL.bindFramebuffer(GL.FRAMEBUFFER, null);
        var offset = (data[0]) + (data[1] << 8) + (data[2] << 16);
        if (offset >= 16777215)
            return null;
        return [this._pickMarks[data[3]], offset];
    };
    WebGLPlatform.prototype.set2DView = function (width, height) {
        this._viewInfo = {
            type: generator_1.ViewType.VIEW_2D,
            width: width,
            height: height
        };
    };
    WebGLPlatform.prototype.set3DView = function (fovY, aspectRatio, near, far) {
        if (near === void 0) { near = 0.1; }
        if (far === void 0) { far = 1000; }
        this._viewInfo = {
            type: generator_1.ViewType.VIEW_3D,
            fovY: fovY,
            aspectRatio: aspectRatio,
            near: near,
            far: far
        };
    };
    WebGLPlatform.prototype.setWebVRView = function (viewMatrix, projectionMatrix) {
        this._viewInfo = {
            type: generator_1.ViewType.VIEW_WEBVR,
            viewMatrix: viewMatrix,
            projectionMatrix: projectionMatrix
        };
    };
    WebGLPlatform.prototype.setPose = function (pose) {
        this._pose = pose;
    };
    WebGLPlatform.prototype.compile = function (mark, spec, shader, bindings, shiftBindings) {
        return new WebGLPlatformMark(this, this._GL, mark, spec, shader, bindings, shiftBindings);
    };
    return WebGLPlatform;
}(stardust_core_1.Platform));
exports.WebGLPlatform = WebGLPlatform;
var WebGLCanvasPlatform2D = (function (_super) {
    __extends(WebGLCanvasPlatform2D, _super);
    function WebGLCanvasPlatform2D(canvas, width, height) {
        if (width === void 0) { width = 600; }
        if (height === void 0) { height = 400; }
        var GL = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        try {
            GL.getExtension("OES_texture_float");
            GL.getExtension("OES_texture_float_linear");
        }
        catch (e) {
        }
        _super.call(this, GL);
        this._canvas = canvas;
        GL.clearColor(1, 1, 1, 1);
        GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);
        GL.disable(GL.DEPTH_TEST);
        GL.enable(GL.BLEND);
        GL.disable(GL.CULL_FACE);
        GL.blendFuncSeparate(GL.SRC_ALPHA, GL.ONE_MINUS_SRC_ALPHA, GL.ONE, GL.ONE_MINUS_SRC_ALPHA);
        this._pixelRatio = 2;
        this.resize(width, height);
    }
    Object.defineProperty(WebGLCanvasPlatform2D.prototype, "pixelRatio", {
        get: function () {
            return this._pixelRatio;
        },
        set: function (value) {
            this._pixelRatio = value;
            this.resize(this._width, this._height);
        },
        enumerable: true,
        configurable: true
    });
    WebGLCanvasPlatform2D.prototype.resize = function (width, height) {
        this._width = width;
        this._height = height;
        this._canvas.style.width = width + "px";
        this._canvas.style.height = height + "px";
        this._canvas.width = width * this._pixelRatio;
        this._canvas.height = height * this._pixelRatio;
        this.set2DView(width, height);
        this.setPose(new stardust_core_5.Pose());
        this._GL.viewport(0, 0, this._canvas.width, this._canvas.height);
    };
    WebGLCanvasPlatform2D.prototype.clear = function (color) {
        if (color) {
            this._GL.clearColor(color[0], color[1], color[2], color[3] != null ? color[3] : 1);
        }
        this._GL.clear(this._GL.COLOR_BUFFER_BIT | this._GL.DEPTH_BUFFER_BIT);
    };
    return WebGLCanvasPlatform2D;
}(WebGLPlatform));
exports.WebGLCanvasPlatform2D = WebGLCanvasPlatform2D;
var WebGLCanvasPlatform3D = (function (_super) {
    __extends(WebGLCanvasPlatform3D, _super);
    function WebGLCanvasPlatform3D(canvas, width, height) {
        if (width === void 0) { width = 600; }
        if (height === void 0) { height = 400; }
        var GL = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        _super.call(this, GL);
        this._canvas = canvas;
        GL.clearColor(1, 1, 1, 1);
        GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);
        GL.enable(GL.DEPTH_TEST);
        GL.enable(GL.BLEND);
        GL.disable(GL.CULL_FACE);
        GL.blendFuncSeparate(GL.SRC_ALPHA, GL.ONE_MINUS_SRC_ALPHA, GL.ONE, GL.ONE_MINUS_SRC_ALPHA);
        this._pixelRatio = 2;
        _super.prototype.set3DView.call(this, Math.PI / 4, width / height, 0.1, 1000);
        this.resize(width, height);
    }
    Object.defineProperty(WebGLCanvasPlatform3D.prototype, "pixelRatio", {
        get: function () {
            return this._pixelRatio;
        },
        set: function (value) {
            this._pixelRatio = value;
            this.resize(this._width, this._height);
        },
        enumerable: true,
        configurable: true
    });
    WebGLCanvasPlatform3D.prototype.resize = function (width, height) {
        this._width = width;
        this._height = height;
        this._canvas.style.width = width + "px";
        this._canvas.style.height = height + "px";
        this._canvas.width = width * this._pixelRatio;
        this._canvas.height = height * this._pixelRatio;
        this._GL.viewport(0, 0, this._canvas.width, this._canvas.height);
        _super.prototype.set3DView.call(this, this._viewInfo.fovY, this._width / this._height, this._viewInfo.near, this._viewInfo.far);
    };
    WebGLCanvasPlatform3D.prototype.set3DView = function (fovY, near, far) {
        if (near === void 0) { near = 0.1; }
        if (far === void 0) { far = 1000; }
        _super.prototype.set3DView.call(this, fovY, this._width / this._height, near, far);
    };
    WebGLCanvasPlatform3D.prototype.setMVPMatrix = function (matrix) {
        throw new stardust_core_4.RuntimeError("not implemented");
    };
    WebGLCanvasPlatform3D.prototype.clear = function (color) {
        if (color) {
            this._GL.clearColor(color[0], color[1], color[2], color[3] != null ? color[3] : 1);
        }
        this._GL.clear(this._GL.COLOR_BUFFER_BIT | this._GL.DEPTH_BUFFER_BIT);
    };
    return WebGLCanvasPlatform3D;
}(WebGLPlatform));
exports.WebGLCanvasPlatform3D = WebGLCanvasPlatform3D;
var WebGLCanvasPlatformWebVR = (function (_super) {
    __extends(WebGLCanvasPlatformWebVR, _super);
    function WebGLCanvasPlatformWebVR(canvas, width, height) {
        if (width === void 0) { width = 600; }
        if (height === void 0) { height = 400; }
        var GL = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        _super.call(this, GL);
        this._canvas = canvas;
        GL.clearColor(1, 1, 1, 1);
        GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);
        GL.enable(GL.DEPTH_TEST);
        GL.enable(GL.BLEND);
        GL.disable(GL.CULL_FACE);
        GL.blendFuncSeparate(GL.SRC_ALPHA, GL.ONE_MINUS_SRC_ALPHA, GL.ONE, GL.ONE_MINUS_SRC_ALPHA);
        this._pixelRatio = 2;
        this.resize(width, height);
        this.setWebVRView([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    Object.defineProperty(WebGLCanvasPlatformWebVR.prototype, "pixelRatio", {
        get: function () {
            return this._pixelRatio;
        },
        set: function (value) {
            this._pixelRatio = value;
            this.resize(this._width, this._height);
        },
        enumerable: true,
        configurable: true
    });
    WebGLCanvasPlatformWebVR.prototype.resize = function (width, height) {
        this._width = width;
        this._height = height;
        this._canvas.width = width * this._pixelRatio;
        this._canvas.height = height * this._pixelRatio;
    };
    WebGLCanvasPlatformWebVR.prototype.set3DView = function (fovY, near, far) {
        if (near === void 0) { near = 0.1; }
        if (far === void 0) { far = 1000; }
        _super.prototype.set3DView.call(this, fovY, this._width / this._height, near, far);
    };
    WebGLCanvasPlatformWebVR.prototype.setWebVRView = function (viewMatrix, projectionMatrix) {
        _super.prototype.setWebVRView.call(this, viewMatrix, projectionMatrix);
    };
    WebGLCanvasPlatformWebVR.prototype.clear = function (color) {
        if (color) {
            this._GL.clearColor(color[0], color[1], color[2], color[3] != null ? color[3] : 1);
        }
        this._GL.clear(this._GL.COLOR_BUFFER_BIT | this._GL.DEPTH_BUFFER_BIT);
    };
    return WebGLCanvasPlatformWebVR;
}(WebGLPlatform));
exports.WebGLCanvasPlatformWebVR = WebGLCanvasPlatformWebVR;

},{"./generator":34,"./webglutils":36,"stardust-core":27}],36:[function(require,module,exports){
"use strict";
var stardust_core_1 = require("stardust-core");
function compileProgram(GL, vsCode, fsCode) {
    // Vertex shader
    var vsShader = GL.createShader(GL.VERTEX_SHADER);
    GL.shaderSource(vsShader, vsCode);
    GL.compileShader(vsShader);
    var success = GL.getShaderParameter(vsShader, GL.COMPILE_STATUS);
    if (!success) {
        console.log("Vertex shader code is:", vsCode);
        throw new stardust_core_1.RuntimeError("could not compile vertex shader: " + GL.getShaderInfoLog(vsShader));
    }
    // Fragment shader
    var fsShader = GL.createShader(GL.FRAGMENT_SHADER);
    GL.shaderSource(fsShader, fsCode);
    GL.compileShader(fsShader);
    success = GL.getShaderParameter(fsShader, GL.COMPILE_STATUS);
    if (!success) {
        console.log("Fragment shader code is:", fsCode);
        throw new stardust_core_1.RuntimeError("could not compile fragment shader: " + GL.getShaderInfoLog(fsShader));
    }
    // Link the program
    var program = GL.createProgram();
    GL.attachShader(program, vsShader);
    GL.attachShader(program, fsShader);
    GL.linkProgram(program);
    if (!GL.getProgramParameter(program, GL.LINK_STATUS)) {
        throw new stardust_core_1.RuntimeError("could not link shader: " + GL.getProgramInfoLog(program));
    }
    return program;
}
exports.compileProgram = compileProgram;

},{"stardust-core":27}]},{},[1])(1)
});

/***/ })
/******/ ]);
});
//# sourceMappingURL=NetV.js.map