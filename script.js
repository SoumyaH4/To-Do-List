let addToDos = document.getElementById('addToDo');
let list =document.getElementById('lists');
// alert(what?);
function addlist(){
    if(addToDos.value === ''){
      alert("Write your To Do list..");
    }
    else{
        let li =document.createElement('li');
        li.innerHTML = addToDos.value;
        list.appendChild(li);
       let span = document.createElement('span');
       span.innerHTML = "\u00d7";
       li.appendChild(span);
       
    }

    addToDos.value = " ";
}

list.addEventListener('click',(e)=>{
   if(e.target.tagName === "LI"){
    e.target.classList.toggle('lists');
   }
   else if(e.target.tagName === "SPAN"){
     e.target.parentElement.remove();
   }
},false);
