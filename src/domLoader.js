import { projects } from "./index";
import { todoFactory, projectFactory } from "./appLogic";

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
    projects.forEach(project => {
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
    projects.forEach(project => {
        if (project.active) {
            headerTitle.innerText = project.name;
            headerDescription.innerText = project.description;
        }
    });
}

function renderMain() {
    projects[getActiveProject()].todos.forEach(todo => {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo-container");
        mainTodos.appendChild(todoDiv);

        const todoTitle = document.createElement("div");
        todoTitle.classList.add("todo-title");
        todoDiv.appendChild(todoTitle);
        todoTitle.innerText = todo.title;

        const todoDescription = document.createElement("div");
        todoDescription.classList.add("todo-description");
        todoDiv.appendChild(todoDescription);
        todoDescription.innerText = todo.description;
    });

    addTodoButton.classList.add("add-todo-button");
    mainTodos.appendChild(addTodoButton);
    addTodoButton.innerHTML = `<img src="plus-square.svg">Add Todo`;
}

function getActiveProject() {
    let index = 0;
    projects.forEach((project, i) => {
        if (project.active) index = i;
    });
    return index;
}

function getDynamicEventListeners() {
    const projectButtons = document.querySelectorAll(".project");
    projectButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            clearActiveProjects();
            projects[index].active = true;
            clearWebsite();
            renderPage();
        });
    });

    const addProjectButton = document.querySelector(".add-project-button");
    addProjectButton.addEventListener("click", () => {
        popup.style.display = "flex";
        popupContainer.style.display = "flex";
    });

    const addTodoButton = document.querySelector(".add-todo-button");
    addTodoButton.addEventListener("click", () => {
        addTodoButton.style.display = "none";
        renderAddTodoDiv();
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
            projects.push(projectFactory(titleInput.value, descriptionInput.value));
            popup.style.display = "none";
            popupContainer.style.display = "none";
            clearInputs();
            clearWebsite();
            renderPage();
        }
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
        addTodoButton.style.display = "block";
        addTodoDiv.style.display = "none";
    });

    addTodoAddButton.addEventListener("click", () => {
        const todoTitleInput = document.querySelector("#todo-title");
        const todoDescriptionInput = document.querySelector("#todo-description");
        if (todoTitleInput.value === "") alert("Please enter a title!");
        else {
            addTodoButton.style.display = "block";
            addTodoDiv.style.display = "none";
            addTodo(todoTitleInput.value, todoDescriptionInput.value);
        }
    });
}

function clearActiveProjects() {
    projects.forEach(project => {
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
    projects[getActiveProject()].todos.push(todoFactory(name, description, null, null));
}

console.log("domLoader.js has been executed");

export { renderPage, getStaticEventListeners };