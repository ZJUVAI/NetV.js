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
exports.elementReservedKeys = exports.label = exports.link = exports.node = exports.linkLimit = exports.nodeLimit = exports.enablePanZoom = exports.backgroundColor = exports.height = exports.width = void 0;
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
    },
    showLabel: false
    // textOffset: { x: 8, y: 0 }, put in label config instead of each node
};
exports.link = {
    style: {
        shape: 'line',
        strokeColor: { r: 0.4, g: 0.6, b: 0.8, a: 0.5 },
        strokeWidth: 2
    }
};
exports.label = {
    offset: { x: 8, y: 0 },
    fontSize: 18,
    strokeWidth: 0.5
};
exports.elementReservedKeys = new Set([
    'id',
    'x',
    'y',
    'label',
    'text',
    'style',
    'clickCallback',
    'hoverCallback'
]);


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
const configs_1 = __webpack_require__(/*! ../configs */ "./src/configs.ts");
class Element {
    constructor(core, data) {
        this.$_style = {};
        this.$_mousedownCallbackSet = new Set();
        this.$_mouseupCallbackSet = new Set();
        this.$_hoverCallbackSet = new Set();
        this.$_clickCallbackSet = new Set();
        this.$_attributes = {};
        const type = this.constructor.name.toLowerCase();
        this.$_core = core;
        const defaultConfigs = this.$_core.$_configs;
        // set attributes
        for (const key in data) {
            if (!configs_1.elementReservedKeys.has(key)) {
                this.$_attributes[key] = data[key];
            }
        }
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
            (_a = this[callbackSetName]) === null || _a === void 0 ? void 0 : _a.add(callback);
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
            (_a = this[callbackSetName]) === null || _a === void 0 ? void 0 : _a.delete(callback);
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
        if (value !== undefined) {
            this.$_attributes[key] = value;
        }
        return this.$_attributes[key];
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
        const defaultConfigs = this.$_core.$_configs;
        const data = Object.assign({
            x: this.$_position.x,
            y: this.$_position.y,
            showLabel: defaultConfigs.node.showLabel,
            text: defaultConfigs.node.text
        }, nodeData);
        this.$_setId(data.id);
        this.$_position = {
            x: data.x,
            y: data.y
        };
        this.$_showLabel = data.showLabel;
        this.$_text = data.text;
        if (this.$_showLabel) {
            this.showLabel(true);
        }
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
const label_1 = __webpack_require__(/*! ./label/label */ "./src/label/label.ts");
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
        this.labelManager = new label_1.LabelManager(this);
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
    /**
     * @description event listener
     * @memberof NetV
     */
    on(eventName, callback) {
        if (eventName.toLowerCase() === 'zoom') {
            this.$_interactionManager.onZoom(callback);
        }
        else if (eventName.toLowerCase() === 'pan') {
            this.$_interactionManager.onPan(callback);
        }
        else if (eventName.toLowerCase() === 'lasso') {
            console.log('lass');
        }
    }
    /**
     * @description turn off event listener
     *
     * @memberof NetV
     */
    off(eventName, callback) {
        if (eventName.toLowerCase() === 'zoom') {
            this.$_interactionManager.offZoom(callback);
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
    onPan(callback) {
        this.panCallbackSet.add(callback);
        if (!this.isMouseListened) {
            this.addMouseListeners();
            this.isMouseListened = true;
        }
    }
    offPan(callback) {
        this.panCallbackSet.delete(callback);
        if (!this.panCallbackSet.size && this.mouseEventCallbackCount <= 0) {
            // no pan callback functions and no listened mouse event on elements
            this.removeMouseListeners();
            this.isMouseListened = false;
        }
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
        if (((_a = this.mouseDownElement) === null || _a === void 0 ? void 0 : _a.element.constructor.name) === 'Node') {
            const element = this.mouseDownElement.element; // only node can be dragged
            // record orgin position for drag
            this.mouseDownElementOriginPos = Object.assign({}, element.position());
            element.$_mousedownCallbackSet.forEach((callback) => {
                callback({
                    event: evt,
                    name: 'mousedown',
                    element
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
        var _a;
        let newTransform = Object.assign({}, this.netv.$_transform);
        const x = evt.offsetX || evt.pageX - this.canvas.offsetLeft;
        const y = evt.offsetY || evt.pageY - this.canvas.offsetTop;
        const lastIsMouseMove = this.isMouseMove;
        if (this.isMouseDown) {
            this.isMouseMove = true;
            if (!this.mouseDownElement ||
                this.mouseDownElement.element.constructor.name !== 'Node') {
                // pan, when not dragging node
                newTransform.x = this.dragStartTransform.x + x - this.mouseDownPos.x;
                newTransform.y = this.dragStartTransform.y + y - this.mouseDownPos.y;
                if (this.panCallbackSet.size) {
                    this.netv.transform(newTransform);
                    this.panCallbackSet.forEach((callback) => callback({
                        event: evt,
                        name: 'pan',
                        transform: newTransform
                    }));
                }
            }
            else {
                // drag node
                const element = this.mouseDownElement.element;
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
                if (element.$_dragstartCallbackSet.size +
                    element.$_draggingCallbackSet.size +
                    element.$_dragendCallbackSet.size) {
                    // drag node
                    element.position({
                        x: this.mouseDownElementOriginPos.x +
                            (x - this.mouseDownPos.x) / newTransform.k,
                        y: this.mouseDownElementOriginPos.y +
                            (y - this.mouseDownPos.y) / newTransform.k
                    });
                    this.netv.draw();
                    // when dragging, dynamic change label's position. because only operate on single element, it's ok to remove and recreate
                    element.showLabel(false);
                    element.showLabel(true);
                }
                element.$_draggingCallbackSet.forEach((callback) => {
                    callback({
                        event: evt,
                        name: 'dragging',
                        element
                    });
                });
            }
        }
        else {
            // hover
            const yInv = this.netv.$_configs.height - y;
            const element = (_a = this.netv.getElementByPosition({ x, y: yInv })) === null || _a === void 0 ? void 0 : _a.element;
            if (element === null || element === void 0 ? void 0 : element.$_hoverCallbackSet.size) {
                element.$_hoverCallbackSet.forEach((callback) => callback({
                    event: evt,
                    name: 'hover',
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
        this.$_svg.setAttribute('transform', `translate(${this.$_offset.x + (1 - transform.k) * -400 + transform.x}
             ${this.$_offset.y + (1 - transform.k) * -300 + transform.y})
             scale(${transform.k})`);
        this.$_svg.setAttribute('font-size', `${this.$_fontSize / transform.k}px`);
        this.$_svg.setAttribute('stroke-width', `${this.$_strokeWidth / transform.k}px`);
    }
}
exports.LabelManager = LabelManager;


/***/ }),

/***/ "./src/renderer/elements/element/render-element.ts":
/*!*********************************************************!*\
  !*** ./src/renderer/elements/element/render-element.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderElementManager = void 0;
const utils_1 = __webpack_require__(/*! ../../utils */ "./src/renderer/utils.ts");
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

/***/ "./src/renderer/elements/link/fragment.hlsl":
/*!**************************************************!*\
  !*** ./src/renderer/elements/link/fragment.hlsl ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\r\nprecision highp float;\r\nin vec4 strokeColor;\r\n\r\nout vec4 fragmentColor;\r\n\r\nvoid main(void) {\r\n    fragmentColor = vec4(strokeColor.rgb * strokeColor.a, strokeColor.a);\r\n}");

/***/ }),

/***/ "./src/renderer/elements/link/id-fragment.hlsl":
/*!*****************************************************!*\
  !*** ./src/renderer/elements/link/id-fragment.hlsl ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\r\nprecision highp float;\r\nin vec4 strokeColor;\r\n\r\nin vec4 id;\r\n\r\n// TODO: all id related shader need clean up\r\nout vec4 fragmentColor;\r\n\r\nvoid main(void) {\r\n    fragmentColor = id;\r\n}");

/***/ }),

/***/ "./src/renderer/elements/link/id-vertex.hlsl":
/*!***************************************************!*\
  !*** ./src/renderer/elements/link/id-vertex.hlsl ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\r\nprecision highp float;\r\nin vec3 inVertexPos;\r\nin vec2 in_source; // source node position\r\nin vec2 in_target; // target node position\r\nin float in_strokeWidth;\r\nin vec4 in_strokeColor;\r\n\r\nin vec4 in_id;\r\n\r\nout vec4 strokeColor;\r\n\r\nout vec4 id;\r\n\r\nuniform mat3 projection;\r\nuniform vec2 scale;\r\nuniform vec2 translate;\r\n\r\nvoid main(void) {\r\n    id = in_id;\r\n\r\n    strokeColor = in_strokeColor;\r\n\r\n    vec2 source = in_source * scale + translate;\r\n    vec2 target = in_target * scale + translate;\r\n    vec2 delta = source - target;\r\n    vec2 center = 0.5 * (source + target);\r\n    float len = length(delta);\r\n    float phi = atan(delta.y / delta.x);\r\n\r\n    mat3 line_scale = mat3(\r\n        len, 0, 0,\r\n        0, in_strokeWidth, 0,\r\n        0, 0, 1\r\n    );\r\n    mat3 line_rotate = mat3(\r\n        cos(phi), sin(phi), 0,\r\n        -sin(phi), cos(phi), 0,\r\n        0, 0, 1\r\n    );\r\n    mat3 line_translate = mat3(\r\n        1, 0, 0,\r\n        0, 1, 0,\r\n        center.x, center.y, 1\r\n    );\r\n    \r\n    mat3 transform = line_translate * line_rotate * line_scale;\r\n\r\n    gl_Position = vec4(projection * transform * inVertexPos, 1.);\r\n}");

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
const vertex_hlsl_1 = __webpack_require__(/*! ./vertex.hlsl */ "./src/renderer/elements/link/vertex.hlsl");
const fragment_hlsl_1 = __webpack_require__(/*! ./fragment.hlsl */ "./src/renderer/elements/link/fragment.hlsl");
const id_vertex_hlsl_1 = __webpack_require__(/*! ./id-vertex.hlsl */ "./src/renderer/elements/link/id-vertex.hlsl");
const id_fragment_hlsl_1 = __webpack_require__(/*! ./id-fragment.hlsl */ "./src/renderer/elements/link/id-fragment.hlsl");
const render_element_1 = __webpack_require__(/*! ../element/render-element */ "./src/renderer/elements/element/render-element.ts");
class RenderLinkManager extends render_element_1.RenderElementManager {
    /**
     * create render link manager
     * @param gl WebGL context
     * @param params nessesary configs for link manager
     * @param idTexture texture store elements id of each pixel
     */
    constructor(gl, params, idTexture) {
        super(
        /* webgl context */ gl, Object.assign(Object.assign({}, params), { instanceVerteces: [
                -0.5, 0.5, 1.0,
                -0.5, -0.5, 1.0,
                0.5, 0.5, 1.0,
                0.5, -0.5, 1.0,
            ] }), 
        /* shader series */ {
            vertex: vertex_hlsl_1.default,
            fragment: fragment_hlsl_1.default,
            idVertex: id_vertex_hlsl_1.default,
            idFragment: id_fragment_hlsl_1.default
        }, 
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

/***/ "./src/renderer/elements/link/vertex.hlsl":
/*!************************************************!*\
  !*** ./src/renderer/elements/link/vertex.hlsl ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\r\nprecision highp float;\r\nin vec3 inVertexPos;\r\nin vec2 in_source; // source node position\r\nin vec2 in_target; // target node position\r\nin float in_strokeWidth;\r\nin vec4 in_strokeColor;\r\n\r\nout vec4 strokeColor;\r\n\r\nuniform mat3 projection;\r\nuniform vec2 scale;\r\nuniform vec2 translate;\r\n\r\nvoid main(void) {\r\n    strokeColor = in_strokeColor;\r\n\r\n    vec2 source = in_source * scale + translate;\r\n    vec2 target = in_target * scale + translate;\r\n    vec2 delta = source - target;\r\n    vec2 center = 0.5 * (source + target);\r\n    float len = length(delta);\r\n    float phi = atan(delta.y / delta.x);\r\n\r\n    mat3 line_scale = mat3(\r\n        len, 0, 0,\r\n        0, in_strokeWidth, 0,\r\n        0, 0, 1\r\n    );\r\n    mat3 line_rotate = mat3(\r\n        cos(phi), sin(phi), 0,\r\n        -sin(phi), cos(phi), 0,\r\n        0, 0, 1\r\n    );\r\n    mat3 line_translate = mat3(\r\n        1, 0, 0,\r\n        0, 1, 0,\r\n        center.x, center.y, 1\r\n    );\r\n    \r\n    mat3 transform = line_translate * line_rotate * line_scale;\r\n\r\n    gl_Position = vec4(projection * transform * inVertexPos, 1.);\r\n}");

/***/ }),

/***/ "./src/renderer/elements/node/fragment.hlsl":
/*!**************************************************!*\
  !*** ./src/renderer/elements/node/fragment.hlsl ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\r\nprecision highp float;\r\nin vec2 position;\r\nin float shape;\r\nin float width; // rect\r\nin float height; // rect\r\nin float rotate; // rect\r\nin float r; // circle\r\nin vec2 vertex_alpha; // triangle\r\nin vec2 vertex_beta; // triangle\r\nin vec2 vertex_gamma; // triangle\r\nin vec4 fill;\r\nin float strokeWidth;\r\nin vec4 strokeColor;\r\n\r\nout vec4 fragmentColor;\r\n\r\nuniform vec2 viewport;\r\nuniform float pixelRatio;\r\n\r\nvec2 calculate_inner_point (vec2 p1, vec2 p2, vec2 p3) {\r\n    float inner_p1 = sqrt(dot(p1, p1));\r\n    float inner_p2 = sqrt(dot(p2, p2));\r\n    float inner_p3 = sqrt(dot(p3, p3));\r\n    vec2 inner = (p1 * inner_p1 + p2 * inner_p2 + p3 * inner_p3) / (inner_p1 + inner_p2 + inner_p3);\r\n    return inner;\r\n}\r\n\r\nfloat calculate_stroke_scale (vec2 p1, vec2 p2, vec2 p3) {\r\n    vec2 inner = calculate_inner_point(p1, p2, p3);\r\n    float a = distance(p1, inner);\r\n    float b = distance(p2, inner);\r\n    float c = distance(p1, p2);\r\n    float cos_alpha = (pow(b, 2.0) + pow(c, 2.0) - pow(a, 2.0)) / (2.0 * b * c);\r\n    float sin_alpha = sqrt(1.0 - pow(cos_alpha, 2.0));\r\n    float normal_length = sin_alpha * a;\r\n    float stroke_scale = 1.0 + strokeWidth / 2.0 * pixelRatio / normal_length;\r\n    return stroke_scale;\r\n}\r\n\r\nfloat sign (vec2 p1, vec2 p2, vec2 p3) {\r\n    return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);\r\n}\r\n\r\nfloat inTriangle() {\r\n    float stroke_scale = calculate_stroke_scale(vertex_alpha, vertex_beta, vertex_gamma);\r\n    vec2 flip_pos = vec2(position.x, viewport.y - position.y);\r\n    vec2 flip_vertex_alpha = vec2(vertex_alpha.x, - vertex_alpha.y) / stroke_scale;\r\n    vec2 flip_vertex_beta = vec2(vertex_beta.x, - vertex_beta.y) / stroke_scale;\r\n    vec2 flip_vertex_gamma = vec2(vertex_gamma.x, - vertex_gamma.y) / stroke_scale;\r\n\r\n    float d1 = sign(gl_FragCoord.xy / pixelRatio - flip_pos, flip_vertex_alpha, flip_vertex_beta);\r\n    float d2 = sign(gl_FragCoord.xy / pixelRatio - flip_pos, flip_vertex_beta, flip_vertex_gamma);\r\n    float d3 = sign(gl_FragCoord.xy / pixelRatio - flip_pos, flip_vertex_gamma, flip_vertex_alpha);\r\n\r\n    bool has_neg = (d1 <= 0.0) || (d2 <= 0.0) || (d3 <= 0.0);\r\n    bool has_pos = (d1 >= 0.0) || (d2 >= 0.0) || (d3 >= 0.0);\r\n\r\n    if (!(has_neg && has_pos)) {\r\n        return 1.0;\r\n    } else {\r\n        return 0.0;\r\n    }\r\n}\r\n\r\nfloat inTriangleBorder() {\r\n    float stroke_scale = calculate_stroke_scale(vertex_alpha, vertex_beta, vertex_gamma);\r\n    vec2 flip_pos = vec2(position.x, viewport.y - position.y);\r\n    vec2 flip_vertex_alpha = stroke_scale * vec2(vertex_alpha.x, - vertex_alpha.y);\r\n    vec2 flip_vertex_beta = stroke_scale * vec2(vertex_beta.x, - vertex_beta.y);\r\n    vec2 flip_vertex_gamma = stroke_scale * vec2(vertex_gamma.x, - vertex_gamma.y);\r\n\r\n    float d1 = sign(gl_FragCoord.xy / pixelRatio - flip_pos, flip_vertex_alpha, flip_vertex_beta);\r\n    float d2 = sign(gl_FragCoord.xy / pixelRatio - flip_pos, flip_vertex_beta, flip_vertex_gamma);\r\n    float d3 = sign(gl_FragCoord.xy / pixelRatio - flip_pos, flip_vertex_gamma, flip_vertex_alpha);\r\n\r\n    bool has_neg = (d1 <= 0.0) || (d2 <= 0.0) || (d3 <= 0.0);\r\n    bool has_pos = (d1 >= 0.0) || (d2 >= 0.0) || (d3 >= 0.0);\r\n\r\n    bool inTriangle = inTriangle() == 1.0;\r\n    bool inTriangleBorder = !(has_neg && has_pos);\r\n\r\n    if (!inTriangle && inTriangleBorder) {\r\n        return 1.0;\r\n    } else {\r\n        return 0.0;\r\n    }\r\n}\r\n\r\nfloat inRect() {\r\n    vec2 flip_pos = position;\r\n    flip_pos.y = viewport.y - position.y;\r\n    mat2 rotate_mat = mat2(\r\n        cos(rotate), sin(rotate),\r\n        -sin(rotate), cos(rotate)\r\n    );\r\n    vec2 rotate_related_FragCoord = rotate_mat * (gl_FragCoord.xy / pixelRatio - flip_pos);\r\n    float x_in = step(rotate_related_FragCoord.x, width / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.x, - width / 2.0 + strokeWidth / 2.0));\r\n    float y_in = step(rotate_related_FragCoord.y, height / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.y, - height / 2.0 + strokeWidth / 2.0));\r\n    return x_in * y_in;\r\n}\r\n\r\nfloat inRectBorder() {\r\n    vec2 flip_pos = position;\r\n    flip_pos.y = viewport.y - position.y;\r\n    mat2 rotate_mat = mat2(\r\n        cos(rotate), sin(rotate),\r\n        -sin(rotate), cos(rotate)\r\n    );\r\n    vec2 rotate_related_FragCoord = rotate_mat * (gl_FragCoord.xy / pixelRatio - flip_pos);\r\n    float x_in_outer = step(rotate_related_FragCoord.x, width / 2.0 + strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.x, - width / 2.0 - strokeWidth / 2.0));\r\n    float y_in_outer = step(rotate_related_FragCoord.y, height / 2.0 + strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.y, - height / 2.0 - strokeWidth / 2.0));\r\n    float x_in_inner = step(rotate_related_FragCoord.x, width / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.x, - width / 2.0 + strokeWidth / 2.0));\r\n    float y_in_inner = step(rotate_related_FragCoord.y, height / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.y, - height / 2.0 + strokeWidth / 2.0));\r\n\r\n    return x_in_outer * y_in_outer * (1.0 - x_in_inner * y_in_inner);\r\n}\r\n\r\nfloat inCircle() {\r\n    vec2 flip_pos = position;\r\n    flip_pos.y = viewport.y - position.y;\r\n    float dist = distance(gl_FragCoord.xy / pixelRatio, flip_pos);\r\n    float dist_in_r = step(dist, r - strokeWidth / 2.);\r\n    return dist_in_r;\r\n}\r\n\r\nfloat inCircleBorder() {\r\n    if (strokeWidth == 0.) {\r\n      return 0.;\r\n    }\r\n    vec2 flip_pos = position;\r\n    flip_pos.y = viewport.y - position.y;\r\n\r\n    float dist = distance(gl_FragCoord.xy / pixelRatio, flip_pos);\r\n    float drawOuter = 1. - smoothstep((r + strokeWidth / 2.) * 0.95, (r + strokeWidth / 2.) * 1.05, dist);\r\n    float drawInner = 1. - step(r - strokeWidth / 2., dist);\r\n    return drawOuter * (1. - drawInner);\r\n}\r\n\r\nvoid main(void) {\r\n    if (shape == 0.0) {\r\n        // circle shape\r\n        // border check, using 0.5(center of smoothstep)\r\n        if (inCircle() < 1. && (strokeWidth < 0.8 || inCircleBorder() < 0.5)) {\r\n            discard;\r\n        }\r\n        fragmentColor = inCircleBorder() * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a) + inCircle() * vec4(fill.rgb * fill.a, fill.a);\r\n    } else if (shape == 1.0) {\r\n        // rect shape\r\n        fragmentColor = inRectBorder() * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a) + inRect() * vec4(fill.rgb * fill.a, fill.a);\r\n        // fragmentColor = vec4(fill.rgb * fill.a, fill.a);\r\n    } else if (shape == 2.0) {\r\n        // triangle shape\r\n        // fragmentColor = vec4(fill.rgb * fill.a, fill.a);\r\n        fragmentColor = inTriangleBorder() * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a) + inTriangle() * vec4(fill.rgb * fill.a, fill.a);\r\n    }\r\n}");

/***/ }),

/***/ "./src/renderer/elements/node/id-fragment.hlsl":
/*!*****************************************************!*\
  !*** ./src/renderer/elements/node/id-fragment.hlsl ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\r\nprecision highp float;\r\nin vec2 position;\r\nin float shape;\r\nin float width; // rect\r\nin float height; // rect\r\nin float rotate; // rect\r\nin float r; // circle\r\nin vec2 vertex_alpha; // triangle\r\nin vec2 vertex_beta; // triangle\r\nin vec2 vertex_gamma; // triangle\r\nin vec4 fill;\r\nin float strokeWidth;\r\nin vec4 strokeColor;\r\nin vec4 id;\r\n\r\nout vec4 fragmentColor;\r\n\r\nuniform vec2 viewport;\r\nuniform float pixelRatio;\r\n\r\nvec2 calculate_inner_point (vec2 p1, vec2 p2, vec2 p3) {\r\n    float inner_p1 = sqrt(dot(p1, p1));\r\n    float inner_p2 = sqrt(dot(p2, p2));\r\n    float inner_p3 = sqrt(dot(p3, p3));\r\n    vec2 inner = (p1 * inner_p1 + p2 * inner_p2 + p3 * inner_p3) / (inner_p1 + inner_p2 + inner_p3);\r\n    return inner;\r\n}\r\n\r\nfloat calculate_stroke_scale (vec2 p1, vec2 p2, vec2 p3) {\r\n    vec2 inner = calculate_inner_point(p1, p2, p3);\r\n    float a = distance(p1, inner);\r\n    float b = distance(p2, inner);\r\n    float c = distance(p1, p2);\r\n    float cos_alpha = (pow(b, 2.0) + pow(c, 2.0) - pow(a, 2.0)) / (2.0 * b * c);\r\n    float sin_alpha = sqrt(1.0 - pow(cos_alpha, 2.0));\r\n    float normal_length = sin_alpha * a;\r\n    float stroke_scale = 1.0 + strokeWidth / 2.0 * pixelRatio / normal_length;\r\n    return stroke_scale;\r\n}\r\n\r\nfloat sign (vec2 p1, vec2 p2, vec2 p3) {\r\n    return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);\r\n}\r\n\r\nfloat inTriangle() {\r\n    float stroke_scale = calculate_stroke_scale(vertex_alpha, vertex_beta, vertex_gamma);\r\n    vec2 flip_pos = vec2(position.x, viewport.y - position.y);\r\n    vec2 flip_vertex_alpha = vec2(vertex_alpha.x, - vertex_alpha.y);\r\n    vec2 flip_vertex_beta = vec2(vertex_beta.x, - vertex_beta.y);\r\n    vec2 flip_vertex_gamma = vec2(vertex_gamma.x, - vertex_gamma.y);\r\n\r\n    float d1 = sign(gl_FragCoord.xy / pixelRatio - flip_pos, flip_vertex_alpha, flip_vertex_beta);\r\n    float d2 = sign(gl_FragCoord.xy / pixelRatio - flip_pos, flip_vertex_beta, flip_vertex_gamma);\r\n    float d3 = sign(gl_FragCoord.xy / pixelRatio - flip_pos, flip_vertex_gamma, flip_vertex_alpha);\r\n\r\n    bool has_neg = (d1 <= 0.0) || (d2 <= 0.0) || (d3 <= 0.0);\r\n    bool has_pos = (d1 >= 0.0) || (d2 >= 0.0) || (d3 >= 0.0);\r\n\r\n    if (!(has_neg && has_pos)) {\r\n        return 1.0;\r\n    } else {\r\n        return 0.0;\r\n    }\r\n}\r\n\r\nfloat inTriangleBorder() {\r\n    float stroke_scale = calculate_stroke_scale(vertex_alpha, vertex_beta, vertex_gamma);\r\n    vec2 flip_pos = vec2(position.x, viewport.y - position.y);\r\n    vec2 flip_vertex_alpha = stroke_scale * vec2(vertex_alpha.x, - vertex_alpha.y);\r\n    vec2 flip_vertex_beta = stroke_scale * vec2(vertex_beta.x, - vertex_beta.y);\r\n    vec2 flip_vertex_gamma = stroke_scale * vec2(vertex_gamma.x, - vertex_gamma.y);\r\n\r\n    float d1 = sign(gl_FragCoord.xy / pixelRatio - flip_pos, flip_vertex_alpha, flip_vertex_beta);\r\n    float d2 = sign(gl_FragCoord.xy / pixelRatio - flip_pos, flip_vertex_beta, flip_vertex_gamma);\r\n    float d3 = sign(gl_FragCoord.xy / pixelRatio - flip_pos, flip_vertex_gamma, flip_vertex_alpha);\r\n\r\n    bool has_neg = (d1 <= 0.0) || (d2 <= 0.0) || (d3 <= 0.0);\r\n    bool has_pos = (d1 >= 0.0) || (d2 >= 0.0) || (d3 >= 0.0);\r\n\r\n    bool inTriangle = inTriangle() == 1.0;\r\n    bool inTriangleBorder = !(has_neg && has_pos);\r\n\r\n    if (!inTriangle && inTriangleBorder) {\r\n        return 1.0;\r\n    } else {\r\n        return 0.0;\r\n    }\r\n}\r\n\r\nfloat inRect() {\r\n    vec2 flip_pos = position;\r\n    flip_pos.y = viewport.y - position.y;\r\n    mat2 rotate_mat = mat2(\r\n        cos(rotate), sin(rotate),\r\n        -sin(rotate), cos(rotate)\r\n    );\r\n    vec2 rotate_related_FragCoord = rotate_mat * (gl_FragCoord.xy / pixelRatio - flip_pos);\r\n    float x_in = step(rotate_related_FragCoord.x, width / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.x, - width / 2.0 + strokeWidth / 2.0));\r\n    float y_in = step(rotate_related_FragCoord.y, height / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.y, - height / 2.0 + strokeWidth / 2.0));\r\n    return x_in * y_in;\r\n}\r\n\r\nfloat inRectBorder() {\r\n    vec2 flip_pos = position;\r\n    flip_pos.y = viewport.y - position.y;\r\n    mat2 rotate_mat = mat2(\r\n        cos(rotate), sin(rotate),\r\n        -sin(rotate), cos(rotate)\r\n    );\r\n    vec2 rotate_related_FragCoord = rotate_mat * (gl_FragCoord.xy / pixelRatio - flip_pos);\r\n    float x_in_outer = step(rotate_related_FragCoord.x, width / 2.0 + strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.x, - width / 2.0 - strokeWidth / 2.0));\r\n    float y_in_outer = step(rotate_related_FragCoord.y, height / 2.0 + strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.y, - height / 2.0 - strokeWidth / 2.0));\r\n    float x_in_inner = step(rotate_related_FragCoord.x, width / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.x, - width / 2.0 + strokeWidth / 2.0));\r\n    float y_in_inner = step(rotate_related_FragCoord.y, height / 2.0 - strokeWidth / 2.0) * (1.0 - step(rotate_related_FragCoord.y, - height / 2.0 + strokeWidth / 2.0));\r\n\r\n    return x_in_outer * y_in_outer * (1.0 - x_in_inner * y_in_inner);\r\n}\r\n\r\nfloat inCircle() {\r\n    vec2 flip_pos = position;\r\n    flip_pos.y = viewport.y - position.y;\r\n    float dist = distance(gl_FragCoord.xy / pixelRatio, flip_pos);\r\n    float dist_in_r = step(dist, r - strokeWidth / 2.);\r\n    return dist_in_r;\r\n}\r\n\r\nfloat inCircleBorder() {\r\n    if (strokeWidth == 0.) {\r\n      return 0.;\r\n    }\r\n    vec2 flip_pos = position;\r\n    flip_pos.y = viewport.y - position.y;\r\n\r\n    float dist = distance(gl_FragCoord.xy / pixelRatio, flip_pos);\r\n    float drawOuter = 1. - smoothstep((r + strokeWidth / 2.) * 0.95, (r + strokeWidth / 2.) * 1.05, dist);\r\n    float drawInner = 1. - step(r - strokeWidth / 2., dist);\r\n    return drawOuter * (1. - drawInner);\r\n}\r\n\r\nvoid main(void) {\r\n    if (shape == 0.0) {\r\n        // circle shape\r\n        // border check, using 0.5(center of smoothstep)\r\n        if (inCircle() < 1. && (strokeWidth < 0.8 || inCircleBorder() < 0.5)) {\r\n            discard;\r\n        }\r\n        fragmentColor = id;\r\n    } else if (shape == 1.0) {\r\n        // rect shape\r\n        if (inRect() < 1.0 && (strokeWidth < 0.8 || inRectBorder() < 0.5)) {\r\n            discard;\r\n        }\r\n        fragmentColor = id;\r\n        // fragmentColor = vec4(fill.rgb * fill.a, fill.a);\r\n    } else if (shape == 2.0) {\r\n        // triangle shape\r\n        if (inTriangle() < 1.0 && (strokeWidth < 0.8 || inTriangleBorder() < 0.5)) {\r\n            discard;\r\n        }\r\n        fragmentColor = id;\r\n    }\r\n}");

/***/ }),

/***/ "./src/renderer/elements/node/id-vertex.hlsl":
/*!***************************************************!*\
  !*** ./src/renderer/elements/node/id-vertex.hlsl ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\r\nprecision highp float;\r\nin vec3 inVertexPos;\r\nin float in_shape;\r\nin vec2 in_position;\r\nin vec2 in_offset;\r\nin float in_width; // rect\r\nin float in_height; // rect\r\nin float in_rotate; // rect\r\nin float in_r; // circle\r\nin vec2 in_vertex_alpha; // triangle\r\nin vec2 in_vertex_beta; // triangle\r\nin vec2 in_vertex_gamma; // triangle\r\nin vec4 in_fill;\r\nin float in_strokeWidth;\r\nin vec4 in_strokeColor;\r\nin vec4 in_id;\r\n\r\nout vec2 position;\r\nout float shape;\r\nout float width; // rect\r\nout float height; // rect\r\nout float rotate; // rect\r\nout float r; // circle\r\nout vec2 vertex_alpha; // triangle\r\nout vec2 vertex_beta; // triangle\r\nout vec2 vertex_gamma; // triangle\r\nout vec4 fill;\r\nout float strokeWidth;\r\nout vec4 strokeColor;\r\nout vec4 id;\r\n\r\nuniform mat3 projection;\r\nuniform vec2 scale;\r\nuniform vec2 translate;\r\nuniform vec2 viewport;\r\nuniform float pixelRatio;\r\n\r\n\r\nvec2 calculate_inner_point (vec2 p1, vec2 p2, vec2 p3) {\r\n    float inner_p1 = sqrt(dot(p1, p1));\r\n    float inner_p2 = sqrt(dot(p2, p2));\r\n    float inner_p3 = sqrt(dot(p3, p3));\r\n    vec2 inner = (p1 * inner_p1 + p2 * inner_p2 + p3 * inner_p3) / (inner_p1 + inner_p2 + inner_p3);\r\n    return inner;\r\n}\r\n\r\nfloat calculate_stroke_scale (vec2 p1, vec2 p2, vec2 p3) {\r\n    vec2 inner = calculate_inner_point(p1, p2, p3);\r\n    float a = distance(p1, inner);\r\n    float b = distance(p2, inner);\r\n    float c = distance(p1, p2);\r\n    float cos_alpha = (pow(b, 2.0) + pow(c, 2.0) - pow(a, 2.0)) / (2.0 * b * c);\r\n    float sin_alpha = sqrt(1.0 - pow(cos_alpha, 2.0));\r\n    float normal_length = sin_alpha * a;\r\n    float stroke_scale = 1.0 + strokeWidth / 2.0 * pixelRatio / normal_length;\r\n    return stroke_scale;\r\n}\r\n\r\nvoid main(void) {\r\n    id = in_id;\r\n    r = in_r;\r\n    width = in_width;\r\n    height = in_height;\r\n    shape = in_shape;\r\n    fill = in_fill;\r\n    strokeColor = in_strokeColor;\r\n    strokeWidth = in_strokeWidth;\r\n    rotate = in_rotate;\r\n    \r\n    position = scale * (in_position + in_offset) + translate;\r\n    vertex_alpha = in_vertex_alpha * pixelRatio;\r\n    vertex_beta = in_vertex_beta * pixelRatio;\r\n    vertex_gamma = in_vertex_gamma * pixelRatio;\r\n\r\n    mat3 scale_mat = mat3(\r\n        1, 0, 0,\r\n        0, 1, 0,\r\n        0, 0, 1\r\n    );\r\n    mat3 rotate_mat = mat3(\r\n        1, 0, 0,\r\n        0, 1, 0,\r\n        0, 0, 1\r\n    );\r\n    mat3 translate_mat = mat3(\r\n        1, 0, 0,\r\n        0, 1, 0,\r\n        position.x, position.y, 1\r\n    );\r\n\r\n    if (shape == 0.0) { // circle shape\r\n        float size = (r + strokeWidth / 2.) * 2. * 1.5;  // NOTE: multiply 2. to make radius to diameter; multiply 1.5 to prevent border factor\r\n        scale_mat = mat3(\r\n            size, 0, 0,\r\n            0, size, 0,\r\n            0, 0, 1\r\n        );\r\n    } else if (shape == 1.0) { // rect shape\r\n        scale_mat = mat3(\r\n            width + strokeWidth, 0, 0,\r\n            0, height + strokeWidth, 0,\r\n            0, 0, 1\r\n        );\r\n        rotate_mat = mat3(\r\n            cos(rotate), sin(rotate), 0,\r\n            -sin(rotate), cos(rotate), 0,\r\n            0, 0, 1\r\n        );\r\n    } else if (shape == 2.0) { // triangle shape\r\n        // calculate the normal of the edge: alpha => beta\r\n        vec2 inner = calculate_inner_point(vertex_alpha, vertex_beta, vertex_gamma);\r\n        float stroke_scale = calculate_stroke_scale(vertex_alpha, vertex_beta, vertex_gamma);\r\n\r\n        vec2 outer_vertex_alpha = (vertex_alpha - inner) * stroke_scale + inner ; // consider stroke in\r\n        vec2 outer_vertex_beta = (vertex_beta - inner) * stroke_scale + inner ; // consider stroke in\r\n        vec2 outer_vertex_gamma = (vertex_gamma - inner) * stroke_scale + inner ; // consider stroke in\r\n\r\n\r\n        width = (max(max(outer_vertex_alpha.x, outer_vertex_beta.x), outer_vertex_gamma.x) - min(min(outer_vertex_alpha.x, outer_vertex_beta.x), outer_vertex_gamma.x));\r\n        height = stroke_scale * (max(max(outer_vertex_alpha.y, outer_vertex_beta.y), outer_vertex_gamma.y)- min(min(outer_vertex_alpha.y, outer_vertex_beta.y), outer_vertex_gamma.y));\r\n\r\n        scale_mat = mat3(\r\n            width, 0, 0,\r\n            0, height, 0,\r\n            0, 0, 1\r\n        );\r\n    }\r\n\r\n    mat3 transform = translate_mat * rotate_mat * scale_mat;\r\n\r\n    gl_Position = vec4(projection * transform * inVertexPos, 1.);\r\n}");

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
const vertex_hlsl_1 = __webpack_require__(/*! ./vertex.hlsl */ "./src/renderer/elements/node/vertex.hlsl");
const fragment_hlsl_1 = __webpack_require__(/*! ./fragment.hlsl */ "./src/renderer/elements/node/fragment.hlsl");
const id_vertex_hlsl_1 = __webpack_require__(/*! ./id-vertex.hlsl */ "./src/renderer/elements/node/id-vertex.hlsl");
const id_fragment_hlsl_1 = __webpack_require__(/*! ./id-fragment.hlsl */ "./src/renderer/elements/node/id-fragment.hlsl");
const render_element_1 = __webpack_require__(/*! ../element/render-element */ "./src/renderer/elements/element/render-element.ts");
class RenderNodeManager extends render_element_1.RenderElementManager {
    // private idToIndex: { [key: string]: number }
    /**
     * create render node manager
     * @param gl WebGL context
     * @param params nessesary configs for node manager
     * @param idTexture texture store elements id of each pixel
     */
    constructor(gl, params, idTexture) {
        super(
        /* webgl context */ gl, Object.assign(Object.assign({}, params), { instanceVerteces: [
                -0.5, 0.5, 1.0,
                -0.5, -0.5, 1.0,
                0.5, 0.5, 1.0,
                0.5, -0.5, 1.0,
            ] }), 
        /* shader series */ {
            vertex: vertex_hlsl_1.default,
            fragment: fragment_hlsl_1.default,
            idVertex: id_vertex_hlsl_1.default,
            idFragment: id_fragment_hlsl_1.default
        }, 
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
            else if (attr.name === 'in_vertex_alpha') {
                attr.extractAttributeValueFrom = (node) => {
                    const vertexAlpha = node.vertexAlpha();
                    return [vertexAlpha.x, vertexAlpha.y];
                };
            }
            else if (attr.name === 'in_vertex_beta') {
                attr.extractAttributeValueFrom = (node) => {
                    const vertexAlpha = node.vertexBeta();
                    return [vertexAlpha.x, vertexAlpha.y];
                };
            }
            else if (attr.name === 'in_vertex_gamma') {
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

/***/ "./src/renderer/elements/node/vertex.hlsl":
/*!************************************************!*\
  !*** ./src/renderer/elements/node/vertex.hlsl ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\r\nprecision highp float;\r\nin vec3 inVertexPos;\r\nin float in_shape;\r\nin vec2 in_position;\r\nin vec2 in_offset;\r\nin float in_width; // rect\r\nin float in_height; // rect\r\nin float in_rotate; // rect\r\nin float in_r; // circle\r\nin vec2 in_vertex_alpha; // triangle\r\nin vec2 in_vertex_beta; // triangle\r\nin vec2 in_vertex_gamma; // triangle\r\nin vec4 in_fill;\r\nin float in_strokeWidth;\r\nin vec4 in_strokeColor;\r\n\r\nout vec2 position;\r\nout float shape;\r\nout float width; // rect\r\nout float height; // rect\r\nout float rotate; // rect\r\nout float r; // circle\r\nout vec2 vertex_alpha; // triangle\r\nout vec2 vertex_beta; // triangle\r\nout vec2 vertex_gamma; // triangle\r\nout vec4 fill;\r\nout float strokeWidth;\r\nout vec4 strokeColor;\r\n\r\nuniform mat3 projection;\r\nuniform vec2 scale;\r\nuniform vec2 translate;\r\nuniform vec2 viewport;\r\nuniform float pixelRatio;\r\n\r\n\r\nvec2 calculate_inner_point (vec2 p1, vec2 p2, vec2 p3) {\r\n    float inner_p1 = sqrt(dot(p1, p1));\r\n    float inner_p2 = sqrt(dot(p2, p2));\r\n    float inner_p3 = sqrt(dot(p3, p3));\r\n    vec2 inner = (p1 * inner_p1 + p2 * inner_p2 + p3 * inner_p3) / (inner_p1 + inner_p2 + inner_p3);\r\n    return inner;\r\n}\r\n\r\nfloat calculate_stroke_scale (vec2 p1, vec2 p2, vec2 p3) {\r\n    vec2 inner = calculate_inner_point(p1, p2, p3);\r\n    float a = distance(p1, inner);\r\n    float b = distance(p2, inner);\r\n    float c = distance(p1, p2);\r\n    float cos_alpha = (pow(b, 2.0) + pow(c, 2.0) - pow(a, 2.0)) / (2.0 * b * c);\r\n    float sin_alpha = sqrt(1.0 - pow(cos_alpha, 2.0));\r\n    float normal_length = sin_alpha * a;\r\n    float stroke_scale = 1.0 + strokeWidth / 2.0 * pixelRatio / normal_length;\r\n    return stroke_scale;\r\n}\r\n\r\nvoid main(void) {\r\n    r = in_r;\r\n    width = in_width;\r\n    height = in_height;\r\n    shape = in_shape;\r\n    fill = in_fill;\r\n    strokeColor = in_strokeColor;\r\n    strokeWidth = in_strokeWidth;\r\n    rotate = in_rotate;\r\n    \r\n    position = scale * (in_position + in_offset) + translate;\r\n    vertex_alpha = in_vertex_alpha * pixelRatio;\r\n    vertex_beta = in_vertex_beta * pixelRatio;\r\n    vertex_gamma = in_vertex_gamma * pixelRatio;\r\n\r\n    mat3 scale_mat = mat3(\r\n        1, 0, 0,\r\n        0, 1, 0,\r\n        0, 0, 1\r\n    );\r\n    mat3 rotate_mat = mat3(\r\n        1, 0, 0,\r\n        0, 1, 0,\r\n        0, 0, 1\r\n    );\r\n    mat3 translate_mat = mat3(\r\n        1, 0, 0,\r\n        0, 1, 0,\r\n        position.x, position.y, 1\r\n    );\r\n\r\n    if (shape == 0.0) { // circle shape\r\n        float size = (r + strokeWidth / 2.) * 2. * 1.5;  // NOTE: multiply 2. to make radius to diameter; multiply 1.5 to prevent border factor\r\n        scale_mat = mat3(\r\n            size, 0, 0,\r\n            0, size, 0,\r\n            0, 0, 1\r\n        );\r\n    } else if (shape == 1.0) { // rect shape\r\n        scale_mat = mat3(\r\n            width + strokeWidth, 0, 0,\r\n            0, height + strokeWidth, 0,\r\n            0, 0, 1\r\n        );\r\n        rotate_mat = mat3(\r\n            cos(rotate), sin(rotate), 0,\r\n            -sin(rotate), cos(rotate), 0,\r\n            0, 0, 1\r\n        );\r\n    } else if (shape == 2.0) { // triangle shape\r\n        // calculate the normal of the edge: alpha => beta\r\n        vec2 inner = calculate_inner_point(vertex_alpha, vertex_beta, vertex_gamma);\r\n        float stroke_scale = calculate_stroke_scale(vertex_alpha, vertex_beta, vertex_gamma);\r\n\r\n        vec2 outer_vertex_alpha = (vertex_alpha - inner) * stroke_scale + inner ; // consider stroke in\r\n        vec2 outer_vertex_beta = (vertex_beta - inner) * stroke_scale + inner ; // consider stroke in\r\n        vec2 outer_vertex_gamma = (vertex_gamma - inner) * stroke_scale + inner ; // consider stroke in\r\n\r\n        // to ensure the fragment cutting is within the rectangle\r\n        width = 1.5 * (max(max(outer_vertex_alpha.x, outer_vertex_beta.x), outer_vertex_gamma.x) - min(min(outer_vertex_alpha.x, outer_vertex_beta.x), outer_vertex_gamma.x));\r\n        height = 1.5 * (max(max(outer_vertex_alpha.y, outer_vertex_beta.y), outer_vertex_gamma.y)- min(min(outer_vertex_alpha.y, outer_vertex_beta.y), outer_vertex_gamma.y));\r\n\r\n        scale_mat = mat3(\r\n            width, 0, 0,\r\n            0, height, 0,\r\n            0, 0, 1\r\n        );\r\n    }\r\n\r\n    mat3 transform = translate_mat * rotate_mat * scale_mat;\r\n\r\n    gl_Position = vec4(projection * transform * inVertexPos, 1.);\r\n}");

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
        this.nodeManager = new render_node_1.RenderNodeManager(this.gl, { width, height, limit: nodeLimit }, this.idTexture);
        this.linkManager = new render_link_1.RenderLinkManager(this.gl, { width, height, limit: linkLimit }, this.idTexture);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YXNldC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YXNldC9taXNlcmFibGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhc2V0L3BhdGVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2VsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2xpbmsudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL25vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmFjdGlvbi9pbnRlcmFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFiZWwvbGFiZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL2VsZW1lbnRzL2VsZW1lbnQvcmVuZGVyLWVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL2VsZW1lbnRzL2xpbmsvZnJhZ21lbnQuaGxzbCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvZWxlbWVudHMvbGluay9pZC1mcmFnbWVudC5obHNsIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlci9lbGVtZW50cy9saW5rL2lkLXZlcnRleC5obHNsIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlci9lbGVtZW50cy9saW5rL3JlbmRlci1saW5rLnRzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlci9lbGVtZW50cy9saW5rL3ZlcnRleC5obHNsIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlci9lbGVtZW50cy9ub2RlL2ZyYWdtZW50Lmhsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL2VsZW1lbnRzL25vZGUvaWQtZnJhZ21lbnQuaGxzbCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvZWxlbWVudHMvbm9kZS9pZC12ZXJ0ZXguaGxzbCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvZWxlbWVudHMvbm9kZS9yZW5kZXItbm9kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvZWxlbWVudHMvbm9kZS92ZXJ0ZXguaGxzbCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvbWFwMi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7R0FHRzs7O0FBS1UsYUFBSyxHQUFHLEdBQUc7QUFDWCxjQUFNLEdBQUcsR0FBRztBQUNaLHVCQUFlLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQzVDLHFCQUFhLEdBQUcsSUFBSTtBQUNwQixpQkFBUyxHQUFHLEdBQUc7QUFDZixpQkFBUyxHQUFHLElBQUk7QUFFaEIsWUFBSSxHQUFHO0lBQ2hCLEtBQUssRUFBRTtRQUNILEtBQUssRUFBRSxRQUFRO1FBQ2YsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQ3RCLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUU7UUFDeEMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRTtRQUMvQyxXQUFXLEVBQUUsQ0FBQztRQUNkLHlCQUF5QjtRQUN6QixDQUFDLEVBQUUsQ0FBQztRQUNKLHVCQUF1QjtRQUN2QixLQUFLLEVBQUUsQ0FBQztRQUNSLE1BQU0sRUFBRSxDQUFDO1FBQ1QsTUFBTSxFQUFFLENBQUM7UUFDVCwyQkFBMkI7UUFDM0IsV0FBVyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7UUFDNUIsVUFBVSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUMxQyxXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtLQUM3QztJQUNELFNBQVMsRUFBRSxLQUFLO0lBQ2hCLHVFQUF1RTtDQUMxRTtBQUVZLFlBQUksR0FBRztJQUNoQixLQUFLLEVBQUU7UUFDSCxLQUFLLEVBQUUsTUFBTTtRQUNiLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUU7UUFDL0MsV0FBVyxFQUFFLENBQUM7S0FDakI7Q0FDSjtBQUVZLGFBQUssR0FBRztJQUNqQixNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7SUFDdEIsUUFBUSxFQUFFLEVBQUU7SUFDWixXQUFXLEVBQUUsR0FBRztDQUNuQjtBQUVZLDJCQUFtQixHQUFHLElBQUksR0FBRyxDQUFDO0lBQ3ZDLElBQUk7SUFDSixHQUFHO0lBQ0gsR0FBRztJQUNILE9BQU87SUFDUCxNQUFNO0lBQ04sT0FBTztJQUNQLGVBQWU7SUFDZixlQUFlO0NBQ2xCLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDNURGOzs7R0FHRzs7O0FBRUgsNEZBQXlDO0FBR2hDLDJGQUhBLHVCQUFVLE9BR0E7QUFGbkIsbUZBQW1DO0FBRWQsd0ZBRlosaUJBQU8sT0FFWTs7Ozs7Ozs7Ozs7Ozs7QUNSNUI7OztHQUdHOzs7QUFFSDs7R0FFRztBQUVVLGtCQUFVLEdBQUc7SUFDdEIsS0FBSyxFQUFFO1FBQ0gsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hFLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNoRixFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzVFLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDN0UsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RSxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzdFLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDekUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzNFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDeEUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hFLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDMUUsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMxRSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZFLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDM0UsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN6RSxFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDN0UsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUM1RSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkUsRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUM5RSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzNFLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDekUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzVFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RSxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzdFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEUsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMzRSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzdFLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDMUUsRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUM1RSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RSxFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDaEYsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzFFLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDM0UsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN6RSxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzVFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckUsRUFBRSxFQUFFLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xGLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDOUUsRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUM1RSxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDL0UsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzNFLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDMUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzFFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BFLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDekUsRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzdFLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDMUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzNFLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDNUUsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMxRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQ3ZFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDdkUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RSxFQUFFLEVBQUUsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO0tBQ2pGO0lBRUQsS0FBSyxFQUFFO1FBQ0gsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDL0QsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQy9DLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDaEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMxRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RCxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hELEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFNBQVMs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UUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2hELEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDaEQsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMxRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQy9DLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMxRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMs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QU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDL0MsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMvQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2hELEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNoRCxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQy9DLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzlDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDOUMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFF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QUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDMUQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMxRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNoRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQy9DLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDeEQsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzFELEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDeEQsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMzRCxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3pELEVBQUUs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QUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUU7UUFDM0MsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRTtRQUMzQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRTtRQUMzQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRTtRQUMzQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FB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bkUsTUFBTSxFQUFFLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEQsTUFBTSxFQUFFLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM1QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzVCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDNUIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUU1QixNQUFNLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQzlCLE1BQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7SUFFOUIsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUMvQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLE9BQU87UUFDM0QsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxPQUFPO0lBQy9ELENBQUMsQ0FBQztJQUVGLE9BQU8sV0FBVztBQUN0QixDQUFDO0FBdkJELHdEQXVCQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFnQixRQUFRLENBQUMsZ0JBQXdCLEVBQUUsZ0JBQXdCO0lBQ3ZFLElBQUksZ0JBQWdCLEtBQUssTUFBTSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7UUFDL0Msb0NBQW9DO1FBQ3BDLElBQUksZ0JBQWdCLEtBQUssTUFBTSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDL0Msb0NBQW9DO1lBQ3BDLE9BQU8sZ0JBQWdCO1NBQzFCO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUMsWUFBWTtTQUNuRTtLQUNKO0lBRUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBQyxZQUFZO0lBQ3hFLEtBQUssTUFBTSxHQUFHLElBQUksZ0JBQWdCLEVBQUU7UUFDaEMsSUFBSSxHQUFHLElBQUksTUFBTSxJQUFJLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQzFFLHdDQUF3QztZQUN4QyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3RDthQUFNO1lBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztTQUN0QztLQUNKO0lBQ0QsT0FBTyxNQUFNO0FBQ2pCLENBQUM7QUFyQkQsNEJBcUJDIiwiZmlsZSI6Ik5ldFYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gZGVmYXVsdCBjb25maWd1cmF0aW9ucyBpbiBOZXRWXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XHJcbiAqL1xyXG5cclxuaW1wb3J0IE5vZGUgZnJvbSAnLi9lbGVtZW50cy9ub2RlJ1xyXG5pbXBvcnQgTGluayBmcm9tICcuL2VsZW1lbnRzL2xpbmsnXHJcblxyXG5leHBvcnQgY29uc3Qgd2lkdGggPSA4MDBcclxuZXhwb3J0IGNvbnN0IGhlaWdodCA9IDYwMFxyXG5leHBvcnQgY29uc3QgYmFja2dyb3VuZENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAxLCBhOiAxIH1cclxuZXhwb3J0IGNvbnN0IGVuYWJsZVBhblpvb20gPSB0cnVlXHJcbmV4cG9ydCBjb25zdCBub2RlTGltaXQgPSAxMDBcclxuZXhwb3J0IGNvbnN0IGxpbmtMaW1pdCA9IDEwMDBcclxuXHJcbmV4cG9ydCBjb25zdCBub2RlID0ge1xyXG4gICAgc3R5bGU6IHtcclxuICAgICAgICBzaGFwZTogJ2NpcmNsZScsIC8vIGRlZmF1bHQgc2hhcGVcclxuICAgICAgICBvZmZzZXQ6IHsgeDogMCwgeTogMCB9LFxyXG4gICAgICAgIGZpbGw6IHsgcjogMC4yLCBnOiAwLjYsIGI6IDAuMiwgYTogMC44IH0sXHJcbiAgICAgICAgc3Ryb2tlQ29sb3I6IHsgcjogMC45LCBnOiAwLjksIGI6IDAuOSwgYTogMC42IH0sXHJcbiAgICAgICAgc3Ryb2tlV2lkdGg6IDIsXHJcbiAgICAgICAgLyogY2lyY2xlIHNoYXBlIHN0eWxlcyAqL1xyXG4gICAgICAgIHI6IDUsXHJcbiAgICAgICAgLyogcmVjdCBzaGFwZSBzdHlsZXMgKi9cclxuICAgICAgICB3aWR0aDogNSxcclxuICAgICAgICBoZWlnaHQ6IDUsXHJcbiAgICAgICAgcm90YXRlOiAwLCAvLyAtcGkgdG8gK3BpLCBwb3NpdGl2ZSB2YWx1ZSBtZWFucyBjbG9ja3dpc2VcclxuICAgICAgICAvKiB0cmlhbmdsZSBzaGFwZSBzdHlsZXMgKi9cclxuICAgICAgICB2ZXJ0ZXhBbHBoYTogeyB4OiAwLCB5OiAtNCB9LFxyXG4gICAgICAgIHZlcnRleEJldGE6IHsgeDogLTIgKiBNYXRoLnNxcnQoMyksIHk6IDIgfSxcclxuICAgICAgICB2ZXJ0ZXhHYW1tYTogeyB4OiAyICogTWF0aC5zcXJ0KDMpLCB5OiAyIH1cclxuICAgIH0sXHJcbiAgICBzaG93TGFiZWw6IGZhbHNlXHJcbiAgICAvLyB0ZXh0T2Zmc2V0OiB7IHg6IDgsIHk6IDAgfSwgcHV0IGluIGxhYmVsIGNvbmZpZyBpbnN0ZWFkIG9mIGVhY2ggbm9kZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbGluayA9IHtcclxuICAgIHN0eWxlOiB7XHJcbiAgICAgICAgc2hhcGU6ICdsaW5lJyxcclxuICAgICAgICBzdHJva2VDb2xvcjogeyByOiAwLjQsIGc6IDAuNiwgYjogMC44LCBhOiAwLjUgfSxcclxuICAgICAgICBzdHJva2VXaWR0aDogMlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbGFiZWwgPSB7XHJcbiAgICBvZmZzZXQ6IHsgeDogOCwgeTogMCB9LFxyXG4gICAgZm9udFNpemU6IDE4LFxyXG4gICAgc3Ryb2tlV2lkdGg6IDAuNVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZWxlbWVudFJlc2VydmVkS2V5cyA9IG5ldyBTZXQoW1xyXG4gICAgJ2lkJyxcclxuICAgICd4JyxcclxuICAgICd5JyxcclxuICAgICdsYWJlbCcsXHJcbiAgICAndGV4dCcsXHJcbiAgICAnc3R5bGUnLFxyXG4gICAgJ2NsaWNrQ2FsbGJhY2snLFxyXG4gICAgJ2hvdmVyQ2FsbGJhY2snXHJcbl0pXHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIFhpYW9kb25nIFpoYW8gPHpoYW94aWFvZG9uZ0B6anUuZWR1LmNuPlxyXG4gKiBAZGVzY3JpcHRpb24gYnVpbGQtaW4gZGF0YXNldCBpbiBOZXRWXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgbWlzZXJhYmxlcyB9IGZyb20gJy4vbWlzZXJhYmxlcydcclxuaW1wb3J0IHsgcGF0ZW50cyB9IGZyb20gJy4vcGF0ZW50cydcclxuXHJcbmV4cG9ydCB7IG1pc2VyYWJsZXMsIHBhdGVudHMgfVxyXG4iLCIvKipcclxuICogQGF1dGhvciBYaWFvZG9uZyBaaGFvIDx6aGFveGlhb2RvbmdAemp1LmVkdS5jbj5cclxuICogQGRlc2NyaXB0aW9uIExlcyBNaXNlcmFibGVzIHJlbGF0aW9uIGRhdGFzZXQuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBnZW5lcmF0ZWQgYnkgZDMtZm9yY2U6IGh0dHBzOi8vb2JzZXJ2YWJsZWhxLmNvbS9AZDMvZm9yY2UtZGlyZWN0ZWQtZ3JhcGhcclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgbWlzZXJhYmxlcyA9IHtcclxuICAgIG5vZGVzOiBbXHJcbiAgICAgICAgeyBpZDogJ015cmllbCcsIHg6IDI5My40NzE0NTExNzU1MzYyMywgeTogMzU2LjQzMzU3MTgxMDQxMzgsIGdyb3VwOiAxIH0sXHJcbiAgICAgICAgeyBpZDogJ05hcG9sZW9uJywgeDogMjUzLjkwMjUwODg2MTg2NTYsIHk6IDM3NC4zMDU4MTE2NTM2NDQ1LCBncm91cDogMSB9LFxyXG4gICAgICAgIHsgaWQ6ICdNbGxlLkJhcHRpc3RpbmUnLCB4OiAzNTAuOTI3MjQ5ODk5MTgwNzcsIHk6IDMzMi4zMzI1NTM5OTk5OTQzLCBncm91cDogMSB9LFxyXG4gICAgICAgIHsgaWQ6ICdNbWUuTWFnbG9pcmUnLCB4OiAzNTYuMDkxNjE1NjUzOTk5NywgeTogMzUyLjc4ODU3OTkxMTYwMTUsIGdyb3VwOiAxIH0sXHJcbiAgICAgICAgeyBpZDogJ0NvdW50ZXNzZGVMbycsIHg6IDI1NC4yOTI5MTUyMDk4OTMzNSwgeTogMzU3LjMxNzU3MzQwNzY0MTcsIGdyb3VwOiAxIH0sXHJcbiAgICAgICAgeyBpZDogJ0dlYm9yYW5kJywgeDogMjU3Ljg1NzI5MzYyNjIwMSwgeTogMzM1Ljg1NDI3NjI4MzU4OTU3LCBncm91cDogMSB9LFxyXG4gICAgICAgIHsgaWQ6ICdDaGFtcHRlcmNpZXInLCB4OiAyNTkuNjI1NTU2MzgyNTAyOCwgeTogMzgzLjgzMDI3NDY5ODMyODE0LCBncm91cDogMSB9LFxyXG4gICAgICAgIHsgaWQ6ICdDcmF2YXR0ZScsIHg6IDI0OS44NTk2NDU5ODI5MTM5LCB5OiAzNDYuMTgyMjU1MTY4MzI0OTYsIGdyb3VwOiAxIH0sXHJcbiAgICAgICAgeyBpZDogJ0NvdW50JywgeDogMjY5Ljk2NzkzOTUxMzUwOTI0LCB5OiAzOTAuNjgwMDg0MjMyMTU3MSwgZ3JvdXA6IDEgfSxcclxuICAgICAgICB7IGlkOiAnT2xkTWFuJywgeDogMjQ2LjczOTUyMzExMjc3NjY1LCB5OiAzNjQuNTkzNTc0OTQ0MzIwNjYsIGdyb3VwOiAxIH0sXHJcbiAgICAgICAgeyBpZDogJ0xhYmFycmUnLCB4OiA0NDMuNTE2NTgzMzE1MDI2LCB5OiAzNTguMjkyMDQ3ODk0Nzc2ODMsIGdyb3VwOiAyIH0sXHJcbiAgICAgICAgeyBpZDogJ1ZhbGplYW4nLCB4OiA0NDIuMTY4OTQ3NTc2NDE1MDYsIHk6IDMyMC44MzE1NTMyMTYwODYxLCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdNYXJndWVyaXRlJywgeDogNDEzLjM4MTY4NTEwMDc5MzEsIHk6IDI0MC4wNDA5MTU1OTI5NjUwNCwgZ3JvdXA6IDMgfSxcclxuICAgICAgICB7IGlkOiAnTW1lLmRlUicsIHg6IDQyNy4yMzYxNzE1OTUwMjU0LCB5OiAzNTUuMTAyMTE1ODk5Nzk1MTQsIGdyb3VwOiAyIH0sXHJcbiAgICAgICAgeyBpZDogJ0lzYWJlYXUnLCB4OiA0MDUuODUwODI4NTgxOTE4MzQsIHk6IDMzMC41MjAxNTEyMjA1MDg1LCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdHZXJ2YWlzJywgeDogNDA1LjIxMTMxMjE5MDY4ODEsIHk6IDMxNi4yOTEyNTM1OTM5NjEzNiwgZ3JvdXA6IDIgfSxcclxuICAgICAgICB7IGlkOiAnVGhvbG9teWVzJywgeDogNDIyLjQxMjUzMDc3ODE2NDYsIHk6IDEyNi4wNzY0OTQ0OTc3NTgwNiwgZ3JvdXA6IDMgfSxcclxuICAgICAgICB7IGlkOiAnTGlzdG9saWVyJywgeDogMzYzLjE3Mjk0MjI2Nzc5NzksIHk6IDEwMi43Nzg5MDM2ODI4OTc4NSwgZ3JvdXA6IDMgfSxcclxuICAgICAgICB7IGlkOiAnRmFtZXVpbCcsIHg6IDM4MS43OTQ3MTAzMDk0MDI4LCB5OiA2Ni41ODEzMzcyNDA0Mzk0OCwgZ3JvdXA6IDMgfSxcclxuICAgICAgICB7IGlkOiAnQmxhY2hldmlsbGUnLCB4OiAzODMuMTc5MjY3Njc0MDI2MSwgeTogOTQuODAzMjAzMTU1MDAxNTQsIGdyb3VwOiAzIH0sXHJcbiAgICAgICAgeyBpZDogJ0Zhdm91cml0ZScsIHg6IDM2MS44OTM3MzE2NDQyODUsIHk6IDcwLjM4Njk2MzgxMzg0MDc0LCBncm91cDogMyB9LFxyXG4gICAgICAgIHsgaWQ6ICdEYWhsaWEnLCB4OiAzOTguNzUzNTA5ODgzNTE2NTMsIHk6IDc3LjA5NzAwNzUxNTI3MTE5LCBncm91cDogMyB9LFxyXG4gICAgICAgIHsgaWQ6ICdaZXBoaW5lJywgeDogMzQ5LjA0OTU5MTQ2MDEzNzYsIHk6IDg4LjgwODg4NjEzMzcyNzEzLCBncm91cDogMyB9LFxyXG4gICAgICAgIHsgaWQ6ICdGYW50aW5lJywgeDogMzk4LjAxNDExNDM4NzAyNDczLCB5OiAxNzMuNzY0NDQxOTY5NDU5NzcsIGdyb3VwOiAzIH0sXHJcbiAgICAgICAgeyBpZDogJ01tZS5UaGVuYXJkaWVyJywgeDogNDcxLjI1MTY1MzMzODY3MjUsIHk6IDI2Mi4yMTg3MDE2NjY2NDUsIGdyb3VwOiA0IH0sXHJcbiAgICAgICAgeyBpZDogJ1RoZW5hcmRpZXInLCB4OiA1MDQuODE2NzIwODU2MDMwNjYsIHk6IDI4My4wNDYzODkwMDQ4MTcyMywgZ3JvdXA6IDQgfSxcclxuICAgICAgICB7IGlkOiAnQ29zZXR0ZScsIHg6IDQ3Mi4zMzQ2OTQxNDg3MTkyLCB5OiAyMjguNjg3Nzk0NDMzMDM0NzgsIGdyb3VwOiA1IH0sXHJcbiAgICAgICAgeyBpZDogJ0phdmVydCcsIHg6IDQ2MC4wNTI1NzY4OTMzMjgzNiwgeTogMjk1LjU1NzgxNTQyNjg5MDQsIGdyb3VwOiA0IH0sXHJcbiAgICAgICAgeyBpZDogJ0ZhdWNoZWxldmVudCcsIHg6IDM4NS40MzkzNTc2NDU4OTk4NiwgeTogMzAyLjEyODI0NTg4NjIyODU3LCBncm91cDogMCB9LFxyXG4gICAgICAgIHsgaWQ6ICdCYW1hdGFib2lzJywgeDogMzkzLjE5MDQxNTkwMzgzNTk3LCB5OiAzNDUuNDk3MTY2NzY5MDgxNywgZ3JvdXA6IDIgfSxcclxuICAgICAgICB7IGlkOiAnUGVycGV0dWUnLCB4OiAzNjcuNTM4MzMxMzI4OTM5NzYsIHk6IDE5NC41NTU2NDgyMzA2MjcxLCBncm91cDogMyB9LFxyXG4gICAgICAgIHsgaWQ6ICdTaW1wbGljZScsIHg6IDQwMS4zNjIyMjUyMzU0NjU1LCB5OiAyNDIuOTk4Mjg0Nzk5NDU3NiwgZ3JvdXA6IDIgfSxcclxuICAgICAgICB7IGlkOiAnU2NhdWZmbGFpcmUnLCB4OiA0MTQuNjcwNzI3OTk2Mjc1NzMsIHk6IDM0NC4wNTQ3NzIwOTQ1NzM2LCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdXb21hbjEnLCB4OiA0MjEuNDE2NzQxNDM5MjQyNiwgeTogMjkzLjMxMTIwMjE5MTI5Mzk0LCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdKdWRnZScsIHg6IDQyMC4wNDM5MjAwNzg0MTMzNSwgeTogNDAxLjAzMjMzNjA5MTUyNzQ0LCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdDaGFtcG1hdGhpZXUnLCB4OiAzNzcuNzk1MjQyNTQ2MjE4MzMsIHk6IDM4My44MTA1Nzg3MTE1MTAyLCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdCcmV2ZXQnLCB4OiA0MDEuOTUyOTg0NDQ2OTk5MiwgeTogMzg4Ljg2ODQ3ODI5ODc0MTEsIGdyb3VwOiAyIH0sXHJcbiAgICAgICAgeyBpZDogJ0NoZW5pbGRpZXUnLCB4OiA0MDAuNjY4NTcwNzEzMzUzOCwgeTogNDEzLjQ5NDE3NzkwNTIzNDY2LCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdDb2NoZXBhaWxsZScsIHg6IDM3OS4wNDk2OTcwNDQ2MjM1NCwgeTogNDA0LjI2OTc0MDU5MjMzMTYzLCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdQb250bWVyY3knLCB4OiA1NTMuMTEzNzQwMTc1MDE5OCwgeTogMjQ0LjkyODMwMDI3MzYwNzY1LCBncm91cDogNCB9LFxyXG4gICAgICAgIHsgaWQ6ICdCb3VsYXRydWVsbGUnLCB4OiA0OTAuMTU3MTA4NjA4NjkzMiwgeTogMjQ5LjIxMDE5MjM4MzU4MDMsIGdyb3VwOiA2IH0sXHJcbiAgICAgICAgeyBpZDogJ0Vwb25pbmUnLCB4OiA1NDkuNzU4NDI2NzU3MTg5MiwgeTogMzAyLjkwMzEwNjUyMjg0MzEsIGdyb3VwOiA0IH0sXHJcbiAgICAgICAgeyBpZDogJ0FuemVsbWEnLCB4OiA1MTUuMzgwNzM5OTM5NTEzNCwgeTogMjU3LjAxNzk2ODg5ODM5MTEsIGdyb3VwOiA0IH0sXHJcbiAgICAgICAgeyBpZDogJ1dvbWFuMicsIHg6IDQzMy42NjA4NjY1MzQwNTE0LCB5OiAyNjUuODE3NDY3Mzg4NjYzNCwgZ3JvdXA6IDUgfSxcclxuICAgICAgICB7IGlkOiAnTW90aGVySW5ub2NlbnQnLCB4OiA0MDMuMDI1MzYyNTc0MTY1MjMsIHk6IDI4OS4wMzMxMjIwMDEyMTMyNiwgZ3JvdXA6IDAgfSxcclxuICAgICAgICB7IGlkOiAnR3JpYmllcicsIHg6IDM0MS44MDk3MzIyNzQ1Njc3NSwgeTogMjk0LjIxMjM5NjE0ODAyMywgZ3JvdXA6IDAgfSxcclxuICAgICAgICB7IGlkOiAnSm9uZHJldHRlJywgeDogNTY1LjE5NjUzMDM0MjIxODYsIHk6IDQ3MC42NTk1MDM0OTM3NTg1NiwgZ3JvdXA6IDcgfSxcclxuICAgICAgICB7IGlkOiAnTW1lLkJ1cmdvbicsIHg6IDU2OS4xODk2MjY5MjQyMTAxLCB5OiA0MjYuNjYxODUwNTM4MjQ1NjMsIGdyb3VwOiA3IH0sXHJcbiAgICAgICAgeyBpZDogJ0dhdnJvY2hlJywgeDogNTcyLjE2MTkzOTM5MzY4MjYsIHk6IDM2NC4yMjYwNjc2NjQ5NzU2MywgZ3JvdXA6IDggfSxcclxuICAgICAgICB7IGlkOiAnR2lsbGVub3JtYW5kJywgeDogNTI0LjU5MTQ1MDUyMDgwMDUsIHk6IDI1Ny40MDEyMjE0ODI4MzM2LCBncm91cDogNSB9LFxyXG4gICAgICAgIHsgaWQ6ICdNYWdub24nLCB4OiA0OTIuNTQ4MzkzMjAyMzQxLCB5OiAyMjIuNTk2NjM1MTMyODg4NSwgZ3JvdXA6IDUgfSxcclxuICAgICAgICB7IGlkOiAnTWxsZS5HaWxsZW5vcm1hbmQnLCB4OiA1MTQuMzY5MjY1NTAyMzY0NCwgeTogMjI5LjA5NjcwMDYyMzg5MjgxLCBncm91cDogNSB9LFxyXG4gICAgICAgIHsgaWQ6ICdNbWUuUG9udG1lcmN5JywgeDogNTQ5LjMyNTA1MDgxNzE0NzQsIHk6IDE5Ni4xNDA1NjgzMzA4NDkzNiwgZ3JvdXA6IDUgfSxcclxuICAgICAgICB7IGlkOiAnTWxsZS5WYXVib2lzJywgeDogNTE3Ljg1OTM1NzIzOTQwNzEsIHk6IDE4Ni4yNDg4MzA5MTExNTY1LCBncm91cDogNSB9LFxyXG4gICAgICAgIHsgaWQ6ICdMdC5HaWxsZW5vcm1hbmQnLCB4OiA1NDMuMjc0OTYxMTM5NDU1LCB5OiAyMjMuNjgxODQyODUxODA5NzYsIGdyb3VwOiA1IH0sXHJcbiAgICAgICAgeyBpZDogJ01hcml1cycsIHg6IDU3NC4yNTc2Njk5MDU2MTM5LCB5OiAyODMuODUyMTE3MDgzMTAzMzQsIGdyb3VwOiA4IH0sXHJcbiAgICAgICAgeyBpZDogJ0Jhcm9uZXNzVCcsIHg6IDU3My43MTQwOTA5NjUwNjI1LCB5OiAyNDUuNTkzMTE5MDkyNDU4MTgsIGdyb3VwOiA1IH0sXHJcbiAgICAgICAgeyBpZDogJ01hYmV1ZicsIHg6IDYyOC41NDMyNTMyNDg2MTkxLCB5OiAzMTQuMjIwNzg0MDg2MjcxNjQsIGdyb3VwOiA4IH0sXHJcbiAgICAgICAgeyBpZDogJ0Vuam9scmFzJywgeDogNTg4LjIzOTU0OTgwOTM2MjYsIHk6IDM0Mi4wNTk0NDY5OTIzMjc5LCBncm91cDogOCB9LFxyXG4gICAgICAgIHsgaWQ6ICdDb21iZWZlcnJlJywgeDogNjM3LjczNzA2NjQ2MTQ2MzcsIHk6IDM1MS42OTIzNTc2Mjc4ODM5NSwgZ3JvdXA6IDggfSxcclxuICAgICAgICB7IGlkOiAnUHJvdXZhaXJlJywgeDogNjUwLjg4MzM1MjI4Njk5MDMsIHk6IDM4Ni44MzkxODEwMzUwOTkxNiwgZ3JvdXA6IDggfSxcclxuICAgICAgICB7IGlkOiAnRmV1aWxseScsIHg6IDYyNi44NTU2NjA2NDM4MTA5LCB5OiAzNjUuOTA4NDE2NDU5MzE0MSwgZ3JvdXA6IDggfSxcclxuICAgICAgICB7IGlkOiAnQ291cmZleXJhYycsIHg6IDYyOC4zNDQ4OTg5OTc1MDEzLCB5OiAzMzYuNzY2NjQ1NDExOTAyMiwgZ3JvdXA6IDggfSxcclxuICAgICAgICB7IGlkOiAnQmFob3JlbCcsIHg6IDY1Ni43NzE3NzcyNzY0OTg1LCB5OiAzNjIuNTg4NTg4MjUwOTE4OSwgZ3JvdXA6IDggfSxcclxuICAgICAgICB7IGlkOiAnQm9zc3VldCcsIHg6IDU5OS4wMTg1NzY1NzQzMTA3LCB5OiAzNjMuODI4NjcyMzQwNzA1MywgZ3JvdXA6IDggfSxcclxuICAgICAgICB7IGlkOiAnSm9seScsIHg6IDY1Ni42MTgyOTIzNzM1NDA4LCB5OiAzNDMuMjM3NTczMzU1OTE2NSwgZ3JvdXA6IDggfSxcclxuICAgICAgICB7IGlkOiAnR3JhbnRhaXJlJywgeDogNjM4LjQzNzU4NTUzMTQ5ODgsIHk6IDQwMi40Mzg3MjUwMzc4OTk1LCBncm91cDogOCB9LFxyXG4gICAgICAgIHsgaWQ6ICdNb3RoZXJQbHV0YXJjaCcsIHg6IDY2NC41NTY3MjM4NjE4ODMsIHk6IDI5OC4wMzM2OTY0NTI2Nzg2LCBncm91cDogOSB9LFxyXG4gICAgICAgIHsgaWQ6ICdHdWV1bGVtZXInLCB4OiA1MDguMTY0NTA1MjU4MTc4MDUsIHk6IDMzMC40NTAyOTA3NDQ0MzY3LCBncm91cDogNCB9LFxyXG4gICAgICAgIHsgaWQ6ICdCYWJldCcsIHg6IDQ5Mi41NjAwNTI3OTg4MjA5NSwgeTogMzI1Ljk4MzQwOTI4NDg0MjcsIGdyb3VwOiA0IH0sXHJcbiAgICAgICAgeyBpZDogJ0NsYXF1ZXNvdXMnLCB4OiA1MTAuOTM4NTU1MDYyNTAwNzcsIHk6IDMwOS4yODY5MzgwNjk3MzI4LCBncm91cDogNCB9LFxyXG4gICAgICAgIHsgaWQ6ICdNb250cGFybmFzc2UnLCB4OiA1MDIuNzE5MDg5NDE3MzU1NywgeTogMzUwLjkyNzUxODMxMzM0MzgsIGdyb3VwOiA0IH0sXHJcbiAgICAgICAgeyBpZDogJ1RvdXNzYWludCcsIHg6IDQ0NS4xMjU0ODAyMDU2ODA3LCB5OiAyNjYuNDYyNDI2NjUwMjIwMDQsIGdyb3VwOiA1IH0sXHJcbiAgICAgICAgeyBpZDogJ0NoaWxkMScsIHg6IDU4OC4wMzUxNTUyMzg2OTYxLCB5OiA0MTAuMjE5NTU1NTk2MTk5NiwgZ3JvdXA6IDEwIH0sXHJcbiAgICAgICAgeyBpZDogJ0NoaWxkMicsIHg6IDU1OS4yNzc3ODE0NzgyNzA1LCB5OiA0MDguMzUzMzE4NDg5MzU2OSwgZ3JvdXA6IDEwIH0sXHJcbiAgICAgICAgeyBpZDogJ0JydWpvbicsIHg6IDUzNy4xNzg3MzgzOTA0NjU2LCB5OiAzMzcuODY5MjI3NzU5MTc5NDcsIGdyb3VwOiA0IH0sXHJcbiAgICAgICAgeyBpZDogJ01tZS5IdWNoZWxvdXAnLCB4OiA2MjYuMzc3NTg1MDQ2NjE2NCwgeTogMzg0LjM1MjAyMDY2ODk0NTE2LCBncm91cDogOCB9XHJcbiAgICBdLFxyXG5cclxuICAgIGxpbmtzOiBbXHJcbiAgICAgICAgeyBzb3VyY2U6ICdOYXBvbGVvbicsIHRhcmdldDogJ015cmllbCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbGxlLkJhcHRpc3RpbmUnLCB0YXJnZXQ6ICdNeXJpZWwnLCB2YWx1ZTogOCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLk1hZ2xvaXJlJywgdGFyZ2V0OiAnTXlyaWVsJywgdmFsdWU6IDEwIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuTWFnbG9pcmUnLCB0YXJnZXQ6ICdNbGxlLkJhcHRpc3RpbmUnLCB2YWx1ZTogNiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ291bnRlc3NkZUxvJywgdGFyZ2V0OiAnTXlyaWVsJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dlYm9yYW5kJywgdGFyZ2V0OiAnTXlyaWVsJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NoYW1wdGVyY2llcicsIHRhcmdldDogJ015cmllbCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDcmF2YXR0ZScsIHRhcmdldDogJ015cmllbCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3VudCcsIHRhcmdldDogJ015cmllbCcsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdPbGRNYW4nLCB0YXJnZXQ6ICdNeXJpZWwnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnVmFsamVhbicsIHRhcmdldDogJ0xhYmFycmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnVmFsamVhbicsIHRhcmdldDogJ01tZS5NYWdsb2lyZScsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdWYWxqZWFuJywgdGFyZ2V0OiAnTWxsZS5CYXB0aXN0aW5lJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1ZhbGplYW4nLCB0YXJnZXQ6ICdNeXJpZWwnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFyZ3Vlcml0ZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLmRlUicsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSXNhYmVhdScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR2VydmFpcycsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTGlzdG9saWVyJywgdGFyZ2V0OiAnVGhvbG9teWVzJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhbWV1aWwnLCB0YXJnZXQ6ICdUaG9sb215ZXMnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmFtZXVpbCcsIHRhcmdldDogJ0xpc3RvbGllcicsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCbGFjaGV2aWxsZScsIHRhcmdldDogJ1Rob2xvbXllcycsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCbGFjaGV2aWxsZScsIHRhcmdldDogJ0xpc3RvbGllcicsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCbGFjaGV2aWxsZScsIHRhcmdldDogJ0ZhbWV1aWwnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmF2b3VyaXRlJywgdGFyZ2V0OiAnVGhvbG9teWVzJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Zhdm91cml0ZScsIHRhcmdldDogJ0xpc3RvbGllcicsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYXZvdXJpdGUnLCB0YXJnZXQ6ICdGYW1ldWlsJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Zhdm91cml0ZScsIHRhcmdldDogJ0JsYWNoZXZpbGxlJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0RhaGxpYScsIHRhcmdldDogJ1Rob2xvbXllcycsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdEYWhsaWEnLCB0YXJnZXQ6ICdMaXN0b2xpZXInLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRGFobGlhJywgdGFyZ2V0OiAnRmFtZXVpbCcsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdEYWhsaWEnLCB0YXJnZXQ6ICdCbGFjaGV2aWxsZScsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdEYWhsaWEnLCB0YXJnZXQ6ICdGYXZvdXJpdGUnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnWmVwaGluZScsIHRhcmdldDogJ1Rob2xvbXllcycsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdaZXBoaW5lJywgdGFyZ2V0OiAnTGlzdG9saWVyJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1plcGhpbmUnLCB0YXJnZXQ6ICdGYW1ldWlsJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1plcGhpbmUnLCB0YXJnZXQ6ICdCbGFjaGV2aWxsZScsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdaZXBoaW5lJywgdGFyZ2V0OiAnRmF2b3VyaXRlJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1plcGhpbmUnLCB0YXJnZXQ6ICdEYWhsaWEnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmFudGluZScsIHRhcmdldDogJ1Rob2xvbXllcycsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYW50aW5lJywgdGFyZ2V0OiAnTGlzdG9saWVyJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhbnRpbmUnLCB0YXJnZXQ6ICdGYW1ldWlsJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhbnRpbmUnLCB0YXJnZXQ6ICdCbGFjaGV2aWxsZScsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYW50aW5lJywgdGFyZ2V0OiAnRmF2b3VyaXRlJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhbnRpbmUnLCB0YXJnZXQ6ICdEYWhsaWEnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmFudGluZScsIHRhcmdldDogJ1plcGhpbmUnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmFudGluZScsIHRhcmdldDogJ01hcmd1ZXJpdGUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmFudGluZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogOSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLlRoZW5hcmRpZXInLCB0YXJnZXQ6ICdGYW50aW5lJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5UaGVuYXJkaWVyJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiA3IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdUaGVuYXJkaWVyJywgdGFyZ2V0OiAnTW1lLlRoZW5hcmRpZXInLCB2YWx1ZTogMTMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1RoZW5hcmRpZXInLCB0YXJnZXQ6ICdGYW50aW5lJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1RoZW5hcmRpZXInLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3NldHRlJywgdGFyZ2V0OiAnTW1lLlRoZW5hcmRpZXInLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29zZXR0ZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMzEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Nvc2V0dGUnLCB0YXJnZXQ6ICdUaG9sb215ZXMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29zZXR0ZScsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSmF2ZXJ0JywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxNyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSmF2ZXJ0JywgdGFyZ2V0OiAnRmFudGluZScsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKYXZlcnQnLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0phdmVydCcsIHRhcmdldDogJ01tZS5UaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0phdmVydCcsIHRhcmdldDogJ0Nvc2V0dGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmF1Y2hlbGV2ZW50JywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiA4IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYXVjaGVsZXZlbnQnLCB0YXJnZXQ6ICdKYXZlcnQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFtYXRhYm9pcycsIHRhcmdldDogJ0ZhbnRpbmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFtYXRhYm9pcycsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYW1hdGFib2lzJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdQZXJwZXR1ZScsIHRhcmdldDogJ0ZhbnRpbmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnU2ltcGxpY2UnLCB0YXJnZXQ6ICdQZXJwZXR1ZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdTaW1wbGljZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnU2ltcGxpY2UnLCB0YXJnZXQ6ICdGYW50aW5lJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1NpbXBsaWNlJywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1NjYXVmZmxhaXJlJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdXb21hbjEnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1dvbWFuMScsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKdWRnZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSnVkZ2UnLCB0YXJnZXQ6ICdCYW1hdGFib2lzJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NoYW1wbWF0aGlldScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hhbXBtYXRoaWV1JywgdGFyZ2V0OiAnSnVkZ2UnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hhbXBtYXRoaWV1JywgdGFyZ2V0OiAnQmFtYXRhYm9pcycsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCcmV2ZXQnLCB0YXJnZXQ6ICdKdWRnZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCcmV2ZXQnLCB0YXJnZXQ6ICdDaGFtcG1hdGhpZXUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQnJldmV0JywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCcmV2ZXQnLCB0YXJnZXQ6ICdCYW1hdGFib2lzJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NoZW5pbGRpZXUnLCB0YXJnZXQ6ICdKdWRnZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDaGVuaWxkaWV1JywgdGFyZ2V0OiAnQ2hhbXBtYXRoaWV1JywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NoZW5pbGRpZXUnLCB0YXJnZXQ6ICdCcmV2ZXQnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hlbmlsZGlldScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hlbmlsZGlldScsIHRhcmdldDogJ0JhbWF0YWJvaXMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29jaGVwYWlsbGUnLCB0YXJnZXQ6ICdKdWRnZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb2NoZXBhaWxsZScsIHRhcmdldDogJ0NoYW1wbWF0aGlldScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb2NoZXBhaWxsZScsIHRhcmdldDogJ0JyZXZldCcsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb2NoZXBhaWxsZScsIHRhcmdldDogJ0NoZW5pbGRpZXUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29jaGVwYWlsbGUnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvY2hlcGFpbGxlJywgdGFyZ2V0OiAnQmFtYXRhYm9pcycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdQb250bWVyY3knLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JvdWxhdHJ1ZWxsZScsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRXBvbmluZScsIHRhcmdldDogJ01tZS5UaGVuYXJkaWVyJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Vwb25pbmUnLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0FuemVsbWEnLCB0YXJnZXQ6ICdFcG9uaW5lJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0FuemVsbWEnLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0FuemVsbWEnLCB0YXJnZXQ6ICdNbWUuVGhlbmFyZGllcicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdXb21hbjInLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1dvbWFuMicsIHRhcmdldDogJ0Nvc2V0dGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnV29tYW4yJywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01vdGhlcklubm9jZW50JywgdGFyZ2V0OiAnRmF1Y2hlbGV2ZW50JywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01vdGhlcklubm9jZW50JywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHcmliaWVyJywgdGFyZ2V0OiAnRmF1Y2hlbGV2ZW50JywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5CdXJnb24nLCB0YXJnZXQ6ICdKb25kcmV0dGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR2F2cm9jaGUnLCB0YXJnZXQ6ICdNbWUuQnVyZ29uJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dhdnJvY2hlJywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHYXZyb2NoZScsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHYXZyb2NoZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR2lsbGVub3JtYW5kJywgdGFyZ2V0OiAnQ29zZXR0ZScsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHaWxsZW5vcm1hbmQnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hZ25vbicsIHRhcmdldDogJ0dpbGxlbm9ybWFuZCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYWdub24nLCB0YXJnZXQ6ICdNbWUuVGhlbmFyZGllcicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbGxlLkdpbGxlbm9ybWFuZCcsIHRhcmdldDogJ0dpbGxlbm9ybWFuZCcsIHZhbHVlOiA5IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbGxlLkdpbGxlbm9ybWFuZCcsIHRhcmdldDogJ0Nvc2V0dGUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWxsZS5HaWxsZW5vcm1hbmQnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5Qb250bWVyY3knLCB0YXJnZXQ6ICdNbGxlLkdpbGxlbm9ybWFuZCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuUG9udG1lcmN5JywgdGFyZ2V0OiAnUG9udG1lcmN5JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01sbGUuVmF1Ym9pcycsIHRhcmdldDogJ01sbGUuR2lsbGVub3JtYW5kJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0x0LkdpbGxlbm9ybWFuZCcsIHRhcmdldDogJ01sbGUuR2lsbGVub3JtYW5kJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0x0LkdpbGxlbm9ybWFuZCcsIHRhcmdldDogJ0dpbGxlbm9ybWFuZCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdMdC5HaWxsZW5vcm1hbmQnLCB0YXJnZXQ6ICdDb3NldHRlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ01sbGUuR2lsbGVub3JtYW5kJywgdmFsdWU6IDYgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ0dpbGxlbm9ybWFuZCcsIHZhbHVlOiAxMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFyaXVzJywgdGFyZ2V0OiAnUG9udG1lcmN5JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ0x0LkdpbGxlbm9ybWFuZCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJpdXMnLCB0YXJnZXQ6ICdDb3NldHRlJywgdmFsdWU6IDIxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJpdXMnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDE5IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJpdXMnLCB0YXJnZXQ6ICdUaG9sb215ZXMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFyaXVzJywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJpdXMnLCB0YXJnZXQ6ICdFcG9uaW5lJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Jhcm9uZXNzVCcsIHRhcmdldDogJ0dpbGxlbm9ybWFuZCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYXJvbmVzc1QnLCB0YXJnZXQ6ICdNYXJpdXMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFiZXVmJywgdGFyZ2V0OiAnTWFyaXVzJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hYmV1ZicsIHRhcmdldDogJ0Vwb25pbmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFiZXVmJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRW5qb2xyYXMnLCB0YXJnZXQ6ICdNYXJpdXMnLCB2YWx1ZTogNyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRW5qb2xyYXMnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiA3IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdFbmpvbHJhcycsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdFbmpvbHJhcycsIHRhcmdldDogJ01hYmV1ZicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdFbmpvbHJhcycsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29tYmVmZXJyZScsIHRhcmdldDogJ0Vuam9scmFzJywgdmFsdWU6IDE1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb21iZWZlcnJlJywgdGFyZ2V0OiAnTWFyaXVzJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvbWJlZmVycmUnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb21iZWZlcnJlJywgdGFyZ2V0OiAnTWFiZXVmJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1Byb3V2YWlyZScsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1Byb3V2YWlyZScsIHRhcmdldDogJ0Vuam9scmFzJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1Byb3V2YWlyZScsIHRhcmdldDogJ0NvbWJlZmVycmUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmV1aWxseScsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZldWlsbHknLCB0YXJnZXQ6ICdFbmpvbHJhcycsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGZXVpbGx5JywgdGFyZ2V0OiAnUHJvdXZhaXJlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZldWlsbHknLCB0YXJnZXQ6ICdDb21iZWZlcnJlJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZldWlsbHknLCB0YXJnZXQ6ICdNYWJldWYnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmV1aWxseScsIHRhcmdldDogJ01hcml1cycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3VyZmV5cmFjJywgdGFyZ2V0OiAnTWFyaXVzJywgdmFsdWU6IDkgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvdXJmZXlyYWMnLCB0YXJnZXQ6ICdFbmpvbHJhcycsIHZhbHVlOiAxNyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ291cmZleXJhYycsIHRhcmdldDogJ0NvbWJlZmVycmUnLCB2YWx1ZTogMTMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvdXJmZXlyYWMnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiA3IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3VyZmV5cmFjJywgdGFyZ2V0OiAnTWFiZXVmJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvdXJmZXlyYWMnLCB0YXJnZXQ6ICdFcG9uaW5lJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvdXJmZXlyYWMnLCB0YXJnZXQ6ICdGZXVpbGx5JywgdmFsdWU6IDYgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvdXJmZXlyYWMnLCB0YXJnZXQ6ICdQcm91dmFpcmUnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFob3JlbCcsIHRhcmdldDogJ0NvbWJlZmVycmUnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFob3JlbCcsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhaG9yZWwnLCB0YXJnZXQ6ICdDb3VyZmV5cmFjJywgdmFsdWU6IDYgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhaG9yZWwnLCB0YXJnZXQ6ICdNYWJldWYnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFob3JlbCcsIHRhcmdldDogJ0Vuam9scmFzJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhaG9yZWwnLCB0YXJnZXQ6ICdGZXVpbGx5JywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhaG9yZWwnLCB0YXJnZXQ6ICdQcm91dmFpcmUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFob3JlbCcsIHRhcmdldDogJ01hcml1cycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCb3NzdWV0JywgdGFyZ2V0OiAnTWFyaXVzJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Jvc3N1ZXQnLCB0YXJnZXQ6ICdDb3VyZmV5cmFjJywgdmFsdWU6IDEyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCb3NzdWV0JywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQm9zc3VldCcsIHRhcmdldDogJ0JhaG9yZWwnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQm9zc3VldCcsIHRhcmdldDogJ0Vuam9scmFzJywgdmFsdWU6IDEwIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCb3NzdWV0JywgdGFyZ2V0OiAnRmV1aWxseScsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCb3NzdWV0JywgdGFyZ2V0OiAnUHJvdXZhaXJlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Jvc3N1ZXQnLCB0YXJnZXQ6ICdDb21iZWZlcnJlJywgdmFsdWU6IDkgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Jvc3N1ZXQnLCB0YXJnZXQ6ICdNYWJldWYnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQm9zc3VldCcsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSm9seScsIHRhcmdldDogJ0JhaG9yZWwnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSm9seScsIHRhcmdldDogJ0Jvc3N1ZXQnLCB2YWx1ZTogNyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSm9seScsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0pvbHknLCB0YXJnZXQ6ICdDb3VyZmV5cmFjJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0pvbHknLCB0YXJnZXQ6ICdFbmpvbHJhcycsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKb2x5JywgdGFyZ2V0OiAnRmV1aWxseScsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKb2x5JywgdGFyZ2V0OiAnUHJvdXZhaXJlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0pvbHknLCB0YXJnZXQ6ICdDb21iZWZlcnJlJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0pvbHknLCB0YXJnZXQ6ICdNYWJldWYnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSm9seScsIHRhcmdldDogJ01hcml1cycsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHcmFudGFpcmUnLCB0YXJnZXQ6ICdCb3NzdWV0JywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dyYW50YWlyZScsIHRhcmdldDogJ0Vuam9scmFzJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dyYW50YWlyZScsIHRhcmdldDogJ0NvbWJlZmVycmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3JhbnRhaXJlJywgdGFyZ2V0OiAnQ291cmZleXJhYycsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHcmFudGFpcmUnLCB0YXJnZXQ6ICdKb2x5JywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dyYW50YWlyZScsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dyYW50YWlyZScsIHRhcmdldDogJ0JhaG9yZWwnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3JhbnRhaXJlJywgdGFyZ2V0OiAnRmV1aWxseScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHcmFudGFpcmUnLCB0YXJnZXQ6ICdQcm91dmFpcmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW90aGVyUGx1dGFyY2gnLCB0YXJnZXQ6ICdNYWJldWYnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3VldWxlbWVyJywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHdWV1bGVtZXInLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0d1ZXVsZW1lcicsIHRhcmdldDogJ01tZS5UaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0d1ZXVsZW1lcicsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHdWV1bGVtZXInLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHdWV1bGVtZXInLCB0YXJnZXQ6ICdFcG9uaW5lJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhYmV0JywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWJldCcsIHRhcmdldDogJ0d1ZXVsZW1lcicsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWJldCcsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFiZXQnLCB0YXJnZXQ6ICdNbWUuVGhlbmFyZGllcicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWJldCcsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWJldCcsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhYmV0JywgdGFyZ2V0OiAnRXBvbmluZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDbGFxdWVzb3VzJywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDbGFxdWVzb3VzJywgdGFyZ2V0OiAnQmFiZXQnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2xhcXVlc291cycsIHRhcmdldDogJ0d1ZXVsZW1lcicsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDbGFxdWVzb3VzJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDbGFxdWVzb3VzJywgdGFyZ2V0OiAnTW1lLlRoZW5hcmRpZXInLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2xhcXVlc291cycsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDbGFxdWVzb3VzJywgdGFyZ2V0OiAnRXBvbmluZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDbGFxdWVzb3VzJywgdGFyZ2V0OiAnRW5qb2xyYXMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW9udHBhcm5hc3NlJywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01vbnRwYXJuYXNzZScsIHRhcmdldDogJ0JhYmV0JywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01vbnRwYXJuYXNzZScsIHRhcmdldDogJ0d1ZXVsZW1lcicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNb250cGFybmFzc2UnLCB0YXJnZXQ6ICdDbGFxdWVzb3VzJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01vbnRwYXJuYXNzZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW9udHBhcm5hc3NlJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW9udHBhcm5hc3NlJywgdGFyZ2V0OiAnRXBvbmluZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNb250cGFybmFzc2UnLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1RvdXNzYWludCcsIHRhcmdldDogJ0Nvc2V0dGUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnVG91c3NhaW50JywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1RvdXNzYWludCcsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hpbGQxJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hpbGQyJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hpbGQyJywgdGFyZ2V0OiAnQ2hpbGQxJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JydWpvbicsIHRhcmdldDogJ0JhYmV0JywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JydWpvbicsIHRhcmdldDogJ0d1ZXVsZW1lcicsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCcnVqb24nLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JydWpvbicsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JydWpvbicsIHRhcmdldDogJ0Vwb25pbmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQnJ1am9uJywgdGFyZ2V0OiAnQ2xhcXVlc291cycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCcnVqb24nLCB0YXJnZXQ6ICdNb250cGFybmFzc2UnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLkh1Y2hlbG91cCcsIHRhcmdldDogJ0Jvc3N1ZXQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLkh1Y2hlbG91cCcsIHRhcmdldDogJ0pvbHknLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLkh1Y2hlbG91cCcsIHRhcmdldDogJ0dyYW50YWlyZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuSHVjaGVsb3VwJywgdGFyZ2V0OiAnQmFob3JlbCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuSHVjaGVsb3VwJywgdGFyZ2V0OiAnQ291cmZleXJhYycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuSHVjaGVsb3VwJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLkh1Y2hlbG91cCcsIHRhcmdldDogJ0Vuam9scmFzJywgdmFsdWU6IDEgfVxyXG4gICAgXVxyXG59XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIFhpYW9kb25nIFpoYW8gPHpoYW94aWFvZG9uZ0B6anUuZWR1LmNuPlxyXG4gKiBAZGVzY3JpcHRpb24gUGF0ZW50cyBkYXRhc2V0LCBmcm9tIGh0dHBzOi8vd3d3LnBhdGVudHN2aWV3Lm9yZy93ZWIvI3Zpei9yZWxhdGlvbnNoaXBzXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhdGVudHMgPSB7XHJcbiAgICBub2RlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjUxNjIyNycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSZWNoYXJnZWFibGUgc3BpbmFsIGNvcmQgc3RpbXVsYXRvciBzeXN0ZW0nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzNjMsXHJcbiAgICAgICAgICAgIHg6IC0xNDYuNTA3MjI3NzIyMDY0MTYsXHJcbiAgICAgICAgICAgIHk6IDIzNy43ODk4ODQ4ODY0MTgyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY1MzU5MDknLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3lzdGVtIGFuZCBtZXRob2QgZm9yIHJlY29yZCBhbmQgcGxheWJhY2sgb2YgY29sbGFib3JhdGl2ZSBXZWIgYnJvd3Npbmcgc2Vzc2lvbicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTQzOCxcclxuICAgICAgICAgICAgeDogMzAxLjA4ODA4NDA3NDAxNzgsXHJcbiAgICAgICAgICAgIHk6IDc4LjM1NDQ5MTkxNTg3NTRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjU0OTkwOCcsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnTWV0aG9kcyBhbmQgYXBwYXJhdHVzIGZvciBpbnRlcnByZXRpbmcgdXNlciBzZWxlY3Rpb25zIGluIHRoZSBjb250ZXh0IG9mIGEgcmVsYXRpb24gZGlzdHJpYnV0ZWQgYXMgYSBzZXQgb2Ygb3J0aG9nb25hbGl6ZWQgc3ViLXJlbGF0aW9ucycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI2OCxcclxuICAgICAgICAgICAgeDogLTEzLjgxNDg1NjU5MDc0MTIwMixcclxuICAgICAgICAgICAgeTogLTE4My41NTAxNjc5MzUwMjc0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY1NTM1NjMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRGV2ZWxvcG1lbnQgdG9vbCwgbWV0aG9kLCBhbmQgc3lzdGVtIGZvciBjbGllbnQgc2VydmVyIGFwcGxpY2F0aW9ucycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM1MSxcclxuICAgICAgICAgICAgeDogLTAuNTIyNDMxMjc5MDE0Mjc3NyxcclxuICAgICAgICAgICAgeTogLTI0Ny4xNDk1Nzc5NjI3Mjc5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY1NTgzMjAnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ0hhbmRoZWxkIHBlcnNvbmFsIGRhdGEgYXNzaXN0YW50IChQREEpIHdpdGggYSBtZWRpY2FsIGRldmljZSBhbmQgbWV0aG9kIG9mIHVzaW5nIHRoZSBzYW1lJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNTE0LFxyXG4gICAgICAgICAgICB4OiAtMjA0LjY0MDcxODk0NjU0Nzg4LFxyXG4gICAgICAgICAgICB5OiA3MS41NzA1NTI4NDUxMjMxMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NTU4MzUxJyxcclxuICAgICAgICAgICAgbmFtZTogJ0Nsb3NlZCBsb29wIHN5c3RlbSBmb3IgY29udHJvbGxpbmcgaW5zdWxpbiBpbmZ1c2lvbicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM2OSxcclxuICAgICAgICAgICAgeDogLTIxMi45NzgxNjAwMDIxOTM4NyxcclxuICAgICAgICAgICAgeTogMTQuNzE1NjQwNTM0MTcwMDlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjU2MDQ2MScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBdXRob3JpemVkIGxvY2F0aW9uIHJlcG9ydGluZyBwYWdpbmcgc3lzdGVtJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNDc5LFxyXG4gICAgICAgICAgICB4OiAtMjUwLjQzNTQzMDYyOTA1MDkzLFxyXG4gICAgICAgICAgICB5OiAtMTkxLjQzNzIwMDYyNDA2MDM4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY1NjMxNzQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVGhpbiBmaWxtIHRyYW5zaXN0b3IgYW5kIG1hdHJpeCBkaXNwbGF5IGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzI4NCxcclxuICAgICAgICAgICAgeDogLTEyLjU4ODI0OTUwMzY1MjQwMSxcclxuICAgICAgICAgICAgeTogLTMuNjA2NjM4OTI1MDc0OTUyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY1NjU1MDknLFxyXG4gICAgICAgICAgICBuYW1lOiAnQW5hbHl0ZSBtb25pdG9yaW5nIGRldmljZSBhbmQgbWV0aG9kcyBvZiB1c2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzMzMsXHJcbiAgICAgICAgICAgIHg6IC0xMDUuMjU1MTE2MTIzNjIwNDUsXHJcbiAgICAgICAgICAgIHk6IDE1Ny4xMTcxMzM2MDYwMjYyMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NTcxMjgyJyxcclxuICAgICAgICAgICAgbmFtZTogJ0Jsb2NrLWJhc2VkIGNvbW11bmljYXRpb24gaW4gYSBjb21tdW5pY2F0aW9uIHNlcnZpY2VzIHBhdHRlcm5zIGVudmlyb25tZW50JyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNDY3LFxyXG4gICAgICAgICAgICB4OiAxMzkuNjY5NzQ2NzQ4MjgxLFxyXG4gICAgICAgICAgICB5OiAyNTMuMDE0MDY1MDE0NzE5NDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjU3NDYzNScsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnQXBwbGljYXRpb24gaW5zdGFudGlhdGlvbiBiYXNlZCB1cG9uIGF0dHJpYnV0ZXMgYW5kIHZhbHVlcyBzdG9yZWQgaW4gYSBtZXRhIGRhdGEgcmVwb3NpdG9yeSwgaW5jbHVkaW5nIHRpZXJpbmcgb2YgYXBwbGljYXRpb24gbGF5ZXJzIG9iamVjdHMgYW5kIGNvbXBvbmVudHMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzNjgsXHJcbiAgICAgICAgICAgIHg6IDExLjAwMjAyNzYyNzc4MjExNixcclxuICAgICAgICAgICAgeTogLTIzNC45MTgwNTI5ODMyMzU4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY1Nzc3MjYnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ29tcHV0ZXIgdGVsZXBob255IGludGVncmF0aW9uIGhvdGVsbGluZyBtZXRob2QgYW5kIHN5c3RlbScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI3MCxcclxuICAgICAgICAgICAgeDogLTg3LjE5MTUzMjQ1ODQxMjYyLFxyXG4gICAgICAgICAgICB5OiAtMTczLjk3NjQ0NzU1OTI5Mjg0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY1ODc4MzUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU2hvcHBpbmcgYXNzaXN0YW5jZSB3aXRoIGhhbmRoZWxkIGNvbXB1dGluZyBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE0NzEsXHJcbiAgICAgICAgICAgIHg6IC0yNzkuMjg2NTgxMzM3ODQ2NSxcclxuICAgICAgICAgICAgeTogMTEwLjE1ODc5MTI1MDE1MDdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjYwMTA4NycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdJbnN0YW50IGRvY3VtZW50IHNoYXJpbmcnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzOTcsXHJcbiAgICAgICAgICAgIHg6IDIxMC45NDgyMTM1MDEzNzE4NCxcclxuICAgICAgICAgICAgeTogOTIuNTMxODg3ODY5MTE0MDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjYwMjI1MicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDb21iaW5lZCBkaXNzZWN0aW5nLCBjYXV0ZXJpemluZywgYW5kIHN0YXBsaW5nIGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTUwMyxcclxuICAgICAgICAgICAgeDogMTQ3Ljk0OTc3MTY1MDQzMjU4LFxyXG4gICAgICAgICAgICB5OiAxNzAuMDg4ODg4NTU2MzEzMDdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjYwNDExNycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNZXRob2Qgb2YgbWFpbnRhaW5pbmcgYSBuZXR3b3JrIG9mIHBhcnRpYWxseSByZXBsaWNhdGVkIGRhdGFiYXNlIHN5c3RlbScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI2MSxcclxuICAgICAgICAgICAgeDogLTAuODg4NTU1ODAyNzQyMDM1LFxyXG4gICAgICAgICAgICB5OiAtMjE4LjIzMDQ4ODIwMzA3MjI3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2MDQxMjgnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWV0aG9kIGFuZCBzeXN0ZW0gZm9yIGRpc3RyaWJ1dGluZyBvYmplY3RzIG92ZXIgYSBuZXR3b3JrJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjYxLFxyXG4gICAgICAgICAgICB4OiAtNTYuNzM4NzI3NDIxMjA4NDEsXHJcbiAgICAgICAgICAgIHk6IC0yNDMuMzQ4Mzg0MTA2NjQ0M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NjA2NzQ0JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdQcm92aWRpbmcgY29sbGFib3JhdGl2ZSBpbnN0YWxsYXRpb24gbWFuYWdlbWVudCBpbiBhIG5ldHdvcmstYmFzZWQgc3VwcGx5IGNoYWluIGVudmlyb25tZW50JyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjcxLFxyXG4gICAgICAgICAgICB4OiAxNTMuOTk0ODI1MTg1MDM5NyxcclxuICAgICAgICAgICAgeTogMjMxLjQ2NTc5ODg4MTIwMjcyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2MDkxNTAnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1dlYiBjbGllbnQtc2VydmVyIHN5c3RlbSBhbmQgbWV0aG9kIGZvciBpbmNvbXBhdGlibGUgcGFnZSBtYXJrdXAgYW5kIHByZXNlbnRhdGlvbiBsYW5ndWFnZXMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzMzYsXHJcbiAgICAgICAgICAgIHg6IDEzLjE4Mjg2NzYwNzMyMTI1NSxcclxuICAgICAgICAgICAgeTogLTE4NC44MzQyNjQzMTg4MTU3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2MjE4MzQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3lzdGVtIGFuZCBtZXRob2QgZm9yIHZvaWNlIHRyYW5zbWlzc2lvbiBvdmVyIG5ldHdvcmsgcHJvdG9jb2xzJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjY1LFxyXG4gICAgICAgICAgICB4OiA4NS4wODIyODE0OTM0NDM2OSxcclxuICAgICAgICAgICAgeTogMTA1LjQzNDY0NTcxMjMyODk2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2NDE1MzMnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ0hhbmRoZWxkIHBlcnNvbmFsIGRhdGEgYXNzaXN0YW50IChQREEpIHdpdGggYSBtZWRpY2FsIGRldmljZSBhbmQgbWV0aG9kIG9mIHVzaW5nIHRoZSBzYW1lJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNDMxLFxyXG4gICAgICAgICAgICB4OiAtMjE4LjA5NzY2MTE4MDAxMjI0LFxyXG4gICAgICAgICAgICB5OiAzOS44NTc2MDAzNTc5Nzk4OVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NjQ0NTMyJyxcclxuICAgICAgICAgICAgbmFtZTogJ1N1cmdpY2FsIHN0YXBsaW5nIGFwcGFyYXR1cycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI2NyxcclxuICAgICAgICAgICAgeDogMzA0LjY2MzA5MjUzMTYyOTQsXHJcbiAgICAgICAgICAgIHk6IC0yOS43MDk2MTE1NzM0OTEzOTdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjY1NDAzMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdJbnN0YW50IHNoYXJpbmcgb2YgZG9jdW1lbnRzIG9uIGEgcmVtb3RlIHNlcnZlcicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTQxMyxcclxuICAgICAgICAgICAgeDogMTU5LjMwMDUwMzU1Mjk2MDE1LFxyXG4gICAgICAgICAgICB5OiAxMDguOTgzODk1ODU2MjcwMDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjY1NjE5MycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEZXZpY2UgZm9yIGF0dGFjaG1lbnQgb2YgYnV0dHJlc3MgbWF0ZXJpYWwgdG8gYSBzdXJnaWNhbCBmYXN0ZW5pbmcgZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjc5LFxyXG4gICAgICAgICAgICB4OiAxMTYuOTA5MTQxNTMxNTg1OTcsXHJcbiAgICAgICAgICAgIHk6IC03OC43NjYyNjkzNjg1ODU1N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NjY1NjQ4JyxcclxuICAgICAgICAgICAgbmFtZTogJ1N0YXRlIG1vZGVscyBmb3IgbW9uaXRvcmluZyBwcm9jZXNzJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjg4LFxyXG4gICAgICAgICAgICB4OiAtMTkuNzUxODUyNzM5MzUzNzQsXHJcbiAgICAgICAgICAgIHk6IC0xMjYuNjUzMzg5MTIyNjk5MjhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjY2NTY1NScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdJbXBsaWNpdCByYXRpbmcgb2YgcmV0cmlldmVkIGluZm9ybWF0aW9uIGluIGFuIGluZm9ybWF0aW9uIHNlYXJjaCBzeXN0ZW0nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyOTQsXHJcbiAgICAgICAgICAgIHg6IC0yMDUuNTEwMzYxMjE5OTQ2NyxcclxuICAgICAgICAgICAgeTogLTYyLjYxNTE3NTc3MjkyMzk3NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2Njg0NDM4JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdNZXRob2Qgb2YgdXNpbmcgY2FjaGUgdG8gZGV0ZXJtaW5lIHRoZSB2aXNpYmlsaXR5IHRvIGEgcmVtb3RlIGRhdGFiYXNlIGNsaWVudCBvZiBhIHBsdXJhbGl0eSBvZiBkYXRhYmFzZSB0cmFuc2FjdGlvbnMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNjUsXHJcbiAgICAgICAgICAgIHg6IC03MC44OTYyMTE5MDgwNTMyOSxcclxuICAgICAgICAgICAgeTogLTIxMS42NTg5ODEyNjQ2OTQ3NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NjkwMzg3JyxcclxuICAgICAgICAgICAgbmFtZTogJ1RvdWNoLXNjcmVlbiBpbWFnZSBzY3JvbGxpbmcgc3lzdGVtIGFuZCBtZXRob2QnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzNjEsXHJcbiAgICAgICAgICAgIHg6IC05Ni4wODMzMzM1ODYxMDE0LFxyXG4gICAgICAgICAgICB5OiAyNTcuMTg4NjY2MDQ0MjA5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2OTMyMzInLFxyXG4gICAgICAgICAgICBuYW1lOiAnSW5icmVkIGNvcm4gbGluZSBMSDI5NScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTU4NSxcclxuICAgICAgICAgICAgeDogMjI1LjIxMzYyMzk2NjM0MzMzLFxyXG4gICAgICAgICAgICB5OiAtMTgxLjcwMjMxMjA4NzM5MDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjY5ODY0MycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdFeHBhbmRpbmcgcGFyYWxsZWwgamF3IGRldmljZSBmb3IgdXNlIHdpdGggYW4gZWxlY3Ryb21lY2hhbmljYWwgZHJpdmVyIGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM1NSxcclxuICAgICAgICAgICAgeDogMTE2LjkzMzgwMDg4MjAwMzA4LFxyXG4gICAgICAgICAgICB5OiAyMjAuMjE0MTk3MDU0Mzk2MDdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjcxMTU2NScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNZXRob2QsIGFwcGFyYXR1cywgYW5kIHN5c3RlbSBmb3IgcHJldmlld2luZyBzZWFyY2ggcmVzdWx0cycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM4OCxcclxuICAgICAgICAgICAgeDogLTM3LjUwNDQ4MTI5MDc2NzM1LFxyXG4gICAgICAgICAgICB5OiAtMjczLjQxMTY5NTg0NzkxMzU2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3MTYyMzMnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ0VsZWN0cm9tZWNoYW5pY2FsIGRyaXZlciBhbmQgcmVtb3RlIHN1cmdpY2FsIGluc3RydW1lbnQgYXR0YWNobWVudCBoYXZpbmcgY29tcHV0ZXIgYXNzaXN0ZWQgY29udHJvbCBjYXBhYmlsaXRpZXMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNDQsXHJcbiAgICAgICAgICAgIHg6IDk5Ljk4NzQ0OTI3NzQwMTA3LFxyXG4gICAgICAgICAgICB5OiAyMTIuNTk1MjcyMjk5NjI2MDZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjcxODM2MScsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnTWV0aG9kIGFuZCBhcHBhcmF0dXMgZm9yIHJlbGlhYmxlIGFuZCBzY2FsYWJsZSBkaXN0cmlidXRpb24gb2YgZGF0YSBmaWxlcyBpbiBkaXN0cmlidXRlZCBuZXR3b3JrcycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM0OSxcclxuICAgICAgICAgICAgeDogLTIxNC40NzA2NDU0MjAwMTU1LFxyXG4gICAgICAgICAgICB5OiAxNzkuNzY0NDUzODMzMTE1NDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjcyNDM5OScsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnTWV0aG9kcyBhbmQgYXBwYXJhdHVzIGZvciBlbmFibGluZyBrZXlib2FyZCBhY2NlbGVyYXRvcnMgaW4gYXBwbGljYXRpb25zIGltcGxlbWVudGVkIHZpYSBhIGJyb3dzZXInLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNzEsXHJcbiAgICAgICAgICAgIHg6IC0zLjg2NTQzNzA5ODAzNjU5NyxcclxuICAgICAgICAgICAgeTogLTE2OC4wNDY2NTA3NTk3NzYxNlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NzI3NTIyJyxcclxuICAgICAgICAgICAgbmFtZTogJ1RyYW5zaXN0b3IgYW5kIHNlbWljb25kdWN0b3IgZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMzAxLFxyXG4gICAgICAgICAgICB4OiA0NS40OTMwMDkwODY1MzM0NzYsXHJcbiAgICAgICAgICAgIHk6IC0xOC4zOTkzMzY3NjE4NjU1NTVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjcyODcwMicsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnU3lzdGVtIGFuZCBtZXRob2QgdG8gaW1wbGVtZW50IGFuIGludGVncmF0ZWQgc2VhcmNoIGNlbnRlciBzdXBwb3J0aW5nIGEgZnVsbC10ZXh0IHNlYXJjaCBhbmQgcXVlcnkgb24gYSBkYXRhYmFzZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI5MCxcclxuICAgICAgICAgICAgeDogLTUwLjc3NjUxMjY5NjQ3OTY0LFxyXG4gICAgICAgICAgICB5OiAtMjY1LjY0Mzk0MTY2NDI2MTlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjcyODk2MCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUZWNobmlxdWVzIGZvciBtYW5hZ2luZyBtdWx0aXBsZSB0aHJlYWRzIGluIGEgYnJvd3NlciBlbnZpcm9ubWVudCcsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI4NyxcclxuICAgICAgICAgICAgeDogLTMxLjg2MDk4MjYwMDI3Mjc0LFxyXG4gICAgICAgICAgICB5OiAtMTc3LjA5NjI3OTI1MTY2MDc1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3MzIwOTUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWV0aG9kIGFuZCBhcHBhcmF0dXMgZm9yIG1hcHBpbmcgYmV0d2VlbiBYTUwgYW5kIHJlbGF0aW9uYWwgcmVwcmVzZW50YXRpb25zJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzE4LFxyXG4gICAgICAgICAgICB4OiAtNDUuMTc0MzA4MjY4Nzc1NDQsXHJcbiAgICAgICAgICAgIHk6IC0xNTIuMjM5MzgzNTUyOTg4MDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjczMjEwMCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEYXRhYmFzZSBhY2Nlc3MgbWV0aG9kIGFuZCBzeXN0ZW0gZm9yIHVzZXIgcm9sZSBkZWZpbmVkIGFjY2VzcycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM0NyxcclxuICAgICAgICAgICAgeDogLTU5LjIxMDEzNjgwNjI5MjY3NCxcclxuICAgICAgICAgICAgeTogLTE3NC44Mzg3Nzk5MDg0OTU3MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NzMyMTExJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdNZXRob2QsIGFwcGFyYXR1cywgc3lzdGVtLCBhbmQgcHJvZ3JhbSBwcm9kdWN0IGZvciBhdHRhY2hpbmcgZmlsZXMgYW5kIG90aGVyIG9iamVjdHMgdG8gYSBwYXJ0aWFsbHkgcmVwbGljYXRlZCBkYXRhYmFzZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI5NCxcclxuICAgICAgICAgICAgeDogLTkwLjczOTcwNTA0Nzk0NTEsXHJcbiAgICAgICAgICAgIHk6IC0yNDQuNzE5OTAzMjg3NzQzMTRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjc1NDY4MScsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnUGFydGlhbGx5IHJlcGxpY2F0ZWQgZGlzdHJpYnV0ZWQgZGF0YWJhc2Ugd2l0aCBtdWx0aXBsZSBsZXZlbHMgb2YgcmVtb3RlIGNsaWVudHMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNjksXHJcbiAgICAgICAgICAgIHg6IC03OS41ODA4Mzg3MDMxMjY1NSxcclxuICAgICAgICAgICAgeTogLTIyOC4xNzI0MDU0MTczODQyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3NjMzNTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWV0aG9kLCBhcHBhcmF0dXMsIGFuZCBzeXN0ZW0gZm9yIGF0dGFjaGluZyBzZWFyY2ggcmVzdWx0cycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTQ4NyxcclxuICAgICAgICAgICAgeDogLTI1LjI0MzQ3NDczMzQ5Mjc0MyxcclxuICAgICAgICAgICAgeTogLTI2My4yNTc0MDc5NDAyMTA2N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NzYzNTAxJyxcclxuICAgICAgICAgICAgbmFtZTogJ1JlbW90ZSBkb2N1bWVudCBzZXJ2aW5nJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzE5LFxyXG4gICAgICAgICAgICB4OiAxNTguMzI1MzgzNzYyMDk0MixcclxuICAgICAgICAgICAgeTogOTMuNDk1NDYyMzE1MTY5MTlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjc2ODkwNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEYXRhIGNvbW11bmljYXRpb24gbWV0aG9kIHVzaW5nIG1vYmlsZSB0ZXJtaW5hbCcsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI1NixcclxuICAgICAgICAgICAgeDogLTMwNy45NzYwNjE1ODEzMzQxNCxcclxuICAgICAgICAgICAgeTogMTguNzY5NzU2Njc5Nzk3Mzk2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3ODIzODMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3lzdGVtIGFuZCBtZXRob2QgdG8gaW1wbGVtZW50IGEgcGVyc2lzdGVudCBhbmQgZGlzbWlzc2libGUgc2VhcmNoIGNlbnRlciBmcmFtZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI4MixcclxuICAgICAgICAgICAgeDogLTEyLjk3NjE3NzU1NzgzNTg1MixcclxuICAgICAgICAgICAgeTogLTI3Mi45MTk0NDA0MDczNzkxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3ODM1MjQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUm9ib3RpYyBzdXJnaWNhbCB0b29sIHdpdGggdWx0cmFzb3VuZCBjYXV0ZXJpemluZyBhbmQgY3V0dGluZyBpbnN0cnVtZW50JyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNTA1LFxyXG4gICAgICAgICAgICB4OiA0My4zODIzMTA5ODY5NDA2NixcclxuICAgICAgICAgICAgeTogMjc5LjA4MjE3ODAxMTQ3NzE0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3ODYzODInLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1N1cmdpY2FsIHN0YXBsaW5nIGluc3RydW1lbnQgaW5jb3Jwb3JhdGluZyBhbiBhcnRpY3VsYXRpb24gam9pbnQgZm9yIGEgZmlyaW5nIGJhciB0cmFjaycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM3MSxcclxuICAgICAgICAgICAgeDogMTM0Ljk0MDc4MTY0NTAyODM1LFxyXG4gICAgICAgICAgICB5OiAtNjUuMTAwODIzNzM1NjYzODFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjgwNDMzMCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNZXRob2QgYW5kIHN5c3RlbSBmb3IgYWNjZXNzaW5nIENSTSBkYXRhIHZpYSB2b2ljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM0OCxcclxuICAgICAgICAgICAgeDogNDEuNDQ1MjUxNzIzODQyODY1LFxyXG4gICAgICAgICAgICB5OiAtMjM2Ljk5MTU2NDgxMDk4NjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjgwOTY1MycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUZWxlbWV0ZXJlZCBjaGFyYWN0ZXJpc3RpYyBtb25pdG9yIHN5c3RlbSBhbmQgbWV0aG9kIG9mIHVzaW5nIHRoZSBzYW1lJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjUwLFxyXG4gICAgICAgICAgICB4OiAtMTkyLjM2NjU5NDc3NTY4MDgsXHJcbiAgICAgICAgICAgIHk6IDg1LjIwMDM5NzEzODU5MTU0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY4MjY1NjUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWV0aG9kIGFuZCBhcHBhcmF0dXMgZm9yIHNlcnZpbmcgZmlsZXMgdG8gYnJvd3NpbmcgY2xpZW50cycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI1MyxcclxuICAgICAgICAgICAgeDogLTE4Ny4yMDIwNzg2MTIxNDIsXHJcbiAgICAgICAgICAgIHk6IC0yMDUuODAyODA2NzE0MDk3NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2ODI2NTgyJyxcclxuICAgICAgICAgICAgbmFtZTogJ01ldGhvZCBhbmQgc3lzdGVtIGZvciB1c2luZyBmaWxlIHN5c3RlbXMgZm9yIGNvbnRlbnQgbWFuYWdlbWVudCcsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI2MixcclxuICAgICAgICAgICAgeDogLTE3My4zOTA3MTcxMzQzNDU5MixcclxuICAgICAgICAgICAgeTogLTg0Ljc0ODEwNjQ1MzkxMDUyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY4MjY3NDUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3lzdGVtIGFuZCBtZXRob2QgZm9yIHNtYXJ0IHNjcmlwdGluZyBjYWxsIGNlbnRlcnMgYW5kIGNvbmZpZ3VyYXRpb24gdGhlcmVvZicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI5MCxcclxuICAgICAgICAgICAgeDogLTc2Ljc4MTI2NDMzMTIxMDA1LFxyXG4gICAgICAgICAgICB5OiAtMTg5LjIyMTQ4MTc1MTI1MDU0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY4Mjk2NTUnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ01ldGhvZCBhbmQgc3lzdGVtIGZvciBzZXJ2ZXIgc3luY2hyb25pemF0aW9uIHdpdGggYSBjb21wdXRpbmcgZGV2aWNlIHZpYSBhIGNvbXBhbmlvbiBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyOTIsXHJcbiAgICAgICAgICAgIHg6IDU0LjE1MDY3MjEwNzAxODY5LFxyXG4gICAgICAgICAgICB5OiAtMTkzLjU1OTU0MzExNTQ1MzU4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY4MzAxNzQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWVkaWNhbCBpbnN0cnVtZW50JyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzQ1LFxyXG4gICAgICAgICAgICB4OiAyNDEuNjgzNjU2MzA0MDAwMixcclxuICAgICAgICAgICAgeTogMTc4LjgxMDE1NTQ5NDI0NzNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjg0Mjc0OCcsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnVXNhZ2UgYmFzZWQgc3RyZW5ndGggYmV0d2VlbiByZWxhdGVkIGluZm9ybWF0aW9uIGluIGFuIGluZm9ybWF0aW9uIHJldHJpZXZhbCBzeXN0ZW0nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNzMsXHJcbiAgICAgICAgICAgIHg6IC0yNTUuNzY3MTQwMTc2MzkxOCxcclxuICAgICAgICAgICAgeTogLTg5LjMwOTQxNDkwMTYwMzA5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY4NDM0MDMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3VyZ2ljYWwgY2xhbXBpbmcsIGN1dHRpbmcgYW5kIHN0YXBsaW5nIGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI3OCxcclxuICAgICAgICAgICAgeDogODAuNjIyNjc4ODgzMTc1MTUsXHJcbiAgICAgICAgICAgIHk6IDIwNC42NzI0OTI5Mjk1NzU3MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2ODUwMjUyJyxcclxuICAgICAgICAgICAgbmFtZTogJ0ludGVsbGlnZW50IGVsZWN0cm9uaWMgYXBwbGlhbmNlIHN5c3RlbSBhbmQgbWV0aG9kJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNzg0LFxyXG4gICAgICAgICAgICB4OiAtMjY5LjA5Mzk2MjU3MTY5ODIsXHJcbiAgICAgICAgICAgIHk6IDgwLjc5MTUyNTQwOTE3MTAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY4NTA4OTUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQXNzaWdubWVudCBtYW5hZ2VyJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNDI5LFxyXG4gICAgICAgICAgICB4OiAtMTA0LjcxNTIzMTcyODk5OTc4LFxyXG4gICAgICAgICAgICB5OiAtMjM3LjY3NDg5MDUxNDk1MzgzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY4NTA5NDknLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1N5c3RlbSBhbmQgbWV0aG9kIGZvciBnZW5lcmF0aW5nIGEgZHluYW1pYyBpbnRlcmZhY2UgdmlhIGEgY29tbXVuaWNhdGlvbnMgbmV0d29yaycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI3NixcclxuICAgICAgICAgICAgeDogMTcwLjg5NDg0Nzg2NjY0MjMsXHJcbiAgICAgICAgICAgIHk6IC0xNTcuMTYyMzk5NjM4NzI3OVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2ODUyOTE1JyxcclxuICAgICAgICAgICAgbmFtZTogJ0luYnJlZCBjb3JuIGxpbmUgTEgyODNCdE1PTjgxMCcsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTU4NCxcclxuICAgICAgICAgICAgeDogMjE0LjI4NzgyNTI2NjY3OTcsXHJcbiAgICAgICAgICAgIHk6IC0yMjEuNjUwNjQ1OTA2MjU3MzVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjkwNTA1NycsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnU3VyZ2ljYWwgc3RhcGxpbmcgaW5zdHJ1bWVudCBpbmNvcnBvcmF0aW5nIGEgZmlyaW5nIG1lY2hhbmlzbSBoYXZpbmcgYSBsaW5rZWQgcmFjayB0cmFuc21pc3Npb24nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzOTgsXHJcbiAgICAgICAgICAgIHg6IDIwNC4yNDQzMTQwOTE3NDMsXHJcbiAgICAgICAgICAgIHk6IC03OC4xMDAyMzY3MjIzMjYwN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2OTU5ODUyJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdTdXJnaWNhbCBzdGFwbGluZyBpbnN0cnVtZW50IHdpdGggbXVsdGlzdHJva2UgZmlyaW5nIGluY29ycG9yYXRpbmcgYW4gYW50aS1iYWNrdXAgbWVjaGFuaXNtJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjc5LFxyXG4gICAgICAgICAgICB4OiAyMTQuNDc3NDExNDAyMzY1ODIsXHJcbiAgICAgICAgICAgIHk6IC01Ni4yOTE1ODc2MzY1OTExMjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjk2NDM2MycsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnU3VyZ2ljYWwgc3RhcGxpbmcgaW5zdHJ1bWVudCBoYXZpbmcgYXJ0aWN1bGF0aW9uIGpvaW50IHN1cHBvcnQgcGxhdGVzIGZvciBzdXBwb3J0aW5nIGEgZmlyaW5nIGJhcicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTMzMCxcclxuICAgICAgICAgICAgeDogMTcxLjg5MjQ3MjcwODk4MDI4LFxyXG4gICAgICAgICAgICB5OiAtOTcuNDEwMDI0NjI1NTAyOTNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjk3ODkyMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTdXJnaWNhbCBzdGFwbGluZyBpbnN0cnVtZW50IGluY29ycG9yYXRpbmcgYW4gRS1iZWFtIGZpcmluZyBtZWNoYW5pc20nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNzEsXHJcbiAgICAgICAgICAgIHg6IDIyMC45OTk4MDAzODA0MDQ0LFxyXG4gICAgICAgICAgICB5OiAtNzEuNDIwNzgxMzU2MzY1NDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjk4MTYyOCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTdXJnaWNhbCBpbnN0cnVtZW50IHdpdGggYSBsYXRlcmFsLW1vdmluZyBhcnRpY3VsYXRpb24gY29udHJvbCcsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTU4OCxcclxuICAgICAgICAgICAgeDogMTU1LjEyMjA5NjY3NzM4NzIyLFxyXG4gICAgICAgICAgICB5OiAtOTMuNjk2Mjg3NTE0NjAyOTRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzAwMDgxOCcsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnU3VyZ2ljYWwgc3RhcGxpbmcgaW5zdHJ1bWVudCBoYXZpbmcgc2VwYXJhdGUgZGlzdGluY3QgY2xvc2luZyBhbmQgZmlyaW5nIHN5c3RlbXMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE0MjIsXHJcbiAgICAgICAgICAgIHg6IDIyNy4wMTc2ODg0NTM3OTY5MixcclxuICAgICAgICAgICAgeTogNy4wMjQwNTY2MTE0NjMwNTFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzAyNTc0MycsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnRXh0ZXJuYWwgaW5mdXNpb24gZGV2aWNlIHdpdGggcmVtb3RlIHByb2dyYW1taW5nLCBib2x1cyBlc3RpbWF0b3IgYW5kL29yIHZpYnJhdGlvbiBhbGFybSBjYXBhYmlsaXRpZXMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzNDgsXHJcbiAgICAgICAgICAgIHg6IC0xMzkuMzM0ODcyNzU3NDQyNzUsXHJcbiAgICAgICAgICAgIHk6IDQ2LjUyMDYxMTE1MzM0Mzk4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzcwNDkxOTAnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ01ldGhvZCBmb3IgZm9ybWluZyBabk8gZmlsbSwgbWV0aG9kIGZvciBmb3JtaW5nIFpuTyBzZW1pY29uZHVjdG9yIGxheWVyLCBtZXRob2QgZm9yIGZhYnJpY2F0aW5nIHNlbWljb25kdWN0b3IgZGV2aWNlLCBhbmQgc2VtaWNvbmR1Y3RvciBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyMzQsXHJcbiAgICAgICAgICAgIHg6IC0yODkuMTA5MTg4MzM2MTEsXHJcbiAgICAgICAgICAgIHk6IC05Ny45Njc3NjkzODU0OTUzN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MDU1NzMxJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdTdXJnaWNhbCBzdGFwbGluZyBpbnN0cnVtZW50IGluY29ycG9yYXRpbmcgYSB0YXBlcmVkIGZpcmluZyBiYXIgZm9yIGluY3JlYXNlZCBmbGV4aWJpbGl0eSBhcm91bmQgdGhlIGFydGljdWxhdGlvbiBqb2ludCcsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTMyNSxcclxuICAgICAgICAgICAgeDogMjMwLjQ5NTE4Mzg2NDM5OTg4LFxyXG4gICAgICAgICAgICB5OiAtNTkuNjQyMjQ1Njc4NTgyNDhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzA2MTAxNCcsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnTmF0dXJhbC1zdXBlcmxhdHRpY2UgaG9tb2xvZ291cyBzaW5nbGUgY3J5c3RhbCB0aGluIGZpbG0sIG1ldGhvZCBmb3IgcHJlcGFyYXRpb24gdGhlcmVvZiwgYW5kIGRldmljZSB1c2luZyBzYWlkIHNpbmdsZSBjcnlzdGFsIHRoaW4gZmlsbScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzMzOSxcclxuICAgICAgICAgICAgeDogLTUuODAwODgyMDQ0OTAxNDM5LFxyXG4gICAgICAgICAgICB5OiA2OC41MjY0MTU5NTAzMTUyNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MDY0MzQ2JyxcclxuICAgICAgICAgICAgbmFtZTogJ1RyYW5zaXN0b3IgYW5kIHNlbWljb25kdWN0b3IgZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjY4LFxyXG4gICAgICAgICAgICB4OiAtMy40MDAzMDMxNTE5OTEzNzE2LFxyXG4gICAgICAgICAgICB5OiAyNS45ODEzNTY4MzYwNDM2ODhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzEwNTg2OCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdIaWdoLWVsZWN0cm9uIG1vYmlsaXR5IHRyYW5zaXN0b3Igd2l0aCB6aW5jIG94aWRlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjMzLFxyXG4gICAgICAgICAgICB4OiAtMTcuODM1Nzg1NzQ5Nzg1ODE3LFxyXG4gICAgICAgICAgICB5OiAxOTkuOTE4ODM3MjAyMTAzMDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzExMTc2OScsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnU3VyZ2ljYWwgaW5zdHJ1bWVudCBpbmNvcnBvcmF0aW5nIGFuIGFydGljdWxhdGlvbiBtZWNoYW5pc20gaGF2aW5nIHJvdGF0aW9uIGFib3V0IHRoZSBsb25naXR1ZGluYWwgYXhpcycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI3OCxcclxuICAgICAgICAgICAgeDogMTUxLjIyNTc5ODMyNTI0MDQ1LFxyXG4gICAgICAgICAgICB5OiAtMzcuMTcwOTkwNzQ3NDkwMTNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzE0NzEzOCcsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnU3VyZ2ljYWwgc3RhcGxpbmcgaW5zdHJ1bWVudCBoYXZpbmcgYW4gZWxlY3Ryb2FjdGl2ZSBwb2x5bWVyIGFjdHVhdGVkIGJ1dHRyZXNzIGRlcGxveW1lbnQgbWVjaGFuaXNtJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNDI4LFxyXG4gICAgICAgICAgICB4OiAxODkuMDg2MTQzMjM4NTc1LFxyXG4gICAgICAgICAgICB5OiAtNzMuNjkxMzAzOTI2ODM5MjRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzE1OTc1MCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTdXJnaWNhbCBzdGFwbGluZyBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNTgsXHJcbiAgICAgICAgICAgIHg6IC00MS4yOTk5NTE4NjUxOTQ0MyxcclxuICAgICAgICAgICAgeTogMjkyLjg0NjI2NzQ1Mzc4MjJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzIxMTgyNScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdJbmRpdW0gb3hpZGUtYmFzZWQgdGhpbiBmaWxtIHRyYW5zaXN0b3JzIGFuZCBjaXJjdWl0cycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzI0NSxcclxuICAgICAgICAgICAgeDogLTMxMi4zODM5MDU3MjIxNDc3LFxyXG4gICAgICAgICAgICB5OiAtNS42MTQ1NDE1NjcxMzMwMDdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzI0NjczNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSb3RhcnkgaHlkcmF1bGljIHB1bXAgYWN0dWF0ZWQgbXVsdGktc3Ryb2tlIHN1cmdpY2FsIGluc3RydW1lbnQnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyODgsXHJcbiAgICAgICAgICAgIHg6IDIwMC40NDU2MzM4MDA4NjUxNSxcclxuICAgICAgICAgICAgeTogLTYzLjE4ODY1NTg4MDc2ODg2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzcyODI3ODInLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ29tYmluZWQgYmluYXJ5IG94aWRlIHNlbWljb25kdWN0b3IgZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjczLFxyXG4gICAgICAgICAgICB4OiAtMTI1LjgzMDkwNDE0Nzc5ODYsXHJcbiAgICAgICAgICAgIHk6IC0zMS4yNzc4Nzc4OTM1ODA0ODhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzI5Nzk3NycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTZW1pY29uZHVjdG9yIGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzMxOCxcclxuICAgICAgICAgICAgeDogLTEyOC4yODI4ODYyOTY5NjcyNixcclxuICAgICAgICAgICAgeTogLTU1LjI2MTQ3NTU3ODAzMzI5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzczMjMzNTYnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ0xuQ3VPKFMsU2UsVGUpbW9ub2NyeXN0YWxsaW5lIHRoaW4gZmlsbSwgaXRzIG1hbnVmYWN0dXJpbmcgbWV0aG9kLCBhbmQgb3B0aWNhbCBkZXZpY2Ugb3IgZWxlY3Ryb25pYyBkZXZpY2UgdXNpbmcgdGhlIG1vbm9jcnlzdGFsbGluZSB0aGluIGZpbG0nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyNTEsXHJcbiAgICAgICAgICAgIHg6IC0xOC41OTc1NTMwNTM5NTU3NCxcclxuICAgICAgICAgICAgeTogODguOTU1MzE2MTA4Mzg5NjhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzM0MDQxMScsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnU3lzdGVtIGFuZCBtZXRob2QgZm9yIGdlbmVyYXRpbmcsIGNhcHR1cmluZywgYW5kIG1hbmFnaW5nIGN1c3RvbWVyIGxlYWQgaW5mb3JtYXRpb24gb3ZlciBhIGNvbXB1dGVyIG5ldHdvcmsnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyODIsXHJcbiAgICAgICAgICAgIHg6IDE3MS4xNDA4MzE1NTkxNjk4LFxyXG4gICAgICAgICAgICB5OiAtMjAyLjI0ODgzNzA4MDQ0ODA4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzczODA2OTUnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1N1cmdpY2FsIHN0YXBsaW5nIGluc3RydW1lbnQgaGF2aW5nIGEgc2luZ2xlIGxvY2tvdXQgbWVjaGFuaXNtIGZvciBwcmV2ZW50aW9uIG9mIGZpcmluZycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM4NixcclxuICAgICAgICAgICAgeDogMTg2LjI1ODMzNTMwMTEwMTk0LFxyXG4gICAgICAgICAgICB5OiAtMjEuNjYzMjE4NzMyNDUyMDlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzM4MDY5NicsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnQXJ0aWN1bGF0aW5nIHN1cmdpY2FsIHN0YXBsaW5nIGluc3RydW1lbnQgaW5jb3Jwb3JhdGluZyBhIHR3by1waWVjZSBFLWJlYW0gZmlyaW5nIG1lY2hhbmlzbScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM4OCxcclxuICAgICAgICAgICAgeDogMjA3LjkwMjk1OTM5MDMxNzksXHJcbiAgICAgICAgICAgIHk6IC04LjUzMTUzMzczNzYyMTg4NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3Mzg1MjI0JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdUaGluIGZpbG0gdHJhbnNpc3RvciBoYXZpbmcgYW4gZXRjaGluZyBwcm90ZWN0aW9uIGZpbG0gYW5kIG1hbnVmYWN0dXJpbmcgbWV0aG9kIHRoZXJlb2YnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyMjQsXHJcbiAgICAgICAgICAgIHg6IC0yMDkuODIyMzA0ODI1NTUzMzUsXHJcbiAgICAgICAgICAgIHk6IC0xMzguNTEwMDQwOTkwMDI5M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3NDAyNTA2JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdNZXRob2RzIG9mIG1ha2luZyB0aGluIGZpbG0gdHJhbnNpc3RvcnMgY29tcHJpc2luZyB6aW5jLW94aWRlLWJhc2VkIHNlbWljb25kdWN0b3IgbWF0ZXJpYWxzIGFuZCB0cmFuc2lzdG9ycyBtYWRlIHRoZXJlYnknLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyNTgsXHJcbiAgICAgICAgICAgIHg6IDIwNS4wMjQ3NTY2NzQ0Nzc3NCxcclxuICAgICAgICAgICAgeTogMTg1LjY3ODc4MDY2NDQzMDM4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzc0MDQ1MDgnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3VyZ2ljYWwgc3RhcGxpbmcgYW5kIGN1dHRpbmcgZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNTE3LFxyXG4gICAgICAgICAgICB4OiAxNDIuODUzNDg4NjE3MzIzNyxcclxuICAgICAgICAgICAgeTogMS4zMzI1ODg1MjgxNzQ4NTUzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzc0MTEyMDknLFxyXG4gICAgICAgICAgICBuYW1lOiAnRmllbGQtZWZmZWN0IHRyYW5zaXN0b3IgYW5kIG1ldGhvZCBmb3IgbWFudWZhY3R1cmluZyB0aGUgc2FtZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzI1NSxcclxuICAgICAgICAgICAgeDogOTguNDYyMDcyMjExODM1MjgsXHJcbiAgICAgICAgICAgIHk6IDEyMy4wMzA4NDc3NTM3MDI3OVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3NDUzMDY1JyxcclxuICAgICAgICAgICAgbmFtZTogJ1NlbnNvciBhbmQgaW1hZ2UgcGlja3VwIGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzIzMCxcclxuICAgICAgICAgICAgeDogLTAuMTY1NzM3NDM5NDI2NzE4NTQsXHJcbiAgICAgICAgICAgIHk6IDE0MS4yODkyMjkzNTI5OTAyMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3NDUzMDg3JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdUaGluLWZpbG0gdHJhbnNpc3RvciBhbmQgdGhpbi1maWxtIGRpb2RlIGhhdmluZyBhbW9ycGhvdXMtb3hpZGUgc2VtaWNvbmR1Y3RvciBsYXllcicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzI0MixcclxuICAgICAgICAgICAgeDogNjQuOTI2MTk5MDgyNzIyMjIsXHJcbiAgICAgICAgICAgIHk6IDE4MS44NDU5MzY2NTA5MDQ0M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3NDYyODYyJyxcclxuICAgICAgICAgICAgbmFtZTogJ1RyYW5zaXN0b3IgdXNpbmcgYW4gaXNvdmFsZW50IHNlbWljb25kdWN0b3Igb3hpZGUgYXMgdGhlIGFjdGl2ZSBjaGFubmVsIGxheWVyJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjQ0LFxyXG4gICAgICAgICAgICB4OiAtNjkuNjE2NzkxNDI4NDgyNTEsXHJcbiAgICAgICAgICAgIHk6IC0xNy45NTE0MzE3NjY3MTE5MjRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzQ2NDg0NicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTdXJnaWNhbCBpbnN0cnVtZW50IGhhdmluZyBhIHJlbW92YWJsZSBiYXR0ZXJ5JyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjg3LFxyXG4gICAgICAgICAgICB4OiAxODEuODQxOTQ5NTU5OTE2ODYsXHJcbiAgICAgICAgICAgIHk6IC02LjEzMDM1NjY0NDU0MTc1OVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3NDY4MzA0JyxcclxuICAgICAgICAgICAgbmFtZTogJ01ldGhvZCBvZiBmYWJyaWNhdGluZyBveGlkZSBzZW1pY29uZHVjdG9yIGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzI0MCxcclxuICAgICAgICAgICAgeDogNDMuMTQ0NDc0MjI4NzY0OTksXHJcbiAgICAgICAgICAgIHk6IDg0LjMwODU3NDQ5ODgzOTAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzc1MDEyOTMnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1NlbWljb25kdWN0b3IgZGV2aWNlIGluIHdoaWNoIHppbmMgb3hpZGUgaXMgdXNlZCBhcyBhIHNlbWljb25kdWN0b3IgbWF0ZXJpYWwgYW5kIG1ldGhvZCBmb3IgbWFudWZhY3R1cmluZyB0aGUgc2VtaWNvbmR1Y3RvciBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyMTYsXHJcbiAgICAgICAgICAgIHg6IDEwMC43NTk4NDQ5NTYxOTc2MyxcclxuICAgICAgICAgICAgeTogMjYzLjkzOTI4MTE3NzY1Mzg3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzc1MDY3OTEnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1N1cmdpY2FsIHN0YXBsaW5nIGluc3RydW1lbnQgd2l0aCBtZWNoYW5pY2FsIG1lY2hhbmlzbSBmb3IgbGltaXRpbmcgbWF4aW11bSB0aXNzdWUgY29tcHJlc3Npb24nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNTcsXHJcbiAgICAgICAgICAgIHg6IDE2Mi44OTk0Mzc0OTM4MzgzLFxyXG4gICAgICAgICAgICB5OiAtMTMuNTA3NjY0MzY0NjExMjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzYyMDY1NScsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnTWV0aG9kLCBkZXZpY2UgYW5kIGNvbXB1dGVyIHByb2dyYW0gcHJvZHVjdCBmb3IgaWRlbnRpZnlpbmcgdmlzaXRvcnMgb2Ygd2Vic2l0ZXMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNDMsXHJcbiAgICAgICAgICAgIHg6IDI3My43NDUzMjU3MDU4NDcxLFxyXG4gICAgICAgICAgICB5OiAtMTM0LjExOTY5NzE2ODA2NzgzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzc2MzI5ODUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU295YmVhbiBldmVudCBNT044OTc4OCBhbmQgbWV0aG9kcyBmb3IgZGV0ZWN0aW9uIHRoZXJlb2YnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE0NzcsXHJcbiAgICAgICAgICAgIHg6IDI1LjE1NjQxMjczMTEzMDk5NSxcclxuICAgICAgICAgICAgeTogMjMyLjYzODM3NDUzNjMxNjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzY2MzYwNycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNdWx0aXBvaW50IHRvdWNoc2NyZWVuJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAyMjE3LFxyXG4gICAgICAgICAgICB4OiAxNDguMzE3MjkwNzU3MTQ0MTIsXHJcbiAgICAgICAgICAgIHk6IC0yNTIuMTIwNTQxMTcyOTU2MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3Njc0NjUwJyxcclxuICAgICAgICAgICAgbmFtZTogJ1NlbWljb25kdWN0b3IgZGV2aWNlIGFuZCBtYW51ZmFjdHVyaW5nIG1ldGhvZCB0aGVyZW9mJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzNDM5LFxyXG4gICAgICAgICAgICB4OiAyNjUuMjA3NzUyNzM1MTE4ODUsXHJcbiAgICAgICAgICAgIHk6IDk3LjA4NzUzMTc1NjQ5ODc5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzc3MzI4MTknLFxyXG4gICAgICAgICAgICBuYW1lOiAnU2VtaWNvbmR1Y3RvciBkZXZpY2UgYW5kIG1hbnVmYWN0dXJpbmcgbWV0aG9kIHRoZXJlb2YnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyODgsXHJcbiAgICAgICAgICAgIHg6IDI0MS4yNzQzMjQ3NTY5NjE0NSxcclxuICAgICAgICAgICAgeTogOTIuNTc5MTcxNTk2NjE1OTVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnODA1MzE4NCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTb3liZWFuIGV2ZW50IE1PTjg5Nzg4IGFuZCBtZXRob2RzIGZvciBkZXRlY3Rpb24gdGhlcmVvZicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI0OSxcclxuICAgICAgICAgICAgeDogMTIuNzQxNzM5Mjc0NTE5ODYsXHJcbiAgICAgICAgICAgIHk6IDIyMy4zMzA1MDk0Njg1Mzg1NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQwODI2MDItMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBZGFtIEhlbGxlcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI3OCxcclxuICAgICAgICAgICAgeDogLTc4Ljk3OTE4MzY3ODc4Mzk1LFxyXG4gICAgICAgICAgICB5OiAxNzUuODM0NTg1NTE5NDU2OTdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTUxMjc2LTExJyxcclxuICAgICAgICAgICAgbmFtZTogJ0FkcmlhbiBHdXQnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNCxcclxuICAgICAgICAgICAgeDogLTEyNi40OTE2Mzg5Njg4MjA4MixcclxuICAgICAgICAgICAgeTogNzcuMDUzOTI1NDI4OTQ0MzdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTUxMjc2LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQWxhbiBIYXViYWNoJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTUsXHJcbiAgICAgICAgICAgIHg6IC0xMzMuNTQ0ODA2MTg1MTc1NTYsXHJcbiAgICAgICAgICAgIHk6IDEzLjczNjQ0MzM3OTU0MjQzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjczMjA5NS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0FsZXggV2Fyc2hhdnNreScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDM4LFxyXG4gICAgICAgICAgICB4OiAtNDEuNDMwMDYwOTEwMTQ2ODEsXHJcbiAgICAgICAgICAgIHk6IC0xMTUuNjk0NjgxMzcwNjQ4MTdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0MDgyMDk3LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQWxmcmVkIEUuIE1hbm4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3MyxcclxuICAgICAgICAgICAgeDogLTE2Ni4yNTEyNzgyMzQxNzY4OCxcclxuICAgICAgICAgICAgeTogNjQuMjE0MjQ1NTY2MjMzMzlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3NDAyNTA2LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnQW5kcmVhIEMuIFNjdWRlcmknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyLFxyXG4gICAgICAgICAgICB4OiAyMzIuMDIxMDEzNTY0OTQ0LFxyXG4gICAgICAgICAgICB5OiAyMDEuNTQzNjA1NTMyMTQ1NTNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2Mjk1NTMwLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQW5kcmV3IE0uIFJpdGNoaWUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxyXG4gICAgICAgICAgICB4OiAtMTgwLjEzMjcwMTA5MzgwODgzLFxyXG4gICAgICAgICAgICB5OiAtMTc1Ljg5MzM1ODc1MDM5Mjg1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTk0NDc5MS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0FuZHJldyBXLiBTY2hlcnBiaWVyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOCxcclxuICAgICAgICAgICAgeDogODkuMDM1OTY3ODg3MDIyNzEsXHJcbiAgICAgICAgICAgIHk6IDczLjQxOTY2NjAxNTYyMDU4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjY2NTY0OC00JyxcclxuICAgICAgICAgICAgbmFtZTogJ0FuZHJ6ZWogUC4gTWF6dXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxyXG4gICAgICAgICAgICB4OiAtMTcuNzU5NTc3MzgxMzMyNjksXHJcbiAgICAgICAgICAgIHk6IC05MC4wNDMyNzg4NDE0MTEzOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1Nzc3MjYtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBbmlsIEsuIEFubmFkYXRhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTksXHJcbiAgICAgICAgICAgIHg6IC05MC4yNzIzNzcyNjc1ODU4MSxcclxuICAgICAgICAgICAgeTogLTE0Mi4xMTk4MTU1MzEyNzg0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjMzNjEzNy0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0FuaWwgTXVrdW5kYW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyNCxcclxuICAgICAgICAgICAgeDogNDQuOTc1NzAwMDM4ODIwNTksXHJcbiAgICAgICAgICAgIHk6IC0xNzMuMTkxMjYzMDUyMTYzNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4Mjk2NTUtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBbnVwYW0gU2luZ2hhbCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEyLFxyXG4gICAgICAgICAgICB4OiA2OC4wMzM0MTQ5NzA4MDgwOCxcclxuICAgICAgICAgICAgeTogLTE1OS42MTY0MDkwMTgzMDMxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTI3NjI2Mi0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0FydGh1ciBMLiBKb2huc29uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOSxcclxuICAgICAgICAgICAgeDogMTg1LjUwOTU2NjQzNTIyMjgsXHJcbiAgICAgICAgICAgIHk6IC0yMjguODQxOTkxNTg5ODQwNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzcwODI4MzItNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBeWFub3JpIEVuZG8nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1LFxyXG4gICAgICAgICAgICB4OiAxMTYuMDkyNjE1NzMwMTA5NTEsXHJcbiAgICAgICAgICAgIHk6IDE0OS4xNzE3NjA4MTg3NTU3M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYzNzA1ODQtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBemVyIEJlc3RhdnJvcycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDgsXHJcbiAgICAgICAgICAgIHg6IC0yNDAuNDEyOTI0MTUxOTQwODcsXHJcbiAgICAgICAgICAgIHk6IDE5Ny40MDIwMTA3Mjk4NDYzOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU3MjI5OTctMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdCZWhyYWQgQXJpYScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDc1LFxyXG4gICAgICAgICAgICB4OiAtNzYuODg2Mzk1Nzk4OTkyNjgsXHJcbiAgICAgICAgICAgIHk6IDE0MC41OTc0MzQ4MDI4NTE0NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQ5NzIyMjQtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdCZW5uaWUgVGhvbXBzb24nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0NixcclxuICAgICAgICAgICAgeDogMTI5LjgwNzM1MDUyMzg5ODEyLFxyXG4gICAgICAgICAgICB5OiAtNC40ODE5NzI1NTk4Mzk5ODNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3NjIwNjU1LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnQmrDtnJuIFNwZXJsaW5nJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcclxuICAgICAgICAgICAgeDogMjY1LjY5ODAyNDY2MDIxMzQzLFxyXG4gICAgICAgICAgICB5OiAtMTYzLjE3NDg3NTkyNjgyNDdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTUxMjc2LTEyJyxcclxuICAgICAgICAgICAgbmFtZTogJ0JvYiBNdXJ0ZmVsZHQnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNCxcclxuICAgICAgICAgICAgeDogLTEwNC41NzYwMjY0MTYwNTAyMyxcclxuICAgICAgICAgICAgeTogNDMuMjE5MjkzODYwMTc0OTFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODA5NjUzLTknLFxyXG4gICAgICAgICAgICBuYW1lOiAnQnJhZCBULiBIaXRlJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNCxcclxuICAgICAgICAgICAgeDogLTE3OC43NDA2OTQ0Mjk1OTcsXHJcbiAgICAgICAgICAgIHk6IDExNC41NjQzMDEwNzEwMDMxMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY2NjU2NDgtNScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdCcmlhbiBHcm92ZXMnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxyXG4gICAgICAgICAgICB4OiAtNC4wNjM3MDM3Mjc1OTM1NTksXHJcbiAgICAgICAgICAgIHk6IC05My4yNDY2NjAyMTYxNTE3N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzcwMDA4MTgtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdCcmlhbiBKLiBIZW1tZWxnYXJuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMixcclxuICAgICAgICAgICAgeDogMjUxLjg3ODI1MjcxNjkyMjA4LFxyXG4gICAgICAgICAgICB5OiAyOC4yODk4MDMxOTUyNjAwOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY2NTg1NzctMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdCcmlhbiBRLiBIdXBwaScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDk0LFxyXG4gICAgICAgICAgICB4OiAxMjMuMTk2MzE5ODc4MzUyNTgsXHJcbiAgICAgICAgICAgIHk6IC0yNjkuNTU0OTU1Mjc3NzExMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU0NjU4OTUtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdCcnlhbiBELiBLbm9kZWwnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNDcsXHJcbiAgICAgICAgICAgIHg6IDI0OS4yNzE1OTM1MjUwOTY5NixcclxuICAgICAgICAgICAgeTogMTQ5Ljg5NDIyNjk2NTM0NDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1OTQ4MDA2LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ2FybGEgTS4gTWFubicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMwLFxyXG4gICAgICAgICAgICB4OiAtMTQ4LjQxMTUzNDc2OTg3ODA1LFxyXG4gICAgICAgICAgICB5OiAyNjguMjEwMjM2ODUzMzcwMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1NTgzNTEtOCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDYXJ5IEQuIFRhbGJvdCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUxLFxyXG4gICAgICAgICAgICB4OiAtMjQyLjEyMDEzNzM5NjAwODUsXHJcbiAgICAgICAgICAgIHk6IDEuMDgwOTEwNTg2MTcyMjQ4M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUxNzY2NDQtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDaGFkIFNyaXNhdGhhcGF0JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjgsXHJcbiAgICAgICAgICAgIHg6IC0xMDYuNTk3ODAzMjU2NDUyODksXHJcbiAgICAgICAgICAgIHk6IDU2LjcyNDE1OTk2MjQ3MzYzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjczMjA5NS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0NoYW5kcmFrYW50IFJhbWtyaXNobmEgQmhhdnNhcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDcsXHJcbiAgICAgICAgICAgIHg6IC01Ni40NDY5MjQyMzYwMjg1OCxcclxuICAgICAgICAgICAgeTogLTExNC4zODkzNjM1NTk1MjUyMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4MDQzMzAtNScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDaHJpcyBIYXZlbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDgsXHJcbiAgICAgICAgICAgIHg6IDc2LjU4OTk2OTI2NjA3MDI3LFxyXG4gICAgICAgICAgICB5OiAtMjMzLjU5Mzc2NDIxNzc0OTY4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTg1OTkxNi0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0NocmlzdG9waGVyIEEuIEp1bGlhbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDM1LFxyXG4gICAgICAgICAgICB4OiAzMi40OTUyOTIwMjkxNTUyNixcclxuICAgICAgICAgICAgeTogMzA3Ljg1NTg3MTU3MzI5OTE3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTk2Mzk1My0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0NocmlzdG9waGVyIFN0YXViZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxyXG4gICAgICAgICAgICB4OiAzOC44NzY0OTkxNzczMDg5MzYsXHJcbiAgICAgICAgICAgIHk6IC0yNTQuNjg1MzM3MTQ4NTQwN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1OTM4MzQtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDaHVub25nIFFpdScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMwLFxyXG4gICAgICAgICAgICB4OiAtMjk5LjUxMzU3MDczMjc1NzY3LFxyXG4gICAgICAgICAgICB5OiAyOC42OTM1ODYxMzMxNzk1MDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NzAzMzU3LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ2luZHkgWGluZyBRaXUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzNyxcclxuICAgICAgICAgICAgeDogLTMwNy42MDQ5NDYwMjA4ODQ5NCxcclxuICAgICAgICAgICAgeTogLTM2LjA5OTc0Mjk3NjkyNTU0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTM4MjIzMi0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0NsaWZmIEhhZ3VlJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjUsXHJcbiAgICAgICAgICAgIHg6IC0xNTguOTQ4ODkxNzA3OTIyMTcsXHJcbiAgICAgICAgICAgIHk6IDc1LjU3MzY2MTI1OTY3MDkxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjUzNTkwOS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0RhdmlkIEJyYWRsZXkgUnVzdCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEwLFxyXG4gICAgICAgICAgICB4OiAyOTMuODkzNzgyNjY4ODEyMTUsXHJcbiAgICAgICAgICAgIHk6IDEwOC4yNDA0NTU5MjY5MDQ0OVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU3MTM5MTEtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEYXZpZCBDLiBSYWNlbmV0JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTE3LFxyXG4gICAgICAgICAgICB4OiAtNzAuNzMxOTk5OTY3MjkwNzYsXHJcbiAgICAgICAgICAgIHk6IDI4My42ODg0NTAyMTMyNjYxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTUxMjQyNi0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0RhdmlkIEguIExldnknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA5NyxcclxuICAgICAgICAgICAgeDogMTc1LjYyMjczMzQ2ODI5NTkzLFxyXG4gICAgICAgICAgICB5OiAxOTUuMDMzNDgwOTIwNDI3ODVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NzU1NzM3LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRGF2aWQgS2FybCBMZWUgUGV0ZXJzb24nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMCxcclxuICAgICAgICAgICAgeDogLTExNi4xOTk5NzU5MzkyMDY4MSxcclxuICAgICAgICAgICAgeTogMjM1LjQyMzE3NDY3NzY4NzA2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjAwNDI3Ni0xMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEYXZpZCBMLiBSYWJiZXJzJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOSxcclxuICAgICAgICAgICAgeDogOTAuMDU0NTUxMzg4Mzk0NjcsXHJcbiAgICAgICAgICAgIHk6IC0xOTkuNzY3MjQzMDI2NjA5OTJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0MTI3MjI3LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRGF2aWQgVC4gR3JlZW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyNTMsXHJcbiAgICAgICAgICAgIHg6IDMyMC4wNTM4OTU2NDkzNDc0LFxyXG4gICAgICAgICAgICB5OiAtMi41Njc0NDA2OTgzNzgzNzc3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTMyOTY1NS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0RlYW4gTC4gR2FybmVyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOSxcclxuICAgICAgICAgICAgeDogODIuOTg2ODM3ODY2NTg0NCxcclxuICAgICAgICAgICAgeTogLTc1LjAxNDcyMTU1MDAyMTM4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU1MTI3Ni05JyxcclxuICAgICAgICAgICAgbmFtZTogJ0RlYm9yYWggUnVwcGVydCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIyLFxyXG4gICAgICAgICAgICB4OiAtMTE4LjI2NTUyOTM3NDUxNTA3LFxyXG4gICAgICAgICAgICB5OiAyMC4xMzE0ODExODkxMDE2OTVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTUxMjc2LTEwJyxcclxuICAgICAgICAgICAgbmFtZTogJ0Rlbm5pcyBQLiBCaXNob3AnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNixcclxuICAgICAgICAgICAgeDogLTExMy4wNDEzODQzMjY1OTk0MyxcclxuICAgICAgICAgICAgeTogNjguNTM0NzkxODE1NjIyOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU5MTgxNTktMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEZW56aWwgV2lsbG91Z2hieSBDaGVzbmV5JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOCxcclxuICAgICAgICAgICAgeDogLTIyMS4zNDM4MTYzMTk3NzMyLFxyXG4gICAgICAgICAgICB5OiAtMTgwLjMxMjU4ODY4NDM1NzI1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjkxMjgzOS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0RlcmVrIERlZSBEZXZpbGxlJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTI3LFxyXG4gICAgICAgICAgICB4OiAxMjQuMDA1NjIzNjk3MTQ2MDksXHJcbiAgICAgICAgICAgIHk6IDMwLjMwMzUxODU3MzIxMzMyOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3MTgzNjEtOCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEb21lbmljIEouIExhUm9zYScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDcsXHJcbiAgICAgICAgICAgIHg6IC0xODUuMTYzNDAyNzE1MTU4OCxcclxuICAgICAgICAgICAgeTogMTkxLjQ5ODgwNTU4MDkwODk2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjg1MDk0OS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0RvdWcgV2FybmVyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcclxuICAgICAgICAgICAgeDogMTk3LjQxMDk1ODY2MjQ4ODgsXHJcbiAgICAgICAgICAgIHk6IC0xNDEuNTExMzc0MjU5MDEyNzdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTMwOTMyLTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnRG91Z2xhcyBCLiBIb2ZmbWFuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDEsXHJcbiAgICAgICAgICAgIHg6IDExMi42NTkwMjIwMjY3ODg4NixcclxuICAgICAgICAgICAgeTogLTQxLjk1MTc5NDE5MzQwODAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjQzNDU1MC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0RvdWdsYXMgSy4gV2FybmVyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTEsXHJcbiAgICAgICAgICAgIHg6IC0yNDAuMjEzMDUxODAzMTQ3LFxyXG4gICAgICAgICAgICB5OiAtNTguMzg1MzQ1MjIxNzYwNDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODUwODk1LTUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRHVhbmUgV2FuZGxlc3MnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxyXG4gICAgICAgICAgICB4OiAtMTQxLjc3MTIwMzcwOTU3NTA1LFxyXG4gICAgICAgICAgICB5OiAtMjM1Ljg0OTQ1ODg4NTU1MzM2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzYzMjk4NS00JyxcclxuICAgICAgICAgICAgbmFtZTogJ0VsbGVuIERpY2tpbnNvbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUsXHJcbiAgICAgICAgICAgIHg6IC02LjY1MDcxMjk1MzY1OTIzMixcclxuICAgICAgICAgICAgeTogMjQzLjg1OTIyNDk0OTc3OTk2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTYxNjUzMi0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0VwaHJhaW0gSGVsbGVyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTI1LFxyXG4gICAgICAgICAgICB4OiAtMTM2LjY2Mjc2OTMxNzg2Nzg4LFxyXG4gICAgICAgICAgICB5OiAxNDguNTA4MzMyODczMDY4NDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzI0Mzk5LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRXJuc3QgS2F0Y2hvdXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyLFxyXG4gICAgICAgICAgICB4OiAyMC40NjA3MDUxNzc4MTY4MTYsXHJcbiAgICAgICAgICAgIHk6IC0xMzguNjMxNjE3NDM0NjA0N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQ0MDM2ODctMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdFdWdlbmUgTC4gVGltcGVybWFuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNjksXHJcbiAgICAgICAgICAgIHg6IDE2Ny44MTQwNTk3NjI0MDMyMixcclxuICAgICAgICAgICAgeTogMjMuNjUzNzk0MzQ4NjcwNTE2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjkwNTA1Ny0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0ZyZWRlcmljayBFLiBTaGVsdG9uLCBJVicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEwNDcsXHJcbiAgICAgICAgICAgIHg6IDIwNi45NDA1NTYwMTE2MTk1OCxcclxuICAgICAgICAgICAgeTogLTMzLjYzNzk0NDAxOTIyMTA1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTA0MTA4Ni00JyxcclxuICAgICAgICAgICAgbmFtZTogJ0ZyZWRyaWMgQy4gQ29sbWFuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTE5LFxyXG4gICAgICAgICAgICB4OiAtOTMuMDcxNDE1MjIyMzM1NjUsXHJcbiAgICAgICAgICAgIHk6IDE4Ny42MTM4Mjc5MTIxNDc3NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY0MzM5MjEtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdHLiBWaWN0b3IgVHJleXonLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxOSxcclxuICAgICAgICAgICAgeDogLTI1MC4yMTQxOTIyMDg3MjQ5LFxyXG4gICAgICAgICAgICB5OiAxMTcuNzA5MzYxODgxMjg3ODlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTU4MzUxLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnR2FycnkgTS4gU3RlaWwnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMSxcclxuICAgICAgICAgICAgeDogLTE5Ny41NTAzMzg0MzcwNzA4OCxcclxuICAgICAgICAgICAgeTogLTE0Ljk2OTA1NDE1NzI1NTI2MVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU3MDczNjktMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdHZW9mZnJleSBDLiBIdWVpbCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDM3LFxyXG4gICAgICAgICAgICB4OiA4OC43NzczMjEyOTk3NTk2OCxcclxuICAgICAgICAgICAgeTogLTU5LjM0Mjk0NDY5MDkwNDMxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjgyNjU4Mi0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0dlb3JnZSBFcmljc3NvbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXHJcbiAgICAgICAgICAgIHg6IC0xNTguMDIwNzA4NTUyNDk5MzcsXHJcbiAgICAgICAgICAgIHk6IC0xMTEuNDEzNTU2NjYwNzU0MTNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICdSRTI4OTMyLTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnR3JhaGFtIFcuIEJyeWFuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTcsXHJcbiAgICAgICAgICAgIHg6IDMwMi4xNTE5NzE3NDk4MTk5NSxcclxuICAgICAgICAgICAgeTogMi45NzExNTMzMDEyMTcxODZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MTQ0Njc5LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnR3JlZ29yeSBTIEhlcm1hbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDcwLFxyXG4gICAgICAgICAgICB4OiAtMTA3LjA4NzIxMjEyNDM4MjUzLFxyXG4gICAgICAgICAgICB5OiAtMjIuOTk5MzI1OTgwNDc1MzQ0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjYwMTA4Ny0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0d1YW5naG9uZyBZYW5nJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOCxcclxuICAgICAgICAgICAgeDogMTgxLjk0MDA4NjgwODAyMjEsXHJcbiAgICAgICAgICAgIHk6IDc3LjY2Nzc4NjIzMzgxMTlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTc3NzI2LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSGVucnkgRC4gSmF5JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNyxcclxuICAgICAgICAgICAgeDogLTEyMi4wMjMyMDQ3Njk4MjQ5OSxcclxuICAgICAgICAgICAgeTogLTE1Ny45NTU2NjczMjQxODI4NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQyODMwMjQtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdIZW5yeSBSLiBTaWVua2lld2ljeicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDM1LFxyXG4gICAgICAgICAgICB4OiAyNzQuNjA0MTU2MDM3MTI3MjcsXHJcbiAgICAgICAgICAgIHk6IC0yNy4yNzMzMDk2MjU4NDU2N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzczMjMzNTYtNScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdIaWRlbm9yaSBIaXJhbWF0c3UnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0LFxyXG4gICAgICAgICAgICB4OiAtMzYuNjA1NDI0MjUxOTUwNDQ2LFxyXG4gICAgICAgICAgICB5OiAxMTUuODUwMDg5MzE5OTg4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDcwMzAxOS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0hpZGVvIEhvc29ubycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDY4LFxyXG4gICAgICAgICAgICB4OiAtOS44NTk0NTcwOTQyMzczMzMsXHJcbiAgICAgICAgICAgIHk6IDExMi4xODM3NDY5NjM0ODkxM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQyNTMwNjEtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdIaWRlbyBPaG5vJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNTUsXHJcbiAgICAgICAgICAgIHg6IDE2LjQyNDM5NzgzNTkxMzk5MyxcclxuICAgICAgICAgICAgeTogMS41OTgxMjkwMzIxMTQxMTYyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTI3MjA2OS02JyxcclxuICAgICAgICAgICAgbmFtZTogJ0hpcm9taWNoaSBPdGEnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxOSxcclxuICAgICAgICAgICAgeDogLTQyLjkzMDIzMTIzMzI5OTU2NSxcclxuICAgICAgICAgICAgeTogNzIuMDMwODE1NzgyOTYxMThcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MDQxMjAwLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSGlyb21pdHN1IElzaGlpJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDAsXHJcbiAgICAgICAgICAgIHg6IC0yNDAuNDUwOTYyOTMzOTI5NixcclxuICAgICAgICAgICAgeTogLTE1MC4yNzYwMTI2NTk4ODM1MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4NjMzNjMtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdIaXNhdG8gWWFidXRhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDAsXHJcbiAgICAgICAgICAgIHg6IDYwLjQzNzIxNDc2NjU0NTUsXHJcbiAgICAgICAgICAgIHk6IDU2LjQ5NjY0OTIxODgxMzg3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzM4NTIyNC0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0hpdG9zaGkgSG9rYXJpJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcclxuICAgICAgICAgICAgeDogLTI0MS44MzEwMzMzNzk5NTExLFxyXG4gICAgICAgICAgICB5OiAtMTMzLjU0MDQ5Nzc5Mjk1NDI4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTA0MTIwMC00JyxcclxuICAgICAgICAgICAgbmFtZTogJ0lrdWhpcm8gWWFtYWd1Y2hpJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTAsXHJcbiAgICAgICAgICAgIHg6IC0yMjguNzgwODY3MDE3MTkxNTMsXHJcbiAgICAgICAgICAgIHk6IC0xNjIuMzY2NzE1ODg1NjAxN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQ5OTcyNjItMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdJa3VvIFNha29ubycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDksXHJcbiAgICAgICAgICAgIHg6IC0yMi40NTE1NTY2NTIzOTM5NDMsXHJcbiAgICAgICAgICAgIHk6IC0zNC4wNDc1MDE2ODQxODIxMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUwODE0MjItMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdJc2hpYW5nIFNoaWgnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyOCxcclxuICAgICAgICAgICAgeDogLTI4Ni4zMjcwNzc1OTQwMzk2LFxyXG4gICAgICAgICAgICB5OiAtMjMuNzMzMTA1MTE5NDU4NDk3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjI4MTg5OC0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0phY3F1ZWx5biBBLiBNYXJ0aW5vJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDMsXHJcbiAgICAgICAgICAgIHg6IC03Ny40MDQyNjY3NDYzMDI1OCxcclxuICAgICAgICAgICAgeTogMjMzLjE0MzY2MjA5Mzk3NDA2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjY2NTY0OC0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0phaS1KZWluIFl1JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcclxuICAgICAgICAgICAgeDogLTMxLjg0MDA1Mjg2NDkyNjczLFxyXG4gICAgICAgICAgICB5OiAtOTEuNjIzNzU3NDczNjQxMTlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0ODA5Njk3LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmFtZXMgRC4gQ2F1c2V5LCBJSUknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMDgsXHJcbiAgICAgICAgICAgIHg6IC0xNzguMjY1MjE2MTIwNDIyLFxyXG4gICAgICAgICAgICB5OiA1MS43NTU2ODA5MzA3NDY2ODVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0ODYzNDI1LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmFtZXMgTC4gSGVua2UnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyNSxcclxuICAgICAgICAgICAgeDogLTIyOS44MjYzMjMyNjY5MzE0NCxcclxuICAgICAgICAgICAgeTogODEuMTQ4MzkxODM1MDQ1MVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU1MzMyMzgtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKYW1lcyBTYXknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMTUsXHJcbiAgICAgICAgICAgIHg6IC0xMTAuMjY1MTQ2NTA1NTAzMTMsXHJcbiAgICAgICAgICAgIHk6IDE4OS43Mzg0MTkwNzI2MTM3NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3MTE1NjUtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKYXNvbiBab3NzJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTQsXHJcbiAgICAgICAgICAgIHg6IC0zNi43OTc2MzU4MzA0MTMzOCxcclxuICAgICAgICAgICAgeTogLTMwMy4zNjA2MjkzMTQwMDU3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU1MTI3Ni04JyxcclxuICAgICAgICAgICAgbmFtZTogJ0pheSBZb25lbW90bycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI2LFxyXG4gICAgICAgICAgICB4OiAtMTA4LjM5MDYwMTE1MDY1Njk2LFxyXG4gICAgICAgICAgICB5OiAzMC42Njc1MzA5NjQ5ODQ4MTdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1ODYzMzI2LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmVmZnJleSBFLiBOYXVzZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDcsXHJcbiAgICAgICAgICAgIHg6IC0zNC45NzQ2ODc4MjY1MTM5OSxcclxuICAgICAgICAgICAgeTogMjI1LjUzNzgxMjc2NjcyNDI3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDk1MTI3OC0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0plZmZyZXkgSS4gQ29oZW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0NSxcclxuICAgICAgICAgICAgeDogLTEwNi42NzcyOTI1NjAwMzQyMixcclxuICAgICAgICAgICAgeTogLTI3NS45NjY1NTc2NTE4MjEyM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYzOTM2MDUtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKZWZmcmV5IExvb21hbnMnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0LFxyXG4gICAgICAgICAgICB4OiAtMTIuMDg5NTIzMjgwODYyMTY0LFxyXG4gICAgICAgICAgICB5OiAtMTQ2Ljg3Mjk1Njg5MjUwNTY0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTI0MzYyMi0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0plZmZyZXkgTS4gRmlzY2hlcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIzLFxyXG4gICAgICAgICAgICB4OiAtNjkuMTE1MTA1NzY0MDM2NjMsXHJcbiAgICAgICAgICAgIHk6IC0xMjEuNTk1OTYyMzgyNzg5MTFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1ODk3NTYzLTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmVmZnJleSBTLiBTd2F5emUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMzcsXHJcbiAgICAgICAgICAgIHg6IDE4Mi43NTc1MjE4NzcwNzEyLFxyXG4gICAgICAgICAgICB5OiAtNDIuNjUyMjY0ODc1Mzk3OTI1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzYwODc2MS00JyxcclxuICAgICAgICAgICAgbmFtZTogJ0plbm5pZmVyIFJpbmVoYXJ0JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOSxcclxuICAgICAgICAgICAgeDogMTQuNjAzMDMzNzE3NjQ0ODc3LFxyXG4gICAgICAgICAgICB5OiAyNTguMDE2OTM4MDc5NDMwNzZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3MzgwNjk2LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmVycnkgUi4gTW9yZ2FuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcclxuICAgICAgICAgICAgeDogMjQwLjc3OTIzNTEyNTM5MTcyLFxyXG4gICAgICAgICAgICB5OiAwLjc1NjE4NTY1NTIyMjYyNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU3MTU0NTAtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKZXNzZSBBbWJyb3NlJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTksXHJcbiAgICAgICAgICAgIHg6IDM2LjE4MDQyMzUxNDUwODIwNixcclxuICAgICAgICAgICAgeTogLTI3MS4xMTgxNTE4OTE2NjY1N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3MTE1NjUtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKaWFuLUp1bmcgWWluZycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE1LFxyXG4gICAgICAgICAgICB4OiAtNTIuNDA1OTQzNjI5MTYwMjcsXHJcbiAgICAgICAgICAgIHk6IC0yOTguNjIwOTg1MjQ0NjU3N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1MTYyMjctNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKb2V5IENoZW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1MCxcclxuICAgICAgICAgICAgeDogLTE1NC41NDY2NzEzNjI5MDk5MyxcclxuICAgICAgICAgICAgeTogMjA4Ljk1MDcyMjgwNzM0MzM3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjIzMzYxNy0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0pvaG4gQ29rZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyOSxcclxuICAgICAgICAgICAgeDogLTEwNy44MTg5MzgxNTYzMjE0NCxcclxuICAgICAgICAgICAgeTogLTE3MC45MDc0Njc2MjMxNjU2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDU2MTQ0NC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0pvaG4gSC4gTGl2aW5nc3RvbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMxLFxyXG4gICAgICAgICAgICB4OiAtMTUyLjg1MzAwNDQ0NTgzOTU2LFxyXG4gICAgICAgICAgICB5OiA4NS4xMDk0MDAwODk2NDk2N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUyMzcxNzgtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKb2huIEouIE1hc3Ryb3RvdGFybycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDc3LFxyXG4gICAgICAgICAgICB4OiAtMjA1LjQ5NzM5NTkwOTU4NTMyLFxyXG4gICAgICAgICAgICB5OiA1MC4zMTQ3Nzk3MDQ4NDg2OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY0MjQ4NDctMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKb2huIEouIFNoaW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA2LFxyXG4gICAgICAgICAgICB4OiAtMTg1LjM3NDQ2MzU1NzEwMzg0LFxyXG4gICAgICAgICAgICB5OiAtMy4yODcyMDI3MTA2MjM1ODk1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTcxMzkxMS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0pvaG4gVy4gQmVhcmRzbGV5JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTEwLFxyXG4gICAgICAgICAgICB4OiAtMzMuODE0NzU5ODg2MzgyMDIsXHJcbiAgICAgICAgICAgIHk6IDI2Mi44ODI2NzIxMTExMzcyNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY2OTAzODctMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKb2huIFppbW1lcm1hbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE2LFxyXG4gICAgICAgICAgICB4OiAtMTAzLjg2NDM2NDI4NTAxLFxyXG4gICAgICAgICAgICB5OiAyODcuMDMyNDE1MjA3NzAzNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYyOTU1MzAtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKb25hdGhhbiBCcmFkc2hhdycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDcsXHJcbiAgICAgICAgICAgIHg6IC0yMTEuODcxNDI2MDkxMDQ3OCxcclxuICAgICAgICAgICAgeTogLTIyNC41MDkwNDc4NzQ0NTEyM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY5NjQzNjMtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKb3NlcGggQ2hhcmxlcyBIZXVpbCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXHJcbiAgICAgICAgICAgIHg6IDE1Ny44OTQ5MDk2MDk3NTQyOCxcclxuICAgICAgICAgICAgeTogLTEyNi40NDc4MTgzMTk3NTA2NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4MDQzMzAtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKb3NlcGggSGFyYicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE2LFxyXG4gICAgICAgICAgICB4OiA2MS4xMjY2NDgyMjQ1ODU2NixcclxuICAgICAgICAgICAgeTogLTI2OC4xOTA4ODE2NjExODk5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzE1NDQ3Ny0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0pvc2h1YSBBLiBTdHJpY2tvbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMxLFxyXG4gICAgICAgICAgICB4OiAxNDMuNjA3NzI3NjQ1OTk5LFxyXG4gICAgICAgICAgICB5OiAtMjgxLjY2OTM2OTI2MTE0MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY2NjU2NDgtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLYXJlbiBCcm9kZXJzZW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyLFxyXG4gICAgICAgICAgICB4OiAtNTIuODg3NzYxNjE3NDA2NzQ2LFxyXG4gICAgICAgICAgICB5OiAtMTM1LjI1MzI0NjAxMjEyNzQ4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjkxNDE4Mi0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0thdHN1dG9zaGkgVGFrZWRhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTIsXHJcbiAgICAgICAgICAgIHg6IC0zMDEuODk0MzM0ODc2OTExODQsXHJcbiAgICAgICAgICAgIHk6IC03MC40MzMyNDY1MDgwODkwNlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU5MjUyMjQtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLYXp1a2kgS29iYXlhc2hpJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjIsXHJcbiAgICAgICAgICAgIHg6IC00MS45MDA2NzY5MTgwOTY0MTYsXHJcbiAgICAgICAgICAgIHk6IDcuMzAxMzU4NTk2NjIyOTEyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzA2MTAxNC00JyxcclxuICAgICAgICAgICAgbmFtZTogJ0thenVzaGlnZSBVZWRhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOCxcclxuICAgICAgICAgICAgeDogLTM3LjY2NDk2MzYzNDQ4MzIzLFxyXG4gICAgICAgICAgICB5OiA1OS42MjQ3NTU2NTczODI4NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQzNTY0NTUtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLZWlzaGkgU2FpdG8nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA2MCxcclxuICAgICAgICAgICAgeDogMTAuMjE5MTQwNjMzOTEwMDg1LFxyXG4gICAgICAgICAgICB5OiAxMTQuNjA2MTEwMDg0NjA1NjdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MTc1NzUyLTknLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2VpdGggQS4gRnJpZWRtYW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1NixcclxuICAgICAgICAgICAgeDogLTcyLjc2NDc4Mzk5NDMyNjkyLFxyXG4gICAgICAgICAgICB5OiAxNTcuOTYyODAyNDYwMTQ3MzRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICdEMjYzOTg3LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2VpdGggTC4gTWlsbGltYW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNDgsXHJcbiAgICAgICAgICAgIHg6IDI4NS4yNzA1NTE0NjMwOTgwNixcclxuICAgICAgICAgICAgeTogLTQuMTYxNjA3Njk5OTUyODQ1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnRDMwNDIzNC0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0tlaXRoIFJhdGNsaWZmJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNzYsXHJcbiAgICAgICAgICAgIHg6IDI5OC4yNTQzODY1NTY0NDU4NyxcclxuICAgICAgICAgICAgeTogLTYyLjAzNzczMzk5MDczMDYxNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4MzgzOTctMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLZW5nbyBBa2ltb3RvJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzAxLFxyXG4gICAgICAgICAgICB4OiAyMzMuMzA1OTEwODkyODQxMjQsXHJcbiAgICAgICAgICAgIHk6IDExOC4xMjg2NTgxNDc0NDI4M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQwNzIyMzYtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLZW5qaSBOb211cmEnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3MixcclxuICAgICAgICAgICAgeDogLTE4LjQ5MTU3MzYyMDc0ODQ1NCxcclxuICAgICAgICAgICAgeTogMTY0LjMzMTk3NDM4ODIwODVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0ODkwNjExLTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2VubmV0aCBILiBNb2xsZW5hdWVyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTM5LFxyXG4gICAgICAgICAgICB4OiAxNzEuMTIxMzkwOTkxMjUyODQsXHJcbiAgICAgICAgICAgIHk6IDE0OS44Mjc4OTMyMTgzMjA3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTQwOTQ5OC00JyxcclxuICAgICAgICAgICAgbmFtZTogJ0tlbm5ldGggUy4gV2FsZXMnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzNCxcclxuICAgICAgICAgICAgeDogMTUxLjYxNTA2NTAwNDg2MzY1LFxyXG4gICAgICAgICAgICB5OiAtNjguMTcxNTMwMTA5Njk3NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1NTgzNTEtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLZXJzdGluIFJlYnJpbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDgsXHJcbiAgICAgICAgICAgIHg6IC0yMTMuOTk4MzI2NDgyMTk4OTMsXHJcbiAgICAgICAgICAgIHk6IC0xOC4yMTAyMDM1MDk3MDY5NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzcwODMwNzUtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLZXZpbiBSLiBEb2xsJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzMsXHJcbiAgICAgICAgICAgIHg6IDE5NS4xNzE2MTg2MTI5NjQxMixcclxuICAgICAgICAgICAgeTogMjEuODI3NTcxOTA3MTgyODZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODI2NzQ1LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2V2aW4gUi4gTml4JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNSxcclxuICAgICAgICAgICAgeDogLTExMy41MjMxODM0OTY3OTc4NixcclxuICAgICAgICAgICAgeTogLTE4Ni42NTg1MDQ2NDA5Nzc2N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQ2ODI1OTYtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLZXZpbiBXLiBTbWl0aCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI0NSxcclxuICAgICAgICAgICAgeDogMTQyLjAxNTE3MDUyNjE5MjI0LFxyXG4gICAgICAgICAgICB5OiAzNS4zMTcxMzAzMjA0MDAxOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYzMzYxMzctMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLaW5nLUh3YSBMZWUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3LFxyXG4gICAgICAgICAgICB4OiAyOS4xMzY0MTY4MjEzODk1NDUsXHJcbiAgICAgICAgICAgIHk6IC0xNTIuODM4OTIyNzkxMDAxMzVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTUzNTYzLTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2xhdXMgVy4gU3Ryb2JlbCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXHJcbiAgICAgICAgICAgIHg6IDE4LjUwMjI2OTgwMjg5NjE4NyxcclxuICAgICAgICAgICAgeTogLTI3Ny44NDIyOTExOTE2NDQ4NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU3MTU2NzUtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLb3JleSBLbGluZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDY3LFxyXG4gICAgICAgICAgICB4OiAxMDcuMzkyODA4NjQwNDY1NixcclxuICAgICAgICAgICAgeTogMC4xMjQ5NzE2ODM5MTIwODg4MVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3MTgzNjEtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLcmlzaG5hIE1hbmdpYXB1ZGknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyLFxyXG4gICAgICAgICAgICB4OiAtMjIxLjQyMzUxMTgxMDk1Mzc2LFxyXG4gICAgICAgICAgICB5OiAyMTAuNjg0NjIxMDc2MjE2OTZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTc3NzI2LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnS3VhbmctWWFuZyBIdWFuZycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDcsXHJcbiAgICAgICAgICAgIHg6IC0xMTAuOTAyOTM0NzQ0MTk2MzQsXHJcbiAgICAgICAgICAgIHk6IC0xNDQuMTEwNzQ3NzI3NDAxOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzcxNTk3NTAtNScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdMZWUgQW5uIE9sc29uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTAyLFxyXG4gICAgICAgICAgICB4OiAtMTIuMjkxMDQ1NzI5ODE2NTkzLFxyXG4gICAgICAgICAgICB5OiAyODQuMzIyODI0MDI3NjcxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjcxODM2MS00JyxcclxuICAgICAgICAgICAgbmFtZTogJ0xlcm95IFIuIEthcmdlJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNixcclxuICAgICAgICAgICAgeDogLTI0Ni41Njg5ODQ5NTkwMTgyOCxcclxuICAgICAgICAgICAgeTogMTc2Ljg2NDMwODI0ODkxMjhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTUxMjc2LTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTHVpcyBKLiBNYWxhdmUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyNSxcclxuICAgICAgICAgICAgeDogLTE1MC40Njk1NTE1ODQxMjEwNixcclxuICAgICAgICAgICAgeTogMTUuNDY2NjgxMzU1NTk0MDQzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjA0ODExMC0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0x5biBNLiBJcnZpbmcnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1MCxcclxuICAgICAgICAgICAgeDogMTg1Ljg5MzY4MjU1MjAzNjM4LFxyXG4gICAgICAgICAgICB5OiAyMTEuNzM0OTczMTY4Mzc0NDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzE4MzYxLTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTHlubmUgTS4gTXVyYWNoJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNixcclxuICAgICAgICAgICAgeDogLTE4NC41OTczMTYxMjU5OTM3OSxcclxuICAgICAgICAgICAgeTogMTY4Ljk1NDU5MDMwMTI4NDA0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTk0ODc4OS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ01hZ251cyBMYXJzc29uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzIsXHJcbiAgICAgICAgICAgIHg6IDI4Mi4zNDk4NzQzNDkyMzA0LFxyXG4gICAgICAgICAgICB5OiAtMTA1Ljg1MzkwNTc2ODM5NDA5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjgyOTY1NS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ01hZ251cyBWZWpsc3RydXAnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1LFxyXG4gICAgICAgICAgICB4OiA4NC41NzY4MzQyMDUwNTg0OSxcclxuICAgICAgICAgICAgeTogLTIxMS42MDU0NjU5MTEyOTEyMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3MTE1NjUtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNYXJjIENhbHRhYmlhbm8nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxOCxcclxuICAgICAgICAgICAgeDogLTIxLjU3MjUwMzU0NzAzMTc2NSxcclxuICAgICAgICAgICAgeTogLTMwMy4yNTAwMTIwNDgwMDg4NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzcwNzg1MDMtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNYXJpYW5uZSBNYWx2ZW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyNCxcclxuICAgICAgICAgICAgeDogMzkuMzY0Nzg5MTIxODM5ODIsXHJcbiAgICAgICAgICAgIHk6IDIwNC41MDc2MTA4ODIzNzk2MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYyMjMyMDUtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNYXJrIEUuIENyb3ZlbGxhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTEsXHJcbiAgICAgICAgICAgIHg6IC0yMzkuMTMwNjczMzkyMDc2LFxyXG4gICAgICAgICAgICB5OiAxNTkuNTM4NjI2ODEyMDcwM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY2MjE4MzQtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNYXJrIFJhbmRsZSBCb3lucycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDksXHJcbiAgICAgICAgICAgIHg6IDkyLjk1MTU5OTEzNDA4NDQsXHJcbiAgICAgICAgICAgIHk6IDEzOS43MjQ5MTY5OTQxODEyOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU1MzQxMzItMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNYXJrIFMuIFZyZWVrZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDk5LFxyXG4gICAgICAgICAgICB4OiAtMTI2LjE3NDE0MjQwODI1MjAyLFxyXG4gICAgICAgICAgICB5OiAxODIuMTQ4ODY4MDE3NDg1MzRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0ODkyMjQ0LTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWFyayBTLiBaZWluZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMTIsXHJcbiAgICAgICAgICAgIHg6IDg3Ljg2NTUxMjMzOTQ0NzkyLFxyXG4gICAgICAgICAgICB5OiAtOTMuNjE0MzU5NDk5MDY4NjZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODI5NjU1LTYnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWFydGluIFN1c3NlcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDgsXHJcbiAgICAgICAgICAgIHg6IDg2LjUxNjY0NDk3MTYzMTEsXHJcbiAgICAgICAgICAgIHk6IC0xNzYuMzY4MDU2ODYyNDg0MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQ0ODY3MjAtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNYXNhaGlybyBIaXJhbm8nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA2NCxcclxuICAgICAgICAgICAgeDogLTI2LjQ3Mzk0MTAyMTMyODgzNCxcclxuICAgICAgICAgICAgeTogNTAuNTgzODc3NTAxMjg3NDc1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTYyMjY1My0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ01hc2FoaXJvIE9yaXRhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTMsXHJcbiAgICAgICAgICAgIHg6IC00My4zMTE5NDM1MTI0Njk1MDQsXHJcbiAgICAgICAgICAgIHk6IDg4LjA1ODUyNDAxMDkyMzYyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjA4MDk5OC0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ01hc2FvIElzb211cmEnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxyXG4gICAgICAgICAgICB4OiAtMjc3LjE2NzM5Njg3MzM0MTksXHJcbiAgICAgICAgICAgIHk6IC02OS4xNjMxMzU5MDM1ODc2OVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQ5MDI2NzEtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNYXNhc2hpIEthd2FzYWtpJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDQsXHJcbiAgICAgICAgICAgIHg6IDI1LjQ5OTgzNDk4MTc1MTUwNSxcclxuICAgICAgICAgICAgeTogMTIuNDU4ODM1OTYyOTA3NzY4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTExNzgzOC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ01hdHRoZXcgQS4gUGFsbWVyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjEzLFxyXG4gICAgICAgICAgICB4OiAxMTEuODQ0NDA3MTk1MTI4NzEsXHJcbiAgICAgICAgICAgIHk6IDE3LjU1MzUyMjQzODU0NzMxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU3NzcyNi0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ01hdHRoZXcgUy4gTWFsZGVuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTUsXHJcbiAgICAgICAgICAgIHg6IC04OS43NzI4MTcxNTc2MjExMixcclxuICAgICAgICAgICAgeTogLTIxMi41MjAwMDk5NDgwNzQ1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjY2NTY1NS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ01pY2hhZWwgQS4gTXllcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXHJcbiAgICAgICAgICAgIHg6IC0yMjIuMTU0ODk4NDI2NjI3OCxcclxuICAgICAgICAgICAgeTogLTkxLjg4MzcwNzc5OTg3MTI1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTYzMjQzMi00JyxcclxuICAgICAgICAgICAgbmFtZTogJ01pY2hhZWwgRS4gU2V0c2VyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDYsXHJcbiAgICAgICAgICAgIHg6IDIzNi4xNDUzNDg2OTA1OTE1LFxyXG4gICAgICAgICAgICB5OiAtMjkuNTMzMDQzNDM3NDE2Njc2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTMwNjYyMy0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ01pY2hhZWwgRi4gVG9tYXNjbycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDg5LFxyXG4gICAgICAgICAgICB4OiAtMTM2LjM1MDM0MDIyMzAxOTI2LFxyXG4gICAgICAgICAgICB5OiAxNjYuODczNzY3ODYwOTUzNjJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NjA2NzQ0LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWljaGFlbCBHLiBNaWt1cmFrJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTQsXHJcbiAgICAgICAgICAgIHg6IDE0My4wNjEwNzEyMzgyODc4NyxcclxuICAgICAgICAgICAgeTogMjAzLjY4NjUwMDMwODY0Njg2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjI2NDA4Ny0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ01pY2hhZWwgUC4gV2hpdG1hbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEzNCxcclxuICAgICAgICAgICAgeDogODguMzEzMzA3OTA5ODg4MjIsXHJcbiAgICAgICAgICAgIHk6IDIzNy4xMDQ3NjUyODA1ODQyMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY2NjU2NDgtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNaWNoYWVsIFRzdW5naHNpIFl1JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMixcclxuICAgICAgICAgICAgeDogNy4zMDQ1NTk3NDExODgxMDA1LFxyXG4gICAgICAgICAgICB5OiAtMTAxLjYyODkzMzQ2OTg2MzIzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjA4MTUxOC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ01pY2hlbCBLLiBCb3dtYW4tQW11YWgnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1NixcclxuICAgICAgICAgICAgeDogMTUzLjU1ODA1NzAzMjkyNjc0LFxyXG4gICAgICAgICAgICB5OiAyNzguNzU4NDE2MzU5MDQwM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQyMjQ3MjUtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNaWNoaW8gS2Fkb3RhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTczLFxyXG4gICAgICAgICAgICB4OiA3MC4yNTI0OTExMDA2NzAxMSxcclxuICAgICAgICAgICAgeTogMjYwLjE3NjMwNjg0NTAwNzg0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjg1MDk0OS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ01pa2UgTXllcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXHJcbiAgICAgICAgICAgIHg6IDIwMC45ODQxMDAyNzI5MDY3NyxcclxuICAgICAgICAgICAgeTogLTE2NS4xODAwOTk0MTU5MTg3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTI2MTAzNy0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ01pbiBaaHUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMTksXHJcbiAgICAgICAgICAgIHg6IDE4Ny4yMTc4Nzk5MDUxOTQ0NSxcclxuICAgICAgICAgICAgeTogMTE5LjE4MDUyMzIyMjQxMTI0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjczMjEwMC00JyxcclxuICAgICAgICAgICAgbmFtZTogJ01pbmd0ZSBKLiBDaGVuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcclxuICAgICAgICAgICAgeDogLTc0Ljg5Mzk2ODIxMTM1MDU0LFxyXG4gICAgICAgICAgICB5OiAtMTQ0LjQ4MTUxMDExODQwOTg2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTE3NjUwMi0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ01pdGNoZWxsIEouIFBhbG1lcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQwLFxyXG4gICAgICAgICAgICB4OiAzMTUuNzkwOTI2MjEzMzc1MzcsXHJcbiAgICAgICAgICAgIHk6IC01OC43OTY2NjkzOTQxOTc2M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzczODUyMjQtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNb3RvaGlrbyBZb3NoaWRhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNSxcclxuICAgICAgICAgICAgeDogLTIzMS4xODc2ODMyNDg0NzQ0MyxcclxuICAgICAgICAgICAgeTogLTExNi40NTEwNzc1Njc5MTI3MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU5MTgxNTktMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNdW5kaSBGb211a29uZycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEyLFxyXG4gICAgICAgICAgICB4OiAtMjIxLjYyNTI2ODE1MzUzMTg2LFxyXG4gICAgICAgICAgICB5OiAtMjAxLjc1MzE3Mzg4MjY1NDc1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzYzMjk4NS0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ05hbmN5IFRheWxvcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUsXHJcbiAgICAgICAgICAgIHg6IDUwLjAxNTg4NjQ5Mjk1Njg0NSxcclxuICAgICAgICAgICAgeTogMjI3LjI3NTk1NDA3ODA0OTdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3NDY4MzA0LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTm9idXl1a2kgS2FqaScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE2LFxyXG4gICAgICAgICAgICB4OiA0MS44MjIzNzYwODIxNjE2OTYsXHJcbiAgICAgICAgICAgIHk6IDUyLjUxNDI0Njc1Mjg1NDI1NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzcyMDU3MTYtNScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdOb3JpaGl0byBTb25lJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTksXHJcbiAgICAgICAgICAgIHg6IDI2OS4xMTUwNjU1NjczMTQsXHJcbiAgICAgICAgICAgIHk6IDcwLjAxMjI0ODM2MjQ5MzU4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTM1ODUxNC0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ1BhdWwgTS4gTWVhZG93cycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDcwLFxyXG4gICAgICAgICAgICB4OiAtMTcxLjI2OTc1NTMxNjM4NDcsXHJcbiAgICAgICAgICAgIHk6IDI1Ni41NDc5NDM5MDg4NzE3M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1NTgzNTEtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdQYXVsIFYuIEdvb2RlJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTU0LFxyXG4gICAgICAgICAgICB4OiAtMjMwLjE2MTE0MTk2MzkwOTM2LFxyXG4gICAgICAgICAgICB5OiAtMTMuNDEwMzE0ODQ1MDAxOTEzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjcxMTU2NS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1Bhdml0cmEgU3VicmFtYW5pYW0nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMCxcclxuICAgICAgICAgICAgeDogLTYuMzcyNzQ4MzQ3OTQ3MzM4LFxyXG4gICAgICAgICAgICB5OiAtMjk3Ljk2NzAyNjQ5MDkwNjhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICdENDIzNzYxLTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUGV0ZXIgSG9uZycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI1LFxyXG4gICAgICAgICAgICB4OiAtMjA3LjAyOTEzNDQ0NDU4NzU2LFxyXG4gICAgICAgICAgICB5OiAxMTMuMjA0NDQ3NzIwNzc0NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYxNTI5ODctMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdQZXRlciBNYXJkaWxvdmljaCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDExMCxcclxuICAgICAgICAgICAgeDogLTExMy43MDU0MTQ2Mjc2MzQxNCxcclxuICAgICAgICAgICAgeTogLTcxLjYzODY2ODc4NDQ4OTI4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTg3MzA5Ni0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1BldGVyIFMuIExpbScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE5LFxyXG4gICAgICAgICAgICB4OiAtNDEuNDk3MTU3NTk5NDc3OSxcclxuICAgICAgICAgICAgeTogLTIyOS44NjM0NzM4NDg2MzA4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjczMjExMS00JyxcclxuICAgICAgICAgICAgbmFtZTogJ1BldGVyIFNpYW0gU3kgTGltIElJSScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXHJcbiAgICAgICAgICAgIHg6IC0xMTkuNjg3NzYwODcxODEyOTEsXHJcbiAgICAgICAgICAgIHk6IC0yNjQuNzQ0MTE1MzE0OTI0MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4NTA4OTUtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdQZXRlciBTaWFtIFN5IExpbSwgSUlJJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcclxuICAgICAgICAgICAgeDogLTEzNy41MTMyNzg2MTg2ODk5MixcclxuICAgICAgICAgICAgeTogLTI1My4wNTAxNTI2MzQxNjAxM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzcxNTk3NTAtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdQaGlsaXAgUm95JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDUsXHJcbiAgICAgICAgICAgIHg6IC01NS45MTUzMzE4MzczMzQ1ODQsXHJcbiAgICAgICAgICAgIHk6IDI2NS40NTI3Mzk5ODU5MDU5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjEwMzAzMy03JyxcclxuICAgICAgICAgICAgbmFtZTogJ1BoaWxsaXAgSm9obiBQbGFudGUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3NixcclxuICAgICAgICAgICAgeDogLTg5LjU2MTcyNjM0MjczOTM4LFxyXG4gICAgICAgICAgICB5OiAxMjguNDkzNTk5NTQwMjA5MzdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1OTc4ODI5LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUGktWXUgQ2h1bmcnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNSxcclxuICAgICAgICAgICAgeDogNzkuMDMzMzAzMDk3NjgzMzMsXHJcbiAgICAgICAgICAgIHk6IC0xNjYuODk2MjAzMDE0MDI2OTVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MDkyMDgzLTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnUHJhc2hhbnQgQ2hhdHRlcmplZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEyLFxyXG4gICAgICAgICAgICB4OiAtMTI3Ljk4MTY2MjQ4OTc4MDQ1LFxyXG4gICAgICAgICAgICB5OiAtMjI2LjA5NTkwMzIyOTgzMDY3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzM0MDQxMS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1JhY2hhZWwgTC4gQ29vaycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXHJcbiAgICAgICAgICAgIHg6IDE0NS41ODE2NDM0OTUzNjg1LFxyXG4gICAgICAgICAgICB5OiAtMTg1LjkxMTUyMjc4NDgyNTFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0ODcyNjAzLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUmFscGggU3RlYXJucycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDgyLFxyXG4gICAgICAgICAgICB4OiAtMTcuNjM4MjYxMTM5NzQwMDc3LFxyXG4gICAgICAgICAgICB5OiAzMTEuODc0NDAwOTYwMTYyMzVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODM2NTQwLTYnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUmFuZHkgSG9mZm1hbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDY2LFxyXG4gICAgICAgICAgICB4OiAtOTYuNjc5MTUwNjIyNzE1MjMsXHJcbiAgICAgICAgICAgIHk6IC0xOC44NjMyNjc2NDIzMzgzNTdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0Nzk4NTk0LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUmljaGFyZCBBLiBIaWxsc3RlYWQnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1NixcclxuICAgICAgICAgICAgeDogMjIwLjk0MDQzMDQzMjU4ODcsXHJcbiAgICAgICAgICAgIHk6IDE1NS45MjEyNDkzMjE3MTcxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTA5NzEyMi0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ1JpY2hhcmQgRS4gUHVydmlzJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjIsXHJcbiAgICAgICAgICAgIHg6IC0yMzEuNjIyMTE3MzQ4NTMxMixcclxuICAgICAgICAgICAgeTogNTguNTMyNzg4NTkzNDA2NDY1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjI2ODgwMy0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ1JpY2hhcmQgR29ybWFuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTAsXHJcbiAgICAgICAgICAgIHg6IDc2LjcxNjY3NDM5MjI4MjAyLFxyXG4gICAgICAgICAgICB5OiAtMjQ3LjQwNzU2ODQ3NTQzMzY2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTI3MTU0My0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1JpY2hhcmQgTC4gR3JhbnQnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMixcclxuICAgICAgICAgICAgeDogMTA4LjM3NzkwMjYxNjM4MTU2LFxyXG4gICAgICAgICAgICB5OiAtMTA5LjUzNDI5Nzc0MDExMjA1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjA5MjA4My0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1JvYmVydCBBLiBCcm9kZXJzZW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMSxcclxuICAgICAgICAgICAgeDogLTExNi43ODY3NzMyOTM4MDMzMixcclxuICAgICAgICAgICAgeTogLTIxMS43NDMxMjE3Mjc1NDg5OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU4NzMwOTYtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSb2JlcnQgQnJvZGVyc29uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcclxuICAgICAgICAgICAgeDogMzIuNDcwNTY0MzYyNzEwMzM0LFxyXG4gICAgICAgICAgICB5OiAtMjEyLjM1NjUwMzc2MTY5MDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1OTYzOTUzLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUm9iZXJ0IENyYW0nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxyXG4gICAgICAgICAgICB4OiAzOS43MzE2NTYyMjgwMzYwNDQsXHJcbiAgICAgICAgICAgIHk6IC0xNTkuNzAxMTc0MTk2NjI4NTNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0MzYyMzg3LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUm95IENsYXJrJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjMsXHJcbiAgICAgICAgICAgIHg6IC0xNDMuMzgwNjU0Njc4MDU1ODMsXHJcbiAgICAgICAgICAgIHk6IC04My4xODY0NjkzMjMzMjg5NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU0MTc3NzAtOCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSeW8gSGF5YXNoaScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDcxLFxyXG4gICAgICAgICAgICB4OiAxMDkuNTY5MDAyNzAxODEzMjIsXHJcbiAgICAgICAgICAgIHk6IDk0LjI2OTA3NzYxOTMzMzlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MDgxODc1LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnU2Fuam95IENoYXR0ZXJqZWUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyLFxyXG4gICAgICAgICAgICB4OiAtMTY4LjU1MzUxNzE5MzczMjc0LFxyXG4gICAgICAgICAgICB5OiAtNTUuMDAzOTEzMjc3MTAwNzJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NDE2MjU1LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU2NvdHQgQS4gQmVyZ2VtYW5uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTA2LFxyXG4gICAgICAgICAgICB4OiAyMzYuOTg0MzY1ODQzNzgzMSxcclxuICAgICAgICAgICAgeTogLTE1NC41Mzg1MzI4OTM2MzE0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjcyNDM5OS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ1NoYW5rYXIgUy4gTmF0aGFuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcclxuICAgICAgICAgICAgeDogOC4wMTc2NTEzMjY3MTM4MDMsXHJcbiAgICAgICAgICAgIHk6IC0xMzIuNjc0MzkyMDU2MzI2NjRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODA0MzMwLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU2hhbm5vbiBKb25lcycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUsXHJcbiAgICAgICAgICAgIHg6IDcxLjEzMjA2OTgxODQ0NjMxLFxyXG4gICAgICAgICAgICB5OiAtMjU4LjQ5OTM0MjM5OTQxMzc2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjg4NzczNi00JyxcclxuICAgICAgICAgICAgbmFtZTogJ1NoYW50aGkgR2FuZXNhbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQsXHJcbiAgICAgICAgICAgIHg6IC0zNi45OTQ4ODIxMDc1NjQwNzQsXHJcbiAgICAgICAgICAgIHk6IDE3Ni40NDM1MjEwMzk1MzE2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjE4MzU4OS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1NoaW4gS2ltJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDcsXHJcbiAgICAgICAgICAgIHg6IC0yODcuNjcyNjY0NjY2Nzk4LFxyXG4gICAgICAgICAgICB5OiA0NS44MTI2MTE2NDEzOTA2NzRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NjU0MDMyLTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU29uZ3hpYW5nIFdlaScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDcsXHJcbiAgICAgICAgICAgIHg6IDEzMi4zMTk5MTcxMDQ0MDgyLFxyXG4gICAgICAgICAgICB5OiA4Ni4zMzM2OTIwMTgxMTg3NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3ODM1MjQtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTdGVwaGVuIEMuIEFuZGVyc29uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcclxuICAgICAgICAgICAgeDogNjIuNjIwMDcyMDEzOTUwNSxcclxuICAgICAgICAgICAgeTogMzAyLjQ5NjE4ODU3MDgzMDI3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTc3NDM1Ny0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1N0ZXZlbiBNLiBIb2ZmYmVyZycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEwNixcclxuICAgICAgICAgICAgeDogLTI5OC4xNDk4MTU3ODkzOTk0NCxcclxuICAgICAgICAgICAgeTogODguNTY4MDM1MTA0NTAzOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU1OTQxNjktMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTdGV2ZW4gUC4gSG90ZWxsaW5nJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzA2LFxyXG4gICAgICAgICAgICB4OiAxNzguMzEzNTYyMjQ0MjA3NTYsXHJcbiAgICAgICAgICAgIHk6IC0yNTUuNDMwNDI1MDc0ODA1NzhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTI2MzM1LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3VzYW4gTS4gVHJleXonLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNSxcclxuICAgICAgICAgICAgeDogLTI3OS4yMzM4NDcxMzA0MTgzLFxyXG4gICAgICAgICAgICB5OiAxMzkuOTkyNTczMzY3Mjc5NDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NjM5MjQ2LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVGF0c3V5YSBIb25kYScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEwOSxcclxuICAgICAgICAgICAgeDogMjUwLjA2MDIwNzcyMDE2ODQsXHJcbiAgICAgICAgICAgIHk6IDY2LjMzNDAxMzIyMjY4NjM3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTM0NTYzOS02JyxcclxuICAgICAgICAgICAgbmFtZTogJ1RhdHN1eWEgSXdhc2FraScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDExNixcclxuICAgICAgICAgICAgeDogODYuMzMzNjEzNDQ3MTc3MyxcclxuICAgICAgICAgICAgeTogMTU3LjgyNTkzNDYyMDYwNzQzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjMyNDU2OC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1RoYW5oIERpZWMnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxyXG4gICAgICAgICAgICB4OiAtNzguMDMxNDc0NjkxMjUxODQsXHJcbiAgICAgICAgICAgIHk6IC0yNzIuNTg4NjYwNjg2MTcxOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU3MTU0NTAtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUaG9tYXMgTS4gUm90aHdlaW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMyxcclxuICAgICAgICAgICAgeDogLTE5LjE2NTEwMTAxMzI0MTQ5MyxcclxuICAgICAgICAgICAgeTogLTIwOC4xODA0NjQwODQwNjE5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnUkUzOTg0MS00JyxcclxuICAgICAgICAgICAgbmFtZTogJ1RvZGQgUGhpbGxpcCBPbWFpdHMnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3LFxyXG4gICAgICAgICAgICB4OiAxMjkuOTkzMDY4NTQ2MjUwMDcsXHJcbiAgICAgICAgICAgIHk6IC0yMi4wNDk5MDE2MTUwMzg0MDhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODUwOTQ5LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVG9tIEFic2hpcmUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxyXG4gICAgICAgICAgICB4OiAxNDAuMjY1NjY5MDI3MTUyMjgsXHJcbiAgICAgICAgICAgIHk6IC0xNTMuMzkxNzI5NDg0Mzk1OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzcwNjEwMTQtNicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUb3NoaW8gS2FtaXlhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjUsXHJcbiAgICAgICAgICAgIHg6IDkuMTI2MjcxMjc2MjU0Mzc3LFxyXG4gICAgICAgICAgICB5OiAxMDEuODIyOTg2MzA1NTYzMjZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzE4MzYxLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVmlqYXkgUi4gQmFzYW5pJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOSxcclxuICAgICAgICAgICAgeDogLTIwMS4zODIyNzE3MzIwNTAyNyxcclxuICAgICAgICAgICAgeTogMjA4Ljc0MzI3MDQ5OTI2MzI4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjcxODM2MS01JyxcclxuICAgICAgICAgICAgbmFtZTogJ1ZpdGFseSBTLiBSZXZzaW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMyxcclxuICAgICAgICAgICAgeDogLTE5OC43MDQ3MzA3ODAyNDk4MyxcclxuICAgICAgICAgICAgeTogMTUyLjQwNTIyMTE2NjU5NDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2OTc4OTIxLTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnV2lsbGlhbSBCLiBXZWlzZW5idXJnaCwgSUknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNTIsXHJcbiAgICAgICAgICAgIHg6IDI0OC4yNDM5MzkwNjI5MzczMyxcclxuICAgICAgICAgICAgeTogLTkwLjI5MzQyNTI0MzY5MzI0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTI1Nzk3MS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ1dpbGxpYW0gUC4gVmFuIEFudHdlcnAnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA2OSxcclxuICAgICAgICAgICAgeDogLTI0My41MjA5OTE5MTY3NzksXHJcbiAgICAgICAgICAgIHk6IDIzLjQxNzY3OTk3NzkxMTMyN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4Mjk2NTUtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdYaWFvZmVpIEh1YW5nJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNSxcclxuICAgICAgICAgICAgeDogODkuOTg4NzQxNjEwMzg1NixcclxuICAgICAgICAgICAgeTogLTE4Ny43OTQxMzk5ODE2MzQ4M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUyODM0NTItMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdZaS1DaGkgU2hpaCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMzLFxyXG4gICAgICAgICAgICB4OiAtMzIzLjcxMzU5NjQxODcxMTYzLFxyXG4gICAgICAgICAgICB5OiAyMy45MDg5MzY1ODY0OTQwODZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1OTAxODk2LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnWW9yYW0gR2FsJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNzYsXHJcbiAgICAgICAgICAgIHg6IC0xMDcuMjMyMjU1MTA2MjA0ODksXHJcbiAgICAgICAgICAgIHk6IDEyNC43MzU0MTczOTAyNjExMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQ1NzM0NzItMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdZb3NoaWhpcm8gSXRvJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTg5LFxyXG4gICAgICAgICAgICB4OiAxMTguMjAyNTA5MzgzODM4OTIsXHJcbiAgICAgICAgICAgIHk6IDI4Ny45NjE1MzI2NDM0MjgzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTg1NTk1Ny0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1poZW5nIFl1YW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1OCxcclxuICAgICAgICAgICAgeDogMTM4LjA5MjA2OTUyMTczMTksXHJcbiAgICAgICAgICAgIHk6IDEyNC4wNjQ0MDExNzk3NjkzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX1o1OWFVQkd0WjlQNVF6ZEZpS21aJyxcclxuICAgICAgICAgICAgbmFtZTogJ0FibGFpc2UgTGltaXRlZCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIsXHJcbiAgICAgICAgICAgIHg6IC0xOTAuNDgyMTEzMDAxMDc0MixcclxuICAgICAgICAgICAgeTogLTIzNi41MzYxOTY5ODUzOTQ4N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ180ek8yQmMwOHg1NlhqRHE1VGVCcCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBY2NlbnR1cmUgTExQJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjEwLFxyXG4gICAgICAgICAgICB4OiAxNzIuODY2MDIzMDA4MzM5NTcsXHJcbiAgICAgICAgICAgIHk6IDI1My43MDMzMDgxNTQxNjU4NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19id3E4M2piY2NLcUY0akpyUGNhUicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBZHZhbmNlZCBCaW9uaWNzIEFHJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNjMzLFxyXG4gICAgICAgICAgICB4OiAtMTc2LjkxNDY4NDcyOTgxNTU1LFxyXG4gICAgICAgICAgICB5OiAyMzMuNjMzODgzNTI1OTYxOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19JRFViUzA5WlIwSmhKOGpGRXB0VCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBcHBsZSBJbmMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjEwMjMsXHJcbiAgICAgICAgICAgIHg6IDE1MS42ODI0NjY0MTU3ODg2NyxcclxuICAgICAgICAgICAgeTogLTIyMi4xMjQ4NzQ4ODE0NDg5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX0VoWUZQSUpFbVlRWVJvWXZzbnB5JyxcclxuICAgICAgICAgICAgbmFtZTogJ0Nhbm9uIEthYnVzaGlraSBLYWlzaGEnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3NDU5NixcclxuICAgICAgICAgICAgeDogNDkuNDgyMjM5MjA1NzMyOTYsXHJcbiAgICAgICAgICAgIHk6IDEzNC4wOTIyODg3MzExNTU5MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19JbWVnOVc2UDFURTZJMlF1dFM0eScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDYXNpbyBDb21wdXRlciBDby4sIEx0ZC4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0NTIxLFxyXG4gICAgICAgICAgICB4OiAtMTc5LjgxNzU5MzQxMjA1MTUsXHJcbiAgICAgICAgICAgIHk6IC0xNDIuNzE4Mjg4NTI5MjEwNDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfOGNzTWd0Z25OMG1SRVpwTlAxSmknLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ2VyZWJyYWwgVmFzY3VsYXIgQXBwbGljYXRpb25zLCBJbmMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNCxcclxuICAgICAgICAgICAgeDogMjY4LjgwMDQ1NDE0NDQzODcsXHJcbiAgICAgICAgICAgIHk6IDE2NC41MjM2OTQ3ODMxNTY4M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ18wZVRyM1hJQmpBS3BYa0M2ODIzcicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDZXJtZXQsIEluYy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3LFxyXG4gICAgICAgICAgICB4OiAtNDguNDAzNzI3Njg5NTUxNTYsXHJcbiAgICAgICAgICAgIHk6IDIwNS40NDAyNTg4MzgyNjA2NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ18xMDdXS05QYnZEREtyWkJsbXc4VScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDb250aWdvIFNvZnR3YXJlLCBJbmMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMixcclxuICAgICAgICAgICAgeDogMjk5LjMxNzQzNTkwOTU5NTMsXHJcbiAgICAgICAgICAgIHk6IDQ4LjAzNDkyNDY5ODAwODMzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX3BwRWxrRXRRdkZ0RzZBNDc1NFVJJyxcclxuICAgICAgICAgICAgbmFtZTogJ0Vhc3RtYW4gS29kYWsgQ29tcGFueScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIxNTM5LFxyXG4gICAgICAgICAgICB4OiAyMTEuMzc1MjU5NDEzNTI3ODYsXHJcbiAgICAgICAgICAgIHk6IDIxNy41ODI4Nzc4NjUzMjEwOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ18walBXTTdZcWh0WG0wbG0zZm0xWScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdFTUMgQ29ycG9yYXRpb24nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0OTc2LFxyXG4gICAgICAgICAgICB4OiAtMTg5LjcwMTU2Mjc0ODM4OTczLFxyXG4gICAgICAgICAgICB5OiAtMTEwLjAxNTU5ODkwNDM3NjI4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX1doMmNuT0l6S2xoemp1cVZtT3FZJyxcclxuICAgICAgICAgICAgbmFtZTogJ0VuZWN0byBBQicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXHJcbiAgICAgICAgICAgIHg6IDI0My42NzY1NDEyMjQ2MjU4LFxyXG4gICAgICAgICAgICB5OiAtMTMxLjIwOTAzMTE4NjYwOTlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfWHU2Z1hTc2x0REJaVEFoTUZCV0QnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRXRoaWNvbiBFbmRvLVN1cmdlciwgSW5jLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXHJcbiAgICAgICAgICAgIHg6IDIyNC43MTI0MzU4MDMxNjQ3NyxcclxuICAgICAgICAgICAgeTogMzkuNjA5ODQyNTI1NDc4NjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nLFxyXG4gICAgICAgICAgICBuYW1lOiAnRXRoaWNvbiBFbmRvLVN1cmdlcnksIEluYy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMTk0LFxyXG4gICAgICAgICAgICB4OiAxNzEuMDc0MzcwMjI0NzY2NCxcclxuICAgICAgICAgICAgeTogLTU1LjAzNjgwNzA5ODk0NjA5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX3ZTNnJjS3ljMnFOM3JGZFgwUDJLJyxcclxuICAgICAgICAgICAgbmFtZTogJ0hld2xldHQtUGFja2FyZCBEZXZlbG9wbWVudCBDb21wYW55LCBMLlAuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzUxMTgsXHJcbiAgICAgICAgICAgIHg6IC05MC4zMTAzOTY4NTI2Njk0LFxyXG4gICAgICAgICAgICB5OiAtNTAuMDUyMTYyODkyOTQ1NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ3Blcl90WDJlMnlWTGd5TmdvYkVweldLVCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdIaWRlbyBPaG5vJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNCxcclxuICAgICAgICAgICAgeDogLTM5LjUzNjEyODQyNzA0NDM2LFxyXG4gICAgICAgICAgICB5OiAtMjAuMjcwMjczMzU0OTc3MjUyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX01LdmJuQ2N5UHVkWGV4VXZzU3dGJyxcclxuICAgICAgICAgICAgbmFtZTogXCJIb2xkZW4ncyBGb3VuZGF0aW9uIFNlZWRzLCBJbmMuXCIsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDgzLFxyXG4gICAgICAgICAgICB4OiAyNDAuMDk5OTA1OTg1MTkwOCxcclxuICAgICAgICAgICAgeTogLTIwNi4wMjYzNzYxNDgwNjEyNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19mQTBhenFvQkdFem9Qb3k4NUp5dicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdJTlRVSVRJVkUgU1VSR0lDQUwgT1BFUkFUSU9OUywgSU5DLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEyMDIsXHJcbiAgICAgICAgICAgIHg6IDE1LjM3ODg2Mjg2NTQ0NzYyNCxcclxuICAgICAgICAgICAgeTogMjkwLjIxNzgyMjI4NzUyMjNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfRHR0Wk12a3l2VzNmVjZvQ1VNVEYnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmFwYW4gU2NpZW5jZSBhbmQgVGVjaG5vbG9neSBBZ2VuY3knLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMTU3LFxyXG4gICAgICAgICAgICB4OiAxMy4xNzM0NTA3MzEwNjEwODYsXHJcbiAgICAgICAgICAgIHk6IDU2LjQ4NjE0MDk5NTc3NzY3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX2M1dnlCeks3aWlra1U0RGpRRkhUJyxcclxuICAgICAgICAgICAgbmFtZTogJ0phcGFuIFNjaWVuY2UgYW5kIFRlY2hub2xvZ3kgQ29ycG9yYXRpb24nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0MTgsXHJcbiAgICAgICAgICAgIHg6IDYzLjU2MzE3MDU4Mjc1LFxyXG4gICAgICAgICAgICB5OiA2LjI3MzY3MzUxOTA5MDc1M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19Gdmd2R0ZlOEpaMGlZbFo4MHdlRicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLb25pbmtsaWprZSBQaGlsaXBzIEVsZWN0cm9uaWNzIE4uVi4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNzEzOCxcclxuICAgICAgICAgICAgeDogLTEyMy4yNDE3OTEyMzc5MDE5MSxcclxuICAgICAgICAgICAgeTogMjcwLjk5NzQ2NTQ4NDQxMDE2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX1hjcUNqdFQ4cGk4TWszVWpRbER0JyxcclxuICAgICAgICAgICAgbmFtZTogJ0xHIEVsZWN0cm9uaWNzIEluYy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzMjcyNSxcclxuICAgICAgICAgICAgeDogLTI3Ny4zNDYwMjI5OTg0NTU4LFxyXG4gICAgICAgICAgICB5OiA3LjEzMzY5ODIyMjU0MzAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAncGVyX0RJalVUTTdsSGhEc0F6MnU4amlPJyxcclxuICAgICAgICAgICAgbmFtZTogJ01hc2FzaGkgS2F3YXNha2knLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxyXG4gICAgICAgICAgICB4OiAxOS44OTU0MzY1OTY2NjI5MDgsXHJcbiAgICAgICAgICAgIHk6IC0xMC43MTcxNzgyNTA5MDA5MThcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfR1ZNbExWYndDRFNpcVA5T2c4VG4nLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWVkdHJvbmljIE1pbmlNZWQsIEluYy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4MDAsXHJcbiAgICAgICAgICAgIHg6IC0xODMuNzQwMjM0MTkwNTc0MTcsXHJcbiAgICAgICAgICAgIHk6IDM3LjY4NzIxODc2OTgzOTA4NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19RdzhFc3JOME01Mm5WUVVNNnZzVicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNb25zYW50byBUZWNobm9sb2d5IExMQycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDg2ODksXHJcbiAgICAgICAgICAgIHg6IDE5Ljc2MzkwMTQ4ODM1MjY3MyxcclxuICAgICAgICAgICAgeTogMTk2LjYyMjM2ODYyNTg5Nzc0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX2o1VTVJRWExRkliZ3RyN2lOc1FNJyxcclxuICAgICAgICAgICAgbmFtZTogJ011cmF0YSBNYW51ZmFjdHVyaW5nIENvLiwgTHRkLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDczNDIsXHJcbiAgICAgICAgICAgIHg6IDg3LjY0ODc4MTk3MTA4ODE3LFxyXG4gICAgICAgICAgICB5OiAyOTEuMTAyMzE5NTg3MjM1MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ18xcDRGV0VvSXRqeUtid1RwQ0pvbCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdOZXR3b3JrIEFwcGxpYW5jZSwgSW5jLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUzMCxcclxuICAgICAgICAgICAgeDogLTIyMi4yOTIwMzcyMTE4MDUyLFxyXG4gICAgICAgICAgICB5OiAxNDkuMDgzNzIxNTUyNzIwNjJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfQVRPV0hkNEdHYW9oMTR6dXRYcTcnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUG93ZXIgTWVkaWNhbCBJbnRlcnZlbnRpb25zLCBJbmMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzAsXHJcbiAgICAgICAgICAgIHg6IDEwOC44ODExMDM5OTc0OTcwNixcclxuICAgICAgICAgICAgeTogMTg2Ljg1MzM4NzgyNjI2NTlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfazhWN2M1Z25tQzdTVm11cDVWdTcnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUmFpbmRhbmNlIENvbW11bmljYXRpb25zLCBJbmMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcclxuICAgICAgICAgICAgeDogNjUuMTU3MTc2OTQyNjQ0MTcsXHJcbiAgICAgICAgICAgIHk6IDgzLjQxOTQzNjM3ODIwNDAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnXzI0MmhKZWd3ZlFDZVA5aHNmd3BXJyxcclxuICAgICAgICAgICAgbmFtZTogJ1JpZ2h0IE5vdyBUZWNobm9sb2dpZXMsIEluYy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyLFxyXG4gICAgICAgICAgICB4OiAxODYuODE5NjUyODE2MDIyNjgsXHJcbiAgICAgICAgICAgIHk6IC0xODMuNDAxNzAyNTE0NTg1M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ182cjl0N1pBNllUMDMxT2Q0a01QZycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSaWdodG5vdyBUZWNobm9sb2dpZXMsIEluYy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMCxcclxuICAgICAgICAgICAgeDogLTIzMS43MzYxNTg4MDEyMjIzNixcclxuICAgICAgICAgICAgeTogLTc0LjA5OTE2OTcwOTM0MjUyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnXzJJRjk3elZ5bVN1cmFTblVBWG1xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1NhbnlvIEVsZWN0cmljIENvLiwgTHRkLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDgzODMsXHJcbiAgICAgICAgICAgIHg6IC0yODMuOTAyODI1MzYwODk0NixcclxuICAgICAgICAgICAgeTogLTEyNy44NzI1MzM4MTk2OTE3MVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19wbFpiTHhpeXNFU2JhSTlwT2V5bScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTRU1JQ09ORFVDVE9SIEVORVJHWSBMQUJPUkFUT1JZIENPLiwgTFRELicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEzODg1LFxyXG4gICAgICAgICAgICB4OiAyNTYuMjI4Mzk4NzYzNzkwNSxcclxuICAgICAgICAgICAgeTogMTI0LjQ2MTQxNjk2MDY2NTIyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX0NNV2NvQ0pXUE9maXNMV3JLdnlkJyxcclxuICAgICAgICAgICAgbmFtZTogJ1NoYXJwIEthYnVzaGlraSBLYWlzaGEnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMjU0MCxcclxuICAgICAgICAgICAgeDogNC4wOTU1NjA0MDY0ODI2NzEsXHJcbiAgICAgICAgICAgIHk6IC0zMi4xMzYxODQ4MjU3OTkzOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTaWViZWwgU3lzdGVtcywgSW5jLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI5OCxcclxuICAgICAgICAgICAgeDogLTMzLjkxOTk0NzUyMzE0ODQyLFxyXG4gICAgICAgICAgICB5OiAtMjEyLjU5OTQyODg5ODg4MTFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfSjhWbkF6RnFFaldneHE0ZXY3MXonLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3RhcmlvbiBJbnN0cnVtZW50cyBDb3Jwb3JhdGlvbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIwLFxyXG4gICAgICAgICAgICB4OiAxNzguOTg0MTY2NTQxMTYzNDYsXHJcbiAgICAgICAgICAgIHk6IDE2OS41NDgyMTIxMTE5MDI3NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19tMnROUEprQTJnMUFXT2M3dXpTMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUaGVyYVNlbnNlLCBJbmMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNTMsXHJcbiAgICAgICAgICAgIHg6IC0xMjUuOTE0NTk5ODQ2MDg1MSxcclxuICAgICAgICAgICAgeTogMTMyLjQxNzM5MDU0NTE2MTE3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX0pqck02VW1lT1kwUTVNbW9OaVA4JyxcclxuICAgICAgICAgICAgbmFtZTogJ1RPS1lPIElOU1RJVFVURSBPRiBURUNITk9MT0dZJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzk1LFxyXG4gICAgICAgICAgICB4OiAxOC42MTQxMzAwODExNjY0NixcclxuICAgICAgICAgICAgeTogMTY1LjIxMjUzNjk5NTU0MjE0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX2V3VnNDdXRwUnpEOXBUMDdrQm9FJyxcclxuICAgICAgICAgICAgbmFtZTogJ1R5Y28gSGVhbHRjYXJlIEdyb3VwIExQJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNSxcclxuICAgICAgICAgICAgeDogLTY3LjI1NDMwNTI2NzQyMTA3LFxyXG4gICAgICAgICAgICB5OiAzMDguNjE0OTI4MjA0MTU3OVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ181d05Ocko0ekZRNUtROE9XbnpSQycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdVbml0ZWQgU3RhdGVzIFN1cnRpY2FsIENvcnBvcmF0aW9uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcclxuICAgICAgICAgICAgeDogMjgyLjc4MTAwOTIyNDQzMSxcclxuICAgICAgICAgICAgeTogLTUyLjk4MTU5MDExNTA4NzE0NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ18zdkkyWjVrQzFTYVNsYlVCb09CVCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdXZWJFeCBDb21tdW5pY2F0aW9ucywgSW5jLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIyLFxyXG4gICAgICAgICAgICB4OiAxODcuMzY3NjM5NTExMjg3MTQsXHJcbiAgICAgICAgICAgIHk6IDEwMS4yMDg0OTg0NzA4MDE4MVxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBsaW5rczogW1xyXG4gICAgICAgIHsgc291cmNlOiAnNjUxNjIyNycsIHRhcmdldDogJzUzNTg1MTQtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1MTYyMjcnLCB0YXJnZXQ6ICc1NzU1NzM3LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTE2MjI3JywgdGFyZ2V0OiAnNTk0ODAwNi0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjUxNjIyNycsIHRhcmdldDogJzY1MTYyMjctNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1MTYyMjcnLCB0YXJnZXQ6ICdvcmdfYndxODNqYmNjS3FGNGpKclBjYVInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTM1OTA5JywgdGFyZ2V0OiAnNjUzNTkwOS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjUzNTkwOScsIHRhcmdldDogJ29yZ18xMDdXS05QYnZEREtyWkJsbXc4VScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NDk5MDgnLCB0YXJnZXQ6ICc2MzkzNjA1LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTQ5OTA4JywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1MzU2MycsIHRhcmdldDogJzU3MTU0NTAtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTM1NjMnLCB0YXJnZXQ6ICc1NzE1NDUwLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTUzNTYzJywgdGFyZ2V0OiAnNjU1MzU2My0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1MzU2MycsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTgzMjAnLCB0YXJnZXQ6ICc0ODA5Njk3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTU4MzIwJywgdGFyZ2V0OiAnNDg2MzQyNS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1ODMyMCcsIHRhcmdldDogJzUwOTcxMjItMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTgzMjAnLCB0YXJnZXQ6ICdvcmdfR1ZNbExWYndDRFNpcVA5T2c4VG4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTU4MzUxJywgdGFyZ2V0OiAnNTA5NzEyMi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1ODM1MScsIHRhcmdldDogJzUyMzcxNzgtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTgzNTEnLCB0YXJnZXQ6ICc1MjU3OTcxLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTU4MzUxJywgdGFyZ2V0OiAnNjQyNDg0Ny0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1ODM1MScsIHRhcmdldDogJzY1NTgzNTEtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTgzNTEnLCB0YXJnZXQ6ICc2NTU4MzUxLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTU4MzUxJywgdGFyZ2V0OiAnNjU1ODM1MS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1ODM1MScsIHRhcmdldDogJzY1NTgzNTEtOCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTgzNTEnLCB0YXJnZXQ6ICdvcmdfR1ZNbExWYndDRFNpcVA5T2c4VG4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTYwNDYxJywgdGFyZ2V0OiAnNTkxODE1OS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2MDQ2MScsIHRhcmdldDogJzU5MTgxNTktMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjMxNzQnLCB0YXJnZXQ6ICc0MjUzMDYxLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTYzMTc0JywgdGFyZ2V0OiAnNDkwMjY3MS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2MzE3NCcsIHRhcmdldDogJzQ5OTcyNjItMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjMxNzQnLCB0YXJnZXQ6ICc1OTI1MjI0LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTYzMTc0JywgdGFyZ2V0OiAnb3JnX0NNV2NvQ0pXUE9maXNMV3JLdnlkJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2MzE3NCcsIHRhcmdldDogJ3Blcl9ESWpVVE03bEhoRHNBejJ1OGppTycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjMxNzQnLCB0YXJnZXQ6ICdwZXJfdFgyZTJ5VkxneU5nb2JFcHpXS1QnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTY1NTA5JywgdGFyZ2V0OiAnNDA4MjYwMi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2NTUwOScsIHRhcmdldDogJzUwNDEwODYtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjU1MDknLCB0YXJnZXQ6ICc1MzA2NjIzLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTY1NTA5JywgdGFyZ2V0OiAnNTUzMzIzOC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2NTUwOScsIHRhcmdldDogJzU1MzQxMzItMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjU1MDknLCB0YXJnZXQ6ICc1NjE2NTMyLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTY1NTA5JywgdGFyZ2V0OiAnNTcyMjk5Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2NTUwOScsIHRhcmdldDogJzU5MDE4OTYtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjU1MDknLCB0YXJnZXQ6ICc2MTAzMDMzLTcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTY1NTA5JywgdGFyZ2V0OiAnNjE3NTc1Mi05JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2NTUwOScsIHRhcmdldDogJ29yZ19tMnROUEprQTJnMUFXT2M3dXpTMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NzEyODInLCB0YXJnZXQ6ICc2MDgxNTE4LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTcxMjgyJywgdGFyZ2V0OiAnb3JnXzR6TzJCYzA4eDU2WGpEcTVUZUJwJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU3NDYzNScsIHRhcmdldDogJzU3MTU0NTAtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NzQ2MzUnLCB0YXJnZXQ6ICc1NzE1NDUwLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTc0NjM1JywgdGFyZ2V0OiAnNTk2Mzk1My0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU3NDYzNScsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1Nzc3MjYnLCB0YXJnZXQ6ICc2NTc3NzI2LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTc3NzI2JywgdGFyZ2V0OiAnNjU3NzcyNi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU3NzcyNicsIHRhcmdldDogJzY1Nzc3MjYtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1Nzc3MjYnLCB0YXJnZXQ6ICc2NTc3NzI2LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTc3NzI2JywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU4NzgzNScsIHRhcmdldDogJzY0MzM5MjEtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1ODc4MzUnLCB0YXJnZXQ6ICc2NTI2MzM1LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjAxMDg3JywgdGFyZ2V0OiAnNTI2MTAzNy0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYwMTA4NycsIHRhcmdldDogJzY2MDEwODctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MDEwODcnLCB0YXJnZXQ6ICdvcmdfM3ZJMlo1a0MxU2FTbGJVQm9PQlQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjAyMjUyJywgdGFyZ2V0OiAnNDg5MDYxMS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYwMjI1MicsIHRhcmdldDogJ29yZ19KOFZuQXpGcUVqV2d4cTRldjcxeicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MDQxMTcnLCB0YXJnZXQ6ICc1ODczMDk2LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjA0MTE3JywgdGFyZ2V0OiAnNTg3MzA5Ni0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYwNDExNycsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MDQxMjgnLCB0YXJnZXQ6ICc2MzI0NTY4LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjA0MTI4JywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYwNjc0NCcsIHRhcmdldDogJzY2MDY3NDQtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MDY3NDQnLCB0YXJnZXQ6ICdvcmdfNHpPMkJjMDh4NTZYakRxNVRlQnAnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjA5MTUwJywgdGFyZ2V0OiAnNTk2Mzk1My0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYwOTE1MCcsIHRhcmdldDogJzYzMzYxMzctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MDkxNTAnLCB0YXJnZXQ6ICc2MzM2MTM3LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjA5MTUwJywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYyMTgzNCcsIHRhcmdldDogJzU5NDQ3OTEtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MjE4MzQnLCB0YXJnZXQ6ICc2NjIxODM0LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjIxODM0JywgdGFyZ2V0OiAnb3JnX2s4VjdjNWdubUM3U1ZtdXA1VnU3JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY0MTUzMycsIHRhcmdldDogJzQ4MDk2OTctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NDE1MzMnLCB0YXJnZXQ6ICc0ODYzNDI1LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjQxNTMzJywgdGFyZ2V0OiAnNTA5NzEyMi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY0MTUzMycsIHRhcmdldDogJ29yZ19HVk1sTFZid0NEU2lxUDlPZzhUbicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NDQ1MzInLCB0YXJnZXQ6ICc0MTI3MjI3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjQ0NTMyJywgdGFyZ2V0OiAnNDI4MzAyNC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY0NDUzMicsIHRhcmdldDogJzUxNzY1MDItMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NDQ1MzInLCB0YXJnZXQ6ICdEMjYzOTg3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjQ0NTMyJywgdGFyZ2V0OiAnRDMwNDIzNC0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY0NDUzMicsIHRhcmdldDogJ1JFMjg5MzItMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NDQ1MzInLCB0YXJnZXQ6ICdvcmdfNXdOTnJKNHpGUTVLUThPV256UkMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjU0MDMyJywgdGFyZ2V0OiAnNTI2MTAzNy0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY1NDAzMicsIHRhcmdldDogJzU4NTU5NTctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NTQwMzInLCB0YXJnZXQ6ICc2NjAxMDg3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjU0MDMyJywgdGFyZ2V0OiAnNjY1NDAzMi00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY1NDAzMicsIHRhcmdldDogJ29yZ18zdkkyWjVrQzFTYVNsYlVCb09CVCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NTYxOTMnLCB0YXJnZXQ6ICc0ODkyMjQ0LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjU2MTkzJywgdGFyZ2V0OiAnNTI3MTU0My0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY1NjE5MycsIHRhcmdldDogJzUzMjk2NTUtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NTYxOTMnLCB0YXJnZXQ6ICc1NDA5NDk4LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjU2MTkzJywgdGFyZ2V0OiAnNTcwNzM2OS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY1NjE5MycsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NjU2NDgnLCB0YXJnZXQ6ICc2NjY1NjQ4LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjY1NjQ4JywgdGFyZ2V0OiAnNjY2NTY0OC0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY2NTY0OCcsIHRhcmdldDogJzY2NjU2NDgtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NjU2NDgnLCB0YXJnZXQ6ICc2NjY1NjQ4LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjY1NjQ4JywgdGFyZ2V0OiAnNjY2NTY0OC01JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY2NTY0OCcsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NjU2NTUnLCB0YXJnZXQ6ICc2NDM0NTUwLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjY1NjU1JywgdGFyZ2V0OiAnNjY2NTY1NS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY2NTY1NScsIHRhcmdldDogJ29yZ182cjl0N1pBNllUMDMxT2Q0a01QZycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2ODQ0MzgnLCB0YXJnZXQ6ICc1ODczMDk2LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2Njg0NDM4JywgdGFyZ2V0OiAnNjA5MjA4My0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY4NDQzOCcsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2OTAzODcnLCB0YXJnZXQ6ICc2MjgxODk4LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjkwMzg3JywgdGFyZ2V0OiAnNjY5MDM4Ny0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY5MDM4NycsIHRhcmdldDogJ29yZ19Gdmd2R0ZlOEpaMGlZbFo4MHdlRicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2OTMyMzInLCB0YXJnZXQ6ICc1NDE2MjU1LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjkzMjMyJywgdGFyZ2V0OiAnb3JnX01LdmJuQ2N5UHVkWGV4VXZzU3dGJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY5ODY0MycsIHRhcmdldDogJzYyNjQwODctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2OTg2NDMnLCB0YXJnZXQ6ICdvcmdfQVRPV0hkNEdHYW9oMTR6dXRYcTcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzExNTY1JywgdGFyZ2V0OiAnNjcxMTU2NS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcxMTU2NScsIHRhcmdldDogJzY3MTE1NjUtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MTE1NjUnLCB0YXJnZXQ6ICc2NzExNTY1LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzExNTY1JywgdGFyZ2V0OiAnNjcxMTU2NS00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcxMTU2NScsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MTYyMzMnLCB0YXJnZXQ6ICc2MjY0MDg3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzE2MjMzJywgdGFyZ2V0OiAnb3JnX0FUT1dIZDRHR2FvaDE0enV0WHE3JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcxODM2MScsIHRhcmdldDogJzYyMjMyMDUtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MTgzNjEnLCB0YXJnZXQ6ICc2MzcwNTg0LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzE4MzYxJywgdGFyZ2V0OiAnNjcxODM2MS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcxODM2MScsIHRhcmdldDogJzY3MTgzNjEtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MTgzNjEnLCB0YXJnZXQ6ICc2NzE4MzYxLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzE4MzYxJywgdGFyZ2V0OiAnNjcxODM2MS00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcxODM2MScsIHRhcmdldDogJzY3MTgzNjEtNScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MTgzNjEnLCB0YXJnZXQ6ICc2NzE4MzYxLTgnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzE4MzYxJywgdGFyZ2V0OiAnb3JnXzFwNEZXRW9JdGp5S2J3VHBDSm9sJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcyNDM5OScsIHRhcmdldDogJzY3MjQzOTktMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MjQzOTknLCB0YXJnZXQ6ICc2NzI0Mzk5LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzI0Mzk5JywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcyNzUyMicsIHRhcmdldDogJzQyNTMwNjEtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3Mjc1MjInLCB0YXJnZXQ6ICc0OTAyNjcxLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzI3NTIyJywgdGFyZ2V0OiAnb3JnX2M1dnlCeks3aWlra1U0RGpRRkhUJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcyODcwMicsIHRhcmdldDogJzY1Nzc3MjYtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3Mjg3MDInLCB0YXJnZXQ6ICc2NzExNTY1LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzI4NzAyJywgdGFyZ2V0OiAnNjcxMTU2NS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcyODcwMicsIHRhcmdldDogJzY3MTE1NjUtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3Mjg3MDInLCB0YXJnZXQ6ICc2NzExNTY1LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzI4NzAyJywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcyODk2MCcsIHRhcmdldDogJzYzOTM2MDUtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3Mjg5NjAnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMDk1JywgdGFyZ2V0OiAnNTI0MzYyMi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjczMjA5NScsIHRhcmdldDogJzY3MzIwOTUtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MzIwOTUnLCB0YXJnZXQ6ICc2NzMyMDk1LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMDk1JywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjczMjEwMCcsIHRhcmdldDogJzU3MTU0NTAtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MzIxMDAnLCB0YXJnZXQ6ICc2NTc3NzI2LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMTAwJywgdGFyZ2V0OiAnNjU3NzcyNi00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjczMjEwMCcsIHRhcmdldDogJzY2NjU2NDgtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MzIxMDAnLCB0YXJnZXQ6ICc2NzMyMTAwLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMTAwJywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjczMjExMScsIHRhcmdldDogJzQ5NTEyNzgtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MzIxMTEnLCB0YXJnZXQ6ICc2MDkyMDgzLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMTExJywgdGFyZ2V0OiAnNjA5MjA4My0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjczMjExMScsIHRhcmdldDogJzY3MzIxMTEtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MzIxMTEnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzU0NjgxJywgdGFyZ2V0OiAnNTg3MzA5Ni0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc1NDY4MScsIHRhcmdldDogJzYwOTIwODMtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3NTQ2ODEnLCB0YXJnZXQ6ICc2MDkyMDgzLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzU0NjgxJywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc2MzM1MScsIHRhcmdldDogJzY3MTE1NjUtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3NjMzNTEnLCB0YXJnZXQ6ICc2NzExNTY1LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzYzMzUxJywgdGFyZ2V0OiAnNjcxMTU2NS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc2MzM1MScsIHRhcmdldDogJzY3MTE1NjUtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3NjMzNTEnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzYzNTAxJywgdGFyZ2V0OiAnNTI2MTAzNy0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc2MzUwMScsIHRhcmdldDogJzU4NTU5NTctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3NjM1MDEnLCB0YXJnZXQ6ICc2NjAxMDg3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzYzNTAxJywgdGFyZ2V0OiAnNjY1NDAzMi00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc2MzUwMScsIHRhcmdldDogJ29yZ18zdkkyWjVrQzFTYVNsYlVCb09CVCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3Njg5MDQnLCB0YXJnZXQ6ICc2MTgzNTg5LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzY4OTA0JywgdGFyZ2V0OiAnb3JnX1hjcUNqdFQ4cGk4TWszVWpRbER0JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc4MjM4MycsIHRhcmdldDogJzY3MTE1NjUtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3ODIzODMnLCB0YXJnZXQ6ICc2NzExNTY1LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzgyMzgzJywgdGFyZ2V0OiAnNjcxMTU2NS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc4MjM4MycsIHRhcmdldDogJzY3MTE1NjUtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3ODIzODMnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzgzNTI0JywgdGFyZ2V0OiAnNTg1OTkxNi0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc4MzUyNCcsIHRhcmdldDogJzY3ODM1MjQtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3ODM1MjQnLCB0YXJnZXQ6ICdvcmdfZkEwYXpxb0JHRXpvUG95ODVKeXYnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2Nzg2MzgyJywgdGFyZ2V0OiAnNjUzMDkzMi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc4NjM4MicsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MDQzMzAnLCB0YXJnZXQ6ICc1NzE1NDUwLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA0MzMwJywgdGFyZ2V0OiAnNjI2ODgwMy0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgwNDMzMCcsIHRhcmdldDogJzY4MDQzMzAtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MDQzMzAnLCB0YXJnZXQ6ICc2ODA0MzMwLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA0MzMwJywgdGFyZ2V0OiAnNjgwNDMzMC01JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgwNDMzMCcsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MDk2NTMnLCB0YXJnZXQ6ICc0MDgyMDk3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA5NjUzJywgdGFyZ2V0OiAnNDU2MTQ0NC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgwOTY1MycsIHRhcmdldDogJzQ4MDk2OTctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MDk2NTMnLCB0YXJnZXQ6ICc0ODYzNDI1LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA5NjUzJywgdGFyZ2V0OiAnNTA5NzEyMi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgwOTY1MycsIHRhcmdldDogJzUyMzcxNzgtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MDk2NTMnLCB0YXJnZXQ6ICc1MzgyMjMyLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA5NjUzJywgdGFyZ2V0OiAnNjgwOTY1My05JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgwOTY1MycsIHRhcmdldDogJ0Q0MjM3NjEtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MDk2NTMnLCB0YXJnZXQ6ICdvcmdfR1ZNbExWYndDRFNpcVA5T2c4VG4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI2NTY1JywgdGFyZ2V0OiAnNjI5NTUzMC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyNjU2NScsIHRhcmdldDogJzYyOTU1MzAtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MjY1NjUnLCB0YXJnZXQ6ICdvcmdfWjU5YVVCR3RaOVA1UXpkRmlLbVonIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI2NTgyJywgdGFyZ2V0OiAnNDM2MjM4Ny0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyNjU4MicsIHRhcmdldDogJzYwODE4NzUtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MjY1ODInLCB0YXJnZXQ6ICc2ODI2NTgyLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI2NTgyJywgdGFyZ2V0OiAnb3JnXzBqUFdNN1lxaHRYbTBsbTNmbTFZJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyNjc0NScsIHRhcmdldDogJzYyMzM2MTctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MjY3NDUnLCB0YXJnZXQ6ICc2NTc3NzI2LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI2NzQ1JywgdGFyZ2V0OiAnNjgyNjc0NS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyNjc0NScsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4Mjk2NTUnLCB0YXJnZXQ6ICc1OTc4ODI5LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI5NjU1JywgdGFyZ2V0OiAnNjAwNDI3Ni0xMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4Mjk2NTUnLCB0YXJnZXQ6ICc2ODI5NjU1LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI5NjU1JywgdGFyZ2V0OiAnNjgyOTY1NS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyOTY1NScsIHRhcmdldDogJzY4Mjk2NTUtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4Mjk2NTUnLCB0YXJnZXQ6ICc2ODI5NjU1LTYnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI5NjU1JywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgzMDE3NCcsIHRhcmdldDogJzQ3OTg1OTQtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MzAxNzQnLCB0YXJnZXQ6ICc1NDY1ODk1LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODMwMTc0JywgdGFyZ2V0OiAnb3JnXzhjc01ndGduTjBtUkVacE5QMUppJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg0Mjc0OCcsIHRhcmdldDogJzY0MzQ1NTAtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NDI3NDgnLCB0YXJnZXQ6ICc2NjY1NjU1LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODQyNzQ4JywgdGFyZ2V0OiAnb3JnXzZyOXQ3WkE2WVQwMzFPZDRrTVBnJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg0MzQwMycsIHRhcmdldDogJzYyNjQwODctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NDM0MDMnLCB0YXJnZXQ6ICdvcmdfQVRPV0hkNEdHYW9oMTR6dXRYcTcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODUwMjUyJywgdGFyZ2V0OiAnNTc3NDM1Ny0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg1MDg5NScsIHRhcmdldDogJzYwOTIwODMtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NTA4OTUnLCB0YXJnZXQ6ICc2MDkyMDgzLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODUwODk1JywgdGFyZ2V0OiAnNjU3NzcyNi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg1MDg5NScsIHRhcmdldDogJzY4NTA4OTUtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NTA4OTUnLCB0YXJnZXQ6ICc2ODUwODk1LTUnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODUwODk1JywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg1MDk0OScsIHRhcmdldDogJzY4NTA5NDktMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NTA5NDknLCB0YXJnZXQ6ICc2ODUwOTQ5LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODUwOTQ5JywgdGFyZ2V0OiAnNjg1MDk0OS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg1MDk0OScsIHRhcmdldDogJ29yZ18yNDJoSmVnd2ZRQ2VQOWhzZndwVycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NTI5MTUnLCB0YXJnZXQ6ICc1Mjc2MjYyLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODUyOTE1JywgdGFyZ2V0OiAnb3JnX01LdmJuQ2N5UHVkWGV4VXZzU3dGJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjkwNTA1NycsIHRhcmdldDogJzU4OTc1NjMtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY5MDUwNTcnLCB0YXJnZXQ6ICc2OTA1MDU3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2OTA1MDU3JywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjk1OTg1MicsIHRhcmdldDogJzU2MzI0MzItNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY5NTk4NTInLCB0YXJnZXQ6ICc2OTA1MDU3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2OTU5ODUyJywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjk2NDM2MycsIHRhcmdldDogJzU0MDk0OTgtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY5NjQzNjMnLCB0YXJnZXQ6ICc2OTY0MzYzLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2OTY0MzYzJywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjk3ODkyMScsIHRhcmdldDogJzU2MzI0MzItNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY5Nzg5MjEnLCB0YXJnZXQ6ICc2OTA1MDU3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2OTc4OTIxJywgdGFyZ2V0OiAnNjk3ODkyMS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjk3ODkyMScsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY5ODE2MjgnLCB0YXJnZXQ6ICc1NDA5NDk4LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2OTgxNjI4JywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAwMDgxOCcsIHRhcmdldDogJzU2MzI0MzItNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMDA4MTgnLCB0YXJnZXQ6ICc2OTA1MDU3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDAwODE4JywgdGFyZ2V0OiAnNzAwMDgxOC0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAwMDgxOCcsIHRhcmdldDogJ29yZ19YdTZnWFNzbHREQlpUQWhNRkJXRCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMjU3NDMnLCB0YXJnZXQ6ICc0MDgyMDk3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDI1NzQzJywgdGFyZ2V0OiAnNDU2MTQ0NC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAyNTc0MycsIHRhcmdldDogJzQ4MDk2OTctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMjU3NDMnLCB0YXJnZXQ6ICc1MTc2NjQ0LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDI1NzQzJywgdGFyZ2V0OiAnNTM4MjIzMi0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAyNTc0MycsIHRhcmdldDogJzY1NTEyNzYtMTAnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDI1NzQzJywgdGFyZ2V0OiAnNjU1MTI3Ni0xMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMjU3NDMnLCB0YXJnZXQ6ICc2NTUxMjc2LTEyJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAyNTc0MycsIHRhcmdldDogJzY1NTEyNzYtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMjU3NDMnLCB0YXJnZXQ6ICc2NTUxMjc2LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDI1NzQzJywgdGFyZ2V0OiAnNjU1MTI3Ni04JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAyNTc0MycsIHRhcmdldDogJzY1NTEyNzYtOScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMjU3NDMnLCB0YXJnZXQ6ICdvcmdfR1ZNbExWYndDRFNpcVA5T2c4VG4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDQ5MTkwJywgdGFyZ2V0OiAnNjA4MDk5OC0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA0OTE5MCcsIHRhcmdldDogJzY5MTQxODItMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNDkxOTAnLCB0YXJnZXQ6ICdvcmdfMklGOTd6VnltU3VyYVNuVUFYbXEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDU1NzMxJywgdGFyZ2V0OiAnNTYzMjQzMi00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA1NTczMScsIHRhcmdldDogJzY5MDUwNTctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNTU3MzEnLCB0YXJnZXQ6ICc2OTc4OTIxLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDU1NzMxJywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA2MTAxNCcsIHRhcmdldDogJzQ0ODY3MjAtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNjEwMTQnLCB0YXJnZXQ6ICc0NzAzMDE5LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDYxMDE0JywgdGFyZ2V0OiAnNTI3MjA2OS02JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA2MTAxNCcsIHRhcmdldDogJzU2MjI2NTMtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNjEwMTQnLCB0YXJnZXQ6ICc3MDYxMDE0LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDYxMDE0JywgdGFyZ2V0OiAnNzA2MTAxNC02JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA2MTAxNCcsIHRhcmdldDogJ29yZ19EdHRaTXZreXZXM2ZWNm9DVU1URicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNjQzNDYnLCB0YXJnZXQ6ICc0MjUzMDYxLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDY0MzQ2JywgdGFyZ2V0OiAnNDkwMjY3MS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA2NDM0NicsIHRhcmdldDogJ29yZ19EdHRaTXZreXZXM2ZWNm9DVU1URicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcxMDU4NjgnLCB0YXJnZXQ6ICc1ODYzMzI2LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MTA1ODY4JywgdGFyZ2V0OiAnNjg4NzczNi00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzEwNTg2OCcsIHRhcmdldDogJ29yZ18wZVRyM1hJQmpBS3BYa0M2ODIzcicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcxMTE3NjknLCB0YXJnZXQ6ICc1NDA5NDk4LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MTExNzY5JywgdGFyZ2V0OiAnNTg5NzU2My00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzExMTc2OScsIHRhcmdldDogJzY1MzA5MzItMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcxMTE3NjknLCB0YXJnZXQ6ICc2OTA1MDU3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MTExNzY5JywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzE0NzEzOCcsIHRhcmdldDogJzY5MDUwNTctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcxNDcxMzgnLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MTU5NzUwJywgdGFyZ2V0OiAnNDg3MjYwMy0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzE1OTc1MCcsIHRhcmdldDogJzU3MTM5MTEtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcxNTk3NTAnLCB0YXJnZXQ6ICc1NzEzOTExLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MTU5NzUwJywgdGFyZ2V0OiAnNzE1OTc1MC00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzE1OTc1MCcsIHRhcmdldDogJzcxNTk3NTAtNScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcxNTk3NTAnLCB0YXJnZXQ6ICdvcmdfZXdWc0N1dHBSekQ5cFQwN2tCb0UnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MjExODI1JywgdGFyZ2V0OiAnNTA4MTQyMi0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzIxMTgyNScsIHRhcmdldDogJzUyODM0NTItMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcyMTE4MjUnLCB0YXJnZXQ6ICc1NzAzMzU3LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MjExODI1JywgdGFyZ2V0OiAnNjU5MzgzNC0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzI0NjczNCcsIHRhcmdldDogJzY5MDUwNTctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcyNDY3MzQnLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MjgyNzgyJywgdGFyZ2V0OiAnNjE0NDY3OS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzI4Mjc4MicsIHRhcmdldDogJzYxNTI5ODctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcyODI3ODInLCB0YXJnZXQ6ICc2ODM2NTQwLTYnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MjgyNzgyJywgdGFyZ2V0OiAnb3JnX3ZTNnJjS3ljMnFOM3JGZFgwUDJLJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzI5Nzk3NycsIHRhcmdldDogJzYxNDQ2NzktMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcyOTc5NzcnLCB0YXJnZXQ6ICc2MTUyOTg3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3Mjk3OTc3JywgdGFyZ2V0OiAnNjgzNjU0MC02JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzI5Nzk3NycsIHRhcmdldDogJ29yZ192UzZyY0t5YzJxTjNyRmRYMFAySycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczMjMzNTYnLCB0YXJnZXQ6ICc0NDg2NzIwLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzIzMzU2JywgdGFyZ2V0OiAnNDcwMzAxOS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzMyMzM1NicsIHRhcmdldDogJzUyNzIwNjktNicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczMjMzNTYnLCB0YXJnZXQ6ICc1NjIyNjUzLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzIzMzU2JywgdGFyZ2V0OiAnNzA2MTAxNC00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzMyMzM1NicsIHRhcmdldDogJzczMjMzNTYtNScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczMjMzNTYnLCB0YXJnZXQ6ICdvcmdfRHR0Wk12a3l2VzNmVjZvQ1VNVEYnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzQwNDExJywgdGFyZ2V0OiAnNzM0MDQxMS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzM4MDY5NScsIHRhcmdldDogJzU0MDk0OTgtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczODA2OTUnLCB0YXJnZXQ6ICc1NjMyNDMyLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzgwNjk1JywgdGFyZ2V0OiAnNjkwNTA1Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzM4MDY5NScsIHRhcmdldDogJzcwODMwNzUtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczODA2OTUnLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzgwNjk2JywgdGFyZ2V0OiAnNTYzMjQzMi00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzM4MDY5NicsIHRhcmdldDogJzY5MDUwNTctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczODA2OTYnLCB0YXJnZXQ6ICc3MDgzMDc1LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzgwNjk2JywgdGFyZ2V0OiAnNzM4MDY5Ni0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzM4MDY5NicsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczODUyMjQnLCB0YXJnZXQ6ICc1MDQxMjAwLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3Mzg1MjI0JywgdGFyZ2V0OiAnNTA0MTIwMC00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzM4NTIyNCcsIHRhcmdldDogJzczODUyMjQtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczODUyMjQnLCB0YXJnZXQ6ICc3Mzg1MjI0LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3Mzg1MjI0JywgdGFyZ2V0OiAnb3JnX0ltZWc5VzZQMVRFNkkyUXV0UzR5JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQwMjUwNicsIHRhcmdldDogJzU1MTI0MjYtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0MDI1MDYnLCB0YXJnZXQ6ICc2MDQ4MTEwLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDAyNTA2JywgdGFyZ2V0OiAnNzQwMjUwNi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQwMjUwNicsIHRhcmdldDogJ29yZ19wcEVsa0V0UXZGdEc2QTQ3NTRVSScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0MDQ1MDgnLCB0YXJnZXQ6ICc0NjgyNTk2LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDA0NTA4JywgdGFyZ2V0OiAnNTExNzgzOC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQwNDUwOCcsIHRhcmdldDogJzU3MTU2NzUtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0MDQ1MDgnLCB0YXJnZXQ6ICc2OTEyODM5LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDA0NTA4JywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQxMTIwOScsIHRhcmdldDogJzUzNDU2MzktNicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0MTEyMDknLCB0YXJnZXQ6ICc1NDE3NzcwLTgnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDExMjA5JywgdGFyZ2V0OiAnNzA4MjgzMi00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQxMTIwOScsIHRhcmdldDogJ29yZ19FaFlGUElKRW1ZUVlSb1l2c25weScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NTMwNjUnLCB0YXJnZXQ6ICc0MDcyMjM2LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDUzMDY1JywgdGFyZ2V0OiAnNDM1NjQ1NS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ1MzA2NScsIHRhcmdldDogJzQ3MDMwMTktMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NTMwNjUnLCB0YXJnZXQ6ICc3MDYxMDE0LTYnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDUzMDY1JywgdGFyZ2V0OiAnb3JnX0VoWUZQSUpFbVlRWVJvWXZzbnB5JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ1MzA2NScsIHRhcmdldDogJ29yZ19KanJNNlVtZU9ZMFE1TW1vTmlQOCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NTMwODcnLCB0YXJnZXQ6ICc1MzQ1NjM5LTYnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDUzMDg3JywgdGFyZ2V0OiAnb3JnX0VoWUZQSUpFbVlRWVJvWXZzbnB5JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ2Mjg2MicsIHRhcmdldDogJzYxNDQ2NzktMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NjI4NjInLCB0YXJnZXQ6ICc2ODM2NTQwLTYnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDYyODYyJywgdGFyZ2V0OiAnb3JnX3ZTNnJjS3ljMnFOM3JGZFgwUDJLJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ2NDg0NicsIHRhcmdldDogJzQ0MDM2ODctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NjQ4NDYnLCB0YXJnZXQ6ICc1ODk3NTYzLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDY0ODQ2JywgdGFyZ2V0OiAnNjkwNTA1Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ2NDg0NicsIHRhcmdldDogJzcwODMwNzUtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NjQ4NDYnLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDY4MzA0JywgdGFyZ2V0OiAnNjg2MzM2My0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ2ODMwNCcsIHRhcmdldDogJzc0NjgzMDQtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NjgzMDQnLCB0YXJnZXQ6ICdvcmdfRWhZRlBJSkVtWVFZUm9ZdnNucHknIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NTAxMjkzJywgdGFyZ2V0OiAnNDIyNDcyNS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzUwMTI5MycsIHRhcmdldDogJzQ1NzM0NzItMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc1MDEyOTMnLCB0YXJnZXQ6ICdvcmdfajVVNUlFYTFGSWJndHI3aU5zUU0nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NTA2NzkxJywgdGFyZ2V0OiAnNDQwMzY4Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzUwNjc5MScsIHRhcmdldDogJzQ5NzIyMjQtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc1MDY3OTEnLCB0YXJnZXQ6ICc2OTA1MDU3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NTA2NzkxJywgdGFyZ2V0OiAnUkUzOTg0MS00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzUwNjc5MScsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc2MjA2NTUnLCB0YXJnZXQ6ICc1OTQ4Nzg5LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NjIwNjU1JywgdGFyZ2V0OiAnNzYyMDY1NS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzYyMDY1NScsIHRhcmdldDogJ29yZ19XaDJjbk9JektsaHpqdXFWbU9xWScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc2MzI5ODUnLCB0YXJnZXQ6ICc3MDc4NTAzLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NjMyOTg1JywgdGFyZ2V0OiAnNzYwODc2MS00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzYzMjk4NScsIHRhcmdldDogJzc2MzI5ODUtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc2MzI5ODUnLCB0YXJnZXQ6ICc3NjMyOTg1LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NjMyOTg1JywgdGFyZ2V0OiAnb3JnX1F3OEVzck4wTTUyblZRVU02dnNWJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzY2MzYwNycsIHRhcmdldDogJzU1OTQxNjktMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc2NjM2MDcnLCB0YXJnZXQ6ICc2NjU4NTc3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NjYzNjA3JywgdGFyZ2V0OiAnNzE1NDQ3Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzY2MzYwNycsIHRhcmdldDogJ29yZ19JRFViUzA5WlIwSmhKOGpGRXB0VCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc2NzQ2NTAnLCB0YXJnZXQ6ICc2NjM5MjQ2LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3Njc0NjUwJywgdGFyZ2V0OiAnNjgzODM5Ny0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzY3NDY1MCcsIHRhcmdldDogJzcyMDU3MTYtNScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc2NzQ2NTAnLCB0YXJnZXQ6ICdvcmdfcGxaYkx4aXlzRVNiYUk5cE9leW0nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NzMyODE5JywgdGFyZ2V0OiAnNjYzOTI0Ni0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzczMjgxOScsIHRhcmdldDogJzY4MzgzOTctMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc3MzI4MTknLCB0YXJnZXQ6ICc3MjA1NzE2LTUnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NzMyODE5JywgdGFyZ2V0OiAnb3JnX3BsWmJMeGl5c0VTYmFJOXBPZXltJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnODA1MzE4NCcsIHRhcmdldDogJzcwNzg1MDMtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzgwNTMxODQnLCB0YXJnZXQ6ICc3NjA4NzYxLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc4MDUzMTg0JywgdGFyZ2V0OiAnNzYzMjk4NS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnODA1MzE4NCcsIHRhcmdldDogJzc2MzI5ODUtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzgwNTMxODQnLCB0YXJnZXQ6ICdvcmdfUXc4RXNyTjBNNTJuVlFVTTZ2c1YnIH1cclxuICAgIF1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBpbnRlcmZhY2VzIGZyb20gJy4uL2ludGVyZmFjZXMnXHJcbmltcG9ydCBOZXRWIGZyb20gJy4uL2luZGV4J1xyXG5pbXBvcnQgeyBvdmVycmlkZSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJ1xyXG5pbXBvcnQgeyBlbGVtZW50UmVzZXJ2ZWRLZXlzIH0gZnJvbSAnLi4vY29uZmlncydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnQge1xyXG4gICAgcHVibGljICRfc3R5bGU6IGludGVyZmFjZXMuTm9kZVN0eWxlIHwgaW50ZXJmYWNlcy5MaW5rU3R5bGUgPSB7fVxyXG4gICAgcHVibGljICRfbW91c2Vkb3duQ2FsbGJhY2tTZXQ6IFNldDwoZTogYW55KSA9PiB2b2lkPiA9IG5ldyBTZXQoKVxyXG4gICAgcHVibGljICRfbW91c2V1cENhbGxiYWNrU2V0OiBTZXQ8KGU6IGFueSkgPT4gdm9pZD4gPSBuZXcgU2V0KClcclxuICAgIHB1YmxpYyAkX2hvdmVyQ2FsbGJhY2tTZXQ6IFNldDwoZTogYW55KSA9PiB2b2lkPiA9IG5ldyBTZXQoKVxyXG4gICAgcHVibGljICRfY2xpY2tDYWxsYmFja1NldDogU2V0PChlOiBhbnkpID0+IHZvaWQ+ID0gbmV3IFNldCgpXHJcblxyXG4gICAgcHJvdGVjdGVkICRfY29yZTogTmV0VlxyXG4gICAgcHJvdGVjdGVkICRfY2hhbmdlUmVuZGVyQXR0cmlidXRlOiAoZWxlbWVudDogRWxlbWVudCwga2V5OiBzdHJpbmcpID0+IHZvaWRcclxuXHJcbiAgICBwcm90ZWN0ZWQgJF9hdHRyaWJ1dGVzID0ge31cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoY29yZTogTmV0ViwgZGF0YTogaW50ZXJmYWNlcy5Ob2RlRGF0YSB8IGludGVyZmFjZXMuTGlua0RhdGEpIHtcclxuICAgICAgICBjb25zdCB0eXBlID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLnRvTG93ZXJDYXNlKClcclxuICAgICAgICB0aGlzLiRfY29yZSA9IGNvcmVcclxuICAgICAgICBjb25zdCBkZWZhdWx0Q29uZmlncyA9IHRoaXMuJF9jb3JlLiRfY29uZmlnc1xyXG5cclxuICAgICAgICAvLyBzZXQgYXR0cmlidXRlc1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKCFlbGVtZW50UmVzZXJ2ZWRLZXlzLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRfYXR0cmlidXRlc1trZXldID0gZGF0YVtrZXldXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIG92ZXJyaWRlIGRlZmF1bHQgc3R5bGUgd2l0aCB1c2VyIHNwZWNpZmllZCBzdHlsZSBpbiBkYXRhXHJcbiAgICAgICAgdGhpcy4kX3N0eWxlID0gb3ZlcnJpZGUoZGVmYXVsdENvbmZpZ3NbdHlwZV0uc3R5bGUsIGRhdGEuc3R5bGUpXHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlck1hbmFnZXIgPSB0aGlzLiRfY29yZS4kX3JlbmRlcmVyW2Ake3R5cGV9TWFuYWdlcmBdXHJcbiAgICAgICAgdGhpcy4kX2NoYW5nZVJlbmRlckF0dHJpYnV0ZSA9IHJlbmRlck1hbmFnZXIuY2hhbmdlQXR0cmlidXRlLmJpbmQocmVuZGVyTWFuYWdlcilcclxuXHJcbiAgICAgICAgLy8gZ2VuZXJhdGUgc3R5bGUgbWV0aG9kcywgZS5nLjogbm9kZS5yKCksIGxpbmsuc3Ryb2tlV2lkdGgoKVxyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuJF9zdHlsZSkuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGdlbmVyYXRlIHN0eWxlIGZ1bmN0aW9uc1xyXG4gICAgICAgICAgICB0aGlzW2tleV0gPSB0aGlzLmdlbmVyYXRlRWxlbWVudFN0eWxlR2V0dGVyU2V0dGVyKGtleSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxyXG4gICAgICogQHBhcmFtIHsoZTogYW55KSA9PiBhbnl9IGNhbGxiYWNrXHJcbiAgICAgKiBAbWVtYmVyb2YgRWxlbWVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb24oZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiAoZTogYW55KSA9PiBhbnkpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGV2ZW50TmFtZS5zbGljZSgwLCA0KSAhPT0gJ2RyYWcnIHx8XHJcbiAgICAgICAgICAgIChldmVudE5hbWUuc2xpY2UoMCwgNCkgPT09ICdkcmFnJyAmJiB0aGlzLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdOb2RlJykgLy8gb25seSBub2RlIGNhbiBiZSBkcmFnZ2VkXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrU2V0TmFtZSA9IGAkXyR7ZXZlbnROYW1lfUNhbGxiYWNrU2V0YFxyXG4gICAgICAgICAgICB0aGlzW2NhbGxiYWNrU2V0TmFtZV0/LmFkZChjYWxsYmFjaylcclxuICAgICAgICAgICAgaWYgKHRoaXNbY2FsbGJhY2tTZXROYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9pbnRlcmFjdGlvbk1hbmFnZXIuaW5jcmVhc2VNb3VzZUV2ZW50Q2FsbGJhY2tDb3VudEJ5KDEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXHJcbiAgICAgKiBAcGFyYW0geyhlOiBhbnkpID0+IGFueX0gY2FsbGJhY2tcclxuICAgICAqIEBtZW1iZXJvZiBFbGVtZW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvZmYoZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiAoZTogYW55KSA9PiBhbnkpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGV2ZW50TmFtZS5zbGljZSgwLCA0KSAhPT0gJ2RyYWcnIHx8XHJcbiAgICAgICAgICAgIChldmVudE5hbWUuc2xpY2UoMCwgNCkgPT09ICdkcmFnJyAmJiB0aGlzLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdOb2RlJykgLy8gb25seSBub2RlIGNhbiBiZSBkcmFnZ2VkXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrU2V0TmFtZSA9IGAkXyR7ZXZlbnROYW1lfUNhbGxiYWNrU2V0YFxyXG4gICAgICAgICAgICB0aGlzW2NhbGxiYWNrU2V0TmFtZV0/LmRlbGV0ZShjYWxsYmFjaylcclxuICAgICAgICAgICAgaWYgKHRoaXNbY2FsbGJhY2tTZXROYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9pbnRlcmFjdGlvbk1hbmFnZXIuZGVjcmVhc2VNb3VzZUV2ZW50Q2FsbGJhY2tDb3VudEJ5KDEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXQvc2V0IGN1c3RvbSBhdHRyaWJ1dGVzXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGF0dHIoa2V5OiBzdHJpbmcsIHZhbHVlPzogYW55KSB7XHJcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy4kX2F0dHJpYnV0ZXNba2V5XSA9IHZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfYXR0cmlidXRlc1trZXldXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZUVsZW1lbnRTdHlsZUdldHRlclNldHRlcihrZXk6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiAodmFsdWU/OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhbHVlIGlzIGFuIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJF9zdHlsZVtrZXldID0gb3ZlcnJpZGUodGhpcy4kX3N0eWxlW2tleV0sIHZhbHVlKSAvLyB7IC4uLnRoaXMuJF9zdHlsZVtrZXldLCAuLi52YWx1ZSB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJF9zdHlsZVtrZXldID0gdmFsdWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuJF9jaGFuZ2VSZW5kZXJBdHRyaWJ1dGUodGhpcywga2V5KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRfc3R5bGVba2V5XVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogQGF1dGhvciBKaWFjaGVuZyBQYW4gPGphY2tpZWFueGlzQGdtYWlsLmNvbT5cclxuICogQGRlc2NyaXB0aW9uIFByb3ZpZGUgYSBMaW5rIGNsYXNzLlxyXG4gKiBAZGVwZW5kZW5jZXMgaW50ZXJmYWNlcy50cywgdXRpbHMvaXMudHNcclxuICovXHJcblxyXG5pbXBvcnQgTm9kZSBmcm9tICcuL25vZGUnXHJcbmltcG9ydCAqIGFzIGludGVyZmFjZXMgZnJvbSAnLi4vaW50ZXJmYWNlcydcclxuaW1wb3J0IEVsZW1lbnQgZnJvbSAnLi9lbGVtZW50J1xyXG5cclxuY2xhc3MgTGluayBleHRlbmRzIEVsZW1lbnQge1xyXG4gICAgLy8gc3R5bGUgZ2V0dGVyL3NldHRlclxyXG4gICAgcHVibGljIHN0cm9rZVdpZHRoOiAodmFsdWU/OiBudW1iZXIpID0+IG51bWJlclxyXG4gICAgcHVibGljIHN0cm9rZUNvbG9yOiAodmFsdWU/OiBpbnRlcmZhY2VzLkNvbG9yKSA9PiBpbnRlcmZhY2VzLkNvbG9yXHJcblxyXG4gICAgcHJpdmF0ZSAkX3NvdXJjZTogTm9kZVxyXG4gICAgcHJpdmF0ZSAkX3RhcmdldDogTm9kZVxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb3JlLCBsaW5rRGF0YTogaW50ZXJmYWNlcy5MaW5rRGF0YSkge1xyXG4gICAgICAgIHN1cGVyKGNvcmUsIGxpbmtEYXRhKVxyXG5cclxuICAgICAgICBjb25zdCBzb3VyY2VOb2RlID0gdGhpcy4kX2NvcmUuZ2V0Tm9kZUJ5SWQobGlua0RhdGEuc291cmNlKVxyXG4gICAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSB0aGlzLiRfY29yZS5nZXROb2RlQnlJZChsaW5rRGF0YS50YXJnZXQpXHJcbiAgICAgICAgdGhpcy5zb3VyY2VUYXJnZXQoe1xyXG4gICAgICAgICAgICBzb3VyY2U6IHNvdXJjZU5vZGUsXHJcbiAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0Tm9kZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXR0ZXIvc2V0dGVyIG9mIHRoZSBzb3VyY2VcclxuICAgICAqIEBwYXJhbSB7Tm9kZX0gW25vZGVdXHJcbiAgICAgKiBAcmV0dXJucyB7Tm9kZX0gYSBzb3VyY2UgTm9kZSBPYmplY3RcclxuICAgICAqIEBtZW1iZXJvZiBMaW5rXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzb3VyY2Uobm9kZT86IE5vZGUpOiBOb2RlIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAvLyBzZXR0ZXJcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VUYXJnZXQoe1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiBub2RlLFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLiRfdGFyZ2V0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfc291cmNlXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXR0ZXIvc2V0dGVyIG9mIHRoZSB0YXJnZXRcclxuICAgICAqIEBwYXJhbSB7Tm9kZX0gW25vZGVdXHJcbiAgICAgKiBAcmV0dXJucyB7Tm9kZX0gYSB0YXJnZXQgTm9kZSBPYmplY3RcclxuICAgICAqIEBtZW1iZXJvZiBMaW5rXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0YXJnZXQobm9kZT86IE5vZGUpOiBOb2RlIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAvLyBzZXR0ZXJcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VUYXJnZXQoe1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiB0aGlzLiRfc291cmNlLFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBub2RlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfdGFyZ2V0XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXR0ZXIvc2V0dGVyIG9mIHNvdXJjZSBhbmQgdGFyZ2V0XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzb3VyY2VUYXJnZXRPYmp9IFt7c291cmNlOiBOb2RlLCB0YXJnZXQ6IE5vZGV9XVxyXG4gICAgICogQHJldHVybnMgT2JqZWN0IHtzb3VyY2U6IE5vZGUsIHRhcmdldDogTm9kZX1cclxuICAgICAqIEBtZW1iZXJvZiBMaW5rXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzb3VyY2VUYXJnZXQoc291cmNlVGFyZ2V0T2JqPzogeyBzb3VyY2U6IE5vZGU7IHRhcmdldDogTm9kZSB9KSB7XHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9sZFNvdXJjZTogTm9kZSA9IHRoaXMuJF9zb3VyY2VcclxuICAgICAgICAgICAgY29uc3Qgb2xkVGFyZ2V0OiBOb2RlID0gdGhpcy4kX3RhcmdldFxyXG4gICAgICAgICAgICBjb25zdCBuZXdTb3VyY2UgPSBzb3VyY2VUYXJnZXRPYmouc291cmNlXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1RhcmdldCA9IHNvdXJjZVRhcmdldE9iai50YXJnZXRcclxuICAgICAgICAgICAgY29uc3QgbmV3U291cmNlSWQgPSBuZXdTb3VyY2UuaWQoKVxyXG4gICAgICAgICAgICBjb25zdCBuZXdUYXJnZXRJZCA9IG5ld1RhcmdldC5pZCgpXHJcblxyXG4gICAgICAgICAgICBpZiAobmV3U291cmNlID09PSBuZXdUYXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGVycm9yOiBzZWxmIGxvb3BcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgU2VsZiBsb29wICgke25ld1NvdXJjZUlkfSA8PT4gJHtuZXdUYXJnZXRJZH0pIGlzIG5vdCBhbGxvd2VkLmApXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRfY29yZS4kX2VuZHMybGluay5oYXMoW25ld1NvdXJjZUlkLCBuZXdUYXJnZXRJZF0pKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBlcnJvcjogbXVsdGlwbGUgbGlua1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBsaW5rICgke25ld1NvdXJjZUlkfSA8PT4gJHtuZXdUYXJnZXRJZH0pIGlzIG5vdCBhbGxvd2QuYClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG9sZFNvdXJjZSAmJiBvbGRUYXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSBvbGQgTWFwXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRfY29yZS4kX2VuZHMybGluay5kZWxldGUoW29sZFNvdXJjZS5pZCgpLCBvbGRUYXJnZXQuaWQoKV0pXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9zb3VyY2VJZDJsaW5rcy5nZXQob2xkU291cmNlLmlkKCkpPy5kZWxldGUodGhpcylcclxuICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfdGFyZ2V0SWQybGlua3MuZ2V0KG9sZFRhcmdldC5pZCgpKT8uZGVsZXRlKHRoaXMpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuJF9zb3VyY2UgPSBuZXdTb3VyY2VcclxuICAgICAgICAgICAgdGhpcy4kX3RhcmdldCA9IG5ld1RhcmdldFxyXG4gICAgICAgICAgICB0aGlzLiRfY29yZS4kX2VuZHMybGluay5zZXQoW25ld1NvdXJjZUlkLCBuZXdUYXJnZXRJZF0sIHRoaXMpXHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuJF9jb3JlLiRfc291cmNlSWQybGlua3MuaGFzKG5ld1NvdXJjZUlkKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9zb3VyY2VJZDJsaW5rcy5zZXQobmV3U291cmNlSWQsIG5ldyBTZXQoW3RoaXNdKSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfc291cmNlSWQybGlua3MuZ2V0KG5ld1NvdXJjZUlkKS5hZGQodGhpcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuJF9jb3JlLiRfdGFyZ2V0SWQybGlua3MuaGFzKG5ld1RhcmdldElkKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF90YXJnZXRJZDJsaW5rcy5zZXQobmV3VGFyZ2V0SWQsIG5ldyBTZXQoW3RoaXNdKSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfdGFyZ2V0SWQybGlua3MuZ2V0KG5ld1RhcmdldElkKS5hZGQodGhpcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzb3VyY2U6IHRoaXMuJF9zb3VyY2UsXHJcbiAgICAgICAgICAgIHRhcmdldDogdGhpcy4kX3RhcmdldFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlua1xyXG4iLCIvKipcclxuICogQGF1dGhvciBKaWFjaGVuZyBQYW4gPGphY2tpZWFueGlzQGdtYWlsLmNvbT5cclxuICogQGRlc2NyaXB0aW9uIFByb3ZpZGUgYSBOb2RlIGNsYXNzLlxyXG4gKiBAZGVwZW5kZW5jZXMgaW50ZXJmYWNlcy50cywgdXRpbHMvaXMudHNcclxuICovXHJcblxyXG5pbXBvcnQgKiBhcyBpbnRlcmZhY2VzIGZyb20gJy4uL2ludGVyZmFjZXMnXHJcbmltcG9ydCB7IGlzVmFsaWRJZCB9IGZyb20gJy4uL3V0aWxzL2lzJ1xyXG5pbXBvcnQgeyBMaW5rQXR0ciB9IGZyb20gJy4uL3JlbmRlcmVyL2ludGVyZmFjZXMnXHJcbmltcG9ydCBMaW5rIGZyb20gJy4vbGluaydcclxuaW1wb3J0IEVsZW1lbnQgZnJvbSAnLi9lbGVtZW50J1xyXG5cclxuY2xhc3MgTm9kZSBleHRlbmRzIEVsZW1lbnQge1xyXG4gICAgLy8gc3R5bGUgZ2V0dGVyL3NldHRlclxyXG4gICAgcHVibGljIHNoYXBlOiAodmFsdWU/OiBpbnRlcmZhY2VzLk5vZGVTaGFwZSkgPT4gaW50ZXJmYWNlcy5Ob2RlU2hhcGVcclxuICAgIHB1YmxpYyBvZmZzZXQ6ICh2YWx1ZT86IGludGVyZmFjZXMuUG9zaXRpb24pID0+IGludGVyZmFjZXMuUG9zaXRpb25cclxuICAgIHB1YmxpYyBzdHJva2VXaWR0aDogKHZhbHVlPzogbnVtYmVyKSA9PiBudW1iZXJcclxuICAgIHB1YmxpYyBzdHJva2VDb2xvcjogKHZhbHVlPzogaW50ZXJmYWNlcy5Db2xvcikgPT4gaW50ZXJmYWNlcy5Db2xvclxyXG4gICAgcHVibGljIGZpbGw6ICh2YWx1ZT86IGludGVyZmFjZXMuQ29sb3IpID0+IGludGVyZmFjZXMuQ29sb3JcclxuICAgIC8qIGNpcmNsZSBzaGFwZSBzdHlsZXMgKi9cclxuICAgIHB1YmxpYyByPzogKHZhbHVlPzogbnVtYmVyKSA9PiBudW1iZXJcclxuICAgIC8qIHJlY3Qgc2hhcGUgc3R5bGVzICovXHJcbiAgICBwdWJsaWMgd2lkdGg/OiAodmFsdWU/OiBudW1iZXIpID0+IG51bWJlclxyXG4gICAgcHVibGljIGhlaWdodD86ICh2YWx1ZT86IG51bWJlcikgPT4gbnVtYmVyXHJcbiAgICBwdWJsaWMgcm90YXRlPzogKHZhbHVlPzogbnVtYmVyKSA9PiBudW1iZXJcclxuICAgIC8qIHRyaWFuZ2xlIHNoYXBlIHN0eWxlcyAqL1xyXG4gICAgcHVibGljIHZlcnRleEFscGhhOiAodmFsdWU/OiBpbnRlcmZhY2VzLlBvc2l0aW9uKSA9PiBpbnRlcmZhY2VzLlBvc2l0aW9uXHJcbiAgICBwdWJsaWMgdmVydGV4QmV0YTogKHZhbHVlPzogaW50ZXJmYWNlcy5Qb3NpdGlvbikgPT4gaW50ZXJmYWNlcy5Qb3NpdGlvblxyXG4gICAgcHVibGljIHZlcnRleEdhbW1hOiAodmFsdWU/OiBpbnRlcmZhY2VzLlBvc2l0aW9uKSA9PiBpbnRlcmZhY2VzLlBvc2l0aW9uXHJcblxyXG4gICAgcHVibGljICRfZHJhZ3N0YXJ0Q2FsbGJhY2tTZXQ6IFNldDwoZTogYW55KSA9PiB2b2lkPiA9IG5ldyBTZXQoKVxyXG4gICAgcHVibGljICRfZHJhZ2dpbmdDYWxsYmFja1NldDogU2V0PChlOiBhbnkpID0+IHZvaWQ+ID0gbmV3IFNldCgpXHJcbiAgICBwdWJsaWMgJF9kcmFnZW5kQ2FsbGJhY2tTZXQ6IFNldDwoZTogYW55KSA9PiB2b2lkPiA9IG5ldyBTZXQoKVxyXG5cclxuICAgIHByaXZhdGUgJF9pZDogc3RyaW5nXHJcbiAgICBwcml2YXRlICRfcG9zaXRpb24gPSB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSAkX3Nob3dMYWJlbDogYm9vbGVhblxyXG4gICAgcHJpdmF0ZSAkX3RleHQ6IHN0cmluZ1xyXG4gICAgcHJpdmF0ZSAkX3RleHRPZmZzZXQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSAvLyBOT1RFOiBkZXByZWNhdGVkLCBjdXJyZW50IG5vdCB1c2VkXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvcmUsIG5vZGVEYXRhOiBpbnRlcmZhY2VzLk5vZGVEYXRhKSB7XHJcbiAgICAgICAgc3VwZXIoY29yZSwgbm9kZURhdGEpXHJcbiAgICAgICAgY29uc3QgZGVmYXVsdENvbmZpZ3MgPSB0aGlzLiRfY29yZS4kX2NvbmZpZ3NcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICAuLi57XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLiRfcG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgIHk6IHRoaXMuJF9wb3NpdGlvbi55LFxyXG4gICAgICAgICAgICAgICAgc2hvd0xhYmVsOiBkZWZhdWx0Q29uZmlncy5ub2RlLnNob3dMYWJlbCxcclxuICAgICAgICAgICAgICAgIHRleHQ6IGRlZmF1bHRDb25maWdzLm5vZGUudGV4dFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAuLi5ub2RlRGF0YVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kX3NldElkKGRhdGEuaWQpXHJcbiAgICAgICAgdGhpcy4kX3Bvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICB4OiBkYXRhLngsXHJcbiAgICAgICAgICAgIHk6IGRhdGEueVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kX3Nob3dMYWJlbCA9IGRhdGEuc2hvd0xhYmVsXHJcbiAgICAgICAgdGhpcy4kX3RleHQgPSBkYXRhLnRleHRcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuJF9zaG93TGFiZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93TGFiZWwodHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXR0ZXIgb2YgcHJpdmF0ZSBwcm9wZXJ0eSAkX2lkXHJcbiAgICAgKiBAbWVtYmVyb2YgTm9kZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9pZFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0L2dldCB4IHBvc3Rpb25cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbdmFsdWVdXHJcbiAgICAgKiBAbWVtYmVyb2YgTm9kZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgeCh2YWx1ZT86IG51bWJlcikge1xyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uKHtcclxuICAgICAgICAgICAgICAgIHg6IHZhbHVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfcG9zaXRpb24ueFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0L2dldCB5IHBvc3Rpb25cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbdmFsdWVdXHJcbiAgICAgKiBAbWVtYmVyb2YgTm9kZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgeSh2YWx1ZT86IG51bWJlcikge1xyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uKHtcclxuICAgICAgICAgICAgICAgIHk6IHZhbHVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfcG9zaXRpb24ueVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0L2dldCBwb3N0aW9uXHJcbiAgICAgKiBAbWVtYmVyb2YgTm9kZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcG9zaXRpb24ocG9zaXRpb24/OiBpbnRlcmZhY2VzLlBvc2l0aW9uKSB7XHJcbiAgICAgICAgbGV0IGxpbmtTZXRzID0ge31cclxuXHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwICYmICgneCcgaW4gcG9zaXRpb24gfHwgJ3knIGluIHBvc2l0aW9uKSkge1xyXG4gICAgICAgICAgICBpZiAoJ3gnIGluIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRfcG9zaXRpb25bJ3gnXSA9IHBvc2l0aW9uLnhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoJ3knIGluIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRfcG9zaXRpb25bJ3knXSA9IHBvc2l0aW9uLnlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuJF9jb3JlLiRfcmVuZGVyZXIuc2hvdWxkTGF6eVVwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJF9wb3NpdGlvblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGlua1NldHMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZmluZCBsaW5rcyBmcm9tL3RvIHRoaXMgbm9kZVxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZTogdGhpcy4kX2NvcmUuJF9zb3VyY2VJZDJsaW5rcy5nZXQodGhpcy4kX2lkKSxcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMuJF9jb3JlLiRfdGFyZ2V0SWQybGlua3MuZ2V0KHRoaXMuJF9pZClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhsaW5rU2V0cykuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBlbnRyeVswXTogJ3NvdXJjZScgLyAndGFyZ2V0J1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVudHJ5WzFdOiB0aGUgbGluayBzZXRcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbnRyeVswXSBhcyBMaW5rQXR0clxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNldCA9IGVudHJ5WzFdIGFzIFNldDxMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9yZW5kZXJlci5pbmNyZWFzZU1vZGlmaWVkRWxlbWVudHNDb3VudEJ5KHNldC5zaXplKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGxpbmsgb2Ygc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRfY29yZS4kX3JlbmRlcmVyLmxpbmtNYW5hZ2VyLmNoYW5nZUF0dHJpYnV0ZShsaW5rLCBrZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfcmVuZGVyZXIuaW5jcmVhc2VNb2RpZmllZEVsZW1lbnRzQ291bnRCeSgxKVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9yZW5kZXJlci5ub2RlTWFuYWdlci5jaGFuZ2VBdHRyaWJ1dGUodGhpcywgJ3Bvc2l0aW9uJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9wb3NpdGlvblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY29udHJvbCBsYWJlbCBzaG93IG9yIG5vdFxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaG93TGFiZWwodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLiRfc2hvd0xhYmVsID0gdmFsdWVcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy4kX2NvcmUubGFiZWxNYW5hZ2VyLmRyYXdMYWJlbCh0aGlzKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9jb3JlLmxhYmVsTWFuYWdlci5yZW1vdmVMYWJlbCh0aGlzKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldC9zZXQgbm9kZSdzIGxhYmVsXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgbGFiZWwgdGV4dFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdGV4dCh2YWx1ZT86IHN0cmluZykge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLiRfdGV4dCA9IHZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfdGV4dFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0L3NldCBvZmZzZXQgdmFsdWVcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBvZmZzZXQgdmFsdWVcclxuICAgICAqIEBkZXByZWNhdGVkIG5vdCB1c2VkIGN1cnJlbnRseSwgbm90IHN1cHBvcnQgc2V0IG5vZGUncyBsYWJlbCBvZmZzZXQgaW5kaXZpZHVhbGx5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0ZXh0T2Zmc2V0KHZhbHVlPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KSB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF90ZXh0T2Zmc2V0ID0gdmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF90ZXh0T2Zmc2V0XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQgdGhlIGlkIG9mIHRoaXMgbm9kZS5cclxuICAgICAqIGl0IGlzIG9ubHkgdXNlZCBmb3IgY29uc3RydWN0b3JcclxuICAgICAqIGJlY2F1c2UgYSBub2RlJ3MgaWQgaXMgbm90IGFsbG93ZWQgdG8gYmUgY2hhbmdlZC5cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcclxuICAgICAqIEByZXR1cm5zIG5vdGhpbmdcclxuICAgICAqIEBtZW1iZXJvZiBOb2RlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgJF9zZXRJZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKGlzVmFsaWRJZCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuJF9jb3JlLiRfaWQybm9kZS5oYXModmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYER1cGxpY2F0ZSBub2RlICgke3ZhbHVlfSkgaXMgbm90IGFsbG93ZWQuYClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZElkKHRoaXMuJF9pZCkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG5vdCBjaGFuZ2UgdGhlIGlkIG9mIGFuIGV4aXN0IG5vZGUuJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiRfY29yZS4kX2lkMm5vZGUuc2V0KHZhbHVlLCB0aGlzKVxyXG4gICAgICAgICAgICB0aGlzLiRfaWQgPSB2YWx1ZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBJRCAke3ZhbHVlfWApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb2RlXHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIEppYWNoZW5nIFBhbiA8amFja2llYW54aXNAZ21haWwuY29tPlxyXG4gKiBAZGVzY3JpcHRpb24gUHJvdmlkZSB0aGUgZW50cmFuY2Ugb2YgTmV0Vi5qcy5cclxuICogQGRlcGVuZGVuY2VzIGludGVyZmFjZXMudHMsIHV0aWxzL21hcDIuanMsIG5vZGUudHMsIGxpbmsudHNcclxuICovXHJcblxyXG5pbXBvcnQgKiBhcyBpbnRlcmZhY2VzIGZyb20gJy4vaW50ZXJmYWNlcydcclxuaW1wb3J0IE1hcDIgZnJvbSAnLi91dGlscy9tYXAyJ1xyXG5pbXBvcnQgTm9kZSBmcm9tICcuL2VsZW1lbnRzL25vZGUnXHJcbmltcG9ydCBMaW5rIGZyb20gJy4vZWxlbWVudHMvbGluaydcclxuaW1wb3J0ICogYXMgZGVmYXVsdENvbmZpZ3MgZnJvbSAnLi9jb25maWdzJ1xyXG5pbXBvcnQgKiBhcyBkYXRhc2V0IGZyb20gJy4vZGF0YXNldCdcclxuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuL3JlbmRlcmVyJ1xyXG5pbXBvcnQgeyBJbnRlcmFjdGlvbk1hbmFnZXIgfSBmcm9tICcuL2ludGVyYWN0aW9uL2ludGVyYWN0aW9uJ1xyXG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzL3V0aWxzJ1xyXG5pbXBvcnQgeyBMYWJlbE1hbmFnZXIgfSBmcm9tICcuL2xhYmVsL2xhYmVsJ1xyXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4vaW50ZXJmYWNlcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ldFYge1xyXG4gICAgcHVibGljIHN0YXRpYyBVdGlscyA9IFV0aWxzXHJcbiAgICBwdWJsaWMgbGFiZWxNYW5hZ2VyOiBMYWJlbE1hbmFnZXJcclxuXHJcbiAgICBwdWJsaWMgJF9pZDJub2RlID0gbmV3IE1hcCgpXHJcbiAgICBwdWJsaWMgJF9lbmRzMmxpbmsgPSBuZXcgTWFwMigpXHJcbiAgICBwdWJsaWMgJF9zb3VyY2VJZDJsaW5rczogTWFwPHN0cmluZywgU2V0PExpbms+PiA9IG5ldyBNYXAoKVxyXG4gICAgcHVibGljICRfdGFyZ2V0SWQybGlua3M6IE1hcDxzdHJpbmcsIFNldDxMaW5rPj4gPSBuZXcgTWFwKClcclxuICAgIHB1YmxpYyAkX2NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnRcclxuICAgIHB1YmxpYyAkX3JlbmRlcmVyOiBSZW5kZXJlclxyXG4gICAgcHVibGljICRfY29uZmlncyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGVmYXVsdENvbmZpZ3MpKSAvLyBOT1RFOiBkZWVwIGNvcHkgY29uZmlnc1xyXG5cclxuICAgIHB1YmxpYyAkX3RyYW5zZm9ybTogaW50ZXJmYWNlcy5UcmFuc2Zvcm0gPSB7IHg6IDAsIHk6IDAsIGs6IDEgfVxyXG5cclxuICAgIHB1YmxpYyAkX2xhenlVcGRhdGUgPSBmYWxzZSAvLyBmbGFnIHRvIGNvbnRyb2wgbGF6eSB1cGRhdGVcclxuXHJcbiAgICBwdWJsaWMgJF9pbnRlcmFjdGlvbk1hbmFnZXI6IEludGVyYWN0aW9uTWFuYWdlclxyXG4gICAgcHJpdmF0ZSAkX2RhdGE6IGludGVyZmFjZXMuTm9kZUxpbmtEYXRhID0geyBub2RlczogW10sIGxpbmtzOiBbXSB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gY3JlYXRlIE5ldFYgb2JqZWN0LlxyXG4gICAgICogQHBhcmFtIGNvbmZpZ3MgY29uZmlndXJhdGlvbnMgb2YgTmV0ViwgbXVzdCBpbmNsdWRlIGEgYGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnRgIHRlcm1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZ3M6IGFueSkge1xyXG4gICAgICAgIGlmICghKCdjb250YWluZXInIGluIGNvbmZpZ3MpIHx8IGNvbmZpZ3MuY29udGFpbmVyLnRhZ05hbWUgIT09ICdESVYnKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdDb250YWluZXIgc2hvdWxkIGJlIHNwZWNpZmllZCBhcyBhIGRpdiBlbGVtZW50IScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuJF9jb250YWluZXIgPSBjb25maWdzLmNvbnRhaW5lclxyXG5cclxuICAgICAgICB0aGlzLiRfY29uZmlncyA9IFV0aWxzLm92ZXJyaWRlKHRoaXMuJF9jb25maWdzLCBjb25maWdzKVxyXG4gICAgICAgIGRlbGV0ZSB0aGlzLiRfY29uZmlnc1snY29udGFpbmVyJ11cclxuXHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykgLy8gVE9ETzogY29uc2lkZXIgbm9kZSBlbnZpcm9tZW50LCBkb2N1bWVudCBub3QgZGVmaW5lZFxyXG4gICAgICAgIGNvbnN0IHBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxXHJcbiAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gdGhpcy4kX2NvbmZpZ3Mud2lkdGggKyAncHgnXHJcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IHRoaXMuJF9jb25maWdzLmhlaWdodCArICdweCdcclxuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIFN0cmluZyh0aGlzLiRfY29uZmlncy53aWR0aCAqIHBpeGVsUmF0aW8pKVxyXG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIFN0cmluZyh0aGlzLiRfY29uZmlncy5oZWlnaHQgKiBwaXhlbFJhdGlvKSlcclxuICAgICAgICB0aGlzLiRfY29udGFpbmVyLmFwcGVuZENoaWxkKGNhbnZhcylcclxuXHJcbiAgICAgICAgdGhpcy4kX3JlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHtcclxuICAgICAgICAgICAgY2FudmFzLFxyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy4kX2NvbmZpZ3Mud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy4kX2NvbmZpZ3MuaGVpZ2h0LFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuJF9jb25maWdzLmJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgICAgbm9kZUxpbWl0OiB0aGlzLiRfY29uZmlncy5ub2RlTGltaXQsXHJcbiAgICAgICAgICAgIGxpbmtMaW1pdDogdGhpcy4kX2NvbmZpZ3MubGlua0xpbWl0LFxyXG4gICAgICAgICAgICBnZXRBbGxOb2RlczogdGhpcy5ub2Rlcy5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBnZXRBbGxMaW5rczogdGhpcy5saW5rcy5iaW5kKHRoaXMpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5sYWJlbE1hbmFnZXIgPSBuZXcgTGFiZWxNYW5hZ2VyKHRoaXMpXHJcblxyXG4gICAgICAgIHRoaXMuJF9pbnRlcmFjdGlvbk1hbmFnZXIgPSBuZXcgSW50ZXJhY3Rpb25NYW5hZ2VyKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXQvc2V0IGNhbnZhcydzIGJhY2tncm91bmQgY29sb3JcclxuICAgICAqIEBwYXJhbSBjb2xvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYmFja2dyb3VuZENvbG9yKGNvbG9yPzogaW50ZXJmYWNlcy5Db2xvcikge1xyXG4gICAgICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgICAgICB0aGlzLiRfY29uZmlncy5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvclxyXG4gICAgICAgICAgICB0aGlzLiRfcmVuZGVyZXIuc2V0QmFja2dyb3VuZENvbG9yKGNvbG9yKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy4kX2NvbmZpZ3MuYmFja2dyb3VuZENvbG9yXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gZGF0YSBnZXR0ZXIgc2V0dGVyXHJcbiAgICAgKiBAcGFyYW0gbm9kZUxpbmtEYXRhPyB0aGUgbm9kZS1saW5rLWRhdGEgb2YgYSBncmFwaCwgcHJvdmlkZWQ/c2V0dGVyOmdldHRlcjtcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRhdGEobm9kZUxpbmtEYXRhPzogaW50ZXJmYWNlcy5Ob2RlTGlua0RhdGEpIHtcclxuICAgICAgICBpZiAobm9kZUxpbmtEYXRhID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJF9kYXRhXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gZGVsZXRlIG9sZCBkYXRhXHJcbiAgICAgICAgICAgIHRoaXMuJF9kYXRhID0geyAuLi50aGlzLiRfZGF0YSwgLi4ubm9kZUxpbmtEYXRhIH1cclxuICAgICAgICAgICAgdGhpcy4kX2lkMm5vZGUgPSBuZXcgTWFwKClcclxuICAgICAgICAgICAgdGhpcy4kX2VuZHMybGluayA9IG5ldyBNYXAyKClcclxuICAgICAgICAgICAgdGhpcy4kX3NvdXJjZUlkMmxpbmtzID0gbmV3IE1hcCgpXHJcbiAgICAgICAgICAgIHRoaXMuJF90YXJnZXRJZDJsaW5rcyA9IG5ldyBNYXAoKVxyXG5cclxuICAgICAgICAgICAgdGhpcy4kX3JlbmRlcmVyLmNsZWFyRGF0YSgpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZE5vZGVzKHRoaXMuJF9kYXRhLm5vZGVzKVxyXG4gICAgICAgICAgICB0aGlzLmFkZExpbmtzKHRoaXMuJF9kYXRhLmxpbmtzKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBpbml0aWFsaXplIGFuZCBhZGQgYSBub2RlXHJcbiAgICAgKiBAcGFyYW0gbm9kZURhdGEgdGhlIGRhdGEgb2YgYSBub2RlLCBpbmNsdWRlIGlkLCBzdHlsZXMuLi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZE5vZGUobm9kZURhdGE6IGludGVyZmFjZXMuTm9kZURhdGEpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hZGROb2Rlcyhbbm9kZURhdGFdKVswXVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIGluaXRpYWxpemUgYW5kIGFkZCBhIGxpbmtcclxuICAgICAqIEBwYXJhbSBsaW5rRGF0YSB0aGUgZGF0YSBvZiBhIGxpbmssIGluY2x1ZGUgc291cmNlLCB0YXJnZXQsIGFuZCBzdHlsZXMuLi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZExpbmsobGlua0RhdGE6IGludGVyZmFjZXMuTGlua0RhdGEpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hZGRMaW5rcyhbbGlua0RhdGFdKVswXVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIGluaXRpYWxpemUgYW5kIGFkZCBhbiBhcnJheSBvZiBub2Rlcy5cclxuICAgICAqIEBwYXJhbSB7aW50ZXJmYWNlcy5Ob2RlRGF0YVtdfSBub2Rlc0RhdGE6IGEgZGF0YSBhcnJheSBvZiBub2RlcyB0b2JlIGFkZGVkXHJcbiAgICAgKiBAbWVtYmVyb2YgTmV0VlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkTm9kZXMobm9kZXNEYXRhOiBpbnRlcmZhY2VzLk5vZGVEYXRhW10pIHtcclxuICAgICAgICBjb25zdCBuZXdOb2RlcyA9IG5vZGVzRGF0YS5tYXAoKG5vZGVEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIG5vZGVEYXRhLmlkID0gbm9kZURhdGEuaWQudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICBjb25zdCBub2RlID0gbmV3IE5vZGUodGhpcywgbm9kZURhdGEpXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbm9kZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy4kX3JlbmRlcmVyLmFkZE5vZGVzKG5ld05vZGVzKVxyXG4gICAgICAgIHJldHVybiBuZXdOb2Rlc1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIGluaXRpYWxpemUgYW5kIGFkZCBhbiBhcnJheSBvZiBsaW5rcy5cclxuICAgICAqIEBwYXJhbSB7aW50ZXJmYWNlcy5MaW5rRGF0YVtdfSBsaW5rc0RhdGE6IGEgZGF0YSBhcnJheSBvZiBsaW5rcyB0b2JlIGFkZGVkXHJcbiAgICAgKiBAbWVtYmVyb2YgTmV0VlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkTGlua3MobGlua3NEYXRhOiBpbnRlcmZhY2VzLkxpbmtEYXRhW10pIHtcclxuICAgICAgICBjb25zdCBuZXdMaW5rcyA9IGxpbmtzRGF0YS5tYXAoKGxpbmtEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGxpbmtEYXRhLnNvdXJjZSA9IGxpbmtEYXRhLnNvdXJjZS50b1N0cmluZygpXHJcbiAgICAgICAgICAgIGxpbmtEYXRhLnRhcmdldCA9IGxpbmtEYXRhLnRhcmdldC50b1N0cmluZygpXHJcblxyXG4gICAgICAgICAgICBjb25zdCBsaW5rID0gbmV3IExpbmsodGhpcywgbGlua0RhdGEpXHJcbiAgICAgICAgICAgIHJldHVybiBsaW5rXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyB0aGlzLiRfcmVuZGVyZXIuYWRkTGlua3MobmV3TGlua3MpXHJcbiAgICAgICAgdGhpcy4kX3JlbmRlcmVyLmFkZExpbmtzKFsuLi50aGlzLiRfZW5kczJsaW5rLnZhbHVlcygpXSkgLy8gTk9URTogcHJlc2VydmUgbGluayBvcmRlciwgbm90IGVsZWdhbnRcclxuICAgICAgICByZXR1cm4gbmV3TGlua3NcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBnZXQgYSBOb2RlIG9iamVjdCBmcm9tIHRoZSBpZDJub2RlIE1hcCBkYXRhIHN0cnVjdHVyZVxyXG4gICAgICogQHBhcmFtIGlkIG5vZGUgaWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldE5vZGVCeUlkKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kX2lkMm5vZGUuZ2V0KGlkKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIGdldCBhIExpbmsgb2JqZWN0IGZyb20gdGhlIGVuZHMybGluayBNYXAyIGRhdGEgc3RydWN0dXJlXHJcbiAgICAgKiBAcGFyYW0gZW5kSWQxIG9uZSBlbmQgaWQgb2YgdGhlIGxpbmsgKHNvdXJjZSBvciB0YXJnZXQpXHJcbiAgICAgKiBAcGFyYW0gZW5kSWQyIGFub3RoZXIgZW5kIGlkIG9mIHRoZSBsaW5rIChzb3VyY2Ugb3IgdGFyZ2V0KVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0TGlua0J5RW5kcyhlbmRJZDE6IHN0cmluZywgZW5kSWQyOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kX2VuZHMybGluay5nZXQoW2VuZElkMSwgZW5kSWQyXSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBnZXQgYWxsIG5vZGVzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBub2RlcygpOiBOb2RlW10ge1xyXG4gICAgICAgIHJldHVybiBbLi4udGhpcy4kX2lkMm5vZGUudmFsdWVzKCldXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gZ2V0IGFsbCBsaW5rc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbGlua3MoKTogTGlua1tdIHtcclxuICAgICAgICByZXR1cm4gWy4uLnRoaXMuJF9lbmRzMmxpbmsudmFsdWVzKCldXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gd2lwZSBhbGwgdGhlIGRhdGEgaW4gdGhlIGluc3RhbmNlXHJcbiAgICAgKiBAbWVtYmVyb2YgTmV0VlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgd2lwZSgpIHtcclxuICAgICAgICB0aGlzLiRfZGF0YSA9IHVuZGVmaW5lZFxyXG4gICAgICAgIHRoaXMuJF9pZDJub2RlID0gbmV3IE1hcCgpXHJcbiAgICAgICAgdGhpcy4kX2VuZHMybGluayA9IG5ldyBNYXAyKClcclxuICAgICAgICB0aGlzLiRfc291cmNlSWQybGlua3MgPSBuZXcgTWFwKClcclxuICAgICAgICB0aGlzLiRfdGFyZ2V0SWQybGlua3MgPSBuZXcgTWFwKClcclxuICAgICAgICB0aGlzLiRfcmVuZGVyZXIuY2xlYXJEYXRhKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiByZXR1cm4gYnVpbGQtaW4gZGF0YXNldCBhY2NvcmRpbmcgdG8gbmFtZVxyXG4gICAgICogQHBhcmFtIG5hbWUgZGF0YXNldCBuYW1lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkRGF0YXNldChuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAobmFtZSBpbiBkYXRhc2V0KSByZXR1cm4gZGF0YXNldFtuYW1lXVxyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKGBOZXRWIGRvZXMgbm90IGhhdmUgYnVpbGQtaW4gZGF0YXNldDogJHtuYW1lfWApXHJcbiAgICAgICAgcmV0dXJuIHsgbm9kZXM6IFtdLCBsaW5rczogW10gfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2l2ZW4gcG9zaXRpb24sIHJldHVybiBlbGVtZW50IG9uIHRoaXMgcGl4ZWwgaWYgZXhpc3RzXHJcbiAgICAgKiBAcGFyYW0geCB4IHBvc1xyXG4gICAgICogQHBhcmFtIHkgeSBwb3NcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEVsZW1lbnRCeVBvc2l0aW9uKFxyXG4gICAgICAgIHBvc2l0aW9uOiBpbnRlcmZhY2VzLlBvc2l0aW9uXHJcbiAgICApOiB7IHR5cGU6ICdub2RlJyB8ICdsaW5rJzsgZWxlbWVudDogTm9kZSB8IExpbmsgfSB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLiRfcmVuZGVyZXIuZ2V0SWRCeVBvc2l0aW9uKHBvc2l0aW9uKVxyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGlkID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5SWQoaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub2RlJyxcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBub2RlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaWQpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5rID0gdGhpcy5nZXRMaW5rQnlFbmRzKGlkWzBdLCBpZFsxXSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2xpbmsnLFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGxpbmtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBkcmF3IGVsZW1lbnRzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuJF9yZW5kZXJlci5kcmF3KClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHBhbiBvbiBjYW52YXMgdG8gZ2V0IGdpdmVuIG5vZGUgY2VudGVyZWRcclxuICAgICAqIEBwYXJhbSBub2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjZW50ZXJPbihub2RlOiBOb2RlKSB7XHJcbiAgICAgICAgY29uc3QgcG9zID0gbm9kZS5wb3NpdGlvbigpXHJcbiAgICAgICAgdGhpcy4kX2ludGVyYWN0aW9uTWFuYWdlci5jZW50ZXJQb3NpdGlvbihwb3MpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBwcm9nbWF0aWNhbGx5IHBhblxyXG4gICAgICogQHBhcmFtIHhcclxuICAgICAqIEBwYXJhbSB5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwYW5CeSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuJF9pbnRlcmFjdGlvbk1hbmFnZXIucGFuQnkoeCwgeSlcclxuICAgICAgICB0aGlzLmRyYXcoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcHJvZ21hdGljYWxseSB6b29tXHJcbiAgICAgKiBAcGFyYW0gZmFjdG9yIHpvb20gZmFjdG9yXHJcbiAgICAgKiBAcGFyYW0gY2VudGVyIG9wdGlvbmFsLCB6b29tIGNlbnRlciBwb3NpdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgem9vbUJ5KGZhY3RvcjogbnVtYmVyLCBjZW50ZXI/OiBQb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMuJF9pbnRlcmFjdGlvbk1hbmFnZXIuem9vbUJ5KGZhY3RvciwgY2VudGVyKVxyXG4gICAgICAgIHRoaXMuZHJhdygpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXQvc2V0IG5ldHYncyB0cmFuc2Zvcm1cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBvcHRpb25hbCwgdHJhbnNmb3JtIHRvIHNldFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdHJhbnNmb3JtKHZhbHVlPzogaW50ZXJmYWNlcy5UcmFuc2Zvcm0pIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kX3RyYW5zZm9ybVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiRfdHJhbnNmb3JtID0gdmFsdWVcclxuICAgICAgICB0aGlzLiRfcmVuZGVyZXIuc2V0VHJhbnNmb3JtKHRoaXMuJF90cmFuc2Zvcm0pXHJcbiAgICAgICAgdGhpcy5sYWJlbE1hbmFnZXIuc2V0VHJhbnNmb3JtKHRoaXMuJF90cmFuc2Zvcm0pXHJcbiAgICAgICAgdGhpcy5kcmF3KClcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgKiBAbWVtYmVyb2YgTmV0VlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb24oZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrPzogKGU6IGFueSkgPT4gYW55KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50TmFtZS50b0xvd2VyQ2FzZSgpID09PSAnem9vbScpIHtcclxuICAgICAgICAgICAgdGhpcy4kX2ludGVyYWN0aW9uTWFuYWdlci5vblpvb20oY2FsbGJhY2spXHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudE5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3BhbicpIHtcclxuICAgICAgICAgICAgdGhpcy4kX2ludGVyYWN0aW9uTWFuYWdlci5vblBhbihjYWxsYmFjaylcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50TmFtZS50b0xvd2VyQ2FzZSgpID09PSAnbGFzc28nKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsYXNzJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gdHVybiBvZmYgZXZlbnQgbGlzdGVuZXJcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTmV0VlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb2ZmKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjaz86IChlOiBhbnkpID0+IGFueSkge1xyXG4gICAgICAgIGlmIChldmVudE5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3pvb20nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9pbnRlcmFjdGlvbk1hbmFnZXIub2ZmWm9vbShjYWxsYmFjaylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIC8vIHRvIGVuc3VyZSB3aW5kb3cuTmV0ViB3aWxsIG5vdCByZXBvcnQgdHMgZXJyb3JcclxuICAgIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgICAgIE5ldFY6IGFueVxyXG4gICAgfVxyXG59XHJcblxyXG53aW5kb3cuTmV0ViA9IE5ldFZcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XHJcbiAqIEBkZXNjcmlwdGlvbiBoYW5kbGUgYWxsIGludGVyYWN0aW9uIGluIE5ldFZcclxuICovXHJcblxyXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uL2ludGVyZmFjZXMnXHJcbmltcG9ydCBOZXRWIGZyb20gJ3NyYydcclxuaW1wb3J0IE5vZGUgZnJvbSAnLi4vZWxlbWVudHMvbm9kZSdcclxuaW1wb3J0IEVsZW1lbnQgZnJvbSAnLi4vZWxlbWVudHMvZWxlbWVudCdcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnRlcmFjdGlvbk1hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBuZXR2OiBOZXRWXHJcbiAgICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnRcclxuXHJcbiAgICBwcml2YXRlIGlzWm9vbUxpc3RlbmVkID0gZmFsc2VcclxuICAgIHByaXZhdGUgaXNNb3VzZUxpc3RlbmVkID0gZmFsc2VcclxuICAgIHByaXZhdGUgbW91c2VFdmVudENhbGxiYWNrQ291bnQgPSAwXHJcblxyXG4gICAgLy8gbWFwIHVzZXIgZGVmaW5lZCBjYWxsYmFjayA9PiBoYW5kbGVycywgY2FuIGJlIHVzZSB0byByZW1vdmUgbGlzdGVuZXJzXHJcbiAgICBwcml2YXRlIHpvb21DYWxsYmFja1NldDogU2V0PChlOiBhbnkpID0+IGFueT5cclxuICAgIHByaXZhdGUgcGFuQ2FsbGJhY2tTZXQ6IFNldDwoZTogYW55KSA9PiBhbnk+XHJcblxyXG4gICAgcHJpdmF0ZSBpc01vdXNlRG93biA9IGZhbHNlXHJcbiAgICBwcml2YXRlIGlzTW91c2VNb3ZlID0gZmFsc2VcclxuICAgIHByaXZhdGUgbW91c2VEb3duRWxlbWVudFxyXG4gICAgcHJpdmF0ZSBtb3VzZURvd25FbGVtZW50T3JpZ2luUG9zOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gLy8gTk9URTogcmVjb3JkIHBvcywgb25seSBzdXBwb3J0IG5vZGUncyBkcmFnXHJcblxyXG4gICAgcHJpdmF0ZSBtb3VzZURvd25Qb3M6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVxyXG4gICAgcHJpdmF0ZSBkcmFnU3RhcnRUcmFuc2Zvcm06IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IGs6IG51bWJlciB9XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG5ldHY6IE5ldFYpIHtcclxuICAgICAgICB0aGlzLm5ldHYgPSBuZXR2XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSB0aGlzLm5ldHYuJF9jb250YWluZXIucXVlcnlTZWxlY3RvcignY2FudmFzJylcclxuICAgICAgICB0aGlzLnpvb21DYWxsYmFja1NldCA9IG5ldyBTZXQoKVxyXG4gICAgICAgIHRoaXMucGFuQ2FsbGJhY2tTZXQgPSBuZXcgU2V0KClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHByb2dtYXRpY2FsbHkgcGFuXHJcbiAgICAgKiBAcGFyYW0geFxyXG4gICAgICogQHBhcmFtIHlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBhbkJ5KHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgbmV3VHJhbnNmb3JtID0geyAuLi50aGlzLm5ldHYuJF90cmFuc2Zvcm0gfVxyXG4gICAgICAgIG5ld1RyYW5zZm9ybS54ICs9IHhcclxuICAgICAgICBuZXdUcmFuc2Zvcm0ueSArPSB5XHJcbiAgICAgICAgdGhpcy5uZXR2LnRyYW5zZm9ybShuZXdUcmFuc2Zvcm0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBwcm9nbWF0aWNhbGx5IHpvb21cclxuICAgICAqIEBwYXJhbSBmYWN0b3Igem9vbSBmYWN0b3JcclxuICAgICAqIEBwYXJhbSBjZW50ZXIgb3B0aW9uYWwsIHpvb20gY2VudGVyIHBvc2l0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB6b29tQnkoZmFjdG9yOiBudW1iZXIsIGNlbnRlcj86IFBvc2l0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgbmV3VHJhbnNmb3JtID0geyAuLi50aGlzLm5ldHYuJF90cmFuc2Zvcm0gfVxyXG4gICAgICAgIGxldCBjZW50ZXJQb3MgPSBjZW50ZXJcclxuICAgICAgICBpZiAoIWNlbnRlclBvcykge1xyXG4gICAgICAgICAgICBjZW50ZXJQb3MgPSB7IHg6IHRoaXMubmV0di4kX2NvbmZpZ3Mud2lkdGggLyAyLCB5OiB0aGlzLm5ldHYuJF9jb25maWdzLmhlaWdodCAvIDIgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IGNlbnRlclBvc1xyXG5cclxuICAgICAgICBuZXdUcmFuc2Zvcm0ueCA9ICgxIC0gZmFjdG9yKSAqIHggKyBmYWN0b3IgKiBuZXdUcmFuc2Zvcm0ueFxyXG4gICAgICAgIG5ld1RyYW5zZm9ybS55ID0gKDEgLSBmYWN0b3IpICogeSArIGZhY3RvciAqIG5ld1RyYW5zZm9ybS55XHJcblxyXG4gICAgICAgIG5ld1RyYW5zZm9ybS5rICo9IGZhY3RvclxyXG5cclxuICAgICAgICB0aGlzLm5ldHYudHJhbnNmb3JtKG5ld1RyYW5zZm9ybSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG1vdmUgY3VycmVudCBwb3NpdGlvbiB0byBjZW50ZXIgb2YgY2FudmFzXHJcbiAgICAgKiBAcGFyYW0gcG9zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjZW50ZXJQb3NpdGlvbihwb3M6IFBvc2l0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgbmV3VHJhbnNmb3JtID0geyAuLi50aGlzLm5ldHYuJF90cmFuc2Zvcm0gfVxyXG4gICAgICAgIGNvbnN0IHggPSBwb3MueCAqIG5ld1RyYW5zZm9ybS5rICsgbmV3VHJhbnNmb3JtLnhcclxuICAgICAgICBjb25zdCB5ID0gcG9zLnkgKiBuZXdUcmFuc2Zvcm0uayArIG5ld1RyYW5zZm9ybS55XHJcbiAgICAgICAgY29uc3QgY2VudGVyID0ge1xyXG4gICAgICAgICAgICB4OiB0aGlzLm5ldHYuJF9jb25maWdzLndpZHRoIC8gMixcclxuICAgICAgICAgICAgeTogdGhpcy5uZXR2LiRfY29uZmlncy5oZWlnaHQgLyAyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIG5ld1RyYW5zZm9ybS54ICs9IGNlbnRlci54IC0geFxyXG4gICAgICAgIC8vIG5ld1RyYW5zZm9ybS55ICs9IGNlbnRlci55IC0geVxyXG4gICAgICAgIC8vIGludGVycG9sYXRpb25cclxuICAgICAgICBjb25zdCBzdGVwQ291bnQgPSAyMFxyXG4gICAgICAgIGNvbnN0IGRpZmZlcmVuY2UgPSB7XHJcbiAgICAgICAgICAgIHg6IGNlbnRlci54IC0geCxcclxuICAgICAgICAgICAgeTogY2VudGVyLnkgLSB5XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG9yaWdpblRyYW5zbGF0ZSA9IHtcclxuICAgICAgICAgICAgeDogbmV3VHJhbnNmb3JtLngsXHJcbiAgICAgICAgICAgIHk6IG5ld1RyYW5zZm9ybS55XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlYXNlID0gKHgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHggKiB4XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc3RlcHMgPSAxXHJcblxyXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgbmV3VHJhbnNmb3JtLnggPSBvcmlnaW5UcmFuc2xhdGUueCArIGRpZmZlcmVuY2UueCAqIGVhc2Uoc3RlcHMgLyBzdGVwQ291bnQpXHJcbiAgICAgICAgICAgIG5ld1RyYW5zZm9ybS55ID0gb3JpZ2luVHJhbnNsYXRlLnkgKyBkaWZmZXJlbmNlLnkgKiBlYXNlKHN0ZXBzIC8gc3RlcENvdW50KVxyXG5cclxuICAgICAgICAgICAgdGhpcy5uZXR2LnRyYW5zZm9ybShuZXdUcmFuc2Zvcm0pXHJcblxyXG4gICAgICAgICAgICBzdGVwcyArPSAxXHJcbiAgICAgICAgICAgIGlmIChzdGVwcyA+IHN0ZXBDb3VudCkgY2xlYXJJbnRlcnZhbChhbmltYXRpb24pXHJcbiAgICAgICAgfSwgNTAwIC8gc3RlcENvdW50KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaW5pdCB6b29tIGludGVyYWN0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvblpvb20oY2FsbGJhY2s6IChlOiBhbnkpID0+IGFueSkge1xyXG4gICAgICAgIHRoaXMuem9vbUNhbGxiYWNrU2V0LmFkZChjYWxsYmFjaylcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzWm9vbUxpc3RlbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkV2hlZWxMaXN0ZW5lcnMoKVxyXG4gICAgICAgICAgICB0aGlzLmlzWm9vbUxpc3RlbmVkID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb2ZmWm9vbShjYWxsYmFjazogKGU6IGFueSkgPT4gYW55KSB7XHJcbiAgICAgICAgdGhpcy56b29tQ2FsbGJhY2tTZXQuZGVsZXRlKGNhbGxiYWNrKVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuem9vbUNhbGxiYWNrU2V0LnNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVXaGVlbExpc3RlbmVycygpXHJcbiAgICAgICAgICAgIHRoaXMuaXNab29tTGlzdGVuZWQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25QYW4oY2FsbGJhY2s6IChlOiBhbnkpID0+IGFueSkge1xyXG4gICAgICAgIHRoaXMucGFuQ2FsbGJhY2tTZXQuYWRkKGNhbGxiYWNrKVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNNb3VzZUxpc3RlbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTW91c2VMaXN0ZW5lcnMoKVxyXG4gICAgICAgICAgICB0aGlzLmlzTW91c2VMaXN0ZW5lZCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9mZlBhbihjYWxsYmFjazogKGU6IGFueSkgPT4gYW55KSB7XHJcbiAgICAgICAgdGhpcy5wYW5DYWxsYmFja1NldC5kZWxldGUoY2FsbGJhY2spXHJcblxyXG4gICAgICAgIGlmICghdGhpcy5wYW5DYWxsYmFja1NldC5zaXplICYmIHRoaXMubW91c2VFdmVudENhbGxiYWNrQ291bnQgPD0gMCkge1xyXG4gICAgICAgICAgICAvLyBubyBwYW4gY2FsbGJhY2sgZnVuY3Rpb25zIGFuZCBubyBsaXN0ZW5lZCBtb3VzZSBldmVudCBvbiBlbGVtZW50c1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZU1vdXNlTGlzdGVuZXJzKClcclxuICAgICAgICAgICAgdGhpcy5pc01vdXNlTGlzdGVuZWQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5jcmVhc2VNb3VzZUV2ZW50Q2FsbGJhY2tDb3VudEJ5KG46IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubW91c2VFdmVudENhbGxiYWNrQ291bnQgKz0gblxyXG4gICAgICAgIGlmICghdGhpcy5pc01vdXNlTGlzdGVuZWQgJiYgdGhpcy5tb3VzZUV2ZW50Q2FsbGJhY2tDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgLy8gdGhlcmUgaXMgc29tZSBtb3VzZSBldmVudCBsaXN0ZW5lZCBlbGVtZW50c1xyXG4gICAgICAgICAgICB0aGlzLmFkZE1vdXNlTGlzdGVuZXJzKClcclxuICAgICAgICAgICAgdGhpcy5pc01vdXNlTGlzdGVuZWQgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWNyZWFzZU1vdXNlRXZlbnRDYWxsYmFja0NvdW50QnkobjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5tb3VzZUV2ZW50Q2FsbGJhY2tDb3VudCAtPSBuXHJcbiAgICAgICAgaWYgKHRoaXMubW91c2VFdmVudENhbGxiYWNrQ291bnQgPD0gMCAmJiAhdGhpcy5wYW5DYWxsYmFja1NldC5zaXplKSB7XHJcbiAgICAgICAgICAgIC8vIG5vIHBhbiBjYWxsYmFjayBmdW5jdGlvbnMgYW5kIG5vIG1vdXNlIGV2ZW50IGxpc3RlbmVkIGVsZW1lbnRzXHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlTW91c2VMaXN0ZW5lcnMoKVxyXG4gICAgICAgICAgICB0aGlzLmlzTW91c2VMaXN0ZW5lZCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByaXZhdGUgaGFuZGxlIHpvb20gKG1vdXNlIHdoZWVsKSBldmVudFxyXG4gICAgICogQHBhcmFtIHtXaGVlbEV2ZW50fSBldnRcclxuICAgICAqIEBtZW1iZXJvZiBJbnRlcmFjdGlvbk1hbmFnZXJcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVab29tKGV2dDogV2hlZWxFdmVudCkge1xyXG4gICAgICAgIGNvbnN0IG5ld1RyYW5zZm9ybSA9IHsgLi4udGhpcy5uZXR2LiRfdHJhbnNmb3JtIH1cclxuICAgICAgICBjb25zdCB4ID0gZXZ0Lm9mZnNldFggfHwgZXZ0LnBhZ2VYIC0gdGhpcy5jYW52YXMub2Zmc2V0TGVmdFxyXG4gICAgICAgIGNvbnN0IHkgPSBldnQub2Zmc2V0WSB8fCBldnQucGFnZVkgLSB0aGlzLmNhbnZhcy5vZmZzZXRUb3BcclxuICAgICAgICBjb25zdCBkZWx0YSA9IGV2dC5kZWx0YVkgPyBldnQuZGVsdGFZIC8gNDAgOiBldnQuZGV0YWlsID8gLWV2dC5kZXRhaWwgOiAwXHJcbiAgICAgICAgaWYgKGRlbHRhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGsgPSBNYXRoLnBvdygxLjEsIGRlbHRhKVxyXG4gICAgICAgICAgICBuZXdUcmFuc2Zvcm0ueCA9ICgxIC0gaykgKiB4ICsgayAqIG5ld1RyYW5zZm9ybS54XHJcbiAgICAgICAgICAgIG5ld1RyYW5zZm9ybS55ID0gKDEgLSBrKSAqIHkgKyBrICogbmV3VHJhbnNmb3JtLnlcclxuXHJcbiAgICAgICAgICAgIG5ld1RyYW5zZm9ybS5rICo9IGtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubmV0di50cmFuc2Zvcm0obmV3VHJhbnNmb3JtKVxyXG5cclxuICAgICAgICAgICAgdGhpcy56b29tQ2FsbGJhY2tTZXQuZm9yRWFjaCgoY2FsbGJhY2spID0+XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2dCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnem9vbScsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBuZXdUcmFuc2Zvcm1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJpdmF0ZSBoYW5kbGUgbW91c2UgZG93biBldmVudFxyXG4gICAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldnRcclxuICAgICAqIEBtZW1iZXJvZiBJbnRlcmFjdGlvbk1hbmFnZXJcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVNb3VzZURvd24oZXZ0OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGV2dC5vZmZzZXRYIHx8IGV2dC5wYWdlWCAtIHRoaXMuY2FudmFzLm9mZnNldExlZnRcclxuICAgICAgICBjb25zdCB5ID0gZXZ0Lm9mZnNldFkgfHwgZXZ0LnBhZ2VZIC0gdGhpcy5jYW52YXMub2Zmc2V0VG9wXHJcbiAgICAgICAgY29uc3QgeUludiA9IHRoaXMubmV0di4kX2NvbmZpZ3MuaGVpZ2h0IC0geVxyXG5cclxuICAgICAgICBjb25zdCBuZXdUcmFuc2Zvcm0gPSB7IC4uLnRoaXMubmV0di4kX3RyYW5zZm9ybSB9XHJcblxyXG4gICAgICAgIHRoaXMuaXNNb3VzZURvd24gPSB0cnVlXHJcbiAgICAgICAgdGhpcy5tb3VzZURvd25Qb3MgPSB7IHgsIHkgfVxyXG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0VHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShuZXdUcmFuc2Zvcm0pKVxyXG5cclxuICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnQgPSB0aGlzLm5ldHYuZ2V0RWxlbWVudEJ5UG9zaXRpb24oe1xyXG4gICAgICAgICAgICB4LFxyXG4gICAgICAgICAgICB5OiB5SW52XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubW91c2VEb3duRWxlbWVudD8uZWxlbWVudC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnTm9kZScpIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubW91c2VEb3duRWxlbWVudC5lbGVtZW50IGFzIE5vZGUgLy8gb25seSBub2RlIGNhbiBiZSBkcmFnZ2VkXHJcbiAgICAgICAgICAgIC8vIHJlY29yZCBvcmdpbiBwb3NpdGlvbiBmb3IgZHJhZ1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnRPcmlnaW5Qb3MgPSB7IC4uLmVsZW1lbnQucG9zaXRpb24oKSB9XHJcbiAgICAgICAgICAgIGVsZW1lbnQuJF9tb3VzZWRvd25DYWxsYmFja1NldC5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldnQsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ21vdXNlZG93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJpdmF0ZSBoYW5kbGUgbW91c2UgbW92ZSBldmVudFxyXG4gICAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldnRcclxuICAgICAqIEBtZW1iZXJvZiBJbnRlcmFjdGlvbk1hbmFnZXJcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVNb3VzZU1vdmUoZXZ0OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgbGV0IG5ld1RyYW5zZm9ybSA9IHsgLi4udGhpcy5uZXR2LiRfdHJhbnNmb3JtIH1cclxuICAgICAgICBjb25zdCB4ID0gZXZ0Lm9mZnNldFggfHwgZXZ0LnBhZ2VYIC0gdGhpcy5jYW52YXMub2Zmc2V0TGVmdFxyXG4gICAgICAgIGNvbnN0IHkgPSBldnQub2Zmc2V0WSB8fCBldnQucGFnZVkgLSB0aGlzLmNhbnZhcy5vZmZzZXRUb3BcclxuXHJcbiAgICAgICAgY29uc3QgbGFzdElzTW91c2VNb3ZlID0gdGhpcy5pc01vdXNlTW92ZVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc01vdXNlRG93bikge1xyXG4gICAgICAgICAgICB0aGlzLmlzTW91c2VNb3ZlID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgIXRoaXMubW91c2VEb3duRWxlbWVudCB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50LmVsZW1lbnQuY29uc3RydWN0b3IubmFtZSAhPT0gJ05vZGUnXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgLy8gcGFuLCB3aGVuIG5vdCBkcmFnZ2luZyBub2RlXHJcbiAgICAgICAgICAgICAgICBuZXdUcmFuc2Zvcm0ueCA9IHRoaXMuZHJhZ1N0YXJ0VHJhbnNmb3JtLnggKyB4IC0gdGhpcy5tb3VzZURvd25Qb3MueFxyXG4gICAgICAgICAgICAgICAgbmV3VHJhbnNmb3JtLnkgPSB0aGlzLmRyYWdTdGFydFRyYW5zZm9ybS55ICsgeSAtIHRoaXMubW91c2VEb3duUG9zLnlcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhbkNhbGxiYWNrU2V0LnNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ldHYudHJhbnNmb3JtKG5ld1RyYW5zZm9ybSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhbkNhbGxiYWNrU2V0LmZvckVhY2goKGNhbGxiYWNrKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudDogZXZ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3BhbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IG5ld1RyYW5zZm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGRyYWcgbm9kZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudDogTm9kZSA9IHRoaXMubW91c2VEb3duRWxlbWVudC5lbGVtZW50XHJcbiAgICAgICAgICAgICAgICBpZiAoIWxhc3RJc01vdXNlTW92ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxhc3QgdGltZSwgdGhlIG1vdXNlIGlzIG5vdCBtb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC4kX2RyYWdzdGFydENhbGxiYWNrU2V0LmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZHJhZ3N0YXJ0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LiRfZHJhZ3N0YXJ0Q2FsbGJhY2tTZXQuc2l6ZSArXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC4kX2RyYWdnaW5nQ2FsbGJhY2tTZXQuc2l6ZSArXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC4kX2RyYWdlbmRDYWxsYmFja1NldC5zaXplXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBkcmFnIG5vZGVcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBvc2l0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudE9yaWdpblBvcy54ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh4IC0gdGhpcy5tb3VzZURvd25Qb3MueCkgLyBuZXdUcmFuc2Zvcm0uayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudE9yaWdpblBvcy55ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh5IC0gdGhpcy5tb3VzZURvd25Qb3MueSkgLyBuZXdUcmFuc2Zvcm0ua1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV0di5kcmF3KClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBkcmFnZ2luZywgZHluYW1pYyBjaGFuZ2UgbGFiZWwncyBwb3NpdGlvbi4gYmVjYXVzZSBvbmx5IG9wZXJhdGUgb24gc2luZ2xlIGVsZW1lbnQsIGl0J3Mgb2sgdG8gcmVtb3ZlIGFuZCByZWNyZWF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2hvd0xhYmVsKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2hvd0xhYmVsKHRydWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC4kX2RyYWdnaW5nQ2FsbGJhY2tTZXQuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcmFnZ2luZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGhvdmVyXHJcbiAgICAgICAgICAgIGNvbnN0IHlJbnYgPSB0aGlzLm5ldHYuJF9jb25maWdzLmhlaWdodCAtIHlcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubmV0di5nZXRFbGVtZW50QnlQb3NpdGlvbih7IHgsIHk6IHlJbnYgfSk/LmVsZW1lbnRcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQ/LiRfaG92ZXJDYWxsYmFja1NldC5zaXplKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LiRfaG92ZXJDYWxsYmFja1NldC5mb3JFYWNoKChjYWxsYmFjaykgPT5cclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdob3ZlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByaXZhdGUgaGFuZGxlIG1vdXNlIHVwIGV2ZW50XHJcbiAgICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2dFxyXG4gICAgICogQG1lbWJlcm9mIEludGVyYWN0aW9uTWFuYWdlclxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZU1vdXNlVXAoZXZ0OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW91c2VEb3duRWxlbWVudCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc01vdXNlTW92ZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gZHJhZ1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW91c2VEb3duRWxlbWVudD8uZWxlbWVudC4kX2RyYWdlbmRDYWxsYmFja1NldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLm1vdXNlRG93bkVsZW1lbnQuZWxlbWVudCBhcyBOb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC4kX2RyYWdlbmRDYWxsYmFja1NldC5mb3JFYWNoKChjYWxsYmFjaykgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcmFnZW5kJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjbGlja1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubW91c2VEb3duRWxlbWVudC5lbGVtZW50XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LiRfY2xpY2tDYWxsYmFja1NldC5mb3JFYWNoKChjYWxsYmFjaykgPT5cclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbGljaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIG1vdXNldXBcclxuICAgICAgICAgICAgaWYgKHRoaXMubW91c2VEb3duRWxlbWVudD8uZWxlbWVudC4kX21vdXNldXBDYWxsYmFja1NldCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubW91c2VEb3duRWxlbWVudC5lbGVtZW50IGFzIEVsZW1lbnRcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuJF9tb3VzZXVwQ2FsbGJhY2tTZXQuZm9yRWFjaCgoY2FsbGJhY2spID0+XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudDogZXZ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbW91c2V1cCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNNb3VzZURvd24gPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuaXNNb3VzZU1vdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudCA9IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkV2hlZWxMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCB0aGlzLmhhbmRsZVpvb20uYmluZCh0aGlzKSwgZmFsc2UpXHJcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMuaGFuZGxlWm9vbS5iaW5kKHRoaXMpLCBmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZVdoZWVsTGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgdGhpcy5oYW5kbGVab29tLmJpbmQodGhpcykpXHJcbiAgICAgICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMuaGFuZGxlWm9vbS5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkTW91c2VMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXNcclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNb3VzZURvd24uYmluZCh0aGlzKSlcclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUuYmluZCh0aGlzKSlcclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuaGFuZGxlTW91c2VVcC5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlTW91c2VMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXNcclxuICAgICAgICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNb3VzZURvd24uYmluZCh0aGlzKSlcclxuICAgICAgICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUuYmluZCh0aGlzKSlcclxuICAgICAgICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuaGFuZGxlTW91c2VVcC5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIFhpYW9kb25nIFpoYW8gPHpoYW94aWFvZG9uZ0B6anUuZWR1LmNuPlxyXG4gKiBAZGVzY3JpcHRpb24gZ3JhcGggbGFiZWwgcmVsYXRlZCBjbGFzcyBvciBtZXRob2RcclxuICovXHJcblxyXG5pbXBvcnQgTmV0ViBmcm9tICdzcmMnXHJcbmltcG9ydCBOb2RlIGZyb20gJ3NyYy9lbGVtZW50cy9ub2RlJ1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi9pbnRlcmZhY2VzJ1xyXG5cclxuZXhwb3J0IGNsYXNzIExhYmVsTWFuYWdlciB7XHJcbiAgICBwcml2YXRlICRfY29yZTogTmV0VlxyXG4gICAgcHJpdmF0ZSAkX3N2ZzogU1ZHRWxlbWVudFxyXG4gICAgcHJpdmF0ZSAkX29mZnNldDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XHJcbiAgICBwcml2YXRlICRfZm9udFNpemU6IG51bWJlclxyXG4gICAgcHJpdmF0ZSAkX3N0cm9rZVdpZHRoOiBudW1iZXJcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoY29yZTogTmV0Vikge1xyXG4gICAgICAgIHRoaXMuJF9jb3JlID0gY29yZVxyXG5cclxuICAgICAgICB0aGlzLiRfc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKSBhcyBTVkdFbGVtZW50XHJcbiAgICAgICAgY29yZS4kX2NvbnRhaW5lci5wcmVwZW5kKHRoaXMuJF9zdmcpXHJcbiAgICAgICAgdGhpcy4kX3N2Zy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgY29yZS4kX2NvbmZpZ3Mud2lkdGgpXHJcbiAgICAgICAgdGhpcy4kX3N2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGNvcmUuJF9jb25maWdzLmhlaWdodClcclxuICAgICAgICBjb3JlLiRfY29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJ1xyXG4gICAgICAgIGNvcmUuJF9jb250YWluZXIuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xyXG4gICAgICAgIGNvcmUuJF9jb250YWluZXIuc3R5bGUud2lkdGggPSBjb3JlLiRfY29uZmlncy53aWR0aFxyXG4gICAgICAgIGNvcmUuJF9jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gY29yZS4kX2NvbmZpZ3MuaGVpZ2h0XHJcbiAgICAgICAgdGhpcy4kX3N2Zy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcclxuICAgICAgICB0aGlzLiRfc3ZnLnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnXHJcbiAgICAgICAgdGhpcy4kX3N2Zy5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnXHJcblxyXG4gICAgICAgIHRoaXMuJF9vZmZzZXQgPSB0aGlzLiRfY29yZS4kX2NvbmZpZ3MubGFiZWwub2Zmc2V0XHJcbiAgICAgICAgdGhpcy4kX2ZvbnRTaXplID0gdGhpcy4kX2NvcmUuJF9jb25maWdzLmxhYmVsLmZvbnRTaXplXHJcbiAgICAgICAgdGhpcy4kX3N0cm9rZVdpZHRoID0gdGhpcy4kX2NvcmUuJF9jb25maWdzLmxhYmVsLnN0cm9rZVdpZHRoXHJcbiAgICAgICAgdGhpcy4kX3N2Zy5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt0aGlzLiRfb2Zmc2V0Lnh9ICR7dGhpcy4kX29mZnNldC55fSlgKVxyXG4gICAgICAgIHRoaXMuJF9zdmcuc2V0QXR0cmlidXRlKCdmb250LXNpemUnLCBgJHt0aGlzLiRfZm9udFNpemV9cHhgKVxyXG4gICAgICAgIHRoaXMuJF9zdmcuc2V0QXR0cmlidXRlKCdzdHJva2UnLCBgd2hpdGVgKVxyXG4gICAgICAgIHRoaXMuJF9zdmcuc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCBgJHt0aGlzLiRfc3Ryb2tlV2lkdGh9cHhgKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZHJhdyBub2RlJ3MgbGFiZWxcclxuICAgICAqIEBwYXJhbSBub2RlIG5vZGUgdG8gYWRkIGxhYmVsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkcmF3TGFiZWwobm9kZTogTm9kZSkge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IG5vZGUucG9zaXRpb24oKVxyXG4gICAgICAgIGNvbnN0IHRleHQgPSBub2RlLnRleHQoKVxyXG5cclxuICAgICAgICBpZiAoIXRleHQpIHJldHVyblxyXG5cclxuICAgICAgICBjb25zdCB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAndGV4dCcpXHJcbiAgICAgICAgdGV4dEVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIG5vZGUuaWQoKSlcclxuICAgICAgICB0ZXh0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3gnLCBTdHJpbmcocG9zLngpKVxyXG4gICAgICAgIHRleHRFbGVtZW50LnNldEF0dHJpYnV0ZSgneScsIFN0cmluZyhwb3MueSkpXHJcbiAgICAgICAgdGV4dEVsZW1lbnQuc2V0QXR0cmlidXRlKCd0ZXh0LWFuY2hvcicsICdzdGFydCcpXHJcbiAgICAgICAgdGV4dEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnbWlkZGxlJylcclxuICAgICAgICB0ZXh0RWxlbWVudC5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnIC8vIE5PVEU6IHByZXZlbnQgdW5leHBlY3RlZCBzZWxlY3Rpb24gd2hlbiBkcmFnZ2luZyBub2RlKGRlbGV0ZSBhbmQgcmVjcmVhdGUgdGV4dEVsZW1lbnQpXHJcbiAgICAgICAgdGV4dEVsZW1lbnQuaW5uZXJIVE1MID0gdGV4dFxyXG5cclxuICAgICAgICB0aGlzLiRfc3ZnLnByZXBlbmQodGV4dEVsZW1lbnQpIC8vIE5PVEU6IG1ha2UgbGFzdCBhZGRlZCB0ZXh0IGF0IHRvcFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVtb3ZlIG5vZGUncyBsYWJlbFxyXG4gICAgICogQHBhcmFtIG5vZGUgbm9kZSB0byBkZWxldGUgbGFiZWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlbW92ZUxhYmVsKG5vZGU6IE5vZGUpIHtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgdGhpcy4kX3N2Zy5nZXRFbGVtZW50QnlJZChub2RlLmlkKCkpPy5yZW1vdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0IHZpZXdwb3J0IHRyYW5zZm9ybVxyXG4gICAgICogQHBhcmFtIHRyYW5zZm9ybVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0VHJhbnNmb3JtKHRyYW5zZm9ybTogVHJhbnNmb3JtKSB7XHJcbiAgICAgICAgdGhpcy4kX3N2Zy5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICd0cmFuc2Zvcm0nLFxyXG4gICAgICAgICAgICBgdHJhbnNsYXRlKCR7dGhpcy4kX29mZnNldC54ICsgKDEgLSB0cmFuc2Zvcm0uaykgKiAtNDAwICsgdHJhbnNmb3JtLnh9XHJcbiAgICAgICAgICAgICAke3RoaXMuJF9vZmZzZXQueSArICgxIC0gdHJhbnNmb3JtLmspICogLTMwMCArIHRyYW5zZm9ybS55fSlcclxuICAgICAgICAgICAgIHNjYWxlKCR7dHJhbnNmb3JtLmt9KWBcclxuICAgICAgICApXHJcbiAgICAgICAgdGhpcy4kX3N2Zy5zZXRBdHRyaWJ1dGUoJ2ZvbnQtc2l6ZScsIGAke3RoaXMuJF9mb250U2l6ZSAvIHRyYW5zZm9ybS5rfXB4YClcclxuICAgICAgICB0aGlzLiRfc3ZnLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgYCR7dGhpcy4kX3N0cm9rZVdpZHRoIC8gdHJhbnNmb3JtLmt9cHhgKVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJlbmRlckF0dHJpYnV0ZSwgU2hhZGVyU2VyaWVzIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcydcclxuaW1wb3J0IHtcclxuICAgIGNyZWF0ZVByb2dyYW0sXHJcbiAgICBjcmVhdGVBcnJheUJ1ZmZlcixcclxuICAgIGV4dHJhY3RBdHRyaWJ1dGVzRnJvbVNoYWRlcixcclxuICAgIGVuY29kZVJlbmRlcklkXHJcbn0gZnJvbSAnLi4vLi4vdXRpbHMnXHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXHJcbmltcG9ydCBOb2RlIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL25vZGUnXHJcbmltcG9ydCBMaW5rIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL2xpbmsnXHJcblxyXG5leHBvcnQgY2xhc3MgUmVuZGVyRWxlbWVudE1hbmFnZXIge1xyXG4gICAgcHJvdGVjdGVkIGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0XHJcbiAgICAvLyB0aGUgY2FwYWJsaXR5IG9mIHRoZSByZW5kZXIgbWFuYWdlcixcclxuICAgIC8vIHdoaWNoIG1lYW5zIGhvdyBtYW55IGVsZW1lbnRzIGNhbiBiZSByZW5kZXJlZFxyXG4gICAgcHJvdGVjdGVkIGNhcGFjaXR5OiBudW1iZXJcclxuICAgIHByb3RlY3RlZCBjb3VudCA9IDBcclxuICAgIHByb3RlY3RlZCB3aWR0aDogbnVtYmVyXHJcbiAgICBwcm90ZWN0ZWQgaGVpZ2h0OiBudW1iZXJcclxuICAgIHByb3RlY3RlZCBwaXhlbFJhdGlvOiBudW1iZXJcclxuXHJcbiAgICBwcm90ZWN0ZWQgcHJvZ3JhbTogV2ViR0xQcm9ncmFtXHJcbiAgICBwcm90ZWN0ZWQgYXR0cmlidXRlczogTWFwPHN0cmluZywgUmVuZGVyQXR0cmlidXRlPlxyXG5cclxuICAgIC8vIGlkIHNoYWRlcnMgYXJlIGRlc2lnbiBmb3IgbWFwcGluZyBjYW52YXMgcGl4ZWxzIHRvIGVsZW1lbnRzXHJcbiAgICBwcm90ZWN0ZWQgaWRQcm9ncmFtOiBXZWJHTFByb2dyYW1cclxuICAgIHByb3RlY3RlZCBpZEF0dHJpYnV0ZXM6IE1hcDxzdHJpbmcsIFJlbmRlckF0dHJpYnV0ZT5cclxuICAgIHByb3RlY3RlZCBpZFRleHR1cmU6IFdlYkdMVGV4dHVyZVxyXG5cclxuICAgIHByb3RlY3RlZCByZW5kZXJJZFRvRWxlbWVudDogeyBba2V5OiBudW1iZXJdOiBOb2RlIHwgTGluayB9XHJcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFRvUmVuZGVySWQgPSBuZXcgTWFwKClcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQsXHJcbiAgICAgICAgcGFyYW1zOiBhbnksXHJcbiAgICAgICAgc2hhZGVyU2VyaWVzOiBTaGFkZXJTZXJpZXMsXHJcbiAgICAgICAgaWRUZXh0dXJlOiBXZWJHTFRleHR1cmVcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IHsgbGltaXQsIHdpZHRoLCBoZWlnaHQsIGluc3RhbmNlVmVydGVjZXMgfSA9IHBhcmFtc1xyXG4gICAgICAgIHRoaXMuZ2wgPSBnbFxyXG4gICAgICAgIHRoaXMuY2FwYWNpdHkgPSBsaW1pdFxyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XHJcbiAgICAgICAgdGhpcy5waXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMVxyXG5cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSBleHRyYWN0QXR0cmlidXRlc0Zyb21TaGFkZXIoc2hhZGVyU2VyaWVzLnZlcnRleClcclxuICAgICAgICB0aGlzLnByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKFxyXG4gICAgICAgICAgICB0aGlzLmdsLFxyXG4gICAgICAgICAgICBzaGFkZXJTZXJpZXMudmVydGV4LFxyXG4gICAgICAgICAgICBzaGFkZXJTZXJpZXMuZnJhZ21lbnQsXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1xyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXMgPSBleHRyYWN0QXR0cmlidXRlc0Zyb21TaGFkZXIoc2hhZGVyU2VyaWVzLmlkVmVydGV4KVxyXG4gICAgICAgIHRoaXMuaWRQcm9ncmFtID0gY3JlYXRlUHJvZ3JhbShcclxuICAgICAgICAgICAgdGhpcy5nbCxcclxuICAgICAgICAgICAgc2hhZGVyU2VyaWVzLmlkVmVydGV4LFxyXG4gICAgICAgICAgICBzaGFkZXJTZXJpZXMuaWRGcmFnbWVudCxcclxuICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXNcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIHRoaXMuaWRUZXh0dXJlID0gaWRUZXh0dXJlXHJcblxyXG4gICAgICAgIC8vIGluaXRpYWwgYXR0cmlidXRlcyBhcnJheXMgYW5kIGJ1ZmZlcnNcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWF0dHIuaXNCdWlsZEluKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyLmFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShhdHRyLnNpemUgKiB0aGlzLmNhcGFjaXR5KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gYnVpbGQgaW4gYXR0cmlidXRlOiB2ZXRlY2VzIHBvc2l0aW9uc1xyXG4gICAgICAgICAgICAgICAgLy8gZm91ciB2ZXJ0ZWNlcyBvZiBvbmUgZWxlbWVudCAoaHR0cHM6Ly9wYW5qaWFjaGVuZy5zaXRlL3dpa2kvMjAxOS8wNi8wNi93ZWJHTC9XZWJHTC1CYXRjaERyYXclRTQlQkIlQTMlRTclQTAlODElRTklOTglODUlRTglQUYlQkIrJUU3JTkwJTg2JUU4JUE3JUEzLylcclxuICAgICAgICAgICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgYXR0ci5hcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoaW5zdGFuY2VWZXJ0ZWNlcylcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXR0ci5idWZmZXIgPSBjcmVhdGVBcnJheUJ1ZmZlcih0aGlzLmdsLCBhdHRyLmFycmF5KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIGluaXQgaWQgYXR0cmlidXRlcyBhbmQgYnVmZmVyc1xyXG4gICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIsIG5hbWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdpbl9pZCcpIHtcclxuICAgICAgICAgICAgICAgIC8vIGF0dHI6IGluIHZlYzQgaW5JZDtcclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IGhhcmRjb2RlIGNoZWNrLCBuZWVkIHJlZmFjdG9yXHJcbiAgICAgICAgICAgICAgICBpZiAoIWF0dHIuaXNCdWlsZEluKSBhdHRyLmFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShhdHRyLnNpemUgKiB0aGlzLmNhcGFjaXR5KVxyXG4gICAgICAgICAgICAgICAgYXR0ci5idWZmZXIgPSBjcmVhdGVBcnJheUJ1ZmZlcih0aGlzLmdsLCBhdHRyLmFycmF5KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXMuc2V0KG5hbWUsIHRoaXMuYXR0cmlidXRlcy5nZXQobmFtZSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBpbml0IHVuaWZvcm1zXHJcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSlcclxuICAgICAgICAvLyBnZXQgdW5pZm9ybSBsb2NhdGlvbnMgaW4gTWVtb3J5XHJcbiAgICAgICAgY29uc3QgcHJvamVjdGlvbkxvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLCAncHJvamVjdGlvbicpXHJcbiAgICAgICAgY29uc3Qgc2NhbGVMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3NjYWxlJylcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGVMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3RyYW5zbGF0ZScpXHJcbiAgICAgICAgY29uc3Qgdmlld3BvcnRMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3ZpZXdwb3J0JylcclxuICAgICAgICBjb25zdCBwaXhlbFJhdGlvTG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sICdwaXhlbFJhdGlvJylcclxuXHJcbiAgICAgICAgLy8gc2V0IHVuaWZvcm0gdmFsdWVzXHJcbiAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICAgICAgY29uc3QgcHJvamVjdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgICAgICAgICAyIC8gdGhpcy53aWR0aCwgICAgICAgICAgICAgICAgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDAsIC0yIC8gdGhpcy5oZWlnaHQsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLCAgICAgICAgICAgICAgICAxLCAxXHJcbiAgICAgICAgXSlcclxuICAgICAgICBwcm9qZWN0aW9uTG9jYXRpb24gIT09IG51bGwgJiZcclxuICAgICAgICAgICAgdGhpcy5nbC51bmlmb3JtTWF0cml4M2Z2KHByb2plY3Rpb25Mb2NhdGlvbiwgZmFsc2UsIHByb2plY3Rpb24pXHJcblxyXG4gICAgICAgIGNvbnN0IHNjYWxlID0gbmV3IEZsb2F0MzJBcnJheShbMSwgMV0pXHJcbiAgICAgICAgc2NhbGVMb2NhdGlvbiAhPT0gbnVsbCAmJiB0aGlzLmdsLnVuaWZvcm0yZnYoc2NhbGVMb2NhdGlvbiwgc2NhbGUpXHJcblxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IG5ldyBGbG9hdDMyQXJyYXkoWzAsIDBdKVxyXG4gICAgICAgIHRyYW5zbGF0ZUxvY2F0aW9uICE9PSBudWxsICYmIHRoaXMuZ2wudW5pZm9ybTJmdih0cmFuc2xhdGVMb2NhdGlvbiwgdHJhbnNsYXRlKVxyXG5cclxuICAgICAgICBjb25zdCB2aWV3cG9ydCA9IG5ldyBGbG9hdDMyQXJyYXkoW3RoaXMud2lkdGgsIHRoaXMuaGVpZ2h0XSlcclxuICAgICAgICB2aWV3cG9ydExvY2F0aW9uICE9PSBudWxsICYmIHRoaXMuZ2wudW5pZm9ybTJmdih2aWV3cG9ydExvY2F0aW9uLCB2aWV3cG9ydClcclxuXHJcbiAgICAgICAgcGl4ZWxSYXRpb0xvY2F0aW9uICE9PSBudWxsICYmIHRoaXMuZ2wudW5pZm9ybTFmKHBpeGVsUmF0aW9Mb2NhdGlvbiwgdGhpcy5waXhlbFJhdGlvKVxyXG5cclxuICAgICAgICAvLyBpZCB1bmlmb3JtcywgaWRlbnRpY2FsIHRvIG5vZGVcclxuICAgICAgICAvLyBUT0RPOiBuZWVkIHJlZmFjdG9yIHRvb1xyXG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLmlkUHJvZ3JhbSlcclxuICAgICAgICBjb25zdCBpZFByb2plY3Rpb25Mb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuaWRQcm9ncmFtLCAncHJvamVjdGlvbicpXHJcbiAgICAgICAgY29uc3QgaWRTY2FsZUxvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5pZFByb2dyYW0sICdzY2FsZScpXHJcbiAgICAgICAgY29uc3QgaWRUcmFuc2xhdGVMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuaWRQcm9ncmFtLCAndHJhbnNsYXRlJylcclxuICAgICAgICBjb25zdCBpZFZpZXdwb3J0TG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmlkUHJvZ3JhbSwgJ3ZpZXdwb3J0JylcclxuICAgICAgICBjb25zdCBpZFBpeGVsUmF0aW9Mb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuaWRQcm9ncmFtLCAncGl4ZWxSYXRpbycpXHJcblxyXG4gICAgICAgIGlkUHJvamVjdGlvbkxvY2F0aW9uICE9PSBudWxsICYmXHJcbiAgICAgICAgICAgIHRoaXMuZ2wudW5pZm9ybU1hdHJpeDNmdihpZFByb2plY3Rpb25Mb2NhdGlvbiwgZmFsc2UsIHByb2plY3Rpb24pXHJcbiAgICAgICAgaWRTY2FsZUxvY2F0aW9uICE9PSBudWxsICYmIHRoaXMuZ2wudW5pZm9ybTJmdihpZFNjYWxlTG9jYXRpb24sIHNjYWxlKVxyXG4gICAgICAgIGlkVHJhbnNsYXRlTG9jYXRpb24gIT09IG51bGwgJiYgdGhpcy5nbC51bmlmb3JtMmZ2KGlkVHJhbnNsYXRlTG9jYXRpb24sIHRyYW5zbGF0ZSlcclxuICAgICAgICBpZFZpZXdwb3J0TG9jYXRpb24gIT09IG51bGwgJiYgdGhpcy5nbC51bmlmb3JtMmZ2KGlkVmlld3BvcnRMb2NhdGlvbiwgdmlld3BvcnQpXHJcbiAgICAgICAgaWRQaXhlbFJhdGlvTG9jYXRpb24gIT09IG51bGwgJiYgdGhpcy5nbC51bmlmb3JtMWYoaWRQaXhlbFJhdGlvTG9jYXRpb24sIHRoaXMucGl4ZWxSYXRpbylcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0UmVuZGVySWRPZihlbGVtZW50OiBOb2RlIHwgTGluaywgcmVuZGVySWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucmVuZGVySWRUb0VsZW1lbnRbcmVuZGVySWRdID0gZWxlbWVudFxyXG4gICAgICAgIHRoaXMuZWxlbWVudFRvUmVuZGVySWQuc2V0KGVsZW1lbnQsIHJlbmRlcklkKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSZW5kZXJJZE9mKGVsZW1lbnQ6IE5vZGUgfCBMaW5rKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50VG9SZW5kZXJJZC5nZXQoZWxlbWVudClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJlbmRlciBpZCB0byBsaW5rIGlkcyhzb3VyY2UgYW5kIHRhcmdldClcclxuICAgICAqIEBwYXJhbSByZW5kZXJJZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0RWxlbWVudEJ5UmVuZGVySWQocmVuZGVySWQ6IG51bWJlcik6IE5vZGUgfCBMaW5rIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJJZFRvRWxlbWVudFtyZW5kZXJJZF1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldCBUcmFuc2Zvcm0gaW4gUmVuZGVyIExpbmtcclxuICAgICAqIEBwYXJhbSB0cmFuc2Zvcm0gY3VycmVudCB0cmFuc2Zvcm0ocGFuJnpvb20gY29uZGl0aW9uKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0VHJhbnNmb3JtKHRyYW5zZm9ybTogVHJhbnNmb3JtKSB7XHJcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSlcclxuICAgICAgICBjb25zdCBzY2FsZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3NjYWxlJylcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGVMb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sICd0cmFuc2xhdGUnKVxyXG5cclxuICAgICAgICBjb25zdCBzY2FsZSA9IG5ldyBGbG9hdDMyQXJyYXkoW3RyYW5zZm9ybS5rLCB0cmFuc2Zvcm0ua10pXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmZ2KHNjYWxlTG9jLCBzY2FsZSlcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlID0gbmV3IEZsb2F0MzJBcnJheShbdHJhbnNmb3JtLngsIHRyYW5zZm9ybS55XSlcclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZnYodHJhbnNsYXRlTG9jLCB0cmFuc2xhdGUpXHJcblxyXG4gICAgICAgIC8vIGlkIHVuaWZvcm1zLCBpZGVudGljYWwgdG8gbGlua1xyXG4gICAgICAgIC8vIFRPRE86IG5lZWQgcmVmYWN0b3IgdG9vXHJcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMuaWRQcm9ncmFtKVxyXG4gICAgICAgIGNvbnN0IGlkU2NhbGVMb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmlkUHJvZ3JhbSwgJ3NjYWxlJylcclxuICAgICAgICBjb25zdCBpZFRyYW5zbGF0ZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuaWRQcm9ncmFtLCAndHJhbnNsYXRlJylcclxuXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmZ2KGlkU2NhbGVMb2MsIHNjYWxlKVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdihpZFRyYW5zbGF0ZUxvYywgdHJhbnNsYXRlKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmdsLmVuYWJsZSh0aGlzLmdsLkJMRU5EKVxyXG4gICAgICAgICAgICB0aGlzLmdsLmJsZW5kRnVuYyh0aGlzLmdsLk9ORSwgdGhpcy5nbC5PTkVfTUlOVVNfU1JDX0FMUEhBKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSlcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYXR0ci5sb2NhdGlvbilcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIGF0dHIuYnVmZmVyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIubG9jYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5zaXplLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wuRkxPQVQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5zaXplICogYXR0ci5hcnJheS5CWVRFU19QRVJfRUxFTUVOVCxcclxuICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBpZiAoIWF0dHIuaXNCdWlsZEluKSB0aGlzLmdsLnZlcnRleEF0dHJpYkRpdmlzb3IoYXR0ci5sb2NhdGlvbiwgMSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ2wuZHJhd0FycmF5c0luc3RhbmNlZCh0aGlzLmdsLlRSSUFOR0xFX1NUUklQLCAwLCA0LCB0aGlzLmNvdW50KVxyXG5cclxuICAgICAgICAvLyBkcmF3IGlkXHJcbiAgICAgICAgdGhpcy5nbC5ibGVuZEZ1bmModGhpcy5nbC5PTkUsIHRoaXMuZ2wuWkVSTylcclxuICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5pZFByb2dyYW0pXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5GUkFNRUJVRkZFUiwgdGhpcy5pZFRleHR1cmUpXHJcblxyXG4gICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhdHRyLmxvY2F0aW9uKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLmlkQXR0cmlidXRlcy5nZXQoJ2luX2lkJykgLy8gISBIQVJEQ09ERSBDSEVDS1xyXG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYXR0ci5idWZmZXIpXHJcbiAgICAgICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxyXG4gICAgICAgICAgICBhdHRyLmxvY2F0aW9uLFxyXG4gICAgICAgICAgICBhdHRyLnNpemUsXHJcbiAgICAgICAgICAgIHRoaXMuZ2wuRkxPQVQsXHJcbiAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICBhdHRyLnNpemUgKiBhdHRyLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULFxyXG4gICAgICAgICAgICAwXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMuZ2wudmVydGV4QXR0cmliRGl2aXNvcihhdHRyLmxvY2F0aW9uLCAxKVxyXG5cclxuICAgICAgICB0aGlzLmdsLmRyYXdBcnJheXNJbnN0YW5jZWQodGhpcy5nbC5UUklBTkdMRV9TVFJJUCwgMCwgNCwgdGhpcy5jb3VudClcclxuICAgICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLkZSQU1FQlVGRkVSLCBudWxsKVxyXG5cclxuICAgICAgICB0aGlzLmdsLmVuYWJsZSh0aGlzLmdsLkJMRU5EKVxyXG4gICAgICAgIHRoaXMuZ2wuYmxlbmRGdW5jKHRoaXMuZ2wuT05FLCB0aGlzLmdsLk9ORV9NSU5VU19TUkNfQUxQSEEpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgZWxlbWVudCBkYXRhIHRvIGVuZ2luZVxyXG4gICAgICogQHBhcmFtIGVsZW1lbnRzIGVsZW1lbnRzIGRhdGFcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZERhdGEoZWxlbWVudHM6IE5vZGVbXSB8IExpbmtbXSkge1xyXG4gICAgICAgIC8vIHNldCBhcnJheVxyXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQ6IE5vZGUgfCBMaW5rLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jb3VudCArIGlcclxuICAgICAgICAgICAgLy8gbGluayBhdHRyaWJ1dGUgPT4gd2ViZ2wgYXR0cmlidXRlXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWF0dHIuaXNCdWlsZEluKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBhdHRyLmV4dHJhY3RBdHRyaWJ1dGVWYWx1ZUZyb20oZWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKCh2LCBqKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluamVjdCBpbnRvIHRoZSBCdWZmZXIgQXJyYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0ci5hcnJheVthdHRyLnNpemUgKiBpbmRleCArIGpdID0gdlxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSBlbGVtZW50LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdOb2RlJyA/IDAgOiAxIC8vIE5PVEU6IG5vZGUgcmVuZGVyIGlkLCB1c2UgZXZlbiBpbnRlZ2VyXHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcklkID0gMiAqIGluZGV4ICsgb2Zmc2V0XHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcklkQ29sb3IgPSBlbmNvZGVSZW5kZXJJZChyZW5kZXJJZClcclxuICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXMuZ2V0KCdpbl9pZCcpLmFycmF5WzQgKiBpbmRleF0gPSByZW5kZXJJZENvbG9yLnJcclxuICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXMuZ2V0KCdpbl9pZCcpLmFycmF5WzQgKiBpbmRleCArIDFdID0gcmVuZGVySWRDb2xvci5nXHJcbiAgICAgICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzLmdldCgnaW5faWQnKS5hcnJheVs0ICogaW5kZXggKyAyXSA9IHJlbmRlcklkQ29sb3IuYlxyXG4gICAgICAgICAgICB0aGlzLmlkQXR0cmlidXRlcy5nZXQoJ2luX2lkJykuYXJyYXlbNCAqIGluZGV4ICsgM10gPSByZW5kZXJJZENvbG9yLmFcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0UmVuZGVySWRPZihlbGVtZW50LCByZW5kZXJJZClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWF0dHIuaXNCdWlsZEluKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIGF0dHIuYnVmZmVyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5idWZmZXJTdWJEYXRhKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wuQVJSQVlfQlVGRkVSLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSAqIHRoaXMuY291bnQgKiBhdHRyLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuYXJyYXksXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5zaXplICogdGhpcy5jb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLnNpemUgKiBlbGVtZW50cy5sZW5ndGhcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIGlkIGJ1ZmZlciBkYXRhXHJcbiAgICAgICAgY29uc3QgYXR0ciA9IHRoaXMuaWRBdHRyaWJ1dGVzLmdldCgnaW5faWQnKVxyXG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYXR0ci5idWZmZXIpXHJcbiAgICAgICAgdGhpcy5nbC5idWZmZXJTdWJEYXRhKFxyXG4gICAgICAgICAgICB0aGlzLmdsLkFSUkFZX0JVRkZFUixcclxuICAgICAgICAgICAgYXR0ci5zaXplICogdGhpcy5jb3VudCAqIGF0dHIuYXJyYXkuQllURVNfUEVSX0VMRU1FTlQsXHJcbiAgICAgICAgICAgIGF0dHIuYXJyYXksXHJcbiAgICAgICAgICAgIGF0dHIuc2l6ZSAqIHRoaXMuY291bnQsXHJcbiAgICAgICAgICAgIGF0dHIuc2l6ZSAqIGVsZW1lbnRzLmxlbmd0aFxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgdGhpcy5jb3VudCArPSBlbGVtZW50cy5sZW5ndGhcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNoYW5nZSBhbiBlbGVtZW50J3MgYXR0cmlidXRlXHJcbiAgICAgKiBAcGFyYW0gZWxlbWVudCBsaW5rL25vZGUgZGF0YVxyXG4gICAgICogQHBhcmFtIGF0dHJpYnV0ZSBhdHRyaWJ1dGUga2V5IHRvIGNoYW5nZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2hhbmdlQXR0cmlidXRlKGVsZW1lbnQ6IE5vZGUgfCBMaW5rLCBhdHRyaWJ1dGU6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHJlbmRlcklkID0gdGhpcy5nZXRSZW5kZXJJZE9mKGVsZW1lbnQpXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKHJlbmRlcklkIC8gMilcclxuICAgICAgICBjb25zdCBhdHRyID0gdGhpcy5hdHRyaWJ1dGVzLmdldChgaW5fJHthdHRyaWJ1dGV9YClcclxuICAgICAgICBpZiAoYXR0ciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgICAgICAgICBgQXR0cmlidXRlOiAke2F0dHJpYnV0ZX0gaXMgbm90IHN1cHBvcnRlZCBpbiBhICR7ZWxlbWVudC5jb25zdHJ1Y3Rvci5uYW1lfSBpbnN0YW5jZS5gXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF0dHIuZXh0cmFjdEF0dHJpYnV0ZVZhbHVlRnJvbShlbGVtZW50KVxyXG4gICAgICAgIGF0dHIuYXJyYXkuc2V0KGRhdGEsIGF0dHIuc2l6ZSAqIGluZGV4KVxyXG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYXR0ci5idWZmZXIpXHJcbiAgICAgICAgdGhpcy5nbC5idWZmZXJTdWJEYXRhKFxyXG4gICAgICAgICAgICB0aGlzLmdsLkFSUkFZX0JVRkZFUixcclxuICAgICAgICAgICAgYXR0ci5zaXplICogaW5kZXggKiBhdHRyLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULFxyXG4gICAgICAgICAgICBhdHRyLmFycmF5LFxyXG4gICAgICAgICAgICBhdHRyLnNpemUgKiBpbmRleCxcclxuICAgICAgICAgICAgYXR0ci5zaXplXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2xlYXIgZGF0YVxyXG4gICAgICogbm90IGFjdHVhbGx5IGVyYXNlIGRhdGEsIGJ1dCByZXNldCBjb3VudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xlYXJEYXRhKCkge1xyXG4gICAgICAgIHRoaXMuY291bnQgPSAwXHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgXCIjdmVyc2lvbiAzMDAgZXNcXHJcXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxyXFxuaW4gdmVjNCBzdHJva2VDb2xvcjtcXHJcXG5cXHJcXG5vdXQgdmVjNCBmcmFnbWVudENvbG9yO1xcclxcblxcclxcbnZvaWQgbWFpbih2b2lkKSB7XFxyXFxuICAgIGZyYWdtZW50Q29sb3IgPSB2ZWM0KHN0cm9rZUNvbG9yLnJnYiAqIHN0cm9rZUNvbG9yLmEsIHN0cm9rZUNvbG9yLmEpO1xcclxcbn1cIjsiLCJleHBvcnQgZGVmYXVsdCBcIiN2ZXJzaW9uIDMwMCBlc1xcclxcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcXHJcXG5pbiB2ZWM0IHN0cm9rZUNvbG9yO1xcclxcblxcclxcbmluIHZlYzQgaWQ7XFxyXFxuXFxyXFxuLy8gVE9ETzogYWxsIGlkIHJlbGF0ZWQgc2hhZGVyIG5lZWQgY2xlYW4gdXBcXHJcXG5vdXQgdmVjNCBmcmFnbWVudENvbG9yO1xcclxcblxcclxcbnZvaWQgbWFpbih2b2lkKSB7XFxyXFxuICAgIGZyYWdtZW50Q29sb3IgPSBpZDtcXHJcXG59XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIjdmVyc2lvbiAzMDAgZXNcXHJcXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxyXFxuaW4gdmVjMyBpblZlcnRleFBvcztcXHJcXG5pbiB2ZWMyIGluX3NvdXJjZTsgLy8gc291cmNlIG5vZGUgcG9zaXRpb25cXHJcXG5pbiB2ZWMyIGluX3RhcmdldDsgLy8gdGFyZ2V0IG5vZGUgcG9zaXRpb25cXHJcXG5pbiBmbG9hdCBpbl9zdHJva2VXaWR0aDtcXHJcXG5pbiB2ZWM0IGluX3N0cm9rZUNvbG9yO1xcclxcblxcclxcbmluIHZlYzQgaW5faWQ7XFxyXFxuXFxyXFxub3V0IHZlYzQgc3Ryb2tlQ29sb3I7XFxyXFxuXFxyXFxub3V0IHZlYzQgaWQ7XFxyXFxuXFxyXFxudW5pZm9ybSBtYXQzIHByb2plY3Rpb247XFxyXFxudW5pZm9ybSB2ZWMyIHNjYWxlO1xcclxcbnVuaWZvcm0gdmVjMiB0cmFuc2xhdGU7XFxyXFxuXFxyXFxudm9pZCBtYWluKHZvaWQpIHtcXHJcXG4gICAgaWQgPSBpbl9pZDtcXHJcXG5cXHJcXG4gICAgc3Ryb2tlQ29sb3IgPSBpbl9zdHJva2VDb2xvcjtcXHJcXG5cXHJcXG4gICAgdmVjMiBzb3VyY2UgPSBpbl9zb3VyY2UgKiBzY2FsZSArIHRyYW5zbGF0ZTtcXHJcXG4gICAgdmVjMiB0YXJnZXQgPSBpbl90YXJnZXQgKiBzY2FsZSArIHRyYW5zbGF0ZTtcXHJcXG4gICAgdmVjMiBkZWx0YSA9IHNvdXJjZSAtIHRhcmdldDtcXHJcXG4gICAgdmVjMiBjZW50ZXIgPSAwLjUgKiAoc291cmNlICsgdGFyZ2V0KTtcXHJcXG4gICAgZmxvYXQgbGVuID0gbGVuZ3RoKGRlbHRhKTtcXHJcXG4gICAgZmxvYXQgcGhpID0gYXRhbihkZWx0YS55IC8gZGVsdGEueCk7XFxyXFxuXFxyXFxuICAgIG1hdDMgbGluZV9zY2FsZSA9IG1hdDMoXFxyXFxuICAgICAgICBsZW4sIDAsIDAsXFxyXFxuICAgICAgICAwLCBpbl9zdHJva2VXaWR0aCwgMCxcXHJcXG4gICAgICAgIDAsIDAsIDFcXHJcXG4gICAgKTtcXHJcXG4gICAgbWF0MyBsaW5lX3JvdGF0ZSA9IG1hdDMoXFxyXFxuICAgICAgICBjb3MocGhpKSwgc2luKHBoaSksIDAsXFxyXFxuICAgICAgICAtc2luKHBoaSksIGNvcyhwaGkpLCAwLFxcclxcbiAgICAgICAgMCwgMCwgMVxcclxcbiAgICApO1xcclxcbiAgICBtYXQzIGxpbmVfdHJhbnNsYXRlID0gbWF0MyhcXHJcXG4gICAgICAgIDEsIDAsIDAsXFxyXFxuICAgICAgICAwLCAxLCAwLFxcclxcbiAgICAgICAgY2VudGVyLngsIGNlbnRlci55LCAxXFxyXFxuICAgICk7XFxyXFxuICAgIFxcclxcbiAgICBtYXQzIHRyYW5zZm9ybSA9IGxpbmVfdHJhbnNsYXRlICogbGluZV9yb3RhdGUgKiBsaW5lX3NjYWxlO1xcclxcblxcclxcbiAgICBnbF9Qb3NpdGlvbiA9IHZlYzQocHJvamVjdGlvbiAqIHRyYW5zZm9ybSAqIGluVmVydGV4UG9zLCAxLik7XFxyXFxufVwiOyIsIi8qKlxyXG4gKiBAYXV0aG9yIFhpYW9kb25nIFpoYW8gPHpoYW94aWFvZG9uZ0B6anUuZWR1LmNuPlxyXG4gKiBAZGVzY3JpcHRpb24gTGluayB1c2VkIGluIHJlbmRlcmVyXHJcbiAqL1xyXG5cclxuaW1wb3J0IHZlcnRTaGFkZXJTdHIgZnJvbSAnLi92ZXJ0ZXguaGxzbCdcclxuaW1wb3J0IGZyYWdTaGFkZXJTdHIgZnJvbSAnLi9mcmFnbWVudC5obHNsJ1xyXG5pbXBvcnQgaWRWZXJ0U2hhZGVyU3RyIGZyb20gJy4vaWQtdmVydGV4Lmhsc2wnXHJcbmltcG9ydCBpZEZyYWdTaGFkZXJTdHIgZnJvbSAnLi9pZC1mcmFnbWVudC5obHNsJ1xyXG5cclxuaW1wb3J0IHsgTGlua01hbmFnZXJDb25maWdzIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcydcclxuaW1wb3J0IExpbmsgZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvbGluaydcclxuaW1wb3J0IHsgUmVuZGVyRWxlbWVudE1hbmFnZXIgfSBmcm9tICcuLi9lbGVtZW50L3JlbmRlci1lbGVtZW50J1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlbmRlckxpbmtNYW5hZ2VyIGV4dGVuZHMgUmVuZGVyRWxlbWVudE1hbmFnZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBjcmVhdGUgcmVuZGVyIGxpbmsgbWFuYWdlclxyXG4gICAgICogQHBhcmFtIGdsIFdlYkdMIGNvbnRleHRcclxuICAgICAqIEBwYXJhbSBwYXJhbXMgbmVzc2VzYXJ5IGNvbmZpZ3MgZm9yIGxpbmsgbWFuYWdlclxyXG4gICAgICogQHBhcmFtIGlkVGV4dHVyZSB0ZXh0dXJlIHN0b3JlIGVsZW1lbnRzIGlkIG9mIGVhY2ggcGl4ZWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0LFxyXG4gICAgICAgIHBhcmFtczogTGlua01hbmFnZXJDb25maWdzLFxyXG4gICAgICAgIGlkVGV4dHVyZTogV2ViR0xUZXh0dXJlXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihcclxuICAgICAgICAgICAgLyogd2ViZ2wgY29udGV4dCAqLyBnbCxcclxuICAgICAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICAgICAgICAgIC8qIHBhcmFtZXRlcnMgKi8gey4uLnBhcmFtcywgaW5zdGFuY2VWZXJ0ZWNlczogW1xyXG4gICAgICAgICAgICAgICAgLTAuNSwgMC41LCAxLjAsXHJcbiAgICAgICAgICAgICAgICAtMC41LCAtMC41LCAxLjAsXHJcbiAgICAgICAgICAgICAgICAwLjUsIDAuNSwgMS4wLFxyXG4gICAgICAgICAgICAgICAgMC41LCAtMC41LCAxLjAsXHJcbiAgICAgICAgICAgIF19LFxyXG4gICAgICAgICAgICAvKiBzaGFkZXIgc2VyaWVzICovIHtcclxuICAgICAgICAgICAgICAgIHZlcnRleDogdmVydFNoYWRlclN0cixcclxuICAgICAgICAgICAgICAgIGZyYWdtZW50OiBmcmFnU2hhZGVyU3RyLFxyXG4gICAgICAgICAgICAgICAgaWRWZXJ0ZXg6IGlkVmVydFNoYWRlclN0cixcclxuICAgICAgICAgICAgICAgIGlkRnJhZ21lbnQ6IGlkRnJhZ1NoYWRlclN0clxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvKiBpZFRleHR1cmUgKi8gaWRUZXh0dXJlXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMucmVuZGVySWRUb0VsZW1lbnQgPSB7fVxyXG5cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYXR0ci5uYW1lID09PSAnaW5fc291cmNlJykge1xyXG4gICAgICAgICAgICAgICAgYXR0ci5leHRyYWN0QXR0cmlidXRlVmFsdWVGcm9tID0gKGxpbms6IExpbmspID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VQb3NpdGlvbiA9IGxpbmsuc291cmNlKCkucG9zaXRpb24oKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbc291cmNlUG9zaXRpb24ueCwgc291cmNlUG9zaXRpb24ueV1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRyLm5hbWUgPT09ICdpbl90YXJnZXQnKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyLmV4dHJhY3RBdHRyaWJ1dGVWYWx1ZUZyb20gPSAobGluazogTGluaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gbGluay50YXJnZXQoKS5wb3NpdGlvbigpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFt0YXJnZXRQb3NpdGlvbi54LCB0YXJnZXRQb3NpdGlvbi55XVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIubmFtZSA9PT0gJ2luX3N0cm9rZVdpZHRoJykge1xyXG4gICAgICAgICAgICAgICAgYXR0ci5leHRyYWN0QXR0cmlidXRlVmFsdWVGcm9tID0gKGxpbms6IExpbmspID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2xpbmsuc3Ryb2tlV2lkdGgoKSAqIHRoaXMucGl4ZWxSYXRpb11cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRyLm5hbWUgPT09ICdpbl9zdHJva2VDb2xvcicpIHtcclxuICAgICAgICAgICAgICAgIGF0dHIuZXh0cmFjdEF0dHJpYnV0ZVZhbHVlRnJvbSA9IChsaW5rOiBMaW5rKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3Ryb2tlQ29sb3IgPSBsaW5rLnN0cm9rZUNvbG9yKClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3N0cm9rZUNvbG9yLnIsIHN0cm9rZUNvbG9yLmcsIHN0cm9rZUNvbG9yLmIsIHN0cm9rZUNvbG9yLmFdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVmcmVzaCBhbGwgcG9zaXRpb24gb2YgZWRnZXNcclxuICAgICAqIEBwYXJhbSBsaW5rcyBhbGwgbGluayBkYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWZyZXNoUG9zaXRpb24obGlua3M6IExpbmtbXSkge1xyXG4gICAgICAgIGxldCBjb3VudCA9IDAgLy8gVE9ETzogdXNlbGVzcyBjb3VudFxyXG4gICAgICAgIGxpbmtzLmZvckVhY2goKGxpbmssIGkpID0+IHtcclxuICAgICAgICAgICAgLy8gVE9ETzogY29uc2lkZXIgbGluayBhbmQgcmVuZGVyIGxpbmsgYXR0cmlidXRlIG1hcHBpbmdcclxuICAgICAgICAgICAgY29uc3Qgc291cmNlID0gbGluay5zb3VyY2UoKVxyXG4gICAgICAgICAgICBjb25zdCBzb3VyY2VQb3NpdGlvbiA9IHNvdXJjZS5wb3NpdGlvbigpXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlcy5nZXQoJ2luX3NvdXJjZScpLmFycmF5WzIgKiAoY291bnQgKyBpKV0gPSBzb3VyY2VQb3NpdGlvbi54XHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlcy5nZXQoJ2luX3NvdXJjZScpLmFycmF5WzIgKiAoY291bnQgKyBpKSArIDFdID0gc291cmNlUG9zaXRpb24ueVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gbGluay50YXJnZXQoKVxyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IHRhcmdldC5wb3NpdGlvbigpXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlcy5nZXQoJ2luX3RhcmdldCcpLmFycmF5WzIgKiAoY291bnQgKyBpKV0gPSB0YXJnZXRQb3NpdGlvbi54XHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlcy5nZXQoJ2luX3RhcmdldCcpLmFycmF5WzIgKiAoY291bnQgKyBpKSArIDFdID0gdGFyZ2V0UG9zaXRpb24ueVxyXG5cclxuICAgICAgICAgICAgLy8gY3VycmVudGx5IG5vIG5lZWQgZm9yIGNvbG9yJnJlbmRlcklkIGNoYW5nZVxyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTGlua0F0dHJLZXkuV0lEVEhdLmFycmF5W3RoaXMuY291bnQgKyBpXSA9XHJcbiAgICAgICAgICAgICAgICBsaW5rLnN0cm9rZVdpZHRoKCkgKiB0aGlzLnBpeGVsUmF0aW9cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gbGluay5zdHJva2VDb2xvcigpXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tMaW5rQXR0cktleS5DT0xPUl0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSldID0gY29sb3IuclxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTGlua0F0dHJLZXkuQ09MT1JdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpICsgMV0gPSBjb2xvci5nXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tMaW5rQXR0cktleS5DT0xPUl0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSkgKyAyXSA9IGNvbG9yLmJcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW0xpbmtBdHRyS2V5LkNPTE9SXS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKSArIDNdID0gY29sb3IuYVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVuZGVySWRDb2xvciA9IGVuY29kZVJlbmRlcklkKDIgKiAodGhpcy5jb3VudCArIGkpICsgMSkgLy8gTk9URTogbGluayByZW5kZXIgaWQsIHVzZSBvZGQgaW50ZWdlclxyXG4gICAgICAgICAgICB0aGlzLmlkQXR0cmlidXRlcy5nZXQoJ2luX2lkJykuYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSldID0gcmVuZGVySWRDb2xvci5yXHJcbiAgICAgICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzLmdldCgnaW5faWQnKS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKSArIDFdID0gcmVuZGVySWRDb2xvci5nXHJcbiAgICAgICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzLmdldCgnaW5faWQnKS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKSArIDJdID0gcmVuZGVySWRDb2xvci5iXHJcbiAgICAgICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzLmdldCgnaW5faWQnKS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKSArIDNdID0gcmVuZGVySWRDb2xvci5hXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3Qgc291cmNlQXR0ciA9IHRoaXMuYXR0cmlidXRlcy5nZXQoJ2luX3NvdXJjZScpXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0QXR0ciA9IHRoaXMuYXR0cmlidXRlcy5nZXQoJ2luX3RhcmdldCcpXHJcblxyXG4gICAgICAgIGNvbnN0IGFyciA9IFtzb3VyY2VBdHRyLCB0YXJnZXRBdHRyXVxyXG5cclxuICAgICAgICBhcnIuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWF0dHIuaXNCdWlsZEluKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIGF0dHIuYnVmZmVyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5idWZmZXJTdWJEYXRhKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wuQVJSQVlfQlVGRkVSLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSAqIGNvdW50ICogYXR0ci5hcnJheS5CWVRFU19QRVJfRUxFTUVOVCxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLmFycmF5LFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSAqIGNvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSAqIGxpbmtzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBcIiN2ZXJzaW9uIDMwMCBlc1xcclxcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcXHJcXG5pbiB2ZWMzIGluVmVydGV4UG9zO1xcclxcbmluIHZlYzIgaW5fc291cmNlOyAvLyBzb3VyY2Ugbm9kZSBwb3NpdGlvblxcclxcbmluIHZlYzIgaW5fdGFyZ2V0OyAvLyB0YXJnZXQgbm9kZSBwb3NpdGlvblxcclxcbmluIGZsb2F0IGluX3N0cm9rZVdpZHRoO1xcclxcbmluIHZlYzQgaW5fc3Ryb2tlQ29sb3I7XFxyXFxuXFxyXFxub3V0IHZlYzQgc3Ryb2tlQ29sb3I7XFxyXFxuXFxyXFxudW5pZm9ybSBtYXQzIHByb2plY3Rpb247XFxyXFxudW5pZm9ybSB2ZWMyIHNjYWxlO1xcclxcbnVuaWZvcm0gdmVjMiB0cmFuc2xhdGU7XFxyXFxuXFxyXFxudm9pZCBtYWluKHZvaWQpIHtcXHJcXG4gICAgc3Ryb2tlQ29sb3IgPSBpbl9zdHJva2VDb2xvcjtcXHJcXG5cXHJcXG4gICAgdmVjMiBzb3VyY2UgPSBpbl9zb3VyY2UgKiBzY2FsZSArIHRyYW5zbGF0ZTtcXHJcXG4gICAgdmVjMiB0YXJnZXQgPSBpbl90YXJnZXQgKiBzY2FsZSArIHRyYW5zbGF0ZTtcXHJcXG4gICAgdmVjMiBkZWx0YSA9IHNvdXJjZSAtIHRhcmdldDtcXHJcXG4gICAgdmVjMiBjZW50ZXIgPSAwLjUgKiAoc291cmNlICsgdGFyZ2V0KTtcXHJcXG4gICAgZmxvYXQgbGVuID0gbGVuZ3RoKGRlbHRhKTtcXHJcXG4gICAgZmxvYXQgcGhpID0gYXRhbihkZWx0YS55IC8gZGVsdGEueCk7XFxyXFxuXFxyXFxuICAgIG1hdDMgbGluZV9zY2FsZSA9IG1hdDMoXFxyXFxuICAgICAgICBsZW4sIDAsIDAsXFxyXFxuICAgICAgICAwLCBpbl9zdHJva2VXaWR0aCwgMCxcXHJcXG4gICAgICAgIDAsIDAsIDFcXHJcXG4gICAgKTtcXHJcXG4gICAgbWF0MyBsaW5lX3JvdGF0ZSA9IG1hdDMoXFxyXFxuICAgICAgICBjb3MocGhpKSwgc2luKHBoaSksIDAsXFxyXFxuICAgICAgICAtc2luKHBoaSksIGNvcyhwaGkpLCAwLFxcclxcbiAgICAgICAgMCwgMCwgMVxcclxcbiAgICApO1xcclxcbiAgICBtYXQzIGxpbmVfdHJhbnNsYXRlID0gbWF0MyhcXHJcXG4gICAgICAgIDEsIDAsIDAsXFxyXFxuICAgICAgICAwLCAxLCAwLFxcclxcbiAgICAgICAgY2VudGVyLngsIGNlbnRlci55LCAxXFxyXFxuICAgICk7XFxyXFxuICAgIFxcclxcbiAgICBtYXQzIHRyYW5zZm9ybSA9IGxpbmVfdHJhbnNsYXRlICogbGluZV9yb3RhdGUgKiBsaW5lX3NjYWxlO1xcclxcblxcclxcbiAgICBnbF9Qb3NpdGlvbiA9IHZlYzQocHJvamVjdGlvbiAqIHRyYW5zZm9ybSAqIGluVmVydGV4UG9zLCAxLik7XFxyXFxufVwiOyIsImV4cG9ydCBkZWZhdWx0IFwiI3ZlcnNpb24gMzAwIGVzXFxyXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcbmluIHZlYzIgcG9zaXRpb247XFxyXFxuaW4gZmxvYXQgc2hhcGU7XFxyXFxuaW4gZmxvYXQgd2lkdGg7IC8vIHJlY3RcXHJcXG5pbiBmbG9hdCBoZWlnaHQ7IC8vIHJlY3RcXHJcXG5pbiBmbG9hdCByb3RhdGU7IC8vIHJlY3RcXHJcXG5pbiBmbG9hdCByOyAvLyBjaXJjbGVcXHJcXG5pbiB2ZWMyIHZlcnRleF9hbHBoYTsgLy8gdHJpYW5nbGVcXHJcXG5pbiB2ZWMyIHZlcnRleF9iZXRhOyAvLyB0cmlhbmdsZVxcclxcbmluIHZlYzIgdmVydGV4X2dhbW1hOyAvLyB0cmlhbmdsZVxcclxcbmluIHZlYzQgZmlsbDtcXHJcXG5pbiBmbG9hdCBzdHJva2VXaWR0aDtcXHJcXG5pbiB2ZWM0IHN0cm9rZUNvbG9yO1xcclxcblxcclxcbm91dCB2ZWM0IGZyYWdtZW50Q29sb3I7XFxyXFxuXFxyXFxudW5pZm9ybSB2ZWMyIHZpZXdwb3J0O1xcclxcbnVuaWZvcm0gZmxvYXQgcGl4ZWxSYXRpbztcXHJcXG5cXHJcXG52ZWMyIGNhbGN1bGF0ZV9pbm5lcl9wb2ludCAodmVjMiBwMSwgdmVjMiBwMiwgdmVjMiBwMykge1xcclxcbiAgICBmbG9hdCBpbm5lcl9wMSA9IHNxcnQoZG90KHAxLCBwMSkpO1xcclxcbiAgICBmbG9hdCBpbm5lcl9wMiA9IHNxcnQoZG90KHAyLCBwMikpO1xcclxcbiAgICBmbG9hdCBpbm5lcl9wMyA9IHNxcnQoZG90KHAzLCBwMykpO1xcclxcbiAgICB2ZWMyIGlubmVyID0gKHAxICogaW5uZXJfcDEgKyBwMiAqIGlubmVyX3AyICsgcDMgKiBpbm5lcl9wMykgLyAoaW5uZXJfcDEgKyBpbm5lcl9wMiArIGlubmVyX3AzKTtcXHJcXG4gICAgcmV0dXJuIGlubmVyO1xcclxcbn1cXHJcXG5cXHJcXG5mbG9hdCBjYWxjdWxhdGVfc3Ryb2tlX3NjYWxlICh2ZWMyIHAxLCB2ZWMyIHAyLCB2ZWMyIHAzKSB7XFxyXFxuICAgIHZlYzIgaW5uZXIgPSBjYWxjdWxhdGVfaW5uZXJfcG9pbnQocDEsIHAyLCBwMyk7XFxyXFxuICAgIGZsb2F0IGEgPSBkaXN0YW5jZShwMSwgaW5uZXIpO1xcclxcbiAgICBmbG9hdCBiID0gZGlzdGFuY2UocDIsIGlubmVyKTtcXHJcXG4gICAgZmxvYXQgYyA9IGRpc3RhbmNlKHAxLCBwMik7XFxyXFxuICAgIGZsb2F0IGNvc19hbHBoYSA9IChwb3coYiwgMi4wKSArIHBvdyhjLCAyLjApIC0gcG93KGEsIDIuMCkpIC8gKDIuMCAqIGIgKiBjKTtcXHJcXG4gICAgZmxvYXQgc2luX2FscGhhID0gc3FydCgxLjAgLSBwb3coY29zX2FscGhhLCAyLjApKTtcXHJcXG4gICAgZmxvYXQgbm9ybWFsX2xlbmd0aCA9IHNpbl9hbHBoYSAqIGE7XFxyXFxuICAgIGZsb2F0IHN0cm9rZV9zY2FsZSA9IDEuMCArIHN0cm9rZVdpZHRoIC8gMi4wICogcGl4ZWxSYXRpbyAvIG5vcm1hbF9sZW5ndGg7XFxyXFxuICAgIHJldHVybiBzdHJva2Vfc2NhbGU7XFxyXFxufVxcclxcblxcclxcbmZsb2F0IHNpZ24gKHZlYzIgcDEsIHZlYzIgcDIsIHZlYzIgcDMpIHtcXHJcXG4gICAgcmV0dXJuIChwMS54IC0gcDMueCkgKiAocDIueSAtIHAzLnkpIC0gKHAyLnggLSBwMy54KSAqIChwMS55IC0gcDMueSk7XFxyXFxufVxcclxcblxcclxcbmZsb2F0IGluVHJpYW5nbGUoKSB7XFxyXFxuICAgIGZsb2F0IHN0cm9rZV9zY2FsZSA9IGNhbGN1bGF0ZV9zdHJva2Vfc2NhbGUodmVydGV4X2FscGhhLCB2ZXJ0ZXhfYmV0YSwgdmVydGV4X2dhbW1hKTtcXHJcXG4gICAgdmVjMiBmbGlwX3BvcyA9IHZlYzIocG9zaXRpb24ueCwgdmlld3BvcnQueSAtIHBvc2l0aW9uLnkpO1xcclxcbiAgICB2ZWMyIGZsaXBfdmVydGV4X2FscGhhID0gdmVjMih2ZXJ0ZXhfYWxwaGEueCwgLSB2ZXJ0ZXhfYWxwaGEueSkgLyBzdHJva2Vfc2NhbGU7XFxyXFxuICAgIHZlYzIgZmxpcF92ZXJ0ZXhfYmV0YSA9IHZlYzIodmVydGV4X2JldGEueCwgLSB2ZXJ0ZXhfYmV0YS55KSAvIHN0cm9rZV9zY2FsZTtcXHJcXG4gICAgdmVjMiBmbGlwX3ZlcnRleF9nYW1tYSA9IHZlYzIodmVydGV4X2dhbW1hLngsIC0gdmVydGV4X2dhbW1hLnkpIC8gc3Ryb2tlX3NjYWxlO1xcclxcblxcclxcbiAgICBmbG9hdCBkMSA9IHNpZ24oZ2xfRnJhZ0Nvb3JkLnh5IC8gcGl4ZWxSYXRpbyAtIGZsaXBfcG9zLCBmbGlwX3ZlcnRleF9hbHBoYSwgZmxpcF92ZXJ0ZXhfYmV0YSk7XFxyXFxuICAgIGZsb2F0IGQyID0gc2lnbihnbF9GcmFnQ29vcmQueHkgLyBwaXhlbFJhdGlvIC0gZmxpcF9wb3MsIGZsaXBfdmVydGV4X2JldGEsIGZsaXBfdmVydGV4X2dhbW1hKTtcXHJcXG4gICAgZmxvYXQgZDMgPSBzaWduKGdsX0ZyYWdDb29yZC54eSAvIHBpeGVsUmF0aW8gLSBmbGlwX3BvcywgZmxpcF92ZXJ0ZXhfZ2FtbWEsIGZsaXBfdmVydGV4X2FscGhhKTtcXHJcXG5cXHJcXG4gICAgYm9vbCBoYXNfbmVnID0gKGQxIDw9IDAuMCkgfHwgKGQyIDw9IDAuMCkgfHwgKGQzIDw9IDAuMCk7XFxyXFxuICAgIGJvb2wgaGFzX3BvcyA9IChkMSA+PSAwLjApIHx8IChkMiA+PSAwLjApIHx8IChkMyA+PSAwLjApO1xcclxcblxcclxcbiAgICBpZiAoIShoYXNfbmVnICYmIGhhc19wb3MpKSB7XFxyXFxuICAgICAgICByZXR1cm4gMS4wO1xcclxcbiAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgcmV0dXJuIDAuMDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5mbG9hdCBpblRyaWFuZ2xlQm9yZGVyKCkge1xcclxcbiAgICBmbG9hdCBzdHJva2Vfc2NhbGUgPSBjYWxjdWxhdGVfc3Ryb2tlX3NjYWxlKHZlcnRleF9hbHBoYSwgdmVydGV4X2JldGEsIHZlcnRleF9nYW1tYSk7XFxyXFxuICAgIHZlYzIgZmxpcF9wb3MgPSB2ZWMyKHBvc2l0aW9uLngsIHZpZXdwb3J0LnkgLSBwb3NpdGlvbi55KTtcXHJcXG4gICAgdmVjMiBmbGlwX3ZlcnRleF9hbHBoYSA9IHN0cm9rZV9zY2FsZSAqIHZlYzIodmVydGV4X2FscGhhLngsIC0gdmVydGV4X2FscGhhLnkpO1xcclxcbiAgICB2ZWMyIGZsaXBfdmVydGV4X2JldGEgPSBzdHJva2Vfc2NhbGUgKiB2ZWMyKHZlcnRleF9iZXRhLngsIC0gdmVydGV4X2JldGEueSk7XFxyXFxuICAgIHZlYzIgZmxpcF92ZXJ0ZXhfZ2FtbWEgPSBzdHJva2Vfc2NhbGUgKiB2ZWMyKHZlcnRleF9nYW1tYS54LCAtIHZlcnRleF9nYW1tYS55KTtcXHJcXG5cXHJcXG4gICAgZmxvYXQgZDEgPSBzaWduKGdsX0ZyYWdDb29yZC54eSAvIHBpeGVsUmF0aW8gLSBmbGlwX3BvcywgZmxpcF92ZXJ0ZXhfYWxwaGEsIGZsaXBfdmVydGV4X2JldGEpO1xcclxcbiAgICBmbG9hdCBkMiA9IHNpZ24oZ2xfRnJhZ0Nvb3JkLnh5IC8gcGl4ZWxSYXRpbyAtIGZsaXBfcG9zLCBmbGlwX3ZlcnRleF9iZXRhLCBmbGlwX3ZlcnRleF9nYW1tYSk7XFxyXFxuICAgIGZsb2F0IGQzID0gc2lnbihnbF9GcmFnQ29vcmQueHkgLyBwaXhlbFJhdGlvIC0gZmxpcF9wb3MsIGZsaXBfdmVydGV4X2dhbW1hLCBmbGlwX3ZlcnRleF9hbHBoYSk7XFxyXFxuXFxyXFxuICAgIGJvb2wgaGFzX25lZyA9IChkMSA8PSAwLjApIHx8IChkMiA8PSAwLjApIHx8IChkMyA8PSAwLjApO1xcclxcbiAgICBib29sIGhhc19wb3MgPSAoZDEgPj0gMC4wKSB8fCAoZDIgPj0gMC4wKSB8fCAoZDMgPj0gMC4wKTtcXHJcXG5cXHJcXG4gICAgYm9vbCBpblRyaWFuZ2xlID0gaW5UcmlhbmdsZSgpID09IDEuMDtcXHJcXG4gICAgYm9vbCBpblRyaWFuZ2xlQm9yZGVyID0gIShoYXNfbmVnICYmIGhhc19wb3MpO1xcclxcblxcclxcbiAgICBpZiAoIWluVHJpYW5nbGUgJiYgaW5UcmlhbmdsZUJvcmRlcikge1xcclxcbiAgICAgICAgcmV0dXJuIDEuMDtcXHJcXG4gICAgfSBlbHNlIHtcXHJcXG4gICAgICAgIHJldHVybiAwLjA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuZmxvYXQgaW5SZWN0KCkge1xcclxcbiAgICB2ZWMyIGZsaXBfcG9zID0gcG9zaXRpb247XFxyXFxuICAgIGZsaXBfcG9zLnkgPSB2aWV3cG9ydC55IC0gcG9zaXRpb24ueTtcXHJcXG4gICAgbWF0MiByb3RhdGVfbWF0ID0gbWF0MihcXHJcXG4gICAgICAgIGNvcyhyb3RhdGUpLCBzaW4ocm90YXRlKSxcXHJcXG4gICAgICAgIC1zaW4ocm90YXRlKSwgY29zKHJvdGF0ZSlcXHJcXG4gICAgKTtcXHJcXG4gICAgdmVjMiByb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQgPSByb3RhdGVfbWF0ICogKGdsX0ZyYWdDb29yZC54eSAvIHBpeGVsUmF0aW8gLSBmbGlwX3Bvcyk7XFxyXFxuICAgIGZsb2F0IHhfaW4gPSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC54LCB3aWR0aCAvIDIuMCAtIHN0cm9rZVdpZHRoIC8gMi4wKSAqICgxLjAgLSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC54LCAtIHdpZHRoIC8gMi4wICsgc3Ryb2tlV2lkdGggLyAyLjApKTtcXHJcXG4gICAgZmxvYXQgeV9pbiA9IHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLnksIGhlaWdodCAvIDIuMCAtIHN0cm9rZVdpZHRoIC8gMi4wKSAqICgxLjAgLSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC55LCAtIGhlaWdodCAvIDIuMCArIHN0cm9rZVdpZHRoIC8gMi4wKSk7XFxyXFxuICAgIHJldHVybiB4X2luICogeV9pbjtcXHJcXG59XFxyXFxuXFxyXFxuZmxvYXQgaW5SZWN0Qm9yZGVyKCkge1xcclxcbiAgICB2ZWMyIGZsaXBfcG9zID0gcG9zaXRpb247XFxyXFxuICAgIGZsaXBfcG9zLnkgPSB2aWV3cG9ydC55IC0gcG9zaXRpb24ueTtcXHJcXG4gICAgbWF0MiByb3RhdGVfbWF0ID0gbWF0MihcXHJcXG4gICAgICAgIGNvcyhyb3RhdGUpLCBzaW4ocm90YXRlKSxcXHJcXG4gICAgICAgIC1zaW4ocm90YXRlKSwgY29zKHJvdGF0ZSlcXHJcXG4gICAgKTtcXHJcXG4gICAgdmVjMiByb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQgPSByb3RhdGVfbWF0ICogKGdsX0ZyYWdDb29yZC54eSAvIHBpeGVsUmF0aW8gLSBmbGlwX3Bvcyk7XFxyXFxuICAgIGZsb2F0IHhfaW5fb3V0ZXIgPSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC54LCB3aWR0aCAvIDIuMCArIHN0cm9rZVdpZHRoIC8gMi4wKSAqICgxLjAgLSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC54LCAtIHdpZHRoIC8gMi4wIC0gc3Ryb2tlV2lkdGggLyAyLjApKTtcXHJcXG4gICAgZmxvYXQgeV9pbl9vdXRlciA9IHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLnksIGhlaWdodCAvIDIuMCArIHN0cm9rZVdpZHRoIC8gMi4wKSAqICgxLjAgLSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC55LCAtIGhlaWdodCAvIDIuMCAtIHN0cm9rZVdpZHRoIC8gMi4wKSk7XFxyXFxuICAgIGZsb2F0IHhfaW5faW5uZXIgPSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC54LCB3aWR0aCAvIDIuMCAtIHN0cm9rZVdpZHRoIC8gMi4wKSAqICgxLjAgLSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC54LCAtIHdpZHRoIC8gMi4wICsgc3Ryb2tlV2lkdGggLyAyLjApKTtcXHJcXG4gICAgZmxvYXQgeV9pbl9pbm5lciA9IHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLnksIGhlaWdodCAvIDIuMCAtIHN0cm9rZVdpZHRoIC8gMi4wKSAqICgxLjAgLSBzdGVwKHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZC55LCAtIGhlaWdodCAvIDIuMCArIHN0cm9rZVdpZHRoIC8gMi4wKSk7XFxyXFxuXFxyXFxuICAgIHJldHVybiB4X2luX291dGVyICogeV9pbl9vdXRlciAqICgxLjAgLSB4X2luX2lubmVyICogeV9pbl9pbm5lcik7XFxyXFxufVxcclxcblxcclxcbmZsb2F0IGluQ2lyY2xlKCkge1xcclxcbiAgICB2ZWMyIGZsaXBfcG9zID0gcG9zaXRpb247XFxyXFxuICAgIGZsaXBfcG9zLnkgPSB2aWV3cG9ydC55IC0gcG9zaXRpb24ueTtcXHJcXG4gICAgZmxvYXQgZGlzdCA9IGRpc3RhbmNlKGdsX0ZyYWdDb29yZC54eSAvIHBpeGVsUmF0aW8sIGZsaXBfcG9zKTtcXHJcXG4gICAgZmxvYXQgZGlzdF9pbl9yID0gc3RlcChkaXN0LCByIC0gc3Ryb2tlV2lkdGggLyAyLik7XFxyXFxuICAgIHJldHVybiBkaXN0X2luX3I7XFxyXFxufVxcclxcblxcclxcbmZsb2F0IGluQ2lyY2xlQm9yZGVyKCkge1xcclxcbiAgICBpZiAoc3Ryb2tlV2lkdGggPT0gMC4pIHtcXHJcXG4gICAgICByZXR1cm4gMC47XFxyXFxuICAgIH1cXHJcXG4gICAgdmVjMiBmbGlwX3BvcyA9IHBvc2l0aW9uO1xcclxcbiAgICBmbGlwX3Bvcy55ID0gdmlld3BvcnQueSAtIHBvc2l0aW9uLnk7XFxyXFxuXFxyXFxuICAgIGZsb2F0IGRpc3QgPSBkaXN0YW5jZShnbF9GcmFnQ29vcmQueHkgLyBwaXhlbFJhdGlvLCBmbGlwX3Bvcyk7XFxyXFxuICAgIGZsb2F0IGRyYXdPdXRlciA9IDEuIC0gc21vb3Roc3RlcCgociArIHN0cm9rZVdpZHRoIC8gMi4pICogMC45NSwgKHIgKyBzdHJva2VXaWR0aCAvIDIuKSAqIDEuMDUsIGRpc3QpO1xcclxcbiAgICBmbG9hdCBkcmF3SW5uZXIgPSAxLiAtIHN0ZXAociAtIHN0cm9rZVdpZHRoIC8gMi4sIGRpc3QpO1xcclxcbiAgICByZXR1cm4gZHJhd091dGVyICogKDEuIC0gZHJhd0lubmVyKTtcXHJcXG59XFxyXFxuXFxyXFxudm9pZCBtYWluKHZvaWQpIHtcXHJcXG4gICAgaWYgKHNoYXBlID09IDAuMCkge1xcclxcbiAgICAgICAgLy8gY2lyY2xlIHNoYXBlXFxyXFxuICAgICAgICAvLyBib3JkZXIgY2hlY2ssIHVzaW5nIDAuNShjZW50ZXIgb2Ygc21vb3Roc3RlcClcXHJcXG4gICAgICAgIGlmIChpbkNpcmNsZSgpIDwgMS4gJiYgKHN0cm9rZVdpZHRoIDwgMC44IHx8IGluQ2lyY2xlQm9yZGVyKCkgPCAwLjUpKSB7XFxyXFxuICAgICAgICAgICAgZGlzY2FyZDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIGZyYWdtZW50Q29sb3IgPSBpbkNpcmNsZUJvcmRlcigpICogdmVjNChzdHJva2VDb2xvci5yZ2IgKiBzdHJva2VDb2xvci5hLCBzdHJva2VDb2xvci5hKSArIGluQ2lyY2xlKCkgKiB2ZWM0KGZpbGwucmdiICogZmlsbC5hLCBmaWxsLmEpO1xcclxcbiAgICB9IGVsc2UgaWYgKHNoYXBlID09IDEuMCkge1xcclxcbiAgICAgICAgLy8gcmVjdCBzaGFwZVxcclxcbiAgICAgICAgZnJhZ21lbnRDb2xvciA9IGluUmVjdEJvcmRlcigpICogdmVjNChzdHJva2VDb2xvci5yZ2IgKiBzdHJva2VDb2xvci5hLCBzdHJva2VDb2xvci5hKSArIGluUmVjdCgpICogdmVjNChmaWxsLnJnYiAqIGZpbGwuYSwgZmlsbC5hKTtcXHJcXG4gICAgICAgIC8vIGZyYWdtZW50Q29sb3IgPSB2ZWM0KGZpbGwucmdiICogZmlsbC5hLCBmaWxsLmEpO1xcclxcbiAgICB9IGVsc2UgaWYgKHNoYXBlID09IDIuMCkge1xcclxcbiAgICAgICAgLy8gdHJpYW5nbGUgc2hhcGVcXHJcXG4gICAgICAgIC8vIGZyYWdtZW50Q29sb3IgPSB2ZWM0KGZpbGwucmdiICogZmlsbC5hLCBmaWxsLmEpO1xcclxcbiAgICAgICAgZnJhZ21lbnRDb2xvciA9IGluVHJpYW5nbGVCb3JkZXIoKSAqIHZlYzQoc3Ryb2tlQ29sb3IucmdiICogc3Ryb2tlQ29sb3IuYSwgc3Ryb2tlQ29sb3IuYSkgKyBpblRyaWFuZ2xlKCkgKiB2ZWM0KGZpbGwucmdiICogZmlsbC5hLCBmaWxsLmEpO1xcclxcbiAgICB9XFxyXFxufVwiOyIsImV4cG9ydCBkZWZhdWx0IFwiI3ZlcnNpb24gMzAwIGVzXFxyXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcbmluIHZlYzIgcG9zaXRpb247XFxyXFxuaW4gZmxvYXQgc2hhcGU7XFxyXFxuaW4gZmxvYXQgd2lkdGg7IC8vIHJlY3RcXHJcXG5pbiBmbG9hdCBoZWlnaHQ7IC8vIHJlY3RcXHJcXG5pbiBmbG9hdCByb3RhdGU7IC8vIHJlY3RcXHJcXG5pbiBmbG9hdCByOyAvLyBjaXJjbGVcXHJcXG5pbiB2ZWMyIHZlcnRleF9hbHBoYTsgLy8gdHJpYW5nbGVcXHJcXG5pbiB2ZWMyIHZlcnRleF9iZXRhOyAvLyB0cmlhbmdsZVxcclxcbmluIHZlYzIgdmVydGV4X2dhbW1hOyAvLyB0cmlhbmdsZVxcclxcbmluIHZlYzQgZmlsbDtcXHJcXG5pbiBmbG9hdCBzdHJva2VXaWR0aDtcXHJcXG5pbiB2ZWM0IHN0cm9rZUNvbG9yO1xcclxcbmluIHZlYzQgaWQ7XFxyXFxuXFxyXFxub3V0IHZlYzQgZnJhZ21lbnRDb2xvcjtcXHJcXG5cXHJcXG51bmlmb3JtIHZlYzIgdmlld3BvcnQ7XFxyXFxudW5pZm9ybSBmbG9hdCBwaXhlbFJhdGlvO1xcclxcblxcclxcbnZlYzIgY2FsY3VsYXRlX2lubmVyX3BvaW50ICh2ZWMyIHAxLCB2ZWMyIHAyLCB2ZWMyIHAzKSB7XFxyXFxuICAgIGZsb2F0IGlubmVyX3AxID0gc3FydChkb3QocDEsIHAxKSk7XFxyXFxuICAgIGZsb2F0IGlubmVyX3AyID0gc3FydChkb3QocDIsIHAyKSk7XFxyXFxuICAgIGZsb2F0IGlubmVyX3AzID0gc3FydChkb3QocDMsIHAzKSk7XFxyXFxuICAgIHZlYzIgaW5uZXIgPSAocDEgKiBpbm5lcl9wMSArIHAyICogaW5uZXJfcDIgKyBwMyAqIGlubmVyX3AzKSAvIChpbm5lcl9wMSArIGlubmVyX3AyICsgaW5uZXJfcDMpO1xcclxcbiAgICByZXR1cm4gaW5uZXI7XFxyXFxufVxcclxcblxcclxcbmZsb2F0IGNhbGN1bGF0ZV9zdHJva2Vfc2NhbGUgKHZlYzIgcDEsIHZlYzIgcDIsIHZlYzIgcDMpIHtcXHJcXG4gICAgdmVjMiBpbm5lciA9IGNhbGN1bGF0ZV9pbm5lcl9wb2ludChwMSwgcDIsIHAzKTtcXHJcXG4gICAgZmxvYXQgYSA9IGRpc3RhbmNlKHAxLCBpbm5lcik7XFxyXFxuICAgIGZsb2F0IGIgPSBkaXN0YW5jZShwMiwgaW5uZXIpO1xcclxcbiAgICBmbG9hdCBjID0gZGlzdGFuY2UocDEsIHAyKTtcXHJcXG4gICAgZmxvYXQgY29zX2FscGhhID0gKHBvdyhiLCAyLjApICsgcG93KGMsIDIuMCkgLSBwb3coYSwgMi4wKSkgLyAoMi4wICogYiAqIGMpO1xcclxcbiAgICBmbG9hdCBzaW5fYWxwaGEgPSBzcXJ0KDEuMCAtIHBvdyhjb3NfYWxwaGEsIDIuMCkpO1xcclxcbiAgICBmbG9hdCBub3JtYWxfbGVuZ3RoID0gc2luX2FscGhhICogYTtcXHJcXG4gICAgZmxvYXQgc3Ryb2tlX3NjYWxlID0gMS4wICsgc3Ryb2tlV2lkdGggLyAyLjAgKiBwaXhlbFJhdGlvIC8gbm9ybWFsX2xlbmd0aDtcXHJcXG4gICAgcmV0dXJuIHN0cm9rZV9zY2FsZTtcXHJcXG59XFxyXFxuXFxyXFxuZmxvYXQgc2lnbiAodmVjMiBwMSwgdmVjMiBwMiwgdmVjMiBwMykge1xcclxcbiAgICByZXR1cm4gKHAxLnggLSBwMy54KSAqIChwMi55IC0gcDMueSkgLSAocDIueCAtIHAzLngpICogKHAxLnkgLSBwMy55KTtcXHJcXG59XFxyXFxuXFxyXFxuZmxvYXQgaW5UcmlhbmdsZSgpIHtcXHJcXG4gICAgZmxvYXQgc3Ryb2tlX3NjYWxlID0gY2FsY3VsYXRlX3N0cm9rZV9zY2FsZSh2ZXJ0ZXhfYWxwaGEsIHZlcnRleF9iZXRhLCB2ZXJ0ZXhfZ2FtbWEpO1xcclxcbiAgICB2ZWMyIGZsaXBfcG9zID0gdmVjMihwb3NpdGlvbi54LCB2aWV3cG9ydC55IC0gcG9zaXRpb24ueSk7XFxyXFxuICAgIHZlYzIgZmxpcF92ZXJ0ZXhfYWxwaGEgPSB2ZWMyKHZlcnRleF9hbHBoYS54LCAtIHZlcnRleF9hbHBoYS55KTtcXHJcXG4gICAgdmVjMiBmbGlwX3ZlcnRleF9iZXRhID0gdmVjMih2ZXJ0ZXhfYmV0YS54LCAtIHZlcnRleF9iZXRhLnkpO1xcclxcbiAgICB2ZWMyIGZsaXBfdmVydGV4X2dhbW1hID0gdmVjMih2ZXJ0ZXhfZ2FtbWEueCwgLSB2ZXJ0ZXhfZ2FtbWEueSk7XFxyXFxuXFxyXFxuICAgIGZsb2F0IGQxID0gc2lnbihnbF9GcmFnQ29vcmQueHkgLyBwaXhlbFJhdGlvIC0gZmxpcF9wb3MsIGZsaXBfdmVydGV4X2FscGhhLCBmbGlwX3ZlcnRleF9iZXRhKTtcXHJcXG4gICAgZmxvYXQgZDIgPSBzaWduKGdsX0ZyYWdDb29yZC54eSAvIHBpeGVsUmF0aW8gLSBmbGlwX3BvcywgZmxpcF92ZXJ0ZXhfYmV0YSwgZmxpcF92ZXJ0ZXhfZ2FtbWEpO1xcclxcbiAgICBmbG9hdCBkMyA9IHNpZ24oZ2xfRnJhZ0Nvb3JkLnh5IC8gcGl4ZWxSYXRpbyAtIGZsaXBfcG9zLCBmbGlwX3ZlcnRleF9nYW1tYSwgZmxpcF92ZXJ0ZXhfYWxwaGEpO1xcclxcblxcclxcbiAgICBib29sIGhhc19uZWcgPSAoZDEgPD0gMC4wKSB8fCAoZDIgPD0gMC4wKSB8fCAoZDMgPD0gMC4wKTtcXHJcXG4gICAgYm9vbCBoYXNfcG9zID0gKGQxID49IDAuMCkgfHwgKGQyID49IDAuMCkgfHwgKGQzID49IDAuMCk7XFxyXFxuXFxyXFxuICAgIGlmICghKGhhc19uZWcgJiYgaGFzX3BvcykpIHtcXHJcXG4gICAgICAgIHJldHVybiAxLjA7XFxyXFxuICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICByZXR1cm4gMC4wO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbmZsb2F0IGluVHJpYW5nbGVCb3JkZXIoKSB7XFxyXFxuICAgIGZsb2F0IHN0cm9rZV9zY2FsZSA9IGNhbGN1bGF0ZV9zdHJva2Vfc2NhbGUodmVydGV4X2FscGhhLCB2ZXJ0ZXhfYmV0YSwgdmVydGV4X2dhbW1hKTtcXHJcXG4gICAgdmVjMiBmbGlwX3BvcyA9IHZlYzIocG9zaXRpb24ueCwgdmlld3BvcnQueSAtIHBvc2l0aW9uLnkpO1xcclxcbiAgICB2ZWMyIGZsaXBfdmVydGV4X2FscGhhID0gc3Ryb2tlX3NjYWxlICogdmVjMih2ZXJ0ZXhfYWxwaGEueCwgLSB2ZXJ0ZXhfYWxwaGEueSk7XFxyXFxuICAgIHZlYzIgZmxpcF92ZXJ0ZXhfYmV0YSA9IHN0cm9rZV9zY2FsZSAqIHZlYzIodmVydGV4X2JldGEueCwgLSB2ZXJ0ZXhfYmV0YS55KTtcXHJcXG4gICAgdmVjMiBmbGlwX3ZlcnRleF9nYW1tYSA9IHN0cm9rZV9zY2FsZSAqIHZlYzIodmVydGV4X2dhbW1hLngsIC0gdmVydGV4X2dhbW1hLnkpO1xcclxcblxcclxcbiAgICBmbG9hdCBkMSA9IHNpZ24oZ2xfRnJhZ0Nvb3JkLnh5IC8gcGl4ZWxSYXRpbyAtIGZsaXBfcG9zLCBmbGlwX3ZlcnRleF9hbHBoYSwgZmxpcF92ZXJ0ZXhfYmV0YSk7XFxyXFxuICAgIGZsb2F0IGQyID0gc2lnbihnbF9GcmFnQ29vcmQueHkgLyBwaXhlbFJhdGlvIC0gZmxpcF9wb3MsIGZsaXBfdmVydGV4X2JldGEsIGZsaXBfdmVydGV4X2dhbW1hKTtcXHJcXG4gICAgZmxvYXQgZDMgPSBzaWduKGdsX0ZyYWdDb29yZC54eSAvIHBpeGVsUmF0aW8gLSBmbGlwX3BvcywgZmxpcF92ZXJ0ZXhfZ2FtbWEsIGZsaXBfdmVydGV4X2FscGhhKTtcXHJcXG5cXHJcXG4gICAgYm9vbCBoYXNfbmVnID0gKGQxIDw9IDAuMCkgfHwgKGQyIDw9IDAuMCkgfHwgKGQzIDw9IDAuMCk7XFxyXFxuICAgIGJvb2wgaGFzX3BvcyA9IChkMSA+PSAwLjApIHx8IChkMiA+PSAwLjApIHx8IChkMyA+PSAwLjApO1xcclxcblxcclxcbiAgICBib29sIGluVHJpYW5nbGUgPSBpblRyaWFuZ2xlKCkgPT0gMS4wO1xcclxcbiAgICBib29sIGluVHJpYW5nbGVCb3JkZXIgPSAhKGhhc19uZWcgJiYgaGFzX3Bvcyk7XFxyXFxuXFxyXFxuICAgIGlmICghaW5UcmlhbmdsZSAmJiBpblRyaWFuZ2xlQm9yZGVyKSB7XFxyXFxuICAgICAgICByZXR1cm4gMS4wO1xcclxcbiAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgcmV0dXJuIDAuMDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5mbG9hdCBpblJlY3QoKSB7XFxyXFxuICAgIHZlYzIgZmxpcF9wb3MgPSBwb3NpdGlvbjtcXHJcXG4gICAgZmxpcF9wb3MueSA9IHZpZXdwb3J0LnkgLSBwb3NpdGlvbi55O1xcclxcbiAgICBtYXQyIHJvdGF0ZV9tYXQgPSBtYXQyKFxcclxcbiAgICAgICAgY29zKHJvdGF0ZSksIHNpbihyb3RhdGUpLFxcclxcbiAgICAgICAgLXNpbihyb3RhdGUpLCBjb3Mocm90YXRlKVxcclxcbiAgICApO1xcclxcbiAgICB2ZWMyIHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZCA9IHJvdGF0ZV9tYXQgKiAoZ2xfRnJhZ0Nvb3JkLnh5IC8gcGl4ZWxSYXRpbyAtIGZsaXBfcG9zKTtcXHJcXG4gICAgZmxvYXQgeF9pbiA9IHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLngsIHdpZHRoIC8gMi4wIC0gc3Ryb2tlV2lkdGggLyAyLjApICogKDEuMCAtIHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLngsIC0gd2lkdGggLyAyLjAgKyBzdHJva2VXaWR0aCAvIDIuMCkpO1xcclxcbiAgICBmbG9hdCB5X2luID0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueSwgaGVpZ2h0IC8gMi4wIC0gc3Ryb2tlV2lkdGggLyAyLjApICogKDEuMCAtIHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLnksIC0gaGVpZ2h0IC8gMi4wICsgc3Ryb2tlV2lkdGggLyAyLjApKTtcXHJcXG4gICAgcmV0dXJuIHhfaW4gKiB5X2luO1xcclxcbn1cXHJcXG5cXHJcXG5mbG9hdCBpblJlY3RCb3JkZXIoKSB7XFxyXFxuICAgIHZlYzIgZmxpcF9wb3MgPSBwb3NpdGlvbjtcXHJcXG4gICAgZmxpcF9wb3MueSA9IHZpZXdwb3J0LnkgLSBwb3NpdGlvbi55O1xcclxcbiAgICBtYXQyIHJvdGF0ZV9tYXQgPSBtYXQyKFxcclxcbiAgICAgICAgY29zKHJvdGF0ZSksIHNpbihyb3RhdGUpLFxcclxcbiAgICAgICAgLXNpbihyb3RhdGUpLCBjb3Mocm90YXRlKVxcclxcbiAgICApO1xcclxcbiAgICB2ZWMyIHJvdGF0ZV9yZWxhdGVkX0ZyYWdDb29yZCA9IHJvdGF0ZV9tYXQgKiAoZ2xfRnJhZ0Nvb3JkLnh5IC8gcGl4ZWxSYXRpbyAtIGZsaXBfcG9zKTtcXHJcXG4gICAgZmxvYXQgeF9pbl9vdXRlciA9IHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLngsIHdpZHRoIC8gMi4wICsgc3Ryb2tlV2lkdGggLyAyLjApICogKDEuMCAtIHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLngsIC0gd2lkdGggLyAyLjAgLSBzdHJva2VXaWR0aCAvIDIuMCkpO1xcclxcbiAgICBmbG9hdCB5X2luX291dGVyID0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueSwgaGVpZ2h0IC8gMi4wICsgc3Ryb2tlV2lkdGggLyAyLjApICogKDEuMCAtIHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLnksIC0gaGVpZ2h0IC8gMi4wIC0gc3Ryb2tlV2lkdGggLyAyLjApKTtcXHJcXG4gICAgZmxvYXQgeF9pbl9pbm5lciA9IHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLngsIHdpZHRoIC8gMi4wIC0gc3Ryb2tlV2lkdGggLyAyLjApICogKDEuMCAtIHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLngsIC0gd2lkdGggLyAyLjAgKyBzdHJva2VXaWR0aCAvIDIuMCkpO1xcclxcbiAgICBmbG9hdCB5X2luX2lubmVyID0gc3RlcChyb3RhdGVfcmVsYXRlZF9GcmFnQ29vcmQueSwgaGVpZ2h0IC8gMi4wIC0gc3Ryb2tlV2lkdGggLyAyLjApICogKDEuMCAtIHN0ZXAocm90YXRlX3JlbGF0ZWRfRnJhZ0Nvb3JkLnksIC0gaGVpZ2h0IC8gMi4wICsgc3Ryb2tlV2lkdGggLyAyLjApKTtcXHJcXG5cXHJcXG4gICAgcmV0dXJuIHhfaW5fb3V0ZXIgKiB5X2luX291dGVyICogKDEuMCAtIHhfaW5faW5uZXIgKiB5X2luX2lubmVyKTtcXHJcXG59XFxyXFxuXFxyXFxuZmxvYXQgaW5DaXJjbGUoKSB7XFxyXFxuICAgIHZlYzIgZmxpcF9wb3MgPSBwb3NpdGlvbjtcXHJcXG4gICAgZmxpcF9wb3MueSA9IHZpZXdwb3J0LnkgLSBwb3NpdGlvbi55O1xcclxcbiAgICBmbG9hdCBkaXN0ID0gZGlzdGFuY2UoZ2xfRnJhZ0Nvb3JkLnh5IC8gcGl4ZWxSYXRpbywgZmxpcF9wb3MpO1xcclxcbiAgICBmbG9hdCBkaXN0X2luX3IgPSBzdGVwKGRpc3QsIHIgLSBzdHJva2VXaWR0aCAvIDIuKTtcXHJcXG4gICAgcmV0dXJuIGRpc3RfaW5fcjtcXHJcXG59XFxyXFxuXFxyXFxuZmxvYXQgaW5DaXJjbGVCb3JkZXIoKSB7XFxyXFxuICAgIGlmIChzdHJva2VXaWR0aCA9PSAwLikge1xcclxcbiAgICAgIHJldHVybiAwLjtcXHJcXG4gICAgfVxcclxcbiAgICB2ZWMyIGZsaXBfcG9zID0gcG9zaXRpb247XFxyXFxuICAgIGZsaXBfcG9zLnkgPSB2aWV3cG9ydC55IC0gcG9zaXRpb24ueTtcXHJcXG5cXHJcXG4gICAgZmxvYXQgZGlzdCA9IGRpc3RhbmNlKGdsX0ZyYWdDb29yZC54eSAvIHBpeGVsUmF0aW8sIGZsaXBfcG9zKTtcXHJcXG4gICAgZmxvYXQgZHJhd091dGVyID0gMS4gLSBzbW9vdGhzdGVwKChyICsgc3Ryb2tlV2lkdGggLyAyLikgKiAwLjk1LCAociArIHN0cm9rZVdpZHRoIC8gMi4pICogMS4wNSwgZGlzdCk7XFxyXFxuICAgIGZsb2F0IGRyYXdJbm5lciA9IDEuIC0gc3RlcChyIC0gc3Ryb2tlV2lkdGggLyAyLiwgZGlzdCk7XFxyXFxuICAgIHJldHVybiBkcmF3T3V0ZXIgKiAoMS4gLSBkcmF3SW5uZXIpO1xcclxcbn1cXHJcXG5cXHJcXG52b2lkIG1haW4odm9pZCkge1xcclxcbiAgICBpZiAoc2hhcGUgPT0gMC4wKSB7XFxyXFxuICAgICAgICAvLyBjaXJjbGUgc2hhcGVcXHJcXG4gICAgICAgIC8vIGJvcmRlciBjaGVjaywgdXNpbmcgMC41KGNlbnRlciBvZiBzbW9vdGhzdGVwKVxcclxcbiAgICAgICAgaWYgKGluQ2lyY2xlKCkgPCAxLiAmJiAoc3Ryb2tlV2lkdGggPCAwLjggfHwgaW5DaXJjbGVCb3JkZXIoKSA8IDAuNSkpIHtcXHJcXG4gICAgICAgICAgICBkaXNjYXJkO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgZnJhZ21lbnRDb2xvciA9IGlkO1xcclxcbiAgICB9IGVsc2UgaWYgKHNoYXBlID09IDEuMCkge1xcclxcbiAgICAgICAgLy8gcmVjdCBzaGFwZVxcclxcbiAgICAgICAgaWYgKGluUmVjdCgpIDwgMS4wICYmIChzdHJva2VXaWR0aCA8IDAuOCB8fCBpblJlY3RCb3JkZXIoKSA8IDAuNSkpIHtcXHJcXG4gICAgICAgICAgICBkaXNjYXJkO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgZnJhZ21lbnRDb2xvciA9IGlkO1xcclxcbiAgICAgICAgLy8gZnJhZ21lbnRDb2xvciA9IHZlYzQoZmlsbC5yZ2IgKiBmaWxsLmEsIGZpbGwuYSk7XFxyXFxuICAgIH0gZWxzZSBpZiAoc2hhcGUgPT0gMi4wKSB7XFxyXFxuICAgICAgICAvLyB0cmlhbmdsZSBzaGFwZVxcclxcbiAgICAgICAgaWYgKGluVHJpYW5nbGUoKSA8IDEuMCAmJiAoc3Ryb2tlV2lkdGggPCAwLjggfHwgaW5UcmlhbmdsZUJvcmRlcigpIDwgMC41KSkge1xcclxcbiAgICAgICAgICAgIGRpc2NhcmQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBmcmFnbWVudENvbG9yID0gaWQ7XFxyXFxuICAgIH1cXHJcXG59XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIjdmVyc2lvbiAzMDAgZXNcXHJcXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxyXFxuaW4gdmVjMyBpblZlcnRleFBvcztcXHJcXG5pbiBmbG9hdCBpbl9zaGFwZTtcXHJcXG5pbiB2ZWMyIGluX3Bvc2l0aW9uO1xcclxcbmluIHZlYzIgaW5fb2Zmc2V0O1xcclxcbmluIGZsb2F0IGluX3dpZHRoOyAvLyByZWN0XFxyXFxuaW4gZmxvYXQgaW5faGVpZ2h0OyAvLyByZWN0XFxyXFxuaW4gZmxvYXQgaW5fcm90YXRlOyAvLyByZWN0XFxyXFxuaW4gZmxvYXQgaW5fcjsgLy8gY2lyY2xlXFxyXFxuaW4gdmVjMiBpbl92ZXJ0ZXhfYWxwaGE7IC8vIHRyaWFuZ2xlXFxyXFxuaW4gdmVjMiBpbl92ZXJ0ZXhfYmV0YTsgLy8gdHJpYW5nbGVcXHJcXG5pbiB2ZWMyIGluX3ZlcnRleF9nYW1tYTsgLy8gdHJpYW5nbGVcXHJcXG5pbiB2ZWM0IGluX2ZpbGw7XFxyXFxuaW4gZmxvYXQgaW5fc3Ryb2tlV2lkdGg7XFxyXFxuaW4gdmVjNCBpbl9zdHJva2VDb2xvcjtcXHJcXG5pbiB2ZWM0IGluX2lkO1xcclxcblxcclxcbm91dCB2ZWMyIHBvc2l0aW9uO1xcclxcbm91dCBmbG9hdCBzaGFwZTtcXHJcXG5vdXQgZmxvYXQgd2lkdGg7IC8vIHJlY3RcXHJcXG5vdXQgZmxvYXQgaGVpZ2h0OyAvLyByZWN0XFxyXFxub3V0IGZsb2F0IHJvdGF0ZTsgLy8gcmVjdFxcclxcbm91dCBmbG9hdCByOyAvLyBjaXJjbGVcXHJcXG5vdXQgdmVjMiB2ZXJ0ZXhfYWxwaGE7IC8vIHRyaWFuZ2xlXFxyXFxub3V0IHZlYzIgdmVydGV4X2JldGE7IC8vIHRyaWFuZ2xlXFxyXFxub3V0IHZlYzIgdmVydGV4X2dhbW1hOyAvLyB0cmlhbmdsZVxcclxcbm91dCB2ZWM0IGZpbGw7XFxyXFxub3V0IGZsb2F0IHN0cm9rZVdpZHRoO1xcclxcbm91dCB2ZWM0IHN0cm9rZUNvbG9yO1xcclxcbm91dCB2ZWM0IGlkO1xcclxcblxcclxcbnVuaWZvcm0gbWF0MyBwcm9qZWN0aW9uO1xcclxcbnVuaWZvcm0gdmVjMiBzY2FsZTtcXHJcXG51bmlmb3JtIHZlYzIgdHJhbnNsYXRlO1xcclxcbnVuaWZvcm0gdmVjMiB2aWV3cG9ydDtcXHJcXG51bmlmb3JtIGZsb2F0IHBpeGVsUmF0aW87XFxyXFxuXFxyXFxuXFxyXFxudmVjMiBjYWxjdWxhdGVfaW5uZXJfcG9pbnQgKHZlYzIgcDEsIHZlYzIgcDIsIHZlYzIgcDMpIHtcXHJcXG4gICAgZmxvYXQgaW5uZXJfcDEgPSBzcXJ0KGRvdChwMSwgcDEpKTtcXHJcXG4gICAgZmxvYXQgaW5uZXJfcDIgPSBzcXJ0KGRvdChwMiwgcDIpKTtcXHJcXG4gICAgZmxvYXQgaW5uZXJfcDMgPSBzcXJ0KGRvdChwMywgcDMpKTtcXHJcXG4gICAgdmVjMiBpbm5lciA9IChwMSAqIGlubmVyX3AxICsgcDIgKiBpbm5lcl9wMiArIHAzICogaW5uZXJfcDMpIC8gKGlubmVyX3AxICsgaW5uZXJfcDIgKyBpbm5lcl9wMyk7XFxyXFxuICAgIHJldHVybiBpbm5lcjtcXHJcXG59XFxyXFxuXFxyXFxuZmxvYXQgY2FsY3VsYXRlX3N0cm9rZV9zY2FsZSAodmVjMiBwMSwgdmVjMiBwMiwgdmVjMiBwMykge1xcclxcbiAgICB2ZWMyIGlubmVyID0gY2FsY3VsYXRlX2lubmVyX3BvaW50KHAxLCBwMiwgcDMpO1xcclxcbiAgICBmbG9hdCBhID0gZGlzdGFuY2UocDEsIGlubmVyKTtcXHJcXG4gICAgZmxvYXQgYiA9IGRpc3RhbmNlKHAyLCBpbm5lcik7XFxyXFxuICAgIGZsb2F0IGMgPSBkaXN0YW5jZShwMSwgcDIpO1xcclxcbiAgICBmbG9hdCBjb3NfYWxwaGEgPSAocG93KGIsIDIuMCkgKyBwb3coYywgMi4wKSAtIHBvdyhhLCAyLjApKSAvICgyLjAgKiBiICogYyk7XFxyXFxuICAgIGZsb2F0IHNpbl9hbHBoYSA9IHNxcnQoMS4wIC0gcG93KGNvc19hbHBoYSwgMi4wKSk7XFxyXFxuICAgIGZsb2F0IG5vcm1hbF9sZW5ndGggPSBzaW5fYWxwaGEgKiBhO1xcclxcbiAgICBmbG9hdCBzdHJva2Vfc2NhbGUgPSAxLjAgKyBzdHJva2VXaWR0aCAvIDIuMCAqIHBpeGVsUmF0aW8gLyBub3JtYWxfbGVuZ3RoO1xcclxcbiAgICByZXR1cm4gc3Ryb2tlX3NjYWxlO1xcclxcbn1cXHJcXG5cXHJcXG52b2lkIG1haW4odm9pZCkge1xcclxcbiAgICBpZCA9IGluX2lkO1xcclxcbiAgICByID0gaW5fcjtcXHJcXG4gICAgd2lkdGggPSBpbl93aWR0aDtcXHJcXG4gICAgaGVpZ2h0ID0gaW5faGVpZ2h0O1xcclxcbiAgICBzaGFwZSA9IGluX3NoYXBlO1xcclxcbiAgICBmaWxsID0gaW5fZmlsbDtcXHJcXG4gICAgc3Ryb2tlQ29sb3IgPSBpbl9zdHJva2VDb2xvcjtcXHJcXG4gICAgc3Ryb2tlV2lkdGggPSBpbl9zdHJva2VXaWR0aDtcXHJcXG4gICAgcm90YXRlID0gaW5fcm90YXRlO1xcclxcbiAgICBcXHJcXG4gICAgcG9zaXRpb24gPSBzY2FsZSAqIChpbl9wb3NpdGlvbiArIGluX29mZnNldCkgKyB0cmFuc2xhdGU7XFxyXFxuICAgIHZlcnRleF9hbHBoYSA9IGluX3ZlcnRleF9hbHBoYSAqIHBpeGVsUmF0aW87XFxyXFxuICAgIHZlcnRleF9iZXRhID0gaW5fdmVydGV4X2JldGEgKiBwaXhlbFJhdGlvO1xcclxcbiAgICB2ZXJ0ZXhfZ2FtbWEgPSBpbl92ZXJ0ZXhfZ2FtbWEgKiBwaXhlbFJhdGlvO1xcclxcblxcclxcbiAgICBtYXQzIHNjYWxlX21hdCA9IG1hdDMoXFxyXFxuICAgICAgICAxLCAwLCAwLFxcclxcbiAgICAgICAgMCwgMSwgMCxcXHJcXG4gICAgICAgIDAsIDAsIDFcXHJcXG4gICAgKTtcXHJcXG4gICAgbWF0MyByb3RhdGVfbWF0ID0gbWF0MyhcXHJcXG4gICAgICAgIDEsIDAsIDAsXFxyXFxuICAgICAgICAwLCAxLCAwLFxcclxcbiAgICAgICAgMCwgMCwgMVxcclxcbiAgICApO1xcclxcbiAgICBtYXQzIHRyYW5zbGF0ZV9tYXQgPSBtYXQzKFxcclxcbiAgICAgICAgMSwgMCwgMCxcXHJcXG4gICAgICAgIDAsIDEsIDAsXFxyXFxuICAgICAgICBwb3NpdGlvbi54LCBwb3NpdGlvbi55LCAxXFxyXFxuICAgICk7XFxyXFxuXFxyXFxuICAgIGlmIChzaGFwZSA9PSAwLjApIHsgLy8gY2lyY2xlIHNoYXBlXFxyXFxuICAgICAgICBmbG9hdCBzaXplID0gKHIgKyBzdHJva2VXaWR0aCAvIDIuKSAqIDIuICogMS41OyAgLy8gTk9URTogbXVsdGlwbHkgMi4gdG8gbWFrZSByYWRpdXMgdG8gZGlhbWV0ZXI7IG11bHRpcGx5IDEuNSB0byBwcmV2ZW50IGJvcmRlciBmYWN0b3JcXHJcXG4gICAgICAgIHNjYWxlX21hdCA9IG1hdDMoXFxyXFxuICAgICAgICAgICAgc2l6ZSwgMCwgMCxcXHJcXG4gICAgICAgICAgICAwLCBzaXplLCAwLFxcclxcbiAgICAgICAgICAgIDAsIDAsIDFcXHJcXG4gICAgICAgICk7XFxyXFxuICAgIH0gZWxzZSBpZiAoc2hhcGUgPT0gMS4wKSB7IC8vIHJlY3Qgc2hhcGVcXHJcXG4gICAgICAgIHNjYWxlX21hdCA9IG1hdDMoXFxyXFxuICAgICAgICAgICAgd2lkdGggKyBzdHJva2VXaWR0aCwgMCwgMCxcXHJcXG4gICAgICAgICAgICAwLCBoZWlnaHQgKyBzdHJva2VXaWR0aCwgMCxcXHJcXG4gICAgICAgICAgICAwLCAwLCAxXFxyXFxuICAgICAgICApO1xcclxcbiAgICAgICAgcm90YXRlX21hdCA9IG1hdDMoXFxyXFxuICAgICAgICAgICAgY29zKHJvdGF0ZSksIHNpbihyb3RhdGUpLCAwLFxcclxcbiAgICAgICAgICAgIC1zaW4ocm90YXRlKSwgY29zKHJvdGF0ZSksIDAsXFxyXFxuICAgICAgICAgICAgMCwgMCwgMVxcclxcbiAgICAgICAgKTtcXHJcXG4gICAgfSBlbHNlIGlmIChzaGFwZSA9PSAyLjApIHsgLy8gdHJpYW5nbGUgc2hhcGVcXHJcXG4gICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgbm9ybWFsIG9mIHRoZSBlZGdlOiBhbHBoYSA9PiBiZXRhXFxyXFxuICAgICAgICB2ZWMyIGlubmVyID0gY2FsY3VsYXRlX2lubmVyX3BvaW50KHZlcnRleF9hbHBoYSwgdmVydGV4X2JldGEsIHZlcnRleF9nYW1tYSk7XFxyXFxuICAgICAgICBmbG9hdCBzdHJva2Vfc2NhbGUgPSBjYWxjdWxhdGVfc3Ryb2tlX3NjYWxlKHZlcnRleF9hbHBoYSwgdmVydGV4X2JldGEsIHZlcnRleF9nYW1tYSk7XFxyXFxuXFxyXFxuICAgICAgICB2ZWMyIG91dGVyX3ZlcnRleF9hbHBoYSA9ICh2ZXJ0ZXhfYWxwaGEgLSBpbm5lcikgKiBzdHJva2Vfc2NhbGUgKyBpbm5lciA7IC8vIGNvbnNpZGVyIHN0cm9rZSBpblxcclxcbiAgICAgICAgdmVjMiBvdXRlcl92ZXJ0ZXhfYmV0YSA9ICh2ZXJ0ZXhfYmV0YSAtIGlubmVyKSAqIHN0cm9rZV9zY2FsZSArIGlubmVyIDsgLy8gY29uc2lkZXIgc3Ryb2tlIGluXFxyXFxuICAgICAgICB2ZWMyIG91dGVyX3ZlcnRleF9nYW1tYSA9ICh2ZXJ0ZXhfZ2FtbWEgLSBpbm5lcikgKiBzdHJva2Vfc2NhbGUgKyBpbm5lciA7IC8vIGNvbnNpZGVyIHN0cm9rZSBpblxcclxcblxcclxcblxcclxcbiAgICAgICAgd2lkdGggPSAobWF4KG1heChvdXRlcl92ZXJ0ZXhfYWxwaGEueCwgb3V0ZXJfdmVydGV4X2JldGEueCksIG91dGVyX3ZlcnRleF9nYW1tYS54KSAtIG1pbihtaW4ob3V0ZXJfdmVydGV4X2FscGhhLngsIG91dGVyX3ZlcnRleF9iZXRhLngpLCBvdXRlcl92ZXJ0ZXhfZ2FtbWEueCkpO1xcclxcbiAgICAgICAgaGVpZ2h0ID0gc3Ryb2tlX3NjYWxlICogKG1heChtYXgob3V0ZXJfdmVydGV4X2FscGhhLnksIG91dGVyX3ZlcnRleF9iZXRhLnkpLCBvdXRlcl92ZXJ0ZXhfZ2FtbWEueSktIG1pbihtaW4ob3V0ZXJfdmVydGV4X2FscGhhLnksIG91dGVyX3ZlcnRleF9iZXRhLnkpLCBvdXRlcl92ZXJ0ZXhfZ2FtbWEueSkpO1xcclxcblxcclxcbiAgICAgICAgc2NhbGVfbWF0ID0gbWF0MyhcXHJcXG4gICAgICAgICAgICB3aWR0aCwgMCwgMCxcXHJcXG4gICAgICAgICAgICAwLCBoZWlnaHQsIDAsXFxyXFxuICAgICAgICAgICAgMCwgMCwgMVxcclxcbiAgICAgICAgKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBtYXQzIHRyYW5zZm9ybSA9IHRyYW5zbGF0ZV9tYXQgKiByb3RhdGVfbWF0ICogc2NhbGVfbWF0O1xcclxcblxcclxcbiAgICBnbF9Qb3NpdGlvbiA9IHZlYzQocHJvamVjdGlvbiAqIHRyYW5zZm9ybSAqIGluVmVydGV4UG9zLCAxLik7XFxyXFxufVwiOyIsIi8qKlxyXG4gKiBAYXV0aG9yIFhpYW9kb25nIFpoYW8gPHpoYW94aWFvZG9uZ0B6anUuZWR1LmNuPlxyXG4gKiBAZGVzY3JpcHRpb24gTm9kZSB1c2luZyBpbiBSZW5kZXJlclxyXG4gKi9cclxuXHJcbmltcG9ydCB2ZXJ0U2hhZGVyU3RyIGZyb20gJy4vdmVydGV4Lmhsc2wnXHJcbmltcG9ydCBmcmFnU2hhZGVyU3RyIGZyb20gJy4vZnJhZ21lbnQuaGxzbCdcclxuaW1wb3J0IGlkVmVydFNoYWRlclN0ciBmcm9tICcuL2lkLXZlcnRleC5obHNsJ1xyXG5pbXBvcnQgaWRGcmFnU2hhZGVyU3RyIGZyb20gJy4vaWQtZnJhZ21lbnQuaGxzbCdcclxuaW1wb3J0IHsgTm9kZU1hbmFnZXJDb25maWdzIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcydcclxuaW1wb3J0IE5vZGUgZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvbm9kZSdcclxuaW1wb3J0IHsgUmVuZGVyRWxlbWVudE1hbmFnZXIgfSBmcm9tICcuLi9lbGVtZW50L3JlbmRlci1lbGVtZW50J1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlbmRlck5vZGVNYW5hZ2VyIGV4dGVuZHMgUmVuZGVyRWxlbWVudE1hbmFnZXIge1xyXG4gICAgLy8gcHJpdmF0ZSBpZFRvSW5kZXg6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNyZWF0ZSByZW5kZXIgbm9kZSBtYW5hZ2VyXHJcbiAgICAgKiBAcGFyYW0gZ2wgV2ViR0wgY29udGV4dFxyXG4gICAgICogQHBhcmFtIHBhcmFtcyBuZXNzZXNhcnkgY29uZmlncyBmb3Igbm9kZSBtYW5hZ2VyXHJcbiAgICAgKiBAcGFyYW0gaWRUZXh0dXJlIHRleHR1cmUgc3RvcmUgZWxlbWVudHMgaWQgb2YgZWFjaCBwaXhlbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQsXHJcbiAgICAgICAgcGFyYW1zOiBOb2RlTWFuYWdlckNvbmZpZ3MsXHJcbiAgICAgICAgaWRUZXh0dXJlOiBXZWJHTFRleHR1cmVcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKFxyXG4gICAgICAgICAgICAvKiB3ZWJnbCBjb250ZXh0ICovIGdsLFxyXG4gICAgICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgICAgICAgICAgLyogcGFyYW1ldGVycyAqLyB7Li4ucGFyYW1zLCBpbnN0YW5jZVZlcnRlY2VzOiBbXHJcbiAgICAgICAgICAgICAgICAtMC41LCAwLjUsIDEuMCxcclxuICAgICAgICAgICAgICAgIC0wLjUsIC0wLjUsIDEuMCxcclxuICAgICAgICAgICAgICAgIDAuNSwgMC41LCAxLjAsXHJcbiAgICAgICAgICAgICAgICAwLjUsIC0wLjUsIDEuMCxcclxuICAgICAgICAgICAgXX0sXHJcbiAgICAgICAgICAgIC8qIHNoYWRlciBzZXJpZXMgKi8ge1xyXG4gICAgICAgICAgICAgICAgdmVydGV4OiB2ZXJ0U2hhZGVyU3RyLFxyXG4gICAgICAgICAgICAgICAgZnJhZ21lbnQ6IGZyYWdTaGFkZXJTdHIsXHJcbiAgICAgICAgICAgICAgICBpZFZlcnRleDogaWRWZXJ0U2hhZGVyU3RyLFxyXG4gICAgICAgICAgICAgICAgaWRGcmFnbWVudDogaWRGcmFnU2hhZGVyU3RyXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8qIGlkVGV4dHVyZSAqLyBpZFRleHR1cmVcclxuICAgICAgICApXHJcbiAgICAgICAgdGhpcy5yZW5kZXJJZFRvRWxlbWVudCA9IHt9XHJcbiAgICAgICAgLy8gdGhpcy5pZFRvSW5kZXggPSB7fVxyXG5cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYXR0ci5uYW1lID09PSAnaW5fcG9zaXRpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyLmV4dHJhY3RBdHRyaWJ1dGVWYWx1ZUZyb20gPSAobm9kZTogTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gbm9kZS5wb3NpdGlvbigpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtwb3NpdGlvbi54LCBwb3NpdGlvbi55XVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIubmFtZSA9PT0gJ2luX3InKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyLmV4dHJhY3RBdHRyaWJ1dGVWYWx1ZUZyb20gPSAobm9kZTogTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbbm9kZS5yKCkgKiB0aGlzLnBpeGVsUmF0aW9dXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ci5uYW1lID09PSAnaW5fd2lkdGgnKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyLmV4dHJhY3RBdHRyaWJ1dGVWYWx1ZUZyb20gPSAobm9kZTogTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbbm9kZS53aWR0aCgpICogdGhpcy5waXhlbFJhdGlvXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIubmFtZSA9PT0gJ2luX2hlaWdodCcpIHtcclxuICAgICAgICAgICAgICAgIGF0dHIuZXh0cmFjdEF0dHJpYnV0ZVZhbHVlRnJvbSA9IChub2RlOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtub2RlLmhlaWdodCgpICogdGhpcy5waXhlbFJhdGlvXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIubmFtZSA9PT0gJ2luX3JvdGF0ZScpIHtcclxuICAgICAgICAgICAgICAgIGF0dHIuZXh0cmFjdEF0dHJpYnV0ZVZhbHVlRnJvbSA9IChub2RlOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtub2RlLnJvdGF0ZSgpXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIubmFtZSA9PT0gJ2luX2ZpbGwnKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyLmV4dHJhY3RBdHRyaWJ1dGVWYWx1ZUZyb20gPSAobm9kZTogTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGwgPSBub2RlLmZpbGwoKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbZmlsbC5yLCBmaWxsLmcsIGZpbGwuYiwgZmlsbC5hXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIubmFtZSA9PT0gJ2luX3N0cm9rZVdpZHRoJykge1xyXG4gICAgICAgICAgICAgICAgYXR0ci5leHRyYWN0QXR0cmlidXRlVmFsdWVGcm9tID0gKG5vZGU6IE5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW25vZGUuc3Ryb2tlV2lkdGgoKSAqIHRoaXMucGl4ZWxSYXRpb11cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRyLm5hbWUgPT09ICdpbl9zdHJva2VDb2xvcicpIHtcclxuICAgICAgICAgICAgICAgIGF0dHIuZXh0cmFjdEF0dHJpYnV0ZVZhbHVlRnJvbSA9IChub2RlOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3Ryb2tlQ29sb3IgPSBub2RlLnN0cm9rZUNvbG9yKClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3N0cm9rZUNvbG9yLnIsIHN0cm9rZUNvbG9yLmcsIHN0cm9rZUNvbG9yLmIsIHN0cm9rZUNvbG9yLmFdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ci5uYW1lID09PSAnaW5fc2hhcGUnKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyLmV4dHJhY3RBdHRyaWJ1dGVWYWx1ZUZyb20gPSAobm9kZTogTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoYXBlID0gbm9kZS5zaGFwZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoYXBlID09PSAncmVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsxXVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hhcGUgPT09ICd0cmlhbmdsZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMF1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ci5uYW1lID09PSAnaW5fdmVydGV4X2FscGhhJykge1xyXG4gICAgICAgICAgICAgICAgYXR0ci5leHRyYWN0QXR0cmlidXRlVmFsdWVGcm9tID0gKG5vZGU6IE5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2ZXJ0ZXhBbHBoYSA9IG5vZGUudmVydGV4QWxwaGEoKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbdmVydGV4QWxwaGEueCwgdmVydGV4QWxwaGEueV1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRyLm5hbWUgPT09ICdpbl92ZXJ0ZXhfYmV0YScpIHtcclxuICAgICAgICAgICAgICAgIGF0dHIuZXh0cmFjdEF0dHJpYnV0ZVZhbHVlRnJvbSA9IChub2RlOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmVydGV4QWxwaGEgPSBub2RlLnZlcnRleEJldGEoKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbdmVydGV4QWxwaGEueCwgdmVydGV4QWxwaGEueV1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRyLm5hbWUgPT09ICdpbl92ZXJ0ZXhfZ2FtbWEnKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyLmV4dHJhY3RBdHRyaWJ1dGVWYWx1ZUZyb20gPSAobm9kZTogTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleEFscGhhID0gbm9kZS52ZXJ0ZXhHYW1tYSgpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFt2ZXJ0ZXhBbHBoYS54LCB2ZXJ0ZXhBbHBoYS55XVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJlZnJlc2ggYWxsIG5vZGVzIHBvc2l0aW9uIGFmdGVyIGxhenkgdXBkYXRlXHJcbiAgICAgKiBAcGFyYW0gbm9kZXMgYWxsIG5vZGUgZGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVmcmVzaFBvc2l0aW9uKG5vZGVzOiBOb2RlW10pIHtcclxuICAgICAgICAvLyBzZXQgYXJyYXlcclxuICAgICAgICBub2Rlcy5mb3JFYWNoKChub2RlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IGNvbnNpZGVyIG5vZGUgYW5kIHJlbmRlciBub2RlIGF0dHJpYnV0ZSBtYXBwaW5nXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gbm9kZS5wb3NpdGlvbigpXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlcy5nZXQoJ2luX3Bvc2l0aW9uJykuYXJyYXlbMiAqIGldID0gcG9zaXRpb24ueFxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZ2V0KCdpbl9wb3NpdGlvbicpLmFycmF5WzIgKiBpICsgMV0gPSBwb3NpdGlvbi55XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFhdHRyLmlzQnVpbGRJbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBhdHRyLmJ1ZmZlcilcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYnVmZmVyU3ViRGF0YShcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLkFSUkFZX0JVRkZFUixcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuYXJyYXksXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLnNpemUgKiBub2Rlcy5sZW5ndGhcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgXCIjdmVyc2lvbiAzMDAgZXNcXHJcXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxyXFxuaW4gdmVjMyBpblZlcnRleFBvcztcXHJcXG5pbiBmbG9hdCBpbl9zaGFwZTtcXHJcXG5pbiB2ZWMyIGluX3Bvc2l0aW9uO1xcclxcbmluIHZlYzIgaW5fb2Zmc2V0O1xcclxcbmluIGZsb2F0IGluX3dpZHRoOyAvLyByZWN0XFxyXFxuaW4gZmxvYXQgaW5faGVpZ2h0OyAvLyByZWN0XFxyXFxuaW4gZmxvYXQgaW5fcm90YXRlOyAvLyByZWN0XFxyXFxuaW4gZmxvYXQgaW5fcjsgLy8gY2lyY2xlXFxyXFxuaW4gdmVjMiBpbl92ZXJ0ZXhfYWxwaGE7IC8vIHRyaWFuZ2xlXFxyXFxuaW4gdmVjMiBpbl92ZXJ0ZXhfYmV0YTsgLy8gdHJpYW5nbGVcXHJcXG5pbiB2ZWMyIGluX3ZlcnRleF9nYW1tYTsgLy8gdHJpYW5nbGVcXHJcXG5pbiB2ZWM0IGluX2ZpbGw7XFxyXFxuaW4gZmxvYXQgaW5fc3Ryb2tlV2lkdGg7XFxyXFxuaW4gdmVjNCBpbl9zdHJva2VDb2xvcjtcXHJcXG5cXHJcXG5vdXQgdmVjMiBwb3NpdGlvbjtcXHJcXG5vdXQgZmxvYXQgc2hhcGU7XFxyXFxub3V0IGZsb2F0IHdpZHRoOyAvLyByZWN0XFxyXFxub3V0IGZsb2F0IGhlaWdodDsgLy8gcmVjdFxcclxcbm91dCBmbG9hdCByb3RhdGU7IC8vIHJlY3RcXHJcXG5vdXQgZmxvYXQgcjsgLy8gY2lyY2xlXFxyXFxub3V0IHZlYzIgdmVydGV4X2FscGhhOyAvLyB0cmlhbmdsZVxcclxcbm91dCB2ZWMyIHZlcnRleF9iZXRhOyAvLyB0cmlhbmdsZVxcclxcbm91dCB2ZWMyIHZlcnRleF9nYW1tYTsgLy8gdHJpYW5nbGVcXHJcXG5vdXQgdmVjNCBmaWxsO1xcclxcbm91dCBmbG9hdCBzdHJva2VXaWR0aDtcXHJcXG5vdXQgdmVjNCBzdHJva2VDb2xvcjtcXHJcXG5cXHJcXG51bmlmb3JtIG1hdDMgcHJvamVjdGlvbjtcXHJcXG51bmlmb3JtIHZlYzIgc2NhbGU7XFxyXFxudW5pZm9ybSB2ZWMyIHRyYW5zbGF0ZTtcXHJcXG51bmlmb3JtIHZlYzIgdmlld3BvcnQ7XFxyXFxudW5pZm9ybSBmbG9hdCBwaXhlbFJhdGlvO1xcclxcblxcclxcblxcclxcbnZlYzIgY2FsY3VsYXRlX2lubmVyX3BvaW50ICh2ZWMyIHAxLCB2ZWMyIHAyLCB2ZWMyIHAzKSB7XFxyXFxuICAgIGZsb2F0IGlubmVyX3AxID0gc3FydChkb3QocDEsIHAxKSk7XFxyXFxuICAgIGZsb2F0IGlubmVyX3AyID0gc3FydChkb3QocDIsIHAyKSk7XFxyXFxuICAgIGZsb2F0IGlubmVyX3AzID0gc3FydChkb3QocDMsIHAzKSk7XFxyXFxuICAgIHZlYzIgaW5uZXIgPSAocDEgKiBpbm5lcl9wMSArIHAyICogaW5uZXJfcDIgKyBwMyAqIGlubmVyX3AzKSAvIChpbm5lcl9wMSArIGlubmVyX3AyICsgaW5uZXJfcDMpO1xcclxcbiAgICByZXR1cm4gaW5uZXI7XFxyXFxufVxcclxcblxcclxcbmZsb2F0IGNhbGN1bGF0ZV9zdHJva2Vfc2NhbGUgKHZlYzIgcDEsIHZlYzIgcDIsIHZlYzIgcDMpIHtcXHJcXG4gICAgdmVjMiBpbm5lciA9IGNhbGN1bGF0ZV9pbm5lcl9wb2ludChwMSwgcDIsIHAzKTtcXHJcXG4gICAgZmxvYXQgYSA9IGRpc3RhbmNlKHAxLCBpbm5lcik7XFxyXFxuICAgIGZsb2F0IGIgPSBkaXN0YW5jZShwMiwgaW5uZXIpO1xcclxcbiAgICBmbG9hdCBjID0gZGlzdGFuY2UocDEsIHAyKTtcXHJcXG4gICAgZmxvYXQgY29zX2FscGhhID0gKHBvdyhiLCAyLjApICsgcG93KGMsIDIuMCkgLSBwb3coYSwgMi4wKSkgLyAoMi4wICogYiAqIGMpO1xcclxcbiAgICBmbG9hdCBzaW5fYWxwaGEgPSBzcXJ0KDEuMCAtIHBvdyhjb3NfYWxwaGEsIDIuMCkpO1xcclxcbiAgICBmbG9hdCBub3JtYWxfbGVuZ3RoID0gc2luX2FscGhhICogYTtcXHJcXG4gICAgZmxvYXQgc3Ryb2tlX3NjYWxlID0gMS4wICsgc3Ryb2tlV2lkdGggLyAyLjAgKiBwaXhlbFJhdGlvIC8gbm9ybWFsX2xlbmd0aDtcXHJcXG4gICAgcmV0dXJuIHN0cm9rZV9zY2FsZTtcXHJcXG59XFxyXFxuXFxyXFxudm9pZCBtYWluKHZvaWQpIHtcXHJcXG4gICAgciA9IGluX3I7XFxyXFxuICAgIHdpZHRoID0gaW5fd2lkdGg7XFxyXFxuICAgIGhlaWdodCA9IGluX2hlaWdodDtcXHJcXG4gICAgc2hhcGUgPSBpbl9zaGFwZTtcXHJcXG4gICAgZmlsbCA9IGluX2ZpbGw7XFxyXFxuICAgIHN0cm9rZUNvbG9yID0gaW5fc3Ryb2tlQ29sb3I7XFxyXFxuICAgIHN0cm9rZVdpZHRoID0gaW5fc3Ryb2tlV2lkdGg7XFxyXFxuICAgIHJvdGF0ZSA9IGluX3JvdGF0ZTtcXHJcXG4gICAgXFxyXFxuICAgIHBvc2l0aW9uID0gc2NhbGUgKiAoaW5fcG9zaXRpb24gKyBpbl9vZmZzZXQpICsgdHJhbnNsYXRlO1xcclxcbiAgICB2ZXJ0ZXhfYWxwaGEgPSBpbl92ZXJ0ZXhfYWxwaGEgKiBwaXhlbFJhdGlvO1xcclxcbiAgICB2ZXJ0ZXhfYmV0YSA9IGluX3ZlcnRleF9iZXRhICogcGl4ZWxSYXRpbztcXHJcXG4gICAgdmVydGV4X2dhbW1hID0gaW5fdmVydGV4X2dhbW1hICogcGl4ZWxSYXRpbztcXHJcXG5cXHJcXG4gICAgbWF0MyBzY2FsZV9tYXQgPSBtYXQzKFxcclxcbiAgICAgICAgMSwgMCwgMCxcXHJcXG4gICAgICAgIDAsIDEsIDAsXFxyXFxuICAgICAgICAwLCAwLCAxXFxyXFxuICAgICk7XFxyXFxuICAgIG1hdDMgcm90YXRlX21hdCA9IG1hdDMoXFxyXFxuICAgICAgICAxLCAwLCAwLFxcclxcbiAgICAgICAgMCwgMSwgMCxcXHJcXG4gICAgICAgIDAsIDAsIDFcXHJcXG4gICAgKTtcXHJcXG4gICAgbWF0MyB0cmFuc2xhdGVfbWF0ID0gbWF0MyhcXHJcXG4gICAgICAgIDEsIDAsIDAsXFxyXFxuICAgICAgICAwLCAxLCAwLFxcclxcbiAgICAgICAgcG9zaXRpb24ueCwgcG9zaXRpb24ueSwgMVxcclxcbiAgICApO1xcclxcblxcclxcbiAgICBpZiAoc2hhcGUgPT0gMC4wKSB7IC8vIGNpcmNsZSBzaGFwZVxcclxcbiAgICAgICAgZmxvYXQgc2l6ZSA9IChyICsgc3Ryb2tlV2lkdGggLyAyLikgKiAyLiAqIDEuNTsgIC8vIE5PVEU6IG11bHRpcGx5IDIuIHRvIG1ha2UgcmFkaXVzIHRvIGRpYW1ldGVyOyBtdWx0aXBseSAxLjUgdG8gcHJldmVudCBib3JkZXIgZmFjdG9yXFxyXFxuICAgICAgICBzY2FsZV9tYXQgPSBtYXQzKFxcclxcbiAgICAgICAgICAgIHNpemUsIDAsIDAsXFxyXFxuICAgICAgICAgICAgMCwgc2l6ZSwgMCxcXHJcXG4gICAgICAgICAgICAwLCAwLCAxXFxyXFxuICAgICAgICApO1xcclxcbiAgICB9IGVsc2UgaWYgKHNoYXBlID09IDEuMCkgeyAvLyByZWN0IHNoYXBlXFxyXFxuICAgICAgICBzY2FsZV9tYXQgPSBtYXQzKFxcclxcbiAgICAgICAgICAgIHdpZHRoICsgc3Ryb2tlV2lkdGgsIDAsIDAsXFxyXFxuICAgICAgICAgICAgMCwgaGVpZ2h0ICsgc3Ryb2tlV2lkdGgsIDAsXFxyXFxuICAgICAgICAgICAgMCwgMCwgMVxcclxcbiAgICAgICAgKTtcXHJcXG4gICAgICAgIHJvdGF0ZV9tYXQgPSBtYXQzKFxcclxcbiAgICAgICAgICAgIGNvcyhyb3RhdGUpLCBzaW4ocm90YXRlKSwgMCxcXHJcXG4gICAgICAgICAgICAtc2luKHJvdGF0ZSksIGNvcyhyb3RhdGUpLCAwLFxcclxcbiAgICAgICAgICAgIDAsIDAsIDFcXHJcXG4gICAgICAgICk7XFxyXFxuICAgIH0gZWxzZSBpZiAoc2hhcGUgPT0gMi4wKSB7IC8vIHRyaWFuZ2xlIHNoYXBlXFxyXFxuICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIG5vcm1hbCBvZiB0aGUgZWRnZTogYWxwaGEgPT4gYmV0YVxcclxcbiAgICAgICAgdmVjMiBpbm5lciA9IGNhbGN1bGF0ZV9pbm5lcl9wb2ludCh2ZXJ0ZXhfYWxwaGEsIHZlcnRleF9iZXRhLCB2ZXJ0ZXhfZ2FtbWEpO1xcclxcbiAgICAgICAgZmxvYXQgc3Ryb2tlX3NjYWxlID0gY2FsY3VsYXRlX3N0cm9rZV9zY2FsZSh2ZXJ0ZXhfYWxwaGEsIHZlcnRleF9iZXRhLCB2ZXJ0ZXhfZ2FtbWEpO1xcclxcblxcclxcbiAgICAgICAgdmVjMiBvdXRlcl92ZXJ0ZXhfYWxwaGEgPSAodmVydGV4X2FscGhhIC0gaW5uZXIpICogc3Ryb2tlX3NjYWxlICsgaW5uZXIgOyAvLyBjb25zaWRlciBzdHJva2UgaW5cXHJcXG4gICAgICAgIHZlYzIgb3V0ZXJfdmVydGV4X2JldGEgPSAodmVydGV4X2JldGEgLSBpbm5lcikgKiBzdHJva2Vfc2NhbGUgKyBpbm5lciA7IC8vIGNvbnNpZGVyIHN0cm9rZSBpblxcclxcbiAgICAgICAgdmVjMiBvdXRlcl92ZXJ0ZXhfZ2FtbWEgPSAodmVydGV4X2dhbW1hIC0gaW5uZXIpICogc3Ryb2tlX3NjYWxlICsgaW5uZXIgOyAvLyBjb25zaWRlciBzdHJva2UgaW5cXHJcXG5cXHJcXG4gICAgICAgIC8vIHRvIGVuc3VyZSB0aGUgZnJhZ21lbnQgY3V0dGluZyBpcyB3aXRoaW4gdGhlIHJlY3RhbmdsZVxcclxcbiAgICAgICAgd2lkdGggPSAxLjUgKiAobWF4KG1heChvdXRlcl92ZXJ0ZXhfYWxwaGEueCwgb3V0ZXJfdmVydGV4X2JldGEueCksIG91dGVyX3ZlcnRleF9nYW1tYS54KSAtIG1pbihtaW4ob3V0ZXJfdmVydGV4X2FscGhhLngsIG91dGVyX3ZlcnRleF9iZXRhLngpLCBvdXRlcl92ZXJ0ZXhfZ2FtbWEueCkpO1xcclxcbiAgICAgICAgaGVpZ2h0ID0gMS41ICogKG1heChtYXgob3V0ZXJfdmVydGV4X2FscGhhLnksIG91dGVyX3ZlcnRleF9iZXRhLnkpLCBvdXRlcl92ZXJ0ZXhfZ2FtbWEueSktIG1pbihtaW4ob3V0ZXJfdmVydGV4X2FscGhhLnksIG91dGVyX3ZlcnRleF9iZXRhLnkpLCBvdXRlcl92ZXJ0ZXhfZ2FtbWEueSkpO1xcclxcblxcclxcbiAgICAgICAgc2NhbGVfbWF0ID0gbWF0MyhcXHJcXG4gICAgICAgICAgICB3aWR0aCwgMCwgMCxcXHJcXG4gICAgICAgICAgICAwLCBoZWlnaHQsIDAsXFxyXFxuICAgICAgICAgICAgMCwgMCwgMVxcclxcbiAgICAgICAgKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBtYXQzIHRyYW5zZm9ybSA9IHRyYW5zbGF0ZV9tYXQgKiByb3RhdGVfbWF0ICogc2NhbGVfbWF0O1xcclxcblxcclxcbiAgICBnbF9Qb3NpdGlvbiA9IHZlYzQocHJvamVjdGlvbiAqIHRyYW5zZm9ybSAqIGluVmVydGV4UG9zLCAxLik7XFxyXFxufVwiOyIsIi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gcmVuZGVyIGdyYXBoIHVzaW5nIHdlYmdsXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUmVuZGVyTm9kZU1hbmFnZXIgfSBmcm9tICcuL2VsZW1lbnRzL25vZGUvcmVuZGVyLW5vZGUnXHJcbmltcG9ydCBOb2RlIGZyb20gJy4uL2VsZW1lbnRzL25vZGUnXHJcbmltcG9ydCBMaW5rIGZyb20gJ3NyYy9lbGVtZW50cy9saW5rJ1xyXG5pbXBvcnQgeyBSZW5kZXJMaW5rTWFuYWdlciB9IGZyb20gJy4vZWxlbWVudHMvbGluay9yZW5kZXItbGluaydcclxuaW1wb3J0IHsgVHJhbnNmb3JtLCBQb3NpdGlvbiB9IGZyb20gJy4uL2ludGVyZmFjZXMnXHJcbmltcG9ydCB7IFJlbmRlcmVyQ29uZmlncyB9IGZyb20gJy4vaW50ZXJmYWNlcydcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdzcmMvaW50ZXJmYWNlcydcclxuaW1wb3J0IHsgZGVjb2RlUmVuZGVySWQgfSBmcm9tICcuL3V0aWxzJ1xyXG5cclxuY29uc3QgTU9ESUZJRURfRUxFTUVOVFNfQ09VTlRfVVBQRVJfVEhSRVNIT0xEID0gMTAwIC8vIHdoZW4gbW9kaWZpZWRFbGVtZW50Q291bnQgaXMgbGFyZ2VyIHRoYW4gaXQsICRfc2hvdWxkTGF6eVVwZGF0ZSB3aWxsIGJlIHRydWVcclxuXHJcbmV4cG9ydCBjbGFzcyBSZW5kZXJlciB7XHJcbiAgICBwdWJsaWMgbm9kZU1hbmFnZXI6IFJlbmRlck5vZGVNYW5hZ2VyXHJcbiAgICBwdWJsaWMgbGlua01hbmFnZXI6IFJlbmRlckxpbmtNYW5hZ2VyXHJcblxyXG4gICAgcHVibGljIG1vZGlmaWVkRWxlbWVudHNDb3VudCA9IDAgLy8gcmVjb3JkIG1vZGlmaWVkIGxpbmsgbnVtIHRvIGNvbnRyb2wgbGF6eSB1cGRhdGVcclxuICAgIHB1YmxpYyBzaG91bGRMYXp5VXBkYXRlID0gZmFsc2UgLy8gZmxhZyB0byBjb250cm9sIGxhenkgdXBkYXRlXHJcblxyXG4gICAgcHJpdmF0ZSBnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dFxyXG4gICAgcHJpdmF0ZSBiYWNrZ3JvdW5kQ29sb3I6IENvbG9yXHJcbiAgICBwcml2YXRlIHdpZHRoOiBudW1iZXJcclxuICAgIHByaXZhdGUgaGVpZ2h0OiBudW1iZXJcclxuICAgIHByaXZhdGUgaWRUZXh0dXJlOiBXZWJHTFRleHR1cmVcclxuXHJcbiAgICBwcml2YXRlIGdldEFsbE5vZGVzOiAoKSA9PiBOb2RlW11cclxuICAgIHByaXZhdGUgZ2V0QWxsTGlua3M6ICgpID0+IExpbmtbXVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlIHJlbmRlcmVyIG9iamVjdFxyXG4gICAgICogQHBhcmFtIGNvbmZpZ3Mge2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBiYWNrZ3JvdW5kQ29sb3I6IENvbG9yLCBkZWZhdWx0Q29uZmlnczogT2JqZWN0fSBjb25maWdzIHBhc3NlZCB0byByZW5kZXJlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoY29uZmlnczogUmVuZGVyZXJDb25maWdzKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBjYW52YXMsXHJcbiAgICAgICAgICAgIHdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgICAgbm9kZUxpbWl0LFxyXG4gICAgICAgICAgICBsaW5rTGltaXQsXHJcbiAgICAgICAgICAgIGdldEFsbE5vZGVzLFxyXG4gICAgICAgICAgICBnZXRBbGxMaW5rc1xyXG4gICAgICAgIH0gPSBjb25maWdzXHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wyJylcclxuICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXRWIHJlcXVpcmVzIFdlYkdMMiBzdXBwb3J0ZWQgYnkgeW91ciBicm93c2VyJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoXHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcclxuXHJcbiAgICAgICAgdGhpcy5nZXRBbGxOb2RlcyA9IGdldEFsbE5vZGVzXHJcbiAgICAgICAgdGhpcy5nZXRBbGxMaW5rcyA9IGdldEFsbExpbmtzXHJcblxyXG4gICAgICAgIHRoaXMuaW5pdElkVGV4dHVyZSgpXHJcblxyXG4gICAgICAgIHRoaXMubm9kZU1hbmFnZXIgPSBuZXcgUmVuZGVyTm9kZU1hbmFnZXIoXHJcbiAgICAgICAgICAgIHRoaXMuZ2wsXHJcbiAgICAgICAgICAgIHsgd2lkdGgsIGhlaWdodCwgbGltaXQ6IG5vZGVMaW1pdCB9LFxyXG4gICAgICAgICAgICB0aGlzLmlkVGV4dHVyZVxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLmxpbmtNYW5hZ2VyID0gbmV3IFJlbmRlckxpbmtNYW5hZ2VyKFxyXG4gICAgICAgICAgICB0aGlzLmdsLFxyXG4gICAgICAgICAgICB7IHdpZHRoLCBoZWlnaHQsIGxpbWl0OiBsaW5rTGltaXQgfSxcclxuICAgICAgICAgICAgdGhpcy5pZFRleHR1cmVcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQgY2xlYXJDb2xvciBmb3IgcmVuZGVyZXJcclxuICAgICAqIEBwYXJhbSBjb2xvciBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldEJhY2tncm91bmRDb2xvcihjb2xvcjogQ29sb3IpIHtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IGNvbG9yXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjbGVhciBkYXRhIGluIHJlbmRlcmVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbGVhckRhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlTWFuYWdlci5jbGVhckRhdGEoKVxyXG4gICAgICAgIHRoaXMubGlua01hbmFnZXIuY2xlYXJEYXRhKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCBub2RlcyB0byBub2RlIG1hbmFnZXJcclxuICAgICAqIEBwYXJhbSBub2RlcyBub2RlIGRhdGEgaW4gTmV0VlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkTm9kZXMobm9kZXM6IE5vZGVbXSkge1xyXG4gICAgICAgIHRoaXMubm9kZU1hbmFnZXIuYWRkRGF0YShub2RlcylcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCBsaW5rcyB0byBsaW5rIG1hbmFnZXJcclxuICAgICAqIEBwYXJhbSBsaW5rcyBsaW5rIGRhdGEgaW4gTmV0VlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkTGlua3MobGlua3M6IExpbmtbXSkge1xyXG4gICAgICAgIHRoaXMubGlua01hbmFnZXIuYWRkRGF0YShsaW5rcylcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VHJhbnNmb3JtKHRyYW5zZm9ybTogVHJhbnNmb3JtKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlTWFuYWdlci5zZXRUcmFuc2Zvcm0odHJhbnNmb3JtKVxyXG4gICAgICAgIHRoaXMubGlua01hbmFnZXIuc2V0VHJhbnNmb3JtKHRyYW5zZm9ybSlcclxuICAgICAgICB0aGlzLmRyYXcoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZHJhdyBhbGwgZWxlbWVudHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRyYXcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkTGF6eVVwZGF0ZSkge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBub3Qgb25seSBwb3NpdGlvbiBuZWVkcyB0byBiZSByZWZyZXNoZWQsIGJ1dCBhbHNvIG90aGVyIHN0eWxlc1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVNYW5hZ2VyLnJlZnJlc2hQb3NpdGlvbih0aGlzLmdldEFsbE5vZGVzKCkpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmxpbmtNYW5hZ2VyLnJlZnJlc2hQb3NpdGlvbih0aGlzLmdldEFsbExpbmtzKCkpXHJcbiAgICAgICAgICAgIHRoaXMuc2hvdWxkTGF6eVVwZGF0ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMubW9kaWZpZWRFbGVtZW50c0NvdW50ID0gMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5GUkFNRUJVRkZFUiwgdGhpcy5pZFRleHR1cmUpXHJcbiAgICAgICAgdGhpcy5nbC5jbGVhckNvbG9yKDEsIDEsIDEsIDEpXHJcbiAgICAgICAgdGhpcy5nbC5jbGVhcih0aGlzLmdsLkNPTE9SX0JVRkZFUl9CSVQpXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5GUkFNRUJVRkZFUiwgbnVsbClcclxuXHJcbiAgICAgICAgdGhpcy5nbC5jbGVhckNvbG9yKFxyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvci5yLFxyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvci5nLFxyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvci5iLFxyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvci5hXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMuZ2wuY2xlYXIodGhpcy5nbC5DT0xPUl9CVUZGRVJfQklUKVxyXG4gICAgICAgIHRoaXMubGlua01hbmFnZXIuZHJhdygpXHJcbiAgICAgICAgdGhpcy5ub2RlTWFuYWdlci5kcmF3KClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldCBlbGVtZW50J3MgaWQgYXQgKHgsIHkpIG9mIGNhbnZhcyBpZiBleGlzdHNcclxuICAgICAqIEBwYXJhbSB4IHggcG9zXHJcbiAgICAgKiBAcGFyYW0geSB5IHBvc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0SWRCeVBvc2l0aW9uKHBvc2l0aW9uOiBQb3NpdGlvbik6IHN0cmluZyB8IFtzdHJpbmcsIHN0cmluZ10ge1xyXG4gICAgICAgIGNvbnN0IHJlbmRlcklkID0gdGhpcy5yZWFkSWRUZXh0dXJlKHBvc2l0aW9uKVxyXG4gICAgICAgIGlmIChyZW5kZXJJZCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChyZW5kZXJJZCAlIDIgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIE5PVEU6IG5vZGUgaGFzIGV2ZW4gcmVuZGVyIGlkLCBsaW5rIGhhcyBvZGQgcmVuZGVyIGlkXHJcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5ub2RlTWFuYWdlci5nZXRFbGVtZW50QnlSZW5kZXJJZChyZW5kZXJJZCkgYXMgTm9kZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuaWQoKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGluayA9IHRoaXMubGlua01hbmFnZXIuZ2V0RWxlbWVudEJ5UmVuZGVySWQocmVuZGVySWQpIGFzIExpbmtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZVRhcmdldCA9IGxpbmsuc291cmNlVGFyZ2V0KClcclxuICAgICAgICAgICAgICAgIHJldHVybiBbc291cmNlVGFyZ2V0LnNvdXJjZS5pZCgpLCBzb3VyY2VUYXJnZXQudGFyZ2V0LmlkKCldXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZWFkIHBpeGVsIHZhbHVlIGF0ICh4LCB5KSBvZiB0ZXh0dXJlXHJcbiAgICAgKiBAcGFyYW0geCB4IHBvc1xyXG4gICAgICogQHBhcmFtIHkgeSBwb3NcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRJZFRleHR1cmUocG9zaXRpb246IFBvc2l0aW9uKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCByYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcclxuICAgICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLlJFQURfRlJBTUVCVUZGRVIsIHRoaXMuaWRUZXh0dXJlKVxyXG4gICAgICAgIGNvbnN0IHJlYWRQaXhlbEJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KFsyNTUsIDI1NSwgMjU1LCAyNTVdKSAvLyAtMVxyXG4gICAgICAgIHRoaXMuZ2wucmVhZFBpeGVscyhcclxuICAgICAgICAgICAgLy8gIVdhcm5pbmc6IHggYW5kIHkgYXJlIG9wdGlvbmFsIGluIFBvc2l0aW9uLCBuZWVkIHRvIGNoZWNrIHRoZW1cclxuICAgICAgICAgICAgcG9zaXRpb24ueCAqIHJhdGlvLFxyXG4gICAgICAgICAgICBwb3NpdGlvbi55ICogcmF0aW8sXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgIHRoaXMuZ2wuUkdCQSxcclxuICAgICAgICAgICAgdGhpcy5nbC5VTlNJR05FRF9CWVRFLFxyXG4gICAgICAgICAgICByZWFkUGl4ZWxCdWZmZXJcclxuICAgICAgICApXHJcbiAgICAgICAgY29uc3Qgb2JqZWN0SUQgPSBkZWNvZGVSZW5kZXJJZChyZWFkUGl4ZWxCdWZmZXIpXHJcblxyXG4gICAgICAgIHJldHVybiBvYmplY3RJRFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaW5jcmVhc2UgbW9kaWZpZWQgZWxlbWVudHMgY291bnRcclxuICAgICAqIFdoZW4gaXQgaXMgbGFyZ2VyIHRoYW4gYSB0aHJlc2hvbGQsIHRoZSBsYXp5IHVwZGF0ZSBtb2RlIHdpbGwgYmUgdHVybmVkIG9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5jcmVhc2VNb2RpZmllZEVsZW1lbnRzQ291bnRCeShuOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm1vZGlmaWVkRWxlbWVudHNDb3VudCArPSBuXHJcbiAgICAgICAgaWYgKHRoaXMubW9kaWZpZWRFbGVtZW50c0NvdW50ID4gTU9ESUZJRURfRUxFTUVOVFNfQ09VTlRfVVBQRVJfVEhSRVNIT0xEKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvdWxkTGF6eVVwZGF0ZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpbml0IFdlYkdMIHRleHR1cmUgZm9yIHJlY29yZGluZyBwb3NpdGlvbiBvZiBlbGVtZW50c1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGluaXRJZFRleHR1cmUoKSB7XHJcbiAgICAgICAgY29uc3QgZ2wgPSB0aGlzLmdsXHJcbiAgICAgICAgY29uc3QgcGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcclxuICAgICAgICBjb25zdCBzY3JlZW5XaWR0aCA9IHRoaXMud2lkdGggKiBwaXhlbFJhdGlvXHJcbiAgICAgICAgY29uc3Qgc2NyZWVuSGVpZ2h0ID0gdGhpcy5oZWlnaHQgKiBwaXhlbFJhdGlvXHJcblxyXG4gICAgICAgIGNvbnN0IGZibyA9IGdsLmNyZWF0ZUZyYW1lYnVmZmVyKClcclxuICAgICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIGZibylcclxuXHJcbiAgICAgICAgY29uc3QgaWRUZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpXHJcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgaWRUZXh0dXJlKVxyXG4gICAgICAgIGdsLnRleEltYWdlMkQoXHJcbiAgICAgICAgICAgIGdsLlRFWFRVUkVfMkQsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIGdsLlJHQkEsXHJcbiAgICAgICAgICAgIHNjcmVlbldpZHRoLFxyXG4gICAgICAgICAgICBzY3JlZW5IZWlnaHQsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIGdsLlJHQkEsXHJcbiAgICAgICAgICAgIGdsLlVOU0lHTkVEX0JZVEUsXHJcbiAgICAgICAgICAgIG51bGxcclxuICAgICAgICApXHJcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUilcclxuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTElORUFSKVxyXG4gICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpXHJcbiAgICAgICAgZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQoZ2wuRlJBTUVCVUZGRVIsIGdsLkNPTE9SX0FUVEFDSE1FTlQwLCBnbC5URVhUVVJFXzJELCBpZFRleHR1cmUsIDApXHJcblxyXG4gICAgICAgIC8vIFRPRE86IG5lZWQgc2ltcGxpZnlcclxuICAgICAgICBnbC5kcmF3QnVmZmVycyhbMF0ubWFwKCh2KSA9PiB2ICsgZ2wuQ09MT1JfQVRUQUNITUVOVDApKVxyXG5cclxuICAgICAgICBjb25zdCByYm8gPSBnbC5jcmVhdGVSZW5kZXJidWZmZXIoKVxyXG4gICAgICAgIGdsLmJpbmRSZW5kZXJidWZmZXIoZ2wuUkVOREVSQlVGRkVSLCByYm8pXHJcbiAgICAgICAgZ2wuY2xlYXJDb2xvcigxLCAxLCAxLCAxKVxyXG4gICAgICAgIGdsLnJlbmRlcmJ1ZmZlclN0b3JhZ2UoZ2wuUkVOREVSQlVGRkVSLCBnbC5ERVBUSDI0X1NURU5DSUw4LCBzY3JlZW5XaWR0aCwgc2NyZWVuSGVpZ2h0KVxyXG4gICAgICAgIGdsLmJpbmRSZW5kZXJidWZmZXIoZ2wuUkVOREVSQlVGRkVSLCBudWxsKVxyXG4gICAgICAgIGdsLmZyYW1lYnVmZmVyUmVuZGVyYnVmZmVyKFxyXG4gICAgICAgICAgICBnbC5GUkFNRUJVRkZFUixcclxuICAgICAgICAgICAgZ2wuREVQVEhfU1RFTkNJTF9BVFRBQ0hNRU5ULFxyXG4gICAgICAgICAgICBnbC5SRU5ERVJCVUZGRVIsXHJcbiAgICAgICAgICAgIHJib1xyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgaWYgKGdsLmNoZWNrRnJhbWVidWZmZXJTdGF0dXMoZ2wuRlJBTUVCVUZGRVIpICE9PSBnbC5GUkFNRUJVRkZFUl9DT01QTEVURSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZyYW1lYnVmZmVyIGdlbmVyYXRlIGZhaWxlZCcpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpXHJcblxyXG4gICAgICAgIHRoaXMuaWRUZXh0dXJlID0gZmJvXHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XHJcbiAqIEBkZXNjcmlwdGlvbiB1dGlsaXR5IGZ1bmN0aW9ucyBmb3IgcmVuZGVyZXJcclxuICovXHJcblxyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJy4uL2ludGVyZmFjZXMnXHJcbmltcG9ydCB7IFJlbmRlckF0dHJpYnV0ZSB9IGZyb20gJy4vaW50ZXJmYWNlcydcclxuXHJcbi8qKlxyXG4gKiBjb21waWxlIHdlYmdsIHNoYWRlclxyXG4gKiBAcGFyYW0gZ2wgV2ViR0wgaW5zdGFuY2VcclxuICogQHBhcmFtIHNoYWRlclN0ciBzaGFkZXIgZmlsZSBpbiBzdHJpbmdcclxuICogQHBhcmFtIHNoYWRlclR5cGUgdmVydGV4IG9yIGZyYWdtZW50IHNoYWRlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVTaGFkZXIoXHJcbiAgICBnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dCxcclxuICAgIHNoYWRlclN0cjogc3RyaW5nLFxyXG4gICAgc2hhZGVyVHlwZTogbnVtYmVyXHJcbik6IFdlYkdMU2hhZGVyIHtcclxuICAgIGNvbnN0IHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcihzaGFkZXJUeXBlKVxyXG4gICAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc2hhZGVyU3RyKVxyXG4gICAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpXHJcbiAgICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU2hhZGVyIGNvbXBpbGUgZmFpbGVkOiAnICsgZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzaGFkZXJcclxufVxyXG5cclxuLyoqXHJcbiAqIGdlbmVyYXRlIFdlYkdMIHByb2dyYW1cclxuICogQHBhcmFtIGdsIFdlYkdMIGluc3RhbmNlXHJcbiAqIEBwYXJhbSB2ZXJ0U2hhZGVyU3RyIHZlcnRleCBzaGFkZXIgaW4gc3RyaW5nIGZvcm1hdFxyXG4gKiBAcGFyYW0gZnJhZ1NoYWRlclN0ciBmcmFnbWVudCBzaGFkZXIgaW4gc3RyaW5nIGZvcm1hdFxyXG4gKiBAcGFyYW0gYXR0cmlidXRlcyBhdHRyaWJ1dGVzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbShcclxuICAgIGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0LFxyXG4gICAgdmVydFNoYWRlclN0cjogc3RyaW5nLFxyXG4gICAgZnJhZ1NoYWRlclN0cjogc3RyaW5nLFxyXG4gICAgYXR0cmlidXRlczogTWFwPHN0cmluZywgUmVuZGVyQXR0cmlidXRlPlxyXG4pOiBXZWJHTFByb2dyYW0ge1xyXG4gICAgY29uc3QgdmVydFNoYWRlciA9IGNvbXBpbGVTaGFkZXIoZ2wsIHZlcnRTaGFkZXJTdHIsIGdsLlZFUlRFWF9TSEFERVIpXHJcbiAgICBjb25zdCBmcmFnU2hhZGVyID0gY29tcGlsZVNoYWRlcihnbCwgZnJhZ1NoYWRlclN0ciwgZ2wuRlJBR01FTlRfU0hBREVSKVxyXG5cclxuICAgIGNvbnN0IHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKClcclxuXHJcbiAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIpID0+IHtcclxuICAgICAgICBnbC5iaW5kQXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgYXR0ci5sb2NhdGlvbiwgYXR0ci5uYW1lKVxyXG4gICAgfSlcclxuXHJcbiAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydFNoYWRlcilcclxuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnU2hhZGVyKVxyXG5cclxuICAgIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pXHJcbiAgICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgbGluayBzaGFkZXJzOiAke2dsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pfWApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByb2dyYW1cclxufVxyXG5cclxuLyoqXHJcbiAqIGNyZWF0ZSBXZWJHTCBhcnJheSBidWZmZXIgZ2l2ZW4gZGF0YSBhcnJheVxyXG4gKiBAcGFyYW0gZ2wgV2ViR0wgY29udGV4dFxyXG4gKiBAcGFyYW0gZGF0YSBkYXRhIHRvIHN0b3JlIGluIGJ1ZmZlclxyXG4gKiBAcmV0dXJucyBXZWJHTCBidWZmZXIgc3RvcmUgZ2l2ZW4gZGF0YVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFycmF5QnVmZmVyKGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0LCBkYXRhOiBGbG9hdDMyQXJyYXkpOiBXZWJHTEJ1ZmZlciB7XHJcbiAgICBjb25zdCBidWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKVxyXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlcilcclxuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBkYXRhLCBnbC5EWU5BTUlDX0RSQVcpXHJcbiAgICByZXR1cm4gYnVmZmVyXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBleHRyYWN0IGF0dHJpYnV0ZXMgZnJvbSBhIHNoYWRlciBzcmluZ1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gc2hhZGVyU3RyXHJcbiAqIEByZXR1cm5zIHtSZW5kZXJBdHRyaWJ1dGVbXX0gYXR0cmlidXRlcyBhcnJheVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RBdHRyaWJ1dGVzRnJvbVNoYWRlcihzaGFkZXJTdHI6IHN0cmluZyk6IE1hcDxzdHJpbmcsIFJlbmRlckF0dHJpYnV0ZT4ge1xyXG4gICAgY29uc3QgbWF0Y2hpbmdzID0gc2hhZGVyU3RyLm1hdGNoKC9pblxccy4qOy9nKVxyXG4gICAgY29uc3QgYXR0cmlidXRlc01hcCA9IG5ldyBNYXAoKVxyXG4gICAgbWF0Y2hpbmdzLmZvckVhY2goKG1hdGNoLCBsb2NhdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBtYXRjaC5zcGxpdCgnICcpWzJdLnNsaWNlKDAsIC0xKVxyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBtYXRjaC5zcGxpdCgnICcpWzFdXHJcbiAgICAgICAgbGV0IHNpemUgPSAxXHJcbiAgICAgICAgaWYgKHR5cGUuc2xpY2UoMCwgMykgPT09ICd2ZWMnKSB7XHJcbiAgICAgICAgICAgIHNpemUgPSBOdW1iZXIodHlwZS5zbGljZSgtMSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpc0J1aWxkSW4gPSBmYWxzZVxyXG4gICAgICAgIGlmIChuYW1lID09PSAnaW5WZXJ0ZXhQb3MnKSB7XHJcbiAgICAgICAgICAgIC8vIGFuIGluc3RhbmNlIGlzIGZvcm1lZCBieSB0d28gdHJpYW5nbGVzLFxyXG4gICAgICAgICAgICAvLyB0aHVzIHdlIG5lZWQgZm91ciBwb2ludCBwb3NpdGlvbnMgdG8gaW5pdGlhbCB0aGUgaW5zdGFuY2VcclxuICAgICAgICAgICAgLy8gbW9yZSBkZXRhaWxzOiBodHRwczovL3BhbmppYWNoZW5nLnNpdGUvd2lraS8yMDE5LzA2LzA2L3dlYkdML1dlYkdMLUJhdGNoRHJhdyVFNCVCQiVBMyVFNyVBMCU4MSVFOSU5OCU4NSVFOCVBRiVCQislRTclOTAlODYlRTglQTclQTMvXHJcbiAgICAgICAgICAgIGlzQnVpbGRJbiA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgYXR0cmlidXRlc01hcC5zZXQobmFtZSwge1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBzaXplLCAvLyB0aGUgc3BhY2Ugb2Ygb25lIGF0dHJpYnV0ZSwgZS5nLiB2ZWMzIG9jdXBwaWVzIDMgdW5pdHMgb2Ygc3BhY2VcclxuICAgICAgICAgICAgbG9jYXRpb24sIC8vIHRoZSBhcHBlYXJhbmNlIG9yZGVyIG9mIG9uZSBhdHRyaWJ1dGUgaW4gdGhlIHNoYWRlciBjb2RlLCB3aGljaCBpcyBlcXVhbCB0byB0aGUgcmVzdWx0IG9mIGdldEF0dHJpYkxvY2F0aW9uXHJcbiAgICAgICAgICAgIGlzQnVpbGRJbiwgLy8gd2hpY2ggbWVhbnMgZm91ciB2ZXJ0aWNlcyBpbiBvbmUgZWxlbWVudDogaW5WZXJ0ZXhQb3NcclxuICAgICAgICAgICAgZXh0cmFjdEF0dHJpYnV0ZVZhbHVlRnJvbTogKCkgPT4gW10gLy8gYSBmdW5jdGlvbiB3aGljaCBpcyB1c2UgdG8gYXBwZW5kIGFuIGVsZW1lbnQgaW50byB0aGUgYXJyYXkgb2YgdGhpcyBhdHRyaWJ1dGVcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIHJldHVybiBhdHRyaWJ1dGVzTWFwXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBlbmNvZGUgYSByZW5kZXIgaWQgYXMgY29sb3IgdG8gcGFzcyBpbiB0ZXh0dXJlXHJcbiAqIEBwYXJhbSBpZCByZW5kZXIgaWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVSZW5kZXJJZChpZDogbnVtYmVyKTogQ29sb3Ige1xyXG4gICAgLy8gc3BsaXQgYSBsYXJnZSBudW1iZXIgYnkgOC1iaXQ6IGlkID0gY29uY2F0KGEsIGIsIGcsIHIpLCBhbmQgbm9ybWFsaXplIHRoZW0gaW50byAoMCwgMSlcclxuICAgIGNvbnN0IHIgPSAoaWQgJiAyNTUpIC8gMjU1LjBcclxuICAgIGNvbnN0IGcgPSAoKGlkID4+IDgpICYgMjU1KSAvIDI1NS4wXHJcbiAgICBjb25zdCBiID0gKChpZCA+PiAxNikgJiAyNTUpIC8gMjU1LjBcclxuICAgIGNvbnN0IGEgPSAoKGlkID4+IDI0KSAmIDI1NSkgLyAyNTUuMFxyXG4gICAgcmV0dXJuIHsgciwgZywgYiwgYSB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBkZWNvZGUgcGl4ZWwgdmFsdWUgdG8gbnVtYmVyXHJcbiAqIEBwYXJhbSBwaXhlbFZhbCBhIHBpeGVsJ3MgdmFsdWUgb24gdGV4dHVyZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZVJlbmRlcklkKHBpeGVsVmFsOiBVaW50OEFycmF5KTogbnVtYmVyIHtcclxuICAgIC8vIHBhcnNlIG5vcm1hbGl6ZWQgcGFydHMgb2YgaWQgbnVtYmVyLCBiaXQgc2hpZnQgdG8gb3JpZ2luIHBvc2l0aW9uIGFuZCBjb25jYXRcclxuICAgIGNvbnN0IHJlbmRlcklkID0gcGl4ZWxWYWxbMF0gfCAocGl4ZWxWYWxbMV0gPDwgOCkgfCAocGl4ZWxWYWxbMl0gPDwgMTYpIHwgKHBpeGVsVmFsWzNdIDw8IDI0KVxyXG4gICAgcmV0dXJuIHJlbmRlcklkXHJcbn1cclxuIiwiLyoqXHJcbiAqIFRlc3Qgd2hldGhlciBhIHN0cmluZyBjYW4gYmUgYSB2YWxpZCBpZCBvZiBhIE5vZGUuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZTogdGhlIHN0cmluZyB0b2JlIHRlc3RlZFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkSWQodmFsdWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5sZW5ndGggPiAwXHJcbn1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgSmlhY2hlbmcgUGFuIDxqYWNraWVhbnhpc0BnbWFpbC5jb20+XHJcbiAqIEBkZXNjcmlwdGlvbiBNYXAyIGlzIGEgTWFwIGRhdGEgc3RydWN0dXJlIHdoaWNoIG1hcHMgdHdvIGtleXMgdG8gb25lIHZhbHVlLlxyXG4gKiBAVXNhZ2Ugc2FtZSB0byBNYXAgZGF0YSBzdHJ1Y3R1cmUgaW4gRVM2LlxyXG4gKiBAZGVwZW5kZW5jZXMgTm9uZVxyXG4gKi9cclxuXHJcbmNvbnN0IEpPSU4gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDcpXHJcbmNvbnN0IGlzS2V5cyA9IChrZXlzOiBBcnJheTxzdHJpbmc+KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIGtleXMgaW5zdGFuY2VvZiBBcnJheSAmJlxyXG4gICAgICAgIGtleXMubGVuZ3RoID09PSAyICYmXHJcbiAgICAgICAga2V5cy5ldmVyeSgoa2V5KSA9PiBrZXkgIT09IHVuZGVmaW5lZCAmJiBrZXkgIT09IG51bGwpXHJcbiAgICApXHJcbn1cclxuY2xhc3MgTWFwMiB7XHJcbiAgICBwcml2YXRlIG1hcCA9IG5ldyBNYXAoKVxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGVudHJpZXM/OiBBcnJheTxBcnJheTxhbnk+Pikge1xyXG4gICAgICAgIGlmIChlbnRyaWVzIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IFtrZXksIHZhbHVlXSA9IGVudHJ5XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldChrZXksIHZhbHVlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgc2l6ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXAuc2l6ZVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGUoa2V5czogQXJyYXk8c3RyaW5nPikge1xyXG4gICAgICAgIGlmIChpc0tleXMoa2V5cykpIHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0ga2V5cy5qb2luKEpPSU4pXHJcbiAgICAgICAgICAgIGNvbnN0IGtleV8gPSBrZXlzWzFdICsgSk9JTiArIGtleXNbMF1cclxuICAgICAgICAgICAgbGV0IG1hcCA9IHRoaXMubWFwXHJcbiAgICAgICAgICAgIG1hcC5kZWxldGUoa2V5KVxyXG4gICAgICAgICAgICBtYXAuZGVsZXRlKGtleV8pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQoa2V5czogQXJyYXk8c3RyaW5nPiwgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIGlmIChpc0tleXMoa2V5cykpIHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0ga2V5cy5qb2luKEpPSU4pXHJcbiAgICAgICAgICAgIGNvbnN0IGtleV8gPSBrZXlzWzFdICsgSk9JTiArIGtleXNbMF1cclxuICAgICAgICAgICAgbGV0IG1hcCA9IHRoaXMubWFwXHJcbiAgICAgICAgICAgIGlmICghbWFwLmhhcyhrZXlfKSkge1xyXG4gICAgICAgICAgICAgICAgbWFwLnNldChrZXksIHZhbHVlKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWFwLnNldChrZXlfLCB2YWx1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoa2V5czogQXJyYXk8c3RyaW5nPikge1xyXG4gICAgICAgIGlmIChpc0tleXMoa2V5cykpIHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0ga2V5cy5qb2luKEpPSU4pXHJcbiAgICAgICAgICAgIGNvbnN0IGtleV8gPSBrZXlzWzFdICsgSk9JTiArIGtleXNbMF1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFwLmdldChrZXkpIHx8IHRoaXMubWFwLmdldChrZXlfKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhcyhrZXlzOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICAgICAgaWYgKGlzS2V5cyhrZXlzKSkge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBrZXlzLmpvaW4oSk9JTilcclxuICAgICAgICAgICAgY29uc3Qga2V5XyA9IGtleXNbMV0gKyBKT0lOICsga2V5c1swXVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXAuaGFzKGtleSkgfHwgdGhpcy5tYXAuaGFzKGtleV8pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JFYWNoKGZ1bmM6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5tYXAuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQga2V5cyA9IGtleS5zcGxpdChKT0lOKVxyXG4gICAgICAgICAgICBmdW5jKHZhbHVlLCBrZXlzLCB0aGlzKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVudHJpZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLm1hcC5lbnRyaWVzKCldLm1hcCgoZW50cnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gZW50cnlbMF0uc3BsaXQoSk9JTilcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlbnRyeVsxXVxyXG4gICAgICAgICAgICByZXR1cm4gW2tleSwgdmFsdWVdXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMga2V5cygpIHtcclxuICAgICAgICBsZXQga2V5cyA9IFsuLi50aGlzLm1hcC5rZXlzKCldXHJcbiAgICAgICAgcmV0dXJuIGtleXMubWFwKChrZXkpID0+IGtleS5zcGxpdChKT0lOKSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFsdWVzKCkge1xyXG4gICAgICAgIHJldHVybiBbLi4udGhpcy5tYXAudmFsdWVzKCldXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcDJcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XHJcbiAqIEBkZXNjcmlwdGlvbiBzb21lIHV0aWxpdHkgZnVuY3Rpb25zXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgTm9kZUxpbmtEYXRhIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnXHJcblxyXG4vKipcclxuICogZ2l2ZW4gYSBncmFwaCBkYXRhIHdpdGggcG9zaXRpb24sIHJldHVybiBhIGNvcHkgb2YgZ3JhcGgsIHdpdGggcG9zaXRpb24gdHJhbnNmb3JtZWQgdG8gY2VudGVyIG9mIGdpdmVuIHNpemVcclxuICogQHBhcmFtIGdyYXBoIG5vZGUgbGluayBncmFwaCBkYXRhXHJcbiAqIEBwYXJhbSBzaXplIGdyYXBoIHNpemUgKG1heCh3aWR0aCwgaGVpZ2h0KSlcclxuICogQHBhcmFtIGNlbnRlclggeCBwb3Mgb2YgZ3JhcGggY2VudGVyXHJcbiAqIEBwYXJhbSBjZW50ZXJZIHkgcG9zIG9mIGdyYXBoIGNlbnRlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybUdyYXBoUG9zaXRpb24oXHJcbiAgICBncmFwaDogTm9kZUxpbmtEYXRhLFxyXG4gICAgc2l6ZTogbnVtYmVyLFxyXG4gICAgY2VudGVyWDogbnVtYmVyLFxyXG4gICAgY2VudGVyWTogbnVtYmVyXHJcbikge1xyXG4gICAgY29uc3QgdGFyZ2V0R3JhcGg6IE5vZGVMaW5rRGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZ3JhcGgpKVxyXG4gICAgY29uc3QgeHMgPSB0YXJnZXRHcmFwaC5ub2Rlcy5tYXAoKG5vZGUpID0+IG5vZGUueClcclxuICAgIGNvbnN0IHlzID0gdGFyZ2V0R3JhcGgubm9kZXMubWFwKChub2RlKSA9PiBub2RlLnkpXHJcbiAgICBjb25zdCB4TWluID0gTWF0aC5taW4oLi4ueHMpXHJcbiAgICBjb25zdCB4TWF4ID0gTWF0aC5tYXgoLi4ueHMpXHJcbiAgICBjb25zdCB5TWluID0gTWF0aC5taW4oLi4ueXMpXHJcbiAgICBjb25zdCB5TWF4ID0gTWF0aC5tYXgoLi4ueXMpXHJcblxyXG4gICAgY29uc3QgeE1pZCA9ICh4TWluICsgeE1heCkgLyAyXHJcbiAgICBjb25zdCB5TWlkID0gKHlNaW4gKyB5TWF4KSAvIDJcclxuXHJcbiAgICB0YXJnZXRHcmFwaC5ub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XHJcbiAgICAgICAgbm9kZS54ID0gKChub2RlLnggLSB4TWlkKSAvICh4TWF4IC0geE1pbikpICogc2l6ZSArIGNlbnRlclhcclxuICAgICAgICBub2RlLnkgPSAoKG5vZGUueSAtIHlNaWQpIC8gKHlNYXggLSB5TWluKSkgKiBzaXplICsgY2VudGVyWVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gdGFyZ2V0R3JhcGhcclxufVxyXG5cclxuLyoqXHJcbiAqIHRoZSBmdW5jdGlvbiBpcyB0byBvdmVycmlkZSBvYmplY3QgcmVjdXJzaXZlbHlcclxuICogQHBhcmFtIG92ZXJyaWRkZW5PYmplY3Q6IHRoZSBPYmplY3QgdG8gYmUgb3ZlcnJpZGRlblxyXG4gKiBAcGFyYW0gb3ZlcnJpZGluZ09iamVjdDogdGhlIE9iamVjdCB0byBvdmVycmlkZSB0aGUgb3ZlcnJpZGRlbiBPYmplY3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvdmVycmlkZShvdmVycmlkZGVuT2JqZWN0OiBvYmplY3QsIG92ZXJyaWRpbmdPYmplY3Q6IG9iamVjdCkge1xyXG4gICAgaWYgKG92ZXJyaWRkZW5PYmplY3QgIT09IE9iamVjdChvdmVycmlkZGVuT2JqZWN0KSkge1xyXG4gICAgICAgIC8vIG92ZXJyaWRkZW5PYmplY3QgaXMgbm90IGFuIG9iamVjdFxyXG4gICAgICAgIGlmIChvdmVycmlkaW5nT2JqZWN0ICE9PSBPYmplY3Qob3ZlcnJpZGluZ09iamVjdCkpIHtcclxuICAgICAgICAgICAgLy8gb3ZlcnJpZGluZ09iamVjdCBpcyBub3QgYW4gb2JqZWN0XHJcbiAgICAgICAgICAgIHJldHVybiBvdmVycmlkaW5nT2JqZWN0XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob3ZlcnJpZGluZ09iamVjdCkpIC8vIGRlZXAgY29weVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvYmplY3QgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG92ZXJyaWRkZW5PYmplY3QpKSAvLyBkZWVwIGNvcHlcclxuICAgIGZvciAoY29uc3Qga2V5IGluIG92ZXJyaWRpbmdPYmplY3QpIHtcclxuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCAmJiBvdmVycmlkaW5nT2JqZWN0W2tleV0gPT09IE9iamVjdChvdmVycmlkaW5nT2JqZWN0W2tleV0pKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIG92ZXJyaWRpbmdPYmplY3Rba2V5XSBpcyBhbiBvYmplY3RcclxuICAgICAgICAgICAgb2JqZWN0W2tleV0gPSBvdmVycmlkZShvYmplY3Rba2V5XSwgb3ZlcnJpZGluZ09iamVjdFtrZXldKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9iamVjdFtrZXldID0gb3ZlcnJpZGluZ09iamVjdFtrZXldXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iamVjdFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=