//**************** default parametere********** */

function add(a,b=0)
{
    return (a+b)
}

// console.log(add(2,2))


//****************  rest parameter  ********** */

function myfun(a,b,...c){

    console.log(a)
    console.log(b)
    console.log(c)
}

myfun(2,3,4,5,6,7,8,9)



//****************  add numbers   ********** */


function addAll(...numbers)
{
    let total =0;
    for(let number of numbers){
        total = total + number
    }

    return total
}


console.log("addittion is : ", addAll(2,2,2,2,2))