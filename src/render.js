import { projects } from "./index";
import { getActiveProject } from "./appLogic";
import { getDynamicEventListeners, getDynamicAddTodoListeners } from "./eventListeners";
import { mainTodos } from "./eventListeners";
import { formatDistance, isToday, parseISO } from 'date-fns'
import iconPlusSquare from './plus-square.svg';
import iconCheckCircle from './check-circle.svg';
import iconCircle from './circle.svg';
import iconEdit from './edit.svg';
import iconTrash from './trash-2.svg';

const sideMenu = document.querySelector(".side-menu");
const mainHeader = document.querySelector(".main-header");

function renderPage() {
    _renderSidebar();
    _renderMainHeader();
    _renderMain();
    getDynamicEventListeners();
    console.log("Page rendered...");
}

function _renderSidebar() {
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

function _renderMainHeader() {
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

function _renderMain() {
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

    const buttonAddTodo = document.createElement("div");
    buttonAddTodo.classList.add("add-todo-button");
    mainTodos.appendChild(buttonAddTodo);
    buttonAddTodo.innerHTML = `<img src="${iconPlusSquare}">Add Todo`;
    buttonAddTodo.style.display = "flex";
}

const popup = document.querySelector(".popup");
const popupContainer = document.querySelector(".popup-container");

function showPopup() {
    popup.style.display = "flex";
    popupContainer.style.display = "flex";
}

function hidePopup() {
    popup.style.display = "none";
    popupContainer.style.display = "none";   
}

function renderEditTodoContainer(index) {
    const editTodoDiv = document.querySelector(`.todo-container:nth-child(${index + 1})`);
    editTodoDiv.innerHTML = `
    <input type="text" id="edit-todo-title" value="${projects[getActiveProject()].todos[index].title}">
    <input type="text" id="edit-todo-description" placeholder="Enter description" value="${projects[getActiveProject()].todos[index].description}">
    <input type="date" id="edit-due-date" name="due-date" value="${projects[getActiveProject()].todos[index].dueDate}">
    <div class="save-edit edit-button">Save</div>
    <div class="cancel-edit edit-button">Cancel</div>
    `;
}

function renderDivAddTodo() {
    const divAddTodo = document.createElement("div");
    divAddTodo.classList.add("add-todo-container");
    mainTodos.appendChild(divAddTodo);
    
    const todayDate = new Date().toISOString().slice(0, 10);

    const inputsAddTodo = document.createElement("div");
    inputsAddTodo.classList.add("add-todo-inputs");
    divAddTodo.appendChild(inputsAddTodo)
    inputsAddTodo.innerHTML = `
    <input type="text" id="todo-title" placeholder="Enter todo name">
    <input type="text" id="todo-description" placeholder="Enter description">
    <input type="date" id="due-date" name="due-date" value="${todayDate}">
    `

    const buttonAddTodoConfirm = document.createElement("div");
    buttonAddTodoConfirm.classList.add("add-todo-add-button");
    divAddTodo.appendChild(buttonAddTodoConfirm);
    buttonAddTodoConfirm.innerText = "Add Todo";

    const buttonAddTodoCancel = document.createElement("div");
    buttonAddTodoCancel.classList.add("add-todo-cancel-button");
    divAddTodo.appendChild(buttonAddTodoCancel);
    buttonAddTodoCancel.innerText = "Cancel";

    getDynamicAddTodoListeners();
}

function clearWebsite() {
    sideMenu.innerHTML = `
        <div class="side-header">
            <h2>Projects</h2>
        </div>
    `;
    mainHeader.innerHTML = "";
    mainTodos.innerHTML = "";
}

console.log("render.js has been executed");

export { renderPage, showPopup, hidePopup, renderEditTodoContainer, clearWebsite, renderDivAddTodo };