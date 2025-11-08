const form = document.querySelector("#form");
const input = document.querySelector(".input");
const todosUL = document.querySelector("#todos");

const updateLS = () => {
  todosEL = document.querySelectorAll("li");
  //重置todos数组
  const todos = [];

  todosEL.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
};

const addTodo = (todo) => {
  // 如果输入框有内容，不传递参数
  let todoText = input.value;

  // 如果todos里有内容，传递参数
  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement("li");
    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }

    todoEl.innerText = todoText;

    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");

      updateLS();
    });

    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoEl.remove();

      updateLS();
    });

    todosUL.appendChild(todoEl);
    input.value = "";

    updateLS();
  }
};

const todos = JSON.parse(localStorage.getItem("todos"));
if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  addTodo();
});
