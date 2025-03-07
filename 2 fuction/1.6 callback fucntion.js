// Callback function JavaScript mein ek aisa function hota hai 
// jo kisi doosre function ko argument ke roop mein diya jata hai, 
// aur jab wo doosra function apna kaam complete kar leta hai, 
// toh wo callback function ko call karta hai.

// koi bhi function dusre function me as parameter leker call kerna callback function hai


function function_inside(name){
    console.log("inside fun")
    console.log(`${name}`)
}

function fucntion_ouside(callback){
    console.log("outside fun")
    callback("ashutosh");
}


fucntion_ouside(function_inside);