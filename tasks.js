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

const buyBeer = createTaskElement("buy some beer");
const drinkBeer = createTaskElement("drink beer");

const tasksGroupElement = document.querySelector(".checkbox")

tasksGroupElement.append(buyBeer, drinkBeer)
// console.log(tasksGroupElement)