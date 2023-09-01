import { projects } from "./index";

const sideMenu = document.querySelector(".side-menu");

// function addListeners() {
//     addProjectButton.addEventListener("click", addProject);
//     console.log("Event listeners added...");
// }

function renderPage() {
    renderSidebar();
    renderMain();
    // addListeners();
    console.log("Page rendered...");
}

function renderSidebar() {
    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.className = "project";
        // projectDiv.classList.add("project");
        // console.log(project.active)
        if (project.active) projectDiv.classList.add("active");
        sideMenu.appendChild(projectDiv);
        projectDiv.innerText = project.name;
    });
}

function renderMain() {

}

function addProject() {

}

console.log("domLoader.js has been executed");

export { renderPage };