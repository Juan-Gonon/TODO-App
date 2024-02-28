const btn = document.querySelector("[data-form-btn]");


const createTask = (e)=>{

    e.preventDefault();

    const input = document.querySelector("[data-form-input]");
    const task = document.querySelector("[data-tag]");
    const list = document.createElement('li');
    list.classList.add('card')



    const value = input.value;


    const content = `
            <div>
            <i class="far fa-check-square icon"></i>
            <span class="task">${value}</span>
            </div>
            <i class="fas fa-trash-alt trashIcon icon"></i>
    `

    list.innerHTML = content;

    task.appendChild(list)



    console.log(value)
    console.log(task)
    input.value = "";



}




btn.addEventListener('click', createTask)