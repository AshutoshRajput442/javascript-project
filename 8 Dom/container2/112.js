








//-----------------                 Dom traversing 



/*
const h1 = document.querySelector("h1")
console.log(h1)
console.log(h1.parentElement)
console.log(h1.parentNode)




h1.parentElement.style.color = "white"
h1.parentElement.style.backgroundColor = "red"

const h1_ka_parent_body = h1.parentElement;
h1_ka_parent_body.parentElement.style.border = "5px solid black"


*/

//-------------------self prcticee


const con = document.querySelector(".container")
con.style.backgroundColor = "red"

console.log("container child node : ", con.childNodes)
console.log("container child node : ", con.childElementCount)
console.log("container child node : ", con.children)

