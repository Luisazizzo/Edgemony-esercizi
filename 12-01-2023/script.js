import { todos } from "./mocks.js";

// Metodo forEach
todos.forEach((todo) => console.log(todo.id));

// Metodo map
const metodoMap = todos.map((todo) => todo.userId);
console.log(metodoMap);

// Metodo filter
const metodoFilter = todos.filter((todo) => todo.id >= 4);
console.log(metodoFilter);

const bodyEl = document.querySelector("body");
const titleEl = document.createElement("h1");

titleEl.className = "title-todo";
titleEl.textContent = "La mia todo list";

const sectionEl = document.createElement("section");
sectionEl.className = "container";

bodyEl.append(titleEl, sectionEl);

const todoList = (todoId, todoTodo, completed) => {
  const divTodoEl = document.createElement("div");
  divTodoEl.className = "card-todo";

  const divCircle = document.createElement("div");
  divCircle.className = "circle";

  const idSpan = document.createElement("span");
  idSpan.className = "id-span";
  idSpan.textContent = todoId;

  const todoParagrafo = document.createElement("p");
  todoParagrafo.className = "todo-para";
  todoParagrafo.textContent = todoTodo;

  if (completed) {
    divCircle.classList.add("circle-bg");
    todoParagrafo.classList.add("decoration");
  }

  divTodoEl.append(divCircle, idSpan, todoParagrafo);
  sectionEl.appendChild(divTodoEl);

  divCircle.addEventListener("click", () => {
    divCircle.classList.toggle("circle-bg");
    todoParagrafo.classList.toggle("decoration");
  });
};

todos.forEach((todo) => todoList(todo.id, todo.todo, todo.completed));
