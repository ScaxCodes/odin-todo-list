const projects = []

projects[0] = {
    name: "Default Project",
    todos: [],
}

projects[1] = {
    name: "Hallo",
    todos: [],
}

const todoFactory = (title, description, dueDate, priority) => {
    // const showTitle = () => console.log(title);
    console.log("Todo added...");
    return { title, description, dueDate, priority }
}

const deleteTodo = (projectIndex, todoIndex) => {
    projects[projectIndex].todos.splice(todoIndex, 1);
    console.log("Todo deleted...");
    return projects[projectIndex];
}

const changePriority = (projectIndex, todoIndex, priority) => {
    projects[projectIndex].todos[todoIndex].priority = priority;
    console.log("Priority has been changed...");
    return projects[projectIndex];
}

console.log("appLogic.js has been executed");

export { todoFactory, deleteTodo, changePriority, projects };