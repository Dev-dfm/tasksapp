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
  //define input and span as child of the parent label
  label.append(input, span);
  return label;
}

// get values of the key "taskList" from the browser-storage and convert/parse this value to an object
function parseJSONFromLocalStorage(key, defaultValue) {
  const json = localStorage.getItem(key);
  // if no tasks in array set defaultValue
  if (json === null) {
    return defaultValue;
  }
  const data = JSON.parse(json);
  return data;
}

//get array with task objects from local Storage
const taskList = parseJSONFromLocalStorage("taskList", []);
//create taskElements array consisting of html elements base on the ...

/////////////////////////////////////////////////
/// NEW FUNC
function filterAndAppendDate(TaskDate) {
  const tasksDate = taskList.filter((task) => task.date === TaskDate);
  const taskElements = tasksDate.map(function (task) {
    return createTaskElement(task.name);
  });
  const tasksGroupElement = document.querySelector(".checkbox");
  tasksGroupElement.removeChild();
  tasksGroupElement.append(...taskElements);
}
// Wählt die input-Elemente aller radiobuttons
const dateInputs = document.querySelectorAll(".radiocontainer__input");
// Für jeden Eintrag in dieser Liste wird eine Aktion ausgeführt
dateInputs.forEach((dateInput) => {
  dateInput.onchange = () => filterAndAppendDate(dateInput.value);
});
