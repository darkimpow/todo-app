const addButton = document.getElementById("add-button");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemCount = document.getElementById("item-count");
const uncheckedCount = document.getElementById("unchecked-count");

let count = 0; //This line declares the variable count and initializes it to 0.
let unchecked = 0; //This line declares the variable unchecked and initializes it to 0.
let agenda = []; // This line declares the variable agenda and initializes it to an empty array.

addButton.addEventListener("click", () => { //This line adds a click event listener to the addButton. When the button is clicked, the code inside the arrow function will be executed.
    const todo = todoInput.value; //This line gets the value of the todoInput and assigns it to the variable to-do.

    //This line checks if the value of to-do is truthy (not null, undefined, 0, false, NaN, or an empty string). If it is truthy, the code inside the block will be executed.
    if (todo) {

        // This line adds a new to-do item to the end of the todoList by updating the innerHTML property.
        todoList.innerHTML += `<div class="flex items-center justify-between p-2">
        <button class="delete-button bg-red-500 hover:bg-red-400 rounded text-white p-2 pl-5 pr-5 cursor-pointer mr-2">Delete</button>
        <label class="cursor-pointer">${todo}</label> </div>`;

        // This line sets the value of todoInput to an empty string.
        todoInput.value = "";
        //
        count++; //This line increments the value of count by 1
        unchecked++; //This line increments the value of unchecked by 1.
        itemCount.innerHTML = count; // to the value of count.
        uncheckedCount.innerHTML = unchecked; // This line updates the innerHTML property of uncheckedCount to the value of unchecked.


    }
});

//This line adds a click event listener to the todoList. When an element inside the todoList is clicked, the code inside the arrow function will be executed.
todoList.addEventListener("click", event => {

    if (event.target.classList.contains("delete-button")) {
        event.target.parentElement.remove();
        count--;
        unchecked--;
        itemCount.innerHTML = count;
        uncheckedCount.innerHTML = unchecked;
    }
});