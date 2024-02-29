(()=>{


const btn = document.querySelector("[data-form-btn]");

const createTask = (e) => {
    e.preventDefault();

    const input = document.querySelector("[data-form-input]");
    const task = document.querySelector("[data-tag]");
    const list = document.createElement('li');
    const value = input.value;

    const tackContent = document.createElement("div");
    const titleTask = document.createElement("span");

    list.classList.add('card');
    titleTask.classList.add("task");

    tackContent.appendChild(checkComplete());
    tackContent.appendChild(titleTask);

    titleTask.innerText = value;

    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
  

    list.appendChild(tackContent);
    list.appendChild(trashIcon); 

    task.appendChild(list);

    input.value = "";
}

btn.addEventListener('click', createTask);

const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");

    i.addEventListener("click", completeTask);

    return i;
}

const completeTask = (e) => {

    const element = e.target;

    element.classList.toggle("fas");
    element.classList.toggle("completeIcon")
    element.classList.toggle("far");
}



})();
