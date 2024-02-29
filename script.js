const btn = document.querySelector("[data-form-btn]");


const createTask = (e)=>{

    e.preventDefault();

    const input = document.querySelector("[data-form-input]");
    const task = document.querySelector("[data-tag]");
    const list = document.createElement('li');
    const value = input.value;
   

    const tackContent = document.createElement("div");
    const titleTask = document.createElement("span");


    list.classList.add('card')
    titleTask.classList.add("task")
   
    tackContent.appendChild(checkComplete());
    tackContent.appendChild(titleTask)





    titleTask.innerText = value;


    const content = `
            <i class="fas fa-trash-alt trashIcon icon"></i>
    `

    list.appendChild(tackContent)
    list.innerHTML += content;


    task.appendChild(list)



    console.log(value)
    console.log(task)
    input.value = "";



}




btn.addEventListener('click', createTask);

const checkComplete = ()=>{
    const i = document.createElement("i");
    i.classList.add("far");
    i.classList.add("fa-check-square");
    i.classList.add("icon")

    return i;

}