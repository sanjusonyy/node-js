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

const sanju = new Promise((resolve, reject) => {
setTimeout(()=>{
    let rollno = [1,2,3,4,5];
    resolve(rollno);
    reject('error while communication');
},2000);
});
sanju.then((rollno)=>{
console.log(rollno);
}).catch((error)=>{
    console.log("error");
})

// promises as an object