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
        fill: { r: 0.2, g: 0.6, b: 0.2, a: 0.8 },
        strokeColor: { r: 0.9, g: 0.9, b: 0.9, a: 0.6 },
        strokeWidth: 2,
        /* circle shape styles */
        r: 5,
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
        curveness: 0.2
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
        const exceptionKeys = new Set(['innerWidth', 'innerHeight']); // NOTE: exception keys, use differenct mapping
        Object.keys(this.$_style).forEach((key) => {
            // generate style functions
            if (!exceptionKeys.has(key))
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
    constructor(gl, params, shaderSeries, idTexture) {
        this.count = 0;
        this.elementToRenderId = new Map();
        const { limit, width, height, instanceVerteces } = params;
        this.gl = gl;
        this.capacity = limit;
        this.width = width;
        this.height = height;
        this.pixelRatio = window.devicePixelRatio || 1;
        this.attributes = utils_1.extractAttributesFromShader(shaderSeries.vertex);
        this.program = utils_1.createProgram(this.gl, shaderSeries.vertex, shaderSeries.fragment, this.attributes);
        this.idAttributes = utils_1.extractAttributesFromShader(shaderSeries.idVertex);
        this.idProgram = utils_1.createProgram(this.gl, shaderSeries.idVertex, shaderSeries.idFragment, this.idAttributes);
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
        }
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
                    // const value = attr.extractAttributeValueFrom(element)
                    const value = this.getAttributeByElement(element, attr.name);
                    const array = value.value;
                    array.forEach((v, j) => {
                        // inject into the Buffer Array
                        attr.array[attr.size * index + j] = v;
                    });
                }
            });
            const offset = element.type === 'Node' ? 0 : 1; // NOTE: node render id, use even integer
            const renderId = 2 * index + offset;
            const renderIdColor = utils_1.encodeRenderId(renderId);
            this.idAttributes.get('in_id').array[4 * index] = renderIdColor.r;
            this.idAttributes.get('in_id').array[4 * index + 1] = renderIdColor.g;
            this.idAttributes.get('in_id').array[4 * index + 2] = renderIdColor.b;
            this.idAttributes.get('in_id').array[4 * index + 3] = renderIdColor.a;
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
                    value: [style.shape === 'curve' ? 1 : 0]
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
        let count = 0; // TODO: useless count
        links.forEach((link, i) => {
            // TODO: consider link and render link attribute mapping
            const sourceName = 'in_source';
            const sourceAttribute = this.attributes.get(sourceName);
            const sourceValue = this.getAttributeByElement(link, sourceName);
            const sourceArray = sourceValue.value;
            sourceAttribute.array[2 * i] = sourceArray[0];
            sourceAttribute.array[2 * i + 1] = sourceArray[1];
            const targetName = 'in_target';
            const targetAttribute = this.attributes.get(targetName);
            const targetValue = this.getAttributeByElement(link, targetName);
            const targetArray = targetValue.value;
            targetAttribute.array[2 * i] = targetArray[0];
            targetAttribute.array[2 * i + 1] = targetArray[1];
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
            this.idAttributes.get('in_id').array[4 * (this.count + i)] = renderIdColor.r
            this.idAttributes.get('in_id').array[4 * (this.count + i) + 1] = renderIdColor.g
            this.idAttributes.get('in_id').array[4 * (this.count + i) + 2] = renderIdColor.b
            this.idAttributes.get('in_id').array[4 * (this.count + i) + 3] = renderIdColor.a
            */
        });
        const sourceAttr = this.attributes.get('in_source');
        const targetAttr = this.attributes.get('in_target');
        const arr = [sourceAttr, targetAttr];
        arr.forEach((attr) => {
            if (!attr.isBuildIn) {
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer);
                this.gl.bufferSubData(this.gl.ARRAY_BUFFER, attr.size * count * attr.array.BYTES_PER_ELEMENT, attr.array, attr.size * count, attr.size * links.length);
            }
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
     * refresh all nodes position after lazy update
     * @param nodes all node data
     */
    refreshPosition(nodes) {
        // set array
        nodes.forEach((node, i) => {
            // TODO: consider node and render node attribute mapping
            const name = 'in_position';
            const attribute = this.attributes.get(name);
            const value = this.getAttributeByElement(node, name);
            const array = value.value;
            attribute.array[2 * i] = array[0];
            attribute.array[2 * i + 1] = array[1];
        });
        this.attributes.forEach((attr) => {
            if (!attr.isBuildIn) {
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer);
                this.gl.bufferSubData(this.gl.ARRAY_BUFFER, 0, attr.array, 0, attr.size * nodes.length);
            }
        });
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
        this.getAllNodes = getAllNodes;
        this.getAllLinks = getAllLinks;
        this.initIdTexture();
        const nodeShaderSeriels = {
            vertex: nodeShaders.vertex.connect(),
            fragment: nodeShaders.fragment.connect(),
            idVertex: nodeShaders.idVertex.connect(),
            idFragment: nodeShaders.idFragment.connect()
        };
        const linkShaderSeriels = {
            vertex: linkShaders.vertex.connect(),
            fragment: linkShaders.fragment.connect(),
            idVertex: linkShaders.idVertex.connect(),
            idFragment: linkShaders.idFragment.connect()
        };
        this.nodeManager = new render_node_1.RenderNodeManager(this.gl, { width, height, limit: nodeLimit }, nodeShaderSeriels, this.idTexture);
        this.linkManager = new render_link_1.RenderLinkManager(this.gl, { width, height, limit: linkLimit }, linkShaderSeriels, this.idTexture);
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
    curveness: 'float'
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
    `  }`,
    `}`
];
const idFragment = fragment.copy();
exports.idFragment = idFragment;
idFragment.inputs['id'] = 'vec4';
idFragment.main[3] = `fragmentColor = id;`; // NOTE: for id fragment, change color to id.
idFragment.main[14] = `fragmentColor = id;`; // NOTE: for id fragment, change color to id.


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
        `   float inner_p1 = sqrt(dot(p1, p1));`,
        `   float inner_p2 = sqrt(dot(p2, p2));`,
        `   float inner_p3 = sqrt(dot(p3, p3));`,
        `   vec2 inner = (p1 * inner_p1 + p2 * inner_p2 + p3 * inner_p3) / (inner_p1 + inner_p2 + inner_p3);`,
        `   return inner;`,
        `}`
    ],
    [
        `float calculate_stroke_scale (vec2 p1, vec2 p2, vec2 p3) {`,
        `   vec2 inner = calculate_inner_point(p1, p2, p3);`,
        `   float a = distance(p1, inner);`,
        `   float b = distance(p2, inner);`,
        `   float c = distance(p1, p2);`,
        `   float cos_alpha = (pow(b, 2.0) + pow(c, 2.0) - pow(a, 2.0)) / (2.0 * b * c);`,
        `   float sin_alpha = sqrt(1.0 - pow(cos_alpha, 2.0));`,
        `   float normal_length = sin_alpha * a;`,
        `   float stroke_scale = 1.0 + strokeWidth / 2.0 / normal_length;`,
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
    `       1, 0, 0,`,
    `       0, 1, 0,`,
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
    `       rotate_mat = mat3(`,
    `           cos(rotate), sin(rotate), 0,`,
    `           -sin(rotate), cos(rotate), 0,`,
    `           0, 0, 1`,
    `       );`,
    `   } else if (shape == 2.0) {`,
    // calculate the normal of the edge: alpha => beta
    `       vec2 inner = calculate_inner_point(vertexAlpha, vertexBeta, vertexGamma);`,
    `       float stroke_scale = calculate_stroke_scale(vertexAlpha, vertexBeta, vertexGamma);`,
    `       vec2 outer_vertexAlpha = (vertexAlpha - inner) * stroke_scale + inner;`,
    `       vec2 outer_vertexBeta = (vertexBeta - inner) * stroke_scale + inner;`,
    `       vec2 outer_vertexGamma = (vertexGamma - inner) * stroke_scale + inner;`,
    // to ensure the fragment cutting is within the rectangle
    `       width = 1.5 * (max(max(outer_vertexAlpha.x, outer_vertexBeta.x), outer_vertexGamma.x) - min(min(outer_vertexAlpha.x, outer_vertexBeta.x), outer_vertexGamma.x));`,
    `       height = 1.5 * (max(max(outer_vertexAlpha.y, outer_vertexBeta.y), outer_vertexGamma.y)- min(min(outer_vertexAlpha.y, outer_vertexBeta.y), outer_vertexGamma.y));`,
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
    [
        `vec2 calculate_inner_point (vec2 p1, vec2 p2, vec2 p3) {`,
        `    float inner_p1 = sqrt(dot(p1, p1));`,
        `    float inner_p2 = sqrt(dot(p2, p2));`,
        `    float inner_p3 = sqrt(dot(p3, p3));`,
        `    vec2 inner = (p1 * inner_p1 + p2 * inner_p2 + p3 * inner_p3) / (inner_p1 + inner_p2 + inner_p3);`,
        `    return inner;`,
        `}`
    ],
    [
        `float calculate_stroke_scale (vec2 p1, vec2 p2, vec2 p3) {`,
        `    vec2 inner = calculate_inner_point(p1, p2, p3);`,
        `    float a = distance(p1, inner);`,
        `    float b = distance(p2, inner);`,
        `    float c = distance(p1, p2);`,
        `    float cos_alpha = (pow(b, 2.0) + pow(c, 2.0) - pow(a, 2.0)) / (2.0 * b * c);`,
        `    float sin_alpha = sqrt(1.0 - pow(cos_alpha, 2.0));`,
        `    float normal_length = sin_alpha * a;`,
        `    float stroke_scale = 1.0 + strokeWidth / 2.0 / normal_length;`,
        `    return stroke_scale;`,
        `}`
    ],
    [
        `float sign (vec2 p1, vec2 p2, vec2 p3) {`,
        `    return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);`,
        `}`
    ],
    [
        `float inTriangle() {`,
        `    float stroke_scale = calculate_stroke_scale(vertexAlpha, vertexBeta, vertexGamma);`,
        `    vec2 flip_pos = vec2(position.x, viewport.y - position.y);`,
        `    vec2 flip_vertexAlpha = vec2(vertexAlpha.x, - vertexAlpha.y) / stroke_scale;`,
        `    vec2 flip_vertexBeta = vec2(vertexBeta.x, - vertexBeta.y) / stroke_scale;`,
        `    vec2 flip_vertexGamma = vec2(vertexGamma.x, - vertexGamma.y) / stroke_scale;`,
        `    float d1 = sign(gl_FragCoord.xy / pixelRatio - flip_pos, flip_vertexAlpha, flip_vertexBeta);`,
        `    float d2 = sign(gl_FragCoord.xy / pixelRatio - flip_pos, flip_vertexBeta, flip_vertexGamma);`,
        `    float d3 = sign(gl_FragCoord.xy / pixelRatio - flip_pos, flip_vertexGamma, flip_vertexAlpha);`,
        `    bool has_neg = (d1 <= 0.0) || (d2 <= 0.0) || (d3 <= 0.0);`,
        `    bool has_pos = (d1 >= 0.0) || (d2 >= 0.0) || (d3 >= 0.0);`,
        `    if (!(has_neg && has_pos)) {`,
        `        return 1.0;`,
        `    } else {`,
        `        return 0.0;`,
        `    }`,
        `}`
    ],
    [
        `float inTriangleBorder() {`,
        `    float stroke_scale = calculate_stroke_scale(vertexAlpha, vertexBeta, vertexGamma);`,
        `    vec2 flip_pos = vec2(position.x, viewport.y - position.y);`,
        `    vec2 flip_vertexAlpha = stroke_scale * vec2(vertexAlpha.x, - vertexAlpha.y);`,
        `    vec2 flip_vertexBeta = stroke_scale * vec2(vertexBeta.x, - vertexBeta.y);`,
        `    vec2 flip_vertexGamma = stroke_scale * vec2(vertexGamma.x, - vertexGamma.y);`,
        ``,
        `    float d1 = sign(gl_FragCoord.xy / pixelRatio - flip_pos, flip_vertexAlpha, flip_vertexBeta);`,
        `    float d2 = sign(gl_FragCoord.xy / pixelRatio - flip_pos, flip_vertexBeta, flip_vertexGamma);`,
        `    float d3 = sign(gl_FragCoord.xy / pixelRatio - flip_pos, flip_vertexGamma, flip_vertexAlpha);`,
        ``,
        `    bool has_neg = (d1 <= 0.0) || (d2 <= 0.0) || (d3 <= 0.0);`,
        `    bool has_pos = (d1 >= 0.0) || (d2 >= 0.0) || (d3 >= 0.0);`,
        ``,
        `    bool inTriangle = inTriangle() == 1.0;`,
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
    `        if (inCircle() < 0.0001 && (strokeWidth < 0.8 || inCircleBorder() < 0.5)) {`,
    `            discard;`,
    `        }`,
    `        fragmentColor = inCircleBorder() * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a) + inCircle() * vec4(fill.rgb * fill.a, fill.a);`,
    `    } else if (shape == 1.0) {`,
    `        // rect shape`,
    `        fragmentColor = inRectBorder() * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a) + inRect() * vec4(fill.rgb * fill.a, fill.a);`,
    `    } else if (shape == 2.0) {`,
    `        // triangle shape`,
    `        fragmentColor = inTriangleBorder() * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a) + inTriangle() * vec4(fill.rgb * fill.a, fill.a);`,
    `    } else if (shape == 3.0) {`,
    `        // cross shape`,
    `        fragmentColor = inCrossBorder() * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a) + inCross() * vec4(fill.rgb * fill.a, fill.a);`,
    `    }`,
    `}`
];
const idFragment = fragment.copy();
exports.idFragment = idFragment;
idFragment.inputs['id'] = 'vec4';
// delete old fragmentColor
idFragment.main.splice(7, 1);
idFragment.main.splice(9, 1);
idFragment.main.splice(11, 1);
idFragment.main.splice(13, 1);
// add new fragmentColor
idFragment.main.splice(-1, 0, `fragmentColor = id;`);


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
function extractAttributesFromShader(shaderStr) {
    const matchings = shaderStr.match(/in\s.*;/g);
    const attributesMap = new Map();
    matchings.forEach((match, location) => {
        const name = match.split(' ')[2].slice(0, -1);
        const type = match.split(' ')[1];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YXNldC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YXNldC9taXNlcmFibGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhc2V0L3BhdGVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2VsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2xpbmsudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL25vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmFjdGlvbi9pbnRlcmFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvZWxlbWVudHMvcmVuZGVyLWVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL2VsZW1lbnRzL3JlbmRlci1saW5rLnRzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlci9lbGVtZW50cy9yZW5kZXItbm9kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL3NoYWRlcnMvbGluay1zaGFkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL3NoYWRlcnMvbm9kZS1zaGFkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL21hcDIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7R0FHRztBQUNVLGFBQUssR0FBRyxHQUFHO0FBQ1gsY0FBTSxHQUFHLEdBQUc7QUFDWix1QkFBZSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUM1QyxxQkFBYSxHQUFHLElBQUk7QUFDcEIsaUJBQVMsR0FBRyxHQUFHO0FBQ2YsaUJBQVMsR0FBRyxJQUFJO0FBRWhCLFlBQUksR0FBRztJQUNoQixLQUFLLEVBQUU7UUFDSCxLQUFLLEVBQUUsUUFBUTtRQUNmLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUN0QixJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFO1FBQ3hDLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUU7UUFDL0MsV0FBVyxFQUFFLENBQUM7UUFDZCx5QkFBeUI7UUFDekIsQ0FBQyxFQUFFLENBQUM7UUFDSix1QkFBdUI7UUFDdkIsS0FBSyxFQUFFLENBQUM7UUFDUixNQUFNLEVBQUUsQ0FBQztRQUNULFVBQVUsRUFBRSxDQUFDO1FBQ2IsV0FBVyxFQUFFLENBQUM7UUFDZCxNQUFNLEVBQUUsQ0FBQztRQUNULDJCQUEyQjtRQUMzQixXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtRQUM1QixVQUFVLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQzFDLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0tBQzdDO0NBQ0o7QUFFWSxZQUFJLEdBQUc7SUFDaEIsS0FBSyxFQUFFO1FBQ0gsS0FBSyxFQUFFLE1BQU07UUFDYixXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFO1FBQy9DLFdBQVcsRUFBRSxDQUFDO1FBQ2QsdUJBQXVCO1FBQ3ZCLFNBQVMsRUFBRSxHQUFHO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7O0FDekNEOzs7R0FHRzs7O0FBRUgsNEZBQXlDO0FBR2hDLDJGQUhBLHVCQUFVLE9BR0E7QUFGbkIsbUZBQW1DO0FBRWQsd0ZBRlosaUJBQU8sT0FFWTs7Ozs7Ozs7Ozs7Ozs7QUNSNUI7OztHQUdHOzs7QUFFSDs7R0FFRztBQUVVLGtCQUFVLEdBQUc7SUFDdEIsS0FBSyxFQUFFO1FBQ0gsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hFLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNoRixFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzVFLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDN0UsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RSxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzdFLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDekUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzNFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDeEUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hFLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDMUUsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMxRSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZFLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDM0UsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN6RSxFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDN0UsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUM1RSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxLQUFL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QUUsUUFBUSxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzNFLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDMUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzFFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BFLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDekUsRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzdFLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDMUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzNFLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDNUUsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMxRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQ3ZFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDdkUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RSxFQUFFLEVBQUUsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO0tBQ2pGO0lBRUQsS0FBSyxFQUFFO1FBQ0gsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDL0QsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQy9DLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDaEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMxRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RCxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hELEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDN0QsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDeEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2hELEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDaEQsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMxRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQy9DLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMxRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RCxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDM0QsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDMUQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNoRCxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDOUQsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFlB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UyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNoRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDL0MsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMvQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2hELEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNoRCxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQy9DLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzlDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDOUMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDM0QsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDaEQsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDL0MsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2hELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDeEQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzVELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDMUQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMxRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNoRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQy9DLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDeEQsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxN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LEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUU7UUFDM0MsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRTtRQUMzQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRTtRQUMzQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRTtRQUMzQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFF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Z0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQzFFLHdDQUF3QztZQUN4QyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3RDthQUFNO1lBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztTQUN0QztLQUNKO0lBQ0QsT0FBTyxNQUFNO0FBQ2pCLENBQUM7QUFyQkQsNEJBcUJDIiwiZmlsZSI6Ik5ldFYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gZGVmYXVsdCBjb25maWd1cmF0aW9ucyBpbiBOZXRWXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgd2lkdGggPSA4MDBcclxuZXhwb3J0IGNvbnN0IGhlaWdodCA9IDYwMFxyXG5leHBvcnQgY29uc3QgYmFja2dyb3VuZENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAxLCBhOiAxIH1cclxuZXhwb3J0IGNvbnN0IGVuYWJsZVBhblpvb20gPSB0cnVlXHJcbmV4cG9ydCBjb25zdCBub2RlTGltaXQgPSAxMDBcclxuZXhwb3J0IGNvbnN0IGxpbmtMaW1pdCA9IDEwMDBcclxuXHJcbmV4cG9ydCBjb25zdCBub2RlID0ge1xyXG4gICAgc3R5bGU6IHtcclxuICAgICAgICBzaGFwZTogJ2NpcmNsZScsIC8vIGRlZmF1bHQgc2hhcGVcclxuICAgICAgICBvZmZzZXQ6IHsgeDogMCwgeTogMCB9LFxyXG4gICAgICAgIGZpbGw6IHsgcjogMC4yLCBnOiAwLjYsIGI6IDAuMiwgYTogMC44IH0sXHJcbiAgICAgICAgc3Ryb2tlQ29sb3I6IHsgcjogMC45LCBnOiAwLjksIGI6IDAuOSwgYTogMC42IH0sXHJcbiAgICAgICAgc3Ryb2tlV2lkdGg6IDIsXHJcbiAgICAgICAgLyogY2lyY2xlIHNoYXBlIHN0eWxlcyAqL1xyXG4gICAgICAgIHI6IDUsXHJcbiAgICAgICAgLyogcmVjdCBzaGFwZSBzdHlsZXMgKi9cclxuICAgICAgICB3aWR0aDogNSxcclxuICAgICAgICBoZWlnaHQ6IDUsXHJcbiAgICAgICAgaW5uZXJXaWR0aDogNSxcclxuICAgICAgICBpbm5lckhlaWdodDogNSxcclxuICAgICAgICByb3RhdGU6IDAsIC8vIC1waSB0byArcGksIHBvc2l0aXZlIHZhbHVlIG1lYW5zIGNsb2Nrd2lzZVxyXG4gICAgICAgIC8qIHRyaWFuZ2xlIHNoYXBlIHN0eWxlcyAqL1xyXG4gICAgICAgIHZlcnRleEFscGhhOiB7IHg6IDAsIHk6IC00IH0sXHJcbiAgICAgICAgdmVydGV4QmV0YTogeyB4OiAtMiAqIE1hdGguc3FydCgzKSwgeTogMiB9LFxyXG4gICAgICAgIHZlcnRleEdhbW1hOiB7IHg6IDIgKiBNYXRoLnNxcnQoMyksIHk6IDIgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbGluayA9IHtcclxuICAgIHN0eWxlOiB7XHJcbiAgICAgICAgc2hhcGU6ICdsaW5lJyxcclxuICAgICAgICBzdHJva2VDb2xvcjogeyByOiAwLjQsIGc6IDAuNiwgYjogMC44LCBhOiAwLjUgfSxcclxuICAgICAgICBzdHJva2VXaWR0aDogMixcclxuICAgICAgICAvKiBjdXJ2ZSBzaGFwZSBzdHlsZSAqL1xyXG4gICAgICAgIGN1cnZlbmVzczogMC4yXHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XHJcbiAqIEBkZXNjcmlwdGlvbiBidWlsZC1pbiBkYXRhc2V0IGluIE5ldFZcclxuICovXHJcblxyXG5pbXBvcnQgeyBtaXNlcmFibGVzIH0gZnJvbSAnLi9taXNlcmFibGVzJ1xyXG5pbXBvcnQgeyBwYXRlbnRzIH0gZnJvbSAnLi9wYXRlbnRzJ1xyXG5cclxuZXhwb3J0IHsgbWlzZXJhYmxlcywgcGF0ZW50cyB9XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIFhpYW9kb25nIFpoYW8gPHpoYW94aWFvZG9uZ0B6anUuZWR1LmNuPlxyXG4gKiBAZGVzY3JpcHRpb24gTGVzIE1pc2VyYWJsZXMgcmVsYXRpb24gZGF0YXNldC5cclxuICovXHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIGdlbmVyYXRlZCBieSBkMy1mb3JjZTogaHR0cHM6Ly9vYnNlcnZhYmxlaHEuY29tL0BkMy9mb3JjZS1kaXJlY3RlZC1ncmFwaFxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBtaXNlcmFibGVzID0ge1xyXG4gICAgbm9kZXM6IFtcclxuICAgICAgICB7IGlkOiAnTXlyaWVsJywgeDogMjkzLjQ3MTQ1MTE3NTUzNjIzLCB5OiAzNTYuNDMzNTcxODEwNDEzOCwgZ3JvdXA6IDEgfSxcclxuICAgICAgICB7IGlkOiAnTmFwb2xlb24nLCB4OiAyNTMuOTAyNTA4ODYxODY1NiwgeTogMzc0LjMwNTgxMTY1MzY0NDUsIGdyb3VwOiAxIH0sXHJcbiAgICAgICAgeyBpZDogJ01sbGUuQmFwdGlzdGluZScsIHg6IDM1MC45MjcyNDk4OTkxODA3NywgeTogMzMyLjMzMjU1Mzk5OTk5NDMsIGdyb3VwOiAxIH0sXHJcbiAgICAgICAgeyBpZDogJ01tZS5NYWdsb2lyZScsIHg6IDM1Ni4wOTE2MTU2NTM5OTk3LCB5OiAzNTIuNzg4NTc5OTExNjAxNSwgZ3JvdXA6IDEgfSxcclxuICAgICAgICB7IGlkOiAnQ291bnRlc3NkZUxvJywgeDogMjU0LjI5MjkxNTIwOTg5MzM1LCB5OiAzNTcuMzE3NTczNDA3NjQxNywgZ3JvdXA6IDEgfSxcclxuICAgICAgICB7IGlkOiAnR2Vib3JhbmQnLCB4OiAyNTcuODU3MjkzNjI2MjAxLCB5OiAzMzUuODU0Mjc2MjgzNTg5NTcsIGdyb3VwOiAxIH0sXHJcbiAgICAgICAgeyBpZDogJ0NoYW1wdGVyY2llcicsIHg6IDI1OS42MjU1NTYzODI1MDI4LCB5OiAzODMuODMwMjc0Njk4MzI4MTQsIGdyb3VwOiAxIH0sXHJcbiAgICAgICAgeyBpZDogJ0NyYXZhdHRlJywgeDogMjQ5Ljg1OTY0NTk4MjkxMzksIHk6IDM0Ni4xODIyNTUxNjgzMjQ5NiwgZ3JvdXA6IDEgfSxcclxuICAgICAgICB7IGlkOiAnQ291bnQnLCB4OiAyNjkuOTY3OTM5NTEzNTA5MjQsIHk6IDM5MC42ODAwODQyMzIxNTcxLCBncm91cDogMSB9LFxyXG4gICAgICAgIHsgaWQ6ICdPbGRNYW4nLCB4OiAyNDYuNzM5NTIzMTEyNzc2NjUsIHk6IDM2NC41OTM1NzQ5NDQzMjA2NiwgZ3JvdXA6IDEgfSxcclxuICAgICAgICB7IGlkOiAnTGFiYXJyZScsIHg6IDQ0My41MTY1ODMzMTUwMjYsIHk6IDM1OC4yOTIwNDc4OTQ3NzY4MywgZ3JvdXA6IDIgfSxcclxuICAgICAgICB7IGlkOiAnVmFsamVhbicsIHg6IDQ0Mi4xNjg5NDc1NzY0MTUwNiwgeTogMzIwLjgzMTU1MzIxNjA4NjEsIGdyb3VwOiAyIH0sXHJcbiAgICAgICAgeyBpZDogJ01hcmd1ZXJpdGUnLCB4OiA0MTMuMzgxNjg1MTAwNzkzMSwgeTogMjQwLjA0MDkxNTU5Mjk2NTA0LCBncm91cDogMyB9LFxyXG4gICAgICAgIHsgaWQ6ICdNbWUuZGVSJywgeDogNDI3LjIzNjE3MTU5NTAyNTQsIHk6IDM1NS4xMDIxMTU4OTk3OTUxNCwgZ3JvdXA6IDIgfSxcclxuICAgICAgICB7IGlkOiAnSXNhYmVhdScsIHg6IDQwNS44NTA4Mjg1ODE5MTgzNCwgeTogMzMwLjUyMDE1MTIyMDUwODUsIGdyb3VwOiAyIH0sXHJcbiAgICAgICAgeyBpZDogJ0dlcnZhaXMnLCB4OiA0MDUuMjExMzEyMTkwNjg4MSwgeTogMzE2LjI5MTI1MzU5Mzk2MTM2LCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdUaG9sb215ZXMnLCB4OiA0MjIuNDEyNTMwNzc4MTY0NiwgeTogMTI2LjA3NjQ5NDQ5Nzc1ODA2LCBncm91cDogMyB9LFxyXG4gICAgICAgIHsgaWQ6ICdMaXN0b2xpZXInLCB4OiAzNjMuMTcyOTQyMjY3Nzk3OSwgeTogMTAyLjc3ODkwMzY4Mjg5Nzg1LCBncm91cDogMyB9LFxyXG4gICAgICAgIHsgaWQ6ICdGYW1ldWlsJywgeDogMzgxLjc5NDcxMDMwOTQwMjgsIHk6IDY2LjU4MTMzNzI0MDQzOTQ4LCBncm91cDogMyB9LFxyXG4gICAgICAgIHsgaWQ6ICdCbGFjaGV2aWxsZScsIHg6IDM4My4xNzkyNjc2NzQwMjYxLCB5OiA5NC44MDMyMDMxNTUwMDE1NCwgZ3JvdXA6IDMgfSxcclxuICAgICAgICB7IGlkOiAnRmF2b3VyaXRlJywgeDogMzYxLjg5MzczMTY0NDI4NSwgeTogNzAuMzg2OTYzODEzODQwNzQsIGdyb3VwOiAzIH0sXHJcbiAgICAgICAgeyBpZDogJ0RhaGxpYScsIHg6IDM5OC43NTM1MDk4ODM1MTY1MywgeTogNzcuMDk3MDA3NTE1MjcxMTksIGdyb3VwOiAzIH0sXHJcbiAgICAgICAgeyBpZDogJ1plcGhpbmUnLCB4OiAzNDkuMDQ5NTkxNDYwMTM3NiwgeTogODguODA4ODg2MTMzNzI3MTMsIGdyb3VwOiAzIH0sXHJcbiAgICAgICAgeyBpZDogJ0ZhbnRpbmUnLCB4OiAzOTguMDE0MTE0Mzg3MDI0NzMsIHk6IDE3My43NjQ0NDE5Njk0NTk3NywgZ3JvdXA6IDMgfSxcclxuICAgICAgICB7IGlkOiAnTW1lLlRoZW5hcmRpZXInLCB4OiA0NzEuMjUxNjUzMzM4NjcyNSwgeTogMjYyLjIxODcwMTY2NjY0NSwgZ3JvdXA6IDQgfSxcclxuICAgICAgICB7IGlkOiAnVGhlbmFyZGllcicsIHg6IDUwNC44MTY3MjA4NTYwMzA2NiwgeTogMjgzLjA0NjM4OTAwNDgxNzIzLCBncm91cDogNCB9LFxyXG4gICAgICAgIHsgaWQ6ICdDb3NldHRlJywgeDogNDcyLjMzNDY5NDE0ODcxOTIsIHk6IDIyOC42ODc3OTQ0MzMwMzQ3OCwgZ3JvdXA6IDUgfSxcclxuICAgICAgICB7IGlkOiAnSmF2ZXJ0JywgeDogNDYwLjA1MjU3Njg5MzMyODM2LCB5OiAyOTUuNTU3ODE1NDI2ODkwNCwgZ3JvdXA6IDQgfSxcclxuICAgICAgICB7IGlkOiAnRmF1Y2hlbGV2ZW50JywgeDogMzg1LjQzOTM1NzY0NTg5OTg2LCB5OiAzMDIuMTI4MjQ1ODg2MjI4NTcsIGdyb3VwOiAwIH0sXHJcbiAgICAgICAgeyBpZDogJ0JhbWF0YWJvaXMnLCB4OiAzOTMuMTkwNDE1OTAzODM1OTcsIHk6IDM0NS40OTcxNjY3NjkwODE3LCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdQZXJwZXR1ZScsIHg6IDM2Ny41MzgzMzEzMjg5Mzk3NiwgeTogMTk0LjU1NTY0ODIzMDYyNzEsIGdyb3VwOiAzIH0sXHJcbiAgICAgICAgeyBpZDogJ1NpbXBsaWNlJywgeDogNDAxLjM2MjIyNTIzNTQ2NTUsIHk6IDI0Mi45OTgyODQ3OTk0NTc2LCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdTY2F1ZmZsYWlyZScsIHg6IDQxNC42NzA3Mjc5OTYyNzU3MywgeTogMzQ0LjA1NDc3MjA5NDU3MzYsIGdyb3VwOiAyIH0sXHJcbiAgICAgICAgeyBpZDogJ1dvbWFuMScsIHg6IDQyMS40MTY3NDE0MzkyNDI2LCB5OiAyOTMuMzExMjAyMTkxMjkzOTQsIGdyb3VwOiAyIH0sXHJcbiAgICAgICAgeyBpZDogJ0p1ZGdlJywgeDogNDIwLjA0MzkyMDA3ODQxMzM1LCB5OiA0MDEuMDMyMzM2MDkxNTI3NDQsIGdyb3VwOiAyIH0sXHJcbiAgICAgICAgeyBpZDogJ0NoYW1wbWF0aGlldScsIHg6IDM3Ny43OTUyNDI1NDYyMTgzMywgeTogMzgzLjgxMDU3ODcxMTUxMDIsIGdyb3VwOiAyIH0sXHJcbiAgICAgICAgeyBpZDogJ0JyZXZldCcsIHg6IDQwMS45NTI5ODQ0NDY5OTkyLCB5OiAzODguODY4NDc4Mjk4NzQxMSwgZ3JvdXA6IDIgfSxcclxuICAgICAgICB7IGlkOiAnQ2hlbmlsZGlldScsIHg6IDQwMC42Njg1NzA3MTMzNTM4LCB5OiA0MTMuNDk0MTc3OTA1MjM0NjYsIGdyb3VwOiAyIH0sXHJcbiAgICAgICAgeyBpZDogJ0NvY2hlcGFpbGxlJywgeDogMzc5LjA0OTY5NzA0NDYyMzU0LCB5OiA0MDQuMjY5NzQwNTkyMzMxNjMsIGdyb3VwOiAyIH0sXHJcbiAgICAgICAgeyBpZDogJ1BvbnRtZXJjeScsIHg6IDU1My4xMTM3NDAxNzUwMTk4LCB5OiAyNDQuOTI4MzAwMjczNjA3NjUsIGdyb3VwOiA0IH0sXHJcbiAgICAgICAgeyBpZDogJ0JvdWxhdHJ1ZWxsZScsIHg6IDQ5MC4xNTcxMDg2MDg2OTMyLCB5OiAyNDkuMjEwMTkyMzgzNTgwMywgZ3JvdXA6IDYgfSxcclxuICAgICAgICB7IGlkOiAnRXBvbmluZScsIHg6IDU0OS43NTg0MjY3NTcxODkyLCB5OiAzMDIuOTAzMTA2NTIyODQzMSwgZ3JvdXA6IDQgfSxcclxuICAgICAgICB7IGlkOiAnQW56ZWxtYScsIHg6IDUxNS4zODA3Mzk5Mzk1MTM0LCB5OiAyNTcuMDE3OTY4ODk4MzkxMSwgZ3JvdXA6IDQgfSxcclxuICAgICAgICB7IGlkOiAnV29tYW4yJywgeDogNDMzLjY2MDg2NjUzNDA1MTQsIHk6IDI2NS44MTc0NjczODg2NjM0LCBncm91cDogNSB9LFxyXG4gICAgICAgIHsgaWQ6ICdNb3RoZXJJbm5vY2VudCcsIHg6IDQwMy4wMjUzNjI1NzQxNjUyMywgeTogMjg5LjAzMzEyMjAwMTIxMzI2LCBncm91cDogMCB9LFxyXG4gICAgICAgIHsgaWQ6ICdHcmliaWVyJywgeDogMzQxLjgwOTczMjI3NDU2Nzc1LCB5OiAyOTQuMjEyMzk2MTQ4MDIzLCBncm91cDogMCB9LFxyXG4gICAgICAgIHsgaWQ6ICdKb25kcmV0dGUnLCB4OiA1NjUuMTk2NTMwMzQyMjE4NiwgeTogNDcwLjY1OTUwMzQ5Mzc1ODU2LCBncm91cDogNyB9LFxyXG4gICAgICAgIHsgaWQ6ICdNbWUuQnVyZ29uJywgeDogNTY5LjE4OTYyNjkyNDIxMDEsIHk6IDQyNi42NjE4NTA1MzgyNDU2MywgZ3JvdXA6IDcgfSxcclxuICAgICAgICB7IGlkOiAnR2F2cm9jaGUnLCB4OiA1NzIuMTYxOTM5MzkzNjgyNiwgeTogMzY0LjIyNjA2NzY2NDk3NTYzLCBncm91cDogOCB9LFxyXG4gICAgICAgIHsgaWQ6ICdHaWxsZW5vcm1hbmQnLCB4OiA1MjQuNTkxNDUwNTIwODAwNSwgeTogMjU3LjQwMTIyMTQ4MjgzMzYsIGdyb3VwOiA1IH0sXHJcbiAgICAgICAgeyBpZDogJ01hZ25vbicsIHg6IDQ5Mi41NDgzOTMyMDIzNDEsIHk6IDIyMi41OTY2MzUxMzI4ODg1LCBncm91cDogNSB9LFxyXG4gICAgICAgIHsgaWQ6ICdNbGxlLkdpbGxlbm9ybWFuZCcsIHg6IDUxNC4zNjkyNjU1MDIzNjQ0LCB5OiAyMjkuMDk2NzAwNjIzODkyODEsIGdyb3VwOiA1IH0sXHJcbiAgICAgICAgeyBpZDogJ01tZS5Qb250bWVyY3knLCB4OiA1NDkuMzI1MDUwODE3MTQ3NCwgeTogMTk2LjE0MDU2ODMzMDg0OTM2LCBncm91cDogNSB9LFxyXG4gICAgICAgIHsgaWQ6ICdNbGxlLlZhdWJvaXMnLCB4OiA1MTcuODU5MzU3MjM5NDA3MSwgeTogMTg2LjI0ODgzMDkxMTE1NjUsIGdyb3VwOiA1IH0sXHJcbiAgICAgICAgeyBpZDogJ0x0LkdpbGxlbm9ybWFuZCcsIHg6IDU0My4yNzQ5NjExMzk0NTUsIHk6IDIyMy42ODE4NDI4NTE4MDk3NiwgZ3JvdXA6IDUgfSxcclxuICAgICAgICB7IGlkOiAnTWFyaXVzJywgeDogNTc0LjI1NzY2OTkwNTYxMzksIHk6IDI4My44NTIxMTcwODMxMDMzNCwgZ3JvdXA6IDggfSxcclxuICAgICAgICB7IGlkOiAnQmFyb25lc3NUJywgeDogNTczLjcxNDA5MDk2NTA2MjUsIHk6IDI0NS41OTMxMTkwOTI0NTgxOCwgZ3JvdXA6IDUgfSxcclxuICAgICAgICB7IGlkOiAnTWFiZXVmJywgeDogNjI4LjU0MzI1MzI0ODYxOTEsIHk6IDMxNC4yMjA3ODQwODYyNzE2NCwgZ3JvdXA6IDggfSxcclxuICAgICAgICB7IGlkOiAnRW5qb2xyYXMnLCB4OiA1ODguMjM5NTQ5ODA5MzYyNiwgeTogMzQyLjA1OTQ0Njk5MjMyNzksIGdyb3VwOiA4IH0sXHJcbiAgICAgICAgeyBpZDogJ0NvbWJlZmVycmUnLCB4OiA2MzcuNzM3MDY2NDYxNDYzNywgeTogMzUxLjY5MjM1NzYyNzg4Mzk1LCBncm91cDogOCB9LFxyXG4gICAgICAgIHsgaWQ6ICdQcm91dmFpcmUnLCB4OiA2NTAuODgzMzUyMjg2OTkwMywgeTogMzg2LjgzOTE4MTAzNTA5OTE2LCBncm91cDogOCB9LFxyXG4gICAgICAgIHsgaWQ6ICdGZXVpbGx5JywgeDogNjI2Ljg1NTY2MDY0MzgxMDksIHk6IDM2NS45MDg0MTY0NTkzMTQxLCBncm91cDogOCB9LFxyXG4gICAgICAgIHsgaWQ6ICdDb3VyZmV5cmFjJywgeDogNjI4LjM0NDg5ODk5NzUwMTMsIHk6IDMzNi43NjY2NDU0MTE5MDIyLCBncm91cDogOCB9LFxyXG4gICAgICAgIHsgaWQ6ICdCYWhvcmVsJywgeDogNjU2Ljc3MTc3NzI3NjQ5ODUsIHk6IDM2Mi41ODg1ODgyNTA5MTg5LCBncm91cDogOCB9LFxyXG4gICAgICAgIHsgaWQ6ICdCb3NzdWV0JywgeDogNTk5LjAxODU3NjU3NDMxMDcsIHk6IDM2My44Mjg2NzIzNDA3MDUzLCBncm91cDogOCB9LFxyXG4gICAgICAgIHsgaWQ6ICdKb2x5JywgeDogNjU2LjYxODI5MjM3MzU0MDgsIHk6IDM0My4yMzc1NzMzNTU5MTY1LCBncm91cDogOCB9LFxyXG4gICAgICAgIHsgaWQ6ICdHcmFudGFpcmUnLCB4OiA2MzguNDM3NTg1NTMxNDk4OCwgeTogNDAyLjQzODcyNTAzNzg5OTUsIGdyb3VwOiA4IH0sXHJcbiAgICAgICAgeyBpZDogJ01vdGhlclBsdXRhcmNoJywgeDogNjY0LjU1NjcyMzg2MTg4MywgeTogMjk4LjAzMzY5NjQ1MjY3ODYsIGdyb3VwOiA5IH0sXHJcbiAgICAgICAgeyBpZDogJ0d1ZXVsZW1lcicsIHg6IDUwOC4xNjQ1MDUyNTgxNzgwNSwgeTogMzMwLjQ1MDI5MDc0NDQzNjcsIGdyb3VwOiA0IH0sXHJcbiAgICAgICAgeyBpZDogJ0JhYmV0JywgeDogNDkyLjU2MDA1Mjc5ODgyMDk1LCB5OiAzMjUuOTgzNDA5Mjg0ODQyNywgZ3JvdXA6IDQgfSxcclxuICAgICAgICB7IGlkOiAnQ2xhcXVlc291cycsIHg6IDUxMC45Mzg1NTUwNjI1MDA3NywgeTogMzA5LjI4NjkzODA2OTczMjgsIGdyb3VwOiA0IH0sXHJcbiAgICAgICAgeyBpZDogJ01vbnRwYXJuYXNzZScsIHg6IDUwMi43MTkwODk0MTczNTU3LCB5OiAzNTAuOTI3NTE4MzEzMzQzOCwgZ3JvdXA6IDQgfSxcclxuICAgICAgICB7IGlkOiAnVG91c3NhaW50JywgeDogNDQ1LjEyNTQ4MDIwNTY4MDcsIHk6IDI2Ni40NjI0MjY2NTAyMjAwNCwgZ3JvdXA6IDUgfSxcclxuICAgICAgICB7IGlkOiAnQ2hpbGQxJywgeDogNTg4LjAzNTE1NTIzODY5NjEsIHk6IDQxMC4yMTk1NTU1OTYxOTk2LCBncm91cDogMTAgfSxcclxuICAgICAgICB7IGlkOiAnQ2hpbGQyJywgeDogNTU5LjI3Nzc4MTQ3ODI3MDUsIHk6IDQwOC4zNTMzMTg0ODkzNTY5LCBncm91cDogMTAgfSxcclxuICAgICAgICB7IGlkOiAnQnJ1am9uJywgeDogNTM3LjE3ODczODM5MDQ2NTYsIHk6IDMzNy44NjkyMjc3NTkxNzk0NywgZ3JvdXA6IDQgfSxcclxuICAgICAgICB7IGlkOiAnTW1lLkh1Y2hlbG91cCcsIHg6IDYyNi4zNzc1ODUwNDY2MTY0LCB5OiAzODQuMzUyMDIwNjY4OTQ1MTYsIGdyb3VwOiA4IH1cclxuICAgIF0sXHJcblxyXG4gICAgbGlua3M6IFtcclxuICAgICAgICB7IHNvdXJjZTogJ05hcG9sZW9uJywgdGFyZ2V0OiAnTXlyaWVsJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01sbGUuQmFwdGlzdGluZScsIHRhcmdldDogJ015cmllbCcsIHZhbHVlOiA4IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuTWFnbG9pcmUnLCB0YXJnZXQ6ICdNeXJpZWwnLCB2YWx1ZTogMTAgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5NYWdsb2lyZScsIHRhcmdldDogJ01sbGUuQmFwdGlzdGluZScsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3VudGVzc2RlTG8nLCB0YXJnZXQ6ICdNeXJpZWwnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR2Vib3JhbmQnLCB0YXJnZXQ6ICdNeXJpZWwnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hhbXB0ZXJjaWVyJywgdGFyZ2V0OiAnTXlyaWVsJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NyYXZhdHRlJywgdGFyZ2V0OiAnTXlyaWVsJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvdW50JywgdGFyZ2V0OiAnTXlyaWVsJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ09sZE1hbicsIHRhcmdldDogJ015cmllbCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdWYWxqZWFuJywgdGFyZ2V0OiAnTGFiYXJyZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdWYWxqZWFuJywgdGFyZ2V0OiAnTW1lLk1hZ2xvaXJlJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1ZhbGplYW4nLCB0YXJnZXQ6ICdNbGxlLkJhcHRpc3RpbmUnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnVmFsamVhbicsIHRhcmdldDogJ015cmllbCcsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJndWVyaXRlJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuZGVSJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdJc2FiZWF1JywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHZXJ2YWlzJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdMaXN0b2xpZXInLCB0YXJnZXQ6ICdUaG9sb215ZXMnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmFtZXVpbCcsIHRhcmdldDogJ1Rob2xvbXllcycsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYW1ldWlsJywgdGFyZ2V0OiAnTGlzdG9saWVyJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JsYWNoZXZpbGxlJywgdGFyZ2V0OiAnVGhvbG9teWVzJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JsYWNoZXZpbGxlJywgdGFyZ2V0OiAnTGlzdG9saWVyJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JsYWNoZXZpbGxlJywgdGFyZ2V0OiAnRmFtZXVpbCcsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYXZvdXJpdGUnLCB0YXJnZXQ6ICdUaG9sb215ZXMnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmF2b3VyaXRlJywgdGFyZ2V0OiAnTGlzdG9saWVyJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Zhdm91cml0ZScsIHRhcmdldDogJ0ZhbWV1aWwnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmF2b3VyaXRlJywgdGFyZ2V0OiAnQmxhY2hldmlsbGUnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRGFobGlhJywgdGFyZ2V0OiAnVGhvbG9teWVzJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0RhaGxpYScsIHRhcmdldDogJ0xpc3RvbGllcicsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdEYWhsaWEnLCB0YXJnZXQ6ICdGYW1ldWlsJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0RhaGxpYScsIHRhcmdldDogJ0JsYWNoZXZpbGxlJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0RhaGxpYScsIHRhcmdldDogJ0Zhdm91cml0ZScsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdaZXBoaW5lJywgdGFyZ2V0OiAnVGhvbG9teWVzJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1plcGhpbmUnLCB0YXJnZXQ6ICdMaXN0b2xpZXInLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnWmVwaGluZScsIHRhcmdldDogJ0ZhbWV1aWwnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnWmVwaGluZScsIHRhcmdldDogJ0JsYWNoZXZpbGxlJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1plcGhpbmUnLCB0YXJnZXQ6ICdGYXZvdXJpdGUnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnWmVwaGluZScsIHRhcmdldDogJ0RhaGxpYScsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYW50aW5lJywgdGFyZ2V0OiAnVGhvbG9teWVzJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhbnRpbmUnLCB0YXJnZXQ6ICdMaXN0b2xpZXInLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmFudGluZScsIHRhcmdldDogJ0ZhbWV1aWwnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmFudGluZScsIHRhcmdldDogJ0JsYWNoZXZpbGxlJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhbnRpbmUnLCB0YXJnZXQ6ICdGYXZvdXJpdGUnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmFudGluZScsIHRhcmdldDogJ0RhaGxpYScsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYW50aW5lJywgdGFyZ2V0OiAnWmVwaGluZScsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYW50aW5lJywgdGFyZ2V0OiAnTWFyZ3Vlcml0ZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYW50aW5lJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiA5IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuVGhlbmFyZGllcicsIHRhcmdldDogJ0ZhbnRpbmUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLlRoZW5hcmRpZXInLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1RoZW5hcmRpZXInLCB0YXJnZXQ6ICdNbWUuVGhlbmFyZGllcicsIHZhbHVlOiAxMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnVGhlbmFyZGllcicsIHRhcmdldDogJ0ZhbnRpbmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnVGhlbmFyZGllcicsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMTIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Nvc2V0dGUnLCB0YXJnZXQ6ICdNbWUuVGhlbmFyZGllcicsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3NldHRlJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAzMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29zZXR0ZScsIHRhcmdldDogJ1Rob2xvbXllcycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3NldHRlJywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKYXZlcnQnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDE3IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKYXZlcnQnLCB0YXJnZXQ6ICdGYW50aW5lJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0phdmVydCcsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSmF2ZXJ0JywgdGFyZ2V0OiAnTW1lLlRoZW5hcmRpZXInLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSmF2ZXJ0JywgdGFyZ2V0OiAnQ29zZXR0ZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYXVjaGVsZXZlbnQnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDggfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhdWNoZWxldmVudCcsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYW1hdGFib2lzJywgdGFyZ2V0OiAnRmFudGluZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYW1hdGFib2lzJywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhbWF0YWJvaXMnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1BlcnBldHVlJywgdGFyZ2V0OiAnRmFudGluZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdTaW1wbGljZScsIHRhcmdldDogJ1BlcnBldHVlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1NpbXBsaWNlJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdTaW1wbGljZScsIHRhcmdldDogJ0ZhbnRpbmUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnU2ltcGxpY2UnLCB0YXJnZXQ6ICdKYXZlcnQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnU2NhdWZmbGFpcmUnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1dvbWFuMScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnV29tYW4xJywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0p1ZGdlJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKdWRnZScsIHRhcmdldDogJ0JhbWF0YWJvaXMnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hhbXBtYXRoaWV1JywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDaGFtcG1hdGhpZXUnLCB0YXJnZXQ6ICdKdWRnZScsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDaGFtcG1hdGhpZXUnLCB0YXJnZXQ6ICdCYW1hdGFib2lzJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JyZXZldCcsIHRhcmdldDogJ0p1ZGdlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JyZXZldCcsIHRhcmdldDogJ0NoYW1wbWF0aGlldScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCcmV2ZXQnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JyZXZldCcsIHRhcmdldDogJ0JhbWF0YWJvaXMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hlbmlsZGlldScsIHRhcmdldDogJ0p1ZGdlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NoZW5pbGRpZXUnLCB0YXJnZXQ6ICdDaGFtcG1hdGhpZXUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hlbmlsZGlldScsIHRhcmdldDogJ0JyZXZldCcsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDaGVuaWxkaWV1JywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDaGVuaWxkaWV1JywgdGFyZ2V0OiAnQmFtYXRhYm9pcycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb2NoZXBhaWxsZScsIHRhcmdldDogJ0p1ZGdlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvY2hlcGFpbGxlJywgdGFyZ2V0OiAnQ2hhbXBtYXRoaWV1JywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvY2hlcGFpbGxlJywgdGFyZ2V0OiAnQnJldmV0JywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvY2hlcGFpbGxlJywgdGFyZ2V0OiAnQ2hlbmlsZGlldScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb2NoZXBhaWxsZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29jaGVwYWlsbGUnLCB0YXJnZXQ6ICdCYW1hdGFib2lzJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1BvbnRtZXJjeScsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQm91bGF0cnVlbGxlJywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdFcG9uaW5lJywgdGFyZ2V0OiAnTW1lLlRoZW5hcmRpZXInLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRXBvbmluZScsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQW56ZWxtYScsIHRhcmdldDogJ0Vwb25pbmUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQW56ZWxtYScsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQW56ZWxtYScsIHRhcmdldDogJ01tZS5UaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1dvbWFuMicsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnV29tYW4yJywgdGFyZ2V0OiAnQ29zZXR0ZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdXb21hbjInLCB0YXJnZXQ6ICdKYXZlcnQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW90aGVySW5ub2NlbnQnLCB0YXJnZXQ6ICdGYXVjaGVsZXZlbnQnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW90aGVySW5ub2NlbnQnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dyaWJpZXInLCB0YXJnZXQ6ICdGYXVjaGVsZXZlbnQnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLkJ1cmdvbicsIHRhcmdldDogJ0pvbmRyZXR0ZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHYXZyb2NoZScsIHRhcmdldDogJ01tZS5CdXJnb24nLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR2F2cm9jaGUnLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dhdnJvY2hlJywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dhdnJvY2hlJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHaWxsZW5vcm1hbmQnLCB0YXJnZXQ6ICdDb3NldHRlJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dpbGxlbm9ybWFuZCcsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFnbm9uJywgdGFyZ2V0OiAnR2lsbGVub3JtYW5kJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hZ25vbicsIHRhcmdldDogJ01tZS5UaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01sbGUuR2lsbGVub3JtYW5kJywgdGFyZ2V0OiAnR2lsbGVub3JtYW5kJywgdmFsdWU6IDkgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01sbGUuR2lsbGVub3JtYW5kJywgdGFyZ2V0OiAnQ29zZXR0ZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbGxlLkdpbGxlbm9ybWFuZCcsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLlBvbnRtZXJjeScsIHRhcmdldDogJ01sbGUuR2lsbGVub3JtYW5kJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5Qb250bWVyY3knLCB0YXJnZXQ6ICdQb250bWVyY3knLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWxsZS5WYXVib2lzJywgdGFyZ2V0OiAnTWxsZS5HaWxsZW5vcm1hbmQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTHQuR2lsbGVub3JtYW5kJywgdGFyZ2V0OiAnTWxsZS5HaWxsZW5vcm1hbmQnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTHQuR2lsbGVub3JtYW5kJywgdGFyZ2V0OiAnR2lsbGVub3JtYW5kJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0x0LkdpbGxlbm9ybWFuZCcsIHRhcmdldDogJ0Nvc2V0dGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFyaXVzJywgdGFyZ2V0OiAnTWxsZS5HaWxsZW5vcm1hbmQnLCB2YWx1ZTogNiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFyaXVzJywgdGFyZ2V0OiAnR2lsbGVub3JtYW5kJywgdmFsdWU6IDEyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJpdXMnLCB0YXJnZXQ6ICdQb250bWVyY3knLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFyaXVzJywgdGFyZ2V0OiAnTHQuR2lsbGVub3JtYW5kJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ0Nvc2V0dGUnLCB2YWx1ZTogMjEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMTkgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ1Rob2xvbXllcycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJpdXMnLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ0Vwb25pbmUnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFyaXVzJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFyb25lc3NUJywgdGFyZ2V0OiAnR2lsbGVub3JtYW5kJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Jhcm9uZXNzVCcsIHRhcmdldDogJ01hcml1cycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYWJldWYnLCB0YXJnZXQ6ICdNYXJpdXMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFiZXVmJywgdGFyZ2V0OiAnRXBvbmluZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYWJldWYnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdFbmpvbHJhcycsIHRhcmdldDogJ01hcml1cycsIHZhbHVlOiA3IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdFbmpvbHJhcycsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Vuam9scmFzJywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDYgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Vuam9scmFzJywgdGFyZ2V0OiAnTWFiZXVmJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Vuam9scmFzJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb21iZWZlcnJlJywgdGFyZ2V0OiAnRW5qb2xyYXMnLCB2YWx1ZTogMTUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvbWJlZmVycmUnLCB0YXJnZXQ6ICdNYXJpdXMnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29tYmVmZXJyZScsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDYgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvbWJlZmVycmUnLCB0YXJnZXQ6ICdNYWJldWYnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnUHJvdXZhaXJlJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnUHJvdXZhaXJlJywgdGFyZ2V0OiAnRW5qb2xyYXMnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnUHJvdXZhaXJlJywgdGFyZ2V0OiAnQ29tYmVmZXJyZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGZXVpbGx5JywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmV1aWxseScsIHRhcmdldDogJ0Vuam9scmFzJywgdmFsdWU6IDYgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZldWlsbHknLCB0YXJnZXQ6ICdQcm91dmFpcmUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmV1aWxseScsIHRhcmdldDogJ0NvbWJlZmVycmUnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmV1aWxseScsIHRhcmdldDogJ01hYmV1ZicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGZXVpbGx5JywgdGFyZ2V0OiAnTWFyaXVzJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvdXJmZXlyYWMnLCB0YXJnZXQ6ICdNYXJpdXMnLCB2YWx1ZTogOSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ291cmZleXJhYycsIHRhcmdldDogJ0Vuam9scmFzJywgdmFsdWU6IDE3IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3VyZmV5cmFjJywgdGFyZ2V0OiAnQ29tYmVmZXJyZScsIHZhbHVlOiAxMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ291cmZleXJhYycsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvdXJmZXlyYWMnLCB0YXJnZXQ6ICdNYWJldWYnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ291cmZleXJhYycsIHRhcmdldDogJ0Vwb25pbmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ291cmZleXJhYycsIHRhcmdldDogJ0ZldWlsbHknLCB2YWx1ZTogNiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ291cmZleXJhYycsIHRhcmdldDogJ1Byb3V2YWlyZScsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWhvcmVsJywgdGFyZ2V0OiAnQ29tYmVmZXJyZScsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWhvcmVsJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFob3JlbCcsIHRhcmdldDogJ0NvdXJmZXlyYWMnLCB2YWx1ZTogNiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFob3JlbCcsIHRhcmdldDogJ01hYmV1ZicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWhvcmVsJywgdGFyZ2V0OiAnRW5qb2xyYXMnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFob3JlbCcsIHRhcmdldDogJ0ZldWlsbHknLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFob3JlbCcsIHRhcmdldDogJ1Byb3V2YWlyZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWhvcmVsJywgdGFyZ2V0OiAnTWFyaXVzJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Jvc3N1ZXQnLCB0YXJnZXQ6ICdNYXJpdXMnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQm9zc3VldCcsIHRhcmdldDogJ0NvdXJmZXlyYWMnLCB2YWx1ZTogMTIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Jvc3N1ZXQnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCb3NzdWV0JywgdGFyZ2V0OiAnQmFob3JlbCcsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCb3NzdWV0JywgdGFyZ2V0OiAnRW5qb2xyYXMnLCB2YWx1ZTogMTAgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Jvc3N1ZXQnLCB0YXJnZXQ6ICdGZXVpbGx5JywgdmFsdWU6IDYgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Jvc3N1ZXQnLCB0YXJnZXQ6ICdQcm91dmFpcmUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQm9zc3VldCcsIHRhcmdldDogJ0NvbWJlZmVycmUnLCB2YWx1ZTogOSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQm9zc3VldCcsIHRhcmdldDogJ01hYmV1ZicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCb3NzdWV0JywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKb2x5JywgdGFyZ2V0OiAnQmFob3JlbCcsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKb2x5JywgdGFyZ2V0OiAnQm9zc3VldCcsIHZhbHVlOiA3IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKb2x5JywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSm9seScsIHRhcmdldDogJ0NvdXJmZXlyYWMnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSm9seScsIHRhcmdldDogJ0Vuam9scmFzJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0pvbHknLCB0YXJnZXQ6ICdGZXVpbGx5JywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0pvbHknLCB0YXJnZXQ6ICdQcm91dmFpcmUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSm9seScsIHRhcmdldDogJ0NvbWJlZmVycmUnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSm9seScsIHRhcmdldDogJ01hYmV1ZicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKb2x5JywgdGFyZ2V0OiAnTWFyaXVzJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dyYW50YWlyZScsIHRhcmdldDogJ0Jvc3N1ZXQnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3JhbnRhaXJlJywgdGFyZ2V0OiAnRW5qb2xyYXMnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3JhbnRhaXJlJywgdGFyZ2V0OiAnQ29tYmVmZXJyZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHcmFudGFpcmUnLCB0YXJnZXQ6ICdDb3VyZmV5cmFjJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dyYW50YWlyZScsIHRhcmdldDogJ0pvbHknLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3JhbnRhaXJlJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3JhbnRhaXJlJywgdGFyZ2V0OiAnQmFob3JlbCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHcmFudGFpcmUnLCB0YXJnZXQ6ICdGZXVpbGx5JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dyYW50YWlyZScsIHRhcmdldDogJ1Byb3V2YWlyZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNb3RoZXJQbHV0YXJjaCcsIHRhcmdldDogJ01hYmV1ZicsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHdWV1bGVtZXInLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0d1ZXVsZW1lcicsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3VldWxlbWVyJywgdGFyZ2V0OiAnTW1lLlRoZW5hcmRpZXInLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3VldWxlbWVyJywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0d1ZXVsZW1lcicsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0d1ZXVsZW1lcicsIHRhcmdldDogJ0Vwb25pbmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFiZXQnLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDYgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhYmV0JywgdGFyZ2V0OiAnR3VldWxlbWVyJywgdmFsdWU6IDYgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhYmV0JywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWJldCcsIHRhcmdldDogJ01tZS5UaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhYmV0JywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhYmV0JywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFiZXQnLCB0YXJnZXQ6ICdFcG9uaW5lJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NsYXF1ZXNvdXMnLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NsYXF1ZXNvdXMnLCB0YXJnZXQ6ICdCYWJldCcsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDbGFxdWVzb3VzJywgdGFyZ2V0OiAnR3VldWxlbWVyJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NsYXF1ZXNvdXMnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NsYXF1ZXNvdXMnLCB0YXJnZXQ6ICdNbWUuVGhlbmFyZGllcicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDbGFxdWVzb3VzJywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NsYXF1ZXNvdXMnLCB0YXJnZXQ6ICdFcG9uaW5lJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NsYXF1ZXNvdXMnLCB0YXJnZXQ6ICdFbmpvbHJhcycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNb250cGFybmFzc2UnLCB0YXJnZXQ6ICdKYXZlcnQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW9udHBhcm5hc3NlJywgdGFyZ2V0OiAnQmFiZXQnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW9udHBhcm5hc3NlJywgdGFyZ2V0OiAnR3VldWxlbWVyJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01vbnRwYXJuYXNzZScsIHRhcmdldDogJ0NsYXF1ZXNvdXMnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW9udHBhcm5hc3NlJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNb250cGFybmFzc2UnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNb250cGFybmFzc2UnLCB0YXJnZXQ6ICdFcG9uaW5lJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01vbnRwYXJuYXNzZScsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnVG91c3NhaW50JywgdGFyZ2V0OiAnQ29zZXR0ZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdUb3Vzc2FpbnQnLCB0YXJnZXQ6ICdKYXZlcnQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnVG91c3NhaW50JywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDaGlsZDEnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDaGlsZDInLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDaGlsZDInLCB0YXJnZXQ6ICdDaGlsZDEnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQnJ1am9uJywgdGFyZ2V0OiAnQmFiZXQnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQnJ1am9uJywgdGFyZ2V0OiAnR3VldWxlbWVyJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JydWpvbicsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQnJ1am9uJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQnJ1am9uJywgdGFyZ2V0OiAnRXBvbmluZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCcnVqb24nLCB0YXJnZXQ6ICdDbGFxdWVzb3VzJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JydWpvbicsIHRhcmdldDogJ01vbnRwYXJuYXNzZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuSHVjaGVsb3VwJywgdGFyZ2V0OiAnQm9zc3VldCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuSHVjaGVsb3VwJywgdGFyZ2V0OiAnSm9seScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuSHVjaGVsb3VwJywgdGFyZ2V0OiAnR3JhbnRhaXJlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5IdWNoZWxvdXAnLCB0YXJnZXQ6ICdCYWhvcmVsJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5IdWNoZWxvdXAnLCB0YXJnZXQ6ICdDb3VyZmV5cmFjJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5IdWNoZWxvdXAnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuSHVjaGVsb3VwJywgdGFyZ2V0OiAnRW5qb2xyYXMnLCB2YWx1ZTogMSB9XHJcbiAgICBdXHJcbn1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XHJcbiAqIEBkZXNjcmlwdGlvbiBQYXRlbnRzIGRhdGFzZXQsIGZyb20gaHR0cHM6Ly93d3cucGF0ZW50c3ZpZXcub3JnL3dlYi8jdml6L3JlbGF0aW9uc2hpcHNcclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgcGF0ZW50cyA9IHtcclxuICAgIG5vZGVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NTE2MjI3JyxcclxuICAgICAgICAgICAgbmFtZTogJ1JlY2hhcmdlYWJsZSBzcGluYWwgY29yZCBzdGltdWxhdG9yIHN5c3RlbScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM2MyxcclxuICAgICAgICAgICAgeDogLTE0Ni41MDcyMjc3MjIwNjQxNixcclxuICAgICAgICAgICAgeTogMjM3Ljc4OTg4NDg4NjQxODJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjUzNTkwOScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTeXN0ZW0gYW5kIG1ldGhvZCBmb3IgcmVjb3JkIGFuZCBwbGF5YmFjayBvZiBjb2xsYWJvcmF0aXZlIFdlYiBicm93c2luZyBzZXNzaW9uJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNDM4LFxyXG4gICAgICAgICAgICB4OiAzMDEuMDg4MDg0MDc0MDE3OCxcclxuICAgICAgICAgICAgeTogNzguMzU0NDkxOTE1ODc1NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NTQ5OTA4JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdNZXRob2RzIGFuZCBhcHBhcmF0dXMgZm9yIGludGVycHJldGluZyB1c2VyIHNlbGVjdGlvbnMgaW4gdGhlIGNvbnRleHQgb2YgYSByZWxhdGlvbiBkaXN0cmlidXRlZCBhcyBhIHNldCBvZiBvcnRob2dvbmFsaXplZCBzdWItcmVsYXRpb25zJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjY4LFxyXG4gICAgICAgICAgICB4OiAtMTMuODE0ODU2NTkwNzQxMjAyLFxyXG4gICAgICAgICAgICB5OiAtMTgzLjU1MDE2NzkzNTAyNzRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjU1MzU2MycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEZXZlbG9wbWVudCB0b29sLCBtZXRob2QsIGFuZCBzeXN0ZW0gZm9yIGNsaWVudCBzZXJ2ZXIgYXBwbGljYXRpb25zJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzUxLFxyXG4gICAgICAgICAgICB4OiAtMC41MjI0MzEyNzkwMTQyNzc3LFxyXG4gICAgICAgICAgICB5OiAtMjQ3LjE0OTU3Nzk2MjcyNzlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjU1ODMyMCcsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnSGFuZGhlbGQgcGVyc29uYWwgZGF0YSBhc3Npc3RhbnQgKFBEQSkgd2l0aCBhIG1lZGljYWwgZGV2aWNlIGFuZCBtZXRob2Qgb2YgdXNpbmcgdGhlIHNhbWUnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE1MTQsXHJcbiAgICAgICAgICAgIHg6IC0yMDQuNjQwNzE4OTQ2NTQ3ODgsXHJcbiAgICAgICAgICAgIHk6IDcxLjU3MDU1Mjg0NTEyMzEyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY1NTgzNTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ2xvc2VkIGxvb3Agc3lzdGVtIGZvciBjb250cm9sbGluZyBpbnN1bGluIGluZnVzaW9uJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzY5LFxyXG4gICAgICAgICAgICB4OiAtMjEyLjk3ODE2MDAwMjE5Mzg3LFxyXG4gICAgICAgICAgICB5OiAxNC43MTU2NDA1MzQxNzAwOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NTYwNDYxJyxcclxuICAgICAgICAgICAgbmFtZTogJ0F1dGhvcml6ZWQgbG9jYXRpb24gcmVwb3J0aW5nIHBhZ2luZyBzeXN0ZW0nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE0NzksXHJcbiAgICAgICAgICAgIHg6IC0yNTAuNDM1NDMwNjI5MDUwOTMsXHJcbiAgICAgICAgICAgIHk6IC0xOTEuNDM3MjAwNjI0MDYwMzhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjU2MzE3NCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUaGluIGZpbG0gdHJhbnNpc3RvciBhbmQgbWF0cml4IGRpc3BsYXkgZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjg0LFxyXG4gICAgICAgICAgICB4OiAtMTIuNTg4MjQ5NTAzNjUyNDAxLFxyXG4gICAgICAgICAgICB5OiAtMy42MDY2Mzg5MjUwNzQ5NTJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjU2NTUwOScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBbmFseXRlIG1vbml0b3JpbmcgZGV2aWNlIGFuZCBtZXRob2RzIG9mIHVzZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTMzMyxcclxuICAgICAgICAgICAgeDogLTEwNS4yNTUxMTYxMjM2MjA0NSxcclxuICAgICAgICAgICAgeTogMTU3LjExNzEzMzYwNjAyNjIxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY1NzEyODInLFxyXG4gICAgICAgICAgICBuYW1lOiAnQmxvY2stYmFzZWQgY29tbXVuaWNhdGlvbiBpbiBhIGNvbW11bmljYXRpb24gc2VydmljZXMgcGF0dGVybnMgZW52aXJvbm1lbnQnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE0NjcsXHJcbiAgICAgICAgICAgIHg6IDEzOS42Njk3NDY3NDgyODEsXHJcbiAgICAgICAgICAgIHk6IDI1My4wMTQwNjUwMTQ3MTk0MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NTc0NjM1JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdBcHBsaWNhdGlvbiBpbnN0YW50aWF0aW9uIGJhc2VkIHVwb24gYXR0cmlidXRlcyBhbmQgdmFsdWVzIHN0b3JlZCBpbiBhIG1ldGEgZGF0YSByZXBvc2l0b3J5LCBpbmNsdWRpbmcgdGllcmluZyBvZiBhcHBsaWNhdGlvbiBsYXllcnMgb2JqZWN0cyBhbmQgY29tcG9uZW50cycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM2OCxcclxuICAgICAgICAgICAgeDogMTEuMDAyMDI3NjI3NzgyMTE2LFxyXG4gICAgICAgICAgICB5OiAtMjM0LjkxODA1Mjk4MzIzNThcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjU3NzcyNicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDb21wdXRlciB0ZWxlcGhvbnkgaW50ZWdyYXRpb24gaG90ZWxsaW5nIG1ldGhvZCBhbmQgc3lzdGVtJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjcwLFxyXG4gICAgICAgICAgICB4OiAtODcuMTkxNTMyNDU4NDEyNjIsXHJcbiAgICAgICAgICAgIHk6IC0xNzMuOTc2NDQ3NTU5MjkyODRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjU4NzgzNScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTaG9wcGluZyBhc3Npc3RhbmNlIHdpdGggaGFuZGhlbGQgY29tcHV0aW5nIGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTQ3MSxcclxuICAgICAgICAgICAgeDogLTI3OS4yODY1ODEzMzc4NDY1LFxyXG4gICAgICAgICAgICB5OiAxMTAuMTU4NzkxMjUwMTUwN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NjAxMDg3JyxcclxuICAgICAgICAgICAgbmFtZTogJ0luc3RhbnQgZG9jdW1lbnQgc2hhcmluZycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM5NyxcclxuICAgICAgICAgICAgeDogMjEwLjk0ODIxMzUwMTM3MTg0LFxyXG4gICAgICAgICAgICB5OiA5Mi41MzE4ODc4NjkxMTQwNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NjAyMjUyJyxcclxuICAgICAgICAgICAgbmFtZTogJ0NvbWJpbmVkIGRpc3NlY3RpbmcsIGNhdXRlcml6aW5nLCBhbmQgc3RhcGxpbmcgZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNTAzLFxyXG4gICAgICAgICAgICB4OiAxNDcuOTQ5NzcxNjUwNDMyNTgsXHJcbiAgICAgICAgICAgIHk6IDE3MC4wODg4ODg1NTYzMTMwN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NjA0MTE3JyxcclxuICAgICAgICAgICAgbmFtZTogJ01ldGhvZCBvZiBtYWludGFpbmluZyBhIG5ldHdvcmsgb2YgcGFydGlhbGx5IHJlcGxpY2F0ZWQgZGF0YWJhc2Ugc3lzdGVtJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjYxLFxyXG4gICAgICAgICAgICB4OiAtMC44ODg1NTU4MDI3NDIwMzUsXHJcbiAgICAgICAgICAgIHk6IC0yMTguMjMwNDg4MjAzMDcyMjdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjYwNDEyOCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNZXRob2QgYW5kIHN5c3RlbSBmb3IgZGlzdHJpYnV0aW5nIG9iamVjdHMgb3ZlciBhIG5ldHdvcmsnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNjEsXHJcbiAgICAgICAgICAgIHg6IC01Ni43Mzg3Mjc0MjEyMDg0MSxcclxuICAgICAgICAgICAgeTogLTI0My4zNDgzODQxMDY2NDQzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2MDY3NDQnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1Byb3ZpZGluZyBjb2xsYWJvcmF0aXZlIGluc3RhbGxhdGlvbiBtYW5hZ2VtZW50IGluIGEgbmV0d29yay1iYXNlZCBzdXBwbHkgY2hhaW4gZW52aXJvbm1lbnQnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNzEsXHJcbiAgICAgICAgICAgIHg6IDE1My45OTQ4MjUxODUwMzk3LFxyXG4gICAgICAgICAgICB5OiAyMzEuNDY1Nzk4ODgxMjAyNzJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjYwOTE1MCcsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnV2ViIGNsaWVudC1zZXJ2ZXIgc3lzdGVtIGFuZCBtZXRob2QgZm9yIGluY29tcGF0aWJsZSBwYWdlIG1hcmt1cCBhbmQgcHJlc2VudGF0aW9uIGxhbmd1YWdlcycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTMzNixcclxuICAgICAgICAgICAgeDogMTMuMTgyODY3NjA3MzIxMjU1LFxyXG4gICAgICAgICAgICB5OiAtMTg0LjgzNDI2NDMxODgxNTdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjYyMTgzNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTeXN0ZW0gYW5kIG1ldGhvZCBmb3Igdm9pY2UgdHJhbnNtaXNzaW9uIG92ZXIgbmV0d29yayBwcm90b2NvbHMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNjUsXHJcbiAgICAgICAgICAgIHg6IDg1LjA4MjI4MTQ5MzQ0MzY5LFxyXG4gICAgICAgICAgICB5OiAxMDUuNDM0NjQ1NzEyMzI4OTZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjY0MTUzMycsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnSGFuZGhlbGQgcGVyc29uYWwgZGF0YSBhc3Npc3RhbnQgKFBEQSkgd2l0aCBhIG1lZGljYWwgZGV2aWNlIGFuZCBtZXRob2Qgb2YgdXNpbmcgdGhlIHNhbWUnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE0MzEsXHJcbiAgICAgICAgICAgIHg6IC0yMTguMDk3NjYxMTgwMDEyMjQsXHJcbiAgICAgICAgICAgIHk6IDM5Ljg1NzYwMDM1Nzk3OTg5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2NDQ1MzInLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3VyZ2ljYWwgc3RhcGxpbmcgYXBwYXJhdHVzJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjY3LFxyXG4gICAgICAgICAgICB4OiAzMDQuNjYzMDkyNTMxNjI5NCxcclxuICAgICAgICAgICAgeTogLTI5LjcwOTYxMTU3MzQ5MTM5N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NjU0MDMyJyxcclxuICAgICAgICAgICAgbmFtZTogJ0luc3RhbnQgc2hhcmluZyBvZiBkb2N1bWVudHMgb24gYSByZW1vdGUgc2VydmVyJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNDEzLFxyXG4gICAgICAgICAgICB4OiAxNTkuMzAwNTAzNTUyOTYwMTUsXHJcbiAgICAgICAgICAgIHk6IDEwOC45ODM4OTU4NTYyNzAwNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NjU2MTkzJyxcclxuICAgICAgICAgICAgbmFtZTogJ0RldmljZSBmb3IgYXR0YWNobWVudCBvZiBidXR0cmVzcyBtYXRlcmlhbCB0byBhIHN1cmdpY2FsIGZhc3RlbmluZyBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNzksXHJcbiAgICAgICAgICAgIHg6IDExNi45MDkxNDE1MzE1ODU5NyxcclxuICAgICAgICAgICAgeTogLTc4Ljc2NjI2OTM2ODU4NTU3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2NjU2NDgnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3RhdGUgbW9kZWxzIGZvciBtb25pdG9yaW5nIHByb2Nlc3MnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyODgsXHJcbiAgICAgICAgICAgIHg6IC0xOS43NTE4NTI3MzkzNTM3NCxcclxuICAgICAgICAgICAgeTogLTEyNi42NTMzODkxMjI2OTkyOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NjY1NjU1JyxcclxuICAgICAgICAgICAgbmFtZTogJ0ltcGxpY2l0IHJhdGluZyBvZiByZXRyaWV2ZWQgaW5mb3JtYXRpb24gaW4gYW4gaW5mb3JtYXRpb24gc2VhcmNoIHN5c3RlbScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI5NCxcclxuICAgICAgICAgICAgeDogLTIwNS41MTAzNjEyMTk5NDY3LFxyXG4gICAgICAgICAgICB5OiAtNjIuNjE1MTc1NzcyOTIzOTc2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2ODQ0MzgnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ01ldGhvZCBvZiB1c2luZyBjYWNoZSB0byBkZXRlcm1pbmUgdGhlIHZpc2liaWxpdHkgdG8gYSByZW1vdGUgZGF0YWJhc2UgY2xpZW50IG9mIGEgcGx1cmFsaXR5IG9mIGRhdGFiYXNlIHRyYW5zYWN0aW9ucycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI2NSxcclxuICAgICAgICAgICAgeDogLTcwLjg5NjIxMTkwODA1MzI5LFxyXG4gICAgICAgICAgICB5OiAtMjExLjY1ODk4MTI2NDY5NDc1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2OTAzODcnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVG91Y2gtc2NyZWVuIGltYWdlIHNjcm9sbGluZyBzeXN0ZW0gYW5kIG1ldGhvZCcsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM2MSxcclxuICAgICAgICAgICAgeDogLTk2LjA4MzMzMzU4NjEwMTQsXHJcbiAgICAgICAgICAgIHk6IDI1Ny4xODg2NjYwNDQyMDlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjY5MzIzMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdJbmJyZWQgY29ybiBsaW5lIExIMjk1JyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNTg1LFxyXG4gICAgICAgICAgICB4OiAyMjUuMjEzNjIzOTY2MzQzMzMsXHJcbiAgICAgICAgICAgIHk6IC0xODEuNzAyMzEyMDg3MzkwMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2Njk4NjQzJyxcclxuICAgICAgICAgICAgbmFtZTogJ0V4cGFuZGluZyBwYXJhbGxlbCBqYXcgZGV2aWNlIGZvciB1c2Ugd2l0aCBhbiBlbGVjdHJvbWVjaGFuaWNhbCBkcml2ZXIgZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzU1LFxyXG4gICAgICAgICAgICB4OiAxMTYuOTMzODAwODgyMDAzMDgsXHJcbiAgICAgICAgICAgIHk6IDIyMC4yMTQxOTcwNTQzOTYwN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NzExNTY1JyxcclxuICAgICAgICAgICAgbmFtZTogJ01ldGhvZCwgYXBwYXJhdHVzLCBhbmQgc3lzdGVtIGZvciBwcmV2aWV3aW5nIHNlYXJjaCByZXN1bHRzJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzg4LFxyXG4gICAgICAgICAgICB4OiAtMzcuNTA0NDgxMjkwNzY3MzUsXHJcbiAgICAgICAgICAgIHk6IC0yNzMuNDExNjk1ODQ3OTEzNTZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjcxNjIzMycsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnRWxlY3Ryb21lY2hhbmljYWwgZHJpdmVyIGFuZCByZW1vdGUgc3VyZ2ljYWwgaW5zdHJ1bWVudCBhdHRhY2htZW50IGhhdmluZyBjb21wdXRlciBhc3Npc3RlZCBjb250cm9sIGNhcGFiaWxpdGllcycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI0NCxcclxuICAgICAgICAgICAgeDogOTkuOTg3NDQ5Mjc3NDAxMDcsXHJcbiAgICAgICAgICAgIHk6IDIxMi41OTUyNzIyOTk2MjYwNlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NzE4MzYxJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdNZXRob2QgYW5kIGFwcGFyYXR1cyBmb3IgcmVsaWFibGUgYW5kIHNjYWxhYmxlIGRpc3RyaWJ1dGlvbiBvZiBkYXRhIGZpbGVzIGluIGRpc3RyaWJ1dGVkIG5ldHdvcmtzJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzQ5LFxyXG4gICAgICAgICAgICB4OiAtMjE0LjQ3MDY0NTQyMDAxNTUsXHJcbiAgICAgICAgICAgIHk6IDE3OS43NjQ0NTM4MzMxMTU0NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NzI0Mzk5JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdNZXRob2RzIGFuZCBhcHBhcmF0dXMgZm9yIGVuYWJsaW5nIGtleWJvYXJkIGFjY2VsZXJhdG9ycyBpbiBhcHBsaWNhdGlvbnMgaW1wbGVtZW50ZWQgdmlhIGEgYnJvd3NlcicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI3MSxcclxuICAgICAgICAgICAgeDogLTMuODY1NDM3MDk4MDM2NTk3LFxyXG4gICAgICAgICAgICB5OiAtMTY4LjA0NjY1MDc1OTc3NjE2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3Mjc1MjInLFxyXG4gICAgICAgICAgICBuYW1lOiAnVHJhbnNpc3RvciBhbmQgc2VtaWNvbmR1Y3RvciBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMzMDEsXHJcbiAgICAgICAgICAgIHg6IDQ1LjQ5MzAwOTA4NjUzMzQ3NixcclxuICAgICAgICAgICAgeTogLTE4LjM5OTMzNjc2MTg2NTU1NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NzI4NzAyJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdTeXN0ZW0gYW5kIG1ldGhvZCB0byBpbXBsZW1lbnQgYW4gaW50ZWdyYXRlZCBzZWFyY2ggY2VudGVyIHN1cHBvcnRpbmcgYSBmdWxsLXRleHQgc2VhcmNoIGFuZCBxdWVyeSBvbiBhIGRhdGFiYXNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjkwLFxyXG4gICAgICAgICAgICB4OiAtNTAuNzc2NTEyNjk2NDc5NjQsXHJcbiAgICAgICAgICAgIHk6IC0yNjUuNjQzOTQxNjY0MjYxOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NzI4OTYwJyxcclxuICAgICAgICAgICAgbmFtZTogJ1RlY2huaXF1ZXMgZm9yIG1hbmFnaW5nIG11bHRpcGxlIHRocmVhZHMgaW4gYSBicm93c2VyIGVudmlyb25tZW50JyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjg3LFxyXG4gICAgICAgICAgICB4OiAtMzEuODYwOTgyNjAwMjcyNzQsXHJcbiAgICAgICAgICAgIHk6IC0xNzcuMDk2Mjc5MjUxNjYwNzVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjczMjA5NScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNZXRob2QgYW5kIGFwcGFyYXR1cyBmb3IgbWFwcGluZyBiZXR3ZWVuIFhNTCBhbmQgcmVsYXRpb25hbCByZXByZXNlbnRhdGlvbnMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzMTgsXHJcbiAgICAgICAgICAgIHg6IC00NS4xNzQzMDgyNjg3NzU0NCxcclxuICAgICAgICAgICAgeTogLTE1Mi4yMzkzODM1NTI5ODgwNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NzMyMTAwJyxcclxuICAgICAgICAgICAgbmFtZTogJ0RhdGFiYXNlIGFjY2VzcyBtZXRob2QgYW5kIHN5c3RlbSBmb3IgdXNlciByb2xlIGRlZmluZWQgYWNjZXNzJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzQ3LFxyXG4gICAgICAgICAgICB4OiAtNTkuMjEwMTM2ODA2MjkyNjc0LFxyXG4gICAgICAgICAgICB5OiAtMTc0LjgzODc3OTkwODQ5NTcyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3MzIxMTEnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ01ldGhvZCwgYXBwYXJhdHVzLCBzeXN0ZW0sIGFuZCBwcm9ncmFtIHByb2R1Y3QgZm9yIGF0dGFjaGluZyBmaWxlcyBhbmQgb3RoZXIgb2JqZWN0cyB0byBhIHBhcnRpYWxseSByZXBsaWNhdGVkIGRhdGFiYXNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjk0LFxyXG4gICAgICAgICAgICB4OiAtOTAuNzM5NzA1MDQ3OTQ1MSxcclxuICAgICAgICAgICAgeTogLTI0NC43MTk5MDMyODc3NDMxNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NzU0NjgxJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdQYXJ0aWFsbHkgcmVwbGljYXRlZCBkaXN0cmlidXRlZCBkYXRhYmFzZSB3aXRoIG11bHRpcGxlIGxldmVscyBvZiByZW1vdGUgY2xpZW50cycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI2OSxcclxuICAgICAgICAgICAgeDogLTc5LjU4MDgzODcwMzEyNjU1LFxyXG4gICAgICAgICAgICB5OiAtMjI4LjE3MjQwNTQxNzM4NDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjc2MzM1MScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNZXRob2QsIGFwcGFyYXR1cywgYW5kIHN5c3RlbSBmb3IgYXR0YWNoaW5nIHNlYXJjaCByZXN1bHRzJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNDg3LFxyXG4gICAgICAgICAgICB4OiAtMjUuMjQzNDc0NzMzNDkyNzQzLFxyXG4gICAgICAgICAgICB5OiAtMjYzLjI1NzQwNzk0MDIxMDY3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3NjM1MDEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUmVtb3RlIGRvY3VtZW50IHNlcnZpbmcnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzMTksXHJcbiAgICAgICAgICAgIHg6IDE1OC4zMjUzODM3NjIwOTQyLFxyXG4gICAgICAgICAgICB5OiA5My40OTU0NjIzMTUxNjkxOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NzY4OTA0JyxcclxuICAgICAgICAgICAgbmFtZTogJ0RhdGEgY29tbXVuaWNhdGlvbiBtZXRob2QgdXNpbmcgbW9iaWxlIHRlcm1pbmFsJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjU2LFxyXG4gICAgICAgICAgICB4OiAtMzA3Ljk3NjA2MTU4MTMzNDE0LFxyXG4gICAgICAgICAgICB5OiAxOC43Njk3NTY2Nzk3OTczOTZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjc4MjM4MycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTeXN0ZW0gYW5kIG1ldGhvZCB0byBpbXBsZW1lbnQgYSBwZXJzaXN0ZW50IGFuZCBkaXNtaXNzaWJsZSBzZWFyY2ggY2VudGVyIGZyYW1lJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjgyLFxyXG4gICAgICAgICAgICB4OiAtMTIuOTc2MTc3NTU3ODM1ODUyLFxyXG4gICAgICAgICAgICB5OiAtMjcyLjkxOTQ0MDQwNzM3OTFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjc4MzUyNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSb2JvdGljIHN1cmdpY2FsIHRvb2wgd2l0aCB1bHRyYXNvdW5kIGNhdXRlcml6aW5nIGFuZCBjdXR0aW5nIGluc3RydW1lbnQnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE1MDUsXHJcbiAgICAgICAgICAgIHg6IDQzLjM4MjMxMDk4Njk0MDY2LFxyXG4gICAgICAgICAgICB5OiAyNzkuMDgyMTc4MDExNDc3MTRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjc4NjM4MicsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnU3VyZ2ljYWwgc3RhcGxpbmcgaW5zdHJ1bWVudCBpbmNvcnBvcmF0aW5nIGFuIGFydGljdWxhdGlvbiBqb2ludCBmb3IgYSBmaXJpbmcgYmFyIHRyYWNrJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzcxLFxyXG4gICAgICAgICAgICB4OiAxMzQuOTQwNzgxNjQ1MDI4MzUsXHJcbiAgICAgICAgICAgIHk6IC02NS4xMDA4MjM3MzU2NjM4MVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2ODA0MzMwJyxcclxuICAgICAgICAgICAgbmFtZTogJ01ldGhvZCBhbmQgc3lzdGVtIGZvciBhY2Nlc3NpbmcgQ1JNIGRhdGEgdmlhIHZvaWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzQ4LFxyXG4gICAgICAgICAgICB4OiA0MS40NDUyNTE3MjM4NDI4NjUsXHJcbiAgICAgICAgICAgIHk6IC0yMzYuOTkxNTY0ODEwOTg2NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2ODA5NjUzJyxcclxuICAgICAgICAgICAgbmFtZTogJ1RlbGVtZXRlcmVkIGNoYXJhY3RlcmlzdGljIG1vbml0b3Igc3lzdGVtIGFuZCBtZXRob2Qgb2YgdXNpbmcgdGhlIHNhbWUnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNTAsXHJcbiAgICAgICAgICAgIHg6IC0xOTIuMzY2NTk0Nzc1NjgwOCxcclxuICAgICAgICAgICAgeTogODUuMjAwMzk3MTM4NTkxNTRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjgyNjU2NScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNZXRob2QgYW5kIGFwcGFyYXR1cyBmb3Igc2VydmluZyBmaWxlcyB0byBicm93c2luZyBjbGllbnRzJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjUzLFxyXG4gICAgICAgICAgICB4OiAtMTg3LjIwMjA3ODYxMjE0MixcclxuICAgICAgICAgICAgeTogLTIwNS44MDI4MDY3MTQwOTc1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY4MjY1ODInLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWV0aG9kIGFuZCBzeXN0ZW0gZm9yIHVzaW5nIGZpbGUgc3lzdGVtcyBmb3IgY29udGVudCBtYW5hZ2VtZW50JyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjYyLFxyXG4gICAgICAgICAgICB4OiAtMTczLjM5MDcxNzEzNDM0NTkyLFxyXG4gICAgICAgICAgICB5OiAtODQuNzQ4MTA2NDUzOTEwNTJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjgyNjc0NScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTeXN0ZW0gYW5kIG1ldGhvZCBmb3Igc21hcnQgc2NyaXB0aW5nIGNhbGwgY2VudGVycyBhbmQgY29uZmlndXJhdGlvbiB0aGVyZW9mJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjkwLFxyXG4gICAgICAgICAgICB4OiAtNzYuNzgxMjY0MzMxMjEwMDUsXHJcbiAgICAgICAgICAgIHk6IC0xODkuMjIxNDgxNzUxMjUwNTRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjgyOTY1NScsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnTWV0aG9kIGFuZCBzeXN0ZW0gZm9yIHNlcnZlciBzeW5jaHJvbml6YXRpb24gd2l0aCBhIGNvbXB1dGluZyBkZXZpY2UgdmlhIGEgY29tcGFuaW9uIGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI5MixcclxuICAgICAgICAgICAgeDogNTQuMTUwNjcyMTA3MDE4NjksXHJcbiAgICAgICAgICAgIHk6IC0xOTMuNTU5NTQzMTE1NDUzNThcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjgzMDE3NCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNZWRpY2FsIGluc3RydW1lbnQnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzNDUsXHJcbiAgICAgICAgICAgIHg6IDI0MS42ODM2NTYzMDQwMDAyLFxyXG4gICAgICAgICAgICB5OiAxNzguODEwMTU1NDk0MjQ3M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2ODQyNzQ4JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdVc2FnZSBiYXNlZCBzdHJlbmd0aCBiZXR3ZWVuIHJlbGF0ZWQgaW5mb3JtYXRpb24gaW4gYW4gaW5mb3JtYXRpb24gcmV0cmlldmFsIHN5c3RlbScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI3MyxcclxuICAgICAgICAgICAgeDogLTI1NS43NjcxNDAxNzYzOTE4LFxyXG4gICAgICAgICAgICB5OiAtODkuMzA5NDE0OTAxNjAzMDlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjg0MzQwMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTdXJnaWNhbCBjbGFtcGluZywgY3V0dGluZyBhbmQgc3RhcGxpbmcgZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjc4LFxyXG4gICAgICAgICAgICB4OiA4MC42MjI2Nzg4ODMxNzUxNSxcclxuICAgICAgICAgICAgeTogMjA0LjY3MjQ5MjkyOTU3NTcyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY4NTAyNTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnSW50ZWxsaWdlbnQgZWxlY3Ryb25pYyBhcHBsaWFuY2Ugc3lzdGVtIGFuZCBtZXRob2QnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE3ODQsXHJcbiAgICAgICAgICAgIHg6IC0yNjkuMDkzOTYyNTcxNjk4MixcclxuICAgICAgICAgICAgeTogODAuNzkxNTI1NDA5MTcxMDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjg1MDg5NScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBc3NpZ25tZW50IG1hbmFnZXInLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE0MjksXHJcbiAgICAgICAgICAgIHg6IC0xMDQuNzE1MjMxNzI4OTk5NzgsXHJcbiAgICAgICAgICAgIHk6IC0yMzcuNjc0ODkwNTE0OTUzODNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjg1MDk0OScsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnU3lzdGVtIGFuZCBtZXRob2QgZm9yIGdlbmVyYXRpbmcgYSBkeW5hbWljIGludGVyZmFjZSB2aWEgYSBjb21tdW5pY2F0aW9ucyBuZXR3b3JrJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjc2LFxyXG4gICAgICAgICAgICB4OiAxNzAuODk0ODQ3ODY2NjQyMyxcclxuICAgICAgICAgICAgeTogLTE1Ny4xNjIzOTk2Mzg3Mjc5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY4NTI5MTUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSW5icmVkIGNvcm4gbGluZSBMSDI4M0J0TU9OODEwJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNTg0LFxyXG4gICAgICAgICAgICB4OiAyMTQuMjg3ODI1MjY2Njc5NyxcclxuICAgICAgICAgICAgeTogLTIyMS42NTA2NDU5MDYyNTczNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2OTA1MDU3JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdTdXJnaWNhbCBzdGFwbGluZyBpbnN0cnVtZW50IGluY29ycG9yYXRpbmcgYSBmaXJpbmcgbWVjaGFuaXNtIGhhdmluZyBhIGxpbmtlZCByYWNrIHRyYW5zbWlzc2lvbicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM5OCxcclxuICAgICAgICAgICAgeDogMjA0LjI0NDMxNDA5MTc0MyxcclxuICAgICAgICAgICAgeTogLTc4LjEwMDIzNjcyMjMyNjA3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY5NTk4NTInLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1N1cmdpY2FsIHN0YXBsaW5nIGluc3RydW1lbnQgd2l0aCBtdWx0aXN0cm9rZSBmaXJpbmcgaW5jb3Jwb3JhdGluZyBhbiBhbnRpLWJhY2t1cCBtZWNoYW5pc20nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNzksXHJcbiAgICAgICAgICAgIHg6IDIxNC40Nzc0MTE0MDIzNjU4MixcclxuICAgICAgICAgICAgeTogLTU2LjI5MTU4NzYzNjU5MTEyNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2OTY0MzYzJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdTdXJnaWNhbCBzdGFwbGluZyBpbnN0cnVtZW50IGhhdmluZyBhcnRpY3VsYXRpb24gam9pbnQgc3VwcG9ydCBwbGF0ZXMgZm9yIHN1cHBvcnRpbmcgYSBmaXJpbmcgYmFyJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzMwLFxyXG4gICAgICAgICAgICB4OiAxNzEuODkyNDcyNzA4OTgwMjgsXHJcbiAgICAgICAgICAgIHk6IC05Ny40MTAwMjQ2MjU1MDI5M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2OTc4OTIxJyxcclxuICAgICAgICAgICAgbmFtZTogJ1N1cmdpY2FsIHN0YXBsaW5nIGluc3RydW1lbnQgaW5jb3Jwb3JhdGluZyBhbiBFLWJlYW0gZmlyaW5nIG1lY2hhbmlzbScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI3MSxcclxuICAgICAgICAgICAgeDogMjIwLjk5OTgwMDM4MDQwNDQsXHJcbiAgICAgICAgICAgIHk6IC03MS40MjA3ODEzNTYzNjU0NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2OTgxNjI4JyxcclxuICAgICAgICAgICAgbmFtZTogJ1N1cmdpY2FsIGluc3RydW1lbnQgd2l0aCBhIGxhdGVyYWwtbW92aW5nIGFydGljdWxhdGlvbiBjb250cm9sJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNTg4LFxyXG4gICAgICAgICAgICB4OiAxNTUuMTIyMDk2Njc3Mzg3MjIsXHJcbiAgICAgICAgICAgIHk6IC05My42OTYyODc1MTQ2MDI5NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MDAwODE4JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdTdXJnaWNhbCBzdGFwbGluZyBpbnN0cnVtZW50IGhhdmluZyBzZXBhcmF0ZSBkaXN0aW5jdCBjbG9zaW5nIGFuZCBmaXJpbmcgc3lzdGVtcycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTQyMixcclxuICAgICAgICAgICAgeDogMjI3LjAxNzY4ODQ1Mzc5NjkyLFxyXG4gICAgICAgICAgICB5OiA3LjAyNDA1NjYxMTQ2MzA1MVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MDI1NzQzJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdFeHRlcm5hbCBpbmZ1c2lvbiBkZXZpY2Ugd2l0aCByZW1vdGUgcHJvZ3JhbW1pbmcsIGJvbHVzIGVzdGltYXRvciBhbmQvb3IgdmlicmF0aW9uIGFsYXJtIGNhcGFiaWxpdGllcycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM0OCxcclxuICAgICAgICAgICAgeDogLTEzOS4zMzQ4NzI3NTc0NDI3NSxcclxuICAgICAgICAgICAgeTogNDYuNTIwNjExMTUzMzQzOThcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzA0OTE5MCcsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnTWV0aG9kIGZvciBmb3JtaW5nIFpuTyBmaWxtLCBtZXRob2QgZm9yIGZvcm1pbmcgWm5PIHNlbWljb25kdWN0b3IgbGF5ZXIsIG1ldGhvZCBmb3IgZmFicmljYXRpbmcgc2VtaWNvbmR1Y3RvciBkZXZpY2UsIGFuZCBzZW1pY29uZHVjdG9yIGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzIzNCxcclxuICAgICAgICAgICAgeDogLTI4OS4xMDkxODgzMzYxMSxcclxuICAgICAgICAgICAgeTogLTk3Ljk2Nzc2OTM4NTQ5NTM3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzcwNTU3MzEnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1N1cmdpY2FsIHN0YXBsaW5nIGluc3RydW1lbnQgaW5jb3Jwb3JhdGluZyBhIHRhcGVyZWQgZmlyaW5nIGJhciBmb3IgaW5jcmVhc2VkIGZsZXhpYmlsaXR5IGFyb3VuZCB0aGUgYXJ0aWN1bGF0aW9uIGpvaW50JyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzI1LFxyXG4gICAgICAgICAgICB4OiAyMzAuNDk1MTgzODY0Mzk5ODgsXHJcbiAgICAgICAgICAgIHk6IC01OS42NDIyNDU2Nzg1ODI0OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MDYxMDE0JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdOYXR1cmFsLXN1cGVybGF0dGljZSBob21vbG9nb3VzIHNpbmdsZSBjcnlzdGFsIHRoaW4gZmlsbSwgbWV0aG9kIGZvciBwcmVwYXJhdGlvbiB0aGVyZW9mLCBhbmQgZGV2aWNlIHVzaW5nIHNhaWQgc2luZ2xlIGNyeXN0YWwgdGhpbiBmaWxtJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMzM5LFxyXG4gICAgICAgICAgICB4OiAtNS44MDA4ODIwNDQ5MDE0MzksXHJcbiAgICAgICAgICAgIHk6IDY4LjUyNjQxNTk1MDMxNTI1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzcwNjQzNDYnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVHJhbnNpc3RvciBhbmQgc2VtaWNvbmR1Y3RvciBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyNjgsXHJcbiAgICAgICAgICAgIHg6IC0zLjQwMDMwMzE1MTk5MTM3MTYsXHJcbiAgICAgICAgICAgIHk6IDI1Ljk4MTM1NjgzNjA0MzY4OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MTA1ODY4JyxcclxuICAgICAgICAgICAgbmFtZTogJ0hpZ2gtZWxlY3Ryb24gbW9iaWxpdHkgdHJhbnNpc3RvciB3aXRoIHppbmMgb3hpZGUnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyMzMsXHJcbiAgICAgICAgICAgIHg6IC0xNy44MzU3ODU3NDk3ODU4MTcsXHJcbiAgICAgICAgICAgIHk6IDE5OS45MTg4MzcyMDIxMDMwNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MTExNzY5JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdTdXJnaWNhbCBpbnN0cnVtZW50IGluY29ycG9yYXRpbmcgYW4gYXJ0aWN1bGF0aW9uIG1lY2hhbmlzbSBoYXZpbmcgcm90YXRpb24gYWJvdXQgdGhlIGxvbmdpdHVkaW5hbCBheGlzJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjc4LFxyXG4gICAgICAgICAgICB4OiAxNTEuMjI1Nzk4MzI1MjQwNDUsXHJcbiAgICAgICAgICAgIHk6IC0zNy4xNzA5OTA3NDc0OTAxM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MTQ3MTM4JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdTdXJnaWNhbCBzdGFwbGluZyBpbnN0cnVtZW50IGhhdmluZyBhbiBlbGVjdHJvYWN0aXZlIHBvbHltZXIgYWN0dWF0ZWQgYnV0dHJlc3MgZGVwbG95bWVudCBtZWNoYW5pc20nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE0MjgsXHJcbiAgICAgICAgICAgIHg6IDE4OS4wODYxNDMyMzg1NzUsXHJcbiAgICAgICAgICAgIHk6IC03My42OTEzMDM5MjY4MzkyNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MTU5NzUwJyxcclxuICAgICAgICAgICAgbmFtZTogJ1N1cmdpY2FsIHN0YXBsaW5nIGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI1OCxcclxuICAgICAgICAgICAgeDogLTQxLjI5OTk1MTg2NTE5NDQzLFxyXG4gICAgICAgICAgICB5OiAyOTIuODQ2MjY3NDUzNzgyMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MjExODI1JyxcclxuICAgICAgICAgICAgbmFtZTogJ0luZGl1bSBveGlkZS1iYXNlZCB0aGluIGZpbG0gdHJhbnNpc3RvcnMgYW5kIGNpcmN1aXRzJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjQ1LFxyXG4gICAgICAgICAgICB4OiAtMzEyLjM4MzkwNTcyMjE0NzcsXHJcbiAgICAgICAgICAgIHk6IC01LjYxNDU0MTU2NzEzMzAwN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MjQ2NzM0JyxcclxuICAgICAgICAgICAgbmFtZTogJ1JvdGFyeSBoeWRyYXVsaWMgcHVtcCBhY3R1YXRlZCBtdWx0aS1zdHJva2Ugc3VyZ2ljYWwgaW5zdHJ1bWVudCcsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI4OCxcclxuICAgICAgICAgICAgeDogMjAwLjQ0NTYzMzgwMDg2NTE1LFxyXG4gICAgICAgICAgICB5OiAtNjMuMTg4NjU1ODgwNzY4ODZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzI4Mjc4MicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDb21iaW5lZCBiaW5hcnkgb3hpZGUgc2VtaWNvbmR1Y3RvciBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyNzMsXHJcbiAgICAgICAgICAgIHg6IC0xMjUuODMwOTA0MTQ3Nzk4NixcclxuICAgICAgICAgICAgeTogLTMxLjI3Nzg3Nzg5MzU4MDQ4OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3Mjk3OTc3JyxcclxuICAgICAgICAgICAgbmFtZTogJ1NlbWljb25kdWN0b3IgZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMzE4LFxyXG4gICAgICAgICAgICB4OiAtMTI4LjI4Mjg4NjI5Njk2NzI2LFxyXG4gICAgICAgICAgICB5OiAtNTUuMjYxNDc1NTc4MDMzMjlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzMyMzM1NicsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnTG5DdU8oUyxTZSxUZSltb25vY3J5c3RhbGxpbmUgdGhpbiBmaWxtLCBpdHMgbWFudWZhY3R1cmluZyBtZXRob2QsIGFuZCBvcHRpY2FsIGRldmljZSBvciBlbGVjdHJvbmljIGRldmljZSB1c2luZyB0aGUgbW9ub2NyeXN0YWxsaW5lIHRoaW4gZmlsbScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzI1MSxcclxuICAgICAgICAgICAgeDogLTE4LjU5NzU1MzA1Mzk1NTc0LFxyXG4gICAgICAgICAgICB5OiA4OC45NTUzMTYxMDgzODk2OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MzQwNDExJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdTeXN0ZW0gYW5kIG1ldGhvZCBmb3IgZ2VuZXJhdGluZywgY2FwdHVyaW5nLCBhbmQgbWFuYWdpbmcgY3VzdG9tZXIgbGVhZCBpbmZvcm1hdGlvbiBvdmVyIGEgY29tcHV0ZXIgbmV0d29yaycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI4MixcclxuICAgICAgICAgICAgeDogMTcxLjE0MDgzMTU1OTE2OTgsXHJcbiAgICAgICAgICAgIHk6IC0yMDIuMjQ4ODM3MDgwNDQ4MDhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzM4MDY5NScsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnU3VyZ2ljYWwgc3RhcGxpbmcgaW5zdHJ1bWVudCBoYXZpbmcgYSBzaW5nbGUgbG9ja291dCBtZWNoYW5pc20gZm9yIHByZXZlbnRpb24gb2YgZmlyaW5nJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzg2LFxyXG4gICAgICAgICAgICB4OiAxODYuMjU4MzM1MzAxMTAxOTQsXHJcbiAgICAgICAgICAgIHk6IC0yMS42NjMyMTg3MzI0NTIwOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MzgwNjk2JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdBcnRpY3VsYXRpbmcgc3VyZ2ljYWwgc3RhcGxpbmcgaW5zdHJ1bWVudCBpbmNvcnBvcmF0aW5nIGEgdHdvLXBpZWNlIEUtYmVhbSBmaXJpbmcgbWVjaGFuaXNtJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzg4LFxyXG4gICAgICAgICAgICB4OiAyMDcuOTAyOTU5MzkwMzE3OSxcclxuICAgICAgICAgICAgeTogLTguNTMxNTMzNzM3NjIxODg1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzczODUyMjQnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1RoaW4gZmlsbSB0cmFuc2lzdG9yIGhhdmluZyBhbiBldGNoaW5nIHByb3RlY3Rpb24gZmlsbSBhbmQgbWFudWZhY3R1cmluZyBtZXRob2QgdGhlcmVvZicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzIyNCxcclxuICAgICAgICAgICAgeDogLTIwOS44MjIzMDQ4MjU1NTMzNSxcclxuICAgICAgICAgICAgeTogLTEzOC41MTAwNDA5OTAwMjkzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzc0MDI1MDYnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ01ldGhvZHMgb2YgbWFraW5nIHRoaW4gZmlsbSB0cmFuc2lzdG9ycyBjb21wcmlzaW5nIHppbmMtb3hpZGUtYmFzZWQgc2VtaWNvbmR1Y3RvciBtYXRlcmlhbHMgYW5kIHRyYW5zaXN0b3JzIG1hZGUgdGhlcmVieScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzI1OCxcclxuICAgICAgICAgICAgeDogMjA1LjAyNDc1NjY3NDQ3Nzc0LFxyXG4gICAgICAgICAgICB5OiAxODUuNjc4NzgwNjY0NDMwMzhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzQwNDUwOCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTdXJnaWNhbCBzdGFwbGluZyBhbmQgY3V0dGluZyBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE1MTcsXHJcbiAgICAgICAgICAgIHg6IDE0Mi44NTM0ODg2MTczMjM3LFxyXG4gICAgICAgICAgICB5OiAxLjMzMjU4ODUyODE3NDg1NTNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzQxMTIwOScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdGaWVsZC1lZmZlY3QgdHJhbnNpc3RvciBhbmQgbWV0aG9kIGZvciBtYW51ZmFjdHVyaW5nIHRoZSBzYW1lJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjU1LFxyXG4gICAgICAgICAgICB4OiA5OC40NjIwNzIyMTE4MzUyOCxcclxuICAgICAgICAgICAgeTogMTIzLjAzMDg0Nzc1MzcwMjc5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzc0NTMwNjUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU2Vuc29yIGFuZCBpbWFnZSBwaWNrdXAgZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjMwLFxyXG4gICAgICAgICAgICB4OiAtMC4xNjU3Mzc0Mzk0MjY3MTg1NCxcclxuICAgICAgICAgICAgeTogMTQxLjI4OTIyOTM1Mjk5MDIyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzc0NTMwODcnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1RoaW4tZmlsbSB0cmFuc2lzdG9yIGFuZCB0aGluLWZpbG0gZGlvZGUgaGF2aW5nIGFtb3JwaG91cy1veGlkZSBzZW1pY29uZHVjdG9yIGxheWVyJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjQyLFxyXG4gICAgICAgICAgICB4OiA2NC45MjYxOTkwODI3MjIyMixcclxuICAgICAgICAgICAgeTogMTgxLjg0NTkzNjY1MDkwNDQzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzc0NjI4NjInLFxyXG4gICAgICAgICAgICBuYW1lOiAnVHJhbnNpc3RvciB1c2luZyBhbiBpc292YWxlbnQgc2VtaWNvbmR1Y3RvciBveGlkZSBhcyB0aGUgYWN0aXZlIGNoYW5uZWwgbGF5ZXInLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyNDQsXHJcbiAgICAgICAgICAgIHg6IC02OS42MTY3OTE0Mjg0ODI1MSxcclxuICAgICAgICAgICAgeTogLTE3Ljk1MTQzMTc2NjcxMTkyNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3NDY0ODQ2JyxcclxuICAgICAgICAgICAgbmFtZTogJ1N1cmdpY2FsIGluc3RydW1lbnQgaGF2aW5nIGEgcmVtb3ZhYmxlIGJhdHRlcnknLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyODcsXHJcbiAgICAgICAgICAgIHg6IDE4MS44NDE5NDk1NTk5MTY4NixcclxuICAgICAgICAgICAgeTogLTYuMTMwMzU2NjQ0NTQxNzU5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzc0NjgzMDQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWV0aG9kIG9mIGZhYnJpY2F0aW5nIG94aWRlIHNlbWljb25kdWN0b3IgZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjQwLFxyXG4gICAgICAgICAgICB4OiA0My4xNDQ0NzQyMjg3NjQ5OSxcclxuICAgICAgICAgICAgeTogODQuMzA4NTc0NDk4ODM5MDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzUwMTI5MycsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnU2VtaWNvbmR1Y3RvciBkZXZpY2UgaW4gd2hpY2ggemluYyBveGlkZSBpcyB1c2VkIGFzIGEgc2VtaWNvbmR1Y3RvciBtYXRlcmlhbCBhbmQgbWV0aG9kIGZvciBtYW51ZmFjdHVyaW5nIHRoZSBzZW1pY29uZHVjdG9yIGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzIxNixcclxuICAgICAgICAgICAgeDogMTAwLjc1OTg0NDk1NjE5NzYzLFxyXG4gICAgICAgICAgICB5OiAyNjMuOTM5MjgxMTc3NjUzODdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzUwNjc5MScsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnU3VyZ2ljYWwgc3RhcGxpbmcgaW5zdHJ1bWVudCB3aXRoIG1lY2hhbmljYWwgbWVjaGFuaXNtIGZvciBsaW1pdGluZyBtYXhpbXVtIHRpc3N1ZSBjb21wcmVzc2lvbicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI1NyxcclxuICAgICAgICAgICAgeDogMTYyLjg5OTQzNzQ5MzgzODMsXHJcbiAgICAgICAgICAgIHk6IC0xMy41MDc2NjQzNjQ2MTEyNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3NjIwNjU1JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdNZXRob2QsIGRldmljZSBhbmQgY29tcHV0ZXIgcHJvZ3JhbSBwcm9kdWN0IGZvciBpZGVudGlmeWluZyB2aXNpdG9ycyBvZiB3ZWJzaXRlcycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI0MyxcclxuICAgICAgICAgICAgeDogMjczLjc0NTMyNTcwNTg0NzEsXHJcbiAgICAgICAgICAgIHk6IC0xMzQuMTE5Njk3MTY4MDY3ODNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzYzMjk4NScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTb3liZWFuIGV2ZW50IE1PTjg5Nzg4IGFuZCBtZXRob2RzIGZvciBkZXRlY3Rpb24gdGhlcmVvZicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTQ3NyxcclxuICAgICAgICAgICAgeDogMjUuMTU2NDEyNzMxMTMwOTk1LFxyXG4gICAgICAgICAgICB5OiAyMzIuNjM4Mzc0NTM2MzE2NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3NjYzNjA3JyxcclxuICAgICAgICAgICAgbmFtZTogJ011bHRpcG9pbnQgdG91Y2hzY3JlZW4nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDIyMTcsXHJcbiAgICAgICAgICAgIHg6IDE0OC4zMTcyOTA3NTcxNDQxMixcclxuICAgICAgICAgICAgeTogLTI1Mi4xMjA1NDExNzI5NTYyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzc2NzQ2NTAnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU2VtaWNvbmR1Y3RvciBkZXZpY2UgYW5kIG1hbnVmYWN0dXJpbmcgbWV0aG9kIHRoZXJlb2YnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDM0MzksXHJcbiAgICAgICAgICAgIHg6IDI2NS4yMDc3NTI3MzUxMTg4NSxcclxuICAgICAgICAgICAgeTogOTcuMDg3NTMxNzU2NDk4NzlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzczMjgxOScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTZW1pY29uZHVjdG9yIGRldmljZSBhbmQgbWFudWZhY3R1cmluZyBtZXRob2QgdGhlcmVvZicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzI4OCxcclxuICAgICAgICAgICAgeDogMjQxLjI3NDMyNDc1Njk2MTQ1LFxyXG4gICAgICAgICAgICB5OiA5Mi41NzkxNzE1OTY2MTU5NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc4MDUzMTg0JyxcclxuICAgICAgICAgICAgbmFtZTogJ1NveWJlYW4gZXZlbnQgTU9OODk3ODggYW5kIG1ldGhvZHMgZm9yIGRldGVjdGlvbiB0aGVyZW9mJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjQ5LFxyXG4gICAgICAgICAgICB4OiAxMi43NDE3MzkyNzQ1MTk4NixcclxuICAgICAgICAgICAgeTogMjIzLjMzMDUwOTQ2ODUzODU0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDA4MjYwMi0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0FkYW0gSGVsbGVyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjc4LFxyXG4gICAgICAgICAgICB4OiAtNzguOTc5MTgzNjc4NzgzOTUsXHJcbiAgICAgICAgICAgIHk6IDE3NS44MzQ1ODU1MTk0NTY5N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1NTEyNzYtMTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQWRyaWFuIEd1dCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE0LFxyXG4gICAgICAgICAgICB4OiAtMTI2LjQ5MTYzODk2ODgyMDgyLFxyXG4gICAgICAgICAgICB5OiA3Ny4wNTM5MjU0Mjg5NDQzN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1NTEyNzYtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBbGFuIEhhdWJhY2gnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNSxcclxuICAgICAgICAgICAgeDogLTEzMy41NDQ4MDYxODUxNzU1NixcclxuICAgICAgICAgICAgeTogMTMuNzM2NDQzMzc5NTQyNDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzMyMDk1LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQWxleCBXYXJzaGF2c2t5JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzgsXHJcbiAgICAgICAgICAgIHg6IC00MS40MzAwNjA5MTAxNDY4MSxcclxuICAgICAgICAgICAgeTogLTExNS42OTQ2ODEzNzA2NDgxN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQwODIwOTctMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBbGZyZWQgRS4gTWFubicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDczLFxyXG4gICAgICAgICAgICB4OiAtMTY2LjI1MTI3ODIzNDE3Njg4LFxyXG4gICAgICAgICAgICB5OiA2NC4yMTQyNDU1NjYyMzMzOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzc0MDI1MDYtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBbmRyZWEgQy4gU2N1ZGVyaScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIsXHJcbiAgICAgICAgICAgIHg6IDIzMi4wMjEwMTM1NjQ5NDQsXHJcbiAgICAgICAgICAgIHk6IDIwMS41NDM2MDU1MzIxNDU1M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYyOTU1MzAtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBbmRyZXcgTS4gUml0Y2hpZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXHJcbiAgICAgICAgICAgIHg6IC0xODAuMTMyNzAxMDkzODA4ODMsXHJcbiAgICAgICAgICAgIHk6IC0xNzUuODkzMzU4NzUwMzkyODVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1OTQ0NzkxLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQW5kcmV3IFcuIFNjaGVycGJpZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4LFxyXG4gICAgICAgICAgICB4OiA4OS4wMzU5Njc4ODcwMjI3MSxcclxuICAgICAgICAgICAgeTogNzMuNDE5NjY2MDE1NjIwNThcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NjY1NjQ4LTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQW5kcnplaiBQLiBNYXp1cicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXHJcbiAgICAgICAgICAgIHg6IC0xNy43NTk1NzczODEzMzI2OSxcclxuICAgICAgICAgICAgeTogLTkwLjA0MzI3ODg0MTQxMTM4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU3NzcyNi00JyxcclxuICAgICAgICAgICAgbmFtZTogJ0FuaWwgSy4gQW5uYWRhdGEnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxOSxcclxuICAgICAgICAgICAgeDogLTkwLjI3MjM3NzI2NzU4NTgxLFxyXG4gICAgICAgICAgICB5OiAtMTQyLjExOTgxNTUzMTI3ODRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MzM2MTM3LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQW5pbCBNdWt1bmRhbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI0LFxyXG4gICAgICAgICAgICB4OiA0NC45NzU3MDAwMzg4MjA1OSxcclxuICAgICAgICAgICAgeTogLTE3My4xOTEyNjMwNTIxNjM1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjgyOTY1NS0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0FudXBhbSBTaW5naGFsJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTIsXHJcbiAgICAgICAgICAgIHg6IDY4LjAzMzQxNDk3MDgwODA4LFxyXG4gICAgICAgICAgICB5OiAtMTU5LjYxNjQwOTAxODMwMzFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1Mjc2MjYyLTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnQXJ0aHVyIEwuIEpvaG5zb24nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA5LFxyXG4gICAgICAgICAgICB4OiAxODUuNTA5NTY2NDM1MjIyOCxcclxuICAgICAgICAgICAgeTogLTIyOC44NDE5OTE1ODk4NDA1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzA4MjgzMi00JyxcclxuICAgICAgICAgICAgbmFtZTogJ0F5YW5vcmkgRW5kbycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUsXHJcbiAgICAgICAgICAgIHg6IDExNi4wOTI2MTU3MzAxMDk1MSxcclxuICAgICAgICAgICAgeTogMTQ5LjE3MTc2MDgxODc1NTczXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjM3MDU4NC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0F6ZXIgQmVzdGF2cm9zJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOCxcclxuICAgICAgICAgICAgeDogLTI0MC40MTI5MjQxNTE5NDA4NyxcclxuICAgICAgICAgICAgeTogMTk3LjQwMjAxMDcyOTg0NjM4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTcyMjk5Ny0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0JlaHJhZCBBcmlhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNzUsXHJcbiAgICAgICAgICAgIHg6IC03Ni44ODYzOTU3OTg5OTI2OCxcclxuICAgICAgICAgICAgeTogMTQwLjU5NzQzNDgwMjg1MTQ0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDk3MjIyNC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0Jlbm5pZSBUaG9tcHNvbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQ2LFxyXG4gICAgICAgICAgICB4OiAxMjkuODA3MzUwNTIzODk4MTIsXHJcbiAgICAgICAgICAgIHk6IC00LjQ4MTk3MjU1OTgzOTk4M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzc2MjA2NTUtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdCasO2cm4gU3BlcmxpbmcnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxyXG4gICAgICAgICAgICB4OiAyNjUuNjk4MDI0NjYwMjEzNDMsXHJcbiAgICAgICAgICAgIHk6IC0xNjMuMTc0ODc1OTI2ODI0N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1NTEyNzYtMTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnQm9iIE11cnRmZWxkdCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE0LFxyXG4gICAgICAgICAgICB4OiAtMTA0LjU3NjAyNjQxNjA1MDIzLFxyXG4gICAgICAgICAgICB5OiA0My4yMTkyOTM4NjAxNzQ5MVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4MDk2NTMtOScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdCcmFkIFQuIEhpdGUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0LFxyXG4gICAgICAgICAgICB4OiAtMTc4Ljc0MDY5NDQyOTU5NyxcclxuICAgICAgICAgICAgeTogMTE0LjU2NDMwMTA3MTAwMzExXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjY2NTY0OC01JyxcclxuICAgICAgICAgICAgbmFtZTogJ0JyaWFuIEdyb3ZlcycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXHJcbiAgICAgICAgICAgIHg6IC00LjA2MzcwMzcyNzU5MzU1OSxcclxuICAgICAgICAgICAgeTogLTkzLjI0NjY2MDIxNjE1MTc3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzAwMDgxOC0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0JyaWFuIEouIEhlbW1lbGdhcm4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyLFxyXG4gICAgICAgICAgICB4OiAyNTEuODc4MjUyNzE2OTIyMDgsXHJcbiAgICAgICAgICAgIHk6IDI4LjI4OTgwMzE5NTI2MDA4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjY1ODU3Ny0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0JyaWFuIFEuIEh1cHBpJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOTQsXHJcbiAgICAgICAgICAgIHg6IDEyMy4xOTYzMTk4NzgzNTI1OCxcclxuICAgICAgICAgICAgeTogLTI2OS41NTQ5NTUyNzc3MTExXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTQ2NTg5NS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0JyeWFuIEQuIEtub2RlbCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE0NyxcclxuICAgICAgICAgICAgeDogMjQ5LjI3MTU5MzUyNTA5Njk2LFxyXG4gICAgICAgICAgICB5OiAxNDkuODk0MjI2OTY1MzQ0NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU5NDgwMDYtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDYXJsYSBNLiBNYW5uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzAsXHJcbiAgICAgICAgICAgIHg6IC0xNDguNDExNTM0NzY5ODc4MDUsXHJcbiAgICAgICAgICAgIHk6IDI2OC4yMTAyMzY4NTMzNzAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU1ODM1MS04JyxcclxuICAgICAgICAgICAgbmFtZTogJ0NhcnkgRC4gVGFsYm90JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNTEsXHJcbiAgICAgICAgICAgIHg6IC0yNDIuMTIwMTM3Mzk2MDA4NSxcclxuICAgICAgICAgICAgeTogMS4wODA5MTA1ODYxNzIyNDgzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTE3NjY0NC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0NoYWQgU3Jpc2F0aGFwYXQnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyOCxcclxuICAgICAgICAgICAgeDogLTEwNi41OTc4MDMyNTY0NTI4OSxcclxuICAgICAgICAgICAgeTogNTYuNzI0MTU5OTYyNDczNjNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzMyMDk1LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ2hhbmRyYWthbnQgUmFta3Jpc2huYSBCaGF2c2FyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNyxcclxuICAgICAgICAgICAgeDogLTU2LjQ0NjkyNDIzNjAyODU4LFxyXG4gICAgICAgICAgICB5OiAtMTE0LjM4OTM2MzU1OTUyNTIxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjgwNDMzMC01JyxcclxuICAgICAgICAgICAgbmFtZTogJ0NocmlzIEhhdmVuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOCxcclxuICAgICAgICAgICAgeDogNzYuNTg5OTY5MjY2MDcwMjcsXHJcbiAgICAgICAgICAgIHk6IC0yMzMuNTkzNzY0MjE3NzQ5NjhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1ODU5OTE2LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ2hyaXN0b3BoZXIgQS4gSnVsaWFuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzUsXHJcbiAgICAgICAgICAgIHg6IDMyLjQ5NTI5MjAyOTE1NTI2LFxyXG4gICAgICAgICAgICB5OiAzMDcuODU1ODcxNTczMjk5MTdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1OTYzOTUzLTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ2hyaXN0b3BoZXIgU3RhdWJlcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXHJcbiAgICAgICAgICAgIHg6IDM4Ljg3NjQ5OTE3NzMwODkzNixcclxuICAgICAgICAgICAgeTogLTI1NC42ODUzMzcxNDg1NDA3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU5MzgzNC0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0NodW5vbmcgUWl1JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzAsXHJcbiAgICAgICAgICAgIHg6IC0yOTkuNTEzNTcwNzMyNzU3NjcsXHJcbiAgICAgICAgICAgIHk6IDI4LjY5MzU4NjEzMzE3OTUwNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU3MDMzNTctMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDaW5keSBYaW5nIFFpdScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDM3LFxyXG4gICAgICAgICAgICB4OiAtMzA3LjYwNDk0NjAyMDg4NDk0LFxyXG4gICAgICAgICAgICB5OiAtMzYuMDk5NzQyOTc2OTI1NTRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MzgyMjMyLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ2xpZmYgSGFndWUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyNSxcclxuICAgICAgICAgICAgeDogLTE1OC45NDg4OTE3MDc5MjIxNyxcclxuICAgICAgICAgICAgeTogNzUuNTczNjYxMjU5NjcwOTFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTM1OTA5LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRGF2aWQgQnJhZGxleSBSdXN0JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTAsXHJcbiAgICAgICAgICAgIHg6IDI5My44OTM3ODI2Njg4MTIxNSxcclxuICAgICAgICAgICAgeTogMTA4LjI0MDQ1NTkyNjkwNDQ5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTcxMzkxMS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0RhdmlkIEMuIFJhY2VuZXQnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMTcsXHJcbiAgICAgICAgICAgIHg6IC03MC43MzE5OTk5NjcyOTA3NixcclxuICAgICAgICAgICAgeTogMjgzLjY4ODQ1MDIxMzI2NjFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NTEyNDI2LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRGF2aWQgSC4gTGV2eScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDk3LFxyXG4gICAgICAgICAgICB4OiAxNzUuNjIyNzMzNDY4Mjk1OTMsXHJcbiAgICAgICAgICAgIHk6IDE5NS4wMzM0ODA5MjA0Mjc4NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU3NTU3MzctMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEYXZpZCBLYXJsIExlZSBQZXRlcnNvbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEwLFxyXG4gICAgICAgICAgICB4OiAtMTE2LjE5OTk3NTkzOTIwNjgxLFxyXG4gICAgICAgICAgICB5OiAyMzUuNDIzMTc0Njc3Njg3MDZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MDA0Mjc2LTEzJyxcclxuICAgICAgICAgICAgbmFtZTogJ0RhdmlkIEwuIFJhYmJlcnMnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA5LFxyXG4gICAgICAgICAgICB4OiA5MC4wNTQ1NTEzODgzOTQ2NyxcclxuICAgICAgICAgICAgeTogLTE5OS43NjcyNDMwMjY2MDk5MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQxMjcyMjctMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEYXZpZCBULiBHcmVlbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI1MyxcclxuICAgICAgICAgICAgeDogMzIwLjA1Mzg5NTY0OTM0NzQsXHJcbiAgICAgICAgICAgIHk6IC0yLjU2NzQ0MDY5ODM3ODM3NzdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MzI5NjU1LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRGVhbiBMLiBHYXJuZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA5LFxyXG4gICAgICAgICAgICB4OiA4Mi45ODY4Mzc4NjY1ODQ0LFxyXG4gICAgICAgICAgICB5OiAtNzUuMDE0NzIxNTUwMDIxMzhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTUxMjc2LTknLFxyXG4gICAgICAgICAgICBuYW1lOiAnRGVib3JhaCBSdXBwZXJ0JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjIsXHJcbiAgICAgICAgICAgIHg6IC0xMTguMjY1NTI5Mzc0NTE1MDcsXHJcbiAgICAgICAgICAgIHk6IDIwLjEzMTQ4MTE4OTEwMTY5NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1NTEyNzYtMTAnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRGVubmlzIFAuIEJpc2hvcCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE2LFxyXG4gICAgICAgICAgICB4OiAtMTEzLjA0MTM4NDMyNjU5OTQzLFxyXG4gICAgICAgICAgICB5OiA2OC41MzQ3OTE4MTU2MjI5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTkxODE1OS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0RlbnppbCBXaWxsb3VnaGJ5IENoZXNuZXknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4LFxyXG4gICAgICAgICAgICB4OiAtMjIxLjM0MzgxNjMxOTc3MzIsXHJcbiAgICAgICAgICAgIHk6IC0xODAuMzEyNTg4Njg0MzU3MjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2OTEyODM5LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnRGVyZWsgRGVlIERldmlsbGUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMjcsXHJcbiAgICAgICAgICAgIHg6IDEyNC4wMDU2MjM2OTcxNDYwOSxcclxuICAgICAgICAgICAgeTogMzAuMzAzNTE4NTczMjEzMzI4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjcxODM2MS04JyxcclxuICAgICAgICAgICAgbmFtZTogJ0RvbWVuaWMgSi4gTGFSb3NhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNyxcclxuICAgICAgICAgICAgeDogLTE4NS4xNjM0MDI3MTUxNTg4LFxyXG4gICAgICAgICAgICB5OiAxOTEuNDk4ODA1NTgwOTA4OTZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODUwOTQ5LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRG91ZyBXYXJuZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxyXG4gICAgICAgICAgICB4OiAxOTcuNDEwOTU4NjYyNDg4OCxcclxuICAgICAgICAgICAgeTogLTE0MS41MTEzNzQyNTkwMTI3N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1MzA5MzItMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEb3VnbGFzIEIuIEhvZmZtYW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0MSxcclxuICAgICAgICAgICAgeDogMTEyLjY1OTAyMjAyNjc4ODg2LFxyXG4gICAgICAgICAgICB5OiAtNDEuOTUxNzk0MTkzNDA4MDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NDM0NTUwLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRG91Z2xhcyBLLiBXYXJuZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMSxcclxuICAgICAgICAgICAgeDogLTI0MC4yMTMwNTE4MDMxNDcsXHJcbiAgICAgICAgICAgIHk6IC01OC4zODUzNDUyMjE3NjA0NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4NTA4OTUtNScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEdWFuZSBXYW5kbGVzcycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXHJcbiAgICAgICAgICAgIHg6IC0xNDEuNzcxMjAzNzA5NTc1MDUsXHJcbiAgICAgICAgICAgIHk6IC0yMzUuODQ5NDU4ODg1NTUzMzZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3NjMyOTg1LTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRWxsZW4gRGlja2luc29uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNSxcclxuICAgICAgICAgICAgeDogLTYuNjUwNzEyOTUzNjU5MjMyLFxyXG4gICAgICAgICAgICB5OiAyNDMuODU5MjI0OTQ5Nzc5OTZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NjE2NTMyLTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRXBocmFpbSBIZWxsZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMjUsXHJcbiAgICAgICAgICAgIHg6IC0xMzYuNjYyNzY5MzE3ODY3ODgsXHJcbiAgICAgICAgICAgIHk6IDE0OC41MDgzMzI4NzMwNjg0NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3MjQzOTktMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdFcm5zdCBLYXRjaG91cicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIsXHJcbiAgICAgICAgICAgIHg6IDIwLjQ2MDcwNTE3NzgxNjgxNixcclxuICAgICAgICAgICAgeTogLTEzOC42MzE2MTc0MzQ2MDQ3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDQwMzY4Ny0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0V1Z2VuZSBMLiBUaW1wZXJtYW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA2OSxcclxuICAgICAgICAgICAgeDogMTY3LjgxNDA1OTc2MjQwMzIyLFxyXG4gICAgICAgICAgICB5OiAyMy42NTM3OTQzNDg2NzA1MTZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2OTA1MDU3LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnRnJlZGVyaWNrIEUuIFNoZWx0b24sIElWJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTA0NyxcclxuICAgICAgICAgICAgeDogMjA2Ljk0MDU1NjAxMTYxOTU4LFxyXG4gICAgICAgICAgICB5OiAtMzMuNjM3OTQ0MDE5MjIxMDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MDQxMDg2LTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRnJlZHJpYyBDLiBDb2xtYW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMTksXHJcbiAgICAgICAgICAgIHg6IC05My4wNzE0MTUyMjIzMzU2NSxcclxuICAgICAgICAgICAgeTogMTg3LjYxMzgyNzkxMjE0Nzc0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjQzMzkyMS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0cuIFZpY3RvciBUcmV5eicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE5LFxyXG4gICAgICAgICAgICB4OiAtMjUwLjIxNDE5MjIwODcyNDksXHJcbiAgICAgICAgICAgIHk6IDExNy43MDkzNjE4ODEyODc4OVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1NTgzNTEtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdHYXJyeSBNLiBTdGVpbCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIxLFxyXG4gICAgICAgICAgICB4OiAtMTk3LjU1MDMzODQzNzA3MDg4LFxyXG4gICAgICAgICAgICB5OiAtMTQuOTY5MDU0MTU3MjU1MjYxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTcwNzM2OS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0dlb2ZmcmV5IEMuIEh1ZWlsJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzcsXHJcbiAgICAgICAgICAgIHg6IDg4Ljc3NzMyMTI5OTc1OTY4LFxyXG4gICAgICAgICAgICB5OiAtNTkuMzQyOTQ0NjkwOTA0MzFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODI2NTgyLTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnR2VvcmdlIEVyaWNzc29uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcclxuICAgICAgICAgICAgeDogLTE1OC4wMjA3MDg1NTI0OTkzNyxcclxuICAgICAgICAgICAgeTogLTExMS40MTM1NTY2NjA3NTQxM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJ1JFMjg5MzItMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdHcmFoYW0gVy4gQnJ5YW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNyxcclxuICAgICAgICAgICAgeDogMzAyLjE1MTk3MTc0OTgxOTk1LFxyXG4gICAgICAgICAgICB5OiAyLjk3MTE1MzMwMTIxNzE4NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYxNDQ2NzktMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdHcmVnb3J5IFMgSGVybWFuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNzAsXHJcbiAgICAgICAgICAgIHg6IC0xMDcuMDg3MjEyMTI0MzgyNTMsXHJcbiAgICAgICAgICAgIHk6IC0yMi45OTkzMjU5ODA0NzUzNDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NjAxMDg3LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnR3Vhbmdob25nIFlhbmcnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4LFxyXG4gICAgICAgICAgICB4OiAxODEuOTQwMDg2ODA4MDIyMSxcclxuICAgICAgICAgICAgeTogNzcuNjY3Nzg2MjMzODExOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1Nzc3MjYtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdIZW5yeSBELiBKYXknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3LFxyXG4gICAgICAgICAgICB4OiAtMTIyLjAyMzIwNDc2OTgyNDk5LFxyXG4gICAgICAgICAgICB5OiAtMTU3Ljk1NTY2NzMyNDE4Mjg1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDI4MzAyNC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0hlbnJ5IFIuIFNpZW5raWV3aWN6JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzUsXHJcbiAgICAgICAgICAgIHg6IDI3NC42MDQxNTYwMzcxMjcyNyxcclxuICAgICAgICAgICAgeTogLTI3LjI3MzMwOTYyNTg0NTY3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzMyMzM1Ni01JyxcclxuICAgICAgICAgICAgbmFtZTogJ0hpZGVub3JpIEhpcmFtYXRzdScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQsXHJcbiAgICAgICAgICAgIHg6IC0zNi42MDU0MjQyNTE5NTA0NDYsXHJcbiAgICAgICAgICAgIHk6IDExNS44NTAwODkzMTk5ODhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0NzAzMDE5LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnSGlkZW8gSG9zb25vJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNjgsXHJcbiAgICAgICAgICAgIHg6IC05Ljg1OTQ1NzA5NDIzNzMzMyxcclxuICAgICAgICAgICAgeTogMTEyLjE4Mzc0Njk2MzQ4OTEzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDI1MzA2MS0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0hpZGVvIE9obm8nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1NSxcclxuICAgICAgICAgICAgeDogMTYuNDI0Mzk3ODM1OTEzOTkzLFxyXG4gICAgICAgICAgICB5OiAxLjU5ODEyOTAzMjExNDExNjJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MjcyMDY5LTYnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSGlyb21pY2hpIE90YScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE5LFxyXG4gICAgICAgICAgICB4OiAtNDIuOTMwMjMxMjMzMjk5NTY1LFxyXG4gICAgICAgICAgICB5OiA3Mi4wMzA4MTU3ODI5NjExOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUwNDEyMDAtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdIaXJvbWl0c3UgSXNoaWknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0MCxcclxuICAgICAgICAgICAgeDogLTI0MC40NTA5NjI5MzM5Mjk2LFxyXG4gICAgICAgICAgICB5OiAtMTUwLjI3NjAxMjY1OTg4MzUyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjg2MzM2My0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0hpc2F0byBZYWJ1dGEnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0MCxcclxuICAgICAgICAgICAgeDogNjAuNDM3MjE0NzY2NTQ1NSxcclxuICAgICAgICAgICAgeTogNTYuNDk2NjQ5MjE4ODEzODdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3Mzg1MjI0LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnSGl0b3NoaSBIb2thcmknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxyXG4gICAgICAgICAgICB4OiAtMjQxLjgzMTAzMzM3OTk1MTEsXHJcbiAgICAgICAgICAgIHk6IC0xMzMuNTQwNDk3NzkyOTU0MjhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MDQxMjAwLTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSWt1aGlybyBZYW1hZ3VjaGknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMCxcclxuICAgICAgICAgICAgeDogLTIyOC43ODA4NjcwMTcxOTE1MyxcclxuICAgICAgICAgICAgeTogLTE2Mi4zNjY3MTU4ODU2MDE3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDk5NzI2Mi0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0lrdW8gU2Frb25vJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOSxcclxuICAgICAgICAgICAgeDogLTIyLjQ1MTU1NjY1MjM5Mzk0MyxcclxuICAgICAgICAgICAgeTogLTM0LjA0NzUwMTY4NDE4MjExXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTA4MTQyMi0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0lzaGlhbmcgU2hpaCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI4LFxyXG4gICAgICAgICAgICB4OiAtMjg2LjMyNzA3NzU5NDAzOTYsXHJcbiAgICAgICAgICAgIHk6IC0yMy43MzMxMDUxMTk0NTg0OTdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MjgxODk4LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmFjcXVlbHluIEEuIE1hcnRpbm8nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0MyxcclxuICAgICAgICAgICAgeDogLTc3LjQwNDI2Njc0NjMwMjU4LFxyXG4gICAgICAgICAgICB5OiAyMzMuMTQzNjYyMDkzOTc0MDZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NjY1NjQ4LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmFpLUplaW4gWXUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxyXG4gICAgICAgICAgICB4OiAtMzEuODQwMDUyODY0OTI2NzMsXHJcbiAgICAgICAgICAgIHk6IC05MS42MjM3NTc0NzM2NDExOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQ4MDk2OTctMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKYW1lcyBELiBDYXVzZXksIElJSScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEwOCxcclxuICAgICAgICAgICAgeDogLTE3OC4yNjUyMTYxMjA0MjIsXHJcbiAgICAgICAgICAgIHk6IDUxLjc1NTY4MDkzMDc0NjY4NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQ4NjM0MjUtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKYW1lcyBMLiBIZW5rZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI1LFxyXG4gICAgICAgICAgICB4OiAtMjI5LjgyNjMyMzI2NjkzMTQ0LFxyXG4gICAgICAgICAgICB5OiA4MS4xNDgzOTE4MzUwNDUxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTUzMzIzOC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0phbWVzIFNheScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDExNSxcclxuICAgICAgICAgICAgeDogLTExMC4yNjUxNDY1MDU1MDMxMyxcclxuICAgICAgICAgICAgeTogMTg5LjczODQxOTA3MjYxMzc0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjcxMTU2NS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0phc29uIFpvc3MnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNCxcclxuICAgICAgICAgICAgeDogLTM2Ljc5NzYzNTgzMDQxMzM4LFxyXG4gICAgICAgICAgICB5OiAtMzAzLjM2MDYyOTMxNDAwNTdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTUxMjc2LTgnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmF5IFlvbmVtb3RvJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjYsXHJcbiAgICAgICAgICAgIHg6IC0xMDguMzkwNjAxMTUwNjU2OTYsXHJcbiAgICAgICAgICAgIHk6IDMwLjY2NzUzMDk2NDk4NDgxN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU4NjMzMjYtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKZWZmcmV5IEUuIE5hdXNlJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNyxcclxuICAgICAgICAgICAgeDogLTM0Ljk3NDY4NzgyNjUxMzk5LFxyXG4gICAgICAgICAgICB5OiAyMjUuNTM3ODEyNzY2NzI0MjdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0OTUxMjc4LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmVmZnJleSBJLiBDb2hlbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQ1LFxyXG4gICAgICAgICAgICB4OiAtMTA2LjY3NzI5MjU2MDAzNDIyLFxyXG4gICAgICAgICAgICB5OiAtMjc1Ljk2NjU1NzY1MTgyMTIzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjM5MzYwNS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0plZmZyZXkgTG9vbWFucycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQsXHJcbiAgICAgICAgICAgIHg6IC0xMi4wODk1MjMyODA4NjIxNjQsXHJcbiAgICAgICAgICAgIHk6IC0xNDYuODcyOTU2ODkyNTA1NjRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MjQzNjIyLTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmVmZnJleSBNLiBGaXNjaGVyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjMsXHJcbiAgICAgICAgICAgIHg6IC02OS4xMTUxMDU3NjQwMzY2MyxcclxuICAgICAgICAgICAgeTogLTEyMS41OTU5NjIzODI3ODkxMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU4OTc1NjMtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKZWZmcmV5IFMuIFN3YXl6ZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIzNyxcclxuICAgICAgICAgICAgeDogMTgyLjc1NzUyMTg3NzA3MTIsXHJcbiAgICAgICAgICAgIHk6IC00Mi42NTIyNjQ4NzUzOTc5MjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3NjA4NzYxLTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmVubmlmZXIgUmluZWhhcnQnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA5LFxyXG4gICAgICAgICAgICB4OiAxNC42MDMwMzM3MTc2NDQ4NzcsXHJcbiAgICAgICAgICAgIHk6IDI1OC4wMTY5MzgwNzk0MzA3NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzczODA2OTYtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKZXJyeSBSLiBNb3JnYW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxyXG4gICAgICAgICAgICB4OiAyNDAuNzc5MjM1MTI1MzkxNzIsXHJcbiAgICAgICAgICAgIHk6IDAuNzU2MTg1NjU1MjIyNjI1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTcxNTQ1MC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0plc3NlIEFtYnJvc2UnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxOSxcclxuICAgICAgICAgICAgeDogMzYuMTgwNDIzNTE0NTA4MjA2LFxyXG4gICAgICAgICAgICB5OiAtMjcxLjExODE1MTg5MTY2NjU3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjcxMTU2NS0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0ppYW4tSnVuZyBZaW5nJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTUsXHJcbiAgICAgICAgICAgIHg6IC01Mi40MDU5NDM2MjkxNjAyNyxcclxuICAgICAgICAgICAgeTogLTI5OC42MjA5ODUyNDQ2NTc3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjUxNjIyNy00JyxcclxuICAgICAgICAgICAgbmFtZTogJ0pvZXkgQ2hlbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUwLFxyXG4gICAgICAgICAgICB4OiAtMTU0LjU0NjY3MTM2MjkwOTkzLFxyXG4gICAgICAgICAgICB5OiAyMDguOTUwNzIyODA3MzQzMzdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MjMzNjE3LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnSm9obiBDb2tlcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI5LFxyXG4gICAgICAgICAgICB4OiAtMTA3LjgxODkzODE1NjMyMTQ0LFxyXG4gICAgICAgICAgICB5OiAtMTcwLjkwNzQ2NzYyMzE2NTZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0NTYxNDQ0LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSm9obiBILiBMaXZpbmdzdG9uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzEsXHJcbiAgICAgICAgICAgIHg6IC0xNTIuODUzMDA0NDQ1ODM5NTYsXHJcbiAgICAgICAgICAgIHk6IDg1LjEwOTQwMDA4OTY0OTY3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTIzNzE3OC0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0pvaG4gSi4gTWFzdHJvdG90YXJvJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNzcsXHJcbiAgICAgICAgICAgIHg6IC0yMDUuNDk3Mzk1OTA5NTg1MzIsXHJcbiAgICAgICAgICAgIHk6IDUwLjMxNDc3OTcwNDg0ODY4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjQyNDg0Ny0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0pvaG4gSi4gU2hpbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDYsXHJcbiAgICAgICAgICAgIHg6IC0xODUuMzc0NDYzNTU3MTAzODQsXHJcbiAgICAgICAgICAgIHk6IC0zLjI4NzIwMjcxMDYyMzU4OTVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NzEzOTExLTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnSm9obiBXLiBCZWFyZHNsZXknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMTAsXHJcbiAgICAgICAgICAgIHg6IC0zMy44MTQ3NTk4ODYzODIwMixcclxuICAgICAgICAgICAgeTogMjYyLjg4MjY3MjExMTEzNzI1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjY5MDM4Ny0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0pvaG4gWmltbWVybWFuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTYsXHJcbiAgICAgICAgICAgIHg6IC0xMDMuODY0MzY0Mjg1MDEsXHJcbiAgICAgICAgICAgIHk6IDI4Ny4wMzI0MTUyMDc3MDM1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjI5NTUzMC0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0pvbmF0aGFuIEJyYWRzaGF3JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNyxcclxuICAgICAgICAgICAgeDogLTIxMS44NzE0MjYwOTEwNDc4LFxyXG4gICAgICAgICAgICB5OiAtMjI0LjUwOTA0Nzg3NDQ1MTIzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjk2NDM2My0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0pvc2VwaCBDaGFybGVzIEhldWlsJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcclxuICAgICAgICAgICAgeDogMTU3Ljg5NDkwOTYwOTc1NDI4LFxyXG4gICAgICAgICAgICB5OiAtMTI2LjQ0NzgxODMxOTc1MDY0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjgwNDMzMC00JyxcclxuICAgICAgICAgICAgbmFtZTogJ0pvc2VwaCBIYXJiJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTYsXHJcbiAgICAgICAgICAgIHg6IDYxLjEyNjY0ODIyNDU4NTY2LFxyXG4gICAgICAgICAgICB5OiAtMjY4LjE5MDg4MTY2MTE4OTlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3MTU0NDc3LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnSm9zaHVhIEEuIFN0cmlja29uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzEsXHJcbiAgICAgICAgICAgIHg6IDE0My42MDc3Mjc2NDU5OTksXHJcbiAgICAgICAgICAgIHk6IC0yODEuNjY5MzY5MjYxMTQyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjY2NTY0OC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0thcmVuIEJyb2RlcnNlbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIsXHJcbiAgICAgICAgICAgIHg6IC01Mi44ODc3NjE2MTc0MDY3NDYsXHJcbiAgICAgICAgICAgIHk6IC0xMzUuMjUzMjQ2MDEyMTI3NDhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2OTE0MTgyLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2F0c3V0b3NoaSBUYWtlZGEnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMixcclxuICAgICAgICAgICAgeDogLTMwMS44OTQzMzQ4NzY5MTE4NCxcclxuICAgICAgICAgICAgeTogLTcwLjQzMzI0NjUwODA4OTA2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTkyNTIyNC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0thenVraSBLb2JheWFzaGknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMixcclxuICAgICAgICAgICAgeDogLTQxLjkwMDY3NjkxODA5NjQxNixcclxuICAgICAgICAgICAgeTogNy4zMDEzNTg1OTY2MjI5MTJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3MDYxMDE0LTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2F6dXNoaWdlIFVlZGEnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4LFxyXG4gICAgICAgICAgICB4OiAtMzcuNjY0OTYzNjM0NDgzMjMsXHJcbiAgICAgICAgICAgIHk6IDU5LjYyNDc1NTY1NzM4Mjg2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDM1NjQ1NS0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0tlaXNoaSBTYWl0bycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDYwLFxyXG4gICAgICAgICAgICB4OiAxMC4yMTkxNDA2MzM5MTAwODUsXHJcbiAgICAgICAgICAgIHk6IDExNC42MDYxMTAwODQ2MDU2N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYxNzU3NTItOScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLZWl0aCBBLiBGcmllZG1hbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDU2LFxyXG4gICAgICAgICAgICB4OiAtNzIuNzY0NzgzOTk0MzI2OTIsXHJcbiAgICAgICAgICAgIHk6IDE1Ny45NjI4MDI0NjAxNDczNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJ0QyNjM5ODctMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLZWl0aCBMLiBNaWxsaW1hbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE0OCxcclxuICAgICAgICAgICAgeDogMjg1LjI3MDU1MTQ2MzA5ODA2LFxyXG4gICAgICAgICAgICB5OiAtNC4xNjE2MDc2OTk5NTI4NDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICdEMzA0MjM0LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2VpdGggUmF0Y2xpZmYnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3NixcclxuICAgICAgICAgICAgeDogMjk4LjI1NDM4NjU1NjQ0NTg3LFxyXG4gICAgICAgICAgICB5OiAtNjIuMDM3NzMzOTkwNzMwNjE1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjgzODM5Ny0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0tlbmdvIEFraW1vdG8nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzMDEsXHJcbiAgICAgICAgICAgIHg6IDIzMy4zMDU5MTA4OTI4NDEyNCxcclxuICAgICAgICAgICAgeTogMTE4LjEyODY1ODE0NzQ0MjgzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDA3MjIzNi0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0tlbmppIE5vbXVyYScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDcyLFxyXG4gICAgICAgICAgICB4OiAtMTguNDkxNTczNjIwNzQ4NDU0LFxyXG4gICAgICAgICAgICB5OiAxNjQuMzMxOTc0Mzg4MjA4NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQ4OTA2MTEtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLZW5uZXRoIEguIE1vbGxlbmF1ZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMzksXHJcbiAgICAgICAgICAgIHg6IDE3MS4xMjEzOTA5OTEyNTI4NCxcclxuICAgICAgICAgICAgeTogMTQ5LjgyNzg5MzIxODMyMDdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NDA5NDk4LTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2VubmV0aCBTLiBXYWxlcycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDM0LFxyXG4gICAgICAgICAgICB4OiAxNTEuNjE1MDY1MDA0ODYzNjUsXHJcbiAgICAgICAgICAgIHk6IC02OC4xNzE1MzAxMDk2OTc1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU1ODM1MS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0tlcnN0aW4gUmVicmluJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOCxcclxuICAgICAgICAgICAgeDogLTIxMy45OTgzMjY0ODIxOTg5MyxcclxuICAgICAgICAgICAgeTogLTE4LjIxMDIwMzUwOTcwNjk1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzA4MzA3NS0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0tldmluIFIuIERvbGwnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzMyxcclxuICAgICAgICAgICAgeDogMTk1LjE3MTYxODYxMjk2NDEyLFxyXG4gICAgICAgICAgICB5OiAyMS44Mjc1NzE5MDcxODI4NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4MjY3NDUtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLZXZpbiBSLiBOaXgnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1LFxyXG4gICAgICAgICAgICB4OiAtMTEzLjUyMzE4MzQ5Njc5Nzg2LFxyXG4gICAgICAgICAgICB5OiAtMTg2LjY1ODUwNDY0MDk3NzY3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDY4MjU5Ni0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0tldmluIFcuIFNtaXRoJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjQ1LFxyXG4gICAgICAgICAgICB4OiAxNDIuMDE1MTcwNTI2MTkyMjQsXHJcbiAgICAgICAgICAgIHk6IDM1LjMxNzEzMDMyMDQwMDE4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjMzNjEzNy0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0tpbmctSHdhIExlZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDcsXHJcbiAgICAgICAgICAgIHg6IDI5LjEzNjQxNjgyMTM4OTU0NSxcclxuICAgICAgICAgICAgeTogLTE1Mi44Mzg5MjI3OTEwMDEzNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1NTM1NjMtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLbGF1cyBXLiBTdHJvYmVsJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcclxuICAgICAgICAgICAgeDogMTguNTAyMjY5ODAyODk2MTg3LFxyXG4gICAgICAgICAgICB5OiAtMjc3Ljg0MjI5MTE5MTY0NDg1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTcxNTY3NS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0tvcmV5IEtsaW5lJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNjcsXHJcbiAgICAgICAgICAgIHg6IDEwNy4zOTI4MDg2NDA0NjU2LFxyXG4gICAgICAgICAgICB5OiAwLjEyNDk3MTY4MzkxMjA4ODgxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjcxODM2MS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0tyaXNobmEgTWFuZ2lhcHVkaScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIsXHJcbiAgICAgICAgICAgIHg6IC0yMjEuNDIzNTExODEwOTUzNzYsXHJcbiAgICAgICAgICAgIHk6IDIxMC42ODQ2MjEwNzYyMTY5NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1Nzc3MjYtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLdWFuZy1ZYW5nIEh1YW5nJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNyxcclxuICAgICAgICAgICAgeDogLTExMC45MDI5MzQ3NDQxOTYzNCxcclxuICAgICAgICAgICAgeTogLTE0NC4xMTA3NDc3Mjc0MDE5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzE1OTc1MC01JyxcclxuICAgICAgICAgICAgbmFtZTogJ0xlZSBBbm4gT2xzb24nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMDIsXHJcbiAgICAgICAgICAgIHg6IC0xMi4yOTEwNDU3Mjk4MTY1OTMsXHJcbiAgICAgICAgICAgIHk6IDI4NC4zMjI4MjQwMjc2NzFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzE4MzYxLTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTGVyb3kgUi4gS2FyZ2UnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA2LFxyXG4gICAgICAgICAgICB4OiAtMjQ2LjU2ODk4NDk1OTAxODI4LFxyXG4gICAgICAgICAgICB5OiAxNzYuODY0MzA4MjQ4OTEyOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1NTEyNzYtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdMdWlzIEouIE1hbGF2ZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI1LFxyXG4gICAgICAgICAgICB4OiAtMTUwLjQ2OTU1MTU4NDEyMTA2LFxyXG4gICAgICAgICAgICB5OiAxNS40NjY2ODEzNTU1OTQwNDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MDQ4MTEwLTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTHluIE0uIElydmluZycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUwLFxyXG4gICAgICAgICAgICB4OiAxODUuODkzNjgyNTUyMDM2MzgsXHJcbiAgICAgICAgICAgIHk6IDIxMS43MzQ5NzMxNjgzNzQ0NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3MTgzNjEtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdMeW5uZSBNLiBNdXJhY2gnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA2LFxyXG4gICAgICAgICAgICB4OiAtMTg0LjU5NzMxNjEyNTk5Mzc5LFxyXG4gICAgICAgICAgICB5OiAxNjguOTU0NTkwMzAxMjg0MDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1OTQ4Nzg5LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWFnbnVzIExhcnNzb24nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzMixcclxuICAgICAgICAgICAgeDogMjgyLjM0OTg3NDM0OTIzMDQsXHJcbiAgICAgICAgICAgIHk6IC0xMDUuODUzOTA1NzY4Mzk0MDlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODI5NjU1LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWFnbnVzIFZlamxzdHJ1cCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUsXHJcbiAgICAgICAgICAgIHg6IDg0LjU3NjgzNDIwNTA1ODQ5LFxyXG4gICAgICAgICAgICB5OiAtMjExLjYwNTQ2NTkxMTI5MTIyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjcxMTU2NS00JyxcclxuICAgICAgICAgICAgbmFtZTogJ01hcmMgQ2FsdGFiaWFubycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE4LFxyXG4gICAgICAgICAgICB4OiAtMjEuNTcyNTAzNTQ3MDMxNzY1LFxyXG4gICAgICAgICAgICB5OiAtMzAzLjI1MDAxMjA0ODAwODg0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzA3ODUwMy0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ01hcmlhbm5lIE1hbHZlbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI0LFxyXG4gICAgICAgICAgICB4OiAzOS4zNjQ3ODkxMjE4Mzk4MixcclxuICAgICAgICAgICAgeTogMjA0LjUwNzYxMDg4MjM3OTYyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjIyMzIwNS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ01hcmsgRS4gQ3JvdmVsbGEnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMSxcclxuICAgICAgICAgICAgeDogLTIzOS4xMzA2NzMzOTIwNzYsXHJcbiAgICAgICAgICAgIHk6IDE1OS41Mzg2MjY4MTIwNzAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjYyMTgzNC0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ01hcmsgUmFuZGxlIEJveW5zJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOSxcclxuICAgICAgICAgICAgeDogOTIuOTUxNTk5MTM0MDg0NCxcclxuICAgICAgICAgICAgeTogMTM5LjcyNDkxNjk5NDE4MTI5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTUzNDEzMi0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ01hcmsgUy4gVnJlZWtlJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOTksXHJcbiAgICAgICAgICAgIHg6IC0xMjYuMTc0MTQyNDA4MjUyMDIsXHJcbiAgICAgICAgICAgIHk6IDE4Mi4xNDg4NjgwMTc0ODUzNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQ4OTIyNDQtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNYXJrIFMuIFplaW5lcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDExMixcclxuICAgICAgICAgICAgeDogODcuODY1NTEyMzM5NDQ3OTIsXHJcbiAgICAgICAgICAgIHk6IC05My42MTQzNTk0OTkwNjg2NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4Mjk2NTUtNicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNYXJ0aW4gU3Vzc2VyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOCxcclxuICAgICAgICAgICAgeDogODYuNTE2NjQ0OTcxNjMxMSxcclxuICAgICAgICAgICAgeTogLTE3Ni4zNjgwNTY4NjI0ODQyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDQ4NjcyMC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ01hc2FoaXJvIEhpcmFubycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDY0LFxyXG4gICAgICAgICAgICB4OiAtMjYuNDczOTQxMDIxMzI4ODM0LFxyXG4gICAgICAgICAgICB5OiA1MC41ODM4Nzc1MDEyODc0NzVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NjIyNjUzLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWFzYWhpcm8gT3JpdGEnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMyxcclxuICAgICAgICAgICAgeDogLTQzLjMxMTk0MzUxMjQ2OTUwNCxcclxuICAgICAgICAgICAgeTogODguMDU4NTI0MDEwOTIzNjJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MDgwOTk4LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWFzYW8gSXNvbXVyYScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXHJcbiAgICAgICAgICAgIHg6IC0yNzcuMTY3Mzk2ODczMzQxOSxcclxuICAgICAgICAgICAgeTogLTY5LjE2MzEzNTkwMzU4NzY5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDkwMjY3MS0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ01hc2FzaGkgS2F3YXNha2knLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0NCxcclxuICAgICAgICAgICAgeDogMjUuNDk5ODM0OTgxNzUxNTA1LFxyXG4gICAgICAgICAgICB5OiAxMi40NTg4MzU5NjI5MDc3NjhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MTE3ODM4LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWF0dGhldyBBLiBQYWxtZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMTMsXHJcbiAgICAgICAgICAgIHg6IDExMS44NDQ0MDcxOTUxMjg3MSxcclxuICAgICAgICAgICAgeTogMTcuNTUzNTIyNDM4NTQ3MzFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTc3NzI2LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWF0dGhldyBTLiBNYWxkZW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNSxcclxuICAgICAgICAgICAgeDogLTg5Ljc3MjgxNzE1NzYyMTEyLFxyXG4gICAgICAgICAgICB5OiAtMjEyLjUyMDAwOTk0ODA3NDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NjY1NjU1LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWljaGFlbCBBLiBNeWVyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcclxuICAgICAgICAgICAgeDogLTIyMi4xNTQ4OTg0MjY2Mjc4LFxyXG4gICAgICAgICAgICB5OiAtOTEuODgzNzA3Nzk5ODcxMjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NjMyNDMyLTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWljaGFlbCBFLiBTZXRzZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0NixcclxuICAgICAgICAgICAgeDogMjM2LjE0NTM0ODY5MDU5MTUsXHJcbiAgICAgICAgICAgIHk6IC0yOS41MzMwNDM0Mzc0MTY2NzZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MzA2NjIzLTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWljaGFlbCBGLiBUb21hc2NvJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogODksXHJcbiAgICAgICAgICAgIHg6IC0xMzYuMzUwMzQwMjIzMDE5MjYsXHJcbiAgICAgICAgICAgIHk6IDE2Ni44NzM3Njc4NjA5NTM2MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY2MDY3NDQtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNaWNoYWVsIEcuIE1pa3VyYWsnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNCxcclxuICAgICAgICAgICAgeDogMTQzLjA2MTA3MTIzODI4Nzg3LFxyXG4gICAgICAgICAgICB5OiAyMDMuNjg2NTAwMzA4NjQ2ODZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MjY0MDg3LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWljaGFlbCBQLiBXaGl0bWFuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTM0LFxyXG4gICAgICAgICAgICB4OiA4OC4zMTMzMDc5MDk4ODgyMixcclxuICAgICAgICAgICAgeTogMjM3LjEwNDc2NTI4MDU4NDIyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjY2NTY0OC0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ01pY2hhZWwgVHN1bmdoc2kgWXUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyLFxyXG4gICAgICAgICAgICB4OiA3LjMwNDU1OTc0MTE4ODEwMDUsXHJcbiAgICAgICAgICAgIHk6IC0xMDEuNjI4OTMzNDY5ODYzMjNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MDgxNTE4LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWljaGVsIEsuIEJvd21hbi1BbXVhaCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDU2LFxyXG4gICAgICAgICAgICB4OiAxNTMuNTU4MDU3MDMyOTI2NzQsXHJcbiAgICAgICAgICAgIHk6IDI3OC43NTg0MTYzNTkwNDAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDIyNDcyNS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ01pY2hpbyBLYWRvdGEnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNzMsXHJcbiAgICAgICAgICAgIHg6IDcwLjI1MjQ5MTEwMDY3MDExLFxyXG4gICAgICAgICAgICB5OiAyNjAuMTc2MzA2ODQ1MDA3ODRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODUwOTQ5LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWlrZSBNeWVyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcclxuICAgICAgICAgICAgeDogMjAwLjk4NDEwMDI3MjkwNjc3LFxyXG4gICAgICAgICAgICB5OiAtMTY1LjE4MDA5OTQxNTkxODdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MjYxMDM3LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWluIFpodScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDExOSxcclxuICAgICAgICAgICAgeDogMTg3LjIxNzg3OTkwNTE5NDQ1LFxyXG4gICAgICAgICAgICB5OiAxMTkuMTgwNTIzMjIyNDExMjRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzMyMTAwLTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWluZ3RlIEouIENoZW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxyXG4gICAgICAgICAgICB4OiAtNzQuODkzOTY4MjExMzUwNTQsXHJcbiAgICAgICAgICAgIHk6IC0xNDQuNDgxNTEwMTE4NDA5ODZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MTc2NTAyLTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWl0Y2hlbGwgSi4gUGFsbWVyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDAsXHJcbiAgICAgICAgICAgIHg6IDMxNS43OTA5MjYyMTMzNzUzNyxcclxuICAgICAgICAgICAgeTogLTU4Ljc5NjY2OTM5NDE5NzYzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzM4NTIyNC0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ01vdG9oaWtvIFlvc2hpZGEnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1LFxyXG4gICAgICAgICAgICB4OiAtMjMxLjE4NzY4MzI0ODQ3NDQzLFxyXG4gICAgICAgICAgICB5OiAtMTE2LjQ1MTA3NzU2NzkxMjcyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTkxODE1OS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ011bmRpIEZvbXVrb25nJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTIsXHJcbiAgICAgICAgICAgIHg6IC0yMjEuNjI1MjY4MTUzNTMxODYsXHJcbiAgICAgICAgICAgIHk6IC0yMDEuNzUzMTczODgyNjU0NzVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3NjMyOTg1LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTmFuY3kgVGF5bG9yJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNSxcclxuICAgICAgICAgICAgeDogNTAuMDE1ODg2NDkyOTU2ODQ1LFxyXG4gICAgICAgICAgICB5OiAyMjcuMjc1OTU0MDc4MDQ5N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzc0NjgzMDQtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdOb2J1eXVraSBLYWppJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTYsXHJcbiAgICAgICAgICAgIHg6IDQxLjgyMjM3NjA4MjE2MTY5NixcclxuICAgICAgICAgICAgeTogNTIuNTE0MjQ2NzUyODU0MjU1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzIwNTcxNi01JyxcclxuICAgICAgICAgICAgbmFtZTogJ05vcmloaXRvIFNvbmUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxOSxcclxuICAgICAgICAgICAgeDogMjY5LjExNTA2NTU2NzMxNCxcclxuICAgICAgICAgICAgeTogNzAuMDEyMjQ4MzYyNDkzNThcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MzU4NTE0LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUGF1bCBNLiBNZWFkb3dzJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNzAsXHJcbiAgICAgICAgICAgIHg6IC0xNzEuMjY5NzU1MzE2Mzg0NyxcclxuICAgICAgICAgICAgeTogMjU2LjU0Nzk0MzkwODg3MTczXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU1ODM1MS0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ1BhdWwgVi4gR29vZGUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNTQsXHJcbiAgICAgICAgICAgIHg6IC0yMzAuMTYxMTQxOTYzOTA5MzYsXHJcbiAgICAgICAgICAgIHk6IC0xMy40MTAzMTQ4NDUwMDE5MTNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzExNTY1LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUGF2aXRyYSBTdWJyYW1hbmlhbScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIwLFxyXG4gICAgICAgICAgICB4OiAtNi4zNzI3NDgzNDc5NDczMzgsXHJcbiAgICAgICAgICAgIHk6IC0yOTcuOTY3MDI2NDkwOTA2OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJ0Q0MjM3NjEtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdQZXRlciBIb25nJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjUsXHJcbiAgICAgICAgICAgIHg6IC0yMDcuMDI5MTM0NDQ0NTg3NTYsXHJcbiAgICAgICAgICAgIHk6IDExMy4yMDQ0NDc3MjA3NzQ2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjE1Mjk4Ny0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ1BldGVyIE1hcmRpbG92aWNoJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTEwLFxyXG4gICAgICAgICAgICB4OiAtMTEzLjcwNTQxNDYyNzYzNDE0LFxyXG4gICAgICAgICAgICB5OiAtNzEuNjM4NjY4Nzg0NDg5MjhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1ODczMDk2LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUGV0ZXIgUy4gTGltJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTksXHJcbiAgICAgICAgICAgIHg6IC00MS40OTcxNTc1OTk0Nzc5LFxyXG4gICAgICAgICAgICB5OiAtMjI5Ljg2MzQ3Mzg0ODYzMDhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzMyMTExLTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUGV0ZXIgU2lhbSBTeSBMaW0gSUlJJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcclxuICAgICAgICAgICAgeDogLTExOS42ODc3NjA4NzE4MTI5MSxcclxuICAgICAgICAgICAgeTogLTI2NC43NDQxMTUzMTQ5MjQyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjg1MDg5NS0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ1BldGVyIFNpYW0gU3kgTGltLCBJSUknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxyXG4gICAgICAgICAgICB4OiAtMTM3LjUxMzI3ODYxODY4OTkyLFxyXG4gICAgICAgICAgICB5OiAtMjUzLjA1MDE1MjYzNDE2MDEzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzE1OTc1MC00JyxcclxuICAgICAgICAgICAgbmFtZTogJ1BoaWxpcCBSb3knLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0NSxcclxuICAgICAgICAgICAgeDogLTU1LjkxNTMzMTgzNzMzNDU4NCxcclxuICAgICAgICAgICAgeTogMjY1LjQ1MjczOTk4NTkwNTlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MTAzMDMzLTcnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUGhpbGxpcCBKb2huIFBsYW50ZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDc2LFxyXG4gICAgICAgICAgICB4OiAtODkuNTYxNzI2MzQyNzM5MzgsXHJcbiAgICAgICAgICAgIHk6IDEyOC40OTM1OTk1NDAyMDkzN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU5Nzg4MjktMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdQaS1ZdSBDaHVuZycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE1LFxyXG4gICAgICAgICAgICB4OiA3OS4wMzMzMDMwOTc2ODMzMyxcclxuICAgICAgICAgICAgeTogLTE2Ni44OTYyMDMwMTQwMjY5NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYwOTIwODMtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdQcmFzaGFudCBDaGF0dGVyamVlJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTIsXHJcbiAgICAgICAgICAgIHg6IC0xMjcuOTgxNjYyNDg5NzgwNDUsXHJcbiAgICAgICAgICAgIHk6IC0yMjYuMDk1OTAzMjI5ODMwNjdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3MzQwNDExLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUmFjaGFlbCBMLiBDb29rJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcclxuICAgICAgICAgICAgeDogMTQ1LjU4MTY0MzQ5NTM2ODUsXHJcbiAgICAgICAgICAgIHk6IC0xODUuOTExNTIyNzg0ODI1MVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQ4NzI2MDMtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSYWxwaCBTdGVhcm5zJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogODIsXHJcbiAgICAgICAgICAgIHg6IC0xNy42MzgyNjExMzk3NDAwNzcsXHJcbiAgICAgICAgICAgIHk6IDMxMS44NzQ0MDA5NjAxNjIzNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4MzY1NDAtNicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSYW5keSBIb2ZmbWFuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNjYsXHJcbiAgICAgICAgICAgIHg6IC05Ni42NzkxNTA2MjI3MTUyMyxcclxuICAgICAgICAgICAgeTogLTE4Ljg2MzI2NzY0MjMzODM1N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQ3OTg1OTQtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSaWNoYXJkIEEuIEhpbGxzdGVhZCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDU2LFxyXG4gICAgICAgICAgICB4OiAyMjAuOTQwNDMwNDMyNTg4NyxcclxuICAgICAgICAgICAgeTogMTU1LjkyMTI0OTMyMTcxNzFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MDk3MTIyLTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnUmljaGFyZCBFLiBQdXJ2aXMnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMixcclxuICAgICAgICAgICAgeDogLTIzMS42MjIxMTczNDg1MzEyLFxyXG4gICAgICAgICAgICB5OiA1OC41MzI3ODg1OTM0MDY0NjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MjY4ODAzLTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUmljaGFyZCBHb3JtYW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMCxcclxuICAgICAgICAgICAgeDogNzYuNzE2Njc0MzkyMjgyMDIsXHJcbiAgICAgICAgICAgIHk6IC0yNDcuNDA3NTY4NDc1NDMzNjZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MjcxNTQzLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUmljaGFyZCBMLiBHcmFudCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIyLFxyXG4gICAgICAgICAgICB4OiAxMDguMzc3OTAyNjE2MzgxNTYsXHJcbiAgICAgICAgICAgIHk6IC0xMDkuNTM0Mjk3NzQwMTEyMDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MDkyMDgzLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUm9iZXJ0IEEuIEJyb2RlcnNlbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIxLFxyXG4gICAgICAgICAgICB4OiAtMTE2Ljc4Njc3MzI5MzgwMzMyLFxyXG4gICAgICAgICAgICB5OiAtMjExLjc0MzEyMTcyNzU0ODk4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTg3MzA5Ni0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ1JvYmVydCBCcm9kZXJzb24nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxyXG4gICAgICAgICAgICB4OiAzMi40NzA1NjQzNjI3MTAzMzQsXHJcbiAgICAgICAgICAgIHk6IC0yMTIuMzU2NTAzNzYxNjkwNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU5NjM5NTMtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSb2JlcnQgQ3JhbScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXHJcbiAgICAgICAgICAgIHg6IDM5LjczMTY1NjIyODAzNjA0NCxcclxuICAgICAgICAgICAgeTogLTE1OS43MDExNzQxOTY2Mjg1M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQzNjIzODctMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSb3kgQ2xhcmsnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMyxcclxuICAgICAgICAgICAgeDogLTE0My4zODA2NTQ2NzgwNTU4MyxcclxuICAgICAgICAgICAgeTogLTgzLjE4NjQ2OTMyMzMyODk0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTQxNzc3MC04JyxcclxuICAgICAgICAgICAgbmFtZTogJ1J5byBIYXlhc2hpJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNzEsXHJcbiAgICAgICAgICAgIHg6IDEwOS41NjkwMDI3MDE4MTMyMixcclxuICAgICAgICAgICAgeTogOTQuMjY5MDc3NjE5MzMzOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYwODE4NzUtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTYW5qb3kgQ2hhdHRlcmplZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIsXHJcbiAgICAgICAgICAgIHg6IC0xNjguNTUzNTE3MTkzNzMyNzQsXHJcbiAgICAgICAgICAgIHk6IC01NS4wMDM5MTMyNzcxMDA3MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU0MTYyNTUtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTY290dCBBLiBCZXJnZW1hbm4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMDYsXHJcbiAgICAgICAgICAgIHg6IDIzNi45ODQzNjU4NDM3ODMxLFxyXG4gICAgICAgICAgICB5OiAtMTU0LjUzODUzMjg5MzYzMTRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzI0Mzk5LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnU2hhbmthciBTLiBOYXRoYW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxyXG4gICAgICAgICAgICB4OiA4LjAxNzY1MTMyNjcxMzgwMyxcclxuICAgICAgICAgICAgeTogLTEzMi42NzQzOTIwNTYzMjY2NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4MDQzMzAtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTaGFubm9uIEpvbmVzJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNSxcclxuICAgICAgICAgICAgeDogNzEuMTMyMDY5ODE4NDQ2MzEsXHJcbiAgICAgICAgICAgIHk6IC0yNTguNDk5MzQyMzk5NDEzNzZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODg3NzM2LTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU2hhbnRoaSBHYW5lc2FuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNCxcclxuICAgICAgICAgICAgeDogLTM2Ljk5NDg4MjEwNzU2NDA3NCxcclxuICAgICAgICAgICAgeTogMTc2LjQ0MzUyMTAzOTUzMTZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MTgzNTg5LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU2hpbiBLaW0nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0NyxcclxuICAgICAgICAgICAgeDogLTI4Ny42NzI2NjQ2NjY3OTgsXHJcbiAgICAgICAgICAgIHk6IDQ1LjgxMjYxMTY0MTM5MDY3NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY2NTQwMzItNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTb25neGlhbmcgV2VpJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNyxcclxuICAgICAgICAgICAgeDogMTMyLjMxOTkxNzEwNDQwODIsXHJcbiAgICAgICAgICAgIHk6IDg2LjMzMzY5MjAxODExODc1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjc4MzUyNC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1N0ZXBoZW4gQy4gQW5kZXJzb24nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxyXG4gICAgICAgICAgICB4OiA2Mi42MjAwNzIwMTM5NTA1LFxyXG4gICAgICAgICAgICB5OiAzMDIuNDk2MTg4NTcwODMwMjdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1Nzc0MzU3LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3RldmVuIE0uIEhvZmZiZXJnJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTA2LFxyXG4gICAgICAgICAgICB4OiAtMjk4LjE0OTgxNTc4OTM5OTQ0LFxyXG4gICAgICAgICAgICB5OiA4OC41NjgwMzUxMDQ1MDM5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTU5NDE2OS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ1N0ZXZlbiBQLiBIb3RlbGxpbmcnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzMDYsXHJcbiAgICAgICAgICAgIHg6IDE3OC4zMTM1NjIyNDQyMDc1NixcclxuICAgICAgICAgICAgeTogLTI1NS40MzA0MjUwNzQ4MDU3OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1MjYzMzUtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTdXNhbiBNLiBUcmV5eicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE1LFxyXG4gICAgICAgICAgICB4OiAtMjc5LjIzMzg0NzEzMDQxODMsXHJcbiAgICAgICAgICAgIHk6IDEzOS45OTI1NzMzNjcyNzk0NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY2MzkyNDYtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUYXRzdXlhIEhvbmRhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTA5LFxyXG4gICAgICAgICAgICB4OiAyNTAuMDYwMjA3NzIwMTY4NCxcclxuICAgICAgICAgICAgeTogNjYuMzM0MDEzMjIyNjg2MzdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MzQ1NjM5LTYnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVGF0c3V5YSBJd2FzYWtpJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTE2LFxyXG4gICAgICAgICAgICB4OiA4Ni4zMzM2MTM0NDcxNzczLFxyXG4gICAgICAgICAgICB5OiAxNTcuODI1OTM0NjIwNjA3NDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MzI0NTY4LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVGhhbmggRGllYycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXHJcbiAgICAgICAgICAgIHg6IC03OC4wMzE0NzQ2OTEyNTE4NCxcclxuICAgICAgICAgICAgeTogLTI3Mi41ODg2NjA2ODYxNzE4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTcxNTQ1MC0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ1Rob21hcyBNLiBSb3Rod2VpbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEzLFxyXG4gICAgICAgICAgICB4OiAtMTkuMTY1MTAxMDEzMjQxNDkzLFxyXG4gICAgICAgICAgICB5OiAtMjA4LjE4MDQ2NDA4NDA2MTlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICdSRTM5ODQxLTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVG9kZCBQaGlsbGlwIE9tYWl0cycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDcsXHJcbiAgICAgICAgICAgIHg6IDEyOS45OTMwNjg1NDYyNTAwNyxcclxuICAgICAgICAgICAgeTogLTIyLjA0OTkwMTYxNTAzODQwOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4NTA5NDktMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUb20gQWJzaGlyZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXHJcbiAgICAgICAgICAgIHg6IDE0MC4yNjU2NjkwMjcxNTIyOCxcclxuICAgICAgICAgICAgeTogLTE1My4zOTE3Mjk0ODQzOTU4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzA2MTAxNC02JyxcclxuICAgICAgICAgICAgbmFtZTogJ1Rvc2hpbyBLYW1peWEnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyNSxcclxuICAgICAgICAgICAgeDogOS4xMjYyNzEyNzYyNTQzNzcsXHJcbiAgICAgICAgICAgIHk6IDEwMS44MjI5ODYzMDU1NjMyNlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3MTgzNjEtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdWaWpheSBSLiBCYXNhbmknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA5LFxyXG4gICAgICAgICAgICB4OiAtMjAxLjM4MjI3MTczMjA1MDI3LFxyXG4gICAgICAgICAgICB5OiAyMDguNzQzMjcwNDk5MjYzMjhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzE4MzYxLTUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVml0YWx5IFMuIFJldnNpbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEzLFxyXG4gICAgICAgICAgICB4OiAtMTk4LjcwNDczMDc4MDI0OTgzLFxyXG4gICAgICAgICAgICB5OiAxNTIuNDA1MjIxMTY2NTk0M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY5Nzg5MjEtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdXaWxsaWFtIEIuIFdlaXNlbmJ1cmdoLCBJSScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE1MixcclxuICAgICAgICAgICAgeDogMjQ4LjI0MzkzOTA2MjkzNzMzLFxyXG4gICAgICAgICAgICB5OiAtOTAuMjkzNDI1MjQzNjkzMjRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MjU3OTcxLTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnV2lsbGlhbSBQLiBWYW4gQW50d2VycCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDY5LFxyXG4gICAgICAgICAgICB4OiAtMjQzLjUyMDk5MTkxNjc3OSxcclxuICAgICAgICAgICAgeTogMjMuNDE3Njc5OTc3OTExMzI3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjgyOTY1NS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1hpYW9mZWkgSHVhbmcnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1LFxyXG4gICAgICAgICAgICB4OiA4OS45ODg3NDE2MTAzODU2LFxyXG4gICAgICAgICAgICB5OiAtMTg3Ljc5NDEzOTk4MTYzNDgzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTI4MzQ1Mi0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1lpLUNoaSBTaGloJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzMsXHJcbiAgICAgICAgICAgIHg6IC0zMjMuNzEzNTk2NDE4NzExNjMsXHJcbiAgICAgICAgICAgIHk6IDIzLjkwODkzNjU4NjQ5NDA4NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU5MDE4OTYtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdZb3JhbSBHYWwnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3NixcclxuICAgICAgICAgICAgeDogLTEwNy4yMzIyNTUxMDYyMDQ4OSxcclxuICAgICAgICAgICAgeTogMTI0LjczNTQxNzM5MDI2MTEyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDU3MzQ3Mi0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1lvc2hpaGlybyBJdG8nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxODksXHJcbiAgICAgICAgICAgIHg6IDExOC4yMDI1MDkzODM4Mzg5MixcclxuICAgICAgICAgICAgeTogMjg3Ljk2MTUzMjY0MzQyODNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1ODU1OTU3LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnWmhlbmcgWXVhbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDU4LFxyXG4gICAgICAgICAgICB4OiAxMzguMDkyMDY5NTIxNzMxOSxcclxuICAgICAgICAgICAgeTogMTI0LjA2NDQwMTE3OTc2OTNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfWjU5YVVCR3RaOVA1UXpkRmlLbVonLFxyXG4gICAgICAgICAgICBuYW1lOiAnQWJsYWlzZSBMaW1pdGVkJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMixcclxuICAgICAgICAgICAgeDogLTE5MC40ODIxMTMwMDEwNzQyLFxyXG4gICAgICAgICAgICB5OiAtMjM2LjUzNjE5Njk4NTM5NDg3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnXzR6TzJCYzA4eDU2WGpEcTVUZUJwJyxcclxuICAgICAgICAgICAgbmFtZTogJ0FjY2VudHVyZSBMTFAnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMTAsXHJcbiAgICAgICAgICAgIHg6IDE3Mi44NjYwMjMwMDgzMzk1NyxcclxuICAgICAgICAgICAgeTogMjUzLjcwMzMwODE1NDE2NTg1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX2J3cTgzamJjY0txRjRqSnJQY2FSJyxcclxuICAgICAgICAgICAgbmFtZTogJ0FkdmFuY2VkIEJpb25pY3MgQUcnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA2MzMsXHJcbiAgICAgICAgICAgIHg6IC0xNzYuOTE0Njg0NzI5ODE1NTUsXHJcbiAgICAgICAgICAgIHk6IDIzMy42MzM4ODM1MjU5NjE5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX0lEVWJTMDlaUjBKaEo4akZFcHRUJyxcclxuICAgICAgICAgICAgbmFtZTogJ0FwcGxlIEluYy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMTAyMyxcclxuICAgICAgICAgICAgeDogMTUxLjY4MjQ2NjQxNTc4ODY3LFxyXG4gICAgICAgICAgICB5OiAtMjIyLjEyNDg3NDg4MTQ0ODlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfRWhZRlBJSkVtWVFZUm9ZdnNucHknLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ2Fub24gS2FidXNoaWtpIEthaXNoYScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDc0NTk2LFxyXG4gICAgICAgICAgICB4OiA0OS40ODIyMzkyMDU3MzI5NixcclxuICAgICAgICAgICAgeTogMTM0LjA5MjI4ODczMTE1NTkyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX0ltZWc5VzZQMVRFNkkyUXV0UzR5JyxcclxuICAgICAgICAgICAgbmFtZTogJ0Nhc2lvIENvbXB1dGVyIENvLiwgTHRkLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQ1MjEsXHJcbiAgICAgICAgICAgIHg6IC0xNzkuODE3NTkzNDEyMDUxNSxcclxuICAgICAgICAgICAgeTogLTE0Mi43MTgyODg1MjkyMTA0NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ184Y3NNZ3Rnbk4wbVJFWnBOUDFKaScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDZXJlYnJhbCBWYXNjdWxhciBBcHBsaWNhdGlvbnMsIEluYy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0LFxyXG4gICAgICAgICAgICB4OiAyNjguODAwNDU0MTQ0NDM4NyxcclxuICAgICAgICAgICAgeTogMTY0LjUyMzY5NDc4MzE1NjgzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnXzBlVHIzWElCakFLcFhrQzY4MjNyJyxcclxuICAgICAgICAgICAgbmFtZTogJ0Nlcm1ldCwgSW5jLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDcsXHJcbiAgICAgICAgICAgIHg6IC00OC40MDM3Mjc2ODk1NTE1NixcclxuICAgICAgICAgICAgeTogMjA1LjQ0MDI1ODgzODI2MDY2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnXzEwN1dLTlBidkRES3JaQmxtdzhVJyxcclxuICAgICAgICAgICAgbmFtZTogJ0NvbnRpZ28gU29mdHdhcmUsIEluYy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyLFxyXG4gICAgICAgICAgICB4OiAyOTkuMzE3NDM1OTA5NTk1MyxcclxuICAgICAgICAgICAgeTogNDguMDM0OTI0Njk4MDA4MzNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfcHBFbGtFdFF2RnRHNkE0NzU0VUknLFxyXG4gICAgICAgICAgICBuYW1lOiAnRWFzdG1hbiBLb2RhayBDb21wYW55JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjE1MzksXHJcbiAgICAgICAgICAgIHg6IDIxMS4zNzUyNTk0MTM1Mjc4NixcclxuICAgICAgICAgICAgeTogMjE3LjU4Mjg3Nzg2NTMyMTA4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnXzBqUFdNN1lxaHRYbTBsbTNmbTFZJyxcclxuICAgICAgICAgICAgbmFtZTogJ0VNQyBDb3Jwb3JhdGlvbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQ5NzYsXHJcbiAgICAgICAgICAgIHg6IC0xODkuNzAxNTYyNzQ4Mzg5NzMsXHJcbiAgICAgICAgICAgIHk6IC0xMTAuMDE1NTk4OTA0Mzc2MjhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfV2gyY25PSXpLbGh6anVxVm1PcVknLFxyXG4gICAgICAgICAgICBuYW1lOiAnRW5lY3RvIEFCJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcclxuICAgICAgICAgICAgeDogMjQzLjY3NjU0MTIyNDYyNTgsXHJcbiAgICAgICAgICAgIHk6IC0xMzEuMjA5MDMxMTg2NjA5OVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19YdTZnWFNzbHREQlpUQWhNRkJXRCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdFdGhpY29uIEVuZG8tU3VyZ2VyLCBJbmMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcclxuICAgICAgICAgICAgeDogMjI0LjcxMjQzNTgwMzE2NDc3LFxyXG4gICAgICAgICAgICB5OiAzOS42MDk4NDI1MjU0Nzg2NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdFdGhpY29uIEVuZG8tU3VyZ2VyeSwgSW5jLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIxOTQsXHJcbiAgICAgICAgICAgIHg6IDE3MS4wNzQzNzAyMjQ3NjY0LFxyXG4gICAgICAgICAgICB5OiAtNTUuMDM2ODA3MDk4OTQ2MDlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfdlM2cmNLeWMycU4zckZkWDBQMksnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSGV3bGV0dC1QYWNrYXJkIERldmVsb3BtZW50IENvbXBhbnksIEwuUC4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzNTExOCxcclxuICAgICAgICAgICAgeDogLTkwLjMxMDM5Njg1MjY2OTQsXHJcbiAgICAgICAgICAgIHk6IC01MC4wNTIxNjI4OTI5NDU0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAncGVyX3RYMmUyeVZMZ3lOZ29iRXB6V0tUJyxcclxuICAgICAgICAgICAgbmFtZTogJ0hpZGVvIE9obm8nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0LFxyXG4gICAgICAgICAgICB4OiAtMzkuNTM2MTI4NDI3MDQ0MzYsXHJcbiAgICAgICAgICAgIHk6IC0yMC4yNzAyNzMzNTQ5NzcyNTJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfTUt2Ym5DY3lQdWRYZXhVdnNTd0YnLFxyXG4gICAgICAgICAgICBuYW1lOiBcIkhvbGRlbidzIEZvdW5kYXRpb24gU2VlZHMsIEluYy5cIixcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogODMsXHJcbiAgICAgICAgICAgIHg6IDI0MC4wOTk5MDU5ODUxOTA4LFxyXG4gICAgICAgICAgICB5OiAtMjA2LjAyNjM3NjE0ODA2MTI1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX2ZBMGF6cW9CR0V6b1BveTg1Snl2JyxcclxuICAgICAgICAgICAgbmFtZTogJ0lOVFVJVElWRSBTVVJHSUNBTCBPUEVSQVRJT05TLCBJTkMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTIwMixcclxuICAgICAgICAgICAgeDogMTUuMzc4ODYyODY1NDQ3NjI0LFxyXG4gICAgICAgICAgICB5OiAyOTAuMjE3ODIyMjg3NTIyM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19EdHRaTXZreXZXM2ZWNm9DVU1URicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKYXBhbiBTY2llbmNlIGFuZCBUZWNobm9sb2d5IEFnZW5jeScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDExNTcsXHJcbiAgICAgICAgICAgIHg6IDEzLjE3MzQ1MDczMTA2MTA4NixcclxuICAgICAgICAgICAgeTogNTYuNDg2MTQwOTk1Nzc3NjdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfYzV2eUJ6SzdpaWtrVTREalFGSFQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmFwYW4gU2NpZW5jZSBhbmQgVGVjaG5vbG9neSBDb3Jwb3JhdGlvbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQxOCxcclxuICAgICAgICAgICAgeDogNjMuNTYzMTcwNTgyNzUsXHJcbiAgICAgICAgICAgIHk6IDYuMjczNjczNTE5MDkwNzUzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX0Z2Z3ZHRmU4SlowaVlsWjgwd2VGJyxcclxuICAgICAgICAgICAgbmFtZTogJ0tvbmlua2xpamtlIFBoaWxpcHMgRWxlY3Ryb25pY3MgTi5WLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE3MTM4LFxyXG4gICAgICAgICAgICB4OiAtMTIzLjI0MTc5MTIzNzkwMTkxLFxyXG4gICAgICAgICAgICB5OiAyNzAuOTk3NDY1NDg0NDEwMTZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfWGNxQ2p0VDhwaThNazNValFsRHQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTEcgRWxlY3Ryb25pY3MgSW5jLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMyNzI1LFxyXG4gICAgICAgICAgICB4OiAtMjc3LjM0NjAyMjk5ODQ1NTgsXHJcbiAgICAgICAgICAgIHk6IDcuMTMzNjk4MjIyNTQzMDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdwZXJfRElqVVRNN2xIaERzQXoydThqaU8nLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWFzYXNoaSBLYXdhc2FraScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXHJcbiAgICAgICAgICAgIHg6IDE5Ljg5NTQzNjU5NjY2MjkwOCxcclxuICAgICAgICAgICAgeTogLTEwLjcxNzE3ODI1MDkwMDkxOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19HVk1sTFZid0NEU2lxUDlPZzhUbicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNZWR0cm9uaWMgTWluaU1lZCwgSW5jLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDgwMCxcclxuICAgICAgICAgICAgeDogLTE4My43NDAyMzQxOTA1NzQxNyxcclxuICAgICAgICAgICAgeTogMzcuNjg3MjE4NzY5ODM5MDg1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX1F3OEVzck4wTTUyblZRVU02dnNWJyxcclxuICAgICAgICAgICAgbmFtZTogJ01vbnNhbnRvIFRlY2hub2xvZ3kgTExDJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogODY4OSxcclxuICAgICAgICAgICAgeDogMTkuNzYzOTAxNDg4MzUyNjczLFxyXG4gICAgICAgICAgICB5OiAxOTYuNjIyMzY4NjI1ODk3NzRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfajVVNUlFYTFGSWJndHI3aU5zUU0nLFxyXG4gICAgICAgICAgICBuYW1lOiAnTXVyYXRhIE1hbnVmYWN0dXJpbmcgQ28uLCBMdGQuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNzM0MixcclxuICAgICAgICAgICAgeDogODcuNjQ4NzgxOTcxMDg4MTcsXHJcbiAgICAgICAgICAgIHk6IDI5MS4xMDIzMTk1ODcyMzUyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnXzFwNEZXRW9JdGp5S2J3VHBDSm9sJyxcclxuICAgICAgICAgICAgbmFtZTogJ05ldHdvcmsgQXBwbGlhbmNlLCBJbmMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNTMwLFxyXG4gICAgICAgICAgICB4OiAtMjIyLjI5MjAzNzIxMTgwNTIsXHJcbiAgICAgICAgICAgIHk6IDE0OS4wODM3MjE1NTI3MjA2MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19BVE9XSGQ0R0dhb2gxNHp1dFhxNycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdQb3dlciBNZWRpY2FsIEludGVydmVudGlvbnMsIEluYy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzMCxcclxuICAgICAgICAgICAgeDogMTA4Ljg4MTEwMzk5NzQ5NzA2LFxyXG4gICAgICAgICAgICB5OiAxODYuODUzMzg3ODI2MjY1OVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19rOFY3YzVnbm1DN1NWbXVwNVZ1NycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSYWluZGFuY2UgQ29tbXVuaWNhdGlvbnMsIEluYy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxyXG4gICAgICAgICAgICB4OiA2NS4xNTcxNzY5NDI2NDQxNyxcclxuICAgICAgICAgICAgeTogODMuNDE5NDM2Mzc4MjA0MDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfMjQyaEplZ3dmUUNlUDloc2Z3cFcnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUmlnaHQgTm93IFRlY2hub2xvZ2llcywgSW5jLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIsXHJcbiAgICAgICAgICAgIHg6IDE4Ni44MTk2NTI4MTYwMjI2OCxcclxuICAgICAgICAgICAgeTogLTE4My40MDE3MDI1MTQ1ODUzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnXzZyOXQ3WkE2WVQwMzFPZDRrTVBnJyxcclxuICAgICAgICAgICAgbmFtZTogJ1JpZ2h0bm93IFRlY2hub2xvZ2llcywgSW5jLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEwLFxyXG4gICAgICAgICAgICB4OiAtMjMxLjczNjE1ODgwMTIyMjM2LFxyXG4gICAgICAgICAgICB5OiAtNzQuMDk5MTY5NzA5MzQyNTJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfMklGOTd6VnltU3VyYVNuVUFYbXEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU2FueW8gRWxlY3RyaWMgQ28uLCBMdGQuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogODM4MyxcclxuICAgICAgICAgICAgeDogLTI4My45MDI4MjUzNjA4OTQ2LFxyXG4gICAgICAgICAgICB5OiAtMTI3Ljg3MjUzMzgxOTY5MTcxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX3BsWmJMeGl5c0VTYmFJOXBPZXltJyxcclxuICAgICAgICAgICAgbmFtZTogJ1NFTUlDT05EVUNUT1IgRU5FUkdZIExBQk9SQVRPUlkgQ08uLCBMVEQuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTM4ODUsXHJcbiAgICAgICAgICAgIHg6IDI1Ni4yMjgzOTg3NjM3OTA1LFxyXG4gICAgICAgICAgICB5OiAxMjQuNDYxNDE2OTYwNjY1MjJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfQ01XY29DSldQT2Zpc0xXckt2eWQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU2hhcnAgS2FidXNoaWtpIEthaXNoYScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIyNTQwLFxyXG4gICAgICAgICAgICB4OiA0LjA5NTU2MDQwNjQ4MjY3MSxcclxuICAgICAgICAgICAgeTogLTMyLjEzNjE4NDgyNTc5OTM4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyxcclxuICAgICAgICAgICAgbmFtZTogJ1NpZWJlbCBTeXN0ZW1zLCBJbmMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjk4LFxyXG4gICAgICAgICAgICB4OiAtMzMuOTE5OTQ3NTIzMTQ4NDIsXHJcbiAgICAgICAgICAgIHk6IC0yMTIuNTk5NDI4ODk4ODgxMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19KOFZuQXpGcUVqV2d4cTRldjcxeicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTdGFyaW9uIEluc3RydW1lbnRzIENvcnBvcmF0aW9uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjAsXHJcbiAgICAgICAgICAgIHg6IDE3OC45ODQxNjY1NDExNjM0NixcclxuICAgICAgICAgICAgeTogMTY5LjU0ODIxMjExMTkwMjc2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX20ydE5QSmtBMmcxQVdPYzd1elMxJyxcclxuICAgICAgICAgICAgbmFtZTogJ1RoZXJhU2Vuc2UsIEluYy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1MyxcclxuICAgICAgICAgICAgeDogLTEyNS45MTQ1OTk4NDYwODUxLFxyXG4gICAgICAgICAgICB5OiAxMzIuNDE3MzkwNTQ1MTYxMTdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfSmpyTTZVbWVPWTBRNU1tb05pUDgnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVE9LWU8gSU5TVElUVVRFIE9GIFRFQ0hOT0xPR1knLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzOTUsXHJcbiAgICAgICAgICAgIHg6IDE4LjYxNDEzMDA4MTE2NjQ2LFxyXG4gICAgICAgICAgICB5OiAxNjUuMjEyNTM2OTk1NTQyMTRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfZXdWc0N1dHBSekQ5cFQwN2tCb0UnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVHljbyBIZWFsdGNhcmUgR3JvdXAgTFAnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1LFxyXG4gICAgICAgICAgICB4OiAtNjcuMjU0MzA1MjY3NDIxMDcsXHJcbiAgICAgICAgICAgIHk6IDMwOC42MTQ5MjgyMDQxNTc5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnXzV3Tk5ySjR6RlE1S1E4T1duelJDJyxcclxuICAgICAgICAgICAgbmFtZTogJ1VuaXRlZCBTdGF0ZXMgU3VydGljYWwgQ29ycG9yYXRpb24nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxyXG4gICAgICAgICAgICB4OiAyODIuNzgxMDA5MjI0NDMxLFxyXG4gICAgICAgICAgICB5OiAtNTIuOTgxNTkwMTE1MDg3MTQ0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnXzN2STJaNWtDMVNhU2xiVUJvT0JUJyxcclxuICAgICAgICAgICAgbmFtZTogJ1dlYkV4IENvbW11bmljYXRpb25zLCBJbmMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjIsXHJcbiAgICAgICAgICAgIHg6IDE4Ny4zNjc2Mzk1MTEyODcxNCxcclxuICAgICAgICAgICAgeTogMTAxLjIwODQ5ODQ3MDgwMTgxXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIGxpbmtzOiBbXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTE2MjI3JywgdGFyZ2V0OiAnNTM1ODUxNC0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjUxNjIyNycsIHRhcmdldDogJzU3NTU3MzctMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1MTYyMjcnLCB0YXJnZXQ6ICc1OTQ4MDA2LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTE2MjI3JywgdGFyZ2V0OiAnNjUxNjIyNy00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjUxNjIyNycsIHRhcmdldDogJ29yZ19id3E4M2piY2NLcUY0akpyUGNhUicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1MzU5MDknLCB0YXJnZXQ6ICc2NTM1OTA5LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTM1OTA5JywgdGFyZ2V0OiAnb3JnXzEwN1dLTlBidkRES3JaQmxtdzhVJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU0OTkwOCcsIHRhcmdldDogJzYzOTM2MDUtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NDk5MDgnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTUzNTYzJywgdGFyZ2V0OiAnNTcxNTQ1MC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1MzU2MycsIHRhcmdldDogJzU3MTU0NTAtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTM1NjMnLCB0YXJnZXQ6ICc2NTUzNTYzLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTUzNTYzJywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1ODMyMCcsIHRhcmdldDogJzQ4MDk2OTctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTgzMjAnLCB0YXJnZXQ6ICc0ODYzNDI1LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTU4MzIwJywgdGFyZ2V0OiAnNTA5NzEyMi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1ODMyMCcsIHRhcmdldDogJ29yZ19HVk1sTFZid0NEU2lxUDlPZzhUbicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTgzNTEnLCB0YXJnZXQ6ICc1MDk3MTIyLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTU4MzUxJywgdGFyZ2V0OiAnNTIzNzE3OC0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1ODM1MScsIHRhcmdldDogJzUyNTc5NzEtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTgzNTEnLCB0YXJnZXQ6ICc2NDI0ODQ3LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTU4MzUxJywgdGFyZ2V0OiAnNjU1ODM1MS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1ODM1MScsIHRhcmdldDogJzY1NTgzNTEtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTgzNTEnLCB0YXJnZXQ6ICc2NTU4MzUxLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTU4MzUxJywgdGFyZ2V0OiAnNjU1ODM1MS04JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1ODM1MScsIHRhcmdldDogJ29yZ19HVk1sTFZid0NEU2lxUDlPZzhUbicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjA0NjEnLCB0YXJnZXQ6ICc1OTE4MTU5LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTYwNDYxJywgdGFyZ2V0OiAnNTkxODE1OS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2MzE3NCcsIHRhcmdldDogJzQyNTMwNjEtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjMxNzQnLCB0YXJnZXQ6ICc0OTAyNjcxLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTYzMTc0JywgdGFyZ2V0OiAnNDk5NzI2Mi0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2MzE3NCcsIHRhcmdldDogJzU5MjUyMjQtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjMxNzQnLCB0YXJnZXQ6ICdvcmdfQ01XY29DSldQT2Zpc0xXckt2eWQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTYzMTc0JywgdGFyZ2V0OiAncGVyX0RJalVUTTdsSGhEc0F6MnU4amlPJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2MzE3NCcsIHRhcmdldDogJ3Blcl90WDJlMnlWTGd5TmdvYkVweldLVCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjU1MDknLCB0YXJnZXQ6ICc0MDgyNjAyLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTY1NTA5JywgdGFyZ2V0OiAnNTA0MTA4Ni00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2NTUwOScsIHRhcmdldDogJzUzMDY2MjMtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjU1MDknLCB0YXJnZXQ6ICc1NTMzMjM4LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTY1NTA5JywgdGFyZ2V0OiAnNTUzNDEzMi0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2NTUwOScsIHRhcmdldDogJzU2MTY1MzItMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjU1MDknLCB0YXJnZXQ6ICc1NzIyOTk3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTY1NTA5JywgdGFyZ2V0OiAnNTkwMTg5Ni0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2NTUwOScsIHRhcmdldDogJzYxMDMwMzMtNycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjU1MDknLCB0YXJnZXQ6ICc2MTc1NzUyLTknIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTY1NTA5JywgdGFyZ2V0OiAnb3JnX20ydE5QSmtBMmcxQVdPYzd1elMxJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU3MTI4MicsIHRhcmdldDogJzYwODE1MTgtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NzEyODInLCB0YXJnZXQ6ICdvcmdfNHpPMkJjMDh4NTZYakRxNVRlQnAnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTc0NjM1JywgdGFyZ2V0OiAnNTcxNTQ1MC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU3NDYzNScsIHRhcmdldDogJzU3MTU0NTAtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NzQ2MzUnLCB0YXJnZXQ6ICc1OTYzOTUzLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTc0NjM1JywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU3NzcyNicsIHRhcmdldDogJzY1Nzc3MjYtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1Nzc3MjYnLCB0YXJnZXQ6ICc2NTc3NzI2LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTc3NzI2JywgdGFyZ2V0OiAnNjU3NzcyNi0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU3NzcyNicsIHRhcmdldDogJzY1Nzc3MjYtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1Nzc3MjYnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTg3ODM1JywgdGFyZ2V0OiAnNjQzMzkyMS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU4NzgzNScsIHRhcmdldDogJzY1MjYzMzUtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MDEwODcnLCB0YXJnZXQ6ICc1MjYxMDM3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjAxMDg3JywgdGFyZ2V0OiAnNjYwMTA4Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYwMTA4NycsIHRhcmdldDogJ29yZ18zdkkyWjVrQzFTYVNsYlVCb09CVCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MDIyNTInLCB0YXJnZXQ6ICc0ODkwNjExLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjAyMjUyJywgdGFyZ2V0OiAnb3JnX0o4Vm5BekZxRWpXZ3hxNGV2NzF6JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYwNDExNycsIHRhcmdldDogJzU4NzMwOTYtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MDQxMTcnLCB0YXJnZXQ6ICc1ODczMDk2LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjA0MTE3JywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYwNDEyOCcsIHRhcmdldDogJzYzMjQ1NjgtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MDQxMjgnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjA2NzQ0JywgdGFyZ2V0OiAnNjYwNjc0NC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYwNjc0NCcsIHRhcmdldDogJ29yZ180ek8yQmMwOHg1NlhqRHE1VGVCcCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MDkxNTAnLCB0YXJnZXQ6ICc1OTYzOTUzLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjA5MTUwJywgdGFyZ2V0OiAnNjMzNjEzNy0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYwOTE1MCcsIHRhcmdldDogJzYzMzYxMzctMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MDkxNTAnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjIxODM0JywgdGFyZ2V0OiAnNTk0NDc5MS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYyMTgzNCcsIHRhcmdldDogJzY2MjE4MzQtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MjE4MzQnLCB0YXJnZXQ6ICdvcmdfazhWN2M1Z25tQzdTVm11cDVWdTcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjQxNTMzJywgdGFyZ2V0OiAnNDgwOTY5Ny0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY0MTUzMycsIHRhcmdldDogJzQ4NjM0MjUtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NDE1MzMnLCB0YXJnZXQ6ICc1MDk3MTIyLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjQxNTMzJywgdGFyZ2V0OiAnb3JnX0dWTWxMVmJ3Q0RTaXFQOU9nOFRuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY0NDUzMicsIHRhcmdldDogJzQxMjcyMjctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NDQ1MzInLCB0YXJnZXQ6ICc0MjgzMDI0LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjQ0NTMyJywgdGFyZ2V0OiAnNTE3NjUwMi0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY0NDUzMicsIHRhcmdldDogJ0QyNjM5ODctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NDQ1MzInLCB0YXJnZXQ6ICdEMzA0MjM0LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjQ0NTMyJywgdGFyZ2V0OiAnUkUyODkzMi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY0NDUzMicsIHRhcmdldDogJ29yZ181d05Ocko0ekZRNUtROE9XbnpSQycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NTQwMzInLCB0YXJnZXQ6ICc1MjYxMDM3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjU0MDMyJywgdGFyZ2V0OiAnNTg1NTk1Ny0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY1NDAzMicsIHRhcmdldDogJzY2MDEwODctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NTQwMzInLCB0YXJnZXQ6ICc2NjU0MDMyLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjU0MDMyJywgdGFyZ2V0OiAnb3JnXzN2STJaNWtDMVNhU2xiVUJvT0JUJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY1NjE5MycsIHRhcmdldDogJzQ4OTIyNDQtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NTYxOTMnLCB0YXJnZXQ6ICc1MjcxNTQzLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjU2MTkzJywgdGFyZ2V0OiAnNTMyOTY1NS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY1NjE5MycsIHRhcmdldDogJzU0MDk0OTgtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NTYxOTMnLCB0YXJnZXQ6ICc1NzA3MzY5LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjU2MTkzJywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY2NTY0OCcsIHRhcmdldDogJzY2NjU2NDgtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NjU2NDgnLCB0YXJnZXQ6ICc2NjY1NjQ4LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjY1NjQ4JywgdGFyZ2V0OiAnNjY2NTY0OC0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY2NTY0OCcsIHRhcmdldDogJzY2NjU2NDgtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NjU2NDgnLCB0YXJnZXQ6ICc2NjY1NjQ4LTUnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjY1NjQ4JywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY2NTY1NScsIHRhcmdldDogJzY0MzQ1NTAtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NjU2NTUnLCB0YXJnZXQ6ICc2NjY1NjU1LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjY1NjU1JywgdGFyZ2V0OiAnb3JnXzZyOXQ3WkE2WVQwMzFPZDRrTVBnJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY4NDQzOCcsIHRhcmdldDogJzU4NzMwOTYtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2ODQ0MzgnLCB0YXJnZXQ6ICc2MDkyMDgzLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2Njg0NDM4JywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY5MDM4NycsIHRhcmdldDogJzYyODE4OTgtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2OTAzODcnLCB0YXJnZXQ6ICc2NjkwMzg3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjkwMzg3JywgdGFyZ2V0OiAnb3JnX0Z2Z3ZHRmU4SlowaVlsWjgwd2VGJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY5MzIzMicsIHRhcmdldDogJzU0MTYyNTUtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2OTMyMzInLCB0YXJnZXQ6ICdvcmdfTUt2Ym5DY3lQdWRYZXhVdnNTd0YnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2Njk4NjQzJywgdGFyZ2V0OiAnNjI2NDA4Ny0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY5ODY0MycsIHRhcmdldDogJ29yZ19BVE9XSGQ0R0dhb2gxNHp1dFhxNycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MTE1NjUnLCB0YXJnZXQ6ICc2NzExNTY1LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzExNTY1JywgdGFyZ2V0OiAnNjcxMTU2NS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcxMTU2NScsIHRhcmdldDogJzY3MTE1NjUtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MTE1NjUnLCB0YXJnZXQ6ICc2NzExNTY1LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzExNTY1JywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcxNjIzMycsIHRhcmdldDogJzYyNjQwODctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MTYyMzMnLCB0YXJnZXQ6ICdvcmdfQVRPV0hkNEdHYW9oMTR6dXRYcTcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzE4MzYxJywgdGFyZ2V0OiAnNjIyMzIwNS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcxODM2MScsIHRhcmdldDogJzYzNzA1ODQtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MTgzNjEnLCB0YXJnZXQ6ICc2NzE4MzYxLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzE4MzYxJywgdGFyZ2V0OiAnNjcxODM2MS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcxODM2MScsIHRhcmdldDogJzY3MTgzNjEtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MTgzNjEnLCB0YXJnZXQ6ICc2NzE4MzYxLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzE4MzYxJywgdGFyZ2V0OiAnNjcxODM2MS01JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcxODM2MScsIHRhcmdldDogJzY3MTgzNjEtOCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MTgzNjEnLCB0YXJnZXQ6ICdvcmdfMXA0RldFb0l0anlLYndUcENKb2wnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzI0Mzk5JywgdGFyZ2V0OiAnNjcyNDM5OS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcyNDM5OScsIHRhcmdldDogJzY3MjQzOTktMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MjQzOTknLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzI3NTIyJywgdGFyZ2V0OiAnNDI1MzA2MS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcyNzUyMicsIHRhcmdldDogJzQ5MDI2NzEtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3Mjc1MjInLCB0YXJnZXQ6ICdvcmdfYzV2eUJ6SzdpaWtrVTREalFGSFQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzI4NzAyJywgdGFyZ2V0OiAnNjU3NzcyNi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcyODcwMicsIHRhcmdldDogJzY3MTE1NjUtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3Mjg3MDInLCB0YXJnZXQ6ICc2NzExNTY1LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzI4NzAyJywgdGFyZ2V0OiAnNjcxMTU2NS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcyODcwMicsIHRhcmdldDogJzY3MTE1NjUtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3Mjg3MDInLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzI4OTYwJywgdGFyZ2V0OiAnNjM5MzYwNS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcyODk2MCcsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MzIwOTUnLCB0YXJnZXQ6ICc1MjQzNjIyLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMDk1JywgdGFyZ2V0OiAnNjczMjA5NS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjczMjA5NScsIHRhcmdldDogJzY3MzIwOTUtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MzIwOTUnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMTAwJywgdGFyZ2V0OiAnNTcxNTQ1MC0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjczMjEwMCcsIHRhcmdldDogJzY1Nzc3MjYtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MzIxMDAnLCB0YXJnZXQ6ICc2NTc3NzI2LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMTAwJywgdGFyZ2V0OiAnNjY2NTY0OC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjczMjEwMCcsIHRhcmdldDogJzY3MzIxMDAtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MzIxMDAnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMTExJywgdGFyZ2V0OiAnNDk1MTI3OC0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjczMjExMScsIHRhcmdldDogJzYwOTIwODMtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MzIxMTEnLCB0YXJnZXQ6ICc2MDkyMDgzLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMTExJywgdGFyZ2V0OiAnNjczMjExMS00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjczMjExMScsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3NTQ2ODEnLCB0YXJnZXQ6ICc1ODczMDk2LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzU0NjgxJywgdGFyZ2V0OiAnNjA5MjA4My0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc1NDY4MScsIHRhcmdldDogJzYwOTIwODMtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3NTQ2ODEnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzYzMzUxJywgdGFyZ2V0OiAnNjcxMTU2NS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc2MzM1MScsIHRhcmdldDogJzY3MTE1NjUtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3NjMzNTEnLCB0YXJnZXQ6ICc2NzExNTY1LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzYzMzUxJywgdGFyZ2V0OiAnNjcxMTU2NS00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc2MzM1MScsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3NjM1MDEnLCB0YXJnZXQ6ICc1MjYxMDM3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzYzNTAxJywgdGFyZ2V0OiAnNTg1NTk1Ny0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc2MzUwMScsIHRhcmdldDogJzY2MDEwODctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3NjM1MDEnLCB0YXJnZXQ6ICc2NjU0MDMyLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzYzNTAxJywgdGFyZ2V0OiAnb3JnXzN2STJaNWtDMVNhU2xiVUJvT0JUJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc2ODkwNCcsIHRhcmdldDogJzYxODM1ODktMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3Njg5MDQnLCB0YXJnZXQ6ICdvcmdfWGNxQ2p0VDhwaThNazNValFsRHQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzgyMzgzJywgdGFyZ2V0OiAnNjcxMTU2NS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc4MjM4MycsIHRhcmdldDogJzY3MTE1NjUtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3ODIzODMnLCB0YXJnZXQ6ICc2NzExNTY1LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzgyMzgzJywgdGFyZ2V0OiAnNjcxMTU2NS00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc4MjM4MycsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3ODM1MjQnLCB0YXJnZXQ6ICc1ODU5OTE2LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzgzNTI0JywgdGFyZ2V0OiAnNjc4MzUyNC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc4MzUyNCcsIHRhcmdldDogJ29yZ19mQTBhenFvQkdFem9Qb3k4NUp5dicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3ODYzODInLCB0YXJnZXQ6ICc2NTMwOTMyLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2Nzg2MzgyJywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgwNDMzMCcsIHRhcmdldDogJzU3MTU0NTAtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MDQzMzAnLCB0YXJnZXQ6ICc2MjY4ODAzLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA0MzMwJywgdGFyZ2V0OiAnNjgwNDMzMC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgwNDMzMCcsIHRhcmdldDogJzY4MDQzMzAtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MDQzMzAnLCB0YXJnZXQ6ICc2ODA0MzMwLTUnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA0MzMwJywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgwOTY1MycsIHRhcmdldDogJzQwODIwOTctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MDk2NTMnLCB0YXJnZXQ6ICc0NTYxNDQ0LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA5NjUzJywgdGFyZ2V0OiAnNDgwOTY5Ny0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgwOTY1MycsIHRhcmdldDogJzQ4NjM0MjUtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MDk2NTMnLCB0YXJnZXQ6ICc1MDk3MTIyLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA5NjUzJywgdGFyZ2V0OiAnNTIzNzE3OC0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgwOTY1MycsIHRhcmdldDogJzUzODIyMzItMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MDk2NTMnLCB0YXJnZXQ6ICc2ODA5NjUzLTknIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA5NjUzJywgdGFyZ2V0OiAnRDQyMzc2MS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgwOTY1MycsIHRhcmdldDogJ29yZ19HVk1sTFZid0NEU2lxUDlPZzhUbicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MjY1NjUnLCB0YXJnZXQ6ICc2Mjk1NTMwLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI2NTY1JywgdGFyZ2V0OiAnNjI5NTUzMC0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyNjU2NScsIHRhcmdldDogJ29yZ19aNTlhVUJHdFo5UDVRemRGaUttWicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MjY1ODInLCB0YXJnZXQ6ICc0MzYyMzg3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI2NTgyJywgdGFyZ2V0OiAnNjA4MTg3NS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyNjU4MicsIHRhcmdldDogJzY4MjY1ODItMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MjY1ODInLCB0YXJnZXQ6ICdvcmdfMGpQV003WXFodFhtMGxtM2ZtMVknIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI2NzQ1JywgdGFyZ2V0OiAnNjIzMzYxNy0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyNjc0NScsIHRhcmdldDogJzY1Nzc3MjYtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MjY3NDUnLCB0YXJnZXQ6ICc2ODI2NzQ1LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI2NzQ1JywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyOTY1NScsIHRhcmdldDogJzU5Nzg4MjktMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4Mjk2NTUnLCB0YXJnZXQ6ICc2MDA0Mjc2LTEzJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyOTY1NScsIHRhcmdldDogJzY4Mjk2NTUtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4Mjk2NTUnLCB0YXJnZXQ6ICc2ODI5NjU1LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI5NjU1JywgdGFyZ2V0OiAnNjgyOTY1NS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyOTY1NScsIHRhcmdldDogJzY4Mjk2NTUtNicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4Mjk2NTUnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODMwMTc0JywgdGFyZ2V0OiAnNDc5ODU5NC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgzMDE3NCcsIHRhcmdldDogJzU0NjU4OTUtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MzAxNzQnLCB0YXJnZXQ6ICdvcmdfOGNzTWd0Z25OMG1SRVpwTlAxSmknIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODQyNzQ4JywgdGFyZ2V0OiAnNjQzNDU1MC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg0Mjc0OCcsIHRhcmdldDogJzY2NjU2NTUtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NDI3NDgnLCB0YXJnZXQ6ICdvcmdfNnI5dDdaQTZZVDAzMU9kNGtNUGcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODQzNDAzJywgdGFyZ2V0OiAnNjI2NDA4Ny0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg0MzQwMycsIHRhcmdldDogJ29yZ19BVE9XSGQ0R0dhb2gxNHp1dFhxNycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NTAyNTInLCB0YXJnZXQ6ICc1Nzc0MzU3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODUwODk1JywgdGFyZ2V0OiAnNjA5MjA4My0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg1MDg5NScsIHRhcmdldDogJzYwOTIwODMtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NTA4OTUnLCB0YXJnZXQ6ICc2NTc3NzI2LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODUwODk1JywgdGFyZ2V0OiAnNjg1MDg5NS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg1MDg5NScsIHRhcmdldDogJzY4NTA4OTUtNScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NTA4OTUnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODUwOTQ5JywgdGFyZ2V0OiAnNjg1MDk0OS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg1MDk0OScsIHRhcmdldDogJzY4NTA5NDktMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NTA5NDknLCB0YXJnZXQ6ICc2ODUwOTQ5LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODUwOTQ5JywgdGFyZ2V0OiAnb3JnXzI0MmhKZWd3ZlFDZVA5aHNmd3BXJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg1MjkxNScsIHRhcmdldDogJzUyNzYyNjItMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NTI5MTUnLCB0YXJnZXQ6ICdvcmdfTUt2Ym5DY3lQdWRYZXhVdnNTd0YnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2OTA1MDU3JywgdGFyZ2V0OiAnNTg5NzU2My00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjkwNTA1NycsIHRhcmdldDogJzY5MDUwNTctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY5MDUwNTcnLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2OTU5ODUyJywgdGFyZ2V0OiAnNTYzMjQzMi00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjk1OTg1MicsIHRhcmdldDogJzY5MDUwNTctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY5NTk4NTInLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2OTY0MzYzJywgdGFyZ2V0OiAnNTQwOTQ5OC00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjk2NDM2MycsIHRhcmdldDogJzY5NjQzNjMtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY5NjQzNjMnLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2OTc4OTIxJywgdGFyZ2V0OiAnNTYzMjQzMi00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjk3ODkyMScsIHRhcmdldDogJzY5MDUwNTctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY5Nzg5MjEnLCB0YXJnZXQ6ICc2OTc4OTIxLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2OTc4OTIxJywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjk4MTYyOCcsIHRhcmdldDogJzU0MDk0OTgtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY5ODE2MjgnLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDAwODE4JywgdGFyZ2V0OiAnNTYzMjQzMi00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAwMDgxOCcsIHRhcmdldDogJzY5MDUwNTctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMDA4MTgnLCB0YXJnZXQ6ICc3MDAwODE4LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDAwODE4JywgdGFyZ2V0OiAnb3JnX1h1NmdYU3NsdERCWlRBaE1GQldEJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAyNTc0MycsIHRhcmdldDogJzQwODIwOTctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMjU3NDMnLCB0YXJnZXQ6ICc0NTYxNDQ0LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDI1NzQzJywgdGFyZ2V0OiAnNDgwOTY5Ny0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAyNTc0MycsIHRhcmdldDogJzUxNzY2NDQtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMjU3NDMnLCB0YXJnZXQ6ICc1MzgyMjMyLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDI1NzQzJywgdGFyZ2V0OiAnNjU1MTI3Ni0xMCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMjU3NDMnLCB0YXJnZXQ6ICc2NTUxMjc2LTExJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAyNTc0MycsIHRhcmdldDogJzY1NTEyNzYtMTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDI1NzQzJywgdGFyZ2V0OiAnNjU1MTI3Ni0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAyNTc0MycsIHRhcmdldDogJzY1NTEyNzYtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMjU3NDMnLCB0YXJnZXQ6ICc2NTUxMjc2LTgnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDI1NzQzJywgdGFyZ2V0OiAnNjU1MTI3Ni05JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAyNTc0MycsIHRhcmdldDogJ29yZ19HVk1sTFZid0NEU2lxUDlPZzhUbicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNDkxOTAnLCB0YXJnZXQ6ICc2MDgwOTk4LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDQ5MTkwJywgdGFyZ2V0OiAnNjkxNDE4Mi0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA0OTE5MCcsIHRhcmdldDogJ29yZ18ySUY5N3pWeW1TdXJhU25VQVhtcScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNTU3MzEnLCB0YXJnZXQ6ICc1NjMyNDMyLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDU1NzMxJywgdGFyZ2V0OiAnNjkwNTA1Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA1NTczMScsIHRhcmdldDogJzY5Nzg5MjEtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNTU3MzEnLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDYxMDE0JywgdGFyZ2V0OiAnNDQ4NjcyMC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA2MTAxNCcsIHRhcmdldDogJzQ3MDMwMTktMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNjEwMTQnLCB0YXJnZXQ6ICc1MjcyMDY5LTYnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDYxMDE0JywgdGFyZ2V0OiAnNTYyMjY1My0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA2MTAxNCcsIHRhcmdldDogJzcwNjEwMTQtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNjEwMTQnLCB0YXJnZXQ6ICc3MDYxMDE0LTYnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDYxMDE0JywgdGFyZ2V0OiAnb3JnX0R0dFpNdmt5dlczZlY2b0NVTVRGJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA2NDM0NicsIHRhcmdldDogJzQyNTMwNjEtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNjQzNDYnLCB0YXJnZXQ6ICc0OTAyNjcxLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDY0MzQ2JywgdGFyZ2V0OiAnb3JnX0R0dFpNdmt5dlczZlY2b0NVTVRGJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzEwNTg2OCcsIHRhcmdldDogJzU4NjMzMjYtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcxMDU4NjgnLCB0YXJnZXQ6ICc2ODg3NzM2LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MTA1ODY4JywgdGFyZ2V0OiAnb3JnXzBlVHIzWElCakFLcFhrQzY4MjNyJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzExMTc2OScsIHRhcmdldDogJzU0MDk0OTgtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcxMTE3NjknLCB0YXJnZXQ6ICc1ODk3NTYzLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MTExNzY5JywgdGFyZ2V0OiAnNjUzMDkzMi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzExMTc2OScsIHRhcmdldDogJzY5MDUwNTctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcxMTE3NjknLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MTQ3MTM4JywgdGFyZ2V0OiAnNjkwNTA1Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzE0NzEzOCcsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcxNTk3NTAnLCB0YXJnZXQ6ICc0ODcyNjAzLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MTU5NzUwJywgdGFyZ2V0OiAnNTcxMzkxMS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzE1OTc1MCcsIHRhcmdldDogJzU3MTM5MTEtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcxNTk3NTAnLCB0YXJnZXQ6ICc3MTU5NzUwLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MTU5NzUwJywgdGFyZ2V0OiAnNzE1OTc1MC01JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzE1OTc1MCcsIHRhcmdldDogJ29yZ19ld1ZzQ3V0cFJ6RDlwVDA3a0JvRScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcyMTE4MjUnLCB0YXJnZXQ6ICc1MDgxNDIyLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MjExODI1JywgdGFyZ2V0OiAnNTI4MzQ1Mi0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzIxMTgyNScsIHRhcmdldDogJzU3MDMzNTctMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcyMTE4MjUnLCB0YXJnZXQ6ICc2NTkzODM0LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MjQ2NzM0JywgdGFyZ2V0OiAnNjkwNTA1Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzI0NjczNCcsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcyODI3ODInLCB0YXJnZXQ6ICc2MTQ0Njc5LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MjgyNzgyJywgdGFyZ2V0OiAnNjE1Mjk4Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzI4Mjc4MicsIHRhcmdldDogJzY4MzY1NDAtNicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcyODI3ODInLCB0YXJnZXQ6ICdvcmdfdlM2cmNLeWMycU4zckZkWDBQMksnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3Mjk3OTc3JywgdGFyZ2V0OiAnNjE0NDY3OS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzI5Nzk3NycsIHRhcmdldDogJzYxNTI5ODctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcyOTc5NzcnLCB0YXJnZXQ6ICc2ODM2NTQwLTYnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3Mjk3OTc3JywgdGFyZ2V0OiAnb3JnX3ZTNnJjS3ljMnFOM3JGZFgwUDJLJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzMyMzM1NicsIHRhcmdldDogJzQ0ODY3MjAtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczMjMzNTYnLCB0YXJnZXQ6ICc0NzAzMDE5LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzIzMzU2JywgdGFyZ2V0OiAnNTI3MjA2OS02JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzMyMzM1NicsIHRhcmdldDogJzU2MjI2NTMtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczMjMzNTYnLCB0YXJnZXQ6ICc3MDYxMDE0LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzIzMzU2JywgdGFyZ2V0OiAnNzMyMzM1Ni01JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzMyMzM1NicsIHRhcmdldDogJ29yZ19EdHRaTXZreXZXM2ZWNm9DVU1URicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczNDA0MTEnLCB0YXJnZXQ6ICc3MzQwNDExLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzgwNjk1JywgdGFyZ2V0OiAnNTQwOTQ5OC00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzM4MDY5NScsIHRhcmdldDogJzU2MzI0MzItNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczODA2OTUnLCB0YXJnZXQ6ICc2OTA1MDU3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzgwNjk1JywgdGFyZ2V0OiAnNzA4MzA3NS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzM4MDY5NScsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczODA2OTYnLCB0YXJnZXQ6ICc1NjMyNDMyLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzgwNjk2JywgdGFyZ2V0OiAnNjkwNTA1Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzM4MDY5NicsIHRhcmdldDogJzcwODMwNzUtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczODA2OTYnLCB0YXJnZXQ6ICc3MzgwNjk2LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzgwNjk2JywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzM4NTIyNCcsIHRhcmdldDogJzUwNDEyMDAtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczODUyMjQnLCB0YXJnZXQ6ICc1MDQxMjAwLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3Mzg1MjI0JywgdGFyZ2V0OiAnNzM4NTIyNC0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzM4NTIyNCcsIHRhcmdldDogJzczODUyMjQtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczODUyMjQnLCB0YXJnZXQ6ICdvcmdfSW1lZzlXNlAxVEU2STJRdXRTNHknIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDAyNTA2JywgdGFyZ2V0OiAnNTUxMjQyNi0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQwMjUwNicsIHRhcmdldDogJzYwNDgxMTAtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0MDI1MDYnLCB0YXJnZXQ6ICc3NDAyNTA2LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDAyNTA2JywgdGFyZ2V0OiAnb3JnX3BwRWxrRXRRdkZ0RzZBNDc1NFVJJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQwNDUwOCcsIHRhcmdldDogJzQ2ODI1OTYtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0MDQ1MDgnLCB0YXJnZXQ6ICc1MTE3ODM4LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDA0NTA4JywgdGFyZ2V0OiAnNTcxNTY3NS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQwNDUwOCcsIHRhcmdldDogJzY5MTI4MzktMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0MDQ1MDgnLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDExMjA5JywgdGFyZ2V0OiAnNTM0NTYzOS02JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQxMTIwOScsIHRhcmdldDogJzU0MTc3NzAtOCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0MTEyMDknLCB0YXJnZXQ6ICc3MDgyODMyLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDExMjA5JywgdGFyZ2V0OiAnb3JnX0VoWUZQSUpFbVlRWVJvWXZzbnB5JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ1MzA2NScsIHRhcmdldDogJzQwNzIyMzYtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NTMwNjUnLCB0YXJnZXQ6ICc0MzU2NDU1LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDUzMDY1JywgdGFyZ2V0OiAnNDcwMzAxOS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ1MzA2NScsIHRhcmdldDogJzcwNjEwMTQtNicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NTMwNjUnLCB0YXJnZXQ6ICdvcmdfRWhZRlBJSkVtWVFZUm9ZdnNucHknIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDUzMDY1JywgdGFyZ2V0OiAnb3JnX0pqck02VW1lT1kwUTVNbW9OaVA4JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ1MzA4NycsIHRhcmdldDogJzUzNDU2MzktNicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NTMwODcnLCB0YXJnZXQ6ICdvcmdfRWhZRlBJSkVtWVFZUm9ZdnNucHknIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDYyODYyJywgdGFyZ2V0OiAnNjE0NDY3OS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ2Mjg2MicsIHRhcmdldDogJzY4MzY1NDAtNicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NjI4NjInLCB0YXJnZXQ6ICdvcmdfdlM2cmNLeWMycU4zckZkWDBQMksnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDY0ODQ2JywgdGFyZ2V0OiAnNDQwMzY4Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ2NDg0NicsIHRhcmdldDogJzU4OTc1NjMtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NjQ4NDYnLCB0YXJnZXQ6ICc2OTA1MDU3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDY0ODQ2JywgdGFyZ2V0OiAnNzA4MzA3NS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ2NDg0NicsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NjgzMDQnLCB0YXJnZXQ6ICc2ODYzMzYzLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDY4MzA0JywgdGFyZ2V0OiAnNzQ2ODMwNC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ2ODMwNCcsIHRhcmdldDogJ29yZ19FaFlGUElKRW1ZUVlSb1l2c25weScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc1MDEyOTMnLCB0YXJnZXQ6ICc0MjI0NzI1LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NTAxMjkzJywgdGFyZ2V0OiAnNDU3MzQ3Mi0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzUwMTI5MycsIHRhcmdldDogJ29yZ19qNVU1SUVhMUZJYmd0cjdpTnNRTScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc1MDY3OTEnLCB0YXJnZXQ6ICc0NDAzNjg3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NTA2NzkxJywgdGFyZ2V0OiAnNDk3MjIyNC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzUwNjc5MScsIHRhcmdldDogJzY5MDUwNTctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc1MDY3OTEnLCB0YXJnZXQ6ICdSRTM5ODQxLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NTA2NzkxJywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzYyMDY1NScsIHRhcmdldDogJzU5NDg3ODktMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc2MjA2NTUnLCB0YXJnZXQ6ICc3NjIwNjU1LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NjIwNjU1JywgdGFyZ2V0OiAnb3JnX1doMmNuT0l6S2xoemp1cVZtT3FZJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzYzMjk4NScsIHRhcmdldDogJzcwNzg1MDMtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc2MzI5ODUnLCB0YXJnZXQ6ICc3NjA4NzYxLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NjMyOTg1JywgdGFyZ2V0OiAnNzYzMjk4NS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzYzMjk4NScsIHRhcmdldDogJzc2MzI5ODUtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc2MzI5ODUnLCB0YXJnZXQ6ICdvcmdfUXc4RXNyTjBNNTJuVlFVTTZ2c1YnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NjYzNjA3JywgdGFyZ2V0OiAnNTU5NDE2OS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzY2MzYwNycsIHRhcmdldDogJzY2NTg1NzctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc2NjM2MDcnLCB0YXJnZXQ6ICc3MTU0NDc3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NjYzNjA3JywgdGFyZ2V0OiAnb3JnX0lEVWJTMDlaUjBKaEo4akZFcHRUJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzY3NDY1MCcsIHRhcmdldDogJzY2MzkyNDYtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc2NzQ2NTAnLCB0YXJnZXQ6ICc2ODM4Mzk3LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3Njc0NjUwJywgdGFyZ2V0OiAnNzIwNTcxNi01JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzY3NDY1MCcsIHRhcmdldDogJ29yZ19wbFpiTHhpeXNFU2JhSTlwT2V5bScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc3MzI4MTknLCB0YXJnZXQ6ICc2NjM5MjQ2LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NzMyODE5JywgdGFyZ2V0OiAnNjgzODM5Ny0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzczMjgxOScsIHRhcmdldDogJzcyMDU3MTYtNScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc3MzI4MTknLCB0YXJnZXQ6ICdvcmdfcGxaYkx4aXlzRVNiYUk5cE9leW0nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc4MDUzMTg0JywgdGFyZ2V0OiAnNzA3ODUwMy0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnODA1MzE4NCcsIHRhcmdldDogJzc2MDg3NjEtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzgwNTMxODQnLCB0YXJnZXQ6ICc3NjMyOTg1LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc4MDUzMTg0JywgdGFyZ2V0OiAnNzYzMjk4NS00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnODA1MzE4NCcsIHRhcmdldDogJ29yZ19RdzhFc3JOME01Mm5WUVVNNnZzVicgfVxyXG4gICAgXVxyXG59XHJcbiIsImltcG9ydCAqIGFzIGludGVyZmFjZXMgZnJvbSAnLi4vaW50ZXJmYWNlcydcclxuaW1wb3J0IE5ldFYgZnJvbSAnLi4vaW5kZXgnXHJcbmltcG9ydCB7IG92ZXJyaWRlIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnXHJcbmltcG9ydCB7IEVNUFRZX0ZVTkNUSU9OIH0gZnJvbSAnLi4vdXRpbHMvY29uc3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50IHtcclxuICAgIHB1YmxpYyByZWFkb25seSB0eXBlOiBzdHJpbmdcclxuICAgIHB1YmxpYyAkX3N0eWxlOiBpbnRlcmZhY2VzLk5vZGVTdHlsZSB8IGludGVyZmFjZXMuTGlua1N0eWxlID0ge31cclxuICAgIHB1YmxpYyAkX21vdXNlZG93bkNhbGxiYWNrU2V0OiBTZXQ8KGU6IGFueSkgPT4gdm9pZD4gPSBuZXcgU2V0KClcclxuICAgIHB1YmxpYyAkX21vdXNldXBDYWxsYmFja1NldDogU2V0PChlOiBhbnkpID0+IHZvaWQ+ID0gbmV3IFNldCgpXHJcbiAgICBwdWJsaWMgJF9tb3VzZW92ZXJDYWxsYmFja1NldDogU2V0PChlOiBhbnkpID0+IHZvaWQ+ID0gbmV3IFNldCgpXHJcbiAgICBwdWJsaWMgJF9tb3VzZW91dENhbGxiYWNrU2V0OiBTZXQ8KGU6IGFueSkgPT4gdm9pZD4gPSBuZXcgU2V0KClcclxuICAgIHB1YmxpYyAkX21vdXNlbW92ZUNhbGxiYWNrU2V0OiBTZXQ8KGU6IGFueSkgPT4gdm9pZD4gPSBuZXcgU2V0KClcclxuICAgIHB1YmxpYyAkX2NsaWNrQ2FsbGJhY2tTZXQ6IFNldDwoZTogYW55KSA9PiB2b2lkPiA9IG5ldyBTZXQoKVxyXG5cclxuICAgIHByb3RlY3RlZCAkX2NvcmU6IE5ldFZcclxuICAgIHByb3RlY3RlZCAkX2NoYW5nZVJlbmRlckF0dHJpYnV0ZTogKGVsZW1lbnQ6IEVsZW1lbnQsIGtleTogc3RyaW5nKSA9PiB2b2lkXHJcblxyXG4gICAgcHJvdGVjdGVkICRfYXR0cmlidXRlcyA9IHt9XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGNvcmU6IE5ldFYsXHJcbiAgICAgICAgZGF0YTogaW50ZXJmYWNlcy5Ob2RlRGF0YSB8IGludGVyZmFjZXMuTGlua0RhdGEsXHJcbiAgICAgICAgdHlwZTogJ05vZGUnIHwgJ0xpbmsnXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLiRfY29yZSA9IGNvcmVcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlXHJcbiAgICAgICAgY29uc3QgZGVmYXVsdENvbmZpZ3MgPSB0aGlzLiRfY29yZS4kX2NvbmZpZ3NcclxuXHJcbiAgICAgICAgLy8gb3ZlcnJpZGUgZGVmYXVsdCBzdHlsZSB3aXRoIHVzZXIgc3BlY2lmaWVkIHN0eWxlIGluIGRhdGFcclxuICAgICAgICAvLyB0aGlzLiRfc3R5bGUgPSBvdmVycmlkZShkZWZhdWx0Q29uZmlnc1t0eXBlXS5zdHlsZSwgZGF0YS5zdHlsZSlcclxuICAgICAgICB0aGlzLiRfc3R5bGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRlZmF1bHRDb25maWdzW3RoaXMudHlwZS50b0xvd2VyQ2FzZSgpXS5zdHlsZSkpXHJcbiAgICAgICAgaWYgKCdzdHlsZScgaW4gZGF0YSkge1xyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhkYXRhLnN0eWxlKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gdmFsdWVcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBrZXlcclxuICAgICAgICAgICAgICAgIGlmIChzdHlsZSAhPT0gT2JqZWN0KHN0eWxlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlIGlzIG5vdCBhbiBvYmplY3RcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRfc3R5bGVbbmFtZV0gPSBzdHlsZVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAhIGlmIHRoZSBkZXB0aCBvZiBzdHlsZSBpcyBtb3JlIHRoYW4gb25lLCBpdCBjYW4gY2F1c2UgYnVnc1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICEgZS5nLiBzdHlsZSA9IHsgeHg6IHsuLi59LCB5eTogLi4uIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRfc3R5bGVbbmFtZV0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuJF9zdHlsZVtuYW1lXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3R5bGVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJNYW5hZ2VyID0gdGhpcy4kX2NvcmUuJF9yZW5kZXJlcltgJHt0aGlzLnR5cGUudG9Mb3dlckNhc2UoKX1NYW5hZ2VyYF1cclxuICAgICAgICB0aGlzLiRfY2hhbmdlUmVuZGVyQXR0cmlidXRlID0gcmVuZGVyTWFuYWdlci5jaGFuZ2VBdHRyaWJ1dGUuYmluZChyZW5kZXJNYW5hZ2VyKVxyXG5cclxuICAgICAgICAvLyBnZW5lcmF0ZSBzdHlsZSBtZXRob2RzLCBlLmcuOiBub2RlLnIoKSwgbGluay5zdHJva2VXaWR0aCgpXHJcbiAgICAgICAgY29uc3QgZXhjZXB0aW9uS2V5cyA9IG5ldyBTZXQoWydpbm5lcldpZHRoJywgJ2lubmVySGVpZ2h0J10pIC8vIE5PVEU6IGV4Y2VwdGlvbiBrZXlzLCB1c2UgZGlmZmVyZW5jdCBtYXBwaW5nXHJcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy4kX3N0eWxlKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgLy8gZ2VuZXJhdGUgc3R5bGUgZnVuY3Rpb25zXHJcbiAgICAgICAgICAgIGlmICghZXhjZXB0aW9uS2V5cy5oYXMoa2V5KSkgdGhpc1trZXldID0gdGhpcy5nZW5lcmF0ZUVsZW1lbnRTdHlsZUdldHRlclNldHRlcihrZXkpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcclxuICAgICAqIEBwYXJhbSB7KGU6IGFueSkgPT4gYW55fSBjYWxsYmFja1xyXG4gICAgICogQG1lbWJlcm9mIEVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjaz86IChlOiBhbnkpID0+IGFueSkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZXZlbnROYW1lLnNsaWNlKDAsIDQpICE9PSAnZHJhZycgfHxcclxuICAgICAgICAgICAgKGV2ZW50TmFtZS5zbGljZSgwLCA0KSA9PT0gJ2RyYWcnICYmIHRoaXMudHlwZSA9PT0gJ05vZGUnKSAvLyBvbmx5IG5vZGUgY2FuIGJlIGRyYWdnZWRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tTZXROYW1lID0gYCRfJHtldmVudE5hbWV9Q2FsbGJhY2tTZXRgXHJcbiAgICAgICAgICAgIHRoaXNbY2FsbGJhY2tTZXROYW1lXT8uYWRkKGNhbGxiYWNrID8gY2FsbGJhY2sgOiBFTVBUWV9GVU5DVElPTilcclxuICAgICAgICAgICAgaWYgKHRoaXNbY2FsbGJhY2tTZXROYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9pbnRlcmFjdGlvbk1hbmFnZXIuaW5jcmVhc2VNb3VzZUV2ZW50Q2FsbGJhY2tDb3VudEJ5KDEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXHJcbiAgICAgKiBAcGFyYW0geyhlOiBhbnkpID0+IGFueX0gY2FsbGJhY2tcclxuICAgICAqIEBtZW1iZXJvZiBFbGVtZW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvZmYoZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiAoZTogYW55KSA9PiBhbnkpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGV2ZW50TmFtZS5zbGljZSgwLCA0KSAhPT0gJ2RyYWcnIHx8XHJcbiAgICAgICAgICAgIChldmVudE5hbWUuc2xpY2UoMCwgNCkgPT09ICdkcmFnJyAmJiB0aGlzLnR5cGUgPT09ICdOb2RlJykgLy8gb25seSBub2RlIGNhbiBiZSBkcmFnZ2VkXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrU2V0TmFtZSA9IGAkXyR7ZXZlbnROYW1lfUNhbGxiYWNrU2V0YFxyXG4gICAgICAgICAgICB0aGlzW2NhbGxiYWNrU2V0TmFtZV0/LmRlbGV0ZShjYWxsYmFjayA/IGNhbGxiYWNrIDogRU1QVFlfRlVOQ1RJT04pXHJcbiAgICAgICAgICAgIGlmICh0aGlzW2NhbGxiYWNrU2V0TmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfaW50ZXJhY3Rpb25NYW5hZ2VyLmRlY3JlYXNlTW91c2VFdmVudENhbGxiYWNrQ291bnRCeSgxKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0L3NldCBjdXN0b20gYXR0cmlidXRlc1xyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhdHRyKGtleTogc3RyaW5nLCB2YWx1ZT86IGFueSkge1xyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9hdHRyaWJ1dGVzW2tleV0gPSB2YWx1ZVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kX2F0dHJpYnV0ZXNba2V5XVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLiRfYXR0cmlidXRlcykpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2VuZXJhdGVFbGVtZW50U3R5bGVHZXR0ZXJTZXR0ZXIoa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gKHZhbHVlPzogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IE9iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB2YWx1ZSBpcyBhbiBvYmplY3RcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRfc3R5bGVba2V5XSA9IG92ZXJyaWRlKHRoaXMuJF9zdHlsZVtrZXldLCB2YWx1ZSkgLy8geyAuLi50aGlzLiRfc3R5bGVba2V5XSwgLi4udmFsdWUgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRfc3R5bGVba2V5XSA9IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRfY2hhbmdlUmVuZGVyQXR0cmlidXRlKHRoaXMsIGtleSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kX3N0eWxlW2tleV1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgSmlhY2hlbmcgUGFuIDxqYWNraWVhbnhpc0BnbWFpbC5jb20+XHJcbiAqIEBkZXNjcmlwdGlvbiBQcm92aWRlIGEgTGluayBjbGFzcy5cclxuICogQGRlcGVuZGVuY2VzIGludGVyZmFjZXMudHMsIHV0aWxzL2lzLnRzXHJcbiAqL1xyXG5cclxuaW1wb3J0IE5vZGUgZnJvbSAnLi9ub2RlJ1xyXG5pbXBvcnQgKiBhcyBpbnRlcmZhY2VzIGZyb20gJy4uL2ludGVyZmFjZXMnXHJcbmltcG9ydCBFbGVtZW50IGZyb20gJy4vZWxlbWVudCdcclxuXHJcbmNsYXNzIExpbmsgZXh0ZW5kcyBFbGVtZW50IHtcclxuICAgIC8vIHN0eWxlIGdldHRlci9zZXR0ZXJcclxuICAgIHB1YmxpYyBzaGFwZTogKHZhbHVlPzogaW50ZXJmYWNlcy5MaW5rU2hhcGUpID0+IGludGVyZmFjZXMuTGlua1NoYXBlXHJcbiAgICBwdWJsaWMgc3Ryb2tlV2lkdGg6ICh2YWx1ZT86IG51bWJlcikgPT4gbnVtYmVyXHJcbiAgICBwdWJsaWMgc3Ryb2tlQ29sb3I6ICh2YWx1ZT86IGludGVyZmFjZXMuQ29sb3IpID0+IGludGVyZmFjZXMuQ29sb3JcclxuICAgIHB1YmxpYyBjdXJ2ZW5lc3M6ICh2YWx1ZT86IG51bWJlcikgPT4gbnVtYmVyXHJcblxyXG4gICAgcHVibGljICRfc291cmNlOiBOb2RlXHJcbiAgICBwdWJsaWMgJF90YXJnZXQ6IE5vZGVcclxuXHJcbiAgICBwcml2YXRlICRfZWxlbWVudFJlc2VydmVkS2V5cyA9IG5ldyBTZXQoWydzb3VyY2UnLCAndGFyZ2V0JywgJ3N0eWxlJ10pXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvcmUsIGxpbmtEYXRhOiBpbnRlcmZhY2VzLkxpbmtEYXRhKSB7XHJcbiAgICAgICAgc3VwZXIoY29yZSwgbGlua0RhdGEsIC8qIHR5cGU6ICovICdMaW5rJylcclxuXHJcbiAgICAgICAgLy8gc2V0IGF0dHJpYnV0ZXNcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBsaW5rRGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuJF9lbGVtZW50UmVzZXJ2ZWRLZXlzLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRfYXR0cmlidXRlc1trZXldID0gbGlua0RhdGFba2V5XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzb3VyY2VOb2RlID0gdGhpcy4kX2NvcmUuZ2V0Tm9kZUJ5SWQobGlua0RhdGEuc291cmNlKVxyXG4gICAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSB0aGlzLiRfY29yZS5nZXROb2RlQnlJZChsaW5rRGF0YS50YXJnZXQpXHJcbiAgICAgICAgdGhpcy5zb3VyY2VUYXJnZXQoe1xyXG4gICAgICAgICAgICBzb3VyY2U6IHNvdXJjZU5vZGUsXHJcbiAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0Tm9kZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXR0ZXIvc2V0dGVyIG9mIHRoZSBzb3VyY2VcclxuICAgICAqIEBwYXJhbSB7Tm9kZX0gW25vZGVdXHJcbiAgICAgKiBAcmV0dXJucyB7Tm9kZX0gYSBzb3VyY2UgTm9kZSBPYmplY3RcclxuICAgICAqIEBtZW1iZXJvZiBMaW5rXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzb3VyY2Uobm9kZT86IE5vZGUpOiBOb2RlIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAvLyBzZXR0ZXJcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VUYXJnZXQoe1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiBub2RlLFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLiRfdGFyZ2V0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfc291cmNlXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXR0ZXIvc2V0dGVyIG9mIHRoZSB0YXJnZXRcclxuICAgICAqIEBwYXJhbSB7Tm9kZX0gW25vZGVdXHJcbiAgICAgKiBAcmV0dXJucyB7Tm9kZX0gYSB0YXJnZXQgTm9kZSBPYmplY3RcclxuICAgICAqIEBtZW1iZXJvZiBMaW5rXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0YXJnZXQobm9kZT86IE5vZGUpOiBOb2RlIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAvLyBzZXR0ZXJcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VUYXJnZXQoe1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiB0aGlzLiRfc291cmNlLFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBub2RlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfdGFyZ2V0XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXR0ZXIvc2V0dGVyIG9mIHNvdXJjZSBhbmQgdGFyZ2V0XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzb3VyY2VUYXJnZXRPYmp9IFt7c291cmNlOiBOb2RlLCB0YXJnZXQ6IE5vZGV9XVxyXG4gICAgICogQHJldHVybnMgT2JqZWN0IHtzb3VyY2U6IE5vZGUsIHRhcmdldDogTm9kZX1cclxuICAgICAqIEBtZW1iZXJvZiBMaW5rXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzb3VyY2VUYXJnZXQoc291cmNlVGFyZ2V0T2JqPzogeyBzb3VyY2U6IE5vZGU7IHRhcmdldDogTm9kZSB9KSB7XHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9sZFNvdXJjZTogTm9kZSA9IHRoaXMuJF9zb3VyY2VcclxuICAgICAgICAgICAgY29uc3Qgb2xkVGFyZ2V0OiBOb2RlID0gdGhpcy4kX3RhcmdldFxyXG4gICAgICAgICAgICBjb25zdCBuZXdTb3VyY2UgPSBzb3VyY2VUYXJnZXRPYmouc291cmNlXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1RhcmdldCA9IHNvdXJjZVRhcmdldE9iai50YXJnZXRcclxuICAgICAgICAgICAgY29uc3QgbmV3U291cmNlSWQgPSBuZXdTb3VyY2UuaWQoKVxyXG4gICAgICAgICAgICBjb25zdCBuZXdUYXJnZXRJZCA9IG5ld1RhcmdldC5pZCgpXHJcblxyXG4gICAgICAgICAgICBpZiAobmV3U291cmNlID09PSBuZXdUYXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGVycm9yOiBzZWxmIGxvb3BcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgU2VsZiBsb29wICgke25ld1NvdXJjZUlkfSA8PT4gJHtuZXdUYXJnZXRJZH0pIGlzIG5vdCBhbGxvd2VkLmApXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRfY29yZS4kX2VuZHMybGluay5oYXMoW25ld1NvdXJjZUlkLCBuZXdUYXJnZXRJZF0pKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBlcnJvcjogbXVsdGlwbGUgbGlua1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBsaW5rICgke25ld1NvdXJjZUlkfSA8PT4gJHtuZXdUYXJnZXRJZH0pIGlzIG5vdCBhbGxvd2QuYClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG9sZFNvdXJjZSAmJiBvbGRUYXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSBvbGQgTWFwXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRfY29yZS4kX2VuZHMybGluay5kZWxldGUoW29sZFNvdXJjZS5pZCgpLCBvbGRUYXJnZXQuaWQoKV0pXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9zb3VyY2VJZDJsaW5rcy5nZXQob2xkU291cmNlLmlkKCkpPy5kZWxldGUodGhpcylcclxuICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfdGFyZ2V0SWQybGlua3MuZ2V0KG9sZFRhcmdldC5pZCgpKT8uZGVsZXRlKHRoaXMpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuJF9zb3VyY2UgPSBuZXdTb3VyY2VcclxuICAgICAgICAgICAgdGhpcy4kX3RhcmdldCA9IG5ld1RhcmdldFxyXG4gICAgICAgICAgICB0aGlzLiRfY29yZS4kX2VuZHMybGluay5zZXQoW25ld1NvdXJjZUlkLCBuZXdUYXJnZXRJZF0sIHRoaXMpXHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuJF9jb3JlLiRfc291cmNlSWQybGlua3MuaGFzKG5ld1NvdXJjZUlkKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9zb3VyY2VJZDJsaW5rcy5zZXQobmV3U291cmNlSWQsIG5ldyBTZXQoW3RoaXNdKSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfc291cmNlSWQybGlua3MuZ2V0KG5ld1NvdXJjZUlkKS5hZGQodGhpcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuJF9jb3JlLiRfdGFyZ2V0SWQybGlua3MuaGFzKG5ld1RhcmdldElkKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF90YXJnZXRJZDJsaW5rcy5zZXQobmV3VGFyZ2V0SWQsIG5ldyBTZXQoW3RoaXNdKSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfdGFyZ2V0SWQybGlua3MuZ2V0KG5ld1RhcmdldElkKS5hZGQodGhpcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzb3VyY2U6IHRoaXMuJF9zb3VyY2UsXHJcbiAgICAgICAgICAgIHRhcmdldDogdGhpcy4kX3RhcmdldFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlua1xyXG4iLCIvKipcclxuICogQGF1dGhvciBKaWFjaGVuZyBQYW4gPGphY2tpZWFueGlzQGdtYWlsLmNvbT5cclxuICogQGRlc2NyaXB0aW9uIFByb3ZpZGUgYSBOb2RlIGNsYXNzLlxyXG4gKiBAZGVwZW5kZW5jZXMgaW50ZXJmYWNlcy50cywgdXRpbHMvaXMudHNcclxuICovXHJcblxyXG5pbXBvcnQgKiBhcyBpbnRlcmZhY2VzIGZyb20gJy4uL2ludGVyZmFjZXMnXHJcbmltcG9ydCB7IGlzVmFsaWRJZCB9IGZyb20gJy4uL3V0aWxzL2lzJ1xyXG5pbXBvcnQgeyBMaW5rQXR0ciB9IGZyb20gJy4uL3JlbmRlcmVyL2ludGVyZmFjZXMnXHJcbmltcG9ydCBMaW5rIGZyb20gJy4vbGluaydcclxuaW1wb3J0IEVsZW1lbnQgZnJvbSAnLi9lbGVtZW50J1xyXG5cclxuY2xhc3MgTm9kZSBleHRlbmRzIEVsZW1lbnQge1xyXG4gICAgLy8gc3R5bGUgZ2V0dGVyL3NldHRlclxyXG4gICAgcHVibGljIHNoYXBlOiAodmFsdWU/OiBpbnRlcmZhY2VzLk5vZGVTaGFwZSkgPT4gaW50ZXJmYWNlcy5Ob2RlU2hhcGVcclxuICAgIHB1YmxpYyBvZmZzZXQ6ICh2YWx1ZT86IGludGVyZmFjZXMuUG9zaXRpb24pID0+IGludGVyZmFjZXMuUG9zaXRpb25cclxuICAgIHB1YmxpYyBzdHJva2VXaWR0aDogKHZhbHVlPzogbnVtYmVyKSA9PiBudW1iZXJcclxuICAgIHB1YmxpYyBzdHJva2VDb2xvcjogKHZhbHVlPzogaW50ZXJmYWNlcy5Db2xvcikgPT4gaW50ZXJmYWNlcy5Db2xvclxyXG4gICAgcHVibGljIGZpbGw6ICh2YWx1ZT86IGludGVyZmFjZXMuQ29sb3IpID0+IGludGVyZmFjZXMuQ29sb3JcclxuICAgIC8qIGNpcmNsZSBzaGFwZSBzdHlsZXMgKi9cclxuICAgIHB1YmxpYyByPzogKHZhbHVlPzogbnVtYmVyKSA9PiBudW1iZXJcclxuICAgIC8qIHJlY3Qgc2hhcGUgc3R5bGVzICovXHJcbiAgICBwdWJsaWMgd2lkdGg/OiAodmFsdWU/OiBudW1iZXIpID0+IG51bWJlclxyXG4gICAgcHVibGljIGhlaWdodD86ICh2YWx1ZT86IG51bWJlcikgPT4gbnVtYmVyXHJcbiAgICBwdWJsaWMgcm90YXRlPzogKHZhbHVlPzogbnVtYmVyKSA9PiBudW1iZXJcclxuICAgIC8qIHRyaWFuZ2xlIHNoYXBlIHN0eWxlcyAqL1xyXG4gICAgcHVibGljIHZlcnRleEFscGhhOiAodmFsdWU/OiBpbnRlcmZhY2VzLlBvc2l0aW9uKSA9PiBpbnRlcmZhY2VzLlBvc2l0aW9uXHJcbiAgICBwdWJsaWMgdmVydGV4QmV0YTogKHZhbHVlPzogaW50ZXJmYWNlcy5Qb3NpdGlvbikgPT4gaW50ZXJmYWNlcy5Qb3NpdGlvblxyXG4gICAgcHVibGljIHZlcnRleEdhbW1hOiAodmFsdWU/OiBpbnRlcmZhY2VzLlBvc2l0aW9uKSA9PiBpbnRlcmZhY2VzLlBvc2l0aW9uXHJcblxyXG4gICAgcHVibGljICRfcG9zaXRpb24gPSB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljICRfZHJhZ3N0YXJ0Q2FsbGJhY2tTZXQ6IFNldDwoZTogYW55KSA9PiB2b2lkPiA9IG5ldyBTZXQoKVxyXG4gICAgcHVibGljICRfZHJhZ2dpbmdDYWxsYmFja1NldDogU2V0PChlOiBhbnkpID0+IHZvaWQ+ID0gbmV3IFNldCgpXHJcbiAgICBwdWJsaWMgJF9kcmFnZW5kQ2FsbGJhY2tTZXQ6IFNldDwoZTogYW55KSA9PiB2b2lkPiA9IG5ldyBTZXQoKVxyXG5cclxuICAgIHByaXZhdGUgJF9pZDogc3RyaW5nXHJcblxyXG4gICAgcHJpdmF0ZSAkX2VsZW1lbnRSZXNlcnZlZEtleXMgPSBuZXcgU2V0KFsnaWQnLCAneCcsICd5JywgJ3N0eWxlJ10pXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvcmUsIG5vZGVEYXRhOiBpbnRlcmZhY2VzLk5vZGVEYXRhKSB7XHJcbiAgICAgICAgc3VwZXIoY29yZSwgbm9kZURhdGEsIC8qIHR5cGU6ICovICdOb2RlJylcclxuXHJcbiAgICAgICAgLy8gc2V0IGF0dHJpYnV0ZXNcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBub2RlRGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuJF9lbGVtZW50UmVzZXJ2ZWRLZXlzLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRfYXR0cmlidXRlc1trZXldID0gbm9kZURhdGFba2V5XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICAuLi57XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLiRfcG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgIHk6IHRoaXMuJF9wb3NpdGlvbi55XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC4uLm5vZGVEYXRhXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiRfc2V0SWQoZGF0YS5pZClcclxuICAgICAgICB0aGlzLiRfcG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgIHg6IGRhdGEueCxcclxuICAgICAgICAgICAgeTogZGF0YS55XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0dGVyIG9mIHByaXZhdGUgcHJvcGVydHkgJF9pZFxyXG4gICAgICogQG1lbWJlcm9mIE5vZGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRfaWRcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldCBuZWlnaGJvciBub2RlcyBmb3IgY3VycmVudCBub2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBuZWlnaGJvck5vZGVzKCkge1xyXG4gICAgICAgIC8vIE5PVEU6IGN1cnJlbnRseSBBUEkgbm90IGludGVudCB0byBzdXBwb3J0IGRpcmVjdGVkIGdyYXBoXHJcbiAgICAgICAgbGV0IHNvdXJjZUxpbmtzID0gdGhpcy4kX2NvcmUuJF9zb3VyY2VJZDJsaW5rcy5nZXQodGhpcy4kX2lkKVxyXG4gICAgICAgIGlmICghc291cmNlTGlua3MpIHNvdXJjZUxpbmtzID0gbmV3IFNldCgpXHJcbiAgICAgICAgbGV0IHRhcmdldExpbmtzID0gdGhpcy4kX2NvcmUuJF90YXJnZXRJZDJsaW5rcy5nZXQodGhpcy4kX2lkKVxyXG4gICAgICAgIGlmICghdGFyZ2V0TGlua3MpIHRhcmdldExpbmtzID0gbmV3IFNldCgpXHJcblxyXG4gICAgICAgIGNvbnN0IG5vZGVTZXQgPSBuZXcgU2V0KFtcclxuICAgICAgICAgICAgLi4uWy4uLnNvdXJjZUxpbmtzXS5tYXAoKGxpbmspID0+IGxpbmsuJF90YXJnZXQpLFxyXG4gICAgICAgICAgICAuLi5bLi4udGFyZ2V0TGlua3NdLm1hcCgobGluaykgPT4gbGluay4kX3NvdXJjZSlcclxuICAgICAgICBdKVxyXG5cclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShub2RlU2V0KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0IG5laWdoYm9yIGxpbmtzIGZvciBjdXJyZW50IG5vZGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIG5laWdoYm9yTGlua3MoKSB7XHJcbiAgICAgICAgLy8gTk9URTogY3VycmVudGx5IEFQSSBub3QgaW50ZW50IHRvIHN1cHBvcnQgZGlyZWN0ZWQgZ3JhcGhcclxuICAgICAgICBsZXQgc291cmNlTGlua3MgPSB0aGlzLiRfY29yZS4kX3NvdXJjZUlkMmxpbmtzLmdldCh0aGlzLiRfaWQpXHJcbiAgICAgICAgaWYgKCFzb3VyY2VMaW5rcykgc291cmNlTGlua3MgPSBuZXcgU2V0KClcclxuICAgICAgICBsZXQgdGFyZ2V0TGlua3MgPSB0aGlzLiRfY29yZS4kX3RhcmdldElkMmxpbmtzLmdldCh0aGlzLiRfaWQpXHJcbiAgICAgICAgaWYgKCF0YXJnZXRMaW5rcykgdGFyZ2V0TGlua3MgPSBuZXcgU2V0KClcclxuXHJcbiAgICAgICAgY29uc3QgbGlua1NldCA9IG5ldyBTZXQoWy4uLnNvdXJjZUxpbmtzLCAuLi50YXJnZXRMaW5rc10pXHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20obGlua1NldClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldC9nZXQgeCBwb3N0aW9uXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3ZhbHVlXVxyXG4gICAgICogQG1lbWJlcm9mIE5vZGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHgodmFsdWU/OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbih7XHJcbiAgICAgICAgICAgICAgICB4OiB2YWx1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy4kX3Bvc2l0aW9uLnhcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldC9nZXQgeSBwb3N0aW9uXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3ZhbHVlXVxyXG4gICAgICogQG1lbWJlcm9mIE5vZGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHkodmFsdWU/OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbih7XHJcbiAgICAgICAgICAgICAgICB5OiB2YWx1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy4kX3Bvc2l0aW9uLnlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldC9nZXQgcG9zdGlvblxyXG4gICAgICogQG1lbWJlcm9mIE5vZGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvc2l0aW9uKHBvc2l0aW9uPzogaW50ZXJmYWNlcy5Qb3NpdGlvbikge1xyXG4gICAgICAgIGxldCBsaW5rU2V0cyA9IHt9XHJcblxyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCAmJiAoJ3gnIGluIHBvc2l0aW9uIHx8ICd5JyBpbiBwb3NpdGlvbikpIHtcclxuICAgICAgICAgICAgaWYgKCd4JyBpbiBwb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kX3Bvc2l0aW9uWyd4J10gPSBwb3NpdGlvbi54XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCd5JyBpbiBwb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kX3Bvc2l0aW9uWyd5J10gPSBwb3NpdGlvbi55XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRfY29yZS4kX3JlbmRlcmVyLnNob3VsZExhenlVcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRfcG9zaXRpb25cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxpbmtTZXRzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZpbmQgbGlua3MgZnJvbS90byB0aGlzIG5vZGVcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IHRoaXMuJF9jb3JlLiRfc291cmNlSWQybGlua3MuZ2V0KHRoaXMuJF9pZCksXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLiRfY29yZS4kX3RhcmdldElkMmxpbmtzLmdldCh0aGlzLiRfaWQpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMobGlua1NldHMpLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZW50cnlbMF06ICdzb3VyY2UnIC8gJ3RhcmdldCdcclxuICAgICAgICAgICAgICAgICAgICAvLyBlbnRyeVsxXTogdGhlIGxpbmsgc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZW50cnlbMF0gYXMgTGlua0F0dHJcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXQgPSBlbnRyeVsxXSBhcyBTZXQ8TGluaz5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfcmVuZGVyZXIuaW5jcmVhc2VNb2RpZmllZEVsZW1lbnRzQ291bnRCeShzZXQuc2l6ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBsaW5rIG9mIHNldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9yZW5kZXJlci5saW5rTWFuYWdlci5jaGFuZ2VBdHRyaWJ1dGUobGluaywga2V5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRfY29yZS4kX3JlbmRlcmVyLmluY3JlYXNlTW9kaWZpZWRFbGVtZW50c0NvdW50QnkoMSlcclxuICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfcmVuZGVyZXIubm9kZU1hbmFnZXIuY2hhbmdlQXR0cmlidXRlKHRoaXMsICdwb3NpdGlvbicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfcG9zaXRpb25cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldCB0aGUgaWQgb2YgdGhpcyBub2RlLlxyXG4gICAgICogaXQgaXMgb25seSB1c2VkIGZvciBjb25zdHJ1Y3RvclxyXG4gICAgICogYmVjYXVzZSBhIG5vZGUncyBpZCBpcyBub3QgYWxsb3dlZCB0byBiZSBjaGFuZ2VkLlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxyXG4gICAgICogQHJldHVybnMgbm90aGluZ1xyXG4gICAgICogQG1lbWJlcm9mIE5vZGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSAkX3NldElkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoaXNWYWxpZElkKHZhbHVlKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy4kX2NvcmUuJF9pZDJub2RlLmhhcyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRHVwbGljYXRlIG5vZGUgKCR7dmFsdWV9KSBpcyBub3QgYWxsb3dlZC5gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkSWQodGhpcy4kX2lkKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IGNoYW5nZSB0aGUgaWQgb2YgYW4gZXhpc3Qgbm9kZS4nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfaWQybm9kZS5zZXQodmFsdWUsIHRoaXMpXHJcbiAgICAgICAgICAgIHRoaXMuJF9pZCA9IHZhbHVlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIElEICR7dmFsdWV9YClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vZGVcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgSmlhY2hlbmcgUGFuIDxqYWNraWVhbnhpc0BnbWFpbC5jb20+XHJcbiAqIEBkZXNjcmlwdGlvbiBQcm92aWRlIHRoZSBlbnRyYW5jZSBvZiBOZXRWLmpzLlxyXG4gKiBAZGVwZW5kZW5jZXMgaW50ZXJmYWNlcy50cywgdXRpbHMvbWFwMi5qcywgbm9kZS50cywgbGluay50c1xyXG4gKi9cclxuXHJcbmltcG9ydCAqIGFzIGludGVyZmFjZXMgZnJvbSAnLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgTWFwMiBmcm9tICcuL3V0aWxzL21hcDInXHJcbmltcG9ydCBOb2RlIGZyb20gJy4vZWxlbWVudHMvbm9kZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnLi9lbGVtZW50cy9saW5rJ1xyXG5pbXBvcnQgKiBhcyBkZWZhdWx0Q29uZmlncyBmcm9tICcuL2NvbmZpZ3MnXHJcbmltcG9ydCAqIGFzIGRhdGFzZXQgZnJvbSAnLi9kYXRhc2V0J1xyXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4vcmVuZGVyZXInXHJcbmltcG9ydCB7IEludGVyYWN0aW9uTWFuYWdlciB9IGZyb20gJy4vaW50ZXJhY3Rpb24vaW50ZXJhY3Rpb24nXHJcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJy4vdXRpbHMvdXRpbHMnXHJcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyBFTVBUWV9GVU5DVElPTiB9IGZyb20gJy4vdXRpbHMvY29uc3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXRWIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgVXRpbHMgPSBVdGlsc1xyXG5cclxuICAgIHB1YmxpYyAkX2lkMm5vZGUgPSBuZXcgTWFwKClcclxuICAgIHB1YmxpYyAkX2VuZHMybGluayA9IG5ldyBNYXAyKClcclxuICAgIHB1YmxpYyAkX3NvdXJjZUlkMmxpbmtzOiBNYXA8c3RyaW5nLCBTZXQ8TGluaz4+ID0gbmV3IE1hcCgpXHJcbiAgICBwdWJsaWMgJF90YXJnZXRJZDJsaW5rczogTWFwPHN0cmluZywgU2V0PExpbms+PiA9IG5ldyBNYXAoKVxyXG4gICAgcHVibGljICRfY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudFxyXG4gICAgcHVibGljICRfY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudFxyXG4gICAgcHVibGljICRfcmVuZGVyZXI6IFJlbmRlcmVyXHJcbiAgICBwdWJsaWMgJF9jb25maWdzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkZWZhdWx0Q29uZmlncykpIC8vIE5PVEU6IGRlZXAgY29weSBjb25maWdzXHJcblxyXG4gICAgcHVibGljICRfdHJhbnNmb3JtOiBpbnRlcmZhY2VzLlRyYW5zZm9ybSA9IHsgeDogMCwgeTogMCwgazogMSB9XHJcblxyXG4gICAgcHVibGljICRfbGF6eVVwZGF0ZSA9IGZhbHNlIC8vIGZsYWcgdG8gY29udHJvbCBsYXp5IHVwZGF0ZVxyXG5cclxuICAgIHB1YmxpYyAkX2ludGVyYWN0aW9uTWFuYWdlcjogSW50ZXJhY3Rpb25NYW5hZ2VyXHJcbiAgICBwcml2YXRlICRfZGF0YTogaW50ZXJmYWNlcy5Ob2RlTGlua0RhdGEgPSB7IG5vZGVzOiBbXSwgbGlua3M6IFtdIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBjcmVhdGUgTmV0ViBvYmplY3QuXHJcbiAgICAgKiBAcGFyYW0gY29uZmlncyBjb25maWd1cmF0aW9ucyBvZiBOZXRWLCBtdXN0IGluY2x1ZGUgYSBgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudGAgdGVybVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoY29uZmlnczogYW55KSB7XHJcbiAgICAgICAgaWYgKCEoJ2NvbnRhaW5lcicgaW4gY29uZmlncykgfHwgY29uZmlncy5jb250YWluZXIudGFnTmFtZSAhPT0gJ0RJVicpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0NvbnRhaW5lciBzaG91bGQgYmUgc3BlY2lmaWVkIGFzIGEgZGl2IGVsZW1lbnQhJylcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy4kX2NvbnRhaW5lciA9IGNvbmZpZ3MuY29udGFpbmVyXHJcblxyXG4gICAgICAgIHRoaXMuJF9jb25maWdzID0gVXRpbHMub3ZlcnJpZGUodGhpcy4kX2NvbmZpZ3MsIGNvbmZpZ3MpXHJcbiAgICAgICAgZGVsZXRlIHRoaXMuJF9jb25maWdzWydjb250YWluZXInXVxyXG5cclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSAvLyBUT0RPOiBjb25zaWRlciBub2RlIGVudmlyb21lbnQsIGRvY3VtZW50IG5vdCBkZWZpbmVkXHJcbiAgICAgICAgY29uc3QgcGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcclxuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSB0aGlzLiRfY29uZmlncy53aWR0aCArICdweCdcclxuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gdGhpcy4kX2NvbmZpZ3MuaGVpZ2h0ICsgJ3B4J1xyXG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgU3RyaW5nKHRoaXMuJF9jb25maWdzLndpZHRoICogcGl4ZWxSYXRpbykpXHJcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgU3RyaW5nKHRoaXMuJF9jb25maWdzLmhlaWdodCAqIHBpeGVsUmF0aW8pKVxyXG4gICAgICAgIHRoaXMuJF9jb250YWluZXIuYXBwZW5kQ2hpbGQoY2FudmFzKVxyXG4gICAgICAgIHRoaXMuJF9jYW52YXMgPSBjYW52YXNcclxuXHJcbiAgICAgICAgdGhpcy4kX3JlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHtcclxuICAgICAgICAgICAgY2FudmFzLFxyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy4kX2NvbmZpZ3Mud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy4kX2NvbmZpZ3MuaGVpZ2h0LFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuJF9jb25maWdzLmJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgICAgbm9kZUxpbWl0OiB0aGlzLiRfY29uZmlncy5ub2RlTGltaXQsXHJcbiAgICAgICAgICAgIGxpbmtMaW1pdDogdGhpcy4kX2NvbmZpZ3MubGlua0xpbWl0LFxyXG4gICAgICAgICAgICBnZXRBbGxOb2RlczogdGhpcy5ub2Rlcy5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBnZXRBbGxMaW5rczogdGhpcy5saW5rcy5iaW5kKHRoaXMpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy4kX2ludGVyYWN0aW9uTWFuYWdlciA9IG5ldyBJbnRlcmFjdGlvbk1hbmFnZXIodGhpcylcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldC9zZXQgY2FudmFzJ3MgYmFja2dyb3VuZCBjb2xvclxyXG4gICAgICogQHBhcmFtIGNvbG9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBiYWNrZ3JvdW5kQ29sb3IoY29sb3I/OiBpbnRlcmZhY2VzLkNvbG9yKSB7XHJcbiAgICAgICAgaWYgKGNvbG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9jb25maWdzLmJhY2tncm91bmRDb2xvciA9IGNvbG9yXHJcbiAgICAgICAgICAgIHRoaXMuJF9yZW5kZXJlci5zZXRCYWNrZ3JvdW5kQ29sb3IoY29sb3IpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfY29uZmlncy5iYWNrZ3JvdW5kQ29sb3JcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBkYXRhIGdldHRlciBzZXR0ZXJcclxuICAgICAqIEBwYXJhbSBub2RlTGlua0RhdGE/IHRoZSBub2RlLWxpbmstZGF0YSBvZiBhIGdyYXBoLCBwcm92aWRlZD9zZXR0ZXI6Z2V0dGVyO1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGF0YShub2RlTGlua0RhdGE/OiBpbnRlcmZhY2VzLk5vZGVMaW5rRGF0YSkge1xyXG4gICAgICAgIGlmIChub2RlTGlua0RhdGEgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kX2RhdGFcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBkZWxldGUgb2xkIGRhdGFcclxuICAgICAgICAgICAgdGhpcy4kX2RhdGEgPSB7IC4uLnRoaXMuJF9kYXRhLCAuLi5ub2RlTGlua0RhdGEgfVxyXG4gICAgICAgICAgICB0aGlzLiRfaWQybm9kZSA9IG5ldyBNYXAoKVxyXG4gICAgICAgICAgICB0aGlzLiRfZW5kczJsaW5rID0gbmV3IE1hcDIoKVxyXG4gICAgICAgICAgICB0aGlzLiRfc291cmNlSWQybGlua3MgPSBuZXcgTWFwKClcclxuICAgICAgICAgICAgdGhpcy4kX3RhcmdldElkMmxpbmtzID0gbmV3IE1hcCgpXHJcblxyXG4gICAgICAgICAgICB0aGlzLiRfcmVuZGVyZXIuY2xlYXJEYXRhKClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWRkTm9kZXModGhpcy4kX2RhdGEubm9kZXMpXHJcbiAgICAgICAgICAgIHRoaXMuYWRkTGlua3ModGhpcy4kX2RhdGEubGlua3MpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIGluaXRpYWxpemUgYW5kIGFkZCBhIG5vZGVcclxuICAgICAqIEBwYXJhbSBub2RlRGF0YSB0aGUgZGF0YSBvZiBhIG5vZGUsIGluY2x1ZGUgaWQsIHN0eWxlcy4uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkTm9kZShub2RlRGF0YTogaW50ZXJmYWNlcy5Ob2RlRGF0YSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFkZE5vZGVzKFtub2RlRGF0YV0pWzBdXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gaW5pdGlhbGl6ZSBhbmQgYWRkIGEgbGlua1xyXG4gICAgICogQHBhcmFtIGxpbmtEYXRhIHRoZSBkYXRhIG9mIGEgbGluaywgaW5jbHVkZSBzb3VyY2UsIHRhcmdldCwgYW5kIHN0eWxlcy4uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkTGluayhsaW5rRGF0YTogaW50ZXJmYWNlcy5MaW5rRGF0YSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFkZExpbmtzKFtsaW5rRGF0YV0pWzBdXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gaW5pdGlhbGl6ZSBhbmQgYWRkIGFuIGFycmF5IG9mIG5vZGVzLlxyXG4gICAgICogQHBhcmFtIHtpbnRlcmZhY2VzLk5vZGVEYXRhW119IG5vZGVzRGF0YTogYSBkYXRhIGFycmF5IG9mIG5vZGVzIHRvYmUgYWRkZWRcclxuICAgICAqIEBtZW1iZXJvZiBOZXRWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGROb2Rlcyhub2Rlc0RhdGE6IGludGVyZmFjZXMuTm9kZURhdGFbXSkge1xyXG4gICAgICAgIGNvbnN0IG5ld05vZGVzID0gbm9kZXNEYXRhLm1hcCgobm9kZURhdGEpID0+IHtcclxuICAgICAgICAgICAgbm9kZURhdGEuaWQgPSBub2RlRGF0YS5pZC50b1N0cmluZygpXHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBuZXcgTm9kZSh0aGlzLCBub2RlRGF0YSlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBub2RlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLiRfcmVuZGVyZXIuYWRkTm9kZXMobmV3Tm9kZXMpXHJcbiAgICAgICAgcmV0dXJuIG5ld05vZGVzXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gaW5pdGlhbGl6ZSBhbmQgYWRkIGFuIGFycmF5IG9mIGxpbmtzLlxyXG4gICAgICogQHBhcmFtIHtpbnRlcmZhY2VzLkxpbmtEYXRhW119IGxpbmtzRGF0YTogYSBkYXRhIGFycmF5IG9mIGxpbmtzIHRvYmUgYWRkZWRcclxuICAgICAqIEBtZW1iZXJvZiBOZXRWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRMaW5rcyhsaW5rc0RhdGE6IGludGVyZmFjZXMuTGlua0RhdGFbXSkge1xyXG4gICAgICAgIGNvbnN0IG5ld0xpbmtzID0gbmV3IEFycmF5KGxpbmtzRGF0YS5sZW5ndGgpXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5rc0RhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbGlua0RhdGEgPSBsaW5rc0RhdGFbaV1cclxuICAgICAgICAgICAgbGlua0RhdGEuc291cmNlID0gbGlua0RhdGEuc291cmNlLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgbGlua0RhdGEudGFyZ2V0ID0gbGlua0RhdGEudGFyZ2V0LnRvU3RyaW5nKClcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBuZXcgTGluayh0aGlzLCBsaW5rRGF0YSlcclxuICAgICAgICAgICAgbmV3TGlua3NbaV0gPSBsaW5rXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuJF9yZW5kZXJlci5hZGRMaW5rcyhbLi4udGhpcy4kX2VuZHMybGluay52YWx1ZXMoKV0pIC8vIE5PVEU6IHByZXNlcnZlIGxpbmsgb3JkZXIsIG5vdCBlbGVnYW50XHJcbiAgICAgICAgcmV0dXJuIG5ld0xpbmtzXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gZ2V0IGEgTm9kZSBvYmplY3QgZnJvbSB0aGUgaWQybm9kZSBNYXAgZGF0YSBzdHJ1Y3R1cmVcclxuICAgICAqIEBwYXJhbSBpZCBub2RlIGlkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXROb2RlQnlJZChpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9pZDJub2RlLmdldChpZClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBnZXQgYSBMaW5rIG9iamVjdCBmcm9tIHRoZSBlbmRzMmxpbmsgTWFwMiBkYXRhIHN0cnVjdHVyZVxyXG4gICAgICogQHBhcmFtIGVuZElkMSBvbmUgZW5kIGlkIG9mIHRoZSBsaW5rIChzb3VyY2Ugb3IgdGFyZ2V0KVxyXG4gICAgICogQHBhcmFtIGVuZElkMiBhbm90aGVyIGVuZCBpZCBvZiB0aGUgbGluayAoc291cmNlIG9yIHRhcmdldClcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldExpbmtCeUVuZHMoZW5kSWQxOiBzdHJpbmcsIGVuZElkMjogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9lbmRzMmxpbmsuZ2V0KFtlbmRJZDEsIGVuZElkMl0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gZ2V0IGFsbCBub2Rlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbm9kZXMoKTogTm9kZVtdIHtcclxuICAgICAgICByZXR1cm4gWy4uLnRoaXMuJF9pZDJub2RlLnZhbHVlcygpXVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIGdldCBhbGwgbGlua3NcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxpbmtzKCk6IExpbmtbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLiRfZW5kczJsaW5rLnZhbHVlcygpXVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIHdpcGUgYWxsIHRoZSBkYXRhIGluIHRoZSBpbnN0YW5jZVxyXG4gICAgICogQG1lbWJlcm9mIE5ldFZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHdpcGUoKSB7XHJcbiAgICAgICAgdGhpcy4kX2RhdGEgPSB1bmRlZmluZWRcclxuICAgICAgICB0aGlzLiRfaWQybm9kZSA9IG5ldyBNYXAoKVxyXG4gICAgICAgIHRoaXMuJF9lbmRzMmxpbmsgPSBuZXcgTWFwMigpXHJcbiAgICAgICAgdGhpcy4kX3NvdXJjZUlkMmxpbmtzID0gbmV3IE1hcCgpXHJcbiAgICAgICAgdGhpcy4kX3RhcmdldElkMmxpbmtzID0gbmV3IE1hcCgpXHJcbiAgICAgICAgdGhpcy4kX3JlbmRlcmVyLmNsZWFyRGF0YSgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBkaXNwb3NlIE5ldFYgb2JqZWN0LCBjbGVhciBhbGwgc3R1ZmZzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgIHRoaXMud2lwZSgpXHJcbiAgICAgICAgdGhpcy4kX3JlbmRlcmVyLmRpc3Bvc2UoKVxyXG4gICAgICAgIHRoaXMuJF9jYW52YXMucmVtb3ZlKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiByZXR1cm4gYnVpbGQtaW4gZGF0YXNldCBhY2NvcmRpbmcgdG8gbmFtZVxyXG4gICAgICogQHBhcmFtIG5hbWUgZGF0YXNldCBuYW1lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkRGF0YXNldChuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAobmFtZSBpbiBkYXRhc2V0KSByZXR1cm4gZGF0YXNldFtuYW1lXVxyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKGBOZXRWIGRvZXMgbm90IGhhdmUgYnVpbGQtaW4gZGF0YXNldDogJHtuYW1lfWApXHJcbiAgICAgICAgcmV0dXJuIHsgbm9kZXM6IFtdLCBsaW5rczogW10gfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2l2ZW4gcG9zaXRpb24sIHJldHVybiBlbGVtZW50IG9uIHRoaXMgcGl4ZWwgaWYgZXhpc3RzXHJcbiAgICAgKiBAcGFyYW0geCB4IHBvc1xyXG4gICAgICogQHBhcmFtIHkgeSBwb3NcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEVsZW1lbnRCeVBvc2l0aW9uKFxyXG4gICAgICAgIHBvc2l0aW9uOiBpbnRlcmZhY2VzLlBvc2l0aW9uXHJcbiAgICApOiB7IHR5cGU6ICdub2RlJyB8ICdsaW5rJzsgZWxlbWVudDogTm9kZSB8IExpbmsgfSB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLiRfcmVuZGVyZXIuZ2V0SWRCeVBvc2l0aW9uKHBvc2l0aW9uKVxyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGlkID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5SWQoaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub2RlJyxcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBub2RlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaWQpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5rID0gdGhpcy5nZXRMaW5rQnlFbmRzKGlkWzBdLCBpZFsxXSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2xpbmsnLFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGxpbmtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBkcmF3IGVsZW1lbnRzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuJF9yZW5kZXJlci5kcmF3KClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiB0cmFuc2l0aW9uIGJldHdlZW4gZGlmZmVyZW50IHRyYW5zZm9ybXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHRyYW5zaXRpb24oXHJcbiAgICAgICAgdHJhbnNmb3JtczogaW50ZXJmYWNlcy5UcmFuc2Zvcm1bXSxcclxuICAgICAgICBkdXJhdGlvbnNNUzogbnVtYmVyW10sXHJcbiAgICAgICAgY2FsbGJhY2s/OiAoZTogYW55KSA9PiB7fVxyXG4gICAgKSB7XHJcbiAgICAgICAgLy8gaW50ZXJwb2xhdGlvblxyXG4gICAgICAgIGNvbnN0IFNURVBTX1BFUl9TRUNPTkQgPSA2MFxyXG4gICAgICAgIGNvbnN0IE1TX1BFUl9TRUNPTkQgPSAxMDAwXHJcbiAgICAgICAgY29uc3QgU1RFUFNfUEVSX01TID0gU1RFUFNfUEVSX1NFQ09ORCAvIE1TX1BFUl9TRUNPTkRcclxuICAgICAgICBjb25zdCBNU19QRVJfU1RFUCA9IDEgLyBTVEVQU19QRVJfTVNcclxuICAgICAgICBjb25zdCB0cmFuc2l0aW9uRnJvbVRyYW5zZm9ybXMgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gdHJhbnNmb3Jtcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBUT1RBTF9TVEVQUyA9IE1hdGgubWF4KFNURVBTX1BFUl9NUyAqIGR1cmF0aW9uc01TW2luZGV4XSwgMSlcclxuICAgICAgICAgICAgY29uc3QgbmV3VHJhbnNmb3JtID0ge1xyXG4gICAgICAgICAgICAgICAgLi4udHJhbnNmb3Jtc1tpbmRleF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBkaWZmZXJlbmNlID0ge1xyXG4gICAgICAgICAgICAgICAgeDogdHJhbnNmb3Jtc1tpbmRleCArIDFdLnggLSB0cmFuc2Zvcm1zW2luZGV4XS54LFxyXG4gICAgICAgICAgICAgICAgeTogdHJhbnNmb3Jtc1tpbmRleCArIDFdLnkgLSB0cmFuc2Zvcm1zW2luZGV4XS55LFxyXG4gICAgICAgICAgICAgICAgazogdHJhbnNmb3Jtc1tpbmRleCArIDFdLmsgLSB0cmFuc2Zvcm1zW2luZGV4XS5rXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luVHJhbnNsYXRlID0ge1xyXG4gICAgICAgICAgICAgICAgeDogdHJhbnNmb3Jtc1tpbmRleF0ueCxcclxuICAgICAgICAgICAgICAgIHk6IHRyYW5zZm9ybXNbaW5kZXhdLnksXHJcbiAgICAgICAgICAgICAgICBrOiB0cmFuc2Zvcm1zW2luZGV4XS5rXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZWFzZSA9ICh4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB4ICogeFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBzdGVwID0gMVxyXG4gICAgICAgICAgICBjb25zdCBhbmltYXRpb24gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuZXdUcmFuc2Zvcm0ueCA9IG9yaWdpblRyYW5zbGF0ZS54ICsgZGlmZmVyZW5jZS54ICogZWFzZShzdGVwIC8gVE9UQUxfU1RFUFMpXHJcbiAgICAgICAgICAgICAgICBuZXdUcmFuc2Zvcm0ueSA9IG9yaWdpblRyYW5zbGF0ZS55ICsgZGlmZmVyZW5jZS55ICogZWFzZShzdGVwIC8gVE9UQUxfU1RFUFMpXHJcbiAgICAgICAgICAgICAgICBuZXdUcmFuc2Zvcm0uayA9IG9yaWdpblRyYW5zbGF0ZS5rICsgZGlmZmVyZW5jZS5rICogZWFzZShzdGVwIC8gVE9UQUxfU1RFUFMpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybShuZXdUcmFuc2Zvcm0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXcoKVxyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayh7IHRyYW5zZm9ybTogbmV3VHJhbnNmb3JtIH0pXHJcbiAgICAgICAgICAgICAgICBzdGVwICs9IDFcclxuICAgICAgICAgICAgICAgIGlmIChzdGVwID49IFRPVEFMX1NURVBTKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChhbmltYXRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkZyb21UcmFuc2Zvcm1zKGluZGV4ICsgMSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgTVNfUEVSX1NURVApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyYW5zaXRpb25Gcm9tVHJhbnNmb3JtcygwKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcGFuIG9uIGNhbnZhcyB0byBnZXQgZ2l2ZW4gbm9kZSBjZW50ZXJlZFxyXG4gICAgICogQHBhcmFtIG5vZGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNlbnRlck9uKG5vZGU6IE5vZGUpOiBpbnRlcmZhY2VzLlRyYW5zZm9ybSB7XHJcbiAgICAgICAgY29uc3QgcG9zID0gbm9kZS5wb3NpdGlvbigpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9pbnRlcmFjdGlvbk1hbmFnZXIuY2VudGVyUG9zaXRpb24ocG9zKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcHJvZ21hdGljYWxseSBwYW5cclxuICAgICAqIEBwYXJhbSB4XHJcbiAgICAgKiBAcGFyYW0geVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcGFuQnkoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kX2ludGVyYWN0aW9uTWFuYWdlci5wYW5CeSh4LCB5KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcHJvZ21hdGljYWxseSB6b29tXHJcbiAgICAgKiBAcGFyYW0gZmFjdG9yIHpvb20gZmFjdG9yXHJcbiAgICAgKiBAcGFyYW0gY2VudGVyIG9wdGlvbmFsLCB6b29tIGNlbnRlciBwb3NpdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgem9vbUJ5KGZhY3RvcjogbnVtYmVyLCBjZW50ZXI/OiBQb3NpdGlvbikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRfaW50ZXJhY3Rpb25NYW5hZ2VyLnpvb21CeShmYWN0b3IsIGNlbnRlcilcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldC9zZXQgbmV0didzIHRyYW5zZm9ybVxyXG4gICAgICogQHBhcmFtIHZhbHVlIG9wdGlvbmFsLCB0cmFuc2Zvcm0gdG8gc2V0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0cmFuc2Zvcm0odmFsdWU/OiBpbnRlcmZhY2VzLlRyYW5zZm9ybSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRfdHJhbnNmb3JtXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuJF90cmFuc2Zvcm0gPSB2YWx1ZVxyXG4gICAgICAgIHRoaXMuJF9yZW5kZXJlci5zZXRUcmFuc2Zvcm0odGhpcy4kX3RyYW5zZm9ybSlcclxuICAgICAgICByZXR1cm4gdGhpcy4kX3RyYW5zZm9ybVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gZXZlbnQgbGlzdGVuZXJcclxuICAgICAqIEBtZW1iZXJvZiBOZXRWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbihldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s6IChlOiBhbnkpID0+IGFueSkge1xyXG4gICAgICAgIGlmIChldmVudE5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3pvb20nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9pbnRlcmFjdGlvbk1hbmFnZXIub25ab29tKGNhbGxiYWNrID8gY2FsbGJhY2sgOiBFTVBUWV9GVU5DVElPTilcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50TmFtZS50b0xvd2VyQ2FzZSgpID09PSAncGFuJykge1xyXG4gICAgICAgICAgICB0aGlzLiRfaW50ZXJhY3Rpb25NYW5hZ2VyLm9uUGFuKGNhbGxiYWNrID8gY2FsbGJhY2sgOiBFTVBUWV9GVU5DVElPTilcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50TmFtZS50b0xvd2VyQ2FzZSgpID09PSAnbW91c2Vkb3duJykge1xyXG4gICAgICAgICAgICB0aGlzLiRfaW50ZXJhY3Rpb25NYW5hZ2VyLm9uTW91c2Vkb3duKGNhbGxiYWNrID8gY2FsbGJhY2sgOiBFTVBUWV9GVU5DVElPTilcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50TmFtZS50b0xvd2VyQ2FzZSgpID09PSAnbW91c2V1cCcpIHtcclxuICAgICAgICAgICAgdGhpcy4kX2ludGVyYWN0aW9uTWFuYWdlci5vbk1vdXNldXAoY2FsbGJhY2sgPyBjYWxsYmFjayA6IEVNUFRZX0ZVTkNUSU9OKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnROYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdjbGljaycpIHtcclxuICAgICAgICAgICAgdGhpcy4kX2ludGVyYWN0aW9uTWFuYWdlci5vbkNsaWNrKGNhbGxiYWNrID8gY2FsbGJhY2sgOiBFTVBUWV9GVU5DVElPTilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gdHVybiBvZmYgZXZlbnQgbGlzdGVuZXJcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTmV0VlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb2ZmKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjaz86IChlOiBhbnkpID0+IGFueSkge1xyXG4gICAgICAgIGlmIChldmVudE5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3pvb20nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9pbnRlcmFjdGlvbk1hbmFnZXIub2ZmWm9vbShjYWxsYmFjayA/IGNhbGxiYWNrIDogRU1QVFlfRlVOQ1RJT04pXHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudE5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3BhbicpIHtcclxuICAgICAgICAgICAgdGhpcy4kX2ludGVyYWN0aW9uTWFuYWdlci5vZmZQYW4oY2FsbGJhY2sgPyBjYWxsYmFjayA6IEVNUFRZX0ZVTkNUSU9OKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnROYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdtb3VzZWRvd24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9pbnRlcmFjdGlvbk1hbmFnZXIub2ZmTW91c2Vkb3duKGNhbGxiYWNrID8gY2FsbGJhY2sgOiBFTVBUWV9GVU5DVElPTilcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50TmFtZS50b0xvd2VyQ2FzZSgpID09PSAnbW91c2V1cCcpIHtcclxuICAgICAgICAgICAgdGhpcy4kX2ludGVyYWN0aW9uTWFuYWdlci5vZmZNb3VzZXVwKGNhbGxiYWNrID8gY2FsbGJhY2sgOiBFTVBUWV9GVU5DVElPTilcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50TmFtZS50b0xvd2VyQ2FzZSgpID09PSAnY2xpY2snKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9pbnRlcmFjdGlvbk1hbmFnZXIub2ZmQ2xpY2soY2FsbGJhY2sgPyBjYWxsYmFjayA6IEVNUFRZX0ZVTkNUSU9OKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gICAgLy8gdG8gZW5zdXJlIHdpbmRvdy5OZXRWIHdpbGwgbm90IHJlcG9ydCB0cyBlcnJvclxyXG4gICAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICAgICAgTmV0VjogYW55XHJcbiAgICB9XHJcbn1cclxuXHJcbndpbmRvdy5OZXRWID0gTmV0VlxyXG4iLCIvKipcclxuICogQGF1dGhvciBYaWFvZG9uZyBaaGFvIDx6aGFveGlhb2RvbmdAemp1LmVkdS5jbj5cclxuICogQGRlc2NyaXB0aW9uIGhhbmRsZSBhbGwgaW50ZXJhY3Rpb24gaW4gTmV0VlxyXG4gKi9cclxuXHJcbmltcG9ydCBOZXRWIGZyb20gJy4uL2luZGV4J1xyXG5pbXBvcnQgTm9kZSBmcm9tICcuLi9lbGVtZW50cy9ub2RlJ1xyXG5pbXBvcnQgRWxlbWVudCBmcm9tICcuLi9lbGVtZW50cy9lbGVtZW50J1xyXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uL2ludGVyZmFjZXMnXHJcblxyXG5leHBvcnQgY2xhc3MgSW50ZXJhY3Rpb25NYW5hZ2VyIHtcclxuICAgIHByaXZhdGUgbmV0djogTmV0VlxyXG4gICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50XHJcblxyXG4gICAgcHJpdmF0ZSBpc1pvb21MaXN0ZW5lZCA9IGZhbHNlXHJcbiAgICBwcml2YXRlIGlzTW91c2VMaXN0ZW5lZCA9IGZhbHNlXHJcbiAgICBwcml2YXRlIG1vdXNlRXZlbnRDYWxsYmFja0NvdW50ID0gMFxyXG5cclxuICAgIC8vIG1hcCB1c2VyIGRlZmluZWQgY2FsbGJhY2sgPT4gaGFuZGxlcnMsIGNhbiBiZSB1c2UgdG8gcmVtb3ZlIGxpc3RlbmVyc1xyXG4gICAgcHJpdmF0ZSB6b29tQ2FsbGJhY2tTZXQ6IFNldDwoZTogYW55KSA9PiBhbnk+XHJcbiAgICBwcml2YXRlIHBhbkNhbGxiYWNrU2V0OiBTZXQ8KGU6IGFueSkgPT4gYW55PlxyXG4gICAgcHJpdmF0ZSBjbGlja0NhbGxiYWNrU2V0OiBTZXQ8KGU6IGFueSkgPT4gYW55PlxyXG4gICAgcHJpdmF0ZSBtb3VzZWRvd25DYWxsYmFja1NldDogU2V0PChlOiBhbnkpID0+IGFueT5cclxuICAgIHByaXZhdGUgbW91c2V1cENhbGxiYWNrU2V0OiBTZXQ8KGU6IGFueSkgPT4gYW55PlxyXG5cclxuICAgIHByaXZhdGUgaXNNb3VzZURvd24gPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBpc01vdXNlTW92ZSA9IGZhbHNlXHJcbiAgICBwcml2YXRlIG1vdXNlRG93bkVsZW1lbnRcclxuICAgIHByaXZhdGUgbW91c2VNb3ZlRWxlbWVudFxyXG4gICAgcHJpdmF0ZSBtb3VzZURvd25FbGVtZW50T3JpZ2luUG9zOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gLy8gTk9URTogcmVjb3JkIHBvcywgb25seSBzdXBwb3J0IG5vZGUncyBkcmFnXHJcblxyXG4gICAgcHJpdmF0ZSBtb3VzZURvd25Qb3M6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVxyXG4gICAgcHJpdmF0ZSBkcmFnU3RhcnRUcmFuc2Zvcm06IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IGs6IG51bWJlciB9XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG5ldHY6IE5ldFYpIHtcclxuICAgICAgICB0aGlzLm5ldHYgPSBuZXR2XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSB0aGlzLm5ldHYuJF9jb250YWluZXIucXVlcnlTZWxlY3RvcignY2FudmFzJylcclxuICAgICAgICB0aGlzLnpvb21DYWxsYmFja1NldCA9IG5ldyBTZXQoKVxyXG4gICAgICAgIHRoaXMucGFuQ2FsbGJhY2tTZXQgPSBuZXcgU2V0KClcclxuICAgICAgICB0aGlzLmNsaWNrQ2FsbGJhY2tTZXQgPSBuZXcgU2V0KClcclxuICAgICAgICB0aGlzLm1vdXNlZG93bkNhbGxiYWNrU2V0ID0gbmV3IFNldCgpXHJcbiAgICAgICAgdGhpcy5tb3VzZXVwQ2FsbGJhY2tTZXQgPSBuZXcgU2V0KClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHByb2dtYXRpY2FsbHkgcGFuXHJcbiAgICAgKiBAcGFyYW0geFxyXG4gICAgICogQHBhcmFtIHlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBhbkJ5KHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgbmV3VHJhbnNmb3JtID0geyAuLi50aGlzLm5ldHYuJF90cmFuc2Zvcm0gfVxyXG4gICAgICAgIG5ld1RyYW5zZm9ybS54ICs9IHhcclxuICAgICAgICBuZXdUcmFuc2Zvcm0ueSArPSB5XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0di50cmFuc2Zvcm0obmV3VHJhbnNmb3JtKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcHJvZ21hdGljYWxseSB6b29tXHJcbiAgICAgKiBAcGFyYW0gZmFjdG9yIHpvb20gZmFjdG9yXHJcbiAgICAgKiBAcGFyYW0gY2VudGVyIG9wdGlvbmFsLCB6b29tIGNlbnRlciBwb3NpdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgem9vbUJ5KGZhY3RvcjogbnVtYmVyLCBjZW50ZXI/OiBQb3NpdGlvbikge1xyXG4gICAgICAgIGNvbnN0IG5ld1RyYW5zZm9ybSA9IHsgLi4udGhpcy5uZXR2LiRfdHJhbnNmb3JtIH1cclxuICAgICAgICBsZXQgY2VudGVyUG9zID0gY2VudGVyXHJcbiAgICAgICAgaWYgKCFjZW50ZXJQb3MpIHtcclxuICAgICAgICAgICAgY2VudGVyUG9zID0geyB4OiB0aGlzLm5ldHYuJF9jb25maWdzLndpZHRoIC8gMiwgeTogdGhpcy5uZXR2LiRfY29uZmlncy5oZWlnaHQgLyAyIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBjZW50ZXJQb3NcclxuXHJcbiAgICAgICAgbmV3VHJhbnNmb3JtLnggPSAoMSAtIGZhY3RvcikgKiB4ICsgZmFjdG9yICogbmV3VHJhbnNmb3JtLnhcclxuICAgICAgICBuZXdUcmFuc2Zvcm0ueSA9ICgxIC0gZmFjdG9yKSAqIHkgKyBmYWN0b3IgKiBuZXdUcmFuc2Zvcm0ueVxyXG5cclxuICAgICAgICBuZXdUcmFuc2Zvcm0uayAqPSBmYWN0b3JcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0di50cmFuc2Zvcm0obmV3VHJhbnNmb3JtKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogbW92ZSBjdXJyZW50IHBvc2l0aW9uIHRvIGNlbnRlciBvZiBjYW52YXNcclxuICAgICAqIEBwYXJhbSBwb3NcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNlbnRlclBvc2l0aW9uKHBvczogUG9zaXRpb24pIHtcclxuICAgICAgICBjb25zdCBuZXdUcmFuc2Zvcm0gPSB7IC4uLnRoaXMubmV0di4kX3RyYW5zZm9ybSB9XHJcbiAgICAgICAgY29uc3QgeCA9IHBvcy54ICogbmV3VHJhbnNmb3JtLmsgKyBuZXdUcmFuc2Zvcm0ueFxyXG4gICAgICAgIGNvbnN0IHkgPSBwb3MueSAqIG5ld1RyYW5zZm9ybS5rICsgbmV3VHJhbnNmb3JtLnlcclxuXHJcbiAgICAgICAgY29uc3QgY2VudGVyID0ge1xyXG4gICAgICAgICAgICB4OiB0aGlzLm5ldHYuJF9jb25maWdzLndpZHRoIC8gMixcclxuICAgICAgICAgICAgeTogdGhpcy5uZXR2LiRfY29uZmlncy5oZWlnaHQgLyAyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld1RyYW5zZm9ybS54ICs9IGNlbnRlci54IC0geFxyXG4gICAgICAgIG5ld1RyYW5zZm9ybS55ICs9IGNlbnRlci55IC0geVxyXG4gICAgICAgIHRoaXMubmV0di50cmFuc2Zvcm0obmV3VHJhbnNmb3JtKVxyXG4gICAgICAgIHJldHVybiBuZXdUcmFuc2Zvcm1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGluaXQgem9vbSBpbnRlcmFjdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25ab29tKGNhbGxiYWNrOiAoZTogYW55KSA9PiBhbnkpIHtcclxuICAgICAgICB0aGlzLnpvb21DYWxsYmFja1NldC5hZGQoY2FsbGJhY2spXHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc1pvb21MaXN0ZW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFdoZWVsTGlzdGVuZXJzKClcclxuICAgICAgICAgICAgdGhpcy5pc1pvb21MaXN0ZW5lZCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9mZlpvb20oY2FsbGJhY2s6IChlOiBhbnkpID0+IGFueSkge1xyXG4gICAgICAgIHRoaXMuem9vbUNhbGxiYWNrU2V0LmRlbGV0ZShjYWxsYmFjaylcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnpvb21DYWxsYmFja1NldC5zaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlV2hlZWxMaXN0ZW5lcnMoKVxyXG4gICAgICAgICAgICB0aGlzLmlzWm9vbUxpc3RlbmVkID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQ2xpY2soY2FsbGJhY2s6IChlOiBhbnkpID0+IGFueSkge1xyXG4gICAgICAgIHRoaXMuY2xpY2tDYWxsYmFja1NldC5hZGQoY2FsbGJhY2spXHJcbiAgICAgICAgdGhpcy5pbmNyZWFzZU1vdXNlRXZlbnRDYWxsYmFja0NvdW50QnkoMSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb2ZmQ2xpY2soY2FsbGJhY2s6IChlOiBhbnkpID0+IGFueSkge1xyXG4gICAgICAgIHRoaXMuY2xpY2tDYWxsYmFja1NldC5kZWxldGUoY2FsbGJhY2spXHJcbiAgICAgICAgdGhpcy5kZWNyZWFzZU1vdXNlRXZlbnRDYWxsYmFja0NvdW50QnkoMSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Nb3VzZWRvd24oY2FsbGJhY2s6IChlOiBhbnkpID0+IGFueSkge1xyXG4gICAgICAgIHRoaXMubW91c2Vkb3duQ2FsbGJhY2tTZXQuYWRkKGNhbGxiYWNrKVxyXG4gICAgICAgIHRoaXMuaW5jcmVhc2VNb3VzZUV2ZW50Q2FsbGJhY2tDb3VudEJ5KDEpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9mZk1vdXNlZG93bihjYWxsYmFjazogKGU6IGFueSkgPT4gYW55KSB7XHJcbiAgICAgICAgdGhpcy5tb3VzZWRvd25DYWxsYmFja1NldC5kZWxldGUoY2FsbGJhY2spXHJcbiAgICAgICAgdGhpcy5kZWNyZWFzZU1vdXNlRXZlbnRDYWxsYmFja0NvdW50QnkoMSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Nb3VzZXVwKGNhbGxiYWNrOiAoZTogYW55KSA9PiBhbnkpIHtcclxuICAgICAgICB0aGlzLm1vdXNldXBDYWxsYmFja1NldC5hZGQoY2FsbGJhY2spXHJcbiAgICAgICAgdGhpcy5pbmNyZWFzZU1vdXNlRXZlbnRDYWxsYmFja0NvdW50QnkoMSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb2ZmTW91c2V1cChjYWxsYmFjazogKGU6IGFueSkgPT4gYW55KSB7XHJcbiAgICAgICAgdGhpcy5tb3VzZXVwQ2FsbGJhY2tTZXQuZGVsZXRlKGNhbGxiYWNrKVxyXG4gICAgICAgIHRoaXMuZGVjcmVhc2VNb3VzZUV2ZW50Q2FsbGJhY2tDb3VudEJ5KDEpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uUGFuKGNhbGxiYWNrOiAoZTogYW55KSA9PiBhbnkpIHtcclxuICAgICAgICB0aGlzLnBhbkNhbGxiYWNrU2V0LmFkZChjYWxsYmFjaylcclxuICAgICAgICB0aGlzLmluY3JlYXNlTW91c2VFdmVudENhbGxiYWNrQ291bnRCeSgxKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvZmZQYW4oY2FsbGJhY2s6IChlOiBhbnkpID0+IGFueSkge1xyXG4gICAgICAgIHRoaXMucGFuQ2FsbGJhY2tTZXQuZGVsZXRlKGNhbGxiYWNrKVxyXG4gICAgICAgIHRoaXMuZGVjcmVhc2VNb3VzZUV2ZW50Q2FsbGJhY2tDb3VudEJ5KDEpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluY3JlYXNlTW91c2VFdmVudENhbGxiYWNrQ291bnRCeShuOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm1vdXNlRXZlbnRDYWxsYmFja0NvdW50ICs9IG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNNb3VzZUxpc3RlbmVkICYmIHRoaXMubW91c2VFdmVudENhbGxiYWNrQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIHRoZXJlIGlzIHNvbWUgbW91c2UgZXZlbnQgbGlzdGVuZWQgZWxlbWVudHNcclxuICAgICAgICAgICAgdGhpcy5hZGRNb3VzZUxpc3RlbmVycygpXHJcbiAgICAgICAgICAgIHRoaXMuaXNNb3VzZUxpc3RlbmVkID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVjcmVhc2VNb3VzZUV2ZW50Q2FsbGJhY2tDb3VudEJ5KG46IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubW91c2VFdmVudENhbGxiYWNrQ291bnQgLT0gblxyXG4gICAgICAgIGlmICh0aGlzLm1vdXNlRXZlbnRDYWxsYmFja0NvdW50IDw9IDAgJiYgIXRoaXMucGFuQ2FsbGJhY2tTZXQuc2l6ZSkge1xyXG4gICAgICAgICAgICAvLyBubyBwYW4gY2FsbGJhY2sgZnVuY3Rpb25zIGFuZCBubyBtb3VzZSBldmVudCBsaXN0ZW5lZCBlbGVtZW50c1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZU1vdXNlTGlzdGVuZXJzKClcclxuICAgICAgICAgICAgdGhpcy5pc01vdXNlTGlzdGVuZWQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwcml2YXRlIGhhbmRsZSB6b29tIChtb3VzZSB3aGVlbCkgZXZlbnRcclxuICAgICAqIEBwYXJhbSB7V2hlZWxFdmVudH0gZXZ0XHJcbiAgICAgKiBAbWVtYmVyb2YgSW50ZXJhY3Rpb25NYW5hZ2VyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlWm9vbShldnQ6IFdoZWVsRXZlbnQpIHtcclxuICAgICAgICBjb25zdCBuZXdUcmFuc2Zvcm0gPSB7IC4uLnRoaXMubmV0di4kX3RyYW5zZm9ybSB9XHJcbiAgICAgICAgY29uc3QgeCA9IGV2dC5vZmZzZXRYIHx8IGV2dC5wYWdlWCAtIHRoaXMuY2FudmFzLm9mZnNldExlZnRcclxuICAgICAgICBjb25zdCB5ID0gZXZ0Lm9mZnNldFkgfHwgZXZ0LnBhZ2VZIC0gdGhpcy5jYW52YXMub2Zmc2V0VG9wXHJcbiAgICAgICAgY29uc3QgZGVsdGEgPSBldnQuZGVsdGFZID8gZXZ0LmRlbHRhWSAvIDQwIDogZXZ0LmRldGFpbCA/IC1ldnQuZGV0YWlsIDogMFxyXG4gICAgICAgIGlmIChkZWx0YSkge1xyXG4gICAgICAgICAgICBjb25zdCBrID0gTWF0aC5wb3coMS4xLCBkZWx0YSlcclxuICAgICAgICAgICAgbmV3VHJhbnNmb3JtLnggPSAoMSAtIGspICogeCArIGsgKiBuZXdUcmFuc2Zvcm0ueFxyXG4gICAgICAgICAgICBuZXdUcmFuc2Zvcm0ueSA9ICgxIC0gaykgKiB5ICsgayAqIG5ld1RyYW5zZm9ybS55XHJcblxyXG4gICAgICAgICAgICBuZXdUcmFuc2Zvcm0uayAqPSBrXHJcblxyXG4gICAgICAgICAgICB0aGlzLm5ldHYudHJhbnNmb3JtKG5ld1RyYW5zZm9ybSlcclxuICAgICAgICAgICAgdGhpcy5uZXR2LmRyYXcoKVxyXG5cclxuICAgICAgICAgICAgdGhpcy56b29tQ2FsbGJhY2tTZXQuZm9yRWFjaCgoY2FsbGJhY2spID0+XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2dCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnem9vbScsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBuZXdUcmFuc2Zvcm1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJpdmF0ZSBoYW5kbGUgbW91c2UgZG93biBldmVudFxyXG4gICAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldnRcclxuICAgICAqIEBtZW1iZXJvZiBJbnRlcmFjdGlvbk1hbmFnZXJcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVNb3VzZURvd24oZXZ0OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGV2dC5vZmZzZXRYIHx8IGV2dC5wYWdlWCAtIHRoaXMuY2FudmFzLm9mZnNldExlZnRcclxuICAgICAgICBjb25zdCB5ID0gZXZ0Lm9mZnNldFkgfHwgZXZ0LnBhZ2VZIC0gdGhpcy5jYW52YXMub2Zmc2V0VG9wXHJcbiAgICAgICAgY29uc3QgeUludiA9IHRoaXMubmV0di4kX2NvbmZpZ3MuaGVpZ2h0IC0geVxyXG5cclxuICAgICAgICBjb25zdCBuZXdUcmFuc2Zvcm0gPSB7IC4uLnRoaXMubmV0di4kX3RyYW5zZm9ybSB9XHJcblxyXG4gICAgICAgIHRoaXMuaXNNb3VzZURvd24gPSB0cnVlXHJcbiAgICAgICAgdGhpcy5tb3VzZURvd25Qb3MgPSB7IHgsIHkgfVxyXG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0VHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShuZXdUcmFuc2Zvcm0pKVxyXG5cclxuICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnQgPSB0aGlzLm5ldHYuZ2V0RWxlbWVudEJ5UG9zaXRpb24oe1xyXG4gICAgICAgICAgICB4LFxyXG4gICAgICAgICAgICB5OiB5SW52XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubW91c2VEb3duRWxlbWVudD8uZWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5tb3VzZURvd25FbGVtZW50LmVsZW1lbnRcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQ/LnR5cGUgPT09ICdOb2RlJykge1xyXG4gICAgICAgICAgICAgICAgLy8gb25seSBub2RlIGNhbiBiZSBkcmFnZ2VkXHJcbiAgICAgICAgICAgICAgICAvLyByZWNvcmQgb3JnaW4gcG9zaXRpb24gZm9yIGRyYWdcclxuICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudE9yaWdpblBvcyA9IHsgLi4uZWxlbWVudC5wb3NpdGlvbigpIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbGVtZW50LiRfbW91c2Vkb3duQ2FsbGJhY2tTZXQuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudDogZXZ0LFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdtb3VzZWRvd24nLFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZWRvd25DYWxsYmFja1NldC5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldnQsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ21vdXNlZG93bidcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByaXZhdGUgaGFuZGxlIG1vdXNlIG1vdmUgZXZlbnRcclxuICAgICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZ0XHJcbiAgICAgKiBAbWVtYmVyb2YgSW50ZXJhY3Rpb25NYW5hZ2VyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlTW91c2VNb3ZlKGV2dDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIGxldCBuZXdUcmFuc2Zvcm0gPSB7IC4uLnRoaXMubmV0di4kX3RyYW5zZm9ybSB9XHJcbiAgICAgICAgY29uc3QgeCA9IGV2dC5vZmZzZXRYIHx8IGV2dC5wYWdlWCAtIHRoaXMuY2FudmFzLm9mZnNldExlZnRcclxuICAgICAgICBjb25zdCB5ID0gZXZ0Lm9mZnNldFkgfHwgZXZ0LnBhZ2VZIC0gdGhpcy5jYW52YXMub2Zmc2V0VG9wXHJcblxyXG4gICAgICAgIGNvbnN0IGxhc3RJc01vdXNlTW92ZSA9IHRoaXMuaXNNb3VzZU1vdmVcclxuICAgICAgICBjb25zdCBsYXN0TW91c2VNb3ZlRWxlbWVudCA9IHRoaXMubW91c2VNb3ZlRWxlbWVudFxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc01vdXNlRG93bikge1xyXG4gICAgICAgICAgICB0aGlzLmlzTW91c2VNb3ZlID0gdHJ1ZVxyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5tb3VzZURvd25FbGVtZW50Py5lbGVtZW50IGFzIE5vZGVcclxuICAgICAgICAgICAgLy8gZHJhZyBhIG5vZGU6IDEuIG1vdXNlZG93biBvbiBhIE5vZGU7IGFuZCAyLiB0aGUgbm9kZSBpcyBsaXN0ZW5lZDtcclxuICAgICAgICAgICAgLy8gZWxzZSBwYW5cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudD8udHlwZSA9PT0gJ05vZGUnICYmXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LiRfZHJhZ3N0YXJ0Q2FsbGJhY2tTZXQuc2l6ZSArXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC4kX2RyYWdnaW5nQ2FsbGJhY2tTZXQuc2l6ZSArXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC4kX2RyYWdlbmRDYWxsYmFja1NldC5zaXplXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgLy8gZHJhZyBhIGxpc3RlbmVkIG5vZGVcclxuICAgICAgICAgICAgICAgIGlmICghbGFzdElzTW91c2VNb3ZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGFzdCB0aW1lLCB0aGUgbW91c2UgaXMgbm90IG1vdmVcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LiRfZHJhZ3N0YXJ0Q2FsbGJhY2tTZXQuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcmFnc3RhcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY2hhbmdlIG5vZGUgcG9zaXRpb25cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQucG9zaXRpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudE9yaWdpblBvcy54ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHggLSB0aGlzLm1vdXNlRG93blBvcy54KSAvIG5ld1RyYW5zZm9ybS5rLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMubW91c2VEb3duRWxlbWVudE9yaWdpblBvcy55ICsgKHkgLSB0aGlzLm1vdXNlRG93blBvcy55KSAvIG5ld1RyYW5zZm9ybS5rXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubmV0di5kcmF3KClcclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LiRfZHJhZ2dpbmdDYWxsYmFja1NldC5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RyYWdnaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gcGFuLCB3aGVuIG5vdCBkcmFnZ2luZyBub2RlXHJcbiAgICAgICAgICAgICAgICBuZXdUcmFuc2Zvcm0ueCA9IHRoaXMuZHJhZ1N0YXJ0VHJhbnNmb3JtLnggKyB4IC0gdGhpcy5tb3VzZURvd25Qb3MueFxyXG4gICAgICAgICAgICAgICAgbmV3VHJhbnNmb3JtLnkgPSB0aGlzLmRyYWdTdGFydFRyYW5zZm9ybS55ICsgeSAtIHRoaXMubW91c2VEb3duUG9zLnlcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhbkNhbGxiYWNrU2V0LnNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ldHYudHJhbnNmb3JtKG5ld1RyYW5zZm9ybSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ldHYuZHJhdygpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5DYWxsYmFja1NldC5mb3JFYWNoKChjYWxsYmFjaykgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwYW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBuZXdUcmFuc2Zvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBob3ZlclxyXG4gICAgICAgICAgICBjb25zdCB5SW52ID0gdGhpcy5uZXR2LiRfY29uZmlncy5oZWlnaHQgLSB5XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLm5ldHYuZ2V0RWxlbWVudEJ5UG9zaXRpb24oeyB4LCB5OiB5SW52IH0pPy5lbGVtZW50XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VNb3ZlRWxlbWVudCA9IGVsZW1lbnRcclxuICAgICAgICAgICAgaWYgKGxhc3RNb3VzZU1vdmVFbGVtZW50ID09PSBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50Py4kX21vdXNlbW92ZUNhbGxiYWNrU2V0LmZvckVhY2goKGNhbGxiYWNrKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ21vdXNlbW92ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGFzdE1vdXNlTW92ZUVsZW1lbnQ/LiRfbW91c2VvdXRDYWxsYmFja1NldC5mb3JFYWNoKChjYWxsYmFjaykgPT5cclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdtb3VzZW91dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGxhc3RNb3VzZU1vdmVFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ/LiRfbW91c2VvdmVyQ2FsbGJhY2tTZXQuZm9yRWFjaCgoY2FsbGJhY2spID0+XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudDogZXZ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbW91c2VvdmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJpdmF0ZSBoYW5kbGUgbW91c2UgdXAgZXZlbnRcclxuICAgICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZ0XHJcbiAgICAgKiBAbWVtYmVyb2YgSW50ZXJhY3Rpb25NYW5hZ2VyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlTW91c2VVcChldnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5tb3VzZURvd25FbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTW91c2VNb3ZlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBkcmFnXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb3VzZURvd25FbGVtZW50Py5lbGVtZW50LiRfZHJhZ2VuZENhbGxiYWNrU2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubW91c2VEb3duRWxlbWVudC5lbGVtZW50IGFzIE5vZGVcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LiRfZHJhZ2VuZENhbGxiYWNrU2V0LmZvckVhY2goKGNhbGxiYWNrKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudDogZXZ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RyYWdlbmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGNsaWNrXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5tb3VzZURvd25FbGVtZW50LmVsZW1lbnRcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuJF9jbGlja0NhbGxiYWNrU2V0LmZvckVhY2goKGNhbGxiYWNrKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NsaWNrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gbW91c2V1cFxyXG4gICAgICAgICAgICBpZiAodGhpcy5tb3VzZURvd25FbGVtZW50Py5lbGVtZW50LiRfbW91c2V1cENhbGxiYWNrU2V0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5tb3VzZURvd25FbGVtZW50LmVsZW1lbnQgYXMgRWxlbWVudFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC4kX21vdXNldXBDYWxsYmFja1NldC5mb3JFYWNoKChjYWxsYmFjaykgPT5cclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdtb3VzZXVwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBjYW52YXMgbW91c2V1cFxyXG4gICAgICAgICAgICB0aGlzLm1vdXNldXBDYWxsYmFja1NldC5mb3JFYWNoKChjYWxsYmFjaykgPT5cclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudDogZXZ0LFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdtb3VzZXVwJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNNb3VzZU1vdmUpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNsaWNrLCBub3QgcGFuXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGlja0NhbGxiYWNrU2V0LmZvckVhY2goKGNhbGxiYWNrKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NsaWNrJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc01vdXNlRG93biA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5pc01vdXNlTW92ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50ID0gdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRXaGVlbExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIHRoaXMuaGFuZGxlWm9vbS5iaW5kKHRoaXMpLCBmYWxzZSlcclxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5oYW5kbGVab29tLmJpbmQodGhpcyksIGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlV2hlZWxMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCB0aGlzLmhhbmRsZVpvb20uYmluZCh0aGlzKSlcclxuICAgICAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5oYW5kbGVab29tLmJpbmQodGhpcykpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRNb3VzZUxpc3RlbmVycygpIHtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmNhbnZhc1xyXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZU1vdXNlRG93bi5iaW5kKHRoaXMpKVxyXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmhhbmRsZU1vdXNlTW92ZS5iaW5kKHRoaXMpKVxyXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVNb3VzZVVwLmJpbmQodGhpcykpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmVNb3VzZUxpc3RlbmVycygpIHtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmNhbnZhc1xyXG4gICAgICAgIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZU1vdXNlRG93bi5iaW5kKHRoaXMpKVxyXG4gICAgICAgIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmhhbmRsZU1vdXNlTW92ZS5iaW5kKHRoaXMpKVxyXG4gICAgICAgIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVNb3VzZVVwLmJpbmQodGhpcykpXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgaW50ZXJmYWNlcyBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyBSZW5kZXJBdHRyaWJ1dGUsIFNoYWRlclNlcmllcyB9IGZyb20gJy4uL2ludGVyZmFjZXMnXHJcbmltcG9ydCB7XHJcbiAgICBjcmVhdGVQcm9ncmFtLFxyXG4gICAgY3JlYXRlQXJyYXlCdWZmZXIsXHJcbiAgICBleHRyYWN0QXR0cmlidXRlc0Zyb21TaGFkZXIsXHJcbiAgICBlbmNvZGVSZW5kZXJJZFxyXG59IGZyb20gJy4uL3V0aWxzJ1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgTm9kZSBmcm9tICcuLi8uLi9lbGVtZW50cy9ub2RlJ1xyXG5pbXBvcnQgTGluayBmcm9tICcuLi8uLi9lbGVtZW50cy9saW5rJ1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlbmRlckVsZW1lbnRNYW5hZ2VyIHtcclxuICAgIHB1YmxpYyBhdHRyaWJ1dGVzOiBNYXA8c3RyaW5nLCBSZW5kZXJBdHRyaWJ1dGU+XHJcbiAgICBwdWJsaWMgcGl4ZWxSYXRpbzogbnVtYmVyXHJcblxyXG4gICAgcHJvdGVjdGVkIGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0XHJcbiAgICAvLyB0aGUgY2FwYWJsaXR5IG9mIHRoZSByZW5kZXIgbWFuYWdlcixcclxuICAgIC8vIHdoaWNoIG1lYW5zIGhvdyBtYW55IGVsZW1lbnRzIGNhbiBiZSByZW5kZXJlZFxyXG4gICAgcHJvdGVjdGVkIGNhcGFjaXR5OiBudW1iZXJcclxuICAgIHByb3RlY3RlZCBjb3VudCA9IDBcclxuICAgIHByb3RlY3RlZCB3aWR0aDogbnVtYmVyXHJcbiAgICBwcm90ZWN0ZWQgaGVpZ2h0OiBudW1iZXJcclxuXHJcbiAgICBwcm90ZWN0ZWQgcHJvZ3JhbTogV2ViR0xQcm9ncmFtXHJcblxyXG4gICAgLy8gaWQgc2hhZGVycyBhcmUgZGVzaWduIGZvciBtYXBwaW5nIGNhbnZhcyBwaXhlbHMgdG8gZWxlbWVudHNcclxuICAgIHByb3RlY3RlZCBpZFByb2dyYW06IFdlYkdMUHJvZ3JhbVxyXG4gICAgcHJvdGVjdGVkIGlkQXR0cmlidXRlczogTWFwPHN0cmluZywgUmVuZGVyQXR0cmlidXRlPlxyXG4gICAgcHJvdGVjdGVkIGlkVGV4dHVyZTogV2ViR0xUZXh0dXJlXHJcblxyXG4gICAgcHJvdGVjdGVkIHJlbmRlcklkVG9FbGVtZW50OiB7IFtrZXk6IG51bWJlcl06IE5vZGUgfCBMaW5rIH1cclxuICAgIHByb3RlY3RlZCBlbGVtZW50VG9SZW5kZXJJZCA9IG5ldyBNYXAoKVxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICBnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dCxcclxuICAgICAgICBwYXJhbXM6IGFueSxcclxuICAgICAgICBzaGFkZXJTZXJpZXM6IFNoYWRlclNlcmllcyxcclxuICAgICAgICBpZFRleHR1cmU6IFdlYkdMVGV4dHVyZVxyXG4gICAgKSB7XHJcbiAgICAgICAgY29uc3QgeyBsaW1pdCwgd2lkdGgsIGhlaWdodCwgaW5zdGFuY2VWZXJ0ZWNlcyB9ID0gcGFyYW1zXHJcbiAgICAgICAgdGhpcy5nbCA9IGdsXHJcbiAgICAgICAgdGhpcy5jYXBhY2l0eSA9IGxpbWl0XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoXHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcclxuICAgICAgICB0aGlzLnBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxXHJcblxyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IGV4dHJhY3RBdHRyaWJ1dGVzRnJvbVNoYWRlcihzaGFkZXJTZXJpZXMudmVydGV4KVxyXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0oXHJcbiAgICAgICAgICAgIHRoaXMuZ2wsXHJcbiAgICAgICAgICAgIHNoYWRlclNlcmllcy52ZXJ0ZXgsXHJcbiAgICAgICAgICAgIHNoYWRlclNlcmllcy5mcmFnbWVudCxcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICB0aGlzLmlkQXR0cmlidXRlcyA9IGV4dHJhY3RBdHRyaWJ1dGVzRnJvbVNoYWRlcihzaGFkZXJTZXJpZXMuaWRWZXJ0ZXgpXHJcbiAgICAgICAgdGhpcy5pZFByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKFxyXG4gICAgICAgICAgICB0aGlzLmdsLFxyXG4gICAgICAgICAgICBzaGFkZXJTZXJpZXMuaWRWZXJ0ZXgsXHJcbiAgICAgICAgICAgIHNoYWRlclNlcmllcy5pZEZyYWdtZW50LFxyXG4gICAgICAgICAgICB0aGlzLmlkQXR0cmlidXRlc1xyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgdGhpcy5pZFRleHR1cmUgPSBpZFRleHR1cmVcclxuXHJcbiAgICAgICAgLy8gaW5pdGlhbCBhdHRyaWJ1dGVzIGFycmF5cyBhbmQgYnVmZmVyc1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghYXR0ci5pc0J1aWxkSW4pIHtcclxuICAgICAgICAgICAgICAgIGF0dHIuYXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KGF0dHIuc2l6ZSAqIHRoaXMuY2FwYWNpdHkpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBidWlsZCBpbiBhdHRyaWJ1dGU6IHZldGVjZXMgcG9zaXRpb25zXHJcbiAgICAgICAgICAgICAgICAvLyBmb3VyIHZlcnRlY2VzIG9mIG9uZSBlbGVtZW50IChodHRwczovL3BhbmppYWNoZW5nLnNpdGUvd2lraS8yMDE5LzA2LzA2L3dlYkdML1dlYkdMLUJhdGNoRHJhdyVFNCVCQiVBMyVFNyVBMCU4MSVFOSU5OCU4NSVFOCVBRiVCQislRTclOTAlODYlRTglQTclQTMvKVxyXG4gICAgICAgICAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICAgICAgICAgICAgICBhdHRyLmFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShpbnN0YW5jZVZlcnRlY2VzKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhdHRyLmJ1ZmZlciA9IGNyZWF0ZUFycmF5QnVmZmVyKHRoaXMuZ2wsIGF0dHIuYXJyYXkpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gaW5pdCBpZCBhdHRyaWJ1dGVzIGFuZCBidWZmZXJzXHJcbiAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0ciwgbmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gJ2luX2lkJykge1xyXG4gICAgICAgICAgICAgICAgLy8gYXR0cjogaW4gdmVjNCBpbklkO1xyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogaGFyZGNvZGUgY2hlY2ssIG5lZWQgcmVmYWN0b3JcclxuICAgICAgICAgICAgICAgIGlmICghYXR0ci5pc0J1aWxkSW4pIGF0dHIuYXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KGF0dHIuc2l6ZSAqIHRoaXMuY2FwYWNpdHkpXHJcbiAgICAgICAgICAgICAgICBhdHRyLmJ1ZmZlciA9IGNyZWF0ZUFycmF5QnVmZmVyKHRoaXMuZ2wsIGF0dHIuYXJyYXkpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkQXR0cmlidXRlcy5zZXQobmFtZSwgdGhpcy5hdHRyaWJ1dGVzLmdldChuYW1lKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIGluaXQgdW5pZm9ybXNcclxuICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKVxyXG4gICAgICAgIC8vIGdldCB1bmlmb3JtIGxvY2F0aW9ucyBpbiBNZW1vcnlcclxuICAgICAgICBjb25zdCBwcm9qZWN0aW9uTG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sICdwcm9qZWN0aW9uJylcclxuICAgICAgICBjb25zdCBzY2FsZUxvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLCAnc2NhbGUnKVxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZUxvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLCAndHJhbnNsYXRlJylcclxuICAgICAgICBjb25zdCB2aWV3cG9ydExvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLCAndmlld3BvcnQnKVxyXG4gICAgICAgIGNvbnN0IHBpeGVsUmF0aW9Mb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3BpeGVsUmF0aW8nKVxyXG5cclxuICAgICAgICAvLyBzZXQgdW5pZm9ybSB2YWx1ZXNcclxuICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgICAgICBjb25zdCBwcm9qZWN0aW9uID0gbmV3IEZsb2F0MzJBcnJheShbXHJcbiAgICAgICAgICAgIDIgLyB0aGlzLndpZHRoLCAgICAgICAgICAgICAgICAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgMCwgLTIgLyB0aGlzLmhlaWdodCwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTEsICAgICAgICAgICAgICAgIDEsIDFcclxuICAgICAgICBdKVxyXG4gICAgICAgIHByb2plY3Rpb25Mb2NhdGlvbiAhPT0gbnVsbCAmJlxyXG4gICAgICAgICAgICB0aGlzLmdsLnVuaWZvcm1NYXRyaXgzZnYocHJvamVjdGlvbkxvY2F0aW9uLCBmYWxzZSwgcHJvamVjdGlvbilcclxuXHJcbiAgICAgICAgY29uc3Qgc2NhbGUgPSBuZXcgRmxvYXQzMkFycmF5KFsxLCAxXSlcclxuICAgICAgICBzY2FsZUxvY2F0aW9uICE9PSBudWxsICYmIHRoaXMuZ2wudW5pZm9ybTJmdihzY2FsZUxvY2F0aW9uLCBzY2FsZSlcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlID0gbmV3IEZsb2F0MzJBcnJheShbMCwgMF0pXHJcbiAgICAgICAgdHJhbnNsYXRlTG9jYXRpb24gIT09IG51bGwgJiYgdGhpcy5nbC51bmlmb3JtMmZ2KHRyYW5zbGF0ZUxvY2F0aW9uLCB0cmFuc2xhdGUpXHJcblxyXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0ID0gbmV3IEZsb2F0MzJBcnJheShbdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRdKVxyXG4gICAgICAgIHZpZXdwb3J0TG9jYXRpb24gIT09IG51bGwgJiYgdGhpcy5nbC51bmlmb3JtMmZ2KHZpZXdwb3J0TG9jYXRpb24sIHZpZXdwb3J0KVxyXG5cclxuICAgICAgICBwaXhlbFJhdGlvTG9jYXRpb24gIT09IG51bGwgJiYgdGhpcy5nbC51bmlmb3JtMWYocGl4ZWxSYXRpb0xvY2F0aW9uLCB0aGlzLnBpeGVsUmF0aW8pXHJcblxyXG4gICAgICAgIC8vIGlkIHVuaWZvcm1zLCBpZGVudGljYWwgdG8gbm9kZVxyXG4gICAgICAgIC8vIFRPRE86IG5lZWQgcmVmYWN0b3IgdG9vXHJcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMuaWRQcm9ncmFtKVxyXG4gICAgICAgIGNvbnN0IGlkUHJvamVjdGlvbkxvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5pZFByb2dyYW0sICdwcm9qZWN0aW9uJylcclxuICAgICAgICBjb25zdCBpZFNjYWxlTG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmlkUHJvZ3JhbSwgJ3NjYWxlJylcclxuICAgICAgICBjb25zdCBpZFRyYW5zbGF0ZUxvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5pZFByb2dyYW0sICd0cmFuc2xhdGUnKVxyXG4gICAgICAgIGNvbnN0IGlkVmlld3BvcnRMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuaWRQcm9ncmFtLCAndmlld3BvcnQnKVxyXG4gICAgICAgIGNvbnN0IGlkUGl4ZWxSYXRpb0xvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5pZFByb2dyYW0sICdwaXhlbFJhdGlvJylcclxuXHJcbiAgICAgICAgaWRQcm9qZWN0aW9uTG9jYXRpb24gIT09IG51bGwgJiZcclxuICAgICAgICAgICAgdGhpcy5nbC51bmlmb3JtTWF0cml4M2Z2KGlkUHJvamVjdGlvbkxvY2F0aW9uLCBmYWxzZSwgcHJvamVjdGlvbilcclxuICAgICAgICBpZFNjYWxlTG9jYXRpb24gIT09IG51bGwgJiYgdGhpcy5nbC51bmlmb3JtMmZ2KGlkU2NhbGVMb2NhdGlvbiwgc2NhbGUpXHJcbiAgICAgICAgaWRUcmFuc2xhdGVMb2NhdGlvbiAhPT0gbnVsbCAmJiB0aGlzLmdsLnVuaWZvcm0yZnYoaWRUcmFuc2xhdGVMb2NhdGlvbiwgdHJhbnNsYXRlKVxyXG4gICAgICAgIGlkVmlld3BvcnRMb2NhdGlvbiAhPT0gbnVsbCAmJiB0aGlzLmdsLnVuaWZvcm0yZnYoaWRWaWV3cG9ydExvY2F0aW9uLCB2aWV3cG9ydClcclxuICAgICAgICBpZFBpeGVsUmF0aW9Mb2NhdGlvbiAhPT0gbnVsbCAmJiB0aGlzLmdsLnVuaWZvcm0xZihpZFBpeGVsUmF0aW9Mb2NhdGlvbiwgdGhpcy5waXhlbFJhdGlvKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRSZW5kZXJJZE9mKGVsZW1lbnQ6IE5vZGUgfCBMaW5rLCByZW5kZXJJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJJZFRvRWxlbWVudFtyZW5kZXJJZF0gPSBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5lbGVtZW50VG9SZW5kZXJJZC5zZXQoZWxlbWVudCwgcmVuZGVySWQpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFJlbmRlcklkT2YoZWxlbWVudDogTm9kZSB8IExpbmspOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRUb1JlbmRlcklkLmdldChlbGVtZW50KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVuZGVyIGlkIHRvIGxpbmsgaWRzKHNvdXJjZSBhbmQgdGFyZ2V0KVxyXG4gICAgICogQHBhcmFtIHJlbmRlcklkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRFbGVtZW50QnlSZW5kZXJJZChyZW5kZXJJZDogbnVtYmVyKTogTm9kZSB8IExpbmsge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcklkVG9FbGVtZW50W3JlbmRlcklkXVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0IFRyYW5zZm9ybSBpbiBSZW5kZXIgTGlua1xyXG4gICAgICogQHBhcmFtIHRyYW5zZm9ybSBjdXJyZW50IHRyYW5zZm9ybShwYW4mem9vbSBjb25kaXRpb24pXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRUcmFuc2Zvcm0odHJhbnNmb3JtOiBUcmFuc2Zvcm0pIHtcclxuICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKVxyXG4gICAgICAgIGNvbnN0IHNjYWxlTG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLCAnc2NhbGUnKVxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3RyYW5zbGF0ZScpXHJcblxyXG4gICAgICAgIGNvbnN0IHNjYWxlID0gbmV3IEZsb2F0MzJBcnJheShbdHJhbnNmb3JtLmssIHRyYW5zZm9ybS5rXSlcclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZnYoc2NhbGVMb2MsIHNjYWxlKVxyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2xhdGUgPSBuZXcgRmxvYXQzMkFycmF5KFt0cmFuc2Zvcm0ueCwgdHJhbnNmb3JtLnldKVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdih0cmFuc2xhdGVMb2MsIHRyYW5zbGF0ZSlcclxuXHJcbiAgICAgICAgLy8gaWQgdW5pZm9ybXMsIGlkZW50aWNhbCB0byBsaW5rXHJcbiAgICAgICAgLy8gVE9ETzogbmVlZCByZWZhY3RvciB0b29cclxuICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5pZFByb2dyYW0pXHJcbiAgICAgICAgY29uc3QgaWRTY2FsZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuaWRQcm9ncmFtLCAnc2NhbGUnKVxyXG4gICAgICAgIGNvbnN0IGlkVHJhbnNsYXRlTG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5pZFByb2dyYW0sICd0cmFuc2xhdGUnKVxyXG5cclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZnYoaWRTY2FsZUxvYywgc2NhbGUpXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmZ2KGlkVHJhbnNsYXRlTG9jLCB0cmFuc2xhdGUpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuZW5hYmxlKHRoaXMuZ2wuQkxFTkQpXHJcbiAgICAgICAgICAgIHRoaXMuZ2wuYmxlbmRGdW5jKHRoaXMuZ2wuT05FLCB0aGlzLmdsLk9ORV9NSU5VU19TUkNfQUxQSEEpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKVxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhdHRyLmxvY2F0aW9uKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYXR0ci5idWZmZXIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5sb2NhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLnNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbC5GTE9BVCxcclxuICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLnNpemUgKiBhdHRyLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULFxyXG4gICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIGlmICghYXR0ci5pc0J1aWxkSW4pIHRoaXMuZ2wudmVydGV4QXR0cmliRGl2aXNvcihhdHRyLmxvY2F0aW9uLCAxKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5nbC5kcmF3QXJyYXlzSW5zdGFuY2VkKHRoaXMuZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQsIHRoaXMuY291bnQpXHJcblxyXG4gICAgICAgIC8vIGRyYXcgaWRcclxuICAgICAgICB0aGlzLmdsLmJsZW5kRnVuYyh0aGlzLmdsLk9ORSwgdGhpcy5nbC5aRVJPKVxyXG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLmlkUHJvZ3JhbSlcclxuICAgICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLkZSQU1FQlVGRkVSLCB0aGlzLmlkVGV4dHVyZSlcclxuXHJcbiAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGF0dHIubG9jYXRpb24pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgYXR0ciA9IHRoaXMuaWRBdHRyaWJ1dGVzLmdldCgnaW5faWQnKSAvLyAhIEhBUkRDT0RFIENIRUNLXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBhdHRyLmJ1ZmZlcilcclxuICAgICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXHJcbiAgICAgICAgICAgIGF0dHIubG9jYXRpb24sXHJcbiAgICAgICAgICAgIGF0dHIuc2l6ZSxcclxuICAgICAgICAgICAgdGhpcy5nbC5GTE9BVCxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIGF0dHIuc2l6ZSAqIGF0dHIuYXJyYXkuQllURVNfUEVSX0VMRU1FTlQsXHJcbiAgICAgICAgICAgIDBcclxuICAgICAgICApXHJcbiAgICAgICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJEaXZpc29yKGF0dHIubG9jYXRpb24sIDEpXHJcblxyXG4gICAgICAgIHRoaXMuZ2wuZHJhd0FycmF5c0luc3RhbmNlZCh0aGlzLmdsLlRSSUFOR0xFX1NUUklQLCAwLCA0LCB0aGlzLmNvdW50KVxyXG4gICAgICAgIHRoaXMuZ2wuYmluZEZyYW1lYnVmZmVyKHRoaXMuZ2wuRlJBTUVCVUZGRVIsIG51bGwpXHJcblxyXG4gICAgICAgIHRoaXMuZ2wuZW5hYmxlKHRoaXMuZ2wuQkxFTkQpXHJcbiAgICAgICAgdGhpcy5nbC5ibGVuZEZ1bmModGhpcy5nbC5PTkUsIHRoaXMuZ2wuT05FX01JTlVTX1NSQ19BTFBIQSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCBlbGVtZW50IGRhdGEgdG8gZW5naW5lXHJcbiAgICAgKiBAcGFyYW0gZWxlbWVudHMgZWxlbWVudHMgZGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkRGF0YShlbGVtZW50czogTm9kZVtdIHwgTGlua1tdKSB7XHJcbiAgICAgICAgLy8gc2V0IGFycmF5XHJcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudDogTm9kZSB8IExpbmssIGkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmNvdW50ICsgaVxyXG4gICAgICAgICAgICAvLyBsaW5rIGF0dHJpYnV0ZSA9PiB3ZWJnbCBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghYXR0ci5pc0J1aWxkSW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCB2YWx1ZSA9IGF0dHIuZXh0cmFjdEF0dHJpYnV0ZVZhbHVlRnJvbShlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRBdHRyaWJ1dGVCeUVsZW1lbnQoZWxlbWVudCwgYXR0ci5uYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5ID0gdmFsdWUudmFsdWUgYXMgbnVtYmVyW11cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXkuZm9yRWFjaCgodiwgaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbmplY3QgaW50byB0aGUgQnVmZmVyIEFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHIuYXJyYXlbYXR0ci5zaXplICogaW5kZXggKyBqXSA9IHZcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gZWxlbWVudC50eXBlID09PSAnTm9kZScgPyAwIDogMSAvLyBOT1RFOiBub2RlIHJlbmRlciBpZCwgdXNlIGV2ZW4gaW50ZWdlclxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXJJZCA9IDIgKiBpbmRleCArIG9mZnNldFxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXJJZENvbG9yID0gZW5jb2RlUmVuZGVySWQocmVuZGVySWQpXHJcbiAgICAgICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzLmdldCgnaW5faWQnKS5hcnJheVs0ICogaW5kZXhdID0gcmVuZGVySWRDb2xvci5yXHJcbiAgICAgICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzLmdldCgnaW5faWQnKS5hcnJheVs0ICogaW5kZXggKyAxXSA9IHJlbmRlcklkQ29sb3IuZ1xyXG4gICAgICAgICAgICB0aGlzLmlkQXR0cmlidXRlcy5nZXQoJ2luX2lkJykuYXJyYXlbNCAqIGluZGV4ICsgMl0gPSByZW5kZXJJZENvbG9yLmJcclxuICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXMuZ2V0KCdpbl9pZCcpLmFycmF5WzQgKiBpbmRleCArIDNdID0gcmVuZGVySWRDb2xvci5hXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFJlbmRlcklkT2YoZWxlbWVudCwgcmVuZGVySWQpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFhdHRyLmlzQnVpbGRJbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBhdHRyLmJ1ZmZlcilcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYnVmZmVyU3ViRGF0YShcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLkFSUkFZX0JVRkZFUixcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLnNpemUgKiB0aGlzLmNvdW50ICogYXR0ci5hcnJheS5CWVRFU19QRVJfRUxFTUVOVCxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLmFycmF5LFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSAqIHRoaXMuY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5zaXplICogZWxlbWVudHMubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBpZCBidWZmZXIgZGF0YVxyXG4gICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLmlkQXR0cmlidXRlcy5nZXQoJ2luX2lkJylcclxuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIGF0dHIuYnVmZmVyKVxyXG4gICAgICAgIHRoaXMuZ2wuYnVmZmVyU3ViRGF0YShcclxuICAgICAgICAgICAgdGhpcy5nbC5BUlJBWV9CVUZGRVIsXHJcbiAgICAgICAgICAgIGF0dHIuc2l6ZSAqIHRoaXMuY291bnQgKiBhdHRyLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULFxyXG4gICAgICAgICAgICBhdHRyLmFycmF5LFxyXG4gICAgICAgICAgICBhdHRyLnNpemUgKiB0aGlzLmNvdW50LFxyXG4gICAgICAgICAgICBhdHRyLnNpemUgKiBlbGVtZW50cy5sZW5ndGhcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIHRoaXMuY291bnQgKz0gZWxlbWVudHMubGVuZ3RoXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjaGFuZ2UgYW4gZWxlbWVudCdzIGF0dHJpYnV0ZVxyXG4gICAgICogQHBhcmFtIGVsZW1lbnQgbGluay9ub2RlIGRhdGFcclxuICAgICAqIEBwYXJhbSBhdHRyaWJ1dGUgYXR0cmlidXRlIGtleSB0byBjaGFuZ2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNoYW5nZUF0dHJpYnV0ZShlbGVtZW50OiBOb2RlIHwgTGluaywgYXR0cmlidXRlOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCByZW5kZXJJZCA9IHRoaXMuZ2V0UmVuZGVySWRPZihlbGVtZW50KVxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihyZW5kZXJJZCAvIDIpXHJcbiAgICAgICAgY29uc3Qgc2hhZGVyQXR0ciA9IHRoaXMuZ2V0QXR0cmlidXRlQnlFbGVtZW50KGVsZW1lbnQsIGF0dHJpYnV0ZSlcclxuICAgICAgICBjb25zdCBzaGFkZXJWYXJpYWJsZU5hbWUgPSBzaGFkZXJBdHRyLm5hbWVcclxuICAgICAgICBjb25zdCBzaGFkZXJWYXJpYWJsZVZhbHVlID0gc2hhZGVyQXR0ci52YWx1ZSBhcyBudW1iZXJbXVxyXG4gICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLmF0dHJpYnV0ZXMuZ2V0KHNoYWRlclZhcmlhYmxlTmFtZSlcclxuICAgICAgICBpZiAoYXR0ciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEF0dHJpYnV0ZTogJHthdHRyaWJ1dGV9IGlzIG5vdCBzdXBwb3J0ZWQgaW4gYSAke2VsZW1lbnQudHlwZX0gaW5zdGFuY2UuYClcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc3QgZGF0YSA9IGF0dHIuZXh0cmFjdEF0dHJpYnV0ZVZhbHVlRnJvbShlbGVtZW50KVxyXG4gICAgICAgIGF0dHIuYXJyYXkuc2V0KHNoYWRlclZhcmlhYmxlVmFsdWUsIGF0dHIuc2l6ZSAqIGluZGV4KVxyXG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYXR0ci5idWZmZXIpXHJcbiAgICAgICAgdGhpcy5nbC5idWZmZXJTdWJEYXRhKFxyXG4gICAgICAgICAgICB0aGlzLmdsLkFSUkFZX0JVRkZFUixcclxuICAgICAgICAgICAgYXR0ci5zaXplICogaW5kZXggKiBhdHRyLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULFxyXG4gICAgICAgICAgICBhdHRyLmFycmF5LFxyXG4gICAgICAgICAgICBhdHRyLnNpemUgKiBpbmRleCxcclxuICAgICAgICAgICAgYXR0ci5zaXplXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2xlYXIgZGF0YVxyXG4gICAgICogbm90IGFjdHVhbGx5IGVyYXNlIGRhdGEsIGJ1dCByZXNldCBjb3VudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xlYXJEYXRhKCkge1xyXG4gICAgICAgIHRoaXMuY291bnQgPSAwXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldEF0dHJpYnV0ZUJ5RWxlbWVudChlbGVtZW50OiBMaW5rIHwgTm9kZSwgYXR0cmlidXRlTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IG1hcFxyXG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdMaW5rJykge1xyXG4gICAgICAgICAgICBjb25zdCBsaW5rID0gZWxlbWVudCBhcyBMaW5rXHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gbGluay4kX3N0eWxlIGFzIGludGVyZmFjZXMuTGlua1N0eWxlXHJcblxyXG4gICAgICAgICAgICBtYXAgPSB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5fc291cmNlJyxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW2xpbmsuJF9zb3VyY2UuJF9wb3NpdGlvbi54LCBsaW5rLiRfc291cmNlLiRfcG9zaXRpb24ueV1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5fdGFyZ2V0JyxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW2xpbmsuJF90YXJnZXQuJF9wb3NpdGlvbi54LCBsaW5rLiRfdGFyZ2V0LiRfcG9zaXRpb24ueV1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzaGFwZToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbl9zaGFwZScsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtzdHlsZS5zaGFwZSA9PT0gJ2N1cnZlJyA/IDEgOiAwXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luX3N0cm9rZVdpZHRoJyxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW3N0eWxlLnN0cm9rZVdpZHRoXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luX3N0cm9rZUNvbG9yJyxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZS5zdHJva2VDb2xvci5yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZS5zdHJva2VDb2xvci5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZS5zdHJva2VDb2xvci5iLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZS5zdHJva2VDb2xvci5hXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGN1cnZlbmVzczoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbl9jdXJ2ZW5lc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBbc3R5bGUuY3VydmVuZXNzXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGVsZW1lbnQgYXMgTm9kZVxyXG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IG5vZGUuJF9zdHlsZSBhcyBpbnRlcmZhY2VzLk5vZGVTdHlsZVxyXG5cclxuICAgICAgICAgICAgbWFwID0ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5fcG9zaXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBbbm9kZS4kX3Bvc2l0aW9uLngsIG5vZGUuJF9wb3NpdGlvbi55XVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNoYXBlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luX3NoYXBlJyxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZS5zaGFwZSA9PT0gJ3JlY3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc3R5bGUuc2hhcGUgPT09ICd0cmlhbmdsZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzdHlsZS5zaGFwZSA9PT0gJ2Nyb3NzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDBcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luX29mZnNldCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtzdHlsZS5vZmZzZXQueCwgc3R5bGUub2Zmc2V0LnldXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmlsbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbl9maWxsJyxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW3N0eWxlLmZpbGwuciwgc3R5bGUuZmlsbC5nLCBzdHlsZS5maWxsLmIsIHN0eWxlLmZpbGwuYV1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbl9zdHJva2VXaWR0aCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtzdHlsZS5zdHJva2VXaWR0aF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbl9zdHJva2VDb2xvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUuc3Ryb2tlQ29sb3IucixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUuc3Ryb2tlQ29sb3IuZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUuc3Ryb2tlQ29sb3IuYixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUuc3Ryb2tlQ29sb3IuYVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByb3RhdGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5fcm90YXRlJyxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW3N0eWxlLnJvdGF0ZV1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvKiBjaXJjbGUgKi9cclxuICAgICAgICAgICAgICAgIHI6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5fcicsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtzdHlsZS5yXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8qIHJlY3QgKi9cclxuICAgICAgICAgICAgICAgIHdpZHRoOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luX3NpemUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBbc3R5bGUud2lkdGgsIHN0eWxlLmhlaWdodF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5fc2l6ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtzdHlsZS53aWR0aCwgc3R5bGUuaGVpZ2h0XVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8qIHRyaWFuZ2xlICovXHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhBbHBoYToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbl92ZXJ0ZXhBbHBoYScsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtzdHlsZS52ZXJ0ZXhBbHBoYS54LCBzdHlsZS52ZXJ0ZXhBbHBoYS55XVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHZlcnRleEJldGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5fdmVydGV4QmV0YScsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtzdHlsZS52ZXJ0ZXhCZXRhLngsIHN0eWxlLnZlcnRleEJldGEueV1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhHYW1tYToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbl92ZXJ0ZXhHYW1tYScsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtzdHlsZS52ZXJ0ZXhHYW1tYS54LCBzdHlsZS52ZXJ0ZXhHYW1tYS55XVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8qIGNyb3NzICovXHJcbiAgICAgICAgICAgICAgICBpbm5lcldpZHRoOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luX2lubmVyU2l6ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtzdHlsZS5pbm5lcldpZHRoLCBzdHlsZS5pbm5lckhlaWdodF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBpbm5lckhlaWdodDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbl9pbm5lclNpemUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBbc3R5bGUuaW5uZXJXaWR0aCwgc3R5bGUuaW5uZXJIZWlnaHRdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhdHRyaWJ1dGVOYW1lIGluIG1hcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbWFwW2F0dHJpYnV0ZU5hbWVdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXZlcnNlZF9tYXAgPSB7fVxyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKG1hcCkuZm9yRWFjaCgoW2ssIHZdKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdiBhcyBhbnlcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gayBhcyBzdHJpbmdcclxuICAgICAgICAgICAgcmV2ZXJzZWRfbWFwW3ZhbHVlLm5hbWVdID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZToga2V5LFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLnZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gcmV2ZXJzZWRfbWFwW2F0dHJpYnV0ZU5hbWVdXHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XHJcbiAqIEBkZXNjcmlwdGlvbiBMaW5rIHVzZWQgaW4gcmVuZGVyZXJcclxuICovXHJcblxyXG5pbXBvcnQgeyBMaW5rTWFuYWdlckNvbmZpZ3MsIFNoYWRlclNlcmllcyB9IGZyb20gJy4uL2ludGVyZmFjZXMnXHJcbmltcG9ydCBMaW5rIGZyb20gJy4uLy4uL2VsZW1lbnRzL2xpbmsnXHJcbmltcG9ydCB7IFJlbmRlckVsZW1lbnRNYW5hZ2VyIH0gZnJvbSAnLi9yZW5kZXItZWxlbWVudCdcclxuXHJcbmV4cG9ydCBjbGFzcyBSZW5kZXJMaW5rTWFuYWdlciBleHRlbmRzIFJlbmRlckVsZW1lbnRNYW5hZ2VyIHtcclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlIHJlbmRlciBsaW5rIG1hbmFnZXJcclxuICAgICAqIEBwYXJhbSBnbCBXZWJHTCBjb250ZXh0XHJcbiAgICAgKiBAcGFyYW0gcGFyYW1zIG5lc3Nlc2FyeSBjb25maWdzIGZvciBsaW5rIG1hbmFnZXJcclxuICAgICAqIEBwYXJhbSBpZFRleHR1cmUgdGV4dHVyZSBzdG9yZSBlbGVtZW50cyBpZCBvZiBlYWNoIHBpeGVsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICBnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dCxcclxuICAgICAgICBwYXJhbXM6IExpbmtNYW5hZ2VyQ29uZmlncyxcclxuICAgICAgICBzaGFkZXJzOiBTaGFkZXJTZXJpZXMsXHJcbiAgICAgICAgaWRUZXh0dXJlOiBXZWJHTFRleHR1cmVcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKFxyXG4gICAgICAgICAgICAvKiB3ZWJnbCBjb250ZXh0ICovIGdsLFxyXG4gICAgICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgICAgICAgICAgLyogcGFyYW1ldGVycyAqLyB7Li4ucGFyYW1zLCBpbnN0YW5jZVZlcnRlY2VzOiBbXHJcbiAgICAgICAgICAgICAgICAtMC41LCAwLjUsIDEuMCxcclxuICAgICAgICAgICAgICAgIC0wLjUsIC0wLjUsIDEuMCxcclxuICAgICAgICAgICAgICAgIDAuNSwgMC41LCAxLjAsXHJcbiAgICAgICAgICAgICAgICAwLjUsIC0wLjUsIDEuMCxcclxuICAgICAgICAgICAgXX0sXHJcbiAgICAgICAgICAgIC8qIHNoYWRlciBzZXJpZXMgKi8ge1xyXG4gICAgICAgICAgICAgICAgLi4uc2hhZGVyc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvKiBpZFRleHR1cmUgKi8gaWRUZXh0dXJlXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMucmVuZGVySWRUb0VsZW1lbnQgPSB7fVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVmcmVzaCBhbGwgcG9zaXRpb24gb2YgZWRnZXNcclxuICAgICAqIEBwYXJhbSBsaW5rcyBhbGwgbGluayBkYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWZyZXNoUG9zaXRpb24obGlua3M6IExpbmtbXSkge1xyXG4gICAgICAgIGxldCBjb3VudCA9IDAgLy8gVE9ETzogdXNlbGVzcyBjb3VudFxyXG4gICAgICAgIGxpbmtzLmZvckVhY2goKGxpbmssIGkpID0+IHtcclxuICAgICAgICAgICAgLy8gVE9ETzogY29uc2lkZXIgbGluayBhbmQgcmVuZGVyIGxpbmsgYXR0cmlidXRlIG1hcHBpbmdcclxuICAgICAgICAgICAgY29uc3Qgc291cmNlTmFtZSA9ICdpbl9zb3VyY2UnXHJcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZUF0dHJpYnV0ZSA9IHRoaXMuYXR0cmlidXRlcy5nZXQoc291cmNlTmFtZSlcclxuICAgICAgICAgICAgY29uc3Qgc291cmNlVmFsdWUgPSB0aGlzLmdldEF0dHJpYnV0ZUJ5RWxlbWVudChsaW5rLCBzb3VyY2VOYW1lKVxyXG4gICAgICAgICAgICBjb25zdCBzb3VyY2VBcnJheSA9IHNvdXJjZVZhbHVlLnZhbHVlIGFzIG51bWJlcltdXHJcbiAgICAgICAgICAgIHNvdXJjZUF0dHJpYnV0ZS5hcnJheVsyICogaV0gPSBzb3VyY2VBcnJheVswXVxyXG4gICAgICAgICAgICBzb3VyY2VBdHRyaWJ1dGUuYXJyYXlbMiAqIGkgKyAxXSA9IHNvdXJjZUFycmF5WzFdXHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXROYW1lID0gJ2luX3RhcmdldCdcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0QXR0cmlidXRlID0gdGhpcy5hdHRyaWJ1dGVzLmdldCh0YXJnZXROYW1lKVxyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRWYWx1ZSA9IHRoaXMuZ2V0QXR0cmlidXRlQnlFbGVtZW50KGxpbmssIHRhcmdldE5hbWUpXHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEFycmF5ID0gdGFyZ2V0VmFsdWUudmFsdWUgYXMgbnVtYmVyW11cclxuICAgICAgICAgICAgdGFyZ2V0QXR0cmlidXRlLmFycmF5WzIgKiBpXSA9IHRhcmdldEFycmF5WzBdXHJcbiAgICAgICAgICAgIHRhcmdldEF0dHJpYnV0ZS5hcnJheVsyICogaSArIDFdID0gdGFyZ2V0QXJyYXlbMV1cclxuXHJcbiAgICAgICAgICAgIC8vIGN1cnJlbnRseSBubyBuZWVkIGZvciBjb2xvciZyZW5kZXJJZCBjaGFuZ2VcclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW0xpbmtBdHRyS2V5LldJRFRIXS5hcnJheVt0aGlzLmNvdW50ICsgaV0gPVxyXG4gICAgICAgICAgICAgICAgbGluay5zdHJva2VXaWR0aCgpICogdGhpcy5waXhlbFJhdGlvXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IGxpbmsuc3Ryb2tlQ29sb3IoKVxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTGlua0F0dHJLZXkuQ09MT1JdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpXSA9IGNvbG9yLnJcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW0xpbmtBdHRyS2V5LkNPTE9SXS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKSArIDFdID0gY29sb3IuZ1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTGlua0F0dHJLZXkuQ09MT1JdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpICsgMl0gPSBjb2xvci5iXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tMaW5rQXR0cktleS5DT0xPUl0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSkgKyAzXSA9IGNvbG9yLmFcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcklkQ29sb3IgPSBlbmNvZGVSZW5kZXJJZCgyICogKHRoaXMuY291bnQgKyBpKSArIDEpIC8vIE5PVEU6IGxpbmsgcmVuZGVyIGlkLCB1c2Ugb2RkIGludGVnZXJcclxuICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXMuZ2V0KCdpbl9pZCcpLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpXSA9IHJlbmRlcklkQ29sb3IuclxyXG4gICAgICAgICAgICB0aGlzLmlkQXR0cmlidXRlcy5nZXQoJ2luX2lkJykuYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSkgKyAxXSA9IHJlbmRlcklkQ29sb3IuZ1xyXG4gICAgICAgICAgICB0aGlzLmlkQXR0cmlidXRlcy5nZXQoJ2luX2lkJykuYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSkgKyAyXSA9IHJlbmRlcklkQ29sb3IuYlxyXG4gICAgICAgICAgICB0aGlzLmlkQXR0cmlidXRlcy5nZXQoJ2luX2lkJykuYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSkgKyAzXSA9IHJlbmRlcklkQ29sb3IuYVxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IHNvdXJjZUF0dHIgPSB0aGlzLmF0dHJpYnV0ZXMuZ2V0KCdpbl9zb3VyY2UnKVxyXG4gICAgICAgIGNvbnN0IHRhcmdldEF0dHIgPSB0aGlzLmF0dHJpYnV0ZXMuZ2V0KCdpbl90YXJnZXQnKVxyXG5cclxuICAgICAgICBjb25zdCBhcnIgPSBbc291cmNlQXR0ciwgdGFyZ2V0QXR0cl1cclxuXHJcbiAgICAgICAgYXJyLmZvckVhY2goKGF0dHIpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFhdHRyLmlzQnVpbGRJbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBhdHRyLmJ1ZmZlcilcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYnVmZmVyU3ViRGF0YShcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLkFSUkFZX0JVRkZFUixcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLnNpemUgKiBjb3VudCAqIGF0dHIuYXJyYXkuQllURVNfUEVSX0VMRU1FTlQsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5hcnJheSxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLnNpemUgKiBjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLnNpemUgKiBsaW5rcy5sZW5ndGhcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XHJcbiAqIEBkZXNjcmlwdGlvbiBOb2RlIHVzaW5nIGluIFJlbmRlcmVyXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgTm9kZU1hbmFnZXJDb25maWdzLCBTaGFkZXJTZXJpZXMgfSBmcm9tICcuLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgTm9kZSBmcm9tICcuLi8uLi9lbGVtZW50cy9ub2RlJ1xyXG5pbXBvcnQgeyBSZW5kZXJFbGVtZW50TWFuYWdlciB9IGZyb20gJy4vcmVuZGVyLWVsZW1lbnQnXHJcblxyXG5leHBvcnQgY2xhc3MgUmVuZGVyTm9kZU1hbmFnZXIgZXh0ZW5kcyBSZW5kZXJFbGVtZW50TWFuYWdlciB7XHJcbiAgICAvLyBwcml2YXRlIGlkVG9JbmRleDogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlIHJlbmRlciBub2RlIG1hbmFnZXJcclxuICAgICAqIEBwYXJhbSBnbCBXZWJHTCBjb250ZXh0XHJcbiAgICAgKiBAcGFyYW0gcGFyYW1zIG5lc3Nlc2FyeSBjb25maWdzIGZvciBub2RlIG1hbmFnZXJcclxuICAgICAqIEBwYXJhbSBpZFRleHR1cmUgdGV4dHVyZSBzdG9yZSBlbGVtZW50cyBpZCBvZiBlYWNoIHBpeGVsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICBnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dCxcclxuICAgICAgICBwYXJhbXM6IE5vZGVNYW5hZ2VyQ29uZmlncyxcclxuICAgICAgICBzaGFkZXJzOiBTaGFkZXJTZXJpZXMsXHJcbiAgICAgICAgaWRUZXh0dXJlOiBXZWJHTFRleHR1cmVcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKFxyXG4gICAgICAgICAgICAvKiB3ZWJnbCBjb250ZXh0ICovIGdsLFxyXG4gICAgICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgICAgICAgICAgLyogcGFyYW1ldGVycyAqLyB7Li4ucGFyYW1zLCBpbnN0YW5jZVZlcnRlY2VzOiBbXHJcbiAgICAgICAgICAgICAgICAtMC41LCAwLjUsIDEuMCxcclxuICAgICAgICAgICAgICAgIC0wLjUsIC0wLjUsIDEuMCxcclxuICAgICAgICAgICAgICAgIDAuNSwgMC41LCAxLjAsXHJcbiAgICAgICAgICAgICAgICAwLjUsIC0wLjUsIDEuMCxcclxuICAgICAgICAgICAgXX0sXHJcbiAgICAgICAgICAgIC8qIHNoYWRlciBzZXJpZXMgKi8ge1xyXG4gICAgICAgICAgICAgICAgLi4uc2hhZGVyc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvKiBpZFRleHR1cmUgKi8gaWRUZXh0dXJlXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMucmVuZGVySWRUb0VsZW1lbnQgPSB7fVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVmcmVzaCBhbGwgbm9kZXMgcG9zaXRpb24gYWZ0ZXIgbGF6eSB1cGRhdGVcclxuICAgICAqIEBwYXJhbSBub2RlcyBhbGwgbm9kZSBkYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWZyZXNoUG9zaXRpb24obm9kZXM6IE5vZGVbXSkge1xyXG4gICAgICAgIC8vIHNldCBhcnJheVxyXG4gICAgICAgIG5vZGVzLmZvckVhY2goKG5vZGUsIGkpID0+IHtcclxuICAgICAgICAgICAgLy8gVE9ETzogY29uc2lkZXIgbm9kZSBhbmQgcmVuZGVyIG5vZGUgYXR0cmlidXRlIG1hcHBpbmdcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9ICdpbl9wb3NpdGlvbidcclxuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlID0gdGhpcy5hdHRyaWJ1dGVzLmdldChuYW1lKVxyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0QXR0cmlidXRlQnlFbGVtZW50KG5vZGUsIG5hbWUpXHJcbiAgICAgICAgICAgIGNvbnN0IGFycmF5ID0gdmFsdWUudmFsdWUgYXMgbnVtYmVyW11cclxuICAgICAgICAgICAgYXR0cmlidXRlLmFycmF5WzIgKiBpXSA9IGFycmF5WzBdXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZS5hcnJheVsyICogaSArIDFdID0gYXJyYXlbMV1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWF0dHIuaXNCdWlsZEluKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIGF0dHIuYnVmZmVyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5idWZmZXJTdWJEYXRhKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wuQVJSQVlfQlVGRkVSLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5hcnJheSxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSAqIG5vZGVzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogQGRlc2NyaXB0aW9uIHJlbmRlciBncmFwaCB1c2luZyB3ZWJnbFxyXG4gKiBAYXV0aG9yIFhpYW9kb25nIFpoYW8gPHpoYW94aWFvZG9uZ0B6anUuZWR1LmNuPlxyXG4gKi9cclxuXHJcbmltcG9ydCAqIGFzIG5vZGVTaGFkZXJzIGZyb20gJy4vc2hhZGVycy9ub2RlLXNoYWRlcidcclxuaW1wb3J0ICogYXMgbGlua1NoYWRlcnMgZnJvbSAnLi9zaGFkZXJzL2xpbmstc2hhZGVyJ1xyXG5pbXBvcnQgTm9kZSBmcm9tICcuLi9lbGVtZW50cy9ub2RlJ1xyXG5pbXBvcnQgTGluayBmcm9tICcuLi9lbGVtZW50cy9saW5rJ1xyXG5pbXBvcnQgeyBSZW5kZXJOb2RlTWFuYWdlciB9IGZyb20gJy4vZWxlbWVudHMvcmVuZGVyLW5vZGUnXHJcbmltcG9ydCB7IFJlbmRlckxpbmtNYW5hZ2VyIH0gZnJvbSAnLi9lbGVtZW50cy9yZW5kZXItbGluaydcclxuaW1wb3J0IHsgVHJhbnNmb3JtLCBQb3NpdGlvbiB9IGZyb20gJy4uL2ludGVyZmFjZXMnXHJcbmltcG9ydCB7IFJlbmRlcmVyQ29uZmlncyB9IGZyb20gJy4vaW50ZXJmYWNlcydcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyBkZWNvZGVSZW5kZXJJZCB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5jb25zdCBNT0RJRklFRF9FTEVNRU5UU19DT1VOVF9VUFBFUl9USFJFU0hPTEQgPSAxMDAgLy8gd2hlbiBtb2RpZmllZEVsZW1lbnRDb3VudCBpcyBsYXJnZXIgdGhhbiBpdCwgJF9zaG91bGRMYXp5VXBkYXRlIHdpbGwgYmUgdHJ1ZVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlbmRlcmVyIHtcclxuICAgIHB1YmxpYyBub2RlTWFuYWdlcjogUmVuZGVyTm9kZU1hbmFnZXJcclxuICAgIHB1YmxpYyBsaW5rTWFuYWdlcjogUmVuZGVyTGlua01hbmFnZXJcclxuXHJcbiAgICBwdWJsaWMgbW9kaWZpZWRFbGVtZW50c0NvdW50ID0gMCAvLyByZWNvcmQgbW9kaWZpZWQgbGluayBudW0gdG8gY29udHJvbCBsYXp5IHVwZGF0ZVxyXG4gICAgcHVibGljIHNob3VsZExhenlVcGRhdGUgPSBmYWxzZSAvLyBmbGFnIHRvIGNvbnRyb2wgbGF6eSB1cGRhdGVcclxuXHJcbiAgICBwcml2YXRlIGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0XHJcbiAgICBwcml2YXRlIGJhY2tncm91bmRDb2xvcjogQ29sb3JcclxuICAgIHByaXZhdGUgd2lkdGg6IG51bWJlclxyXG4gICAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlclxyXG4gICAgcHJpdmF0ZSBpZFRleHR1cmU6IFdlYkdMVGV4dHVyZVxyXG5cclxuICAgIHByaXZhdGUgZ2V0QWxsTm9kZXM6ICgpID0+IE5vZGVbXVxyXG4gICAgcHJpdmF0ZSBnZXRBbGxMaW5rczogKCkgPT4gTGlua1tdXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjcmVhdGUgcmVuZGVyZXIgb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0gY29uZmlncyB7Y2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGJhY2tncm91bmRDb2xvcjogQ29sb3IsIGRlZmF1bHRDb25maWdzOiBPYmplY3R9IGNvbmZpZ3MgcGFzc2VkIHRvIHJlbmRlcmVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb25maWdzOiBSZW5kZXJlckNvbmZpZ3MpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGNhbnZhcyxcclxuICAgICAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodCxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICBub2RlTGltaXQsXHJcbiAgICAgICAgICAgIGxpbmtMaW1pdCxcclxuICAgICAgICAgICAgZ2V0QWxsTm9kZXMsXHJcbiAgICAgICAgICAgIGdldEFsbExpbmtzXHJcbiAgICAgICAgfSA9IGNvbmZpZ3NcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5nbCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbDInKVxyXG4gICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldFYgcmVxdWlyZXMgV2ViR0wyIHN1cHBvcnRlZCBieSB5b3VyIGJyb3dzZXInKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3JcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGhcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxyXG5cclxuICAgICAgICB0aGlzLmdldEFsbE5vZGVzID0gZ2V0QWxsTm9kZXNcclxuICAgICAgICB0aGlzLmdldEFsbExpbmtzID0gZ2V0QWxsTGlua3NcclxuXHJcbiAgICAgICAgdGhpcy5pbml0SWRUZXh0dXJlKClcclxuXHJcbiAgICAgICAgY29uc3Qgbm9kZVNoYWRlclNlcmllbHMgPSB7XHJcbiAgICAgICAgICAgIHZlcnRleDogbm9kZVNoYWRlcnMudmVydGV4LmNvbm5lY3QoKSxcclxuICAgICAgICAgICAgZnJhZ21lbnQ6IG5vZGVTaGFkZXJzLmZyYWdtZW50LmNvbm5lY3QoKSxcclxuICAgICAgICAgICAgaWRWZXJ0ZXg6IG5vZGVTaGFkZXJzLmlkVmVydGV4LmNvbm5lY3QoKSxcclxuICAgICAgICAgICAgaWRGcmFnbWVudDogbm9kZVNoYWRlcnMuaWRGcmFnbWVudC5jb25uZWN0KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGxpbmtTaGFkZXJTZXJpZWxzID0ge1xyXG4gICAgICAgICAgICB2ZXJ0ZXg6IGxpbmtTaGFkZXJzLnZlcnRleC5jb25uZWN0KCksXHJcbiAgICAgICAgICAgIGZyYWdtZW50OiBsaW5rU2hhZGVycy5mcmFnbWVudC5jb25uZWN0KCksXHJcbiAgICAgICAgICAgIGlkVmVydGV4OiBsaW5rU2hhZGVycy5pZFZlcnRleC5jb25uZWN0KCksXHJcbiAgICAgICAgICAgIGlkRnJhZ21lbnQ6IGxpbmtTaGFkZXJzLmlkRnJhZ21lbnQuY29ubmVjdCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGVNYW5hZ2VyID0gbmV3IFJlbmRlck5vZGVNYW5hZ2VyKFxyXG4gICAgICAgICAgICB0aGlzLmdsLFxyXG4gICAgICAgICAgICB7IHdpZHRoLCBoZWlnaHQsIGxpbWl0OiBub2RlTGltaXQgfSxcclxuICAgICAgICAgICAgbm9kZVNoYWRlclNlcmllbHMsXHJcbiAgICAgICAgICAgIHRoaXMuaWRUZXh0dXJlXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMubGlua01hbmFnZXIgPSBuZXcgUmVuZGVyTGlua01hbmFnZXIoXHJcbiAgICAgICAgICAgIHRoaXMuZ2wsXHJcbiAgICAgICAgICAgIHsgd2lkdGgsIGhlaWdodCwgbGltaXQ6IGxpbmtMaW1pdCB9LFxyXG4gICAgICAgICAgICBsaW5rU2hhZGVyU2VyaWVscyxcclxuICAgICAgICAgICAgdGhpcy5pZFRleHR1cmVcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBkaXNwb3NlIHJlbmRlcmVyIHN0dWZmc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICAvLyByZWZlcjogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIzNjA2NTgxXHJcbiAgICAgICAgY29uc3QgbnVtVGV4dHVyZVVuaXRzID0gdGhpcy5nbC5nZXRQYXJhbWV0ZXIodGhpcy5nbC5NQVhfVEVYVFVSRV9JTUFHRV9VTklUUylcclxuICAgICAgICBmb3IgKGxldCB1bml0ID0gMDsgdW5pdCA8IG51bVRleHR1cmVVbml0czsgKyt1bml0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuYWN0aXZlVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkUwICsgdW5pdClcclxuICAgICAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfMkQsIG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFX0NVQkVfTUFQLCBudWxsKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIG51bGwpXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG51bGwpXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kUmVuZGVyYnVmZmVyKHRoaXMuZ2wuUkVOREVSQlVGRkVSLCBudWxsKVxyXG4gICAgICAgIHRoaXMuZ2wuYmluZEZyYW1lYnVmZmVyKHRoaXMuZ2wuRlJBTUVCVUZGRVIsIG51bGwpXHJcbiAgICAgICAgdGhpcy5nbC5nZXRFeHRlbnNpb24oJ1dFQkdMX2xvc2VfY29udGV4dCcpLmxvc2VDb250ZXh0KClcclxuICAgICAgICAvLyBUT0RPOiBtYXliZSBuZWVkIGZyZWUgbW9yZSBidWZmZXJzIG9yIHNvbWV0aGluZyBlbHNlXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQgY2xlYXJDb2xvciBmb3IgcmVuZGVyZXJcclxuICAgICAqIEBwYXJhbSBjb2xvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0QmFja2dyb3VuZENvbG9yKGNvbG9yOiBDb2xvcikge1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gY29sb3JcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNsZWFyIGRhdGEgaW4gcmVuZGVyZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNsZWFyRGF0YSgpIHtcclxuICAgICAgICB0aGlzLm5vZGVNYW5hZ2VyLmNsZWFyRGF0YSgpXHJcbiAgICAgICAgdGhpcy5saW5rTWFuYWdlci5jbGVhckRhdGEoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIG5vZGVzIHRvIG5vZGUgbWFuYWdlclxyXG4gICAgICogQHBhcmFtIG5vZGVzIG5vZGUgZGF0YSBpbiBOZXRWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGROb2Rlcyhub2RlczogTm9kZVtdKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlTWFuYWdlci5hZGREYXRhKG5vZGVzKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIGxpbmtzIHRvIGxpbmsgbWFuYWdlclxyXG4gICAgICogQHBhcmFtIGxpbmtzIGxpbmsgZGF0YSBpbiBOZXRWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRMaW5rcyhsaW5rczogTGlua1tdKSB7XHJcbiAgICAgICAgdGhpcy5saW5rTWFuYWdlci5hZGREYXRhKGxpbmtzKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRUcmFuc2Zvcm0odHJhbnNmb3JtOiBUcmFuc2Zvcm0pIHtcclxuICAgICAgICB0aGlzLm5vZGVNYW5hZ2VyLnNldFRyYW5zZm9ybSh0cmFuc2Zvcm0pXHJcbiAgICAgICAgdGhpcy5saW5rTWFuYWdlci5zZXRUcmFuc2Zvcm0odHJhbnNmb3JtKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZHJhdyBhbGwgZWxlbWVudHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRyYXcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkTGF6eVVwZGF0ZSkge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBub3Qgb25seSBwb3NpdGlvbiBuZWVkcyB0byBiZSByZWZyZXNoZWQsIGJ1dCBhbHNvIG90aGVyIHN0eWxlc1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVNYW5hZ2VyLnJlZnJlc2hQb3NpdGlvbih0aGlzLmdldEFsbE5vZGVzKCkpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmxpbmtNYW5hZ2VyLnJlZnJlc2hQb3NpdGlvbih0aGlzLmdldEFsbExpbmtzKCkpXHJcbiAgICAgICAgICAgIHRoaXMuc2hvdWxkTGF6eVVwZGF0ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMubW9kaWZpZWRFbGVtZW50c0NvdW50ID0gMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5GUkFNRUJVRkZFUiwgdGhpcy5pZFRleHR1cmUpXHJcbiAgICAgICAgdGhpcy5nbC5jbGVhckNvbG9yKDEsIDEsIDEsIDEpXHJcbiAgICAgICAgdGhpcy5nbC5jbGVhcih0aGlzLmdsLkNPTE9SX0JVRkZFUl9CSVQpXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5GUkFNRUJVRkZFUiwgbnVsbClcclxuXHJcbiAgICAgICAgdGhpcy5nbC5jbGVhckNvbG9yKFxyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvci5yLFxyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvci5nLFxyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvci5iLFxyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvci5hXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMuZ2wuY2xlYXIodGhpcy5nbC5DT0xPUl9CVUZGRVJfQklUKVxyXG4gICAgICAgIHRoaXMubGlua01hbmFnZXIuZHJhdygpXHJcbiAgICAgICAgdGhpcy5ub2RlTWFuYWdlci5kcmF3KClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldCBlbGVtZW50J3MgaWQgYXQgKHgsIHkpIG9mIGNhbnZhcyBpZiBleGlzdHNcclxuICAgICAqIEBwYXJhbSB4IHggcG9zXHJcbiAgICAgKiBAcGFyYW0geSB5IHBvc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0SWRCeVBvc2l0aW9uKHBvc2l0aW9uOiBQb3NpdGlvbik6IHN0cmluZyB8IFtzdHJpbmcsIHN0cmluZ10ge1xyXG4gICAgICAgIGNvbnN0IHJlbmRlcklkID0gdGhpcy5yZWFkSWRUZXh0dXJlKHBvc2l0aW9uKVxyXG4gICAgICAgIGlmIChyZW5kZXJJZCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChyZW5kZXJJZCAlIDIgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIE5PVEU6IG5vZGUgaGFzIGV2ZW4gcmVuZGVyIGlkLCBsaW5rIGhhcyBvZGQgcmVuZGVyIGlkXHJcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5ub2RlTWFuYWdlci5nZXRFbGVtZW50QnlSZW5kZXJJZChyZW5kZXJJZCkgYXMgTm9kZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuaWQoKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGluayA9IHRoaXMubGlua01hbmFnZXIuZ2V0RWxlbWVudEJ5UmVuZGVySWQocmVuZGVySWQpIGFzIExpbmtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZVRhcmdldCA9IGxpbmsuc291cmNlVGFyZ2V0KClcclxuICAgICAgICAgICAgICAgIHJldHVybiBbc291cmNlVGFyZ2V0LnNvdXJjZS5pZCgpLCBzb3VyY2VUYXJnZXQudGFyZ2V0LmlkKCldXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZWFkIHBpeGVsIHZhbHVlIGF0ICh4LCB5KSBvZiB0ZXh0dXJlXHJcbiAgICAgKiBAcGFyYW0geCB4IHBvc1xyXG4gICAgICogQHBhcmFtIHkgeSBwb3NcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRJZFRleHR1cmUocG9zaXRpb246IFBvc2l0aW9uKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCByYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcclxuICAgICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLlJFQURfRlJBTUVCVUZGRVIsIHRoaXMuaWRUZXh0dXJlKVxyXG4gICAgICAgIGNvbnN0IHJlYWRQaXhlbEJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KFsyNTUsIDI1NSwgMjU1LCAyNTVdKSAvLyAtMVxyXG4gICAgICAgIHRoaXMuZ2wucmVhZFBpeGVscyhcclxuICAgICAgICAgICAgLy8gIVdhcm5pbmc6IHggYW5kIHkgYXJlIG9wdGlvbmFsIGluIFBvc2l0aW9uLCBuZWVkIHRvIGNoZWNrIHRoZW1cclxuICAgICAgICAgICAgcG9zaXRpb24ueCAqIHJhdGlvLFxyXG4gICAgICAgICAgICBwb3NpdGlvbi55ICogcmF0aW8sXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgIHRoaXMuZ2wuUkdCQSxcclxuICAgICAgICAgICAgdGhpcy5nbC5VTlNJR05FRF9CWVRFLFxyXG4gICAgICAgICAgICByZWFkUGl4ZWxCdWZmZXJcclxuICAgICAgICApXHJcbiAgICAgICAgY29uc3Qgb2JqZWN0SUQgPSBkZWNvZGVSZW5kZXJJZChyZWFkUGl4ZWxCdWZmZXIpXHJcblxyXG4gICAgICAgIHJldHVybiBvYmplY3RJRFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaW5jcmVhc2UgbW9kaWZpZWQgZWxlbWVudHMgY291bnRcclxuICAgICAqIFdoZW4gaXQgaXMgbGFyZ2VyIHRoYW4gYSB0aHJlc2hvbGQsIHRoZSBsYXp5IHVwZGF0ZSBtb2RlIHdpbGwgYmUgdHVybmVkIG9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5jcmVhc2VNb2RpZmllZEVsZW1lbnRzQ291bnRCeShuOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm1vZGlmaWVkRWxlbWVudHNDb3VudCArPSBuXHJcbiAgICAgICAgaWYgKHRoaXMubW9kaWZpZWRFbGVtZW50c0NvdW50ID4gTU9ESUZJRURfRUxFTUVOVFNfQ09VTlRfVVBQRVJfVEhSRVNIT0xEKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvdWxkTGF6eVVwZGF0ZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpbml0IFdlYkdMIHRleHR1cmUgZm9yIHJlY29yZGluZyBwb3NpdGlvbiBvZiBlbGVtZW50c1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGluaXRJZFRleHR1cmUoKSB7XHJcbiAgICAgICAgY29uc3QgZ2wgPSB0aGlzLmdsXHJcbiAgICAgICAgY29uc3QgcGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcclxuICAgICAgICBjb25zdCBzY3JlZW5XaWR0aCA9IHRoaXMud2lkdGggKiBwaXhlbFJhdGlvXHJcbiAgICAgICAgY29uc3Qgc2NyZWVuSGVpZ2h0ID0gdGhpcy5oZWlnaHQgKiBwaXhlbFJhdGlvXHJcblxyXG4gICAgICAgIGNvbnN0IGZibyA9IGdsLmNyZWF0ZUZyYW1lYnVmZmVyKClcclxuICAgICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIGZibylcclxuXHJcbiAgICAgICAgY29uc3QgaWRUZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpXHJcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgaWRUZXh0dXJlKVxyXG4gICAgICAgIGdsLnRleEltYWdlMkQoXHJcbiAgICAgICAgICAgIGdsLlRFWFRVUkVfMkQsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIGdsLlJHQkEsXHJcbiAgICAgICAgICAgIHNjcmVlbldpZHRoLFxyXG4gICAgICAgICAgICBzY3JlZW5IZWlnaHQsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIGdsLlJHQkEsXHJcbiAgICAgICAgICAgIGdsLlVOU0lHTkVEX0JZVEUsXHJcbiAgICAgICAgICAgIG51bGxcclxuICAgICAgICApXHJcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUilcclxuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTElORUFSKVxyXG4gICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpXHJcbiAgICAgICAgZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQoZ2wuRlJBTUVCVUZGRVIsIGdsLkNPTE9SX0FUVEFDSE1FTlQwLCBnbC5URVhUVVJFXzJELCBpZFRleHR1cmUsIDApXHJcblxyXG4gICAgICAgIC8vIFRPRE86IG5lZWQgc2ltcGxpZnlcclxuICAgICAgICBnbC5kcmF3QnVmZmVycyhbMF0ubWFwKCh2KSA9PiB2ICsgZ2wuQ09MT1JfQVRUQUNITUVOVDApKVxyXG5cclxuICAgICAgICBjb25zdCByYm8gPSBnbC5jcmVhdGVSZW5kZXJidWZmZXIoKVxyXG4gICAgICAgIGdsLmJpbmRSZW5kZXJidWZmZXIoZ2wuUkVOREVSQlVGRkVSLCByYm8pXHJcbiAgICAgICAgZ2wuY2xlYXJDb2xvcigxLCAxLCAxLCAxKVxyXG4gICAgICAgIGdsLnJlbmRlcmJ1ZmZlclN0b3JhZ2UoZ2wuUkVOREVSQlVGRkVSLCBnbC5ERVBUSDI0X1NURU5DSUw4LCBzY3JlZW5XaWR0aCwgc2NyZWVuSGVpZ2h0KVxyXG4gICAgICAgIGdsLmJpbmRSZW5kZXJidWZmZXIoZ2wuUkVOREVSQlVGRkVSLCBudWxsKVxyXG4gICAgICAgIGdsLmZyYW1lYnVmZmVyUmVuZGVyYnVmZmVyKFxyXG4gICAgICAgICAgICBnbC5GUkFNRUJVRkZFUixcclxuICAgICAgICAgICAgZ2wuREVQVEhfU1RFTkNJTF9BVFRBQ0hNRU5ULFxyXG4gICAgICAgICAgICBnbC5SRU5ERVJCVUZGRVIsXHJcbiAgICAgICAgICAgIHJib1xyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgaWYgKGdsLmNoZWNrRnJhbWVidWZmZXJTdGF0dXMoZ2wuRlJBTUVCVUZGRVIpICE9PSBnbC5GUkFNRUJVRkZFUl9DT01QTEVURSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZyYW1lYnVmZmVyIGdlbmVyYXRlIGZhaWxlZCcpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpXHJcblxyXG4gICAgICAgIHRoaXMuaWRUZXh0dXJlID0gZmJvXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vdXRpbHMnXHJcblxyXG5jb25zdCB2ZXJ0ZXggPSBuZXcgU2hhZGVyKClcclxudmVydGV4LmlucHV0cyA9IHtcclxuICAgIGluVmVydGV4UG9zOiAndmVjMycsXHJcbiAgICBpbl9zaGFwZTogJ2Zsb2F0JyxcclxuICAgIGluX3NvdXJjZTogJ3ZlYzInLFxyXG4gICAgaW5fdGFyZ2V0OiAndmVjMicsXHJcbiAgICBpbl9jdXJ2ZW5lc3M6ICdmbG9hdCcsXHJcbiAgICBpbl9zdHJva2VXaWR0aDogJ2Zsb2F0JyxcclxuICAgIGluX3N0cm9rZUNvbG9yOiAndmVjNCdcclxufVxyXG52ZXJ0ZXgub3V0cHV0cyA9IHtcclxuICAgIHNoYXBlOiAnZmxvYXQnLFxyXG4gICAgc3Ryb2tlQ29sb3I6ICd2ZWM0JyxcclxuICAgIHN0cm9rZVdpZHRoOiAnZmxvYXQnLFxyXG4gICAgY3BBOiAndmVjMicsXHJcbiAgICBjcEI6ICd2ZWMyJyxcclxuICAgIGNwQzogJ3ZlYzInLFxyXG4gICAgY3VydmVuZXNzOiAnZmxvYXQnXHJcbn1cclxudmVydGV4LnVuaWZvcm1zID0ge1xyXG4gICAgcHJvamVjdGlvbjogJ21hdDMnLFxyXG4gICAgc2NhbGU6ICd2ZWMyJyxcclxuICAgIHRyYW5zbGF0ZTogJ3ZlYzInXHJcbn1cclxudmVydGV4Lm1haW4gPSBbXHJcbiAgICBgdm9pZCBtYWluKHZvaWQpIHtgLFxyXG4gICAgYCAgICBzdHJva2VDb2xvciA9IGluX3N0cm9rZUNvbG9yO2AsXHJcbiAgICBgICAgIHN0cm9rZVdpZHRoID0gaW5fc3Ryb2tlV2lkdGg7YCxcclxuICAgIGAgICAgc2hhcGUgPSBpbl9zaGFwZTtgLFxyXG4gICAgYCAgICB2ZWMyIHNvdXJjZSA9IGluX3NvdXJjZSAqIHNjYWxlICsgdHJhbnNsYXRlO2AsXHJcbiAgICBgICAgIHZlYzIgdGFyZ2V0ID0gaW5fdGFyZ2V0ICogc2NhbGUgKyB0cmFuc2xhdGU7YCxcclxuICAgIGAgICAgdmVjMiBkZWx0YSA9IHRhcmdldCAtIHNvdXJjZTtgLFxyXG4gICAgYCAgICB2ZWMyIGNlbnRlciA9IDAuNSAqIChzb3VyY2UgKyB0YXJnZXQpO2AsXHJcbiAgICBgICAgIGZsb2F0IGxlbiA9IGxlbmd0aChkZWx0YSk7YCxcclxuICAgIGAgICAgZmxvYXQgcGhpID0gYXRhbihkZWx0YS55IC8gZGVsdGEueCk7YCxcclxuXHJcbiAgICBgICAgIGZsb2F0IGNvbnRhaW5lcldpZHRoID0gaW5fc3Ryb2tlV2lkdGg7YCxcclxuICAgIGAgICAgaWYgKGluX3NoYXBlID09IDEuKSB7YCwgLy8gY2lyY2xlIHNoYXBlIG5lZWQgbGFyZ2VyIGNvbnRhaW5lclxyXG4gICAgYCAgICAgICBjb250YWluZXJXaWR0aCA9IDIuICogKGluX2N1cnZlbmVzcyAqIGxlbiArIGluX3N0cm9rZVdpZHRoKTsgLy8gVE9ETzogY2FuIG9wdGltaXplIHRvIGhhbGZgLFxyXG4gICAgYCAgICB9YCxcclxuICAgIGAgICAgdmVjMiBub3JtYWwgPSBub3JtYWxpemUodmVjMihkZWx0YS55LCAtZGVsdGEueCkpOyAvLyBUT0RPOiBsaW5rJ3Mgbm9ybWFsLCBuZWVkIGNvbnRyb2wgc2lkZWAsXHJcbiAgICBgICAgIGNwQSA9IHNvdXJjZTtgLFxyXG4gICAgYCAgICBjcEIgPSBjZW50ZXIgKyBub3JtYWwgKiBsZW4gKiBpbl9jdXJ2ZW5lc3M7YCxcclxuICAgIGAgICAgY3BDID0gdGFyZ2V0O2AsXHJcblxyXG4gICAgYGAsXHJcbiAgICBgICAgIG1hdDMgbGluZV9zY2FsZSA9IG1hdDMoYCxcclxuICAgIGAgICAgICAgIGxlbiwgMCwgMCxgLFxyXG4gICAgYCAgICAgICAgMCwgY29udGFpbmVyV2lkdGgsIDAsYCxcclxuICAgIGAgICAgICAgIDAsIDAsIDFgLFxyXG4gICAgYCAgICApO2AsXHJcbiAgICBgICAgIG1hdDMgbGluZV9yb3RhdGUgPSBtYXQzKGAsXHJcbiAgICBgICAgICAgICBjb3MocGhpKSwgc2luKHBoaSksIDAsYCxcclxuICAgIGAgICAgICAgIC1zaW4ocGhpKSwgY29zKHBoaSksIDAsYCxcclxuICAgIGAgICAgICAgIDAsIDAsIDFgLFxyXG4gICAgYCAgICApO2AsXHJcbiAgICBgICAgIG1hdDMgbGluZV90cmFuc2xhdGUgPSBtYXQzKGAsXHJcbiAgICBgICAgICAgICAxLCAwLCAwLGAsXHJcbiAgICBgICAgICAgICAwLCAxLCAwLGAsXHJcbiAgICBgICAgICAgICBjZW50ZXIueCwgY2VudGVyLnksIDFgLFxyXG4gICAgYCAgICApO2AsXHJcbiAgICBgICAgIGAsXHJcbiAgICBgICAgIG1hdDMgdHJhbnNmb3JtID0gbGluZV90cmFuc2xhdGUgKiBsaW5lX3JvdGF0ZSAqIGxpbmVfc2NhbGU7YCxcclxuICAgIGBgLFxyXG4gICAgYCAgICBnbF9Qb3NpdGlvbiA9IHZlYzQocHJvamVjdGlvbiAqIHRyYW5zZm9ybSAqIGluVmVydGV4UG9zLCAxLik7YCxcclxuICAgIGB9YFxyXG5dXHJcblxyXG5jb25zdCBpZFZlcnRleCA9IHZlcnRleC5jb3B5KClcclxuaWRWZXJ0ZXguaW5wdXRzWydpbl9pZCddID0gJ3ZlYzQnXHJcbmlkVmVydGV4Lm91dHB1dHNbJ2lkJ10gPSAndmVjNCdcclxuaWRWZXJ0ZXgubWFpbi5zcGxpY2UoMSwgMCwgYGlkID0gaW5faWQ7YClcclxuXHJcbmNvbnN0IGZyYWdtZW50ID0gbmV3IFNoYWRlcigpXHJcbmZyYWdtZW50LmlucHV0cyA9IHsgLi4udmVydGV4Lm91dHB1dHMgfVxyXG5mcmFnbWVudC5vdXRwdXRzID0ge1xyXG4gICAgZnJhZ21lbnRDb2xvcjogJ3ZlYzQnXHJcbn1cclxuZnJhZ21lbnQudW5pZm9ybXMgPSB7XHJcbiAgICB2aWV3cG9ydDogJ3ZlYzInLFxyXG4gICAgcGl4ZWxSYXRpbzogJ2Zsb2F0J1xyXG59XHJcblxyXG5mcmFnbWVudC5tZXRob2RzID0gW1xyXG4gICAgW1xyXG4gICAgICAgIGAvLyByZWZlcmVuY2UgcGFwZXI6IGh0dHA6Ly9oaG9wcGUuY29tL3JhdmcucGRmYCxcclxuICAgICAgICBgLy8gZGlzdGFuY2UgdmVjdG9yIHRvIG9yaWdpbigwLCAwKWAsXHJcbiAgICAgICAgYGZsb2F0IGRldCh2ZWMyIGEsIHZlYzIgYikgeyByZXR1cm4gYS54ICogYi55IC0gYi54ICogYS55OyB9YCxcclxuICAgICAgICBgYCxcclxuICAgICAgICBgdmVjMiBnZXRfZGlzdGFuY2VfdmVjdG9yKHZlYzIgYjAsIHZlYzIgYjEsIHZlYzIgYjIpIHtgLFxyXG4gICAgICAgIGAgIGZsb2F0IGEgPSBkZXQoYjAsIGIyKSwgYiA9IDIuMCAqIGRldChiMSwgYjApLCBkID0gMi4wICogZGV0KGIyLCBiMSk7YCxcclxuICAgICAgICBgICBmbG9hdCBmID0gYiAqIGQgLSBhICogYTtgLFxyXG4gICAgICAgIGAgIHZlYzIgZDIxID0gYjIgLSBiMSwgZDEwID0gYjEgLSBiMCwgZDIwID0gYjIgLSBiMDtgLFxyXG4gICAgICAgIGAgIHZlYzIgZ2YgPSAyLjAgKiAoYiAqIGQyMSArIGQgKiBkMTAgKyBhICogZDIwKTtgLFxyXG4gICAgICAgIGAgIGdmID0gdmVjMihnZi55LCAtZ2YueCk7YCxcclxuICAgICAgICBgICB2ZWMyIHBwID0gLWYgKiBnZiAvIGRvdChnZiwgZ2YpO2AsXHJcbiAgICAgICAgYCAgdmVjMiBkMHAgPSBiMCAtIHBwO2AsXHJcbiAgICAgICAgYCAgZmxvYXQgYXAgPSBkZXQoZDBwLCBkMjApLCBicCA9IDIuMCAqIGRldChkMTAsIGQwcCk7YCxcclxuICAgICAgICBgICBmbG9hdCB0ID0gY2xhbXAoKGFwICsgYnApIC8gKDIuMCAqIGEgKyBiICsgZCksIDAuMCwgMS4wKTtgLFxyXG4gICAgICAgIGAgIHJldHVybiBtaXgobWl4KGIwLCBiMSwgdCksIG1peChiMSwgYjIsIHQpLCB0KTtgLFxyXG4gICAgICAgIGB9YFxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgICBgZmxvYXQgZGlzdFRvUXVhZHJhdGljQmV6aWVyQ3VydmUodmVjMiBwLCB2ZWMyIGIwLCB2ZWMyIGIxLCB2ZWMyIGIyKSB7YCxcclxuICAgICAgICBgICByZXR1cm4gbGVuZ3RoKGdldF9kaXN0YW5jZV92ZWN0b3IoYjAgLSBwLCBiMSAtIHAsIGIyIC0gcCkpO2AsXHJcbiAgICAgICAgYH1gXHJcbiAgICBdXHJcbl1cclxuXHJcbmZyYWdtZW50Lm1haW4gPSBbXHJcbiAgICBgdm9pZCBtYWluKHZvaWQpIHtgLFxyXG4gICAgYCAgaWYgKHNoYXBlID09IDAuKSB7YCxcclxuICAgIGAgICAgLy8gbGluZWAsXHJcbiAgICBgICAgIGZyYWdtZW50Q29sb3IgPSB2ZWM0KHN0cm9rZUNvbG9yLnJnYiAqIHN0cm9rZUNvbG9yLmEsIHN0cm9rZUNvbG9yLmEpO2AsXHJcbiAgICBgICB9IGVsc2UgaWYgKHNoYXBlID09IDEuKSB7YCxcclxuICAgIGAgICAgLy8gY3VydmVgLFxyXG4gICAgYCAgICB2ZWMyIHBvcyA9IGdsX0ZyYWdDb29yZC54eSAvIHBpeGVsUmF0aW87YCxcclxuICAgIGAgICAgdmVjMiBjcEFGbGlwcGVkID0gdmVjMihjcEEueCwgdmlld3BvcnQueSAtIGNwQS55KTtgLFxyXG4gICAgYCAgICB2ZWMyIGNwQkZsaXBwZWQgPSB2ZWMyKGNwQi54LCB2aWV3cG9ydC55IC0gY3BCLnkpO2AsXHJcbiAgICBgICAgIHZlYzIgY3BDRmxpcHBlZCA9IHZlYzIoY3BDLngsIHZpZXdwb3J0LnkgLSBjcEMueSk7YCxcclxuICAgIGAgICAgZmxvYXQgZGlzdCA9IGRpc3RUb1F1YWRyYXRpY0JlemllckN1cnZlKHBvcywgY3BBRmxpcHBlZCwgY3BCRmxpcHBlZCwgY3BDRmxpcHBlZCk7YCxcclxuICAgIGAgICAgZmxvYXQgZXBzaWxvbiA9IGZ3aWR0aChkaXN0KTtgLFxyXG4gICAgYCAgICBpZiAoZGlzdCA8IHN0cm9rZVdpZHRoIC8gMi4gKyBlcHNpbG9uKSB7YCxcclxuICAgIGAgICAgICBmbG9hdCBpbkN1cnZlID0gMS4gLSBzbW9vdGhzdGVwKHN0cm9rZVdpZHRoIC8gMi4gLSBlcHNpbG9uLCBzdHJva2VXaWR0aCAvIDIuICsgZXBzaWxvbiwgZGlzdCk7YCxcclxuICAgIGAgICAgICBmcmFnbWVudENvbG9yID0gaW5DdXJ2ZSAqIHZlYzQoc3Ryb2tlQ29sb3IucmdiICogc3Ryb2tlQ29sb3IuYSwgc3Ryb2tlQ29sb3IuYSk7YCxcclxuICAgIGAgICAgfSBlbHNlIHtgLFxyXG4gICAgYCAgICAgIGRpc2NhcmQ7YCxcclxuICAgIGAgICAgfWAsXHJcbiAgICBgICB9YCxcclxuICAgIGB9YFxyXG5dXHJcblxyXG5jb25zdCBpZEZyYWdtZW50ID0gZnJhZ21lbnQuY29weSgpXHJcbmlkRnJhZ21lbnQuaW5wdXRzWydpZCddID0gJ3ZlYzQnXHJcbmlkRnJhZ21lbnQubWFpblszXSA9IGBmcmFnbWVudENvbG9yID0gaWQ7YCAvLyBOT1RFOiBmb3IgaWQgZnJhZ21lbnQsIGNoYW5nZSBjb2xvciB0byBpZC5cclxuaWRGcmFnbWVudC5tYWluWzE0XSA9IGBmcmFnbWVudENvbG9yID0gaWQ7YCAvLyBOT1RFOiBmb3IgaWQgZnJhZ21lbnQsIGNoYW5nZSBjb2xvciB0byBpZC5cclxuXHJcbmV4cG9ydCB7IHZlcnRleCwgaWRWZXJ0ZXgsIGZyYWdtZW50LCBpZEZyYWdtZW50IH1cclxuIiwiaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vdXRpbHMnXHJcblxyXG5jb25zdCB2ZXJ0ZXggPSBuZXcgU2hhZGVyKClcclxudmVydGV4LmlucHV0cyA9IHtcclxuICAgIGluVmVydGV4UG9zOiAndmVjMycsXHJcbiAgICBpbl9zaGFwZTogJ2Zsb2F0JyxcclxuICAgIGluX3Bvc2l0aW9uOiAndmVjMicsXHJcbiAgICBpbl9vZmZzZXQ6ICd2ZWMyJyxcclxuICAgIGluX3NpemU6ICd2ZWMyJywgLy8gd2lkdGggJiBoZWlnaHRcclxuICAgIGluX2lubmVyU2l6ZTogJ3ZlYzInLFxyXG4gICAgaW5fcm90YXRlOiAnZmxvYXQnLFxyXG4gICAgaW5fcjogJ2Zsb2F0JyxcclxuICAgIGluX3ZlcnRleEFscGhhOiAndmVjMicsXHJcbiAgICBpbl92ZXJ0ZXhCZXRhOiAndmVjMicsXHJcbiAgICBpbl92ZXJ0ZXhHYW1tYTogJ3ZlYzInLFxyXG4gICAgaW5fZmlsbDogJ3ZlYzQnLFxyXG4gICAgaW5fc3Ryb2tlV2lkdGg6ICdmbG9hdCcsXHJcbiAgICBpbl9zdHJva2VDb2xvcjogJ3ZlYzQnXHJcbn1cclxudmVydGV4Lm91dHB1dHMgPSB7XHJcbiAgICBwb3NpdGlvbjogJ3ZlYzInLFxyXG4gICAgc2hhcGU6ICdmbG9hdCcsXHJcbiAgICBzaXplOiAndmVjMicsIC8vIHdpZHRoICYgaGVpZ2h0XHJcbiAgICBpbm5lclNpemU6ICd2ZWMyJyxcclxuICAgIHJvdGF0ZTogJ2Zsb2F0JywgLy8gcmVjdFxyXG4gICAgcjogJ2Zsb2F0JywgLy8gY2lyY2xlXHJcbiAgICB2ZXJ0ZXhBbHBoYTogJ3ZlYzInLCAvLyB0cmlhbmdsZVxyXG4gICAgdmVydGV4QmV0YTogJ3ZlYzInLCAvLyB0cmlhbmdsZVxyXG4gICAgdmVydGV4R2FtbWE6ICd2ZWMyJywgLy8gdHJpYW5nbGVcclxuICAgIGZpbGw6ICd2ZWM0JyxcclxuICAgIHN0cm9rZVdpZHRoOiAnZmxvYXQnLFxyXG4gICAgc3Ryb2tlQ29sb3I6ICd2ZWM0J1xyXG59XHJcbnZlcnRleC51bmlmb3JtcyA9IHtcclxuICAgIHByb2plY3Rpb246ICdtYXQzJyxcclxuICAgIHNjYWxlOiAndmVjMicsXHJcbiAgICB0cmFuc2xhdGU6ICd2ZWMyJyxcclxuICAgIHZpZXdwb3J0OiAndmVjMicsXHJcbiAgICBwaXhlbFJhdGlvOiAnZmxvYXQnXHJcbn1cclxudmVydGV4Lm1ldGhvZHMgPSBbXHJcbiAgICBbXHJcbiAgICAgICAgYHZlYzIgY2FsY3VsYXRlX2lubmVyX3BvaW50ICh2ZWMyIHAxLCB2ZWMyIHAyLCB2ZWMyIHAzKSB7YCxcclxuICAgICAgICBgICAgZmxvYXQgaW5uZXJfcDEgPSBzcXJ0KGRvdChwMSwgcDEpKTtgLFxyXG4gICAgICAgIGAgICBmbG9hdCBpbm5lcl9wMiA9IHNxcnQoZG90KHAyLCBwMikpO2AsXHJcbiAgICAgICAgYCAgIGZsb2F0IGlubmVyX3AzID0gc3FydChkb3QocDMsIHAzKSk7YCxcclxuICAgICAgICBgICAgdmVjMiBpbm5lciA9IChwMSAqIGlubmVyX3AxICsgcDIgKiBpbm5lcl9wMiArIHAzICogaW5uZXJfcDMpIC8gKGlubmVyX3AxICsgaW5uZXJfcDIgKyBpbm5lcl9wMyk7YCxcclxuICAgICAgICBgICAgcmV0dXJuIGlubmVyO2AsXHJcbiAgICAgICAgYH1gXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICAgIGBmbG9hdCBjYWxjdWxhdGVfc3Ryb2tlX3NjYWxlICh2ZWMyIHAxLCB2ZWMyIHAyLCB2ZWMyIHAzKSB7YCxcclxuICAgICAgICBgICAgdmVjMiBpbm5lciA9IGNhbGN1bGF0ZV9pbm5lcl9wb2ludChwMSwgcDIsIHAzKTtgLFxyXG4gICAgICAgIGAgICBmbG9hdCBhID0gZGlzdGFuY2UocDEsIGlubmVyKTtgLFxyXG4gICAgICAgIGAgICBmbG9hdCBiID0gZGlzdGFuY2UocDIsIGlubmVyKTtgLFxyXG4gICAgICAgIGAgICBmbG9hdCBjID0gZGlzdGFuY2UocDEsIHAyKTtgLFxyXG4gICAgICAgIGAgICBmbG9hdCBjb3NfYWxwaGEgPSAocG93KGIsIDIuMCkgKyBwb3coYywgMi4wKSAtIHBvdyhhLCAyLjApKSAvICgyLjAgKiBiICogYyk7YCxcclxuICAgICAgICBgICAgZmxvYXQgc2luX2FscGhhID0gc3FydCgxLjAgLSBwb3coY29zX2FscGhhLCAyLjApKTtgLFxyXG4gICAgICAgIGAgICBmbG9hdCBub3JtYWxfbGVuZ3RoID0gc2luX2FscGhhICogYTtgLFxyXG4gICAgICAgIGAgICBmbG9hdCBzdHJva2Vfc2NhbGUgPSAxLjAgKyBzdHJva2VXaWR0aCAvIDIuMCAvIG5vcm1hbF9sZW5ndGg7YCxcclxuICAgICAgICBgICAgcmV0dXJuIHN0cm9rZV9zY2FsZTtgLFxyXG4gICAgICAgIGB9YFxyXG4gICAgXVxyXG5dXHJcbnZlcnRleC5tYWluID0gW1xyXG4gICAgYHZvaWQgbWFpbih2b2lkKSB7YCxcclxuICAgIGAgICByID0gaW5fcjtgLFxyXG4gICAgYCAgIHNpemUgPSBpbl9zaXplO2AsXHJcbiAgICBgICAgZmxvYXQgd2lkdGggPSBzaXplLng7YCxcclxuICAgIGAgICBmbG9hdCBoZWlnaHQgPSBzaXplLnk7YCxcclxuICAgIGAgICBpbm5lclNpemUgPSBpbl9pbm5lclNpemU7YCxcclxuICAgIGAgICBzaGFwZSA9IGluX3NoYXBlO2AsXHJcbiAgICBgICAgZmlsbCA9IGluX2ZpbGw7YCxcclxuICAgIGAgICBzdHJva2VDb2xvciA9IGluX3N0cm9rZUNvbG9yO2AsXHJcbiAgICBgICAgc3Ryb2tlV2lkdGggPSBpbl9zdHJva2VXaWR0aDtgLFxyXG4gICAgYCAgIHJvdGF0ZSA9IGluX3JvdGF0ZTtgLFxyXG4gICAgYCAgIHBvc2l0aW9uID0gc2NhbGUgKiAoaW5fcG9zaXRpb24gKyBpbl9vZmZzZXQpICsgdHJhbnNsYXRlO2AsXHJcbiAgICBgICAgdmVydGV4QWxwaGEgPSBpbl92ZXJ0ZXhBbHBoYTtgLFxyXG4gICAgYCAgIHZlcnRleEJldGEgPSBpbl92ZXJ0ZXhCZXRhO2AsXHJcbiAgICBgICAgdmVydGV4R2FtbWEgPSBpbl92ZXJ0ZXhHYW1tYTtgLFxyXG4gICAgYCAgIG1hdDMgc2NhbGVfbWF0ID0gbWF0MyhgLFxyXG4gICAgYCAgICAgICAxLCAwLCAwLGAsXHJcbiAgICBgICAgICAgIDAsIDEsIDAsYCxcclxuICAgIGAgICAgICAgMCwgMCwgMWAsXHJcbiAgICBgICAgKTtgLFxyXG4gICAgYCAgIG1hdDMgcm90YXRlX21hdCA9IG1hdDMoYCxcclxuICAgIGAgICAgICAgMSwgMCwgMCxgLFxyXG4gICAgYCAgICAgICAwLCAxLCAwLGAsXHJcbiAgICBgICAgICAgIDAsIDAsIDFgLFxyXG4gICAgYCAgICk7YCxcclxuICAgIGAgICBtYXQzIHRyYW5zbGF0ZV9tYXQgPSBtYXQzKGAsXHJcbiAgICBgICAgICAgIDEsIDAsIDAsYCxcclxuICAgIGAgICAgICAgMCwgMSwgMCxgLFxyXG4gICAgYCAgICAgICBwb3NpdGlvbi54LCBwb3NpdGlvbi55LCAxYCxcclxuICAgIGAgICApO2AsXHJcbiAgICBgICAgaWYgKHNoYXBlID09IDAuMCkge2AsIC8vIGNpcmNsZSBzaGFwZVxyXG4gICAgYCAgICAgICBmbG9hdCBzaXplID0gKHIgKyBzdHJva2VXaWR0aCAvIDIuKSAqIDIuICogMS41O2AsIC8vIE5PVEU6IG11bHRpcGx5IDIuIHRvIG1ha2UgcmFkaXVzIHRvIGRpYW1ldGVyOyBtdWx0aXBseSAxLjUgdG8gcHJldmVudCBib3JkZXIgZmFjdG9yXHJcbiAgICBgICAgICAgIHNjYWxlX21hdCA9IG1hdDMoYCxcclxuICAgIGAgICAgICAgICAgIHNpemUsIDAsIDAsYCxcclxuICAgIGAgICAgICAgICAgIDAsIHNpemUsIDAsYCxcclxuICAgIGAgICAgICAgICAgIDAsIDAsIDFgLFxyXG4gICAgYCAgICAgICAgICAgKTtgLFxyXG4gICAgYCAgIH0gZWxzZSBpZiAoc2hhcGUgPT0gMS4wIHx8IHNoYXBlID09IDMuMCkge2AsIC8vIHJlY3Qgc2hhcGVcclxuICAgIGAgICAgICAgc2NhbGVfbWF0ID0gbWF0MyhgLFxyXG4gICAgYCAgICAgICAgICAgd2lkdGggKyBzdHJva2VXaWR0aCwgMCwgMCxgLFxyXG4gICAgYCAgICAgICAgICAgMCwgaGVpZ2h0ICsgc3Ryb2tlV2lkdGgsIDAsYCxcclxuICAgIGAgICAgICAgICAgIDAsIDAsIDFgLFxyXG4gICAgYCAgICAgICApO2AsXHJcbiAgICBgICAgICAgIHJvdGF0ZV9tYXQgPSBtYXQzKGAsXHJcbiAgICBgICAgICAgICAgICBjb3Mocm90YXRlKSwgc2luKHJvdGF0ZSksIDAsYCxcclxuICAgIGAgICAgICAgICAgIC1zaW4ocm90YXRlKSwgY29zKHJvdGF0ZSksIDAsYCxcclxuICAgIGAgICAgICAgICAgIDAsIDAsIDFgLFxyXG4gICAgYCAgICAgICApO2AsXHJcbiAgICBgICAgfSBlbHNlIGlmIChzaGFwZSA9PSAyLjApIHtgLCAvLyB0cmlhbmdsZSBzaGFwZVxyXG4gICAgLy8gY2FsY3VsYXRlIHRoZSBub3JtYWwgb2YgdGhlIGVkZ2U6IGFscGhhID0+IGJldGFcclxuICAgIGAgICAgICAgdmVjMiBpbm5lciA9IGNhbGN1bGF0ZV9pbm5lcl9wb2ludCh2ZXJ0ZXhBbHBoYSwgdmVydGV4QmV0YSwgdmVydGV4R2FtbWEpO2AsXHJcbiAgICBgICAgICAgIGZsb2F0IHN0cm9rZV9zY2FsZSA9IGNhbGN1bGF0ZV9zdHJva2Vfc2NhbGUodmVydGV4QWxwaGEsIHZlcnRleEJldGEsIHZlcnRleEdhbW1hKTtgLFxyXG4gICAgYCAgICAgICB2ZWMyIG91dGVyX3ZlcnRleEFscGhhID0gKHZlcnRleEFscGhhIC0gaW5uZXIpICogc3Ryb2tlX3NjYWxlICsgaW5uZXI7YCwgLy8gY29uc2lkZXIgc3Ryb2tlIGluXHJcbiAgICBgICAgICAgIHZlYzIgb3V0ZXJfdmVydGV4QmV0YSA9ICh2ZXJ0ZXhCZXRhIC0gaW5uZXIpICogc3Ryb2tlX3NjYWxlICsgaW5uZXI7YCwgLy8gY29uc2lkZXIgc3Ryb2tlIGluXHJcbiAgICBgICAgICAgIHZlYzIgb3V0ZXJfdmVydGV4R2FtbWEgPSAodmVydGV4R2FtbWEgLSBpbm5lcikgKiBzdHJva2Vfc2NhbGUgKyBpbm5lcjtgLCAvLyBjb25zaWRlciBzdHJva2UgaW5cclxuICAgIC8vIHRvIGVuc3VyZSB0aGUgZnJhZ21lbnQgY3V0dGluZyBpcyB3aXRoaW4gdGhlIHJlY3RhbmdsZVxyXG4gICAgYCAgICAgICB3aWR0aCA9IDEuNSAqIChtYXgobWF4KG91dGVyX3ZlcnRleEFscGhhLngsIG91dGVyX3ZlcnRleEJldGEueCksIG91dGVyX3ZlcnRleEdhbW1hLngpIC0gbWluKG1pbihvdXRlcl92ZXJ0ZXhBbHBoYS54LCBvdXRlcl92ZXJ0ZXhCZXRhLngpLCBvdXRlcl92ZXJ0ZXhHYW1tYS54KSk7YCxcclxuICAgIGAgICAgICAgaGVpZ2h0ID0gMS41ICogKG1heChtYXgob3V0ZXJfdmVydGV4QWxwaGEueSwgb3V0ZXJfdmVydGV4QmV0YS55KSwgb3V0ZXJfdmVydGV4R2FtbWEueSktIG1pbihtaW4ob3V0ZXJfdmVydGV4QWxwaGEueSwgb3V0ZXJfdmVydGV4QmV0YS55KSwgb3V0ZXJfdmVydGV4R2FtbWEueSkpO2AsXHJcbiAgICBgICAgICAgIHNjYWxlX21hdCA9IG1hdDMoYCxcclxuICAgIGAgICAgICAgICAgIHdpZHRoLCAwLCAwLGAsXHJcbiAgICBgICAgICAgICAgICAwLCBoZWlnaHQsIDAsYCxcclxuICAgIGAgICAgICAgICAgIDAsIDAsIDFgLFxyXG4gICAgYCAgICAgICApO2AsXHJcbiAgICBgICAgfWAsXHJcbiAgICBgICAgbWF0MyB0cmFuc2Zvcm0gPSB0cmFuc2xhdGVfbWF0ICogcm90YXRlX21hdCAqIHNjYWxlX21hdDtgLFxyXG4gICAgYCAgIGdsX1Bvc2l0aW9uID0gdmVjNChwcm9qZWN0aW9uICogdHJhbnNmb3JtICogaW5WZXJ0ZXhQb3MsIDEuKTtgLFxyXG4gICAgYH1gXHJcbl1cclxuXHJcbmNvbnN0IGlkVmVydGV4ID0gdmVydGV4LmNvcHkoKVxyXG5pZFZlcnRleC5pbnB1dHNbJ2luX2lkJ10gPSAndmVjNCdcclxuaWRWZXJ0ZXgub3V0cHV0c1snaWQnXSA9ICd2ZWM0J1xyXG5pZFZlcnRleC5tYWluLnNwbGljZSgxLCAwLCBgaWQgPSBpbl9pZDtgKVxyXG5cclxuY29uc3QgZnJhZ21lbnQgPSBuZXcgU2hhZGVyKClcclxuZnJhZ21lbnQuaW5wdXRzID0geyAuLi52ZXJ0ZXgub3V0cHV0cyB9XHJcbmZyYWdtZW50Lm91dHB1dHMgPSB7XHJcbiAgICBmcmFnbWVudENvbG9yOiAndmVjNCdcclxufVxyXG5mcmFnbWVudC51bmlmb3JtcyA9IHtcclxuICAgIHZpZXdwb3J0OiAndmVjMicsXHJcbiAgICBwaXhlbFJhdGlvOiAnZmxvYXQnXHJcbn1cclxuZnJhZ21lbnQubWV0aG9kcyA9IFtcclxuICAgIFtcclxuICAgICAgICBgdmVjMiBjYWxjdWxhdGVfaW5uZXJfcG9pbnQgKHZlYzIgcDEsIHZlYzIgcDIsIHZlYzIgcDMpIHtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgaW5uZXJfcDEgPSBzcXJ0KGRvdChwMSwgcDEpKTtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgaW5uZXJfcDIgPSBzcXJ0KGRvdChwMiwgcDIpKTtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgaW5uZXJfcDMgPSBzcXJ0KGRvdChwMywgcDMpKTtgLFxyXG4gICAgICAgIGAgICAgdmVjMiBpbm5lciA9IChwMSAqIGlubmVyX3AxICsgcDIgKiBpbm5lcl9wMiArIHAzICogaW5uZXJfcDMpIC8gKGlubmVyX3AxICsgaW5uZXJfcDIgKyBpbm5lcl9wMyk7YCxcclxuICAgICAgICBgICAgIHJldHVybiBpbm5lcjtgLFxyXG4gICAgICAgIGB9YFxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgICBgZmxvYXQgY2FsY3VsYXRlX3N0cm9rZV9zY2FsZSAodmVjMiBwMSwgdmVjMiBwMiwgdmVjMiBwMykge2AsXHJcbiAgICAgICAgYCAgICB2ZWMyIGlubmVyID0gY2FsY3VsYXRlX2lubmVyX3BvaW50KHAxLCBwMiwgcDMpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCBhID0gZGlzdGFuY2UocDEsIGlubmVyKTtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgYiA9IGRpc3RhbmNlKHAyLCBpbm5lcik7YCxcclxuICAgICAgICBgICAgIGZsb2F0IGMgPSBkaXN0YW5jZShwMSwgcDIpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCBjb3NfYWxwaGEgPSAocG93KGIsIDIuMCkgKyBwb3coYywgMi4wKSAtIHBvdyhhLCAyLjApKSAvICgyLjAgKiBiICogYyk7YCxcclxuICAgICAgICBgICAgIGZsb2F0IHNpbl9hbHBoYSA9IHNxcnQoMS4wIC0gcG93KGNvc19hbHBoYSwgMi4wKSk7YCxcclxuICAgICAgICBgICAgIGZsb2F0IG5vcm1hbF9sZW5ndGggPSBzaW5fYWxwaGEgKiBhO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCBzdHJva2Vfc2NhbGUgPSAxLjAgKyBzdHJva2VXaWR0aCAvIDIuMCAvIG5vcm1hbF9sZW5ndGg7YCxcclxuICAgICAgICBgICAgIHJldHVybiBzdHJva2Vfc2NhbGU7YCxcclxuICAgICAgICBgfWBcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICAgYGZsb2F0IHNpZ24gKHZlYzIgcDEsIHZlYzIgcDIsIHZlYzIgcDMpIHtgLFxyXG4gICAgICAgIGAgICAgcmV0dXJuIChwMS54IC0gcDMueCkgKiAocDIueSAtIHAzLnkpIC0gKHAyLnggLSBwMy54KSAqIChwMS55IC0gcDMueSk7YCxcclxuICAgICAgICBgfWBcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICAgYGZsb2F0IGluVHJpYW5nbGUoKSB7YCxcclxuICAgICAgICBgICAgIGZsb2F0IHN0cm9rZV9zY2FsZSA9IGNhbGN1bGF0ZV9zdHJva2Vfc2NhbGUodmVydGV4QWxwaGEsIHZlcnRleEJldGEsIHZlcnRleEdhbW1hKTtgLFxyXG4gICAgICAgIGAgICAgdmVjMiBmbGlwX3BvcyA9IHZlYzIocG9zaXRpb24ueCwgdmlld3BvcnQueSAtIHBvc2l0aW9uLnkpO2AsXHJcbiAgICAgICAgYCAgICB2ZWMyIGZsaXBfdmVydGV4QWxwaGEgPSB2ZWMyKHZlcnRleEFscGhhLngsIC0gdmVydGV4QWxwaGEueSkgLyBzdHJva2Vfc2NhbGU7YCxcclxuICAgICAgICBgICAgIHZlYzIgZmxpcF92ZXJ0ZXhCZXRhID0gdmVjMih2ZXJ0ZXhCZXRhLngsIC0gdmVydGV4QmV0YS55KSAvIHN0cm9rZV9zY2FsZTtgLFxyXG4gICAgICAgIGAgICAgdmVjMiBmbGlwX3ZlcnRleEdhbW1hID0gdmVjMih2ZXJ0ZXhHYW1tYS54LCAtIHZlcnRleEdhbW1hLnkpIC8gc3Ryb2tlX3NjYWxlO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCBkMSA9IHNpZ24oZ2xfRnJhZ0Nvb3JkLnh5IC8gcGl4ZWxSYXRpbyAtIGZsaXBfcG9zLCBmbGlwX3ZlcnRleEFscGhhLCBmbGlwX3ZlcnRleEJldGEpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCBkMiA9IHNpZ24oZ2xfRnJhZ0Nvb3JkLnh5IC8gcGl4ZWxSYXRpbyAtIGZsaXBfcG9zLCBmbGlwX3ZlcnRleEJldGEsIGZsaXBfdmVydGV4R2FtbWEpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCBkMyA9IHNpZ24oZ2xfRnJhZ0Nvb3JkLnh5IC8gcGl4ZWxSYXRpbyAtIGZsaXBfcG9zLCBmbGlwX3ZlcnRleEdhbW1hLCBmbGlwX3ZlcnRleEFscGhhKTtgLFxyXG4gICAgICAgIGAgICAgYm9vbCBoYXNfbmVnID0gKGQxIDw9IDAuMCkgfHwgKGQyIDw9IDAuMCkgfHwgKGQzIDw9IDAuMCk7YCxcclxuICAgICAgICBgICAgIGJvb2wgaGFzX3BvcyA9IChkMSA+PSAwLjApIHx8IChkMiA+PSAwLjApIHx8IChkMyA+PSAwLjApO2AsXHJcbiAgICAgICAgYCAgICBpZiAoIShoYXNfbmVnICYmIGhhc19wb3MpKSB7YCxcclxuICAgICAgICBgICAgICAgICByZXR1cm4gMS4wO2AsXHJcbiAgICAgICAgYCAgICB9IGVsc2Uge2AsXHJcbiAgICAgICAgYCAgICAgICAgcmV0dXJuIDAuMDtgLFxyXG4gICAgICAgIGAgICAgfWAsXHJcbiAgICAgICAgYH1gXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICAgIGBmbG9hdCBpblRyaWFuZ2xlQm9yZGVyKCkge2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCBzdHJva2Vfc2NhbGUgPSBjYWxjdWxhdGVfc3Ryb2tlX3NjYWxlKHZlcnRleEFscGhhLCB2ZXJ0ZXhCZXRhLCB2ZXJ0ZXhHYW1tYSk7YCxcclxuICAgICAgICBgICAgIHZlYzIgZmxpcF9wb3MgPSB2ZWMyKHBvc2l0aW9uLngsIHZpZXdwb3J0LnkgLSBwb3NpdGlvbi55KTtgLFxyXG4gICAgICAgIGAgICAgdmVjMiBmbGlwX3ZlcnRleEFscGhhID0gc3Ryb2tlX3NjYWxlICogdmVjMih2ZXJ0ZXhBbHBoYS54LCAtIHZlcnRleEFscGhhLnkpO2AsXHJcbiAgICAgICAgYCAgICB2ZWMyIGZsaXBfdmVydGV4QmV0YSA9IHN0cm9rZV9zY2FsZSAqIHZlYzIodmVydGV4QmV0YS54LCAtIHZlcnRleEJldGEueSk7YCxcclxuICAgICAgICBgICAgIHZlYzIgZmxpcF92ZXJ0ZXhHYW1tYSA9IHN0cm9rZV9zY2FsZSAqIHZlYzIodmVydGV4R2FtbWEueCwgLSB2ZXJ0ZXhHYW1tYS55KTtgLFxyXG4gICAgICAgIGBgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgZDEgPSBzaWduKGdsX0ZyYWdDb29yZC54eSAvIHBpeGVsUmF0aW8gLSBmbGlwX3BvcywgZmxpcF92ZXJ0ZXhBbHBoYSwgZmxpcF92ZXJ0ZXhCZXRhKTtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgZDIgPSBzaWduKGdsX0ZyYWdDb29yZC54eSAvIHBpeGVsUmF0aW8gLSBmbGlwX3BvcywgZmxpcF92ZXJ0ZXhCZXRhLCBmbGlwX3ZlcnRleEdhbW1hKTtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgZDMgPSBzaWduKGdsX0ZyYWdDb29yZC54eSAvIHBpeGVsUmF0aW8gLSBmbGlwX3BvcywgZmxpcF92ZXJ0ZXhHYW1tYSwgZmxpcF92ZXJ0ZXhBbHBoYSk7YCxcclxuICAgICAgICBgYCxcclxuICAgICAgICBgICAgIGJvb2wgaGFzX25lZyA9IChkMSA8PSAwLjApIHx8IChkMiA8PSAwLjApIHx8IChkMyA8PSAwLjApO2AsXHJcbiAgICAgICAgYCAgICBib29sIGhhc19wb3MgPSAoZDEgPj0gMC4wKSB8fCAoZDIgPj0gMC4wKSB8fCAoZDMgPj0gMC4wKTtgLFxyXG4gICAgICAgIGBgLFxyXG4gICAgICAgIGAgICAgYm9vbCBpblRyaWFuZ2xlID0gaW5UcmlhbmdsZSgpID09IDEuMDtgLFxyXG4gICAgICAgIGAgICAgYm9vbCBpblRyaWFuZ2xlQm9yZGVyID0gIShoYXNfbmVnICYmIGhhc19wb3MpO2AsXHJcbiAgICAgICAgYGAsXHJcbiAgICAgICAgYCAgICBpZiAoIWluVHJpYW5nbGUgJiYgaW5UcmlhbmdsZUJvcmRlcikge2AsXHJcbiAgICAgICAgYCAgICAgICAgcmV0dXJuIDEuMDtgLFxyXG4gICAgICAgIGAgICAgfSBlbHNlIHtgLFxyXG4gICAgICAgIGAgICAgICAgIHJldHVybiAwLjA7YCxcclxuICAgICAgICBgICAgIH1gLFxyXG4gICAgICAgIGB9YFxyXG4gICAgXSxcclxuXHJcbiAgICBbXHJcbiAgICAgICAgYGZsb2F0IGluUmVjdCgpIHtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgd2lkdGggPSBzaXplLng7YCxcclxuICAgICAgICBgICAgIGZsb2F0IGhlaWdodCA9IHNpemUueTtgLFxyXG4gICAgICAgIGAgICAgdmVjMiBmbGlwX3BvcyA9IHBvc2l0aW9uO2AsXHJcbiAgICAgICAgYCAgICBmbGlwX3Bvcy55ID0gdmlld3BvcnQueSAtIHBvc2l0aW9uLnk7YCxcclxuICAgICAgICBgICAgIG1hdDIgcm90YXRlX21hdCA9IG1hdDIoYCxcclxuICAgICAgICBgICAgICAgICBjb3Mocm90YXRlKSwgc2luKHJvdGF0ZSksYCxcclxuICAgICAgICBgICAgICAgICAtc2luKHJvdGF0ZSksIGNvcyhyb3RhdGUpYCxcclxuICAgICAgICBgICAgICk7YCxcclxuICAgICAgICBgICAgIHZlYzIgcm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkID0gcm90YXRlX21hdCAqIChnbF9GcmFnQ29vcmQueHkgLyBwaXhlbFJhdGlvIC0gZmxpcF9wb3MpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCB4X2luID0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueCwgd2lkdGggLyAyLjAgLSBzdHJva2VXaWR0aCAvIDIuMCkgKiAoMS4wIC0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueCwgLSB3aWR0aCAvIDIuMCArIHN0cm9rZVdpZHRoIC8gMi4wKSk7YCxcclxuICAgICAgICBgICAgIGZsb2F0IHlfaW4gPSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC55LCBoZWlnaHQgLyAyLjAgLSBzdHJva2VXaWR0aCAvIDIuMCkgKiAoMS4wIC0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueSwgLSBoZWlnaHQgLyAyLjAgKyBzdHJva2VXaWR0aCAvIDIuMCkpO2AsXHJcbiAgICAgICAgYCAgICByZXR1cm4geF9pbiAqIHlfaW47YCxcclxuICAgICAgICBgfWBcclxuICAgIF0sXHJcblxyXG4gICAgW1xyXG4gICAgICAgIGBmbG9hdCBpblJlY3RCb3JkZXIoKSB7YCxcclxuICAgICAgICBgICAgIGZsb2F0IHdpZHRoID0gc2l6ZS54O2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCBoZWlnaHQgPSBzaXplLnk7YCxcclxuICAgICAgICBgICAgIHZlYzIgZmxpcF9wb3MgPSBwb3NpdGlvbjtgLFxyXG4gICAgICAgIGAgICAgZmxpcF9wb3MueSA9IHZpZXdwb3J0LnkgLSBwb3NpdGlvbi55O2AsXHJcbiAgICAgICAgYCAgICBtYXQyIHJvdGF0ZV9tYXQgPSBtYXQyKGAsXHJcbiAgICAgICAgYCAgICAgICAgY29zKHJvdGF0ZSksIHNpbihyb3RhdGUpLGAsXHJcbiAgICAgICAgYCAgICAgICAgLXNpbihyb3RhdGUpLCBjb3Mocm90YXRlKWAsXHJcbiAgICAgICAgYCAgICApO2AsXHJcbiAgICAgICAgYCAgICB2ZWMyIHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZCA9IHJvdGF0ZV9tYXQgKiAoZ2xfRnJhZ0Nvb3JkLnh5IC8gcGl4ZWxSYXRpbyAtIGZsaXBfcG9zKTtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgeF9pbl9vdXRlciA9IHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLngsIHdpZHRoIC8gMi4wICsgc3Ryb2tlV2lkdGggLyAyLjApICogKDEuMCAtIHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLngsIC0gd2lkdGggLyAyLjAgLSBzdHJva2VXaWR0aCAvIDIuMCkpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCB5X2luX291dGVyID0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueSwgaGVpZ2h0IC8gMi4wICsgc3Ryb2tlV2lkdGggLyAyLjApICogKDEuMCAtIHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLnksIC0gaGVpZ2h0IC8gMi4wIC0gc3Ryb2tlV2lkdGggLyAyLjApKTtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgeF9pbl9pbm5lciA9IHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLngsIHdpZHRoIC8gMi4wIC0gc3Ryb2tlV2lkdGggLyAyLjApICogKDEuMCAtIHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLngsIC0gd2lkdGggLyAyLjAgKyBzdHJva2VXaWR0aCAvIDIuMCkpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCB5X2luX2lubmVyID0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueSwgaGVpZ2h0IC8gMi4wIC0gc3Ryb2tlV2lkdGggLyAyLjApICogKDEuMCAtIHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLnksIC0gaGVpZ2h0IC8gMi4wICsgc3Ryb2tlV2lkdGggLyAyLjApKTtgLFxyXG4gICAgICAgIGBgLFxyXG4gICAgICAgIGAgICAgcmV0dXJuIHhfaW5fb3V0ZXIgKiB5X2luX291dGVyICogKDEuMCAtIHhfaW5faW5uZXIgKiB5X2luX2lubmVyKTtgLFxyXG4gICAgICAgIGB9YFxyXG4gICAgXSxcclxuXHJcbiAgICBbXHJcbiAgICAgICAgYGZsb2F0IGluQ3Jvc3MoKSB7YCxcclxuICAgICAgICBgICAgIHZlYzIgZmxpcF9wb3MgPSBwb3NpdGlvbjtgLFxyXG4gICAgICAgIGAgICAgZmxpcF9wb3MueSA9IHZpZXdwb3J0LnkgLSBwb3NpdGlvbi55O2AsXHJcbiAgICAgICAgYCAgICBtYXQyIHJvdGF0ZV9tYXQgPSBtYXQyKGAsXHJcbiAgICAgICAgYCAgICAgICAgY29zKHJvdGF0ZSksIHNpbihyb3RhdGUpLGAsXHJcbiAgICAgICAgYCAgICAgICAgLXNpbihyb3RhdGUpLCBjb3Mocm90YXRlKWAsXHJcbiAgICAgICAgYCAgICApO2AsXHJcbiAgICAgICAgYCAgICB2ZWMyIHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZCA9IHJvdGF0ZV9tYXQgKiAoZ2xfRnJhZ0Nvb3JkLnh5IC8gcGl4ZWxSYXRpbyAtIGZsaXBfcG9zKTtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgaW5uZXJXaWR0aCA9IGlubmVyU2l6ZS54O2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCBpbm5lckhlaWdodCA9IGlubmVyU2l6ZS55O2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCB3aWR0aCA9IHNpemUueDtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgaGVpZ2h0ID0gc2l6ZS55O2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCB4X2luMSA9IHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLngsIHdpZHRoIC8gMi4wIC0gc3Ryb2tlV2lkdGggLyAyLjApICogKDEuMCAtIHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLngsIC0gd2lkdGggLyAyLjAgKyBzdHJva2VXaWR0aCAvIDIuMCkpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCB5X2luMSA9IHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLnksIGlubmVySGVpZ2h0IC8gMi4wIC0gc3Ryb2tlV2lkdGggLyAyLjApICogKDEuMCAtIHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLnksIC0gaW5uZXJIZWlnaHQgLyAyLjAgKyBzdHJva2VXaWR0aCAvIDIuMCkpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCB4X2luMiA9IHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLngsIGlubmVyV2lkdGggLyAyLjAgLSBzdHJva2VXaWR0aCAvIDIuMCkgKiAoMS4wIC0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueCwgLSBpbm5lcldpZHRoIC8gMi4wICsgc3Ryb2tlV2lkdGggLyAyLjApKTtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgeV9pbjIgPSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC55LCBoZWlnaHQgLyAyLjAgLSBzdHJva2VXaWR0aCAvIDIuMCkgKiAoMS4wIC0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueSwgLSBoZWlnaHQgLyAyLjAgKyBzdHJva2VXaWR0aCAvIDIuMCkpO2AsXHJcbiAgICAgICAgYCAgICByZXR1cm4gbWluKDEuLCB4X2luMSAqIHlfaW4xICsgeF9pbjIgKiB5X2luMik7YCxcclxuICAgICAgICBgfWBcclxuICAgIF0sXHJcblxyXG4gICAgW1xyXG4gICAgICAgIGBmbG9hdCBpbkNyb3NzQm9yZGVyKCkge2AsXHJcbiAgICAgICAgYCAgICB2ZWMyIGZsaXBfcG9zID0gcG9zaXRpb247YCxcclxuICAgICAgICBgICAgIGZsaXBfcG9zLnkgPSB2aWV3cG9ydC55IC0gcG9zaXRpb24ueTtgLFxyXG4gICAgICAgIGAgICAgbWF0MiByb3RhdGVfbWF0ID0gbWF0MihgLFxyXG4gICAgICAgIGAgICAgICAgIGNvcyhyb3RhdGUpLCBzaW4ocm90YXRlKSxgLFxyXG4gICAgICAgIGAgICAgICAgIC1zaW4ocm90YXRlKSwgY29zKHJvdGF0ZSlgLFxyXG4gICAgICAgIGAgICAgKTtgLFxyXG4gICAgICAgIGAgICAgdmVjMiByb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQgPSByb3RhdGVfbWF0ICogKGdsX0ZyYWdDb29yZC54eSAvIHBpeGVsUmF0aW8gLSBmbGlwX3Bvcyk7YCxcclxuICAgICAgICBgICAgIGZsb2F0IGlubmVyV2lkdGggPSBpbm5lclNpemUueDtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgaW5uZXJIZWlnaHQgPSBpbm5lclNpemUueTtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgd2lkdGggPSBzaXplLng7YCxcclxuICAgICAgICBgICAgIGZsb2F0IGhlaWdodCA9IHNpemUueTtgLFxyXG4gICAgICAgIC8vIFRPRE86IG5lZWQgcmVmYWN0b3JcclxuICAgICAgICBgICAgIGZsb2F0IHhfaW4xID0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueCwgd2lkdGggLyAyLjAgLSBzdHJva2VXaWR0aCAvIDIuMCkgKiAoMS4wIC0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueCwgLSB3aWR0aCAvIDIuMCArIHN0cm9rZVdpZHRoIC8gMi4wKSk7YCxcclxuICAgICAgICBgICAgIGZsb2F0IHlfaW4xID0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueSwgaW5uZXJIZWlnaHQgLyAyLjAgLSBzdHJva2VXaWR0aCAvIDIuMCkgKiAoMS4wIC0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueSwgLSBpbm5lckhlaWdodCAvIDIuMCArIHN0cm9rZVdpZHRoIC8gMi4wKSk7YCxcclxuICAgICAgICBgICAgIGZsb2F0IHhfaW4yID0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueCwgaW5uZXJXaWR0aCAvIDIuMCAtIHN0cm9rZVdpZHRoIC8gMi4wKSAqICgxLjAgLSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC54LCAtIGlubmVyV2lkdGggLyAyLjAgKyBzdHJva2VXaWR0aCAvIDIuMCkpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCB5X2luMiA9IHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLnksIGhlaWdodCAvIDIuMCAtIHN0cm9rZVdpZHRoIC8gMi4wKSAqICgxLjAgLSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC55LCAtIGhlaWdodCAvIDIuMCArIHN0cm9rZVdpZHRoIC8gMi4wKSk7YCxcclxuICAgICAgICBgICAgIGZsb2F0IG91dENyb3NzID0gMS4gLSBtaW4oMS4sIHhfaW4xICogeV9pbjEgKyB4X2luMiAqIHlfaW4yKTtgLFxyXG4gICAgICAgIGBgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgeF9vdXQxID0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueCwgd2lkdGggLyAyLjAgKyBzdHJva2VXaWR0aCAvIDIuMCkgKiAoMS4wIC0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueCwgLSB3aWR0aCAvIDIuMCAtIHN0cm9rZVdpZHRoIC8gMi4wKSk7YCxcclxuICAgICAgICBgICAgIGZsb2F0IHlfb3V0MSA9IHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLnksIGlubmVySGVpZ2h0IC8gMi4wICsgc3Ryb2tlV2lkdGggLyAyLjApICogKDEuMCAtIHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLnksIC0gaW5uZXJIZWlnaHQgLyAyLjAgLSBzdHJva2VXaWR0aCAvIDIuMCkpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCB4X291dDIgPSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC54LCBpbm5lcldpZHRoIC8gMi4wICsgc3Ryb2tlV2lkdGggLyAyLjApICogKDEuMCAtIHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLngsIC0gaW5uZXJXaWR0aCAvIDIuMCAtIHN0cm9rZVdpZHRoIC8gMi4wKSk7YCxcclxuICAgICAgICBgICAgIGZsb2F0IHlfb3V0MiA9IHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLnksIGhlaWdodCAvIDIuMCArIHN0cm9rZVdpZHRoIC8gMi4wKSAqICgxLjAgLSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC55LCAtIGhlaWdodCAvIDIuMCAtIHN0cm9rZVdpZHRoIC8gMi4wKSk7YCxcclxuICAgICAgICBgICAgIGZsb2F0IGluQ3Jvc3NCb3JkZXIgPSBtaW4oMS4sIHhfb3V0MSAqIHlfb3V0MSArIHhfb3V0MiAqIHlfb3V0Mik7YCxcclxuICAgICAgICBgICAgIHJldHVybiBpbkNyb3NzQm9yZGVyICogb3V0Q3Jvc3M7YCxcclxuICAgICAgICBgfWBcclxuICAgIF0sXHJcblxyXG4gICAgW1xyXG4gICAgICAgIGBmbG9hdCBpbkNpcmNsZSgpIHtgLFxyXG4gICAgICAgIGAgICAgdmVjMiBmbGlwX3BvcyA9IHBvc2l0aW9uO2AsXHJcbiAgICAgICAgYCAgICBmbGlwX3Bvcy55ID0gdmlld3BvcnQueSAtIHBvc2l0aW9uLnk7YCxcclxuICAgICAgICBgICAgIGZsb2F0IGRpc3QgPSBkaXN0YW5jZShnbF9GcmFnQ29vcmQueHkgLyBwaXhlbFJhdGlvLCBmbGlwX3Bvcyk7YCxcclxuICAgICAgICBgICAgIHJldHVybiAxLiAtIHNtb290aHN0ZXAoKHIgLSBzdHJva2VXaWR0aCAvIDIuKSAtIDIuICogZndpZHRoKGRpc3QpLCAociAtIHN0cm9rZVdpZHRoIC8gMi4pLCBkaXN0KTtgLFxyXG4gICAgICAgIGB9YFxyXG4gICAgXSxcclxuXHJcbiAgICBbXHJcbiAgICAgICAgYGZsb2F0IGluQ2lyY2xlQm9yZGVyKCkge2AsXHJcbiAgICAgICAgYCAgICBpZiAoc3Ryb2tlV2lkdGggPT0gMC4pIHtgLFxyXG4gICAgICAgIGAgICAgICByZXR1cm4gMC47YCxcclxuICAgICAgICBgICAgIH1gLFxyXG4gICAgICAgIGAgICAgdmVjMiBmbGlwX3BvcyA9IHBvc2l0aW9uO2AsXHJcbiAgICAgICAgYCAgICBmbGlwX3Bvcy55ID0gdmlld3BvcnQueSAtIHBvc2l0aW9uLnk7YCxcclxuICAgICAgICBgYCxcclxuICAgICAgICBgICAgIGZsb2F0IGRpc3QgPSBkaXN0YW5jZShnbF9GcmFnQ29vcmQueHkgLyBwaXhlbFJhdGlvLCBmbGlwX3Bvcyk7YCxcclxuICAgICAgICBgICAgIGZsb2F0IGRyYXdPdXRlciA9IDEuIC0gc21vb3Roc3RlcCgociArIHN0cm9rZVdpZHRoIC8gMi4pIC0gZndpZHRoKGRpc3QpLCAociArIHN0cm9rZVdpZHRoIC8gMi4pLCBkaXN0KTtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgZHJhd0lubmVyID0gMS4gLSBzbW9vdGhzdGVwKChyIC0gc3Ryb2tlV2lkdGggLyAyLikgLSBmd2lkdGgoZGlzdCksIChyIC0gc3Ryb2tlV2lkdGggLyAyLiksIGRpc3QpO2AsXHJcbiAgICAgICAgYCAgICByZXR1cm4gZHJhd091dGVyICogKDEuIC0gZHJhd0lubmVyKTtgLFxyXG4gICAgICAgIGB9YFxyXG4gICAgXVxyXG5dXHJcbmZyYWdtZW50Lm1haW4gPSBbXHJcbiAgICBgdm9pZCBtYWluKHZvaWQpIHtgLFxyXG4gICAgYCAgICBpZiAoc2hhcGUgPT0gMC4wKSB7YCxcclxuICAgIGAgICAgICAgIC8vIGNpcmNsZSBzaGFwZWAsXHJcbiAgICBgICAgICAgICAvLyBib3JkZXIgY2hlY2ssIHVzaW5nIDAuNShjZW50ZXIgb2Ygc21vb3Roc3RlcClgLFxyXG4gICAgYCAgICAgICAgaWYgKGluQ2lyY2xlKCkgPCAwLjAwMDEgJiYgKHN0cm9rZVdpZHRoIDwgMC44IHx8IGluQ2lyY2xlQm9yZGVyKCkgPCAwLjUpKSB7YCxcclxuICAgIGAgICAgICAgICAgICBkaXNjYXJkO2AsXHJcbiAgICBgICAgICAgICB9YCxcclxuICAgIGAgICAgICAgIGZyYWdtZW50Q29sb3IgPSBpbkNpcmNsZUJvcmRlcigpICogdmVjNChzdHJva2VDb2xvci5yZ2IgKiBzdHJva2VDb2xvci5hLCBzdHJva2VDb2xvci5hKSArIGluQ2lyY2xlKCkgKiB2ZWM0KGZpbGwucmdiICogZmlsbC5hLCBmaWxsLmEpO2AsXHJcbiAgICBgICAgIH0gZWxzZSBpZiAoc2hhcGUgPT0gMS4wKSB7YCxcclxuICAgIGAgICAgICAgIC8vIHJlY3Qgc2hhcGVgLFxyXG4gICAgYCAgICAgICAgZnJhZ21lbnRDb2xvciA9IGluUmVjdEJvcmRlcigpICogdmVjNChzdHJva2VDb2xvci5yZ2IgKiBzdHJva2VDb2xvci5hLCBzdHJva2VDb2xvci5hKSArIGluUmVjdCgpICogdmVjNChmaWxsLnJnYiAqIGZpbGwuYSwgZmlsbC5hKTtgLFxyXG4gICAgYCAgICB9IGVsc2UgaWYgKHNoYXBlID09IDIuMCkge2AsXHJcbiAgICBgICAgICAgICAvLyB0cmlhbmdsZSBzaGFwZWAsXHJcbiAgICBgICAgICAgICBmcmFnbWVudENvbG9yID0gaW5UcmlhbmdsZUJvcmRlcigpICogdmVjNChzdHJva2VDb2xvci5yZ2IgKiBzdHJva2VDb2xvci5hLCBzdHJva2VDb2xvci5hKSArIGluVHJpYW5nbGUoKSAqIHZlYzQoZmlsbC5yZ2IgKiBmaWxsLmEsIGZpbGwuYSk7YCxcclxuICAgIGAgICAgfSBlbHNlIGlmIChzaGFwZSA9PSAzLjApIHtgLFxyXG4gICAgYCAgICAgICAgLy8gY3Jvc3Mgc2hhcGVgLFxyXG4gICAgYCAgICAgICAgZnJhZ21lbnRDb2xvciA9IGluQ3Jvc3NCb3JkZXIoKSAqIHZlYzQoc3Ryb2tlQ29sb3IucmdiICogc3Ryb2tlQ29sb3IuYSwgc3Ryb2tlQ29sb3IuYSkgKyBpbkNyb3NzKCkgKiB2ZWM0KGZpbGwucmdiICogZmlsbC5hLCBmaWxsLmEpO2AsXHJcbiAgICBgICAgIH1gLFxyXG4gICAgYH1gXHJcbl1cclxuXHJcbmNvbnN0IGlkRnJhZ21lbnQgPSBmcmFnbWVudC5jb3B5KClcclxuaWRGcmFnbWVudC5pbnB1dHNbJ2lkJ10gPSAndmVjNCdcclxuLy8gZGVsZXRlIG9sZCBmcmFnbWVudENvbG9yXHJcbmlkRnJhZ21lbnQubWFpbi5zcGxpY2UoNywgMSlcclxuaWRGcmFnbWVudC5tYWluLnNwbGljZSg5LCAxKVxyXG5pZEZyYWdtZW50Lm1haW4uc3BsaWNlKDExLCAxKVxyXG5pZEZyYWdtZW50Lm1haW4uc3BsaWNlKDEzLCAxKVxyXG4vLyBhZGQgbmV3IGZyYWdtZW50Q29sb3JcclxuaWRGcmFnbWVudC5tYWluLnNwbGljZSgtMSwgMCwgYGZyYWdtZW50Q29sb3IgPSBpZDtgKVxyXG5cclxuZXhwb3J0IHsgdmVydGV4LCBpZFZlcnRleCwgZnJhZ21lbnQsIGlkRnJhZ21lbnQgfVxyXG4iLCIvKipcclxuICogQGF1dGhvciBYaWFvZG9uZyBaaGFvIDx6aGFveGlhb2RvbmdAemp1LmVkdS5jbj5cclxuICogQGRlc2NyaXB0aW9uIHV0aWxpdHkgZnVuY3Rpb25zIGZvciByZW5kZXJlclxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnLi4vaW50ZXJmYWNlcydcclxuaW1wb3J0IHsgVmFyaWFibGUsIFJlbmRlckF0dHJpYnV0ZSB9IGZyb20gJy4vaW50ZXJmYWNlcydcclxuXHJcbi8qKlxyXG4gKiBjb21waWxlIHdlYmdsIHNoYWRlclxyXG4gKiBAcGFyYW0gZ2wgV2ViR0wgaW5zdGFuY2VcclxuICogQHBhcmFtIHNoYWRlclN0ciBzaGFkZXIgZmlsZSBpbiBzdHJpbmdcclxuICogQHBhcmFtIHNoYWRlclR5cGUgdmVydGV4IG9yIGZyYWdtZW50IHNoYWRlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVTaGFkZXIoXHJcbiAgICBnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dCxcclxuICAgIHNoYWRlclN0cjogc3RyaW5nLFxyXG4gICAgc2hhZGVyVHlwZTogbnVtYmVyXHJcbik6IFdlYkdMU2hhZGVyIHtcclxuICAgIGNvbnN0IHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcihzaGFkZXJUeXBlKVxyXG4gICAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc2hhZGVyU3RyKVxyXG4gICAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpXHJcbiAgICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU2hhZGVyIGNvbXBpbGUgZmFpbGVkOiAnICsgZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzaGFkZXJcclxufVxyXG5cclxuLyoqXHJcbiAqIGdlbmVyYXRlIFdlYkdMIHByb2dyYW1cclxuICogQHBhcmFtIGdsIFdlYkdMIGluc3RhbmNlXHJcbiAqIEBwYXJhbSB2ZXJ0U2hhZGVyU3RyIHZlcnRleCBzaGFkZXIgaW4gc3RyaW5nIGZvcm1hdFxyXG4gKiBAcGFyYW0gZnJhZ1NoYWRlclN0ciBmcmFnbWVudCBzaGFkZXIgaW4gc3RyaW5nIGZvcm1hdFxyXG4gKiBAcGFyYW0gYXR0cmlidXRlcyBhdHRyaWJ1dGVzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbShcclxuICAgIGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0LFxyXG4gICAgdmVydFNoYWRlclN0cjogc3RyaW5nLFxyXG4gICAgZnJhZ1NoYWRlclN0cjogc3RyaW5nLFxyXG4gICAgYXR0cmlidXRlczogTWFwPHN0cmluZywgUmVuZGVyQXR0cmlidXRlPlxyXG4pOiBXZWJHTFByb2dyYW0ge1xyXG4gICAgY29uc3QgdmVydFNoYWRlciA9IGNvbXBpbGVTaGFkZXIoZ2wsIHZlcnRTaGFkZXJTdHIsIGdsLlZFUlRFWF9TSEFERVIpXHJcbiAgICBjb25zdCBmcmFnU2hhZGVyID0gY29tcGlsZVNoYWRlcihnbCwgZnJhZ1NoYWRlclN0ciwgZ2wuRlJBR01FTlRfU0hBREVSKVxyXG5cclxuICAgIGNvbnN0IHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKClcclxuXHJcbiAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIpID0+IHtcclxuICAgICAgICBnbC5iaW5kQXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgYXR0ci5sb2NhdGlvbiwgYXR0ci5uYW1lKVxyXG4gICAgfSlcclxuXHJcbiAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydFNoYWRlcilcclxuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnU2hhZGVyKVxyXG5cclxuICAgIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pXHJcbiAgICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgbGluayBzaGFkZXJzOiAke2dsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pfWApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByb2dyYW1cclxufVxyXG5cclxuLyoqXHJcbiAqIGNyZWF0ZSBXZWJHTCBhcnJheSBidWZmZXIgZ2l2ZW4gZGF0YSBhcnJheVxyXG4gKiBAcGFyYW0gZ2wgV2ViR0wgY29udGV4dFxyXG4gKiBAcGFyYW0gZGF0YSBkYXRhIHRvIHN0b3JlIGluIGJ1ZmZlclxyXG4gKiBAcmV0dXJucyBXZWJHTCBidWZmZXIgc3RvcmUgZ2l2ZW4gZGF0YVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFycmF5QnVmZmVyKGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0LCBkYXRhOiBGbG9hdDMyQXJyYXkpOiBXZWJHTEJ1ZmZlciB7XHJcbiAgICBjb25zdCBidWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKVxyXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlcilcclxuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBkYXRhLCBnbC5EWU5BTUlDX0RSQVcpXHJcbiAgICByZXR1cm4gYnVmZmVyXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBleHRyYWN0IGF0dHJpYnV0ZXMgZnJvbSBhIHNoYWRlciBzcmluZ1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gc2hhZGVyU3RyXHJcbiAqIEByZXR1cm5zIHtSZW5kZXJBdHRyaWJ1dGVbXX0gYXR0cmlidXRlcyBhcnJheVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RBdHRyaWJ1dGVzRnJvbVNoYWRlcihzaGFkZXJTdHI6IHN0cmluZyk6IE1hcDxzdHJpbmcsIFJlbmRlckF0dHJpYnV0ZT4ge1xyXG4gICAgY29uc3QgbWF0Y2hpbmdzID0gc2hhZGVyU3RyLm1hdGNoKC9pblxccy4qOy9nKVxyXG4gICAgY29uc3QgYXR0cmlidXRlc01hcCA9IG5ldyBNYXAoKVxyXG4gICAgbWF0Y2hpbmdzLmZvckVhY2goKG1hdGNoLCBsb2NhdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBtYXRjaC5zcGxpdCgnICcpWzJdLnNsaWNlKDAsIC0xKVxyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBtYXRjaC5zcGxpdCgnICcpWzFdXHJcbiAgICAgICAgbGV0IHNpemUgPSAxXHJcbiAgICAgICAgaWYgKHR5cGUuc2xpY2UoMCwgMykgPT09ICd2ZWMnKSB7XHJcbiAgICAgICAgICAgIHNpemUgPSBOdW1iZXIodHlwZS5zbGljZSgtMSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpc0J1aWxkSW4gPSBmYWxzZVxyXG4gICAgICAgIGlmIChuYW1lID09PSAnaW5WZXJ0ZXhQb3MnKSB7XHJcbiAgICAgICAgICAgIC8vIGFuIGluc3RhbmNlIGlzIGZvcm1lZCBieSB0d28gdHJpYW5nbGVzLFxyXG4gICAgICAgICAgICAvLyB0aHVzIHdlIG5lZWQgZm91ciBwb2ludCBwb3NpdGlvbnMgdG8gaW5pdGlhbCB0aGUgaW5zdGFuY2VcclxuICAgICAgICAgICAgLy8gbW9yZSBkZXRhaWxzOiBodHRwczovL3BhbmppYWNoZW5nLnNpdGUvd2lraS8yMDE5LzA2LzA2L3dlYkdML1dlYkdMLUJhdGNoRHJhdyVFNCVCQiVBMyVFNyVBMCU4MSVFOSU5OCU4NSVFOCVBRiVCQislRTclOTAlODYlRTglQTclQTMvXHJcbiAgICAgICAgICAgIGlzQnVpbGRJbiA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgYXR0cmlidXRlc01hcC5zZXQobmFtZSwge1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBzaXplLCAvLyB0aGUgc3BhY2Ugb2Ygb25lIGF0dHJpYnV0ZSwgZS5nLiB2ZWMzIG9jdXBwaWVzIDMgdW5pdHMgb2Ygc3BhY2VcclxuICAgICAgICAgICAgbG9jYXRpb24sIC8vIHRoZSBhcHBlYXJhbmNlIG9yZGVyIG9mIG9uZSBhdHRyaWJ1dGUgaW4gdGhlIHNoYWRlciBjb2RlLCB3aGljaCBpcyBlcXVhbCB0byB0aGUgcmVzdWx0IG9mIGdldEF0dHJpYkxvY2F0aW9uXHJcbiAgICAgICAgICAgIGlzQnVpbGRJbiwgLy8gd2hpY2ggbWVhbnMgZm91ciB2ZXJ0aWNlcyBpbiBvbmUgZWxlbWVudDogaW5WZXJ0ZXhQb3NcclxuICAgICAgICAgICAgZXh0cmFjdEF0dHJpYnV0ZVZhbHVlRnJvbTogKCkgPT4gW10gLy8gYSBmdW5jdGlvbiB3aGljaCBpcyB1c2UgdG8gYXBwZW5kIGFuIGVsZW1lbnQgaW50byB0aGUgYXJyYXkgb2YgdGhpcyBhdHRyaWJ1dGVcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIHJldHVybiBhdHRyaWJ1dGVzTWFwXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBlbmNvZGUgYSByZW5kZXIgaWQgYXMgY29sb3IgdG8gcGFzcyBpbiB0ZXh0dXJlXHJcbiAqIEBwYXJhbSBpZCByZW5kZXIgaWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVSZW5kZXJJZChpZDogbnVtYmVyKTogQ29sb3Ige1xyXG4gICAgLy8gc3BsaXQgYSBsYXJnZSBudW1iZXIgYnkgOC1iaXQ6IGlkID0gY29uY2F0KGEsIGIsIGcsIHIpLCBhbmQgbm9ybWFsaXplIHRoZW0gaW50byAoMCwgMSlcclxuICAgIGNvbnN0IHIgPSAoaWQgJiAyNTUpIC8gMjU1LjBcclxuICAgIGNvbnN0IGcgPSAoKGlkID4+IDgpICYgMjU1KSAvIDI1NS4wXHJcbiAgICBjb25zdCBiID0gKChpZCA+PiAxNikgJiAyNTUpIC8gMjU1LjBcclxuICAgIGNvbnN0IGEgPSAoKGlkID4+IDI0KSAmIDI1NSkgLyAyNTUuMFxyXG4gICAgcmV0dXJuIHsgciwgZywgYiwgYSB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBkZWNvZGUgcGl4ZWwgdmFsdWUgdG8gbnVtYmVyXHJcbiAqIEBwYXJhbSBwaXhlbFZhbCBhIHBpeGVsJ3MgdmFsdWUgb24gdGV4dHVyZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZVJlbmRlcklkKHBpeGVsVmFsOiBVaW50OEFycmF5KTogbnVtYmVyIHtcclxuICAgIC8vIHBhcnNlIG5vcm1hbGl6ZWQgcGFydHMgb2YgaWQgbnVtYmVyLCBiaXQgc2hpZnQgdG8gb3JpZ2luIHBvc2l0aW9uIGFuZCBjb25jYXRcclxuICAgIGNvbnN0IHJlbmRlcklkID0gcGl4ZWxWYWxbMF0gfCAocGl4ZWxWYWxbMV0gPDwgOCkgfCAocGl4ZWxWYWxbMl0gPDwgMTYpIHwgKHBpeGVsVmFsWzNdIDw8IDI0KVxyXG4gICAgcmV0dXJuIHJlbmRlcklkXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaGFkZXIge1xyXG4gICAgcHVibGljIGlucHV0czogVmFyaWFibGUgPSB7fVxyXG4gICAgcHVibGljIG91dHB1dHM6IFZhcmlhYmxlID0ge31cclxuICAgIHB1YmxpYyB1bmlmb3JtczogVmFyaWFibGUgPSB7fVxyXG4gICAgcHVibGljIG1ldGhvZHM6IHN0cmluZ1tdW10gPSBbW11dXHJcbiAgICBwdWJsaWMgbWFpbjogc3RyaW5nW10gPSBbXVxyXG4gICAgcHJpdmF0ZSBoZWFkZXIgPSBgI3ZlcnNpb24gMzAwIGVzXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcbmBcclxuICAgIHB1YmxpYyBjb3B5KCkge1xyXG4gICAgICAgIGNvbnN0IGNvcHlTaGFkZXIgPSBuZXcgU2hhZGVyKClcclxuICAgICAgICBjb3B5U2hhZGVyLmlucHV0cyA9IHsgLi4udGhpcy5pbnB1dHMgfVxyXG4gICAgICAgIGNvcHlTaGFkZXIub3V0cHV0cyA9IHsgLi4udGhpcy5vdXRwdXRzIH1cclxuICAgICAgICBjb3B5U2hhZGVyLnVuaWZvcm1zID0geyAuLi50aGlzLnVuaWZvcm1zIH1cclxuICAgICAgICBjb3B5U2hhZGVyLm1haW4gPSB0aGlzLm1haW4ubWFwKChzdHIpID0+IHN0cilcclxuICAgICAgICBjb3B5U2hhZGVyLm1ldGhvZHMgPSB0aGlzLm1ldGhvZHMubWFwKChtZXRob2QpID0+IG1ldGhvZC5tYXAoKHN0cikgPT4gc3RyKSlcclxuICAgICAgICByZXR1cm4gY29weVNoYWRlclxyXG4gICAgfVxyXG4gICAgcHVibGljIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgY29uc3QgdmFyaWFibGVzUHJlZml4ID0gW1xyXG4gICAgICAgICAgICB7IHByZWZpeDogJ2luJywgdmFyaWFibGVzOiB0aGlzLmlucHV0cyB9LFxyXG4gICAgICAgICAgICB7IHByZWZpeDogJ291dCcsIHZhcmlhYmxlczogdGhpcy5vdXRwdXRzIH0sXHJcbiAgICAgICAgICAgIHsgcHJlZml4OiAndW5pZm9ybScsIHZhcmlhYmxlczogdGhpcy51bmlmb3JtcyB9XHJcbiAgICAgICAgXVxyXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlRGVmaW5pdGlvbnMgPSB2YXJpYWJsZXNQcmVmaXhcclxuICAgICAgICAgICAgLm1hcCgodmFyaWFibGVQcmVmaXgpID0+XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YXJpYWJsZVByZWZpeC52YXJpYWJsZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoW25hbWUsIHR5cGVdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgJHt2YXJpYWJsZVByZWZpeC5wcmVmaXh9ICR7dHlwZX0gJHtuYW1lfTtcXG5gXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuam9pbignJylcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuam9pbignJylcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXIgK1xyXG4gICAgICAgICAgICB2YXJpYWJsZURlZmluaXRpb25zICtcclxuICAgICAgICAgICAgdGhpcy5tZXRob2RzLm1hcCgobWV0aG9kKSA9PiBtZXRob2Quam9pbignXFxuJykpLmpvaW4oJ1xcbicpICtcclxuICAgICAgICAgICAgJ1xcbicgK1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uam9pbignXFxuJylcclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IEVNUFRZX0ZVTkNUSU9OID0gKCkgPT4ge31cclxuIiwiLyoqXHJcbiAqIFRlc3Qgd2hldGhlciBhIHN0cmluZyBjYW4gYmUgYSB2YWxpZCBpZCBvZiBhIE5vZGUuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZTogdGhlIHN0cmluZyB0b2JlIHRlc3RlZFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkSWQodmFsdWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5sZW5ndGggPiAwXHJcbn1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgSmlhY2hlbmcgUGFuIDxqYWNraWVhbnhpc0BnbWFpbC5jb20+XHJcbiAqIEBkZXNjcmlwdGlvbiBNYXAyIGlzIGEgTWFwIGRhdGEgc3RydWN0dXJlIHdoaWNoIG1hcHMgdHdvIGtleXMgdG8gb25lIHZhbHVlLlxyXG4gKiBAVXNhZ2Ugc2FtZSB0byBNYXAgZGF0YSBzdHJ1Y3R1cmUgaW4gRVM2LlxyXG4gKiBAZGVwZW5kZW5jZXMgTm9uZVxyXG4gKi9cclxuXHJcbmNvbnN0IEpPSU4gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDcpXHJcbmNvbnN0IGlzS2V5cyA9IChrZXlzOiBBcnJheTxzdHJpbmc+KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIGtleXMgaW5zdGFuY2VvZiBBcnJheSAmJlxyXG4gICAgICAgIGtleXMubGVuZ3RoID09PSAyICYmXHJcbiAgICAgICAga2V5cy5ldmVyeSgoa2V5KSA9PiBrZXkgIT09IHVuZGVmaW5lZCAmJiBrZXkgIT09IG51bGwpXHJcbiAgICApXHJcbn1cclxuY2xhc3MgTWFwMiB7XHJcbiAgICBwcml2YXRlIG1hcCA9IG5ldyBNYXAoKVxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGVudHJpZXM/OiBBcnJheTxBcnJheTxhbnk+Pikge1xyXG4gICAgICAgIGlmIChlbnRyaWVzIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IFtrZXksIHZhbHVlXSA9IGVudHJ5XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldChrZXksIHZhbHVlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgc2l6ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXAuc2l6ZVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGUoa2V5czogQXJyYXk8c3RyaW5nPikge1xyXG4gICAgICAgIGlmIChpc0tleXMoa2V5cykpIHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0ga2V5cy5qb2luKEpPSU4pXHJcbiAgICAgICAgICAgIGNvbnN0IGtleV8gPSBrZXlzWzFdICsgSk9JTiArIGtleXNbMF1cclxuICAgICAgICAgICAgbGV0IG1hcCA9IHRoaXMubWFwXHJcbiAgICAgICAgICAgIG1hcC5kZWxldGUoa2V5KVxyXG4gICAgICAgICAgICBtYXAuZGVsZXRlKGtleV8pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQoa2V5czogQXJyYXk8c3RyaW5nPiwgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIGlmIChpc0tleXMoa2V5cykpIHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0ga2V5cy5qb2luKEpPSU4pXHJcbiAgICAgICAgICAgIGNvbnN0IGtleV8gPSBrZXlzWzFdICsgSk9JTiArIGtleXNbMF1cclxuICAgICAgICAgICAgbGV0IG1hcCA9IHRoaXMubWFwXHJcbiAgICAgICAgICAgIGlmICghbWFwLmhhcyhrZXlfKSkge1xyXG4gICAgICAgICAgICAgICAgbWFwLnNldChrZXksIHZhbHVlKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWFwLnNldChrZXlfLCB2YWx1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoa2V5czogQXJyYXk8c3RyaW5nPikge1xyXG4gICAgICAgIGlmIChpc0tleXMoa2V5cykpIHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0ga2V5cy5qb2luKEpPSU4pXHJcbiAgICAgICAgICAgIGNvbnN0IGtleV8gPSBrZXlzWzFdICsgSk9JTiArIGtleXNbMF1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFwLmdldChrZXkpIHx8IHRoaXMubWFwLmdldChrZXlfKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhcyhrZXlzOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICAgICAgaWYgKGlzS2V5cyhrZXlzKSkge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBrZXlzLmpvaW4oSk9JTilcclxuICAgICAgICAgICAgY29uc3Qga2V5XyA9IGtleXNbMV0gKyBKT0lOICsga2V5c1swXVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXAuaGFzKGtleSkgfHwgdGhpcy5tYXAuaGFzKGtleV8pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JFYWNoKGZ1bmM6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5tYXAuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQga2V5cyA9IGtleS5zcGxpdChKT0lOKVxyXG4gICAgICAgICAgICBmdW5jKHZhbHVlLCBrZXlzLCB0aGlzKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVudHJpZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLm1hcC5lbnRyaWVzKCldLm1hcCgoZW50cnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gZW50cnlbMF0uc3BsaXQoSk9JTilcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlbnRyeVsxXVxyXG4gICAgICAgICAgICByZXR1cm4gW2tleSwgdmFsdWVdXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMga2V5cygpIHtcclxuICAgICAgICBsZXQga2V5cyA9IFsuLi50aGlzLm1hcC5rZXlzKCldXHJcbiAgICAgICAgcmV0dXJuIGtleXMubWFwKChrZXkpID0+IGtleS5zcGxpdChKT0lOKSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFsdWVzKCkge1xyXG4gICAgICAgIHJldHVybiBbLi4udGhpcy5tYXAudmFsdWVzKCldXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcDJcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XHJcbiAqIEBkZXNjcmlwdGlvbiBzb21lIHV0aWxpdHkgZnVuY3Rpb25zXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgTm9kZUxpbmtEYXRhIH0gZnJvbSAnLi4vaW50ZXJmYWNlcydcclxuXHJcbi8qKlxyXG4gKiBnaXZlbiBhIGdyYXBoIGRhdGEgd2l0aCBwb3NpdGlvbiwgcmV0dXJuIGEgY29weSBvZiBncmFwaCwgd2l0aCBwb3NpdGlvbiB0cmFuc2Zvcm1lZCB0byBjZW50ZXIgb2YgZ2l2ZW4gc2l6ZVxyXG4gKiBAcGFyYW0gZ3JhcGggbm9kZSBsaW5rIGdyYXBoIGRhdGFcclxuICogQHBhcmFtIHNpemUgZ3JhcGggc2l6ZSAobWF4KHdpZHRoLCBoZWlnaHQpKVxyXG4gKiBAcGFyYW0gY2VudGVyWCB4IHBvcyBvZiBncmFwaCBjZW50ZXJcclxuICogQHBhcmFtIGNlbnRlclkgeSBwb3Mgb2YgZ3JhcGggY2VudGVyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtR3JhcGhQb3NpdGlvbihcclxuICAgIGdyYXBoOiBOb2RlTGlua0RhdGEsXHJcbiAgICBzaXplOiBudW1iZXIsXHJcbiAgICBjZW50ZXJYOiBudW1iZXIsXHJcbiAgICBjZW50ZXJZOiBudW1iZXJcclxuKSB7XHJcbiAgICBjb25zdCB0YXJnZXRHcmFwaDogTm9kZUxpbmtEYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShncmFwaCkpXHJcbiAgICBjb25zdCB4cyA9IHRhcmdldEdyYXBoLm5vZGVzLm1hcCgobm9kZSkgPT4gbm9kZS54KVxyXG4gICAgY29uc3QgeXMgPSB0YXJnZXRHcmFwaC5ub2Rlcy5tYXAoKG5vZGUpID0+IG5vZGUueSlcclxuICAgIGNvbnN0IHhNaW4gPSBNYXRoLm1pbiguLi54cylcclxuICAgIGNvbnN0IHhNYXggPSBNYXRoLm1heCguLi54cylcclxuICAgIGNvbnN0IHlNaW4gPSBNYXRoLm1pbiguLi55cylcclxuICAgIGNvbnN0IHlNYXggPSBNYXRoLm1heCguLi55cylcclxuXHJcbiAgICBjb25zdCB4TWlkID0gKHhNaW4gKyB4TWF4KSAvIDJcclxuICAgIGNvbnN0IHlNaWQgPSAoeU1pbiArIHlNYXgpIC8gMlxyXG5cclxuICAgIHRhcmdldEdyYXBoLm5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgICBub2RlLnggPSAoKG5vZGUueCAtIHhNaWQpIC8gKHhNYXggLSB4TWluKSkgKiBzaXplICsgY2VudGVyWFxyXG4gICAgICAgIG5vZGUueSA9ICgobm9kZS55IC0geU1pZCkgLyAoeU1heCAtIHlNaW4pKSAqIHNpemUgKyBjZW50ZXJZXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiB0YXJnZXRHcmFwaFxyXG59XHJcblxyXG4vKipcclxuICogdGhlIGZ1bmN0aW9uIGlzIHRvIG92ZXJyaWRlIG9iamVjdCByZWN1cnNpdmVseVxyXG4gKiBAcGFyYW0gb3ZlcnJpZGRlbk9iamVjdDogdGhlIE9iamVjdCB0byBiZSBvdmVycmlkZGVuXHJcbiAqIEBwYXJhbSBvdmVycmlkaW5nT2JqZWN0OiB0aGUgT2JqZWN0IHRvIG92ZXJyaWRlIHRoZSBvdmVycmlkZGVuIE9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG92ZXJyaWRlKG92ZXJyaWRkZW5PYmplY3Q6IG9iamVjdCwgb3ZlcnJpZGluZ09iamVjdDogb2JqZWN0KSB7XHJcbiAgICBpZiAob3ZlcnJpZGRlbk9iamVjdCAhPT0gT2JqZWN0KG92ZXJyaWRkZW5PYmplY3QpKSB7XHJcbiAgICAgICAgLy8gb3ZlcnJpZGRlbk9iamVjdCBpcyBub3QgYW4gb2JqZWN0XHJcbiAgICAgICAgaWYgKG92ZXJyaWRpbmdPYmplY3QgIT09IE9iamVjdChvdmVycmlkaW5nT2JqZWN0KSkge1xyXG4gICAgICAgICAgICAvLyBvdmVycmlkaW5nT2JqZWN0IGlzIG5vdCBhbiBvYmplY3RcclxuICAgICAgICAgICAgcmV0dXJuIG92ZXJyaWRpbmdPYmplY3RcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvdmVycmlkaW5nT2JqZWN0KSkgLy8gZGVlcCBjb3B5XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9iamVjdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob3ZlcnJpZGRlbk9iamVjdCkpIC8vIGRlZXAgY29weVxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gb3ZlcnJpZGluZ09iamVjdCkge1xyXG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0ICYmIG92ZXJyaWRpbmdPYmplY3Rba2V5XSA9PT0gT2JqZWN0KG92ZXJyaWRpbmdPYmplY3Rba2V5XSkpIHtcclxuICAgICAgICAgICAgLy8gaWYgb3ZlcnJpZGluZ09iamVjdFtrZXldIGlzIGFuIG9iamVjdFxyXG4gICAgICAgICAgICBvYmplY3Rba2V5XSA9IG92ZXJyaWRlKG9iamVjdFtrZXldLCBvdmVycmlkaW5nT2JqZWN0W2tleV0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb2JqZWN0W2tleV0gPSBvdmVycmlkaW5nT2JqZWN0W2tleV1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2JqZWN0XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==