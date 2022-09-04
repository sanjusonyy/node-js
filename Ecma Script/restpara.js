// Rest parameter is an improved way to handle function parameter , allowing us to 
// more easily handle various input as parameters in a function. The rest parameter 
// syntax allows us to represent an indefinite number of arguments as an array

// const multy = (a,b=5, c=8) =>{
//     console.log(`the multiplication of two number is ${a*b*c}`);
// }
// multy(6);
//  function sum(a,b,c,d,e,f){
//     console.log(a + b + c + d + e + f);
//  }
//  sum(1,2,3,4,5,6);

 //es6
 function sum(...input){ // this way---->
    console.log(...input);
    let total = 0;
    for(let i of input){  //Using For of Loop ---->
        total += i;
    }
    // console.log(a + b + c + d + e + f);
    console.log(total);
 }
 sum(1,2,3,4,5,6);