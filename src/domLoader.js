import { projects } from "./index";
import { todoFactory, projectFactory } from "./appLogic";

const sideMenu = document.querySelector(".side-menu");
const mainHeader = document.querySelector(".main-header");
const mainTodos = document.querySelector(".main-todos");
const popup = document.querySelector(".popup");
const popupContainer = document.querySelector(".popup-container");
const titleInput = document.querySelector("#project-title");
const descriptionInput = document.querySelector("#project-description");

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
    projects[0].todos.forEach(todo => {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo-container");
        mainTodos.appendChild(todoDiv)

        const todoTitle = document.createElement("div");
        todoTitle.classList.add("todo-title");
        todoDiv.appendChild(todoTitle);
        todoTitle.innerText = todo.title;

        const todoDescription = document.createElement("div");
        todoDescription.classList.add("todo-description");
        todoDiv.appendChild(todoDescription);
        todoDescription.innerText = todo.description;
    });

    const addTodoButton = document.createElement("div");
    addTodoButton.classList.add("add-todo-button");
    mainTodos.appendChild(addTodoButton);
    addTodoButton.innerHTML = `<img src="plus-square.svg">Add Todo`;
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
}

function addProject() {

}

console.log("domLoader.js has been executed");

export { renderPage, getStaticEventListeners };