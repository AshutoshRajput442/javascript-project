// insertAdjacentHTML

// "beforebegin"	Inserts before the element itself
// "afterbegin"	Inserts inside, before the first child
// "beforeend"	Inserts inside, after the last child
// "afterend"	Inserts after the element itself


// const todolist = document.querySelector(".todo-list")
// todolist.style.backgroundColor = "red"
// todolist.insertAdjacentHTML("beforebegin", "<li>beforebegin</li>")
// todolist.insertAdjacentHTML("afterbegin", "<li>afterbegin</li>")
// todolist.insertAdjacentHTML("beforeend", "<li>beforeend</li>")
// todolist.insertAdjacentHTML("afterend", "<li>afterend </li>")










//------------------------------   clone node ------------

const todolist = document.querySelector(".section-todo")
todolist.style.border = "5px solid red"

const todo_item = document.querySelector(".todo-list")
todo_item.style.border = "5px solid black"

const element = document.createElement("li")
element.textContent = "Hello and Welcome"


const element_clone = element.cloneNode(true);


todo_item.append(element)
todo_item.prepend(element_clone)




