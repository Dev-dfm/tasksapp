// SELECTORS
const dateInputs = document.querySelectorAll(".radiocontainer__input");
const tasksGroupElement = document.querySelector(".checkbox");

// Creates an HTML-template for the taskList
function createTaskElement(task) {
  //Create Elements for HTML
  const label = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");
  //fills Element with attributes
  input.type = "checkbox";
  input.className = "checkbox__input";
  input.checked = task.completed;
  input.onchange = function (){
    completeTask(task.name, input.checked);
  }
  span.className = "checkbox__text";
  span.innerText = task.name;
  // Define input and span as child of the parent label
  label.append(input, span);
  return label;
  
}

function completeTask(taskName, completed) {
  const taskList = parseJSONFromLocalStorage("taskList", []);
  const task = taskList.find(function (task) {
    return task.name === taskName;
  });
  task.completed = completed;
  stringifyJSONToLocalStorage("taskList", taskList);
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

function stringifyJSONToLocalStorage(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

// Get Array with taskList objects from local Storage
const taskList = parseJSONFromLocalStorage("taskList", []);

// Show per default tasks from today
createTaskList("today");

// Create TaskList filtered by date, mapping only the taskNames
function createTaskList(selectedDate) {
  const taskList = parseJSONFromLocalStorage("taskList", []);
  const taskElements = taskList.filter((task) => task.date === selectedDate).map((task) => createTaskElement(task));
  tasksGroupElement.innerHTML = "";
  tasksGroupElement.append(...taskElements);
}

// Creates a filtered taskList by changing the DateSelection (radiobutton)
dateInputs.forEach((dateInput) => {
  dateInput.onchange = () => createTaskList(dateInput.value);
});