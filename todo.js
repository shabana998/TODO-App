const task = document.querySelector("#input");
const add = document.querySelector("#add-task-btn");
const taskList = document.querySelector("#task-list");
const alert_task = document.querySelector(".alert");

// Save tasks to localStorage
function saveData() {
    localStorage.setItem("tasks", taskList.innerHTML);
}

// Load tasks from localStorage
function showData() {
    taskList.innerHTML = localStorage.getItem("tasks") || '';
}

// Add task button click event
add.addEventListener("click", () => {
    if (task.value === '') {
        alert_task.innerText = "Please enter a task!";
    } else {
        alert_task.innerText = ""; // Clear alert message

        // Create and append new task
        let li = document.createElement("li");
        li.innerHTML = `${task.value} <span><i class="fa fa-trash" aria-hidden="false"></i></span>`;
        taskList.appendChild(li);

        task.value = ''; // Clear input
        saveData();
    }
});

// Handle task completion and deletion
taskList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Toggle checked class
    } else if (e.target.tagName === "I") {
        e.target.closest("li").remove(); // Remove task
    }
    saveData();
});

// Initial loading of tasks
showData();
