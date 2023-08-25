import { todoFactory } from "./createTodo";

const apfel = todoFactory("Geile Aufgabe",2,3,4);
console.log(apfel);
apfel.showTitle();