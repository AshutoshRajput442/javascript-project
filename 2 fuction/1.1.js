// function fucntion_name() {

// }




//-------------------------------------------------------------
function addition(num1, num2){
    return (num1+num2)
}

// console.log(addition(2,3))

//-------------------odd even------------------------------------------

function even_odd(num){

    if(num % 2 === 0){
        console.log("even")
    }else{
        console.log("odd")
    }
}

// even_odd(12);

//-------------------  take string  ------------------------------------------



function first_char(anystring){

    return anystring[0]
  
}

// console.log(first_char("abc"))





//------------------- array  ------------------------------------------


// input - array          
// find  -   target(number) 

// return index            else     return -1
 


function array_target(array , target){

   for(let i = 0;i<array.length; i++){
    if(array[i] === target){
        return i
    }else{
    }
}
return -1
  
}



const arr = [12,13,14,15,16]
const tar = 14
// console.log(array_target(arr, tar))










//******************  **   fuctnion expression******** */




const subtract = function (num1, num2){
    return (num1-num2)
}

// console.log(subtract(2,3))

//*********   arrow fucntion */


const add = (num1, num2) =>{
    return (num1+num2)
}
// console.log(add(21,3))



//other way of arrow fucntion

const addfucn =(num1,num2) => num1+num2
console.log(addfucn(22,22))