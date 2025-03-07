const person1 = {
  firstname: "ashutosh",
  age: 23,

  about:function () {
    console.log(`name is ${this.firstname} and age is ${this.age}`);
 }
};

//----yha sirt refernce ho rha hai not the actual object
// const funct =  person1.about;
// funct();


//----yha actual object refernce ho rha hai
// const funct =  person1.about.bind(person1);
// funct();





// ----------------------arrow fucntion  --------------------------------------------
// arrow fucntion me this is nothing but the parent object  //window object// global object


const person = {
  firstname: "ashutoshrajput",
  age: 23,
  about: () => {
    console.log(this.firstname, this.age);
  },
};


person.about(person);


