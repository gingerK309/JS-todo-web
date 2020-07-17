const toDoForm=document.querySelector(".js-toDoForm"),
toDoInput =toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");
const TODOS_LS = 'toDos';

let toDos=[];

function deleteToDo(event){
    const btn = event.target;
    const li= btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !==parseInt(li.id);
    });
    toDos= cleanToDos;
    saveToDos();
}




function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}



function paintToDo(text){
const li = document.createElement("li");
li.style.fontSize="20px";
li.style.opacity=0.9;
const delBtn=document.createElement("button");
delBtn.innerHTML="❌";
delBtn.style.backgroundColor="transparent";
delBtn.style.border="none";
delBtn.style.fontSize="20px";
delBtn.style.outline="none";
delBtn.style.cursor="pointer";
delBtn.style.opacity=0.9;
delBtn.addEventListener("click",deleteToDo);
const span = document.createElement("span");
const newId = toDos.length+1;
span.innerText=text+"   ";

li.appendChild(span);
li.appendChild(delBtn);
li.id= newId;
toDoList.appendChild(li);
const toDoObj ={
    text: text,
    id: newId
};
toDos.push(toDoObj);
saveToDos();
}



function handleSubmit(event){
 event.preventDefault();
 const currentValue= toDoInput.value;
 paintToDo(currentValue);
 toDoInput.value="";
}

function something(toDo){
    paintToDo(toDo.text);
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !==null){
    const parsedToDos= JSON.parse(loadedToDos);
     parsedToDos.forEach(something);
    }
}


function init(){
loadToDos();
toDoForm.addEventListener("submit",handleSubmit);
}
init();