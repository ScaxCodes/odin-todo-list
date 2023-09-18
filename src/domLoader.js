import { projects } from './index';
import { addProject, addTodo, getActiveProject, setActiveProject, clearActiveProjects, saveLocalStorage } from "./appLogic";
import { renderPage } from "./render";


const sideMenu = document.querySelector(".side-menu");
const mainHeader = document.querySelector(".main-header");
const mainTodos = document.querySelector(".main-todos");

const buttonAddTodo = document.createElement("div");

const popup = document.querySelector(".popup");
const popupContainer = document.querySelector(".popup-container");
const titleInput = document.querySelector("#project-title");
const descriptionInput = document.querySelector("#project-description");

function getDynamicEventListeners() {
    const buttonAddProject = document.querySelector(".add-project-button");
    buttonAddProject.addEventListener("click", () => {
        showPopup();
    });

    const buttonsSelectProject = document.querySelectorAll(".project");
    buttonsSelectProject.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            clearActiveProjects();
            setActiveProject(index);
            _clearWebsite();
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
                _clearWebsite();
                renderPage();
            }
        });
    });

    const ButtonsDeleteTodo = document.querySelectorAll(".todo-trash");
    ButtonsDeleteTodo.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            projects[getActiveProject()].todos.splice(index, 1);
            console.log("Todo deleted");
            saveLocalStorage();
            _clearWebsite();
            renderPage();
        });
    });


    const ButtonsEditTodo = document.querySelectorAll(".todo-edit");
    ButtonsEditTodo.forEach((btn, index) => {
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
                _clearWebsite();
                renderPage();
            });

            const cancelEditButton = document.querySelector(".cancel-edit");
            cancelEditButton.addEventListener("click", () => {
                console.log("Edit canceled...")
                _clearWebsite();
                renderPage();
            });
        });
    });

}

function showPopup() {
    popup.style.display = "flex";
    popupContainer.style.display = "flex";
}

function hidePopup() {
    popup.style.display = "none";
    popupContainer.style.display = "none";   
}

function getStaticEventListeners() {
    const buttonPopupCancel = document.querySelector(".cancel-button");
    buttonPopupCancel.addEventListener("click", () => {
        hidePopup();
    });

    const buttonPopupAdd = document.querySelector(".add-button");
    buttonPopupAdd.addEventListener("click", () => {
        if (!titleInput.value) alert("Please enter a title");
        else {
            addProject(titleInput.value, descriptionInput.value);
            hidePopup();
            saveLocalStorage();
            _clearInputs();
            _clearWebsite();
            renderPage();
        }
    });

    const buttonAddTodo = document.querySelector(".add-todo-button");
    buttonAddTodo.addEventListener("click", () => {
        buttonAddTodo.style.display = "none";
        renderAddTodoDiv();
    });
}

// Plus event listener, bad design?
// buttonAddTodo global, as its needed in various functions, bad design?
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
        buttonAddTodo.style.display = "flex";
        _clearWebsite();
        renderPage();
    });

    addTodoAddButton.addEventListener("click", () => {
        const todoTitleInput = document.querySelector("#todo-title");
        const todoDescriptionInput = document.querySelector("#todo-description");
        const todoDueDate = document.querySelector("#due-date");
        if (todoTitleInput.value === "") alert("Please enter a title!");
        else {
            buttonAddTodo.style.display = "block";
            addTodoDiv.style.display = "none";
            addTodo(todoTitleInput.value, todoDescriptionInput.value, todoDueDate.value);
            saveLocalStorage();
            _clearWebsite();
            renderPage();
        }
    });
}

function _clearInputs() {
    titleInput.value = "";
    descriptionInput.value = "";
}

// TODO: Make sideMenu logic same as mainHeader (clear sideHeader instead of whole sideMenu)
function _clearWebsite() {
    sideMenu.innerHTML = `
        <div class="side-header">
            <h2>Projects</h2>
        </div>
    `;
    mainHeader.innerHTML = "";
    mainTodos.innerHTML = "";
}

console.log("domLoader.js has been executed");

export { renderPage, getStaticEventListeners, getDynamicEventListeners, addTodo };
export { buttonAddTodo, sideMenu, mainHeader, mainTodos };