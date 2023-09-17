import { todoFactory, projectFactory } from "./appLogic";
import { renderPage, getStaticEventListeners } from "./domLoader";
import "./normalize.css";
import "./style.css";

let projects = [];


if (!localStorage.getItem("projects")) {
    // Create default project
    console.log("Storage 404");

    projects.push(projectFactory("Default Project", "Well, this is just a template"));
    projects[0].active = true;
    projects[0].todos.push(todoFactory("Default Todo", "Enter some description here", "2023-09-15", null));
  } else {
    // Load projects/todos from local storage
    projects = JSON.parse(localStorage.getItem("projects"));
    console.log("Storage has been found");
  }

renderPage();
getStaticEventListeners();

console.log(projects);

export { projects };