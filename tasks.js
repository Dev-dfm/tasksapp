// Creates an HTML-template for the taskList
function createTaskElement(taskName) {
  //Create Elements for HTML
  const label = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");
  //fills Element with attributes
  input.type = "checkbox";
  input.className = "checkbox__input";

  span.className = "checkbox__text";
  span.innerText = taskName;
  // Define input and span as child of the parent label
  label.append(input, span);
  return label;
}

// Get taskList from the local-browser-storage and converts it to an object
function parseJSONFromLocalStorage(key, defaultValue) {
  const json = localStorage.getItem(key);
  // if no tasks in array set defaultValue
  if (json === null) {
    return defaultValue;
  }
  const data = JSON.parse(json);
  return data;
}

// Get Array with taskList objects from local Storage
const taskList = parseJSONFromLocalStorage("taskList", []);

// Create TaskList filtered by date, mapping only the taskNames
function createTaskList(selectedDate) {
  const tasksDate = taskList.filter((task) => task.date === selectedDate);
  const taskElements = tasksDate.map(function (task) {
    return createTaskElement(task.name);
  });
  const tasksGroupElement = document.querySelector(".checkbox");
  tasksGroupElement.innerHTML = "";
  tasksGroupElement.append(...taskElements);
}

// Select all radio buttons (date-selection)
const dateInputs = document.querySelectorAll(".radiocontainer__input");

// Show as default a no filtered taskList (first page)
const taskElements = taskList.map(function (task) {
  return createTaskElement(task.name);
});
const tasksGroupElement = document.querySelector(".checkbox");
tasksGroupElement.append(...taskElements);

// Creates a filtered taskList by changing the DateSelection (radiobutton)
dateInputs.forEach((dateInput) => {
  dateInput.onchange = () => createTaskList(dateInput.value);
});
