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
  }

  console.log(task);
};