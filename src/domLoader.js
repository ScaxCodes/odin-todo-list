import { projects } from "./appLogic";

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
    newTodo.textContent = projects[0].todos[getTodoLength() - 1].title + ", due Date: " + projects[0].todos[getTodoLength() - 1].dueDate;
    addDeleteButton(newTodo);
    clearForm();
}

function addDeleteButton(newTodo) {
    newTodo.innerHTML += " " + `<button class="delete">x</button>`;
}

function getTodoLength() {
    return projects[0].todos.length;
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

    for (let i = 0; i < projects.length; i++) {
        options += `<option value="${projects[i].name}">${projects[i].name}</option>`
    }

    selectElement.innerHTML = options;
}

console.log("domLoader.js has been executed");

export { initPage, getInputs, displayTodo, allFieldsFilled };