import { todoFactory } from "./createTodo";

const projects = []

projects[0] = {
    name: "Default Project",
    todos: [],
}

projects[0].todos.push(todoFactory(1,2,3,4));

console.log(projects);