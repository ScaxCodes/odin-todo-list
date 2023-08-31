import { todoFactory, deleteTodo, changePriority, projects } from "./appLogic";
import { initPage, displayTodo, allFieldsFilled } from "./domLoader";

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
        displayTodo();
    // }
    // else alert("Please fill all fields to add a todo!");
});

function createTodo() {
    projects[0].todos.push(
        todoFactory(
            titleField.value,
            descriptionField.value,
            dueDateField.value,
            priorityField.value
        )
    );
    console.log(projects[0]);
}

initPage();

console.log(projects);