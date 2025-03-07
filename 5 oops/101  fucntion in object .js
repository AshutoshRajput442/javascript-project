// method    --  function inside object

//-------------------   1

// const person = {
//     firstname : "ashutosh",
//     age : 23,

//     about : function(){
//         console.log(this)      // this is nothing but is the actual object
//         console.log(this.firstname)
//         console.log(this.age)

//         console.log(`name is ${this.firstname} and age is ${this.age}`)
//     }
// }

// person.about()

//-------------------   2      fucntoin outside ker de toooo

function fun() {
  console.log(this); // this is nothing but is the actual object
  console.log(this.firstname);
  console.log(this.age);

  console.log(`name is ${this.firstname} and age is ${this.age}`);
}

const person1 = {
  firstname: "ashutosh",
  age: 23,

  about: fun,
};
const person2 = {
  firstname: "ankit",
  age: 23,

  about: fun,
};

person1.about();
person2.about();
