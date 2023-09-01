import { projects } from "./index";

const sideMenu = document.querySelector(".side-menu");
const mainHeader = document.querySelector(".main-header");

// function addListeners() {
//     addProjectButton.addEventListener("click", addProject);
//     console.log("Event listeners added...");
// }

function renderPage() {
    renderSidebar();
    renderMainHeader();
    // addListeners();
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
}

function renderMainHeader() {
    const headerDiv = document.createElement("div");
    mainHeader.appendChild(headerDiv);
    projects.forEach(project => {
        if (project.active) headerDiv.innerText = project.name;
    });
}

function addProject() {

}

console.log("domLoader.js has been executed");

export { renderPage };