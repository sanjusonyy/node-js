//Default parameter allow names parameterfs to be 
//initilized with default values if no value or undefined is passed

// multiply of two numbers
function mult(a, b=2){  //this way
    console.log(a*b) ;
}
mult(4);

const multy = (a,b=5) =>{
    console.log(`the multiplication of two number is ${a*b}`);
}
multy(6);