document.addEventListener("DOMContentLoaded", function() {
    const todoList = document.getElementById("todo-list");
    const todoInput = document.getElementById("todo-input");
    const addBtn = document.getElementById("add-btn");

    addBtn.addEventListener("click", function() {
        const taskText = todoInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            todoInput.value = "";
        }
    });

    function addTask(taskText) {
        const listItem = document.createElement("li");
        listItem.className = "todo-item";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const taskLabel = document.createElement("label");
        taskLabel.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function() {
            listItem.remove();
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(taskLabel);
        listItem.appendChild(deleteBtn);

        todoList.appendChild(listItem);
    }
});
