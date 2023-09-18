import { projects } from './index';
import { addProject, addTodo, updateTodoValues, getActiveProject, setActiveProject, clearActiveProjects, saveLocalStorage } from "./appLogic";
import { renderPage, showPopup, hidePopup, renderEditTodoContainer, clearWebsite } from "./render";

// Container of the dynamic todos
const mainTodos = document.querySelector(".main-todos");

// Inputs from the static popup
const inputProjectTitle = document.querySelector("#project-title");
const inputProjectDescription = document.querySelector("#project-description");

function getDynamicEventListeners() {
    const buttonAddProject = document.querySelector(".add-project-button");
    buttonAddProject.addEventListener("click", () => {
        // Display the add a project popup
        showPopup();
    });

    const buttonAddTodo = document.querySelector(".add-todo-button");
    buttonAddTodo.addEventListener("click", () => {
        buttonAddTodo.style.display = "none";
        renderAddTodoDiv();
    });

    const buttonsSelectProject = document.querySelectorAll(".project");
    buttonsSelectProject.forEach((btn, index) => {
        // Select a project
        btn.addEventListener("click", () => {
            clearActiveProjects();
            setActiveProject(index);
            clearWebsite();
            renderPage();
        });
    });

    const buttonsCompleteTodo = document.querySelectorAll(".todo-icon");
    buttonsCompleteTodo.forEach((btn, index) => {
        // Mark todo as done if its not done yet
        btn.addEventListener("click", () => {
            if (!projects[getActiveProject()].todos[index].done) {
                projects[getActiveProject()].todos[index].done = true;
                console.log("Todo done...");
                saveLocalStorage();
                clearWebsite();
                renderPage();
            }
        });
    });

    const buttonsDeleteTodo = document.querySelectorAll(".todo-trash");
    buttonsDeleteTodo.forEach((btn, index) => {
        // Delete todo
        btn.addEventListener("click", () => {
            projects[getActiveProject()].todos.splice(index, 1);
            console.log("Todo deleted");
            saveLocalStorage();
            clearWebsite();
            renderPage();
        });
    });

    const buttonsEditTodo = document.querySelectorAll(".todo-edit");
    buttonsEditTodo.forEach((btn, index) => {
        // Edit todo
        btn.addEventListener("click", () => {
            
            renderEditTodoContainer(index);

            const inputEditTitle = document.querySelector("#edit-todo-title");
            const inputEditDescription = document.querySelector("#edit-todo-description");
            const inputEditDueDate = document.querySelector("#edit-due-date");

            const buttonSaveEditTodo = document.querySelector(".save-edit");
            buttonSaveEditTodo.addEventListener("click", () => {
                // Save edit
                updateTodoValues(index, inputEditTitle.value, inputEditDescription.value, inputEditDueDate.value);
                saveLocalStorage();
                clearWebsite();
                renderPage();
            });

            const buttonCancelEditTodo = document.querySelector(".cancel-edit");
            buttonCancelEditTodo.addEventListener("click", () => {
                // Cancel edit
                console.log("Edit canceled...")
                clearWebsite();
                renderPage();
            });
        });
    });

}

function getStaticEventListeners() {
    const buttonPopupCancel = document.querySelector(".cancel-button");
    buttonPopupCancel.addEventListener("click", () => {
        // Cancel to add a new project
        _clearInputs();
        hidePopup();
    });

    const buttonPopupAdd = document.querySelector(".add-button");
    buttonPopupAdd.addEventListener("click", () => {
        // Add a new project
        if (!inputProjectTitle.value) alert("Please enter a title");
        else {
            addProject(inputProjectTitle.value, inputProjectDescription.value);
            hidePopup();
            saveLocalStorage();
            _clearInputs();
            clearWebsite();
            renderPage();
        }
    });


}

// Plus event listener, bad design?
// buttonAddTodo global, as its needed in various functions, bad design?
function renderAddTodoDiv() {
    const buttonAddTodo = document.querySelector(".add-todo-button");
    const addTodoDiv = document.createElement("div");
    addTodoDiv.classList.add("add-todo-container");
    mainTodos.appendChild(addTodoDiv);
    
    const todayDate = new Date().toISOString().slice(0, 10);

    const addTodoInputs = document.createElement("div");
    addTodoInputs.classList.add("add-todo-inputs");
    addTodoDiv.appendChild(addTodoInputs)
    addTodoInputs.innerHTML = `
    <input type="text" id="todo-title" placeholder="Enter todo name">
    <input type="text" id="todo-description" placeholder="Enter description">
    <input type="date" id="due-date" name="due-date" value="${todayDate}">
    `

    const addTodoAddButton = document.createElement("div");
    addTodoAddButton.classList.add("add-todo-add-button");
    addTodoDiv.appendChild(addTodoAddButton);
    addTodoAddButton.innerText = "Add Todo";

    const addTodoCancelButton = document.createElement("div");
    addTodoCancelButton.classList.add("add-todo-cancel-button");
    addTodoDiv.appendChild(addTodoCancelButton);
    addTodoCancelButton.innerText = "Cancel";

    // See comment above
    addTodoCancelButton.addEventListener("click", () => {
        buttonAddTodo.style.display = "flex";
        clearWebsite();
        renderPage();
    });

    addTodoAddButton.addEventListener("click", () => {
        const todoinputProjectTitle = document.querySelector("#todo-title");
        const todoinputProjectDescription = document.querySelector("#todo-description");
        const todoDueDate = document.querySelector("#due-date");
        if (todoinputProjectTitle.value === "") alert("Please enter a title!");
        else {
            buttonAddTodo.style.display = "block";
            addTodoDiv.style.display = "none";
            addTodo(todoinputProjectTitle.value, todoinputProjectDescription.value, todoDueDate.value);
            saveLocalStorage();
            clearWebsite();
            renderPage();
        }
    });
}

function _clearInputs() {
    inputProjectTitle.value = "";
    inputProjectDescription.value = "";
}

console.log("domLoader.js has been executed");

export { renderPage, getStaticEventListeners, getDynamicEventListeners, addTodo };
export { mainTodos };