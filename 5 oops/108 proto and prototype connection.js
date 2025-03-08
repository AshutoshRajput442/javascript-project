// Connection_between_proto_and_prototype.js

// RELATED TO 106.JS

// const usermethod = {
//     about:  function(){
//         return `${this.firstname} and ${this.age}`;
//      },
//     is18 : function(){
//          return this.age >=18;
//      }
// }

function createuser(firstname, email, age) {
  const user = Object.create(createuser.prototype);

  user.firstname = firstname;
  user.email = email;
  user.age = age;

  return user;
}

// WE KNOW THAT EVERY FUNCTION HAS A PROTOTYPE PROPERTY
// AND EVERY OBJECT HAS A __PROTO__ PROPERTY       //  REFERECNCING KE LIYE USE HOTA HAI

// AND __PROTO__ PROPERTY POINTS TO PROTOTYPE PROPERTY OF FUNCTION
// SO HERE user.__proto__ POINTS TO usermethod
// AND usermethod.__proto__ POINTS TO OBJECT.PROTOTYPE

createuser.prototype.about = function () {
  return `${this.firstname} and ${this.age}`;
};

createuser.prototype.is18 = function () {
  return this.age >= 18;
};

const user1 = createuser("ashu", "ashu@gmail.com", 12);
console.log(user1);
console.log(user1.about())
console.log(user1.is18())
