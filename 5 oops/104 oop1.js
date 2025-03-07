// function   -  that function create object
// add key value pair 
// object ko return krega

// hume multiple user's object bnane hai tooo  object create kro

// here multiple object create krne ke liye function create krna padega
// jisme hume object create krna padega
// aur us object me key value pair add krna padega
// aur us object ko return krna padega
// aur us object me function bhi add krna padega
// aur us function ko call krna padega
// aur us function me return krna padega
// aur us function me condition bhi add krna padega

function createuser(firstname,email,age){
    const user={};

    user.firstname = firstname;
    user.email = email;
    user.age = age;

    user.about = function(){
       return `${this.firstname} and ${this.age}`;
    };

   user.is18 = function(){
        return this.age >=18;
    }

    return user;
}


// const user1 = createuser("ashu", "ashu@gmail.com", 12)
// console.log(user1)
// console.log(user1.about()); 
// console.log(user1.is18()); 




// const user2 = createuser("ashu", "ashu@gmail.com", 12)

// console.log(user2)
// console.log(user2.about()); 
// console.log(user2.is18()); 




// const user3 = createuser("ashu", "ashu@gmail.com", 12)
// console.log(user3)
// console.log(user3.about()); 
// console.log(user3.is18()); 


//--------------------------------------------------------------------------------------------------------------------

const usermethod = {
    about:  function(){
        return `${this.firstname} and ${this.age}`;
     },
    is18 : function(){
         return this.age >=18;
     }
}


function createuser(firstname,email,age){
    const user={};

    user.firstname = firstname;
    user.email = email;
    user.age = age;

    // here we are adding method to object  // here is reference of method
    user.about = usermethod.about;
    user.is18 = usermethod.is18;
    

    return user;
}


const user3 = createuser("ashu", "ashu@gmail.com", 12)
console.log(user3)
console.log(user3.about()); 
console.log(user3.is18()); 
