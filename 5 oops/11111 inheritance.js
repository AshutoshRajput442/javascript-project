class createuser{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    about(){
        console.log(this.name, this.age);
    }                                                       
}


class student extends createuser{
    constructor(name, age, rollno){
        super(name, age);
        this.rollno = rollno;   
    }
    studentInfo(){
        console.log("I am a student");
    }
    studentInfo1(){
        return "student is running";
    }    
    
    about(){
        console.log("i am a student in class 10");
    }  
}

const student1 = new student("ashutosh", 5,23232);
console.log(student1);//student { name: 'ashutosh', age: 5, rollno: 23232 }
console.log(student1.studentInfo());   //I am a student
console.log(student1.studentInfo1());  //student is running
console.log(student1.about());   //i am a student in class 10