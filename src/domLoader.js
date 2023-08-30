import { projects } from "./appLogic";

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

// function selectElementsAgain() {
//     addProjectButton = document.querySelector(".sidebar button");
//     addTodoButton = document.querySelector(".todo-box button");
//     sidebar = document.querySelector(".sidebar");
//     todoList = document.querySelector(".todo-list");
//     console.log("Elements again selected...");
// }

function addListeners() {
    addProjectButton.addEventListener("click", addProject);
    addTodoButton.addEventListener("click", addTodo);
    console.log("Event listeners added...");
}

function initPage() {
    // selectElementsAgain();
    addListeners();
    console.log("Page initialized...");
}

function addProject() {
    const newProject = document.createElement("li");
    sidebarList.appendChild(newProject);
    newProject.textContent = prompt("Enter project name");
    console.log("Project added...");
}

function addTodo() {
    const newTodo = document.createElement("li");
    todoList.appendChild(newTodo);
    newTodo.textContent = titleField.value;
    clearForm();
}

function getInputs() {
    return { projectField, titleField, descriptionField, dueDateField, priorityField };
}

function clearForm() {
    projectField.value = "";
    titleField.value = "";
    descriptionField.value = "";
    dueDateField.value = "";
    priorityField.value = "";
}

console.log("domLoader.js has been executed");

export { initPage, getInputs };