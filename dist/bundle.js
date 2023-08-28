/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/appLogic.js":
/*!*************************!*\
  !*** ./src/appLogic.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changePriority: () => (/* binding */ changePriority),
/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   todoFactory: () => (/* binding */ todoFactory)
/* harmony export */ });
const projects = []

projects[0] = {
    name: "Default Project",
    todos: [],
}

const todoFactory = (title, description, dueDate, priority) => {
    const showTitle = () => console.log(title);
    console.log("Todo added...");
    return { title, description, dueDate, priority, showTitle }
}

const deleteTodo = (projectIndex, todoIndex) => {
    projects[projectIndex].todos.splice(todoIndex, 1);
    console.log("Todo deleted...");
    return projects[projectIndex];
}

const changePriority = (projectIndex, todoIndex, priority) => {
    projects[projectIndex].todos[todoIndex].priority = priority;
    console.log("Priority has been changed...");
    return projects[projectIndex];
}

console.log("appLogic.js has been executed");



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appLogic */ "./src/appLogic.js");




_appLogic__WEBPACK_IMPORTED_MODULE_0__.projects[0].todos.push((0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.todoFactory)(1,2,3,4));
_appLogic__WEBPACK_IMPORTED_MODULE_0__.projects[0].todos.push((0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.todoFactory)(5,6,7,8));

setTimeout(() => console.log(_appLogic__WEBPACK_IMPORTED_MODULE_0__.projects), 3000);

// setTimeout(() => deleteTodo(0,0), 6000);

// console.log(projects);

// changePriority(0,0,1);

// console.log(projects);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map