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

projects[1] = {
    name: "Hallo",
    todos: [],
}

const todoFactory = (title, description, dueDate, priority) => {
    // const showTitle = () => console.log(title);
    console.log("Todo added...");
    return { title, description, dueDate, priority }
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



/***/ }),

/***/ "./src/domLoader.js":
/*!**************************!*\
  !*** ./src/domLoader.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allFieldsFilled: () => (/* binding */ allFieldsFilled),
/* harmony export */   displayTodo: () => (/* binding */ displayTodo),
/* harmony export */   getInputs: () => (/* binding */ getInputs),
/* harmony export */   initPage: () => (/* binding */ initPage)
/* harmony export */ });
/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appLogic */ "./src/appLogic.js");


let addProjectButton = document.querySelector(".sidebar button");
// let addTodoButton = document.querySelector(".todo-box button");
let sidebar = document.querySelector(".sidebar");
let sidebarList = document.querySelector(".sidebar ul")
let todoList = document.querySelector(".todo-list ul");

let projectField = document.querySelector("#project");
let titleField = document.querySelector("#title");
let descriptionField = document.querySelector("#description");
let dueDateField = document.querySelector("#due-date");
let priorityField = document.querySelector("#priority");

// function selectElementsAgain() {
//     addProjectButton = document.querySelector(".sidebar button");
//     addTodoButton = document.querySelector(".todo-box button");
//     sidebar = document.querySelector(".sidebar");
//     todoList = document.querySelector(".todo-list");
//     console.log("Elements again selected...");
// }

function addListeners() {
    addProjectButton.addEventListener("click", addProject);
    // addTodoButton.addEventListener("click", addTodo);
    console.log("Event listeners added...");
}

function initPage() {
    // selectElementsAgain();
    addListeners();
    renderDropdownMenu();
    console.log("Page initialized...");
}

function addProject() {
    const newProject = document.createElement("li");
    sidebarList.appendChild(newProject);
    newProject.textContent = prompt("Enter project name");
    console.log("Project added...");
}

function displayTodo() {
    const newTodo = document.createElement("li");
    todoList.appendChild(newTodo);
    newTodo.textContent = _appLogic__WEBPACK_IMPORTED_MODULE_0__.projects[0].todos[getTodoLength() - 1].title + ", due Date: " + _appLogic__WEBPACK_IMPORTED_MODULE_0__.projects[0].todos[getTodoLength() - 1].dueDate;
    addDeleteButton(newTodo);
    clearForm();
}

function addDeleteButton(newTodo) {
    newTodo.innerHTML += " " + `<button class="delete">x</button>`;
}

function getTodoLength() {
    return _appLogic__WEBPACK_IMPORTED_MODULE_0__.projects[0].todos.length;
}

function allFieldsFilled() {
    if (titleField.value && descriptionField.value && dueDateField.value && priorityField.value) return true;
    else false;
}

function getInputs() {
    return { projectField, titleField, descriptionField, dueDateField, priorityField };
}

function clearForm() {
    titleField.value = "";
    descriptionField.value = "";
    dueDateField.value = "";
    priorityField.value = "";
    console.log("Fields cleared...")
}

function renderDropdownMenu() {
    const selectElement = document.querySelector("select");
    let options = "";

    for (let i = 0; i < _appLogic__WEBPACK_IMPORTED_MODULE_0__.projects.length; i++) {
        options += `<option value="${_appLogic__WEBPACK_IMPORTED_MODULE_0__.projects[i].name}">${_appLogic__WEBPACK_IMPORTED_MODULE_0__.projects[i].name}</option>`
    }

    selectElement.innerHTML = options;
}

console.log("domLoader.js has been executed");



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
/* harmony import */ var _domLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domLoader */ "./src/domLoader.js");



let addProjectButton = document.querySelector(".sidebar button");
let addTodoButton = document.querySelector(".todo-box button");
let sidebar = document.querySelector(".sidebar");
let sidebarList = document.querySelector(".sidebar ul")
let todoList = document.querySelector(".todo-list ul");

let projectField = document.querySelector("#project");
let titleField = document.querySelector("#title");
let descriptionField = document.querySelector("#description");
let dueDateField = document.querySelector("#due-date");
let priorityField = document.querySelector("#priority");

addTodoButton.addEventListener("click", () => {
    // if (allFieldsFilled()) {
        createTodo();
        (0,_domLoader__WEBPACK_IMPORTED_MODULE_1__.displayTodo)();
    // }
    // else alert("Please fill all fields to add a todo!");
});

function createTodo() {
    _appLogic__WEBPACK_IMPORTED_MODULE_0__.projects[0].todos.push(
        (0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.todoFactory)(
            titleField.value,
            descriptionField.value,
            dueDateField.value,
            priorityField.value
        )
    );
    console.log(_appLogic__WEBPACK_IMPORTED_MODULE_0__.projects[0]);
}

(0,_domLoader__WEBPACK_IMPORTED_MODULE_1__.initPage)();

console.log(_appLogic__WEBPACK_IMPORTED_MODULE_0__.projects);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map