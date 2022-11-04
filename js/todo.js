const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.getElementById("todo");
const toDoList = document.querySelector(".todo-list");
const TODO = "todos";
let toDos = [];
function wirteToDO(newObj) {
  const li = document.createElement("li");
  li.id = newObj.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newObj.text;
  button.innerText = "❌";
  button.addEventListener("click", deleteToDO);
  toDoList.appendChild(li);
  if (toDoList.childElementCount === 0) {
    h2.classList.add("hidden");
  }
}

function deleteToDO(event) {
  const delLi = event.target.parentElement;
  delLi.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(delLi.id));
  saveToDO();
}

function saveToDO() {
  localStorage.setItem(TODO, JSON.stringify(toDos));
}
function loadToDO() {}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  const newObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDoInput.value = "";
  toDos.push(newObj);
  wirteToDO(newObj);
  saveToDO();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
const saveToDOs = localStorage.getItem(TODO);
if (saveToDOs) {
  const parsedToDos = JSON.parse(saveToDOs);
  toDos = parsedToDos;
  parsedToDos.forEach(wirteToDO);
}
