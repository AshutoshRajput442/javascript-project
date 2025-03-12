
// console.dir(document.getElementById("main-heading"))
// console.dir(typeof document.getElementById("main-heading"))

// const mainHeading = document.getElementById("main-heading")
// console.log(mainHeading)

// -------------------------   query selector----------------------------------------------

// const heading = document.querySelector("#main-heading")   //-----id
// console.log(heading)

// const header = document.querySelector(".header")   //-------------class
// console.log(header)

// const navi = document.querySelector(".nav-item")
// console.log(navi)
// const navi = document.querySelectorAll(".nav-item")
// console.log(navi)

// -------------------------   change text  ----------------------------------------------

// const textdata = document.getElementById("main-heading")
// console.log(textdata)
// console.log(textdata.textContent)

// ------change the  value of text(manage your task to hello    by using js )

// textdata.textContent = "HELLO THIS IS MY WEBSITE"
// console.log(textdata.textContent)   // all data deta hai
// console.log(textdata.innerText)  // only text dega of related id ka

/*
// -------------------------   change the style of text  ----------------------------------------------

//color change
const color = document.querySelector("div.headline h2")  // hum yha class or id ki ghaza iss threa bhi ker skte hai
//console.log(color.style)       //   css ke style ke object dega


color.style.color = "blue";
// color.style.backgroundColor = "white"
// color.style.border = "2px solid red"
color.style.boxShadow =  "10px 10px 20px rgba(35, 55, 208, 0.5)";


*/

















// ----------------------get and set atributes -------------------------

// const link  = document.querySelector("a")
// console.log(link)
// console.log(link.getAttribute("href"))

// const inputlink = document.querySelector("input")
// console.log(inputlink)
// console.log(inputlink.getAttribute("type"))

// -----------------     or ------

// const inputlink1 = document.querySelector(".form-todo input");
// console.log(inputlink1);
// console.log(inputlink1.getAttribute("type"));

// inputlink1.setAttribute("type", "hello ashu");        //-----type of change ker diya hai
// console.log(inputlink1.getAttribute("type"));












// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // ----------   getElementsByClassName ko css selector ki need nhi hoti (. dot ki need nhi)
// // ----------   querySelectorAll         ko css selector ki need hoti hai 














/*

// --------------------------------get multiple elements  using 'getElements  by  class: name
// getElementsByClassName expects only the class name (without .)




const element = document.getElementsByClassName("nav-item")
console.log(element) 
//  output      HTMLCollection(3)0: li.nav-item1: li.nav-item2: li.nav-itemlength: 3[[Prototype]]: HTMLCollection

console.log(element[1]) 


//----important of above code 
// --------- thsi is array like object not purre array  ---- use indexing and length 
// -----we can verify it


console.log(typeof element)
console.log(Array.isArray(element))

*/



/*


// --------------------------------get multiple elements items using querySelectorAll 

// querySelectorAll expects a valid CSS selector, and "nav-item" is being treated as a tag name, not a class.


const element = document.querySelectorAll(".nav-item")
console.log(element) 
console.log(element[1]) 

// output            NodeList(3)0: li.nav-item1: li.nav-item2: li.nav-itemlength: 3[[Prototype]]: NodeList
// 
// 
// */