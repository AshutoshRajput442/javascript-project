function createuser(name, age)
{
    this.name = name;
    this.age = age;
}

//now every function have the prototype property  ie. free space
// so we can add new method 

createuser.prototype.about = function() {
    // console.log (`${this.name} and ${this.age}`);  
    console.log (this.name, this.age);  
}

const user = new createuser("ashu", 5);
//------------------new keyword------------------
// 1. it creates a new empty object
// 2. it binds the value of this keyword to the new object
// 3. it calls the function
// 4. it returns the object
// 5. it creates a link between the object and the prototype property of the constructor function



// console.log(user);
// console.log(user.about());



// i want to see the keys of user object

for(let key in user){



    // this will give the keys of the object
    if(user.hasOwnProperty(key))
    {
        console.log(key);   
    }


    // all the keys are coming from the prototype property
    // console.log(key);
}