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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YXNldC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YXNldC9taXNlcmFibGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhc2V0L3BhdGVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2VsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2xpbmsudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL25vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmFjdGlvbi9pbnRlcmFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvZWxlbWVudHMvcmVuZGVyLWVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL2VsZW1lbnRzL3JlbmRlci1saW5rLnRzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlci9lbGVtZW50cy9yZW5kZXItbm9kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL3NoYWRlcnMvbGluay1zaGFkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL3NoYWRlcnMvbm9kZS1zaGFkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL21hcDIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3V0aWxzLnRzIl0s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RTtRQUMvRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZFLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDMUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hFLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDM0UsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMxRSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZFLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDMUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEUsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN6RSxFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDN0UsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMxRSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RFLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDM0UsRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUM1RSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDdkUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUN2RSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZFLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7S0FDakY7SUFFRCxLQUFLLEVBQUU7UUFDSCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMvRCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDL0MsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNoRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzFELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hELEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDeEQsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUM3RCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDaEQsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNoRCxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzFELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDL0MsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzFELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hELEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMzRCxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FB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USxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2hELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMvQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQy9DLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDaEQsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2hELEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDL0MsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDOUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUM5QyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDeEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMzRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNoRCxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMvQyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDaEQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDNUQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMxRCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDeEQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzFELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2hELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDL0MsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RCxFQUFFLE1BQU0sRUFBRSxl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QUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRTtRQUMzQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFO1FBQzNDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFO1FBQzNDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFO1FBQzNDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFF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QWdCLENBQUMsRUFBRTtZQUMvQyxvQ0FBb0M7WUFDcEMsT0FBTyxnQkFBZ0I7U0FDMUI7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBQyxZQUFZO1NBQ25FO0tBQ0o7SUFFRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFDLFlBQVk7SUFDeEUsS0FBSyxNQUFNLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRTtRQUNoQyxJQUFJLEdBQUcsSUFBSSxNQUFNLElBQUksZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEtBQUssTUFBTSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDMUUsd0NBQXdDO1lBQ3hDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdEO2FBQU07WUFDSCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO1NBQ3RDO0tBQ0o7SUFDRCxPQUFPLE1BQU07QUFDakIsQ0FBQztBQXJCRCw0QkFxQkMiLCJmaWxlIjoiTmV0Vi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBkZWZhdWx0IGNvbmZpZ3VyYXRpb25zIGluIE5ldFZcclxuICogQGF1dGhvciBYaWFvZG9uZyBaaGFvIDx6aGFveGlhb2RvbmdAemp1LmVkdS5jbj5cclxuICovXHJcbmV4cG9ydCBjb25zdCB3aWR0aCA9IDgwMFxyXG5leHBvcnQgY29uc3QgaGVpZ2h0ID0gNjAwXHJcbmV4cG9ydCBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDEsIGE6IDEgfVxyXG5leHBvcnQgY29uc3QgZW5hYmxlUGFuWm9vbSA9IHRydWVcclxuZXhwb3J0IGNvbnN0IG5vZGVMaW1pdCA9IDEwMFxyXG5leHBvcnQgY29uc3QgbGlua0xpbWl0ID0gMTAwMFxyXG5cclxuZXhwb3J0IGNvbnN0IG5vZGUgPSB7XHJcbiAgICBzdHlsZToge1xyXG4gICAgICAgIHNoYXBlOiAnY2lyY2xlJywgLy8gZGVmYXVsdCBzaGFwZVxyXG4gICAgICAgIG9mZnNldDogeyB4OiAwLCB5OiAwIH0sXHJcbiAgICAgICAgZmlsbDogeyByOiAwLjIsIGc6IDAuNiwgYjogMC4yLCBhOiAxIH0sXHJcbiAgICAgICAgc3Ryb2tlQ29sb3I6IHsgcjogMC45LCBnOiAwLjksIGI6IDAuOSwgYTogMC42IH0sXHJcbiAgICAgICAgc3Ryb2tlV2lkdGg6IDIsXHJcbiAgICAgICAgLyogY2lyY2xlIHNoYXBlIHN0eWxlcyAqL1xyXG4gICAgICAgIHI6IDEwLFxyXG4gICAgICAgIC8qIHJlY3Qgc2hhcGUgc3R5bGVzICovXHJcbiAgICAgICAgd2lkdGg6IDUsXHJcbiAgICAgICAgaGVpZ2h0OiA1LFxyXG4gICAgICAgIGlubmVyV2lkdGg6IDUsXHJcbiAgICAgICAgaW5uZXJIZWlnaHQ6IDUsXHJcbiAgICAgICAgcm90YXRlOiAwLCAvLyAtcGkgdG8gK3BpLCBwb3NpdGl2ZSB2YWx1ZSBtZWFucyBjbG9ja3dpc2VcclxuICAgICAgICAvKiB0cmlhbmdsZSBzaGFwZSBzdHlsZXMgKi9cclxuICAgICAgICB2ZXJ0ZXhBbHBoYTogeyB4OiAwLCB5OiAtNCB9LFxyXG4gICAgICAgIHZlcnRleEJldGE6IHsgeDogLTIgKiBNYXRoLnNxcnQoMyksIHk6IDIgfSxcclxuICAgICAgICB2ZXJ0ZXhHYW1tYTogeyB4OiAyICogTWF0aC5zcXJ0KDMpLCB5OiAyIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmsgPSB7XHJcbiAgICBzdHlsZToge1xyXG4gICAgICAgIHNoYXBlOiAnbGluZScsXHJcbiAgICAgICAgc3Ryb2tlQ29sb3I6IHsgcjogMC40LCBnOiAwLjYsIGI6IDAuOCwgYTogMC41IH0sXHJcbiAgICAgICAgc3Ryb2tlV2lkdGg6IDIsXHJcbiAgICAgICAgLyogY3VydmUgc2hhcGUgc3R5bGUgKi9cclxuICAgICAgICBjdXJ2ZW5lc3M6IDAuMixcclxuICAgICAgICBkYXNoSW50ZXJ2YWw6IDVcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogQGF1dGhvciBYaWFvZG9uZyBaaGFvIDx6aGFveGlhb2RvbmdAemp1LmVkdS5jbj5cclxuICogQGRlc2NyaXB0aW9uIGJ1aWxkLWluIGRhdGFzZXQgaW4gTmV0VlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IG1pc2VyYWJsZXMgfSBmcm9tICcuL21pc2VyYWJsZXMnXHJcbmltcG9ydCB7IHBhdGVudHMgfSBmcm9tICcuL3BhdGVudHMnXHJcblxyXG5leHBvcnQgeyBtaXNlcmFibGVzLCBwYXRlbnRzIH1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XHJcbiAqIEBkZXNjcmlwdGlvbiBMZXMgTWlzZXJhYmxlcyByZWxhdGlvbiBkYXRhc2V0LlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gZ2VuZXJhdGVkIGJ5IGQzLWZvcmNlOiBodHRwczovL29ic2VydmFibGVocS5jb20vQGQzL2ZvcmNlLWRpcmVjdGVkLWdyYXBoXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IG1pc2VyYWJsZXMgPSB7XHJcbiAgICBub2RlczogW1xyXG4gICAgICAgIHsgaWQ6ICdNeXJpZWwnLCB4OiAyOTMuNDcxNDUxMTc1NTM2MjMsIHk6IDM1Ni40MzM1NzE4MTA0MTM4LCBncm91cDogMSB9LFxyXG4gICAgICAgIHsgaWQ6ICdOYXBvbGVvbicsIHg6IDI1My45MDI1MDg4NjE4NjU2LCB5OiAzNzQuMzA1ODExNjUzNjQ0NSwgZ3JvdXA6IDEgfSxcclxuICAgICAgICB7IGlkOiAnTWxsZS5CYXB0aXN0aW5lJywgeDogMzUwLjkyNzI0OTg5OTE4MDc3LCB5OiAzMzIuMzMyNTUzOTk5OTk0MywgZ3JvdXA6IDEgfSxcclxuICAgICAgICB7IGlkOiAnTW1lLk1hZ2xvaXJlJywgeDogMzU2LjA5MTYxNTY1Mzk5OTcsIHk6IDM1Mi43ODg1Nzk5MTE2MDE1LCBncm91cDogMSB9LFxyXG4gICAgICAgIHsgaWQ6ICdDb3VudGVzc2RlTG8nLCB4OiAyNTQuMjkyOTE1MjA5ODkzMzUsIHk6IDM1Ny4zMTc1NzM0MDc2NDE3LCBncm91cDogMSB9LFxyXG4gICAgICAgIHsgaWQ6ICdHZWJvcmFuZCcsIHg6IDI1Ny44NTcyOTM2MjYyMDEsIHk6IDMzNS44NTQyNzYyODM1ODk1NywgZ3JvdXA6IDEgfSxcclxuICAgICAgICB7IGlkOiAnQ2hhbXB0ZXJjaWVyJywgeDogMjU5LjYyNTU1NjM4MjUwMjgsIHk6IDM4My44MzAyNzQ2OTgzMjgxNCwgZ3JvdXA6IDEgfSxcclxuICAgICAgICB7IGlkOiAnQ3JhdmF0dGUnLCB4OiAyNDkuODU5NjQ1OTgyOTEzOSwgeTogMzQ2LjE4MjI1NTE2ODMyNDk2LCBncm91cDogMSB9LFxyXG4gICAgICAgIHsgaWQ6ICdDb3VudCcsIHg6IDI2OS45Njc5Mzk1MTM1MDkyNCwgeTogMzkwLjY4MDA4NDIzMjE1NzEsIGdyb3VwOiAxIH0sXHJcbiAgICAgICAgeyBpZDogJ09sZE1hbicsIHg6IDI0Ni43Mzk1MjMxMTI3NzY2NSwgeTogMzY0LjU5MzU3NDk0NDMyMDY2LCBncm91cDogMSB9LFxyXG4gICAgICAgIHsgaWQ6ICdMYWJhcnJlJywgeDogNDQzLjUxNjU4MzMxNTAyNiwgeTogMzU4LjI5MjA0Nzg5NDc3NjgzLCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdWYWxqZWFuJywgeDogNDQyLjE2ODk0NzU3NjQxNTA2LCB5OiAzMjAuODMxNTUzMjE2MDg2MSwgZ3JvdXA6IDIgfSxcclxuICAgICAgICB7IGlkOiAnTWFyZ3Vlcml0ZScsIHg6IDQxMy4zODE2ODUxMDA3OTMxLCB5OiAyNDAuMDQwOTE1NTkyOTY1MDQsIGdyb3VwOiAzIH0sXHJcbiAgICAgICAgeyBpZDogJ01tZS5kZVInLCB4OiA0MjcuMjM2MTcxNTk1MDI1NCwgeTogMzU1LjEwMjExNTg5OTc5NTE0LCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdJc2FiZWF1JywgeDogNDA1Ljg1MDgyODU4MTkxODM0LCB5OiAzMzAuNTIwMTUxMjIwNTA4NSwgZ3JvdXA6IDIgfSxcclxuICAgICAgICB7IGlkOiAnR2VydmFpcycsIHg6IDQwNS4yMTEzMTIxOTA2ODgxLCB5OiAzMTYuMjkxMjUzNTkzOTYxMzYsIGdyb3VwOiAyIH0sXHJcbiAgICAgICAgeyBpZDogJ1Rob2xvbXllcycsIHg6IDQyMi40MTI1MzA3NzgxNjQ2LCB5OiAxMjYuMDc2NDk0NDk3NzU4MDYsIGdyb3VwOiAzIH0sXHJcbiAgICAgICAgeyBpZDogJ0xpc3RvbGllcicsIHg6IDM2My4xNzI5NDIyNjc3OTc5LCB5OiAxMDIuNzc4OTAzNjgyODk3ODUsIGdyb3VwOiAzIH0sXHJcbiAgICAgICAgeyBpZDogJ0ZhbWV1aWwnLCB4OiAzODEuNzk0NzEwMzA5NDAyOCwgeTogNjYuNTgxMzM3MjQwNDM5NDgsIGdyb3VwOiAzIH0sXHJcbiAgICAgICAgeyBpZDogJ0JsYWNoZXZpbGxlJywgeDogMzgzLjE3OTI2NzY3NDAyNjEsIHk6IDk0LjgwMzIwMzE1NTAwMTU0LCBncm91cDogMyB9LFxyXG4gICAgICAgIHsgaWQ6ICdGYXZvdXJpdGUnLCB4OiAzNjEuODkzNzMxNjQ0Mjg1LCB5OiA3MC4zODY5NjM4MTM4NDA3NCwgZ3JvdXA6IDMgfSxcclxuICAgICAgICB7IGlkOiAnRGFobGlhJywgeDogMzk4Ljc1MzUwOTg4MzUxNjUzLCB5OiA3Ny4wOTcwMDc1MTUyNzExOSwgZ3JvdXA6IDMgfSxcclxuICAgICAgICB7IGlkOiAnWmVwaGluZScsIHg6IDM0OS4wNDk1OTE0NjAxMzc2LCB5OiA4OC44MDg4ODYxMzM3MjcxMywgZ3JvdXA6IDMgfSxcclxuICAgICAgICB7IGlkOiAnRmFudGluZScsIHg6IDM5OC4wMTQxMTQzODcwMjQ3MywgeTogMTczLjc2NDQ0MTk2OTQ1OTc3LCBncm91cDogMyB9LFxyXG4gICAgICAgIHsgaWQ6ICdNbWUuVGhlbmFyZGllcicsIHg6IDQ3MS4yNTE2NTMzMzg2NzI1LCB5OiAyNjIuMjE4NzAxNjY2NjQ1LCBncm91cDogNCB9LFxyXG4gICAgICAgIHsgaWQ6ICdUaGVuYXJkaWVyJywgeDogNTA0LjgxNjcyMDg1NjAzMDY2LCB5OiAyODMuMDQ2Mzg5MDA0ODE3MjMsIGdyb3VwOiA0IH0sXHJcbiAgICAgICAgeyBpZDogJ0Nvc2V0dGUnLCB4OiA0NzIuMzM0Njk0MTQ4NzE5MiwgeTogMjI4LjY4Nzc5NDQzMzAzNDc4LCBncm91cDogNSB9LFxyXG4gICAgICAgIHsgaWQ6ICdKYXZlcnQnLCB4OiA0NjAuMDUyNTc2ODkzMzI4MzYsIHk6IDI5NS41NTc4MTU0MjY4OTA0LCBncm91cDogNCB9LFxyXG4gICAgICAgIHsgaWQ6ICdGYXVjaGVsZXZlbnQnLCB4OiAzODUuNDM5MzU3NjQ1ODk5ODYsIHk6IDMwMi4xMjgyNDU4ODYyMjg1NywgZ3JvdXA6IDAgfSxcclxuICAgICAgICB7IGlkOiAnQmFtYXRhYm9pcycsIHg6IDM5My4xOTA0MTU5MDM4MzU5NywgeTogMzQ1LjQ5NzE2Njc2OTA4MTcsIGdyb3VwOiAyIH0sXHJcbiAgICAgICAgeyBpZDogJ1BlcnBldHVlJywgeDogMzY3LjUzODMzMTMyODkzOTc2LCB5OiAxOTQuNTU1NjQ4MjMwNjI3MSwgZ3JvdXA6IDMgfSxcclxuICAgICAgICB7IGlkOiAnU2ltcGxpY2UnLCB4OiA0MDEuMzYyMjI1MjM1NDY1NSwgeTogMjQyLjk5ODI4NDc5OTQ1NzYsIGdyb3VwOiAyIH0sXHJcbiAgICAgICAgeyBpZDogJ1NjYXVmZmxhaXJlJywgeDogNDE0LjY3MDcyNzk5NjI3NTczLCB5OiAzNDQuMDU0NzcyMDk0NTczNiwgZ3JvdXA6IDIgfSxcclxuICAgICAgICB7IGlkOiAnV29tYW4xJywgeDogNDIxLjQxNjc0MTQzOTI0MjYsIHk6IDI5My4zMTEyMDIxOTEyOTM5NCwgZ3JvdXA6IDIgfSxcclxuICAgICAgICB7IGlkOiAnSnVkZ2UnLCB4OiA0MjAuMDQzOTIwMDc4NDEzMzUsIHk6IDQwMS4wMzIzMzYwOTE1Mjc0NCwgZ3JvdXA6IDIgfSxcclxuICAgICAgICB7IGlkOiAnQ2hhbXBtYXRoaWV1JywgeDogMzc3Ljc5NTI0MjU0NjIxODMzLCB5OiAzODMuODEwNTc4NzExNTEwMiwgZ3JvdXA6IDIgfSxcclxuICAgICAgICB7IGlkOiAnQnJldmV0JywgeDogNDAxLjk1Mjk4NDQ0Njk5OTIsIHk6IDM4OC44Njg0NzgyOTg3NDExLCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdDaGVuaWxkaWV1JywgeDogNDAwLjY2ODU3MDcxMzM1MzgsIHk6IDQxMy40OTQxNzc5MDUyMzQ2NiwgZ3JvdXA6IDIgfSxcclxuICAgICAgICB7IGlkOiAnQ29jaGVwYWlsbGUnLCB4OiAzNzkuMDQ5Njk3MDQ0NjIzNTQsIHk6IDQwNC4yNjk3NDA1OTIzMzE2MywgZ3JvdXA6IDIgfSxcclxuICAgICAgICB7IGlkOiAnUG9udG1lcmN5JywgeDogNTUzLjExMzc0MDE3NTAxOTgsIHk6IDI0NC45MjgzMDAyNzM2MDc2NSwgZ3JvdXA6IDQgfSxcclxuICAgICAgICB7IGlkOiAnQm91bGF0cnVlbGxlJywgeDogNDkwLjE1NzEwODYwODY5MzIsIHk6IDI0OS4yMTAxOTIzODM1ODAzLCBncm91cDogNiB9LFxyXG4gICAgICAgIHsgaWQ6ICdFcG9uaW5lJywgeDogNTQ5Ljc1ODQyNjc1NzE4OTIsIHk6IDMwMi45MDMxMDY1MjI4NDMxLCBncm91cDogNCB9LFxyXG4gICAgICAgIHsgaWQ6ICdBbnplbG1hJywgeDogNTE1LjM4MDczOTkzOTUxMzQsIHk6IDI1Ny4wMTc5Njg4OTgzOTExLCBncm91cDogNCB9LFxyXG4gICAgICAgIHsgaWQ6ICdXb21hbjInLCB4OiA0MzMuNjYwODY2NTM0MDUxNCwgeTogMjY1LjgxNzQ2NzM4ODY2MzQsIGdyb3VwOiA1IH0sXHJcbiAgICAgICAgeyBpZDogJ01vdGhlcklubm9jZW50JywgeDogNDAzLjAyNTM2MjU3NDE2NTIzLCB5OiAyODkuMDMzMTIyMDAxMjEzMjYsIGdyb3VwOiAwIH0sXHJcbiAgICAgICAgeyBpZDogJ0dyaWJpZXInLCB4OiAzNDEuODA5NzMyMjc0NTY3NzUsIHk6IDI5NC4yMTIzOTYxNDgwMjMsIGdyb3VwOiAwIH0sXHJcbiAgICAgICAgeyBpZDogJ0pvbmRyZXR0ZScsIHg6IDU2NS4xOTY1MzAzNDIyMTg2LCB5OiA0NzAuNjU5NTAzNDkzNzU4NTYsIGdyb3VwOiA3IH0sXHJcbiAgICAgICAgeyBpZDogJ01tZS5CdXJnb24nLCB4OiA1NjkuMTg5NjI2OTI0MjEwMSwgeTogNDI2LjY2MTg1MDUzODI0NTYzLCBncm91cDogNyB9LFxyXG4gICAgICAgIHsgaWQ6ICdHYXZyb2NoZScsIHg6IDU3Mi4xNjE5MzkzOTM2ODI2LCB5OiAzNjQuMjI2MDY3NjY0OTc1NjMsIGdyb3VwOiA4IH0sXHJcbiAgICAgICAgeyBpZDogJ0dpbGxlbm9ybWFuZCcsIHg6IDUyNC41OTE0NTA1MjA4MDA1LCB5OiAyNTcuNDAxMjIxNDgyODMzNiwgZ3JvdXA6IDUgfSxcclxuICAgICAgICB7IGlkOiAnTWFnbm9uJywgeDogNDkyLjU0ODM5MzIwMjM0MSwgeTogMjIyLjU5NjYzNTEzMjg4ODUsIGdyb3VwOiA1IH0sXHJcbiAgICAgICAgeyBpZDogJ01sbGUuR2lsbGVub3JtYW5kJywgeDogNTE0LjM2OTI2NTUwMjM2NDQsIHk6IDIyOS4wOTY3MDA2MjM4OTI4MSwgZ3JvdXA6IDUgfSxcclxuICAgICAgICB7IGlkOiAnTW1lLlBvbnRtZXJjeScsIHg6IDU0OS4zMjUwNTA4MTcxNDc0LCB5OiAxOTYuMTQwNTY4MzMwODQ5MzYsIGdyb3VwOiA1IH0sXHJcbiAgICAgICAgeyBpZDogJ01sbGUuVmF1Ym9pcycsIHg6IDUxNy44NTkzNTcyMzk0MDcxLCB5OiAxODYuMjQ4ODMwOTExMTU2NSwgZ3JvdXA6IDUgfSxcclxuICAgICAgICB7IGlkOiAnTHQuR2lsbGVub3JtYW5kJywgeDogNTQzLjI3NDk2MTEzOTQ1NSwgeTogMjIzLjY4MTg0Mjg1MTgwOTc2LCBncm91cDogNSB9LFxyXG4gICAgICAgIHsgaWQ6ICdNYXJpdXMnLCB4OiA1NzQuMjU3NjY5OTA1NjEzOSwgeTogMjgzLjg1MjExNzA4MzEwMzM0LCBncm91cDogOCB9LFxyXG4gICAgICAgIHsgaWQ6ICdCYXJvbmVzc1QnLCB4OiA1NzMuNzE0MDkwOTY1MDYyNSwgeTogMjQ1LjU5MzExOTA5MjQ1ODE4LCBncm91cDogNSB9LFxyXG4gICAgICAgIHsgaWQ6ICdNYWJldWYnLCB4OiA2MjguNTQzMjUzMjQ4NjE5MSwgeTogMzE0LjIyMDc4NDA4NjI3MTY0LCBncm91cDogOCB9LFxyXG4gICAgICAgIHsgaWQ6ICdFbmpvbHJhcycsIHg6IDU4OC4yMzk1NDk4MDkzNjI2LCB5OiAzNDIuMDU5NDQ2OTkyMzI3OSwgZ3JvdXA6IDggfSxcclxuICAgICAgICB7IGlkOiAnQ29tYmVmZXJyZScsIHg6IDYzNy43MzcwNjY0NjE0NjM3LCB5OiAzNTEuNjkyMzU3NjI3ODgzOTUsIGdyb3VwOiA4IH0sXHJcbiAgICAgICAgeyBpZDogJ1Byb3V2YWlyZScsIHg6IDY1MC44ODMzNTIyODY5OTAzLCB5OiAzODYuODM5MTgxMDM1MDk5MTYsIGdyb3VwOiA4IH0sXHJcbiAgICAgICAgeyBpZDogJ0ZldWlsbHknLCB4OiA2MjYuODU1NjYwNjQzODEwOSwgeTogMzY1LjkwODQxNjQ1OTMxNDEsIGdyb3VwOiA4IH0sXHJcbiAgICAgICAgeyBpZDogJ0NvdXJmZXlyYWMnLCB4OiA2MjguMzQ0ODk4OTk3NTAxMywgeTogMzM2Ljc2NjY0NTQxMTkwMjIsIGdyb3VwOiA4IH0sXHJcbiAgICAgICAgeyBpZDogJ0JhaG9yZWwnLCB4OiA2NTYuNzcxNzc3Mjc2NDk4NSwgeTogMzYyLjU4ODU4ODI1MDkxODksIGdyb3VwOiA4IH0sXHJcbiAgICAgICAgeyBpZDogJ0Jvc3N1ZXQnLCB4OiA1OTkuMDE4NTc2NTc0MzEwNywgeTogMzYzLjgyODY3MjM0MDcwNTMsIGdyb3VwOiA4IH0sXHJcbiAgICAgICAgeyBpZDogJ0pvbHknLCB4OiA2NTYuNjE4MjkyMzczNTQwOCwgeTogMzQzLjIzNzU3MzM1NTkxNjUsIGdyb3VwOiA4IH0sXHJcbiAgICAgICAgeyBpZDogJ0dyYW50YWlyZScsIHg6IDYzOC40Mzc1ODU1MzE0OTg4LCB5OiA0MDIuNDM4NzI1MDM3ODk5NSwgZ3JvdXA6IDggfSxcclxuICAgICAgICB7IGlkOiAnTW90aGVyUGx1dGFyY2gnLCB4OiA2NjQuNTU2NzIzODYxODgzLCB5OiAyOTguMDMzNjk2NDUyNjc4NiwgZ3JvdXA6IDkgfSxcclxuICAgICAgICB7IGlkOiAnR3VldWxlbWVyJywgeDogNTA4LjE2NDUwNTI1ODE3ODA1LCB5OiAzMzAuNDUwMjkwNzQ0NDM2NywgZ3JvdXA6IDQgfSxcclxuICAgICAgICB7IGlkOiAnQmFiZXQnLCB4OiA0OTIuNTYwMDUyNzk4ODIwOTUsIHk6IDMyNS45ODM0MDkyODQ4NDI3LCBncm91cDogNCB9LFxyXG4gICAgICAgIHsgaWQ6ICdDbGFxdWVzb3VzJywgeDogNTEwLjkzODU1NTA2MjUwMDc3LCB5OiAzMDkuMjg2OTM4MDY5NzMyOCwgZ3JvdXA6IDQgfSxcclxuICAgICAgICB7IGlkOiAnTW9udHBhcm5hc3NlJywgeDogNTAyLjcxOTA4OTQxNzM1NTcsIHk6IDM1MC45Mjc1MTgzMTMzNDM4LCBncm91cDogNCB9LFxyXG4gICAgICAgIHsgaWQ6ICdUb3Vzc2FpbnQnLCB4OiA0NDUuMTI1NDgwMjA1NjgwNywgeTogMjY2LjQ2MjQyNjY1MDIyMDA0LCBncm91cDogNSB9LFxyXG4gICAgICAgIHsgaWQ6ICdDaGlsZDEnLCB4OiA1ODguMDM1MTU1MjM4Njk2MSwgeTogNDEwLjIxOTU1NTU5NjE5OTYsIGdyb3VwOiAxMCB9LFxyXG4gICAgICAgIHsgaWQ6ICdDaGlsZDInLCB4OiA1NTkuMjc3NzgxNDc4MjcwNSwgeTogNDA4LjM1MzMxODQ4OTM1NjksIGdyb3VwOiAxMCB9LFxyXG4gICAgICAgIHsgaWQ6ICdCcnVqb24nLCB4OiA1MzcuMTc4NzM4MzkwNDY1NiwgeTogMzM3Ljg2OTIyNzc1OTE3OTQ3LCBncm91cDogNCB9LFxyXG4gICAgICAgIHsgaWQ6ICdNbWUuSHVjaGVsb3VwJywgeDogNjI2LjM3NzU4NTA0NjYxNjQsIHk6IDM4NC4zNTIwMjA2Njg5NDUxNiwgZ3JvdXA6IDggfVxyXG4gICAgXSxcclxuXHJcbiAgICBsaW5rczogW1xyXG4gICAgICAgIHsgc291cmNlOiAnTmFwb2xlb24nLCB0YXJnZXQ6ICdNeXJpZWwnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWxsZS5CYXB0aXN0aW5lJywgdGFyZ2V0OiAnTXlyaWVsJywgdmFsdWU6IDggfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5NYWdsb2lyZScsIHRhcmdldDogJ015cmllbCcsIHZhbHVlOiAxMCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLk1hZ2xvaXJlJywgdGFyZ2V0OiAnTWxsZS5CYXB0aXN0aW5lJywgdmFsdWU6IDYgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvdW50ZXNzZGVMbycsIHRhcmdldDogJ015cmllbCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHZWJvcmFuZCcsIHRhcmdldDogJ015cmllbCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDaGFtcHRlcmNpZXInLCB0YXJnZXQ6ICdNeXJpZWwnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ3JhdmF0dGUnLCB0YXJnZXQ6ICdNeXJpZWwnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ291bnQnLCB0YXJnZXQ6ICdNeXJpZWwnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnT2xkTWFuJywgdGFyZ2V0OiAnTXlyaWVsJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1ZhbGplYW4nLCB0YXJnZXQ6ICdMYWJhcnJlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1ZhbGplYW4nLCB0YXJnZXQ6ICdNbWUuTWFnbG9pcmUnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnVmFsamVhbicsIHRhcmdldDogJ01sbGUuQmFwdGlzdGluZScsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdWYWxqZWFuJywgdGFyZ2V0OiAnTXlyaWVsJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hcmd1ZXJpdGUnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5kZVInLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0lzYWJlYXUnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dlcnZhaXMnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0xpc3RvbGllcicsIHRhcmdldDogJ1Rob2xvbXllcycsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYW1ldWlsJywgdGFyZ2V0OiAnVGhvbG9teWVzJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhbWV1aWwnLCB0YXJnZXQ6ICdMaXN0b2xpZXInLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmxhY2hldmlsbGUnLCB0YXJnZXQ6ICdUaG9sb215ZXMnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmxhY2hldmlsbGUnLCB0YXJnZXQ6ICdMaXN0b2xpZXInLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmxhY2hldmlsbGUnLCB0YXJnZXQ6ICdGYW1ldWlsJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Zhdm91cml0ZScsIHRhcmdldDogJ1Rob2xvbXllcycsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYXZvdXJpdGUnLCB0YXJnZXQ6ICdMaXN0b2xpZXInLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmF2b3VyaXRlJywgdGFyZ2V0OiAnRmFtZXVpbCcsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYXZvdXJpdGUnLCB0YXJnZXQ6ICdCbGFjaGV2aWxsZScsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdEYWhsaWEnLCB0YXJnZXQ6ICdUaG9sb215ZXMnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRGFobGlhJywgdGFyZ2V0OiAnTGlzdG9saWVyJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0RhaGxpYScsIHRhcmdldDogJ0ZhbWV1aWwnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRGFobGlhJywgdGFyZ2V0OiAnQmxhY2hldmlsbGUnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRGFobGlhJywgdGFyZ2V0OiAnRmF2b3VyaXRlJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1plcGhpbmUnLCB0YXJnZXQ6ICdUaG9sb215ZXMnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnWmVwaGluZScsIHRhcmdldDogJ0xpc3RvbGllcicsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdaZXBoaW5lJywgdGFyZ2V0OiAnRmFtZXVpbCcsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdaZXBoaW5lJywgdGFyZ2V0OiAnQmxhY2hldmlsbGUnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnWmVwaGluZScsIHRhcmdldDogJ0Zhdm91cml0ZScsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdaZXBoaW5lJywgdGFyZ2V0OiAnRGFobGlhJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhbnRpbmUnLCB0YXJnZXQ6ICdUaG9sb215ZXMnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmFudGluZScsIHRhcmdldDogJ0xpc3RvbGllcicsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYW50aW5lJywgdGFyZ2V0OiAnRmFtZXVpbCcsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYW50aW5lJywgdGFyZ2V0OiAnQmxhY2hldmlsbGUnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmFudGluZScsIHRhcmdldDogJ0Zhdm91cml0ZScsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYW50aW5lJywgdGFyZ2V0OiAnRGFobGlhJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhbnRpbmUnLCB0YXJnZXQ6ICdaZXBoaW5lJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhbnRpbmUnLCB0YXJnZXQ6ICdNYXJndWVyaXRlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhbnRpbmUnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDkgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5UaGVuYXJkaWVyJywgdGFyZ2V0OiAnRmFudGluZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuVGhlbmFyZGllcicsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogNyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnVGhlbmFyZGllcicsIHRhcmdldDogJ01tZS5UaGVuYXJkaWVyJywgdmFsdWU6IDEzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdUaGVuYXJkaWVyJywgdGFyZ2V0OiAnRmFudGluZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdUaGVuYXJkaWVyJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29zZXR0ZScsIHRhcmdldDogJ01tZS5UaGVuYXJkaWVyJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Nvc2V0dGUnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDMxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3NldHRlJywgdGFyZ2V0OiAnVGhvbG9teWVzJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Nvc2V0dGUnLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0phdmVydCcsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMTcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0phdmVydCcsIHRhcmdldDogJ0ZhbnRpbmUnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSmF2ZXJ0JywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKYXZlcnQnLCB0YXJnZXQ6ICdNbWUuVGhlbmFyZGllcicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKYXZlcnQnLCB0YXJnZXQ6ICdDb3NldHRlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhdWNoZWxldmVudCcsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogOCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmF1Y2hlbGV2ZW50JywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhbWF0YWJvaXMnLCB0YXJnZXQ6ICdGYW50aW5lJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhbWF0YWJvaXMnLCB0YXJnZXQ6ICdKYXZlcnQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFtYXRhYm9pcycsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnUGVycGV0dWUnLCB0YXJnZXQ6ICdGYW50aW5lJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1NpbXBsaWNlJywgdGFyZ2V0OiAnUGVycGV0dWUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnU2ltcGxpY2UnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1NpbXBsaWNlJywgdGFyZ2V0OiAnRmFudGluZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdTaW1wbGljZScsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdTY2F1ZmZsYWlyZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnV29tYW4xJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdXb21hbjEnLCB0YXJnZXQ6ICdKYXZlcnQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSnVkZ2UnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0p1ZGdlJywgdGFyZ2V0OiAnQmFtYXRhYm9pcycsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDaGFtcG1hdGhpZXUnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NoYW1wbWF0aGlldScsIHRhcmdldDogJ0p1ZGdlJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NoYW1wbWF0aGlldScsIHRhcmdldDogJ0JhbWF0YWJvaXMnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQnJldmV0JywgdGFyZ2V0OiAnSnVkZ2UnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQnJldmV0JywgdGFyZ2V0OiAnQ2hhbXBtYXRoaWV1JywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JyZXZldCcsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQnJldmV0JywgdGFyZ2V0OiAnQmFtYXRhYm9pcycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDaGVuaWxkaWV1JywgdGFyZ2V0OiAnSnVkZ2UnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hlbmlsZGlldScsIHRhcmdldDogJ0NoYW1wbWF0aGlldScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDaGVuaWxkaWV1JywgdGFyZ2V0OiAnQnJldmV0JywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NoZW5pbGRpZXUnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NoZW5pbGRpZXUnLCB0YXJnZXQ6ICdCYW1hdGFib2lzJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvY2hlcGFpbGxlJywgdGFyZ2V0OiAnSnVkZ2UnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29jaGVwYWlsbGUnLCB0YXJnZXQ6ICdDaGFtcG1hdGhpZXUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29jaGVwYWlsbGUnLCB0YXJnZXQ6ICdCcmV2ZXQnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29jaGVwYWlsbGUnLCB0YXJnZXQ6ICdDaGVuaWxkaWV1JywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvY2hlcGFpbGxlJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb2NoZXBhaWxsZScsIHRhcmdldDogJ0JhbWF0YWJvaXMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnUG9udG1lcmN5JywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCb3VsYXRydWVsbGUnLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Vwb25pbmUnLCB0YXJnZXQ6ICdNbWUuVGhlbmFyZGllcicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdFcG9uaW5lJywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdBbnplbG1hJywgdGFyZ2V0OiAnRXBvbmluZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdBbnplbG1hJywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdBbnplbG1hJywgdGFyZ2V0OiAnTW1lLlRoZW5hcmRpZXInLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnV29tYW4yJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdXb21hbjInLCB0YXJnZXQ6ICdDb3NldHRlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1dvbWFuMicsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNb3RoZXJJbm5vY2VudCcsIHRhcmdldDogJ0ZhdWNoZWxldmVudCcsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNb3RoZXJJbm5vY2VudCcsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3JpYmllcicsIHRhcmdldDogJ0ZhdWNoZWxldmVudCcsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuQnVyZ29uJywgdGFyZ2V0OiAnSm9uZHJldHRlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dhdnJvY2hlJywgdGFyZ2V0OiAnTW1lLkJ1cmdvbicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHYXZyb2NoZScsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR2F2cm9jaGUnLCB0YXJnZXQ6ICdKYXZlcnQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR2F2cm9jaGUnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dpbGxlbm9ybWFuZCcsIHRhcmdldDogJ0Nvc2V0dGUnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR2lsbGVub3JtYW5kJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYWdub24nLCB0YXJnZXQ6ICdHaWxsZW5vcm1hbmQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFnbm9uJywgdGFyZ2V0OiAnTW1lLlRoZW5hcmRpZXInLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWxsZS5HaWxsZW5vcm1hbmQnLCB0YXJnZXQ6ICdHaWxsZW5vcm1hbmQnLCB2YWx1ZTogOSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWxsZS5HaWxsZW5vcm1hbmQnLCB0YXJnZXQ6ICdDb3NldHRlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01sbGUuR2lsbGVub3JtYW5kJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuUG9udG1lcmN5JywgdGFyZ2V0OiAnTWxsZS5HaWxsZW5vcm1hbmQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLlBvbnRtZXJjeScsIHRhcmdldDogJ1BvbnRtZXJjeScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbGxlLlZhdWJvaXMnLCB0YXJnZXQ6ICdNbGxlLkdpbGxlbm9ybWFuZCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdMdC5HaWxsZW5vcm1hbmQnLCB0YXJnZXQ6ICdNbGxlLkdpbGxlbm9ybWFuZCcsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdMdC5HaWxsZW5vcm1hbmQnLCB0YXJnZXQ6ICdHaWxsZW5vcm1hbmQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTHQuR2lsbGVub3JtYW5kJywgdGFyZ2V0OiAnQ29zZXR0ZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJpdXMnLCB0YXJnZXQ6ICdNbGxlLkdpbGxlbm9ybWFuZCcsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJpdXMnLCB0YXJnZXQ6ICdHaWxsZW5vcm1hbmQnLCB2YWx1ZTogMTIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ1BvbnRtZXJjeScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJpdXMnLCB0YXJnZXQ6ICdMdC5HaWxsZW5vcm1hbmQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFyaXVzJywgdGFyZ2V0OiAnQ29zZXR0ZScsIHZhbHVlOiAyMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFyaXVzJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxOSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFyaXVzJywgdGFyZ2V0OiAnVGhvbG9teWVzJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFyaXVzJywgdGFyZ2V0OiAnRXBvbmluZScsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJpdXMnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYXJvbmVzc1QnLCB0YXJnZXQ6ICdHaWxsZW5vcm1hbmQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFyb25lc3NUJywgdGFyZ2V0OiAnTWFyaXVzJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hYmV1ZicsIHRhcmdldDogJ01hcml1cycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYWJldWYnLCB0YXJnZXQ6ICdFcG9uaW5lJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hYmV1ZicsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Vuam9scmFzJywgdGFyZ2V0OiAnTWFyaXVzJywgdmFsdWU6IDcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Vuam9scmFzJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogNyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRW5qb2xyYXMnLCB0YXJnZXQ6ICdKYXZlcnQnLCB2YWx1ZTogNiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRW5qb2xyYXMnLCB0YXJnZXQ6ICdNYWJldWYnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRW5qb2xyYXMnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvbWJlZmVycmUnLCB0YXJnZXQ6ICdFbmpvbHJhcycsIHZhbHVlOiAxNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29tYmVmZXJyZScsIHRhcmdldDogJ01hcml1cycsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb21iZWZlcnJlJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogNiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29tYmVmZXJyZScsIHRhcmdldDogJ01hYmV1ZicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdQcm91dmFpcmUnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdQcm91dmFpcmUnLCB0YXJnZXQ6ICdFbmpvbHJhcycsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdQcm91dmFpcmUnLCB0YXJnZXQ6ICdDb21iZWZlcnJlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZldWlsbHknLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGZXVpbGx5JywgdGFyZ2V0OiAnRW5qb2xyYXMnLCB2YWx1ZTogNiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmV1aWxseScsIHRhcmdldDogJ1Byb3V2YWlyZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGZXVpbGx5JywgdGFyZ2V0OiAnQ29tYmVmZXJyZScsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGZXVpbGx5JywgdGFyZ2V0OiAnTWFiZXVmJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZldWlsbHknLCB0YXJnZXQ6ICdNYXJpdXMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ291cmZleXJhYycsIHRhcmdldDogJ01hcml1cycsIHZhbHVlOiA5IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3VyZmV5cmFjJywgdGFyZ2V0OiAnRW5qb2xyYXMnLCB2YWx1ZTogMTcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvdXJmZXlyYWMnLCB0YXJnZXQ6ICdDb21iZWZlcnJlJywgdmFsdWU6IDEzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3VyZmV5cmFjJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogNyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ291cmZleXJhYycsIHRhcmdldDogJ01hYmV1ZicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3VyZmV5cmFjJywgdGFyZ2V0OiAnRXBvbmluZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3VyZmV5cmFjJywgdGFyZ2V0OiAnRmV1aWxseScsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3VyZmV5cmFjJywgdGFyZ2V0OiAnUHJvdXZhaXJlJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhaG9yZWwnLCB0YXJnZXQ6ICdDb21iZWZlcnJlJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhaG9yZWwnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWhvcmVsJywgdGFyZ2V0OiAnQ291cmZleXJhYycsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWhvcmVsJywgdGFyZ2V0OiAnTWFiZXVmJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhaG9yZWwnLCB0YXJnZXQ6ICdFbmpvbHJhcycsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWhvcmVsJywgdGFyZ2V0OiAnRmV1aWxseScsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWhvcmVsJywgdGFyZ2V0OiAnUHJvdXZhaXJlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhaG9yZWwnLCB0YXJnZXQ6ICdNYXJpdXMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQm9zc3VldCcsIHRhcmdldDogJ01hcml1cycsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCb3NzdWV0JywgdGFyZ2V0OiAnQ291cmZleXJhYycsIHZhbHVlOiAxMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQm9zc3VldCcsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Jvc3N1ZXQnLCB0YXJnZXQ6ICdCYWhvcmVsJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Jvc3N1ZXQnLCB0YXJnZXQ6ICdFbmpvbHJhcycsIHZhbHVlOiAxMCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQm9zc3VldCcsIHRhcmdldDogJ0ZldWlsbHknLCB2YWx1ZTogNiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQm9zc3VldCcsIHRhcmdldDogJ1Byb3V2YWlyZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCb3NzdWV0JywgdGFyZ2V0OiAnQ29tYmVmZXJyZScsIHZhbHVlOiA5IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCb3NzdWV0JywgdGFyZ2V0OiAnTWFiZXVmJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Jvc3N1ZXQnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0pvbHknLCB0YXJnZXQ6ICdCYWhvcmVsJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0pvbHknLCB0YXJnZXQ6ICdCb3NzdWV0JywgdmFsdWU6IDcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0pvbHknLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKb2x5JywgdGFyZ2V0OiAnQ291cmZleXJhYycsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKb2x5JywgdGFyZ2V0OiAnRW5qb2xyYXMnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSm9seScsIHRhcmdldDogJ0ZldWlsbHknLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSm9seScsIHRhcmdldDogJ1Byb3V2YWlyZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKb2x5JywgdGFyZ2V0OiAnQ29tYmVmZXJyZScsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKb2x5JywgdGFyZ2V0OiAnTWFiZXVmJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0pvbHknLCB0YXJnZXQ6ICdNYXJpdXMnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3JhbnRhaXJlJywgdGFyZ2V0OiAnQm9zc3VldCcsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHcmFudGFpcmUnLCB0YXJnZXQ6ICdFbmpvbHJhcycsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHcmFudGFpcmUnLCB0YXJnZXQ6ICdDb21iZWZlcnJlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dyYW50YWlyZScsIHRhcmdldDogJ0NvdXJmZXlyYWMnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3JhbnRhaXJlJywgdGFyZ2V0OiAnSm9seScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHcmFudGFpcmUnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHcmFudGFpcmUnLCB0YXJnZXQ6ICdCYWhvcmVsJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dyYW50YWlyZScsIHRhcmdldDogJ0ZldWlsbHknLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3JhbnRhaXJlJywgdGFyZ2V0OiAnUHJvdXZhaXJlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01vdGhlclBsdXRhcmNoJywgdGFyZ2V0OiAnTWFiZXVmJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0d1ZXVsZW1lcicsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3VldWxlbWVyJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHdWV1bGVtZXInLCB0YXJnZXQ6ICdNbWUuVGhlbmFyZGllcicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHdWV1bGVtZXInLCB0YXJnZXQ6ICdKYXZlcnQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3VldWxlbWVyJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3VldWxlbWVyJywgdGFyZ2V0OiAnRXBvbmluZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWJldCcsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogNiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFiZXQnLCB0YXJnZXQ6ICdHdWV1bGVtZXInLCB2YWx1ZTogNiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFiZXQnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhYmV0JywgdGFyZ2V0OiAnTW1lLlRoZW5hcmRpZXInLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFiZXQnLCB0YXJnZXQ6ICdKYXZlcnQnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFiZXQnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWJldCcsIHRhcmdldDogJ0Vwb25pbmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2xhcXVlc291cycsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2xhcXVlc291cycsIHRhcmdldDogJ0JhYmV0JywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NsYXF1ZXNvdXMnLCB0YXJnZXQ6ICdHdWV1bGVtZXInLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2xhcXVlc291cycsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2xhcXVlc291cycsIHRhcmdldDogJ01tZS5UaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NsYXF1ZXNvdXMnLCB0YXJnZXQ6ICdKYXZlcnQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2xhcXVlc291cycsIHRhcmdldDogJ0Vwb25pbmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2xhcXVlc291cycsIHRhcmdldDogJ0Vuam9scmFzJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01vbnRwYXJuYXNzZScsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNb250cGFybmFzc2UnLCB0YXJnZXQ6ICdCYWJldCcsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNb250cGFybmFzc2UnLCB0YXJnZXQ6ICdHdWV1bGVtZXInLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW9udHBhcm5hc3NlJywgdGFyZ2V0OiAnQ2xhcXVlc291cycsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNb250cGFybmFzc2UnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01vbnRwYXJuYXNzZScsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01vbnRwYXJuYXNzZScsIHRhcmdldDogJ0Vwb25pbmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW9udHBhcm5hc3NlJywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdUb3Vzc2FpbnQnLCB0YXJnZXQ6ICdDb3NldHRlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1RvdXNzYWludCcsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdUb3Vzc2FpbnQnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NoaWxkMScsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NoaWxkMicsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NoaWxkMicsIHRhcmdldDogJ0NoaWxkMScsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCcnVqb24nLCB0YXJnZXQ6ICdCYWJldCcsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCcnVqb24nLCB0YXJnZXQ6ICdHdWV1bGVtZXInLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQnJ1am9uJywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCcnVqb24nLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCcnVqb24nLCB0YXJnZXQ6ICdFcG9uaW5lJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JydWpvbicsIHRhcmdldDogJ0NsYXF1ZXNvdXMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQnJ1am9uJywgdGFyZ2V0OiAnTW9udHBhcm5hc3NlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5IdWNoZWxvdXAnLCB0YXJnZXQ6ICdCb3NzdWV0JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5IdWNoZWxvdXAnLCB0YXJnZXQ6ICdKb2x5JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5IdWNoZWxvdXAnLCB0YXJnZXQ6ICdHcmFudGFpcmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLkh1Y2hlbG91cCcsIHRhcmdldDogJ0JhaG9yZWwnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLkh1Y2hlbG91cCcsIHRhcmdldDogJ0NvdXJmZXlyYWMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLkh1Y2hlbG91cCcsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5IdWNoZWxvdXAnLCB0YXJnZXQ6ICdFbmpvbHJhcycsIHZhbHVlOiAxIH1cclxuICAgIF1cclxufVxyXG4iLCIvKipcclxuICogQGF1dGhvciBYaWFvZG9uZyBaaGFvIDx6aGFveGlhb2RvbmdAemp1LmVkdS5jbj5cclxuICogQGRlc2NyaXB0aW9uIFBhdGVudHMgZGF0YXNldCwgZnJvbSBodHRwczovL3d3dy5wYXRlbnRzdmlldy5vcmcvd2ViLyN2aXovcmVsYXRpb25zaGlwc1xyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBwYXRlbnRzID0ge1xyXG4gICAgbm9kZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY1MTYyMjcnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUmVjaGFyZ2VhYmxlIHNwaW5hbCBjb3JkIHN0aW11bGF0b3Igc3lzdGVtJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzYzLFxyXG4gICAgICAgICAgICB4OiAtMTQ2LjUwNzIyNzcyMjA2NDE2LFxyXG4gICAgICAgICAgICB5OiAyMzcuNzg5ODg0ODg2NDE4MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NTM1OTA5JyxcclxuICAgICAgICAgICAgbmFtZTogJ1N5c3RlbSBhbmQgbWV0aG9kIGZvciByZWNvcmQgYW5kIHBsYXliYWNrIG9mIGNvbGxhYm9yYXRpdmUgV2ViIGJyb3dzaW5nIHNlc3Npb24nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE0MzgsXHJcbiAgICAgICAgICAgIHg6IDMwMS4wODgwODQwNzQwMTc4LFxyXG4gICAgICAgICAgICB5OiA3OC4zNTQ0OTE5MTU4NzU0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY1NDk5MDgnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ01ldGhvZHMgYW5kIGFwcGFyYXR1cyBmb3IgaW50ZXJwcmV0aW5nIHVzZXIgc2VsZWN0aW9ucyBpbiB0aGUgY29udGV4dCBvZiBhIHJlbGF0aW9uIGRpc3RyaWJ1dGVkIGFzIGEgc2V0IG9mIG9ydGhvZ29uYWxpemVkIHN1Yi1yZWxhdGlvbnMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNjgsXHJcbiAgICAgICAgICAgIHg6IC0xMy44MTQ4NTY1OTA3NDEyMDIsXHJcbiAgICAgICAgICAgIHk6IC0xODMuNTUwMTY3OTM1MDI3NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NTUzNTYzJyxcclxuICAgICAgICAgICAgbmFtZTogJ0RldmVsb3BtZW50IHRvb2wsIG1ldGhvZCwgYW5kIHN5c3RlbSBmb3IgY2xpZW50IHNlcnZlciBhcHBsaWNhdGlvbnMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzNTEsXHJcbiAgICAgICAgICAgIHg6IC0wLjUyMjQzMTI3OTAxNDI3NzcsXHJcbiAgICAgICAgICAgIHk6IC0yNDcuMTQ5NTc3OTYyNzI3OVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NTU4MzIwJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdIYW5kaGVsZCBwZXJzb25hbCBkYXRhIGFzc2lzdGFudCAoUERBKSB3aXRoIGEgbWVkaWNhbCBkZXZpY2UgYW5kIG1ldGhvZCBvZiB1c2luZyB0aGUgc2FtZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTUxNCxcclxuICAgICAgICAgICAgeDogLTIwNC42NDA3MTg5NDY1NDc4OCxcclxuICAgICAgICAgICAgeTogNzEuNTcwNTUyODQ1MTIzMTJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjU1ODM1MScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDbG9zZWQgbG9vcCBzeXN0ZW0gZm9yIGNvbnRyb2xsaW5nIGluc3VsaW4gaW5mdXNpb24nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzNjksXHJcbiAgICAgICAgICAgIHg6IC0yMTIuOTc4MTYwMDAyMTkzODcsXHJcbiAgICAgICAgICAgIHk6IDE0LjcxNTY0MDUzNDE3MDA5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY1NjA0NjEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQXV0aG9yaXplZCBsb2NhdGlvbiByZXBvcnRpbmcgcGFnaW5nIHN5c3RlbScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTQ3OSxcclxuICAgICAgICAgICAgeDogLTI1MC40MzU0MzA2MjkwNTA5MyxcclxuICAgICAgICAgICAgeTogLTE5MS40MzcyMDA2MjQwNjAzOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NTYzMTc0JyxcclxuICAgICAgICAgICAgbmFtZTogJ1RoaW4gZmlsbSB0cmFuc2lzdG9yIGFuZCBtYXRyaXggZGlzcGxheSBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyODQsXHJcbiAgICAgICAgICAgIHg6IC0xMi41ODgyNDk1MDM2NTI0MDEsXHJcbiAgICAgICAgICAgIHk6IC0zLjYwNjYzODkyNTA3NDk1MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NTY1NTA5JyxcclxuICAgICAgICAgICAgbmFtZTogJ0FuYWx5dGUgbW9uaXRvcmluZyBkZXZpY2UgYW5kIG1ldGhvZHMgb2YgdXNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzMzLFxyXG4gICAgICAgICAgICB4OiAtMTA1LjI1NTExNjEyMzYyMDQ1LFxyXG4gICAgICAgICAgICB5OiAxNTcuMTE3MTMzNjA2MDI2MjFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjU3MTI4MicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdCbG9jay1iYXNlZCBjb21tdW5pY2F0aW9uIGluIGEgY29tbXVuaWNhdGlvbiBzZXJ2aWNlcyBwYXR0ZXJucyBlbnZpcm9ubWVudCcsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTQ2NyxcclxuICAgICAgICAgICAgeDogMTM5LjY2OTc0Njc0ODI4MSxcclxuICAgICAgICAgICAgeTogMjUzLjAxNDA2NTAxNDcxOTQyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY1NzQ2MzUnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ0FwcGxpY2F0aW9uIGluc3RhbnRpYXRpb24gYmFzZWQgdXBvbiBhdHRyaWJ1dGVzIGFuZCB2YWx1ZXMgc3RvcmVkIGluIGEgbWV0YSBkYXRhIHJlcG9zaXRvcnksIGluY2x1ZGluZyB0aWVyaW5nIG9mIGFwcGxpY2F0aW9uIGxheWVycyBvYmplY3RzIGFuZCBjb21wb25lbnRzJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzY4LFxyXG4gICAgICAgICAgICB4OiAxMS4wMDIwMjc2Mjc3ODIxMTYsXHJcbiAgICAgICAgICAgIHk6IC0yMzQuOTE4MDUyOTgzMjM1OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NTc3NzI2JyxcclxuICAgICAgICAgICAgbmFtZTogJ0NvbXB1dGVyIHRlbGVwaG9ueSBpbnRlZ3JhdGlvbiBob3RlbGxpbmcgbWV0aG9kIGFuZCBzeXN0ZW0nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNzAsXHJcbiAgICAgICAgICAgIHg6IC04Ny4xOTE1MzI0NTg0MTI2MixcclxuICAgICAgICAgICAgeTogLTE3My45NzY0NDc1NTkyOTI4NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NTg3ODM1JyxcclxuICAgICAgICAgICAgbmFtZTogJ1Nob3BwaW5nIGFzc2lzdGFuY2Ugd2l0aCBoYW5kaGVsZCBjb21wdXRpbmcgZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNDcxLFxyXG4gICAgICAgICAgICB4OiAtMjc5LjI4NjU4MTMzNzg0NjUsXHJcbiAgICAgICAgICAgIHk6IDExMC4xNTg3OTEyNTAxNTA3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2MDEwODcnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSW5zdGFudCBkb2N1bWVudCBzaGFyaW5nJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzk3LFxyXG4gICAgICAgICAgICB4OiAyMTAuOTQ4MjEzNTAxMzcxODQsXHJcbiAgICAgICAgICAgIHk6IDkyLjUzMTg4Nzg2OTExNDA0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2MDIyNTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ29tYmluZWQgZGlzc2VjdGluZywgY2F1dGVyaXppbmcsIGFuZCBzdGFwbGluZyBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE1MDMsXHJcbiAgICAgICAgICAgIHg6IDE0Ny45NDk3NzE2NTA0MzI1OCxcclxuICAgICAgICAgICAgeTogMTcwLjA4ODg4ODU1NjMxMzA3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2MDQxMTcnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWV0aG9kIG9mIG1haW50YWluaW5nIGEgbmV0d29yayBvZiBwYXJ0aWFsbHkgcmVwbGljYXRlZCBkYXRhYmFzZSBzeXN0ZW0nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNjEsXHJcbiAgICAgICAgICAgIHg6IC0wLjg4ODU1NTgwMjc0MjAzNSxcclxuICAgICAgICAgICAgeTogLTIxOC4yMzA0ODgyMDMwNzIyN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NjA0MTI4JyxcclxuICAgICAgICAgICAgbmFtZTogJ01ldGhvZCBhbmQgc3lzdGVtIGZvciBkaXN0cmlidXRpbmcgb2JqZWN0cyBvdmVyIGEgbmV0d29yaycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI2MSxcclxuICAgICAgICAgICAgeDogLTU2LjczODcyNzQyMTIwODQxLFxyXG4gICAgICAgICAgICB5OiAtMjQzLjM0ODM4NDEwNjY0NDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjYwNjc0NCcsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnUHJvdmlkaW5nIGNvbGxhYm9yYXRpdmUgaW5zdGFsbGF0aW9uIG1hbmFnZW1lbnQgaW4gYSBuZXR3b3JrLWJhc2VkIHN1cHBseSBjaGFpbiBlbnZpcm9ubWVudCcsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI3MSxcclxuICAgICAgICAgICAgeDogMTUzLjk5NDgyNTE4NTAzOTcsXHJcbiAgICAgICAgICAgIHk6IDIzMS40NjU3OTg4ODEyMDI3MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NjA5MTUwJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdXZWIgY2xpZW50LXNlcnZlciBzeXN0ZW0gYW5kIG1ldGhvZCBmb3IgaW5jb21wYXRpYmxlIHBhZ2UgbWFya3VwIGFuZCBwcmVzZW50YXRpb24gbGFuZ3VhZ2VzJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzM2LFxyXG4gICAgICAgICAgICB4OiAxMy4xODI4Njc2MDczMjEyNTUsXHJcbiAgICAgICAgICAgIHk6IC0xODQuODM0MjY0MzE4ODE1N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NjIxODM0JyxcclxuICAgICAgICAgICAgbmFtZTogJ1N5c3RlbSBhbmQgbWV0aG9kIGZvciB2b2ljZSB0cmFuc21pc3Npb24gb3ZlciBuZXR3b3JrIHByb3RvY29scycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI2NSxcclxuICAgICAgICAgICAgeDogODUuMDgyMjgxNDkzNDQzNjksXHJcbiAgICAgICAgICAgIHk6IDEwNS40MzQ2NDU3MTIzMjg5NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NjQxNTMzJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdIYW5kaGVsZCBwZXJzb25hbCBkYXRhIGFzc2lzdGFudCAoUERBKSB3aXRoIGEgbWVkaWNhbCBkZXZpY2UgYW5kIG1ldGhvZCBvZiB1c2luZyB0aGUgc2FtZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTQzMSxcclxuICAgICAgICAgICAgeDogLTIxOC4wOTc2NjExODAwMTIyNCxcclxuICAgICAgICAgICAgeTogMzkuODU3NjAwMzU3OTc5ODlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjY0NDUzMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTdXJnaWNhbCBzdGFwbGluZyBhcHBhcmF0dXMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNjcsXHJcbiAgICAgICAgICAgIHg6IDMwNC42NjMwOTI1MzE2Mjk0LFxyXG4gICAgICAgICAgICB5OiAtMjkuNzA5NjExNTczNDkxMzk3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2NTQwMzInLFxyXG4gICAgICAgICAgICBuYW1lOiAnSW5zdGFudCBzaGFyaW5nIG9mIGRvY3VtZW50cyBvbiBhIHJlbW90ZSBzZXJ2ZXInLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE0MTMsXHJcbiAgICAgICAgICAgIHg6IDE1OS4zMDA1MDM1NTI5NjAxNSxcclxuICAgICAgICAgICAgeTogMTA4Ljk4Mzg5NTg1NjI3MDA1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2NTYxOTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRGV2aWNlIGZvciBhdHRhY2htZW50IG9mIGJ1dHRyZXNzIG1hdGVyaWFsIHRvIGEgc3VyZ2ljYWwgZmFzdGVuaW5nIGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI3OSxcclxuICAgICAgICAgICAgeDogMTE2LjkwOTE0MTUzMTU4NTk3LFxyXG4gICAgICAgICAgICB5OiAtNzguNzY2MjY5MzY4NTg1NTdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjY2NTY0OCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTdGF0ZSBtb2RlbHMgZm9yIG1vbml0b3JpbmcgcHJvY2VzcycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI4OCxcclxuICAgICAgICAgICAgeDogLTE5Ljc1MTg1MjczOTM1Mzc0LFxyXG4gICAgICAgICAgICB5OiAtMTI2LjY1MzM4OTEyMjY5OTI4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2NjU2NTUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSW1wbGljaXQgcmF0aW5nIG9mIHJldHJpZXZlZCBpbmZvcm1hdGlvbiBpbiBhbiBpbmZvcm1hdGlvbiBzZWFyY2ggc3lzdGVtJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjk0LFxyXG4gICAgICAgICAgICB4OiAtMjA1LjUxMDM2MTIxOTk0NjcsXHJcbiAgICAgICAgICAgIHk6IC02Mi42MTUxNzU3NzI5MjM5NzZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjY4NDQzOCcsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnTWV0aG9kIG9mIHVzaW5nIGNhY2hlIHRvIGRldGVybWluZSB0aGUgdmlzaWJpbGl0eSB0byBhIHJlbW90ZSBkYXRhYmFzZSBjbGllbnQgb2YgYSBwbHVyYWxpdHkgb2YgZGF0YWJhc2UgdHJhbnNhY3Rpb25zJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjY1LFxyXG4gICAgICAgICAgICB4OiAtNzAuODk2MjExOTA4MDUzMjksXHJcbiAgICAgICAgICAgIHk6IC0yMTEuNjU4OTgxMjY0Njk0NzVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjY5MDM4NycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUb3VjaC1zY3JlZW4gaW1hZ2Ugc2Nyb2xsaW5nIHN5c3RlbSBhbmQgbWV0aG9kJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzYxLFxyXG4gICAgICAgICAgICB4OiAtOTYuMDgzMzMzNTg2MTAxNCxcclxuICAgICAgICAgICAgeTogMjU3LjE4ODY2NjA0NDIwOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NjkzMjMyJyxcclxuICAgICAgICAgICAgbmFtZTogJ0luYnJlZCBjb3JuIGxpbmUgTEgyOTUnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE1ODUsXHJcbiAgICAgICAgICAgIHg6IDIyNS4yMTM2MjM5NjYzNDMzMyxcclxuICAgICAgICAgICAgeTogLTE4MS43MDIzMTIwODczOTAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2OTg2NDMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRXhwYW5kaW5nIHBhcmFsbGVsIGphdyBkZXZpY2UgZm9yIHVzZSB3aXRoIGFuIGVsZWN0cm9tZWNoYW5pY2FsIGRyaXZlciBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzNTUsXHJcbiAgICAgICAgICAgIHg6IDExNi45MzM4MDA4ODIwMDMwOCxcclxuICAgICAgICAgICAgeTogMjIwLjIxNDE5NzA1NDM5NjA3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3MTE1NjUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWV0aG9kLCBhcHBhcmF0dXMsIGFuZCBzeXN0ZW0gZm9yIHByZXZpZXdpbmcgc2VhcmNoIHJlc3VsdHMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzODgsXHJcbiAgICAgICAgICAgIHg6IC0zNy41MDQ0ODEyOTA3NjczNSxcclxuICAgICAgICAgICAgeTogLTI3My40MTE2OTU4NDc5MTM1NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NzE2MjMzJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdFbGVjdHJvbWVjaGFuaWNhbCBkcml2ZXIgYW5kIHJlbW90ZSBzdXJnaWNhbCBpbnN0cnVtZW50IGF0dGFjaG1lbnQgaGF2aW5nIGNvbXB1dGVyIGFzc2lzdGVkIGNvbnRyb2wgY2FwYWJpbGl0aWVzJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjQ0LFxyXG4gICAgICAgICAgICB4OiA5OS45ODc0NDkyNzc0MDEwNyxcclxuICAgICAgICAgICAgeTogMjEyLjU5NTI3MjI5OTYyNjA2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3MTgzNjEnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ01ldGhvZCBhbmQgYXBwYXJhdHVzIGZvciByZWxpYWJsZSBhbmQgc2NhbGFibGUgZGlzdHJpYnV0aW9uIG9mIGRhdGEgZmlsZXMgaW4gZGlzdHJpYnV0ZWQgbmV0d29ya3MnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzNDksXHJcbiAgICAgICAgICAgIHg6IC0yMTQuNDcwNjQ1NDIwMDE1NSxcclxuICAgICAgICAgICAgeTogMTc5Ljc2NDQ1MzgzMzExNTQ1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3MjQzOTknLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ01ldGhvZHMgYW5kIGFwcGFyYXR1cyBmb3IgZW5hYmxpbmcga2V5Ym9hcmQgYWNjZWxlcmF0b3JzIGluIGFwcGxpY2F0aW9ucyBpbXBsZW1lbnRlZCB2aWEgYSBicm93c2VyJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjcxLFxyXG4gICAgICAgICAgICB4OiAtMy44NjU0MzcwOTgwMzY1OTcsXHJcbiAgICAgICAgICAgIHk6IC0xNjguMDQ2NjUwNzU5Nzc2MTZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjcyNzUyMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUcmFuc2lzdG9yIGFuZCBzZW1pY29uZHVjdG9yIGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzMwMSxcclxuICAgICAgICAgICAgeDogNDUuNDkzMDA5MDg2NTMzNDc2LFxyXG4gICAgICAgICAgICB5OiAtMTguMzk5MzM2NzYxODY1NTU1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3Mjg3MDInLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1N5c3RlbSBhbmQgbWV0aG9kIHRvIGltcGxlbWVudCBhbiBpbnRlZ3JhdGVkIHNlYXJjaCBjZW50ZXIgc3VwcG9ydGluZyBhIGZ1bGwtdGV4dCBzZWFyY2ggYW5kIHF1ZXJ5IG9uIGEgZGF0YWJhc2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyOTAsXHJcbiAgICAgICAgICAgIHg6IC01MC43NzY1MTI2OTY0Nzk2NCxcclxuICAgICAgICAgICAgeTogLTI2NS42NDM5NDE2NjQyNjE5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3Mjg5NjAnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVGVjaG5pcXVlcyBmb3IgbWFuYWdpbmcgbXVsdGlwbGUgdGhyZWFkcyBpbiBhIGJyb3dzZXIgZW52aXJvbm1lbnQnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyODcsXHJcbiAgICAgICAgICAgIHg6IC0zMS44NjA5ODI2MDAyNzI3NCxcclxuICAgICAgICAgICAgeTogLTE3Ny4wOTYyNzkyNTE2NjA3NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NzMyMDk1JyxcclxuICAgICAgICAgICAgbmFtZTogJ01ldGhvZCBhbmQgYXBwYXJhdHVzIGZvciBtYXBwaW5nIGJldHdlZW4gWE1MIGFuZCByZWxhdGlvbmFsIHJlcHJlc2VudGF0aW9ucycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTMxOCxcclxuICAgICAgICAgICAgeDogLTQ1LjE3NDMwODI2ODc3NTQ0LFxyXG4gICAgICAgICAgICB5OiAtMTUyLjIzOTM4MzU1Mjk4ODA0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3MzIxMDAnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRGF0YWJhc2UgYWNjZXNzIG1ldGhvZCBhbmQgc3lzdGVtIGZvciB1c2VyIHJvbGUgZGVmaW5lZCBhY2Nlc3MnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzNDcsXHJcbiAgICAgICAgICAgIHg6IC01OS4yMTAxMzY4MDYyOTI2NzQsXHJcbiAgICAgICAgICAgIHk6IC0xNzQuODM4Nzc5OTA4NDk1NzJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjczMjExMScsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnTWV0aG9kLCBhcHBhcmF0dXMsIHN5c3RlbSwgYW5kIHByb2dyYW0gcHJvZHVjdCBmb3IgYXR0YWNoaW5nIGZpbGVzIGFuZCBvdGhlciBvYmplY3RzIHRvIGEgcGFydGlhbGx5IHJlcGxpY2F0ZWQgZGF0YWJhc2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyOTQsXHJcbiAgICAgICAgICAgIHg6IC05MC43Mzk3MDUwNDc5NDUxLFxyXG4gICAgICAgICAgICB5OiAtMjQ0LjcxOTkwMzI4Nzc0MzE0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3NTQ2ODEnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1BhcnRpYWxseSByZXBsaWNhdGVkIGRpc3RyaWJ1dGVkIGRhdGFiYXNlIHdpdGggbXVsdGlwbGUgbGV2ZWxzIG9mIHJlbW90ZSBjbGllbnRzJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjY5LFxyXG4gICAgICAgICAgICB4OiAtNzkuNTgwODM4NzAzMTI2NTUsXHJcbiAgICAgICAgICAgIHk6IC0yMjguMTcyNDA1NDE3Mzg0MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NzYzMzUxJyxcclxuICAgICAgICAgICAgbmFtZTogJ01ldGhvZCwgYXBwYXJhdHVzLCBhbmQgc3lzdGVtIGZvciBhdHRhY2hpbmcgc2VhcmNoIHJlc3VsdHMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE0ODcsXHJcbiAgICAgICAgICAgIHg6IC0yNS4yNDM0NzQ3MzM0OTI3NDMsXHJcbiAgICAgICAgICAgIHk6IC0yNjMuMjU3NDA3OTQwMjEwNjdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjc2MzUwMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSZW1vdGUgZG9jdW1lbnQgc2VydmluZycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTMxOSxcclxuICAgICAgICAgICAgeDogMTU4LjMyNTM4Mzc2MjA5NDIsXHJcbiAgICAgICAgICAgIHk6IDkzLjQ5NTQ2MjMxNTE2OTE5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3Njg5MDQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRGF0YSBjb21tdW5pY2F0aW9uIG1ldGhvZCB1c2luZyBtb2JpbGUgdGVybWluYWwnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNTYsXHJcbiAgICAgICAgICAgIHg6IC0zMDcuOTc2MDYxNTgxMzM0MTQsXHJcbiAgICAgICAgICAgIHk6IDE4Ljc2OTc1NjY3OTc5NzM5NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NzgyMzgzJyxcclxuICAgICAgICAgICAgbmFtZTogJ1N5c3RlbSBhbmQgbWV0aG9kIHRvIGltcGxlbWVudCBhIHBlcnNpc3RlbnQgYW5kIGRpc21pc3NpYmxlIHNlYXJjaCBjZW50ZXIgZnJhbWUnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyODIsXHJcbiAgICAgICAgICAgIHg6IC0xMi45NzYxNzc1NTc4MzU4NTIsXHJcbiAgICAgICAgICAgIHk6IC0yNzIuOTE5NDQwNDA3Mzc5MVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NzgzNTI0JyxcclxuICAgICAgICAgICAgbmFtZTogJ1JvYm90aWMgc3VyZ2ljYWwgdG9vbCB3aXRoIHVsdHJhc291bmQgY2F1dGVyaXppbmcgYW5kIGN1dHRpbmcgaW5zdHJ1bWVudCcsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTUwNSxcclxuICAgICAgICAgICAgeDogNDMuMzgyMzEwOTg2OTQwNjYsXHJcbiAgICAgICAgICAgIHk6IDI3OS4wODIxNzgwMTE0NzcxNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2Nzg2MzgyJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdTdXJnaWNhbCBzdGFwbGluZyBpbnN0cnVtZW50IGluY29ycG9yYXRpbmcgYW4gYXJ0aWN1bGF0aW9uIGpvaW50IGZvciBhIGZpcmluZyBiYXIgdHJhY2snLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzNzEsXHJcbiAgICAgICAgICAgIHg6IDEzNC45NDA3ODE2NDUwMjgzNSxcclxuICAgICAgICAgICAgeTogLTY1LjEwMDgyMzczNTY2MzgxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY4MDQzMzAnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWV0aG9kIGFuZCBzeXN0ZW0gZm9yIGFjY2Vzc2luZyBDUk0gZGF0YSB2aWEgdm9pY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzNDgsXHJcbiAgICAgICAgICAgIHg6IDQxLjQ0NTI1MTcyMzg0Mjg2NSxcclxuICAgICAgICAgICAgeTogLTIzNi45OTE1NjQ4MTA5ODY1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY4MDk2NTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVGVsZW1ldGVyZWQgY2hhcmFjdGVyaXN0aWMgbW9uaXRvciBzeXN0ZW0gYW5kIG1ldGhvZCBvZiB1c2luZyB0aGUgc2FtZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI1MCxcclxuICAgICAgICAgICAgeDogLTE5Mi4zNjY1OTQ3NzU2ODA4LFxyXG4gICAgICAgICAgICB5OiA4NS4yMDAzOTcxMzg1OTE1NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2ODI2NTY1JyxcclxuICAgICAgICAgICAgbmFtZTogJ01ldGhvZCBhbmQgYXBwYXJhdHVzIGZvciBzZXJ2aW5nIGZpbGVzIHRvIGJyb3dzaW5nIGNsaWVudHMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNTMsXHJcbiAgICAgICAgICAgIHg6IC0xODcuMjAyMDc4NjEyMTQyLFxyXG4gICAgICAgICAgICB5OiAtMjA1LjgwMjgwNjcxNDA5NzVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjgyNjU4MicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNZXRob2QgYW5kIHN5c3RlbSBmb3IgdXNpbmcgZmlsZSBzeXN0ZW1zIGZvciBjb250ZW50IG1hbmFnZW1lbnQnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNjIsXHJcbiAgICAgICAgICAgIHg6IC0xNzMuMzkwNzE3MTM0MzQ1OTIsXHJcbiAgICAgICAgICAgIHk6IC04NC43NDgxMDY0NTM5MTA1MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2ODI2NzQ1JyxcclxuICAgICAgICAgICAgbmFtZTogJ1N5c3RlbSBhbmQgbWV0aG9kIGZvciBzbWFydCBzY3JpcHRpbmcgY2FsbCBjZW50ZXJzIGFuZCBjb25maWd1cmF0aW9uIHRoZXJlb2YnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyOTAsXHJcbiAgICAgICAgICAgIHg6IC03Ni43ODEyNjQzMzEyMTAwNSxcclxuICAgICAgICAgICAgeTogLTE4OS4yMjE0ODE3NTEyNTA1NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2ODI5NjU1JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdNZXRob2QgYW5kIHN5c3RlbSBmb3Igc2VydmVyIHN5bmNocm9uaXphdGlvbiB3aXRoIGEgY29tcHV0aW5nIGRldmljZSB2aWEgYSBjb21wYW5pb24gZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjkyLFxyXG4gICAgICAgICAgICB4OiA1NC4xNTA2NzIxMDcwMTg2OSxcclxuICAgICAgICAgICAgeTogLTE5My41NTk1NDMxMTU0NTM1OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2ODMwMTc0JyxcclxuICAgICAgICAgICAgbmFtZTogJ01lZGljYWwgaW5zdHJ1bWVudCcsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM0NSxcclxuICAgICAgICAgICAgeDogMjQxLjY4MzY1NjMwNDAwMDIsXHJcbiAgICAgICAgICAgIHk6IDE3OC44MTAxNTU0OTQyNDczXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY4NDI3NDgnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1VzYWdlIGJhc2VkIHN0cmVuZ3RoIGJldHdlZW4gcmVsYXRlZCBpbmZvcm1hdGlvbiBpbiBhbiBpbmZvcm1hdGlvbiByZXRyaWV2YWwgc3lzdGVtJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjczLFxyXG4gICAgICAgICAgICB4OiAtMjU1Ljc2NzE0MDE3NjM5MTgsXHJcbiAgICAgICAgICAgIHk6IC04OS4zMDk0MTQ5MDE2MDMwOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2ODQzNDAzJyxcclxuICAgICAgICAgICAgbmFtZTogJ1N1cmdpY2FsIGNsYW1waW5nLCBjdXR0aW5nIGFuZCBzdGFwbGluZyBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNzgsXHJcbiAgICAgICAgICAgIHg6IDgwLjYyMjY3ODg4MzE3NTE1LFxyXG4gICAgICAgICAgICB5OiAyMDQuNjcyNDkyOTI5NTc1NzJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjg1MDI1MicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdJbnRlbGxpZ2VudCBlbGVjdHJvbmljIGFwcGxpYW5jZSBzeXN0ZW0gYW5kIG1ldGhvZCcsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTc4NCxcclxuICAgICAgICAgICAgeDogLTI2OS4wOTM5NjI1NzE2OTgyLFxyXG4gICAgICAgICAgICB5OiA4MC43OTE1MjU0MDkxNzEwM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2ODUwODk1JyxcclxuICAgICAgICAgICAgbmFtZTogJ0Fzc2lnbm1lbnQgbWFuYWdlcicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTQyOSxcclxuICAgICAgICAgICAgeDogLTEwNC43MTUyMzE3Mjg5OTk3OCxcclxuICAgICAgICAgICAgeTogLTIzNy42NzQ4OTA1MTQ5NTM4M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2ODUwOTQ5JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdTeXN0ZW0gYW5kIG1ldGhvZCBmb3IgZ2VuZXJhdGluZyBhIGR5bmFtaWMgaW50ZXJmYWNlIHZpYSBhIGNvbW11bmljYXRpb25zIG5ldHdvcmsnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNzYsXHJcbiAgICAgICAgICAgIHg6IDE3MC44OTQ4NDc4NjY2NDIzLFxyXG4gICAgICAgICAgICB5OiAtMTU3LjE2MjM5OTYzODcyNzlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjg1MjkxNScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdJbmJyZWQgY29ybiBsaW5lIExIMjgzQnRNT044MTAnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE1ODQsXHJcbiAgICAgICAgICAgIHg6IDIxNC4yODc4MjUyNjY2Nzk3LFxyXG4gICAgICAgICAgICB5OiAtMjIxLjY1MDY0NTkwNjI1NzM1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY5MDUwNTcnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1N1cmdpY2FsIHN0YXBsaW5nIGluc3RydW1lbnQgaW5jb3Jwb3JhdGluZyBhIGZpcmluZyBtZWNoYW5pc20gaGF2aW5nIGEgbGlua2VkIHJhY2sgdHJhbnNtaXNzaW9uJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzk4LFxyXG4gICAgICAgICAgICB4OiAyMDQuMjQ0MzE0MDkxNzQzLFxyXG4gICAgICAgICAgICB5OiAtNzguMTAwMjM2NzIyMzI2MDdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjk1OTg1MicsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnU3VyZ2ljYWwgc3RhcGxpbmcgaW5zdHJ1bWVudCB3aXRoIG11bHRpc3Ryb2tlIGZpcmluZyBpbmNvcnBvcmF0aW5nIGFuIGFudGktYmFja3VwIG1lY2hhbmlzbScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI3OSxcclxuICAgICAgICAgICAgeDogMjE0LjQ3NzQxMTQwMjM2NTgyLFxyXG4gICAgICAgICAgICB5OiAtNTYuMjkxNTg3NjM2NTkxMTI1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY5NjQzNjMnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1N1cmdpY2FsIHN0YXBsaW5nIGluc3RydW1lbnQgaGF2aW5nIGFydGljdWxhdGlvbiBqb2ludCBzdXBwb3J0IHBsYXRlcyBmb3Igc3VwcG9ydGluZyBhIGZpcmluZyBiYXInLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzMzAsXHJcbiAgICAgICAgICAgIHg6IDE3MS44OTI0NzI3MDg5ODAyOCxcclxuICAgICAgICAgICAgeTogLTk3LjQxMDAyNDYyNTUwMjkzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY5Nzg5MjEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3VyZ2ljYWwgc3RhcGxpbmcgaW5zdHJ1bWVudCBpbmNvcnBvcmF0aW5nIGFuIEUtYmVhbSBmaXJpbmcgbWVjaGFuaXNtJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjcxLFxyXG4gICAgICAgICAgICB4OiAyMjAuOTk5ODAwMzgwNDA0NCxcclxuICAgICAgICAgICAgeTogLTcxLjQyMDc4MTM1NjM2NTQ1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY5ODE2MjgnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3VyZ2ljYWwgaW5zdHJ1bWVudCB3aXRoIGEgbGF0ZXJhbC1tb3ZpbmcgYXJ0aWN1bGF0aW9uIGNvbnRyb2wnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE1ODgsXHJcbiAgICAgICAgICAgIHg6IDE1NS4xMjIwOTY2NzczODcyMixcclxuICAgICAgICAgICAgeTogLTkzLjY5NjI4NzUxNDYwMjk0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzcwMDA4MTgnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1N1cmdpY2FsIHN0YXBsaW5nIGluc3RydW1lbnQgaGF2aW5nIHNlcGFyYXRlIGRpc3RpbmN0IGNsb3NpbmcgYW5kIGZpcmluZyBzeXN0ZW1zJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNDIyLFxyXG4gICAgICAgICAgICB4OiAyMjcuMDE3Njg4NDUzNzk2OTIsXHJcbiAgICAgICAgICAgIHk6IDcuMDI0MDU2NjExNDYzMDUxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzcwMjU3NDMnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ0V4dGVybmFsIGluZnVzaW9uIGRldmljZSB3aXRoIHJlbW90ZSBwcm9ncmFtbWluZywgYm9sdXMgZXN0aW1hdG9yIGFuZC9vciB2aWJyYXRpb24gYWxhcm0gY2FwYWJpbGl0aWVzJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzQ4LFxyXG4gICAgICAgICAgICB4OiAtMTM5LjMzNDg3Mjc1NzQ0Mjc1LFxyXG4gICAgICAgICAgICB5OiA0Ni41MjA2MTExNTMzNDM5OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MDQ5MTkwJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdNZXRob2QgZm9yIGZvcm1pbmcgWm5PIGZpbG0sIG1ldGhvZCBmb3IgZm9ybWluZyBabk8gc2VtaWNvbmR1Y3RvciBsYXllciwgbWV0aG9kIGZvciBmYWJyaWNhdGluZyBzZW1pY29uZHVjdG9yIGRldmljZSwgYW5kIHNlbWljb25kdWN0b3IgZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjM0LFxyXG4gICAgICAgICAgICB4OiAtMjg5LjEwOTE4ODMzNjExLFxyXG4gICAgICAgICAgICB5OiAtOTcuOTY3NzY5Mzg1NDk1MzdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzA1NTczMScsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnU3VyZ2ljYWwgc3RhcGxpbmcgaW5zdHJ1bWVudCBpbmNvcnBvcmF0aW5nIGEgdGFwZXJlZCBmaXJpbmcgYmFyIGZvciBpbmNyZWFzZWQgZmxleGliaWxpdHkgYXJvdW5kIHRoZSBhcnRpY3VsYXRpb24gam9pbnQnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzMjUsXHJcbiAgICAgICAgICAgIHg6IDIzMC40OTUxODM4NjQzOTk4OCxcclxuICAgICAgICAgICAgeTogLTU5LjY0MjI0NTY3ODU4MjQ4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzcwNjEwMTQnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ05hdHVyYWwtc3VwZXJsYXR0aWNlIGhvbW9sb2dvdXMgc2luZ2xlIGNyeXN0YWwgdGhpbiBmaWxtLCBtZXRob2QgZm9yIHByZXBhcmF0aW9uIHRoZXJlb2YsIGFuZCBkZXZpY2UgdXNpbmcgc2FpZCBzaW5nbGUgY3J5c3RhbCB0aGluIGZpbG0nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMzMzksXHJcbiAgICAgICAgICAgIHg6IC01LjgwMDg4MjA0NDkwMTQzOSxcclxuICAgICAgICAgICAgeTogNjguNTI2NDE1OTUwMzE1MjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzA2NDM0NicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUcmFuc2lzdG9yIGFuZCBzZW1pY29uZHVjdG9yIGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzI2OCxcclxuICAgICAgICAgICAgeDogLTMuNDAwMzAzMTUxOTkxMzcxNixcclxuICAgICAgICAgICAgeTogMjUuOTgxMzU2ODM2MDQzNjg4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzcxMDU4NjgnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSGlnaC1lbGVjdHJvbiBtb2JpbGl0eSB0cmFuc2lzdG9yIHdpdGggemluYyBveGlkZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzIzMyxcclxuICAgICAgICAgICAgeDogLTE3LjgzNTc4NTc0OTc4NTgxNyxcclxuICAgICAgICAgICAgeTogMTk5LjkxODgzNzIwMjEwMzA1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzcxMTE3NjknLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1N1cmdpY2FsIGluc3RydW1lbnQgaW5jb3Jwb3JhdGluZyBhbiBhcnRpY3VsYXRpb24gbWVjaGFuaXNtIGhhdmluZyByb3RhdGlvbiBhYm91dCB0aGUgbG9uZ2l0dWRpbmFsIGF4aXMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNzgsXHJcbiAgICAgICAgICAgIHg6IDE1MS4yMjU3OTgzMjUyNDA0NSxcclxuICAgICAgICAgICAgeTogLTM3LjE3MDk5MDc0NzQ5MDEzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzcxNDcxMzgnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1N1cmdpY2FsIHN0YXBsaW5nIGluc3RydW1lbnQgaGF2aW5nIGFuIGVsZWN0cm9hY3RpdmUgcG9seW1lciBhY3R1YXRlZCBidXR0cmVzcyBkZXBsb3ltZW50IG1lY2hhbmlzbScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTQyOCxcclxuICAgICAgICAgICAgeDogMTg5LjA4NjE0MzIzODU3NSxcclxuICAgICAgICAgICAgeTogLTczLjY5MTMwMzkyNjgzOTI0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzcxNTk3NTAnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3VyZ2ljYWwgc3RhcGxpbmcgZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjU4LFxyXG4gICAgICAgICAgICB4OiAtNDEuMjk5OTUxODY1MTk0NDMsXHJcbiAgICAgICAgICAgIHk6IDI5Mi44NDYyNjc0NTM3ODIyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzcyMTE4MjUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSW5kaXVtIG94aWRlLWJhc2VkIHRoaW4gZmlsbSB0cmFuc2lzdG9ycyBhbmQgY2lyY3VpdHMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyNDUsXHJcbiAgICAgICAgICAgIHg6IC0zMTIuMzgzOTA1NzIyMTQ3NyxcclxuICAgICAgICAgICAgeTogLTUuNjE0NTQxNTY3MTMzMDA3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzcyNDY3MzQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUm90YXJ5IGh5ZHJhdWxpYyBwdW1wIGFjdHVhdGVkIG11bHRpLXN0cm9rZSBzdXJnaWNhbCBpbnN0cnVtZW50JyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjg4LFxyXG4gICAgICAgICAgICB4OiAyMDAuNDQ1NjMzODAwODY1MTUsXHJcbiAgICAgICAgICAgIHk6IC02My4xODg2NTU4ODA3Njg4NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MjgyNzgyJyxcclxuICAgICAgICAgICAgbmFtZTogJ0NvbWJpbmVkIGJpbmFyeSBveGlkZSBzZW1pY29uZHVjdG9yIGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzI3MyxcclxuICAgICAgICAgICAgeDogLTEyNS44MzA5MDQxNDc3OTg2LFxyXG4gICAgICAgICAgICB5OiAtMzEuMjc3ODc3ODkzNTgwNDg4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzcyOTc5NzcnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU2VtaWNvbmR1Y3RvciBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMzMTgsXHJcbiAgICAgICAgICAgIHg6IC0xMjguMjgyODg2Mjk2OTY3MjYsXHJcbiAgICAgICAgICAgIHk6IC01NS4yNjE0NzU1NzgwMzMyOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MzIzMzU2JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdMbkN1TyhTLFNlLFRlKW1vbm9jcnlzdGFsbGluZSB0aGluIGZpbG0sIGl0cyBtYW51ZmFjdHVyaW5nIG1ldGhvZCwgYW5kIG9wdGljYWwgZGV2aWNlIG9yIGVsZWN0cm9uaWMgZGV2aWNlIHVzaW5nIHRoZSBtb25vY3J5c3RhbGxpbmUgdGhpbiBmaWxtJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjUxLFxyXG4gICAgICAgICAgICB4OiAtMTguNTk3NTUzMDUzOTU1NzQsXHJcbiAgICAgICAgICAgIHk6IDg4Ljk1NTMxNjEwODM4OTY4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzczNDA0MTEnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1N5c3RlbSBhbmQgbWV0aG9kIGZvciBnZW5lcmF0aW5nLCBjYXB0dXJpbmcsIGFuZCBtYW5hZ2luZyBjdXN0b21lciBsZWFkIGluZm9ybWF0aW9uIG92ZXIgYSBjb21wdXRlciBuZXR3b3JrJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjgyLFxyXG4gICAgICAgICAgICB4OiAxNzEuMTQwODMxNTU5MTY5OCxcclxuICAgICAgICAgICAgeTogLTIwMi4yNDg4MzcwODA0NDgwOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MzgwNjk1JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdTdXJnaWNhbCBzdGFwbGluZyBpbnN0cnVtZW50IGhhdmluZyBhIHNpbmdsZSBsb2Nrb3V0IG1lY2hhbmlzbSBmb3IgcHJldmVudGlvbiBvZiBmaXJpbmcnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzODYsXHJcbiAgICAgICAgICAgIHg6IDE4Ni4yNTgzMzUzMDExMDE5NCxcclxuICAgICAgICAgICAgeTogLTIxLjY2MzIxODczMjQ1MjA5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzczODA2OTYnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ0FydGljdWxhdGluZyBzdXJnaWNhbCBzdGFwbGluZyBpbnN0cnVtZW50IGluY29ycG9yYXRpbmcgYSB0d28tcGllY2UgRS1iZWFtIGZpcmluZyBtZWNoYW5pc20nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzODgsXHJcbiAgICAgICAgICAgIHg6IDIwNy45MDI5NTkzOTAzMTc5LFxyXG4gICAgICAgICAgICB5OiAtOC41MzE1MzM3Mzc2MjE4ODVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzM4NTIyNCcsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnVGhpbiBmaWxtIHRyYW5zaXN0b3IgaGF2aW5nIGFuIGV0Y2hpbmcgcHJvdGVjdGlvbiBmaWxtIGFuZCBtYW51ZmFjdHVyaW5nIG1ldGhvZCB0aGVyZW9mJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjI0LFxyXG4gICAgICAgICAgICB4OiAtMjA5LjgyMjMwNDgyNTU1MzM1LFxyXG4gICAgICAgICAgICB5OiAtMTM4LjUxMDA0MDk5MDAyOTNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzQwMjUwNicsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnTWV0aG9kcyBvZiBtYWtpbmcgdGhpbiBmaWxtIHRyYW5zaXN0b3JzIGNvbXByaXNpbmcgemluYy1veGlkZS1iYXNlZCBzZW1pY29uZHVjdG9yIG1hdGVyaWFscyBhbmQgdHJhbnNpc3RvcnMgbWFkZSB0aGVyZWJ5JyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjU4LFxyXG4gICAgICAgICAgICB4OiAyMDUuMDI0NzU2Njc0NDc3NzQsXHJcbiAgICAgICAgICAgIHk6IDE4NS42Nzg3ODA2NjQ0MzAzOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3NDA0NTA4JyxcclxuICAgICAgICAgICAgbmFtZTogJ1N1cmdpY2FsIHN0YXBsaW5nIGFuZCBjdXR0aW5nIGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTUxNyxcclxuICAgICAgICAgICAgeDogMTQyLjg1MzQ4ODYxNzMyMzcsXHJcbiAgICAgICAgICAgIHk6IDEuMzMyNTg4NTI4MTc0ODU1M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3NDExMjA5JyxcclxuICAgICAgICAgICAgbmFtZTogJ0ZpZWxkLWVmZmVjdCB0cmFuc2lzdG9yIGFuZCBtZXRob2QgZm9yIG1hbnVmYWN0dXJpbmcgdGhlIHNhbWUnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyNTUsXHJcbiAgICAgICAgICAgIHg6IDk4LjQ2MjA3MjIxMTgzNTI4LFxyXG4gICAgICAgICAgICB5OiAxMjMuMDMwODQ3NzUzNzAyNzlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzQ1MzA2NScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTZW5zb3IgYW5kIGltYWdlIHBpY2t1cCBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyMzAsXHJcbiAgICAgICAgICAgIHg6IC0wLjE2NTczNzQzOTQyNjcxODU0LFxyXG4gICAgICAgICAgICB5OiAxNDEuMjg5MjI5MzUyOTkwMjJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzQ1MzA4NycsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnVGhpbi1maWxtIHRyYW5zaXN0b3IgYW5kIHRoaW4tZmlsbSBkaW9kZSBoYXZpbmcgYW1vcnBob3VzLW94aWRlIHNlbWljb25kdWN0b3IgbGF5ZXInLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyNDIsXHJcbiAgICAgICAgICAgIHg6IDY0LjkyNjE5OTA4MjcyMjIyLFxyXG4gICAgICAgICAgICB5OiAxODEuODQ1OTM2NjUwOTA0NDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzQ2Mjg2MicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUcmFuc2lzdG9yIHVzaW5nIGFuIGlzb3ZhbGVudCBzZW1pY29uZHVjdG9yIG94aWRlIGFzIHRoZSBhY3RpdmUgY2hhbm5lbCBsYXllcicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzI0NCxcclxuICAgICAgICAgICAgeDogLTY5LjYxNjc5MTQyODQ4MjUxLFxyXG4gICAgICAgICAgICB5OiAtMTcuOTUxNDMxNzY2NzExOTI0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzc0NjQ4NDYnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3VyZ2ljYWwgaW5zdHJ1bWVudCBoYXZpbmcgYSByZW1vdmFibGUgYmF0dGVyeScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI4NyxcclxuICAgICAgICAgICAgeDogMTgxLjg0MTk0OTU1OTkxNjg2LFxyXG4gICAgICAgICAgICB5OiAtNi4xMzAzNTY2NDQ1NDE3NTlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzQ2ODMwNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNZXRob2Qgb2YgZmFicmljYXRpbmcgb3hpZGUgc2VtaWNvbmR1Y3RvciBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyNDAsXHJcbiAgICAgICAgICAgIHg6IDQzLjE0NDQ3NDIyODc2NDk5LFxyXG4gICAgICAgICAgICB5OiA4NC4zMDg1NzQ0OTg4MzkwMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3NTAxMjkzJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdTZW1pY29uZHVjdG9yIGRldmljZSBpbiB3aGljaCB6aW5jIG94aWRlIGlzIHVzZWQgYXMgYSBzZW1pY29uZHVjdG9yIG1hdGVyaWFsIGFuZCBtZXRob2QgZm9yIG1hbnVmYWN0dXJpbmcgdGhlIHNlbWljb25kdWN0b3IgZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjE2LFxyXG4gICAgICAgICAgICB4OiAxMDAuNzU5ODQ0OTU2MTk3NjMsXHJcbiAgICAgICAgICAgIHk6IDI2My45MzkyODExNzc2NTM4N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3NTA2NzkxJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdTdXJnaWNhbCBzdGFwbGluZyBpbnN0cnVtZW50IHdpdGggbWVjaGFuaWNhbCBtZWNoYW5pc20gZm9yIGxpbWl0aW5nIG1heGltdW0gdGlzc3VlIGNvbXByZXNzaW9uJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjU3LFxyXG4gICAgICAgICAgICB4OiAxNjIuODk5NDM3NDkzODM4MyxcclxuICAgICAgICAgICAgeTogLTEzLjUwNzY2NDM2NDYxMTI1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzc2MjA2NTUnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ01ldGhvZCwgZGV2aWNlIGFuZCBjb21wdXRlciBwcm9ncmFtIHByb2R1Y3QgZm9yIGlkZW50aWZ5aW5nIHZpc2l0b3JzIG9mIHdlYnNpdGVzJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjQzLFxyXG4gICAgICAgICAgICB4OiAyNzMuNzQ1MzI1NzA1ODQ3MSxcclxuICAgICAgICAgICAgeTogLTEzNC4xMTk2OTcxNjgwNjc4M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3NjMyOTg1JyxcclxuICAgICAgICAgICAgbmFtZTogJ1NveWJlYW4gZXZlbnQgTU9OODk3ODggYW5kIG1ldGhvZHMgZm9yIGRldGVjdGlvbiB0aGVyZW9mJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNDc3LFxyXG4gICAgICAgICAgICB4OiAyNS4xNTY0MTI3MzExMzA5OTUsXHJcbiAgICAgICAgICAgIHk6IDIzMi42MzgzNzQ1MzYzMTY1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzc2NjM2MDcnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTXVsdGlwb2ludCB0b3VjaHNjcmVlbicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMjIxNyxcclxuICAgICAgICAgICAgeDogMTQ4LjMxNzI5MDc1NzE0NDEyLFxyXG4gICAgICAgICAgICB5OiAtMjUyLjEyMDU0MTE3Mjk1NjJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzY3NDY1MCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTZW1pY29uZHVjdG9yIGRldmljZSBhbmQgbWFudWZhY3R1cmluZyBtZXRob2QgdGhlcmVvZicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzQzOSxcclxuICAgICAgICAgICAgeDogMjY1LjIwNzc1MjczNTExODg1LFxyXG4gICAgICAgICAgICB5OiA5Ny4wODc1MzE3NTY0OTg3OVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3NzMyODE5JyxcclxuICAgICAgICAgICAgbmFtZTogJ1NlbWljb25kdWN0b3IgZGV2aWNlIGFuZCBtYW51ZmFjdHVyaW5nIG1ldGhvZCB0aGVyZW9mJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjg4LFxyXG4gICAgICAgICAgICB4OiAyNDEuMjc0MzI0NzU2OTYxNDUsXHJcbiAgICAgICAgICAgIHk6IDkyLjU3OTE3MTU5NjYxNTk1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzgwNTMxODQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU295YmVhbiBldmVudCBNT044OTc4OCBhbmQgbWV0aG9kcyBmb3IgZGV0ZWN0aW9uIHRoZXJlb2YnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNDksXHJcbiAgICAgICAgICAgIHg6IDEyLjc0MTczOTI3NDUxOTg2LFxyXG4gICAgICAgICAgICB5OiAyMjMuMzMwNTA5NDY4NTM4NTRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0MDgyNjAyLTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnQWRhbSBIZWxsZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyNzgsXHJcbiAgICAgICAgICAgIHg6IC03OC45NzkxODM2Nzg3ODM5NSxcclxuICAgICAgICAgICAgeTogMTc1LjgzNDU4NTUxOTQ1Njk3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU1MTI3Ni0xMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBZHJpYW4gR3V0JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTQsXHJcbiAgICAgICAgICAgIHg6IC0xMjYuNDkxNjM4OTY4ODIwODIsXHJcbiAgICAgICAgICAgIHk6IDc3LjA1MzkyNTQyODk0NDM3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU1MTI3Ni0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0FsYW4gSGF1YmFjaCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE1LFxyXG4gICAgICAgICAgICB4OiAtMTMzLjU0NDgwNjE4NTE3NTU2LFxyXG4gICAgICAgICAgICB5OiAxMy43MzY0NDMzNzk1NDI0M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3MzIwOTUtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBbGV4IFdhcnNoYXZza3knLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzOCxcclxuICAgICAgICAgICAgeDogLTQxLjQzMDA2MDkxMDE0NjgxLFxyXG4gICAgICAgICAgICB5OiAtMTE1LjY5NDY4MTM3MDY0ODE3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDA4MjA5Ny0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0FsZnJlZCBFLiBNYW5uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNzMsXHJcbiAgICAgICAgICAgIHg6IC0xNjYuMjUxMjc4MjM0MTc2ODgsXHJcbiAgICAgICAgICAgIHk6IDY0LjIxNDI0NTU2NjIzMzM5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzQwMjUwNi0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0FuZHJlYSBDLiBTY3VkZXJpJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMixcclxuICAgICAgICAgICAgeDogMjMyLjAyMTAxMzU2NDk0NCxcclxuICAgICAgICAgICAgeTogMjAxLjU0MzYwNTUzMjE0NTUzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjI5NTUzMC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0FuZHJldyBNLiBSaXRjaGllJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcclxuICAgICAgICAgICAgeDogLTE4MC4xMzI3MDEwOTM4MDg4MyxcclxuICAgICAgICAgICAgeTogLTE3NS44OTMzNTg3NTAzOTI4NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU5NDQ3OTEtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBbmRyZXcgVy4gU2NoZXJwYmllcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDgsXHJcbiAgICAgICAgICAgIHg6IDg5LjAzNTk2Nzg4NzAyMjcxLFxyXG4gICAgICAgICAgICB5OiA3My40MTk2NjYwMTU2MjA1OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY2NjU2NDgtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBbmRyemVqIFAuIE1henVyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcclxuICAgICAgICAgICAgeDogLTE3Ljc1OTU3NzM4MTMzMjY5LFxyXG4gICAgICAgICAgICB5OiAtOTAuMDQzMjc4ODQxNDExMzhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTc3NzI2LTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQW5pbCBLLiBBbm5hZGF0YScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE5LFxyXG4gICAgICAgICAgICB4OiAtOTAuMjcyMzc3MjY3NTg1ODEsXHJcbiAgICAgICAgICAgIHk6IC0xNDIuMTE5ODE1NTMxMjc4NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYzMzYxMzctMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBbmlsIE11a3VuZGFuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjQsXHJcbiAgICAgICAgICAgIHg6IDQ0Ljk3NTcwMDAzODgyMDU5LFxyXG4gICAgICAgICAgICB5OiAtMTczLjE5MTI2MzA1MjE2MzVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODI5NjU1LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQW51cGFtIFNpbmdoYWwnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMixcclxuICAgICAgICAgICAgeDogNjguMDMzNDE0OTcwODA4MDgsXHJcbiAgICAgICAgICAgIHk6IC0xNTkuNjE2NDA5MDE4MzAzMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUyNzYyNjItMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBcnRodXIgTC4gSm9obnNvbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDksXHJcbiAgICAgICAgICAgIHg6IDE4NS41MDk1NjY0MzUyMjI4LFxyXG4gICAgICAgICAgICB5OiAtMjI4Ljg0MTk5MTU4OTg0MDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3MDgyODMyLTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQXlhbm9yaSBFbmRvJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNSxcclxuICAgICAgICAgICAgeDogMTE2LjA5MjYxNTczMDEwOTUxLFxyXG4gICAgICAgICAgICB5OiAxNDkuMTcxNzYwODE4NzU1NzNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MzcwNTg0LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQXplciBCZXN0YXZyb3MnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4LFxyXG4gICAgICAgICAgICB4OiAtMjQwLjQxMjkyNDE1MTk0MDg3LFxyXG4gICAgICAgICAgICB5OiAxOTcuNDAyMDEwNzI5ODQ2MzhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NzIyOTk3LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnQmVocmFkIEFyaWEnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3NSxcclxuICAgICAgICAgICAgeDogLTc2Ljg4NjM5NTc5ODk5MjY4LFxyXG4gICAgICAgICAgICB5OiAxNDAuNTk3NDM0ODAyODUxNDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0OTcyMjI0LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQmVubmllIFRob21wc29uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDYsXHJcbiAgICAgICAgICAgIHg6IDEyOS44MDczNTA1MjM4OTgxMixcclxuICAgICAgICAgICAgeTogLTQuNDgxOTcyNTU5ODM5OTgzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzYyMDY1NS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0Jqw7ZybiBTcGVybGluZycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXHJcbiAgICAgICAgICAgIHg6IDI2NS42OTgwMjQ2NjAyMTM0MyxcclxuICAgICAgICAgICAgeTogLTE2My4xNzQ4NzU5MjY4MjQ3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU1MTI3Ni0xMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdCb2IgTXVydGZlbGR0JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTQsXHJcbiAgICAgICAgICAgIHg6IC0xMDQuNTc2MDI2NDE2MDUwMjMsXHJcbiAgICAgICAgICAgIHk6IDQzLjIxOTI5Mzg2MDE3NDkxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjgwOTY1My05JyxcclxuICAgICAgICAgICAgbmFtZTogJ0JyYWQgVC4gSGl0ZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQsXHJcbiAgICAgICAgICAgIHg6IC0xNzguNzQwNjk0NDI5NTk3LFxyXG4gICAgICAgICAgICB5OiAxMTQuNTY0MzAxMDcxMDAzMTFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NjY1NjQ4LTUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQnJpYW4gR3JvdmVzJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcclxuICAgICAgICAgICAgeDogLTQuMDYzNzAzNzI3NTkzNTU5LFxyXG4gICAgICAgICAgICB5OiAtOTMuMjQ2NjYwMjE2MTUxNzdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3MDAwODE4LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQnJpYW4gSi4gSGVtbWVsZ2FybicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIsXHJcbiAgICAgICAgICAgIHg6IDI1MS44NzgyNTI3MTY5MjIwOCxcclxuICAgICAgICAgICAgeTogMjguMjg5ODAzMTk1MjYwMDhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NjU4NTc3LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQnJpYW4gUS4gSHVwcGknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA5NCxcclxuICAgICAgICAgICAgeDogMTIzLjE5NjMxOTg3ODM1MjU4LFxyXG4gICAgICAgICAgICB5OiAtMjY5LjU1NDk1NTI3NzcxMTFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NDY1ODk1LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQnJ5YW4gRC4gS25vZGVsJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTQ3LFxyXG4gICAgICAgICAgICB4OiAyNDkuMjcxNTkzNTI1MDk2OTYsXHJcbiAgICAgICAgICAgIHk6IDE0OS44OTQyMjY5NjUzNDQ0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTk0ODAwNi0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0NhcmxhIE0uIE1hbm4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzMCxcclxuICAgICAgICAgICAgeDogLTE0OC40MTE1MzQ3Njk4NzgwNSxcclxuICAgICAgICAgICAgeTogMjY4LjIxMDIzNjg1MzM3MDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTU4MzUxLTgnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ2FyeSBELiBUYWxib3QnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1MSxcclxuICAgICAgICAgICAgeDogLTI0Mi4xMjAxMzczOTYwMDg1LFxyXG4gICAgICAgICAgICB5OiAxLjA4MDkxMDU4NjE3MjI0ODNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MTc2NjQ0LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ2hhZCBTcmlzYXRoYXBhdCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI4LFxyXG4gICAgICAgICAgICB4OiAtMTA2LjU5NzgwMzI1NjQ1Mjg5LFxyXG4gICAgICAgICAgICB5OiA1Ni43MjQxNTk5NjI0NzM2M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3MzIwOTUtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDaGFuZHJha2FudCBSYW1rcmlzaG5hIEJoYXZzYXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3LFxyXG4gICAgICAgICAgICB4OiAtNTYuNDQ2OTI0MjM2MDI4NTgsXHJcbiAgICAgICAgICAgIHk6IC0xMTQuMzg5MzYzNTU5NTI1MjFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODA0MzMwLTUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ2hyaXMgSGF2ZW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4LFxyXG4gICAgICAgICAgICB4OiA3Ni41ODk5NjkyNjYwNzAyNyxcclxuICAgICAgICAgICAgeTogLTIzMy41OTM3NjQyMTc3NDk2OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU4NTk5MTYtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDaHJpc3RvcGhlciBBLiBKdWxpYW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzNSxcclxuICAgICAgICAgICAgeDogMzIuNDk1MjkyMDI5MTU1MjYsXHJcbiAgICAgICAgICAgIHk6IDMwNy44NTU4NzE1NzMyOTkxN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU5NjM5NTMtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDaHJpc3RvcGhlciBTdGF1YmVyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcclxuICAgICAgICAgICAgeDogMzguODc2NDk5MTc3MzA4OTM2LFxyXG4gICAgICAgICAgICB5OiAtMjU0LjY4NTMzNzE0ODU0MDdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTkzODM0LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ2h1bm9uZyBRaXUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzMCxcclxuICAgICAgICAgICAgeDogLTI5OS41MTM1NzA3MzI3NTc2NyxcclxuICAgICAgICAgICAgeTogMjguNjkzNTg2MTMzMTc5NTA1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTcwMzM1Ny0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0NpbmR5IFhpbmcgUWl1JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzcsXHJcbiAgICAgICAgICAgIHg6IC0zMDcuNjA0OTQ2MDIwODg0OTQsXHJcbiAgICAgICAgICAgIHk6IC0zNi4wOTk3NDI5NzY5MjU1NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUzODIyMzItMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDbGlmZiBIYWd1ZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI1LFxyXG4gICAgICAgICAgICB4OiAtMTU4Ljk0ODg5MTcwNzkyMjE3LFxyXG4gICAgICAgICAgICB5OiA3NS41NzM2NjEyNTk2NzA5MVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1MzU5MDktMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEYXZpZCBCcmFkbGV5IFJ1c3QnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMCxcclxuICAgICAgICAgICAgeDogMjkzLjg5Mzc4MjY2ODgxMjE1LFxyXG4gICAgICAgICAgICB5OiAxMDguMjQwNDU1OTI2OTA0NDlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NzEzOTExLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRGF2aWQgQy4gUmFjZW5ldCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDExNyxcclxuICAgICAgICAgICAgeDogLTcwLjczMTk5OTk2NzI5MDc2LFxyXG4gICAgICAgICAgICB5OiAyODMuNjg4NDUwMjEzMjY2MVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU1MTI0MjYtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEYXZpZCBILiBMZXZ5JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOTcsXHJcbiAgICAgICAgICAgIHg6IDE3NS42MjI3MzM0NjgyOTU5MyxcclxuICAgICAgICAgICAgeTogMTk1LjAzMzQ4MDkyMDQyNzg1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTc1NTczNy0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0RhdmlkIEthcmwgTGVlIFBldGVyc29uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTAsXHJcbiAgICAgICAgICAgIHg6IC0xMTYuMTk5OTc1OTM5MjA2ODEsXHJcbiAgICAgICAgICAgIHk6IDIzNS40MjMxNzQ2Nzc2ODcwNlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYwMDQyNzYtMTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRGF2aWQgTC4gUmFiYmVycycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDksXHJcbiAgICAgICAgICAgIHg6IDkwLjA1NDU1MTM4ODM5NDY3LFxyXG4gICAgICAgICAgICB5OiAtMTk5Ljc2NzI0MzAyNjYwOTkyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDEyNzIyNy0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0RhdmlkIFQuIEdyZWVuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjUzLFxyXG4gICAgICAgICAgICB4OiAzMjAuMDUzODk1NjQ5MzQ3NCxcclxuICAgICAgICAgICAgeTogLTIuNTY3NDQwNjk4Mzc4Mzc3N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUzMjk2NTUtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEZWFuIEwuIEdhcm5lcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDksXHJcbiAgICAgICAgICAgIHg6IDgyLjk4NjgzNzg2NjU4NDQsXHJcbiAgICAgICAgICAgIHk6IC03NS4wMTQ3MjE1NTAwMjEzOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1NTEyNzYtOScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEZWJvcmFoIFJ1cHBlcnQnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMixcclxuICAgICAgICAgICAgeDogLTExOC4yNjU1MjkzNzQ1MTUwNyxcclxuICAgICAgICAgICAgeTogMjAuMTMxNDgxMTg5MTAxNjk1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU1MTI3Ni0xMCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEZW5uaXMgUC4gQmlzaG9wJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTYsXHJcbiAgICAgICAgICAgIHg6IC0xMTMuMDQxMzg0MzI2NTk5NDMsXHJcbiAgICAgICAgICAgIHk6IDY4LjUzNDc5MTgxNTYyMjlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1OTE4MTU5LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnRGVuemlsIFdpbGxvdWdoYnkgQ2hlc25leScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDgsXHJcbiAgICAgICAgICAgIHg6IC0yMjEuMzQzODE2MzE5NzczMixcclxuICAgICAgICAgICAgeTogLTE4MC4zMTI1ODg2ODQzNTcyNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY5MTI4MzktMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEZXJlayBEZWUgRGV2aWxsZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEyNyxcclxuICAgICAgICAgICAgeDogMTI0LjAwNTYyMzY5NzE0NjA5LFxyXG4gICAgICAgICAgICB5OiAzMC4zMDM1MTg1NzMyMTMzMjhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzE4MzYxLTgnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRG9tZW5pYyBKLiBMYVJvc2EnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3LFxyXG4gICAgICAgICAgICB4OiAtMTg1LjE2MzQwMjcxNTE1ODgsXHJcbiAgICAgICAgICAgIHk6IDE5MS40OTg4MDU1ODA5MDg5NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4NTA5NDktMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEb3VnIFdhcm5lcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXHJcbiAgICAgICAgICAgIHg6IDE5Ny40MTA5NTg2NjI0ODg4LFxyXG4gICAgICAgICAgICB5OiAtMTQxLjUxMTM3NDI1OTAxMjc3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjUzMDkzMi0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0RvdWdsYXMgQi4gSG9mZm1hbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQxLFxyXG4gICAgICAgICAgICB4OiAxMTIuNjU5MDIyMDI2Nzg4ODYsXHJcbiAgICAgICAgICAgIHk6IC00MS45NTE3OTQxOTM0MDgwMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY0MzQ1NTAtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEb3VnbGFzIEsuIFdhcm5lcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDExLFxyXG4gICAgICAgICAgICB4OiAtMjQwLjIxMzA1MTgwMzE0NyxcclxuICAgICAgICAgICAgeTogLTU4LjM4NTM0NTIyMTc2MDQ0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjg1MDg5NS01JyxcclxuICAgICAgICAgICAgbmFtZTogJ0R1YW5lIFdhbmRsZXNzJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcclxuICAgICAgICAgICAgeDogLTE0MS43NzEyMDM3MDk1NzUwNSxcclxuICAgICAgICAgICAgeTogLTIzNS44NDk0NTg4ODU1NTMzNlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzc2MzI5ODUtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdFbGxlbiBEaWNraW5zb24nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1LFxyXG4gICAgICAgICAgICB4OiAtNi42NTA3MTI5NTM2NTkyMzIsXHJcbiAgICAgICAgICAgIHk6IDI0My44NTkyMjQ5NDk3Nzk5NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU2MTY1MzItMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdFcGhyYWltIEhlbGxlcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEyNSxcclxuICAgICAgICAgICAgeDogLTEzNi42NjI3NjkzMTc4Njc4OCxcclxuICAgICAgICAgICAgeTogMTQ4LjUwODMzMjg3MzA2ODQ0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjcyNDM5OS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0VybnN0IEthdGNob3VyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMixcclxuICAgICAgICAgICAgeDogMjAuNDYwNzA1MTc3ODE2ODE2LFxyXG4gICAgICAgICAgICB5OiAtMTM4LjYzMTYxNzQzNDYwNDdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0NDAzNjg3LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnRXVnZW5lIEwuIFRpbXBlcm1hbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDY5LFxyXG4gICAgICAgICAgICB4OiAxNjcuODE0MDU5NzYyNDAzMjIsXHJcbiAgICAgICAgICAgIHk6IDIzLjY1Mzc5NDM0ODY3MDUxNlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY5MDUwNTctMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdGcmVkZXJpY2sgRS4gU2hlbHRvbiwgSVYnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMDQ3LFxyXG4gICAgICAgICAgICB4OiAyMDYuOTQwNTU2MDExNjE5NTgsXHJcbiAgICAgICAgICAgIHk6IC0zMy42Mzc5NDQwMTkyMjEwNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUwNDEwODYtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdGcmVkcmljIEMuIENvbG1hbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDExOSxcclxuICAgICAgICAgICAgeDogLTkzLjA3MTQxNTIyMjMzNTY1LFxyXG4gICAgICAgICAgICB5OiAxODcuNjEzODI3OTEyMTQ3NzRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NDMzOTIxLTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnRy4gVmljdG9yIFRyZXl6JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTksXHJcbiAgICAgICAgICAgIHg6IC0yNTAuMjE0MTkyMjA4NzI0OSxcclxuICAgICAgICAgICAgeTogMTE3LjcwOTM2MTg4MTI4Nzg5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU1ODM1MS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0dhcnJ5IE0uIFN0ZWlsJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjEsXHJcbiAgICAgICAgICAgIHg6IC0xOTcuNTUwMzM4NDM3MDcwODgsXHJcbiAgICAgICAgICAgIHk6IC0xNC45NjkwNTQxNTcyNTUyNjFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NzA3MzY5LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnR2VvZmZyZXkgQy4gSHVlaWwnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzNyxcclxuICAgICAgICAgICAgeDogODguNzc3MzIxMjk5NzU5NjgsXHJcbiAgICAgICAgICAgIHk6IC01OS4zNDI5NDQ2OTA5MDQzMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4MjY1ODItMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdHZW9yZ2UgRXJpY3Nzb24nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxyXG4gICAgICAgICAgICB4OiAtMTU4LjAyMDcwODU1MjQ5OTM3LFxyXG4gICAgICAgICAgICB5OiAtMTExLjQxMzU1NjY2MDc1NDEzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnUkUyODkzMi0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0dyYWhhbSBXLiBCcnlhbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE3LFxyXG4gICAgICAgICAgICB4OiAzMDIuMTUxOTcxNzQ5ODE5OTUsXHJcbiAgICAgICAgICAgIHk6IDIuOTcxMTUzMzAxMjE3MTg2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjE0NDY3OS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0dyZWdvcnkgUyBIZXJtYW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3MCxcclxuICAgICAgICAgICAgeDogLTEwNy4wODcyMTIxMjQzODI1MyxcclxuICAgICAgICAgICAgeTogLTIyLjk5OTMyNTk4MDQ3NTM0NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY2MDEwODctMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdHdWFuZ2hvbmcgWWFuZycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDgsXHJcbiAgICAgICAgICAgIHg6IDE4MS45NDAwODY4MDgwMjIxLFxyXG4gICAgICAgICAgICB5OiA3Ny42Njc3ODYyMzM4MTE5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU3NzcyNi0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0hlbnJ5IEQuIEpheScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDcsXHJcbiAgICAgICAgICAgIHg6IC0xMjIuMDIzMjA0NzY5ODI0OTksXHJcbiAgICAgICAgICAgIHk6IC0xNTcuOTU1NjY3MzI0MTgyODVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0MjgzMDI0LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSGVucnkgUi4gU2llbmtpZXdpY3onLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzNSxcclxuICAgICAgICAgICAgeDogMjc0LjYwNDE1NjAzNzEyNzI3LFxyXG4gICAgICAgICAgICB5OiAtMjcuMjczMzA5NjI1ODQ1NjdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3MzIzMzU2LTUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSGlkZW5vcmkgSGlyYW1hdHN1JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNCxcclxuICAgICAgICAgICAgeDogLTM2LjYwNTQyNDI1MTk1MDQ0NixcclxuICAgICAgICAgICAgeTogMTE1Ljg1MDA4OTMxOTk4OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQ3MDMwMTktMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdIaWRlbyBIb3Nvbm8nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA2OCxcclxuICAgICAgICAgICAgeDogLTkuODU5NDU3MDk0MjM3MzMzLFxyXG4gICAgICAgICAgICB5OiAxMTIuMTgzNzQ2OTYzNDg5MTNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0MjUzMDYxLTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSGlkZW8gT2hubycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDU1LFxyXG4gICAgICAgICAgICB4OiAxNi40MjQzOTc4MzU5MTM5OTMsXHJcbiAgICAgICAgICAgIHk6IDEuNTk4MTI5MDMyMTE0MTE2MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUyNzIwNjktNicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdIaXJvbWljaGkgT3RhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTksXHJcbiAgICAgICAgICAgIHg6IC00Mi45MzAyMzEyMzMyOTk1NjUsXHJcbiAgICAgICAgICAgIHk6IDcyLjAzMDgxNTc4Mjk2MTE4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTA0MTIwMC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0hpcm9taXRzdSBJc2hpaScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQwLFxyXG4gICAgICAgICAgICB4OiAtMjQwLjQ1MDk2MjkzMzkyOTYsXHJcbiAgICAgICAgICAgIHk6IC0xNTAuMjc2MDEyNjU5ODgzNTJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODYzMzYzLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSGlzYXRvIFlhYnV0YScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQwLFxyXG4gICAgICAgICAgICB4OiA2MC40MzcyMTQ3NjY1NDU1LFxyXG4gICAgICAgICAgICB5OiA1Ni40OTY2NDkyMTg4MTM4N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzczODUyMjQtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdIaXRvc2hpIEhva2FyaScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXHJcbiAgICAgICAgICAgIHg6IC0yNDEuODMxMDMzMzc5OTUxMSxcclxuICAgICAgICAgICAgeTogLTEzMy41NDA0OTc3OTI5NTQyOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUwNDEyMDAtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdJa3VoaXJvIFlhbWFndWNoaScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEwLFxyXG4gICAgICAgICAgICB4OiAtMjI4Ljc4MDg2NzAxNzE5MTUzLFxyXG4gICAgICAgICAgICB5OiAtMTYyLjM2NjcxNTg4NTYwMTdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0OTk3MjYyLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSWt1byBTYWtvbm8nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA5LFxyXG4gICAgICAgICAgICB4OiAtMjIuNDUxNTU2NjUyMzkzOTQzLFxyXG4gICAgICAgICAgICB5OiAtMzQuMDQ3NTAxNjg0MTgyMTFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MDgxNDIyLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSXNoaWFuZyBTaGloJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjgsXHJcbiAgICAgICAgICAgIHg6IC0yODYuMzI3MDc3NTk0MDM5NixcclxuICAgICAgICAgICAgeTogLTIzLjczMzEwNTExOTQ1ODQ5N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYyODE4OTgtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKYWNxdWVseW4gQS4gTWFydGlubycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQzLFxyXG4gICAgICAgICAgICB4OiAtNzcuNDA0MjY2NzQ2MzAyNTgsXHJcbiAgICAgICAgICAgIHk6IDIzMy4xNDM2NjIwOTM5NzQwNlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY2NjU2NDgtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKYWktSmVpbiBZdScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXHJcbiAgICAgICAgICAgIHg6IC0zMS44NDAwNTI4NjQ5MjY3MyxcclxuICAgICAgICAgICAgeTogLTkxLjYyMzc1NzQ3MzY0MTE5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDgwOTY5Ny0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0phbWVzIEQuIENhdXNleSwgSUlJJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTA4LFxyXG4gICAgICAgICAgICB4OiAtMTc4LjI2NTIxNjEyMDQyMixcclxuICAgICAgICAgICAgeTogNTEuNzU1NjgwOTMwNzQ2Njg1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDg2MzQyNS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0phbWVzIEwuIEhlbmtlJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjUsXHJcbiAgICAgICAgICAgIHg6IC0yMjkuODI2MzIzMjY2OTMxNDQsXHJcbiAgICAgICAgICAgIHk6IDgxLjE0ODM5MTgzNTA0NTFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NTMzMjM4LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmFtZXMgU2F5JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTE1LFxyXG4gICAgICAgICAgICB4OiAtMTEwLjI2NTE0NjUwNTUwMzEzLFxyXG4gICAgICAgICAgICB5OiAxODkuNzM4NDE5MDcyNjEzNzRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzExNTY1LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmFzb24gWm9zcycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE0LFxyXG4gICAgICAgICAgICB4OiAtMzYuNzk3NjM1ODMwNDEzMzgsXHJcbiAgICAgICAgICAgIHk6IC0zMDMuMzYwNjI5MzE0MDA1N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1NTEyNzYtOCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKYXkgWW9uZW1vdG8nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyNixcclxuICAgICAgICAgICAgeDogLTEwOC4zOTA2MDExNTA2NTY5NixcclxuICAgICAgICAgICAgeTogMzAuNjY3NTMwOTY0OTg0ODE3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTg2MzMyNi0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0plZmZyZXkgRS4gTmF1c2UnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3LFxyXG4gICAgICAgICAgICB4OiAtMzQuOTc0Njg3ODI2NTEzOTksXHJcbiAgICAgICAgICAgIHk6IDIyNS41Mzc4MTI3NjY3MjQyN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQ5NTEyNzgtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKZWZmcmV5IEkuIENvaGVuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDUsXHJcbiAgICAgICAgICAgIHg6IC0xMDYuNjc3MjkyNTYwMDM0MjIsXHJcbiAgICAgICAgICAgIHk6IC0yNzUuOTY2NTU3NjUxODIxMjNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MzkzNjA1LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmVmZnJleSBMb29tYW5zJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNCxcclxuICAgICAgICAgICAgeDogLTEyLjA4OTUyMzI4MDg2MjE2NCxcclxuICAgICAgICAgICAgeTogLTE0Ni44NzI5NTY4OTI1MDU2NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUyNDM2MjItMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKZWZmcmV5IE0uIEZpc2NoZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMyxcclxuICAgICAgICAgICAgeDogLTY5LjExNTEwNTc2NDAzNjYzLFxyXG4gICAgICAgICAgICB5OiAtMTIxLjU5NTk2MjM4Mjc4OTExXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTg5NzU2My00JyxcclxuICAgICAgICAgICAgbmFtZTogJ0plZmZyZXkgUy4gU3dheXplJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjM3LFxyXG4gICAgICAgICAgICB4OiAxODIuNzU3NTIxODc3MDcxMixcclxuICAgICAgICAgICAgeTogLTQyLjY1MjI2NDg3NTM5NzkyNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzc2MDg3NjEtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKZW5uaWZlciBSaW5laGFydCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDksXHJcbiAgICAgICAgICAgIHg6IDE0LjYwMzAzMzcxNzY0NDg3NyxcclxuICAgICAgICAgICAgeTogMjU4LjAxNjkzODA3OTQzMDc2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzM4MDY5Ni0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0plcnJ5IFIuIE1vcmdhbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXHJcbiAgICAgICAgICAgIHg6IDI0MC43NzkyMzUxMjUzOTE3MixcclxuICAgICAgICAgICAgeTogMC43NTYxODU2NTUyMjI2MjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NzE1NDUwLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmVzc2UgQW1icm9zZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE5LFxyXG4gICAgICAgICAgICB4OiAzNi4xODA0MjM1MTQ1MDgyMDYsXHJcbiAgICAgICAgICAgIHk6IC0yNzEuMTE4MTUxODkxNjY2NTdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzExNTY1LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmlhbi1KdW5nIFlpbmcnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNSxcclxuICAgICAgICAgICAgeDogLTUyLjQwNTk0MzYyOTE2MDI3LFxyXG4gICAgICAgICAgICB5OiAtMjk4LjYyMDk4NTI0NDY1NzdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTE2MjI3LTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSm9leSBDaGVuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNTAsXHJcbiAgICAgICAgICAgIHg6IC0xNTQuNTQ2NjcxMzYyOTA5OTMsXHJcbiAgICAgICAgICAgIHk6IDIwOC45NTA3MjI4MDczNDMzN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYyMzM2MTctMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKb2huIENva2VyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjksXHJcbiAgICAgICAgICAgIHg6IC0xMDcuODE4OTM4MTU2MzIxNDQsXHJcbiAgICAgICAgICAgIHk6IC0xNzAuOTA3NDY3NjIzMTY1NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQ1NjE0NDQtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKb2huIEguIExpdmluZ3N0b24nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzMSxcclxuICAgICAgICAgICAgeDogLTE1Mi44NTMwMDQ0NDU4Mzk1NixcclxuICAgICAgICAgICAgeTogODUuMTA5NDAwMDg5NjQ5NjdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MjM3MTc4LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnSm9obiBKLiBNYXN0cm90b3Rhcm8nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3NyxcclxuICAgICAgICAgICAgeDogLTIwNS40OTczOTU5MDk1ODUzMixcclxuICAgICAgICAgICAgeTogNTAuMzE0Nzc5NzA0ODQ4NjhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NDI0ODQ3LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSm9obiBKLiBTaGluJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNixcclxuICAgICAgICAgICAgeDogLTE4NS4zNzQ0NjM1NTcxMDM4NCxcclxuICAgICAgICAgICAgeTogLTMuMjg3MjAyNzEwNjIzNTg5NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU3MTM5MTEtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKb2huIFcuIEJlYXJkc2xleScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDExMCxcclxuICAgICAgICAgICAgeDogLTMzLjgxNDc1OTg4NjM4MjAyLFxyXG4gICAgICAgICAgICB5OiAyNjIuODgyNjcyMTExMTM3MjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NjkwMzg3LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSm9obiBaaW1tZXJtYW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNixcclxuICAgICAgICAgICAgeDogLTEwMy44NjQzNjQyODUwMSxcclxuICAgICAgICAgICAgeTogMjg3LjAzMjQxNTIwNzcwMzVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2Mjk1NTMwLTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnSm9uYXRoYW4gQnJhZHNoYXcnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3LFxyXG4gICAgICAgICAgICB4OiAtMjExLjg3MTQyNjA5MTA0NzgsXHJcbiAgICAgICAgICAgIHk6IC0yMjQuNTA5MDQ3ODc0NDUxMjNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2OTY0MzYzLTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnSm9zZXBoIENoYXJsZXMgSGV1aWwnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxyXG4gICAgICAgICAgICB4OiAxNTcuODk0OTA5NjA5NzU0MjgsXHJcbiAgICAgICAgICAgIHk6IC0xMjYuNDQ3ODE4MzE5NzUwNjRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODA0MzMwLTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSm9zZXBoIEhhcmInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNixcclxuICAgICAgICAgICAgeDogNjEuMTI2NjQ4MjI0NTg1NjYsXHJcbiAgICAgICAgICAgIHk6IC0yNjguMTkwODgxNjYxMTg5OVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzcxNTQ0NzctMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKb3NodWEgQS4gU3RyaWNrb24nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzMSxcclxuICAgICAgICAgICAgeDogMTQzLjYwNzcyNzY0NTk5OSxcclxuICAgICAgICAgICAgeTogLTI4MS42NjkzNjkyNjExNDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NjY1NjQ4LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2FyZW4gQnJvZGVyc2VuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMixcclxuICAgICAgICAgICAgeDogLTUyLjg4Nzc2MTYxNzQwNjc0NixcclxuICAgICAgICAgICAgeTogLTEzNS4yNTMyNDYwMTIxMjc0OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY5MTQxODItMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLYXRzdXRvc2hpIFRha2VkYScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEyLFxyXG4gICAgICAgICAgICB4OiAtMzAxLjg5NDMzNDg3NjkxMTg0LFxyXG4gICAgICAgICAgICB5OiAtNzAuNDMzMjQ2NTA4MDg5MDZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1OTI1MjI0LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2F6dWtpIEtvYmF5YXNoaScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIyLFxyXG4gICAgICAgICAgICB4OiAtNDEuOTAwNjc2OTE4MDk2NDE2LFxyXG4gICAgICAgICAgICB5OiA3LjMwMTM1ODU5NjYyMjkxMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzcwNjEwMTQtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLYXp1c2hpZ2UgVWVkYScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDgsXHJcbiAgICAgICAgICAgIHg6IC0zNy42NjQ5NjM2MzQ0ODMyMyxcclxuICAgICAgICAgICAgeTogNTkuNjI0NzU1NjU3MzgyODZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0MzU2NDU1LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2Vpc2hpIFNhaXRvJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNjAsXHJcbiAgICAgICAgICAgIHg6IDEwLjIxOTE0MDYzMzkxMDA4NSxcclxuICAgICAgICAgICAgeTogMTE0LjYwNjExMDA4NDYwNTY3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjE3NTc1Mi05JyxcclxuICAgICAgICAgICAgbmFtZTogJ0tlaXRoIEEuIEZyaWVkbWFuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNTYsXHJcbiAgICAgICAgICAgIHg6IC03Mi43NjQ3ODM5OTQzMjY5MixcclxuICAgICAgICAgICAgeTogMTU3Ljk2MjgwMjQ2MDE0NzM0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnRDI2Mzk4Ny0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0tlaXRoIEwuIE1pbGxpbWFuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTQ4LFxyXG4gICAgICAgICAgICB4OiAyODUuMjcwNTUxNDYzMDk4MDYsXHJcbiAgICAgICAgICAgIHk6IC00LjE2MTYwNzY5OTk1Mjg0NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJ0QzMDQyMzQtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLZWl0aCBSYXRjbGlmZicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDc2LFxyXG4gICAgICAgICAgICB4OiAyOTguMjU0Mzg2NTU2NDQ1ODcsXHJcbiAgICAgICAgICAgIHk6IC02Mi4wMzc3MzM5OTA3MzA2MTVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODM4Mzk3LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2VuZ28gQWtpbW90bycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMwMSxcclxuICAgICAgICAgICAgeDogMjMzLjMwNTkxMDg5Mjg0MTI0LFxyXG4gICAgICAgICAgICB5OiAxMTguMTI4NjU4MTQ3NDQyODNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0MDcyMjM2LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2VuamkgTm9tdXJhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNzIsXHJcbiAgICAgICAgICAgIHg6IC0xOC40OTE1NzM2MjA3NDg0NTQsXHJcbiAgICAgICAgICAgIHk6IDE2NC4zMzE5NzQzODgyMDg1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDg5MDYxMS0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0tlbm5ldGggSC4gTW9sbGVuYXVlcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEzOSxcclxuICAgICAgICAgICAgeDogMTcxLjEyMTM5MDk5MTI1Mjg0LFxyXG4gICAgICAgICAgICB5OiAxNDkuODI3ODkzMjE4MzIwN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU0MDk0OTgtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLZW5uZXRoIFMuIFdhbGVzJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzQsXHJcbiAgICAgICAgICAgIHg6IDE1MS42MTUwNjUwMDQ4NjM2NSxcclxuICAgICAgICAgICAgeTogLTY4LjE3MTUzMDEwOTY5NzVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTU4MzUxLTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2Vyc3RpbiBSZWJyaW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4LFxyXG4gICAgICAgICAgICB4OiAtMjEzLjk5ODMyNjQ4MjE5ODkzLFxyXG4gICAgICAgICAgICB5OiAtMTguMjEwMjAzNTA5NzA2OTVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3MDgzMDc1LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2V2aW4gUi4gRG9sbCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMzLFxyXG4gICAgICAgICAgICB4OiAxOTUuMTcxNjE4NjEyOTY0MTIsXHJcbiAgICAgICAgICAgIHk6IDIxLjgyNzU3MTkwNzE4Mjg2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjgyNjc0NS0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0tldmluIFIuIE5peCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUsXHJcbiAgICAgICAgICAgIHg6IC0xMTMuNTIzMTgzNDk2Nzk3ODYsXHJcbiAgICAgICAgICAgIHk6IC0xODYuNjU4NTA0NjQwOTc3NjdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0NjgyNTk2LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2V2aW4gVy4gU21pdGgnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyNDUsXHJcbiAgICAgICAgICAgIHg6IDE0Mi4wMTUxNzA1MjYxOTIyNCxcclxuICAgICAgICAgICAgeTogMzUuMzE3MTMwMzIwNDAwMThcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MzM2MTM3LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2luZy1Id2EgTGVlJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNyxcclxuICAgICAgICAgICAgeDogMjkuMTM2NDE2ODIxMzg5NTQ1LFxyXG4gICAgICAgICAgICB5OiAtMTUyLjgzODkyMjc5MTAwMTM1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU1MzU2My0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0tsYXVzIFcuIFN0cm9iZWwnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxyXG4gICAgICAgICAgICB4OiAxOC41MDIyNjk4MDI4OTYxODcsXHJcbiAgICAgICAgICAgIHk6IC0yNzcuODQyMjkxMTkxNjQ0ODVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NzE1Njc1LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnS29yZXkgS2xpbmUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA2NyxcclxuICAgICAgICAgICAgeDogMTA3LjM5MjgwODY0MDQ2NTYsXHJcbiAgICAgICAgICAgIHk6IDAuMTI0OTcxNjgzOTEyMDg4ODFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzE4MzYxLTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnS3Jpc2huYSBNYW5naWFwdWRpJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMixcclxuICAgICAgICAgICAgeDogLTIyMS40MjM1MTE4MTA5NTM3NixcclxuICAgICAgICAgICAgeTogMjEwLjY4NDYyMTA3NjIxNjk2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU3NzcyNi0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0t1YW5nLVlhbmcgSHVhbmcnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3LFxyXG4gICAgICAgICAgICB4OiAtMTEwLjkwMjkzNDc0NDE5NjM0LFxyXG4gICAgICAgICAgICB5OiAtMTQ0LjExMDc0NzcyNzQwMTlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3MTU5NzUwLTUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTGVlIEFubiBPbHNvbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEwMixcclxuICAgICAgICAgICAgeDogLTEyLjI5MTA0NTcyOTgxNjU5MyxcclxuICAgICAgICAgICAgeTogMjg0LjMyMjgyNDAyNzY3MVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3MTgzNjEtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdMZXJveSBSLiBLYXJnZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDYsXHJcbiAgICAgICAgICAgIHg6IC0yNDYuNTY4OTg0OTU5MDE4MjgsXHJcbiAgICAgICAgICAgIHk6IDE3Ni44NjQzMDgyNDg5MTI4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU1MTI3Ni00JyxcclxuICAgICAgICAgICAgbmFtZTogJ0x1aXMgSi4gTWFsYXZlJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjUsXHJcbiAgICAgICAgICAgIHg6IC0xNTAuNDY5NTUxNTg0MTIxMDYsXHJcbiAgICAgICAgICAgIHk6IDE1LjQ2NjY4MTM1NTU5NDA0M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYwNDgxMTAtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdMeW4gTS4gSXJ2aW5nJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNTAsXHJcbiAgICAgICAgICAgIHg6IDE4NS44OTM2ODI1NTIwMzYzOCxcclxuICAgICAgICAgICAgeTogMjExLjczNDk3MzE2ODM3NDQ0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjcxODM2MS0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0x5bm5lIE0uIE11cmFjaCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDYsXHJcbiAgICAgICAgICAgIHg6IC0xODQuNTk3MzE2MTI1OTkzNzksXHJcbiAgICAgICAgICAgIHk6IDE2OC45NTQ1OTAzMDEyODQwNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU5NDg3ODktMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNYWdudXMgTGFyc3NvbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMyLFxyXG4gICAgICAgICAgICB4OiAyODIuMzQ5ODc0MzQ5MjMwNCxcclxuICAgICAgICAgICAgeTogLTEwNS44NTM5MDU3NjgzOTQwOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4Mjk2NTUtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNYWdudXMgVmVqbHN0cnVwJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNSxcclxuICAgICAgICAgICAgeDogODQuNTc2ODM0MjA1MDU4NDksXHJcbiAgICAgICAgICAgIHk6IC0yMTEuNjA1NDY1OTExMjkxMjJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzExNTY1LTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWFyYyBDYWx0YWJpYW5vJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTgsXHJcbiAgICAgICAgICAgIHg6IC0yMS41NzI1MDM1NDcwMzE3NjUsXHJcbiAgICAgICAgICAgIHk6IC0zMDMuMjUwMDEyMDQ4MDA4ODRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3MDc4NTAzLTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWFyaWFubmUgTWFsdmVuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjQsXHJcbiAgICAgICAgICAgIHg6IDM5LjM2NDc4OTEyMTgzOTgyLFxyXG4gICAgICAgICAgICB5OiAyMDQuNTA3NjEwODgyMzc5NjJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MjIzMjA1LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWFyayBFLiBDcm92ZWxsYScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDExLFxyXG4gICAgICAgICAgICB4OiAtMjM5LjEzMDY3MzM5MjA3NixcclxuICAgICAgICAgICAgeTogMTU5LjUzODYyNjgxMjA3MDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NjIxODM0LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWFyayBSYW5kbGUgQm95bnMnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA5LFxyXG4gICAgICAgICAgICB4OiA5Mi45NTE1OTkxMzQwODQ0LFxyXG4gICAgICAgICAgICB5OiAxMzkuNzI0OTE2OTk0MTgxMjlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NTM0MTMyLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWFyayBTLiBWcmVla2UnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA5OSxcclxuICAgICAgICAgICAgeDogLTEyNi4xNzQxNDI0MDgyNTIwMixcclxuICAgICAgICAgICAgeTogMTgyLjE0ODg2ODAxNzQ4NTM0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDg5MjI0NC00JyxcclxuICAgICAgICAgICAgbmFtZTogJ01hcmsgUy4gWmVpbmVyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTEyLFxyXG4gICAgICAgICAgICB4OiA4Ny44NjU1MTIzMzk0NDc5MixcclxuICAgICAgICAgICAgeTogLTkzLjYxNDM1OTQ5OTA2ODY2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjgyOTY1NS02JyxcclxuICAgICAgICAgICAgbmFtZTogJ01hcnRpbiBTdXNzZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4LFxyXG4gICAgICAgICAgICB4OiA4Ni41MTY2NDQ5NzE2MzExLFxyXG4gICAgICAgICAgICB5OiAtMTc2LjM2ODA1Njg2MjQ4NDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0NDg2NzIwLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWFzYWhpcm8gSGlyYW5vJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNjQsXHJcbiAgICAgICAgICAgIHg6IC0yNi40NzM5NDEwMjEzMjg4MzQsXHJcbiAgICAgICAgICAgIHk6IDUwLjU4Mzg3NzUwMTI4NzQ3NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU2MjI2NTMtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNYXNhaGlybyBPcml0YScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEzLFxyXG4gICAgICAgICAgICB4OiAtNDMuMzExOTQzNTEyNDY5NTA0LFxyXG4gICAgICAgICAgICB5OiA4OC4wNTg1MjQwMTA5MjM2MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYwODA5OTgtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNYXNhbyBJc29tdXJhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcclxuICAgICAgICAgICAgeDogLTI3Ny4xNjczOTY4NzMzNDE5LFxyXG4gICAgICAgICAgICB5OiAtNjkuMTYzMTM1OTAzNTg3NjlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0OTAyNjcxLTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWFzYXNoaSBLYXdhc2FraScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQ0LFxyXG4gICAgICAgICAgICB4OiAyNS40OTk4MzQ5ODE3NTE1MDUsXHJcbiAgICAgICAgICAgIHk6IDEyLjQ1ODgzNTk2MjkwNzc2OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUxMTc4MzgtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNYXR0aGV3IEEuIFBhbG1lcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIxMyxcclxuICAgICAgICAgICAgeDogMTExLjg0NDQwNzE5NTEyODcxLFxyXG4gICAgICAgICAgICB5OiAxNy41NTM1MjI0Mzg1NDczMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1Nzc3MjYtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNYXR0aGV3IFMuIE1hbGRlbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE1LFxyXG4gICAgICAgICAgICB4OiAtODkuNzcyODE3MTU3NjIxMTIsXHJcbiAgICAgICAgICAgIHk6IC0yMTIuNTIwMDA5OTQ4MDc0NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY2NjU2NTUtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNaWNoYWVsIEEuIE15ZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxyXG4gICAgICAgICAgICB4OiAtMjIyLjE1NDg5ODQyNjYyNzgsXHJcbiAgICAgICAgICAgIHk6IC05MS44ODM3MDc3OTk4NzEyNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU2MzI0MzItNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNaWNoYWVsIEUuIFNldHNlcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQ2LFxyXG4gICAgICAgICAgICB4OiAyMzYuMTQ1MzQ4NjkwNTkxNSxcclxuICAgICAgICAgICAgeTogLTI5LjUzMzA0MzQzNzQxNjY3NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUzMDY2MjMtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNaWNoYWVsIEYuIFRvbWFzY28nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4OSxcclxuICAgICAgICAgICAgeDogLTEzNi4zNTAzNDAyMjMwMTkyNixcclxuICAgICAgICAgICAgeTogMTY2Ljg3Mzc2Nzg2MDk1MzYyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjYwNjc0NC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ01pY2hhZWwgRy4gTWlrdXJhaycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE0LFxyXG4gICAgICAgICAgICB4OiAxNDMuMDYxMDcxMjM4Mjg3ODcsXHJcbiAgICAgICAgICAgIHk6IDIwMy42ODY1MDAzMDg2NDY4NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYyNjQwODctMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNaWNoYWVsIFAuIFdoaXRtYW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMzQsXHJcbiAgICAgICAgICAgIHg6IDg4LjMxMzMwNzkwOTg4ODIyLFxyXG4gICAgICAgICAgICB5OiAyMzcuMTA0NzY1MjgwNTg0MjJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NjY1NjQ4LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWljaGFlbCBUc3VuZ2hzaSBZdScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIsXHJcbiAgICAgICAgICAgIHg6IDcuMzA0NTU5NzQxMTg4MTAwNSxcclxuICAgICAgICAgICAgeTogLTEwMS42Mjg5MzM0Njk4NjMyM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYwODE1MTgtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNaWNoZWwgSy4gQm93bWFuLUFtdWFoJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNTYsXHJcbiAgICAgICAgICAgIHg6IDE1My41NTgwNTcwMzI5MjY3NCxcclxuICAgICAgICAgICAgeTogMjc4Ljc1ODQxNjM1OTA0MDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0MjI0NzI1LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWljaGlvIEthZG90YScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE3MyxcclxuICAgICAgICAgICAgeDogNzAuMjUyNDkxMTAwNjcwMTEsXHJcbiAgICAgICAgICAgIHk6IDI2MC4xNzYzMDY4NDUwMDc4NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4NTA5NDktMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNaWtlIE15ZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxyXG4gICAgICAgICAgICB4OiAyMDAuOTg0MTAwMjcyOTA2NzcsXHJcbiAgICAgICAgICAgIHk6IC0xNjUuMTgwMDk5NDE1OTE4N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUyNjEwMzctMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNaW4gWmh1JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTE5LFxyXG4gICAgICAgICAgICB4OiAxODcuMjE3ODc5OTA1MTk0NDUsXHJcbiAgICAgICAgICAgIHk6IDExOS4xODA1MjMyMjI0MTEyNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3MzIxMDAtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNaW5ndGUgSi4gQ2hlbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXHJcbiAgICAgICAgICAgIHg6IC03NC44OTM5NjgyMTEzNTA1NCxcclxuICAgICAgICAgICAgeTogLTE0NC40ODE1MTAxMTg0MDk4NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUxNzY1MDItMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNaXRjaGVsbCBKLiBQYWxtZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0MCxcclxuICAgICAgICAgICAgeDogMzE1Ljc5MDkyNjIxMzM3NTM3LFxyXG4gICAgICAgICAgICB5OiAtNTguNzk2NjY5Mzk0MTk3NjNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3Mzg1MjI0LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTW90b2hpa28gWW9zaGlkYScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUsXHJcbiAgICAgICAgICAgIHg6IC0yMzEuMTg3NjgzMjQ4NDc0NDMsXHJcbiAgICAgICAgICAgIHk6IC0xMTYuNDUxMDc3NTY3OTEyNzJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1OTE4MTU5LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTXVuZGkgRm9tdWtvbmcnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMixcclxuICAgICAgICAgICAgeDogLTIyMS42MjUyNjgxNTM1MzE4NixcclxuICAgICAgICAgICAgeTogLTIwMS43NTMxNzM4ODI2NTQ3NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzc2MzI5ODUtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdOYW5jeSBUYXlsb3InLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1LFxyXG4gICAgICAgICAgICB4OiA1MC4wMTU4ODY0OTI5NTY4NDUsXHJcbiAgICAgICAgICAgIHk6IDIyNy4yNzU5NTQwNzgwNDk3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzQ2ODMwNC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ05vYnV5dWtpIEthamknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNixcclxuICAgICAgICAgICAgeDogNDEuODIyMzc2MDgyMTYxNjk2LFxyXG4gICAgICAgICAgICB5OiA1Mi41MTQyNDY3NTI4NTQyNTVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3MjA1NzE2LTUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTm9yaWhpdG8gU29uZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE5LFxyXG4gICAgICAgICAgICB4OiAyNjkuMTE1MDY1NTY3MzE0LFxyXG4gICAgICAgICAgICB5OiA3MC4wMTIyNDgzNjI0OTM1OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUzNTg1MTQtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdQYXVsIE0uIE1lYWRvd3MnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3MCxcclxuICAgICAgICAgICAgeDogLTE3MS4yNjk3NTUzMTYzODQ3LFxyXG4gICAgICAgICAgICB5OiAyNTYuNTQ3OTQzOTA4ODcxNzNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTU4MzUxLTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUGF1bCBWLiBHb29kZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE1NCxcclxuICAgICAgICAgICAgeDogLTIzMC4xNjExNDE5NjM5MDkzNixcclxuICAgICAgICAgICAgeTogLTEzLjQxMDMxNDg0NTAwMTkxM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3MTE1NjUtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdQYXZpdHJhIFN1YnJhbWFuaWFtJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjAsXHJcbiAgICAgICAgICAgIHg6IC02LjM3Mjc0ODM0Nzk0NzMzOCxcclxuICAgICAgICAgICAgeTogLTI5Ny45NjcwMjY0OTA5MDY4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnRDQyMzc2MS0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ1BldGVyIEhvbmcnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyNSxcclxuICAgICAgICAgICAgeDogLTIwNy4wMjkxMzQ0NDQ1ODc1NixcclxuICAgICAgICAgICAgeTogMTEzLjIwNDQ0NzcyMDc3NDZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MTUyOTg3LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnUGV0ZXIgTWFyZGlsb3ZpY2gnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMTAsXHJcbiAgICAgICAgICAgIHg6IC0xMTMuNzA1NDE0NjI3NjM0MTQsXHJcbiAgICAgICAgICAgIHk6IC03MS42Mzg2Njg3ODQ0ODkyOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU4NzMwOTYtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdQZXRlciBTLiBMaW0nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxOSxcclxuICAgICAgICAgICAgeDogLTQxLjQ5NzE1NzU5OTQ3NzksXHJcbiAgICAgICAgICAgIHk6IC0yMjkuODYzNDczODQ4NjMwOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3MzIxMTEtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdQZXRlciBTaWFtIFN5IExpbSBJSUknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxyXG4gICAgICAgICAgICB4OiAtMTE5LjY4Nzc2MDg3MTgxMjkxLFxyXG4gICAgICAgICAgICB5OiAtMjY0Ljc0NDExNTMxNDkyNDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODUwODk1LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUGV0ZXIgU2lhbSBTeSBMaW0sIElJSScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXHJcbiAgICAgICAgICAgIHg6IC0xMzcuNTEzMjc4NjE4Njg5OTIsXHJcbiAgICAgICAgICAgIHk6IC0yNTMuMDUwMTUyNjM0MTYwMTNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3MTU5NzUwLTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUGhpbGlwIFJveScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQ1LFxyXG4gICAgICAgICAgICB4OiAtNTUuOTE1MzMxODM3MzM0NTg0LFxyXG4gICAgICAgICAgICB5OiAyNjUuNDUyNzM5OTg1OTA1OVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYxMDMwMzMtNycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdQaGlsbGlwIEpvaG4gUGxhbnRlJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNzYsXHJcbiAgICAgICAgICAgIHg6IC04OS41NjE3MjYzNDI3MzkzOCxcclxuICAgICAgICAgICAgeTogMTI4LjQ5MzU5OTU0MDIwOTM3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTk3ODgyOS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1BpLVl1IENodW5nJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTUsXHJcbiAgICAgICAgICAgIHg6IDc5LjAzMzMwMzA5NzY4MzMzLFxyXG4gICAgICAgICAgICB5OiAtMTY2Ljg5NjIwMzAxNDAyNjk1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjA5MjA4My0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ1ByYXNoYW50IENoYXR0ZXJqZWUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMixcclxuICAgICAgICAgICAgeDogLTEyNy45ODE2NjI0ODk3ODA0NSxcclxuICAgICAgICAgICAgeTogLTIyNi4wOTU5MDMyMjk4MzA2N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzczNDA0MTEtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSYWNoYWVsIEwuIENvb2snLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxyXG4gICAgICAgICAgICB4OiAxNDUuNTgxNjQzNDk1MzY4NSxcclxuICAgICAgICAgICAgeTogLTE4NS45MTE1MjI3ODQ4MjUxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDg3MjYwMy0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1JhbHBoIFN0ZWFybnMnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4MixcclxuICAgICAgICAgICAgeDogLTE3LjYzODI2MTEzOTc0MDA3NyxcclxuICAgICAgICAgICAgeTogMzExLjg3NDQwMDk2MDE2MjM1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjgzNjU0MC02JyxcclxuICAgICAgICAgICAgbmFtZTogJ1JhbmR5IEhvZmZtYW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA2NixcclxuICAgICAgICAgICAgeDogLTk2LjY3OTE1MDYyMjcxNTIzLFxyXG4gICAgICAgICAgICB5OiAtMTguODYzMjY3NjQyMzM4MzU3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDc5ODU5NC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1JpY2hhcmQgQS4gSGlsbHN0ZWFkJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNTYsXHJcbiAgICAgICAgICAgIHg6IDIyMC45NDA0MzA0MzI1ODg3LFxyXG4gICAgICAgICAgICB5OiAxNTUuOTIxMjQ5MzIxNzE3MVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUwOTcxMjItMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSaWNoYXJkIEUuIFB1cnZpcycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIyLFxyXG4gICAgICAgICAgICB4OiAtMjMxLjYyMjExNzM0ODUzMTIsXHJcbiAgICAgICAgICAgIHk6IDU4LjUzMjc4ODU5MzQwNjQ2NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYyNjg4MDMtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSaWNoYXJkIEdvcm1hbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEwLFxyXG4gICAgICAgICAgICB4OiA3Ni43MTY2NzQzOTIyODIwMixcclxuICAgICAgICAgICAgeTogLTI0Ny40MDc1Njg0NzU0MzM2NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUyNzE1NDMtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSaWNoYXJkIEwuIEdyYW50JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjIsXHJcbiAgICAgICAgICAgIHg6IDEwOC4zNzc5MDI2MTYzODE1NixcclxuICAgICAgICAgICAgeTogLTEwOS41MzQyOTc3NDAxMTIwNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYwOTIwODMtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSb2JlcnQgQS4gQnJvZGVyc2VuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjEsXHJcbiAgICAgICAgICAgIHg6IC0xMTYuNzg2NzczMjkzODAzMzIsXHJcbiAgICAgICAgICAgIHk6IC0yMTEuNzQzMTIxNzI3NTQ4OThcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1ODczMDk2LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnUm9iZXJ0IEJyb2RlcnNvbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXHJcbiAgICAgICAgICAgIHg6IDMyLjQ3MDU2NDM2MjcxMDMzNCxcclxuICAgICAgICAgICAgeTogLTIxMi4zNTY1MDM3NjE2OTA0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTk2Mzk1My0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1JvYmVydCBDcmFtJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcclxuICAgICAgICAgICAgeDogMzkuNzMxNjU2MjI4MDM2MDQ0LFxyXG4gICAgICAgICAgICB5OiAtMTU5LjcwMTE3NDE5NjYyODUzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDM2MjM4Ny0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1JveSBDbGFyaycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIzLFxyXG4gICAgICAgICAgICB4OiAtMTQzLjM4MDY1NDY3ODA1NTgzLFxyXG4gICAgICAgICAgICB5OiAtODMuMTg2NDY5MzIzMzI4OTRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NDE3NzcwLTgnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUnlvIEhheWFzaGknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3MSxcclxuICAgICAgICAgICAgeDogMTA5LjU2OTAwMjcwMTgxMzIyLFxyXG4gICAgICAgICAgICB5OiA5NC4yNjkwNzc2MTkzMzM5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjA4MTg3NS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ1NhbmpveSBDaGF0dGVyamVlJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMixcclxuICAgICAgICAgICAgeDogLTE2OC41NTM1MTcxOTM3MzI3NCxcclxuICAgICAgICAgICAgeTogLTU1LjAwMzkxMzI3NzEwMDcyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTQxNjI1NS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1Njb3R0IEEuIEJlcmdlbWFubicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEwNixcclxuICAgICAgICAgICAgeDogMjM2Ljk4NDM2NTg0Mzc4MzEsXHJcbiAgICAgICAgICAgIHk6IC0xNTQuNTM4NTMyODkzNjMxNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3MjQzOTktMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTaGFua2FyIFMuIE5hdGhhbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXHJcbiAgICAgICAgICAgIHg6IDguMDE3NjUxMzI2NzEzODAzLFxyXG4gICAgICAgICAgICB5OiAtMTMyLjY3NDM5MjA1NjMyNjY0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjgwNDMzMC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1NoYW5ub24gSm9uZXMnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1LFxyXG4gICAgICAgICAgICB4OiA3MS4xMzIwNjk4MTg0NDYzMSxcclxuICAgICAgICAgICAgeTogLTI1OC40OTkzNDIzOTk0MTM3NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4ODc3MzYtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTaGFudGhpIEdhbmVzYW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0LFxyXG4gICAgICAgICAgICB4OiAtMzYuOTk0ODgyMTA3NTY0MDc0LFxyXG4gICAgICAgICAgICB5OiAxNzYuNDQzNTIxMDM5NTMxNlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYxODM1ODktMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTaGluIEtpbScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQ3LFxyXG4gICAgICAgICAgICB4OiAtMjg3LjY3MjY2NDY2Njc5OCxcclxuICAgICAgICAgICAgeTogNDUuODEyNjExNjQxMzkwNjc0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjY1NDAzMi00JyxcclxuICAgICAgICAgICAgbmFtZTogJ1Nvbmd4aWFuZyBXZWknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3LFxyXG4gICAgICAgICAgICB4OiAxMzIuMzE5OTE3MTA0NDA4MixcclxuICAgICAgICAgICAgeTogODYuMzMzNjkyMDE4MTE4NzVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzgzNTI0LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3RlcGhlbiBDLiBBbmRlcnNvbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXHJcbiAgICAgICAgICAgIHg6IDYyLjYyMDA3MjAxMzk1MDUsXHJcbiAgICAgICAgICAgIHk6IDMwMi40OTYxODg1NzA4MzAyN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU3NzQzNTctMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTdGV2ZW4gTS4gSG9mZmJlcmcnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMDYsXHJcbiAgICAgICAgICAgIHg6IC0yOTguMTQ5ODE1Nzg5Mzk5NDQsXHJcbiAgICAgICAgICAgIHk6IDg4LjU2ODAzNTEwNDUwMzlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NTk0MTY5LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3RldmVuIFAuIEhvdGVsbGluZycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMwNixcclxuICAgICAgICAgICAgeDogMTc4LjMxMzU2MjI0NDIwNzU2LFxyXG4gICAgICAgICAgICB5OiAtMjU1LjQzMDQyNTA3NDgwNTc4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjUyNjMzNS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ1N1c2FuIE0uIFRyZXl6JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTUsXHJcbiAgICAgICAgICAgIHg6IC0yNzkuMjMzODQ3MTMwNDE4MyxcclxuICAgICAgICAgICAgeTogMTM5Ljk5MjU3MzM2NzI3OTQ1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjYzOTI0Ni0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1RhdHN1eWEgSG9uZGEnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMDksXHJcbiAgICAgICAgICAgIHg6IDI1MC4wNjAyMDc3MjAxNjg0LFxyXG4gICAgICAgICAgICB5OiA2Ni4zMzQwMTMyMjI2ODYzN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUzNDU2MzktNicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUYXRzdXlhIEl3YXNha2knLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMTYsXHJcbiAgICAgICAgICAgIHg6IDg2LjMzMzYxMzQ0NzE3NzMsXHJcbiAgICAgICAgICAgIHk6IDE1Ny44MjU5MzQ2MjA2MDc0M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYzMjQ1NjgtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUaGFuaCBEaWVjJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcclxuICAgICAgICAgICAgeDogLTc4LjAzMTQ3NDY5MTI1MTg0LFxyXG4gICAgICAgICAgICB5OiAtMjcyLjU4ODY2MDY4NjE3MThcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NzE1NDUwLTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnVGhvbWFzIE0uIFJvdGh3ZWluJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTMsXHJcbiAgICAgICAgICAgIHg6IC0xOS4xNjUxMDEwMTMyNDE0OTMsXHJcbiAgICAgICAgICAgIHk6IC0yMDguMTgwNDY0MDg0MDYxOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJ1JFMzk4NDEtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUb2RkIFBoaWxsaXAgT21haXRzJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNyxcclxuICAgICAgICAgICAgeDogMTI5Ljk5MzA2ODU0NjI1MDA3LFxyXG4gICAgICAgICAgICB5OiAtMjIuMDQ5OTAxNjE1MDM4NDA4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjg1MDk0OS0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ1RvbSBBYnNoaXJlJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcclxuICAgICAgICAgICAgeDogMTQwLjI2NTY2OTAyNzE1MjI4LFxyXG4gICAgICAgICAgICB5OiAtMTUzLjM5MTcyOTQ4NDM5NThcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3MDYxMDE0LTYnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVG9zaGlvIEthbWl5YScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI1LFxyXG4gICAgICAgICAgICB4OiA5LjEyNjI3MTI3NjI1NDM3NyxcclxuICAgICAgICAgICAgeTogMTAxLjgyMjk4NjMwNTU2MzI2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjcxODM2MS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1ZpamF5IFIuIEJhc2FuaScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDksXHJcbiAgICAgICAgICAgIHg6IC0yMDEuMzgyMjcxNzMyMDUwMjcsXHJcbiAgICAgICAgICAgIHk6IDIwOC43NDMyNzA0OTkyNjMyOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3MTgzNjEtNScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdWaXRhbHkgUy4gUmV2c2luJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTMsXHJcbiAgICAgICAgICAgIHg6IC0xOTguNzA0NzMwNzgwMjQ5ODMsXHJcbiAgICAgICAgICAgIHk6IDE1Mi40MDUyMjExNjY1OTQzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjk3ODkyMS0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ1dpbGxpYW0gQi4gV2Vpc2VuYnVyZ2gsIElJJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTUyLFxyXG4gICAgICAgICAgICB4OiAyNDguMjQzOTM5MDYyOTM3MzMsXHJcbiAgICAgICAgICAgIHk6IC05MC4yOTM0MjUyNDM2OTMyNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUyNTc5NzEtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdXaWxsaWFtIFAuIFZhbiBBbnR3ZXJwJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNjksXHJcbiAgICAgICAgICAgIHg6IC0yNDMuNTIwOTkxOTE2Nzc5LFxyXG4gICAgICAgICAgICB5OiAyMy40MTc2Nzk5Nzc5MTEzMjdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODI5NjU1LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnWGlhb2ZlaSBIdWFuZycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUsXHJcbiAgICAgICAgICAgIHg6IDg5Ljk4ODc0MTYxMDM4NTYsXHJcbiAgICAgICAgICAgIHk6IC0xODcuNzk0MTM5OTgxNjM0ODNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MjgzNDUyLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnWWktQ2hpIFNoaWgnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzMyxcclxuICAgICAgICAgICAgeDogLTMyMy43MTM1OTY0MTg3MTE2MyxcclxuICAgICAgICAgICAgeTogMjMuOTA4OTM2NTg2NDk0MDg2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTkwMTg5Ni0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1lvcmFtIEdhbCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDc2LFxyXG4gICAgICAgICAgICB4OiAtMTA3LjIzMjI1NTEwNjIwNDg5LFxyXG4gICAgICAgICAgICB5OiAxMjQuNzM1NDE3MzkwMjYxMTJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0NTczNDcyLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnWW9zaGloaXJvIEl0bycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE4OSxcclxuICAgICAgICAgICAgeDogMTE4LjIwMjUwOTM4MzgzODkyLFxyXG4gICAgICAgICAgICB5OiAyODcuOTYxNTMyNjQzNDI4M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU4NTU5NTctMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdaaGVuZyBZdWFuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNTgsXHJcbiAgICAgICAgICAgIHg6IDEzOC4wOTIwNjk1MjE3MzE5LFxyXG4gICAgICAgICAgICB5OiAxMjQuMDY0NDAxMTc5NzY5M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19aNTlhVUJHdFo5UDVRemRGaUttWicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBYmxhaXNlIExpbWl0ZWQnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyLFxyXG4gICAgICAgICAgICB4OiAtMTkwLjQ4MjExMzAwMTA3NDIsXHJcbiAgICAgICAgICAgIHk6IC0yMzYuNTM2MTk2OTg1Mzk0ODdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfNHpPMkJjMDh4NTZYakRxNVRlQnAnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQWNjZW50dXJlIExMUCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIxMCxcclxuICAgICAgICAgICAgeDogMTcyLjg2NjAyMzAwODMzOTU3LFxyXG4gICAgICAgICAgICB5OiAyNTMuNzAzMzA4MTU0MTY1ODVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfYndxODNqYmNjS3FGNGpKclBjYVInLFxyXG4gICAgICAgICAgICBuYW1lOiAnQWR2YW5jZWQgQmlvbmljcyBBRycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDYzMyxcclxuICAgICAgICAgICAgeDogLTE3Ni45MTQ2ODQ3Mjk4MTU1NSxcclxuICAgICAgICAgICAgeTogMjMzLjYzMzg4MzUyNTk2MTlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfSURVYlMwOVpSMEpoSjhqRkVwdFQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQXBwbGUgSW5jLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIxMDIzLFxyXG4gICAgICAgICAgICB4OiAxNTEuNjgyNDY2NDE1Nzg4NjcsXHJcbiAgICAgICAgICAgIHk6IC0yMjIuMTI0ODc0ODgxNDQ4OVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19FaFlGUElKRW1ZUVlSb1l2c25weScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDYW5vbiBLYWJ1c2hpa2kgS2Fpc2hhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNzQ1OTYsXHJcbiAgICAgICAgICAgIHg6IDQ5LjQ4MjIzOTIwNTczMjk2LFxyXG4gICAgICAgICAgICB5OiAxMzQuMDkyMjg4NzMxMTU1OTJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfSW1lZzlXNlAxVEU2STJRdXRTNHknLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ2FzaW8gQ29tcHV0ZXIgQ28uLCBMdGQuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDUyMSxcclxuICAgICAgICAgICAgeDogLTE3OS44MTc1OTM0MTIwNTE1LFxyXG4gICAgICAgICAgICB5OiAtMTQyLjcxODI4ODUyOTIxMDQ0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnXzhjc01ndGduTjBtUkVacE5QMUppJyxcclxuICAgICAgICAgICAgbmFtZTogJ0NlcmVicmFsIFZhc2N1bGFyIEFwcGxpY2F0aW9ucywgSW5jLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQsXHJcbiAgICAgICAgICAgIHg6IDI2OC44MDA0NTQxNDQ0Mzg3LFxyXG4gICAgICAgICAgICB5OiAxNjQuNTIzNjk0NzgzMTU2ODNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfMGVUcjNYSUJqQUtwWGtDNjgyM3InLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ2VybWV0LCBJbmMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNyxcclxuICAgICAgICAgICAgeDogLTQ4LjQwMzcyNzY4OTU1MTU2LFxyXG4gICAgICAgICAgICB5OiAyMDUuNDQwMjU4ODM4MjYwNjZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfMTA3V0tOUGJ2RERLclpCbG13OFUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ29udGlnbyBTb2Z0d2FyZSwgSW5jLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIsXHJcbiAgICAgICAgICAgIHg6IDI5OS4zMTc0MzU5MDk1OTUzLFxyXG4gICAgICAgICAgICB5OiA0OC4wMzQ5MjQ2OTgwMDgzM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19wcEVsa0V0UXZGdEc2QTQ3NTRVSScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdFYXN0bWFuIEtvZGFrIENvbXBhbnknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMTUzOSxcclxuICAgICAgICAgICAgeDogMjExLjM3NTI1OTQxMzUyNzg2LFxyXG4gICAgICAgICAgICB5OiAyMTcuNTgyODc3ODY1MzIxMDhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfMGpQV003WXFodFhtMGxtM2ZtMVknLFxyXG4gICAgICAgICAgICBuYW1lOiAnRU1DIENvcnBvcmF0aW9uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDk3NixcclxuICAgICAgICAgICAgeDogLTE4OS43MDE1NjI3NDgzODk3MyxcclxuICAgICAgICAgICAgeTogLTExMC4wMTU1OTg5MDQzNzYyOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19XaDJjbk9JektsaHpqdXFWbU9xWScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdFbmVjdG8gQUInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxyXG4gICAgICAgICAgICB4OiAyNDMuNjc2NTQxMjI0NjI1OCxcclxuICAgICAgICAgICAgeTogLTEzMS4yMDkwMzExODY2MDk5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX1h1NmdYU3NsdERCWlRBaE1GQldEJyxcclxuICAgICAgICAgICAgbmFtZTogJ0V0aGljb24gRW5kby1TdXJnZXIsIEluYy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxyXG4gICAgICAgICAgICB4OiAyMjQuNzEyNDM1ODAzMTY0NzcsXHJcbiAgICAgICAgICAgIHk6IDM5LjYwOTg0MjUyNTQ3ODY1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyxcclxuICAgICAgICAgICAgbmFtZTogJ0V0aGljb24gRW5kby1TdXJnZXJ5LCBJbmMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjE5NCxcclxuICAgICAgICAgICAgeDogMTcxLjA3NDM3MDIyNDc2NjQsXHJcbiAgICAgICAgICAgIHk6IC01NS4wMzY4MDcwOTg5NDYwOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ192UzZyY0t5YzJxTjNyRmRYMFAySycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdIZXdsZXR0LVBhY2thcmQgRGV2ZWxvcG1lbnQgQ29tcGFueSwgTC5QLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDM1MTE4LFxyXG4gICAgICAgICAgICB4OiAtOTAuMzEwMzk2ODUyNjY5NCxcclxuICAgICAgICAgICAgeTogLTUwLjA1MjE2Mjg5Mjk0NTRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdwZXJfdFgyZTJ5VkxneU5nb2JFcHpXS1QnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSGlkZW8gT2hubycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQsXHJcbiAgICAgICAgICAgIHg6IC0zOS41MzYxMjg0MjcwNDQzNixcclxuICAgICAgICAgICAgeTogLTIwLjI3MDI3MzM1NDk3NzI1MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19NS3ZibkNjeVB1ZFhleFV2c1N3RicsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiSG9sZGVuJ3MgRm91bmRhdGlvbiBTZWVkcywgSW5jLlwiLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4MyxcclxuICAgICAgICAgICAgeDogMjQwLjA5OTkwNTk4NTE5MDgsXHJcbiAgICAgICAgICAgIHk6IC0yMDYuMDI2Mzc2MTQ4MDYxMjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfZkEwYXpxb0JHRXpvUG95ODVKeXYnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSU5UVUlUSVZFIFNVUkdJQ0FMIE9QRVJBVElPTlMsIElOQy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMjAyLFxyXG4gICAgICAgICAgICB4OiAxNS4zNzg4NjI4NjU0NDc2MjQsXHJcbiAgICAgICAgICAgIHk6IDI5MC4yMTc4MjIyODc1MjIzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX0R0dFpNdmt5dlczZlY2b0NVTVRGJyxcclxuICAgICAgICAgICAgbmFtZTogJ0phcGFuIFNjaWVuY2UgYW5kIFRlY2hub2xvZ3kgQWdlbmN5JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTE1NyxcclxuICAgICAgICAgICAgeDogMTMuMTczNDUwNzMxMDYxMDg2LFxyXG4gICAgICAgICAgICB5OiA1Ni40ODYxNDA5OTU3Nzc2N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19jNXZ5QnpLN2lpa2tVNERqUUZIVCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKYXBhbiBTY2llbmNlIGFuZCBUZWNobm9sb2d5IENvcnBvcmF0aW9uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDE4LFxyXG4gICAgICAgICAgICB4OiA2My41NjMxNzA1ODI3NSxcclxuICAgICAgICAgICAgeTogNi4yNzM2NzM1MTkwOTA3NTNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfRnZndkdGZThKWjBpWWxaODB3ZUYnLFxyXG4gICAgICAgICAgICBuYW1lOiAnS29uaW5rbGlqa2UgUGhpbGlwcyBFbGVjdHJvbmljcyBOLlYuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTcxMzgsXHJcbiAgICAgICAgICAgIHg6IC0xMjMuMjQxNzkxMjM3OTAxOTEsXHJcbiAgICAgICAgICAgIHk6IDI3MC45OTc0NjU0ODQ0MTAxNlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19YY3FDanRUOHBpOE1rM1VqUWxEdCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdMRyBFbGVjdHJvbmljcyBJbmMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzI3MjUsXHJcbiAgICAgICAgICAgIHg6IC0yNzcuMzQ2MDIyOTk4NDU1OCxcclxuICAgICAgICAgICAgeTogNy4xMzM2OTgyMjI1NDMwMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ3Blcl9ESWpVVE03bEhoRHNBejJ1OGppTycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNYXNhc2hpIEthd2FzYWtpJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcclxuICAgICAgICAgICAgeDogMTkuODk1NDM2NTk2NjYyOTA4LFxyXG4gICAgICAgICAgICB5OiAtMTAuNzE3MTc4MjUwOTAwOTE4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX0dWTWxMVmJ3Q0RTaXFQOU9nOFRuJyxcclxuICAgICAgICAgICAgbmFtZTogJ01lZHRyb25pYyBNaW5pTWVkLCBJbmMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogODAwLFxyXG4gICAgICAgICAgICB4OiAtMTgzLjc0MDIzNDE5MDU3NDE3LFxyXG4gICAgICAgICAgICB5OiAzNy42ODcyMTg3Njk4MzkwODVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfUXc4RXNyTjBNNTJuVlFVTTZ2c1YnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTW9uc2FudG8gVGVjaG5vbG9neSBMTEMnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4Njg5LFxyXG4gICAgICAgICAgICB4OiAxOS43NjM5MDE0ODgzNTI2NzMsXHJcbiAgICAgICAgICAgIHk6IDE5Ni42MjIzNjg2MjU4OTc3NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19qNVU1SUVhMUZJYmd0cjdpTnNRTScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNdXJhdGEgTWFudWZhY3R1cmluZyBDby4sIEx0ZC4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3MzQyLFxyXG4gICAgICAgICAgICB4OiA4Ny42NDg3ODE5NzEwODgxNyxcclxuICAgICAgICAgICAgeTogMjkxLjEwMjMxOTU4NzIzNTJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfMXA0RldFb0l0anlLYndUcENKb2wnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTmV0d29yayBBcHBsaWFuY2UsIEluYy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1MzAsXHJcbiAgICAgICAgICAgIHg6IC0yMjIuMjkyMDM3MjExODA1MixcclxuICAgICAgICAgICAgeTogMTQ5LjA4MzcyMTU1MjcyMDYyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX0FUT1dIZDRHR2FvaDE0enV0WHE3JyxcclxuICAgICAgICAgICAgbmFtZTogJ1Bvd2VyIE1lZGljYWwgSW50ZXJ2ZW50aW9ucywgSW5jLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMwLFxyXG4gICAgICAgICAgICB4OiAxMDguODgxMTAzOTk3NDk3MDYsXHJcbiAgICAgICAgICAgIHk6IDE4Ni44NTMzODc4MjYyNjU5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX2s4VjdjNWdubUM3U1ZtdXA1VnU3JyxcclxuICAgICAgICAgICAgbmFtZTogJ1JhaW5kYW5jZSBDb21tdW5pY2F0aW9ucywgSW5jLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXHJcbiAgICAgICAgICAgIHg6IDY1LjE1NzE3Njk0MjY0NDE3LFxyXG4gICAgICAgICAgICB5OiA4My40MTk0MzYzNzgyMDQwMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ18yNDJoSmVnd2ZRQ2VQOWhzZndwVycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSaWdodCBOb3cgVGVjaG5vbG9naWVzLCBJbmMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMixcclxuICAgICAgICAgICAgeDogMTg2LjgxOTY1MjgxNjAyMjY4LFxyXG4gICAgICAgICAgICB5OiAtMTgzLjQwMTcwMjUxNDU4NTNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfNnI5dDdaQTZZVDAzMU9kNGtNUGcnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUmlnaHRub3cgVGVjaG5vbG9naWVzLCBJbmMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTAsXHJcbiAgICAgICAgICAgIHg6IC0yMzEuNzM2MTU4ODAxMjIyMzYsXHJcbiAgICAgICAgICAgIHk6IC03NC4wOTkxNjk3MDkzNDI1MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ18ySUY5N3pWeW1TdXJhU25VQVhtcScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTYW55byBFbGVjdHJpYyBDby4sIEx0ZC4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4MzgzLFxyXG4gICAgICAgICAgICB4OiAtMjgzLjkwMjgyNTM2MDg5NDYsXHJcbiAgICAgICAgICAgIHk6IC0xMjcuODcyNTMzODE5NjkxNzFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfcGxaYkx4aXlzRVNiYUk5cE9leW0nLFxyXG4gICAgICAgICAgICBuYW1lOiAnU0VNSUNPTkRVQ1RPUiBFTkVSR1kgTEFCT1JBVE9SWSBDTy4sIExURC4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMzg4NSxcclxuICAgICAgICAgICAgeDogMjU2LjIyODM5ODc2Mzc5MDUsXHJcbiAgICAgICAgICAgIHk6IDEyNC40NjE0MTY5NjA2NjUyMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19DTVdjb0NKV1BPZmlzTFdyS3Z5ZCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTaGFycCBLYWJ1c2hpa2kgS2Fpc2hhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjI1NDAsXHJcbiAgICAgICAgICAgIHg6IDQuMDk1NTYwNDA2NDgyNjcxLFxyXG4gICAgICAgICAgICB5OiAtMzIuMTM2MTg0ODI1Nzk5MzhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU2llYmVsIFN5c3RlbXMsIEluYy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyOTgsXHJcbiAgICAgICAgICAgIHg6IC0zMy45MTk5NDc1MjMxNDg0MixcclxuICAgICAgICAgICAgeTogLTIxMi41OTk0Mjg4OTg4ODExXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX0o4Vm5BekZxRWpXZ3hxNGV2NzF6JyxcclxuICAgICAgICAgICAgbmFtZTogJ1N0YXJpb24gSW5zdHJ1bWVudHMgQ29ycG9yYXRpb24nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMCxcclxuICAgICAgICAgICAgeDogMTc4Ljk4NDE2NjU0MTE2MzQ2LFxyXG4gICAgICAgICAgICB5OiAxNjkuNTQ4MjEyMTExOTAyNzZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfbTJ0TlBKa0EyZzFBV09jN3V6UzEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVGhlcmFTZW5zZSwgSW5jLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUzLFxyXG4gICAgICAgICAgICB4OiAtMTI1LjkxNDU5OTg0NjA4NTEsXHJcbiAgICAgICAgICAgIHk6IDEzMi40MTczOTA1NDUxNjExN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19KanJNNlVtZU9ZMFE1TW1vTmlQOCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUT0tZTyBJTlNUSVRVVEUgT0YgVEVDSE5PTE9HWScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDM5NSxcclxuICAgICAgICAgICAgeDogMTguNjE0MTMwMDgxMTY2NDYsXHJcbiAgICAgICAgICAgIHk6IDE2NS4yMTI1MzY5OTU1NDIxNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19ld1ZzQ3V0cFJ6RDlwVDA3a0JvRScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUeWNvIEhlYWx0Y2FyZSBHcm91cCBMUCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUsXHJcbiAgICAgICAgICAgIHg6IC02Ny4yNTQzMDUyNjc0MjEwNyxcclxuICAgICAgICAgICAgeTogMzA4LjYxNDkyODIwNDE1NzlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfNXdOTnJKNHpGUTVLUThPV256UkMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVW5pdGVkIFN0YXRlcyBTdXJ0aWNhbCBDb3Jwb3JhdGlvbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXHJcbiAgICAgICAgICAgIHg6IDI4Mi43ODEwMDkyMjQ0MzEsXHJcbiAgICAgICAgICAgIHk6IC01Mi45ODE1OTAxMTUwODcxNDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfM3ZJMlo1a0MxU2FTbGJVQm9PQlQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnV2ViRXggQ29tbXVuaWNhdGlvbnMsIEluYy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMixcclxuICAgICAgICAgICAgeDogMTg3LjM2NzYzOTUxMTI4NzE0LFxyXG4gICAgICAgICAgICB5OiAxMDEuMjA4NDk4NDcwODAxODFcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgbGlua3M6IFtcclxuICAgICAgICB7IHNvdXJjZTogJzY1MTYyMjcnLCB0YXJnZXQ6ICc1MzU4NTE0LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTE2MjI3JywgdGFyZ2V0OiAnNTc1NTczNy0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjUxNjIyNycsIHRhcmdldDogJzU5NDgwMDYtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1MTYyMjcnLCB0YXJnZXQ6ICc2NTE2MjI3LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTE2MjI3JywgdGFyZ2V0OiAnb3JnX2J3cTgzamJjY0txRjRqSnJQY2FSJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjUzNTkwOScsIHRhcmdldDogJzY1MzU5MDktMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1MzU5MDknLCB0YXJnZXQ6ICdvcmdfMTA3V0tOUGJ2RERLclpCbG13OFUnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTQ5OTA4JywgdGFyZ2V0OiAnNjM5MzYwNS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU0OTkwOCcsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTM1NjMnLCB0YXJnZXQ6ICc1NzE1NDUwLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTUzNTYzJywgdGFyZ2V0OiAnNTcxNTQ1MC0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1MzU2MycsIHRhcmdldDogJzY1NTM1NjMtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTM1NjMnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTU4MzIwJywgdGFyZ2V0OiAnNDgwOTY5Ny0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1ODMyMCcsIHRhcmdldDogJzQ4NjM0MjUtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTgzMjAnLCB0YXJnZXQ6ICc1MDk3MTIyLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTU4MzIwJywgdGFyZ2V0OiAnb3JnX0dWTWxMVmJ3Q0RTaXFQOU9nOFRuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1ODM1MScsIHRhcmdldDogJzUwOTcxMjItMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTgzNTEnLCB0YXJnZXQ6ICc1MjM3MTc4LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTU4MzUxJywgdGFyZ2V0OiAnNTI1Nzk3MS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1ODM1MScsIHRhcmdldDogJzY0MjQ4NDctMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTgzNTEnLCB0YXJnZXQ6ICc2NTU4MzUxLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTU4MzUxJywgdGFyZ2V0OiAnNjU1ODM1MS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1ODM1MScsIHRhcmdldDogJzY1NTgzNTEtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTgzNTEnLCB0YXJnZXQ6ICc2NTU4MzUxLTgnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTU4MzUxJywgdGFyZ2V0OiAnb3JnX0dWTWxMVmJ3Q0RTaXFQOU9nOFRuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2MDQ2MScsIHRhcmdldDogJzU5MTgxNTktMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjA0NjEnLCB0YXJnZXQ6ICc1OTE4MTU5LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTYzMTc0JywgdGFyZ2V0OiAnNDI1MzA2MS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2MzE3NCcsIHRhcmdldDogJzQ5MDI2NzEtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjMxNzQnLCB0YXJnZXQ6ICc0OTk3MjYyLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTYzMTc0JywgdGFyZ2V0OiAnNTkyNTIyNC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2MzE3NCcsIHRhcmdldDogJ29yZ19DTVdjb0NKV1BPZmlzTFdyS3Z5ZCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjMxNzQnLCB0YXJnZXQ6ICdwZXJfRElqVVRNN2xIaERzQXoydThqaU8nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTYzMTc0JywgdGFyZ2V0OiAncGVyX3RYMmUyeVZMZ3lOZ29iRXB6V0tUJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2NTUwOScsIHRhcmdldDogJzQwODI2MDItMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjU1MDknLCB0YXJnZXQ6ICc1MDQxMDg2LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTY1NTA5JywgdGFyZ2V0OiAnNTMwNjYyMy0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2NTUwOScsIHRhcmdldDogJzU1MzMyMzgtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjU1MDknLCB0YXJnZXQ6ICc1NTM0MTMyLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTY1NTA5JywgdGFyZ2V0OiAnNTYxNjUzMi0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2NTUwOScsIHRhcmdldDogJzU3MjI5OTctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjU1MDknLCB0YXJnZXQ6ICc1OTAxODk2LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTY1NTA5JywgdGFyZ2V0OiAnNjEwMzAzMy03JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2NTUwOScsIHRhcmdldDogJzYxNzU3NTItOScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjU1MDknLCB0YXJnZXQ6ICdvcmdfbTJ0TlBKa0EyZzFBV09jN3V6UzEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTcxMjgyJywgdGFyZ2V0OiAnNjA4MTUxOC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU3MTI4MicsIHRhcmdldDogJ29yZ180ek8yQmMwOHg1NlhqRHE1VGVCcCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NzQ2MzUnLCB0YXJnZXQ6ICc1NzE1NDUwLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTc0NjM1JywgdGFyZ2V0OiAnNTcxNTQ1MC0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU3NDYzNScsIHRhcmdldDogJzU5NjM5NTMtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NzQ2MzUnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTc3NzI2JywgdGFyZ2V0OiAnNjU3NzcyNi0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU3NzcyNicsIHRhcmdldDogJzY1Nzc3MjYtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1Nzc3MjYnLCB0YXJnZXQ6ICc2NTc3NzI2LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTc3NzI2JywgdGFyZ2V0OiAnNjU3NzcyNi00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU3NzcyNicsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1ODc4MzUnLCB0YXJnZXQ6ICc2NDMzOTIxLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTg3ODM1JywgdGFyZ2V0OiAnNjUyNjMzNS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYwMTA4NycsIHRhcmdldDogJzUyNjEwMzctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MDEwODcnLCB0YXJnZXQ6ICc2NjAxMDg3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjAxMDg3JywgdGFyZ2V0OiAnb3JnXzN2STJaNWtDMVNhU2xiVUJvT0JUJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYwMjI1MicsIHRhcmdldDogJzQ4OTA2MTEtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MDIyNTInLCB0YXJnZXQ6ICdvcmdfSjhWbkF6RnFFaldneHE0ZXY3MXonIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjA0MTE3JywgdGFyZ2V0OiAnNTg3MzA5Ni0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYwNDExNycsIHRhcmdldDogJzU4NzMwOTYtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MDQxMTcnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjA0MTI4JywgdGFyZ2V0OiAnNjMyNDU2OC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYwNDEyOCcsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MDY3NDQnLCB0YXJnZXQ6ICc2NjA2NzQ0LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjA2NzQ0JywgdGFyZ2V0OiAnb3JnXzR6TzJCYzA4eDU2WGpEcTVUZUJwJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYwOTE1MCcsIHRhcmdldDogJzU5NjM5NTMtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MDkxNTAnLCB0YXJnZXQ6ICc2MzM2MTM3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjA5MTUwJywgdGFyZ2V0OiAnNjMzNjEzNy0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYwOTE1MCcsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MjE4MzQnLCB0YXJnZXQ6ICc1OTQ0NzkxLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjIxODM0JywgdGFyZ2V0OiAnNjYyMTgzNC0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYyMTgzNCcsIHRhcmdldDogJ29yZ19rOFY3YzVnbm1DN1NWbXVwNVZ1NycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NDE1MzMnLCB0YXJnZXQ6ICc0ODA5Njk3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjQxNTMzJywgdGFyZ2V0OiAnNDg2MzQyNS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY0MTUzMycsIHRhcmdldDogJzUwOTcxMjItMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NDE1MzMnLCB0YXJnZXQ6ICdvcmdfR1ZNbExWYndDRFNpcVA5T2c4VG4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjQ0NTMyJywgdGFyZ2V0OiAnNDEyNzIyNy0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY0NDUzMicsIHRhcmdldDogJzQyODMwMjQtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NDQ1MzInLCB0YXJnZXQ6ICc1MTc2NTAyLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjQ0NTMyJywgdGFyZ2V0OiAnRDI2Mzk4Ny0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY0NDUzMicsIHRhcmdldDogJ0QzMDQyMzQtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NDQ1MzInLCB0YXJnZXQ6ICdSRTI4OTMyLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjQ0NTMyJywgdGFyZ2V0OiAnb3JnXzV3Tk5ySjR6RlE1S1E4T1duelJDJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY1NDAzMicsIHRhcmdldDogJzUyNjEwMzctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NTQwMzInLCB0YXJnZXQ6ICc1ODU1OTU3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjU0MDMyJywgdGFyZ2V0OiAnNjYwMTA4Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY1NDAzMicsIHRhcmdldDogJzY2NTQwMzItNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NTQwMzInLCB0YXJnZXQ6ICdvcmdfM3ZJMlo1a0MxU2FTbGJVQm9PQlQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjU2MTkzJywgdGFyZ2V0OiAnNDg5MjI0NC00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY1NjE5MycsIHRhcmdldDogJzUyNzE1NDMtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NTYxOTMnLCB0YXJnZXQ6ICc1MzI5NjU1LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjU2MTkzJywgdGFyZ2V0OiAnNTQwOTQ5OC00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY1NjE5MycsIHRhcmdldDogJzU3MDczNjktMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NTYxOTMnLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjY1NjQ4JywgdGFyZ2V0OiAnNjY2NTY0OC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY2NTY0OCcsIHRhcmdldDogJzY2NjU2NDgtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NjU2NDgnLCB0YXJnZXQ6ICc2NjY1NjQ4LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjY1NjQ4JywgdGFyZ2V0OiAnNjY2NTY0OC00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY2NTY0OCcsIHRhcmdldDogJzY2NjU2NDgtNScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NjU2NDgnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjY1NjU1JywgdGFyZ2V0OiAnNjQzNDU1MC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY2NTY1NScsIHRhcmdldDogJzY2NjU2NTUtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NjU2NTUnLCB0YXJnZXQ6ICdvcmdfNnI5dDdaQTZZVDAzMU9kNGtNUGcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2Njg0NDM4JywgdGFyZ2V0OiAnNTg3MzA5Ni0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY4NDQzOCcsIHRhcmdldDogJzYwOTIwODMtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2ODQ0MzgnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjkwMzg3JywgdGFyZ2V0OiAnNjI4MTg5OC0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY5MDM4NycsIHRhcmdldDogJzY2OTAzODctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2OTAzODcnLCB0YXJnZXQ6ICdvcmdfRnZndkdGZThKWjBpWWxaODB3ZUYnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjkzMjMyJywgdGFyZ2V0OiAnNTQxNjI1NS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY5MzIzMicsIHRhcmdldDogJ29yZ19NS3ZibkNjeVB1ZFhleFV2c1N3RicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2OTg2NDMnLCB0YXJnZXQ6ICc2MjY0MDg3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2Njk4NjQzJywgdGFyZ2V0OiAnb3JnX0FUT1dIZDRHR2FvaDE0enV0WHE3JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcxMTU2NScsIHRhcmdldDogJzY3MTE1NjUtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MTE1NjUnLCB0YXJnZXQ6ICc2NzExNTY1LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzExNTY1JywgdGFyZ2V0OiAnNjcxMTU2NS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcxMTU2NScsIHRhcmdldDogJzY3MTE1NjUtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MTE1NjUnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzE2MjMzJywgdGFyZ2V0OiAnNjI2NDA4Ny0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcxNjIzMycsIHRhcmdldDogJ29yZ19BVE9XSGQ0R0dhb2gxNHp1dFhxNycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MTgzNjEnLCB0YXJnZXQ6ICc2MjIzMjA1LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzE4MzYxJywgdGFyZ2V0OiAnNjM3MDU4NC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcxODM2MScsIHRhcmdldDogJzY3MTgzNjEtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MTgzNjEnLCB0YXJnZXQ6ICc2NzE4MzYxLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzE4MzYxJywgdGFyZ2V0OiAnNjcxODM2MS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcxODM2MScsIHRhcmdldDogJzY3MTgzNjEtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MTgzNjEnLCB0YXJnZXQ6ICc2NzE4MzYxLTUnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzE4MzYxJywgdGFyZ2V0OiAnNjcxODM2MS04JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcxODM2MScsIHRhcmdldDogJ29yZ18xcDRGV0VvSXRqeUtid1RwQ0pvbCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MjQzOTknLCB0YXJnZXQ6ICc2NzI0Mzk5LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzI0Mzk5JywgdGFyZ2V0OiAnNjcyNDM5OS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcyNDM5OScsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3Mjc1MjInLCB0YXJnZXQ6ICc0MjUzMDYxLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzI3NTIyJywgdGFyZ2V0OiAnNDkwMjY3MS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcyNzUyMicsIHRhcmdldDogJ29yZ19jNXZ5QnpLN2lpa2tVNERqUUZIVCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3Mjg3MDInLCB0YXJnZXQ6ICc2NTc3NzI2LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzI4NzAyJywgdGFyZ2V0OiAnNjcxMTU2NS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcyODcwMicsIHRhcmdldDogJzY3MTE1NjUtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3Mjg3MDInLCB0YXJnZXQ6ICc2NzExNTY1LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzI4NzAyJywgdGFyZ2V0OiAnNjcxMTU2NS00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcyODcwMicsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3Mjg5NjAnLCB0YXJnZXQ6ICc2MzkzNjA1LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzI4OTYwJywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjczMjA5NScsIHRhcmdldDogJzUyNDM2MjItMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MzIwOTUnLCB0YXJnZXQ6ICc2NzMyMDk1LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMDk1JywgdGFyZ2V0OiAnNjczMjA5NS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjczMjA5NScsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MzIxMDAnLCB0YXJnZXQ6ICc1NzE1NDUwLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMTAwJywgdGFyZ2V0OiAnNjU3NzcyNi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjczMjEwMCcsIHRhcmdldDogJzY1Nzc3MjYtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MzIxMDAnLCB0YXJnZXQ6ICc2NjY1NjQ4LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMTAwJywgdGFyZ2V0OiAnNjczMjEwMC00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjczMjEwMCcsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MzIxMTEnLCB0YXJnZXQ6ICc0OTUxMjc4LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMTExJywgdGFyZ2V0OiAnNjA5MjA4My0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjczMjExMScsIHRhcmdldDogJzYwOTIwODMtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MzIxMTEnLCB0YXJnZXQ6ICc2NzMyMTExLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMTExJywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc1NDY4MScsIHRhcmdldDogJzU4NzMwOTYtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3NTQ2ODEnLCB0YXJnZXQ6ICc2MDkyMDgzLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzU0NjgxJywgdGFyZ2V0OiAnNjA5MjA4My0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc1NDY4MScsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3NjMzNTEnLCB0YXJnZXQ6ICc2NzExNTY1LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzYzMzUxJywgdGFyZ2V0OiAnNjcxMTU2NS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc2MzM1MScsIHRhcmdldDogJzY3MTE1NjUtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3NjMzNTEnLCB0YXJnZXQ6ICc2NzExNTY1LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzYzMzUxJywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc2MzUwMScsIHRhcmdldDogJzUyNjEwMzctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3NjM1MDEnLCB0YXJnZXQ6ICc1ODU1OTU3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzYzNTAxJywgdGFyZ2V0OiAnNjYwMTA4Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc2MzUwMScsIHRhcmdldDogJzY2NTQwMzItNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3NjM1MDEnLCB0YXJnZXQ6ICdvcmdfM3ZJMlo1a0MxU2FTbGJVQm9PQlQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzY4OTA0JywgdGFyZ2V0OiAnNjE4MzU4OS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc2ODkwNCcsIHRhcmdldDogJ29yZ19YY3FDanRUOHBpOE1rM1VqUWxEdCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3ODIzODMnLCB0YXJnZXQ6ICc2NzExNTY1LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzgyMzgzJywgdGFyZ2V0OiAnNjcxMTU2NS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc4MjM4MycsIHRhcmdldDogJzY3MTE1NjUtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3ODIzODMnLCB0YXJnZXQ6ICc2NzExNTY1LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzgyMzgzJywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc4MzUyNCcsIHRhcmdldDogJzU4NTk5MTYtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3ODM1MjQnLCB0YXJnZXQ6ICc2NzgzNTI0LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzgzNTI0JywgdGFyZ2V0OiAnb3JnX2ZBMGF6cW9CR0V6b1BveTg1Snl2JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc4NjM4MicsIHRhcmdldDogJzY1MzA5MzItMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3ODYzODInLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA0MzMwJywgdGFyZ2V0OiAnNTcxNTQ1MC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgwNDMzMCcsIHRhcmdldDogJzYyNjg4MDMtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MDQzMzAnLCB0YXJnZXQ6ICc2ODA0MzMwLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA0MzMwJywgdGFyZ2V0OiAnNjgwNDMzMC00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgwNDMzMCcsIHRhcmdldDogJzY4MDQzMzAtNScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MDQzMzAnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA5NjUzJywgdGFyZ2V0OiAnNDA4MjA5Ny0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgwOTY1MycsIHRhcmdldDogJzQ1NjE0NDQtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MDk2NTMnLCB0YXJnZXQ6ICc0ODA5Njk3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA5NjUzJywgdGFyZ2V0OiAnNDg2MzQyNS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgwOTY1MycsIHRhcmdldDogJzUwOTcxMjItMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MDk2NTMnLCB0YXJnZXQ6ICc1MjM3MTc4LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA5NjUzJywgdGFyZ2V0OiAnNTM4MjIzMi0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgwOTY1MycsIHRhcmdldDogJzY4MDk2NTMtOScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MDk2NTMnLCB0YXJnZXQ6ICdENDIzNzYxLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA5NjUzJywgdGFyZ2V0OiAnb3JnX0dWTWxMVmJ3Q0RTaXFQOU9nOFRuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyNjU2NScsIHRhcmdldDogJzYyOTU1MzAtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MjY1NjUnLCB0YXJnZXQ6ICc2Mjk1NTMwLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI2NTY1JywgdGFyZ2V0OiAnb3JnX1o1OWFVQkd0WjlQNVF6ZEZpS21aJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyNjU4MicsIHRhcmdldDogJzQzNjIzODctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MjY1ODInLCB0YXJnZXQ6ICc2MDgxODc1LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI2NTgyJywgdGFyZ2V0OiAnNjgyNjU4Mi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyNjU4MicsIHRhcmdldDogJ29yZ18walBXTTdZcWh0WG0wbG0zZm0xWScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MjY3NDUnLCB0YXJnZXQ6ICc2MjMzNjE3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI2NzQ1JywgdGFyZ2V0OiAnNjU3NzcyNi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyNjc0NScsIHRhcmdldDogJzY4MjY3NDUtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MjY3NDUnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI5NjU1JywgdGFyZ2V0OiAnNTk3ODgyOS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyOTY1NScsIHRhcmdldDogJzYwMDQyNzYtMTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI5NjU1JywgdGFyZ2V0OiAnNjgyOTY1NS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyOTY1NScsIHRhcmdldDogJzY4Mjk2NTUtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4Mjk2NTUnLCB0YXJnZXQ6ICc2ODI5NjU1LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI5NjU1JywgdGFyZ2V0OiAnNjgyOTY1NS02JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyOTY1NScsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MzAxNzQnLCB0YXJnZXQ6ICc0Nzk4NTk0LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODMwMTc0JywgdGFyZ2V0OiAnNTQ2NTg5NS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgzMDE3NCcsIHRhcmdldDogJ29yZ184Y3NNZ3Rnbk4wbVJFWnBOUDFKaScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NDI3NDgnLCB0YXJnZXQ6ICc2NDM0NTUwLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODQyNzQ4JywgdGFyZ2V0OiAnNjY2NTY1NS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg0Mjc0OCcsIHRhcmdldDogJ29yZ182cjl0N1pBNllUMDMxT2Q0a01QZycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NDM0MDMnLCB0YXJnZXQ6ICc2MjY0MDg3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODQzNDAzJywgdGFyZ2V0OiAnb3JnX0FUT1dIZDRHR2FvaDE0enV0WHE3JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg1MDI1MicsIHRhcmdldDogJzU3NzQzNTctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NTA4OTUnLCB0YXJnZXQ6ICc2MDkyMDgzLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODUwODk1JywgdGFyZ2V0OiAnNjA5MjA4My0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg1MDg5NScsIHRhcmdldDogJzY1Nzc3MjYtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NTA4OTUnLCB0YXJnZXQ6ICc2ODUwODk1LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODUwODk1JywgdGFyZ2V0OiAnNjg1MDg5NS01JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg1MDg5NScsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NTA5NDknLCB0YXJnZXQ6ICc2ODUwOTQ5LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODUwOTQ5JywgdGFyZ2V0OiAnNjg1MDk0OS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg1MDk0OScsIHRhcmdldDogJzY4NTA5NDktMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NTA5NDknLCB0YXJnZXQ6ICdvcmdfMjQyaEplZ3dmUUNlUDloc2Z3cFcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODUyOTE1JywgdGFyZ2V0OiAnNTI3NjI2Mi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg1MjkxNScsIHRhcmdldDogJ29yZ19NS3ZibkNjeVB1ZFhleFV2c1N3RicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY5MDUwNTcnLCB0YXJnZXQ6ICc1ODk3NTYzLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2OTA1MDU3JywgdGFyZ2V0OiAnNjkwNTA1Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjkwNTA1NycsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY5NTk4NTInLCB0YXJnZXQ6ICc1NjMyNDMyLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2OTU5ODUyJywgdGFyZ2V0OiAnNjkwNTA1Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjk1OTg1MicsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY5NjQzNjMnLCB0YXJnZXQ6ICc1NDA5NDk4LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2OTY0MzYzJywgdGFyZ2V0OiAnNjk2NDM2My0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjk2NDM2MycsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY5Nzg5MjEnLCB0YXJnZXQ6ICc1NjMyNDMyLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2OTc4OTIxJywgdGFyZ2V0OiAnNjkwNTA1Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjk3ODkyMScsIHRhcmdldDogJzY5Nzg5MjEtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY5Nzg5MjEnLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2OTgxNjI4JywgdGFyZ2V0OiAnNTQwOTQ5OC00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjk4MTYyOCcsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMDA4MTgnLCB0YXJnZXQ6ICc1NjMyNDMyLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDAwODE4JywgdGFyZ2V0OiAnNjkwNTA1Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAwMDgxOCcsIHRhcmdldDogJzcwMDA4MTgtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMDA4MTgnLCB0YXJnZXQ6ICdvcmdfWHU2Z1hTc2x0REJaVEFoTUZCV0QnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDI1NzQzJywgdGFyZ2V0OiAnNDA4MjA5Ny0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAyNTc0MycsIHRhcmdldDogJzQ1NjE0NDQtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMjU3NDMnLCB0YXJnZXQ6ICc0ODA5Njk3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDI1NzQzJywgdGFyZ2V0OiAnNTE3NjY0NC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAyNTc0MycsIHRhcmdldDogJzUzODIyMzItMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMjU3NDMnLCB0YXJnZXQ6ICc2NTUxMjc2LTEwJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAyNTc0MycsIHRhcmdldDogJzY1NTEyNzYtMTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDI1NzQzJywgdGFyZ2V0OiAnNjU1MTI3Ni0xMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMjU3NDMnLCB0YXJnZXQ6ICc2NTUxMjc2LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDI1NzQzJywgdGFyZ2V0OiAnNjU1MTI3Ni00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAyNTc0MycsIHRhcmdldDogJzY1NTEyNzYtOCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMjU3NDMnLCB0YXJnZXQ6ICc2NTUxMjc2LTknIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDI1NzQzJywgdGFyZ2V0OiAnb3JnX0dWTWxMVmJ3Q0RTaXFQOU9nOFRuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA0OTE5MCcsIHRhcmdldDogJzYwODA5OTgtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNDkxOTAnLCB0YXJnZXQ6ICc2OTE0MTgyLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDQ5MTkwJywgdGFyZ2V0OiAnb3JnXzJJRjk3elZ5bVN1cmFTblVBWG1xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA1NTczMScsIHRhcmdldDogJzU2MzI0MzItNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNTU3MzEnLCB0YXJnZXQ6ICc2OTA1MDU3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDU1NzMxJywgdGFyZ2V0OiAnNjk3ODkyMS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA1NTczMScsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNjEwMTQnLCB0YXJnZXQ6ICc0NDg2NzIwLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDYxMDE0JywgdGFyZ2V0OiAnNDcwMzAxOS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA2MTAxNCcsIHRhcmdldDogJzUyNzIwNjktNicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNjEwMTQnLCB0YXJnZXQ6ICc1NjIyNjUzLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDYxMDE0JywgdGFyZ2V0OiAnNzA2MTAxNC00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA2MTAxNCcsIHRhcmdldDogJzcwNjEwMTQtNicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNjEwMTQnLCB0YXJnZXQ6ICdvcmdfRHR0Wk12a3l2VzNmVjZvQ1VNVEYnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDY0MzQ2JywgdGFyZ2V0OiAnNDI1MzA2MS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA2NDM0NicsIHRhcmdldDogJzQ5MDI2NzEtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNjQzNDYnLCB0YXJnZXQ6ICdvcmdfRHR0Wk12a3l2VzNmVjZvQ1VNVEYnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MTA1ODY4JywgdGFyZ2V0OiAnNTg2MzMyNi0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzEwNTg2OCcsIHRhcmdldDogJzY4ODc3MzYtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcxMDU4NjgnLCB0YXJnZXQ6ICdvcmdfMGVUcjNYSUJqQUtwWGtDNjgyM3InIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MTExNzY5JywgdGFyZ2V0OiAnNTQwOTQ5OC00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzExMTc2OScsIHRhcmdldDogJzU4OTc1NjMtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcxMTE3NjknLCB0YXJnZXQ6ICc2NTMwOTMyLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MTExNzY5JywgdGFyZ2V0OiAnNjkwNTA1Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzExMTc2OScsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcxNDcxMzgnLCB0YXJnZXQ6ICc2OTA1MDU3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MTQ3MTM4JywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzE1OTc1MCcsIHRhcmdldDogJzQ4NzI2MDMtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcxNTk3NTAnLCB0YXJnZXQ6ICc1NzEzOTExLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MTU5NzUwJywgdGFyZ2V0OiAnNTcxMzkxMS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzE1OTc1MCcsIHRhcmdldDogJzcxNTk3NTAtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcxNTk3NTAnLCB0YXJnZXQ6ICc3MTU5NzUwLTUnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MTU5NzUwJywgdGFyZ2V0OiAnb3JnX2V3VnNDdXRwUnpEOXBUMDdrQm9FJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzIxMTgyNScsIHRhcmdldDogJzUwODE0MjItMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcyMTE4MjUnLCB0YXJnZXQ6ICc1MjgzNDUyLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MjExODI1JywgdGFyZ2V0OiAnNTcwMzM1Ny0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzIxMTgyNScsIHRhcmdldDogJzY1OTM4MzQtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcyNDY3MzQnLCB0YXJnZXQ6ICc2OTA1MDU3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MjQ2NzM0JywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzI4Mjc4MicsIHRhcmdldDogJzYxNDQ2NzktMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcyODI3ODInLCB0YXJnZXQ6ICc2MTUyOTg3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MjgyNzgyJywgdGFyZ2V0OiAnNjgzNjU0MC02JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzI4Mjc4MicsIHRhcmdldDogJ29yZ192UzZyY0t5YzJxTjNyRmRYMFAySycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcyOTc5NzcnLCB0YXJnZXQ6ICc2MTQ0Njc5LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3Mjk3OTc3JywgdGFyZ2V0OiAnNjE1Mjk4Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzI5Nzk3NycsIHRhcmdldDogJzY4MzY1NDAtNicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcyOTc5NzcnLCB0YXJnZXQ6ICdvcmdfdlM2cmNLeWMycU4zckZkWDBQMksnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzIzMzU2JywgdGFyZ2V0OiAnNDQ4NjcyMC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzMyMzM1NicsIHRhcmdldDogJzQ3MDMwMTktMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczMjMzNTYnLCB0YXJnZXQ6ICc1MjcyMDY5LTYnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzIzMzU2JywgdGFyZ2V0OiAnNTYyMjY1My0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzMyMzM1NicsIHRhcmdldDogJzcwNjEwMTQtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczMjMzNTYnLCB0YXJnZXQ6ICc3MzIzMzU2LTUnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzIzMzU2JywgdGFyZ2V0OiAnb3JnX0R0dFpNdmt5dlczZlY2b0NVTVRGJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzM0MDQxMScsIHRhcmdldDogJzczNDA0MTEtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczODA2OTUnLCB0YXJnZXQ6ICc1NDA5NDk4LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzgwNjk1JywgdGFyZ2V0OiAnNTYzMjQzMi00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzM4MDY5NScsIHRhcmdldDogJzY5MDUwNTctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczODA2OTUnLCB0YXJnZXQ6ICc3MDgzMDc1LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzgwNjk1JywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzM4MDY5NicsIHRhcmdldDogJzU2MzI0MzItNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczODA2OTYnLCB0YXJnZXQ6ICc2OTA1MDU3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzgwNjk2JywgdGFyZ2V0OiAnNzA4MzA3NS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzM4MDY5NicsIHRhcmdldDogJzczODA2OTYtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczODA2OTYnLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3Mzg1MjI0JywgdGFyZ2V0OiAnNTA0MTIwMC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzM4NTIyNCcsIHRhcmdldDogJzUwNDEyMDAtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczODUyMjQnLCB0YXJnZXQ6ICc3Mzg1MjI0LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3Mzg1MjI0JywgdGFyZ2V0OiAnNzM4NTIyNC0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzM4NTIyNCcsIHRhcmdldDogJ29yZ19JbWVnOVc2UDFURTZJMlF1dFM0eScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0MDI1MDYnLCB0YXJnZXQ6ICc1NTEyNDI2LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDAyNTA2JywgdGFyZ2V0OiAnNjA0ODExMC0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQwMjUwNicsIHRhcmdldDogJzc0MDI1MDYtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0MDI1MDYnLCB0YXJnZXQ6ICdvcmdfcHBFbGtFdFF2RnRHNkE0NzU0VUknIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDA0NTA4JywgdGFyZ2V0OiAnNDY4MjU5Ni0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQwNDUwOCcsIHRhcmdldDogJzUxMTc4MzgtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0MDQ1MDgnLCB0YXJnZXQ6ICc1NzE1Njc1LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDA0NTA4JywgdGFyZ2V0OiAnNjkxMjgzOS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQwNDUwOCcsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0MTEyMDknLCB0YXJnZXQ6ICc1MzQ1NjM5LTYnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDExMjA5JywgdGFyZ2V0OiAnNTQxNzc3MC04JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQxMTIwOScsIHRhcmdldDogJzcwODI4MzItNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0MTEyMDknLCB0YXJnZXQ6ICdvcmdfRWhZRlBJSkVtWVFZUm9ZdnNucHknIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDUzMDY1JywgdGFyZ2V0OiAnNDA3MjIzNi0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ1MzA2NScsIHRhcmdldDogJzQzNTY0NTUtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NTMwNjUnLCB0YXJnZXQ6ICc0NzAzMDE5LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDUzMDY1JywgdGFyZ2V0OiAnNzA2MTAxNC02JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ1MzA2NScsIHRhcmdldDogJ29yZ19FaFlGUElKRW1ZUVlSb1l2c25weScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NTMwNjUnLCB0YXJnZXQ6ICdvcmdfSmpyTTZVbWVPWTBRNU1tb05pUDgnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDUzMDg3JywgdGFyZ2V0OiAnNTM0NTYzOS02JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ1MzA4NycsIHRhcmdldDogJ29yZ19FaFlGUElKRW1ZUVlSb1l2c25weScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NjI4NjInLCB0YXJnZXQ6ICc2MTQ0Njc5LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDYyODYyJywgdGFyZ2V0OiAnNjgzNjU0MC02JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ2Mjg2MicsIHRhcmdldDogJ29yZ192UzZyY0t5YzJxTjNyRmRYMFAySycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NjQ4NDYnLCB0YXJnZXQ6ICc0NDAzNjg3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDY0ODQ2JywgdGFyZ2V0OiAnNTg5NzU2My00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ2NDg0NicsIHRhcmdldDogJzY5MDUwNTctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NjQ4NDYnLCB0YXJnZXQ6ICc3MDgzMDc1LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDY0ODQ2JywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ2ODMwNCcsIHRhcmdldDogJzY4NjMzNjMtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NjgzMDQnLCB0YXJnZXQ6ICc3NDY4MzA0LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDY4MzA0JywgdGFyZ2V0OiAnb3JnX0VoWUZQSUpFbVlRWVJvWXZzbnB5JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzUwMTI5MycsIHRhcmdldDogJzQyMjQ3MjUtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc1MDEyOTMnLCB0YXJnZXQ6ICc0NTczNDcyLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NTAxMjkzJywgdGFyZ2V0OiAnb3JnX2o1VTVJRWExRkliZ3RyN2lOc1FNJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzUwNjc5MScsIHRhcmdldDogJzQ0MDM2ODctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc1MDY3OTEnLCB0YXJnZXQ6ICc0OTcyMjI0LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NTA2NzkxJywgdGFyZ2V0OiAnNjkwNTA1Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzUwNjc5MScsIHRhcmdldDogJ1JFMzk4NDEtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc1MDY3OTEnLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NjIwNjU1JywgdGFyZ2V0OiAnNTk0ODc4OS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzYyMDY1NScsIHRhcmdldDogJzc2MjA2NTUtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc2MjA2NTUnLCB0YXJnZXQ6ICdvcmdfV2gyY25PSXpLbGh6anVxVm1PcVknIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NjMyOTg1JywgdGFyZ2V0OiAnNzA3ODUwMy0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzYzMjk4NScsIHRhcmdldDogJzc2MDg3NjEtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc2MzI5ODUnLCB0YXJnZXQ6ICc3NjMyOTg1LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NjMyOTg1JywgdGFyZ2V0OiAnNzYzMjk4NS00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzYzMjk4NScsIHRhcmdldDogJ29yZ19RdzhFc3JOME01Mm5WUVVNNnZzVicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc2NjM2MDcnLCB0YXJnZXQ6ICc1NTk0MTY5LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NjYzNjA3JywgdGFyZ2V0OiAnNjY1ODU3Ny0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzY2MzYwNycsIHRhcmdldDogJzcxNTQ0NzctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc2NjM2MDcnLCB0YXJnZXQ6ICdvcmdfSURVYlMwOVpSMEpoSjhqRkVwdFQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3Njc0NjUwJywgdGFyZ2V0OiAnNjYzOTI0Ni0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzY3NDY1MCcsIHRhcmdldDogJzY4MzgzOTctMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc2NzQ2NTAnLCB0YXJnZXQ6ICc3MjA1NzE2LTUnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3Njc0NjUwJywgdGFyZ2V0OiAnb3JnX3BsWmJMeGl5c0VTYmFJOXBPZXltJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzczMjgxOScsIHRhcmdldDogJzY2MzkyNDYtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc3MzI4MTknLCB0YXJnZXQ6ICc2ODM4Mzk3LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NzMyODE5JywgdGFyZ2V0OiAnNzIwNTcxNi01JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzczMjgxOScsIHRhcmdldDogJ29yZ19wbFpiTHhpeXNFU2JhSTlwT2V5bScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzgwNTMxODQnLCB0YXJnZXQ6ICc3MDc4NTAzLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc4MDUzMTg0JywgdGFyZ2V0OiAnNzYwODc2MS00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnODA1MzE4NCcsIHRhcmdldDogJzc2MzI5ODUtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzgwNTMxODQnLCB0YXJnZXQ6ICc3NjMyOTg1LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc4MDUzMTg0JywgdGFyZ2V0OiAnb3JnX1F3OEVzck4wTTUyblZRVU02dnNWJyB9XHJcbiAgICBdXHJcbn1cclxuIiwiaW1wb3J0ICogYXMgaW50ZXJmYWNlcyBmcm9tICcuLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgTmV0ViBmcm9tICcuLi9pbmRleCdcclxuaW1wb3J0IHsgb3ZlcnJpZGUgfSBmcm9tICcuLi91dGlscy91dGlscydcclxuaW1wb3J0IHsgRU1QVFlfRlVOQ1RJT04gfSBmcm9tICcuLi91dGlscy9jb25zdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnQge1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHR5cGU6IHN0cmluZ1xyXG4gICAgcHVibGljICRfc3R5bGU6IGludGVyZmFjZXMuTm9kZVN0eWxlIHwgaW50ZXJmYWNlcy5MaW5rU3R5bGUgPSB7fVxyXG4gICAgcHVibGljICRfbW91c2Vkb3duQ2FsbGJhY2tTZXQ6IFNldDwoZTogYW55KSA9PiB2b2lkPiA9IG5ldyBTZXQoKVxyXG4gICAgcHVibGljICRfbW91c2V1cENhbGxiYWNrU2V0OiBTZXQ8KGU6IGFueSkgPT4gdm9pZD4gPSBuZXcgU2V0KClcclxuICAgIHB1YmxpYyAkX21vdXNlb3ZlckNhbGxiYWNrU2V0OiBTZXQ8KGU6IGFueSkgPT4gdm9pZD4gPSBuZXcgU2V0KClcclxuICAgIHB1YmxpYyAkX21vdXNlb3V0Q2FsbGJhY2tTZXQ6IFNldDwoZTogYW55KSA9PiB2b2lkPiA9IG5ldyBTZXQoKVxyXG4gICAgcHVibGljICRfbW91c2Vtb3ZlQ2FsbGJhY2tTZXQ6IFNldDwoZTogYW55KSA9PiB2b2lkPiA9IG5ldyBTZXQoKVxyXG4gICAgcHVibGljICRfY2xpY2tDYWxsYmFja1NldDogU2V0PChlOiBhbnkpID0+IHZvaWQ+ID0gbmV3IFNldCgpXHJcblxyXG4gICAgcHJvdGVjdGVkICRfY29yZTogTmV0VlxyXG4gICAgcHJvdGVjdGVkICRfY2hhbmdlUmVuZGVyQXR0cmlidXRlOiAoZWxlbWVudDogRWxlbWVudCwga2V5OiBzdHJpbmcpID0+IHZvaWRcclxuXHJcbiAgICBwcm90ZWN0ZWQgJF9hdHRyaWJ1dGVzID0ge31cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgY29yZTogTmV0VixcclxuICAgICAgICBkYXRhOiBpbnRlcmZhY2VzLk5vZGVEYXRhIHwgaW50ZXJmYWNlcy5MaW5rRGF0YSxcclxuICAgICAgICB0eXBlOiAnTm9kZScgfCAnTGluaydcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuJF9jb3JlID0gY29yZVxyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGVcclxuICAgICAgICBjb25zdCBkZWZhdWx0Q29uZmlncyA9IHRoaXMuJF9jb3JlLiRfY29uZmlnc1xyXG5cclxuICAgICAgICAvLyBvdmVycmlkZSBkZWZhdWx0IHN0eWxlIHdpdGggdXNlciBzcGVjaWZpZWQgc3R5bGUgaW4gZGF0YVxyXG4gICAgICAgIC8vIHRoaXMuJF9zdHlsZSA9IG92ZXJyaWRlKGRlZmF1bHRDb25maWdzW3R5cGVdLnN0eWxlLCBkYXRhLnN0eWxlKVxyXG4gICAgICAgIHRoaXMuJF9zdHlsZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGVmYXVsdENvbmZpZ3NbdGhpcy50eXBlLnRvTG93ZXJDYXNlKCldLnN0eWxlKSlcclxuICAgICAgICBpZiAoJ3N0eWxlJyBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGRhdGEuc3R5bGUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGtleVxyXG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlICE9PSBPYmplY3Qoc3R5bGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGUgaXMgbm90IGFuIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJF9zdHlsZVtuYW1lXSA9IHN0eWxlXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICEgaWYgdGhlIGRlcHRoIG9mIHN0eWxlIGlzIG1vcmUgdGhhbiBvbmUsIGl0IGNhbiBjYXVzZSBidWdzXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gISBlLmcuIHN0eWxlID0geyB4eDogey4uLn0sIHl5OiAuLi4gfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJF9zdHlsZVtuYW1lXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy4kX3N0eWxlW25hbWVdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zdHlsZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlck1hbmFnZXIgPSB0aGlzLiRfY29yZS4kX3JlbmRlcmVyW2Ake3RoaXMudHlwZS50b0xvd2VyQ2FzZSgpfU1hbmFnZXJgXVxyXG4gICAgICAgIHRoaXMuJF9jaGFuZ2VSZW5kZXJBdHRyaWJ1dGUgPSByZW5kZXJNYW5hZ2VyLmNoYW5nZUF0dHJpYnV0ZS5iaW5kKHJlbmRlck1hbmFnZXIpXHJcblxyXG4gICAgICAgIC8vIGdlbmVyYXRlIHN0eWxlIG1ldGhvZHMsIGUuZy46IG5vZGUucigpLCBsaW5rLnN0cm9rZVdpZHRoKClcclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLiRfc3R5bGUpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBnZW5lcmF0ZSBzdHlsZSBmdW5jdGlvbnNcclxuICAgICAgICAgICAgdGhpc1trZXldID0gdGhpcy5nZW5lcmF0ZUVsZW1lbnRTdHlsZUdldHRlclNldHRlcihrZXkpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcclxuICAgICAqIEBwYXJhbSB7KGU6IGFueSkgPT4gYW55fSBjYWxsYmFja1xyXG4gICAgICogQG1lbWJlcm9mIEVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjaz86IChlOiBhbnkpID0+IGFueSkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZXZlbnROYW1lLnNsaWNlKDAsIDQpICE9PSAnZHJhZycgfHxcclxuICAgICAgICAgICAgKGV2ZW50TmFtZS5zbGljZSgwLCA0KSA9PT0gJ2RyYWcnICYmIHRoaXMudHlwZSA9PT0gJ05vZGUnKSAvLyBvbmx5IG5vZGUgY2FuIGJlIGRyYWdnZWRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tTZXROYW1lID0gYCRfJHtldmVudE5hbWV9Q2FsbGJhY2tTZXRgXHJcbiAgICAgICAgICAgIHRoaXNbY2FsbGJhY2tTZXROYW1lXT8uYWRkKGNhbGxiYWNrID8gY2FsbGJhY2sgOiBFTVBUWV9GVU5DVElPTilcclxuICAgICAgICAgICAgaWYgKHRoaXNbY2FsbGJhY2tTZXROYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9pbnRlcmFjdGlvbk1hbmFnZXIuaW5jcmVhc2VNb3VzZUV2ZW50Q2FsbGJhY2tDb3VudEJ5KDEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXHJcbiAgICAgKiBAcGFyYW0geyhlOiBhbnkpID0+IGFueX0gY2FsbGJhY2tcclxuICAgICAqIEBtZW1iZXJvZiBFbGVtZW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvZmYoZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiAoZTogYW55KSA9PiBhbnkpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGV2ZW50TmFtZS5zbGljZSgwLCA0KSAhPT0gJ2RyYWcnIHx8XHJcbiAgICAgICAgICAgIChldmVudE5hbWUuc2xpY2UoMCwgNCkgPT09ICdkcmFnJyAmJiB0aGlzLnR5cGUgPT09ICdOb2RlJykgLy8gb25seSBub2RlIGNhbiBiZSBkcmFnZ2VkXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrU2V0TmFtZSA9IGAkXyR7ZXZlbnROYW1lfUNhbGxiYWNrU2V0YFxyXG4gICAgICAgICAgICB0aGlzW2NhbGxiYWNrU2V0TmFtZV0/LmRlbGV0ZShjYWxsYmFjayA/IGNhbGxiYWNrIDogRU1QVFlfRlVOQ1RJT04pXHJcbiAgICAgICAgICAgIGlmICh0aGlzW2NhbGxiYWNrU2V0TmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfaW50ZXJhY3Rpb25NYW5hZ2VyLmRlY3JlYXNlTW91c2VFdmVudENhbGxiYWNrQ291bnRCeSgxKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0L3NldCBjdXN0b20gYXR0cmlidXRlc1xyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhdHRyKGtleTogc3RyaW5nLCB2YWx1ZT86IGFueSkge1xyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9hdHRyaWJ1dGVzW2tleV0gPSB2YWx1ZVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kX2F0dHJpYnV0ZXNba2V5XVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLiRfYXR0cmlidXRlcykpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2VuZXJhdGVFbGVtZW50U3R5bGVHZXR0ZXJTZXR0ZXIoa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gKHZhbHVlPzogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IE9iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB2YWx1ZSBpcyBhbiBvYmplY3RcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRfc3R5bGVba2V5XSA9IG92ZXJyaWRlKHRoaXMuJF9zdHlsZVtrZXldLCB2YWx1ZSkgLy8geyAuLi50aGlzLiRfc3R5bGVba2V5XSwgLi4udmFsdWUgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRfc3R5bGVba2V5XSA9IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRfY2hhbmdlUmVuZGVyQXR0cmlidXRlKHRoaXMsIGtleSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kX3N0eWxlW2tleV1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgSmlhY2hlbmcgUGFuIDxqYWNraWVhbnhpc0BnbWFpbC5jb20+XHJcbiAqIEBkZXNjcmlwdGlvbiBQcm92aWRlIGEgTGluayBjbGFzcy5cclxuICogQGRlcGVuZGVuY2VzIGludGVyZmFjZXMudHMsIHV0aWxzL2lzLnRzXHJcbiAqL1xyXG5cclxuaW1wb3J0IE5vZGUgZnJvbSAnLi9ub2RlJ1xyXG5pbXBvcnQgKiBhcyBpbnRlcmZhY2VzIGZyb20gJy4uL2ludGVyZmFjZXMnXHJcbmltcG9ydCBFbGVtZW50IGZyb20gJy4vZWxlbWVudCdcclxuXHJcbmNsYXNzIExpbmsgZXh0ZW5kcyBFbGVtZW50IHtcclxuICAgIC8vIHN0eWxlIGdldHRlci9zZXR0ZXJcclxuICAgIHB1YmxpYyBzaGFwZTogKHZhbHVlPzogaW50ZXJmYWNlcy5MaW5rU2hhcGUpID0+IGludGVyZmFjZXMuTGlua1NoYXBlXHJcbiAgICBwdWJsaWMgc3Ryb2tlV2lkdGg6ICh2YWx1ZT86IG51bWJlcikgPT4gbnVtYmVyXHJcbiAgICBwdWJsaWMgc3Ryb2tlQ29sb3I6ICh2YWx1ZT86IGludGVyZmFjZXMuQ29sb3IpID0+IGludGVyZmFjZXMuQ29sb3JcclxuICAgIHB1YmxpYyBjdXJ2ZW5lc3M6ICh2YWx1ZT86IG51bWJlcikgPT4gbnVtYmVyXHJcbiAgICBwdWJsaWMgZGFzaEludGVydmFsOiAodmFsdWU/OiBudW1iZXIpID0+IG51bWJlclxyXG5cclxuICAgIHB1YmxpYyAkX3NvdXJjZTogTm9kZVxyXG4gICAgcHVibGljICRfdGFyZ2V0OiBOb2RlXHJcblxyXG4gICAgcHJpdmF0ZSAkX2VsZW1lbnRSZXNlcnZlZEtleXMgPSBuZXcgU2V0KFsnc291cmNlJywgJ3RhcmdldCcsICdzdHlsZSddKVxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb3JlLCBsaW5rRGF0YTogaW50ZXJmYWNlcy5MaW5rRGF0YSkge1xyXG4gICAgICAgIHN1cGVyKGNvcmUsIGxpbmtEYXRhLCAvKiB0eXBlOiAqLyAnTGluaycpXHJcblxyXG4gICAgICAgIC8vIHNldCBhdHRyaWJ1dGVzXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbGlua0RhdGEpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLiRfZWxlbWVudFJlc2VydmVkS2V5cy5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kX2F0dHJpYnV0ZXNba2V5XSA9IGxpbmtEYXRhW2tleV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc291cmNlTm9kZSA9IHRoaXMuJF9jb3JlLmdldE5vZGVCeUlkKGxpbmtEYXRhLnNvdXJjZSlcclxuICAgICAgICBjb25zdCB0YXJnZXROb2RlID0gdGhpcy4kX2NvcmUuZ2V0Tm9kZUJ5SWQobGlua0RhdGEudGFyZ2V0KVxyXG4gICAgICAgIHRoaXMuc291cmNlVGFyZ2V0KHtcclxuICAgICAgICAgICAgc291cmNlOiBzb3VyY2VOb2RlLFxyXG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldE5vZGVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0dGVyL3NldHRlciBvZiB0aGUgc291cmNlXHJcbiAgICAgKiBAcGFyYW0ge05vZGV9IFtub2RlXVxyXG4gICAgICogQHJldHVybnMge05vZGV9IGEgc291cmNlIE5vZGUgT2JqZWN0XHJcbiAgICAgKiBAbWVtYmVyb2YgTGlua1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc291cmNlKG5vZGU/OiBOb2RlKTogTm9kZSB7XHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgLy8gc2V0dGVyXHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlVGFyZ2V0KHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogbm9kZSxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy4kX3RhcmdldFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy4kX3NvdXJjZVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0dGVyL3NldHRlciBvZiB0aGUgdGFyZ2V0XHJcbiAgICAgKiBAcGFyYW0ge05vZGV9IFtub2RlXVxyXG4gICAgICogQHJldHVybnMge05vZGV9IGEgdGFyZ2V0IE5vZGUgT2JqZWN0XHJcbiAgICAgKiBAbWVtYmVyb2YgTGlua1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdGFyZ2V0KG5vZGU/OiBOb2RlKTogTm9kZSB7XHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgLy8gc2V0dGVyXHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlVGFyZ2V0KHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogdGhpcy4kX3NvdXJjZSxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogbm9kZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy4kX3RhcmdldFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0dGVyL3NldHRlciBvZiBzb3VyY2UgYW5kIHRhcmdldFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c291cmNlVGFyZ2V0T2JqfSBbe3NvdXJjZTogTm9kZSwgdGFyZ2V0OiBOb2RlfV1cclxuICAgICAqIEByZXR1cm5zIE9iamVjdCB7c291cmNlOiBOb2RlLCB0YXJnZXQ6IE5vZGV9XHJcbiAgICAgKiBAbWVtYmVyb2YgTGlua1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc291cmNlVGFyZ2V0KHNvdXJjZVRhcmdldE9iaj86IHsgc291cmNlOiBOb2RlOyB0YXJnZXQ6IE5vZGUgfSkge1xyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBvbGRTb3VyY2U6IE5vZGUgPSB0aGlzLiRfc291cmNlXHJcbiAgICAgICAgICAgIGNvbnN0IG9sZFRhcmdldDogTm9kZSA9IHRoaXMuJF90YXJnZXRcclxuICAgICAgICAgICAgY29uc3QgbmV3U291cmNlID0gc291cmNlVGFyZ2V0T2JqLnNvdXJjZVxyXG4gICAgICAgICAgICBjb25zdCBuZXdUYXJnZXQgPSBzb3VyY2VUYXJnZXRPYmoudGFyZ2V0XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1NvdXJjZUlkID0gbmV3U291cmNlLiRfaWRcclxuICAgICAgICAgICAgY29uc3QgbmV3VGFyZ2V0SWQgPSBuZXdUYXJnZXQuJF9pZFxyXG5cclxuICAgICAgICAgICAgaWYgKG5ld1NvdXJjZSA9PT0gbmV3VGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBlcnJvcjogc2VsZiBsb29wXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFNlbGYgbG9vcCAoJHtuZXdTb3VyY2VJZH0gPD0+ICR7bmV3VGFyZ2V0SWR9KSBpcyBub3QgYWxsb3dlZC5gKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy4kX2NvcmUuJF9lbmRzMmxpbmsuaGFzKFtuZXdTb3VyY2VJZCwgbmV3VGFyZ2V0SWRdKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gZXJyb3I6IG11bHRpcGxlIGxpbmtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgbGluayAoJHtuZXdTb3VyY2VJZH0gPD0+ICR7bmV3VGFyZ2V0SWR9KSBpcyBub3QgYWxsb3dkLmApXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChvbGRTb3VyY2UgJiYgb2xkVGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBkZWxldGUgb2xkIE1hcFxyXG4gICAgICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9lbmRzMmxpbmsuZGVsZXRlKFtvbGRTb3VyY2UuJF9pZCwgb2xkVGFyZ2V0LiRfaWRdKVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfc291cmNlSWQybGlua3MuZ2V0KG9sZFNvdXJjZS4kX2lkKT8uZGVsZXRlKHRoaXMpXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRfY29yZS4kX3RhcmdldElkMmxpbmtzLmdldChvbGRUYXJnZXQuJF9pZCk/LmRlbGV0ZSh0aGlzKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLiRfc291cmNlID0gbmV3U291cmNlXHJcbiAgICAgICAgICAgIHRoaXMuJF90YXJnZXQgPSBuZXdUYXJnZXRcclxuICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9lbmRzMmxpbmsuc2V0KFtuZXdTb3VyY2VJZCwgbmV3VGFyZ2V0SWRdLCB0aGlzKVxyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLiRfY29yZS4kX3NvdXJjZUlkMmxpbmtzLmhhcyhuZXdTb3VyY2VJZCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfc291cmNlSWQybGlua3Muc2V0KG5ld1NvdXJjZUlkLCBuZXcgU2V0KFt0aGlzXSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRfY29yZS4kX3NvdXJjZUlkMmxpbmtzLmdldChuZXdTb3VyY2VJZCkuYWRkKHRoaXMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLiRfY29yZS4kX3RhcmdldElkMmxpbmtzLmhhcyhuZXdUYXJnZXRJZCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfdGFyZ2V0SWQybGlua3Muc2V0KG5ld1RhcmdldElkLCBuZXcgU2V0KFt0aGlzXSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRfY29yZS4kX3RhcmdldElkMmxpbmtzLmdldChuZXdUYXJnZXRJZCkuYWRkKHRoaXMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc291cmNlOiB0aGlzLiRfc291cmNlLFxyXG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXMuJF90YXJnZXRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgSmlhY2hlbmcgUGFuIDxqYWNraWVhbnhpc0BnbWFpbC5jb20+XHJcbiAqIEBkZXNjcmlwdGlvbiBQcm92aWRlIGEgTm9kZSBjbGFzcy5cclxuICogQGRlcGVuZGVuY2VzIGludGVyZmFjZXMudHMsIHV0aWxzL2lzLnRzXHJcbiAqL1xyXG5cclxuaW1wb3J0ICogYXMgaW50ZXJmYWNlcyBmcm9tICcuLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyBpc1ZhbGlkSWQgfSBmcm9tICcuLi91dGlscy9pcydcclxuaW1wb3J0IHsgTGlua0F0dHIgfSBmcm9tICcuLi9yZW5kZXJlci9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgTGluayBmcm9tICcuL2xpbmsnXHJcbmltcG9ydCBFbGVtZW50IGZyb20gJy4vZWxlbWVudCdcclxuXHJcbmNsYXNzIE5vZGUgZXh0ZW5kcyBFbGVtZW50IHtcclxuICAgIC8vIHN0eWxlIGdldHRlci9zZXR0ZXJcclxuICAgIHB1YmxpYyBzaGFwZTogKHZhbHVlPzogaW50ZXJmYWNlcy5Ob2RlU2hhcGUpID0+IGludGVyZmFjZXMuTm9kZVNoYXBlXHJcbiAgICBwdWJsaWMgb2Zmc2V0OiAodmFsdWU/OiBpbnRlcmZhY2VzLlBvc2l0aW9uKSA9PiBpbnRlcmZhY2VzLlBvc2l0aW9uXHJcbiAgICBwdWJsaWMgc3Ryb2tlV2lkdGg6ICh2YWx1ZT86IG51bWJlcikgPT4gbnVtYmVyXHJcbiAgICBwdWJsaWMgc3Ryb2tlQ29sb3I6ICh2YWx1ZT86IGludGVyZmFjZXMuQ29sb3IpID0+IGludGVyZmFjZXMuQ29sb3JcclxuICAgIHB1YmxpYyBmaWxsOiAodmFsdWU/OiBpbnRlcmZhY2VzLkNvbG9yKSA9PiBpbnRlcmZhY2VzLkNvbG9yXHJcbiAgICAvKiBjaXJjbGUgc2hhcGUgc3R5bGVzICovXHJcbiAgICBwdWJsaWMgcj86ICh2YWx1ZT86IG51bWJlcikgPT4gbnVtYmVyXHJcbiAgICAvKiByZWN0IHNoYXBlIHN0eWxlcyAqL1xyXG4gICAgcHVibGljIHdpZHRoPzogKHZhbHVlPzogbnVtYmVyKSA9PiBudW1iZXIgLy8gYWxzbyBmb3IgY3Jvc3Mgc2hhcGVcclxuICAgIHB1YmxpYyBoZWlnaHQ/OiAodmFsdWU/OiBudW1iZXIpID0+IG51bWJlciAvLyBhbHNvIGZvciBjcm9zcyBzaGFwZVxyXG4gICAgcHVibGljIHJvdGF0ZT86ICh2YWx1ZT86IG51bWJlcikgPT4gbnVtYmVyXHJcbiAgICAvKiB0cmlhbmdsZSBzaGFwZSBzdHlsZXMgKi9cclxuICAgIHB1YmxpYyB2ZXJ0ZXhBbHBoYTogKHZhbHVlPzogaW50ZXJmYWNlcy5Qb3NpdGlvbikgPT4gaW50ZXJmYWNlcy5Qb3NpdGlvblxyXG4gICAgcHVibGljIHZlcnRleEJldGE6ICh2YWx1ZT86IGludGVyZmFjZXMuUG9zaXRpb24pID0+IGludGVyZmFjZXMuUG9zaXRpb25cclxuICAgIHB1YmxpYyB2ZXJ0ZXhHYW1tYTogKHZhbHVlPzogaW50ZXJmYWNlcy5Qb3NpdGlvbikgPT4gaW50ZXJmYWNlcy5Qb3NpdGlvblxyXG4gICAgLyogY3Jvc3Mgc2hhcGUgc3R5bGVzICovXHJcbiAgICBwdWJsaWMgaW5uZXJIZWlnaHQ6ICh2YWx1ZT86IG51bWJlcikgPT4gbnVtYmVyXHJcbiAgICBwdWJsaWMgaW5uZXJXaWR0aDogKHZhbHVlPzogbnVtYmVyKSA9PiBudW1iZXJcclxuXHJcbiAgICBwdWJsaWMgJF9wb3NpdGlvbiA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgJF9kcmFnc3RhcnRDYWxsYmFja1NldDogU2V0PChlOiBhbnkpID0+IHZvaWQ+ID0gbmV3IFNldCgpXHJcbiAgICBwdWJsaWMgJF9kcmFnZ2luZ0NhbGxiYWNrU2V0OiBTZXQ8KGU6IGFueSkgPT4gdm9pZD4gPSBuZXcgU2V0KClcclxuICAgIHB1YmxpYyAkX2RyYWdlbmRDYWxsYmFja1NldDogU2V0PChlOiBhbnkpID0+IHZvaWQ+ID0gbmV3IFNldCgpXHJcblxyXG4gICAgcHVibGljICRfaWQ6IHN0cmluZ1xyXG5cclxuICAgIHByaXZhdGUgJF9lbGVtZW50UmVzZXJ2ZWRLZXlzID0gbmV3IFNldChbJ2lkJywgJ3gnLCAneScsICdzdHlsZSddKVxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb3JlLCBub2RlRGF0YTogaW50ZXJmYWNlcy5Ob2RlRGF0YSkge1xyXG4gICAgICAgIHN1cGVyKGNvcmUsIG5vZGVEYXRhLCAvKiB0eXBlOiAqLyAnTm9kZScpXHJcblxyXG4gICAgICAgIC8vIHNldCBhdHRyaWJ1dGVzXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbm9kZURhdGEpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLiRfZWxlbWVudFJlc2VydmVkS2V5cy5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kX2F0dHJpYnV0ZXNba2V5XSA9IG5vZGVEYXRhW2tleV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgLi4ue1xyXG4gICAgICAgICAgICAgICAgeDogdGhpcy4kX3Bvc2l0aW9uLngsXHJcbiAgICAgICAgICAgICAgICB5OiB0aGlzLiRfcG9zaXRpb24ueVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAuLi5ub2RlRGF0YVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kX3NldElkKGRhdGEuaWQpXHJcbiAgICAgICAgdGhpcy4kX3Bvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICB4OiBkYXRhLngsXHJcbiAgICAgICAgICAgIHk6IGRhdGEueVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldHRlciBvZiBwcml2YXRlIHByb3BlcnR5ICRfaWRcclxuICAgICAqIEBtZW1iZXJvZiBOb2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kX2lkXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXQgbmVpZ2hib3Igbm9kZXMgZm9yIGN1cnJlbnQgbm9kZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbmVpZ2hib3JOb2RlcygpIHtcclxuICAgICAgICAvLyBOT1RFOiBjdXJyZW50bHkgQVBJIG5vdCBpbnRlbnQgdG8gc3VwcG9ydCBkaXJlY3RlZCBncmFwaFxyXG4gICAgICAgIGxldCBzb3VyY2VMaW5rcyA9IHRoaXMuJF9jb3JlLiRfc291cmNlSWQybGlua3MuZ2V0KHRoaXMuJF9pZClcclxuICAgICAgICBpZiAoIXNvdXJjZUxpbmtzKSBzb3VyY2VMaW5rcyA9IG5ldyBTZXQoKVxyXG4gICAgICAgIGxldCB0YXJnZXRMaW5rcyA9IHRoaXMuJF9jb3JlLiRfdGFyZ2V0SWQybGlua3MuZ2V0KHRoaXMuJF9pZClcclxuICAgICAgICBpZiAoIXRhcmdldExpbmtzKSB0YXJnZXRMaW5rcyA9IG5ldyBTZXQoKVxyXG5cclxuICAgICAgICBjb25zdCBub2RlU2V0ID0gbmV3IFNldChbXHJcbiAgICAgICAgICAgIC4uLlsuLi5zb3VyY2VMaW5rc10ubWFwKChsaW5rKSA9PiBsaW5rLiRfdGFyZ2V0KSxcclxuICAgICAgICAgICAgLi4uWy4uLnRhcmdldExpbmtzXS5tYXAoKGxpbmspID0+IGxpbmsuJF9zb3VyY2UpXHJcbiAgICAgICAgXSlcclxuXHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20obm9kZVNldClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldCBuZWlnaGJvciBsaW5rcyBmb3IgY3VycmVudCBub2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBuZWlnaGJvckxpbmtzKCkge1xyXG4gICAgICAgIC8vIE5PVEU6IGN1cnJlbnRseSBBUEkgbm90IGludGVudCB0byBzdXBwb3J0IGRpcmVjdGVkIGdyYXBoXHJcbiAgICAgICAgbGV0IHNvdXJjZUxpbmtzID0gdGhpcy4kX2NvcmUuJF9zb3VyY2VJZDJsaW5rcy5nZXQodGhpcy4kX2lkKVxyXG4gICAgICAgIGlmICghc291cmNlTGlua3MpIHNvdXJjZUxpbmtzID0gbmV3IFNldCgpXHJcbiAgICAgICAgbGV0IHRhcmdldExpbmtzID0gdGhpcy4kX2NvcmUuJF90YXJnZXRJZDJsaW5rcy5nZXQodGhpcy4kX2lkKVxyXG4gICAgICAgIGlmICghdGFyZ2V0TGlua3MpIHRhcmdldExpbmtzID0gbmV3IFNldCgpXHJcblxyXG4gICAgICAgIGNvbnN0IGxpbmtTZXQgPSBuZXcgU2V0KFsuLi5zb3VyY2VMaW5rcywgLi4udGFyZ2V0TGlua3NdKVxyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGxpbmtTZXQpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQvZ2V0IHggcG9zdGlvblxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFt2YWx1ZV1cclxuICAgICAqIEBtZW1iZXJvZiBOb2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB4KHZhbHVlPzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24oe1xyXG4gICAgICAgICAgICAgICAgeDogdmFsdWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9wb3NpdGlvbi54XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQvZ2V0IHkgcG9zdGlvblxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFt2YWx1ZV1cclxuICAgICAqIEBtZW1iZXJvZiBOb2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB5KHZhbHVlPzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24oe1xyXG4gICAgICAgICAgICAgICAgeTogdmFsdWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9wb3NpdGlvbi55XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQvZ2V0IHBvc3Rpb25cclxuICAgICAqIEBtZW1iZXJvZiBOb2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3NpdGlvbihwb3NpdGlvbj86IGludGVyZmFjZXMuUG9zaXRpb24pIHtcclxuICAgICAgICBsZXQgbGlua1NldHMgPSB7fVxyXG5cclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgKCd4JyBpbiBwb3NpdGlvbiB8fCAneScgaW4gcG9zaXRpb24pKSB7XHJcbiAgICAgICAgICAgIGlmICgneCcgaW4gcG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJF9wb3NpdGlvblsneCddID0gcG9zaXRpb24ueFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgneScgaW4gcG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJF9wb3NpdGlvblsneSddID0gcG9zaXRpb24ueVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy4kX2NvcmUuJF9yZW5kZXJlci5zaG91bGRMYXp5VXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kX3Bvc2l0aW9uXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsaW5rU2V0cyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmaW5kIGxpbmtzIGZyb20vdG8gdGhpcyBub2RlXHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiB0aGlzLiRfY29yZS4kX3NvdXJjZUlkMmxpbmtzLmdldCh0aGlzLiRfaWQpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy4kX2NvcmUuJF90YXJnZXRJZDJsaW5rcy5nZXQodGhpcy4kX2lkKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGxpbmtTZXRzKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVudHJ5WzBdOiAnc291cmNlJyAvICd0YXJnZXQnXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZW50cnlbMV06IHRoZSBsaW5rIHNldFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVudHJ5WzBdIGFzIExpbmtBdHRyXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2V0ID0gZW50cnlbMV0gYXMgU2V0PExpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRfY29yZS4kX3JlbmRlcmVyLmluY3JlYXNlTW9kaWZpZWRFbGVtZW50c0NvdW50Qnkoc2V0LnNpemUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbGluayBvZiBzZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfcmVuZGVyZXIubGlua01hbmFnZXIuY2hhbmdlQXR0cmlidXRlKGxpbmssIGtleSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9yZW5kZXJlci5pbmNyZWFzZU1vZGlmaWVkRWxlbWVudHNDb3VudEJ5KDEpXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRfY29yZS4kX3JlbmRlcmVyLm5vZGVNYW5hZ2VyLmNoYW5nZUF0dHJpYnV0ZSh0aGlzLCAncG9zaXRpb24nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy4kX3Bvc2l0aW9uXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQgdGhlIGlkIG9mIHRoaXMgbm9kZS5cclxuICAgICAqIGl0IGlzIG9ubHkgdXNlZCBmb3IgY29uc3RydWN0b3JcclxuICAgICAqIGJlY2F1c2UgYSBub2RlJ3MgaWQgaXMgbm90IGFsbG93ZWQgdG8gYmUgY2hhbmdlZC5cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcclxuICAgICAqIEByZXR1cm5zIG5vdGhpbmdcclxuICAgICAqIEBtZW1iZXJvZiBOb2RlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgJF9zZXRJZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKGlzVmFsaWRJZCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuJF9jb3JlLiRfaWQybm9kZS5oYXModmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYER1cGxpY2F0ZSBub2RlICgke3ZhbHVlfSkgaXMgbm90IGFsbG93ZWQuYClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZElkKHRoaXMuJF9pZCkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG5vdCBjaGFuZ2UgdGhlIGlkIG9mIGFuIGV4aXN0IG5vZGUuJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiRfY29yZS4kX2lkMm5vZGUuc2V0KHZhbHVlLCB0aGlzKVxyXG4gICAgICAgICAgICB0aGlzLiRfaWQgPSB2YWx1ZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBJRCAke3ZhbHVlfWApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb2RlXHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIEppYWNoZW5nIFBhbiA8amFja2llYW54aXNAZ21haWwuY29tPlxyXG4gKiBAZGVzY3JpcHRpb24gUHJvdmlkZSB0aGUgZW50cmFuY2Ugb2YgTmV0Vi5qcy5cclxuICogQGRlcGVuZGVuY2VzIGludGVyZmFjZXMudHMsIHV0aWxzL21hcDIuanMsIG5vZGUudHMsIGxpbmsudHNcclxuICovXHJcblxyXG5pbXBvcnQgKiBhcyBpbnRlcmZhY2VzIGZyb20gJy4vaW50ZXJmYWNlcydcclxuaW1wb3J0IE1hcDIgZnJvbSAnLi91dGlscy9tYXAyJ1xyXG5pbXBvcnQgTm9kZSBmcm9tICcuL2VsZW1lbnRzL25vZGUnXHJcbmltcG9ydCBMaW5rIGZyb20gJy4vZWxlbWVudHMvbGluaydcclxuaW1wb3J0ICogYXMgZGVmYXVsdENvbmZpZ3MgZnJvbSAnLi9jb25maWdzJ1xyXG5pbXBvcnQgKiBhcyBkYXRhc2V0IGZyb20gJy4vZGF0YXNldCdcclxuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuL3JlbmRlcmVyJ1xyXG5pbXBvcnQgeyBJbnRlcmFjdGlvbk1hbmFnZXIgfSBmcm9tICcuL2ludGVyYWN0aW9uL2ludGVyYWN0aW9uJ1xyXG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzL3V0aWxzJ1xyXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4vaW50ZXJmYWNlcydcclxuaW1wb3J0IHsgRU1QVFlfRlVOQ1RJT04gfSBmcm9tICcuL3V0aWxzL2NvbnN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV0ViB7XHJcbiAgICBwdWJsaWMgc3RhdGljIFV0aWxzID0gVXRpbHNcclxuXHJcbiAgICBwdWJsaWMgJF9pZDJub2RlID0gbmV3IE1hcCgpXHJcbiAgICBwdWJsaWMgJF9lbmRzMmxpbmsgPSBuZXcgTWFwMigpXHJcbiAgICBwdWJsaWMgJF9zb3VyY2VJZDJsaW5rczogTWFwPHN0cmluZywgU2V0PExpbms+PiA9IG5ldyBNYXAoKVxyXG4gICAgcHVibGljICRfdGFyZ2V0SWQybGlua3M6IE1hcDxzdHJpbmcsIFNldDxMaW5rPj4gPSBuZXcgTWFwKClcclxuICAgIHB1YmxpYyAkX2NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnRcclxuICAgIHB1YmxpYyAkX2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnRcclxuICAgIHB1YmxpYyAkX3JlbmRlcmVyOiBSZW5kZXJlclxyXG4gICAgcHVibGljICRfY29uZmlncyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGVmYXVsdENvbmZpZ3MpKSAvLyBOT1RFOiBkZWVwIGNvcHkgY29uZmlnc1xyXG5cclxuICAgIHB1YmxpYyAkX3RyYW5zZm9ybTogaW50ZXJmYWNlcy5UcmFuc2Zvcm0gPSB7IHg6IDAsIHk6IDAsIGs6IDEgfVxyXG5cclxuICAgIHB1YmxpYyAkX2xhenlVcGRhdGUgPSBmYWxzZSAvLyBmbGFnIHRvIGNvbnRyb2wgbGF6eSB1cGRhdGVcclxuXHJcbiAgICBwdWJsaWMgJF9pbnRlcmFjdGlvbk1hbmFnZXI6IEludGVyYWN0aW9uTWFuYWdlclxyXG4gICAgcHJpdmF0ZSAkX2RhdGE6IGludGVyZmFjZXMuTm9kZUxpbmtEYXRhID0geyBub2RlczogW10sIGxpbmtzOiBbXSB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gY3JlYXRlIE5ldFYgb2JqZWN0LlxyXG4gICAgICogQHBhcmFtIGNvbmZpZ3MgY29uZmlndXJhdGlvbnMgb2YgTmV0ViwgbXVzdCBpbmNsdWRlIGEgYGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnRgIHRlcm1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZ3M6IGFueSkge1xyXG4gICAgICAgIGlmICghKCdjb250YWluZXInIGluIGNvbmZpZ3MpIHx8IGNvbmZpZ3MuY29udGFpbmVyLnRhZ05hbWUgIT09ICdESVYnKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdDb250YWluZXIgc2hvdWxkIGJlIHNwZWNpZmllZCBhcyBhIGRpdiBlbGVtZW50IScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuJF9jb250YWluZXIgPSBjb25maWdzLmNvbnRhaW5lclxyXG5cclxuICAgICAgICB0aGlzLiRfY29uZmlncyA9IFV0aWxzLm92ZXJyaWRlKHRoaXMuJF9jb25maWdzLCBjb25maWdzKVxyXG4gICAgICAgIGRlbGV0ZSB0aGlzLiRfY29uZmlnc1snY29udGFpbmVyJ11cclxuXHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykgLy8gVE9ETzogY29uc2lkZXIgbm9kZSBlbnZpcm9tZW50LCBkb2N1bWVudCBub3QgZGVmaW5lZFxyXG4gICAgICAgIGNvbnN0IHBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxXHJcbiAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gdGhpcy4kX2NvbmZpZ3Mud2lkdGggKyAncHgnXHJcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IHRoaXMuJF9jb25maWdzLmhlaWdodCArICdweCdcclxuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIFN0cmluZyh0aGlzLiRfY29uZmlncy53aWR0aCAqIHBpeGVsUmF0aW8pKVxyXG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIFN0cmluZyh0aGlzLiRfY29uZmlncy5oZWlnaHQgKiBwaXhlbFJhdGlvKSlcclxuICAgICAgICB0aGlzLiRfY29udGFpbmVyLmFwcGVuZENoaWxkKGNhbnZhcylcclxuICAgICAgICB0aGlzLiRfY2FudmFzID0gY2FudmFzXHJcblxyXG4gICAgICAgIHRoaXMuJF9yZW5kZXJlciA9IG5ldyBSZW5kZXJlcih7XHJcbiAgICAgICAgICAgIGNhbnZhcyxcclxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuJF9jb25maWdzLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuJF9jb25maWdzLmhlaWdodCxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLiRfY29uZmlncy5iYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgICAgIG5vZGVMaW1pdDogdGhpcy4kX2NvbmZpZ3Mubm9kZUxpbWl0LFxyXG4gICAgICAgICAgICBsaW5rTGltaXQ6IHRoaXMuJF9jb25maWdzLmxpbmtMaW1pdCxcclxuICAgICAgICAgICAgZ2V0QWxsTm9kZXM6IHRoaXMubm9kZXMuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgZ2V0QWxsTGlua3M6IHRoaXMubGlua3MuYmluZCh0aGlzKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuJF9pbnRlcmFjdGlvbk1hbmFnZXIgPSBuZXcgSW50ZXJhY3Rpb25NYW5hZ2VyKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXQvc2V0IGNhbnZhcydzIGJhY2tncm91bmQgY29sb3JcclxuICAgICAqIEBwYXJhbSBjb2xvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYmFja2dyb3VuZENvbG9yKGNvbG9yPzogaW50ZXJmYWNlcy5Db2xvcikge1xyXG4gICAgICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgICAgICB0aGlzLiRfY29uZmlncy5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvclxyXG4gICAgICAgICAgICB0aGlzLiRfcmVuZGVyZXIuc2V0QmFja2dyb3VuZENvbG9yKGNvbG9yKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy4kX2NvbmZpZ3MuYmFja2dyb3VuZENvbG9yXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gZGF0YSBnZXR0ZXIgc2V0dGVyXHJcbiAgICAgKiBAcGFyYW0gbm9kZUxpbmtEYXRhPyB0aGUgbm9kZS1saW5rLWRhdGEgb2YgYSBncmFwaCwgcHJvdmlkZWQ/c2V0dGVyOmdldHRlcjtcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRhdGEobm9kZUxpbmtEYXRhPzogaW50ZXJmYWNlcy5Ob2RlTGlua0RhdGEpIHtcclxuICAgICAgICBpZiAobm9kZUxpbmtEYXRhID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJF9kYXRhXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gZGVsZXRlIG9sZCBkYXRhXHJcbiAgICAgICAgICAgIHRoaXMuJF9kYXRhID0geyAuLi50aGlzLiRfZGF0YSwgLi4ubm9kZUxpbmtEYXRhIH1cclxuICAgICAgICAgICAgdGhpcy4kX2lkMm5vZGUgPSBuZXcgTWFwKClcclxuICAgICAgICAgICAgdGhpcy4kX2VuZHMybGluayA9IG5ldyBNYXAyKClcclxuICAgICAgICAgICAgdGhpcy4kX3NvdXJjZUlkMmxpbmtzID0gbmV3IE1hcCgpXHJcbiAgICAgICAgICAgIHRoaXMuJF90YXJnZXRJZDJsaW5rcyA9IG5ldyBNYXAoKVxyXG5cclxuICAgICAgICAgICAgdGhpcy4kX3JlbmRlcmVyLmNsZWFyRGF0YSgpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZE5vZGVzKHRoaXMuJF9kYXRhLm5vZGVzKVxyXG4gICAgICAgICAgICB0aGlzLmFkZExpbmtzKHRoaXMuJF9kYXRhLmxpbmtzKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBpbml0aWFsaXplIGFuZCBhZGQgYSBub2RlXHJcbiAgICAgKiBAcGFyYW0gbm9kZURhdGEgdGhlIGRhdGEgb2YgYSBub2RlLCBpbmNsdWRlIGlkLCBzdHlsZXMuLi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZE5vZGUobm9kZURhdGE6IGludGVyZmFjZXMuTm9kZURhdGEpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hZGROb2Rlcyhbbm9kZURhdGFdKVswXVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIGluaXRpYWxpemUgYW5kIGFkZCBhIGxpbmtcclxuICAgICAqIEBwYXJhbSBsaW5rRGF0YSB0aGUgZGF0YSBvZiBhIGxpbmssIGluY2x1ZGUgc291cmNlLCB0YXJnZXQsIGFuZCBzdHlsZXMuLi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZExpbmsobGlua0RhdGE6IGludGVyZmFjZXMuTGlua0RhdGEpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hZGRMaW5rcyhbbGlua0RhdGFdKVswXVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIGluaXRpYWxpemUgYW5kIGFkZCBhbiBhcnJheSBvZiBub2Rlcy5cclxuICAgICAqIEBwYXJhbSB7aW50ZXJmYWNlcy5Ob2RlRGF0YVtdfSBub2Rlc0RhdGE6IGEgZGF0YSBhcnJheSBvZiBub2RlcyB0b2JlIGFkZGVkXHJcbiAgICAgKiBAbWVtYmVyb2YgTmV0VlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkTm9kZXMobm9kZXNEYXRhOiBpbnRlcmZhY2VzLk5vZGVEYXRhW10pIHtcclxuICAgICAgICBjb25zdCBuZXdOb2RlcyA9IG5vZGVzRGF0YS5tYXAoKG5vZGVEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIG5vZGVEYXRhLmlkID0gbm9kZURhdGEuaWQudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICBjb25zdCBub2RlID0gbmV3IE5vZGUodGhpcywgbm9kZURhdGEpXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbm9kZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy4kX3JlbmRlcmVyLmFkZE5vZGVzKG5ld05vZGVzKVxyXG4gICAgICAgIHJldHVybiBuZXdOb2Rlc1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIGluaXRpYWxpemUgYW5kIGFkZCBhbiBhcnJheSBvZiBsaW5rcy5cclxuICAgICAqIEBwYXJhbSB7aW50ZXJmYWNlcy5MaW5rRGF0YVtdfSBsaW5rc0RhdGE6IGEgZGF0YSBhcnJheSBvZiBsaW5rcyB0b2JlIGFkZGVkXHJcbiAgICAgKiBAbWVtYmVyb2YgTmV0VlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkTGlua3MobGlua3NEYXRhOiBpbnRlcmZhY2VzLkxpbmtEYXRhW10pIHtcclxuICAgICAgICBjb25zdCBuZXdMaW5rcyA9IG5ldyBBcnJheShsaW5rc0RhdGEubGVuZ3RoKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlua3NEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmtEYXRhID0gbGlua3NEYXRhW2ldXHJcbiAgICAgICAgICAgIGxpbmtEYXRhLnNvdXJjZSA9IGxpbmtEYXRhLnNvdXJjZS50b1N0cmluZygpXHJcbiAgICAgICAgICAgIGxpbmtEYXRhLnRhcmdldCA9IGxpbmtEYXRhLnRhcmdldC50b1N0cmluZygpXHJcblxyXG4gICAgICAgICAgICBjb25zdCBsaW5rID0gbmV3IExpbmsodGhpcywgbGlua0RhdGEpXHJcbiAgICAgICAgICAgIG5ld0xpbmtzW2ldID0gbGlua1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiRfcmVuZGVyZXIuYWRkTGlua3MoWy4uLnRoaXMuJF9lbmRzMmxpbmsudmFsdWVzKCldKSAvLyBOT1RFOiBwcmVzZXJ2ZSBsaW5rIG9yZGVyLCBub3QgZWxlZ2FudFxyXG4gICAgICAgIHJldHVybiBuZXdMaW5rc1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIGdldCBhIE5vZGUgb2JqZWN0IGZyb20gdGhlIGlkMm5vZGUgTWFwIGRhdGEgc3RydWN0dXJlXHJcbiAgICAgKiBAcGFyYW0gaWQgbm9kZSBpZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Tm9kZUJ5SWQoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRfaWQybm9kZS5nZXQoaWQpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gZ2V0IGEgTGluayBvYmplY3QgZnJvbSB0aGUgZW5kczJsaW5rIE1hcDIgZGF0YSBzdHJ1Y3R1cmVcclxuICAgICAqIEBwYXJhbSBlbmRJZDEgb25lIGVuZCBpZCBvZiB0aGUgbGluayAoc291cmNlIG9yIHRhcmdldClcclxuICAgICAqIEBwYXJhbSBlbmRJZDIgYW5vdGhlciBlbmQgaWQgb2YgdGhlIGxpbmsgKHNvdXJjZSBvciB0YXJnZXQpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRMaW5rQnlFbmRzKGVuZElkMTogc3RyaW5nLCBlbmRJZDI6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRfZW5kczJsaW5rLmdldChbZW5kSWQxLCBlbmRJZDJdKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIGdldCBhbGwgbm9kZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIG5vZGVzKCk6IE5vZGVbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLiRfaWQybm9kZS52YWx1ZXMoKV1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBnZXQgYWxsIGxpbmtzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsaW5rcygpOiBMaW5rW10ge1xyXG4gICAgICAgIHJldHVybiBbLi4udGhpcy4kX2VuZHMybGluay52YWx1ZXMoKV1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiB3aXBlIGFsbCB0aGUgZGF0YSBpbiB0aGUgaW5zdGFuY2VcclxuICAgICAqIEBtZW1iZXJvZiBOZXRWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB3aXBlKCkge1xyXG4gICAgICAgIHRoaXMuJF9kYXRhID0gdW5kZWZpbmVkXHJcbiAgICAgICAgdGhpcy4kX2lkMm5vZGUgPSBuZXcgTWFwKClcclxuICAgICAgICB0aGlzLiRfZW5kczJsaW5rID0gbmV3IE1hcDIoKVxyXG4gICAgICAgIHRoaXMuJF9zb3VyY2VJZDJsaW5rcyA9IG5ldyBNYXAoKVxyXG4gICAgICAgIHRoaXMuJF90YXJnZXRJZDJsaW5rcyA9IG5ldyBNYXAoKVxyXG4gICAgICAgIHRoaXMuJF9yZW5kZXJlci5jbGVhckRhdGEoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZGlzcG9zZSBOZXRWIG9iamVjdCwgY2xlYXIgYWxsIHN0dWZmc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICB0aGlzLndpcGUoKVxyXG4gICAgICAgIHRoaXMuJF9yZW5kZXJlci5kaXNwb3NlKClcclxuICAgICAgICB0aGlzLiRfY2FudmFzLnJlbW92ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gcmV0dXJuIGJ1aWxkLWluIGRhdGFzZXQgYWNjb3JkaW5nIHRvIG5hbWVcclxuICAgICAqIEBwYXJhbSBuYW1lIGRhdGFzZXQgbmFtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZERhdGFzZXQobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKG5hbWUgaW4gZGF0YXNldCkgcmV0dXJuIGRhdGFzZXRbbmFtZV1cclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgTmV0ViBkb2VzIG5vdCBoYXZlIGJ1aWxkLWluIGRhdGFzZXQ6ICR7bmFtZX1gKVxyXG4gICAgICAgIHJldHVybiB7IG5vZGVzOiBbXSwgbGlua3M6IFtdIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdpdmVuIHBvc2l0aW9uLCByZXR1cm4gZWxlbWVudCBvbiB0aGlzIHBpeGVsIGlmIGV4aXN0c1xyXG4gICAgICogQHBhcmFtIHggeCBwb3NcclxuICAgICAqIEBwYXJhbSB5IHkgcG9zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRFbGVtZW50QnlQb3NpdGlvbihcclxuICAgICAgICBwb3NpdGlvbjogaW50ZXJmYWNlcy5Qb3NpdGlvblxyXG4gICAgKTogeyB0eXBlOiAnbm9kZScgfCAnbGluayc7IGVsZW1lbnQ6IE5vZGUgfCBMaW5rIH0gfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy4kX3JlbmRlcmVyLmdldElkQnlQb3NpdGlvbihwb3NpdGlvbilcclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGVCeUlkKGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9kZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogbm9kZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGlkKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGluayA9IHRoaXMuZ2V0TGlua0J5RW5kcyhpZFswXSwgaWRbMV0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5rJyxcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBsaW5rXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gZHJhdyBlbGVtZW50c1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZHJhdygpIHtcclxuICAgICAgICB0aGlzLiRfcmVuZGVyZXIuZHJhdygpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gdHJhbnNpdGlvbiBiZXR3ZWVuIGRpZmZlcmVudCB0cmFuc2Zvcm1zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0cmFuc2l0aW9uKFxyXG4gICAgICAgIHRyYW5zZm9ybXM6IGludGVyZmFjZXMuVHJhbnNmb3JtW10sXHJcbiAgICAgICAgZHVyYXRpb25zTVM6IG51bWJlcltdLFxyXG4gICAgICAgIGNhbGxiYWNrPzogKGU6IGFueSkgPT4ge31cclxuICAgICkge1xyXG4gICAgICAgIC8vIGludGVycG9sYXRpb25cclxuICAgICAgICBjb25zdCBTVEVQU19QRVJfU0VDT05EID0gNjBcclxuICAgICAgICBjb25zdCBNU19QRVJfU0VDT05EID0gMTAwMFxyXG4gICAgICAgIGNvbnN0IFNURVBTX1BFUl9NUyA9IFNURVBTX1BFUl9TRUNPTkQgLyBNU19QRVJfU0VDT05EXHJcbiAgICAgICAgY29uc3QgTVNfUEVSX1NURVAgPSAxIC8gU1RFUFNfUEVSX01TXHJcbiAgICAgICAgY29uc3QgdHJhbnNpdGlvbkZyb21UcmFuc2Zvcm1zID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID49IHRyYW5zZm9ybXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgVE9UQUxfU1RFUFMgPSBNYXRoLm1heChTVEVQU19QRVJfTVMgKiBkdXJhdGlvbnNNU1tpbmRleF0sIDEpXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1RyYW5zZm9ybSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnRyYW5zZm9ybXNbaW5kZXhdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZGlmZmVyZW5jZSA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHRyYW5zZm9ybXNbaW5kZXggKyAxXS54IC0gdHJhbnNmb3Jtc1tpbmRleF0ueCxcclxuICAgICAgICAgICAgICAgIHk6IHRyYW5zZm9ybXNbaW5kZXggKyAxXS55IC0gdHJhbnNmb3Jtc1tpbmRleF0ueSxcclxuICAgICAgICAgICAgICAgIGs6IHRyYW5zZm9ybXNbaW5kZXggKyAxXS5rIC0gdHJhbnNmb3Jtc1tpbmRleF0ua1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpblRyYW5zbGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHRyYW5zZm9ybXNbaW5kZXhdLngsXHJcbiAgICAgICAgICAgICAgICB5OiB0cmFuc2Zvcm1zW2luZGV4XS55LFxyXG4gICAgICAgICAgICAgICAgazogdHJhbnNmb3Jtc1tpbmRleF0ua1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGVhc2UgPSAoeDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geCAqIHhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgc3RlcCA9IDFcclxuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbmV3VHJhbnNmb3JtLnggPSBvcmlnaW5UcmFuc2xhdGUueCArIGRpZmZlcmVuY2UueCAqIGVhc2Uoc3RlcCAvIFRPVEFMX1NURVBTKVxyXG4gICAgICAgICAgICAgICAgbmV3VHJhbnNmb3JtLnkgPSBvcmlnaW5UcmFuc2xhdGUueSArIGRpZmZlcmVuY2UueSAqIGVhc2Uoc3RlcCAvIFRPVEFMX1NURVBTKVxyXG4gICAgICAgICAgICAgICAgbmV3VHJhbnNmb3JtLmsgPSBvcmlnaW5UcmFuc2xhdGUuayArIGRpZmZlcmVuY2UuayAqIGVhc2Uoc3RlcCAvIFRPVEFMX1NURVBTKVxyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0obmV3VHJhbnNmb3JtKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3KClcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soeyB0cmFuc2Zvcm06IG5ld1RyYW5zZm9ybSB9KVxyXG4gICAgICAgICAgICAgICAgc3RlcCArPSAxXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RlcCA+PSBUT1RBTF9TVEVQUykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoYW5pbWF0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25Gcm9tVHJhbnNmb3JtcyhpbmRleCArIDEpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIE1TX1BFUl9TVEVQKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0cmFuc2l0aW9uRnJvbVRyYW5zZm9ybXMoMClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHBhbiBvbiBjYW52YXMgdG8gZ2V0IGdpdmVuIG5vZGUgY2VudGVyZWRcclxuICAgICAqIEBwYXJhbSBub2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjZW50ZXJPbihub2RlOiBOb2RlKTogaW50ZXJmYWNlcy5UcmFuc2Zvcm0ge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IG5vZGUucG9zaXRpb24oKVxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfaW50ZXJhY3Rpb25NYW5hZ2VyLmNlbnRlclBvc2l0aW9uKHBvcylcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHByb2dtYXRpY2FsbHkgcGFuXHJcbiAgICAgKiBAcGFyYW0geFxyXG4gICAgICogQHBhcmFtIHlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBhbkJ5KHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9pbnRlcmFjdGlvbk1hbmFnZXIucGFuQnkoeCwgeSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHByb2dtYXRpY2FsbHkgem9vbVxyXG4gICAgICogQHBhcmFtIGZhY3RvciB6b29tIGZhY3RvclxyXG4gICAgICogQHBhcmFtIGNlbnRlciBvcHRpb25hbCwgem9vbSBjZW50ZXIgcG9zaXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIHpvb21CeShmYWN0b3I6IG51bWJlciwgY2VudGVyPzogUG9zaXRpb24pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kX2ludGVyYWN0aW9uTWFuYWdlci56b29tQnkoZmFjdG9yLCBjZW50ZXIpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXQvc2V0IG5ldHYncyB0cmFuc2Zvcm1cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBvcHRpb25hbCwgdHJhbnNmb3JtIHRvIHNldFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdHJhbnNmb3JtKHZhbHVlPzogaW50ZXJmYWNlcy5UcmFuc2Zvcm0pIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kX3RyYW5zZm9ybVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiRfdHJhbnNmb3JtID0gdmFsdWVcclxuICAgICAgICB0aGlzLiRfcmVuZGVyZXIuc2V0VHJhbnNmb3JtKHRoaXMuJF90cmFuc2Zvcm0pXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF90cmFuc2Zvcm1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgKiBAbWVtYmVyb2YgTmV0VlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb24oZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiAoZTogYW55KSA9PiBhbnkpIHtcclxuICAgICAgICBpZiAoZXZlbnROYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd6b29tJykge1xyXG4gICAgICAgICAgICB0aGlzLiRfaW50ZXJhY3Rpb25NYW5hZ2VyLm9uWm9vbShjYWxsYmFjayA/IGNhbGxiYWNrIDogRU1QVFlfRlVOQ1RJT04pXHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudE5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3BhbicpIHtcclxuICAgICAgICAgICAgdGhpcy4kX2ludGVyYWN0aW9uTWFuYWdlci5vblBhbihjYWxsYmFjayA/IGNhbGxiYWNrIDogRU1QVFlfRlVOQ1RJT04pXHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudE5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ21vdXNlZG93bicpIHtcclxuICAgICAgICAgICAgdGhpcy4kX2ludGVyYWN0aW9uTWFuYWdlci5vbk1vdXNlZG93bihjYWxsYmFjayA/IGNhbGxiYWNrIDogRU1QVFlfRlVOQ1RJT04pXHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudE5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ21vdXNldXAnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9pbnRlcmFjdGlvbk1hbmFnZXIub25Nb3VzZXVwKGNhbGxiYWNrID8gY2FsbGJhY2sgOiBFTVBUWV9GVU5DVElPTilcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50TmFtZS50b0xvd2VyQ2FzZSgpID09PSAnY2xpY2snKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9pbnRlcmFjdGlvbk1hbmFnZXIub25DbGljayhjYWxsYmFjayA/IGNhbGxiYWNrIDogRU1QVFlfRlVOQ1RJT04pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIHR1cm4gb2ZmIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE5ldFZcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9mZihldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s/OiAoZTogYW55KSA9PiBhbnkpIHtcclxuICAgICAgICBpZiAoZXZlbnROYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd6b29tJykge1xyXG4gICAgICAgICAgICB0aGlzLiRfaW50ZXJhY3Rpb25NYW5hZ2VyLm9mZlpvb20oY2FsbGJhY2sgPyBjYWxsYmFjayA6IEVNUFRZX0ZVTkNUSU9OKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnROYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdwYW4nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9pbnRlcmFjdGlvbk1hbmFnZXIub2ZmUGFuKGNhbGxiYWNrID8gY2FsbGJhY2sgOiBFTVBUWV9GVU5DVElPTilcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50TmFtZS50b0xvd2VyQ2FzZSgpID09PSAnbW91c2Vkb3duJykge1xyXG4gICAgICAgICAgICB0aGlzLiRfaW50ZXJhY3Rpb25NYW5hZ2VyLm9mZk1vdXNlZG93bihjYWxsYmFjayA/IGNhbGxiYWNrIDogRU1QVFlfRlVOQ1RJT04pXHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudE5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ21vdXNldXAnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9pbnRlcmFjdGlvbk1hbmFnZXIub2ZmTW91c2V1cChjYWxsYmFjayA/IGNhbGxiYWNrIDogRU1QVFlfRlVOQ1RJT04pXHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudE5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2NsaWNrJykge1xyXG4gICAgICAgICAgICB0aGlzLiRfaW50ZXJhY3Rpb25NYW5hZ2VyLm9mZkNsaWNrKGNhbGxiYWNrID8gY2FsbGJhY2sgOiBFTVBUWV9GVU5DVElPTilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIC8vIHRvIGVuc3VyZSB3aW5kb3cuTmV0ViB3aWxsIG5vdCByZXBvcnQgdHMgZXJyb3JcclxuICAgIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgICAgIE5ldFY6IGFueVxyXG4gICAgfVxyXG59XHJcblxyXG53aW5kb3cuTmV0ViA9IE5ldFZcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XHJcbiAqIEBkZXNjcmlwdGlvbiBoYW5kbGUgYWxsIGludGVyYWN0aW9uIGluIE5ldFZcclxuICovXHJcblxyXG5pbXBvcnQgTmV0ViBmcm9tICcuLi9pbmRleCdcclxuaW1wb3J0IE5vZGUgZnJvbSAnLi4vZWxlbWVudHMvbm9kZSdcclxuaW1wb3J0IEVsZW1lbnQgZnJvbSAnLi4vZWxlbWVudHMvZWxlbWVudCdcclxuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuLi9pbnRlcmZhY2VzJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEludGVyYWN0aW9uTWFuYWdlciB7XHJcbiAgICBwcml2YXRlIG5ldHY6IE5ldFZcclxuICAgIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudFxyXG5cclxuICAgIHByaXZhdGUgaXNab29tTGlzdGVuZWQgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBpc01vdXNlTGlzdGVuZWQgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBtb3VzZUV2ZW50Q2FsbGJhY2tDb3VudCA9IDBcclxuXHJcbiAgICAvLyBtYXAgdXNlciBkZWZpbmVkIGNhbGxiYWNrID0+IGhhbmRsZXJzLCBjYW4gYmUgdXNlIHRvIHJlbW92ZSBsaXN0ZW5lcnNcclxuICAgIHByaXZhdGUgem9vbUNhbGxiYWNrU2V0OiBTZXQ8KGU6IGFueSkgPT4gYW55PlxyXG4gICAgcHJpdmF0ZSBwYW5DYWxsYmFja1NldDogU2V0PChlOiBhbnkpID0+IGFueT5cclxuICAgIHByaXZhdGUgY2xpY2tDYWxsYmFja1NldDogU2V0PChlOiBhbnkpID0+IGFueT5cclxuICAgIHByaXZhdGUgbW91c2Vkb3duQ2FsbGJhY2tTZXQ6IFNldDwoZTogYW55KSA9PiBhbnk+XHJcbiAgICBwcml2YXRlIG1vdXNldXBDYWxsYmFja1NldDogU2V0PChlOiBhbnkpID0+IGFueT5cclxuXHJcbiAgICBwcml2YXRlIGlzTW91c2VEb3duID0gZmFsc2VcclxuICAgIHByaXZhdGUgaXNNb3VzZU1vdmUgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBtb3VzZURvd25FbGVtZW50XHJcbiAgICBwcml2YXRlIG1vdXNlTW92ZUVsZW1lbnRcclxuICAgIHByaXZhdGUgbW91c2VEb3duRWxlbWVudE9yaWdpblBvczogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IC8vIE5PVEU6IHJlY29yZCBwb3MsIG9ubHkgc3VwcG9ydCBub2RlJ3MgZHJhZ1xyXG5cclxuICAgIHByaXZhdGUgbW91c2VEb3duUG9zOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cclxuICAgIHByaXZhdGUgZHJhZ1N0YXJ0VHJhbnNmb3JtOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBrOiBudW1iZXIgfVxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihuZXR2OiBOZXRWKSB7XHJcbiAgICAgICAgdGhpcy5uZXR2ID0gbmV0dlxyXG4gICAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5uZXR2LiRfY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpXHJcbiAgICAgICAgdGhpcy56b29tQ2FsbGJhY2tTZXQgPSBuZXcgU2V0KClcclxuICAgICAgICB0aGlzLnBhbkNhbGxiYWNrU2V0ID0gbmV3IFNldCgpXHJcbiAgICAgICAgdGhpcy5jbGlja0NhbGxiYWNrU2V0ID0gbmV3IFNldCgpXHJcbiAgICAgICAgdGhpcy5tb3VzZWRvd25DYWxsYmFja1NldCA9IG5ldyBTZXQoKVxyXG4gICAgICAgIHRoaXMubW91c2V1cENhbGxiYWNrU2V0ID0gbmV3IFNldCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBwcm9nbWF0aWNhbGx5IHBhblxyXG4gICAgICogQHBhcmFtIHhcclxuICAgICAqIEBwYXJhbSB5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwYW5CeSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IG5ld1RyYW5zZm9ybSA9IHsgLi4udGhpcy5uZXR2LiRfdHJhbnNmb3JtIH1cclxuICAgICAgICBuZXdUcmFuc2Zvcm0ueCArPSB4XHJcbiAgICAgICAgbmV3VHJhbnNmb3JtLnkgKz0geVxyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHYudHJhbnNmb3JtKG5ld1RyYW5zZm9ybSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHByb2dtYXRpY2FsbHkgem9vbVxyXG4gICAgICogQHBhcmFtIGZhY3RvciB6b29tIGZhY3RvclxyXG4gICAgICogQHBhcmFtIGNlbnRlciBvcHRpb25hbCwgem9vbSBjZW50ZXIgcG9zaXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIHpvb21CeShmYWN0b3I6IG51bWJlciwgY2VudGVyPzogUG9zaXRpb24pIHtcclxuICAgICAgICBjb25zdCBuZXdUcmFuc2Zvcm0gPSB7IC4uLnRoaXMubmV0di4kX3RyYW5zZm9ybSB9XHJcbiAgICAgICAgbGV0IGNlbnRlclBvcyA9IGNlbnRlclxyXG4gICAgICAgIGlmICghY2VudGVyUG9zKSB7XHJcbiAgICAgICAgICAgIGNlbnRlclBvcyA9IHsgeDogdGhpcy5uZXR2LiRfY29uZmlncy53aWR0aCAvIDIsIHk6IHRoaXMubmV0di4kX2NvbmZpZ3MuaGVpZ2h0IC8gMiB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gY2VudGVyUG9zXHJcblxyXG4gICAgICAgIG5ld1RyYW5zZm9ybS54ID0gKDEgLSBmYWN0b3IpICogeCArIGZhY3RvciAqIG5ld1RyYW5zZm9ybS54XHJcbiAgICAgICAgbmV3VHJhbnNmb3JtLnkgPSAoMSAtIGZhY3RvcikgKiB5ICsgZmFjdG9yICogbmV3VHJhbnNmb3JtLnlcclxuXHJcbiAgICAgICAgbmV3VHJhbnNmb3JtLmsgKj0gZmFjdG9yXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHYudHJhbnNmb3JtKG5ld1RyYW5zZm9ybSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG1vdmUgY3VycmVudCBwb3NpdGlvbiB0byBjZW50ZXIgb2YgY2FudmFzXHJcbiAgICAgKiBAcGFyYW0gcG9zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjZW50ZXJQb3NpdGlvbihwb3M6IFBvc2l0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgbmV3VHJhbnNmb3JtID0geyAuLi50aGlzLm5ldHYuJF90cmFuc2Zvcm0gfVxyXG4gICAgICAgIGNvbnN0IHggPSBwb3MueCAqIG5ld1RyYW5zZm9ybS5rICsgbmV3VHJhbnNmb3JtLnhcclxuICAgICAgICBjb25zdCB5ID0gcG9zLnkgKiBuZXdUcmFuc2Zvcm0uayArIG5ld1RyYW5zZm9ybS55XHJcblxyXG4gICAgICAgIGNvbnN0IGNlbnRlciA9IHtcclxuICAgICAgICAgICAgeDogdGhpcy5uZXR2LiRfY29uZmlncy53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIHk6IHRoaXMubmV0di4kX2NvbmZpZ3MuaGVpZ2h0IC8gMlxyXG4gICAgICAgIH1cclxuICAgICAgICBuZXdUcmFuc2Zvcm0ueCArPSBjZW50ZXIueCAtIHhcclxuICAgICAgICBuZXdUcmFuc2Zvcm0ueSArPSBjZW50ZXIueSAtIHlcclxuICAgICAgICB0aGlzLm5ldHYudHJhbnNmb3JtKG5ld1RyYW5zZm9ybSlcclxuICAgICAgICByZXR1cm4gbmV3VHJhbnNmb3JtXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpbml0IHpvb20gaW50ZXJhY3Rpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uWm9vbShjYWxsYmFjazogKGU6IGFueSkgPT4gYW55KSB7XHJcbiAgICAgICAgdGhpcy56b29tQ2FsbGJhY2tTZXQuYWRkKGNhbGxiYWNrKVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNab29tTGlzdGVuZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRXaGVlbExpc3RlbmVycygpXHJcbiAgICAgICAgICAgIHRoaXMuaXNab29tTGlzdGVuZWQgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvZmZab29tKGNhbGxiYWNrOiAoZTogYW55KSA9PiBhbnkpIHtcclxuICAgICAgICB0aGlzLnpvb21DYWxsYmFja1NldC5kZWxldGUoY2FsbGJhY2spXHJcblxyXG4gICAgICAgIGlmICghdGhpcy56b29tQ2FsbGJhY2tTZXQuc2l6ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZVdoZWVsTGlzdGVuZXJzKClcclxuICAgICAgICAgICAgdGhpcy5pc1pvb21MaXN0ZW5lZCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNsaWNrKGNhbGxiYWNrOiAoZTogYW55KSA9PiBhbnkpIHtcclxuICAgICAgICB0aGlzLmNsaWNrQ2FsbGJhY2tTZXQuYWRkKGNhbGxiYWNrKVxyXG4gICAgICAgIHRoaXMuaW5jcmVhc2VNb3VzZUV2ZW50Q2FsbGJhY2tDb3VudEJ5KDEpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9mZkNsaWNrKGNhbGxiYWNrOiAoZTogYW55KSA9PiBhbnkpIHtcclxuICAgICAgICB0aGlzLmNsaWNrQ2FsbGJhY2tTZXQuZGVsZXRlKGNhbGxiYWNrKVxyXG4gICAgICAgIHRoaXMuZGVjcmVhc2VNb3VzZUV2ZW50Q2FsbGJhY2tDb3VudEJ5KDEpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uTW91c2Vkb3duKGNhbGxiYWNrOiAoZTogYW55KSA9PiBhbnkpIHtcclxuICAgICAgICB0aGlzLm1vdXNlZG93bkNhbGxiYWNrU2V0LmFkZChjYWxsYmFjaylcclxuICAgICAgICB0aGlzLmluY3JlYXNlTW91c2VFdmVudENhbGxiYWNrQ291bnRCeSgxKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvZmZNb3VzZWRvd24oY2FsbGJhY2s6IChlOiBhbnkpID0+IGFueSkge1xyXG4gICAgICAgIHRoaXMubW91c2Vkb3duQ2FsbGJhY2tTZXQuZGVsZXRlKGNhbGxiYWNrKVxyXG4gICAgICAgIHRoaXMuZGVjcmVhc2VNb3VzZUV2ZW50Q2FsbGJhY2tDb3VudEJ5KDEpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uTW91c2V1cChjYWxsYmFjazogKGU6IGFueSkgPT4gYW55KSB7XHJcbiAgICAgICAgdGhpcy5tb3VzZXVwQ2FsbGJhY2tTZXQuYWRkKGNhbGxiYWNrKVxyXG4gICAgICAgIHRoaXMuaW5jcmVhc2VNb3VzZUV2ZW50Q2FsbGJhY2tDb3VudEJ5KDEpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9mZk1vdXNldXAoY2FsbGJhY2s6IChlOiBhbnkpID0+IGFueSkge1xyXG4gICAgICAgIHRoaXMubW91c2V1cENhbGxiYWNrU2V0LmRlbGV0ZShjYWxsYmFjaylcclxuICAgICAgICB0aGlzLmRlY3JlYXNlTW91c2VFdmVudENhbGxiYWNrQ291bnRCeSgxKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblBhbihjYWxsYmFjazogKGU6IGFueSkgPT4gYW55KSB7XHJcbiAgICAgICAgdGhpcy5wYW5DYWxsYmFja1NldC5hZGQoY2FsbGJhY2spXHJcbiAgICAgICAgdGhpcy5pbmNyZWFzZU1vdXNlRXZlbnRDYWxsYmFja0NvdW50QnkoMSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb2ZmUGFuKGNhbGxiYWNrOiAoZTogYW55KSA9PiBhbnkpIHtcclxuICAgICAgICB0aGlzLnBhbkNhbGxiYWNrU2V0LmRlbGV0ZShjYWxsYmFjaylcclxuICAgICAgICB0aGlzLmRlY3JlYXNlTW91c2VFdmVudENhbGxiYWNrQ291bnRCeSgxKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbmNyZWFzZU1vdXNlRXZlbnRDYWxsYmFja0NvdW50QnkobjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5tb3VzZUV2ZW50Q2FsbGJhY2tDb3VudCArPSBuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTW91c2VMaXN0ZW5lZCAmJiB0aGlzLm1vdXNlRXZlbnRDYWxsYmFja0NvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAvLyB0aGVyZSBpcyBzb21lIG1vdXNlIGV2ZW50IGxpc3RlbmVkIGVsZW1lbnRzXHJcbiAgICAgICAgICAgIHRoaXMuYWRkTW91c2VMaXN0ZW5lcnMoKVxyXG4gICAgICAgICAgICB0aGlzLmlzTW91c2VMaXN0ZW5lZCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlY3JlYXNlTW91c2VFdmVudENhbGxiYWNrQ291bnRCeShuOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm1vdXNlRXZlbnRDYWxsYmFja0NvdW50IC09IG5cclxuICAgICAgICBpZiAodGhpcy5tb3VzZUV2ZW50Q2FsbGJhY2tDb3VudCA8PSAwICYmICF0aGlzLnBhbkNhbGxiYWNrU2V0LnNpemUpIHtcclxuICAgICAgICAgICAgLy8gbm8gcGFuIGNhbGxiYWNrIGZ1bmN0aW9ucyBhbmQgbm8gbW91c2UgZXZlbnQgbGlzdGVuZWQgZWxlbWVudHNcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVNb3VzZUxpc3RlbmVycygpXHJcbiAgICAgICAgICAgIHRoaXMuaXNNb3VzZUxpc3RlbmVkID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJpdmF0ZSBoYW5kbGUgem9vbSAobW91c2Ugd2hlZWwpIGV2ZW50XHJcbiAgICAgKiBAcGFyYW0ge1doZWVsRXZlbnR9IGV2dFxyXG4gICAgICogQG1lbWJlcm9mIEludGVyYWN0aW9uTWFuYWdlclxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZVpvb20oZXZ0OiBXaGVlbEV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgbmV3VHJhbnNmb3JtID0geyAuLi50aGlzLm5ldHYuJF90cmFuc2Zvcm0gfVxyXG4gICAgICAgIGNvbnN0IHggPSBldnQub2Zmc2V0WCB8fCBldnQucGFnZVggLSB0aGlzLmNhbnZhcy5vZmZzZXRMZWZ0XHJcbiAgICAgICAgY29uc3QgeSA9IGV2dC5vZmZzZXRZIHx8IGV2dC5wYWdlWSAtIHRoaXMuY2FudmFzLm9mZnNldFRvcFxyXG4gICAgICAgIGNvbnN0IGRlbHRhID0gZXZ0LmRlbHRhWSA/IGV2dC5kZWx0YVkgLyA0MCA6IGV2dC5kZXRhaWwgPyAtZXZ0LmRldGFpbCA6IDBcclxuICAgICAgICBpZiAoZGVsdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgayA9IE1hdGgucG93KDEuMSwgZGVsdGEpXHJcbiAgICAgICAgICAgIG5ld1RyYW5zZm9ybS54ID0gKDEgLSBrKSAqIHggKyBrICogbmV3VHJhbnNmb3JtLnhcclxuICAgICAgICAgICAgbmV3VHJhbnNmb3JtLnkgPSAoMSAtIGspICogeSArIGsgKiBuZXdUcmFuc2Zvcm0ueVxyXG5cclxuICAgICAgICAgICAgbmV3VHJhbnNmb3JtLmsgKj0ga1xyXG5cclxuICAgICAgICAgICAgdGhpcy5uZXR2LnRyYW5zZm9ybShuZXdUcmFuc2Zvcm0pXHJcbiAgICAgICAgICAgIHRoaXMubmV0di5kcmF3KClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuem9vbUNhbGxiYWNrU2V0LmZvckVhY2goKGNhbGxiYWNrKSA9PlxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldnQsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3pvb20nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogbmV3VHJhbnNmb3JtXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByaXZhdGUgaGFuZGxlIG1vdXNlIGRvd24gZXZlbnRcclxuICAgICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZ0XHJcbiAgICAgKiBAbWVtYmVyb2YgSW50ZXJhY3Rpb25NYW5hZ2VyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlTW91c2VEb3duKGV2dDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBldnQub2Zmc2V0WCB8fCBldnQucGFnZVggLSB0aGlzLmNhbnZhcy5vZmZzZXRMZWZ0XHJcbiAgICAgICAgY29uc3QgeSA9IGV2dC5vZmZzZXRZIHx8IGV2dC5wYWdlWSAtIHRoaXMuY2FudmFzLm9mZnNldFRvcFxyXG4gICAgICAgIGNvbnN0IHlJbnYgPSB0aGlzLm5ldHYuJF9jb25maWdzLmhlaWdodCAtIHlcclxuXHJcbiAgICAgICAgY29uc3QgbmV3VHJhbnNmb3JtID0geyAuLi50aGlzLm5ldHYuJF90cmFuc2Zvcm0gfVxyXG5cclxuICAgICAgICB0aGlzLmlzTW91c2VEb3duID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMubW91c2VEb3duUG9zID0geyB4LCB5IH1cclxuICAgICAgICB0aGlzLmRyYWdTdGFydFRyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobmV3VHJhbnNmb3JtKSlcclxuXHJcbiAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50ID0gdGhpcy5uZXR2LmdldEVsZW1lbnRCeVBvc2l0aW9uKHtcclxuICAgICAgICAgICAgeCxcclxuICAgICAgICAgICAgeTogeUludlxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1vdXNlRG93bkVsZW1lbnQ/LmVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubW91c2VEb3duRWxlbWVudC5lbGVtZW50XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50Py50eXBlID09PSAnTm9kZScpIHtcclxuICAgICAgICAgICAgICAgIC8vIG9ubHkgbm9kZSBjYW4gYmUgZHJhZ2dlZFxyXG4gICAgICAgICAgICAgICAgLy8gcmVjb3JkIG9yZ2luIHBvc2l0aW9uIGZvciBkcmFnXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnRPcmlnaW5Qb3MgPSB7IC4uLmVsZW1lbnQucG9zaXRpb24oKSB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxlbWVudC4kX21vdXNlZG93bkNhbGxiYWNrU2V0LmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2dCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbW91c2Vkb3duJyxcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2Vkb3duQ2FsbGJhY2tTZXQuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudDogZXZ0LFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdtb3VzZWRvd24nXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwcml2YXRlIGhhbmRsZSBtb3VzZSBtb3ZlIGV2ZW50XHJcbiAgICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2dFxyXG4gICAgICogQG1lbWJlcm9mIEludGVyYWN0aW9uTWFuYWdlclxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZU1vdXNlTW92ZShldnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICBsZXQgbmV3VHJhbnNmb3JtID0geyAuLi50aGlzLm5ldHYuJF90cmFuc2Zvcm0gfVxyXG4gICAgICAgIGNvbnN0IHggPSBldnQub2Zmc2V0WCB8fCBldnQucGFnZVggLSB0aGlzLmNhbnZhcy5vZmZzZXRMZWZ0XHJcbiAgICAgICAgY29uc3QgeSA9IGV2dC5vZmZzZXRZIHx8IGV2dC5wYWdlWSAtIHRoaXMuY2FudmFzLm9mZnNldFRvcFxyXG5cclxuICAgICAgICBjb25zdCBsYXN0SXNNb3VzZU1vdmUgPSB0aGlzLmlzTW91c2VNb3ZlXHJcbiAgICAgICAgY29uc3QgbGFzdE1vdXNlTW92ZUVsZW1lbnQgPSB0aGlzLm1vdXNlTW92ZUVsZW1lbnRcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNNb3VzZURvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5pc01vdXNlTW92ZSA9IHRydWVcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubW91c2VEb3duRWxlbWVudD8uZWxlbWVudCBhcyBOb2RlXHJcbiAgICAgICAgICAgIC8vIGRyYWcgYSBub2RlOiAxLiBtb3VzZWRvd24gb24gYSBOb2RlOyBhbmQgMi4gdGhlIG5vZGUgaXMgbGlzdGVuZWQ7XHJcbiAgICAgICAgICAgIC8vIGVsc2UgcGFuXHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ/LnR5cGUgPT09ICdOb2RlJyAmJlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC4kX2RyYWdzdGFydENhbGxiYWNrU2V0LnNpemUgK1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuJF9kcmFnZ2luZ0NhbGxiYWNrU2V0LnNpemUgK1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuJF9kcmFnZW5kQ2FsbGJhY2tTZXQuc2l6ZVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIC8vIGRyYWcgYSBsaXN0ZW5lZCBub2RlXHJcbiAgICAgICAgICAgICAgICBpZiAoIWxhc3RJc01vdXNlTW92ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxhc3QgdGltZSwgdGhlIG1vdXNlIGlzIG5vdCBtb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC4kX2RyYWdzdGFydENhbGxiYWNrU2V0LmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZHJhZ3N0YXJ0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNoYW5nZSBub2RlIHBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnBvc2l0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICB4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnRPcmlnaW5Qb3MueCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh4IC0gdGhpcy5tb3VzZURvd25Qb3MueCkgLyBuZXdUcmFuc2Zvcm0uayxcclxuICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLm1vdXNlRG93bkVsZW1lbnRPcmlnaW5Qb3MueSArICh5IC0gdGhpcy5tb3VzZURvd25Qb3MueSkgLyBuZXdUcmFuc2Zvcm0ua1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ldHYuZHJhdygpXHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC4kX2RyYWdnaW5nQ2FsbGJhY2tTZXQuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcmFnZ2luZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHBhbiwgd2hlbiBub3QgZHJhZ2dpbmcgbm9kZVxyXG4gICAgICAgICAgICAgICAgbmV3VHJhbnNmb3JtLnggPSB0aGlzLmRyYWdTdGFydFRyYW5zZm9ybS54ICsgeCAtIHRoaXMubW91c2VEb3duUG9zLnhcclxuICAgICAgICAgICAgICAgIG5ld1RyYW5zZm9ybS55ID0gdGhpcy5kcmFnU3RhcnRUcmFuc2Zvcm0ueSArIHkgLSB0aGlzLm1vdXNlRG93blBvcy55XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYW5DYWxsYmFja1NldC5zaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXR2LnRyYW5zZm9ybShuZXdUcmFuc2Zvcm0pXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXR2LmRyYXcoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFuQ2FsbGJhY2tTZXQuZm9yRWFjaCgoY2FsbGJhY2spID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncGFuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogbmV3VHJhbnNmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gaG92ZXJcclxuICAgICAgICAgICAgY29uc3QgeUludiA9IHRoaXMubmV0di4kX2NvbmZpZ3MuaGVpZ2h0IC0geVxyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5uZXR2LmdldEVsZW1lbnRCeVBvc2l0aW9uKHsgeCwgeTogeUludiB9KT8uZWxlbWVudFxyXG4gICAgICAgICAgICB0aGlzLm1vdXNlTW92ZUVsZW1lbnQgPSBlbGVtZW50XHJcbiAgICAgICAgICAgIGlmIChsYXN0TW91c2VNb3ZlRWxlbWVudCA9PT0gZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudD8uJF9tb3VzZW1vdmVDYWxsYmFja1NldC5mb3JFYWNoKChjYWxsYmFjaykgPT5cclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdtb3VzZW1vdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxhc3RNb3VzZU1vdmVFbGVtZW50Py4kX21vdXNlb3V0Q2FsbGJhY2tTZXQuZm9yRWFjaCgoY2FsbGJhY2spID0+XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudDogZXZ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbW91c2VvdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBsYXN0TW91c2VNb3ZlRWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50Py4kX21vdXNlb3ZlckNhbGxiYWNrU2V0LmZvckVhY2goKGNhbGxiYWNrKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ21vdXNlb3ZlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByaXZhdGUgaGFuZGxlIG1vdXNlIHVwIGV2ZW50XHJcbiAgICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2dFxyXG4gICAgICogQG1lbWJlcm9mIEludGVyYWN0aW9uTWFuYWdlclxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZU1vdXNlVXAoZXZ0OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW91c2VEb3duRWxlbWVudCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc01vdXNlTW92ZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gZHJhZ1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW91c2VEb3duRWxlbWVudD8uZWxlbWVudC4kX2RyYWdlbmRDYWxsYmFja1NldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLm1vdXNlRG93bkVsZW1lbnQuZWxlbWVudCBhcyBOb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC4kX2RyYWdlbmRDYWxsYmFja1NldC5mb3JFYWNoKChjYWxsYmFjaykgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcmFnZW5kJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjbGlja1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubW91c2VEb3duRWxlbWVudC5lbGVtZW50XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LiRfY2xpY2tDYWxsYmFja1NldC5mb3JFYWNoKChjYWxsYmFjaykgPT5cclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbGljaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIG1vdXNldXBcclxuICAgICAgICAgICAgaWYgKHRoaXMubW91c2VEb3duRWxlbWVudD8uZWxlbWVudC4kX21vdXNldXBDYWxsYmFja1NldCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubW91c2VEb3duRWxlbWVudC5lbGVtZW50IGFzIEVsZW1lbnRcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuJF9tb3VzZXVwQ2FsbGJhY2tTZXQuZm9yRWFjaCgoY2FsbGJhY2spID0+XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudDogZXZ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbW91c2V1cCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY2FudmFzIG1vdXNldXBcclxuICAgICAgICAgICAgdGhpcy5tb3VzZXVwQ2FsbGJhY2tTZXQuZm9yRWFjaCgoY2FsbGJhY2spID0+XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2dCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbW91c2V1cCdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzTW91c2VNb3ZlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjbGljaywgbm90IHBhblxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tDYWxsYmFja1NldC5mb3JFYWNoKChjYWxsYmFjaykgPT5cclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbGljaydcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNNb3VzZURvd24gPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuaXNNb3VzZU1vdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudCA9IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkV2hlZWxMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCB0aGlzLmhhbmRsZVpvb20uYmluZCh0aGlzKSwgZmFsc2UpXHJcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMuaGFuZGxlWm9vbS5iaW5kKHRoaXMpLCBmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZVdoZWVsTGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgdGhpcy5oYW5kbGVab29tLmJpbmQodGhpcykpXHJcbiAgICAgICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMuaGFuZGxlWm9vbS5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkTW91c2VMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXNcclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNb3VzZURvd24uYmluZCh0aGlzKSlcclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUuYmluZCh0aGlzKSlcclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuaGFuZGxlTW91c2VVcC5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlTW91c2VMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXNcclxuICAgICAgICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNb3VzZURvd24uYmluZCh0aGlzKSlcclxuICAgICAgICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUuYmluZCh0aGlzKSlcclxuICAgICAgICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuaGFuZGxlTW91c2VVcC5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIGludGVyZmFjZXMgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcydcclxuaW1wb3J0IHsgUmVuZGVyQXR0cmlidXRlLCBTaGFkZXJzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcydcclxuaW1wb3J0IHtcclxuICAgIGNyZWF0ZVByb2dyYW0sXHJcbiAgICBjcmVhdGVBcnJheUJ1ZmZlcixcclxuICAgIGV4dHJhY3RBdHRyaWJ1dGVzRnJvbVNoYWRlcixcclxuICAgIGVuY29kZVJlbmRlcklkXHJcbn0gZnJvbSAnLi4vdXRpbHMnXHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXHJcbmltcG9ydCBOb2RlIGZyb20gJy4uLy4uL2VsZW1lbnRzL25vZGUnXHJcbmltcG9ydCBMaW5rIGZyb20gJy4uLy4uL2VsZW1lbnRzL2xpbmsnXHJcblxyXG5leHBvcnQgY2xhc3MgUmVuZGVyRWxlbWVudE1hbmFnZXIge1xyXG4gICAgcHVibGljIGF0dHJpYnV0ZXM6IE1hcDxzdHJpbmcsIFJlbmRlckF0dHJpYnV0ZT5cclxuICAgIHB1YmxpYyBwaXhlbFJhdGlvOiBudW1iZXJcclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHRcclxuICAgIC8vIHRoZSBjYXBhYmxpdHkgb2YgdGhlIHJlbmRlciBtYW5hZ2VyLFxyXG4gICAgLy8gd2hpY2ggbWVhbnMgaG93IG1hbnkgZWxlbWVudHMgY2FuIGJlIHJlbmRlcmVkXHJcbiAgICBwcm90ZWN0ZWQgY2FwYWNpdHk6IG51bWJlclxyXG4gICAgcHJvdGVjdGVkIGNvdW50ID0gMFxyXG4gICAgcHJvdGVjdGVkIHdpZHRoOiBudW1iZXJcclxuICAgIHByb3RlY3RlZCBoZWlnaHQ6IG51bWJlclxyXG5cclxuICAgIHByb3RlY3RlZCBwcm9ncmFtOiBXZWJHTFByb2dyYW1cclxuXHJcbiAgICAvLyBpZCBzaGFkZXJzIGFyZSBkZXNpZ24gZm9yIG1hcHBpbmcgY2FudmFzIHBpeGVscyB0byBlbGVtZW50c1xyXG4gICAgcHJvdGVjdGVkIGlkUHJvZ3JhbTogV2ViR0xQcm9ncmFtXHJcbiAgICBwcm90ZWN0ZWQgaWRBdHRyaWJ1dGVzOiBNYXA8c3RyaW5nLCBSZW5kZXJBdHRyaWJ1dGU+XHJcbiAgICBwcm90ZWN0ZWQgaWRUZXh0dXJlOiBXZWJHTFRleHR1cmVcclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVySWRUb0VsZW1lbnQ6IHsgW2tleTogbnVtYmVyXTogTm9kZSB8IExpbmsgfVxyXG4gICAgcHJvdGVjdGVkIGVsZW1lbnRUb1JlbmRlcklkID0gbmV3IE1hcCgpXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0LFxyXG4gICAgICAgIHBhcmFtczogYW55LFxyXG4gICAgICAgIHNoYWRlcnM6IFNoYWRlcnMsXHJcbiAgICAgICAgaWRUZXh0dXJlOiBXZWJHTFRleHR1cmVcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IHsgbGltaXQsIHdpZHRoLCBoZWlnaHQsIGluc3RhbmNlVmVydGVjZXMgfSA9IHBhcmFtc1xyXG4gICAgICAgIHRoaXMuZ2wgPSBnbFxyXG4gICAgICAgIHRoaXMuY2FwYWNpdHkgPSBsaW1pdFxyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XHJcbiAgICAgICAgdGhpcy5waXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMVxyXG5cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSBleHRyYWN0QXR0cmlidXRlc0Zyb21TaGFkZXIoc2hhZGVycy52ZXJ0ZXgpXHJcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gY3JlYXRlUHJvZ3JhbShcclxuICAgICAgICAgICAgdGhpcy5nbCxcclxuICAgICAgICAgICAgc2hhZGVycy52ZXJ0ZXguY29ubmVjdCgpLFxyXG4gICAgICAgICAgICBzaGFkZXJzLmZyYWdtZW50LmNvbm5lY3QoKSxcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICB0aGlzLmlkQXR0cmlidXRlcyA9IGV4dHJhY3RBdHRyaWJ1dGVzRnJvbVNoYWRlcihzaGFkZXJzLmlkVmVydGV4KVxyXG4gICAgICAgIHRoaXMuaWRQcm9ncmFtID0gY3JlYXRlUHJvZ3JhbShcclxuICAgICAgICAgICAgdGhpcy5nbCxcclxuICAgICAgICAgICAgc2hhZGVycy5pZFZlcnRleC5jb25uZWN0KCksXHJcbiAgICAgICAgICAgIHNoYWRlcnMuaWRGcmFnbWVudC5jb25uZWN0KCksXHJcbiAgICAgICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICB0aGlzLmlkVGV4dHVyZSA9IGlkVGV4dHVyZVxyXG5cclxuICAgICAgICAvLyBpbml0aWFsIGF0dHJpYnV0ZXMgYXJyYXlzIGFuZCBidWZmZXJzXHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFhdHRyLmlzQnVpbGRJbikge1xyXG4gICAgICAgICAgICAgICAgYXR0ci5hcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoYXR0ci5zaXplICogdGhpcy5jYXBhY2l0eSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGJ1aWxkIGluIGF0dHJpYnV0ZTogdmV0ZWNlcyBwb3NpdGlvbnNcclxuICAgICAgICAgICAgICAgIC8vIGZvdXIgdmVydGVjZXMgb2Ygb25lIGVsZW1lbnQgKGh0dHBzOi8vcGFuamlhY2hlbmcuc2l0ZS93aWtpLzIwMTkvMDYvMDYvd2ViR0wvV2ViR0wtQmF0Y2hEcmF3JUU0JUJCJUEzJUU3JUEwJTgxJUU5JTk4JTg1JUU4JUFGJUJCKyVFNyU5MCU4NiVFOCVBNyVBMy8pXHJcbiAgICAgICAgICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgICAgICAgICAgICAgIGF0dHIuYXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KGluc3RhbmNlVmVydGVjZXMpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF0dHIuYnVmZmVyID0gY3JlYXRlQXJyYXlCdWZmZXIodGhpcy5nbCwgYXR0ci5hcnJheSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBpbml0IGlkIGF0dHJpYnV0ZXMgYW5kIGJ1ZmZlcnNcclxuICAgICAgICB0aGlzLmlkQXR0cmlidXRlcy5mb3JFYWNoKChhdHRyLCBuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChuYW1lID09PSAnaW5faWQnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBhdHRyOiBpbiB2ZWM0IGluSWQ7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBoYXJkY29kZSBjaGVjaywgbmVlZCByZWZhY3RvclxyXG4gICAgICAgICAgICAgICAgaWYgKCFhdHRyLmlzQnVpbGRJbikgYXR0ci5hcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoYXR0ci5zaXplICogdGhpcy5jYXBhY2l0eSlcclxuICAgICAgICAgICAgICAgIGF0dHIuYnVmZmVyID0gY3JlYXRlQXJyYXlCdWZmZXIodGhpcy5nbCwgYXR0ci5hcnJheSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzLnNldChuYW1lLCB0aGlzLmF0dHJpYnV0ZXMuZ2V0KG5hbWUpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gaW5pdCB1bmlmb3Jtc1xyXG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pXHJcbiAgICAgICAgLy8gZ2V0IHVuaWZvcm0gbG9jYXRpb25zIGluIE1lbW9yeVxyXG4gICAgICAgIGNvbnN0IHByb2plY3Rpb25Mb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3Byb2plY3Rpb24nKVxyXG4gICAgICAgIGNvbnN0IHNjYWxlTG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sICdzY2FsZScpXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlTG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sICd0cmFuc2xhdGUnKVxyXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0TG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sICd2aWV3cG9ydCcpXHJcbiAgICAgICAgY29uc3QgcGl4ZWxSYXRpb0xvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLCAncGl4ZWxSYXRpbycpXHJcblxyXG4gICAgICAgIC8vIHNldCB1bmlmb3JtIHZhbHVlc1xyXG4gICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gICAgICAgIGNvbnN0IHByb2plY3Rpb24gPSBuZXcgRmxvYXQzMkFycmF5KFtcclxuICAgICAgICAgICAgMiAvIHRoaXMud2lkdGgsICAgICAgICAgICAgICAgIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAwLCAtMiAvIHRoaXMuaGVpZ2h0LCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMSwgICAgICAgICAgICAgICAgMSwgMVxyXG4gICAgICAgIF0pXHJcbiAgICAgICAgcHJvamVjdGlvbkxvY2F0aW9uICE9PSBudWxsICYmXHJcbiAgICAgICAgICAgIHRoaXMuZ2wudW5pZm9ybU1hdHJpeDNmdihwcm9qZWN0aW9uTG9jYXRpb24sIGZhbHNlLCBwcm9qZWN0aW9uKVxyXG5cclxuICAgICAgICBjb25zdCBzY2FsZSA9IG5ldyBGbG9hdDMyQXJyYXkoWzEsIDFdKVxyXG4gICAgICAgIHNjYWxlTG9jYXRpb24gIT09IG51bGwgJiYgdGhpcy5nbC51bmlmb3JtMmZ2KHNjYWxlTG9jYXRpb24sIHNjYWxlKVxyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2xhdGUgPSBuZXcgRmxvYXQzMkFycmF5KFswLCAwXSlcclxuICAgICAgICB0cmFuc2xhdGVMb2NhdGlvbiAhPT0gbnVsbCAmJiB0aGlzLmdsLnVuaWZvcm0yZnYodHJhbnNsYXRlTG9jYXRpb24sIHRyYW5zbGF0ZSlcclxuXHJcbiAgICAgICAgY29uc3Qgdmlld3BvcnQgPSBuZXcgRmxvYXQzMkFycmF5KFt0aGlzLndpZHRoLCB0aGlzLmhlaWdodF0pXHJcbiAgICAgICAgdmlld3BvcnRMb2NhdGlvbiAhPT0gbnVsbCAmJiB0aGlzLmdsLnVuaWZvcm0yZnYodmlld3BvcnRMb2NhdGlvbiwgdmlld3BvcnQpXHJcblxyXG4gICAgICAgIHBpeGVsUmF0aW9Mb2NhdGlvbiAhPT0gbnVsbCAmJiB0aGlzLmdsLnVuaWZvcm0xZihwaXhlbFJhdGlvTG9jYXRpb24sIHRoaXMucGl4ZWxSYXRpbylcclxuXHJcbiAgICAgICAgLy8gaWQgdW5pZm9ybXMsIGlkZW50aWNhbCB0byBub2RlXHJcbiAgICAgICAgLy8gVE9ETzogbmVlZCByZWZhY3RvciB0b29cclxuICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5pZFByb2dyYW0pXHJcbiAgICAgICAgY29uc3QgaWRQcm9qZWN0aW9uTG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmlkUHJvZ3JhbSwgJ3Byb2plY3Rpb24nKVxyXG4gICAgICAgIGNvbnN0IGlkU2NhbGVMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuaWRQcm9ncmFtLCAnc2NhbGUnKVxyXG4gICAgICAgIGNvbnN0IGlkVHJhbnNsYXRlTG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmlkUHJvZ3JhbSwgJ3RyYW5zbGF0ZScpXHJcbiAgICAgICAgY29uc3QgaWRWaWV3cG9ydExvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5pZFByb2dyYW0sICd2aWV3cG9ydCcpXHJcbiAgICAgICAgY29uc3QgaWRQaXhlbFJhdGlvTG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmlkUHJvZ3JhbSwgJ3BpeGVsUmF0aW8nKVxyXG5cclxuICAgICAgICBpZFByb2plY3Rpb25Mb2NhdGlvbiAhPT0gbnVsbCAmJlxyXG4gICAgICAgICAgICB0aGlzLmdsLnVuaWZvcm1NYXRyaXgzZnYoaWRQcm9qZWN0aW9uTG9jYXRpb24sIGZhbHNlLCBwcm9qZWN0aW9uKVxyXG4gICAgICAgIGlkU2NhbGVMb2NhdGlvbiAhPT0gbnVsbCAmJiB0aGlzLmdsLnVuaWZvcm0yZnYoaWRTY2FsZUxvY2F0aW9uLCBzY2FsZSlcclxuICAgICAgICBpZFRyYW5zbGF0ZUxvY2F0aW9uICE9PSBudWxsICYmIHRoaXMuZ2wudW5pZm9ybTJmdihpZFRyYW5zbGF0ZUxvY2F0aW9uLCB0cmFuc2xhdGUpXHJcbiAgICAgICAgaWRWaWV3cG9ydExvY2F0aW9uICE9PSBudWxsICYmIHRoaXMuZ2wudW5pZm9ybTJmdihpZFZpZXdwb3J0TG9jYXRpb24sIHZpZXdwb3J0KVxyXG4gICAgICAgIGlkUGl4ZWxSYXRpb0xvY2F0aW9uICE9PSBudWxsICYmIHRoaXMuZ2wudW5pZm9ybTFmKGlkUGl4ZWxSYXRpb0xvY2F0aW9uLCB0aGlzLnBpeGVsUmF0aW8pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFJlbmRlcklkT2YoZWxlbWVudDogTm9kZSB8IExpbmssIHJlbmRlcklkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcklkVG9FbGVtZW50W3JlbmRlcklkXSA9IGVsZW1lbnRcclxuICAgICAgICB0aGlzLmVsZW1lbnRUb1JlbmRlcklkLnNldChlbGVtZW50LCByZW5kZXJJZClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UmVuZGVySWRPZihlbGVtZW50OiBOb2RlIHwgTGluayk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFRvUmVuZGVySWQuZ2V0KGVsZW1lbnQpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZW5kZXIgaWQgdG8gbGluayBpZHMoc291cmNlIGFuZCB0YXJnZXQpXHJcbiAgICAgKiBAcGFyYW0gcmVuZGVySWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEVsZW1lbnRCeVJlbmRlcklkKHJlbmRlcklkOiBudW1iZXIpOiBOb2RlIHwgTGluayB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVySWRUb0VsZW1lbnRbcmVuZGVySWRdXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQgVHJhbnNmb3JtIGluIFJlbmRlciBMaW5rXHJcbiAgICAgKiBAcGFyYW0gdHJhbnNmb3JtIGN1cnJlbnQgdHJhbnNmb3JtKHBhbiZ6b29tIGNvbmRpdGlvbilcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFRyYW5zZm9ybSh0cmFuc2Zvcm06IFRyYW5zZm9ybSkge1xyXG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pXHJcbiAgICAgICAgY29uc3Qgc2NhbGVMb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sICdzY2FsZScpXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlTG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLCAndHJhbnNsYXRlJylcclxuXHJcbiAgICAgICAgY29uc3Qgc2NhbGUgPSBuZXcgRmxvYXQzMkFycmF5KFt0cmFuc2Zvcm0uaywgdHJhbnNmb3JtLmtdKVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdihzY2FsZUxvYywgc2NhbGUpXHJcblxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IG5ldyBGbG9hdDMyQXJyYXkoW3RyYW5zZm9ybS54LCB0cmFuc2Zvcm0ueV0pXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmZ2KHRyYW5zbGF0ZUxvYywgdHJhbnNsYXRlKVxyXG5cclxuICAgICAgICAvLyBpZCB1bmlmb3JtcywgaWRlbnRpY2FsIHRvIGxpbmtcclxuICAgICAgICAvLyBUT0RPOiBuZWVkIHJlZmFjdG9yIHRvb1xyXG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLmlkUHJvZ3JhbSlcclxuICAgICAgICBjb25zdCBpZFNjYWxlTG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5pZFByb2dyYW0sICdzY2FsZScpXHJcbiAgICAgICAgY29uc3QgaWRUcmFuc2xhdGVMb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmlkUHJvZ3JhbSwgJ3RyYW5zbGF0ZScpXHJcblxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdihpZFNjYWxlTG9jLCBzY2FsZSlcclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZnYoaWRUcmFuc2xhdGVMb2MsIHRyYW5zbGF0ZSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdygpIHtcclxuICAgICAgICBpZiAodGhpcy5jb3VudCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5nbC5lbmFibGUodGhpcy5nbC5CTEVORClcclxuICAgICAgICAgICAgdGhpcy5nbC5ibGVuZEZ1bmModGhpcy5nbC5PTkUsIHRoaXMuZ2wuT05FX01JTlVTX1NSQ19BTFBIQSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGF0dHIubG9jYXRpb24pXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0ciwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBhdHRyLmJ1ZmZlcilcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wudmVydGV4QXR0cmliUG9pbnRlcihcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLmxvY2F0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLkZMT0FULFxyXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSAqIGF0dHIuYXJyYXkuQllURVNfUEVSX0VMRU1FTlQsXHJcbiAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgaWYgKCFhdHRyLmlzQnVpbGRJbikgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJEaXZpc29yKGF0dHIubG9jYXRpb24sIDEpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB0aGlzLmdsLmRyYXdBcnJheXNJbnN0YW5jZWQodGhpcy5nbC5UUklBTkdMRV9TVFJJUCwgMCwgNCwgdGhpcy5jb3VudClcclxuXHJcbiAgICAgICAgICAgIC8vIGRyYXcgaWRcclxuICAgICAgICAgICAgdGhpcy5nbC5ibGVuZEZ1bmModGhpcy5nbC5PTkUsIHRoaXMuZ2wuWkVSTylcclxuICAgICAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMuaWRQcm9ncmFtKVxyXG4gICAgICAgICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLkZSQU1FQlVGRkVSLCB0aGlzLmlkVGV4dHVyZSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYXR0ci5sb2NhdGlvbilcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLmlkQXR0cmlidXRlcy5nZXQoJ2luX2lkJykgLy8gISBIQVJEQ09ERSBDSEVDS1xyXG4gICAgICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIGF0dHIuYnVmZmVyKVxyXG4gICAgICAgICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXHJcbiAgICAgICAgICAgICAgICBhdHRyLmxvY2F0aW9uLFxyXG4gICAgICAgICAgICAgICAgYXR0ci5zaXplLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5GTE9BVCxcclxuICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXR0ci5zaXplICogYXR0ci5hcnJheS5CWVRFU19QRVJfRUxFTUVOVCxcclxuICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYkRpdmlzb3IoYXR0ci5sb2NhdGlvbiwgMSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2wuZHJhd0FycmF5c0luc3RhbmNlZCh0aGlzLmdsLlRSSUFOR0xFX1NUUklQLCAwLCA0LCB0aGlzLmNvdW50KVxyXG4gICAgICAgICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLkZSQU1FQlVGRkVSLCBudWxsKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nbC5lbmFibGUodGhpcy5nbC5CTEVORClcclxuICAgICAgICAgICAgdGhpcy5nbC5ibGVuZEZ1bmModGhpcy5nbC5PTkUsIHRoaXMuZ2wuT05FX01JTlVTX1NSQ19BTFBIQSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgZWxlbWVudCBkYXRhIHRvIGVuZ2luZVxyXG4gICAgICogQHBhcmFtIGVsZW1lbnRzIGVsZW1lbnRzIGRhdGFcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZERhdGEoZWxlbWVudHM6IE5vZGVbXSB8IExpbmtbXSkge1xyXG4gICAgICAgIC8vIHNldCBhcnJheVxyXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQ6IE5vZGUgfCBMaW5rLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jb3VudCArIGlcclxuICAgICAgICAgICAgLy8gbGluayBhdHRyaWJ1dGUgPT4gd2ViZ2wgYXR0cmlidXRlXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWF0dHIuaXNCdWlsZEluKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyYXkgPSBnZXRTaGFkZXJBdHRyaWJ1dGVWYWx1ZShlbGVtZW50LCBhdHRyLm5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5hcnJheS5zZXQoYXJyYXksIGF0dHIuc2l6ZSAqIGluZGV4KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gZWxlbWVudC50eXBlID09PSAnTm9kZScgPyAwIDogMSAvLyBOT1RFOiBub2RlIHJlbmRlciBpZCwgdXNlIGV2ZW4gaW50ZWdlclxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXJJZCA9IDIgKiBpbmRleCArIG9mZnNldFxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXJJZENvbG9yID0gZW5jb2RlUmVuZGVySWQocmVuZGVySWQpXHJcbiAgICAgICAgICAgIGNvbnN0IGlkQXR0ciA9IHRoaXMuaWRBdHRyaWJ1dGVzLmdldCgnaW5faWQnKVxyXG4gICAgICAgICAgICBpZEF0dHIuYXJyYXkuc2V0KFtyZW5kZXJJZENvbG9yLnIsIHJlbmRlcklkQ29sb3IuZywgcmVuZGVySWRDb2xvci5iLCByZW5kZXJJZENvbG9yLmFdLCA0ICogaW5kZXgpXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFJlbmRlcklkT2YoZWxlbWVudCwgcmVuZGVySWQpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFhdHRyLmlzQnVpbGRJbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBhdHRyLmJ1ZmZlcilcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYnVmZmVyU3ViRGF0YShcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLkFSUkFZX0JVRkZFUixcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLnNpemUgKiB0aGlzLmNvdW50ICogYXR0ci5hcnJheS5CWVRFU19QRVJfRUxFTUVOVCxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLmFycmF5LFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSAqIHRoaXMuY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5zaXplICogZWxlbWVudHMubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBpZCBidWZmZXIgZGF0YVxyXG4gICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLmlkQXR0cmlidXRlcy5nZXQoJ2luX2lkJylcclxuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIGF0dHIuYnVmZmVyKVxyXG4gICAgICAgIHRoaXMuZ2wuYnVmZmVyU3ViRGF0YShcclxuICAgICAgICAgICAgdGhpcy5nbC5BUlJBWV9CVUZGRVIsXHJcbiAgICAgICAgICAgIGF0dHIuc2l6ZSAqIHRoaXMuY291bnQgKiBhdHRyLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULFxyXG4gICAgICAgICAgICBhdHRyLmFycmF5LFxyXG4gICAgICAgICAgICBhdHRyLnNpemUgKiB0aGlzLmNvdW50LFxyXG4gICAgICAgICAgICBhdHRyLnNpemUgKiBlbGVtZW50cy5sZW5ndGhcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIHRoaXMuY291bnQgKz0gZWxlbWVudHMubGVuZ3RoXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjaGFuZ2UgYW4gZWxlbWVudCdzIGF0dHJpYnV0ZVxyXG4gICAgICogQHBhcmFtIGVsZW1lbnQgbGluay9ub2RlIGRhdGFcclxuICAgICAqIEBwYXJhbSBhdHRyaWJ1dGUgYXR0cmlidXRlIGtleSB0byBjaGFuZ2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNoYW5nZUF0dHJpYnV0ZShlbGVtZW50OiBOb2RlIHwgTGluaywgYXR0cmlidXRlOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCByZW5kZXJJZCA9IHRoaXMuZ2V0UmVuZGVySWRPZihlbGVtZW50KVxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihyZW5kZXJJZCAvIDIpXHJcbiAgICAgICAgY29uc3Qgc2hhZGVyQXR0ciA9IHRoaXMuZ2V0QXR0cmlidXRlQnlFbGVtZW50KGVsZW1lbnQsIGF0dHJpYnV0ZSlcclxuICAgICAgICBjb25zdCBzaGFkZXJWYXJpYWJsZU5hbWUgPSBzaGFkZXJBdHRyLm5hbWVcclxuICAgICAgICBjb25zdCBzaGFkZXJWYXJpYWJsZVZhbHVlID0gc2hhZGVyQXR0ci52YWx1ZSBhcyBudW1iZXJbXVxyXG4gICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLmF0dHJpYnV0ZXMuZ2V0KHNoYWRlclZhcmlhYmxlTmFtZSlcclxuICAgICAgICBpZiAoYXR0ciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEF0dHJpYnV0ZTogJHthdHRyaWJ1dGV9IGlzIG5vdCBzdXBwb3J0ZWQgaW4gYSAke2VsZW1lbnQudHlwZX0gaW5zdGFuY2UuYClcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc3QgZGF0YSA9IGF0dHIuZXh0cmFjdEF0dHJpYnV0ZVZhbHVlRnJvbShlbGVtZW50KVxyXG4gICAgICAgIGF0dHIuYXJyYXkuc2V0KHNoYWRlclZhcmlhYmxlVmFsdWUsIGF0dHIuc2l6ZSAqIGluZGV4KVxyXG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYXR0ci5idWZmZXIpXHJcbiAgICAgICAgdGhpcy5nbC5idWZmZXJTdWJEYXRhKFxyXG4gICAgICAgICAgICB0aGlzLmdsLkFSUkFZX0JVRkZFUixcclxuICAgICAgICAgICAgYXR0ci5zaXplICogaW5kZXggKiBhdHRyLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULFxyXG4gICAgICAgICAgICBhdHRyLmFycmF5LFxyXG4gICAgICAgICAgICBhdHRyLnNpemUgKiBpbmRleCxcclxuICAgICAgICAgICAgYXR0ci5zaXplXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2xlYXIgZGF0YVxyXG4gICAgICogbm90IGFjdHVhbGx5IGVyYXNlIGRhdGEsIGJ1dCByZXNldCBjb3VudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xlYXJEYXRhKCkge1xyXG4gICAgICAgIHRoaXMuY291bnQgPSAwXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldEF0dHJpYnV0ZUJ5RWxlbWVudChlbGVtZW50OiBMaW5rIHwgTm9kZSwgYXR0cmlidXRlTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IG1hcFxyXG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdMaW5rJykge1xyXG4gICAgICAgICAgICBjb25zdCBsaW5rID0gZWxlbWVudCBhcyBMaW5rXHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gbGluay4kX3N0eWxlIGFzIGludGVyZmFjZXMuTGlua1N0eWxlXHJcblxyXG4gICAgICAgICAgICBtYXAgPSB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5fc291cmNlJyxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW2xpbmsuJF9zb3VyY2UuJF9wb3NpdGlvbi54LCBsaW5rLiRfc291cmNlLiRfcG9zaXRpb24ueV1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5fdGFyZ2V0JyxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW2xpbmsuJF90YXJnZXQuJF9wb3NpdGlvbi54LCBsaW5rLiRfdGFyZ2V0LiRfcG9zaXRpb24ueV1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzaGFwZToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbl9zaGFwZScsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtzdHlsZS5zaGFwZSA9PT0gJ2Rhc2gtbGluZScgPyAyIDogc3R5bGUuc2hhcGUgPT09ICdjdXJ2ZScgPyAxIDogMF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbl9zdHJva2VXaWR0aCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtzdHlsZS5zdHJva2VXaWR0aF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbl9zdHJva2VDb2xvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUuc3Ryb2tlQ29sb3IucixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUuc3Ryb2tlQ29sb3IuZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUuc3Ryb2tlQ29sb3IuYixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUuc3Ryb2tlQ29sb3IuYVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjdXJ2ZW5lc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5fY3VydmVuZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW3N0eWxlLmN1cnZlbmVzc11cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYXNoSW50ZXJ2YWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5fZGFzaEludGVydmFsJyxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW3N0eWxlLmRhc2hJbnRlcnZhbF1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBlbGVtZW50IGFzIE5vZGVcclxuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBub2RlLiRfc3R5bGUgYXMgaW50ZXJmYWNlcy5Ob2RlU3R5bGVcclxuXHJcbiAgICAgICAgICAgIG1hcCA9IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luX3Bvc2l0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW25vZGUuJF9wb3NpdGlvbi54LCBub2RlLiRfcG9zaXRpb24ueV1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzaGFwZToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbl9zaGFwZScsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUuc2hhcGUgPT09ICdyZWN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHN0eWxlLnNoYXBlID09PSAndHJpYW5nbGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzdHlsZS5zaGFwZSA9PT0gJ2Nyb3NzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9mZnNldDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbl9vZmZzZXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBbc3R5bGUub2Zmc2V0LngsIHN0eWxlLm9mZnNldC55XVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZpbGw6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5fZmlsbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtzdHlsZS5maWxsLnIsIHN0eWxlLmZpbGwuZywgc3R5bGUuZmlsbC5iLCBzdHlsZS5maWxsLmFdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5fc3Ryb2tlV2lkdGgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBbc3R5bGUuc3Ryb2tlV2lkdGhdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5fc3Ryb2tlQ29sb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLnN0cm9rZUNvbG9yLnIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLnN0cm9rZUNvbG9yLmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLnN0cm9rZUNvbG9yLmIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLnN0cm9rZUNvbG9yLmFcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcm90YXRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luX3JvdGF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtzdHlsZS5yb3RhdGVdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLyogY2lyY2xlICovXHJcbiAgICAgICAgICAgICAgICByOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luX3InLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBbc3R5bGUucl1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvKiByZWN0ICovXHJcbiAgICAgICAgICAgICAgICB3aWR0aDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbl9zaXplJyxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW3N0eWxlLndpZHRoLCBzdHlsZS5oZWlnaHRdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luX3NpemUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBbc3R5bGUud2lkdGgsIHN0eWxlLmhlaWdodF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvKiB0cmlhbmdsZSAqL1xyXG4gICAgICAgICAgICAgICAgdmVydGV4QWxwaGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5fdmVydGV4QWxwaGEnLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBbc3R5bGUudmVydGV4QWxwaGEueCwgc3R5bGUudmVydGV4QWxwaGEueV1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhCZXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luX3ZlcnRleEJldGEnLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBbc3R5bGUudmVydGV4QmV0YS54LCBzdHlsZS52ZXJ0ZXhCZXRhLnldXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdmVydGV4R2FtbWE6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5fdmVydGV4R2FtbWEnLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBbc3R5bGUudmVydGV4R2FtbWEueCwgc3R5bGUudmVydGV4R2FtbWEueV1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvKiBjcm9zcyAqL1xyXG4gICAgICAgICAgICAgICAgaW5uZXJXaWR0aDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbl9pbm5lclNpemUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBbc3R5bGUuaW5uZXJXaWR0aCwgc3R5bGUuaW5uZXJIZWlnaHRdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaW5uZXJIZWlnaHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5faW5uZXJTaXplJyxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW3N0eWxlLmlubmVyV2lkdGgsIHN0eWxlLmlubmVySGVpZ2h0XVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYXR0cmlidXRlTmFtZSBpbiBtYXApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1hcFthdHRyaWJ1dGVOYW1lXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVE9ETzogY29uc2lkZXIgdW51c2VkIHJldmVyc2VkX21hcD9cclxuICAgICAgICBjb25zdCByZXZlcnNlZF9tYXAgPSB7fVxyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKG1hcCkuZm9yRWFjaCgoW2ssIHZdKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdiBhcyBhbnlcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gayBhcyBzdHJpbmdcclxuICAgICAgICAgICAgcmV2ZXJzZWRfbWFwW3ZhbHVlLm5hbWVdID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZToga2V5LFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLnZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gcmV2ZXJzZWRfbWFwW2F0dHJpYnV0ZU5hbWVdXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGxpbmtTaGFkZXJBdHRyTWFwID0ge1xyXG4gICAgJ2luX3NvdXJjZSc6IChsaW5rKSA9PiBbbGluay4kX3NvdXJjZS4kX3Bvc2l0aW9uLngsIGxpbmsuJF9zb3VyY2UuJF9wb3NpdGlvbi55XSxcclxuICAgICdpbl90YXJnZXQnOiAobGluaykgPT4gW2xpbmsuJF90YXJnZXQuJF9wb3NpdGlvbi54LCBsaW5rLiRfdGFyZ2V0LiRfcG9zaXRpb24ueV0sXHJcbiAgICAnaW5fc2hhcGUnOiAobGluaykgPT4gW2xpbmsuJF9zdHlsZS5zaGFwZSA9PT0gJ2Rhc2gtbGluZScgPyAyIDogbGluay4kX3N0eWxlLnNoYXBlID09PSAnY3VydmUnID8gMSA6IDBdLFxyXG4gICAgJ2luX3N0cm9rZVdpZHRoJzogKGxpbmspID0+IFtsaW5rLiRfc3R5bGUuc3Ryb2tlV2lkdGhdLFxyXG4gICAgJ2luX3N0cm9rZUNvbG9yJzogKGxpbmspID0+IFtcclxuICAgICAgICBsaW5rLiRfc3R5bGUuc3Ryb2tlQ29sb3IucixcclxuICAgICAgICBsaW5rLiRfc3R5bGUuc3Ryb2tlQ29sb3IuZyxcclxuICAgICAgICBsaW5rLiRfc3R5bGUuc3Ryb2tlQ29sb3IuYixcclxuICAgICAgICBsaW5rLiRfc3R5bGUuc3Ryb2tlQ29sb3IuYVxyXG4gICAgXSxcclxuICAgICdpbl9jdXJ2ZW5lc3MnOiAobGluaykgPT4gW2xpbmsuJF9zdHlsZS5jdXJ2ZW5lc3NdLFxyXG4gICAgJ2luX2Rhc2hJbnRlcnZhbCc6IChsaW5rKSA9PiBbbGluay4kX3N0eWxlLmRhc2hJbnRlcnZhbF1cclxufVxyXG5cclxuY29uc3Qgbm9kZVNoYWRlckF0dHJNYXAgPSB7XHJcbiAgICAnaW5fcG9zaXRpb24nOiAobm9kZSkgPT4gW25vZGUuJF9wb3NpdGlvbi54LCBub2RlLiRfcG9zaXRpb24ueV0sXHJcbiAgICAnaW5fc2hhcGUnOiAobm9kZSkgPT4gW1xyXG4gICAgICAgIG5vZGUuJF9zdHlsZS5zaGFwZSA9PT0gJ3JlY3QnXHJcbiAgICAgICAgICAgID8gMVxyXG4gICAgICAgICAgICA6IG5vZGUuJF9zdHlsZS5zaGFwZSA9PT0gJ3RyaWFuZ2xlJ1xyXG4gICAgICAgICAgICAgICAgPyAyXHJcbiAgICAgICAgICAgICAgICA6IG5vZGUuJF9zdHlsZS5zaGFwZSA9PT0gJ2Nyb3NzJ1xyXG4gICAgICAgICAgICAgICAgICAgID8gM1xyXG4gICAgICAgICAgICAgICAgICAgIDogMFxyXG4gICAgXSxcclxuICAgICdpbl9vZmZzZXQnOiAobm9kZSkgPT4gW25vZGUuJF9zdHlsZS5vZmZzZXQueCwgbm9kZS4kX3N0eWxlLm9mZnNldC55XSxcclxuICAgICdpbl9maWxsJzogKG5vZGUpID0+IFtub2RlLiRfc3R5bGUuZmlsbC5yLCBub2RlLiRfc3R5bGUuZmlsbC5nLCBub2RlLiRfc3R5bGUuZmlsbC5iLCBub2RlLiRfc3R5bGUuZmlsbC5hXSxcclxuICAgICdpbl9zdHJva2VXaWR0aCc6IChub2RlKSA9PiBbbm9kZS4kX3N0eWxlLnN0cm9rZVdpZHRoXSxcclxuICAgICdpbl9zdHJva2VDb2xvcic6IChub2RlKSA9PiBbXHJcbiAgICAgICAgbm9kZS4kX3N0eWxlLnN0cm9rZUNvbG9yLnIsXHJcbiAgICAgICAgbm9kZS4kX3N0eWxlLnN0cm9rZUNvbG9yLmcsXHJcbiAgICAgICAgbm9kZS4kX3N0eWxlLnN0cm9rZUNvbG9yLmIsXHJcbiAgICAgICAgbm9kZS4kX3N0eWxlLnN0cm9rZUNvbG9yLmFcclxuICAgIF0sXHJcbiAgICAnaW5fcm90YXRlJzogKG5vZGUpID0+IFtub2RlLiRfc3R5bGUucm90YXRlXSxcclxuICAgIC8qIGNpcmNsZSAqL1xyXG4gICAgJ2luX3InOiAobm9kZSkgPT4gW25vZGUuJF9zdHlsZS5yXSxcclxuICAgIC8qIHJlY3QgKi9cclxuICAgICdpbl9zaXplJzogKG5vZGUpID0+IFtub2RlLiRfc3R5bGUud2lkdGgsIG5vZGUuJF9zdHlsZS5oZWlnaHRdLFxyXG4gICAgLyogdHJpYW5nbGUgKi9cclxuICAgICdpbl92ZXJ0ZXhBbHBoYSc6IChub2RlKSA9PiBbbm9kZS4kX3N0eWxlLnZlcnRleEFscGhhLngsIG5vZGUuJF9zdHlsZS52ZXJ0ZXhBbHBoYS55XSxcclxuICAgICdpbl92ZXJ0ZXhCZXRhJzogKG5vZGUpID0+IFtub2RlLiRfc3R5bGUudmVydGV4QmV0YS54LCBub2RlLiRfc3R5bGUudmVydGV4QmV0YS55XSxcclxuICAgICdpbl92ZXJ0ZXhHYW1tYSc6IChub2RlKSA9PiBbbm9kZS4kX3N0eWxlLnZlcnRleEdhbW1hLngsIG5vZGUuJF9zdHlsZS52ZXJ0ZXhHYW1tYS55XSxcclxuICAgIC8qIGNyb3NzICovXHJcbiAgICAnaW5faW5uZXJTaXplJzogKG5vZGUpID0+IFtub2RlLiRfc3R5bGUuaW5uZXJXaWR0aCwgbm9kZS4kX3N0eWxlLmlubmVySGVpZ2h0XSxcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U2hhZGVyQXR0cmlidXRlVmFsdWUoZWxlbWVudDogTGluayB8IE5vZGUsIGF0dHJpYnV0ZU5hbWU6IHN0cmluZykge1xyXG4gICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ0xpbmsnKSB7XHJcbiAgICAgICAgcmV0dXJuIGxpbmtTaGFkZXJBdHRyTWFwW2F0dHJpYnV0ZU5hbWVdKGVsZW1lbnQpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBub2RlU2hhZGVyQXR0ck1hcFthdHRyaWJ1dGVOYW1lXShlbGVtZW50KVxyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIFhpYW9kb25nIFpoYW8gPHpoYW94aWFvZG9uZ0B6anUuZWR1LmNuPlxyXG4gKiBAZGVzY3JpcHRpb24gTGluayB1c2VkIGluIHJlbmRlcmVyXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgTGlua01hbmFnZXJDb25maWdzLCBTaGFkZXJzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcydcclxuaW1wb3J0IExpbmsgZnJvbSAnLi4vLi4vZWxlbWVudHMvbGluaydcclxuaW1wb3J0IHsgUmVuZGVyRWxlbWVudE1hbmFnZXIgfSBmcm9tICcuL3JlbmRlci1lbGVtZW50J1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlbmRlckxpbmtNYW5hZ2VyIGV4dGVuZHMgUmVuZGVyRWxlbWVudE1hbmFnZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBjcmVhdGUgcmVuZGVyIGxpbmsgbWFuYWdlclxyXG4gICAgICogQHBhcmFtIGdsIFdlYkdMIGNvbnRleHRcclxuICAgICAqIEBwYXJhbSBwYXJhbXMgbmVzc2VzYXJ5IGNvbmZpZ3MgZm9yIGxpbmsgbWFuYWdlclxyXG4gICAgICogQHBhcmFtIGlkVGV4dHVyZSB0ZXh0dXJlIHN0b3JlIGVsZW1lbnRzIGlkIG9mIGVhY2ggcGl4ZWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0LFxyXG4gICAgICAgIHBhcmFtczogTGlua01hbmFnZXJDb25maWdzLFxyXG4gICAgICAgIHNoYWRlcnM6IFNoYWRlcnMsXHJcbiAgICAgICAgaWRUZXh0dXJlOiBXZWJHTFRleHR1cmVcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKFxyXG4gICAgICAgICAgICAvKiB3ZWJnbCBjb250ZXh0ICovIGdsLFxyXG4gICAgICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgICAgICAgICAgLyogcGFyYW1ldGVycyAqLyB7Li4ucGFyYW1zLCBpbnN0YW5jZVZlcnRlY2VzOiBbXHJcbiAgICAgICAgICAgICAgICAtMC41LCAwLjUsIDEuMCxcclxuICAgICAgICAgICAgICAgIC0wLjUsIC0wLjUsIDEuMCxcclxuICAgICAgICAgICAgICAgIDAuNSwgMC41LCAxLjAsXHJcbiAgICAgICAgICAgICAgICAwLjUsIC0wLjUsIDEuMCxcclxuICAgICAgICAgICAgXX0sXHJcbiAgICAgICAgICAgIC8qIHNoYWRlciBzZXJpZXMgKi8ge1xyXG4gICAgICAgICAgICAgICAgLi4uc2hhZGVyc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvKiBpZFRleHR1cmUgKi8gaWRUZXh0dXJlXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMucmVuZGVySWRUb0VsZW1lbnQgPSB7fVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVmcmVzaCBhbGwgcG9zaXRpb24gb2YgZWRnZXNcclxuICAgICAqIEBwYXJhbSBsaW5rcyBhbGwgbGluayBkYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWZyZXNoUG9zaXRpb24obGlua3M6IExpbmtbXSkge1xyXG4gICAgICAgIGNvbnN0IHNvdXJjZUF0dHJpYnV0ZSA9IHRoaXMuYXR0cmlidXRlcy5nZXQoJ2luX3NvdXJjZScpXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0QXR0cmlidXRlID0gdGhpcy5hdHRyaWJ1dGVzLmdldCgnaW5fdGFyZ2V0JylcclxuXHJcbiAgICAgICAgbGlua3MuZm9yRWFjaCgobGluaywgaSkgPT4ge1xyXG4gICAgICAgICAgICBzb3VyY2VBdHRyaWJ1dGUuYXJyYXlbMiAqIGldID0gbGluay4kX3NvdXJjZS4kX3Bvc2l0aW9uLnhcclxuICAgICAgICAgICAgc291cmNlQXR0cmlidXRlLmFycmF5WzIgKiBpICsgMV0gPSBsaW5rLiRfc291cmNlLiRfcG9zaXRpb24ueVxyXG5cclxuICAgICAgICAgICAgdGFyZ2V0QXR0cmlidXRlLmFycmF5WzIgKiBpXSA9IGxpbmsuJF90YXJnZXQuJF9wb3NpdGlvbi54XHJcbiAgICAgICAgICAgIHRhcmdldEF0dHJpYnV0ZS5hcnJheVsyICogaSArIDFdID0gbGluay4kX3RhcmdldC4kX3Bvc2l0aW9uLnlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBhcnIgPSBbc291cmNlQXR0cmlidXRlLCB0YXJnZXRBdHRyaWJ1dGVdXHJcbiAgICAgICAgYXJyLmZvckVhY2goKGF0dHIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBhdHRyLmJ1ZmZlcilcclxuICAgICAgICAgICAgdGhpcy5nbC5idWZmZXJTdWJEYXRhKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCAwLCBhdHRyLmFycmF5LCAwLCBhdHRyLnNpemUgKiBsaW5rcy5sZW5ndGgpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogQGF1dGhvciBYaWFvZG9uZyBaaGFvIDx6aGFveGlhb2RvbmdAemp1LmVkdS5jbj5cclxuICogQGRlc2NyaXB0aW9uIE5vZGUgdXNpbmcgaW4gUmVuZGVyZXJcclxuICovXHJcblxyXG5pbXBvcnQgeyBOb2RlTWFuYWdlckNvbmZpZ3MsIFNoYWRlcnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgTm9kZSBmcm9tICcuLi8uLi9lbGVtZW50cy9ub2RlJ1xyXG5pbXBvcnQgeyBSZW5kZXJFbGVtZW50TWFuYWdlciB9IGZyb20gJy4vcmVuZGVyLWVsZW1lbnQnXHJcbmltcG9ydCB7IFNoYWRlciB9IGZyb20gJy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlbmRlck5vZGVNYW5hZ2VyIGV4dGVuZHMgUmVuZGVyRWxlbWVudE1hbmFnZXIge1xyXG4gICAgLy8gcHJpdmF0ZSBpZFRvSW5kZXg6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNyZWF0ZSByZW5kZXIgbm9kZSBtYW5hZ2VyXHJcbiAgICAgKiBAcGFyYW0gZ2wgV2ViR0wgY29udGV4dFxyXG4gICAgICogQHBhcmFtIHBhcmFtcyBuZXNzZXNhcnkgY29uZmlncyBmb3Igbm9kZSBtYW5hZ2VyXHJcbiAgICAgKiBAcGFyYW0gaWRUZXh0dXJlIHRleHR1cmUgc3RvcmUgZWxlbWVudHMgaWQgb2YgZWFjaCBwaXhlbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQsXHJcbiAgICAgICAgcGFyYW1zOiBOb2RlTWFuYWdlckNvbmZpZ3MsXHJcbiAgICAgICAgc2hhZGVyczogU2hhZGVycyxcclxuICAgICAgICAvLyBzaGFkZXJzOiBTaGFkZXJTZXJpZXMsXHJcbiAgICAgICAgaWRUZXh0dXJlOiBXZWJHTFRleHR1cmVcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKFxyXG4gICAgICAgICAgICAvKiB3ZWJnbCBjb250ZXh0ICovIGdsLFxyXG4gICAgICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgICAgICAgICAgLyogcGFyYW1ldGVycyAqLyB7Li4ucGFyYW1zLCBpbnN0YW5jZVZlcnRlY2VzOiBbXHJcbiAgICAgICAgICAgICAgICAtMC41LCAwLjUsIDEuMCxcclxuICAgICAgICAgICAgICAgIC0wLjUsIC0wLjUsIDEuMCxcclxuICAgICAgICAgICAgICAgIDAuNSwgMC41LCAxLjAsXHJcbiAgICAgICAgICAgICAgICAwLjUsIC0wLjUsIDEuMCxcclxuICAgICAgICAgICAgXX0sXHJcbiAgICAgICAgICAgIC8qIHNoYWRlciBzZXJpZXMgKi8ge1xyXG4gICAgICAgICAgICAgICAgLi4uc2hhZGVyc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvKiBpZFRleHR1cmUgKi8gaWRUZXh0dXJlXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMucmVuZGVySWRUb0VsZW1lbnQgPSB7fVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVmcmVzaCBhbGwgbm9kZXMgcG9zaXRpb24gYWZ0ZXIgbGF6eSB1cGRhdGVcclxuICAgICAqIEBwYXJhbSBub2RlcyBhbGwgbm9kZSBkYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWZyZXNoUG9zaXRpb24obm9kZXM6IE5vZGVbXSkge1xyXG4gICAgICAgIC8vIHNldCBhcnJheVxyXG4gICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLmF0dHJpYnV0ZXMuZ2V0KCdpbl9wb3NpdGlvbicpXHJcbiAgICAgICAgbm9kZXMuZm9yRWFjaCgobm9kZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBhdHRyLmFycmF5WzIgKiBpXSA9IG5vZGUuJF9wb3NpdGlvbi54XHJcbiAgICAgICAgICAgIGF0dHIuYXJyYXlbMiAqIGkgKyAxXSA9IG5vZGUuJF9wb3NpdGlvbi55XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBhdHRyLmJ1ZmZlcilcclxuICAgICAgICB0aGlzLmdsLmJ1ZmZlclN1YkRhdGEodGhpcy5nbC5BUlJBWV9CVUZGRVIsIDAsIGF0dHIuYXJyYXksIDAsIGF0dHIuc2l6ZSAqIG5vZGVzLmxlbmd0aClcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogQGRlc2NyaXB0aW9uIHJlbmRlciBncmFwaCB1c2luZyB3ZWJnbFxyXG4gKiBAYXV0aG9yIFhpYW9kb25nIFpoYW8gPHpoYW94aWFvZG9uZ0B6anUuZWR1LmNuPlxyXG4gKi9cclxuXHJcbmltcG9ydCAqIGFzIG5vZGVTaGFkZXJzIGZyb20gJy4vc2hhZGVycy9ub2RlLXNoYWRlcidcclxuaW1wb3J0ICogYXMgbGlua1NoYWRlcnMgZnJvbSAnLi9zaGFkZXJzL2xpbmstc2hhZGVyJ1xyXG5pbXBvcnQgTm9kZSBmcm9tICcuLi9lbGVtZW50cy9ub2RlJ1xyXG5pbXBvcnQgTGluayBmcm9tICcuLi9lbGVtZW50cy9saW5rJ1xyXG5pbXBvcnQgeyBSZW5kZXJOb2RlTWFuYWdlciB9IGZyb20gJy4vZWxlbWVudHMvcmVuZGVyLW5vZGUnXHJcbmltcG9ydCB7IFJlbmRlckxpbmtNYW5hZ2VyIH0gZnJvbSAnLi9lbGVtZW50cy9yZW5kZXItbGluaydcclxuaW1wb3J0IHsgVHJhbnNmb3JtLCBQb3NpdGlvbiB9IGZyb20gJy4uL2ludGVyZmFjZXMnXHJcbmltcG9ydCB7IFJlbmRlcmVyQ29uZmlncyB9IGZyb20gJy4vaW50ZXJmYWNlcydcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyBkZWNvZGVSZW5kZXJJZCB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5jb25zdCBNT0RJRklFRF9FTEVNRU5UU19DT1VOVF9VUFBFUl9USFJFU0hPTEQgPSAxMDAgLy8gd2hlbiBtb2RpZmllZEVsZW1lbnRDb3VudCBpcyBsYXJnZXIgdGhhbiBpdCwgJF9zaG91bGRMYXp5VXBkYXRlIHdpbGwgYmUgdHJ1ZVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlbmRlcmVyIHtcclxuICAgIHB1YmxpYyBub2RlTWFuYWdlcjogUmVuZGVyTm9kZU1hbmFnZXJcclxuICAgIHB1YmxpYyBsaW5rTWFuYWdlcjogUmVuZGVyTGlua01hbmFnZXJcclxuXHJcbiAgICBwdWJsaWMgbW9kaWZpZWRFbGVtZW50c0NvdW50ID0gMCAvLyByZWNvcmQgbW9kaWZpZWQgbGluayBudW0gdG8gY29udHJvbCBsYXp5IHVwZGF0ZVxyXG4gICAgcHVibGljIHNob3VsZExhenlVcGRhdGUgPSBmYWxzZSAvLyBmbGFnIHRvIGNvbnRyb2wgbGF6eSB1cGRhdGVcclxuXHJcbiAgICBwdWJsaWMgcGl4ZWxSYXRpbzogbnVtYmVyXHJcbiAgICBwcml2YXRlIGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0XHJcbiAgICBwcml2YXRlIGJhY2tncm91bmRDb2xvcjogQ29sb3JcclxuICAgIHByaXZhdGUgd2lkdGg6IG51bWJlclxyXG4gICAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlclxyXG4gICAgcHJpdmF0ZSBpZFRleHR1cmU6IFdlYkdMVGV4dHVyZVxyXG5cclxuICAgIHByaXZhdGUgZ2V0QWxsTm9kZXM6ICgpID0+IE5vZGVbXVxyXG4gICAgcHJpdmF0ZSBnZXRBbGxMaW5rczogKCkgPT4gTGlua1tdXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjcmVhdGUgcmVuZGVyZXIgb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0gY29uZmlncyB7Y2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGJhY2tncm91bmRDb2xvcjogQ29sb3IsIGRlZmF1bHRDb25maWdzOiBPYmplY3R9IGNvbmZpZ3MgcGFzc2VkIHRvIHJlbmRlcmVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb25maWdzOiBSZW5kZXJlckNvbmZpZ3MpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGNhbnZhcyxcclxuICAgICAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodCxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICBub2RlTGltaXQsXHJcbiAgICAgICAgICAgIGxpbmtMaW1pdCxcclxuICAgICAgICAgICAgZ2V0QWxsTm9kZXMsXHJcbiAgICAgICAgICAgIGdldEFsbExpbmtzXHJcbiAgICAgICAgfSA9IGNvbmZpZ3NcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5nbCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbDInKVxyXG4gICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldFYgcmVxdWlyZXMgV2ViR0wyIHN1cHBvcnRlZCBieSB5b3VyIGJyb3dzZXInKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3JcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGhcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxyXG5cclxuICAgICAgICB0aGlzLnBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxXHJcblxyXG4gICAgICAgIHRoaXMuZ2V0QWxsTm9kZXMgPSBnZXRBbGxOb2Rlc1xyXG4gICAgICAgIHRoaXMuZ2V0QWxsTGlua3MgPSBnZXRBbGxMaW5rc1xyXG5cclxuICAgICAgICB0aGlzLmluaXRJZFRleHR1cmUoKVxyXG5cclxuICAgICAgICB0aGlzLm5vZGVNYW5hZ2VyID0gbmV3IFJlbmRlck5vZGVNYW5hZ2VyKFxyXG4gICAgICAgICAgICB0aGlzLmdsLFxyXG4gICAgICAgICAgICB7IHdpZHRoLCBoZWlnaHQsIGxpbWl0OiBub2RlTGltaXQgfSxcclxuICAgICAgICAgICAgbm9kZVNoYWRlcnMsXHJcbiAgICAgICAgICAgIHRoaXMuaWRUZXh0dXJlXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMubGlua01hbmFnZXIgPSBuZXcgUmVuZGVyTGlua01hbmFnZXIoXHJcbiAgICAgICAgICAgIHRoaXMuZ2wsXHJcbiAgICAgICAgICAgIHsgd2lkdGgsIGhlaWdodCwgbGltaXQ6IGxpbmtMaW1pdCB9LFxyXG4gICAgICAgICAgICBsaW5rU2hhZGVycyxcclxuICAgICAgICAgICAgdGhpcy5pZFRleHR1cmVcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBkaXNwb3NlIHJlbmRlcmVyIHN0dWZmc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICAvLyByZWZlcjogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIzNjA2NTgxXHJcbiAgICAgICAgY29uc3QgbnVtVGV4dHVyZVVuaXRzID0gdGhpcy5nbC5nZXRQYXJhbWV0ZXIodGhpcy5nbC5NQVhfVEVYVFVSRV9JTUFHRV9VTklUUylcclxuICAgICAgICBmb3IgKGxldCB1bml0ID0gMDsgdW5pdCA8IG51bVRleHR1cmVVbml0czsgKyt1bml0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuYWN0aXZlVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkUwICsgdW5pdClcclxuICAgICAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfMkQsIG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFX0NVQkVfTUFQLCBudWxsKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIG51bGwpXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG51bGwpXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kUmVuZGVyYnVmZmVyKHRoaXMuZ2wuUkVOREVSQlVGRkVSLCBudWxsKVxyXG4gICAgICAgIHRoaXMuZ2wuYmluZEZyYW1lYnVmZmVyKHRoaXMuZ2wuRlJBTUVCVUZGRVIsIG51bGwpXHJcbiAgICAgICAgdGhpcy5nbC5nZXRFeHRlbnNpb24oJ1dFQkdMX2xvc2VfY29udGV4dCcpLmxvc2VDb250ZXh0KClcclxuICAgICAgICAvLyBUT0RPOiBtYXliZSBuZWVkIGZyZWUgbW9yZSBidWZmZXJzIG9yIHNvbWV0aGluZyBlbHNlXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQgY2xlYXJDb2xvciBmb3IgcmVuZGVyZXJcclxuICAgICAqIEBwYXJhbSBjb2xvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0QmFja2dyb3VuZENvbG9yKGNvbG9yOiBDb2xvcikge1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gY29sb3JcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNsZWFyIGRhdGEgaW4gcmVuZGVyZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNsZWFyRGF0YSgpIHtcclxuICAgICAgICB0aGlzLm5vZGVNYW5hZ2VyLmNsZWFyRGF0YSgpXHJcbiAgICAgICAgdGhpcy5saW5rTWFuYWdlci5jbGVhckRhdGEoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIG5vZGVzIHRvIG5vZGUgbWFuYWdlclxyXG4gICAgICogQHBhcmFtIG5vZGVzIG5vZGUgZGF0YSBpbiBOZXRWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGROb2Rlcyhub2RlczogTm9kZVtdKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlTWFuYWdlci5hZGREYXRhKG5vZGVzKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIGxpbmtzIHRvIGxpbmsgbWFuYWdlclxyXG4gICAgICogQHBhcmFtIGxpbmtzIGxpbmsgZGF0YSBpbiBOZXRWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRMaW5rcyhsaW5rczogTGlua1tdKSB7XHJcbiAgICAgICAgdGhpcy5saW5rTWFuYWdlci5hZGREYXRhKGxpbmtzKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRUcmFuc2Zvcm0odHJhbnNmb3JtOiBUcmFuc2Zvcm0pIHtcclxuICAgICAgICB0aGlzLm5vZGVNYW5hZ2VyLnNldFRyYW5zZm9ybSh0cmFuc2Zvcm0pXHJcbiAgICAgICAgdGhpcy5saW5rTWFuYWdlci5zZXRUcmFuc2Zvcm0odHJhbnNmb3JtKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZHJhdyBhbGwgZWxlbWVudHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRyYXcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkTGF6eVVwZGF0ZSkge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBub3Qgb25seSBwb3NpdGlvbiBuZWVkcyB0byBiZSByZWZyZXNoZWQsIGJ1dCBhbHNvIG90aGVyIHN0eWxlc1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVNYW5hZ2VyLnJlZnJlc2hQb3NpdGlvbih0aGlzLmdldEFsbE5vZGVzKCkpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmxpbmtNYW5hZ2VyLnJlZnJlc2hQb3NpdGlvbih0aGlzLmdldEFsbExpbmtzKCkpXHJcbiAgICAgICAgICAgIHRoaXMuc2hvdWxkTGF6eVVwZGF0ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMubW9kaWZpZWRFbGVtZW50c0NvdW50ID0gMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5GUkFNRUJVRkZFUiwgdGhpcy5pZFRleHR1cmUpXHJcbiAgICAgICAgdGhpcy5nbC5jbGVhckNvbG9yKDEsIDEsIDEsIDEpXHJcbiAgICAgICAgdGhpcy5nbC5jbGVhcih0aGlzLmdsLkNPTE9SX0JVRkZFUl9CSVQpXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5GUkFNRUJVRkZFUiwgbnVsbClcclxuXHJcbiAgICAgICAgdGhpcy5nbC5jbGVhckNvbG9yKFxyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvci5yLFxyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvci5nLFxyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvci5iLFxyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvci5hXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMuZ2wuY2xlYXIodGhpcy5nbC5DT0xPUl9CVUZGRVJfQklUKVxyXG4gICAgICAgIHRoaXMubGlua01hbmFnZXIuZHJhdygpXHJcbiAgICAgICAgdGhpcy5ub2RlTWFuYWdlci5kcmF3KClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldCBlbGVtZW50J3MgaWQgYXQgKHgsIHkpIG9mIGNhbnZhcyBpZiBleGlzdHNcclxuICAgICAqIEBwYXJhbSB4IHggcG9zXHJcbiAgICAgKiBAcGFyYW0geSB5IHBvc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0SWRCeVBvc2l0aW9uKHBvc2l0aW9uOiBQb3NpdGlvbik6IHN0cmluZyB8IFtzdHJpbmcsIHN0cmluZ10ge1xyXG4gICAgICAgIGNvbnN0IHJlbmRlcklkID0gdGhpcy5yZWFkSWRUZXh0dXJlKHBvc2l0aW9uKVxyXG4gICAgICAgIGlmIChyZW5kZXJJZCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChyZW5kZXJJZCAlIDIgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIE5PVEU6IG5vZGUgaGFzIGV2ZW4gcmVuZGVyIGlkLCBsaW5rIGhhcyBvZGQgcmVuZGVyIGlkXHJcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5ub2RlTWFuYWdlci5nZXRFbGVtZW50QnlSZW5kZXJJZChyZW5kZXJJZCkgYXMgTm9kZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuaWQoKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGluayA9IHRoaXMubGlua01hbmFnZXIuZ2V0RWxlbWVudEJ5UmVuZGVySWQocmVuZGVySWQpIGFzIExpbmtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZVRhcmdldCA9IGxpbmsuc291cmNlVGFyZ2V0KClcclxuICAgICAgICAgICAgICAgIHJldHVybiBbc291cmNlVGFyZ2V0LnNvdXJjZS5pZCgpLCBzb3VyY2VUYXJnZXQudGFyZ2V0LmlkKCldXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZWFkIHBpeGVsIHZhbHVlIGF0ICh4LCB5KSBvZiB0ZXh0dXJlXHJcbiAgICAgKiBAcGFyYW0geCB4IHBvc1xyXG4gICAgICogQHBhcmFtIHkgeSBwb3NcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRJZFRleHR1cmUocG9zaXRpb246IFBvc2l0aW9uKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCByYXRpbyA9IHRoaXMucGl4ZWxSYXRpb1xyXG4gICAgICAgIHRoaXMuZ2wuYmluZEZyYW1lYnVmZmVyKHRoaXMuZ2wuUkVBRF9GUkFNRUJVRkZFUiwgdGhpcy5pZFRleHR1cmUpXHJcbiAgICAgICAgY29uc3QgcmVhZFBpeGVsQnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoWzI1NSwgMjU1LCAyNTUsIDI1NV0pIC8vIC0xXHJcbiAgICAgICAgdGhpcy5nbC5yZWFkUGl4ZWxzKFxyXG4gICAgICAgICAgICAvLyAhV2FybmluZzogeCBhbmQgeSBhcmUgb3B0aW9uYWwgaW4gUG9zaXRpb24sIG5lZWQgdG8gY2hlY2sgdGhlbVxyXG4gICAgICAgICAgICBwb3NpdGlvbi54ICogcmF0aW8sXHJcbiAgICAgICAgICAgIHBvc2l0aW9uLnkgKiByYXRpbyxcclxuICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgdGhpcy5nbC5SR0JBLFxyXG4gICAgICAgICAgICB0aGlzLmdsLlVOU0lHTkVEX0JZVEUsXHJcbiAgICAgICAgICAgIHJlYWRQaXhlbEJ1ZmZlclxyXG4gICAgICAgIClcclxuICAgICAgICBjb25zdCBvYmplY3RJRCA9IGRlY29kZVJlbmRlcklkKHJlYWRQaXhlbEJ1ZmZlcilcclxuXHJcbiAgICAgICAgcmV0dXJuIG9iamVjdElEXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpbmNyZWFzZSBtb2RpZmllZCBlbGVtZW50cyBjb3VudFxyXG4gICAgICogV2hlbiBpdCBpcyBsYXJnZXIgdGhhbiBhIHRocmVzaG9sZCwgdGhlIGxhenkgdXBkYXRlIG1vZGUgd2lsbCBiZSB0dXJuZWQgb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbmNyZWFzZU1vZGlmaWVkRWxlbWVudHNDb3VudEJ5KG46IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubW9kaWZpZWRFbGVtZW50c0NvdW50ICs9IG5cclxuICAgICAgICBpZiAodGhpcy5tb2RpZmllZEVsZW1lbnRzQ291bnQgPiBNT0RJRklFRF9FTEVNRU5UU19DT1VOVF9VUFBFUl9USFJFU0hPTEQpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG91bGRMYXp5VXBkYXRlID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGluaXQgV2ViR0wgdGV4dHVyZSBmb3IgcmVjb3JkaW5nIHBvc2l0aW9uIG9mIGVsZW1lbnRzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaW5pdElkVGV4dHVyZSgpIHtcclxuICAgICAgICBjb25zdCBnbCA9IHRoaXMuZ2xcclxuICAgICAgICBjb25zdCBwaXhlbFJhdGlvID0gdGhpcy5waXhlbFJhdGlvXHJcbiAgICAgICAgY29uc3Qgc2NyZWVuV2lkdGggPSB0aGlzLndpZHRoICogcGl4ZWxSYXRpb1xyXG4gICAgICAgIGNvbnN0IHNjcmVlbkhlaWdodCA9IHRoaXMuaGVpZ2h0ICogcGl4ZWxSYXRpb1xyXG5cclxuICAgICAgICBjb25zdCBmYm8gPSBnbC5jcmVhdGVGcmFtZWJ1ZmZlcigpXHJcbiAgICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBmYm8pXHJcblxyXG4gICAgICAgIGNvbnN0IGlkVGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKVxyXG4gICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIGlkVGV4dHVyZSlcclxuICAgICAgICBnbC50ZXhJbWFnZTJEKFxyXG4gICAgICAgICAgICBnbC5URVhUVVJFXzJELFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICBnbC5SR0JBLFxyXG4gICAgICAgICAgICBzY3JlZW5XaWR0aCxcclxuICAgICAgICAgICAgc2NyZWVuSGVpZ2h0LFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICBnbC5SR0JBLFxyXG4gICAgICAgICAgICBnbC5VTlNJR05FRF9CWVRFLFxyXG4gICAgICAgICAgICBudWxsXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVIpXHJcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLkxJTkVBUilcclxuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKVxyXG4gICAgICAgIGdsLmZyYW1lYnVmZmVyVGV4dHVyZTJEKGdsLkZSQU1FQlVGRkVSLCBnbC5DT0xPUl9BVFRBQ0hNRU5UMCwgZ2wuVEVYVFVSRV8yRCwgaWRUZXh0dXJlLCAwKVxyXG5cclxuICAgICAgICAvLyBUT0RPOiBuZWVkIHNpbXBsaWZ5XHJcbiAgICAgICAgZ2wuZHJhd0J1ZmZlcnMoWzBdLm1hcCgodikgPT4gdiArIGdsLkNPTE9SX0FUVEFDSE1FTlQwKSlcclxuXHJcbiAgICAgICAgY29uc3QgcmJvID0gZ2wuY3JlYXRlUmVuZGVyYnVmZmVyKClcclxuICAgICAgICBnbC5iaW5kUmVuZGVyYnVmZmVyKGdsLlJFTkRFUkJVRkZFUiwgcmJvKVxyXG4gICAgICAgIGdsLmNsZWFyQ29sb3IoMSwgMSwgMSwgMSlcclxuICAgICAgICBnbC5yZW5kZXJidWZmZXJTdG9yYWdlKGdsLlJFTkRFUkJVRkZFUiwgZ2wuREVQVEgyNF9TVEVOQ0lMOCwgc2NyZWVuV2lkdGgsIHNjcmVlbkhlaWdodClcclxuICAgICAgICBnbC5iaW5kUmVuZGVyYnVmZmVyKGdsLlJFTkRFUkJVRkZFUiwgbnVsbClcclxuICAgICAgICBnbC5mcmFtZWJ1ZmZlclJlbmRlcmJ1ZmZlcihcclxuICAgICAgICAgICAgZ2wuRlJBTUVCVUZGRVIsXHJcbiAgICAgICAgICAgIGdsLkRFUFRIX1NURU5DSUxfQVRUQUNITUVOVCxcclxuICAgICAgICAgICAgZ2wuUkVOREVSQlVGRkVSLFxyXG4gICAgICAgICAgICByYm9cclxuICAgICAgICApXHJcblxyXG4gICAgICAgIGlmIChnbC5jaGVja0ZyYW1lYnVmZmVyU3RhdHVzKGdsLkZSQU1FQlVGRkVSKSAhPT0gZ2wuRlJBTUVCVUZGRVJfQ09NUExFVEUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGcmFtZWJ1ZmZlciBnZW5lcmF0ZSBmYWlsZWQnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKVxyXG5cclxuICAgICAgICB0aGlzLmlkVGV4dHVyZSA9IGZib1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNoYWRlciB9IGZyb20gJy4uL3V0aWxzJ1xyXG5cclxuY29uc3QgdmVydGV4ID0gbmV3IFNoYWRlcigpXHJcbnZlcnRleC5pbnB1dHMgPSB7XHJcbiAgICBpblZlcnRleFBvczogJ3ZlYzMnLFxyXG4gICAgaW5fc2hhcGU6ICdmbG9hdCcsXHJcbiAgICBpbl9zb3VyY2U6ICd2ZWMyJyxcclxuICAgIGluX3RhcmdldDogJ3ZlYzInLFxyXG4gICAgaW5fY3VydmVuZXNzOiAnZmxvYXQnLFxyXG4gICAgaW5fZGFzaEludGVydmFsOiAnZmxvYXQnLFxyXG4gICAgaW5fc3Ryb2tlV2lkdGg6ICdmbG9hdCcsXHJcbiAgICBpbl9zdHJva2VDb2xvcjogJ3ZlYzQnXHJcbn1cclxudmVydGV4Lm91dHB1dHMgPSB7XHJcbiAgICBzaGFwZTogJ2Zsb2F0JyxcclxuICAgIHN0cm9rZUNvbG9yOiAndmVjNCcsXHJcbiAgICBzdHJva2VXaWR0aDogJ2Zsb2F0JyxcclxuICAgIGNwQTogJ3ZlYzInLFxyXG4gICAgY3BCOiAndmVjMicsXHJcbiAgICBjcEM6ICd2ZWMyJyxcclxuICAgIGN1cnZlbmVzczogJ2Zsb2F0JyxcclxuICAgIGRhc2hJbnRlcnZhbDogJ2Zsb2F0J1xyXG59XHJcbnZlcnRleC51bmlmb3JtcyA9IHtcclxuICAgIHByb2plY3Rpb246ICdtYXQzJyxcclxuICAgIHNjYWxlOiAndmVjMicsXHJcbiAgICB0cmFuc2xhdGU6ICd2ZWMyJ1xyXG59XHJcbnZlcnRleC5tYWluID0gW1xyXG4gICAgYHZvaWQgbWFpbih2b2lkKSB7YCxcclxuICAgIGAgICAgc3Ryb2tlQ29sb3IgPSBpbl9zdHJva2VDb2xvcjtgLFxyXG4gICAgYCAgICBzdHJva2VXaWR0aCA9IGluX3N0cm9rZVdpZHRoO2AsXHJcbiAgICBgICAgIHNoYXBlID0gaW5fc2hhcGU7YCxcclxuICAgIGAgICAgZGFzaEludGVydmFsID0gaW5fZGFzaEludGVydmFsO2AsXHJcbiAgICBgICAgIHZlYzIgc291cmNlID0gaW5fc291cmNlICogc2NhbGUgKyB0cmFuc2xhdGU7YCxcclxuICAgIGAgICAgdmVjMiB0YXJnZXQgPSBpbl90YXJnZXQgKiBzY2FsZSArIHRyYW5zbGF0ZTtgLFxyXG4gICAgYCAgICB2ZWMyIGRlbHRhID0gdGFyZ2V0IC0gc291cmNlO2AsXHJcbiAgICBgICAgIHZlYzIgY2VudGVyID0gMC41ICogKHNvdXJjZSArIHRhcmdldCk7YCxcclxuICAgIGAgICAgZmxvYXQgbGVuID0gbGVuZ3RoKGRlbHRhKTtgLFxyXG4gICAgYCAgICBmbG9hdCBwaGkgPSBhdGFuKGRlbHRhLnkgLyBkZWx0YS54KTtgLFxyXG5cclxuICAgIGAgICAgZmxvYXQgY29udGFpbmVyV2lkdGggPSBpbl9zdHJva2VXaWR0aDtgLFxyXG4gICAgYCAgICBpZiAoaW5fc2hhcGUgPT0gMS4pIHtgLCAvLyBjaXJjbGUgc2hhcGUgbmVlZCBsYXJnZXIgY29udGFpbmVyXHJcbiAgICBgICAgICAgIGNvbnRhaW5lcldpZHRoID0gMi4gKiAoaW5fY3VydmVuZXNzICogbGVuICsgaW5fc3Ryb2tlV2lkdGgpOyAvLyBUT0RPOiBjYW4gb3B0aW1pemUgdG8gaGFsZmAsXHJcbiAgICBgICAgIH1gLFxyXG4gICAgYCAgICB2ZWMyIG5vcm1hbCA9IG5vcm1hbGl6ZSh2ZWMyKGRlbHRhLnksIC1kZWx0YS54KSk7IC8vIFRPRE86IGxpbmsncyBub3JtYWwsIG5lZWQgY29udHJvbCBzaWRlYCxcclxuICAgIGAgICAgY3BBID0gc291cmNlO2AsXHJcbiAgICBgICAgIGNwQiA9IGNlbnRlciArIG5vcm1hbCAqIGxlbiAqIGluX2N1cnZlbmVzcztgLFxyXG4gICAgYCAgICBjcEMgPSB0YXJnZXQ7YCxcclxuXHJcbiAgICBgYCxcclxuICAgIGAgICAgbWF0MyBsaW5lX3NjYWxlID0gbWF0MyhgLFxyXG4gICAgYCAgICAgICAgbGVuLCAwLCAwLGAsXHJcbiAgICBgICAgICAgICAwLCBjb250YWluZXJXaWR0aCwgMCxgLFxyXG4gICAgYCAgICAgICAgMCwgMCwgMWAsXHJcbiAgICBgICAgICk7YCxcclxuICAgIGAgICAgbWF0MyBsaW5lX3JvdGF0ZSA9IG1hdDMoYCxcclxuICAgIGAgICAgICAgIGNvcyhwaGkpLCBzaW4ocGhpKSwgMCxgLFxyXG4gICAgYCAgICAgICAgLXNpbihwaGkpLCBjb3MocGhpKSwgMCxgLFxyXG4gICAgYCAgICAgICAgMCwgMCwgMWAsXHJcbiAgICBgICAgICk7YCxcclxuICAgIGAgICAgbWF0MyBsaW5lX3RyYW5zbGF0ZSA9IG1hdDMoYCxcclxuICAgIGAgICAgICAgIDEsIDAsIDAsYCxcclxuICAgIGAgICAgICAgIDAsIDEsIDAsYCxcclxuICAgIGAgICAgICAgIGNlbnRlci54LCBjZW50ZXIueSwgMWAsXHJcbiAgICBgICAgICk7YCxcclxuICAgIGAgICAgYCxcclxuICAgIGAgICAgbWF0MyB0cmFuc2Zvcm0gPSBsaW5lX3RyYW5zbGF0ZSAqIGxpbmVfcm90YXRlICogbGluZV9zY2FsZTtgLFxyXG4gICAgYGAsXHJcbiAgICBgICAgIGdsX1Bvc2l0aW9uID0gdmVjNChwcm9qZWN0aW9uICogdHJhbnNmb3JtICogaW5WZXJ0ZXhQb3MsIDEuKTtgLFxyXG4gICAgYH1gXHJcbl1cclxuXHJcbmNvbnN0IGlkVmVydGV4ID0gdmVydGV4LmNvcHkoKVxyXG5pZFZlcnRleC5pbnB1dHNbJ2luX2lkJ10gPSAndmVjNCdcclxuaWRWZXJ0ZXgub3V0cHV0c1snaWQnXSA9ICd2ZWM0J1xyXG5pZFZlcnRleC5tYWluLnNwbGljZSgxLCAwLCBgaWQgPSBpbl9pZDtgKVxyXG5cclxuY29uc3QgZnJhZ21lbnQgPSBuZXcgU2hhZGVyKClcclxuZnJhZ21lbnQuaW5wdXRzID0geyAuLi52ZXJ0ZXgub3V0cHV0cyB9XHJcbmZyYWdtZW50Lm91dHB1dHMgPSB7XHJcbiAgICBmcmFnbWVudENvbG9yOiAndmVjNCdcclxufVxyXG5mcmFnbWVudC51bmlmb3JtcyA9IHtcclxuICAgIHZpZXdwb3J0OiAndmVjMicsXHJcbiAgICBwaXhlbFJhdGlvOiAnZmxvYXQnXHJcbn1cclxuXHJcbmZyYWdtZW50Lm1ldGhvZHMgPSBbXHJcbiAgICBbXHJcbiAgICAgICAgYC8vIHJlZmVyZW5jZSBwYXBlcjogaHR0cDovL2hob3BwZS5jb20vcmF2Zy5wZGZgLFxyXG4gICAgICAgIGAvLyBkaXN0YW5jZSB2ZWN0b3IgdG8gb3JpZ2luKDAsIDApYCxcclxuICAgICAgICBgZmxvYXQgZGV0KHZlYzIgYSwgdmVjMiBiKSB7IHJldHVybiBhLnggKiBiLnkgLSBiLnggKiBhLnk7IH1gLFxyXG4gICAgICAgIGBgLFxyXG4gICAgICAgIGB2ZWMyIGdldF9kaXN0YW5jZV92ZWN0b3IodmVjMiBiMCwgdmVjMiBiMSwgdmVjMiBiMikge2AsXHJcbiAgICAgICAgYCAgZmxvYXQgYSA9IGRldChiMCwgYjIpLCBiID0gMi4wICogZGV0KGIxLCBiMCksIGQgPSAyLjAgKiBkZXQoYjIsIGIxKTtgLFxyXG4gICAgICAgIGAgIGZsb2F0IGYgPSBiICogZCAtIGEgKiBhO2AsXHJcbiAgICAgICAgYCAgdmVjMiBkMjEgPSBiMiAtIGIxLCBkMTAgPSBiMSAtIGIwLCBkMjAgPSBiMiAtIGIwO2AsXHJcbiAgICAgICAgYCAgdmVjMiBnZiA9IDIuMCAqIChiICogZDIxICsgZCAqIGQxMCArIGEgKiBkMjApO2AsXHJcbiAgICAgICAgYCAgZ2YgPSB2ZWMyKGdmLnksIC1nZi54KTtgLFxyXG4gICAgICAgIGAgIHZlYzIgcHAgPSAtZiAqIGdmIC8gZG90KGdmLCBnZik7YCxcclxuICAgICAgICBgICB2ZWMyIGQwcCA9IGIwIC0gcHA7YCxcclxuICAgICAgICBgICBmbG9hdCBhcCA9IGRldChkMHAsIGQyMCksIGJwID0gMi4wICogZGV0KGQxMCwgZDBwKTtgLFxyXG4gICAgICAgIGAgIGZsb2F0IHQgPSBjbGFtcCgoYXAgKyBicCkgLyAoMi4wICogYSArIGIgKyBkKSwgMC4wLCAxLjApO2AsXHJcbiAgICAgICAgYCAgcmV0dXJuIG1peChtaXgoYjAsIGIxLCB0KSwgbWl4KGIxLCBiMiwgdCksIHQpO2AsXHJcbiAgICAgICAgYH1gXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICAgIGBmbG9hdCBkaXN0VG9RdWFkcmF0aWNCZXppZXJDdXJ2ZSh2ZWMyIHAsIHZlYzIgYjAsIHZlYzIgYjEsIHZlYzIgYjIpIHtgLFxyXG4gICAgICAgIGAgIHJldHVybiBsZW5ndGgoZ2V0X2Rpc3RhbmNlX3ZlY3RvcihiMCAtIHAsIGIxIC0gcCwgYjIgLSBwKSk7YCxcclxuICAgICAgICBgfWBcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICAgYGZsb2F0IGlzSW5EYXNoKHZlYzIgcCwgdmVjMiBwMCwgdmVjMiBwMSwgaW50IGRhc2hJbnRlcnZhbCkge2AsXHJcbiAgICAgICAgYCAgaWYgKGRhc2hJbnRlcnZhbCA8PSAwKSB7YCxcclxuICAgICAgICBgICAgIHJldHVybiAwLjtgLFxyXG4gICAgICAgIGAgIH1gLFxyXG4gICAgICAgIGAgIGlmIChkYXNoSW50ZXJ2YWwgPj0gaW50KGxlbmd0aChwMSAtIHAwKSkpIHtgLFxyXG4gICAgICAgIGAgICAgcmV0dXJuIDEuO2AsXHJcbiAgICAgICAgYCAgfWAsXHJcbiAgICAgICAgYCAgZmxvYXQgZCA9IGRvdCgocCAtIHAwKSwgKHAxIC0gcDApKSAvIGxlbmd0aChwMSAtIHAwKTtgLCAvLyBwcm9qZWN0ZWQgcCB0byBwMC1wMSBsaW5lIGFuZCBjYWxjdWxhdGUgZGlzdGFuY2UgdG8gcDBcclxuICAgICAgICBgICBpbnQgaWR4ID0gaW50KGQpIC8gZGFzaEludGVydmFsO2AsXHJcbiAgICAgICAgYCAgcmV0dXJuIDEuIC0gZmxvYXQoaWR4ICUgMik7YCxcclxuICAgICAgICBgfWBcclxuICAgIF1cclxuXVxyXG5cclxuZnJhZ21lbnQubWFpbiA9IFtcclxuICAgIGB2b2lkIG1haW4odm9pZCkge2AsXHJcbiAgICBgICBpZiAoc2hhcGUgPT0gMC4pIHtgLFxyXG4gICAgYCAgICAvLyBsaW5lYCxcclxuICAgIGAgICAgZnJhZ21lbnRDb2xvciA9IHZlYzQoc3Ryb2tlQ29sb3IucmdiICogc3Ryb2tlQ29sb3IuYSwgc3Ryb2tlQ29sb3IuYSk7YCxcclxuICAgIGAgIH0gZWxzZSBpZiAoc2hhcGUgPT0gMS4pIHtgLFxyXG4gICAgYCAgICAvLyBjdXJ2ZWAsXHJcbiAgICBgICAgIHZlYzIgcG9zID0gZ2xfRnJhZ0Nvb3JkLnh5IC8gcGl4ZWxSYXRpbztgLFxyXG4gICAgYCAgICB2ZWMyIGNwQUZsaXBwZWQgPSB2ZWMyKGNwQS54LCB2aWV3cG9ydC55IC0gY3BBLnkpO2AsXHJcbiAgICBgICAgIHZlYzIgY3BCRmxpcHBlZCA9IHZlYzIoY3BCLngsIHZpZXdwb3J0LnkgLSBjcEIueSk7YCxcclxuICAgIGAgICAgdmVjMiBjcENGbGlwcGVkID0gdmVjMihjcEMueCwgdmlld3BvcnQueSAtIGNwQy55KTtgLFxyXG4gICAgYCAgICBmbG9hdCBkaXN0ID0gZGlzdFRvUXVhZHJhdGljQmV6aWVyQ3VydmUocG9zLCBjcEFGbGlwcGVkLCBjcEJGbGlwcGVkLCBjcENGbGlwcGVkKTtgLFxyXG4gICAgYCAgICBmbG9hdCBlcHNpbG9uID0gZndpZHRoKGRpc3QpO2AsXHJcbiAgICBgICAgIGlmIChkaXN0IDwgc3Ryb2tlV2lkdGggLyAyLiArIGVwc2lsb24pIHtgLFxyXG4gICAgYCAgICAgIGZsb2F0IGluQ3VydmUgPSAxLiAtIHNtb290aHN0ZXAoc3Ryb2tlV2lkdGggLyAyLiAtIGVwc2lsb24sIHN0cm9rZVdpZHRoIC8gMi4gKyBlcHNpbG9uLCBkaXN0KTtgLFxyXG4gICAgYCAgICAgIGZyYWdtZW50Q29sb3IgPSBpbkN1cnZlICogdmVjNChzdHJva2VDb2xvci5yZ2IgKiBzdHJva2VDb2xvci5hLCBzdHJva2VDb2xvci5hKTtgLFxyXG4gICAgYCAgICB9IGVsc2Uge2AsXHJcbiAgICBgICAgICAgZGlzY2FyZDtgLFxyXG4gICAgYCAgICB9YCxcclxuICAgIGAgIH0gZWxzZSBpZiAoc2hhcGUgPT0gMi4pIHtgLFxyXG4gICAgYCAgICAvLyBkYXNoLWxpbmVgLFxyXG4gICAgYCAgICB2ZWMyIHBvcyA9IGdsX0ZyYWdDb29yZC54eSAvIHBpeGVsUmF0aW87YCxcclxuICAgIGAgICAgdmVjMiBjcEFGbGlwcGVkID0gdmVjMihjcEEueCwgdmlld3BvcnQueSAtIGNwQS55KTtgLFxyXG4gICAgYCAgICB2ZWMyIGNwQ0ZsaXBwZWQgPSB2ZWMyKGNwQy54LCB2aWV3cG9ydC55IC0gY3BDLnkpO2AsXHJcbiAgICBgICAgIGlmKGlzSW5EYXNoKHBvcywgY3BBRmxpcHBlZCwgY3BDRmxpcHBlZCwgaW50KGRhc2hJbnRlcnZhbCkpID4gMC41KSB7YCxcclxuICAgIGAgICAgICBmcmFnbWVudENvbG9yID0gdmVjNChzdHJva2VDb2xvci5yZ2IgKiBzdHJva2VDb2xvci5hLCBzdHJva2VDb2xvci5hKTtgLFxyXG4gICAgYCAgICB9IGVsc2Uge2AsXHJcbiAgICBgICAgICAgZGlzY2FyZDtgLFxyXG4gICAgYCAgICB9YCxcclxuICAgIGAgIH1gLFxyXG4gICAgYH1gXHJcbl1cclxuXHJcbmNvbnN0IGlkRnJhZ21lbnQgPSBmcmFnbWVudC5jb3B5KClcclxuaWRGcmFnbWVudC5pbnB1dHNbJ2lkJ10gPSAndmVjNCdcclxuXHJcbmNvbnN0IHNlbnRlbmNlc1RvYmVSZXBsYWNlZCA9IFtcclxuICAgIGAgICAgZnJhZ21lbnRDb2xvciA9IHZlYzQoc3Ryb2tlQ29sb3IucmdiICogc3Ryb2tlQ29sb3IuYSwgc3Ryb2tlQ29sb3IuYSk7YCxcclxuICAgIGAgICAgICBmcmFnbWVudENvbG9yID0gaW5DdXJ2ZSAqIHZlYzQoc3Ryb2tlQ29sb3IucmdiICogc3Ryb2tlQ29sb3IuYSwgc3Ryb2tlQ29sb3IuYSk7YCxcclxuICAgIGAgICAgICBmcmFnbWVudENvbG9yID0gdmVjNChzdHJva2VDb2xvci5yZ2IgKiBzdHJva2VDb2xvci5hLCBzdHJva2VDb2xvci5hKTtgXHJcbl1cclxuc2VudGVuY2VzVG9iZVJlcGxhY2VkLmZvckVhY2goKHNlbnRlbmNlKSA9PiB7XHJcbiAgICBpZEZyYWdtZW50Lm1haW5baWRGcmFnbWVudC5tYWluLmluZGV4T2Yoc2VudGVuY2UpXSA9IGBmcmFnbWVudENvbG9yID0gaWQ7YFxyXG59KVxyXG5cclxuZXhwb3J0IHsgdmVydGV4LCBpZFZlcnRleCwgZnJhZ21lbnQsIGlkRnJhZ21lbnQgfVxyXG4iLCJpbXBvcnQgeyBTaGFkZXIgfSBmcm9tICcuLi91dGlscydcclxuXHJcbmNvbnN0IHZlcnRleCA9IG5ldyBTaGFkZXIoKVxyXG52ZXJ0ZXguaW5wdXRzID0ge1xyXG4gICAgaW5WZXJ0ZXhQb3M6ICd2ZWMzJyxcclxuICAgIGluX3NoYXBlOiAnZmxvYXQnLFxyXG4gICAgaW5fcG9zaXRpb246ICd2ZWMyJyxcclxuICAgIGluX29mZnNldDogJ3ZlYzInLFxyXG4gICAgaW5fc2l6ZTogJ3ZlYzInLCAvLyB3aWR0aCAmIGhlaWdodFxyXG4gICAgaW5faW5uZXJTaXplOiAndmVjMicsXHJcbiAgICBpbl9yb3RhdGU6ICdmbG9hdCcsXHJcbiAgICBpbl9yOiAnZmxvYXQnLFxyXG4gICAgaW5fdmVydGV4QWxwaGE6ICd2ZWMyJyxcclxuICAgIGluX3ZlcnRleEJldGE6ICd2ZWMyJyxcclxuICAgIGluX3ZlcnRleEdhbW1hOiAndmVjMicsXHJcbiAgICBpbl9maWxsOiAndmVjNCcsXHJcbiAgICBpbl9zdHJva2VXaWR0aDogJ2Zsb2F0JyxcclxuICAgIGluX3N0cm9rZUNvbG9yOiAndmVjNCdcclxufVxyXG52ZXJ0ZXgub3V0cHV0cyA9IHtcclxuICAgIHBvc2l0aW9uOiAndmVjMicsXHJcbiAgICBzaGFwZTogJ2Zsb2F0JyxcclxuICAgIHNpemU6ICd2ZWMyJywgLy8gd2lkdGggJiBoZWlnaHRcclxuICAgIGlubmVyU2l6ZTogJ3ZlYzInLFxyXG4gICAgcm90YXRlOiAnZmxvYXQnLCAvLyByZWN0XHJcbiAgICByOiAnZmxvYXQnLCAvLyBjaXJjbGVcclxuICAgIHZlcnRleEFscGhhOiAndmVjMicsIC8vIHRyaWFuZ2xlXHJcbiAgICB2ZXJ0ZXhCZXRhOiAndmVjMicsIC8vIHRyaWFuZ2xlXHJcbiAgICB2ZXJ0ZXhHYW1tYTogJ3ZlYzInLCAvLyB0cmlhbmdsZVxyXG4gICAgZmlsbDogJ3ZlYzQnLFxyXG4gICAgc3Ryb2tlV2lkdGg6ICdmbG9hdCcsXHJcbiAgICBzdHJva2VDb2xvcjogJ3ZlYzQnXHJcbn1cclxudmVydGV4LnVuaWZvcm1zID0ge1xyXG4gICAgcHJvamVjdGlvbjogJ21hdDMnLFxyXG4gICAgc2NhbGU6ICd2ZWMyJyxcclxuICAgIHRyYW5zbGF0ZTogJ3ZlYzInLFxyXG4gICAgdmlld3BvcnQ6ICd2ZWMyJyxcclxuICAgIHBpeGVsUmF0aW86ICdmbG9hdCdcclxufVxyXG52ZXJ0ZXgubWV0aG9kcyA9IFtcclxuICAgIFtcclxuICAgICAgICBgdmVjMiBjYWxjdWxhdGVfaW5uZXJfcG9pbnQgKHZlYzIgcDEsIHZlYzIgcDIsIHZlYzIgcDMpIHtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgaW5uZXJfcDEgPSBkaXN0YW5jZShwMiwgcDMpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCBpbm5lcl9wMiA9IGRpc3RhbmNlKHAxLCBwMyk7YCxcclxuICAgICAgICBgICAgIGZsb2F0IGlubmVyX3AzID0gZGlzdGFuY2UocDEsIHAyKTtgLFxyXG4gICAgICAgIGAgICAgdmVjMiBpbm5lciA9IChwMSAqIGlubmVyX3AxICsgcDIgKiBpbm5lcl9wMiArIHAzICogaW5uZXJfcDMpIC8gKGlubmVyX3AxICsgaW5uZXJfcDIgKyBpbm5lcl9wMyk7YCxcclxuICAgICAgICBgICAgIHJldHVybiBpbm5lcjtgLFxyXG4gICAgICAgIGB9YFxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgICBgZmxvYXQgZGlzdGFuY2UybGluZSAodmVjMiBwb2ludCwgdmVjMiBsaW5lX2JlZ2luLCB2ZWMyIGxpbmVfZW5kKSB7YCxcclxuICAgICAgICBgICAgdmVjMyBjcm9zc19wcm9kdWN0ID0gY3Jvc3ModmVjMyhwb2ludCAtIGxpbmVfYmVnaW4sIDApLCB2ZWMzKGxpbmVfZW5kIC0gbGluZV9iZWdpbiwgMCkpO2AsXHJcbiAgICAgICAgYCAgIGZsb2F0IGFyZWEgPSBsZW5ndGgoY3Jvc3NfcHJvZHVjdCk7YCxcclxuICAgICAgICBgICAgcmV0dXJuIGFyZWEgLyBsZW5ndGgobGluZV9iZWdpbiAtIGxpbmVfZW5kKTtgLFxyXG4gICAgICAgIGB9YFxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgICBgZmxvYXQgY2FsY3VsYXRlX3N0cm9rZV9zY2FsZSAodmVjMiBwMSwgdmVjMiBwMiwgdmVjMiBwMykge2AsXHJcbiAgICAgICAgYCAgIHZlYzIgaW5uZXIgPSBjYWxjdWxhdGVfaW5uZXJfcG9pbnQocDEsIHAyLCBwMyk7YCxcclxuICAgICAgICBgICAgZmxvYXQgcmFkaXVzID0gZGlzdGFuY2UybGluZShpbm5lciwgcDEsIHAyKTtgLFxyXG4gICAgICAgIGAgICBmbG9hdCBzdHJva2Vfc2NhbGUgPSBzdHJva2VXaWR0aCAvIDIuMCAvIHJhZGl1cztgLFxyXG4gICAgICAgIGAgICByZXR1cm4gc3Ryb2tlX3NjYWxlO2AsXHJcbiAgICAgICAgYH1gXHJcbiAgICBdXHJcbl1cclxudmVydGV4Lm1haW4gPSBbXHJcbiAgICBgdm9pZCBtYWluKHZvaWQpIHtgLFxyXG4gICAgYCAgIHIgPSBpbl9yO2AsXHJcbiAgICBgICAgc2l6ZSA9IGluX3NpemU7YCxcclxuICAgIGAgICBmbG9hdCB3aWR0aCA9IHNpemUueDtgLFxyXG4gICAgYCAgIGZsb2F0IGhlaWdodCA9IHNpemUueTtgLFxyXG4gICAgYCAgIGlubmVyU2l6ZSA9IGluX2lubmVyU2l6ZTtgLFxyXG4gICAgYCAgIHNoYXBlID0gaW5fc2hhcGU7YCxcclxuICAgIGAgICBmaWxsID0gaW5fZmlsbDtgLFxyXG4gICAgYCAgIHN0cm9rZUNvbG9yID0gaW5fc3Ryb2tlQ29sb3I7YCxcclxuICAgIGAgICBzdHJva2VXaWR0aCA9IGluX3N0cm9rZVdpZHRoO2AsXHJcbiAgICBgICAgcm90YXRlID0gaW5fcm90YXRlO2AsXHJcbiAgICBgICAgcG9zaXRpb24gPSBzY2FsZSAqIChpbl9wb3NpdGlvbiArIGluX29mZnNldCkgKyB0cmFuc2xhdGU7YCxcclxuICAgIGAgICB2ZXJ0ZXhBbHBoYSA9IGluX3ZlcnRleEFscGhhO2AsXHJcbiAgICBgICAgdmVydGV4QmV0YSA9IGluX3ZlcnRleEJldGE7YCxcclxuICAgIGAgICB2ZXJ0ZXhHYW1tYSA9IGluX3ZlcnRleEdhbW1hO2AsXHJcbiAgICBgICAgbWF0MyBzY2FsZV9tYXQgPSBtYXQzKGAsXHJcbiAgICBgICAgICAgIDEsIDAsIDAsYCxcclxuICAgIGAgICAgICAgMCwgMSwgMCxgLFxyXG4gICAgYCAgICAgICAwLCAwLCAxYCxcclxuICAgIGAgICApO2AsXHJcbiAgICBgICAgbWF0MyByb3RhdGVfbWF0ID0gbWF0MyhgLFxyXG4gICAgYCAgICAgICBjb3Mocm90YXRlKSwgc2luKHJvdGF0ZSksIDAsYCxcclxuICAgIGAgICAgICAgLXNpbihyb3RhdGUpLCBjb3Mocm90YXRlKSwgMCxgLFxyXG4gICAgYCAgICAgICAwLCAwLCAxYCxcclxuICAgIGAgICApO2AsXHJcbiAgICBgICAgbWF0MyB0cmFuc2xhdGVfbWF0ID0gbWF0MyhgLFxyXG4gICAgYCAgICAgICAxLCAwLCAwLGAsXHJcbiAgICBgICAgICAgIDAsIDEsIDAsYCxcclxuICAgIGAgICAgICAgcG9zaXRpb24ueCwgcG9zaXRpb24ueSwgMWAsXHJcbiAgICBgICAgKTtgLFxyXG4gICAgYCAgIGlmIChzaGFwZSA9PSAwLjApIHtgLCAvLyBjaXJjbGUgc2hhcGVcclxuICAgIGAgICAgICAgZmxvYXQgc2l6ZSA9IChyICsgc3Ryb2tlV2lkdGggLyAyLikgKiAyLiAqIDEuNTtgLCAvLyBOT1RFOiBtdWx0aXBseSAyLiB0byBtYWtlIHJhZGl1cyB0byBkaWFtZXRlcjsgbXVsdGlwbHkgMS41IHRvIHByZXZlbnQgYm9yZGVyIGZhY3RvclxyXG4gICAgYCAgICAgICBzY2FsZV9tYXQgPSBtYXQzKGAsXHJcbiAgICBgICAgICAgICAgICBzaXplLCAwLCAwLGAsXHJcbiAgICBgICAgICAgICAgICAwLCBzaXplLCAwLGAsXHJcbiAgICBgICAgICAgICAgICAwLCAwLCAxYCxcclxuICAgIGAgICAgICAgICAgICk7YCxcclxuICAgIGAgICB9IGVsc2UgaWYgKHNoYXBlID09IDEuMCB8fCBzaGFwZSA9PSAzLjApIHtgLCAvLyByZWN0IHNoYXBlXHJcbiAgICBgICAgICAgIHNjYWxlX21hdCA9IG1hdDMoYCxcclxuICAgIGAgICAgICAgICAgIHdpZHRoICsgc3Ryb2tlV2lkdGgsIDAsIDAsYCxcclxuICAgIGAgICAgICAgICAgIDAsIGhlaWdodCArIHN0cm9rZVdpZHRoLCAwLGAsXHJcbiAgICBgICAgICAgICAgICAwLCAwLCAxYCxcclxuICAgIGAgICAgICAgKTtgLFxyXG4gICAgYCAgIH0gZWxzZSBpZiAoc2hhcGUgPT0gMi4wKSB7YCwgLy8gdHJpYW5nbGUgc2hhcGVcclxuICAgIC8vIGNhbGN1bGF0ZSB0aGUgbm9ybWFsIG9mIHRoZSBlZGdlOiBhbHBoYSA9PiBiZXRhXHJcbiAgICBgICAgICAgIHZlYzIgaW5uZXIgPSBjYWxjdWxhdGVfaW5uZXJfcG9pbnQodmVydGV4QWxwaGEsIHZlcnRleEJldGEsIHZlcnRleEdhbW1hKTtgLFxyXG4gICAgYCAgICAgICBmbG9hdCBzdHJva2Vfc2NhbGUgPSBjYWxjdWxhdGVfc3Ryb2tlX3NjYWxlKHZlcnRleEFscGhhLCB2ZXJ0ZXhCZXRhLCB2ZXJ0ZXhHYW1tYSk7YCxcclxuICAgIGAgICAgICAgdmVjMiBvdXRlcl92ZXJ0ZXhBbHBoYSA9ICh2ZXJ0ZXhBbHBoYSAtIGlubmVyKSAqICgxLjAgKyBzdHJva2Vfc2NhbGUpICsgaW5uZXI7YCwgLy8gY29uc2lkZXIgc3Ryb2tlIGluXHJcbiAgICBgICAgICAgIHZlYzIgb3V0ZXJfdmVydGV4QmV0YSA9ICh2ZXJ0ZXhCZXRhIC0gaW5uZXIpICogKDEuMCArIHN0cm9rZV9zY2FsZSkgKyBpbm5lcjtgLCAvLyBjb25zaWRlciBzdHJva2UgaW5cclxuICAgIGAgICAgICAgdmVjMiBvdXRlcl92ZXJ0ZXhHYW1tYSA9ICh2ZXJ0ZXhHYW1tYSAtIGlubmVyKSAqICgxLjAgKyBzdHJva2Vfc2NhbGUpICsgaW5uZXI7YCwgLy8gY29uc2lkZXIgc3Ryb2tlIGluXHJcbiAgICAvLyB0byBlbnN1cmUgdGhlIGZyYWdtZW50IGN1dHRpbmcgaXMgd2l0aGluIHRoZSByZWN0YW5nbGVcclxuICAgIC8vIGAgICAgICAgd2lkdGggPSAxLjUgKiAobWF4KG1heChvdXRlcl92ZXJ0ZXhBbHBoYS54LCBvdXRlcl92ZXJ0ZXhCZXRhLngpLCBvdXRlcl92ZXJ0ZXhHYW1tYS54KSAtIG1pbihtaW4ob3V0ZXJfdmVydGV4QWxwaGEueCwgb3V0ZXJfdmVydGV4QmV0YS54KSwgb3V0ZXJfdmVydGV4R2FtbWEueCkpO2AsXHJcbiAgICAvLyBgICAgICAgIGhlaWdodCA9IDEuNSAqIChtYXgobWF4KG91dGVyX3ZlcnRleEFscGhhLnksIG91dGVyX3ZlcnRleEJldGEueSksIG91dGVyX3ZlcnRleEdhbW1hLnkpLSBtaW4obWluKG91dGVyX3ZlcnRleEFscGhhLnksIG91dGVyX3ZlcnRleEJldGEueSksIG91dGVyX3ZlcnRleEdhbW1hLnkpKTtgLFxyXG4gICAgYCAgICAgICB3aWR0aCA9IDIuMCAqIG1heChhYnMobWF4KG1heChvdXRlcl92ZXJ0ZXhBbHBoYS54LCBvdXRlcl92ZXJ0ZXhCZXRhLngpLCBvdXRlcl92ZXJ0ZXhHYW1tYS54KSksIGFicyhtaW4obWluKG91dGVyX3ZlcnRleEFscGhhLngsIG91dGVyX3ZlcnRleEJldGEueCksIG91dGVyX3ZlcnRleEdhbW1hLngpKSk7YCxcclxuICAgIGAgICAgICAgaGVpZ2h0ID0gMi4wICogbWF4KGFicyhtYXgobWF4KG91dGVyX3ZlcnRleEFscGhhLnksIG91dGVyX3ZlcnRleEJldGEueSksIG91dGVyX3ZlcnRleEdhbW1hLnkpKSwgYWJzKG1pbihtaW4ob3V0ZXJfdmVydGV4QWxwaGEueSwgb3V0ZXJfdmVydGV4QmV0YS55KSwgb3V0ZXJfdmVydGV4R2FtbWEueSkpKTtgLFxyXG4gICAgYCAgICAgICBzY2FsZV9tYXQgPSBtYXQzKGAsXHJcbiAgICBgICAgICAgICAgICB3aWR0aCwgMCwgMCxgLFxyXG4gICAgYCAgICAgICAgICAgMCwgaGVpZ2h0LCAwLGAsXHJcbiAgICBgICAgICAgICAgICAwLCAwLCAxYCxcclxuICAgIGAgICAgICAgKTtgLFxyXG4gICAgYCAgIH1gLFxyXG4gICAgYCAgIG1hdDMgdHJhbnNmb3JtID0gdHJhbnNsYXRlX21hdCAqIHJvdGF0ZV9tYXQgKiBzY2FsZV9tYXQ7YCxcclxuICAgIGAgICBnbF9Qb3NpdGlvbiA9IHZlYzQocHJvamVjdGlvbiAqIHRyYW5zZm9ybSAqIGluVmVydGV4UG9zLCAxLik7YCxcclxuICAgIGB9YFxyXG5dXHJcblxyXG5jb25zdCBpZFZlcnRleCA9IHZlcnRleC5jb3B5KClcclxuaWRWZXJ0ZXguaW5wdXRzWydpbl9pZCddID0gJ3ZlYzQnXHJcbmlkVmVydGV4Lm91dHB1dHNbJ2lkJ10gPSAndmVjNCdcclxuaWRWZXJ0ZXgubWFpbi5zcGxpY2UoMSwgMCwgYGlkID0gaW5faWQ7YClcclxuXHJcbmNvbnN0IGZyYWdtZW50ID0gbmV3IFNoYWRlcigpXHJcbmZyYWdtZW50LmlucHV0cyA9IHsgLi4udmVydGV4Lm91dHB1dHMgfVxyXG5mcmFnbWVudC5vdXRwdXRzID0ge1xyXG4gICAgZnJhZ21lbnRDb2xvcjogJ3ZlYzQnXHJcbn1cclxuZnJhZ21lbnQudW5pZm9ybXMgPSB7XHJcbiAgICB2aWV3cG9ydDogJ3ZlYzInLFxyXG4gICAgcGl4ZWxSYXRpbzogJ2Zsb2F0J1xyXG59XHJcbmZyYWdtZW50Lm1ldGhvZHMgPSBbXHJcbiAgICB2ZXJ0ZXgubWV0aG9kc1swXSxcclxuICAgIHZlcnRleC5tZXRob2RzWzFdLFxyXG4gICAgdmVydGV4Lm1ldGhvZHNbMl0sXHJcbiAgICBbXHJcbiAgICAgICAgYGZsb2F0IHNpZ24gKHZlYzIgcDEsIHZlYzIgcDIsIHZlYzIgcDMpIHtgLFxyXG4gICAgICAgIGAgICAgcmV0dXJuIChwMS54IC0gcDMueCkgKiAocDIueSAtIHAzLnkpIC0gKHAyLnggLSBwMy54KSAqIChwMS55IC0gcDMueSk7YCxcclxuICAgICAgICBgfWBcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICAgYGZsb2F0IGluVHJpYW5nbGUoKSB7YCxcclxuICAgICAgICBgICAgIG1hdDIgcm90YXRlX21hdCA9IG1hdDIoYCxcclxuICAgICAgICBgICAgICAgICBjb3Mocm90YXRlKSwgc2luKHJvdGF0ZSksYCxcclxuICAgICAgICBgICAgICAgICAtc2luKHJvdGF0ZSksIGNvcyhyb3RhdGUpYCxcclxuICAgICAgICBgICAgICk7YCxcclxuICAgICAgICBgICAgIHZlYzIgaW5uZXIgPSBjYWxjdWxhdGVfaW5uZXJfcG9pbnQodmVydGV4QWxwaGEsIHZlcnRleEJldGEsIHZlcnRleEdhbW1hKTtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgc3Ryb2tlX3NjYWxlID0gY2FsY3VsYXRlX3N0cm9rZV9zY2FsZSh2ZXJ0ZXhBbHBoYSwgdmVydGV4QmV0YSwgdmVydGV4R2FtbWEpO2AsXHJcbiAgICAgICAgYCAgICB2ZWMyIGZsaXBfcG9zID0gdmVjMihwb3NpdGlvbi54LCB2aWV3cG9ydC55IC0gcG9zaXRpb24ueSk7YCxcclxuICAgICAgICBgICAgIHZlYzIgcm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkID0gcm90YXRlX21hdCAqIChnbF9GcmFnQ29vcmQueHkgLyBwaXhlbFJhdGlvIC0gZmxpcF9wb3MpO2AsXHJcbiAgICAgICAgYCAgICB2ZWMyIGlubmVyX3ZlcnRleEFscGhhID0gKHZlcnRleEFscGhhIC0gaW5uZXIpICogKDEuMCAtIHN0cm9rZV9zY2FsZSkgKyBpbm5lcjtgLFxyXG4gICAgICAgIGAgICAgdmVjMiBpbm5lcl92ZXJ0ZXhCZXRhID0gKHZlcnRleEJldGEgLSBpbm5lcikgKiAoMS4wIC0gc3Ryb2tlX3NjYWxlKSArIGlubmVyO2AsXHJcbiAgICAgICAgYCAgICB2ZWMyIGlubmVyX3ZlcnRleEdhbW1hID0gKHZlcnRleEdhbW1hIC0gaW5uZXIpICogKDEuMCAtIHN0cm9rZV9zY2FsZSkgKyBpbm5lcjtgLFxyXG4gICAgICAgIGAgICAgdmVjMiBmbGlwX3ZlcnRleEFscGhhID0gdmVjMihpbm5lcl92ZXJ0ZXhBbHBoYS54LCAtIGlubmVyX3ZlcnRleEFscGhhLnkpO2AsXHJcbiAgICAgICAgYCAgICB2ZWMyIGZsaXBfdmVydGV4QmV0YSA9IHZlYzIoaW5uZXJfdmVydGV4QmV0YS54LCAtIGlubmVyX3ZlcnRleEJldGEueSk7YCxcclxuICAgICAgICBgICAgIHZlYzIgZmxpcF92ZXJ0ZXhHYW1tYSA9IHZlYzIoaW5uZXJfdmVydGV4R2FtbWEueCwgLSBpbm5lcl92ZXJ0ZXhHYW1tYS55KTtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgZDEgPSBzaWduKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZCwgZmxpcF92ZXJ0ZXhBbHBoYSwgZmxpcF92ZXJ0ZXhCZXRhKTtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgZDIgPSBzaWduKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZCwgZmxpcF92ZXJ0ZXhCZXRhLCBmbGlwX3ZlcnRleEdhbW1hKTtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgZDMgPSBzaWduKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZCwgZmxpcF92ZXJ0ZXhHYW1tYSwgZmxpcF92ZXJ0ZXhBbHBoYSk7YCxcclxuICAgICAgICBgICAgIGJvb2wgaGFzX25lZyA9IChkMSA8IDAuMCkgfHwgKGQyIDwgMC4wKSB8fCAoZDMgPCAwLjApO2AsXHJcbiAgICAgICAgYCAgICBib29sIGhhc19wb3MgPSAoZDEgPiAwLjApIHx8IChkMiA+IDAuMCkgfHwgKGQzID4gMC4wKTtgLFxyXG4gICAgICAgIGAgICAgaWYgKCEoaGFzX25lZyAmJiBoYXNfcG9zKSkge2AsXHJcbiAgICAgICAgYCAgICAgICAgcmV0dXJuIDEuMDtgLFxyXG4gICAgICAgIGAgICAgfSBlbHNlIHtgLFxyXG4gICAgICAgIGAgICAgICAgIHJldHVybiAwLjA7YCxcclxuICAgICAgICBgICAgIH1gLFxyXG4gICAgICAgIGB9YFxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgICBgZmxvYXQgaW5UcmlhbmdsZUJvcmRlcigpIHtgLFxyXG4gICAgICAgIGAgICAgbWF0MiByb3RhdGVfbWF0ID0gbWF0MihgLFxyXG4gICAgICAgIGAgICAgICAgIGNvcyhyb3RhdGUpLCBzaW4ocm90YXRlKSxgLFxyXG4gICAgICAgIGAgICAgICAgIC1zaW4ocm90YXRlKSwgY29zKHJvdGF0ZSlgLFxyXG4gICAgICAgIGAgICAgKTtgLFxyXG4gICAgICAgIGAgICAgdmVjMiBpbm5lciA9IGNhbGN1bGF0ZV9pbm5lcl9wb2ludCh2ZXJ0ZXhBbHBoYSwgdmVydGV4QmV0YSwgdmVydGV4R2FtbWEpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCBzdHJva2Vfc2NhbGUgPSBjYWxjdWxhdGVfc3Ryb2tlX3NjYWxlKHZlcnRleEFscGhhLCB2ZXJ0ZXhCZXRhLCB2ZXJ0ZXhHYW1tYSk7YCxcclxuICAgICAgICBgICAgIHZlYzIgb3V0ZXJfdmVydGV4QWxwaGEgPSAodmVydGV4QWxwaGEgLSBpbm5lcikgKiAoMS4wICsgc3Ryb2tlX3NjYWxlKSArIGlubmVyO2AsXHJcbiAgICAgICAgYCAgICB2ZWMyIG91dGVyX3ZlcnRleEJldGEgPSAodmVydGV4QmV0YSAtIGlubmVyKSAqICgxLjAgKyBzdHJva2Vfc2NhbGUpICsgaW5uZXI7YCxcclxuICAgICAgICBgICAgIHZlYzIgb3V0ZXJfdmVydGV4R2FtbWEgPSAodmVydGV4R2FtbWEgLSBpbm5lcikgKiAoMS4wICsgc3Ryb2tlX3NjYWxlKSArIGlubmVyO2AsXHJcbiAgICAgICAgYCAgICB2ZWMyIGZsaXBfcG9zID0gdmVjMihwb3NpdGlvbi54LCB2aWV3cG9ydC55IC0gcG9zaXRpb24ueSk7YCxcclxuICAgICAgICBgICAgIHZlYzIgcm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkID0gcm90YXRlX21hdCAqIChnbF9GcmFnQ29vcmQueHkgLyBwaXhlbFJhdGlvIC0gZmxpcF9wb3MpO2AsXHJcbiAgICAgICAgYCAgICB2ZWMyIGZsaXBfdmVydGV4QWxwaGEgPSB2ZWMyKG91dGVyX3ZlcnRleEFscGhhLngsIC0gb3V0ZXJfdmVydGV4QWxwaGEueSk7YCxcclxuICAgICAgICBgICAgIHZlYzIgZmxpcF92ZXJ0ZXhCZXRhID0gdmVjMihvdXRlcl92ZXJ0ZXhCZXRhLngsIC0gb3V0ZXJfdmVydGV4QmV0YS55KTtgLFxyXG4gICAgICAgIGAgICAgdmVjMiBmbGlwX3ZlcnRleEdhbW1hID12ZWMyKG91dGVyX3ZlcnRleEdhbW1hLngsIC0gb3V0ZXJfdmVydGV4R2FtbWEueSk7YCxcclxuICAgICAgICBgYCxcclxuICAgICAgICBgICAgIGZsb2F0IGQxID0gc2lnbihyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQsIGZsaXBfdmVydGV4QWxwaGEsIGZsaXBfdmVydGV4QmV0YSk7YCxcclxuICAgICAgICBgICAgIGZsb2F0IGQyID0gc2lnbihyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQsIGZsaXBfdmVydGV4QmV0YSwgZmxpcF92ZXJ0ZXhHYW1tYSk7YCxcclxuICAgICAgICBgICAgIGZsb2F0IGQzID0gc2lnbihyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQsIGZsaXBfdmVydGV4R2FtbWEsIGZsaXBfdmVydGV4QWxwaGEpO2AsXHJcbiAgICAgICAgYGAsXHJcbiAgICAgICAgYCAgICBib29sIGhhc19uZWcgPSAoZDEgPD0gMC4wKSB8fCAoZDIgPD0gMC4wKSB8fCAoZDMgPD0gMC4wKTtgLFxyXG4gICAgICAgIGAgICAgYm9vbCBoYXNfcG9zID0gKGQxID49IDAuMCkgfHwgKGQyID49IDAuMCkgfHwgKGQzID49IDAuMCk7YCxcclxuICAgICAgICBgYCxcclxuICAgICAgICBgICAgIGJvb2wgaW5UcmlhbmdsZSA9IGluVHJpYW5nbGUoKSA+IDAuNTtgLFxyXG4gICAgICAgIGAgICAgYm9vbCBpblRyaWFuZ2xlQm9yZGVyID0gIShoYXNfbmVnICYmIGhhc19wb3MpO2AsXHJcbiAgICAgICAgYGAsXHJcbiAgICAgICAgYCAgICBpZiAoIWluVHJpYW5nbGUgJiYgaW5UcmlhbmdsZUJvcmRlcikge2AsXHJcbiAgICAgICAgYCAgICAgICAgcmV0dXJuIDEuMDtgLFxyXG4gICAgICAgIGAgICAgfSBlbHNlIHtgLFxyXG4gICAgICAgIGAgICAgICAgIHJldHVybiAwLjA7YCxcclxuICAgICAgICBgICAgIH1gLFxyXG4gICAgICAgIGB9YFxyXG4gICAgXSxcclxuXHJcbiAgICBbXHJcbiAgICAgICAgYGZsb2F0IGluUmVjdCgpIHtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgd2lkdGggPSBzaXplLng7YCxcclxuICAgICAgICBgICAgIGZsb2F0IGhlaWdodCA9IHNpemUueTtgLFxyXG4gICAgICAgIGAgICAgdmVjMiBmbGlwX3BvcyA9IHBvc2l0aW9uO2AsXHJcbiAgICAgICAgYCAgICBmbGlwX3Bvcy55ID0gdmlld3BvcnQueSAtIHBvc2l0aW9uLnk7YCxcclxuICAgICAgICBgICAgIG1hdDIgcm90YXRlX21hdCA9IG1hdDIoYCxcclxuICAgICAgICBgICAgICAgICBjb3Mocm90YXRlKSwgc2luKHJvdGF0ZSksYCxcclxuICAgICAgICBgICAgICAgICAtc2luKHJvdGF0ZSksIGNvcyhyb3RhdGUpYCxcclxuICAgICAgICBgICAgICk7YCxcclxuICAgICAgICBgICAgIHZlYzIgcm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkID0gcm90YXRlX21hdCAqIChnbF9GcmFnQ29vcmQueHkgLyBwaXhlbFJhdGlvIC0gZmxpcF9wb3MpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCB4X2luID0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueCwgd2lkdGggLyAyLjAgLSBzdHJva2VXaWR0aCAvIDIuMCkgKiAoMS4wIC0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueCwgLSB3aWR0aCAvIDIuMCArIHN0cm9rZVdpZHRoIC8gMi4wKSk7YCxcclxuICAgICAgICBgICAgIGZsb2F0IHlfaW4gPSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC55LCBoZWlnaHQgLyAyLjAgLSBzdHJva2VXaWR0aCAvIDIuMCkgKiAoMS4wIC0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueSwgLSBoZWlnaHQgLyAyLjAgKyBzdHJva2VXaWR0aCAvIDIuMCkpO2AsXHJcbiAgICAgICAgYCAgICByZXR1cm4geF9pbiAqIHlfaW47YCxcclxuICAgICAgICBgfWBcclxuICAgIF0sXHJcblxyXG4gICAgW1xyXG4gICAgICAgIGBmbG9hdCBpblJlY3RCb3JkZXIoKSB7YCxcclxuICAgICAgICBgICAgIGZsb2F0IHdpZHRoID0gc2l6ZS54O2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCBoZWlnaHQgPSBzaXplLnk7YCxcclxuICAgICAgICBgICAgIHZlYzIgZmxpcF9wb3MgPSBwb3NpdGlvbjtgLFxyXG4gICAgICAgIGAgICAgZmxpcF9wb3MueSA9IHZpZXdwb3J0LnkgLSBwb3NpdGlvbi55O2AsXHJcbiAgICAgICAgYCAgICBtYXQyIHJvdGF0ZV9tYXQgPSBtYXQyKGAsXHJcbiAgICAgICAgYCAgICAgICAgY29zKHJvdGF0ZSksIHNpbihyb3RhdGUpLGAsXHJcbiAgICAgICAgYCAgICAgICAgLXNpbihyb3RhdGUpLCBjb3Mocm90YXRlKWAsXHJcbiAgICAgICAgYCAgICApO2AsXHJcbiAgICAgICAgYCAgICB2ZWMyIHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZCA9IHJvdGF0ZV9tYXQgKiAoZ2xfRnJhZ0Nvb3JkLnh5IC8gcGl4ZWxSYXRpbyAtIGZsaXBfcG9zKTtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgeF9pbl9vdXRlciA9IHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLngsIHdpZHRoIC8gMi4wICsgc3Ryb2tlV2lkdGggLyAyLjApICogKDEuMCAtIHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLngsIC0gd2lkdGggLyAyLjAgLSBzdHJva2VXaWR0aCAvIDIuMCkpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCB5X2luX291dGVyID0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueSwgaGVpZ2h0IC8gMi4wICsgc3Ryb2tlV2lkdGggLyAyLjApICogKDEuMCAtIHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLnksIC0gaGVpZ2h0IC8gMi4wIC0gc3Ryb2tlV2lkdGggLyAyLjApKTtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgeF9pbl9pbm5lciA9IHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLngsIHdpZHRoIC8gMi4wIC0gc3Ryb2tlV2lkdGggLyAyLjApICogKDEuMCAtIHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLngsIC0gd2lkdGggLyAyLjAgKyBzdHJva2VXaWR0aCAvIDIuMCkpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCB5X2luX2lubmVyID0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueSwgaGVpZ2h0IC8gMi4wIC0gc3Ryb2tlV2lkdGggLyAyLjApICogKDEuMCAtIHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLnksIC0gaGVpZ2h0IC8gMi4wICsgc3Ryb2tlV2lkdGggLyAyLjApKTtgLFxyXG4gICAgICAgIGBgLFxyXG4gICAgICAgIGAgICAgcmV0dXJuIHhfaW5fb3V0ZXIgKiB5X2luX291dGVyICogKDEuMCAtIHhfaW5faW5uZXIgKiB5X2luX2lubmVyKTtgLFxyXG4gICAgICAgIGB9YFxyXG4gICAgXSxcclxuXHJcbiAgICBbXHJcbiAgICAgICAgYGZsb2F0IGluQ3Jvc3MoKSB7YCxcclxuICAgICAgICBgICAgIHZlYzIgZmxpcF9wb3MgPSBwb3NpdGlvbjtgLFxyXG4gICAgICAgIGAgICAgZmxpcF9wb3MueSA9IHZpZXdwb3J0LnkgLSBwb3NpdGlvbi55O2AsXHJcbiAgICAgICAgYCAgICBtYXQyIHJvdGF0ZV9tYXQgPSBtYXQyKGAsXHJcbiAgICAgICAgYCAgICAgICAgY29zKHJvdGF0ZSksIHNpbihyb3RhdGUpLGAsXHJcbiAgICAgICAgYCAgICAgICAgLXNpbihyb3RhdGUpLCBjb3Mocm90YXRlKWAsXHJcbiAgICAgICAgYCAgICApO2AsXHJcbiAgICAgICAgYCAgICB2ZWMyIHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZCA9IHJvdGF0ZV9tYXQgKiAoZ2xfRnJhZ0Nvb3JkLnh5IC8gcGl4ZWxSYXRpbyAtIGZsaXBfcG9zKTtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgaW5uZXJXaWR0aCA9IGlubmVyU2l6ZS54O2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCBpbm5lckhlaWdodCA9IGlubmVyU2l6ZS55O2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCB3aWR0aCA9IHNpemUueDtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgaGVpZ2h0ID0gc2l6ZS55O2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCB4X2luMSA9IHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLngsIHdpZHRoIC8gMi4wIC0gc3Ryb2tlV2lkdGggLyAyLjApICogKDEuMCAtIHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLngsIC0gd2lkdGggLyAyLjAgKyBzdHJva2VXaWR0aCAvIDIuMCkpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCB5X2luMSA9IHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLnksIGlubmVySGVpZ2h0IC8gMi4wIC0gc3Ryb2tlV2lkdGggLyAyLjApICogKDEuMCAtIHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLnksIC0gaW5uZXJIZWlnaHQgLyAyLjAgKyBzdHJva2VXaWR0aCAvIDIuMCkpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCB4X2luMiA9IHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLngsIGlubmVyV2lkdGggLyAyLjAgLSBzdHJva2VXaWR0aCAvIDIuMCkgKiAoMS4wIC0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueCwgLSBpbm5lcldpZHRoIC8gMi4wICsgc3Ryb2tlV2lkdGggLyAyLjApKTtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgeV9pbjIgPSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC55LCBoZWlnaHQgLyAyLjAgLSBzdHJva2VXaWR0aCAvIDIuMCkgKiAoMS4wIC0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueSwgLSBoZWlnaHQgLyAyLjAgKyBzdHJva2VXaWR0aCAvIDIuMCkpO2AsXHJcbiAgICAgICAgYCAgICByZXR1cm4gbWluKDEuLCB4X2luMSAqIHlfaW4xICsgeF9pbjIgKiB5X2luMik7YCxcclxuICAgICAgICBgfWBcclxuICAgIF0sXHJcblxyXG4gICAgW1xyXG4gICAgICAgIGBmbG9hdCBpbkNyb3NzQm9yZGVyKCkge2AsXHJcbiAgICAgICAgYCAgICB2ZWMyIGZsaXBfcG9zID0gcG9zaXRpb247YCxcclxuICAgICAgICBgICAgIGZsaXBfcG9zLnkgPSB2aWV3cG9ydC55IC0gcG9zaXRpb24ueTtgLFxyXG4gICAgICAgIGAgICAgbWF0MiByb3RhdGVfbWF0ID0gbWF0MihgLFxyXG4gICAgICAgIGAgICAgICAgIGNvcyhyb3RhdGUpLCBzaW4ocm90YXRlKSxgLFxyXG4gICAgICAgIGAgICAgICAgIC1zaW4ocm90YXRlKSwgY29zKHJvdGF0ZSlgLFxyXG4gICAgICAgIGAgICAgKTtgLFxyXG4gICAgICAgIGAgICAgdmVjMiByb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQgPSByb3RhdGVfbWF0ICogKGdsX0ZyYWdDb29yZC54eSAvIHBpeGVsUmF0aW8gLSBmbGlwX3Bvcyk7YCxcclxuICAgICAgICBgICAgIGZsb2F0IGlubmVyV2lkdGggPSBpbm5lclNpemUueDtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgaW5uZXJIZWlnaHQgPSBpbm5lclNpemUueTtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgd2lkdGggPSBzaXplLng7YCxcclxuICAgICAgICBgICAgIGZsb2F0IGhlaWdodCA9IHNpemUueTtgLFxyXG5cclxuICAgICAgICAvLyBUT0RPOiBuZWVkIHJlZmFjdG9yXHJcbiAgICAgICAgYCAgICBmbG9hdCB4X2luMSA9IHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLngsIHdpZHRoIC8gMi4wIC0gc3Ryb2tlV2lkdGggLyAyLjApICogKDEuMCAtIHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLngsIC0gd2lkdGggLyAyLjAgKyBzdHJva2VXaWR0aCAvIDIuMCkpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCB5X2luMSA9IHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLnksIGlubmVySGVpZ2h0IC8gMi4wIC0gc3Ryb2tlV2lkdGggLyAyLjApICogKDEuMCAtIHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLnksIC0gaW5uZXJIZWlnaHQgLyAyLjAgKyBzdHJva2VXaWR0aCAvIDIuMCkpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCB4X2luMiA9IHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLngsIGlubmVyV2lkdGggLyAyLjAgLSBzdHJva2VXaWR0aCAvIDIuMCkgKiAoMS4wIC0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueCwgLSBpbm5lcldpZHRoIC8gMi4wICsgc3Ryb2tlV2lkdGggLyAyLjApKTtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgeV9pbjIgPSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC55LCBoZWlnaHQgLyAyLjAgLSBzdHJva2VXaWR0aCAvIDIuMCkgKiAoMS4wIC0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueSwgLSBoZWlnaHQgLyAyLjAgKyBzdHJva2VXaWR0aCAvIDIuMCkpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCBvdXRDcm9zcyA9IDEuIC0gbWluKDEuLCB4X2luMSAqIHlfaW4xICsgeF9pbjIgKiB5X2luMik7YCxcclxuICAgICAgICBgYCxcclxuICAgICAgICBgICAgIGZsb2F0IHhfb3V0MSA9IHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLngsIHdpZHRoIC8gMi4wICsgc3Ryb2tlV2lkdGggLyAyLjApICogKDEuMCAtIHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLngsIC0gd2lkdGggLyAyLjAgLSBzdHJva2VXaWR0aCAvIDIuMCkpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCB5X291dDEgPSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC55LCBpbm5lckhlaWdodCAvIDIuMCArIHN0cm9rZVdpZHRoIC8gMi4wKSAqICgxLjAgLSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC55LCAtIGlubmVySGVpZ2h0IC8gMi4wIC0gc3Ryb2tlV2lkdGggLyAyLjApKTtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgeF9vdXQyID0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueCwgaW5uZXJXaWR0aCAvIDIuMCArIHN0cm9rZVdpZHRoIC8gMi4wKSAqICgxLjAgLSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC54LCAtIGlubmVyV2lkdGggLyAyLjAgLSBzdHJva2VXaWR0aCAvIDIuMCkpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCB5X291dDIgPSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC55LCBoZWlnaHQgLyAyLjAgKyBzdHJva2VXaWR0aCAvIDIuMCkgKiAoMS4wIC0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueSwgLSBoZWlnaHQgLyAyLjAgLSBzdHJva2VXaWR0aCAvIDIuMCkpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCBpbkNyb3NzQm9yZGVyID0gbWluKDEuLCB4X291dDEgKiB5X291dDEgKyB4X291dDIgKiB5X291dDIpO2AsXHJcbiAgICAgICAgYCAgICByZXR1cm4gaW5Dcm9zc0JvcmRlciAqIG91dENyb3NzO2AsXHJcbiAgICAgICAgYH1gXHJcbiAgICBdLFxyXG5cclxuICAgIFtcclxuICAgICAgICBgZmxvYXQgaW5DaXJjbGUoKSB7YCxcclxuICAgICAgICBgICAgIHZlYzIgZmxpcF9wb3MgPSBwb3NpdGlvbjtgLFxyXG4gICAgICAgIGAgICAgZmxpcF9wb3MueSA9IHZpZXdwb3J0LnkgLSBwb3NpdGlvbi55O2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCBkaXN0ID0gZGlzdGFuY2UoZ2xfRnJhZ0Nvb3JkLnh5IC8gcGl4ZWxSYXRpbywgZmxpcF9wb3MpO2AsXHJcbiAgICAgICAgYCAgICByZXR1cm4gMS4gLSBzbW9vdGhzdGVwKChyIC0gc3Ryb2tlV2lkdGggLyAyLikgLSAyLiAqIGZ3aWR0aChkaXN0KSwgKHIgLSBzdHJva2VXaWR0aCAvIDIuKSwgZGlzdCk7YCxcclxuICAgICAgICBgfWBcclxuICAgIF0sXHJcblxyXG4gICAgW1xyXG4gICAgICAgIGBmbG9hdCBpbkNpcmNsZUJvcmRlcigpIHtgLFxyXG4gICAgICAgIGAgICAgaWYgKHN0cm9rZVdpZHRoID09IDAuKSB7YCxcclxuICAgICAgICBgICAgICAgcmV0dXJuIDAuO2AsXHJcbiAgICAgICAgYCAgICB9YCxcclxuICAgICAgICBgICAgIHZlYzIgZmxpcF9wb3MgPSBwb3NpdGlvbjtgLFxyXG4gICAgICAgIGAgICAgZmxpcF9wb3MueSA9IHZpZXdwb3J0LnkgLSBwb3NpdGlvbi55O2AsXHJcbiAgICAgICAgYGAsXHJcbiAgICAgICAgYCAgICBmbG9hdCBkaXN0ID0gZGlzdGFuY2UoZ2xfRnJhZ0Nvb3JkLnh5IC8gcGl4ZWxSYXRpbywgZmxpcF9wb3MpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCBkcmF3T3V0ZXIgPSAxLiAtIHNtb290aHN0ZXAoKHIgKyBzdHJva2VXaWR0aCAvIDIuKSAtIGZ3aWR0aChkaXN0KSwgKHIgKyBzdHJva2VXaWR0aCAvIDIuKSwgZGlzdCk7YCxcclxuICAgICAgICBgICAgIGZsb2F0IGRyYXdJbm5lciA9IDEuIC0gc21vb3Roc3RlcCgociAtIHN0cm9rZVdpZHRoIC8gMi4pIC0gZndpZHRoKGRpc3QpLCAociAtIHN0cm9rZVdpZHRoIC8gMi4pLCBkaXN0KTtgLFxyXG4gICAgICAgIGAgICAgcmV0dXJuIGRyYXdPdXRlciAqICgxLiAtIGRyYXdJbm5lcik7YCxcclxuICAgICAgICBgfWBcclxuICAgIF1cclxuXVxyXG5mcmFnbWVudC5tYWluID0gW1xyXG4gICAgYHZvaWQgbWFpbih2b2lkKSB7YCxcclxuICAgIGAgICAgaWYgKHNoYXBlID09IDAuMCkge2AsXHJcbiAgICBgICAgICAgICAvLyBjaXJjbGUgc2hhcGVgLFxyXG4gICAgYCAgICAgICAgLy8gYm9yZGVyIGNoZWNrLCB1c2luZyAwLjUoY2VudGVyIG9mIHNtb290aHN0ZXApYCxcclxuICAgIGAgICAgICAgIGlmIChpbkNpcmNsZSgpIDwgMC4xICYmIChpbkNpcmNsZUJvcmRlcigpIDwgMC4xKSkge2AsXHJcbiAgICBgICAgICAgICAgICAgZGlzY2FyZDtgLFxyXG4gICAgYCAgICAgICAgfWAsXHJcbiAgICBgICAgICAgICBmcmFnbWVudENvbG9yID0gaW5DaXJjbGVCb3JkZXIoKSAqIHZlYzQoc3Ryb2tlQ29sb3IucmdiICogc3Ryb2tlQ29sb3IuYSwgc3Ryb2tlQ29sb3IuYSkgKyBpbkNpcmNsZSgpICogdmVjNChmaWxsLnJnYiAqIGZpbGwuYSwgZmlsbC5hKTtgLFxyXG4gICAgYCAgICB9IGVsc2UgaWYgKHNoYXBlID09IDEuMCkge2AsXHJcbiAgICBgICAgICAgICBpZiAoaW5SZWN0KCkgPCAwLjUgJiYgKGluUmVjdEJvcmRlcigpIDwgMC41KSkge2AsXHJcbiAgICBgICAgICAgICAgICAgZGlzY2FyZDtgLFxyXG4gICAgYCAgICAgICAgfWAsXHJcbiAgICBgICAgICAgICAvLyByZWN0IHNoYXBlYCxcclxuICAgIGAgICAgICAgIGZyYWdtZW50Q29sb3IgPSBpblJlY3RCb3JkZXIoKSAqIHZlYzQoc3Ryb2tlQ29sb3IucmdiICogc3Ryb2tlQ29sb3IuYSwgc3Ryb2tlQ29sb3IuYSkgKyBpblJlY3QoKSAqIHZlYzQoZmlsbC5yZ2IgKiBmaWxsLmEsIGZpbGwuYSk7YCxcclxuICAgIGAgICAgfSBlbHNlIGlmIChzaGFwZSA9PSAyLjApIHtgLFxyXG4gICAgYCAgICAgICAgaWYgKGluVHJpYW5nbGUoKSA8IDAuNSAmJiAoaW5UcmlhbmdsZUJvcmRlcigpIDwgMC41KSkge2AsXHJcbiAgICBgICAgICAgICAgICAgZGlzY2FyZDtgLFxyXG4gICAgYCAgICAgICAgfWAsXHJcbiAgICBgICAgICAgICAvLyB0cmlhbmdsZSBzaGFwZWAsXHJcbiAgICBgICAgICAgICBmcmFnbWVudENvbG9yID0gaW5UcmlhbmdsZUJvcmRlcigpICogdmVjNChzdHJva2VDb2xvci5yZ2IgKiBzdHJva2VDb2xvci5hLCBzdHJva2VDb2xvci5hKSArIGluVHJpYW5nbGUoKSAqIHZlYzQoZmlsbC5yZ2IgKiBmaWxsLmEsIGZpbGwuYSk7YCxcclxuICAgIGAgICAgfSBlbHNlIGlmIChzaGFwZSA9PSAzLjApIHtgLFxyXG4gICAgYCAgICAgICAgaWYgKGluQ3Jvc3MoKSA8IDAuNSAmJiAoaW5Dcm9zc0JvcmRlcigpIDwgMC41KSkge2AsXHJcbiAgICBgICAgICAgICAgICAgZGlzY2FyZDtgLFxyXG4gICAgYCAgICAgICAgfWAsXHJcbiAgICBgICAgICAgICAvLyBjcm9zcyBzaGFwZWAsXHJcbiAgICBgICAgICAgICBmcmFnbWVudENvbG9yID0gaW5Dcm9zc0JvcmRlcigpICogdmVjNChzdHJva2VDb2xvci5yZ2IgKiBzdHJva2VDb2xvci5hLCBzdHJva2VDb2xvci5hKSArIGluQ3Jvc3MoKSAqIHZlYzQoZmlsbC5yZ2IgKiBmaWxsLmEsIGZpbGwuYSk7YCxcclxuICAgIGAgICAgfWAsXHJcbiAgICBgfWBcclxuXVxyXG5cclxuY29uc3QgaWRGcmFnbWVudCA9IGZyYWdtZW50LmNvcHkoKVxyXG5pZEZyYWdtZW50LmlucHV0c1snaWQnXSA9ICd2ZWM0J1xyXG4vLyBkZWxldGUgb2xkIGZyYWdtZW50Q29sb3IgYW5kIGFkZCBuZXcgZnJhZ21lbnRDb2xvclxyXG5jb25zdCBzZW50ZW5jZXNUb2JlUmVwbGFjZWQgPSBbXHJcbiAgICBgICAgICAgICBmcmFnbWVudENvbG9yID0gaW5DaXJjbGVCb3JkZXIoKSAqIHZlYzQoc3Ryb2tlQ29sb3IucmdiICogc3Ryb2tlQ29sb3IuYSwgc3Ryb2tlQ29sb3IuYSkgKyBpbkNpcmNsZSgpICogdmVjNChmaWxsLnJnYiAqIGZpbGwuYSwgZmlsbC5hKTtgLFxyXG4gICAgYCAgICAgICAgZnJhZ21lbnRDb2xvciA9IGluUmVjdEJvcmRlcigpICogdmVjNChzdHJva2VDb2xvci5yZ2IgKiBzdHJva2VDb2xvci5hLCBzdHJva2VDb2xvci5hKSArIGluUmVjdCgpICogdmVjNChmaWxsLnJnYiAqIGZpbGwuYSwgZmlsbC5hKTtgLFxyXG4gICAgYCAgICAgICAgZnJhZ21lbnRDb2xvciA9IGluVHJpYW5nbGVCb3JkZXIoKSAqIHZlYzQoc3Ryb2tlQ29sb3IucmdiICogc3Ryb2tlQ29sb3IuYSwgc3Ryb2tlQ29sb3IuYSkgKyBpblRyaWFuZ2xlKCkgKiB2ZWM0KGZpbGwucmdiICogZmlsbC5hLCBmaWxsLmEpO2AsXHJcbiAgICBgICAgICAgICBmcmFnbWVudENvbG9yID0gaW5Dcm9zc0JvcmRlcigpICogdmVjNChzdHJva2VDb2xvci5yZ2IgKiBzdHJva2VDb2xvci5hLCBzdHJva2VDb2xvci5hKSArIGluQ3Jvc3MoKSAqIHZlYzQoZmlsbC5yZ2IgKiBmaWxsLmEsIGZpbGwuYSk7YFxyXG5dXHJcbnNlbnRlbmNlc1RvYmVSZXBsYWNlZC5mb3JFYWNoKChzZW50ZW5jZSkgPT4ge1xyXG4gICAgaWRGcmFnbWVudC5tYWluW2lkRnJhZ21lbnQubWFpbi5pbmRleE9mKHNlbnRlbmNlKV0gPSBgZnJhZ21lbnRDb2xvciA9IGlkO2BcclxufSlcclxuXHJcbmV4cG9ydCB7IHZlcnRleCwgaWRWZXJ0ZXgsIGZyYWdtZW50LCBpZEZyYWdtZW50IH1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XHJcbiAqIEBkZXNjcmlwdGlvbiB1dGlsaXR5IGZ1bmN0aW9ucyBmb3IgcmVuZGVyZXJcclxuICovXHJcblxyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJy4uL2ludGVyZmFjZXMnXHJcbmltcG9ydCB7IFZhcmlhYmxlLCBSZW5kZXJBdHRyaWJ1dGUgfSBmcm9tICcuL2ludGVyZmFjZXMnXHJcblxyXG4vKipcclxuICogY29tcGlsZSB3ZWJnbCBzaGFkZXJcclxuICogQHBhcmFtIGdsIFdlYkdMIGluc3RhbmNlXHJcbiAqIEBwYXJhbSBzaGFkZXJTdHIgc2hhZGVyIGZpbGUgaW4gc3RyaW5nXHJcbiAqIEBwYXJhbSBzaGFkZXJUeXBlIHZlcnRleCBvciBmcmFnbWVudCBzaGFkZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlU2hhZGVyKFxyXG4gICAgZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQsXHJcbiAgICBzaGFkZXJTdHI6IHN0cmluZyxcclxuICAgIHNoYWRlclR5cGU6IG51bWJlclxyXG4pOiBXZWJHTFNoYWRlciB7XHJcbiAgICBjb25zdCBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoc2hhZGVyVHlwZSlcclxuICAgIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNoYWRlclN0cilcclxuICAgIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKVxyXG4gICAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoYWRlciBjb21waWxlIGZhaWxlZDogJyArIGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2hhZGVyXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBnZW5lcmF0ZSBXZWJHTCBwcm9ncmFtXHJcbiAqIEBwYXJhbSBnbCBXZWJHTCBpbnN0YW5jZVxyXG4gKiBAcGFyYW0gdmVydFNoYWRlclN0ciB2ZXJ0ZXggc2hhZGVyIGluIHN0cmluZyBmb3JtYXRcclxuICogQHBhcmFtIGZyYWdTaGFkZXJTdHIgZnJhZ21lbnQgc2hhZGVyIGluIHN0cmluZyBmb3JtYXRcclxuICogQHBhcmFtIGF0dHJpYnV0ZXMgYXR0cmlidXRlc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2dyYW0oXHJcbiAgICBnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dCxcclxuICAgIHZlcnRTaGFkZXJTdHI6IHN0cmluZyxcclxuICAgIGZyYWdTaGFkZXJTdHI6IHN0cmluZyxcclxuICAgIGF0dHJpYnV0ZXM6IE1hcDxzdHJpbmcsIFJlbmRlckF0dHJpYnV0ZT5cclxuKTogV2ViR0xQcm9ncmFtIHtcclxuICAgIGNvbnN0IHZlcnRTaGFkZXIgPSBjb21waWxlU2hhZGVyKGdsLCB2ZXJ0U2hhZGVyU3RyLCBnbC5WRVJURVhfU0hBREVSKVxyXG4gICAgY29uc3QgZnJhZ1NoYWRlciA9IGNvbXBpbGVTaGFkZXIoZ2wsIGZyYWdTaGFkZXJTdHIsIGdsLkZSQUdNRU5UX1NIQURFUilcclxuXHJcbiAgICBjb25zdCBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpXHJcblxyXG4gICAgYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XHJcbiAgICAgICAgZ2wuYmluZEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIGF0dHIubG9jYXRpb24sIGF0dHIubmFtZSlcclxuICAgIH0pXHJcblxyXG4gICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZlcnRTaGFkZXIpXHJcbiAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnJhZ1NoYWRlcilcclxuXHJcbiAgICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKVxyXG4gICAgaWYgKCFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkxJTktfU1RBVFVTKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGxpbmsgc2hhZGVyczogJHtnbC5nZXRQcm9ncmFtSW5mb0xvZyhwcm9ncmFtKX1gKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwcm9ncmFtXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBjcmVhdGUgV2ViR0wgYXJyYXkgYnVmZmVyIGdpdmVuIGRhdGEgYXJyYXlcclxuICogQHBhcmFtIGdsIFdlYkdMIGNvbnRleHRcclxuICogQHBhcmFtIGRhdGEgZGF0YSB0byBzdG9yZSBpbiBidWZmZXJcclxuICogQHJldHVybnMgV2ViR0wgYnVmZmVyIHN0b3JlIGdpdmVuIGRhdGFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBcnJheUJ1ZmZlcihnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dCwgZGF0YTogRmxvYXQzMkFycmF5KTogV2ViR0xCdWZmZXIge1xyXG4gICAgY29uc3QgYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKClcclxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBidWZmZXIpXHJcbiAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgZGF0YSwgZ2wuRFlOQU1JQ19EUkFXKVxyXG4gICAgcmV0dXJuIGJ1ZmZlclxyXG59XHJcblxyXG4vKipcclxuICogZXh0cmFjdCBhdHRyaWJ1dGVzIGZyb20gYSBzaGFkZXIgc3JpbmdcclxuICogQHBhcmFtIHtzdHJpbmd9IHNoYWRlclN0clxyXG4gKiBAcmV0dXJucyB7UmVuZGVyQXR0cmlidXRlW119IGF0dHJpYnV0ZXMgYXJyYXlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0QXR0cmlidXRlc0Zyb21TaGFkZXIoc2hhZGVyOiBTaGFkZXIpOiBNYXA8c3RyaW5nLCBSZW5kZXJBdHRyaWJ1dGU+IHtcclxuICAgIC8vIGNvbnN0IG1hdGNoaW5ncyA9IHNoYWRlclN0ci5tYXRjaCgvaW5cXHMuKjsvZylcclxuICAgIGNvbnN0IGlucHV0cyA9IHNoYWRlci5pbnB1dHNcclxuICAgIGNvbnN0IGF0dHJpYnV0ZXNNYXAgPSBuZXcgTWFwKClcclxuICAgIE9iamVjdC5lbnRyaWVzKGlucHV0cykuZm9yRWFjaCgoW25hbWUsIHR5cGVdLCBsb2NhdGlvbikgPT4ge1xyXG4gICAgICAgIGxldCBzaXplID0gMVxyXG4gICAgICAgIGlmICh0eXBlLnNsaWNlKDAsIDMpID09PSAndmVjJykge1xyXG4gICAgICAgICAgICBzaXplID0gTnVtYmVyKHR5cGUuc2xpY2UoLTEpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaXNCdWlsZEluID0gZmFsc2VcclxuICAgICAgICBpZiAobmFtZSA9PT0gJ2luVmVydGV4UG9zJykge1xyXG4gICAgICAgICAgICAvLyBhbiBpbnN0YW5jZSBpcyBmb3JtZWQgYnkgdHdvIHRyaWFuZ2xlcyxcclxuICAgICAgICAgICAgLy8gdGh1cyB3ZSBuZWVkIGZvdXIgcG9pbnQgcG9zaXRpb25zIHRvIGluaXRpYWwgdGhlIGluc3RhbmNlXHJcbiAgICAgICAgICAgIC8vIG1vcmUgZGV0YWlsczogaHR0cHM6Ly9wYW5qaWFjaGVuZy5zaXRlL3dpa2kvMjAxOS8wNi8wNi93ZWJHTC9XZWJHTC1CYXRjaERyYXclRTQlQkIlQTMlRTclQTAlODElRTklOTglODUlRTglQUYlQkIrJUU3JTkwJTg2JUU4JUE3JUEzL1xyXG4gICAgICAgICAgICBpc0J1aWxkSW4gPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF0dHJpYnV0ZXNNYXAuc2V0KG5hbWUsIHtcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgc2l6ZSwgLy8gdGhlIHNwYWNlIG9mIG9uZSBhdHRyaWJ1dGUsIGUuZy4gdmVjMyBvY3VwcGllcyAzIHVuaXRzIG9mIHNwYWNlXHJcbiAgICAgICAgICAgIGxvY2F0aW9uLCAvLyB0aGUgYXBwZWFyYW5jZSBvcmRlciBvZiBvbmUgYXR0cmlidXRlIGluIHRoZSBzaGFkZXIgY29kZSwgd2hpY2ggaXMgZXF1YWwgdG8gdGhlIHJlc3VsdCBvZiBnZXRBdHRyaWJMb2NhdGlvblxyXG4gICAgICAgICAgICBpc0J1aWxkSW4sIC8vIHdoaWNoIG1lYW5zIGZvdXIgdmVydGljZXMgaW4gb25lIGVsZW1lbnQ6IGluVmVydGV4UG9zXHJcbiAgICAgICAgICAgIGV4dHJhY3RBdHRyaWJ1dGVWYWx1ZUZyb206ICgpID0+IFtdIC8vIGEgZnVuY3Rpb24gd2hpY2ggaXMgdXNlIHRvIGFwcGVuZCBhbiBlbGVtZW50IGludG8gdGhlIGFycmF5IG9mIHRoaXMgYXR0cmlidXRlXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICAvLyBtYXRjaGluZ3MuZm9yRWFjaCgobWF0Y2gsIGxvY2F0aW9uKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc3QgbmFtZSA9IG1hdGNoLnNwbGl0KCcgJylbMl0uc2xpY2UoMCwgLTEpXHJcbiAgICAvLyAgICAgY29uc3QgdHlwZSA9IG1hdGNoLnNwbGl0KCcgJylbMV1cclxuICAgIC8vICAgICBsZXQgc2l6ZSA9IDFcclxuICAgIC8vICAgICBpZiAodHlwZS5zbGljZSgwLCAzKSA9PT0gJ3ZlYycpIHtcclxuICAgIC8vICAgICAgICAgc2l6ZSA9IE51bWJlcih0eXBlLnNsaWNlKC0xKSlcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgbGV0IGlzQnVpbGRJbiA9IGZhbHNlXHJcbiAgICAvLyAgICAgaWYgKG5hbWUgPT09ICdpblZlcnRleFBvcycpIHtcclxuICAgIC8vICAgICAgICAgLy8gYW4gaW5zdGFuY2UgaXMgZm9ybWVkIGJ5IHR3byB0cmlhbmdsZXMsXHJcbiAgICAvLyAgICAgICAgIC8vIHRodXMgd2UgbmVlZCBmb3VyIHBvaW50IHBvc2l0aW9ucyB0byBpbml0aWFsIHRoZSBpbnN0YW5jZVxyXG4gICAgLy8gICAgICAgICAvLyBtb3JlIGRldGFpbHM6IGh0dHBzOi8vcGFuamlhY2hlbmcuc2l0ZS93aWtpLzIwMTkvMDYvMDYvd2ViR0wvV2ViR0wtQmF0Y2hEcmF3JUU0JUJCJUEzJUU3JUEwJTgxJUU5JTk4JTg1JUU4JUFGJUJCKyVFNyU5MCU4NiVFOCVBNyVBMy9cclxuICAgIC8vICAgICAgICAgaXNCdWlsZEluID0gdHJ1ZVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBhdHRyaWJ1dGVzTWFwLnNldChuYW1lLCB7XHJcbiAgICAvLyAgICAgICAgIG5hbWUsXHJcbiAgICAvLyAgICAgICAgIHNpemUsIC8vIHRoZSBzcGFjZSBvZiBvbmUgYXR0cmlidXRlLCBlLmcuIHZlYzMgb2N1cHBpZXMgMyB1bml0cyBvZiBzcGFjZVxyXG4gICAgLy8gICAgICAgICBsb2NhdGlvbiwgLy8gdGhlIGFwcGVhcmFuY2Ugb3JkZXIgb2Ygb25lIGF0dHJpYnV0ZSBpbiB0aGUgc2hhZGVyIGNvZGUsIHdoaWNoIGlzIGVxdWFsIHRvIHRoZSByZXN1bHQgb2YgZ2V0QXR0cmliTG9jYXRpb25cclxuICAgIC8vICAgICAgICAgaXNCdWlsZEluLCAvLyB3aGljaCBtZWFucyBmb3VyIHZlcnRpY2VzIGluIG9uZSBlbGVtZW50OiBpblZlcnRleFBvc1xyXG4gICAgLy8gICAgICAgICBleHRyYWN0QXR0cmlidXRlVmFsdWVGcm9tOiAoKSA9PiBbXSAvLyBhIGZ1bmN0aW9uIHdoaWNoIGlzIHVzZSB0byBhcHBlbmQgYW4gZWxlbWVudCBpbnRvIHRoZSBhcnJheSBvZiB0aGlzIGF0dHJpYnV0ZVxyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyB9KVxyXG4gICAgcmV0dXJuIGF0dHJpYnV0ZXNNYXBcclxufVxyXG5cclxuLyoqXHJcbiAqIGVuY29kZSBhIHJlbmRlciBpZCBhcyBjb2xvciB0byBwYXNzIGluIHRleHR1cmVcclxuICogQHBhcmFtIGlkIHJlbmRlciBpZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZVJlbmRlcklkKGlkOiBudW1iZXIpOiBDb2xvciB7XHJcbiAgICAvLyBzcGxpdCBhIGxhcmdlIG51bWJlciBieSA4LWJpdDogaWQgPSBjb25jYXQoYSwgYiwgZywgciksIGFuZCBub3JtYWxpemUgdGhlbSBpbnRvICgwLCAxKVxyXG4gICAgY29uc3QgciA9IChpZCAmIDI1NSkgLyAyNTUuMFxyXG4gICAgY29uc3QgZyA9ICgoaWQgPj4gOCkgJiAyNTUpIC8gMjU1LjBcclxuICAgIGNvbnN0IGIgPSAoKGlkID4+IDE2KSAmIDI1NSkgLyAyNTUuMFxyXG4gICAgY29uc3QgYSA9ICgoaWQgPj4gMjQpICYgMjU1KSAvIDI1NS4wXHJcbiAgICByZXR1cm4geyByLCBnLCBiLCBhIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIGRlY29kZSBwaXhlbCB2YWx1ZSB0byBudW1iZXJcclxuICogQHBhcmFtIHBpeGVsVmFsIGEgcGl4ZWwncyB2YWx1ZSBvbiB0ZXh0dXJlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlUmVuZGVySWQocGl4ZWxWYWw6IFVpbnQ4QXJyYXkpOiBudW1iZXIge1xyXG4gICAgLy8gcGFyc2Ugbm9ybWFsaXplZCBwYXJ0cyBvZiBpZCBudW1iZXIsIGJpdCBzaGlmdCB0byBvcmlnaW4gcG9zaXRpb24gYW5kIGNvbmNhdFxyXG4gICAgY29uc3QgcmVuZGVySWQgPSBwaXhlbFZhbFswXSB8IChwaXhlbFZhbFsxXSA8PCA4KSB8IChwaXhlbFZhbFsyXSA8PCAxNikgfCAocGl4ZWxWYWxbM10gPDwgMjQpXHJcbiAgICByZXR1cm4gcmVuZGVySWRcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNoYWRlciB7XHJcbiAgICBwdWJsaWMgaW5wdXRzOiBWYXJpYWJsZSA9IHt9XHJcbiAgICBwdWJsaWMgb3V0cHV0czogVmFyaWFibGUgPSB7fVxyXG4gICAgcHVibGljIHVuaWZvcm1zOiBWYXJpYWJsZSA9IHt9XHJcbiAgICBwdWJsaWMgbWV0aG9kczogc3RyaW5nW11bXSA9IFtbXV1cclxuICAgIHB1YmxpYyBtYWluOiBzdHJpbmdbXSA9IFtdXHJcbiAgICBwcml2YXRlIGhlYWRlciA9IGAjdmVyc2lvbiAzMDAgZXNcXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxuYFxyXG4gICAgcHVibGljIGNvcHkoKSB7XHJcbiAgICAgICAgY29uc3QgY29weVNoYWRlciA9IG5ldyBTaGFkZXIoKVxyXG4gICAgICAgIGNvcHlTaGFkZXIuaW5wdXRzID0geyAuLi50aGlzLmlucHV0cyB9XHJcbiAgICAgICAgY29weVNoYWRlci5vdXRwdXRzID0geyAuLi50aGlzLm91dHB1dHMgfVxyXG4gICAgICAgIGNvcHlTaGFkZXIudW5pZm9ybXMgPSB7IC4uLnRoaXMudW5pZm9ybXMgfVxyXG4gICAgICAgIGNvcHlTaGFkZXIubWFpbiA9IHRoaXMubWFpbi5tYXAoKHN0cikgPT4gc3RyKVxyXG4gICAgICAgIGNvcHlTaGFkZXIubWV0aG9kcyA9IHRoaXMubWV0aG9kcy5tYXAoKG1ldGhvZCkgPT4gbWV0aG9kLm1hcCgoc3RyKSA9PiBzdHIpKVxyXG4gICAgICAgIHJldHVybiBjb3B5U2hhZGVyXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY29ubmVjdCgpIHtcclxuICAgICAgICBjb25zdCB2YXJpYWJsZXNQcmVmaXggPSBbXHJcbiAgICAgICAgICAgIHsgcHJlZml4OiAnaW4nLCB2YXJpYWJsZXM6IHRoaXMuaW5wdXRzIH0sXHJcbiAgICAgICAgICAgIHsgcHJlZml4OiAnb3V0JywgdmFyaWFibGVzOiB0aGlzLm91dHB1dHMgfSxcclxuICAgICAgICAgICAgeyBwcmVmaXg6ICd1bmlmb3JtJywgdmFyaWFibGVzOiB0aGlzLnVuaWZvcm1zIH1cclxuICAgICAgICBdXHJcbiAgICAgICAgY29uc3QgdmFyaWFibGVEZWZpbml0aW9ucyA9IHZhcmlhYmxlc1ByZWZpeFxyXG4gICAgICAgICAgICAubWFwKCh2YXJpYWJsZVByZWZpeCkgPT5cclxuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhcmlhYmxlUHJlZml4LnZhcmlhYmxlcylcclxuICAgICAgICAgICAgICAgICAgICAubWFwKChbbmFtZSwgdHlwZV0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAke3ZhcmlhYmxlUHJlZml4LnByZWZpeH0gJHt0eXBlfSAke25hbWV9O1xcbmBcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKCcnKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5qb2luKCcnKVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB0aGlzLmhlYWRlciArXHJcbiAgICAgICAgICAgIHZhcmlhYmxlRGVmaW5pdGlvbnMgK1xyXG4gICAgICAgICAgICB0aGlzLm1ldGhvZHMubWFwKChtZXRob2QpID0+IG1ldGhvZC5qb2luKCdcXG4nKSkuam9pbignXFxuJykgK1xyXG4gICAgICAgICAgICAnXFxuJyArXHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5qb2luKCdcXG4nKVxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgRU1QVFlfRlVOQ1RJT04gPSAoKSA9PiB7fVxyXG4iLCIvKipcclxuICogVGVzdCB3aGV0aGVyIGEgc3RyaW5nIGNhbiBiZSBhIHZhbGlkIGlkIG9mIGEgTm9kZS5cclxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlOiB0aGUgc3RyaW5nIHRvYmUgdGVzdGVkXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRJZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmxlbmd0aCA+IDBcclxufVxyXG4iLCIvKipcclxuICogQGF1dGhvciBKaWFjaGVuZyBQYW4gPGphY2tpZWFueGlzQGdtYWlsLmNvbT5cclxuICogQGRlc2NyaXB0aW9uIE1hcDIgaXMgYSBNYXAgZGF0YSBzdHJ1Y3R1cmUgd2hpY2ggbWFwcyB0d28ga2V5cyB0byBvbmUgdmFsdWUuXHJcbiAqIEBVc2FnZSBzYW1lIHRvIE1hcCBkYXRhIHN0cnVjdHVyZSBpbiBFUzYuXHJcbiAqIEBkZXBlbmRlbmNlcyBOb25lXHJcbiAqL1xyXG5cclxuY29uc3QgSk9JTiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNylcclxuY29uc3QgaXNLZXlzID0gKGtleXM6IEFycmF5PHN0cmluZz4pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAga2V5cyBpbnN0YW5jZW9mIEFycmF5ICYmXHJcbiAgICAgICAga2V5cy5sZW5ndGggPT09IDIgJiZcclxuICAgICAgICBrZXlzLmV2ZXJ5KChrZXkpID0+IGtleSAhPT0gdW5kZWZpbmVkICYmIGtleSAhPT0gbnVsbClcclxuICAgIClcclxufVxyXG5jbGFzcyBNYXAyIHtcclxuICAgIHByaXZhdGUgbWFwID0gbmV3IE1hcCgpXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZW50cmllcz86IEFycmF5PEFycmF5PGFueT4+KSB7XHJcbiAgICAgICAgaWYgKGVudHJpZXMgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgW2tleSwgdmFsdWVdID0gZW50cnlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0KGtleSwgdmFsdWUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBzaXplKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5zaXplXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZShrZXlzOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICAgICAgaWYgKGlzS2V5cyhrZXlzKSkge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBrZXlzLmpvaW4oSk9JTilcclxuICAgICAgICAgICAgY29uc3Qga2V5XyA9IGtleXNbMV0gKyBKT0lOICsga2V5c1swXVxyXG4gICAgICAgICAgICBsZXQgbWFwID0gdGhpcy5tYXBcclxuICAgICAgICAgICAgbWFwLmRlbGV0ZShrZXkpXHJcbiAgICAgICAgICAgIG1hcC5kZWxldGUoa2V5XylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldChrZXlzOiBBcnJheTxzdHJpbmc+LCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKGlzS2V5cyhrZXlzKSkge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBrZXlzLmpvaW4oSk9JTilcclxuICAgICAgICAgICAgY29uc3Qga2V5XyA9IGtleXNbMV0gKyBKT0lOICsga2V5c1swXVxyXG4gICAgICAgICAgICBsZXQgbWFwID0gdGhpcy5tYXBcclxuICAgICAgICAgICAgaWYgKCFtYXAuaGFzKGtleV8pKSB7XHJcbiAgICAgICAgICAgICAgICBtYXAuc2V0KGtleSwgdmFsdWUpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtYXAuc2V0KGtleV8sIHZhbHVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldChrZXlzOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICAgICAgaWYgKGlzS2V5cyhrZXlzKSkge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBrZXlzLmpvaW4oSk9JTilcclxuICAgICAgICAgICAgY29uc3Qga2V5XyA9IGtleXNbMV0gKyBKT0lOICsga2V5c1swXVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0KGtleSkgfHwgdGhpcy5tYXAuZ2V0KGtleV8pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFzKGtleXM6IEFycmF5PHN0cmluZz4pIHtcclxuICAgICAgICBpZiAoaXNLZXlzKGtleXMpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGtleXMuam9pbihKT0lOKVxyXG4gICAgICAgICAgICBjb25zdCBrZXlfID0ga2V5c1sxXSArIEpPSU4gKyBrZXlzWzBdXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcC5oYXMoa2V5KSB8fCB0aGlzLm1hcC5oYXMoa2V5XylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvckVhY2goZnVuYzogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLm1hcC5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBrZXlzID0ga2V5LnNwbGl0KEpPSU4pXHJcbiAgICAgICAgICAgIGZ1bmModmFsdWUsIGtleXMsIHRoaXMpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW50cmllcygpIHtcclxuICAgICAgICByZXR1cm4gWy4uLnRoaXMubWFwLmVudHJpZXMoKV0ubWFwKChlbnRyeSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBlbnRyeVswXS5zcGxpdChKT0lOKVxyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGVudHJ5WzFdXHJcbiAgICAgICAgICAgIHJldHVybiBba2V5LCB2YWx1ZV1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBrZXlzKCkge1xyXG4gICAgICAgIGxldCBrZXlzID0gWy4uLnRoaXMubWFwLmtleXMoKV1cclxuICAgICAgICByZXR1cm4ga2V5cy5tYXAoKGtleSkgPT4ga2V5LnNwbGl0KEpPSU4pKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2YWx1ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLm1hcC52YWx1ZXMoKV1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFwMlxyXG4iLCIvKipcclxuICogQGF1dGhvciBYaWFvZG9uZyBaaGFvIDx6aGFveGlhb2RvbmdAemp1LmVkdS5jbj5cclxuICogQGRlc2NyaXB0aW9uIHNvbWUgdXRpbGl0eSBmdW5jdGlvbnNcclxuICovXHJcblxyXG5pbXBvcnQgeyBOb2RlTGlua0RhdGEgfSBmcm9tICcuLi9pbnRlcmZhY2VzJ1xyXG5cclxuLyoqXHJcbiAqIGdpdmVuIGEgZ3JhcGggZGF0YSB3aXRoIHBvc2l0aW9uLCByZXR1cm4gYSBjb3B5IG9mIGdyYXBoLCB3aXRoIHBvc2l0aW9uIHRyYW5zZm9ybWVkIHRvIGNlbnRlciBvZiBnaXZlbiBzaXplXHJcbiAqIEBwYXJhbSBncmFwaCBub2RlIGxpbmsgZ3JhcGggZGF0YVxyXG4gKiBAcGFyYW0gc2l6ZSBncmFwaCBzaXplIChtYXgod2lkdGgsIGhlaWdodCkpXHJcbiAqIEBwYXJhbSBjZW50ZXJYIHggcG9zIG9mIGdyYXBoIGNlbnRlclxyXG4gKiBAcGFyYW0gY2VudGVyWSB5IHBvcyBvZiBncmFwaCBjZW50ZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1HcmFwaFBvc2l0aW9uKFxyXG4gICAgZ3JhcGg6IE5vZGVMaW5rRGF0YSxcclxuICAgIHNpemU6IG51bWJlcixcclxuICAgIGNlbnRlclg6IG51bWJlcixcclxuICAgIGNlbnRlclk6IG51bWJlclxyXG4pIHtcclxuICAgIGNvbnN0IHRhcmdldEdyYXBoOiBOb2RlTGlua0RhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGdyYXBoKSlcclxuICAgIGNvbnN0IHhzID0gdGFyZ2V0R3JhcGgubm9kZXMubWFwKChub2RlKSA9PiBub2RlLngpXHJcbiAgICBjb25zdCB5cyA9IHRhcmdldEdyYXBoLm5vZGVzLm1hcCgobm9kZSkgPT4gbm9kZS55KVxyXG4gICAgY29uc3QgeE1pbiA9IE1hdGgubWluKC4uLnhzKVxyXG4gICAgY29uc3QgeE1heCA9IE1hdGgubWF4KC4uLnhzKVxyXG4gICAgY29uc3QgeU1pbiA9IE1hdGgubWluKC4uLnlzKVxyXG4gICAgY29uc3QgeU1heCA9IE1hdGgubWF4KC4uLnlzKVxyXG5cclxuICAgIGNvbnN0IHhNaWQgPSAoeE1pbiArIHhNYXgpIC8gMlxyXG4gICAgY29uc3QgeU1pZCA9ICh5TWluICsgeU1heCkgLyAyXHJcblxyXG4gICAgdGFyZ2V0R3JhcGgubm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgIG5vZGUueCA9ICgobm9kZS54IC0geE1pZCkgLyAoeE1heCAtIHhNaW4pKSAqIHNpemUgKyBjZW50ZXJYXHJcbiAgICAgICAgbm9kZS55ID0gKChub2RlLnkgLSB5TWlkKSAvICh5TWF4IC0geU1pbikpICogc2l6ZSArIGNlbnRlcllcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHRhcmdldEdyYXBoXHJcbn1cclxuXHJcbi8qKlxyXG4gKiB0aGUgZnVuY3Rpb24gaXMgdG8gb3ZlcnJpZGUgb2JqZWN0IHJlY3Vyc2l2ZWx5XHJcbiAqIEBwYXJhbSBvdmVycmlkZGVuT2JqZWN0OiB0aGUgT2JqZWN0IHRvIGJlIG92ZXJyaWRkZW5cclxuICogQHBhcmFtIG92ZXJyaWRpbmdPYmplY3Q6IHRoZSBPYmplY3QgdG8gb3ZlcnJpZGUgdGhlIG92ZXJyaWRkZW4gT2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb3ZlcnJpZGUob3ZlcnJpZGRlbk9iamVjdDogb2JqZWN0LCBvdmVycmlkaW5nT2JqZWN0OiBvYmplY3QpIHtcclxuICAgIGlmIChvdmVycmlkZGVuT2JqZWN0ICE9PSBPYmplY3Qob3ZlcnJpZGRlbk9iamVjdCkpIHtcclxuICAgICAgICAvLyBvdmVycmlkZGVuT2JqZWN0IGlzIG5vdCBhbiBvYmplY3RcclxuICAgICAgICBpZiAob3ZlcnJpZGluZ09iamVjdCAhPT0gT2JqZWN0KG92ZXJyaWRpbmdPYmplY3QpKSB7XHJcbiAgICAgICAgICAgIC8vIG92ZXJyaWRpbmdPYmplY3QgaXMgbm90IGFuIG9iamVjdFxyXG4gICAgICAgICAgICByZXR1cm4gb3ZlcnJpZGluZ09iamVjdFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG92ZXJyaWRpbmdPYmplY3QpKSAvLyBkZWVwIGNvcHlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb2JqZWN0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvdmVycmlkZGVuT2JqZWN0KSkgLy8gZGVlcCBjb3B5XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvdmVycmlkaW5nT2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QgJiYgb3ZlcnJpZGluZ09iamVjdFtrZXldID09PSBPYmplY3Qob3ZlcnJpZGluZ09iamVjdFtrZXldKSkge1xyXG4gICAgICAgICAgICAvLyBpZiBvdmVycmlkaW5nT2JqZWN0W2tleV0gaXMgYW4gb2JqZWN0XHJcbiAgICAgICAgICAgIG9iamVjdFtrZXldID0gb3ZlcnJpZGUob2JqZWN0W2tleV0sIG92ZXJyaWRpbmdPYmplY3Rba2V5XSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvYmplY3Rba2V5XSA9IG92ZXJyaWRpbmdPYmplY3Rba2V5XVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvYmplY3RcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9