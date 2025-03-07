const users = [
    {userid : 1,name : "ashu", age:243},
    {userid : 2,name : "ankit", age:223},
    {userid : 3,name : "amit", age:213}
]

//iterate

for(let user of users)
{
    // console.log(user)
    // console.log(user.name)
}

//*******************************nested array destructuring************************** */
let [user1, user2, user3]  = users     //    {destructuring object}
console.log(user1)
console.log(user1.age)


console.log("nested array destructuring")       //    destructuring object property

const [{name : new_name,userid : new_userid}, ,{age}] = users

console.log(new_name)
console.log(new_userid)
console.log(age)