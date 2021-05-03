// SELECTORS
const dateInputs = document.querySelectorAll(".radiocontainer__input");
const tasksGroupElement = document.querySelector(".checkbox");

// EVENT LISTENER
tasksGroupElement.addEventListener("click", completed);

// Creates an HTML-template for the taskList
function createTaskElement(taskName) {
  //Create Elements for HTML
  const label = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");
  //fills Element with attributes
  input.type = "checkbox";
  input.className = "checkbox__input";
  //   input.completed = false;
  span.className = "checkbox__text";
  span.innerText = taskName;
  // Define input and span as child of the parent label
  label.append(input, span);
  return label;
}

// Get taskList from the local-browser-storage and converts it to an object
function parseJSONFromLocalStorage(key, defaultValue) {
  const json = localStorage.getItem(key);
  // if no tasks in array creates an empty array as default
  if (json === null) {
    return defaultValue;
  }
  // else converts data from localStorage to an object
  const data = JSON.parse(json);
  return data;
}

// Get Array with taskList objects from local Storage
const taskList = parseJSONFromLocalStorage("taskList", []);

// Create TaskList filtered by date, mapping only the taskNames
function createTaskList(selectedDate) {
  const taskElements = taskList.filter((task) => task.date === selectedDate).map((task) => createTaskElement(task.name));
  tasksGroupElement.innerHTML = "";
  tasksGroupElement.append(...taskElements);
}

///////////////////////////////////////////////////////
// Show no filtered taskList as default
const taskElements = taskList.map(function (task) {
  return createTaskElement(task.name);
});
tasksGroupElement.append(...taskElements);
//////////////////////////////////////////////////////

// Creates a filtered taskList by changing the DateSelection (radiobutton)
dateInputs.forEach((dateInput) => {
  dateInput.onchange = () => createTaskList(dateInput.value);
});

// FUNC COMPLETE ////////////////////////////////
function completed (e) {
  const item = e.target;
  if (item.classList[0] === "checkbox__text") {
    item.classList.toggle("completed");
    console.log(item)
  }
}


// function completed (e) {
//   if (data.classList[3] === false) {
//     data.classList.toggle
//   }
// }


// mark task as done
// const checkedTasks = document.querySelectorAll(".checkbox__input");

// const checkedTasks = document.querySelectorAll(".checkbox__input");
// console.log(checkedTasks)

// checkedTasks.checked = createTaskElement.complete

// checkedTasks.
// CSS
// .checkbox__input:checked + .checkbox__text {
//   text-decoration: line-through 2px var(--primary-color);
// }
