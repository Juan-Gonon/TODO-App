import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

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



    list.appendChild(tackContent);
    list.appendChild(deleteIcon()); 

    task.appendChild(list);

    input.value = "";
}

btn.addEventListener('click', createTask);


})();
