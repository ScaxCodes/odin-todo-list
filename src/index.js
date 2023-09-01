import { todoFactory, projectFactory } from "./appLogic";
import { renderPage, getStaticEventListeners } from "./domLoader";

// Create default project
const projects = [];

projects.push(projectFactory("Work", "Well, I just like to work"));
projects[0].active = true;

projects.push(projectFactory("Hobbies", "I do have hobbies though"));
projects.push(projectFactory("Car", "Always broken"));

renderPage();
getStaticEventListeners();

console.log(projects);

export { projects };