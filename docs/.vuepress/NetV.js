;(function webpackUniversalModuleDefinition(root, factory) {
	if (typeof exports === 'object' && typeof module === 'object')
		module.exports = factory()
	else if (typeof define === 'function' && define.amd) define([], factory)
	else {
		var a = factory()
		for (var i in a)
			(typeof exports === 'object' ? exports : root)[i] = a[i]
	}
})(window, function() {
	return /******/ (function(modules) {
		// webpackBootstrap
		/******/ // The module cache
		/******/ var installedModules = {} // The require function
		/******/
		/******/ /******/ function __webpack_require__(moduleId) {
			/******/
			/******/ // Check if module is in cache
			/******/ if (installedModules[moduleId]) {
				/******/ return installedModules[moduleId].exports
				/******/
			} // Create a new module (and put it into the cache)
			/******/ /******/ var module = (installedModules[moduleId] = {
				/******/ i: moduleId,
				/******/ l: false,
				/******/ exports: {},
				/******/
			}) // Execute the module function
			/******/
			/******/ /******/ modules[moduleId].call(
				module.exports,
				module,
				module.exports,
				__webpack_require__
			) // Flag the module as loaded
			/******/
			/******/ /******/ module.l = true // Return the exports of the module
			/******/
			/******/ /******/ return module.exports
			/******/
		} // expose the modules object (__webpack_modules__)
		/******/
		/******/
		/******/ /******/ __webpack_require__.m = modules // expose the module cache
		/******/
		/******/ /******/ __webpack_require__.c = installedModules // define getter function for harmony exports
		/******/
		/******/ /******/ __webpack_require__.d = function(
			exports,
			name,
			getter
		) {
			/******/ if (!__webpack_require__.o(exports, name)) {
				/******/ Object.defineProperty(exports, name, {
					enumerable: true,
					get: getter,
				})
				/******/
			}
			/******/
		} // define __esModule on exports
		/******/
		/******/ /******/ __webpack_require__.r = function(exports) {
			/******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
				/******/ Object.defineProperty(exports, Symbol.toStringTag, {
					value: 'Module',
				})
				/******/
			}
			/******/ Object.defineProperty(exports, '__esModule', {
				value: true,
			})
			/******/
		} // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
		/******/
		/******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
			value,
			mode
		) {
			/******/ if (mode & 1) value = __webpack_require__(value)
			/******/ if (mode & 8) return value
			/******/ if (
				mode & 4 &&
				typeof value === 'object' &&
				value &&
				value.__esModule
			)
				return value
			/******/ var ns = Object.create(null)
			/******/ __webpack_require__.r(ns)
			/******/ Object.defineProperty(ns, 'default', {
				enumerable: true,
				value: value,
			})
			/******/ if (mode & 2 && typeof value != 'string')
				for (var key in value)
					__webpack_require__.d(
						ns,
						key,
						function(key) {
							return value[key]
						}.bind(null, key)
					)
			/******/ return ns
			/******/
		} // getDefaultExport function for compatibility with non-harmony modules
		/******/
		/******/ /******/ __webpack_require__.n = function(module) {
			/******/ var getter =
				module && module.__esModule
					? /******/ function getDefault() {
							return module['default']
					  }
					: /******/ function getModuleExports() {
							return module
					  }
			/******/ __webpack_require__.d(getter, 'a', getter)
			/******/ return getter
			/******/
		} // Object.prototype.hasOwnProperty.call
		/******/
		/******/ /******/ __webpack_require__.o = function(object, property) {
			return Object.prototype.hasOwnProperty.call(object, property)
		} // __webpack_public_path__
		/******/
		/******/ /******/ __webpack_require__.p = '' // Load entry module and return exports
		/******/
		/******/
		/******/ /******/ return __webpack_require__(
			(__webpack_require__.s = './src/index.ts')
		)
		/******/
	})(
		/************************************************************************/
		/******/ {
			/***/ './src/configs.ts':
				/*!************************!*\
  !*** ./src/configs.ts ***!
  \************************/
				/*! no static exports found */
				/***/ function(module, exports, __webpack_require__) {
					'use strict'

					/**
					 * @description default configurations in NetV
					 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
					 */
					Object.defineProperty(exports, '__esModule', {
						value: true,
					})
					exports.link = exports.node = exports.linkLimit = exports.nodeLimit = exports.enablePanZoom = exports.backgroundColor = exports.height = exports.width = void 0
					exports.width = 800
					exports.height = 600
					exports.backgroundColor = { r: 1, g: 1, b: 1, a: 1 }
					exports.enablePanZoom = true
					exports.nodeLimit = 100
					exports.linkLimit = 1000
					exports.node = {
						r: 5,
						fill: { r: 0.2, g: 0.6, b: 0.2, a: 0.8 },
						// strokeColor: { r: 0.6, g: 0.6, b: 0.6, a: 0.5 },
						strokeColor: { r: 0.9, g: 0.9, b: 0.9, a: 0.6 },
						strokeWidth: 2,
						clickCallback: (node) => {},
					}
					exports.link = {
						// strokeColor: { r: 0.5, g: 0.5, b: 0.5, a: 0.2 },
						strokeColor: { r: 0.4, g: 0.6, b: 0.8, a: 0.2 },
						strokeWidth: 0.5,
						clickCallback: (link) => {},
					}

					/***/
				},

			/***/ './src/dataset/index.ts':
				/*!******************************!*\
  !*** ./src/dataset/index.ts ***!
  \******************************/
				/*! no static exports found */
				/***/ function(module, exports, __webpack_require__) {
					'use strict'

					/**
					 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
					 * @description build-in dataset in NetV
					 */
					Object.defineProperty(exports, '__esModule', {
						value: true,
					})
					exports.miserables = void 0
					const miserables_1 = __webpack_require__(
						/*! ./miserables */ './src/dataset/miserables.ts'
					)
					Object.defineProperty(exports, 'miserables', {
						enumerable: true,
						get: function() {
							return miserables_1.miserables
						},
					})

					/***/
				},

			/***/ './src/dataset/miserables.ts':
				/*!***********************************!*\
  !*** ./src/dataset/miserables.ts ***!
  \***********************************/
				/*! no static exports found */
				/***/ function(module, exports, __webpack_require__) {
					'use strict'

					/**
					 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
					 * @description Les Miserables relation dataset.
					 */
					Object.defineProperty(exports, '__esModule', {
						value: true,
					})
					exports.miserables = void 0
					/**
					 * @description generated by d3-force: https://observablehq.com/@d3/force-directed-graph
					 */
					exports.miserables = {
						nodes: [
							{ id: 'Myriel', group: 1, x: 0, y: 0 },
							{
								id: 'Napoleon',
								group: 1,
								x: -7.373688780783198,
								y: 6.754902942615239,
							},
							{
								id: 'Mlle.Baptistine',
								group: 1,
								x: 1.2363864559502138,
								y: -14.087985964343622,
							},
							{
								id: 'Mme.Magloire',
								group: 1,
								x: 10.538470205147267,
								y: 13.745568221620495,
							},
							{
								id: 'CountessdeLo',
								group: 1,
								x: -19.694269706308575,
								y: -3.4836390075862327,
							},
							{
								id: 'Geborand',
								group: 1,
								x: 18.866941955758957,
								y: -12.001604111035421,
							},
							{
								id: 'Champtercier',
								group: 1,
								x: -6.358980820385529,
								y: 23.65509169134563,
							},
							{
								id: 'Cravatte',
								group: 1,
								x: -12.194453649142762,
								y: -23.479678451778437,
							},
							{
								id: 'Count',
								group: 1,
								x: 26.568018333748896,
								y: 9.702597684001061,
							},
							{
								id: 'OldMan',
								group: 1,
								x: -27.730366684134143,
								y: 11.446692254248088,
							},
							{
								id: 'Labarre',
								group: 2,
								x: 13.403187214918457,
								y: -28.64183256151475,
							},
							{
								id: 'Valjean',
								group: 2,
								x: 9.926122841712305,
								y: 31.64604375480823,
							},
							{
								id: 'Marguerite',
								group: 3,
								x: -29.971795491414543,
								y: -17.369268119895636,
							},
							{
								id: 'Mme.deR',
								group: 2,
								x: 35.214545813198484,
								y: -7.741819112466066,
							},
							{
								id: 'Isabeau',
								group: 2,
								x: -21.519372768917858,
								y: 30.6090933487478,
							},
							{
								id: 'Gervais',
								group: 2,
								x: -4.977197614011282,
								y: -38.40869047378575,
							},
							{
								id: 'Tholomyes',
								group: 3,
								x: 30.585959818241726,
								y: 25.777879315352973,
							},
							{
								id: 'Listolier',
								group: 3,
								x: -41.195847160911136,
								y: 1.70357761632691,
							},
							{
								id: 'Fameuil',
								group: 3,
								x: 30.073085133506012,
								y: -29.92673638325601,
							},
							{
								id: 'Blacheville',
								group: 3,
								x: -2.0134384491006574,
								y: 43.542462787624714,
							},
							{
								id: 'Favourite',
								group: 3,
								x: -28.653384038891687,
								y: -34.336330367699276,
							},
							{
								id: 'Dahlia',
								group: 3,
								x: 45.41650602805144,
								y: 6.110726651059321,
							},
							{
								id: 'Zephine',
								group: 3,
								x: -38.50166880287242,
								y: 26.788458324321695,
							},
							{
								id: 'Fantine',
								group: 3,
								x: 10.525956694116372,
								y: -46.788932833241525,
							},
							{
								id: 'Mme.Thenardier',
								group: 4,
								x: 24.35678907070913,
								y: 42.505844611829374,
							},
							{
								id: 'Thenardier',
								group: 4,
								x: -47.63463885983453,
								y: -15.196749017245159,
							},
							{
								id: 'Cosette',
								group: 5,
								x: 46.288447044133314,
								y: -21.386436595245726,
							},
							{
								id: 'Javert',
								group: 4,
								x: -20.06032227609403,
								y: 47.9331145470357,
							},
							{
								id: 'Fauchelevent',
								group: 0,
								x: -17.909211243064767,
								y: -49.79216959172679,
							},
							{
								id: 'Bamatabois',
								group: 2,
								x: 47.668910059510004,
								y: 25.05344315135838,
							},
							{
								id: 'Perpetue',
								group: 3,
								x: -52.96312842870198,
								y: 13.960910681070223,
							},
							{
								id: 'Simplice',
								group: 2,
								x: 30.112570857032296,
								y: -46.831966394549454,
							},
							{
								id: 'Scaufflaire',
								group: 2,
								x: 9.581363211912816,
								y: 55.75121056086051,
							},
							{
								id: 'Woman1',
								group: 2,
								x: -45.417843582634504,
								y: -35.17413089620475,
							},
							{
								id: 'Judge',
								group: 2,
								x: 58.110431269652864,
								y: -4.814330447211802,
							},
							{
								id: 'Champmathieu',
								group: 2,
								x: -40.17487592669849,
								y: 43.42786368536198,
							},
							{
								id: 'Brevet',
								group: 2,
								x: 0.2926966298067049,
								y: -59.99928606811001,
							},
							{
								id: 'Chenildieu',
								group: 2,
								x: 40.8691791809447,
								y: 45.05230508060421,
							},
							{
								id: 'Cochepaille',
								group: 2,
								x: -61.381086030632304,
								y: -5.6887852569871855,
							},
							{
								id: 'Pontmercy',
								group: 4,
								x: 49.74512119299716,
								y: -37.754773439844996,
							},
							{
								id: 'Boulatruelle',
								group: 6,
								x: -11.31991572873186,
								y: 62.22426783735112,
							},
							{
								id: 'Eponine',
								group: 4,
								x: -34.10339787841156,
								y: -54.193710457457634,
							},
							{
								id: 'Anzelma',
								group: 4,
								x: 62.50267164954251,
								y: 17.129391018640273,
							},
							{
								id: 'Woman2',
								group: 5,
								x: -58.340632301604046,
								y: 29.939449270970808,
							},
							{
								id: 'MotherInnocent',
								group: 0,
								x: 23.05829117107365,
								y: -62.19578127389338,
							},
							{
								id: 'Gribier',
								group: 0,
								x: 25.29279018100841,
								y: 62.131109477132995,
							},
							{
								id: 'Jondrette',
								group: 7,
								x: -61.28892214086734,
								y: -29.04596396766168,
							},
							{
								id: 'Mme.Burgon',
								group: 7,
								x: 65.51350990159324,
								y: -20.198515301225584,
							},
							{
								id: 'Gavroche',
								group: 8,
								x: -35.030544341630474,
								y: 59.77341351411228,
							},
							{
								id: 'Gillenormand',
								group: 5,
								x: -14.696666530084995,
								y: -68.43981292276798,
							},
							{
								id: 'Magnon',
								group: 5,
								x: 57.64667212478689,
								y: 40.9494956371543,
							},
							{
								id: 'Mlle.Gillenormand',
								group: 5,
								x: -70.86605355446326,
								y: 8.831899773884732,
							},
							{
								id: 'Mme.Pontmercy',
								group: 5,
								x: 46.74016622598717,
								y: -54.912265125080104,
							},
							{
								id: 'Mlle.Vaubois',
								group: 5,
								x: 2.6531066949857944,
								y: 72.75273895094962,
							},
							{
								id: 'Lt.Gillenormand',
								group: 5,
								x: -51.57991090299893,
								y: -52.34035528384091,
							},
							{
								id: 'Marius',
								group: 8,
								x: 74.0652320075174,
								y: 3.7870051059672996,
							},
							{
								id: 'BaronessT',
								group: 5,
								x: -57.6888817488349,
								y: 47.665426910591535,
							},
							{
								id: 'Mabeuf',
								group: 8,
								x: 10.432369706108961,
								y: -74.7740975359453,
							},
							{
								id: 'Enjolras',
								group: 8,
								x: 43.19062423897526,
								y: 62.72615066977762,
							},
							{
								id: 'Combeferre',
								group: 8,
								x: -74.85540699153151,
								y: -17.224054230412072,
							},
							{
								id: 'Prouvaire',
								group: 8,
								x: 67.39471132676982,
								y: -38.18314923079765,
							},
							{
								id: 'Feuilly',
								group: 8,
								x: -24.100779669432555,
								y: 74.29099823885439,
							},
							{
								id: 'Courfeyrac',
								group: 8,
								x: -32.67627295640393,
								y: -71.63980168648281,
							},
							{
								id: 'Bahorel',
								group: 8,
								x: 73.06868734670485,
								y: 30.999466599112544,
							},
							{
								id: 'Bossuet',
								group: 8,
								x: -75.40987395007019,
								y: 26.7086298943717,
							},
							{
								id: 'Joly',
								group: 8,
								x: 37.855801046705174,
								y: -71.1824299045226,
							},
							{
								id: 'Grantaire',
								group: 8,
								x: 20.3239076497276,
								y: 78.657096169674,
							},
							{
								id: 'MotherPlutarch',
								group: 9,
								x: -68.6324298562459,
								y: -44.6048155699302,
							},
							{
								id: 'Gueulemer',
								group: 4,
								x: 81.33782515425389,
								y: -13.570490012376958,
							},
							{
								id: 'Babet',
								group: 4,
								x: -51.18148047664099,
								y: 65.42519435369844,
							},
							{
								id: 'Claquesous',
								group: 4,
								x: -6.501056102210902,
								y: -83.41304615919447,
							},
							{
								id: 'Montparnasse',
								group: 4,
								x: 61.57353364008794,
								y: 57.5213000120213,
							},
							{
								id: 'Toussaint',
								group: 5,
								x: -84.84877515776738,
								y: -0.8278612363409139,
							},
							{
								id: 'Child1',
								group: 10,
								x: 63.56090828162587,
								y: -57.09650548338965,
							},
							{
								id: 'Child2',
								group: 10,
								x: -8.356354241304723,
								y: 85.61641982583616,
							},
							{
								id: 'Brujon',
								group: 4,
								x: -52.01930418721218,
								y: -69.23865966263567,
							},
							{
								id: 'Mme.Hucheloup',
								group: 8,
								x: 85.69309573315454,
								y: 16.02165233889483,
							},
						],
						links: [
							{ source: 'Napoleon', target: 'Myriel', value: 1 },
							{
								source: 'Mlle.Baptistine',
								target: 'Myriel',
								value: 8,
							},
							{
								source: 'Mme.Magloire',
								target: 'Myriel',
								value: 10,
							},
							{
								source: 'Mme.Magloire',
								target: 'Mlle.Baptistine',
								value: 6,
							},
							{
								source: 'CountessdeLo',
								target: 'Myriel',
								value: 1,
							},
							{ source: 'Geborand', target: 'Myriel', value: 1 },
							{
								source: 'Champtercier',
								target: 'Myriel',
								value: 1,
							},
							{ source: 'Cravatte', target: 'Myriel', value: 1 },
							{ source: 'Count', target: 'Myriel', value: 2 },
							{ source: 'OldMan', target: 'Myriel', value: 1 },
							{ source: 'Valjean', target: 'Labarre', value: 1 },
							{
								source: 'Valjean',
								target: 'Mme.Magloire',
								value: 3,
							},
							{
								source: 'Valjean',
								target: 'Mlle.Baptistine',
								value: 3,
							},
							{ source: 'Valjean', target: 'Myriel', value: 5 },
							{
								source: 'Marguerite',
								target: 'Valjean',
								value: 1,
							},
							{ source: 'Mme.deR', target: 'Valjean', value: 1 },
							{ source: 'Isabeau', target: 'Valjean', value: 1 },
							{ source: 'Gervais', target: 'Valjean', value: 1 },
							{
								source: 'Listolier',
								target: 'Tholomyes',
								value: 4,
							},
							{
								source: 'Fameuil',
								target: 'Tholomyes',
								value: 4,
							},
							{
								source: 'Fameuil',
								target: 'Listolier',
								value: 4,
							},
							{
								source: 'Blacheville',
								target: 'Tholomyes',
								value: 4,
							},
							{
								source: 'Blacheville',
								target: 'Listolier',
								value: 4,
							},
							{
								source: 'Blacheville',
								target: 'Fameuil',
								value: 4,
							},
							{
								source: 'Favourite',
								target: 'Tholomyes',
								value: 3,
							},
							{
								source: 'Favourite',
								target: 'Listolier',
								value: 3,
							},
							{
								source: 'Favourite',
								target: 'Fameuil',
								value: 3,
							},
							{
								source: 'Favourite',
								target: 'Blacheville',
								value: 4,
							},
							{ source: 'Dahlia', target: 'Tholomyes', value: 3 },
							{ source: 'Dahlia', target: 'Listolier', value: 3 },
							{ source: 'Dahlia', target: 'Fameuil', value: 3 },
							{
								source: 'Dahlia',
								target: 'Blacheville',
								value: 3,
							},
							{ source: 'Dahlia', target: 'Favourite', value: 5 },
							{
								source: 'Zephine',
								target: 'Tholomyes',
								value: 3,
							},
							{
								source: 'Zephine',
								target: 'Listolier',
								value: 3,
							},
							{ source: 'Zephine', target: 'Fameuil', value: 3 },
							{
								source: 'Zephine',
								target: 'Blacheville',
								value: 3,
							},
							{
								source: 'Zephine',
								target: 'Favourite',
								value: 4,
							},
							{ source: 'Zephine', target: 'Dahlia', value: 4 },
							{
								source: 'Fantine',
								target: 'Tholomyes',
								value: 3,
							},
							{
								source: 'Fantine',
								target: 'Listolier',
								value: 3,
							},
							{ source: 'Fantine', target: 'Fameuil', value: 3 },
							{
								source: 'Fantine',
								target: 'Blacheville',
								value: 3,
							},
							{
								source: 'Fantine',
								target: 'Favourite',
								value: 4,
							},
							{ source: 'Fantine', target: 'Dahlia', value: 4 },
							{ source: 'Fantine', target: 'Zephine', value: 4 },
							{
								source: 'Fantine',
								target: 'Marguerite',
								value: 2,
							},
							{ source: 'Fantine', target: 'Valjean', value: 9 },
							{
								source: 'Mme.Thenardier',
								target: 'Fantine',
								value: 2,
							},
							{
								source: 'Mme.Thenardier',
								target: 'Valjean',
								value: 7,
							},
							{
								source: 'Thenardier',
								target: 'Mme.Thenardier',
								value: 13,
							},
							{
								source: 'Thenardier',
								target: 'Fantine',
								value: 1,
							},
							{
								source: 'Thenardier',
								target: 'Valjean',
								value: 12,
							},
							{
								source: 'Cosette',
								target: 'Mme.Thenardier',
								value: 4,
							},
							{ source: 'Cosette', target: 'Valjean', value: 31 },
							{
								source: 'Cosette',
								target: 'Tholomyes',
								value: 1,
							},
							{
								source: 'Cosette',
								target: 'Thenardier',
								value: 1,
							},
							{ source: 'Javert', target: 'Valjean', value: 17 },
							{ source: 'Javert', target: 'Fantine', value: 5 },
							{
								source: 'Javert',
								target: 'Thenardier',
								value: 5,
							},
							{
								source: 'Javert',
								target: 'Mme.Thenardier',
								value: 1,
							},
							{ source: 'Javert', target: 'Cosette', value: 1 },
							{
								source: 'Fauchelevent',
								target: 'Valjean',
								value: 8,
							},
							{
								source: 'Fauchelevent',
								target: 'Javert',
								value: 1,
							},
							{
								source: 'Bamatabois',
								target: 'Fantine',
								value: 1,
							},
							{
								source: 'Bamatabois',
								target: 'Javert',
								value: 1,
							},
							{
								source: 'Bamatabois',
								target: 'Valjean',
								value: 2,
							},
							{ source: 'Perpetue', target: 'Fantine', value: 1 },
							{
								source: 'Simplice',
								target: 'Perpetue',
								value: 2,
							},
							{ source: 'Simplice', target: 'Valjean', value: 3 },
							{ source: 'Simplice', target: 'Fantine', value: 2 },
							{ source: 'Simplice', target: 'Javert', value: 1 },
							{
								source: 'Scaufflaire',
								target: 'Valjean',
								value: 1,
							},
							{ source: 'Woman1', target: 'Valjean', value: 2 },
							{ source: 'Woman1', target: 'Javert', value: 1 },
							{ source: 'Judge', target: 'Valjean', value: 3 },
							{ source: 'Judge', target: 'Bamatabois', value: 2 },
							{
								source: 'Champmathieu',
								target: 'Valjean',
								value: 3,
							},
							{
								source: 'Champmathieu',
								target: 'Judge',
								value: 3,
							},
							{
								source: 'Champmathieu',
								target: 'Bamatabois',
								value: 2,
							},
							{ source: 'Brevet', target: 'Judge', value: 2 },
							{
								source: 'Brevet',
								target: 'Champmathieu',
								value: 2,
							},
							{ source: 'Brevet', target: 'Valjean', value: 2 },
							{
								source: 'Brevet',
								target: 'Bamatabois',
								value: 1,
							},
							{ source: 'Chenildieu', target: 'Judge', value: 2 },
							{
								source: 'Chenildieu',
								target: 'Champmathieu',
								value: 2,
							},
							{
								source: 'Chenildieu',
								target: 'Brevet',
								value: 2,
							},
							{
								source: 'Chenildieu',
								target: 'Valjean',
								value: 2,
							},
							{
								source: 'Chenildieu',
								target: 'Bamatabois',
								value: 1,
							},
							{
								source: 'Cochepaille',
								target: 'Judge',
								value: 2,
							},
							{
								source: 'Cochepaille',
								target: 'Champmathieu',
								value: 2,
							},
							{
								source: 'Cochepaille',
								target: 'Brevet',
								value: 2,
							},
							{
								source: 'Cochepaille',
								target: 'Chenildieu',
								value: 2,
							},
							{
								source: 'Cochepaille',
								target: 'Valjean',
								value: 2,
							},
							{
								source: 'Cochepaille',
								target: 'Bamatabois',
								value: 1,
							},
							{
								source: 'Pontmercy',
								target: 'Thenardier',
								value: 1,
							},
							{
								source: 'Boulatruelle',
								target: 'Thenardier',
								value: 1,
							},
							{
								source: 'Eponine',
								target: 'Mme.Thenardier',
								value: 2,
							},
							{
								source: 'Eponine',
								target: 'Thenardier',
								value: 3,
							},
							{ source: 'Anzelma', target: 'Eponine', value: 2 },
							{
								source: 'Anzelma',
								target: 'Thenardier',
								value: 2,
							},
							{
								source: 'Anzelma',
								target: 'Mme.Thenardier',
								value: 1,
							},
							{ source: 'Woman2', target: 'Valjean', value: 3 },
							{ source: 'Woman2', target: 'Cosette', value: 1 },
							{ source: 'Woman2', target: 'Javert', value: 1 },
							{
								source: 'MotherInnocent',
								target: 'Fauchelevent',
								value: 3,
							},
							{
								source: 'MotherInnocent',
								target: 'Valjean',
								value: 1,
							},
							{
								source: 'Gribier',
								target: 'Fauchelevent',
								value: 2,
							},
							{
								source: 'Mme.Burgon',
								target: 'Jondrette',
								value: 1,
							},
							{
								source: 'Gavroche',
								target: 'Mme.Burgon',
								value: 2,
							},
							{
								source: 'Gavroche',
								target: 'Thenardier',
								value: 1,
							},
							{ source: 'Gavroche', target: 'Javert', value: 1 },
							{ source: 'Gavroche', target: 'Valjean', value: 1 },
							{
								source: 'Gillenormand',
								target: 'Cosette',
								value: 3,
							},
							{
								source: 'Gillenormand',
								target: 'Valjean',
								value: 2,
							},
							{
								source: 'Magnon',
								target: 'Gillenormand',
								value: 1,
							},
							{
								source: 'Magnon',
								target: 'Mme.Thenardier',
								value: 1,
							},
							{
								source: 'Mlle.Gillenormand',
								target: 'Gillenormand',
								value: 9,
							},
							{
								source: 'Mlle.Gillenormand',
								target: 'Cosette',
								value: 2,
							},
							{
								source: 'Mlle.Gillenormand',
								target: 'Valjean',
								value: 2,
							},
							{
								source: 'Mme.Pontmercy',
								target: 'Mlle.Gillenormand',
								value: 1,
							},
							{
								source: 'Mme.Pontmercy',
								target: 'Pontmercy',
								value: 1,
							},
							{
								source: 'Mlle.Vaubois',
								target: 'Mlle.Gillenormand',
								value: 1,
							},
							{
								source: 'Lt.Gillenormand',
								target: 'Mlle.Gillenormand',
								value: 2,
							},
							{
								source: 'Lt.Gillenormand',
								target: 'Gillenormand',
								value: 1,
							},
							{
								source: 'Lt.Gillenormand',
								target: 'Cosette',
								value: 1,
							},
							{
								source: 'Marius',
								target: 'Mlle.Gillenormand',
								value: 6,
							},
							{
								source: 'Marius',
								target: 'Gillenormand',
								value: 12,
							},
							{ source: 'Marius', target: 'Pontmercy', value: 1 },
							{
								source: 'Marius',
								target: 'Lt.Gillenormand',
								value: 1,
							},
							{ source: 'Marius', target: 'Cosette', value: 21 },
							{ source: 'Marius', target: 'Valjean', value: 19 },
							{ source: 'Marius', target: 'Tholomyes', value: 1 },
							{
								source: 'Marius',
								target: 'Thenardier',
								value: 2,
							},
							{ source: 'Marius', target: 'Eponine', value: 5 },
							{ source: 'Marius', target: 'Gavroche', value: 4 },
							{
								source: 'BaronessT',
								target: 'Gillenormand',
								value: 1,
							},
							{ source: 'BaronessT', target: 'Marius', value: 1 },
							{ source: 'Mabeuf', target: 'Marius', value: 1 },
							{ source: 'Mabeuf', target: 'Eponine', value: 1 },
							{ source: 'Mabeuf', target: 'Gavroche', value: 1 },
							{ source: 'Enjolras', target: 'Marius', value: 7 },
							{
								source: 'Enjolras',
								target: 'Gavroche',
								value: 7,
							},
							{ source: 'Enjolras', target: 'Javert', value: 6 },
							{ source: 'Enjolras', target: 'Mabeuf', value: 1 },
							{ source: 'Enjolras', target: 'Valjean', value: 4 },
							{
								source: 'Combeferre',
								target: 'Enjolras',
								value: 15,
							},
							{
								source: 'Combeferre',
								target: 'Marius',
								value: 5,
							},
							{
								source: 'Combeferre',
								target: 'Gavroche',
								value: 6,
							},
							{
								source: 'Combeferre',
								target: 'Mabeuf',
								value: 2,
							},
							{
								source: 'Prouvaire',
								target: 'Gavroche',
								value: 1,
							},
							{
								source: 'Prouvaire',
								target: 'Enjolras',
								value: 4,
							},
							{
								source: 'Prouvaire',
								target: 'Combeferre',
								value: 2,
							},
							{ source: 'Feuilly', target: 'Gavroche', value: 2 },
							{ source: 'Feuilly', target: 'Enjolras', value: 6 },
							{
								source: 'Feuilly',
								target: 'Prouvaire',
								value: 2,
							},
							{
								source: 'Feuilly',
								target: 'Combeferre',
								value: 5,
							},
							{ source: 'Feuilly', target: 'Mabeuf', value: 1 },
							{ source: 'Feuilly', target: 'Marius', value: 1 },
							{
								source: 'Courfeyrac',
								target: 'Marius',
								value: 9,
							},
							{
								source: 'Courfeyrac',
								target: 'Enjolras',
								value: 17,
							},
							{
								source: 'Courfeyrac',
								target: 'Combeferre',
								value: 13,
							},
							{
								source: 'Courfeyrac',
								target: 'Gavroche',
								value: 7,
							},
							{
								source: 'Courfeyrac',
								target: 'Mabeuf',
								value: 2,
							},
							{
								source: 'Courfeyrac',
								target: 'Eponine',
								value: 1,
							},
							{
								source: 'Courfeyrac',
								target: 'Feuilly',
								value: 6,
							},
							{
								source: 'Courfeyrac',
								target: 'Prouvaire',
								value: 3,
							},
							{
								source: 'Bahorel',
								target: 'Combeferre',
								value: 5,
							},
							{ source: 'Bahorel', target: 'Gavroche', value: 5 },
							{
								source: 'Bahorel',
								target: 'Courfeyrac',
								value: 6,
							},
							{ source: 'Bahorel', target: 'Mabeuf', value: 2 },
							{ source: 'Bahorel', target: 'Enjolras', value: 4 },
							{ source: 'Bahorel', target: 'Feuilly', value: 3 },
							{
								source: 'Bahorel',
								target: 'Prouvaire',
								value: 2,
							},
							{ source: 'Bahorel', target: 'Marius', value: 1 },
							{ source: 'Bossuet', target: 'Marius', value: 5 },
							{
								source: 'Bossuet',
								target: 'Courfeyrac',
								value: 12,
							},
							{ source: 'Bossuet', target: 'Gavroche', value: 5 },
							{ source: 'Bossuet', target: 'Bahorel', value: 4 },
							{
								source: 'Bossuet',
								target: 'Enjolras',
								value: 10,
							},
							{ source: 'Bossuet', target: 'Feuilly', value: 6 },
							{
								source: 'Bossuet',
								target: 'Prouvaire',
								value: 2,
							},
							{
								source: 'Bossuet',
								target: 'Combeferre',
								value: 9,
							},
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
							{
								source: 'Grantaire',
								target: 'Bossuet',
								value: 3,
							},
							{
								source: 'Grantaire',
								target: 'Enjolras',
								value: 3,
							},
							{
								source: 'Grantaire',
								target: 'Combeferre',
								value: 1,
							},
							{
								source: 'Grantaire',
								target: 'Courfeyrac',
								value: 2,
							},
							{ source: 'Grantaire', target: 'Joly', value: 2 },
							{
								source: 'Grantaire',
								target: 'Gavroche',
								value: 1,
							},
							{
								source: 'Grantaire',
								target: 'Bahorel',
								value: 1,
							},
							{
								source: 'Grantaire',
								target: 'Feuilly',
								value: 1,
							},
							{
								source: 'Grantaire',
								target: 'Prouvaire',
								value: 1,
							},
							{
								source: 'MotherPlutarch',
								target: 'Mabeuf',
								value: 3,
							},
							{
								source: 'Gueulemer',
								target: 'Thenardier',
								value: 5,
							},
							{
								source: 'Gueulemer',
								target: 'Valjean',
								value: 1,
							},
							{
								source: 'Gueulemer',
								target: 'Mme.Thenardier',
								value: 1,
							},
							{ source: 'Gueulemer', target: 'Javert', value: 1 },
							{
								source: 'Gueulemer',
								target: 'Gavroche',
								value: 1,
							},
							{
								source: 'Gueulemer',
								target: 'Eponine',
								value: 1,
							},
							{ source: 'Babet', target: 'Thenardier', value: 6 },
							{ source: 'Babet', target: 'Gueulemer', value: 6 },
							{ source: 'Babet', target: 'Valjean', value: 1 },
							{
								source: 'Babet',
								target: 'Mme.Thenardier',
								value: 1,
							},
							{ source: 'Babet', target: 'Javert', value: 2 },
							{ source: 'Babet', target: 'Gavroche', value: 1 },
							{ source: 'Babet', target: 'Eponine', value: 1 },
							{
								source: 'Claquesous',
								target: 'Thenardier',
								value: 4,
							},
							{ source: 'Claquesous', target: 'Babet', value: 4 },
							{
								source: 'Claquesous',
								target: 'Gueulemer',
								value: 4,
							},
							{
								source: 'Claquesous',
								target: 'Valjean',
								value: 1,
							},
							{
								source: 'Claquesous',
								target: 'Mme.Thenardier',
								value: 1,
							},
							{
								source: 'Claquesous',
								target: 'Javert',
								value: 1,
							},
							{
								source: 'Claquesous',
								target: 'Eponine',
								value: 1,
							},
							{
								source: 'Claquesous',
								target: 'Enjolras',
								value: 1,
							},
							{
								source: 'Montparnasse',
								target: 'Javert',
								value: 1,
							},
							{
								source: 'Montparnasse',
								target: 'Babet',
								value: 2,
							},
							{
								source: 'Montparnasse',
								target: 'Gueulemer',
								value: 2,
							},
							{
								source: 'Montparnasse',
								target: 'Claquesous',
								value: 2,
							},
							{
								source: 'Montparnasse',
								target: 'Valjean',
								value: 1,
							},
							{
								source: 'Montparnasse',
								target: 'Gavroche',
								value: 1,
							},
							{
								source: 'Montparnasse',
								target: 'Eponine',
								value: 1,
							},
							{
								source: 'Montparnasse',
								target: 'Thenardier',
								value: 1,
							},
							{
								source: 'Toussaint',
								target: 'Cosette',
								value: 2,
							},
							{ source: 'Toussaint', target: 'Javert', value: 1 },
							{
								source: 'Toussaint',
								target: 'Valjean',
								value: 1,
							},
							{ source: 'Child1', target: 'Gavroche', value: 2 },
							{ source: 'Child2', target: 'Gavroche', value: 2 },
							{ source: 'Child2', target: 'Child1', value: 3 },
							{ source: 'Brujon', target: 'Babet', value: 3 },
							{ source: 'Brujon', target: 'Gueulemer', value: 3 },
							{
								source: 'Brujon',
								target: 'Thenardier',
								value: 3,
							},
							{ source: 'Brujon', target: 'Gavroche', value: 1 },
							{ source: 'Brujon', target: 'Eponine', value: 1 },
							{
								source: 'Brujon',
								target: 'Claquesous',
								value: 1,
							},
							{
								source: 'Brujon',
								target: 'Montparnasse',
								value: 1,
							},
							{
								source: 'Mme.Hucheloup',
								target: 'Bossuet',
								value: 1,
							},
							{
								source: 'Mme.Hucheloup',
								target: 'Joly',
								value: 1,
							},
							{
								source: 'Mme.Hucheloup',
								target: 'Grantaire',
								value: 1,
							},
							{
								source: 'Mme.Hucheloup',
								target: 'Bahorel',
								value: 1,
							},
							{
								source: 'Mme.Hucheloup',
								target: 'Courfeyrac',
								value: 1,
							},
							{
								source: 'Mme.Hucheloup',
								target: 'Gavroche',
								value: 1,
							},
							{
								source: 'Mme.Hucheloup',
								target: 'Enjolras',
								value: 1,
							},
						],
					}

					/***/
				},

			/***/ './src/index.ts':
				/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
				/*! no static exports found */
				/***/ function(module, exports, __webpack_require__) {
					'use strict'

					/**
					 * @author Jiacheng Pan <jackieanxis@gmail.com>
					 * @description Provide the entrance of NetV.js.
					 * @dependences interfaces.ts, utils/map2.js, node.ts, link.ts
					 */
					Object.defineProperty(exports, '__esModule', {
						value: true,
					})
					exports.NetV = void 0
					const map2_1 = __webpack_require__(
						/*! ./utils/map2 */ './src/utils/map2.ts'
					)
					const node_1 = __webpack_require__(
						/*! ./node */ './src/node.ts'
					)
					const link_1 = __webpack_require__(
						/*! ./link */ './src/link.ts'
					)
					const defaultConfigs = __webpack_require__(
						/*! ./configs */ './src/configs.ts'
					)
					const dataset = __webpack_require__(
						/*! ./dataset */ './src/dataset/index.ts'
					)
					const renderer_1 = __webpack_require__(
						/*! ./renderer */ './src/renderer/index.ts'
					)
					const interaction_1 = __webpack_require__(
						/*! ./interaction/interaction */ './src/interaction/interaction.ts'
					)
					const Utils = __webpack_require__(
						/*! ./utils/utils */ './src/utils/utils.ts'
					)
					class NetV {
						/**
						 * @description create NetV object.
						 * @param configs configurations of NetV, must include a `container: HTMLDivElement` term
						 */
						constructor(configs) {
							this.Utils = Utils
							this.$_id2node = new Map()
							this.$_ends2link = new map2_1.default()
							this.$_configs = JSON.parse(
								JSON.stringify(defaultConfigs)
							)
							this.$_data = { nodes: [], links: [] }
							if (
								!('container' in configs) ||
								configs.container.tagName !== 'DIV'
							) {
								throw Error(
									'Container should be specified as a div element!'
								)
							}
							this.$_container = configs.container
							// override configs
							for (const key in configs) {
								if (key === 'container') continue // NOTE: exclude container in configs
								if (configs[key] === Object(configs[key])) {
									this.$_configs[key] = Object.assign(
										Object.assign({}, this.$_configs[key]),
										configs[key]
									)
								} else {
									this.$_configs[key] = configs[key]
								}
							}
							const canvas = document.createElement('canvas') // TODO: consider node enviroment, document not defined
							const pixelRatio = window.devicePixelRatio || 1
							canvas.style.width = this.$_configs.width + 'px'
							canvas.style.height = this.$_configs.height + 'px'
							canvas.setAttribute(
								'width',
								String(this.$_configs.width * pixelRatio)
							)
							canvas.setAttribute(
								'height',
								String(this.$_configs.height * pixelRatio)
							)
							this.$_container.appendChild(canvas)
							this.$_renderer = new renderer_1.Renderer({
								canvas,
								width: this.$_configs.width,
								height: this.$_configs.height,
								backgroundColor: this.$_configs.backgroundColor,
							})
							this.$_interaction = new interaction_1.InteractionManager(
								this
							)
							if (this.$_configs.enablePanZoom) {
								this.$_interaction.initZoom()
							}
							this.$_interaction.initClick()
						}
						/**
						 * @description data getter setter
						 * @param nodeLinkData? the node-link-data of a graph, provided?setter:getter;
						 */
						data(nodeLinkData) {
							if (nodeLinkData === undefined) {
								return this.$_data
							} else {
								// delete old data
								this.$_data = Object.assign(
									Object.assign({}, this.$_data),
									nodeLinkData
								)
								this.$_id2node = new Map()
								this.$_ends2link = new map2_1.default()
								this.addNodes(this.$_data.nodes)
								this.addLinks(this.$_data.links)
							}
						}
						/**
						 * @description initialize and add a node
						 * @param nodeData the data of a node, include id, styles...
						 */
						addNode(nodeData) {
							nodeData.id = nodeData.id.toString()
							const node = new node_1.default(this, nodeData)
							return node
						}
						/**
						 * @description initialize and add a link
						 * @param linkData the data of a link, include source, target, and styles...
						 */
						addLink(linkData) {
							linkData.source = linkData.source.toString()
							linkData.target = linkData.target.toString()
							const link = new link_1.default(this, linkData)
							return link
						}
						/**
						 * @description initialize and add an array of nodes.
						 * @param {interfaces.NodeData[]} nodesData: a data array of nodes tobe added
						 * @memberof NetV
						 */
						addNodes(nodesData) {
							nodesData.forEach((nodeData) =>
								this.addNode(nodeData)
							)
							this.$_renderer.addNodes([
								...this.$_id2node.values(),
							])
						}
						/**
						 * @description initialize and add an array of links.
						 * @param {interfaces.LinkData[]} linksData: a data array of links tobe added
						 * @memberof NetV
						 */
						addLinks(linksData) {
							linksData.forEach((linkData) =>
								this.addLink(linkData)
							)
							this.$_renderer.addLinks([
								...this.$_ends2link.values(),
							])
						}
						/**
						 * @description get a Node object from the id2node Map data structure
						 * @param id node id
						 */
						getNodeById(id) {
							return this.$_id2node.get(id)
						}
						/**
						 * @description get a Link object from the ends2link Map2 data structure
						 * @param endId1 one end id of the link (source or target)
						 * @param endId2 another end id of the link (source or target)
						 */
						getLinkByEnds(endId1, endId2) {
							return this.$_ends2link.get([endId1, endId2])
						}
						/**
						 * @description wipe all the data in the instance
						 * @memberof NetV
						 */
						wipe() {
							this.$_data = undefined
							this.$_id2node = new Map()
							this.$_ends2link = new map2_1.default()
						}
						/**
						 * @description return build-in dataset according to name
						 * @param name dataset name
						 */
						loadDataset(name) {
							if (name in dataset) return dataset[name]
							console.error(
								`NetV does not have build-in dataset: ${name}`
							)
							return { nodes: [], links: [] }
						}
						/**
						 * given position, return element on this pixel if exists
						 * @param x x pos
						 * @param y y pos
						 */
						getElementByPosition(x, y) {
							const id = this.$_renderer.getIdByPosition(x, y)
							if (id) {
								if (typeof id === 'string') {
									const node = this.getNodeById(id)
									return {
										type: 'node',
										element: node,
									}
								}
								if (Array.isArray(id)) {
									const link = this.getLinkByEnds(
										id[0],
										id[1]
									)
									return {
										type: 'link',
										element: link,
									}
								}
							}
						}
						/**
						 * @description draw elements
						 */
						draw() {
							this.$_renderer.draw()
						}
					}
					exports.NetV = NetV

					/***/
				},

			/***/ './src/interaction/interaction.ts':
				/*!****************************************!*\
  !*** ./src/interaction/interaction.ts ***!
  \****************************************/
				/*! no static exports found */
				/***/ function(module, exports, __webpack_require__) {
					'use strict'

					/**
					 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
					 * @description handle all interaction in NetV
					 */
					Object.defineProperty(exports, '__esModule', {
						value: true,
					})
					exports.InteractionManager = void 0
					class InteractionManager {
						constructor(netv) {
							this.transform = {
								x: 0,
								y: 0,
								k: 1,
							}
							this.isDragging = false
							this.netv = netv
						}
						/**
						 * init zoom&pan interaction
						 * currently no callback
						 */
						initZoom() {
							const canvas = this.netv.$_container.querySelector(
								'canvas'
							)
							const handleScroll = (evt) => {
								const x =
									evt.offsetX || evt.pageX - canvas.offsetLeft
								const y =
									evt.offsetY || evt.pageY - canvas.offsetTop
								const delta = evt.deltaY
									? evt.deltaY / 40
									: evt.detail
									? -evt.detail
									: 0
								if (delta) {
									const k = Math.pow(1.1, delta)
									this.transform.x =
										(1 - k) * x + k * this.transform.x
									this.transform.y =
										(1 - k) * y + k * this.transform.y
									this.transform.k *= k
									this.netv.$_renderer.setTransform(
										this.transform
									)
									this.netv.draw()
								}
								evt.preventDefault()
							}
							// TODO: maybe can handle on div instead of canvas
							canvas.addEventListener(
								'DOMMouseScroll',
								handleScroll,
								false
							)
							canvas.addEventListener(
								'mousewheel',
								handleScroll,
								false
							)
						}
						/**
						 * setup click utility
						 */
						// TODO: need rename
						initClick() {
							const canvas = this.netv.$_container.querySelector(
								'canvas'
							)
							const handleMouseDown = (evt) => {
								const x =
									evt.offsetX || evt.pageX - canvas.offsetLeft
								const y =
									evt.offsetY || evt.pageY - canvas.offsetTop
								const yInv = this.netv.$_configs.height - y
								const element = this.netv.getElementByPosition(
									x,
									yInv
								)
								if (element) {
									element.element.$_clickCallback(
										element.element
									) // TODO: not elegant
								} else {
									this.isDragging = true
									this.dragStartPos = { x, y }
									this.dragStartTransform = JSON.parse(
										JSON.stringify(this.transform)
									)
								}
							}
							const handleMouseMove = (evt) => {
								if (!this.isDragging) return
								const x =
									evt.offsetX || evt.pageX - canvas.offsetLeft
								const y =
									evt.offsetY || evt.pageY - canvas.offsetTop
								this.transform.x =
									this.dragStartTransform.x +
									x -
									this.dragStartPos.x
								this.transform.y =
									this.dragStartTransform.y +
									y -
									this.dragStartPos.y
								this.netv.$_renderer.setTransform(
									this.transform
								)
								this.netv.draw()
							}
							const handleMouseUp = (evt) => {
								if (this.isDragging) {
									this.isDragging = false
								}
							}
							canvas.addEventListener(
								'mousedown',
								handleMouseDown
							)
							canvas.addEventListener(
								'mousemove',
								handleMouseMove
							)
							canvas.addEventListener('mouseup', handleMouseUp)
						}
					}
					exports.InteractionManager = InteractionManager

					/***/
				},

			/***/ './src/link.ts':
				/*!*********************!*\
  !*** ./src/link.ts ***!
  \*********************/
				/*! no static exports found */
				/***/ function(module, exports, __webpack_require__) {
					'use strict'

					/**
					 * @author Jiacheng Pan <jackieanxis@gmail.com>
					 * @description Provide a Link class.
					 * @dependences interfaces.ts, utils/is.ts
					 */
					Object.defineProperty(exports, '__esModule', {
						value: true,
					})
					const configs = __webpack_require__(
						/*! ./configs */ './src/configs.ts'
					)
					class Link {
						constructor(core, linkData) {
							this.$_clickCallback = configs.link.clickCallback
							this.$_strokeWidth = configs.link.strokeWidth
							this.$_strokeColor = configs.link.strokeColor
							this.$_core = core
							const data = Object.assign(
								{
									strokeWidth: this.$_strokeWidth,
									strokeColor: this.$_strokeColor,
									clickCallback: this.$_clickCallback,
								},
								linkData
							)
							this.sourceTarget(data)
							this.strokeWidth(data.strokeWidth)
							this.strokeColor(data.strokeColor)
							this.setClickCallback(data.clickCallback)
						}
						/**
						 * getter/setter of the source
						 * @param {string} [nodeId]
						 * @returns {Node} a source Node Object
						 * @memberof Link
						 */
						source(nodeId) {
							if (arguments.length === 1) {
								// setter
								this.sourceTarget({
									source: nodeId,
									target: this.$_target.id(),
								})
							}
							return this.$_source
						}
						/**
						 * getter/setter of the target
						 * @param {string} [nodeId]
						 * @returns {Node} a target Node Object
						 * @memberof Link
						 */
						target(nodeId) {
							if (arguments.length === 1) {
								// setter
								this.sourceTarget({
									source: this.$_source.id(),
									target: nodeId,
								})
							}
							return this.$_target
						}
						/**
						 * getter/setter of source and target
						 *
						 * @param {interfaces.LinkData} [linkData]
						 * @returns Object {source: Node, target: Node}
						 * @memberof Link
						 */
						sourceTarget(linkData) {
							if (arguments.length > 0) {
								linkData.source = linkData.source.toString()
								linkData.target = linkData.target.toString()
								const oldSource = this.$_source
								const oldTarget = this.$_target
								const newSource = this.$_core.$_id2node.get(
									linkData.source
								)
								const newTarget = this.$_core.$_id2node.get(
									linkData.target
								)
								if (newSource === undefined) {
									// error: undefined source
									throw new Error(
										`Input source (${linkData.source}) does not exist.`
									)
								}
								if (newSource === undefined) {
									// error: undefined target
									throw new Error(
										`Input target (${linkData.target}) does not exist.`
									)
								}
								if (newSource === newTarget) {
									// error: self loop
									throw new Error(
										`Self loop (${linkData.source} <=> ${linkData.target}) is not allowed.`
									)
								}
								if (
									this.$_core.$_ends2link.has([
										linkData.source,
										linkData.target,
									])
								) {
									// error: multiple link
									throw new Error(
										`Multiple link (${linkData.source} <=> ${linkData.target}) is not allowd.`
									)
								}
								if (oldSource && oldTarget) {
									// delete old Map
									this.$_core.$_ends2link.delete([
										oldSource.id(),
										oldTarget.id(),
									])
								}
								this.$_source = newSource
								this.$_target = newTarget
								this.$_core.$_ends2link.set(
									[linkData.source, linkData.target],
									this
								)
							}
							return {
								source: this.$_source,
								target: this.$_target,
							}
						}
						/**
						 * set/get stroke width of a node
						 * @param {number} [value]
						 * @memberof Node
						 */
						strokeWidth(value) {
							if (arguments.length === 1) {
								this.$_strokeWidth = value
							}
							return this.$_strokeWidth
						}
						/**
						 * set/get stroke color of a node
						 * @param {Color} [value]
						 */
						strokeColor(value) {
							if (arguments.length === 1) {
								this.$_strokeColor = value
							}
							return this.$_strokeColor
						}
						/**
						 * set click callback function
						 * @param callback click callback function
						 */
						setClickCallback(callback) {
							this.$_clickCallback = callback
						}
					}
					exports.default = Link

					/***/
				},

			/***/ './src/node.ts':
				/*!*********************!*\
  !*** ./src/node.ts ***!
  \*********************/
				/*! no static exports found */
				/***/ function(module, exports, __webpack_require__) {
					'use strict'

					/**
					 * @author Jiacheng Pan <jackieanxis@gmail.com>
					 * @description Provide a Node class.
					 * @dependences interfaces.ts, utils/is.ts
					 */
					Object.defineProperty(exports, '__esModule', {
						value: true,
					})
					const is_1 = __webpack_require__(
						/*! ./utils/is */ './src/utils/is.ts'
					)
					const configs = __webpack_require__(
						/*! ./configs */ './src/configs.ts'
					)
					class Node {
						constructor(core, nodeData) {
							this.$_clickCallback = configs.node.clickCallback
							this.$_position = {
								x: 0,
								y: 0,
							}
							this.$_strokeWidth = configs.node.strokeWidth
							this.$_strokeColor = configs.node.strokeColor
							this.$_fill = configs.node.fill
							this.$_r = configs.node.r
							this.$_core = core
							const data = Object.assign(
								{
									x: this.$_position.x,
									y: this.$_position.y,
									strokeWidth: this.$_strokeWidth,
									strokeColor: this.$_strokeColor,
									r: this.$_r,
									fill: this.$_fill,
									clickCallback: this.$_clickCallback,
								},
								nodeData
							)
							this.$_setId(data.id)
							this.position(data.x, data.y)
							this.strokeWidth(data.strokeWidth)
							this.strokeColor(data.strokeColor)
							this.fill(data.fill)
							this.r(data.r)
							this.setClickCallback(data.clickCallback)
						}
						/**
						 * getter of private property $_id
						 * @memberof Node
						 */
						id() {
							return this.$_id
						}
						/**
						 * set/get x postion
						 * @param {number} [value]
						 * @memberof Node
						 */
						x(value) {
							if (arguments.length !== 0) {
								this.$_position.x = value
							}
							return this.$_position.x
						}
						/**
						 * set/get y postion
						 * @param {number} [value]
						 * @memberof Node
						 */
						y(value) {
							if (arguments.length !== 0) {
								this.$_position.y = value
							}
							return this.$_position.y
						}
						/**
						 * set/get postion
						 * @param {number} [value]
						 * @memberof Node
						 */
						position(x, y) {
							if (arguments.length === 2) {
								this.$_position.x = x
								this.$_position.y = y
							} else if (
								arguments.length !== 0 &&
								arguments.length !== 2
							) {
								throw Error(
									`Node.position() method can not deal with ${arguments.length} parameters.`
								)
							}
							return this.$_position
						}
						/**
						 * set/get stroke width of a node
						 * @param {number} [value]
						 * @memberof Node
						 */
						strokeWidth(value) {
							if (arguments.length === 1) {
								this.$_strokeWidth = value
							}
							return this.$_strokeWidth
						}
						/**
						 * set/get stroke color of a node
						 * @param {Color} [value]
						 */
						strokeColor(value) {
							if (arguments.length === 1) {
								this.$_strokeColor = value
							}
							return this.$_strokeColor
						}
						/**
						 * set/get fill color of a node
						 * @param {Color} [value]
						 */
						fill(value) {
							if (arguments.length === 1) {
								this.$_fill = value
							}
							return this.$_fill
						}
						/**
						 * set/get radius of a node
						 * @param {number} [r]
						 */
						r(value) {
							if (arguments.length === 1) {
								this.$_r = value
							}
							return this.$_r
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
									throw new Error(
										`Duplicate node (${value}) is not allowed.`
									)
								}
								if (is_1.isValidId(this.$_id)) {
									throw new Error(
										'Can not change the id of an exist node.'
									)
								}
								this.$_core.$_id2node.set(value, this)
								this.$_id = value
							} else {
								throw new Error(`Invalid ID ${value}`)
							}
						}
						/**
						 * set click callback function
						 * @param callback click callback function
						 */
						setClickCallback(callback) {
							this.$_clickCallback = callback
						}
					}
					exports.default = Node

					/***/
				},

			/***/ './src/renderer/elements/link/fragment.glsl':
				/*!**************************************************!*\
  !*** ./src/renderer/elements/link/fragment.glsl ***!
  \**************************************************/
				/*! exports provided: default */
				/***/ function(
					module,
					__webpack_exports__,
					__webpack_require__
				) {
					'use strict'
					__webpack_require__.r(__webpack_exports__)
					/* harmony default export */ __webpack_exports__[
						'default'
					] =
						'#version 300 es\r\nprecision highp float;\r\nin vec4 color;\r\n\r\nout vec4 fragmentColor;\r\n\r\nvoid main(void) {\r\n    fragmentColor = vec4(color.rgb * color.a, color.a);\r\n}'

					/***/
				},

			/***/ './src/renderer/elements/link/id-fragment.glsl':
				/*!*****************************************************!*\
  !*** ./src/renderer/elements/link/id-fragment.glsl ***!
  \*****************************************************/
				/*! exports provided: default */
				/***/ function(
					module,
					__webpack_exports__,
					__webpack_require__
				) {
					'use strict'
					__webpack_require__.r(__webpack_exports__)
					/* harmony default export */ __webpack_exports__[
						'default'
					] =
						'#version 300 es\r\nprecision highp float;\r\nin vec4 color;\r\n\r\nin vec4 id;\r\n\r\n// TODO: all id related shader need clean up\r\nout vec4 fragmentColor;\r\n\r\nvoid main(void) {\r\n    fragmentColor = id;\r\n}'

					/***/
				},

			/***/ './src/renderer/elements/link/id-vertex.glsl':
				/*!***************************************************!*\
  !*** ./src/renderer/elements/link/id-vertex.glsl ***!
  \***************************************************/
				/*! exports provided: default */
				/***/ function(
					module,
					__webpack_exports__,
					__webpack_require__
				) {
					'use strict'
					__webpack_require__.r(__webpack_exports__)
					/* harmony default export */ __webpack_exports__[
						'default'
					] =
						'#version 300 es\r\nprecision highp float;\r\nin vec3 inVertexPos;\r\nin vec2 inSourcePosition;\r\nin vec2 inTargetPosition;\r\nin float inStrokeWidth;\r\nin vec4 inStrokeColor;\r\n\r\nin vec4 inId;\r\n\r\nout vec4 color;\r\n\r\nout vec4 id;\r\n\r\nuniform mat3 projection;\r\nuniform vec2 scale;\r\nuniform vec2 translate;\r\n\r\nvoid main(void) {\r\n    id = inId;\r\n\r\n    color = inStrokeColor;\r\n\r\n    vec2 source = inSourcePosition * scale + translate;\r\n    vec2 target = inTargetPosition * scale + translate;\r\n    vec2 delta = source - target;\r\n    vec2 center = 0.5 * (source + target);\r\n    float len = length(delta);\r\n    float phi = atan(delta.y / delta.x);\r\n\r\n    mat3 line_scale = mat3(\r\n        len, 0, 0,\r\n        0, inStrokeWidth, 0,\r\n        0, 0, 1\r\n    );\r\n    mat3 line_rotate = mat3(\r\n        cos(phi), sin(phi), 0,\r\n        -sin(phi), cos(phi), 0,\r\n        0, 0, 1\r\n    );\r\n    mat3 line_translate = mat3(\r\n        1, 0, 0,\r\n        0, 1, 0,\r\n        center.x, center.y, 1\r\n    );\r\n    \r\n    mat3 transform = line_translate * line_rotate * line_scale;\r\n\r\n    gl_Position = vec4(projection * transform * inVertexPos, 1.);\r\n}'

					/***/
				},

			/***/ './src/renderer/elements/link/render-link.ts':
				/*!***************************************************!*\
  !*** ./src/renderer/elements/link/render-link.ts ***!
  \***************************************************/
				/*! no static exports found */
				/***/ function(module, exports, __webpack_require__) {
					'use strict'

					/**
					 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
					 * @description Link used in renderer
					 */
					Object.defineProperty(exports, '__esModule', {
						value: true,
					})
					exports.RenderLinkManager = void 0
					const vertex_glsl_1 = __webpack_require__(
						/*! ./vertex.glsl */ './src/renderer/elements/link/vertex.glsl'
					)
					const fragment_glsl_1 = __webpack_require__(
						/*! ./fragment.glsl */ './src/renderer/elements/link/fragment.glsl'
					)
					const id_vertex_glsl_1 = __webpack_require__(
						/*! ./id-vertex.glsl */ './src/renderer/elements/link/id-vertex.glsl'
					)
					const id_fragment_glsl_1 = __webpack_require__(
						/*! ./id-fragment.glsl */ './src/renderer/elements/link/id-fragment.glsl'
					)
					const utils_1 = __webpack_require__(
						/*! ../../utils */ './src/renderer/utils.ts'
					)
					var LinkAttrKey
					;(function(LinkAttrKey) {
						LinkAttrKey[(LinkAttrKey['TEMPLATE'] = 0)] = 'TEMPLATE'
						LinkAttrKey[(LinkAttrKey['SOURCE'] = 1)] = 'SOURCE'
						LinkAttrKey[(LinkAttrKey['TARGET'] = 2)] = 'TARGET'
						LinkAttrKey[(LinkAttrKey['WIDTH'] = 3)] = 'WIDTH'
						LinkAttrKey[(LinkAttrKey['COLOR'] = 4)] = 'COLOR'
					})(LinkAttrKey || (LinkAttrKey = {}))
					var LinkIdAttrKey
					;(function(LinkIdAttrKey) {
						LinkIdAttrKey[(LinkIdAttrKey['TEMPLATE'] = 0)] =
							'TEMPLATE'
						LinkIdAttrKey[(LinkIdAttrKey['SOURCE'] = 1)] = 'SOURCE'
						LinkIdAttrKey[(LinkIdAttrKey['TARGET'] = 2)] = 'TARGET'
						LinkIdAttrKey[(LinkIdAttrKey['WIDTH'] = 3)] = 'WIDTH'
						LinkIdAttrKey[(LinkIdAttrKey['COLOR'] = 4)] = 'COLOR'
						LinkIdAttrKey[(LinkIdAttrKey['ID'] = 5)] = 'ID'
					})(LinkIdAttrKey || (LinkIdAttrKey = {}))
					class RenderLinkManager {
						constructor(gl, width, height, limit, idTexture) {
							this.count = 0
							this.gl = gl
							this.limit = limit
							this.width = width
							this.height = height
							this.attributes = utils_1.extractAttributesFromShader(
								vertex_glsl_1.default
							)
							this.program = utils_1.createProgram(
								this.gl,
								vertex_glsl_1.default,
								fragment_glsl_1.default,
								this.attributes
							)
							this.idAttributes = utils_1.extractAttributesFromShader(
								id_vertex_glsl_1.default
							)
							this.idProgram = utils_1.createProgram(
								this.gl,
								id_vertex_glsl_1.default,
								id_fragment_glsl_1.default,
								this.idAttributes
							)
							this.idTexture = idTexture
							this.renderIdToIds = {}
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
									attr.array = new Float32Array(
										attr.size * this.limit
									)
							})
							// init buffers
							this.attributes.forEach((attr) => {
								attr.buffer = utils_1.createArrayBuffer(
									this.gl,
									attr.array
								)
							})
							// init id attributes and buffers
							// TODO: hardcode check, need refactor
							this.idAttributes.forEach((attr, idx) => {
								if (idx < this.attributes.length) {
									this.idAttributes[idx] = this.attributes[
										idx
									]
								} else {
									if (!attr.isBuildIn)
										attr.array = new Float32Array(
											attr.size * this.limit
										)
									attr.buffer = utils_1.createArrayBuffer(
										this.gl,
										attr.array
									)
								}
							})
							// init uniforms
							this.gl.useProgram(this.program)
							const projectionLoc = this.gl.getUniformLocation(
								this.program,
								'projection'
							)
							const scaleLoc = this.gl.getUniformLocation(
								this.program,
								'scale'
							)
							const translateLoc = this.gl.getUniformLocation(
								this.program,
								'translate'
							)
							// this.gl.viewport(0, 0, this.width, this.height) // TODO: viewport set, not needed? put here in case bug appear
							// prettier-ignore
							const projection = new Float32Array([
            2 / this.width, 0, 0,
            0, -2 / this.height, 0,
            -1, 1, 1
        ]);
							this.gl.uniformMatrix3fv(
								projectionLoc,
								false,
								projection
							)
							const scale = new Float32Array([1, 1])
							this.gl.uniform2fv(scaleLoc, scale)
							const translate = new Float32Array([0, 0])
							this.gl.uniform2fv(translateLoc, translate)
							// id uniforms, identical to link
							// TODO: need refactor too
							this.gl.useProgram(this.idProgram)
							const idProjectionLoc = this.gl.getUniformLocation(
								this.idProgram,
								'projection'
							)
							const idScaleLoc = this.gl.getUniformLocation(
								this.idProgram,
								'scale'
							)
							const idTranslateLoc = this.gl.getUniformLocation(
								this.idProgram,
								'translate'
							)
							this.gl.uniformMatrix3fv(
								idProjectionLoc,
								false,
								projection
							)
							this.gl.uniform2fv(idScaleLoc, scale)
							this.gl.uniform2fv(idTranslateLoc, translate)
						}
						/**
						 * add links data to engine
						 * @param links links data
						 */
						addData(links) {
							// set array
							links.forEach((link, i) => {
								// TODO: consider link and render link attribute mapping
								const source = link.source()
								const sourcePosition = source.position()
								this.attributes[LinkAttrKey.SOURCE].array[
									2 * (this.count + i)
								] = sourcePosition.x
								this.attributes[LinkAttrKey.SOURCE].array[
									2 * (this.count + i) + 1
								] = sourcePosition.y
								const target = link.target()
								const targetPosition = target.position()
								this.attributes[LinkAttrKey.TARGET].array[
									2 * (this.count + i)
								] = targetPosition.x
								this.attributes[LinkAttrKey.TARGET].array[
									2 * (this.count + i) + 1
								] = targetPosition.y
								this.attributes[LinkAttrKey.WIDTH].array[
									this.count + i
								] = link.strokeWidth()
								const color = link.strokeColor()
								this.attributes[LinkAttrKey.COLOR].array[
									4 * (this.count + i)
								] = color.r
								this.attributes[LinkAttrKey.COLOR].array[
									4 * (this.count + i) + 1
								] = color.g
								this.attributes[LinkAttrKey.COLOR].array[
									4 * (this.count + i) + 2
								] = color.b
								this.attributes[LinkAttrKey.COLOR].array[
									4 * (this.count + i) + 3
								] = color.a
								const renderIdColor = utils_1.encodeRenderId(
									2 * (this.count + i) + 1
								) // NOTE: link render id, use odd integer
								this.idAttributes[LinkIdAttrKey.ID].array[
									4 * (this.count + i)
								] = renderIdColor.r
								this.idAttributes[LinkIdAttrKey.ID].array[
									4 * (this.count + i) + 1
								] = renderIdColor.g
								this.idAttributes[LinkIdAttrKey.ID].array[
									4 * (this.count + i) + 2
								] = renderIdColor.b
								this.idAttributes[LinkIdAttrKey.ID].array[
									4 * (this.count + i) + 3
								] = renderIdColor.a
								const sourceTarget = link.sourceTarget()
								this.renderIdToIds[2 * (this.count + i) + 1] = [
									sourceTarget.source.id(),
									sourceTarget.target.id(),
								]
							})
							this.attributes.forEach((attr) => {
								if (!attr.isBuildIn) {
									this.gl.bindBuffer(
										this.gl.ARRAY_BUFFER,
										attr.buffer
									)
									this.gl.bufferSubData(
										this.gl.ARRAY_BUFFER,
										attr.size *
											this.count *
											attr.array.BYTES_PER_ELEMENT,
										attr.array,
										attr.size * this.count,
										attr.size * links.length
									)
								}
							})
							// id buffer data
							const attr = this.idAttributes[LinkIdAttrKey.ID]
							this.gl.bindBuffer(
								this.gl.ARRAY_BUFFER,
								attr.buffer
							)
							this.gl.bufferSubData(
								this.gl.ARRAY_BUFFER,
								attr.size *
									this.count *
									attr.array.BYTES_PER_ELEMENT,
								attr.array,
								attr.size * this.count,
								attr.size * links.length
							)
							this.count += links.length
						}
						/**
						 * set Transform in Render Link
						 * @param transform current transform(pan&zoom condition)
						 */
						setTransform(transform) {
							this.gl.useProgram(this.program)
							const scaleLoc = this.gl.getUniformLocation(
								this.program,
								'scale'
							)
							const translateLoc = this.gl.getUniformLocation(
								this.program,
								'translate'
							)
							const scale = new Float32Array([
								transform.k,
								transform.k,
							])
							this.gl.uniform2fv(scaleLoc, scale)
							const translate = new Float32Array([
								transform.x,
								transform.y,
							])
							this.gl.uniform2fv(translateLoc, translate)
							// id uniforms, identical to link
							// TODO: need refactor too
							this.gl.useProgram(this.idProgram)
							const idScaleLoc = this.gl.getUniformLocation(
								this.idProgram,
								'scale'
							)
							const idTranslateLoc = this.gl.getUniformLocation(
								this.idProgram,
								'translate'
							)
							this.gl.uniform2fv(idScaleLoc, scale)
							this.gl.uniform2fv(idTranslateLoc, translate)
						}
						/**
						 * render id to link ids(source and target)
						 * @param renderId
						 */
						getIdsByRenderId(renderId) {
							return this.renderIdToIds[renderId]
						}
						/**
						 * draw links
						 */
						draw() {
							if (this.count > 0) {
								this.gl.enable(this.gl.BLEND)
								this.gl.blendFunc(
									this.gl.ONE,
									this.gl.ONE_MINUS_SRC_ALPHA
								)
								this.gl.useProgram(this.program)
								this.attributes.forEach((attr) => {
									this.gl.enableVertexAttribArray(attr.index)
								})
								this.attributes.forEach((attr, i) => {
									this.gl.bindBuffer(
										this.gl.ARRAY_BUFFER,
										attr.buffer
									)
									this.gl.vertexAttribPointer(
										attr.index,
										attr.size,
										this.gl.FLOAT,
										false,
										attr.isBuildIn
											? 0
											: attr.size *
													attr.array
														.BYTES_PER_ELEMENT,
										0
									)
									if (!attr.isBuildIn)
										this.gl.vertexAttribDivisor(
											attr.index,
											1
										)
								})
							}
							this.gl.drawArraysInstanced(
								this.gl.TRIANGLE_STRIP,
								0,
								4,
								this.count
							)
							// draw id
							this.gl.blendFunc(this.gl.ONE, this.gl.ZERO)
							this.gl.useProgram(this.idProgram)
							this.gl.bindFramebuffer(
								this.gl.FRAMEBUFFER,
								this.idTexture
							)
							this.idAttributes.forEach((attr) => {
								this.gl.enableVertexAttribArray(attr.index)
							})
							const attr = this.idAttributes[LinkIdAttrKey.ID]
							this.gl.bindBuffer(
								this.gl.ARRAY_BUFFER,
								attr.buffer
							)
							this.gl.vertexAttribPointer(
								attr.index,
								attr.size,
								this.gl.FLOAT,
								false,
								attr.size * attr.array.BYTES_PER_ELEMENT,
								0
							)
							this.gl.vertexAttribDivisor(attr.index, 1)
							this.gl.drawArraysInstanced(
								this.gl.TRIANGLE_STRIP,
								0,
								4,
								this.count
							)
							this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null)
							this.gl.enable(this.gl.BLEND)
							this.gl.blendFunc(
								this.gl.ONE,
								this.gl.ONE_MINUS_SRC_ALPHA
							)
						}
					}
					exports.RenderLinkManager = RenderLinkManager

					/***/
				},

			/***/ './src/renderer/elements/link/vertex.glsl':
				/*!************************************************!*\
  !*** ./src/renderer/elements/link/vertex.glsl ***!
  \************************************************/
				/*! exports provided: default */
				/***/ function(
					module,
					__webpack_exports__,
					__webpack_require__
				) {
					'use strict'
					__webpack_require__.r(__webpack_exports__)
					/* harmony default export */ __webpack_exports__[
						'default'
					] =
						'#version 300 es\r\nprecision highp float;\r\nin vec3 inVertexPos;\r\nin vec2 inSourcePosition;\r\nin vec2 inTargetPosition;\r\nin float inStrokeWidth;\r\nin vec4 inStrokeColor;\r\n\r\nout vec4 color;\r\n\r\nuniform mat3 projection;\r\nuniform vec2 scale;\r\nuniform vec2 translate;\r\n\r\nvoid main(void) {\r\n    color = inStrokeColor;\r\n\r\n    vec2 source = inSourcePosition * scale + translate;\r\n    vec2 target = inTargetPosition * scale + translate;\r\n    vec2 delta = source - target;\r\n    vec2 center = 0.5 * (source + target);\r\n    float len = length(delta);\r\n    float phi = atan(delta.y / delta.x);\r\n\r\n    mat3 line_scale = mat3(\r\n        len, 0, 0,\r\n        0, inStrokeWidth, 0,\r\n        0, 0, 1\r\n    );\r\n    mat3 line_rotate = mat3(\r\n        cos(phi), sin(phi), 0,\r\n        -sin(phi), cos(phi), 0,\r\n        0, 0, 1\r\n    );\r\n    mat3 line_translate = mat3(\r\n        1, 0, 0,\r\n        0, 1, 0,\r\n        center.x, center.y, 1\r\n    );\r\n    \r\n    mat3 transform = line_translate * line_rotate * line_scale;\r\n\r\n    gl_Position = vec4(projection * transform * inVertexPos, 1.);\r\n}'

					/***/
				},

			/***/ './src/renderer/elements/node/fragment.glsl':
				/*!**************************************************!*\
  !*** ./src/renderer/elements/node/fragment.glsl ***!
  \**************************************************/
				/*! exports provided: default */
				/***/ function(
					module,
					__webpack_exports__,
					__webpack_require__
				) {
					'use strict'
					__webpack_require__.r(__webpack_exports__)
					/* harmony default export */ __webpack_exports__[
						'default'
					] =
						'#version 300 es\r\nprecision highp float;\r\nin vec2 pos;\r\nin float radius;\r\nin vec4 color;\r\nin float strokeWidth;\r\nin vec4 strokeColor;\r\n\r\nout vec4 fragmentColor;\r\n\r\nuniform vec2 viewport;\r\nuniform float pixelRatio;\r\n\r\nfloat inCircle() {\r\n  vec2 flip_pos = pos;\r\n  flip_pos.y = viewport.y - pos.y;\r\n  float r = distance(gl_FragCoord.xy / pixelRatio, flip_pos);\r\n  float draw = 1. - step(radius - strokeWidth / 2., r);\r\n  return draw;\r\n}\r\n\r\nfloat inBorder() {\r\n  if (strokeWidth == 0.) {\r\n    return 0.;\r\n  }\r\n  vec2 flip_pos = pos;\r\n  flip_pos.y = viewport.y - pos.y;\r\n  float r = distance(gl_FragCoord.xy / pixelRatio, flip_pos);\r\n  float drawOuter = 1. - smoothstep((radius + strokeWidth / 2.) * 0.95, (radius + strokeWidth / 2.) * 1.05, r);\r\n  float drawInner = 1. - step(radius - strokeWidth / 2., r);\r\n  return drawOuter * (1. - drawInner);\r\n  // return drawOuter;\r\n}\r\n\r\nvoid main(void) {\r\n    // border check, using 0.5(center of smoothstep)\r\n    if (inCircle() < 1. && (strokeWidth < 0.8 || inBorder() < 0.5)) {\r\n        discard;\r\n    }\r\n    fragmentColor = inBorder() * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a) + inCircle() * vec4(color.rgb * color.a, color.a);\r\n}'

					/***/
				},

			/***/ './src/renderer/elements/node/id-fragment.glsl':
				/*!*****************************************************!*\
  !*** ./src/renderer/elements/node/id-fragment.glsl ***!
  \*****************************************************/
				/*! exports provided: default */
				/***/ function(
					module,
					__webpack_exports__,
					__webpack_require__
				) {
					'use strict'
					__webpack_require__.r(__webpack_exports__)
					/* harmony default export */ __webpack_exports__[
						'default'
					] =
						'#version 300 es\r\nprecision highp float;\r\nin vec2 pos;\r\nin float radius;\r\nin vec4 color;\r\nin float strokeWidth;\r\nin vec4 strokeColor;\r\n\r\nin vec4 id;\r\n\r\nout vec4 fragmentColor;\r\n\r\nuniform vec2 viewport;\r\nuniform float pixelRatio;\r\n\r\nfloat inCircle() {\r\n  vec2 flip_pos = pos;\r\n  flip_pos.y = viewport.y - pos.y;\r\n  float r = distance(gl_FragCoord.xy / pixelRatio, flip_pos);\r\n  float draw = 1. - step(radius - strokeWidth / 2., r);\r\n  return draw;\r\n}\r\n\r\nfloat inBorder() {\r\n  if (strokeWidth == 0.) {\r\n    return 0.;\r\n  }\r\n  vec2 flip_pos = pos;\r\n  flip_pos.y = viewport.y - pos.y;\r\n  float r = distance(gl_FragCoord.xy / pixelRatio, flip_pos);\r\n  float drawOuter = 1. - smoothstep((radius + strokeWidth / 2.) * 0.95, (radius + strokeWidth / 2.) * 1.05, r);\r\n  float drawInner = 1. - step(radius - strokeWidth / 2., r);\r\n  return drawOuter * (1. - drawInner);\r\n  // return drawOuter;\r\n}\r\n\r\nvoid main(void) {\r\n    // border check, using 0.5(center of smoothstep)\r\n    if (inCircle() < 1. && (strokeWidth < 0.8 || inBorder() < 0.5)) {\r\n        discard;\r\n    }\r\n    fragmentColor = id;\r\n}'

					/***/
				},

			/***/ './src/renderer/elements/node/id-vertex.glsl':
				/*!***************************************************!*\
  !*** ./src/renderer/elements/node/id-vertex.glsl ***!
  \***************************************************/
				/*! exports provided: default */
				/***/ function(
					module,
					__webpack_exports__,
					__webpack_require__
				) {
					'use strict'
					__webpack_require__.r(__webpack_exports__)
					/* harmony default export */ __webpack_exports__[
						'default'
					] =
						'#version 300 es\r\nprecision highp float;\r\nin vec3 inVertexPos;\r\nin vec2 inPosition;\r\nin float inRadius;\r\nin vec4 inFill;\r\nin float inStrokeWidth;\r\nin vec4 inStrokeColor;\r\n\r\nin vec4 inId;\r\n\r\nout vec2 pos;\r\nout float radius;\r\nout vec4 color;\r\nout float strokeWidth;\r\nout vec4 strokeColor;\r\n\r\nout vec4 id;\r\n\r\nuniform mat3 projection;\r\nuniform vec2 scale;\r\nuniform vec2 translate;\r\nuniform vec2 viewport;\r\n\r\nvoid main(void) {\r\n    id = inId;\r\n\r\n    float size = inRadius + inStrokeWidth / 2.;\r\n    radius = inRadius;\r\n    color = inFill;\r\n    strokeWidth = inStrokeWidth;\r\n    strokeColor = inStrokeColor;\r\n    float vertexSize = size * (2. * sqrt(2.)) * 1.5; // NOTE: x 1.5 to prevent border factor\r\n    pos = scale * inPosition + translate;\r\n    mat3 transform = mat3(\r\n        vertexSize, 0, 0,\r\n        0, vertexSize, 0,\r\n        pos.x, pos.y, 1\r\n    );\r\n\r\n    gl_Position = vec4(projection * transform * inVertexPos, 1.);\r\n}'

					/***/
				},

			/***/ './src/renderer/elements/node/render-node.ts':
				/*!***************************************************!*\
  !*** ./src/renderer/elements/node/render-node.ts ***!
  \***************************************************/
				/*! no static exports found */
				/***/ function(module, exports, __webpack_require__) {
					'use strict'

					/**
					 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
					 * @description Node using in Renderer
					 */
					Object.defineProperty(exports, '__esModule', {
						value: true,
					})
					exports.RenderNodeManager = void 0
					const vertex_glsl_1 = __webpack_require__(
						/*! ./vertex.glsl */ './src/renderer/elements/node/vertex.glsl'
					)
					const fragment_glsl_1 = __webpack_require__(
						/*! ./fragment.glsl */ './src/renderer/elements/node/fragment.glsl'
					)
					const id_vertex_glsl_1 = __webpack_require__(
						/*! ./id-vertex.glsl */ './src/renderer/elements/node/id-vertex.glsl'
					)
					const id_fragment_glsl_1 = __webpack_require__(
						/*! ./id-fragment.glsl */ './src/renderer/elements/node/id-fragment.glsl'
					)
					const utils_1 = __webpack_require__(
						/*! ../../utils */ './src/renderer/utils.ts'
					)
					var NodeAttrKey
					;(function(NodeAttrKey) {
						NodeAttrKey[(NodeAttrKey['Template'] = 0)] = 'Template'
						NodeAttrKey[(NodeAttrKey['Position'] = 1)] = 'Position'
						NodeAttrKey[(NodeAttrKey['Size'] = 2)] = 'Size'
						NodeAttrKey[(NodeAttrKey['Color'] = 3)] = 'Color'
						NodeAttrKey[(NodeAttrKey['StrokeWidth'] = 4)] =
							'StrokeWidth'
						NodeAttrKey[(NodeAttrKey['StrokeColor'] = 5)] =
							'StrokeColor'
					})(NodeAttrKey || (NodeAttrKey = {}))
					var NodeIdAttrKey
					;(function(NodeIdAttrKey) {
						NodeIdAttrKey[(NodeIdAttrKey['Template'] = 0)] =
							'Template'
						NodeIdAttrKey[(NodeIdAttrKey['Position'] = 1)] =
							'Position'
						NodeIdAttrKey[(NodeIdAttrKey['Size'] = 2)] = 'Size'
						NodeIdAttrKey[(NodeIdAttrKey['Color'] = 3)] = 'Color'
						NodeIdAttrKey[(NodeIdAttrKey['StrokeWidth'] = 4)] =
							'StrokeWidth'
						NodeIdAttrKey[(NodeIdAttrKey['StrokeColor'] = 5)] =
							'StrokeColor'
						NodeIdAttrKey[(NodeIdAttrKey['Id'] = 6)] = 'Id'
					})(NodeIdAttrKey || (NodeIdAttrKey = {}))
					class RenderNodeManager {
						/**
						 * create render node manager
						 * @param gl WebGL context
						 * @param width canvas width
						 * @param height canvas height
						 * @param limit max nodes number
						 * @param idTexture texture store elements id of each pixel
						 */
						constructor(gl, width, height, limit, idTexture) {
							this.count = 0
							this.gl = gl
							this.limit = limit
							this.width = width
							this.height = height
							this.attributes = utils_1.extractAttributesFromShader(
								vertex_glsl_1.default
							)
							this.program = utils_1.createProgram(
								this.gl,
								vertex_glsl_1.default,
								fragment_glsl_1.default,
								this.attributes
							)
							this.idAttributes = utils_1.extractAttributesFromShader(
								id_vertex_glsl_1.default
							)
							this.idProgram = utils_1.createProgram(
								this.gl,
								id_vertex_glsl_1.default,
								id_fragment_glsl_1.default,
								this.idAttributes
							)
							this.idTexture = idTexture
							this.renderIdToId = {}
							// init arrays
							// prettier-ignore
							this.attributes[NodeAttrKey.Template].array = new Float32Array([
            -0.5, 0.0, 1.0,
            0.0, -0.5, 1.0,
            0.0, 0.5, 1.0,
            0.5, 0.0, 1.0,
        ]);
							// TODO: combine the following two loop?
							this.attributes.forEach((attr) => {
								if (!attr.isBuildIn)
									attr.array = new Float32Array(
										attr.size * this.limit
									)
							})
							// init buffers
							this.attributes.forEach((attr) => {
								attr.buffer = utils_1.createArrayBuffer(
									this.gl,
									attr.array
								)
							})
							// init id attributes and buffers
							// TODO: hardcode check, need refactor
							this.idAttributes.forEach((attr, idx) => {
								if (idx < this.attributes.length) {
									this.idAttributes[idx] = this.attributes[
										idx
									]
								} else {
									if (!attr.isBuildIn)
										attr.array = new Float32Array(
											attr.size * this.limit
										)
									attr.buffer = utils_1.createArrayBuffer(
										this.gl,
										attr.array
									)
								}
							})
							// init uniforms
							this.gl.useProgram(this.program)
							const projectionLoc = this.gl.getUniformLocation(
								this.program,
								'projection'
							)
							const scaleLoc = this.gl.getUniformLocation(
								this.program,
								'scale'
							)
							const translateLoc = this.gl.getUniformLocation(
								this.program,
								'translate'
							)
							const viewportLoc = this.gl.getUniformLocation(
								this.program,
								'viewport'
							)
							const pixelRatioLoc = this.gl.getUniformLocation(
								this.program,
								'pixelRatio'
							)
							// this.gl.viewport(0, 0, this.width, this.height) // TODO: viewport set, not needed? put here in case bug appear
							// prettier-ignore
							const projection = new Float32Array([
            2 / this.width, 0, 0,
            0, -2 / this.height, 0,
            -1, 1, 1
        ]);
							this.gl.uniformMatrix3fv(
								projectionLoc,
								false,
								projection
							)
							const scale = new Float32Array([1, 1])
							this.gl.uniform2fv(scaleLoc, scale)
							const translate = new Float32Array([0, 0])
							this.gl.uniform2fv(translateLoc, translate)
							const viewport = new Float32Array([
								this.width,
								this.height,
							])
							this.gl.uniform2fv(viewportLoc, viewport)
							const pixelRatio = window.devicePixelRatio || 1
							this.gl.uniform1f(pixelRatioLoc, pixelRatio)
							// id uniforms, identical to node
							// TODO: need refactor too
							this.gl.useProgram(this.idProgram)
							const idProjectionLoc = this.gl.getUniformLocation(
								this.idProgram,
								'projection'
							)
							const idScaleLoc = this.gl.getUniformLocation(
								this.idProgram,
								'scale'
							)
							const idTranslateLoc = this.gl.getUniformLocation(
								this.idProgram,
								'translate'
							)
							const idViewportLoc = this.gl.getUniformLocation(
								this.idProgram,
								'viewport'
							)
							const idPixelRatioLoc = this.gl.getUniformLocation(
								this.idProgram,
								'pixelRatio'
							)
							this.gl.uniformMatrix3fv(
								idProjectionLoc,
								false,
								projection
							)
							this.gl.uniform2fv(idScaleLoc, scale)
							this.gl.uniform2fv(idTranslateLoc, translate)
							this.gl.uniform2fv(idViewportLoc, viewport)
							this.gl.uniform1f(idPixelRatioLoc, pixelRatio)
						}
						/**
						 * set Transform in Render Node
						 * @param transform current transform(pan&zoom condition)
						 */
						setTransform(transform) {
							this.gl.useProgram(this.program)
							const scaleLoc = this.gl.getUniformLocation(
								this.program,
								'scale'
							)
							const translateLoc = this.gl.getUniformLocation(
								this.program,
								'translate'
							)
							const scale = new Float32Array([
								transform.k,
								transform.k,
							])
							this.gl.uniform2fv(scaleLoc, scale)
							const translate = new Float32Array([
								transform.x,
								transform.y,
							])
							this.gl.uniform2fv(translateLoc, translate)
							// id uniforms, identical to node
							// TODO: need refactor too
							this.gl.useProgram(this.idProgram)
							const idScaleLoc = this.gl.getUniformLocation(
								this.idProgram,
								'scale'
							)
							const idTranslateLoc = this.gl.getUniformLocation(
								this.idProgram,
								'translate'
							)
							this.gl.uniform2fv(idScaleLoc, scale)
							this.gl.uniform2fv(idTranslateLoc, translate)
						}
						/**
						 * add nodes data to engine
						 * @param nodes nodes data
						 */
						addData(nodes) {
							// set array
							nodes.forEach((node, i) => {
								// TODO: consider node and render node attribute mapping
								const position = node.position()
								this.attributes[NodeAttrKey.Position].array[
									2 * (this.count + i)
								] = position.x
								this.attributes[NodeAttrKey.Position].array[
									2 * (this.count + i) + 1
								] = position.y
								this.attributes[NodeAttrKey.Size].array[
									this.count + i
								] = node.r()
								const fill = node.fill()
								this.attributes[NodeAttrKey.Color].array[
									4 * (this.count + i)
								] = fill.r
								this.attributes[NodeAttrKey.Color].array[
									4 * (this.count + i) + 1
								] = fill.g
								this.attributes[NodeAttrKey.Color].array[
									4 * (this.count + i) + 2
								] = fill.b
								this.attributes[NodeAttrKey.Color].array[
									4 * (this.count + i) + 3
								] = fill.a
								this.attributes[NodeAttrKey.StrokeWidth].array[
									this.count + i
								] = node.strokeWidth()
								const strokeColor = node.strokeColor()
								this.attributes[NodeAttrKey.StrokeColor].array[
									4 * (this.count + i)
								] = strokeColor.r
								this.attributes[NodeAttrKey.StrokeColor].array[
									4 * (this.count + i) + 1
								] = strokeColor.g
								this.attributes[NodeAttrKey.StrokeColor].array[
									4 * (this.count + i) + 2
								] = strokeColor.b
								this.attributes[NodeAttrKey.StrokeColor].array[
									4 * (this.count + i) + 3
								] = strokeColor.a
								const renderIdColor = utils_1.encodeRenderId(
									2 * (this.count + i)
								) // NOTE: node render id, use even integer
								this.idAttributes[NodeIdAttrKey.Id].array[
									4 * (this.count + i)
								] = renderIdColor.r
								this.idAttributes[NodeIdAttrKey.Id].array[
									4 * (this.count + i) + 1
								] = renderIdColor.g
								this.idAttributes[NodeIdAttrKey.Id].array[
									4 * (this.count + i) + 2
								] = renderIdColor.b
								this.idAttributes[NodeIdAttrKey.Id].array[
									4 * (this.count + i) + 3
								] = renderIdColor.a
								this.renderIdToId[
									2 * (this.count + i)
								] = node.id()
							})
							this.attributes.forEach((attr) => {
								if (!attr.isBuildIn) {
									this.gl.bindBuffer(
										this.gl.ARRAY_BUFFER,
										attr.buffer
									)
									this.gl.bufferSubData(
										this.gl.ARRAY_BUFFER,
										attr.size *
											this.count *
											attr.array.BYTES_PER_ELEMENT,
										attr.array,
										attr.size * this.count,
										attr.size * nodes.length
									)
								}
							})
							// id buffer data
							const attr = this.idAttributes[NodeIdAttrKey.Id]
							this.gl.bindBuffer(
								this.gl.ARRAY_BUFFER,
								attr.buffer
							)
							this.gl.bufferSubData(
								this.gl.ARRAY_BUFFER,
								attr.size *
									this.count *
									attr.array.BYTES_PER_ELEMENT,
								attr.array,
								attr.size * this.count,
								attr.size * nodes.length
							)
							this.count += nodes.length
						}
						/**
						 * render id to id
						 * @param renderId render id in number
						 */
						getIdByRenderId(renderId) {
							return this.renderIdToId[renderId]
						}
						/**
						 * draw nodes
						 */
						draw() {
							if (this.count > 0) {
								this.gl.enable(this.gl.BLEND)
								this.gl.blendFunc(
									this.gl.ONE,
									this.gl.ONE_MINUS_SRC_ALPHA
								)
								this.gl.useProgram(this.program)
								this.attributes.forEach((attr) => {
									this.gl.enableVertexAttribArray(attr.index)
								})
								this.attributes.forEach((attr, i) => {
									this.gl.bindBuffer(
										this.gl.ARRAY_BUFFER,
										attr.buffer
									)
									this.gl.vertexAttribPointer(
										attr.index,
										attr.size,
										this.gl.FLOAT,
										false,
										attr.size *
											attr.array.BYTES_PER_ELEMENT,
										0
									)
									if (!attr.isBuildIn)
										this.gl.vertexAttribDivisor(
											attr.index,
											1
										)
								})
							}
							this.gl.drawArraysInstanced(
								this.gl.TRIANGLE_STRIP,
								0,
								4,
								this.count
							)
							// draw id
							this.gl.blendFunc(this.gl.ONE, this.gl.ZERO)
							this.gl.useProgram(this.idProgram)
							this.gl.bindFramebuffer(
								this.gl.FRAMEBUFFER,
								this.idTexture
							)
							this.idAttributes.forEach((attr) => {
								this.gl.enableVertexAttribArray(attr.index)
							})
							const attr = this.idAttributes[NodeIdAttrKey.Id]
							this.gl.bindBuffer(
								this.gl.ARRAY_BUFFER,
								attr.buffer
							)
							this.gl.vertexAttribPointer(
								attr.index,
								attr.size,
								this.gl.FLOAT,
								false,
								attr.size * attr.array.BYTES_PER_ELEMENT,
								0
							)
							this.gl.vertexAttribDivisor(attr.index, 1)
							this.gl.drawArraysInstanced(
								this.gl.TRIANGLE_STRIP,
								0,
								4,
								this.count
							)
							this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null)
							this.gl.enable(this.gl.BLEND)
							this.gl.blendFunc(
								this.gl.ONE,
								this.gl.ONE_MINUS_SRC_ALPHA
							)
						}
					}
					exports.RenderNodeManager = RenderNodeManager

					/***/
				},

			/***/ './src/renderer/elements/node/vertex.glsl':
				/*!************************************************!*\
  !*** ./src/renderer/elements/node/vertex.glsl ***!
  \************************************************/
				/*! exports provided: default */
				/***/ function(
					module,
					__webpack_exports__,
					__webpack_require__
				) {
					'use strict'
					__webpack_require__.r(__webpack_exports__)
					/* harmony default export */ __webpack_exports__[
						'default'
					] =
						'#version 300 es\r\nprecision highp float;\r\nin vec3 inVertexPos;\r\nin vec2 inPosition;\r\nin float inRadius;\r\nin vec4 inFill;\r\nin float inStrokeWidth;\r\nin vec4 inStrokeColor;\r\n\r\nout vec2 pos;\r\nout float radius;\r\nout vec4 color;\r\nout float strokeWidth;\r\nout vec4 strokeColor;\r\n\r\nuniform mat3 projection;\r\nuniform vec2 scale;\r\nuniform vec2 translate;\r\nuniform vec2 viewport;\r\n\r\nvoid main(void) {\r\n    float size = inRadius + inStrokeWidth / 2.;\r\n    radius = inRadius;\r\n    color = inFill;\r\n    strokeWidth = inStrokeWidth;\r\n    strokeColor = inStrokeColor;\r\n    float vertexSize = size * (2. * sqrt(2.)) * 1.5; // NOTE: x 1.5 to prevent border factor\r\n    pos = scale * inPosition + translate;\r\n    mat3 transform = mat3(\r\n        vertexSize, 0, 0,\r\n        0, vertexSize, 0,\r\n        pos.x, pos.y, 1\r\n    );\r\n\r\n    gl_Position = vec4(projection * transform * inVertexPos, 1.);\r\n}'

					/***/
				},

			/***/ './src/renderer/index.ts':
				/*!*******************************!*\
  !*** ./src/renderer/index.ts ***!
  \*******************************/
				/*! no static exports found */
				/***/ function(module, exports, __webpack_require__) {
					'use strict'

					/**
					 * @description render graph using webgl
					 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
					 */
					Object.defineProperty(exports, '__esModule', {
						value: true,
					})
					exports.Renderer = void 0
					const defaultConfigs = __webpack_require__(
						/*! ../configs */ './src/configs.ts'
					)
					const render_node_1 = __webpack_require__(
						/*! ./elements/node/render-node */ './src/renderer/elements/node/render-node.ts'
					)
					const render_link_1 = __webpack_require__(
						/*! ./elements/link/render-link */ './src/renderer/elements/link/render-link.ts'
					)
					const utils_1 = __webpack_require__(
						/*! ./utils */ './src/renderer/utils.ts'
					)
					class Renderer {
						/**
						 * create renderer object
						 * @param configs {canvas: HTMLCanvasElement, width: number, height: number, backgroundColor: Color} configs passed to renderer
						 */
						constructor(configs) {
							const {
								canvas,
								width,
								height,
								backgroundColor,
							} = configs
							try {
								this.gl = canvas.getContext('webgl2')
							} catch (_a) {
								throw new Error(
									'NetV requires WebGL2 supported by your browser'
								)
							}
							this.backgroundColor = backgroundColor
							this.width = width
							this.height = height
							this.initIdTexture()
							// TODO: parameters too many
							this.nodeManager = new render_node_1.RenderNodeManager(
								this.gl,
								width,
								height,
								defaultConfigs.nodeLimit,
								this.idTexture
							)
							this.linkManager = new render_link_1.RenderLinkManager(
								this.gl,
								width,
								height,
								defaultConfigs.linkLimit,
								this.idTexture
							)
						}
						/**
						 * add nodes to node manager
						 * @param nodes node data in NetV
						 */
						addNodes(nodes) {
							this.nodeManager.addData(nodes)
						}
						/**
						 * add links to link manager
						 * @param links link data in NetV
						 */
						addLinks(links) {
							this.linkManager.addData(links)
						}
						setTransform(transform) {
							this.nodeManager.setTransform(transform)
							this.linkManager.setTransform(transform)
							this.draw()
						}
						/**
						 * draw all elements
						 */
						draw() {
							this.gl.bindFramebuffer(
								this.gl.FRAMEBUFFER,
								this.idTexture
							)
							this.gl.clearColor(1, 1, 1, 1)
							this.gl.clear(this.gl.COLOR_BUFFER_BIT)
							this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null)
							this.gl.clearColor(
								this.backgroundColor.r,
								this.backgroundColor.g,
								this.backgroundColor.b,
								this.backgroundColor.a
							)
							this.gl.clear(this.gl.COLOR_BUFFER_BIT)
							this.linkManager.draw()
							this.nodeManager.draw()
						}
						/**
						 * get element's id at (x, y) of canvas if exists
						 * @param x x pos
						 * @param y y pos
						 */
						getIdByPosition(x, y) {
							const renderId = this.readIdTexture(x, y)
							if (renderId >= 0) {
								if (renderId % 2 === 0) {
									// NOTE: node has even render id, link has odd render id
									const nodeId = this.nodeManager.getIdByRenderId(
										renderId
									)
									return nodeId
								} else {
									const linkIds = this.linkManager.getIdsByRenderId(
										renderId
									)
									return linkIds
								}
							}
						}
						/**
						 * read pixel value at (x, y) of texture
						 * @param x x pos
						 * @param y y pos
						 */
						readIdTexture(x, y) {
							const ratio = window.devicePixelRatio || 1
							this.gl.bindFramebuffer(
								this.gl.READ_FRAMEBUFFER,
								this.idTexture
							)
							const readPixelBuffer = new Uint8Array([
								255,
								255,
								255,
								255,
							]) // -1
							this.gl.readPixels(
								x * ratio,
								y * ratio,
								1,
								1,
								this.gl.RGBA,
								this.gl.UNSIGNED_BYTE,
								readPixelBuffer
							)
							const objectID = utils_1.decodeRenderId(
								readPixelBuffer
							)
							return objectID
						}
						/**
						 * init WebGL texture for recording position of elements
						 */
						initIdTexture() {
							const gl = this.gl
							const pixelRatio = window.devicePixelRatio || 1
							const screenWidth = this.width * pixelRatio
							const screenHeight = this.height * pixelRatio
							const fbo = gl.createFramebuffer()
							gl.bindFramebuffer(gl.FRAMEBUFFER, fbo)
							const idTexture = gl.createTexture()
							gl.bindTexture(gl.TEXTURE_2D, idTexture)
							gl.texImage2D(
								gl.TEXTURE_2D,
								0,
								gl.RGBA,
								screenWidth,
								screenHeight,
								0,
								gl.RGBA,
								gl.UNSIGNED_BYTE,
								null
							)
							gl.texParameteri(
								gl.TEXTURE_2D,
								gl.TEXTURE_MIN_FILTER,
								gl.LINEAR
							)
							gl.texParameteri(
								gl.TEXTURE_2D,
								gl.TEXTURE_MAG_FILTER,
								gl.LINEAR
							)
							gl.bindTexture(gl.TEXTURE_2D, null)
							gl.framebufferTexture2D(
								gl.FRAMEBUFFER,
								gl.COLOR_ATTACHMENT0,
								gl.TEXTURE_2D,
								idTexture,
								0
							)
							// TODO: need simplify
							gl.drawBuffers(
								[0].map((v) => v + gl.COLOR_ATTACHMENT0)
							)
							const rbo = gl.createRenderbuffer()
							gl.bindRenderbuffer(gl.RENDERBUFFER, rbo)
							gl.clearColor(1, 1, 1, 1)
							gl.renderbufferStorage(
								gl.RENDERBUFFER,
								gl.DEPTH24_STENCIL8,
								screenWidth,
								screenHeight
							)
							gl.bindRenderbuffer(gl.RENDERBUFFER, null)
							gl.framebufferRenderbuffer(
								gl.FRAMEBUFFER,
								gl.DEPTH_STENCIL_ATTACHMENT,
								gl.RENDERBUFFER,
								rbo
							)
							if (
								gl.checkFramebufferStatus(gl.FRAMEBUFFER) !==
								gl.FRAMEBUFFER_COMPLETE
							) {
								throw new Error('Framebuffer generate failed')
							}
							gl.bindFramebuffer(gl.FRAMEBUFFER, null)
							this.idTexture = fbo
						}
					}
					exports.Renderer = Renderer

					/***/
				},

			/***/ './src/renderer/utils.ts':
				/*!*******************************!*\
  !*** ./src/renderer/utils.ts ***!
  \*******************************/
				/*! no static exports found */
				/***/ function(module, exports, __webpack_require__) {
					'use strict'

					/**
					 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
					 * @description utility functions for renderer
					 */
					Object.defineProperty(exports, '__esModule', {
						value: true,
					})
					exports.decodeRenderId = exports.encodeRenderId = exports.extractAttributesFromShader = exports.createArrayBuffer = exports.createProgram = exports.compileShader = void 0
					/**
					 * compile webgl shader
					 * @param gl WebGL instance
					 * @param shaderStr shader file in string
					 * @param shaderType vertex or fragment shader
					 */
					function compileShader(gl, shaderStr, shaderType) {
						const shader = gl.createShader(shaderType)
						gl.shaderSource(shader, shaderStr)
						gl.compileShader(shader)
						if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
							throw new Error(
								'Shader compile failed: ' +
									gl.getShaderInfoLog(shader)
							)
						}
						return shader
					}
					exports.compileShader = compileShader
					/**
					 * generate WebGL program
					 * @param gl WebGL instance
					 * @param vertShaderStr vertex shader in string format
					 * @param fragShaderStr fragment shader in string format
					 * @param attributes attributes
					 */
					function createProgram(
						gl,
						vertShaderStr,
						fragShaderStr,
						attributes
					) {
						const vertShader = compileShader(
							gl,
							vertShaderStr,
							gl.VERTEX_SHADER
						)
						const fragShader = compileShader(
							gl,
							fragShaderStr,
							gl.FRAGMENT_SHADER
						)
						const program = gl.createProgram()
						attributes.forEach((attr) => {
							gl.bindAttribLocation(
								program,
								attr.index,
								attr.name
							)
						})
						gl.attachShader(program, vertShader)
						gl.attachShader(program, fragShader)
						gl.linkProgram(program)
						if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
							throw new Error(
								`Could not link shaders: ${gl.getProgramInfoLog(
									program
								)}`
							)
						}
						return program
					}
					exports.createProgram = createProgram
					/**
					 * create WebGL array buffer given data array
					 * @param gl WebGL context
					 * @param data data to store in buffer
					 * @returns WebGL buffer store given data
					 */
					function createArrayBuffer(gl, data) {
						const buffer = gl.createBuffer()
						gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
						gl.bufferData(gl.ARRAY_BUFFER, data, gl.DYNAMIC_DRAW)
						return buffer
					}
					exports.createArrayBuffer = createArrayBuffer
					/**
					 * extract attributes from a shader sring
					 * @param {string} shaderStr
					 * @returns {RenderAttribute[]} attributes array
					 */
					function extractAttributesFromShader(shaderStr) {
						const matchings = shaderStr.match(/in\s.*;/g)
						return matchings.map((match, index) => {
							const name = match.split(' ')[2].slice(0, -1)
							const type = match.split(' ')[1]
							let size = 1
							if (type.slice(0, 3) === 'vec') {
								size = Number(type.slice(-1))
							}
							let isBuildIn = false
							if (name === 'inVertexPos') {
								isBuildIn = true
							}
							return {
								name,
								size,
								index,
								isBuildIn,
							}
						})
					}
					exports.extractAttributesFromShader = extractAttributesFromShader
					/**
					 * encode a render id as color to pass in texture
					 * @param id render id
					 */
					function encodeRenderId(id) {
						// split a large number by 8-bit: id = concat(a, b, g, r), and normalize them into (0, 1)
						const r = (id & 255) / 255.0
						const g = ((id >> 8) & 255) / 255.0
						const b = ((id >> 16) & 255) / 255.0
						const a = ((id >> 24) & 255) / 255.0
						return { r, g, b, a }
					}
					exports.encodeRenderId = encodeRenderId
					/**
					 * decode pixel value to number
					 * @param pixelVal a pixel's value on texture
					 */
					function decodeRenderId(pixelVal) {
						// parse normalized parts of id number, bit shift to origin position and concat
						const renderId =
							pixelVal[0] |
							(pixelVal[1] << 8) |
							(pixelVal[2] << 16) |
							(pixelVal[3] << 24)
						return renderId
					}
					exports.decodeRenderId = decodeRenderId

					/***/
				},

			/***/ './src/utils/is.ts':
				/*!*************************!*\
  !*** ./src/utils/is.ts ***!
  \*************************/
				/*! no static exports found */
				/***/ function(module, exports, __webpack_require__) {
					'use strict'

					Object.defineProperty(exports, '__esModule', {
						value: true,
					})
					exports.isValidId = void 0
					/**
					 * Test whether a string can be a valid id of a Node.
					 * @param {string} value: the string tobe tested
					 * @returns {boolean}
					 */
					function isValidId(value) {
						return (
							value !== undefined &&
							typeof value === 'string' &&
							value.length > 0
						)
					}
					exports.isValidId = isValidId

					/***/
				},

			/***/ './src/utils/map2.ts':
				/*!***************************!*\
  !*** ./src/utils/map2.ts ***!
  \***************************/
				/*! no static exports found */
				/***/ function(module, exports, __webpack_require__) {
					'use strict'

					/**
					 * @author Jiacheng Pan <jackieanxis@gmail.com>
					 * @description Map2 is a Map data structure which maps two keys to one value.
					 * @Usage same to Map data structure in ES6.
					 * @dependences None
					 */
					Object.defineProperty(exports, '__esModule', {
						value: true,
					})
					const JOIN = String.fromCharCode(7)
					const isKeys = (keys) => {
						return (
							keys instanceof Array &&
							keys.length === 2 &&
							keys.every(
								(key) => key !== undefined && key !== null
							)
						)
					}
					class Map2 {
						constructor(entries) {
							this.map = new Map()
							if (entries instanceof Array) {
								entries.forEach((entry) => {
									let [key, value] = entry
									this.set(key, value)
								})
							}
						}
						get size() {
							return this.map.size
						}
						delete(keys) {
							if (isKeys(keys)) {
								const key = keys.join(JOIN)
								const key_ = keys[1] + JOIN + keys[0]
								let map = this.map
								map.delete(key)
								map.delete(key_)
							}
						}
						set(keys, value) {
							if (isKeys(keys)) {
								const key = keys.join(JOIN)
								const key_ = keys[1] + JOIN + keys[0]
								let map = this.map
								if (!map.has(key_)) {
									map.set(key, value)
								} else {
									map.set(key_, value)
								}
							}
							return this
						}
						get(keys) {
							if (isKeys(keys)) {
								const key = keys.join(JOIN)
								const key_ = keys[1] + JOIN + keys[0]
								return this.map.get(key) || this.map.get(key_)
							} else {
								return undefined
							}
						}
						has(keys) {
							if (isKeys(keys)) {
								const key = keys.join(JOIN)
								const key_ = keys[1] + JOIN + keys[0]
								return this.map.has(key) || this.map.has(key_)
							} else {
								return false
							}
						}
						forEach(func) {
							this.map.forEach((value, key) => {
								let keys = key.split(JOIN)
								func(value, keys, this)
							})
						}
						entries() {
							return [...this.map.entries()].map((entry) => {
								const key = entry[0].split(JOIN)
								const value = entry[1]
								return [key, value]
							})
						}
						keys() {
							let keys = [...this.map.keys()]
							return keys.map((key) => key.split(JOIN))
						}
						values() {
							return [...this.map.values()]
						}
					}
					exports.default = Map2

					/***/
				},

			/***/ './src/utils/utils.ts':
				/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
				/*! no static exports found */
				/***/ function(module, exports, __webpack_require__) {
					'use strict'

					/**
					 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
					 * @description some utility functions
					 */
					Object.defineProperty(exports, '__esModule', {
						value: true,
					})
					exports.transformGraphPosition = void 0
					/**
					 * given a graph data with position, return a copy of graph, with position transformed to center of given size
					 * @param graph node link graph data
					 * @param size graph size (max(width, height))
					 * @param centerX x pos of graph center
					 * @param centerY y pos of graph center
					 */
					function transformGraphPosition(
						graph,
						size,
						centerX,
						centerY
					) {
						const targetGraph = JSON.parse(JSON.stringify(graph))
						const xs = targetGraph.nodes.map((node) => node.x)
						const ys = targetGraph.nodes.map((node) => node.y)
						const xMin = Math.min(...xs)
						const xMax = Math.max(...xs)
						const yMin = Math.min(...ys)
						const yMax = Math.max(...ys)
						const sum = (acc, x) => acc + x
						const xMid = xs.reduce(sum) / xs.length
						const yMid = ys.reduce(sum) / ys.length
						targetGraph.nodes.forEach((node) => {
							node.x =
								((node.x - xMid) / (xMax - xMin)) * size +
								centerX
							node.y =
								((node.y - yMid) / (yMax - yMin)) * size +
								centerY
						})
						return targetGraph
					}
					exports.transformGraphPosition = transformGraphPosition

					/***/
				},

			/******/
		}
	)
})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YXNldC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YXNldC9taXNlcmFibGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJhY3Rpb24vaW50ZXJhY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpbmsudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL2VsZW1lbnRzL2xpbmsvZnJhZ21lbnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvZWxlbWVudHMvbGluay9pZC1mcmFnbWVudC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlci9lbGVtZW50cy9saW5rL2lkLXZlcnRleC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlci9lbGVtZW50cy9saW5rL3JlbmRlci1saW5rLnRzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlci9lbGVtZW50cy9saW5rL3ZlcnRleC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlci9lbGVtZW50cy9ub2RlL2ZyYWdtZW50Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL2VsZW1lbnRzL25vZGUvaWQtZnJhZ21lbnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvZWxlbWVudHMvbm9kZS9pZC12ZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvZWxlbWVudHMvbm9kZS9yZW5kZXItbm9kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvZWxlbWVudHMvbm9kZS92ZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvbWFwMi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7R0FHRzs7O0FBS1UsYUFBSyxHQUFHLEdBQUc7QUFDWCxjQUFNLEdBQUcsR0FBRztBQUNaLHVCQUFlLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FB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LEVBQUUsQ0FBQyxpQkFBaUIsRUFBRTtRQUN6RSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFO1FBQ3ZFLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsRUFBRSxDQUFDLGtCQUFrQixFQUFFO1FBQzlFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRTtRQUN6RSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUU7UUFDeEUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUU7UUFDekUsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRTtRQUMzRSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUU7UUFDMUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFO1FBQ3pFLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRTtRQUM5RSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRTtRQUM3RSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFO1FBQ3RFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRTtRQUN6RSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUU7UUFDMUUsRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFO1FBQy9FLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsRUFBRSxDQUFDLGtCQUFrQixFQUFFO1FBQzdFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRTtRQUMxRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUU7UUFDdEUsRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUU7UUFDL0UsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRTtRQUMzRSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUU7UUFDMUUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLENBQUMsRUFBRSxDQUFDLGtCQUFrQixFQUFFO1FBQzNFLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUU7UUFDM0UsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUU7UUFDekUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFO1FBQ3ZFLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRTtRQUM3RSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUU7UUFDeEUsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLENB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QUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQy9DLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDaEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMxRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RCxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hELEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDN0QsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDeEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2hELEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDaEQsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMxRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQy9DLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFF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QUFFLENBQUMsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RCxFQUFFLE1BQU0sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakUsRUFBRSxNQUFNLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzVELEVBQUUsTUFBTSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUM1RCxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLG1CQUFtQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEUsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMxRCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLG1CQUFtQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakUsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLG1CQUFtQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEUsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQy9ELEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMxRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLG1CQUFtQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDM0QsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNoRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDL0MsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMvQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2hELEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNoRCxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQy9DLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzlDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDOUMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDM0QsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVB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QUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNoRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQy9DLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUss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QUFjLENBQUMsQ0FBQztZQUNsRixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUMsQ0FBQztZQUV0RixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzVCLE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUMsQ0FBQztZQUNsRixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUMsQ0FBQztZQUV0RixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBRTdFLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUN4RSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUM1RSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUM1RSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUU1RSxNQUFNLGFBQWEsR0FBRyxzQkFBYyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsd0NBQXdDO1lBQ3ZHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUM7WUFDakYsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUM7WUFDckYsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUM7WUFDckYsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENB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QUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUVsRSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDdkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDM0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDM0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFFM0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUVuRixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUM7WUFDcEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUM7WUFDeEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUM7WUFDeEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUM7WUFFeEYsTUFBTSxhQUFhLEdBQUcsc0JBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUMseUNBQXlDO1lBQ3BHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUM7WUFDakYsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUM7WUFDckYsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FB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QUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxPQUFPO1FBQzNELElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsT0FBTztJQUMvRCxDQUFDLENBQUM7SUFFRixPQUFPLFdBQVc7QUFDdEIsQ0FBQztBQXhCRCx3REF3QkMiLCJmaWxlIjoiTmV0Vi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBkZWZhdWx0IGNvbmZpZ3VyYXRpb25zIGluIE5ldFZcclxuICogQGF1dGhvciBYaWFvZG9uZyBaaGFvIDx6aGFveGlhb2RvbmdAemp1LmVkdS5jbj5cclxuICovXHJcblxyXG5pbXBvcnQgTm9kZSBmcm9tICcuL25vZGUnXHJcbmltcG9ydCBMaW5rIGZyb20gJy4vbGluaydcclxuXHJcbmV4cG9ydCBjb25zdCB3aWR0aCA9IDgwMFxyXG5leHBvcnQgY29uc3QgaGVpZ2h0ID0gNjAwXHJcbmV4cG9ydCBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDEsIGE6IDEgfVxyXG5leHBvcnQgY29uc3QgZW5hYmxlUGFuWm9vbSA9IHRydWVcclxuZXhwb3J0IGNvbnN0IG5vZGVMaW1pdCA9IDEwMFxyXG5leHBvcnQgY29uc3QgbGlua0xpbWl0ID0gMTAwMFxyXG5cclxuZXhwb3J0IGNvbnN0IG5vZGUgPSB7XHJcbiAgICByOiA1LFxyXG4gICAgZmlsbDogeyByOiAwLjIsIGc6IDAuNiwgYjogMC4yLCBhOiAwLjggfSxcclxuICAgIC8vIHN0cm9rZUNvbG9yOiB7IHI6IDAuNiwgZzogMC42LCBiOiAwLjYsIGE6IDAuNSB9LFxyXG4gICAgc3Ryb2tlQ29sb3I6IHsgcjogMC45LCBnOiAwLjksIGI6IDAuOSwgYTogMC42IH0sXHJcbiAgICBzdHJva2VXaWR0aDogMixcclxuICAgIGNsaWNrQ2FsbGJhY2s6IChub2RlOiBOb2RlKSA9PiB7fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbGluayA9IHtcclxuICAgIC8vIHN0cm9rZUNvbG9yOiB7IHI6IDAuNSwgZzogMC41LCBiOiAwLjUsIGE6IDAuMiB9LFxyXG4gICAgc3Ryb2tlQ29sb3I6IHsgcjogMC40LCBnOiAwLjYsIGI6IDAuOCwgYTogMC4yIH0sXHJcbiAgICBzdHJva2VXaWR0aDogMC41LFxyXG4gICAgY2xpY2tDYWxsYmFjazogKGxpbms6IExpbmspID0+IHt9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XHJcbiAqIEBkZXNjcmlwdGlvbiBidWlsZC1pbiBkYXRhc2V0IGluIE5ldFZcclxuICovXHJcblxyXG5pbXBvcnQgeyBtaXNlcmFibGVzIH0gZnJvbSAnLi9taXNlcmFibGVzJ1xyXG5cclxuLy8gVE9ETzogY29uc2lkZXIgcHJvY2VzcyBkYXRhc2V0LCBsaWtlIHVzZSBidWlsZC1pbiBwb3MgaW5mb3JtYXRpb24gb3Igbm90XHJcblxyXG5leHBvcnQgeyBtaXNlcmFibGVzIH1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XHJcbiAqIEBkZXNjcmlwdGlvbiBMZXMgTWlzZXJhYmxlcyByZWxhdGlvbiBkYXRhc2V0LlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gZ2VuZXJhdGVkIGJ5IGQzLWZvcmNlOiBodHRwczovL29ic2VydmFibGVocS5jb20vQGQzL2ZvcmNlLWRpcmVjdGVkLWdyYXBoXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbWlzZXJhYmxlcyA9IHtcclxuICAgIG5vZGVzOiBbXHJcbiAgICAgICAgeyBpZDogJ015cmllbCcsIGdyb3VwOiAxLCB4OiAwLCB5OiAwIH0sXHJcbiAgICAgICAgeyBpZDogJ05hcG9sZW9uJywgZ3JvdXA6IDEsIHg6IC03LjM3MzY4ODc4MDc4MzE5OCwgeTogNi43NTQ5MDI5NDI2MTUyMzkgfSxcclxuICAgICAgICB7IGlkOiAnTWxsZS5CYXB0aXN0aW5lJywgZ3JvdXA6IDEsIHg6IDEuMjM2Mzg2NDU1OTUwMjEzOCwgeTogLTE0LjA4Nzk4NTk2NDM0MzYyMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdNbWUuTWFnbG9pcmUnLCBncm91cDogMSwgeDogMTAuNTM4NDcwMjA1MTQ3MjY3LCB5OiAxMy43NDU1NjgyMjE2MjA0OTUgfSxcclxuICAgICAgICB7IGlkOiAnQ291bnRlc3NkZUxvJywgZ3JvdXA6IDEsIHg6IC0xOS42OTQyNjk3MDYzMDg1NzUsIHk6IC0zLjQ4MzYzOTAwNzU4NjIzMjcgfSxcclxuICAgICAgICB7IGlkOiAnR2Vib3JhbmQnLCBncm91cDogMSwgeDogMTguODY2OTQxOTU1NzU4OTU3LCB5OiAtMTIuMDAxNjA0MTExMDM1NDIxIH0sXHJcbiAgICAgICAgeyBpZDogJ0NoYW1wdGVyY2llcicsIGdyb3VwOiAxLCB4OiAtNi4zNTg5ODA4MjAzODU1MjksIHk6IDIzLjY1NTA5MTY5MTM0NTYzIH0sXHJcbiAgICAgICAgeyBpZDogJ0NyYXZhdHRlJywgZ3JvdXA6IDEsIHg6IC0xMi4xOTQ0NTM2NDkxNDI3NjIsIHk6IC0yMy40Nzk2Nzg0NTE3Nzg0MzcgfSxcclxuICAgICAgICB7IGlkOiAnQ291bnQnLCBncm91cDogMSwgeDogMjYuNTY4MDE4MzMzNzQ4ODk2LCB5OiA5LjcwMjU5NzY4NDAwMTA2MSB9LFxyXG4gICAgICAgIHsgaWQ6ICdPbGRNYW4nLCBncm91cDogMSwgeDogLTI3LjczMDM2NjY4NDEzNDE0MywgeTogMTEuNDQ2NjkyMjU0MjQ4MDg4IH0sXHJcbiAgICAgICAgeyBpZDogJ0xhYmFycmUnLCBncm91cDogMiwgeDogMTMuNDAzMTg3MjE0OTE4NDU3LCB5OiAtMjguNjQxODMyNTYxNTE0NzUgfSxcclxuICAgICAgICB7IGlkOiAnVmFsamVhbicsIGdyb3VwOiAyLCB4OiA5LjkyNjEyMjg0MTcxMjMwNSwgeTogMzEuNjQ2MDQzNzU0ODA4MjMgfSxcclxuICAgICAgICB7IGlkOiAnTWFyZ3Vlcml0ZScsIGdyb3VwOiAzLCB4OiAtMjkuOTcxNzk1NDkxNDE0NTQzLCB5OiAtMTcuMzY5MjY4MTE5ODk1NjM2IH0sXHJcbiAgICAgICAgeyBpZDogJ01tZS5kZVInLCBncm91cDogMiwgeDogMzUuMjE0NTQ1ODEzMTk4NDg0LCB5OiAtNy43NDE4MTkxMTI0NjYwNjYgfSxcclxuICAgICAgICB7IGlkOiAnSXNhYmVhdScsIGdyb3VwOiAyLCB4OiAtMjEuNTE5MzcyNzY4OTE3ODU4LCB5OiAzMC42MDkwOTMzNDg3NDc4IH0sXHJcbiAgICAgICAgeyBpZDogJ0dlcnZhaXMnLCBncm91cDogMiwgeDogLTQuOTc3MTk3NjE0MDExMjgyLCB5OiAtMzguNDA4NjkwNDczNzg1NzUgfSxcclxuICAgICAgICB7IGlkOiAnVGhvbG9teWVzJywgZ3JvdXA6IDMsIHg6IDMwLjU4NTk1OTgxODI0MTcyNiwgeTogMjUuNzc3ODc5MzE1MzUyOTczIH0sXHJcbiAgICAgICAgeyBpZDogJ0xpc3RvbGllcicsIGdyb3VwOiAzLCB4OiAtNDEuMTk1ODQ3MTYwOTExMTM2LCB5OiAxLjcwMzU3NzYxNjMyNjkxIH0sXHJcbiAgICAgICAgeyBpZDogJ0ZhbWV1aWwnLCBncm91cDogMywgeDogMzAuMDczMDg1MTMzNTA2MDEyLCB5OiAtMjkuOTI2NzM2MzgzMjU2MDEgfSxcclxuICAgICAgICB7IGlkOiAnQmxhY2hldmlsbGUnLCBncm91cDogMywgeDogLTIuMDEzNDM4NDQ5MTAwNjU3NCwgeTogNDMuNTQyNDYyNzg3NjI0NzE0IH0sXHJcbiAgICAgICAgeyBpZDogJ0Zhdm91cml0ZScsIGdyb3VwOiAzLCB4OiAtMjguNjUzMzg0MDM4ODkxNjg3LCB5OiAtMzQuMzM2MzMwMzY3Njk5Mjc2IH0sXHJcbiAgICAgICAgeyBpZDogJ0RhaGxpYScsIGdyb3VwOiAzLCB4OiA0NS40MTY1MDYwMjgwNTE0NCwgeTogNi4xMTA3MjY2NTEwNTkzMjEgfSxcclxuICAgICAgICB7IGlkOiAnWmVwaGluZScsIGdyb3VwOiAzLCB4OiAtMzguNTAxNjY4ODAyODcyNDIsIHk6IDI2Ljc4ODQ1ODMyNDMyMTY5NSB9LFxyXG4gICAgICAgIHsgaWQ6ICdGYW50aW5lJywgZ3JvdXA6IDMsIHg6IDEwLjUyNTk1NjY5NDExNjM3MiwgeTogLTQ2Ljc4ODkzMjgzMzI0MTUyNSB9LFxyXG4gICAgICAgIHsgaWQ6ICdNbWUuVGhlbmFyZGllcicsIGdyb3VwOiA0LCB4OiAyNC4zNTY3ODkwNzA3MDkxMywgeTogNDIuNTA1ODQ0NjExODI5Mzc0IH0sXHJcbiAgICAgICAgeyBpZDogJ1RoZW5hcmRpZXInLCBncm91cDogNCwgeDogLTQ3LjYzNDYzODg1OTgzNDUzLCB5OiAtMTUuMTk2NzQ5MDE3MjQ1MTU5IH0sXHJcbiAgICAgICAgeyBpZDogJ0Nvc2V0dGUnLCBncm91cDogNSwgeDogNDYuMjg4NDQ3MDQ0MTMzMzE0LCB5OiAtMjEuMzg2NDM2NTk1MjQ1NzI2IH0sXHJcbiAgICAgICAgeyBpZDogJ0phdmVydCcsIGdyb3VwOiA0LCB4OiAtMjAuMDYwMzIyMjc2MDk0MDMsIHk6IDQ3LjkzMzExNDU0NzAzNTcgfSxcclxuICAgICAgICB7IGlkOiAnRmF1Y2hlbGV2ZW50JywgZ3JvdXA6IDAsIHg6IC0xNy45MDkyMTEyNDMwNjQ3NjcsIHk6IC00OS43OTIxNjk1OTE3MjY3OSB9LFxyXG4gICAgICAgIHsgaWQ6ICdCYW1hdGFib2lzJywgZ3JvdXA6IDIsIHg6IDQ3LjY2ODkxMDA1OTUxMDAwNCwgeTogMjUuMDUzNDQzMTUxMzU4MzggfSxcclxuICAgICAgICB7IGlkOiAnUGVycGV0dWUnLCBncm91cDogMywgeDogLTUyLjk2MzEyODQyODcwMTk4LCB5OiAxMy45NjA5MTA2ODEwNzAyMjMgfSxcclxuICAgICAgICB7IGlkOiAnU2ltcGxpY2UnLCBncm91cDogMiwgeDogMzAuMTEyNTcwODU3MDMyMjk2LCB5OiAtNDYuODMxOTY2Mzk0NTQ5NDU0IH0sXHJcbiAgICAgICAgeyBpZDogJ1NjYXVmZmxhaXJlJywgZ3JvdXA6IDIsIHg6IDkuNTgxMzYzMjExOTEyODE2LCB5OiA1NS43NTEyMTA1NjA4NjA1MSB9LFxyXG4gICAgICAgIHsgaWQ6ICdXb21hbjEnLCBncm91cDogMiwgeDogLTQ1LjQxNzg0MzU4MjYzNDUwNCwgeTogLTM1LjE3NDEzMDg5NjIwNDc1IH0sXHJcbiAgICAgICAgeyBpZDogJ0p1ZGdlJywgZ3JvdXA6IDIsIHg6IDU4LjExMDQzMTI2OTY1Mjg2NCwgeTogLTQuODE0MzMwNDQ3MjExODAyIH0sXHJcbiAgICAgICAgeyBpZDogJ0NoYW1wbWF0aGlldScsIGdyb3VwOiAyLCB4OiAtNDAuMTc0ODc1OTI2Njk4NDksIHk6IDQzLjQyNzg2MzY4NTM2MTk4IH0sXHJcbiAgICAgICAgeyBpZDogJ0JyZXZldCcsIGdyb3VwOiAyLCB4OiAwLjI5MjY5NjYyOTgwNjcwNDksIHk6IC01OS45OTkyODYwNjgxMTAwMSB9LFxyXG4gICAgICAgIHsgaWQ6ICdDaGVuaWxkaWV1JywgZ3JvdXA6IDIsIHg6IDQwLjg2OTE3OTE4MDk0NDcsIHk6IDQ1LjA1MjMwNTA4MDYwNDIxIH0sXHJcbiAgICAgICAgeyBpZDogJ0NvY2hlcGFpbGxlJywgZ3JvdXA6IDIsIHg6IC02MS4zODEwODYwMzA2MzIzMDQsIHk6IC01LjY4ODc4NTI1Njk4NzE4NTUgfSxcclxuICAgICAgICB7IGlkOiAnUG9udG1lcmN5JywgZ3JvdXA6IDQsIHg6IDQ5Ljc0NTEyMTE5Mjk5NzE2LCB5OiAtMzcuNzU0NzczNDM5ODQ0OTk2IH0sXHJcbiAgICAgICAgeyBpZDogJ0JvdWxhdHJ1ZWxsZScsIGdyb3VwOiA2LCB4OiAtMTEuMzE5OTE1NzI4NzMxODYsIHk6IDYyLjIyNDI2NzgzNzM1MTEyIH0sXHJcbiAgICAgICAgeyBpZDogJ0Vwb25pbmUnLCBncm91cDogNCwgeDogLTM0LjEwMzM5Nzg3ODQxMTU2LCB5OiAtNTQuMTkzNzEwNDU3NDU3NjM0IH0sXHJcbiAgICAgICAgeyBpZDogJ0FuemVsbWEnLCBncm91cDogNCwgeDogNjIuNTAyNjcxNjQ5NTQyNTEsIHk6IDE3LjEyOTM5MTAxODY0MDI3MyB9LFxyXG4gICAgICAgIHsgaWQ6ICdXb21hbjInLCBncm91cDogNSwgeDogLTU4LjM0MDYzMjMwMTYwNDA0NiwgeTogMjkuOTM5NDQ5MjcwOTcwODA4IH0sXHJcbiAgICAgICAgeyBpZDogJ01vdGhlcklubm9jZW50JywgZ3JvdXA6IDAsIHg6IDIzLjA1ODI5MTE3MTA3MzY1LCB5OiAtNjIuMTk1NzgxMjczODkzMzggfSxcclxuICAgICAgICB7IGlkOiAnR3JpYmllcicsIGdyb3VwOiAwLCB4OiAyNS4yOTI3OTAxODEwMDg0MSwgeTogNjIuMTMxMTA5NDc3MTMyOTk1IH0sXHJcbiAgICAgICAgeyBpZDogJ0pvbmRyZXR0ZScsIGdyb3VwOiA3LCB4OiAtNjEuMjg4OTIyMTQwODY3MzQsIHk6IC0yOS4wNDU5NjM5Njc2NjE2OCB9LFxyXG4gICAgICAgIHsgaWQ6ICdNbWUuQnVyZ29uJywgZ3JvdXA6IDcsIHg6IDY1LjUxMzUwOTkwMTU5MzI0LCB5OiAtMjAuMTk4NTE1MzAxMjI1NTg0IH0sXHJcbiAgICAgICAgeyBpZDogJ0dhdnJvY2hlJywgZ3JvdXA6IDgsIHg6IC0zNS4wMzA1NDQzNDE2MzA0NzQsIHk6IDU5Ljc3MzQxMzUxNDExMjI4IH0sXHJcbiAgICAgICAgeyBpZDogJ0dpbGxlbm9ybWFuZCcsIGdyb3VwOiA1LCB4OiAtMTQuNjk2NjY2NTMwMDg0OTk1LCB5OiAtNjguNDM5ODEyOTIyNzY3OTggfSxcclxuICAgICAgICB7IGlkOiAnTWFnbm9uJywgZ3JvdXA6IDUsIHg6IDU3LjY0NjY3MjEyNDc4Njg5LCB5OiA0MC45NDk0OTU2MzcxNTQzIH0sXHJcbiAgICAgICAgeyBpZDogJ01sbGUuR2lsbGVub3JtYW5kJywgZ3JvdXA6IDUsIHg6IC03MC44NjYwNTM1NTQ0NjMyNiwgeTogOC44MzE4OTk3NzM4ODQ3MzIgfSxcclxuICAgICAgICB7IGlkOiAnTW1lLlBvbnRtZXJjeScsIGdyb3VwOiA1LCB4OiA0Ni43NDAxNjYyMjU5ODcxNywgeTogLTU0LjkxMjI2NTEyNTA4MDEwNCB9LFxyXG4gICAgICAgIHsgaWQ6ICdNbGxlLlZhdWJvaXMnLCBncm91cDogNSwgeDogMi42NTMxMDY2OTQ5ODU3OTQ0LCB5OiA3Mi43NTI3Mzg5NTA5NDk2MiB9LFxyXG4gICAgICAgIHsgaWQ6ICdMdC5HaWxsZW5vcm1hbmQnLCBncm91cDogNSwgeDogLTUxLjU3OTkxMDkwMjk5ODkzLCB5OiAtNTIuMzQwMzU1MjgzODQwOTEgfSxcclxuICAgICAgICB7IGlkOiAnTWFyaXVzJywgZ3JvdXA6IDgsIHg6IDc0LjA2NTIzMjAwNzUxNzQsIHk6IDMuNzg3MDA1MTA1OTY3Mjk5NiB9LFxyXG4gICAgICAgIHsgaWQ6ICdCYXJvbmVzc1QnLCBncm91cDogNSwgeDogLTU3LjY4ODg4MTc0ODgzNDksIHk6IDQ3LjY2NTQyNjkxMDU5MTUzNSB9LFxyXG4gICAgICAgIHsgaWQ6ICdNYWJldWYnLCBncm91cDogOCwgeDogMTAuNDMyMzY5NzA2MTA4OTYxLCB5OiAtNzQuNzc0MDk3NTM1OTQ1MyB9LFxyXG4gICAgICAgIHsgaWQ6ICdFbmpvbHJhcycsIGdyb3VwOiA4LCB4OiA0My4xOTA2MjQyMzg5NzUyNiwgeTogNjIuNzI2MTUwNjY5Nzc3NjIgfSxcclxuICAgICAgICB7IGlkOiAnQ29tYmVmZXJyZScsIGdyb3VwOiA4LCB4OiAtNzQuODU1NDA2OTkxNTMxNTEsIHk6IC0xNy4yMjQwNTQyMzA0MTIwNzIgfSxcclxuICAgICAgICB7IGlkOiAnUHJvdXZhaXJlJywgZ3JvdXA6IDgsIHg6IDY3LjM5NDcxMTMyNjc2OTgyLCB5OiAtMzguMTgzMTQ5MjMwNzk3NjUgfSxcclxuICAgICAgICB7IGlkOiAnRmV1aWxseScsIGdyb3VwOiA4LCB4OiAtMjQuMTAwNzc5NjY5NDMyNTU1LCB5OiA3NC4yOTA5OTgyMzg4NTQzOSB9LFxyXG4gICAgICAgIHsgaWQ6ICdDb3VyZmV5cmFjJywgZ3JvdXA6IDgsIHg6IC0zMi42NzYyNzI5NTY0MDM5MywgeTogLTcxLjYzOTgwMTY4NjQ4MjgxIH0sXHJcbiAgICAgICAgeyBpZDogJ0JhaG9yZWwnLCBncm91cDogOCwgeDogNzMuMDY4Njg3MzQ2NzA0ODUsIHk6IDMwLjk5OTQ2NjU5OTExMjU0NCB9LFxyXG4gICAgICAgIHsgaWQ6ICdCb3NzdWV0JywgZ3JvdXA6IDgsIHg6IC03NS40MDk4NzM5NTAwNzAxOSwgeTogMjYuNzA4NjI5ODk0MzcxNyB9LFxyXG4gICAgICAgIHsgaWQ6ICdKb2x5JywgZ3JvdXA6IDgsIHg6IDM3Ljg1NTgwMTA0NjcwNTE3NCwgeTogLTcxLjE4MjQyOTkwNDUyMjYgfSxcclxuICAgICAgICB7IGlkOiAnR3JhbnRhaXJlJywgZ3JvdXA6IDgsIHg6IDIwLjMyMzkwNzY0OTcyNzYsIHk6IDc4LjY1NzA5NjE2OTY3NCB9LFxyXG4gICAgICAgIHsgaWQ6ICdNb3RoZXJQbHV0YXJjaCcsIGdyb3VwOiA5LCB4OiAtNjguNjMyNDI5ODU2MjQ1OSwgeTogLTQ0LjYwNDgxNTU2OTkzMDIgfSxcclxuICAgICAgICB7IGlkOiAnR3VldWxlbWVyJywgZ3JvdXA6IDQsIHg6IDgxLjMzNzgyNTE1NDI1Mzg5LCB5OiAtMTMuNTcwNDkwMDEyMzc2OTU4IH0sXHJcbiAgICAgICAgeyBpZDogJ0JhYmV0JywgZ3JvdXA6IDQsIHg6IC01MS4xODE0ODA0NzY2NDA5OSwgeTogNjUuNDI1MTk0MzUzNjk4NDQgfSxcclxuICAgICAgICB7IGlkOiAnQ2xhcXVlc291cycsIGdyb3VwOiA0LCB4OiAtNi41MDEwNTYxMDIyMTA5MDIsIHk6IC04My40MTMwNDYxNTkxOTQ0NyB9LFxyXG4gICAgICAgIHsgaWQ6ICdNb250cGFybmFzc2UnLCBncm91cDogNCwgeDogNjEuNTczNTMzNjQwMDg3OTQsIHk6IDU3LjUyMTMwMDAxMjAyMTMgfSxcclxuICAgICAgICB7IGlkOiAnVG91c3NhaW50JywgZ3JvdXA6IDUsIHg6IC04NC44NDg3NzUxNTc3NjczOCwgeTogLTAuODI3ODYxMjM2MzQwOTEzOSB9LFxyXG4gICAgICAgIHsgaWQ6ICdDaGlsZDEnLCBncm91cDogMTAsIHg6IDYzLjU2MDkwODI4MTYyNTg3LCB5OiAtNTcuMDk2NTA1NDgzMzg5NjUgfSxcclxuICAgICAgICB7IGlkOiAnQ2hpbGQyJywgZ3JvdXA6IDEwLCB4OiAtOC4zNTYzNTQyNDEzMDQ3MjMsIHk6IDg1LjYxNjQxOTgyNTgzNjE2IH0sXHJcbiAgICAgICAgeyBpZDogJ0JydWpvbicsIGdyb3VwOiA0LCB4OiAtNTIuMDE5MzA0MTg3MjEyMTgsIHk6IC02OS4yMzg2NTk2NjI2MzU2NyB9LFxyXG4gICAgICAgIHsgaWQ6ICdNbWUuSHVjaGVsb3VwJywgZ3JvdXA6IDgsIHg6IDg1LjY5MzA5NTczMzE1NDU0LCB5OiAxNi4wMjE2NTIzMzg4OTQ4MyB9XHJcbiAgICBdLFxyXG5cclxuICAgIGxpbmtzOiBbXHJcbiAgICAgICAgeyBzb3VyY2U6ICdOYXBvbGVvbicsIHRhcmdldDogJ015cmllbCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbGxlLkJhcHRpc3RpbmUnLCB0YXJnZXQ6ICdNeXJpZWwnLCB2YWx1ZTogOCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLk1hZ2xvaXJlJywgdGFyZ2V0OiAnTXlyaWVsJywgdmFsdWU6IDEwIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuTWFnbG9pcmUnLCB0YXJnZXQ6ICdNbGxlLkJhcHRpc3RpbmUnLCB2YWx1ZTogNiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ291bnRlc3NkZUxvJywgdGFyZ2V0OiAnTXlyaWVsJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dlYm9yYW5kJywgdGFyZ2V0OiAnTXlyaWVsJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NoYW1wdGVyY2llcicsIHRhcmdldDogJ015cmllbCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDcmF2YXR0ZScsIHRhcmdldDogJ015cmllbCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3VudCcsIHRhcmdldDogJ015cmllbCcsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdPbGRNYW4nLCB0YXJnZXQ6ICdNeXJpZWwnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnVmFsamVhbicsIHRhcmdldDogJ0xhYmFycmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnVmFsamVhbicsIHRhcmdldDogJ01tZS5NYWdsb2lyZScsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdWYWxqZWFuJywgdGFyZ2V0OiAnTWxsZS5CYXB0aXN0aW5lJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1ZhbGplYW4nLCB0YXJnZXQ6ICdNeXJpZWwnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFyZ3Vlcml0ZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLmRlUicsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSXNhYmVhdScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR2VydmFpcycsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTGlzdG9saWVyJywgdGFyZ2V0OiAnVGhvbG9teWVzJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhbWV1aWwnLCB0YXJnZXQ6ICdUaG9sb215ZXMnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmFtZXVpbCcsIHRhcmdldDogJ0xpc3RvbGllcicsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCbGFjaGV2aWxsZScsIHRhcmdldDogJ1Rob2xvbXllcycsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCbGFjaGV2aWxsZScsIHRhcmdldDogJ0xpc3RvbGllcicsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCbGFjaGV2aWxsZScsIHRhcmdldDogJ0ZhbWV1aWwnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmF2b3VyaXRlJywgdGFyZ2V0OiAnVGhvbG9teWVzJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Zhdm91cml0ZScsIHRhcmdldDogJ0xpc3RvbGllcicsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYXZvdXJpdGUnLCB0YXJnZXQ6ICdGYW1ldWlsJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Zhdm91cml0ZScsIHRhcmdldDogJ0JsYWNoZXZpbGxlJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0RhaGxpYScsIHRhcmdldDogJ1Rob2xvbXllcycsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdEYWhsaWEnLCB0YXJnZXQ6ICdMaXN0b2xpZXInLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRGFobGlhJywgdGFyZ2V0OiAnRmFtZXVpbCcsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdEYWhsaWEnLCB0YXJnZXQ6ICdCbGFjaGV2aWxsZScsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdEYWhsaWEnLCB0YXJnZXQ6ICdGYXZvdXJpdGUnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnWmVwaGluZScsIHRhcmdldDogJ1Rob2xvbXllcycsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdaZXBoaW5lJywgdGFyZ2V0OiAnTGlzdG9saWVyJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1plcGhpbmUnLCB0YXJnZXQ6ICdGYW1ldWlsJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1plcGhpbmUnLCB0YXJnZXQ6ICdCbGFjaGV2aWxsZScsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdaZXBoaW5lJywgdGFyZ2V0OiAnRmF2b3VyaXRlJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1plcGhpbmUnLCB0YXJnZXQ6ICdEYWhsaWEnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmFudGluZScsIHRhcmdldDogJ1Rob2xvbXllcycsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYW50aW5lJywgdGFyZ2V0OiAnTGlzdG9saWVyJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhbnRpbmUnLCB0YXJnZXQ6ICdGYW1ldWlsJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhbnRpbmUnLCB0YXJnZXQ6ICdCbGFjaGV2aWxsZScsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYW50aW5lJywgdGFyZ2V0OiAnRmF2b3VyaXRlJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhbnRpbmUnLCB0YXJnZXQ6ICdEYWhsaWEnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmFudGluZScsIHRhcmdldDogJ1plcGhpbmUnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmFudGluZScsIHRhcmdldDogJ01hcmd1ZXJpdGUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmFudGluZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogOSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLlRoZW5hcmRpZXInLCB0YXJnZXQ6ICdGYW50aW5lJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5UaGVuYXJkaWVyJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiA3IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdUaGVuYXJkaWVyJywgdGFyZ2V0OiAnTW1lLlRoZW5hcmRpZXInLCB2YWx1ZTogMTMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1RoZW5hcmRpZXInLCB0YXJnZXQ6ICdGYW50aW5lJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1RoZW5hcmRpZXInLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3NldHRlJywgdGFyZ2V0OiAnTW1lLlRoZW5hcmRpZXInLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29zZXR0ZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMzEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Nvc2V0dGUnLCB0YXJnZXQ6ICdUaG9sb215ZXMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29zZXR0ZScsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSmF2ZXJ0JywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxNyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSmF2ZXJ0JywgdGFyZ2V0OiAnRmFudGluZScsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKYXZlcnQnLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0phdmVydCcsIHRhcmdldDogJ01tZS5UaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0phdmVydCcsIHRhcmdldDogJ0Nvc2V0dGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmF1Y2hlbGV2ZW50JywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiA4IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYXVjaGVsZXZlbnQnLCB0YXJnZXQ6ICdKYXZlcnQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFtYXRhYm9pcycsIHRhcmdldDogJ0ZhbnRpbmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFtYXRhYm9pcycsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYW1hdGFib2lzJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdQZXJwZXR1ZScsIHRhcmdldDogJ0ZhbnRpbmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnU2ltcGxpY2UnLCB0YXJnZXQ6ICdQZXJwZXR1ZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdTaW1wbGljZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnU2ltcGxpY2UnLCB0YXJnZXQ6ICdGYW50aW5lJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1NpbXBsaWNlJywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1NjYXVmZmxhaXJlJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdXb21hbjEnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1dvbWFuMScsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKdWRnZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSnVkZ2UnLCB0YXJnZXQ6ICdCYW1hdGFib2lzJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NoYW1wbWF0aGlldScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hhbXBtYXRoaWV1JywgdGFyZ2V0OiAnSnVkZ2UnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hhbXBtYXRoaWV1JywgdGFyZ2V0OiAnQmFtYXRhYm9pcycsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCcmV2ZXQnLCB0YXJnZXQ6ICdKdWRnZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCcmV2ZXQnLCB0YXJnZXQ6ICdDaGFtcG1hdGhpZXUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQnJldmV0JywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCcmV2ZXQnLCB0YXJnZXQ6ICdCYW1hdGFib2lzJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NoZW5pbGRpZXUnLCB0YXJnZXQ6ICdKdWRnZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDaGVuaWxkaWV1JywgdGFyZ2V0OiAnQ2hhbXBtYXRoaWV1JywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NoZW5pbGRpZXUnLCB0YXJnZXQ6ICdCcmV2ZXQnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hlbmlsZGlldScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hlbmlsZGlldScsIHRhcmdldDogJ0JhbWF0YWJvaXMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29jaGVwYWlsbGUnLCB0YXJnZXQ6ICdKdWRnZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb2NoZXBhaWxsZScsIHRhcmdldDogJ0NoYW1wbWF0aGlldScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb2NoZXBhaWxsZScsIHRhcmdldDogJ0JyZXZldCcsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb2NoZXBhaWxsZScsIHRhcmdldDogJ0NoZW5pbGRpZXUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29jaGVwYWlsbGUnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvY2hlcGFpbGxlJywgdGFyZ2V0OiAnQmFtYXRhYm9pcycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdQb250bWVyY3knLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JvdWxhdHJ1ZWxsZScsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRXBvbmluZScsIHRhcmdldDogJ01tZS5UaGVuYXJkaWVyJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Vwb25pbmUnLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0FuemVsbWEnLCB0YXJnZXQ6ICdFcG9uaW5lJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0FuemVsbWEnLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0FuemVsbWEnLCB0YXJnZXQ6ICdNbWUuVGhlbmFyZGllcicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdXb21hbjInLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1dvbWFuMicsIHRhcmdldDogJ0Nvc2V0dGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnV29tYW4yJywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01vdGhlcklubm9jZW50JywgdGFyZ2V0OiAnRmF1Y2hlbGV2ZW50JywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01vdGhlcklubm9jZW50JywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHcmliaWVyJywgdGFyZ2V0OiAnRmF1Y2hlbGV2ZW50JywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5CdXJnb24nLCB0YXJnZXQ6ICdKb25kcmV0dGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR2F2cm9jaGUnLCB0YXJnZXQ6ICdNbWUuQnVyZ29uJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dhdnJvY2hlJywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHYXZyb2NoZScsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHYXZyb2NoZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR2lsbGVub3JtYW5kJywgdGFyZ2V0OiAnQ29zZXR0ZScsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHaWxsZW5vcm1hbmQnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hZ25vbicsIHRhcmdldDogJ0dpbGxlbm9ybWFuZCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYWdub24nLCB0YXJnZXQ6ICdNbWUuVGhlbmFyZGllcicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbGxlLkdpbGxlbm9ybWFuZCcsIHRhcmdldDogJ0dpbGxlbm9ybWFuZCcsIHZhbHVlOiA5IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbGxlLkdpbGxlbm9ybWFuZCcsIHRhcmdldDogJ0Nvc2V0dGUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWxsZS5HaWxsZW5vcm1hbmQnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5Qb250bWVyY3knLCB0YXJnZXQ6ICdNbGxlLkdpbGxlbm9ybWFuZCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuUG9udG1lcmN5JywgdGFyZ2V0OiAnUG9udG1lcmN5JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01sbGUuVmF1Ym9pcycsIHRhcmdldDogJ01sbGUuR2lsbGVub3JtYW5kJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0x0LkdpbGxlbm9ybWFuZCcsIHRhcmdldDogJ01sbGUuR2lsbGVub3JtYW5kJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0x0LkdpbGxlbm9ybWFuZCcsIHRhcmdldDogJ0dpbGxlbm9ybWFuZCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdMdC5HaWxsZW5vcm1hbmQnLCB0YXJnZXQ6ICdDb3NldHRlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ01sbGUuR2lsbGVub3JtYW5kJywgdmFsdWU6IDYgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ0dpbGxlbm9ybWFuZCcsIHZhbHVlOiAxMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFyaXVzJywgdGFyZ2V0OiAnUG9udG1lcmN5JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ0x0LkdpbGxlbm9ybWFuZCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJpdXMnLCB0YXJnZXQ6ICdDb3NldHRlJywgdmFsdWU6IDIxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJpdXMnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDE5IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJpdXMnLCB0YXJnZXQ6ICdUaG9sb215ZXMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFyaXVzJywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJpdXMnLCB0YXJnZXQ6ICdFcG9uaW5lJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Jhcm9uZXNzVCcsIHRhcmdldDogJ0dpbGxlbm9ybWFuZCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYXJvbmVzc1QnLCB0YXJnZXQ6ICdNYXJpdXMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFiZXVmJywgdGFyZ2V0OiAnTWFyaXVzJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hYmV1ZicsIHRhcmdldDogJ0Vwb25pbmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFiZXVmJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRW5qb2xyYXMnLCB0YXJnZXQ6ICdNYXJpdXMnLCB2YWx1ZTogNyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRW5qb2xyYXMnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiA3IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdFbmpvbHJhcycsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdFbmpvbHJhcycsIHRhcmdldDogJ01hYmV1ZicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdFbmpvbHJhcycsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29tYmVmZXJyZScsIHRhcmdldDogJ0Vuam9scmFzJywgdmFsdWU6IDE1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb21iZWZlcnJlJywgdGFyZ2V0OiAnTWFyaXVzJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvbWJlZmVycmUnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb21iZWZlcnJlJywgdGFyZ2V0OiAnTWFiZXVmJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1Byb3V2YWlyZScsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1Byb3V2YWlyZScsIHRhcmdldDogJ0Vuam9scmFzJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1Byb3V2YWlyZScsIHRhcmdldDogJ0NvbWJlZmVycmUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmV1aWxseScsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZldWlsbHknLCB0YXJnZXQ6ICdFbmpvbHJhcycsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGZXVpbGx5JywgdGFyZ2V0OiAnUHJvdXZhaXJlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZldWlsbHknLCB0YXJnZXQ6ICdDb21iZWZlcnJlJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZldWlsbHknLCB0YXJnZXQ6ICdNYWJldWYnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmV1aWxseScsIHRhcmdldDogJ01hcml1cycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3VyZmV5cmFjJywgdGFyZ2V0OiAnTWFyaXVzJywgdmFsdWU6IDkgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvdXJmZXlyYWMnLCB0YXJnZXQ6ICdFbmpvbHJhcycsIHZhbHVlOiAxNyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ291cmZleXJhYycsIHRhcmdldDogJ0NvbWJlZmVycmUnLCB2YWx1ZTogMTMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvdXJmZXlyYWMnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiA3IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3VyZmV5cmFjJywgdGFyZ2V0OiAnTWFiZXVmJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvdXJmZXlyYWMnLCB0YXJnZXQ6ICdFcG9uaW5lJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvdXJmZXlyYWMnLCB0YXJnZXQ6ICdGZXVpbGx5JywgdmFsdWU6IDYgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvdXJmZXlyYWMnLCB0YXJnZXQ6ICdQcm91dmFpcmUnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFob3JlbCcsIHRhcmdldDogJ0NvbWJlZmVycmUnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFob3JlbCcsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhaG9yZWwnLCB0YXJnZXQ6ICdDb3VyZmV5cmFjJywgdmFsdWU6IDYgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhaG9yZWwnLCB0YXJnZXQ6ICdNYWJldWYnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFob3JlbCcsIHRhcmdldDogJ0Vuam9scmFzJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhaG9yZWwnLCB0YXJnZXQ6ICdGZXVpbGx5JywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhaG9yZWwnLCB0YXJnZXQ6ICdQcm91dmFpcmUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFob3JlbCcsIHRhcmdldDogJ01hcml1cycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCb3NzdWV0JywgdGFyZ2V0OiAnTWFyaXVzJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Jvc3N1ZXQnLCB0YXJnZXQ6ICdDb3VyZmV5cmFjJywgdmFsdWU6IDEyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCb3NzdWV0JywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQm9zc3VldCcsIHRhcmdldDogJ0JhaG9yZWwnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQm9zc3VldCcsIHRhcmdldDogJ0Vuam9scmFzJywgdmFsdWU6IDEwIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCb3NzdWV0JywgdGFyZ2V0OiAnRmV1aWxseScsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCb3NzdWV0JywgdGFyZ2V0OiAnUHJvdXZhaXJlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Jvc3N1ZXQnLCB0YXJnZXQ6ICdDb21iZWZlcnJlJywgdmFsdWU6IDkgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Jvc3N1ZXQnLCB0YXJnZXQ6ICdNYWJldWYnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQm9zc3VldCcsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSm9seScsIHRhcmdldDogJ0JhaG9yZWwnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSm9seScsIHRhcmdldDogJ0Jvc3N1ZXQnLCB2YWx1ZTogNyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSm9seScsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0pvbHknLCB0YXJnZXQ6ICdDb3VyZmV5cmFjJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0pvbHknLCB0YXJnZXQ6ICdFbmpvbHJhcycsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKb2x5JywgdGFyZ2V0OiAnRmV1aWxseScsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKb2x5JywgdGFyZ2V0OiAnUHJvdXZhaXJlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0pvbHknLCB0YXJnZXQ6ICdDb21iZWZlcnJlJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0pvbHknLCB0YXJnZXQ6ICdNYWJldWYnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSm9seScsIHRhcmdldDogJ01hcml1cycsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHcmFudGFpcmUnLCB0YXJnZXQ6ICdCb3NzdWV0JywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dyYW50YWlyZScsIHRhcmdldDogJ0Vuam9scmFzJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dyYW50YWlyZScsIHRhcmdldDogJ0NvbWJlZmVycmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3JhbnRhaXJlJywgdGFyZ2V0OiAnQ291cmZleXJhYycsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHcmFudGFpcmUnLCB0YXJnZXQ6ICdKb2x5JywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dyYW50YWlyZScsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dyYW50YWlyZScsIHRhcmdldDogJ0JhaG9yZWwnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3JhbnRhaXJlJywgdGFyZ2V0OiAnRmV1aWxseScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHcmFudGFpcmUnLCB0YXJnZXQ6ICdQcm91dmFpcmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW90aGVyUGx1dGFyY2gnLCB0YXJnZXQ6ICdNYWJldWYnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3VldWxlbWVyJywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHdWV1bGVtZXInLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0d1ZXVsZW1lcicsIHRhcmdldDogJ01tZS5UaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0d1ZXVsZW1lcicsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHdWV1bGVtZXInLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHdWV1bGVtZXInLCB0YXJnZXQ6ICdFcG9uaW5lJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhYmV0JywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWJldCcsIHRhcmdldDogJ0d1ZXVsZW1lcicsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWJldCcsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFiZXQnLCB0YXJnZXQ6ICdNbWUuVGhlbmFyZGllcicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWJldCcsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWJldCcsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhYmV0JywgdGFyZ2V0OiAnRXBvbmluZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDbGFxdWVzb3VzJywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDbGFxdWVzb3VzJywgdGFyZ2V0OiAnQmFiZXQnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2xhcXVlc291cycsIHRhcmdldDogJ0d1ZXVsZW1lcicsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDbGFxdWVzb3VzJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDbGFxdWVzb3VzJywgdGFyZ2V0OiAnTW1lLlRoZW5hcmRpZXInLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2xhcXVlc291cycsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDbGFxdWVzb3VzJywgdGFyZ2V0OiAnRXBvbmluZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDbGFxdWVzb3VzJywgdGFyZ2V0OiAnRW5qb2xyYXMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW9udHBhcm5hc3NlJywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01vbnRwYXJuYXNzZScsIHRhcmdldDogJ0JhYmV0JywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01vbnRwYXJuYXNzZScsIHRhcmdldDogJ0d1ZXVsZW1lcicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNb250cGFybmFzc2UnLCB0YXJnZXQ6ICdDbGFxdWVzb3VzJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01vbnRwYXJuYXNzZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW9udHBhcm5hc3NlJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW9udHBhcm5hc3NlJywgdGFyZ2V0OiAnRXBvbmluZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNb250cGFybmFzc2UnLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1RvdXNzYWludCcsIHRhcmdldDogJ0Nvc2V0dGUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnVG91c3NhaW50JywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1RvdXNzYWludCcsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hpbGQxJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hpbGQyJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hpbGQyJywgdGFyZ2V0OiAnQ2hpbGQxJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JydWpvbicsIHRhcmdldDogJ0JhYmV0JywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JydWpvbicsIHRhcmdldDogJ0d1ZXVsZW1lcicsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCcnVqb24nLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JydWpvbicsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JydWpvbicsIHRhcmdldDogJ0Vwb25pbmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQnJ1am9uJywgdGFyZ2V0OiAnQ2xhcXVlc291cycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCcnVqb24nLCB0YXJnZXQ6ICdNb250cGFybmFzc2UnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLkh1Y2hlbG91cCcsIHRhcmdldDogJ0Jvc3N1ZXQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLkh1Y2hlbG91cCcsIHRhcmdldDogJ0pvbHknLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLkh1Y2hlbG91cCcsIHRhcmdldDogJ0dyYW50YWlyZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuSHVjaGVsb3VwJywgdGFyZ2V0OiAnQmFob3JlbCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuSHVjaGVsb3VwJywgdGFyZ2V0OiAnQ291cmZleXJhYycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuSHVjaGVsb3VwJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLkh1Y2hlbG91cCcsIHRhcmdldDogJ0Vuam9scmFzJywgdmFsdWU6IDEgfVxyXG4gICAgXVxyXG59XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIEppYWNoZW5nIFBhbiA8amFja2llYW54aXNAZ21haWwuY29tPlxyXG4gKiBAZGVzY3JpcHRpb24gUHJvdmlkZSB0aGUgZW50cmFuY2Ugb2YgTmV0Vi5qcy5cclxuICogQGRlcGVuZGVuY2VzIGludGVyZmFjZXMudHMsIHV0aWxzL21hcDIuanMsIG5vZGUudHMsIGxpbmsudHNcclxuICovXHJcblxyXG5pbXBvcnQgKiBhcyBpbnRlcmZhY2VzIGZyb20gJy4vaW50ZXJmYWNlcydcclxuaW1wb3J0IE1hcDIgZnJvbSAnLi91dGlscy9tYXAyJ1xyXG5pbXBvcnQgTm9kZSBmcm9tICcuL25vZGUnXHJcbmltcG9ydCBMaW5rIGZyb20gJy4vbGluaydcclxuaW1wb3J0ICogYXMgZGVmYXVsdENvbmZpZ3MgZnJvbSAnLi9jb25maWdzJ1xyXG5pbXBvcnQgKiBhcyBkYXRhc2V0IGZyb20gJy4vZGF0YXNldCdcclxuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuL3JlbmRlcmVyJ1xyXG5pbXBvcnQgeyBJbnRlcmFjdGlvbk1hbmFnZXIgfSBmcm9tICcuL2ludGVyYWN0aW9uL2ludGVyYWN0aW9uJ1xyXG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzL3V0aWxzJ1xyXG5cclxuY2xhc3MgTmV0ViB7XHJcbiAgICBwdWJsaWMgVXRpbHMgPSBVdGlsc1xyXG5cclxuICAgIHB1YmxpYyAkX2lkMm5vZGUgPSBuZXcgTWFwKClcclxuICAgIHB1YmxpYyAkX2VuZHMybGluayA9IG5ldyBNYXAyKClcclxuICAgIHB1YmxpYyAkX2NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnRcclxuICAgIHB1YmxpYyAkX3JlbmRlcmVyOiBSZW5kZXJlclxyXG4gICAgcHVibGljICRfY29uZmlncyA9IGRlZmF1bHRDb25maWdzXHJcbiAgICBwdWJsaWMgJF9pbnRlcmFjdGlvbjogSW50ZXJhY3Rpb25NYW5hZ2VyXHJcblxyXG4gICAgcHJpdmF0ZSAkX2RhdGE6IGludGVyZmFjZXMuTm9kZUxpbmtEYXRhID0geyBub2RlczogW10sIGxpbmtzOiBbXSB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gY3JlYXRlIE5ldFYgb2JqZWN0LlxyXG4gICAgICogQHBhcmFtIGNvbmZpZ3MgY29uZmlndXJhdGlvbnMgb2YgTmV0ViwgbXVzdCBpbmNsdWRlIGEgYGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnRgIHRlcm1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZ3M6IGFueSkge1xyXG4gICAgICAgIGlmICghKCdjb250YWluZXInIGluIGNvbmZpZ3MpIHx8IGNvbmZpZ3MuY29udGFpbmVyLnRhZ05hbWUgIT09ICdESVYnKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdDb250YWluZXIgc2hvdWxkIGJlIHNwZWNpZmllZCBhcyBhIGRpdiBlbGVtZW50IScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuJF9jb250YWluZXIgPSBjb25maWdzLmNvbnRhaW5lclxyXG4gICAgICAgIC8vIG92ZXJyaWRlIGNvbmZpZ3NcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb25maWdzKSB7XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdjb250YWluZXInKSBjb250aW51ZSAvLyBOT1RFOiBleGNsdWRlIGNvbnRhaW5lciBpbiBjb25maWdzXHJcbiAgICAgICAgICAgIGlmIChjb25maWdzW2tleV0gPT09IE9iamVjdChjb25maWdzW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRfY29uZmlnc1trZXldID0geyAuLi50aGlzLiRfY29uZmlnc1trZXldLCAuLi5jb25maWdzW2tleV0gfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kX2NvbmZpZ3Nba2V5XSA9IGNvbmZpZ3Nba2V5XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSAvLyBUT0RPOiBjb25zaWRlciBub2RlIGVudmlyb21lbnQsIGRvY3VtZW50IG5vdCBkZWZpbmVkXHJcbiAgICAgICAgY29uc3QgcGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcclxuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSB0aGlzLiRfY29uZmlncy53aWR0aCArICdweCdcclxuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gdGhpcy4kX2NvbmZpZ3MuaGVpZ2h0ICsgJ3B4J1xyXG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgU3RyaW5nKHRoaXMuJF9jb25maWdzLndpZHRoICogcGl4ZWxSYXRpbykpXHJcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgU3RyaW5nKHRoaXMuJF9jb25maWdzLmhlaWdodCAqIHBpeGVsUmF0aW8pKVxyXG4gICAgICAgIHRoaXMuJF9jb250YWluZXIuYXBwZW5kQ2hpbGQoY2FudmFzKVxyXG5cclxuICAgICAgICB0aGlzLiRfcmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoe1xyXG4gICAgICAgICAgICBjYW52YXMsXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLiRfY29uZmlncy53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLiRfY29uZmlncy5oZWlnaHQsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy4kX2NvbmZpZ3MuYmFja2dyb3VuZENvbG9yXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy4kX2ludGVyYWN0aW9uID0gbmV3IEludGVyYWN0aW9uTWFuYWdlcih0aGlzKVxyXG4gICAgICAgIGlmICh0aGlzLiRfY29uZmlncy5lbmFibGVQYW5ab29tKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9pbnRlcmFjdGlvbi5pbml0Wm9vbSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiRfaW50ZXJhY3Rpb24uaW5pdENsaWNrKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBkYXRhIGdldHRlciBzZXR0ZXJcclxuICAgICAqIEBwYXJhbSBub2RlTGlua0RhdGE/IHRoZSBub2RlLWxpbmstZGF0YSBvZiBhIGdyYXBoLCBwcm92aWRlZD9zZXR0ZXI6Z2V0dGVyO1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGF0YShub2RlTGlua0RhdGE/OiBpbnRlcmZhY2VzLk5vZGVMaW5rRGF0YSkge1xyXG4gICAgICAgIGlmIChub2RlTGlua0RhdGEgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kX2RhdGFcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBkZWxldGUgb2xkIGRhdGFcclxuICAgICAgICAgICAgdGhpcy4kX2RhdGEgPSB7IC4uLnRoaXMuJF9kYXRhLCAuLi5ub2RlTGlua0RhdGEgfVxyXG4gICAgICAgICAgICB0aGlzLiRfaWQybm9kZSA9IG5ldyBNYXAoKVxyXG4gICAgICAgICAgICB0aGlzLiRfZW5kczJsaW5rID0gbmV3IE1hcDIoKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGROb2Rlcyh0aGlzLiRfZGF0YS5ub2RlcylcclxuICAgICAgICAgICAgdGhpcy5hZGRMaW5rcyh0aGlzLiRfZGF0YS5saW5rcylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gaW5pdGlhbGl6ZSBhbmQgYWRkIGEgbm9kZVxyXG4gICAgICogQHBhcmFtIG5vZGVEYXRhIHRoZSBkYXRhIG9mIGEgbm9kZSwgaW5jbHVkZSBpZCwgc3R5bGVzLi4uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGROb2RlKG5vZGVEYXRhOiBpbnRlcmZhY2VzLk5vZGVEYXRhKSB7XHJcbiAgICAgICAgbm9kZURhdGEuaWQgPSBub2RlRGF0YS5pZC50b1N0cmluZygpXHJcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5ldyBOb2RlKHRoaXMsIG5vZGVEYXRhKVxyXG4gICAgICAgIHJldHVybiBub2RlXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gaW5pdGlhbGl6ZSBhbmQgYWRkIGEgbGlua1xyXG4gICAgICogQHBhcmFtIGxpbmtEYXRhIHRoZSBkYXRhIG9mIGEgbGluaywgaW5jbHVkZSBzb3VyY2UsIHRhcmdldCwgYW5kIHN0eWxlcy4uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkTGluayhsaW5rRGF0YTogaW50ZXJmYWNlcy5MaW5rRGF0YSkge1xyXG4gICAgICAgIGxpbmtEYXRhLnNvdXJjZSA9IGxpbmtEYXRhLnNvdXJjZS50b1N0cmluZygpXHJcbiAgICAgICAgbGlua0RhdGEudGFyZ2V0ID0gbGlua0RhdGEudGFyZ2V0LnRvU3RyaW5nKClcclxuXHJcbiAgICAgICAgY29uc3QgbGluayA9IG5ldyBMaW5rKHRoaXMsIGxpbmtEYXRhKVxyXG4gICAgICAgIHJldHVybiBsaW5rXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gaW5pdGlhbGl6ZSBhbmQgYWRkIGFuIGFycmF5IG9mIG5vZGVzLlxyXG4gICAgICogQHBhcmFtIHtpbnRlcmZhY2VzLk5vZGVEYXRhW119IG5vZGVzRGF0YTogYSBkYXRhIGFycmF5IG9mIG5vZGVzIHRvYmUgYWRkZWRcclxuICAgICAqIEBtZW1iZXJvZiBOZXRWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGROb2Rlcyhub2Rlc0RhdGE6IGludGVyZmFjZXMuTm9kZURhdGFbXSkge1xyXG4gICAgICAgIG5vZGVzRGF0YS5mb3JFYWNoKChub2RlRGF0YSkgPT4gdGhpcy5hZGROb2RlKG5vZGVEYXRhKSlcclxuICAgICAgICB0aGlzLiRfcmVuZGVyZXIuYWRkTm9kZXMoWy4uLnRoaXMuJF9pZDJub2RlLnZhbHVlcygpXSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBpbml0aWFsaXplIGFuZCBhZGQgYW4gYXJyYXkgb2YgbGlua3MuXHJcbiAgICAgKiBAcGFyYW0ge2ludGVyZmFjZXMuTGlua0RhdGFbXX0gbGlua3NEYXRhOiBhIGRhdGEgYXJyYXkgb2YgbGlua3MgdG9iZSBhZGRlZFxyXG4gICAgICogQG1lbWJlcm9mIE5ldFZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZExpbmtzKGxpbmtzRGF0YTogaW50ZXJmYWNlcy5MaW5rRGF0YVtdKSB7XHJcbiAgICAgICAgbGlua3NEYXRhLmZvckVhY2goKGxpbmtEYXRhKSA9PiB0aGlzLmFkZExpbmsobGlua0RhdGEpKVxyXG4gICAgICAgIHRoaXMuJF9yZW5kZXJlci5hZGRMaW5rcyhbLi4udGhpcy4kX2VuZHMybGluay52YWx1ZXMoKV0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gZ2V0IGEgTm9kZSBvYmplY3QgZnJvbSB0aGUgaWQybm9kZSBNYXAgZGF0YSBzdHJ1Y3R1cmVcclxuICAgICAqIEBwYXJhbSBpZCBub2RlIGlkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXROb2RlQnlJZChpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9pZDJub2RlLmdldChpZClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBnZXQgYSBMaW5rIG9iamVjdCBmcm9tIHRoZSBlbmRzMmxpbmsgTWFwMiBkYXRhIHN0cnVjdHVyZVxyXG4gICAgICogQHBhcmFtIGVuZElkMSBvbmUgZW5kIGlkIG9mIHRoZSBsaW5rIChzb3VyY2Ugb3IgdGFyZ2V0KVxyXG4gICAgICogQHBhcmFtIGVuZElkMiBhbm90aGVyIGVuZCBpZCBvZiB0aGUgbGluayAoc291cmNlIG9yIHRhcmdldClcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldExpbmtCeUVuZHMoZW5kSWQxOiBzdHJpbmcsIGVuZElkMjogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9lbmRzMmxpbmsuZ2V0KFtlbmRJZDEsIGVuZElkMl0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gd2lwZSBhbGwgdGhlIGRhdGEgaW4gdGhlIGluc3RhbmNlXHJcbiAgICAgKiBAbWVtYmVyb2YgTmV0VlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgd2lwZSgpIHtcclxuICAgICAgICB0aGlzLiRfZGF0YSA9IHVuZGVmaW5lZFxyXG4gICAgICAgIHRoaXMuJF9pZDJub2RlID0gbmV3IE1hcCgpXHJcbiAgICAgICAgdGhpcy4kX2VuZHMybGluayA9IG5ldyBNYXAyKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiByZXR1cm4gYnVpbGQtaW4gZGF0YXNldCBhY2NvcmRpbmcgdG8gbmFtZVxyXG4gICAgICogQHBhcmFtIG5hbWUgZGF0YXNldCBuYW1lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkRGF0YXNldChuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAobmFtZSBpbiBkYXRhc2V0KSByZXR1cm4gZGF0YXNldFtuYW1lXVxyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKGBOZXRWIGRvZXMgbm90IGhhdmUgYnVpbGQtaW4gZGF0YXNldDogJHtuYW1lfWApXHJcbiAgICAgICAgcmV0dXJuIHsgbm9kZXM6IFtdLCBsaW5rczogW10gfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2l2ZW4gcG9zaXRpb24sIHJldHVybiBlbGVtZW50IG9uIHRoaXMgcGl4ZWwgaWYgZXhpc3RzXHJcbiAgICAgKiBAcGFyYW0geCB4IHBvc1xyXG4gICAgICogQHBhcmFtIHkgeSBwb3NcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEVsZW1lbnRCeVBvc2l0aW9uKFxyXG4gICAgICAgIHg6IG51bWJlcixcclxuICAgICAgICB5OiBudW1iZXJcclxuICAgICk6IHsgdHlwZTogJ25vZGUnIHwgJ2xpbmsnOyBlbGVtZW50OiBOb2RlIHwgTGluayB9IHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBjb25zdCBpZCA9IHRoaXMuJF9yZW5kZXJlci5nZXRJZEJ5UG9zaXRpb24oeCwgeSlcclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGVCeUlkKGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9kZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogbm9kZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGlkKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGluayA9IHRoaXMuZ2V0TGlua0J5RW5kcyhpZFswXSwgaWRbMV0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5rJyxcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBsaW5rXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gZHJhdyBlbGVtZW50c1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZHJhdygpIHtcclxuICAgICAgICB0aGlzLiRfcmVuZGVyZXIuZHJhdygpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IE5ldFYgfVxyXG4iLCIvKipcclxuICogQGF1dGhvciBYaWFvZG9uZyBaaGFvIDx6aGFveGlhb2RvbmdAemp1LmVkdS5jbj5cclxuICogQGRlc2NyaXB0aW9uIGhhbmRsZSBhbGwgaW50ZXJhY3Rpb24gaW4gTmV0VlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE5ldFYgfSBmcm9tICdzcmMnXHJcblxyXG5leHBvcnQgY2xhc3MgSW50ZXJhY3Rpb25NYW5hZ2VyIHtcclxuICAgIHByaXZhdGUgbmV0djogTmV0VlxyXG4gICAgcHJpdmF0ZSB0cmFuc2Zvcm0gPSB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwLFxyXG4gICAgICAgIGs6IDFcclxuICAgIH1cclxuICAgIHByaXZhdGUgaXNEcmFnZ2luZyA9IGZhbHNlXHJcbiAgICBwcml2YXRlIGRyYWdTdGFydFBvczoge1xyXG4gICAgICAgIHg6IG51bWJlclxyXG4gICAgICAgIHk6IG51bWJlclxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkcmFnU3RhcnRUcmFuc2Zvcm06IHtcclxuICAgICAgICB4OiBudW1iZXJcclxuICAgICAgICB5OiBudW1iZXJcclxuICAgICAgICBrOiBudW1iZXJcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IobmV0djogTmV0Vikge1xyXG4gICAgICAgIHRoaXMubmV0diA9IG5ldHZcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGluaXQgem9vbSZwYW4gaW50ZXJhY3Rpb25cclxuICAgICAqIGN1cnJlbnRseSBubyBjYWxsYmFja1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdFpvb20oKSB7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5uZXR2LiRfY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpXHJcbiAgICAgICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKGV2dDogTW91c2VXaGVlbEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBldnQub2Zmc2V0WCB8fCBldnQucGFnZVggLSBjYW52YXMub2Zmc2V0TGVmdFxyXG4gICAgICAgICAgICBjb25zdCB5ID0gZXZ0Lm9mZnNldFkgfHwgZXZ0LnBhZ2VZIC0gY2FudmFzLm9mZnNldFRvcFxyXG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9IGV2dC5kZWx0YVkgPyBldnQuZGVsdGFZIC8gNDAgOiBldnQuZGV0YWlsID8gLWV2dC5kZXRhaWwgOiAwXHJcbiAgICAgICAgICAgIGlmIChkZWx0YSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgayA9IE1hdGgucG93KDEuMSwgZGVsdGEpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS54ID0gKDEgLSBrKSAqIHggKyBrICogdGhpcy50cmFuc2Zvcm0ueFxyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0ueSA9ICgxIC0gaykgKiB5ICsgayAqIHRoaXMudHJhbnNmb3JtLnlcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5rICo9IGtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ldHYuJF9yZW5kZXJlci5zZXRUcmFuc2Zvcm0odGhpcy50cmFuc2Zvcm0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ldHYuZHJhdygpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUT0RPOiBtYXliZSBjYW4gaGFuZGxlIG9uIGRpdiBpbnN0ZWFkIG9mIGNhbnZhc1xyXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIGhhbmRsZVNjcm9sbCwgZmFsc2UpXHJcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCBoYW5kbGVTY3JvbGwsIGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0dXAgY2xpY2sgdXRpbGl0eVxyXG4gICAgICovXHJcbiAgICAvLyBUT0RPOiBuZWVkIHJlbmFtZVxyXG4gICAgcHVibGljIGluaXRDbGljaygpIHtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSB0aGlzLm5ldHYuJF9jb250YWluZXIucXVlcnlTZWxlY3RvcignY2FudmFzJylcclxuICAgICAgICBjb25zdCBoYW5kbGVNb3VzZURvd24gPSAoZXZ0OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBldnQub2Zmc2V0WCB8fCBldnQucGFnZVggLSBjYW52YXMub2Zmc2V0TGVmdFxyXG4gICAgICAgICAgICBjb25zdCB5ID0gZXZ0Lm9mZnNldFkgfHwgZXZ0LnBhZ2VZIC0gY2FudmFzLm9mZnNldFRvcFxyXG4gICAgICAgICAgICBjb25zdCB5SW52ID0gdGhpcy5uZXR2LiRfY29uZmlncy5oZWlnaHQgLSB5XHJcblxyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5uZXR2LmdldEVsZW1lbnRCeVBvc2l0aW9uKHgsIHlJbnYpXHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmVsZW1lbnQuJF9jbGlja0NhbGxiYWNrKGVsZW1lbnQuZWxlbWVudCBhcyBhbnkpIC8vIFRPRE86IG5vdCBlbGVnYW50XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdTdGFydFBvcyA9IHsgeCwgeSB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdTdGFydFRyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy50cmFuc2Zvcm0pKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZXZ0OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0RyYWdnaW5nKSByZXR1cm5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBldnQub2Zmc2V0WCB8fCBldnQucGFnZVggLSBjYW52YXMub2Zmc2V0TGVmdFxyXG4gICAgICAgICAgICBjb25zdCB5ID0gZXZ0Lm9mZnNldFkgfHwgZXZ0LnBhZ2VZIC0gY2FudmFzLm9mZnNldFRvcFxyXG5cclxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0ueCA9IHRoaXMuZHJhZ1N0YXJ0VHJhbnNmb3JtLnggKyB4IC0gdGhpcy5kcmFnU3RhcnRQb3MueFxyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS55ID0gdGhpcy5kcmFnU3RhcnRUcmFuc2Zvcm0ueSArIHkgLSB0aGlzLmRyYWdTdGFydFBvcy55XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5ldHYuJF9yZW5kZXJlci5zZXRUcmFuc2Zvcm0odGhpcy50cmFuc2Zvcm0pXHJcbiAgICAgICAgICAgIHRoaXMubmV0di5kcmF3KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZU1vdXNlVXAgPSAoZXZ0OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVNb3VzZURvd24pXHJcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSlcclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZU1vdXNlVXApXHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgSmlhY2hlbmcgUGFuIDxqYWNraWVhbnhpc0BnbWFpbC5jb20+XHJcbiAqIEBkZXNjcmlwdGlvbiBQcm92aWRlIGEgTGluayBjbGFzcy5cclxuICogQGRlcGVuZGVuY2VzIGludGVyZmFjZXMudHMsIHV0aWxzL2lzLnRzXHJcbiAqL1xyXG5cclxuaW1wb3J0IE5vZGUgZnJvbSAnLi9ub2RlJ1xyXG5pbXBvcnQgKiBhcyBpbnRlcmZhY2VzIGZyb20gJy4vaW50ZXJmYWNlcydcclxuaW1wb3J0IHsgTmV0ViB9IGZyb20gJy4vaW5kZXgnXHJcbmltcG9ydCAqIGFzIGNvbmZpZ3MgZnJvbSAnLi9jb25maWdzJ1xyXG5cclxuY2xhc3MgTGluayB7XHJcbiAgICBwdWJsaWMgJF9jbGlja0NhbGxiYWNrID0gY29uZmlncy5saW5rLmNsaWNrQ2FsbGJhY2tcclxuXHJcbiAgICBwcml2YXRlICRfY29yZTogTmV0VlxyXG4gICAgcHJpdmF0ZSAkX3NvdXJjZTogTm9kZVxyXG4gICAgcHJpdmF0ZSAkX3RhcmdldDogTm9kZVxyXG4gICAgcHJpdmF0ZSAkX3N0cm9rZVdpZHRoID0gY29uZmlncy5saW5rLnN0cm9rZVdpZHRoXHJcbiAgICBwcml2YXRlICRfc3Ryb2tlQ29sb3IgPSBjb25maWdzLmxpbmsuc3Ryb2tlQ29sb3JcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoY29yZSwgbGlua0RhdGE6IGludGVyZmFjZXMuTGlua0RhdGEpIHtcclxuICAgICAgICB0aGlzLiRfY29yZSA9IGNvcmVcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICAuLi57XHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogdGhpcy4kX3N0cm9rZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IHRoaXMuJF9zdHJva2VDb2xvcixcclxuICAgICAgICAgICAgICAgIGNsaWNrQ2FsbGJhY2s6IHRoaXMuJF9jbGlja0NhbGxiYWNrXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC4uLmxpbmtEYXRhXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNvdXJjZVRhcmdldChkYXRhKVxyXG5cclxuICAgICAgICB0aGlzLnN0cm9rZVdpZHRoKGRhdGEuc3Ryb2tlV2lkdGgpXHJcbiAgICAgICAgdGhpcy5zdHJva2VDb2xvcihkYXRhLnN0cm9rZUNvbG9yKVxyXG5cclxuICAgICAgICB0aGlzLnNldENsaWNrQ2FsbGJhY2soZGF0YS5jbGlja0NhbGxiYWNrKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0dGVyL3NldHRlciBvZiB0aGUgc291cmNlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW25vZGVJZF1cclxuICAgICAqIEByZXR1cm5zIHtOb2RlfSBhIHNvdXJjZSBOb2RlIE9iamVjdFxyXG4gICAgICogQG1lbWJlcm9mIExpbmtcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNvdXJjZShub2RlSWQ/OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAvLyBzZXR0ZXJcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VUYXJnZXQoe1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiBub2RlSWQsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMuJF90YXJnZXQuaWQoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy4kX3NvdXJjZVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0dGVyL3NldHRlciBvZiB0aGUgdGFyZ2V0XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW25vZGVJZF1cclxuICAgICAqIEByZXR1cm5zIHtOb2RlfSBhIHRhcmdldCBOb2RlIE9iamVjdFxyXG4gICAgICogQG1lbWJlcm9mIExpbmtcclxuICAgICAqL1xyXG4gICAgcHVibGljIHRhcmdldChub2RlSWQ/OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAvLyBzZXR0ZXJcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VUYXJnZXQoe1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiB0aGlzLiRfc291cmNlLmlkKCksXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IG5vZGVJZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy4kX3RhcmdldFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0dGVyL3NldHRlciBvZiBzb3VyY2UgYW5kIHRhcmdldFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7aW50ZXJmYWNlcy5MaW5rRGF0YX0gW2xpbmtEYXRhXVxyXG4gICAgICogQHJldHVybnMgT2JqZWN0IHtzb3VyY2U6IE5vZGUsIHRhcmdldDogTm9kZX1cclxuICAgICAqIEBtZW1iZXJvZiBMaW5rXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzb3VyY2VUYXJnZXQobGlua0RhdGE/OiBpbnRlcmZhY2VzLkxpbmtEYXRhKSB7XHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxpbmtEYXRhLnNvdXJjZSA9IGxpbmtEYXRhLnNvdXJjZS50b1N0cmluZygpXHJcbiAgICAgICAgICAgIGxpbmtEYXRhLnRhcmdldCA9IGxpbmtEYXRhLnRhcmdldC50b1N0cmluZygpXHJcbiAgICAgICAgICAgIGNvbnN0IG9sZFNvdXJjZTogTm9kZSA9IHRoaXMuJF9zb3VyY2VcclxuICAgICAgICAgICAgY29uc3Qgb2xkVGFyZ2V0OiBOb2RlID0gdGhpcy4kX3RhcmdldFxyXG4gICAgICAgICAgICBjb25zdCBuZXdTb3VyY2UgPSB0aGlzLiRfY29yZS4kX2lkMm5vZGUuZ2V0KGxpbmtEYXRhLnNvdXJjZSlcclxuICAgICAgICAgICAgY29uc3QgbmV3VGFyZ2V0ID0gdGhpcy4kX2NvcmUuJF9pZDJub2RlLmdldChsaW5rRGF0YS50YXJnZXQpXHJcblxyXG4gICAgICAgICAgICBpZiAobmV3U291cmNlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGVycm9yOiB1bmRlZmluZWQgc291cmNlXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYElucHV0IHNvdXJjZSAoJHtsaW5rRGF0YS5zb3VyY2V9KSBkb2VzIG5vdCBleGlzdC5gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChuZXdTb3VyY2UgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gZXJyb3I6IHVuZGVmaW5lZCB0YXJnZXRcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW5wdXQgdGFyZ2V0ICgke2xpbmtEYXRhLnRhcmdldH0pIGRvZXMgbm90IGV4aXN0LmApXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChuZXdTb3VyY2UgPT09IG5ld1RhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgLy8gZXJyb3I6IHNlbGYgbG9vcFxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgICAgIGBTZWxmIGxvb3AgKCR7bGlua0RhdGEuc291cmNlfSA8PT4gJHtsaW5rRGF0YS50YXJnZXR9KSBpcyBub3QgYWxsb3dlZC5gXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRfY29yZS4kX2VuZHMybGluay5oYXMoW2xpbmtEYXRhLnNvdXJjZSwgbGlua0RhdGEudGFyZ2V0XSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGVycm9yOiBtdWx0aXBsZSBsaW5rXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgYE11bHRpcGxlIGxpbmsgKCR7bGlua0RhdGEuc291cmNlfSA8PT4gJHtsaW5rRGF0YS50YXJnZXR9KSBpcyBub3QgYWxsb3dkLmBcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG9sZFNvdXJjZSAmJiBvbGRUYXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSBvbGQgTWFwXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRfY29yZS4kX2VuZHMybGluay5kZWxldGUoW29sZFNvdXJjZS5pZCgpLCBvbGRUYXJnZXQuaWQoKV0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuJF9zb3VyY2UgPSBuZXdTb3VyY2VcclxuICAgICAgICAgICAgdGhpcy4kX3RhcmdldCA9IG5ld1RhcmdldFxyXG4gICAgICAgICAgICB0aGlzLiRfY29yZS4kX2VuZHMybGluay5zZXQoW2xpbmtEYXRhLnNvdXJjZSwgbGlua0RhdGEudGFyZ2V0XSwgdGhpcylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc291cmNlOiB0aGlzLiRfc291cmNlLFxyXG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXMuJF90YXJnZXRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQvZ2V0IHN0cm9rZSB3aWR0aCBvZiBhIG5vZGVcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbdmFsdWVdXHJcbiAgICAgKiBAbWVtYmVyb2YgTm9kZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3Ryb2tlV2lkdGgodmFsdWU/OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLiRfc3Ryb2tlV2lkdGggPSB2YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy4kX3N0cm9rZVdpZHRoXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQvZ2V0IHN0cm9rZSBjb2xvciBvZiBhIG5vZGVcclxuICAgICAqIEBwYXJhbSB7Q29sb3J9IFt2YWx1ZV1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0cm9rZUNvbG9yKHZhbHVlPzogaW50ZXJmYWNlcy5Db2xvcikge1xyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9zdHJva2VDb2xvciA9IHZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfc3Ryb2tlQ29sb3JcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldCBjbGljayBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIGNsaWNrIGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc2V0Q2xpY2tDYWxsYmFjayhjYWxsYmFjazogKGxpbms6IExpbmspID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLiRfY2xpY2tDYWxsYmFjayA9IGNhbGxiYWNrXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgSmlhY2hlbmcgUGFuIDxqYWNraWVhbnhpc0BnbWFpbC5jb20+XHJcbiAqIEBkZXNjcmlwdGlvbiBQcm92aWRlIGEgTm9kZSBjbGFzcy5cclxuICogQGRlcGVuZGVuY2VzIGludGVyZmFjZXMudHMsIHV0aWxzL2lzLnRzXHJcbiAqL1xyXG5cclxuaW1wb3J0ICogYXMgaW50ZXJmYWNlcyBmcm9tICcuL2ludGVyZmFjZXMnXHJcbmltcG9ydCB7IGlzVmFsaWRJZCB9IGZyb20gJy4vdXRpbHMvaXMnXHJcbmltcG9ydCB7IE5ldFYgfSBmcm9tICcuL2luZGV4J1xyXG5pbXBvcnQgKiBhcyBjb25maWdzIGZyb20gJy4vY29uZmlncydcclxuXHJcbmNsYXNzIE5vZGUge1xyXG4gICAgcHVibGljICRfY2xpY2tDYWxsYmFjayA9IGNvbmZpZ3Mubm9kZS5jbGlja0NhbGxiYWNrXHJcblxyXG4gICAgcHJpdmF0ZSAkX2NvcmU6IE5ldFZcclxuICAgIHByaXZhdGUgJF9pZDogc3RyaW5nXHJcbiAgICBwcml2YXRlICRfcG9zaXRpb24gPSB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICB9XHJcbiAgICBwcml2YXRlICRfc3Ryb2tlV2lkdGggPSBjb25maWdzLm5vZGUuc3Ryb2tlV2lkdGhcclxuICAgIHByaXZhdGUgJF9zdHJva2VDb2xvciA9IGNvbmZpZ3Mubm9kZS5zdHJva2VDb2xvclxyXG4gICAgcHJpdmF0ZSAkX2ZpbGwgPSBjb25maWdzLm5vZGUuZmlsbFxyXG4gICAgcHJpdmF0ZSAkX3IgPSBjb25maWdzLm5vZGUuclxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb3JlLCBub2RlRGF0YTogaW50ZXJmYWNlcy5Ob2RlRGF0YSkge1xyXG4gICAgICAgIHRoaXMuJF9jb3JlID0gY29yZVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIC4uLntcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMuJF9wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgeTogdGhpcy4kX3Bvc2l0aW9uLnksXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogdGhpcy4kX3N0cm9rZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IHRoaXMuJF9zdHJva2VDb2xvcixcclxuICAgICAgICAgICAgICAgIHI6IHRoaXMuJF9yLFxyXG4gICAgICAgICAgICAgICAgZmlsbDogdGhpcy4kX2ZpbGwsXHJcbiAgICAgICAgICAgICAgICBjbGlja0NhbGxiYWNrOiB0aGlzLiRfY2xpY2tDYWxsYmFja1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAuLi5ub2RlRGF0YVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kX3NldElkKGRhdGEuaWQpXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbihkYXRhLngsIGRhdGEueSlcclxuICAgICAgICB0aGlzLnN0cm9rZVdpZHRoKGRhdGEuc3Ryb2tlV2lkdGgpXHJcbiAgICAgICAgdGhpcy5zdHJva2VDb2xvcihkYXRhLnN0cm9rZUNvbG9yKVxyXG4gICAgICAgIHRoaXMuZmlsbChkYXRhLmZpbGwpXHJcbiAgICAgICAgdGhpcy5yKGRhdGEucilcclxuICAgICAgICB0aGlzLnNldENsaWNrQ2FsbGJhY2soZGF0YS5jbGlja0NhbGxiYWNrKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0dGVyIG9mIHByaXZhdGUgcHJvcGVydHkgJF9pZFxyXG4gICAgICogQG1lbWJlcm9mIE5vZGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRfaWRcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldC9nZXQgeCBwb3N0aW9uXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3ZhbHVlXVxyXG4gICAgICogQG1lbWJlcm9mIE5vZGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHgodmFsdWU/OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLiRfcG9zaXRpb24ueCA9IHZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfcG9zaXRpb24ueFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0L2dldCB5IHBvc3Rpb25cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbdmFsdWVdXHJcbiAgICAgKiBAbWVtYmVyb2YgTm9kZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgeSh2YWx1ZT86IG51bWJlcikge1xyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9wb3NpdGlvbi55ID0gdmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9wb3NpdGlvbi55XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQvZ2V0IHBvc3Rpb25cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbdmFsdWVdXHJcbiAgICAgKiBAbWVtYmVyb2YgTm9kZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcG9zaXRpb24oeD86IG51bWJlciwgeT86IG51bWJlcikge1xyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9wb3NpdGlvbi54ID0geFxyXG4gICAgICAgICAgICB0aGlzLiRfcG9zaXRpb24ueSA9IHlcclxuICAgICAgICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggIT09IDAgJiYgYXJndW1lbnRzLmxlbmd0aCAhPT0gMikge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgTm9kZS5wb3NpdGlvbigpIG1ldGhvZCBjYW4gbm90IGRlYWwgd2l0aCAke2FyZ3VtZW50cy5sZW5ndGh9IHBhcmFtZXRlcnMuYClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9wb3NpdGlvblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0L2dldCBzdHJva2Ugd2lkdGggb2YgYSBub2RlXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3ZhbHVlXVxyXG4gICAgICogQG1lbWJlcm9mIE5vZGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0cm9rZVdpZHRoKHZhbHVlPzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy4kX3N0cm9rZVdpZHRoID0gdmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9zdHJva2VXaWR0aFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0L2dldCBzdHJva2UgY29sb3Igb2YgYSBub2RlXHJcbiAgICAgKiBAcGFyYW0ge0NvbG9yfSBbdmFsdWVdXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdHJva2VDb2xvcih2YWx1ZT86IGludGVyZmFjZXMuQ29sb3IpIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLiRfc3Ryb2tlQ29sb3IgPSB2YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy4kX3N0cm9rZUNvbG9yXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQvZ2V0IGZpbGwgY29sb3Igb2YgYSBub2RlXHJcbiAgICAgKiBAcGFyYW0ge0NvbG9yfSBbdmFsdWVdXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBmaWxsKHZhbHVlPzogaW50ZXJmYWNlcy5Db2xvcikge1xyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9maWxsID0gdmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9maWxsXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQvZ2V0IHJhZGl1cyBvZiBhIG5vZGVcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbcl1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHIodmFsdWU/OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLiRfciA9IHZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfclxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0IHRoZSBpZCBvZiB0aGlzIG5vZGUuXHJcbiAgICAgKiBpdCBpcyBvbmx5IHVzZWQgZm9yIGNvbnN0cnVjdG9yXHJcbiAgICAgKiBiZWNhdXNlIGEgbm9kZSdzIGlkIGlzIG5vdCBhbGxvd2VkIHRvIGJlIGNoYW5nZWQuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXHJcbiAgICAgKiBAcmV0dXJucyBub3RoaW5nXHJcbiAgICAgKiBAbWVtYmVyb2YgTm9kZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlICRfc2V0SWQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChpc1ZhbGlkSWQodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRfY29yZS4kX2lkMm5vZGUuaGFzKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEdXBsaWNhdGUgbm9kZSAoJHt2YWx1ZX0pIGlzIG5vdCBhbGxvd2VkLmApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzVmFsaWRJZCh0aGlzLiRfaWQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3QgY2hhbmdlIHRoZSBpZCBvZiBhbiBleGlzdCBub2RlLicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9pZDJub2RlLnNldCh2YWx1ZSwgdGhpcylcclxuICAgICAgICAgICAgdGhpcy4kX2lkID0gdmFsdWVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgSUQgJHt2YWx1ZX1gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldCBjbGljayBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIGNsaWNrIGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc2V0Q2xpY2tDYWxsYmFjayhjYWxsYmFjazogKG5vZGU6IE5vZGUpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLiRfY2xpY2tDYWxsYmFjayA9IGNhbGxiYWNrXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vZGVcclxuIiwiZXhwb3J0IGRlZmF1bHQgXCIjdmVyc2lvbiAzMDAgZXNcXHJcXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxyXFxuaW4gdmVjNCBjb2xvcjtcXHJcXG5cXHJcXG5vdXQgdmVjNCBmcmFnbWVudENvbG9yO1xcclxcblxcclxcbnZvaWQgbWFpbih2b2lkKSB7XFxyXFxuICAgIGZyYWdtZW50Q29sb3IgPSB2ZWM0KGNvbG9yLnJnYiAqIGNvbG9yLmEsIGNvbG9yLmEpO1xcclxcbn1cIjsiLCJleHBvcnQgZGVmYXVsdCBcIiN2ZXJzaW9uIDMwMCBlc1xcclxcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcXHJcXG5pbiB2ZWM0IGNvbG9yO1xcclxcblxcclxcbmluIHZlYzQgaWQ7XFxyXFxuXFxyXFxuLy8gVE9ETzogYWxsIGlkIHJlbGF0ZWQgc2hhZGVyIG5lZWQgY2xlYW4gdXBcXHJcXG5vdXQgdmVjNCBmcmFnbWVudENvbG9yO1xcclxcblxcclxcbnZvaWQgbWFpbih2b2lkKSB7XFxyXFxuICAgIGZyYWdtZW50Q29sb3IgPSBpZDtcXHJcXG59XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIjdmVyc2lvbiAzMDAgZXNcXHJcXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxyXFxuaW4gdmVjMyBpblZlcnRleFBvcztcXHJcXG5pbiB2ZWMyIGluU291cmNlUG9zaXRpb247XFxyXFxuaW4gdmVjMiBpblRhcmdldFBvc2l0aW9uO1xcclxcbmluIGZsb2F0IGluU3Ryb2tlV2lkdGg7XFxyXFxuaW4gdmVjNCBpblN0cm9rZUNvbG9yO1xcclxcblxcclxcbmluIHZlYzQgaW5JZDtcXHJcXG5cXHJcXG5vdXQgdmVjNCBjb2xvcjtcXHJcXG5cXHJcXG5vdXQgdmVjNCBpZDtcXHJcXG5cXHJcXG51bmlmb3JtIG1hdDMgcHJvamVjdGlvbjtcXHJcXG51bmlmb3JtIHZlYzIgc2NhbGU7XFxyXFxudW5pZm9ybSB2ZWMyIHRyYW5zbGF0ZTtcXHJcXG5cXHJcXG52b2lkIG1haW4odm9pZCkge1xcclxcbiAgICBpZCA9IGluSWQ7XFxyXFxuXFxyXFxuICAgIGNvbG9yID0gaW5TdHJva2VDb2xvcjtcXHJcXG5cXHJcXG4gICAgdmVjMiBzb3VyY2UgPSBpblNvdXJjZVBvc2l0aW9uICogc2NhbGUgKyB0cmFuc2xhdGU7XFxyXFxuICAgIHZlYzIgdGFyZ2V0ID0gaW5UYXJnZXRQb3NpdGlvbiAqIHNjYWxlICsgdHJhbnNsYXRlO1xcclxcbiAgICB2ZWMyIGRlbHRhID0gc291cmNlIC0gdGFyZ2V0O1xcclxcbiAgICB2ZWMyIGNlbnRlciA9IDAuNSAqIChzb3VyY2UgKyB0YXJnZXQpO1xcclxcbiAgICBmbG9hdCBsZW4gPSBsZW5ndGgoZGVsdGEpO1xcclxcbiAgICBmbG9hdCBwaGkgPSBhdGFuKGRlbHRhLnkgLyBkZWx0YS54KTtcXHJcXG5cXHJcXG4gICAgbWF0MyBsaW5lX3NjYWxlID0gbWF0MyhcXHJcXG4gICAgICAgIGxlbiwgMCwgMCxcXHJcXG4gICAgICAgIDAsIGluU3Ryb2tlV2lkdGgsIDAsXFxyXFxuICAgICAgICAwLCAwLCAxXFxyXFxuICAgICk7XFxyXFxuICAgIG1hdDMgbGluZV9yb3RhdGUgPSBtYXQzKFxcclxcbiAgICAgICAgY29zKHBoaSksIHNpbihwaGkpLCAwLFxcclxcbiAgICAgICAgLXNpbihwaGkpLCBjb3MocGhpKSwgMCxcXHJcXG4gICAgICAgIDAsIDAsIDFcXHJcXG4gICAgKTtcXHJcXG4gICAgbWF0MyBsaW5lX3RyYW5zbGF0ZSA9IG1hdDMoXFxyXFxuICAgICAgICAxLCAwLCAwLFxcclxcbiAgICAgICAgMCwgMSwgMCxcXHJcXG4gICAgICAgIGNlbnRlci54LCBjZW50ZXIueSwgMVxcclxcbiAgICApO1xcclxcbiAgICBcXHJcXG4gICAgbWF0MyB0cmFuc2Zvcm0gPSBsaW5lX3RyYW5zbGF0ZSAqIGxpbmVfcm90YXRlICogbGluZV9zY2FsZTtcXHJcXG5cXHJcXG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KHByb2plY3Rpb24gKiB0cmFuc2Zvcm0gKiBpblZlcnRleFBvcywgMS4pO1xcclxcbn1cIjsiLCIvKipcclxuICogQGF1dGhvciBYaWFvZG9uZyBaaGFvIDx6aGFveGlhb2RvbmdAemp1LmVkdS5jbj5cclxuICogQGRlc2NyaXB0aW9uIExpbmsgdXNlZCBpbiByZW5kZXJlclxyXG4gKi9cclxuXHJcbmltcG9ydCB2ZXJ0U2hhZGVyU3RyIGZyb20gJy4vdmVydGV4Lmdsc2wnXHJcbmltcG9ydCBmcmFnU2hhZGVyU3RyIGZyb20gJy4vZnJhZ21lbnQuZ2xzbCdcclxuaW1wb3J0IGlkVmVydFNoYWRlclN0ciBmcm9tICcuL2lkLXZlcnRleC5nbHNsJ1xyXG5pbXBvcnQgaWRGcmFnU2hhZGVyU3RyIGZyb20gJy4vaWQtZnJhZ21lbnQuZ2xzbCdcclxuaW1wb3J0IHtcclxuICAgIGNyZWF0ZVByb2dyYW0sXHJcbiAgICBjcmVhdGVBcnJheUJ1ZmZlcixcclxuICAgIGV4dHJhY3RBdHRyaWJ1dGVzRnJvbVNoYWRlcixcclxuICAgIGVuY29kZVJlbmRlcklkXHJcbn0gZnJvbSAnLi4vLi4vdXRpbHMnXHJcbmltcG9ydCB7IFJlbmRlckF0dHJpYnV0ZSwgVHJhbnNmb3JtIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcydcclxuaW1wb3J0IExpbmsgZnJvbSAnLi4vLi4vLi4vbGluaydcclxuXHJcbmVudW0gTGlua0F0dHJLZXkge1xyXG4gICAgVEVNUExBVEUsXHJcbiAgICBTT1VSQ0UsXHJcbiAgICBUQVJHRVQsXHJcbiAgICBXSURUSCxcclxuICAgIENPTE9SXHJcbn1cclxuXHJcbmVudW0gTGlua0lkQXR0cktleSB7XHJcbiAgICBURU1QTEFURSxcclxuICAgIFNPVVJDRSxcclxuICAgIFRBUkdFVCxcclxuICAgIFdJRFRILFxyXG4gICAgQ09MT1IsXHJcbiAgICBJRFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVuZGVyTGlua01hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dFxyXG4gICAgcHJpdmF0ZSBsaW1pdDogbnVtYmVyXHJcbiAgICBwcml2YXRlIGNvdW50ID0gMFxyXG4gICAgcHJpdmF0ZSB3aWR0aDogbnVtYmVyXHJcbiAgICBwcml2YXRlIGhlaWdodDogbnVtYmVyXHJcbiAgICBwcml2YXRlIHByb2dyYW06IFdlYkdMUHJvZ3JhbVxyXG4gICAgcHJpdmF0ZSBhdHRyaWJ1dGVzOiBSZW5kZXJBdHRyaWJ1dGVcclxuICAgIHByaXZhdGUgaWRQcm9ncmFtOiBXZWJHTFByb2dyYW1cclxuICAgIHByaXZhdGUgaWRBdHRyaWJ1dGVzOiBSZW5kZXJBdHRyaWJ1dGVcclxuICAgIHByaXZhdGUgaWRUZXh0dXJlOiBXZWJHTFRleHR1cmVcclxuICAgIHByaXZhdGUgcmVuZGVySWRUb0lkczogeyBba2V5OiBudW1iZXJdOiBbc3RyaW5nLCBzdHJpbmddIH1cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQsXHJcbiAgICAgICAgd2lkdGg6IG51bWJlcixcclxuICAgICAgICBoZWlnaHQ6IG51bWJlcixcclxuICAgICAgICBsaW1pdDogbnVtYmVyLFxyXG4gICAgICAgIGlkVGV4dHVyZTogV2ViR0xUZXh0dXJlXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmdsID0gZ2xcclxuICAgICAgICB0aGlzLmxpbWl0ID0gbGltaXRcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGhcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxyXG5cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSBleHRyYWN0QXR0cmlidXRlc0Zyb21TaGFkZXIodmVydFNoYWRlclN0cilcclxuICAgICAgICB0aGlzLnByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKHRoaXMuZ2wsIHZlcnRTaGFkZXJTdHIsIGZyYWdTaGFkZXJTdHIsIHRoaXMuYXR0cmlidXRlcylcclxuXHJcbiAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXMgPSBleHRyYWN0QXR0cmlidXRlc0Zyb21TaGFkZXIoaWRWZXJ0U2hhZGVyU3RyKVxyXG4gICAgICAgIHRoaXMuaWRQcm9ncmFtID0gY3JlYXRlUHJvZ3JhbSh0aGlzLmdsLCBpZFZlcnRTaGFkZXJTdHIsIGlkRnJhZ1NoYWRlclN0ciwgdGhpcy5pZEF0dHJpYnV0ZXMpXHJcbiAgICAgICAgdGhpcy5pZFRleHR1cmUgPSBpZFRleHR1cmVcclxuICAgICAgICB0aGlzLnJlbmRlcklkVG9JZHMgPSB7fVxyXG5cclxuICAgICAgICAvLyBpbml0IGFycmF5c1xyXG4gICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlc1tMaW5rQXR0cktleS5URU1QTEFURV0uYXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KFtcclxuICAgICAgICAgICAgLTAuNSwgMC41LCAxLjAsXHJcbiAgICAgICAgICAgIC0wLjUsIC0wLjUsIDEuMCxcclxuICAgICAgICAgICAgMC41LCAwLjUsIDEuMCxcclxuICAgICAgICAgICAgMC41LCAtMC41LCAxLjAsXHJcbiAgICAgICAgXSlcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWF0dHIuaXNCdWlsZEluKSBhdHRyLmFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShhdHRyLnNpemUgKiB0aGlzLmxpbWl0KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIGluaXQgYnVmZmVyc1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XHJcbiAgICAgICAgICAgIGF0dHIuYnVmZmVyID0gY3JlYXRlQXJyYXlCdWZmZXIodGhpcy5nbCwgYXR0ci5hcnJheSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBpbml0IGlkIGF0dHJpYnV0ZXMgYW5kIGJ1ZmZlcnNcclxuICAgICAgICAvLyBUT0RPOiBoYXJkY29kZSBjaGVjaywgbmVlZCByZWZhY3RvclxyXG4gICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaWR4IDwgdGhpcy5hdHRyaWJ1dGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXNbaWR4XSA9IHRoaXMuYXR0cmlidXRlc1tpZHhdXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWF0dHIuaXNCdWlsZEluKSBhdHRyLmFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShhdHRyLnNpemUgKiB0aGlzLmxpbWl0KVxyXG4gICAgICAgICAgICAgICAgYXR0ci5idWZmZXIgPSBjcmVhdGVBcnJheUJ1ZmZlcih0aGlzLmdsLCBhdHRyLmFycmF5KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gaW5pdCB1bmlmb3Jtc1xyXG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pXHJcbiAgICAgICAgY29uc3QgcHJvamVjdGlvbkxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3Byb2plY3Rpb24nKVxyXG4gICAgICAgIGNvbnN0IHNjYWxlTG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLCAnc2NhbGUnKVxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3RyYW5zbGF0ZScpXHJcblxyXG4gICAgICAgIC8vIHRoaXMuZ2wudmlld3BvcnQoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpIC8vIFRPRE86IHZpZXdwb3J0IHNldCwgbm90IG5lZWRlZD8gcHV0IGhlcmUgaW4gY2FzZSBidWcgYXBwZWFyXHJcblxyXG4gICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gICAgICAgIGNvbnN0IHByb2plY3Rpb24gPSBuZXcgRmxvYXQzMkFycmF5KFtcclxuICAgICAgICAgICAgMiAvIHRoaXMud2lkdGgsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIC0yIC8gdGhpcy5oZWlnaHQsIDAsXHJcbiAgICAgICAgICAgIC0xLCAxLCAxXHJcbiAgICAgICAgXSlcclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm1NYXRyaXgzZnYocHJvamVjdGlvbkxvYywgZmFsc2UsIHByb2plY3Rpb24pXHJcblxyXG4gICAgICAgIGNvbnN0IHNjYWxlID0gbmV3IEZsb2F0MzJBcnJheShbMSwgMV0pXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmZ2KHNjYWxlTG9jLCBzY2FsZSlcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlID0gbmV3IEZsb2F0MzJBcnJheShbMCwgMF0pXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmZ2KHRyYW5zbGF0ZUxvYywgdHJhbnNsYXRlKVxyXG5cclxuICAgICAgICAvLyBpZCB1bmlmb3JtcywgaWRlbnRpY2FsIHRvIGxpbmtcclxuICAgICAgICAvLyBUT0RPOiBuZWVkIHJlZmFjdG9yIHRvb1xyXG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLmlkUHJvZ3JhbSlcclxuICAgICAgICBjb25zdCBpZFByb2plY3Rpb25Mb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmlkUHJvZ3JhbSwgJ3Byb2plY3Rpb24nKVxyXG4gICAgICAgIGNvbnN0IGlkU2NhbGVMb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmlkUHJvZ3JhbSwgJ3NjYWxlJylcclxuICAgICAgICBjb25zdCBpZFRyYW5zbGF0ZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuaWRQcm9ncmFtLCAndHJhbnNsYXRlJylcclxuXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtTWF0cml4M2Z2KGlkUHJvamVjdGlvbkxvYywgZmFsc2UsIHByb2plY3Rpb24pXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmZ2KGlkU2NhbGVMb2MsIHNjYWxlKVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdihpZFRyYW5zbGF0ZUxvYywgdHJhbnNsYXRlKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIGxpbmtzIGRhdGEgdG8gZW5naW5lXHJcbiAgICAgKiBAcGFyYW0gbGlua3MgbGlua3MgZGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkRGF0YShsaW5rczogTGlua1tdKSB7XHJcbiAgICAgICAgLy8gc2V0IGFycmF5XHJcbiAgICAgICAgbGlua3MuZm9yRWFjaCgobGluaywgaSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBjb25zaWRlciBsaW5rIGFuZCByZW5kZXIgbGluayBhdHRyaWJ1dGUgbWFwcGluZ1xyXG4gICAgICAgICAgICBjb25zdCBzb3VyY2UgPSBsaW5rLnNvdXJjZSgpXHJcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZVBvc2l0aW9uID0gc291cmNlLnBvc2l0aW9uKClcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW0xpbmtBdHRyS2V5LlNPVVJDRV0uYXJyYXlbMiAqICh0aGlzLmNvdW50ICsgaSldID0gc291cmNlUG9zaXRpb24ueFxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTGlua0F0dHJLZXkuU09VUkNFXS5hcnJheVsyICogKHRoaXMuY291bnQgKyBpKSArIDFdID0gc291cmNlUG9zaXRpb24ueVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gbGluay50YXJnZXQoKVxyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IHRhcmdldC5wb3NpdGlvbigpXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tMaW5rQXR0cktleS5UQVJHRVRdLmFycmF5WzIgKiAodGhpcy5jb3VudCArIGkpXSA9IHRhcmdldFBvc2l0aW9uLnhcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW0xpbmtBdHRyS2V5LlRBUkdFVF0uYXJyYXlbMiAqICh0aGlzLmNvdW50ICsgaSkgKyAxXSA9IHRhcmdldFBvc2l0aW9uLnlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tMaW5rQXR0cktleS5XSURUSF0uYXJyYXlbdGhpcy5jb3VudCArIGldID0gbGluay5zdHJva2VXaWR0aCgpXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IGxpbmsuc3Ryb2tlQ29sb3IoKVxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTGlua0F0dHJLZXkuQ09MT1JdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpXSA9IGNvbG9yLnJcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW0xpbmtBdHRyS2V5LkNPTE9SXS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKSArIDFdID0gY29sb3IuZ1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTGlua0F0dHJLZXkuQ09MT1JdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpICsgMl0gPSBjb2xvci5iXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tMaW5rQXR0cktleS5DT0xPUl0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSkgKyAzXSA9IGNvbG9yLmFcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcklkQ29sb3IgPSBlbmNvZGVSZW5kZXJJZCgyICogKHRoaXMuY291bnQgKyBpKSArIDEpIC8vIE5PVEU6IGxpbmsgcmVuZGVyIGlkLCB1c2Ugb2RkIGludGVnZXJcclxuICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXNbTGlua0lkQXR0cktleS5JRF0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSldID0gcmVuZGVySWRDb2xvci5yXHJcbiAgICAgICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzW0xpbmtJZEF0dHJLZXkuSURdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpICsgMV0gPSByZW5kZXJJZENvbG9yLmdcclxuICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXNbTGlua0lkQXR0cktleS5JRF0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSkgKyAyXSA9IHJlbmRlcklkQ29sb3IuYlxyXG4gICAgICAgICAgICB0aGlzLmlkQXR0cmlidXRlc1tMaW5rSWRBdHRyS2V5LklEXS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKSArIDNdID0gcmVuZGVySWRDb2xvci5hXHJcblxyXG4gICAgICAgICAgICBjb25zdCBzb3VyY2VUYXJnZXQgPSBsaW5rLnNvdXJjZVRhcmdldCgpXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVySWRUb0lkc1syICogKHRoaXMuY291bnQgKyBpKSArIDFdID0gW1xyXG4gICAgICAgICAgICAgICAgc291cmNlVGFyZ2V0LnNvdXJjZS5pZCgpLFxyXG4gICAgICAgICAgICAgICAgc291cmNlVGFyZ2V0LnRhcmdldC5pZCgpXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWF0dHIuaXNCdWlsZEluKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIGF0dHIuYnVmZmVyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5idWZmZXJTdWJEYXRhKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wuQVJSQVlfQlVGRkVSLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSAqIHRoaXMuY291bnQgKiBhdHRyLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuYXJyYXksXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5zaXplICogdGhpcy5jb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLnNpemUgKiBsaW5rcy5sZW5ndGhcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIGlkIGJ1ZmZlciBkYXRhXHJcbiAgICAgICAgY29uc3QgYXR0ciA9IHRoaXMuaWRBdHRyaWJ1dGVzW0xpbmtJZEF0dHJLZXkuSURdXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBhdHRyLmJ1ZmZlcilcclxuICAgICAgICB0aGlzLmdsLmJ1ZmZlclN1YkRhdGEoXHJcbiAgICAgICAgICAgIHRoaXMuZ2wuQVJSQVlfQlVGRkVSLFxyXG4gICAgICAgICAgICBhdHRyLnNpemUgKiB0aGlzLmNvdW50ICogYXR0ci5hcnJheS5CWVRFU19QRVJfRUxFTUVOVCxcclxuICAgICAgICAgICAgYXR0ci5hcnJheSxcclxuICAgICAgICAgICAgYXR0ci5zaXplICogdGhpcy5jb3VudCxcclxuICAgICAgICAgICAgYXR0ci5zaXplICogbGlua3MubGVuZ3RoXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICB0aGlzLmNvdW50ICs9IGxpbmtzLmxlbmd0aFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0IFRyYW5zZm9ybSBpbiBSZW5kZXIgTGlua1xyXG4gICAgICogQHBhcmFtIHRyYW5zZm9ybSBjdXJyZW50IHRyYW5zZm9ybShwYW4mem9vbSBjb25kaXRpb24pXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRUcmFuc2Zvcm0odHJhbnNmb3JtOiBUcmFuc2Zvcm0pIHtcclxuICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKVxyXG4gICAgICAgIGNvbnN0IHNjYWxlTG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLCAnc2NhbGUnKVxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3RyYW5zbGF0ZScpXHJcblxyXG4gICAgICAgIGNvbnN0IHNjYWxlID0gbmV3IEZsb2F0MzJBcnJheShbdHJhbnNmb3JtLmssIHRyYW5zZm9ybS5rXSlcclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZnYoc2NhbGVMb2MsIHNjYWxlKVxyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2xhdGUgPSBuZXcgRmxvYXQzMkFycmF5KFt0cmFuc2Zvcm0ueCwgdHJhbnNmb3JtLnldKVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdih0cmFuc2xhdGVMb2MsIHRyYW5zbGF0ZSlcclxuXHJcbiAgICAgICAgLy8gaWQgdW5pZm9ybXMsIGlkZW50aWNhbCB0byBsaW5rXHJcbiAgICAgICAgLy8gVE9ETzogbmVlZCByZWZhY3RvciB0b29cclxuICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5pZFByb2dyYW0pXHJcbiAgICAgICAgY29uc3QgaWRTY2FsZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuaWRQcm9ncmFtLCAnc2NhbGUnKVxyXG4gICAgICAgIGNvbnN0IGlkVHJhbnNsYXRlTG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5pZFByb2dyYW0sICd0cmFuc2xhdGUnKVxyXG5cclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZnYoaWRTY2FsZUxvYywgc2NhbGUpXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmZ2KGlkVHJhbnNsYXRlTG9jLCB0cmFuc2xhdGUpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZW5kZXIgaWQgdG8gbGluayBpZHMoc291cmNlIGFuZCB0YXJnZXQpXHJcbiAgICAgKiBAcGFyYW0gcmVuZGVySWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldElkc0J5UmVuZGVySWQocmVuZGVySWQ6IG51bWJlcik6IFtzdHJpbmcsIHN0cmluZ10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcklkVG9JZHNbcmVuZGVySWRdXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBkcmF3IGxpbmtzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkcmF3KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmdsLmVuYWJsZSh0aGlzLmdsLkJMRU5EKVxyXG4gICAgICAgICAgICB0aGlzLmdsLmJsZW5kRnVuYyh0aGlzLmdsLk9ORSwgdGhpcy5nbC5PTkVfTUlOVVNfU1JDX0FMUEhBKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSlcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYXR0ci5pbmRleClcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIGF0dHIuYnVmZmVyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5zaXplLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wuRkxPQVQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5pc0J1aWxkSW4gPyAwIDogYXR0ci5zaXplICogYXR0ci5hcnJheS5CWVRFU19QRVJfRUxFTUVOVCxcclxuICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBpZiAoIWF0dHIuaXNCdWlsZEluKSB0aGlzLmdsLnZlcnRleEF0dHJpYkRpdmlzb3IoYXR0ci5pbmRleCwgMSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ2wuZHJhd0FycmF5c0luc3RhbmNlZCh0aGlzLmdsLlRSSUFOR0xFX1NUUklQLCAwLCA0LCB0aGlzLmNvdW50KVxyXG5cclxuICAgICAgICAvLyBkcmF3IGlkXHJcbiAgICAgICAgdGhpcy5nbC5ibGVuZEZ1bmModGhpcy5nbC5PTkUsIHRoaXMuZ2wuWkVSTylcclxuICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5pZFByb2dyYW0pXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5GUkFNRUJVRkZFUiwgdGhpcy5pZFRleHR1cmUpXHJcblxyXG4gICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhdHRyLmluZGV4KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLmlkQXR0cmlidXRlc1tMaW5rSWRBdHRyS2V5LklEXVxyXG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYXR0ci5idWZmZXIpXHJcbiAgICAgICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxyXG4gICAgICAgICAgICBhdHRyLmluZGV4LFxyXG4gICAgICAgICAgICBhdHRyLnNpemUsXHJcbiAgICAgICAgICAgIHRoaXMuZ2wuRkxPQVQsXHJcbiAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICBhdHRyLnNpemUgKiBhdHRyLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULFxyXG4gICAgICAgICAgICAwXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMuZ2wudmVydGV4QXR0cmliRGl2aXNvcihhdHRyLmluZGV4LCAxKVxyXG5cclxuICAgICAgICB0aGlzLmdsLmRyYXdBcnJheXNJbnN0YW5jZWQodGhpcy5nbC5UUklBTkdMRV9TVFJJUCwgMCwgNCwgdGhpcy5jb3VudClcclxuICAgICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLkZSQU1FQlVGRkVSLCBudWxsKVxyXG5cclxuICAgICAgICB0aGlzLmdsLmVuYWJsZSh0aGlzLmdsLkJMRU5EKVxyXG4gICAgICAgIHRoaXMuZ2wuYmxlbmRGdW5jKHRoaXMuZ2wuT05FLCB0aGlzLmdsLk9ORV9NSU5VU19TUkNfQUxQSEEpXHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgXCIjdmVyc2lvbiAzMDAgZXNcXHJcXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxyXFxuaW4gdmVjMyBpblZlcnRleFBvcztcXHJcXG5pbiB2ZWMyIGluU291cmNlUG9zaXRpb247XFxyXFxuaW4gdmVjMiBpblRhcmdldFBvc2l0aW9uO1xcclxcbmluIGZsb2F0IGluU3Ryb2tlV2lkdGg7XFxyXFxuaW4gdmVjNCBpblN0cm9rZUNvbG9yO1xcclxcblxcclxcbm91dCB2ZWM0IGNvbG9yO1xcclxcblxcclxcbnVuaWZvcm0gbWF0MyBwcm9qZWN0aW9uO1xcclxcbnVuaWZvcm0gdmVjMiBzY2FsZTtcXHJcXG51bmlmb3JtIHZlYzIgdHJhbnNsYXRlO1xcclxcblxcclxcbnZvaWQgbWFpbih2b2lkKSB7XFxyXFxuICAgIGNvbG9yID0gaW5TdHJva2VDb2xvcjtcXHJcXG5cXHJcXG4gICAgdmVjMiBzb3VyY2UgPSBpblNvdXJjZVBvc2l0aW9uICogc2NhbGUgKyB0cmFuc2xhdGU7XFxyXFxuICAgIHZlYzIgdGFyZ2V0ID0gaW5UYXJnZXRQb3NpdGlvbiAqIHNjYWxlICsgdHJhbnNsYXRlO1xcclxcbiAgICB2ZWMyIGRlbHRhID0gc291cmNlIC0gdGFyZ2V0O1xcclxcbiAgICB2ZWMyIGNlbnRlciA9IDAuNSAqIChzb3VyY2UgKyB0YXJnZXQpO1xcclxcbiAgICBmbG9hdCBsZW4gPSBsZW5ndGgoZGVsdGEpO1xcclxcbiAgICBmbG9hdCBwaGkgPSBhdGFuKGRlbHRhLnkgLyBkZWx0YS54KTtcXHJcXG5cXHJcXG4gICAgbWF0MyBsaW5lX3NjYWxlID0gbWF0MyhcXHJcXG4gICAgICAgIGxlbiwgMCwgMCxcXHJcXG4gICAgICAgIDAsIGluU3Ryb2tlV2lkdGgsIDAsXFxyXFxuICAgICAgICAwLCAwLCAxXFxyXFxuICAgICk7XFxyXFxuICAgIG1hdDMgbGluZV9yb3RhdGUgPSBtYXQzKFxcclxcbiAgICAgICAgY29zKHBoaSksIHNpbihwaGkpLCAwLFxcclxcbiAgICAgICAgLXNpbihwaGkpLCBjb3MocGhpKSwgMCxcXHJcXG4gICAgICAgIDAsIDAsIDFcXHJcXG4gICAgKTtcXHJcXG4gICAgbWF0MyBsaW5lX3RyYW5zbGF0ZSA9IG1hdDMoXFxyXFxuICAgICAgICAxLCAwLCAwLFxcclxcbiAgICAgICAgMCwgMSwgMCxcXHJcXG4gICAgICAgIGNlbnRlci54LCBjZW50ZXIueSwgMVxcclxcbiAgICApO1xcclxcbiAgICBcXHJcXG4gICAgbWF0MyB0cmFuc2Zvcm0gPSBsaW5lX3RyYW5zbGF0ZSAqIGxpbmVfcm90YXRlICogbGluZV9zY2FsZTtcXHJcXG5cXHJcXG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KHByb2plY3Rpb24gKiB0cmFuc2Zvcm0gKiBpblZlcnRleFBvcywgMS4pO1xcclxcbn1cIjsiLCJleHBvcnQgZGVmYXVsdCBcIiN2ZXJzaW9uIDMwMCBlc1xcclxcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcXHJcXG5pbiB2ZWMyIHBvcztcXHJcXG5pbiBmbG9hdCByYWRpdXM7XFxyXFxuaW4gdmVjNCBjb2xvcjtcXHJcXG5pbiBmbG9hdCBzdHJva2VXaWR0aDtcXHJcXG5pbiB2ZWM0IHN0cm9rZUNvbG9yO1xcclxcblxcclxcbm91dCB2ZWM0IGZyYWdtZW50Q29sb3I7XFxyXFxuXFxyXFxudW5pZm9ybSB2ZWMyIHZpZXdwb3J0O1xcclxcbnVuaWZvcm0gZmxvYXQgcGl4ZWxSYXRpbztcXHJcXG5cXHJcXG5mbG9hdCBpbkNpcmNsZSgpIHtcXHJcXG4gIHZlYzIgZmxpcF9wb3MgPSBwb3M7XFxyXFxuICBmbGlwX3Bvcy55ID0gdmlld3BvcnQueSAtIHBvcy55O1xcclxcbiAgZmxvYXQgciA9IGRpc3RhbmNlKGdsX0ZyYWdDb29yZC54eSAvIHBpeGVsUmF0aW8sIGZsaXBfcG9zKTtcXHJcXG4gIGZsb2F0IGRyYXcgPSAxLiAtIHN0ZXAocmFkaXVzIC0gc3Ryb2tlV2lkdGggLyAyLiwgcik7XFxyXFxuICByZXR1cm4gZHJhdztcXHJcXG59XFxyXFxuXFxyXFxuZmxvYXQgaW5Cb3JkZXIoKSB7XFxyXFxuICBpZiAoc3Ryb2tlV2lkdGggPT0gMC4pIHtcXHJcXG4gICAgcmV0dXJuIDAuO1xcclxcbiAgfVxcclxcbiAgdmVjMiBmbGlwX3BvcyA9IHBvcztcXHJcXG4gIGZsaXBfcG9zLnkgPSB2aWV3cG9ydC55IC0gcG9zLnk7XFxyXFxuICBmbG9hdCByID0gZGlzdGFuY2UoZ2xfRnJhZ0Nvb3JkLnh5IC8gcGl4ZWxSYXRpbywgZmxpcF9wb3MpO1xcclxcbiAgZmxvYXQgZHJhd091dGVyID0gMS4gLSBzbW9vdGhzdGVwKChyYWRpdXMgKyBzdHJva2VXaWR0aCAvIDIuKSAqIDAuOTUsIChyYWRpdXMgKyBzdHJva2VXaWR0aCAvIDIuKSAqIDEuMDUsIHIpO1xcclxcbiAgZmxvYXQgZHJhd0lubmVyID0gMS4gLSBzdGVwKHJhZGl1cyAtIHN0cm9rZVdpZHRoIC8gMi4sIHIpO1xcclxcbiAgcmV0dXJuIGRyYXdPdXRlciAqICgxLiAtIGRyYXdJbm5lcik7XFxyXFxuICAvLyByZXR1cm4gZHJhd091dGVyO1xcclxcbn1cXHJcXG5cXHJcXG52b2lkIG1haW4odm9pZCkge1xcclxcbiAgICAvLyBib3JkZXIgY2hlY2ssIHVzaW5nIDAuNShjZW50ZXIgb2Ygc21vb3Roc3RlcClcXHJcXG4gICAgaWYgKGluQ2lyY2xlKCkgPCAxLiAmJiAoc3Ryb2tlV2lkdGggPCAwLjggfHwgaW5Cb3JkZXIoKSA8IDAuNSkpIHtcXHJcXG4gICAgICAgIGRpc2NhcmQ7XFxyXFxuICAgIH1cXHJcXG4gICAgZnJhZ21lbnRDb2xvciA9IGluQm9yZGVyKCkgKiB2ZWM0KHN0cm9rZUNvbG9yLnJnYiAqIHN0cm9rZUNvbG9yLmEsIHN0cm9rZUNvbG9yLmEpICsgaW5DaXJjbGUoKSAqIHZlYzQoY29sb3IucmdiICogY29sb3IuYSwgY29sb3IuYSk7XFxyXFxufVwiOyIsImV4cG9ydCBkZWZhdWx0IFwiI3ZlcnNpb24gMzAwIGVzXFxyXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcbmluIHZlYzIgcG9zO1xcclxcbmluIGZsb2F0IHJhZGl1cztcXHJcXG5pbiB2ZWM0IGNvbG9yO1xcclxcbmluIGZsb2F0IHN0cm9rZVdpZHRoO1xcclxcbmluIHZlYzQgc3Ryb2tlQ29sb3I7XFxyXFxuXFxyXFxuaW4gdmVjNCBpZDtcXHJcXG5cXHJcXG5vdXQgdmVjNCBmcmFnbWVudENvbG9yO1xcclxcblxcclxcbnVuaWZvcm0gdmVjMiB2aWV3cG9ydDtcXHJcXG51bmlmb3JtIGZsb2F0IHBpeGVsUmF0aW87XFxyXFxuXFxyXFxuZmxvYXQgaW5DaXJjbGUoKSB7XFxyXFxuICB2ZWMyIGZsaXBfcG9zID0gcG9zO1xcclxcbiAgZmxpcF9wb3MueSA9IHZpZXdwb3J0LnkgLSBwb3MueTtcXHJcXG4gIGZsb2F0IHIgPSBkaXN0YW5jZShnbF9GcmFnQ29vcmQueHkgLyBwaXhlbFJhdGlvLCBmbGlwX3Bvcyk7XFxyXFxuICBmbG9hdCBkcmF3ID0gMS4gLSBzdGVwKHJhZGl1cyAtIHN0cm9rZVdpZHRoIC8gMi4sIHIpO1xcclxcbiAgcmV0dXJuIGRyYXc7XFxyXFxufVxcclxcblxcclxcbmZsb2F0IGluQm9yZGVyKCkge1xcclxcbiAgaWYgKHN0cm9rZVdpZHRoID09IDAuKSB7XFxyXFxuICAgIHJldHVybiAwLjtcXHJcXG4gIH1cXHJcXG4gIHZlYzIgZmxpcF9wb3MgPSBwb3M7XFxyXFxuICBmbGlwX3Bvcy55ID0gdmlld3BvcnQueSAtIHBvcy55O1xcclxcbiAgZmxvYXQgciA9IGRpc3RhbmNlKGdsX0ZyYWdDb29yZC54eSAvIHBpeGVsUmF0aW8sIGZsaXBfcG9zKTtcXHJcXG4gIGZsb2F0IGRyYXdPdXRlciA9IDEuIC0gc21vb3Roc3RlcCgocmFkaXVzICsgc3Ryb2tlV2lkdGggLyAyLikgKiAwLjk1LCAocmFkaXVzICsgc3Ryb2tlV2lkdGggLyAyLikgKiAxLjA1LCByKTtcXHJcXG4gIGZsb2F0IGRyYXdJbm5lciA9IDEuIC0gc3RlcChyYWRpdXMgLSBzdHJva2VXaWR0aCAvIDIuLCByKTtcXHJcXG4gIHJldHVybiBkcmF3T3V0ZXIgKiAoMS4gLSBkcmF3SW5uZXIpO1xcclxcbiAgLy8gcmV0dXJuIGRyYXdPdXRlcjtcXHJcXG59XFxyXFxuXFxyXFxudm9pZCBtYWluKHZvaWQpIHtcXHJcXG4gICAgLy8gYm9yZGVyIGNoZWNrLCB1c2luZyAwLjUoY2VudGVyIG9mIHNtb290aHN0ZXApXFxyXFxuICAgIGlmIChpbkNpcmNsZSgpIDwgMS4gJiYgKHN0cm9rZVdpZHRoIDwgMC44IHx8IGluQm9yZGVyKCkgPCAwLjUpKSB7XFxyXFxuICAgICAgICBkaXNjYXJkO1xcclxcbiAgICB9XFxyXFxuICAgIGZyYWdtZW50Q29sb3IgPSBpZDtcXHJcXG59XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIjdmVyc2lvbiAzMDAgZXNcXHJcXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxyXFxuaW4gdmVjMyBpblZlcnRleFBvcztcXHJcXG5pbiB2ZWMyIGluUG9zaXRpb247XFxyXFxuaW4gZmxvYXQgaW5SYWRpdXM7XFxyXFxuaW4gdmVjNCBpbkZpbGw7XFxyXFxuaW4gZmxvYXQgaW5TdHJva2VXaWR0aDtcXHJcXG5pbiB2ZWM0IGluU3Ryb2tlQ29sb3I7XFxyXFxuXFxyXFxuaW4gdmVjNCBpbklkO1xcclxcblxcclxcbm91dCB2ZWMyIHBvcztcXHJcXG5vdXQgZmxvYXQgcmFkaXVzO1xcclxcbm91dCB2ZWM0IGNvbG9yO1xcclxcbm91dCBmbG9hdCBzdHJva2VXaWR0aDtcXHJcXG5vdXQgdmVjNCBzdHJva2VDb2xvcjtcXHJcXG5cXHJcXG5vdXQgdmVjNCBpZDtcXHJcXG5cXHJcXG51bmlmb3JtIG1hdDMgcHJvamVjdGlvbjtcXHJcXG51bmlmb3JtIHZlYzIgc2NhbGU7XFxyXFxudW5pZm9ybSB2ZWMyIHRyYW5zbGF0ZTtcXHJcXG51bmlmb3JtIHZlYzIgdmlld3BvcnQ7XFxyXFxuXFxyXFxudm9pZCBtYWluKHZvaWQpIHtcXHJcXG4gICAgaWQgPSBpbklkO1xcclxcblxcclxcbiAgICBmbG9hdCBzaXplID0gaW5SYWRpdXMgKyBpblN0cm9rZVdpZHRoIC8gMi47XFxyXFxuICAgIHJhZGl1cyA9IGluUmFkaXVzO1xcclxcbiAgICBjb2xvciA9IGluRmlsbDtcXHJcXG4gICAgc3Ryb2tlV2lkdGggPSBpblN0cm9rZVdpZHRoO1xcclxcbiAgICBzdHJva2VDb2xvciA9IGluU3Ryb2tlQ29sb3I7XFxyXFxuICAgIGZsb2F0IHZlcnRleFNpemUgPSBzaXplICogKDIuICogc3FydCgyLikpICogMS41OyAvLyBOT1RFOiB4IDEuNSB0byBwcmV2ZW50IGJvcmRlciBmYWN0b3JcXHJcXG4gICAgcG9zID0gc2NhbGUgKiBpblBvc2l0aW9uICsgdHJhbnNsYXRlO1xcclxcbiAgICBtYXQzIHRyYW5zZm9ybSA9IG1hdDMoXFxyXFxuICAgICAgICB2ZXJ0ZXhTaXplLCAwLCAwLFxcclxcbiAgICAgICAgMCwgdmVydGV4U2l6ZSwgMCxcXHJcXG4gICAgICAgIHBvcy54LCBwb3MueSwgMVxcclxcbiAgICApO1xcclxcblxcclxcbiAgICBnbF9Qb3NpdGlvbiA9IHZlYzQocHJvamVjdGlvbiAqIHRyYW5zZm9ybSAqIGluVmVydGV4UG9zLCAxLik7XFxyXFxufVwiOyIsIi8qKlxyXG4gKiBAYXV0aG9yIFhpYW9kb25nIFpoYW8gPHpoYW94aWFvZG9uZ0B6anUuZWR1LmNuPlxyXG4gKiBAZGVzY3JpcHRpb24gTm9kZSB1c2luZyBpbiBSZW5kZXJlclxyXG4gKi9cclxuXHJcbmltcG9ydCB2ZXJ0U2hhZGVyU3RyIGZyb20gJy4vdmVydGV4Lmdsc2wnXHJcbmltcG9ydCBmcmFnU2hhZGVyU3RyIGZyb20gJy4vZnJhZ21lbnQuZ2xzbCdcclxuaW1wb3J0IGlkVmVydFNoYWRlclN0ciBmcm9tICcuL2lkLXZlcnRleC5nbHNsJ1xyXG5pbXBvcnQgaWRGcmFnU2hhZGVyU3RyIGZyb20gJy4vaWQtZnJhZ21lbnQuZ2xzbCdcclxuaW1wb3J0IHtcclxuICAgIGNyZWF0ZVByb2dyYW0sXHJcbiAgICBjcmVhdGVBcnJheUJ1ZmZlcixcclxuICAgIGV4dHJhY3RBdHRyaWJ1dGVzRnJvbVNoYWRlcixcclxuICAgIGVuY29kZVJlbmRlcklkXHJcbn0gZnJvbSAnLi4vLi4vdXRpbHMnXHJcbmltcG9ydCB7IFJlbmRlckF0dHJpYnV0ZSwgVHJhbnNmb3JtIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcydcclxuaW1wb3J0IE5vZGUgZnJvbSAnLi4vLi4vLi4vbm9kZSdcclxuXHJcbmVudW0gTm9kZUF0dHJLZXkge1xyXG4gICAgVGVtcGxhdGUsXHJcbiAgICBQb3NpdGlvbixcclxuICAgIFNpemUsXHJcbiAgICBDb2xvcixcclxuICAgIFN0cm9rZVdpZHRoLFxyXG4gICAgU3Ryb2tlQ29sb3JcclxufVxyXG5cclxuZW51bSBOb2RlSWRBdHRyS2V5IHtcclxuICAgIFRlbXBsYXRlLFxyXG4gICAgUG9zaXRpb24sXHJcbiAgICBTaXplLFxyXG4gICAgQ29sb3IsXHJcbiAgICBTdHJva2VXaWR0aCxcclxuICAgIFN0cm9rZUNvbG9yLFxyXG4gICAgSWRcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlbmRlck5vZGVNYW5hZ2VyIHtcclxuICAgIC8vIHByb2dyYW1cclxuICAgIHByaXZhdGUgZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHRcclxuICAgIHByaXZhdGUgbGltaXQ6IG51bWJlclxyXG4gICAgcHJpdmF0ZSBjb3VudCA9IDBcclxuICAgIHByaXZhdGUgd2lkdGg6IG51bWJlclxyXG4gICAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlclxyXG4gICAgcHJpdmF0ZSBwcm9ncmFtOiBXZWJHTFByb2dyYW1cclxuICAgIHByaXZhdGUgYXR0cmlidXRlczogUmVuZGVyQXR0cmlidXRlXHJcbiAgICBwcml2YXRlIGlkUHJvZ3JhbTogV2ViR0xQcm9ncmFtXHJcbiAgICBwcml2YXRlIGlkQXR0cmlidXRlczogUmVuZGVyQXR0cmlidXRlXHJcbiAgICBwcml2YXRlIGlkVGV4dHVyZTogV2ViR0xUZXh0dXJlXHJcbiAgICBwcml2YXRlIHJlbmRlcklkVG9JZDogeyBba2V5OiBudW1iZXJdOiBzdHJpbmcgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlIHJlbmRlciBub2RlIG1hbmFnZXJcclxuICAgICAqIEBwYXJhbSBnbCBXZWJHTCBjb250ZXh0XHJcbiAgICAgKiBAcGFyYW0gd2lkdGggY2FudmFzIHdpZHRoXHJcbiAgICAgKiBAcGFyYW0gaGVpZ2h0IGNhbnZhcyBoZWlnaHRcclxuICAgICAqIEBwYXJhbSBsaW1pdCBtYXggbm9kZXMgbnVtYmVyXHJcbiAgICAgKiBAcGFyYW0gaWRUZXh0dXJlIHRleHR1cmUgc3RvcmUgZWxlbWVudHMgaWQgb2YgZWFjaCBwaXhlbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQsXHJcbiAgICAgICAgd2lkdGg6IG51bWJlcixcclxuICAgICAgICBoZWlnaHQ6IG51bWJlcixcclxuICAgICAgICBsaW1pdDogbnVtYmVyLFxyXG4gICAgICAgIGlkVGV4dHVyZTogV2ViR0xUZXh0dXJlXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmdsID0gZ2xcclxuICAgICAgICB0aGlzLmxpbWl0ID0gbGltaXRcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGhcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxyXG5cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSBleHRyYWN0QXR0cmlidXRlc0Zyb21TaGFkZXIodmVydFNoYWRlclN0cilcclxuICAgICAgICB0aGlzLnByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKHRoaXMuZ2wsIHZlcnRTaGFkZXJTdHIsIGZyYWdTaGFkZXJTdHIsIHRoaXMuYXR0cmlidXRlcylcclxuXHJcbiAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXMgPSBleHRyYWN0QXR0cmlidXRlc0Zyb21TaGFkZXIoaWRWZXJ0U2hhZGVyU3RyKVxyXG4gICAgICAgIHRoaXMuaWRQcm9ncmFtID0gY3JlYXRlUHJvZ3JhbSh0aGlzLmdsLCBpZFZlcnRTaGFkZXJTdHIsIGlkRnJhZ1NoYWRlclN0ciwgdGhpcy5pZEF0dHJpYnV0ZXMpXHJcbiAgICAgICAgdGhpcy5pZFRleHR1cmUgPSBpZFRleHR1cmVcclxuICAgICAgICB0aGlzLnJlbmRlcklkVG9JZCA9IHt9XHJcblxyXG4gICAgICAgIC8vIGluaXQgYXJyYXlzXHJcbiAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW05vZGVBdHRyS2V5LlRlbXBsYXRlXS5hcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgICAgICAgICAtMC41LCAwLjAsIDEuMCxcclxuICAgICAgICAgICAgMC4wLCAtMC41LCAxLjAsXHJcbiAgICAgICAgICAgIDAuMCwgMC41LCAxLjAsXHJcbiAgICAgICAgICAgIDAuNSwgMC4wLCAxLjAsXHJcbiAgICAgICAgXSlcclxuICAgICAgICAvLyBUT0RPOiBjb21iaW5lIHRoZSBmb2xsb3dpbmcgdHdvIGxvb3A/XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFhdHRyLmlzQnVpbGRJbikgYXR0ci5hcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoYXR0ci5zaXplICogdGhpcy5saW1pdClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBpbml0IGJ1ZmZlcnNcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG4gICAgICAgICAgICBhdHRyLmJ1ZmZlciA9IGNyZWF0ZUFycmF5QnVmZmVyKHRoaXMuZ2wsIGF0dHIuYXJyYXkpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gaW5pdCBpZCBhdHRyaWJ1dGVzIGFuZCBidWZmZXJzXHJcbiAgICAgICAgLy8gVE9ETzogaGFyZGNvZGUgY2hlY2ssIG5lZWQgcmVmYWN0b3JcclxuICAgICAgICB0aGlzLmlkQXR0cmlidXRlcy5mb3JFYWNoKChhdHRyLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlkeCA8IHRoaXMuYXR0cmlidXRlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzW2lkeF0gPSB0aGlzLmF0dHJpYnV0ZXNbaWR4XVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhdHRyLmlzQnVpbGRJbikgYXR0ci5hcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoYXR0ci5zaXplICogdGhpcy5saW1pdClcclxuICAgICAgICAgICAgICAgIGF0dHIuYnVmZmVyID0gY3JlYXRlQXJyYXlCdWZmZXIodGhpcy5nbCwgYXR0ci5hcnJheSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIGluaXQgdW5pZm9ybXNcclxuICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKVxyXG4gICAgICAgIGNvbnN0IHByb2plY3Rpb25Mb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sICdwcm9qZWN0aW9uJylcclxuICAgICAgICBjb25zdCBzY2FsZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3NjYWxlJylcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGVMb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sICd0cmFuc2xhdGUnKVxyXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0TG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLCAndmlld3BvcnQnKVxyXG4gICAgICAgIGNvbnN0IHBpeGVsUmF0aW9Mb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sICdwaXhlbFJhdGlvJylcclxuXHJcbiAgICAgICAgLy8gdGhpcy5nbC52aWV3cG9ydCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkgLy8gVE9ETzogdmlld3BvcnQgc2V0LCBub3QgbmVlZGVkPyBwdXQgaGVyZSBpbiBjYXNlIGJ1ZyBhcHBlYXJcclxuXHJcbiAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICAgICAgY29uc3QgcHJvamVjdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgICAgICAgICAyIC8gdGhpcy53aWR0aCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgLTIgLyB0aGlzLmhlaWdodCwgMCxcclxuICAgICAgICAgICAgLTEsIDEsIDFcclxuICAgICAgICBdKVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybU1hdHJpeDNmdihwcm9qZWN0aW9uTG9jLCBmYWxzZSwgcHJvamVjdGlvbilcclxuXHJcbiAgICAgICAgY29uc3Qgc2NhbGUgPSBuZXcgRmxvYXQzMkFycmF5KFsxLCAxXSlcclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZnYoc2NhbGVMb2MsIHNjYWxlKVxyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2xhdGUgPSBuZXcgRmxvYXQzMkFycmF5KFswLCAwXSlcclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZnYodHJhbnNsYXRlTG9jLCB0cmFuc2xhdGUpXHJcblxyXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0ID0gbmV3IEZsb2F0MzJBcnJheShbdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRdKVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdih2aWV3cG9ydExvYywgdmlld3BvcnQpXHJcblxyXG4gICAgICAgIGNvbnN0IHBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMWYocGl4ZWxSYXRpb0xvYywgcGl4ZWxSYXRpbylcclxuXHJcbiAgICAgICAgLy8gaWQgdW5pZm9ybXMsIGlkZW50aWNhbCB0byBub2RlXHJcbiAgICAgICAgLy8gVE9ETzogbmVlZCByZWZhY3RvciB0b29cclxuICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5pZFByb2dyYW0pXHJcbiAgICAgICAgY29uc3QgaWRQcm9qZWN0aW9uTG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5pZFByb2dyYW0sICdwcm9qZWN0aW9uJylcclxuICAgICAgICBjb25zdCBpZFNjYWxlTG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5pZFByb2dyYW0sICdzY2FsZScpXHJcbiAgICAgICAgY29uc3QgaWRUcmFuc2xhdGVMb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmlkUHJvZ3JhbSwgJ3RyYW5zbGF0ZScpXHJcbiAgICAgICAgY29uc3QgaWRWaWV3cG9ydExvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuaWRQcm9ncmFtLCAndmlld3BvcnQnKVxyXG4gICAgICAgIGNvbnN0IGlkUGl4ZWxSYXRpb0xvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuaWRQcm9ncmFtLCAncGl4ZWxSYXRpbycpXHJcblxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybU1hdHJpeDNmdihpZFByb2plY3Rpb25Mb2MsIGZhbHNlLCBwcm9qZWN0aW9uKVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdihpZFNjYWxlTG9jLCBzY2FsZSlcclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZnYoaWRUcmFuc2xhdGVMb2MsIHRyYW5zbGF0ZSlcclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZnYoaWRWaWV3cG9ydExvYywgdmlld3BvcnQpXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMWYoaWRQaXhlbFJhdGlvTG9jLCBwaXhlbFJhdGlvKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0IFRyYW5zZm9ybSBpbiBSZW5kZXIgTm9kZVxyXG4gICAgICogQHBhcmFtIHRyYW5zZm9ybSBjdXJyZW50IHRyYW5zZm9ybShwYW4mem9vbSBjb25kaXRpb24pXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRUcmFuc2Zvcm0odHJhbnNmb3JtOiBUcmFuc2Zvcm0pIHtcclxuICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKVxyXG4gICAgICAgIGNvbnN0IHNjYWxlTG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLCAnc2NhbGUnKVxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3RyYW5zbGF0ZScpXHJcblxyXG4gICAgICAgIGNvbnN0IHNjYWxlID0gbmV3IEZsb2F0MzJBcnJheShbdHJhbnNmb3JtLmssIHRyYW5zZm9ybS5rXSlcclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZnYoc2NhbGVMb2MsIHNjYWxlKVxyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2xhdGUgPSBuZXcgRmxvYXQzMkFycmF5KFt0cmFuc2Zvcm0ueCwgdHJhbnNmb3JtLnldKVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdih0cmFuc2xhdGVMb2MsIHRyYW5zbGF0ZSlcclxuXHJcbiAgICAgICAgLy8gaWQgdW5pZm9ybXMsIGlkZW50aWNhbCB0byBub2RlXHJcbiAgICAgICAgLy8gVE9ETzogbmVlZCByZWZhY3RvciB0b29cclxuICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5pZFByb2dyYW0pXHJcbiAgICAgICAgY29uc3QgaWRTY2FsZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuaWRQcm9ncmFtLCAnc2NhbGUnKVxyXG4gICAgICAgIGNvbnN0IGlkVHJhbnNsYXRlTG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5pZFByb2dyYW0sICd0cmFuc2xhdGUnKVxyXG5cclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZnYoaWRTY2FsZUxvYywgc2NhbGUpXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmZ2KGlkVHJhbnNsYXRlTG9jLCB0cmFuc2xhdGUpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgbm9kZXMgZGF0YSB0byBlbmdpbmVcclxuICAgICAqIEBwYXJhbSBub2RlcyBub2RlcyBkYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGREYXRhKG5vZGVzOiBOb2RlW10pIHtcclxuICAgICAgICAvLyBzZXQgYXJyYXlcclxuICAgICAgICBub2Rlcy5mb3JFYWNoKChub2RlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IGNvbnNpZGVyIG5vZGUgYW5kIHJlbmRlciBub2RlIGF0dHJpYnV0ZSBtYXBwaW5nXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gbm9kZS5wb3NpdGlvbigpXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tOb2RlQXR0cktleS5Qb3NpdGlvbl0uYXJyYXlbMiAqICh0aGlzLmNvdW50ICsgaSldID0gcG9zaXRpb24ueFxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTm9kZUF0dHJLZXkuUG9zaXRpb25dLmFycmF5WzIgKiAodGhpcy5jb3VudCArIGkpICsgMV0gPSBwb3NpdGlvbi55XHJcblxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTm9kZUF0dHJLZXkuU2l6ZV0uYXJyYXlbdGhpcy5jb3VudCArIGldID0gbm9kZS5yKClcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGwgPSBub2RlLmZpbGwoKVxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTm9kZUF0dHJLZXkuQ29sb3JdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpXSA9IGZpbGwuclxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTm9kZUF0dHJLZXkuQ29sb3JdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpICsgMV0gPSBmaWxsLmdcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW05vZGVBdHRyS2V5LkNvbG9yXS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKSArIDJdID0gZmlsbC5iXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tOb2RlQXR0cktleS5Db2xvcl0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSkgKyAzXSA9IGZpbGwuYVxyXG5cclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW05vZGVBdHRyS2V5LlN0cm9rZVdpZHRoXS5hcnJheVt0aGlzLmNvdW50ICsgaV0gPSBub2RlLnN0cm9rZVdpZHRoKClcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0cm9rZUNvbG9yID0gbm9kZS5zdHJva2VDb2xvcigpXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tOb2RlQXR0cktleS5TdHJva2VDb2xvcl0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSldID0gc3Ryb2tlQ29sb3IuclxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTm9kZUF0dHJLZXkuU3Ryb2tlQ29sb3JdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpICsgMV0gPSBzdHJva2VDb2xvci5nXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tOb2RlQXR0cktleS5TdHJva2VDb2xvcl0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSkgKyAyXSA9IHN0cm9rZUNvbG9yLmJcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW05vZGVBdHRyS2V5LlN0cm9rZUNvbG9yXS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKSArIDNdID0gc3Ryb2tlQ29sb3IuYVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVuZGVySWRDb2xvciA9IGVuY29kZVJlbmRlcklkKDIgKiAodGhpcy5jb3VudCArIGkpKSAvLyBOT1RFOiBub2RlIHJlbmRlciBpZCwgdXNlIGV2ZW4gaW50ZWdlclxyXG4gICAgICAgICAgICB0aGlzLmlkQXR0cmlidXRlc1tOb2RlSWRBdHRyS2V5LklkXS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKV0gPSByZW5kZXJJZENvbG9yLnJcclxuICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXNbTm9kZUlkQXR0cktleS5JZF0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSkgKyAxXSA9IHJlbmRlcklkQ29sb3IuZ1xyXG4gICAgICAgICAgICB0aGlzLmlkQXR0cmlidXRlc1tOb2RlSWRBdHRyS2V5LklkXS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKSArIDJdID0gcmVuZGVySWRDb2xvci5iXHJcbiAgICAgICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzW05vZGVJZEF0dHJLZXkuSWRdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpICsgM10gPSByZW5kZXJJZENvbG9yLmFcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVySWRUb0lkWzIgKiAodGhpcy5jb3VudCArIGkpXSA9IG5vZGUuaWQoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghYXR0ci5pc0J1aWxkSW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYXR0ci5idWZmZXIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJ1ZmZlclN1YkRhdGEoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbC5BUlJBWV9CVUZGRVIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5zaXplICogdGhpcy5jb3VudCAqIGF0dHIuYXJyYXkuQllURVNfUEVSX0VMRU1FTlQsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5hcnJheSxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLnNpemUgKiB0aGlzLmNvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSAqIG5vZGVzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gaWQgYnVmZmVyIGRhdGFcclxuICAgICAgICBjb25zdCBhdHRyID0gdGhpcy5pZEF0dHJpYnV0ZXNbTm9kZUlkQXR0cktleS5JZF1cclxuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIGF0dHIuYnVmZmVyKVxyXG4gICAgICAgIHRoaXMuZ2wuYnVmZmVyU3ViRGF0YShcclxuICAgICAgICAgICAgdGhpcy5nbC5BUlJBWV9CVUZGRVIsXHJcbiAgICAgICAgICAgIGF0dHIuc2l6ZSAqIHRoaXMuY291bnQgKiBhdHRyLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULFxyXG4gICAgICAgICAgICBhdHRyLmFycmF5LFxyXG4gICAgICAgICAgICBhdHRyLnNpemUgKiB0aGlzLmNvdW50LFxyXG4gICAgICAgICAgICBhdHRyLnNpemUgKiBub2Rlcy5sZW5ndGhcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIHRoaXMuY291bnQgKz0gbm9kZXMubGVuZ3RoXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZW5kZXIgaWQgdG8gaWRcclxuICAgICAqIEBwYXJhbSByZW5kZXJJZCByZW5kZXIgaWQgaW4gbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRJZEJ5UmVuZGVySWQocmVuZGVySWQ6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVySWRUb0lkW3JlbmRlcklkXVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZHJhdyBub2Rlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZHJhdygpIHtcclxuICAgICAgICBpZiAodGhpcy5jb3VudCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5nbC5lbmFibGUodGhpcy5nbC5CTEVORClcclxuICAgICAgICAgICAgdGhpcy5nbC5ibGVuZEZ1bmModGhpcy5nbC5PTkUsIHRoaXMuZ2wuT05FX01JTlVTX1NSQ19BTFBIQSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGF0dHIuaW5kZXgpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0ciwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBhdHRyLmJ1ZmZlcilcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wudmVydGV4QXR0cmliUG9pbnRlcihcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLkZMT0FULFxyXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSAqIGF0dHIuYXJyYXkuQllURVNfUEVSX0VMRU1FTlQsXHJcbiAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgaWYgKCFhdHRyLmlzQnVpbGRJbikgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJEaXZpc29yKGF0dHIuaW5kZXgsIDEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdsLmRyYXdBcnJheXNJbnN0YW5jZWQodGhpcy5nbC5UUklBTkdMRV9TVFJJUCwgMCwgNCwgdGhpcy5jb3VudClcclxuXHJcbiAgICAgICAgLy8gZHJhdyBpZFxyXG4gICAgICAgIHRoaXMuZ2wuYmxlbmRGdW5jKHRoaXMuZ2wuT05FLCB0aGlzLmdsLlpFUk8pXHJcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMuaWRQcm9ncmFtKVxyXG4gICAgICAgIHRoaXMuZ2wuYmluZEZyYW1lYnVmZmVyKHRoaXMuZ2wuRlJBTUVCVUZGRVIsIHRoaXMuaWRUZXh0dXJlKVxyXG5cclxuICAgICAgICB0aGlzLmlkQXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYXR0ci5pbmRleClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBhdHRyID0gdGhpcy5pZEF0dHJpYnV0ZXNbTm9kZUlkQXR0cktleS5JZF1cclxuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIGF0dHIuYnVmZmVyKVxyXG4gICAgICAgIHRoaXMuZ2wudmVydGV4QXR0cmliUG9pbnRlcihcclxuICAgICAgICAgICAgYXR0ci5pbmRleCxcclxuICAgICAgICAgICAgYXR0ci5zaXplLFxyXG4gICAgICAgICAgICB0aGlzLmdsLkZMT0FULFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgYXR0ci5zaXplICogYXR0ci5hcnJheS5CWVRFU19QRVJfRUxFTUVOVCxcclxuICAgICAgICAgICAgMFxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYkRpdmlzb3IoYXR0ci5pbmRleCwgMSlcclxuXHJcbiAgICAgICAgdGhpcy5nbC5kcmF3QXJyYXlzSW5zdGFuY2VkKHRoaXMuZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQsIHRoaXMuY291bnQpXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5GUkFNRUJVRkZFUiwgbnVsbClcclxuXHJcbiAgICAgICAgdGhpcy5nbC5lbmFibGUodGhpcy5nbC5CTEVORClcclxuICAgICAgICB0aGlzLmdsLmJsZW5kRnVuYyh0aGlzLmdsLk9ORSwgdGhpcy5nbC5PTkVfTUlOVVNfU1JDX0FMUEhBKVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IFwiI3ZlcnNpb24gMzAwIGVzXFxyXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcbmluIHZlYzMgaW5WZXJ0ZXhQb3M7XFxyXFxuaW4gdmVjMiBpblBvc2l0aW9uO1xcclxcbmluIGZsb2F0IGluUmFkaXVzO1xcclxcbmluIHZlYzQgaW5GaWxsO1xcclxcbmluIGZsb2F0IGluU3Ryb2tlV2lkdGg7XFxyXFxuaW4gdmVjNCBpblN0cm9rZUNvbG9yO1xcclxcblxcclxcbm91dCB2ZWMyIHBvcztcXHJcXG5vdXQgZmxvYXQgcmFkaXVzO1xcclxcbm91dCB2ZWM0IGNvbG9yO1xcclxcbm91dCBmbG9hdCBzdHJva2VXaWR0aDtcXHJcXG5vdXQgdmVjNCBzdHJva2VDb2xvcjtcXHJcXG5cXHJcXG51bmlmb3JtIG1hdDMgcHJvamVjdGlvbjtcXHJcXG51bmlmb3JtIHZlYzIgc2NhbGU7XFxyXFxudW5pZm9ybSB2ZWMyIHRyYW5zbGF0ZTtcXHJcXG51bmlmb3JtIHZlYzIgdmlld3BvcnQ7XFxyXFxuXFxyXFxudm9pZCBtYWluKHZvaWQpIHtcXHJcXG4gICAgZmxvYXQgc2l6ZSA9IGluUmFkaXVzICsgaW5TdHJva2VXaWR0aCAvIDIuO1xcclxcbiAgICByYWRpdXMgPSBpblJhZGl1cztcXHJcXG4gICAgY29sb3IgPSBpbkZpbGw7XFxyXFxuICAgIHN0cm9rZVdpZHRoID0gaW5TdHJva2VXaWR0aDtcXHJcXG4gICAgc3Ryb2tlQ29sb3IgPSBpblN0cm9rZUNvbG9yO1xcclxcbiAgICBmbG9hdCB2ZXJ0ZXhTaXplID0gc2l6ZSAqICgyLiAqIHNxcnQoMi4pKSAqIDEuNTsgLy8gTk9URTogeCAxLjUgdG8gcHJldmVudCBib3JkZXIgZmFjdG9yXFxyXFxuICAgIHBvcyA9IHNjYWxlICogaW5Qb3NpdGlvbiArIHRyYW5zbGF0ZTtcXHJcXG4gICAgbWF0MyB0cmFuc2Zvcm0gPSBtYXQzKFxcclxcbiAgICAgICAgdmVydGV4U2l6ZSwgMCwgMCxcXHJcXG4gICAgICAgIDAsIHZlcnRleFNpemUsIDAsXFxyXFxuICAgICAgICBwb3MueCwgcG9zLnksIDFcXHJcXG4gICAgKTtcXHJcXG5cXHJcXG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KHByb2plY3Rpb24gKiB0cmFuc2Zvcm0gKiBpblZlcnRleFBvcywgMS4pO1xcclxcbn1cIjsiLCIvKipcclxuICogQGRlc2NyaXB0aW9uIHJlbmRlciBncmFwaCB1c2luZyB3ZWJnbFxyXG4gKiBAYXV0aG9yIFhpYW9kb25nIFpoYW8gPHpoYW94aWFvZG9uZ0B6anUuZWR1LmNuPlxyXG4gKi9cclxuXHJcbmltcG9ydCAqIGFzIGRlZmF1bHRDb25maWdzIGZyb20gJy4uL2NvbmZpZ3MnXHJcbmltcG9ydCB7IFJlbmRlck5vZGVNYW5hZ2VyIH0gZnJvbSAnLi9lbGVtZW50cy9ub2RlL3JlbmRlci1ub2RlJ1xyXG5pbXBvcnQgTm9kZSBmcm9tICcuLi9ub2RlJ1xyXG5pbXBvcnQgTGluayBmcm9tICdzcmMvbGluaydcclxuaW1wb3J0IHsgUmVuZGVyTGlua01hbmFnZXIgfSBmcm9tICcuL2VsZW1lbnRzL2xpbmsvcmVuZGVyLWxpbmsnXHJcbmltcG9ydCB7IFRyYW5zZm9ybSwgUmVuZGVyZXJDb25maWdzIH0gZnJvbSAnLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyBkZWNvZGVSZW5kZXJJZCB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5leHBvcnQgY2xhc3MgUmVuZGVyZXIge1xyXG4gICAgcHJpdmF0ZSBnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dFxyXG4gICAgcHJpdmF0ZSBub2RlTWFuYWdlcjogUmVuZGVyTm9kZU1hbmFnZXJcclxuICAgIHByaXZhdGUgbGlua01hbmFnZXI6IFJlbmRlckxpbmtNYW5hZ2VyXHJcbiAgICBwcml2YXRlIGJhY2tncm91bmRDb2xvcjogQ29sb3JcclxuICAgIHByaXZhdGUgd2lkdGg6IG51bWJlclxyXG4gICAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlclxyXG4gICAgcHJpdmF0ZSBpZFRleHR1cmU6IFdlYkdMVGV4dHVyZVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlIHJlbmRlcmVyIG9iamVjdFxyXG4gICAgICogQHBhcmFtIGNvbmZpZ3Mge2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBiYWNrZ3JvdW5kQ29sb3I6IENvbG9yfSBjb25maWdzIHBhc3NlZCB0byByZW5kZXJlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoY29uZmlnczogUmVuZGVyZXJDb25maWdzKSB7XHJcbiAgICAgICAgY29uc3QgeyBjYW52YXMsIHdpZHRoLCBoZWlnaHQsIGJhY2tncm91bmRDb2xvciB9ID0gY29uZmlnc1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wyJylcclxuICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXRWIHJlcXVpcmVzIFdlYkdMMiBzdXBwb3J0ZWQgYnkgeW91ciBicm93c2VyJylcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3JcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGhcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxyXG5cclxuICAgICAgICB0aGlzLmluaXRJZFRleHR1cmUoKVxyXG5cclxuICAgICAgICAvLyBUT0RPOiBwYXJhbWV0ZXJzIHRvbyBtYW55XHJcbiAgICAgICAgdGhpcy5ub2RlTWFuYWdlciA9IG5ldyBSZW5kZXJOb2RlTWFuYWdlcihcclxuICAgICAgICAgICAgdGhpcy5nbCxcclxuICAgICAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodCxcclxuICAgICAgICAgICAgZGVmYXVsdENvbmZpZ3Mubm9kZUxpbWl0LFxyXG4gICAgICAgICAgICB0aGlzLmlkVGV4dHVyZVxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLmxpbmtNYW5hZ2VyID0gbmV3IFJlbmRlckxpbmtNYW5hZ2VyKFxyXG4gICAgICAgICAgICB0aGlzLmdsLFxyXG4gICAgICAgICAgICB3aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0LFxyXG4gICAgICAgICAgICBkZWZhdWx0Q29uZmlncy5saW5rTGltaXQsXHJcbiAgICAgICAgICAgIHRoaXMuaWRUZXh0dXJlXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIG5vZGVzIHRvIG5vZGUgbWFuYWdlclxyXG4gICAgICogQHBhcmFtIG5vZGVzIG5vZGUgZGF0YSBpbiBOZXRWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGROb2Rlcyhub2RlczogTm9kZVtdKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlTWFuYWdlci5hZGREYXRhKG5vZGVzKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIGxpbmtzIHRvIGxpbmsgbWFuYWdlclxyXG4gICAgICogQHBhcmFtIGxpbmtzIGxpbmsgZGF0YSBpbiBOZXRWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRMaW5rcyhsaW5rczogTGlua1tdKSB7XHJcbiAgICAgICAgdGhpcy5saW5rTWFuYWdlci5hZGREYXRhKGxpbmtzKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRUcmFuc2Zvcm0odHJhbnNmb3JtOiBUcmFuc2Zvcm0pIHtcclxuICAgICAgICB0aGlzLm5vZGVNYW5hZ2VyLnNldFRyYW5zZm9ybSh0cmFuc2Zvcm0pXHJcbiAgICAgICAgdGhpcy5saW5rTWFuYWdlci5zZXRUcmFuc2Zvcm0odHJhbnNmb3JtKVxyXG4gICAgICAgIHRoaXMuZHJhdygpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBkcmF3IGFsbCBlbGVtZW50c1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZHJhdygpIHtcclxuICAgICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLkZSQU1FQlVGRkVSLCB0aGlzLmlkVGV4dHVyZSlcclxuICAgICAgICB0aGlzLmdsLmNsZWFyQ29sb3IoMSwgMSwgMSwgMSlcclxuICAgICAgICB0aGlzLmdsLmNsZWFyKHRoaXMuZ2wuQ09MT1JfQlVGRkVSX0JJVClcclxuICAgICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLkZSQU1FQlVGRkVSLCBudWxsKVxyXG5cclxuICAgICAgICB0aGlzLmdsLmNsZWFyQ29sb3IoXHJcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yLnIsXHJcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yLmcsXHJcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yLmIsXHJcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yLmFcclxuICAgICAgICApXHJcbiAgICAgICAgdGhpcy5nbC5jbGVhcih0aGlzLmdsLkNPTE9SX0JVRkZFUl9CSVQpXHJcbiAgICAgICAgdGhpcy5saW5rTWFuYWdlci5kcmF3KClcclxuICAgICAgICB0aGlzLm5vZGVNYW5hZ2VyLmRyYXcoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0IGVsZW1lbnQncyBpZCBhdCAoeCwgeSkgb2YgY2FudmFzIGlmIGV4aXN0c1xyXG4gICAgICogQHBhcmFtIHggeCBwb3NcclxuICAgICAqIEBwYXJhbSB5IHkgcG9zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRJZEJ5UG9zaXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpOiBzdHJpbmcgfCBbc3RyaW5nLCBzdHJpbmddIHtcclxuICAgICAgICBjb25zdCByZW5kZXJJZCA9IHRoaXMucmVhZElkVGV4dHVyZSh4LCB5KVxyXG4gICAgICAgIGlmIChyZW5kZXJJZCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChyZW5kZXJJZCAlIDIgPT09IDApIHsgLy8gTk9URTogbm9kZSBoYXMgZXZlbiByZW5kZXIgaWQsIGxpbmsgaGFzIG9kZCByZW5kZXIgaWRcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVJZCA9IHRoaXMubm9kZU1hbmFnZXIuZ2V0SWRCeVJlbmRlcklkKHJlbmRlcklkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVJZFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGlua0lkcyA9IHRoaXMubGlua01hbmFnZXIuZ2V0SWRzQnlSZW5kZXJJZChyZW5kZXJJZClcclxuICAgICAgICAgICAgICAgIHJldHVybiBsaW5rSWRzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZWFkIHBpeGVsIHZhbHVlIGF0ICh4LCB5KSBvZiB0ZXh0dXJlXHJcbiAgICAgKiBAcGFyYW0geCB4IHBvc1xyXG4gICAgICogQHBhcmFtIHkgeSBwb3NcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRJZFRleHR1cmUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMVxyXG4gICAgICAgIHRoaXMuZ2wuYmluZEZyYW1lYnVmZmVyKHRoaXMuZ2wuUkVBRF9GUkFNRUJVRkZFUiwgdGhpcy5pZFRleHR1cmUpXHJcbiAgICAgICAgY29uc3QgcmVhZFBpeGVsQnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoWzI1NSwgMjU1LCAyNTUsIDI1NV0pIC8vIC0xXHJcbiAgICAgICAgdGhpcy5nbC5yZWFkUGl4ZWxzKFxyXG4gICAgICAgICAgICB4ICogcmF0aW8sXHJcbiAgICAgICAgICAgIHkgKiByYXRpbyxcclxuICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgdGhpcy5nbC5SR0JBLFxyXG4gICAgICAgICAgICB0aGlzLmdsLlVOU0lHTkVEX0JZVEUsXHJcbiAgICAgICAgICAgIHJlYWRQaXhlbEJ1ZmZlclxyXG4gICAgICAgIClcclxuICAgICAgICBjb25zdCBvYmplY3RJRCA9IGRlY29kZVJlbmRlcklkKHJlYWRQaXhlbEJ1ZmZlcilcclxuXHJcbiAgICAgICAgcmV0dXJuIG9iamVjdElEXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpbml0IFdlYkdMIHRleHR1cmUgZm9yIHJlY29yZGluZyBwb3NpdGlvbiBvZiBlbGVtZW50c1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGluaXRJZFRleHR1cmUoKSB7XHJcbiAgICAgICAgY29uc3QgZ2wgPSB0aGlzLmdsXHJcbiAgICAgICAgY29uc3QgcGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcclxuICAgICAgICBjb25zdCBzY3JlZW5XaWR0aCA9IHRoaXMud2lkdGggKiBwaXhlbFJhdGlvXHJcbiAgICAgICAgY29uc3Qgc2NyZWVuSGVpZ2h0ID0gdGhpcy5oZWlnaHQgKiBwaXhlbFJhdGlvXHJcblxyXG4gICAgICAgIGNvbnN0IGZibyA9IGdsLmNyZWF0ZUZyYW1lYnVmZmVyKClcclxuICAgICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIGZibylcclxuXHJcbiAgICAgICAgY29uc3QgaWRUZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpXHJcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgaWRUZXh0dXJlKVxyXG4gICAgICAgIGdsLnRleEltYWdlMkQoXHJcbiAgICAgICAgICAgIGdsLlRFWFRVUkVfMkQsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIGdsLlJHQkEsXHJcbiAgICAgICAgICAgIHNjcmVlbldpZHRoLFxyXG4gICAgICAgICAgICBzY3JlZW5IZWlnaHQsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIGdsLlJHQkEsXHJcbiAgICAgICAgICAgIGdsLlVOU0lHTkVEX0JZVEUsXHJcbiAgICAgICAgICAgIG51bGxcclxuICAgICAgICApXHJcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUilcclxuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTElORUFSKVxyXG4gICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpXHJcbiAgICAgICAgZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQoZ2wuRlJBTUVCVUZGRVIsIGdsLkNPTE9SX0FUVEFDSE1FTlQwLCBnbC5URVhUVVJFXzJELCBpZFRleHR1cmUsIDApXHJcblxyXG4gICAgICAgIC8vIFRPRE86IG5lZWQgc2ltcGxpZnlcclxuICAgICAgICBnbC5kcmF3QnVmZmVycyhbMF0ubWFwKCh2KSA9PiB2ICsgZ2wuQ09MT1JfQVRUQUNITUVOVDApKVxyXG5cclxuICAgICAgICBjb25zdCByYm8gPSBnbC5jcmVhdGVSZW5kZXJidWZmZXIoKVxyXG4gICAgICAgIGdsLmJpbmRSZW5kZXJidWZmZXIoZ2wuUkVOREVSQlVGRkVSLCByYm8pXHJcbiAgICAgICAgZ2wuY2xlYXJDb2xvcigxLCAxLCAxLCAxKVxyXG4gICAgICAgIGdsLnJlbmRlcmJ1ZmZlclN0b3JhZ2UoZ2wuUkVOREVSQlVGRkVSLCBnbC5ERVBUSDI0X1NURU5DSUw4LCBzY3JlZW5XaWR0aCwgc2NyZWVuSGVpZ2h0KVxyXG4gICAgICAgIGdsLmJpbmRSZW5kZXJidWZmZXIoZ2wuUkVOREVSQlVGRkVSLCBudWxsKVxyXG4gICAgICAgIGdsLmZyYW1lYnVmZmVyUmVuZGVyYnVmZmVyKFxyXG4gICAgICAgICAgICBnbC5GUkFNRUJVRkZFUixcclxuICAgICAgICAgICAgZ2wuREVQVEhfU1RFTkNJTF9BVFRBQ0hNRU5ULFxyXG4gICAgICAgICAgICBnbC5SRU5ERVJCVUZGRVIsXHJcbiAgICAgICAgICAgIHJib1xyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgaWYgKGdsLmNoZWNrRnJhbWVidWZmZXJTdGF0dXMoZ2wuRlJBTUVCVUZGRVIpICE9PSBnbC5GUkFNRUJVRkZFUl9DT01QTEVURSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZyYW1lYnVmZmVyIGdlbmVyYXRlIGZhaWxlZCcpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpXHJcblxyXG4gICAgICAgIHRoaXMuaWRUZXh0dXJlID0gZmJvXHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XHJcbiAqIEBkZXNjcmlwdGlvbiB1dGlsaXR5IGZ1bmN0aW9ucyBmb3IgcmVuZGVyZXJcclxuICovXHJcblxyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJy4uL2ludGVyZmFjZXMnXHJcblxyXG4vKipcclxuICogY29tcGlsZSB3ZWJnbCBzaGFkZXJcclxuICogQHBhcmFtIGdsIFdlYkdMIGluc3RhbmNlXHJcbiAqIEBwYXJhbSBzaGFkZXJTdHIgc2hhZGVyIGZpbGUgaW4gc3RyaW5nXHJcbiAqIEBwYXJhbSBzaGFkZXJUeXBlIHZlcnRleCBvciBmcmFnbWVudCBzaGFkZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlU2hhZGVyKFxyXG4gICAgZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQsXHJcbiAgICBzaGFkZXJTdHI6IHN0cmluZyxcclxuICAgIHNoYWRlclR5cGU6IG51bWJlclxyXG4pOiBXZWJHTFNoYWRlciB7XHJcbiAgICBjb25zdCBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoc2hhZGVyVHlwZSlcclxuICAgIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNoYWRlclN0cilcclxuICAgIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKVxyXG4gICAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoYWRlciBjb21waWxlIGZhaWxlZDogJyArIGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2hhZGVyXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBnZW5lcmF0ZSBXZWJHTCBwcm9ncmFtXHJcbiAqIEBwYXJhbSBnbCBXZWJHTCBpbnN0YW5jZVxyXG4gKiBAcGFyYW0gdmVydFNoYWRlclN0ciB2ZXJ0ZXggc2hhZGVyIGluIHN0cmluZyBmb3JtYXRcclxuICogQHBhcmFtIGZyYWdTaGFkZXJTdHIgZnJhZ21lbnQgc2hhZGVyIGluIHN0cmluZyBmb3JtYXRcclxuICogQHBhcmFtIGF0dHJpYnV0ZXMgYXR0cmlidXRlc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2dyYW0oXHJcbiAgICBnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dCxcclxuICAgIHZlcnRTaGFkZXJTdHI6IHN0cmluZyxcclxuICAgIGZyYWdTaGFkZXJTdHI6IHN0cmluZyxcclxuICAgIGF0dHJpYnV0ZXM6IHsgbmFtZTogc3RyaW5nOyBpbmRleDogbnVtYmVyIH1bXVxyXG4pOiBXZWJHTFByb2dyYW0ge1xyXG4gICAgY29uc3QgdmVydFNoYWRlciA9IGNvbXBpbGVTaGFkZXIoZ2wsIHZlcnRTaGFkZXJTdHIsIGdsLlZFUlRFWF9TSEFERVIpXHJcbiAgICBjb25zdCBmcmFnU2hhZGVyID0gY29tcGlsZVNoYWRlcihnbCwgZnJhZ1NoYWRlclN0ciwgZ2wuRlJBR01FTlRfU0hBREVSKVxyXG5cclxuICAgIGNvbnN0IHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKClcclxuXHJcbiAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIpID0+IHtcclxuICAgICAgICBnbC5iaW5kQXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgYXR0ci5pbmRleCwgYXR0ci5uYW1lKVxyXG4gICAgfSlcclxuXHJcbiAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydFNoYWRlcilcclxuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnU2hhZGVyKVxyXG5cclxuICAgIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pXHJcbiAgICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgbGluayBzaGFkZXJzOiAke2dsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pfWApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByb2dyYW1cclxufVxyXG5cclxuLyoqXHJcbiAqIGNyZWF0ZSBXZWJHTCBhcnJheSBidWZmZXIgZ2l2ZW4gZGF0YSBhcnJheVxyXG4gKiBAcGFyYW0gZ2wgV2ViR0wgY29udGV4dFxyXG4gKiBAcGFyYW0gZGF0YSBkYXRhIHRvIHN0b3JlIGluIGJ1ZmZlclxyXG4gKiBAcmV0dXJucyBXZWJHTCBidWZmZXIgc3RvcmUgZ2l2ZW4gZGF0YVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFycmF5QnVmZmVyKGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0LCBkYXRhOiBGbG9hdDMyQXJyYXkpOiBXZWJHTEJ1ZmZlciB7XHJcbiAgICBjb25zdCBidWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKVxyXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlcilcclxuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBkYXRhLCBnbC5EWU5BTUlDX0RSQVcpXHJcbiAgICByZXR1cm4gYnVmZmVyXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBleHRyYWN0IGF0dHJpYnV0ZXMgZnJvbSBhIHNoYWRlciBzcmluZ1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gc2hhZGVyU3RyXHJcbiAqIEByZXR1cm5zIHtSZW5kZXJBdHRyaWJ1dGVbXX0gYXR0cmlidXRlcyBhcnJheVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RBdHRyaWJ1dGVzRnJvbVNoYWRlcihzaGFkZXJTdHI6IHN0cmluZykge1xyXG4gICAgY29uc3QgbWF0Y2hpbmdzID0gc2hhZGVyU3RyLm1hdGNoKC9pblxccy4qOy9nKVxyXG4gICAgcmV0dXJuIG1hdGNoaW5ncy5tYXAoKG1hdGNoLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBtYXRjaC5zcGxpdCgnICcpWzJdLnNsaWNlKDAsIC0xKVxyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBtYXRjaC5zcGxpdCgnICcpWzFdXHJcbiAgICAgICAgbGV0IHNpemUgPSAxXHJcbiAgICAgICAgaWYgKHR5cGUuc2xpY2UoMCwgMykgPT09ICd2ZWMnKSB7XHJcbiAgICAgICAgICAgIHNpemUgPSBOdW1iZXIodHlwZS5zbGljZSgtMSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpc0J1aWxkSW4gPSBmYWxzZVxyXG4gICAgICAgIGlmIChuYW1lID09PSAnaW5WZXJ0ZXhQb3MnKSB7XHJcbiAgICAgICAgICAgIGlzQnVpbGRJbiA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgc2l6ZSxcclxuICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgIGlzQnVpbGRJblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBlbmNvZGUgYSByZW5kZXIgaWQgYXMgY29sb3IgdG8gcGFzcyBpbiB0ZXh0dXJlXHJcbiAqIEBwYXJhbSBpZCByZW5kZXIgaWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVSZW5kZXJJZChpZDogbnVtYmVyKTogQ29sb3Ige1xyXG4gICAgLy8gc3BsaXQgYSBsYXJnZSBudW1iZXIgYnkgOC1iaXQ6IGlkID0gY29uY2F0KGEsIGIsIGcsIHIpLCBhbmQgbm9ybWFsaXplIHRoZW0gaW50byAoMCwgMSlcclxuICAgIGNvbnN0IHIgPSAoaWQgJiAyNTUpIC8gMjU1LjBcclxuICAgIGNvbnN0IGcgPSAoKGlkID4+IDgpICYgMjU1KSAvIDI1NS4wXHJcbiAgICBjb25zdCBiID0gKChpZCA+PiAxNikgJiAyNTUpIC8gMjU1LjBcclxuICAgIGNvbnN0IGEgPSAoKGlkID4+IDI0KSAmIDI1NSkgLyAyNTUuMFxyXG4gICAgcmV0dXJuIHsgciwgZywgYiwgYSB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBkZWNvZGUgcGl4ZWwgdmFsdWUgdG8gbnVtYmVyXHJcbiAqIEBwYXJhbSBwaXhlbFZhbCBhIHBpeGVsJ3MgdmFsdWUgb24gdGV4dHVyZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZVJlbmRlcklkKHBpeGVsVmFsOiBVaW50OEFycmF5KTogbnVtYmVyIHtcclxuICAgIC8vIHBhcnNlIG5vcm1hbGl6ZWQgcGFydHMgb2YgaWQgbnVtYmVyLCBiaXQgc2hpZnQgdG8gb3JpZ2luIHBvc2l0aW9uIGFuZCBjb25jYXRcclxuICAgIGNvbnN0IHJlbmRlcklkID0gcGl4ZWxWYWxbMF0gfCAocGl4ZWxWYWxbMV0gPDwgOCkgfCAocGl4ZWxWYWxbMl0gPDwgMTYpIHwgKHBpeGVsVmFsWzNdIDw8IDI0KVxyXG4gICAgcmV0dXJuIHJlbmRlcklkXHJcbn1cclxuIiwiLyoqXHJcbiAqIFRlc3Qgd2hldGhlciBhIHN0cmluZyBjYW4gYmUgYSB2YWxpZCBpZCBvZiBhIE5vZGUuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZTogdGhlIHN0cmluZyB0b2JlIHRlc3RlZFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkSWQodmFsdWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5sZW5ndGggPiAwXHJcbn1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgSmlhY2hlbmcgUGFuIDxqYWNraWVhbnhpc0BnbWFpbC5jb20+XHJcbiAqIEBkZXNjcmlwdGlvbiBNYXAyIGlzIGEgTWFwIGRhdGEgc3RydWN0dXJlIHdoaWNoIG1hcHMgdHdvIGtleXMgdG8gb25lIHZhbHVlLlxyXG4gKiBAVXNhZ2Ugc2FtZSB0byBNYXAgZGF0YSBzdHJ1Y3R1cmUgaW4gRVM2LlxyXG4gKiBAZGVwZW5kZW5jZXMgTm9uZVxyXG4gKi9cclxuXHJcbmNvbnN0IEpPSU4gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDcpXHJcbmNvbnN0IGlzS2V5cyA9IChrZXlzOiBBcnJheTxzdHJpbmc+KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIGtleXMgaW5zdGFuY2VvZiBBcnJheSAmJlxyXG4gICAgICAgIGtleXMubGVuZ3RoID09PSAyICYmXHJcbiAgICAgICAga2V5cy5ldmVyeSgoa2V5KSA9PiBrZXkgIT09IHVuZGVmaW5lZCAmJiBrZXkgIT09IG51bGwpXHJcbiAgICApXHJcbn1cclxuY2xhc3MgTWFwMiB7XHJcbiAgICBwcml2YXRlIG1hcCA9IG5ldyBNYXAoKVxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGVudHJpZXM/OiBBcnJheTxBcnJheTxhbnk+Pikge1xyXG4gICAgICAgIGlmIChlbnRyaWVzIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IFtrZXksIHZhbHVlXSA9IGVudHJ5XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldChrZXksIHZhbHVlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgc2l6ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXAuc2l6ZVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGUoa2V5czogQXJyYXk8c3RyaW5nPikge1xyXG4gICAgICAgIGlmIChpc0tleXMoa2V5cykpIHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0ga2V5cy5qb2luKEpPSU4pXHJcbiAgICAgICAgICAgIGNvbnN0IGtleV8gPSBrZXlzWzFdICsgSk9JTiArIGtleXNbMF1cclxuICAgICAgICAgICAgbGV0IG1hcCA9IHRoaXMubWFwXHJcbiAgICAgICAgICAgIG1hcC5kZWxldGUoa2V5KVxyXG4gICAgICAgICAgICBtYXAuZGVsZXRlKGtleV8pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQoa2V5czogQXJyYXk8c3RyaW5nPiwgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIGlmIChpc0tleXMoa2V5cykpIHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0ga2V5cy5qb2luKEpPSU4pXHJcbiAgICAgICAgICAgIGNvbnN0IGtleV8gPSBrZXlzWzFdICsgSk9JTiArIGtleXNbMF1cclxuICAgICAgICAgICAgbGV0IG1hcCA9IHRoaXMubWFwXHJcbiAgICAgICAgICAgIGlmICghbWFwLmhhcyhrZXlfKSkge1xyXG4gICAgICAgICAgICAgICAgbWFwLnNldChrZXksIHZhbHVlKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWFwLnNldChrZXlfLCB2YWx1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoa2V5czogQXJyYXk8c3RyaW5nPikge1xyXG4gICAgICAgIGlmIChpc0tleXMoa2V5cykpIHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0ga2V5cy5qb2luKEpPSU4pXHJcbiAgICAgICAgICAgIGNvbnN0IGtleV8gPSBrZXlzWzFdICsgSk9JTiArIGtleXNbMF1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFwLmdldChrZXkpIHx8IHRoaXMubWFwLmdldChrZXlfKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhcyhrZXlzOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICAgICAgaWYgKGlzS2V5cyhrZXlzKSkge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBrZXlzLmpvaW4oSk9JTilcclxuICAgICAgICAgICAgY29uc3Qga2V5XyA9IGtleXNbMV0gKyBKT0lOICsga2V5c1swXVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXAuaGFzKGtleSkgfHwgdGhpcy5tYXAuaGFzKGtleV8pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3JFYWNoKGZ1bmM6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5tYXAuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQga2V5cyA9IGtleS5zcGxpdChKT0lOKVxyXG4gICAgICAgICAgICBmdW5jKHZhbHVlLCBrZXlzLCB0aGlzKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVudHJpZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLm1hcC5lbnRyaWVzKCldLm1hcCgoZW50cnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gZW50cnlbMF0uc3BsaXQoSk9JTilcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlbnRyeVsxXVxyXG4gICAgICAgICAgICByZXR1cm4gW2tleSwgdmFsdWVdXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMga2V5cygpIHtcclxuICAgICAgICBsZXQga2V5cyA9IFsuLi50aGlzLm1hcC5rZXlzKCldXHJcbiAgICAgICAgcmV0dXJuIGtleXMubWFwKChrZXkpID0+IGtleS5zcGxpdChKT0lOKSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFsdWVzKCkge1xyXG4gICAgICAgIHJldHVybiBbLi4udGhpcy5tYXAudmFsdWVzKCldXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcDJcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XHJcbiAqIEBkZXNjcmlwdGlvbiBzb21lIHV0aWxpdHkgZnVuY3Rpb25zXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgTm9kZUxpbmtEYXRhIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnXHJcblxyXG4vKipcclxuICogZ2l2ZW4gYSBncmFwaCBkYXRhIHdpdGggcG9zaXRpb24sIHJldHVybiBhIGNvcHkgb2YgZ3JhcGgsIHdpdGggcG9zaXRpb24gdHJhbnNmb3JtZWQgdG8gY2VudGVyIG9mIGdpdmVuIHNpemVcclxuICogQHBhcmFtIGdyYXBoIG5vZGUgbGluayBncmFwaCBkYXRhXHJcbiAqIEBwYXJhbSBzaXplIGdyYXBoIHNpemUgKG1heCh3aWR0aCwgaGVpZ2h0KSlcclxuICogQHBhcmFtIGNlbnRlclggeCBwb3Mgb2YgZ3JhcGggY2VudGVyXHJcbiAqIEBwYXJhbSBjZW50ZXJZIHkgcG9zIG9mIGdyYXBoIGNlbnRlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybUdyYXBoUG9zaXRpb24oXHJcbiAgICBncmFwaDogTm9kZUxpbmtEYXRhLFxyXG4gICAgc2l6ZTogbnVtYmVyLFxyXG4gICAgY2VudGVyWDogbnVtYmVyLFxyXG4gICAgY2VudGVyWTogbnVtYmVyXHJcbikge1xyXG4gICAgY29uc3QgdGFyZ2V0R3JhcGg6IE5vZGVMaW5rRGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZ3JhcGgpKVxyXG4gICAgY29uc3QgeHMgPSB0YXJnZXRHcmFwaC5ub2Rlcy5tYXAoKG5vZGUpID0+IG5vZGUueClcclxuICAgIGNvbnN0IHlzID0gdGFyZ2V0R3JhcGgubm9kZXMubWFwKChub2RlKSA9PiBub2RlLnkpXHJcbiAgICBjb25zdCB4TWluID0gTWF0aC5taW4oLi4ueHMpXHJcbiAgICBjb25zdCB4TWF4ID0gTWF0aC5tYXgoLi4ueHMpXHJcbiAgICBjb25zdCB5TWluID0gTWF0aC5taW4oLi4ueXMpXHJcbiAgICBjb25zdCB5TWF4ID0gTWF0aC5tYXgoLi4ueXMpXHJcblxyXG4gICAgY29uc3Qgc3VtID0gKGFjYzogbnVtYmVyLCB4OiBudW1iZXIpID0+IGFjYyArIHhcclxuICAgIGNvbnN0IHhNaWQgPSB4cy5yZWR1Y2Uoc3VtKSAvIHhzLmxlbmd0aFxyXG4gICAgY29uc3QgeU1pZCA9IHlzLnJlZHVjZShzdW0pIC8geXMubGVuZ3RoXHJcblxyXG4gICAgdGFyZ2V0R3JhcGgubm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgIG5vZGUueCA9ICgobm9kZS54IC0geE1pZCkgLyAoeE1heCAtIHhNaW4pKSAqIHNpemUgKyBjZW50ZXJYXHJcbiAgICAgICAgbm9kZS55ID0gKChub2RlLnkgLSB5TWlkKSAvICh5TWF4IC0geU1pbikpICogc2l6ZSArIGNlbnRlcllcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHRhcmdldEdyYXBoXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
