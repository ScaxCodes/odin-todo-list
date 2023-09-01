import { todoFactory, projectFactory } from "./appLogic";
import { renderPage } from "./domLoader";

// Create default project
const projects = [];

projects.push(projectFactory("Work", "Well, I just like to work"));
projects.push(projectFactory("Hobbies", "I do have hobbies though"));
projects.push(projectFactory("Car", "Always broken"));

renderPage();

console.log(projects);

export { projects };