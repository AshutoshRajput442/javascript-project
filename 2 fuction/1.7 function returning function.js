function one(){
    
    function two(){
        console.log("two")
    }

    return two();

}


const ans = one();
console.log(ans);