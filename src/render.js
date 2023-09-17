import { projects } from "./index";
import { getActiveProject } from "./appLogic";
import { getDynamicEventListeners } from "./domLoader";
import { formatDistance, isToday, parseISO } from 'date-fns'
import iconPlusSquare from './plus-square.svg';
import iconCheckCircle from './check-circle.svg';
import iconCircle from './circle.svg';
import iconEdit from './edit.svg';
import iconTrash from './trash-2.svg';

function renderPage() {
    renderSidebar();
    renderMainHeader();
    renderMain();
    getDynamicEventListeners();
    console.log("Page rendered...");
}

const sideMenu = document.querySelector(".side-menu");
const mainHeader = document.querySelector(".main-header");
const mainTodos = document.querySelector(".main-todos");
const addTodoButton = document.createElement("div");

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
    addProjectButton.innerHTML = `<img src="${iconPlusSquare}">Add Project`;
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

        const todoIcon = document.createElement("div");
        todoIcon.classList.add("todo-icon");
        todoDiv.appendChild(todoIcon);
        todoIcon.innerHTML = `<img src="${iconCircle}">`;

        const todoTitle = document.createElement("div");
        todoTitle.classList.add("todo-title");
        todoDiv.appendChild(todoTitle);
        todoTitle.innerText = todo.title;

        const todoDescription = document.createElement("div");
        todoDescription.classList.add("todo-description");
        todoDiv.appendChild(todoDescription);
        todoDescription.innerText = todo.description;

        const todoDueDate = document.createElement("div");
        todoDueDate.classList.add("todo-due-date");
        todoDiv.appendChild(todoDueDate);
        if (isToday(parseISO(todo.dueDate))) todoDueDate.innerText = "today";
        else todoDueDate.innerText = formatDistance(new Date(parseISO(todo.dueDate)), new Date(), { addSuffix: true });

        const todoEdit = document.createElement("div");
        todoEdit.classList.add("todo-edit");
        todoDiv.appendChild(todoEdit);
        todoEdit.innerHTML = `<img src="${iconEdit}">`;

        const todoTrash = document.createElement("div");
        todoTrash.classList.add("todo-trash");
        todoDiv.appendChild(todoTrash);
        todoTrash.innerHTML = `<img src="${iconTrash}">`;

        if (todo.done === true) {
            todoIcon.innerHTML = `<img src="${iconCheckCircle}">`;
            todoDiv.classList.add("done");
        }
    });

    addTodoButton.classList.add("add-todo-button");
    mainTodos.appendChild(addTodoButton);
    addTodoButton.innerHTML = `<img src="${iconPlusSquare}">Add Todo`;
    addTodoButton.style.display = "flex";
}

export { renderPage };