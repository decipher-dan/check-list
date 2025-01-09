const input1 = document.getElementById("inputBox");
const listCont = document.getElementById("listContainer");
const button = document.getElementById("button");

const action = () =>{
    let li = document.createElement("li");
        li.appendChild(document.createTextNode(input1.value));
        listCont.appendChild(li);
        input1.value="";

        let span = document.createElement("span");
        span.appendChild(document.createTextNode("\u00d7"));
        li.appendChild(span);
}

const addTask = (ev) => {
    if(input1.value.length > 0) {
        action()
    }else{
        alert("you must enter something");
    }
    saveData();
}

button.addEventListener("click", addTask);

const enter = (ev) => {
    if(input1.value.length > 0 && ev.which === 13) {
       action();
    }else if(ev.which === 13){
        alert("you must enter something");
    }
    saveData();
}

input1.addEventListener("keypress", enter);

const ulContainer = (ev) => {
    if(ev.target.tagName ===  "LI"){
        ev.target.classList.toggle("checked");
        saveData();
    }
    else if (ev.target.tagName === "SPAN") {
        ev.target.parentElement.remove();
        saveData();  
    }
}

listContainer.addEventListener("click", ulContainer);

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML)
} 

const showTask = () => {
    listContainer.innerHTML = localStorage.getItem('data')
}

showTask()