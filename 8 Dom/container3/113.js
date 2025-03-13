//---------------------------------append prepand remove---------------------------\

//-------------ye saare method class name ke under jo element per use hote hai 



const section = document.querySelector(".section-todo")
console.log(section)
console.log(section.innerHTML)
console.log(section.classList)    // 3   bg-clolor extra add kri hai niche
console.log(section.className)


//  -------------------------------add class      delet class
section.classList.add("bg-color")
section.classList.remove("bg-color")



//  ---------------contains----------------    class exits or not   true and false return krega
const ans = section.classList.contains("bg-color")
console.log(ans)



//--------------toggle-------------------bg-color class hai to remove ker dega 
//---------------------------------nhi h to add ker dega
section.classList.toggle("bg-color")





//------------------------------- todo-list me add kerna todo-----------
const inhtml = document.querySelector(".todo-list")
console.log(inhtml)

inhtml.innerHTML += "<li> learn java</li>"
inhtml.innerHTML += "<li> Learn go</li>"
console.log(inhtml)

//---------//////////        other way to add items -------appen kerdo--------

// 0. kisme add kerna hai uski class ka name 
// 1. jo add kerna hai wo likho 
// 2. kya text hono hai wo likho
// 3. append ker do




// const newTodoItem = document.createElement("li")
// newTodoItem.textContent = "ashutosh"
// inhtml.append(newTodoItem)
// inhtml.prepend(newTodoItem)


//---------------remove an elements-------------------------------

const todo1 = document.querySelector(".todo-list")
// todo1.remove();
// console.log(todo1)








//-------------------------------------before and after-------------
//-------------ye saare method class name ke baahar before and after use hote hai 



const newTodoItem = document.createElement("li")
newTodoItem.textContent = "ashutosh"
inhtml.before(newTodoItem)
// inhtml.after(newTodoItem)