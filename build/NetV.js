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
        strokeWidth: 2
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
    constructor(core, data) {
        this.$_style = {};
        this.$_mousedownCallbackSet = new Set();
        this.$_mouseupCallbackSet = new Set();
        this.$_mouseoverCallbackSet = new Set();
        this.$_mouseoutCallbackSet = new Set();
        this.$_mousemoveCallbackSet = new Set();
        this.$_clickCallbackSet = new Set();
        this.$_attributes = {};
        const type = this.constructor.name.toLowerCase();
        this.$_core = core;
        const defaultConfigs = this.$_core.$_configs;
        // override default style with user specified style in data
        this.$_style = utils_1.override(defaultConfigs[type].style, data.style);
        const renderManager = this.$_core.$_renderer[`${type}Manager`];
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
            (eventName.slice(0, 4) === 'drag' && this.constructor.name === 'Node') // only node can be dragged
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
            (eventName.slice(0, 4) === 'drag' && this.constructor.name === 'Node') // only node can be dragged
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
        super(core, linkData);
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
        super(core, nodeData);
        this.$_dragstartCallbackSet = new Set();
        this.$_draggingCallbackSet = new Set();
        this.$_dragendCallbackSet = new Set();
        this.$_position = {
            x: 0,
            y: 0
        };
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
            if ((element === null || element === void 0 ? void 0 : element.constructor.name) === 'Node') {
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
            if ((element === null || element === void 0 ? void 0 : element.constructor.name) === 'Node' &&
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
                    const value = attr.extractAttributeValueFrom(element);
                    value.forEach((v, j) => {
                        // inject into the Buffer Array
                        attr.array[attr.size * index + j] = v;
                    });
                }
            });
            const offset = element.constructor.name === 'Node' ? 0 : 1; // NOTE: node render id, use even integer
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
        const attr = this.attributes.get(`in_${attribute}`);
        if (attr === undefined) {
            console.error(`Attribute: ${attribute} is not supported in a ${element.constructor.name} instance.`);
        }
        const data = attr.extractAttributeValueFrom(element);
        attr.array.set(data, attr.size * index);
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
        this.attributes.forEach((attr) => {
            if (attr.name === 'in_source') {
                attr.extractAttributeValueFrom = (link) => {
                    const sourcePosition = link.source().position();
                    return [sourcePosition.x, sourcePosition.y];
                };
            }
            else if (attr.name === 'in_target') {
                attr.extractAttributeValueFrom = (link) => {
                    const targetPosition = link.target().position();
                    return [targetPosition.x, targetPosition.y];
                };
            }
            else if (attr.name === 'in_strokeWidth') {
                attr.extractAttributeValueFrom = (link) => {
                    return [link.strokeWidth() * this.pixelRatio];
                };
            }
            else if (attr.name === 'in_strokeColor') {
                attr.extractAttributeValueFrom = (link) => {
                    const strokeColor = link.strokeColor();
                    return [strokeColor.r, strokeColor.g, strokeColor.b, strokeColor.a];
                };
            }
        });
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
            this.attributes.get('in_source').array[2 * (count + i)] = sourcePosition.x;
            this.attributes.get('in_source').array[2 * (count + i) + 1] = sourcePosition.y;
            const target = link.target();
            const targetPosition = target.position();
            this.attributes.get('in_target').array[2 * (count + i)] = targetPosition.x;
            this.attributes.get('in_target').array[2 * (count + i) + 1] = targetPosition.y;
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
        // this.idToIndex = {}
        this.attributes.forEach((attr) => {
            if (attr.name === 'in_position') {
                attr.extractAttributeValueFrom = (node) => {
                    const position = node.position();
                    return [position.x, position.y];
                };
            }
            else if (attr.name === 'in_r') {
                attr.extractAttributeValueFrom = (node) => {
                    return [node.r() * this.pixelRatio];
                };
            }
            else if (attr.name === 'in_width') {
                attr.extractAttributeValueFrom = (node) => {
                    return [node.width() * this.pixelRatio];
                };
            }
            else if (attr.name === 'in_height') {
                attr.extractAttributeValueFrom = (node) => {
                    return [node.height() * this.pixelRatio];
                };
            }
            else if (attr.name === 'in_rotate') {
                attr.extractAttributeValueFrom = (node) => {
                    return [node.rotate()];
                };
            }
            else if (attr.name === 'in_fill') {
                attr.extractAttributeValueFrom = (node) => {
                    const fill = node.fill();
                    return [fill.r, fill.g, fill.b, fill.a];
                };
            }
            else if (attr.name === 'in_strokeWidth') {
                attr.extractAttributeValueFrom = (node) => {
                    return [node.strokeWidth() * this.pixelRatio];
                };
            }
            else if (attr.name === 'in_strokeColor') {
                attr.extractAttributeValueFrom = (node) => {
                    const strokeColor = node.strokeColor();
                    return [strokeColor.r, strokeColor.g, strokeColor.b, strokeColor.a];
                };
            }
            else if (attr.name === 'in_shape') {
                attr.extractAttributeValueFrom = (node) => {
                    const shape = node.shape();
                    if (shape === 'rect') {
                        return [1];
                    }
                    else if (shape === 'triangle') {
                        return [2];
                    }
                    else {
                        return [0];
                    }
                };
            }
            else if (attr.name === 'in_vertexAlpha') {
                attr.extractAttributeValueFrom = (node) => {
                    const vertexAlpha = node.vertexAlpha();
                    return [vertexAlpha.x, vertexAlpha.y];
                };
            }
            else if (attr.name === 'in_vertexBeta') {
                attr.extractAttributeValueFrom = (node) => {
                    const vertexAlpha = node.vertexBeta();
                    return [vertexAlpha.x, vertexAlpha.y];
                };
            }
            else if (attr.name === 'in_vertexGamma') {
                attr.extractAttributeValueFrom = (node) => {
                    const vertexAlpha = node.vertexGamma();
                    return [vertexAlpha.x, vertexAlpha.y];
                };
            }
        });
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
            this.attributes.get('in_position').array[2 * i] = position.x;
            this.attributes.get('in_position').array[2 * i + 1] = position.y;
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
    in_strokeWidth: 'float',
    in_strokeColor: 'vec4'
};
vertex.outputs = {
    shape: 'float',
    strokeColor: 'vec4'
};
vertex.uniforms = {
    projection: 'mat3',
    scale: 'vec2',
    translate: 'vec2'
};
vertex.main = [
    `void main(void) {`,
    `    strokeColor = in_strokeColor;`,
    `    shape = in_shape;`,
    `    vec2 source = in_source * scale + translate;`,
    `    vec2 target = in_target * scale + translate;`,
    `    vec2 delta = source - target;`,
    `    vec2 center = 0.5 * (source + target);`,
    `    float len = length(delta);`,
    `    float phi = atan(delta.y / delta.x);`,
    ``,
    `    mat3 line_scale = mat3(`,
    `        len, 0, 0,`,
    `        0, in_strokeWidth, 0,`,
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
fragment.main = [
    `void main(void) {`,
    `    fragmentColor = vec4(strokeColor.rgb * strokeColor.a, strokeColor.a);`,
    `}`
];
const idFragment = fragment.copy();
exports.idFragment = idFragment;
idFragment.inputs['id'] = 'vec4';
idFragment.main[1] = `fragmentColor = id;`;


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
    in_width: 'float',
    in_height: 'float',
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
    width: 'float',
    height: 'float',
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
        `   float stroke_scale = 1.0 + strokeWidth / 2.0 * pixelRatio / normal_length;`,
        `   return stroke_scale;`,
        `}`
    ]
];
vertex.main = [
    `void main(void) {`,
    `   r = in_r;`,
    `   width = in_width;`,
    `   height = in_height;`,
    `   shape = in_shape;`,
    `   fill = in_fill;`,
    `   strokeColor = in_strokeColor;`,
    `   strokeWidth = in_strokeWidth;`,
    `   rotate = in_rotate;`,
    `   position = scale * (in_position + in_offset) + translate;`,
    `   vertexAlpha = in_vertexAlpha * pixelRatio;`,
    `   vertexBeta = in_vertexBeta * pixelRatio;`,
    `   vertexGamma = in_vertexGamma * pixelRatio;`,
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
    `   } else if (shape == 1.0) {`,
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
        `    float stroke_scale = 1.0 + strokeWidth / 2.0 * pixelRatio / normal_length;`,
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
        `float inCircle() {`,
        `    vec2 flip_pos = position;`,
        `    flip_pos.y = viewport.y - position.y;`,
        `    float dist = distance(gl_FragCoord.xy / pixelRatio, flip_pos);`,
        `    float dist_in_r = step(dist, r - strokeWidth / 2.);`,
        `    return dist_in_r;`,
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
        `    float drawOuter = 1. - smoothstep((r + strokeWidth / 2.) * 0.95, (r + strokeWidth / 2.) * 1.05, dist);`,
        `    float drawInner = 1. - step(r - strokeWidth / 2., dist);`,
        `    return drawOuter * (1. - drawInner);`,
        `}`
    ]
];
fragment.main = [
    `void main(void) {`,
    `    if (shape == 0.0) {`,
    `        // circle shape`,
    `        // border check, using 0.5(center of smoothstep)`,
    `        if (inCircle() < 1. && (strokeWidth < 0.8 || inCircleBorder() < 0.5)) {`,
    `            discard;`,
    `        }`,
    `        fragmentColor = inCircleBorder() * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a) + inCircle() * vec4(fill.rgb * fill.a, fill.a);`,
    `    } else if (shape == 1.0) {`,
    `        // rect shape`,
    `        fragmentColor = inRectBorder() * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a) + inRect() * vec4(fill.rgb * fill.a, fill.a);`,
    `    } else if (shape == 2.0) {`,
    `        // triangle shape`,
    `        fragmentColor = inTriangleBorder() * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a) + inTriangle() * vec4(fill.rgb * fill.a, fill.a);`,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YXNldC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YXNldC9taXNlcmFibGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhc2V0L3BhdGVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2VsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2xpbmsudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL25vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmFjdGlvbi9pbnRlcmFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvZWxlbWVudHMvcmVuZGVyLWVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL2VsZW1lbnRzL3JlbmRlci1saW5rLnRzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlci9lbGVtZW50cy9yZW5kZXItbm9kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL3NoYWRlcnMvbGluay1zaGFkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL3NoYWRlcnMvbm9kZS1zaGFkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL21hcDIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3V0aWxzLnRzIl0s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QUFFO1FBQ3ZFLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDMUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hFLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDM0UsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMxRSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZFLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDMUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUs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RUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNoRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzFELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hELEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDeEQsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUM3RCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDaEQsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNoRCxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzFELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDL0MsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzFELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hELEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMzRCxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMxRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFD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RUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2hELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMvQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQy9DLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDaEQsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2hELEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDL0MsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDOUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUM5QyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FB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QUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2hELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDL0MsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RCxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsV0FB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RUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRTtRQUMzQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFO1FBQzNDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFO1FBQzNDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFO1FBQzNDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFF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QUFDLEtBQUssTUFBTSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDMUUsd0NBQXdDO1lBQ3hDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdEO2FBQU07WUFDSCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO1NBQ3RDO0tBQ0o7SUFDRCxPQUFPLE1BQU07QUFDakIsQ0FBQztBQXJCRCw0QkFxQkMiLCJmaWxlIjoiTmV0Vi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBkZWZhdWx0IGNvbmZpZ3VyYXRpb25zIGluIE5ldFZcclxuICogQGF1dGhvciBYaWFvZG9uZyBaaGFvIDx6aGFveGlhb2RvbmdAemp1LmVkdS5jbj5cclxuICovXHJcbmV4cG9ydCBjb25zdCB3aWR0aCA9IDgwMFxyXG5leHBvcnQgY29uc3QgaGVpZ2h0ID0gNjAwXHJcbmV4cG9ydCBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDEsIGE6IDEgfVxyXG5leHBvcnQgY29uc3QgZW5hYmxlUGFuWm9vbSA9IHRydWVcclxuZXhwb3J0IGNvbnN0IG5vZGVMaW1pdCA9IDEwMFxyXG5leHBvcnQgY29uc3QgbGlua0xpbWl0ID0gMTAwMFxyXG5cclxuZXhwb3J0IGNvbnN0IG5vZGUgPSB7XHJcbiAgICBzdHlsZToge1xyXG4gICAgICAgIHNoYXBlOiAnY2lyY2xlJywgLy8gZGVmYXVsdCBzaGFwZVxyXG4gICAgICAgIG9mZnNldDogeyB4OiAwLCB5OiAwIH0sXHJcbiAgICAgICAgZmlsbDogeyByOiAwLjIsIGc6IDAuNiwgYjogMC4yLCBhOiAwLjggfSxcclxuICAgICAgICBzdHJva2VDb2xvcjogeyByOiAwLjksIGc6IDAuOSwgYjogMC45LCBhOiAwLjYgfSxcclxuICAgICAgICBzdHJva2VXaWR0aDogMixcclxuICAgICAgICAvKiBjaXJjbGUgc2hhcGUgc3R5bGVzICovXHJcbiAgICAgICAgcjogNSxcclxuICAgICAgICAvKiByZWN0IHNoYXBlIHN0eWxlcyAqL1xyXG4gICAgICAgIHdpZHRoOiA1LFxyXG4gICAgICAgIGhlaWdodDogNSxcclxuICAgICAgICByb3RhdGU6IDAsIC8vIC1waSB0byArcGksIHBvc2l0aXZlIHZhbHVlIG1lYW5zIGNsb2Nrd2lzZVxyXG4gICAgICAgIC8qIHRyaWFuZ2xlIHNoYXBlIHN0eWxlcyAqL1xyXG4gICAgICAgIHZlcnRleEFscGhhOiB7IHg6IDAsIHk6IC00IH0sXHJcbiAgICAgICAgdmVydGV4QmV0YTogeyB4OiAtMiAqIE1hdGguc3FydCgzKSwgeTogMiB9LFxyXG4gICAgICAgIHZlcnRleEdhbW1hOiB7IHg6IDIgKiBNYXRoLnNxcnQoMyksIHk6IDIgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbGluayA9IHtcclxuICAgIHN0eWxlOiB7XHJcbiAgICAgICAgc2hhcGU6ICdsaW5lJyxcclxuICAgICAgICBzdHJva2VDb2xvcjogeyByOiAwLjQsIGc6IDAuNiwgYjogMC44LCBhOiAwLjUgfSxcclxuICAgICAgICBzdHJva2VXaWR0aDogMlxyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIFhpYW9kb25nIFpoYW8gPHpoYW94aWFvZG9uZ0B6anUuZWR1LmNuPlxyXG4gKiBAZGVzY3JpcHRpb24gYnVpbGQtaW4gZGF0YXNldCBpbiBOZXRWXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgbWlzZXJhYmxlcyB9IGZyb20gJy4vbWlzZXJhYmxlcydcclxuaW1wb3J0IHsgcGF0ZW50cyB9IGZyb20gJy4vcGF0ZW50cydcclxuXHJcbmV4cG9ydCB7IG1pc2VyYWJsZXMsIHBhdGVudHMgfVxyXG4iLCIvKipcclxuICogQGF1dGhvciBYaWFvZG9uZyBaaGFvIDx6aGFveGlhb2RvbmdAemp1LmVkdS5jbj5cclxuICogQGRlc2NyaXB0aW9uIExlcyBNaXNlcmFibGVzIHJlbGF0aW9uIGRhdGFzZXQuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBnZW5lcmF0ZWQgYnkgZDMtZm9yY2U6IGh0dHBzOi8vb2JzZXJ2YWJsZWhxLmNvbS9AZDMvZm9yY2UtZGlyZWN0ZWQtZ3JhcGhcclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgbWlzZXJhYmxlcyA9IHtcclxuICAgIG5vZGVzOiBbXHJcbiAgICAgICAgeyBpZDogJ015cmllbCcsIHg6IDI5My40NzE0NTExNzU1MzYyMywgeTogMzU2LjQzMzU3MTgxMDQxMzgsIGdyb3VwOiAxIH0sXHJcbiAgICAgICAgeyBpZDogJ05hcG9sZW9uJywgeDogMjUzLjkwMjUwODg2MTg2NTYsIHk6IDM3NC4zMDU4MTE2NTM2NDQ1LCBncm91cDogMSB9LFxyXG4gICAgICAgIHsgaWQ6ICdNbGxlLkJhcHRpc3RpbmUnLCB4OiAzNTAuOTI3MjQ5ODk5MTgwNzcsIHk6IDMzMi4zMzI1NTM5OTk5OTQzLCBncm91cDogMSB9LFxyXG4gICAgICAgIHsgaWQ6ICdNbWUuTWFnbG9pcmUnLCB4OiAzNTYuMDkxNjE1NjUzOTk5NywgeTogMzUyLjc4ODU3OTkxMTYwMTUsIGdyb3VwOiAxIH0sXHJcbiAgICAgICAgeyBpZDogJ0NvdW50ZXNzZGVMbycsIHg6IDI1NC4yOTI5MTUyMDk4OTMzNSwgeTogMzU3LjMxNzU3MzQwNzY0MTcsIGdyb3VwOiAxIH0sXHJcbiAgICAgICAgeyBpZDogJ0dlYm9yYW5kJywgeDogMjU3Ljg1NzI5MzYyNjIwMSwgeTogMzM1Ljg1NDI3NjI4MzU4OTU3LCBncm91cDogMSB9LFxyXG4gICAgICAgIHsgaWQ6ICdDaGFtcHRlcmNpZXInLCB4OiAyNTkuNjI1NTU2MzgyNTAyOCwgeTogMzgzLjgzMDI3NDY5ODMyODE0LCBncm91cDogMSB9LFxyXG4gICAgICAgIHsgaWQ6ICdDcmF2YXR0ZScsIHg6IDI0OS44NTk2NDU5ODI5MTM5LCB5OiAzNDYuMTgyMjU1MTY4MzI0OTYsIGdyb3VwOiAxIH0sXHJcbiAgICAgICAgeyBpZDogJ0NvdW50JywgeDogMjY5Ljk2NzkzOTUxMzUwOTI0LCB5OiAzOTAuNjgwMDg0MjMyMTU3MSwgZ3JvdXA6IDEgfSxcclxuICAgICAgICB7IGlkOiAnT2xkTWFuJywgeDogMjQ2LjczOTUyMzExMjc3NjY1LCB5OiAzNjQuNTkzNTc0OTQ0MzIwNjYsIGdyb3VwOiAxIH0sXHJcbiAgICAgICAgeyBpZDogJ0xhYmFycmUnLCB4OiA0NDMuNTE2NTgzMzE1MDI2LCB5OiAzNTguMjkyMDQ3ODk0Nzc2ODMsIGdyb3VwOiAyIH0sXHJcbiAgICAgICAgeyBpZDogJ1ZhbGplYW4nLCB4OiA0NDIuMTY4OTQ3NTc2NDE1MDYsIHk6IDMyMC44MzE1NTMyMTYwODYxLCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdNYXJndWVyaXRlJywgeDogNDEzLjM4MTY4NTEwMDc5MzEsIHk6IDI0MC4wNDA5MTU1OTI5NjUwNCwgZ3JvdXA6IDMgfSxcclxuICAgICAgICB7IGlkOiAnTW1lLmRlUicsIHg6IDQyNy4yMzYxNzE1OTUwMjU0LCB5OiAzNTUuMTAyMTE1ODk5Nzk1MTQsIGdyb3VwOiAyIH0sXHJcbiAgICAgICAgeyBpZDogJ0lzYWJlYXUnLCB4OiA0MDUuODUwODI4NTgxOTE4MzQsIHk6IDMzMC41MjAxNTEyMjA1MDg1LCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdHZXJ2YWlzJywgeDogNDA1LjIxMTMxMjE5MDY4ODEsIHk6IDMxNi4yOTEyNTM1OTM5NjEzNiwgZ3JvdXA6IDIgfSxcclxuICAgICAgICB7IGlkOiAnVGhvbG9teWVzJywgeDogNDIyLjQxMjUzMDc3ODE2NDYsIHk6IDEyNi4wNzY0OTQ0OTc3NTgwNiwgZ3JvdXA6IDMgfSxcclxuICAgICAgICB7IGlkOiAnTGlzdG9saWVyJywgeDogMzYzLjE3Mjk0MjI2Nzc5NzksIHk6IDEwMi43Nzg5MDM2ODI4OTc4NSwgZ3JvdXA6IDMgfSxcclxuICAgICAgICB7IGlkOiAnRmFtZXVpbCcsIHg6IDM4MS43OTQ3MTAzMDk0MDI4LCB5OiA2Ni41ODEzMzcyNDA0Mzk0OCwgZ3JvdXA6IDMgfSxcclxuICAgICAgICB7IGlkOiAnQmxhY2hldmlsbGUnLCB4OiAzODMuMTc5MjY3Njc0MDI2MSwgeTogOTQuODAzMjAzMTU1MDAxNTQsIGdyb3VwOiAzIH0sXHJcbiAgICAgICAgeyBpZDogJ0Zhdm91cml0ZScsIHg6IDM2MS44OTM3MzE2NDQyODUsIHk6IDcwLjM4Njk2MzgxMzg0MDc0LCBncm91cDogMyB9LFxyXG4gICAgICAgIHsgaWQ6ICdEYWhsaWEnLCB4OiAzOTguNzUzNTA5ODgzNTE2NTMsIHk6IDc3LjA5NzAwNzUxNTI3MTE5LCBncm91cDogMyB9LFxyXG4gICAgICAgIHsgaWQ6ICdaZXBoaW5lJywgeDogMzQ5LjA0OTU5MTQ2MDEzNzYsIHk6IDg4LjgwODg4NjEzMzcyNzEzLCBncm91cDogMyB9LFxyXG4gICAgICAgIHsgaWQ6ICdGYW50aW5lJywgeDogMzk4LjAxNDExNDM4NzAyNDczLCB5OiAxNzMuNzY0NDQxOTY5NDU5NzcsIGdyb3VwOiAzIH0sXHJcbiAgICAgICAgeyBpZDogJ01tZS5UaGVuYXJkaWVyJywgeDogNDcxLjI1MTY1MzMzODY3MjUsIHk6IDI2Mi4yMTg3MDE2NjY2NDUsIGdyb3VwOiA0IH0sXHJcbiAgICAgICAgeyBpZDogJ1RoZW5hcmRpZXInLCB4OiA1MDQuODE2NzIwODU2MDMwNjYsIHk6IDI4My4wNDYzODkwMDQ4MTcyMywgZ3JvdXA6IDQgfSxcclxuICAgICAgICB7IGlkOiAnQ29zZXR0ZScsIHg6IDQ3Mi4zMzQ2OTQxNDg3MTkyLCB5OiAyMjguNjg3Nzk0NDMzMDM0NzgsIGdyb3VwOiA1IH0sXHJcbiAgICAgICAgeyBpZDogJ0phdmVydCcsIHg6IDQ2MC4wNTI1NzY4OTMzMjgzNiwgeTogMjk1LjU1NzgxNTQyNjg5MDQsIGdyb3VwOiA0IH0sXHJcbiAgICAgICAgeyBpZDogJ0ZhdWNoZWxldmVudCcsIHg6IDM4NS40MzkzNTc2NDU4OTk4NiwgeTogMzAyLjEyODI0NTg4NjIyODU3LCBncm91cDogMCB9LFxyXG4gICAgICAgIHsgaWQ6ICdCYW1hdGFib2lzJywgeDogMzkzLjE5MDQxNTkwMzgzNTk3LCB5OiAzNDUuNDk3MTY2NzY5MDgxNywgZ3JvdXA6IDIgfSxcclxuICAgICAgICB7IGlkOiAnUGVycGV0dWUnLCB4OiAzNjcuNTM4MzMxMzI4OTM5NzYsIHk6IDE5NC41NTU2NDgyMzA2MjcxLCBncm91cDogMyB9LFxyXG4gICAgICAgIHsgaWQ6ICdTaW1wbGljZScsIHg6IDQwMS4zNjIyMjUyMzU0NjU1LCB5OiAyNDIuOTk4Mjg0Nzk5NDU3NiwgZ3JvdXA6IDIgfSxcclxuICAgICAgICB7IGlkOiAnU2NhdWZmbGFpcmUnLCB4OiA0MTQuNjcwNzI3OTk2Mjc1NzMsIHk6IDM0NC4wNTQ3NzIwOTQ1NzM2LCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdXb21hbjEnLCB4OiA0MjEuNDE2NzQxNDM5MjQyNiwgeTogMjkzLjMxMTIwMjE5MTI5Mzk0LCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdKdWRnZScsIHg6IDQyMC4wNDM5MjAwNzg0MTMzNSwgeTogNDAxLjAzMjMzNjA5MTUyNzQ0LCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdDaGFtcG1hdGhpZXUnLCB4OiAzNzcuNzk1MjQyNTQ2MjE4MzMsIHk6IDM4My44MTA1Nzg3MTE1MTAyLCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdCcmV2ZXQnLCB4OiA0MDEuOTUyOTg0NDQ2OTk5MiwgeTogMzg4Ljg2ODQ3ODI5ODc0MTEsIGdyb3VwOiAyIH0sXHJcbiAgICAgICAgeyBpZDogJ0NoZW5pbGRpZXUnLCB4OiA0MDAuNjY4NTcwNzEzMzUzOCwgeTogNDEzLjQ5NDE3NzkwNTIzNDY2LCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdDb2NoZXBhaWxsZScsIHg6IDM3OS4wNDk2OTcwNDQ2MjM1NCwgeTogNDA0LjI2OTc0MDU5MjMzMTYzLCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdQb250bWVyY3knLCB4OiA1NTMuMTEzNzQwMTc1MDE5OCwgeTogMjQ0LjkyODMwMDI3MzYwNzY1LCBncm91cDogNCB9LFxyXG4gICAgICAgIHsgaWQ6ICdCb3VsYXRydWVsbGUnLCB4OiA0OTAuMTU3MTA4NjA4NjkzMiwgeTogMjQ5LjIxMDE5MjM4MzU4MDMsIGdyb3VwOiA2IH0sXHJcbiAgICAgICAgeyBpZDogJ0Vwb25pbmUnLCB4OiA1NDkuNzU4NDI2NzU3MTg5MiwgeTogMzAyLjkwMzEwNjUyMjg0MzEsIGdyb3VwOiA0IH0sXHJcbiAgICAgICAgeyBpZDogJ0FuemVsbWEnLCB4OiA1MTUuMzgwNzM5OTM5NTEzNCwgeTogMjU3LjAxNzk2ODg5ODM5MTEsIGdyb3VwOiA0IH0sXHJcbiAgICAgICAgeyBpZDogJ1dvbWFuMicsIHg6IDQzMy42NjA4NjY1MzQwNTE0LCB5OiAyNjUuODE3NDY3Mzg4NjYzNCwgZ3JvdXA6IDUgfSxcclxuICAgICAgICB7IGlkOiAnTW90aGVySW5ub2NlbnQnLCB4OiA0MDMuMDI1MzYyNTc0MTY1MjMsIHk6IDI4OS4wMzMxMjIwMDEyMTMyNiwgZ3JvdXA6IDAgfSxcclxuICAgICAgICB7IGlkOiAnR3JpYmllcicsIHg6IDM0MS44MDk3MzIyNzQ1Njc3NSwgeTogMjk0LjIxMjM5NjE0ODAyMywgZ3JvdXA6IDAgfSxcclxuICAgICAgICB7IGlkOiAnSm9uZHJldHRlJywgeDogNTY1LjE5NjUzMDM0MjIxODYsIHk6IDQ3MC42NTk1MDM0OTM3NTg1NiwgZ3JvdXA6IDcgfSxcclxuICAgICAgICB7IGlkOiAnTW1lLkJ1cmdvbicsIHg6IDU2OS4xODk2MjY5MjQyMTAxLCB5OiA0MjYuNjYxODUwNTM4MjQ1NjMsIGdyb3VwOiA3IH0sXHJcbiAgICAgICAgeyBpZDogJ0dhdnJvY2hlJywgeDogNTcyLjE2MTkzOTM5MzY4MjYsIHk6IDM2NC4yMjYwNjc2NjQ5NzU2MywgZ3JvdXA6IDggfSxcclxuICAgICAgICB7IGlkOiAnR2lsbGVub3JtYW5kJywgeDogNTI0LjU5MTQ1MDUyMDgwMDUsIHk6IDI1Ny40MDEyMjE0ODI4MzM2LCBncm91cDogNSB9LFxyXG4gICAgICAgIHsgaWQ6ICdNYWdub24nLCB4OiA0OTIuNTQ4MzkzMjAyMzQxLCB5OiAyMjIuNTk2NjM1MTMyODg4NSwgZ3JvdXA6IDUgfSxcclxuICAgICAgICB7IGlkOiAnTWxsZS5HaWxsZW5vcm1hbmQnLCB4OiA1MTQuMzY5MjY1NTAyMzY0NCwgeTogMjI5LjA5NjcwMDYyMzg5MjgxLCBncm91cDogNSB9LFxyXG4gICAgICAgIHsgaWQ6ICdNbWUuUG9udG1lcmN5JywgeDogNTQ5LjMyNTA1MDgxNzE0NzQsIHk6IDE5Ni4xNDA1NjgzMzA4NDkzNiwgZ3JvdXA6IDUgfSxcclxuICAgICAgICB7IGlkOiAnTWxsZS5WYXVib2lzJywgeDogNTE3Ljg1OTM1NzIzOTQwNzEsIHk6IDE4Ni4yNDg4MzA5MTExNTY1LCBncm91cDogNSB9LFxyXG4gICAgICAgIHsgaWQ6ICdMdC5HaWxsZW5vcm1hbmQnLCB4OiA1NDMuMjc0OTYxMTM5NDU1LCB5OiAyMjMuNjgxODQyODUxODA5NzYsIGdyb3VwOiA1IH0sXHJcbiAgICAgICAgeyBpZDogJ01hcml1cycsIHg6IDU3NC4yNTc2Njk5MDU2MTM5LCB5OiAyODMuODUyMTE3MDgzMTAzMzQsIGdyb3VwOiA4IH0sXHJcbiAgICAgICAgeyBpZDogJ0Jhcm9uZXNzVCcsIHg6IDU3My43MTQwOTA5NjUwNjI1LCB5OiAyNDUuNTkzMTE5MDkyNDU4MTgsIGdyb3VwOiA1IH0sXHJcbiAgICAgICAgeyBpZDogJ01hYmV1ZicsIHg6IDYyOC41NDMyNTMyNDg2MTkxLCB5OiAzMTQuMjIwNzg0MDg2MjcxNjQsIGdyb3VwOiA4IH0sXHJcbiAgICAgICAgeyBpZDogJ0Vuam9scmFzJywgeDogNTg4LjIzOTU0OTgwOTM2MjYsIHk6IDM0Mi4wNTk0NDY5OTIzMjc5LCBncm91cDogOCB9LFxyXG4gICAgICAgIHsgaWQ6ICdDb21iZWZlcnJlJywgeDogNjM3LjczNzA2NjQ2MTQ2MzcsIHk6IDM1MS42OTIzNTc2Mjc4ODM5NSwgZ3JvdXA6IDggfSxcclxuICAgICAgICB7IGlkOiAnUHJvdXZhaXJlJywgeDogNjUwLjg4MzM1MjI4Njk5MDMsIHk6IDM4Ni44MzkxODEwMzUwOTkxNiwgZ3JvdXA6IDggfSxcclxuICAgICAgICB7IGlkOiAnRmV1aWxseScsIHg6IDYyNi44NTU2NjA2NDM4MTA5LCB5OiAzNjUuOTA4NDE2NDU5MzE0MSwgZ3JvdXA6IDggfSxcclxuICAgICAgICB7IGlkOiAnQ291cmZleXJhYycsIHg6IDYyOC4zNDQ4OTg5OTc1MDEzLCB5OiAzMzYuNzY2NjQ1NDExOTAyMiwgZ3JvdXA6IDggfSxcclxuICAgICAgICB7IGlkOiAnQmFob3JlbCcsIHg6IDY1Ni43NzE3NzcyNzY0OTg1LCB5OiAzNjIuNTg4NTg4MjUwOTE4OSwgZ3JvdXA6IDggfSxcclxuICAgICAgICB7IGlkOiAnQm9zc3VldCcsIHg6IDU5OS4wMTg1NzY1NzQzMTA3LCB5OiAzNjMuODI4NjcyMzQwNzA1MywgZ3JvdXA6IDggfSxcclxuICAgICAgICB7IGlkOiAnSm9seScsIHg6IDY1Ni42MTgyOTIzNzM1NDA4LCB5OiAzNDMuMjM3NTczMzU1OTE2NSwgZ3JvdXA6IDggfSxcclxuICAgICAgICB7IGlkOiAnR3JhbnRhaXJlJywgeDogNjM4LjQzNzU4NTUzMTQ5ODgsIHk6IDQwMi40Mzg3MjUwMzc4OTk1LCBncm91cDogOCB9LFxyXG4gICAgICAgIHsgaWQ6ICdNb3RoZXJQbHV0YXJjaCcsIHg6IDY2NC41NTY3MjM4NjE4ODMsIHk6IDI5OC4wMzM2OTY0NTI2Nzg2LCBncm91cDogOSB9LFxyXG4gICAgICAgIHsgaWQ6ICdHdWV1bGVtZXInLCB4OiA1MDguMTY0NTA1MjU4MTc4MDUsIHk6IDMzMC40NTAyOTA3NDQ0MzY3LCBncm91cDogNCB9LFxyXG4gICAgICAgIHsgaWQ6ICdCYWJldCcsIHg6IDQ5Mi41NjAwNTI3OTg4MjA5NSwgeTogMzI1Ljk4MzQwOTI4NDg0MjcsIGdyb3VwOiA0IH0sXHJcbiAgICAgICAgeyBpZDogJ0NsYXF1ZXNvdXMnLCB4OiA1MTAuOTM4NTU1MDYyNTAwNzcsIHk6IDMwOS4yODY5MzgwNjk3MzI4LCBncm91cDogNCB9LFxyXG4gICAgICAgIHsgaWQ6ICdNb250cGFybmFzc2UnLCB4OiA1MDIuNzE5MDg5NDE3MzU1NywgeTogMzUwLjkyNzUxODMxMzM0MzgsIGdyb3VwOiA0IH0sXHJcbiAgICAgICAgeyBpZDogJ1RvdXNzYWludCcsIHg6IDQ0NS4xMjU0ODAyMDU2ODA3LCB5OiAyNjYuNDYyNDI2NjUwMjIwMDQsIGdyb3VwOiA1IH0sXHJcbiAgICAgICAgeyBpZDogJ0NoaWxkMScsIHg6IDU4OC4wMzUxNTUyMzg2OTYxLCB5OiA0MTAuMjE5NTU1NTk2MTk5NiwgZ3JvdXA6IDEwIH0sXHJcbiAgICAgICAgeyBpZDogJ0NoaWxkMicsIHg6IDU1OS4yNzc3ODE0NzgyNzA1LCB5OiA0MDguMzUzMzE4NDg5MzU2OSwgZ3JvdXA6IDEwIH0sXHJcbiAgICAgICAgeyBpZDogJ0JydWpvbicsIHg6IDUzNy4xNzg3MzgzOTA0NjU2LCB5OiAzMzcuODY5MjI3NzU5MTc5NDcsIGdyb3VwOiA0IH0sXHJcbiAgICAgICAgeyBpZDogJ01tZS5IdWNoZWxvdXAnLCB4OiA2MjYuMzc3NTg1MDQ2NjE2NCwgeTogMzg0LjM1MjAyMDY2ODk0NTE2LCBncm91cDogOCB9XHJcbiAgICBdLFxyXG5cclxuICAgIGxpbmtzOiBbXHJcbiAgICAgICAgeyBzb3VyY2U6ICdOYXBvbGVvbicsIHRhcmdldDogJ015cmllbCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbGxlLkJhcHRpc3RpbmUnLCB0YXJnZXQ6ICdNeXJpZWwnLCB2YWx1ZTogOCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLk1hZ2xvaXJlJywgdGFyZ2V0OiAnTXlyaWVsJywgdmFsdWU6IDEwIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuTWFnbG9pcmUnLCB0YXJnZXQ6ICdNbGxlLkJhcHRpc3RpbmUnLCB2YWx1ZTogNiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ291bnRlc3NkZUxvJywgdGFyZ2V0OiAnTXlyaWVsJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dlYm9yYW5kJywgdGFyZ2V0OiAnTXlyaWVsJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NoYW1wdGVyY2llcicsIHRhcmdldDogJ015cmllbCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDcmF2YXR0ZScsIHRhcmdldDogJ015cmllbCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3VudCcsIHRhcmdldDogJ015cmllbCcsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdPbGRNYW4nLCB0YXJnZXQ6ICdNeXJpZWwnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnVmFsamVhbicsIHRhcmdldDogJ0xhYmFycmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnVmFsamVhbicsIHRhcmdldDogJ01tZS5NYWdsb2lyZScsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdWYWxqZWFuJywgdGFyZ2V0OiAnTWxsZS5CYXB0aXN0aW5lJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1ZhbGplYW4nLCB0YXJnZXQ6ICdNeXJpZWwnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFyZ3Vlcml0ZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLmRlUicsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSXNhYmVhdScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR2VydmFpcycsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTGlzdG9saWVyJywgdGFyZ2V0OiAnVGhvbG9teWVzJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhbWV1aWwnLCB0YXJnZXQ6ICdUaG9sb215ZXMnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmFtZXVpbCcsIHRhcmdldDogJ0xpc3RvbGllcicsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCbGFjaGV2aWxsZScsIHRhcmdldDogJ1Rob2xvbXllcycsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCbGFjaGV2aWxsZScsIHRhcmdldDogJ0xpc3RvbGllcicsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCbGFjaGV2aWxsZScsIHRhcmdldDogJ0ZhbWV1aWwnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmF2b3VyaXRlJywgdGFyZ2V0OiAnVGhvbG9teWVzJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Zhdm91cml0ZScsIHRhcmdldDogJ0xpc3RvbGllcicsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYXZvdXJpdGUnLCB0YXJnZXQ6ICdGYW1ldWlsJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Zhdm91cml0ZScsIHRhcmdldDogJ0JsYWNoZXZpbGxlJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0RhaGxpYScsIHRhcmdldDogJ1Rob2xvbXllcycsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdEYWhsaWEnLCB0YXJnZXQ6ICdMaXN0b2xpZXInLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRGFobGlhJywgdGFyZ2V0OiAnRmFtZXVpbCcsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdEYWhsaWEnLCB0YXJnZXQ6ICdCbGFjaGV2aWxsZScsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdEYWhsaWEnLCB0YXJnZXQ6ICdGYXZvdXJpdGUnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnWmVwaGluZScsIHRhcmdldDogJ1Rob2xvbXllcycsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdaZXBoaW5lJywgdGFyZ2V0OiAnTGlzdG9saWVyJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1plcGhpbmUnLCB0YXJnZXQ6ICdGYW1ldWlsJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1plcGhpbmUnLCB0YXJnZXQ6ICdCbGFjaGV2aWxsZScsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdaZXBoaW5lJywgdGFyZ2V0OiAnRmF2b3VyaXRlJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1plcGhpbmUnLCB0YXJnZXQ6ICdEYWhsaWEnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmFudGluZScsIHRhcmdldDogJ1Rob2xvbXllcycsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYW50aW5lJywgdGFyZ2V0OiAnTGlzdG9saWVyJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhbnRpbmUnLCB0YXJnZXQ6ICdGYW1ldWlsJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhbnRpbmUnLCB0YXJnZXQ6ICdCbGFjaGV2aWxsZScsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYW50aW5lJywgdGFyZ2V0OiAnRmF2b3VyaXRlJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhbnRpbmUnLCB0YXJnZXQ6ICdEYWhsaWEnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmFudGluZScsIHRhcmdldDogJ1plcGhpbmUnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmFudGluZScsIHRhcmdldDogJ01hcmd1ZXJpdGUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmFudGluZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogOSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLlRoZW5hcmRpZXInLCB0YXJnZXQ6ICdGYW50aW5lJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5UaGVuYXJkaWVyJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiA3IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdUaGVuYXJkaWVyJywgdGFyZ2V0OiAnTW1lLlRoZW5hcmRpZXInLCB2YWx1ZTogMTMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1RoZW5hcmRpZXInLCB0YXJnZXQ6ICdGYW50aW5lJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1RoZW5hcmRpZXInLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3NldHRlJywgdGFyZ2V0OiAnTW1lLlRoZW5hcmRpZXInLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29zZXR0ZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMzEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Nvc2V0dGUnLCB0YXJnZXQ6ICdUaG9sb215ZXMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29zZXR0ZScsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSmF2ZXJ0JywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxNyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSmF2ZXJ0JywgdGFyZ2V0OiAnRmFudGluZScsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKYXZlcnQnLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0phdmVydCcsIHRhcmdldDogJ01tZS5UaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0phdmVydCcsIHRhcmdldDogJ0Nvc2V0dGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmF1Y2hlbGV2ZW50JywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiA4IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYXVjaGVsZXZlbnQnLCB0YXJnZXQ6ICdKYXZlcnQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFtYXRhYm9pcycsIHRhcmdldDogJ0ZhbnRpbmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFtYXRhYm9pcycsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYW1hdGFib2lzJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdQZXJwZXR1ZScsIHRhcmdldDogJ0ZhbnRpbmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnU2ltcGxpY2UnLCB0YXJnZXQ6ICdQZXJwZXR1ZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdTaW1wbGljZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnU2ltcGxpY2UnLCB0YXJnZXQ6ICdGYW50aW5lJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1NpbXBsaWNlJywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1NjYXVmZmxhaXJlJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdXb21hbjEnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1dvbWFuMScsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKdWRnZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSnVkZ2UnLCB0YXJnZXQ6ICdCYW1hdGFib2lzJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NoYW1wbWF0aGlldScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hhbXBtYXRoaWV1JywgdGFyZ2V0OiAnSnVkZ2UnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hhbXBtYXRoaWV1JywgdGFyZ2V0OiAnQmFtYXRhYm9pcycsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCcmV2ZXQnLCB0YXJnZXQ6ICdKdWRnZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCcmV2ZXQnLCB0YXJnZXQ6ICdDaGFtcG1hdGhpZXUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQnJldmV0JywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCcmV2ZXQnLCB0YXJnZXQ6ICdCYW1hdGFib2lzJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NoZW5pbGRpZXUnLCB0YXJnZXQ6ICdKdWRnZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDaGVuaWxkaWV1JywgdGFyZ2V0OiAnQ2hhbXBtYXRoaWV1JywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NoZW5pbGRpZXUnLCB0YXJnZXQ6ICdCcmV2ZXQnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hlbmlsZGlldScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hlbmlsZGlldScsIHRhcmdldDogJ0JhbWF0YWJvaXMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29jaGVwYWlsbGUnLCB0YXJnZXQ6ICdKdWRnZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb2NoZXBhaWxsZScsIHRhcmdldDogJ0NoYW1wbWF0aGlldScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb2NoZXBhaWxsZScsIHRhcmdldDogJ0JyZXZldCcsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb2NoZXBhaWxsZScsIHRhcmdldDogJ0NoZW5pbGRpZXUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29jaGVwYWlsbGUnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvY2hlcGFpbGxlJywgdGFyZ2V0OiAnQmFtYXRhYm9pcycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdQb250bWVyY3knLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JvdWxhdHJ1ZWxsZScsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRXBvbmluZScsIHRhcmdldDogJ01tZS5UaGVuYXJkaWVyJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Vwb25pbmUnLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0FuemVsbWEnLCB0YXJnZXQ6ICdFcG9uaW5lJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0FuemVsbWEnLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0FuemVsbWEnLCB0YXJnZXQ6ICdNbWUuVGhlbmFyZGllcicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdXb21hbjInLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1dvbWFuMicsIHRhcmdldDogJ0Nvc2V0dGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnV29tYW4yJywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01vdGhlcklubm9jZW50JywgdGFyZ2V0OiAnRmF1Y2hlbGV2ZW50JywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01vdGhlcklubm9jZW50JywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHcmliaWVyJywgdGFyZ2V0OiAnRmF1Y2hlbGV2ZW50JywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5CdXJnb24nLCB0YXJnZXQ6ICdKb25kcmV0dGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR2F2cm9jaGUnLCB0YXJnZXQ6ICdNbWUuQnVyZ29uJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dhdnJvY2hlJywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHYXZyb2NoZScsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHYXZyb2NoZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR2lsbGVub3JtYW5kJywgdGFyZ2V0OiAnQ29zZXR0ZScsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHaWxsZW5vcm1hbmQnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hZ25vbicsIHRhcmdldDogJ0dpbGxlbm9ybWFuZCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYWdub24nLCB0YXJnZXQ6ICdNbWUuVGhlbmFyZGllcicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbGxlLkdpbGxlbm9ybWFuZCcsIHRhcmdldDogJ0dpbGxlbm9ybWFuZCcsIHZhbHVlOiA5IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbGxlLkdpbGxlbm9ybWFuZCcsIHRhcmdldDogJ0Nvc2V0dGUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWxsZS5HaWxsZW5vcm1hbmQnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5Qb250bWVyY3knLCB0YXJnZXQ6ICdNbGxlLkdpbGxlbm9ybWFuZCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuUG9udG1lcmN5JywgdGFyZ2V0OiAnUG9udG1lcmN5JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01sbGUuVmF1Ym9pcycsIHRhcmdldDogJ01sbGUuR2lsbGVub3JtYW5kJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0x0LkdpbGxlbm9ybWFuZCcsIHRhcmdldDogJ01sbGUuR2lsbGVub3JtYW5kJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0x0LkdpbGxlbm9ybWFuZCcsIHRhcmdldDogJ0dpbGxlbm9ybWFuZCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdMdC5HaWxsZW5vcm1hbmQnLCB0YXJnZXQ6ICdDb3NldHRlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ01sbGUuR2lsbGVub3JtYW5kJywgdmFsdWU6IDYgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ0dpbGxlbm9ybWFuZCcsIHZhbHVlOiAxMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFyaXVzJywgdGFyZ2V0OiAnUG9udG1lcmN5JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ0x0LkdpbGxlbm9ybWFuZCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJpdXMnLCB0YXJnZXQ6ICdDb3NldHRlJywgdmFsdWU6IDIxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJpdXMnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDE5IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJpdXMnLCB0YXJnZXQ6ICdUaG9sb215ZXMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFyaXVzJywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJpdXMnLCB0YXJnZXQ6ICdFcG9uaW5lJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Jhcm9uZXNzVCcsIHRhcmdldDogJ0dpbGxlbm9ybWFuZCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYXJvbmVzc1QnLCB0YXJnZXQ6ICdNYXJpdXMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFiZXVmJywgdGFyZ2V0OiAnTWFyaXVzJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hYmV1ZicsIHRhcmdldDogJ0Vwb25pbmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFiZXVmJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRW5qb2xyYXMnLCB0YXJnZXQ6ICdNYXJpdXMnLCB2YWx1ZTogNyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRW5qb2xyYXMnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiA3IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdFbmpvbHJhcycsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdFbmpvbHJhcycsIHRhcmdldDogJ01hYmV1ZicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdFbmpvbHJhcycsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29tYmVmZXJyZScsIHRhcmdldDogJ0Vuam9scmFzJywgdmFsdWU6IDE1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb21iZWZlcnJlJywgdGFyZ2V0OiAnTWFyaXVzJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvbWJlZmVycmUnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb21iZWZlcnJlJywgdGFyZ2V0OiAnTWFiZXVmJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1Byb3V2YWlyZScsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1Byb3V2YWlyZScsIHRhcmdldDogJ0Vuam9scmFzJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1Byb3V2YWlyZScsIHRhcmdldDogJ0NvbWJlZmVycmUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmV1aWxseScsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZldWlsbHknLCB0YXJnZXQ6ICdFbmpvbHJhcycsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGZXVpbGx5JywgdGFyZ2V0OiAnUHJvdXZhaXJlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZldWlsbHknLCB0YXJnZXQ6ICdDb21iZWZlcnJlJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZldWlsbHknLCB0YXJnZXQ6ICdNYWJldWYnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmV1aWxseScsIHRhcmdldDogJ01hcml1cycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3VyZmV5cmFjJywgdGFyZ2V0OiAnTWFyaXVzJywgdmFsdWU6IDkgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvdXJmZXlyYWMnLCB0YXJnZXQ6ICdFbmpvbHJhcycsIHZhbHVlOiAxNyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ291cmZleXJhYycsIHRhcmdldDogJ0NvbWJlZmVycmUnLCB2YWx1ZTogMTMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvdXJmZXlyYWMnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiA3IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3VyZmV5cmFjJywgdGFyZ2V0OiAnTWFiZXVmJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvdXJmZXlyYWMnLCB0YXJnZXQ6ICdFcG9uaW5lJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvdXJmZXlyYWMnLCB0YXJnZXQ6ICdGZXVpbGx5JywgdmFsdWU6IDYgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvdXJmZXlyYWMnLCB0YXJnZXQ6ICdQcm91dmFpcmUnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFob3JlbCcsIHRhcmdldDogJ0NvbWJlZmVycmUnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFob3JlbCcsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhaG9yZWwnLCB0YXJnZXQ6ICdDb3VyZmV5cmFjJywgdmFsdWU6IDYgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhaG9yZWwnLCB0YXJnZXQ6ICdNYWJldWYnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFob3JlbCcsIHRhcmdldDogJ0Vuam9scmFzJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhaG9yZWwnLCB0YXJnZXQ6ICdGZXVpbGx5JywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhaG9yZWwnLCB0YXJnZXQ6ICdQcm91dmFpcmUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFob3JlbCcsIHRhcmdldDogJ01hcml1cycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCb3NzdWV0JywgdGFyZ2V0OiAnTWFyaXVzJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Jvc3N1ZXQnLCB0YXJnZXQ6ICdDb3VyZmV5cmFjJywgdmFsdWU6IDEyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCb3NzdWV0JywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQm9zc3VldCcsIHRhcmdldDogJ0JhaG9yZWwnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQm9zc3VldCcsIHRhcmdldDogJ0Vuam9scmFzJywgdmFsdWU6IDEwIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCb3NzdWV0JywgdGFyZ2V0OiAnRmV1aWxseScsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCb3NzdWV0JywgdGFyZ2V0OiAnUHJvdXZhaXJlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Jvc3N1ZXQnLCB0YXJnZXQ6ICdDb21iZWZlcnJlJywgdmFsdWU6IDkgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Jvc3N1ZXQnLCB0YXJnZXQ6ICdNYWJldWYnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQm9zc3VldCcsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSm9seScsIHRhcmdldDogJ0JhaG9yZWwnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSm9seScsIHRhcmdldDogJ0Jvc3N1ZXQnLCB2YWx1ZTogNyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSm9seScsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0pvbHknLCB0YXJnZXQ6ICdDb3VyZmV5cmFjJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0pvbHknLCB0YXJnZXQ6ICdFbmpvbHJhcycsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKb2x5JywgdGFyZ2V0OiAnRmV1aWxseScsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKb2x5JywgdGFyZ2V0OiAnUHJvdXZhaXJlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0pvbHknLCB0YXJnZXQ6ICdDb21iZWZlcnJlJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0pvbHknLCB0YXJnZXQ6ICdNYWJldWYnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSm9seScsIHRhcmdldDogJ01hcml1cycsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHcmFudGFpcmUnLCB0YXJnZXQ6ICdCb3NzdWV0JywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dyYW50YWlyZScsIHRhcmdldDogJ0Vuam9scmFzJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dyYW50YWlyZScsIHRhcmdldDogJ0NvbWJlZmVycmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3JhbnRhaXJlJywgdGFyZ2V0OiAnQ291cmZleXJhYycsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHcmFudGFpcmUnLCB0YXJnZXQ6ICdKb2x5JywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dyYW50YWlyZScsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dyYW50YWlyZScsIHRhcmdldDogJ0JhaG9yZWwnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3JhbnRhaXJlJywgdGFyZ2V0OiAnRmV1aWxseScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHcmFudGFpcmUnLCB0YXJnZXQ6ICdQcm91dmFpcmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW90aGVyUGx1dGFyY2gnLCB0YXJnZXQ6ICdNYWJldWYnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3VldWxlbWVyJywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHdWV1bGVtZXInLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0d1ZXVsZW1lcicsIHRhcmdldDogJ01tZS5UaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0d1ZXVsZW1lcicsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHdWV1bGVtZXInLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHdWV1bGVtZXInLCB0YXJnZXQ6ICdFcG9uaW5lJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhYmV0JywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWJldCcsIHRhcmdldDogJ0d1ZXVsZW1lcicsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWJldCcsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFiZXQnLCB0YXJnZXQ6ICdNbWUuVGhlbmFyZGllcicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWJldCcsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWJldCcsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhYmV0JywgdGFyZ2V0OiAnRXBvbmluZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDbGFxdWVzb3VzJywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDbGFxdWVzb3VzJywgdGFyZ2V0OiAnQmFiZXQnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2xhcXVlc291cycsIHRhcmdldDogJ0d1ZXVsZW1lcicsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDbGFxdWVzb3VzJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDbGFxdWVzb3VzJywgdGFyZ2V0OiAnTW1lLlRoZW5hcmRpZXInLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2xhcXVlc291cycsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDbGFxdWVzb3VzJywgdGFyZ2V0OiAnRXBvbmluZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDbGFxdWVzb3VzJywgdGFyZ2V0OiAnRW5qb2xyYXMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW9udHBhcm5hc3NlJywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01vbnRwYXJuYXNzZScsIHRhcmdldDogJ0JhYmV0JywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01vbnRwYXJuYXNzZScsIHRhcmdldDogJ0d1ZXVsZW1lcicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNb250cGFybmFzc2UnLCB0YXJnZXQ6ICdDbGFxdWVzb3VzJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01vbnRwYXJuYXNzZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW9udHBhcm5hc3NlJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW9udHBhcm5hc3NlJywgdGFyZ2V0OiAnRXBvbmluZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNb250cGFybmFzc2UnLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1RvdXNzYWludCcsIHRhcmdldDogJ0Nvc2V0dGUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnVG91c3NhaW50JywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1RvdXNzYWludCcsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hpbGQxJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hpbGQyJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hpbGQyJywgdGFyZ2V0OiAnQ2hpbGQxJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JydWpvbicsIHRhcmdldDogJ0JhYmV0JywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JydWpvbicsIHRhcmdldDogJ0d1ZXVsZW1lcicsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCcnVqb24nLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JydWpvbicsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JydWpvbicsIHRhcmdldDogJ0Vwb25pbmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQnJ1am9uJywgdGFyZ2V0OiAnQ2xhcXVlc291cycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCcnVqb24nLCB0YXJnZXQ6ICdNb250cGFybmFzc2UnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLkh1Y2hlbG91cCcsIHRhcmdldDogJ0Jvc3N1ZXQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLkh1Y2hlbG91cCcsIHRhcmdldDogJ0pvbHknLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLkh1Y2hlbG91cCcsIHRhcmdldDogJ0dyYW50YWlyZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuSHVjaGVsb3VwJywgdGFyZ2V0OiAnQmFob3JlbCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuSHVjaGVsb3VwJywgdGFyZ2V0OiAnQ291cmZleXJhYycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuSHVjaGVsb3VwJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLkh1Y2hlbG91cCcsIHRhcmdldDogJ0Vuam9scmFzJywgdmFsdWU6IDEgfVxyXG4gICAgXVxyXG59XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIFhpYW9kb25nIFpoYW8gPHpoYW94aWFvZG9uZ0B6anUuZWR1LmNuPlxyXG4gKiBAZGVzY3JpcHRpb24gUGF0ZW50cyBkYXRhc2V0LCBmcm9tIGh0dHBzOi8vd3d3LnBhdGVudHN2aWV3Lm9yZy93ZWIvI3Zpei9yZWxhdGlvbnNoaXBzXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhdGVudHMgPSB7XHJcbiAgICBub2RlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjUxNjIyNycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSZWNoYXJnZWFibGUgc3BpbmFsIGNvcmQgc3RpbXVsYXRvciBzeXN0ZW0nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzNjMsXHJcbiAgICAgICAgICAgIHg6IC0xNDYuNTA3MjI3NzIyMDY0MTYsXHJcbiAgICAgICAgICAgIHk6IDIzNy43ODk4ODQ4ODY0MTgyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY1MzU5MDknLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3lzdGVtIGFuZCBtZXRob2QgZm9yIHJlY29yZCBhbmQgcGxheWJhY2sgb2YgY29sbGFib3JhdGl2ZSBXZWIgYnJvd3Npbmcgc2Vzc2lvbicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTQzOCxcclxuICAgICAgICAgICAgeDogMzAxLjA4ODA4NDA3NDAxNzgsXHJcbiAgICAgICAgICAgIHk6IDc4LjM1NDQ5MTkxNTg3NTRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjU0OTkwOCcsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnTWV0aG9kcyBhbmQgYXBwYXJhdHVzIGZvciBpbnRlcnByZXRpbmcgdXNlciBzZWxlY3Rpb25zIGluIHRoZSBjb250ZXh0IG9mIGEgcmVsYXRpb24gZGlzdHJpYnV0ZWQgYXMgYSBzZXQgb2Ygb3J0aG9nb25hbGl6ZWQgc3ViLXJlbGF0aW9ucycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI2OCxcclxuICAgICAgICAgICAgeDogLTEzLjgxNDg1NjU5MDc0MTIwMixcclxuICAgICAgICAgICAgeTogLTE4My41NTAxNjc5MzUwMjc0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY1NTM1NjMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRGV2ZWxvcG1lbnQgdG9vbCwgbWV0aG9kLCBhbmQgc3lzdGVtIGZvciBjbGllbnQgc2VydmVyIGFwcGxpY2F0aW9ucycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM1MSxcclxuICAgICAgICAgICAgeDogLTAuNTIyNDMxMjc5MDE0Mjc3NyxcclxuICAgICAgICAgICAgeTogLTI0Ny4xNDk1Nzc5NjI3Mjc5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY1NTgzMjAnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ0hhbmRoZWxkIHBlcnNvbmFsIGRhdGEgYXNzaXN0YW50IChQREEpIHdpdGggYSBtZWRpY2FsIGRldmljZSBhbmQgbWV0aG9kIG9mIHVzaW5nIHRoZSBzYW1lJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNTE0LFxyXG4gICAgICAgICAgICB4OiAtMjA0LjY0MDcxODk0NjU0Nzg4LFxyXG4gICAgICAgICAgICB5OiA3MS41NzA1NTI4NDUxMjMxMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NTU4MzUxJyxcclxuICAgICAgICAgICAgbmFtZTogJ0Nsb3NlZCBsb29wIHN5c3RlbSBmb3IgY29udHJvbGxpbmcgaW5zdWxpbiBpbmZ1c2lvbicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM2OSxcclxuICAgICAgICAgICAgeDogLTIxMi45NzgxNjAwMDIxOTM4NyxcclxuICAgICAgICAgICAgeTogMTQuNzE1NjQwNTM0MTcwMDlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjU2MDQ2MScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBdXRob3JpemVkIGxvY2F0aW9uIHJlcG9ydGluZyBwYWdpbmcgc3lzdGVtJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNDc5LFxyXG4gICAgICAgICAgICB4OiAtMjUwLjQzNTQzMDYyOTA1MDkzLFxyXG4gICAgICAgICAgICB5OiAtMTkxLjQzNzIwMDYyNDA2MDM4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY1NjMxNzQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVGhpbiBmaWxtIHRyYW5zaXN0b3IgYW5kIG1hdHJpeCBkaXNwbGF5IGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzI4NCxcclxuICAgICAgICAgICAgeDogLTEyLjU4ODI0OTUwMzY1MjQwMSxcclxuICAgICAgICAgICAgeTogLTMuNjA2NjM4OTI1MDc0OTUyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY1NjU1MDknLFxyXG4gICAgICAgICAgICBuYW1lOiAnQW5hbHl0ZSBtb25pdG9yaW5nIGRldmljZSBhbmQgbWV0aG9kcyBvZiB1c2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzMzMsXHJcbiAgICAgICAgICAgIHg6IC0xMDUuMjU1MTE2MTIzNjIwNDUsXHJcbiAgICAgICAgICAgIHk6IDE1Ny4xMTcxMzM2MDYwMjYyMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NTcxMjgyJyxcclxuICAgICAgICAgICAgbmFtZTogJ0Jsb2NrLWJhc2VkIGNvbW11bmljYXRpb24gaW4gYSBjb21tdW5pY2F0aW9uIHNlcnZpY2VzIHBhdHRlcm5zIGVudmlyb25tZW50JyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNDY3LFxyXG4gICAgICAgICAgICB4OiAxMzkuNjY5NzQ2NzQ4MjgxLFxyXG4gICAgICAgICAgICB5OiAyNTMuMDE0MDY1MDE0NzE5NDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjU3NDYzNScsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnQXBwbGljYXRpb24gaW5zdGFudGlhdGlvbiBiYXNlZCB1cG9uIGF0dHJpYnV0ZXMgYW5kIHZhbHVlcyBzdG9yZWQgaW4gYSBtZXRhIGRhdGEgcmVwb3NpdG9yeSwgaW5jbHVkaW5nIHRpZXJpbmcgb2YgYXBwbGljYXRpb24gbGF5ZXJzIG9iamVjdHMgYW5kIGNvbXBvbmVudHMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzNjgsXHJcbiAgICAgICAgICAgIHg6IDExLjAwMjAyNzYyNzc4MjExNixcclxuICAgICAgICAgICAgeTogLTIzNC45MTgwNTI5ODMyMzU4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY1Nzc3MjYnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ29tcHV0ZXIgdGVsZXBob255IGludGVncmF0aW9uIGhvdGVsbGluZyBtZXRob2QgYW5kIHN5c3RlbScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI3MCxcclxuICAgICAgICAgICAgeDogLTg3LjE5MTUzMjQ1ODQxMjYyLFxyXG4gICAgICAgICAgICB5OiAtMTczLjk3NjQ0NzU1OTI5Mjg0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY1ODc4MzUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU2hvcHBpbmcgYXNzaXN0YW5jZSB3aXRoIGhhbmRoZWxkIGNvbXB1dGluZyBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE0NzEsXHJcbiAgICAgICAgICAgIHg6IC0yNzkuMjg2NTgxMzM3ODQ2NSxcclxuICAgICAgICAgICAgeTogMTEwLjE1ODc5MTI1MDE1MDdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjYwMTA4NycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdJbnN0YW50IGRvY3VtZW50IHNoYXJpbmcnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzOTcsXHJcbiAgICAgICAgICAgIHg6IDIxMC45NDgyMTM1MDEzNzE4NCxcclxuICAgICAgICAgICAgeTogOTIuNTMxODg3ODY5MTE0MDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjYwMjI1MicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDb21iaW5lZCBkaXNzZWN0aW5nLCBjYXV0ZXJpemluZywgYW5kIHN0YXBsaW5nIGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTUwMyxcclxuICAgICAgICAgICAgeDogMTQ3Ljk0OTc3MTY1MDQzMjU4LFxyXG4gICAgICAgICAgICB5OiAxNzAuMDg4ODg4NTU2MzEzMDdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjYwNDExNycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNZXRob2Qgb2YgbWFpbnRhaW5pbmcgYSBuZXR3b3JrIG9mIHBhcnRpYWxseSByZXBsaWNhdGVkIGRhdGFiYXNlIHN5c3RlbScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI2MSxcclxuICAgICAgICAgICAgeDogLTAuODg4NTU1ODAyNzQyMDM1LFxyXG4gICAgICAgICAgICB5OiAtMjE4LjIzMDQ4ODIwMzA3MjI3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2MDQxMjgnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWV0aG9kIGFuZCBzeXN0ZW0gZm9yIGRpc3RyaWJ1dGluZyBvYmplY3RzIG92ZXIgYSBuZXR3b3JrJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjYxLFxyXG4gICAgICAgICAgICB4OiAtNTYuNzM4NzI3NDIxMjA4NDEsXHJcbiAgICAgICAgICAgIHk6IC0yNDMuMzQ4Mzg0MTA2NjQ0M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NjA2NzQ0JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdQcm92aWRpbmcgY29sbGFib3JhdGl2ZSBpbnN0YWxsYXRpb24gbWFuYWdlbWVudCBpbiBhIG5ldHdvcmstYmFzZWQgc3VwcGx5IGNoYWluIGVudmlyb25tZW50JyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjcxLFxyXG4gICAgICAgICAgICB4OiAxNTMuOTk0ODI1MTg1MDM5NyxcclxuICAgICAgICAgICAgeTogMjMxLjQ2NTc5ODg4MTIwMjcyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2MDkxNTAnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1dlYiBjbGllbnQtc2VydmVyIHN5c3RlbSBhbmQgbWV0aG9kIGZvciBpbmNvbXBhdGlibGUgcGFnZSBtYXJrdXAgYW5kIHByZXNlbnRhdGlvbiBsYW5ndWFnZXMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzMzYsXHJcbiAgICAgICAgICAgIHg6IDEzLjE4Mjg2NzYwNzMyMTI1NSxcclxuICAgICAgICAgICAgeTogLTE4NC44MzQyNjQzMTg4MTU3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2MjE4MzQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3lzdGVtIGFuZCBtZXRob2QgZm9yIHZvaWNlIHRyYW5zbWlzc2lvbiBvdmVyIG5ldHdvcmsgcHJvdG9jb2xzJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjY1LFxyXG4gICAgICAgICAgICB4OiA4NS4wODIyODE0OTM0NDM2OSxcclxuICAgICAgICAgICAgeTogMTA1LjQzNDY0NTcxMjMyODk2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2NDE1MzMnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ0hhbmRoZWxkIHBlcnNvbmFsIGRhdGEgYXNzaXN0YW50IChQREEpIHdpdGggYSBtZWRpY2FsIGRldmljZSBhbmQgbWV0aG9kIG9mIHVzaW5nIHRoZSBzYW1lJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNDMxLFxyXG4gICAgICAgICAgICB4OiAtMjE4LjA5NzY2MTE4MDAxMjI0LFxyXG4gICAgICAgICAgICB5OiAzOS44NTc2MDAzNTc5Nzk4OVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NjQ0NTMyJyxcclxuICAgICAgICAgICAgbmFtZTogJ1N1cmdpY2FsIHN0YXBsaW5nIGFwcGFyYXR1cycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI2NyxcclxuICAgICAgICAgICAgeDogMzA0LjY2MzA5MjUzMTYyOTQsXHJcbiAgICAgICAgICAgIHk6IC0yOS43MDk2MTE1NzM0OTEzOTdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjY1NDAzMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdJbnN0YW50IHNoYXJpbmcgb2YgZG9jdW1lbnRzIG9uIGEgcmVtb3RlIHNlcnZlcicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTQxMyxcclxuICAgICAgICAgICAgeDogMTU5LjMwMDUwMzU1Mjk2MDE1LFxyXG4gICAgICAgICAgICB5OiAxMDguOTgzODk1ODU2MjcwMDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjY1NjE5MycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEZXZpY2UgZm9yIGF0dGFjaG1lbnQgb2YgYnV0dHJlc3MgbWF0ZXJpYWwgdG8gYSBzdXJnaWNhbCBmYXN0ZW5pbmcgZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjc5LFxyXG4gICAgICAgICAgICB4OiAxMTYuOTA5MTQxNTMxNTg1OTcsXHJcbiAgICAgICAgICAgIHk6IC03OC43NjYyNjkzNjg1ODU1N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NjY1NjQ4JyxcclxuICAgICAgICAgICAgbmFtZTogJ1N0YXRlIG1vZGVscyBmb3IgbW9uaXRvcmluZyBwcm9jZXNzJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjg4LFxyXG4gICAgICAgICAgICB4OiAtMTkuNzUxODUyNzM5MzUzNzQsXHJcbiAgICAgICAgICAgIHk6IC0xMjYuNjUzMzg5MTIyNjk5MjhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjY2NTY1NScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdJbXBsaWNpdCByYXRpbmcgb2YgcmV0cmlldmVkIGluZm9ybWF0aW9uIGluIGFuIGluZm9ybWF0aW9uIHNlYXJjaCBzeXN0ZW0nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyOTQsXHJcbiAgICAgICAgICAgIHg6IC0yMDUuNTEwMzYxMjE5OTQ2NyxcclxuICAgICAgICAgICAgeTogLTYyLjYxNTE3NTc3MjkyMzk3NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2Njg0NDM4JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdNZXRob2Qgb2YgdXNpbmcgY2FjaGUgdG8gZGV0ZXJtaW5lIHRoZSB2aXNpYmlsaXR5IHRvIGEgcmVtb3RlIGRhdGFiYXNlIGNsaWVudCBvZiBhIHBsdXJhbGl0eSBvZiBkYXRhYmFzZSB0cmFuc2FjdGlvbnMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNjUsXHJcbiAgICAgICAgICAgIHg6IC03MC44OTYyMTE5MDgwNTMyOSxcclxuICAgICAgICAgICAgeTogLTIxMS42NTg5ODEyNjQ2OTQ3NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NjkwMzg3JyxcclxuICAgICAgICAgICAgbmFtZTogJ1RvdWNoLXNjcmVlbiBpbWFnZSBzY3JvbGxpbmcgc3lzdGVtIGFuZCBtZXRob2QnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzNjEsXHJcbiAgICAgICAgICAgIHg6IC05Ni4wODMzMzM1ODYxMDE0LFxyXG4gICAgICAgICAgICB5OiAyNTcuMTg4NjY2MDQ0MjA5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2OTMyMzInLFxyXG4gICAgICAgICAgICBuYW1lOiAnSW5icmVkIGNvcm4gbGluZSBMSDI5NScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTU4NSxcclxuICAgICAgICAgICAgeDogMjI1LjIxMzYyMzk2NjM0MzMzLFxyXG4gICAgICAgICAgICB5OiAtMTgxLjcwMjMxMjA4NzM5MDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjY5ODY0MycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdFeHBhbmRpbmcgcGFyYWxsZWwgamF3IGRldmljZSBmb3IgdXNlIHdpdGggYW4gZWxlY3Ryb21lY2hhbmljYWwgZHJpdmVyIGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM1NSxcclxuICAgICAgICAgICAgeDogMTE2LjkzMzgwMDg4MjAwMzA4LFxyXG4gICAgICAgICAgICB5OiAyMjAuMjE0MTk3MDU0Mzk2MDdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjcxMTU2NScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNZXRob2QsIGFwcGFyYXR1cywgYW5kIHN5c3RlbSBmb3IgcHJldmlld2luZyBzZWFyY2ggcmVzdWx0cycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM4OCxcclxuICAgICAgICAgICAgeDogLTM3LjUwNDQ4MTI5MDc2NzM1LFxyXG4gICAgICAgICAgICB5OiAtMjczLjQxMTY5NTg0NzkxMzU2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3MTYyMzMnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ0VsZWN0cm9tZWNoYW5pY2FsIGRyaXZlciBhbmQgcmVtb3RlIHN1cmdpY2FsIGluc3RydW1lbnQgYXR0YWNobWVudCBoYXZpbmcgY29tcHV0ZXIgYXNzaXN0ZWQgY29udHJvbCBjYXBhYmlsaXRpZXMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNDQsXHJcbiAgICAgICAgICAgIHg6IDk5Ljk4NzQ0OTI3NzQwMTA3LFxyXG4gICAgICAgICAgICB5OiAyMTIuNTk1MjcyMjk5NjI2MDZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjcxODM2MScsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnTWV0aG9kIGFuZCBhcHBhcmF0dXMgZm9yIHJlbGlhYmxlIGFuZCBzY2FsYWJsZSBkaXN0cmlidXRpb24gb2YgZGF0YSBmaWxlcyBpbiBkaXN0cmlidXRlZCBuZXR3b3JrcycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM0OSxcclxuICAgICAgICAgICAgeDogLTIxNC40NzA2NDU0MjAwMTU1LFxyXG4gICAgICAgICAgICB5OiAxNzkuNzY0NDUzODMzMTE1NDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjcyNDM5OScsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnTWV0aG9kcyBhbmQgYXBwYXJhdHVzIGZvciBlbmFibGluZyBrZXlib2FyZCBhY2NlbGVyYXRvcnMgaW4gYXBwbGljYXRpb25zIGltcGxlbWVudGVkIHZpYSBhIGJyb3dzZXInLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNzEsXHJcbiAgICAgICAgICAgIHg6IC0zLjg2NTQzNzA5ODAzNjU5NyxcclxuICAgICAgICAgICAgeTogLTE2OC4wNDY2NTA3NTk3NzYxNlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NzI3NTIyJyxcclxuICAgICAgICAgICAgbmFtZTogJ1RyYW5zaXN0b3IgYW5kIHNlbWljb25kdWN0b3IgZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMzAxLFxyXG4gICAgICAgICAgICB4OiA0NS40OTMwMDkwODY1MzM0NzYsXHJcbiAgICAgICAgICAgIHk6IC0xOC4zOTkzMzY3NjE4NjU1NTVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjcyODcwMicsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnU3lzdGVtIGFuZCBtZXRob2QgdG8gaW1wbGVtZW50IGFuIGludGVncmF0ZWQgc2VhcmNoIGNlbnRlciBzdXBwb3J0aW5nIGEgZnVsbC10ZXh0IHNlYXJjaCBhbmQgcXVlcnkgb24gYSBkYXRhYmFzZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI5MCxcclxuICAgICAgICAgICAgeDogLTUwLjc3NjUxMjY5NjQ3OTY0LFxyXG4gICAgICAgICAgICB5OiAtMjY1LjY0Mzk0MTY2NDI2MTlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjcyODk2MCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUZWNobmlxdWVzIGZvciBtYW5hZ2luZyBtdWx0aXBsZSB0aHJlYWRzIGluIGEgYnJvd3NlciBlbnZpcm9ubWVudCcsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI4NyxcclxuICAgICAgICAgICAgeDogLTMxLjg2MDk4MjYwMDI3Mjc0LFxyXG4gICAgICAgICAgICB5OiAtMTc3LjA5NjI3OTI1MTY2MDc1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3MzIwOTUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWV0aG9kIGFuZCBhcHBhcmF0dXMgZm9yIG1hcHBpbmcgYmV0d2VlbiBYTUwgYW5kIHJlbGF0aW9uYWwgcmVwcmVzZW50YXRpb25zJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzE4LFxyXG4gICAgICAgICAgICB4OiAtNDUuMTc0MzA4MjY4Nzc1NDQsXHJcbiAgICAgICAgICAgIHk6IC0xNTIuMjM5MzgzNTUyOTg4MDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjczMjEwMCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEYXRhYmFzZSBhY2Nlc3MgbWV0aG9kIGFuZCBzeXN0ZW0gZm9yIHVzZXIgcm9sZSBkZWZpbmVkIGFjY2VzcycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM0NyxcclxuICAgICAgICAgICAgeDogLTU5LjIxMDEzNjgwNjI5MjY3NCxcclxuICAgICAgICAgICAgeTogLTE3NC44Mzg3Nzk5MDg0OTU3MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NzMyMTExJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdNZXRob2QsIGFwcGFyYXR1cywgc3lzdGVtLCBhbmQgcHJvZ3JhbSBwcm9kdWN0IGZvciBhdHRhY2hpbmcgZmlsZXMgYW5kIG90aGVyIG9iamVjdHMgdG8gYSBwYXJ0aWFsbHkgcmVwbGljYXRlZCBkYXRhYmFzZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI5NCxcclxuICAgICAgICAgICAgeDogLTkwLjczOTcwNTA0Nzk0NTEsXHJcbiAgICAgICAgICAgIHk6IC0yNDQuNzE5OTAzMjg3NzQzMTRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjc1NDY4MScsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnUGFydGlhbGx5IHJlcGxpY2F0ZWQgZGlzdHJpYnV0ZWQgZGF0YWJhc2Ugd2l0aCBtdWx0aXBsZSBsZXZlbHMgb2YgcmVtb3RlIGNsaWVudHMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNjksXHJcbiAgICAgICAgICAgIHg6IC03OS41ODA4Mzg3MDMxMjY1NSxcclxuICAgICAgICAgICAgeTogLTIyOC4xNzI0MDU0MTczODQyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3NjMzNTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWV0aG9kLCBhcHBhcmF0dXMsIGFuZCBzeXN0ZW0gZm9yIGF0dGFjaGluZyBzZWFyY2ggcmVzdWx0cycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTQ4NyxcclxuICAgICAgICAgICAgeDogLTI1LjI0MzQ3NDczMzQ5Mjc0MyxcclxuICAgICAgICAgICAgeTogLTI2My4yNTc0MDc5NDAyMTA2N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NzYzNTAxJyxcclxuICAgICAgICAgICAgbmFtZTogJ1JlbW90ZSBkb2N1bWVudCBzZXJ2aW5nJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzE5LFxyXG4gICAgICAgICAgICB4OiAxNTguMzI1MzgzNzYyMDk0MixcclxuICAgICAgICAgICAgeTogOTMuNDk1NDYyMzE1MTY5MTlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjc2ODkwNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEYXRhIGNvbW11bmljYXRpb24gbWV0aG9kIHVzaW5nIG1vYmlsZSB0ZXJtaW5hbCcsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI1NixcclxuICAgICAgICAgICAgeDogLTMwNy45NzYwNjE1ODEzMzQxNCxcclxuICAgICAgICAgICAgeTogMTguNzY5NzU2Njc5Nzk3Mzk2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3ODIzODMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3lzdGVtIGFuZCBtZXRob2QgdG8gaW1wbGVtZW50IGEgcGVyc2lzdGVudCBhbmQgZGlzbWlzc2libGUgc2VhcmNoIGNlbnRlciBmcmFtZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI4MixcclxuICAgICAgICAgICAgeDogLTEyLjk3NjE3NzU1NzgzNTg1MixcclxuICAgICAgICAgICAgeTogLTI3Mi45MTk0NDA0MDczNzkxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3ODM1MjQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUm9ib3RpYyBzdXJnaWNhbCB0b29sIHdpdGggdWx0cmFzb3VuZCBjYXV0ZXJpemluZyBhbmQgY3V0dGluZyBpbnN0cnVtZW50JyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNTA1LFxyXG4gICAgICAgICAgICB4OiA0My4zODIzMTA5ODY5NDA2NixcclxuICAgICAgICAgICAgeTogMjc5LjA4MjE3ODAxMTQ3NzE0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3ODYzODInLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1N1cmdpY2FsIHN0YXBsaW5nIGluc3RydW1lbnQgaW5jb3Jwb3JhdGluZyBhbiBhcnRpY3VsYXRpb24gam9pbnQgZm9yIGEgZmlyaW5nIGJhciB0cmFjaycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM3MSxcclxuICAgICAgICAgICAgeDogMTM0Ljk0MDc4MTY0NTAyODM1LFxyXG4gICAgICAgICAgICB5OiAtNjUuMTAwODIzNzM1NjYzODFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjgwNDMzMCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNZXRob2QgYW5kIHN5c3RlbSBmb3IgYWNjZXNzaW5nIENSTSBkYXRhIHZpYSB2b2ljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM0OCxcclxuICAgICAgICAgICAgeDogNDEuNDQ1MjUxNzIzODQyODY1LFxyXG4gICAgICAgICAgICB5OiAtMjM2Ljk5MTU2NDgxMDk4NjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjgwOTY1MycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUZWxlbWV0ZXJlZCBjaGFyYWN0ZXJpc3RpYyBtb25pdG9yIHN5c3RlbSBhbmQgbWV0aG9kIG9mIHVzaW5nIHRoZSBzYW1lJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjUwLFxyXG4gICAgICAgICAgICB4OiAtMTkyLjM2NjU5NDc3NTY4MDgsXHJcbiAgICAgICAgICAgIHk6IDg1LjIwMDM5NzEzODU5MTU0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY4MjY1NjUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWV0aG9kIGFuZCBhcHBhcmF0dXMgZm9yIHNlcnZpbmcgZmlsZXMgdG8gYnJvd3NpbmcgY2xpZW50cycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI1MyxcclxuICAgICAgICAgICAgeDogLTE4Ny4yMDIwNzg2MTIxNDIsXHJcbiAgICAgICAgICAgIHk6IC0yMDUuODAyODA2NzE0MDk3NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2ODI2NTgyJyxcclxuICAgICAgICAgICAgbmFtZTogJ01ldGhvZCBhbmQgc3lzdGVtIGZvciB1c2luZyBmaWxlIHN5c3RlbXMgZm9yIGNvbnRlbnQgbWFuYWdlbWVudCcsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI2MixcclxuICAgICAgICAgICAgeDogLTE3My4zOTA3MTcxMzQzNDU5MixcclxuICAgICAgICAgICAgeTogLTg0Ljc0ODEwNjQ1MzkxMDUyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY4MjY3NDUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3lzdGVtIGFuZCBtZXRob2QgZm9yIHNtYXJ0IHNjcmlwdGluZyBjYWxsIGNlbnRlcnMgYW5kIGNvbmZpZ3VyYXRpb24gdGhlcmVvZicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI5MCxcclxuICAgICAgICAgICAgeDogLTc2Ljc4MTI2NDMzMTIxMDA1LFxyXG4gICAgICAgICAgICB5OiAtMTg5LjIyMTQ4MTc1MTI1MDU0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY4Mjk2NTUnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ01ldGhvZCBhbmQgc3lzdGVtIGZvciBzZXJ2ZXIgc3luY2hyb25pemF0aW9uIHdpdGggYSBjb21wdXRpbmcgZGV2aWNlIHZpYSBhIGNvbXBhbmlvbiBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyOTIsXHJcbiAgICAgICAgICAgIHg6IDU0LjE1MDY3MjEwNzAxODY5LFxyXG4gICAgICAgICAgICB5OiAtMTkzLjU1OTU0MzExNTQ1MzU4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY4MzAxNzQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWVkaWNhbCBpbnN0cnVtZW50JyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzQ1LFxyXG4gICAgICAgICAgICB4OiAyNDEuNjgzNjU2MzA0MDAwMixcclxuICAgICAgICAgICAgeTogMTc4LjgxMDE1NTQ5NDI0NzNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjg0Mjc0OCcsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnVXNhZ2UgYmFzZWQgc3RyZW5ndGggYmV0d2VlbiByZWxhdGVkIGluZm9ybWF0aW9uIGluIGFuIGluZm9ybWF0aW9uIHJldHJpZXZhbCBzeXN0ZW0nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNzMsXHJcbiAgICAgICAgICAgIHg6IC0yNTUuNzY3MTQwMTc2MzkxOCxcclxuICAgICAgICAgICAgeTogLTg5LjMwOTQxNDkwMTYwMzA5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY4NDM0MDMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3VyZ2ljYWwgY2xhbXBpbmcsIGN1dHRpbmcgYW5kIHN0YXBsaW5nIGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI3OCxcclxuICAgICAgICAgICAgeDogODAuNjIyNjc4ODgzMTc1MTUsXHJcbiAgICAgICAgICAgIHk6IDIwNC42NzI0OTI5Mjk1NzU3MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2ODUwMjUyJyxcclxuICAgICAgICAgICAgbmFtZTogJ0ludGVsbGlnZW50IGVsZWN0cm9uaWMgYXBwbGlhbmNlIHN5c3RlbSBhbmQgbWV0aG9kJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNzg0LFxyXG4gICAgICAgICAgICB4OiAtMjY5LjA5Mzk2MjU3MTY5ODIsXHJcbiAgICAgICAgICAgIHk6IDgwLjc5MTUyNTQwOTE3MTAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY4NTA4OTUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQXNzaWdubWVudCBtYW5hZ2VyJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNDI5LFxyXG4gICAgICAgICAgICB4OiAtMTA0LjcxNTIzMTcyODk5OTc4LFxyXG4gICAgICAgICAgICB5OiAtMjM3LjY3NDg5MDUxNDk1MzgzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY4NTA5NDknLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1N5c3RlbSBhbmQgbWV0aG9kIGZvciBnZW5lcmF0aW5nIGEgZHluYW1pYyBpbnRlcmZhY2UgdmlhIGEgY29tbXVuaWNhdGlvbnMgbmV0d29yaycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI3NixcclxuICAgICAgICAgICAgeDogMTcwLjg5NDg0Nzg2NjY0MjMsXHJcbiAgICAgICAgICAgIHk6IC0xNTcuMTYyMzk5NjM4NzI3OVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2ODUyOTE1JyxcclxuICAgICAgICAgICAgbmFtZTogJ0luYnJlZCBjb3JuIGxpbmUgTEgyODNCdE1PTjgxMCcsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTU4NCxcclxuICAgICAgICAgICAgeDogMjE0LjI4NzgyNTI2NjY3OTcsXHJcbiAgICAgICAgICAgIHk6IC0yMjEuNjUwNjQ1OTA2MjU3MzVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjkwNTA1NycsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnU3VyZ2ljYWwgc3RhcGxpbmcgaW5zdHJ1bWVudCBpbmNvcnBvcmF0aW5nIGEgZmlyaW5nIG1lY2hhbmlzbSBoYXZpbmcgYSBsaW5rZWQgcmFjayB0cmFuc21pc3Npb24nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzOTgsXHJcbiAgICAgICAgICAgIHg6IDIwNC4yNDQzMTQwOTE3NDMsXHJcbiAgICAgICAgICAgIHk6IC03OC4xMDAyMzY3MjIzMjYwN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2OTU5ODUyJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdTdXJnaWNhbCBzdGFwbGluZyBpbnN0cnVtZW50IHdpdGggbXVsdGlzdHJva2UgZmlyaW5nIGluY29ycG9yYXRpbmcgYW4gYW50aS1iYWNrdXAgbWVjaGFuaXNtJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjc5LFxyXG4gICAgICAgICAgICB4OiAyMTQuNDc3NDExNDAyMzY1ODIsXHJcbiAgICAgICAgICAgIHk6IC01Ni4yOTE1ODc2MzY1OTExMjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjk2NDM2MycsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnU3VyZ2ljYWwgc3RhcGxpbmcgaW5zdHJ1bWVudCBoYXZpbmcgYXJ0aWN1bGF0aW9uIGpvaW50IHN1cHBvcnQgcGxhdGVzIGZvciBzdXBwb3J0aW5nIGEgZmlyaW5nIGJhcicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTMzMCxcclxuICAgICAgICAgICAgeDogMTcxLjg5MjQ3MjcwODk4MDI4LFxyXG4gICAgICAgICAgICB5OiAtOTcuNDEwMDI0NjI1NTAyOTNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjk3ODkyMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTdXJnaWNhbCBzdGFwbGluZyBpbnN0cnVtZW50IGluY29ycG9yYXRpbmcgYW4gRS1iZWFtIGZpcmluZyBtZWNoYW5pc20nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNzEsXHJcbiAgICAgICAgICAgIHg6IDIyMC45OTk4MDAzODA0MDQ0LFxyXG4gICAgICAgICAgICB5OiAtNzEuNDIwNzgxMzU2MzY1NDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjk4MTYyOCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTdXJnaWNhbCBpbnN0cnVtZW50IHdpdGggYSBsYXRlcmFsLW1vdmluZyBhcnRpY3VsYXRpb24gY29udHJvbCcsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTU4OCxcclxuICAgICAgICAgICAgeDogMTU1LjEyMjA5NjY3NzM4NzIyLFxyXG4gICAgICAgICAgICB5OiAtOTMuNjk2Mjg3NTE0NjAyOTRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzAwMDgxOCcsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnU3VyZ2ljYWwgc3RhcGxpbmcgaW5zdHJ1bWVudCBoYXZpbmcgc2VwYXJhdGUgZGlzdGluY3QgY2xvc2luZyBhbmQgZmlyaW5nIHN5c3RlbXMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE0MjIsXHJcbiAgICAgICAgICAgIHg6IDIyNy4wMTc2ODg0NTM3OTY5MixcclxuICAgICAgICAgICAgeTogNy4wMjQwNTY2MTE0NjMwNTFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzAyNTc0MycsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnRXh0ZXJuYWwgaW5mdXNpb24gZGV2aWNlIHdpdGggcmVtb3RlIHByb2dyYW1taW5nLCBib2x1cyBlc3RpbWF0b3IgYW5kL29yIHZpYnJhdGlvbiBhbGFybSBjYXBhYmlsaXRpZXMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzNDgsXHJcbiAgICAgICAgICAgIHg6IC0xMzkuMzM0ODcyNzU3NDQyNzUsXHJcbiAgICAgICAgICAgIHk6IDQ2LjUyMDYxMTE1MzM0Mzk4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzcwNDkxOTAnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ01ldGhvZCBmb3IgZm9ybWluZyBabk8gZmlsbSwgbWV0aG9kIGZvciBmb3JtaW5nIFpuTyBzZW1pY29uZHVjdG9yIGxheWVyLCBtZXRob2QgZm9yIGZhYnJpY2F0aW5nIHNlbWljb25kdWN0b3IgZGV2aWNlLCBhbmQgc2VtaWNvbmR1Y3RvciBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyMzQsXHJcbiAgICAgICAgICAgIHg6IC0yODkuMTA5MTg4MzM2MTEsXHJcbiAgICAgICAgICAgIHk6IC05Ny45Njc3NjkzODU0OTUzN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MDU1NzMxJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdTdXJnaWNhbCBzdGFwbGluZyBpbnN0cnVtZW50IGluY29ycG9yYXRpbmcgYSB0YXBlcmVkIGZpcmluZyBiYXIgZm9yIGluY3JlYXNlZCBmbGV4aWJpbGl0eSBhcm91bmQgdGhlIGFydGljdWxhdGlvbiBqb2ludCcsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTMyNSxcclxuICAgICAgICAgICAgeDogMjMwLjQ5NTE4Mzg2NDM5OTg4LFxyXG4gICAgICAgICAgICB5OiAtNTkuNjQyMjQ1Njc4NTgyNDhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzA2MTAxNCcsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnTmF0dXJhbC1zdXBlcmxhdHRpY2UgaG9tb2xvZ291cyBzaW5nbGUgY3J5c3RhbCB0aGluIGZpbG0sIG1ldGhvZCBmb3IgcHJlcGFyYXRpb24gdGhlcmVvZiwgYW5kIGRldmljZSB1c2luZyBzYWlkIHNpbmdsZSBjcnlzdGFsIHRoaW4gZmlsbScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzMzOSxcclxuICAgICAgICAgICAgeDogLTUuODAwODgyMDQ0OTAxNDM5LFxyXG4gICAgICAgICAgICB5OiA2OC41MjY0MTU5NTAzMTUyNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MDY0MzQ2JyxcclxuICAgICAgICAgICAgbmFtZTogJ1RyYW5zaXN0b3IgYW5kIHNlbWljb25kdWN0b3IgZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjY4LFxyXG4gICAgICAgICAgICB4OiAtMy40MDAzMDMxNTE5OTEzNzE2LFxyXG4gICAgICAgICAgICB5OiAyNS45ODEzNTY4MzYwNDM2ODhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzEwNTg2OCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdIaWdoLWVsZWN0cm9uIG1vYmlsaXR5IHRyYW5zaXN0b3Igd2l0aCB6aW5jIG94aWRlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjMzLFxyXG4gICAgICAgICAgICB4OiAtMTcuODM1Nzg1NzQ5Nzg1ODE3LFxyXG4gICAgICAgICAgICB5OiAxOTkuOTE4ODM3MjAyMTAzMDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzExMTc2OScsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnU3VyZ2ljYWwgaW5zdHJ1bWVudCBpbmNvcnBvcmF0aW5nIGFuIGFydGljdWxhdGlvbiBtZWNoYW5pc20gaGF2aW5nIHJvdGF0aW9uIGFib3V0IHRoZSBsb25naXR1ZGluYWwgYXhpcycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI3OCxcclxuICAgICAgICAgICAgeDogMTUxLjIyNTc5ODMyNTI0MDQ1LFxyXG4gICAgICAgICAgICB5OiAtMzcuMTcwOTkwNzQ3NDkwMTNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzE0NzEzOCcsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnU3VyZ2ljYWwgc3RhcGxpbmcgaW5zdHJ1bWVudCBoYXZpbmcgYW4gZWxlY3Ryb2FjdGl2ZSBwb2x5bWVyIGFjdHVhdGVkIGJ1dHRyZXNzIGRlcGxveW1lbnQgbWVjaGFuaXNtJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNDI4LFxyXG4gICAgICAgICAgICB4OiAxODkuMDg2MTQzMjM4NTc1LFxyXG4gICAgICAgICAgICB5OiAtNzMuNjkxMzAzOTI2ODM5MjRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzE1OTc1MCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTdXJnaWNhbCBzdGFwbGluZyBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNTgsXHJcbiAgICAgICAgICAgIHg6IC00MS4yOTk5NTE4NjUxOTQ0MyxcclxuICAgICAgICAgICAgeTogMjkyLjg0NjI2NzQ1Mzc4MjJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzIxMTgyNScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdJbmRpdW0gb3hpZGUtYmFzZWQgdGhpbiBmaWxtIHRyYW5zaXN0b3JzIGFuZCBjaXJjdWl0cycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzI0NSxcclxuICAgICAgICAgICAgeDogLTMxMi4zODM5MDU3MjIxNDc3LFxyXG4gICAgICAgICAgICB5OiAtNS42MTQ1NDE1NjcxMzMwMDdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzI0NjczNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSb3RhcnkgaHlkcmF1bGljIHB1bXAgYWN0dWF0ZWQgbXVsdGktc3Ryb2tlIHN1cmdpY2FsIGluc3RydW1lbnQnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyODgsXHJcbiAgICAgICAgICAgIHg6IDIwMC40NDU2MzM4MDA4NjUxNSxcclxuICAgICAgICAgICAgeTogLTYzLjE4ODY1NTg4MDc2ODg2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzcyODI3ODInLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ29tYmluZWQgYmluYXJ5IG94aWRlIHNlbWljb25kdWN0b3IgZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjczLFxyXG4gICAgICAgICAgICB4OiAtMTI1LjgzMDkwNDE0Nzc5ODYsXHJcbiAgICAgICAgICAgIHk6IC0zMS4yNzc4Nzc4OTM1ODA0ODhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzI5Nzk3NycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTZW1pY29uZHVjdG9yIGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzMxOCxcclxuICAgICAgICAgICAgeDogLTEyOC4yODI4ODYyOTY5NjcyNixcclxuICAgICAgICAgICAgeTogLTU1LjI2MTQ3NTU3ODAzMzI5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzczMjMzNTYnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ0xuQ3VPKFMsU2UsVGUpbW9ub2NyeXN0YWxsaW5lIHRoaW4gZmlsbSwgaXRzIG1hbnVmYWN0dXJpbmcgbWV0aG9kLCBhbmQgb3B0aWNhbCBkZXZpY2Ugb3IgZWxlY3Ryb25pYyBkZXZpY2UgdXNpbmcgdGhlIG1vbm9jcnlzdGFsbGluZSB0aGluIGZpbG0nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyNTEsXHJcbiAgICAgICAgICAgIHg6IC0xOC41OTc1NTMwNTM5NTU3NCxcclxuICAgICAgICAgICAgeTogODguOTU1MzE2MTA4Mzg5NjhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzM0MDQxMScsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnU3lzdGVtIGFuZCBtZXRob2QgZm9yIGdlbmVyYXRpbmcsIGNhcHR1cmluZywgYW5kIG1hbmFnaW5nIGN1c3RvbWVyIGxlYWQgaW5mb3JtYXRpb24gb3ZlciBhIGNvbXB1dGVyIG5ldHdvcmsnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyODIsXHJcbiAgICAgICAgICAgIHg6IDE3MS4xNDA4MzE1NTkxNjk4LFxyXG4gICAgICAgICAgICB5OiAtMjAyLjI0ODgzNzA4MDQ0ODA4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzczODA2OTUnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1N1cmdpY2FsIHN0YXBsaW5nIGluc3RydW1lbnQgaGF2aW5nIGEgc2luZ2xlIGxvY2tvdXQgbWVjaGFuaXNtIGZvciBwcmV2ZW50aW9uIG9mIGZpcmluZycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM4NixcclxuICAgICAgICAgICAgeDogMTg2LjI1ODMzNTMwMTEwMTk0LFxyXG4gICAgICAgICAgICB5OiAtMjEuNjYzMjE4NzMyNDUyMDlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzM4MDY5NicsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnQXJ0aWN1bGF0aW5nIHN1cmdpY2FsIHN0YXBsaW5nIGluc3RydW1lbnQgaW5jb3Jwb3JhdGluZyBhIHR3by1waWVjZSBFLWJlYW0gZmlyaW5nIG1lY2hhbmlzbScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM4OCxcclxuICAgICAgICAgICAgeDogMjA3LjkwMjk1OTM5MDMxNzksXHJcbiAgICAgICAgICAgIHk6IC04LjUzMTUzMzczNzYyMTg4NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3Mzg1MjI0JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdUaGluIGZpbG0gdHJhbnNpc3RvciBoYXZpbmcgYW4gZXRjaGluZyBwcm90ZWN0aW9uIGZpbG0gYW5kIG1hbnVmYWN0dXJpbmcgbWV0aG9kIHRoZXJlb2YnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyMjQsXHJcbiAgICAgICAgICAgIHg6IC0yMDkuODIyMzA0ODI1NTUzMzUsXHJcbiAgICAgICAgICAgIHk6IC0xMzguNTEwMDQwOTkwMDI5M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3NDAyNTA2JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdNZXRob2RzIG9mIG1ha2luZyB0aGluIGZpbG0gdHJhbnNpc3RvcnMgY29tcHJpc2luZyB6aW5jLW94aWRlLWJhc2VkIHNlbWljb25kdWN0b3IgbWF0ZXJpYWxzIGFuZCB0cmFuc2lzdG9ycyBtYWRlIHRoZXJlYnknLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyNTgsXHJcbiAgICAgICAgICAgIHg6IDIwNS4wMjQ3NTY2NzQ0Nzc3NCxcclxuICAgICAgICAgICAgeTogMTg1LjY3ODc4MDY2NDQzMDM4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzc0MDQ1MDgnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3VyZ2ljYWwgc3RhcGxpbmcgYW5kIGN1dHRpbmcgZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNTE3LFxyXG4gICAgICAgICAgICB4OiAxNDIuODUzNDg4NjE3MzIzNyxcclxuICAgICAgICAgICAgeTogMS4zMzI1ODg1MjgxNzQ4NTUzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzc0MTEyMDknLFxyXG4gICAgICAgICAgICBuYW1lOiAnRmllbGQtZWZmZWN0IHRyYW5zaXN0b3IgYW5kIG1ldGhvZCBmb3IgbWFudWZhY3R1cmluZyB0aGUgc2FtZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzI1NSxcclxuICAgICAgICAgICAgeDogOTguNDYyMDcyMjExODM1MjgsXHJcbiAgICAgICAgICAgIHk6IDEyMy4wMzA4NDc3NTM3MDI3OVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3NDUzMDY1JyxcclxuICAgICAgICAgICAgbmFtZTogJ1NlbnNvciBhbmQgaW1hZ2UgcGlja3VwIGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzIzMCxcclxuICAgICAgICAgICAgeDogLTAuMTY1NzM3NDM5NDI2NzE4NTQsXHJcbiAgICAgICAgICAgIHk6IDE0MS4yODkyMjkzNTI5OTAyMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3NDUzMDg3JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdUaGluLWZpbG0gdHJhbnNpc3RvciBhbmQgdGhpbi1maWxtIGRpb2RlIGhhdmluZyBhbW9ycGhvdXMtb3hpZGUgc2VtaWNvbmR1Y3RvciBsYXllcicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzI0MixcclxuICAgICAgICAgICAgeDogNjQuOTI2MTk5MDgyNzIyMjIsXHJcbiAgICAgICAgICAgIHk6IDE4MS44NDU5MzY2NTA5MDQ0M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3NDYyODYyJyxcclxuICAgICAgICAgICAgbmFtZTogJ1RyYW5zaXN0b3IgdXNpbmcgYW4gaXNvdmFsZW50IHNlbWljb25kdWN0b3Igb3hpZGUgYXMgdGhlIGFjdGl2ZSBjaGFubmVsIGxheWVyJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjQ0LFxyXG4gICAgICAgICAgICB4OiAtNjkuNjE2NzkxNDI4NDgyNTEsXHJcbiAgICAgICAgICAgIHk6IC0xNy45NTE0MzE3NjY3MTE5MjRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzQ2NDg0NicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTdXJnaWNhbCBpbnN0cnVtZW50IGhhdmluZyBhIHJlbW92YWJsZSBiYXR0ZXJ5JyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjg3LFxyXG4gICAgICAgICAgICB4OiAxODEuODQxOTQ5NTU5OTE2ODYsXHJcbiAgICAgICAgICAgIHk6IC02LjEzMDM1NjY0NDU0MTc1OVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3NDY4MzA0JyxcclxuICAgICAgICAgICAgbmFtZTogJ01ldGhvZCBvZiBmYWJyaWNhdGluZyBveGlkZSBzZW1pY29uZHVjdG9yIGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzI0MCxcclxuICAgICAgICAgICAgeDogNDMuMTQ0NDc0MjI4NzY0OTksXHJcbiAgICAgICAgICAgIHk6IDg0LjMwODU3NDQ5ODgzOTAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzc1MDEyOTMnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1NlbWljb25kdWN0b3IgZGV2aWNlIGluIHdoaWNoIHppbmMgb3hpZGUgaXMgdXNlZCBhcyBhIHNlbWljb25kdWN0b3IgbWF0ZXJpYWwgYW5kIG1ldGhvZCBmb3IgbWFudWZhY3R1cmluZyB0aGUgc2VtaWNvbmR1Y3RvciBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyMTYsXHJcbiAgICAgICAgICAgIHg6IDEwMC43NTk4NDQ5NTYxOTc2MyxcclxuICAgICAgICAgICAgeTogMjYzLjkzOTI4MTE3NzY1Mzg3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzc1MDY3OTEnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1N1cmdpY2FsIHN0YXBsaW5nIGluc3RydW1lbnQgd2l0aCBtZWNoYW5pY2FsIG1lY2hhbmlzbSBmb3IgbGltaXRpbmcgbWF4aW11bSB0aXNzdWUgY29tcHJlc3Npb24nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNTcsXHJcbiAgICAgICAgICAgIHg6IDE2Mi44OTk0Mzc0OTM4MzgzLFxyXG4gICAgICAgICAgICB5OiAtMTMuNTA3NjY0MzY0NjExMjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzYyMDY1NScsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnTWV0aG9kLCBkZXZpY2UgYW5kIGNvbXB1dGVyIHByb2dyYW0gcHJvZHVjdCBmb3IgaWRlbnRpZnlpbmcgdmlzaXRvcnMgb2Ygd2Vic2l0ZXMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNDMsXHJcbiAgICAgICAgICAgIHg6IDI3My43NDUzMjU3MDU4NDcxLFxyXG4gICAgICAgICAgICB5OiAtMTM0LjExOTY5NzE2ODA2NzgzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzc2MzI5ODUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU295YmVhbiBldmVudCBNT044OTc4OCBhbmQgbWV0aG9kcyBmb3IgZGV0ZWN0aW9uIHRoZXJlb2YnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE0NzcsXHJcbiAgICAgICAgICAgIHg6IDI1LjE1NjQxMjczMTEzMDk5NSxcclxuICAgICAgICAgICAgeTogMjMyLjYzODM3NDUzNjMxNjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzY2MzYwNycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNdWx0aXBvaW50IHRvdWNoc2NyZWVuJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAyMjE3LFxyXG4gICAgICAgICAgICB4OiAxNDguMzE3MjkwNzU3MTQ0MTIsXHJcbiAgICAgICAgICAgIHk6IC0yNTIuMTIwNTQxMTcyOTU2MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3Njc0NjUwJyxcclxuICAgICAgICAgICAgbmFtZTogJ1NlbWljb25kdWN0b3IgZGV2aWNlIGFuZCBtYW51ZmFjdHVyaW5nIG1ldGhvZCB0aGVyZW9mJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzNDM5LFxyXG4gICAgICAgICAgICB4OiAyNjUuMjA3NzUyNzM1MTE4ODUsXHJcbiAgICAgICAgICAgIHk6IDk3LjA4NzUzMTc1NjQ5ODc5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzc3MzI4MTknLFxyXG4gICAgICAgICAgICBuYW1lOiAnU2VtaWNvbmR1Y3RvciBkZXZpY2UgYW5kIG1hbnVmYWN0dXJpbmcgbWV0aG9kIHRoZXJlb2YnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyODgsXHJcbiAgICAgICAgICAgIHg6IDI0MS4yNzQzMjQ3NTY5NjE0NSxcclxuICAgICAgICAgICAgeTogOTIuNTc5MTcxNTk2NjE1OTVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnODA1MzE4NCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTb3liZWFuIGV2ZW50IE1PTjg5Nzg4IGFuZCBtZXRob2RzIGZvciBkZXRlY3Rpb24gdGhlcmVvZicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI0OSxcclxuICAgICAgICAgICAgeDogMTIuNzQxNzM5Mjc0NTE5ODYsXHJcbiAgICAgICAgICAgIHk6IDIyMy4zMzA1MDk0Njg1Mzg1NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQwODI2MDItMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBZGFtIEhlbGxlcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI3OCxcclxuICAgICAgICAgICAgeDogLTc4Ljk3OTE4MzY3ODc4Mzk1LFxyXG4gICAgICAgICAgICB5OiAxNzUuODM0NTg1NTE5NDU2OTdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTUxMjc2LTExJyxcclxuICAgICAgICAgICAgbmFtZTogJ0FkcmlhbiBHdXQnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNCxcclxuICAgICAgICAgICAgeDogLTEyNi40OTE2Mzg5Njg4MjA4MixcclxuICAgICAgICAgICAgeTogNzcuMDUzOTI1NDI4OTQ0MzdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTUxMjc2LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQWxhbiBIYXViYWNoJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTUsXHJcbiAgICAgICAgICAgIHg6IC0xMzMuNTQ0ODA2MTg1MTc1NTYsXHJcbiAgICAgICAgICAgIHk6IDEzLjczNjQ0MzM3OTU0MjQzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjczMjA5NS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0FsZXggV2Fyc2hhdnNreScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDM4LFxyXG4gICAgICAgICAgICB4OiAtNDEuNDMwMDYwOTEwMTQ2ODEsXHJcbiAgICAgICAgICAgIHk6IC0xMTUuNjk0NjgxMzcwNjQ4MTdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0MDgyMDk3LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQWxmcmVkIEUuIE1hbm4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3MyxcclxuICAgICAgICAgICAgeDogLTE2Ni4yNTEyNzgyMzQxNzY4OCxcclxuICAgICAgICAgICAgeTogNjQuMjE0MjQ1NTY2MjMzMzlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3NDAyNTA2LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnQW5kcmVhIEMuIFNjdWRlcmknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyLFxyXG4gICAgICAgICAgICB4OiAyMzIuMDIxMDEzNTY0OTQ0LFxyXG4gICAgICAgICAgICB5OiAyMDEuNTQzNjA1NTMyMTQ1NTNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2Mjk1NTMwLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQW5kcmV3IE0uIFJpdGNoaWUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxyXG4gICAgICAgICAgICB4OiAtMTgwLjEzMjcwMTA5MzgwODgzLFxyXG4gICAgICAgICAgICB5OiAtMTc1Ljg5MzM1ODc1MDM5Mjg1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTk0NDc5MS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0FuZHJldyBXLiBTY2hlcnBiaWVyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOCxcclxuICAgICAgICAgICAgeDogODkuMDM1OTY3ODg3MDIyNzEsXHJcbiAgICAgICAgICAgIHk6IDczLjQxOTY2NjAxNTYyMDU4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjY2NTY0OC00JyxcclxuICAgICAgICAgICAgbmFtZTogJ0FuZHJ6ZWogUC4gTWF6dXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxyXG4gICAgICAgICAgICB4OiAtMTcuNzU5NTc3MzgxMzMyNjksXHJcbiAgICAgICAgICAgIHk6IC05MC4wNDMyNzg4NDE0MTEzOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1Nzc3MjYtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBbmlsIEsuIEFubmFkYXRhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTksXHJcbiAgICAgICAgICAgIHg6IC05MC4yNzIzNzcyNjc1ODU4MSxcclxuICAgICAgICAgICAgeTogLTE0Mi4xMTk4MTU1MzEyNzg0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjMzNjEzNy0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0FuaWwgTXVrdW5kYW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyNCxcclxuICAgICAgICAgICAgeDogNDQuOTc1NzAwMDM4ODIwNTksXHJcbiAgICAgICAgICAgIHk6IC0xNzMuMTkxMjYzMDUyMTYzNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4Mjk2NTUtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBbnVwYW0gU2luZ2hhbCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEyLFxyXG4gICAgICAgICAgICB4OiA2OC4wMzM0MTQ5NzA4MDgwOCxcclxuICAgICAgICAgICAgeTogLTE1OS42MTY0MDkwMTgzMDMxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTI3NjI2Mi0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0FydGh1ciBMLiBKb2huc29uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOSxcclxuICAgICAgICAgICAgeDogMTg1LjUwOTU2NjQzNTIyMjgsXHJcbiAgICAgICAgICAgIHk6IC0yMjguODQxOTkxNTg5ODQwNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzcwODI4MzItNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBeWFub3JpIEVuZG8nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1LFxyXG4gICAgICAgICAgICB4OiAxMTYuMDkyNjE1NzMwMTA5NTEsXHJcbiAgICAgICAgICAgIHk6IDE0OS4xNzE3NjA4MTg3NTU3M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYzNzA1ODQtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBemVyIEJlc3RhdnJvcycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDgsXHJcbiAgICAgICAgICAgIHg6IC0yNDAuNDEyOTI0MTUxOTQwODcsXHJcbiAgICAgICAgICAgIHk6IDE5Ny40MDIwMTA3Mjk4NDYzOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU3MjI5OTctMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdCZWhyYWQgQXJpYScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDc1LFxyXG4gICAgICAgICAgICB4OiAtNzYuODg2Mzk1Nzk4OTkyNjgsXHJcbiAgICAgICAgICAgIHk6IDE0MC41OTc0MzQ4MDI4NTE0NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQ5NzIyMjQtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdCZW5uaWUgVGhvbXBzb24nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0NixcclxuICAgICAgICAgICAgeDogMTI5LjgwNzM1MDUyMzg5ODEyLFxyXG4gICAgICAgICAgICB5OiAtNC40ODE5NzI1NTk4Mzk5ODNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3NjIwNjU1LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnQmrDtnJuIFNwZXJsaW5nJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcclxuICAgICAgICAgICAgeDogMjY1LjY5ODAyNDY2MDIxMzQzLFxyXG4gICAgICAgICAgICB5OiAtMTYzLjE3NDg3NTkyNjgyNDdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTUxMjc2LTEyJyxcclxuICAgICAgICAgICAgbmFtZTogJ0JvYiBNdXJ0ZmVsZHQnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNCxcclxuICAgICAgICAgICAgeDogLTEwNC41NzYwMjY0MTYwNTAyMyxcclxuICAgICAgICAgICAgeTogNDMuMjE5MjkzODYwMTc0OTFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODA5NjUzLTknLFxyXG4gICAgICAgICAgICBuYW1lOiAnQnJhZCBULiBIaXRlJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNCxcclxuICAgICAgICAgICAgeDogLTE3OC43NDA2OTQ0Mjk1OTcsXHJcbiAgICAgICAgICAgIHk6IDExNC41NjQzMDEwNzEwMDMxMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY2NjU2NDgtNScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdCcmlhbiBHcm92ZXMnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxyXG4gICAgICAgICAgICB4OiAtNC4wNjM3MDM3Mjc1OTM1NTksXHJcbiAgICAgICAgICAgIHk6IC05My4yNDY2NjAyMTYxNTE3N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzcwMDA4MTgtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdCcmlhbiBKLiBIZW1tZWxnYXJuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMixcclxuICAgICAgICAgICAgeDogMjUxLjg3ODI1MjcxNjkyMjA4LFxyXG4gICAgICAgICAgICB5OiAyOC4yODk4MDMxOTUyNjAwOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY2NTg1NzctMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdCcmlhbiBRLiBIdXBwaScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDk0LFxyXG4gICAgICAgICAgICB4OiAxMjMuMTk2MzE5ODc4MzUyNTgsXHJcbiAgICAgICAgICAgIHk6IC0yNjkuNTU0OTU1Mjc3NzExMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU0NjU4OTUtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdCcnlhbiBELiBLbm9kZWwnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNDcsXHJcbiAgICAgICAgICAgIHg6IDI0OS4yNzE1OTM1MjUwOTY5NixcclxuICAgICAgICAgICAgeTogMTQ5Ljg5NDIyNjk2NTM0NDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1OTQ4MDA2LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ2FybGEgTS4gTWFubicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMwLFxyXG4gICAgICAgICAgICB4OiAtMTQ4LjQxMTUzNDc2OTg3ODA1LFxyXG4gICAgICAgICAgICB5OiAyNjguMjEwMjM2ODUzMzcwMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1NTgzNTEtOCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDYXJ5IEQuIFRhbGJvdCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUxLFxyXG4gICAgICAgICAgICB4OiAtMjQyLjEyMDEzNzM5NjAwODUsXHJcbiAgICAgICAgICAgIHk6IDEuMDgwOTEwNTg2MTcyMjQ4M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUxNzY2NDQtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDaGFkIFNyaXNhdGhhcGF0JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjgsXHJcbiAgICAgICAgICAgIHg6IC0xMDYuNTk3ODAzMjU2NDUyODksXHJcbiAgICAgICAgICAgIHk6IDU2LjcyNDE1OTk2MjQ3MzYzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjczMjA5NS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0NoYW5kcmFrYW50IFJhbWtyaXNobmEgQmhhdnNhcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDcsXHJcbiAgICAgICAgICAgIHg6IC01Ni40NDY5MjQyMzYwMjg1OCxcclxuICAgICAgICAgICAgeTogLTExNC4zODkzNjM1NTk1MjUyMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4MDQzMzAtNScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDaHJpcyBIYXZlbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDgsXHJcbiAgICAgICAgICAgIHg6IDc2LjU4OTk2OTI2NjA3MDI3LFxyXG4gICAgICAgICAgICB5OiAtMjMzLjU5Mzc2NDIxNzc0OTY4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTg1OTkxNi0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0NocmlzdG9waGVyIEEuIEp1bGlhbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDM1LFxyXG4gICAgICAgICAgICB4OiAzMi40OTUyOTIwMjkxNTUyNixcclxuICAgICAgICAgICAgeTogMzA3Ljg1NTg3MTU3MzI5OTE3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTk2Mzk1My0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0NocmlzdG9waGVyIFN0YXViZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxyXG4gICAgICAgICAgICB4OiAzOC44NzY0OTkxNzczMDg5MzYsXHJcbiAgICAgICAgICAgIHk6IC0yNTQuNjg1MzM3MTQ4NTQwN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1OTM4MzQtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDaHVub25nIFFpdScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMwLFxyXG4gICAgICAgICAgICB4OiAtMjk5LjUxMzU3MDczMjc1NzY3LFxyXG4gICAgICAgICAgICB5OiAyOC42OTM1ODYxMzMxNzk1MDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NzAzMzU3LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ2luZHkgWGluZyBRaXUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzNyxcclxuICAgICAgICAgICAgeDogLTMwNy42MDQ5NDYwMjA4ODQ5NCxcclxuICAgICAgICAgICAgeTogLTM2LjA5OTc0Mjk3NjkyNTU0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTM4MjIzMi0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0NsaWZmIEhhZ3VlJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjUsXHJcbiAgICAgICAgICAgIHg6IC0xNTguOTQ4ODkxNzA3OTIyMTcsXHJcbiAgICAgICAgICAgIHk6IDc1LjU3MzY2MTI1OTY3MDkxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjUzNTkwOS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0RhdmlkIEJyYWRsZXkgUnVzdCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEwLFxyXG4gICAgICAgICAgICB4OiAyOTMuODkzNzgyNjY4ODEyMTUsXHJcbiAgICAgICAgICAgIHk6IDEwOC4yNDA0NTU5MjY5MDQ0OVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU3MTM5MTEtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEYXZpZCBDLiBSYWNlbmV0JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTE3LFxyXG4gICAgICAgICAgICB4OiAtNzAuNzMxOTk5OTY3MjkwNzYsXHJcbiAgICAgICAgICAgIHk6IDI4My42ODg0NTAyMTMyNjYxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTUxMjQyNi0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0RhdmlkIEguIExldnknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA5NyxcclxuICAgICAgICAgICAgeDogMTc1LjYyMjczMzQ2ODI5NTkzLFxyXG4gICAgICAgICAgICB5OiAxOTUuMDMzNDgwOTIwNDI3ODVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NzU1NzM3LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRGF2aWQgS2FybCBMZWUgUGV0ZXJzb24nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMCxcclxuICAgICAgICAgICAgeDogLTExNi4xOTk5NzU5MzkyMDY4MSxcclxuICAgICAgICAgICAgeTogMjM1LjQyMzE3NDY3NzY4NzA2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjAwNDI3Ni0xMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEYXZpZCBMLiBSYWJiZXJzJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOSxcclxuICAgICAgICAgICAgeDogOTAuMDU0NTUxMzg4Mzk0NjcsXHJcbiAgICAgICAgICAgIHk6IC0xOTkuNzY3MjQzMDI2NjA5OTJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0MTI3MjI3LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRGF2aWQgVC4gR3JlZW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyNTMsXHJcbiAgICAgICAgICAgIHg6IDMyMC4wNTM4OTU2NDkzNDc0LFxyXG4gICAgICAgICAgICB5OiAtMi41Njc0NDA2OTgzNzgzNzc3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTMyOTY1NS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0RlYW4gTC4gR2FybmVyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOSxcclxuICAgICAgICAgICAgeDogODIuOTg2ODM3ODY2NTg0NCxcclxuICAgICAgICAgICAgeTogLTc1LjAxNDcyMTU1MDAyMTM4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU1MTI3Ni05JyxcclxuICAgICAgICAgICAgbmFtZTogJ0RlYm9yYWggUnVwcGVydCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIyLFxyXG4gICAgICAgICAgICB4OiAtMTE4LjI2NTUyOTM3NDUxNTA3LFxyXG4gICAgICAgICAgICB5OiAyMC4xMzE0ODExODkxMDE2OTVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTUxMjc2LTEwJyxcclxuICAgICAgICAgICAgbmFtZTogJ0Rlbm5pcyBQLiBCaXNob3AnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNixcclxuICAgICAgICAgICAgeDogLTExMy4wNDEzODQzMjY1OTk0MyxcclxuICAgICAgICAgICAgeTogNjguNTM0NzkxODE1NjIyOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU5MTgxNTktMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEZW56aWwgV2lsbG91Z2hieSBDaGVzbmV5JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOCxcclxuICAgICAgICAgICAgeDogLTIyMS4zNDM4MTYzMTk3NzMyLFxyXG4gICAgICAgICAgICB5OiAtMTgwLjMxMjU4ODY4NDM1NzI1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjkxMjgzOS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0RlcmVrIERlZSBEZXZpbGxlJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTI3LFxyXG4gICAgICAgICAgICB4OiAxMjQuMDA1NjIzNjk3MTQ2MDksXHJcbiAgICAgICAgICAgIHk6IDMwLjMwMzUxODU3MzIxMzMyOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3MTgzNjEtOCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEb21lbmljIEouIExhUm9zYScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDcsXHJcbiAgICAgICAgICAgIHg6IC0xODUuMTYzNDAyNzE1MTU4OCxcclxuICAgICAgICAgICAgeTogMTkxLjQ5ODgwNTU4MDkwODk2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjg1MDk0OS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0RvdWcgV2FybmVyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcclxuICAgICAgICAgICAgeDogMTk3LjQxMDk1ODY2MjQ4ODgsXHJcbiAgICAgICAgICAgIHk6IC0xNDEuNTExMzc0MjU5MDEyNzdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTMwOTMyLTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnRG91Z2xhcyBCLiBIb2ZmbWFuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDEsXHJcbiAgICAgICAgICAgIHg6IDExMi42NTkwMjIwMjY3ODg4NixcclxuICAgICAgICAgICAgeTogLTQxLjk1MTc5NDE5MzQwODAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjQzNDU1MC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0RvdWdsYXMgSy4gV2FybmVyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTEsXHJcbiAgICAgICAgICAgIHg6IC0yNDAuMjEzMDUxODAzMTQ3LFxyXG4gICAgICAgICAgICB5OiAtNTguMzg1MzQ1MjIxNzYwNDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODUwODk1LTUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRHVhbmUgV2FuZGxlc3MnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxyXG4gICAgICAgICAgICB4OiAtMTQxLjc3MTIwMzcwOTU3NTA1LFxyXG4gICAgICAgICAgICB5OiAtMjM1Ljg0OTQ1ODg4NTU1MzM2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzYzMjk4NS00JyxcclxuICAgICAgICAgICAgbmFtZTogJ0VsbGVuIERpY2tpbnNvbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUsXHJcbiAgICAgICAgICAgIHg6IC02LjY1MDcxMjk1MzY1OTIzMixcclxuICAgICAgICAgICAgeTogMjQzLjg1OTIyNDk0OTc3OTk2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTYxNjUzMi0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0VwaHJhaW0gSGVsbGVyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTI1LFxyXG4gICAgICAgICAgICB4OiAtMTM2LjY2Mjc2OTMxNzg2Nzg4LFxyXG4gICAgICAgICAgICB5OiAxNDguNTA4MzMyODczMDY4NDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzI0Mzk5LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRXJuc3QgS2F0Y2hvdXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyLFxyXG4gICAgICAgICAgICB4OiAyMC40NjA3MDUxNzc4MTY4MTYsXHJcbiAgICAgICAgICAgIHk6IC0xMzguNjMxNjE3NDM0NjA0N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQ0MDM2ODctMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdFdWdlbmUgTC4gVGltcGVybWFuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNjksXHJcbiAgICAgICAgICAgIHg6IDE2Ny44MTQwNTk3NjI0MDMyMixcclxuICAgICAgICAgICAgeTogMjMuNjUzNzk0MzQ4NjcwNTE2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjkwNTA1Ny0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0ZyZWRlcmljayBFLiBTaGVsdG9uLCBJVicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEwNDcsXHJcbiAgICAgICAgICAgIHg6IDIwNi45NDA1NTYwMTE2MTk1OCxcclxuICAgICAgICAgICAgeTogLTMzLjYzNzk0NDAxOTIyMTA1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTA0MTA4Ni00JyxcclxuICAgICAgICAgICAgbmFtZTogJ0ZyZWRyaWMgQy4gQ29sbWFuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTE5LFxyXG4gICAgICAgICAgICB4OiAtOTMuMDcxNDE1MjIyMzM1NjUsXHJcbiAgICAgICAgICAgIHk6IDE4Ny42MTM4Mjc5MTIxNDc3NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY0MzM5MjEtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdHLiBWaWN0b3IgVHJleXonLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxOSxcclxuICAgICAgICAgICAgeDogLTI1MC4yMTQxOTIyMDg3MjQ5LFxyXG4gICAgICAgICAgICB5OiAxMTcuNzA5MzYxODgxMjg3ODlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTU4MzUxLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnR2FycnkgTS4gU3RlaWwnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMSxcclxuICAgICAgICAgICAgeDogLTE5Ny41NTAzMzg0MzcwNzA4OCxcclxuICAgICAgICAgICAgeTogLTE0Ljk2OTA1NDE1NzI1NTI2MVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU3MDczNjktMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdHZW9mZnJleSBDLiBIdWVpbCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDM3LFxyXG4gICAgICAgICAgICB4OiA4OC43NzczMjEyOTk3NTk2OCxcclxuICAgICAgICAgICAgeTogLTU5LjM0Mjk0NDY5MDkwNDMxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjgyNjU4Mi0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0dlb3JnZSBFcmljc3NvbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXHJcbiAgICAgICAgICAgIHg6IC0xNTguMDIwNzA4NTUyNDk5MzcsXHJcbiAgICAgICAgICAgIHk6IC0xMTEuNDEzNTU2NjYwNzU0MTNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICdSRTI4OTMyLTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnR3JhaGFtIFcuIEJyeWFuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTcsXHJcbiAgICAgICAgICAgIHg6IDMwMi4xNTE5NzE3NDk4MTk5NSxcclxuICAgICAgICAgICAgeTogMi45NzExNTMzMDEyMTcxODZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MTQ0Njc5LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnR3JlZ29yeSBTIEhlcm1hbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDcwLFxyXG4gICAgICAgICAgICB4OiAtMTA3LjA4NzIxMjEyNDM4MjUzLFxyXG4gICAgICAgICAgICB5OiAtMjIuOTk5MzI1OTgwNDc1MzQ0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjYwMTA4Ny0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0d1YW5naG9uZyBZYW5nJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOCxcclxuICAgICAgICAgICAgeDogMTgxLjk0MDA4NjgwODAyMjEsXHJcbiAgICAgICAgICAgIHk6IDc3LjY2Nzc4NjIzMzgxMTlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTc3NzI2LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSGVucnkgRC4gSmF5JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNyxcclxuICAgICAgICAgICAgeDogLTEyMi4wMjMyMDQ3Njk4MjQ5OSxcclxuICAgICAgICAgICAgeTogLTE1Ny45NTU2NjczMjQxODI4NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQyODMwMjQtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdIZW5yeSBSLiBTaWVua2lld2ljeicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDM1LFxyXG4gICAgICAgICAgICB4OiAyNzQuNjA0MTU2MDM3MTI3MjcsXHJcbiAgICAgICAgICAgIHk6IC0yNy4yNzMzMDk2MjU4NDU2N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzczMjMzNTYtNScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdIaWRlbm9yaSBIaXJhbWF0c3UnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0LFxyXG4gICAgICAgICAgICB4OiAtMzYuNjA1NDI0MjUxOTUwNDQ2LFxyXG4gICAgICAgICAgICB5OiAxMTUuODUwMDg5MzE5OTg4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDcwMzAxOS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0hpZGVvIEhvc29ubycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDY4LFxyXG4gICAgICAgICAgICB4OiAtOS44NTk0NTcwOTQyMzczMzMsXHJcbiAgICAgICAgICAgIHk6IDExMi4xODM3NDY5NjM0ODkxM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQyNTMwNjEtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdIaWRlbyBPaG5vJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNTUsXHJcbiAgICAgICAgICAgIHg6IDE2LjQyNDM5NzgzNTkxMzk5MyxcclxuICAgICAgICAgICAgeTogMS41OTgxMjkwMzIxMTQxMTYyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTI3MjA2OS02JyxcclxuICAgICAgICAgICAgbmFtZTogJ0hpcm9taWNoaSBPdGEnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxOSxcclxuICAgICAgICAgICAgeDogLTQyLjkzMDIzMTIzMzI5OTU2NSxcclxuICAgICAgICAgICAgeTogNzIuMDMwODE1NzgyOTYxMThcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MDQxMjAwLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSGlyb21pdHN1IElzaGlpJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDAsXHJcbiAgICAgICAgICAgIHg6IC0yNDAuNDUwOTYyOTMzOTI5NixcclxuICAgICAgICAgICAgeTogLTE1MC4yNzYwMTI2NTk4ODM1MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4NjMzNjMtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdIaXNhdG8gWWFidXRhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDAsXHJcbiAgICAgICAgICAgIHg6IDYwLjQzNzIxNDc2NjU0NTUsXHJcbiAgICAgICAgICAgIHk6IDU2LjQ5NjY0OTIxODgxMzg3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzM4NTIyNC0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0hpdG9zaGkgSG9rYXJpJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcclxuICAgICAgICAgICAgeDogLTI0MS44MzEwMzMzNzk5NTExLFxyXG4gICAgICAgICAgICB5OiAtMTMzLjU0MDQ5Nzc5Mjk1NDI4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTA0MTIwMC00JyxcclxuICAgICAgICAgICAgbmFtZTogJ0lrdWhpcm8gWWFtYWd1Y2hpJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTAsXHJcbiAgICAgICAgICAgIHg6IC0yMjguNzgwODY3MDE3MTkxNTMsXHJcbiAgICAgICAgICAgIHk6IC0xNjIuMzY2NzE1ODg1NjAxN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQ5OTcyNjItMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdJa3VvIFNha29ubycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDksXHJcbiAgICAgICAgICAgIHg6IC0yMi40NTE1NTY2NTIzOTM5NDMsXHJcbiAgICAgICAgICAgIHk6IC0zNC4wNDc1MDE2ODQxODIxMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUwODE0MjItMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdJc2hpYW5nIFNoaWgnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyOCxcclxuICAgICAgICAgICAgeDogLTI4Ni4zMjcwNzc1OTQwMzk2LFxyXG4gICAgICAgICAgICB5OiAtMjMuNzMzMTA1MTE5NDU4NDk3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjI4MTg5OC0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0phY3F1ZWx5biBBLiBNYXJ0aW5vJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDMsXHJcbiAgICAgICAgICAgIHg6IC03Ny40MDQyNjY3NDYzMDI1OCxcclxuICAgICAgICAgICAgeTogMjMzLjE0MzY2MjA5Mzk3NDA2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjY2NTY0OC0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0phaS1KZWluIFl1JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcclxuICAgICAgICAgICAgeDogLTMxLjg0MDA1Mjg2NDkyNjczLFxyXG4gICAgICAgICAgICB5OiAtOTEuNjIzNzU3NDczNjQxMTlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0ODA5Njk3LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmFtZXMgRC4gQ2F1c2V5LCBJSUknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMDgsXHJcbiAgICAgICAgICAgIHg6IC0xNzguMjY1MjE2MTIwNDIyLFxyXG4gICAgICAgICAgICB5OiA1MS43NTU2ODA5MzA3NDY2ODVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0ODYzNDI1LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmFtZXMgTC4gSGVua2UnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyNSxcclxuICAgICAgICAgICAgeDogLTIyOS44MjYzMjMyNjY5MzE0NCxcclxuICAgICAgICAgICAgeTogODEuMTQ4MzkxODM1MDQ1MVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU1MzMyMzgtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKYW1lcyBTYXknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMTUsXHJcbiAgICAgICAgICAgIHg6IC0xMTAuMjY1MTQ2NTA1NTAzMTMsXHJcbiAgICAgICAgICAgIHk6IDE4OS43Mzg0MTkwNzI2MTM3NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3MTE1NjUtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKYXNvbiBab3NzJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTQsXHJcbiAgICAgICAgICAgIHg6IC0zNi43OTc2MzU4MzA0MTMzOCxcclxuICAgICAgICAgICAgeTogLTMwMy4zNjA2MjkzMTQwMDU3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU1MTI3Ni04JyxcclxuICAgICAgICAgICAgbmFtZTogJ0pheSBZb25lbW90bycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI2LFxyXG4gICAgICAgICAgICB4OiAtMTA4LjM5MDYwMTE1MDY1Njk2LFxyXG4gICAgICAgICAgICB5OiAzMC42Njc1MzA5NjQ5ODQ4MTdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1ODYzMzI2LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmVmZnJleSBFLiBOYXVzZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDcsXHJcbiAgICAgICAgICAgIHg6IC0zNC45NzQ2ODc4MjY1MTM5OSxcclxuICAgICAgICAgICAgeTogMjI1LjUzNzgxMjc2NjcyNDI3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDk1MTI3OC0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0plZmZyZXkgSS4gQ29oZW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0NSxcclxuICAgICAgICAgICAgeDogLTEwNi42NzcyOTI1NjAwMzQyMixcclxuICAgICAgICAgICAgeTogLTI3NS45NjY1NTc2NTE4MjEyM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYzOTM2MDUtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKZWZmcmV5IExvb21hbnMnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0LFxyXG4gICAgICAgICAgICB4OiAtMTIuMDg5NTIzMjgwODYyMTY0LFxyXG4gICAgICAgICAgICB5OiAtMTQ2Ljg3Mjk1Njg5MjUwNTY0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTI0MzYyMi0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0plZmZyZXkgTS4gRmlzY2hlcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIzLFxyXG4gICAgICAgICAgICB4OiAtNjkuMTE1MTA1NzY0MDM2NjMsXHJcbiAgICAgICAgICAgIHk6IC0xMjEuNTk1OTYyMzgyNzg5MTFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1ODk3NTYzLTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmVmZnJleSBTLiBTd2F5emUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMzcsXHJcbiAgICAgICAgICAgIHg6IDE4Mi43NTc1MjE4NzcwNzEyLFxyXG4gICAgICAgICAgICB5OiAtNDIuNjUyMjY0ODc1Mzk3OTI1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzYwODc2MS00JyxcclxuICAgICAgICAgICAgbmFtZTogJ0plbm5pZmVyIFJpbmVoYXJ0JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOSxcclxuICAgICAgICAgICAgeDogMTQuNjAzMDMzNzE3NjQ0ODc3LFxyXG4gICAgICAgICAgICB5OiAyNTguMDE2OTM4MDc5NDMwNzZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3MzgwNjk2LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmVycnkgUi4gTW9yZ2FuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcclxuICAgICAgICAgICAgeDogMjQwLjc3OTIzNTEyNTM5MTcyLFxyXG4gICAgICAgICAgICB5OiAwLjc1NjE4NTY1NTIyMjYyNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU3MTU0NTAtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKZXNzZSBBbWJyb3NlJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTksXHJcbiAgICAgICAgICAgIHg6IDM2LjE4MDQyMzUxNDUwODIwNixcclxuICAgICAgICAgICAgeTogLTI3MS4xMTgxNTE4OTE2NjY1N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3MTE1NjUtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKaWFuLUp1bmcgWWluZycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE1LFxyXG4gICAgICAgICAgICB4OiAtNTIuNDA1OTQzNjI5MTYwMjcsXHJcbiAgICAgICAgICAgIHk6IC0yOTguNjIwOTg1MjQ0NjU3N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1MTYyMjctNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKb2V5IENoZW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1MCxcclxuICAgICAgICAgICAgeDogLTE1NC41NDY2NzEzNjI5MDk5MyxcclxuICAgICAgICAgICAgeTogMjA4Ljk1MDcyMjgwNzM0MzM3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjIzMzYxNy0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0pvaG4gQ29rZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyOSxcclxuICAgICAgICAgICAgeDogLTEwNy44MTg5MzgxNTYzMjE0NCxcclxuICAgICAgICAgICAgeTogLTE3MC45MDc0Njc2MjMxNjU2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDU2MTQ0NC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0pvaG4gSC4gTGl2aW5nc3RvbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMxLFxyXG4gICAgICAgICAgICB4OiAtMTUyLjg1MzAwNDQ0NTgzOTU2LFxyXG4gICAgICAgICAgICB5OiA4NS4xMDk0MDAwODk2NDk2N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUyMzcxNzgtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKb2huIEouIE1hc3Ryb3RvdGFybycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDc3LFxyXG4gICAgICAgICAgICB4OiAtMjA1LjQ5NzM5NTkwOTU4NTMyLFxyXG4gICAgICAgICAgICB5OiA1MC4zMTQ3Nzk3MDQ4NDg2OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY0MjQ4NDctMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKb2huIEouIFNoaW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA2LFxyXG4gICAgICAgICAgICB4OiAtMTg1LjM3NDQ2MzU1NzEwMzg0LFxyXG4gICAgICAgICAgICB5OiAtMy4yODcyMDI3MTA2MjM1ODk1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTcxMzkxMS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0pvaG4gVy4gQmVhcmRzbGV5JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTEwLFxyXG4gICAgICAgICAgICB4OiAtMzMuODE0NzU5ODg2MzgyMDIsXHJcbiAgICAgICAgICAgIHk6IDI2Mi44ODI2NzIxMTExMzcyNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY2OTAzODctMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKb2huIFppbW1lcm1hbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE2LFxyXG4gICAgICAgICAgICB4OiAtMTAzLjg2NDM2NDI4NTAxLFxyXG4gICAgICAgICAgICB5OiAyODcuMDMyNDE1MjA3NzAzNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYyOTU1MzAtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKb25hdGhhbiBCcmFkc2hhdycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDcsXHJcbiAgICAgICAgICAgIHg6IC0yMTEuODcxNDI2MDkxMDQ3OCxcclxuICAgICAgICAgICAgeTogLTIyNC41MDkwNDc4NzQ0NTEyM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY5NjQzNjMtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKb3NlcGggQ2hhcmxlcyBIZXVpbCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXHJcbiAgICAgICAgICAgIHg6IDE1Ny44OTQ5MDk2MDk3NTQyOCxcclxuICAgICAgICAgICAgeTogLTEyNi40NDc4MTgzMTk3NTA2NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4MDQzMzAtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKb3NlcGggSGFyYicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE2LFxyXG4gICAgICAgICAgICB4OiA2MS4xMjY2NDgyMjQ1ODU2NixcclxuICAgICAgICAgICAgeTogLTI2OC4xOTA4ODE2NjExODk5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzE1NDQ3Ny0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0pvc2h1YSBBLiBTdHJpY2tvbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMxLFxyXG4gICAgICAgICAgICB4OiAxNDMuNjA3NzI3NjQ1OTk5LFxyXG4gICAgICAgICAgICB5OiAtMjgxLjY2OTM2OTI2MTE0MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY2NjU2NDgtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLYXJlbiBCcm9kZXJzZW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyLFxyXG4gICAgICAgICAgICB4OiAtNTIuODg3NzYxNjE3NDA2NzQ2LFxyXG4gICAgICAgICAgICB5OiAtMTM1LjI1MzI0NjAxMjEyNzQ4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjkxNDE4Mi0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0thdHN1dG9zaGkgVGFrZWRhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTIsXHJcbiAgICAgICAgICAgIHg6IC0zMDEuODk0MzM0ODc2OTExODQsXHJcbiAgICAgICAgICAgIHk6IC03MC40MzMyNDY1MDgwODkwNlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU5MjUyMjQtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLYXp1a2kgS29iYXlhc2hpJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjIsXHJcbiAgICAgICAgICAgIHg6IC00MS45MDA2NzY5MTgwOTY0MTYsXHJcbiAgICAgICAgICAgIHk6IDcuMzAxMzU4NTk2NjIyOTEyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzA2MTAxNC00JyxcclxuICAgICAgICAgICAgbmFtZTogJ0thenVzaGlnZSBVZWRhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOCxcclxuICAgICAgICAgICAgeDogLTM3LjY2NDk2MzYzNDQ4MzIzLFxyXG4gICAgICAgICAgICB5OiA1OS42MjQ3NTU2NTczODI4NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQzNTY0NTUtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLZWlzaGkgU2FpdG8nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA2MCxcclxuICAgICAgICAgICAgeDogMTAuMjE5MTQwNjMzOTEwMDg1LFxyXG4gICAgICAgICAgICB5OiAxMTQuNjA2MTEwMDg0NjA1NjdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MTc1NzUyLTknLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2VpdGggQS4gRnJpZWRtYW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1NixcclxuICAgICAgICAgICAgeDogLTcyLjc2NDc4Mzk5NDMyNjkyLFxyXG4gICAgICAgICAgICB5OiAxNTcuOTYyODAyNDYwMTQ3MzRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICdEMjYzOTg3LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2VpdGggTC4gTWlsbGltYW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNDgsXHJcbiAgICAgICAgICAgIHg6IDI4NS4yNzA1NTE0NjMwOTgwNixcclxuICAgICAgICAgICAgeTogLTQuMTYxNjA3Njk5OTUyODQ1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnRDMwNDIzNC0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0tlaXRoIFJhdGNsaWZmJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNzYsXHJcbiAgICAgICAgICAgIHg6IDI5OC4yNTQzODY1NTY0NDU4NyxcclxuICAgICAgICAgICAgeTogLTYyLjAzNzczMzk5MDczMDYxNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4MzgzOTctMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLZW5nbyBBa2ltb3RvJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzAxLFxyXG4gICAgICAgICAgICB4OiAyMzMuMzA1OTEwODkyODQxMjQsXHJcbiAgICAgICAgICAgIHk6IDExOC4xMjg2NTgxNDc0NDI4M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQwNzIyMzYtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLZW5qaSBOb211cmEnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3MixcclxuICAgICAgICAgICAgeDogLTE4LjQ5MTU3MzYyMDc0ODQ1NCxcclxuICAgICAgICAgICAgeTogMTY0LjMzMTk3NDM4ODIwODVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0ODkwNjExLTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2VubmV0aCBILiBNb2xsZW5hdWVyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTM5LFxyXG4gICAgICAgICAgICB4OiAxNzEuMTIxMzkwOTkxMjUyODQsXHJcbiAgICAgICAgICAgIHk6IDE0OS44Mjc4OTMyMTgzMjA3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTQwOTQ5OC00JyxcclxuICAgICAgICAgICAgbmFtZTogJ0tlbm5ldGggUy4gV2FsZXMnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzNCxcclxuICAgICAgICAgICAgeDogMTUxLjYxNTA2NTAwNDg2MzY1LFxyXG4gICAgICAgICAgICB5OiAtNjguMTcxNTMwMTA5Njk3NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1NTgzNTEtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLZXJzdGluIFJlYnJpbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDgsXHJcbiAgICAgICAgICAgIHg6IC0yMTMuOTk4MzI2NDgyMTk4OTMsXHJcbiAgICAgICAgICAgIHk6IC0xOC4yMTAyMDM1MDk3MDY5NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzcwODMwNzUtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLZXZpbiBSLiBEb2xsJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzMsXHJcbiAgICAgICAgICAgIHg6IDE5NS4xNzE2MTg2MTI5NjQxMixcclxuICAgICAgICAgICAgeTogMjEuODI3NTcxOTA3MTgyODZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODI2NzQ1LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2V2aW4gUi4gTml4JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNSxcclxuICAgICAgICAgICAgeDogLTExMy41MjMxODM0OTY3OTc4NixcclxuICAgICAgICAgICAgeTogLTE4Ni42NTg1MDQ2NDA5Nzc2N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQ2ODI1OTYtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLZXZpbiBXLiBTbWl0aCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI0NSxcclxuICAgICAgICAgICAgeDogMTQyLjAxNTE3MDUyNjE5MjI0LFxyXG4gICAgICAgICAgICB5OiAzNS4zMTcxMzAzMjA0MDAxOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYzMzYxMzctMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLaW5nLUh3YSBMZWUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3LFxyXG4gICAgICAgICAgICB4OiAyOS4xMzY0MTY4MjEzODk1NDUsXHJcbiAgICAgICAgICAgIHk6IC0xNTIuODM4OTIyNzkxMDAxMzVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTUzNTYzLTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2xhdXMgVy4gU3Ryb2JlbCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXHJcbiAgICAgICAgICAgIHg6IDE4LjUwMjI2OTgwMjg5NjE4NyxcclxuICAgICAgICAgICAgeTogLTI3Ny44NDIyOTExOTE2NDQ4NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU3MTU2NzUtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLb3JleSBLbGluZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDY3LFxyXG4gICAgICAgICAgICB4OiAxMDcuMzkyODA4NjQwNDY1NixcclxuICAgICAgICAgICAgeTogMC4xMjQ5NzE2ODM5MTIwODg4MVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3MTgzNjEtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLcmlzaG5hIE1hbmdpYXB1ZGknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyLFxyXG4gICAgICAgICAgICB4OiAtMjIxLjQyMzUxMTgxMDk1Mzc2LFxyXG4gICAgICAgICAgICB5OiAyMTAuNjg0NjIxMDc2MjE2OTZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTc3NzI2LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnS3VhbmctWWFuZyBIdWFuZycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDcsXHJcbiAgICAgICAgICAgIHg6IC0xMTAuOTAyOTM0NzQ0MTk2MzQsXHJcbiAgICAgICAgICAgIHk6IC0xNDQuMTEwNzQ3NzI3NDAxOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzcxNTk3NTAtNScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdMZWUgQW5uIE9sc29uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTAyLFxyXG4gICAgICAgICAgICB4OiAtMTIuMjkxMDQ1NzI5ODE2NTkzLFxyXG4gICAgICAgICAgICB5OiAyODQuMzIyODI0MDI3NjcxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjcxODM2MS00JyxcclxuICAgICAgICAgICAgbmFtZTogJ0xlcm95IFIuIEthcmdlJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNixcclxuICAgICAgICAgICAgeDogLTI0Ni41Njg5ODQ5NTkwMTgyOCxcclxuICAgICAgICAgICAgeTogMTc2Ljg2NDMwODI0ODkxMjhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTUxMjc2LTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTHVpcyBKLiBNYWxhdmUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyNSxcclxuICAgICAgICAgICAgeDogLTE1MC40Njk1NTE1ODQxMjEwNixcclxuICAgICAgICAgICAgeTogMTUuNDY2NjgxMzU1NTk0MDQzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjA0ODExMC0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0x5biBNLiBJcnZpbmcnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1MCxcclxuICAgICAgICAgICAgeDogMTg1Ljg5MzY4MjU1MjAzNjM4LFxyXG4gICAgICAgICAgICB5OiAyMTEuNzM0OTczMTY4Mzc0NDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzE4MzYxLTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTHlubmUgTS4gTXVyYWNoJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNixcclxuICAgICAgICAgICAgeDogLTE4NC41OTczMTYxMjU5OTM3OSxcclxuICAgICAgICAgICAgeTogMTY4Ljk1NDU5MDMwMTI4NDA0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTk0ODc4OS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ01hZ251cyBMYXJzc29uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzIsXHJcbiAgICAgICAgICAgIHg6IDI4Mi4zNDk4NzQzNDkyMzA0LFxyXG4gICAgICAgICAgICB5OiAtMTA1Ljg1MzkwNTc2ODM5NDA5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjgyOTY1NS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ01hZ251cyBWZWpsc3RydXAnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1LFxyXG4gICAgICAgICAgICB4OiA4NC41NzY4MzQyMDUwNTg0OSxcclxuICAgICAgICAgICAgeTogLTIxMS42MDU0NjU5MTEyOTEyMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3MTE1NjUtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNYXJjIENhbHRhYmlhbm8nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxOCxcclxuICAgICAgICAgICAgeDogLTIxLjU3MjUwMzU0NzAzMTc2NSxcclxuICAgICAgICAgICAgeTogLTMwMy4yNTAwMTIwNDgwMDg4NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzcwNzg1MDMtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNYXJpYW5uZSBNYWx2ZW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyNCxcclxuICAgICAgICAgICAgeDogMzkuMzY0Nzg5MTIxODM5ODIsXHJcbiAgICAgICAgICAgIHk6IDIwNC41MDc2MTA4ODIzNzk2MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYyMjMyMDUtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNYXJrIEUuIENyb3ZlbGxhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTEsXHJcbiAgICAgICAgICAgIHg6IC0yMzkuMTMwNjczMzkyMDc2LFxyXG4gICAgICAgICAgICB5OiAxNTkuNTM4NjI2ODEyMDcwM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY2MjE4MzQtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNYXJrIFJhbmRsZSBCb3lucycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDksXHJcbiAgICAgICAgICAgIHg6IDkyLjk1MTU5OTEzNDA4NDQsXHJcbiAgICAgICAgICAgIHk6IDEzOS43MjQ5MTY5OTQxODEyOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU1MzQxMzItMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNYXJrIFMuIFZyZWVrZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDk5LFxyXG4gICAgICAgICAgICB4OiAtMTI2LjE3NDE0MjQwODI1MjAyLFxyXG4gICAgICAgICAgICB5OiAxODIuMTQ4ODY4MDE3NDg1MzRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0ODkyMjQ0LTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWFyayBTLiBaZWluZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMTIsXHJcbiAgICAgICAgICAgIHg6IDg3Ljg2NTUxMjMzOTQ0NzkyLFxyXG4gICAgICAgICAgICB5OiAtOTMuNjE0MzU5NDk5MDY4NjZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODI5NjU1LTYnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWFydGluIFN1c3NlcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDgsXHJcbiAgICAgICAgICAgIHg6IDg2LjUxNjY0NDk3MTYzMTEsXHJcbiAgICAgICAgICAgIHk6IC0xNzYuMzY4MDU2ODYyNDg0MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQ0ODY3MjAtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNYXNhaGlybyBIaXJhbm8nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA2NCxcclxuICAgICAgICAgICAgeDogLTI2LjQ3Mzk0MTAyMTMyODgzNCxcclxuICAgICAgICAgICAgeTogNTAuNTgzODc3NTAxMjg3NDc1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTYyMjY1My0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ01hc2FoaXJvIE9yaXRhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTMsXHJcbiAgICAgICAgICAgIHg6IC00My4zMTE5NDM1MTI0Njk1MDQsXHJcbiAgICAgICAgICAgIHk6IDg4LjA1ODUyNDAxMDkyMzYyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjA4MDk5OC0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ01hc2FvIElzb211cmEnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxyXG4gICAgICAgICAgICB4OiAtMjc3LjE2NzM5Njg3MzM0MTksXHJcbiAgICAgICAgICAgIHk6IC02OS4xNjMxMzU5MDM1ODc2OVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQ5MDI2NzEtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNYXNhc2hpIEthd2FzYWtpJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDQsXHJcbiAgICAgICAgICAgIHg6IDI1LjQ5OTgzNDk4MTc1MTUwNSxcclxuICAgICAgICAgICAgeTogMTIuNDU4ODM1OTYyOTA3NzY4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTExNzgzOC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ01hdHRoZXcgQS4gUGFsbWVyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjEzLFxyXG4gICAgICAgICAgICB4OiAxMTEuODQ0NDA3MTk1MTI4NzEsXHJcbiAgICAgICAgICAgIHk6IDE3LjU1MzUyMjQzODU0NzMxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU3NzcyNi0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ01hdHRoZXcgUy4gTWFsZGVuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTUsXHJcbiAgICAgICAgICAgIHg6IC04OS43NzI4MTcxNTc2MjExMixcclxuICAgICAgICAgICAgeTogLTIxMi41MjAwMDk5NDgwNzQ1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjY2NTY1NS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ01pY2hhZWwgQS4gTXllcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXHJcbiAgICAgICAgICAgIHg6IC0yMjIuMTU0ODk4NDI2NjI3OCxcclxuICAgICAgICAgICAgeTogLTkxLjg4MzcwNzc5OTg3MTI1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTYzMjQzMi00JyxcclxuICAgICAgICAgICAgbmFtZTogJ01pY2hhZWwgRS4gU2V0c2VyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDYsXHJcbiAgICAgICAgICAgIHg6IDIzNi4xNDUzNDg2OTA1OTE1LFxyXG4gICAgICAgICAgICB5OiAtMjkuNTMzMDQzNDM3NDE2Njc2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTMwNjYyMy0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ01pY2hhZWwgRi4gVG9tYXNjbycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDg5LFxyXG4gICAgICAgICAgICB4OiAtMTM2LjM1MDM0MDIyMzAxOTI2LFxyXG4gICAgICAgICAgICB5OiAxNjYuODczNzY3ODYwOTUzNjJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NjA2NzQ0LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWljaGFlbCBHLiBNaWt1cmFrJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTQsXHJcbiAgICAgICAgICAgIHg6IDE0My4wNjEwNzEyMzgyODc4NyxcclxuICAgICAgICAgICAgeTogMjAzLjY4NjUwMDMwODY0Njg2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjI2NDA4Ny0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ01pY2hhZWwgUC4gV2hpdG1hbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEzNCxcclxuICAgICAgICAgICAgeDogODguMzEzMzA3OTA5ODg4MjIsXHJcbiAgICAgICAgICAgIHk6IDIzNy4xMDQ3NjUyODA1ODQyMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY2NjU2NDgtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNaWNoYWVsIFRzdW5naHNpIFl1JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMixcclxuICAgICAgICAgICAgeDogNy4zMDQ1NTk3NDExODgxMDA1LFxyXG4gICAgICAgICAgICB5OiAtMTAxLjYyODkzMzQ2OTg2MzIzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjA4MTUxOC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ01pY2hlbCBLLiBCb3dtYW4tQW11YWgnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1NixcclxuICAgICAgICAgICAgeDogMTUzLjU1ODA1NzAzMjkyNjc0LFxyXG4gICAgICAgICAgICB5OiAyNzguNzU4NDE2MzU5MDQwM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQyMjQ3MjUtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNaWNoaW8gS2Fkb3RhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTczLFxyXG4gICAgICAgICAgICB4OiA3MC4yNTI0OTExMDA2NzAxMSxcclxuICAgICAgICAgICAgeTogMjYwLjE3NjMwNjg0NTAwNzg0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjg1MDk0OS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ01pa2UgTXllcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXHJcbiAgICAgICAgICAgIHg6IDIwMC45ODQxMDAyNzI5MDY3NyxcclxuICAgICAgICAgICAgeTogLTE2NS4xODAwOTk0MTU5MTg3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTI2MTAzNy0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ01pbiBaaHUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMTksXHJcbiAgICAgICAgICAgIHg6IDE4Ny4yMTc4Nzk5MDUxOTQ0NSxcclxuICAgICAgICAgICAgeTogMTE5LjE4MDUyMzIyMjQxMTI0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjczMjEwMC00JyxcclxuICAgICAgICAgICAgbmFtZTogJ01pbmd0ZSBKLiBDaGVuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcclxuICAgICAgICAgICAgeDogLTc0Ljg5Mzk2ODIxMTM1MDU0LFxyXG4gICAgICAgICAgICB5OiAtMTQ0LjQ4MTUxMDExODQwOTg2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTE3NjUwMi0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ01pdGNoZWxsIEouIFBhbG1lcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQwLFxyXG4gICAgICAgICAgICB4OiAzMTUuNzkwOTI2MjEzMzc1MzcsXHJcbiAgICAgICAgICAgIHk6IC01OC43OTY2NjkzOTQxOTc2M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzczODUyMjQtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNb3RvaGlrbyBZb3NoaWRhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNSxcclxuICAgICAgICAgICAgeDogLTIzMS4xODc2ODMyNDg0NzQ0MyxcclxuICAgICAgICAgICAgeTogLTExNi40NTEwNzc1Njc5MTI3MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU5MTgxNTktMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNdW5kaSBGb211a29uZycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEyLFxyXG4gICAgICAgICAgICB4OiAtMjIxLjYyNTI2ODE1MzUzMTg2LFxyXG4gICAgICAgICAgICB5OiAtMjAxLjc1MzE3Mzg4MjY1NDc1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzYzMjk4NS0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ05hbmN5IFRheWxvcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUsXHJcbiAgICAgICAgICAgIHg6IDUwLjAxNTg4NjQ5Mjk1Njg0NSxcclxuICAgICAgICAgICAgeTogMjI3LjI3NTk1NDA3ODA0OTdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3NDY4MzA0LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTm9idXl1a2kgS2FqaScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE2LFxyXG4gICAgICAgICAgICB4OiA0MS44MjIzNzYwODIxNjE2OTYsXHJcbiAgICAgICAgICAgIHk6IDUyLjUxNDI0Njc1Mjg1NDI1NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzcyMDU3MTYtNScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdOb3JpaGl0byBTb25lJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTksXHJcbiAgICAgICAgICAgIHg6IDI2OS4xMTUwNjU1NjczMTQsXHJcbiAgICAgICAgICAgIHk6IDcwLjAxMjI0ODM2MjQ5MzU4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTM1ODUxNC0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ1BhdWwgTS4gTWVhZG93cycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDcwLFxyXG4gICAgICAgICAgICB4OiAtMTcxLjI2OTc1NTMxNjM4NDcsXHJcbiAgICAgICAgICAgIHk6IDI1Ni41NDc5NDM5MDg4NzE3M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1NTgzNTEtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdQYXVsIFYuIEdvb2RlJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTU0LFxyXG4gICAgICAgICAgICB4OiAtMjMwLjE2MTE0MTk2MzkwOTM2LFxyXG4gICAgICAgICAgICB5OiAtMTMuNDEwMzE0ODQ1MDAxOTEzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjcxMTU2NS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1Bhdml0cmEgU3VicmFtYW5pYW0nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMCxcclxuICAgICAgICAgICAgeDogLTYuMzcyNzQ4MzQ3OTQ3MzM4LFxyXG4gICAgICAgICAgICB5OiAtMjk3Ljk2NzAyNjQ5MDkwNjhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICdENDIzNzYxLTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUGV0ZXIgSG9uZycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI1LFxyXG4gICAgICAgICAgICB4OiAtMjA3LjAyOTEzNDQ0NDU4NzU2LFxyXG4gICAgICAgICAgICB5OiAxMTMuMjA0NDQ3NzIwNzc0NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYxNTI5ODctMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdQZXRlciBNYXJkaWxvdmljaCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDExMCxcclxuICAgICAgICAgICAgeDogLTExMy43MDU0MTQ2Mjc2MzQxNCxcclxuICAgICAgICAgICAgeTogLTcxLjYzODY2ODc4NDQ4OTI4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTg3MzA5Ni0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1BldGVyIFMuIExpbScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE5LFxyXG4gICAgICAgICAgICB4OiAtNDEuNDk3MTU3NTk5NDc3OSxcclxuICAgICAgICAgICAgeTogLTIyOS44NjM0NzM4NDg2MzA4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjczMjExMS00JyxcclxuICAgICAgICAgICAgbmFtZTogJ1BldGVyIFNpYW0gU3kgTGltIElJSScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXHJcbiAgICAgICAgICAgIHg6IC0xMTkuNjg3NzYwODcxODEyOTEsXHJcbiAgICAgICAgICAgIHk6IC0yNjQuNzQ0MTE1MzE0OTI0MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4NTA4OTUtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdQZXRlciBTaWFtIFN5IExpbSwgSUlJJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcclxuICAgICAgICAgICAgeDogLTEzNy41MTMyNzg2MTg2ODk5MixcclxuICAgICAgICAgICAgeTogLTI1My4wNTAxNTI2MzQxNjAxM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzcxNTk3NTAtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdQaGlsaXAgUm95JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDUsXHJcbiAgICAgICAgICAgIHg6IC01NS45MTUzMzE4MzczMzQ1ODQsXHJcbiAgICAgICAgICAgIHk6IDI2NS40NTI3Mzk5ODU5MDU5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjEwMzAzMy03JyxcclxuICAgICAgICAgICAgbmFtZTogJ1BoaWxsaXAgSm9obiBQbGFudGUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3NixcclxuICAgICAgICAgICAgeDogLTg5LjU2MTcyNjM0MjczOTM4LFxyXG4gICAgICAgICAgICB5OiAxMjguNDkzNTk5NTQwMjA5MzdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1OTc4ODI5LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUGktWXUgQ2h1bmcnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNSxcclxuICAgICAgICAgICAgeDogNzkuMDMzMzAzMDk3NjgzMzMsXHJcbiAgICAgICAgICAgIHk6IC0xNjYuODk2MjAzMDE0MDI2OTVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MDkyMDgzLTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnUHJhc2hhbnQgQ2hhdHRlcmplZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEyLFxyXG4gICAgICAgICAgICB4OiAtMTI3Ljk4MTY2MjQ4OTc4MDQ1LFxyXG4gICAgICAgICAgICB5OiAtMjI2LjA5NTkwMzIyOTgzMDY3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzM0MDQxMS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1JhY2hhZWwgTC4gQ29vaycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXHJcbiAgICAgICAgICAgIHg6IDE0NS41ODE2NDM0OTUzNjg1LFxyXG4gICAgICAgICAgICB5OiAtMTg1LjkxMTUyMjc4NDgyNTFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0ODcyNjAzLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUmFscGggU3RlYXJucycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDgyLFxyXG4gICAgICAgICAgICB4OiAtMTcuNjM4MjYxMTM5NzQwMDc3LFxyXG4gICAgICAgICAgICB5OiAzMTEuODc0NDAwOTYwMTYyMzVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODM2NTQwLTYnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUmFuZHkgSG9mZm1hbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDY2LFxyXG4gICAgICAgICAgICB4OiAtOTYuNjc5MTUwNjIyNzE1MjMsXHJcbiAgICAgICAgICAgIHk6IC0xOC44NjMyNjc2NDIzMzgzNTdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0Nzk4NTk0LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUmljaGFyZCBBLiBIaWxsc3RlYWQnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1NixcclxuICAgICAgICAgICAgeDogMjIwLjk0MDQzMDQzMjU4ODcsXHJcbiAgICAgICAgICAgIHk6IDE1NS45MjEyNDkzMjE3MTcxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTA5NzEyMi0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ1JpY2hhcmQgRS4gUHVydmlzJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjIsXHJcbiAgICAgICAgICAgIHg6IC0yMzEuNjIyMTE3MzQ4NTMxMixcclxuICAgICAgICAgICAgeTogNTguNTMyNzg4NTkzNDA2NDY1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjI2ODgwMy0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ1JpY2hhcmQgR29ybWFuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTAsXHJcbiAgICAgICAgICAgIHg6IDc2LjcxNjY3NDM5MjI4MjAyLFxyXG4gICAgICAgICAgICB5OiAtMjQ3LjQwNzU2ODQ3NTQzMzY2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTI3MTU0My0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1JpY2hhcmQgTC4gR3JhbnQnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMixcclxuICAgICAgICAgICAgeDogMTA4LjM3NzkwMjYxNjM4MTU2LFxyXG4gICAgICAgICAgICB5OiAtMTA5LjUzNDI5Nzc0MDExMjA1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjA5MjA4My0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1JvYmVydCBBLiBCcm9kZXJzZW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMSxcclxuICAgICAgICAgICAgeDogLTExNi43ODY3NzMyOTM4MDMzMixcclxuICAgICAgICAgICAgeTogLTIxMS43NDMxMjE3Mjc1NDg5OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU4NzMwOTYtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSb2JlcnQgQnJvZGVyc29uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcclxuICAgICAgICAgICAgeDogMzIuNDcwNTY0MzYyNzEwMzM0LFxyXG4gICAgICAgICAgICB5OiAtMjEyLjM1NjUwMzc2MTY5MDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1OTYzOTUzLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUm9iZXJ0IENyYW0nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxyXG4gICAgICAgICAgICB4OiAzOS43MzE2NTYyMjgwMzYwNDQsXHJcbiAgICAgICAgICAgIHk6IC0xNTkuNzAxMTc0MTk2NjI4NTNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0MzYyMzg3LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUm95IENsYXJrJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjMsXHJcbiAgICAgICAgICAgIHg6IC0xNDMuMzgwNjU0Njc4MDU1ODMsXHJcbiAgICAgICAgICAgIHk6IC04My4xODY0NjkzMjMzMjg5NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU0MTc3NzAtOCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSeW8gSGF5YXNoaScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDcxLFxyXG4gICAgICAgICAgICB4OiAxMDkuNTY5MDAyNzAxODEzMjIsXHJcbiAgICAgICAgICAgIHk6IDk0LjI2OTA3NzYxOTMzMzlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MDgxODc1LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnU2Fuam95IENoYXR0ZXJqZWUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyLFxyXG4gICAgICAgICAgICB4OiAtMTY4LjU1MzUxNzE5MzczMjc0LFxyXG4gICAgICAgICAgICB5OiAtNTUuMDAzOTEzMjc3MTAwNzJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NDE2MjU1LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU2NvdHQgQS4gQmVyZ2VtYW5uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTA2LFxyXG4gICAgICAgICAgICB4OiAyMzYuOTg0MzY1ODQzNzgzMSxcclxuICAgICAgICAgICAgeTogLTE1NC41Mzg1MzI4OTM2MzE0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjcyNDM5OS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ1NoYW5rYXIgUy4gTmF0aGFuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcclxuICAgICAgICAgICAgeDogOC4wMTc2NTEzMjY3MTM4MDMsXHJcbiAgICAgICAgICAgIHk6IC0xMzIuNjc0MzkyMDU2MzI2NjRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODA0MzMwLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU2hhbm5vbiBKb25lcycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUsXHJcbiAgICAgICAgICAgIHg6IDcxLjEzMjA2OTgxODQ0NjMxLFxyXG4gICAgICAgICAgICB5OiAtMjU4LjQ5OTM0MjM5OTQxMzc2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjg4NzczNi00JyxcclxuICAgICAgICAgICAgbmFtZTogJ1NoYW50aGkgR2FuZXNhbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQsXHJcbiAgICAgICAgICAgIHg6IC0zNi45OTQ4ODIxMDc1NjQwNzQsXHJcbiAgICAgICAgICAgIHk6IDE3Ni40NDM1MjEwMzk1MzE2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjE4MzU4OS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1NoaW4gS2ltJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDcsXHJcbiAgICAgICAgICAgIHg6IC0yODcuNjcyNjY0NjY2Nzk4LFxyXG4gICAgICAgICAgICB5OiA0NS44MTI2MTE2NDEzOTA2NzRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NjU0MDMyLTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU29uZ3hpYW5nIFdlaScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDcsXHJcbiAgICAgICAgICAgIHg6IDEzMi4zMTk5MTcxMDQ0MDgyLFxyXG4gICAgICAgICAgICB5OiA4Ni4zMzM2OTIwMTgxMTg3NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3ODM1MjQtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTdGVwaGVuIEMuIEFuZGVyc29uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcclxuICAgICAgICAgICAgeDogNjIuNjIwMDcyMDEzOTUwNSxcclxuICAgICAgICAgICAgeTogMzAyLjQ5NjE4ODU3MDgzMDI3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTc3NDM1Ny0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1N0ZXZlbiBNLiBIb2ZmYmVyZycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEwNixcclxuICAgICAgICAgICAgeDogLTI5OC4xNDk4MTU3ODkzOTk0NCxcclxuICAgICAgICAgICAgeTogODguNTY4MDM1MTA0NTAzOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU1OTQxNjktMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTdGV2ZW4gUC4gSG90ZWxsaW5nJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzA2LFxyXG4gICAgICAgICAgICB4OiAxNzguMzEzNTYyMjQ0MjA3NTYsXHJcbiAgICAgICAgICAgIHk6IC0yNTUuNDMwNDI1MDc0ODA1NzhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTI2MzM1LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3VzYW4gTS4gVHJleXonLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNSxcclxuICAgICAgICAgICAgeDogLTI3OS4yMzM4NDcxMzA0MTgzLFxyXG4gICAgICAgICAgICB5OiAxMzkuOTkyNTczMzY3Mjc5NDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NjM5MjQ2LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVGF0c3V5YSBIb25kYScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEwOSxcclxuICAgICAgICAgICAgeDogMjUwLjA2MDIwNzcyMDE2ODQsXHJcbiAgICAgICAgICAgIHk6IDY2LjMzNDAxMzIyMjY4NjM3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTM0NTYzOS02JyxcclxuICAgICAgICAgICAgbmFtZTogJ1RhdHN1eWEgSXdhc2FraScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDExNixcclxuICAgICAgICAgICAgeDogODYuMzMzNjEzNDQ3MTc3MyxcclxuICAgICAgICAgICAgeTogMTU3LjgyNTkzNDYyMDYwNzQzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjMyNDU2OC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1RoYW5oIERpZWMnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxyXG4gICAgICAgICAgICB4OiAtNzguMDMxNDc0NjkxMjUxODQsXHJcbiAgICAgICAgICAgIHk6IC0yNzIuNTg4NjYwNjg2MTcxOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU3MTU0NTAtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUaG9tYXMgTS4gUm90aHdlaW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMyxcclxuICAgICAgICAgICAgeDogLTE5LjE2NTEwMTAxMzI0MTQ5MyxcclxuICAgICAgICAgICAgeTogLTIwOC4xODA0NjQwODQwNjE5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnUkUzOTg0MS00JyxcclxuICAgICAgICAgICAgbmFtZTogJ1RvZGQgUGhpbGxpcCBPbWFpdHMnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3LFxyXG4gICAgICAgICAgICB4OiAxMjkuOTkzMDY4NTQ2MjUwMDcsXHJcbiAgICAgICAgICAgIHk6IC0yMi4wNDk5MDE2MTUwMzg0MDhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODUwOTQ5LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVG9tIEFic2hpcmUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxyXG4gICAgICAgICAgICB4OiAxNDAuMjY1NjY5MDI3MTUyMjgsXHJcbiAgICAgICAgICAgIHk6IC0xNTMuMzkxNzI5NDg0Mzk1OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzcwNjEwMTQtNicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUb3NoaW8gS2FtaXlhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjUsXHJcbiAgICAgICAgICAgIHg6IDkuMTI2MjcxMjc2MjU0Mzc3LFxyXG4gICAgICAgICAgICB5OiAxMDEuODIyOTg2MzA1NTYzMjZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzE4MzYxLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVmlqYXkgUi4gQmFzYW5pJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOSxcclxuICAgICAgICAgICAgeDogLTIwMS4zODIyNzE3MzIwNTAyNyxcclxuICAgICAgICAgICAgeTogMjA4Ljc0MzI3MDQ5OTI2MzI4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjcxODM2MS01JyxcclxuICAgICAgICAgICAgbmFtZTogJ1ZpdGFseSBTLiBSZXZzaW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMyxcclxuICAgICAgICAgICAgeDogLTE5OC43MDQ3MzA3ODAyNDk4MyxcclxuICAgICAgICAgICAgeTogMTUyLjQwNTIyMTE2NjU5NDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2OTc4OTIxLTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnV2lsbGlhbSBCLiBXZWlzZW5idXJnaCwgSUknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNTIsXHJcbiAgICAgICAgICAgIHg6IDI0OC4yNDM5MzkwNjI5MzczMyxcclxuICAgICAgICAgICAgeTogLTkwLjI5MzQyNTI0MzY5MzI0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTI1Nzk3MS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ1dpbGxpYW0gUC4gVmFuIEFudHdlcnAnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA2OSxcclxuICAgICAgICAgICAgeDogLTI0My41MjA5OTE5MTY3NzksXHJcbiAgICAgICAgICAgIHk6IDIzLjQxNzY3OTk3NzkxMTMyN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4Mjk2NTUtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdYaWFvZmVpIEh1YW5nJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNSxcclxuICAgICAgICAgICAgeDogODkuOTg4NzQxNjEwMzg1NixcclxuICAgICAgICAgICAgeTogLTE4Ny43OTQxMzk5ODE2MzQ4M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUyODM0NTItMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdZaS1DaGkgU2hpaCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMzLFxyXG4gICAgICAgICAgICB4OiAtMzIzLjcxMzU5NjQxODcxMTYzLFxyXG4gICAgICAgICAgICB5OiAyMy45MDg5MzY1ODY0OTQwODZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1OTAxODk2LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnWW9yYW0gR2FsJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNzYsXHJcbiAgICAgICAgICAgIHg6IC0xMDcuMjMyMjU1MTA2MjA0ODksXHJcbiAgICAgICAgICAgIHk6IDEyNC43MzU0MTczOTAyNjExMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQ1NzM0NzItMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdZb3NoaWhpcm8gSXRvJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTg5LFxyXG4gICAgICAgICAgICB4OiAxMTguMjAyNTA5MzgzODM4OTIsXHJcbiAgICAgICAgICAgIHk6IDI4Ny45NjE1MzI2NDM0MjgzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTg1NTk1Ny0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1poZW5nIFl1YW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1OCxcclxuICAgICAgICAgICAgeDogMTM4LjA5MjA2OTUyMTczMTksXHJcbiAgICAgICAgICAgIHk6IDEyNC4wNjQ0MDExNzk3NjkzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX1o1OWFVQkd0WjlQNVF6ZEZpS21aJyxcclxuICAgICAgICAgICAgbmFtZTogJ0FibGFpc2UgTGltaXRlZCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIsXHJcbiAgICAgICAgICAgIHg6IC0xOTAuNDgyMTEzMDAxMDc0MixcclxuICAgICAgICAgICAgeTogLTIzNi41MzYxOTY5ODUzOTQ4N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ180ek8yQmMwOHg1NlhqRHE1VGVCcCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBY2NlbnR1cmUgTExQJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjEwLFxyXG4gICAgICAgICAgICB4OiAxNzIuODY2MDIzMDA4MzM5NTcsXHJcbiAgICAgICAgICAgIHk6IDI1My43MDMzMDgxNTQxNjU4NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19id3E4M2piY2NLcUY0akpyUGNhUicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBZHZhbmNlZCBCaW9uaWNzIEFHJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNjMzLFxyXG4gICAgICAgICAgICB4OiAtMTc2LjkxNDY4NDcyOTgxNTU1LFxyXG4gICAgICAgICAgICB5OiAyMzMuNjMzODgzNTI1OTYxOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19JRFViUzA5WlIwSmhKOGpGRXB0VCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBcHBsZSBJbmMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjEwMjMsXHJcbiAgICAgICAgICAgIHg6IDE1MS42ODI0NjY0MTU3ODg2NyxcclxuICAgICAgICAgICAgeTogLTIyMi4xMjQ4NzQ4ODE0NDg5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX0VoWUZQSUpFbVlRWVJvWXZzbnB5JyxcclxuICAgICAgICAgICAgbmFtZTogJ0Nhbm9uIEthYnVzaGlraSBLYWlzaGEnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3NDU5NixcclxuICAgICAgICAgICAgeDogNDkuNDgyMjM5MjA1NzMyOTYsXHJcbiAgICAgICAgICAgIHk6IDEzNC4wOTIyODg3MzExNTU5MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19JbWVnOVc2UDFURTZJMlF1dFM0eScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDYXNpbyBDb21wdXRlciBDby4sIEx0ZC4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0NTIxLFxyXG4gICAgICAgICAgICB4OiAtMTc5LjgxNzU5MzQxMjA1MTUsXHJcbiAgICAgICAgICAgIHk6IC0xNDIuNzE4Mjg4NTI5MjEwNDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfOGNzTWd0Z25OMG1SRVpwTlAxSmknLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ2VyZWJyYWwgVmFzY3VsYXIgQXBwbGljYXRpb25zLCBJbmMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNCxcclxuICAgICAgICAgICAgeDogMjY4LjgwMDQ1NDE0NDQzODcsXHJcbiAgICAgICAgICAgIHk6IDE2NC41MjM2OTQ3ODMxNTY4M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ18wZVRyM1hJQmpBS3BYa0M2ODIzcicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDZXJtZXQsIEluYy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3LFxyXG4gICAgICAgICAgICB4OiAtNDguNDAzNzI3Njg5NTUxNTYsXHJcbiAgICAgICAgICAgIHk6IDIwNS40NDAyNTg4MzgyNjA2NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ18xMDdXS05QYnZEREtyWkJsbXc4VScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDb250aWdvIFNvZnR3YXJlLCBJbmMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMixcclxuICAgICAgICAgICAgeDogMjk5LjMxNzQzNTkwOTU5NTMsXHJcbiAgICAgICAgICAgIHk6IDQ4LjAzNDkyNDY5ODAwODMzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX3BwRWxrRXRRdkZ0RzZBNDc1NFVJJyxcclxuICAgICAgICAgICAgbmFtZTogJ0Vhc3RtYW4gS29kYWsgQ29tcGFueScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIxNTM5LFxyXG4gICAgICAgICAgICB4OiAyMTEuMzc1MjU5NDEzNTI3ODYsXHJcbiAgICAgICAgICAgIHk6IDIxNy41ODI4Nzc4NjUzMjEwOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ18walBXTTdZcWh0WG0wbG0zZm0xWScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdFTUMgQ29ycG9yYXRpb24nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0OTc2LFxyXG4gICAgICAgICAgICB4OiAtMTg5LjcwMTU2Mjc0ODM4OTczLFxyXG4gICAgICAgICAgICB5OiAtMTEwLjAxNTU5ODkwNDM3NjI4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX1doMmNuT0l6S2xoemp1cVZtT3FZJyxcclxuICAgICAgICAgICAgbmFtZTogJ0VuZWN0byBBQicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXHJcbiAgICAgICAgICAgIHg6IDI0My42NzY1NDEyMjQ2MjU4LFxyXG4gICAgICAgICAgICB5OiAtMTMxLjIwOTAzMTE4NjYwOTlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfWHU2Z1hTc2x0REJaVEFoTUZCV0QnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRXRoaWNvbiBFbmRvLVN1cmdlciwgSW5jLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXHJcbiAgICAgICAgICAgIHg6IDIyNC43MTI0MzU4MDMxNjQ3NyxcclxuICAgICAgICAgICAgeTogMzkuNjA5ODQyNTI1NDc4NjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nLFxyXG4gICAgICAgICAgICBuYW1lOiAnRXRoaWNvbiBFbmRvLVN1cmdlcnksIEluYy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMTk0LFxyXG4gICAgICAgICAgICB4OiAxNzEuMDc0MzcwMjI0NzY2NCxcclxuICAgICAgICAgICAgeTogLTU1LjAzNjgwNzA5ODk0NjA5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX3ZTNnJjS3ljMnFOM3JGZFgwUDJLJyxcclxuICAgICAgICAgICAgbmFtZTogJ0hld2xldHQtUGFja2FyZCBEZXZlbG9wbWVudCBDb21wYW55LCBMLlAuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzUxMTgsXHJcbiAgICAgICAgICAgIHg6IC05MC4zMTAzOTY4NTI2Njk0LFxyXG4gICAgICAgICAgICB5OiAtNTAuMDUyMTYyODkyOTQ1NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ3Blcl90WDJlMnlWTGd5TmdvYkVweldLVCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdIaWRlbyBPaG5vJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNCxcclxuICAgICAgICAgICAgeDogLTM5LjUzNjEyODQyNzA0NDM2LFxyXG4gICAgICAgICAgICB5OiAtMjAuMjcwMjczMzU0OTc3MjUyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX01LdmJuQ2N5UHVkWGV4VXZzU3dGJyxcclxuICAgICAgICAgICAgbmFtZTogXCJIb2xkZW4ncyBGb3VuZGF0aW9uIFNlZWRzLCBJbmMuXCIsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDgzLFxyXG4gICAgICAgICAgICB4OiAyNDAuMDk5OTA1OTg1MTkwOCxcclxuICAgICAgICAgICAgeTogLTIwNi4wMjYzNzYxNDgwNjEyNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19mQTBhenFvQkdFem9Qb3k4NUp5dicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdJTlRVSVRJVkUgU1VSR0lDQUwgT1BFUkFUSU9OUywgSU5DLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEyMDIsXHJcbiAgICAgICAgICAgIHg6IDE1LjM3ODg2Mjg2NTQ0NzYyNCxcclxuICAgICAgICAgICAgeTogMjkwLjIxNzgyMjI4NzUyMjNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfRHR0Wk12a3l2VzNmVjZvQ1VNVEYnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmFwYW4gU2NpZW5jZSBhbmQgVGVjaG5vbG9neSBBZ2VuY3knLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMTU3LFxyXG4gICAgICAgICAgICB4OiAxMy4xNzM0NTA3MzEwNjEwODYsXHJcbiAgICAgICAgICAgIHk6IDU2LjQ4NjE0MDk5NTc3NzY3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX2M1dnlCeks3aWlra1U0RGpRRkhUJyxcclxuICAgICAgICAgICAgbmFtZTogJ0phcGFuIFNjaWVuY2UgYW5kIFRlY2hub2xvZ3kgQ29ycG9yYXRpb24nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0MTgsXHJcbiAgICAgICAgICAgIHg6IDYzLjU2MzE3MDU4Mjc1LFxyXG4gICAgICAgICAgICB5OiA2LjI3MzY3MzUxOTA5MDc1M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19Gdmd2R0ZlOEpaMGlZbFo4MHdlRicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLb25pbmtsaWprZSBQaGlsaXBzIEVsZWN0cm9uaWNzIE4uVi4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNzEzOCxcclxuICAgICAgICAgICAgeDogLTEyMy4yNDE3OTEyMzc5MDE5MSxcclxuICAgICAgICAgICAgeTogMjcwLjk5NzQ2NTQ4NDQxMDE2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX1hjcUNqdFQ4cGk4TWszVWpRbER0JyxcclxuICAgICAgICAgICAgbmFtZTogJ0xHIEVsZWN0cm9uaWNzIEluYy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzMjcyNSxcclxuICAgICAgICAgICAgeDogLTI3Ny4zNDYwMjI5OTg0NTU4LFxyXG4gICAgICAgICAgICB5OiA3LjEzMzY5ODIyMjU0MzAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAncGVyX0RJalVUTTdsSGhEc0F6MnU4amlPJyxcclxuICAgICAgICAgICAgbmFtZTogJ01hc2FzaGkgS2F3YXNha2knLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxyXG4gICAgICAgICAgICB4OiAxOS44OTU0MzY1OTY2NjI5MDgsXHJcbiAgICAgICAgICAgIHk6IC0xMC43MTcxNzgyNTA5MDA5MThcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfR1ZNbExWYndDRFNpcVA5T2c4VG4nLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWVkdHJvbmljIE1pbmlNZWQsIEluYy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4MDAsXHJcbiAgICAgICAgICAgIHg6IC0xODMuNzQwMjM0MTkwNTc0MTcsXHJcbiAgICAgICAgICAgIHk6IDM3LjY4NzIxODc2OTgzOTA4NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19RdzhFc3JOME01Mm5WUVVNNnZzVicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNb25zYW50byBUZWNobm9sb2d5IExMQycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDg2ODksXHJcbiAgICAgICAgICAgIHg6IDE5Ljc2MzkwMTQ4ODM1MjY3MyxcclxuICAgICAgICAgICAgeTogMTk2LjYyMjM2ODYyNTg5Nzc0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX2o1VTVJRWExRkliZ3RyN2lOc1FNJyxcclxuICAgICAgICAgICAgbmFtZTogJ011cmF0YSBNYW51ZmFjdHVyaW5nIENvLiwgTHRkLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDczNDIsXHJcbiAgICAgICAgICAgIHg6IDg3LjY0ODc4MTk3MTA4ODE3LFxyXG4gICAgICAgICAgICB5OiAyOTEuMTAyMzE5NTg3MjM1MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ18xcDRGV0VvSXRqeUtid1RwQ0pvbCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdOZXR3b3JrIEFwcGxpYW5jZSwgSW5jLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUzMCxcclxuICAgICAgICAgICAgeDogLTIyMi4yOTIwMzcyMTE4MDUyLFxyXG4gICAgICAgICAgICB5OiAxNDkuMDgzNzIxNTUyNzIwNjJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfQVRPV0hkNEdHYW9oMTR6dXRYcTcnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUG93ZXIgTWVkaWNhbCBJbnRlcnZlbnRpb25zLCBJbmMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzAsXHJcbiAgICAgICAgICAgIHg6IDEwOC44ODExMDM5OTc0OTcwNixcclxuICAgICAgICAgICAgeTogMTg2Ljg1MzM4NzgyNjI2NTlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfazhWN2M1Z25tQzdTVm11cDVWdTcnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUmFpbmRhbmNlIENvbW11bmljYXRpb25zLCBJbmMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcclxuICAgICAgICAgICAgeDogNjUuMTU3MTc2OTQyNjQ0MTcsXHJcbiAgICAgICAgICAgIHk6IDgzLjQxOTQzNjM3ODIwNDAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnXzI0MmhKZWd3ZlFDZVA5aHNmd3BXJyxcclxuICAgICAgICAgICAgbmFtZTogJ1JpZ2h0IE5vdyBUZWNobm9sb2dpZXMsIEluYy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyLFxyXG4gICAgICAgICAgICB4OiAxODYuODE5NjUyODE2MDIyNjgsXHJcbiAgICAgICAgICAgIHk6IC0xODMuNDAxNzAyNTE0NTg1M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ182cjl0N1pBNllUMDMxT2Q0a01QZycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSaWdodG5vdyBUZWNobm9sb2dpZXMsIEluYy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMCxcclxuICAgICAgICAgICAgeDogLTIzMS43MzYxNTg4MDEyMjIzNixcclxuICAgICAgICAgICAgeTogLTc0LjA5OTE2OTcwOTM0MjUyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnXzJJRjk3elZ5bVN1cmFTblVBWG1xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1NhbnlvIEVsZWN0cmljIENvLiwgTHRkLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDgzODMsXHJcbiAgICAgICAgICAgIHg6IC0yODMuOTAyODI1MzYwODk0NixcclxuICAgICAgICAgICAgeTogLTEyNy44NzI1MzM4MTk2OTE3MVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19wbFpiTHhpeXNFU2JhSTlwT2V5bScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTRU1JQ09ORFVDVE9SIEVORVJHWSBMQUJPUkFUT1JZIENPLiwgTFRELicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEzODg1LFxyXG4gICAgICAgICAgICB4OiAyNTYuMjI4Mzk4NzYzNzkwNSxcclxuICAgICAgICAgICAgeTogMTI0LjQ2MTQxNjk2MDY2NTIyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX0NNV2NvQ0pXUE9maXNMV3JLdnlkJyxcclxuICAgICAgICAgICAgbmFtZTogJ1NoYXJwIEthYnVzaGlraSBLYWlzaGEnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMjU0MCxcclxuICAgICAgICAgICAgeDogNC4wOTU1NjA0MDY0ODI2NzEsXHJcbiAgICAgICAgICAgIHk6IC0zMi4xMzYxODQ4MjU3OTkzOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTaWViZWwgU3lzdGVtcywgSW5jLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI5OCxcclxuICAgICAgICAgICAgeDogLTMzLjkxOTk0NzUyMzE0ODQyLFxyXG4gICAgICAgICAgICB5OiAtMjEyLjU5OTQyODg5ODg4MTFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfSjhWbkF6RnFFaldneHE0ZXY3MXonLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3RhcmlvbiBJbnN0cnVtZW50cyBDb3Jwb3JhdGlvbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIwLFxyXG4gICAgICAgICAgICB4OiAxNzguOTg0MTY2NTQxMTYzNDYsXHJcbiAgICAgICAgICAgIHk6IDE2OS41NDgyMTIxMTE5MDI3NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19tMnROUEprQTJnMUFXT2M3dXpTMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUaGVyYVNlbnNlLCBJbmMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNTMsXHJcbiAgICAgICAgICAgIHg6IC0xMjUuOTE0NTk5ODQ2MDg1MSxcclxuICAgICAgICAgICAgeTogMTMyLjQxNzM5MDU0NTE2MTE3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX0pqck02VW1lT1kwUTVNbW9OaVA4JyxcclxuICAgICAgICAgICAgbmFtZTogJ1RPS1lPIElOU1RJVFVURSBPRiBURUNITk9MT0dZJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzk1LFxyXG4gICAgICAgICAgICB4OiAxOC42MTQxMzAwODExNjY0NixcclxuICAgICAgICAgICAgeTogMTY1LjIxMjUzNjk5NTU0MjE0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX2V3VnNDdXRwUnpEOXBUMDdrQm9FJyxcclxuICAgICAgICAgICAgbmFtZTogJ1R5Y28gSGVhbHRjYXJlIEdyb3VwIExQJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNSxcclxuICAgICAgICAgICAgeDogLTY3LjI1NDMwNTI2NzQyMTA3LFxyXG4gICAgICAgICAgICB5OiAzMDguNjE0OTI4MjA0MTU3OVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ181d05Ocko0ekZRNUtROE9XbnpSQycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdVbml0ZWQgU3RhdGVzIFN1cnRpY2FsIENvcnBvcmF0aW9uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcclxuICAgICAgICAgICAgeDogMjgyLjc4MTAwOTIyNDQzMSxcclxuICAgICAgICAgICAgeTogLTUyLjk4MTU5MDExNTA4NzE0NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ18zdkkyWjVrQzFTYVNsYlVCb09CVCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdXZWJFeCBDb21tdW5pY2F0aW9ucywgSW5jLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIyLFxyXG4gICAgICAgICAgICB4OiAxODcuMzY3NjM5NTExMjg3MTQsXHJcbiAgICAgICAgICAgIHk6IDEwMS4yMDg0OTg0NzA4MDE4MVxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBsaW5rczogW1xyXG4gICAgICAgIHsgc291cmNlOiAnNjUxNjIyNycsIHRhcmdldDogJzUzNTg1MTQtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1MTYyMjcnLCB0YXJnZXQ6ICc1NzU1NzM3LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTE2MjI3JywgdGFyZ2V0OiAnNTk0ODAwNi0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjUxNjIyNycsIHRhcmdldDogJzY1MTYyMjctNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1MTYyMjcnLCB0YXJnZXQ6ICdvcmdfYndxODNqYmNjS3FGNGpKclBjYVInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTM1OTA5JywgdGFyZ2V0OiAnNjUzNTkwOS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjUzNTkwOScsIHRhcmdldDogJ29yZ18xMDdXS05QYnZEREtyWkJsbXc4VScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NDk5MDgnLCB0YXJnZXQ6ICc2MzkzNjA1LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTQ5OTA4JywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1MzU2MycsIHRhcmdldDogJzU3MTU0NTAtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTM1NjMnLCB0YXJnZXQ6ICc1NzE1NDUwLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTUzNTYzJywgdGFyZ2V0OiAnNjU1MzU2My0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1MzU2MycsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTgzMjAnLCB0YXJnZXQ6ICc0ODA5Njk3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTU4MzIwJywgdGFyZ2V0OiAnNDg2MzQyNS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1ODMyMCcsIHRhcmdldDogJzUwOTcxMjItMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTgzMjAnLCB0YXJnZXQ6ICdvcmdfR1ZNbExWYndDRFNpcVA5T2c4VG4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTU4MzUxJywgdGFyZ2V0OiAnNTA5NzEyMi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1ODM1MScsIHRhcmdldDogJzUyMzcxNzgtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTgzNTEnLCB0YXJnZXQ6ICc1MjU3OTcxLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTU4MzUxJywgdGFyZ2V0OiAnNjQyNDg0Ny0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1ODM1MScsIHRhcmdldDogJzY1NTgzNTEtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTgzNTEnLCB0YXJnZXQ6ICc2NTU4MzUxLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTU4MzUxJywgdGFyZ2V0OiAnNjU1ODM1MS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1ODM1MScsIHRhcmdldDogJzY1NTgzNTEtOCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTgzNTEnLCB0YXJnZXQ6ICdvcmdfR1ZNbExWYndDRFNpcVA5T2c4VG4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTYwNDYxJywgdGFyZ2V0OiAnNTkxODE1OS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2MDQ2MScsIHRhcmdldDogJzU5MTgxNTktMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjMxNzQnLCB0YXJnZXQ6ICc0MjUzMDYxLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTYzMTc0JywgdGFyZ2V0OiAnNDkwMjY3MS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2MzE3NCcsIHRhcmdldDogJzQ5OTcyNjItMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjMxNzQnLCB0YXJnZXQ6ICc1OTI1MjI0LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTYzMTc0JywgdGFyZ2V0OiAnb3JnX0NNV2NvQ0pXUE9maXNMV3JLdnlkJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2MzE3NCcsIHRhcmdldDogJ3Blcl9ESWpVVE03bEhoRHNBejJ1OGppTycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjMxNzQnLCB0YXJnZXQ6ICdwZXJfdFgyZTJ5VkxneU5nb2JFcHpXS1QnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTY1NTA5JywgdGFyZ2V0OiAnNDA4MjYwMi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2NTUwOScsIHRhcmdldDogJzUwNDEwODYtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjU1MDknLCB0YXJnZXQ6ICc1MzA2NjIzLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTY1NTA5JywgdGFyZ2V0OiAnNTUzMzIzOC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2NTUwOScsIHRhcmdldDogJzU1MzQxMzItMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjU1MDknLCB0YXJnZXQ6ICc1NjE2NTMyLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTY1NTA5JywgdGFyZ2V0OiAnNTcyMjk5Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2NTUwOScsIHRhcmdldDogJzU5MDE4OTYtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjU1MDknLCB0YXJnZXQ6ICc2MTAzMDMzLTcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTY1NTA5JywgdGFyZ2V0OiAnNjE3NTc1Mi05JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2NTUwOScsIHRhcmdldDogJ29yZ19tMnROUEprQTJnMUFXT2M3dXpTMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NzEyODInLCB0YXJnZXQ6ICc2MDgxNTE4LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTcxMjgyJywgdGFyZ2V0OiAnb3JnXzR6TzJCYzA4eDU2WGpEcTVUZUJwJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU3NDYzNScsIHRhcmdldDogJzU3MTU0NTAtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NzQ2MzUnLCB0YXJnZXQ6ICc1NzE1NDUwLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTc0NjM1JywgdGFyZ2V0OiAnNTk2Mzk1My0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU3NDYzNScsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1Nzc3MjYnLCB0YXJnZXQ6ICc2NTc3NzI2LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTc3NzI2JywgdGFyZ2V0OiAnNjU3NzcyNi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU3NzcyNicsIHRhcmdldDogJzY1Nzc3MjYtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1Nzc3MjYnLCB0YXJnZXQ6ICc2NTc3NzI2LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTc3NzI2JywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU4NzgzNScsIHRhcmdldDogJzY0MzM5MjEtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1ODc4MzUnLCB0YXJnZXQ6ICc2NTI2MzM1LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjAxMDg3JywgdGFyZ2V0OiAnNTI2MTAzNy0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYwMTA4NycsIHRhcmdldDogJzY2MDEwODctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MDEwODcnLCB0YXJnZXQ6ICdvcmdfM3ZJMlo1a0MxU2FTbGJVQm9PQlQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjAyMjUyJywgdGFyZ2V0OiAnNDg5MDYxMS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYwMjI1MicsIHRhcmdldDogJ29yZ19KOFZuQXpGcUVqV2d4cTRldjcxeicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MDQxMTcnLCB0YXJnZXQ6ICc1ODczMDk2LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjA0MTE3JywgdGFyZ2V0OiAnNTg3MzA5Ni0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYwNDExNycsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MDQxMjgnLCB0YXJnZXQ6ICc2MzI0NTY4LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjA0MTI4JywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYwNjc0NCcsIHRhcmdldDogJzY2MDY3NDQtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MDY3NDQnLCB0YXJnZXQ6ICdvcmdfNHpPMkJjMDh4NTZYakRxNVRlQnAnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjA5MTUwJywgdGFyZ2V0OiAnNTk2Mzk1My0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYwOTE1MCcsIHRhcmdldDogJzYzMzYxMzctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MDkxNTAnLCB0YXJnZXQ6ICc2MzM2MTM3LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjA5MTUwJywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYyMTgzNCcsIHRhcmdldDogJzU5NDQ3OTEtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MjE4MzQnLCB0YXJnZXQ6ICc2NjIxODM0LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjIxODM0JywgdGFyZ2V0OiAnb3JnX2s4VjdjNWdubUM3U1ZtdXA1VnU3JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY0MTUzMycsIHRhcmdldDogJzQ4MDk2OTctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NDE1MzMnLCB0YXJnZXQ6ICc0ODYzNDI1LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjQxNTMzJywgdGFyZ2V0OiAnNTA5NzEyMi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY0MTUzMycsIHRhcmdldDogJ29yZ19HVk1sTFZid0NEU2lxUDlPZzhUbicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NDQ1MzInLCB0YXJnZXQ6ICc0MTI3MjI3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjQ0NTMyJywgdGFyZ2V0OiAnNDI4MzAyNC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY0NDUzMicsIHRhcmdldDogJzUxNzY1MDItMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NDQ1MzInLCB0YXJnZXQ6ICdEMjYzOTg3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjQ0NTMyJywgdGFyZ2V0OiAnRDMwNDIzNC0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY0NDUzMicsIHRhcmdldDogJ1JFMjg5MzItMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NDQ1MzInLCB0YXJnZXQ6ICdvcmdfNXdOTnJKNHpGUTVLUThPV256UkMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjU0MDMyJywgdGFyZ2V0OiAnNTI2MTAzNy0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY1NDAzMicsIHRhcmdldDogJzU4NTU5NTctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NTQwMzInLCB0YXJnZXQ6ICc2NjAxMDg3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjU0MDMyJywgdGFyZ2V0OiAnNjY1NDAzMi00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY1NDAzMicsIHRhcmdldDogJ29yZ18zdkkyWjVrQzFTYVNsYlVCb09CVCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NTYxOTMnLCB0YXJnZXQ6ICc0ODkyMjQ0LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjU2MTkzJywgdGFyZ2V0OiAnNTI3MTU0My0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY1NjE5MycsIHRhcmdldDogJzUzMjk2NTUtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NTYxOTMnLCB0YXJnZXQ6ICc1NDA5NDk4LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjU2MTkzJywgdGFyZ2V0OiAnNTcwNzM2OS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY1NjE5MycsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NjU2NDgnLCB0YXJnZXQ6ICc2NjY1NjQ4LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjY1NjQ4JywgdGFyZ2V0OiAnNjY2NTY0OC0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY2NTY0OCcsIHRhcmdldDogJzY2NjU2NDgtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NjU2NDgnLCB0YXJnZXQ6ICc2NjY1NjQ4LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjY1NjQ4JywgdGFyZ2V0OiAnNjY2NTY0OC01JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY2NTY0OCcsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NjU2NTUnLCB0YXJnZXQ6ICc2NDM0NTUwLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjY1NjU1JywgdGFyZ2V0OiAnNjY2NTY1NS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY2NTY1NScsIHRhcmdldDogJ29yZ182cjl0N1pBNllUMDMxT2Q0a01QZycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2ODQ0MzgnLCB0YXJnZXQ6ICc1ODczMDk2LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2Njg0NDM4JywgdGFyZ2V0OiAnNjA5MjA4My0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY4NDQzOCcsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2OTAzODcnLCB0YXJnZXQ6ICc2MjgxODk4LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjkwMzg3JywgdGFyZ2V0OiAnNjY5MDM4Ny0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY5MDM4NycsIHRhcmdldDogJ29yZ19Gdmd2R0ZlOEpaMGlZbFo4MHdlRicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2OTMyMzInLCB0YXJnZXQ6ICc1NDE2MjU1LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjkzMjMyJywgdGFyZ2V0OiAnb3JnX01LdmJuQ2N5UHVkWGV4VXZzU3dGJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY5ODY0MycsIHRhcmdldDogJzYyNjQwODctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2OTg2NDMnLCB0YXJnZXQ6ICdvcmdfQVRPV0hkNEdHYW9oMTR6dXRYcTcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzExNTY1JywgdGFyZ2V0OiAnNjcxMTU2NS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcxMTU2NScsIHRhcmdldDogJzY3MTE1NjUtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MTE1NjUnLCB0YXJnZXQ6ICc2NzExNTY1LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzExNTY1JywgdGFyZ2V0OiAnNjcxMTU2NS00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcxMTU2NScsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MTYyMzMnLCB0YXJnZXQ6ICc2MjY0MDg3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzE2MjMzJywgdGFyZ2V0OiAnb3JnX0FUT1dIZDRHR2FvaDE0enV0WHE3JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcxODM2MScsIHRhcmdldDogJzYyMjMyMDUtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MTgzNjEnLCB0YXJnZXQ6ICc2MzcwNTg0LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzE4MzYxJywgdGFyZ2V0OiAnNjcxODM2MS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcxODM2MScsIHRhcmdldDogJzY3MTgzNjEtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MTgzNjEnLCB0YXJnZXQ6ICc2NzE4MzYxLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzE4MzYxJywgdGFyZ2V0OiAnNjcxODM2MS00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcxODM2MScsIHRhcmdldDogJzY3MTgzNjEtNScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MTgzNjEnLCB0YXJnZXQ6ICc2NzE4MzYxLTgnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzE4MzYxJywgdGFyZ2V0OiAnb3JnXzFwNEZXRW9JdGp5S2J3VHBDSm9sJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcyNDM5OScsIHRhcmdldDogJzY3MjQzOTktMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MjQzOTknLCB0YXJnZXQ6ICc2NzI0Mzk5LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzI0Mzk5JywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcyNzUyMicsIHRhcmdldDogJzQyNTMwNjEtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3Mjc1MjInLCB0YXJnZXQ6ICc0OTAyNjcxLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzI3NTIyJywgdGFyZ2V0OiAnb3JnX2M1dnlCeks3aWlra1U0RGpRRkhUJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcyODcwMicsIHRhcmdldDogJzY1Nzc3MjYtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3Mjg3MDInLCB0YXJnZXQ6ICc2NzExNTY1LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzI4NzAyJywgdGFyZ2V0OiAnNjcxMTU2NS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcyODcwMicsIHRhcmdldDogJzY3MTE1NjUtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3Mjg3MDInLCB0YXJnZXQ6ICc2NzExNTY1LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzI4NzAyJywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcyODk2MCcsIHRhcmdldDogJzYzOTM2MDUtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3Mjg5NjAnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMDk1JywgdGFyZ2V0OiAnNTI0MzYyMi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjczMjA5NScsIHRhcmdldDogJzY3MzIwOTUtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MzIwOTUnLCB0YXJnZXQ6ICc2NzMyMDk1LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMDk1JywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjczMjEwMCcsIHRhcmdldDogJzU3MTU0NTAtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MzIxMDAnLCB0YXJnZXQ6ICc2NTc3NzI2LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMTAwJywgdGFyZ2V0OiAnNjU3NzcyNi00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjczMjEwMCcsIHRhcmdldDogJzY2NjU2NDgtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MzIxMDAnLCB0YXJnZXQ6ICc2NzMyMTAwLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMTAwJywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjczMjExMScsIHRhcmdldDogJzQ5NTEyNzgtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MzIxMTEnLCB0YXJnZXQ6ICc2MDkyMDgzLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMTExJywgdGFyZ2V0OiAnNjA5MjA4My0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjczMjExMScsIHRhcmdldDogJzY3MzIxMTEtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MzIxMTEnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzU0NjgxJywgdGFyZ2V0OiAnNTg3MzA5Ni0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc1NDY4MScsIHRhcmdldDogJzYwOTIwODMtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3NTQ2ODEnLCB0YXJnZXQ6ICc2MDkyMDgzLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzU0NjgxJywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc2MzM1MScsIHRhcmdldDogJzY3MTE1NjUtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3NjMzNTEnLCB0YXJnZXQ6ICc2NzExNTY1LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzYzMzUxJywgdGFyZ2V0OiAnNjcxMTU2NS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc2MzM1MScsIHRhcmdldDogJzY3MTE1NjUtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3NjMzNTEnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzYzNTAxJywgdGFyZ2V0OiAnNTI2MTAzNy0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc2MzUwMScsIHRhcmdldDogJzU4NTU5NTctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3NjM1MDEnLCB0YXJnZXQ6ICc2NjAxMDg3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzYzNTAxJywgdGFyZ2V0OiAnNjY1NDAzMi00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc2MzUwMScsIHRhcmdldDogJ29yZ18zdkkyWjVrQzFTYVNsYlVCb09CVCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3Njg5MDQnLCB0YXJnZXQ6ICc2MTgzNTg5LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzY4OTA0JywgdGFyZ2V0OiAnb3JnX1hjcUNqdFQ4cGk4TWszVWpRbER0JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc4MjM4MycsIHRhcmdldDogJzY3MTE1NjUtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3ODIzODMnLCB0YXJnZXQ6ICc2NzExNTY1LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzgyMzgzJywgdGFyZ2V0OiAnNjcxMTU2NS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc4MjM4MycsIHRhcmdldDogJzY3MTE1NjUtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3ODIzODMnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzgzNTI0JywgdGFyZ2V0OiAnNTg1OTkxNi0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc4MzUyNCcsIHRhcmdldDogJzY3ODM1MjQtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3ODM1MjQnLCB0YXJnZXQ6ICdvcmdfZkEwYXpxb0JHRXpvUG95ODVKeXYnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2Nzg2MzgyJywgdGFyZ2V0OiAnNjUzMDkzMi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc4NjM4MicsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MDQzMzAnLCB0YXJnZXQ6ICc1NzE1NDUwLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA0MzMwJywgdGFyZ2V0OiAnNjI2ODgwMy0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgwNDMzMCcsIHRhcmdldDogJzY4MDQzMzAtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MDQzMzAnLCB0YXJnZXQ6ICc2ODA0MzMwLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA0MzMwJywgdGFyZ2V0OiAnNjgwNDMzMC01JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgwNDMzMCcsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MDk2NTMnLCB0YXJnZXQ6ICc0MDgyMDk3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA5NjUzJywgdGFyZ2V0OiAnNDU2MTQ0NC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgwOTY1MycsIHRhcmdldDogJzQ4MDk2OTctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MDk2NTMnLCB0YXJnZXQ6ICc0ODYzNDI1LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA5NjUzJywgdGFyZ2V0OiAnNTA5NzEyMi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgwOTY1MycsIHRhcmdldDogJzUyMzcxNzgtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MDk2NTMnLCB0YXJnZXQ6ICc1MzgyMjMyLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA5NjUzJywgdGFyZ2V0OiAnNjgwOTY1My05JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgwOTY1MycsIHRhcmdldDogJ0Q0MjM3NjEtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MDk2NTMnLCB0YXJnZXQ6ICdvcmdfR1ZNbExWYndDRFNpcVA5T2c4VG4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI2NTY1JywgdGFyZ2V0OiAnNjI5NTUzMC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyNjU2NScsIHRhcmdldDogJzYyOTU1MzAtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MjY1NjUnLCB0YXJnZXQ6ICdvcmdfWjU5YVVCR3RaOVA1UXpkRmlLbVonIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI2NTgyJywgdGFyZ2V0OiAnNDM2MjM4Ny0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyNjU4MicsIHRhcmdldDogJzYwODE4NzUtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MjY1ODInLCB0YXJnZXQ6ICc2ODI2NTgyLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI2NTgyJywgdGFyZ2V0OiAnb3JnXzBqUFdNN1lxaHRYbTBsbTNmbTFZJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyNjc0NScsIHRhcmdldDogJzYyMzM2MTctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MjY3NDUnLCB0YXJnZXQ6ICc2NTc3NzI2LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI2NzQ1JywgdGFyZ2V0OiAnNjgyNjc0NS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyNjc0NScsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4Mjk2NTUnLCB0YXJnZXQ6ICc1OTc4ODI5LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI5NjU1JywgdGFyZ2V0OiAnNjAwNDI3Ni0xMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4Mjk2NTUnLCB0YXJnZXQ6ICc2ODI5NjU1LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI5NjU1JywgdGFyZ2V0OiAnNjgyOTY1NS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyOTY1NScsIHRhcmdldDogJzY4Mjk2NTUtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4Mjk2NTUnLCB0YXJnZXQ6ICc2ODI5NjU1LTYnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI5NjU1JywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgzMDE3NCcsIHRhcmdldDogJzQ3OTg1OTQtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MzAxNzQnLCB0YXJnZXQ6ICc1NDY1ODk1LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODMwMTc0JywgdGFyZ2V0OiAnb3JnXzhjc01ndGduTjBtUkVacE5QMUppJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg0Mjc0OCcsIHRhcmdldDogJzY0MzQ1NTAtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NDI3NDgnLCB0YXJnZXQ6ICc2NjY1NjU1LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODQyNzQ4JywgdGFyZ2V0OiAnb3JnXzZyOXQ3WkE2WVQwMzFPZDRrTVBnJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg0MzQwMycsIHRhcmdldDogJzYyNjQwODctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NDM0MDMnLCB0YXJnZXQ6ICdvcmdfQVRPV0hkNEdHYW9oMTR6dXRYcTcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODUwMjUyJywgdGFyZ2V0OiAnNTc3NDM1Ny0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg1MDg5NScsIHRhcmdldDogJzYwOTIwODMtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NTA4OTUnLCB0YXJnZXQ6ICc2MDkyMDgzLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODUwODk1JywgdGFyZ2V0OiAnNjU3NzcyNi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg1MDg5NScsIHRhcmdldDogJzY4NTA4OTUtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NTA4OTUnLCB0YXJnZXQ6ICc2ODUwODk1LTUnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODUwODk1JywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg1MDk0OScsIHRhcmdldDogJzY4NTA5NDktMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NTA5NDknLCB0YXJnZXQ6ICc2ODUwOTQ5LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODUwOTQ5JywgdGFyZ2V0OiAnNjg1MDk0OS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg1MDk0OScsIHRhcmdldDogJ29yZ18yNDJoSmVnd2ZRQ2VQOWhzZndwVycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NTI5MTUnLCB0YXJnZXQ6ICc1Mjc2MjYyLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODUyOTE1JywgdGFyZ2V0OiAnb3JnX01LdmJuQ2N5UHVkWGV4VXZzU3dGJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjkwNTA1NycsIHRhcmdldDogJzU4OTc1NjMtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY5MDUwNTcnLCB0YXJnZXQ6ICc2OTA1MDU3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2OTA1MDU3JywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjk1OTg1MicsIHRhcmdldDogJzU2MzI0MzItNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY5NTk4NTInLCB0YXJnZXQ6ICc2OTA1MDU3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2OTU5ODUyJywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjk2NDM2MycsIHRhcmdldDogJzU0MDk0OTgtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY5NjQzNjMnLCB0YXJnZXQ6ICc2OTY0MzYzLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2OTY0MzYzJywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjk3ODkyMScsIHRhcmdldDogJzU2MzI0MzItNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY5Nzg5MjEnLCB0YXJnZXQ6ICc2OTA1MDU3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2OTc4OTIxJywgdGFyZ2V0OiAnNjk3ODkyMS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjk3ODkyMScsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY5ODE2MjgnLCB0YXJnZXQ6ICc1NDA5NDk4LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2OTgxNjI4JywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAwMDgxOCcsIHRhcmdldDogJzU2MzI0MzItNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMDA4MTgnLCB0YXJnZXQ6ICc2OTA1MDU3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDAwODE4JywgdGFyZ2V0OiAnNzAwMDgxOC0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAwMDgxOCcsIHRhcmdldDogJ29yZ19YdTZnWFNzbHREQlpUQWhNRkJXRCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMjU3NDMnLCB0YXJnZXQ6ICc0MDgyMDk3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDI1NzQzJywgdGFyZ2V0OiAnNDU2MTQ0NC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAyNTc0MycsIHRhcmdldDogJzQ4MDk2OTctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMjU3NDMnLCB0YXJnZXQ6ICc1MTc2NjQ0LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDI1NzQzJywgdGFyZ2V0OiAnNTM4MjIzMi0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAyNTc0MycsIHRhcmdldDogJzY1NTEyNzYtMTAnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDI1NzQzJywgdGFyZ2V0OiAnNjU1MTI3Ni0xMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMjU3NDMnLCB0YXJnZXQ6ICc2NTUxMjc2LTEyJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAyNTc0MycsIHRhcmdldDogJzY1NTEyNzYtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMjU3NDMnLCB0YXJnZXQ6ICc2NTUxMjc2LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDI1NzQzJywgdGFyZ2V0OiAnNjU1MTI3Ni04JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAyNTc0MycsIHRhcmdldDogJzY1NTEyNzYtOScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMjU3NDMnLCB0YXJnZXQ6ICdvcmdfR1ZNbExWYndDRFNpcVA5T2c4VG4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDQ5MTkwJywgdGFyZ2V0OiAnNjA4MDk5OC0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA0OTE5MCcsIHRhcmdldDogJzY5MTQxODItMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNDkxOTAnLCB0YXJnZXQ6ICdvcmdfMklGOTd6VnltU3VyYVNuVUFYbXEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDU1NzMxJywgdGFyZ2V0OiAnNTYzMjQzMi00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA1NTczMScsIHRhcmdldDogJzY5MDUwNTctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNTU3MzEnLCB0YXJnZXQ6ICc2OTc4OTIxLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDU1NzMxJywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA2MTAxNCcsIHRhcmdldDogJzQ0ODY3MjAtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNjEwMTQnLCB0YXJnZXQ6ICc0NzAzMDE5LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDYxMDE0JywgdGFyZ2V0OiAnNTI3MjA2OS02JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA2MTAxNCcsIHRhcmdldDogJzU2MjI2NTMtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNjEwMTQnLCB0YXJnZXQ6ICc3MDYxMDE0LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDYxMDE0JywgdGFyZ2V0OiAnNzA2MTAxNC02JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA2MTAxNCcsIHRhcmdldDogJ29yZ19EdHRaTXZreXZXM2ZWNm9DVU1URicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNjQzNDYnLCB0YXJnZXQ6ICc0MjUzMDYxLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDY0MzQ2JywgdGFyZ2V0OiAnNDkwMjY3MS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA2NDM0NicsIHRhcmdldDogJ29yZ19EdHRaTXZreXZXM2ZWNm9DVU1URicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcxMDU4NjgnLCB0YXJnZXQ6ICc1ODYzMzI2LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MTA1ODY4JywgdGFyZ2V0OiAnNjg4NzczNi00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzEwNTg2OCcsIHRhcmdldDogJ29yZ18wZVRyM1hJQmpBS3BYa0M2ODIzcicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcxMTE3NjknLCB0YXJnZXQ6ICc1NDA5NDk4LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MTExNzY5JywgdGFyZ2V0OiAnNTg5NzU2My00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzExMTc2OScsIHRhcmdldDogJzY1MzA5MzItMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcxMTE3NjknLCB0YXJnZXQ6ICc2OTA1MDU3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MTExNzY5JywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzE0NzEzOCcsIHRhcmdldDogJzY5MDUwNTctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcxNDcxMzgnLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MTU5NzUwJywgdGFyZ2V0OiAnNDg3MjYwMy0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzE1OTc1MCcsIHRhcmdldDogJzU3MTM5MTEtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcxNTk3NTAnLCB0YXJnZXQ6ICc1NzEzOTExLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MTU5NzUwJywgdGFyZ2V0OiAnNzE1OTc1MC00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzE1OTc1MCcsIHRhcmdldDogJzcxNTk3NTAtNScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcxNTk3NTAnLCB0YXJnZXQ6ICdvcmdfZXdWc0N1dHBSekQ5cFQwN2tCb0UnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MjExODI1JywgdGFyZ2V0OiAnNTA4MTQyMi0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzIxMTgyNScsIHRhcmdldDogJzUyODM0NTItMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcyMTE4MjUnLCB0YXJnZXQ6ICc1NzAzMzU3LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MjExODI1JywgdGFyZ2V0OiAnNjU5MzgzNC0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzI0NjczNCcsIHRhcmdldDogJzY5MDUwNTctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcyNDY3MzQnLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MjgyNzgyJywgdGFyZ2V0OiAnNjE0NDY3OS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzI4Mjc4MicsIHRhcmdldDogJzYxNTI5ODctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcyODI3ODInLCB0YXJnZXQ6ICc2ODM2NTQwLTYnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MjgyNzgyJywgdGFyZ2V0OiAnb3JnX3ZTNnJjS3ljMnFOM3JGZFgwUDJLJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzI5Nzk3NycsIHRhcmdldDogJzYxNDQ2NzktMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcyOTc5NzcnLCB0YXJnZXQ6ICc2MTUyOTg3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3Mjk3OTc3JywgdGFyZ2V0OiAnNjgzNjU0MC02JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzI5Nzk3NycsIHRhcmdldDogJ29yZ192UzZyY0t5YzJxTjNyRmRYMFAySycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczMjMzNTYnLCB0YXJnZXQ6ICc0NDg2NzIwLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzIzMzU2JywgdGFyZ2V0OiAnNDcwMzAxOS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzMyMzM1NicsIHRhcmdldDogJzUyNzIwNjktNicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczMjMzNTYnLCB0YXJnZXQ6ICc1NjIyNjUzLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzIzMzU2JywgdGFyZ2V0OiAnNzA2MTAxNC00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzMyMzM1NicsIHRhcmdldDogJzczMjMzNTYtNScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczMjMzNTYnLCB0YXJnZXQ6ICdvcmdfRHR0Wk12a3l2VzNmVjZvQ1VNVEYnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzQwNDExJywgdGFyZ2V0OiAnNzM0MDQxMS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzM4MDY5NScsIHRhcmdldDogJzU0MDk0OTgtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczODA2OTUnLCB0YXJnZXQ6ICc1NjMyNDMyLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzgwNjk1JywgdGFyZ2V0OiAnNjkwNTA1Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzM4MDY5NScsIHRhcmdldDogJzcwODMwNzUtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczODA2OTUnLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzgwNjk2JywgdGFyZ2V0OiAnNTYzMjQzMi00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzM4MDY5NicsIHRhcmdldDogJzY5MDUwNTctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczODA2OTYnLCB0YXJnZXQ6ICc3MDgzMDc1LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzgwNjk2JywgdGFyZ2V0OiAnNzM4MDY5Ni0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzM4MDY5NicsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczODUyMjQnLCB0YXJnZXQ6ICc1MDQxMjAwLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3Mzg1MjI0JywgdGFyZ2V0OiAnNTA0MTIwMC00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzM4NTIyNCcsIHRhcmdldDogJzczODUyMjQtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczODUyMjQnLCB0YXJnZXQ6ICc3Mzg1MjI0LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3Mzg1MjI0JywgdGFyZ2V0OiAnb3JnX0ltZWc5VzZQMVRFNkkyUXV0UzR5JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQwMjUwNicsIHRhcmdldDogJzU1MTI0MjYtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0MDI1MDYnLCB0YXJnZXQ6ICc2MDQ4MTEwLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDAyNTA2JywgdGFyZ2V0OiAnNzQwMjUwNi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQwMjUwNicsIHRhcmdldDogJ29yZ19wcEVsa0V0UXZGdEc2QTQ3NTRVSScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0MDQ1MDgnLCB0YXJnZXQ6ICc0NjgyNTk2LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDA0NTA4JywgdGFyZ2V0OiAnNTExNzgzOC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQwNDUwOCcsIHRhcmdldDogJzU3MTU2NzUtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0MDQ1MDgnLCB0YXJnZXQ6ICc2OTEyODM5LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDA0NTA4JywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQxMTIwOScsIHRhcmdldDogJzUzNDU2MzktNicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0MTEyMDknLCB0YXJnZXQ6ICc1NDE3NzcwLTgnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDExMjA5JywgdGFyZ2V0OiAnNzA4MjgzMi00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQxMTIwOScsIHRhcmdldDogJ29yZ19FaFlGUElKRW1ZUVlSb1l2c25weScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NTMwNjUnLCB0YXJnZXQ6ICc0MDcyMjM2LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDUzMDY1JywgdGFyZ2V0OiAnNDM1NjQ1NS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ1MzA2NScsIHRhcmdldDogJzQ3MDMwMTktMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NTMwNjUnLCB0YXJnZXQ6ICc3MDYxMDE0LTYnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDUzMDY1JywgdGFyZ2V0OiAnb3JnX0VoWUZQSUpFbVlRWVJvWXZzbnB5JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ1MzA2NScsIHRhcmdldDogJ29yZ19KanJNNlVtZU9ZMFE1TW1vTmlQOCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NTMwODcnLCB0YXJnZXQ6ICc1MzQ1NjM5LTYnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDUzMDg3JywgdGFyZ2V0OiAnb3JnX0VoWUZQSUpFbVlRWVJvWXZzbnB5JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ2Mjg2MicsIHRhcmdldDogJzYxNDQ2NzktMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NjI4NjInLCB0YXJnZXQ6ICc2ODM2NTQwLTYnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDYyODYyJywgdGFyZ2V0OiAnb3JnX3ZTNnJjS3ljMnFOM3JGZFgwUDJLJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ2NDg0NicsIHRhcmdldDogJzQ0MDM2ODctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NjQ4NDYnLCB0YXJnZXQ6ICc1ODk3NTYzLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDY0ODQ2JywgdGFyZ2V0OiAnNjkwNTA1Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ2NDg0NicsIHRhcmdldDogJzcwODMwNzUtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NjQ4NDYnLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDY4MzA0JywgdGFyZ2V0OiAnNjg2MzM2My0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ2ODMwNCcsIHRhcmdldDogJzc0NjgzMDQtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NjgzMDQnLCB0YXJnZXQ6ICdvcmdfRWhZRlBJSkVtWVFZUm9ZdnNucHknIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NTAxMjkzJywgdGFyZ2V0OiAnNDIyNDcyNS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzUwMTI5MycsIHRhcmdldDogJzQ1NzM0NzItMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc1MDEyOTMnLCB0YXJnZXQ6ICdvcmdfajVVNUlFYTFGSWJndHI3aU5zUU0nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NTA2NzkxJywgdGFyZ2V0OiAnNDQwMzY4Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzUwNjc5MScsIHRhcmdldDogJzQ5NzIyMjQtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc1MDY3OTEnLCB0YXJnZXQ6ICc2OTA1MDU3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NTA2NzkxJywgdGFyZ2V0OiAnUkUzOTg0MS00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzUwNjc5MScsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc2MjA2NTUnLCB0YXJnZXQ6ICc1OTQ4Nzg5LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NjIwNjU1JywgdGFyZ2V0OiAnNzYyMDY1NS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzYyMDY1NScsIHRhcmdldDogJ29yZ19XaDJjbk9JektsaHpqdXFWbU9xWScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc2MzI5ODUnLCB0YXJnZXQ6ICc3MDc4NTAzLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NjMyOTg1JywgdGFyZ2V0OiAnNzYwODc2MS00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzYzMjk4NScsIHRhcmdldDogJzc2MzI5ODUtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc2MzI5ODUnLCB0YXJnZXQ6ICc3NjMyOTg1LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NjMyOTg1JywgdGFyZ2V0OiAnb3JnX1F3OEVzck4wTTUyblZRVU02dnNWJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzY2MzYwNycsIHRhcmdldDogJzU1OTQxNjktMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc2NjM2MDcnLCB0YXJnZXQ6ICc2NjU4NTc3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NjYzNjA3JywgdGFyZ2V0OiAnNzE1NDQ3Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzY2MzYwNycsIHRhcmdldDogJ29yZ19JRFViUzA5WlIwSmhKOGpGRXB0VCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc2NzQ2NTAnLCB0YXJnZXQ6ICc2NjM5MjQ2LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3Njc0NjUwJywgdGFyZ2V0OiAnNjgzODM5Ny0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzY3NDY1MCcsIHRhcmdldDogJzcyMDU3MTYtNScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc2NzQ2NTAnLCB0YXJnZXQ6ICdvcmdfcGxaYkx4aXlzRVNiYUk5cE9leW0nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NzMyODE5JywgdGFyZ2V0OiAnNjYzOTI0Ni0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzczMjgxOScsIHRhcmdldDogJzY4MzgzOTctMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc3MzI4MTknLCB0YXJnZXQ6ICc3MjA1NzE2LTUnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NzMyODE5JywgdGFyZ2V0OiAnb3JnX3BsWmJMeGl5c0VTYmFJOXBPZXltJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnODA1MzE4NCcsIHRhcmdldDogJzcwNzg1MDMtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzgwNTMxODQnLCB0YXJnZXQ6ICc3NjA4NzYxLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc4MDUzMTg0JywgdGFyZ2V0OiAnNzYzMjk4NS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnODA1MzE4NCcsIHRhcmdldDogJzc2MzI5ODUtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzgwNTMxODQnLCB0YXJnZXQ6ICdvcmdfUXc4RXNyTjBNNTJuVlFVTTZ2c1YnIH1cclxuICAgIF1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBpbnRlcmZhY2VzIGZyb20gJy4uL2ludGVyZmFjZXMnXHJcbmltcG9ydCBOZXRWIGZyb20gJy4uL2luZGV4J1xyXG5pbXBvcnQgeyBvdmVycmlkZSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJ1xyXG5pbXBvcnQgeyBFTVBUWV9GVU5DVElPTiB9IGZyb20gJy4uL3V0aWxzL2NvbnN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudCB7XHJcbiAgICBwdWJsaWMgJF9zdHlsZTogaW50ZXJmYWNlcy5Ob2RlU3R5bGUgfCBpbnRlcmZhY2VzLkxpbmtTdHlsZSA9IHt9XHJcbiAgICBwdWJsaWMgJF9tb3VzZWRvd25DYWxsYmFja1NldDogU2V0PChlOiBhbnkpID0+IHZvaWQ+ID0gbmV3IFNldCgpXHJcbiAgICBwdWJsaWMgJF9tb3VzZXVwQ2FsbGJhY2tTZXQ6IFNldDwoZTogYW55KSA9PiB2b2lkPiA9IG5ldyBTZXQoKVxyXG4gICAgcHVibGljICRfbW91c2VvdmVyQ2FsbGJhY2tTZXQ6IFNldDwoZTogYW55KSA9PiB2b2lkPiA9IG5ldyBTZXQoKVxyXG4gICAgcHVibGljICRfbW91c2VvdXRDYWxsYmFja1NldDogU2V0PChlOiBhbnkpID0+IHZvaWQ+ID0gbmV3IFNldCgpXHJcbiAgICBwdWJsaWMgJF9tb3VzZW1vdmVDYWxsYmFja1NldDogU2V0PChlOiBhbnkpID0+IHZvaWQ+ID0gbmV3IFNldCgpXHJcbiAgICBwdWJsaWMgJF9jbGlja0NhbGxiYWNrU2V0OiBTZXQ8KGU6IGFueSkgPT4gdm9pZD4gPSBuZXcgU2V0KClcclxuXHJcbiAgICBwcm90ZWN0ZWQgJF9jb3JlOiBOZXRWXHJcbiAgICBwcm90ZWN0ZWQgJF9jaGFuZ2VSZW5kZXJBdHRyaWJ1dGU6IChlbGVtZW50OiBFbGVtZW50LCBrZXk6IHN0cmluZykgPT4gdm9pZFxyXG5cclxuICAgIHByb3RlY3RlZCAkX2F0dHJpYnV0ZXMgPSB7fVxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb3JlOiBOZXRWLCBkYXRhOiBpbnRlcmZhY2VzLk5vZGVEYXRhIHwgaW50ZXJmYWNlcy5MaW5rRGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWUudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgIHRoaXMuJF9jb3JlID0gY29yZVxyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRDb25maWdzID0gdGhpcy4kX2NvcmUuJF9jb25maWdzXHJcblxyXG4gICAgICAgIC8vIG92ZXJyaWRlIGRlZmF1bHQgc3R5bGUgd2l0aCB1c2VyIHNwZWNpZmllZCBzdHlsZSBpbiBkYXRhXHJcbiAgICAgICAgdGhpcy4kX3N0eWxlID0gb3ZlcnJpZGUoZGVmYXVsdENvbmZpZ3NbdHlwZV0uc3R5bGUsIGRhdGEuc3R5bGUpXHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlck1hbmFnZXIgPSB0aGlzLiRfY29yZS4kX3JlbmRlcmVyW2Ake3R5cGV9TWFuYWdlcmBdXHJcbiAgICAgICAgdGhpcy4kX2NoYW5nZVJlbmRlckF0dHJpYnV0ZSA9IHJlbmRlck1hbmFnZXIuY2hhbmdlQXR0cmlidXRlLmJpbmQocmVuZGVyTWFuYWdlcilcclxuXHJcbiAgICAgICAgLy8gZ2VuZXJhdGUgc3R5bGUgbWV0aG9kcywgZS5nLjogbm9kZS5yKCksIGxpbmsuc3Ryb2tlV2lkdGgoKVxyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuJF9zdHlsZSkuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGdlbmVyYXRlIHN0eWxlIGZ1bmN0aW9uc1xyXG4gICAgICAgICAgICB0aGlzW2tleV0gPSB0aGlzLmdlbmVyYXRlRWxlbWVudFN0eWxlR2V0dGVyU2V0dGVyKGtleSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxyXG4gICAgICogQHBhcmFtIHsoZTogYW55KSA9PiBhbnl9IGNhbGxiYWNrXHJcbiAgICAgKiBAbWVtYmVyb2YgRWxlbWVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb24oZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrPzogKGU6IGFueSkgPT4gYW55KSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBldmVudE5hbWUuc2xpY2UoMCwgNCkgIT09ICdkcmFnJyB8fFxyXG4gICAgICAgICAgICAoZXZlbnROYW1lLnNsaWNlKDAsIDQpID09PSAnZHJhZycgJiYgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lID09PSAnTm9kZScpIC8vIG9ubHkgbm9kZSBjYW4gYmUgZHJhZ2dlZFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjb25zdCBjYWxsYmFja1NldE5hbWUgPSBgJF8ke2V2ZW50TmFtZX1DYWxsYmFja1NldGBcclxuICAgICAgICAgICAgdGhpc1tjYWxsYmFja1NldE5hbWVdPy5hZGQoY2FsbGJhY2sgPyBjYWxsYmFjayA6IEVNUFRZX0ZVTkNUSU9OKVxyXG4gICAgICAgICAgICBpZiAodGhpc1tjYWxsYmFja1NldE5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRfY29yZS4kX2ludGVyYWN0aW9uTWFuYWdlci5pbmNyZWFzZU1vdXNlRXZlbnRDYWxsYmFja0NvdW50QnkoMSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcclxuICAgICAqIEBwYXJhbSB7KGU6IGFueSkgPT4gYW55fSBjYWxsYmFja1xyXG4gICAgICogQG1lbWJlcm9mIEVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9mZihldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s6IChlOiBhbnkpID0+IGFueSkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZXZlbnROYW1lLnNsaWNlKDAsIDQpICE9PSAnZHJhZycgfHxcclxuICAgICAgICAgICAgKGV2ZW50TmFtZS5zbGljZSgwLCA0KSA9PT0gJ2RyYWcnICYmIHRoaXMuY29uc3RydWN0b3IubmFtZSA9PT0gJ05vZGUnKSAvLyBvbmx5IG5vZGUgY2FuIGJlIGRyYWdnZWRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tTZXROYW1lID0gYCRfJHtldmVudE5hbWV9Q2FsbGJhY2tTZXRgXHJcbiAgICAgICAgICAgIHRoaXNbY2FsbGJhY2tTZXROYW1lXT8uZGVsZXRlKGNhbGxiYWNrID8gY2FsbGJhY2sgOiBFTVBUWV9GVU5DVElPTilcclxuICAgICAgICAgICAgaWYgKHRoaXNbY2FsbGJhY2tTZXROYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9pbnRlcmFjdGlvbk1hbmFnZXIuZGVjcmVhc2VNb3VzZUV2ZW50Q2FsbGJhY2tDb3VudEJ5KDEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXQvc2V0IGN1c3RvbSBhdHRyaWJ1dGVzXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGF0dHIoa2V5OiBzdHJpbmcsIHZhbHVlPzogYW55KSB7XHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy4kX2F0dHJpYnV0ZXNba2V5XSA9IHZhbHVlXHJcbiAgICAgICAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRfYXR0cmlidXRlc1trZXldXHJcbiAgICAgICAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuJF9hdHRyaWJ1dGVzKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZUVsZW1lbnRTdHlsZUdldHRlclNldHRlcihrZXk6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiAodmFsdWU/OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhbHVlIGlzIGFuIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJF9zdHlsZVtrZXldID0gb3ZlcnJpZGUodGhpcy4kX3N0eWxlW2tleV0sIHZhbHVlKSAvLyB7IC4uLnRoaXMuJF9zdHlsZVtrZXldLCAuLi52YWx1ZSB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJF9zdHlsZVtrZXldID0gdmFsdWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuJF9jaGFuZ2VSZW5kZXJBdHRyaWJ1dGUodGhpcywga2V5KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRfc3R5bGVba2V5XVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogQGF1dGhvciBKaWFjaGVuZyBQYW4gPGphY2tpZWFueGlzQGdtYWlsLmNvbT5cclxuICogQGRlc2NyaXB0aW9uIFByb3ZpZGUgYSBMaW5rIGNsYXNzLlxyXG4gKiBAZGVwZW5kZW5jZXMgaW50ZXJmYWNlcy50cywgdXRpbHMvaXMudHNcclxuICovXHJcblxyXG5pbXBvcnQgTm9kZSBmcm9tICcuL25vZGUnXHJcbmltcG9ydCAqIGFzIGludGVyZmFjZXMgZnJvbSAnLi4vaW50ZXJmYWNlcydcclxuaW1wb3J0IEVsZW1lbnQgZnJvbSAnLi9lbGVtZW50J1xyXG5cclxuY2xhc3MgTGluayBleHRlbmRzIEVsZW1lbnQge1xyXG4gICAgLy8gc3R5bGUgZ2V0dGVyL3NldHRlclxyXG4gICAgcHVibGljIHNoYXBlOiAodmFsdWU/OiBpbnRlcmZhY2VzLkxpbmtTaGFwZSkgPT4gaW50ZXJmYWNlcy5MaW5rU2hhcGVcclxuICAgIHB1YmxpYyBzdHJva2VXaWR0aDogKHZhbHVlPzogbnVtYmVyKSA9PiBudW1iZXJcclxuICAgIHB1YmxpYyBzdHJva2VDb2xvcjogKHZhbHVlPzogaW50ZXJmYWNlcy5Db2xvcikgPT4gaW50ZXJmYWNlcy5Db2xvclxyXG5cclxuICAgIHB1YmxpYyAkX3NvdXJjZTogTm9kZVxyXG4gICAgcHVibGljICRfdGFyZ2V0OiBOb2RlXHJcblxyXG4gICAgcHJpdmF0ZSAkX2VsZW1lbnRSZXNlcnZlZEtleXMgPSBuZXcgU2V0KFsnc291cmNlJywgJ3RhcmdldCcsICdzdHlsZSddKVxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb3JlLCBsaW5rRGF0YTogaW50ZXJmYWNlcy5MaW5rRGF0YSkge1xyXG4gICAgICAgIHN1cGVyKGNvcmUsIGxpbmtEYXRhKVxyXG5cclxuICAgICAgICAvLyBzZXQgYXR0cmlidXRlc1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGxpbmtEYXRhKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy4kX2VsZW1lbnRSZXNlcnZlZEtleXMuaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJF9hdHRyaWJ1dGVzW2tleV0gPSBsaW5rRGF0YVtrZXldXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNvdXJjZU5vZGUgPSB0aGlzLiRfY29yZS5nZXROb2RlQnlJZChsaW5rRGF0YS5zb3VyY2UpXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IHRoaXMuJF9jb3JlLmdldE5vZGVCeUlkKGxpbmtEYXRhLnRhcmdldClcclxuICAgICAgICB0aGlzLnNvdXJjZVRhcmdldCh7XHJcbiAgICAgICAgICAgIHNvdXJjZTogc291cmNlTm9kZSxcclxuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXROb2RlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldHRlci9zZXR0ZXIgb2YgdGhlIHNvdXJjZVxyXG4gICAgICogQHBhcmFtIHtOb2RlfSBbbm9kZV1cclxuICAgICAqIEByZXR1cm5zIHtOb2RlfSBhIHNvdXJjZSBOb2RlIE9iamVjdFxyXG4gICAgICogQG1lbWJlcm9mIExpbmtcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNvdXJjZShub2RlPzogTm9kZSk6IE5vZGUge1xyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIC8vIHNldHRlclxyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZVRhcmdldCh7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IG5vZGUsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMuJF90YXJnZXRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9zb3VyY2VcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldHRlci9zZXR0ZXIgb2YgdGhlIHRhcmdldFxyXG4gICAgICogQHBhcmFtIHtOb2RlfSBbbm9kZV1cclxuICAgICAqIEByZXR1cm5zIHtOb2RlfSBhIHRhcmdldCBOb2RlIE9iamVjdFxyXG4gICAgICogQG1lbWJlcm9mIExpbmtcclxuICAgICAqL1xyXG4gICAgcHVibGljIHRhcmdldChub2RlPzogTm9kZSk6IE5vZGUge1xyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIC8vIHNldHRlclxyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZVRhcmdldCh7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IHRoaXMuJF9zb3VyY2UsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IG5vZGVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF90YXJnZXRcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldHRlci9zZXR0ZXIgb2Ygc291cmNlIGFuZCB0YXJnZXRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3NvdXJjZVRhcmdldE9ian0gW3tzb3VyY2U6IE5vZGUsIHRhcmdldDogTm9kZX1dXHJcbiAgICAgKiBAcmV0dXJucyBPYmplY3Qge3NvdXJjZTogTm9kZSwgdGFyZ2V0OiBOb2RlfVxyXG4gICAgICogQG1lbWJlcm9mIExpbmtcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNvdXJjZVRhcmdldChzb3VyY2VUYXJnZXRPYmo/OiB7IHNvdXJjZTogTm9kZTsgdGFyZ2V0OiBOb2RlIH0pIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3Qgb2xkU291cmNlOiBOb2RlID0gdGhpcy4kX3NvdXJjZVxyXG4gICAgICAgICAgICBjb25zdCBvbGRUYXJnZXQ6IE5vZGUgPSB0aGlzLiRfdGFyZ2V0XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1NvdXJjZSA9IHNvdXJjZVRhcmdldE9iai5zb3VyY2VcclxuICAgICAgICAgICAgY29uc3QgbmV3VGFyZ2V0ID0gc291cmNlVGFyZ2V0T2JqLnRhcmdldFxyXG4gICAgICAgICAgICBjb25zdCBuZXdTb3VyY2VJZCA9IG5ld1NvdXJjZS5pZCgpXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1RhcmdldElkID0gbmV3VGFyZ2V0LmlkKClcclxuXHJcbiAgICAgICAgICAgIGlmIChuZXdTb3VyY2UgPT09IG5ld1RhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgLy8gZXJyb3I6IHNlbGYgbG9vcFxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTZWxmIGxvb3AgKCR7bmV3U291cmNlSWR9IDw9PiAke25ld1RhcmdldElkfSkgaXMgbm90IGFsbG93ZWQuYClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuJF9jb3JlLiRfZW5kczJsaW5rLmhhcyhbbmV3U291cmNlSWQsIG5ld1RhcmdldElkXSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGVycm9yOiBtdWx0aXBsZSBsaW5rXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGxpbmsgKCR7bmV3U291cmNlSWR9IDw9PiAke25ld1RhcmdldElkfSkgaXMgbm90IGFsbG93ZC5gKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAob2xkU291cmNlICYmIG9sZFRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgLy8gZGVsZXRlIG9sZCBNYXBcclxuICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfZW5kczJsaW5rLmRlbGV0ZShbb2xkU291cmNlLmlkKCksIG9sZFRhcmdldC5pZCgpXSlcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRfY29yZS4kX3NvdXJjZUlkMmxpbmtzLmdldChvbGRTb3VyY2UuaWQoKSk/LmRlbGV0ZSh0aGlzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF90YXJnZXRJZDJsaW5rcy5nZXQob2xkVGFyZ2V0LmlkKCkpPy5kZWxldGUodGhpcylcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy4kX3NvdXJjZSA9IG5ld1NvdXJjZVxyXG4gICAgICAgICAgICB0aGlzLiRfdGFyZ2V0ID0gbmV3VGFyZ2V0XHJcbiAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfZW5kczJsaW5rLnNldChbbmV3U291cmNlSWQsIG5ld1RhcmdldElkXSwgdGhpcylcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy4kX2NvcmUuJF9zb3VyY2VJZDJsaW5rcy5oYXMobmV3U291cmNlSWQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRfY29yZS4kX3NvdXJjZUlkMmxpbmtzLnNldChuZXdTb3VyY2VJZCwgbmV3IFNldChbdGhpc10pKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9zb3VyY2VJZDJsaW5rcy5nZXQobmV3U291cmNlSWQpLmFkZCh0aGlzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdGhpcy4kX2NvcmUuJF90YXJnZXRJZDJsaW5rcy5oYXMobmV3VGFyZ2V0SWQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRfY29yZS4kX3RhcmdldElkMmxpbmtzLnNldChuZXdUYXJnZXRJZCwgbmV3IFNldChbdGhpc10pKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF90YXJnZXRJZDJsaW5rcy5nZXQobmV3VGFyZ2V0SWQpLmFkZCh0aGlzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNvdXJjZTogdGhpcy4kX3NvdXJjZSxcclxuICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLiRfdGFyZ2V0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW5rXHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIEppYWNoZW5nIFBhbiA8amFja2llYW54aXNAZ21haWwuY29tPlxyXG4gKiBAZGVzY3JpcHRpb24gUHJvdmlkZSBhIE5vZGUgY2xhc3MuXHJcbiAqIEBkZXBlbmRlbmNlcyBpbnRlcmZhY2VzLnRzLCB1dGlscy9pcy50c1xyXG4gKi9cclxuXHJcbmltcG9ydCAqIGFzIGludGVyZmFjZXMgZnJvbSAnLi4vaW50ZXJmYWNlcydcclxuaW1wb3J0IHsgaXNWYWxpZElkIH0gZnJvbSAnLi4vdXRpbHMvaXMnXHJcbmltcG9ydCB7IExpbmtBdHRyIH0gZnJvbSAnLi4vcmVuZGVyZXIvaW50ZXJmYWNlcydcclxuaW1wb3J0IExpbmsgZnJvbSAnLi9saW5rJ1xyXG5pbXBvcnQgRWxlbWVudCBmcm9tICcuL2VsZW1lbnQnXHJcblxyXG5jbGFzcyBOb2RlIGV4dGVuZHMgRWxlbWVudCB7XHJcbiAgICAvLyBzdHlsZSBnZXR0ZXIvc2V0dGVyXHJcbiAgICBwdWJsaWMgc2hhcGU6ICh2YWx1ZT86IGludGVyZmFjZXMuTm9kZVNoYXBlKSA9PiBpbnRlcmZhY2VzLk5vZGVTaGFwZVxyXG4gICAgcHVibGljIG9mZnNldDogKHZhbHVlPzogaW50ZXJmYWNlcy5Qb3NpdGlvbikgPT4gaW50ZXJmYWNlcy5Qb3NpdGlvblxyXG4gICAgcHVibGljIHN0cm9rZVdpZHRoOiAodmFsdWU/OiBudW1iZXIpID0+IG51bWJlclxyXG4gICAgcHVibGljIHN0cm9rZUNvbG9yOiAodmFsdWU/OiBpbnRlcmZhY2VzLkNvbG9yKSA9PiBpbnRlcmZhY2VzLkNvbG9yXHJcbiAgICBwdWJsaWMgZmlsbDogKHZhbHVlPzogaW50ZXJmYWNlcy5Db2xvcikgPT4gaW50ZXJmYWNlcy5Db2xvclxyXG4gICAgLyogY2lyY2xlIHNoYXBlIHN0eWxlcyAqL1xyXG4gICAgcHVibGljIHI/OiAodmFsdWU/OiBudW1iZXIpID0+IG51bWJlclxyXG4gICAgLyogcmVjdCBzaGFwZSBzdHlsZXMgKi9cclxuICAgIHB1YmxpYyB3aWR0aD86ICh2YWx1ZT86IG51bWJlcikgPT4gbnVtYmVyXHJcbiAgICBwdWJsaWMgaGVpZ2h0PzogKHZhbHVlPzogbnVtYmVyKSA9PiBudW1iZXJcclxuICAgIHB1YmxpYyByb3RhdGU/OiAodmFsdWU/OiBudW1iZXIpID0+IG51bWJlclxyXG4gICAgLyogdHJpYW5nbGUgc2hhcGUgc3R5bGVzICovXHJcbiAgICBwdWJsaWMgdmVydGV4QWxwaGE6ICh2YWx1ZT86IGludGVyZmFjZXMuUG9zaXRpb24pID0+IGludGVyZmFjZXMuUG9zaXRpb25cclxuICAgIHB1YmxpYyB2ZXJ0ZXhCZXRhOiAodmFsdWU/OiBpbnRlcmZhY2VzLlBvc2l0aW9uKSA9PiBpbnRlcmZhY2VzLlBvc2l0aW9uXHJcbiAgICBwdWJsaWMgdmVydGV4R2FtbWE6ICh2YWx1ZT86IGludGVyZmFjZXMuUG9zaXRpb24pID0+IGludGVyZmFjZXMuUG9zaXRpb25cclxuXHJcbiAgICBwdWJsaWMgJF9kcmFnc3RhcnRDYWxsYmFja1NldDogU2V0PChlOiBhbnkpID0+IHZvaWQ+ID0gbmV3IFNldCgpXHJcbiAgICBwdWJsaWMgJF9kcmFnZ2luZ0NhbGxiYWNrU2V0OiBTZXQ8KGU6IGFueSkgPT4gdm9pZD4gPSBuZXcgU2V0KClcclxuICAgIHB1YmxpYyAkX2RyYWdlbmRDYWxsYmFja1NldDogU2V0PChlOiBhbnkpID0+IHZvaWQ+ID0gbmV3IFNldCgpXHJcblxyXG4gICAgcHJpdmF0ZSAkX2lkOiBzdHJpbmdcclxuICAgIHByaXZhdGUgJF9wb3NpdGlvbiA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlICRfZWxlbWVudFJlc2VydmVkS2V5cyA9IG5ldyBTZXQoWydpZCcsICd4JywgJ3knLCAnc3R5bGUnXSlcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoY29yZSwgbm9kZURhdGE6IGludGVyZmFjZXMuTm9kZURhdGEpIHtcclxuICAgICAgICBzdXBlcihjb3JlLCBub2RlRGF0YSlcclxuXHJcbiAgICAgICAgLy8gc2V0IGF0dHJpYnV0ZXNcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBub2RlRGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuJF9lbGVtZW50UmVzZXJ2ZWRLZXlzLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRfYXR0cmlidXRlc1trZXldID0gbm9kZURhdGFba2V5XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICAuLi57XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLiRfcG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgIHk6IHRoaXMuJF9wb3NpdGlvbi55XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC4uLm5vZGVEYXRhXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiRfc2V0SWQoZGF0YS5pZClcclxuICAgICAgICB0aGlzLiRfcG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgIHg6IGRhdGEueCxcclxuICAgICAgICAgICAgeTogZGF0YS55XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0dGVyIG9mIHByaXZhdGUgcHJvcGVydHkgJF9pZFxyXG4gICAgICogQG1lbWJlcm9mIE5vZGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRfaWRcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldCBuZWlnaGJvciBub2RlcyBmb3IgY3VycmVudCBub2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBuZWlnaGJvck5vZGVzKCkge1xyXG4gICAgICAgIC8vIE5PVEU6IGN1cnJlbnRseSBBUEkgbm90IGludGVudCB0byBzdXBwb3J0IGRpcmVjdGVkIGdyYXBoXHJcbiAgICAgICAgbGV0IHNvdXJjZUxpbmtzID0gdGhpcy4kX2NvcmUuJF9zb3VyY2VJZDJsaW5rcy5nZXQodGhpcy4kX2lkKVxyXG4gICAgICAgIGlmICghc291cmNlTGlua3MpIHNvdXJjZUxpbmtzID0gbmV3IFNldCgpXHJcbiAgICAgICAgbGV0IHRhcmdldExpbmtzID0gdGhpcy4kX2NvcmUuJF90YXJnZXRJZDJsaW5rcy5nZXQodGhpcy4kX2lkKVxyXG4gICAgICAgIGlmICghdGFyZ2V0TGlua3MpIHRhcmdldExpbmtzID0gbmV3IFNldCgpXHJcblxyXG4gICAgICAgIGNvbnN0IG5vZGVTZXQgPSBuZXcgU2V0KFtcclxuICAgICAgICAgICAgLi4uWy4uLnNvdXJjZUxpbmtzXS5tYXAoKGxpbmspID0+IGxpbmsuJF90YXJnZXQpLFxyXG4gICAgICAgICAgICAuLi5bLi4udGFyZ2V0TGlua3NdLm1hcCgobGluaykgPT4gbGluay4kX3NvdXJjZSlcclxuICAgICAgICBdKVxyXG5cclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShub2RlU2V0KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0IG5laWdoYm9yIGxpbmtzIGZvciBjdXJyZW50IG5vZGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIG5laWdoYm9yTGlua3MoKSB7XHJcbiAgICAgICAgLy8gTk9URTogY3VycmVudGx5IEFQSSBub3QgaW50ZW50IHRvIHN1cHBvcnQgZGlyZWN0ZWQgZ3JhcGhcclxuICAgICAgICBsZXQgc291cmNlTGlua3MgPSB0aGlzLiRfY29yZS4kX3NvdXJjZUlkMmxpbmtzLmdldCh0aGlzLiRfaWQpXHJcbiAgICAgICAgaWYgKCFzb3VyY2VMaW5rcykgc291cmNlTGlua3MgPSBuZXcgU2V0KClcclxuICAgICAgICBsZXQgdGFyZ2V0TGlua3MgPSB0aGlzLiRfY29yZS4kX3RhcmdldElkMmxpbmtzLmdldCh0aGlzLiRfaWQpXHJcbiAgICAgICAgaWYgKCF0YXJnZXRMaW5rcykgdGFyZ2V0TGlua3MgPSBuZXcgU2V0KClcclxuXHJcbiAgICAgICAgY29uc3QgbGlua1NldCA9IG5ldyBTZXQoWy4uLnNvdXJjZUxpbmtzLCAuLi50YXJnZXRMaW5rc10pXHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20obGlua1NldClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldC9nZXQgeCBwb3N0aW9uXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3ZhbHVlXVxyXG4gICAgICogQG1lbWJlcm9mIE5vZGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHgodmFsdWU/OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbih7XHJcbiAgICAgICAgICAgICAgICB4OiB2YWx1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy4kX3Bvc2l0aW9uLnhcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldC9nZXQgeSBwb3N0aW9uXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3ZhbHVlXVxyXG4gICAgICogQG1lbWJlcm9mIE5vZGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHkodmFsdWU/OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbih7XHJcbiAgICAgICAgICAgICAgICB5OiB2YWx1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy4kX3Bvc2l0aW9uLnlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldC9nZXQgcG9zdGlvblxyXG4gICAgICogQG1lbWJlcm9mIE5vZGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvc2l0aW9uKHBvc2l0aW9uPzogaW50ZXJmYWNlcy5Qb3NpdGlvbikge1xyXG4gICAgICAgIGxldCBsaW5rU2V0cyA9IHt9XHJcblxyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCAmJiAoJ3gnIGluIHBvc2l0aW9uIHx8ICd5JyBpbiBwb3NpdGlvbikpIHtcclxuICAgICAgICAgICAgaWYgKCd4JyBpbiBwb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kX3Bvc2l0aW9uWyd4J10gPSBwb3NpdGlvbi54XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCd5JyBpbiBwb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kX3Bvc2l0aW9uWyd5J10gPSBwb3NpdGlvbi55XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRfY29yZS4kX3JlbmRlcmVyLnNob3VsZExhenlVcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRfcG9zaXRpb25cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxpbmtTZXRzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZpbmQgbGlua3MgZnJvbS90byB0aGlzIG5vZGVcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IHRoaXMuJF9jb3JlLiRfc291cmNlSWQybGlua3MuZ2V0KHRoaXMuJF9pZCksXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLiRfY29yZS4kX3RhcmdldElkMmxpbmtzLmdldCh0aGlzLiRfaWQpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMobGlua1NldHMpLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZW50cnlbMF06ICdzb3VyY2UnIC8gJ3RhcmdldCdcclxuICAgICAgICAgICAgICAgICAgICAvLyBlbnRyeVsxXTogdGhlIGxpbmsgc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZW50cnlbMF0gYXMgTGlua0F0dHJcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXQgPSBlbnRyeVsxXSBhcyBTZXQ8TGluaz5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfcmVuZGVyZXIuaW5jcmVhc2VNb2RpZmllZEVsZW1lbnRzQ291bnRCeShzZXQuc2l6ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBsaW5rIG9mIHNldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9yZW5kZXJlci5saW5rTWFuYWdlci5jaGFuZ2VBdHRyaWJ1dGUobGluaywga2V5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRfY29yZS4kX3JlbmRlcmVyLmluY3JlYXNlTW9kaWZpZWRFbGVtZW50c0NvdW50QnkoMSlcclxuICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfcmVuZGVyZXIubm9kZU1hbmFnZXIuY2hhbmdlQXR0cmlidXRlKHRoaXMsICdwb3NpdGlvbicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfcG9zaXRpb25cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldCB0aGUgaWQgb2YgdGhpcyBub2RlLlxyXG4gICAgICogaXQgaXMgb25seSB1c2VkIGZvciBjb25zdHJ1Y3RvclxyXG4gICAgICogYmVjYXVzZSBhIG5vZGUncyBpZCBpcyBub3QgYWxsb3dlZCB0byBiZSBjaGFuZ2VkLlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxyXG4gICAgICogQHJldHVybnMgbm90aGluZ1xyXG4gICAgICogQG1lbWJlcm9mIE5vZGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSAkX3NldElkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoaXNWYWxpZElkKHZhbHVlKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy4kX2NvcmUuJF9pZDJub2RlLmhhcyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRHVwbGljYXRlIG5vZGUgKCR7dmFsdWV9KSBpcyBub3QgYWxsb3dlZC5gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkSWQodGhpcy4kX2lkKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IGNoYW5nZSB0aGUgaWQgb2YgYW4gZXhpc3Qgbm9kZS4nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfaWQybm9kZS5zZXQodmFsdWUsIHRoaXMpXHJcbiAgICAgICAgICAgIHRoaXMuJF9pZCA9IHZhbHVlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIElEICR7dmFsdWV9YClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vZGVcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgSmlhY2hlbmcgUGFuIDxqYWNraWVhbnhpc0BnbWFpbC5jb20+XHJcbiAqIEBkZXNjcmlwdGlvbiBQcm92aWRlIHRoZSBlbnRyYW5jZSBvZiBOZXRWLmpzLlxyXG4gKiBAZGVwZW5kZW5jZXMgaW50ZXJmYWNlcy50cywgdXRpbHMvbWFwMi5qcywgbm9kZS50cywgbGluay50c1xyXG4gKi9cclxuXHJcbmltcG9ydCAqIGFzIGludGVyZmFjZXMgZnJvbSAnLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgTWFwMiBmcm9tICcuL3V0aWxzL21hcDInXHJcbmltcG9ydCBOb2RlIGZyb20gJy4vZWxlbWVudHMvbm9kZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnLi9lbGVtZW50cy9saW5rJ1xyXG5pbXBvcnQgKiBhcyBkZWZhdWx0Q29uZmlncyBmcm9tICcuL2NvbmZpZ3MnXHJcbmltcG9ydCAqIGFzIGRhdGFzZXQgZnJvbSAnLi9kYXRhc2V0J1xyXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4vcmVuZGVyZXInXHJcbmltcG9ydCB7IEludGVyYWN0aW9uTWFuYWdlciB9IGZyb20gJy4vaW50ZXJhY3Rpb24vaW50ZXJhY3Rpb24nXHJcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJy4vdXRpbHMvdXRpbHMnXHJcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyBFTVBUWV9GVU5DVElPTiB9IGZyb20gJy4vdXRpbHMvY29uc3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXRWIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgVXRpbHMgPSBVdGlsc1xyXG5cclxuICAgIHB1YmxpYyAkX2lkMm5vZGUgPSBuZXcgTWFwKClcclxuICAgIHB1YmxpYyAkX2VuZHMybGluayA9IG5ldyBNYXAyKClcclxuICAgIHB1YmxpYyAkX3NvdXJjZUlkMmxpbmtzOiBNYXA8c3RyaW5nLCBTZXQ8TGluaz4+ID0gbmV3IE1hcCgpXHJcbiAgICBwdWJsaWMgJF90YXJnZXRJZDJsaW5rczogTWFwPHN0cmluZywgU2V0PExpbms+PiA9IG5ldyBNYXAoKVxyXG4gICAgcHVibGljICRfY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudFxyXG4gICAgcHVibGljICRfY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudFxyXG4gICAgcHVibGljICRfcmVuZGVyZXI6IFJlbmRlcmVyXHJcbiAgICBwdWJsaWMgJF9jb25maWdzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkZWZhdWx0Q29uZmlncykpIC8vIE5PVEU6IGRlZXAgY29weSBjb25maWdzXHJcblxyXG4gICAgcHVibGljICRfdHJhbnNmb3JtOiBpbnRlcmZhY2VzLlRyYW5zZm9ybSA9IHsgeDogMCwgeTogMCwgazogMSB9XHJcblxyXG4gICAgcHVibGljICRfbGF6eVVwZGF0ZSA9IGZhbHNlIC8vIGZsYWcgdG8gY29udHJvbCBsYXp5IHVwZGF0ZVxyXG5cclxuICAgIHB1YmxpYyAkX2ludGVyYWN0aW9uTWFuYWdlcjogSW50ZXJhY3Rpb25NYW5hZ2VyXHJcbiAgICBwcml2YXRlICRfZGF0YTogaW50ZXJmYWNlcy5Ob2RlTGlua0RhdGEgPSB7IG5vZGVzOiBbXSwgbGlua3M6IFtdIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBjcmVhdGUgTmV0ViBvYmplY3QuXHJcbiAgICAgKiBAcGFyYW0gY29uZmlncyBjb25maWd1cmF0aW9ucyBvZiBOZXRWLCBtdXN0IGluY2x1ZGUgYSBgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudGAgdGVybVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoY29uZmlnczogYW55KSB7XHJcbiAgICAgICAgaWYgKCEoJ2NvbnRhaW5lcicgaW4gY29uZmlncykgfHwgY29uZmlncy5jb250YWluZXIudGFnTmFtZSAhPT0gJ0RJVicpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0NvbnRhaW5lciBzaG91bGQgYmUgc3BlY2lmaWVkIGFzIGEgZGl2IGVsZW1lbnQhJylcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy4kX2NvbnRhaW5lciA9IGNvbmZpZ3MuY29udGFpbmVyXHJcblxyXG4gICAgICAgIHRoaXMuJF9jb25maWdzID0gVXRpbHMub3ZlcnJpZGUodGhpcy4kX2NvbmZpZ3MsIGNvbmZpZ3MpXHJcbiAgICAgICAgZGVsZXRlIHRoaXMuJF9jb25maWdzWydjb250YWluZXInXVxyXG5cclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSAvLyBUT0RPOiBjb25zaWRlciBub2RlIGVudmlyb21lbnQsIGRvY3VtZW50IG5vdCBkZWZpbmVkXHJcbiAgICAgICAgY29uc3QgcGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcclxuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSB0aGlzLiRfY29uZmlncy53aWR0aCArICdweCdcclxuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gdGhpcy4kX2NvbmZpZ3MuaGVpZ2h0ICsgJ3B4J1xyXG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgU3RyaW5nKHRoaXMuJF9jb25maWdzLndpZHRoICogcGl4ZWxSYXRpbykpXHJcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgU3RyaW5nKHRoaXMuJF9jb25maWdzLmhlaWdodCAqIHBpeGVsUmF0aW8pKVxyXG4gICAgICAgIHRoaXMuJF9jb250YWluZXIuYXBwZW5kQ2hpbGQoY2FudmFzKVxyXG4gICAgICAgIHRoaXMuJF9jYW52YXMgPSBjYW52YXNcclxuXHJcbiAgICAgICAgdGhpcy4kX3JlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHtcclxuICAgICAgICAgICAgY2FudmFzLFxyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy4kX2NvbmZpZ3Mud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy4kX2NvbmZpZ3MuaGVpZ2h0LFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuJF9jb25maWdzLmJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgICAgbm9kZUxpbWl0OiB0aGlzLiRfY29uZmlncy5ub2RlTGltaXQsXHJcbiAgICAgICAgICAgIGxpbmtMaW1pdDogdGhpcy4kX2NvbmZpZ3MubGlua0xpbWl0LFxyXG4gICAgICAgICAgICBnZXRBbGxOb2RlczogdGhpcy5ub2Rlcy5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBnZXRBbGxMaW5rczogdGhpcy5saW5rcy5iaW5kKHRoaXMpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy4kX2ludGVyYWN0aW9uTWFuYWdlciA9IG5ldyBJbnRlcmFjdGlvbk1hbmFnZXIodGhpcylcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldC9zZXQgY2FudmFzJ3MgYmFja2dyb3VuZCBjb2xvclxyXG4gICAgICogQHBhcmFtIGNvbG9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBiYWNrZ3JvdW5kQ29sb3IoY29sb3I/OiBpbnRlcmZhY2VzLkNvbG9yKSB7XHJcbiAgICAgICAgaWYgKGNvbG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9jb25maWdzLmJhY2tncm91bmRDb2xvciA9IGNvbG9yXHJcbiAgICAgICAgICAgIHRoaXMuJF9yZW5kZXJlci5zZXRCYWNrZ3JvdW5kQ29sb3IoY29sb3IpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfY29uZmlncy5iYWNrZ3JvdW5kQ29sb3JcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBkYXRhIGdldHRlciBzZXR0ZXJcclxuICAgICAqIEBwYXJhbSBub2RlTGlua0RhdGE/IHRoZSBub2RlLWxpbmstZGF0YSBvZiBhIGdyYXBoLCBwcm92aWRlZD9zZXR0ZXI6Z2V0dGVyO1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGF0YShub2RlTGlua0RhdGE/OiBpbnRlcmZhY2VzLk5vZGVMaW5rRGF0YSkge1xyXG4gICAgICAgIGlmIChub2RlTGlua0RhdGEgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kX2RhdGFcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBkZWxldGUgb2xkIGRhdGFcclxuICAgICAgICAgICAgdGhpcy4kX2RhdGEgPSB7IC4uLnRoaXMuJF9kYXRhLCAuLi5ub2RlTGlua0RhdGEgfVxyXG4gICAgICAgICAgICB0aGlzLiRfaWQybm9kZSA9IG5ldyBNYXAoKVxyXG4gICAgICAgICAgICB0aGlzLiRfZW5kczJsaW5rID0gbmV3IE1hcDIoKVxyXG4gICAgICAgICAgICB0aGlzLiRfc291cmNlSWQybGlua3MgPSBuZXcgTWFwKClcclxuICAgICAgICAgICAgdGhpcy4kX3RhcmdldElkMmxpbmtzID0gbmV3IE1hcCgpXHJcblxyXG4gICAgICAgICAgICB0aGlzLiRfcmVuZGVyZXIuY2xlYXJEYXRhKClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWRkTm9kZXModGhpcy4kX2RhdGEubm9kZXMpXHJcbiAgICAgICAgICAgIHRoaXMuYWRkTGlua3ModGhpcy4kX2RhdGEubGlua3MpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIGluaXRpYWxpemUgYW5kIGFkZCBhIG5vZGVcclxuICAgICAqIEBwYXJhbSBub2RlRGF0YSB0aGUgZGF0YSBvZiBhIG5vZGUsIGluY2x1ZGUgaWQsIHN0eWxlcy4uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkTm9kZShub2RlRGF0YTogaW50ZXJmYWNlcy5Ob2RlRGF0YSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFkZE5vZGVzKFtub2RlRGF0YV0pWzBdXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gaW5pdGlhbGl6ZSBhbmQgYWRkIGEgbGlua1xyXG4gICAgICogQHBhcmFtIGxpbmtEYXRhIHRoZSBkYXRhIG9mIGEgbGluaywgaW5jbHVkZSBzb3VyY2UsIHRhcmdldCwgYW5kIHN0eWxlcy4uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkTGluayhsaW5rRGF0YTogaW50ZXJmYWNlcy5MaW5rRGF0YSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFkZExpbmtzKFtsaW5rRGF0YV0pWzBdXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gaW5pdGlhbGl6ZSBhbmQgYWRkIGFuIGFycmF5IG9mIG5vZGVzLlxyXG4gICAgICogQHBhcmFtIHtpbnRlcmZhY2VzLk5vZGVEYXRhW119IG5vZGVzRGF0YTogYSBkYXRhIGFycmF5IG9mIG5vZGVzIHRvYmUgYWRkZWRcclxuICAgICAqIEBtZW1iZXJvZiBOZXRWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGROb2Rlcyhub2Rlc0RhdGE6IGludGVyZmFjZXMuTm9kZURhdGFbXSkge1xyXG4gICAgICAgIGNvbnN0IG5ld05vZGVzID0gbm9kZXNEYXRhLm1hcCgobm9kZURhdGEpID0+IHtcclxuICAgICAgICAgICAgbm9kZURhdGEuaWQgPSBub2RlRGF0YS5pZC50b1N0cmluZygpXHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBuZXcgTm9kZSh0aGlzLCBub2RlRGF0YSlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBub2RlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLiRfcmVuZGVyZXIuYWRkTm9kZXMobmV3Tm9kZXMpXHJcbiAgICAgICAgcmV0dXJuIG5ld05vZGVzXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gaW5pdGlhbGl6ZSBhbmQgYWRkIGFuIGFycmF5IG9mIGxpbmtzLlxyXG4gICAgICogQHBhcmFtIHtpbnRlcmZhY2VzLkxpbmtEYXRhW119IGxpbmtzRGF0YTogYSBkYXRhIGFycmF5IG9mIGxpbmtzIHRvYmUgYWRkZWRcclxuICAgICAqIEBtZW1iZXJvZiBOZXRWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRMaW5rcyhsaW5rc0RhdGE6IGludGVyZmFjZXMuTGlua0RhdGFbXSkge1xyXG4gICAgICAgIGNvbnN0IG5ld0xpbmtzID0gbGlua3NEYXRhLm1hcCgobGlua0RhdGEpID0+IHtcclxuICAgICAgICAgICAgbGlua0RhdGEuc291cmNlID0gbGlua0RhdGEuc291cmNlLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgbGlua0RhdGEudGFyZ2V0ID0gbGlua0RhdGEudGFyZ2V0LnRvU3RyaW5nKClcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBuZXcgTGluayh0aGlzLCBsaW5rRGF0YSlcclxuICAgICAgICAgICAgcmV0dXJuIGxpbmtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIHRoaXMuJF9yZW5kZXJlci5hZGRMaW5rcyhuZXdMaW5rcylcclxuICAgICAgICB0aGlzLiRfcmVuZGVyZXIuYWRkTGlua3MoWy4uLnRoaXMuJF9lbmRzMmxpbmsudmFsdWVzKCldKSAvLyBOT1RFOiBwcmVzZXJ2ZSBsaW5rIG9yZGVyLCBub3QgZWxlZ2FudFxyXG4gICAgICAgIHJldHVybiBuZXdMaW5rc1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIGdldCBhIE5vZGUgb2JqZWN0IGZyb20gdGhlIGlkMm5vZGUgTWFwIGRhdGEgc3RydWN0dXJlXHJcbiAgICAgKiBAcGFyYW0gaWQgbm9kZSBpZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Tm9kZUJ5SWQoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRfaWQybm9kZS5nZXQoaWQpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gZ2V0IGEgTGluayBvYmplY3QgZnJvbSB0aGUgZW5kczJsaW5rIE1hcDIgZGF0YSBzdHJ1Y3R1cmVcclxuICAgICAqIEBwYXJhbSBlbmRJZDEgb25lIGVuZCBpZCBvZiB0aGUgbGluayAoc291cmNlIG9yIHRhcmdldClcclxuICAgICAqIEBwYXJhbSBlbmRJZDIgYW5vdGhlciBlbmQgaWQgb2YgdGhlIGxpbmsgKHNvdXJjZSBvciB0YXJnZXQpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRMaW5rQnlFbmRzKGVuZElkMTogc3RyaW5nLCBlbmRJZDI6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRfZW5kczJsaW5rLmdldChbZW5kSWQxLCBlbmRJZDJdKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIGdldCBhbGwgbm9kZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIG5vZGVzKCk6IE5vZGVbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLiRfaWQybm9kZS52YWx1ZXMoKV1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBnZXQgYWxsIGxpbmtzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsaW5rcygpOiBMaW5rW10ge1xyXG4gICAgICAgIHJldHVybiBbLi4udGhpcy4kX2VuZHMybGluay52YWx1ZXMoKV1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiB3aXBlIGFsbCB0aGUgZGF0YSBpbiB0aGUgaW5zdGFuY2VcclxuICAgICAqIEBtZW1iZXJvZiBOZXRWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB3aXBlKCkge1xyXG4gICAgICAgIHRoaXMuJF9kYXRhID0gdW5kZWZpbmVkXHJcbiAgICAgICAgdGhpcy4kX2lkMm5vZGUgPSBuZXcgTWFwKClcclxuICAgICAgICB0aGlzLiRfZW5kczJsaW5rID0gbmV3IE1hcDIoKVxyXG4gICAgICAgIHRoaXMuJF9zb3VyY2VJZDJsaW5rcyA9IG5ldyBNYXAoKVxyXG4gICAgICAgIHRoaXMuJF90YXJnZXRJZDJsaW5rcyA9IG5ldyBNYXAoKVxyXG4gICAgICAgIHRoaXMuJF9yZW5kZXJlci5jbGVhckRhdGEoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZGlzcG9zZSBOZXRWIG9iamVjdCwgY2xlYXIgYWxsIHN0dWZmc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICB0aGlzLndpcGUoKVxyXG4gICAgICAgIHRoaXMuJF9yZW5kZXJlci5kaXNwb3NlKClcclxuICAgICAgICB0aGlzLiRfY2FudmFzLnJlbW92ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gcmV0dXJuIGJ1aWxkLWluIGRhdGFzZXQgYWNjb3JkaW5nIHRvIG5hbWVcclxuICAgICAqIEBwYXJhbSBuYW1lIGRhdGFzZXQgbmFtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZERhdGFzZXQobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKG5hbWUgaW4gZGF0YXNldCkgcmV0dXJuIGRhdGFzZXRbbmFtZV1cclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgTmV0ViBkb2VzIG5vdCBoYXZlIGJ1aWxkLWluIGRhdGFzZXQ6ICR7bmFtZX1gKVxyXG4gICAgICAgIHJldHVybiB7IG5vZGVzOiBbXSwgbGlua3M6IFtdIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdpdmVuIHBvc2l0aW9uLCByZXR1cm4gZWxlbWVudCBvbiB0aGlzIHBpeGVsIGlmIGV4aXN0c1xyXG4gICAgICogQHBhcmFtIHggeCBwb3NcclxuICAgICAqIEBwYXJhbSB5IHkgcG9zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRFbGVtZW50QnlQb3NpdGlvbihcclxuICAgICAgICBwb3NpdGlvbjogaW50ZXJmYWNlcy5Qb3NpdGlvblxyXG4gICAgKTogeyB0eXBlOiAnbm9kZScgfCAnbGluayc7IGVsZW1lbnQ6IE5vZGUgfCBMaW5rIH0gfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy4kX3JlbmRlcmVyLmdldElkQnlQb3NpdGlvbihwb3NpdGlvbilcclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGVCeUlkKGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9kZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogbm9kZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGlkKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGluayA9IHRoaXMuZ2V0TGlua0J5RW5kcyhpZFswXSwgaWRbMV0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5rJyxcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBsaW5rXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gZHJhdyBlbGVtZW50c1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZHJhdygpIHtcclxuICAgICAgICB0aGlzLiRfcmVuZGVyZXIuZHJhdygpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gdHJhbnNpdGlvbiBiZXR3ZWVuIGRpZmZlcmVudCB0cmFuc2Zvcm1zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0cmFuc2l0aW9uKFxyXG4gICAgICAgIHRyYW5zZm9ybXM6IGludGVyZmFjZXMuVHJhbnNmb3JtW10sXHJcbiAgICAgICAgZHVyYXRpb25zTVM6IG51bWJlcltdLFxyXG4gICAgICAgIGNhbGxiYWNrPzogKGU6IGFueSkgPT4ge31cclxuICAgICkge1xyXG4gICAgICAgIC8vIGludGVycG9sYXRpb25cclxuICAgICAgICBjb25zdCBTVEVQU19QRVJfU0VDT05EID0gNjBcclxuICAgICAgICBjb25zdCBNU19QRVJfU0VDT05EID0gMTAwMFxyXG4gICAgICAgIGNvbnN0IFNURVBTX1BFUl9NUyA9IFNURVBTX1BFUl9TRUNPTkQgLyBNU19QRVJfU0VDT05EXHJcbiAgICAgICAgY29uc3QgTVNfUEVSX1NURVAgPSAxIC8gU1RFUFNfUEVSX01TXHJcbiAgICAgICAgY29uc3QgdHJhbnNpdGlvbkZyb21UcmFuc2Zvcm1zID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID49IHRyYW5zZm9ybXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgVE9UQUxfU1RFUFMgPSBNYXRoLm1heChTVEVQU19QRVJfTVMgKiBkdXJhdGlvbnNNU1tpbmRleF0sIDEpXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1RyYW5zZm9ybSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnRyYW5zZm9ybXNbaW5kZXhdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZGlmZmVyZW5jZSA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHRyYW5zZm9ybXNbaW5kZXggKyAxXS54IC0gdHJhbnNmb3Jtc1tpbmRleF0ueCxcclxuICAgICAgICAgICAgICAgIHk6IHRyYW5zZm9ybXNbaW5kZXggKyAxXS55IC0gdHJhbnNmb3Jtc1tpbmRleF0ueSxcclxuICAgICAgICAgICAgICAgIGs6IHRyYW5zZm9ybXNbaW5kZXggKyAxXS5rIC0gdHJhbnNmb3Jtc1tpbmRleF0ua1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpblRyYW5zbGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHRyYW5zZm9ybXNbaW5kZXhdLngsXHJcbiAgICAgICAgICAgICAgICB5OiB0cmFuc2Zvcm1zW2luZGV4XS55LFxyXG4gICAgICAgICAgICAgICAgazogdHJhbnNmb3Jtc1tpbmRleF0ua1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGVhc2UgPSAoeDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geCAqIHhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgc3RlcCA9IDFcclxuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbmV3VHJhbnNmb3JtLnggPSBvcmlnaW5UcmFuc2xhdGUueCArIGRpZmZlcmVuY2UueCAqIGVhc2Uoc3RlcCAvIFRPVEFMX1NURVBTKVxyXG4gICAgICAgICAgICAgICAgbmV3VHJhbnNmb3JtLnkgPSBvcmlnaW5UcmFuc2xhdGUueSArIGRpZmZlcmVuY2UueSAqIGVhc2Uoc3RlcCAvIFRPVEFMX1NURVBTKVxyXG4gICAgICAgICAgICAgICAgbmV3VHJhbnNmb3JtLmsgPSBvcmlnaW5UcmFuc2xhdGUuayArIGRpZmZlcmVuY2UuayAqIGVhc2Uoc3RlcCAvIFRPVEFMX1NURVBTKVxyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0obmV3VHJhbnNmb3JtKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3KClcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soeyB0cmFuc2Zvcm06IG5ld1RyYW5zZm9ybSB9KVxyXG4gICAgICAgICAgICAgICAgc3RlcCArPSAxXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RlcCA+PSBUT1RBTF9TVEVQUykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoYW5pbWF0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25Gcm9tVHJhbnNmb3JtcyhpbmRleCArIDEpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIE1TX1BFUl9TVEVQKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0cmFuc2l0aW9uRnJvbVRyYW5zZm9ybXMoMClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHBhbiBvbiBjYW52YXMgdG8gZ2V0IGdpdmVuIG5vZGUgY2VudGVyZWRcclxuICAgICAqIEBwYXJhbSBub2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjZW50ZXJPbihub2RlOiBOb2RlKTogaW50ZXJmYWNlcy5UcmFuc2Zvcm0ge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IG5vZGUucG9zaXRpb24oKVxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfaW50ZXJhY3Rpb25NYW5hZ2VyLmNlbnRlclBvc2l0aW9uKHBvcylcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHByb2dtYXRpY2FsbHkgcGFuXHJcbiAgICAgKiBAcGFyYW0geFxyXG4gICAgICogQHBhcmFtIHlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBhbkJ5KHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9pbnRlcmFjdGlvbk1hbmFnZXIucGFuQnkoeCwgeSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHByb2dtYXRpY2FsbHkgem9vbVxyXG4gICAgICogQHBhcmFtIGZhY3RvciB6b29tIGZhY3RvclxyXG4gICAgICogQHBhcmFtIGNlbnRlciBvcHRpb25hbCwgem9vbSBjZW50ZXIgcG9zaXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIHpvb21CeShmYWN0b3I6IG51bWJlciwgY2VudGVyPzogUG9zaXRpb24pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kX2ludGVyYWN0aW9uTWFuYWdlci56b29tQnkoZmFjdG9yLCBjZW50ZXIpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXQvc2V0IG5ldHYncyB0cmFuc2Zvcm1cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBvcHRpb25hbCwgdHJhbnNmb3JtIHRvIHNldFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdHJhbnNmb3JtKHZhbHVlPzogaW50ZXJmYWNlcy5UcmFuc2Zvcm0pIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kX3RyYW5zZm9ybVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiRfdHJhbnNmb3JtID0gdmFsdWVcclxuICAgICAgICB0aGlzLiRfcmVuZGVyZXIuc2V0VHJhbnNmb3JtKHRoaXMuJF90cmFuc2Zvcm0pXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF90cmFuc2Zvcm1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgKiBAbWVtYmVyb2YgTmV0VlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb24oZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiAoZTogYW55KSA9PiBhbnkpIHtcclxuICAgICAgICBpZiAoZXZlbnROYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd6b29tJykge1xyXG4gICAgICAgICAgICB0aGlzLiRfaW50ZXJhY3Rpb25NYW5hZ2VyLm9uWm9vbShjYWxsYmFjayA/IGNhbGxiYWNrIDogRU1QVFlfRlVOQ1RJT04pXHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudE5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3BhbicpIHtcclxuICAgICAgICAgICAgdGhpcy4kX2ludGVyYWN0aW9uTWFuYWdlci5vblBhbihjYWxsYmFjayA/IGNhbGxiYWNrIDogRU1QVFlfRlVOQ1RJT04pXHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudE5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ21vdXNlZG93bicpIHtcclxuICAgICAgICAgICAgdGhpcy4kX2ludGVyYWN0aW9uTWFuYWdlci5vbk1vdXNlZG93bihjYWxsYmFjayA/IGNhbGxiYWNrIDogRU1QVFlfRlVOQ1RJT04pXHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudE5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ21vdXNldXAnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9pbnRlcmFjdGlvbk1hbmFnZXIub25Nb3VzZXVwKGNhbGxiYWNrID8gY2FsbGJhY2sgOiBFTVBUWV9GVU5DVElPTilcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50TmFtZS50b0xvd2VyQ2FzZSgpID09PSAnY2xpY2snKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9pbnRlcmFjdGlvbk1hbmFnZXIub25DbGljayhjYWxsYmFjayA/IGNhbGxiYWNrIDogRU1QVFlfRlVOQ1RJT04pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIHR1cm4gb2ZmIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE5ldFZcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9mZihldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s/OiAoZTogYW55KSA9PiBhbnkpIHtcclxuICAgICAgICBpZiAoZXZlbnROYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd6b29tJykge1xyXG4gICAgICAgICAgICB0aGlzLiRfaW50ZXJhY3Rpb25NYW5hZ2VyLm9mZlpvb20oY2FsbGJhY2sgPyBjYWxsYmFjayA6IEVNUFRZX0ZVTkNUSU9OKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnROYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdwYW4nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9pbnRlcmFjdGlvbk1hbmFnZXIub2ZmUGFuKGNhbGxiYWNrID8gY2FsbGJhY2sgOiBFTVBUWV9GVU5DVElPTilcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50TmFtZS50b0xvd2VyQ2FzZSgpID09PSAnbW91c2Vkb3duJykge1xyXG4gICAgICAgICAgICB0aGlzLiRfaW50ZXJhY3Rpb25NYW5hZ2VyLm9mZk1vdXNlZG93bihjYWxsYmFjayA/IGNhbGxiYWNrIDogRU1QVFlfRlVOQ1RJT04pXHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudE5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ21vdXNldXAnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9pbnRlcmFjdGlvbk1hbmFnZXIub2ZmTW91c2V1cChjYWxsYmFjayA/IGNhbGxiYWNrIDogRU1QVFlfRlVOQ1RJT04pXHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudE5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2NsaWNrJykge1xyXG4gICAgICAgICAgICB0aGlzLiRfaW50ZXJhY3Rpb25NYW5hZ2VyLm9mZkNsaWNrKGNhbGxiYWNrID8gY2FsbGJhY2sgOiBFTVBUWV9GVU5DVElPTilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIC8vIHRvIGVuc3VyZSB3aW5kb3cuTmV0ViB3aWxsIG5vdCByZXBvcnQgdHMgZXJyb3JcclxuICAgIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgICAgIE5ldFY6IGFueVxyXG4gICAgfVxyXG59XHJcblxyXG53aW5kb3cuTmV0ViA9IE5ldFZcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XHJcbiAqIEBkZXNjcmlwdGlvbiBoYW5kbGUgYWxsIGludGVyYWN0aW9uIGluIE5ldFZcclxuICovXHJcblxyXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uL2ludGVyZmFjZXMnXHJcbmltcG9ydCBOZXRWIGZyb20gJy4uL2luZGV4J1xyXG5pbXBvcnQgTm9kZSBmcm9tICcuLi9lbGVtZW50cy9ub2RlJ1xyXG5pbXBvcnQgRWxlbWVudCBmcm9tICcuLi9lbGVtZW50cy9lbGVtZW50J1xyXG5cclxuZXhwb3J0IGNsYXNzIEludGVyYWN0aW9uTWFuYWdlciB7XHJcbiAgICBwcml2YXRlIG5ldHY6IE5ldFZcclxuICAgIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudFxyXG5cclxuICAgIHByaXZhdGUgaXNab29tTGlzdGVuZWQgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBpc01vdXNlTGlzdGVuZWQgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBtb3VzZUV2ZW50Q2FsbGJhY2tDb3VudCA9IDBcclxuXHJcbiAgICAvLyBtYXAgdXNlciBkZWZpbmVkIGNhbGxiYWNrID0+IGhhbmRsZXJzLCBjYW4gYmUgdXNlIHRvIHJlbW92ZSBsaXN0ZW5lcnNcclxuICAgIHByaXZhdGUgem9vbUNhbGxiYWNrU2V0OiBTZXQ8KGU6IGFueSkgPT4gYW55PlxyXG4gICAgcHJpdmF0ZSBwYW5DYWxsYmFja1NldDogU2V0PChlOiBhbnkpID0+IGFueT5cclxuICAgIHByaXZhdGUgY2xpY2tDYWxsYmFja1NldDogU2V0PChlOiBhbnkpID0+IGFueT5cclxuICAgIHByaXZhdGUgbW91c2Vkb3duQ2FsbGJhY2tTZXQ6IFNldDwoZTogYW55KSA9PiBhbnk+XHJcbiAgICBwcml2YXRlIG1vdXNldXBDYWxsYmFja1NldDogU2V0PChlOiBhbnkpID0+IGFueT5cclxuXHJcbiAgICBwcml2YXRlIGlzTW91c2VEb3duID0gZmFsc2VcclxuICAgIHByaXZhdGUgaXNNb3VzZU1vdmUgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBtb3VzZURvd25FbGVtZW50XHJcbiAgICBwcml2YXRlIG1vdXNlTW92ZUVsZW1lbnRcclxuICAgIHByaXZhdGUgbW91c2VEb3duRWxlbWVudE9yaWdpblBvczogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IC8vIE5PVEU6IHJlY29yZCBwb3MsIG9ubHkgc3VwcG9ydCBub2RlJ3MgZHJhZ1xyXG5cclxuICAgIHByaXZhdGUgbW91c2VEb3duUG9zOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cclxuICAgIHByaXZhdGUgZHJhZ1N0YXJ0VHJhbnNmb3JtOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBrOiBudW1iZXIgfVxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihuZXR2OiBOZXRWKSB7XHJcbiAgICAgICAgdGhpcy5uZXR2ID0gbmV0dlxyXG4gICAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5uZXR2LiRfY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpXHJcbiAgICAgICAgdGhpcy56b29tQ2FsbGJhY2tTZXQgPSBuZXcgU2V0KClcclxuICAgICAgICB0aGlzLnBhbkNhbGxiYWNrU2V0ID0gbmV3IFNldCgpXHJcbiAgICAgICAgdGhpcy5jbGlja0NhbGxiYWNrU2V0ID0gbmV3IFNldCgpXHJcbiAgICAgICAgdGhpcy5tb3VzZWRvd25DYWxsYmFja1NldCA9IG5ldyBTZXQoKVxyXG4gICAgICAgIHRoaXMubW91c2V1cENhbGxiYWNrU2V0ID0gbmV3IFNldCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBwcm9nbWF0aWNhbGx5IHBhblxyXG4gICAgICogQHBhcmFtIHhcclxuICAgICAqIEBwYXJhbSB5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwYW5CeSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IG5ld1RyYW5zZm9ybSA9IHsgLi4udGhpcy5uZXR2LiRfdHJhbnNmb3JtIH1cclxuICAgICAgICBuZXdUcmFuc2Zvcm0ueCArPSB4XHJcbiAgICAgICAgbmV3VHJhbnNmb3JtLnkgKz0geVxyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHYudHJhbnNmb3JtKG5ld1RyYW5zZm9ybSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHByb2dtYXRpY2FsbHkgem9vbVxyXG4gICAgICogQHBhcmFtIGZhY3RvciB6b29tIGZhY3RvclxyXG4gICAgICogQHBhcmFtIGNlbnRlciBvcHRpb25hbCwgem9vbSBjZW50ZXIgcG9zaXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIHpvb21CeShmYWN0b3I6IG51bWJlciwgY2VudGVyPzogUG9zaXRpb24pIHtcclxuICAgICAgICBjb25zdCBuZXdUcmFuc2Zvcm0gPSB7IC4uLnRoaXMubmV0di4kX3RyYW5zZm9ybSB9XHJcbiAgICAgICAgbGV0IGNlbnRlclBvcyA9IGNlbnRlclxyXG4gICAgICAgIGlmICghY2VudGVyUG9zKSB7XHJcbiAgICAgICAgICAgIGNlbnRlclBvcyA9IHsgeDogdGhpcy5uZXR2LiRfY29uZmlncy53aWR0aCAvIDIsIHk6IHRoaXMubmV0di4kX2NvbmZpZ3MuaGVpZ2h0IC8gMiB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gY2VudGVyUG9zXHJcblxyXG4gICAgICAgIG5ld1RyYW5zZm9ybS54ID0gKDEgLSBmYWN0b3IpICogeCArIGZhY3RvciAqIG5ld1RyYW5zZm9ybS54XHJcbiAgICAgICAgbmV3VHJhbnNmb3JtLnkgPSAoMSAtIGZhY3RvcikgKiB5ICsgZmFjdG9yICogbmV3VHJhbnNmb3JtLnlcclxuXHJcbiAgICAgICAgbmV3VHJhbnNmb3JtLmsgKj0gZmFjdG9yXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHYudHJhbnNmb3JtKG5ld1RyYW5zZm9ybSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG1vdmUgY3VycmVudCBwb3NpdGlvbiB0byBjZW50ZXIgb2YgY2FudmFzXHJcbiAgICAgKiBAcGFyYW0gcG9zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjZW50ZXJQb3NpdGlvbihwb3M6IFBvc2l0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgbmV3VHJhbnNmb3JtID0geyAuLi50aGlzLm5ldHYuJF90cmFuc2Zvcm0gfVxyXG4gICAgICAgIGNvbnN0IHggPSBwb3MueCAqIG5ld1RyYW5zZm9ybS5rICsgbmV3VHJhbnNmb3JtLnhcclxuICAgICAgICBjb25zdCB5ID0gcG9zLnkgKiBuZXdUcmFuc2Zvcm0uayArIG5ld1RyYW5zZm9ybS55XHJcblxyXG4gICAgICAgIGNvbnN0IGNlbnRlciA9IHtcclxuICAgICAgICAgICAgeDogdGhpcy5uZXR2LiRfY29uZmlncy53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIHk6IHRoaXMubmV0di4kX2NvbmZpZ3MuaGVpZ2h0IC8gMlxyXG4gICAgICAgIH1cclxuICAgICAgICBuZXdUcmFuc2Zvcm0ueCArPSBjZW50ZXIueCAtIHhcclxuICAgICAgICBuZXdUcmFuc2Zvcm0ueSArPSBjZW50ZXIueSAtIHlcclxuICAgICAgICB0aGlzLm5ldHYudHJhbnNmb3JtKG5ld1RyYW5zZm9ybSlcclxuICAgICAgICByZXR1cm4gbmV3VHJhbnNmb3JtXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpbml0IHpvb20gaW50ZXJhY3Rpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uWm9vbShjYWxsYmFjazogKGU6IGFueSkgPT4gYW55KSB7XHJcbiAgICAgICAgdGhpcy56b29tQ2FsbGJhY2tTZXQuYWRkKGNhbGxiYWNrKVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNab29tTGlzdGVuZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRXaGVlbExpc3RlbmVycygpXHJcbiAgICAgICAgICAgIHRoaXMuaXNab29tTGlzdGVuZWQgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvZmZab29tKGNhbGxiYWNrOiAoZTogYW55KSA9PiBhbnkpIHtcclxuICAgICAgICB0aGlzLnpvb21DYWxsYmFja1NldC5kZWxldGUoY2FsbGJhY2spXHJcblxyXG4gICAgICAgIGlmICghdGhpcy56b29tQ2FsbGJhY2tTZXQuc2l6ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZVdoZWVsTGlzdGVuZXJzKClcclxuICAgICAgICAgICAgdGhpcy5pc1pvb21MaXN0ZW5lZCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNsaWNrKGNhbGxiYWNrOiAoZTogYW55KSA9PiBhbnkpIHtcclxuICAgICAgICB0aGlzLmNsaWNrQ2FsbGJhY2tTZXQuYWRkKGNhbGxiYWNrKVxyXG4gICAgICAgIHRoaXMuaW5jcmVhc2VNb3VzZUV2ZW50Q2FsbGJhY2tDb3VudEJ5KDEpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9mZkNsaWNrKGNhbGxiYWNrOiAoZTogYW55KSA9PiBhbnkpIHtcclxuICAgICAgICB0aGlzLmNsaWNrQ2FsbGJhY2tTZXQuZGVsZXRlKGNhbGxiYWNrKVxyXG4gICAgICAgIHRoaXMuZGVjcmVhc2VNb3VzZUV2ZW50Q2FsbGJhY2tDb3VudEJ5KDEpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uTW91c2Vkb3duKGNhbGxiYWNrOiAoZTogYW55KSA9PiBhbnkpIHtcclxuICAgICAgICB0aGlzLm1vdXNlZG93bkNhbGxiYWNrU2V0LmFkZChjYWxsYmFjaylcclxuICAgICAgICB0aGlzLmluY3JlYXNlTW91c2VFdmVudENhbGxiYWNrQ291bnRCeSgxKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvZmZNb3VzZWRvd24oY2FsbGJhY2s6IChlOiBhbnkpID0+IGFueSkge1xyXG4gICAgICAgIHRoaXMubW91c2Vkb3duQ2FsbGJhY2tTZXQuZGVsZXRlKGNhbGxiYWNrKVxyXG4gICAgICAgIHRoaXMuZGVjcmVhc2VNb3VzZUV2ZW50Q2FsbGJhY2tDb3VudEJ5KDEpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uTW91c2V1cChjYWxsYmFjazogKGU6IGFueSkgPT4gYW55KSB7XHJcbiAgICAgICAgdGhpcy5tb3VzZXVwQ2FsbGJhY2tTZXQuYWRkKGNhbGxiYWNrKVxyXG4gICAgICAgIHRoaXMuaW5jcmVhc2VNb3VzZUV2ZW50Q2FsbGJhY2tDb3VudEJ5KDEpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9mZk1vdXNldXAoY2FsbGJhY2s6IChlOiBhbnkpID0+IGFueSkge1xyXG4gICAgICAgIHRoaXMubW91c2V1cENhbGxiYWNrU2V0LmRlbGV0ZShjYWxsYmFjaylcclxuICAgICAgICB0aGlzLmRlY3JlYXNlTW91c2VFdmVudENhbGxiYWNrQ291bnRCeSgxKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblBhbihjYWxsYmFjazogKGU6IGFueSkgPT4gYW55KSB7XHJcbiAgICAgICAgdGhpcy5wYW5DYWxsYmFja1NldC5hZGQoY2FsbGJhY2spXHJcbiAgICAgICAgdGhpcy5pbmNyZWFzZU1vdXNlRXZlbnRDYWxsYmFja0NvdW50QnkoMSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb2ZmUGFuKGNhbGxiYWNrOiAoZTogYW55KSA9PiBhbnkpIHtcclxuICAgICAgICB0aGlzLnBhbkNhbGxiYWNrU2V0LmRlbGV0ZShjYWxsYmFjaylcclxuICAgICAgICB0aGlzLmRlY3JlYXNlTW91c2VFdmVudENhbGxiYWNrQ291bnRCeSgxKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbmNyZWFzZU1vdXNlRXZlbnRDYWxsYmFja0NvdW50QnkobjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5tb3VzZUV2ZW50Q2FsbGJhY2tDb3VudCArPSBuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTW91c2VMaXN0ZW5lZCAmJiB0aGlzLm1vdXNlRXZlbnRDYWxsYmFja0NvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAvLyB0aGVyZSBpcyBzb21lIG1vdXNlIGV2ZW50IGxpc3RlbmVkIGVsZW1lbnRzXHJcbiAgICAgICAgICAgIHRoaXMuYWRkTW91c2VMaXN0ZW5lcnMoKVxyXG4gICAgICAgICAgICB0aGlzLmlzTW91c2VMaXN0ZW5lZCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlY3JlYXNlTW91c2VFdmVudENhbGxiYWNrQ291bnRCeShuOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm1vdXNlRXZlbnRDYWxsYmFja0NvdW50IC09IG5cclxuICAgICAgICBpZiAodGhpcy5tb3VzZUV2ZW50Q2FsbGJhY2tDb3VudCA8PSAwICYmICF0aGlzLnBhbkNhbGxiYWNrU2V0LnNpemUpIHtcclxuICAgICAgICAgICAgLy8gbm8gcGFuIGNhbGxiYWNrIGZ1bmN0aW9ucyBhbmQgbm8gbW91c2UgZXZlbnQgbGlzdGVuZWQgZWxlbWVudHNcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVNb3VzZUxpc3RlbmVycygpXHJcbiAgICAgICAgICAgIHRoaXMuaXNNb3VzZUxpc3RlbmVkID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJpdmF0ZSBoYW5kbGUgem9vbSAobW91c2Ugd2hlZWwpIGV2ZW50XHJcbiAgICAgKiBAcGFyYW0ge1doZWVsRXZlbnR9IGV2dFxyXG4gICAgICogQG1lbWJlcm9mIEludGVyYWN0aW9uTWFuYWdlclxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZVpvb20oZXZ0OiBXaGVlbEV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgbmV3VHJhbnNmb3JtID0geyAuLi50aGlzLm5ldHYuJF90cmFuc2Zvcm0gfVxyXG4gICAgICAgIGNvbnN0IHggPSBldnQub2Zmc2V0WCB8fCBldnQucGFnZVggLSB0aGlzLmNhbnZhcy5vZmZzZXRMZWZ0XHJcbiAgICAgICAgY29uc3QgeSA9IGV2dC5vZmZzZXRZIHx8IGV2dC5wYWdlWSAtIHRoaXMuY2FudmFzLm9mZnNldFRvcFxyXG4gICAgICAgIGNvbnN0IGRlbHRhID0gZXZ0LmRlbHRhWSA/IGV2dC5kZWx0YVkgLyA0MCA6IGV2dC5kZXRhaWwgPyAtZXZ0LmRldGFpbCA6IDBcclxuICAgICAgICBpZiAoZGVsdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgayA9IE1hdGgucG93KDEuMSwgZGVsdGEpXHJcbiAgICAgICAgICAgIG5ld1RyYW5zZm9ybS54ID0gKDEgLSBrKSAqIHggKyBrICogbmV3VHJhbnNmb3JtLnhcclxuICAgICAgICAgICAgbmV3VHJhbnNmb3JtLnkgPSAoMSAtIGspICogeSArIGsgKiBuZXdUcmFuc2Zvcm0ueVxyXG5cclxuICAgICAgICAgICAgbmV3VHJhbnNmb3JtLmsgKj0ga1xyXG5cclxuICAgICAgICAgICAgdGhpcy5uZXR2LnRyYW5zZm9ybShuZXdUcmFuc2Zvcm0pXHJcbiAgICAgICAgICAgIHRoaXMubmV0di5kcmF3KClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuem9vbUNhbGxiYWNrU2V0LmZvckVhY2goKGNhbGxiYWNrKSA9PlxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldnQsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3pvb20nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogbmV3VHJhbnNmb3JtXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByaXZhdGUgaGFuZGxlIG1vdXNlIGRvd24gZXZlbnRcclxuICAgICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZ0XHJcbiAgICAgKiBAbWVtYmVyb2YgSW50ZXJhY3Rpb25NYW5hZ2VyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlTW91c2VEb3duKGV2dDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBldnQub2Zmc2V0WCB8fCBldnQucGFnZVggLSB0aGlzLmNhbnZhcy5vZmZzZXRMZWZ0XHJcbiAgICAgICAgY29uc3QgeSA9IGV2dC5vZmZzZXRZIHx8IGV2dC5wYWdlWSAtIHRoaXMuY2FudmFzLm9mZnNldFRvcFxyXG4gICAgICAgIGNvbnN0IHlJbnYgPSB0aGlzLm5ldHYuJF9jb25maWdzLmhlaWdodCAtIHlcclxuXHJcbiAgICAgICAgY29uc3QgbmV3VHJhbnNmb3JtID0geyAuLi50aGlzLm5ldHYuJF90cmFuc2Zvcm0gfVxyXG5cclxuICAgICAgICB0aGlzLmlzTW91c2VEb3duID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMubW91c2VEb3duUG9zID0geyB4LCB5IH1cclxuICAgICAgICB0aGlzLmRyYWdTdGFydFRyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobmV3VHJhbnNmb3JtKSlcclxuXHJcbiAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50ID0gdGhpcy5uZXR2LmdldEVsZW1lbnRCeVBvc2l0aW9uKHtcclxuICAgICAgICAgICAgeCxcclxuICAgICAgICAgICAgeTogeUludlxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1vdXNlRG93bkVsZW1lbnQ/LmVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubW91c2VEb3duRWxlbWVudC5lbGVtZW50XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50Py5jb25zdHJ1Y3Rvci5uYW1lID09PSAnTm9kZScpIHtcclxuICAgICAgICAgICAgICAgIC8vIG9ubHkgbm9kZSBjYW4gYmUgZHJhZ2dlZFxyXG4gICAgICAgICAgICAgICAgLy8gcmVjb3JkIG9yZ2luIHBvc2l0aW9uIGZvciBkcmFnXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnRPcmlnaW5Qb3MgPSB7IC4uLmVsZW1lbnQucG9zaXRpb24oKSB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxlbWVudC4kX21vdXNlZG93bkNhbGxiYWNrU2V0LmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2dCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbW91c2Vkb3duJyxcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2Vkb3duQ2FsbGJhY2tTZXQuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudDogZXZ0LFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdtb3VzZWRvd24nXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwcml2YXRlIGhhbmRsZSBtb3VzZSBtb3ZlIGV2ZW50XHJcbiAgICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2dFxyXG4gICAgICogQG1lbWJlcm9mIEludGVyYWN0aW9uTWFuYWdlclxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZU1vdXNlTW92ZShldnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICBsZXQgbmV3VHJhbnNmb3JtID0geyAuLi50aGlzLm5ldHYuJF90cmFuc2Zvcm0gfVxyXG4gICAgICAgIGNvbnN0IHggPSBldnQub2Zmc2V0WCB8fCBldnQucGFnZVggLSB0aGlzLmNhbnZhcy5vZmZzZXRMZWZ0XHJcbiAgICAgICAgY29uc3QgeSA9IGV2dC5vZmZzZXRZIHx8IGV2dC5wYWdlWSAtIHRoaXMuY2FudmFzLm9mZnNldFRvcFxyXG5cclxuICAgICAgICBjb25zdCBsYXN0SXNNb3VzZU1vdmUgPSB0aGlzLmlzTW91c2VNb3ZlXHJcbiAgICAgICAgY29uc3QgbGFzdE1vdXNlTW92ZUVsZW1lbnQgPSB0aGlzLm1vdXNlTW92ZUVsZW1lbnRcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNNb3VzZURvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5pc01vdXNlTW92ZSA9IHRydWVcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubW91c2VEb3duRWxlbWVudD8uZWxlbWVudCBhcyBOb2RlXHJcbiAgICAgICAgICAgIC8vIGRyYWcgYSBub2RlOiAxLiBtb3VzZWRvd24gb24gYSBOb2RlOyBhbmQgMi4gdGhlIG5vZGUgaXMgbGlzdGVuZWQ7XHJcbiAgICAgICAgICAgIC8vIGVsc2UgcGFuXHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ/LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdOb2RlJyAmJlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC4kX2RyYWdzdGFydENhbGxiYWNrU2V0LnNpemUgK1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuJF9kcmFnZ2luZ0NhbGxiYWNrU2V0LnNpemUgK1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuJF9kcmFnZW5kQ2FsbGJhY2tTZXQuc2l6ZVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIC8vIGRyYWcgYSBsaXN0ZW5lZCBub2RlXHJcbiAgICAgICAgICAgICAgICBpZiAoIWxhc3RJc01vdXNlTW92ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxhc3QgdGltZSwgdGhlIG1vdXNlIGlzIG5vdCBtb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC4kX2RyYWdzdGFydENhbGxiYWNrU2V0LmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZHJhZ3N0YXJ0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNoYW5nZSBub2RlIHBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnBvc2l0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICB4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnRPcmlnaW5Qb3MueCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh4IC0gdGhpcy5tb3VzZURvd25Qb3MueCkgLyBuZXdUcmFuc2Zvcm0uayxcclxuICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLm1vdXNlRG93bkVsZW1lbnRPcmlnaW5Qb3MueSArICh5IC0gdGhpcy5tb3VzZURvd25Qb3MueSkgLyBuZXdUcmFuc2Zvcm0ua1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ldHYuZHJhdygpXHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC4kX2RyYWdnaW5nQ2FsbGJhY2tTZXQuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcmFnZ2luZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHBhbiwgd2hlbiBub3QgZHJhZ2dpbmcgbm9kZVxyXG4gICAgICAgICAgICAgICAgbmV3VHJhbnNmb3JtLnggPSB0aGlzLmRyYWdTdGFydFRyYW5zZm9ybS54ICsgeCAtIHRoaXMubW91c2VEb3duUG9zLnhcclxuICAgICAgICAgICAgICAgIG5ld1RyYW5zZm9ybS55ID0gdGhpcy5kcmFnU3RhcnRUcmFuc2Zvcm0ueSArIHkgLSB0aGlzLm1vdXNlRG93blBvcy55XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYW5DYWxsYmFja1NldC5zaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXR2LnRyYW5zZm9ybShuZXdUcmFuc2Zvcm0pXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXR2LmRyYXcoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFuQ2FsbGJhY2tTZXQuZm9yRWFjaCgoY2FsbGJhY2spID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncGFuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogbmV3VHJhbnNmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gaG92ZXJcclxuICAgICAgICAgICAgY29uc3QgeUludiA9IHRoaXMubmV0di4kX2NvbmZpZ3MuaGVpZ2h0IC0geVxyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5uZXR2LmdldEVsZW1lbnRCeVBvc2l0aW9uKHsgeCwgeTogeUludiB9KT8uZWxlbWVudFxyXG4gICAgICAgICAgICB0aGlzLm1vdXNlTW92ZUVsZW1lbnQgPSBlbGVtZW50XHJcbiAgICAgICAgICAgIGlmIChsYXN0TW91c2VNb3ZlRWxlbWVudCA9PT0gZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudD8uJF9tb3VzZW1vdmVDYWxsYmFja1NldC5mb3JFYWNoKChjYWxsYmFjaykgPT5cclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdtb3VzZW1vdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxhc3RNb3VzZU1vdmVFbGVtZW50Py4kX21vdXNlb3V0Q2FsbGJhY2tTZXQuZm9yRWFjaCgoY2FsbGJhY2spID0+XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudDogZXZ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbW91c2VvdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBsYXN0TW91c2VNb3ZlRWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50Py4kX21vdXNlb3ZlckNhbGxiYWNrU2V0LmZvckVhY2goKGNhbGxiYWNrKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ21vdXNlb3ZlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByaXZhdGUgaGFuZGxlIG1vdXNlIHVwIGV2ZW50XHJcbiAgICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2dFxyXG4gICAgICogQG1lbWJlcm9mIEludGVyYWN0aW9uTWFuYWdlclxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZU1vdXNlVXAoZXZ0OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW91c2VEb3duRWxlbWVudCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc01vdXNlTW92ZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gZHJhZ1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW91c2VEb3duRWxlbWVudD8uZWxlbWVudC4kX2RyYWdlbmRDYWxsYmFja1NldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLm1vdXNlRG93bkVsZW1lbnQuZWxlbWVudCBhcyBOb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC4kX2RyYWdlbmRDYWxsYmFja1NldC5mb3JFYWNoKChjYWxsYmFjaykgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcmFnZW5kJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjbGlja1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubW91c2VEb3duRWxlbWVudC5lbGVtZW50XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LiRfY2xpY2tDYWxsYmFja1NldC5mb3JFYWNoKChjYWxsYmFjaykgPT5cclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbGljaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIG1vdXNldXBcclxuICAgICAgICAgICAgaWYgKHRoaXMubW91c2VEb3duRWxlbWVudD8uZWxlbWVudC4kX21vdXNldXBDYWxsYmFja1NldCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubW91c2VEb3duRWxlbWVudC5lbGVtZW50IGFzIEVsZW1lbnRcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuJF9tb3VzZXVwQ2FsbGJhY2tTZXQuZm9yRWFjaCgoY2FsbGJhY2spID0+XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudDogZXZ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbW91c2V1cCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY2FudmFzIG1vdXNldXBcclxuICAgICAgICAgICAgdGhpcy5tb3VzZXVwQ2FsbGJhY2tTZXQuZm9yRWFjaCgoY2FsbGJhY2spID0+XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2dCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbW91c2V1cCdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzTW91c2VNb3ZlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjbGljaywgbm90IHBhblxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tDYWxsYmFja1NldC5mb3JFYWNoKChjYWxsYmFjaykgPT5cclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbGljaydcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNNb3VzZURvd24gPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuaXNNb3VzZU1vdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudCA9IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkV2hlZWxMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCB0aGlzLmhhbmRsZVpvb20uYmluZCh0aGlzKSwgZmFsc2UpXHJcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMuaGFuZGxlWm9vbS5iaW5kKHRoaXMpLCBmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZVdoZWVsTGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgdGhpcy5oYW5kbGVab29tLmJpbmQodGhpcykpXHJcbiAgICAgICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMuaGFuZGxlWm9vbS5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkTW91c2VMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXNcclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNb3VzZURvd24uYmluZCh0aGlzKSlcclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUuYmluZCh0aGlzKSlcclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuaGFuZGxlTW91c2VVcC5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlTW91c2VMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXNcclxuICAgICAgICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNb3VzZURvd24uYmluZCh0aGlzKSlcclxuICAgICAgICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUuYmluZCh0aGlzKSlcclxuICAgICAgICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuaGFuZGxlTW91c2VVcC5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJlbmRlckF0dHJpYnV0ZSwgU2hhZGVyU2VyaWVzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcydcclxuaW1wb3J0IHtcclxuICAgIGNyZWF0ZVByb2dyYW0sXHJcbiAgICBjcmVhdGVBcnJheUJ1ZmZlcixcclxuICAgIGV4dHJhY3RBdHRyaWJ1dGVzRnJvbVNoYWRlcixcclxuICAgIGVuY29kZVJlbmRlcklkXHJcbn0gZnJvbSAnLi4vdXRpbHMnXHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXHJcbmltcG9ydCBOb2RlIGZyb20gJy4uLy4uL2VsZW1lbnRzL25vZGUnXHJcbmltcG9ydCBMaW5rIGZyb20gJy4uLy4uL2VsZW1lbnRzL2xpbmsnXHJcblxyXG5leHBvcnQgY2xhc3MgUmVuZGVyRWxlbWVudE1hbmFnZXIge1xyXG4gICAgcHJvdGVjdGVkIGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0XHJcbiAgICAvLyB0aGUgY2FwYWJsaXR5IG9mIHRoZSByZW5kZXIgbWFuYWdlcixcclxuICAgIC8vIHdoaWNoIG1lYW5zIGhvdyBtYW55IGVsZW1lbnRzIGNhbiBiZSByZW5kZXJlZFxyXG4gICAgcHJvdGVjdGVkIGNhcGFjaXR5OiBudW1iZXJcclxuICAgIHByb3RlY3RlZCBjb3VudCA9IDBcclxuICAgIHByb3RlY3RlZCB3aWR0aDogbnVtYmVyXHJcbiAgICBwcm90ZWN0ZWQgaGVpZ2h0OiBudW1iZXJcclxuICAgIHByb3RlY3RlZCBwaXhlbFJhdGlvOiBudW1iZXJcclxuXHJcbiAgICBwcm90ZWN0ZWQgcHJvZ3JhbTogV2ViR0xQcm9ncmFtXHJcbiAgICBwcm90ZWN0ZWQgYXR0cmlidXRlczogTWFwPHN0cmluZywgUmVuZGVyQXR0cmlidXRlPlxyXG5cclxuICAgIC8vIGlkIHNoYWRlcnMgYXJlIGRlc2lnbiBmb3IgbWFwcGluZyBjYW52YXMgcGl4ZWxzIHRvIGVsZW1lbnRzXHJcbiAgICBwcm90ZWN0ZWQgaWRQcm9ncmFtOiBXZWJHTFByb2dyYW1cclxuICAgIHByb3RlY3RlZCBpZEF0dHJpYnV0ZXM6IE1hcDxzdHJpbmcsIFJlbmRlckF0dHJpYnV0ZT5cclxuICAgIHByb3RlY3RlZCBpZFRleHR1cmU6IFdlYkdMVGV4dHVyZVxyXG5cclxuICAgIHByb3RlY3RlZCByZW5kZXJJZFRvRWxlbWVudDogeyBba2V5OiBudW1iZXJdOiBOb2RlIHwgTGluayB9XHJcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFRvUmVuZGVySWQgPSBuZXcgTWFwKClcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQsXHJcbiAgICAgICAgcGFyYW1zOiBhbnksXHJcbiAgICAgICAgc2hhZGVyU2VyaWVzOiBTaGFkZXJTZXJpZXMsXHJcbiAgICAgICAgaWRUZXh0dXJlOiBXZWJHTFRleHR1cmVcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IHsgbGltaXQsIHdpZHRoLCBoZWlnaHQsIGluc3RhbmNlVmVydGVjZXMgfSA9IHBhcmFtc1xyXG4gICAgICAgIHRoaXMuZ2wgPSBnbFxyXG4gICAgICAgIHRoaXMuY2FwYWNpdHkgPSBsaW1pdFxyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XHJcbiAgICAgICAgdGhpcy5waXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMVxyXG5cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSBleHRyYWN0QXR0cmlidXRlc0Zyb21TaGFkZXIoc2hhZGVyU2VyaWVzLnZlcnRleClcclxuICAgICAgICB0aGlzLnByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKFxyXG4gICAgICAgICAgICB0aGlzLmdsLFxyXG4gICAgICAgICAgICBzaGFkZXJTZXJpZXMudmVydGV4LFxyXG4gICAgICAgICAgICBzaGFkZXJTZXJpZXMuZnJhZ21lbnQsXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1xyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXMgPSBleHRyYWN0QXR0cmlidXRlc0Zyb21TaGFkZXIoc2hhZGVyU2VyaWVzLmlkVmVydGV4KVxyXG4gICAgICAgIHRoaXMuaWRQcm9ncmFtID0gY3JlYXRlUHJvZ3JhbShcclxuICAgICAgICAgICAgdGhpcy5nbCxcclxuICAgICAgICAgICAgc2hhZGVyU2VyaWVzLmlkVmVydGV4LFxyXG4gICAgICAgICAgICBzaGFkZXJTZXJpZXMuaWRGcmFnbWVudCxcclxuICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXNcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIHRoaXMuaWRUZXh0dXJlID0gaWRUZXh0dXJlXHJcblxyXG4gICAgICAgIC8vIGluaXRpYWwgYXR0cmlidXRlcyBhcnJheXMgYW5kIGJ1ZmZlcnNcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWF0dHIuaXNCdWlsZEluKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyLmFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShhdHRyLnNpemUgKiB0aGlzLmNhcGFjaXR5KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gYnVpbGQgaW4gYXR0cmlidXRlOiB2ZXRlY2VzIHBvc2l0aW9uc1xyXG4gICAgICAgICAgICAgICAgLy8gZm91ciB2ZXJ0ZWNlcyBvZiBvbmUgZWxlbWVudCAoaHR0cHM6Ly9wYW5qaWFjaGVuZy5zaXRlL3dpa2kvMjAxOS8wNi8wNi93ZWJHTC9XZWJHTC1CYXRjaERyYXclRTQlQkIlQTMlRTclQTAlODElRTklOTglODUlRTglQUYlQkIrJUU3JTkwJTg2JUU4JUE3JUEzLylcclxuICAgICAgICAgICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgYXR0ci5hcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoaW5zdGFuY2VWZXJ0ZWNlcylcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXR0ci5idWZmZXIgPSBjcmVhdGVBcnJheUJ1ZmZlcih0aGlzLmdsLCBhdHRyLmFycmF5KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIGluaXQgaWQgYXR0cmlidXRlcyBhbmQgYnVmZmVyc1xyXG4gICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIsIG5hbWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdpbl9pZCcpIHtcclxuICAgICAgICAgICAgICAgIC8vIGF0dHI6IGluIHZlYzQgaW5JZDtcclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IGhhcmRjb2RlIGNoZWNrLCBuZWVkIHJlZmFjdG9yXHJcbiAgICAgICAgICAgICAgICBpZiAoIWF0dHIuaXNCdWlsZEluKSBhdHRyLmFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShhdHRyLnNpemUgKiB0aGlzLmNhcGFjaXR5KVxyXG4gICAgICAgICAgICAgICAgYXR0ci5idWZmZXIgPSBjcmVhdGVBcnJheUJ1ZmZlcih0aGlzLmdsLCBhdHRyLmFycmF5KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXMuc2V0KG5hbWUsIHRoaXMuYXR0cmlidXRlcy5nZXQobmFtZSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBpbml0IHVuaWZvcm1zXHJcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSlcclxuICAgICAgICAvLyBnZXQgdW5pZm9ybSBsb2NhdGlvbnMgaW4gTWVtb3J5XHJcbiAgICAgICAgY29uc3QgcHJvamVjdGlvbkxvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLCAncHJvamVjdGlvbicpXHJcbiAgICAgICAgY29uc3Qgc2NhbGVMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3NjYWxlJylcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGVMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3RyYW5zbGF0ZScpXHJcbiAgICAgICAgY29uc3Qgdmlld3BvcnRMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3ZpZXdwb3J0JylcclxuICAgICAgICBjb25zdCBwaXhlbFJhdGlvTG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sICdwaXhlbFJhdGlvJylcclxuXHJcbiAgICAgICAgLy8gc2V0IHVuaWZvcm0gdmFsdWVzXHJcbiAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICAgICAgY29uc3QgcHJvamVjdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgICAgICAgICAyIC8gdGhpcy53aWR0aCwgICAgICAgICAgICAgICAgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDAsIC0yIC8gdGhpcy5oZWlnaHQsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLCAgICAgICAgICAgICAgICAxLCAxXHJcbiAgICAgICAgXSlcclxuICAgICAgICBwcm9qZWN0aW9uTG9jYXRpb24gIT09IG51bGwgJiZcclxuICAgICAgICAgICAgdGhpcy5nbC51bmlmb3JtTWF0cml4M2Z2KHByb2plY3Rpb25Mb2NhdGlvbiwgZmFsc2UsIHByb2plY3Rpb24pXHJcblxyXG4gICAgICAgIGNvbnN0IHNjYWxlID0gbmV3IEZsb2F0MzJBcnJheShbMSwgMV0pXHJcbiAgICAgICAgc2NhbGVMb2NhdGlvbiAhPT0gbnVsbCAmJiB0aGlzLmdsLnVuaWZvcm0yZnYoc2NhbGVMb2NhdGlvbiwgc2NhbGUpXHJcblxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IG5ldyBGbG9hdDMyQXJyYXkoWzAsIDBdKVxyXG4gICAgICAgIHRyYW5zbGF0ZUxvY2F0aW9uICE9PSBudWxsICYmIHRoaXMuZ2wudW5pZm9ybTJmdih0cmFuc2xhdGVMb2NhdGlvbiwgdHJhbnNsYXRlKVxyXG5cclxuICAgICAgICBjb25zdCB2aWV3cG9ydCA9IG5ldyBGbG9hdDMyQXJyYXkoW3RoaXMud2lkdGgsIHRoaXMuaGVpZ2h0XSlcclxuICAgICAgICB2aWV3cG9ydExvY2F0aW9uICE9PSBudWxsICYmIHRoaXMuZ2wudW5pZm9ybTJmdih2aWV3cG9ydExvY2F0aW9uLCB2aWV3cG9ydClcclxuXHJcbiAgICAgICAgcGl4ZWxSYXRpb0xvY2F0aW9uICE9PSBudWxsICYmIHRoaXMuZ2wudW5pZm9ybTFmKHBpeGVsUmF0aW9Mb2NhdGlvbiwgdGhpcy5waXhlbFJhdGlvKVxyXG5cclxuICAgICAgICAvLyBpZCB1bmlmb3JtcywgaWRlbnRpY2FsIHRvIG5vZGVcclxuICAgICAgICAvLyBUT0RPOiBuZWVkIHJlZmFjdG9yIHRvb1xyXG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLmlkUHJvZ3JhbSlcclxuICAgICAgICBjb25zdCBpZFByb2plY3Rpb25Mb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuaWRQcm9ncmFtLCAncHJvamVjdGlvbicpXHJcbiAgICAgICAgY29uc3QgaWRTY2FsZUxvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5pZFByb2dyYW0sICdzY2FsZScpXHJcbiAgICAgICAgY29uc3QgaWRUcmFuc2xhdGVMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuaWRQcm9ncmFtLCAndHJhbnNsYXRlJylcclxuICAgICAgICBjb25zdCBpZFZpZXdwb3J0TG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmlkUHJvZ3JhbSwgJ3ZpZXdwb3J0JylcclxuICAgICAgICBjb25zdCBpZFBpeGVsUmF0aW9Mb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuaWRQcm9ncmFtLCAncGl4ZWxSYXRpbycpXHJcblxyXG4gICAgICAgIGlkUHJvamVjdGlvbkxvY2F0aW9uICE9PSBudWxsICYmXHJcbiAgICAgICAgICAgIHRoaXMuZ2wudW5pZm9ybU1hdHJpeDNmdihpZFByb2plY3Rpb25Mb2NhdGlvbiwgZmFsc2UsIHByb2plY3Rpb24pXHJcbiAgICAgICAgaWRTY2FsZUxvY2F0aW9uICE9PSBudWxsICYmIHRoaXMuZ2wudW5pZm9ybTJmdihpZFNjYWxlTG9jYXRpb24sIHNjYWxlKVxyXG4gICAgICAgIGlkVHJhbnNsYXRlTG9jYXRpb24gIT09IG51bGwgJiYgdGhpcy5nbC51bmlmb3JtMmZ2KGlkVHJhbnNsYXRlTG9jYXRpb24sIHRyYW5zbGF0ZSlcclxuICAgICAgICBpZFZpZXdwb3J0TG9jYXRpb24gIT09IG51bGwgJiYgdGhpcy5nbC51bmlmb3JtMmZ2KGlkVmlld3BvcnRMb2NhdGlvbiwgdmlld3BvcnQpXHJcbiAgICAgICAgaWRQaXhlbFJhdGlvTG9jYXRpb24gIT09IG51bGwgJiYgdGhpcy5nbC51bmlmb3JtMWYoaWRQaXhlbFJhdGlvTG9jYXRpb24sIHRoaXMucGl4ZWxSYXRpbylcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0UmVuZGVySWRPZihlbGVtZW50OiBOb2RlIHwgTGluaywgcmVuZGVySWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucmVuZGVySWRUb0VsZW1lbnRbcmVuZGVySWRdID0gZWxlbWVudFxyXG4gICAgICAgIHRoaXMuZWxlbWVudFRvUmVuZGVySWQuc2V0KGVsZW1lbnQsIHJlbmRlcklkKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSZW5kZXJJZE9mKGVsZW1lbnQ6IE5vZGUgfCBMaW5rKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50VG9SZW5kZXJJZC5nZXQoZWxlbWVudClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJlbmRlciBpZCB0byBsaW5rIGlkcyhzb3VyY2UgYW5kIHRhcmdldClcclxuICAgICAqIEBwYXJhbSByZW5kZXJJZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0RWxlbWVudEJ5UmVuZGVySWQocmVuZGVySWQ6IG51bWJlcik6IE5vZGUgfCBMaW5rIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJJZFRvRWxlbWVudFtyZW5kZXJJZF1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldCBUcmFuc2Zvcm0gaW4gUmVuZGVyIExpbmtcclxuICAgICAqIEBwYXJhbSB0cmFuc2Zvcm0gY3VycmVudCB0cmFuc2Zvcm0ocGFuJnpvb20gY29uZGl0aW9uKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0VHJhbnNmb3JtKHRyYW5zZm9ybTogVHJhbnNmb3JtKSB7XHJcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSlcclxuICAgICAgICBjb25zdCBzY2FsZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3NjYWxlJylcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGVMb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sICd0cmFuc2xhdGUnKVxyXG5cclxuICAgICAgICBjb25zdCBzY2FsZSA9IG5ldyBGbG9hdDMyQXJyYXkoW3RyYW5zZm9ybS5rLCB0cmFuc2Zvcm0ua10pXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmZ2KHNjYWxlTG9jLCBzY2FsZSlcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlID0gbmV3IEZsb2F0MzJBcnJheShbdHJhbnNmb3JtLngsIHRyYW5zZm9ybS55XSlcclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZnYodHJhbnNsYXRlTG9jLCB0cmFuc2xhdGUpXHJcblxyXG4gICAgICAgIC8vIGlkIHVuaWZvcm1zLCBpZGVudGljYWwgdG8gbGlua1xyXG4gICAgICAgIC8vIFRPRE86IG5lZWQgcmVmYWN0b3IgdG9vXHJcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMuaWRQcm9ncmFtKVxyXG4gICAgICAgIGNvbnN0IGlkU2NhbGVMb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmlkUHJvZ3JhbSwgJ3NjYWxlJylcclxuICAgICAgICBjb25zdCBpZFRyYW5zbGF0ZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuaWRQcm9ncmFtLCAndHJhbnNsYXRlJylcclxuXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmZ2KGlkU2NhbGVMb2MsIHNjYWxlKVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdihpZFRyYW5zbGF0ZUxvYywgdHJhbnNsYXRlKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmdsLmVuYWJsZSh0aGlzLmdsLkJMRU5EKVxyXG4gICAgICAgICAgICB0aGlzLmdsLmJsZW5kRnVuYyh0aGlzLmdsLk9ORSwgdGhpcy5nbC5PTkVfTUlOVVNfU1JDX0FMUEhBKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSlcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYXR0ci5sb2NhdGlvbilcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIGF0dHIuYnVmZmVyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIubG9jYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5zaXplLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wuRkxPQVQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5zaXplICogYXR0ci5hcnJheS5CWVRFU19QRVJfRUxFTUVOVCxcclxuICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBpZiAoIWF0dHIuaXNCdWlsZEluKSB0aGlzLmdsLnZlcnRleEF0dHJpYkRpdmlzb3IoYXR0ci5sb2NhdGlvbiwgMSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ2wuZHJhd0FycmF5c0luc3RhbmNlZCh0aGlzLmdsLlRSSUFOR0xFX1NUUklQLCAwLCA0LCB0aGlzLmNvdW50KVxyXG5cclxuICAgICAgICAvLyBkcmF3IGlkXHJcbiAgICAgICAgdGhpcy5nbC5ibGVuZEZ1bmModGhpcy5nbC5PTkUsIHRoaXMuZ2wuWkVSTylcclxuICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5pZFByb2dyYW0pXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5GUkFNRUJVRkZFUiwgdGhpcy5pZFRleHR1cmUpXHJcblxyXG4gICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhdHRyLmxvY2F0aW9uKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLmlkQXR0cmlidXRlcy5nZXQoJ2luX2lkJykgLy8gISBIQVJEQ09ERSBDSEVDS1xyXG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYXR0ci5idWZmZXIpXHJcbiAgICAgICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxyXG4gICAgICAgICAgICBhdHRyLmxvY2F0aW9uLFxyXG4gICAgICAgICAgICBhdHRyLnNpemUsXHJcbiAgICAgICAgICAgIHRoaXMuZ2wuRkxPQVQsXHJcbiAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICBhdHRyLnNpemUgKiBhdHRyLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULFxyXG4gICAgICAgICAgICAwXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMuZ2wudmVydGV4QXR0cmliRGl2aXNvcihhdHRyLmxvY2F0aW9uLCAxKVxyXG5cclxuICAgICAgICB0aGlzLmdsLmRyYXdBcnJheXNJbnN0YW5jZWQodGhpcy5nbC5UUklBTkdMRV9TVFJJUCwgMCwgNCwgdGhpcy5jb3VudClcclxuICAgICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLkZSQU1FQlVGRkVSLCBudWxsKVxyXG5cclxuICAgICAgICB0aGlzLmdsLmVuYWJsZSh0aGlzLmdsLkJMRU5EKVxyXG4gICAgICAgIHRoaXMuZ2wuYmxlbmRGdW5jKHRoaXMuZ2wuT05FLCB0aGlzLmdsLk9ORV9NSU5VU19TUkNfQUxQSEEpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgZWxlbWVudCBkYXRhIHRvIGVuZ2luZVxyXG4gICAgICogQHBhcmFtIGVsZW1lbnRzIGVsZW1lbnRzIGRhdGFcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZERhdGEoZWxlbWVudHM6IE5vZGVbXSB8IExpbmtbXSkge1xyXG4gICAgICAgIC8vIHNldCBhcnJheVxyXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQ6IE5vZGUgfCBMaW5rLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jb3VudCArIGlcclxuICAgICAgICAgICAgLy8gbGluayBhdHRyaWJ1dGUgPT4gd2ViZ2wgYXR0cmlidXRlXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWF0dHIuaXNCdWlsZEluKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBhdHRyLmV4dHJhY3RBdHRyaWJ1dGVWYWx1ZUZyb20oZWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKCh2LCBqKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluamVjdCBpbnRvIHRoZSBCdWZmZXIgQXJyYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0ci5hcnJheVthdHRyLnNpemUgKiBpbmRleCArIGpdID0gdlxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSBlbGVtZW50LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdOb2RlJyA/IDAgOiAxIC8vIE5PVEU6IG5vZGUgcmVuZGVyIGlkLCB1c2UgZXZlbiBpbnRlZ2VyXHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcklkID0gMiAqIGluZGV4ICsgb2Zmc2V0XHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcklkQ29sb3IgPSBlbmNvZGVSZW5kZXJJZChyZW5kZXJJZClcclxuICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXMuZ2V0KCdpbl9pZCcpLmFycmF5WzQgKiBpbmRleF0gPSByZW5kZXJJZENvbG9yLnJcclxuICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXMuZ2V0KCdpbl9pZCcpLmFycmF5WzQgKiBpbmRleCArIDFdID0gcmVuZGVySWRDb2xvci5nXHJcbiAgICAgICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzLmdldCgnaW5faWQnKS5hcnJheVs0ICogaW5kZXggKyAyXSA9IHJlbmRlcklkQ29sb3IuYlxyXG4gICAgICAgICAgICB0aGlzLmlkQXR0cmlidXRlcy5nZXQoJ2luX2lkJykuYXJyYXlbNCAqIGluZGV4ICsgM10gPSByZW5kZXJJZENvbG9yLmFcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0UmVuZGVySWRPZihlbGVtZW50LCByZW5kZXJJZClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWF0dHIuaXNCdWlsZEluKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIGF0dHIuYnVmZmVyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5idWZmZXJTdWJEYXRhKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wuQVJSQVlfQlVGRkVSLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSAqIHRoaXMuY291bnQgKiBhdHRyLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuYXJyYXksXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5zaXplICogdGhpcy5jb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLnNpemUgKiBlbGVtZW50cy5sZW5ndGhcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIGlkIGJ1ZmZlciBkYXRhXHJcbiAgICAgICAgY29uc3QgYXR0ciA9IHRoaXMuaWRBdHRyaWJ1dGVzLmdldCgnaW5faWQnKVxyXG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYXR0ci5idWZmZXIpXHJcbiAgICAgICAgdGhpcy5nbC5idWZmZXJTdWJEYXRhKFxyXG4gICAgICAgICAgICB0aGlzLmdsLkFSUkFZX0JVRkZFUixcclxuICAgICAgICAgICAgYXR0ci5zaXplICogdGhpcy5jb3VudCAqIGF0dHIuYXJyYXkuQllURVNfUEVSX0VMRU1FTlQsXHJcbiAgICAgICAgICAgIGF0dHIuYXJyYXksXHJcbiAgICAgICAgICAgIGF0dHIuc2l6ZSAqIHRoaXMuY291bnQsXHJcbiAgICAgICAgICAgIGF0dHIuc2l6ZSAqIGVsZW1lbnRzLmxlbmd0aFxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgdGhpcy5jb3VudCArPSBlbGVtZW50cy5sZW5ndGhcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNoYW5nZSBhbiBlbGVtZW50J3MgYXR0cmlidXRlXHJcbiAgICAgKiBAcGFyYW0gZWxlbWVudCBsaW5rL25vZGUgZGF0YVxyXG4gICAgICogQHBhcmFtIGF0dHJpYnV0ZSBhdHRyaWJ1dGUga2V5IHRvIGNoYW5nZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2hhbmdlQXR0cmlidXRlKGVsZW1lbnQ6IE5vZGUgfCBMaW5rLCBhdHRyaWJ1dGU6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHJlbmRlcklkID0gdGhpcy5nZXRSZW5kZXJJZE9mKGVsZW1lbnQpXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKHJlbmRlcklkIC8gMilcclxuICAgICAgICBjb25zdCBhdHRyID0gdGhpcy5hdHRyaWJ1dGVzLmdldChgaW5fJHthdHRyaWJ1dGV9YClcclxuICAgICAgICBpZiAoYXR0ciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgICAgICAgICBgQXR0cmlidXRlOiAke2F0dHJpYnV0ZX0gaXMgbm90IHN1cHBvcnRlZCBpbiBhICR7ZWxlbWVudC5jb25zdHJ1Y3Rvci5uYW1lfSBpbnN0YW5jZS5gXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF0dHIuZXh0cmFjdEF0dHJpYnV0ZVZhbHVlRnJvbShlbGVtZW50KVxyXG4gICAgICAgIGF0dHIuYXJyYXkuc2V0KGRhdGEsIGF0dHIuc2l6ZSAqIGluZGV4KVxyXG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYXR0ci5idWZmZXIpXHJcbiAgICAgICAgdGhpcy5nbC5idWZmZXJTdWJEYXRhKFxyXG4gICAgICAgICAgICB0aGlzLmdsLkFSUkFZX0JVRkZFUixcclxuICAgICAgICAgICAgYXR0ci5zaXplICogaW5kZXggKiBhdHRyLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULFxyXG4gICAgICAgICAgICBhdHRyLmFycmF5LFxyXG4gICAgICAgICAgICBhdHRyLnNpemUgKiBpbmRleCxcclxuICAgICAgICAgICAgYXR0ci5zaXplXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2xlYXIgZGF0YVxyXG4gICAgICogbm90IGFjdHVhbGx5IGVyYXNlIGRhdGEsIGJ1dCByZXNldCBjb3VudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xlYXJEYXRhKCkge1xyXG4gICAgICAgIHRoaXMuY291bnQgPSAwXHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XHJcbiAqIEBkZXNjcmlwdGlvbiBMaW5rIHVzZWQgaW4gcmVuZGVyZXJcclxuICovXHJcbmltcG9ydCB7IExpbmtNYW5hZ2VyQ29uZmlncywgU2hhZGVyU2VyaWVzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcydcclxuaW1wb3J0IExpbmsgZnJvbSAnLi4vLi4vZWxlbWVudHMvbGluaydcclxuaW1wb3J0IHsgUmVuZGVyRWxlbWVudE1hbmFnZXIgfSBmcm9tICcuL3JlbmRlci1lbGVtZW50J1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlbmRlckxpbmtNYW5hZ2VyIGV4dGVuZHMgUmVuZGVyRWxlbWVudE1hbmFnZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBjcmVhdGUgcmVuZGVyIGxpbmsgbWFuYWdlclxyXG4gICAgICogQHBhcmFtIGdsIFdlYkdMIGNvbnRleHRcclxuICAgICAqIEBwYXJhbSBwYXJhbXMgbmVzc2VzYXJ5IGNvbmZpZ3MgZm9yIGxpbmsgbWFuYWdlclxyXG4gICAgICogQHBhcmFtIGlkVGV4dHVyZSB0ZXh0dXJlIHN0b3JlIGVsZW1lbnRzIGlkIG9mIGVhY2ggcGl4ZWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0LFxyXG4gICAgICAgIHBhcmFtczogTGlua01hbmFnZXJDb25maWdzLFxyXG4gICAgICAgIHNoYWRlcnM6IFNoYWRlclNlcmllcyxcclxuICAgICAgICBpZFRleHR1cmU6IFdlYkdMVGV4dHVyZVxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoXHJcbiAgICAgICAgICAgIC8qIHdlYmdsIGNvbnRleHQgKi8gZ2wsXHJcbiAgICAgICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gICAgICAgICAgICAvKiBwYXJhbWV0ZXJzICovIHsuLi5wYXJhbXMsIGluc3RhbmNlVmVydGVjZXM6IFtcclxuICAgICAgICAgICAgICAgIC0wLjUsIDAuNSwgMS4wLFxyXG4gICAgICAgICAgICAgICAgLTAuNSwgLTAuNSwgMS4wLFxyXG4gICAgICAgICAgICAgICAgMC41LCAwLjUsIDEuMCxcclxuICAgICAgICAgICAgICAgIDAuNSwgLTAuNSwgMS4wLFxyXG4gICAgICAgICAgICBdfSxcclxuICAgICAgICAgICAgLyogc2hhZGVyIHNlcmllcyAqLyB7XHJcbiAgICAgICAgICAgICAgICAuLi5zaGFkZXJzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8qIGlkVGV4dHVyZSAqLyBpZFRleHR1cmVcclxuICAgICAgICApXHJcbiAgICAgICAgdGhpcy5yZW5kZXJJZFRvRWxlbWVudCA9IHt9XHJcblxyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhdHRyLm5hbWUgPT09ICdpbl9zb3VyY2UnKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyLmV4dHJhY3RBdHRyaWJ1dGVWYWx1ZUZyb20gPSAobGluazogTGluaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZVBvc2l0aW9uID0gbGluay5zb3VyY2UoKS5wb3NpdGlvbigpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtzb3VyY2VQb3NpdGlvbi54LCBzb3VyY2VQb3NpdGlvbi55XVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIubmFtZSA9PT0gJ2luX3RhcmdldCcpIHtcclxuICAgICAgICAgICAgICAgIGF0dHIuZXh0cmFjdEF0dHJpYnV0ZVZhbHVlRnJvbSA9IChsaW5rOiBMaW5rKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSBsaW5rLnRhcmdldCgpLnBvc2l0aW9uKClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3RhcmdldFBvc2l0aW9uLngsIHRhcmdldFBvc2l0aW9uLnldXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ci5uYW1lID09PSAnaW5fc3Ryb2tlV2lkdGgnKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyLmV4dHJhY3RBdHRyaWJ1dGVWYWx1ZUZyb20gPSAobGluazogTGluaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbbGluay5zdHJva2VXaWR0aCgpICogdGhpcy5waXhlbFJhdGlvXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIubmFtZSA9PT0gJ2luX3N0cm9rZUNvbG9yJykge1xyXG4gICAgICAgICAgICAgICAgYXR0ci5leHRyYWN0QXR0cmlidXRlVmFsdWVGcm9tID0gKGxpbms6IExpbmspID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHJva2VDb2xvciA9IGxpbmsuc3Ryb2tlQ29sb3IoKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbc3Ryb2tlQ29sb3Iuciwgc3Ryb2tlQ29sb3IuZywgc3Ryb2tlQ29sb3IuYiwgc3Ryb2tlQ29sb3IuYV1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZWZyZXNoIGFsbCBwb3NpdGlvbiBvZiBlZGdlc1xyXG4gICAgICogQHBhcmFtIGxpbmtzIGFsbCBsaW5rIGRhdGFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlZnJlc2hQb3NpdGlvbihsaW5rczogTGlua1tdKSB7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gMCAvLyBUT0RPOiB1c2VsZXNzIGNvdW50XHJcbiAgICAgICAgbGlua3MuZm9yRWFjaCgobGluaywgaSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBjb25zaWRlciBsaW5rIGFuZCByZW5kZXIgbGluayBhdHRyaWJ1dGUgbWFwcGluZ1xyXG4gICAgICAgICAgICBjb25zdCBzb3VyY2UgPSBsaW5rLnNvdXJjZSgpXHJcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZVBvc2l0aW9uID0gc291cmNlLnBvc2l0aW9uKClcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmdldCgnaW5fc291cmNlJykuYXJyYXlbMiAqIChjb3VudCArIGkpXSA9IHNvdXJjZVBvc2l0aW9uLnhcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmdldCgnaW5fc291cmNlJykuYXJyYXlbMiAqIChjb3VudCArIGkpICsgMV0gPSBzb3VyY2VQb3NpdGlvbi55XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBsaW5rLnRhcmdldCgpXHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gdGFyZ2V0LnBvc2l0aW9uKClcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmdldCgnaW5fdGFyZ2V0JykuYXJyYXlbMiAqIChjb3VudCArIGkpXSA9IHRhcmdldFBvc2l0aW9uLnhcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmdldCgnaW5fdGFyZ2V0JykuYXJyYXlbMiAqIChjb3VudCArIGkpICsgMV0gPSB0YXJnZXRQb3NpdGlvbi55XHJcblxyXG4gICAgICAgICAgICAvLyBjdXJyZW50bHkgbm8gbmVlZCBmb3IgY29sb3ImcmVuZGVySWQgY2hhbmdlXHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tMaW5rQXR0cktleS5XSURUSF0uYXJyYXlbdGhpcy5jb3VudCArIGldID1cclxuICAgICAgICAgICAgICAgIGxpbmsuc3Ryb2tlV2lkdGgoKSAqIHRoaXMucGl4ZWxSYXRpb1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBsaW5rLnN0cm9rZUNvbG9yKClcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW0xpbmtBdHRyS2V5LkNPTE9SXS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKV0gPSBjb2xvci5yXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tMaW5rQXR0cktleS5DT0xPUl0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSkgKyAxXSA9IGNvbG9yLmdcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW0xpbmtBdHRyS2V5LkNPTE9SXS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKSArIDJdID0gY29sb3IuYlxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTGlua0F0dHJLZXkuQ09MT1JdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpICsgM10gPSBjb2xvci5hXHJcblxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXJJZENvbG9yID0gZW5jb2RlUmVuZGVySWQoMiAqICh0aGlzLmNvdW50ICsgaSkgKyAxKSAvLyBOT1RFOiBsaW5rIHJlbmRlciBpZCwgdXNlIG9kZCBpbnRlZ2VyXHJcbiAgICAgICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzLmdldCgnaW5faWQnKS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKV0gPSByZW5kZXJJZENvbG9yLnJcclxuICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXMuZ2V0KCdpbl9pZCcpLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpICsgMV0gPSByZW5kZXJJZENvbG9yLmdcclxuICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXMuZ2V0KCdpbl9pZCcpLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpICsgMl0gPSByZW5kZXJJZENvbG9yLmJcclxuICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXMuZ2V0KCdpbl9pZCcpLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpICsgM10gPSByZW5kZXJJZENvbG9yLmFcclxuICAgICAgICAgICAgKi9cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBzb3VyY2VBdHRyID0gdGhpcy5hdHRyaWJ1dGVzLmdldCgnaW5fc291cmNlJylcclxuICAgICAgICBjb25zdCB0YXJnZXRBdHRyID0gdGhpcy5hdHRyaWJ1dGVzLmdldCgnaW5fdGFyZ2V0JylcclxuXHJcbiAgICAgICAgY29uc3QgYXJyID0gW3NvdXJjZUF0dHIsIHRhcmdldEF0dHJdXHJcblxyXG4gICAgICAgIGFyci5mb3JFYWNoKChhdHRyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghYXR0ci5pc0J1aWxkSW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYXR0ci5idWZmZXIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJ1ZmZlclN1YkRhdGEoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbC5BUlJBWV9CVUZGRVIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5zaXplICogY291bnQgKiBhdHRyLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuYXJyYXksXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5zaXplICogY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5zaXplICogbGlua3MubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIFhpYW9kb25nIFpoYW8gPHpoYW94aWFvZG9uZ0B6anUuZWR1LmNuPlxyXG4gKiBAZGVzY3JpcHRpb24gTm9kZSB1c2luZyBpbiBSZW5kZXJlclxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE5vZGVNYW5hZ2VyQ29uZmlncywgU2hhZGVyU2VyaWVzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcydcclxuaW1wb3J0IE5vZGUgZnJvbSAnLi4vLi4vZWxlbWVudHMvbm9kZSdcclxuaW1wb3J0IHsgUmVuZGVyRWxlbWVudE1hbmFnZXIgfSBmcm9tICcuL3JlbmRlci1lbGVtZW50J1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlbmRlck5vZGVNYW5hZ2VyIGV4dGVuZHMgUmVuZGVyRWxlbWVudE1hbmFnZXIge1xyXG4gICAgLy8gcHJpdmF0ZSBpZFRvSW5kZXg6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNyZWF0ZSByZW5kZXIgbm9kZSBtYW5hZ2VyXHJcbiAgICAgKiBAcGFyYW0gZ2wgV2ViR0wgY29udGV4dFxyXG4gICAgICogQHBhcmFtIHBhcmFtcyBuZXNzZXNhcnkgY29uZmlncyBmb3Igbm9kZSBtYW5hZ2VyXHJcbiAgICAgKiBAcGFyYW0gaWRUZXh0dXJlIHRleHR1cmUgc3RvcmUgZWxlbWVudHMgaWQgb2YgZWFjaCBwaXhlbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQsXHJcbiAgICAgICAgcGFyYW1zOiBOb2RlTWFuYWdlckNvbmZpZ3MsXHJcbiAgICAgICAgc2hhZGVyczogU2hhZGVyU2VyaWVzLFxyXG4gICAgICAgIGlkVGV4dHVyZTogV2ViR0xUZXh0dXJlXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihcclxuICAgICAgICAgICAgLyogd2ViZ2wgY29udGV4dCAqLyBnbCxcclxuICAgICAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICAgICAgICAgIC8qIHBhcmFtZXRlcnMgKi8gey4uLnBhcmFtcywgaW5zdGFuY2VWZXJ0ZWNlczogW1xyXG4gICAgICAgICAgICAgICAgLTAuNSwgMC41LCAxLjAsXHJcbiAgICAgICAgICAgICAgICAtMC41LCAtMC41LCAxLjAsXHJcbiAgICAgICAgICAgICAgICAwLjUsIDAuNSwgMS4wLFxyXG4gICAgICAgICAgICAgICAgMC41LCAtMC41LCAxLjAsXHJcbiAgICAgICAgICAgIF19LFxyXG4gICAgICAgICAgICAvKiBzaGFkZXIgc2VyaWVzICovIHtcclxuICAgICAgICAgICAgICAgIC4uLnNoYWRlcnNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLyogaWRUZXh0dXJlICovIGlkVGV4dHVyZVxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLnJlbmRlcklkVG9FbGVtZW50ID0ge31cclxuICAgICAgICAvLyB0aGlzLmlkVG9JbmRleCA9IHt9XHJcblxyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhdHRyLm5hbWUgPT09ICdpbl9wb3NpdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGF0dHIuZXh0cmFjdEF0dHJpYnV0ZVZhbHVlRnJvbSA9IChub2RlOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBub2RlLnBvc2l0aW9uKClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3Bvc2l0aW9uLngsIHBvc2l0aW9uLnldXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ci5uYW1lID09PSAnaW5fcicpIHtcclxuICAgICAgICAgICAgICAgIGF0dHIuZXh0cmFjdEF0dHJpYnV0ZVZhbHVlRnJvbSA9IChub2RlOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtub2RlLnIoKSAqIHRoaXMucGl4ZWxSYXRpb11cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRyLm5hbWUgPT09ICdpbl93aWR0aCcpIHtcclxuICAgICAgICAgICAgICAgIGF0dHIuZXh0cmFjdEF0dHJpYnV0ZVZhbHVlRnJvbSA9IChub2RlOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtub2RlLndpZHRoKCkgKiB0aGlzLnBpeGVsUmF0aW9dXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ci5uYW1lID09PSAnaW5faGVpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgYXR0ci5leHRyYWN0QXR0cmlidXRlVmFsdWVGcm9tID0gKG5vZGU6IE5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW25vZGUuaGVpZ2h0KCkgKiB0aGlzLnBpeGVsUmF0aW9dXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ci5uYW1lID09PSAnaW5fcm90YXRlJykge1xyXG4gICAgICAgICAgICAgICAgYXR0ci5leHRyYWN0QXR0cmlidXRlVmFsdWVGcm9tID0gKG5vZGU6IE5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW25vZGUucm90YXRlKCldXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ci5uYW1lID09PSAnaW5fZmlsbCcpIHtcclxuICAgICAgICAgICAgICAgIGF0dHIuZXh0cmFjdEF0dHJpYnV0ZVZhbHVlRnJvbSA9IChub2RlOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsbCA9IG5vZGUuZmlsbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtmaWxsLnIsIGZpbGwuZywgZmlsbC5iLCBmaWxsLmFdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ci5uYW1lID09PSAnaW5fc3Ryb2tlV2lkdGgnKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyLmV4dHJhY3RBdHRyaWJ1dGVWYWx1ZUZyb20gPSAobm9kZTogTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbbm9kZS5zdHJva2VXaWR0aCgpICogdGhpcy5waXhlbFJhdGlvXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIubmFtZSA9PT0gJ2luX3N0cm9rZUNvbG9yJykge1xyXG4gICAgICAgICAgICAgICAgYXR0ci5leHRyYWN0QXR0cmlidXRlVmFsdWVGcm9tID0gKG5vZGU6IE5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHJva2VDb2xvciA9IG5vZGUuc3Ryb2tlQ29sb3IoKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbc3Ryb2tlQ29sb3Iuciwgc3Ryb2tlQ29sb3IuZywgc3Ryb2tlQ29sb3IuYiwgc3Ryb2tlQ29sb3IuYV1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRyLm5hbWUgPT09ICdpbl9zaGFwZScpIHtcclxuICAgICAgICAgICAgICAgIGF0dHIuZXh0cmFjdEF0dHJpYnV0ZVZhbHVlRnJvbSA9IChub2RlOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hhcGUgPSBub2RlLnNoYXBlKClcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hhcGUgPT09ICdyZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzaGFwZSA9PT0gJ3RyaWFuZ2xlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFswXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRyLm5hbWUgPT09ICdpbl92ZXJ0ZXhBbHBoYScpIHtcclxuICAgICAgICAgICAgICAgIGF0dHIuZXh0cmFjdEF0dHJpYnV0ZVZhbHVlRnJvbSA9IChub2RlOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmVydGV4QWxwaGEgPSBub2RlLnZlcnRleEFscGhhKClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3ZlcnRleEFscGhhLngsIHZlcnRleEFscGhhLnldXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ci5uYW1lID09PSAnaW5fdmVydGV4QmV0YScpIHtcclxuICAgICAgICAgICAgICAgIGF0dHIuZXh0cmFjdEF0dHJpYnV0ZVZhbHVlRnJvbSA9IChub2RlOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmVydGV4QWxwaGEgPSBub2RlLnZlcnRleEJldGEoKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbdmVydGV4QWxwaGEueCwgdmVydGV4QWxwaGEueV1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRyLm5hbWUgPT09ICdpbl92ZXJ0ZXhHYW1tYScpIHtcclxuICAgICAgICAgICAgICAgIGF0dHIuZXh0cmFjdEF0dHJpYnV0ZVZhbHVlRnJvbSA9IChub2RlOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmVydGV4QWxwaGEgPSBub2RlLnZlcnRleEdhbW1hKClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3ZlcnRleEFscGhhLngsIHZlcnRleEFscGhhLnldXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVmcmVzaCBhbGwgbm9kZXMgcG9zaXRpb24gYWZ0ZXIgbGF6eSB1cGRhdGVcclxuICAgICAqIEBwYXJhbSBub2RlcyBhbGwgbm9kZSBkYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWZyZXNoUG9zaXRpb24obm9kZXM6IE5vZGVbXSkge1xyXG4gICAgICAgIC8vIHNldCBhcnJheVxyXG4gICAgICAgIG5vZGVzLmZvckVhY2goKG5vZGUsIGkpID0+IHtcclxuICAgICAgICAgICAgLy8gVE9ETzogY29uc2lkZXIgbm9kZSBhbmQgcmVuZGVyIG5vZGUgYXR0cmlidXRlIG1hcHBpbmdcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBub2RlLnBvc2l0aW9uKClcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmdldCgnaW5fcG9zaXRpb24nKS5hcnJheVsyICogaV0gPSBwb3NpdGlvbi54XHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlcy5nZXQoJ2luX3Bvc2l0aW9uJykuYXJyYXlbMiAqIGkgKyAxXSA9IHBvc2l0aW9uLnlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWF0dHIuaXNCdWlsZEluKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIGF0dHIuYnVmZmVyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5idWZmZXJTdWJEYXRhKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wuQVJSQVlfQlVGRkVSLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5hcnJheSxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSAqIG5vZGVzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogQGRlc2NyaXB0aW9uIHJlbmRlciBncmFwaCB1c2luZyB3ZWJnbFxyXG4gKiBAYXV0aG9yIFhpYW9kb25nIFpoYW8gPHpoYW94aWFvZG9uZ0B6anUuZWR1LmNuPlxyXG4gKi9cclxuXHJcbmltcG9ydCAqIGFzIG5vZGVTaGFkZXJzIGZyb20gJy4vc2hhZGVycy9ub2RlLXNoYWRlcidcclxuaW1wb3J0ICogYXMgbGlua1NoYWRlcnMgZnJvbSAnLi9zaGFkZXJzL2xpbmstc2hhZGVyJ1xyXG5pbXBvcnQgeyBSZW5kZXJOb2RlTWFuYWdlciB9IGZyb20gJy4vZWxlbWVudHMvcmVuZGVyLW5vZGUnXHJcbmltcG9ydCBOb2RlIGZyb20gJy4uL2VsZW1lbnRzL25vZGUnXHJcbmltcG9ydCBMaW5rIGZyb20gJy4uL2VsZW1lbnRzL2xpbmsnXHJcbmltcG9ydCB7IFJlbmRlckxpbmtNYW5hZ2VyIH0gZnJvbSAnLi9lbGVtZW50cy9yZW5kZXItbGluaydcclxuaW1wb3J0IHsgVHJhbnNmb3JtLCBQb3NpdGlvbiB9IGZyb20gJy4uL2ludGVyZmFjZXMnXHJcbmltcG9ydCB7IFJlbmRlcmVyQ29uZmlncyB9IGZyb20gJy4vaW50ZXJmYWNlcydcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyBkZWNvZGVSZW5kZXJJZCB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5jb25zdCBNT0RJRklFRF9FTEVNRU5UU19DT1VOVF9VUFBFUl9USFJFU0hPTEQgPSAxMDAgLy8gd2hlbiBtb2RpZmllZEVsZW1lbnRDb3VudCBpcyBsYXJnZXIgdGhhbiBpdCwgJF9zaG91bGRMYXp5VXBkYXRlIHdpbGwgYmUgdHJ1ZVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlbmRlcmVyIHtcclxuICAgIHB1YmxpYyBub2RlTWFuYWdlcjogUmVuZGVyTm9kZU1hbmFnZXJcclxuICAgIHB1YmxpYyBsaW5rTWFuYWdlcjogUmVuZGVyTGlua01hbmFnZXJcclxuXHJcbiAgICBwdWJsaWMgbW9kaWZpZWRFbGVtZW50c0NvdW50ID0gMCAvLyByZWNvcmQgbW9kaWZpZWQgbGluayBudW0gdG8gY29udHJvbCBsYXp5IHVwZGF0ZVxyXG4gICAgcHVibGljIHNob3VsZExhenlVcGRhdGUgPSBmYWxzZSAvLyBmbGFnIHRvIGNvbnRyb2wgbGF6eSB1cGRhdGVcclxuXHJcbiAgICBwcml2YXRlIGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0XHJcbiAgICBwcml2YXRlIGJhY2tncm91bmRDb2xvcjogQ29sb3JcclxuICAgIHByaXZhdGUgd2lkdGg6IG51bWJlclxyXG4gICAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlclxyXG4gICAgcHJpdmF0ZSBpZFRleHR1cmU6IFdlYkdMVGV4dHVyZVxyXG5cclxuICAgIHByaXZhdGUgZ2V0QWxsTm9kZXM6ICgpID0+IE5vZGVbXVxyXG4gICAgcHJpdmF0ZSBnZXRBbGxMaW5rczogKCkgPT4gTGlua1tdXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjcmVhdGUgcmVuZGVyZXIgb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0gY29uZmlncyB7Y2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGJhY2tncm91bmRDb2xvcjogQ29sb3IsIGRlZmF1bHRDb25maWdzOiBPYmplY3R9IGNvbmZpZ3MgcGFzc2VkIHRvIHJlbmRlcmVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb25maWdzOiBSZW5kZXJlckNvbmZpZ3MpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGNhbnZhcyxcclxuICAgICAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodCxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICBub2RlTGltaXQsXHJcbiAgICAgICAgICAgIGxpbmtMaW1pdCxcclxuICAgICAgICAgICAgZ2V0QWxsTm9kZXMsXHJcbiAgICAgICAgICAgIGdldEFsbExpbmtzXHJcbiAgICAgICAgfSA9IGNvbmZpZ3NcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5nbCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbDInKVxyXG4gICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldFYgcmVxdWlyZXMgV2ViR0wyIHN1cHBvcnRlZCBieSB5b3VyIGJyb3dzZXInKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3JcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGhcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxyXG5cclxuICAgICAgICB0aGlzLmdldEFsbE5vZGVzID0gZ2V0QWxsTm9kZXNcclxuICAgICAgICB0aGlzLmdldEFsbExpbmtzID0gZ2V0QWxsTGlua3NcclxuXHJcbiAgICAgICAgdGhpcy5pbml0SWRUZXh0dXJlKClcclxuXHJcbiAgICAgICAgY29uc3Qgbm9kZVNoYWRlclNlcmllbHMgPSB7XHJcbiAgICAgICAgICAgIHZlcnRleDogbm9kZVNoYWRlcnMudmVydGV4LmNvbm5lY3QoKSxcclxuICAgICAgICAgICAgZnJhZ21lbnQ6IG5vZGVTaGFkZXJzLmZyYWdtZW50LmNvbm5lY3QoKSxcclxuICAgICAgICAgICAgaWRWZXJ0ZXg6IG5vZGVTaGFkZXJzLmlkVmVydGV4LmNvbm5lY3QoKSxcclxuICAgICAgICAgICAgaWRGcmFnbWVudDogbm9kZVNoYWRlcnMuaWRGcmFnbWVudC5jb25uZWN0KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGxpbmtTaGFkZXJTZXJpZWxzID0ge1xyXG4gICAgICAgICAgICB2ZXJ0ZXg6IGxpbmtTaGFkZXJzLnZlcnRleC5jb25uZWN0KCksXHJcbiAgICAgICAgICAgIGZyYWdtZW50OiBsaW5rU2hhZGVycy5mcmFnbWVudC5jb25uZWN0KCksXHJcbiAgICAgICAgICAgIGlkVmVydGV4OiBsaW5rU2hhZGVycy5pZFZlcnRleC5jb25uZWN0KCksXHJcbiAgICAgICAgICAgIGlkRnJhZ21lbnQ6IGxpbmtTaGFkZXJzLmlkRnJhZ21lbnQuY29ubmVjdCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGVNYW5hZ2VyID0gbmV3IFJlbmRlck5vZGVNYW5hZ2VyKFxyXG4gICAgICAgICAgICB0aGlzLmdsLFxyXG4gICAgICAgICAgICB7IHdpZHRoLCBoZWlnaHQsIGxpbWl0OiBub2RlTGltaXQgfSxcclxuICAgICAgICAgICAgbm9kZVNoYWRlclNlcmllbHMsXHJcbiAgICAgICAgICAgIHRoaXMuaWRUZXh0dXJlXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMubGlua01hbmFnZXIgPSBuZXcgUmVuZGVyTGlua01hbmFnZXIoXHJcbiAgICAgICAgICAgIHRoaXMuZ2wsXHJcbiAgICAgICAgICAgIHsgd2lkdGgsIGhlaWdodCwgbGltaXQ6IGxpbmtMaW1pdCB9LFxyXG4gICAgICAgICAgICBsaW5rU2hhZGVyU2VyaWVscyxcclxuICAgICAgICAgICAgdGhpcy5pZFRleHR1cmVcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBkaXNwb3NlIHJlbmRlcmVyIHN0dWZmc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICAvLyByZWZlcjogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIzNjA2NTgxXHJcbiAgICAgICAgY29uc3QgbnVtVGV4dHVyZVVuaXRzID0gdGhpcy5nbC5nZXRQYXJhbWV0ZXIodGhpcy5nbC5NQVhfVEVYVFVSRV9JTUFHRV9VTklUUylcclxuICAgICAgICBmb3IgKGxldCB1bml0ID0gMDsgdW5pdCA8IG51bVRleHR1cmVVbml0czsgKyt1bml0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuYWN0aXZlVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkUwICsgdW5pdClcclxuICAgICAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfMkQsIG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFX0NVQkVfTUFQLCBudWxsKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIG51bGwpXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG51bGwpXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kUmVuZGVyYnVmZmVyKHRoaXMuZ2wuUkVOREVSQlVGRkVSLCBudWxsKVxyXG4gICAgICAgIHRoaXMuZ2wuYmluZEZyYW1lYnVmZmVyKHRoaXMuZ2wuRlJBTUVCVUZGRVIsIG51bGwpXHJcbiAgICAgICAgdGhpcy5nbC5nZXRFeHRlbnNpb24oJ1dFQkdMX2xvc2VfY29udGV4dCcpLmxvc2VDb250ZXh0KClcclxuICAgICAgICAvLyBUT0RPOiBtYXliZSBuZWVkIGZyZWUgbW9yZSBidWZmZXJzIG9yIHNvbWV0aGluZyBlbHNlXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQgY2xlYXJDb2xvciBmb3IgcmVuZGVyZXJcclxuICAgICAqIEBwYXJhbSBjb2xvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0QmFja2dyb3VuZENvbG9yKGNvbG9yOiBDb2xvcikge1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gY29sb3JcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNsZWFyIGRhdGEgaW4gcmVuZGVyZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNsZWFyRGF0YSgpIHtcclxuICAgICAgICB0aGlzLm5vZGVNYW5hZ2VyLmNsZWFyRGF0YSgpXHJcbiAgICAgICAgdGhpcy5saW5rTWFuYWdlci5jbGVhckRhdGEoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIG5vZGVzIHRvIG5vZGUgbWFuYWdlclxyXG4gICAgICogQHBhcmFtIG5vZGVzIG5vZGUgZGF0YSBpbiBOZXRWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGROb2Rlcyhub2RlczogTm9kZVtdKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlTWFuYWdlci5hZGREYXRhKG5vZGVzKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIGxpbmtzIHRvIGxpbmsgbWFuYWdlclxyXG4gICAgICogQHBhcmFtIGxpbmtzIGxpbmsgZGF0YSBpbiBOZXRWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRMaW5rcyhsaW5rczogTGlua1tdKSB7XHJcbiAgICAgICAgdGhpcy5saW5rTWFuYWdlci5hZGREYXRhKGxpbmtzKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRUcmFuc2Zvcm0odHJhbnNmb3JtOiBUcmFuc2Zvcm0pIHtcclxuICAgICAgICB0aGlzLm5vZGVNYW5hZ2VyLnNldFRyYW5zZm9ybSh0cmFuc2Zvcm0pXHJcbiAgICAgICAgdGhpcy5saW5rTWFuYWdlci5zZXRUcmFuc2Zvcm0odHJhbnNmb3JtKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZHJhdyBhbGwgZWxlbWVudHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRyYXcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkTGF6eVVwZGF0ZSkge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBub3Qgb25seSBwb3NpdGlvbiBuZWVkcyB0byBiZSByZWZyZXNoZWQsIGJ1dCBhbHNvIG90aGVyIHN0eWxlc1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVNYW5hZ2VyLnJlZnJlc2hQb3NpdGlvbih0aGlzLmdldEFsbE5vZGVzKCkpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmxpbmtNYW5hZ2VyLnJlZnJlc2hQb3NpdGlvbih0aGlzLmdldEFsbExpbmtzKCkpXHJcbiAgICAgICAgICAgIHRoaXMuc2hvdWxkTGF6eVVwZGF0ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMubW9kaWZpZWRFbGVtZW50c0NvdW50ID0gMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5GUkFNRUJVRkZFUiwgdGhpcy5pZFRleHR1cmUpXHJcbiAgICAgICAgdGhpcy5nbC5jbGVhckNvbG9yKDEsIDEsIDEsIDEpXHJcbiAgICAgICAgdGhpcy5nbC5jbGVhcih0aGlzLmdsLkNPTE9SX0JVRkZFUl9CSVQpXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5GUkFNRUJVRkZFUiwgbnVsbClcclxuXHJcbiAgICAgICAgdGhpcy5nbC5jbGVhckNvbG9yKFxyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvci5yLFxyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvci5nLFxyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvci5iLFxyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvci5hXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMuZ2wuY2xlYXIodGhpcy5nbC5DT0xPUl9CVUZGRVJfQklUKVxyXG4gICAgICAgIHRoaXMubGlua01hbmFnZXIuZHJhdygpXHJcbiAgICAgICAgdGhpcy5ub2RlTWFuYWdlci5kcmF3KClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldCBlbGVtZW50J3MgaWQgYXQgKHgsIHkpIG9mIGNhbnZhcyBpZiBleGlzdHNcclxuICAgICAqIEBwYXJhbSB4IHggcG9zXHJcbiAgICAgKiBAcGFyYW0geSB5IHBvc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0SWRCeVBvc2l0aW9uKHBvc2l0aW9uOiBQb3NpdGlvbik6IHN0cmluZyB8IFtzdHJpbmcsIHN0cmluZ10ge1xyXG4gICAgICAgIGNvbnN0IHJlbmRlcklkID0gdGhpcy5yZWFkSWRUZXh0dXJlKHBvc2l0aW9uKVxyXG4gICAgICAgIGlmIChyZW5kZXJJZCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChyZW5kZXJJZCAlIDIgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIE5PVEU6IG5vZGUgaGFzIGV2ZW4gcmVuZGVyIGlkLCBsaW5rIGhhcyBvZGQgcmVuZGVyIGlkXHJcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5ub2RlTWFuYWdlci5nZXRFbGVtZW50QnlSZW5kZXJJZChyZW5kZXJJZCkgYXMgTm9kZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuaWQoKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGluayA9IHRoaXMubGlua01hbmFnZXIuZ2V0RWxlbWVudEJ5UmVuZGVySWQocmVuZGVySWQpIGFzIExpbmtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZVRhcmdldCA9IGxpbmsuc291cmNlVGFyZ2V0KClcclxuICAgICAgICAgICAgICAgIHJldHVybiBbc291cmNlVGFyZ2V0LnNvdXJjZS5pZCgpLCBzb3VyY2VUYXJnZXQudGFyZ2V0LmlkKCldXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZWFkIHBpeGVsIHZhbHVlIGF0ICh4LCB5KSBvZiB0ZXh0dXJlXHJcbiAgICAgKiBAcGFyYW0geCB4IHBvc1xyXG4gICAgICogQHBhcmFtIHkgeSBwb3NcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRJZFRleHR1cmUocG9zaXRpb246IFBvc2l0aW9uKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCByYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcclxuICAgICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLlJFQURfRlJBTUVCVUZGRVIsIHRoaXMuaWRUZXh0dXJlKVxyXG4gICAgICAgIGNvbnN0IHJlYWRQaXhlbEJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KFsyNTUsIDI1NSwgMjU1LCAyNTVdKSAvLyAtMVxyXG4gICAgICAgIHRoaXMuZ2wucmVhZFBpeGVscyhcclxuICAgICAgICAgICAgLy8gIVdhcm5pbmc6IHggYW5kIHkgYXJlIG9wdGlvbmFsIGluIFBvc2l0aW9uLCBuZWVkIHRvIGNoZWNrIHRoZW1cclxuICAgICAgICAgICAgcG9zaXRpb24ueCAqIHJhdGlvLFxyXG4gICAgICAgICAgICBwb3NpdGlvbi55ICogcmF0aW8sXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgIHRoaXMuZ2wuUkdCQSxcclxuICAgICAgICAgICAgdGhpcy5nbC5VTlNJR05FRF9CWVRFLFxyXG4gICAgICAgICAgICByZWFkUGl4ZWxCdWZmZXJcclxuICAgICAgICApXHJcbiAgICAgICAgY29uc3Qgb2JqZWN0SUQgPSBkZWNvZGVSZW5kZXJJZChyZWFkUGl4ZWxCdWZmZXIpXHJcblxyXG4gICAgICAgIHJldHVybiBvYmplY3RJRFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaW5jcmVhc2UgbW9kaWZpZWQgZWxlbWVudHMgY291bnRcclxuICAgICAqIFdoZW4gaXQgaXMgbGFyZ2VyIHRoYW4gYSB0aHJlc2hvbGQsIHRoZSBsYXp5IHVwZGF0ZSBtb2RlIHdpbGwgYmUgdHVybmVkIG9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5jcmVhc2VNb2RpZmllZEVsZW1lbnRzQ291bnRCeShuOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm1vZGlmaWVkRWxlbWVudHNDb3VudCArPSBuXHJcbiAgICAgICAgaWYgKHRoaXMubW9kaWZpZWRFbGVtZW50c0NvdW50ID4gTU9ESUZJRURfRUxFTUVOVFNfQ09VTlRfVVBQRVJfVEhSRVNIT0xEKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvdWxkTGF6eVVwZGF0ZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpbml0IFdlYkdMIHRleHR1cmUgZm9yIHJlY29yZGluZyBwb3NpdGlvbiBvZiBlbGVtZW50c1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGluaXRJZFRleHR1cmUoKSB7XHJcbiAgICAgICAgY29uc3QgZ2wgPSB0aGlzLmdsXHJcbiAgICAgICAgY29uc3QgcGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcclxuICAgICAgICBjb25zdCBzY3JlZW5XaWR0aCA9IHRoaXMud2lkdGggKiBwaXhlbFJhdGlvXHJcbiAgICAgICAgY29uc3Qgc2NyZWVuSGVpZ2h0ID0gdGhpcy5oZWlnaHQgKiBwaXhlbFJhdGlvXHJcblxyXG4gICAgICAgIGNvbnN0IGZibyA9IGdsLmNyZWF0ZUZyYW1lYnVmZmVyKClcclxuICAgICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIGZibylcclxuXHJcbiAgICAgICAgY29uc3QgaWRUZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpXHJcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgaWRUZXh0dXJlKVxyXG4gICAgICAgIGdsLnRleEltYWdlMkQoXHJcbiAgICAgICAgICAgIGdsLlRFWFRVUkVfMkQsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIGdsLlJHQkEsXHJcbiAgICAgICAgICAgIHNjcmVlbldpZHRoLFxyXG4gICAgICAgICAgICBzY3JlZW5IZWlnaHQsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIGdsLlJHQkEsXHJcbiAgICAgICAgICAgIGdsLlVOU0lHTkVEX0JZVEUsXHJcbiAgICAgICAgICAgIG51bGxcclxuICAgICAgICApXHJcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUilcclxuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTElORUFSKVxyXG4gICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpXHJcbiAgICAgICAgZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQoZ2wuRlJBTUVCVUZGRVIsIGdsLkNPTE9SX0FUVEFDSE1FTlQwLCBnbC5URVhUVVJFXzJELCBpZFRleHR1cmUsIDApXHJcblxyXG4gICAgICAgIC8vIFRPRE86IG5lZWQgc2ltcGxpZnlcclxuICAgICAgICBnbC5kcmF3QnVmZmVycyhbMF0ubWFwKCh2KSA9PiB2ICsgZ2wuQ09MT1JfQVRUQUNITUVOVDApKVxyXG5cclxuICAgICAgICBjb25zdCByYm8gPSBnbC5jcmVhdGVSZW5kZXJidWZmZXIoKVxyXG4gICAgICAgIGdsLmJpbmRSZW5kZXJidWZmZXIoZ2wuUkVOREVSQlVGRkVSLCByYm8pXHJcbiAgICAgICAgZ2wuY2xlYXJDb2xvcigxLCAxLCAxLCAxKVxyXG4gICAgICAgIGdsLnJlbmRlcmJ1ZmZlclN0b3JhZ2UoZ2wuUkVOREVSQlVGRkVSLCBnbC5ERVBUSDI0X1NURU5DSUw4LCBzY3JlZW5XaWR0aCwgc2NyZWVuSGVpZ2h0KVxyXG4gICAgICAgIGdsLmJpbmRSZW5kZXJidWZmZXIoZ2wuUkVOREVSQlVGRkVSLCBudWxsKVxyXG4gICAgICAgIGdsLmZyYW1lYnVmZmVyUmVuZGVyYnVmZmVyKFxyXG4gICAgICAgICAgICBnbC5GUkFNRUJVRkZFUixcclxuICAgICAgICAgICAgZ2wuREVQVEhfU1RFTkNJTF9BVFRBQ0hNRU5ULFxyXG4gICAgICAgICAgICBnbC5SRU5ERVJCVUZGRVIsXHJcbiAgICAgICAgICAgIHJib1xyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgaWYgKGdsLmNoZWNrRnJhbWVidWZmZXJTdGF0dXMoZ2wuRlJBTUVCVUZGRVIpICE9PSBnbC5GUkFNRUJVRkZFUl9DT01QTEVURSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZyYW1lYnVmZmVyIGdlbmVyYXRlIGZhaWxlZCcpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpXHJcblxyXG4gICAgICAgIHRoaXMuaWRUZXh0dXJlID0gZmJvXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vdXRpbHMnXHJcblxyXG5jb25zdCB2ZXJ0ZXggPSBuZXcgU2hhZGVyKClcclxudmVydGV4LmlucHV0cyA9IHtcclxuICAgIGluVmVydGV4UG9zOiAndmVjMycsXHJcbiAgICBpbl9zaGFwZTogJ2Zsb2F0JyxcclxuICAgIGluX3NvdXJjZTogJ3ZlYzInLFxyXG4gICAgaW5fdGFyZ2V0OiAndmVjMicsXHJcbiAgICBpbl9zdHJva2VXaWR0aDogJ2Zsb2F0JyxcclxuICAgIGluX3N0cm9rZUNvbG9yOiAndmVjNCdcclxufVxyXG52ZXJ0ZXgub3V0cHV0cyA9IHtcclxuICAgIHNoYXBlOiAnZmxvYXQnLFxyXG4gICAgc3Ryb2tlQ29sb3I6ICd2ZWM0J1xyXG59XHJcbnZlcnRleC51bmlmb3JtcyA9IHtcclxuICAgIHByb2plY3Rpb246ICdtYXQzJyxcclxuICAgIHNjYWxlOiAndmVjMicsXHJcbiAgICB0cmFuc2xhdGU6ICd2ZWMyJ1xyXG59XHJcbnZlcnRleC5tYWluID0gW1xyXG4gICAgYHZvaWQgbWFpbih2b2lkKSB7YCxcclxuICAgIGAgICAgc3Ryb2tlQ29sb3IgPSBpbl9zdHJva2VDb2xvcjtgLFxyXG4gICAgYCAgICBzaGFwZSA9IGluX3NoYXBlO2AsXHJcbiAgICBgICAgIHZlYzIgc291cmNlID0gaW5fc291cmNlICogc2NhbGUgKyB0cmFuc2xhdGU7YCxcclxuICAgIGAgICAgdmVjMiB0YXJnZXQgPSBpbl90YXJnZXQgKiBzY2FsZSArIHRyYW5zbGF0ZTtgLFxyXG4gICAgYCAgICB2ZWMyIGRlbHRhID0gc291cmNlIC0gdGFyZ2V0O2AsXHJcbiAgICBgICAgIHZlYzIgY2VudGVyID0gMC41ICogKHNvdXJjZSArIHRhcmdldCk7YCxcclxuICAgIGAgICAgZmxvYXQgbGVuID0gbGVuZ3RoKGRlbHRhKTtgLFxyXG4gICAgYCAgICBmbG9hdCBwaGkgPSBhdGFuKGRlbHRhLnkgLyBkZWx0YS54KTtgLFxyXG4gICAgYGAsXHJcbiAgICBgICAgIG1hdDMgbGluZV9zY2FsZSA9IG1hdDMoYCxcclxuICAgIGAgICAgICAgIGxlbiwgMCwgMCxgLFxyXG4gICAgYCAgICAgICAgMCwgaW5fc3Ryb2tlV2lkdGgsIDAsYCxcclxuICAgIGAgICAgICAgIDAsIDAsIDFgLFxyXG4gICAgYCAgICApO2AsXHJcbiAgICBgICAgIG1hdDMgbGluZV9yb3RhdGUgPSBtYXQzKGAsXHJcbiAgICBgICAgICAgICBjb3MocGhpKSwgc2luKHBoaSksIDAsYCxcclxuICAgIGAgICAgICAgIC1zaW4ocGhpKSwgY29zKHBoaSksIDAsYCxcclxuICAgIGAgICAgICAgIDAsIDAsIDFgLFxyXG4gICAgYCAgICApO2AsXHJcbiAgICBgICAgIG1hdDMgbGluZV90cmFuc2xhdGUgPSBtYXQzKGAsXHJcbiAgICBgICAgICAgICAxLCAwLCAwLGAsXHJcbiAgICBgICAgICAgICAwLCAxLCAwLGAsXHJcbiAgICBgICAgICAgICBjZW50ZXIueCwgY2VudGVyLnksIDFgLFxyXG4gICAgYCAgICApO2AsXHJcbiAgICBgICAgIGAsXHJcbiAgICBgICAgIG1hdDMgdHJhbnNmb3JtID0gbGluZV90cmFuc2xhdGUgKiBsaW5lX3JvdGF0ZSAqIGxpbmVfc2NhbGU7YCxcclxuICAgIGBgLFxyXG4gICAgYCAgICBnbF9Qb3NpdGlvbiA9IHZlYzQocHJvamVjdGlvbiAqIHRyYW5zZm9ybSAqIGluVmVydGV4UG9zLCAxLik7YCxcclxuICAgIGB9YFxyXG5dXHJcblxyXG5jb25zdCBpZFZlcnRleCA9IHZlcnRleC5jb3B5KClcclxuaWRWZXJ0ZXguaW5wdXRzWydpbl9pZCddID0gJ3ZlYzQnXHJcbmlkVmVydGV4Lm91dHB1dHNbJ2lkJ10gPSAndmVjNCdcclxuaWRWZXJ0ZXgubWFpbi5zcGxpY2UoMSwgMCwgYGlkID0gaW5faWQ7YClcclxuXHJcbmNvbnN0IGZyYWdtZW50ID0gbmV3IFNoYWRlcigpXHJcbmZyYWdtZW50LmlucHV0cyA9IHsgLi4udmVydGV4Lm91dHB1dHMgfVxyXG5mcmFnbWVudC5vdXRwdXRzID0ge1xyXG4gICAgZnJhZ21lbnRDb2xvcjogJ3ZlYzQnXHJcbn1cclxuZnJhZ21lbnQubWFpbiA9IFtcclxuICAgIGB2b2lkIG1haW4odm9pZCkge2AsXHJcbiAgICBgICAgIGZyYWdtZW50Q29sb3IgPSB2ZWM0KHN0cm9rZUNvbG9yLnJnYiAqIHN0cm9rZUNvbG9yLmEsIHN0cm9rZUNvbG9yLmEpO2AsXHJcbiAgICBgfWBcclxuXVxyXG5cclxuY29uc3QgaWRGcmFnbWVudCA9IGZyYWdtZW50LmNvcHkoKVxyXG5pZEZyYWdtZW50LmlucHV0c1snaWQnXSA9ICd2ZWM0J1xyXG5pZEZyYWdtZW50Lm1haW5bMV0gPSBgZnJhZ21lbnRDb2xvciA9IGlkO2BcclxuXHJcbmV4cG9ydCB7IHZlcnRleCwgaWRWZXJ0ZXgsIGZyYWdtZW50LCBpZEZyYWdtZW50IH1cclxuIiwiaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vdXRpbHMnXHJcblxyXG5jb25zdCB2ZXJ0ZXggPSBuZXcgU2hhZGVyKClcclxudmVydGV4LmlucHV0cyA9IHtcclxuICAgIGluVmVydGV4UG9zOiAndmVjMycsXHJcbiAgICBpbl9zaGFwZTogJ2Zsb2F0JyxcclxuICAgIGluX3Bvc2l0aW9uOiAndmVjMicsXHJcbiAgICBpbl9vZmZzZXQ6ICd2ZWMyJyxcclxuICAgIGluX3dpZHRoOiAnZmxvYXQnLFxyXG4gICAgaW5faGVpZ2h0OiAnZmxvYXQnLFxyXG4gICAgaW5fcm90YXRlOiAnZmxvYXQnLFxyXG4gICAgaW5fcjogJ2Zsb2F0JyxcclxuICAgIGluX3ZlcnRleEFscGhhOiAndmVjMicsXHJcbiAgICBpbl92ZXJ0ZXhCZXRhOiAndmVjMicsXHJcbiAgICBpbl92ZXJ0ZXhHYW1tYTogJ3ZlYzInLFxyXG4gICAgaW5fZmlsbDogJ3ZlYzQnLFxyXG4gICAgaW5fc3Ryb2tlV2lkdGg6ICdmbG9hdCcsXHJcbiAgICBpbl9zdHJva2VDb2xvcjogJ3ZlYzQnXHJcbn1cclxudmVydGV4Lm91dHB1dHMgPSB7XHJcbiAgICBwb3NpdGlvbjogJ3ZlYzInLFxyXG4gICAgc2hhcGU6ICdmbG9hdCcsXHJcbiAgICB3aWR0aDogJ2Zsb2F0JywgLy8gcmVjdFxyXG4gICAgaGVpZ2h0OiAnZmxvYXQnLCAvLyByZWN0XHJcbiAgICByb3RhdGU6ICdmbG9hdCcsIC8vIHJlY3RcclxuICAgIHI6ICdmbG9hdCcsIC8vIGNpcmNsZVxyXG4gICAgdmVydGV4QWxwaGE6ICd2ZWMyJywgLy8gdHJpYW5nbGVcclxuICAgIHZlcnRleEJldGE6ICd2ZWMyJywgLy8gdHJpYW5nbGVcclxuICAgIHZlcnRleEdhbW1hOiAndmVjMicsIC8vIHRyaWFuZ2xlXHJcbiAgICBmaWxsOiAndmVjNCcsXHJcbiAgICBzdHJva2VXaWR0aDogJ2Zsb2F0JyxcclxuICAgIHN0cm9rZUNvbG9yOiAndmVjNCdcclxufVxyXG52ZXJ0ZXgudW5pZm9ybXMgPSB7XHJcbiAgICBwcm9qZWN0aW9uOiAnbWF0MycsXHJcbiAgICBzY2FsZTogJ3ZlYzInLFxyXG4gICAgdHJhbnNsYXRlOiAndmVjMicsXHJcbiAgICB2aWV3cG9ydDogJ3ZlYzInLFxyXG4gICAgcGl4ZWxSYXRpbzogJ2Zsb2F0J1xyXG59XHJcbnZlcnRleC5tZXRob2RzID0gW1xyXG4gICAgW1xyXG4gICAgICAgIGB2ZWMyIGNhbGN1bGF0ZV9pbm5lcl9wb2ludCAodmVjMiBwMSwgdmVjMiBwMiwgdmVjMiBwMykge2AsXHJcbiAgICAgICAgYCAgIGZsb2F0IGlubmVyX3AxID0gc3FydChkb3QocDEsIHAxKSk7YCxcclxuICAgICAgICBgICAgZmxvYXQgaW5uZXJfcDIgPSBzcXJ0KGRvdChwMiwgcDIpKTtgLFxyXG4gICAgICAgIGAgICBmbG9hdCBpbm5lcl9wMyA9IHNxcnQoZG90KHAzLCBwMykpO2AsXHJcbiAgICAgICAgYCAgIHZlYzIgaW5uZXIgPSAocDEgKiBpbm5lcl9wMSArIHAyICogaW5uZXJfcDIgKyBwMyAqIGlubmVyX3AzKSAvIChpbm5lcl9wMSArIGlubmVyX3AyICsgaW5uZXJfcDMpO2AsXHJcbiAgICAgICAgYCAgIHJldHVybiBpbm5lcjtgLFxyXG4gICAgICAgIGB9YFxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgICBgZmxvYXQgY2FsY3VsYXRlX3N0cm9rZV9zY2FsZSAodmVjMiBwMSwgdmVjMiBwMiwgdmVjMiBwMykge2AsXHJcbiAgICAgICAgYCAgIHZlYzIgaW5uZXIgPSBjYWxjdWxhdGVfaW5uZXJfcG9pbnQocDEsIHAyLCBwMyk7YCxcclxuICAgICAgICBgICAgZmxvYXQgYSA9IGRpc3RhbmNlKHAxLCBpbm5lcik7YCxcclxuICAgICAgICBgICAgZmxvYXQgYiA9IGRpc3RhbmNlKHAyLCBpbm5lcik7YCxcclxuICAgICAgICBgICAgZmxvYXQgYyA9IGRpc3RhbmNlKHAxLCBwMik7YCxcclxuICAgICAgICBgICAgZmxvYXQgY29zX2FscGhhID0gKHBvdyhiLCAyLjApICsgcG93KGMsIDIuMCkgLSBwb3coYSwgMi4wKSkgLyAoMi4wICogYiAqIGMpO2AsXHJcbiAgICAgICAgYCAgIGZsb2F0IHNpbl9hbHBoYSA9IHNxcnQoMS4wIC0gcG93KGNvc19hbHBoYSwgMi4wKSk7YCxcclxuICAgICAgICBgICAgZmxvYXQgbm9ybWFsX2xlbmd0aCA9IHNpbl9hbHBoYSAqIGE7YCxcclxuICAgICAgICBgICAgZmxvYXQgc3Ryb2tlX3NjYWxlID0gMS4wICsgc3Ryb2tlV2lkdGggLyAyLjAgKiBwaXhlbFJhdGlvIC8gbm9ybWFsX2xlbmd0aDtgLFxyXG4gICAgICAgIGAgICByZXR1cm4gc3Ryb2tlX3NjYWxlO2AsXHJcbiAgICAgICAgYH1gXHJcbiAgICBdXHJcbl1cclxudmVydGV4Lm1haW4gPSBbXHJcbiAgICBgdm9pZCBtYWluKHZvaWQpIHtgLFxyXG4gICAgYCAgIHIgPSBpbl9yO2AsXHJcbiAgICBgICAgd2lkdGggPSBpbl93aWR0aDtgLFxyXG4gICAgYCAgIGhlaWdodCA9IGluX2hlaWdodDtgLFxyXG4gICAgYCAgIHNoYXBlID0gaW5fc2hhcGU7YCxcclxuICAgIGAgICBmaWxsID0gaW5fZmlsbDtgLFxyXG4gICAgYCAgIHN0cm9rZUNvbG9yID0gaW5fc3Ryb2tlQ29sb3I7YCxcclxuICAgIGAgICBzdHJva2VXaWR0aCA9IGluX3N0cm9rZVdpZHRoO2AsXHJcbiAgICBgICAgcm90YXRlID0gaW5fcm90YXRlO2AsXHJcbiAgICBgICAgcG9zaXRpb24gPSBzY2FsZSAqIChpbl9wb3NpdGlvbiArIGluX29mZnNldCkgKyB0cmFuc2xhdGU7YCxcclxuICAgIGAgICB2ZXJ0ZXhBbHBoYSA9IGluX3ZlcnRleEFscGhhICogcGl4ZWxSYXRpbztgLFxyXG4gICAgYCAgIHZlcnRleEJldGEgPSBpbl92ZXJ0ZXhCZXRhICogcGl4ZWxSYXRpbztgLFxyXG4gICAgYCAgIHZlcnRleEdhbW1hID0gaW5fdmVydGV4R2FtbWEgKiBwaXhlbFJhdGlvO2AsXHJcbiAgICBgICAgbWF0MyBzY2FsZV9tYXQgPSBtYXQzKGAsXHJcbiAgICBgICAgICAgIDEsIDAsIDAsYCxcclxuICAgIGAgICAgICAgMCwgMSwgMCxgLFxyXG4gICAgYCAgICAgICAwLCAwLCAxYCxcclxuICAgIGAgICApO2AsXHJcbiAgICBgICAgbWF0MyByb3RhdGVfbWF0ID0gbWF0MyhgLFxyXG4gICAgYCAgICAgICAxLCAwLCAwLGAsXHJcbiAgICBgICAgICAgIDAsIDEsIDAsYCxcclxuICAgIGAgICAgICAgMCwgMCwgMWAsXHJcbiAgICBgICAgKTtgLFxyXG4gICAgYCAgIG1hdDMgdHJhbnNsYXRlX21hdCA9IG1hdDMoYCxcclxuICAgIGAgICAgICAgMSwgMCwgMCxgLFxyXG4gICAgYCAgICAgICAwLCAxLCAwLGAsXHJcbiAgICBgICAgICAgIHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIDFgLFxyXG4gICAgYCAgICk7YCxcclxuICAgIGAgICBpZiAoc2hhcGUgPT0gMC4wKSB7YCwgLy8gY2lyY2xlIHNoYXBlXHJcbiAgICBgICAgICAgIGZsb2F0IHNpemUgPSAociArIHN0cm9rZVdpZHRoIC8gMi4pICogMi4gKiAxLjU7YCwgLy8gTk9URTogbXVsdGlwbHkgMi4gdG8gbWFrZSByYWRpdXMgdG8gZGlhbWV0ZXI7IG11bHRpcGx5IDEuNSB0byBwcmV2ZW50IGJvcmRlciBmYWN0b3JcclxuICAgIGAgICAgICAgc2NhbGVfbWF0ID0gbWF0MyhgLFxyXG4gICAgYCAgICAgICAgICAgc2l6ZSwgMCwgMCxgLFxyXG4gICAgYCAgICAgICAgICAgMCwgc2l6ZSwgMCxgLFxyXG4gICAgYCAgICAgICAgICAgMCwgMCwgMWAsXHJcbiAgICBgICAgICAgICAgICApO2AsXHJcbiAgICBgICAgfSBlbHNlIGlmIChzaGFwZSA9PSAxLjApIHtgLCAvLyByZWN0IHNoYXBlXHJcbiAgICBgICAgICAgIHNjYWxlX21hdCA9IG1hdDMoYCxcclxuICAgIGAgICAgICAgICAgIHdpZHRoICsgc3Ryb2tlV2lkdGgsIDAsIDAsYCxcclxuICAgIGAgICAgICAgICAgIDAsIGhlaWdodCArIHN0cm9rZVdpZHRoLCAwLGAsXHJcbiAgICBgICAgICAgICAgICAwLCAwLCAxYCxcclxuICAgIGAgICAgICAgKTtgLFxyXG4gICAgYCAgICAgICByb3RhdGVfbWF0ID0gbWF0MyhgLFxyXG4gICAgYCAgICAgICAgICAgY29zKHJvdGF0ZSksIHNpbihyb3RhdGUpLCAwLGAsXHJcbiAgICBgICAgICAgICAgICAtc2luKHJvdGF0ZSksIGNvcyhyb3RhdGUpLCAwLGAsXHJcbiAgICBgICAgICAgICAgICAwLCAwLCAxYCxcclxuICAgIGAgICAgICAgKTtgLFxyXG4gICAgYCAgIH0gZWxzZSBpZiAoc2hhcGUgPT0gMi4wKSB7YCwgLy8gdHJpYW5nbGUgc2hhcGVcclxuICAgIC8vIGNhbGN1bGF0ZSB0aGUgbm9ybWFsIG9mIHRoZSBlZGdlOiBhbHBoYSA9PiBiZXRhXHJcbiAgICBgICAgICAgIHZlYzIgaW5uZXIgPSBjYWxjdWxhdGVfaW5uZXJfcG9pbnQodmVydGV4QWxwaGEsIHZlcnRleEJldGEsIHZlcnRleEdhbW1hKTtgLFxyXG4gICAgYCAgICAgICBmbG9hdCBzdHJva2Vfc2NhbGUgPSBjYWxjdWxhdGVfc3Ryb2tlX3NjYWxlKHZlcnRleEFscGhhLCB2ZXJ0ZXhCZXRhLCB2ZXJ0ZXhHYW1tYSk7YCxcclxuICAgIGAgICAgICAgdmVjMiBvdXRlcl92ZXJ0ZXhBbHBoYSA9ICh2ZXJ0ZXhBbHBoYSAtIGlubmVyKSAqIHN0cm9rZV9zY2FsZSArIGlubmVyO2AsIC8vIGNvbnNpZGVyIHN0cm9rZSBpblxyXG4gICAgYCAgICAgICB2ZWMyIG91dGVyX3ZlcnRleEJldGEgPSAodmVydGV4QmV0YSAtIGlubmVyKSAqIHN0cm9rZV9zY2FsZSArIGlubmVyO2AsIC8vIGNvbnNpZGVyIHN0cm9rZSBpblxyXG4gICAgYCAgICAgICB2ZWMyIG91dGVyX3ZlcnRleEdhbW1hID0gKHZlcnRleEdhbW1hIC0gaW5uZXIpICogc3Ryb2tlX3NjYWxlICsgaW5uZXI7YCwgLy8gY29uc2lkZXIgc3Ryb2tlIGluXHJcbiAgICAvLyB0byBlbnN1cmUgdGhlIGZyYWdtZW50IGN1dHRpbmcgaXMgd2l0aGluIHRoZSByZWN0YW5nbGVcclxuICAgIGAgICAgICAgd2lkdGggPSAxLjUgKiAobWF4KG1heChvdXRlcl92ZXJ0ZXhBbHBoYS54LCBvdXRlcl92ZXJ0ZXhCZXRhLngpLCBvdXRlcl92ZXJ0ZXhHYW1tYS54KSAtIG1pbihtaW4ob3V0ZXJfdmVydGV4QWxwaGEueCwgb3V0ZXJfdmVydGV4QmV0YS54KSwgb3V0ZXJfdmVydGV4R2FtbWEueCkpO2AsXHJcbiAgICBgICAgICAgIGhlaWdodCA9IDEuNSAqIChtYXgobWF4KG91dGVyX3ZlcnRleEFscGhhLnksIG91dGVyX3ZlcnRleEJldGEueSksIG91dGVyX3ZlcnRleEdhbW1hLnkpLSBtaW4obWluKG91dGVyX3ZlcnRleEFscGhhLnksIG91dGVyX3ZlcnRleEJldGEueSksIG91dGVyX3ZlcnRleEdhbW1hLnkpKTtgLFxyXG4gICAgYCAgICAgICBzY2FsZV9tYXQgPSBtYXQzKGAsXHJcbiAgICBgICAgICAgICAgICB3aWR0aCwgMCwgMCxgLFxyXG4gICAgYCAgICAgICAgICAgMCwgaGVpZ2h0LCAwLGAsXHJcbiAgICBgICAgICAgICAgICAwLCAwLCAxYCxcclxuICAgIGAgICAgICAgKTtgLFxyXG4gICAgYCAgIH1gLFxyXG4gICAgYCAgIG1hdDMgdHJhbnNmb3JtID0gdHJhbnNsYXRlX21hdCAqIHJvdGF0ZV9tYXQgKiBzY2FsZV9tYXQ7YCxcclxuICAgIGAgICBnbF9Qb3NpdGlvbiA9IHZlYzQocHJvamVjdGlvbiAqIHRyYW5zZm9ybSAqIGluVmVydGV4UG9zLCAxLik7YCxcclxuICAgIGB9YFxyXG5dXHJcblxyXG5jb25zdCBpZFZlcnRleCA9IHZlcnRleC5jb3B5KClcclxuaWRWZXJ0ZXguaW5wdXRzWydpbl9pZCddID0gJ3ZlYzQnXHJcbmlkVmVydGV4Lm91dHB1dHNbJ2lkJ10gPSAndmVjNCdcclxuaWRWZXJ0ZXgubWFpbi5zcGxpY2UoMSwgMCwgYGlkID0gaW5faWQ7YClcclxuXHJcbmNvbnN0IGZyYWdtZW50ID0gbmV3IFNoYWRlcigpXHJcbmZyYWdtZW50LmlucHV0cyA9IHsgLi4udmVydGV4Lm91dHB1dHMgfVxyXG5mcmFnbWVudC5vdXRwdXRzID0ge1xyXG4gICAgZnJhZ21lbnRDb2xvcjogJ3ZlYzQnXHJcbn1cclxuZnJhZ21lbnQudW5pZm9ybXMgPSB7XHJcbiAgICB2aWV3cG9ydDogJ3ZlYzInLFxyXG4gICAgcGl4ZWxSYXRpbzogJ2Zsb2F0J1xyXG59XHJcbmZyYWdtZW50Lm1ldGhvZHMgPSBbXHJcbiAgICBbXHJcbiAgICAgICAgYHZlYzIgY2FsY3VsYXRlX2lubmVyX3BvaW50ICh2ZWMyIHAxLCB2ZWMyIHAyLCB2ZWMyIHAzKSB7YCxcclxuICAgICAgICBgICAgIGZsb2F0IGlubmVyX3AxID0gc3FydChkb3QocDEsIHAxKSk7YCxcclxuICAgICAgICBgICAgIGZsb2F0IGlubmVyX3AyID0gc3FydChkb3QocDIsIHAyKSk7YCxcclxuICAgICAgICBgICAgIGZsb2F0IGlubmVyX3AzID0gc3FydChkb3QocDMsIHAzKSk7YCxcclxuICAgICAgICBgICAgIHZlYzIgaW5uZXIgPSAocDEgKiBpbm5lcl9wMSArIHAyICogaW5uZXJfcDIgKyBwMyAqIGlubmVyX3AzKSAvIChpbm5lcl9wMSArIGlubmVyX3AyICsgaW5uZXJfcDMpO2AsXHJcbiAgICAgICAgYCAgICByZXR1cm4gaW5uZXI7YCxcclxuICAgICAgICBgfWBcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICAgYGZsb2F0IGNhbGN1bGF0ZV9zdHJva2Vfc2NhbGUgKHZlYzIgcDEsIHZlYzIgcDIsIHZlYzIgcDMpIHtgLFxyXG4gICAgICAgIGAgICAgdmVjMiBpbm5lciA9IGNhbGN1bGF0ZV9pbm5lcl9wb2ludChwMSwgcDIsIHAzKTtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgYSA9IGRpc3RhbmNlKHAxLCBpbm5lcik7YCxcclxuICAgICAgICBgICAgIGZsb2F0IGIgPSBkaXN0YW5jZShwMiwgaW5uZXIpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCBjID0gZGlzdGFuY2UocDEsIHAyKTtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgY29zX2FscGhhID0gKHBvdyhiLCAyLjApICsgcG93KGMsIDIuMCkgLSBwb3coYSwgMi4wKSkgLyAoMi4wICogYiAqIGMpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCBzaW5fYWxwaGEgPSBzcXJ0KDEuMCAtIHBvdyhjb3NfYWxwaGEsIDIuMCkpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCBub3JtYWxfbGVuZ3RoID0gc2luX2FscGhhICogYTtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgc3Ryb2tlX3NjYWxlID0gMS4wICsgc3Ryb2tlV2lkdGggLyAyLjAgKiBwaXhlbFJhdGlvIC8gbm9ybWFsX2xlbmd0aDtgLFxyXG4gICAgICAgIGAgICAgcmV0dXJuIHN0cm9rZV9zY2FsZTtgLFxyXG4gICAgICAgIGB9YFxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgICBgZmxvYXQgc2lnbiAodmVjMiBwMSwgdmVjMiBwMiwgdmVjMiBwMykge2AsXHJcbiAgICAgICAgYCAgICByZXR1cm4gKHAxLnggLSBwMy54KSAqIChwMi55IC0gcDMueSkgLSAocDIueCAtIHAzLngpICogKHAxLnkgLSBwMy55KTtgLFxyXG4gICAgICAgIGB9YFxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgICBgZmxvYXQgaW5UcmlhbmdsZSgpIHtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgc3Ryb2tlX3NjYWxlID0gY2FsY3VsYXRlX3N0cm9rZV9zY2FsZSh2ZXJ0ZXhBbHBoYSwgdmVydGV4QmV0YSwgdmVydGV4R2FtbWEpO2AsXHJcbiAgICAgICAgYCAgICB2ZWMyIGZsaXBfcG9zID0gdmVjMihwb3NpdGlvbi54LCB2aWV3cG9ydC55IC0gcG9zaXRpb24ueSk7YCxcclxuICAgICAgICBgICAgIHZlYzIgZmxpcF92ZXJ0ZXhBbHBoYSA9IHZlYzIodmVydGV4QWxwaGEueCwgLSB2ZXJ0ZXhBbHBoYS55KSAvIHN0cm9rZV9zY2FsZTtgLFxyXG4gICAgICAgIGAgICAgdmVjMiBmbGlwX3ZlcnRleEJldGEgPSB2ZWMyKHZlcnRleEJldGEueCwgLSB2ZXJ0ZXhCZXRhLnkpIC8gc3Ryb2tlX3NjYWxlO2AsXHJcbiAgICAgICAgYCAgICB2ZWMyIGZsaXBfdmVydGV4R2FtbWEgPSB2ZWMyKHZlcnRleEdhbW1hLngsIC0gdmVydGV4R2FtbWEueSkgLyBzdHJva2Vfc2NhbGU7YCxcclxuICAgICAgICBgICAgIGZsb2F0IGQxID0gc2lnbihnbF9GcmFnQ29vcmQueHkgLyBwaXhlbFJhdGlvIC0gZmxpcF9wb3MsIGZsaXBfdmVydGV4QWxwaGEsIGZsaXBfdmVydGV4QmV0YSk7YCxcclxuICAgICAgICBgICAgIGZsb2F0IGQyID0gc2lnbihnbF9GcmFnQ29vcmQueHkgLyBwaXhlbFJhdGlvIC0gZmxpcF9wb3MsIGZsaXBfdmVydGV4QmV0YSwgZmxpcF92ZXJ0ZXhHYW1tYSk7YCxcclxuICAgICAgICBgICAgIGZsb2F0IGQzID0gc2lnbihnbF9GcmFnQ29vcmQueHkgLyBwaXhlbFJhdGlvIC0gZmxpcF9wb3MsIGZsaXBfdmVydGV4R2FtbWEsIGZsaXBfdmVydGV4QWxwaGEpO2AsXHJcbiAgICAgICAgYCAgICBib29sIGhhc19uZWcgPSAoZDEgPD0gMC4wKSB8fCAoZDIgPD0gMC4wKSB8fCAoZDMgPD0gMC4wKTtgLFxyXG4gICAgICAgIGAgICAgYm9vbCBoYXNfcG9zID0gKGQxID49IDAuMCkgfHwgKGQyID49IDAuMCkgfHwgKGQzID49IDAuMCk7YCxcclxuICAgICAgICBgICAgIGlmICghKGhhc19uZWcgJiYgaGFzX3BvcykpIHtgLFxyXG4gICAgICAgIGAgICAgICAgIHJldHVybiAxLjA7YCxcclxuICAgICAgICBgICAgIH0gZWxzZSB7YCxcclxuICAgICAgICBgICAgICAgICByZXR1cm4gMC4wO2AsXHJcbiAgICAgICAgYCAgICB9YCxcclxuICAgICAgICBgfWBcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICAgYGZsb2F0IGluVHJpYW5nbGVCb3JkZXIoKSB7YCxcclxuICAgICAgICBgICAgIGZsb2F0IHN0cm9rZV9zY2FsZSA9IGNhbGN1bGF0ZV9zdHJva2Vfc2NhbGUodmVydGV4QWxwaGEsIHZlcnRleEJldGEsIHZlcnRleEdhbW1hKTtgLFxyXG4gICAgICAgIGAgICAgdmVjMiBmbGlwX3BvcyA9IHZlYzIocG9zaXRpb24ueCwgdmlld3BvcnQueSAtIHBvc2l0aW9uLnkpO2AsXHJcbiAgICAgICAgYCAgICB2ZWMyIGZsaXBfdmVydGV4QWxwaGEgPSBzdHJva2Vfc2NhbGUgKiB2ZWMyKHZlcnRleEFscGhhLngsIC0gdmVydGV4QWxwaGEueSk7YCxcclxuICAgICAgICBgICAgIHZlYzIgZmxpcF92ZXJ0ZXhCZXRhID0gc3Ryb2tlX3NjYWxlICogdmVjMih2ZXJ0ZXhCZXRhLngsIC0gdmVydGV4QmV0YS55KTtgLFxyXG4gICAgICAgIGAgICAgdmVjMiBmbGlwX3ZlcnRleEdhbW1hID0gc3Ryb2tlX3NjYWxlICogdmVjMih2ZXJ0ZXhHYW1tYS54LCAtIHZlcnRleEdhbW1hLnkpO2AsXHJcbiAgICAgICAgYGAsXHJcbiAgICAgICAgYCAgICBmbG9hdCBkMSA9IHNpZ24oZ2xfRnJhZ0Nvb3JkLnh5IC8gcGl4ZWxSYXRpbyAtIGZsaXBfcG9zLCBmbGlwX3ZlcnRleEFscGhhLCBmbGlwX3ZlcnRleEJldGEpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCBkMiA9IHNpZ24oZ2xfRnJhZ0Nvb3JkLnh5IC8gcGl4ZWxSYXRpbyAtIGZsaXBfcG9zLCBmbGlwX3ZlcnRleEJldGEsIGZsaXBfdmVydGV4R2FtbWEpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCBkMyA9IHNpZ24oZ2xfRnJhZ0Nvb3JkLnh5IC8gcGl4ZWxSYXRpbyAtIGZsaXBfcG9zLCBmbGlwX3ZlcnRleEdhbW1hLCBmbGlwX3ZlcnRleEFscGhhKTtgLFxyXG4gICAgICAgIGBgLFxyXG4gICAgICAgIGAgICAgYm9vbCBoYXNfbmVnID0gKGQxIDw9IDAuMCkgfHwgKGQyIDw9IDAuMCkgfHwgKGQzIDw9IDAuMCk7YCxcclxuICAgICAgICBgICAgIGJvb2wgaGFzX3BvcyA9IChkMSA+PSAwLjApIHx8IChkMiA+PSAwLjApIHx8IChkMyA+PSAwLjApO2AsXHJcbiAgICAgICAgYGAsXHJcbiAgICAgICAgYCAgICBib29sIGluVHJpYW5nbGUgPSBpblRyaWFuZ2xlKCkgPT0gMS4wO2AsXHJcbiAgICAgICAgYCAgICBib29sIGluVHJpYW5nbGVCb3JkZXIgPSAhKGhhc19uZWcgJiYgaGFzX3Bvcyk7YCxcclxuICAgICAgICBgYCxcclxuICAgICAgICBgICAgIGlmICghaW5UcmlhbmdsZSAmJiBpblRyaWFuZ2xlQm9yZGVyKSB7YCxcclxuICAgICAgICBgICAgICAgICByZXR1cm4gMS4wO2AsXHJcbiAgICAgICAgYCAgICB9IGVsc2Uge2AsXHJcbiAgICAgICAgYCAgICAgICAgcmV0dXJuIDAuMDtgLFxyXG4gICAgICAgIGAgICAgfWAsXHJcbiAgICAgICAgYH1gXHJcbiAgICBdLFxyXG5cclxuICAgIFtcclxuICAgICAgICBgZmxvYXQgaW5SZWN0KCkge2AsXHJcbiAgICAgICAgYCAgICB2ZWMyIGZsaXBfcG9zID0gcG9zaXRpb247YCxcclxuICAgICAgICBgICAgIGZsaXBfcG9zLnkgPSB2aWV3cG9ydC55IC0gcG9zaXRpb24ueTtgLFxyXG4gICAgICAgIGAgICAgbWF0MiByb3RhdGVfbWF0ID0gbWF0MihgLFxyXG4gICAgICAgIGAgICAgICAgIGNvcyhyb3RhdGUpLCBzaW4ocm90YXRlKSxgLFxyXG4gICAgICAgIGAgICAgICAgIC1zaW4ocm90YXRlKSwgY29zKHJvdGF0ZSlgLFxyXG4gICAgICAgIGAgICAgKTtgLFxyXG4gICAgICAgIGAgICAgdmVjMiByb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQgPSByb3RhdGVfbWF0ICogKGdsX0ZyYWdDb29yZC54eSAvIHBpeGVsUmF0aW8gLSBmbGlwX3Bvcyk7YCxcclxuICAgICAgICBgICAgIGZsb2F0IHhfaW4gPSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC54LCB3aWR0aCAvIDIuMCAtIHN0cm9rZVdpZHRoIC8gMi4wKSAqICgxLjAgLSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC54LCAtIHdpZHRoIC8gMi4wICsgc3Ryb2tlV2lkdGggLyAyLjApKTtgLFxyXG4gICAgICAgIGAgICAgZmxvYXQgeV9pbiA9IHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLnksIGhlaWdodCAvIDIuMCAtIHN0cm9rZVdpZHRoIC8gMi4wKSAqICgxLjAgLSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC55LCAtIGhlaWdodCAvIDIuMCArIHN0cm9rZVdpZHRoIC8gMi4wKSk7YCxcclxuICAgICAgICBgICAgIHJldHVybiB4X2luICogeV9pbjtgLFxyXG4gICAgICAgIGB9YFxyXG4gICAgXSxcclxuXHJcbiAgICBbXHJcbiAgICAgICAgYGZsb2F0IGluUmVjdEJvcmRlcigpIHtgLFxyXG4gICAgICAgIGAgICAgdmVjMiBmbGlwX3BvcyA9IHBvc2l0aW9uO2AsXHJcbiAgICAgICAgYCAgICBmbGlwX3Bvcy55ID0gdmlld3BvcnQueSAtIHBvc2l0aW9uLnk7YCxcclxuICAgICAgICBgICAgIG1hdDIgcm90YXRlX21hdCA9IG1hdDIoYCxcclxuICAgICAgICBgICAgICAgICBjb3Mocm90YXRlKSwgc2luKHJvdGF0ZSksYCxcclxuICAgICAgICBgICAgICAgICAtc2luKHJvdGF0ZSksIGNvcyhyb3RhdGUpYCxcclxuICAgICAgICBgICAgICk7YCxcclxuICAgICAgICBgICAgIHZlYzIgcm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkID0gcm90YXRlX21hdCAqIChnbF9GcmFnQ29vcmQueHkgLyBwaXhlbFJhdGlvIC0gZmxpcF9wb3MpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCB4X2luX291dGVyID0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueCwgd2lkdGggLyAyLjAgKyBzdHJva2VXaWR0aCAvIDIuMCkgKiAoMS4wIC0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueCwgLSB3aWR0aCAvIDIuMCAtIHN0cm9rZVdpZHRoIC8gMi4wKSk7YCxcclxuICAgICAgICBgICAgIGZsb2F0IHlfaW5fb3V0ZXIgPSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC55LCBoZWlnaHQgLyAyLjAgKyBzdHJva2VXaWR0aCAvIDIuMCkgKiAoMS4wIC0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueSwgLSBoZWlnaHQgLyAyLjAgLSBzdHJva2VXaWR0aCAvIDIuMCkpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCB4X2luX2lubmVyID0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueCwgd2lkdGggLyAyLjAgLSBzdHJva2VXaWR0aCAvIDIuMCkgKiAoMS4wIC0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueCwgLSB3aWR0aCAvIDIuMCArIHN0cm9rZVdpZHRoIC8gMi4wKSk7YCxcclxuICAgICAgICBgICAgIGZsb2F0IHlfaW5faW5uZXIgPSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC55LCBoZWlnaHQgLyAyLjAgLSBzdHJva2VXaWR0aCAvIDIuMCkgKiAoMS4wIC0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueSwgLSBoZWlnaHQgLyAyLjAgKyBzdHJva2VXaWR0aCAvIDIuMCkpO2AsXHJcbiAgICAgICAgYGAsXHJcbiAgICAgICAgYCAgICByZXR1cm4geF9pbl9vdXRlciAqIHlfaW5fb3V0ZXIgKiAoMS4wIC0geF9pbl9pbm5lciAqIHlfaW5faW5uZXIpO2AsXHJcbiAgICAgICAgYH1gXHJcbiAgICBdLFxyXG5cclxuICAgIFtcclxuICAgICAgICBgZmxvYXQgaW5DaXJjbGUoKSB7YCxcclxuICAgICAgICBgICAgIHZlYzIgZmxpcF9wb3MgPSBwb3NpdGlvbjtgLFxyXG4gICAgICAgIGAgICAgZmxpcF9wb3MueSA9IHZpZXdwb3J0LnkgLSBwb3NpdGlvbi55O2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCBkaXN0ID0gZGlzdGFuY2UoZ2xfRnJhZ0Nvb3JkLnh5IC8gcGl4ZWxSYXRpbywgZmxpcF9wb3MpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCBkaXN0X2luX3IgPSBzdGVwKGRpc3QsIHIgLSBzdHJva2VXaWR0aCAvIDIuKTtgLFxyXG4gICAgICAgIGAgICAgcmV0dXJuIGRpc3RfaW5fcjtgLFxyXG4gICAgICAgIGB9YFxyXG4gICAgXSxcclxuXHJcbiAgICBbXHJcbiAgICAgICAgYGZsb2F0IGluQ2lyY2xlQm9yZGVyKCkge2AsXHJcbiAgICAgICAgYCAgICBpZiAoc3Ryb2tlV2lkdGggPT0gMC4pIHtgLFxyXG4gICAgICAgIGAgICAgICByZXR1cm4gMC47YCxcclxuICAgICAgICBgICAgIH1gLFxyXG4gICAgICAgIGAgICAgdmVjMiBmbGlwX3BvcyA9IHBvc2l0aW9uO2AsXHJcbiAgICAgICAgYCAgICBmbGlwX3Bvcy55ID0gdmlld3BvcnQueSAtIHBvc2l0aW9uLnk7YCxcclxuICAgICAgICBgYCxcclxuICAgICAgICBgICAgIGZsb2F0IGRpc3QgPSBkaXN0YW5jZShnbF9GcmFnQ29vcmQueHkgLyBwaXhlbFJhdGlvLCBmbGlwX3Bvcyk7YCxcclxuICAgICAgICBgICAgIGZsb2F0IGRyYXdPdXRlciA9IDEuIC0gc21vb3Roc3RlcCgociArIHN0cm9rZVdpZHRoIC8gMi4pICogMC45NSwgKHIgKyBzdHJva2VXaWR0aCAvIDIuKSAqIDEuMDUsIGRpc3QpO2AsXHJcbiAgICAgICAgYCAgICBmbG9hdCBkcmF3SW5uZXIgPSAxLiAtIHN0ZXAociAtIHN0cm9rZVdpZHRoIC8gMi4sIGRpc3QpO2AsXHJcbiAgICAgICAgYCAgICByZXR1cm4gZHJhd091dGVyICogKDEuIC0gZHJhd0lubmVyKTtgLFxyXG4gICAgICAgIGB9YFxyXG4gICAgXVxyXG5dXHJcbmZyYWdtZW50Lm1haW4gPSBbXHJcbiAgICBgdm9pZCBtYWluKHZvaWQpIHtgLFxyXG4gICAgYCAgICBpZiAoc2hhcGUgPT0gMC4wKSB7YCxcclxuICAgIGAgICAgICAgIC8vIGNpcmNsZSBzaGFwZWAsXHJcbiAgICBgICAgICAgICAvLyBib3JkZXIgY2hlY2ssIHVzaW5nIDAuNShjZW50ZXIgb2Ygc21vb3Roc3RlcClgLFxyXG4gICAgYCAgICAgICAgaWYgKGluQ2lyY2xlKCkgPCAxLiAmJiAoc3Ryb2tlV2lkdGggPCAwLjggfHwgaW5DaXJjbGVCb3JkZXIoKSA8IDAuNSkpIHtgLFxyXG4gICAgYCAgICAgICAgICAgIGRpc2NhcmQ7YCxcclxuICAgIGAgICAgICAgIH1gLFxyXG4gICAgYCAgICAgICAgZnJhZ21lbnRDb2xvciA9IGluQ2lyY2xlQm9yZGVyKCkgKiB2ZWM0KHN0cm9rZUNvbG9yLnJnYiAqIHN0cm9rZUNvbG9yLmEsIHN0cm9rZUNvbG9yLmEpICsgaW5DaXJjbGUoKSAqIHZlYzQoZmlsbC5yZ2IgKiBmaWxsLmEsIGZpbGwuYSk7YCxcclxuICAgIGAgICAgfSBlbHNlIGlmIChzaGFwZSA9PSAxLjApIHtgLFxyXG4gICAgYCAgICAgICAgLy8gcmVjdCBzaGFwZWAsXHJcbiAgICBgICAgICAgICBmcmFnbWVudENvbG9yID0gaW5SZWN0Qm9yZGVyKCkgKiB2ZWM0KHN0cm9rZUNvbG9yLnJnYiAqIHN0cm9rZUNvbG9yLmEsIHN0cm9rZUNvbG9yLmEpICsgaW5SZWN0KCkgKiB2ZWM0KGZpbGwucmdiICogZmlsbC5hLCBmaWxsLmEpO2AsXHJcbiAgICBgICAgIH0gZWxzZSBpZiAoc2hhcGUgPT0gMi4wKSB7YCxcclxuICAgIGAgICAgICAgIC8vIHRyaWFuZ2xlIHNoYXBlYCxcclxuICAgIGAgICAgICAgIGZyYWdtZW50Q29sb3IgPSBpblRyaWFuZ2xlQm9yZGVyKCkgKiB2ZWM0KHN0cm9rZUNvbG9yLnJnYiAqIHN0cm9rZUNvbG9yLmEsIHN0cm9rZUNvbG9yLmEpICsgaW5UcmlhbmdsZSgpICogdmVjNChmaWxsLnJnYiAqIGZpbGwuYSwgZmlsbC5hKTtgLFxyXG4gICAgYCAgICB9YCxcclxuICAgIGB9YFxyXG5dXHJcblxyXG5jb25zdCBpZEZyYWdtZW50ID0gZnJhZ21lbnQuY29weSgpXHJcbmlkRnJhZ21lbnQuaW5wdXRzWydpZCddID0gJ3ZlYzQnXHJcbi8vIGRlbGV0ZSBvbGQgZnJhZ21lbnRDb2xvclxyXG5pZEZyYWdtZW50Lm1haW4uc3BsaWNlKDcsIDEpXHJcbmlkRnJhZ21lbnQubWFpbi5zcGxpY2UoOSwgMSlcclxuaWRGcmFnbWVudC5tYWluLnNwbGljZSgxMSwgMSlcclxuLy8gYWRkIG5ldyBmcmFnbWVudENvbG9yXHJcbmlkRnJhZ21lbnQubWFpbi5zcGxpY2UoLTEsIDAsIGBmcmFnbWVudENvbG9yID0gaWQ7YClcclxuXHJcbmV4cG9ydCB7IHZlcnRleCwgaWRWZXJ0ZXgsIGZyYWdtZW50LCBpZEZyYWdtZW50IH1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XHJcbiAqIEBkZXNjcmlwdGlvbiB1dGlsaXR5IGZ1bmN0aW9ucyBmb3IgcmVuZGVyZXJcclxuICovXHJcblxyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJy4uL2ludGVyZmFjZXMnXHJcbmltcG9ydCB7IFZhcmlhYmxlLCBSZW5kZXJBdHRyaWJ1dGUgfSBmcm9tICcuL2ludGVyZmFjZXMnXHJcblxyXG4vKipcclxuICogY29tcGlsZSB3ZWJnbCBzaGFkZXJcclxuICogQHBhcmFtIGdsIFdlYkdMIGluc3RhbmNlXHJcbiAqIEBwYXJhbSBzaGFkZXJTdHIgc2hhZGVyIGZpbGUgaW4gc3RyaW5nXHJcbiAqIEBwYXJhbSBzaGFkZXJUeXBlIHZlcnRleCBvciBmcmFnbWVudCBzaGFkZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlU2hhZGVyKFxyXG4gICAgZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQsXHJcbiAgICBzaGFkZXJTdHI6IHN0cmluZyxcclxuICAgIHNoYWRlclR5cGU6IG51bWJlclxyXG4pOiBXZWJHTFNoYWRlciB7XHJcbiAgICBjb25zdCBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoc2hhZGVyVHlwZSlcclxuICAgIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNoYWRlclN0cilcclxuICAgIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKVxyXG4gICAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoYWRlciBjb21waWxlIGZhaWxlZDogJyArIGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2hhZGVyXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBnZW5lcmF0ZSBXZWJHTCBwcm9ncmFtXHJcbiAqIEBwYXJhbSBnbCBXZWJHTCBpbnN0YW5jZVxyXG4gKiBAcGFyYW0gdmVydFNoYWRlclN0ciB2ZXJ0ZXggc2hhZGVyIGluIHN0cmluZyBmb3JtYXRcclxuICogQHBhcmFtIGZyYWdTaGFkZXJTdHIgZnJhZ21lbnQgc2hhZGVyIGluIHN0cmluZyBmb3JtYXRcclxuICogQHBhcmFtIGF0dHJpYnV0ZXMgYXR0cmlidXRlc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2dyYW0oXHJcbiAgICBnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dCxcclxuICAgIHZlcnRTaGFkZXJTdHI6IHN0cmluZyxcclxuICAgIGZyYWdTaGFkZXJTdHI6IHN0cmluZyxcclxuICAgIGF0dHJpYnV0ZXM6IE1hcDxzdHJpbmcsIFJlbmRlckF0dHJpYnV0ZT5cclxuKTogV2ViR0xQcm9ncmFtIHtcclxuICAgIGNvbnN0IHZlcnRTaGFkZXIgPSBjb21waWxlU2hhZGVyKGdsLCB2ZXJ0U2hhZGVyU3RyLCBnbC5WRVJURVhfU0hBREVSKVxyXG4gICAgY29uc3QgZnJhZ1NoYWRlciA9IGNvbXBpbGVTaGFkZXIoZ2wsIGZyYWdTaGFkZXJTdHIsIGdsLkZSQUdNRU5UX1NIQURFUilcclxuXHJcbiAgICBjb25zdCBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpXHJcblxyXG4gICAgYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XHJcbiAgICAgICAgZ2wuYmluZEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIGF0dHIubG9jYXRpb24sIGF0dHIubmFtZSlcclxuICAgIH0pXHJcblxyXG4gICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZlcnRTaGFkZXIpXHJcbiAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnJhZ1NoYWRlcilcclxuXHJcbiAgICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKVxyXG4gICAgaWYgKCFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkxJTktfU1RBVFVTKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGxpbmsgc2hhZGVyczogJHtnbC5nZXRQcm9ncmFtSW5mb0xvZyhwcm9ncmFtKX1gKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwcm9ncmFtXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBjcmVhdGUgV2ViR0wgYXJyYXkgYnVmZmVyIGdpdmVuIGRhdGEgYXJyYXlcclxuICogQHBhcmFtIGdsIFdlYkdMIGNvbnRleHRcclxuICogQHBhcmFtIGRhdGEgZGF0YSB0byBzdG9yZSBpbiBidWZmZXJcclxuICogQHJldHVybnMgV2ViR0wgYnVmZmVyIHN0b3JlIGdpdmVuIGRhdGFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBcnJheUJ1ZmZlcihnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dCwgZGF0YTogRmxvYXQzMkFycmF5KTogV2ViR0xCdWZmZXIge1xyXG4gICAgY29uc3QgYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKClcclxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBidWZmZXIpXHJcbiAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgZGF0YSwgZ2wuRFlOQU1JQ19EUkFXKVxyXG4gICAgcmV0dXJuIGJ1ZmZlclxyXG59XHJcblxyXG4vKipcclxuICogZXh0cmFjdCBhdHRyaWJ1dGVzIGZyb20gYSBzaGFkZXIgc3JpbmdcclxuICogQHBhcmFtIHtzdHJpbmd9IHNoYWRlclN0clxyXG4gKiBAcmV0dXJucyB7UmVuZGVyQXR0cmlidXRlW119IGF0dHJpYnV0ZXMgYXJyYXlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0QXR0cmlidXRlc0Zyb21TaGFkZXIoc2hhZGVyU3RyOiBzdHJpbmcpOiBNYXA8c3RyaW5nLCBSZW5kZXJBdHRyaWJ1dGU+IHtcclxuICAgIGNvbnN0IG1hdGNoaW5ncyA9IHNoYWRlclN0ci5tYXRjaCgvaW5cXHMuKjsvZylcclxuICAgIGNvbnN0IGF0dHJpYnV0ZXNNYXAgPSBuZXcgTWFwKClcclxuICAgIG1hdGNoaW5ncy5mb3JFYWNoKChtYXRjaCwgbG9jYXRpb24pID0+IHtcclxuICAgICAgICBjb25zdCBuYW1lID0gbWF0Y2guc3BsaXQoJyAnKVsyXS5zbGljZSgwLCAtMSlcclxuICAgICAgICBjb25zdCB0eXBlID0gbWF0Y2guc3BsaXQoJyAnKVsxXVxyXG4gICAgICAgIGxldCBzaXplID0gMVxyXG4gICAgICAgIGlmICh0eXBlLnNsaWNlKDAsIDMpID09PSAndmVjJykge1xyXG4gICAgICAgICAgICBzaXplID0gTnVtYmVyKHR5cGUuc2xpY2UoLTEpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaXNCdWlsZEluID0gZmFsc2VcclxuICAgICAgICBpZiAobmFtZSA9PT0gJ2luVmVydGV4UG9zJykge1xyXG4gICAgICAgICAgICAvLyBhbiBpbnN0YW5jZSBpcyBmb3JtZWQgYnkgdHdvIHRyaWFuZ2xlcyxcclxuICAgICAgICAgICAgLy8gdGh1cyB3ZSBuZWVkIGZvdXIgcG9pbnQgcG9zaXRpb25zIHRvIGluaXRpYWwgdGhlIGluc3RhbmNlXHJcbiAgICAgICAgICAgIC8vIG1vcmUgZGV0YWlsczogaHR0cHM6Ly9wYW5qaWFjaGVuZy5zaXRlL3dpa2kvMjAxOS8wNi8wNi93ZWJHTC9XZWJHTC1CYXRjaERyYXclRTQlQkIlQTMlRTclQTAlODElRTklOTglODUlRTglQUYlQkIrJUU3JTkwJTg2JUU4JUE3JUEzL1xyXG4gICAgICAgICAgICBpc0J1aWxkSW4gPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF0dHJpYnV0ZXNNYXAuc2V0KG5hbWUsIHtcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgc2l6ZSwgLy8gdGhlIHNwYWNlIG9mIG9uZSBhdHRyaWJ1dGUsIGUuZy4gdmVjMyBvY3VwcGllcyAzIHVuaXRzIG9mIHNwYWNlXHJcbiAgICAgICAgICAgIGxvY2F0aW9uLCAvLyB0aGUgYXBwZWFyYW5jZSBvcmRlciBvZiBvbmUgYXR0cmlidXRlIGluIHRoZSBzaGFkZXIgY29kZSwgd2hpY2ggaXMgZXF1YWwgdG8gdGhlIHJlc3VsdCBvZiBnZXRBdHRyaWJMb2NhdGlvblxyXG4gICAgICAgICAgICBpc0J1aWxkSW4sIC8vIHdoaWNoIG1lYW5zIGZvdXIgdmVydGljZXMgaW4gb25lIGVsZW1lbnQ6IGluVmVydGV4UG9zXHJcbiAgICAgICAgICAgIGV4dHJhY3RBdHRyaWJ1dGVWYWx1ZUZyb206ICgpID0+IFtdIC8vIGEgZnVuY3Rpb24gd2hpY2ggaXMgdXNlIHRvIGFwcGVuZCBhbiBlbGVtZW50IGludG8gdGhlIGFycmF5IG9mIHRoaXMgYXR0cmlidXRlXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gYXR0cmlidXRlc01hcFxyXG59XHJcblxyXG4vKipcclxuICogZW5jb2RlIGEgcmVuZGVyIGlkIGFzIGNvbG9yIHRvIHBhc3MgaW4gdGV4dHVyZVxyXG4gKiBAcGFyYW0gaWQgcmVuZGVyIGlkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlUmVuZGVySWQoaWQ6IG51bWJlcik6IENvbG9yIHtcclxuICAgIC8vIHNwbGl0IGEgbGFyZ2UgbnVtYmVyIGJ5IDgtYml0OiBpZCA9IGNvbmNhdChhLCBiLCBnLCByKSwgYW5kIG5vcm1hbGl6ZSB0aGVtIGludG8gKDAsIDEpXHJcbiAgICBjb25zdCByID0gKGlkICYgMjU1KSAvIDI1NS4wXHJcbiAgICBjb25zdCBnID0gKChpZCA+PiA4KSAmIDI1NSkgLyAyNTUuMFxyXG4gICAgY29uc3QgYiA9ICgoaWQgPj4gMTYpICYgMjU1KSAvIDI1NS4wXHJcbiAgICBjb25zdCBhID0gKChpZCA+PiAyNCkgJiAyNTUpIC8gMjU1LjBcclxuICAgIHJldHVybiB7IHIsIGcsIGIsIGEgfVxyXG59XHJcblxyXG4vKipcclxuICogZGVjb2RlIHBpeGVsIHZhbHVlIHRvIG51bWJlclxyXG4gKiBAcGFyYW0gcGl4ZWxWYWwgYSBwaXhlbCdzIHZhbHVlIG9uIHRleHR1cmVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVSZW5kZXJJZChwaXhlbFZhbDogVWludDhBcnJheSk6IG51bWJlciB7XHJcbiAgICAvLyBwYXJzZSBub3JtYWxpemVkIHBhcnRzIG9mIGlkIG51bWJlciwgYml0IHNoaWZ0IHRvIG9yaWdpbiBwb3NpdGlvbiBhbmQgY29uY2F0XHJcbiAgICBjb25zdCByZW5kZXJJZCA9IHBpeGVsVmFsWzBdIHwgKHBpeGVsVmFsWzFdIDw8IDgpIHwgKHBpeGVsVmFsWzJdIDw8IDE2KSB8IChwaXhlbFZhbFszXSA8PCAyNClcclxuICAgIHJldHVybiByZW5kZXJJZFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2hhZGVyIHtcclxuICAgIHB1YmxpYyBpbnB1dHM6IFZhcmlhYmxlID0ge31cclxuICAgIHB1YmxpYyBvdXRwdXRzOiBWYXJpYWJsZSA9IHt9XHJcbiAgICBwdWJsaWMgdW5pZm9ybXM6IFZhcmlhYmxlID0ge31cclxuICAgIHB1YmxpYyBtZXRob2RzOiBzdHJpbmdbXVtdID0gW1tdXVxyXG4gICAgcHVibGljIG1haW46IHN0cmluZ1tdID0gW11cclxuICAgIHByaXZhdGUgaGVhZGVyID0gYCN2ZXJzaW9uIDMwMCBlc1xcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcXG5gXHJcbiAgICBwdWJsaWMgY29weSgpIHtcclxuICAgICAgICBjb25zdCBjb3B5U2hhZGVyID0gbmV3IFNoYWRlcigpXHJcbiAgICAgICAgY29weVNoYWRlci5pbnB1dHMgPSB7IC4uLnRoaXMuaW5wdXRzIH1cclxuICAgICAgICBjb3B5U2hhZGVyLm91dHB1dHMgPSB7IC4uLnRoaXMub3V0cHV0cyB9XHJcbiAgICAgICAgY29weVNoYWRlci51bmlmb3JtcyA9IHsgLi4udGhpcy51bmlmb3JtcyB9XHJcbiAgICAgICAgY29weVNoYWRlci5tYWluID0gdGhpcy5tYWluLm1hcCgoc3RyKSA9PiBzdHIpXHJcbiAgICAgICAgY29weVNoYWRlci5tZXRob2RzID0gdGhpcy5tZXRob2RzLm1hcCgobWV0aG9kKSA9PiBtZXRob2QubWFwKChzdHIpID0+IHN0cikpXHJcbiAgICAgICAgcmV0dXJuIGNvcHlTaGFkZXJcclxuICAgIH1cclxuICAgIHB1YmxpYyBjb25uZWN0KCkge1xyXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlc1ByZWZpeCA9IFtcclxuICAgICAgICAgICAgeyBwcmVmaXg6ICdpbicsIHZhcmlhYmxlczogdGhpcy5pbnB1dHMgfSxcclxuICAgICAgICAgICAgeyBwcmVmaXg6ICdvdXQnLCB2YXJpYWJsZXM6IHRoaXMub3V0cHV0cyB9LFxyXG4gICAgICAgICAgICB7IHByZWZpeDogJ3VuaWZvcm0nLCB2YXJpYWJsZXM6IHRoaXMudW5pZm9ybXMgfVxyXG4gICAgICAgIF1cclxuICAgICAgICBjb25zdCB2YXJpYWJsZURlZmluaXRpb25zID0gdmFyaWFibGVzUHJlZml4XHJcbiAgICAgICAgICAgIC5tYXAoKHZhcmlhYmxlUHJlZml4KSA9PlxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModmFyaWFibGVQcmVmaXgudmFyaWFibGVzKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKFtuYW1lLCB0eXBlXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCR7dmFyaWFibGVQcmVmaXgucHJlZml4fSAke3R5cGV9ICR7bmFtZX07XFxuYFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oJycpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmpvaW4oJycpXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyICtcclxuICAgICAgICAgICAgdmFyaWFibGVEZWZpbml0aW9ucyArXHJcbiAgICAgICAgICAgIHRoaXMubWV0aG9kcy5tYXAoKG1ldGhvZCkgPT4gbWV0aG9kLmpvaW4oJ1xcbicpKS5qb2luKCdcXG4nKSArXHJcbiAgICAgICAgICAgICdcXG4nICtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmpvaW4oJ1xcbicpXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBFTVBUWV9GVU5DVElPTiA9ICgpID0+IHt9XHJcbiIsIi8qKlxyXG4gKiBUZXN0IHdoZXRoZXIgYSBzdHJpbmcgY2FuIGJlIGEgdmFsaWQgaWQgb2YgYSBOb2RlLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWU6IHRoZSBzdHJpbmcgdG9iZSB0ZXN0ZWRcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZElkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUubGVuZ3RoID4gMFxyXG59XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIEppYWNoZW5nIFBhbiA8amFja2llYW54aXNAZ21haWwuY29tPlxyXG4gKiBAZGVzY3JpcHRpb24gTWFwMiBpcyBhIE1hcCBkYXRhIHN0cnVjdHVyZSB3aGljaCBtYXBzIHR3byBrZXlzIHRvIG9uZSB2YWx1ZS5cclxuICogQFVzYWdlIHNhbWUgdG8gTWFwIGRhdGEgc3RydWN0dXJlIGluIEVTNi5cclxuICogQGRlcGVuZGVuY2VzIE5vbmVcclxuICovXHJcblxyXG5jb25zdCBKT0lOID0gU3RyaW5nLmZyb21DaGFyQ29kZSg3KVxyXG5jb25zdCBpc0tleXMgPSAoa2V5czogQXJyYXk8c3RyaW5nPikgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBrZXlzIGluc3RhbmNlb2YgQXJyYXkgJiZcclxuICAgICAgICBrZXlzLmxlbmd0aCA9PT0gMiAmJlxyXG4gICAgICAgIGtleXMuZXZlcnkoKGtleSkgPT4ga2V5ICE9PSB1bmRlZmluZWQgJiYga2V5ICE9PSBudWxsKVxyXG4gICAgKVxyXG59XHJcbmNsYXNzIE1hcDIge1xyXG4gICAgcHJpdmF0ZSBtYXAgPSBuZXcgTWFwKClcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihlbnRyaWVzPzogQXJyYXk8QXJyYXk8YW55Pj4pIHtcclxuICAgICAgICBpZiAoZW50cmllcyBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBba2V5LCB2YWx1ZV0gPSBlbnRyeVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoa2V5LCB2YWx1ZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IHNpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLnNpemVcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlKGtleXM6IEFycmF5PHN0cmluZz4pIHtcclxuICAgICAgICBpZiAoaXNLZXlzKGtleXMpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGtleXMuam9pbihKT0lOKVxyXG4gICAgICAgICAgICBjb25zdCBrZXlfID0ga2V5c1sxXSArIEpPSU4gKyBrZXlzWzBdXHJcbiAgICAgICAgICAgIGxldCBtYXAgPSB0aGlzLm1hcFxyXG4gICAgICAgICAgICBtYXAuZGVsZXRlKGtleSlcclxuICAgICAgICAgICAgbWFwLmRlbGV0ZShrZXlfKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0KGtleXM6IEFycmF5PHN0cmluZz4sIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBpZiAoaXNLZXlzKGtleXMpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGtleXMuam9pbihKT0lOKVxyXG4gICAgICAgICAgICBjb25zdCBrZXlfID0ga2V5c1sxXSArIEpPSU4gKyBrZXlzWzBdXHJcbiAgICAgICAgICAgIGxldCBtYXAgPSB0aGlzLm1hcFxyXG4gICAgICAgICAgICBpZiAoIW1hcC5oYXMoa2V5XykpIHtcclxuICAgICAgICAgICAgICAgIG1hcC5zZXQoa2V5LCB2YWx1ZSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1hcC5zZXQoa2V5XywgdmFsdWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KGtleXM6IEFycmF5PHN0cmluZz4pIHtcclxuICAgICAgICBpZiAoaXNLZXlzKGtleXMpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGtleXMuam9pbihKT0lOKVxyXG4gICAgICAgICAgICBjb25zdCBrZXlfID0ga2V5c1sxXSArIEpPSU4gKyBrZXlzWzBdXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcC5nZXQoa2V5KSB8fCB0aGlzLm1hcC5nZXQoa2V5XylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYXMoa2V5czogQXJyYXk8c3RyaW5nPikge1xyXG4gICAgICAgIGlmIChpc0tleXMoa2V5cykpIHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0ga2V5cy5qb2luKEpPSU4pXHJcbiAgICAgICAgICAgIGNvbnN0IGtleV8gPSBrZXlzWzFdICsgSk9JTiArIGtleXNbMF1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFwLmhhcyhrZXkpIHx8IHRoaXMubWFwLmhhcyhrZXlfKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9yRWFjaChmdW5jOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMubWFwLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgbGV0IGtleXMgPSBrZXkuc3BsaXQoSk9JTilcclxuICAgICAgICAgICAgZnVuYyh2YWx1ZSwga2V5cywgdGhpcylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbnRyaWVzKCkge1xyXG4gICAgICAgIHJldHVybiBbLi4udGhpcy5tYXAuZW50cmllcygpXS5tYXAoKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGVudHJ5WzBdLnNwbGl0KEpPSU4pXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZW50cnlbMV1cclxuICAgICAgICAgICAgcmV0dXJuIFtrZXksIHZhbHVlXVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGtleXMoKSB7XHJcbiAgICAgICAgbGV0IGtleXMgPSBbLi4udGhpcy5tYXAua2V5cygpXVxyXG4gICAgICAgIHJldHVybiBrZXlzLm1hcCgoa2V5KSA9PiBrZXkuc3BsaXQoSk9JTikpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbHVlcygpIHtcclxuICAgICAgICByZXR1cm4gWy4uLnRoaXMubWFwLnZhbHVlcygpXVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXAyXHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIFhpYW9kb25nIFpoYW8gPHpoYW94aWFvZG9uZ0B6anUuZWR1LmNuPlxyXG4gKiBAZGVzY3JpcHRpb24gc29tZSB1dGlsaXR5IGZ1bmN0aW9uc1xyXG4gKi9cclxuXHJcbmltcG9ydCB7IE5vZGVMaW5rRGF0YSB9IGZyb20gJy4uL2ludGVyZmFjZXMnXHJcblxyXG4vKipcclxuICogZ2l2ZW4gYSBncmFwaCBkYXRhIHdpdGggcG9zaXRpb24sIHJldHVybiBhIGNvcHkgb2YgZ3JhcGgsIHdpdGggcG9zaXRpb24gdHJhbnNmb3JtZWQgdG8gY2VudGVyIG9mIGdpdmVuIHNpemVcclxuICogQHBhcmFtIGdyYXBoIG5vZGUgbGluayBncmFwaCBkYXRhXHJcbiAqIEBwYXJhbSBzaXplIGdyYXBoIHNpemUgKG1heCh3aWR0aCwgaGVpZ2h0KSlcclxuICogQHBhcmFtIGNlbnRlclggeCBwb3Mgb2YgZ3JhcGggY2VudGVyXHJcbiAqIEBwYXJhbSBjZW50ZXJZIHkgcG9zIG9mIGdyYXBoIGNlbnRlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybUdyYXBoUG9zaXRpb24oXHJcbiAgICBncmFwaDogTm9kZUxpbmtEYXRhLFxyXG4gICAgc2l6ZTogbnVtYmVyLFxyXG4gICAgY2VudGVyWDogbnVtYmVyLFxyXG4gICAgY2VudGVyWTogbnVtYmVyXHJcbikge1xyXG4gICAgY29uc3QgdGFyZ2V0R3JhcGg6IE5vZGVMaW5rRGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZ3JhcGgpKVxyXG4gICAgY29uc3QgeHMgPSB0YXJnZXRHcmFwaC5ub2Rlcy5tYXAoKG5vZGUpID0+IG5vZGUueClcclxuICAgIGNvbnN0IHlzID0gdGFyZ2V0R3JhcGgubm9kZXMubWFwKChub2RlKSA9PiBub2RlLnkpXHJcbiAgICBjb25zdCB4TWluID0gTWF0aC5taW4oLi4ueHMpXHJcbiAgICBjb25zdCB4TWF4ID0gTWF0aC5tYXgoLi4ueHMpXHJcbiAgICBjb25zdCB5TWluID0gTWF0aC5taW4oLi4ueXMpXHJcbiAgICBjb25zdCB5TWF4ID0gTWF0aC5tYXgoLi4ueXMpXHJcblxyXG4gICAgY29uc3QgeE1pZCA9ICh4TWluICsgeE1heCkgLyAyXHJcbiAgICBjb25zdCB5TWlkID0gKHlNaW4gKyB5TWF4KSAvIDJcclxuXHJcbiAgICB0YXJnZXRHcmFwaC5ub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XHJcbiAgICAgICAgbm9kZS54ID0gKChub2RlLnggLSB4TWlkKSAvICh4TWF4IC0geE1pbikpICogc2l6ZSArIGNlbnRlclhcclxuICAgICAgICBub2RlLnkgPSAoKG5vZGUueSAtIHlNaWQpIC8gKHlNYXggLSB5TWluKSkgKiBzaXplICsgY2VudGVyWVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gdGFyZ2V0R3JhcGhcclxufVxyXG5cclxuLyoqXHJcbiAqIHRoZSBmdW5jdGlvbiBpcyB0byBvdmVycmlkZSBvYmplY3QgcmVjdXJzaXZlbHlcclxuICogQHBhcmFtIG92ZXJyaWRkZW5PYmplY3Q6IHRoZSBPYmplY3QgdG8gYmUgb3ZlcnJpZGRlblxyXG4gKiBAcGFyYW0gb3ZlcnJpZGluZ09iamVjdDogdGhlIE9iamVjdCB0byBvdmVycmlkZSB0aGUgb3ZlcnJpZGRlbiBPYmplY3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvdmVycmlkZShvdmVycmlkZGVuT2JqZWN0OiBvYmplY3QsIG92ZXJyaWRpbmdPYmplY3Q6IG9iamVjdCkge1xyXG4gICAgaWYgKG92ZXJyaWRkZW5PYmplY3QgIT09IE9iamVjdChvdmVycmlkZGVuT2JqZWN0KSkge1xyXG4gICAgICAgIC8vIG92ZXJyaWRkZW5PYmplY3QgaXMgbm90IGFuIG9iamVjdFxyXG4gICAgICAgIGlmIChvdmVycmlkaW5nT2JqZWN0ICE9PSBPYmplY3Qob3ZlcnJpZGluZ09iamVjdCkpIHtcclxuICAgICAgICAgICAgLy8gb3ZlcnJpZGluZ09iamVjdCBpcyBub3QgYW4gb2JqZWN0XHJcbiAgICAgICAgICAgIHJldHVybiBvdmVycmlkaW5nT2JqZWN0XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob3ZlcnJpZGluZ09iamVjdCkpIC8vIGRlZXAgY29weVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvYmplY3QgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG92ZXJyaWRkZW5PYmplY3QpKSAvLyBkZWVwIGNvcHlcclxuICAgIGZvciAoY29uc3Qga2V5IGluIG92ZXJyaWRpbmdPYmplY3QpIHtcclxuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCAmJiBvdmVycmlkaW5nT2JqZWN0W2tleV0gPT09IE9iamVjdChvdmVycmlkaW5nT2JqZWN0W2tleV0pKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIG92ZXJyaWRpbmdPYmplY3Rba2V5XSBpcyBhbiBvYmplY3RcclxuICAgICAgICAgICAgb2JqZWN0W2tleV0gPSBvdmVycmlkZShvYmplY3Rba2V5XSwgb3ZlcnJpZGluZ09iamVjdFtrZXldKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9iamVjdFtrZXldID0gb3ZlcnJpZGluZ09iamVjdFtrZXldXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iamVjdFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=