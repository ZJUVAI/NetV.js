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

/***/ "./src/configs.ts":
/*!************************!*\
  !*** ./src/configs.ts ***!
  \************************/
/*! no static exports found */
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
exports.nodeLimit = 100;
exports.linkLimit = 1000;
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

/***/ "./src/elements/element.ts":
/*!*********************************!*\
  !*** ./src/elements/element.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
const const_1 = __webpack_require__(/*! ../utils/const */ "./src/utils/const.js");
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
                    this.$_style[name] = Object.assign(Object.assign({}, this.$_style[name]), style);
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

/***/ "./src/elements/link.ts":
/*!******************************!*\
  !*** ./src/elements/link.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide a Link class.
 * @dependences interfaces.ts, utils/is.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
const element_1 = __webpack_require__(/*! ./element */ "./src/elements/element.ts");
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
}
exports.default = Link;


/***/ }),

/***/ "./src/elements/node.ts":
/*!******************************!*\
  !*** ./src/elements/node.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide a Node class.
 * @dependences interfaces.ts, utils/is.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = __webpack_require__(/*! ../utils/is */ "./src/utils/is.ts");
const element_1 = __webpack_require__(/*! ./element */ "./src/elements/element.ts");
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
        const data = Object.assign({
            x: this.$_position.x,
            y: this.$_position.y
        }, nodeData);
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
const map2_1 = __webpack_require__(/*! ./utils/map2 */ "./src/utils/map2.ts");
const node_1 = __webpack_require__(/*! ./elements/node */ "./src/elements/node.ts");
const link_1 = __webpack_require__(/*! ./elements/link */ "./src/elements/link.ts");
const defaultConfigs = __webpack_require__(/*! ./configs */ "./src/configs.ts");
const dataset = __webpack_require__(/*! ./dataset */ "./src/dataset/index.ts");
const renderer_1 = __webpack_require__(/*! ./renderer */ "./src/renderer/index.ts");
const interaction_1 = __webpack_require__(/*! ./interaction/interaction */ "./src/interaction/interaction.ts");
const Utils = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.ts");
const const_1 = __webpack_require__(/*! ./utils/const */ "./src/utils/const.js");
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
        const newLinks = new Array(linksData.length);
        for (let i = 0; i < linksData.length; i++) {
            const linkData = linksData[i];
            linkData.source = linkData.source.toString();
            linkData.target = linkData.target.toString();
            const link = new link_1.default(this, linkData);
            newLinks[i] = link;
        }
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
            const newTransform = Object.assign({}, transforms[index]);
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
        const newTransform = Object.assign({}, this.netv.$_transform);
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
        const newTransform = Object.assign({}, this.netv.$_transform);
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
        const newTransform = Object.assign({}, this.netv.$_transform);
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
        const newTransform = Object.assign({}, this.netv.$_transform);
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
        const newTransform = Object.assign({}, this.netv.$_transform);
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
                this.mouseDownElementOriginPos = Object.assign({}, element.position());
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
        let newTransform = Object.assign({}, this.netv.$_transform);
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

/***/ "./src/renderer/elements/render-element.ts":
/*!*************************************************!*\
  !*** ./src/renderer/elements/render-element.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderElementManager = void 0;
const utils_1 = __webpack_require__(/*! ../utils */ "./src/renderer/utils.ts");
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

/***/ "./src/renderer/elements/render-link.ts":
/*!**********************************************!*\
  !*** ./src/renderer/elements/render-link.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description Link used in renderer
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderLinkManager = void 0;
const render_element_1 = __webpack_require__(/*! ./render-element */ "./src/renderer/elements/render-element.ts");
class RenderLinkManager extends render_element_1.RenderElementManager {
    /**
     * create render link manager
     * @param gl WebGL context
     * @param params nessesary configs for link manager
     * @param idTexture texture store elements id of each pixel
     */
    constructor(gl, params, shaders, idTexture) {
        super(
        /* webgl context */ gl, Object.assign(Object.assign({}, params), { instanceVerteces: [
                -0.5, 0.5, 1.0,
                -0.5, -0.5, 1.0,
                0.5, 0.5, 1.0,
                0.5, -0.5, 1.0,
            ] }), Object.assign({}, shaders), 
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

/***/ "./src/renderer/elements/render-node.ts":
/*!**********************************************!*\
  !*** ./src/renderer/elements/render-node.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description Node using in Renderer
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderNodeManager = void 0;
const render_element_1 = __webpack_require__(/*! ./render-element */ "./src/renderer/elements/render-element.ts");
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
        /* webgl context */ gl, Object.assign(Object.assign({}, params), { instanceVerteces: [
                -0.5, 0.5, 1.0,
                -0.5, -0.5, 1.0,
                0.5, 0.5, 1.0,
                0.5, -0.5, 1.0,
            ] }), Object.assign({}, shaders), 
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
const nodeShaders = __webpack_require__(/*! ./shaders/node-shader */ "./src/renderer/shaders/node-shader.ts");
const linkShaders = __webpack_require__(/*! ./shaders/link-shader */ "./src/renderer/shaders/link-shader.ts");
const render_node_1 = __webpack_require__(/*! ./elements/render-node */ "./src/renderer/elements/render-node.ts");
const render_link_1 = __webpack_require__(/*! ./elements/render-link */ "./src/renderer/elements/render-link.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/renderer/utils.ts");
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

/***/ "./src/renderer/shaders/link-shader.ts":
/*!*********************************************!*\
  !*** ./src/renderer/shaders/link-shader.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.idFragment = exports.fragment = exports.idVertex = exports.vertex = void 0;
const utils_1 = __webpack_require__(/*! ../utils */ "./src/renderer/utils.ts");
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
fragment.inputs = Object.assign({}, vertex.outputs);
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

/***/ "./src/renderer/shaders/node-shader.ts":
/*!*********************************************!*\
  !*** ./src/renderer/shaders/node-shader.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.idFragment = exports.fragment = exports.idVertex = exports.vertex = void 0;
const utils_1 = __webpack_require__(/*! ../utils */ "./src/renderer/utils.ts");
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
fragment.inputs = Object.assign({}, vertex.outputs);
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
        copyShader.inputs = Object.assign({}, this.inputs);
        copyShader.outputs = Object.assign({}, this.outputs);
        copyShader.uniforms = Object.assign({}, this.uniforms);
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

/***/ "./src/utils/const.js":
/*!****************************!*\
  !*** ./src/utils/const.js ***!
  \****************************/
/*! exports provided: EMPTY_FUNCTION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_FUNCTION", function() { return EMPTY_FUNCTION; });
const EMPTY_FUNCTION = () => {}


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


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YXNldC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YXNldC9taXNlcmFibGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhc2V0L3BhdGVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2VsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2xpbmsudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL25vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmFjdGlvbi9pbnRlcmFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvZWxlbWVudHMvcmVuZGVyLWVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL2VsZW1lbnRzL3JlbmRlci1saW5rLnRzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlci9lbGVtZW50cy9yZW5kZXItbm9kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL3NoYWRlcnMvbGluay1zaGFkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL3NoYWRlcnMvbm9kZS1zaGFkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL21hcDIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3V0aWxzLnRzIl0s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RTtRQUMvRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZFLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDMUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hFLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDM0UsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMxRSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZFLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDMUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLGlC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TSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDL0MsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNoRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzFELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hELEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDeEQsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUM3RCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDaEQsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNoRCxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzFELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDL0MsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzFELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hELEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMzRCxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FB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USxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2hELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMvQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQy9DLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDaEQsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2hELEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDL0MsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDOUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUM5QyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDeEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMzRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNoRCxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMvQyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDaEQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDNUQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMxRCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDeEQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzFELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2hELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDL0MsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RCxFQUFFLE1BQU0sRUFBRSxl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QUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRTtRQUMzQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFO1FBQzNDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFO1FBQzNDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFO1FBQzNDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO0tBQzVEO0NBQ0o7Ozs7Ozs7Ozs7Ozs7OztBQ3pzR0Qsa0ZBQXlDO0FBQ3pDLGtGQUErQztBQUUvQyxNQUFxQixPQUFPO0lBZXhCLFlBQ0ksSUFBVSxFQUNWLElBQStDLEVBQy9DLElBQXFCO1FBaEJsQixZQUFPLEdBQWdELEVBQUU7UUFDekQsMkJBQXNCLEdBQTBCLElBQUksR0FBRyxFQUFFO1FBQ3pELHlCQUFvQixHQUEwQixJQUFJLEdBQUcsRUFBRTtRQUN2RCwyQkFBc0IsR0FBMEIsSUFBSSxHQUFHLEVBQUU7UUFDekQsMEJBQXFCLEdBQTBCLElBQUksR0FBRyxFQUFFO1FBQ3hELDJCQUFzQixHQUEwQixJQUFJLEdBQUcsRUFBRTtRQUN6RCx1QkFBa0IsR0FBMEIsSUFBSSxHQUFHLEVBQUU7UUFLbEQsaUJBQVksR0FBRyxFQUFFO1FBT3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSTtRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7UUFDaEIsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTO1FBRTVDLDJEQUEyRDtRQUMzRCxrRUFBa0U7UUFDbEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RixJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7WUFDakIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRTtnQkFDaEQsTUFBTSxLQUFLLEdBQUcsS0FBSztnQkFDbkIsTUFBTSxJQUFJLEdBQUcsR0FBRztnQkFDaEIsSUFBSSxLQUFLLEtBQUssTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUN6Qix5QkFBeUI7b0JBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSztpQkFDN0I7cUJBQU07b0JBQ0gsOERBQThEO29CQUM5RCx3Q0FBd0M7b0JBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG1DQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQ2xCLEtBQUssQ0FDWDtpQkFDSjtZQUNMLENBQUMsQ0FBQztTQUNMO1FBRUQsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUM7UUFDakYsSUFBSSxDQUFDLHVCQUF1QixHQUFHLGFBQWEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUVoRiw2REFBNkQ7UUFDN0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDdEMsMkJBQTJCO1lBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsR0FBRyxDQUFDO1FBQzFELENBQUMsQ0FBQztJQUNOLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksRUFBRSxDQUFDLFNBQWlCLEVBQUUsUUFBMEI7O1FBQ25ELElBQ0ksU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssTUFBTTtZQUNoQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDLDJCQUEyQjtVQUN4RjtZQUNFLE1BQU0sZUFBZSxHQUFHLEtBQUssU0FBUyxhQUFhO1lBQ25ELFVBQUksQ0FBQyxlQUFlLENBQUMsMENBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxzQkFBYyxFQUFDO1lBQ2hFLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFO2dCQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQzthQUN4RTtTQUNKO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxHQUFHLENBQUMsU0FBaUIsRUFBRSxRQUF5Qjs7UUFDbkQsSUFDSSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxNQUFNO1lBQ2hDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLENBQUMsMkJBQTJCO1VBQ3hGO1lBQ0UsTUFBTSxlQUFlLEdBQUcsS0FBSyxTQUFTLGFBQWE7WUFDbkQsVUFBSSxDQUFDLGVBQWUsQ0FBQywwQ0FBRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLHNCQUFjLEVBQUM7WUFDbkUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO2FBQ3hFO1NBQ0o7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLElBQUksQ0FBQyxHQUFXLEVBQUUsS0FBVztRQUNoQyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSztTQUNqQzthQUFNLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQztTQUNoQzthQUFNLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3ZEO0lBQ0wsQ0FBQztJQUVPLGdDQUFnQyxDQUFDLEdBQVc7UUFDaEQsT0FBTyxDQUFDLEtBQVcsRUFBRSxFQUFFO1lBQ25CLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtnQkFDckIsSUFBSSxLQUFLLEtBQUssTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUN6QixxQkFBcUI7b0JBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsZ0JBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFDLHFDQUFxQztpQkFDL0Y7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLO2lCQUM1QjtnQkFDRCxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQzthQUMxQztZQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDNUIsQ0FBQztJQUNMLENBQUM7Q0FDSjtBQXhIRCwwQkF3SEM7Ozs7Ozs7Ozs7Ozs7O0FDN0hEOzs7O0dBSUc7O0FBSUgsb0ZBQStCO0FBRS9CLE1BQU0sSUFBSyxTQUFRLGlCQUFPO0lBYXRCLFlBQW1CLElBQUksRUFBRSxRQUE2QjtRQUNsRCxLQUFLLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUMsTUFBTSxDQUFDO1FBSHJDLDBCQUFxQixHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUtsRSxpQkFBaUI7UUFDakIsS0FBSyxNQUFNLEdBQUcsSUFBSSxRQUFRLEVBQUU7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQzthQUN6QztTQUNKO1FBRUQsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUMzRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQzNELElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxNQUFNLEVBQUUsVUFBVTtZQUNsQixNQUFNLEVBQUUsVUFBVTtTQUNyQixDQUFDO0lBQ04sQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLElBQVc7UUFDckIsSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN4QixTQUFTO1lBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxNQUFNLEVBQUUsSUFBSTtnQkFDWixNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDeEIsQ0FBQztTQUNMO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUTtJQUN4QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxNQUFNLENBQUMsSUFBVztRQUNyQixJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3hCLFNBQVM7WUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDckIsTUFBTSxFQUFFLElBQUk7YUFDZixDQUFDO1NBQ0w7UUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRO0lBQ3hCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxZQUFZLENBQUMsZUFBZ0Q7O1FBQ2hFLElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdEIsTUFBTSxTQUFTLEdBQVMsSUFBSSxDQUFDLFFBQVE7WUFDckMsTUFBTSxTQUFTLEdBQVMsSUFBSSxDQUFDLFFBQVE7WUFDckMsTUFBTSxTQUFTLEdBQUcsZUFBZSxDQUFDLE1BQU07WUFDeEMsTUFBTSxTQUFTLEdBQUcsZUFBZSxDQUFDLE1BQU07WUFDeEMsTUFBTSxXQUFXLEdBQUcsU0FBUyxDQUFDLEVBQUUsRUFBRTtZQUNsQyxNQUFNLFdBQVcsR0FBRyxTQUFTLENBQUMsRUFBRSxFQUFFO1lBRWxDLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtnQkFDekIsbUJBQW1CO2dCQUNuQixNQUFNLElBQUksS0FBSyxDQUFDLGNBQWMsV0FBVyxRQUFRLFdBQVcsbUJBQW1CLENBQUM7YUFDbkY7WUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQyxFQUFFO2dCQUN6RCx1QkFBdUI7Z0JBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLFdBQVcsUUFBUSxXQUFXLGtCQUFrQixDQUFDO2FBQ3RGO1lBRUQsSUFBSSxTQUFTLElBQUksU0FBUyxFQUFFO2dCQUN4QixpQkFBaUI7Z0JBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxTQUFTLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFFaEUsVUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxDQUFDLDBDQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUM7Z0JBQzlELFVBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsQ0FBQywwQ0FBRSxNQUFNLENBQUMsSUFBSSxFQUFDO2FBQ2pFO1lBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTO1lBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUztZQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDO1lBRTdELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNqRTtpQkFBTTtnQkFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO2FBQzFEO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ2pFO2lCQUFNO2dCQUNILElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7YUFDMUQ7U0FDSjtRQUNELE9BQU87WUFDSCxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCO0lBQ0wsQ0FBQztDQUNKO0FBRUQsa0JBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7QUNuSW5COzs7O0dBSUc7O0FBR0gseUVBQXVDO0FBR3ZDLG9GQUErQjtBQUUvQixNQUFNLElBQUssU0FBUSxpQkFBTztJQWtDdEIsWUFBbUIsSUFBSSxFQUFFLFFBQTZCO1FBQ2xELEtBQUssQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFkdEMsZUFBVSxHQUFHO1lBQ2hCLENBQUMsRUFBRSxDQUFDO1lBQ0osQ0FBQyxFQUFFLENBQUM7U0FDUDtRQUVNLDJCQUFzQixHQUEwQixJQUFJLEdBQUcsRUFBRTtRQUN6RCwwQkFBcUIsR0FBMEIsSUFBSSxHQUFHLEVBQUU7UUFDeEQseUJBQW9CLEdBQTBCLElBQUksR0FBRyxFQUFFO1FBSXRELDBCQUFxQixHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFLOUQsaUJBQWlCO1FBQ2pCLEtBQUssTUFBTSxHQUFHLElBQUksUUFBUSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUM7YUFDekM7U0FDSjtRQUVELE1BQU0sSUFBSSxpQkFDSDtZQUNDLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDcEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN2QixFQUNFLFFBQVEsQ0FDZDtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2QsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ1QsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ1o7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksRUFBRTtRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUk7SUFDcEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksYUFBYTtRQUNoQiwyREFBMkQ7UUFDM0QsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM3RCxJQUFJLENBQUMsV0FBVztZQUFFLFdBQVcsR0FBRyxJQUFJLEdBQUcsRUFBRTtRQUN6QyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzdELElBQUksQ0FBQyxXQUFXO1lBQUUsV0FBVyxHQUFHLElBQUksR0FBRyxFQUFFO1FBRXpDLE1BQU0sT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNoRCxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDbkQsQ0FBQztRQUVGLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDOUIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksYUFBYTtRQUNoQiwyREFBMkQ7UUFDM0QsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM3RCxJQUFJLENBQUMsV0FBVztZQUFFLFdBQVcsR0FBRyxJQUFJLEdBQUcsRUFBRTtRQUN6QyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzdELElBQUksQ0FBQyxXQUFXO1lBQUUsV0FBVyxHQUFHLElBQUksR0FBRyxFQUFFO1FBRXpDLE1BQU0sT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxXQUFXLEVBQUUsR0FBRyxXQUFXLENBQUMsQ0FBQztRQUN6RCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksQ0FBQyxDQUFDLEtBQWM7UUFDbkIsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNWLENBQUMsRUFBRSxLQUFLO2FBQ1gsQ0FBQztTQUNMO1FBQ0QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxDQUFDLENBQUMsS0FBYztRQUNuQixJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1YsQ0FBQyxFQUFFLEtBQUs7YUFDWCxDQUFDO1NBQ0w7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksUUFBUSxDQUFDLFFBQThCO1FBQzFDLElBQUksUUFBUSxHQUFHLEVBQUU7UUFFakIsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxRQUFRLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxFQUFFO1lBQzlELElBQUksR0FBRyxJQUFJLFFBQVEsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQzthQUNwQztZQUNELElBQUksR0FBRyxJQUFJLFFBQVEsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQzthQUNwQztZQUVELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3pDLE9BQU8sSUFBSSxDQUFDLFVBQVU7YUFDekI7aUJBQU07Z0JBQ0gsUUFBUSxHQUFHO29CQUNQLCtCQUErQjtvQkFDL0IsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQ25ELE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2lCQUN0RDtnQkFFRCxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO29CQUN2QyxnQ0FBZ0M7b0JBQ2hDLHlCQUF5QjtvQkFDekIsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBYTtvQkFDaEMsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBYztvQkFDakMsSUFBSSxHQUFHLEVBQUU7d0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsK0JBQStCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQzt3QkFDaEUsS0FBSyxNQUFNLElBQUksSUFBSSxHQUFHLEVBQUU7NEJBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQzt5QkFDaEU7cUJBQ0o7Z0JBQ0wsQ0FBQyxDQUFDO2dCQUVGLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQztnQkFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDO2FBQ3ZFO1NBQ0o7UUFFRCxPQUFPLElBQUksQ0FBQyxVQUFVO0lBQzFCLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNLLE9BQU8sQ0FBQyxLQUFhO1FBQ3pCLElBQUksY0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixLQUFLLG1CQUFtQixDQUFDO2FBQy9EO1lBQ0QsSUFBSSxjQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN0QixNQUFNLElBQUksS0FBSyxDQUFDLHlDQUF5QyxDQUFDO2FBQzdEO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUM7WUFDdEMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLO1NBQ3BCO2FBQU07WUFDSCxNQUFNLElBQUksS0FBSyxDQUFDLGNBQWMsS0FBSyxFQUFFLENBQUM7U0FDekM7SUFDTCxDQUFDO0NBQ0o7QUFFRCxrQkFBZSxJQUFJOzs7Ozs7Ozs7Ozs7OztBQ2pObkI7Ozs7R0FJRzs7QUFHSCw4RUFBK0I7QUFDL0Isb0ZBQWtDO0FBQ2xDLG9GQUFrQztBQUNsQyxnRkFBMkM7QUFDM0MsK0VBQW9DO0FBQ3BDLG9GQUFxQztBQUNyQywrR0FBOEQ7QUFDOUQsK0VBQXNDO0FBRXRDLGlGQUE4QztBQUU5QyxNQUFxQixJQUFJO0lBbUJyQjs7O09BR0c7SUFDSCxZQUFtQixPQUFZO1FBcEJ4QixjQUFTLEdBQUcsSUFBSSxHQUFHLEVBQUU7UUFDckIsZ0JBQVcsR0FBRyxJQUFJLGNBQUksRUFBRTtRQUN4QixxQkFBZ0IsR0FBMkIsSUFBSSxHQUFHLEVBQUU7UUFDcEQscUJBQWdCLEdBQTJCLElBQUksR0FBRyxFQUFFO1FBSXBELGNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBQywwQkFBMEI7UUFFakYsZ0JBQVcsR0FBeUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUV4RCxpQkFBWSxHQUFHLEtBQUssRUFBQyw4QkFBOEI7UUFHbEQsV0FBTSxHQUE0QixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQU85RCxJQUFJLENBQUMsQ0FBQyxXQUFXLElBQUksT0FBTyxDQUFDLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEtBQUssS0FBSyxFQUFFO1lBQ2xFLE1BQU0sS0FBSyxDQUFDLGlEQUFpRCxDQUFDO1NBQ2pFO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUztRQUVwQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUM7UUFDeEQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztRQUVsQyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFDLHVEQUF1RDtRQUN2RyxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLElBQUksQ0FBQztRQUMvQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJO1FBQ2hELE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUk7UUFDbEQsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZFLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNO1FBRXRCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxtQkFBUSxDQUFDO1lBQzNCLE1BQU07WUFDTixLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLO1lBQzNCLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU07WUFDN0IsZUFBZSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZTtZQUMvQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTO1lBQ25DLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVM7WUFDbkMsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNsQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3JDLENBQUM7UUFFRixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxnQ0FBa0IsQ0FBQyxJQUFJLENBQUM7SUFDNUQsQ0FBQztJQUVEOzs7T0FHRztJQUNJLGVBQWUsQ0FBQyxLQUF3QjtRQUMzQyxJQUFJLEtBQUssRUFBRTtZQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLEtBQUs7WUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7U0FDNUM7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZTtJQUN6QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksSUFBSSxDQUFDLFlBQXNDO1FBQzlDLElBQUksWUFBWSxLQUFLLFNBQVMsRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQyxNQUFNO1NBQ3JCO2FBQU07WUFDSCxrQkFBa0I7WUFDbEIsSUFBSSxDQUFDLE1BQU0sbUNBQVEsSUFBSSxDQUFDLE1BQU0sR0FBSyxZQUFZLENBQUU7WUFDakQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBRTtZQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksY0FBSSxFQUFFO1lBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLEdBQUcsRUFBRTtZQUNqQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxHQUFHLEVBQUU7WUFFakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUU7WUFFM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ25DO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNJLE9BQU8sQ0FBQyxRQUE2QjtRQUN4QyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksT0FBTyxDQUFDLFFBQTZCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksUUFBUSxDQUFDLFNBQWdDO1FBQzVDLE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUN4QyxRQUFRLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ3BDLE1BQU0sSUFBSSxHQUFHLElBQUksY0FBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUM7WUFFckMsT0FBTyxJQUFJO1FBQ2YsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ2xDLE9BQU8sUUFBUTtJQUNuQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFFBQVEsQ0FBQyxTQUFnQztRQUM1QyxNQUFNLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQzVDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZDLE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsUUFBUSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUM1QyxRQUFRLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBRTVDLE1BQU0sSUFBSSxHQUFHLElBQUksY0FBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUM7WUFDckMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUk7U0FDckI7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUMseUNBQXlDO1FBQ2xHLE9BQU8sUUFBUTtJQUNuQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksV0FBVyxDQUFDLEVBQVU7UUFDekIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxhQUFhLENBQUMsTUFBYyxFQUFFLE1BQWM7UUFDL0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxLQUFLO1FBQ1IsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxLQUFLO1FBQ1IsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksSUFBSTtRQUNQLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksR0FBRyxFQUFFO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxjQUFJLEVBQUU7UUFDN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksR0FBRyxFQUFFO1FBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLEdBQUcsRUFBRTtRQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRTtJQUMvQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxPQUFPO1FBQ1YsSUFBSSxDQUFDLElBQUksRUFBRTtRQUNYLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO0lBQzFCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxXQUFXLENBQUMsSUFBWTtRQUMzQixJQUFJLElBQUksSUFBSSxPQUFPO1lBQUUsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBRXpDLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0NBQXdDLElBQUksRUFBRSxDQUFDO1FBQzdELE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7SUFDbkMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxvQkFBb0IsQ0FDdkIsUUFBNkI7UUFFN0IsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDO1FBQ3BELElBQUksRUFBRSxFQUFFO1lBQ0osSUFBSSxPQUFPLEVBQUUsS0FBSyxRQUFRLEVBQUU7Z0JBQ3hCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO2dCQUNqQyxPQUFPO29CQUNILElBQUksRUFBRSxNQUFNO29CQUNaLE9BQU8sRUFBRSxJQUFJO2lCQUNoQjthQUNKO1lBQ0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUNuQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLE9BQU87b0JBQ0gsSUFBSSxFQUFFLE1BQU07b0JBQ1osT0FBTyxFQUFFLElBQUk7aUJBQ2hCO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNJLElBQUk7UUFDUCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRTtJQUMxQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxVQUFVLENBQ2IsVUFBa0MsRUFDbEMsV0FBcUIsRUFDckIsUUFBeUI7UUFFekIsZ0JBQWdCO1FBQ2hCLE1BQU0sZ0JBQWdCLEdBQUcsRUFBRTtRQUMzQixNQUFNLGFBQWEsR0FBRyxJQUFJO1FBQzFCLE1BQU0sWUFBWSxHQUFHLGdCQUFnQixHQUFHLGFBQWE7UUFDckQsTUFBTSxXQUFXLEdBQUcsQ0FBQyxHQUFHLFlBQVk7UUFDcEMsTUFBTSx3QkFBd0IsR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFO1lBQy9DLElBQUksS0FBSyxJQUFJLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNoQyxPQUFNO2FBQ1Q7WUFDRCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2xFLE1BQU0sWUFBWSxxQkFDWCxVQUFVLENBQUMsS0FBSyxDQUFDLENBQ3ZCO1lBQ0QsTUFBTSxVQUFVLEdBQUc7Z0JBQ2YsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDLEVBQUUsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELENBQUMsRUFBRSxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNuRDtZQUNELE1BQU0sZUFBZSxHQUFHO2dCQUNwQixDQUFDLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLENBQUMsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ3pCO1lBQ0QsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFTLEVBQUUsRUFBRTtnQkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUNoQixDQUFDO1lBQ0QsSUFBSSxJQUFJLEdBQUcsQ0FBQztZQUNaLE1BQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUU7Z0JBQy9CLFlBQVksQ0FBQyxDQUFDLEdBQUcsZUFBZSxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO2dCQUM1RSxZQUFZLENBQUMsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztnQkFDNUUsWUFBWSxDQUFDLENBQUMsR0FBRyxlQUFlLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7Z0JBQzVFLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDO2dCQUM1QixJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNYLElBQUksUUFBUTtvQkFBRSxRQUFRLENBQUMsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLENBQUM7Z0JBQ25ELElBQUksSUFBSSxDQUFDO2dCQUNULElBQUksSUFBSSxJQUFJLFdBQVcsRUFBRTtvQkFDckIsYUFBYSxDQUFDLFNBQVMsQ0FBQztvQkFDeEIsd0JBQXdCLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztpQkFDdEM7WUFDTCxDQUFDLEVBQUUsV0FBVyxDQUFDO1FBQ25CLENBQUM7UUFDRCx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFFBQVEsQ0FBQyxJQUFVO1FBQ3RCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDM0IsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQztJQUN4RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLEtBQUssQ0FBQyxDQUFTLEVBQUUsQ0FBUztRQUM3QixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxNQUFjLEVBQUUsTUFBaUI7UUFDM0MsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7SUFDM0QsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFNBQVMsQ0FBQyxLQUE0QjtRQUN6QyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUMsV0FBVztTQUMxQjtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSztRQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzlDLE9BQU8sSUFBSSxDQUFDLFdBQVc7SUFDM0IsQ0FBQztJQUNEOzs7T0FHRztJQUNJLEVBQUUsQ0FBQyxTQUFpQixFQUFFLFFBQXlCO1FBQ2xELElBQUksU0FBUyxDQUFDLFdBQVcsRUFBRSxLQUFLLE1BQU0sRUFBRTtZQUNwQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxzQkFBYyxDQUFDO1NBQ3pFO2FBQU0sSUFBSSxTQUFTLENBQUMsV0FBVyxFQUFFLEtBQUssS0FBSyxFQUFFO1lBQzFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLHNCQUFjLENBQUM7U0FDeEU7YUFBTSxJQUFJLFNBQVMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxXQUFXLEVBQUU7WUFDaEQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsc0JBQWMsQ0FBQztTQUM5RTthQUFNLElBQUksU0FBUyxDQUFDLFdBQVcsRUFBRSxLQUFLLFNBQVMsRUFBRTtZQUM5QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxzQkFBYyxDQUFDO1NBQzVFO2FBQU0sSUFBSSxTQUFTLENBQUMsV0FBVyxFQUFFLEtBQUssT0FBTyxFQUFFO1lBQzVDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLHNCQUFjLENBQUM7U0FDMUU7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLEdBQUcsQ0FBQyxTQUFpQixFQUFFLFFBQTBCO1FBQ3BELElBQUksU0FBUyxDQUFDLFdBQVcsRUFBRSxLQUFLLE1BQU0sRUFBRTtZQUNwQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxzQkFBYyxDQUFDO1NBQzFFO2FBQU0sSUFBSSxTQUFTLENBQUMsV0FBVyxFQUFFLEtBQUssS0FBSyxFQUFFO1lBQzFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLHNCQUFjLENBQUM7U0FDekU7YUFBTSxJQUFJLFNBQVMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxXQUFXLEVBQUU7WUFDaEQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsc0JBQWMsQ0FBQztTQUMvRTthQUFNLElBQUksU0FBUyxDQUFDLFdBQVcsRUFBRSxLQUFLLFNBQVMsRUFBRTtZQUM5QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxzQkFBYyxDQUFDO1NBQzdFO2FBQU0sSUFBSSxTQUFTLENBQUMsV0FBVyxFQUFFLEtBQUssT0FBTyxFQUFFO1lBQzVDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLHNCQUFjLENBQUM7U0FDM0U7SUFDTCxDQUFDOztBQTVXTCx1QkE2V0M7QUE1V2lCLFVBQUssR0FBRyxLQUFLO0FBcVgvQixNQUFNLENBQUMsSUFBSSxHQUFHLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDeFlsQjs7O0dBR0c7OztBQU9ILE1BQWEsa0JBQWtCO0lBd0IzQixZQUFtQixJQUFVO1FBcEJyQixtQkFBYyxHQUFHLEtBQUs7UUFDdEIsb0JBQWUsR0FBRyxLQUFLO1FBQ3ZCLDRCQUF1QixHQUFHLENBQUM7UUFTM0IsZ0JBQVcsR0FBRyxLQUFLO1FBQ25CLGdCQUFXLEdBQUcsS0FBSztRQVN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQzNELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxHQUFHLEVBQUU7UUFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLEdBQUcsRUFBRTtRQUMvQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxHQUFHLEVBQUU7UUFDakMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksR0FBRyxFQUFFO1FBQ3JDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLEdBQUcsRUFBRTtJQUN2QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLEtBQUssQ0FBQyxDQUFTLEVBQUUsQ0FBUztRQUM3QixNQUFNLFlBQVkscUJBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUU7UUFDakQsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ25CLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztJQUM1QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxNQUFjLEVBQUUsTUFBaUI7UUFDM0MsTUFBTSxZQUFZLHFCQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFFO1FBQ2pELElBQUksU0FBUyxHQUFHLE1BQU07UUFDdEIsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNaLFNBQVMsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1NBQ3RGO1FBQ0QsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxTQUFTO1FBRTFCLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxZQUFZLENBQUMsQ0FBQztRQUMzRCxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsWUFBWSxDQUFDLENBQUM7UUFFM0QsWUFBWSxDQUFDLENBQUMsSUFBSSxNQUFNO1FBRXhCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDO0lBQzVDLENBQUM7SUFFRDs7O09BR0c7SUFDSSxjQUFjLENBQUMsR0FBYTtRQUMvQixNQUFNLFlBQVkscUJBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUU7UUFDakQsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQztRQUVqRCxNQUFNLE1BQU0sR0FBRztZQUNYLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQztZQUNoQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUM7U0FDcEM7UUFDRCxZQUFZLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUM5QixZQUFZLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7UUFDakMsT0FBTyxZQUFZO0lBQ3ZCLENBQUM7SUFFRDs7T0FFRztJQUNJLE1BQU0sQ0FBQyxRQUF5QjtRQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFFbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ3hCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSTtTQUM3QjtJQUNMLENBQUM7SUFFTSxPQUFPLENBQUMsUUFBeUI7UUFDcEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBRXJDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRTtZQUM1QixJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLO1NBQzlCO0lBQ0wsQ0FBQztJQUVNLE9BQU8sQ0FBQyxRQUF5QjtRQUNwQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBeUI7UUFDckMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDdEMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU0sV0FBVyxDQUFDLFFBQXlCO1FBQ3hDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLFlBQVksQ0FBQyxRQUF5QjtRQUN6QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUMxQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTSxTQUFTLENBQUMsUUFBeUI7UUFDdEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFDckMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU0sVUFBVSxDQUFDLFFBQXlCO1FBQ3ZDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLEtBQUssQ0FBQyxRQUF5QjtRQUNsQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU0sTUFBTSxDQUFDLFFBQXlCO1FBQ25DLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNwQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTSxpQ0FBaUMsQ0FBQyxDQUFTO1FBQzlDLElBQUksQ0FBQyx1QkFBdUIsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxDQUFDLEVBQUU7WUFDM0QsOENBQThDO1lBQzlDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUk7U0FDOUI7SUFDTCxDQUFDO0lBRU0saUNBQWlDLENBQUMsQ0FBUztRQUM5QyxJQUFJLENBQUMsdUJBQXVCLElBQUksQ0FBQztRQUNqQyxJQUFJLElBQUksQ0FBQyx1QkFBdUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRTtZQUNoRSxpRUFBaUU7WUFDakUsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSztTQUMvQjtJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssVUFBVSxDQUFDLEdBQWU7UUFDOUIsTUFBTSxZQUFZLHFCQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFFO1FBQ2pELE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLElBQUksR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVU7UUFDM0QsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUztRQUMxRCxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksS0FBSyxFQUFFO1lBQ1AsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDO1lBQzlCLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQztZQUNqRCxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUM7WUFFakQsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBRW5CLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUVoQixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQ3RDLFFBQVEsQ0FBQztnQkFDTCxLQUFLLEVBQUUsR0FBRztnQkFDVixJQUFJLEVBQUUsTUFBTTtnQkFDWixTQUFTLEVBQUUsWUFBWTthQUMxQixDQUFDLENBQ0w7U0FDSjtRQUVELEdBQUcsQ0FBQyxjQUFjLEVBQUU7SUFDeEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyxlQUFlLENBQUMsR0FBZTs7UUFDbkMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVTtRQUMzRCxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTO1FBQzFELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDO1FBRTNDLE1BQU0sWUFBWSxxQkFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBRTtRQUVqRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUk7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDNUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVsRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUNuRCxDQUFDO1lBQ0QsQ0FBQyxFQUFFLElBQUk7U0FDVixDQUFDO1FBRUYsVUFBSSxJQUFJLENBQUMsZ0JBQWdCLDBDQUFFLE9BQU8sRUFBRTtZQUNoQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTztZQUM3QyxJQUFJLFFBQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxJQUFJLE1BQUssTUFBTSxFQUFFO2dCQUMxQiwyQkFBMkI7Z0JBQzNCLGlDQUFpQztnQkFDakMsSUFBSSxDQUFDLHlCQUF5QixxQkFBUSxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUU7YUFDN0Q7WUFDRCxPQUFPLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7Z0JBQ2hELFFBQVEsQ0FBQztvQkFDTCxLQUFLLEVBQUUsR0FBRztvQkFDVixJQUFJLEVBQUUsV0FBVztvQkFDakIsT0FBTztpQkFDVixDQUFDO1lBQ04sQ0FBQyxDQUFDO1NBQ0w7YUFBTTtZQUNILElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDM0MsUUFBUSxDQUFDO29CQUNMLEtBQUssRUFBRSxHQUFHO29CQUNWLElBQUksRUFBRSxXQUFXO2lCQUNwQixDQUFDO1lBQ04sQ0FBQyxDQUFDO1NBQ0w7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLGVBQWUsQ0FBQyxHQUFlOztRQUNuQyxJQUFJLFlBQVkscUJBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUU7UUFDL0MsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVTtRQUMzRCxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTO1FBRTFELE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXO1FBQ3hDLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGdCQUFnQjtRQUVsRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJO1lBQ3ZCLE1BQU0sT0FBTyxHQUFHLFVBQUksQ0FBQyxnQkFBZ0IsMENBQUUsT0FBZTtZQUN0RCxvRUFBb0U7WUFDcEUsV0FBVztZQUNYLElBQ0ksUUFBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLElBQUksTUFBSyxNQUFNO2dCQUN4QixPQUFPLENBQUMsc0JBQXNCLENBQUMsSUFBSTtvQkFDL0IsT0FBTyxDQUFDLHFCQUFxQixDQUFDLElBQUk7b0JBQ2xDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQ3ZDO2dCQUNFLHVCQUF1QjtnQkFDdkIsSUFBSSxDQUFDLGVBQWUsRUFBRTtvQkFDbEIsbUNBQW1DO29CQUNuQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7d0JBQ2hELFFBQVEsQ0FBQzs0QkFDTCxLQUFLLEVBQUUsR0FBRzs0QkFDVixJQUFJLEVBQUUsV0FBVzs0QkFDakIsT0FBTzt5QkFDVixDQUFDO29CQUNOLENBQUMsQ0FBQztpQkFDTDtnQkFFRCx1QkFBdUI7Z0JBQ3ZCLE9BQU8sQ0FBQyxRQUFRLENBQUM7b0JBQ2IsQ0FBQyxFQUNHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO3dCQUNoQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDO29CQUM5QyxDQUFDLEVBQUUsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDO2lCQUNuRixDQUFDO2dCQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUVoQixPQUFPLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7b0JBQy9DLFFBQVEsQ0FBQzt3QkFDTCxLQUFLLEVBQUUsR0FBRzt3QkFDVixJQUFJLEVBQUUsVUFBVTt3QkFDaEIsT0FBTztxQkFDVixDQUFDO2dCQUNOLENBQUMsQ0FBQzthQUNMO2lCQUFNO2dCQUNILDhCQUE4QjtnQkFDOUIsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3BFLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNwRSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFO29CQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7b0JBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNoQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQ3JDLFFBQVEsQ0FBQzt3QkFDTCxLQUFLLEVBQUUsR0FBRzt3QkFDVixJQUFJLEVBQUUsS0FBSzt3QkFDWCxTQUFTLEVBQUUsWUFBWTtxQkFDMUIsQ0FBQyxDQUNMO2lCQUNKO2FBQ0o7U0FDSjthQUFNO1lBQ0gsUUFBUTtZQUNSLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQzNDLE1BQU0sT0FBTyxTQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLDBDQUFFLE9BQU87WUFDdkUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU87WUFDL0IsSUFBSSxvQkFBb0IsS0FBSyxPQUFPLEVBQUU7Z0JBQ2xDLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUNqRCxRQUFRLENBQUM7b0JBQ0wsS0FBSyxFQUFFLEdBQUc7b0JBQ1YsSUFBSSxFQUFFLFdBQVc7b0JBQ2pCLE9BQU87aUJBQ1YsQ0FBQyxFQUNMO2FBQ0o7aUJBQU07Z0JBQ0gsb0JBQW9CLGFBQXBCLG9CQUFvQix1QkFBcEIsb0JBQW9CLENBQUUscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FDN0QsUUFBUSxDQUFDO29CQUNMLEtBQUssRUFBRSxHQUFHO29CQUNWLElBQUksRUFBRSxVQUFVO29CQUNoQixPQUFPLEVBQUUsb0JBQW9CO2lCQUNoQyxDQUFDLEVBQ0w7Z0JBQ0QsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQ2pELFFBQVEsQ0FBQztvQkFDTCxLQUFLLEVBQUUsR0FBRztvQkFDVixJQUFJLEVBQUUsV0FBVztvQkFDakIsT0FBTztpQkFDVixDQUFDLEVBQ0w7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyxhQUFhLENBQUMsR0FBZTs7UUFDakMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDdkIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNsQixPQUFPO2dCQUNQLFVBQUksSUFBSSxDQUFDLGdCQUFnQiwwQ0FBRSxPQUFPLENBQUMsb0JBQW9CLEVBQUU7b0JBQ3JELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFlO29CQUNyRCxPQUFPLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FDOUMsUUFBUSxDQUFDO3dCQUNMLEtBQUssRUFBRSxHQUFHO3dCQUNWLElBQUksRUFBRSxTQUFTO3dCQUNmLE9BQU87cUJBQ1YsQ0FBQyxDQUNMO2lCQUNKO2FBQ0o7aUJBQU07Z0JBQ0gsUUFBUTtnQkFDUixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTztnQkFDN0MsT0FBTyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQzVDLFFBQVEsQ0FBQztvQkFDTCxLQUFLLEVBQUUsR0FBRztvQkFDVixJQUFJLEVBQUUsT0FBTztvQkFDYixPQUFPO2lCQUNWLENBQUMsQ0FDTDthQUNKO1lBQ0QsVUFBVTtZQUNWLFVBQUksSUFBSSxDQUFDLGdCQUFnQiwwQ0FBRSxPQUFPLENBQUMsb0JBQW9CLEVBQUU7Z0JBQ3JELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFrQjtnQkFDeEQsT0FBTyxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQzlDLFFBQVEsQ0FBQztvQkFDTCxLQUFLLEVBQUUsR0FBRztvQkFDVixJQUFJLEVBQUUsU0FBUztvQkFDZixPQUFPO2lCQUNWLENBQUMsQ0FDTDthQUNKO1NBQ0o7YUFBTTtZQUNILGlCQUFpQjtZQUNqQixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FDekMsUUFBUSxDQUFDO2dCQUNMLEtBQUssRUFBRSxHQUFHO2dCQUNWLElBQUksRUFBRSxTQUFTO2FBQ2xCLENBQUMsQ0FDTDtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNuQixpQkFBaUI7Z0JBRWpCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUN2QyxRQUFRLENBQUM7b0JBQ0wsS0FBSyxFQUFFLEdBQUc7b0JBQ1YsSUFBSSxFQUFFLE9BQU87aUJBQ2hCLENBQUMsQ0FDTDthQUNKO1NBQ0o7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUs7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTO0lBQ3JDLENBQUM7SUFFTyxpQkFBaUI7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUM7UUFDakYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDO0lBQ2pGLENBQUM7SUFFTyxvQkFBb0I7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRU8saUJBQWlCO1FBQ3JCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNO1FBQzFCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFTyxvQkFBb0I7UUFDeEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU07UUFDMUIsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RSxNQUFNLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hFLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEUsQ0FBQztDQUNKO0FBL2FELGdEQSthQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZiRCwrRUFLaUI7QUFLakIsTUFBYSxvQkFBb0I7SUFzQjdCLFlBQ0ksRUFBMEIsRUFDMUIsTUFBVyxFQUNYLE9BQWdCLEVBQ2hCLFNBQXVCO1FBbEJqQixVQUFLLEdBQUcsQ0FBQztRQVlULHNCQUFpQixHQUFHLElBQUksR0FBRyxFQUFFO1FBUW5DLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLE1BQU07UUFDekQsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFO1FBQ1osSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU07UUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLElBQUksQ0FBQztRQUU5QyxJQUFJLENBQUMsVUFBVSxHQUFHLG1DQUEyQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDN0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxxQkFBYSxDQUN4QixJQUFJLENBQUMsRUFBRSxFQUNQLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQ3hCLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEVBQzFCLElBQUksQ0FBQyxVQUFVLENBQ2xCO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxtQ0FBMkIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ2pFLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQWEsQ0FDMUIsSUFBSSxDQUFDLEVBQUUsRUFDUCxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUMxQixPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxFQUM1QixJQUFJLENBQUMsWUFBWSxDQUNwQjtRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUztRQUUxQix3Q0FBd0M7UUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDM0Q7aUJBQU07Z0JBQ0gsd0NBQXdDO2dCQUN4Qyx3SkFBd0o7Z0JBQ3hKLGtCQUFrQjtnQkFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQzthQUNsRDtZQUVELElBQUksQ0FBQyxNQUFNLEdBQUcseUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hELENBQUMsQ0FBQztRQUVGLGlDQUFpQztRQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUNyQyxJQUFJLElBQUksS0FBSyxPQUFPLEVBQUU7Z0JBQ2xCLHNCQUFzQjtnQkFDdEIsc0NBQXNDO2dCQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7b0JBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQzdFLElBQUksQ0FBQyxNQUFNLEdBQUcseUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ3ZEO2lCQUFNO2dCQUNILElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN6RDtRQUNMLENBQUMsQ0FBQztRQUVGLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2hDLGtDQUFrQztRQUNsQyxNQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUM7UUFDakYsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztRQUN2RSxNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUM7UUFDL0UsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO1FBQzdFLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQztRQUVqRixxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLE1BQU0sVUFBVSxHQUFHLElBQUksWUFBWSxDQUFDO1lBQ2hDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFpQixDQUFDLEVBQUUsQ0FBQztZQUN0QixDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxFQUFpQixDQUFDLEVBQUUsQ0FBQztTQUN0QyxDQUFDO1FBQ0Ysa0JBQWtCLEtBQUssSUFBSTtZQUN2QixJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEtBQUssRUFBRSxVQUFVLENBQUM7UUFFbkUsTUFBTSxLQUFLLEdBQUcsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEMsYUFBYSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDO1FBRWxFLE1BQU0sU0FBUyxHQUFHLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLGlCQUFpQixLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLENBQUM7UUFFOUUsTUFBTSxRQUFRLEdBQUcsSUFBSSxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1RCxnQkFBZ0IsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDO1FBRTNFLGtCQUFrQixLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDO1FBRXJGLGlDQUFpQztRQUNqQywwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNsQyxNQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUM7UUFDckYsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQztRQUMzRSxNQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUM7UUFDbkYsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDO1FBQ2pGLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQztRQUVyRixvQkFBb0IsS0FBSyxJQUFJO1lBQ3pCLElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQztRQUNyRSxlQUFlLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUM7UUFDdEUsbUJBQW1CLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLFNBQVMsQ0FBQztRQUNsRixrQkFBa0IsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsUUFBUSxDQUFDO1FBQy9FLG9CQUFvQixLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzdGLENBQUM7SUFFTSxhQUFhLENBQUMsT0FBb0IsRUFBRSxRQUFnQjtRQUN2RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTztRQUMxQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7SUFDakQsQ0FBQztJQUVNLGFBQWEsQ0FBQyxPQUFvQjtRQUNyQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQzlDLENBQUM7SUFFRDs7O09BR0c7SUFDSSxvQkFBb0IsQ0FBQyxRQUFnQjtRQUN4QyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7SUFDM0MsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFlBQVksQ0FBQyxTQUFvQjtRQUNwQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2hDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7UUFDbEUsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQztRQUUxRSxNQUFNLEtBQUssR0FBRyxJQUFJLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7UUFFbkMsTUFBTSxTQUFTLEdBQUcsSUFBSSxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDO1FBRTNDLGlDQUFpQztRQUNqQywwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNsQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDO1FBQ3RFLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUM7UUFFOUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQztRQUNyQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDO0lBQ2pELENBQUM7SUFFTSxJQUFJO1FBQ1AsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNoQixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBRTNELElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2xELENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNoQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUNyRCxJQUFJLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUN2QixJQUFJLENBQUMsUUFBUSxFQUNiLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQ2IsS0FBSyxFQUNMLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFDeEMsQ0FBQyxDQUNKO2dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztvQkFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ3RFLENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO1lBRXJFLFVBQVU7WUFDVixJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztZQUM1QyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7WUFFNUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2xELENBQUMsQ0FBQztZQUVGLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFDLG1CQUFtQjtZQUMvRCxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3JELElBQUksQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQ3ZCLElBQUksQ0FBQyxRQUFRLEVBQ2IsSUFBSSxDQUFDLElBQUksRUFDVCxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFDYixLQUFLLEVBQ0wsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUN4QyxDQUFDLENBQ0o7WUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBRTdDLElBQUksQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQztZQUVsRCxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQzlEO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNJLE9BQU8sQ0FBQyxRQUF5QjtRQUNwQyxZQUFZO1FBQ1osUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQW9CLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDO1lBQzVCLG9DQUFvQztZQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDakIsTUFBTSxLQUFLLEdBQUcsdUJBQXVCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQ3pELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztpQkFDM0M7WUFDTCxDQUFDLENBQUM7WUFFRixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMseUNBQXlDO1lBQ3hGLE1BQU0sUUFBUSxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsTUFBTTtZQUNuQyxNQUFNLGFBQWEsR0FBRyxzQkFBYyxDQUFDLFFBQVEsQ0FBQztZQUM5QyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDN0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUVqRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7UUFDekMsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDckQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQ2pCLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFDckQsSUFBSSxDQUFDLEtBQUssRUFDVixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FDOUI7YUFDSjtRQUNMLENBQUMsQ0FBQztRQUVGLGlCQUFpQjtRQUNqQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7UUFDM0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FDakIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUNyRCxJQUFJLENBQUMsS0FBSyxFQUNWLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsTUFBTSxDQUM5QjtRQUVELElBQUksQ0FBQyxLQUFLLElBQUksUUFBUSxDQUFDLE1BQU07SUFDakMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxlQUFlLENBQUMsT0FBb0IsRUFBRSxTQUFpQjtRQUMxRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUM1QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDdEMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7UUFDakUsTUFBTSxrQkFBa0IsR0FBRyxVQUFVLENBQUMsSUFBSTtRQUMxQyxNQUFNLG1CQUFtQixHQUFHLFVBQVUsQ0FBQyxLQUFpQjtRQUN4RCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztRQUNwRCxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDcEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLFNBQVMsMEJBQTBCLE9BQU8sQ0FBQyxJQUFJLFlBQVksQ0FBQztTQUMzRjtRQUNELHVEQUF1RDtRQUN2RCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUN0RCxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JELElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUNqQixJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFDaEQsSUFBSSxDQUFDLEtBQUssRUFDVixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssRUFDakIsSUFBSSxDQUFDLElBQUksQ0FDWjtJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSSxTQUFTO1FBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDO0lBQ2xCLENBQUM7SUFFUyxxQkFBcUIsQ0FBQyxPQUFvQixFQUFFLGFBQXFCO1FBQ3ZFLElBQUksR0FBRztRQUNQLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDekIsTUFBTSxJQUFJLEdBQUcsT0FBZTtZQUM1QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBK0I7WUFFbEQsR0FBRyxHQUFHO2dCQUNGLE1BQU0sRUFBRTtvQkFDSixJQUFJLEVBQUUsV0FBVztvQkFDakIsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztpQkFDbEU7Z0JBQ0QsTUFBTSxFQUFFO29CQUNKLElBQUksRUFBRSxXQUFXO29CQUNqQixLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2lCQUNsRTtnQkFDRCxLQUFLLEVBQUU7b0JBQ0gsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDN0U7Z0JBQ0QsV0FBVyxFQUFFO29CQUNULElBQUksRUFBRSxnQkFBZ0I7b0JBQ3RCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7aUJBQzdCO2dCQUNELFdBQVcsRUFBRTtvQkFDVCxJQUFJLEVBQUUsZ0JBQWdCO29CQUN0QixLQUFLLEVBQUU7d0JBQ0gsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUNuQixLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQ25CLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDbkIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO3FCQUN0QjtpQkFDSjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1AsSUFBSSxFQUFFLGNBQWM7b0JBQ3BCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7aUJBQzNCO2dCQUNELFlBQVksRUFBRTtvQkFDVixJQUFJLEVBQUUsaUJBQWlCO29CQUN2QixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO2lCQUM5QjthQUNKO1NBQ0o7YUFBTTtZQUNILE1BQU0sSUFBSSxHQUFHLE9BQWU7WUFDNUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQStCO1lBRWxELEdBQUcsR0FBRztnQkFDRixRQUFRLEVBQUU7b0JBQ04sSUFBSSxFQUFFLGFBQWE7b0JBQ25CLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2lCQUNoRDtnQkFDRCxLQUFLLEVBQUU7b0JBQ0gsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLEtBQUssRUFBRTt3QkFDSCxLQUFLLENBQUMsS0FBSyxLQUFLLE1BQU07NEJBQ2xCLENBQUMsQ0FBQyxDQUFDOzRCQUNILENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLFVBQVU7Z0NBQ3hCLENBQUMsQ0FBQyxDQUFDO2dDQUNILENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLE9BQU87b0NBQ3JCLENBQUMsQ0FBQyxDQUFDO29DQUNILENBQUMsQ0FBQyxDQUFDO3FCQUNsQjtpQkFDSjtnQkFDRCxNQUFNLEVBQUU7b0JBQ0osSUFBSSxFQUFFLFdBQVc7b0JBQ2pCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2lCQUMxQztnQkFDRCxJQUFJLEVBQUU7b0JBQ0YsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQ2xFO2dCQUNELFdBQVcsRUFBRTtvQkFDVCxJQUFJLEVBQUUsZ0JBQWdCO29CQUN0QixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO2lCQUM3QjtnQkFDRCxXQUFXLEVBQUU7b0JBQ1QsSUFBSSxFQUFFLGdCQUFnQjtvQkFDdEIsS0FBSyxFQUFFO3dCQUNILEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDbkIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUNuQixLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQ25CLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztxQkFDdEI7aUJBQ0o7Z0JBQ0QsTUFBTSxFQUFFO29CQUNKLElBQUksRUFBRSxXQUFXO29CQUNqQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2lCQUN4QjtnQkFDRCxZQUFZO2dCQUNaLENBQUMsRUFBRTtvQkFDQyxJQUFJLEVBQUUsTUFBTTtvQkFDWixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUNuQjtnQkFDRCxVQUFVO2dCQUNWLEtBQUssRUFBRTtvQkFDSCxJQUFJLEVBQUUsU0FBUztvQkFDZixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUM7aUJBQ3JDO2dCQUNELE1BQU0sRUFBRTtvQkFDSixJQUFJLEVBQUUsU0FBUztvQkFDZixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUM7aUJBQ3JDO2dCQUNELGNBQWM7Z0JBQ2QsV0FBVyxFQUFFO29CQUNULElBQUksRUFBRSxnQkFBZ0I7b0JBQ3RCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2lCQUNwRDtnQkFDRCxVQUFVLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLGVBQWU7b0JBQ3JCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2lCQUNsRDtnQkFDRCxXQUFXLEVBQUU7b0JBQ1QsSUFBSSxFQUFFLGdCQUFnQjtvQkFDdEIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7aUJBQ3BEO2dCQUNELFdBQVc7Z0JBQ1gsVUFBVSxFQUFFO29CQUNSLElBQUksRUFBRSxjQUFjO29CQUNwQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUM7aUJBQy9DO2dCQUNELFdBQVcsRUFBRTtvQkFDVCxJQUFJLEVBQUUsY0FBYztvQkFDcEIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDO2lCQUMvQzthQUNKO1NBQ0o7UUFFRCxJQUFJLGFBQWEsSUFBSSxHQUFHLEVBQUU7WUFDdEIsT0FBTyxHQUFHLENBQUMsYUFBYSxDQUFDO1NBQzVCO1FBRUQsc0NBQXNDO1FBQ3RDLE1BQU0sWUFBWSxHQUFHLEVBQUU7UUFDdkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ25DLE1BQU0sS0FBSyxHQUFHLENBQVE7WUFDdEIsTUFBTSxHQUFHLEdBQUcsQ0FBVztZQUN2QixZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHO2dCQUN2QixJQUFJLEVBQUUsR0FBRztnQkFDVCxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7YUFDckI7UUFDTCxDQUFDLENBQUM7UUFFRixPQUFPLFlBQVksQ0FBQyxhQUFhLENBQUM7SUFDdEMsQ0FBQztDQUNKO0FBcGNELG9EQW9jQztBQUVELE1BQU0saUJBQWlCLEdBQUc7SUFDdEIsV0FBVyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDL0UsV0FBVyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDL0UsVUFBVSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZHLGdCQUFnQixFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO0lBQ3RELGdCQUFnQixFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQzdCO0lBQ0QsY0FBYyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQ2xELGlCQUFpQixFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO0NBQzNEO0FBRUQsTUFBTSxpQkFBaUIsR0FBRztJQUN0QixhQUFhLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDL0QsVUFBVSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxNQUFNO1lBQ3pCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLFVBQVU7Z0JBQy9CLENBQUMsQ0FBQyxDQUFDO2dCQUNILENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxPQUFPO29CQUM1QixDQUFDLENBQUMsQ0FBQztvQkFDSCxDQUFDLENBQUMsQ0FBQztLQUNsQjtJQUNELFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDekcsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFDdEQsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDN0I7SUFDRCxXQUFXLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDNUMsWUFBWTtJQUNaLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsQyxVQUFVO0lBQ1YsU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQzlELGNBQWM7SUFDZCxnQkFBZ0IsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLGVBQWUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLGdCQUFnQixFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDcEYsV0FBVztJQUNYLGNBQWMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztDQUNoRjtBQUVELFNBQVMsdUJBQXVCLENBQUMsT0FBb0IsRUFBRSxhQUFxQjtJQUN4RSxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO1FBQ3pCLE9BQU8saUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDO0tBQ25EO1NBQU07UUFDSCxPQUFPLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQztLQUNuRDtBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDeGdCRDs7O0dBR0c7OztBQUlILGtIQUF1RDtBQUV2RCxNQUFhLGlCQUFrQixTQUFRLHFDQUFvQjtJQUN2RDs7Ozs7T0FLRztJQUNILFlBQ0ksRUFBMEIsRUFDMUIsTUFBMEIsRUFDMUIsT0FBZ0IsRUFDaEIsU0FBdUI7UUFFdkIsS0FBSztRQUNELG1CQUFtQixDQUFDLEVBQUUsa0NBRUQsTUFBTSxLQUFFLGdCQUFnQixFQUFFO2dCQUMzQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztnQkFDZCxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHO2dCQUNmLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztnQkFDYixHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRzthQUNqQix1QkFFTSxPQUFPO1FBRWQsZUFBZSxDQUFDLFNBQVMsQ0FDNUI7UUFDRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRTtJQUMvQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksZUFBZSxDQUFDLEtBQWE7UUFDaEMsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQ3hELE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUV4RCxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RCLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDekQsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFN0QsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN6RCxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUM7UUFFRixNQUFNLEdBQUcsR0FBRyxDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUM7UUFDOUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDckQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMzRixDQUFDLENBQUM7SUFDTixDQUFDO0NBQ0o7QUFwREQsOENBb0RDOzs7Ozs7Ozs7Ozs7OztBQzdERDs7O0dBR0c7OztBQUlILGtIQUF1RDtBQUd2RCxNQUFhLGlCQUFrQixTQUFRLHFDQUFvQjtJQUN2RCwrQ0FBK0M7SUFFL0M7Ozs7O09BS0c7SUFDSCxZQUNJLEVBQTBCLEVBQzFCLE1BQTBCLEVBQzFCLE9BQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixTQUF1QjtRQUV2QixLQUFLO1FBQ0QsbUJBQW1CLENBQUMsRUFBRSxrQ0FFRCxNQUFNLEtBQUUsZ0JBQWdCLEVBQUU7Z0JBQzNDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO2dCQUNkLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUc7Z0JBQ2YsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO2dCQUNiLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHO2FBQ2pCLHVCQUVNLE9BQU87UUFFZCxlQUFlLENBQUMsU0FBUyxDQUM1QjtRQUNELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFO0lBQy9CLENBQUM7SUFFRDs7O09BR0c7SUFDSSxlQUFlLENBQUMsS0FBYTtRQUNoQyxZQUFZO1FBQ1osTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO1FBQy9DLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzNGLENBQUM7Q0FDSjtBQWhERCw4Q0FnREM7Ozs7Ozs7Ozs7Ozs7O0FDMUREOzs7R0FHRzs7O0FBRUgsOEdBQW9EO0FBQ3BELDhHQUFvRDtBQUdwRCxrSEFBMEQ7QUFDMUQsa0hBQTBEO0FBSTFELDhFQUF3QztBQUV4QyxNQUFNLHVDQUF1QyxHQUFHLEdBQUcsRUFBQywrRUFBK0U7QUFFbkksTUFBYSxRQUFRO0lBaUJqQjs7O09BR0c7SUFDSCxZQUFtQixPQUF3QjtRQWpCcEMsMEJBQXFCLEdBQUcsQ0FBQyxFQUFDLGtEQUFrRDtRQUM1RSxxQkFBZ0IsR0FBRyxLQUFLLEVBQUMsOEJBQThCO1FBaUIxRCxNQUFNLEVBQ0YsTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBQ04sZUFBZSxFQUNmLFNBQVMsRUFDVCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFdBQVcsRUFDZCxHQUFHLE9BQU87UUFFWCxJQUFJO1lBQ0EsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUN4QztRQUFDLFdBQU07WUFDSixNQUFNLElBQUksS0FBSyxDQUFDLGdEQUFnRCxDQUFDO1NBQ3BFO1FBRUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlO1FBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU07UUFFcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLElBQUksQ0FBQztRQUU5QyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVc7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXO1FBRTlCLElBQUksQ0FBQyxhQUFhLEVBQUU7UUFFcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLCtCQUFpQixDQUNwQyxJQUFJLENBQUMsRUFBRSxFQUNQLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQ25DLFdBQVcsRUFDWCxJQUFJLENBQUMsU0FBUyxDQUNqQjtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSwrQkFBaUIsQ0FDcEMsSUFBSSxDQUFDLEVBQUUsRUFDUCxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxFQUNuQyxXQUFXLEVBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FDakI7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxPQUFPO1FBQ1YsOENBQThDO1FBQzlDLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsdUJBQXVCLENBQUM7UUFDN0UsS0FBSyxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLGVBQWUsRUFBRSxFQUFFLElBQUksRUFBRTtZQUMvQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDOUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO1lBQzdDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDO1NBQ3REO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDO1FBQzlDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDO1FBQ3RELElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDO1FBQ3BELElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQztRQUNsRCxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFdBQVcsRUFBRTtRQUN4RCx1REFBdUQ7SUFDM0QsQ0FBQztJQUVEOzs7T0FHRztJQUNJLGtCQUFrQixDQUFDLEtBQVk7UUFDbEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLO0lBQ2hDLENBQUM7SUFFRDs7T0FFRztJQUNJLFNBQVM7UUFDWixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtRQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtJQUNoQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksUUFBUSxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7O09BR0c7SUFDSSxRQUFRLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQUVNLFlBQVksQ0FBQyxTQUFvQjtRQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7UUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7T0FFRztJQUNJLElBQUk7UUFDUCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN2Qix1RUFBdUU7WUFDdkUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRXBELElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNwRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSztZQUM3QixJQUFJLENBQUMscUJBQXFCLEdBQUcsQ0FBQztTQUNqQztRQUVELElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDNUQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7UUFDdkMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDO1FBRWxELElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUNkLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsRUFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUN6QjtRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUU7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUU7SUFDM0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxlQUFlLENBQUMsUUFBa0I7UUFDckMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDN0MsSUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO1lBQ2YsSUFBSSxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDcEIsd0RBQXdEO2dCQUN4RCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBUztnQkFDcEUsT0FBTyxJQUFJLENBQUMsRUFBRSxFQUFFO2FBQ25CO2lCQUFNO2dCQUNILE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFTO2dCQUNwRSxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN4QyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDO2FBQzlEO1NBQ0o7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGFBQWEsQ0FBQyxRQUFrQjtRQUNuQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVTtRQUM3QixJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDakUsTUFBTSxlQUFlLEdBQUcsSUFBSSxVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFDLEtBQUs7UUFDbEUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVO1FBQ2QsaUVBQWlFO1FBQ2pFLFFBQVEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUNsQixRQUFRLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFDbEIsQ0FBQyxFQUNELENBQUMsRUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFDWixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFDckIsZUFBZSxDQUNsQjtRQUNELE1BQU0sUUFBUSxHQUFHLHNCQUFjLENBQUMsZUFBZSxDQUFDO1FBRWhELE9BQU8sUUFBUTtJQUNuQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksK0JBQStCLENBQUMsQ0FBUztRQUM1QyxJQUFJLENBQUMscUJBQXFCLElBQUksQ0FBQztRQUMvQixJQUFJLElBQUksQ0FBQyxxQkFBcUIsR0FBRyx1Q0FBdUMsRUFBRTtZQUN0RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSTtTQUMvQjtJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNLLGFBQWE7UUFDakIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUU7UUFDbEIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVU7UUFDbEMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVO1FBQzNDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVTtRQUU3QyxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsaUJBQWlCLEVBQUU7UUFDbEMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQztRQUV2QyxNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsYUFBYSxFQUFFO1FBQ3BDLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUM7UUFDeEMsRUFBRSxDQUFDLFVBQVUsQ0FDVCxFQUFFLENBQUMsVUFBVSxFQUNiLENBQUMsRUFDRCxFQUFFLENBQUMsSUFBSSxFQUNQLFdBQVcsRUFDWCxZQUFZLEVBQ1osQ0FBQyxFQUNELEVBQUUsQ0FBQyxJQUFJLEVBQ1AsRUFBRSxDQUFDLGFBQWEsRUFDaEIsSUFBSSxDQUNQO1FBQ0QsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ2pFLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNqRSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO1FBQ25DLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFFMUYsc0JBQXNCO1FBQ3RCLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUV4RCxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsa0JBQWtCLEVBQUU7UUFDbkMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDO1FBQ3pDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDO1FBQ3ZGLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQztRQUMxQyxFQUFFLENBQUMsdUJBQXVCLENBQ3RCLEVBQUUsQ0FBQyxXQUFXLEVBQ2QsRUFBRSxDQUFDLHdCQUF3QixFQUMzQixFQUFFLENBQUMsWUFBWSxFQUNmLEdBQUcsQ0FDTjtRQUVELElBQUksRUFBRSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsb0JBQW9CLEVBQUU7WUFDdkUsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQztTQUNqRDtRQUVELEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUM7UUFFeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHO0lBQ3hCLENBQUM7Q0FDSjtBQWpRRCw0QkFpUUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuUkQsK0VBQWlDO0FBRWpDLE1BQU0sTUFBTSxHQUFHLElBQUksY0FBTSxFQUFFO0FBMEtsQix3QkFBTTtBQXpLZixNQUFNLENBQUMsTUFBTSxHQUFHO0lBQ1osV0FBVyxFQUFFLE1BQU07SUFDbkIsUUFBUSxFQUFFLE9BQU87SUFDakIsU0FBUyxFQUFFLE1BQU07SUFDakIsU0FBUyxFQUFFLE1BQU07SUFDakIsWUFBWSxFQUFFLE9BQU87SUFDckIsZUFBZSxFQUFFLE9BQU87SUFDeEIsY0FBYyxFQUFFLE9BQU87SUFDdkIsY0FBYyxFQUFFLE1BQU07Q0FDekI7QUFDRCxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2IsS0FBSyxFQUFFLE9BQU87SUFDZCxXQUFXLEVBQUUsTUFBTTtJQUNuQixXQUFXLEVBQUUsT0FBTztJQUNwQixHQUFHLEVBQUUsTUFBTTtJQUNYLEdBQUcsRUFBRSxNQUFNO0lBQ1gsR0FBRyxFQUFFLE1BQU07SUFDWCxTQUFTLEVBQUUsT0FBTztJQUNsQixZQUFZLEVBQUUsT0FBTztDQUN4QjtBQUNELE1BQU0sQ0FBQyxRQUFRLEdBQUc7SUFDZCxVQUFVLEVBQUUsTUFBTTtJQUNsQixLQUFLLEVBQUUsTUFBTTtJQUNiLFNBQVMsRUFBRSxNQUFNO0NBQ3BCO0FBQ0QsTUFBTSxDQUFDLElBQUksR0FBRztJQUNWLG1CQUFtQjtJQUNuQixtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLHVCQUF1QjtJQUN2QixxQ0FBcUM7SUFDckMsa0RBQWtEO0lBQ2xELGtEQUFrRDtJQUNsRCxtQ0FBbUM7SUFDbkMsNENBQTRDO0lBQzVDLGdDQUFnQztJQUNoQywwQ0FBMEM7SUFFMUMsNENBQTRDO0lBQzVDLDJCQUEyQjtJQUMzQixtR0FBbUc7SUFDbkcsT0FBTztJQUNQLGlHQUFpRztJQUNqRyxtQkFBbUI7SUFDbkIsaURBQWlEO0lBQ2pELG1CQUFtQjtJQUVuQixFQUFFO0lBQ0YsNkJBQTZCO0lBQzdCLG9CQUFvQjtJQUNwQiwrQkFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUiw4QkFBOEI7SUFDOUIsZ0NBQWdDO0lBQ2hDLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsUUFBUTtJQUNSLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixRQUFRO0lBQ1IsTUFBTTtJQUNOLGlFQUFpRTtJQUNqRSxFQUFFO0lBQ0YsbUVBQW1FO0lBQ25FLEdBQUc7Q0FDTjtBQUVELE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUU7QUFtR2IsNEJBQVE7QUFsR3pCLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsTUFBTTtBQUNqQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU07QUFDL0IsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxhQUFhLENBQUM7QUFFekMsTUFBTSxRQUFRLEdBQUcsSUFBSSxjQUFNLEVBQUU7QUE4RkYsNEJBQVE7QUE3Rm5DLFFBQVEsQ0FBQyxNQUFNLHFCQUFRLE1BQU0sQ0FBQyxPQUFPLENBQUU7QUFDdkMsUUFBUSxDQUFDLE9BQU8sR0FBRztJQUNmLGFBQWEsRUFBRSxNQUFNO0NBQ3hCO0FBQ0QsUUFBUSxDQUFDLFFBQVEsR0FBRztJQUNoQixRQUFRLEVBQUUsTUFBTTtJQUNoQixVQUFVLEVBQUUsT0FBTztDQUN0QjtBQUVELFFBQVEsQ0FBQyxPQUFPLEdBQUc7SUFDZjtRQUNJLGdEQUFnRDtRQUNoRCxvQ0FBb0M7UUFDcEMsNkRBQTZEO1FBQzdELEVBQUU7UUFDRix1REFBdUQ7UUFDdkQsd0VBQXdFO1FBQ3hFLDRCQUE0QjtRQUM1QixxREFBcUQ7UUFDckQsa0RBQWtEO1FBQ2xELDJCQUEyQjtRQUMzQixvQ0FBb0M7UUFDcEMsdUJBQXVCO1FBQ3ZCLHVEQUF1RDtRQUN2RCw2REFBNkQ7UUFDN0Qsa0RBQWtEO1FBQ2xELEdBQUc7S0FDTjtJQUNEO1FBQ0ksdUVBQXVFO1FBQ3ZFLCtEQUErRDtRQUMvRCxHQUFHO0tBQ047SUFDRDtRQUNJLDhEQUE4RDtRQUM5RCw0QkFBNEI7UUFDNUIsZ0JBQWdCO1FBQ2hCLEtBQUs7UUFDTCwrQ0FBK0M7UUFDL0MsZ0JBQWdCO1FBQ2hCLEtBQUs7UUFDTCx5REFBeUQ7UUFDekQsb0NBQW9DO1FBQ3BDLCtCQUErQjtRQUMvQixHQUFHO0tBQ047Q0FDSjtBQUVELFFBQVEsQ0FBQyxJQUFJLEdBQUc7SUFDWixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYiwyRUFBMkU7SUFDM0UsNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCw4Q0FBOEM7SUFDOUMsd0RBQXdEO0lBQ3hELHdEQUF3RDtJQUN4RCx3REFBd0Q7SUFDeEQsdUZBQXVGO0lBQ3ZGLG1DQUFtQztJQUNuQyw4Q0FBOEM7SUFDOUMsc0dBQXNHO0lBQ3RHLHVGQUF1RjtJQUN2RixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLDhDQUE4QztJQUM5Qyx3REFBd0Q7SUFDeEQsd0RBQXdEO0lBQ3hELDBFQUEwRTtJQUMxRSw2RUFBNkU7SUFDN0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1AsS0FBSztJQUNMLEdBQUc7Q0FDTjtBQUVELE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUU7QUFZRyxnQ0FBVTtBQVgvQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU07QUFFaEMsTUFBTSxxQkFBcUIsR0FBRztJQUMxQiwyRUFBMkU7SUFDM0UsdUZBQXVGO0lBQ3ZGLDZFQUE2RTtDQUNoRjtBQUNELHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO0lBQ3ZDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxxQkFBcUI7QUFDOUUsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUtGLCtFQUFpQztBQUVqQyxNQUFNLE1BQU0sR0FBRyxJQUFJLGNBQU0sRUFBRTtBQXFYbEIsd0JBQU07QUFwWGYsTUFBTSxDQUFDLE1BQU0sR0FBRztJQUNaLFdBQVcsRUFBRSxNQUFNO0lBQ25CLFFBQVEsRUFBRSxPQUFPO0lBQ2pCLFdBQVcsRUFBRSxNQUFNO0lBQ25CLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLE9BQU8sRUFBRSxNQUFNO0lBQ2YsWUFBWSxFQUFFLE1BQU07SUFDcEIsU0FBUyxFQUFFLE9BQU87SUFDbEIsSUFBSSxFQUFFLE9BQU87SUFDYixjQUFjLEVBQUUsTUFBTTtJQUN0QixhQUFhLEVBQUUsTUFBTTtJQUNyQixjQUFjLEVBQUUsTUFBTTtJQUN0QixPQUFPLEVBQUUsTUFBTTtJQUNmLGNBQWMsRUFBRSxPQUFPO0lBQ3ZCLGNBQWMsRUFBRSxNQUFNO0NBQ3pCO0FBQ0QsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNiLFFBQVEsRUFBRSxNQUFNO0lBQ2hCLEtBQUssRUFBRSxPQUFPO0lBQ2QsSUFBSSxFQUFFLE1BQU07SUFDWixTQUFTLEVBQUUsTUFBTTtJQUNqQixNQUFNLEVBQUUsT0FBTztJQUNmLENBQUMsRUFBRSxPQUFPO0lBQ1YsV0FBVyxFQUFFLE1BQU07SUFDbkIsVUFBVSxFQUFFLE1BQU07SUFDbEIsV0FBVyxFQUFFLE1BQU07SUFDbkIsSUFBSSxFQUFFLE1BQU07SUFDWixXQUFXLEVBQUUsT0FBTztJQUNwQixXQUFXLEVBQUUsTUFBTTtDQUN0QjtBQUNELE1BQU0sQ0FBQyxRQUFRLEdBQUc7SUFDZCxVQUFVLEVBQUUsTUFBTTtJQUNsQixLQUFLLEVBQUUsTUFBTTtJQUNiLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFFBQVEsRUFBRSxNQUFNO0lBQ2hCLFVBQVUsRUFBRSxPQUFPO0NBQ3RCO0FBQ0QsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNiO1FBQ0ksMERBQTBEO1FBQzFELHdDQUF3QztRQUN4Qyx3Q0FBd0M7UUFDeEMsd0NBQXdDO1FBQ3hDLHNHQUFzRztRQUN0RyxtQkFBbUI7UUFDbkIsR0FBRztLQUNOO0lBQ0Q7UUFDSSxvRUFBb0U7UUFDcEUsNkZBQTZGO1FBQzdGLHdDQUF3QztRQUN4QyxpREFBaUQ7UUFDakQsR0FBRztLQUNOO0lBQ0Q7UUFDSSw0REFBNEQ7UUFDNUQsb0RBQW9EO1FBQ3BELGlEQUFpRDtRQUNqRCxxREFBcUQ7UUFDckQseUJBQXlCO1FBQ3pCLEdBQUc7S0FDTjtDQUNKO0FBQ0QsTUFBTSxDQUFDLElBQUksR0FBRztJQUNWLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUNsQyx3QkFBd0I7SUFDeEIsOERBQThEO0lBQzlELGtDQUFrQztJQUNsQyxnQ0FBZ0M7SUFDaEMsa0NBQWtDO0lBQ2xDLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1AsNEJBQTRCO0lBQzVCLHFDQUFxQztJQUNyQyxzQ0FBc0M7SUFDdEMsZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCwrQkFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQ0FBa0M7SUFDbEMsT0FBTztJQUNQLHdCQUF3QjtJQUN4Qix3REFBd0Q7SUFDeEQsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZiwrQ0FBK0M7SUFDL0MsMEJBQTBCO0lBQzFCLHVDQUF1QztJQUN2Qyx3Q0FBd0M7SUFDeEMsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0Isa0RBQWtEO0lBQ2xELGtGQUFrRjtJQUNsRiwyRkFBMkY7SUFDM0YsdUZBQXVGO0lBQ3ZGLHFGQUFxRjtJQUNyRix1RkFBdUY7SUFDdkYseURBQXlEO0lBQ3pELDZLQUE2SztJQUM3Syw2S0FBNks7SUFDN0sscUxBQXFMO0lBQ3JMLHNMQUFzTDtJQUN0TCwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLE1BQU07SUFDTiw2REFBNkQ7SUFDN0Qsa0VBQWtFO0lBQ2xFLEdBQUc7Q0FDTjtBQUVELE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUU7QUFrUGIsNEJBQVE7QUFqUHpCLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsTUFBTTtBQUNqQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU07QUFDL0IsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxhQUFhLENBQUM7QUFFekMsTUFBTSxRQUFRLEdBQUcsSUFBSSxjQUFNLEVBQUU7QUE2T0YsNEJBQVE7QUE1T25DLFFBQVEsQ0FBQyxNQUFNLHFCQUFRLE1BQU0sQ0FBQyxPQUFPLENBQUU7QUFDdkMsUUFBUSxDQUFDLE9BQU8sR0FBRztJQUNmLGFBQWEsRUFBRSxNQUFNO0NBQ3hCO0FBQ0QsUUFBUSxDQUFDLFFBQVEsR0FBRztJQUNoQixRQUFRLEVBQUUsTUFBTTtJQUNoQixVQUFVLEVBQUUsT0FBTztDQUN0QjtBQUNELFFBQVEsQ0FBQyxPQUFPLEdBQUc7SUFDZixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNqQixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNqQixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNqQjtRQUNJLDBDQUEwQztRQUMxQywyRUFBMkU7UUFDM0UsR0FBRztLQUNOO0lBQ0Q7UUFDSSxzQkFBc0I7UUFDdEIsNkJBQTZCO1FBQzdCLG1DQUFtQztRQUNuQyxtQ0FBbUM7UUFDbkMsUUFBUTtRQUNSLCtFQUErRTtRQUMvRSx3RkFBd0Y7UUFDeEYsZ0VBQWdFO1FBQ2hFLDZGQUE2RjtRQUM3RixvRkFBb0Y7UUFDcEYsa0ZBQWtGO1FBQ2xGLG9GQUFvRjtRQUNwRiwrRUFBK0U7UUFDL0UsNEVBQTRFO1FBQzVFLCtFQUErRTtRQUMvRSxtRkFBbUY7UUFDbkYsbUZBQW1GO1FBQ25GLG9GQUFvRjtRQUNwRiw0REFBNEQ7UUFDNUQsNERBQTREO1FBQzVELGtDQUFrQztRQUNsQyxxQkFBcUI7UUFDckIsY0FBYztRQUNkLHFCQUFxQjtRQUNyQixPQUFPO1FBQ1AsR0FBRztLQUNOO0lBQ0Q7UUFDSSw0QkFBNEI7UUFDNUIsNkJBQTZCO1FBQzdCLG1DQUFtQztRQUNuQyxtQ0FBbUM7UUFDbkMsUUFBUTtRQUNSLCtFQUErRTtRQUMvRSx3RkFBd0Y7UUFDeEYsb0ZBQW9GO1FBQ3BGLGtGQUFrRjtRQUNsRixvRkFBb0Y7UUFDcEYsZ0VBQWdFO1FBQ2hFLDZGQUE2RjtRQUM3RiwrRUFBK0U7UUFDL0UsNEVBQTRFO1FBQzVFLDhFQUE4RTtRQUM5RSxFQUFFO1FBQ0YsbUZBQW1GO1FBQ25GLG1GQUFtRjtRQUNuRixvRkFBb0Y7UUFDcEYsRUFBRTtRQUNGLCtEQUErRDtRQUMvRCwrREFBK0Q7UUFDL0QsRUFBRTtRQUNGLDJDQUEyQztRQUMzQyxvREFBb0Q7UUFDcEQsRUFBRTtRQUNGLDRDQUE0QztRQUM1QyxxQkFBcUI7UUFDckIsY0FBYztRQUNkLHFCQUFxQjtRQUNyQixPQUFPO1FBQ1AsR0FBRztLQUNOO0lBRUQ7UUFDSSxrQkFBa0I7UUFDbEIsMkJBQTJCO1FBQzNCLDRCQUE0QjtRQUM1QiwrQkFBK0I7UUFDL0IsMkNBQTJDO1FBQzNDLDZCQUE2QjtRQUM3QixtQ0FBbUM7UUFDbkMsbUNBQW1DO1FBQ25DLFFBQVE7UUFDUiw2RkFBNkY7UUFDN0YsbUtBQW1LO1FBQ25LLHFLQUFxSztRQUNySyx5QkFBeUI7UUFDekIsR0FBRztLQUNOO0lBRUQ7UUFDSSx3QkFBd0I7UUFDeEIsMkJBQTJCO1FBQzNCLDRCQUE0QjtRQUM1QiwrQkFBK0I7UUFDL0IsMkNBQTJDO1FBQzNDLDZCQUE2QjtRQUM3QixtQ0FBbUM7UUFDbkMsbUNBQW1DO1FBQ25DLFFBQVE7UUFDUiw2RkFBNkY7UUFDN0YseUtBQXlLO1FBQ3pLLDJLQUEySztRQUMzSyx5S0FBeUs7UUFDekssMktBQTJLO1FBQzNLLEVBQUU7UUFDRix1RUFBdUU7UUFDdkUsR0FBRztLQUNOO0lBRUQ7UUFDSSxtQkFBbUI7UUFDbkIsK0JBQStCO1FBQy9CLDJDQUEyQztRQUMzQyw2QkFBNkI7UUFDN0IsbUNBQW1DO1FBQ25DLG1DQUFtQztRQUNuQyxRQUFRO1FBQ1IsNkZBQTZGO1FBQzdGLHFDQUFxQztRQUNyQyxzQ0FBc0M7UUFDdEMsMkJBQTJCO1FBQzNCLDRCQUE0QjtRQUM1QixvS0FBb0s7UUFDcEssZ0xBQWdMO1FBQ2hMLDhLQUE4SztRQUM5SyxzS0FBc0s7UUFDdEssb0RBQW9EO1FBQ3BELEdBQUc7S0FDTjtJQUVEO1FBQ0kseUJBQXlCO1FBQ3pCLCtCQUErQjtRQUMvQiwyQ0FBMkM7UUFDM0MsNkJBQTZCO1FBQzdCLG1DQUFtQztRQUNuQyxtQ0FBbUM7UUFDbkMsUUFBUTtRQUNSLDZGQUE2RjtRQUM3RixxQ0FBcUM7UUFDckMsc0NBQXNDO1FBQ3RDLDJCQUEyQjtRQUMzQiw0QkFBNEI7UUFFNUIsc0JBQXNCO1FBQ3RCLG9LQUFvSztRQUNwSyxnTEFBZ0w7UUFDaEwsOEtBQThLO1FBQzlLLHNLQUFzSztRQUN0SyxtRUFBbUU7UUFDbkUsRUFBRTtRQUNGLHFLQUFxSztRQUNySyxpTEFBaUw7UUFDakwsK0tBQStLO1FBQy9LLHVLQUF1SztRQUN2Syx1RUFBdUU7UUFDdkUsc0NBQXNDO1FBQ3RDLEdBQUc7S0FDTjtJQUVEO1FBQ0ksb0JBQW9CO1FBQ3BCLCtCQUErQjtRQUMvQiwyQ0FBMkM7UUFDM0Msb0VBQW9FO1FBQ3BFLHVHQUF1RztRQUN2RyxHQUFHO0tBQ047SUFFRDtRQUNJLDBCQUEwQjtRQUMxQiw4QkFBOEI7UUFDOUIsa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCwrQkFBK0I7UUFDL0IsMkNBQTJDO1FBQzNDLEVBQUU7UUFDRixvRUFBb0U7UUFDcEUsNkdBQTZHO1FBQzdHLDZHQUE2RztRQUM3RywwQ0FBMEM7UUFDMUMsR0FBRztLQUNOO0NBQ0o7QUFDRCxRQUFRLENBQUMsSUFBSSxHQUFHO0lBQ1osbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsMERBQTBEO0lBQzFELDZEQUE2RDtJQUM3RCxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGlKQUFpSjtJQUNqSixnQ0FBZ0M7SUFDaEMseURBQXlEO0lBQ3pELHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLDZJQUE2STtJQUM3SSxnQ0FBZ0M7SUFDaEMsaUVBQWlFO0lBQ2pFLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLHFKQUFxSjtJQUNySixnQ0FBZ0M7SUFDaEMsMkRBQTJEO0lBQzNELHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLCtJQUErSTtJQUMvSSxPQUFPO0lBQ1AsR0FBRztDQUNOO0FBRUQsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRTtBQWFHLGdDQUFVO0FBWi9DLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTTtBQUNoQyxxREFBcUQ7QUFDckQsTUFBTSxxQkFBcUIsR0FBRztJQUMxQixpSkFBaUo7SUFDakosNklBQTZJO0lBQzdJLHFKQUFxSjtJQUNySiwrSUFBK0k7Q0FDbEo7QUFDRCxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtJQUN2QyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcscUJBQXFCO0FBQzlFLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNyWEY7OztHQUdHOzs7QUFLSDs7Ozs7R0FLRztBQUNILFNBQWdCLGFBQWEsQ0FDekIsRUFBMEIsRUFDMUIsU0FBaUIsRUFDakIsVUFBa0I7SUFFbEIsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUM7SUFDMUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDO0lBQ2xDLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO0lBQ3hCLElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsRUFBRTtRQUNuRCxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMzRTtJQUVELE9BQU8sTUFBTTtBQUNqQixDQUFDO0FBYkQsc0NBYUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxTQUFnQixhQUFhLENBQ3pCLEVBQTBCLEVBQzFCLGFBQXFCLEVBQ3JCLGFBQXFCLEVBQ3JCLFVBQXdDO0lBRXhDLE1BQU0sVUFBVSxHQUFHLGFBQWEsQ0FBQyxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBQyxhQUFhLENBQUM7SUFDckUsTUFBTSxVQUFVLEdBQUcsYUFBYSxDQUFDLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQztJQUV2RSxNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsYUFBYSxFQUFFO0lBRWxDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUN4QixFQUFFLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQztJQUM1RCxDQUFDLENBQUM7SUFFRixFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7SUFDcEMsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO0lBRXBDLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO0lBQ3ZCLElBQUksQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRTtRQUNsRCxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixFQUFFLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztLQUM5RTtJQUVELE9BQU8sT0FBTztBQUNsQixDQUFDO0FBeEJELHNDQXdCQztBQUVEOzs7OztHQUtHO0FBQ0gsU0FBZ0IsaUJBQWlCLENBQUMsRUFBMEIsRUFBRSxJQUFrQjtJQUM1RSxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsWUFBWSxFQUFFO0lBQ2hDLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUM7SUFDdEMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDO0lBQ3JELE9BQU8sTUFBTTtBQUNqQixDQUFDO0FBTEQsOENBS0M7QUFFRDs7OztHQUlHO0FBQ0gsU0FBZ0IsMkJBQTJCLENBQUMsTUFBYztJQUN0RCxnREFBZ0Q7SUFDaEQsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU07SUFDNUIsTUFBTSxhQUFhLEdBQUcsSUFBSSxHQUFHLEVBQUU7SUFDL0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRTtRQUN0RCxJQUFJLElBQUksR0FBRyxDQUFDO1FBQ1osSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7WUFDNUIsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEM7UUFDRCxJQUFJLFNBQVMsR0FBRyxLQUFLO1FBQ3JCLElBQUksSUFBSSxLQUFLLGFBQWEsRUFBRTtZQUN4QiwwQ0FBMEM7WUFDMUMsNERBQTREO1lBQzVELHVJQUF1STtZQUN2SSxTQUFTLEdBQUcsSUFBSTtTQUNuQjtRQUNELGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO1lBQ3BCLElBQUk7WUFDSixJQUFJO1lBQ0osUUFBUTtZQUNSLFNBQVM7WUFDVCx5QkFBeUIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsZ0ZBQWdGO1NBQ3ZILENBQUM7SUFDTixDQUFDLENBQUM7SUFDRiwyQ0FBMkM7SUFDM0Msb0RBQW9EO0lBQ3BELHVDQUF1QztJQUN2QyxtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLHdDQUF3QztJQUN4QyxRQUFRO0lBQ1IsNEJBQTRCO0lBQzVCLG9DQUFvQztJQUNwQyxxREFBcUQ7SUFDckQsdUVBQXVFO0lBQ3ZFLGtKQUFrSjtJQUNsSiwyQkFBMkI7SUFDM0IsUUFBUTtJQUNSLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsbUZBQW1GO0lBQ25GLG1JQUFtSTtJQUNuSSw4RUFBOEU7SUFDOUUsK0hBQStIO0lBQy9ILFNBQVM7SUFDVCxLQUFLO0lBQ0wsT0FBTyxhQUFhO0FBQ3hCLENBQUM7QUEvQ0Qsa0VBK0NDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBZ0IsY0FBYyxDQUFDLEVBQVU7SUFDckMseUZBQXlGO0lBQ3pGLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEtBQUs7SUFDNUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLO0lBQ25DLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsS0FBSztJQUNwQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEtBQUs7SUFDcEMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN6QixDQUFDO0FBUEQsd0NBT0M7QUFFRDs7O0dBR0c7QUFDSCxTQUFnQixjQUFjLENBQUMsUUFBb0I7SUFDL0MsK0VBQStFO0lBQy9FLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0YsT0FBTyxRQUFRO0FBQ25CLENBQUM7QUFKRCx3Q0FJQztBQUVELE1BQWEsTUFBTTtJQUFuQjtRQUNXLFdBQU0sR0FBYSxFQUFFO1FBQ3JCLFlBQU8sR0FBYSxFQUFFO1FBQ3RCLGFBQVEsR0FBYSxFQUFFO1FBQ3ZCLFlBQU8sR0FBZSxDQUFDLEVBQUUsQ0FBQztRQUMxQixTQUFJLEdBQWEsRUFBRTtRQUNsQixXQUFNLEdBQUcsMkNBQTJDO0lBa0NoRSxDQUFDO0lBakNVLElBQUk7UUFDUCxNQUFNLFVBQVUsR0FBRyxJQUFJLE1BQU0sRUFBRTtRQUMvQixVQUFVLENBQUMsTUFBTSxxQkFBUSxJQUFJLENBQUMsTUFBTSxDQUFFO1FBQ3RDLFVBQVUsQ0FBQyxPQUFPLHFCQUFRLElBQUksQ0FBQyxPQUFPLENBQUU7UUFDeEMsVUFBVSxDQUFDLFFBQVEscUJBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBRTtRQUMxQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFDN0MsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0UsT0FBTyxVQUFVO0lBQ3JCLENBQUM7SUFDTSxPQUFPO1FBQ1YsTUFBTSxlQUFlLEdBQUc7WUFDcEIsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3hDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7U0FDbEQ7UUFDRCxNQUFNLG1CQUFtQixHQUFHLGVBQWU7YUFDdEMsR0FBRyxDQUFDLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FDcEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO2FBQ25DLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDbEIsT0FBTyxHQUFHLGNBQWMsQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLElBQUksS0FBSztRQUN4RCxDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQ2hCO2FBQ0EsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUViLE9BQU8sQ0FDSCxJQUFJLENBQUMsTUFBTTtZQUNYLG1CQUFtQjtZQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDMUQsSUFBSTtZQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUN2QjtJQUNMLENBQUM7Q0FDSjtBQXhDRCx3QkF3Q0M7Ozs7Ozs7Ozs7Ozs7QUNoTUQ7QUFBQTtBQUFPOzs7Ozs7Ozs7Ozs7Ozs7O0FDQVA7Ozs7R0FJRztBQUNILFNBQWdCLFNBQVMsQ0FBQyxLQUFhO0lBQ25DLE9BQU8sS0FBSyxLQUFLLFNBQVMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDO0FBQy9FLENBQUM7QUFGRCw4QkFFQzs7Ozs7Ozs7Ozs7Ozs7QUNQRDs7Ozs7R0FLRzs7QUFFSCxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUNuQyxNQUFNLE1BQU0sR0FBRyxDQUFDLElBQW1CLEVBQUUsRUFBRTtJQUNuQyxPQUFPLENBQ0gsSUFBSSxZQUFZLEtBQUs7UUFDckIsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxTQUFTLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxDQUN6RDtBQUNMLENBQUM7QUFDRCxNQUFNLElBQUk7SUFFTixZQUFtQixPQUEyQjtRQUR0QyxRQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUU7UUFFbkIsSUFBSSxPQUFPLFlBQVksS0FBSyxFQUFFO1lBQzFCLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxLQUFLO2dCQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7WUFDeEIsQ0FBQyxDQUFDO1NBQ0w7SUFDTCxDQUFDO0lBQ0QsSUFBVyxJQUFJO1FBQ1gsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUk7SUFDeEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxJQUFtQjtRQUM3QixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNkLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzNCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRztZQUNsQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNmLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ25CO0lBQ0wsQ0FBQztJQUVNLEdBQUcsQ0FBQyxJQUFtQixFQUFFLEtBQVU7UUFDdEMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDZCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUMzQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUc7WUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQzthQUN0QjtpQkFBTTtnQkFDSCxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7YUFDdkI7U0FDSjtRQUNELE9BQU8sSUFBSTtJQUNmLENBQUM7SUFFTSxHQUFHLENBQUMsSUFBbUI7UUFDMUIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDZCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUMzQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDckMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7U0FDakQ7YUFBTTtZQUNILE9BQU8sU0FBUztTQUNuQjtJQUNMLENBQUM7SUFFTSxHQUFHLENBQUMsSUFBbUI7UUFDMUIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDZCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUMzQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDckMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7U0FDakQ7YUFBTTtZQUNILE9BQU8sS0FBSztTQUNmO0lBQ0wsQ0FBQztJQUVNLE9BQU8sQ0FBQyxJQUFjO1FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQzVCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQzFCLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztRQUMzQixDQUFDLENBQUM7SUFDTixDQUFDO0lBRU0sT0FBTztRQUNWLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN6QyxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNoQyxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFTSxJQUFJO1FBQ1AsSUFBSSxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDL0IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTSxNQUFNO1FBQ1QsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0NBQ0o7QUFFRCxrQkFBZSxJQUFJOzs7Ozs7Ozs7Ozs7OztBQ2xHbkI7OztHQUdHOzs7QUFJSDs7Ozs7O0dBTUc7QUFDSCxTQUFnQixzQkFBc0IsQ0FDbEMsS0FBbUIsRUFDbkIsSUFBWSxFQUNaLE9BQWUsRUFDZixPQUFlO0lBRWYsTUFBTSxXQUFXLEdBQWlCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuRSxNQUFNLEVBQUUsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsRCxNQUFNLEVBQUUsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzVCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDNUIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM1QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBRTVCLE1BQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDOUIsTUFBTSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUU5QixXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQy9CLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsT0FBTztRQUMzRCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLE9BQU87SUFDL0QsQ0FBQyxDQUFDO0lBRUYsT0FBTyxXQUFXO0FBQ3RCLENBQUM7QUF2QkQsd0RBdUJDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQWdCLFFBQVEsQ0FBQyxnQkFBd0IsRUFBRSxnQkFBd0I7SUFDdkUsSUFBSSxnQkFBZ0IsS0FBSyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtRQUMvQyxvQ0FBb0M7UUFDcEMsSUFBSSxnQkFBZ0IsS0FBSyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUMvQyxvQ0FBb0M7WUFDcEMsT0FBTyxnQkFBZ0I7U0FDMUI7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBQyxZQUFZO1NBQ25FO0tBQ0o7SUFFRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFDLFlBQVk7SUFDeEUsS0FBSyxNQUFNLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRTtRQUNoQyxJQUFJLEdBQUcsSUFBSSxNQUFNLElBQUksZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEtBQUssTUFBTSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDMUUsd0NBQXdDO1lBQ3hDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdEO2FBQU07WUFDSCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO1NBQ3RDO0tBQ0o7SUFDRCxPQUFPLE1BQU07QUFDakIsQ0FBQztBQXJCRCw0QkFxQkMiLCJmaWxlIjoiTmV0Vi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLyoqXG4gKiBAZGVzY3JpcHRpb24gZGVmYXVsdCBjb25maWd1cmF0aW9ucyBpbiBOZXRWXG4gKiBAYXV0aG9yIFhpYW9kb25nIFpoYW8gPHpoYW94aWFvZG9uZ0B6anUuZWR1LmNuPlxuICovXG5leHBvcnQgY29uc3Qgd2lkdGggPSA4MDBcbmV4cG9ydCBjb25zdCBoZWlnaHQgPSA2MDBcbmV4cG9ydCBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDEsIGE6IDEgfVxuZXhwb3J0IGNvbnN0IGVuYWJsZVBhblpvb20gPSB0cnVlXG5leHBvcnQgY29uc3Qgbm9kZUxpbWl0ID0gMTAwXG5leHBvcnQgY29uc3QgbGlua0xpbWl0ID0gMTAwMFxuXG5leHBvcnQgY29uc3Qgbm9kZSA9IHtcbiAgICBzdHlsZToge1xuICAgICAgICBzaGFwZTogJ2NpcmNsZScsIC8vIGRlZmF1bHQgc2hhcGVcbiAgICAgICAgb2Zmc2V0OiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgZmlsbDogeyByOiAwLjIsIGc6IDAuNiwgYjogMC4yLCBhOiAxIH0sXG4gICAgICAgIHN0cm9rZUNvbG9yOiB7IHI6IDAuOSwgZzogMC45LCBiOiAwLjksIGE6IDAuNiB9LFxuICAgICAgICBzdHJva2VXaWR0aDogMixcbiAgICAgICAgLyogY2lyY2xlIHNoYXBlIHN0eWxlcyAqL1xuICAgICAgICByOiAxMCxcbiAgICAgICAgLyogcmVjdCBzaGFwZSBzdHlsZXMgKi9cbiAgICAgICAgd2lkdGg6IDUsXG4gICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgaW5uZXJXaWR0aDogNSxcbiAgICAgICAgaW5uZXJIZWlnaHQ6IDUsXG4gICAgICAgIHJvdGF0ZTogMCwgLy8gLXBpIHRvICtwaSwgcG9zaXRpdmUgdmFsdWUgbWVhbnMgY2xvY2t3aXNlXG4gICAgICAgIC8qIHRyaWFuZ2xlIHNoYXBlIHN0eWxlcyAqL1xuICAgICAgICB2ZXJ0ZXhBbHBoYTogeyB4OiAwLCB5OiAtNCB9LFxuICAgICAgICB2ZXJ0ZXhCZXRhOiB7IHg6IC0yICogTWF0aC5zcXJ0KDMpLCB5OiAyIH0sXG4gICAgICAgIHZlcnRleEdhbW1hOiB7IHg6IDIgKiBNYXRoLnNxcnQoMyksIHk6IDIgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxpbmsgPSB7XG4gICAgc3R5bGU6IHtcbiAgICAgICAgc2hhcGU6ICdsaW5lJyxcbiAgICAgICAgc3Ryb2tlQ29sb3I6IHsgcjogMC40LCBnOiAwLjYsIGI6IDAuOCwgYTogMC41IH0sXG4gICAgICAgIHN0cm9rZVdpZHRoOiAyLFxuICAgICAgICAvKiBjdXJ2ZSBzaGFwZSBzdHlsZSAqL1xuICAgICAgICBjdXJ2ZW5lc3M6IDAuMixcbiAgICAgICAgZGFzaEludGVydmFsOiA1XG4gICAgfVxufVxuIiwiLyoqXG4gKiBAYXV0aG9yIFhpYW9kb25nIFpoYW8gPHpoYW94aWFvZG9uZ0B6anUuZWR1LmNuPlxuICogQGRlc2NyaXB0aW9uIGJ1aWxkLWluIGRhdGFzZXQgaW4gTmV0VlxuICovXG5cbmltcG9ydCB7IG1pc2VyYWJsZXMgfSBmcm9tICcuL21pc2VyYWJsZXMnXG5pbXBvcnQgeyBwYXRlbnRzIH0gZnJvbSAnLi9wYXRlbnRzJ1xuXG5leHBvcnQgeyBtaXNlcmFibGVzLCBwYXRlbnRzIH1cbiIsIi8qKlxuICogQGF1dGhvciBYaWFvZG9uZyBaaGFvIDx6aGFveGlhb2RvbmdAemp1LmVkdS5jbj5cbiAqIEBkZXNjcmlwdGlvbiBMZXMgTWlzZXJhYmxlcyByZWxhdGlvbiBkYXRhc2V0LlxuICovXG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIGdlbmVyYXRlZCBieSBkMy1mb3JjZTogaHR0cHM6Ly9vYnNlcnZhYmxlaHEuY29tL0BkMy9mb3JjZS1kaXJlY3RlZC1ncmFwaFxuICovXG5cbmV4cG9ydCBjb25zdCBtaXNlcmFibGVzID0ge1xuICAgIG5vZGVzOiBbXG4gICAgICAgIHsgaWQ6ICdNeXJpZWwnLCB4OiAyOTMuNDcxNDUxMTc1NTM2MjMsIHk6IDM1Ni40MzM1NzE4MTA0MTM4LCBncm91cDogMSB9LFxuICAgICAgICB7IGlkOiAnTmFwb2xlb24nLCB4OiAyNTMuOTAyNTA4ODYxODY1NiwgeTogMzc0LjMwNTgxMTY1MzY0NDUsIGdyb3VwOiAxIH0sXG4gICAgICAgIHsgaWQ6ICdNbGxlLkJhcHRpc3RpbmUnLCB4OiAzNTAuOTI3MjQ5ODk5MTgwNzcsIHk6IDMzMi4zMzI1NTM5OTk5OTQzLCBncm91cDogMSB9LFxuICAgICAgICB7IGlkOiAnTW1lLk1hZ2xvaXJlJywgeDogMzU2LjA5MTYxNTY1Mzk5OTcsIHk6IDM1Mi43ODg1Nzk5MTE2MDE1LCBncm91cDogMSB9LFxuICAgICAgICB7IGlkOiAnQ291bnRlc3NkZUxvJywgeDogMjU0LjI5MjkxNTIwOTg5MzM1LCB5OiAzNTcuMzE3NTczNDA3NjQxNywgZ3JvdXA6IDEgfSxcbiAgICAgICAgeyBpZDogJ0dlYm9yYW5kJywgeDogMjU3Ljg1NzI5MzYyNjIwMSwgeTogMzM1Ljg1NDI3NjI4MzU4OTU3LCBncm91cDogMSB9LFxuICAgICAgICB7IGlkOiAnQ2hhbXB0ZXJjaWVyJywgeDogMjU5LjYyNTU1NjM4MjUwMjgsIHk6IDM4My44MzAyNzQ2OTgzMjgxNCwgZ3JvdXA6IDEgfSxcbiAgICAgICAgeyBpZDogJ0NyYXZhdHRlJywgeDogMjQ5Ljg1OTY0NTk4MjkxMzksIHk6IDM0Ni4xODIyNTUxNjgzMjQ5NiwgZ3JvdXA6IDEgfSxcbiAgICAgICAgeyBpZDogJ0NvdW50JywgeDogMjY5Ljk2NzkzOTUxMzUwOTI0LCB5OiAzOTAuNjgwMDg0MjMyMTU3MSwgZ3JvdXA6IDEgfSxcbiAgICAgICAgeyBpZDogJ09sZE1hbicsIHg6IDI0Ni43Mzk1MjMxMTI3NzY2NSwgeTogMzY0LjU5MzU3NDk0NDMyMDY2LCBncm91cDogMSB9LFxuICAgICAgICB7IGlkOiAnTGFiYXJyZScsIHg6IDQ0My41MTY1ODMzMTUwMjYsIHk6IDM1OC4yOTIwNDc4OTQ3NzY4MywgZ3JvdXA6IDIgfSxcbiAgICAgICAgeyBpZDogJ1ZhbGplYW4nLCB4OiA0NDIuMTY4OTQ3NTc2NDE1MDYsIHk6IDMyMC44MzE1NTMyMTYwODYxLCBncm91cDogMiB9LFxuICAgICAgICB7IGlkOiAnTWFyZ3Vlcml0ZScsIHg6IDQxMy4zODE2ODUxMDA3OTMxLCB5OiAyNDAuMDQwOTE1NTkyOTY1MDQsIGdyb3VwOiAzIH0sXG4gICAgICAgIHsgaWQ6ICdNbWUuZGVSJywgeDogNDI3LjIzNjE3MTU5NTAyNTQsIHk6IDM1NS4xMDIxMTU4OTk3OTUxNCwgZ3JvdXA6IDIgfSxcbiAgICAgICAgeyBpZDogJ0lzYWJlYXUnLCB4OiA0MDUuODUwODI4NTgxOTE4MzQsIHk6IDMzMC41MjAxNTEyMjA1MDg1LCBncm91cDogMiB9LFxuICAgICAgICB7IGlkOiAnR2VydmFpcycsIHg6IDQwNS4yMTEzMTIxOTA2ODgxLCB5OiAzMTYuMjkxMjUzNTkzOTYxMzYsIGdyb3VwOiAyIH0sXG4gICAgICAgIHsgaWQ6ICdUaG9sb215ZXMnLCB4OiA0MjIuNDEyNTMwNzc4MTY0NiwgeTogMTI2LjA3NjQ5NDQ5Nzc1ODA2LCBncm91cDogMyB9LFxuICAgICAgICB7IGlkOiAnTGlzdG9saWVyJywgeDogMzYzLjE3Mjk0MjI2Nzc5NzksIHk6IDEwMi43Nzg5MDM2ODI4OTc4NSwgZ3JvdXA6IDMgfSxcbiAgICAgICAgeyBpZDogJ0ZhbWV1aWwnLCB4OiAzODEuNzk0NzEwMzA5NDAyOCwgeTogNjYuNTgxMzM3MjQwNDM5NDgsIGdyb3VwOiAzIH0sXG4gICAgICAgIHsgaWQ6ICdCbGFjaGV2aWxsZScsIHg6IDM4My4xNzkyNjc2NzQwMjYxLCB5OiA5NC44MDMyMDMxNTUwMDE1NCwgZ3JvdXA6IDMgfSxcbiAgICAgICAgeyBpZDogJ0Zhdm91cml0ZScsIHg6IDM2MS44OTM3MzE2NDQyODUsIHk6IDcwLjM4Njk2MzgxMzg0MDc0LCBncm91cDogMyB9LFxuICAgICAgICB7IGlkOiAnRGFobGlhJywgeDogMzk4Ljc1MzUwOTg4MzUxNjUzLCB5OiA3Ny4wOTcwMDc1MTUyNzExOSwgZ3JvdXA6IDMgfSxcbiAgICAgICAgeyBpZDogJ1plcGhpbmUnLCB4OiAzNDkuMDQ5NTkxNDYwMTM3NiwgeTogODguODA4ODg2MTMzNzI3MTMsIGdyb3VwOiAzIH0sXG4gICAgICAgIHsgaWQ6ICdGYW50aW5lJywgeDogMzk4LjAxNDExNDM4NzAyNDczLCB5OiAxNzMuNzY0NDQxOTY5NDU5NzcsIGdyb3VwOiAzIH0sXG4gICAgICAgIHsgaWQ6ICdNbWUuVGhlbmFyZGllcicsIHg6IDQ3MS4yNTE2NTMzMzg2NzI1LCB5OiAyNjIuMjE4NzAxNjY2NjQ1LCBncm91cDogNCB9LFxuICAgICAgICB7IGlkOiAnVGhlbmFyZGllcicsIHg6IDUwNC44MTY3MjA4NTYwMzA2NiwgeTogMjgzLjA0NjM4OTAwNDgxNzIzLCBncm91cDogNCB9LFxuICAgICAgICB7IGlkOiAnQ29zZXR0ZScsIHg6IDQ3Mi4zMzQ2OTQxNDg3MTkyLCB5OiAyMjguNjg3Nzk0NDMzMDM0NzgsIGdyb3VwOiA1IH0sXG4gICAgICAgIHsgaWQ6ICdKYXZlcnQnLCB4OiA0NjAuMDUyNTc2ODkzMzI4MzYsIHk6IDI5NS41NTc4MTU0MjY4OTA0LCBncm91cDogNCB9LFxuICAgICAgICB7IGlkOiAnRmF1Y2hlbGV2ZW50JywgeDogMzg1LjQzOTM1NzY0NTg5OTg2LCB5OiAzMDIuMTI4MjQ1ODg2MjI4NTcsIGdyb3VwOiAwIH0sXG4gICAgICAgIHsgaWQ6ICdCYW1hdGFib2lzJywgeDogMzkzLjE5MDQxNTkwMzgzNTk3LCB5OiAzNDUuNDk3MTY2NzY5MDgxNywgZ3JvdXA6IDIgfSxcbiAgICAgICAgeyBpZDogJ1BlcnBldHVlJywgeDogMzY3LjUzODMzMTMyODkzOTc2LCB5OiAxOTQuNTU1NjQ4MjMwNjI3MSwgZ3JvdXA6IDMgfSxcbiAgICAgICAgeyBpZDogJ1NpbXBsaWNlJywgeDogNDAxLjM2MjIyNTIzNTQ2NTUsIHk6IDI0Mi45OTgyODQ3OTk0NTc2LCBncm91cDogMiB9LFxuICAgICAgICB7IGlkOiAnU2NhdWZmbGFpcmUnLCB4OiA0MTQuNjcwNzI3OTk2Mjc1NzMsIHk6IDM0NC4wNTQ3NzIwOTQ1NzM2LCBncm91cDogMiB9LFxuICAgICAgICB7IGlkOiAnV29tYW4xJywgeDogNDIxLjQxNjc0MTQzOTI0MjYsIHk6IDI5My4zMTEyMDIxOTEyOTM5NCwgZ3JvdXA6IDIgfSxcbiAgICAgICAgeyBpZDogJ0p1ZGdlJywgeDogNDIwLjA0MzkyMDA3ODQxMzM1LCB5OiA0MDEuMDMyMzM2MDkxNTI3NDQsIGdyb3VwOiAyIH0sXG4gICAgICAgIHsgaWQ6ICdDaGFtcG1hdGhpZXUnLCB4OiAzNzcuNzk1MjQyNTQ2MjE4MzMsIHk6IDM4My44MTA1Nzg3MTE1MTAyLCBncm91cDogMiB9LFxuICAgICAgICB7IGlkOiAnQnJldmV0JywgeDogNDAxLjk1Mjk4NDQ0Njk5OTIsIHk6IDM4OC44Njg0NzgyOTg3NDExLCBncm91cDogMiB9LFxuICAgICAgICB7IGlkOiAnQ2hlbmlsZGlldScsIHg6IDQwMC42Njg1NzA3MTMzNTM4LCB5OiA0MTMuNDk0MTc3OTA1MjM0NjYsIGdyb3VwOiAyIH0sXG4gICAgICAgIHsgaWQ6ICdDb2NoZXBhaWxsZScsIHg6IDM3OS4wNDk2OTcwNDQ2MjM1NCwgeTogNDA0LjI2OTc0MDU5MjMzMTYzLCBncm91cDogMiB9LFxuICAgICAgICB7IGlkOiAnUG9udG1lcmN5JywgeDogNTUzLjExMzc0MDE3NTAxOTgsIHk6IDI0NC45MjgzMDAyNzM2MDc2NSwgZ3JvdXA6IDQgfSxcbiAgICAgICAgeyBpZDogJ0JvdWxhdHJ1ZWxsZScsIHg6IDQ5MC4xNTcxMDg2MDg2OTMyLCB5OiAyNDkuMjEwMTkyMzgzNTgwMywgZ3JvdXA6IDYgfSxcbiAgICAgICAgeyBpZDogJ0Vwb25pbmUnLCB4OiA1NDkuNzU4NDI2NzU3MTg5MiwgeTogMzAyLjkwMzEwNjUyMjg0MzEsIGdyb3VwOiA0IH0sXG4gICAgICAgIHsgaWQ6ICdBbnplbG1hJywgeDogNTE1LjM4MDczOTkzOTUxMzQsIHk6IDI1Ny4wMTc5Njg4OTgzOTExLCBncm91cDogNCB9LFxuICAgICAgICB7IGlkOiAnV29tYW4yJywgeDogNDMzLjY2MDg2NjUzNDA1MTQsIHk6IDI2NS44MTc0NjczODg2NjM0LCBncm91cDogNSB9LFxuICAgICAgICB7IGlkOiAnTW90aGVySW5ub2NlbnQnLCB4OiA0MDMuMDI1MzYyNTc0MTY1MjMsIHk6IDI4OS4wMzMxMjIwMDEyMTMyNiwgZ3JvdXA6IDAgfSxcbiAgICAgICAgeyBpZDogJ0dyaWJpZXInLCB4OiAzNDEuODA5NzMyMjc0NTY3NzUsIHk6IDI5NC4yMTIzOTYxNDgwMjMsIGdyb3VwOiAwIH0sXG4gICAgICAgIHsgaWQ6ICdKb25kcmV0dGUnLCB4OiA1NjUuMTk2NTMwMzQyMjE4NiwgeTogNDcwLjY1OTUwMzQ5Mzc1ODU2LCBncm91cDogNyB9LFxuICAgICAgICB7IGlkOiAnTW1lLkJ1cmdvbicsIHg6IDU2OS4xODk2MjY5MjQyMTAxLCB5OiA0MjYuNjYxODUwNTM4MjQ1NjMsIGdyb3VwOiA3IH0sXG4gICAgICAgIHsgaWQ6ICdHYXZyb2NoZScsIHg6IDU3Mi4xNjE5MzkzOTM2ODI2LCB5OiAzNjQuMjI2MDY3NjY0OTc1NjMsIGdyb3VwOiA4IH0sXG4gICAgICAgIHsgaWQ6ICdHaWxsZW5vcm1hbmQnLCB4OiA1MjQuNTkxNDUwNTIwODAwNSwgeTogMjU3LjQwMTIyMTQ4MjgzMzYsIGdyb3VwOiA1IH0sXG4gICAgICAgIHsgaWQ6ICdNYWdub24nLCB4OiA0OTIuNTQ4MzkzMjAyMzQxLCB5OiAyMjIuNTk2NjM1MTMyODg4NSwgZ3JvdXA6IDUgfSxcbiAgICAgICAgeyBpZDogJ01sbGUuR2lsbGVub3JtYW5kJywgeDogNTE0LjM2OTI2NTUwMjM2NDQsIHk6IDIyOS4wOTY3MDA2MjM4OTI4MSwgZ3JvdXA6IDUgfSxcbiAgICAgICAgeyBpZDogJ01tZS5Qb250bWVyY3knLCB4OiA1NDkuMzI1MDUwODE3MTQ3NCwgeTogMTk2LjE0MDU2ODMzMDg0OTM2LCBncm91cDogNSB9LFxuICAgICAgICB7IGlkOiAnTWxsZS5WYXVib2lzJywgeDogNTE3Ljg1OTM1NzIzOTQwNzEsIHk6IDE4Ni4yNDg4MzA5MTExNTY1LCBncm91cDogNSB9LFxuICAgICAgICB7IGlkOiAnTHQuR2lsbGVub3JtYW5kJywgeDogNTQzLjI3NDk2MTEzOTQ1NSwgeTogMjIzLjY4MTg0Mjg1MTgwOTc2LCBncm91cDogNSB9LFxuICAgICAgICB7IGlkOiAnTWFyaXVzJywgeDogNTc0LjI1NzY2OTkwNTYxMzksIHk6IDI4My44NTIxMTcwODMxMDMzNCwgZ3JvdXA6IDggfSxcbiAgICAgICAgeyBpZDogJ0Jhcm9uZXNzVCcsIHg6IDU3My43MTQwOTA5NjUwNjI1LCB5OiAyNDUuNTkzMTE5MDkyNDU4MTgsIGdyb3VwOiA1IH0sXG4gICAgICAgIHsgaWQ6ICdNYWJldWYnLCB4OiA2MjguNTQzMjUzMjQ4NjE5MSwgeTogMzE0LjIyMDc4NDA4NjI3MTY0LCBncm91cDogOCB9LFxuICAgICAgICB7IGlkOiAnRW5qb2xyYXMnLCB4OiA1ODguMjM5NTQ5ODA5MzYyNiwgeTogMzQyLjA1OTQ0Njk5MjMyNzksIGdyb3VwOiA4IH0sXG4gICAgICAgIHsgaWQ6ICdDb21iZWZlcnJlJywgeDogNjM3LjczNzA2NjQ2MTQ2MzcsIHk6IDM1MS42OTIzNTc2Mjc4ODM5NSwgZ3JvdXA6IDggfSxcbiAgICAgICAgeyBpZDogJ1Byb3V2YWlyZScsIHg6IDY1MC44ODMzNTIyODY5OTAzLCB5OiAzODYuODM5MTgxMDM1MDk5MTYsIGdyb3VwOiA4IH0sXG4gICAgICAgIHsgaWQ6ICdGZXVpbGx5JywgeDogNjI2Ljg1NTY2MDY0MzgxMDksIHk6IDM2NS45MDg0MTY0NTkzMTQxLCBncm91cDogOCB9LFxuICAgICAgICB7IGlkOiAnQ291cmZleXJhYycsIHg6IDYyOC4zNDQ4OTg5OTc1MDEzLCB5OiAzMzYuNzY2NjQ1NDExOTAyMiwgZ3JvdXA6IDggfSxcbiAgICAgICAgeyBpZDogJ0JhaG9yZWwnLCB4OiA2NTYuNzcxNzc3Mjc2NDk4NSwgeTogMzYyLjU4ODU4ODI1MDkxODksIGdyb3VwOiA4IH0sXG4gICAgICAgIHsgaWQ6ICdCb3NzdWV0JywgeDogNTk5LjAxODU3NjU3NDMxMDcsIHk6IDM2My44Mjg2NzIzNDA3MDUzLCBncm91cDogOCB9LFxuICAgICAgICB7IGlkOiAnSm9seScsIHg6IDY1Ni42MTgyOTIzNzM1NDA4LCB5OiAzNDMuMjM3NTczMzU1OTE2NSwgZ3JvdXA6IDggfSxcbiAgICAgICAgeyBpZDogJ0dyYW50YWlyZScsIHg6IDYzOC40Mzc1ODU1MzE0OTg4LCB5OiA0MDIuNDM4NzI1MDM3ODk5NSwgZ3JvdXA6IDggfSxcbiAgICAgICAgeyBpZDogJ01vdGhlclBsdXRhcmNoJywgeDogNjY0LjU1NjcyMzg2MTg4MywgeTogMjk4LjAzMzY5NjQ1MjY3ODYsIGdyb3VwOiA5IH0sXG4gICAgICAgIHsgaWQ6ICdHdWV1bGVtZXInLCB4OiA1MDguMTY0NTA1MjU4MTc4MDUsIHk6IDMzMC40NTAyOTA3NDQ0MzY3LCBncm91cDogNCB9LFxuICAgICAgICB7IGlkOiAnQmFiZXQnLCB4OiA0OTIuNTYwMDUyNzk4ODIwOTUsIHk6IDMyNS45ODM0MDkyODQ4NDI3LCBncm91cDogNCB9LFxuICAgICAgICB7IGlkOiAnQ2xhcXVlc291cycsIHg6IDUxMC45Mzg1NTUwNjI1MDA3NywgeTogMzA5LjI4NjkzODA2OTczMjgsIGdyb3VwOiA0IH0sXG4gICAgICAgIHsgaWQ6ICdNb250cGFybmFzc2UnLCB4OiA1MDIuNzE5MDg5NDE3MzU1NywgeTogMzUwLjkyNzUxODMxMzM0MzgsIGdyb3VwOiA0IH0sXG4gICAgICAgIHsgaWQ6ICdUb3Vzc2FpbnQnLCB4OiA0NDUuMTI1NDgwMjA1NjgwNywgeTogMjY2LjQ2MjQyNjY1MDIyMDA0LCBncm91cDogNSB9LFxuICAgICAgICB7IGlkOiAnQ2hpbGQxJywgeDogNTg4LjAzNTE1NTIzODY5NjEsIHk6IDQxMC4yMTk1NTU1OTYxOTk2LCBncm91cDogMTAgfSxcbiAgICAgICAgeyBpZDogJ0NoaWxkMicsIHg6IDU1OS4yNzc3ODE0NzgyNzA1LCB5OiA0MDguMzUzMzE4NDg5MzU2OSwgZ3JvdXA6IDEwIH0sXG4gICAgICAgIHsgaWQ6ICdCcnVqb24nLCB4OiA1MzcuMTc4NzM4MzkwNDY1NiwgeTogMzM3Ljg2OTIyNzc1OTE3OTQ3LCBncm91cDogNCB9LFxuICAgICAgICB7IGlkOiAnTW1lLkh1Y2hlbG91cCcsIHg6IDYyNi4zNzc1ODUwNDY2MTY0LCB5OiAzODQuMzUyMDIwNjY4OTQ1MTYsIGdyb3VwOiA4IH1cbiAgICBdLFxuXG4gICAgbGlua3M6IFtcbiAgICAgICAgeyBzb3VyY2U6ICdOYXBvbGVvbicsIHRhcmdldDogJ015cmllbCcsIHZhbHVlOiAxIH0sXG4gICAgICAgIHsgc291cmNlOiAnTWxsZS5CYXB0aXN0aW5lJywgdGFyZ2V0OiAnTXlyaWVsJywgdmFsdWU6IDggfSxcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuTWFnbG9pcmUnLCB0YXJnZXQ6ICdNeXJpZWwnLCB2YWx1ZTogMTAgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuTWFnbG9pcmUnLCB0YXJnZXQ6ICdNbGxlLkJhcHRpc3RpbmUnLCB2YWx1ZTogNiB9LFxuICAgICAgICB7IHNvdXJjZTogJ0NvdW50ZXNzZGVMbycsIHRhcmdldDogJ015cmllbCcsIHZhbHVlOiAxIH0sXG4gICAgICAgIHsgc291cmNlOiAnR2Vib3JhbmQnLCB0YXJnZXQ6ICdNeXJpZWwnLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ0NoYW1wdGVyY2llcicsIHRhcmdldDogJ015cmllbCcsIHZhbHVlOiAxIH0sXG4gICAgICAgIHsgc291cmNlOiAnQ3JhdmF0dGUnLCB0YXJnZXQ6ICdNeXJpZWwnLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ0NvdW50JywgdGFyZ2V0OiAnTXlyaWVsJywgdmFsdWU6IDIgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdPbGRNYW4nLCB0YXJnZXQ6ICdNeXJpZWwnLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ1ZhbGplYW4nLCB0YXJnZXQ6ICdMYWJhcnJlJywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdWYWxqZWFuJywgdGFyZ2V0OiAnTW1lLk1hZ2xvaXJlJywgdmFsdWU6IDMgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdWYWxqZWFuJywgdGFyZ2V0OiAnTWxsZS5CYXB0aXN0aW5lJywgdmFsdWU6IDMgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdWYWxqZWFuJywgdGFyZ2V0OiAnTXlyaWVsJywgdmFsdWU6IDUgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJndWVyaXRlJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXG4gICAgICAgIHsgc291cmNlOiAnTW1lLmRlUicsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ0lzYWJlYXUnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdHZXJ2YWlzJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXG4gICAgICAgIHsgc291cmNlOiAnTGlzdG9saWVyJywgdGFyZ2V0OiAnVGhvbG9teWVzJywgdmFsdWU6IDQgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdGYW1ldWlsJywgdGFyZ2V0OiAnVGhvbG9teWVzJywgdmFsdWU6IDQgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdGYW1ldWlsJywgdGFyZ2V0OiAnTGlzdG9saWVyJywgdmFsdWU6IDQgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdCbGFjaGV2aWxsZScsIHRhcmdldDogJ1Rob2xvbXllcycsIHZhbHVlOiA0IH0sXG4gICAgICAgIHsgc291cmNlOiAnQmxhY2hldmlsbGUnLCB0YXJnZXQ6ICdMaXN0b2xpZXInLCB2YWx1ZTogNCB9LFxuICAgICAgICB7IHNvdXJjZTogJ0JsYWNoZXZpbGxlJywgdGFyZ2V0OiAnRmFtZXVpbCcsIHZhbHVlOiA0IH0sXG4gICAgICAgIHsgc291cmNlOiAnRmF2b3VyaXRlJywgdGFyZ2V0OiAnVGhvbG9teWVzJywgdmFsdWU6IDMgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdGYXZvdXJpdGUnLCB0YXJnZXQ6ICdMaXN0b2xpZXInLCB2YWx1ZTogMyB9LFxuICAgICAgICB7IHNvdXJjZTogJ0Zhdm91cml0ZScsIHRhcmdldDogJ0ZhbWV1aWwnLCB2YWx1ZTogMyB9LFxuICAgICAgICB7IHNvdXJjZTogJ0Zhdm91cml0ZScsIHRhcmdldDogJ0JsYWNoZXZpbGxlJywgdmFsdWU6IDQgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdEYWhsaWEnLCB0YXJnZXQ6ICdUaG9sb215ZXMnLCB2YWx1ZTogMyB9LFxuICAgICAgICB7IHNvdXJjZTogJ0RhaGxpYScsIHRhcmdldDogJ0xpc3RvbGllcicsIHZhbHVlOiAzIH0sXG4gICAgICAgIHsgc291cmNlOiAnRGFobGlhJywgdGFyZ2V0OiAnRmFtZXVpbCcsIHZhbHVlOiAzIH0sXG4gICAgICAgIHsgc291cmNlOiAnRGFobGlhJywgdGFyZ2V0OiAnQmxhY2hldmlsbGUnLCB2YWx1ZTogMyB9LFxuICAgICAgICB7IHNvdXJjZTogJ0RhaGxpYScsIHRhcmdldDogJ0Zhdm91cml0ZScsIHZhbHVlOiA1IH0sXG4gICAgICAgIHsgc291cmNlOiAnWmVwaGluZScsIHRhcmdldDogJ1Rob2xvbXllcycsIHZhbHVlOiAzIH0sXG4gICAgICAgIHsgc291cmNlOiAnWmVwaGluZScsIHRhcmdldDogJ0xpc3RvbGllcicsIHZhbHVlOiAzIH0sXG4gICAgICAgIHsgc291cmNlOiAnWmVwaGluZScsIHRhcmdldDogJ0ZhbWV1aWwnLCB2YWx1ZTogMyB9LFxuICAgICAgICB7IHNvdXJjZTogJ1plcGhpbmUnLCB0YXJnZXQ6ICdCbGFjaGV2aWxsZScsIHZhbHVlOiAzIH0sXG4gICAgICAgIHsgc291cmNlOiAnWmVwaGluZScsIHRhcmdldDogJ0Zhdm91cml0ZScsIHZhbHVlOiA0IH0sXG4gICAgICAgIHsgc291cmNlOiAnWmVwaGluZScsIHRhcmdldDogJ0RhaGxpYScsIHZhbHVlOiA0IH0sXG4gICAgICAgIHsgc291cmNlOiAnRmFudGluZScsIHRhcmdldDogJ1Rob2xvbXllcycsIHZhbHVlOiAzIH0sXG4gICAgICAgIHsgc291cmNlOiAnRmFudGluZScsIHRhcmdldDogJ0xpc3RvbGllcicsIHZhbHVlOiAzIH0sXG4gICAgICAgIHsgc291cmNlOiAnRmFudGluZScsIHRhcmdldDogJ0ZhbWV1aWwnLCB2YWx1ZTogMyB9LFxuICAgICAgICB7IHNvdXJjZTogJ0ZhbnRpbmUnLCB0YXJnZXQ6ICdCbGFjaGV2aWxsZScsIHZhbHVlOiAzIH0sXG4gICAgICAgIHsgc291cmNlOiAnRmFudGluZScsIHRhcmdldDogJ0Zhdm91cml0ZScsIHZhbHVlOiA0IH0sXG4gICAgICAgIHsgc291cmNlOiAnRmFudGluZScsIHRhcmdldDogJ0RhaGxpYScsIHZhbHVlOiA0IH0sXG4gICAgICAgIHsgc291cmNlOiAnRmFudGluZScsIHRhcmdldDogJ1plcGhpbmUnLCB2YWx1ZTogNCB9LFxuICAgICAgICB7IHNvdXJjZTogJ0ZhbnRpbmUnLCB0YXJnZXQ6ICdNYXJndWVyaXRlJywgdmFsdWU6IDIgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdGYW50aW5lJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiA5IH0sXG4gICAgICAgIHsgc291cmNlOiAnTW1lLlRoZW5hcmRpZXInLCB0YXJnZXQ6ICdGYW50aW5lJywgdmFsdWU6IDIgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuVGhlbmFyZGllcicsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogNyB9LFxuICAgICAgICB7IHNvdXJjZTogJ1RoZW5hcmRpZXInLCB0YXJnZXQ6ICdNbWUuVGhlbmFyZGllcicsIHZhbHVlOiAxMyB9LFxuICAgICAgICB7IHNvdXJjZTogJ1RoZW5hcmRpZXInLCB0YXJnZXQ6ICdGYW50aW5lJywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdUaGVuYXJkaWVyJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxMiB9LFxuICAgICAgICB7IHNvdXJjZTogJ0Nvc2V0dGUnLCB0YXJnZXQ6ICdNbWUuVGhlbmFyZGllcicsIHZhbHVlOiA0IH0sXG4gICAgICAgIHsgc291cmNlOiAnQ29zZXR0ZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMzEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdDb3NldHRlJywgdGFyZ2V0OiAnVGhvbG9teWVzJywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdDb3NldHRlJywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiAxIH0sXG4gICAgICAgIHsgc291cmNlOiAnSmF2ZXJ0JywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxNyB9LFxuICAgICAgICB7IHNvdXJjZTogJ0phdmVydCcsIHRhcmdldDogJ0ZhbnRpbmUnLCB2YWx1ZTogNSB9LFxuICAgICAgICB7IHNvdXJjZTogJ0phdmVydCcsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogNSB9LFxuICAgICAgICB7IHNvdXJjZTogJ0phdmVydCcsIHRhcmdldDogJ01tZS5UaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdKYXZlcnQnLCB0YXJnZXQ6ICdDb3NldHRlJywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdGYXVjaGVsZXZlbnQnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDggfSxcbiAgICAgICAgeyBzb3VyY2U6ICdGYXVjaGVsZXZlbnQnLCB0YXJnZXQ6ICdKYXZlcnQnLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ0JhbWF0YWJvaXMnLCB0YXJnZXQ6ICdGYW50aW5lJywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdCYW1hdGFib2lzJywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdCYW1hdGFib2lzJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAyIH0sXG4gICAgICAgIHsgc291cmNlOiAnUGVycGV0dWUnLCB0YXJnZXQ6ICdGYW50aW5lJywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdTaW1wbGljZScsIHRhcmdldDogJ1BlcnBldHVlJywgdmFsdWU6IDIgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdTaW1wbGljZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMyB9LFxuICAgICAgICB7IHNvdXJjZTogJ1NpbXBsaWNlJywgdGFyZ2V0OiAnRmFudGluZScsIHZhbHVlOiAyIH0sXG4gICAgICAgIHsgc291cmNlOiAnU2ltcGxpY2UnLCB0YXJnZXQ6ICdKYXZlcnQnLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ1NjYXVmZmxhaXJlJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXG4gICAgICAgIHsgc291cmNlOiAnV29tYW4xJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAyIH0sXG4gICAgICAgIHsgc291cmNlOiAnV29tYW4xJywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdKdWRnZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMyB9LFxuICAgICAgICB7IHNvdXJjZTogJ0p1ZGdlJywgdGFyZ2V0OiAnQmFtYXRhYm9pcycsIHZhbHVlOiAyIH0sXG4gICAgICAgIHsgc291cmNlOiAnQ2hhbXBtYXRoaWV1JywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAzIH0sXG4gICAgICAgIHsgc291cmNlOiAnQ2hhbXBtYXRoaWV1JywgdGFyZ2V0OiAnSnVkZ2UnLCB2YWx1ZTogMyB9LFxuICAgICAgICB7IHNvdXJjZTogJ0NoYW1wbWF0aGlldScsIHRhcmdldDogJ0JhbWF0YWJvaXMnLCB2YWx1ZTogMiB9LFxuICAgICAgICB7IHNvdXJjZTogJ0JyZXZldCcsIHRhcmdldDogJ0p1ZGdlJywgdmFsdWU6IDIgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdCcmV2ZXQnLCB0YXJnZXQ6ICdDaGFtcG1hdGhpZXUnLCB2YWx1ZTogMiB9LFxuICAgICAgICB7IHNvdXJjZTogJ0JyZXZldCcsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMiB9LFxuICAgICAgICB7IHNvdXJjZTogJ0JyZXZldCcsIHRhcmdldDogJ0JhbWF0YWJvaXMnLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ0NoZW5pbGRpZXUnLCB0YXJnZXQ6ICdKdWRnZScsIHZhbHVlOiAyIH0sXG4gICAgICAgIHsgc291cmNlOiAnQ2hlbmlsZGlldScsIHRhcmdldDogJ0NoYW1wbWF0aGlldScsIHZhbHVlOiAyIH0sXG4gICAgICAgIHsgc291cmNlOiAnQ2hlbmlsZGlldScsIHRhcmdldDogJ0JyZXZldCcsIHZhbHVlOiAyIH0sXG4gICAgICAgIHsgc291cmNlOiAnQ2hlbmlsZGlldScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMiB9LFxuICAgICAgICB7IHNvdXJjZTogJ0NoZW5pbGRpZXUnLCB0YXJnZXQ6ICdCYW1hdGFib2lzJywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdDb2NoZXBhaWxsZScsIHRhcmdldDogJ0p1ZGdlJywgdmFsdWU6IDIgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdDb2NoZXBhaWxsZScsIHRhcmdldDogJ0NoYW1wbWF0aGlldScsIHZhbHVlOiAyIH0sXG4gICAgICAgIHsgc291cmNlOiAnQ29jaGVwYWlsbGUnLCB0YXJnZXQ6ICdCcmV2ZXQnLCB2YWx1ZTogMiB9LFxuICAgICAgICB7IHNvdXJjZTogJ0NvY2hlcGFpbGxlJywgdGFyZ2V0OiAnQ2hlbmlsZGlldScsIHZhbHVlOiAyIH0sXG4gICAgICAgIHsgc291cmNlOiAnQ29jaGVwYWlsbGUnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDIgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdDb2NoZXBhaWxsZScsIHRhcmdldDogJ0JhbWF0YWJvaXMnLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ1BvbnRtZXJjeScsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ0JvdWxhdHJ1ZWxsZScsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ0Vwb25pbmUnLCB0YXJnZXQ6ICdNbWUuVGhlbmFyZGllcicsIHZhbHVlOiAyIH0sXG4gICAgICAgIHsgc291cmNlOiAnRXBvbmluZScsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogMyB9LFxuICAgICAgICB7IHNvdXJjZTogJ0FuemVsbWEnLCB0YXJnZXQ6ICdFcG9uaW5lJywgdmFsdWU6IDIgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdBbnplbG1hJywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiAyIH0sXG4gICAgICAgIHsgc291cmNlOiAnQW56ZWxtYScsIHRhcmdldDogJ01tZS5UaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdXb21hbjInLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDMgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdXb21hbjInLCB0YXJnZXQ6ICdDb3NldHRlJywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdXb21hbjInLCB0YXJnZXQ6ICdKYXZlcnQnLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ01vdGhlcklubm9jZW50JywgdGFyZ2V0OiAnRmF1Y2hlbGV2ZW50JywgdmFsdWU6IDMgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdNb3RoZXJJbm5vY2VudCcsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ0dyaWJpZXInLCB0YXJnZXQ6ICdGYXVjaGVsZXZlbnQnLCB2YWx1ZTogMiB9LFxuICAgICAgICB7IHNvdXJjZTogJ01tZS5CdXJnb24nLCB0YXJnZXQ6ICdKb25kcmV0dGUnLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ0dhdnJvY2hlJywgdGFyZ2V0OiAnTW1lLkJ1cmdvbicsIHZhbHVlOiAyIH0sXG4gICAgICAgIHsgc291cmNlOiAnR2F2cm9jaGUnLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdHYXZyb2NoZScsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAxIH0sXG4gICAgICAgIHsgc291cmNlOiAnR2F2cm9jaGUnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdHaWxsZW5vcm1hbmQnLCB0YXJnZXQ6ICdDb3NldHRlJywgdmFsdWU6IDMgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdHaWxsZW5vcm1hbmQnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDIgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdNYWdub24nLCB0YXJnZXQ6ICdHaWxsZW5vcm1hbmQnLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ01hZ25vbicsIHRhcmdldDogJ01tZS5UaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdNbGxlLkdpbGxlbm9ybWFuZCcsIHRhcmdldDogJ0dpbGxlbm9ybWFuZCcsIHZhbHVlOiA5IH0sXG4gICAgICAgIHsgc291cmNlOiAnTWxsZS5HaWxsZW5vcm1hbmQnLCB0YXJnZXQ6ICdDb3NldHRlJywgdmFsdWU6IDIgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdNbGxlLkdpbGxlbm9ybWFuZCcsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMiB9LFxuICAgICAgICB7IHNvdXJjZTogJ01tZS5Qb250bWVyY3knLCB0YXJnZXQ6ICdNbGxlLkdpbGxlbm9ybWFuZCcsIHZhbHVlOiAxIH0sXG4gICAgICAgIHsgc291cmNlOiAnTW1lLlBvbnRtZXJjeScsIHRhcmdldDogJ1BvbnRtZXJjeScsIHZhbHVlOiAxIH0sXG4gICAgICAgIHsgc291cmNlOiAnTWxsZS5WYXVib2lzJywgdGFyZ2V0OiAnTWxsZS5HaWxsZW5vcm1hbmQnLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ0x0LkdpbGxlbm9ybWFuZCcsIHRhcmdldDogJ01sbGUuR2lsbGVub3JtYW5kJywgdmFsdWU6IDIgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdMdC5HaWxsZW5vcm1hbmQnLCB0YXJnZXQ6ICdHaWxsZW5vcm1hbmQnLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ0x0LkdpbGxlbm9ybWFuZCcsIHRhcmdldDogJ0Nvc2V0dGUnLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ01sbGUuR2lsbGVub3JtYW5kJywgdmFsdWU6IDYgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJpdXMnLCB0YXJnZXQ6ICdHaWxsZW5vcm1hbmQnLCB2YWx1ZTogMTIgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJpdXMnLCB0YXJnZXQ6ICdQb250bWVyY3knLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ0x0LkdpbGxlbm9ybWFuZCcsIHZhbHVlOiAxIH0sXG4gICAgICAgIHsgc291cmNlOiAnTWFyaXVzJywgdGFyZ2V0OiAnQ29zZXR0ZScsIHZhbHVlOiAyMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMTkgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJpdXMnLCB0YXJnZXQ6ICdUaG9sb215ZXMnLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogMiB9LFxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ0Vwb25pbmUnLCB2YWx1ZTogNSB9LFxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDQgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdCYXJvbmVzc1QnLCB0YXJnZXQ6ICdHaWxsZW5vcm1hbmQnLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ0Jhcm9uZXNzVCcsIHRhcmdldDogJ01hcml1cycsIHZhbHVlOiAxIH0sXG4gICAgICAgIHsgc291cmNlOiAnTWFiZXVmJywgdGFyZ2V0OiAnTWFyaXVzJywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdNYWJldWYnLCB0YXJnZXQ6ICdFcG9uaW5lJywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdNYWJldWYnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiAxIH0sXG4gICAgICAgIHsgc291cmNlOiAnRW5qb2xyYXMnLCB0YXJnZXQ6ICdNYXJpdXMnLCB2YWx1ZTogNyB9LFxuICAgICAgICB7IHNvdXJjZTogJ0Vuam9scmFzJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogNyB9LFxuICAgICAgICB7IHNvdXJjZTogJ0Vuam9scmFzJywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDYgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdFbmpvbHJhcycsIHRhcmdldDogJ01hYmV1ZicsIHZhbHVlOiAxIH0sXG4gICAgICAgIHsgc291cmNlOiAnRW5qb2xyYXMnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDQgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdDb21iZWZlcnJlJywgdGFyZ2V0OiAnRW5qb2xyYXMnLCB2YWx1ZTogMTUgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdDb21iZWZlcnJlJywgdGFyZ2V0OiAnTWFyaXVzJywgdmFsdWU6IDUgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdDb21iZWZlcnJlJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogNiB9LFxuICAgICAgICB7IHNvdXJjZTogJ0NvbWJlZmVycmUnLCB0YXJnZXQ6ICdNYWJldWYnLCB2YWx1ZTogMiB9LFxuICAgICAgICB7IHNvdXJjZTogJ1Byb3V2YWlyZScsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdQcm91dmFpcmUnLCB0YXJnZXQ6ICdFbmpvbHJhcycsIHZhbHVlOiA0IH0sXG4gICAgICAgIHsgc291cmNlOiAnUHJvdXZhaXJlJywgdGFyZ2V0OiAnQ29tYmVmZXJyZScsIHZhbHVlOiAyIH0sXG4gICAgICAgIHsgc291cmNlOiAnRmV1aWxseScsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDIgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdGZXVpbGx5JywgdGFyZ2V0OiAnRW5qb2xyYXMnLCB2YWx1ZTogNiB9LFxuICAgICAgICB7IHNvdXJjZTogJ0ZldWlsbHknLCB0YXJnZXQ6ICdQcm91dmFpcmUnLCB2YWx1ZTogMiB9LFxuICAgICAgICB7IHNvdXJjZTogJ0ZldWlsbHknLCB0YXJnZXQ6ICdDb21iZWZlcnJlJywgdmFsdWU6IDUgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdGZXVpbGx5JywgdGFyZ2V0OiAnTWFiZXVmJywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdGZXVpbGx5JywgdGFyZ2V0OiAnTWFyaXVzJywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdDb3VyZmV5cmFjJywgdGFyZ2V0OiAnTWFyaXVzJywgdmFsdWU6IDkgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdDb3VyZmV5cmFjJywgdGFyZ2V0OiAnRW5qb2xyYXMnLCB2YWx1ZTogMTcgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdDb3VyZmV5cmFjJywgdGFyZ2V0OiAnQ29tYmVmZXJyZScsIHZhbHVlOiAxMyB9LFxuICAgICAgICB7IHNvdXJjZTogJ0NvdXJmZXlyYWMnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiA3IH0sXG4gICAgICAgIHsgc291cmNlOiAnQ291cmZleXJhYycsIHRhcmdldDogJ01hYmV1ZicsIHZhbHVlOiAyIH0sXG4gICAgICAgIHsgc291cmNlOiAnQ291cmZleXJhYycsIHRhcmdldDogJ0Vwb25pbmUnLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ0NvdXJmZXlyYWMnLCB0YXJnZXQ6ICdGZXVpbGx5JywgdmFsdWU6IDYgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdDb3VyZmV5cmFjJywgdGFyZ2V0OiAnUHJvdXZhaXJlJywgdmFsdWU6IDMgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdCYWhvcmVsJywgdGFyZ2V0OiAnQ29tYmVmZXJyZScsIHZhbHVlOiA1IH0sXG4gICAgICAgIHsgc291cmNlOiAnQmFob3JlbCcsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDUgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdCYWhvcmVsJywgdGFyZ2V0OiAnQ291cmZleXJhYycsIHZhbHVlOiA2IH0sXG4gICAgICAgIHsgc291cmNlOiAnQmFob3JlbCcsIHRhcmdldDogJ01hYmV1ZicsIHZhbHVlOiAyIH0sXG4gICAgICAgIHsgc291cmNlOiAnQmFob3JlbCcsIHRhcmdldDogJ0Vuam9scmFzJywgdmFsdWU6IDQgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdCYWhvcmVsJywgdGFyZ2V0OiAnRmV1aWxseScsIHZhbHVlOiAzIH0sXG4gICAgICAgIHsgc291cmNlOiAnQmFob3JlbCcsIHRhcmdldDogJ1Byb3V2YWlyZScsIHZhbHVlOiAyIH0sXG4gICAgICAgIHsgc291cmNlOiAnQmFob3JlbCcsIHRhcmdldDogJ01hcml1cycsIHZhbHVlOiAxIH0sXG4gICAgICAgIHsgc291cmNlOiAnQm9zc3VldCcsIHRhcmdldDogJ01hcml1cycsIHZhbHVlOiA1IH0sXG4gICAgICAgIHsgc291cmNlOiAnQm9zc3VldCcsIHRhcmdldDogJ0NvdXJmZXlyYWMnLCB2YWx1ZTogMTIgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdCb3NzdWV0JywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogNSB9LFxuICAgICAgICB7IHNvdXJjZTogJ0Jvc3N1ZXQnLCB0YXJnZXQ6ICdCYWhvcmVsJywgdmFsdWU6IDQgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdCb3NzdWV0JywgdGFyZ2V0OiAnRW5qb2xyYXMnLCB2YWx1ZTogMTAgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdCb3NzdWV0JywgdGFyZ2V0OiAnRmV1aWxseScsIHZhbHVlOiA2IH0sXG4gICAgICAgIHsgc291cmNlOiAnQm9zc3VldCcsIHRhcmdldDogJ1Byb3V2YWlyZScsIHZhbHVlOiAyIH0sXG4gICAgICAgIHsgc291cmNlOiAnQm9zc3VldCcsIHRhcmdldDogJ0NvbWJlZmVycmUnLCB2YWx1ZTogOSB9LFxuICAgICAgICB7IHNvdXJjZTogJ0Jvc3N1ZXQnLCB0YXJnZXQ6ICdNYWJldWYnLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ0Jvc3N1ZXQnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdKb2x5JywgdGFyZ2V0OiAnQmFob3JlbCcsIHZhbHVlOiA1IH0sXG4gICAgICAgIHsgc291cmNlOiAnSm9seScsIHRhcmdldDogJ0Jvc3N1ZXQnLCB2YWx1ZTogNyB9LFxuICAgICAgICB7IHNvdXJjZTogJ0pvbHknLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiAzIH0sXG4gICAgICAgIHsgc291cmNlOiAnSm9seScsIHRhcmdldDogJ0NvdXJmZXlyYWMnLCB2YWx1ZTogNSB9LFxuICAgICAgICB7IHNvdXJjZTogJ0pvbHknLCB0YXJnZXQ6ICdFbmpvbHJhcycsIHZhbHVlOiA1IH0sXG4gICAgICAgIHsgc291cmNlOiAnSm9seScsIHRhcmdldDogJ0ZldWlsbHknLCB2YWx1ZTogNSB9LFxuICAgICAgICB7IHNvdXJjZTogJ0pvbHknLCB0YXJnZXQ6ICdQcm91dmFpcmUnLCB2YWx1ZTogMiB9LFxuICAgICAgICB7IHNvdXJjZTogJ0pvbHknLCB0YXJnZXQ6ICdDb21iZWZlcnJlJywgdmFsdWU6IDUgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdKb2x5JywgdGFyZ2V0OiAnTWFiZXVmJywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdKb2x5JywgdGFyZ2V0OiAnTWFyaXVzJywgdmFsdWU6IDIgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdHcmFudGFpcmUnLCB0YXJnZXQ6ICdCb3NzdWV0JywgdmFsdWU6IDMgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdHcmFudGFpcmUnLCB0YXJnZXQ6ICdFbmpvbHJhcycsIHZhbHVlOiAzIH0sXG4gICAgICAgIHsgc291cmNlOiAnR3JhbnRhaXJlJywgdGFyZ2V0OiAnQ29tYmVmZXJyZScsIHZhbHVlOiAxIH0sXG4gICAgICAgIHsgc291cmNlOiAnR3JhbnRhaXJlJywgdGFyZ2V0OiAnQ291cmZleXJhYycsIHZhbHVlOiAyIH0sXG4gICAgICAgIHsgc291cmNlOiAnR3JhbnRhaXJlJywgdGFyZ2V0OiAnSm9seScsIHZhbHVlOiAyIH0sXG4gICAgICAgIHsgc291cmNlOiAnR3JhbnRhaXJlJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ0dyYW50YWlyZScsIHRhcmdldDogJ0JhaG9yZWwnLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ0dyYW50YWlyZScsIHRhcmdldDogJ0ZldWlsbHknLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ0dyYW50YWlyZScsIHRhcmdldDogJ1Byb3V2YWlyZScsIHZhbHVlOiAxIH0sXG4gICAgICAgIHsgc291cmNlOiAnTW90aGVyUGx1dGFyY2gnLCB0YXJnZXQ6ICdNYWJldWYnLCB2YWx1ZTogMyB9LFxuICAgICAgICB7IHNvdXJjZTogJ0d1ZXVsZW1lcicsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogNSB9LFxuICAgICAgICB7IHNvdXJjZTogJ0d1ZXVsZW1lcicsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ0d1ZXVsZW1lcicsIHRhcmdldDogJ01tZS5UaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdHdWV1bGVtZXInLCB0YXJnZXQ6ICdKYXZlcnQnLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ0d1ZXVsZW1lcicsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdHdWV1bGVtZXInLCB0YXJnZXQ6ICdFcG9uaW5lJywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdCYWJldCcsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogNiB9LFxuICAgICAgICB7IHNvdXJjZTogJ0JhYmV0JywgdGFyZ2V0OiAnR3VldWxlbWVyJywgdmFsdWU6IDYgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdCYWJldCcsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ0JhYmV0JywgdGFyZ2V0OiAnTW1lLlRoZW5hcmRpZXInLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ0JhYmV0JywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDIgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdCYWJldCcsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdCYWJldCcsIHRhcmdldDogJ0Vwb25pbmUnLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ0NsYXF1ZXNvdXMnLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDQgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdDbGFxdWVzb3VzJywgdGFyZ2V0OiAnQmFiZXQnLCB2YWx1ZTogNCB9LFxuICAgICAgICB7IHNvdXJjZTogJ0NsYXF1ZXNvdXMnLCB0YXJnZXQ6ICdHdWV1bGVtZXInLCB2YWx1ZTogNCB9LFxuICAgICAgICB7IHNvdXJjZTogJ0NsYXF1ZXNvdXMnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdDbGFxdWVzb3VzJywgdGFyZ2V0OiAnTW1lLlRoZW5hcmRpZXInLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ0NsYXF1ZXNvdXMnLCB0YXJnZXQ6ICdKYXZlcnQnLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ0NsYXF1ZXNvdXMnLCB0YXJnZXQ6ICdFcG9uaW5lJywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdDbGFxdWVzb3VzJywgdGFyZ2V0OiAnRW5qb2xyYXMnLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ01vbnRwYXJuYXNzZScsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAxIH0sXG4gICAgICAgIHsgc291cmNlOiAnTW9udHBhcm5hc3NlJywgdGFyZ2V0OiAnQmFiZXQnLCB2YWx1ZTogMiB9LFxuICAgICAgICB7IHNvdXJjZTogJ01vbnRwYXJuYXNzZScsIHRhcmdldDogJ0d1ZXVsZW1lcicsIHZhbHVlOiAyIH0sXG4gICAgICAgIHsgc291cmNlOiAnTW9udHBhcm5hc3NlJywgdGFyZ2V0OiAnQ2xhcXVlc291cycsIHZhbHVlOiAyIH0sXG4gICAgICAgIHsgc291cmNlOiAnTW9udHBhcm5hc3NlJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXG4gICAgICAgIHsgc291cmNlOiAnTW9udHBhcm5hc3NlJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ01vbnRwYXJuYXNzZScsIHRhcmdldDogJ0Vwb25pbmUnLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ01vbnRwYXJuYXNzZScsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ1RvdXNzYWludCcsIHRhcmdldDogJ0Nvc2V0dGUnLCB2YWx1ZTogMiB9LFxuICAgICAgICB7IHNvdXJjZTogJ1RvdXNzYWludCcsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAxIH0sXG4gICAgICAgIHsgc291cmNlOiAnVG91c3NhaW50JywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXG4gICAgICAgIHsgc291cmNlOiAnQ2hpbGQxJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMiB9LFxuICAgICAgICB7IHNvdXJjZTogJ0NoaWxkMicsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDIgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdDaGlsZDInLCB0YXJnZXQ6ICdDaGlsZDEnLCB2YWx1ZTogMyB9LFxuICAgICAgICB7IHNvdXJjZTogJ0JydWpvbicsIHRhcmdldDogJ0JhYmV0JywgdmFsdWU6IDMgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdCcnVqb24nLCB0YXJnZXQ6ICdHdWV1bGVtZXInLCB2YWx1ZTogMyB9LFxuICAgICAgICB7IHNvdXJjZTogJ0JydWpvbicsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogMyB9LFxuICAgICAgICB7IHNvdXJjZTogJ0JydWpvbicsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdCcnVqb24nLCB0YXJnZXQ6ICdFcG9uaW5lJywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdCcnVqb24nLCB0YXJnZXQ6ICdDbGFxdWVzb3VzJywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdCcnVqb24nLCB0YXJnZXQ6ICdNb250cGFybmFzc2UnLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ01tZS5IdWNoZWxvdXAnLCB0YXJnZXQ6ICdCb3NzdWV0JywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuSHVjaGVsb3VwJywgdGFyZ2V0OiAnSm9seScsIHZhbHVlOiAxIH0sXG4gICAgICAgIHsgc291cmNlOiAnTW1lLkh1Y2hlbG91cCcsIHRhcmdldDogJ0dyYW50YWlyZScsIHZhbHVlOiAxIH0sXG4gICAgICAgIHsgc291cmNlOiAnTW1lLkh1Y2hlbG91cCcsIHRhcmdldDogJ0JhaG9yZWwnLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ01tZS5IdWNoZWxvdXAnLCB0YXJnZXQ6ICdDb3VyZmV5cmFjJywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuSHVjaGVsb3VwJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHNvdXJjZTogJ01tZS5IdWNoZWxvdXAnLCB0YXJnZXQ6ICdFbmpvbHJhcycsIHZhbHVlOiAxIH1cbiAgICBdXG59XG4iLCIvKipcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XG4gKiBAZGVzY3JpcHRpb24gUGF0ZW50cyBkYXRhc2V0LCBmcm9tIGh0dHBzOi8vd3d3LnBhdGVudHN2aWV3Lm9yZy93ZWIvI3Zpei9yZWxhdGlvbnNoaXBzXG4gKi9cblxuZXhwb3J0IGNvbnN0IHBhdGVudHMgPSB7XG4gICAgbm9kZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXG4gICAgICAgICAgICBpZDogJzY1MTYyMjcnLFxuICAgICAgICAgICAgbmFtZTogJ1JlY2hhcmdlYWJsZSBzcGluYWwgY29yZCBzdGltdWxhdG9yIHN5c3RlbScsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzNjMsXG4gICAgICAgICAgICB4OiAtMTQ2LjUwNzIyNzcyMjA2NDE2LFxuICAgICAgICAgICAgeTogMjM3Ljc4OTg4NDg4NjQxODJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXG4gICAgICAgICAgICBpZDogJzY1MzU5MDknLFxuICAgICAgICAgICAgbmFtZTogJ1N5c3RlbSBhbmQgbWV0aG9kIGZvciByZWNvcmQgYW5kIHBsYXliYWNrIG9mIGNvbGxhYm9yYXRpdmUgV2ViIGJyb3dzaW5nIHNlc3Npb24nLFxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNDM4LFxuICAgICAgICAgICAgeDogMzAxLjA4ODA4NDA3NDAxNzgsXG4gICAgICAgICAgICB5OiA3OC4zNTQ0OTE5MTU4NzU0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxuICAgICAgICAgICAgaWQ6ICc2NTQ5OTA4JyxcbiAgICAgICAgICAgIG5hbWU6XG4gICAgICAgICAgICAgICAgJ01ldGhvZHMgYW5kIGFwcGFyYXR1cyBmb3IgaW50ZXJwcmV0aW5nIHVzZXIgc2VsZWN0aW9ucyBpbiB0aGUgY29udGV4dCBvZiBhIHJlbGF0aW9uIGRpc3RyaWJ1dGVkIGFzIGEgc2V0IG9mIG9ydGhvZ29uYWxpemVkIHN1Yi1yZWxhdGlvbnMnLFxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjY4LFxuICAgICAgICAgICAgeDogLTEzLjgxNDg1NjU5MDc0MTIwMixcbiAgICAgICAgICAgIHk6IC0xODMuNTUwMTY3OTM1MDI3NFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNjU1MzU2MycsXG4gICAgICAgICAgICBuYW1lOiAnRGV2ZWxvcG1lbnQgdG9vbCwgbWV0aG9kLCBhbmQgc3lzdGVtIGZvciBjbGllbnQgc2VydmVyIGFwcGxpY2F0aW9ucycsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzNTEsXG4gICAgICAgICAgICB4OiAtMC41MjI0MzEyNzkwMTQyNzc3LFxuICAgICAgICAgICAgeTogLTI0Ny4xNDk1Nzc5NjI3Mjc5XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxuICAgICAgICAgICAgaWQ6ICc2NTU4MzIwJyxcbiAgICAgICAgICAgIG5hbWU6XG4gICAgICAgICAgICAgICAgJ0hhbmRoZWxkIHBlcnNvbmFsIGRhdGEgYXNzaXN0YW50IChQREEpIHdpdGggYSBtZWRpY2FsIGRldmljZSBhbmQgbWV0aG9kIG9mIHVzaW5nIHRoZSBzYW1lJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTUxNCxcbiAgICAgICAgICAgIHg6IC0yMDQuNjQwNzE4OTQ2NTQ3ODgsXG4gICAgICAgICAgICB5OiA3MS41NzA1NTI4NDUxMjMxMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNjU1ODM1MScsXG4gICAgICAgICAgICBuYW1lOiAnQ2xvc2VkIGxvb3Agc3lzdGVtIGZvciBjb250cm9sbGluZyBpbnN1bGluIGluZnVzaW9uJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM2OSxcbiAgICAgICAgICAgIHg6IC0yMTIuOTc4MTYwMDAyMTkzODcsXG4gICAgICAgICAgICB5OiAxNC43MTU2NDA1MzQxNzAwOVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNjU2MDQ2MScsXG4gICAgICAgICAgICBuYW1lOiAnQXV0aG9yaXplZCBsb2NhdGlvbiByZXBvcnRpbmcgcGFnaW5nIHN5c3RlbScsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE0NzksXG4gICAgICAgICAgICB4OiAtMjUwLjQzNTQzMDYyOTA1MDkzLFxuICAgICAgICAgICAgeTogLTE5MS40MzcyMDA2MjQwNjAzOFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNjU2MzE3NCcsXG4gICAgICAgICAgICBuYW1lOiAnVGhpbiBmaWxtIHRyYW5zaXN0b3IgYW5kIG1hdHJpeCBkaXNwbGF5IGRldmljZScsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyODQsXG4gICAgICAgICAgICB4OiAtMTIuNTg4MjQ5NTAzNjUyNDAxLFxuICAgICAgICAgICAgeTogLTMuNjA2NjM4OTI1MDc0OTUyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxuICAgICAgICAgICAgaWQ6ICc2NTY1NTA5JyxcbiAgICAgICAgICAgIG5hbWU6ICdBbmFseXRlIG1vbml0b3JpbmcgZGV2aWNlIGFuZCBtZXRob2RzIG9mIHVzZScsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzMzMsXG4gICAgICAgICAgICB4OiAtMTA1LjI1NTExNjEyMzYyMDQ1LFxuICAgICAgICAgICAgeTogMTU3LjExNzEzMzYwNjAyNjIxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxuICAgICAgICAgICAgaWQ6ICc2NTcxMjgyJyxcbiAgICAgICAgICAgIG5hbWU6ICdCbG9jay1iYXNlZCBjb21tdW5pY2F0aW9uIGluIGEgY29tbXVuaWNhdGlvbiBzZXJ2aWNlcyBwYXR0ZXJucyBlbnZpcm9ubWVudCcsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE0NjcsXG4gICAgICAgICAgICB4OiAxMzkuNjY5NzQ2NzQ4MjgxLFxuICAgICAgICAgICAgeTogMjUzLjAxNDA2NTAxNDcxOTQyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxuICAgICAgICAgICAgaWQ6ICc2NTc0NjM1JyxcbiAgICAgICAgICAgIG5hbWU6XG4gICAgICAgICAgICAgICAgJ0FwcGxpY2F0aW9uIGluc3RhbnRpYXRpb24gYmFzZWQgdXBvbiBhdHRyaWJ1dGVzIGFuZCB2YWx1ZXMgc3RvcmVkIGluIGEgbWV0YSBkYXRhIHJlcG9zaXRvcnksIGluY2x1ZGluZyB0aWVyaW5nIG9mIGFwcGxpY2F0aW9uIGxheWVycyBvYmplY3RzIGFuZCBjb21wb25lbnRzJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM2OCxcbiAgICAgICAgICAgIHg6IDExLjAwMjAyNzYyNzc4MjExNixcbiAgICAgICAgICAgIHk6IC0yMzQuOTE4MDUyOTgzMjM1OFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNjU3NzcyNicsXG4gICAgICAgICAgICBuYW1lOiAnQ29tcHV0ZXIgdGVsZXBob255IGludGVncmF0aW9uIGhvdGVsbGluZyBtZXRob2QgYW5kIHN5c3RlbScsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNzAsXG4gICAgICAgICAgICB4OiAtODcuMTkxNTMyNDU4NDEyNjIsXG4gICAgICAgICAgICB5OiAtMTczLjk3NjQ0NzU1OTI5Mjg0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxuICAgICAgICAgICAgaWQ6ICc2NTg3ODM1JyxcbiAgICAgICAgICAgIG5hbWU6ICdTaG9wcGluZyBhc3Npc3RhbmNlIHdpdGggaGFuZGhlbGQgY29tcHV0aW5nIGRldmljZScsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE0NzEsXG4gICAgICAgICAgICB4OiAtMjc5LjI4NjU4MTMzNzg0NjUsXG4gICAgICAgICAgICB5OiAxMTAuMTU4NzkxMjUwMTUwN1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNjYwMTA4NycsXG4gICAgICAgICAgICBuYW1lOiAnSW5zdGFudCBkb2N1bWVudCBzaGFyaW5nJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM5NyxcbiAgICAgICAgICAgIHg6IDIxMC45NDgyMTM1MDEzNzE4NCxcbiAgICAgICAgICAgIHk6IDkyLjUzMTg4Nzg2OTExNDA0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxuICAgICAgICAgICAgaWQ6ICc2NjAyMjUyJyxcbiAgICAgICAgICAgIG5hbWU6ICdDb21iaW5lZCBkaXNzZWN0aW5nLCBjYXV0ZXJpemluZywgYW5kIHN0YXBsaW5nIGRldmljZScsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE1MDMsXG4gICAgICAgICAgICB4OiAxNDcuOTQ5NzcxNjUwNDMyNTgsXG4gICAgICAgICAgICB5OiAxNzAuMDg4ODg4NTU2MzEzMDdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXG4gICAgICAgICAgICBpZDogJzY2MDQxMTcnLFxuICAgICAgICAgICAgbmFtZTogJ01ldGhvZCBvZiBtYWludGFpbmluZyBhIG5ldHdvcmsgb2YgcGFydGlhbGx5IHJlcGxpY2F0ZWQgZGF0YWJhc2Ugc3lzdGVtJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI2MSxcbiAgICAgICAgICAgIHg6IC0wLjg4ODU1NTgwMjc0MjAzNSxcbiAgICAgICAgICAgIHk6IC0yMTguMjMwNDg4MjAzMDcyMjdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXG4gICAgICAgICAgICBpZDogJzY2MDQxMjgnLFxuICAgICAgICAgICAgbmFtZTogJ01ldGhvZCBhbmQgc3lzdGVtIGZvciBkaXN0cmlidXRpbmcgb2JqZWN0cyBvdmVyIGEgbmV0d29yaycsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNjEsXG4gICAgICAgICAgICB4OiAtNTYuNzM4NzI3NDIxMjA4NDEsXG4gICAgICAgICAgICB5OiAtMjQzLjM0ODM4NDEwNjY0NDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXG4gICAgICAgICAgICBpZDogJzY2MDY3NDQnLFxuICAgICAgICAgICAgbmFtZTpcbiAgICAgICAgICAgICAgICAnUHJvdmlkaW5nIGNvbGxhYm9yYXRpdmUgaW5zdGFsbGF0aW9uIG1hbmFnZW1lbnQgaW4gYSBuZXR3b3JrLWJhc2VkIHN1cHBseSBjaGFpbiBlbnZpcm9ubWVudCcsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNzEsXG4gICAgICAgICAgICB4OiAxNTMuOTk0ODI1MTg1MDM5NyxcbiAgICAgICAgICAgIHk6IDIzMS40NjU3OTg4ODEyMDI3MlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNjYwOTE1MCcsXG4gICAgICAgICAgICBuYW1lOlxuICAgICAgICAgICAgICAgICdXZWIgY2xpZW50LXNlcnZlciBzeXN0ZW0gYW5kIG1ldGhvZCBmb3IgaW5jb21wYXRpYmxlIHBhZ2UgbWFya3VwIGFuZCBwcmVzZW50YXRpb24gbGFuZ3VhZ2VzJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTMzNixcbiAgICAgICAgICAgIHg6IDEzLjE4Mjg2NzYwNzMyMTI1NSxcbiAgICAgICAgICAgIHk6IC0xODQuODM0MjY0MzE4ODE1N1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNjYyMTgzNCcsXG4gICAgICAgICAgICBuYW1lOiAnU3lzdGVtIGFuZCBtZXRob2QgZm9yIHZvaWNlIHRyYW5zbWlzc2lvbiBvdmVyIG5ldHdvcmsgcHJvdG9jb2xzJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI2NSxcbiAgICAgICAgICAgIHg6IDg1LjA4MjI4MTQ5MzQ0MzY5LFxuICAgICAgICAgICAgeTogMTA1LjQzNDY0NTcxMjMyODk2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxuICAgICAgICAgICAgaWQ6ICc2NjQxNTMzJyxcbiAgICAgICAgICAgIG5hbWU6XG4gICAgICAgICAgICAgICAgJ0hhbmRoZWxkIHBlcnNvbmFsIGRhdGEgYXNzaXN0YW50IChQREEpIHdpdGggYSBtZWRpY2FsIGRldmljZSBhbmQgbWV0aG9kIG9mIHVzaW5nIHRoZSBzYW1lJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTQzMSxcbiAgICAgICAgICAgIHg6IC0yMTguMDk3NjYxMTgwMDEyMjQsXG4gICAgICAgICAgICB5OiAzOS44NTc2MDAzNTc5Nzk4OVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNjY0NDUzMicsXG4gICAgICAgICAgICBuYW1lOiAnU3VyZ2ljYWwgc3RhcGxpbmcgYXBwYXJhdHVzJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI2NyxcbiAgICAgICAgICAgIHg6IDMwNC42NjMwOTI1MzE2Mjk0LFxuICAgICAgICAgICAgeTogLTI5LjcwOTYxMTU3MzQ5MTM5N1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNjY1NDAzMicsXG4gICAgICAgICAgICBuYW1lOiAnSW5zdGFudCBzaGFyaW5nIG9mIGRvY3VtZW50cyBvbiBhIHJlbW90ZSBzZXJ2ZXInLFxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNDEzLFxuICAgICAgICAgICAgeDogMTU5LjMwMDUwMzU1Mjk2MDE1LFxuICAgICAgICAgICAgeTogMTA4Ljk4Mzg5NTg1NjI3MDA1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxuICAgICAgICAgICAgaWQ6ICc2NjU2MTkzJyxcbiAgICAgICAgICAgIG5hbWU6ICdEZXZpY2UgZm9yIGF0dGFjaG1lbnQgb2YgYnV0dHJlc3MgbWF0ZXJpYWwgdG8gYSBzdXJnaWNhbCBmYXN0ZW5pbmcgZGV2aWNlJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI3OSxcbiAgICAgICAgICAgIHg6IDExNi45MDkxNDE1MzE1ODU5NyxcbiAgICAgICAgICAgIHk6IC03OC43NjYyNjkzNjg1ODU1N1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNjY2NTY0OCcsXG4gICAgICAgICAgICBuYW1lOiAnU3RhdGUgbW9kZWxzIGZvciBtb25pdG9yaW5nIHByb2Nlc3MnLFxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjg4LFxuICAgICAgICAgICAgeDogLTE5Ljc1MTg1MjczOTM1Mzc0LFxuICAgICAgICAgICAgeTogLTEyNi42NTMzODkxMjI2OTkyOFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNjY2NTY1NScsXG4gICAgICAgICAgICBuYW1lOiAnSW1wbGljaXQgcmF0aW5nIG9mIHJldHJpZXZlZCBpbmZvcm1hdGlvbiBpbiBhbiBpbmZvcm1hdGlvbiBzZWFyY2ggc3lzdGVtJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI5NCxcbiAgICAgICAgICAgIHg6IC0yMDUuNTEwMzYxMjE5OTQ2NyxcbiAgICAgICAgICAgIHk6IC02Mi42MTUxNzU3NzI5MjM5NzZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXG4gICAgICAgICAgICBpZDogJzY2ODQ0MzgnLFxuICAgICAgICAgICAgbmFtZTpcbiAgICAgICAgICAgICAgICAnTWV0aG9kIG9mIHVzaW5nIGNhY2hlIHRvIGRldGVybWluZSB0aGUgdmlzaWJpbGl0eSB0byBhIHJlbW90ZSBkYXRhYmFzZSBjbGllbnQgb2YgYSBwbHVyYWxpdHkgb2YgZGF0YWJhc2UgdHJhbnNhY3Rpb25zJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI2NSxcbiAgICAgICAgICAgIHg6IC03MC44OTYyMTE5MDgwNTMyOSxcbiAgICAgICAgICAgIHk6IC0yMTEuNjU4OTgxMjY0Njk0NzVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXG4gICAgICAgICAgICBpZDogJzY2OTAzODcnLFxuICAgICAgICAgICAgbmFtZTogJ1RvdWNoLXNjcmVlbiBpbWFnZSBzY3JvbGxpbmcgc3lzdGVtIGFuZCBtZXRob2QnLFxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzYxLFxuICAgICAgICAgICAgeDogLTk2LjA4MzMzMzU4NjEwMTQsXG4gICAgICAgICAgICB5OiAyNTcuMTg4NjY2MDQ0MjA5XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxuICAgICAgICAgICAgaWQ6ICc2NjkzMjMyJyxcbiAgICAgICAgICAgIG5hbWU6ICdJbmJyZWQgY29ybiBsaW5lIExIMjk1JyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTU4NSxcbiAgICAgICAgICAgIHg6IDIyNS4yMTM2MjM5NjYzNDMzMyxcbiAgICAgICAgICAgIHk6IC0xODEuNzAyMzEyMDg3MzkwMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNjY5ODY0MycsXG4gICAgICAgICAgICBuYW1lOiAnRXhwYW5kaW5nIHBhcmFsbGVsIGphdyBkZXZpY2UgZm9yIHVzZSB3aXRoIGFuIGVsZWN0cm9tZWNoYW5pY2FsIGRyaXZlciBkZXZpY2UnLFxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzU1LFxuICAgICAgICAgICAgeDogMTE2LjkzMzgwMDg4MjAwMzA4LFxuICAgICAgICAgICAgeTogMjIwLjIxNDE5NzA1NDM5NjA3XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxuICAgICAgICAgICAgaWQ6ICc2NzExNTY1JyxcbiAgICAgICAgICAgIG5hbWU6ICdNZXRob2QsIGFwcGFyYXR1cywgYW5kIHN5c3RlbSBmb3IgcHJldmlld2luZyBzZWFyY2ggcmVzdWx0cycsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzODgsXG4gICAgICAgICAgICB4OiAtMzcuNTA0NDgxMjkwNzY3MzUsXG4gICAgICAgICAgICB5OiAtMjczLjQxMTY5NTg0NzkxMzU2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxuICAgICAgICAgICAgaWQ6ICc2NzE2MjMzJyxcbiAgICAgICAgICAgIG5hbWU6XG4gICAgICAgICAgICAgICAgJ0VsZWN0cm9tZWNoYW5pY2FsIGRyaXZlciBhbmQgcmVtb3RlIHN1cmdpY2FsIGluc3RydW1lbnQgYXR0YWNobWVudCBoYXZpbmcgY29tcHV0ZXIgYXNzaXN0ZWQgY29udHJvbCBjYXBhYmlsaXRpZXMnLFxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjQ0LFxuICAgICAgICAgICAgeDogOTkuOTg3NDQ5Mjc3NDAxMDcsXG4gICAgICAgICAgICB5OiAyMTIuNTk1MjcyMjk5NjI2MDZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXG4gICAgICAgICAgICBpZDogJzY3MTgzNjEnLFxuICAgICAgICAgICAgbmFtZTpcbiAgICAgICAgICAgICAgICAnTWV0aG9kIGFuZCBhcHBhcmF0dXMgZm9yIHJlbGlhYmxlIGFuZCBzY2FsYWJsZSBkaXN0cmlidXRpb24gb2YgZGF0YSBmaWxlcyBpbiBkaXN0cmlidXRlZCBuZXR3b3JrcycsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzNDksXG4gICAgICAgICAgICB4OiAtMjE0LjQ3MDY0NTQyMDAxNTUsXG4gICAgICAgICAgICB5OiAxNzkuNzY0NDUzODMzMTE1NDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXG4gICAgICAgICAgICBpZDogJzY3MjQzOTknLFxuICAgICAgICAgICAgbmFtZTpcbiAgICAgICAgICAgICAgICAnTWV0aG9kcyBhbmQgYXBwYXJhdHVzIGZvciBlbmFibGluZyBrZXlib2FyZCBhY2NlbGVyYXRvcnMgaW4gYXBwbGljYXRpb25zIGltcGxlbWVudGVkIHZpYSBhIGJyb3dzZXInLFxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjcxLFxuICAgICAgICAgICAgeDogLTMuODY1NDM3MDk4MDM2NTk3LFxuICAgICAgICAgICAgeTogLTE2OC4wNDY2NTA3NTk3NzYxNlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNjcyNzUyMicsXG4gICAgICAgICAgICBuYW1lOiAnVHJhbnNpc3RvciBhbmQgc2VtaWNvbmR1Y3RvciBkZXZpY2UnLFxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMzAxLFxuICAgICAgICAgICAgeDogNDUuNDkzMDA5MDg2NTMzNDc2LFxuICAgICAgICAgICAgeTogLTE4LjM5OTMzNjc2MTg2NTU1NVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNjcyODcwMicsXG4gICAgICAgICAgICBuYW1lOlxuICAgICAgICAgICAgICAgICdTeXN0ZW0gYW5kIG1ldGhvZCB0byBpbXBsZW1lbnQgYW4gaW50ZWdyYXRlZCBzZWFyY2ggY2VudGVyIHN1cHBvcnRpbmcgYSBmdWxsLXRleHQgc2VhcmNoIGFuZCBxdWVyeSBvbiBhIGRhdGFiYXNlJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI5MCxcbiAgICAgICAgICAgIHg6IC01MC43NzY1MTI2OTY0Nzk2NCxcbiAgICAgICAgICAgIHk6IC0yNjUuNjQzOTQxNjY0MjYxOVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNjcyODk2MCcsXG4gICAgICAgICAgICBuYW1lOiAnVGVjaG5pcXVlcyBmb3IgbWFuYWdpbmcgbXVsdGlwbGUgdGhyZWFkcyBpbiBhIGJyb3dzZXIgZW52aXJvbm1lbnQnLFxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjg3LFxuICAgICAgICAgICAgeDogLTMxLjg2MDk4MjYwMDI3Mjc0LFxuICAgICAgICAgICAgeTogLTE3Ny4wOTYyNzkyNTE2NjA3NVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNjczMjA5NScsXG4gICAgICAgICAgICBuYW1lOiAnTWV0aG9kIGFuZCBhcHBhcmF0dXMgZm9yIG1hcHBpbmcgYmV0d2VlbiBYTUwgYW5kIHJlbGF0aW9uYWwgcmVwcmVzZW50YXRpb25zJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTMxOCxcbiAgICAgICAgICAgIHg6IC00NS4xNzQzMDgyNjg3NzU0NCxcbiAgICAgICAgICAgIHk6IC0xNTIuMjM5MzgzNTUyOTg4MDRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXG4gICAgICAgICAgICBpZDogJzY3MzIxMDAnLFxuICAgICAgICAgICAgbmFtZTogJ0RhdGFiYXNlIGFjY2VzcyBtZXRob2QgYW5kIHN5c3RlbSBmb3IgdXNlciByb2xlIGRlZmluZWQgYWNjZXNzJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM0NyxcbiAgICAgICAgICAgIHg6IC01OS4yMTAxMzY4MDYyOTI2NzQsXG4gICAgICAgICAgICB5OiAtMTc0LjgzODc3OTkwODQ5NTcyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxuICAgICAgICAgICAgaWQ6ICc2NzMyMTExJyxcbiAgICAgICAgICAgIG5hbWU6XG4gICAgICAgICAgICAgICAgJ01ldGhvZCwgYXBwYXJhdHVzLCBzeXN0ZW0sIGFuZCBwcm9ncmFtIHByb2R1Y3QgZm9yIGF0dGFjaGluZyBmaWxlcyBhbmQgb3RoZXIgb2JqZWN0cyB0byBhIHBhcnRpYWxseSByZXBsaWNhdGVkIGRhdGFiYXNlJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI5NCxcbiAgICAgICAgICAgIHg6IC05MC43Mzk3MDUwNDc5NDUxLFxuICAgICAgICAgICAgeTogLTI0NC43MTk5MDMyODc3NDMxNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNjc1NDY4MScsXG4gICAgICAgICAgICBuYW1lOlxuICAgICAgICAgICAgICAgICdQYXJ0aWFsbHkgcmVwbGljYXRlZCBkaXN0cmlidXRlZCBkYXRhYmFzZSB3aXRoIG11bHRpcGxlIGxldmVscyBvZiByZW1vdGUgY2xpZW50cycsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNjksXG4gICAgICAgICAgICB4OiAtNzkuNTgwODM4NzAzMTI2NTUsXG4gICAgICAgICAgICB5OiAtMjI4LjE3MjQwNTQxNzM4NDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXG4gICAgICAgICAgICBpZDogJzY3NjMzNTEnLFxuICAgICAgICAgICAgbmFtZTogJ01ldGhvZCwgYXBwYXJhdHVzLCBhbmQgc3lzdGVtIGZvciBhdHRhY2hpbmcgc2VhcmNoIHJlc3VsdHMnLFxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNDg3LFxuICAgICAgICAgICAgeDogLTI1LjI0MzQ3NDczMzQ5Mjc0MyxcbiAgICAgICAgICAgIHk6IC0yNjMuMjU3NDA3OTQwMjEwNjdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXG4gICAgICAgICAgICBpZDogJzY3NjM1MDEnLFxuICAgICAgICAgICAgbmFtZTogJ1JlbW90ZSBkb2N1bWVudCBzZXJ2aW5nJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTMxOSxcbiAgICAgICAgICAgIHg6IDE1OC4zMjUzODM3NjIwOTQyLFxuICAgICAgICAgICAgeTogOTMuNDk1NDYyMzE1MTY5MTlcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXG4gICAgICAgICAgICBpZDogJzY3Njg5MDQnLFxuICAgICAgICAgICAgbmFtZTogJ0RhdGEgY29tbXVuaWNhdGlvbiBtZXRob2QgdXNpbmcgbW9iaWxlIHRlcm1pbmFsJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI1NixcbiAgICAgICAgICAgIHg6IC0zMDcuOTc2MDYxNTgxMzM0MTQsXG4gICAgICAgICAgICB5OiAxOC43Njk3NTY2Nzk3OTczOTZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXG4gICAgICAgICAgICBpZDogJzY3ODIzODMnLFxuICAgICAgICAgICAgbmFtZTogJ1N5c3RlbSBhbmQgbWV0aG9kIHRvIGltcGxlbWVudCBhIHBlcnNpc3RlbnQgYW5kIGRpc21pc3NpYmxlIHNlYXJjaCBjZW50ZXIgZnJhbWUnLFxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjgyLFxuICAgICAgICAgICAgeDogLTEyLjk3NjE3NzU1NzgzNTg1MixcbiAgICAgICAgICAgIHk6IC0yNzIuOTE5NDQwNDA3Mzc5MVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNjc4MzUyNCcsXG4gICAgICAgICAgICBuYW1lOiAnUm9ib3RpYyBzdXJnaWNhbCB0b29sIHdpdGggdWx0cmFzb3VuZCBjYXV0ZXJpemluZyBhbmQgY3V0dGluZyBpbnN0cnVtZW50JyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTUwNSxcbiAgICAgICAgICAgIHg6IDQzLjM4MjMxMDk4Njk0MDY2LFxuICAgICAgICAgICAgeTogMjc5LjA4MjE3ODAxMTQ3NzE0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxuICAgICAgICAgICAgaWQ6ICc2Nzg2MzgyJyxcbiAgICAgICAgICAgIG5hbWU6XG4gICAgICAgICAgICAgICAgJ1N1cmdpY2FsIHN0YXBsaW5nIGluc3RydW1lbnQgaW5jb3Jwb3JhdGluZyBhbiBhcnRpY3VsYXRpb24gam9pbnQgZm9yIGEgZmlyaW5nIGJhciB0cmFjaycsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzNzEsXG4gICAgICAgICAgICB4OiAxMzQuOTQwNzgxNjQ1MDI4MzUsXG4gICAgICAgICAgICB5OiAtNjUuMTAwODIzNzM1NjYzODFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXG4gICAgICAgICAgICBpZDogJzY4MDQzMzAnLFxuICAgICAgICAgICAgbmFtZTogJ01ldGhvZCBhbmQgc3lzdGVtIGZvciBhY2Nlc3NpbmcgQ1JNIGRhdGEgdmlhIHZvaWNlJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM0OCxcbiAgICAgICAgICAgIHg6IDQxLjQ0NTI1MTcyMzg0Mjg2NSxcbiAgICAgICAgICAgIHk6IC0yMzYuOTkxNTY0ODEwOTg2NVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNjgwOTY1MycsXG4gICAgICAgICAgICBuYW1lOiAnVGVsZW1ldGVyZWQgY2hhcmFjdGVyaXN0aWMgbW9uaXRvciBzeXN0ZW0gYW5kIG1ldGhvZCBvZiB1c2luZyB0aGUgc2FtZScsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNTAsXG4gICAgICAgICAgICB4OiAtMTkyLjM2NjU5NDc3NTY4MDgsXG4gICAgICAgICAgICB5OiA4NS4yMDAzOTcxMzg1OTE1NFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNjgyNjU2NScsXG4gICAgICAgICAgICBuYW1lOiAnTWV0aG9kIGFuZCBhcHBhcmF0dXMgZm9yIHNlcnZpbmcgZmlsZXMgdG8gYnJvd3NpbmcgY2xpZW50cycsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNTMsXG4gICAgICAgICAgICB4OiAtMTg3LjIwMjA3ODYxMjE0MixcbiAgICAgICAgICAgIHk6IC0yMDUuODAyODA2NzE0MDk3NVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNjgyNjU4MicsXG4gICAgICAgICAgICBuYW1lOiAnTWV0aG9kIGFuZCBzeXN0ZW0gZm9yIHVzaW5nIGZpbGUgc3lzdGVtcyBmb3IgY29udGVudCBtYW5hZ2VtZW50JyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI2MixcbiAgICAgICAgICAgIHg6IC0xNzMuMzkwNzE3MTM0MzQ1OTIsXG4gICAgICAgICAgICB5OiAtODQuNzQ4MTA2NDUzOTEwNTJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXG4gICAgICAgICAgICBpZDogJzY4MjY3NDUnLFxuICAgICAgICAgICAgbmFtZTogJ1N5c3RlbSBhbmQgbWV0aG9kIGZvciBzbWFydCBzY3JpcHRpbmcgY2FsbCBjZW50ZXJzIGFuZCBjb25maWd1cmF0aW9uIHRoZXJlb2YnLFxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjkwLFxuICAgICAgICAgICAgeDogLTc2Ljc4MTI2NDMzMTIxMDA1LFxuICAgICAgICAgICAgeTogLTE4OS4yMjE0ODE3NTEyNTA1NFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNjgyOTY1NScsXG4gICAgICAgICAgICBuYW1lOlxuICAgICAgICAgICAgICAgICdNZXRob2QgYW5kIHN5c3RlbSBmb3Igc2VydmVyIHN5bmNocm9uaXphdGlvbiB3aXRoIGEgY29tcHV0aW5nIGRldmljZSB2aWEgYSBjb21wYW5pb24gZGV2aWNlJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI5MixcbiAgICAgICAgICAgIHg6IDU0LjE1MDY3MjEwNzAxODY5LFxuICAgICAgICAgICAgeTogLTE5My41NTk1NDMxMTU0NTM1OFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNjgzMDE3NCcsXG4gICAgICAgICAgICBuYW1lOiAnTWVkaWNhbCBpbnN0cnVtZW50JyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM0NSxcbiAgICAgICAgICAgIHg6IDI0MS42ODM2NTYzMDQwMDAyLFxuICAgICAgICAgICAgeTogMTc4LjgxMDE1NTQ5NDI0NzNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXG4gICAgICAgICAgICBpZDogJzY4NDI3NDgnLFxuICAgICAgICAgICAgbmFtZTpcbiAgICAgICAgICAgICAgICAnVXNhZ2UgYmFzZWQgc3RyZW5ndGggYmV0d2VlbiByZWxhdGVkIGluZm9ybWF0aW9uIGluIGFuIGluZm9ybWF0aW9uIHJldHJpZXZhbCBzeXN0ZW0nLFxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjczLFxuICAgICAgICAgICAgeDogLTI1NS43NjcxNDAxNzYzOTE4LFxuICAgICAgICAgICAgeTogLTg5LjMwOTQxNDkwMTYwMzA5XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxuICAgICAgICAgICAgaWQ6ICc2ODQzNDAzJyxcbiAgICAgICAgICAgIG5hbWU6ICdTdXJnaWNhbCBjbGFtcGluZywgY3V0dGluZyBhbmQgc3RhcGxpbmcgZGV2aWNlJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI3OCxcbiAgICAgICAgICAgIHg6IDgwLjYyMjY3ODg4MzE3NTE1LFxuICAgICAgICAgICAgeTogMjA0LjY3MjQ5MjkyOTU3NTcyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxuICAgICAgICAgICAgaWQ6ICc2ODUwMjUyJyxcbiAgICAgICAgICAgIG5hbWU6ICdJbnRlbGxpZ2VudCBlbGVjdHJvbmljIGFwcGxpYW5jZSBzeXN0ZW0gYW5kIG1ldGhvZCcsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE3ODQsXG4gICAgICAgICAgICB4OiAtMjY5LjA5Mzk2MjU3MTY5ODIsXG4gICAgICAgICAgICB5OiA4MC43OTE1MjU0MDkxNzEwM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNjg1MDg5NScsXG4gICAgICAgICAgICBuYW1lOiAnQXNzaWdubWVudCBtYW5hZ2VyJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTQyOSxcbiAgICAgICAgICAgIHg6IC0xMDQuNzE1MjMxNzI4OTk5NzgsXG4gICAgICAgICAgICB5OiAtMjM3LjY3NDg5MDUxNDk1MzgzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxuICAgICAgICAgICAgaWQ6ICc2ODUwOTQ5JyxcbiAgICAgICAgICAgIG5hbWU6XG4gICAgICAgICAgICAgICAgJ1N5c3RlbSBhbmQgbWV0aG9kIGZvciBnZW5lcmF0aW5nIGEgZHluYW1pYyBpbnRlcmZhY2UgdmlhIGEgY29tbXVuaWNhdGlvbnMgbmV0d29yaycsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNzYsXG4gICAgICAgICAgICB4OiAxNzAuODk0ODQ3ODY2NjQyMyxcbiAgICAgICAgICAgIHk6IC0xNTcuMTYyMzk5NjM4NzI3OVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNjg1MjkxNScsXG4gICAgICAgICAgICBuYW1lOiAnSW5icmVkIGNvcm4gbGluZSBMSDI4M0J0TU9OODEwJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTU4NCxcbiAgICAgICAgICAgIHg6IDIxNC4yODc4MjUyNjY2Nzk3LFxuICAgICAgICAgICAgeTogLTIyMS42NTA2NDU5MDYyNTczNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNjkwNTA1NycsXG4gICAgICAgICAgICBuYW1lOlxuICAgICAgICAgICAgICAgICdTdXJnaWNhbCBzdGFwbGluZyBpbnN0cnVtZW50IGluY29ycG9yYXRpbmcgYSBmaXJpbmcgbWVjaGFuaXNtIGhhdmluZyBhIGxpbmtlZCByYWNrIHRyYW5zbWlzc2lvbicsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzOTgsXG4gICAgICAgICAgICB4OiAyMDQuMjQ0MzE0MDkxNzQzLFxuICAgICAgICAgICAgeTogLTc4LjEwMDIzNjcyMjMyNjA3XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxuICAgICAgICAgICAgaWQ6ICc2OTU5ODUyJyxcbiAgICAgICAgICAgIG5hbWU6XG4gICAgICAgICAgICAgICAgJ1N1cmdpY2FsIHN0YXBsaW5nIGluc3RydW1lbnQgd2l0aCBtdWx0aXN0cm9rZSBmaXJpbmcgaW5jb3Jwb3JhdGluZyBhbiBhbnRpLWJhY2t1cCBtZWNoYW5pc20nLFxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjc5LFxuICAgICAgICAgICAgeDogMjE0LjQ3NzQxMTQwMjM2NTgyLFxuICAgICAgICAgICAgeTogLTU2LjI5MTU4NzYzNjU5MTEyNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNjk2NDM2MycsXG4gICAgICAgICAgICBuYW1lOlxuICAgICAgICAgICAgICAgICdTdXJnaWNhbCBzdGFwbGluZyBpbnN0cnVtZW50IGhhdmluZyBhcnRpY3VsYXRpb24gam9pbnQgc3VwcG9ydCBwbGF0ZXMgZm9yIHN1cHBvcnRpbmcgYSBmaXJpbmcgYmFyJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTMzMCxcbiAgICAgICAgICAgIHg6IDE3MS44OTI0NzI3MDg5ODAyOCxcbiAgICAgICAgICAgIHk6IC05Ny40MTAwMjQ2MjU1MDI5M1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNjk3ODkyMScsXG4gICAgICAgICAgICBuYW1lOiAnU3VyZ2ljYWwgc3RhcGxpbmcgaW5zdHJ1bWVudCBpbmNvcnBvcmF0aW5nIGFuIEUtYmVhbSBmaXJpbmcgbWVjaGFuaXNtJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI3MSxcbiAgICAgICAgICAgIHg6IDIyMC45OTk4MDAzODA0MDQ0LFxuICAgICAgICAgICAgeTogLTcxLjQyMDc4MTM1NjM2NTQ1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxuICAgICAgICAgICAgaWQ6ICc2OTgxNjI4JyxcbiAgICAgICAgICAgIG5hbWU6ICdTdXJnaWNhbCBpbnN0cnVtZW50IHdpdGggYSBsYXRlcmFsLW1vdmluZyBhcnRpY3VsYXRpb24gY29udHJvbCcsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE1ODgsXG4gICAgICAgICAgICB4OiAxNTUuMTIyMDk2Njc3Mzg3MjIsXG4gICAgICAgICAgICB5OiAtOTMuNjk2Mjg3NTE0NjAyOTRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXG4gICAgICAgICAgICBpZDogJzcwMDA4MTgnLFxuICAgICAgICAgICAgbmFtZTpcbiAgICAgICAgICAgICAgICAnU3VyZ2ljYWwgc3RhcGxpbmcgaW5zdHJ1bWVudCBoYXZpbmcgc2VwYXJhdGUgZGlzdGluY3QgY2xvc2luZyBhbmQgZmlyaW5nIHN5c3RlbXMnLFxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNDIyLFxuICAgICAgICAgICAgeDogMjI3LjAxNzY4ODQ1Mzc5NjkyLFxuICAgICAgICAgICAgeTogNy4wMjQwNTY2MTE0NjMwNTFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXG4gICAgICAgICAgICBpZDogJzcwMjU3NDMnLFxuICAgICAgICAgICAgbmFtZTpcbiAgICAgICAgICAgICAgICAnRXh0ZXJuYWwgaW5mdXNpb24gZGV2aWNlIHdpdGggcmVtb3RlIHByb2dyYW1taW5nLCBib2x1cyBlc3RpbWF0b3IgYW5kL29yIHZpYnJhdGlvbiBhbGFybSBjYXBhYmlsaXRpZXMnLFxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzQ4LFxuICAgICAgICAgICAgeDogLTEzOS4zMzQ4NzI3NTc0NDI3NSxcbiAgICAgICAgICAgIHk6IDQ2LjUyMDYxMTE1MzM0Mzk4XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxuICAgICAgICAgICAgaWQ6ICc3MDQ5MTkwJyxcbiAgICAgICAgICAgIG5hbWU6XG4gICAgICAgICAgICAgICAgJ01ldGhvZCBmb3IgZm9ybWluZyBabk8gZmlsbSwgbWV0aG9kIGZvciBmb3JtaW5nIFpuTyBzZW1pY29uZHVjdG9yIGxheWVyLCBtZXRob2QgZm9yIGZhYnJpY2F0aW5nIHNlbWljb25kdWN0b3IgZGV2aWNlLCBhbmQgc2VtaWNvbmR1Y3RvciBkZXZpY2UnLFxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjM0LFxuICAgICAgICAgICAgeDogLTI4OS4xMDkxODgzMzYxMSxcbiAgICAgICAgICAgIHk6IC05Ny45Njc3NjkzODU0OTUzN1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNzA1NTczMScsXG4gICAgICAgICAgICBuYW1lOlxuICAgICAgICAgICAgICAgICdTdXJnaWNhbCBzdGFwbGluZyBpbnN0cnVtZW50IGluY29ycG9yYXRpbmcgYSB0YXBlcmVkIGZpcmluZyBiYXIgZm9yIGluY3JlYXNlZCBmbGV4aWJpbGl0eSBhcm91bmQgdGhlIGFydGljdWxhdGlvbiBqb2ludCcsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzMjUsXG4gICAgICAgICAgICB4OiAyMzAuNDk1MTgzODY0Mzk5ODgsXG4gICAgICAgICAgICB5OiAtNTkuNjQyMjQ1Njc4NTgyNDhcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXG4gICAgICAgICAgICBpZDogJzcwNjEwMTQnLFxuICAgICAgICAgICAgbmFtZTpcbiAgICAgICAgICAgICAgICAnTmF0dXJhbC1zdXBlcmxhdHRpY2UgaG9tb2xvZ291cyBzaW5nbGUgY3J5c3RhbCB0aGluIGZpbG0sIG1ldGhvZCBmb3IgcHJlcGFyYXRpb24gdGhlcmVvZiwgYW5kIGRldmljZSB1c2luZyBzYWlkIHNpbmdsZSBjcnlzdGFsIHRoaW4gZmlsbScsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMzMzksXG4gICAgICAgICAgICB4OiAtNS44MDA4ODIwNDQ5MDE0MzksXG4gICAgICAgICAgICB5OiA2OC41MjY0MTU5NTAzMTUyNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNzA2NDM0NicsXG4gICAgICAgICAgICBuYW1lOiAnVHJhbnNpc3RvciBhbmQgc2VtaWNvbmR1Y3RvciBkZXZpY2UnLFxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjY4LFxuICAgICAgICAgICAgeDogLTMuNDAwMzAzMTUxOTkxMzcxNixcbiAgICAgICAgICAgIHk6IDI1Ljk4MTM1NjgzNjA0MzY4OFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNzEwNTg2OCcsXG4gICAgICAgICAgICBuYW1lOiAnSGlnaC1lbGVjdHJvbiBtb2JpbGl0eSB0cmFuc2lzdG9yIHdpdGggemluYyBveGlkZScsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyMzMsXG4gICAgICAgICAgICB4OiAtMTcuODM1Nzg1NzQ5Nzg1ODE3LFxuICAgICAgICAgICAgeTogMTk5LjkxODgzNzIwMjEwMzA1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxuICAgICAgICAgICAgaWQ6ICc3MTExNzY5JyxcbiAgICAgICAgICAgIG5hbWU6XG4gICAgICAgICAgICAgICAgJ1N1cmdpY2FsIGluc3RydW1lbnQgaW5jb3Jwb3JhdGluZyBhbiBhcnRpY3VsYXRpb24gbWVjaGFuaXNtIGhhdmluZyByb3RhdGlvbiBhYm91dCB0aGUgbG9uZ2l0dWRpbmFsIGF4aXMnLFxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjc4LFxuICAgICAgICAgICAgeDogMTUxLjIyNTc5ODMyNTI0MDQ1LFxuICAgICAgICAgICAgeTogLTM3LjE3MDk5MDc0NzQ5MDEzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxuICAgICAgICAgICAgaWQ6ICc3MTQ3MTM4JyxcbiAgICAgICAgICAgIG5hbWU6XG4gICAgICAgICAgICAgICAgJ1N1cmdpY2FsIHN0YXBsaW5nIGluc3RydW1lbnQgaGF2aW5nIGFuIGVsZWN0cm9hY3RpdmUgcG9seW1lciBhY3R1YXRlZCBidXR0cmVzcyBkZXBsb3ltZW50IG1lY2hhbmlzbScsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE0MjgsXG4gICAgICAgICAgICB4OiAxODkuMDg2MTQzMjM4NTc1LFxuICAgICAgICAgICAgeTogLTczLjY5MTMwMzkyNjgzOTI0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxuICAgICAgICAgICAgaWQ6ICc3MTU5NzUwJyxcbiAgICAgICAgICAgIG5hbWU6ICdTdXJnaWNhbCBzdGFwbGluZyBkZXZpY2UnLFxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjU4LFxuICAgICAgICAgICAgeDogLTQxLjI5OTk1MTg2NTE5NDQzLFxuICAgICAgICAgICAgeTogMjkyLjg0NjI2NzQ1Mzc4MjJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXG4gICAgICAgICAgICBpZDogJzcyMTE4MjUnLFxuICAgICAgICAgICAgbmFtZTogJ0luZGl1bSBveGlkZS1iYXNlZCB0aGluIGZpbG0gdHJhbnNpc3RvcnMgYW5kIGNpcmN1aXRzJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzI0NSxcbiAgICAgICAgICAgIHg6IC0zMTIuMzgzOTA1NzIyMTQ3NyxcbiAgICAgICAgICAgIHk6IC01LjYxNDU0MTU2NzEzMzAwN1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNzI0NjczNCcsXG4gICAgICAgICAgICBuYW1lOiAnUm90YXJ5IGh5ZHJhdWxpYyBwdW1wIGFjdHVhdGVkIG11bHRpLXN0cm9rZSBzdXJnaWNhbCBpbnN0cnVtZW50JyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI4OCxcbiAgICAgICAgICAgIHg6IDIwMC40NDU2MzM4MDA4NjUxNSxcbiAgICAgICAgICAgIHk6IC02My4xODg2NTU4ODA3Njg4NlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNzI4Mjc4MicsXG4gICAgICAgICAgICBuYW1lOiAnQ29tYmluZWQgYmluYXJ5IG94aWRlIHNlbWljb25kdWN0b3IgZGV2aWNlJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzI3MyxcbiAgICAgICAgICAgIHg6IC0xMjUuODMwOTA0MTQ3Nzk4NixcbiAgICAgICAgICAgIHk6IC0zMS4yNzc4Nzc4OTM1ODA0ODhcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXG4gICAgICAgICAgICBpZDogJzcyOTc5NzcnLFxuICAgICAgICAgICAgbmFtZTogJ1NlbWljb25kdWN0b3IgZGV2aWNlJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzMxOCxcbiAgICAgICAgICAgIHg6IC0xMjguMjgyODg2Mjk2OTY3MjYsXG4gICAgICAgICAgICB5OiAtNTUuMjYxNDc1NTc4MDMzMjlcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXG4gICAgICAgICAgICBpZDogJzczMjMzNTYnLFxuICAgICAgICAgICAgbmFtZTpcbiAgICAgICAgICAgICAgICAnTG5DdU8oUyxTZSxUZSltb25vY3J5c3RhbGxpbmUgdGhpbiBmaWxtLCBpdHMgbWFudWZhY3R1cmluZyBtZXRob2QsIGFuZCBvcHRpY2FsIGRldmljZSBvciBlbGVjdHJvbmljIGRldmljZSB1c2luZyB0aGUgbW9ub2NyeXN0YWxsaW5lIHRoaW4gZmlsbScsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyNTEsXG4gICAgICAgICAgICB4OiAtMTguNTk3NTUzMDUzOTU1NzQsXG4gICAgICAgICAgICB5OiA4OC45NTUzMTYxMDgzODk2OFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNzM0MDQxMScsXG4gICAgICAgICAgICBuYW1lOlxuICAgICAgICAgICAgICAgICdTeXN0ZW0gYW5kIG1ldGhvZCBmb3IgZ2VuZXJhdGluZywgY2FwdHVyaW5nLCBhbmQgbWFuYWdpbmcgY3VzdG9tZXIgbGVhZCBpbmZvcm1hdGlvbiBvdmVyIGEgY29tcHV0ZXIgbmV0d29yaycsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyODIsXG4gICAgICAgICAgICB4OiAxNzEuMTQwODMxNTU5MTY5OCxcbiAgICAgICAgICAgIHk6IC0yMDIuMjQ4ODM3MDgwNDQ4MDhcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXG4gICAgICAgICAgICBpZDogJzczODA2OTUnLFxuICAgICAgICAgICAgbmFtZTpcbiAgICAgICAgICAgICAgICAnU3VyZ2ljYWwgc3RhcGxpbmcgaW5zdHJ1bWVudCBoYXZpbmcgYSBzaW5nbGUgbG9ja291dCBtZWNoYW5pc20gZm9yIHByZXZlbnRpb24gb2YgZmlyaW5nJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM4NixcbiAgICAgICAgICAgIHg6IDE4Ni4yNTgzMzUzMDExMDE5NCxcbiAgICAgICAgICAgIHk6IC0yMS42NjMyMTg3MzI0NTIwOVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNzM4MDY5NicsXG4gICAgICAgICAgICBuYW1lOlxuICAgICAgICAgICAgICAgICdBcnRpY3VsYXRpbmcgc3VyZ2ljYWwgc3RhcGxpbmcgaW5zdHJ1bWVudCBpbmNvcnBvcmF0aW5nIGEgdHdvLXBpZWNlIEUtYmVhbSBmaXJpbmcgbWVjaGFuaXNtJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM4OCxcbiAgICAgICAgICAgIHg6IDIwNy45MDI5NTkzOTAzMTc5LFxuICAgICAgICAgICAgeTogLTguNTMxNTMzNzM3NjIxODg1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxuICAgICAgICAgICAgaWQ6ICc3Mzg1MjI0JyxcbiAgICAgICAgICAgIG5hbWU6XG4gICAgICAgICAgICAgICAgJ1RoaW4gZmlsbSB0cmFuc2lzdG9yIGhhdmluZyBhbiBldGNoaW5nIHByb3RlY3Rpb24gZmlsbSBhbmQgbWFudWZhY3R1cmluZyBtZXRob2QgdGhlcmVvZicsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyMjQsXG4gICAgICAgICAgICB4OiAtMjA5LjgyMjMwNDgyNTU1MzM1LFxuICAgICAgICAgICAgeTogLTEzOC41MTAwNDA5OTAwMjkzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxuICAgICAgICAgICAgaWQ6ICc3NDAyNTA2JyxcbiAgICAgICAgICAgIG5hbWU6XG4gICAgICAgICAgICAgICAgJ01ldGhvZHMgb2YgbWFraW5nIHRoaW4gZmlsbSB0cmFuc2lzdG9ycyBjb21wcmlzaW5nIHppbmMtb3hpZGUtYmFzZWQgc2VtaWNvbmR1Y3RvciBtYXRlcmlhbHMgYW5kIHRyYW5zaXN0b3JzIG1hZGUgdGhlcmVieScsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyNTgsXG4gICAgICAgICAgICB4OiAyMDUuMDI0NzU2Njc0NDc3NzQsXG4gICAgICAgICAgICB5OiAxODUuNjc4NzgwNjY0NDMwMzhcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXG4gICAgICAgICAgICBpZDogJzc0MDQ1MDgnLFxuICAgICAgICAgICAgbmFtZTogJ1N1cmdpY2FsIHN0YXBsaW5nIGFuZCBjdXR0aW5nIGRldmljZScsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE1MTcsXG4gICAgICAgICAgICB4OiAxNDIuODUzNDg4NjE3MzIzNyxcbiAgICAgICAgICAgIHk6IDEuMzMyNTg4NTI4MTc0ODU1M1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNzQxMTIwOScsXG4gICAgICAgICAgICBuYW1lOiAnRmllbGQtZWZmZWN0IHRyYW5zaXN0b3IgYW5kIG1ldGhvZCBmb3IgbWFudWZhY3R1cmluZyB0aGUgc2FtZScsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyNTUsXG4gICAgICAgICAgICB4OiA5OC40NjIwNzIyMTE4MzUyOCxcbiAgICAgICAgICAgIHk6IDEyMy4wMzA4NDc3NTM3MDI3OVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNzQ1MzA2NScsXG4gICAgICAgICAgICBuYW1lOiAnU2Vuc29yIGFuZCBpbWFnZSBwaWNrdXAgZGV2aWNlJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzIzMCxcbiAgICAgICAgICAgIHg6IC0wLjE2NTczNzQzOTQyNjcxODU0LFxuICAgICAgICAgICAgeTogMTQxLjI4OTIyOTM1Mjk5MDIyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxuICAgICAgICAgICAgaWQ6ICc3NDUzMDg3JyxcbiAgICAgICAgICAgIG5hbWU6XG4gICAgICAgICAgICAgICAgJ1RoaW4tZmlsbSB0cmFuc2lzdG9yIGFuZCB0aGluLWZpbG0gZGlvZGUgaGF2aW5nIGFtb3JwaG91cy1veGlkZSBzZW1pY29uZHVjdG9yIGxheWVyJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzI0MixcbiAgICAgICAgICAgIHg6IDY0LjkyNjE5OTA4MjcyMjIyLFxuICAgICAgICAgICAgeTogMTgxLjg0NTkzNjY1MDkwNDQzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxuICAgICAgICAgICAgaWQ6ICc3NDYyODYyJyxcbiAgICAgICAgICAgIG5hbWU6ICdUcmFuc2lzdG9yIHVzaW5nIGFuIGlzb3ZhbGVudCBzZW1pY29uZHVjdG9yIG94aWRlIGFzIHRoZSBhY3RpdmUgY2hhbm5lbCBsYXllcicsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyNDQsXG4gICAgICAgICAgICB4OiAtNjkuNjE2NzkxNDI4NDgyNTEsXG4gICAgICAgICAgICB5OiAtMTcuOTUxNDMxNzY2NzExOTI0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxuICAgICAgICAgICAgaWQ6ICc3NDY0ODQ2JyxcbiAgICAgICAgICAgIG5hbWU6ICdTdXJnaWNhbCBpbnN0cnVtZW50IGhhdmluZyBhIHJlbW92YWJsZSBiYXR0ZXJ5JyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI4NyxcbiAgICAgICAgICAgIHg6IDE4MS44NDE5NDk1NTk5MTY4NixcbiAgICAgICAgICAgIHk6IC02LjEzMDM1NjY0NDU0MTc1OVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNzQ2ODMwNCcsXG4gICAgICAgICAgICBuYW1lOiAnTWV0aG9kIG9mIGZhYnJpY2F0aW5nIG94aWRlIHNlbWljb25kdWN0b3IgZGV2aWNlJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzI0MCxcbiAgICAgICAgICAgIHg6IDQzLjE0NDQ3NDIyODc2NDk5LFxuICAgICAgICAgICAgeTogODQuMzA4NTc0NDk4ODM5MDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXG4gICAgICAgICAgICBpZDogJzc1MDEyOTMnLFxuICAgICAgICAgICAgbmFtZTpcbiAgICAgICAgICAgICAgICAnU2VtaWNvbmR1Y3RvciBkZXZpY2UgaW4gd2hpY2ggemluYyBveGlkZSBpcyB1c2VkIGFzIGEgc2VtaWNvbmR1Y3RvciBtYXRlcmlhbCBhbmQgbWV0aG9kIGZvciBtYW51ZmFjdHVyaW5nIHRoZSBzZW1pY29uZHVjdG9yIGRldmljZScsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyMTYsXG4gICAgICAgICAgICB4OiAxMDAuNzU5ODQ0OTU2MTk3NjMsXG4gICAgICAgICAgICB5OiAyNjMuOTM5MjgxMTc3NjUzODdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXG4gICAgICAgICAgICBpZDogJzc1MDY3OTEnLFxuICAgICAgICAgICAgbmFtZTpcbiAgICAgICAgICAgICAgICAnU3VyZ2ljYWwgc3RhcGxpbmcgaW5zdHJ1bWVudCB3aXRoIG1lY2hhbmljYWwgbWVjaGFuaXNtIGZvciBsaW1pdGluZyBtYXhpbXVtIHRpc3N1ZSBjb21wcmVzc2lvbicsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNTcsXG4gICAgICAgICAgICB4OiAxNjIuODk5NDM3NDkzODM4MyxcbiAgICAgICAgICAgIHk6IC0xMy41MDc2NjQzNjQ2MTEyNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNzYyMDY1NScsXG4gICAgICAgICAgICBuYW1lOlxuICAgICAgICAgICAgICAgICdNZXRob2QsIGRldmljZSBhbmQgY29tcHV0ZXIgcHJvZ3JhbSBwcm9kdWN0IGZvciBpZGVudGlmeWluZyB2aXNpdG9ycyBvZiB3ZWJzaXRlcycsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNDMsXG4gICAgICAgICAgICB4OiAyNzMuNzQ1MzI1NzA1ODQ3MSxcbiAgICAgICAgICAgIHk6IC0xMzQuMTE5Njk3MTY4MDY3ODNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXG4gICAgICAgICAgICBpZDogJzc2MzI5ODUnLFxuICAgICAgICAgICAgbmFtZTogJ1NveWJlYW4gZXZlbnQgTU9OODk3ODggYW5kIG1ldGhvZHMgZm9yIGRldGVjdGlvbiB0aGVyZW9mJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTQ3NyxcbiAgICAgICAgICAgIHg6IDI1LjE1NjQxMjczMTEzMDk5NSxcbiAgICAgICAgICAgIHk6IDIzMi42MzgzNzQ1MzYzMTY1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxuICAgICAgICAgICAgaWQ6ICc3NjYzNjA3JyxcbiAgICAgICAgICAgIG5hbWU6ICdNdWx0aXBvaW50IHRvdWNoc2NyZWVuJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMjIxNyxcbiAgICAgICAgICAgIHg6IDE0OC4zMTcyOTA3NTcxNDQxMixcbiAgICAgICAgICAgIHk6IC0yNTIuMTIwNTQxMTcyOTU2MlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcbiAgICAgICAgICAgIGlkOiAnNzY3NDY1MCcsXG4gICAgICAgICAgICBuYW1lOiAnU2VtaWNvbmR1Y3RvciBkZXZpY2UgYW5kIG1hbnVmYWN0dXJpbmcgbWV0aG9kIHRoZXJlb2YnLFxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzNDM5LFxuICAgICAgICAgICAgeDogMjY1LjIwNzc1MjczNTExODg1LFxuICAgICAgICAgICAgeTogOTcuMDg3NTMxNzU2NDk4NzlcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXG4gICAgICAgICAgICBpZDogJzc3MzI4MTknLFxuICAgICAgICAgICAgbmFtZTogJ1NlbWljb25kdWN0b3IgZGV2aWNlIGFuZCBtYW51ZmFjdHVyaW5nIG1ldGhvZCB0aGVyZW9mJyxcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzI4OCxcbiAgICAgICAgICAgIHg6IDI0MS4yNzQzMjQ3NTY5NjE0NSxcbiAgICAgICAgICAgIHk6IDkyLjU3OTE3MTU5NjYxNTk1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxuICAgICAgICAgICAgaWQ6ICc4MDUzMTg0JyxcbiAgICAgICAgICAgIG5hbWU6ICdTb3liZWFuIGV2ZW50IE1PTjg5Nzg4IGFuZCBtZXRob2RzIGZvciBkZXRlY3Rpb24gdGhlcmVvZicsXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNDksXG4gICAgICAgICAgICB4OiAxMi43NDE3MzkyNzQ1MTk4NixcbiAgICAgICAgICAgIHk6IDIyMy4zMzA1MDk0Njg1Mzg1NFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc0MDgyNjAyLTInLFxuICAgICAgICAgICAgbmFtZTogJ0FkYW0gSGVsbGVyJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI3OCxcbiAgICAgICAgICAgIHg6IC03OC45NzkxODM2Nzg3ODM5NSxcbiAgICAgICAgICAgIHk6IDE3NS44MzQ1ODU1MTk0NTY5N1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc2NTUxMjc2LTExJyxcbiAgICAgICAgICAgIG5hbWU6ICdBZHJpYW4gR3V0JyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE0LFxuICAgICAgICAgICAgeDogLTEyNi40OTE2Mzg5Njg4MjA4MixcbiAgICAgICAgICAgIHk6IDc3LjA1MzkyNTQyODk0NDM3XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzY1NTEyNzYtMycsXG4gICAgICAgICAgICBuYW1lOiAnQWxhbiBIYXViYWNoJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE1LFxuICAgICAgICAgICAgeDogLTEzMy41NDQ4MDYxODUxNzU1NixcbiAgICAgICAgICAgIHk6IDEzLjczNjQ0MzM3OTU0MjQzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzY3MzIwOTUtMScsXG4gICAgICAgICAgICBuYW1lOiAnQWxleCBXYXJzaGF2c2t5JyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDM4LFxuICAgICAgICAgICAgeDogLTQxLjQzMDA2MDkxMDE0NjgxLFxuICAgICAgICAgICAgeTogLTExNS42OTQ2ODEzNzA2NDgxN1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc0MDgyMDk3LTEnLFxuICAgICAgICAgICAgbmFtZTogJ0FsZnJlZCBFLiBNYW5uJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDczLFxuICAgICAgICAgICAgeDogLTE2Ni4yNTEyNzgyMzQxNzY4OCxcbiAgICAgICAgICAgIHk6IDY0LjIxNDI0NTU2NjIzMzM5XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzc0MDI1MDYtMicsXG4gICAgICAgICAgICBuYW1lOiAnQW5kcmVhIEMuIFNjdWRlcmknLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMixcbiAgICAgICAgICAgIHg6IDIzMi4wMjEwMTM1NjQ5NDQsXG4gICAgICAgICAgICB5OiAyMDEuNTQzNjA1NTMyMTQ1NTNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNjI5NTUzMC0xJyxcbiAgICAgICAgICAgIG5hbWU6ICdBbmRyZXcgTS4gUml0Y2hpZScsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxuICAgICAgICAgICAgeDogLTE4MC4xMzI3MDEwOTM4MDg4MyxcbiAgICAgICAgICAgIHk6IC0xNzUuODkzMzU4NzUwMzkyODVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNTk0NDc5MS0xJyxcbiAgICAgICAgICAgIG5hbWU6ICdBbmRyZXcgVy4gU2NoZXJwYmllcicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4LFxuICAgICAgICAgICAgeDogODkuMDM1OTY3ODg3MDIyNzEsXG4gICAgICAgICAgICB5OiA3My40MTk2NjYwMTU2MjA1OFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc2NjY1NjQ4LTQnLFxuICAgICAgICAgICAgbmFtZTogJ0FuZHJ6ZWogUC4gTWF6dXInLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcbiAgICAgICAgICAgIHg6IC0xNy43NTk1NzczODEzMzI2OSxcbiAgICAgICAgICAgIHk6IC05MC4wNDMyNzg4NDE0MTEzOFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc2NTc3NzI2LTQnLFxuICAgICAgICAgICAgbmFtZTogJ0FuaWwgSy4gQW5uYWRhdGEnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTksXG4gICAgICAgICAgICB4OiAtOTAuMjcyMzc3MjY3NTg1ODEsXG4gICAgICAgICAgICB5OiAtMTQyLjExOTgxNTUzMTI3ODRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNjMzNjEzNy0zJyxcbiAgICAgICAgICAgIG5hbWU6ICdBbmlsIE11a3VuZGFuJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI0LFxuICAgICAgICAgICAgeDogNDQuOTc1NzAwMDM4ODIwNTksXG4gICAgICAgICAgICB5OiAtMTczLjE5MTI2MzA1MjE2MzVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNjgyOTY1NS0zJyxcbiAgICAgICAgICAgIG5hbWU6ICdBbnVwYW0gU2luZ2hhbCcsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMixcbiAgICAgICAgICAgIHg6IDY4LjAzMzQxNDk3MDgwODA4LFxuICAgICAgICAgICAgeTogLTE1OS42MTY0MDkwMTgzMDMxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzUyNzYyNjItMicsXG4gICAgICAgICAgICBuYW1lOiAnQXJ0aHVyIEwuIEpvaG5zb24nLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogOSxcbiAgICAgICAgICAgIHg6IDE4NS41MDk1NjY0MzUyMjI4LFxuICAgICAgICAgICAgeTogLTIyOC44NDE5OTE1ODk4NDA1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzcwODI4MzItNCcsXG4gICAgICAgICAgICBuYW1lOiAnQXlhbm9yaSBFbmRvJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUsXG4gICAgICAgICAgICB4OiAxMTYuMDkyNjE1NzMwMTA5NTEsXG4gICAgICAgICAgICB5OiAxNDkuMTcxNzYwODE4NzU1NzNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNjM3MDU4NC0xJyxcbiAgICAgICAgICAgIG5hbWU6ICdBemVyIEJlc3RhdnJvcycsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4LFxuICAgICAgICAgICAgeDogLTI0MC40MTI5MjQxNTE5NDA4NyxcbiAgICAgICAgICAgIHk6IDE5Ny40MDIwMTA3Mjk4NDYzOFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc1NzIyOTk3LTInLFxuICAgICAgICAgICAgbmFtZTogJ0JlaHJhZCBBcmlhJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDc1LFxuICAgICAgICAgICAgeDogLTc2Ljg4NjM5NTc5ODk5MjY4LFxuICAgICAgICAgICAgeTogMTQwLjU5NzQzNDgwMjg1MTQ0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzQ5NzIyMjQtMScsXG4gICAgICAgICAgICBuYW1lOiAnQmVubmllIFRob21wc29uJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQ2LFxuICAgICAgICAgICAgeDogMTI5LjgwNzM1MDUyMzg5ODEyLFxuICAgICAgICAgICAgeTogLTQuNDgxOTcyNTU5ODM5OTgzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzc2MjA2NTUtMicsXG4gICAgICAgICAgICBuYW1lOiAnQmrDtnJuIFNwZXJsaW5nJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXG4gICAgICAgICAgICB4OiAyNjUuNjk4MDI0NjYwMjEzNDMsXG4gICAgICAgICAgICB5OiAtMTYzLjE3NDg3NTkyNjgyNDdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNjU1MTI3Ni0xMicsXG4gICAgICAgICAgICBuYW1lOiAnQm9iIE11cnRmZWxkdCcsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNCxcbiAgICAgICAgICAgIHg6IC0xMDQuNTc2MDI2NDE2MDUwMjMsXG4gICAgICAgICAgICB5OiA0My4yMTkyOTM4NjAxNzQ5MVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc2ODA5NjUzLTknLFxuICAgICAgICAgICAgbmFtZTogJ0JyYWQgVC4gSGl0ZScsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0LFxuICAgICAgICAgICAgeDogLTE3OC43NDA2OTQ0Mjk1OTcsXG4gICAgICAgICAgICB5OiAxMTQuNTY0MzAxMDcxMDAzMTFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNjY2NTY0OC01JyxcbiAgICAgICAgICAgIG5hbWU6ICdCcmlhbiBHcm92ZXMnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcbiAgICAgICAgICAgIHg6IC00LjA2MzcwMzcyNzU5MzU1OSxcbiAgICAgICAgICAgIHk6IC05My4yNDY2NjAyMTYxNTE3N1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc3MDAwODE4LTMnLFxuICAgICAgICAgICAgbmFtZTogJ0JyaWFuIEouIEhlbW1lbGdhcm4nLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMixcbiAgICAgICAgICAgIHg6IDI1MS44NzgyNTI3MTY5MjIwOCxcbiAgICAgICAgICAgIHk6IDI4LjI4OTgwMzE5NTI2MDA4XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzY2NTg1NzctMScsXG4gICAgICAgICAgICBuYW1lOiAnQnJpYW4gUS4gSHVwcGknLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogOTQsXG4gICAgICAgICAgICB4OiAxMjMuMTk2MzE5ODc4MzUyNTgsXG4gICAgICAgICAgICB5OiAtMjY5LjU1NDk1NTI3NzcxMTFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNTQ2NTg5NS0xJyxcbiAgICAgICAgICAgIG5hbWU6ICdCcnlhbiBELiBLbm9kZWwnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTQ3LFxuICAgICAgICAgICAgeDogMjQ5LjI3MTU5MzUyNTA5Njk2LFxuICAgICAgICAgICAgeTogMTQ5Ljg5NDIyNjk2NTM0NDRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNTk0ODAwNi0xJyxcbiAgICAgICAgICAgIG5hbWU6ICdDYXJsYSBNLiBNYW5uJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMwLFxuICAgICAgICAgICAgeDogLTE0OC40MTE1MzQ3Njk4NzgwNSxcbiAgICAgICAgICAgIHk6IDI2OC4yMTAyMzY4NTMzNzAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzY1NTgzNTEtOCcsXG4gICAgICAgICAgICBuYW1lOiAnQ2FyeSBELiBUYWxib3QnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogNTEsXG4gICAgICAgICAgICB4OiAtMjQyLjEyMDEzNzM5NjAwODUsXG4gICAgICAgICAgICB5OiAxLjA4MDkxMDU4NjE3MjI0ODNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNTE3NjY0NC0xJyxcbiAgICAgICAgICAgIG5hbWU6ICdDaGFkIFNyaXNhdGhhcGF0JyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI4LFxuICAgICAgICAgICAgeDogLTEwNi41OTc4MDMyNTY0NTI4OSxcbiAgICAgICAgICAgIHk6IDU2LjcyNDE1OTk2MjQ3MzYzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzY3MzIwOTUtMicsXG4gICAgICAgICAgICBuYW1lOiAnQ2hhbmRyYWthbnQgUmFta3Jpc2huYSBCaGF2c2FyJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDcsXG4gICAgICAgICAgICB4OiAtNTYuNDQ2OTI0MjM2MDI4NTgsXG4gICAgICAgICAgICB5OiAtMTE0LjM4OTM2MzU1OTUyNTIxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzY4MDQzMzAtNScsXG4gICAgICAgICAgICBuYW1lOiAnQ2hyaXMgSGF2ZW4nLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogOCxcbiAgICAgICAgICAgIHg6IDc2LjU4OTk2OTI2NjA3MDI3LFxuICAgICAgICAgICAgeTogLTIzMy41OTM3NjQyMTc3NDk2OFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc1ODU5OTE2LTMnLFxuICAgICAgICAgICAgbmFtZTogJ0NocmlzdG9waGVyIEEuIEp1bGlhbicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzNSxcbiAgICAgICAgICAgIHg6IDMyLjQ5NTI5MjAyOTE1NTI2LFxuICAgICAgICAgICAgeTogMzA3Ljg1NTg3MTU3MzI5OTE3XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzU5NjM5NTMtMycsXG4gICAgICAgICAgICBuYW1lOiAnQ2hyaXN0b3BoZXIgU3RhdWJlcicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxuICAgICAgICAgICAgeDogMzguODc2NDk5MTc3MzA4OTM2LFxuICAgICAgICAgICAgeTogLTI1NC42ODUzMzcxNDg1NDA3XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzY1OTM4MzQtMicsXG4gICAgICAgICAgICBuYW1lOiAnQ2h1bm9uZyBRaXUnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzAsXG4gICAgICAgICAgICB4OiAtMjk5LjUxMzU3MDczMjc1NzY3LFxuICAgICAgICAgICAgeTogMjguNjkzNTg2MTMzMTc5NTA1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzU3MDMzNTctMycsXG4gICAgICAgICAgICBuYW1lOiAnQ2luZHkgWGluZyBRaXUnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzcsXG4gICAgICAgICAgICB4OiAtMzA3LjYwNDk0NjAyMDg4NDk0LFxuICAgICAgICAgICAgeTogLTM2LjA5OTc0Mjk3NjkyNTU0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzUzODIyMzItMScsXG4gICAgICAgICAgICBuYW1lOiAnQ2xpZmYgSGFndWUnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjUsXG4gICAgICAgICAgICB4OiAtMTU4Ljk0ODg5MTcwNzkyMjE3LFxuICAgICAgICAgICAgeTogNzUuNTczNjYxMjU5NjcwOTFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNjUzNTkwOS0xJyxcbiAgICAgICAgICAgIG5hbWU6ICdEYXZpZCBCcmFkbGV5IFJ1c3QnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTAsXG4gICAgICAgICAgICB4OiAyOTMuODkzNzgyNjY4ODEyMTUsXG4gICAgICAgICAgICB5OiAxMDguMjQwNDU1OTI2OTA0NDlcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNTcxMzkxMS0xJyxcbiAgICAgICAgICAgIG5hbWU6ICdEYXZpZCBDLiBSYWNlbmV0JyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDExNyxcbiAgICAgICAgICAgIHg6IC03MC43MzE5OTk5NjcyOTA3NixcbiAgICAgICAgICAgIHk6IDI4My42ODg0NTAyMTMyNjYxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzU1MTI0MjYtMScsXG4gICAgICAgICAgICBuYW1lOiAnRGF2aWQgSC4gTGV2eScsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA5NyxcbiAgICAgICAgICAgIHg6IDE3NS42MjI3MzM0NjgyOTU5MyxcbiAgICAgICAgICAgIHk6IDE5NS4wMzM0ODA5MjA0Mjc4NVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc1NzU1NzM3LTMnLFxuICAgICAgICAgICAgbmFtZTogJ0RhdmlkIEthcmwgTGVlIFBldGVyc29uJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEwLFxuICAgICAgICAgICAgeDogLTExNi4xOTk5NzU5MzkyMDY4MSxcbiAgICAgICAgICAgIHk6IDIzNS40MjMxNzQ2Nzc2ODcwNlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc2MDA0Mjc2LTEzJyxcbiAgICAgICAgICAgIG5hbWU6ICdEYXZpZCBMLiBSYWJiZXJzJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDksXG4gICAgICAgICAgICB4OiA5MC4wNTQ1NTEzODgzOTQ2NyxcbiAgICAgICAgICAgIHk6IC0xOTkuNzY3MjQzMDI2NjA5OTJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNDEyNzIyNy0xJyxcbiAgICAgICAgICAgIG5hbWU6ICdEYXZpZCBULiBHcmVlbicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyNTMsXG4gICAgICAgICAgICB4OiAzMjAuMDUzODk1NjQ5MzQ3NCxcbiAgICAgICAgICAgIHk6IC0yLjU2NzQ0MDY5ODM3ODM3NzdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNTMyOTY1NS0xJyxcbiAgICAgICAgICAgIG5hbWU6ICdEZWFuIEwuIEdhcm5lcicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA5LFxuICAgICAgICAgICAgeDogODIuOTg2ODM3ODY2NTg0NCxcbiAgICAgICAgICAgIHk6IC03NS4wMTQ3MjE1NTAwMjEzOFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc2NTUxMjc2LTknLFxuICAgICAgICAgICAgbmFtZTogJ0RlYm9yYWggUnVwcGVydCcsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMixcbiAgICAgICAgICAgIHg6IC0xMTguMjY1NTI5Mzc0NTE1MDcsXG4gICAgICAgICAgICB5OiAyMC4xMzE0ODExODkxMDE2OTVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNjU1MTI3Ni0xMCcsXG4gICAgICAgICAgICBuYW1lOiAnRGVubmlzIFAuIEJpc2hvcCcsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNixcbiAgICAgICAgICAgIHg6IC0xMTMuMDQxMzg0MzI2NTk5NDMsXG4gICAgICAgICAgICB5OiA2OC41MzQ3OTE4MTU2MjI5XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzU5MTgxNTktMicsXG4gICAgICAgICAgICBuYW1lOiAnRGVuemlsIFdpbGxvdWdoYnkgQ2hlc25leScsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4LFxuICAgICAgICAgICAgeDogLTIyMS4zNDM4MTYzMTk3NzMyLFxuICAgICAgICAgICAgeTogLTE4MC4zMTI1ODg2ODQzNTcyNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc2OTEyODM5LTInLFxuICAgICAgICAgICAgbmFtZTogJ0RlcmVrIERlZSBEZXZpbGxlJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEyNyxcbiAgICAgICAgICAgIHg6IDEyNC4wMDU2MjM2OTcxNDYwOSxcbiAgICAgICAgICAgIHk6IDMwLjMwMzUxODU3MzIxMzMyOFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc2NzE4MzYxLTgnLFxuICAgICAgICAgICAgbmFtZTogJ0RvbWVuaWMgSi4gTGFSb3NhJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDcsXG4gICAgICAgICAgICB4OiAtMTg1LjE2MzQwMjcxNTE1ODgsXG4gICAgICAgICAgICB5OiAxOTEuNDk4ODA1NTgwOTA4OTZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNjg1MDk0OS0xJyxcbiAgICAgICAgICAgIG5hbWU6ICdEb3VnIFdhcm5lcicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxuICAgICAgICAgICAgeDogMTk3LjQxMDk1ODY2MjQ4ODgsXG4gICAgICAgICAgICB5OiAtMTQxLjUxMTM3NDI1OTAxMjc3XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzY1MzA5MzItMicsXG4gICAgICAgICAgICBuYW1lOiAnRG91Z2xhcyBCLiBIb2ZmbWFuJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQxLFxuICAgICAgICAgICAgeDogMTEyLjY1OTAyMjAyNjc4ODg2LFxuICAgICAgICAgICAgeTogLTQxLjk1MTc5NDE5MzQwODAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzY0MzQ1NTAtMScsXG4gICAgICAgICAgICBuYW1lOiAnRG91Z2xhcyBLLiBXYXJuZXInLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTEsXG4gICAgICAgICAgICB4OiAtMjQwLjIxMzA1MTgwMzE0NyxcbiAgICAgICAgICAgIHk6IC01OC4zODUzNDUyMjE3NjA0NFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc2ODUwODk1LTUnLFxuICAgICAgICAgICAgbmFtZTogJ0R1YW5lIFdhbmRsZXNzJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXG4gICAgICAgICAgICB4OiAtMTQxLjc3MTIwMzcwOTU3NTA1LFxuICAgICAgICAgICAgeTogLTIzNS44NDk0NTg4ODU1NTMzNlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc3NjMyOTg1LTQnLFxuICAgICAgICAgICAgbmFtZTogJ0VsbGVuIERpY2tpbnNvbicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1LFxuICAgICAgICAgICAgeDogLTYuNjUwNzEyOTUzNjU5MjMyLFxuICAgICAgICAgICAgeTogMjQzLjg1OTIyNDk0OTc3OTk2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzU2MTY1MzItMycsXG4gICAgICAgICAgICBuYW1lOiAnRXBocmFpbSBIZWxsZXInLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTI1LFxuICAgICAgICAgICAgeDogLTEzNi42NjI3NjkzMTc4Njc4OCxcbiAgICAgICAgICAgIHk6IDE0OC41MDgzMzI4NzMwNjg0NFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc2NzI0Mzk5LTEnLFxuICAgICAgICAgICAgbmFtZTogJ0VybnN0IEthdGNob3VyJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIsXG4gICAgICAgICAgICB4OiAyMC40NjA3MDUxNzc4MTY4MTYsXG4gICAgICAgICAgICB5OiAtMTM4LjYzMTYxNzQzNDYwNDdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNDQwMzY4Ny0yJyxcbiAgICAgICAgICAgIG5hbWU6ICdFdWdlbmUgTC4gVGltcGVybWFuJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDY5LFxuICAgICAgICAgICAgeDogMTY3LjgxNDA1OTc2MjQwMzIyLFxuICAgICAgICAgICAgeTogMjMuNjUzNzk0MzQ4NjcwNTE2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzY5MDUwNTctMicsXG4gICAgICAgICAgICBuYW1lOiAnRnJlZGVyaWNrIEUuIFNoZWx0b24sIElWJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEwNDcsXG4gICAgICAgICAgICB4OiAyMDYuOTQwNTU2MDExNjE5NTgsXG4gICAgICAgICAgICB5OiAtMzMuNjM3OTQ0MDE5MjIxMDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNTA0MTA4Ni00JyxcbiAgICAgICAgICAgIG5hbWU6ICdGcmVkcmljIEMuIENvbG1hbicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMTksXG4gICAgICAgICAgICB4OiAtOTMuMDcxNDE1MjIyMzM1NjUsXG4gICAgICAgICAgICB5OiAxODcuNjEzODI3OTEyMTQ3NzRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNjQzMzkyMS0yJyxcbiAgICAgICAgICAgIG5hbWU6ICdHLiBWaWN0b3IgVHJleXonLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTksXG4gICAgICAgICAgICB4OiAtMjUwLjIxNDE5MjIwODcyNDksXG4gICAgICAgICAgICB5OiAxMTcuNzA5MzYxODgxMjg3ODlcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNjU1ODM1MS0xJyxcbiAgICAgICAgICAgIG5hbWU6ICdHYXJyeSBNLiBTdGVpbCcsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMSxcbiAgICAgICAgICAgIHg6IC0xOTcuNTUwMzM4NDM3MDcwODgsXG4gICAgICAgICAgICB5OiAtMTQuOTY5MDU0MTU3MjU1MjYxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzU3MDczNjktMicsXG4gICAgICAgICAgICBuYW1lOiAnR2VvZmZyZXkgQy4gSHVlaWwnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzcsXG4gICAgICAgICAgICB4OiA4OC43NzczMjEyOTk3NTk2OCxcbiAgICAgICAgICAgIHk6IC01OS4zNDI5NDQ2OTA5MDQzMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc2ODI2NTgyLTInLFxuICAgICAgICAgICAgbmFtZTogJ0dlb3JnZSBFcmljc3NvbicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxuICAgICAgICAgICAgeDogLTE1OC4wMjA3MDg1NTI0OTkzNyxcbiAgICAgICAgICAgIHk6IC0xMTEuNDEzNTU2NjYwNzU0MTNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnUkUyODkzMi0yJyxcbiAgICAgICAgICAgIG5hbWU6ICdHcmFoYW0gVy4gQnJ5YW4nLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTcsXG4gICAgICAgICAgICB4OiAzMDIuMTUxOTcxNzQ5ODE5OTUsXG4gICAgICAgICAgICB5OiAyLjk3MTE1MzMwMTIxNzE4NlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc2MTQ0Njc5LTEnLFxuICAgICAgICAgICAgbmFtZTogJ0dyZWdvcnkgUyBIZXJtYW4nLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogNzAsXG4gICAgICAgICAgICB4OiAtMTA3LjA4NzIxMjEyNDM4MjUzLFxuICAgICAgICAgICAgeTogLTIyLjk5OTMyNTk4MDQ3NTM0NFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc2NjAxMDg3LTInLFxuICAgICAgICAgICAgbmFtZTogJ0d1YW5naG9uZyBZYW5nJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDgsXG4gICAgICAgICAgICB4OiAxODEuOTQwMDg2ODA4MDIyMSxcbiAgICAgICAgICAgIHk6IDc3LjY2Nzc4NjIzMzgxMTlcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNjU3NzcyNi0zJyxcbiAgICAgICAgICAgIG5hbWU6ICdIZW5yeSBELiBKYXknLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogNyxcbiAgICAgICAgICAgIHg6IC0xMjIuMDIzMjA0NzY5ODI0OTksXG4gICAgICAgICAgICB5OiAtMTU3Ljk1NTY2NzMyNDE4Mjg1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzQyODMwMjQtMScsXG4gICAgICAgICAgICBuYW1lOiAnSGVucnkgUi4gU2llbmtpZXdpY3onLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzUsXG4gICAgICAgICAgICB4OiAyNzQuNjA0MTU2MDM3MTI3MjcsXG4gICAgICAgICAgICB5OiAtMjcuMjczMzA5NjI1ODQ1NjdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNzMyMzM1Ni01JyxcbiAgICAgICAgICAgIG5hbWU6ICdIaWRlbm9yaSBIaXJhbWF0c3UnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogNCxcbiAgICAgICAgICAgIHg6IC0zNi42MDU0MjQyNTE5NTA0NDYsXG4gICAgICAgICAgICB5OiAxMTUuODUwMDg5MzE5OTg4XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzQ3MDMwMTktMicsXG4gICAgICAgICAgICBuYW1lOiAnSGlkZW8gSG9zb25vJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDY4LFxuICAgICAgICAgICAgeDogLTkuODU5NDU3MDk0MjM3MzMzLFxuICAgICAgICAgICAgeTogMTEyLjE4Mzc0Njk2MzQ4OTEzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzQyNTMwNjEtMycsXG4gICAgICAgICAgICBuYW1lOiAnSGlkZW8gT2hubycsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1NSxcbiAgICAgICAgICAgIHg6IDE2LjQyNDM5NzgzNTkxMzk5MyxcbiAgICAgICAgICAgIHk6IDEuNTk4MTI5MDMyMTE0MTE2MlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc1MjcyMDY5LTYnLFxuICAgICAgICAgICAgbmFtZTogJ0hpcm9taWNoaSBPdGEnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTksXG4gICAgICAgICAgICB4OiAtNDIuOTMwMjMxMjMzMjk5NTY1LFxuICAgICAgICAgICAgeTogNzIuMDMwODE1NzgyOTYxMThcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNTA0MTIwMC0xJyxcbiAgICAgICAgICAgIG5hbWU6ICdIaXJvbWl0c3UgSXNoaWknLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDAsXG4gICAgICAgICAgICB4OiAtMjQwLjQ1MDk2MjkzMzkyOTYsXG4gICAgICAgICAgICB5OiAtMTUwLjI3NjAxMjY1OTg4MzUyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzY4NjMzNjMtMScsXG4gICAgICAgICAgICBuYW1lOiAnSGlzYXRvIFlhYnV0YScsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0MCxcbiAgICAgICAgICAgIHg6IDYwLjQzNzIxNDc2NjU0NTUsXG4gICAgICAgICAgICB5OiA1Ni40OTY2NDkyMTg4MTM4N1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc3Mzg1MjI0LTInLFxuICAgICAgICAgICAgbmFtZTogJ0hpdG9zaGkgSG9rYXJpJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXG4gICAgICAgICAgICB4OiAtMjQxLjgzMTAzMzM3OTk1MTEsXG4gICAgICAgICAgICB5OiAtMTMzLjU0MDQ5Nzc5Mjk1NDI4XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzUwNDEyMDAtNCcsXG4gICAgICAgICAgICBuYW1lOiAnSWt1aGlybyBZYW1hZ3VjaGknLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTAsXG4gICAgICAgICAgICB4OiAtMjI4Ljc4MDg2NzAxNzE5MTUzLFxuICAgICAgICAgICAgeTogLTE2Mi4zNjY3MTU4ODU2MDE3XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzQ5OTcyNjItMScsXG4gICAgICAgICAgICBuYW1lOiAnSWt1byBTYWtvbm8nLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogOSxcbiAgICAgICAgICAgIHg6IC0yMi40NTE1NTY2NTIzOTM5NDMsXG4gICAgICAgICAgICB5OiAtMzQuMDQ3NTAxNjg0MTgyMTFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNTA4MTQyMi0xJyxcbiAgICAgICAgICAgIG5hbWU6ICdJc2hpYW5nIFNoaWgnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjgsXG4gICAgICAgICAgICB4OiAtMjg2LjMyNzA3NzU5NDAzOTYsXG4gICAgICAgICAgICB5OiAtMjMuNzMzMTA1MTE5NDU4NDk3XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzYyODE4OTgtMicsXG4gICAgICAgICAgICBuYW1lOiAnSmFjcXVlbHluIEEuIE1hcnRpbm8nLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDMsXG4gICAgICAgICAgICB4OiAtNzcuNDA0MjY2NzQ2MzAyNTgsXG4gICAgICAgICAgICB5OiAyMzMuMTQzNjYyMDkzOTc0MDZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNjY2NTY0OC0zJyxcbiAgICAgICAgICAgIG5hbWU6ICdKYWktSmVpbiBZdScsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxuICAgICAgICAgICAgeDogLTMxLjg0MDA1Mjg2NDkyNjczLFxuICAgICAgICAgICAgeTogLTkxLjYyMzc1NzQ3MzY0MTE5XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzQ4MDk2OTctMScsXG4gICAgICAgICAgICBuYW1lOiAnSmFtZXMgRC4gQ2F1c2V5LCBJSUknLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTA4LFxuICAgICAgICAgICAgeDogLTE3OC4yNjUyMTYxMjA0MjIsXG4gICAgICAgICAgICB5OiA1MS43NTU2ODA5MzA3NDY2ODVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNDg2MzQyNS0yJyxcbiAgICAgICAgICAgIG5hbWU6ICdKYW1lcyBMLiBIZW5rZScsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyNSxcbiAgICAgICAgICAgIHg6IC0yMjkuODI2MzIzMjY2OTMxNDQsXG4gICAgICAgICAgICB5OiA4MS4xNDgzOTE4MzUwNDUxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzU1MzMyMzgtMScsXG4gICAgICAgICAgICBuYW1lOiAnSmFtZXMgU2F5JyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDExNSxcbiAgICAgICAgICAgIHg6IC0xMTAuMjY1MTQ2NTA1NTAzMTMsXG4gICAgICAgICAgICB5OiAxODkuNzM4NDE5MDcyNjEzNzRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNjcxMTU2NS0yJyxcbiAgICAgICAgICAgIG5hbWU6ICdKYXNvbiBab3NzJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE0LFxuICAgICAgICAgICAgeDogLTM2Ljc5NzYzNTgzMDQxMzM4LFxuICAgICAgICAgICAgeTogLTMwMy4zNjA2MjkzMTQwMDU3XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzY1NTEyNzYtOCcsXG4gICAgICAgICAgICBuYW1lOiAnSmF5IFlvbmVtb3RvJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI2LFxuICAgICAgICAgICAgeDogLTEwOC4zOTA2MDExNTA2NTY5NixcbiAgICAgICAgICAgIHk6IDMwLjY2NzUzMDk2NDk4NDgxN1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc1ODYzMzI2LTEnLFxuICAgICAgICAgICAgbmFtZTogJ0plZmZyZXkgRS4gTmF1c2UnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogNyxcbiAgICAgICAgICAgIHg6IC0zNC45NzQ2ODc4MjY1MTM5OSxcbiAgICAgICAgICAgIHk6IDIyNS41Mzc4MTI3NjY3MjQyN1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc0OTUxMjc4LTInLFxuICAgICAgICAgICAgbmFtZTogJ0plZmZyZXkgSS4gQ29oZW4nLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDUsXG4gICAgICAgICAgICB4OiAtMTA2LjY3NzI5MjU2MDAzNDIyLFxuICAgICAgICAgICAgeTogLTI3NS45NjY1NTc2NTE4MjEyM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc2MzkzNjA1LTEnLFxuICAgICAgICAgICAgbmFtZTogJ0plZmZyZXkgTG9vbWFucycsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0LFxuICAgICAgICAgICAgeDogLTEyLjA4OTUyMzI4MDg2MjE2NCxcbiAgICAgICAgICAgIHk6IC0xNDYuODcyOTU2ODkyNTA1NjRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNTI0MzYyMi0yJyxcbiAgICAgICAgICAgIG5hbWU6ICdKZWZmcmV5IE0uIEZpc2NoZXInLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjMsXG4gICAgICAgICAgICB4OiAtNjkuMTE1MTA1NzY0MDM2NjMsXG4gICAgICAgICAgICB5OiAtMTIxLjU5NTk2MjM4Mjc4OTExXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzU4OTc1NjMtNCcsXG4gICAgICAgICAgICBuYW1lOiAnSmVmZnJleSBTLiBTd2F5emUnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjM3LFxuICAgICAgICAgICAgeDogMTgyLjc1NzUyMTg3NzA3MTIsXG4gICAgICAgICAgICB5OiAtNDIuNjUyMjY0ODc1Mzk3OTI1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzc2MDg3NjEtNCcsXG4gICAgICAgICAgICBuYW1lOiAnSmVubmlmZXIgUmluZWhhcnQnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogOSxcbiAgICAgICAgICAgIHg6IDE0LjYwMzAzMzcxNzY0NDg3NyxcbiAgICAgICAgICAgIHk6IDI1OC4wMTY5MzgwNzk0MzA3NlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc3MzgwNjk2LTMnLFxuICAgICAgICAgICAgbmFtZTogJ0plcnJ5IFIuIE1vcmdhbicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxuICAgICAgICAgICAgeDogMjQwLjc3OTIzNTEyNTM5MTcyLFxuICAgICAgICAgICAgeTogMC43NTYxODU2NTUyMjI2MjVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNTcxNTQ1MC0xJyxcbiAgICAgICAgICAgIG5hbWU6ICdKZXNzZSBBbWJyb3NlJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE5LFxuICAgICAgICAgICAgeDogMzYuMTgwNDIzNTE0NTA4MjA2LFxuICAgICAgICAgICAgeTogLTI3MS4xMTgxNTE4OTE2NjY1N1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc2NzExNTY1LTMnLFxuICAgICAgICAgICAgbmFtZTogJ0ppYW4tSnVuZyBZaW5nJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE1LFxuICAgICAgICAgICAgeDogLTUyLjQwNTk0MzYyOTE2MDI3LFxuICAgICAgICAgICAgeTogLTI5OC42MjA5ODUyNDQ2NTc3XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzY1MTYyMjctNCcsXG4gICAgICAgICAgICBuYW1lOiAnSm9leSBDaGVuJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUwLFxuICAgICAgICAgICAgeDogLTE1NC41NDY2NzEzNjI5MDk5MyxcbiAgICAgICAgICAgIHk6IDIwOC45NTA3MjI4MDczNDMzN1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc2MjMzNjE3LTInLFxuICAgICAgICAgICAgbmFtZTogJ0pvaG4gQ29rZXInLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjksXG4gICAgICAgICAgICB4OiAtMTA3LjgxODkzODE1NjMyMTQ0LFxuICAgICAgICAgICAgeTogLTE3MC45MDc0Njc2MjMxNjU2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzQ1NjE0NDQtMScsXG4gICAgICAgICAgICBuYW1lOiAnSm9obiBILiBMaXZpbmdzdG9uJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMxLFxuICAgICAgICAgICAgeDogLTE1Mi44NTMwMDQ0NDU4Mzk1NixcbiAgICAgICAgICAgIHk6IDg1LjEwOTQwMDA4OTY0OTY3XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzUyMzcxNzgtMicsXG4gICAgICAgICAgICBuYW1lOiAnSm9obiBKLiBNYXN0cm90b3Rhcm8nLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogNzcsXG4gICAgICAgICAgICB4OiAtMjA1LjQ5NzM5NTkwOTU4NTMyLFxuICAgICAgICAgICAgeTogNTAuMzE0Nzc5NzA0ODQ4NjhcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNjQyNDg0Ny0zJyxcbiAgICAgICAgICAgIG5hbWU6ICdKb2huIEouIFNoaW4nLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogNixcbiAgICAgICAgICAgIHg6IC0xODUuMzc0NDYzNTU3MTAzODQsXG4gICAgICAgICAgICB5OiAtMy4yODcyMDI3MTA2MjM1ODk1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzU3MTM5MTEtMicsXG4gICAgICAgICAgICBuYW1lOiAnSm9obiBXLiBCZWFyZHNsZXknLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTEwLFxuICAgICAgICAgICAgeDogLTMzLjgxNDc1OTg4NjM4MjAyLFxuICAgICAgICAgICAgeTogMjYyLjg4MjY3MjExMTEzNzI1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzY2OTAzODctMScsXG4gICAgICAgICAgICBuYW1lOiAnSm9obiBaaW1tZXJtYW4nLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTYsXG4gICAgICAgICAgICB4OiAtMTAzLjg2NDM2NDI4NTAxLFxuICAgICAgICAgICAgeTogMjg3LjAzMjQxNTIwNzcwMzVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNjI5NTUzMC0yJyxcbiAgICAgICAgICAgIG5hbWU6ICdKb25hdGhhbiBCcmFkc2hhdycsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3LFxuICAgICAgICAgICAgeDogLTIxMS44NzE0MjYwOTEwNDc4LFxuICAgICAgICAgICAgeTogLTIyNC41MDkwNDc4NzQ0NTEyM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc2OTY0MzYzLTInLFxuICAgICAgICAgICAgbmFtZTogJ0pvc2VwaCBDaGFybGVzIEhldWlsJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXG4gICAgICAgICAgICB4OiAxNTcuODk0OTA5NjA5NzU0MjgsXG4gICAgICAgICAgICB5OiAtMTI2LjQ0NzgxODMxOTc1MDY0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzY4MDQzMzAtNCcsXG4gICAgICAgICAgICBuYW1lOiAnSm9zZXBoIEhhcmInLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTYsXG4gICAgICAgICAgICB4OiA2MS4xMjY2NDgyMjQ1ODU2NixcbiAgICAgICAgICAgIHk6IC0yNjguMTkwODgxNjYxMTg5OVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc3MTU0NDc3LTInLFxuICAgICAgICAgICAgbmFtZTogJ0pvc2h1YSBBLiBTdHJpY2tvbicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzMSxcbiAgICAgICAgICAgIHg6IDE0My42MDc3Mjc2NDU5OTksXG4gICAgICAgICAgICB5OiAtMjgxLjY2OTM2OTI2MTE0MlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc2NjY1NjQ4LTEnLFxuICAgICAgICAgICAgbmFtZTogJ0thcmVuIEJyb2RlcnNlbicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyLFxuICAgICAgICAgICAgeDogLTUyLjg4Nzc2MTYxNzQwNjc0NixcbiAgICAgICAgICAgIHk6IC0xMzUuMjUzMjQ2MDEyMTI3NDhcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNjkxNDE4Mi0xJyxcbiAgICAgICAgICAgIG5hbWU6ICdLYXRzdXRvc2hpIFRha2VkYScsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMixcbiAgICAgICAgICAgIHg6IC0zMDEuODk0MzM0ODc2OTExODQsXG4gICAgICAgICAgICB5OiAtNzAuNDMzMjQ2NTA4MDg5MDZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNTkyNTIyNC0xJyxcbiAgICAgICAgICAgIG5hbWU6ICdLYXp1a2kgS29iYXlhc2hpJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIyLFxuICAgICAgICAgICAgeDogLTQxLjkwMDY3NjkxODA5NjQxNixcbiAgICAgICAgICAgIHk6IDcuMzAxMzU4NTk2NjIyOTEyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzcwNjEwMTQtNCcsXG4gICAgICAgICAgICBuYW1lOiAnS2F6dXNoaWdlIFVlZGEnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogOCxcbiAgICAgICAgICAgIHg6IC0zNy42NjQ5NjM2MzQ0ODMyMyxcbiAgICAgICAgICAgIHk6IDU5LjYyNDc1NTY1NzM4Mjg2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzQzNTY0NTUtMycsXG4gICAgICAgICAgICBuYW1lOiAnS2Vpc2hpIFNhaXRvJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDYwLFxuICAgICAgICAgICAgeDogMTAuMjE5MTQwNjMzOTEwMDg1LFxuICAgICAgICAgICAgeTogMTE0LjYwNjExMDA4NDYwNTY3XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzYxNzU3NTItOScsXG4gICAgICAgICAgICBuYW1lOiAnS2VpdGggQS4gRnJpZWRtYW4nLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogNTYsXG4gICAgICAgICAgICB4OiAtNzIuNzY0NzgzOTk0MzI2OTIsXG4gICAgICAgICAgICB5OiAxNTcuOTYyODAyNDYwMTQ3MzRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnRDI2Mzk4Ny0xJyxcbiAgICAgICAgICAgIG5hbWU6ICdLZWl0aCBMLiBNaWxsaW1hbicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNDgsXG4gICAgICAgICAgICB4OiAyODUuMjcwNTUxNDYzMDk4MDYsXG4gICAgICAgICAgICB5OiAtNC4xNjE2MDc2OTk5NTI4NDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnRDMwNDIzNC0yJyxcbiAgICAgICAgICAgIG5hbWU6ICdLZWl0aCBSYXRjbGlmZicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3NixcbiAgICAgICAgICAgIHg6IDI5OC4yNTQzODY1NTY0NDU4NyxcbiAgICAgICAgICAgIHk6IC02Mi4wMzc3MzM5OTA3MzA2MTVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNjgzODM5Ny0zJyxcbiAgICAgICAgICAgIG5hbWU6ICdLZW5nbyBBa2ltb3RvJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMwMSxcbiAgICAgICAgICAgIHg6IDIzMy4zMDU5MTA4OTI4NDEyNCxcbiAgICAgICAgICAgIHk6IDExOC4xMjg2NTgxNDc0NDI4M1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc0MDcyMjM2LTEnLFxuICAgICAgICAgICAgbmFtZTogJ0tlbmppIE5vbXVyYScsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3MixcbiAgICAgICAgICAgIHg6IC0xOC40OTE1NzM2MjA3NDg0NTQsXG4gICAgICAgICAgICB5OiAxNjQuMzMxOTc0Mzg4MjA4NVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc0ODkwNjExLTMnLFxuICAgICAgICAgICAgbmFtZTogJ0tlbm5ldGggSC4gTW9sbGVuYXVlcicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMzksXG4gICAgICAgICAgICB4OiAxNzEuMTIxMzkwOTkxMjUyODQsXG4gICAgICAgICAgICB5OiAxNDkuODI3ODkzMjE4MzIwN1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc1NDA5NDk4LTQnLFxuICAgICAgICAgICAgbmFtZTogJ0tlbm5ldGggUy4gV2FsZXMnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzQsXG4gICAgICAgICAgICB4OiAxNTEuNjE1MDY1MDA0ODYzNjUsXG4gICAgICAgICAgICB5OiAtNjguMTcxNTMwMTA5Njk3NVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc2NTU4MzUxLTInLFxuICAgICAgICAgICAgbmFtZTogJ0tlcnN0aW4gUmVicmluJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDgsXG4gICAgICAgICAgICB4OiAtMjEzLjk5ODMyNjQ4MjE5ODkzLFxuICAgICAgICAgICAgeTogLTE4LjIxMDIwMzUwOTcwNjk1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzcwODMwNzUtMycsXG4gICAgICAgICAgICBuYW1lOiAnS2V2aW4gUi4gRG9sbCcsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzMyxcbiAgICAgICAgICAgIHg6IDE5NS4xNzE2MTg2MTI5NjQxMixcbiAgICAgICAgICAgIHk6IDIxLjgyNzU3MTkwNzE4Mjg2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzY4MjY3NDUtMycsXG4gICAgICAgICAgICBuYW1lOiAnS2V2aW4gUi4gTml4JyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUsXG4gICAgICAgICAgICB4OiAtMTEzLjUyMzE4MzQ5Njc5Nzg2LFxuICAgICAgICAgICAgeTogLTE4Ni42NTg1MDQ2NDA5Nzc2N1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc0NjgyNTk2LTInLFxuICAgICAgICAgICAgbmFtZTogJ0tldmluIFcuIFNtaXRoJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI0NSxcbiAgICAgICAgICAgIHg6IDE0Mi4wMTUxNzA1MjYxOTIyNCxcbiAgICAgICAgICAgIHk6IDM1LjMxNzEzMDMyMDQwMDE4XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzYzMzYxMzctMScsXG4gICAgICAgICAgICBuYW1lOiAnS2luZy1Id2EgTGVlJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDcsXG4gICAgICAgICAgICB4OiAyOS4xMzY0MTY4MjEzODk1NDUsXG4gICAgICAgICAgICB5OiAtMTUyLjgzODkyMjc5MTAwMTM1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzY1NTM1NjMtMycsXG4gICAgICAgICAgICBuYW1lOiAnS2xhdXMgVy4gU3Ryb2JlbCcsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxuICAgICAgICAgICAgeDogMTguNTAyMjY5ODAyODk2MTg3LFxuICAgICAgICAgICAgeTogLTI3Ny44NDIyOTExOTE2NDQ4NVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc1NzE1Njc1LTInLFxuICAgICAgICAgICAgbmFtZTogJ0tvcmV5IEtsaW5lJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDY3LFxuICAgICAgICAgICAgeDogMTA3LjM5MjgwODY0MDQ2NTYsXG4gICAgICAgICAgICB5OiAwLjEyNDk3MTY4MzkxMjA4ODgxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzY3MTgzNjEtMicsXG4gICAgICAgICAgICBuYW1lOiAnS3Jpc2huYSBNYW5naWFwdWRpJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIsXG4gICAgICAgICAgICB4OiAtMjIxLjQyMzUxMTgxMDk1Mzc2LFxuICAgICAgICAgICAgeTogMjEwLjY4NDYyMTA3NjIxNjk2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzY1Nzc3MjYtMScsXG4gICAgICAgICAgICBuYW1lOiAnS3VhbmctWWFuZyBIdWFuZycsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3LFxuICAgICAgICAgICAgeDogLTExMC45MDI5MzQ3NDQxOTYzNCxcbiAgICAgICAgICAgIHk6IC0xNDQuMTEwNzQ3NzI3NDAxOVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc3MTU5NzUwLTUnLFxuICAgICAgICAgICAgbmFtZTogJ0xlZSBBbm4gT2xzb24nLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTAyLFxuICAgICAgICAgICAgeDogLTEyLjI5MTA0NTcyOTgxNjU5MyxcbiAgICAgICAgICAgIHk6IDI4NC4zMjI4MjQwMjc2NzFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNjcxODM2MS00JyxcbiAgICAgICAgICAgIG5hbWU6ICdMZXJveSBSLiBLYXJnZScsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA2LFxuICAgICAgICAgICAgeDogLTI0Ni41Njg5ODQ5NTkwMTgyOCxcbiAgICAgICAgICAgIHk6IDE3Ni44NjQzMDgyNDg5MTI4XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzY1NTEyNzYtNCcsXG4gICAgICAgICAgICBuYW1lOiAnTHVpcyBKLiBNYWxhdmUnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjUsXG4gICAgICAgICAgICB4OiAtMTUwLjQ2OTU1MTU4NDEyMTA2LFxuICAgICAgICAgICAgeTogMTUuNDY2NjgxMzU1NTk0MDQzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzYwNDgxMTAtMycsXG4gICAgICAgICAgICBuYW1lOiAnTHluIE0uIElydmluZycsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1MCxcbiAgICAgICAgICAgIHg6IDE4NS44OTM2ODI1NTIwMzYzOCxcbiAgICAgICAgICAgIHk6IDIxMS43MzQ5NzMxNjgzNzQ0NFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc2NzE4MzYxLTMnLFxuICAgICAgICAgICAgbmFtZTogJ0x5bm5lIE0uIE11cmFjaCcsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA2LFxuICAgICAgICAgICAgeDogLTE4NC41OTczMTYxMjU5OTM3OSxcbiAgICAgICAgICAgIHk6IDE2OC45NTQ1OTAzMDEyODQwNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc1OTQ4Nzg5LTEnLFxuICAgICAgICAgICAgbmFtZTogJ01hZ251cyBMYXJzc29uJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMyLFxuICAgICAgICAgICAgeDogMjgyLjM0OTg3NDM0OTIzMDQsXG4gICAgICAgICAgICB5OiAtMTA1Ljg1MzkwNTc2ODM5NDA5XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzY4Mjk2NTUtMicsXG4gICAgICAgICAgICBuYW1lOiAnTWFnbnVzIFZlamxzdHJ1cCcsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1LFxuICAgICAgICAgICAgeDogODQuNTc2ODM0MjA1MDU4NDksXG4gICAgICAgICAgICB5OiAtMjExLjYwNTQ2NTkxMTI5MTIyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzY3MTE1NjUtNCcsXG4gICAgICAgICAgICBuYW1lOiAnTWFyYyBDYWx0YWJpYW5vJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE4LFxuICAgICAgICAgICAgeDogLTIxLjU3MjUwMzU0NzAzMTc2NSxcbiAgICAgICAgICAgIHk6IC0zMDMuMjUwMDEyMDQ4MDA4ODRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNzA3ODUwMy0zJyxcbiAgICAgICAgICAgIG5hbWU6ICdNYXJpYW5uZSBNYWx2ZW4nLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjQsXG4gICAgICAgICAgICB4OiAzOS4zNjQ3ODkxMjE4Mzk4MixcbiAgICAgICAgICAgIHk6IDIwNC41MDc2MTA4ODIzNzk2MlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc2MjIzMjA1LTInLFxuICAgICAgICAgICAgbmFtZTogJ01hcmsgRS4gQ3JvdmVsbGEnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTEsXG4gICAgICAgICAgICB4OiAtMjM5LjEzMDY3MzM5MjA3NixcbiAgICAgICAgICAgIHk6IDE1OS41Mzg2MjY4MTIwNzAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzY2MjE4MzQtMicsXG4gICAgICAgICAgICBuYW1lOiAnTWFyayBSYW5kbGUgQm95bnMnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogOSxcbiAgICAgICAgICAgIHg6IDkyLjk1MTU5OTEzNDA4NDQsXG4gICAgICAgICAgICB5OiAxMzkuNzI0OTE2OTk0MTgxMjlcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNTUzNDEzMi0xJyxcbiAgICAgICAgICAgIG5hbWU6ICdNYXJrIFMuIFZyZWVrZScsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA5OSxcbiAgICAgICAgICAgIHg6IC0xMjYuMTc0MTQyNDA4MjUyMDIsXG4gICAgICAgICAgICB5OiAxODIuMTQ4ODY4MDE3NDg1MzRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNDg5MjI0NC00JyxcbiAgICAgICAgICAgIG5hbWU6ICdNYXJrIFMuIFplaW5lcicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMTIsXG4gICAgICAgICAgICB4OiA4Ny44NjU1MTIzMzk0NDc5MixcbiAgICAgICAgICAgIHk6IC05My42MTQzNTk0OTkwNjg2NlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc2ODI5NjU1LTYnLFxuICAgICAgICAgICAgbmFtZTogJ01hcnRpbiBTdXNzZXInLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogOCxcbiAgICAgICAgICAgIHg6IDg2LjUxNjY0NDk3MTYzMTEsXG4gICAgICAgICAgICB5OiAtMTc2LjM2ODA1Njg2MjQ4NDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNDQ4NjcyMC0xJyxcbiAgICAgICAgICAgIG5hbWU6ICdNYXNhaGlybyBIaXJhbm8nLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogNjQsXG4gICAgICAgICAgICB4OiAtMjYuNDczOTQxMDIxMzI4ODM0LFxuICAgICAgICAgICAgeTogNTAuNTgzODc3NTAxMjg3NDc1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzU2MjI2NTMtMScsXG4gICAgICAgICAgICBuYW1lOiAnTWFzYWhpcm8gT3JpdGEnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTMsXG4gICAgICAgICAgICB4OiAtNDMuMzExOTQzNTEyNDY5NTA0LFxuICAgICAgICAgICAgeTogODguMDU4NTI0MDEwOTIzNjJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNjA4MDk5OC0zJyxcbiAgICAgICAgICAgIG5hbWU6ICdNYXNhbyBJc29tdXJhJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXG4gICAgICAgICAgICB4OiAtMjc3LjE2NzM5Njg3MzM0MTksXG4gICAgICAgICAgICB5OiAtNjkuMTYzMTM1OTAzNTg3NjlcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNDkwMjY3MS0zJyxcbiAgICAgICAgICAgIG5hbWU6ICdNYXNhc2hpIEthd2FzYWtpJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQ0LFxuICAgICAgICAgICAgeDogMjUuNDk5ODM0OTgxNzUxNTA1LFxuICAgICAgICAgICAgeTogMTIuNDU4ODM1OTYyOTA3NzY4XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzUxMTc4MzgtMScsXG4gICAgICAgICAgICBuYW1lOiAnTWF0dGhldyBBLiBQYWxtZXInLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjEzLFxuICAgICAgICAgICAgeDogMTExLjg0NDQwNzE5NTEyODcxLFxuICAgICAgICAgICAgeTogMTcuNTUzNTIyNDM4NTQ3MzFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNjU3NzcyNi0yJyxcbiAgICAgICAgICAgIG5hbWU6ICdNYXR0aGV3IFMuIE1hbGRlbicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNSxcbiAgICAgICAgICAgIHg6IC04OS43NzI4MTcxNTc2MjExMixcbiAgICAgICAgICAgIHk6IC0yMTIuNTIwMDA5OTQ4MDc0NVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc2NjY1NjU1LTInLFxuICAgICAgICAgICAgbmFtZTogJ01pY2hhZWwgQS4gTXllcicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxuICAgICAgICAgICAgeDogLTIyMi4xNTQ4OTg0MjY2Mjc4LFxuICAgICAgICAgICAgeTogLTkxLjg4MzcwNzc5OTg3MTI1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzU2MzI0MzItNCcsXG4gICAgICAgICAgICBuYW1lOiAnTWljaGFlbCBFLiBTZXRzZXInLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDYsXG4gICAgICAgICAgICB4OiAyMzYuMTQ1MzQ4NjkwNTkxNSxcbiAgICAgICAgICAgIHk6IC0yOS41MzMwNDM0Mzc0MTY2NzZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNTMwNjYyMy0zJyxcbiAgICAgICAgICAgIG5hbWU6ICdNaWNoYWVsIEYuIFRvbWFzY28nLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogODksXG4gICAgICAgICAgICB4OiAtMTM2LjM1MDM0MDIyMzAxOTI2LFxuICAgICAgICAgICAgeTogMTY2Ljg3Mzc2Nzg2MDk1MzYyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzY2MDY3NDQtMScsXG4gICAgICAgICAgICBuYW1lOiAnTWljaGFlbCBHLiBNaWt1cmFrJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE0LFxuICAgICAgICAgICAgeDogMTQzLjA2MTA3MTIzODI4Nzg3LFxuICAgICAgICAgICAgeTogMjAzLjY4NjUwMDMwODY0Njg2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzYyNjQwODctMScsXG4gICAgICAgICAgICBuYW1lOiAnTWljaGFlbCBQLiBXaGl0bWFuJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEzNCxcbiAgICAgICAgICAgIHg6IDg4LjMxMzMwNzkwOTg4ODIyLFxuICAgICAgICAgICAgeTogMjM3LjEwNDc2NTI4MDU4NDIyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzY2NjU2NDgtMicsXG4gICAgICAgICAgICBuYW1lOiAnTWljaGFlbCBUc3VuZ2hzaSBZdScsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyLFxuICAgICAgICAgICAgeDogNy4zMDQ1NTk3NDExODgxMDA1LFxuICAgICAgICAgICAgeTogLTEwMS42Mjg5MzM0Njk4NjMyM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc2MDgxNTE4LTEnLFxuICAgICAgICAgICAgbmFtZTogJ01pY2hlbCBLLiBCb3dtYW4tQW11YWgnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogNTYsXG4gICAgICAgICAgICB4OiAxNTMuNTU4MDU3MDMyOTI2NzQsXG4gICAgICAgICAgICB5OiAyNzguNzU4NDE2MzU5MDQwM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc0MjI0NzI1LTEnLFxuICAgICAgICAgICAgbmFtZTogJ01pY2hpbyBLYWRvdGEnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTczLFxuICAgICAgICAgICAgeDogNzAuMjUyNDkxMTAwNjcwMTEsXG4gICAgICAgICAgICB5OiAyNjAuMTc2MzA2ODQ1MDA3ODRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNjg1MDk0OS0yJyxcbiAgICAgICAgICAgIG5hbWU6ICdNaWtlIE15ZXInLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcbiAgICAgICAgICAgIHg6IDIwMC45ODQxMDAyNzI5MDY3NyxcbiAgICAgICAgICAgIHk6IC0xNjUuMTgwMDk5NDE1OTE4N1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc1MjYxMDM3LTInLFxuICAgICAgICAgICAgbmFtZTogJ01pbiBaaHUnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTE5LFxuICAgICAgICAgICAgeDogMTg3LjIxNzg3OTkwNTE5NDQ1LFxuICAgICAgICAgICAgeTogMTE5LjE4MDUyMzIyMjQxMTI0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzY3MzIxMDAtNCcsXG4gICAgICAgICAgICBuYW1lOiAnTWluZ3RlIEouIENoZW4nLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcbiAgICAgICAgICAgIHg6IC03NC44OTM5NjgyMTEzNTA1NCxcbiAgICAgICAgICAgIHk6IC0xNDQuNDgxNTEwMTE4NDA5ODZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNTE3NjUwMi0zJyxcbiAgICAgICAgICAgIG5hbWU6ICdNaXRjaGVsbCBKLiBQYWxtZXInLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDAsXG4gICAgICAgICAgICB4OiAzMTUuNzkwOTI2MjEzMzc1MzcsXG4gICAgICAgICAgICB5OiAtNTguNzk2NjY5Mzk0MTk3NjNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNzM4NTIyNC0zJyxcbiAgICAgICAgICAgIG5hbWU6ICdNb3RvaGlrbyBZb3NoaWRhJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUsXG4gICAgICAgICAgICB4OiAtMjMxLjE4NzY4MzI0ODQ3NDQzLFxuICAgICAgICAgICAgeTogLTExNi40NTEwNzc1Njc5MTI3MlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc1OTE4MTU5LTEnLFxuICAgICAgICAgICAgbmFtZTogJ011bmRpIEZvbXVrb25nJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEyLFxuICAgICAgICAgICAgeDogLTIyMS42MjUyNjgxNTM1MzE4NixcbiAgICAgICAgICAgIHk6IC0yMDEuNzUzMTczODgyNjU0NzVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNzYzMjk4NS0zJyxcbiAgICAgICAgICAgIG5hbWU6ICdOYW5jeSBUYXlsb3InLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogNSxcbiAgICAgICAgICAgIHg6IDUwLjAxNTg4NjQ5Mjk1Njg0NSxcbiAgICAgICAgICAgIHk6IDIyNy4yNzU5NTQwNzgwNDk3XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzc0NjgzMDQtMScsXG4gICAgICAgICAgICBuYW1lOiAnTm9idXl1a2kgS2FqaScsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNixcbiAgICAgICAgICAgIHg6IDQxLjgyMjM3NjA4MjE2MTY5NixcbiAgICAgICAgICAgIHk6IDUyLjUxNDI0Njc1Mjg1NDI1NVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc3MjA1NzE2LTUnLFxuICAgICAgICAgICAgbmFtZTogJ05vcmloaXRvIFNvbmUnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTksXG4gICAgICAgICAgICB4OiAyNjkuMTE1MDY1NTY3MzE0LFxuICAgICAgICAgICAgeTogNzAuMDEyMjQ4MzYyNDkzNThcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNTM1ODUxNC0zJyxcbiAgICAgICAgICAgIG5hbWU6ICdQYXVsIE0uIE1lYWRvd3MnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogNzAsXG4gICAgICAgICAgICB4OiAtMTcxLjI2OTc1NTMxNjM4NDcsXG4gICAgICAgICAgICB5OiAyNTYuNTQ3OTQzOTA4ODcxNzNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNjU1ODM1MS0zJyxcbiAgICAgICAgICAgIG5hbWU6ICdQYXVsIFYuIEdvb2RlJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE1NCxcbiAgICAgICAgICAgIHg6IC0yMzAuMTYxMTQxOTYzOTA5MzYsXG4gICAgICAgICAgICB5OiAtMTMuNDEwMzE0ODQ1MDAxOTEzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzY3MTE1NjUtMScsXG4gICAgICAgICAgICBuYW1lOiAnUGF2aXRyYSBTdWJyYW1hbmlhbScsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMCxcbiAgICAgICAgICAgIHg6IC02LjM3Mjc0ODM0Nzk0NzMzOCxcbiAgICAgICAgICAgIHk6IC0yOTcuOTY3MDI2NDkwOTA2OFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICdENDIzNzYxLTMnLFxuICAgICAgICAgICAgbmFtZTogJ1BldGVyIEhvbmcnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjUsXG4gICAgICAgICAgICB4OiAtMjA3LjAyOTEzNDQ0NDU4NzU2LFxuICAgICAgICAgICAgeTogMTEzLjIwNDQ0NzcyMDc3NDZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNjE1Mjk4Ny0yJyxcbiAgICAgICAgICAgIG5hbWU6ICdQZXRlciBNYXJkaWxvdmljaCcsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMTAsXG4gICAgICAgICAgICB4OiAtMTEzLjcwNTQxNDYyNzYzNDE0LFxuICAgICAgICAgICAgeTogLTcxLjYzODY2ODc4NDQ4OTI4XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzU4NzMwOTYtMScsXG4gICAgICAgICAgICBuYW1lOiAnUGV0ZXIgUy4gTGltJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE5LFxuICAgICAgICAgICAgeDogLTQxLjQ5NzE1NzU5OTQ3NzksXG4gICAgICAgICAgICB5OiAtMjI5Ljg2MzQ3Mzg0ODYzMDhcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNjczMjExMS00JyxcbiAgICAgICAgICAgIG5hbWU6ICdQZXRlciBTaWFtIFN5IExpbSBJSUknLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcbiAgICAgICAgICAgIHg6IC0xMTkuNjg3NzYwODcxODEyOTEsXG4gICAgICAgICAgICB5OiAtMjY0Ljc0NDExNTMxNDkyNDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNjg1MDg5NS0zJyxcbiAgICAgICAgICAgIG5hbWU6ICdQZXRlciBTaWFtIFN5IExpbSwgSUlJJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXG4gICAgICAgICAgICB4OiAtMTM3LjUxMzI3ODYxODY4OTkyLFxuICAgICAgICAgICAgeTogLTI1My4wNTAxNTI2MzQxNjAxM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc3MTU5NzUwLTQnLFxuICAgICAgICAgICAgbmFtZTogJ1BoaWxpcCBSb3knLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDUsXG4gICAgICAgICAgICB4OiAtNTUuOTE1MzMxODM3MzM0NTg0LFxuICAgICAgICAgICAgeTogMjY1LjQ1MjczOTk4NTkwNTlcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNjEwMzAzMy03JyxcbiAgICAgICAgICAgIG5hbWU6ICdQaGlsbGlwIEpvaG4gUGxhbnRlJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDc2LFxuICAgICAgICAgICAgeDogLTg5LjU2MTcyNjM0MjczOTM4LFxuICAgICAgICAgICAgeTogMTI4LjQ5MzU5OTU0MDIwOTM3XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzU5Nzg4MjktMScsXG4gICAgICAgICAgICBuYW1lOiAnUGktWXUgQ2h1bmcnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTUsXG4gICAgICAgICAgICB4OiA3OS4wMzMzMDMwOTc2ODMzMyxcbiAgICAgICAgICAgIHk6IC0xNjYuODk2MjAzMDE0MDI2OTVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNjA5MjA4My0yJyxcbiAgICAgICAgICAgIG5hbWU6ICdQcmFzaGFudCBDaGF0dGVyamVlJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEyLFxuICAgICAgICAgICAgeDogLTEyNy45ODE2NjI0ODk3ODA0NSxcbiAgICAgICAgICAgIHk6IC0yMjYuMDk1OTAzMjI5ODMwNjdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNzM0MDQxMS0xJyxcbiAgICAgICAgICAgIG5hbWU6ICdSYWNoYWVsIEwuIENvb2snLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcbiAgICAgICAgICAgIHg6IDE0NS41ODE2NDM0OTUzNjg1LFxuICAgICAgICAgICAgeTogLTE4NS45MTE1MjI3ODQ4MjUxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzQ4NzI2MDMtMScsXG4gICAgICAgICAgICBuYW1lOiAnUmFscGggU3RlYXJucycsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4MixcbiAgICAgICAgICAgIHg6IC0xNy42MzgyNjExMzk3NDAwNzcsXG4gICAgICAgICAgICB5OiAzMTEuODc0NDAwOTYwMTYyMzVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNjgzNjU0MC02JyxcbiAgICAgICAgICAgIG5hbWU6ICdSYW5keSBIb2ZmbWFuJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDY2LFxuICAgICAgICAgICAgeDogLTk2LjY3OTE1MDYyMjcxNTIzLFxuICAgICAgICAgICAgeTogLTE4Ljg2MzI2NzY0MjMzODM1N1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc0Nzk4NTk0LTEnLFxuICAgICAgICAgICAgbmFtZTogJ1JpY2hhcmQgQS4gSGlsbHN0ZWFkJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDU2LFxuICAgICAgICAgICAgeDogMjIwLjk0MDQzMDQzMjU4ODcsXG4gICAgICAgICAgICB5OiAxNTUuOTIxMjQ5MzIxNzE3MVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc1MDk3MTIyLTInLFxuICAgICAgICAgICAgbmFtZTogJ1JpY2hhcmQgRS4gUHVydmlzJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIyLFxuICAgICAgICAgICAgeDogLTIzMS42MjIxMTczNDg1MzEyLFxuICAgICAgICAgICAgeTogNTguNTMyNzg4NTkzNDA2NDY1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzYyNjg4MDMtMycsXG4gICAgICAgICAgICBuYW1lOiAnUmljaGFyZCBHb3JtYW4nLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTAsXG4gICAgICAgICAgICB4OiA3Ni43MTY2NzQzOTIyODIwMixcbiAgICAgICAgICAgIHk6IC0yNDcuNDA3NTY4NDc1NDMzNjZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNTI3MTU0My0xJyxcbiAgICAgICAgICAgIG5hbWU6ICdSaWNoYXJkIEwuIEdyYW50JyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIyLFxuICAgICAgICAgICAgeDogMTA4LjM3NzkwMjYxNjM4MTU2LFxuICAgICAgICAgICAgeTogLTEwOS41MzQyOTc3NDAxMTIwNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc2MDkyMDgzLTEnLFxuICAgICAgICAgICAgbmFtZTogJ1JvYmVydCBBLiBCcm9kZXJzZW4nLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjEsXG4gICAgICAgICAgICB4OiAtMTE2Ljc4Njc3MzI5MzgwMzMyLFxuICAgICAgICAgICAgeTogLTIxMS43NDMxMjE3Mjc1NDg5OFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc1ODczMDk2LTInLFxuICAgICAgICAgICAgbmFtZTogJ1JvYmVydCBCcm9kZXJzb24nLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcbiAgICAgICAgICAgIHg6IDMyLjQ3MDU2NDM2MjcxMDMzNCxcbiAgICAgICAgICAgIHk6IC0yMTIuMzU2NTAzNzYxNjkwNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc1OTYzOTUzLTEnLFxuICAgICAgICAgICAgbmFtZTogJ1JvYmVydCBDcmFtJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXG4gICAgICAgICAgICB4OiAzOS43MzE2NTYyMjgwMzYwNDQsXG4gICAgICAgICAgICB5OiAtMTU5LjcwMTE3NDE5NjYyODUzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzQzNjIzODctMScsXG4gICAgICAgICAgICBuYW1lOiAnUm95IENsYXJrJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIzLFxuICAgICAgICAgICAgeDogLTE0My4zODA2NTQ2NzgwNTU4MyxcbiAgICAgICAgICAgIHk6IC04My4xODY0NjkzMjMzMjg5NFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc1NDE3NzcwLTgnLFxuICAgICAgICAgICAgbmFtZTogJ1J5byBIYXlhc2hpJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDcxLFxuICAgICAgICAgICAgeDogMTA5LjU2OTAwMjcwMTgxMzIyLFxuICAgICAgICAgICAgeTogOTQuMjY5MDc3NjE5MzMzOVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc2MDgxODc1LTInLFxuICAgICAgICAgICAgbmFtZTogJ1NhbmpveSBDaGF0dGVyamVlJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIsXG4gICAgICAgICAgICB4OiAtMTY4LjU1MzUxNzE5MzczMjc0LFxuICAgICAgICAgICAgeTogLTU1LjAwMzkxMzI3NzEwMDcyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzU0MTYyNTUtMScsXG4gICAgICAgICAgICBuYW1lOiAnU2NvdHQgQS4gQmVyZ2VtYW5uJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEwNixcbiAgICAgICAgICAgIHg6IDIzNi45ODQzNjU4NDM3ODMxLFxuICAgICAgICAgICAgeTogLTE1NC41Mzg1MzI4OTM2MzE0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzY3MjQzOTktMicsXG4gICAgICAgICAgICBuYW1lOiAnU2hhbmthciBTLiBOYXRoYW4nLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcbiAgICAgICAgICAgIHg6IDguMDE3NjUxMzI2NzEzODAzLFxuICAgICAgICAgICAgeTogLTEzMi42NzQzOTIwNTYzMjY2NFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc2ODA0MzMwLTEnLFxuICAgICAgICAgICAgbmFtZTogJ1NoYW5ub24gSm9uZXMnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogNSxcbiAgICAgICAgICAgIHg6IDcxLjEzMjA2OTgxODQ0NjMxLFxuICAgICAgICAgICAgeTogLTI1OC40OTkzNDIzOTk0MTM3NlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc2ODg3NzM2LTQnLFxuICAgICAgICAgICAgbmFtZTogJ1NoYW50aGkgR2FuZXNhbicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0LFxuICAgICAgICAgICAgeDogLTM2Ljk5NDg4MjEwNzU2NDA3NCxcbiAgICAgICAgICAgIHk6IDE3Ni40NDM1MjEwMzk1MzE2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzYxODM1ODktMScsXG4gICAgICAgICAgICBuYW1lOiAnU2hpbiBLaW0nLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDcsXG4gICAgICAgICAgICB4OiAtMjg3LjY3MjY2NDY2Njc5OCxcbiAgICAgICAgICAgIHk6IDQ1LjgxMjYxMTY0MTM5MDY3NFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc2NjU0MDMyLTQnLFxuICAgICAgICAgICAgbmFtZTogJ1Nvbmd4aWFuZyBXZWknLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogNyxcbiAgICAgICAgICAgIHg6IDEzMi4zMTk5MTcxMDQ0MDgyLFxuICAgICAgICAgICAgeTogODYuMzMzNjkyMDE4MTE4NzVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNjc4MzUyNC0xJyxcbiAgICAgICAgICAgIG5hbWU6ICdTdGVwaGVuIEMuIEFuZGVyc29uJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXG4gICAgICAgICAgICB4OiA2Mi42MjAwNzIwMTM5NTA1LFxuICAgICAgICAgICAgeTogMzAyLjQ5NjE4ODU3MDgzMDI3XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzU3NzQzNTctMScsXG4gICAgICAgICAgICBuYW1lOiAnU3RldmVuIE0uIEhvZmZiZXJnJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEwNixcbiAgICAgICAgICAgIHg6IC0yOTguMTQ5ODE1Nzg5Mzk5NDQsXG4gICAgICAgICAgICB5OiA4OC41NjgwMzUxMDQ1MDM5XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzU1OTQxNjktMicsXG4gICAgICAgICAgICBuYW1lOiAnU3RldmVuIFAuIEhvdGVsbGluZycsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzMDYsXG4gICAgICAgICAgICB4OiAxNzguMzEzNTYyMjQ0MjA3NTYsXG4gICAgICAgICAgICB5OiAtMjU1LjQzMDQyNTA3NDgwNTc4XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzY1MjYzMzUtMicsXG4gICAgICAgICAgICBuYW1lOiAnU3VzYW4gTS4gVHJleXonLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTUsXG4gICAgICAgICAgICB4OiAtMjc5LjIzMzg0NzEzMDQxODMsXG4gICAgICAgICAgICB5OiAxMzkuOTkyNTczMzY3Mjc5NDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNjYzOTI0Ni0xJyxcbiAgICAgICAgICAgIG5hbWU6ICdUYXRzdXlhIEhvbmRhJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEwOSxcbiAgICAgICAgICAgIHg6IDI1MC4wNjAyMDc3MjAxNjg0LFxuICAgICAgICAgICAgeTogNjYuMzM0MDEzMjIyNjg2MzdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNTM0NTYzOS02JyxcbiAgICAgICAgICAgIG5hbWU6ICdUYXRzdXlhIEl3YXNha2knLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTE2LFxuICAgICAgICAgICAgeDogODYuMzMzNjEzNDQ3MTc3MyxcbiAgICAgICAgICAgIHk6IDE1Ny44MjU5MzQ2MjA2MDc0M1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc2MzI0NTY4LTEnLFxuICAgICAgICAgICAgbmFtZTogJ1RoYW5oIERpZWMnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcbiAgICAgICAgICAgIHg6IC03OC4wMzE0NzQ2OTEyNTE4NCxcbiAgICAgICAgICAgIHk6IC0yNzIuNTg4NjYwNjg2MTcxOFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc1NzE1NDUwLTInLFxuICAgICAgICAgICAgbmFtZTogJ1Rob21hcyBNLiBSb3Rod2VpbicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMyxcbiAgICAgICAgICAgIHg6IC0xOS4xNjUxMDEwMTMyNDE0OTMsXG4gICAgICAgICAgICB5OiAtMjA4LjE4MDQ2NDA4NDA2MTlcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnUkUzOTg0MS00JyxcbiAgICAgICAgICAgIG5hbWU6ICdUb2RkIFBoaWxsaXAgT21haXRzJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDcsXG4gICAgICAgICAgICB4OiAxMjkuOTkzMDY4NTQ2MjUwMDcsXG4gICAgICAgICAgICB5OiAtMjIuMDQ5OTAxNjE1MDM4NDA4XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzY4NTA5NDktMycsXG4gICAgICAgICAgICBuYW1lOiAnVG9tIEFic2hpcmUnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcbiAgICAgICAgICAgIHg6IDE0MC4yNjU2NjkwMjcxNTIyOCxcbiAgICAgICAgICAgIHk6IC0xNTMuMzkxNzI5NDg0Mzk1OFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc3MDYxMDE0LTYnLFxuICAgICAgICAgICAgbmFtZTogJ1Rvc2hpbyBLYW1peWEnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjUsXG4gICAgICAgICAgICB4OiA5LjEyNjI3MTI3NjI1NDM3NyxcbiAgICAgICAgICAgIHk6IDEwMS44MjI5ODYzMDU1NjMyNlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc2NzE4MzYxLTEnLFxuICAgICAgICAgICAgbmFtZTogJ1ZpamF5IFIuIEJhc2FuaScsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA5LFxuICAgICAgICAgICAgeDogLTIwMS4zODIyNzE3MzIwNTAyNyxcbiAgICAgICAgICAgIHk6IDIwOC43NDMyNzA0OTkyNjMyOFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc2NzE4MzYxLTUnLFxuICAgICAgICAgICAgbmFtZTogJ1ZpdGFseSBTLiBSZXZzaW4nLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTMsXG4gICAgICAgICAgICB4OiAtMTk4LjcwNDczMDc4MDI0OTgzLFxuICAgICAgICAgICAgeTogMTUyLjQwNTIyMTE2NjU5NDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNjk3ODkyMS0zJyxcbiAgICAgICAgICAgIG5hbWU6ICdXaWxsaWFtIEIuIFdlaXNlbmJ1cmdoLCBJSScsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNTIsXG4gICAgICAgICAgICB4OiAyNDguMjQzOTM5MDYyOTM3MzMsXG4gICAgICAgICAgICB5OiAtOTAuMjkzNDI1MjQzNjkzMjRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNTI1Nzk3MS0yJyxcbiAgICAgICAgICAgIG5hbWU6ICdXaWxsaWFtIFAuIFZhbiBBbnR3ZXJwJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDY5LFxuICAgICAgICAgICAgeDogLTI0My41MjA5OTE5MTY3NzksXG4gICAgICAgICAgICB5OiAyMy40MTc2Nzk5Nzc5MTEzMjdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNjgyOTY1NS0xJyxcbiAgICAgICAgICAgIG5hbWU6ICdYaWFvZmVpIEh1YW5nJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUsXG4gICAgICAgICAgICB4OiA4OS45ODg3NDE2MTAzODU2LFxuICAgICAgICAgICAgeTogLTE4Ny43OTQxMzk5ODE2MzQ4M1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc1MjgzNDUyLTEnLFxuICAgICAgICAgICAgbmFtZTogJ1lpLUNoaSBTaGloJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMzLFxuICAgICAgICAgICAgeDogLTMyMy43MTM1OTY0MTg3MTE2MyxcbiAgICAgICAgICAgIHk6IDIzLjkwODkzNjU4NjQ5NDA4NlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxuICAgICAgICAgICAgaWQ6ICc1OTAxODk2LTEnLFxuICAgICAgICAgICAgbmFtZTogJ1lvcmFtIEdhbCcsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3NixcbiAgICAgICAgICAgIHg6IC0xMDcuMjMyMjU1MTA2MjA0ODksXG4gICAgICAgICAgICB5OiAxMjQuNzM1NDE3MzkwMjYxMTJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcbiAgICAgICAgICAgIGlkOiAnNDU3MzQ3Mi0xJyxcbiAgICAgICAgICAgIG5hbWU6ICdZb3NoaWhpcm8gSXRvJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE4OSxcbiAgICAgICAgICAgIHg6IDExOC4yMDI1MDkzODM4Mzg5MixcbiAgICAgICAgICAgIHk6IDI4Ny45NjE1MzI2NDM0MjgzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXG4gICAgICAgICAgICBpZDogJzU4NTU5NTctMScsXG4gICAgICAgICAgICBuYW1lOiAnWmhlbmcgWXVhbicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1OCxcbiAgICAgICAgICAgIHg6IDEzOC4wOTIwNjk1MjE3MzE5LFxuICAgICAgICAgICAgeTogMTI0LjA2NDQwMTE3OTc2OTNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcbiAgICAgICAgICAgIGlkOiAnb3JnX1o1OWFVQkd0WjlQNVF6ZEZpS21aJyxcbiAgICAgICAgICAgIG5hbWU6ICdBYmxhaXNlIExpbWl0ZWQnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMixcbiAgICAgICAgICAgIHg6IC0xOTAuNDgyMTEzMDAxMDc0MixcbiAgICAgICAgICAgIHk6IC0yMzYuNTM2MTk2OTg1Mzk0ODdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcbiAgICAgICAgICAgIGlkOiAnb3JnXzR6TzJCYzA4eDU2WGpEcTVUZUJwJyxcbiAgICAgICAgICAgIG5hbWU6ICdBY2NlbnR1cmUgTExQJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIxMCxcbiAgICAgICAgICAgIHg6IDE3Mi44NjYwMjMwMDgzMzk1NyxcbiAgICAgICAgICAgIHk6IDI1My43MDMzMDgxNTQxNjU4NVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxuICAgICAgICAgICAgaWQ6ICdvcmdfYndxODNqYmNjS3FGNGpKclBjYVInLFxuICAgICAgICAgICAgbmFtZTogJ0FkdmFuY2VkIEJpb25pY3MgQUcnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogNjMzLFxuICAgICAgICAgICAgeDogLTE3Ni45MTQ2ODQ3Mjk4MTU1NSxcbiAgICAgICAgICAgIHk6IDIzMy42MzM4ODM1MjU5NjE5XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXG4gICAgICAgICAgICBpZDogJ29yZ19JRFViUzA5WlIwSmhKOGpGRXB0VCcsXG4gICAgICAgICAgICBuYW1lOiAnQXBwbGUgSW5jLicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMTAyMyxcbiAgICAgICAgICAgIHg6IDE1MS42ODI0NjY0MTU3ODg2NyxcbiAgICAgICAgICAgIHk6IC0yMjIuMTI0ODc0ODgxNDQ4OVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxuICAgICAgICAgICAgaWQ6ICdvcmdfRWhZRlBJSkVtWVFZUm9ZdnNucHknLFxuICAgICAgICAgICAgbmFtZTogJ0Nhbm9uIEthYnVzaGlraSBLYWlzaGEnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogNzQ1OTYsXG4gICAgICAgICAgICB4OiA0OS40ODIyMzkyMDU3MzI5NixcbiAgICAgICAgICAgIHk6IDEzNC4wOTIyODg3MzExNTU5MlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxuICAgICAgICAgICAgaWQ6ICdvcmdfSW1lZzlXNlAxVEU2STJRdXRTNHknLFxuICAgICAgICAgICAgbmFtZTogJ0Nhc2lvIENvbXB1dGVyIENvLiwgTHRkLicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0NTIxLFxuICAgICAgICAgICAgeDogLTE3OS44MTc1OTM0MTIwNTE1LFxuICAgICAgICAgICAgeTogLTE0Mi43MTgyODg1MjkyMTA0NFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxuICAgICAgICAgICAgaWQ6ICdvcmdfOGNzTWd0Z25OMG1SRVpwTlAxSmknLFxuICAgICAgICAgICAgbmFtZTogJ0NlcmVicmFsIFZhc2N1bGFyIEFwcGxpY2F0aW9ucywgSW5jLicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0LFxuICAgICAgICAgICAgeDogMjY4LjgwMDQ1NDE0NDQzODcsXG4gICAgICAgICAgICB5OiAxNjQuNTIzNjk0NzgzMTU2ODNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcbiAgICAgICAgICAgIGlkOiAnb3JnXzBlVHIzWElCakFLcFhrQzY4MjNyJyxcbiAgICAgICAgICAgIG5hbWU6ICdDZXJtZXQsIEluYy4nLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogNyxcbiAgICAgICAgICAgIHg6IC00OC40MDM3Mjc2ODk1NTE1NixcbiAgICAgICAgICAgIHk6IDIwNS40NDAyNTg4MzgyNjA2NlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxuICAgICAgICAgICAgaWQ6ICdvcmdfMTA3V0tOUGJ2RERLclpCbG13OFUnLFxuICAgICAgICAgICAgbmFtZTogJ0NvbnRpZ28gU29mdHdhcmUsIEluYy4nLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMixcbiAgICAgICAgICAgIHg6IDI5OS4zMTc0MzU5MDk1OTUzLFxuICAgICAgICAgICAgeTogNDguMDM0OTI0Njk4MDA4MzNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcbiAgICAgICAgICAgIGlkOiAnb3JnX3BwRWxrRXRRdkZ0RzZBNDc1NFVJJyxcbiAgICAgICAgICAgIG5hbWU6ICdFYXN0bWFuIEtvZGFrIENvbXBhbnknLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjE1MzksXG4gICAgICAgICAgICB4OiAyMTEuMzc1MjU5NDEzNTI3ODYsXG4gICAgICAgICAgICB5OiAyMTcuNTgyODc3ODY1MzIxMDhcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcbiAgICAgICAgICAgIGlkOiAnb3JnXzBqUFdNN1lxaHRYbTBsbTNmbTFZJyxcbiAgICAgICAgICAgIG5hbWU6ICdFTUMgQ29ycG9yYXRpb24nLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDk3NixcbiAgICAgICAgICAgIHg6IC0xODkuNzAxNTYyNzQ4Mzg5NzMsXG4gICAgICAgICAgICB5OiAtMTEwLjAxNTU5ODkwNDM3NjI4XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXG4gICAgICAgICAgICBpZDogJ29yZ19XaDJjbk9JektsaHpqdXFWbU9xWScsXG4gICAgICAgICAgICBuYW1lOiAnRW5lY3RvIEFCJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXG4gICAgICAgICAgICB4OiAyNDMuNjc2NTQxMjI0NjI1OCxcbiAgICAgICAgICAgIHk6IC0xMzEuMjA5MDMxMTg2NjA5OVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxuICAgICAgICAgICAgaWQ6ICdvcmdfWHU2Z1hTc2x0REJaVEFoTUZCV0QnLFxuICAgICAgICAgICAgbmFtZTogJ0V0aGljb24gRW5kby1TdXJnZXIsIEluYy4nLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcbiAgICAgICAgICAgIHg6IDIyNC43MTI0MzU4MDMxNjQ3NyxcbiAgICAgICAgICAgIHk6IDM5LjYwOTg0MjUyNTQ3ODY1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXG4gICAgICAgICAgICBpZDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicsXG4gICAgICAgICAgICBuYW1lOiAnRXRoaWNvbiBFbmRvLVN1cmdlcnksIEluYy4nLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjE5NCxcbiAgICAgICAgICAgIHg6IDE3MS4wNzQzNzAyMjQ3NjY0LFxuICAgICAgICAgICAgeTogLTU1LjAzNjgwNzA5ODk0NjA5XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXG4gICAgICAgICAgICBpZDogJ29yZ192UzZyY0t5YzJxTjNyRmRYMFAySycsXG4gICAgICAgICAgICBuYW1lOiAnSGV3bGV0dC1QYWNrYXJkIERldmVsb3BtZW50IENvbXBhbnksIEwuUC4nLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzUxMTgsXG4gICAgICAgICAgICB4OiAtOTAuMzEwMzk2ODUyNjY5NCxcbiAgICAgICAgICAgIHk6IC01MC4wNTIxNjI4OTI5NDU0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXG4gICAgICAgICAgICBpZDogJ3Blcl90WDJlMnlWTGd5TmdvYkVweldLVCcsXG4gICAgICAgICAgICBuYW1lOiAnSGlkZW8gT2hubycsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0LFxuICAgICAgICAgICAgeDogLTM5LjUzNjEyODQyNzA0NDM2LFxuICAgICAgICAgICAgeTogLTIwLjI3MDI3MzM1NDk3NzI1MlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxuICAgICAgICAgICAgaWQ6ICdvcmdfTUt2Ym5DY3lQdWRYZXhVdnNTd0YnLFxuICAgICAgICAgICAgbmFtZTogXCJIb2xkZW4ncyBGb3VuZGF0aW9uIFNlZWRzLCBJbmMuXCIsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4MyxcbiAgICAgICAgICAgIHg6IDI0MC4wOTk5MDU5ODUxOTA4LFxuICAgICAgICAgICAgeTogLTIwNi4wMjYzNzYxNDgwNjEyNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxuICAgICAgICAgICAgaWQ6ICdvcmdfZkEwYXpxb0JHRXpvUG95ODVKeXYnLFxuICAgICAgICAgICAgbmFtZTogJ0lOVFVJVElWRSBTVVJHSUNBTCBPUEVSQVRJT05TLCBJTkMuJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEyMDIsXG4gICAgICAgICAgICB4OiAxNS4zNzg4NjI4NjU0NDc2MjQsXG4gICAgICAgICAgICB5OiAyOTAuMjE3ODIyMjg3NTIyM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxuICAgICAgICAgICAgaWQ6ICdvcmdfRHR0Wk12a3l2VzNmVjZvQ1VNVEYnLFxuICAgICAgICAgICAgbmFtZTogJ0phcGFuIFNjaWVuY2UgYW5kIFRlY2hub2xvZ3kgQWdlbmN5JyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDExNTcsXG4gICAgICAgICAgICB4OiAxMy4xNzM0NTA3MzEwNjEwODYsXG4gICAgICAgICAgICB5OiA1Ni40ODYxNDA5OTU3Nzc2N1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxuICAgICAgICAgICAgaWQ6ICdvcmdfYzV2eUJ6SzdpaWtrVTREalFGSFQnLFxuICAgICAgICAgICAgbmFtZTogJ0phcGFuIFNjaWVuY2UgYW5kIFRlY2hub2xvZ3kgQ29ycG9yYXRpb24nLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDE4LFxuICAgICAgICAgICAgeDogNjMuNTYzMTcwNTgyNzUsXG4gICAgICAgICAgICB5OiA2LjI3MzY3MzUxOTA5MDc1M1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxuICAgICAgICAgICAgaWQ6ICdvcmdfRnZndkdGZThKWjBpWWxaODB3ZUYnLFxuICAgICAgICAgICAgbmFtZTogJ0tvbmlua2xpamtlIFBoaWxpcHMgRWxlY3Ryb25pY3MgTi5WLicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNzEzOCxcbiAgICAgICAgICAgIHg6IC0xMjMuMjQxNzkxMjM3OTAxOTEsXG4gICAgICAgICAgICB5OiAyNzAuOTk3NDY1NDg0NDEwMTZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcbiAgICAgICAgICAgIGlkOiAnb3JnX1hjcUNqdFQ4cGk4TWszVWpRbER0JyxcbiAgICAgICAgICAgIG5hbWU6ICdMRyBFbGVjdHJvbmljcyBJbmMuJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMyNzI1LFxuICAgICAgICAgICAgeDogLTI3Ny4zNDYwMjI5OTg0NTU4LFxuICAgICAgICAgICAgeTogNy4xMzM2OTgyMjI1NDMwMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxuICAgICAgICAgICAgaWQ6ICdwZXJfRElqVVRNN2xIaERzQXoydThqaU8nLFxuICAgICAgICAgICAgbmFtZTogJ01hc2FzaGkgS2F3YXNha2knLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcbiAgICAgICAgICAgIHg6IDE5Ljg5NTQzNjU5NjY2MjkwOCxcbiAgICAgICAgICAgIHk6IC0xMC43MTcxNzgyNTA5MDA5MThcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcbiAgICAgICAgICAgIGlkOiAnb3JnX0dWTWxMVmJ3Q0RTaXFQOU9nOFRuJyxcbiAgICAgICAgICAgIG5hbWU6ICdNZWR0cm9uaWMgTWluaU1lZCwgSW5jLicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4MDAsXG4gICAgICAgICAgICB4OiAtMTgzLjc0MDIzNDE5MDU3NDE3LFxuICAgICAgICAgICAgeTogMzcuNjg3MjE4NzY5ODM5MDg1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXG4gICAgICAgICAgICBpZDogJ29yZ19RdzhFc3JOME01Mm5WUVVNNnZzVicsXG4gICAgICAgICAgICBuYW1lOiAnTW9uc2FudG8gVGVjaG5vbG9neSBMTEMnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogODY4OSxcbiAgICAgICAgICAgIHg6IDE5Ljc2MzkwMTQ4ODM1MjY3MyxcbiAgICAgICAgICAgIHk6IDE5Ni42MjIzNjg2MjU4OTc3NFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxuICAgICAgICAgICAgaWQ6ICdvcmdfajVVNUlFYTFGSWJndHI3aU5zUU0nLFxuICAgICAgICAgICAgbmFtZTogJ011cmF0YSBNYW51ZmFjdHVyaW5nIENvLiwgTHRkLicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3MzQyLFxuICAgICAgICAgICAgeDogODcuNjQ4NzgxOTcxMDg4MTcsXG4gICAgICAgICAgICB5OiAyOTEuMTAyMzE5NTg3MjM1MlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxuICAgICAgICAgICAgaWQ6ICdvcmdfMXA0RldFb0l0anlLYndUcENKb2wnLFxuICAgICAgICAgICAgbmFtZTogJ05ldHdvcmsgQXBwbGlhbmNlLCBJbmMuJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUzMCxcbiAgICAgICAgICAgIHg6IC0yMjIuMjkyMDM3MjExODA1MixcbiAgICAgICAgICAgIHk6IDE0OS4wODM3MjE1NTI3MjA2MlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxuICAgICAgICAgICAgaWQ6ICdvcmdfQVRPV0hkNEdHYW9oMTR6dXRYcTcnLFxuICAgICAgICAgICAgbmFtZTogJ1Bvd2VyIE1lZGljYWwgSW50ZXJ2ZW50aW9ucywgSW5jLicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzMCxcbiAgICAgICAgICAgIHg6IDEwOC44ODExMDM5OTc0OTcwNixcbiAgICAgICAgICAgIHk6IDE4Ni44NTMzODc4MjYyNjU5XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXG4gICAgICAgICAgICBpZDogJ29yZ19rOFY3YzVnbm1DN1NWbXVwNVZ1NycsXG4gICAgICAgICAgICBuYW1lOiAnUmFpbmRhbmNlIENvbW11bmljYXRpb25zLCBJbmMuJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXG4gICAgICAgICAgICB4OiA2NS4xNTcxNzY5NDI2NDQxNyxcbiAgICAgICAgICAgIHk6IDgzLjQxOTQzNjM3ODIwNDAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXG4gICAgICAgICAgICBpZDogJ29yZ18yNDJoSmVnd2ZRQ2VQOWhzZndwVycsXG4gICAgICAgICAgICBuYW1lOiAnUmlnaHQgTm93IFRlY2hub2xvZ2llcywgSW5jLicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyLFxuICAgICAgICAgICAgeDogMTg2LjgxOTY1MjgxNjAyMjY4LFxuICAgICAgICAgICAgeTogLTE4My40MDE3MDI1MTQ1ODUzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXG4gICAgICAgICAgICBpZDogJ29yZ182cjl0N1pBNllUMDMxT2Q0a01QZycsXG4gICAgICAgICAgICBuYW1lOiAnUmlnaHRub3cgVGVjaG5vbG9naWVzLCBJbmMuJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEwLFxuICAgICAgICAgICAgeDogLTIzMS43MzYxNTg4MDEyMjIzNixcbiAgICAgICAgICAgIHk6IC03NC4wOTkxNjk3MDkzNDI1MlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxuICAgICAgICAgICAgaWQ6ICdvcmdfMklGOTd6VnltU3VyYVNuVUFYbXEnLFxuICAgICAgICAgICAgbmFtZTogJ1NhbnlvIEVsZWN0cmljIENvLiwgTHRkLicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4MzgzLFxuICAgICAgICAgICAgeDogLTI4My45MDI4MjUzNjA4OTQ2LFxuICAgICAgICAgICAgeTogLTEyNy44NzI1MzM4MTk2OTE3MVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxuICAgICAgICAgICAgaWQ6ICdvcmdfcGxaYkx4aXlzRVNiYUk5cE9leW0nLFxuICAgICAgICAgICAgbmFtZTogJ1NFTUlDT05EVUNUT1IgRU5FUkdZIExBQk9SQVRPUlkgQ08uLCBMVEQuJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEzODg1LFxuICAgICAgICAgICAgeDogMjU2LjIyODM5ODc2Mzc5MDUsXG4gICAgICAgICAgICB5OiAxMjQuNDYxNDE2OTYwNjY1MjJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcbiAgICAgICAgICAgIGlkOiAnb3JnX0NNV2NvQ0pXUE9maXNMV3JLdnlkJyxcbiAgICAgICAgICAgIG5hbWU6ICdTaGFycCBLYWJ1c2hpa2kgS2Fpc2hhJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIyNTQwLFxuICAgICAgICAgICAgeDogNC4wOTU1NjA0MDY0ODI2NzEsXG4gICAgICAgICAgICB5OiAtMzIuMTM2MTg0ODI1Nzk5MzhcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcbiAgICAgICAgICAgIGlkOiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyxcbiAgICAgICAgICAgIG5hbWU6ICdTaWViZWwgU3lzdGVtcywgSW5jLicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyOTgsXG4gICAgICAgICAgICB4OiAtMzMuOTE5OTQ3NTIzMTQ4NDIsXG4gICAgICAgICAgICB5OiAtMjEyLjU5OTQyODg5ODg4MTFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcbiAgICAgICAgICAgIGlkOiAnb3JnX0o4Vm5BekZxRWpXZ3hxNGV2NzF6JyxcbiAgICAgICAgICAgIG5hbWU6ICdTdGFyaW9uIEluc3RydW1lbnRzIENvcnBvcmF0aW9uJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIwLFxuICAgICAgICAgICAgeDogMTc4Ljk4NDE2NjU0MTE2MzQ2LFxuICAgICAgICAgICAgeTogMTY5LjU0ODIxMjExMTkwMjc2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXG4gICAgICAgICAgICBpZDogJ29yZ19tMnROUEprQTJnMUFXT2M3dXpTMScsXG4gICAgICAgICAgICBuYW1lOiAnVGhlcmFTZW5zZSwgSW5jLicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1MyxcbiAgICAgICAgICAgIHg6IC0xMjUuOTE0NTk5ODQ2MDg1MSxcbiAgICAgICAgICAgIHk6IDEzMi40MTczOTA1NDUxNjExN1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxuICAgICAgICAgICAgaWQ6ICdvcmdfSmpyTTZVbWVPWTBRNU1tb05pUDgnLFxuICAgICAgICAgICAgbmFtZTogJ1RPS1lPIElOU1RJVFVURSBPRiBURUNITk9MT0dZJyxcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDM5NSxcbiAgICAgICAgICAgIHg6IDE4LjYxNDEzMDA4MTE2NjQ2LFxuICAgICAgICAgICAgeTogMTY1LjIxMjUzNjk5NTU0MjE0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXG4gICAgICAgICAgICBpZDogJ29yZ19ld1ZzQ3V0cFJ6RDlwVDA3a0JvRScsXG4gICAgICAgICAgICBuYW1lOiAnVHljbyBIZWFsdGNhcmUgR3JvdXAgTFAnLFxuICAgICAgICAgICAgbnVtUGF0ZW50czogNSxcbiAgICAgICAgICAgIHg6IC02Ny4yNTQzMDUyNjc0MjEwNyxcbiAgICAgICAgICAgIHk6IDMwOC42MTQ5MjgyMDQxNTc5XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXG4gICAgICAgICAgICBpZDogJ29yZ181d05Ocko0ekZRNUtROE9XbnpSQycsXG4gICAgICAgICAgICBuYW1lOiAnVW5pdGVkIFN0YXRlcyBTdXJ0aWNhbCBDb3Jwb3JhdGlvbicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxuICAgICAgICAgICAgeDogMjgyLjc4MTAwOTIyNDQzMSxcbiAgICAgICAgICAgIHk6IC01Mi45ODE1OTAxMTUwODcxNDRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcbiAgICAgICAgICAgIGlkOiAnb3JnXzN2STJaNWtDMVNhU2xiVUJvT0JUJyxcbiAgICAgICAgICAgIG5hbWU6ICdXZWJFeCBDb21tdW5pY2F0aW9ucywgSW5jLicsXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMixcbiAgICAgICAgICAgIHg6IDE4Ny4zNjc2Mzk1MTEyODcxNCxcbiAgICAgICAgICAgIHk6IDEwMS4yMDg0OTg0NzA4MDE4MVxuICAgICAgICB9XG4gICAgXSxcbiAgICBsaW5rczogW1xuICAgICAgICB7IHNvdXJjZTogJzY1MTYyMjcnLCB0YXJnZXQ6ICc1MzU4NTE0LTMnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjUxNjIyNycsIHRhcmdldDogJzU3NTU3MzctMycgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NTE2MjI3JywgdGFyZ2V0OiAnNTk0ODAwNi0xJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY1MTYyMjcnLCB0YXJnZXQ6ICc2NTE2MjI3LTQnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjUxNjIyNycsIHRhcmdldDogJ29yZ19id3E4M2piY2NLcUY0akpyUGNhUicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NTM1OTA5JywgdGFyZ2V0OiAnNjUzNTkwOS0xJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY1MzU5MDknLCB0YXJnZXQ6ICdvcmdfMTA3V0tOUGJ2RERLclpCbG13OFUnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjU0OTkwOCcsIHRhcmdldDogJzYzOTM2MDUtMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NTQ5OTA4JywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY1NTM1NjMnLCB0YXJnZXQ6ICc1NzE1NDUwLTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjU1MzU2MycsIHRhcmdldDogJzU3MTU0NTAtMicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NTUzNTYzJywgdGFyZ2V0OiAnNjU1MzU2My0zJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY1NTM1NjMnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjU1ODMyMCcsIHRhcmdldDogJzQ4MDk2OTctMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NTU4MzIwJywgdGFyZ2V0OiAnNDg2MzQyNS0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY1NTgzMjAnLCB0YXJnZXQ6ICc1MDk3MTIyLTInIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjU1ODMyMCcsIHRhcmdldDogJ29yZ19HVk1sTFZid0NEU2lxUDlPZzhUbicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NTU4MzUxJywgdGFyZ2V0OiAnNTA5NzEyMi0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY1NTgzNTEnLCB0YXJnZXQ6ICc1MjM3MTc4LTInIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjU1ODM1MScsIHRhcmdldDogJzUyNTc5NzEtMicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NTU4MzUxJywgdGFyZ2V0OiAnNjQyNDg0Ny0zJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY1NTgzNTEnLCB0YXJnZXQ6ICc2NTU4MzUxLTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjU1ODM1MScsIHRhcmdldDogJzY1NTgzNTEtMicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NTU4MzUxJywgdGFyZ2V0OiAnNjU1ODM1MS0zJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY1NTgzNTEnLCB0YXJnZXQ6ICc2NTU4MzUxLTgnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjU1ODM1MScsIHRhcmdldDogJ29yZ19HVk1sTFZid0NEU2lxUDlPZzhUbicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NTYwNDYxJywgdGFyZ2V0OiAnNTkxODE1OS0xJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY1NjA0NjEnLCB0YXJnZXQ6ICc1OTE4MTU5LTInIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjU2MzE3NCcsIHRhcmdldDogJzQyNTMwNjEtMycgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NTYzMTc0JywgdGFyZ2V0OiAnNDkwMjY3MS0zJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY1NjMxNzQnLCB0YXJnZXQ6ICc0OTk3MjYyLTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjU2MzE3NCcsIHRhcmdldDogJzU5MjUyMjQtMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NTYzMTc0JywgdGFyZ2V0OiAnb3JnX0NNV2NvQ0pXUE9maXNMV3JLdnlkJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY1NjMxNzQnLCB0YXJnZXQ6ICdwZXJfRElqVVRNN2xIaERzQXoydThqaU8nIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjU2MzE3NCcsIHRhcmdldDogJ3Blcl90WDJlMnlWTGd5TmdvYkVweldLVCcgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NTY1NTA5JywgdGFyZ2V0OiAnNDA4MjYwMi0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY1NjU1MDknLCB0YXJnZXQ6ICc1MDQxMDg2LTQnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjU2NTUwOScsIHRhcmdldDogJzUzMDY2MjMtMycgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NTY1NTA5JywgdGFyZ2V0OiAnNTUzMzIzOC0xJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY1NjU1MDknLCB0YXJnZXQ6ICc1NTM0MTMyLTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjU2NTUwOScsIHRhcmdldDogJzU2MTY1MzItMycgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NTY1NTA5JywgdGFyZ2V0OiAnNTcyMjk5Ny0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY1NjU1MDknLCB0YXJnZXQ6ICc1OTAxODk2LTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjU2NTUwOScsIHRhcmdldDogJzYxMDMwMzMtNycgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NTY1NTA5JywgdGFyZ2V0OiAnNjE3NTc1Mi05JyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY1NjU1MDknLCB0YXJnZXQ6ICdvcmdfbTJ0TlBKa0EyZzFBV09jN3V6UzEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjU3MTI4MicsIHRhcmdldDogJzYwODE1MTgtMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NTcxMjgyJywgdGFyZ2V0OiAnb3JnXzR6TzJCYzA4eDU2WGpEcTVUZUJwJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY1NzQ2MzUnLCB0YXJnZXQ6ICc1NzE1NDUwLTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjU3NDYzNScsIHRhcmdldDogJzU3MTU0NTAtMicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NTc0NjM1JywgdGFyZ2V0OiAnNTk2Mzk1My0zJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY1NzQ2MzUnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjU3NzcyNicsIHRhcmdldDogJzY1Nzc3MjYtMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NTc3NzI2JywgdGFyZ2V0OiAnNjU3NzcyNi0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY1Nzc3MjYnLCB0YXJnZXQ6ICc2NTc3NzI2LTMnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjU3NzcyNicsIHRhcmdldDogJzY1Nzc3MjYtNCcgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NTc3NzI2JywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY1ODc4MzUnLCB0YXJnZXQ6ICc2NDMzOTIxLTInIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjU4NzgzNScsIHRhcmdldDogJzY1MjYzMzUtMicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NjAxMDg3JywgdGFyZ2V0OiAnNTI2MTAzNy0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY2MDEwODcnLCB0YXJnZXQ6ICc2NjAxMDg3LTInIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjYwMTA4NycsIHRhcmdldDogJ29yZ18zdkkyWjVrQzFTYVNsYlVCb09CVCcgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NjAyMjUyJywgdGFyZ2V0OiAnNDg5MDYxMS0zJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY2MDIyNTInLCB0YXJnZXQ6ICdvcmdfSjhWbkF6RnFFaldneHE0ZXY3MXonIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjYwNDExNycsIHRhcmdldDogJzU4NzMwOTYtMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NjA0MTE3JywgdGFyZ2V0OiAnNTg3MzA5Ni0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY2MDQxMTcnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjYwNDEyOCcsIHRhcmdldDogJzYzMjQ1NjgtMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NjA0MTI4JywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY2MDY3NDQnLCB0YXJnZXQ6ICc2NjA2NzQ0LTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjYwNjc0NCcsIHRhcmdldDogJ29yZ180ek8yQmMwOHg1NlhqRHE1VGVCcCcgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NjA5MTUwJywgdGFyZ2V0OiAnNTk2Mzk1My0xJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY2MDkxNTAnLCB0YXJnZXQ6ICc2MzM2MTM3LTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjYwOTE1MCcsIHRhcmdldDogJzYzMzYxMzctMycgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NjA5MTUwJywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY2MjE4MzQnLCB0YXJnZXQ6ICc1OTQ0NzkxLTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjYyMTgzNCcsIHRhcmdldDogJzY2MjE4MzQtMicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NjIxODM0JywgdGFyZ2V0OiAnb3JnX2s4VjdjNWdubUM3U1ZtdXA1VnU3JyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY2NDE1MzMnLCB0YXJnZXQ6ICc0ODA5Njk3LTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjY0MTUzMycsIHRhcmdldDogJzQ4NjM0MjUtMicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NjQxNTMzJywgdGFyZ2V0OiAnNTA5NzEyMi0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY2NDE1MzMnLCB0YXJnZXQ6ICdvcmdfR1ZNbExWYndDRFNpcVA5T2c4VG4nIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjY0NDUzMicsIHRhcmdldDogJzQxMjcyMjctMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NjQ0NTMyJywgdGFyZ2V0OiAnNDI4MzAyNC0xJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY2NDQ1MzInLCB0YXJnZXQ6ICc1MTc2NTAyLTMnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjY0NDUzMicsIHRhcmdldDogJ0QyNjM5ODctMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NjQ0NTMyJywgdGFyZ2V0OiAnRDMwNDIzNC0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY2NDQ1MzInLCB0YXJnZXQ6ICdSRTI4OTMyLTInIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjY0NDUzMicsIHRhcmdldDogJ29yZ181d05Ocko0ekZRNUtROE9XbnpSQycgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NjU0MDMyJywgdGFyZ2V0OiAnNTI2MTAzNy0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY2NTQwMzInLCB0YXJnZXQ6ICc1ODU1OTU3LTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjY1NDAzMicsIHRhcmdldDogJzY2MDEwODctMicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NjU0MDMyJywgdGFyZ2V0OiAnNjY1NDAzMi00JyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY2NTQwMzInLCB0YXJnZXQ6ICdvcmdfM3ZJMlo1a0MxU2FTbGJVQm9PQlQnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjY1NjE5MycsIHRhcmdldDogJzQ4OTIyNDQtNCcgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NjU2MTkzJywgdGFyZ2V0OiAnNTI3MTU0My0xJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY2NTYxOTMnLCB0YXJnZXQ6ICc1MzI5NjU1LTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjY1NjE5MycsIHRhcmdldDogJzU0MDk0OTgtNCcgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NjU2MTkzJywgdGFyZ2V0OiAnNTcwNzM2OS0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY2NTYxOTMnLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjY2NTY0OCcsIHRhcmdldDogJzY2NjU2NDgtMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NjY1NjQ4JywgdGFyZ2V0OiAnNjY2NTY0OC0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY2NjU2NDgnLCB0YXJnZXQ6ICc2NjY1NjQ4LTMnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjY2NTY0OCcsIHRhcmdldDogJzY2NjU2NDgtNCcgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NjY1NjQ4JywgdGFyZ2V0OiAnNjY2NTY0OC01JyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY2NjU2NDgnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjY2NTY1NScsIHRhcmdldDogJzY0MzQ1NTAtMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NjY1NjU1JywgdGFyZ2V0OiAnNjY2NTY1NS0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY2NjU2NTUnLCB0YXJnZXQ6ICdvcmdfNnI5dDdaQTZZVDAzMU9kNGtNUGcnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjY4NDQzOCcsIHRhcmdldDogJzU4NzMwOTYtMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2Njg0NDM4JywgdGFyZ2V0OiAnNjA5MjA4My0xJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY2ODQ0MzgnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjY5MDM4NycsIHRhcmdldDogJzYyODE4OTgtMicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NjkwMzg3JywgdGFyZ2V0OiAnNjY5MDM4Ny0xJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY2OTAzODcnLCB0YXJnZXQ6ICdvcmdfRnZndkdGZThKWjBpWWxaODB3ZUYnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjY5MzIzMicsIHRhcmdldDogJzU0MTYyNTUtMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NjkzMjMyJywgdGFyZ2V0OiAnb3JnX01LdmJuQ2N5UHVkWGV4VXZzU3dGJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY2OTg2NDMnLCB0YXJnZXQ6ICc2MjY0MDg3LTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjY5ODY0MycsIHRhcmdldDogJ29yZ19BVE9XSGQ0R0dhb2gxNHp1dFhxNycgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NzExNTY1JywgdGFyZ2V0OiAnNjcxMTU2NS0xJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY3MTE1NjUnLCB0YXJnZXQ6ICc2NzExNTY1LTInIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjcxMTU2NScsIHRhcmdldDogJzY3MTE1NjUtMycgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NzExNTY1JywgdGFyZ2V0OiAnNjcxMTU2NS00JyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY3MTE1NjUnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjcxNjIzMycsIHRhcmdldDogJzYyNjQwODctMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NzE2MjMzJywgdGFyZ2V0OiAnb3JnX0FUT1dIZDRHR2FvaDE0enV0WHE3JyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY3MTgzNjEnLCB0YXJnZXQ6ICc2MjIzMjA1LTInIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjcxODM2MScsIHRhcmdldDogJzYzNzA1ODQtMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NzE4MzYxJywgdGFyZ2V0OiAnNjcxODM2MS0xJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY3MTgzNjEnLCB0YXJnZXQ6ICc2NzE4MzYxLTInIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjcxODM2MScsIHRhcmdldDogJzY3MTgzNjEtMycgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NzE4MzYxJywgdGFyZ2V0OiAnNjcxODM2MS00JyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY3MTgzNjEnLCB0YXJnZXQ6ICc2NzE4MzYxLTUnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjcxODM2MScsIHRhcmdldDogJzY3MTgzNjEtOCcgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NzE4MzYxJywgdGFyZ2V0OiAnb3JnXzFwNEZXRW9JdGp5S2J3VHBDSm9sJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY3MjQzOTknLCB0YXJnZXQ6ICc2NzI0Mzk5LTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjcyNDM5OScsIHRhcmdldDogJzY3MjQzOTktMicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NzI0Mzk5JywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY3Mjc1MjInLCB0YXJnZXQ6ICc0MjUzMDYxLTMnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjcyNzUyMicsIHRhcmdldDogJzQ5MDI2NzEtMycgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NzI3NTIyJywgdGFyZ2V0OiAnb3JnX2M1dnlCeks3aWlra1U0RGpRRkhUJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY3Mjg3MDInLCB0YXJnZXQ6ICc2NTc3NzI2LTInIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjcyODcwMicsIHRhcmdldDogJzY3MTE1NjUtMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NzI4NzAyJywgdGFyZ2V0OiAnNjcxMTU2NS0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY3Mjg3MDInLCB0YXJnZXQ6ICc2NzExNTY1LTMnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjcyODcwMicsIHRhcmdldDogJzY3MTE1NjUtNCcgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NzI4NzAyJywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY3Mjg5NjAnLCB0YXJnZXQ6ICc2MzkzNjA1LTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjcyODk2MCcsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMDk1JywgdGFyZ2V0OiAnNTI0MzYyMi0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY3MzIwOTUnLCB0YXJnZXQ6ICc2NzMyMDk1LTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjczMjA5NScsIHRhcmdldDogJzY3MzIwOTUtMicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMDk1JywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY3MzIxMDAnLCB0YXJnZXQ6ICc1NzE1NDUwLTInIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjczMjEwMCcsIHRhcmdldDogJzY1Nzc3MjYtMicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMTAwJywgdGFyZ2V0OiAnNjU3NzcyNi00JyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY3MzIxMDAnLCB0YXJnZXQ6ICc2NjY1NjQ4LTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjczMjEwMCcsIHRhcmdldDogJzY3MzIxMDAtNCcgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMTAwJywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY3MzIxMTEnLCB0YXJnZXQ6ICc0OTUxMjc4LTInIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjczMjExMScsIHRhcmdldDogJzYwOTIwODMtMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMTExJywgdGFyZ2V0OiAnNjA5MjA4My0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY3MzIxMTEnLCB0YXJnZXQ6ICc2NzMyMTExLTQnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjczMjExMScsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NzU0NjgxJywgdGFyZ2V0OiAnNTg3MzA5Ni0xJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY3NTQ2ODEnLCB0YXJnZXQ6ICc2MDkyMDgzLTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjc1NDY4MScsIHRhcmdldDogJzYwOTIwODMtMicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NzU0NjgxJywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY3NjMzNTEnLCB0YXJnZXQ6ICc2NzExNTY1LTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjc2MzM1MScsIHRhcmdldDogJzY3MTE1NjUtMicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NzYzMzUxJywgdGFyZ2V0OiAnNjcxMTU2NS0zJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY3NjMzNTEnLCB0YXJnZXQ6ICc2NzExNTY1LTQnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjc2MzM1MScsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NzYzNTAxJywgdGFyZ2V0OiAnNTI2MTAzNy0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY3NjM1MDEnLCB0YXJnZXQ6ICc1ODU1OTU3LTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjc2MzUwMScsIHRhcmdldDogJzY2MDEwODctMicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NzYzNTAxJywgdGFyZ2V0OiAnNjY1NDAzMi00JyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY3NjM1MDEnLCB0YXJnZXQ6ICdvcmdfM3ZJMlo1a0MxU2FTbGJVQm9PQlQnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjc2ODkwNCcsIHRhcmdldDogJzYxODM1ODktMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NzY4OTA0JywgdGFyZ2V0OiAnb3JnX1hjcUNqdFQ4cGk4TWszVWpRbER0JyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY3ODIzODMnLCB0YXJnZXQ6ICc2NzExNTY1LTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjc4MjM4MycsIHRhcmdldDogJzY3MTE1NjUtMicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NzgyMzgzJywgdGFyZ2V0OiAnNjcxMTU2NS0zJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY3ODIzODMnLCB0YXJnZXQ6ICc2NzExNTY1LTQnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjc4MjM4MycsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2NzgzNTI0JywgdGFyZ2V0OiAnNTg1OTkxNi0zJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY3ODM1MjQnLCB0YXJnZXQ6ICc2NzgzNTI0LTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjc4MzUyNCcsIHRhcmdldDogJ29yZ19mQTBhenFvQkdFem9Qb3k4NUp5dicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2Nzg2MzgyJywgdGFyZ2V0OiAnNjUzMDkzMi0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY3ODYzODInLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjgwNDMzMCcsIHRhcmdldDogJzU3MTU0NTAtMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA0MzMwJywgdGFyZ2V0OiAnNjI2ODgwMy0zJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY4MDQzMzAnLCB0YXJnZXQ6ICc2ODA0MzMwLTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjgwNDMzMCcsIHRhcmdldDogJzY4MDQzMzAtNCcgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA0MzMwJywgdGFyZ2V0OiAnNjgwNDMzMC01JyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY4MDQzMzAnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjgwOTY1MycsIHRhcmdldDogJzQwODIwOTctMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA5NjUzJywgdGFyZ2V0OiAnNDU2MTQ0NC0xJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY4MDk2NTMnLCB0YXJnZXQ6ICc0ODA5Njk3LTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjgwOTY1MycsIHRhcmdldDogJzQ4NjM0MjUtMicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA5NjUzJywgdGFyZ2V0OiAnNTA5NzEyMi0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY4MDk2NTMnLCB0YXJnZXQ6ICc1MjM3MTc4LTInIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjgwOTY1MycsIHRhcmdldDogJzUzODIyMzItMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA5NjUzJywgdGFyZ2V0OiAnNjgwOTY1My05JyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY4MDk2NTMnLCB0YXJnZXQ6ICdENDIzNzYxLTMnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjgwOTY1MycsIHRhcmdldDogJ29yZ19HVk1sTFZid0NEU2lxUDlPZzhUbicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI2NTY1JywgdGFyZ2V0OiAnNjI5NTUzMC0xJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY4MjY1NjUnLCB0YXJnZXQ6ICc2Mjk1NTMwLTInIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjgyNjU2NScsIHRhcmdldDogJ29yZ19aNTlhVUJHdFo5UDVRemRGaUttWicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI2NTgyJywgdGFyZ2V0OiAnNDM2MjM4Ny0xJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY4MjY1ODInLCB0YXJnZXQ6ICc2MDgxODc1LTInIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjgyNjU4MicsIHRhcmdldDogJzY4MjY1ODItMicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI2NTgyJywgdGFyZ2V0OiAnb3JnXzBqUFdNN1lxaHRYbTBsbTNmbTFZJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY4MjY3NDUnLCB0YXJnZXQ6ICc2MjMzNjE3LTInIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjgyNjc0NScsIHRhcmdldDogJzY1Nzc3MjYtMicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI2NzQ1JywgdGFyZ2V0OiAnNjgyNjc0NS0zJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY4MjY3NDUnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjgyOTY1NScsIHRhcmdldDogJzU5Nzg4MjktMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI5NjU1JywgdGFyZ2V0OiAnNjAwNDI3Ni0xMycgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI5NjU1JywgdGFyZ2V0OiAnNjgyOTY1NS0xJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY4Mjk2NTUnLCB0YXJnZXQ6ICc2ODI5NjU1LTInIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjgyOTY1NScsIHRhcmdldDogJzY4Mjk2NTUtMycgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI5NjU1JywgdGFyZ2V0OiAnNjgyOTY1NS02JyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY4Mjk2NTUnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjgzMDE3NCcsIHRhcmdldDogJzQ3OTg1OTQtMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2ODMwMTc0JywgdGFyZ2V0OiAnNTQ2NTg5NS0xJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY4MzAxNzQnLCB0YXJnZXQ6ICdvcmdfOGNzTWd0Z25OMG1SRVpwTlAxSmknIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjg0Mjc0OCcsIHRhcmdldDogJzY0MzQ1NTAtMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2ODQyNzQ4JywgdGFyZ2V0OiAnNjY2NTY1NS0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY4NDI3NDgnLCB0YXJnZXQ6ICdvcmdfNnI5dDdaQTZZVDAzMU9kNGtNUGcnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjg0MzQwMycsIHRhcmdldDogJzYyNjQwODctMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2ODQzNDAzJywgdGFyZ2V0OiAnb3JnX0FUT1dIZDRHR2FvaDE0enV0WHE3JyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY4NTAyNTInLCB0YXJnZXQ6ICc1Nzc0MzU3LTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjg1MDg5NScsIHRhcmdldDogJzYwOTIwODMtMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2ODUwODk1JywgdGFyZ2V0OiAnNjA5MjA4My0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY4NTA4OTUnLCB0YXJnZXQ6ICc2NTc3NzI2LTInIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjg1MDg5NScsIHRhcmdldDogJzY4NTA4OTUtMycgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2ODUwODk1JywgdGFyZ2V0OiAnNjg1MDg5NS01JyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY4NTA4OTUnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjg1MDk0OScsIHRhcmdldDogJzY4NTA5NDktMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2ODUwOTQ5JywgdGFyZ2V0OiAnNjg1MDk0OS0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY4NTA5NDknLCB0YXJnZXQ6ICc2ODUwOTQ5LTMnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjg1MDk0OScsIHRhcmdldDogJ29yZ18yNDJoSmVnd2ZRQ2VQOWhzZndwVycgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2ODUyOTE1JywgdGFyZ2V0OiAnNTI3NjI2Mi0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY4NTI5MTUnLCB0YXJnZXQ6ICdvcmdfTUt2Ym5DY3lQdWRYZXhVdnNTd0YnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjkwNTA1NycsIHRhcmdldDogJzU4OTc1NjMtNCcgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2OTA1MDU3JywgdGFyZ2V0OiAnNjkwNTA1Ny0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY5MDUwNTcnLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjk1OTg1MicsIHRhcmdldDogJzU2MzI0MzItNCcgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2OTU5ODUyJywgdGFyZ2V0OiAnNjkwNTA1Ny0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY5NTk4NTInLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjk2NDM2MycsIHRhcmdldDogJzU0MDk0OTgtNCcgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2OTY0MzYzJywgdGFyZ2V0OiAnNjk2NDM2My0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY5NjQzNjMnLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjk3ODkyMScsIHRhcmdldDogJzU2MzI0MzItNCcgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2OTc4OTIxJywgdGFyZ2V0OiAnNjkwNTA1Ny0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY5Nzg5MjEnLCB0YXJnZXQ6ICc2OTc4OTIxLTMnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNjk3ODkyMScsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc2OTgxNjI4JywgdGFyZ2V0OiAnNTQwOTQ5OC00JyB9LFxuICAgICAgICB7IHNvdXJjZTogJzY5ODE2MjgnLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzAwMDgxOCcsIHRhcmdldDogJzU2MzI0MzItNCcgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3MDAwODE4JywgdGFyZ2V0OiAnNjkwNTA1Ny0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzcwMDA4MTgnLCB0YXJnZXQ6ICc3MDAwODE4LTMnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzAwMDgxOCcsIHRhcmdldDogJ29yZ19YdTZnWFNzbHREQlpUQWhNRkJXRCcgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3MDI1NzQzJywgdGFyZ2V0OiAnNDA4MjA5Ny0xJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzcwMjU3NDMnLCB0YXJnZXQ6ICc0NTYxNDQ0LTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzAyNTc0MycsIHRhcmdldDogJzQ4MDk2OTctMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3MDI1NzQzJywgdGFyZ2V0OiAnNTE3NjY0NC0xJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzcwMjU3NDMnLCB0YXJnZXQ6ICc1MzgyMjMyLTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzAyNTc0MycsIHRhcmdldDogJzY1NTEyNzYtMTAnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzAyNTc0MycsIHRhcmdldDogJzY1NTEyNzYtMTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzAyNTc0MycsIHRhcmdldDogJzY1NTEyNzYtMTInIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzAyNTc0MycsIHRhcmdldDogJzY1NTEyNzYtMycgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3MDI1NzQzJywgdGFyZ2V0OiAnNjU1MTI3Ni00JyB9LFxuICAgICAgICB7IHNvdXJjZTogJzcwMjU3NDMnLCB0YXJnZXQ6ICc2NTUxMjc2LTgnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzAyNTc0MycsIHRhcmdldDogJzY1NTEyNzYtOScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3MDI1NzQzJywgdGFyZ2V0OiAnb3JnX0dWTWxMVmJ3Q0RTaXFQOU9nOFRuJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzcwNDkxOTAnLCB0YXJnZXQ6ICc2MDgwOTk4LTMnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzA0OTE5MCcsIHRhcmdldDogJzY5MTQxODItMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3MDQ5MTkwJywgdGFyZ2V0OiAnb3JnXzJJRjk3elZ5bVN1cmFTblVBWG1xJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzcwNTU3MzEnLCB0YXJnZXQ6ICc1NjMyNDMyLTQnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzA1NTczMScsIHRhcmdldDogJzY5MDUwNTctMicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3MDU1NzMxJywgdGFyZ2V0OiAnNjk3ODkyMS0zJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzcwNTU3MzEnLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzA2MTAxNCcsIHRhcmdldDogJzQ0ODY3MjAtMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3MDYxMDE0JywgdGFyZ2V0OiAnNDcwMzAxOS0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzcwNjEwMTQnLCB0YXJnZXQ6ICc1MjcyMDY5LTYnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzA2MTAxNCcsIHRhcmdldDogJzU2MjI2NTMtMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3MDYxMDE0JywgdGFyZ2V0OiAnNzA2MTAxNC00JyB9LFxuICAgICAgICB7IHNvdXJjZTogJzcwNjEwMTQnLCB0YXJnZXQ6ICc3MDYxMDE0LTYnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzA2MTAxNCcsIHRhcmdldDogJ29yZ19EdHRaTXZreXZXM2ZWNm9DVU1URicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3MDY0MzQ2JywgdGFyZ2V0OiAnNDI1MzA2MS0zJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzcwNjQzNDYnLCB0YXJnZXQ6ICc0OTAyNjcxLTMnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzA2NDM0NicsIHRhcmdldDogJ29yZ19EdHRaTXZreXZXM2ZWNm9DVU1URicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3MTA1ODY4JywgdGFyZ2V0OiAnNTg2MzMyNi0xJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzcxMDU4NjgnLCB0YXJnZXQ6ICc2ODg3NzM2LTQnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzEwNTg2OCcsIHRhcmdldDogJ29yZ18wZVRyM1hJQmpBS3BYa0M2ODIzcicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3MTExNzY5JywgdGFyZ2V0OiAnNTQwOTQ5OC00JyB9LFxuICAgICAgICB7IHNvdXJjZTogJzcxMTE3NjknLCB0YXJnZXQ6ICc1ODk3NTYzLTQnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzExMTc2OScsIHRhcmdldDogJzY1MzA5MzItMicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3MTExNzY5JywgdGFyZ2V0OiAnNjkwNTA1Ny0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzcxMTE3NjknLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzE0NzEzOCcsIHRhcmdldDogJzY5MDUwNTctMicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3MTQ3MTM4JywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzcxNTk3NTAnLCB0YXJnZXQ6ICc0ODcyNjAzLTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzE1OTc1MCcsIHRhcmdldDogJzU3MTM5MTEtMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3MTU5NzUwJywgdGFyZ2V0OiAnNTcxMzkxMS0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzcxNTk3NTAnLCB0YXJnZXQ6ICc3MTU5NzUwLTQnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzE1OTc1MCcsIHRhcmdldDogJzcxNTk3NTAtNScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3MTU5NzUwJywgdGFyZ2V0OiAnb3JnX2V3VnNDdXRwUnpEOXBUMDdrQm9FJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzcyMTE4MjUnLCB0YXJnZXQ6ICc1MDgxNDIyLTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzIxMTgyNScsIHRhcmdldDogJzUyODM0NTItMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3MjExODI1JywgdGFyZ2V0OiAnNTcwMzM1Ny0zJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzcyMTE4MjUnLCB0YXJnZXQ6ICc2NTkzODM0LTInIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzI0NjczNCcsIHRhcmdldDogJzY5MDUwNTctMicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3MjQ2NzM0JywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzcyODI3ODInLCB0YXJnZXQ6ICc2MTQ0Njc5LTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzI4Mjc4MicsIHRhcmdldDogJzYxNTI5ODctMicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3MjgyNzgyJywgdGFyZ2V0OiAnNjgzNjU0MC02JyB9LFxuICAgICAgICB7IHNvdXJjZTogJzcyODI3ODInLCB0YXJnZXQ6ICdvcmdfdlM2cmNLeWMycU4zckZkWDBQMksnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzI5Nzk3NycsIHRhcmdldDogJzYxNDQ2NzktMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3Mjk3OTc3JywgdGFyZ2V0OiAnNjE1Mjk4Ny0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzcyOTc5NzcnLCB0YXJnZXQ6ICc2ODM2NTQwLTYnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzI5Nzk3NycsIHRhcmdldDogJ29yZ192UzZyY0t5YzJxTjNyRmRYMFAySycgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3MzIzMzU2JywgdGFyZ2V0OiAnNDQ4NjcyMC0xJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzczMjMzNTYnLCB0YXJnZXQ6ICc0NzAzMDE5LTInIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzMyMzM1NicsIHRhcmdldDogJzUyNzIwNjktNicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3MzIzMzU2JywgdGFyZ2V0OiAnNTYyMjY1My0xJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzczMjMzNTYnLCB0YXJnZXQ6ICc3MDYxMDE0LTQnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzMyMzM1NicsIHRhcmdldDogJzczMjMzNTYtNScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3MzIzMzU2JywgdGFyZ2V0OiAnb3JnX0R0dFpNdmt5dlczZlY2b0NVTVRGJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzczNDA0MTEnLCB0YXJnZXQ6ICc3MzQwNDExLTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzM4MDY5NScsIHRhcmdldDogJzU0MDk0OTgtNCcgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3MzgwNjk1JywgdGFyZ2V0OiAnNTYzMjQzMi00JyB9LFxuICAgICAgICB7IHNvdXJjZTogJzczODA2OTUnLCB0YXJnZXQ6ICc2OTA1MDU3LTInIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzM4MDY5NScsIHRhcmdldDogJzcwODMwNzUtMycgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3MzgwNjk1JywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzczODA2OTYnLCB0YXJnZXQ6ICc1NjMyNDMyLTQnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzM4MDY5NicsIHRhcmdldDogJzY5MDUwNTctMicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3MzgwNjk2JywgdGFyZ2V0OiAnNzA4MzA3NS0zJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzczODA2OTYnLCB0YXJnZXQ6ICc3MzgwNjk2LTMnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzM4MDY5NicsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3Mzg1MjI0JywgdGFyZ2V0OiAnNTA0MTIwMC0xJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzczODUyMjQnLCB0YXJnZXQ6ICc1MDQxMjAwLTQnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzM4NTIyNCcsIHRhcmdldDogJzczODUyMjQtMicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3Mzg1MjI0JywgdGFyZ2V0OiAnNzM4NTIyNC0zJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzczODUyMjQnLCB0YXJnZXQ6ICdvcmdfSW1lZzlXNlAxVEU2STJRdXRTNHknIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzQwMjUwNicsIHRhcmdldDogJzU1MTI0MjYtMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3NDAyNTA2JywgdGFyZ2V0OiAnNjA0ODExMC0zJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzc0MDI1MDYnLCB0YXJnZXQ6ICc3NDAyNTA2LTInIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzQwMjUwNicsIHRhcmdldDogJ29yZ19wcEVsa0V0UXZGdEc2QTQ3NTRVSScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3NDA0NTA4JywgdGFyZ2V0OiAnNDY4MjU5Ni0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzc0MDQ1MDgnLCB0YXJnZXQ6ICc1MTE3ODM4LTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzQwNDUwOCcsIHRhcmdldDogJzU3MTU2NzUtMicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3NDA0NTA4JywgdGFyZ2V0OiAnNjkxMjgzOS0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzc0MDQ1MDgnLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzQxMTIwOScsIHRhcmdldDogJzUzNDU2MzktNicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3NDExMjA5JywgdGFyZ2V0OiAnNTQxNzc3MC04JyB9LFxuICAgICAgICB7IHNvdXJjZTogJzc0MTEyMDknLCB0YXJnZXQ6ICc3MDgyODMyLTQnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzQxMTIwOScsIHRhcmdldDogJ29yZ19FaFlGUElKRW1ZUVlSb1l2c25weScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3NDUzMDY1JywgdGFyZ2V0OiAnNDA3MjIzNi0xJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzc0NTMwNjUnLCB0YXJnZXQ6ICc0MzU2NDU1LTMnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzQ1MzA2NScsIHRhcmdldDogJzQ3MDMwMTktMicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3NDUzMDY1JywgdGFyZ2V0OiAnNzA2MTAxNC02JyB9LFxuICAgICAgICB7IHNvdXJjZTogJzc0NTMwNjUnLCB0YXJnZXQ6ICdvcmdfRWhZRlBJSkVtWVFZUm9ZdnNucHknIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzQ1MzA2NScsIHRhcmdldDogJ29yZ19KanJNNlVtZU9ZMFE1TW1vTmlQOCcgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3NDUzMDg3JywgdGFyZ2V0OiAnNTM0NTYzOS02JyB9LFxuICAgICAgICB7IHNvdXJjZTogJzc0NTMwODcnLCB0YXJnZXQ6ICdvcmdfRWhZRlBJSkVtWVFZUm9ZdnNucHknIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzQ2Mjg2MicsIHRhcmdldDogJzYxNDQ2NzktMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3NDYyODYyJywgdGFyZ2V0OiAnNjgzNjU0MC02JyB9LFxuICAgICAgICB7IHNvdXJjZTogJzc0NjI4NjInLCB0YXJnZXQ6ICdvcmdfdlM2cmNLeWMycU4zckZkWDBQMksnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzQ2NDg0NicsIHRhcmdldDogJzQ0MDM2ODctMicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3NDY0ODQ2JywgdGFyZ2V0OiAnNTg5NzU2My00JyB9LFxuICAgICAgICB7IHNvdXJjZTogJzc0NjQ4NDYnLCB0YXJnZXQ6ICc2OTA1MDU3LTInIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzQ2NDg0NicsIHRhcmdldDogJzcwODMwNzUtMycgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3NDY0ODQ2JywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzc0NjgzMDQnLCB0YXJnZXQ6ICc2ODYzMzYzLTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzQ2ODMwNCcsIHRhcmdldDogJzc0NjgzMDQtMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3NDY4MzA0JywgdGFyZ2V0OiAnb3JnX0VoWUZQSUpFbVlRWVJvWXZzbnB5JyB9LFxuICAgICAgICB7IHNvdXJjZTogJzc1MDEyOTMnLCB0YXJnZXQ6ICc0MjI0NzI1LTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzUwMTI5MycsIHRhcmdldDogJzQ1NzM0NzItMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3NTAxMjkzJywgdGFyZ2V0OiAnb3JnX2o1VTVJRWExRkliZ3RyN2lOc1FNJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzc1MDY3OTEnLCB0YXJnZXQ6ICc0NDAzNjg3LTInIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzUwNjc5MScsIHRhcmdldDogJzQ5NzIyMjQtMScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3NTA2NzkxJywgdGFyZ2V0OiAnNjkwNTA1Ny0yJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzc1MDY3OTEnLCB0YXJnZXQ6ICdSRTM5ODQxLTQnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzUwNjc5MScsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3NjIwNjU1JywgdGFyZ2V0OiAnNTk0ODc4OS0xJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzc2MjA2NTUnLCB0YXJnZXQ6ICc3NjIwNjU1LTInIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzYyMDY1NScsIHRhcmdldDogJ29yZ19XaDJjbk9JektsaHpqdXFWbU9xWScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3NjMyOTg1JywgdGFyZ2V0OiAnNzA3ODUwMy0zJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzc2MzI5ODUnLCB0YXJnZXQ6ICc3NjA4NzYxLTQnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzYzMjk4NScsIHRhcmdldDogJzc2MzI5ODUtMycgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3NjMyOTg1JywgdGFyZ2V0OiAnNzYzMjk4NS00JyB9LFxuICAgICAgICB7IHNvdXJjZTogJzc2MzI5ODUnLCB0YXJnZXQ6ICdvcmdfUXc4RXNyTjBNNTJuVlFVTTZ2c1YnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzY2MzYwNycsIHRhcmdldDogJzU1OTQxNjktMicgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3NjYzNjA3JywgdGFyZ2V0OiAnNjY1ODU3Ny0xJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzc2NjM2MDcnLCB0YXJnZXQ6ICc3MTU0NDc3LTInIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzY2MzYwNycsIHRhcmdldDogJ29yZ19JRFViUzA5WlIwSmhKOGpGRXB0VCcgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3Njc0NjUwJywgdGFyZ2V0OiAnNjYzOTI0Ni0xJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzc2NzQ2NTAnLCB0YXJnZXQ6ICc2ODM4Mzk3LTMnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzY3NDY1MCcsIHRhcmdldDogJzcyMDU3MTYtNScgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3Njc0NjUwJywgdGFyZ2V0OiAnb3JnX3BsWmJMeGl5c0VTYmFJOXBPZXltJyB9LFxuICAgICAgICB7IHNvdXJjZTogJzc3MzI4MTknLCB0YXJnZXQ6ICc2NjM5MjQ2LTEnIH0sXG4gICAgICAgIHsgc291cmNlOiAnNzczMjgxOScsIHRhcmdldDogJzY4MzgzOTctMycgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc3NzMyODE5JywgdGFyZ2V0OiAnNzIwNTcxNi01JyB9LFxuICAgICAgICB7IHNvdXJjZTogJzc3MzI4MTknLCB0YXJnZXQ6ICdvcmdfcGxaYkx4aXlzRVNiYUk5cE9leW0nIH0sXG4gICAgICAgIHsgc291cmNlOiAnODA1MzE4NCcsIHRhcmdldDogJzcwNzg1MDMtMycgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc4MDUzMTg0JywgdGFyZ2V0OiAnNzYwODc2MS00JyB9LFxuICAgICAgICB7IHNvdXJjZTogJzgwNTMxODQnLCB0YXJnZXQ6ICc3NjMyOTg1LTMnIH0sXG4gICAgICAgIHsgc291cmNlOiAnODA1MzE4NCcsIHRhcmdldDogJzc2MzI5ODUtNCcgfSxcbiAgICAgICAgeyBzb3VyY2U6ICc4MDUzMTg0JywgdGFyZ2V0OiAnb3JnX1F3OEVzck4wTTUyblZRVU02dnNWJyB9XG4gICAgXVxufVxuIiwiaW1wb3J0ICogYXMgaW50ZXJmYWNlcyBmcm9tICcuLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IE5ldFYgZnJvbSAnLi4vaW5kZXgnXG5pbXBvcnQgeyBvdmVycmlkZSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJ1xuaW1wb3J0IHsgRU1QVFlfRlVOQ1RJT04gfSBmcm9tICcuLi91dGlscy9jb25zdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudCB7XG4gICAgcHVibGljIHJlYWRvbmx5IHR5cGU6IHN0cmluZ1xuICAgIHB1YmxpYyAkX3N0eWxlOiBpbnRlcmZhY2VzLk5vZGVTdHlsZSB8IGludGVyZmFjZXMuTGlua1N0eWxlID0ge31cbiAgICBwdWJsaWMgJF9tb3VzZWRvd25DYWxsYmFja1NldDogU2V0PChlOiBhbnkpID0+IHZvaWQ+ID0gbmV3IFNldCgpXG4gICAgcHVibGljICRfbW91c2V1cENhbGxiYWNrU2V0OiBTZXQ8KGU6IGFueSkgPT4gdm9pZD4gPSBuZXcgU2V0KClcbiAgICBwdWJsaWMgJF9tb3VzZW92ZXJDYWxsYmFja1NldDogU2V0PChlOiBhbnkpID0+IHZvaWQ+ID0gbmV3IFNldCgpXG4gICAgcHVibGljICRfbW91c2VvdXRDYWxsYmFja1NldDogU2V0PChlOiBhbnkpID0+IHZvaWQ+ID0gbmV3IFNldCgpXG4gICAgcHVibGljICRfbW91c2Vtb3ZlQ2FsbGJhY2tTZXQ6IFNldDwoZTogYW55KSA9PiB2b2lkPiA9IG5ldyBTZXQoKVxuICAgIHB1YmxpYyAkX2NsaWNrQ2FsbGJhY2tTZXQ6IFNldDwoZTogYW55KSA9PiB2b2lkPiA9IG5ldyBTZXQoKVxuXG4gICAgcHJvdGVjdGVkICRfY29yZTogTmV0VlxuICAgIHByb3RlY3RlZCAkX2NoYW5nZVJlbmRlckF0dHJpYnV0ZTogKGVsZW1lbnQ6IEVsZW1lbnQsIGtleTogc3RyaW5nKSA9PiB2b2lkXG5cbiAgICBwcm90ZWN0ZWQgJF9hdHRyaWJ1dGVzID0ge31cblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICAgICAgY29yZTogTmV0VixcbiAgICAgICAgZGF0YTogaW50ZXJmYWNlcy5Ob2RlRGF0YSB8IGludGVyZmFjZXMuTGlua0RhdGEsXG4gICAgICAgIHR5cGU6ICdOb2RlJyB8ICdMaW5rJ1xuICAgICkge1xuICAgICAgICB0aGlzLiRfY29yZSA9IGNvcmVcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZVxuICAgICAgICBjb25zdCBkZWZhdWx0Q29uZmlncyA9IHRoaXMuJF9jb3JlLiRfY29uZmlnc1xuXG4gICAgICAgIC8vIG92ZXJyaWRlIGRlZmF1bHQgc3R5bGUgd2l0aCB1c2VyIHNwZWNpZmllZCBzdHlsZSBpbiBkYXRhXG4gICAgICAgIC8vIHRoaXMuJF9zdHlsZSA9IG92ZXJyaWRlKGRlZmF1bHRDb25maWdzW3R5cGVdLnN0eWxlLCBkYXRhLnN0eWxlKVxuICAgICAgICB0aGlzLiRfc3R5bGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRlZmF1bHRDb25maWdzW3RoaXMudHlwZS50b0xvd2VyQ2FzZSgpXS5zdHlsZSkpXG4gICAgICAgIGlmICgnc3R5bGUnIGluIGRhdGEpIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGRhdGEuc3R5bGUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gdmFsdWVcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0ga2V5XG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlICE9PSBPYmplY3Qoc3R5bGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlIGlzIG5vdCBhbiBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kX3N0eWxlW25hbWVdID0gc3R5bGVcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAhIGlmIHRoZSBkZXB0aCBvZiBzdHlsZSBpcyBtb3JlIHRoYW4gb25lLCBpdCBjYW4gY2F1c2UgYnVnc1xuICAgICAgICAgICAgICAgICAgICAvLyAhIGUuZy4gc3R5bGUgPSB7IHh4OiB7Li4ufSwgeXk6IC4uLiB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJF9zdHlsZVtuYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuJF9zdHlsZVtuYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0eWxlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVuZGVyTWFuYWdlciA9IHRoaXMuJF9jb3JlLiRfcmVuZGVyZXJbYCR7dGhpcy50eXBlLnRvTG93ZXJDYXNlKCl9TWFuYWdlcmBdXG4gICAgICAgIHRoaXMuJF9jaGFuZ2VSZW5kZXJBdHRyaWJ1dGUgPSByZW5kZXJNYW5hZ2VyLmNoYW5nZUF0dHJpYnV0ZS5iaW5kKHJlbmRlck1hbmFnZXIpXG5cbiAgICAgICAgLy8gZ2VuZXJhdGUgc3R5bGUgbWV0aG9kcywgZS5nLjogbm9kZS5yKCksIGxpbmsuc3Ryb2tlV2lkdGgoKVxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLiRfc3R5bGUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgLy8gZ2VuZXJhdGUgc3R5bGUgZnVuY3Rpb25zXG4gICAgICAgICAgICB0aGlzW2tleV0gPSB0aGlzLmdlbmVyYXRlRWxlbWVudFN0eWxlR2V0dGVyU2V0dGVyKGtleSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAgICogQHBhcmFtIHsoZTogYW55KSA9PiBhbnl9IGNhbGxiYWNrXG4gICAgICogQG1lbWJlcm9mIEVsZW1lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgb24oZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrPzogKGU6IGFueSkgPT4gYW55KSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGV2ZW50TmFtZS5zbGljZSgwLCA0KSAhPT0gJ2RyYWcnIHx8XG4gICAgICAgICAgICAoZXZlbnROYW1lLnNsaWNlKDAsIDQpID09PSAnZHJhZycgJiYgdGhpcy50eXBlID09PSAnTm9kZScpIC8vIG9ubHkgbm9kZSBjYW4gYmUgZHJhZ2dlZFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrU2V0TmFtZSA9IGAkXyR7ZXZlbnROYW1lfUNhbGxiYWNrU2V0YFxuICAgICAgICAgICAgdGhpc1tjYWxsYmFja1NldE5hbWVdPy5hZGQoY2FsbGJhY2sgPyBjYWxsYmFjayA6IEVNUFRZX0ZVTkNUSU9OKVxuICAgICAgICAgICAgaWYgKHRoaXNbY2FsbGJhY2tTZXROYW1lXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfaW50ZXJhY3Rpb25NYW5hZ2VyLmluY3JlYXNlTW91c2VFdmVudENhbGxiYWNrQ291bnRCeSgxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICAgICAqIEBwYXJhbSB7KGU6IGFueSkgPT4gYW55fSBjYWxsYmFja1xuICAgICAqIEBtZW1iZXJvZiBFbGVtZW50XG4gICAgICovXG4gICAgcHVibGljIG9mZihldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s6IChlOiBhbnkpID0+IGFueSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBldmVudE5hbWUuc2xpY2UoMCwgNCkgIT09ICdkcmFnJyB8fFxuICAgICAgICAgICAgKGV2ZW50TmFtZS5zbGljZSgwLCA0KSA9PT0gJ2RyYWcnICYmIHRoaXMudHlwZSA9PT0gJ05vZGUnKSAvLyBvbmx5IG5vZGUgY2FuIGJlIGRyYWdnZWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFja1NldE5hbWUgPSBgJF8ke2V2ZW50TmFtZX1DYWxsYmFja1NldGBcbiAgICAgICAgICAgIHRoaXNbY2FsbGJhY2tTZXROYW1lXT8uZGVsZXRlKGNhbGxiYWNrID8gY2FsbGJhY2sgOiBFTVBUWV9GVU5DVElPTilcbiAgICAgICAgICAgIGlmICh0aGlzW2NhbGxiYWNrU2V0TmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRfY29yZS4kX2ludGVyYWN0aW9uTWFuYWdlci5kZWNyZWFzZU1vdXNlRXZlbnRDYWxsYmFja0NvdW50QnkoMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGdldC9zZXQgY3VzdG9tIGF0dHJpYnV0ZXNcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgcHVibGljIGF0dHIoa2V5OiBzdHJpbmcsIHZhbHVlPzogYW55KSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICB0aGlzLiRfYXR0cmlidXRlc1trZXldID0gdmFsdWVcbiAgICAgICAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kX2F0dHJpYnV0ZXNba2V5XVxuICAgICAgICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuJF9hdHRyaWJ1dGVzKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2VuZXJhdGVFbGVtZW50U3R5bGVHZXR0ZXJTZXR0ZXIoa2V5OiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZT86IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IE9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFsdWUgaXMgYW4gb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJF9zdHlsZVtrZXldID0gb3ZlcnJpZGUodGhpcy4kX3N0eWxlW2tleV0sIHZhbHVlKSAvLyB7IC4uLnRoaXMuJF9zdHlsZVtrZXldLCAuLi52YWx1ZSB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kX3N0eWxlW2tleV0gPSB2YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRfY2hhbmdlUmVuZGVyQXR0cmlidXRlKHRoaXMsIGtleSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRfc3R5bGVba2V5XVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyoqXG4gKiBAYXV0aG9yIEppYWNoZW5nIFBhbiA8amFja2llYW54aXNAZ21haWwuY29tPlxuICogQGRlc2NyaXB0aW9uIFByb3ZpZGUgYSBMaW5rIGNsYXNzLlxuICogQGRlcGVuZGVuY2VzIGludGVyZmFjZXMudHMsIHV0aWxzL2lzLnRzXG4gKi9cblxuaW1wb3J0IE5vZGUgZnJvbSAnLi9ub2RlJ1xuaW1wb3J0ICogYXMgaW50ZXJmYWNlcyBmcm9tICcuLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IEVsZW1lbnQgZnJvbSAnLi9lbGVtZW50J1xuXG5jbGFzcyBMaW5rIGV4dGVuZHMgRWxlbWVudCB7XG4gICAgLy8gc3R5bGUgZ2V0dGVyL3NldHRlclxuICAgIHB1YmxpYyBzaGFwZTogKHZhbHVlPzogaW50ZXJmYWNlcy5MaW5rU2hhcGUpID0+IGludGVyZmFjZXMuTGlua1NoYXBlXG4gICAgcHVibGljIHN0cm9rZVdpZHRoOiAodmFsdWU/OiBudW1iZXIpID0+IG51bWJlclxuICAgIHB1YmxpYyBzdHJva2VDb2xvcjogKHZhbHVlPzogaW50ZXJmYWNlcy5Db2xvcikgPT4gaW50ZXJmYWNlcy5Db2xvclxuICAgIHB1YmxpYyBjdXJ2ZW5lc3M6ICh2YWx1ZT86IG51bWJlcikgPT4gbnVtYmVyXG4gICAgcHVibGljIGRhc2hJbnRlcnZhbDogKHZhbHVlPzogbnVtYmVyKSA9PiBudW1iZXJcblxuICAgIHB1YmxpYyAkX3NvdXJjZTogTm9kZVxuICAgIHB1YmxpYyAkX3RhcmdldDogTm9kZVxuXG4gICAgcHJpdmF0ZSAkX2VsZW1lbnRSZXNlcnZlZEtleXMgPSBuZXcgU2V0KFsnc291cmNlJywgJ3RhcmdldCcsICdzdHlsZSddKVxuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvcmUsIGxpbmtEYXRhOiBpbnRlcmZhY2VzLkxpbmtEYXRhKSB7XG4gICAgICAgIHN1cGVyKGNvcmUsIGxpbmtEYXRhLCAvKiB0eXBlOiAqLyAnTGluaycpXG5cbiAgICAgICAgLy8gc2V0IGF0dHJpYnV0ZXNcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbGlua0RhdGEpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy4kX2VsZW1lbnRSZXNlcnZlZEtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRfYXR0cmlidXRlc1trZXldID0gbGlua0RhdGFba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc291cmNlTm9kZSA9IHRoaXMuJF9jb3JlLmdldE5vZGVCeUlkKGxpbmtEYXRhLnNvdXJjZSlcbiAgICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IHRoaXMuJF9jb3JlLmdldE5vZGVCeUlkKGxpbmtEYXRhLnRhcmdldClcbiAgICAgICAgdGhpcy5zb3VyY2VUYXJnZXQoe1xuICAgICAgICAgICAgc291cmNlOiBzb3VyY2VOb2RlLFxuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXROb2RlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZ2V0dGVyL3NldHRlciBvZiB0aGUgc291cmNlXG4gICAgICogQHBhcmFtIHtOb2RlfSBbbm9kZV1cbiAgICAgKiBAcmV0dXJucyB7Tm9kZX0gYSBzb3VyY2UgTm9kZSBPYmplY3RcbiAgICAgKiBAbWVtYmVyb2YgTGlua1xuICAgICAqL1xuICAgIHB1YmxpYyBzb3VyY2Uobm9kZT86IE5vZGUpOiBOb2RlIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIC8vIHNldHRlclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VUYXJnZXQoe1xuICAgICAgICAgICAgICAgIHNvdXJjZTogbm9kZSxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMuJF90YXJnZXRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuJF9zb3VyY2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBnZXR0ZXIvc2V0dGVyIG9mIHRoZSB0YXJnZXRcbiAgICAgKiBAcGFyYW0ge05vZGV9IFtub2RlXVxuICAgICAqIEByZXR1cm5zIHtOb2RlfSBhIHRhcmdldCBOb2RlIE9iamVjdFxuICAgICAqIEBtZW1iZXJvZiBMaW5rXG4gICAgICovXG4gICAgcHVibGljIHRhcmdldChub2RlPzogTm9kZSk6IE5vZGUge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgLy8gc2V0dGVyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZVRhcmdldCh7XG4gICAgICAgICAgICAgICAgc291cmNlOiB0aGlzLiRfc291cmNlLFxuICAgICAgICAgICAgICAgIHRhcmdldDogbm9kZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy4kX3RhcmdldFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGdldHRlci9zZXR0ZXIgb2Ygc291cmNlIGFuZCB0YXJnZXRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c291cmNlVGFyZ2V0T2JqfSBbe3NvdXJjZTogTm9kZSwgdGFyZ2V0OiBOb2RlfV1cbiAgICAgKiBAcmV0dXJucyBPYmplY3Qge3NvdXJjZTogTm9kZSwgdGFyZ2V0OiBOb2RlfVxuICAgICAqIEBtZW1iZXJvZiBMaW5rXG4gICAgICovXG4gICAgcHVibGljIHNvdXJjZVRhcmdldChzb3VyY2VUYXJnZXRPYmo/OiB7IHNvdXJjZTogTm9kZTsgdGFyZ2V0OiBOb2RlIH0pIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBvbGRTb3VyY2U6IE5vZGUgPSB0aGlzLiRfc291cmNlXG4gICAgICAgICAgICBjb25zdCBvbGRUYXJnZXQ6IE5vZGUgPSB0aGlzLiRfdGFyZ2V0XG4gICAgICAgICAgICBjb25zdCBuZXdTb3VyY2UgPSBzb3VyY2VUYXJnZXRPYmouc291cmNlXG4gICAgICAgICAgICBjb25zdCBuZXdUYXJnZXQgPSBzb3VyY2VUYXJnZXRPYmoudGFyZ2V0XG4gICAgICAgICAgICBjb25zdCBuZXdTb3VyY2VJZCA9IG5ld1NvdXJjZS5pZCgpXG4gICAgICAgICAgICBjb25zdCBuZXdUYXJnZXRJZCA9IG5ld1RhcmdldC5pZCgpXG5cbiAgICAgICAgICAgIGlmIChuZXdTb3VyY2UgPT09IG5ld1RhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIGVycm9yOiBzZWxmIGxvb3BcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFNlbGYgbG9vcCAoJHtuZXdTb3VyY2VJZH0gPD0+ICR7bmV3VGFyZ2V0SWR9KSBpcyBub3QgYWxsb3dlZC5gKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy4kX2NvcmUuJF9lbmRzMmxpbmsuaGFzKFtuZXdTb3VyY2VJZCwgbmV3VGFyZ2V0SWRdKSkge1xuICAgICAgICAgICAgICAgIC8vIGVycm9yOiBtdWx0aXBsZSBsaW5rXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBsaW5rICgke25ld1NvdXJjZUlkfSA8PT4gJHtuZXdUYXJnZXRJZH0pIGlzIG5vdCBhbGxvd2QuYClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG9sZFNvdXJjZSAmJiBvbGRUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBkZWxldGUgb2xkIE1hcFxuICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfZW5kczJsaW5rLmRlbGV0ZShbb2xkU291cmNlLmlkKCksIG9sZFRhcmdldC5pZCgpXSlcblxuICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfc291cmNlSWQybGlua3MuZ2V0KG9sZFNvdXJjZS5pZCgpKT8uZGVsZXRlKHRoaXMpXG4gICAgICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF90YXJnZXRJZDJsaW5rcy5nZXQob2xkVGFyZ2V0LmlkKCkpPy5kZWxldGUodGhpcylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4kX3NvdXJjZSA9IG5ld1NvdXJjZVxuICAgICAgICAgICAgdGhpcy4kX3RhcmdldCA9IG5ld1RhcmdldFxuICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9lbmRzMmxpbmsuc2V0KFtuZXdTb3VyY2VJZCwgbmV3VGFyZ2V0SWRdLCB0aGlzKVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMuJF9jb3JlLiRfc291cmNlSWQybGlua3MuaGFzKG5ld1NvdXJjZUlkKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfc291cmNlSWQybGlua3Muc2V0KG5ld1NvdXJjZUlkLCBuZXcgU2V0KFt0aGlzXSkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfc291cmNlSWQybGlua3MuZ2V0KG5ld1NvdXJjZUlkKS5hZGQodGhpcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy4kX2NvcmUuJF90YXJnZXRJZDJsaW5rcy5oYXMobmV3VGFyZ2V0SWQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF90YXJnZXRJZDJsaW5rcy5zZXQobmV3VGFyZ2V0SWQsIG5ldyBTZXQoW3RoaXNdKSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF90YXJnZXRJZDJsaW5rcy5nZXQobmV3VGFyZ2V0SWQpLmFkZCh0aGlzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzb3VyY2U6IHRoaXMuJF9zb3VyY2UsXG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXMuJF90YXJnZXRcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBAYXV0aG9yIEppYWNoZW5nIFBhbiA8amFja2llYW54aXNAZ21haWwuY29tPlxuICogQGRlc2NyaXB0aW9uIFByb3ZpZGUgYSBOb2RlIGNsYXNzLlxuICogQGRlcGVuZGVuY2VzIGludGVyZmFjZXMudHMsIHV0aWxzL2lzLnRzXG4gKi9cblxuaW1wb3J0ICogYXMgaW50ZXJmYWNlcyBmcm9tICcuLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgaXNWYWxpZElkIH0gZnJvbSAnLi4vdXRpbHMvaXMnXG5pbXBvcnQgeyBMaW5rQXR0ciB9IGZyb20gJy4uL3JlbmRlcmVyL2ludGVyZmFjZXMnXG5pbXBvcnQgTGluayBmcm9tICcuL2xpbmsnXG5pbXBvcnQgRWxlbWVudCBmcm9tICcuL2VsZW1lbnQnXG5cbmNsYXNzIE5vZGUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgICAvLyBzdHlsZSBnZXR0ZXIvc2V0dGVyXG4gICAgcHVibGljIHNoYXBlOiAodmFsdWU/OiBpbnRlcmZhY2VzLk5vZGVTaGFwZSkgPT4gaW50ZXJmYWNlcy5Ob2RlU2hhcGVcbiAgICBwdWJsaWMgb2Zmc2V0OiAodmFsdWU/OiBpbnRlcmZhY2VzLlBvc2l0aW9uKSA9PiBpbnRlcmZhY2VzLlBvc2l0aW9uXG4gICAgcHVibGljIHN0cm9rZVdpZHRoOiAodmFsdWU/OiBudW1iZXIpID0+IG51bWJlclxuICAgIHB1YmxpYyBzdHJva2VDb2xvcjogKHZhbHVlPzogaW50ZXJmYWNlcy5Db2xvcikgPT4gaW50ZXJmYWNlcy5Db2xvclxuICAgIHB1YmxpYyBmaWxsOiAodmFsdWU/OiBpbnRlcmZhY2VzLkNvbG9yKSA9PiBpbnRlcmZhY2VzLkNvbG9yXG4gICAgLyogY2lyY2xlIHNoYXBlIHN0eWxlcyAqL1xuICAgIHB1YmxpYyByPzogKHZhbHVlPzogbnVtYmVyKSA9PiBudW1iZXJcbiAgICAvKiByZWN0IHNoYXBlIHN0eWxlcyAqL1xuICAgIHB1YmxpYyB3aWR0aD86ICh2YWx1ZT86IG51bWJlcikgPT4gbnVtYmVyIC8vIGFsc28gZm9yIGNyb3NzIHNoYXBlXG4gICAgcHVibGljIGhlaWdodD86ICh2YWx1ZT86IG51bWJlcikgPT4gbnVtYmVyIC8vIGFsc28gZm9yIGNyb3NzIHNoYXBlXG4gICAgcHVibGljIHJvdGF0ZT86ICh2YWx1ZT86IG51bWJlcikgPT4gbnVtYmVyXG4gICAgLyogdHJpYW5nbGUgc2hhcGUgc3R5bGVzICovXG4gICAgcHVibGljIHZlcnRleEFscGhhOiAodmFsdWU/OiBpbnRlcmZhY2VzLlBvc2l0aW9uKSA9PiBpbnRlcmZhY2VzLlBvc2l0aW9uXG4gICAgcHVibGljIHZlcnRleEJldGE6ICh2YWx1ZT86IGludGVyZmFjZXMuUG9zaXRpb24pID0+IGludGVyZmFjZXMuUG9zaXRpb25cbiAgICBwdWJsaWMgdmVydGV4R2FtbWE6ICh2YWx1ZT86IGludGVyZmFjZXMuUG9zaXRpb24pID0+IGludGVyZmFjZXMuUG9zaXRpb25cbiAgICAvKiBjcm9zcyBzaGFwZSBzdHlsZXMgKi9cbiAgICBwdWJsaWMgaW5uZXJIZWlnaHQ6ICh2YWx1ZT86IG51bWJlcikgPT4gbnVtYmVyXG4gICAgcHVibGljIGlubmVyV2lkdGg6ICh2YWx1ZT86IG51bWJlcikgPT4gbnVtYmVyXG5cbiAgICBwdWJsaWMgJF9wb3NpdGlvbiA9IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgIH1cblxuICAgIHB1YmxpYyAkX2RyYWdzdGFydENhbGxiYWNrU2V0OiBTZXQ8KGU6IGFueSkgPT4gdm9pZD4gPSBuZXcgU2V0KClcbiAgICBwdWJsaWMgJF9kcmFnZ2luZ0NhbGxiYWNrU2V0OiBTZXQ8KGU6IGFueSkgPT4gdm9pZD4gPSBuZXcgU2V0KClcbiAgICBwdWJsaWMgJF9kcmFnZW5kQ2FsbGJhY2tTZXQ6IFNldDwoZTogYW55KSA9PiB2b2lkPiA9IG5ldyBTZXQoKVxuXG4gICAgcHJpdmF0ZSAkX2lkOiBzdHJpbmdcblxuICAgIHByaXZhdGUgJF9lbGVtZW50UmVzZXJ2ZWRLZXlzID0gbmV3IFNldChbJ2lkJywgJ3gnLCAneScsICdzdHlsZSddKVxuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvcmUsIG5vZGVEYXRhOiBpbnRlcmZhY2VzLk5vZGVEYXRhKSB7XG4gICAgICAgIHN1cGVyKGNvcmUsIG5vZGVEYXRhLCAvKiB0eXBlOiAqLyAnTm9kZScpXG5cbiAgICAgICAgLy8gc2V0IGF0dHJpYnV0ZXNcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbm9kZURhdGEpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy4kX2VsZW1lbnRSZXNlcnZlZEtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRfYXR0cmlidXRlc1trZXldID0gbm9kZURhdGFba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIC4uLntcbiAgICAgICAgICAgICAgICB4OiB0aGlzLiRfcG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICB5OiB0aGlzLiRfcG9zaXRpb24ueVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLm5vZGVEYXRhXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRfc2V0SWQoZGF0YS5pZClcbiAgICAgICAgdGhpcy4kX3Bvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogZGF0YS54LFxuICAgICAgICAgICAgeTogZGF0YS55XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBnZXR0ZXIgb2YgcHJpdmF0ZSBwcm9wZXJ0eSAkX2lkXG4gICAgICogQG1lbWJlcm9mIE5vZGVcbiAgICAgKi9cbiAgICBwdWJsaWMgaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRfaWRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBnZXQgbmVpZ2hib3Igbm9kZXMgZm9yIGN1cnJlbnQgbm9kZVxuICAgICAqL1xuICAgIHB1YmxpYyBuZWlnaGJvck5vZGVzKCkge1xuICAgICAgICAvLyBOT1RFOiBjdXJyZW50bHkgQVBJIG5vdCBpbnRlbnQgdG8gc3VwcG9ydCBkaXJlY3RlZCBncmFwaFxuICAgICAgICBsZXQgc291cmNlTGlua3MgPSB0aGlzLiRfY29yZS4kX3NvdXJjZUlkMmxpbmtzLmdldCh0aGlzLiRfaWQpXG4gICAgICAgIGlmICghc291cmNlTGlua3MpIHNvdXJjZUxpbmtzID0gbmV3IFNldCgpXG4gICAgICAgIGxldCB0YXJnZXRMaW5rcyA9IHRoaXMuJF9jb3JlLiRfdGFyZ2V0SWQybGlua3MuZ2V0KHRoaXMuJF9pZClcbiAgICAgICAgaWYgKCF0YXJnZXRMaW5rcykgdGFyZ2V0TGlua3MgPSBuZXcgU2V0KClcblxuICAgICAgICBjb25zdCBub2RlU2V0ID0gbmV3IFNldChbXG4gICAgICAgICAgICAuLi5bLi4uc291cmNlTGlua3NdLm1hcCgobGluaykgPT4gbGluay4kX3RhcmdldCksXG4gICAgICAgICAgICAuLi5bLi4udGFyZ2V0TGlua3NdLm1hcCgobGluaykgPT4gbGluay4kX3NvdXJjZSlcbiAgICAgICAgXSlcblxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShub2RlU2V0KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGdldCBuZWlnaGJvciBsaW5rcyBmb3IgY3VycmVudCBub2RlXG4gICAgICovXG4gICAgcHVibGljIG5laWdoYm9yTGlua3MoKSB7XG4gICAgICAgIC8vIE5PVEU6IGN1cnJlbnRseSBBUEkgbm90IGludGVudCB0byBzdXBwb3J0IGRpcmVjdGVkIGdyYXBoXG4gICAgICAgIGxldCBzb3VyY2VMaW5rcyA9IHRoaXMuJF9jb3JlLiRfc291cmNlSWQybGlua3MuZ2V0KHRoaXMuJF9pZClcbiAgICAgICAgaWYgKCFzb3VyY2VMaW5rcykgc291cmNlTGlua3MgPSBuZXcgU2V0KClcbiAgICAgICAgbGV0IHRhcmdldExpbmtzID0gdGhpcy4kX2NvcmUuJF90YXJnZXRJZDJsaW5rcy5nZXQodGhpcy4kX2lkKVxuICAgICAgICBpZiAoIXRhcmdldExpbmtzKSB0YXJnZXRMaW5rcyA9IG5ldyBTZXQoKVxuXG4gICAgICAgIGNvbnN0IGxpbmtTZXQgPSBuZXcgU2V0KFsuLi5zb3VyY2VMaW5rcywgLi4udGFyZ2V0TGlua3NdKVxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShsaW5rU2V0KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHNldC9nZXQgeCBwb3N0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFt2YWx1ZV1cbiAgICAgKiBAbWVtYmVyb2YgTm9kZVxuICAgICAqL1xuICAgIHB1YmxpYyB4KHZhbHVlPzogbnVtYmVyKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbih7XG4gICAgICAgICAgICAgICAgeDogdmFsdWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuJF9wb3NpdGlvbi54XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2V0L2dldCB5IHBvc3Rpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3ZhbHVlXVxuICAgICAqIEBtZW1iZXJvZiBOb2RlXG4gICAgICovXG4gICAgcHVibGljIHkodmFsdWU/OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uKHtcbiAgICAgICAgICAgICAgICB5OiB2YWx1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy4kX3Bvc2l0aW9uLnlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzZXQvZ2V0IHBvc3Rpb25cbiAgICAgKiBAbWVtYmVyb2YgTm9kZVxuICAgICAqL1xuICAgIHB1YmxpYyBwb3NpdGlvbihwb3NpdGlvbj86IGludGVyZmFjZXMuUG9zaXRpb24pIHtcbiAgICAgICAgbGV0IGxpbmtTZXRzID0ge31cblxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgKCd4JyBpbiBwb3NpdGlvbiB8fCAneScgaW4gcG9zaXRpb24pKSB7XG4gICAgICAgICAgICBpZiAoJ3gnIGluIHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kX3Bvc2l0aW9uWyd4J10gPSBwb3NpdGlvbi54XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ3knIGluIHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kX3Bvc2l0aW9uWyd5J10gPSBwb3NpdGlvbi55XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLiRfY29yZS4kX3JlbmRlcmVyLnNob3VsZExhenlVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kX3Bvc2l0aW9uXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxpbmtTZXRzID0ge1xuICAgICAgICAgICAgICAgICAgICAvLyBmaW5kIGxpbmtzIGZyb20vdG8gdGhpcyBub2RlXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZTogdGhpcy4kX2NvcmUuJF9zb3VyY2VJZDJsaW5rcy5nZXQodGhpcy4kX2lkKSxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLiRfY29yZS4kX3RhcmdldElkMmxpbmtzLmdldCh0aGlzLiRfaWQpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMobGlua1NldHMpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVudHJ5WzBdOiAnc291cmNlJyAvICd0YXJnZXQnXG4gICAgICAgICAgICAgICAgICAgIC8vIGVudHJ5WzFdOiB0aGUgbGluayBzZXRcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZW50cnlbMF0gYXMgTGlua0F0dHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2V0ID0gZW50cnlbMV0gYXMgU2V0PExpbms+XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfcmVuZGVyZXIuaW5jcmVhc2VNb2RpZmllZEVsZW1lbnRzQ291bnRCeShzZXQuc2l6ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbGluayBvZiBzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRfY29yZS4kX3JlbmRlcmVyLmxpbmtNYW5hZ2VyLmNoYW5nZUF0dHJpYnV0ZShsaW5rLCBrZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9yZW5kZXJlci5pbmNyZWFzZU1vZGlmaWVkRWxlbWVudHNDb3VudEJ5KDEpXG4gICAgICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9yZW5kZXJlci5ub2RlTWFuYWdlci5jaGFuZ2VBdHRyaWJ1dGUodGhpcywgJ3Bvc2l0aW9uJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLiRfcG9zaXRpb25cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzZXQgdGhlIGlkIG9mIHRoaXMgbm9kZS5cbiAgICAgKiBpdCBpcyBvbmx5IHVzZWQgZm9yIGNvbnN0cnVjdG9yXG4gICAgICogYmVjYXVzZSBhIG5vZGUncyBpZCBpcyBub3QgYWxsb3dlZCB0byBiZSBjaGFuZ2VkLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICogQHJldHVybnMgbm90aGluZ1xuICAgICAqIEBtZW1iZXJvZiBOb2RlXG4gICAgICovXG4gICAgcHJpdmF0ZSAkX3NldElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKGlzVmFsaWRJZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiRfY29yZS4kX2lkMm5vZGUuaGFzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRHVwbGljYXRlIG5vZGUgKCR7dmFsdWV9KSBpcyBub3QgYWxsb3dlZC5gKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzVmFsaWRJZCh0aGlzLiRfaWQpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IGNoYW5nZSB0aGUgaWQgb2YgYW4gZXhpc3Qgbm9kZS4nKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9pZDJub2RlLnNldCh2YWx1ZSwgdGhpcylcbiAgICAgICAgICAgIHRoaXMuJF9pZCA9IHZhbHVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgSUQgJHt2YWx1ZX1gKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb2RlXG4iLCIvKipcbiAqIEBhdXRob3IgSmlhY2hlbmcgUGFuIDxqYWNraWVhbnhpc0BnbWFpbC5jb20+XG4gKiBAZGVzY3JpcHRpb24gUHJvdmlkZSB0aGUgZW50cmFuY2Ugb2YgTmV0Vi5qcy5cbiAqIEBkZXBlbmRlbmNlcyBpbnRlcmZhY2VzLnRzLCB1dGlscy9tYXAyLmpzLCBub2RlLnRzLCBsaW5rLnRzXG4gKi9cblxuaW1wb3J0ICogYXMgaW50ZXJmYWNlcyBmcm9tICcuL2ludGVyZmFjZXMnXG5pbXBvcnQgTWFwMiBmcm9tICcuL3V0aWxzL21hcDInXG5pbXBvcnQgTm9kZSBmcm9tICcuL2VsZW1lbnRzL25vZGUnXG5pbXBvcnQgTGluayBmcm9tICcuL2VsZW1lbnRzL2xpbmsnXG5pbXBvcnQgKiBhcyBkZWZhdWx0Q29uZmlncyBmcm9tICcuL2NvbmZpZ3MnXG5pbXBvcnQgKiBhcyBkYXRhc2V0IGZyb20gJy4vZGF0YXNldCdcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi9yZW5kZXJlcidcbmltcG9ydCB7IEludGVyYWN0aW9uTWFuYWdlciB9IGZyb20gJy4vaW50ZXJhY3Rpb24vaW50ZXJhY3Rpb24nXG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzL3V0aWxzJ1xuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuL2ludGVyZmFjZXMnXG5pbXBvcnQgeyBFTVBUWV9GVU5DVElPTiB9IGZyb20gJy4vdXRpbHMvY29uc3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ldFYge1xuICAgIHB1YmxpYyBzdGF0aWMgVXRpbHMgPSBVdGlsc1xuXG4gICAgcHVibGljICRfaWQybm9kZSA9IG5ldyBNYXAoKVxuICAgIHB1YmxpYyAkX2VuZHMybGluayA9IG5ldyBNYXAyKClcbiAgICBwdWJsaWMgJF9zb3VyY2VJZDJsaW5rczogTWFwPHN0cmluZywgU2V0PExpbms+PiA9IG5ldyBNYXAoKVxuICAgIHB1YmxpYyAkX3RhcmdldElkMmxpbmtzOiBNYXA8c3RyaW5nLCBTZXQ8TGluaz4+ID0gbmV3IE1hcCgpXG4gICAgcHVibGljICRfY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudFxuICAgIHB1YmxpYyAkX2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnRcbiAgICBwdWJsaWMgJF9yZW5kZXJlcjogUmVuZGVyZXJcbiAgICBwdWJsaWMgJF9jb25maWdzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkZWZhdWx0Q29uZmlncykpIC8vIE5PVEU6IGRlZXAgY29weSBjb25maWdzXG5cbiAgICBwdWJsaWMgJF90cmFuc2Zvcm06IGludGVyZmFjZXMuVHJhbnNmb3JtID0geyB4OiAwLCB5OiAwLCBrOiAxIH1cblxuICAgIHB1YmxpYyAkX2xhenlVcGRhdGUgPSBmYWxzZSAvLyBmbGFnIHRvIGNvbnRyb2wgbGF6eSB1cGRhdGVcblxuICAgIHB1YmxpYyAkX2ludGVyYWN0aW9uTWFuYWdlcjogSW50ZXJhY3Rpb25NYW5hZ2VyXG4gICAgcHJpdmF0ZSAkX2RhdGE6IGludGVyZmFjZXMuTm9kZUxpbmtEYXRhID0geyBub2RlczogW10sIGxpbmtzOiBbXSB9XG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24gY3JlYXRlIE5ldFYgb2JqZWN0LlxuICAgICAqIEBwYXJhbSBjb25maWdzIGNvbmZpZ3VyYXRpb25zIG9mIE5ldFYsIG11c3QgaW5jbHVkZSBhIGBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50YCB0ZXJtXG4gICAgICovXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZ3M6IGFueSkge1xuICAgICAgICBpZiAoISgnY29udGFpbmVyJyBpbiBjb25maWdzKSB8fCBjb25maWdzLmNvbnRhaW5lci50YWdOYW1lICE9PSAnRElWJykge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0NvbnRhaW5lciBzaG91bGQgYmUgc3BlY2lmaWVkIGFzIGEgZGl2IGVsZW1lbnQhJylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRfY29udGFpbmVyID0gY29uZmlncy5jb250YWluZXJcblxuICAgICAgICB0aGlzLiRfY29uZmlncyA9IFV0aWxzLm92ZXJyaWRlKHRoaXMuJF9jb25maWdzLCBjb25maWdzKVxuICAgICAgICBkZWxldGUgdGhpcy4kX2NvbmZpZ3NbJ2NvbnRhaW5lciddXG5cbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykgLy8gVE9ETzogY29uc2lkZXIgbm9kZSBlbnZpcm9tZW50LCBkb2N1bWVudCBub3QgZGVmaW5lZFxuICAgICAgICBjb25zdCBwaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMVxuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSB0aGlzLiRfY29uZmlncy53aWR0aCArICdweCdcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IHRoaXMuJF9jb25maWdzLmhlaWdodCArICdweCdcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBTdHJpbmcodGhpcy4kX2NvbmZpZ3Mud2lkdGggKiBwaXhlbFJhdGlvKSlcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgU3RyaW5nKHRoaXMuJF9jb25maWdzLmhlaWdodCAqIHBpeGVsUmF0aW8pKVxuICAgICAgICB0aGlzLiRfY29udGFpbmVyLmFwcGVuZENoaWxkKGNhbnZhcylcbiAgICAgICAgdGhpcy4kX2NhbnZhcyA9IGNhbnZhc1xuXG4gICAgICAgIHRoaXMuJF9yZW5kZXJlciA9IG5ldyBSZW5kZXJlcih7XG4gICAgICAgICAgICBjYW52YXMsXG4gICAgICAgICAgICB3aWR0aDogdGhpcy4kX2NvbmZpZ3Mud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuJF9jb25maWdzLmhlaWdodCxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy4kX2NvbmZpZ3MuYmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgICAgbm9kZUxpbWl0OiB0aGlzLiRfY29uZmlncy5ub2RlTGltaXQsXG4gICAgICAgICAgICBsaW5rTGltaXQ6IHRoaXMuJF9jb25maWdzLmxpbmtMaW1pdCxcbiAgICAgICAgICAgIGdldEFsbE5vZGVzOiB0aGlzLm5vZGVzLmJpbmQodGhpcyksXG4gICAgICAgICAgICBnZXRBbGxMaW5rczogdGhpcy5saW5rcy5iaW5kKHRoaXMpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy4kX2ludGVyYWN0aW9uTWFuYWdlciA9IG5ldyBJbnRlcmFjdGlvbk1hbmFnZXIodGhpcylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBnZXQvc2V0IGNhbnZhcydzIGJhY2tncm91bmQgY29sb3JcbiAgICAgKiBAcGFyYW0gY29sb3JcbiAgICAgKi9cbiAgICBwdWJsaWMgYmFja2dyb3VuZENvbG9yKGNvbG9yPzogaW50ZXJmYWNlcy5Db2xvcikge1xuICAgICAgICBpZiAoY29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMuJF9jb25maWdzLmJhY2tncm91bmRDb2xvciA9IGNvbG9yXG4gICAgICAgICAgICB0aGlzLiRfcmVuZGVyZXIuc2V0QmFja2dyb3VuZENvbG9yKGNvbG9yKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLiRfY29uZmlncy5iYWNrZ3JvdW5kQ29sb3JcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24gZGF0YSBnZXR0ZXIgc2V0dGVyXG4gICAgICogQHBhcmFtIG5vZGVMaW5rRGF0YT8gdGhlIG5vZGUtbGluay1kYXRhIG9mIGEgZ3JhcGgsIHByb3ZpZGVkP3NldHRlcjpnZXR0ZXI7XG4gICAgICovXG4gICAgcHVibGljIGRhdGEobm9kZUxpbmtEYXRhPzogaW50ZXJmYWNlcy5Ob2RlTGlua0RhdGEpIHtcbiAgICAgICAgaWYgKG5vZGVMaW5rRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kX2RhdGFcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGRlbGV0ZSBvbGQgZGF0YVxuICAgICAgICAgICAgdGhpcy4kX2RhdGEgPSB7IC4uLnRoaXMuJF9kYXRhLCAuLi5ub2RlTGlua0RhdGEgfVxuICAgICAgICAgICAgdGhpcy4kX2lkMm5vZGUgPSBuZXcgTWFwKClcbiAgICAgICAgICAgIHRoaXMuJF9lbmRzMmxpbmsgPSBuZXcgTWFwMigpXG4gICAgICAgICAgICB0aGlzLiRfc291cmNlSWQybGlua3MgPSBuZXcgTWFwKClcbiAgICAgICAgICAgIHRoaXMuJF90YXJnZXRJZDJsaW5rcyA9IG5ldyBNYXAoKVxuXG4gICAgICAgICAgICB0aGlzLiRfcmVuZGVyZXIuY2xlYXJEYXRhKClcblxuICAgICAgICAgICAgdGhpcy5hZGROb2Rlcyh0aGlzLiRfZGF0YS5ub2RlcylcbiAgICAgICAgICAgIHRoaXMuYWRkTGlua3ModGhpcy4kX2RhdGEubGlua3MpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24gaW5pdGlhbGl6ZSBhbmQgYWRkIGEgbm9kZVxuICAgICAqIEBwYXJhbSBub2RlRGF0YSB0aGUgZGF0YSBvZiBhIG5vZGUsIGluY2x1ZGUgaWQsIHN0eWxlcy4uLlxuICAgICAqL1xuICAgIHB1YmxpYyBhZGROb2RlKG5vZGVEYXRhOiBpbnRlcmZhY2VzLk5vZGVEYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZE5vZGVzKFtub2RlRGF0YV0pWzBdXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIGluaXRpYWxpemUgYW5kIGFkZCBhIGxpbmtcbiAgICAgKiBAcGFyYW0gbGlua0RhdGEgdGhlIGRhdGEgb2YgYSBsaW5rLCBpbmNsdWRlIHNvdXJjZSwgdGFyZ2V0LCBhbmQgc3R5bGVzLi4uXG4gICAgICovXG4gICAgcHVibGljIGFkZExpbmsobGlua0RhdGE6IGludGVyZmFjZXMuTGlua0RhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkTGlua3MoW2xpbmtEYXRhXSlbMF1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24gaW5pdGlhbGl6ZSBhbmQgYWRkIGFuIGFycmF5IG9mIG5vZGVzLlxuICAgICAqIEBwYXJhbSB7aW50ZXJmYWNlcy5Ob2RlRGF0YVtdfSBub2Rlc0RhdGE6IGEgZGF0YSBhcnJheSBvZiBub2RlcyB0b2JlIGFkZGVkXG4gICAgICogQG1lbWJlcm9mIE5ldFZcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkTm9kZXMobm9kZXNEYXRhOiBpbnRlcmZhY2VzLk5vZGVEYXRhW10pIHtcbiAgICAgICAgY29uc3QgbmV3Tm9kZXMgPSBub2Rlc0RhdGEubWFwKChub2RlRGF0YSkgPT4ge1xuICAgICAgICAgICAgbm9kZURhdGEuaWQgPSBub2RlRGF0YS5pZC50b1N0cmluZygpXG4gICAgICAgICAgICBjb25zdCBub2RlID0gbmV3IE5vZGUodGhpcywgbm9kZURhdGEpXG5cbiAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuJF9yZW5kZXJlci5hZGROb2RlcyhuZXdOb2RlcylcbiAgICAgICAgcmV0dXJuIG5ld05vZGVzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIGluaXRpYWxpemUgYW5kIGFkZCBhbiBhcnJheSBvZiBsaW5rcy5cbiAgICAgKiBAcGFyYW0ge2ludGVyZmFjZXMuTGlua0RhdGFbXX0gbGlua3NEYXRhOiBhIGRhdGEgYXJyYXkgb2YgbGlua3MgdG9iZSBhZGRlZFxuICAgICAqIEBtZW1iZXJvZiBOZXRWXG4gICAgICovXG4gICAgcHVibGljIGFkZExpbmtzKGxpbmtzRGF0YTogaW50ZXJmYWNlcy5MaW5rRGF0YVtdKSB7XG4gICAgICAgIGNvbnN0IG5ld0xpbmtzID0gbmV3IEFycmF5KGxpbmtzRGF0YS5sZW5ndGgpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlua3NEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5rRGF0YSA9IGxpbmtzRGF0YVtpXVxuICAgICAgICAgICAgbGlua0RhdGEuc291cmNlID0gbGlua0RhdGEuc291cmNlLnRvU3RyaW5nKClcbiAgICAgICAgICAgIGxpbmtEYXRhLnRhcmdldCA9IGxpbmtEYXRhLnRhcmdldC50b1N0cmluZygpXG5cbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBuZXcgTGluayh0aGlzLCBsaW5rRGF0YSlcbiAgICAgICAgICAgIG5ld0xpbmtzW2ldID0gbGlua1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJF9yZW5kZXJlci5hZGRMaW5rcyhbLi4udGhpcy4kX2VuZHMybGluay52YWx1ZXMoKV0pIC8vIE5PVEU6IHByZXNlcnZlIGxpbmsgb3JkZXIsIG5vdCBlbGVnYW50XG4gICAgICAgIHJldHVybiBuZXdMaW5rc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiBnZXQgYSBOb2RlIG9iamVjdCBmcm9tIHRoZSBpZDJub2RlIE1hcCBkYXRhIHN0cnVjdHVyZVxuICAgICAqIEBwYXJhbSBpZCBub2RlIGlkXG4gICAgICovXG4gICAgcHVibGljIGdldE5vZGVCeUlkKGlkOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9pZDJub2RlLmdldChpZClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24gZ2V0IGEgTGluayBvYmplY3QgZnJvbSB0aGUgZW5kczJsaW5rIE1hcDIgZGF0YSBzdHJ1Y3R1cmVcbiAgICAgKiBAcGFyYW0gZW5kSWQxIG9uZSBlbmQgaWQgb2YgdGhlIGxpbmsgKHNvdXJjZSBvciB0YXJnZXQpXG4gICAgICogQHBhcmFtIGVuZElkMiBhbm90aGVyIGVuZCBpZCBvZiB0aGUgbGluayAoc291cmNlIG9yIHRhcmdldClcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0TGlua0J5RW5kcyhlbmRJZDE6IHN0cmluZywgZW5kSWQyOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9lbmRzMmxpbmsuZ2V0KFtlbmRJZDEsIGVuZElkMl0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIGdldCBhbGwgbm9kZXNcbiAgICAgKi9cbiAgICBwdWJsaWMgbm9kZXMoKTogTm9kZVtdIHtcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLiRfaWQybm9kZS52YWx1ZXMoKV1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24gZ2V0IGFsbCBsaW5rc1xuICAgICAqL1xuICAgIHB1YmxpYyBsaW5rcygpOiBMaW5rW10ge1xuICAgICAgICByZXR1cm4gWy4uLnRoaXMuJF9lbmRzMmxpbmsudmFsdWVzKCldXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIHdpcGUgYWxsIHRoZSBkYXRhIGluIHRoZSBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBOZXRWXG4gICAgICovXG4gICAgcHVibGljIHdpcGUoKSB7XG4gICAgICAgIHRoaXMuJF9kYXRhID0gdW5kZWZpbmVkXG4gICAgICAgIHRoaXMuJF9pZDJub2RlID0gbmV3IE1hcCgpXG4gICAgICAgIHRoaXMuJF9lbmRzMmxpbmsgPSBuZXcgTWFwMigpXG4gICAgICAgIHRoaXMuJF9zb3VyY2VJZDJsaW5rcyA9IG5ldyBNYXAoKVxuICAgICAgICB0aGlzLiRfdGFyZ2V0SWQybGlua3MgPSBuZXcgTWFwKClcbiAgICAgICAgdGhpcy4kX3JlbmRlcmVyLmNsZWFyRGF0YSgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZGlzcG9zZSBOZXRWIG9iamVjdCwgY2xlYXIgYWxsIHN0dWZmc1xuICAgICAqL1xuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xuICAgICAgICB0aGlzLndpcGUoKVxuICAgICAgICB0aGlzLiRfcmVuZGVyZXIuZGlzcG9zZSgpXG4gICAgICAgIHRoaXMuJF9jYW52YXMucmVtb3ZlKClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24gcmV0dXJuIGJ1aWxkLWluIGRhdGFzZXQgYWNjb3JkaW5nIHRvIG5hbWVcbiAgICAgKiBAcGFyYW0gbmFtZSBkYXRhc2V0IG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZERhdGFzZXQobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGlmIChuYW1lIGluIGRhdGFzZXQpIHJldHVybiBkYXRhc2V0W25hbWVdXG5cbiAgICAgICAgY29uc29sZS5lcnJvcihgTmV0ViBkb2VzIG5vdCBoYXZlIGJ1aWxkLWluIGRhdGFzZXQ6ICR7bmFtZX1gKVxuICAgICAgICByZXR1cm4geyBub2RlczogW10sIGxpbmtzOiBbXSB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZ2l2ZW4gcG9zaXRpb24sIHJldHVybiBlbGVtZW50IG9uIHRoaXMgcGl4ZWwgaWYgZXhpc3RzXG4gICAgICogQHBhcmFtIHggeCBwb3NcbiAgICAgKiBAcGFyYW0geSB5IHBvc1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRFbGVtZW50QnlQb3NpdGlvbihcbiAgICAgICAgcG9zaXRpb246IGludGVyZmFjZXMuUG9zaXRpb25cbiAgICApOiB7IHR5cGU6ICdub2RlJyB8ICdsaW5rJzsgZWxlbWVudDogTm9kZSB8IExpbmsgfSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy4kX3JlbmRlcmVyLmdldElkQnlQb3NpdGlvbihwb3NpdGlvbilcbiAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGlkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGVCeUlkKGlkKVxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub2RlJyxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogbm9kZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGlkKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLmdldExpbmtCeUVuZHMoaWRbMF0sIGlkWzFdKVxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogbGlua1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiBkcmF3IGVsZW1lbnRzXG4gICAgICovXG4gICAgcHVibGljIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuJF9yZW5kZXJlci5kcmF3KClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24gdHJhbnNpdGlvbiBiZXR3ZWVuIGRpZmZlcmVudCB0cmFuc2Zvcm1zXG4gICAgICovXG4gICAgcHVibGljIHRyYW5zaXRpb24oXG4gICAgICAgIHRyYW5zZm9ybXM6IGludGVyZmFjZXMuVHJhbnNmb3JtW10sXG4gICAgICAgIGR1cmF0aW9uc01TOiBudW1iZXJbXSxcbiAgICAgICAgY2FsbGJhY2s/OiAoZTogYW55KSA9PiB7fVxuICAgICkge1xuICAgICAgICAvLyBpbnRlcnBvbGF0aW9uXG4gICAgICAgIGNvbnN0IFNURVBTX1BFUl9TRUNPTkQgPSA2MFxuICAgICAgICBjb25zdCBNU19QRVJfU0VDT05EID0gMTAwMFxuICAgICAgICBjb25zdCBTVEVQU19QRVJfTVMgPSBTVEVQU19QRVJfU0VDT05EIC8gTVNfUEVSX1NFQ09ORFxuICAgICAgICBjb25zdCBNU19QRVJfU1RFUCA9IDEgLyBTVEVQU19QRVJfTVNcbiAgICAgICAgY29uc3QgdHJhbnNpdGlvbkZyb21UcmFuc2Zvcm1zID0gKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSB0cmFuc2Zvcm1zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IFRPVEFMX1NURVBTID0gTWF0aC5tYXgoU1RFUFNfUEVSX01TICogZHVyYXRpb25zTVNbaW5kZXhdLCAxKVxuICAgICAgICAgICAgY29uc3QgbmV3VHJhbnNmb3JtID0ge1xuICAgICAgICAgICAgICAgIC4uLnRyYW5zZm9ybXNbaW5kZXhdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkaWZmZXJlbmNlID0ge1xuICAgICAgICAgICAgICAgIHg6IHRyYW5zZm9ybXNbaW5kZXggKyAxXS54IC0gdHJhbnNmb3Jtc1tpbmRleF0ueCxcbiAgICAgICAgICAgICAgICB5OiB0cmFuc2Zvcm1zW2luZGV4ICsgMV0ueSAtIHRyYW5zZm9ybXNbaW5kZXhdLnksXG4gICAgICAgICAgICAgICAgazogdHJhbnNmb3Jtc1tpbmRleCArIDFdLmsgLSB0cmFuc2Zvcm1zW2luZGV4XS5rXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5UcmFuc2xhdGUgPSB7XG4gICAgICAgICAgICAgICAgeDogdHJhbnNmb3Jtc1tpbmRleF0ueCxcbiAgICAgICAgICAgICAgICB5OiB0cmFuc2Zvcm1zW2luZGV4XS55LFxuICAgICAgICAgICAgICAgIGs6IHRyYW5zZm9ybXNbaW5kZXhdLmtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVhc2UgPSAoeDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHggKiB4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgc3RlcCA9IDFcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBuZXdUcmFuc2Zvcm0ueCA9IG9yaWdpblRyYW5zbGF0ZS54ICsgZGlmZmVyZW5jZS54ICogZWFzZShzdGVwIC8gVE9UQUxfU1RFUFMpXG4gICAgICAgICAgICAgICAgbmV3VHJhbnNmb3JtLnkgPSBvcmlnaW5UcmFuc2xhdGUueSArIGRpZmZlcmVuY2UueSAqIGVhc2Uoc3RlcCAvIFRPVEFMX1NURVBTKVxuICAgICAgICAgICAgICAgIG5ld1RyYW5zZm9ybS5rID0gb3JpZ2luVHJhbnNsYXRlLmsgKyBkaWZmZXJlbmNlLmsgKiBlYXNlKHN0ZXAgLyBUT1RBTF9TVEVQUylcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybShuZXdUcmFuc2Zvcm0pXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3KClcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKHsgdHJhbnNmb3JtOiBuZXdUcmFuc2Zvcm0gfSlcbiAgICAgICAgICAgICAgICBzdGVwICs9IDFcbiAgICAgICAgICAgICAgICBpZiAoc3RlcCA+PSBUT1RBTF9TVEVQUykge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGFuaW1hdGlvbilcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkZyb21UcmFuc2Zvcm1zKGluZGV4ICsgMSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBNU19QRVJfU1RFUClcbiAgICAgICAgfVxuICAgICAgICB0cmFuc2l0aW9uRnJvbVRyYW5zZm9ybXMoMClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBwYW4gb24gY2FudmFzIHRvIGdldCBnaXZlbiBub2RlIGNlbnRlcmVkXG4gICAgICogQHBhcmFtIG5vZGVcbiAgICAgKi9cbiAgICBwdWJsaWMgY2VudGVyT24obm9kZTogTm9kZSk6IGludGVyZmFjZXMuVHJhbnNmb3JtIHtcbiAgICAgICAgY29uc3QgcG9zID0gbm9kZS5wb3NpdGlvbigpXG4gICAgICAgIHJldHVybiB0aGlzLiRfaW50ZXJhY3Rpb25NYW5hZ2VyLmNlbnRlclBvc2l0aW9uKHBvcylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBwcm9nbWF0aWNhbGx5IHBhblxuICAgICAqIEBwYXJhbSB4XG4gICAgICogQHBhcmFtIHlcbiAgICAgKi9cbiAgICBwdWJsaWMgcGFuQnkoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9pbnRlcmFjdGlvbk1hbmFnZXIucGFuQnkoeCwgeSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBwcm9nbWF0aWNhbGx5IHpvb21cbiAgICAgKiBAcGFyYW0gZmFjdG9yIHpvb20gZmFjdG9yXG4gICAgICogQHBhcmFtIGNlbnRlciBvcHRpb25hbCwgem9vbSBjZW50ZXIgcG9zaXRpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgem9vbUJ5KGZhY3RvcjogbnVtYmVyLCBjZW50ZXI/OiBQb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy4kX2ludGVyYWN0aW9uTWFuYWdlci56b29tQnkoZmFjdG9yLCBjZW50ZXIpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZ2V0L3NldCBuZXR2J3MgdHJhbnNmb3JtXG4gICAgICogQHBhcmFtIHZhbHVlIG9wdGlvbmFsLCB0cmFuc2Zvcm0gdG8gc2V0XG4gICAgICovXG4gICAgcHVibGljIHRyYW5zZm9ybSh2YWx1ZT86IGludGVyZmFjZXMuVHJhbnNmb3JtKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kX3RyYW5zZm9ybVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuJF90cmFuc2Zvcm0gPSB2YWx1ZVxuICAgICAgICB0aGlzLiRfcmVuZGVyZXIuc2V0VHJhbnNmb3JtKHRoaXMuJF90cmFuc2Zvcm0pXG4gICAgICAgIHJldHVybiB0aGlzLiRfdHJhbnNmb3JtXG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiBldmVudCBsaXN0ZW5lclxuICAgICAqIEBtZW1iZXJvZiBOZXRWXG4gICAgICovXG4gICAgcHVibGljIG9uKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogKGU6IGFueSkgPT4gYW55KSB7XG4gICAgICAgIGlmIChldmVudE5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3pvb20nKSB7XG4gICAgICAgICAgICB0aGlzLiRfaW50ZXJhY3Rpb25NYW5hZ2VyLm9uWm9vbShjYWxsYmFjayA/IGNhbGxiYWNrIDogRU1QVFlfRlVOQ1RJT04pXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnROYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdwYW4nKSB7XG4gICAgICAgICAgICB0aGlzLiRfaW50ZXJhY3Rpb25NYW5hZ2VyLm9uUGFuKGNhbGxiYWNrID8gY2FsbGJhY2sgOiBFTVBUWV9GVU5DVElPTilcbiAgICAgICAgfSBlbHNlIGlmIChldmVudE5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ21vdXNlZG93bicpIHtcbiAgICAgICAgICAgIHRoaXMuJF9pbnRlcmFjdGlvbk1hbmFnZXIub25Nb3VzZWRvd24oY2FsbGJhY2sgPyBjYWxsYmFjayA6IEVNUFRZX0ZVTkNUSU9OKVxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50TmFtZS50b0xvd2VyQ2FzZSgpID09PSAnbW91c2V1cCcpIHtcbiAgICAgICAgICAgIHRoaXMuJF9pbnRlcmFjdGlvbk1hbmFnZXIub25Nb3VzZXVwKGNhbGxiYWNrID8gY2FsbGJhY2sgOiBFTVBUWV9GVU5DVElPTilcbiAgICAgICAgfSBlbHNlIGlmIChldmVudE5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2NsaWNrJykge1xuICAgICAgICAgICAgdGhpcy4kX2ludGVyYWN0aW9uTWFuYWdlci5vbkNsaWNrKGNhbGxiYWNrID8gY2FsbGJhY2sgOiBFTVBUWV9GVU5DVElPTilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiB0dXJuIG9mZiBldmVudCBsaXN0ZW5lclxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIE5ldFZcbiAgICAgKi9cbiAgICBwdWJsaWMgb2ZmKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjaz86IChlOiBhbnkpID0+IGFueSkge1xuICAgICAgICBpZiAoZXZlbnROYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd6b29tJykge1xuICAgICAgICAgICAgdGhpcy4kX2ludGVyYWN0aW9uTWFuYWdlci5vZmZab29tKGNhbGxiYWNrID8gY2FsbGJhY2sgOiBFTVBUWV9GVU5DVElPTilcbiAgICAgICAgfSBlbHNlIGlmIChldmVudE5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3BhbicpIHtcbiAgICAgICAgICAgIHRoaXMuJF9pbnRlcmFjdGlvbk1hbmFnZXIub2ZmUGFuKGNhbGxiYWNrID8gY2FsbGJhY2sgOiBFTVBUWV9GVU5DVElPTilcbiAgICAgICAgfSBlbHNlIGlmIChldmVudE5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ21vdXNlZG93bicpIHtcbiAgICAgICAgICAgIHRoaXMuJF9pbnRlcmFjdGlvbk1hbmFnZXIub2ZmTW91c2Vkb3duKGNhbGxiYWNrID8gY2FsbGJhY2sgOiBFTVBUWV9GVU5DVElPTilcbiAgICAgICAgfSBlbHNlIGlmIChldmVudE5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ21vdXNldXAnKSB7XG4gICAgICAgICAgICB0aGlzLiRfaW50ZXJhY3Rpb25NYW5hZ2VyLm9mZk1vdXNldXAoY2FsbGJhY2sgPyBjYWxsYmFjayA6IEVNUFRZX0ZVTkNUSU9OKVxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50TmFtZS50b0xvd2VyQ2FzZSgpID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgICB0aGlzLiRfaW50ZXJhY3Rpb25NYW5hZ2VyLm9mZkNsaWNrKGNhbGxiYWNrID8gY2FsbGJhY2sgOiBFTVBUWV9GVU5DVElPTilcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIC8vIHRvIGVuc3VyZSB3aW5kb3cuTmV0ViB3aWxsIG5vdCByZXBvcnQgdHMgZXJyb3JcbiAgICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAgICAgTmV0VjogYW55XG4gICAgfVxufVxuXG53aW5kb3cuTmV0ViA9IE5ldFZcbiIsIi8qKlxuICogQGF1dGhvciBYaWFvZG9uZyBaaGFvIDx6aGFveGlhb2RvbmdAemp1LmVkdS5jbj5cbiAqIEBkZXNjcmlwdGlvbiBoYW5kbGUgYWxsIGludGVyYWN0aW9uIGluIE5ldFZcbiAqL1xuXG5pbXBvcnQgTmV0ViBmcm9tICcuLi9pbmRleCdcbmltcG9ydCBOb2RlIGZyb20gJy4uL2VsZW1lbnRzL25vZGUnXG5pbXBvcnQgRWxlbWVudCBmcm9tICcuLi9lbGVtZW50cy9lbGVtZW50J1xuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuLi9pbnRlcmZhY2VzJ1xuXG5leHBvcnQgY2xhc3MgSW50ZXJhY3Rpb25NYW5hZ2VyIHtcbiAgICBwcml2YXRlIG5ldHY6IE5ldFZcbiAgICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnRcblxuICAgIHByaXZhdGUgaXNab29tTGlzdGVuZWQgPSBmYWxzZVxuICAgIHByaXZhdGUgaXNNb3VzZUxpc3RlbmVkID0gZmFsc2VcbiAgICBwcml2YXRlIG1vdXNlRXZlbnRDYWxsYmFja0NvdW50ID0gMFxuXG4gICAgLy8gbWFwIHVzZXIgZGVmaW5lZCBjYWxsYmFjayA9PiBoYW5kbGVycywgY2FuIGJlIHVzZSB0byByZW1vdmUgbGlzdGVuZXJzXG4gICAgcHJpdmF0ZSB6b29tQ2FsbGJhY2tTZXQ6IFNldDwoZTogYW55KSA9PiBhbnk+XG4gICAgcHJpdmF0ZSBwYW5DYWxsYmFja1NldDogU2V0PChlOiBhbnkpID0+IGFueT5cbiAgICBwcml2YXRlIGNsaWNrQ2FsbGJhY2tTZXQ6IFNldDwoZTogYW55KSA9PiBhbnk+XG4gICAgcHJpdmF0ZSBtb3VzZWRvd25DYWxsYmFja1NldDogU2V0PChlOiBhbnkpID0+IGFueT5cbiAgICBwcml2YXRlIG1vdXNldXBDYWxsYmFja1NldDogU2V0PChlOiBhbnkpID0+IGFueT5cblxuICAgIHByaXZhdGUgaXNNb3VzZURvd24gPSBmYWxzZVxuICAgIHByaXZhdGUgaXNNb3VzZU1vdmUgPSBmYWxzZVxuICAgIHByaXZhdGUgbW91c2VEb3duRWxlbWVudFxuICAgIHByaXZhdGUgbW91c2VNb3ZlRWxlbWVudFxuICAgIHByaXZhdGUgbW91c2VEb3duRWxlbWVudE9yaWdpblBvczogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IC8vIE5PVEU6IHJlY29yZCBwb3MsIG9ubHkgc3VwcG9ydCBub2RlJ3MgZHJhZ1xuXG4gICAgcHJpdmF0ZSBtb3VzZURvd25Qb3M6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVxuICAgIHByaXZhdGUgZHJhZ1N0YXJ0VHJhbnNmb3JtOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBrOiBudW1iZXIgfVxuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG5ldHY6IE5ldFYpIHtcbiAgICAgICAgdGhpcy5uZXR2ID0gbmV0dlxuICAgICAgICB0aGlzLmNhbnZhcyA9IHRoaXMubmV0di4kX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKVxuICAgICAgICB0aGlzLnpvb21DYWxsYmFja1NldCA9IG5ldyBTZXQoKVxuICAgICAgICB0aGlzLnBhbkNhbGxiYWNrU2V0ID0gbmV3IFNldCgpXG4gICAgICAgIHRoaXMuY2xpY2tDYWxsYmFja1NldCA9IG5ldyBTZXQoKVxuICAgICAgICB0aGlzLm1vdXNlZG93bkNhbGxiYWNrU2V0ID0gbmV3IFNldCgpXG4gICAgICAgIHRoaXMubW91c2V1cENhbGxiYWNrU2V0ID0gbmV3IFNldCgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcHJvZ21hdGljYWxseSBwYW5cbiAgICAgKiBAcGFyYW0geFxuICAgICAqIEBwYXJhbSB5XG4gICAgICovXG4gICAgcHVibGljIHBhbkJ5KHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IG5ld1RyYW5zZm9ybSA9IHsgLi4udGhpcy5uZXR2LiRfdHJhbnNmb3JtIH1cbiAgICAgICAgbmV3VHJhbnNmb3JtLnggKz0geFxuICAgICAgICBuZXdUcmFuc2Zvcm0ueSArPSB5XG4gICAgICAgIHJldHVybiB0aGlzLm5ldHYudHJhbnNmb3JtKG5ld1RyYW5zZm9ybSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBwcm9nbWF0aWNhbGx5IHpvb21cbiAgICAgKiBAcGFyYW0gZmFjdG9yIHpvb20gZmFjdG9yXG4gICAgICogQHBhcmFtIGNlbnRlciBvcHRpb25hbCwgem9vbSBjZW50ZXIgcG9zaXRpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgem9vbUJ5KGZhY3RvcjogbnVtYmVyLCBjZW50ZXI/OiBQb3NpdGlvbikge1xuICAgICAgICBjb25zdCBuZXdUcmFuc2Zvcm0gPSB7IC4uLnRoaXMubmV0di4kX3RyYW5zZm9ybSB9XG4gICAgICAgIGxldCBjZW50ZXJQb3MgPSBjZW50ZXJcbiAgICAgICAgaWYgKCFjZW50ZXJQb3MpIHtcbiAgICAgICAgICAgIGNlbnRlclBvcyA9IHsgeDogdGhpcy5uZXR2LiRfY29uZmlncy53aWR0aCAvIDIsIHk6IHRoaXMubmV0di4kX2NvbmZpZ3MuaGVpZ2h0IC8gMiB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBjZW50ZXJQb3NcblxuICAgICAgICBuZXdUcmFuc2Zvcm0ueCA9ICgxIC0gZmFjdG9yKSAqIHggKyBmYWN0b3IgKiBuZXdUcmFuc2Zvcm0ueFxuICAgICAgICBuZXdUcmFuc2Zvcm0ueSA9ICgxIC0gZmFjdG9yKSAqIHkgKyBmYWN0b3IgKiBuZXdUcmFuc2Zvcm0ueVxuXG4gICAgICAgIG5ld1RyYW5zZm9ybS5rICo9IGZhY3RvclxuXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHYudHJhbnNmb3JtKG5ld1RyYW5zZm9ybSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBtb3ZlIGN1cnJlbnQgcG9zaXRpb24gdG8gY2VudGVyIG9mIGNhbnZhc1xuICAgICAqIEBwYXJhbSBwb3NcbiAgICAgKi9cbiAgICBwdWJsaWMgY2VudGVyUG9zaXRpb24ocG9zOiBQb3NpdGlvbikge1xuICAgICAgICBjb25zdCBuZXdUcmFuc2Zvcm0gPSB7IC4uLnRoaXMubmV0di4kX3RyYW5zZm9ybSB9XG4gICAgICAgIGNvbnN0IHggPSBwb3MueCAqIG5ld1RyYW5zZm9ybS5rICsgbmV3VHJhbnNmb3JtLnhcbiAgICAgICAgY29uc3QgeSA9IHBvcy55ICogbmV3VHJhbnNmb3JtLmsgKyBuZXdUcmFuc2Zvcm0ueVxuXG4gICAgICAgIGNvbnN0IGNlbnRlciA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMubmV0di4kX2NvbmZpZ3Mud2lkdGggLyAyLFxuICAgICAgICAgICAgeTogdGhpcy5uZXR2LiRfY29uZmlncy5oZWlnaHQgLyAyXG4gICAgICAgIH1cbiAgICAgICAgbmV3VHJhbnNmb3JtLnggKz0gY2VudGVyLnggLSB4XG4gICAgICAgIG5ld1RyYW5zZm9ybS55ICs9IGNlbnRlci55IC0geVxuICAgICAgICB0aGlzLm5ldHYudHJhbnNmb3JtKG5ld1RyYW5zZm9ybSlcbiAgICAgICAgcmV0dXJuIG5ld1RyYW5zZm9ybVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGluaXQgem9vbSBpbnRlcmFjdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyBvblpvb20oY2FsbGJhY2s6IChlOiBhbnkpID0+IGFueSkge1xuICAgICAgICB0aGlzLnpvb21DYWxsYmFja1NldC5hZGQoY2FsbGJhY2spXG5cbiAgICAgICAgaWYgKCF0aGlzLmlzWm9vbUxpc3RlbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFdoZWVsTGlzdGVuZXJzKClcbiAgICAgICAgICAgIHRoaXMuaXNab29tTGlzdGVuZWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb2ZmWm9vbShjYWxsYmFjazogKGU6IGFueSkgPT4gYW55KSB7XG4gICAgICAgIHRoaXMuem9vbUNhbGxiYWNrU2V0LmRlbGV0ZShjYWxsYmFjaylcblxuICAgICAgICBpZiAoIXRoaXMuem9vbUNhbGxiYWNrU2V0LnNpemUpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlV2hlZWxMaXN0ZW5lcnMoKVxuICAgICAgICAgICAgdGhpcy5pc1pvb21MaXN0ZW5lZCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25DbGljayhjYWxsYmFjazogKGU6IGFueSkgPT4gYW55KSB7XG4gICAgICAgIHRoaXMuY2xpY2tDYWxsYmFja1NldC5hZGQoY2FsbGJhY2spXG4gICAgICAgIHRoaXMuaW5jcmVhc2VNb3VzZUV2ZW50Q2FsbGJhY2tDb3VudEJ5KDEpXG4gICAgfVxuXG4gICAgcHVibGljIG9mZkNsaWNrKGNhbGxiYWNrOiAoZTogYW55KSA9PiBhbnkpIHtcbiAgICAgICAgdGhpcy5jbGlja0NhbGxiYWNrU2V0LmRlbGV0ZShjYWxsYmFjaylcbiAgICAgICAgdGhpcy5kZWNyZWFzZU1vdXNlRXZlbnRDYWxsYmFja0NvdW50QnkoMSlcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Nb3VzZWRvd24oY2FsbGJhY2s6IChlOiBhbnkpID0+IGFueSkge1xuICAgICAgICB0aGlzLm1vdXNlZG93bkNhbGxiYWNrU2V0LmFkZChjYWxsYmFjaylcbiAgICAgICAgdGhpcy5pbmNyZWFzZU1vdXNlRXZlbnRDYWxsYmFja0NvdW50QnkoMSlcbiAgICB9XG5cbiAgICBwdWJsaWMgb2ZmTW91c2Vkb3duKGNhbGxiYWNrOiAoZTogYW55KSA9PiBhbnkpIHtcbiAgICAgICAgdGhpcy5tb3VzZWRvd25DYWxsYmFja1NldC5kZWxldGUoY2FsbGJhY2spXG4gICAgICAgIHRoaXMuZGVjcmVhc2VNb3VzZUV2ZW50Q2FsbGJhY2tDb3VudEJ5KDEpXG4gICAgfVxuXG4gICAgcHVibGljIG9uTW91c2V1cChjYWxsYmFjazogKGU6IGFueSkgPT4gYW55KSB7XG4gICAgICAgIHRoaXMubW91c2V1cENhbGxiYWNrU2V0LmFkZChjYWxsYmFjaylcbiAgICAgICAgdGhpcy5pbmNyZWFzZU1vdXNlRXZlbnRDYWxsYmFja0NvdW50QnkoMSlcbiAgICB9XG5cbiAgICBwdWJsaWMgb2ZmTW91c2V1cChjYWxsYmFjazogKGU6IGFueSkgPT4gYW55KSB7XG4gICAgICAgIHRoaXMubW91c2V1cENhbGxiYWNrU2V0LmRlbGV0ZShjYWxsYmFjaylcbiAgICAgICAgdGhpcy5kZWNyZWFzZU1vdXNlRXZlbnRDYWxsYmFja0NvdW50QnkoMSlcbiAgICB9XG5cbiAgICBwdWJsaWMgb25QYW4oY2FsbGJhY2s6IChlOiBhbnkpID0+IGFueSkge1xuICAgICAgICB0aGlzLnBhbkNhbGxiYWNrU2V0LmFkZChjYWxsYmFjaylcbiAgICAgICAgdGhpcy5pbmNyZWFzZU1vdXNlRXZlbnRDYWxsYmFja0NvdW50QnkoMSlcbiAgICB9XG5cbiAgICBwdWJsaWMgb2ZmUGFuKGNhbGxiYWNrOiAoZTogYW55KSA9PiBhbnkpIHtcbiAgICAgICAgdGhpcy5wYW5DYWxsYmFja1NldC5kZWxldGUoY2FsbGJhY2spXG4gICAgICAgIHRoaXMuZGVjcmVhc2VNb3VzZUV2ZW50Q2FsbGJhY2tDb3VudEJ5KDEpXG4gICAgfVxuXG4gICAgcHVibGljIGluY3JlYXNlTW91c2VFdmVudENhbGxiYWNrQ291bnRCeShuOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5tb3VzZUV2ZW50Q2FsbGJhY2tDb3VudCArPSBuXG4gICAgICAgIGlmICghdGhpcy5pc01vdXNlTGlzdGVuZWQgJiYgdGhpcy5tb3VzZUV2ZW50Q2FsbGJhY2tDb3VudCA+IDApIHtcbiAgICAgICAgICAgIC8vIHRoZXJlIGlzIHNvbWUgbW91c2UgZXZlbnQgbGlzdGVuZWQgZWxlbWVudHNcbiAgICAgICAgICAgIHRoaXMuYWRkTW91c2VMaXN0ZW5lcnMoKVxuICAgICAgICAgICAgdGhpcy5pc01vdXNlTGlzdGVuZWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZGVjcmVhc2VNb3VzZUV2ZW50Q2FsbGJhY2tDb3VudEJ5KG46IG51bWJlcikge1xuICAgICAgICB0aGlzLm1vdXNlRXZlbnRDYWxsYmFja0NvdW50IC09IG5cbiAgICAgICAgaWYgKHRoaXMubW91c2VFdmVudENhbGxiYWNrQ291bnQgPD0gMCAmJiAhdGhpcy5wYW5DYWxsYmFja1NldC5zaXplKSB7XG4gICAgICAgICAgICAvLyBubyBwYW4gY2FsbGJhY2sgZnVuY3Rpb25zIGFuZCBubyBtb3VzZSBldmVudCBsaXN0ZW5lZCBlbGVtZW50c1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVNb3VzZUxpc3RlbmVycygpXG4gICAgICAgICAgICB0aGlzLmlzTW91c2VMaXN0ZW5lZCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZSBoYW5kbGUgem9vbSAobW91c2Ugd2hlZWwpIGV2ZW50XG4gICAgICogQHBhcmFtIHtXaGVlbEV2ZW50fSBldnRcbiAgICAgKiBAbWVtYmVyb2YgSW50ZXJhY3Rpb25NYW5hZ2VyXG4gICAgICovXG4gICAgcHJpdmF0ZSBoYW5kbGVab29tKGV2dDogV2hlZWxFdmVudCkge1xuICAgICAgICBjb25zdCBuZXdUcmFuc2Zvcm0gPSB7IC4uLnRoaXMubmV0di4kX3RyYW5zZm9ybSB9XG4gICAgICAgIGNvbnN0IHggPSBldnQub2Zmc2V0WCB8fCBldnQucGFnZVggLSB0aGlzLmNhbnZhcy5vZmZzZXRMZWZ0XG4gICAgICAgIGNvbnN0IHkgPSBldnQub2Zmc2V0WSB8fCBldnQucGFnZVkgLSB0aGlzLmNhbnZhcy5vZmZzZXRUb3BcbiAgICAgICAgY29uc3QgZGVsdGEgPSBldnQuZGVsdGFZID8gZXZ0LmRlbHRhWSAvIDQwIDogZXZ0LmRldGFpbCA/IC1ldnQuZGV0YWlsIDogMFxuICAgICAgICBpZiAoZGVsdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGsgPSBNYXRoLnBvdygxLjEsIGRlbHRhKVxuICAgICAgICAgICAgbmV3VHJhbnNmb3JtLnggPSAoMSAtIGspICogeCArIGsgKiBuZXdUcmFuc2Zvcm0ueFxuICAgICAgICAgICAgbmV3VHJhbnNmb3JtLnkgPSAoMSAtIGspICogeSArIGsgKiBuZXdUcmFuc2Zvcm0ueVxuXG4gICAgICAgICAgICBuZXdUcmFuc2Zvcm0uayAqPSBrXG5cbiAgICAgICAgICAgIHRoaXMubmV0di50cmFuc2Zvcm0obmV3VHJhbnNmb3JtKVxuICAgICAgICAgICAgdGhpcy5uZXR2LmRyYXcoKVxuXG4gICAgICAgICAgICB0aGlzLnpvb21DYWxsYmFja1NldC5mb3JFYWNoKChjYWxsYmFjaykgPT5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldnQsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICd6b29tJyxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBuZXdUcmFuc2Zvcm1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZSBoYW5kbGUgbW91c2UgZG93biBldmVudFxuICAgICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZ0XG4gICAgICogQG1lbWJlcm9mIEludGVyYWN0aW9uTWFuYWdlclxuICAgICAqL1xuICAgIHByaXZhdGUgaGFuZGxlTW91c2VEb3duKGV2dDogTW91c2VFdmVudCkge1xuICAgICAgICBjb25zdCB4ID0gZXZ0Lm9mZnNldFggfHwgZXZ0LnBhZ2VYIC0gdGhpcy5jYW52YXMub2Zmc2V0TGVmdFxuICAgICAgICBjb25zdCB5ID0gZXZ0Lm9mZnNldFkgfHwgZXZ0LnBhZ2VZIC0gdGhpcy5jYW52YXMub2Zmc2V0VG9wXG4gICAgICAgIGNvbnN0IHlJbnYgPSB0aGlzLm5ldHYuJF9jb25maWdzLmhlaWdodCAtIHlcblxuICAgICAgICBjb25zdCBuZXdUcmFuc2Zvcm0gPSB7IC4uLnRoaXMubmV0di4kX3RyYW5zZm9ybSB9XG5cbiAgICAgICAgdGhpcy5pc01vdXNlRG93biA9IHRydWVcbiAgICAgICAgdGhpcy5tb3VzZURvd25Qb3MgPSB7IHgsIHkgfVxuICAgICAgICB0aGlzLmRyYWdTdGFydFRyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobmV3VHJhbnNmb3JtKSlcblxuICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnQgPSB0aGlzLm5ldHYuZ2V0RWxlbWVudEJ5UG9zaXRpb24oe1xuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHk6IHlJbnZcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAodGhpcy5tb3VzZURvd25FbGVtZW50Py5lbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5tb3VzZURvd25FbGVtZW50LmVsZW1lbnRcbiAgICAgICAgICAgIGlmIChlbGVtZW50Py50eXBlID09PSAnTm9kZScpIHtcbiAgICAgICAgICAgICAgICAvLyBvbmx5IG5vZGUgY2FuIGJlIGRyYWdnZWRcbiAgICAgICAgICAgICAgICAvLyByZWNvcmQgb3JnaW4gcG9zaXRpb24gZm9yIGRyYWdcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnRPcmlnaW5Qb3MgPSB7IC4uLmVsZW1lbnQucG9zaXRpb24oKSB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtZW50LiRfbW91c2Vkb3duQ2FsbGJhY2tTZXQuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldnQsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdtb3VzZWRvd24nLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vdXNlZG93bkNhbGxiYWNrU2V0LmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soe1xuICAgICAgICAgICAgICAgICAgICBldmVudDogZXZ0LFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbW91c2Vkb3duJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGUgaGFuZGxlIG1vdXNlIG1vdmUgZXZlbnRcbiAgICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2dFxuICAgICAqIEBtZW1iZXJvZiBJbnRlcmFjdGlvbk1hbmFnZXJcbiAgICAgKi9cbiAgICBwcml2YXRlIGhhbmRsZU1vdXNlTW92ZShldnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgbGV0IG5ld1RyYW5zZm9ybSA9IHsgLi4udGhpcy5uZXR2LiRfdHJhbnNmb3JtIH1cbiAgICAgICAgY29uc3QgeCA9IGV2dC5vZmZzZXRYIHx8IGV2dC5wYWdlWCAtIHRoaXMuY2FudmFzLm9mZnNldExlZnRcbiAgICAgICAgY29uc3QgeSA9IGV2dC5vZmZzZXRZIHx8IGV2dC5wYWdlWSAtIHRoaXMuY2FudmFzLm9mZnNldFRvcFxuXG4gICAgICAgIGNvbnN0IGxhc3RJc01vdXNlTW92ZSA9IHRoaXMuaXNNb3VzZU1vdmVcbiAgICAgICAgY29uc3QgbGFzdE1vdXNlTW92ZUVsZW1lbnQgPSB0aGlzLm1vdXNlTW92ZUVsZW1lbnRcblxuICAgICAgICBpZiAodGhpcy5pc01vdXNlRG93bikge1xuICAgICAgICAgICAgdGhpcy5pc01vdXNlTW92ZSA9IHRydWVcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLm1vdXNlRG93bkVsZW1lbnQ/LmVsZW1lbnQgYXMgTm9kZVxuICAgICAgICAgICAgLy8gZHJhZyBhIG5vZGU6IDEuIG1vdXNlZG93biBvbiBhIE5vZGU7IGFuZCAyLiB0aGUgbm9kZSBpcyBsaXN0ZW5lZDtcbiAgICAgICAgICAgIC8vIGVsc2UgcGFuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZWxlbWVudD8udHlwZSA9PT0gJ05vZGUnICYmXG4gICAgICAgICAgICAgICAgZWxlbWVudC4kX2RyYWdzdGFydENhbGxiYWNrU2V0LnNpemUgK1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LiRfZHJhZ2dpbmdDYWxsYmFja1NldC5zaXplICtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC4kX2RyYWdlbmRDYWxsYmFja1NldC5zaXplXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAvLyBkcmFnIGEgbGlzdGVuZWQgbm9kZVxuICAgICAgICAgICAgICAgIGlmICghbGFzdElzTW91c2VNb3ZlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxhc3QgdGltZSwgdGhlIG1vdXNlIGlzIG5vdCBtb3ZlXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuJF9kcmFnc3RhcnRDYWxsYmFja1NldC5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RyYWdzdGFydCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBjaGFuZ2Ugbm9kZSBwb3NpdGlvblxuICAgICAgICAgICAgICAgIGVsZW1lbnQucG9zaXRpb24oe1xuICAgICAgICAgICAgICAgICAgICB4OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50T3JpZ2luUG9zLnggK1xuICAgICAgICAgICAgICAgICAgICAgICAgKHggLSB0aGlzLm1vdXNlRG93blBvcy54KSAvIG5ld1RyYW5zZm9ybS5rLFxuICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLm1vdXNlRG93bkVsZW1lbnRPcmlnaW5Qb3MueSArICh5IC0gdGhpcy5tb3VzZURvd25Qb3MueSkgLyBuZXdUcmFuc2Zvcm0ua1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB0aGlzLm5ldHYuZHJhdygpXG5cbiAgICAgICAgICAgICAgICBlbGVtZW50LiRfZHJhZ2dpbmdDYWxsYmFja1NldC5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudDogZXZ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RyYWdnaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBwYW4sIHdoZW4gbm90IGRyYWdnaW5nIG5vZGVcbiAgICAgICAgICAgICAgICBuZXdUcmFuc2Zvcm0ueCA9IHRoaXMuZHJhZ1N0YXJ0VHJhbnNmb3JtLnggKyB4IC0gdGhpcy5tb3VzZURvd25Qb3MueFxuICAgICAgICAgICAgICAgIG5ld1RyYW5zZm9ybS55ID0gdGhpcy5kcmFnU3RhcnRUcmFuc2Zvcm0ueSArIHkgLSB0aGlzLm1vdXNlRG93blBvcy55XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFuQ2FsbGJhY2tTZXQuc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ldHYudHJhbnNmb3JtKG5ld1RyYW5zZm9ybSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXR2LmRyYXcoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhbkNhbGxiYWNrU2V0LmZvckVhY2goKGNhbGxiYWNrKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3BhbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBuZXdUcmFuc2Zvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBob3ZlclxuICAgICAgICAgICAgY29uc3QgeUludiA9IHRoaXMubmV0di4kX2NvbmZpZ3MuaGVpZ2h0IC0geVxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubmV0di5nZXRFbGVtZW50QnlQb3NpdGlvbih7IHgsIHk6IHlJbnYgfSk/LmVsZW1lbnRcbiAgICAgICAgICAgIHRoaXMubW91c2VNb3ZlRWxlbWVudCA9IGVsZW1lbnRcbiAgICAgICAgICAgIGlmIChsYXN0TW91c2VNb3ZlRWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQ/LiRfbW91c2Vtb3ZlQ2FsbGJhY2tTZXQuZm9yRWFjaCgoY2FsbGJhY2spID0+XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbW91c2Vtb3ZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxhc3RNb3VzZU1vdmVFbGVtZW50Py4kX21vdXNlb3V0Q2FsbGJhY2tTZXQuZm9yRWFjaCgoY2FsbGJhY2spID0+XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbW91c2VvdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogbGFzdE1vdXNlTW92ZUVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgZWxlbWVudD8uJF9tb3VzZW92ZXJDYWxsYmFja1NldC5mb3JFYWNoKChjYWxsYmFjaykgPT5cbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdtb3VzZW92ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlIGhhbmRsZSBtb3VzZSB1cCBldmVudFxuICAgICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZ0XG4gICAgICogQG1lbWJlcm9mIEludGVyYWN0aW9uTWFuYWdlclxuICAgICAqL1xuICAgIHByaXZhdGUgaGFuZGxlTW91c2VVcChldnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMubW91c2VEb3duRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3VzZU1vdmUpIHtcbiAgICAgICAgICAgICAgICAvLyBkcmFnXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW91c2VEb3duRWxlbWVudD8uZWxlbWVudC4kX2RyYWdlbmRDYWxsYmFja1NldCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5tb3VzZURvd25FbGVtZW50LmVsZW1lbnQgYXMgTm9kZVxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LiRfZHJhZ2VuZENhbGxiYWNrU2V0LmZvckVhY2goKGNhbGxiYWNrKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RyYWdlbmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGNsaWNrXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubW91c2VEb3duRWxlbWVudC5lbGVtZW50XG4gICAgICAgICAgICAgICAgZWxlbWVudC4kX2NsaWNrQ2FsbGJhY2tTZXQuZm9yRWFjaCgoY2FsbGJhY2spID0+XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2xpY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1vdXNldXBcbiAgICAgICAgICAgIGlmICh0aGlzLm1vdXNlRG93bkVsZW1lbnQ/LmVsZW1lbnQuJF9tb3VzZXVwQ2FsbGJhY2tTZXQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5tb3VzZURvd25FbGVtZW50LmVsZW1lbnQgYXMgRWxlbWVudFxuICAgICAgICAgICAgICAgIGVsZW1lbnQuJF9tb3VzZXVwQ2FsbGJhY2tTZXQuZm9yRWFjaCgoY2FsbGJhY2spID0+XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbW91c2V1cCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY2FudmFzIG1vdXNldXBcbiAgICAgICAgICAgIHRoaXMubW91c2V1cENhbGxiYWNrU2V0LmZvckVhY2goKGNhbGxiYWNrKSA9PlxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2dCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ21vdXNldXAnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmICghdGhpcy5pc01vdXNlTW92ZSkge1xuICAgICAgICAgICAgICAgIC8vIGNsaWNrLCBub3QgcGFuXG5cbiAgICAgICAgICAgICAgICB0aGlzLmNsaWNrQ2FsbGJhY2tTZXQuZm9yRWFjaCgoY2FsbGJhY2spID0+XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2xpY2snXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNNb3VzZURvd24gPSBmYWxzZVxuICAgICAgICB0aGlzLmlzTW91c2VNb3ZlID0gZmFsc2VcbiAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50ID0gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRXaGVlbExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCB0aGlzLmhhbmRsZVpvb20uYmluZCh0aGlzKSwgZmFsc2UpXG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLmhhbmRsZVpvb20uYmluZCh0aGlzKSwgZmFsc2UpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVXaGVlbExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCB0aGlzLmhhbmRsZVpvb20uYmluZCh0aGlzKSlcbiAgICAgICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMuaGFuZGxlWm9vbS5iaW5kKHRoaXMpKVxuICAgIH1cblxuICAgIHByaXZhdGUgYWRkTW91c2VMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY2FudmFzXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZU1vdXNlRG93bi5iaW5kKHRoaXMpKVxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUuYmluZCh0aGlzKSlcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZU1vdXNlVXAuYmluZCh0aGlzKSlcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZU1vdXNlTGlzdGVuZXJzKCkge1xuICAgICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmNhbnZhc1xuICAgICAgICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNb3VzZURvd24uYmluZCh0aGlzKSlcbiAgICAgICAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlTW91c2VNb3ZlLmJpbmQodGhpcykpXG4gICAgICAgIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVNb3VzZVVwLmJpbmQodGhpcykpXG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgaW50ZXJmYWNlcyBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgUmVuZGVyQXR0cmlidXRlLCBTaGFkZXJzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcydcbmltcG9ydCB7XG4gICAgY3JlYXRlUHJvZ3JhbSxcbiAgICBjcmVhdGVBcnJheUJ1ZmZlcixcbiAgICBleHRyYWN0QXR0cmlidXRlc0Zyb21TaGFkZXIsXG4gICAgZW5jb2RlUmVuZGVySWRcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IE5vZGUgZnJvbSAnLi4vLi4vZWxlbWVudHMvbm9kZSdcbmltcG9ydCBMaW5rIGZyb20gJy4uLy4uL2VsZW1lbnRzL2xpbmsnXG5cbmV4cG9ydCBjbGFzcyBSZW5kZXJFbGVtZW50TWFuYWdlciB7XG4gICAgcHVibGljIGF0dHJpYnV0ZXM6IE1hcDxzdHJpbmcsIFJlbmRlckF0dHJpYnV0ZT5cbiAgICBwdWJsaWMgcGl4ZWxSYXRpbzogbnVtYmVyXG5cbiAgICBwcm90ZWN0ZWQgZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHRcbiAgICAvLyB0aGUgY2FwYWJsaXR5IG9mIHRoZSByZW5kZXIgbWFuYWdlcixcbiAgICAvLyB3aGljaCBtZWFucyBob3cgbWFueSBlbGVtZW50cyBjYW4gYmUgcmVuZGVyZWRcbiAgICBwcm90ZWN0ZWQgY2FwYWNpdHk6IG51bWJlclxuICAgIHByb3RlY3RlZCBjb3VudCA9IDBcbiAgICBwcm90ZWN0ZWQgd2lkdGg6IG51bWJlclxuICAgIHByb3RlY3RlZCBoZWlnaHQ6IG51bWJlclxuXG4gICAgcHJvdGVjdGVkIHByb2dyYW06IFdlYkdMUHJvZ3JhbVxuXG4gICAgLy8gaWQgc2hhZGVycyBhcmUgZGVzaWduIGZvciBtYXBwaW5nIGNhbnZhcyBwaXhlbHMgdG8gZWxlbWVudHNcbiAgICBwcm90ZWN0ZWQgaWRQcm9ncmFtOiBXZWJHTFByb2dyYW1cbiAgICBwcm90ZWN0ZWQgaWRBdHRyaWJ1dGVzOiBNYXA8c3RyaW5nLCBSZW5kZXJBdHRyaWJ1dGU+XG4gICAgcHJvdGVjdGVkIGlkVGV4dHVyZTogV2ViR0xUZXh0dXJlXG5cbiAgICBwcm90ZWN0ZWQgcmVuZGVySWRUb0VsZW1lbnQ6IHsgW2tleTogbnVtYmVyXTogTm9kZSB8IExpbmsgfVxuICAgIHByb3RlY3RlZCBlbGVtZW50VG9SZW5kZXJJZCA9IG5ldyBNYXAoKVxuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgICAgICBnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dCxcbiAgICAgICAgcGFyYW1zOiBhbnksXG4gICAgICAgIHNoYWRlcnM6IFNoYWRlcnMsXG4gICAgICAgIGlkVGV4dHVyZTogV2ViR0xUZXh0dXJlXG4gICAgKSB7XG4gICAgICAgIGNvbnN0IHsgbGltaXQsIHdpZHRoLCBoZWlnaHQsIGluc3RhbmNlVmVydGVjZXMgfSA9IHBhcmFtc1xuICAgICAgICB0aGlzLmdsID0gZ2xcbiAgICAgICAgdGhpcy5jYXBhY2l0eSA9IGxpbWl0XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aFxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICAgICAgICB0aGlzLnBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxXG5cbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0gZXh0cmFjdEF0dHJpYnV0ZXNGcm9tU2hhZGVyKHNoYWRlcnMudmVydGV4KVxuICAgICAgICB0aGlzLnByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKFxuICAgICAgICAgICAgdGhpcy5nbCxcbiAgICAgICAgICAgIHNoYWRlcnMudmVydGV4LmNvbm5lY3QoKSxcbiAgICAgICAgICAgIHNoYWRlcnMuZnJhZ21lbnQuY29ubmVjdCgpLFxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzXG4gICAgICAgIClcblxuICAgICAgICB0aGlzLmlkQXR0cmlidXRlcyA9IGV4dHJhY3RBdHRyaWJ1dGVzRnJvbVNoYWRlcihzaGFkZXJzLmlkVmVydGV4KVxuICAgICAgICB0aGlzLmlkUHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0oXG4gICAgICAgICAgICB0aGlzLmdsLFxuICAgICAgICAgICAgc2hhZGVycy5pZFZlcnRleC5jb25uZWN0KCksXG4gICAgICAgICAgICBzaGFkZXJzLmlkRnJhZ21lbnQuY29ubmVjdCgpLFxuICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXNcbiAgICAgICAgKVxuXG4gICAgICAgIHRoaXMuaWRUZXh0dXJlID0gaWRUZXh0dXJlXG5cbiAgICAgICAgLy8gaW5pdGlhbCBhdHRyaWJ1dGVzIGFycmF5cyBhbmQgYnVmZmVyc1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICAgICAgaWYgKCFhdHRyLmlzQnVpbGRJbikge1xuICAgICAgICAgICAgICAgIGF0dHIuYXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KGF0dHIuc2l6ZSAqIHRoaXMuY2FwYWNpdHkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGJ1aWxkIGluIGF0dHJpYnV0ZTogdmV0ZWNlcyBwb3NpdGlvbnNcbiAgICAgICAgICAgICAgICAvLyBmb3VyIHZlcnRlY2VzIG9mIG9uZSBlbGVtZW50IChodHRwczovL3BhbmppYWNoZW5nLnNpdGUvd2lraS8yMDE5LzA2LzA2L3dlYkdML1dlYkdMLUJhdGNoRHJhdyVFNCVCQiVBMyVFNyVBMCU4MSVFOSU5OCU4NSVFOCVBRiVCQislRTclOTAlODYlRTglQTclQTMvKVxuICAgICAgICAgICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICAgICAgICAgIGF0dHIuYXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KGluc3RhbmNlVmVydGVjZXMpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF0dHIuYnVmZmVyID0gY3JlYXRlQXJyYXlCdWZmZXIodGhpcy5nbCwgYXR0ci5hcnJheSlcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBpbml0IGlkIGF0dHJpYnV0ZXMgYW5kIGJ1ZmZlcnNcbiAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0ciwgbmFtZSkgPT4ge1xuICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdpbl9pZCcpIHtcbiAgICAgICAgICAgICAgICAvLyBhdHRyOiBpbiB2ZWM0IGluSWQ7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogaGFyZGNvZGUgY2hlY2ssIG5lZWQgcmVmYWN0b3JcbiAgICAgICAgICAgICAgICBpZiAoIWF0dHIuaXNCdWlsZEluKSBhdHRyLmFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShhdHRyLnNpemUgKiB0aGlzLmNhcGFjaXR5KVxuICAgICAgICAgICAgICAgIGF0dHIuYnVmZmVyID0gY3JlYXRlQXJyYXlCdWZmZXIodGhpcy5nbCwgYXR0ci5hcnJheSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXMuc2V0KG5hbWUsIHRoaXMuYXR0cmlidXRlcy5nZXQobmFtZSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gaW5pdCB1bmlmb3Jtc1xuICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKVxuICAgICAgICAvLyBnZXQgdW5pZm9ybSBsb2NhdGlvbnMgaW4gTWVtb3J5XG4gICAgICAgIGNvbnN0IHByb2plY3Rpb25Mb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3Byb2plY3Rpb24nKVxuICAgICAgICBjb25zdCBzY2FsZUxvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLCAnc2NhbGUnKVxuICAgICAgICBjb25zdCB0cmFuc2xhdGVMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3RyYW5zbGF0ZScpXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0TG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sICd2aWV3cG9ydCcpXG4gICAgICAgIGNvbnN0IHBpeGVsUmF0aW9Mb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3BpeGVsUmF0aW8nKVxuXG4gICAgICAgIC8vIHNldCB1bmlmb3JtIHZhbHVlc1xuICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgY29uc3QgcHJvamVjdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAgICAgMiAvIHRoaXMud2lkdGgsICAgICAgICAgICAgICAgIDAsIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgMCwgLTIgLyB0aGlzLmhlaWdodCwgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLCAgICAgICAgICAgICAgICAxLCAxXG4gICAgICAgIF0pXG4gICAgICAgIHByb2plY3Rpb25Mb2NhdGlvbiAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgdGhpcy5nbC51bmlmb3JtTWF0cml4M2Z2KHByb2plY3Rpb25Mb2NhdGlvbiwgZmFsc2UsIHByb2plY3Rpb24pXG5cbiAgICAgICAgY29uc3Qgc2NhbGUgPSBuZXcgRmxvYXQzMkFycmF5KFsxLCAxXSlcbiAgICAgICAgc2NhbGVMb2NhdGlvbiAhPT0gbnVsbCAmJiB0aGlzLmdsLnVuaWZvcm0yZnYoc2NhbGVMb2NhdGlvbiwgc2NhbGUpXG5cbiAgICAgICAgY29uc3QgdHJhbnNsYXRlID0gbmV3IEZsb2F0MzJBcnJheShbMCwgMF0pXG4gICAgICAgIHRyYW5zbGF0ZUxvY2F0aW9uICE9PSBudWxsICYmIHRoaXMuZ2wudW5pZm9ybTJmdih0cmFuc2xhdGVMb2NhdGlvbiwgdHJhbnNsYXRlKVxuXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0ID0gbmV3IEZsb2F0MzJBcnJheShbdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRdKVxuICAgICAgICB2aWV3cG9ydExvY2F0aW9uICE9PSBudWxsICYmIHRoaXMuZ2wudW5pZm9ybTJmdih2aWV3cG9ydExvY2F0aW9uLCB2aWV3cG9ydClcblxuICAgICAgICBwaXhlbFJhdGlvTG9jYXRpb24gIT09IG51bGwgJiYgdGhpcy5nbC51bmlmb3JtMWYocGl4ZWxSYXRpb0xvY2F0aW9uLCB0aGlzLnBpeGVsUmF0aW8pXG5cbiAgICAgICAgLy8gaWQgdW5pZm9ybXMsIGlkZW50aWNhbCB0byBub2RlXG4gICAgICAgIC8vIFRPRE86IG5lZWQgcmVmYWN0b3IgdG9vXG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLmlkUHJvZ3JhbSlcbiAgICAgICAgY29uc3QgaWRQcm9qZWN0aW9uTG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmlkUHJvZ3JhbSwgJ3Byb2plY3Rpb24nKVxuICAgICAgICBjb25zdCBpZFNjYWxlTG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmlkUHJvZ3JhbSwgJ3NjYWxlJylcbiAgICAgICAgY29uc3QgaWRUcmFuc2xhdGVMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuaWRQcm9ncmFtLCAndHJhbnNsYXRlJylcbiAgICAgICAgY29uc3QgaWRWaWV3cG9ydExvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5pZFByb2dyYW0sICd2aWV3cG9ydCcpXG4gICAgICAgIGNvbnN0IGlkUGl4ZWxSYXRpb0xvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5pZFByb2dyYW0sICdwaXhlbFJhdGlvJylcblxuICAgICAgICBpZFByb2plY3Rpb25Mb2NhdGlvbiAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgdGhpcy5nbC51bmlmb3JtTWF0cml4M2Z2KGlkUHJvamVjdGlvbkxvY2F0aW9uLCBmYWxzZSwgcHJvamVjdGlvbilcbiAgICAgICAgaWRTY2FsZUxvY2F0aW9uICE9PSBudWxsICYmIHRoaXMuZ2wudW5pZm9ybTJmdihpZFNjYWxlTG9jYXRpb24sIHNjYWxlKVxuICAgICAgICBpZFRyYW5zbGF0ZUxvY2F0aW9uICE9PSBudWxsICYmIHRoaXMuZ2wudW5pZm9ybTJmdihpZFRyYW5zbGF0ZUxvY2F0aW9uLCB0cmFuc2xhdGUpXG4gICAgICAgIGlkVmlld3BvcnRMb2NhdGlvbiAhPT0gbnVsbCAmJiB0aGlzLmdsLnVuaWZvcm0yZnYoaWRWaWV3cG9ydExvY2F0aW9uLCB2aWV3cG9ydClcbiAgICAgICAgaWRQaXhlbFJhdGlvTG9jYXRpb24gIT09IG51bGwgJiYgdGhpcy5nbC51bmlmb3JtMWYoaWRQaXhlbFJhdGlvTG9jYXRpb24sIHRoaXMucGl4ZWxSYXRpbylcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UmVuZGVySWRPZihlbGVtZW50OiBOb2RlIHwgTGluaywgcmVuZGVySWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLnJlbmRlcklkVG9FbGVtZW50W3JlbmRlcklkXSA9IGVsZW1lbnRcbiAgICAgICAgdGhpcy5lbGVtZW50VG9SZW5kZXJJZC5zZXQoZWxlbWVudCwgcmVuZGVySWQpXG4gICAgfVxuXG4gICAgcHVibGljIGdldFJlbmRlcklkT2YoZWxlbWVudDogTm9kZSB8IExpbmspOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50VG9SZW5kZXJJZC5nZXQoZWxlbWVudClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZW5kZXIgaWQgdG8gbGluayBpZHMoc291cmNlIGFuZCB0YXJnZXQpXG4gICAgICogQHBhcmFtIHJlbmRlcklkXG4gICAgICovXG4gICAgcHVibGljIGdldEVsZW1lbnRCeVJlbmRlcklkKHJlbmRlcklkOiBudW1iZXIpOiBOb2RlIHwgTGluayB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcklkVG9FbGVtZW50W3JlbmRlcklkXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHNldCBUcmFuc2Zvcm0gaW4gUmVuZGVyIExpbmtcbiAgICAgKiBAcGFyYW0gdHJhbnNmb3JtIGN1cnJlbnQgdHJhbnNmb3JtKHBhbiZ6b29tIGNvbmRpdGlvbilcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0VHJhbnNmb3JtKHRyYW5zZm9ybTogVHJhbnNmb3JtKSB7XG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pXG4gICAgICAgIGNvbnN0IHNjYWxlTG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLCAnc2NhbGUnKVxuICAgICAgICBjb25zdCB0cmFuc2xhdGVMb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sICd0cmFuc2xhdGUnKVxuXG4gICAgICAgIGNvbnN0IHNjYWxlID0gbmV3IEZsb2F0MzJBcnJheShbdHJhbnNmb3JtLmssIHRyYW5zZm9ybS5rXSlcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmZ2KHNjYWxlTG9jLCBzY2FsZSlcblxuICAgICAgICBjb25zdCB0cmFuc2xhdGUgPSBuZXcgRmxvYXQzMkFycmF5KFt0cmFuc2Zvcm0ueCwgdHJhbnNmb3JtLnldKVxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZnYodHJhbnNsYXRlTG9jLCB0cmFuc2xhdGUpXG5cbiAgICAgICAgLy8gaWQgdW5pZm9ybXMsIGlkZW50aWNhbCB0byBsaW5rXG4gICAgICAgIC8vIFRPRE86IG5lZWQgcmVmYWN0b3IgdG9vXG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLmlkUHJvZ3JhbSlcbiAgICAgICAgY29uc3QgaWRTY2FsZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuaWRQcm9ncmFtLCAnc2NhbGUnKVxuICAgICAgICBjb25zdCBpZFRyYW5zbGF0ZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuaWRQcm9ncmFtLCAndHJhbnNsYXRlJylcblxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZnYoaWRTY2FsZUxvYywgc2NhbGUpXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdihpZFRyYW5zbGF0ZUxvYywgdHJhbnNsYXRlKVxuICAgIH1cblxuICAgIHB1YmxpYyBkcmF3KCkge1xuICAgICAgICBpZiAodGhpcy5jb3VudCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZ2wuZW5hYmxlKHRoaXMuZ2wuQkxFTkQpXG4gICAgICAgICAgICB0aGlzLmdsLmJsZW5kRnVuYyh0aGlzLmdsLk9ORSwgdGhpcy5nbC5PTkVfTUlOVVNfU1JDX0FMUEhBKVxuXG4gICAgICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKVxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGF0dHIubG9jYXRpb24pXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0ciwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYXR0ci5idWZmZXIpXG4gICAgICAgICAgICAgICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgICAgICAgICAgICAgICBhdHRyLmxvY2F0aW9uLFxuICAgICAgICAgICAgICAgICAgICBhdHRyLnNpemUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wuRkxPQVQsXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBhdHRyLnNpemUgKiBhdHRyLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULFxuICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGlmICghYXR0ci5pc0J1aWxkSW4pIHRoaXMuZ2wudmVydGV4QXR0cmliRGl2aXNvcihhdHRyLmxvY2F0aW9uLCAxKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgdGhpcy5nbC5kcmF3QXJyYXlzSW5zdGFuY2VkKHRoaXMuZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQsIHRoaXMuY291bnQpXG5cbiAgICAgICAgICAgIC8vIGRyYXcgaWRcbiAgICAgICAgICAgIHRoaXMuZ2wuYmxlbmRGdW5jKHRoaXMuZ2wuT05FLCB0aGlzLmdsLlpFUk8pXG4gICAgICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5pZFByb2dyYW0pXG4gICAgICAgICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLkZSQU1FQlVGRkVSLCB0aGlzLmlkVGV4dHVyZSlcblxuICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYXR0ci5sb2NhdGlvbilcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLmlkQXR0cmlidXRlcy5nZXQoJ2luX2lkJykgLy8gISBIQVJEQ09ERSBDSEVDS1xuICAgICAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBhdHRyLmJ1ZmZlcilcbiAgICAgICAgICAgIHRoaXMuZ2wudmVydGV4QXR0cmliUG9pbnRlcihcbiAgICAgICAgICAgICAgICBhdHRyLmxvY2F0aW9uLFxuICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSxcbiAgICAgICAgICAgICAgICB0aGlzLmdsLkZMT0FULFxuICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSAqIGF0dHIuYXJyYXkuQllURVNfUEVSX0VMRU1FTlQsXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJEaXZpc29yKGF0dHIubG9jYXRpb24sIDEpXG5cbiAgICAgICAgICAgIHRoaXMuZ2wuZHJhd0FycmF5c0luc3RhbmNlZCh0aGlzLmdsLlRSSUFOR0xFX1NUUklQLCAwLCA0LCB0aGlzLmNvdW50KVxuICAgICAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5GUkFNRUJVRkZFUiwgbnVsbClcblxuICAgICAgICAgICAgdGhpcy5nbC5lbmFibGUodGhpcy5nbC5CTEVORClcbiAgICAgICAgICAgIHRoaXMuZ2wuYmxlbmRGdW5jKHRoaXMuZ2wuT05FLCB0aGlzLmdsLk9ORV9NSU5VU19TUkNfQUxQSEEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBhZGQgZWxlbWVudCBkYXRhIHRvIGVuZ2luZVxuICAgICAqIEBwYXJhbSBlbGVtZW50cyBlbGVtZW50cyBkYXRhXG4gICAgICovXG4gICAgcHVibGljIGFkZERhdGEoZWxlbWVudHM6IE5vZGVbXSB8IExpbmtbXSkge1xuICAgICAgICAvLyBzZXQgYXJyYXlcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudDogTm9kZSB8IExpbmssIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jb3VudCArIGlcbiAgICAgICAgICAgIC8vIGxpbmsgYXR0cmlidXRlID0+IHdlYmdsIGF0dHJpYnV0ZVxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWF0dHIuaXNCdWlsZEluKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5ID0gZ2V0U2hhZGVyQXR0cmlidXRlVmFsdWUoZWxlbWVudCwgYXR0ci5uYW1lKVxuICAgICAgICAgICAgICAgICAgICBhdHRyLmFycmF5LnNldChhcnJheSwgYXR0ci5zaXplICogaW5kZXgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gZWxlbWVudC50eXBlID09PSAnTm9kZScgPyAwIDogMSAvLyBOT1RFOiBub2RlIHJlbmRlciBpZCwgdXNlIGV2ZW4gaW50ZWdlclxuICAgICAgICAgICAgY29uc3QgcmVuZGVySWQgPSAyICogaW5kZXggKyBvZmZzZXRcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcklkQ29sb3IgPSBlbmNvZGVSZW5kZXJJZChyZW5kZXJJZClcbiAgICAgICAgICAgIGNvbnN0IGlkQXR0ciA9IHRoaXMuaWRBdHRyaWJ1dGVzLmdldCgnaW5faWQnKVxuICAgICAgICAgICAgaWRBdHRyLmFycmF5LnNldChbcmVuZGVySWRDb2xvci5yLCByZW5kZXJJZENvbG9yLmcsIHJlbmRlcklkQ29sb3IuYiwgcmVuZGVySWRDb2xvci5hXSwgNCAqIGluZGV4KVxuXG4gICAgICAgICAgICB0aGlzLnNldFJlbmRlcklkT2YoZWxlbWVudCwgcmVuZGVySWQpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgICAgICAgIGlmICghYXR0ci5pc0J1aWxkSW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIGF0dHIuYnVmZmVyKVxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYnVmZmVyU3ViRGF0YShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbC5BUlJBWV9CVUZGRVIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSAqIHRoaXMuY291bnQgKiBhdHRyLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULFxuICAgICAgICAgICAgICAgICAgICBhdHRyLmFycmF5LFxuICAgICAgICAgICAgICAgICAgICBhdHRyLnNpemUgKiB0aGlzLmNvdW50LFxuICAgICAgICAgICAgICAgICAgICBhdHRyLnNpemUgKiBlbGVtZW50cy5sZW5ndGhcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gaWQgYnVmZmVyIGRhdGFcbiAgICAgICAgY29uc3QgYXR0ciA9IHRoaXMuaWRBdHRyaWJ1dGVzLmdldCgnaW5faWQnKVxuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIGF0dHIuYnVmZmVyKVxuICAgICAgICB0aGlzLmdsLmJ1ZmZlclN1YkRhdGEoXG4gICAgICAgICAgICB0aGlzLmdsLkFSUkFZX0JVRkZFUixcbiAgICAgICAgICAgIGF0dHIuc2l6ZSAqIHRoaXMuY291bnQgKiBhdHRyLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULFxuICAgICAgICAgICAgYXR0ci5hcnJheSxcbiAgICAgICAgICAgIGF0dHIuc2l6ZSAqIHRoaXMuY291bnQsXG4gICAgICAgICAgICBhdHRyLnNpemUgKiBlbGVtZW50cy5sZW5ndGhcbiAgICAgICAgKVxuXG4gICAgICAgIHRoaXMuY291bnQgKz0gZWxlbWVudHMubGVuZ3RoXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY2hhbmdlIGFuIGVsZW1lbnQncyBhdHRyaWJ1dGVcbiAgICAgKiBAcGFyYW0gZWxlbWVudCBsaW5rL25vZGUgZGF0YVxuICAgICAqIEBwYXJhbSBhdHRyaWJ1dGUgYXR0cmlidXRlIGtleSB0byBjaGFuZ2VcbiAgICAgKi9cbiAgICBwdWJsaWMgY2hhbmdlQXR0cmlidXRlKGVsZW1lbnQ6IE5vZGUgfCBMaW5rLCBhdHRyaWJ1dGU6IHN0cmluZykge1xuICAgICAgICBjb25zdCByZW5kZXJJZCA9IHRoaXMuZ2V0UmVuZGVySWRPZihlbGVtZW50KVxuICAgICAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IocmVuZGVySWQgLyAyKVxuICAgICAgICBjb25zdCBzaGFkZXJBdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGVCeUVsZW1lbnQoZWxlbWVudCwgYXR0cmlidXRlKVxuICAgICAgICBjb25zdCBzaGFkZXJWYXJpYWJsZU5hbWUgPSBzaGFkZXJBdHRyLm5hbWVcbiAgICAgICAgY29uc3Qgc2hhZGVyVmFyaWFibGVWYWx1ZSA9IHNoYWRlckF0dHIudmFsdWUgYXMgbnVtYmVyW11cbiAgICAgICAgY29uc3QgYXR0ciA9IHRoaXMuYXR0cmlidXRlcy5nZXQoc2hhZGVyVmFyaWFibGVOYW1lKVxuICAgICAgICBpZiAoYXR0ciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBBdHRyaWJ1dGU6ICR7YXR0cmlidXRlfSBpcyBub3Qgc3VwcG9ydGVkIGluIGEgJHtlbGVtZW50LnR5cGV9IGluc3RhbmNlLmApXG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc3QgZGF0YSA9IGF0dHIuZXh0cmFjdEF0dHJpYnV0ZVZhbHVlRnJvbShlbGVtZW50KVxuICAgICAgICBhdHRyLmFycmF5LnNldChzaGFkZXJWYXJpYWJsZVZhbHVlLCBhdHRyLnNpemUgKiBpbmRleClcbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBhdHRyLmJ1ZmZlcilcbiAgICAgICAgdGhpcy5nbC5idWZmZXJTdWJEYXRhKFxuICAgICAgICAgICAgdGhpcy5nbC5BUlJBWV9CVUZGRVIsXG4gICAgICAgICAgICBhdHRyLnNpemUgKiBpbmRleCAqIGF0dHIuYXJyYXkuQllURVNfUEVSX0VMRU1FTlQsXG4gICAgICAgICAgICBhdHRyLmFycmF5LFxuICAgICAgICAgICAgYXR0ci5zaXplICogaW5kZXgsXG4gICAgICAgICAgICBhdHRyLnNpemVcbiAgICAgICAgKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNsZWFyIGRhdGFcbiAgICAgKiBub3QgYWN0dWFsbHkgZXJhc2UgZGF0YSwgYnV0IHJlc2V0IGNvdW50XG4gICAgICovXG4gICAgcHVibGljIGNsZWFyRGF0YSgpIHtcbiAgICAgICAgdGhpcy5jb3VudCA9IDBcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0QXR0cmlidXRlQnlFbGVtZW50KGVsZW1lbnQ6IExpbmsgfCBOb2RlLCBhdHRyaWJ1dGVOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IG1hcFxuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAnTGluaycpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBlbGVtZW50IGFzIExpbmtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gbGluay4kX3N0eWxlIGFzIGludGVyZmFjZXMuTGlua1N0eWxlXG5cbiAgICAgICAgICAgIG1hcCA9IHtcbiAgICAgICAgICAgICAgICBzb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luX3NvdXJjZScsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBbbGluay4kX3NvdXJjZS4kX3Bvc2l0aW9uLngsIGxpbmsuJF9zb3VyY2UuJF9wb3NpdGlvbi55XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbl90YXJnZXQnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW2xpbmsuJF90YXJnZXQuJF9wb3NpdGlvbi54LCBsaW5rLiRfdGFyZ2V0LiRfcG9zaXRpb24ueV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNoYXBlOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbl9zaGFwZScsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBbc3R5bGUuc2hhcGUgPT09ICdkYXNoLWxpbmUnID8gMiA6IHN0eWxlLnNoYXBlID09PSAnY3VydmUnID8gMSA6IDBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5fc3Ryb2tlV2lkdGgnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW3N0eWxlLnN0cm9rZVdpZHRoXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luX3N0cm9rZUNvbG9yJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLnN0cm9rZUNvbG9yLnIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZS5zdHJva2VDb2xvci5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUuc3Ryb2tlQ29sb3IuYixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLnN0cm9rZUNvbG9yLmFcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY3VydmVuZXNzOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbl9jdXJ2ZW5lc3MnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW3N0eWxlLmN1cnZlbmVzc11cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRhc2hJbnRlcnZhbDoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5fZGFzaEludGVydmFsJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtzdHlsZS5kYXNoSW50ZXJ2YWxdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGVsZW1lbnQgYXMgTm9kZVxuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBub2RlLiRfc3R5bGUgYXMgaW50ZXJmYWNlcy5Ob2RlU3R5bGVcblxuICAgICAgICAgICAgbWFwID0ge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbl9wb3NpdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBbbm9kZS4kX3Bvc2l0aW9uLngsIG5vZGUuJF9wb3NpdGlvbi55XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2hhcGU6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luX3NoYXBlJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLnNoYXBlID09PSAncmVjdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHN0eWxlLnNoYXBlID09PSAndHJpYW5nbGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHN0eWxlLnNoYXBlID09PSAnY3Jvc3MnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luX29mZnNldCcsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBbc3R5bGUub2Zmc2V0LngsIHN0eWxlLm9mZnNldC55XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5fZmlsbCcsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBbc3R5bGUuZmlsbC5yLCBzdHlsZS5maWxsLmcsIHN0eWxlLmZpbGwuYiwgc3R5bGUuZmlsbC5hXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luX3N0cm9rZVdpZHRoJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtzdHlsZS5zdHJva2VXaWR0aF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbl9zdHJva2VDb2xvcicsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZS5zdHJva2VDb2xvci5yLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUuc3Ryb2tlQ29sb3IuZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLnN0cm9rZUNvbG9yLmIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZS5zdHJva2VDb2xvci5hXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJvdGF0ZToge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5fcm90YXRlJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtzdHlsZS5yb3RhdGVdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvKiBjaXJjbGUgKi9cbiAgICAgICAgICAgICAgICByOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbl9yJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtzdHlsZS5yXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLyogcmVjdCAqL1xuICAgICAgICAgICAgICAgIHdpZHRoOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbl9zaXplJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtzdHlsZS53aWR0aCwgc3R5bGUuaGVpZ2h0XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbl9zaXplJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtzdHlsZS53aWR0aCwgc3R5bGUuaGVpZ2h0XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLyogdHJpYW5nbGUgKi9cbiAgICAgICAgICAgICAgICB2ZXJ0ZXhBbHBoYToge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5fdmVydGV4QWxwaGEnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW3N0eWxlLnZlcnRleEFscGhhLngsIHN0eWxlLnZlcnRleEFscGhhLnldXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhCZXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbl92ZXJ0ZXhCZXRhJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtzdHlsZS52ZXJ0ZXhCZXRhLngsIHN0eWxlLnZlcnRleEJldGEueV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHZlcnRleEdhbW1hOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbl92ZXJ0ZXhHYW1tYScsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBbc3R5bGUudmVydGV4R2FtbWEueCwgc3R5bGUudmVydGV4R2FtbWEueV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8qIGNyb3NzICovXG4gICAgICAgICAgICAgICAgaW5uZXJXaWR0aDoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5faW5uZXJTaXplJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtzdHlsZS5pbm5lcldpZHRoLCBzdHlsZS5pbm5lckhlaWdodF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGlubmVySGVpZ2h0OiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbl9pbm5lclNpemUnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW3N0eWxlLmlubmVyV2lkdGgsIHN0eWxlLmlubmVySGVpZ2h0XVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhdHRyaWJ1dGVOYW1lIGluIG1hcCkge1xuICAgICAgICAgICAgcmV0dXJuIG1hcFthdHRyaWJ1dGVOYW1lXVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVE9ETzogY29uc2lkZXIgdW51c2VkIHJldmVyc2VkX21hcD9cbiAgICAgICAgY29uc3QgcmV2ZXJzZWRfbWFwID0ge31cbiAgICAgICAgT2JqZWN0LmVudHJpZXMobWFwKS5mb3JFYWNoKChbaywgdl0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdiBhcyBhbnlcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGsgYXMgc3RyaW5nXG4gICAgICAgICAgICByZXZlcnNlZF9tYXBbdmFsdWUubmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZS52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiByZXZlcnNlZF9tYXBbYXR0cmlidXRlTmFtZV1cbiAgICB9XG59XG5cbmNvbnN0IGxpbmtTaGFkZXJBdHRyTWFwID0ge1xuICAgICdpbl9zb3VyY2UnOiAobGluaykgPT4gW2xpbmsuJF9zb3VyY2UuJF9wb3NpdGlvbi54LCBsaW5rLiRfc291cmNlLiRfcG9zaXRpb24ueV0sXG4gICAgJ2luX3RhcmdldCc6IChsaW5rKSA9PiBbbGluay4kX3RhcmdldC4kX3Bvc2l0aW9uLngsIGxpbmsuJF90YXJnZXQuJF9wb3NpdGlvbi55XSxcbiAgICAnaW5fc2hhcGUnOiAobGluaykgPT4gW2xpbmsuJF9zdHlsZS5zaGFwZSA9PT0gJ2Rhc2gtbGluZScgPyAyIDogbGluay4kX3N0eWxlLnNoYXBlID09PSAnY3VydmUnID8gMSA6IDBdLFxuICAgICdpbl9zdHJva2VXaWR0aCc6IChsaW5rKSA9PiBbbGluay4kX3N0eWxlLnN0cm9rZVdpZHRoXSxcbiAgICAnaW5fc3Ryb2tlQ29sb3InOiAobGluaykgPT4gW1xuICAgICAgICBsaW5rLiRfc3R5bGUuc3Ryb2tlQ29sb3IucixcbiAgICAgICAgbGluay4kX3N0eWxlLnN0cm9rZUNvbG9yLmcsXG4gICAgICAgIGxpbmsuJF9zdHlsZS5zdHJva2VDb2xvci5iLFxuICAgICAgICBsaW5rLiRfc3R5bGUuc3Ryb2tlQ29sb3IuYVxuICAgIF0sXG4gICAgJ2luX2N1cnZlbmVzcyc6IChsaW5rKSA9PiBbbGluay4kX3N0eWxlLmN1cnZlbmVzc10sXG4gICAgJ2luX2Rhc2hJbnRlcnZhbCc6IChsaW5rKSA9PiBbbGluay4kX3N0eWxlLmRhc2hJbnRlcnZhbF1cbn1cblxuY29uc3Qgbm9kZVNoYWRlckF0dHJNYXAgPSB7XG4gICAgJ2luX3Bvc2l0aW9uJzogKG5vZGUpID0+IFtub2RlLiRfcG9zaXRpb24ueCwgbm9kZS4kX3Bvc2l0aW9uLnldLFxuICAgICdpbl9zaGFwZSc6IChub2RlKSA9PiBbXG4gICAgICAgIG5vZGUuJF9zdHlsZS5zaGFwZSA9PT0gJ3JlY3QnXG4gICAgICAgICAgICA/IDFcbiAgICAgICAgICAgIDogbm9kZS4kX3N0eWxlLnNoYXBlID09PSAndHJpYW5nbGUnXG4gICAgICAgICAgICAgICAgPyAyXG4gICAgICAgICAgICAgICAgOiBub2RlLiRfc3R5bGUuc2hhcGUgPT09ICdjcm9zcydcbiAgICAgICAgICAgICAgICAgICAgPyAzXG4gICAgICAgICAgICAgICAgICAgIDogMFxuICAgIF0sXG4gICAgJ2luX29mZnNldCc6IChub2RlKSA9PiBbbm9kZS4kX3N0eWxlLm9mZnNldC54LCBub2RlLiRfc3R5bGUub2Zmc2V0LnldLFxuICAgICdpbl9maWxsJzogKG5vZGUpID0+IFtub2RlLiRfc3R5bGUuZmlsbC5yLCBub2RlLiRfc3R5bGUuZmlsbC5nLCBub2RlLiRfc3R5bGUuZmlsbC5iLCBub2RlLiRfc3R5bGUuZmlsbC5hXSxcbiAgICAnaW5fc3Ryb2tlV2lkdGgnOiAobm9kZSkgPT4gW25vZGUuJF9zdHlsZS5zdHJva2VXaWR0aF0sXG4gICAgJ2luX3N0cm9rZUNvbG9yJzogKG5vZGUpID0+IFtcbiAgICAgICAgbm9kZS4kX3N0eWxlLnN0cm9rZUNvbG9yLnIsXG4gICAgICAgIG5vZGUuJF9zdHlsZS5zdHJva2VDb2xvci5nLFxuICAgICAgICBub2RlLiRfc3R5bGUuc3Ryb2tlQ29sb3IuYixcbiAgICAgICAgbm9kZS4kX3N0eWxlLnN0cm9rZUNvbG9yLmFcbiAgICBdLFxuICAgICdpbl9yb3RhdGUnOiAobm9kZSkgPT4gW25vZGUuJF9zdHlsZS5yb3RhdGVdLFxuICAgIC8qIGNpcmNsZSAqL1xuICAgICdpbl9yJzogKG5vZGUpID0+IFtub2RlLiRfc3R5bGUucl0sXG4gICAgLyogcmVjdCAqL1xuICAgICdpbl9zaXplJzogKG5vZGUpID0+IFtub2RlLiRfc3R5bGUud2lkdGgsIG5vZGUuJF9zdHlsZS5oZWlnaHRdLFxuICAgIC8qIHRyaWFuZ2xlICovXG4gICAgJ2luX3ZlcnRleEFscGhhJzogKG5vZGUpID0+IFtub2RlLiRfc3R5bGUudmVydGV4QWxwaGEueCwgbm9kZS4kX3N0eWxlLnZlcnRleEFscGhhLnldLFxuICAgICdpbl92ZXJ0ZXhCZXRhJzogKG5vZGUpID0+IFtub2RlLiRfc3R5bGUudmVydGV4QmV0YS54LCBub2RlLiRfc3R5bGUudmVydGV4QmV0YS55XSxcbiAgICAnaW5fdmVydGV4R2FtbWEnOiAobm9kZSkgPT4gW25vZGUuJF9zdHlsZS52ZXJ0ZXhHYW1tYS54LCBub2RlLiRfc3R5bGUudmVydGV4R2FtbWEueV0sXG4gICAgLyogY3Jvc3MgKi9cbiAgICAnaW5faW5uZXJTaXplJzogKG5vZGUpID0+IFtub2RlLiRfc3R5bGUuaW5uZXJXaWR0aCwgbm9kZS4kX3N0eWxlLmlubmVySGVpZ2h0XSxcbn1cblxuZnVuY3Rpb24gZ2V0U2hhZGVyQXR0cmlidXRlVmFsdWUoZWxlbWVudDogTGluayB8IE5vZGUsIGF0dHJpYnV0ZU5hbWU6IHN0cmluZykge1xuICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdMaW5rJykge1xuICAgICAgICByZXR1cm4gbGlua1NoYWRlckF0dHJNYXBbYXR0cmlidXRlTmFtZV0oZWxlbWVudClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbm9kZVNoYWRlckF0dHJNYXBbYXR0cmlidXRlTmFtZV0oZWxlbWVudClcbiAgICB9XG59XG4iLCIvKipcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XG4gKiBAZGVzY3JpcHRpb24gTGluayB1c2VkIGluIHJlbmRlcmVyXG4gKi9cblxuaW1wb3J0IHsgTGlua01hbmFnZXJDb25maWdzLCBTaGFkZXJzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcydcbmltcG9ydCBMaW5rIGZyb20gJy4uLy4uL2VsZW1lbnRzL2xpbmsnXG5pbXBvcnQgeyBSZW5kZXJFbGVtZW50TWFuYWdlciB9IGZyb20gJy4vcmVuZGVyLWVsZW1lbnQnXG5cbmV4cG9ydCBjbGFzcyBSZW5kZXJMaW5rTWFuYWdlciBleHRlbmRzIFJlbmRlckVsZW1lbnRNYW5hZ2VyIHtcbiAgICAvKipcbiAgICAgKiBjcmVhdGUgcmVuZGVyIGxpbmsgbWFuYWdlclxuICAgICAqIEBwYXJhbSBnbCBXZWJHTCBjb250ZXh0XG4gICAgICogQHBhcmFtIHBhcmFtcyBuZXNzZXNhcnkgY29uZmlncyBmb3IgbGluayBtYW5hZ2VyXG4gICAgICogQHBhcmFtIGlkVGV4dHVyZSB0ZXh0dXJlIHN0b3JlIGVsZW1lbnRzIGlkIG9mIGVhY2ggcGl4ZWxcbiAgICAgKi9cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgICAgIGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0LFxuICAgICAgICBwYXJhbXM6IExpbmtNYW5hZ2VyQ29uZmlncyxcbiAgICAgICAgc2hhZGVyczogU2hhZGVycyxcbiAgICAgICAgaWRUZXh0dXJlOiBXZWJHTFRleHR1cmVcbiAgICApIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICAvKiB3ZWJnbCBjb250ZXh0ICovIGdsLFxuICAgICAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgICAgICAvKiBwYXJhbWV0ZXJzICovIHsuLi5wYXJhbXMsIGluc3RhbmNlVmVydGVjZXM6IFtcbiAgICAgICAgICAgICAgICAtMC41LCAwLjUsIDEuMCxcbiAgICAgICAgICAgICAgICAtMC41LCAtMC41LCAxLjAsXG4gICAgICAgICAgICAgICAgMC41LCAwLjUsIDEuMCxcbiAgICAgICAgICAgICAgICAwLjUsIC0wLjUsIDEuMCxcbiAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgLyogc2hhZGVyIHNlcmllcyAqLyB7XG4gICAgICAgICAgICAgICAgLi4uc2hhZGVyc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qIGlkVGV4dHVyZSAqLyBpZFRleHR1cmVcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnJlbmRlcklkVG9FbGVtZW50ID0ge31cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZWZyZXNoIGFsbCBwb3NpdGlvbiBvZiBlZGdlc1xuICAgICAqIEBwYXJhbSBsaW5rcyBhbGwgbGluayBkYXRhXG4gICAgICovXG4gICAgcHVibGljIHJlZnJlc2hQb3NpdGlvbihsaW5rczogTGlua1tdKSB7XG4gICAgICAgIGNvbnN0IHNvdXJjZUF0dHJpYnV0ZSA9IHRoaXMuYXR0cmlidXRlcy5nZXQoJ2luX3NvdXJjZScpXG4gICAgICAgIGNvbnN0IHRhcmdldEF0dHJpYnV0ZSA9IHRoaXMuYXR0cmlidXRlcy5nZXQoJ2luX3RhcmdldCcpXG5cbiAgICAgICAgbGlua3MuZm9yRWFjaCgobGluaywgaSkgPT4ge1xuICAgICAgICAgICAgc291cmNlQXR0cmlidXRlLmFycmF5WzIgKiBpXSA9IGxpbmsuJF9zb3VyY2UuJF9wb3NpdGlvbi54XG4gICAgICAgICAgICBzb3VyY2VBdHRyaWJ1dGUuYXJyYXlbMiAqIGkgKyAxXSA9IGxpbmsuJF9zb3VyY2UuJF9wb3NpdGlvbi55XG5cbiAgICAgICAgICAgIHRhcmdldEF0dHJpYnV0ZS5hcnJheVsyICogaV0gPSBsaW5rLiRfdGFyZ2V0LiRfcG9zaXRpb24ueFxuICAgICAgICAgICAgdGFyZ2V0QXR0cmlidXRlLmFycmF5WzIgKiBpICsgMV0gPSBsaW5rLiRfdGFyZ2V0LiRfcG9zaXRpb24ueVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGFyciA9IFtzb3VyY2VBdHRyaWJ1dGUsIHRhcmdldEF0dHJpYnV0ZV1cbiAgICAgICAgYXJyLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYXR0ci5idWZmZXIpXG4gICAgICAgICAgICB0aGlzLmdsLmJ1ZmZlclN1YkRhdGEodGhpcy5nbC5BUlJBWV9CVUZGRVIsIDAsIGF0dHIuYXJyYXksIDAsIGF0dHIuc2l6ZSAqIGxpbmtzLmxlbmd0aClcbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCIvKipcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XG4gKiBAZGVzY3JpcHRpb24gTm9kZSB1c2luZyBpbiBSZW5kZXJlclxuICovXG5cbmltcG9ydCB7IE5vZGVNYW5hZ2VyQ29uZmlncywgU2hhZGVycyB9IGZyb20gJy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgTm9kZSBmcm9tICcuLi8uLi9lbGVtZW50cy9ub2RlJ1xuaW1wb3J0IHsgUmVuZGVyRWxlbWVudE1hbmFnZXIgfSBmcm9tICcuL3JlbmRlci1lbGVtZW50J1xuaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmV4cG9ydCBjbGFzcyBSZW5kZXJOb2RlTWFuYWdlciBleHRlbmRzIFJlbmRlckVsZW1lbnRNYW5hZ2VyIHtcbiAgICAvLyBwcml2YXRlIGlkVG9JbmRleDogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfVxuXG4gICAgLyoqXG4gICAgICogY3JlYXRlIHJlbmRlciBub2RlIG1hbmFnZXJcbiAgICAgKiBAcGFyYW0gZ2wgV2ViR0wgY29udGV4dFxuICAgICAqIEBwYXJhbSBwYXJhbXMgbmVzc2VzYXJ5IGNvbmZpZ3MgZm9yIG5vZGUgbWFuYWdlclxuICAgICAqIEBwYXJhbSBpZFRleHR1cmUgdGV4dHVyZSBzdG9yZSBlbGVtZW50cyBpZCBvZiBlYWNoIHBpeGVsXG4gICAgICovXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgICAgICBnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dCxcbiAgICAgICAgcGFyYW1zOiBOb2RlTWFuYWdlckNvbmZpZ3MsXG4gICAgICAgIHNoYWRlcnM6IFNoYWRlcnMsXG4gICAgICAgIC8vIHNoYWRlcnM6IFNoYWRlclNlcmllcyxcbiAgICAgICAgaWRUZXh0dXJlOiBXZWJHTFRleHR1cmVcbiAgICApIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICAvKiB3ZWJnbCBjb250ZXh0ICovIGdsLFxuICAgICAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgICAgICAvKiBwYXJhbWV0ZXJzICovIHsuLi5wYXJhbXMsIGluc3RhbmNlVmVydGVjZXM6IFtcbiAgICAgICAgICAgICAgICAtMC41LCAwLjUsIDEuMCxcbiAgICAgICAgICAgICAgICAtMC41LCAtMC41LCAxLjAsXG4gICAgICAgICAgICAgICAgMC41LCAwLjUsIDEuMCxcbiAgICAgICAgICAgICAgICAwLjUsIC0wLjUsIDEuMCxcbiAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgLyogc2hhZGVyIHNlcmllcyAqLyB7XG4gICAgICAgICAgICAgICAgLi4uc2hhZGVyc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qIGlkVGV4dHVyZSAqLyBpZFRleHR1cmVcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnJlbmRlcklkVG9FbGVtZW50ID0ge31cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZWZyZXNoIGFsbCBub2RlcyBwb3NpdGlvbiBhZnRlciBsYXp5IHVwZGF0ZVxuICAgICAqIEBwYXJhbSBub2RlcyBhbGwgbm9kZSBkYXRhXG4gICAgICovXG4gICAgcHVibGljIHJlZnJlc2hQb3NpdGlvbihub2RlczogTm9kZVtdKSB7XG4gICAgICAgIC8vIHNldCBhcnJheVxuICAgICAgICBjb25zdCBhdHRyID0gdGhpcy5hdHRyaWJ1dGVzLmdldCgnaW5fcG9zaXRpb24nKVxuICAgICAgICBub2Rlcy5mb3JFYWNoKChub2RlLCBpKSA9PiB7XG4gICAgICAgICAgICBhdHRyLmFycmF5WzIgKiBpXSA9IG5vZGUuJF9wb3NpdGlvbi54XG4gICAgICAgICAgICBhdHRyLmFycmF5WzIgKiBpICsgMV0gPSBub2RlLiRfcG9zaXRpb24ueVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYXR0ci5idWZmZXIpXG4gICAgICAgIHRoaXMuZ2wuYnVmZmVyU3ViRGF0YSh0aGlzLmdsLkFSUkFZX0JVRkZFUiwgMCwgYXR0ci5hcnJheSwgMCwgYXR0ci5zaXplICogbm9kZXMubGVuZ3RoKVxuICAgIH1cbn1cbiIsIi8qKlxuICogQGRlc2NyaXB0aW9uIHJlbmRlciBncmFwaCB1c2luZyB3ZWJnbFxuICogQGF1dGhvciBYaWFvZG9uZyBaaGFvIDx6aGFveGlhb2RvbmdAemp1LmVkdS5jbj5cbiAqL1xuXG5pbXBvcnQgKiBhcyBub2RlU2hhZGVycyBmcm9tICcuL3NoYWRlcnMvbm9kZS1zaGFkZXInXG5pbXBvcnQgKiBhcyBsaW5rU2hhZGVycyBmcm9tICcuL3NoYWRlcnMvbGluay1zaGFkZXInXG5pbXBvcnQgTm9kZSBmcm9tICcuLi9lbGVtZW50cy9ub2RlJ1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vZWxlbWVudHMvbGluaydcbmltcG9ydCB7IFJlbmRlck5vZGVNYW5hZ2VyIH0gZnJvbSAnLi9lbGVtZW50cy9yZW5kZXItbm9kZSdcbmltcG9ydCB7IFJlbmRlckxpbmtNYW5hZ2VyIH0gZnJvbSAnLi9lbGVtZW50cy9yZW5kZXItbGluaydcbmltcG9ydCB7IFRyYW5zZm9ybSwgUG9zaXRpb24gfSBmcm9tICcuLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgUmVuZGVyZXJDb25maWdzIH0gZnJvbSAnLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgZGVjb2RlUmVuZGVySWQgfSBmcm9tICcuL3V0aWxzJ1xuXG5jb25zdCBNT0RJRklFRF9FTEVNRU5UU19DT1VOVF9VUFBFUl9USFJFU0hPTEQgPSAxMDAgLy8gd2hlbiBtb2RpZmllZEVsZW1lbnRDb3VudCBpcyBsYXJnZXIgdGhhbiBpdCwgJF9zaG91bGRMYXp5VXBkYXRlIHdpbGwgYmUgdHJ1ZVxuXG5leHBvcnQgY2xhc3MgUmVuZGVyZXIge1xuICAgIHB1YmxpYyBub2RlTWFuYWdlcjogUmVuZGVyTm9kZU1hbmFnZXJcbiAgICBwdWJsaWMgbGlua01hbmFnZXI6IFJlbmRlckxpbmtNYW5hZ2VyXG5cbiAgICBwdWJsaWMgbW9kaWZpZWRFbGVtZW50c0NvdW50ID0gMCAvLyByZWNvcmQgbW9kaWZpZWQgbGluayBudW0gdG8gY29udHJvbCBsYXp5IHVwZGF0ZVxuICAgIHB1YmxpYyBzaG91bGRMYXp5VXBkYXRlID0gZmFsc2UgLy8gZmxhZyB0byBjb250cm9sIGxhenkgdXBkYXRlXG5cbiAgICBwdWJsaWMgcGl4ZWxSYXRpbzogbnVtYmVyXG4gICAgcHJpdmF0ZSBnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dFxuICAgIHByaXZhdGUgYmFja2dyb3VuZENvbG9yOiBDb2xvclxuICAgIHByaXZhdGUgd2lkdGg6IG51bWJlclxuICAgIHByaXZhdGUgaGVpZ2h0OiBudW1iZXJcbiAgICBwcml2YXRlIGlkVGV4dHVyZTogV2ViR0xUZXh0dXJlXG5cbiAgICBwcml2YXRlIGdldEFsbE5vZGVzOiAoKSA9PiBOb2RlW11cbiAgICBwcml2YXRlIGdldEFsbExpbmtzOiAoKSA9PiBMaW5rW11cblxuICAgIC8qKlxuICAgICAqIGNyZWF0ZSByZW5kZXJlciBvYmplY3RcbiAgICAgKiBAcGFyYW0gY29uZmlncyB7Y2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGJhY2tncm91bmRDb2xvcjogQ29sb3IsIGRlZmF1bHRDb25maWdzOiBPYmplY3R9IGNvbmZpZ3MgcGFzc2VkIHRvIHJlbmRlcmVyXG4gICAgICovXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZ3M6IFJlbmRlcmVyQ29uZmlncykge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBjYW52YXMsXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcixcbiAgICAgICAgICAgIG5vZGVMaW1pdCxcbiAgICAgICAgICAgIGxpbmtMaW1pdCxcbiAgICAgICAgICAgIGdldEFsbE5vZGVzLFxuICAgICAgICAgICAgZ2V0QWxsTGlua3NcbiAgICAgICAgfSA9IGNvbmZpZ3NcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5nbCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbDInKVxuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0ViByZXF1aXJlcyBXZWJHTDIgc3VwcG9ydGVkIGJ5IHlvdXIgYnJvd3NlcicpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGhcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcblxuICAgICAgICB0aGlzLnBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxXG5cbiAgICAgICAgdGhpcy5nZXRBbGxOb2RlcyA9IGdldEFsbE5vZGVzXG4gICAgICAgIHRoaXMuZ2V0QWxsTGlua3MgPSBnZXRBbGxMaW5rc1xuXG4gICAgICAgIHRoaXMuaW5pdElkVGV4dHVyZSgpXG5cbiAgICAgICAgdGhpcy5ub2RlTWFuYWdlciA9IG5ldyBSZW5kZXJOb2RlTWFuYWdlcihcbiAgICAgICAgICAgIHRoaXMuZ2wsXG4gICAgICAgICAgICB7IHdpZHRoLCBoZWlnaHQsIGxpbWl0OiBub2RlTGltaXQgfSxcbiAgICAgICAgICAgIG5vZGVTaGFkZXJzLFxuICAgICAgICAgICAgdGhpcy5pZFRleHR1cmVcbiAgICAgICAgKVxuICAgICAgICB0aGlzLmxpbmtNYW5hZ2VyID0gbmV3IFJlbmRlckxpbmtNYW5hZ2VyKFxuICAgICAgICAgICAgdGhpcy5nbCxcbiAgICAgICAgICAgIHsgd2lkdGgsIGhlaWdodCwgbGltaXQ6IGxpbmtMaW1pdCB9LFxuICAgICAgICAgICAgbGlua1NoYWRlcnMsXG4gICAgICAgICAgICB0aGlzLmlkVGV4dHVyZVxuICAgICAgICApXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZGlzcG9zZSByZW5kZXJlciBzdHVmZnNcbiAgICAgKi9cbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcbiAgICAgICAgLy8gcmVmZXI6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMzYwNjU4MVxuICAgICAgICBjb25zdCBudW1UZXh0dXJlVW5pdHMgPSB0aGlzLmdsLmdldFBhcmFtZXRlcih0aGlzLmdsLk1BWF9URVhUVVJFX0lNQUdFX1VOSVRTKVxuICAgICAgICBmb3IgKGxldCB1bml0ID0gMDsgdW5pdCA8IG51bVRleHR1cmVVbml0czsgKyt1bml0KSB7XG4gICAgICAgICAgICB0aGlzLmdsLmFjdGl2ZVRleHR1cmUodGhpcy5nbC5URVhUVVJFMCArIHVuaXQpXG4gICAgICAgICAgICB0aGlzLmdsLmJpbmRUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRV8yRCwgbnVsbClcbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFX0NVQkVfTUFQLCBudWxsKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgbnVsbClcbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG51bGwpXG4gICAgICAgIHRoaXMuZ2wuYmluZFJlbmRlcmJ1ZmZlcih0aGlzLmdsLlJFTkRFUkJVRkZFUiwgbnVsbClcbiAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5GUkFNRUJVRkZFUiwgbnVsbClcbiAgICAgICAgdGhpcy5nbC5nZXRFeHRlbnNpb24oJ1dFQkdMX2xvc2VfY29udGV4dCcpLmxvc2VDb250ZXh0KClcbiAgICAgICAgLy8gVE9ETzogbWF5YmUgbmVlZCBmcmVlIG1vcmUgYnVmZmVycyBvciBzb21ldGhpbmcgZWxzZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHNldCBjbGVhckNvbG9yIGZvciByZW5kZXJlclxuICAgICAqIEBwYXJhbSBjb2xvclxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRCYWNrZ3JvdW5kQ29sb3IoY29sb3I6IENvbG9yKSB7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gY29sb3JcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjbGVhciBkYXRhIGluIHJlbmRlcmVyXG4gICAgICovXG4gICAgcHVibGljIGNsZWFyRGF0YSgpIHtcbiAgICAgICAgdGhpcy5ub2RlTWFuYWdlci5jbGVhckRhdGEoKVxuICAgICAgICB0aGlzLmxpbmtNYW5hZ2VyLmNsZWFyRGF0YSgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogYWRkIG5vZGVzIHRvIG5vZGUgbWFuYWdlclxuICAgICAqIEBwYXJhbSBub2RlcyBub2RlIGRhdGEgaW4gTmV0VlxuICAgICAqL1xuICAgIHB1YmxpYyBhZGROb2Rlcyhub2RlczogTm9kZVtdKSB7XG4gICAgICAgIHRoaXMubm9kZU1hbmFnZXIuYWRkRGF0YShub2RlcylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBhZGQgbGlua3MgdG8gbGluayBtYW5hZ2VyXG4gICAgICogQHBhcmFtIGxpbmtzIGxpbmsgZGF0YSBpbiBOZXRWXG4gICAgICovXG4gICAgcHVibGljIGFkZExpbmtzKGxpbmtzOiBMaW5rW10pIHtcbiAgICAgICAgdGhpcy5saW5rTWFuYWdlci5hZGREYXRhKGxpbmtzKVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRUcmFuc2Zvcm0odHJhbnNmb3JtOiBUcmFuc2Zvcm0pIHtcbiAgICAgICAgdGhpcy5ub2RlTWFuYWdlci5zZXRUcmFuc2Zvcm0odHJhbnNmb3JtKVxuICAgICAgICB0aGlzLmxpbmtNYW5hZ2VyLnNldFRyYW5zZm9ybSh0cmFuc2Zvcm0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZHJhdyBhbGwgZWxlbWVudHNcbiAgICAgKi9cbiAgICBwdWJsaWMgZHJhdygpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkTGF6eVVwZGF0ZSkge1xuICAgICAgICAgICAgLy8gVE9ETzogbm90IG9ubHkgcG9zaXRpb24gbmVlZHMgdG8gYmUgcmVmcmVzaGVkLCBidXQgYWxzbyBvdGhlciBzdHlsZXNcbiAgICAgICAgICAgIHRoaXMubm9kZU1hbmFnZXIucmVmcmVzaFBvc2l0aW9uKHRoaXMuZ2V0QWxsTm9kZXMoKSlcblxuICAgICAgICAgICAgdGhpcy5saW5rTWFuYWdlci5yZWZyZXNoUG9zaXRpb24odGhpcy5nZXRBbGxMaW5rcygpKVxuICAgICAgICAgICAgdGhpcy5zaG91bGRMYXp5VXBkYXRlID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMubW9kaWZpZWRFbGVtZW50c0NvdW50ID0gMFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5GUkFNRUJVRkZFUiwgdGhpcy5pZFRleHR1cmUpXG4gICAgICAgIHRoaXMuZ2wuY2xlYXJDb2xvcigxLCAxLCAxLCAxKVxuICAgICAgICB0aGlzLmdsLmNsZWFyKHRoaXMuZ2wuQ09MT1JfQlVGRkVSX0JJVClcbiAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5GUkFNRUJVRkZFUiwgbnVsbClcblxuICAgICAgICB0aGlzLmdsLmNsZWFyQ29sb3IoXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvci5yLFxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IuZyxcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yLmIsXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvci5hXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5nbC5jbGVhcih0aGlzLmdsLkNPTE9SX0JVRkZFUl9CSVQpXG4gICAgICAgIHRoaXMubGlua01hbmFnZXIuZHJhdygpXG4gICAgICAgIHRoaXMubm9kZU1hbmFnZXIuZHJhdygpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZ2V0IGVsZW1lbnQncyBpZCBhdCAoeCwgeSkgb2YgY2FudmFzIGlmIGV4aXN0c1xuICAgICAqIEBwYXJhbSB4IHggcG9zXG4gICAgICogQHBhcmFtIHkgeSBwb3NcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0SWRCeVBvc2l0aW9uKHBvc2l0aW9uOiBQb3NpdGlvbik6IHN0cmluZyB8IFtzdHJpbmcsIHN0cmluZ10ge1xuICAgICAgICBjb25zdCByZW5kZXJJZCA9IHRoaXMucmVhZElkVGV4dHVyZShwb3NpdGlvbilcbiAgICAgICAgaWYgKHJlbmRlcklkID49IDApIHtcbiAgICAgICAgICAgIGlmIChyZW5kZXJJZCAlIDIgPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBOT1RFOiBub2RlIGhhcyBldmVuIHJlbmRlciBpZCwgbGluayBoYXMgb2RkIHJlbmRlciBpZFxuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLm5vZGVNYW5hZ2VyLmdldEVsZW1lbnRCeVJlbmRlcklkKHJlbmRlcklkKSBhcyBOb2RlXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuaWQoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5rID0gdGhpcy5saW5rTWFuYWdlci5nZXRFbGVtZW50QnlSZW5kZXJJZChyZW5kZXJJZCkgYXMgTGlua1xuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZVRhcmdldCA9IGxpbmsuc291cmNlVGFyZ2V0KClcbiAgICAgICAgICAgICAgICByZXR1cm4gW3NvdXJjZVRhcmdldC5zb3VyY2UuaWQoKSwgc291cmNlVGFyZ2V0LnRhcmdldC5pZCgpXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmVhZCBwaXhlbCB2YWx1ZSBhdCAoeCwgeSkgb2YgdGV4dHVyZVxuICAgICAqIEBwYXJhbSB4IHggcG9zXG4gICAgICogQHBhcmFtIHkgeSBwb3NcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZElkVGV4dHVyZShwb3NpdGlvbjogUG9zaXRpb24pOiBudW1iZXIge1xuICAgICAgICBjb25zdCByYXRpbyA9IHRoaXMucGl4ZWxSYXRpb1xuICAgICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLlJFQURfRlJBTUVCVUZGRVIsIHRoaXMuaWRUZXh0dXJlKVxuICAgICAgICBjb25zdCByZWFkUGl4ZWxCdWZmZXIgPSBuZXcgVWludDhBcnJheShbMjU1LCAyNTUsIDI1NSwgMjU1XSkgLy8gLTFcbiAgICAgICAgdGhpcy5nbC5yZWFkUGl4ZWxzKFxuICAgICAgICAgICAgLy8gIVdhcm5pbmc6IHggYW5kIHkgYXJlIG9wdGlvbmFsIGluIFBvc2l0aW9uLCBuZWVkIHRvIGNoZWNrIHRoZW1cbiAgICAgICAgICAgIHBvc2l0aW9uLnggKiByYXRpbyxcbiAgICAgICAgICAgIHBvc2l0aW9uLnkgKiByYXRpbyxcbiAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAxLFxuICAgICAgICAgICAgdGhpcy5nbC5SR0JBLFxuICAgICAgICAgICAgdGhpcy5nbC5VTlNJR05FRF9CWVRFLFxuICAgICAgICAgICAgcmVhZFBpeGVsQnVmZmVyXG4gICAgICAgIClcbiAgICAgICAgY29uc3Qgb2JqZWN0SUQgPSBkZWNvZGVSZW5kZXJJZChyZWFkUGl4ZWxCdWZmZXIpXG5cbiAgICAgICAgcmV0dXJuIG9iamVjdElEXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaW5jcmVhc2UgbW9kaWZpZWQgZWxlbWVudHMgY291bnRcbiAgICAgKiBXaGVuIGl0IGlzIGxhcmdlciB0aGFuIGEgdGhyZXNob2xkLCB0aGUgbGF6eSB1cGRhdGUgbW9kZSB3aWxsIGJlIHR1cm5lZCBvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5jcmVhc2VNb2RpZmllZEVsZW1lbnRzQ291bnRCeShuOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5tb2RpZmllZEVsZW1lbnRzQ291bnQgKz0gblxuICAgICAgICBpZiAodGhpcy5tb2RpZmllZEVsZW1lbnRzQ291bnQgPiBNT0RJRklFRF9FTEVNRU5UU19DT1VOVF9VUFBFUl9USFJFU0hPTEQpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdWxkTGF6eVVwZGF0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGluaXQgV2ViR0wgdGV4dHVyZSBmb3IgcmVjb3JkaW5nIHBvc2l0aW9uIG9mIGVsZW1lbnRzXG4gICAgICovXG4gICAgcHJpdmF0ZSBpbml0SWRUZXh0dXJlKCkge1xuICAgICAgICBjb25zdCBnbCA9IHRoaXMuZ2xcbiAgICAgICAgY29uc3QgcGl4ZWxSYXRpbyA9IHRoaXMucGl4ZWxSYXRpb1xuICAgICAgICBjb25zdCBzY3JlZW5XaWR0aCA9IHRoaXMud2lkdGggKiBwaXhlbFJhdGlvXG4gICAgICAgIGNvbnN0IHNjcmVlbkhlaWdodCA9IHRoaXMuaGVpZ2h0ICogcGl4ZWxSYXRpb1xuXG4gICAgICAgIGNvbnN0IGZibyA9IGdsLmNyZWF0ZUZyYW1lYnVmZmVyKClcbiAgICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBmYm8pXG5cbiAgICAgICAgY29uc3QgaWRUZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpXG4gICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIGlkVGV4dHVyZSlcbiAgICAgICAgZ2wudGV4SW1hZ2UyRChcbiAgICAgICAgICAgIGdsLlRFWFRVUkVfMkQsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgZ2wuUkdCQSxcbiAgICAgICAgICAgIHNjcmVlbldpZHRoLFxuICAgICAgICAgICAgc2NyZWVuSGVpZ2h0LFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIGdsLlJHQkEsXG4gICAgICAgICAgICBnbC5VTlNJR05FRF9CWVRFLFxuICAgICAgICAgICAgbnVsbFxuICAgICAgICApXG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVIpXG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5MSU5FQVIpXG4gICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpXG4gICAgICAgIGdsLmZyYW1lYnVmZmVyVGV4dHVyZTJEKGdsLkZSQU1FQlVGRkVSLCBnbC5DT0xPUl9BVFRBQ0hNRU5UMCwgZ2wuVEVYVFVSRV8yRCwgaWRUZXh0dXJlLCAwKVxuXG4gICAgICAgIC8vIFRPRE86IG5lZWQgc2ltcGxpZnlcbiAgICAgICAgZ2wuZHJhd0J1ZmZlcnMoWzBdLm1hcCgodikgPT4gdiArIGdsLkNPTE9SX0FUVEFDSE1FTlQwKSlcblxuICAgICAgICBjb25zdCByYm8gPSBnbC5jcmVhdGVSZW5kZXJidWZmZXIoKVxuICAgICAgICBnbC5iaW5kUmVuZGVyYnVmZmVyKGdsLlJFTkRFUkJVRkZFUiwgcmJvKVxuICAgICAgICBnbC5jbGVhckNvbG9yKDEsIDEsIDEsIDEpXG4gICAgICAgIGdsLnJlbmRlcmJ1ZmZlclN0b3JhZ2UoZ2wuUkVOREVSQlVGRkVSLCBnbC5ERVBUSDI0X1NURU5DSUw4LCBzY3JlZW5XaWR0aCwgc2NyZWVuSGVpZ2h0KVxuICAgICAgICBnbC5iaW5kUmVuZGVyYnVmZmVyKGdsLlJFTkRFUkJVRkZFUiwgbnVsbClcbiAgICAgICAgZ2wuZnJhbWVidWZmZXJSZW5kZXJidWZmZXIoXG4gICAgICAgICAgICBnbC5GUkFNRUJVRkZFUixcbiAgICAgICAgICAgIGdsLkRFUFRIX1NURU5DSUxfQVRUQUNITUVOVCxcbiAgICAgICAgICAgIGdsLlJFTkRFUkJVRkZFUixcbiAgICAgICAgICAgIHJib1xuICAgICAgICApXG5cbiAgICAgICAgaWYgKGdsLmNoZWNrRnJhbWVidWZmZXJTdGF0dXMoZ2wuRlJBTUVCVUZGRVIpICE9PSBnbC5GUkFNRUJVRkZFUl9DT01QTEVURSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGcmFtZWJ1ZmZlciBnZW5lcmF0ZSBmYWlsZWQnKVxuICAgICAgICB9XG5cbiAgICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKVxuXG4gICAgICAgIHRoaXMuaWRUZXh0dXJlID0gZmJvXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNvbnN0IHZlcnRleCA9IG5ldyBTaGFkZXIoKVxudmVydGV4LmlucHV0cyA9IHtcbiAgICBpblZlcnRleFBvczogJ3ZlYzMnLFxuICAgIGluX3NoYXBlOiAnZmxvYXQnLFxuICAgIGluX3NvdXJjZTogJ3ZlYzInLFxuICAgIGluX3RhcmdldDogJ3ZlYzInLFxuICAgIGluX2N1cnZlbmVzczogJ2Zsb2F0JyxcbiAgICBpbl9kYXNoSW50ZXJ2YWw6ICdmbG9hdCcsXG4gICAgaW5fc3Ryb2tlV2lkdGg6ICdmbG9hdCcsXG4gICAgaW5fc3Ryb2tlQ29sb3I6ICd2ZWM0J1xufVxudmVydGV4Lm91dHB1dHMgPSB7XG4gICAgc2hhcGU6ICdmbG9hdCcsXG4gICAgc3Ryb2tlQ29sb3I6ICd2ZWM0JyxcbiAgICBzdHJva2VXaWR0aDogJ2Zsb2F0JyxcbiAgICBjcEE6ICd2ZWMyJyxcbiAgICBjcEI6ICd2ZWMyJyxcbiAgICBjcEM6ICd2ZWMyJyxcbiAgICBjdXJ2ZW5lc3M6ICdmbG9hdCcsXG4gICAgZGFzaEludGVydmFsOiAnZmxvYXQnXG59XG52ZXJ0ZXgudW5pZm9ybXMgPSB7XG4gICAgcHJvamVjdGlvbjogJ21hdDMnLFxuICAgIHNjYWxlOiAndmVjMicsXG4gICAgdHJhbnNsYXRlOiAndmVjMidcbn1cbnZlcnRleC5tYWluID0gW1xuICAgIGB2b2lkIG1haW4odm9pZCkge2AsXG4gICAgYCAgICBzdHJva2VDb2xvciA9IGluX3N0cm9rZUNvbG9yO2AsXG4gICAgYCAgICBzdHJva2VXaWR0aCA9IGluX3N0cm9rZVdpZHRoO2AsXG4gICAgYCAgICBzaGFwZSA9IGluX3NoYXBlO2AsXG4gICAgYCAgICBkYXNoSW50ZXJ2YWwgPSBpbl9kYXNoSW50ZXJ2YWw7YCxcbiAgICBgICAgIHZlYzIgc291cmNlID0gaW5fc291cmNlICogc2NhbGUgKyB0cmFuc2xhdGU7YCxcbiAgICBgICAgIHZlYzIgdGFyZ2V0ID0gaW5fdGFyZ2V0ICogc2NhbGUgKyB0cmFuc2xhdGU7YCxcbiAgICBgICAgIHZlYzIgZGVsdGEgPSB0YXJnZXQgLSBzb3VyY2U7YCxcbiAgICBgICAgIHZlYzIgY2VudGVyID0gMC41ICogKHNvdXJjZSArIHRhcmdldCk7YCxcbiAgICBgICAgIGZsb2F0IGxlbiA9IGxlbmd0aChkZWx0YSk7YCxcbiAgICBgICAgIGZsb2F0IHBoaSA9IGF0YW4oZGVsdGEueSAvIGRlbHRhLngpO2AsXG5cbiAgICBgICAgIGZsb2F0IGNvbnRhaW5lcldpZHRoID0gaW5fc3Ryb2tlV2lkdGg7YCxcbiAgICBgICAgIGlmIChpbl9zaGFwZSA9PSAxLikge2AsIC8vIGNpcmNsZSBzaGFwZSBuZWVkIGxhcmdlciBjb250YWluZXJcbiAgICBgICAgICAgIGNvbnRhaW5lcldpZHRoID0gMi4gKiAoaW5fY3VydmVuZXNzICogbGVuICsgaW5fc3Ryb2tlV2lkdGgpOyAvLyBUT0RPOiBjYW4gb3B0aW1pemUgdG8gaGFsZmAsXG4gICAgYCAgICB9YCxcbiAgICBgICAgIHZlYzIgbm9ybWFsID0gbm9ybWFsaXplKHZlYzIoZGVsdGEueSwgLWRlbHRhLngpKTsgLy8gVE9ETzogbGluaydzIG5vcm1hbCwgbmVlZCBjb250cm9sIHNpZGVgLFxuICAgIGAgICAgY3BBID0gc291cmNlO2AsXG4gICAgYCAgICBjcEIgPSBjZW50ZXIgKyBub3JtYWwgKiBsZW4gKiBpbl9jdXJ2ZW5lc3M7YCxcbiAgICBgICAgIGNwQyA9IHRhcmdldDtgLFxuXG4gICAgYGAsXG4gICAgYCAgICBtYXQzIGxpbmVfc2NhbGUgPSBtYXQzKGAsXG4gICAgYCAgICAgICAgbGVuLCAwLCAwLGAsXG4gICAgYCAgICAgICAgMCwgY29udGFpbmVyV2lkdGgsIDAsYCxcbiAgICBgICAgICAgICAwLCAwLCAxYCxcbiAgICBgICAgICk7YCxcbiAgICBgICAgIG1hdDMgbGluZV9yb3RhdGUgPSBtYXQzKGAsXG4gICAgYCAgICAgICAgY29zKHBoaSksIHNpbihwaGkpLCAwLGAsXG4gICAgYCAgICAgICAgLXNpbihwaGkpLCBjb3MocGhpKSwgMCxgLFxuICAgIGAgICAgICAgIDAsIDAsIDFgLFxuICAgIGAgICAgKTtgLFxuICAgIGAgICAgbWF0MyBsaW5lX3RyYW5zbGF0ZSA9IG1hdDMoYCxcbiAgICBgICAgICAgICAxLCAwLCAwLGAsXG4gICAgYCAgICAgICAgMCwgMSwgMCxgLFxuICAgIGAgICAgICAgIGNlbnRlci54LCBjZW50ZXIueSwgMWAsXG4gICAgYCAgICApO2AsXG4gICAgYCAgICBgLFxuICAgIGAgICAgbWF0MyB0cmFuc2Zvcm0gPSBsaW5lX3RyYW5zbGF0ZSAqIGxpbmVfcm90YXRlICogbGluZV9zY2FsZTtgLFxuICAgIGBgLFxuICAgIGAgICAgZ2xfUG9zaXRpb24gPSB2ZWM0KHByb2plY3Rpb24gKiB0cmFuc2Zvcm0gKiBpblZlcnRleFBvcywgMS4pO2AsXG4gICAgYH1gXG5dXG5cbmNvbnN0IGlkVmVydGV4ID0gdmVydGV4LmNvcHkoKVxuaWRWZXJ0ZXguaW5wdXRzWydpbl9pZCddID0gJ3ZlYzQnXG5pZFZlcnRleC5vdXRwdXRzWydpZCddID0gJ3ZlYzQnXG5pZFZlcnRleC5tYWluLnNwbGljZSgxLCAwLCBgaWQgPSBpbl9pZDtgKVxuXG5jb25zdCBmcmFnbWVudCA9IG5ldyBTaGFkZXIoKVxuZnJhZ21lbnQuaW5wdXRzID0geyAuLi52ZXJ0ZXgub3V0cHV0cyB9XG5mcmFnbWVudC5vdXRwdXRzID0ge1xuICAgIGZyYWdtZW50Q29sb3I6ICd2ZWM0J1xufVxuZnJhZ21lbnQudW5pZm9ybXMgPSB7XG4gICAgdmlld3BvcnQ6ICd2ZWMyJyxcbiAgICBwaXhlbFJhdGlvOiAnZmxvYXQnXG59XG5cbmZyYWdtZW50Lm1ldGhvZHMgPSBbXG4gICAgW1xuICAgICAgICBgLy8gcmVmZXJlbmNlIHBhcGVyOiBodHRwOi8vaGhvcHBlLmNvbS9yYXZnLnBkZmAsXG4gICAgICAgIGAvLyBkaXN0YW5jZSB2ZWN0b3IgdG8gb3JpZ2luKDAsIDApYCxcbiAgICAgICAgYGZsb2F0IGRldCh2ZWMyIGEsIHZlYzIgYikgeyByZXR1cm4gYS54ICogYi55IC0gYi54ICogYS55OyB9YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGB2ZWMyIGdldF9kaXN0YW5jZV92ZWN0b3IodmVjMiBiMCwgdmVjMiBiMSwgdmVjMiBiMikge2AsXG4gICAgICAgIGAgIGZsb2F0IGEgPSBkZXQoYjAsIGIyKSwgYiA9IDIuMCAqIGRldChiMSwgYjApLCBkID0gMi4wICogZGV0KGIyLCBiMSk7YCxcbiAgICAgICAgYCAgZmxvYXQgZiA9IGIgKiBkIC0gYSAqIGE7YCxcbiAgICAgICAgYCAgdmVjMiBkMjEgPSBiMiAtIGIxLCBkMTAgPSBiMSAtIGIwLCBkMjAgPSBiMiAtIGIwO2AsXG4gICAgICAgIGAgIHZlYzIgZ2YgPSAyLjAgKiAoYiAqIGQyMSArIGQgKiBkMTAgKyBhICogZDIwKTtgLFxuICAgICAgICBgICBnZiA9IHZlYzIoZ2YueSwgLWdmLngpO2AsXG4gICAgICAgIGAgIHZlYzIgcHAgPSAtZiAqIGdmIC8gZG90KGdmLCBnZik7YCxcbiAgICAgICAgYCAgdmVjMiBkMHAgPSBiMCAtIHBwO2AsXG4gICAgICAgIGAgIGZsb2F0IGFwID0gZGV0KGQwcCwgZDIwKSwgYnAgPSAyLjAgKiBkZXQoZDEwLCBkMHApO2AsXG4gICAgICAgIGAgIGZsb2F0IHQgPSBjbGFtcCgoYXAgKyBicCkgLyAoMi4wICogYSArIGIgKyBkKSwgMC4wLCAxLjApO2AsXG4gICAgICAgIGAgIHJldHVybiBtaXgobWl4KGIwLCBiMSwgdCksIG1peChiMSwgYjIsIHQpLCB0KTtgLFxuICAgICAgICBgfWBcbiAgICBdLFxuICAgIFtcbiAgICAgICAgYGZsb2F0IGRpc3RUb1F1YWRyYXRpY0JlemllckN1cnZlKHZlYzIgcCwgdmVjMiBiMCwgdmVjMiBiMSwgdmVjMiBiMikge2AsXG4gICAgICAgIGAgIHJldHVybiBsZW5ndGgoZ2V0X2Rpc3RhbmNlX3ZlY3RvcihiMCAtIHAsIGIxIC0gcCwgYjIgLSBwKSk7YCxcbiAgICAgICAgYH1gXG4gICAgXSxcbiAgICBbXG4gICAgICAgIGBmbG9hdCBpc0luRGFzaCh2ZWMyIHAsIHZlYzIgcDAsIHZlYzIgcDEsIGludCBkYXNoSW50ZXJ2YWwpIHtgLFxuICAgICAgICBgICBpZiAoZGFzaEludGVydmFsIDw9IDApIHtgLFxuICAgICAgICBgICAgIHJldHVybiAwLjtgLFxuICAgICAgICBgICB9YCxcbiAgICAgICAgYCAgaWYgKGRhc2hJbnRlcnZhbCA+PSBpbnQobGVuZ3RoKHAxIC0gcDApKSkge2AsXG4gICAgICAgIGAgICAgcmV0dXJuIDEuO2AsXG4gICAgICAgIGAgIH1gLFxuICAgICAgICBgICBmbG9hdCBkID0gZG90KChwIC0gcDApLCAocDEgLSBwMCkpIC8gbGVuZ3RoKHAxIC0gcDApO2AsIC8vIHByb2plY3RlZCBwIHRvIHAwLXAxIGxpbmUgYW5kIGNhbGN1bGF0ZSBkaXN0YW5jZSB0byBwMFxuICAgICAgICBgICBpbnQgaWR4ID0gaW50KGQpIC8gZGFzaEludGVydmFsO2AsXG4gICAgICAgIGAgIHJldHVybiAxLiAtIGZsb2F0KGlkeCAlIDIpO2AsXG4gICAgICAgIGB9YFxuICAgIF1cbl1cblxuZnJhZ21lbnQubWFpbiA9IFtcbiAgICBgdm9pZCBtYWluKHZvaWQpIHtgLFxuICAgIGAgIGlmIChzaGFwZSA9PSAwLikge2AsXG4gICAgYCAgICAvLyBsaW5lYCxcbiAgICBgICAgIGZyYWdtZW50Q29sb3IgPSB2ZWM0KHN0cm9rZUNvbG9yLnJnYiAqIHN0cm9rZUNvbG9yLmEsIHN0cm9rZUNvbG9yLmEpO2AsXG4gICAgYCAgfSBlbHNlIGlmIChzaGFwZSA9PSAxLikge2AsXG4gICAgYCAgICAvLyBjdXJ2ZWAsXG4gICAgYCAgICB2ZWMyIHBvcyA9IGdsX0ZyYWdDb29yZC54eSAvIHBpeGVsUmF0aW87YCxcbiAgICBgICAgIHZlYzIgY3BBRmxpcHBlZCA9IHZlYzIoY3BBLngsIHZpZXdwb3J0LnkgLSBjcEEueSk7YCxcbiAgICBgICAgIHZlYzIgY3BCRmxpcHBlZCA9IHZlYzIoY3BCLngsIHZpZXdwb3J0LnkgLSBjcEIueSk7YCxcbiAgICBgICAgIHZlYzIgY3BDRmxpcHBlZCA9IHZlYzIoY3BDLngsIHZpZXdwb3J0LnkgLSBjcEMueSk7YCxcbiAgICBgICAgIGZsb2F0IGRpc3QgPSBkaXN0VG9RdWFkcmF0aWNCZXppZXJDdXJ2ZShwb3MsIGNwQUZsaXBwZWQsIGNwQkZsaXBwZWQsIGNwQ0ZsaXBwZWQpO2AsXG4gICAgYCAgICBmbG9hdCBlcHNpbG9uID0gZndpZHRoKGRpc3QpO2AsXG4gICAgYCAgICBpZiAoZGlzdCA8IHN0cm9rZVdpZHRoIC8gMi4gKyBlcHNpbG9uKSB7YCxcbiAgICBgICAgICAgZmxvYXQgaW5DdXJ2ZSA9IDEuIC0gc21vb3Roc3RlcChzdHJva2VXaWR0aCAvIDIuIC0gZXBzaWxvbiwgc3Ryb2tlV2lkdGggLyAyLiArIGVwc2lsb24sIGRpc3QpO2AsXG4gICAgYCAgICAgIGZyYWdtZW50Q29sb3IgPSBpbkN1cnZlICogdmVjNChzdHJva2VDb2xvci5yZ2IgKiBzdHJva2VDb2xvci5hLCBzdHJva2VDb2xvci5hKTtgLFxuICAgIGAgICAgfSBlbHNlIHtgLFxuICAgIGAgICAgICBkaXNjYXJkO2AsXG4gICAgYCAgICB9YCxcbiAgICBgICB9IGVsc2UgaWYgKHNoYXBlID09IDIuKSB7YCxcbiAgICBgICAgIC8vIGRhc2gtbGluZWAsXG4gICAgYCAgICB2ZWMyIHBvcyA9IGdsX0ZyYWdDb29yZC54eSAvIHBpeGVsUmF0aW87YCxcbiAgICBgICAgIHZlYzIgY3BBRmxpcHBlZCA9IHZlYzIoY3BBLngsIHZpZXdwb3J0LnkgLSBjcEEueSk7YCxcbiAgICBgICAgIHZlYzIgY3BDRmxpcHBlZCA9IHZlYzIoY3BDLngsIHZpZXdwb3J0LnkgLSBjcEMueSk7YCxcbiAgICBgICAgIGlmKGlzSW5EYXNoKHBvcywgY3BBRmxpcHBlZCwgY3BDRmxpcHBlZCwgaW50KGRhc2hJbnRlcnZhbCkpID4gMC41KSB7YCxcbiAgICBgICAgICAgZnJhZ21lbnRDb2xvciA9IHZlYzQoc3Ryb2tlQ29sb3IucmdiICogc3Ryb2tlQ29sb3IuYSwgc3Ryb2tlQ29sb3IuYSk7YCxcbiAgICBgICAgIH0gZWxzZSB7YCxcbiAgICBgICAgICAgZGlzY2FyZDtgLFxuICAgIGAgICAgfWAsXG4gICAgYCAgfWAsXG4gICAgYH1gXG5dXG5cbmNvbnN0IGlkRnJhZ21lbnQgPSBmcmFnbWVudC5jb3B5KClcbmlkRnJhZ21lbnQuaW5wdXRzWydpZCddID0gJ3ZlYzQnXG5cbmNvbnN0IHNlbnRlbmNlc1RvYmVSZXBsYWNlZCA9IFtcbiAgICBgICAgIGZyYWdtZW50Q29sb3IgPSB2ZWM0KHN0cm9rZUNvbG9yLnJnYiAqIHN0cm9rZUNvbG9yLmEsIHN0cm9rZUNvbG9yLmEpO2AsXG4gICAgYCAgICAgIGZyYWdtZW50Q29sb3IgPSBpbkN1cnZlICogdmVjNChzdHJva2VDb2xvci5yZ2IgKiBzdHJva2VDb2xvci5hLCBzdHJva2VDb2xvci5hKTtgLFxuICAgIGAgICAgICBmcmFnbWVudENvbG9yID0gdmVjNChzdHJva2VDb2xvci5yZ2IgKiBzdHJva2VDb2xvci5hLCBzdHJva2VDb2xvci5hKTtgXG5dXG5zZW50ZW5jZXNUb2JlUmVwbGFjZWQuZm9yRWFjaCgoc2VudGVuY2UpID0+IHtcbiAgICBpZEZyYWdtZW50Lm1haW5baWRGcmFnbWVudC5tYWluLmluZGV4T2Yoc2VudGVuY2UpXSA9IGBmcmFnbWVudENvbG9yID0gaWQ7YFxufSlcblxuZXhwb3J0IHsgdmVydGV4LCBpZFZlcnRleCwgZnJhZ21lbnQsIGlkRnJhZ21lbnQgfVxuIiwiaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNvbnN0IHZlcnRleCA9IG5ldyBTaGFkZXIoKVxudmVydGV4LmlucHV0cyA9IHtcbiAgICBpblZlcnRleFBvczogJ3ZlYzMnLFxuICAgIGluX3NoYXBlOiAnZmxvYXQnLFxuICAgIGluX3Bvc2l0aW9uOiAndmVjMicsXG4gICAgaW5fb2Zmc2V0OiAndmVjMicsXG4gICAgaW5fc2l6ZTogJ3ZlYzInLCAvLyB3aWR0aCAmIGhlaWdodFxuICAgIGluX2lubmVyU2l6ZTogJ3ZlYzInLFxuICAgIGluX3JvdGF0ZTogJ2Zsb2F0JyxcbiAgICBpbl9yOiAnZmxvYXQnLFxuICAgIGluX3ZlcnRleEFscGhhOiAndmVjMicsXG4gICAgaW5fdmVydGV4QmV0YTogJ3ZlYzInLFxuICAgIGluX3ZlcnRleEdhbW1hOiAndmVjMicsXG4gICAgaW5fZmlsbDogJ3ZlYzQnLFxuICAgIGluX3N0cm9rZVdpZHRoOiAnZmxvYXQnLFxuICAgIGluX3N0cm9rZUNvbG9yOiAndmVjNCdcbn1cbnZlcnRleC5vdXRwdXRzID0ge1xuICAgIHBvc2l0aW9uOiAndmVjMicsXG4gICAgc2hhcGU6ICdmbG9hdCcsXG4gICAgc2l6ZTogJ3ZlYzInLCAvLyB3aWR0aCAmIGhlaWdodFxuICAgIGlubmVyU2l6ZTogJ3ZlYzInLFxuICAgIHJvdGF0ZTogJ2Zsb2F0JywgLy8gcmVjdFxuICAgIHI6ICdmbG9hdCcsIC8vIGNpcmNsZVxuICAgIHZlcnRleEFscGhhOiAndmVjMicsIC8vIHRyaWFuZ2xlXG4gICAgdmVydGV4QmV0YTogJ3ZlYzInLCAvLyB0cmlhbmdsZVxuICAgIHZlcnRleEdhbW1hOiAndmVjMicsIC8vIHRyaWFuZ2xlXG4gICAgZmlsbDogJ3ZlYzQnLFxuICAgIHN0cm9rZVdpZHRoOiAnZmxvYXQnLFxuICAgIHN0cm9rZUNvbG9yOiAndmVjNCdcbn1cbnZlcnRleC51bmlmb3JtcyA9IHtcbiAgICBwcm9qZWN0aW9uOiAnbWF0MycsXG4gICAgc2NhbGU6ICd2ZWMyJyxcbiAgICB0cmFuc2xhdGU6ICd2ZWMyJyxcbiAgICB2aWV3cG9ydDogJ3ZlYzInLFxuICAgIHBpeGVsUmF0aW86ICdmbG9hdCdcbn1cbnZlcnRleC5tZXRob2RzID0gW1xuICAgIFtcbiAgICAgICAgYHZlYzIgY2FsY3VsYXRlX2lubmVyX3BvaW50ICh2ZWMyIHAxLCB2ZWMyIHAyLCB2ZWMyIHAzKSB7YCxcbiAgICAgICAgYCAgICBmbG9hdCBpbm5lcl9wMSA9IGRpc3RhbmNlKHAyLCBwMyk7YCxcbiAgICAgICAgYCAgICBmbG9hdCBpbm5lcl9wMiA9IGRpc3RhbmNlKHAxLCBwMyk7YCxcbiAgICAgICAgYCAgICBmbG9hdCBpbm5lcl9wMyA9IGRpc3RhbmNlKHAxLCBwMik7YCxcbiAgICAgICAgYCAgICB2ZWMyIGlubmVyID0gKHAxICogaW5uZXJfcDEgKyBwMiAqIGlubmVyX3AyICsgcDMgKiBpbm5lcl9wMykgLyAoaW5uZXJfcDEgKyBpbm5lcl9wMiArIGlubmVyX3AzKTtgLFxuICAgICAgICBgICAgIHJldHVybiBpbm5lcjtgLFxuICAgICAgICBgfWBcbiAgICBdLFxuICAgIFtcbiAgICAgICAgYGZsb2F0IGRpc3RhbmNlMmxpbmUgKHZlYzIgcG9pbnQsIHZlYzIgbGluZV9iZWdpbiwgdmVjMiBsaW5lX2VuZCkge2AsXG4gICAgICAgIGAgICB2ZWMzIGNyb3NzX3Byb2R1Y3QgPSBjcm9zcyh2ZWMzKHBvaW50IC0gbGluZV9iZWdpbiwgMCksIHZlYzMobGluZV9lbmQgLSBsaW5lX2JlZ2luLCAwKSk7YCxcbiAgICAgICAgYCAgIGZsb2F0IGFyZWEgPSBsZW5ndGgoY3Jvc3NfcHJvZHVjdCk7YCxcbiAgICAgICAgYCAgIHJldHVybiBhcmVhIC8gbGVuZ3RoKGxpbmVfYmVnaW4gLSBsaW5lX2VuZCk7YCxcbiAgICAgICAgYH1gXG4gICAgXSxcbiAgICBbXG4gICAgICAgIGBmbG9hdCBjYWxjdWxhdGVfc3Ryb2tlX3NjYWxlICh2ZWMyIHAxLCB2ZWMyIHAyLCB2ZWMyIHAzKSB7YCxcbiAgICAgICAgYCAgIHZlYzIgaW5uZXIgPSBjYWxjdWxhdGVfaW5uZXJfcG9pbnQocDEsIHAyLCBwMyk7YCxcbiAgICAgICAgYCAgIGZsb2F0IHJhZGl1cyA9IGRpc3RhbmNlMmxpbmUoaW5uZXIsIHAxLCBwMik7YCxcbiAgICAgICAgYCAgIGZsb2F0IHN0cm9rZV9zY2FsZSA9IHN0cm9rZVdpZHRoIC8gMi4wIC8gcmFkaXVzO2AsXG4gICAgICAgIGAgICByZXR1cm4gc3Ryb2tlX3NjYWxlO2AsXG4gICAgICAgIGB9YFxuICAgIF1cbl1cbnZlcnRleC5tYWluID0gW1xuICAgIGB2b2lkIG1haW4odm9pZCkge2AsXG4gICAgYCAgIHIgPSBpbl9yO2AsXG4gICAgYCAgIHNpemUgPSBpbl9zaXplO2AsXG4gICAgYCAgIGZsb2F0IHdpZHRoID0gc2l6ZS54O2AsXG4gICAgYCAgIGZsb2F0IGhlaWdodCA9IHNpemUueTtgLFxuICAgIGAgICBpbm5lclNpemUgPSBpbl9pbm5lclNpemU7YCxcbiAgICBgICAgc2hhcGUgPSBpbl9zaGFwZTtgLFxuICAgIGAgICBmaWxsID0gaW5fZmlsbDtgLFxuICAgIGAgICBzdHJva2VDb2xvciA9IGluX3N0cm9rZUNvbG9yO2AsXG4gICAgYCAgIHN0cm9rZVdpZHRoID0gaW5fc3Ryb2tlV2lkdGg7YCxcbiAgICBgICAgcm90YXRlID0gaW5fcm90YXRlO2AsXG4gICAgYCAgIHBvc2l0aW9uID0gc2NhbGUgKiAoaW5fcG9zaXRpb24gKyBpbl9vZmZzZXQpICsgdHJhbnNsYXRlO2AsXG4gICAgYCAgIHZlcnRleEFscGhhID0gaW5fdmVydGV4QWxwaGE7YCxcbiAgICBgICAgdmVydGV4QmV0YSA9IGluX3ZlcnRleEJldGE7YCxcbiAgICBgICAgdmVydGV4R2FtbWEgPSBpbl92ZXJ0ZXhHYW1tYTtgLFxuICAgIGAgICBtYXQzIHNjYWxlX21hdCA9IG1hdDMoYCxcbiAgICBgICAgICAgIDEsIDAsIDAsYCxcbiAgICBgICAgICAgIDAsIDEsIDAsYCxcbiAgICBgICAgICAgIDAsIDAsIDFgLFxuICAgIGAgICApO2AsXG4gICAgYCAgIG1hdDMgcm90YXRlX21hdCA9IG1hdDMoYCxcbiAgICBgICAgICAgIGNvcyhyb3RhdGUpLCBzaW4ocm90YXRlKSwgMCxgLFxuICAgIGAgICAgICAgLXNpbihyb3RhdGUpLCBjb3Mocm90YXRlKSwgMCxgLFxuICAgIGAgICAgICAgMCwgMCwgMWAsXG4gICAgYCAgICk7YCxcbiAgICBgICAgbWF0MyB0cmFuc2xhdGVfbWF0ID0gbWF0MyhgLFxuICAgIGAgICAgICAgMSwgMCwgMCxgLFxuICAgIGAgICAgICAgMCwgMSwgMCxgLFxuICAgIGAgICAgICAgcG9zaXRpb24ueCwgcG9zaXRpb24ueSwgMWAsXG4gICAgYCAgICk7YCxcbiAgICBgICAgaWYgKHNoYXBlID09IDAuMCkge2AsIC8vIGNpcmNsZSBzaGFwZVxuICAgIGAgICAgICAgZmxvYXQgc2l6ZSA9IChyICsgc3Ryb2tlV2lkdGggLyAyLikgKiAyLiAqIDEuNTtgLCAvLyBOT1RFOiBtdWx0aXBseSAyLiB0byBtYWtlIHJhZGl1cyB0byBkaWFtZXRlcjsgbXVsdGlwbHkgMS41IHRvIHByZXZlbnQgYm9yZGVyIGZhY3RvclxuICAgIGAgICAgICAgc2NhbGVfbWF0ID0gbWF0MyhgLFxuICAgIGAgICAgICAgICAgIHNpemUsIDAsIDAsYCxcbiAgICBgICAgICAgICAgICAwLCBzaXplLCAwLGAsXG4gICAgYCAgICAgICAgICAgMCwgMCwgMWAsXG4gICAgYCAgICAgICAgICAgKTtgLFxuICAgIGAgICB9IGVsc2UgaWYgKHNoYXBlID09IDEuMCB8fCBzaGFwZSA9PSAzLjApIHtgLCAvLyByZWN0IHNoYXBlXG4gICAgYCAgICAgICBzY2FsZV9tYXQgPSBtYXQzKGAsXG4gICAgYCAgICAgICAgICAgd2lkdGggKyBzdHJva2VXaWR0aCwgMCwgMCxgLFxuICAgIGAgICAgICAgICAgIDAsIGhlaWdodCArIHN0cm9rZVdpZHRoLCAwLGAsXG4gICAgYCAgICAgICAgICAgMCwgMCwgMWAsXG4gICAgYCAgICAgICApO2AsXG4gICAgYCAgIH0gZWxzZSBpZiAoc2hhcGUgPT0gMi4wKSB7YCwgLy8gdHJpYW5nbGUgc2hhcGVcbiAgICAvLyBjYWxjdWxhdGUgdGhlIG5vcm1hbCBvZiB0aGUgZWRnZTogYWxwaGEgPT4gYmV0YVxuICAgIGAgICAgICAgdmVjMiBpbm5lciA9IGNhbGN1bGF0ZV9pbm5lcl9wb2ludCh2ZXJ0ZXhBbHBoYSwgdmVydGV4QmV0YSwgdmVydGV4R2FtbWEpO2AsXG4gICAgYCAgICAgICBmbG9hdCBzdHJva2Vfc2NhbGUgPSBjYWxjdWxhdGVfc3Ryb2tlX3NjYWxlKHZlcnRleEFscGhhLCB2ZXJ0ZXhCZXRhLCB2ZXJ0ZXhHYW1tYSk7YCxcbiAgICBgICAgICAgIHZlYzIgb3V0ZXJfdmVydGV4QWxwaGEgPSAodmVydGV4QWxwaGEgLSBpbm5lcikgKiAoMS4wICsgc3Ryb2tlX3NjYWxlKSArIGlubmVyO2AsIC8vIGNvbnNpZGVyIHN0cm9rZSBpblxuICAgIGAgICAgICAgdmVjMiBvdXRlcl92ZXJ0ZXhCZXRhID0gKHZlcnRleEJldGEgLSBpbm5lcikgKiAoMS4wICsgc3Ryb2tlX3NjYWxlKSArIGlubmVyO2AsIC8vIGNvbnNpZGVyIHN0cm9rZSBpblxuICAgIGAgICAgICAgdmVjMiBvdXRlcl92ZXJ0ZXhHYW1tYSA9ICh2ZXJ0ZXhHYW1tYSAtIGlubmVyKSAqICgxLjAgKyBzdHJva2Vfc2NhbGUpICsgaW5uZXI7YCwgLy8gY29uc2lkZXIgc3Ryb2tlIGluXG4gICAgLy8gdG8gZW5zdXJlIHRoZSBmcmFnbWVudCBjdXR0aW5nIGlzIHdpdGhpbiB0aGUgcmVjdGFuZ2xlXG4gICAgLy8gYCAgICAgICB3aWR0aCA9IDEuNSAqIChtYXgobWF4KG91dGVyX3ZlcnRleEFscGhhLngsIG91dGVyX3ZlcnRleEJldGEueCksIG91dGVyX3ZlcnRleEdhbW1hLngpIC0gbWluKG1pbihvdXRlcl92ZXJ0ZXhBbHBoYS54LCBvdXRlcl92ZXJ0ZXhCZXRhLngpLCBvdXRlcl92ZXJ0ZXhHYW1tYS54KSk7YCxcbiAgICAvLyBgICAgICAgIGhlaWdodCA9IDEuNSAqIChtYXgobWF4KG91dGVyX3ZlcnRleEFscGhhLnksIG91dGVyX3ZlcnRleEJldGEueSksIG91dGVyX3ZlcnRleEdhbW1hLnkpLSBtaW4obWluKG91dGVyX3ZlcnRleEFscGhhLnksIG91dGVyX3ZlcnRleEJldGEueSksIG91dGVyX3ZlcnRleEdhbW1hLnkpKTtgLFxuICAgIGAgICAgICAgd2lkdGggPSAyLjAgKiBtYXgoYWJzKG1heChtYXgob3V0ZXJfdmVydGV4QWxwaGEueCwgb3V0ZXJfdmVydGV4QmV0YS54KSwgb3V0ZXJfdmVydGV4R2FtbWEueCkpLCBhYnMobWluKG1pbihvdXRlcl92ZXJ0ZXhBbHBoYS54LCBvdXRlcl92ZXJ0ZXhCZXRhLngpLCBvdXRlcl92ZXJ0ZXhHYW1tYS54KSkpO2AsXG4gICAgYCAgICAgICBoZWlnaHQgPSAyLjAgKiBtYXgoYWJzKG1heChtYXgob3V0ZXJfdmVydGV4QWxwaGEueSwgb3V0ZXJfdmVydGV4QmV0YS55KSwgb3V0ZXJfdmVydGV4R2FtbWEueSkpLCBhYnMobWluKG1pbihvdXRlcl92ZXJ0ZXhBbHBoYS55LCBvdXRlcl92ZXJ0ZXhCZXRhLnkpLCBvdXRlcl92ZXJ0ZXhHYW1tYS55KSkpO2AsXG4gICAgYCAgICAgICBzY2FsZV9tYXQgPSBtYXQzKGAsXG4gICAgYCAgICAgICAgICAgd2lkdGgsIDAsIDAsYCxcbiAgICBgICAgICAgICAgICAwLCBoZWlnaHQsIDAsYCxcbiAgICBgICAgICAgICAgICAwLCAwLCAxYCxcbiAgICBgICAgICAgICk7YCxcbiAgICBgICAgfWAsXG4gICAgYCAgIG1hdDMgdHJhbnNmb3JtID0gdHJhbnNsYXRlX21hdCAqIHJvdGF0ZV9tYXQgKiBzY2FsZV9tYXQ7YCxcbiAgICBgICAgZ2xfUG9zaXRpb24gPSB2ZWM0KHByb2plY3Rpb24gKiB0cmFuc2Zvcm0gKiBpblZlcnRleFBvcywgMS4pO2AsXG4gICAgYH1gXG5dXG5cbmNvbnN0IGlkVmVydGV4ID0gdmVydGV4LmNvcHkoKVxuaWRWZXJ0ZXguaW5wdXRzWydpbl9pZCddID0gJ3ZlYzQnXG5pZFZlcnRleC5vdXRwdXRzWydpZCddID0gJ3ZlYzQnXG5pZFZlcnRleC5tYWluLnNwbGljZSgxLCAwLCBgaWQgPSBpbl9pZDtgKVxuXG5jb25zdCBmcmFnbWVudCA9IG5ldyBTaGFkZXIoKVxuZnJhZ21lbnQuaW5wdXRzID0geyAuLi52ZXJ0ZXgub3V0cHV0cyB9XG5mcmFnbWVudC5vdXRwdXRzID0ge1xuICAgIGZyYWdtZW50Q29sb3I6ICd2ZWM0J1xufVxuZnJhZ21lbnQudW5pZm9ybXMgPSB7XG4gICAgdmlld3BvcnQ6ICd2ZWMyJyxcbiAgICBwaXhlbFJhdGlvOiAnZmxvYXQnXG59XG5mcmFnbWVudC5tZXRob2RzID0gW1xuICAgIHZlcnRleC5tZXRob2RzWzBdLFxuICAgIHZlcnRleC5tZXRob2RzWzFdLFxuICAgIHZlcnRleC5tZXRob2RzWzJdLFxuICAgIFtcbiAgICAgICAgYGZsb2F0IHNpZ24gKHZlYzIgcDEsIHZlYzIgcDIsIHZlYzIgcDMpIHtgLFxuICAgICAgICBgICAgIHJldHVybiAocDEueCAtIHAzLngpICogKHAyLnkgLSBwMy55KSAtIChwMi54IC0gcDMueCkgKiAocDEueSAtIHAzLnkpO2AsXG4gICAgICAgIGB9YFxuICAgIF0sXG4gICAgW1xuICAgICAgICBgZmxvYXQgaW5UcmlhbmdsZSgpIHtgLFxuICAgICAgICBgICAgIG1hdDIgcm90YXRlX21hdCA9IG1hdDIoYCxcbiAgICAgICAgYCAgICAgICAgY29zKHJvdGF0ZSksIHNpbihyb3RhdGUpLGAsXG4gICAgICAgIGAgICAgICAgIC1zaW4ocm90YXRlKSwgY29zKHJvdGF0ZSlgLFxuICAgICAgICBgICAgICk7YCxcbiAgICAgICAgYCAgICB2ZWMyIGlubmVyID0gY2FsY3VsYXRlX2lubmVyX3BvaW50KHZlcnRleEFscGhhLCB2ZXJ0ZXhCZXRhLCB2ZXJ0ZXhHYW1tYSk7YCxcbiAgICAgICAgYCAgICBmbG9hdCBzdHJva2Vfc2NhbGUgPSBjYWxjdWxhdGVfc3Ryb2tlX3NjYWxlKHZlcnRleEFscGhhLCB2ZXJ0ZXhCZXRhLCB2ZXJ0ZXhHYW1tYSk7YCxcbiAgICAgICAgYCAgICB2ZWMyIGZsaXBfcG9zID0gdmVjMihwb3NpdGlvbi54LCB2aWV3cG9ydC55IC0gcG9zaXRpb24ueSk7YCxcbiAgICAgICAgYCAgICB2ZWMyIHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZCA9IHJvdGF0ZV9tYXQgKiAoZ2xfRnJhZ0Nvb3JkLnh5IC8gcGl4ZWxSYXRpbyAtIGZsaXBfcG9zKTtgLFxuICAgICAgICBgICAgIHZlYzIgaW5uZXJfdmVydGV4QWxwaGEgPSAodmVydGV4QWxwaGEgLSBpbm5lcikgKiAoMS4wIC0gc3Ryb2tlX3NjYWxlKSArIGlubmVyO2AsXG4gICAgICAgIGAgICAgdmVjMiBpbm5lcl92ZXJ0ZXhCZXRhID0gKHZlcnRleEJldGEgLSBpbm5lcikgKiAoMS4wIC0gc3Ryb2tlX3NjYWxlKSArIGlubmVyO2AsXG4gICAgICAgIGAgICAgdmVjMiBpbm5lcl92ZXJ0ZXhHYW1tYSA9ICh2ZXJ0ZXhHYW1tYSAtIGlubmVyKSAqICgxLjAgLSBzdHJva2Vfc2NhbGUpICsgaW5uZXI7YCxcbiAgICAgICAgYCAgICB2ZWMyIGZsaXBfdmVydGV4QWxwaGEgPSB2ZWMyKGlubmVyX3ZlcnRleEFscGhhLngsIC0gaW5uZXJfdmVydGV4QWxwaGEueSk7YCxcbiAgICAgICAgYCAgICB2ZWMyIGZsaXBfdmVydGV4QmV0YSA9IHZlYzIoaW5uZXJfdmVydGV4QmV0YS54LCAtIGlubmVyX3ZlcnRleEJldGEueSk7YCxcbiAgICAgICAgYCAgICB2ZWMyIGZsaXBfdmVydGV4R2FtbWEgPSB2ZWMyKGlubmVyX3ZlcnRleEdhbW1hLngsIC0gaW5uZXJfdmVydGV4R2FtbWEueSk7YCxcbiAgICAgICAgYCAgICBmbG9hdCBkMSA9IHNpZ24ocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLCBmbGlwX3ZlcnRleEFscGhhLCBmbGlwX3ZlcnRleEJldGEpO2AsXG4gICAgICAgIGAgICAgZmxvYXQgZDIgPSBzaWduKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZCwgZmxpcF92ZXJ0ZXhCZXRhLCBmbGlwX3ZlcnRleEdhbW1hKTtgLFxuICAgICAgICBgICAgIGZsb2F0IGQzID0gc2lnbihyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQsIGZsaXBfdmVydGV4R2FtbWEsIGZsaXBfdmVydGV4QWxwaGEpO2AsXG4gICAgICAgIGAgICAgYm9vbCBoYXNfbmVnID0gKGQxIDwgMC4wKSB8fCAoZDIgPCAwLjApIHx8IChkMyA8IDAuMCk7YCxcbiAgICAgICAgYCAgICBib29sIGhhc19wb3MgPSAoZDEgPiAwLjApIHx8IChkMiA+IDAuMCkgfHwgKGQzID4gMC4wKTtgLFxuICAgICAgICBgICAgIGlmICghKGhhc19uZWcgJiYgaGFzX3BvcykpIHtgLFxuICAgICAgICBgICAgICAgICByZXR1cm4gMS4wO2AsXG4gICAgICAgIGAgICAgfSBlbHNlIHtgLFxuICAgICAgICBgICAgICAgICByZXR1cm4gMC4wO2AsXG4gICAgICAgIGAgICAgfWAsXG4gICAgICAgIGB9YFxuICAgIF0sXG4gICAgW1xuICAgICAgICBgZmxvYXQgaW5UcmlhbmdsZUJvcmRlcigpIHtgLFxuICAgICAgICBgICAgIG1hdDIgcm90YXRlX21hdCA9IG1hdDIoYCxcbiAgICAgICAgYCAgICAgICAgY29zKHJvdGF0ZSksIHNpbihyb3RhdGUpLGAsXG4gICAgICAgIGAgICAgICAgIC1zaW4ocm90YXRlKSwgY29zKHJvdGF0ZSlgLFxuICAgICAgICBgICAgICk7YCxcbiAgICAgICAgYCAgICB2ZWMyIGlubmVyID0gY2FsY3VsYXRlX2lubmVyX3BvaW50KHZlcnRleEFscGhhLCB2ZXJ0ZXhCZXRhLCB2ZXJ0ZXhHYW1tYSk7YCxcbiAgICAgICAgYCAgICBmbG9hdCBzdHJva2Vfc2NhbGUgPSBjYWxjdWxhdGVfc3Ryb2tlX3NjYWxlKHZlcnRleEFscGhhLCB2ZXJ0ZXhCZXRhLCB2ZXJ0ZXhHYW1tYSk7YCxcbiAgICAgICAgYCAgICB2ZWMyIG91dGVyX3ZlcnRleEFscGhhID0gKHZlcnRleEFscGhhIC0gaW5uZXIpICogKDEuMCArIHN0cm9rZV9zY2FsZSkgKyBpbm5lcjtgLFxuICAgICAgICBgICAgIHZlYzIgb3V0ZXJfdmVydGV4QmV0YSA9ICh2ZXJ0ZXhCZXRhIC0gaW5uZXIpICogKDEuMCArIHN0cm9rZV9zY2FsZSkgKyBpbm5lcjtgLFxuICAgICAgICBgICAgIHZlYzIgb3V0ZXJfdmVydGV4R2FtbWEgPSAodmVydGV4R2FtbWEgLSBpbm5lcikgKiAoMS4wICsgc3Ryb2tlX3NjYWxlKSArIGlubmVyO2AsXG4gICAgICAgIGAgICAgdmVjMiBmbGlwX3BvcyA9IHZlYzIocG9zaXRpb24ueCwgdmlld3BvcnQueSAtIHBvc2l0aW9uLnkpO2AsXG4gICAgICAgIGAgICAgdmVjMiByb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQgPSByb3RhdGVfbWF0ICogKGdsX0ZyYWdDb29yZC54eSAvIHBpeGVsUmF0aW8gLSBmbGlwX3Bvcyk7YCxcbiAgICAgICAgYCAgICB2ZWMyIGZsaXBfdmVydGV4QWxwaGEgPSB2ZWMyKG91dGVyX3ZlcnRleEFscGhhLngsIC0gb3V0ZXJfdmVydGV4QWxwaGEueSk7YCxcbiAgICAgICAgYCAgICB2ZWMyIGZsaXBfdmVydGV4QmV0YSA9IHZlYzIob3V0ZXJfdmVydGV4QmV0YS54LCAtIG91dGVyX3ZlcnRleEJldGEueSk7YCxcbiAgICAgICAgYCAgICB2ZWMyIGZsaXBfdmVydGV4R2FtbWEgPXZlYzIob3V0ZXJfdmVydGV4R2FtbWEueCwgLSBvdXRlcl92ZXJ0ZXhHYW1tYS55KTtgLFxuICAgICAgICBgYCxcbiAgICAgICAgYCAgICBmbG9hdCBkMSA9IHNpZ24ocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLCBmbGlwX3ZlcnRleEFscGhhLCBmbGlwX3ZlcnRleEJldGEpO2AsXG4gICAgICAgIGAgICAgZmxvYXQgZDIgPSBzaWduKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZCwgZmxpcF92ZXJ0ZXhCZXRhLCBmbGlwX3ZlcnRleEdhbW1hKTtgLFxuICAgICAgICBgICAgIGZsb2F0IGQzID0gc2lnbihyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQsIGZsaXBfdmVydGV4R2FtbWEsIGZsaXBfdmVydGV4QWxwaGEpO2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgICAgIGJvb2wgaGFzX25lZyA9IChkMSA8PSAwLjApIHx8IChkMiA8PSAwLjApIHx8IChkMyA8PSAwLjApO2AsXG4gICAgICAgIGAgICAgYm9vbCBoYXNfcG9zID0gKGQxID49IDAuMCkgfHwgKGQyID49IDAuMCkgfHwgKGQzID49IDAuMCk7YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGAgICAgYm9vbCBpblRyaWFuZ2xlID0gaW5UcmlhbmdsZSgpID4gMC41O2AsXG4gICAgICAgIGAgICAgYm9vbCBpblRyaWFuZ2xlQm9yZGVyID0gIShoYXNfbmVnICYmIGhhc19wb3MpO2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgICAgIGlmICghaW5UcmlhbmdsZSAmJiBpblRyaWFuZ2xlQm9yZGVyKSB7YCxcbiAgICAgICAgYCAgICAgICAgcmV0dXJuIDEuMDtgLFxuICAgICAgICBgICAgIH0gZWxzZSB7YCxcbiAgICAgICAgYCAgICAgICAgcmV0dXJuIDAuMDtgLFxuICAgICAgICBgICAgIH1gLFxuICAgICAgICBgfWBcbiAgICBdLFxuXG4gICAgW1xuICAgICAgICBgZmxvYXQgaW5SZWN0KCkge2AsXG4gICAgICAgIGAgICAgZmxvYXQgd2lkdGggPSBzaXplLng7YCxcbiAgICAgICAgYCAgICBmbG9hdCBoZWlnaHQgPSBzaXplLnk7YCxcbiAgICAgICAgYCAgICB2ZWMyIGZsaXBfcG9zID0gcG9zaXRpb247YCxcbiAgICAgICAgYCAgICBmbGlwX3Bvcy55ID0gdmlld3BvcnQueSAtIHBvc2l0aW9uLnk7YCxcbiAgICAgICAgYCAgICBtYXQyIHJvdGF0ZV9tYXQgPSBtYXQyKGAsXG4gICAgICAgIGAgICAgICAgIGNvcyhyb3RhdGUpLCBzaW4ocm90YXRlKSxgLFxuICAgICAgICBgICAgICAgICAtc2luKHJvdGF0ZSksIGNvcyhyb3RhdGUpYCxcbiAgICAgICAgYCAgICApO2AsXG4gICAgICAgIGAgICAgdmVjMiByb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQgPSByb3RhdGVfbWF0ICogKGdsX0ZyYWdDb29yZC54eSAvIHBpeGVsUmF0aW8gLSBmbGlwX3Bvcyk7YCxcbiAgICAgICAgYCAgICBmbG9hdCB4X2luID0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueCwgd2lkdGggLyAyLjAgLSBzdHJva2VXaWR0aCAvIDIuMCkgKiAoMS4wIC0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueCwgLSB3aWR0aCAvIDIuMCArIHN0cm9rZVdpZHRoIC8gMi4wKSk7YCxcbiAgICAgICAgYCAgICBmbG9hdCB5X2luID0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueSwgaGVpZ2h0IC8gMi4wIC0gc3Ryb2tlV2lkdGggLyAyLjApICogKDEuMCAtIHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLnksIC0gaGVpZ2h0IC8gMi4wICsgc3Ryb2tlV2lkdGggLyAyLjApKTtgLFxuICAgICAgICBgICAgIHJldHVybiB4X2luICogeV9pbjtgLFxuICAgICAgICBgfWBcbiAgICBdLFxuXG4gICAgW1xuICAgICAgICBgZmxvYXQgaW5SZWN0Qm9yZGVyKCkge2AsXG4gICAgICAgIGAgICAgZmxvYXQgd2lkdGggPSBzaXplLng7YCxcbiAgICAgICAgYCAgICBmbG9hdCBoZWlnaHQgPSBzaXplLnk7YCxcbiAgICAgICAgYCAgICB2ZWMyIGZsaXBfcG9zID0gcG9zaXRpb247YCxcbiAgICAgICAgYCAgICBmbGlwX3Bvcy55ID0gdmlld3BvcnQueSAtIHBvc2l0aW9uLnk7YCxcbiAgICAgICAgYCAgICBtYXQyIHJvdGF0ZV9tYXQgPSBtYXQyKGAsXG4gICAgICAgIGAgICAgICAgIGNvcyhyb3RhdGUpLCBzaW4ocm90YXRlKSxgLFxuICAgICAgICBgICAgICAgICAtc2luKHJvdGF0ZSksIGNvcyhyb3RhdGUpYCxcbiAgICAgICAgYCAgICApO2AsXG4gICAgICAgIGAgICAgdmVjMiByb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQgPSByb3RhdGVfbWF0ICogKGdsX0ZyYWdDb29yZC54eSAvIHBpeGVsUmF0aW8gLSBmbGlwX3Bvcyk7YCxcbiAgICAgICAgYCAgICBmbG9hdCB4X2luX291dGVyID0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueCwgd2lkdGggLyAyLjAgKyBzdHJva2VXaWR0aCAvIDIuMCkgKiAoMS4wIC0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueCwgLSB3aWR0aCAvIDIuMCAtIHN0cm9rZVdpZHRoIC8gMi4wKSk7YCxcbiAgICAgICAgYCAgICBmbG9hdCB5X2luX291dGVyID0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueSwgaGVpZ2h0IC8gMi4wICsgc3Ryb2tlV2lkdGggLyAyLjApICogKDEuMCAtIHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLnksIC0gaGVpZ2h0IC8gMi4wIC0gc3Ryb2tlV2lkdGggLyAyLjApKTtgLFxuICAgICAgICBgICAgIGZsb2F0IHhfaW5faW5uZXIgPSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC54LCB3aWR0aCAvIDIuMCAtIHN0cm9rZVdpZHRoIC8gMi4wKSAqICgxLjAgLSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC54LCAtIHdpZHRoIC8gMi4wICsgc3Ryb2tlV2lkdGggLyAyLjApKTtgLFxuICAgICAgICBgICAgIGZsb2F0IHlfaW5faW5uZXIgPSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC55LCBoZWlnaHQgLyAyLjAgLSBzdHJva2VXaWR0aCAvIDIuMCkgKiAoMS4wIC0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueSwgLSBoZWlnaHQgLyAyLjAgKyBzdHJva2VXaWR0aCAvIDIuMCkpO2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgICAgIHJldHVybiB4X2luX291dGVyICogeV9pbl9vdXRlciAqICgxLjAgLSB4X2luX2lubmVyICogeV9pbl9pbm5lcik7YCxcbiAgICAgICAgYH1gXG4gICAgXSxcblxuICAgIFtcbiAgICAgICAgYGZsb2F0IGluQ3Jvc3MoKSB7YCxcbiAgICAgICAgYCAgICB2ZWMyIGZsaXBfcG9zID0gcG9zaXRpb247YCxcbiAgICAgICAgYCAgICBmbGlwX3Bvcy55ID0gdmlld3BvcnQueSAtIHBvc2l0aW9uLnk7YCxcbiAgICAgICAgYCAgICBtYXQyIHJvdGF0ZV9tYXQgPSBtYXQyKGAsXG4gICAgICAgIGAgICAgICAgIGNvcyhyb3RhdGUpLCBzaW4ocm90YXRlKSxgLFxuICAgICAgICBgICAgICAgICAtc2luKHJvdGF0ZSksIGNvcyhyb3RhdGUpYCxcbiAgICAgICAgYCAgICApO2AsXG4gICAgICAgIGAgICAgdmVjMiByb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQgPSByb3RhdGVfbWF0ICogKGdsX0ZyYWdDb29yZC54eSAvIHBpeGVsUmF0aW8gLSBmbGlwX3Bvcyk7YCxcbiAgICAgICAgYCAgICBmbG9hdCBpbm5lcldpZHRoID0gaW5uZXJTaXplLng7YCxcbiAgICAgICAgYCAgICBmbG9hdCBpbm5lckhlaWdodCA9IGlubmVyU2l6ZS55O2AsXG4gICAgICAgIGAgICAgZmxvYXQgd2lkdGggPSBzaXplLng7YCxcbiAgICAgICAgYCAgICBmbG9hdCBoZWlnaHQgPSBzaXplLnk7YCxcbiAgICAgICAgYCAgICBmbG9hdCB4X2luMSA9IHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLngsIHdpZHRoIC8gMi4wIC0gc3Ryb2tlV2lkdGggLyAyLjApICogKDEuMCAtIHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLngsIC0gd2lkdGggLyAyLjAgKyBzdHJva2VXaWR0aCAvIDIuMCkpO2AsXG4gICAgICAgIGAgICAgZmxvYXQgeV9pbjEgPSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC55LCBpbm5lckhlaWdodCAvIDIuMCAtIHN0cm9rZVdpZHRoIC8gMi4wKSAqICgxLjAgLSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC55LCAtIGlubmVySGVpZ2h0IC8gMi4wICsgc3Ryb2tlV2lkdGggLyAyLjApKTtgLFxuICAgICAgICBgICAgIGZsb2F0IHhfaW4yID0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueCwgaW5uZXJXaWR0aCAvIDIuMCAtIHN0cm9rZVdpZHRoIC8gMi4wKSAqICgxLjAgLSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC54LCAtIGlubmVyV2lkdGggLyAyLjAgKyBzdHJva2VXaWR0aCAvIDIuMCkpO2AsXG4gICAgICAgIGAgICAgZmxvYXQgeV9pbjIgPSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC55LCBoZWlnaHQgLyAyLjAgLSBzdHJva2VXaWR0aCAvIDIuMCkgKiAoMS4wIC0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueSwgLSBoZWlnaHQgLyAyLjAgKyBzdHJva2VXaWR0aCAvIDIuMCkpO2AsXG4gICAgICAgIGAgICAgcmV0dXJuIG1pbigxLiwgeF9pbjEgKiB5X2luMSArIHhfaW4yICogeV9pbjIpO2AsXG4gICAgICAgIGB9YFxuICAgIF0sXG5cbiAgICBbXG4gICAgICAgIGBmbG9hdCBpbkNyb3NzQm9yZGVyKCkge2AsXG4gICAgICAgIGAgICAgdmVjMiBmbGlwX3BvcyA9IHBvc2l0aW9uO2AsXG4gICAgICAgIGAgICAgZmxpcF9wb3MueSA9IHZpZXdwb3J0LnkgLSBwb3NpdGlvbi55O2AsXG4gICAgICAgIGAgICAgbWF0MiByb3RhdGVfbWF0ID0gbWF0MihgLFxuICAgICAgICBgICAgICAgICBjb3Mocm90YXRlKSwgc2luKHJvdGF0ZSksYCxcbiAgICAgICAgYCAgICAgICAgLXNpbihyb3RhdGUpLCBjb3Mocm90YXRlKWAsXG4gICAgICAgIGAgICAgKTtgLFxuICAgICAgICBgICAgIHZlYzIgcm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkID0gcm90YXRlX21hdCAqIChnbF9GcmFnQ29vcmQueHkgLyBwaXhlbFJhdGlvIC0gZmxpcF9wb3MpO2AsXG4gICAgICAgIGAgICAgZmxvYXQgaW5uZXJXaWR0aCA9IGlubmVyU2l6ZS54O2AsXG4gICAgICAgIGAgICAgZmxvYXQgaW5uZXJIZWlnaHQgPSBpbm5lclNpemUueTtgLFxuICAgICAgICBgICAgIGZsb2F0IHdpZHRoID0gc2l6ZS54O2AsXG4gICAgICAgIGAgICAgZmxvYXQgaGVpZ2h0ID0gc2l6ZS55O2AsXG5cbiAgICAgICAgLy8gVE9ETzogbmVlZCByZWZhY3RvclxuICAgICAgICBgICAgIGZsb2F0IHhfaW4xID0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueCwgd2lkdGggLyAyLjAgLSBzdHJva2VXaWR0aCAvIDIuMCkgKiAoMS4wIC0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueCwgLSB3aWR0aCAvIDIuMCArIHN0cm9rZVdpZHRoIC8gMi4wKSk7YCxcbiAgICAgICAgYCAgICBmbG9hdCB5X2luMSA9IHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLnksIGlubmVySGVpZ2h0IC8gMi4wIC0gc3Ryb2tlV2lkdGggLyAyLjApICogKDEuMCAtIHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLnksIC0gaW5uZXJIZWlnaHQgLyAyLjAgKyBzdHJva2VXaWR0aCAvIDIuMCkpO2AsXG4gICAgICAgIGAgICAgZmxvYXQgeF9pbjIgPSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC54LCBpbm5lcldpZHRoIC8gMi4wIC0gc3Ryb2tlV2lkdGggLyAyLjApICogKDEuMCAtIHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLngsIC0gaW5uZXJXaWR0aCAvIDIuMCArIHN0cm9rZVdpZHRoIC8gMi4wKSk7YCxcbiAgICAgICAgYCAgICBmbG9hdCB5X2luMiA9IHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLnksIGhlaWdodCAvIDIuMCAtIHN0cm9rZVdpZHRoIC8gMi4wKSAqICgxLjAgLSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC55LCAtIGhlaWdodCAvIDIuMCArIHN0cm9rZVdpZHRoIC8gMi4wKSk7YCxcbiAgICAgICAgYCAgICBmbG9hdCBvdXRDcm9zcyA9IDEuIC0gbWluKDEuLCB4X2luMSAqIHlfaW4xICsgeF9pbjIgKiB5X2luMik7YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGAgICAgZmxvYXQgeF9vdXQxID0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueCwgd2lkdGggLyAyLjAgKyBzdHJva2VXaWR0aCAvIDIuMCkgKiAoMS4wIC0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueCwgLSB3aWR0aCAvIDIuMCAtIHN0cm9rZVdpZHRoIC8gMi4wKSk7YCxcbiAgICAgICAgYCAgICBmbG9hdCB5X291dDEgPSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC55LCBpbm5lckhlaWdodCAvIDIuMCArIHN0cm9rZVdpZHRoIC8gMi4wKSAqICgxLjAgLSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC55LCAtIGlubmVySGVpZ2h0IC8gMi4wIC0gc3Ryb2tlV2lkdGggLyAyLjApKTtgLFxuICAgICAgICBgICAgIGZsb2F0IHhfb3V0MiA9IHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLngsIGlubmVyV2lkdGggLyAyLjAgKyBzdHJva2VXaWR0aCAvIDIuMCkgKiAoMS4wIC0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueCwgLSBpbm5lcldpZHRoIC8gMi4wIC0gc3Ryb2tlV2lkdGggLyAyLjApKTtgLFxuICAgICAgICBgICAgIGZsb2F0IHlfb3V0MiA9IHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLnksIGhlaWdodCAvIDIuMCArIHN0cm9rZVdpZHRoIC8gMi4wKSAqICgxLjAgLSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC55LCAtIGhlaWdodCAvIDIuMCAtIHN0cm9rZVdpZHRoIC8gMi4wKSk7YCxcbiAgICAgICAgYCAgICBmbG9hdCBpbkNyb3NzQm9yZGVyID0gbWluKDEuLCB4X291dDEgKiB5X291dDEgKyB4X291dDIgKiB5X291dDIpO2AsXG4gICAgICAgIGAgICAgcmV0dXJuIGluQ3Jvc3NCb3JkZXIgKiBvdXRDcm9zcztgLFxuICAgICAgICBgfWBcbiAgICBdLFxuXG4gICAgW1xuICAgICAgICBgZmxvYXQgaW5DaXJjbGUoKSB7YCxcbiAgICAgICAgYCAgICB2ZWMyIGZsaXBfcG9zID0gcG9zaXRpb247YCxcbiAgICAgICAgYCAgICBmbGlwX3Bvcy55ID0gdmlld3BvcnQueSAtIHBvc2l0aW9uLnk7YCxcbiAgICAgICAgYCAgICBmbG9hdCBkaXN0ID0gZGlzdGFuY2UoZ2xfRnJhZ0Nvb3JkLnh5IC8gcGl4ZWxSYXRpbywgZmxpcF9wb3MpO2AsXG4gICAgICAgIGAgICAgcmV0dXJuIDEuIC0gc21vb3Roc3RlcCgociAtIHN0cm9rZVdpZHRoIC8gMi4pIC0gMi4gKiBmd2lkdGgoZGlzdCksIChyIC0gc3Ryb2tlV2lkdGggLyAyLiksIGRpc3QpO2AsXG4gICAgICAgIGB9YFxuICAgIF0sXG5cbiAgICBbXG4gICAgICAgIGBmbG9hdCBpbkNpcmNsZUJvcmRlcigpIHtgLFxuICAgICAgICBgICAgIGlmIChzdHJva2VXaWR0aCA9PSAwLikge2AsXG4gICAgICAgIGAgICAgICByZXR1cm4gMC47YCxcbiAgICAgICAgYCAgICB9YCxcbiAgICAgICAgYCAgICB2ZWMyIGZsaXBfcG9zID0gcG9zaXRpb247YCxcbiAgICAgICAgYCAgICBmbGlwX3Bvcy55ID0gdmlld3BvcnQueSAtIHBvc2l0aW9uLnk7YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGAgICAgZmxvYXQgZGlzdCA9IGRpc3RhbmNlKGdsX0ZyYWdDb29yZC54eSAvIHBpeGVsUmF0aW8sIGZsaXBfcG9zKTtgLFxuICAgICAgICBgICAgIGZsb2F0IGRyYXdPdXRlciA9IDEuIC0gc21vb3Roc3RlcCgociArIHN0cm9rZVdpZHRoIC8gMi4pIC0gZndpZHRoKGRpc3QpLCAociArIHN0cm9rZVdpZHRoIC8gMi4pLCBkaXN0KTtgLFxuICAgICAgICBgICAgIGZsb2F0IGRyYXdJbm5lciA9IDEuIC0gc21vb3Roc3RlcCgociAtIHN0cm9rZVdpZHRoIC8gMi4pIC0gZndpZHRoKGRpc3QpLCAociAtIHN0cm9rZVdpZHRoIC8gMi4pLCBkaXN0KTtgLFxuICAgICAgICBgICAgIHJldHVybiBkcmF3T3V0ZXIgKiAoMS4gLSBkcmF3SW5uZXIpO2AsXG4gICAgICAgIGB9YFxuICAgIF1cbl1cbmZyYWdtZW50Lm1haW4gPSBbXG4gICAgYHZvaWQgbWFpbih2b2lkKSB7YCxcbiAgICBgICAgIGlmIChzaGFwZSA9PSAwLjApIHtgLFxuICAgIGAgICAgICAgIC8vIGNpcmNsZSBzaGFwZWAsXG4gICAgYCAgICAgICAgLy8gYm9yZGVyIGNoZWNrLCB1c2luZyAwLjUoY2VudGVyIG9mIHNtb290aHN0ZXApYCxcbiAgICBgICAgICAgICBpZiAoaW5DaXJjbGUoKSA8IDAuMSAmJiAoaW5DaXJjbGVCb3JkZXIoKSA8IDAuMSkpIHtgLFxuICAgIGAgICAgICAgICAgICBkaXNjYXJkO2AsXG4gICAgYCAgICAgICAgfWAsXG4gICAgYCAgICAgICAgZnJhZ21lbnRDb2xvciA9IGluQ2lyY2xlQm9yZGVyKCkgKiB2ZWM0KHN0cm9rZUNvbG9yLnJnYiAqIHN0cm9rZUNvbG9yLmEsIHN0cm9rZUNvbG9yLmEpICsgaW5DaXJjbGUoKSAqIHZlYzQoZmlsbC5yZ2IgKiBmaWxsLmEsIGZpbGwuYSk7YCxcbiAgICBgICAgIH0gZWxzZSBpZiAoc2hhcGUgPT0gMS4wKSB7YCxcbiAgICBgICAgICAgICBpZiAoaW5SZWN0KCkgPCAwLjUgJiYgKGluUmVjdEJvcmRlcigpIDwgMC41KSkge2AsXG4gICAgYCAgICAgICAgICAgIGRpc2NhcmQ7YCxcbiAgICBgICAgICAgICB9YCxcbiAgICBgICAgICAgICAvLyByZWN0IHNoYXBlYCxcbiAgICBgICAgICAgICBmcmFnbWVudENvbG9yID0gaW5SZWN0Qm9yZGVyKCkgKiB2ZWM0KHN0cm9rZUNvbG9yLnJnYiAqIHN0cm9rZUNvbG9yLmEsIHN0cm9rZUNvbG9yLmEpICsgaW5SZWN0KCkgKiB2ZWM0KGZpbGwucmdiICogZmlsbC5hLCBmaWxsLmEpO2AsXG4gICAgYCAgICB9IGVsc2UgaWYgKHNoYXBlID09IDIuMCkge2AsXG4gICAgYCAgICAgICAgaWYgKGluVHJpYW5nbGUoKSA8IDAuNSAmJiAoaW5UcmlhbmdsZUJvcmRlcigpIDwgMC41KSkge2AsXG4gICAgYCAgICAgICAgICAgIGRpc2NhcmQ7YCxcbiAgICBgICAgICAgICB9YCxcbiAgICBgICAgICAgICAvLyB0cmlhbmdsZSBzaGFwZWAsXG4gICAgYCAgICAgICAgZnJhZ21lbnRDb2xvciA9IGluVHJpYW5nbGVCb3JkZXIoKSAqIHZlYzQoc3Ryb2tlQ29sb3IucmdiICogc3Ryb2tlQ29sb3IuYSwgc3Ryb2tlQ29sb3IuYSkgKyBpblRyaWFuZ2xlKCkgKiB2ZWM0KGZpbGwucmdiICogZmlsbC5hLCBmaWxsLmEpO2AsXG4gICAgYCAgICB9IGVsc2UgaWYgKHNoYXBlID09IDMuMCkge2AsXG4gICAgYCAgICAgICAgaWYgKGluQ3Jvc3MoKSA8IDAuNSAmJiAoaW5Dcm9zc0JvcmRlcigpIDwgMC41KSkge2AsXG4gICAgYCAgICAgICAgICAgIGRpc2NhcmQ7YCxcbiAgICBgICAgICAgICB9YCxcbiAgICBgICAgICAgICAvLyBjcm9zcyBzaGFwZWAsXG4gICAgYCAgICAgICAgZnJhZ21lbnRDb2xvciA9IGluQ3Jvc3NCb3JkZXIoKSAqIHZlYzQoc3Ryb2tlQ29sb3IucmdiICogc3Ryb2tlQ29sb3IuYSwgc3Ryb2tlQ29sb3IuYSkgKyBpbkNyb3NzKCkgKiB2ZWM0KGZpbGwucmdiICogZmlsbC5hLCBmaWxsLmEpO2AsXG4gICAgYCAgICB9YCxcbiAgICBgfWBcbl1cblxuY29uc3QgaWRGcmFnbWVudCA9IGZyYWdtZW50LmNvcHkoKVxuaWRGcmFnbWVudC5pbnB1dHNbJ2lkJ10gPSAndmVjNCdcbi8vIGRlbGV0ZSBvbGQgZnJhZ21lbnRDb2xvciBhbmQgYWRkIG5ldyBmcmFnbWVudENvbG9yXG5jb25zdCBzZW50ZW5jZXNUb2JlUmVwbGFjZWQgPSBbXG4gICAgYCAgICAgICAgZnJhZ21lbnRDb2xvciA9IGluQ2lyY2xlQm9yZGVyKCkgKiB2ZWM0KHN0cm9rZUNvbG9yLnJnYiAqIHN0cm9rZUNvbG9yLmEsIHN0cm9rZUNvbG9yLmEpICsgaW5DaXJjbGUoKSAqIHZlYzQoZmlsbC5yZ2IgKiBmaWxsLmEsIGZpbGwuYSk7YCxcbiAgICBgICAgICAgICBmcmFnbWVudENvbG9yID0gaW5SZWN0Qm9yZGVyKCkgKiB2ZWM0KHN0cm9rZUNvbG9yLnJnYiAqIHN0cm9rZUNvbG9yLmEsIHN0cm9rZUNvbG9yLmEpICsgaW5SZWN0KCkgKiB2ZWM0KGZpbGwucmdiICogZmlsbC5hLCBmaWxsLmEpO2AsXG4gICAgYCAgICAgICAgZnJhZ21lbnRDb2xvciA9IGluVHJpYW5nbGVCb3JkZXIoKSAqIHZlYzQoc3Ryb2tlQ29sb3IucmdiICogc3Ryb2tlQ29sb3IuYSwgc3Ryb2tlQ29sb3IuYSkgKyBpblRyaWFuZ2xlKCkgKiB2ZWM0KGZpbGwucmdiICogZmlsbC5hLCBmaWxsLmEpO2AsXG4gICAgYCAgICAgICAgZnJhZ21lbnRDb2xvciA9IGluQ3Jvc3NCb3JkZXIoKSAqIHZlYzQoc3Ryb2tlQ29sb3IucmdiICogc3Ryb2tlQ29sb3IuYSwgc3Ryb2tlQ29sb3IuYSkgKyBpbkNyb3NzKCkgKiB2ZWM0KGZpbGwucmdiICogZmlsbC5hLCBmaWxsLmEpO2Bcbl1cbnNlbnRlbmNlc1RvYmVSZXBsYWNlZC5mb3JFYWNoKChzZW50ZW5jZSkgPT4ge1xuICAgIGlkRnJhZ21lbnQubWFpbltpZEZyYWdtZW50Lm1haW4uaW5kZXhPZihzZW50ZW5jZSldID0gYGZyYWdtZW50Q29sb3IgPSBpZDtgXG59KVxuXG5leHBvcnQgeyB2ZXJ0ZXgsIGlkVmVydGV4LCBmcmFnbWVudCwgaWRGcmFnbWVudCB9XG4iLCIvKipcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XG4gKiBAZGVzY3JpcHRpb24gdXRpbGl0eSBmdW5jdGlvbnMgZm9yIHJlbmRlcmVyXG4gKi9cblxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgVmFyaWFibGUsIFJlbmRlckF0dHJpYnV0ZSB9IGZyb20gJy4vaW50ZXJmYWNlcydcblxuLyoqXG4gKiBjb21waWxlIHdlYmdsIHNoYWRlclxuICogQHBhcmFtIGdsIFdlYkdMIGluc3RhbmNlXG4gKiBAcGFyYW0gc2hhZGVyU3RyIHNoYWRlciBmaWxlIGluIHN0cmluZ1xuICogQHBhcmFtIHNoYWRlclR5cGUgdmVydGV4IG9yIGZyYWdtZW50IHNoYWRlclxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZVNoYWRlcihcbiAgICBnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dCxcbiAgICBzaGFkZXJTdHI6IHN0cmluZyxcbiAgICBzaGFkZXJUeXBlOiBudW1iZXJcbik6IFdlYkdMU2hhZGVyIHtcbiAgICBjb25zdCBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoc2hhZGVyVHlwZSlcbiAgICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzaGFkZXJTdHIpXG4gICAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpXG4gICAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaGFkZXIgY29tcGlsZSBmYWlsZWQ6ICcgKyBnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcikpXG4gICAgfVxuXG4gICAgcmV0dXJuIHNoYWRlclxufVxuXG4vKipcbiAqIGdlbmVyYXRlIFdlYkdMIHByb2dyYW1cbiAqIEBwYXJhbSBnbCBXZWJHTCBpbnN0YW5jZVxuICogQHBhcmFtIHZlcnRTaGFkZXJTdHIgdmVydGV4IHNoYWRlciBpbiBzdHJpbmcgZm9ybWF0XG4gKiBAcGFyYW0gZnJhZ1NoYWRlclN0ciBmcmFnbWVudCBzaGFkZXIgaW4gc3RyaW5nIGZvcm1hdFxuICogQHBhcmFtIGF0dHJpYnV0ZXMgYXR0cmlidXRlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbShcbiAgICBnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dCxcbiAgICB2ZXJ0U2hhZGVyU3RyOiBzdHJpbmcsXG4gICAgZnJhZ1NoYWRlclN0cjogc3RyaW5nLFxuICAgIGF0dHJpYnV0ZXM6IE1hcDxzdHJpbmcsIFJlbmRlckF0dHJpYnV0ZT5cbik6IFdlYkdMUHJvZ3JhbSB7XG4gICAgY29uc3QgdmVydFNoYWRlciA9IGNvbXBpbGVTaGFkZXIoZ2wsIHZlcnRTaGFkZXJTdHIsIGdsLlZFUlRFWF9TSEFERVIpXG4gICAgY29uc3QgZnJhZ1NoYWRlciA9IGNvbXBpbGVTaGFkZXIoZ2wsIGZyYWdTaGFkZXJTdHIsIGdsLkZSQUdNRU5UX1NIQURFUilcblxuICAgIGNvbnN0IHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKClcblxuICAgIGF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICBnbC5iaW5kQXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgYXR0ci5sb2NhdGlvbiwgYXR0ci5uYW1lKVxuICAgIH0pXG5cbiAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydFNoYWRlcilcbiAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnJhZ1NoYWRlcilcblxuICAgIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pXG4gICAgaWYgKCFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkxJTktfU1RBVFVTKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBsaW5rIHNoYWRlcnM6ICR7Z2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSl9YClcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvZ3JhbVxufVxuXG4vKipcbiAqIGNyZWF0ZSBXZWJHTCBhcnJheSBidWZmZXIgZ2l2ZW4gZGF0YSBhcnJheVxuICogQHBhcmFtIGdsIFdlYkdMIGNvbnRleHRcbiAqIEBwYXJhbSBkYXRhIGRhdGEgdG8gc3RvcmUgaW4gYnVmZmVyXG4gKiBAcmV0dXJucyBXZWJHTCBidWZmZXIgc3RvcmUgZ2l2ZW4gZGF0YVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQXJyYXlCdWZmZXIoZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQsIGRhdGE6IEZsb2F0MzJBcnJheSk6IFdlYkdMQnVmZmVyIHtcbiAgICBjb25zdCBidWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKVxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBidWZmZXIpXG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIGRhdGEsIGdsLkRZTkFNSUNfRFJBVylcbiAgICByZXR1cm4gYnVmZmVyXG59XG5cbi8qKlxuICogZXh0cmFjdCBhdHRyaWJ1dGVzIGZyb20gYSBzaGFkZXIgc3JpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBzaGFkZXJTdHJcbiAqIEByZXR1cm5zIHtSZW5kZXJBdHRyaWJ1dGVbXX0gYXR0cmlidXRlcyBhcnJheVxuICovXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdEF0dHJpYnV0ZXNGcm9tU2hhZGVyKHNoYWRlcjogU2hhZGVyKTogTWFwPHN0cmluZywgUmVuZGVyQXR0cmlidXRlPiB7XG4gICAgLy8gY29uc3QgbWF0Y2hpbmdzID0gc2hhZGVyU3RyLm1hdGNoKC9pblxccy4qOy9nKVxuICAgIGNvbnN0IGlucHV0cyA9IHNoYWRlci5pbnB1dHNcbiAgICBjb25zdCBhdHRyaWJ1dGVzTWFwID0gbmV3IE1hcCgpXG4gICAgT2JqZWN0LmVudHJpZXMoaW5wdXRzKS5mb3JFYWNoKChbbmFtZSwgdHlwZV0sIGxvY2F0aW9uKSA9PiB7XG4gICAgICAgIGxldCBzaXplID0gMVxuICAgICAgICBpZiAodHlwZS5zbGljZSgwLCAzKSA9PT0gJ3ZlYycpIHtcbiAgICAgICAgICAgIHNpemUgPSBOdW1iZXIodHlwZS5zbGljZSgtMSkpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGlzQnVpbGRJbiA9IGZhbHNlXG4gICAgICAgIGlmIChuYW1lID09PSAnaW5WZXJ0ZXhQb3MnKSB7XG4gICAgICAgICAgICAvLyBhbiBpbnN0YW5jZSBpcyBmb3JtZWQgYnkgdHdvIHRyaWFuZ2xlcyxcbiAgICAgICAgICAgIC8vIHRodXMgd2UgbmVlZCBmb3VyIHBvaW50IHBvc2l0aW9ucyB0byBpbml0aWFsIHRoZSBpbnN0YW5jZVxuICAgICAgICAgICAgLy8gbW9yZSBkZXRhaWxzOiBodHRwczovL3BhbmppYWNoZW5nLnNpdGUvd2lraS8yMDE5LzA2LzA2L3dlYkdML1dlYkdMLUJhdGNoRHJhdyVFNCVCQiVBMyVFNyVBMCU4MSVFOSU5OCU4NSVFOCVBRiVCQislRTclOTAlODYlRTglQTclQTMvXG4gICAgICAgICAgICBpc0J1aWxkSW4gPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgYXR0cmlidXRlc01hcC5zZXQobmFtZSwge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHNpemUsIC8vIHRoZSBzcGFjZSBvZiBvbmUgYXR0cmlidXRlLCBlLmcuIHZlYzMgb2N1cHBpZXMgMyB1bml0cyBvZiBzcGFjZVxuICAgICAgICAgICAgbG9jYXRpb24sIC8vIHRoZSBhcHBlYXJhbmNlIG9yZGVyIG9mIG9uZSBhdHRyaWJ1dGUgaW4gdGhlIHNoYWRlciBjb2RlLCB3aGljaCBpcyBlcXVhbCB0byB0aGUgcmVzdWx0IG9mIGdldEF0dHJpYkxvY2F0aW9uXG4gICAgICAgICAgICBpc0J1aWxkSW4sIC8vIHdoaWNoIG1lYW5zIGZvdXIgdmVydGljZXMgaW4gb25lIGVsZW1lbnQ6IGluVmVydGV4UG9zXG4gICAgICAgICAgICBleHRyYWN0QXR0cmlidXRlVmFsdWVGcm9tOiAoKSA9PiBbXSAvLyBhIGZ1bmN0aW9uIHdoaWNoIGlzIHVzZSB0byBhcHBlbmQgYW4gZWxlbWVudCBpbnRvIHRoZSBhcnJheSBvZiB0aGlzIGF0dHJpYnV0ZVxuICAgICAgICB9KVxuICAgIH0pXG4gICAgLy8gbWF0Y2hpbmdzLmZvckVhY2goKG1hdGNoLCBsb2NhdGlvbikgPT4ge1xuICAgIC8vICAgICBjb25zdCBuYW1lID0gbWF0Y2guc3BsaXQoJyAnKVsyXS5zbGljZSgwLCAtMSlcbiAgICAvLyAgICAgY29uc3QgdHlwZSA9IG1hdGNoLnNwbGl0KCcgJylbMV1cbiAgICAvLyAgICAgbGV0IHNpemUgPSAxXG4gICAgLy8gICAgIGlmICh0eXBlLnNsaWNlKDAsIDMpID09PSAndmVjJykge1xuICAgIC8vICAgICAgICAgc2l6ZSA9IE51bWJlcih0eXBlLnNsaWNlKC0xKSlcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBsZXQgaXNCdWlsZEluID0gZmFsc2VcbiAgICAvLyAgICAgaWYgKG5hbWUgPT09ICdpblZlcnRleFBvcycpIHtcbiAgICAvLyAgICAgICAgIC8vIGFuIGluc3RhbmNlIGlzIGZvcm1lZCBieSB0d28gdHJpYW5nbGVzLFxuICAgIC8vICAgICAgICAgLy8gdGh1cyB3ZSBuZWVkIGZvdXIgcG9pbnQgcG9zaXRpb25zIHRvIGluaXRpYWwgdGhlIGluc3RhbmNlXG4gICAgLy8gICAgICAgICAvLyBtb3JlIGRldGFpbHM6IGh0dHBzOi8vcGFuamlhY2hlbmcuc2l0ZS93aWtpLzIwMTkvMDYvMDYvd2ViR0wvV2ViR0wtQmF0Y2hEcmF3JUU0JUJCJUEzJUU3JUEwJTgxJUU5JTk4JTg1JUU4JUFGJUJCKyVFNyU5MCU4NiVFOCVBNyVBMy9cbiAgICAvLyAgICAgICAgIGlzQnVpbGRJbiA9IHRydWVcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBhdHRyaWJ1dGVzTWFwLnNldChuYW1lLCB7XG4gICAgLy8gICAgICAgICBuYW1lLFxuICAgIC8vICAgICAgICAgc2l6ZSwgLy8gdGhlIHNwYWNlIG9mIG9uZSBhdHRyaWJ1dGUsIGUuZy4gdmVjMyBvY3VwcGllcyAzIHVuaXRzIG9mIHNwYWNlXG4gICAgLy8gICAgICAgICBsb2NhdGlvbiwgLy8gdGhlIGFwcGVhcmFuY2Ugb3JkZXIgb2Ygb25lIGF0dHJpYnV0ZSBpbiB0aGUgc2hhZGVyIGNvZGUsIHdoaWNoIGlzIGVxdWFsIHRvIHRoZSByZXN1bHQgb2YgZ2V0QXR0cmliTG9jYXRpb25cbiAgICAvLyAgICAgICAgIGlzQnVpbGRJbiwgLy8gd2hpY2ggbWVhbnMgZm91ciB2ZXJ0aWNlcyBpbiBvbmUgZWxlbWVudDogaW5WZXJ0ZXhQb3NcbiAgICAvLyAgICAgICAgIGV4dHJhY3RBdHRyaWJ1dGVWYWx1ZUZyb206ICgpID0+IFtdIC8vIGEgZnVuY3Rpb24gd2hpY2ggaXMgdXNlIHRvIGFwcGVuZCBhbiBlbGVtZW50IGludG8gdGhlIGFycmF5IG9mIHRoaXMgYXR0cmlidXRlXG4gICAgLy8gICAgIH0pXG4gICAgLy8gfSlcbiAgICByZXR1cm4gYXR0cmlidXRlc01hcFxufVxuXG4vKipcbiAqIGVuY29kZSBhIHJlbmRlciBpZCBhcyBjb2xvciB0byBwYXNzIGluIHRleHR1cmVcbiAqIEBwYXJhbSBpZCByZW5kZXIgaWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZVJlbmRlcklkKGlkOiBudW1iZXIpOiBDb2xvciB7XG4gICAgLy8gc3BsaXQgYSBsYXJnZSBudW1iZXIgYnkgOC1iaXQ6IGlkID0gY29uY2F0KGEsIGIsIGcsIHIpLCBhbmQgbm9ybWFsaXplIHRoZW0gaW50byAoMCwgMSlcbiAgICBjb25zdCByID0gKGlkICYgMjU1KSAvIDI1NS4wXG4gICAgY29uc3QgZyA9ICgoaWQgPj4gOCkgJiAyNTUpIC8gMjU1LjBcbiAgICBjb25zdCBiID0gKChpZCA+PiAxNikgJiAyNTUpIC8gMjU1LjBcbiAgICBjb25zdCBhID0gKChpZCA+PiAyNCkgJiAyNTUpIC8gMjU1LjBcbiAgICByZXR1cm4geyByLCBnLCBiLCBhIH1cbn1cblxuLyoqXG4gKiBkZWNvZGUgcGl4ZWwgdmFsdWUgdG8gbnVtYmVyXG4gKiBAcGFyYW0gcGl4ZWxWYWwgYSBwaXhlbCdzIHZhbHVlIG9uIHRleHR1cmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZVJlbmRlcklkKHBpeGVsVmFsOiBVaW50OEFycmF5KTogbnVtYmVyIHtcbiAgICAvLyBwYXJzZSBub3JtYWxpemVkIHBhcnRzIG9mIGlkIG51bWJlciwgYml0IHNoaWZ0IHRvIG9yaWdpbiBwb3NpdGlvbiBhbmQgY29uY2F0XG4gICAgY29uc3QgcmVuZGVySWQgPSBwaXhlbFZhbFswXSB8IChwaXhlbFZhbFsxXSA8PCA4KSB8IChwaXhlbFZhbFsyXSA8PCAxNikgfCAocGl4ZWxWYWxbM10gPDwgMjQpXG4gICAgcmV0dXJuIHJlbmRlcklkXG59XG5cbmV4cG9ydCBjbGFzcyBTaGFkZXIge1xuICAgIHB1YmxpYyBpbnB1dHM6IFZhcmlhYmxlID0ge31cbiAgICBwdWJsaWMgb3V0cHV0czogVmFyaWFibGUgPSB7fVxuICAgIHB1YmxpYyB1bmlmb3JtczogVmFyaWFibGUgPSB7fVxuICAgIHB1YmxpYyBtZXRob2RzOiBzdHJpbmdbXVtdID0gW1tdXVxuICAgIHB1YmxpYyBtYWluOiBzdHJpbmdbXSA9IFtdXG4gICAgcHJpdmF0ZSBoZWFkZXIgPSBgI3ZlcnNpb24gMzAwIGVzXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcbmBcbiAgICBwdWJsaWMgY29weSgpIHtcbiAgICAgICAgY29uc3QgY29weVNoYWRlciA9IG5ldyBTaGFkZXIoKVxuICAgICAgICBjb3B5U2hhZGVyLmlucHV0cyA9IHsgLi4udGhpcy5pbnB1dHMgfVxuICAgICAgICBjb3B5U2hhZGVyLm91dHB1dHMgPSB7IC4uLnRoaXMub3V0cHV0cyB9XG4gICAgICAgIGNvcHlTaGFkZXIudW5pZm9ybXMgPSB7IC4uLnRoaXMudW5pZm9ybXMgfVxuICAgICAgICBjb3B5U2hhZGVyLm1haW4gPSB0aGlzLm1haW4ubWFwKChzdHIpID0+IHN0cilcbiAgICAgICAgY29weVNoYWRlci5tZXRob2RzID0gdGhpcy5tZXRob2RzLm1hcCgobWV0aG9kKSA9PiBtZXRob2QubWFwKChzdHIpID0+IHN0cikpXG4gICAgICAgIHJldHVybiBjb3B5U2hhZGVyXG4gICAgfVxuICAgIHB1YmxpYyBjb25uZWN0KCkge1xuICAgICAgICBjb25zdCB2YXJpYWJsZXNQcmVmaXggPSBbXG4gICAgICAgICAgICB7IHByZWZpeDogJ2luJywgdmFyaWFibGVzOiB0aGlzLmlucHV0cyB9LFxuICAgICAgICAgICAgeyBwcmVmaXg6ICdvdXQnLCB2YXJpYWJsZXM6IHRoaXMub3V0cHV0cyB9LFxuICAgICAgICAgICAgeyBwcmVmaXg6ICd1bmlmb3JtJywgdmFyaWFibGVzOiB0aGlzLnVuaWZvcm1zIH1cbiAgICAgICAgXVxuICAgICAgICBjb25zdCB2YXJpYWJsZURlZmluaXRpb25zID0gdmFyaWFibGVzUHJlZml4XG4gICAgICAgICAgICAubWFwKCh2YXJpYWJsZVByZWZpeCkgPT5cbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YXJpYWJsZVByZWZpeC52YXJpYWJsZXMpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKFtuYW1lLCB0eXBlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAke3ZhcmlhYmxlUHJlZml4LnByZWZpeH0gJHt0eXBlfSAke25hbWV9O1xcbmBcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oJycpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuam9pbignJylcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy5oZWFkZXIgK1xuICAgICAgICAgICAgdmFyaWFibGVEZWZpbml0aW9ucyArXG4gICAgICAgICAgICB0aGlzLm1ldGhvZHMubWFwKChtZXRob2QpID0+IG1ldGhvZC5qb2luKCdcXG4nKSkuam9pbignXFxuJykgK1xuICAgICAgICAgICAgJ1xcbicgK1xuICAgICAgICAgICAgdGhpcy5tYWluLmpvaW4oJ1xcbicpXG4gICAgICAgIClcbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgRU1QVFlfRlVOQ1RJT04gPSAoKSA9PiB7fVxuIiwiLyoqXG4gKiBUZXN0IHdoZXRoZXIgYSBzdHJpbmcgY2FuIGJlIGEgdmFsaWQgaWQgb2YgYSBOb2RlLlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlOiB0aGUgc3RyaW5nIHRvYmUgdGVzdGVkXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5sZW5ndGggPiAwXG59XG4iLCIvKipcbiAqIEBhdXRob3IgSmlhY2hlbmcgUGFuIDxqYWNraWVhbnhpc0BnbWFpbC5jb20+XG4gKiBAZGVzY3JpcHRpb24gTWFwMiBpcyBhIE1hcCBkYXRhIHN0cnVjdHVyZSB3aGljaCBtYXBzIHR3byBrZXlzIHRvIG9uZSB2YWx1ZS5cbiAqIEBVc2FnZSBzYW1lIHRvIE1hcCBkYXRhIHN0cnVjdHVyZSBpbiBFUzYuXG4gKiBAZGVwZW5kZW5jZXMgTm9uZVxuICovXG5cbmNvbnN0IEpPSU4gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDcpXG5jb25zdCBpc0tleXMgPSAoa2V5czogQXJyYXk8c3RyaW5nPikgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIGtleXMgaW5zdGFuY2VvZiBBcnJheSAmJlxuICAgICAgICBrZXlzLmxlbmd0aCA9PT0gMiAmJlxuICAgICAgICBrZXlzLmV2ZXJ5KChrZXkpID0+IGtleSAhPT0gdW5kZWZpbmVkICYmIGtleSAhPT0gbnVsbClcbiAgICApXG59XG5jbGFzcyBNYXAyIHtcbiAgICBwcml2YXRlIG1hcCA9IG5ldyBNYXAoKVxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihlbnRyaWVzPzogQXJyYXk8QXJyYXk8YW55Pj4pIHtcbiAgICAgICAgaWYgKGVudHJpZXMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBba2V5LCB2YWx1ZV0gPSBlbnRyeVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0KGtleSwgdmFsdWUpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLnNpemVcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVsZXRlKGtleXM6IEFycmF5PHN0cmluZz4pIHtcbiAgICAgICAgaWYgKGlzS2V5cyhrZXlzKSkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0ga2V5cy5qb2luKEpPSU4pXG4gICAgICAgICAgICBjb25zdCBrZXlfID0ga2V5c1sxXSArIEpPSU4gKyBrZXlzWzBdXG4gICAgICAgICAgICBsZXQgbWFwID0gdGhpcy5tYXBcbiAgICAgICAgICAgIG1hcC5kZWxldGUoa2V5KVxuICAgICAgICAgICAgbWFwLmRlbGV0ZShrZXlfKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNldChrZXlzOiBBcnJheTxzdHJpbmc+LCB2YWx1ZTogYW55KSB7XG4gICAgICAgIGlmIChpc0tleXMoa2V5cykpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGtleXMuam9pbihKT0lOKVxuICAgICAgICAgICAgY29uc3Qga2V5XyA9IGtleXNbMV0gKyBKT0lOICsga2V5c1swXVxuICAgICAgICAgICAgbGV0IG1hcCA9IHRoaXMubWFwXG4gICAgICAgICAgICBpZiAoIW1hcC5oYXMoa2V5XykpIHtcbiAgICAgICAgICAgICAgICBtYXAuc2V0KGtleSwgdmFsdWUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1hcC5zZXQoa2V5XywgdmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0KGtleXM6IEFycmF5PHN0cmluZz4pIHtcbiAgICAgICAgaWYgKGlzS2V5cyhrZXlzKSkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0ga2V5cy5qb2luKEpPSU4pXG4gICAgICAgICAgICBjb25zdCBrZXlfID0ga2V5c1sxXSArIEpPSU4gKyBrZXlzWzBdXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0KGtleSkgfHwgdGhpcy5tYXAuZ2V0KGtleV8pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgaGFzKGtleXM6IEFycmF5PHN0cmluZz4pIHtcbiAgICAgICAgaWYgKGlzS2V5cyhrZXlzKSkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0ga2V5cy5qb2luKEpPSU4pXG4gICAgICAgICAgICBjb25zdCBrZXlfID0ga2V5c1sxXSArIEpPSU4gKyBrZXlzWzBdXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXAuaGFzKGtleSkgfHwgdGhpcy5tYXAuaGFzKGtleV8pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBmb3JFYWNoKGZ1bmM6IEZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMubWFwLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGxldCBrZXlzID0ga2V5LnNwbGl0KEpPSU4pXG4gICAgICAgICAgICBmdW5jKHZhbHVlLCBrZXlzLCB0aGlzKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHB1YmxpYyBlbnRyaWVzKCkge1xuICAgICAgICByZXR1cm4gWy4uLnRoaXMubWFwLmVudHJpZXMoKV0ubWFwKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gZW50cnlbMF0uc3BsaXQoSk9JTilcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZW50cnlbMV1cbiAgICAgICAgICAgIHJldHVybiBba2V5LCB2YWx1ZV1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMga2V5cygpIHtcbiAgICAgICAgbGV0IGtleXMgPSBbLi4udGhpcy5tYXAua2V5cygpXVxuICAgICAgICByZXR1cm4ga2V5cy5tYXAoKGtleSkgPT4ga2V5LnNwbGl0KEpPSU4pKVxuICAgIH1cblxuICAgIHB1YmxpYyB2YWx1ZXMoKSB7XG4gICAgICAgIHJldHVybiBbLi4udGhpcy5tYXAudmFsdWVzKCldXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXAyXG4iLCIvKipcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XG4gKiBAZGVzY3JpcHRpb24gc29tZSB1dGlsaXR5IGZ1bmN0aW9uc1xuICovXG5cbmltcG9ydCB7IE5vZGVMaW5rRGF0YSB9IGZyb20gJy4uL2ludGVyZmFjZXMnXG5cbi8qKlxuICogZ2l2ZW4gYSBncmFwaCBkYXRhIHdpdGggcG9zaXRpb24sIHJldHVybiBhIGNvcHkgb2YgZ3JhcGgsIHdpdGggcG9zaXRpb24gdHJhbnNmb3JtZWQgdG8gY2VudGVyIG9mIGdpdmVuIHNpemVcbiAqIEBwYXJhbSBncmFwaCBub2RlIGxpbmsgZ3JhcGggZGF0YVxuICogQHBhcmFtIHNpemUgZ3JhcGggc2l6ZSAobWF4KHdpZHRoLCBoZWlnaHQpKVxuICogQHBhcmFtIGNlbnRlclggeCBwb3Mgb2YgZ3JhcGggY2VudGVyXG4gKiBAcGFyYW0gY2VudGVyWSB5IHBvcyBvZiBncmFwaCBjZW50ZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybUdyYXBoUG9zaXRpb24oXG4gICAgZ3JhcGg6IE5vZGVMaW5rRGF0YSxcbiAgICBzaXplOiBudW1iZXIsXG4gICAgY2VudGVyWDogbnVtYmVyLFxuICAgIGNlbnRlclk6IG51bWJlclxuKSB7XG4gICAgY29uc3QgdGFyZ2V0R3JhcGg6IE5vZGVMaW5rRGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZ3JhcGgpKVxuICAgIGNvbnN0IHhzID0gdGFyZ2V0R3JhcGgubm9kZXMubWFwKChub2RlKSA9PiBub2RlLngpXG4gICAgY29uc3QgeXMgPSB0YXJnZXRHcmFwaC5ub2Rlcy5tYXAoKG5vZGUpID0+IG5vZGUueSlcbiAgICBjb25zdCB4TWluID0gTWF0aC5taW4oLi4ueHMpXG4gICAgY29uc3QgeE1heCA9IE1hdGgubWF4KC4uLnhzKVxuICAgIGNvbnN0IHlNaW4gPSBNYXRoLm1pbiguLi55cylcbiAgICBjb25zdCB5TWF4ID0gTWF0aC5tYXgoLi4ueXMpXG5cbiAgICBjb25zdCB4TWlkID0gKHhNaW4gKyB4TWF4KSAvIDJcbiAgICBjb25zdCB5TWlkID0gKHlNaW4gKyB5TWF4KSAvIDJcblxuICAgIHRhcmdldEdyYXBoLm5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgbm9kZS54ID0gKChub2RlLnggLSB4TWlkKSAvICh4TWF4IC0geE1pbikpICogc2l6ZSArIGNlbnRlclhcbiAgICAgICAgbm9kZS55ID0gKChub2RlLnkgLSB5TWlkKSAvICh5TWF4IC0geU1pbikpICogc2l6ZSArIGNlbnRlcllcbiAgICB9KVxuXG4gICAgcmV0dXJuIHRhcmdldEdyYXBoXG59XG5cbi8qKlxuICogdGhlIGZ1bmN0aW9uIGlzIHRvIG92ZXJyaWRlIG9iamVjdCByZWN1cnNpdmVseVxuICogQHBhcmFtIG92ZXJyaWRkZW5PYmplY3Q6IHRoZSBPYmplY3QgdG8gYmUgb3ZlcnJpZGRlblxuICogQHBhcmFtIG92ZXJyaWRpbmdPYmplY3Q6IHRoZSBPYmplY3QgdG8gb3ZlcnJpZGUgdGhlIG92ZXJyaWRkZW4gT2JqZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvdmVycmlkZShvdmVycmlkZGVuT2JqZWN0OiBvYmplY3QsIG92ZXJyaWRpbmdPYmplY3Q6IG9iamVjdCkge1xuICAgIGlmIChvdmVycmlkZGVuT2JqZWN0ICE9PSBPYmplY3Qob3ZlcnJpZGRlbk9iamVjdCkpIHtcbiAgICAgICAgLy8gb3ZlcnJpZGRlbk9iamVjdCBpcyBub3QgYW4gb2JqZWN0XG4gICAgICAgIGlmIChvdmVycmlkaW5nT2JqZWN0ICE9PSBPYmplY3Qob3ZlcnJpZGluZ09iamVjdCkpIHtcbiAgICAgICAgICAgIC8vIG92ZXJyaWRpbmdPYmplY3QgaXMgbm90IGFuIG9iamVjdFxuICAgICAgICAgICAgcmV0dXJuIG92ZXJyaWRpbmdPYmplY3RcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG92ZXJyaWRpbmdPYmplY3QpKSAvLyBkZWVwIGNvcHlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9iamVjdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob3ZlcnJpZGRlbk9iamVjdCkpIC8vIGRlZXAgY29weVxuICAgIGZvciAoY29uc3Qga2V5IGluIG92ZXJyaWRpbmdPYmplY3QpIHtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QgJiYgb3ZlcnJpZGluZ09iamVjdFtrZXldID09PSBPYmplY3Qob3ZlcnJpZGluZ09iamVjdFtrZXldKSkge1xuICAgICAgICAgICAgLy8gaWYgb3ZlcnJpZGluZ09iamVjdFtrZXldIGlzIGFuIG9iamVjdFxuICAgICAgICAgICAgb2JqZWN0W2tleV0gPSBvdmVycmlkZShvYmplY3Rba2V5XSwgb3ZlcnJpZGluZ09iamVjdFtrZXldKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqZWN0W2tleV0gPSBvdmVycmlkaW5nT2JqZWN0W2tleV1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0XG59XG4iXSwic291cmNlUm9vdCI6IiJ9