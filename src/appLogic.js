import { projects } from "./index";

function todoFactory(title, description, dueDate, priority) {
    console.log("Todo added...");
    return { title, description, dueDate, priority, done: false };
}

function projectFactory(name, description) {
    console.log("Project added...");
    return { name, description, active: false, todos: [] };
}

function addProject(name, description) {
    projects.push(projectFactory(name, description));
}

function addTodo(name, description, dueDate) {
    projects[getActiveProject()].todos.push(todoFactory(name, description, dueDate, null));
}

function getActiveProject() {
    let index = 0;
    projects.forEach((project, i) => {
        if (project.active) index = i;
    });
    return index;
}

function setActiveProject(index) {
    projects[index].active = true;
}

function clearActiveProjects() {
    projects.forEach(project => {
        project.active = false;
    });
}

function saveLocalStorage() {
    localStorage.setItem('projects', JSON.stringify(projects));

    console.log("Saved projects/todos to local storage...");
}

console.log("appLogic.js has been executed");

export { todoFactory, projectFactory, addProject, addTodo, getActiveProject, setActiveProject, clearActiveProjects, saveLocalStorage };