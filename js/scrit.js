import DisplayToday from "./modules/displayToday.js";
import TodoList from "./modules/TodoList.js";

const displayToday = new DisplayToday(".today");
displayToday.init();

const todoList = new TodoList(".create-button", ".todo-list");
todoList.init();
