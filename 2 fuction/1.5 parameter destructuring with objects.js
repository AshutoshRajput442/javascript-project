// craete object
const person = {
    name: "ashu",
    age : 23,
    gender : "male"
}

 //  saara object function me lena

 function total_object(object){

    console.log(person.name)
    console.log(person.age)
 }


 //   parameter destructuring

 function total_object2({name , gender}){

    console.log(name)
    console.log(gender)
 }

 total_object(person)
 total_object2(person)