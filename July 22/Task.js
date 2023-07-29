const taskList = document.getElementById("List");
const addButton = document.getElementById("addButton");
const text = document.getElementById("text");
let addButton1 = 0;
const searchf= document.getElementById("search");


// Load tasks from the API and store it in localStorage
fetch("https://64bc1e5f7b33a35a44470dcc.mockapi.io/Tasks")
  .then((response) => response.json())
  .then((data) => {
    if (localStorage.getItem("Tasks") == null) {
      localStorage.setItem("Tasks", JSON.stringify(data));
    }
    console.log(data);
    displayTasks();
  });








// Load the tasks from the localStorage and display it
function displayTasks() {
  let storedData = JSON.parse(localStorage.getItem("Tasks"));
  taskList.innerHTML = ""; // Clear the taskList before adding the tasks
  storedData.forEach((eachTask) => {
    let taskHTML = `<div class="divCotainTask">
      <p class="Parag1">${eachTask.Task}
      <button class="Update">Update</button><button class="delete">Delete</button>
      </p></div>`;
    taskList.innerHTML += taskHTML;
    
  });
  localStorage.setItem("Tasks", JSON.stringify(storedData));
}






//add new task
addButton.addEventListener("click", () => {
  if (text.value !== "") {
    addTask(text.value);
    text.value = "" // Clear the input field after adding a task
  }
});


//add new task
function addTask(textT) {
  let storedData = JSON.parse(localStorage.getItem("Tasks"));
  storedData.push({ Task: textT });
  localStorage.setItem("Tasks", JSON.stringify(storedData));
  displayTasks(); // Display the updated tasks after adding a new task
}







//delete task
taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    let targetButton = event.target.parentNode;
    targetButton.remove();
   console.log(targetButton.childNodes[0])
    let storedData = JSON.parse(localStorage.getItem("Tasks"));
    // Update the data in localStorage after deletion
    storedData = storedData.filter((task) => task.Task !== targetButton.childNodes[0].textContent);

    localStorage.setItem("Tasks", JSON.stringify(storedData));

  }
});





//Update task



















// Search Field
searchf.addEventListener("input", () => {
  let searchTerm = searchf.value
  let storedData = JSON.parse(localStorage.getItem("Tasks"));
  let filteredData = storedData.filter((index) =>
    index.Task.includes(searchTerm)
  );
  if (searchTerm==""){
    displayTasks()
  }
  displayFilteredTasks(filteredData);
});

// Display filtered tasks
function displayFilteredTasks(filteredData) {
  taskList.innerHTML = ""; // Clear the taskList before adding the filtered tasks
  filteredData.forEach((eachTask) => {
    let taskHTML = `<div class="divCotainTask">
      <p class="Parag1">${eachTask.Task}
      <button class="Update">Update</button><button class="delete">Delete</button>
      </p></div>`;
    taskList.innerHTML += taskHTML;
  });
}

