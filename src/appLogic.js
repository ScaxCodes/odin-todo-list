import { projects } from "./index";

function todoFactory(title, description, dueDate, priority) {
    console.log("Todo added...");
    return { title, description, dueDate, priority };
}

function projectFactory(name, description) {
    console.log("Project added...");
    return { name, description, active: false, todos: [] };
    // return { name, description, todos: [], };
}

console.log("appLogic.js has been executed");

export { todoFactory, projectFactory };