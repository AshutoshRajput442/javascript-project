const obj1 = {
    id: 1,
    name: "ashu"
}

const obj2 = obj1;
// console.log(obj2)



//************** */ scloning with spread operaotr


const obj3 = {...obj1}
// console.log(obj3)




//**********    assign operator   use ker ke */


const obj4 = Object.assign({},obj1)

console.log(obj4)