const form = document.querySelector(".js-form"),
input=form.querySelector("input"), 
greetings=document.querySelector(".js-greetings");

const USER_LS="currentUser",SHOWING_CN="showing";

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greetings.classList.add(SHOWING_CN);
    greetings.innerText=`Welcome ${text}`;
}

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function loadName(){
    const currentUser= localStorage.getItem(USER_LS);
    if(currentUser=== null) {
        //user is not
        askForName();
    }else{
        //user is
        paintGreeting(currentUser);
    }
}
function init(){
 loadName();
}
init();