import { projects } from "./index";

const sideMenu = document.querySelector(".side-menu");

// function addListeners() {
//     addProjectButton.addEventListener("click", addProject);
//     console.log("Event listeners added...");
// }

function renderPage() {
    renderProjects();
    // addListeners();
    console.log("Page rendered...");
}

function renderProjects() {
    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList = "project";
        sideMenu.appendChild(projectDiv);
        projectDiv.innerText = project.name;
    });
}

function addProject() {

}

console.log("domLoader.js has been executed");

export { renderPage };