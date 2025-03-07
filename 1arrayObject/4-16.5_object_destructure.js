const band = {

    name : "ashu",
    age : 132
    
};

//*********************************************************** */
// const name = band.name
// const age = band.age
// console.log(`${name} : ${age}`)    //general way

//*********************************************************** */


// const { name, age } = band;   //or             samm name 
const { name: new_name, age: new_age } = band;        //  same name : new_name

// console.log(new_name);
// console.log(new_age);


//**********************************   bache hua  laane ho   ************************* */

const uncle = {
    name : "ashish",
    uage : 23,
    gender : "male"
}
 
const {...restrepo} = uncle

// console.log(restrepo)


