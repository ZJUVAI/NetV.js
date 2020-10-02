/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./test/index.ts":
/*!***********************!*\
  !*** ./test/index.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const toc_1 = __webpack_require__(/*! ./utils/toc */ "./test/utils/toc.ts");
document.write(`<h1>Test Report of NetV.js@v1.0</h1>`);
const toc = toc_1.loadTestCasesToC('./');
// generate table of contents
let result = '';
result += `<ul>`;
writeChildren(toc.children);
result += `</ul>`;
document.write(result);
function writeChildren(children) {
    children.forEach((child) => {
        const title = child.url.replace(/.*\./, '');
        result += `<li><a href="${child.url}" id="${title}">${title}</a>`;
        if (child.children.length > 0) {
            result += `<ul>`;
            writeChildren(child.children);
            result += `</ul>`;
        }
        result += `</li>`;
    });
}
// import test cases dynamically
function loadChildrenJS(children) {
    children.forEach((child) => {
        // loadChildrenJS()
    });
}


/***/ }),

/***/ "./test/utils/toc.ts":
/*!***************************!*\
  !*** ./test/utils/toc.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.loadTestCasesToC = void 0;
/**
 * @description: return a tree structure which describe the table of test cases contents
 * @param {string} filePath
 * @returns a ToC structure: {
 *   title: "xxx",
 *   children: [{
 *     title: "xxxx",
 *     children: [...]
 *   },
 *   ...
 * ]}
 */
function loadTestCasesToC(filePath) {
    /**
     * @description: try to retrieve the files contained under the filePath (not recursive)
     * @param {string} filePath
     * @returns files contained in the direct child directory
     */
    function loadDirectory(filePath) {
        let result = null;
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', filePath, false);
        xmlhttp.send();
        if (xmlhttp.status === 200) {
            result = xmlhttp.responseText.match(/<a.*\/a>/g);
        }
        if (result) {
            return result.map((item) => {
                return item
                    .replace(/<a\shref=\".*\">/g, '')
                    .replace(/<\/a>/g, '')
                    .replace(/&amp;/g, '&')
                    .replace(/&nbps;/g, ' ');
            });
        }
        else {
            return [];
        }
    }
    function filterCaseDirectories(paths) {
        return paths.filter((path) => {
            // filter out directory begin with 'case.xxx'
            if (path[path.length - 1] === '/') {
                // means it is a directory
                if (path.slice(0, 5) === 'case.') {
                    return true;
                }
            }
            return false;
        });
    }
    let caseDirectories = filterCaseDirectories(loadDirectory(filePath));
    return {
        url: filePath,
        children: caseDirectories.map((caseDir) => loadTestCasesToC(filePath + caseDir))
    };
}
exports.loadTestCasesToC = loadTestCasesToC;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi90ZXN0L3V0aWxzL3RvYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqRkEsNEVBQThDO0FBRTlDLFFBQVEsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLENBQUM7QUFFdEQsTUFBTSxHQUFHLEdBQUcsc0JBQWdCLENBQUMsSUFBSSxDQUFDO0FBRWxDLDZCQUE2QjtBQUM3QixJQUFJLE1BQU0sR0FBRyxFQUFFO0FBRWYsTUFBTSxJQUFJLE1BQU07QUFDaEIsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7QUFDM0IsTUFBTSxJQUFJLE9BQU87QUFFakIsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFFdEIsU0FBUyxhQUFhLENBQUMsUUFBUTtJQUMzQixRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDdkIsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztRQUMzQyxNQUFNLElBQUksZ0JBQWdCLEtBQUssQ0FBQyxHQUFHLFNBQVMsS0FBSyxLQUFLLEtBQUssTUFBTTtRQUNqRSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMzQixNQUFNLElBQUksTUFBTTtZQUNoQixhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUM3QixNQUFNLElBQUksT0FBTztTQUNwQjtRQUNELE1BQU0sSUFBSSxPQUFPO0lBQ3JCLENBQUMsQ0FBQztBQUNOLENBQUM7QUFFRCxnQ0FBZ0M7QUFDaEMsU0FBUyxjQUFjLENBQUMsUUFBUTtJQUM1QixRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDdkIsbUJBQW1CO0lBQ3ZCLENBQUMsQ0FBQztBQUNOLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0Q7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxTQUFnQixnQkFBZ0IsQ0FBQyxRQUFnQjtJQUM3Qzs7OztPQUlHO0lBQ0gsU0FBUyxhQUFhLENBQUMsUUFBZ0I7UUFDbkMsSUFBSSxNQUFNLEdBQUcsSUFBSTtRQUNqQixJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQWMsRUFBRTtRQUNsQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7UUFDZCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO1lBQ3hCLE1BQU0sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7U0FDbkQ7UUFDRCxJQUFJLE1BQU0sRUFBRTtZQUNSLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUN2QixPQUFPLElBQUk7cUJBQ04sT0FBTyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQztxQkFDaEMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7cUJBQ3JCLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO3FCQUN0QixPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQztZQUNoQyxDQUFDLENBQUM7U0FDTDthQUFNO1lBQ0gsT0FBTyxFQUFFO1NBQ1o7SUFDTCxDQUFDO0lBRUQsU0FBUyxxQkFBcUIsQ0FBQyxLQUFlO1FBQzFDLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQVksRUFBRSxFQUFFO1lBQ2pDLDZDQUE2QztZQUM3QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtnQkFDL0IsMEJBQTBCO2dCQUMxQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLE9BQU8sRUFBRTtvQkFDOUIsT0FBTyxJQUFJO2lCQUNkO2FBQ0o7WUFDRCxPQUFPLEtBQUs7UUFDaEIsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNELElBQUksZUFBZSxHQUFHLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwRSxPQUFPO1FBQ0gsR0FBRyxFQUFFLFFBQVE7UUFDYixRQUFRLEVBQUUsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxDQUFDO0tBQ25GO0FBQ0wsQ0FBQztBQTVDRCw0Q0E0Q0MiLCJmaWxlIjoidGVzdC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3Rlc3QvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBsb2FkSlMgfSBmcm9tICcuL3V0aWxzL2RvbSdcbmltcG9ydCB7IGxvYWRUZXN0Q2FzZXNUb0MgfSBmcm9tICcuL3V0aWxzL3RvYydcblxuZG9jdW1lbnQud3JpdGUoYDxoMT5UZXN0IFJlcG9ydCBvZiBOZXRWLmpzQHYxLjA8L2gxPmApXG5cbmNvbnN0IHRvYyA9IGxvYWRUZXN0Q2FzZXNUb0MoJy4vJylcblxuLy8gZ2VuZXJhdGUgdGFibGUgb2YgY29udGVudHNcbmxldCByZXN1bHQgPSAnJ1xuXG5yZXN1bHQgKz0gYDx1bD5gXG53cml0ZUNoaWxkcmVuKHRvYy5jaGlsZHJlbilcbnJlc3VsdCArPSBgPC91bD5gXG5cbmRvY3VtZW50LndyaXRlKHJlc3VsdClcblxuZnVuY3Rpb24gd3JpdGVDaGlsZHJlbihjaGlsZHJlbikge1xuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gY2hpbGQudXJsLnJlcGxhY2UoLy4qXFwuLywgJycpXG4gICAgICAgIHJlc3VsdCArPSBgPGxpPjxhIGhyZWY9XCIke2NoaWxkLnVybH1cIiBpZD1cIiR7dGl0bGV9XCI+JHt0aXRsZX08L2E+YFxuICAgICAgICBpZiAoY2hpbGQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGA8dWw+YFxuICAgICAgICAgICAgd3JpdGVDaGlsZHJlbihjaGlsZC5jaGlsZHJlbilcbiAgICAgICAgICAgIHJlc3VsdCArPSBgPC91bD5gXG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ICs9IGA8L2xpPmBcbiAgICB9KVxufVxuXG4vLyBpbXBvcnQgdGVzdCBjYXNlcyBkeW5hbWljYWxseVxuZnVuY3Rpb24gbG9hZENoaWxkcmVuSlMoY2hpbGRyZW4pIHtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAvLyBsb2FkQ2hpbGRyZW5KUygpXG4gICAgfSlcbn1cbiIsIi8qKlxuICogQGRlc2NyaXB0aW9uOiByZXR1cm4gYSB0cmVlIHN0cnVjdHVyZSB3aGljaCBkZXNjcmliZSB0aGUgdGFibGUgb2YgdGVzdCBjYXNlcyBjb250ZW50c1xuICogQHBhcmFtIHtzdHJpbmd9IGZpbGVQYXRoXG4gKiBAcmV0dXJucyBhIFRvQyBzdHJ1Y3R1cmU6IHtcbiAqICAgdGl0bGU6IFwieHh4XCIsXG4gKiAgIGNoaWxkcmVuOiBbe1xuICogICAgIHRpdGxlOiBcInh4eHhcIixcbiAqICAgICBjaGlsZHJlbjogWy4uLl1cbiAqICAgfSxcbiAqICAgLi4uXG4gKiBdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9hZFRlc3RDYXNlc1RvQyhmaWxlUGF0aDogc3RyaW5nKSB7XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uOiB0cnkgdG8gcmV0cmlldmUgdGhlIGZpbGVzIGNvbnRhaW5lZCB1bmRlciB0aGUgZmlsZVBhdGggKG5vdCByZWN1cnNpdmUpXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVQYXRoXG4gICAgICogQHJldHVybnMgZmlsZXMgY29udGFpbmVkIGluIHRoZSBkaXJlY3QgY2hpbGQgZGlyZWN0b3J5XG4gICAgICovXG4gICAgZnVuY3Rpb24gbG9hZERpcmVjdG9yeShmaWxlUGF0aDogc3RyaW5nKTogYW55W10ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbFxuICAgICAgICBsZXQgeG1saHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG4gICAgICAgIHhtbGh0dHAub3BlbignR0VUJywgZmlsZVBhdGgsIGZhbHNlKVxuICAgICAgICB4bWxodHRwLnNlbmQoKVxuICAgICAgICBpZiAoeG1saHR0cC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgcmVzdWx0ID0geG1saHR0cC5yZXNwb25zZVRleHQubWF0Y2goLzxhLipcXC9hPi9nKVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLzxhXFxzaHJlZj1cXFwiLipcXFwiPi9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLzxcXC9hPi9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyZhbXA7L2csICcmJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyZuYnBzOy9nLCAnICcpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaWx0ZXJDYXNlRGlyZWN0b3JpZXMocGF0aHM6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gcGF0aHMuZmlsdGVyKChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIC8vIGZpbHRlciBvdXQgZGlyZWN0b3J5IGJlZ2luIHdpdGggJ2Nhc2UueHh4J1xuICAgICAgICAgICAgaWYgKHBhdGhbcGF0aC5sZW5ndGggLSAxXSA9PT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gbWVhbnMgaXQgaXMgYSBkaXJlY3RvcnlcbiAgICAgICAgICAgICAgICBpZiAocGF0aC5zbGljZSgwLCA1KSA9PT0gJ2Nhc2UuJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9KVxuICAgIH1cbiAgICBsZXQgY2FzZURpcmVjdG9yaWVzID0gZmlsdGVyQ2FzZURpcmVjdG9yaWVzKGxvYWREaXJlY3RvcnkoZmlsZVBhdGgpKVxuICAgIHJldHVybiB7XG4gICAgICAgIHVybDogZmlsZVBhdGgsXG4gICAgICAgIGNoaWxkcmVuOiBjYXNlRGlyZWN0b3JpZXMubWFwKChjYXNlRGlyKSA9PiBsb2FkVGVzdENhc2VzVG9DKGZpbGVQYXRoICsgY2FzZURpcikpXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==