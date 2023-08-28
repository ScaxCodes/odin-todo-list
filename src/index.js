import { todoFactory, deleteTodo, changePriority, projects } from "./appLogic";
import { initPage } from "./domLoader";


projects[0].todos.push(todoFactory(1,2,3,4));
projects[0].todos.push(todoFactory(5,6,7,8));

// setTimeout(() => console.log(projects), 3000);

// setTimeout(() => deleteTodo(0,0), 6000);

console.log(projects);
initPage();

// changePriority(0,0,1);

// console.log(projects);