import { todoFactory, projectFactory } from "./appLogic";
import { renderPage, getStaticEventListeners } from "./domLoader";

// Create default project
const projects = [];

projects.push(projectFactory("Default Project", "Well, this is just a template"));
projects[0].active = true;
projects[0].todos.push(todoFactory("Default Todo", "Enter some description here", "2023-09-15", null));

renderPage();
getStaticEventListeners();

console.log(projects);

export { projects };