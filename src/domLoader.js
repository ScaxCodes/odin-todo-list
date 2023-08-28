import { projects } from "./appLogic";

let addProjectButton = document.querySelector(".sidebar button");
let addTodoButton = document.querySelector(".todo-box button");
let sidebar = document.querySelector(".sidebar");
let sidebarList = document.querySelector(".sidebar ul")
let todoList = document.querySelector(".todo-list");

// function selectElementsAgain() {
//     addProjectButton = document.querySelector(".sidebar button");
//     addTodoButton = document.querySelector(".todo-box button");
//     sidebar = document.querySelector(".sidebar");
//     todoList = document.querySelector(".todo-list");
//     console.log("Elements again selected...");
// }

function addListeners() {
    addProjectButton.addEventListener("click", addProject);
    console.log("Event listeners added...");
}

function initPage() {
    // selectElementsAgain();
    addListeners();
    console.log("Page initialized...");
}

function addProject() {
    console.log(sidebarList);
    const newProject = document.createElement("li");
    sidebarList.appendChild(newProject);
    newProject.textContent = "Hallo";
    console.log("Project added...");
}

console.log("domLoader.js has been executed");

export { initPage };