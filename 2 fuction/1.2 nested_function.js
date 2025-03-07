const app = () => {



    //fun declarateion
    //fun expression
    //fun arror function

    function add (num1,num2){
        console.log(num1+num2)
    }

    const subtract = function(num1,num2){
        console.log(num1-num2)
    }

    const mulitply = (num1,num2) =>  (num1 * num2)

    console.log("inside app")



    //calling 
    add(12,12)
    subtract(13,12)
    console.log(mulitply(22,3))
} 

app()