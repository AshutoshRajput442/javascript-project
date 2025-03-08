class createuser{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    about(){
        // return `this.name, this.age`;
        return `${this.name} ${this.age}`
    } 
    
}

const user = new createuser("ashutosh", 5);

// console.log(user);  
// console.log(user.about());      
// console.log(user.about);    


// createuser { name: 'ashutosh', age: 5 }
// ashutosh 5
// [Function: about]



//----------------------------   getter setter   ---------------------------------------------------------------------------------------------------------------------------------------------------


class createuser1{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
   
    
    get about(){
        // return `this.name, this.age`;
        return `${this.name} ${this.age}`
    } 

    setabout1(name, age){
        this.name = name;
        this.age = age;
    }
}

const user1 = new createuser1("ashutosh", 5);

// treate as a property
// console.log(user1.name);      //ashutosh



user1.setabout1("ashutosh1", 6);        
console.log("username ",user1.name);      //ashutosh1 6
console.log("user age", user1.age);