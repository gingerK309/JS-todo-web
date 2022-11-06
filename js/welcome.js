const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginBtn = document.querySelector("button");
const logOn = document.querySelector(".log-on");
const HIDDEN_CLASS_NAME = "hidden";
const USER_NAME = "name";

function sayWelcome() {
  const username = localStorage.getItem(USER_NAME);
  logOn.innerText = `어서오세요, ${username}님! 오늘 하루도 힘내세요 :D`;
  logOn.classList.remove(HIDDEN_CLASS_NAME);
}

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASS_NAME);
  localStorage.setItem(USER_NAME, username);
  sayWelcome();
}

const saveUsername = localStorage.getItem(USER_NAME);
if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASS_NAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  sayWelcome();
}
