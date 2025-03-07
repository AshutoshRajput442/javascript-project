const user1 = { 
  name: "ashu",
  age: 12,

 about:  function info(){
    console.log(`${this.name} and ${this.age}`)
    
  }
}


const usre2 = {
  name:"mayank",
  age: 33
}

// user1.about();
// user1.about.call();
// user1.about.call(usre2);



//////////////////////         function insider object    ////////////////////////////////////////////////////////////////////////////////////////////////////


const person1 = {
  firstname: "ashutosh",
  age: 23, 
  about: function info () {
    console.log(`name is ${this.firstname} and age is ${this.age}`);
  },
};

const person2 = {
  firstname: "ankit",
  age: 23,
};

// person1.about();
// person1.about.call();         //  udefined

// person1.about.call(person1);
// person1.about.call(person2);







////////////////////////////////////////////////////////////////////////////////////////////////////////////



//------------------  2nd way     function outside object


function info() {
    console.log(`name is ${this.firstname} and age is ${this.age}`);
  }

const person11 = {
    firstname: "ashutosh",
    age: 2223,
   about: info
  };
  
  const person22 = {
    firstname: "ankit",
    age: 23,
  };

  // info.call(person11);
  // info.call(person22);



// ---------------------------------extra arguments

function info(hobby, food) {
  console.log(`name is ${this.firstname} and age is ${this.age}`, hobby, food);
}

const person111 = {
  firstname: "ashutosh",
  age: 2223,
 about: info
};

const person222 = {
  firstname: "ankit",
  age: 23,
};

// info.call(person11, "ashu_circket", "ashu_food");
// info.call(person22, "ankit_circket", "ankit_food");
























  //------------------  2nd way            APPLY


// function about(hobby, nature) {
//   console.log(`name is ${this.firstname} and age is ${this.age}, hobby, nature`);
// }

// const person1 = {
//   firstname: "ashutosh",
//   age: 23,
 
// };

// const person2 = {
//   firstname: "ankit",
//   age: 23,
// };

// // // about;
about.call(person1, "cricket", "good");
about.apply(person1, ["cricket","good"]);




const func = about.bind(person1, ["cricket","good"]);
func();





