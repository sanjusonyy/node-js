// JavaScript Callbacks------->
// function myDisplayer(some) {
//     console.log(some);
//   }
  
//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
//   }
  
//   let result = myCalculator(5, 5);
//   myDisplayer(result);
// what is callback function
// setTimeout(function(){
//     console.log("timer")
// },5000)
// function x(y){
// console.log("x");
// y();
// }
// x(function y(){
// console.log("y");
// })
// event listener-------->
// function attacheventlistner(){
//     let count = 0;
//     document.getElementById("Clickme")
//     .addEventListener("click", function x(){
//         console.log("Button Clicked", ++count);
//     });
// }
// attacheventlistner();

// Asynchronous JavaScript------->
// Functions running in parallel with other functions are called asynchronous
// A good example is JavaScript setTimeout()

// function myDisplayer(something) {
//     console.log(something)
//   }
  
//   function myCalculator(num1, num2, myDisplayer) {
//     let sum = num1 + num2;
//     myDisplayer(sum);
//   }
  
//   myCalculator(5, 5, myDisplayer);

// using setTimeout----->
// setTimeout(function() { 
//     myFunction("I love You !!!"); 
// }, 3000);

// function myFunction(value) {
//   console.log(value);
// }


//  setInterval(myfunction(),3000);
// function myfunction(){
//     let a = new Date();
//     let hours = a.getHours();
//     let minutes = a.getMinutes();
//     let seconds = a.getSeconds();
//     console.log(hours + ":" + minutes + ":" + seconds);
// }

// setInterval(myFunction, 1000);

// function myFunction() {
//   let d = new Date();
//   console.log(d.getHours() + ":" +
//   d.getMinutes() + ":" +
//   d.getSeconds())
  
// }

// JavaScript Promises------>
// Promise Syntax---
// let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

//   myResolve(); // when successful
//   myReject();  // when error
// });

// "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//   function(value) { /* code if successful */ },
//   function(error) { /* code if some error */ }
// );

// Async Await--------->
// function myDisplayer(some) {
//     console.log(some);
//   }
  
//   async function myFunction() {return "Hello";}
  
//   myFunction().then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );
//   async function myDisplay() {
//     let myPromise = new Promise(function(resolve, reject) {
//       resolve("I love You !!");
//     });
//     console.log(await myPromise);
//   }
  
//   myDisplay();
module.export = {
    x:20,
    y:200
};
