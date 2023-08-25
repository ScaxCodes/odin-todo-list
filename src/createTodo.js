const todoFactory = (title, description, dueDate, priority) => {
    const showTitle = () => console.log(title); 
    return { title, description, dueDate, priority, showTitle }
}

console.log("This is a log message from createTodo.js body");

export { todoFactory };