// alert("Show Task");

// Variables
// const submitButton = document.querySelector(".form__submit");

//Events
// submitButton.addEventListener("click", showTask);

// function showTask() {
//     alert("Show task");
//   }





//Zwischenspeichern der Variable enterTask in taskNameInput (Elemente aus dem DOM zwischenspeichern)

// Query elements from DOM

const formElement = document.querySelector(".form");
formElement.onsubmit = function(event) {
    // Prevent the default form submit behaviour (sending data to a server and reload page)
    event.preventDefault();

const taskNameInput = document.querySelector(".form__enterTask");
const dateInput = document.querySelector(".radiocontainer__input:checked").value;
    console.log(taskNameInput.value + ", " + dateInput);

};