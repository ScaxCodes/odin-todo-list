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
/* harmony export */   projectFactory: () => (/* binding */ projectFactory),
/* harmony export */   todoFactory: () => (/* binding */ todoFactory)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


function todoFactory(title, description, dueDate, priority) {
    console.log("Todo added...");
    return { title, description, dueDate, priority, done: false };
}

function projectFactory(name, description) {
    console.log("Project added...");
    return { name, description, active: false, todos: [] };
    // return { name, description, todos: [], };
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
/* harmony export */   getStaticEventListeners: () => (/* binding */ getStaticEventListeners),
/* harmony export */   renderPage: () => (/* binding */ renderPage)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appLogic */ "./src/appLogic.js");



const sideMenu = document.querySelector(".side-menu");
const mainHeader = document.querySelector(".main-header");
const mainTodos = document.querySelector(".main-todos");
const popup = document.querySelector(".popup");
const popupContainer = document.querySelector(".popup-container");
const titleInput = document.querySelector("#project-title");
const descriptionInput = document.querySelector("#project-description");

const addTodoButton = document.createElement("div");

// function addListeners() {
//     addProjectButton.addEventListener("click", addProject);
//     console.log("Event listeners added...");
// }

function renderPage() {
    renderSidebar();
    renderMainHeader();
    renderMain();
    getDynamicEventListeners();
    console.log("Page rendered...");
}

function renderSidebar() {
    _index__WEBPACK_IMPORTED_MODULE_0__.projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        if (project.active) projectDiv.classList.add("active");
        sideMenu.appendChild(projectDiv);
        projectDiv.innerText = project.name;
    });

    const addProjectButton = document.createElement("div");
    addProjectButton.classList.add("add-project-button");
    sideMenu.appendChild(addProjectButton);
    addProjectButton.innerHTML = `<img src="plus-square.svg">Add Project`;
}

function renderMainHeader() {
    const headerTitle = document.createElement("div");
    mainHeader.appendChild(headerTitle);
    const headerDescription = document.createElement("div");
    mainHeader.appendChild(headerDescription);
    _index__WEBPACK_IMPORTED_MODULE_0__.projects.forEach(project => {
        if (project.active) {
            headerTitle.innerText = project.name;
            headerDescription.innerText = project.description;
        }
    });
}

function renderMain() {
    _index__WEBPACK_IMPORTED_MODULE_0__.projects[getActiveProject()].todos.forEach(todo => {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo-container");
        mainTodos.appendChild(todoDiv);

        const todoIcon = document.createElement("div");
        todoIcon.classList.add("todo-icon");
        todoDiv.appendChild(todoIcon);
        todoIcon.innerHTML = `<img src="circle.svg">`;

        const todoTitle = document.createElement("div");
        todoTitle.classList.add("todo-title");
        todoDiv.appendChild(todoTitle);
        todoTitle.innerText = todo.title;

        const todoDescription = document.createElement("div");
        todoDescription.classList.add("todo-description");
        todoDiv.appendChild(todoDescription);
        todoDescription.innerText = todo.description;

        if (todo.done === true) {
            todoIcon.innerHTML = `<img src="check-circle.svg">`;
            todoDiv.classList.add("done");
        }
    });

    addTodoButton.classList.add("add-todo-button");
    mainTodos.appendChild(addTodoButton);
    addTodoButton.innerHTML = `<img src="plus-square.svg">Add Todo`;
}

function getActiveProject() {
    let index = 0;
    _index__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project, i) => {
        if (project.active) index = i;
    });
    return index;
}

function getDynamicEventListeners() {
    const projectButtons = document.querySelectorAll(".project");
    projectButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            clearActiveProjects();
            _index__WEBPACK_IMPORTED_MODULE_0__.projects[index].active = true;
            clearWebsite();
            renderPage();
        });
    });

    const addProjectButton = document.querySelector(".add-project-button");
    addProjectButton.addEventListener("click", () => {
        popup.style.display = "flex";
        popupContainer.style.display = "flex";
    });

    const todoButtons = document.querySelectorAll(".todo-container");
    todoButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            if (_index__WEBPACK_IMPORTED_MODULE_0__.projects[getActiveProject()].todos[index].done === false) {
                _index__WEBPACK_IMPORTED_MODULE_0__.projects[getActiveProject()].todos[index].done = true;
                console.log("Todo done...");
                clearWebsite();
                renderPage();
            }
        });
    });

}

function getStaticEventListeners() {
    const cancelPopupButton = document.querySelector(".cancel-button");
    cancelPopupButton.addEventListener("click", () => {
        popup.style.display = "none";
        popupContainer.style.display = "none";     
    });

    const popupAddProjectButton = document.querySelector(".add-button");
    popupAddProjectButton.addEventListener("click", () => {
        if (!titleInput.value) alert("Please enter a title");
        else {
            _index__WEBPACK_IMPORTED_MODULE_0__.projects.push((0,_appLogic__WEBPACK_IMPORTED_MODULE_1__.projectFactory)(titleInput.value, descriptionInput.value));
            popup.style.display = "none";
            popupContainer.style.display = "none";
            clearInputs();
            clearWebsite();
            renderPage();
        }
    });

    const addTodoButton = document.querySelector(".add-todo-button");
    addTodoButton.addEventListener("click", () => {
        addTodoButton.style.display = "none";
        renderAddTodoDiv();
    });
}

// Plus event listener, bad design?
// addTodoButton global, as its needed in various functions, bad design?
function renderAddTodoDiv() {
    const addTodoDiv = document.createElement("div");
    addTodoDiv.classList.add("add-todo-container");
    mainTodos.appendChild(addTodoDiv);
    
    const addTodoInputs = document.createElement("div");
    addTodoInputs.classList.add("add-todo-inputs");
    addTodoDiv.appendChild(addTodoInputs)
    addTodoInputs.innerHTML = `
    <input type="text" id="todo-title" placeholder="Enter todo name">
    <input type="text" id="todo-description" placeholder="Enter description">
    `

    const addTodoAddButton = document.createElement("div");
    addTodoAddButton.classList.add("add-todo-add-button");
    addTodoDiv.appendChild(addTodoAddButton);
    addTodoAddButton.innerText = "Add Todo";

    const addTodoCancelButton = document.createElement("div");
    addTodoCancelButton.classList.add("add-todo-cancel-button");
    addTodoDiv.appendChild(addTodoCancelButton);
    addTodoCancelButton.innerText = "Cancel";

    // See comment above
    addTodoCancelButton.addEventListener("click", () => {
        addTodoButton.style.display = "flex";
        // addTodoDiv.style.display = "none";
        clearWebsite();
        renderPage();
    });

    addTodoAddButton.addEventListener("click", () => {
        const todoTitleInput = document.querySelector("#todo-title");
        const todoDescriptionInput = document.querySelector("#todo-description");
        if (todoTitleInput.value === "") alert("Please enter a title!");
        else {
            addTodoButton.style.display = "block";
            addTodoDiv.style.display = "none";
            addTodo(todoTitleInput.value, todoDescriptionInput.value);
            clearWebsite();
            renderPage();
        }
    });
}

function clearActiveProjects() {
    _index__WEBPACK_IMPORTED_MODULE_0__.projects.forEach(project => {
        project.active = false;
    });
}

function clearInputs() {
    titleInput.value = "";
    descriptionInput.value = "";
}

// TODO: Make sideMenu logic same as mainHeader (clear sideHeader instead of whole sideMenu)
function clearWebsite() {
    sideMenu.innerHTML = `
        <div class="side-header">
            <h2>Projects</h2>
        </div>
    `;
    mainHeader.innerHTML = "";
    mainTodos.innerHTML = "";
}

function addTodo(name, description) {
    _index__WEBPACK_IMPORTED_MODULE_0__.projects[getActiveProject()].todos.push((0,_appLogic__WEBPACK_IMPORTED_MODULE_1__.todoFactory)(name, description, null, null));
}

console.log("domLoader.js has been executed");



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projects: () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appLogic */ "./src/appLogic.js");
/* harmony import */ var _domLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domLoader */ "./src/domLoader.js");



// Create default project
const projects = [];

projects.push((0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.projectFactory)("Work", "Well, I just like to work"));
projects[0].active = true;
projects[0].todos.push((0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.todoFactory)("Default Todo", "Enter some description here", "02.09.2023", null));
projects[0].todos.push((0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.todoFactory)("Another Default One", "I love Hackerhouse Berlin", "02.09.2023", null));

projects.push((0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.projectFactory)("Hobbies", "I do have hobbies though"));
projects.push((0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.projectFactory)("Car", "Always broken"));

(0,_domLoader__WEBPACK_IMPORTED_MODULE_1__.renderPage)();
(0,_domLoader__WEBPACK_IMPORTED_MODULE_1__.getStaticEventListeners)();

console.log(projects);



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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map