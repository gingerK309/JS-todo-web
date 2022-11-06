const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.getElementById("todo");
const toDoList = document.querySelector(".todo-list");
const TODO = "todos";
const IS_DONE = "true";
const IS_NOT_DONE = "false";
let toDos = [];

function wirteToDO(newObj) {
  const li = document.createElement("li");
  li.id = newObj.id;
  li.classList.add(newObj.isDone);
  const doneBtn = document.createElement("button");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  delBtn.classList.add("delete");
  li.appendChild(doneBtn);
  li.appendChild(span);
  li.appendChild(delBtn);
  span.innerText = newObj.text;
  doneBtn.innerText = "✔";
  delBtn.innerText = "❌";
  doneBtn.addEventListener("click", doneToDO);
  delBtn.addEventListener("click", deleteToDO);
  toDoList.appendChild(li);
}
function doneToDO(event) {
  const doneLi = event.target.parentElement;
  toDos.forEach((toDo) => {
    if (toDo.id === parseInt(doneLi.id) && toDo.isDone === IS_NOT_DONE) {
      toDo.isDone = IS_DONE;
      doneLi.classList.remove(IS_NOT_DONE);
      doneLi.classList.add(IS_DONE);
      saveToDO();
    } else if (toDo.id === parseInt(doneLi.id) && toDo.isDone === IS_DONE) {
      toDo.isDone = IS_NOT_DONE;
      doneLi.classList.remove(IS_DONE);
      doneLi.classList.add(IS_NOT_DONE);
      saveToDO();
    }
  });
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
    isDone: "false",
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
