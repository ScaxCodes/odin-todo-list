import { projects } from './index';
import { projectFactory, addTodo, getActiveProject, clearActiveProjects } from "./appLogic";
import { renderPage } from "./render";


const sideMenu = document.querySelector(".side-menu");
const mainHeader = document.querySelector(".main-header");
const mainTodos = document.querySelector(".main-todos");
const popup = document.querySelector(".popup");
const popupContainer = document.querySelector(".popup-container");
const titleInput = document.querySelector("#project-title");
const descriptionInput = document.querySelector("#project-description");

const addTodoButton = document.createElement("div");

function getDynamicEventListeners() {
    const projectButtons = document.querySelectorAll(".project");
    projectButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            clearActiveProjects();
            projects[index].active = true;
            clearWebsite();
            renderPage();
        });
    });

    const addProjectButton = document.querySelector(".add-project-button");
    addProjectButton.addEventListener("click", () => {
        popup.style.display = "flex";
        popupContainer.style.display = "flex";
    });

    const todoButtons = document.querySelectorAll(".todo-icon");
    todoButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            if (projects[getActiveProject()].todos[index].done === false) {
                projects[getActiveProject()].todos[index].done = true;
                console.log("Todo done...");
                clearWebsite();
                renderPage();
            }
        });
    });

    const deleteTodoButtons = document.querySelectorAll(".todo-trash");
    deleteTodoButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            projects[getActiveProject()].todos.splice(index, 1);
            console.log("Todo deleted");
            saveLocalStorage();
            clearWebsite();
            renderPage();
        });
    });


    const editTodoButtons = document.querySelectorAll(".todo-edit");
    editTodoButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            const editTodoDiv = document.querySelector(`.todo-container:nth-child(${index + 1})`);
            editTodoDiv.innerHTML = `
            <input type="text" id="edit-todo-title" value="${projects[getActiveProject()].todos[index].title}">
            <input type="text" id="edit-todo-description" placeholder="Enter description" value="${projects[getActiveProject()].todos[index].description}">
            <input type="date" id="edit-due-date" name="due-date" value="${projects[getActiveProject()].todos[index].dueDate}">
            <div class="save-edit edit-button">Save</div>
            <div class="cancel-edit edit-button">Cancel</div>
            `;
            const editTitleInput = document.querySelector("#edit-todo-title");
            const editDescriptionInput = document.querySelector("#edit-todo-description");
            const editDueDateInput = document.querySelector("#edit-due-date");

            const saveEditButton = document.querySelector(".save-edit");
            saveEditButton.addEventListener("click", () => {
                projects[getActiveProject()].todos[index].title = editTitleInput.value;
                projects[getActiveProject()].todos[index].description = editDescriptionInput.value;
                projects[getActiveProject()].todos[index].dueDate = editDueDateInput.value;
                console.log("Edit saved...")
                clearWebsite();
                renderPage();
            });

            const cancelEditButton = document.querySelector(".cancel-edit");
            cancelEditButton.addEventListener("click", () => {
                console.log("Edit canceled...")
                clearWebsite();
                renderPage();
            });
        });
    });

}

function getStaticEventListeners() {
    const cancelPopupButton = document.querySelector(".cancel-button");
    cancelPopupButton.addEventListener("click", () => {
        popup.style.display = "none";
        popupContainer.style.display = "none";     
    });

    const popupAddProjectButton = document.querySelector(".add-button");
    popupAddProjectButton.addEventListener("click", () => {
        if (!titleInput.value) alert("Please enter a title");
        else {
            projects.push(projectFactory(titleInput.value, descriptionInput.value));
            popup.style.display = "none";
            popupContainer.style.display = "none";
            saveLocalStorage();
            clearInputs();
            clearWebsite();
            renderPage();
        }
    });

    const addTodoButton = document.querySelector(".add-todo-button");
    addTodoButton.addEventListener("click", () => {
        addTodoButton.style.display = "none";
        renderAddTodoDiv();
    });
}

// Plus event listener, bad design?
// addTodoButton global, as its needed in various functions, bad design?
function renderAddTodoDiv() {
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
        addTodoButton.style.display = "flex";
        clearWebsite();
        renderPage();
    });

    addTodoAddButton.addEventListener("click", () => {
        const todoTitleInput = document.querySelector("#todo-title");
        const todoDescriptionInput = document.querySelector("#todo-description");
        const todoDueDate = document.querySelector("#due-date");
        if (todoTitleInput.value === "") alert("Please enter a title!");
        else {
            addTodoButton.style.display = "block";
            addTodoDiv.style.display = "none";
            addTodo(todoTitleInput.value, todoDescriptionInput.value, todoDueDate.value);
            saveLocalStorage();
            clearWebsite();
            renderPage();
        }
    });
}

function clearInputs() {
    titleInput.value = "";
    descriptionInput.value = "";
}

// TODO: Make sideMenu logic same as mainHeader (clear sideHeader instead of whole sideMenu)
function clearWebsite() {
    sideMenu.innerHTML = `
        <div class="side-header">
            <h2>Projects</h2>
        </div>
    `;
    mainHeader.innerHTML = "";
    mainTodos.innerHTML = "";
}

function saveLocalStorage() {
    localStorage.setItem('projects', JSON.stringify(projects));

    console.log("Saved projects/todos to local storage...");
}

console.log("domLoader.js has been executed");

export { renderPage, getStaticEventListeners, getDynamicEventListeners, addTodo };
export { addTodoButton };