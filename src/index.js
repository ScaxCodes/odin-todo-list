import { addProject } from "./appLogic";
import { getStaticEventListeners, addTodo } from "./eventListeners";
import { renderPage } from "./render";
import "./normalize.css";
import "./style.css";

let projects = [];

if (!localStorage.getItem("projects")) {
    // Create default project
    console.log("Local storage not found!");

    addProject("Default Project", "Well, this is just a template");
    projects[0].active = true;
    addTodo("Default Todo", "Enter some description here", "2023-09-15");
} 
else {
    // Load projects/todos from local storage
    projects = JSON.parse(localStorage.getItem("projects"));
    console.log("Local storage has been found!");
}

renderPage();
getStaticEventListeners();

console.log("index.js has been executed");

export { projects };