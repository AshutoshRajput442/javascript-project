
/*


// static list and live list


// getSelectorAll hume static list dete hai 
// getElementBy___something hume live list dete hai



// 1. Live List (getElementsBy...)
// A live list automatically updates when the DOM changes.

// Example:
// Methods that return a live list:

// document.getElementsByTagName()
// document.getElementsByClassName()


// 2. Static List (querySelectorAll())
// A static list does not update automatically when the DOM changes.

// Example:
// Method that returns a static list:

// document.querySelectorAll()





const static_list = document.querySelectorAll(".todo-list li");
console.log(static_list) //                          5




const newli_add = document.createElement("li")
newli_add.textContent = "new li data tag add"

// ab isko ui me add kerna hai

const ui_select = document.querySelector(".todo-list")
ui_select.append(newli_add)



const live_list = document.getElementsByTagName("li");
console.log(live_list)//---------------------all document me li tag   9

*/







//-----------------------------------------------------------------------------------


// how to get the dimension of element
// height / width


// const section_todo = document.querySelector(".section-todo")
// const info = section_todo.getBoundingClientRect()

// console.log(info)
const section_todo = document.querySelector(".section-todo");

// Ensure the element exists before calling getBoundingClientRect()
if (section_todo) {
    const info = section_todo.getBoundingClientRect();
    console.log(info);
} else {
    console.log("Element .section-todo not found!");
}
