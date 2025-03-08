const usermethod = {
    about:  function(){
        return `${this.firstname} and ${this.age}`;
     },
    is18 : function(){
         return this.age >=18;
     }
}


function createuser(firstname,email,age){
    const user=Object.create(usermethod);

    user.firstname = firstname;
    user.email = email;
    user.age = age;

    // here we are adding method to object  // here is reference of method
    user.about = usermethod.about;
    user.is18 = usermethod.is18;
    

    return user;
}


const user1 = createuser("ashu", "ashu@gmail.com", 12)
console.log(user1)
console.log(user1.about())
