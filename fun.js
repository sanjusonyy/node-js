// Javascript function defination
// function declaration
// function functionName(parameter){
//     //code to be executed
// }
// const x = function (a, b) {return a * b};
// console.log(x);

// const x = function (a, b) {return a * b};//variable can be used as a function
// let c = x(45,54);
// console.log(c);
// The function above is actually an anonymous function (a function without a name).
// Function Hoisting( Declaring function to the top)
// myFunction(5);

// function myFunction(y) {
//   return y * y;
// }

// Self-Invoking Functions (anonymus self-invoking function)
// (function () {
//     let x = "Hello!!";  // I will invoke myself
//     console.log(x);
//   })();

// Functions are Objects
// function myFunction(a, b) {
//     return arguments.length;
//   }
//   console.log(myFunction(3,4,5,6,7,6));//6

// Arrow Functions
// ES5(old Version)
// var x = function(x, y) {
//     return x * y;
//   }
  
  // ES6(using arrow function)
//   const x = (x, y) => x * y;
//   console.log(x(4,5));

// Function Parameters and Arguments
// function functionName(parameter1, parameter2, parameter3) {
//     // code to be executed
//   }

//Argument------>
// let ans = sumAll(1, 123, 500, 115, 44, 88);
// function sumAll() {
//     let sum = 0;
//     for(let i = 0; i < arguments.length; i++) {
//       sum += arguments[i];
//     }
//     return sum;
//   }
// console.log(ans)

//Using Reduce function ------>
// let sumAll = [1, 123, 500, 115, 44, 88];
// const output = sumAll.reduce(function(sum,val){
//     sum = sum + val;
//     return sum;
// },0);
// console.log(output);

// JavaScript Function Invocation ----->
// Invoking a Function as a Function
// function myFunction(a, b) {
//     return a * b;
//   }
//   myFunction(10, 2);    

// function call () --- apply() ---bind()--->
// const person = {
//     firstName : "sanjeev",
//     lastName : "kumar",
//     fulName : function(){ 
//        return this.firstName + " " + this.lastName;
//     }
// }
// console.log(person.fulName());

//Call () function example ----->
// const person = {fulName: function(){ 
//     return this.firstName + " " + this.lastName;
//  }
// };
// const person1 = {
//     firstName : "sanjeev",
//     lastName : "kumar"
// };
// const person2 = {
//     firstName : "rinki",
//     lastName : "singh"
// };
// console.log(person.fulName.call(person2));

// const person = {fulName: function(){ 
//     return this.firstName + " " + this.lastName + " " + this.city + " " + this.country;
//  }
// };
// const person1 = {
//     firstName : "sanjeev",
//     lastName : "kumar",
//     city : "delhi",
//     country : "india"
// };
// const person2 = {
//     firstName : "rinki",
//     lastName : "singh",
//     city : "delhi",
//     country : "india"
// };
// console.log(person.fulName.call(person2));

// JavaScript Function apply()------->

// The call() method takes arguments separately//function borrowing
// The apply() method takes arguments as an array.

// const person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
  
//   const person1 = {
//     firstName:"Sanjeev",
//     lastName: "Kumar"
//   } 
//   person.fullName.apply(person1, ["Delhi", "India"]);

// console.log(Math.max.apply(0,[1,2,3]))//Simulate a Max Method on Arrays

// JavaScript Function bind()-------->it is used to borrow a method to another object

// const person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
  
//   const person1 = {
//     firstName:"Sanjeev",
//     lastName: "Kumar"
//   } 
// //  console.log(person.fullName.call(person1, "delhi", "India"));
//  console.log(person.fullName.apply(person1, ["Delhi", "India"]));
//  console.log(person.fullName.apply(person1, ["Delhi", "India"]));

// const person = {
//   firstName:"John",
//   lastName: "Doe",
  
// }
// let fullName = function (hometown) {
//   console.log(this.firstName + " " + this.lastName + "from" + hometown);
// }

// const member = {
//   firstName:"Hege",
//   lastName: "Nilsen",
// }

// let fullName = person.fullName.bind(person);
// console.log(person.fullName.bind(member));
// console.log(fullName());
// setTimeout(fullName, 3000);
// fullName.call(member, "Delhi");
// fullName.apply(member, ["Delhi"]);
// bind method
// let printmyname = fullName.bind(member, "Delhi");
// console.log(printmyname);
// printmyname();

// JavaScript Closures
let a = 4;
function myFunction() {
  return a * a;
}
console.log(a);
let counter = 0;
function add(){
  counter += 1;
}
// console.log(add());
add()
add()
console.log(counter);








