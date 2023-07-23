// JavaScript
const taskList = document.getElementById("List");
const addButton = document.getElementById("addButton");
const text = document.getElementById("text");
const KEY1 = "tasks";

// Load tasks from the API and localStorage on page load
window.addEventListener("load", () => {
    fetch("https://64bc1e5f7b33a35a44470dcc.mockapi.io/task")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((task) => {
        createtask(task.name, task.id);
      });
    });

});

addButton.addEventListener("click", () => {
  const taskName = text.value.trim();
  if (taskName !== "") {
    addtolo(taskName);
    createtask(taskName);
    text.value = "";
  }
});

text.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addButton.click();
  }
});



function addtolo(taskName) {
  const tasks = JSON.parse(localStorage.getItem(KEY1) || "[]");
  tasks.push(taskName);
  localStorage.setItem(KEY1, JSON.stringify(tasks));
}


function createtask(taskName, taskId) {
  
  const Div1 = `<div></div>`;
   const Div = document.createElement("div");
   Div.style.marginTop="10px"
   Div.style.fontSize="20px"
   Div.style.color=" rgb(84,118,50)"
   Div.textContent=taskName;
  const Ubu = document.createElement("button");
  Ubu.textContent = "Update";
  Ubu.style.marginRight="20px"
  Ubu.style.marginLeft="150px"
  Ubu.style.width="100px"

  Ubu.addEventListener("click", () => {
    const updatedTaskName = prompt("Enter the updated task:", taskName);
    if (updatedTaskName !== null && updatedTaskName.trim() !== "") {
      updateTaskInLocalStorage(taskName, updatedTaskName);
      Div.textContent = updatedTaskName;
    }
  });

  const Dbu = document.createElement("button");
  Dbu.textContent = "Delete";
  Dbu.style.width="100px"
  Dbu.addEventListener("click", () => {
    // delefromlo(taskName);
    Div.remove();
  });

  Div.appendChild(Ubu);
  Div.appendChild(Dbu);
  taskList.appendChild(Div);
}
function updateTaskInLocalStorage(oldTaskName, newTaskName) {
  const tasks = JSON.parse(localStorage.getItem(KEY1) || "[]");
  const updatedTasks = tasks.map((task) => (task === oldTaskName ? newTaskName : task));
  localStorage.setItem(KEY1, JSON.stringify(updatedTasks));
}

// function delefromlo(taskName) {
//   const tasks = JSON.parse(localStorage.getItem(KEY1) || "[]");
//   const updatedTasks = tasks.filter((task) => task !== taskName);
//   localStorage.setItem(KEY1, JSON.stringify(updatedTasks));
// }
