// JSON stands for JavaScript Object Notation
// json is lightweith
// JSON is a format for storing and transporting data.
const fs = require("fs");
const biodata = {
    name : "Sanjeev",
    age : 30,
    contact : 7827865367,
};
// console.log(biodata.contact); 
// const jsonData = JSON.stringify(biodata); //creating json through stringify--->
// console.log(jsonData);
// {"name":"Sanjeev","age":30,"contact":7827865367}
// console.log(jsonData.age);
// undefined

// conveting json to Object
// const objData = JSON.parse(jsonData);
// console.log(objData);
// { name: 'Sanjeev', age: 30, contact: 7827865367 }
// console.log(objData.contact);
// 7827865367

// -----------------------------------------------
// 1. convert to JSON
// 2. add new file 
// 3. readfile
// 4. convet back to js object
// 5. show to console
// -----------------------------------------------------

const jsonData = JSON.stringify(biodata); //convert it to JSON 
fs.writeFile("json1.json",jsonData, ()=>{ //create new file
    console.log('done');
})

fs.readFile("json1.json","utf-8", (err, data)=>{ //read file
console.log(data);
const orgData = JSON.parse(data);  //convert back to jsObject
console.log(orgData); //show to console

})


