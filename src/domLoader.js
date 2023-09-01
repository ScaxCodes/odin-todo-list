import { projects } from "./index";

const sideMenu = document.querySelector(".side-menu");
const mainHeader = document.querySelector(".main-header");
const test = document.querySelector(".test");
const testContainer = document.querySelector(".test-container");

// function addListeners() {
//     addProjectButton.addEventListener("click", addProject);
//     console.log("Event listeners added...");
// }

function renderPage() {
    renderSidebar();
    renderMainHeader();
    getEventListeners();
    console.log("Page rendered...");
}

function renderSidebar() {
    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        if (project.active) projectDiv.classList.add("active");
        sideMenu.appendChild(projectDiv);
        projectDiv.innerText = project.name;
    });

    const addProjectButton = document.createElement("div");
    addProjectButton.classList.add("add-project-button");
    sideMenu.appendChild(addProjectButton);
    addProjectButton.innerHTML = `<img src="plus-square.svg">Add Project`;
}

function renderMainHeader() {
    const headerTitle = document.createElement("div");
    mainHeader.appendChild(headerTitle);
    const headerDescription = document.createElement("div");
    mainHeader.appendChild(headerDescription);
    projects.forEach(project => {
        if (project.active) {
            headerTitle.innerText = project.name;
            headerDescription.innerText = project.description;
        }
    });
}

function getEventListeners() {
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
        test.style.display = "flex";
        testContainer.style.display = "flex";
    });

    const cancelPopupButton = document.querySelector(".cancel-button");
    cancelPopupButton.addEventListener("click", () => {
        test.style.display = "none";
        testContainer.style.display = "none";     
    });
}

function clearActiveProjects() {
    projects.forEach(project => {
        project.active = false;
    });
}

function clearWebsite() {
    sideMenu.innerHTML = `
        <div class="side-header">
            <h2>Projects</h2>
        </div>
    `;
    mainHeader.innerHTML = "";
}

function addProject() {

}

console.log("domLoader.js has been executed");

export { renderPage };