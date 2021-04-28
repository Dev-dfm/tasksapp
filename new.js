// alert("Show Task");

// Variables
// const submitButton = document.querySelector(".form__submit");

//Events
// submitButton.addEventListener("click", showTask);

//Zwischenspeichern der Variable enterTask in taskNameInput (Elemente aus dem DOM zwischenspeichern)
// Query elements from DOM
const formElement = document.querySelector(".form");

formElement.onsubmit = function (event) {
  // Prevent the default form submit behaviour (sending data to a server and reload page)
  event.preventDefault();

  const taskNameInput = document.querySelector(".form__enterTask");
  const dateInput = document.querySelector(".radiocontainer__input:checked");

  //mit ! wird überprüft ob die Bedingung false ist
  if (!taskNameInput.value) {
    alert("Please enter a task");
    return; //Beendet den Code an dieser Stelle
  }

  if (!dateInput) {
    alert("Please select a date");
    return; //Beendet den Code an dieser Stelle
  }

  const task = {
    name: taskNameInput.value,
    date: dateInput.value,
  };

/////// OLD PART ///////////////////////////
  //aus task ein JSON/String machen
  // const taskJSON = JSON.stringify(task);
  //im "local storage" des Browsers speichern
  // localStorage.setItem("task", taskJSON);
 ////////////////////////////////////////////

// get values of the key "taskList" from the browser-storage
const taskListJSON = localStorage.getItem("taskList");
// convert/parse this value to an object
const taskList = JSON.parse(taskListJSON);

// add/push new task to existing taskList
taskList.push(task);

//convert the taskList to JSON/String
const newTaskListJSON = JSON.stringify(taskList);
// overwrite existing taskList with updated newTaskListJSON 
localStorage.setItem("taskList", newTaskListJSON);

console.log(taskList);
};