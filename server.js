const inputBox = document.querySelector(".input-box");
const submitBtn = document.querySelector(".submit-btn");
const addList = document.querySelector(".todoList-Items");

submitBtn.addEventListener("click",addTasks);

function addTasks(event){
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-Items")

    const todoItems = document.createElement("li");
    todoItems.classList.add("todo-Lists");
    todoItems.innerText = inputBox.value;
    todoDiv.appendChild(todoItems);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteBtn");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    todoDiv.appendChild(deleteButton);

    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-btn");
    completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    todoDiv.appendChild(completeButton);

    addList.appendChild(todoDiv);

    inputBox.value = "";
}

addList.addEventListener("click",handleClick);

function handleClick(event){
    const targetBtn = event.target.closest(".deleteBtn");
    if(targetBtn){
        const deleteTodo = targetBtn.parentElement;
        deleteTodo.remove();
    }

    if(event.target.closest(".complete-btn")){
        const markTodo = event.target.closest(".todo-Items");
        markTodo.classList.toggle("completed")
    }
}