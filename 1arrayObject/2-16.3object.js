const person = { name: "ashu",
                 age : 23    , 
                 
                 hobbies: ["chess","cricket"]
                
                
            }

// // console.log(person)
// // console.log(person.hobbies)


// console.log(person.name)
// console.log(person["name"])





//*********************** */ add new key value pair or    property
person.gender = "male"
// console.log(person)


//****************      add key --------- */

const key = "email"
person[key]  =  "ashu@gmail.com"
// console.log(person)





//*************************iterate object  */
//*************************for looop */

for(let key in person){
    // console.log("key", key)
    // console.log("values ", person[key])

    console.log("***************************")
    // console.log(`${key} : ${person[key]}`);


    console.log("***************************")
       
    // console.log(key, person[key]);


}


//*************************  object keys */

// console.log(object.key(person)); 








//***********************new task ************************************** */

//**********************computed property  */


const key1 = "objekey1"
const key2 = "objekey2"

const value1 = "objvalue1"
const value2 = "objvalue2"

const obj = {
    [key1] : value1,
    [key2] : value2
}

// console.log(obj)