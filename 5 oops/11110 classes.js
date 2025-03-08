//ab ye saara kaam classes use kerke drenge
//     1.50



class createuser{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    about(){
        console.log(this.name, this.age);
    }                                                       
}


const user = new createuser("ashu", 5); 

console.log(user);  
// console.log(user.about());



