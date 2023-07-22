// JavaScript
const taskList = document.getElementById("taskList");
const addButton = document.getElementById("addButton");
const text = document.getElementById("text");
const localStorageKey = "tasks";

// Load tasks from the API and localStorage on page load
window.addEventListener("load", () => {
    fetch("https://64bc1e5f7b33a35a44470dcc.mockapi.io/task")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((task) => {
        createTaskElement(task.name, task.id);
      });
    });

});

addButton.addEventListener("click", () => {
  const taskName = text.value.trim();
  if (taskName !== "") {
    addTaskToLocalStorage(taskName);
    createTaskElement(taskName);
    text.value = "";
  }
});

text.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addButton.click();
  }
});



function addTaskToLocalStorage(taskName) {
  const tasks = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  tasks.push(taskName);
  localStorage.setItem(localStorageKey, JSON.stringify(tasks));
}


function createTaskElement(taskName, taskId) {
  const taskDiv = document.createElement("div");
  taskDiv.textContent = taskName;

  const updateButton = document.createElement("button");
  updateButton.textContent = "Update";
  updateButton.addEventListener("click", () => {
    const updatedTaskName = prompt("Enter the updated task:", taskName);
    if (updatedTaskName !== null && updatedTaskName.trim() !== "") {
      updateTaskInLocalStorage(taskName, updatedTaskName);
      taskDiv.textContent = updatedTaskName;
    }
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    deleteTaskFromLocalStorage(taskName);
    taskDiv.remove();
  });

  taskDiv.appendChild(updateButton);
  taskDiv.appendChild(deleteButton);
  taskList.appendChild(taskDiv);
}

function deleteTaskFromLocalStorage(taskName) {
  const tasks = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  const updatedTasks = tasks.filter((task) => task !== taskName);
  localStorage.setItem(localStorageKey, JSON.stringify(updatedTasks));
}