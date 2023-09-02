import { todoFactory, projectFactory } from "./appLogic";
import { renderPage, getStaticEventListeners } from "./domLoader";

// Create default project
const projects = [];

projects.push(projectFactory("Work", "Well, I just like to work"));
projects[0].active = true;
projects[0].todos.push(todoFactory("Default Todo", "Enter some description here", "02.09.2023", null));
projects[0].todos.push(todoFactory("Another Default One", "I love Hackerhouse Berlin", "02.09.2023", null));

projects.push(projectFactory("Hobbies", "I do have hobbies though"));
projects.push(projectFactory("Car", "Always broken"));

renderPage();
getStaticEventListeners();

console.log(projects);

export { projects };