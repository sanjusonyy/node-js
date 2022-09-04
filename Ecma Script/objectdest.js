//object destructuring in javascript
//Destructuring assignment syntax is a js expression that makes it possible to unpack
//values from arrays,or properties from object, into distinct variables.

const biodata = {
    name : "Sanjeev",
    age : 30,
    deg : 'BCA'
}
let {name,age,deg} = biodata; //Object destructuring
console.log(`My name is ${biodata.name}`);
console.log(`My name is ${name} and my highest qualification is ${deg} and 
 my age is ${age}`);





