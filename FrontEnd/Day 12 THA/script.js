let todos = document.getElementById("todo-container");

function getTodo() {
    let todosList = localStorage.getItem("todos");
    todos.innerHTML = todosList;
}

function addTodo(event) {
    if (event.code === "Enter") {
        let todo = document.getElementById("todo-task").value;

        if (!todo) {
            alert("Enter appropriate task");
        }
        else {
            let listItem = `<li><span><i class="fa fa-trash"></i></span>${todo}</li></ul>`
            let container = document.getElementById("todo-container");
            container.innerHTML += listItem;
            document.getElementById("todo-task").value = "";
        }

        localStorage.setItem("todos", todos.innerHTML);
    }
}

document.querySelector("ul").addEventListener('click', function (event) {
    event.target.classList.toggle("completed");

});

document.querySelector("ul").addEventListener('click', function (event) {
    if (event.target.tagName === "I") {
        event.target.parentElement.parentElement.remove();
    }

    if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
    }
    localStorage.setItem("todos", todos.innerHTML);
});

