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

/**
 * @description default configurations in NetV
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.link = exports.node = exports.linkLimit = exports.nodeLimit = exports.enablePanZoom = exports.backgroundColor = exports.height = exports.width = void 0;
exports.width = 800;
exports.height = 600;
exports.backgroundColor = { r: 1, g: 1, b: 1, a: 1 };
exports.enablePanZoom = true;
exports.nodeLimit = 100;
exports.linkLimit = 1000;
exports.node = {
    r: 5,
    fill: { r: 0.2, g: 0.6, b: 0.2, a: 0.8 },
    // strokeColor: { r: 0.6, g: 0.6, b: 0.6, a: 0.5 },
    strokeColor: { r: 0.9, g: 0.9, b: 0.9, a: 0.6 },
    strokeWidth: 2,
    clickCallback: (node) => { }
};
exports.link = {
    // strokeColor: { r: 0.5, g: 0.5, b: 0.5, a: 0.2 },
    strokeColor: { r: 0.4, g: 0.6, b: 0.8, a: 0.5 },
    strokeWidth: 2,
    clickCallback: (link) => { }
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
exports.miserables = void 0;
const miserables_1 = __webpack_require__(/*! ./miserables */ "./src/dataset/miserables.ts");
Object.defineProperty(exports, "miserables", { enumerable: true, get: function () { return miserables_1.miserables; } });


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
class NetV {
    /**
     * @description create NetV object.
     * @param configs configurations of NetV, must include a `container: HTMLDivElement` term
     */
    constructor(configs) {
        this.Utils = Utils;
        this.$_id2node = new Map();
        this.$_ends2link = new map2_1.default();
        this.$_id2links = new Map();
        this.$_configs = JSON.parse(JSON.stringify(defaultConfigs)); // NOTE: deep copy configs
        this.$_data = { nodes: [], links: [] };
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
        this.$_renderer = new renderer_1.Renderer({
            canvas,
            width: this.$_configs.width,
            height: this.$_configs.height,
            backgroundColor: this.$_configs.backgroundColor,
            nodeLimit: this.$_configs.nodeLimit,
            linkLimit: this.$_configs.linkLimit
        });
        this.$_interaction = new interaction_1.InteractionManager(this);
        if (this.$_configs.enablePanZoom) {
            this.$_interaction.initZoom();
        }
        this.$_interaction.initClick();
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
            this.$_id2links = new Map();
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
        this.$_renderer.addLinks(newLinks);
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
        this.$_id2links = new Map();
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
    getElementByPosition(x, y) {
        const id = this.$_renderer.getIdByPosition(x, y);
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
}
exports.NetV = NetV;


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
        this.transform = {
            x: 0,
            y: 0,
            k: 1
        };
        this.isDragging = false;
        this.netv = netv;
    }
    /**
     * init zoom&pan interaction
     * currently no callback
     */
    initZoom() {
        const canvas = this.netv.$_container.querySelector('canvas');
        const handleScroll = (evt) => {
            const x = evt.offsetX || evt.pageX - canvas.offsetLeft;
            const y = evt.offsetY || evt.pageY - canvas.offsetTop;
            const delta = evt.deltaY ? evt.deltaY / 40 : evt.detail ? -evt.detail : 0;
            if (delta) {
                const k = Math.pow(1.1, delta);
                this.transform.x = (1 - k) * x + k * this.transform.x;
                this.transform.y = (1 - k) * y + k * this.transform.y;
                this.transform.k *= k;
                this.netv.$_renderer.setTransform(this.transform);
                this.netv.draw();
            }
            evt.preventDefault();
        };
        // TODO: maybe can handle on div instead of canvas
        canvas.addEventListener('DOMMouseScroll', handleScroll, false);
        canvas.addEventListener('mousewheel', handleScroll, false);
    }
    /**
     * setup click utility
     */
    // TODO: need rename
    initClick() {
        const canvas = this.netv.$_container.querySelector('canvas');
        const handleMouseDown = (evt) => {
            const x = evt.offsetX || evt.pageX - canvas.offsetLeft;
            const y = evt.offsetY || evt.pageY - canvas.offsetTop;
            const yInv = this.netv.$_configs.height - y;
            const element = this.netv.getElementByPosition(x, yInv);
            if (element === null || element === void 0 ? void 0 : element.element.$_clickCallback) {
                element.element.$_clickCallback(element.element); // TODO: not elegant
            }
            else {
                this.isDragging = true;
                this.dragStartPos = { x, y };
                this.dragStartTransform = JSON.parse(JSON.stringify(this.transform));
            }
        };
        const handleMouseMove = (evt) => {
            if (!this.isDragging)
                return;
            const x = evt.offsetX || evt.pageX - canvas.offsetLeft;
            const y = evt.offsetY || evt.pageY - canvas.offsetTop;
            this.transform.x = this.dragStartTransform.x + x - this.dragStartPos.x;
            this.transform.y = this.dragStartTransform.y + y - this.dragStartPos.y;
            this.netv.$_renderer.setTransform(this.transform);
            this.netv.draw();
        };
        const handleMouseUp = (evt) => {
            if (this.isDragging) {
                this.isDragging = false;
            }
        };
        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseup', handleMouseUp);
    }
}
exports.InteractionManager = InteractionManager;


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
            clickCallback: defaultConfigs.link.clickCallback
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
        var _a;
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
                (_a = this.$_core.$_id2links.get(oldSource.id())) === null || _a === void 0 ? void 0 : _a.delete(this);
            }
            this.$_source = newSource;
            this.$_target = newTarget;
            this.$_core.$_ends2link.set([newSourceId, newTargetId], this);
            if (!this.$_core.$_id2links.has(newSourceId)) {
                this.$_core.$_id2links.set(newSourceId, new Set([this]));
            }
            else {
                this.$_core.$_id2links.get(newSourceId).add(this);
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
            clickCallback: defaultConfigs.node.clickCallback
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
        this.setClickCallback(data.clickCallback);
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
        if (arguments.length !== 0) {
            this.$_position.x = value;
            this.$_core.$_renderer.nodeManager.changeAttribute(this, 'position');
            // NOTE: update related link position
            if (this.$_core.$_id2links.get(this.$_id)) {
                for (const link of this.$_core.$_id2links.get(this.$_id)) {
                    this.$_core.$_renderer.linkManager.changeAttribute(link, 'source');
                }
            }
        }
        return this.$_position.x;
    }
    /**
     * set/get y postion
     * @param {number} [value]
     * @memberof Node
     */
    y(value) {
        if (arguments.length !== 0) {
            this.$_position.y = value;
            this.$_core.$_renderer.nodeManager.changeAttribute(this, 'position');
            // NOTE: update related link position
            if (this.$_core.$_id2links.get(this.$_id)) {
                for (const link of this.$_core.$_id2links.get(this.$_id)) {
                    this.$_core.$_renderer.linkManager.changeAttribute(link, 'source');
                    this.$_core.$_renderer.linkManager.changeAttribute(link, 'target');
                }
            }
        }
        return this.$_position.y;
    }
    /**
     * set/get postion
     * @param {number} [value]
     * @memberof Node
     */
    position(x, y) {
        if (arguments.length === 2) {
            this.$_position.x = x;
            this.$_position.y = y;
            this.$_core.$_renderer.nodeManager.changeAttribute(this, 'position');
            // NOTE: update related link position
            if (this.$_core.$_id2links.get(this.$_id)) {
                for (const link of this.$_core.$_id2links.get(this.$_id)) {
                    this.$_core.$_renderer.linkManager.changeAttribute(link, 'source');
                }
            }
        }
        else if (arguments.length !== 0 && arguments.length !== 2) {
            throw Error(`Node.position() method can not deal with ${arguments.length} parameters.`);
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
    getIdByPosition(x, y) {
        const renderId = this.readIdTexture(x, y);
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
    readIdTexture(x, y) {
        const ratio = window.devicePixelRatio || 1;
        this.gl.bindFramebuffer(this.gl.READ_FRAMEBUFFER, this.idTexture);
        const readPixelBuffer = new Uint8Array([255, 255, 255, 255]); // -1
        this.gl.readPixels(x * ratio, y * ratio, 1, 1, this.gl.RGBA, this.gl.UNSIGNED_BYTE, readPixelBuffer);
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
    const sum = (acc, x) => acc + x;
    const xMid = xs.reduce(sum) / xs.length;
    const yMid = ys.reduce(sum) / ys.length;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YXNldC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YXNldC9taXNlcmFibGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJhY3Rpb24vaW50ZXJhY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpbmsudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL2VsZW1lbnRzL2xpbmsvZnJhZ21lbnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvZWxlbWVudHMvbGluay9pZC1mcmFnbWVudC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlci9lbGVtZW50cy9saW5rL2lkLXZlcnRleC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlci9lbGVtZW50cy9saW5rL3JlbmRlci1saW5rLnRzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlci9lbGVtZW50cy9saW5rL3ZlcnRleC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlci9lbGVtZW50cy9ub2RlL2ZyYWdtZW50Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL2VsZW1lbnRzL25vZGUvaWQtZnJhZ21lbnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvZWxlbWVudHMvbm9kZS9pZC12ZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvZWxlbWVudHMvbm9kZS9yZW5kZXItbm9kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvZWxlbWVudHMvbm9kZS92ZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvbWFwMi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7R0FHRzs7O0FBS1UsYUFBSyxHQUFHLEdBQUc7QUFDWCxjQUFNLEdBQUcsR0FBRztBQUNaLHVCQUFlLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FB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O1FBQzdFLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDMUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzNFLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDNUUsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMxRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQ3ZFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDdkUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RSxFQUFFLEVBQUUsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO0tBQ2pGO0lBRUQsS0FBSyxFQUFFO1FBQ0gsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDL0QsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQy9DLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDaEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMxRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RCxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hELEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFF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LEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2hELEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDaEQsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMxRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQy9DLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMxRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFF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QUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDL0MsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMvQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2hELEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNoRCxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQy9DLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzlDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDOUMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFB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S0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDMUQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMxRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNoRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQy9DLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDeEQsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzFELEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDeEQsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMzRCxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3pE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SyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQzNFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQzNFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBRTNFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVO1lBRXhDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQztZQUNyRixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JFLFdBQVcsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENB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QyxLQUFLLENBQUMsQ0FBQztJQUNuRSxNQUFNLEVBQUUsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsRCxNQUFNLEVBQUUsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzVCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDNUIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM1QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBRTVCLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBVyxFQUFFLENBQVMsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDL0MsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTTtJQUN2QyxNQUFNLElBQUksR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNO0lBRXZDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDL0IsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxPQUFPO1FBQzNELElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsT0FBTztJQUMvRCxDQUFDLENBQUM7SUFFRixPQUFPLFdBQVc7QUFDdEIsQ0FBQztBQXhCRCx3REF3QkMiLCJmaWxlIjoiTmV0Vi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBkZWZhdWx0IGNvbmZpZ3VyYXRpb25zIGluIE5ldFZcclxuICogQGF1dGhvciBYaWFvZG9uZyBaaGFvIDx6aGFveGlhb2RvbmdAemp1LmVkdS5jbj5cclxuICovXHJcblxyXG5pbXBvcnQgTm9kZSBmcm9tICcuL25vZGUnXHJcbmltcG9ydCBMaW5rIGZyb20gJy4vbGluaydcclxuXHJcbmV4cG9ydCBjb25zdCB3aWR0aCA9IDgwMFxyXG5leHBvcnQgY29uc3QgaGVpZ2h0ID0gNjAwXHJcbmV4cG9ydCBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDEsIGE6IDEgfVxyXG5leHBvcnQgY29uc3QgZW5hYmxlUGFuWm9vbSA9IHRydWVcclxuZXhwb3J0IGNvbnN0IG5vZGVMaW1pdCA9IDEwMFxyXG5leHBvcnQgY29uc3QgbGlua0xpbWl0ID0gMTAwMFxyXG5cclxuZXhwb3J0IGNvbnN0IG5vZGUgPSB7XHJcbiAgICByOiA1LFxyXG4gICAgZmlsbDogeyByOiAwLjIsIGc6IDAuNiwgYjogMC4yLCBhOiAwLjggfSxcclxuICAgIC8vIHN0cm9rZUNvbG9yOiB7IHI6IDAuNiwgZzogMC42LCBiOiAwLjYsIGE6IDAuNSB9LFxyXG4gICAgc3Ryb2tlQ29sb3I6IHsgcjogMC45LCBnOiAwLjksIGI6IDAuOSwgYTogMC42IH0sXHJcbiAgICBzdHJva2VXaWR0aDogMixcclxuICAgIGNsaWNrQ2FsbGJhY2s6IChub2RlOiBOb2RlKSA9PiB7fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbGluayA9IHtcclxuICAgIC8vIHN0cm9rZUNvbG9yOiB7IHI6IDAuNSwgZzogMC41LCBiOiAwLjUsIGE6IDAuMiB9LFxyXG4gICAgc3Ryb2tlQ29sb3I6IHsgcjogMC40LCBnOiAwLjYsIGI6IDAuOCwgYTogMC41IH0sXHJcbiAgICBzdHJva2VXaWR0aDogMixcclxuICAgIGNsaWNrQ2FsbGJhY2s6IChsaW5rOiBMaW5rKSA9PiB7fVxyXG59XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIFhpYW9kb25nIFpoYW8gPHpoYW94aWFvZG9uZ0B6anUuZWR1LmNuPlxyXG4gKiBAZGVzY3JpcHRpb24gYnVpbGQtaW4gZGF0YXNldCBpbiBOZXRWXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgbWlzZXJhYmxlcyB9IGZyb20gJy4vbWlzZXJhYmxlcydcclxuXHJcbmV4cG9ydCB7IG1pc2VyYWJsZXMgfVxyXG4iLCIvKipcclxuICogQGF1dGhvciBYaWFvZG9uZyBaaGFvIDx6aGFveGlhb2RvbmdAemp1LmVkdS5jbj5cclxuICogQGRlc2NyaXB0aW9uIExlcyBNaXNlcmFibGVzIHJlbGF0aW9uIGRhdGFzZXQuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBnZW5lcmF0ZWQgYnkgZDMtZm9yY2U6IGh0dHBzOi8vb2JzZXJ2YWJsZWhxLmNvbS9AZDMvZm9yY2UtZGlyZWN0ZWQtZ3JhcGhcclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgbWlzZXJhYmxlcyA9IHtcclxuICAgIG5vZGVzOiBbXHJcbiAgICAgICAgeyBpZDogJ015cmllbCcsIHg6IDI5My40NzE0NTExNzU1MzYyMywgeTogMzU2LjQzMzU3MTgxMDQxMzgsIGdyb3VwOiAxIH0sXHJcbiAgICAgICAgeyBpZDogJ05hcG9sZW9uJywgeDogMjUzLjkwMjUwODg2MTg2NTYsIHk6IDM3NC4zMDU4MTE2NTM2NDQ1LCBncm91cDogMSB9LFxyXG4gICAgICAgIHsgaWQ6ICdNbGxlLkJhcHRpc3RpbmUnLCB4OiAzNTAuOTI3MjQ5ODk5MTgwNzcsIHk6IDMzMi4zMzI1NTM5OTk5OTQzLCBncm91cDogMSB9LFxyXG4gICAgICAgIHsgaWQ6ICdNbWUuTWFnbG9pcmUnLCB4OiAzNTYuMDkxNjE1NjUzOTk5NywgeTogMzUyLjc4ODU3OTkxMTYwMTUsIGdyb3VwOiAxIH0sXHJcbiAgICAgICAgeyBpZDogJ0NvdW50ZXNzZGVMbycsIHg6IDI1NC4yOTI5MTUyMDk4OTMzNSwgeTogMzU3LjMxNzU3MzQwNzY0MTcsIGdyb3VwOiAxIH0sXHJcbiAgICAgICAgeyBpZDogJ0dlYm9yYW5kJywgeDogMjU3Ljg1NzI5MzYyNjIwMSwgeTogMzM1Ljg1NDI3NjI4MzU4OTU3LCBncm91cDogMSB9LFxyXG4gICAgICAgIHsgaWQ6ICdDaGFtcHRlcmNpZXInLCB4OiAyNTkuNjI1NTU2MzgyNTAyOCwgeTogMzgzLjgzMDI3NDY5ODMyODE0LCBncm91cDogMSB9LFxyXG4gICAgICAgIHsgaWQ6ICdDcmF2YXR0ZScsIHg6IDI0OS44NTk2NDU5ODI5MTM5LCB5OiAzNDYuMTgyMjU1MTY4MzI0OTYsIGdyb3VwOiAxIH0sXHJcbiAgICAgICAgeyBpZDogJ0NvdW50JywgeDogMjY5Ljk2NzkzOTUxMzUwOTI0LCB5OiAzOTAuNjgwMDg0MjMyMTU3MSwgZ3JvdXA6IDEgfSxcclxuICAgICAgICB7IGlkOiAnT2xkTWFuJywgeDogMjQ2LjczOTUyMzExMjc3NjY1LCB5OiAzNjQuNTkzNTc0OTQ0MzIwNjYsIGdyb3VwOiAxIH0sXHJcbiAgICAgICAgeyBpZDogJ0xhYmFycmUnLCB4OiA0NDMuNTE2NTgzMzE1MDI2LCB5OiAzNTguMjkyMDQ3ODk0Nzc2ODMsIGdyb3VwOiAyIH0sXHJcbiAgICAgICAgeyBpZDogJ1ZhbGplYW4nLCB4OiA0NDIuMTY4OTQ3NTc2NDE1MDYsIHk6IDMyMC44MzE1NTMyMTYwODYxLCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdNYXJndWVyaXRlJywgeDogNDEzLjM4MTY4NTEwMDc5MzEsIHk6IDI0MC4wNDA5MTU1OTI5NjUwNCwgZ3JvdXA6IDMgfSxcclxuICAgICAgICB7IGlkOiAnTW1lLmRlUicsIHg6IDQyNy4yMzYxNzE1OTUwMjU0LCB5OiAzNTUuMTAyMTE1ODk5Nzk1MTQsIGdyb3VwOiAyIH0sXHJcbiAgICAgICAgeyBpZDogJ0lzYWJlYXUnLCB4OiA0MDUuODUwODI4NTgxOTE4MzQsIHk6IDMzMC41MjAxNTEyMjA1MDg1LCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdHZXJ2YWlzJywgeDogNDA1LjIxMTMxMjE5MDY4ODEsIHk6IDMxNi4yOTEyNTM1OTM5NjEzNiwgZ3JvdXA6IDIgfSxcclxuICAgICAgICB7IGlkOiAnVGhvbG9teWVzJywgeDogNDIyLjQxMjUzMDc3ODE2NDYsIHk6IDEyNi4wNzY0OTQ0OTc3NTgwNiwgZ3JvdXA6IDMgfSxcclxuICAgICAgICB7IGlkOiAnTGlzdG9saWVyJywgeDogMzYzLjE3Mjk0MjI2Nzc5NzksIHk6IDEwMi43Nzg5MDM2ODI4OTc4NSwgZ3JvdXA6IDMgfSxcclxuICAgICAgICB7IGlkOiAnRmFtZXVpbCcsIHg6IDM4MS43OTQ3MTAzMDk0MDI4LCB5OiA2Ni41ODEzMzcyNDA0Mzk0OCwgZ3JvdXA6IDMgfSxcclxuICAgICAgICB7IGlkOiAnQmxhY2hldmlsbGUnLCB4OiAzODMuMTc5MjY3Njc0MDI2MSwgeTogOTQuODAzMjAzMTU1MDAxNTQsIGdyb3VwOiAzIH0sXHJcbiAgICAgICAgeyBpZDogJ0Zhdm91cml0ZScsIHg6IDM2MS44OTM3MzE2NDQyODUsIHk6IDcwLjM4Njk2MzgxMzg0MDc0LCBncm91cDogMyB9LFxyXG4gICAgICAgIHsgaWQ6ICdEYWhsaWEnLCB4OiAzOTguNzUzNTA5ODgzNTE2NTMsIHk6IDc3LjA5NzAwNzUxNTI3MTE5LCBncm91cDogMyB9LFxyXG4gICAgICAgIHsgaWQ6ICdaZXBoaW5lJywgeDogMzQ5LjA0OTU5MTQ2MDEzNzYsIHk6IDg4LjgwODg4NjEzMzcyNzEzLCBncm91cDogMyB9LFxyXG4gICAgICAgIHsgaWQ6ICdGYW50aW5lJywgeDogMzk4LjAxNDExNDM4NzAyNDczLCB5OiAxNzMuNzY0NDQxOTY5NDU5NzcsIGdyb3VwOiAzIH0sXHJcbiAgICAgICAgeyBpZDogJ01tZS5UaGVuYXJkaWVyJywgeDogNDcxLjI1MTY1MzMzODY3MjUsIHk6IDI2Mi4yMTg3MDE2NjY2NDUsIGdyb3VwOiA0IH0sXHJcbiAgICAgICAgeyBpZDogJ1RoZW5hcmRpZXInLCB4OiA1MDQuODE2NzIwODU2MDMwNjYsIHk6IDI4My4wNDYzODkwMDQ4MTcyMywgZ3JvdXA6IDQgfSxcclxuICAgICAgICB7IGlkOiAnQ29zZXR0ZScsIHg6IDQ3Mi4zMzQ2OTQxNDg3MTkyLCB5OiAyMjguNjg3Nzk0NDMzMDM0NzgsIGdyb3VwOiA1IH0sXHJcbiAgICAgICAgeyBpZDogJ0phdmVydCcsIHg6IDQ2MC4wNTI1NzY4OTMzMjgzNiwgeTogMjk1LjU1NzgxNTQyNjg5MDQsIGdyb3VwOiA0IH0sXHJcbiAgICAgICAgeyBpZDogJ0ZhdWNoZWxldmVudCcsIHg6IDM4NS40MzkzNTc2NDU4OTk4NiwgeTogMzAyLjEyODI0NTg4NjIyODU3LCBncm91cDogMCB9LFxyXG4gICAgICAgIHsgaWQ6ICdCYW1hdGFib2lzJywgeDogMzkzLjE5MDQxNTkwMzgzNTk3LCB5OiAzNDUuNDk3MTY2NzY5MDgxNywgZ3JvdXA6IDIgfSxcclxuICAgICAgICB7IGlkOiAnUGVycGV0dWUnLCB4OiAzNjcuNTM4MzMxMzI4OTM5NzYsIHk6IDE5NC41NTU2NDgyMzA2MjcxLCBncm91cDogMyB9LFxyXG4gICAgICAgIHsgaWQ6ICdTaW1wbGljZScsIHg6IDQwMS4zNjIyMjUyMzU0NjU1LCB5OiAyNDIuOTk4Mjg0Nzk5NDU3NiwgZ3JvdXA6IDIgfSxcclxuICAgICAgICB7IGlkOiAnU2NhdWZmbGFpcmUnLCB4OiA0MTQuNjcwNzI3OTk2Mjc1NzMsIHk6IDM0NC4wNTQ3NzIwOTQ1NzM2LCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdXb21hbjEnLCB4OiA0MjEuNDE2NzQxNDM5MjQyNiwgeTogMjkzLjMxMTIwMjE5MTI5Mzk0LCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdKdWRnZScsIHg6IDQyMC4wNDM5MjAwNzg0MTMzNSwgeTogNDAxLjAzMjMzNjA5MTUyNzQ0LCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdDaGFtcG1hdGhpZXUnLCB4OiAzNzcuNzk1MjQyNTQ2MjE4MzMsIHk6IDM4My44MTA1Nzg3MTE1MTAyLCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdCcmV2ZXQnLCB4OiA0MDEuOTUyOTg0NDQ2OTk5MiwgeTogMzg4Ljg2ODQ3ODI5ODc0MTEsIGdyb3VwOiAyIH0sXHJcbiAgICAgICAgeyBpZDogJ0NoZW5pbGRpZXUnLCB4OiA0MDAuNjY4NTcwNzEzMzUzOCwgeTogNDEzLjQ5NDE3NzkwNTIzNDY2LCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdDb2NoZXBhaWxsZScsIHg6IDM3OS4wNDk2OTcwNDQ2MjM1NCwgeTogNDA0LjI2OTc0MDU5MjMzMTYzLCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdQb250bWVyY3knLCB4OiA1NTMuMTEzNzQwMTc1MDE5OCwgeTogMjQ0LjkyODMwMDI3MzYwNzY1LCBncm91cDogNCB9LFxyXG4gICAgICAgIHsgaWQ6ICdCb3VsYXRydWVsbGUnLCB4OiA0OTAuMTU3MTA4NjA4NjkzMiwgeTogMjQ5LjIxMDE5MjM4MzU4MDMsIGdyb3VwOiA2IH0sXHJcbiAgICAgICAgeyBpZDogJ0Vwb25pbmUnLCB4OiA1NDkuNzU4NDI2NzU3MTg5MiwgeTogMzAyLjkwMzEwNjUyMjg0MzEsIGdyb3VwOiA0IH0sXHJcbiAgICAgICAgeyBpZDogJ0FuemVsbWEnLCB4OiA1MTUuMzgwNzM5OTM5NTEzNCwgeTogMjU3LjAxNzk2ODg5ODM5MTEsIGdyb3VwOiA0IH0sXHJcbiAgICAgICAgeyBpZDogJ1dvbWFuMicsIHg6IDQzMy42NjA4NjY1MzQwNTE0LCB5OiAyNjUuODE3NDY3Mzg4NjYzNCwgZ3JvdXA6IDUgfSxcclxuICAgICAgICB7IGlkOiAnTW90aGVySW5ub2NlbnQnLCB4OiA0MDMuMDI1MzYyNTc0MTY1MjMsIHk6IDI4OS4wMzMxMjIwMDEyMTMyNiwgZ3JvdXA6IDAgfSxcclxuICAgICAgICB7IGlkOiAnR3JpYmllcicsIHg6IDM0MS44MDk3MzIyNzQ1Njc3NSwgeTogMjk0LjIxMjM5NjE0ODAyMywgZ3JvdXA6IDAgfSxcclxuICAgICAgICB7IGlkOiAnSm9uZHJldHRlJywgeDogNTY1LjE5NjUzMDM0MjIxODYsIHk6IDQ3MC42NTk1MDM0OTM3NTg1NiwgZ3JvdXA6IDcgfSxcclxuICAgICAgICB7IGlkOiAnTW1lLkJ1cmdvbicsIHg6IDU2OS4xODk2MjY5MjQyMTAxLCB5OiA0MjYuNjYxODUwNTM4MjQ1NjMsIGdyb3VwOiA3IH0sXHJcbiAgICAgICAgeyBpZDogJ0dhdnJvY2hlJywgeDogNTcyLjE2MTkzOTM5MzY4MjYsIHk6IDM2NC4yMjYwNjc2NjQ5NzU2MywgZ3JvdXA6IDggfSxcclxuICAgICAgICB7IGlkOiAnR2lsbGVub3JtYW5kJywgeDogNTI0LjU5MTQ1MDUyMDgwMDUsIHk6IDI1Ny40MDEyMjE0ODI4MzM2LCBncm91cDogNSB9LFxyXG4gICAgICAgIHsgaWQ6ICdNYWdub24nLCB4OiA0OTIuNTQ4MzkzMjAyMzQxLCB5OiAyMjIuNTk2NjM1MTMyODg4NSwgZ3JvdXA6IDUgfSxcclxuICAgICAgICB7IGlkOiAnTWxsZS5HaWxsZW5vcm1hbmQnLCB4OiA1MTQuMzY5MjY1NTAyMzY0NCwgeTogMjI5LjA5NjcwMDYyMzg5MjgxLCBncm91cDogNSB9LFxyXG4gICAgICAgIHsgaWQ6ICdNbWUuUG9udG1lcmN5JywgeDogNTQ5LjMyNTA1MDgxNzE0NzQsIHk6IDE5Ni4xNDA1NjgzMzA4NDkzNiwgZ3JvdXA6IDUgfSxcclxuICAgICAgICB7IGlkOiAnTWxsZS5WYXVib2lzJywgeDogNTE3Ljg1OTM1NzIzOTQwNzEsIHk6IDE4Ni4yNDg4MzA5MTExNTY1LCBncm91cDogNSB9LFxyXG4gICAgICAgIHsgaWQ6ICdMdC5HaWxsZW5vcm1hbmQnLCB4OiA1NDMuMjc0OTYxMTM5NDU1LCB5OiAyMjMuNjgxODQyODUxODA5NzYsIGdyb3VwOiA1IH0sXHJcbiAgICAgICAgeyBpZDogJ01hcml1cycsIHg6IDU3NC4yNTc2Njk5MDU2MTM5LCB5OiAyODMuODUyMTE3MDgzMTAzMzQsIGdyb3VwOiA4IH0sXHJcbiAgICAgICAgeyBpZDogJ0Jhcm9uZXNzVCcsIHg6IDU3My43MTQwOTA5NjUwNjI1LCB5OiAyNDUuNTkzMTE5MDkyNDU4MTgsIGdyb3VwOiA1IH0sXHJcbiAgICAgICAgeyBpZDogJ01hYmV1ZicsIHg6IDYyOC41NDMyNTMyNDg2MTkxLCB5OiAzMTQuMjIwNzg0MDg2MjcxNjQsIGdyb3VwOiA4IH0sXHJcbiAgICAgICAgeyBpZDogJ0Vuam9scmFzJywgeDogNTg4LjIzOTU0OTgwOTM2MjYsIHk6IDM0Mi4wNTk0NDY5OTIzMjc5LCBncm91cDogOCB9LFxyXG4gICAgICAgIHsgaWQ6ICdDb21iZWZlcnJlJywgeDogNjM3LjczNzA2NjQ2MTQ2MzcsIHk6IDM1MS42OTIzNTc2Mjc4ODM5NSwgZ3JvdXA6IDggfSxcclxuICAgICAgICB7IGlkOiAnUHJvdXZhaXJlJywgeDogNjUwLjg4MzM1MjI4Njk5MDMsIHk6IDM4Ni44MzkxODEwMzUwOTkxNiwgZ3JvdXA6IDggfSxcclxuICAgICAgICB7IGlkOiAnRmV1aWxseScsIHg6IDYyNi44NTU2NjA2NDM4MTA5LCB5OiAzNjUuOTA4NDE2NDU5MzE0MSwgZ3JvdXA6IDggfSxcclxuICAgICAgICB7IGlkOiAnQ291cmZleXJhYycsIHg6IDYyOC4zNDQ4OTg5OTc1MDEzLCB5OiAzMzYuNzY2NjQ1NDExOTAyMiwgZ3JvdXA6IDggfSxcclxuICAgICAgICB7IGlkOiAnQmFob3JlbCcsIHg6IDY1Ni43NzE3NzcyNzY0OTg1LCB5OiAzNjIuNTg4NTg4MjUwOTE4OSwgZ3JvdXA6IDggfSxcclxuICAgICAgICB7IGlkOiAnQm9zc3VldCcsIHg6IDU5OS4wMTg1NzY1NzQzMTA3LCB5OiAzNjMuODI4NjcyMzQwNzA1MywgZ3JvdXA6IDggfSxcclxuICAgICAgICB7IGlkOiAnSm9seScsIHg6IDY1Ni42MTgyOTIzNzM1NDA4LCB5OiAzNDMuMjM3NTczMzU1OTE2NSwgZ3JvdXA6IDggfSxcclxuICAgICAgICB7IGlkOiAnR3JhbnRhaXJlJywgeDogNjM4LjQzNzU4NTUzMTQ5ODgsIHk6IDQwMi40Mzg3MjUwMzc4OTk1LCBncm91cDogOCB9LFxyXG4gICAgICAgIHsgaWQ6ICdNb3RoZXJQbHV0YXJjaCcsIHg6IDY2NC41NTY3MjM4NjE4ODMsIHk6IDI5OC4wMzM2OTY0NTI2Nzg2LCBncm91cDogOSB9LFxyXG4gICAgICAgIHsgaWQ6ICdHdWV1bGVtZXInLCB4OiA1MDguMTY0NTA1MjU4MTc4MDUsIHk6IDMzMC40NTAyOTA3NDQ0MzY3LCBncm91cDogNCB9LFxyXG4gICAgICAgIHsgaWQ6ICdCYWJldCcsIHg6IDQ5Mi41NjAwNTI3OTg4MjA5NSwgeTogMzI1Ljk4MzQwOTI4NDg0MjcsIGdyb3VwOiA0IH0sXHJcbiAgICAgICAgeyBpZDogJ0NsYXF1ZXNvdXMnLCB4OiA1MTAuOTM4NTU1MDYyNTAwNzcsIHk6IDMwOS4yODY5MzgwNjk3MzI4LCBncm91cDogNCB9LFxyXG4gICAgICAgIHsgaWQ6ICdNb250cGFybmFzc2UnLCB4OiA1MDIuNzE5MDg5NDE3MzU1NywgeTogMzUwLjkyNzUxODMxMzM0MzgsIGdyb3VwOiA0IH0sXHJcbiAgICAgICAgeyBpZDogJ1RvdXNzYWludCcsIHg6IDQ0NS4xMjU0ODAyMDU2ODA3LCB5OiAyNjYuNDYyNDI2NjUwMjIwMDQsIGdyb3VwOiA1IH0sXHJcbiAgICAgICAgeyBpZDogJ0NoaWxkMScsIHg6IDU4OC4wMzUxNTUyMzg2OTYxLCB5OiA0MTAuMjE5NTU1NTk2MTk5NiwgZ3JvdXA6IDEwIH0sXHJcbiAgICAgICAgeyBpZDogJ0NoaWxkMicsIHg6IDU1OS4yNzc3ODE0NzgyNzA1LCB5OiA0MDguMzUzMzE4NDg5MzU2OSwgZ3JvdXA6IDEwIH0sXHJcbiAgICAgICAgeyBpZDogJ0JydWpvbicsIHg6IDUzNy4xNzg3MzgzOTA0NjU2LCB5OiAzMzcuODY5MjI3NzU5MTc5NDcsIGdyb3VwOiA0IH0sXHJcbiAgICAgICAgeyBpZDogJ01tZS5IdWNoZWxvdXAnLCB4OiA2MjYuMzc3NTg1MDQ2NjE2NCwgeTogMzg0LjM1MjAyMDY2ODk0NTE2LCBncm91cDogOCB9XHJcbiAgICBdLFxyXG5cclxuICAgIGxpbmtzOiBbXHJcbiAgICAgICAgeyBzb3VyY2U6ICdOYXBvbGVvbicsIHRhcmdldDogJ015cmllbCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbGxlLkJhcHRpc3RpbmUnLCB0YXJnZXQ6ICdNeXJpZWwnLCB2YWx1ZTogOCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLk1hZ2xvaXJlJywgdGFyZ2V0OiAnTXlyaWVsJywgdmFsdWU6IDEwIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuTWFnbG9pcmUnLCB0YXJnZXQ6ICdNbGxlLkJhcHRpc3RpbmUnLCB2YWx1ZTogNiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ291bnRlc3NkZUxvJywgdGFyZ2V0OiAnTXlyaWVsJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dlYm9yYW5kJywgdGFyZ2V0OiAnTXlyaWVsJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NoYW1wdGVyY2llcicsIHRhcmdldDogJ015cmllbCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDcmF2YXR0ZScsIHRhcmdldDogJ015cmllbCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3VudCcsIHRhcmdldDogJ015cmllbCcsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdPbGRNYW4nLCB0YXJnZXQ6ICdNeXJpZWwnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnVmFsamVhbicsIHRhcmdldDogJ0xhYmFycmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnVmFsamVhbicsIHRhcmdldDogJ01tZS5NYWdsb2lyZScsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdWYWxqZWFuJywgdGFyZ2V0OiAnTWxsZS5CYXB0aXN0aW5lJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1ZhbGplYW4nLCB0YXJnZXQ6ICdNeXJpZWwnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFyZ3Vlcml0ZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLmRlUicsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSXNhYmVhdScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR2VydmFpcycsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTGlzdG9saWVyJywgdGFyZ2V0OiAnVGhvbG9teWVzJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhbWV1aWwnLCB0YXJnZXQ6ICdUaG9sb215ZXMnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmFtZXVpbCcsIHRhcmdldDogJ0xpc3RvbGllcicsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCbGFjaGV2aWxsZScsIHRhcmdldDogJ1Rob2xvbXllcycsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCbGFjaGV2aWxsZScsIHRhcmdldDogJ0xpc3RvbGllcicsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCbGFjaGV2aWxsZScsIHRhcmdldDogJ0ZhbWV1aWwnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmF2b3VyaXRlJywgdGFyZ2V0OiAnVGhvbG9teWVzJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Zhdm91cml0ZScsIHRhcmdldDogJ0xpc3RvbGllcicsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYXZvdXJpdGUnLCB0YXJnZXQ6ICdGYW1ldWlsJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Zhdm91cml0ZScsIHRhcmdldDogJ0JsYWNoZXZpbGxlJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0RhaGxpYScsIHRhcmdldDogJ1Rob2xvbXllcycsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdEYWhsaWEnLCB0YXJnZXQ6ICdMaXN0b2xpZXInLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRGFobGlhJywgdGFyZ2V0OiAnRmFtZXVpbCcsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdEYWhsaWEnLCB0YXJnZXQ6ICdCbGFjaGV2aWxsZScsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdEYWhsaWEnLCB0YXJnZXQ6ICdGYXZvdXJpdGUnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnWmVwaGluZScsIHRhcmdldDogJ1Rob2xvbXllcycsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdaZXBoaW5lJywgdGFyZ2V0OiAnTGlzdG9saWVyJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1plcGhpbmUnLCB0YXJnZXQ6ICdGYW1ldWlsJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1plcGhpbmUnLCB0YXJnZXQ6ICdCbGFjaGV2aWxsZScsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdaZXBoaW5lJywgdGFyZ2V0OiAnRmF2b3VyaXRlJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1plcGhpbmUnLCB0YXJnZXQ6ICdEYWhsaWEnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmFudGluZScsIHRhcmdldDogJ1Rob2xvbXllcycsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYW50aW5lJywgdGFyZ2V0OiAnTGlzdG9saWVyJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhbnRpbmUnLCB0YXJnZXQ6ICdGYW1ldWlsJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhbnRpbmUnLCB0YXJnZXQ6ICdCbGFjaGV2aWxsZScsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYW50aW5lJywgdGFyZ2V0OiAnRmF2b3VyaXRlJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhbnRpbmUnLCB0YXJnZXQ6ICdEYWhsaWEnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmFudGluZScsIHRhcmdldDogJ1plcGhpbmUnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmFudGluZScsIHRhcmdldDogJ01hcmd1ZXJpdGUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmFudGluZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogOSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLlRoZW5hcmRpZXInLCB0YXJnZXQ6ICdGYW50aW5lJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5UaGVuYXJkaWVyJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiA3IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdUaGVuYXJkaWVyJywgdGFyZ2V0OiAnTW1lLlRoZW5hcmRpZXInLCB2YWx1ZTogMTMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1RoZW5hcmRpZXInLCB0YXJnZXQ6ICdGYW50aW5lJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1RoZW5hcmRpZXInLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3NldHRlJywgdGFyZ2V0OiAnTW1lLlRoZW5hcmRpZXInLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29zZXR0ZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMzEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Nvc2V0dGUnLCB0YXJnZXQ6ICdUaG9sb215ZXMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29zZXR0ZScsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSmF2ZXJ0JywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxNyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSmF2ZXJ0JywgdGFyZ2V0OiAnRmFudGluZScsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKYXZlcnQnLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0phdmVydCcsIHRhcmdldDogJ01tZS5UaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0phdmVydCcsIHRhcmdldDogJ0Nvc2V0dGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmF1Y2hlbGV2ZW50JywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiA4IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYXVjaGVsZXZlbnQnLCB0YXJnZXQ6ICdKYXZlcnQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFtYXRhYm9pcycsIHRhcmdldDogJ0ZhbnRpbmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFtYXRhYm9pcycsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYW1hdGFib2lzJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdQZXJwZXR1ZScsIHRhcmdldDogJ0ZhbnRpbmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnU2ltcGxpY2UnLCB0YXJnZXQ6ICdQZXJwZXR1ZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdTaW1wbGljZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnU2ltcGxpY2UnLCB0YXJnZXQ6ICdGYW50aW5lJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1NpbXBsaWNlJywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1NjYXVmZmxhaXJlJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdXb21hbjEnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1dvbWFuMScsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKdWRnZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSnVkZ2UnLCB0YXJnZXQ6ICdCYW1hdGFib2lzJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NoYW1wbWF0aGlldScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hhbXBtYXRoaWV1JywgdGFyZ2V0OiAnSnVkZ2UnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hhbXBtYXRoaWV1JywgdGFyZ2V0OiAnQmFtYXRhYm9pcycsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCcmV2ZXQnLCB0YXJnZXQ6ICdKdWRnZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCcmV2ZXQnLCB0YXJnZXQ6ICdDaGFtcG1hdGhpZXUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQnJldmV0JywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCcmV2ZXQnLCB0YXJnZXQ6ICdCYW1hdGFib2lzJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NoZW5pbGRpZXUnLCB0YXJnZXQ6ICdKdWRnZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDaGVuaWxkaWV1JywgdGFyZ2V0OiAnQ2hhbXBtYXRoaWV1JywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NoZW5pbGRpZXUnLCB0YXJnZXQ6ICdCcmV2ZXQnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hlbmlsZGlldScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hlbmlsZGlldScsIHRhcmdldDogJ0JhbWF0YWJvaXMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29jaGVwYWlsbGUnLCB0YXJnZXQ6ICdKdWRnZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb2NoZXBhaWxsZScsIHRhcmdldDogJ0NoYW1wbWF0aGlldScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb2NoZXBhaWxsZScsIHRhcmdldDogJ0JyZXZldCcsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb2NoZXBhaWxsZScsIHRhcmdldDogJ0NoZW5pbGRpZXUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29jaGVwYWlsbGUnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvY2hlcGFpbGxlJywgdGFyZ2V0OiAnQmFtYXRhYm9pcycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdQb250bWVyY3knLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JvdWxhdHJ1ZWxsZScsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRXBvbmluZScsIHRhcmdldDogJ01tZS5UaGVuYXJkaWVyJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Vwb25pbmUnLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0FuemVsbWEnLCB0YXJnZXQ6ICdFcG9uaW5lJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0FuemVsbWEnLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0FuemVsbWEnLCB0YXJnZXQ6ICdNbWUuVGhlbmFyZGllcicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdXb21hbjInLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1dvbWFuMicsIHRhcmdldDogJ0Nvc2V0dGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnV29tYW4yJywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01vdGhlcklubm9jZW50JywgdGFyZ2V0OiAnRmF1Y2hlbGV2ZW50JywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01vdGhlcklubm9jZW50JywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHcmliaWVyJywgdGFyZ2V0OiAnRmF1Y2hlbGV2ZW50JywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5CdXJnb24nLCB0YXJnZXQ6ICdKb25kcmV0dGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR2F2cm9jaGUnLCB0YXJnZXQ6ICdNbWUuQnVyZ29uJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dhdnJvY2hlJywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHYXZyb2NoZScsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHYXZyb2NoZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR2lsbGVub3JtYW5kJywgdGFyZ2V0OiAnQ29zZXR0ZScsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHaWxsZW5vcm1hbmQnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hZ25vbicsIHRhcmdldDogJ0dpbGxlbm9ybWFuZCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYWdub24nLCB0YXJnZXQ6ICdNbWUuVGhlbmFyZGllcicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbGxlLkdpbGxlbm9ybWFuZCcsIHRhcmdldDogJ0dpbGxlbm9ybWFuZCcsIHZhbHVlOiA5IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbGxlLkdpbGxlbm9ybWFuZCcsIHRhcmdldDogJ0Nvc2V0dGUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWxsZS5HaWxsZW5vcm1hbmQnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5Qb250bWVyY3knLCB0YXJnZXQ6ICdNbGxlLkdpbGxlbm9ybWFuZCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuUG9udG1lcmN5JywgdGFyZ2V0OiAnUG9udG1lcmN5JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01sbGUuVmF1Ym9pcycsIHRhcmdldDogJ01sbGUuR2lsbGVub3JtYW5kJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0x0LkdpbGxlbm9ybWFuZCcsIHRhcmdldDogJ01sbGUuR2lsbGVub3JtYW5kJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0x0LkdpbGxlbm9ybWFuZCcsIHRhcmdldDogJ0dpbGxlbm9ybWFuZCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdMdC5HaWxsZW5vcm1hbmQnLCB0YXJnZXQ6ICdDb3NldHRlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ01sbGUuR2lsbGVub3JtYW5kJywgdmFsdWU6IDYgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ0dpbGxlbm9ybWFuZCcsIHZhbHVlOiAxMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFyaXVzJywgdGFyZ2V0OiAnUG9udG1lcmN5JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ0x0LkdpbGxlbm9ybWFuZCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJpdXMnLCB0YXJnZXQ6ICdDb3NldHRlJywgdmFsdWU6IDIxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJpdXMnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDE5IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJpdXMnLCB0YXJnZXQ6ICdUaG9sb215ZXMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFyaXVzJywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJpdXMnLCB0YXJnZXQ6ICdFcG9uaW5lJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Jhcm9uZXNzVCcsIHRhcmdldDogJ0dpbGxlbm9ybWFuZCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYXJvbmVzc1QnLCB0YXJnZXQ6ICdNYXJpdXMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFiZXVmJywgdGFyZ2V0OiAnTWFyaXVzJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hYmV1ZicsIHRhcmdldDogJ0Vwb25pbmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFiZXVmJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRW5qb2xyYXMnLCB0YXJnZXQ6ICdNYXJpdXMnLCB2YWx1ZTogNyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRW5qb2xyYXMnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiA3IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdFbmpvbHJhcycsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdFbmpvbHJhcycsIHRhcmdldDogJ01hYmV1ZicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdFbmpvbHJhcycsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29tYmVmZXJyZScsIHRhcmdldDogJ0Vuam9scmFzJywgdmFsdWU6IDE1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb21iZWZlcnJlJywgdGFyZ2V0OiAnTWFyaXVzJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvbWJlZmVycmUnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb21iZWZlcnJlJywgdGFyZ2V0OiAnTWFiZXVmJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1Byb3V2YWlyZScsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1Byb3V2YWlyZScsIHRhcmdldDogJ0Vuam9scmFzJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1Byb3V2YWlyZScsIHRhcmdldDogJ0NvbWJlZmVycmUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmV1aWxseScsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZldWlsbHknLCB0YXJnZXQ6ICdFbmpvbHJhcycsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGZXVpbGx5JywgdGFyZ2V0OiAnUHJvdXZhaXJlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZldWlsbHknLCB0YXJnZXQ6ICdDb21iZWZlcnJlJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZldWlsbHknLCB0YXJnZXQ6ICdNYWJldWYnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmV1aWxseScsIHRhcmdldDogJ01hcml1cycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3VyZmV5cmFjJywgdGFyZ2V0OiAnTWFyaXVzJywgdmFsdWU6IDkgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvdXJmZXlyYWMnLCB0YXJnZXQ6ICdFbmpvbHJhcycsIHZhbHVlOiAxNyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ291cmZleXJhYycsIHRhcmdldDogJ0NvbWJlZmVycmUnLCB2YWx1ZTogMTMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvdXJmZXlyYWMnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiA3IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3VyZmV5cmFjJywgdGFyZ2V0OiAnTWFiZXVmJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvdXJmZXlyYWMnLCB0YXJnZXQ6ICdFcG9uaW5lJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvdXJmZXlyYWMnLCB0YXJnZXQ6ICdGZXVpbGx5JywgdmFsdWU6IDYgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvdXJmZXlyYWMnLCB0YXJnZXQ6ICdQcm91dmFpcmUnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFob3JlbCcsIHRhcmdldDogJ0NvbWJlZmVycmUnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFob3JlbCcsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhaG9yZWwnLCB0YXJnZXQ6ICdDb3VyZmV5cmFjJywgdmFsdWU6IDYgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhaG9yZWwnLCB0YXJnZXQ6ICdNYWJldWYnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFob3JlbCcsIHRhcmdldDogJ0Vuam9scmFzJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhaG9yZWwnLCB0YXJnZXQ6ICdGZXVpbGx5JywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhaG9yZWwnLCB0YXJnZXQ6ICdQcm91dmFpcmUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFob3JlbCcsIHRhcmdldDogJ01hcml1cycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCb3NzdWV0JywgdGFyZ2V0OiAnTWFyaXVzJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Jvc3N1ZXQnLCB0YXJnZXQ6ICdDb3VyZmV5cmFjJywgdmFsdWU6IDEyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCb3NzdWV0JywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQm9zc3VldCcsIHRhcmdldDogJ0JhaG9yZWwnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQm9zc3VldCcsIHRhcmdldDogJ0Vuam9scmFzJywgdmFsdWU6IDEwIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCb3NzdWV0JywgdGFyZ2V0OiAnRmV1aWxseScsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCb3NzdWV0JywgdGFyZ2V0OiAnUHJvdXZhaXJlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Jvc3N1ZXQnLCB0YXJnZXQ6ICdDb21iZWZlcnJlJywgdmFsdWU6IDkgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Jvc3N1ZXQnLCB0YXJnZXQ6ICdNYWJldWYnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQm9zc3VldCcsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSm9seScsIHRhcmdldDogJ0JhaG9yZWwnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSm9seScsIHRhcmdldDogJ0Jvc3N1ZXQnLCB2YWx1ZTogNyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSm9seScsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0pvbHknLCB0YXJnZXQ6ICdDb3VyZmV5cmFjJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0pvbHknLCB0YXJnZXQ6ICdFbmpvbHJhcycsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKb2x5JywgdGFyZ2V0OiAnRmV1aWxseScsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKb2x5JywgdGFyZ2V0OiAnUHJvdXZhaXJlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0pvbHknLCB0YXJnZXQ6ICdDb21iZWZlcnJlJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0pvbHknLCB0YXJnZXQ6ICdNYWJldWYnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSm9seScsIHRhcmdldDogJ01hcml1cycsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHcmFudGFpcmUnLCB0YXJnZXQ6ICdCb3NzdWV0JywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dyYW50YWlyZScsIHRhcmdldDogJ0Vuam9scmFzJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dyYW50YWlyZScsIHRhcmdldDogJ0NvbWJlZmVycmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3JhbnRhaXJlJywgdGFyZ2V0OiAnQ291cmZleXJhYycsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHcmFudGFpcmUnLCB0YXJnZXQ6ICdKb2x5JywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dyYW50YWlyZScsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dyYW50YWlyZScsIHRhcmdldDogJ0JhaG9yZWwnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3JhbnRhaXJlJywgdGFyZ2V0OiAnRmV1aWxseScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHcmFudGFpcmUnLCB0YXJnZXQ6ICdQcm91dmFpcmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW90aGVyUGx1dGFyY2gnLCB0YXJnZXQ6ICdNYWJldWYnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3VldWxlbWVyJywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHdWV1bGVtZXInLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0d1ZXVsZW1lcicsIHRhcmdldDogJ01tZS5UaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0d1ZXVsZW1lcicsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHdWV1bGVtZXInLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHdWV1bGVtZXInLCB0YXJnZXQ6ICdFcG9uaW5lJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhYmV0JywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWJldCcsIHRhcmdldDogJ0d1ZXVsZW1lcicsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWJldCcsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFiZXQnLCB0YXJnZXQ6ICdNbWUuVGhlbmFyZGllcicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWJldCcsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWJldCcsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhYmV0JywgdGFyZ2V0OiAnRXBvbmluZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDbGFxdWVzb3VzJywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDbGFxdWVzb3VzJywgdGFyZ2V0OiAnQmFiZXQnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2xhcXVlc291cycsIHRhcmdldDogJ0d1ZXVsZW1lcicsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDbGFxdWVzb3VzJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDbGFxdWVzb3VzJywgdGFyZ2V0OiAnTW1lLlRoZW5hcmRpZXInLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2xhcXVlc291cycsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDbGFxdWVzb3VzJywgdGFyZ2V0OiAnRXBvbmluZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDbGFxdWVzb3VzJywgdGFyZ2V0OiAnRW5qb2xyYXMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW9udHBhcm5hc3NlJywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01vbnRwYXJuYXNzZScsIHRhcmdldDogJ0JhYmV0JywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01vbnRwYXJuYXNzZScsIHRhcmdldDogJ0d1ZXVsZW1lcicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNb250cGFybmFzc2UnLCB0YXJnZXQ6ICdDbGFxdWVzb3VzJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01vbnRwYXJuYXNzZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW9udHBhcm5hc3NlJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW9udHBhcm5hc3NlJywgdGFyZ2V0OiAnRXBvbmluZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNb250cGFybmFzc2UnLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1RvdXNzYWludCcsIHRhcmdldDogJ0Nvc2V0dGUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnVG91c3NhaW50JywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1RvdXNzYWludCcsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hpbGQxJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hpbGQyJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hpbGQyJywgdGFyZ2V0OiAnQ2hpbGQxJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JydWpvbicsIHRhcmdldDogJ0JhYmV0JywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JydWpvbicsIHRhcmdldDogJ0d1ZXVsZW1lcicsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCcnVqb24nLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JydWpvbicsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JydWpvbicsIHRhcmdldDogJ0Vwb25pbmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQnJ1am9uJywgdGFyZ2V0OiAnQ2xhcXVlc291cycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCcnVqb24nLCB0YXJnZXQ6ICdNb250cGFybmFzc2UnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLkh1Y2hlbG91cCcsIHRhcmdldDogJ0Jvc3N1ZXQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLkh1Y2hlbG91cCcsIHRhcmdldDogJ0pvbHknLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLkh1Y2hlbG91cCcsIHRhcmdldDogJ0dyYW50YWlyZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuSHVjaGVsb3VwJywgdGFyZ2V0OiAnQmFob3JlbCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuSHVjaGVsb3VwJywgdGFyZ2V0OiAnQ291cmZleXJhYycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuSHVjaGVsb3VwJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLkh1Y2hlbG91cCcsIHRhcmdldDogJ0Vuam9scmFzJywgdmFsdWU6IDEgfVxyXG4gICAgXVxyXG59XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIEppYWNoZW5nIFBhbiA8amFja2llYW54aXNAZ21haWwuY29tPlxyXG4gKiBAZGVzY3JpcHRpb24gUHJvdmlkZSB0aGUgZW50cmFuY2Ugb2YgTmV0Vi5qcy5cclxuICogQGRlcGVuZGVuY2VzIGludGVyZmFjZXMudHMsIHV0aWxzL21hcDIuanMsIG5vZGUudHMsIGxpbmsudHNcclxuICovXHJcblxyXG5pbXBvcnQgKiBhcyBpbnRlcmZhY2VzIGZyb20gJy4vaW50ZXJmYWNlcydcclxuaW1wb3J0IE1hcDIgZnJvbSAnLi91dGlscy9tYXAyJ1xyXG5pbXBvcnQgTm9kZSBmcm9tICcuL25vZGUnXHJcbmltcG9ydCBMaW5rIGZyb20gJy4vbGluaydcclxuaW1wb3J0ICogYXMgZGVmYXVsdENvbmZpZ3MgZnJvbSAnLi9jb25maWdzJ1xyXG5pbXBvcnQgKiBhcyBkYXRhc2V0IGZyb20gJy4vZGF0YXNldCdcclxuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuL3JlbmRlcmVyJ1xyXG5pbXBvcnQgeyBJbnRlcmFjdGlvbk1hbmFnZXIgfSBmcm9tICcuL2ludGVyYWN0aW9uL2ludGVyYWN0aW9uJ1xyXG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzL3V0aWxzJ1xyXG5pbXBvcnQgeyBsaW5rIH0gZnJvbSAnYnVpbGQvTmV0VidcclxuXHJcbmNsYXNzIE5ldFYge1xyXG4gICAgcHVibGljIFV0aWxzID0gVXRpbHNcclxuXHJcbiAgICBwdWJsaWMgJF9pZDJub2RlID0gbmV3IE1hcCgpXHJcbiAgICBwdWJsaWMgJF9lbmRzMmxpbmsgPSBuZXcgTWFwMigpXHJcbiAgICBwdWJsaWMgJF9pZDJsaW5rczogTWFwPHN0cmluZywgU2V0PExpbms+PiA9IG5ldyBNYXAoKVxyXG4gICAgcHVibGljICRfY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudFxyXG4gICAgcHVibGljICRfcmVuZGVyZXI6IFJlbmRlcmVyXHJcbiAgICBwdWJsaWMgJF9jb25maWdzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkZWZhdWx0Q29uZmlncykpIC8vIE5PVEU6IGRlZXAgY29weSBjb25maWdzXHJcbiAgICBwdWJsaWMgJF9pbnRlcmFjdGlvbjogSW50ZXJhY3Rpb25NYW5hZ2VyXHJcblxyXG4gICAgcHJpdmF0ZSAkX2RhdGE6IGludGVyZmFjZXMuTm9kZUxpbmtEYXRhID0geyBub2RlczogW10sIGxpbmtzOiBbXSB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gY3JlYXRlIE5ldFYgb2JqZWN0LlxyXG4gICAgICogQHBhcmFtIGNvbmZpZ3MgY29uZmlndXJhdGlvbnMgb2YgTmV0ViwgbXVzdCBpbmNsdWRlIGEgYGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnRgIHRlcm1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZ3M6IGFueSkge1xyXG4gICAgICAgIGlmICghKCdjb250YWluZXInIGluIGNvbmZpZ3MpIHx8IGNvbmZpZ3MuY29udGFpbmVyLnRhZ05hbWUgIT09ICdESVYnKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdDb250YWluZXIgc2hvdWxkIGJlIHNwZWNpZmllZCBhcyBhIGRpdiBlbGVtZW50IScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuJF9jb250YWluZXIgPSBjb25maWdzLmNvbnRhaW5lclxyXG4gICAgICAgIC8vIG92ZXJyaWRlIGNvbmZpZ3NcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb25maWdzKSB7XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdjb250YWluZXInKSBjb250aW51ZSAvLyBOT1RFOiBleGNsdWRlIGNvbnRhaW5lciBpbiBjb25maWdzXHJcbiAgICAgICAgICAgIGlmIChjb25maWdzW2tleV0gPT09IE9iamVjdChjb25maWdzW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRfY29uZmlnc1trZXldID0geyAuLi50aGlzLiRfY29uZmlnc1trZXldLCAuLi5jb25maWdzW2tleV0gfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kX2NvbmZpZ3Nba2V5XSA9IGNvbmZpZ3Nba2V5XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSAvLyBUT0RPOiBjb25zaWRlciBub2RlIGVudmlyb21lbnQsIGRvY3VtZW50IG5vdCBkZWZpbmVkXHJcbiAgICAgICAgY29uc3QgcGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcclxuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSB0aGlzLiRfY29uZmlncy53aWR0aCArICdweCdcclxuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gdGhpcy4kX2NvbmZpZ3MuaGVpZ2h0ICsgJ3B4J1xyXG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgU3RyaW5nKHRoaXMuJF9jb25maWdzLndpZHRoICogcGl4ZWxSYXRpbykpXHJcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgU3RyaW5nKHRoaXMuJF9jb25maWdzLmhlaWdodCAqIHBpeGVsUmF0aW8pKVxyXG4gICAgICAgIHRoaXMuJF9jb250YWluZXIuYXBwZW5kQ2hpbGQoY2FudmFzKVxyXG5cclxuICAgICAgICB0aGlzLiRfcmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoe1xyXG4gICAgICAgICAgICBjYW52YXMsXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLiRfY29uZmlncy53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLiRfY29uZmlncy5oZWlnaHQsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy4kX2NvbmZpZ3MuYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICBub2RlTGltaXQ6IHRoaXMuJF9jb25maWdzLm5vZGVMaW1pdCxcclxuICAgICAgICAgICAgbGlua0xpbWl0OiB0aGlzLiRfY29uZmlncy5saW5rTGltaXRcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLiRfaW50ZXJhY3Rpb24gPSBuZXcgSW50ZXJhY3Rpb25NYW5hZ2VyKHRoaXMpXHJcbiAgICAgICAgaWYgKHRoaXMuJF9jb25maWdzLmVuYWJsZVBhblpvb20pIHtcclxuICAgICAgICAgICAgdGhpcy4kX2ludGVyYWN0aW9uLmluaXRab29tKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuJF9pbnRlcmFjdGlvbi5pbml0Q2xpY2soKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIGRhdGEgZ2V0dGVyIHNldHRlclxyXG4gICAgICogQHBhcmFtIG5vZGVMaW5rRGF0YT8gdGhlIG5vZGUtbGluay1kYXRhIG9mIGEgZ3JhcGgsIHByb3ZpZGVkP3NldHRlcjpnZXR0ZXI7XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkYXRhKG5vZGVMaW5rRGF0YT86IGludGVyZmFjZXMuTm9kZUxpbmtEYXRhKSB7XHJcbiAgICAgICAgaWYgKG5vZGVMaW5rRGF0YSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRfZGF0YVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGRlbGV0ZSBvbGQgZGF0YVxyXG4gICAgICAgICAgICB0aGlzLiRfZGF0YSA9IHsgLi4udGhpcy4kX2RhdGEsIC4uLm5vZGVMaW5rRGF0YSB9XHJcbiAgICAgICAgICAgIHRoaXMuJF9pZDJub2RlID0gbmV3IE1hcCgpXHJcbiAgICAgICAgICAgIHRoaXMuJF9lbmRzMmxpbmsgPSBuZXcgTWFwMigpXHJcbiAgICAgICAgICAgIHRoaXMuJF9pZDJsaW5rcyA9IG5ldyBNYXAoKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGROb2Rlcyh0aGlzLiRfZGF0YS5ub2RlcylcclxuICAgICAgICAgICAgdGhpcy5hZGRMaW5rcyh0aGlzLiRfZGF0YS5saW5rcylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gaW5pdGlhbGl6ZSBhbmQgYWRkIGEgbm9kZVxyXG4gICAgICogQHBhcmFtIG5vZGVEYXRhIHRoZSBkYXRhIG9mIGEgbm9kZSwgaW5jbHVkZSBpZCwgc3R5bGVzLi4uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGROb2RlKG5vZGVEYXRhOiBpbnRlcmZhY2VzLk5vZGVEYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkTm9kZXMoW25vZGVEYXRhXSlbMF1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBpbml0aWFsaXplIGFuZCBhZGQgYSBsaW5rXHJcbiAgICAgKiBAcGFyYW0gbGlua0RhdGEgdGhlIGRhdGEgb2YgYSBsaW5rLCBpbmNsdWRlIHNvdXJjZSwgdGFyZ2V0LCBhbmQgc3R5bGVzLi4uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRMaW5rKGxpbmtEYXRhOiBpbnRlcmZhY2VzLkxpbmtEYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkTGlua3MoW2xpbmtEYXRhXSlbMF1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBpbml0aWFsaXplIGFuZCBhZGQgYW4gYXJyYXkgb2Ygbm9kZXMuXHJcbiAgICAgKiBAcGFyYW0ge2ludGVyZmFjZXMuTm9kZURhdGFbXX0gbm9kZXNEYXRhOiBhIGRhdGEgYXJyYXkgb2Ygbm9kZXMgdG9iZSBhZGRlZFxyXG4gICAgICogQG1lbWJlcm9mIE5ldFZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZE5vZGVzKG5vZGVzRGF0YTogaW50ZXJmYWNlcy5Ob2RlRGF0YVtdKSB7XHJcbiAgICAgICAgY29uc3QgbmV3Tm9kZXMgPSBub2Rlc0RhdGEubWFwKChub2RlRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBub2RlRGF0YS5pZCA9IG5vZGVEYXRhLmlkLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IG5ldyBOb2RlKHRoaXMsIG5vZGVEYXRhKVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG5vZGVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuJF9yZW5kZXJlci5hZGROb2RlcyhuZXdOb2RlcylcclxuICAgICAgICByZXR1cm4gbmV3Tm9kZXNcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBpbml0aWFsaXplIGFuZCBhZGQgYW4gYXJyYXkgb2YgbGlua3MuXHJcbiAgICAgKiBAcGFyYW0ge2ludGVyZmFjZXMuTGlua0RhdGFbXX0gbGlua3NEYXRhOiBhIGRhdGEgYXJyYXkgb2YgbGlua3MgdG9iZSBhZGRlZFxyXG4gICAgICogQG1lbWJlcm9mIE5ldFZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZExpbmtzKGxpbmtzRGF0YTogaW50ZXJmYWNlcy5MaW5rRGF0YVtdKSB7XHJcbiAgICAgICAgY29uc3QgbmV3TGlua3MgPSBsaW5rc0RhdGEubWFwKChsaW5rRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBsaW5rRGF0YS5zb3VyY2UgPSBsaW5rRGF0YS5zb3VyY2UudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICBsaW5rRGF0YS50YXJnZXQgPSBsaW5rRGF0YS50YXJnZXQudG9TdHJpbmcoKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbGluayA9IG5ldyBMaW5rKHRoaXMsIGxpbmtEYXRhKVxyXG4gICAgICAgICAgICByZXR1cm4gbGlua1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy4kX3JlbmRlcmVyLmFkZExpbmtzKG5ld0xpbmtzKVxyXG4gICAgICAgIHJldHVybiBuZXdMaW5rc1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIGdldCBhIE5vZGUgb2JqZWN0IGZyb20gdGhlIGlkMm5vZGUgTWFwIGRhdGEgc3RydWN0dXJlXHJcbiAgICAgKiBAcGFyYW0gaWQgbm9kZSBpZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Tm9kZUJ5SWQoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRfaWQybm9kZS5nZXQoaWQpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gZ2V0IGEgTGluayBvYmplY3QgZnJvbSB0aGUgZW5kczJsaW5rIE1hcDIgZGF0YSBzdHJ1Y3R1cmVcclxuICAgICAqIEBwYXJhbSBlbmRJZDEgb25lIGVuZCBpZCBvZiB0aGUgbGluayAoc291cmNlIG9yIHRhcmdldClcclxuICAgICAqIEBwYXJhbSBlbmRJZDIgYW5vdGhlciBlbmQgaWQgb2YgdGhlIGxpbmsgKHNvdXJjZSBvciB0YXJnZXQpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRMaW5rQnlFbmRzKGVuZElkMTogc3RyaW5nLCBlbmRJZDI6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRfZW5kczJsaW5rLmdldChbZW5kSWQxLCBlbmRJZDJdKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIGdldCBhbGwgbm9kZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIG5vZGVzKCkge1xyXG4gICAgICAgIHJldHVybiBbLi4udGhpcy4kX2lkMm5vZGUudmFsdWVzKCldXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gZ2V0IGFsbCBsaW5rc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbGlua3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLiRfZW5kczJsaW5rLnZhbHVlcygpXVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIHdpcGUgYWxsIHRoZSBkYXRhIGluIHRoZSBpbnN0YW5jZVxyXG4gICAgICogQG1lbWJlcm9mIE5ldFZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHdpcGUoKSB7XHJcbiAgICAgICAgdGhpcy4kX2RhdGEgPSB1bmRlZmluZWRcclxuICAgICAgICB0aGlzLiRfaWQybm9kZSA9IG5ldyBNYXAoKVxyXG4gICAgICAgIHRoaXMuJF9lbmRzMmxpbmsgPSBuZXcgTWFwMigpXHJcbiAgICAgICAgdGhpcy4kX2lkMmxpbmtzID0gbmV3IE1hcCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gcmV0dXJuIGJ1aWxkLWluIGRhdGFzZXQgYWNjb3JkaW5nIHRvIG5hbWVcclxuICAgICAqIEBwYXJhbSBuYW1lIGRhdGFzZXQgbmFtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZERhdGFzZXQobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKG5hbWUgaW4gZGF0YXNldCkgcmV0dXJuIGRhdGFzZXRbbmFtZV1cclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgTmV0ViBkb2VzIG5vdCBoYXZlIGJ1aWxkLWluIGRhdGFzZXQ6ICR7bmFtZX1gKVxyXG4gICAgICAgIHJldHVybiB7IG5vZGVzOiBbXSwgbGlua3M6IFtdIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdpdmVuIHBvc2l0aW9uLCByZXR1cm4gZWxlbWVudCBvbiB0aGlzIHBpeGVsIGlmIGV4aXN0c1xyXG4gICAgICogQHBhcmFtIHggeCBwb3NcclxuICAgICAqIEBwYXJhbSB5IHkgcG9zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRFbGVtZW50QnlQb3NpdGlvbihcclxuICAgICAgICB4OiBudW1iZXIsXHJcbiAgICAgICAgeTogbnVtYmVyXHJcbiAgICApOiB7IHR5cGU6ICdub2RlJyB8ICdsaW5rJzsgZWxlbWVudDogTm9kZSB8IExpbmsgfSB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLiRfcmVuZGVyZXIuZ2V0SWRCeVBvc2l0aW9uKHgsIHkpXHJcbiAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaWQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlQnlJZChpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vZGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IG5vZGVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpZCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLmdldExpbmtCeUVuZHMoaWRbMF0sIGlkWzFdKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbGluaycsXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogbGlua1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIGRyYXcgZWxlbWVudHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy4kX3JlbmRlcmVyLmRyYXcoKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBOZXRWIH1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XHJcbiAqIEBkZXNjcmlwdGlvbiBoYW5kbGUgYWxsIGludGVyYWN0aW9uIGluIE5ldFZcclxuICovXHJcblxyXG5pbXBvcnQgeyBOZXRWIH0gZnJvbSAnc3JjJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEludGVyYWN0aW9uTWFuYWdlciB7XHJcbiAgICBwcml2YXRlIG5ldHY6IE5ldFZcclxuICAgIHByaXZhdGUgdHJhbnNmb3JtID0ge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMCxcclxuICAgICAgICBrOiAxXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGlzRHJhZ2dpbmcgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBkcmFnU3RhcnRQb3M6IHtcclxuICAgICAgICB4OiBudW1iZXJcclxuICAgICAgICB5OiBudW1iZXJcclxuICAgIH1cclxuICAgIHByaXZhdGUgZHJhZ1N0YXJ0VHJhbnNmb3JtOiB7XHJcbiAgICAgICAgeDogbnVtYmVyXHJcbiAgICAgICAgeTogbnVtYmVyXHJcbiAgICAgICAgazogbnVtYmVyXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG5ldHY6IE5ldFYpIHtcclxuICAgICAgICB0aGlzLm5ldHYgPSBuZXR2XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpbml0IHpvb20mcGFuIGludGVyYWN0aW9uXHJcbiAgICAgKiBjdXJyZW50bHkgbm8gY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXRab29tKCkge1xyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMubmV0di4kX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKVxyXG4gICAgICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9IChldnQ6IE1vdXNlV2hlZWxFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gZXZ0Lm9mZnNldFggfHwgZXZ0LnBhZ2VYIC0gY2FudmFzLm9mZnNldExlZnRcclxuICAgICAgICAgICAgY29uc3QgeSA9IGV2dC5vZmZzZXRZIHx8IGV2dC5wYWdlWSAtIGNhbnZhcy5vZmZzZXRUb3BcclxuICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBldnQuZGVsdGFZID8gZXZ0LmRlbHRhWSAvIDQwIDogZXZ0LmRldGFpbCA/IC1ldnQuZGV0YWlsIDogMFxyXG4gICAgICAgICAgICBpZiAoZGVsdGEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGsgPSBNYXRoLnBvdygxLjEsIGRlbHRhKVxyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0ueCA9ICgxIC0gaykgKiB4ICsgayAqIHRoaXMudHJhbnNmb3JtLnhcclxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLnkgPSAoMSAtIGspICogeSArIGsgKiB0aGlzLnRyYW5zZm9ybS55XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0uayAqPSBrXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXR2LiRfcmVuZGVyZXIuc2V0VHJhbnNmb3JtKHRoaXMudHJhbnNmb3JtKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXR2LmRyYXcoKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVE9ETzogbWF5YmUgY2FuIGhhbmRsZSBvbiBkaXYgaW5zdGVhZCBvZiBjYW52YXNcclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCBoYW5kbGVTY3JvbGwsIGZhbHNlKVxyXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgaGFuZGxlU2Nyb2xsLCBmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldHVwIGNsaWNrIHV0aWxpdHlcclxuICAgICAqL1xyXG4gICAgLy8gVE9ETzogbmVlZCByZW5hbWVcclxuICAgIHB1YmxpYyBpbml0Q2xpY2soKSB7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5uZXR2LiRfY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpXHJcbiAgICAgICAgY29uc3QgaGFuZGxlTW91c2VEb3duID0gKGV2dDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gZXZ0Lm9mZnNldFggfHwgZXZ0LnBhZ2VYIC0gY2FudmFzLm9mZnNldExlZnRcclxuICAgICAgICAgICAgY29uc3QgeSA9IGV2dC5vZmZzZXRZIHx8IGV2dC5wYWdlWSAtIGNhbnZhcy5vZmZzZXRUb3BcclxuICAgICAgICAgICAgY29uc3QgeUludiA9IHRoaXMubmV0di4kX2NvbmZpZ3MuaGVpZ2h0IC0geVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubmV0di5nZXRFbGVtZW50QnlQb3NpdGlvbih4LCB5SW52KVxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudD8uZWxlbWVudC4kX2NsaWNrQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuZWxlbWVudC4kX2NsaWNrQ2FsbGJhY2soZWxlbWVudC5lbGVtZW50IGFzIGFueSkgLy8gVE9ETzogbm90IGVsZWdhbnRcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ1N0YXJ0UG9zID0geyB4LCB5IH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ1N0YXJ0VHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnRyYW5zZm9ybSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IChldnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzRHJhZ2dpbmcpIHJldHVyblxyXG5cclxuICAgICAgICAgICAgY29uc3QgeCA9IGV2dC5vZmZzZXRYIHx8IGV2dC5wYWdlWCAtIGNhbnZhcy5vZmZzZXRMZWZ0XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBldnQub2Zmc2V0WSB8fCBldnQucGFnZVkgLSBjYW52YXMub2Zmc2V0VG9wXHJcblxyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS54ID0gdGhpcy5kcmFnU3RhcnRUcmFuc2Zvcm0ueCArIHggLSB0aGlzLmRyYWdTdGFydFBvcy54XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLnkgPSB0aGlzLmRyYWdTdGFydFRyYW5zZm9ybS55ICsgeSAtIHRoaXMuZHJhZ1N0YXJ0UG9zLnlcclxuXHJcbiAgICAgICAgICAgIHRoaXMubmV0di4kX3JlbmRlcmVyLnNldFRyYW5zZm9ybSh0aGlzLnRyYW5zZm9ybSlcclxuICAgICAgICAgICAgdGhpcy5uZXR2LmRyYXcoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlTW91c2VVcCA9IChldnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZU1vdXNlRG93bilcclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW91c2VNb3ZlKVxyXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlTW91c2VVcClcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogQGF1dGhvciBKaWFjaGVuZyBQYW4gPGphY2tpZWFueGlzQGdtYWlsLmNvbT5cclxuICogQGRlc2NyaXB0aW9uIFByb3ZpZGUgYSBMaW5rIGNsYXNzLlxyXG4gKiBAZGVwZW5kZW5jZXMgaW50ZXJmYWNlcy50cywgdXRpbHMvaXMudHNcclxuICovXHJcblxyXG5pbXBvcnQgTm9kZSBmcm9tICcuL25vZGUnXHJcbmltcG9ydCAqIGFzIGludGVyZmFjZXMgZnJvbSAnLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyBOZXRWIH0gZnJvbSAnLi9pbmRleCdcclxuXHJcbmNsYXNzIExpbmsge1xyXG4gICAgcHVibGljICRfY2xpY2tDYWxsYmFjazogKGxpbms6IExpbmspID0+IHZvaWRcclxuXHJcbiAgICBwcml2YXRlICRfY29yZTogTmV0VlxyXG4gICAgcHJpdmF0ZSAkX3NvdXJjZTogTm9kZVxyXG4gICAgcHJpdmF0ZSAkX3RhcmdldDogTm9kZVxyXG4gICAgcHJpdmF0ZSAkX3N0cm9rZVdpZHRoOiBudW1iZXJcclxuICAgIHByaXZhdGUgJF9zdHJva2VDb2xvcjogaW50ZXJmYWNlcy5Db2xvclxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb3JlLCBsaW5rRGF0YTogaW50ZXJmYWNlcy5MaW5rRGF0YSkge1xyXG4gICAgICAgIHRoaXMuJF9jb3JlID0gY29yZVxyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRDb25maWdzID0gdGhpcy4kX2NvcmUuJF9jb25maWdzXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgLi4ue1xyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IGRlZmF1bHRDb25maWdzLmxpbmsuc3Ryb2tlV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogZGVmYXVsdENvbmZpZ3MubGluay5zdHJva2VDb2xvcixcclxuICAgICAgICAgICAgICAgIGNsaWNrQ2FsbGJhY2s6IGRlZmF1bHRDb25maWdzLmxpbmsuY2xpY2tDYWxsYmFja1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAuLi5saW5rRGF0YVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc291cmNlTm9kZSA9IHRoaXMuJF9jb3JlLmdldE5vZGVCeUlkKGRhdGEuc291cmNlKVxyXG4gICAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSB0aGlzLiRfY29yZS5nZXROb2RlQnlJZChkYXRhLnRhcmdldClcclxuICAgICAgICB0aGlzLnNvdXJjZVRhcmdldCh7XHJcbiAgICAgICAgICAgIHNvdXJjZTogc291cmNlTm9kZSxcclxuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXROb2RlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy4kX3N0cm9rZVdpZHRoID0gZGF0YS5zdHJva2VXaWR0aFxyXG4gICAgICAgIHRoaXMuJF9zdHJva2VDb2xvciA9IGRhdGEuc3Ryb2tlQ29sb3JcclxuXHJcbiAgICAgICAgdGhpcy5zZXRDbGlja0NhbGxiYWNrKGRhdGEuY2xpY2tDYWxsYmFjaylcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldHRlci9zZXR0ZXIgb2YgdGhlIHNvdXJjZVxyXG4gICAgICogQHBhcmFtIHtOb2RlfSBbbm9kZV1cclxuICAgICAqIEByZXR1cm5zIHtOb2RlfSBhIHNvdXJjZSBOb2RlIE9iamVjdFxyXG4gICAgICogQG1lbWJlcm9mIExpbmtcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNvdXJjZShub2RlPzogTm9kZSkge1xyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIC8vIHNldHRlclxyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZVRhcmdldCh7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IG5vZGUsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMuJF90YXJnZXRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9zb3VyY2VcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldHRlci9zZXR0ZXIgb2YgdGhlIHRhcmdldFxyXG4gICAgICogQHBhcmFtIHtOb2RlfSBbbm9kZV1cclxuICAgICAqIEByZXR1cm5zIHtOb2RlfSBhIHRhcmdldCBOb2RlIE9iamVjdFxyXG4gICAgICogQG1lbWJlcm9mIExpbmtcclxuICAgICAqL1xyXG4gICAgcHVibGljIHRhcmdldChub2RlPzogTm9kZSkge1xyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIC8vIHNldHRlclxyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZVRhcmdldCh7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IHRoaXMuJF9zb3VyY2UsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IG5vZGVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF90YXJnZXRcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldHRlci9zZXR0ZXIgb2Ygc291cmNlIGFuZCB0YXJnZXRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3NvdXJjZVRhcmdldE9ian0gW3tzb3VyY2U6IE5vZGUsIHRhcmdldDogTm9kZX1dXHJcbiAgICAgKiBAcmV0dXJucyBPYmplY3Qge3NvdXJjZTogTm9kZSwgdGFyZ2V0OiBOb2RlfVxyXG4gICAgICogQG1lbWJlcm9mIExpbmtcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNvdXJjZVRhcmdldChzb3VyY2VUYXJnZXRPYmo/OiB7IHNvdXJjZTogTm9kZTsgdGFyZ2V0OiBOb2RlIH0pIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3Qgb2xkU291cmNlOiBOb2RlID0gdGhpcy4kX3NvdXJjZVxyXG4gICAgICAgICAgICBjb25zdCBvbGRUYXJnZXQ6IE5vZGUgPSB0aGlzLiRfdGFyZ2V0XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1NvdXJjZSA9IHNvdXJjZVRhcmdldE9iai5zb3VyY2VcclxuICAgICAgICAgICAgY29uc3QgbmV3VGFyZ2V0ID0gc291cmNlVGFyZ2V0T2JqLnRhcmdldFxyXG4gICAgICAgICAgICBjb25zdCBuZXdTb3VyY2VJZCA9IG5ld1NvdXJjZS5pZCgpXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1RhcmdldElkID0gbmV3VGFyZ2V0LmlkKClcclxuXHJcbiAgICAgICAgICAgIGlmIChuZXdTb3VyY2UgPT09IG5ld1RhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgLy8gZXJyb3I6IHNlbGYgbG9vcFxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTZWxmIGxvb3AgKCR7bmV3U291cmNlSWR9IDw9PiAke25ld1RhcmdldElkfSkgaXMgbm90IGFsbG93ZWQuYClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuJF9jb3JlLiRfZW5kczJsaW5rLmhhcyhbbmV3U291cmNlSWQsIG5ld1RhcmdldElkXSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGVycm9yOiBtdWx0aXBsZSBsaW5rXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGxpbmsgKCR7bmV3U291cmNlSWR9IDw9PiAke25ld1RhcmdldElkfSkgaXMgbm90IGFsbG93ZC5gKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAob2xkU291cmNlICYmIG9sZFRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgLy8gZGVsZXRlIG9sZCBNYXBcclxuICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfZW5kczJsaW5rLmRlbGV0ZShbb2xkU291cmNlLmlkKCksIG9sZFRhcmdldC5pZCgpXSlcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRfY29yZS4kX2lkMmxpbmtzLmdldChvbGRTb3VyY2UuaWQoKSk/LmRlbGV0ZSh0aGlzKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLiRfc291cmNlID0gbmV3U291cmNlXHJcbiAgICAgICAgICAgIHRoaXMuJF90YXJnZXQgPSBuZXdUYXJnZXRcclxuICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9lbmRzMmxpbmsuc2V0KFtuZXdTb3VyY2VJZCwgbmV3VGFyZ2V0SWRdLCB0aGlzKVxyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLiRfY29yZS4kX2lkMmxpbmtzLmhhcyhuZXdTb3VyY2VJZCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfaWQybGlua3Muc2V0KG5ld1NvdXJjZUlkLCBuZXcgU2V0KFt0aGlzXSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRfY29yZS4kX2lkMmxpbmtzLmdldChuZXdTb3VyY2VJZCkuYWRkKHRoaXMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc291cmNlOiB0aGlzLiRfc291cmNlLFxyXG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXMuJF90YXJnZXRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQvZ2V0IHN0cm9rZSB3aWR0aCBvZiBhIG5vZGVcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbdmFsdWVdXHJcbiAgICAgKiBAbWVtYmVyb2YgTm9kZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3Ryb2tlV2lkdGgodmFsdWU/OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLiRfc3Ryb2tlV2lkdGggPSB2YWx1ZVxyXG4gICAgICAgICAgICB0aGlzLiRfY29yZS4kX3JlbmRlcmVyLmxpbmtNYW5hZ2VyLmNoYW5nZUF0dHJpYnV0ZSh0aGlzLCAnc3Ryb2tlV2lkdGgnKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy4kX3N0cm9rZVdpZHRoXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQvZ2V0IHN0cm9rZSBjb2xvciBvZiBhIG5vZGVcclxuICAgICAqIEBwYXJhbSB7Q29sb3J9IFt2YWx1ZV1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0cm9rZUNvbG9yKHZhbHVlPzogaW50ZXJmYWNlcy5Db2xvcikge1xyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9zdHJva2VDb2xvciA9IHZhbHVlXHJcbiAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfcmVuZGVyZXIubGlua01hbmFnZXIuY2hhbmdlQXR0cmlidXRlKHRoaXMsICdzdHJva2VDb2xvcicpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfc3Ryb2tlQ29sb3JcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldCBjbGljayBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIGNsaWNrIGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc2V0Q2xpY2tDYWxsYmFjayhjYWxsYmFjazogKGxpbms6IExpbmspID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLiRfY2xpY2tDYWxsYmFjayA9IGNhbGxiYWNrXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgSmlhY2hlbmcgUGFuIDxqYWNraWVhbnhpc0BnbWFpbC5jb20+XHJcbiAqIEBkZXNjcmlwdGlvbiBQcm92aWRlIGEgTm9kZSBjbGFzcy5cclxuICogQGRlcGVuZGVuY2VzIGludGVyZmFjZXMudHMsIHV0aWxzL2lzLnRzXHJcbiAqL1xyXG5cclxuaW1wb3J0ICogYXMgaW50ZXJmYWNlcyBmcm9tICcuL2ludGVyZmFjZXMnXHJcbmltcG9ydCB7IGlzVmFsaWRJZCB9IGZyb20gJy4vdXRpbHMvaXMnXHJcbmltcG9ydCB7IE5ldFYgfSBmcm9tICcuL2luZGV4J1xyXG5cclxuY2xhc3MgTm9kZSB7XHJcbiAgICBwdWJsaWMgJF9jbGlja0NhbGxiYWNrOiAobm9kZTogTm9kZSkgPT4gdm9pZFxyXG5cclxuICAgIHByaXZhdGUgJF9jb3JlOiBOZXRWXHJcbiAgICBwcml2YXRlICRfaWQ6IHN0cmluZ1xyXG4gICAgcHJpdmF0ZSAkX3Bvc2l0aW9uID0ge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMFxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSAkX3N0cm9rZVdpZHRoOiBudW1iZXJcclxuICAgIHByaXZhdGUgJF9zdHJva2VDb2xvcjogaW50ZXJmYWNlcy5Db2xvclxyXG4gICAgcHJpdmF0ZSAkX2ZpbGw6IGludGVyZmFjZXMuQ29sb3JcclxuICAgIHByaXZhdGUgJF9yOiBudW1iZXIgLy8gcmFkaXVzXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvcmUsIG5vZGVEYXRhOiBpbnRlcmZhY2VzLk5vZGVEYXRhKSB7XHJcbiAgICAgICAgdGhpcy4kX2NvcmUgPSBjb3JlXHJcbiAgICAgICAgY29uc3QgZGVmYXVsdENvbmZpZ3MgPSB0aGlzLiRfY29yZS4kX2NvbmZpZ3NcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICAuLi57XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLiRfcG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgIHk6IHRoaXMuJF9wb3NpdGlvbi55LFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IGRlZmF1bHRDb25maWdzLm5vZGUuc3Ryb2tlV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogZGVmYXVsdENvbmZpZ3Mubm9kZS5zdHJva2VDb2xvcixcclxuICAgICAgICAgICAgICAgIHI6IGRlZmF1bHRDb25maWdzLm5vZGUucixcclxuICAgICAgICAgICAgICAgIGZpbGw6IGRlZmF1bHRDb25maWdzLm5vZGUuZmlsbCxcclxuICAgICAgICAgICAgICAgIGNsaWNrQ2FsbGJhY2s6IGRlZmF1bHRDb25maWdzLm5vZGUuY2xpY2tDYWxsYmFja1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAuLi5ub2RlRGF0YVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kX3NldElkKGRhdGEuaWQpXHJcbiAgICAgICAgdGhpcy4kX3Bvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICB4OiBkYXRhLngsXHJcbiAgICAgICAgICAgIHk6IGRhdGEueVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiRfc3Ryb2tlV2lkdGggPSBkYXRhLnN0cm9rZVdpZHRoXHJcbiAgICAgICAgdGhpcy4kX3N0cm9rZUNvbG9yID0gZGF0YS5zdHJva2VDb2xvclxyXG4gICAgICAgIHRoaXMuJF9maWxsID0gZGF0YS5maWxsXHJcbiAgICAgICAgdGhpcy4kX3IgPSBkYXRhLnJcclxuXHJcbiAgICAgICAgdGhpcy5zZXRDbGlja0NhbGxiYWNrKGRhdGEuY2xpY2tDYWxsYmFjaylcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldHRlciBvZiBwcml2YXRlIHByb3BlcnR5ICRfaWRcclxuICAgICAqIEBtZW1iZXJvZiBOb2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kX2lkXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQvZ2V0IHggcG9zdGlvblxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFt2YWx1ZV1cclxuICAgICAqIEBtZW1iZXJvZiBOb2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB4KHZhbHVlPzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy4kX3Bvc2l0aW9uLnggPSB2YWx1ZVxyXG4gICAgICAgICAgICB0aGlzLiRfY29yZS4kX3JlbmRlcmVyLm5vZGVNYW5hZ2VyLmNoYW5nZUF0dHJpYnV0ZSh0aGlzLCAncG9zaXRpb24nKVxyXG4gICAgICAgICAgICAvLyBOT1RFOiB1cGRhdGUgcmVsYXRlZCBsaW5rIHBvc2l0aW9uXHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRfY29yZS4kX2lkMmxpbmtzLmdldCh0aGlzLiRfaWQpKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGxpbmsgb2YgdGhpcy4kX2NvcmUuJF9pZDJsaW5rcy5nZXQodGhpcy4kX2lkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfcmVuZGVyZXIubGlua01hbmFnZXIuY2hhbmdlQXR0cmlidXRlKGxpbmssICdzb3VyY2UnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfcG9zaXRpb24ueFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0L2dldCB5IHBvc3Rpb25cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbdmFsdWVdXHJcbiAgICAgKiBAbWVtYmVyb2YgTm9kZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgeSh2YWx1ZT86IG51bWJlcikge1xyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9wb3NpdGlvbi55ID0gdmFsdWVcclxuICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9yZW5kZXJlci5ub2RlTWFuYWdlci5jaGFuZ2VBdHRyaWJ1dGUodGhpcywgJ3Bvc2l0aW9uJylcclxuICAgICAgICAgICAgLy8gTk9URTogdXBkYXRlIHJlbGF0ZWQgbGluayBwb3NpdGlvblxyXG4gICAgICAgICAgICBpZiAodGhpcy4kX2NvcmUuJF9pZDJsaW5rcy5nZXQodGhpcy4kX2lkKSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBsaW5rIG9mIHRoaXMuJF9jb3JlLiRfaWQybGlua3MuZ2V0KHRoaXMuJF9pZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRfY29yZS4kX3JlbmRlcmVyLmxpbmtNYW5hZ2VyLmNoYW5nZUF0dHJpYnV0ZShsaW5rLCAnc291cmNlJylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRfY29yZS4kX3JlbmRlcmVyLmxpbmtNYW5hZ2VyLmNoYW5nZUF0dHJpYnV0ZShsaW5rLCAndGFyZ2V0JylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy4kX3Bvc2l0aW9uLnlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldC9nZXQgcG9zdGlvblxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFt2YWx1ZV1cclxuICAgICAqIEBtZW1iZXJvZiBOb2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3NpdGlvbih4PzogbnVtYmVyLCB5PzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy4kX3Bvc2l0aW9uLnggPSB4XHJcbiAgICAgICAgICAgIHRoaXMuJF9wb3NpdGlvbi55ID0geVxyXG4gICAgICAgICAgICB0aGlzLiRfY29yZS4kX3JlbmRlcmVyLm5vZGVNYW5hZ2VyLmNoYW5nZUF0dHJpYnV0ZSh0aGlzLCAncG9zaXRpb24nKVxyXG4gICAgICAgICAgICAvLyBOT1RFOiB1cGRhdGUgcmVsYXRlZCBsaW5rIHBvc2l0aW9uXHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRfY29yZS4kX2lkMmxpbmtzLmdldCh0aGlzLiRfaWQpKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGxpbmsgb2YgdGhpcy4kX2NvcmUuJF9pZDJsaW5rcy5nZXQodGhpcy4kX2lkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfcmVuZGVyZXIubGlua01hbmFnZXIuY2hhbmdlQXR0cmlidXRlKGxpbmssICdzb3VyY2UnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoICE9PSAwICYmIGFyZ3VtZW50cy5sZW5ndGggIT09IDIpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYE5vZGUucG9zaXRpb24oKSBtZXRob2QgY2FuIG5vdCBkZWFsIHdpdGggJHthcmd1bWVudHMubGVuZ3RofSBwYXJhbWV0ZXJzLmApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfcG9zaXRpb25cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldC9nZXQgc3Ryb2tlIHdpZHRoIG9mIGEgbm9kZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFt2YWx1ZV1cclxuICAgICAqIEBtZW1iZXJvZiBOb2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdHJva2VXaWR0aCh2YWx1ZT86IG51bWJlcikge1xyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9zdHJva2VXaWR0aCA9IHZhbHVlXHJcbiAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfcmVuZGVyZXIubm9kZU1hbmFnZXIuY2hhbmdlQXR0cmlidXRlKHRoaXMsICdzdHJva2VXaWR0aCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfc3Ryb2tlV2lkdGhcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldC9nZXQgc3Ryb2tlIGNvbG9yIG9mIGEgbm9kZVxyXG4gICAgICogQHBhcmFtIHtDb2xvcn0gW3ZhbHVlXVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3Ryb2tlQ29sb3IodmFsdWU/OiBpbnRlcmZhY2VzLkNvbG9yKSB7XHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy4kX3N0cm9rZUNvbG9yID0gdmFsdWVcclxuICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9yZW5kZXJlci5ub2RlTWFuYWdlci5jaGFuZ2VBdHRyaWJ1dGUodGhpcywgJ3N0cm9rZUNvbG9yJylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9zdHJva2VDb2xvclxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0L2dldCBmaWxsIGNvbG9yIG9mIGEgbm9kZVxyXG4gICAgICogQHBhcmFtIHtDb2xvcn0gW3ZhbHVlXVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZmlsbCh2YWx1ZT86IGludGVyZmFjZXMuQ29sb3IpIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLiRfZmlsbCA9IHZhbHVlXHJcbiAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfcmVuZGVyZXIubm9kZU1hbmFnZXIuY2hhbmdlQXR0cmlidXRlKHRoaXMsICdmaWxsJylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9maWxsXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQvZ2V0IHJhZGl1cyBvZiBhIG5vZGVcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbcl1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHIodmFsdWU/OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLiRfciA9IHZhbHVlXHJcbiAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfcmVuZGVyZXIubm9kZU1hbmFnZXIuY2hhbmdlQXR0cmlidXRlKHRoaXMsICdyYWRpdXMnKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy4kX3JcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldCB0aGUgaWQgb2YgdGhpcyBub2RlLlxyXG4gICAgICogaXQgaXMgb25seSB1c2VkIGZvciBjb25zdHJ1Y3RvclxyXG4gICAgICogYmVjYXVzZSBhIG5vZGUncyBpZCBpcyBub3QgYWxsb3dlZCB0byBiZSBjaGFuZ2VkLlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxyXG4gICAgICogQHJldHVybnMgbm90aGluZ1xyXG4gICAgICogQG1lbWJlcm9mIE5vZGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSAkX3NldElkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoaXNWYWxpZElkKHZhbHVlKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy4kX2NvcmUuJF9pZDJub2RlLmhhcyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRHVwbGljYXRlIG5vZGUgKCR7dmFsdWV9KSBpcyBub3QgYWxsb3dlZC5gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkSWQodGhpcy4kX2lkKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IGNoYW5nZSB0aGUgaWQgb2YgYW4gZXhpc3Qgbm9kZS4nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfaWQybm9kZS5zZXQodmFsdWUsIHRoaXMpXHJcbiAgICAgICAgICAgIHRoaXMuJF9pZCA9IHZhbHVlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIElEICR7dmFsdWV9YClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQgY2xpY2sgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBjbGljayBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNldENsaWNrQ2FsbGJhY2soY2FsbGJhY2s6IChub2RlOiBOb2RlKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy4kX2NsaWNrQ2FsbGJhY2sgPSBjYWxsYmFja1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb2RlXHJcbiIsImV4cG9ydCBkZWZhdWx0IFwiI3ZlcnNpb24gMzAwIGVzXFxyXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcbmluIHZlYzQgY29sb3I7XFxyXFxuXFxyXFxub3V0IHZlYzQgZnJhZ21lbnRDb2xvcjtcXHJcXG5cXHJcXG52b2lkIG1haW4odm9pZCkge1xcclxcbiAgICBmcmFnbWVudENvbG9yID0gdmVjNChjb2xvci5yZ2IgKiBjb2xvci5hLCBjb2xvci5hKTtcXHJcXG59XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIjdmVyc2lvbiAzMDAgZXNcXHJcXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxyXFxuaW4gdmVjNCBjb2xvcjtcXHJcXG5cXHJcXG5pbiB2ZWM0IGlkO1xcclxcblxcclxcbi8vIFRPRE86IGFsbCBpZCByZWxhdGVkIHNoYWRlciBuZWVkIGNsZWFuIHVwXFxyXFxub3V0IHZlYzQgZnJhZ21lbnRDb2xvcjtcXHJcXG5cXHJcXG52b2lkIG1haW4odm9pZCkge1xcclxcbiAgICBmcmFnbWVudENvbG9yID0gaWQ7XFxyXFxufVwiOyIsImV4cG9ydCBkZWZhdWx0IFwiI3ZlcnNpb24gMzAwIGVzXFxyXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcbmluIHZlYzMgaW5WZXJ0ZXhQb3M7XFxyXFxuaW4gdmVjMiBpblNvdXJjZVBvc2l0aW9uO1xcclxcbmluIHZlYzIgaW5UYXJnZXRQb3NpdGlvbjtcXHJcXG5pbiBmbG9hdCBpblN0cm9rZVdpZHRoO1xcclxcbmluIHZlYzQgaW5TdHJva2VDb2xvcjtcXHJcXG5cXHJcXG5pbiB2ZWM0IGluSWQ7XFxyXFxuXFxyXFxub3V0IHZlYzQgY29sb3I7XFxyXFxuXFxyXFxub3V0IHZlYzQgaWQ7XFxyXFxuXFxyXFxudW5pZm9ybSBtYXQzIHByb2plY3Rpb247XFxyXFxudW5pZm9ybSB2ZWMyIHNjYWxlO1xcclxcbnVuaWZvcm0gdmVjMiB0cmFuc2xhdGU7XFxyXFxuXFxyXFxudm9pZCBtYWluKHZvaWQpIHtcXHJcXG4gICAgaWQgPSBpbklkO1xcclxcblxcclxcbiAgICBjb2xvciA9IGluU3Ryb2tlQ29sb3I7XFxyXFxuXFxyXFxuICAgIHZlYzIgc291cmNlID0gaW5Tb3VyY2VQb3NpdGlvbiAqIHNjYWxlICsgdHJhbnNsYXRlO1xcclxcbiAgICB2ZWMyIHRhcmdldCA9IGluVGFyZ2V0UG9zaXRpb24gKiBzY2FsZSArIHRyYW5zbGF0ZTtcXHJcXG4gICAgdmVjMiBkZWx0YSA9IHNvdXJjZSAtIHRhcmdldDtcXHJcXG4gICAgdmVjMiBjZW50ZXIgPSAwLjUgKiAoc291cmNlICsgdGFyZ2V0KTtcXHJcXG4gICAgZmxvYXQgbGVuID0gbGVuZ3RoKGRlbHRhKTtcXHJcXG4gICAgZmxvYXQgcGhpID0gYXRhbihkZWx0YS55IC8gZGVsdGEueCk7XFxyXFxuXFxyXFxuICAgIG1hdDMgbGluZV9zY2FsZSA9IG1hdDMoXFxyXFxuICAgICAgICBsZW4sIDAsIDAsXFxyXFxuICAgICAgICAwLCBpblN0cm9rZVdpZHRoLCAwLFxcclxcbiAgICAgICAgMCwgMCwgMVxcclxcbiAgICApO1xcclxcbiAgICBtYXQzIGxpbmVfcm90YXRlID0gbWF0MyhcXHJcXG4gICAgICAgIGNvcyhwaGkpLCBzaW4ocGhpKSwgMCxcXHJcXG4gICAgICAgIC1zaW4ocGhpKSwgY29zKHBoaSksIDAsXFxyXFxuICAgICAgICAwLCAwLCAxXFxyXFxuICAgICk7XFxyXFxuICAgIG1hdDMgbGluZV90cmFuc2xhdGUgPSBtYXQzKFxcclxcbiAgICAgICAgMSwgMCwgMCxcXHJcXG4gICAgICAgIDAsIDEsIDAsXFxyXFxuICAgICAgICBjZW50ZXIueCwgY2VudGVyLnksIDFcXHJcXG4gICAgKTtcXHJcXG4gICAgXFxyXFxuICAgIG1hdDMgdHJhbnNmb3JtID0gbGluZV90cmFuc2xhdGUgKiBsaW5lX3JvdGF0ZSAqIGxpbmVfc2NhbGU7XFxyXFxuXFxyXFxuICAgIGdsX1Bvc2l0aW9uID0gdmVjNChwcm9qZWN0aW9uICogdHJhbnNmb3JtICogaW5WZXJ0ZXhQb3MsIDEuKTtcXHJcXG59XCI7IiwiLyoqXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XHJcbiAqIEBkZXNjcmlwdGlvbiBMaW5rIHVzZWQgaW4gcmVuZGVyZXJcclxuICovXHJcblxyXG5pbXBvcnQgdmVydFNoYWRlclN0ciBmcm9tICcuL3ZlcnRleC5nbHNsJ1xyXG5pbXBvcnQgZnJhZ1NoYWRlclN0ciBmcm9tICcuL2ZyYWdtZW50Lmdsc2wnXHJcbmltcG9ydCBpZFZlcnRTaGFkZXJTdHIgZnJvbSAnLi9pZC12ZXJ0ZXguZ2xzbCdcclxuaW1wb3J0IGlkRnJhZ1NoYWRlclN0ciBmcm9tICcuL2lkLWZyYWdtZW50Lmdsc2wnXHJcbmltcG9ydCB7XHJcbiAgICBjcmVhdGVQcm9ncmFtLFxyXG4gICAgY3JlYXRlQXJyYXlCdWZmZXIsXHJcbiAgICBleHRyYWN0QXR0cmlidXRlc0Zyb21TaGFkZXIsXHJcbiAgICBlbmNvZGVSZW5kZXJJZFxyXG59IGZyb20gJy4uLy4uL3V0aWxzJ1xyXG5pbXBvcnQgeyBSZW5kZXJBdHRyaWJ1dGUsIFRyYW5zZm9ybSwgTGlua0F0dHIsIExpbmtNYW5hZ2VyQ29uZmlncyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXHJcbmltcG9ydCBMaW5rIGZyb20gJy4uLy4uLy4uL2xpbmsnXHJcbmltcG9ydCBNYXAyIGZyb20gJy4uLy4uLy4uL3V0aWxzL21hcDInXHJcblxyXG5lbnVtIExpbmtBdHRyS2V5IHtcclxuICAgIFRFTVBMQVRFLFxyXG4gICAgU09VUkNFLFxyXG4gICAgVEFSR0VULFxyXG4gICAgV0lEVEgsXHJcbiAgICBDT0xPUlxyXG59XHJcblxyXG5lbnVtIExpbmtJZEF0dHJLZXkge1xyXG4gICAgVEVNUExBVEUsXHJcbiAgICBTT1VSQ0UsXHJcbiAgICBUQVJHRVQsXHJcbiAgICBXSURUSCxcclxuICAgIENPTE9SLFxyXG4gICAgSURcclxufVxyXG5cclxuY29uc3QgTGlua0F0dHJNYXAgPSB7XHJcbiAgICBzb3VyY2U6IExpbmtBdHRyS2V5LlNPVVJDRSxcclxuICAgIHRhcmdldDogTGlua0F0dHJLZXkuVEFSR0VULFxyXG4gICAgc3Ryb2tlV2lkdGg6IExpbmtBdHRyS2V5LldJRFRILFxyXG4gICAgc3Ryb2tlQ29sb3I6IExpbmtBdHRyS2V5LkNPTE9SXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZW5kZXJMaW5rTWFuYWdlciB7XHJcbiAgICBwcml2YXRlIGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0XHJcbiAgICBwcml2YXRlIGxpbWl0OiBudW1iZXJcclxuICAgIHByaXZhdGUgY291bnQgPSAwXHJcbiAgICBwcml2YXRlIHdpZHRoOiBudW1iZXJcclxuICAgIHByaXZhdGUgaGVpZ2h0OiBudW1iZXJcclxuICAgIHByaXZhdGUgcGl4ZWxSYXRpbzogbnVtYmVyXHJcbiAgICBwcml2YXRlIHByb2dyYW06IFdlYkdMUHJvZ3JhbVxyXG4gICAgcHJpdmF0ZSBhdHRyaWJ1dGVzOiBSZW5kZXJBdHRyaWJ1dGVcclxuICAgIHByaXZhdGUgaWRQcm9ncmFtOiBXZWJHTFByb2dyYW1cclxuICAgIHByaXZhdGUgaWRBdHRyaWJ1dGVzOiBSZW5kZXJBdHRyaWJ1dGVcclxuICAgIHByaXZhdGUgaWRUZXh0dXJlOiBXZWJHTFRleHR1cmVcclxuICAgIHByaXZhdGUgcmVuZGVySWRUb0lkczogeyBba2V5OiBudW1iZXJdOiBbc3RyaW5nLCBzdHJpbmddIH1cclxuXHJcbiAgICBwcml2YXRlIGlkc1RvSW5kZXggPSBuZXcgTWFwMigpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjcmVhdGUgcmVuZGVyIGxpbmsgbWFuYWdlclxyXG4gICAgICogQHBhcmFtIGdsIFdlYkdMIGNvbnRleHRcclxuICAgICAqIEBwYXJhbSBwYXJhbXMgbmVzc2VzYXJ5IGNvbmZpZ3MgZm9yIGxpbmsgbWFuYWdlclxyXG4gICAgICogQHBhcmFtIGlkVGV4dHVyZSB0ZXh0dXJlIHN0b3JlIGVsZW1lbnRzIGlkIG9mIGVhY2ggcGl4ZWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0LFxyXG4gICAgICAgIHBhcmFtczogTGlua01hbmFnZXJDb25maWdzLFxyXG4gICAgICAgIGlkVGV4dHVyZTogV2ViR0xUZXh0dXJlXHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCB7IGxpbWl0LCB3aWR0aCwgaGVpZ2h0IH0gPSBwYXJhbXNcclxuICAgICAgICB0aGlzLmdsID0gZ2xcclxuICAgICAgICB0aGlzLmxpbWl0ID0gbGltaXRcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGhcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxyXG4gICAgICAgIHRoaXMucGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcclxuXHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0gZXh0cmFjdEF0dHJpYnV0ZXNGcm9tU2hhZGVyKHZlcnRTaGFkZXJTdHIpXHJcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gY3JlYXRlUHJvZ3JhbSh0aGlzLmdsLCB2ZXJ0U2hhZGVyU3RyLCBmcmFnU2hhZGVyU3RyLCB0aGlzLmF0dHJpYnV0ZXMpXHJcblxyXG4gICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzID0gZXh0cmFjdEF0dHJpYnV0ZXNGcm9tU2hhZGVyKGlkVmVydFNoYWRlclN0cilcclxuICAgICAgICB0aGlzLmlkUHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0odGhpcy5nbCwgaWRWZXJ0U2hhZGVyU3RyLCBpZEZyYWdTaGFkZXJTdHIsIHRoaXMuaWRBdHRyaWJ1dGVzKVxyXG4gICAgICAgIHRoaXMuaWRUZXh0dXJlID0gaWRUZXh0dXJlXHJcbiAgICAgICAgdGhpcy5yZW5kZXJJZFRvSWRzID0ge31cclxuXHJcbiAgICAgICAgLy8gaW5pdCBhcnJheXNcclxuICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTGlua0F0dHJLZXkuVEVNUExBVEVdLmFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShbXHJcbiAgICAgICAgICAgIC0wLjUsIDAuNSwgMS4wLFxyXG4gICAgICAgICAgICAtMC41LCAtMC41LCAxLjAsXHJcbiAgICAgICAgICAgIDAuNSwgMC41LCAxLjAsXHJcbiAgICAgICAgICAgIDAuNSwgLTAuNSwgMS4wLFxyXG4gICAgICAgIF0pXHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFhdHRyLmlzQnVpbGRJbikgYXR0ci5hcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoYXR0ci5zaXplICogdGhpcy5saW1pdClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBpbml0IGJ1ZmZlcnNcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG4gICAgICAgICAgICBhdHRyLmJ1ZmZlciA9IGNyZWF0ZUFycmF5QnVmZmVyKHRoaXMuZ2wsIGF0dHIuYXJyYXkpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gaW5pdCBpZCBhdHRyaWJ1dGVzIGFuZCBidWZmZXJzXHJcbiAgICAgICAgLy8gVE9ETzogaGFyZGNvZGUgY2hlY2ssIG5lZWQgcmVmYWN0b3JcclxuICAgICAgICB0aGlzLmlkQXR0cmlidXRlcy5mb3JFYWNoKChhdHRyLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlkeCA8IHRoaXMuYXR0cmlidXRlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzW2lkeF0gPSB0aGlzLmF0dHJpYnV0ZXNbaWR4XVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhdHRyLmlzQnVpbGRJbikgYXR0ci5hcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoYXR0ci5zaXplICogdGhpcy5saW1pdClcclxuICAgICAgICAgICAgICAgIGF0dHIuYnVmZmVyID0gY3JlYXRlQXJyYXlCdWZmZXIodGhpcy5nbCwgYXR0ci5hcnJheSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIGluaXQgdW5pZm9ybXNcclxuICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKVxyXG4gICAgICAgIGNvbnN0IHByb2plY3Rpb25Mb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sICdwcm9qZWN0aW9uJylcclxuICAgICAgICBjb25zdCBzY2FsZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3NjYWxlJylcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGVMb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sICd0cmFuc2xhdGUnKVxyXG5cclxuICAgICAgICAvLyB0aGlzLmdsLnZpZXdwb3J0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KSAvLyBUT0RPOiB2aWV3cG9ydCBzZXQsIG5vdCBuZWVkZWQ/IHB1dCBoZXJlIGluIGNhc2UgYnVnIGFwcGVhclxyXG5cclxuICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgICAgICBjb25zdCBwcm9qZWN0aW9uID0gbmV3IEZsb2F0MzJBcnJheShbXHJcbiAgICAgICAgICAgIDIgLyB0aGlzLndpZHRoLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAtMiAvIHRoaXMuaGVpZ2h0LCAwLFxyXG4gICAgICAgICAgICAtMSwgMSwgMVxyXG4gICAgICAgIF0pXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtTWF0cml4M2Z2KHByb2plY3Rpb25Mb2MsIGZhbHNlLCBwcm9qZWN0aW9uKVxyXG5cclxuICAgICAgICBjb25zdCBzY2FsZSA9IG5ldyBGbG9hdDMyQXJyYXkoWzEsIDFdKVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdihzY2FsZUxvYywgc2NhbGUpXHJcblxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IG5ldyBGbG9hdDMyQXJyYXkoWzAsIDBdKVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdih0cmFuc2xhdGVMb2MsIHRyYW5zbGF0ZSlcclxuXHJcbiAgICAgICAgLy8gaWQgdW5pZm9ybXMsIGlkZW50aWNhbCB0byBsaW5rXHJcbiAgICAgICAgLy8gVE9ETzogbmVlZCByZWZhY3RvciB0b29cclxuICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5pZFByb2dyYW0pXHJcbiAgICAgICAgY29uc3QgaWRQcm9qZWN0aW9uTG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5pZFByb2dyYW0sICdwcm9qZWN0aW9uJylcclxuICAgICAgICBjb25zdCBpZFNjYWxlTG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5pZFByb2dyYW0sICdzY2FsZScpXHJcbiAgICAgICAgY29uc3QgaWRUcmFuc2xhdGVMb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmlkUHJvZ3JhbSwgJ3RyYW5zbGF0ZScpXHJcblxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybU1hdHJpeDNmdihpZFByb2plY3Rpb25Mb2MsIGZhbHNlLCBwcm9qZWN0aW9uKVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdihpZFNjYWxlTG9jLCBzY2FsZSlcclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZnYoaWRUcmFuc2xhdGVMb2MsIHRyYW5zbGF0ZSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNoYW5nZSBsaW5rJ3MgYXR0cmlidXRlXHJcbiAgICAgKiBAcGFyYW0gbGluayBsaW5rIGRhdGFcclxuICAgICAqIEBwYXJhbSBhdHRyaWJ1dGUgYXR0cmlidXRlIGtleSB0byBjaGFuZ2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNoYW5nZUF0dHJpYnV0ZShsaW5rOiBMaW5rLCBhdHRyaWJ1dGU6IExpbmtBdHRyKSB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gTGlua0F0dHJNYXBbYXR0cmlidXRlXVxyXG4gICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLmF0dHJpYnV0ZXNba2V5XVxyXG4gICAgICAgIGNvbnN0IG5vZGVzID0gbGluay5zb3VyY2VUYXJnZXQoKVxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pZHNUb0luZGV4LmdldChbbm9kZXMuc291cmNlLmlkKCksIG5vZGVzLnRhcmdldC5pZCgpXSlcclxuICAgICAgICBsZXQgZGF0YSA9IG51bGxcclxuICAgICAgICBpZiAoYXR0cmlidXRlID09PSAnc291cmNlJykge1xyXG4gICAgICAgICAgICBjb25zdCBwb3MgPSBub2Rlcy5zb3VyY2UucG9zaXRpb24oKVxyXG4gICAgICAgICAgICBkYXRhID0gW3Bvcy54LCBwb3MueV1cclxuICAgICAgICB9IGVsc2UgaWYgKGF0dHJpYnV0ZSA9PT0gJ3RhcmdldCcpIHtcclxuICAgICAgICAgICAgY29uc3QgcG9zID0gbm9kZXMudGFyZ2V0LnBvc2l0aW9uKClcclxuICAgICAgICAgICAgZGF0YSA9IFtwb3MueCwgcG9zLnldXHJcbiAgICAgICAgfSBlbHNlIGlmIChhdHRyaWJ1dGUgPT09ICdzdHJva2VXaWR0aCcpIHtcclxuICAgICAgICAgICAgZGF0YSA9IFtsaW5rLnN0cm9rZVdpZHRoKCkgKiB0aGlzLnBpeGVsUmF0aW9dXHJcbiAgICAgICAgfSBlbHNlIGlmIChhdHRyaWJ1dGUgPT09ICdzdHJva2VDb2xvcicpIHtcclxuICAgICAgICAgICAgY29uc3QgY29sID0gbGluay5zdHJva2VDb2xvcigpXHJcbiAgICAgICAgICAgIGRhdGEgPSBbY29sLnIsIGNvbC5nLCBjb2wuYiwgY29sLmFdXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTGluayBhdHRyaWJ1dGUgbm90IHN1cHBvcnRlZC4nKVxyXG4gICAgICAgICAgICByZXR1cm4gLy8gZWFybHkgcmV0dXJuLCBza2lwIGZvbGxvd2luZyBidWZmZXIgY2hhbmdlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF0dHIuYXJyYXkuc2V0KGRhdGEsIGF0dHIuc2l6ZSAqIGluZGV4KVxyXG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYXR0ci5idWZmZXIpXHJcbiAgICAgICAgdGhpcy5nbC5idWZmZXJTdWJEYXRhKFxyXG4gICAgICAgICAgICB0aGlzLmdsLkFSUkFZX0JVRkZFUixcclxuICAgICAgICAgICAgYXR0ci5zaXplICogaW5kZXggKiBhdHRyLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULFxyXG4gICAgICAgICAgICBhdHRyLmFycmF5LFxyXG4gICAgICAgICAgICBhdHRyLnNpemUgKiBpbmRleCxcclxuICAgICAgICAgICAgYXR0ci5zaXplXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIGxpbmtzIGRhdGEgdG8gZW5naW5lXHJcbiAgICAgKiBAcGFyYW0gbGlua3MgbGlua3MgZGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkRGF0YShsaW5rczogTGlua1tdKSB7XHJcbiAgICAgICAgLy8gc2V0IGFycmF5XHJcbiAgICAgICAgbGlua3MuZm9yRWFjaCgobGluaywgaSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBjb25zaWRlciBsaW5rIGFuZCByZW5kZXIgbGluayBhdHRyaWJ1dGUgbWFwcGluZ1xyXG4gICAgICAgICAgICBjb25zdCBzb3VyY2UgPSBsaW5rLnNvdXJjZSgpXHJcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZVBvc2l0aW9uID0gc291cmNlLnBvc2l0aW9uKClcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW0xpbmtBdHRyS2V5LlNPVVJDRV0uYXJyYXlbMiAqICh0aGlzLmNvdW50ICsgaSldID0gc291cmNlUG9zaXRpb24ueFxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTGlua0F0dHJLZXkuU09VUkNFXS5hcnJheVsyICogKHRoaXMuY291bnQgKyBpKSArIDFdID0gc291cmNlUG9zaXRpb24ueVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gbGluay50YXJnZXQoKVxyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IHRhcmdldC5wb3NpdGlvbigpXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tMaW5rQXR0cktleS5UQVJHRVRdLmFycmF5WzIgKiAodGhpcy5jb3VudCArIGkpXSA9IHRhcmdldFBvc2l0aW9uLnhcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW0xpbmtBdHRyS2V5LlRBUkdFVF0uYXJyYXlbMiAqICh0aGlzLmNvdW50ICsgaSkgKyAxXSA9IHRhcmdldFBvc2l0aW9uLnlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tMaW5rQXR0cktleS5XSURUSF0uYXJyYXlbdGhpcy5jb3VudCArIGldID1cclxuICAgICAgICAgICAgICAgIGxpbmsuc3Ryb2tlV2lkdGgoKSAqIHRoaXMucGl4ZWxSYXRpb1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBsaW5rLnN0cm9rZUNvbG9yKClcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW0xpbmtBdHRyS2V5LkNPTE9SXS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKV0gPSBjb2xvci5yXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tMaW5rQXR0cktleS5DT0xPUl0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSkgKyAxXSA9IGNvbG9yLmdcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW0xpbmtBdHRyS2V5LkNPTE9SXS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKSArIDJdID0gY29sb3IuYlxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTGlua0F0dHJLZXkuQ09MT1JdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpICsgM10gPSBjb2xvci5hXHJcblxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXJJZENvbG9yID0gZW5jb2RlUmVuZGVySWQoMiAqICh0aGlzLmNvdW50ICsgaSkgKyAxKSAvLyBOT1RFOiBsaW5rIHJlbmRlciBpZCwgdXNlIG9kZCBpbnRlZ2VyXHJcbiAgICAgICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzW0xpbmtJZEF0dHJLZXkuSURdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpXSA9IHJlbmRlcklkQ29sb3IuclxyXG4gICAgICAgICAgICB0aGlzLmlkQXR0cmlidXRlc1tMaW5rSWRBdHRyS2V5LklEXS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKSArIDFdID0gcmVuZGVySWRDb2xvci5nXHJcbiAgICAgICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzW0xpbmtJZEF0dHJLZXkuSURdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpICsgMl0gPSByZW5kZXJJZENvbG9yLmJcclxuICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXNbTGlua0lkQXR0cktleS5JRF0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSkgKyAzXSA9IHJlbmRlcklkQ29sb3IuYVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc291cmNlVGFyZ2V0ID0gbGluay5zb3VyY2VUYXJnZXQoKVxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcklkVG9JZHNbMiAqICh0aGlzLmNvdW50ICsgaSkgKyAxXSA9IFtcclxuICAgICAgICAgICAgICAgIHNvdXJjZVRhcmdldC5zb3VyY2UuaWQoKSxcclxuICAgICAgICAgICAgICAgIHNvdXJjZVRhcmdldC50YXJnZXQuaWQoKVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIHRoaXMuaWRzVG9JbmRleC5zZXQoXHJcbiAgICAgICAgICAgICAgICBbc291cmNlVGFyZ2V0LnNvdXJjZS5pZCgpLCBzb3VyY2VUYXJnZXQudGFyZ2V0LmlkKCldLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudCArIGlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghYXR0ci5pc0J1aWxkSW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYXR0ci5idWZmZXIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJ1ZmZlclN1YkRhdGEoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbC5BUlJBWV9CVUZGRVIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5zaXplICogdGhpcy5jb3VudCAqIGF0dHIuYXJyYXkuQllURVNfUEVSX0VMRU1FTlQsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5hcnJheSxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLnNpemUgKiB0aGlzLmNvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSAqIGxpbmtzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gaWQgYnVmZmVyIGRhdGFcclxuICAgICAgICBjb25zdCBhdHRyID0gdGhpcy5pZEF0dHJpYnV0ZXNbTGlua0lkQXR0cktleS5JRF1cclxuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIGF0dHIuYnVmZmVyKVxyXG4gICAgICAgIHRoaXMuZ2wuYnVmZmVyU3ViRGF0YShcclxuICAgICAgICAgICAgdGhpcy5nbC5BUlJBWV9CVUZGRVIsXHJcbiAgICAgICAgICAgIGF0dHIuc2l6ZSAqIHRoaXMuY291bnQgKiBhdHRyLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULFxyXG4gICAgICAgICAgICBhdHRyLmFycmF5LFxyXG4gICAgICAgICAgICBhdHRyLnNpemUgKiB0aGlzLmNvdW50LFxyXG4gICAgICAgICAgICBhdHRyLnNpemUgKiBsaW5rcy5sZW5ndGhcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIHRoaXMuY291bnQgKz0gbGlua3MubGVuZ3RoXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQgVHJhbnNmb3JtIGluIFJlbmRlciBMaW5rXHJcbiAgICAgKiBAcGFyYW0gdHJhbnNmb3JtIGN1cnJlbnQgdHJhbnNmb3JtKHBhbiZ6b29tIGNvbmRpdGlvbilcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFRyYW5zZm9ybSh0cmFuc2Zvcm06IFRyYW5zZm9ybSkge1xyXG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pXHJcbiAgICAgICAgY29uc3Qgc2NhbGVMb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sICdzY2FsZScpXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlTG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLCAndHJhbnNsYXRlJylcclxuXHJcbiAgICAgICAgY29uc3Qgc2NhbGUgPSBuZXcgRmxvYXQzMkFycmF5KFt0cmFuc2Zvcm0uaywgdHJhbnNmb3JtLmtdKVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdihzY2FsZUxvYywgc2NhbGUpXHJcblxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IG5ldyBGbG9hdDMyQXJyYXkoW3RyYW5zZm9ybS54LCB0cmFuc2Zvcm0ueV0pXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmZ2KHRyYW5zbGF0ZUxvYywgdHJhbnNsYXRlKVxyXG5cclxuICAgICAgICAvLyBpZCB1bmlmb3JtcywgaWRlbnRpY2FsIHRvIGxpbmtcclxuICAgICAgICAvLyBUT0RPOiBuZWVkIHJlZmFjdG9yIHRvb1xyXG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLmlkUHJvZ3JhbSlcclxuICAgICAgICBjb25zdCBpZFNjYWxlTG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5pZFByb2dyYW0sICdzY2FsZScpXHJcbiAgICAgICAgY29uc3QgaWRUcmFuc2xhdGVMb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmlkUHJvZ3JhbSwgJ3RyYW5zbGF0ZScpXHJcblxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdihpZFNjYWxlTG9jLCBzY2FsZSlcclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZnYoaWRUcmFuc2xhdGVMb2MsIHRyYW5zbGF0ZSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJlbmRlciBpZCB0byBsaW5rIGlkcyhzb3VyY2UgYW5kIHRhcmdldClcclxuICAgICAqIEBwYXJhbSByZW5kZXJJZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0SWRzQnlSZW5kZXJJZChyZW5kZXJJZDogbnVtYmVyKTogW3N0cmluZywgc3RyaW5nXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVySWRUb0lkc1tyZW5kZXJJZF1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGRyYXcgbGlua3NcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRyYXcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuZW5hYmxlKHRoaXMuZ2wuQkxFTkQpXHJcbiAgICAgICAgICAgIHRoaXMuZ2wuYmxlbmRGdW5jKHRoaXMuZ2wuT05FLCB0aGlzLmdsLk9ORV9NSU5VU19TUkNfQUxQSEEpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKVxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhdHRyLmluZGV4KVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYXR0ci5idWZmZXIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5pbmRleCxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLnNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbC5GTE9BVCxcclxuICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLmlzQnVpbGRJbiA/IDAgOiBhdHRyLnNpemUgKiBhdHRyLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULFxyXG4gICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIGlmICghYXR0ci5pc0J1aWxkSW4pIHRoaXMuZ2wudmVydGV4QXR0cmliRGl2aXNvcihhdHRyLmluZGV4LCAxKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5nbC5kcmF3QXJyYXlzSW5zdGFuY2VkKHRoaXMuZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQsIHRoaXMuY291bnQpXHJcblxyXG4gICAgICAgIC8vIGRyYXcgaWRcclxuICAgICAgICB0aGlzLmdsLmJsZW5kRnVuYyh0aGlzLmdsLk9ORSwgdGhpcy5nbC5aRVJPKVxyXG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLmlkUHJvZ3JhbSlcclxuICAgICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLkZSQU1FQlVGRkVSLCB0aGlzLmlkVGV4dHVyZSlcclxuXHJcbiAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGF0dHIuaW5kZXgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgYXR0ciA9IHRoaXMuaWRBdHRyaWJ1dGVzW0xpbmtJZEF0dHJLZXkuSURdXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBhdHRyLmJ1ZmZlcilcclxuICAgICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXHJcbiAgICAgICAgICAgIGF0dHIuaW5kZXgsXHJcbiAgICAgICAgICAgIGF0dHIuc2l6ZSxcclxuICAgICAgICAgICAgdGhpcy5nbC5GTE9BVCxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIGF0dHIuc2l6ZSAqIGF0dHIuYXJyYXkuQllURVNfUEVSX0VMRU1FTlQsXHJcbiAgICAgICAgICAgIDBcclxuICAgICAgICApXHJcbiAgICAgICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJEaXZpc29yKGF0dHIuaW5kZXgsIDEpXHJcblxyXG4gICAgICAgIHRoaXMuZ2wuZHJhd0FycmF5c0luc3RhbmNlZCh0aGlzLmdsLlRSSUFOR0xFX1NUUklQLCAwLCA0LCB0aGlzLmNvdW50KVxyXG4gICAgICAgIHRoaXMuZ2wuYmluZEZyYW1lYnVmZmVyKHRoaXMuZ2wuRlJBTUVCVUZGRVIsIG51bGwpXHJcblxyXG4gICAgICAgIHRoaXMuZ2wuZW5hYmxlKHRoaXMuZ2wuQkxFTkQpXHJcbiAgICAgICAgdGhpcy5nbC5ibGVuZEZ1bmModGhpcy5nbC5PTkUsIHRoaXMuZ2wuT05FX01JTlVTX1NSQ19BTFBIQSlcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBcIiN2ZXJzaW9uIDMwMCBlc1xcclxcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcXHJcXG5pbiB2ZWMzIGluVmVydGV4UG9zO1xcclxcbmluIHZlYzIgaW5Tb3VyY2VQb3NpdGlvbjtcXHJcXG5pbiB2ZWMyIGluVGFyZ2V0UG9zaXRpb247XFxyXFxuaW4gZmxvYXQgaW5TdHJva2VXaWR0aDtcXHJcXG5pbiB2ZWM0IGluU3Ryb2tlQ29sb3I7XFxyXFxuXFxyXFxub3V0IHZlYzQgY29sb3I7XFxyXFxuXFxyXFxudW5pZm9ybSBtYXQzIHByb2plY3Rpb247XFxyXFxudW5pZm9ybSB2ZWMyIHNjYWxlO1xcclxcbnVuaWZvcm0gdmVjMiB0cmFuc2xhdGU7XFxyXFxuXFxyXFxudm9pZCBtYWluKHZvaWQpIHtcXHJcXG4gICAgY29sb3IgPSBpblN0cm9rZUNvbG9yO1xcclxcblxcclxcbiAgICB2ZWMyIHNvdXJjZSA9IGluU291cmNlUG9zaXRpb24gKiBzY2FsZSArIHRyYW5zbGF0ZTtcXHJcXG4gICAgdmVjMiB0YXJnZXQgPSBpblRhcmdldFBvc2l0aW9uICogc2NhbGUgKyB0cmFuc2xhdGU7XFxyXFxuICAgIHZlYzIgZGVsdGEgPSBzb3VyY2UgLSB0YXJnZXQ7XFxyXFxuICAgIHZlYzIgY2VudGVyID0gMC41ICogKHNvdXJjZSArIHRhcmdldCk7XFxyXFxuICAgIGZsb2F0IGxlbiA9IGxlbmd0aChkZWx0YSk7XFxyXFxuICAgIGZsb2F0IHBoaSA9IGF0YW4oZGVsdGEueSAvIGRlbHRhLngpO1xcclxcblxcclxcbiAgICBtYXQzIGxpbmVfc2NhbGUgPSBtYXQzKFxcclxcbiAgICAgICAgbGVuLCAwLCAwLFxcclxcbiAgICAgICAgMCwgaW5TdHJva2VXaWR0aCwgMCxcXHJcXG4gICAgICAgIDAsIDAsIDFcXHJcXG4gICAgKTtcXHJcXG4gICAgbWF0MyBsaW5lX3JvdGF0ZSA9IG1hdDMoXFxyXFxuICAgICAgICBjb3MocGhpKSwgc2luKHBoaSksIDAsXFxyXFxuICAgICAgICAtc2luKHBoaSksIGNvcyhwaGkpLCAwLFxcclxcbiAgICAgICAgMCwgMCwgMVxcclxcbiAgICApO1xcclxcbiAgICBtYXQzIGxpbmVfdHJhbnNsYXRlID0gbWF0MyhcXHJcXG4gICAgICAgIDEsIDAsIDAsXFxyXFxuICAgICAgICAwLCAxLCAwLFxcclxcbiAgICAgICAgY2VudGVyLngsIGNlbnRlci55LCAxXFxyXFxuICAgICk7XFxyXFxuICAgIFxcclxcbiAgICBtYXQzIHRyYW5zZm9ybSA9IGxpbmVfdHJhbnNsYXRlICogbGluZV9yb3RhdGUgKiBsaW5lX3NjYWxlO1xcclxcblxcclxcbiAgICBnbF9Qb3NpdGlvbiA9IHZlYzQocHJvamVjdGlvbiAqIHRyYW5zZm9ybSAqIGluVmVydGV4UG9zLCAxLik7XFxyXFxufVwiOyIsImV4cG9ydCBkZWZhdWx0IFwiI3ZlcnNpb24gMzAwIGVzXFxyXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcbmluIHZlYzIgcG9zO1xcclxcbmluIGZsb2F0IHJhZGl1cztcXHJcXG5pbiB2ZWM0IGNvbG9yO1xcclxcbmluIGZsb2F0IHN0cm9rZVdpZHRoO1xcclxcbmluIHZlYzQgc3Ryb2tlQ29sb3I7XFxyXFxuXFxyXFxub3V0IHZlYzQgZnJhZ21lbnRDb2xvcjtcXHJcXG5cXHJcXG51bmlmb3JtIHZlYzIgdmlld3BvcnQ7XFxyXFxudW5pZm9ybSBmbG9hdCBwaXhlbFJhdGlvO1xcclxcblxcclxcbmZsb2F0IGluQ2lyY2xlKCkge1xcclxcbiAgdmVjMiBmbGlwX3BvcyA9IHBvcztcXHJcXG4gIGZsaXBfcG9zLnkgPSB2aWV3cG9ydC55IC0gcG9zLnk7XFxyXFxuICBmbG9hdCByID0gZGlzdGFuY2UoZ2xfRnJhZ0Nvb3JkLnh5IC8gcGl4ZWxSYXRpbywgZmxpcF9wb3MpO1xcclxcbiAgZmxvYXQgZHJhdyA9IDEuIC0gc3RlcChyYWRpdXMgLSBzdHJva2VXaWR0aCAvIDIuLCByKTtcXHJcXG4gIHJldHVybiBkcmF3O1xcclxcbn1cXHJcXG5cXHJcXG5mbG9hdCBpbkJvcmRlcigpIHtcXHJcXG4gIGlmIChzdHJva2VXaWR0aCA9PSAwLikge1xcclxcbiAgICByZXR1cm4gMC47XFxyXFxuICB9XFxyXFxuICB2ZWMyIGZsaXBfcG9zID0gcG9zO1xcclxcbiAgZmxpcF9wb3MueSA9IHZpZXdwb3J0LnkgLSBwb3MueTtcXHJcXG4gIGZsb2F0IHIgPSBkaXN0YW5jZShnbF9GcmFnQ29vcmQueHkgLyBwaXhlbFJhdGlvLCBmbGlwX3Bvcyk7XFxyXFxuICBmbG9hdCBkcmF3T3V0ZXIgPSAxLiAtIHNtb290aHN0ZXAoKHJhZGl1cyArIHN0cm9rZVdpZHRoIC8gMi4pICogMC45NSwgKHJhZGl1cyArIHN0cm9rZVdpZHRoIC8gMi4pICogMS4wNSwgcik7XFxyXFxuICBmbG9hdCBkcmF3SW5uZXIgPSAxLiAtIHN0ZXAocmFkaXVzIC0gc3Ryb2tlV2lkdGggLyAyLiwgcik7XFxyXFxuICByZXR1cm4gZHJhd091dGVyICogKDEuIC0gZHJhd0lubmVyKTtcXHJcXG4gIC8vIHJldHVybiBkcmF3T3V0ZXI7XFxyXFxufVxcclxcblxcclxcbnZvaWQgbWFpbih2b2lkKSB7XFxyXFxuICAgIC8vIGJvcmRlciBjaGVjaywgdXNpbmcgMC41KGNlbnRlciBvZiBzbW9vdGhzdGVwKVxcclxcbiAgICBpZiAoaW5DaXJjbGUoKSA8IDEuICYmIChzdHJva2VXaWR0aCA8IDAuOCB8fCBpbkJvcmRlcigpIDwgMC41KSkge1xcclxcbiAgICAgICAgZGlzY2FyZDtcXHJcXG4gICAgfVxcclxcbiAgICBmcmFnbWVudENvbG9yID0gaW5Cb3JkZXIoKSAqIHZlYzQoc3Ryb2tlQ29sb3IucmdiICogc3Ryb2tlQ29sb3IuYSwgc3Ryb2tlQ29sb3IuYSkgKyBpbkNpcmNsZSgpICogdmVjNChjb2xvci5yZ2IgKiBjb2xvci5hLCBjb2xvci5hKTtcXHJcXG59XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIjdmVyc2lvbiAzMDAgZXNcXHJcXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxyXFxuaW4gdmVjMiBwb3M7XFxyXFxuaW4gZmxvYXQgcmFkaXVzO1xcclxcbmluIHZlYzQgY29sb3I7XFxyXFxuaW4gZmxvYXQgc3Ryb2tlV2lkdGg7XFxyXFxuaW4gdmVjNCBzdHJva2VDb2xvcjtcXHJcXG5cXHJcXG5pbiB2ZWM0IGlkO1xcclxcblxcclxcbm91dCB2ZWM0IGZyYWdtZW50Q29sb3I7XFxyXFxuXFxyXFxudW5pZm9ybSB2ZWMyIHZpZXdwb3J0O1xcclxcbnVuaWZvcm0gZmxvYXQgcGl4ZWxSYXRpbztcXHJcXG5cXHJcXG5mbG9hdCBpbkNpcmNsZSgpIHtcXHJcXG4gIHZlYzIgZmxpcF9wb3MgPSBwb3M7XFxyXFxuICBmbGlwX3Bvcy55ID0gdmlld3BvcnQueSAtIHBvcy55O1xcclxcbiAgZmxvYXQgciA9IGRpc3RhbmNlKGdsX0ZyYWdDb29yZC54eSAvIHBpeGVsUmF0aW8sIGZsaXBfcG9zKTtcXHJcXG4gIGZsb2F0IGRyYXcgPSAxLiAtIHN0ZXAocmFkaXVzIC0gc3Ryb2tlV2lkdGggLyAyLiwgcik7XFxyXFxuICByZXR1cm4gZHJhdztcXHJcXG59XFxyXFxuXFxyXFxuZmxvYXQgaW5Cb3JkZXIoKSB7XFxyXFxuICBpZiAoc3Ryb2tlV2lkdGggPT0gMC4pIHtcXHJcXG4gICAgcmV0dXJuIDAuO1xcclxcbiAgfVxcclxcbiAgdmVjMiBmbGlwX3BvcyA9IHBvcztcXHJcXG4gIGZsaXBfcG9zLnkgPSB2aWV3cG9ydC55IC0gcG9zLnk7XFxyXFxuICBmbG9hdCByID0gZGlzdGFuY2UoZ2xfRnJhZ0Nvb3JkLnh5IC8gcGl4ZWxSYXRpbywgZmxpcF9wb3MpO1xcclxcbiAgZmxvYXQgZHJhd091dGVyID0gMS4gLSBzbW9vdGhzdGVwKChyYWRpdXMgKyBzdHJva2VXaWR0aCAvIDIuKSAqIDAuOTUsIChyYWRpdXMgKyBzdHJva2VXaWR0aCAvIDIuKSAqIDEuMDUsIHIpO1xcclxcbiAgZmxvYXQgZHJhd0lubmVyID0gMS4gLSBzdGVwKHJhZGl1cyAtIHN0cm9rZVdpZHRoIC8gMi4sIHIpO1xcclxcbiAgcmV0dXJuIGRyYXdPdXRlciAqICgxLiAtIGRyYXdJbm5lcik7XFxyXFxuICAvLyByZXR1cm4gZHJhd091dGVyO1xcclxcbn1cXHJcXG5cXHJcXG52b2lkIG1haW4odm9pZCkge1xcclxcbiAgICAvLyBib3JkZXIgY2hlY2ssIHVzaW5nIDAuNShjZW50ZXIgb2Ygc21vb3Roc3RlcClcXHJcXG4gICAgaWYgKGluQ2lyY2xlKCkgPCAxLiAmJiAoc3Ryb2tlV2lkdGggPCAwLjggfHwgaW5Cb3JkZXIoKSA8IDAuNSkpIHtcXHJcXG4gICAgICAgIGRpc2NhcmQ7XFxyXFxuICAgIH1cXHJcXG4gICAgZnJhZ21lbnRDb2xvciA9IGlkO1xcclxcbn1cIjsiLCJleHBvcnQgZGVmYXVsdCBcIiN2ZXJzaW9uIDMwMCBlc1xcclxcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcXHJcXG5pbiB2ZWMzIGluVmVydGV4UG9zO1xcclxcbmluIHZlYzIgaW5Qb3NpdGlvbjtcXHJcXG5pbiBmbG9hdCBpblJhZGl1cztcXHJcXG5pbiB2ZWM0IGluRmlsbDtcXHJcXG5pbiBmbG9hdCBpblN0cm9rZVdpZHRoO1xcclxcbmluIHZlYzQgaW5TdHJva2VDb2xvcjtcXHJcXG5cXHJcXG5pbiB2ZWM0IGluSWQ7XFxyXFxuXFxyXFxub3V0IHZlYzIgcG9zO1xcclxcbm91dCBmbG9hdCByYWRpdXM7XFxyXFxub3V0IHZlYzQgY29sb3I7XFxyXFxub3V0IGZsb2F0IHN0cm9rZVdpZHRoO1xcclxcbm91dCB2ZWM0IHN0cm9rZUNvbG9yO1xcclxcblxcclxcbm91dCB2ZWM0IGlkO1xcclxcblxcclxcbnVuaWZvcm0gbWF0MyBwcm9qZWN0aW9uO1xcclxcbnVuaWZvcm0gdmVjMiBzY2FsZTtcXHJcXG51bmlmb3JtIHZlYzIgdHJhbnNsYXRlO1xcclxcbnVuaWZvcm0gdmVjMiB2aWV3cG9ydDtcXHJcXG5cXHJcXG52b2lkIG1haW4odm9pZCkge1xcclxcbiAgICBpZCA9IGluSWQ7XFxyXFxuXFxyXFxuICAgIGZsb2F0IHNpemUgPSBpblJhZGl1cyArIGluU3Ryb2tlV2lkdGggLyAyLjtcXHJcXG4gICAgcmFkaXVzID0gaW5SYWRpdXM7XFxyXFxuICAgIGNvbG9yID0gaW5GaWxsO1xcclxcbiAgICBzdHJva2VXaWR0aCA9IGluU3Ryb2tlV2lkdGg7XFxyXFxuICAgIHN0cm9rZUNvbG9yID0gaW5TdHJva2VDb2xvcjtcXHJcXG4gICAgZmxvYXQgdmVydGV4U2l6ZSA9IHNpemUgKiAoMi4gKiBzcXJ0KDIuKSkgKiAxLjU7IC8vIE5PVEU6IHggMS41IHRvIHByZXZlbnQgYm9yZGVyIGZhY3RvclxcclxcbiAgICBwb3MgPSBzY2FsZSAqIGluUG9zaXRpb24gKyB0cmFuc2xhdGU7XFxyXFxuICAgIG1hdDMgdHJhbnNmb3JtID0gbWF0MyhcXHJcXG4gICAgICAgIHZlcnRleFNpemUsIDAsIDAsXFxyXFxuICAgICAgICAwLCB2ZXJ0ZXhTaXplLCAwLFxcclxcbiAgICAgICAgcG9zLngsIHBvcy55LCAxXFxyXFxuICAgICk7XFxyXFxuXFxyXFxuICAgIGdsX1Bvc2l0aW9uID0gdmVjNChwcm9qZWN0aW9uICogdHJhbnNmb3JtICogaW5WZXJ0ZXhQb3MsIDEuKTtcXHJcXG59XCI7IiwiLyoqXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XHJcbiAqIEBkZXNjcmlwdGlvbiBOb2RlIHVzaW5nIGluIFJlbmRlcmVyXHJcbiAqL1xyXG5cclxuaW1wb3J0IHZlcnRTaGFkZXJTdHIgZnJvbSAnLi92ZXJ0ZXguZ2xzbCdcclxuaW1wb3J0IGZyYWdTaGFkZXJTdHIgZnJvbSAnLi9mcmFnbWVudC5nbHNsJ1xyXG5pbXBvcnQgaWRWZXJ0U2hhZGVyU3RyIGZyb20gJy4vaWQtdmVydGV4Lmdsc2wnXHJcbmltcG9ydCBpZEZyYWdTaGFkZXJTdHIgZnJvbSAnLi9pZC1mcmFnbWVudC5nbHNsJ1xyXG5pbXBvcnQge1xyXG4gICAgY3JlYXRlUHJvZ3JhbSxcclxuICAgIGNyZWF0ZUFycmF5QnVmZmVyLFxyXG4gICAgZXh0cmFjdEF0dHJpYnV0ZXNGcm9tU2hhZGVyLFxyXG4gICAgZW5jb2RlUmVuZGVySWRcclxufSBmcm9tICcuLi8uLi91dGlscydcclxuaW1wb3J0IHsgUmVuZGVyQXR0cmlidXRlLCBUcmFuc2Zvcm0sIE5vZGVBdHRyLCBOb2RlTWFuYWdlckNvbmZpZ3MgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgTm9kZSBmcm9tICcuLi8uLi8uLi9ub2RlJ1xyXG5cclxuZW51bSBOb2RlQXR0cktleSB7XHJcbiAgICBURU1QTEFURSxcclxuICAgIFBPU0lUSU9OLFxyXG4gICAgUkFESVVTLFxyXG4gICAgQ09MT1IsXHJcbiAgICBTVFJPS0VfV0lEVEgsXHJcbiAgICBTVFJPS0VfQ09MT1JcclxufVxyXG5cclxuZW51bSBOb2RlSWRBdHRyS2V5IHtcclxuICAgIFRFTVBMQVRFLFxyXG4gICAgUE9TSVRJT04sXHJcbiAgICBSQURJVVMsXHJcbiAgICBDT0xPUixcclxuICAgIFNUUk9LRV9XSURUSCxcclxuICAgIFNUUk9LRV9DT0xPUixcclxuICAgIElEXHJcbn1cclxuXHJcbmNvbnN0IE5vZGVBdHRyTWFwID0ge1xyXG4gICAgcG9zaXRpb246IE5vZGVBdHRyS2V5LlBPU0lUSU9OLFxyXG4gICAgcmFkaXVzOiBOb2RlQXR0cktleS5SQURJVVMsXHJcbiAgICBmaWxsOiBOb2RlQXR0cktleS5DT0xPUixcclxuICAgIHN0cm9rZVdpZHRoOiBOb2RlQXR0cktleS5TVFJPS0VfV0lEVEgsXHJcbiAgICBzdHJva2VDb2xvcjogTm9kZUF0dHJLZXkuU1RST0tFX0NPTE9SXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZW5kZXJOb2RlTWFuYWdlciB7XHJcbiAgICAvLyBwcm9ncmFtXHJcbiAgICBwcml2YXRlIGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0XHJcbiAgICBwcml2YXRlIGxpbWl0OiBudW1iZXJcclxuICAgIHByaXZhdGUgY291bnQgPSAwXHJcbiAgICBwcml2YXRlIHdpZHRoOiBudW1iZXJcclxuICAgIHByaXZhdGUgaGVpZ2h0OiBudW1iZXJcclxuICAgIHByaXZhdGUgcGl4ZWxSYXRpbzogbnVtYmVyXHJcbiAgICBwcml2YXRlIHByb2dyYW06IFdlYkdMUHJvZ3JhbVxyXG4gICAgcHJpdmF0ZSBhdHRyaWJ1dGVzOiBSZW5kZXJBdHRyaWJ1dGVcclxuICAgIHByaXZhdGUgaWRQcm9ncmFtOiBXZWJHTFByb2dyYW1cclxuICAgIHByaXZhdGUgaWRBdHRyaWJ1dGVzOiBSZW5kZXJBdHRyaWJ1dGVcclxuICAgIHByaXZhdGUgaWRUZXh0dXJlOiBXZWJHTFRleHR1cmVcclxuICAgIHByaXZhdGUgcmVuZGVySWRUb0lkOiB7IFtrZXk6IG51bWJlcl06IHN0cmluZyB9XHJcblxyXG4gICAgcHJpdmF0ZSBpZFRvSW5kZXg6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNyZWF0ZSByZW5kZXIgbm9kZSBtYW5hZ2VyXHJcbiAgICAgKiBAcGFyYW0gZ2wgV2ViR0wgY29udGV4dFxyXG4gICAgICogQHBhcmFtIHBhcmFtcyBuZXNzZXNhcnkgY29uZmlncyBmb3Igbm9kZSBtYW5hZ2VyXHJcbiAgICAgKiBAcGFyYW0gaWRUZXh0dXJlIHRleHR1cmUgc3RvcmUgZWxlbWVudHMgaWQgb2YgZWFjaCBwaXhlbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQsXHJcbiAgICAgICAgcGFyYW1zOiBOb2RlTWFuYWdlckNvbmZpZ3MsXHJcbiAgICAgICAgaWRUZXh0dXJlOiBXZWJHTFRleHR1cmVcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IHsgbGltaXQsIHdpZHRoLCBoZWlnaHQgfSA9IHBhcmFtc1xyXG4gICAgICAgIHRoaXMuZ2wgPSBnbFxyXG4gICAgICAgIHRoaXMubGltaXQgPSBsaW1pdFxyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XHJcbiAgICAgICAgdGhpcy5waXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMVxyXG5cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSBleHRyYWN0QXR0cmlidXRlc0Zyb21TaGFkZXIodmVydFNoYWRlclN0cilcclxuICAgICAgICB0aGlzLnByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKHRoaXMuZ2wsIHZlcnRTaGFkZXJTdHIsIGZyYWdTaGFkZXJTdHIsIHRoaXMuYXR0cmlidXRlcylcclxuXHJcbiAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXMgPSBleHRyYWN0QXR0cmlidXRlc0Zyb21TaGFkZXIoaWRWZXJ0U2hhZGVyU3RyKVxyXG4gICAgICAgIHRoaXMuaWRQcm9ncmFtID0gY3JlYXRlUHJvZ3JhbSh0aGlzLmdsLCBpZFZlcnRTaGFkZXJTdHIsIGlkRnJhZ1NoYWRlclN0ciwgdGhpcy5pZEF0dHJpYnV0ZXMpXHJcbiAgICAgICAgdGhpcy5pZFRleHR1cmUgPSBpZFRleHR1cmVcclxuICAgICAgICB0aGlzLnJlbmRlcklkVG9JZCA9IHt9XHJcblxyXG4gICAgICAgIHRoaXMuaWRUb0luZGV4ID0ge31cclxuXHJcbiAgICAgICAgLy8gaW5pdCBhcnJheXNcclxuICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTm9kZUF0dHJLZXkuVEVNUExBVEVdLmFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShbXHJcbiAgICAgICAgICAgIC0wLjUsIDAuMCwgMS4wLFxyXG4gICAgICAgICAgICAwLjAsIC0wLjUsIDEuMCxcclxuICAgICAgICAgICAgMC4wLCAwLjUsIDEuMCxcclxuICAgICAgICAgICAgMC41LCAwLjAsIDEuMCxcclxuICAgICAgICBdKVxyXG4gICAgICAgIC8vIFRPRE86IGNvbWJpbmUgdGhlIGZvbGxvd2luZyB0d28gbG9vcD9cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWF0dHIuaXNCdWlsZEluKSBhdHRyLmFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShhdHRyLnNpemUgKiB0aGlzLmxpbWl0KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIGluaXQgYnVmZmVyc1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XHJcbiAgICAgICAgICAgIGF0dHIuYnVmZmVyID0gY3JlYXRlQXJyYXlCdWZmZXIodGhpcy5nbCwgYXR0ci5hcnJheSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBpbml0IGlkIGF0dHJpYnV0ZXMgYW5kIGJ1ZmZlcnNcclxuICAgICAgICAvLyBUT0RPOiBoYXJkY29kZSBjaGVjaywgbmVlZCByZWZhY3RvclxyXG4gICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaWR4IDwgdGhpcy5hdHRyaWJ1dGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXNbaWR4XSA9IHRoaXMuYXR0cmlidXRlc1tpZHhdXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWF0dHIuaXNCdWlsZEluKSBhdHRyLmFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShhdHRyLnNpemUgKiB0aGlzLmxpbWl0KVxyXG4gICAgICAgICAgICAgICAgYXR0ci5idWZmZXIgPSBjcmVhdGVBcnJheUJ1ZmZlcih0aGlzLmdsLCBhdHRyLmFycmF5KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gaW5pdCB1bmlmb3Jtc1xyXG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pXHJcbiAgICAgICAgY29uc3QgcHJvamVjdGlvbkxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3Byb2plY3Rpb24nKVxyXG4gICAgICAgIGNvbnN0IHNjYWxlTG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLCAnc2NhbGUnKVxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3RyYW5zbGF0ZScpXHJcbiAgICAgICAgY29uc3Qgdmlld3BvcnRMb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sICd2aWV3cG9ydCcpXHJcbiAgICAgICAgY29uc3QgcGl4ZWxSYXRpb0xvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3BpeGVsUmF0aW8nKVxyXG5cclxuICAgICAgICAvLyB0aGlzLmdsLnZpZXdwb3J0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KSAvLyBUT0RPOiB2aWV3cG9ydCBzZXQsIG5vdCBuZWVkZWQ/IHB1dCBoZXJlIGluIGNhc2UgYnVnIGFwcGVhclxyXG5cclxuICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgICAgICBjb25zdCBwcm9qZWN0aW9uID0gbmV3IEZsb2F0MzJBcnJheShbXHJcbiAgICAgICAgICAgIDIgLyB0aGlzLndpZHRoLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAtMiAvIHRoaXMuaGVpZ2h0LCAwLFxyXG4gICAgICAgICAgICAtMSwgMSwgMVxyXG4gICAgICAgIF0pXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtTWF0cml4M2Z2KHByb2plY3Rpb25Mb2MsIGZhbHNlLCBwcm9qZWN0aW9uKVxyXG5cclxuICAgICAgICBjb25zdCBzY2FsZSA9IG5ldyBGbG9hdDMyQXJyYXkoWzEsIDFdKVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdihzY2FsZUxvYywgc2NhbGUpXHJcblxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IG5ldyBGbG9hdDMyQXJyYXkoWzAsIDBdKVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdih0cmFuc2xhdGVMb2MsIHRyYW5zbGF0ZSlcclxuXHJcbiAgICAgICAgY29uc3Qgdmlld3BvcnQgPSBuZXcgRmxvYXQzMkFycmF5KFt0aGlzLndpZHRoLCB0aGlzLmhlaWdodF0pXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmZ2KHZpZXdwb3J0TG9jLCB2aWV3cG9ydClcclxuXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMWYocGl4ZWxSYXRpb0xvYywgdGhpcy5waXhlbFJhdGlvKVxyXG5cclxuICAgICAgICAvLyBpZCB1bmlmb3JtcywgaWRlbnRpY2FsIHRvIG5vZGVcclxuICAgICAgICAvLyBUT0RPOiBuZWVkIHJlZmFjdG9yIHRvb1xyXG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLmlkUHJvZ3JhbSlcclxuICAgICAgICBjb25zdCBpZFByb2plY3Rpb25Mb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmlkUHJvZ3JhbSwgJ3Byb2plY3Rpb24nKVxyXG4gICAgICAgIGNvbnN0IGlkU2NhbGVMb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmlkUHJvZ3JhbSwgJ3NjYWxlJylcclxuICAgICAgICBjb25zdCBpZFRyYW5zbGF0ZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuaWRQcm9ncmFtLCAndHJhbnNsYXRlJylcclxuICAgICAgICBjb25zdCBpZFZpZXdwb3J0TG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5pZFByb2dyYW0sICd2aWV3cG9ydCcpXHJcbiAgICAgICAgY29uc3QgaWRQaXhlbFJhdGlvTG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5pZFByb2dyYW0sICdwaXhlbFJhdGlvJylcclxuXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtTWF0cml4M2Z2KGlkUHJvamVjdGlvbkxvYywgZmFsc2UsIHByb2plY3Rpb24pXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmZ2KGlkU2NhbGVMb2MsIHNjYWxlKVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdihpZFRyYW5zbGF0ZUxvYywgdHJhbnNsYXRlKVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdihpZFZpZXdwb3J0TG9jLCB2aWV3cG9ydClcclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0xZihpZFBpeGVsUmF0aW9Mb2MsIHRoaXMucGl4ZWxSYXRpbylcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldCBUcmFuc2Zvcm0gaW4gUmVuZGVyIE5vZGVcclxuICAgICAqIEBwYXJhbSB0cmFuc2Zvcm0gY3VycmVudCB0cmFuc2Zvcm0ocGFuJnpvb20gY29uZGl0aW9uKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0VHJhbnNmb3JtKHRyYW5zZm9ybTogVHJhbnNmb3JtKSB7XHJcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSlcclxuICAgICAgICBjb25zdCBzY2FsZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3NjYWxlJylcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGVMb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sICd0cmFuc2xhdGUnKVxyXG5cclxuICAgICAgICBjb25zdCBzY2FsZSA9IG5ldyBGbG9hdDMyQXJyYXkoW3RyYW5zZm9ybS5rLCB0cmFuc2Zvcm0ua10pXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmZ2KHNjYWxlTG9jLCBzY2FsZSlcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlID0gbmV3IEZsb2F0MzJBcnJheShbdHJhbnNmb3JtLngsIHRyYW5zZm9ybS55XSlcclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZnYodHJhbnNsYXRlTG9jLCB0cmFuc2xhdGUpXHJcblxyXG4gICAgICAgIC8vIGlkIHVuaWZvcm1zLCBpZGVudGljYWwgdG8gbm9kZVxyXG4gICAgICAgIC8vIFRPRE86IG5lZWQgcmVmYWN0b3IgdG9vXHJcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMuaWRQcm9ncmFtKVxyXG4gICAgICAgIGNvbnN0IGlkU2NhbGVMb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmlkUHJvZ3JhbSwgJ3NjYWxlJylcclxuICAgICAgICBjb25zdCBpZFRyYW5zbGF0ZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuaWRQcm9ncmFtLCAndHJhbnNsYXRlJylcclxuXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmZ2KGlkU2NhbGVMb2MsIHNjYWxlKVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdihpZFRyYW5zbGF0ZUxvYywgdHJhbnNsYXRlKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2hhbmdlIG5vZGUncyBhdHRyaWJ1dGVcclxuICAgICAqIEBwYXJhbSBub2RlIG5vZGUgZGF0YVxyXG4gICAgICogQHBhcmFtIGF0dHJpYnV0ZSBhdHRyaWJ1dGUga2V5IHRvIGNoYW5nZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2hhbmdlQXR0cmlidXRlKG5vZGU6IE5vZGUsIGF0dHJpYnV0ZTogTm9kZUF0dHIpIHtcclxuICAgICAgICBjb25zdCBrZXkgPSBOb2RlQXR0ck1hcFthdHRyaWJ1dGVdXHJcbiAgICAgICAgY29uc3QgYXR0ciA9IHRoaXMuYXR0cmlidXRlc1trZXldXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmlkVG9JbmRleFtub2RlLmlkKCldXHJcbiAgICAgICAgbGV0IGRhdGEgPSBudWxsXHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ3Bvc2l0aW9uJykge1xyXG4gICAgICAgICAgICBjb25zdCBwb3MgPSBub2RlLnBvc2l0aW9uKClcclxuICAgICAgICAgICAgZGF0YSA9IFtwb3MueCwgcG9zLnldXHJcbiAgICAgICAgfSBlbHNlIGlmIChhdHRyaWJ1dGUgPT09ICdmaWxsJykge1xyXG4gICAgICAgICAgICBjb25zdCBjb2wgPSBub2RlLmZpbGwoKVxyXG4gICAgICAgICAgICBkYXRhID0gW2NvbC5yLCBjb2wuZywgY29sLmIsIGNvbC5hXVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlID09PSAncmFkaXVzJykge1xyXG4gICAgICAgICAgICBkYXRhID0gW25vZGUucigpICogdGhpcy5waXhlbFJhdGlvXVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlID09PSAnc3Ryb2tlV2lkdGgnKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBbbm9kZS5zdHJva2VXaWR0aCgpICogdGhpcy5waXhlbFJhdGlvXVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlID09PSAnc3Ryb2tlQ29sb3InKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IG5vZGUuc3Ryb2tlQ29sb3IoKVxyXG4gICAgICAgICAgICBkYXRhID0gW2NvbC5yLCBjb2wuZywgY29sLmIsIGNvbC5hXVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vdCBzdXBwb3J0ZWQgTm9kZSBhdHRyaWJ1dGUuJylcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF0dHIuYXJyYXkuc2V0KGRhdGEsIGF0dHIuc2l6ZSAqIGluZGV4KVxyXG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYXR0ci5idWZmZXIpXHJcbiAgICAgICAgdGhpcy5nbC5idWZmZXJTdWJEYXRhKFxyXG4gICAgICAgICAgICB0aGlzLmdsLkFSUkFZX0JVRkZFUixcclxuICAgICAgICAgICAgYXR0ci5zaXplICogaW5kZXggKiBhdHRyLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULFxyXG4gICAgICAgICAgICBhdHRyLmFycmF5LFxyXG4gICAgICAgICAgICBhdHRyLnNpemUgKiBpbmRleCxcclxuICAgICAgICAgICAgYXR0ci5zaXplXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIG5vZGVzIGRhdGEgdG8gZW5naW5lXHJcbiAgICAgKiBAcGFyYW0gbm9kZXMgbm9kZXMgZGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkRGF0YShub2RlczogTm9kZVtdKSB7XHJcbiAgICAgICAgLy8gc2V0IGFycmF5XHJcbiAgICAgICAgbm9kZXMuZm9yRWFjaCgobm9kZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBjb25zaWRlciBub2RlIGFuZCByZW5kZXIgbm9kZSBhdHRyaWJ1dGUgbWFwcGluZ1xyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IG5vZGUucG9zaXRpb24oKVxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTm9kZUF0dHJLZXkuUE9TSVRJT05dLmFycmF5WzIgKiAodGhpcy5jb3VudCArIGkpXSA9IHBvc2l0aW9uLnhcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW05vZGVBdHRyS2V5LlBPU0lUSU9OXS5hcnJheVsyICogKHRoaXMuY291bnQgKyBpKSArIDFdID0gcG9zaXRpb24ueVxyXG5cclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW05vZGVBdHRyS2V5LlJBRElVU10uYXJyYXlbdGhpcy5jb3VudCArIGldID0gbm9kZS5yKCkgKiB0aGlzLnBpeGVsUmF0aW9cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGwgPSBub2RlLmZpbGwoKVxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTm9kZUF0dHJLZXkuQ09MT1JdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpXSA9IGZpbGwuclxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTm9kZUF0dHJLZXkuQ09MT1JdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpICsgMV0gPSBmaWxsLmdcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW05vZGVBdHRyS2V5LkNPTE9SXS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKSArIDJdID0gZmlsbC5iXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tOb2RlQXR0cktleS5DT0xPUl0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSkgKyAzXSA9IGZpbGwuYVxyXG5cclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW05vZGVBdHRyS2V5LlNUUk9LRV9XSURUSF0uYXJyYXlbdGhpcy5jb3VudCArIGldID1cclxuICAgICAgICAgICAgICAgIG5vZGUuc3Ryb2tlV2lkdGgoKSAqIHRoaXMucGl4ZWxSYXRpb1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3Ryb2tlQ29sb3IgPSBub2RlLnN0cm9rZUNvbG9yKClcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW05vZGVBdHRyS2V5LlNUUk9LRV9DT0xPUl0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSldID0gc3Ryb2tlQ29sb3IuclxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTm9kZUF0dHJLZXkuU1RST0tFX0NPTE9SXS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKSArIDFdID1cclxuICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yLmdcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW05vZGVBdHRyS2V5LlNUUk9LRV9DT0xPUl0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSkgKyAyXSA9XHJcbiAgICAgICAgICAgICAgICBzdHJva2VDb2xvci5iXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tOb2RlQXR0cktleS5TVFJPS0VfQ09MT1JdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpICsgM10gPVxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3IuYVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVuZGVySWRDb2xvciA9IGVuY29kZVJlbmRlcklkKDIgKiAodGhpcy5jb3VudCArIGkpKSAvLyBOT1RFOiBub2RlIHJlbmRlciBpZCwgdXNlIGV2ZW4gaW50ZWdlclxyXG4gICAgICAgICAgICB0aGlzLmlkQXR0cmlidXRlc1tOb2RlSWRBdHRyS2V5LklEXS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKV0gPSByZW5kZXJJZENvbG9yLnJcclxuICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXNbTm9kZUlkQXR0cktleS5JRF0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSkgKyAxXSA9IHJlbmRlcklkQ29sb3IuZ1xyXG4gICAgICAgICAgICB0aGlzLmlkQXR0cmlidXRlc1tOb2RlSWRBdHRyS2V5LklEXS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKSArIDJdID0gcmVuZGVySWRDb2xvci5iXHJcbiAgICAgICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzW05vZGVJZEF0dHJLZXkuSURdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpICsgM10gPSByZW5kZXJJZENvbG9yLmFcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVySWRUb0lkWzIgKiAodGhpcy5jb3VudCArIGkpXSA9IG5vZGUuaWQoKVxyXG4gICAgICAgICAgICB0aGlzLmlkVG9JbmRleFtub2RlLmlkKCldID0gdGhpcy5jb3VudCArIGlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWF0dHIuaXNCdWlsZEluKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIGF0dHIuYnVmZmVyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5idWZmZXJTdWJEYXRhKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wuQVJSQVlfQlVGRkVSLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSAqIHRoaXMuY291bnQgKiBhdHRyLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuYXJyYXksXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5zaXplICogdGhpcy5jb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLnNpemUgKiBub2Rlcy5sZW5ndGhcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIGlkIGJ1ZmZlciBkYXRhXHJcbiAgICAgICAgY29uc3QgYXR0ciA9IHRoaXMuaWRBdHRyaWJ1dGVzW05vZGVJZEF0dHJLZXkuSURdXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBhdHRyLmJ1ZmZlcilcclxuICAgICAgICB0aGlzLmdsLmJ1ZmZlclN1YkRhdGEoXHJcbiAgICAgICAgICAgIHRoaXMuZ2wuQVJSQVlfQlVGRkVSLFxyXG4gICAgICAgICAgICBhdHRyLnNpemUgKiB0aGlzLmNvdW50ICogYXR0ci5hcnJheS5CWVRFU19QRVJfRUxFTUVOVCxcclxuICAgICAgICAgICAgYXR0ci5hcnJheSxcclxuICAgICAgICAgICAgYXR0ci5zaXplICogdGhpcy5jb3VudCxcclxuICAgICAgICAgICAgYXR0ci5zaXplICogbm9kZXMubGVuZ3RoXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICB0aGlzLmNvdW50ICs9IG5vZGVzLmxlbmd0aFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVuZGVyIGlkIHRvIGlkXHJcbiAgICAgKiBAcGFyYW0gcmVuZGVySWQgcmVuZGVyIGlkIGluIG51bWJlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0SWRCeVJlbmRlcklkKHJlbmRlcklkOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcklkVG9JZFtyZW5kZXJJZF1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGRyYXcgbm9kZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRyYXcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuZW5hYmxlKHRoaXMuZ2wuQkxFTkQpXHJcbiAgICAgICAgICAgIHRoaXMuZ2wuYmxlbmRGdW5jKHRoaXMuZ2wuT05FLCB0aGlzLmdsLk9ORV9NSU5VU19TUkNfQUxQSEEpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKVxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhdHRyLmluZGV4KVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYXR0ci5idWZmZXIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5pbmRleCxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLnNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbC5GTE9BVCxcclxuICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLnNpemUgKiBhdHRyLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULFxyXG4gICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIGlmICghYXR0ci5pc0J1aWxkSW4pIHRoaXMuZ2wudmVydGV4QXR0cmliRGl2aXNvcihhdHRyLmluZGV4LCAxKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5nbC5kcmF3QXJyYXlzSW5zdGFuY2VkKHRoaXMuZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQsIHRoaXMuY291bnQpXHJcblxyXG4gICAgICAgIC8vIGRyYXcgaWRcclxuICAgICAgICB0aGlzLmdsLmJsZW5kRnVuYyh0aGlzLmdsLk9ORSwgdGhpcy5nbC5aRVJPKVxyXG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLmlkUHJvZ3JhbSlcclxuICAgICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLkZSQU1FQlVGRkVSLCB0aGlzLmlkVGV4dHVyZSlcclxuXHJcbiAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGF0dHIuaW5kZXgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgYXR0ciA9IHRoaXMuaWRBdHRyaWJ1dGVzW05vZGVJZEF0dHJLZXkuSURdXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBhdHRyLmJ1ZmZlcilcclxuICAgICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXHJcbiAgICAgICAgICAgIGF0dHIuaW5kZXgsXHJcbiAgICAgICAgICAgIGF0dHIuc2l6ZSxcclxuICAgICAgICAgICAgdGhpcy5nbC5GTE9BVCxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIGF0dHIuc2l6ZSAqIGF0dHIuYXJyYXkuQllURVNfUEVSX0VMRU1FTlQsXHJcbiAgICAgICAgICAgIDBcclxuICAgICAgICApXHJcbiAgICAgICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJEaXZpc29yKGF0dHIuaW5kZXgsIDEpXHJcblxyXG4gICAgICAgIHRoaXMuZ2wuZHJhd0FycmF5c0luc3RhbmNlZCh0aGlzLmdsLlRSSUFOR0xFX1NUUklQLCAwLCA0LCB0aGlzLmNvdW50KVxyXG4gICAgICAgIHRoaXMuZ2wuYmluZEZyYW1lYnVmZmVyKHRoaXMuZ2wuRlJBTUVCVUZGRVIsIG51bGwpXHJcblxyXG4gICAgICAgIHRoaXMuZ2wuZW5hYmxlKHRoaXMuZ2wuQkxFTkQpXHJcbiAgICAgICAgdGhpcy5nbC5ibGVuZEZ1bmModGhpcy5nbC5PTkUsIHRoaXMuZ2wuT05FX01JTlVTX1NSQ19BTFBIQSlcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBcIiN2ZXJzaW9uIDMwMCBlc1xcclxcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcXHJcXG5pbiB2ZWMzIGluVmVydGV4UG9zO1xcclxcbmluIHZlYzIgaW5Qb3NpdGlvbjtcXHJcXG5pbiBmbG9hdCBpblJhZGl1cztcXHJcXG5pbiB2ZWM0IGluRmlsbDtcXHJcXG5pbiBmbG9hdCBpblN0cm9rZVdpZHRoO1xcclxcbmluIHZlYzQgaW5TdHJva2VDb2xvcjtcXHJcXG5cXHJcXG5vdXQgdmVjMiBwb3M7XFxyXFxub3V0IGZsb2F0IHJhZGl1cztcXHJcXG5vdXQgdmVjNCBjb2xvcjtcXHJcXG5vdXQgZmxvYXQgc3Ryb2tlV2lkdGg7XFxyXFxub3V0IHZlYzQgc3Ryb2tlQ29sb3I7XFxyXFxuXFxyXFxudW5pZm9ybSBtYXQzIHByb2plY3Rpb247XFxyXFxudW5pZm9ybSB2ZWMyIHNjYWxlO1xcclxcbnVuaWZvcm0gdmVjMiB0cmFuc2xhdGU7XFxyXFxudW5pZm9ybSB2ZWMyIHZpZXdwb3J0O1xcclxcblxcclxcbnZvaWQgbWFpbih2b2lkKSB7XFxyXFxuICAgIGZsb2F0IHNpemUgPSBpblJhZGl1cyArIGluU3Ryb2tlV2lkdGggLyAyLjtcXHJcXG4gICAgcmFkaXVzID0gaW5SYWRpdXM7XFxyXFxuICAgIGNvbG9yID0gaW5GaWxsO1xcclxcbiAgICBzdHJva2VXaWR0aCA9IGluU3Ryb2tlV2lkdGg7XFxyXFxuICAgIHN0cm9rZUNvbG9yID0gaW5TdHJva2VDb2xvcjtcXHJcXG4gICAgZmxvYXQgdmVydGV4U2l6ZSA9IHNpemUgKiAoMi4gKiBzcXJ0KDIuKSkgKiAxLjU7IC8vIE5PVEU6IHggMS41IHRvIHByZXZlbnQgYm9yZGVyIGZhY3RvclxcclxcbiAgICBwb3MgPSBzY2FsZSAqIGluUG9zaXRpb24gKyB0cmFuc2xhdGU7XFxyXFxuICAgIG1hdDMgdHJhbnNmb3JtID0gbWF0MyhcXHJcXG4gICAgICAgIHZlcnRleFNpemUsIDAsIDAsXFxyXFxuICAgICAgICAwLCB2ZXJ0ZXhTaXplLCAwLFxcclxcbiAgICAgICAgcG9zLngsIHBvcy55LCAxXFxyXFxuICAgICk7XFxyXFxuXFxyXFxuICAgIGdsX1Bvc2l0aW9uID0gdmVjNChwcm9qZWN0aW9uICogdHJhbnNmb3JtICogaW5WZXJ0ZXhQb3MsIDEuKTtcXHJcXG59XCI7IiwiLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiByZW5kZXIgZ3JhcGggdXNpbmcgd2ViZ2xcclxuICogQGF1dGhvciBYaWFvZG9uZyBaaGFvIDx6aGFveGlhb2RvbmdAemp1LmVkdS5jbj5cclxuICovXHJcblxyXG5pbXBvcnQgeyBSZW5kZXJOb2RlTWFuYWdlciB9IGZyb20gJy4vZWxlbWVudHMvbm9kZS9yZW5kZXItbm9kZSdcclxuaW1wb3J0IE5vZGUgZnJvbSAnLi4vbm9kZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnc3JjL2xpbmsnXHJcbmltcG9ydCB7IFJlbmRlckxpbmtNYW5hZ2VyIH0gZnJvbSAnLi9lbGVtZW50cy9saW5rL3JlbmRlci1saW5rJ1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0sIFJlbmRlcmVyQ29uZmlncyB9IGZyb20gJy4vaW50ZXJmYWNlcydcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdzcmMvaW50ZXJmYWNlcydcclxuaW1wb3J0IHsgZGVjb2RlUmVuZGVySWQgfSBmcm9tICcuL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlbmRlcmVyIHtcclxuICAgIHB1YmxpYyBub2RlTWFuYWdlcjogUmVuZGVyTm9kZU1hbmFnZXJcclxuICAgIHB1YmxpYyBsaW5rTWFuYWdlcjogUmVuZGVyTGlua01hbmFnZXJcclxuXHJcbiAgICBwcml2YXRlIGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0XHJcbiAgICBwcml2YXRlIGJhY2tncm91bmRDb2xvcjogQ29sb3JcclxuICAgIHByaXZhdGUgd2lkdGg6IG51bWJlclxyXG4gICAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlclxyXG4gICAgcHJpdmF0ZSBpZFRleHR1cmU6IFdlYkdMVGV4dHVyZVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlIHJlbmRlcmVyIG9iamVjdFxyXG4gICAgICogQHBhcmFtIGNvbmZpZ3Mge2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBiYWNrZ3JvdW5kQ29sb3I6IENvbG9yLCBkZWZhdWx0Q29uZmlnczogT2JqZWN0fSBjb25maWdzIHBhc3NlZCB0byByZW5kZXJlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoY29uZmlnczogUmVuZGVyZXJDb25maWdzKSB7XHJcbiAgICAgICAgY29uc3QgeyBjYW52YXMsIHdpZHRoLCBoZWlnaHQsIGJhY2tncm91bmRDb2xvciwgbm9kZUxpbWl0LCBsaW5rTGltaXQgfSA9IGNvbmZpZ3NcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLmdsID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsMicpXHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0ViByZXF1aXJlcyBXZWJHTDIgc3VwcG9ydGVkIGJ5IHlvdXIgYnJvd3NlcicpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoXHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcclxuXHJcbiAgICAgICAgdGhpcy5pbml0SWRUZXh0dXJlKClcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlTWFuYWdlciA9IG5ldyBSZW5kZXJOb2RlTWFuYWdlcihcclxuICAgICAgICAgICAgdGhpcy5nbCxcclxuICAgICAgICAgICAgeyB3aWR0aCwgaGVpZ2h0LCBsaW1pdDogbm9kZUxpbWl0IH0sXHJcbiAgICAgICAgICAgIHRoaXMuaWRUZXh0dXJlXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMubGlua01hbmFnZXIgPSBuZXcgUmVuZGVyTGlua01hbmFnZXIoXHJcbiAgICAgICAgICAgIHRoaXMuZ2wsXHJcbiAgICAgICAgICAgIHsgd2lkdGgsIGhlaWdodCwgbGltaXQ6IGxpbmtMaW1pdCB9LFxyXG4gICAgICAgICAgICB0aGlzLmlkVGV4dHVyZVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCBub2RlcyB0byBub2RlIG1hbmFnZXJcclxuICAgICAqIEBwYXJhbSBub2RlcyBub2RlIGRhdGEgaW4gTmV0VlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkTm9kZXMobm9kZXM6IE5vZGVbXSkge1xyXG4gICAgICAgIHRoaXMubm9kZU1hbmFnZXIuYWRkRGF0YShub2RlcylcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCBsaW5rcyB0byBsaW5rIG1hbmFnZXJcclxuICAgICAqIEBwYXJhbSBsaW5rcyBsaW5rIGRhdGEgaW4gTmV0VlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkTGlua3MobGlua3M6IExpbmtbXSkge1xyXG4gICAgICAgIHRoaXMubGlua01hbmFnZXIuYWRkRGF0YShsaW5rcylcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VHJhbnNmb3JtKHRyYW5zZm9ybTogVHJhbnNmb3JtKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlTWFuYWdlci5zZXRUcmFuc2Zvcm0odHJhbnNmb3JtKVxyXG4gICAgICAgIHRoaXMubGlua01hbmFnZXIuc2V0VHJhbnNmb3JtKHRyYW5zZm9ybSlcclxuICAgICAgICB0aGlzLmRyYXcoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZHJhdyBhbGwgZWxlbWVudHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5GUkFNRUJVRkZFUiwgdGhpcy5pZFRleHR1cmUpXHJcbiAgICAgICAgdGhpcy5nbC5jbGVhckNvbG9yKDEsIDEsIDEsIDEpXHJcbiAgICAgICAgdGhpcy5nbC5jbGVhcih0aGlzLmdsLkNPTE9SX0JVRkZFUl9CSVQpXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5GUkFNRUJVRkZFUiwgbnVsbClcclxuXHJcbiAgICAgICAgdGhpcy5nbC5jbGVhckNvbG9yKFxyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvci5yLFxyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvci5nLFxyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvci5iLFxyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvci5hXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMuZ2wuY2xlYXIodGhpcy5nbC5DT0xPUl9CVUZGRVJfQklUKVxyXG4gICAgICAgIHRoaXMubGlua01hbmFnZXIuZHJhdygpXHJcbiAgICAgICAgdGhpcy5ub2RlTWFuYWdlci5kcmF3KClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldCBlbGVtZW50J3MgaWQgYXQgKHgsIHkpIG9mIGNhbnZhcyBpZiBleGlzdHNcclxuICAgICAqIEBwYXJhbSB4IHggcG9zXHJcbiAgICAgKiBAcGFyYW0geSB5IHBvc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0SWRCeVBvc2l0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyKTogc3RyaW5nIHwgW3N0cmluZywgc3RyaW5nXSB7XHJcbiAgICAgICAgY29uc3QgcmVuZGVySWQgPSB0aGlzLnJlYWRJZFRleHR1cmUoeCwgeSlcclxuICAgICAgICBpZiAocmVuZGVySWQgPj0gMCkge1xyXG4gICAgICAgICAgICBpZiAocmVuZGVySWQgJSAyID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBOT1RFOiBub2RlIGhhcyBldmVuIHJlbmRlciBpZCwgbGluayBoYXMgb2RkIHJlbmRlciBpZFxyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZUlkID0gdGhpcy5ub2RlTWFuYWdlci5nZXRJZEJ5UmVuZGVySWQocmVuZGVySWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZUlkXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5rSWRzID0gdGhpcy5saW5rTWFuYWdlci5nZXRJZHNCeVJlbmRlcklkKHJlbmRlcklkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpbmtJZHNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJlYWQgcGl4ZWwgdmFsdWUgYXQgKHgsIHkpIG9mIHRleHR1cmVcclxuICAgICAqIEBwYXJhbSB4IHggcG9zXHJcbiAgICAgKiBAcGFyYW0geSB5IHBvc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZElkVGV4dHVyZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgcmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5SRUFEX0ZSQU1FQlVGRkVSLCB0aGlzLmlkVGV4dHVyZSlcclxuICAgICAgICBjb25zdCByZWFkUGl4ZWxCdWZmZXIgPSBuZXcgVWludDhBcnJheShbMjU1LCAyNTUsIDI1NSwgMjU1XSkgLy8gLTFcclxuICAgICAgICB0aGlzLmdsLnJlYWRQaXhlbHMoXHJcbiAgICAgICAgICAgIHggKiByYXRpbyxcclxuICAgICAgICAgICAgeSAqIHJhdGlvLFxyXG4gICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICB0aGlzLmdsLlJHQkEsXHJcbiAgICAgICAgICAgIHRoaXMuZ2wuVU5TSUdORURfQllURSxcclxuICAgICAgICAgICAgcmVhZFBpeGVsQnVmZmVyXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGNvbnN0IG9iamVjdElEID0gZGVjb2RlUmVuZGVySWQocmVhZFBpeGVsQnVmZmVyKVxyXG5cclxuICAgICAgICByZXR1cm4gb2JqZWN0SURcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGluaXQgV2ViR0wgdGV4dHVyZSBmb3IgcmVjb3JkaW5nIHBvc2l0aW9uIG9mIGVsZW1lbnRzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaW5pdElkVGV4dHVyZSgpIHtcclxuICAgICAgICBjb25zdCBnbCA9IHRoaXMuZ2xcclxuICAgICAgICBjb25zdCBwaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMVxyXG4gICAgICAgIGNvbnN0IHNjcmVlbldpZHRoID0gdGhpcy53aWR0aCAqIHBpeGVsUmF0aW9cclxuICAgICAgICBjb25zdCBzY3JlZW5IZWlnaHQgPSB0aGlzLmhlaWdodCAqIHBpeGVsUmF0aW9cclxuXHJcbiAgICAgICAgY29uc3QgZmJvID0gZ2wuY3JlYXRlRnJhbWVidWZmZXIoKVxyXG4gICAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgZmJvKVxyXG5cclxuICAgICAgICBjb25zdCBpZFRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKClcclxuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBpZFRleHR1cmUpXHJcbiAgICAgICAgZ2wudGV4SW1hZ2UyRChcclxuICAgICAgICAgICAgZ2wuVEVYVFVSRV8yRCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgZ2wuUkdCQSxcclxuICAgICAgICAgICAgc2NyZWVuV2lkdGgsXHJcbiAgICAgICAgICAgIHNjcmVlbkhlaWdodCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgZ2wuUkdCQSxcclxuICAgICAgICAgICAgZ2wuVU5TSUdORURfQllURSxcclxuICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgIClcclxuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTElORUFSKVxyXG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5MSU5FQVIpXHJcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbClcclxuICAgICAgICBnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRChnbC5GUkFNRUJVRkZFUiwgZ2wuQ09MT1JfQVRUQUNITUVOVDAsIGdsLlRFWFRVUkVfMkQsIGlkVGV4dHVyZSwgMClcclxuXHJcbiAgICAgICAgLy8gVE9ETzogbmVlZCBzaW1wbGlmeVxyXG4gICAgICAgIGdsLmRyYXdCdWZmZXJzKFswXS5tYXAoKHYpID0+IHYgKyBnbC5DT0xPUl9BVFRBQ0hNRU5UMCkpXHJcblxyXG4gICAgICAgIGNvbnN0IHJibyA9IGdsLmNyZWF0ZVJlbmRlcmJ1ZmZlcigpXHJcbiAgICAgICAgZ2wuYmluZFJlbmRlcmJ1ZmZlcihnbC5SRU5ERVJCVUZGRVIsIHJibylcclxuICAgICAgICBnbC5jbGVhckNvbG9yKDEsIDEsIDEsIDEpXHJcbiAgICAgICAgZ2wucmVuZGVyYnVmZmVyU3RvcmFnZShnbC5SRU5ERVJCVUZGRVIsIGdsLkRFUFRIMjRfU1RFTkNJTDgsIHNjcmVlbldpZHRoLCBzY3JlZW5IZWlnaHQpXHJcbiAgICAgICAgZ2wuYmluZFJlbmRlcmJ1ZmZlcihnbC5SRU5ERVJCVUZGRVIsIG51bGwpXHJcbiAgICAgICAgZ2wuZnJhbWVidWZmZXJSZW5kZXJidWZmZXIoXHJcbiAgICAgICAgICAgIGdsLkZSQU1FQlVGRkVSLFxyXG4gICAgICAgICAgICBnbC5ERVBUSF9TVEVOQ0lMX0FUVEFDSE1FTlQsXHJcbiAgICAgICAgICAgIGdsLlJFTkRFUkJVRkZFUixcclxuICAgICAgICAgICAgcmJvXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICBpZiAoZ2wuY2hlY2tGcmFtZWJ1ZmZlclN0YXR1cyhnbC5GUkFNRUJVRkZFUikgIT09IGdsLkZSQU1FQlVGRkVSX0NPTVBMRVRFKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRnJhbWVidWZmZXIgZ2VuZXJhdGUgZmFpbGVkJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbClcclxuXHJcbiAgICAgICAgdGhpcy5pZFRleHR1cmUgPSBmYm9cclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogQGF1dGhvciBYaWFvZG9uZyBaaGFvIDx6aGFveGlhb2RvbmdAemp1LmVkdS5jbj5cclxuICogQGRlc2NyaXB0aW9uIHV0aWxpdHkgZnVuY3Rpb25zIGZvciByZW5kZXJlclxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnLi4vaW50ZXJmYWNlcydcclxuXHJcbi8qKlxyXG4gKiBjb21waWxlIHdlYmdsIHNoYWRlclxyXG4gKiBAcGFyYW0gZ2wgV2ViR0wgaW5zdGFuY2VcclxuICogQHBhcmFtIHNoYWRlclN0ciBzaGFkZXIgZmlsZSBpbiBzdHJpbmdcclxuICogQHBhcmFtIHNoYWRlclR5cGUgdmVydGV4IG9yIGZyYWdtZW50IHNoYWRlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVTaGFkZXIoXHJcbiAgICBnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dCxcclxuICAgIHNoYWRlclN0cjogc3RyaW5nLFxyXG4gICAgc2hhZGVyVHlwZTogbnVtYmVyXHJcbik6IFdlYkdMU2hhZGVyIHtcclxuICAgIGNvbnN0IHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcihzaGFkZXJUeXBlKVxyXG4gICAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc2hhZGVyU3RyKVxyXG4gICAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpXHJcbiAgICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU2hhZGVyIGNvbXBpbGUgZmFpbGVkOiAnICsgZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzaGFkZXJcclxufVxyXG5cclxuLyoqXHJcbiAqIGdlbmVyYXRlIFdlYkdMIHByb2dyYW1cclxuICogQHBhcmFtIGdsIFdlYkdMIGluc3RhbmNlXHJcbiAqIEBwYXJhbSB2ZXJ0U2hhZGVyU3RyIHZlcnRleCBzaGFkZXIgaW4gc3RyaW5nIGZvcm1hdFxyXG4gKiBAcGFyYW0gZnJhZ1NoYWRlclN0ciBmcmFnbWVudCBzaGFkZXIgaW4gc3RyaW5nIGZvcm1hdFxyXG4gKiBAcGFyYW0gYXR0cmlidXRlcyBhdHRyaWJ1dGVzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbShcclxuICAgIGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0LFxyXG4gICAgdmVydFNoYWRlclN0cjogc3RyaW5nLFxyXG4gICAgZnJhZ1NoYWRlclN0cjogc3RyaW5nLFxyXG4gICAgYXR0cmlidXRlczogeyBuYW1lOiBzdHJpbmc7IGluZGV4OiBudW1iZXIgfVtdXHJcbik6IFdlYkdMUHJvZ3JhbSB7XHJcbiAgICBjb25zdCB2ZXJ0U2hhZGVyID0gY29tcGlsZVNoYWRlcihnbCwgdmVydFNoYWRlclN0ciwgZ2wuVkVSVEVYX1NIQURFUilcclxuICAgIGNvbnN0IGZyYWdTaGFkZXIgPSBjb21waWxlU2hhZGVyKGdsLCBmcmFnU2hhZGVyU3RyLCBnbC5GUkFHTUVOVF9TSEFERVIpXHJcblxyXG4gICAgY29uc3QgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKVxyXG5cclxuICAgIGF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG4gICAgICAgIGdsLmJpbmRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBhdHRyLmluZGV4LCBhdHRyLm5hbWUpXHJcbiAgICB9KVxyXG5cclxuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2ZXJ0U2hhZGVyKVxyXG4gICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZyYWdTaGFkZXIpXHJcblxyXG4gICAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSlcclxuICAgIGlmICghZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUykpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBsaW5rIHNoYWRlcnM6ICR7Z2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSl9YClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcHJvZ3JhbVxyXG59XHJcblxyXG4vKipcclxuICogY3JlYXRlIFdlYkdMIGFycmF5IGJ1ZmZlciBnaXZlbiBkYXRhIGFycmF5XHJcbiAqIEBwYXJhbSBnbCBXZWJHTCBjb250ZXh0XHJcbiAqIEBwYXJhbSBkYXRhIGRhdGEgdG8gc3RvcmUgaW4gYnVmZmVyXHJcbiAqIEByZXR1cm5zIFdlYkdMIGJ1ZmZlciBzdG9yZSBnaXZlbiBkYXRhXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQXJyYXlCdWZmZXIoZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQsIGRhdGE6IEZsb2F0MzJBcnJheSk6IFdlYkdMQnVmZmVyIHtcclxuICAgIGNvbnN0IGJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpXHJcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyKVxyXG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIGRhdGEsIGdsLkRZTkFNSUNfRFJBVylcclxuICAgIHJldHVybiBidWZmZXJcclxufVxyXG5cclxuLyoqXHJcbiAqIGV4dHJhY3QgYXR0cmlidXRlcyBmcm9tIGEgc2hhZGVyIHNyaW5nXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzaGFkZXJTdHJcclxuICogQHJldHVybnMge1JlbmRlckF0dHJpYnV0ZVtdfSBhdHRyaWJ1dGVzIGFycmF5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdEF0dHJpYnV0ZXNGcm9tU2hhZGVyKHNoYWRlclN0cjogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBtYXRjaGluZ3MgPSBzaGFkZXJTdHIubWF0Y2goL2luXFxzLio7L2cpXHJcbiAgICByZXR1cm4gbWF0Y2hpbmdzLm1hcCgobWF0Y2gsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IG1hdGNoLnNwbGl0KCcgJylbMl0uc2xpY2UoMCwgLTEpXHJcbiAgICAgICAgY29uc3QgdHlwZSA9IG1hdGNoLnNwbGl0KCcgJylbMV1cclxuICAgICAgICBsZXQgc2l6ZSA9IDFcclxuICAgICAgICBpZiAodHlwZS5zbGljZSgwLCAzKSA9PT0gJ3ZlYycpIHtcclxuICAgICAgICAgICAgc2l6ZSA9IE51bWJlcih0eXBlLnNsaWNlKC0xKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGlzQnVpbGRJbiA9IGZhbHNlXHJcbiAgICAgICAgaWYgKG5hbWUgPT09ICdpblZlcnRleFBvcycpIHtcclxuICAgICAgICAgICAgaXNCdWlsZEluID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBzaXplLFxyXG4gICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgaXNCdWlsZEluXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIGVuY29kZSBhIHJlbmRlciBpZCBhcyBjb2xvciB0byBwYXNzIGluIHRleHR1cmVcclxuICogQHBhcmFtIGlkIHJlbmRlciBpZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZVJlbmRlcklkKGlkOiBudW1iZXIpOiBDb2xvciB7XHJcbiAgICAvLyBzcGxpdCBhIGxhcmdlIG51bWJlciBieSA4LWJpdDogaWQgPSBjb25jYXQoYSwgYiwgZywgciksIGFuZCBub3JtYWxpemUgdGhlbSBpbnRvICgwLCAxKVxyXG4gICAgY29uc3QgciA9IChpZCAmIDI1NSkgLyAyNTUuMFxyXG4gICAgY29uc3QgZyA9ICgoaWQgPj4gOCkgJiAyNTUpIC8gMjU1LjBcclxuICAgIGNvbnN0IGIgPSAoKGlkID4+IDE2KSAmIDI1NSkgLyAyNTUuMFxyXG4gICAgY29uc3QgYSA9ICgoaWQgPj4gMjQpICYgMjU1KSAvIDI1NS4wXHJcbiAgICByZXR1cm4geyByLCBnLCBiLCBhIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIGRlY29kZSBwaXhlbCB2YWx1ZSB0byBudW1iZXJcclxuICogQHBhcmFtIHBpeGVsVmFsIGEgcGl4ZWwncyB2YWx1ZSBvbiB0ZXh0dXJlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlUmVuZGVySWQocGl4ZWxWYWw6IFVpbnQ4QXJyYXkpOiBudW1iZXIge1xyXG4gICAgLy8gcGFyc2Ugbm9ybWFsaXplZCBwYXJ0cyBvZiBpZCBudW1iZXIsIGJpdCBzaGlmdCB0byBvcmlnaW4gcG9zaXRpb24gYW5kIGNvbmNhdFxyXG4gICAgY29uc3QgcmVuZGVySWQgPSBwaXhlbFZhbFswXSB8IChwaXhlbFZhbFsxXSA8PCA4KSB8IChwaXhlbFZhbFsyXSA8PCAxNikgfCAocGl4ZWxWYWxbM10gPDwgMjQpXHJcbiAgICByZXR1cm4gcmVuZGVySWRcclxufVxyXG4iLCIvKipcclxuICogVGVzdCB3aGV0aGVyIGEgc3RyaW5nIGNhbiBiZSBhIHZhbGlkIGlkIG9mIGEgTm9kZS5cclxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlOiB0aGUgc3RyaW5nIHRvYmUgdGVzdGVkXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRJZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmxlbmd0aCA+IDBcclxufVxyXG4iLCIvKipcclxuICogQGF1dGhvciBKaWFjaGVuZyBQYW4gPGphY2tpZWFueGlzQGdtYWlsLmNvbT5cclxuICogQGRlc2NyaXB0aW9uIE1hcDIgaXMgYSBNYXAgZGF0YSBzdHJ1Y3R1cmUgd2hpY2ggbWFwcyB0d28ga2V5cyB0byBvbmUgdmFsdWUuXHJcbiAqIEBVc2FnZSBzYW1lIHRvIE1hcCBkYXRhIHN0cnVjdHVyZSBpbiBFUzYuXHJcbiAqIEBkZXBlbmRlbmNlcyBOb25lXHJcbiAqL1xyXG5cclxuY29uc3QgSk9JTiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNylcclxuY29uc3QgaXNLZXlzID0gKGtleXM6IEFycmF5PHN0cmluZz4pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAga2V5cyBpbnN0YW5jZW9mIEFycmF5ICYmXHJcbiAgICAgICAga2V5cy5sZW5ndGggPT09IDIgJiZcclxuICAgICAgICBrZXlzLmV2ZXJ5KChrZXkpID0+IGtleSAhPT0gdW5kZWZpbmVkICYmIGtleSAhPT0gbnVsbClcclxuICAgIClcclxufVxyXG5jbGFzcyBNYXAyIHtcclxuICAgIHByaXZhdGUgbWFwID0gbmV3IE1hcCgpXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZW50cmllcz86IEFycmF5PEFycmF5PGFueT4+KSB7XHJcbiAgICAgICAgaWYgKGVudHJpZXMgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgW2tleSwgdmFsdWVdID0gZW50cnlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0KGtleSwgdmFsdWUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBzaXplKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5zaXplXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZShrZXlzOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICAgICAgaWYgKGlzS2V5cyhrZXlzKSkge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBrZXlzLmpvaW4oSk9JTilcclxuICAgICAgICAgICAgY29uc3Qga2V5XyA9IGtleXNbMV0gKyBKT0lOICsga2V5c1swXVxyXG4gICAgICAgICAgICBsZXQgbWFwID0gdGhpcy5tYXBcclxuICAgICAgICAgICAgbWFwLmRlbGV0ZShrZXkpXHJcbiAgICAgICAgICAgIG1hcC5kZWxldGUoa2V5XylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldChrZXlzOiBBcnJheTxzdHJpbmc+LCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKGlzS2V5cyhrZXlzKSkge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBrZXlzLmpvaW4oSk9JTilcclxuICAgICAgICAgICAgY29uc3Qga2V5XyA9IGtleXNbMV0gKyBKT0lOICsga2V5c1swXVxyXG4gICAgICAgICAgICBsZXQgbWFwID0gdGhpcy5tYXBcclxuICAgICAgICAgICAgaWYgKCFtYXAuaGFzKGtleV8pKSB7XHJcbiAgICAgICAgICAgICAgICBtYXAuc2V0KGtleSwgdmFsdWUpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtYXAuc2V0KGtleV8sIHZhbHVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldChrZXlzOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICAgICAgaWYgKGlzS2V5cyhrZXlzKSkge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBrZXlzLmpvaW4oSk9JTilcclxuICAgICAgICAgICAgY29uc3Qga2V5XyA9IGtleXNbMV0gKyBKT0lOICsga2V5c1swXVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0KGtleSkgfHwgdGhpcy5tYXAuZ2V0KGtleV8pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFzKGtleXM6IEFycmF5PHN0cmluZz4pIHtcclxuICAgICAgICBpZiAoaXNLZXlzKGtleXMpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGtleXMuam9pbihKT0lOKVxyXG4gICAgICAgICAgICBjb25zdCBrZXlfID0ga2V5c1sxXSArIEpPSU4gKyBrZXlzWzBdXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcC5oYXMoa2V5KSB8fCB0aGlzLm1hcC5oYXMoa2V5XylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvckVhY2goZnVuYzogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLm1hcC5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBrZXlzID0ga2V5LnNwbGl0KEpPSU4pXHJcbiAgICAgICAgICAgIGZ1bmModmFsdWUsIGtleXMsIHRoaXMpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW50cmllcygpIHtcclxuICAgICAgICByZXR1cm4gWy4uLnRoaXMubWFwLmVudHJpZXMoKV0ubWFwKChlbnRyeSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBlbnRyeVswXS5zcGxpdChKT0lOKVxyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGVudHJ5WzFdXHJcbiAgICAgICAgICAgIHJldHVybiBba2V5LCB2YWx1ZV1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBrZXlzKCkge1xyXG4gICAgICAgIGxldCBrZXlzID0gWy4uLnRoaXMubWFwLmtleXMoKV1cclxuICAgICAgICByZXR1cm4ga2V5cy5tYXAoKGtleSkgPT4ga2V5LnNwbGl0KEpPSU4pKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2YWx1ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLm1hcC52YWx1ZXMoKV1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFwMlxyXG4iLCIvKipcclxuICogQGF1dGhvciBYaWFvZG9uZyBaaGFvIDx6aGFveGlhb2RvbmdAemp1LmVkdS5jbj5cclxuICogQGRlc2NyaXB0aW9uIHNvbWUgdXRpbGl0eSBmdW5jdGlvbnNcclxuICovXHJcblxyXG5pbXBvcnQgeyBOb2RlTGlua0RhdGEgfSBmcm9tICdzcmMvaW50ZXJmYWNlcydcclxuXHJcbi8qKlxyXG4gKiBnaXZlbiBhIGdyYXBoIGRhdGEgd2l0aCBwb3NpdGlvbiwgcmV0dXJuIGEgY29weSBvZiBncmFwaCwgd2l0aCBwb3NpdGlvbiB0cmFuc2Zvcm1lZCB0byBjZW50ZXIgb2YgZ2l2ZW4gc2l6ZVxyXG4gKiBAcGFyYW0gZ3JhcGggbm9kZSBsaW5rIGdyYXBoIGRhdGFcclxuICogQHBhcmFtIHNpemUgZ3JhcGggc2l6ZSAobWF4KHdpZHRoLCBoZWlnaHQpKVxyXG4gKiBAcGFyYW0gY2VudGVyWCB4IHBvcyBvZiBncmFwaCBjZW50ZXJcclxuICogQHBhcmFtIGNlbnRlclkgeSBwb3Mgb2YgZ3JhcGggY2VudGVyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtR3JhcGhQb3NpdGlvbihcclxuICAgIGdyYXBoOiBOb2RlTGlua0RhdGEsXHJcbiAgICBzaXplOiBudW1iZXIsXHJcbiAgICBjZW50ZXJYOiBudW1iZXIsXHJcbiAgICBjZW50ZXJZOiBudW1iZXJcclxuKSB7XHJcbiAgICBjb25zdCB0YXJnZXRHcmFwaDogTm9kZUxpbmtEYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShncmFwaCkpXHJcbiAgICBjb25zdCB4cyA9IHRhcmdldEdyYXBoLm5vZGVzLm1hcCgobm9kZSkgPT4gbm9kZS54KVxyXG4gICAgY29uc3QgeXMgPSB0YXJnZXRHcmFwaC5ub2Rlcy5tYXAoKG5vZGUpID0+IG5vZGUueSlcclxuICAgIGNvbnN0IHhNaW4gPSBNYXRoLm1pbiguLi54cylcclxuICAgIGNvbnN0IHhNYXggPSBNYXRoLm1heCguLi54cylcclxuICAgIGNvbnN0IHlNaW4gPSBNYXRoLm1pbiguLi55cylcclxuICAgIGNvbnN0IHlNYXggPSBNYXRoLm1heCguLi55cylcclxuXHJcbiAgICBjb25zdCBzdW0gPSAoYWNjOiBudW1iZXIsIHg6IG51bWJlcikgPT4gYWNjICsgeFxyXG4gICAgY29uc3QgeE1pZCA9IHhzLnJlZHVjZShzdW0pIC8geHMubGVuZ3RoXHJcbiAgICBjb25zdCB5TWlkID0geXMucmVkdWNlKHN1bSkgLyB5cy5sZW5ndGhcclxuXHJcbiAgICB0YXJnZXRHcmFwaC5ub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XHJcbiAgICAgICAgbm9kZS54ID0gKChub2RlLnggLSB4TWlkKSAvICh4TWF4IC0geE1pbikpICogc2l6ZSArIGNlbnRlclhcclxuICAgICAgICBub2RlLnkgPSAoKG5vZGUueSAtIHlNaWQpIC8gKHlNYXggLSB5TWluKSkgKiBzaXplICsgY2VudGVyWVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gdGFyZ2V0R3JhcGhcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9