class animal{
    static category = 'Dog';
    location = 'Bangalore';
    static changeLocation(location){
        this.location = location;
    }       
}

const obj = new animal();

//wrong way to access static property
console.log(obj.location); // Output: Bangalore 
console.log(obj.category); // Output: undefined 



// static method can be called directly on the class
console.log(animal.category); // Output: Dog    
console.log(animal.location); // Output: Delhi


animal.changeLocation('Delhi');
console.log(obj.location); // Output: Bangalore