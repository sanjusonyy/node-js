// Spread operator allows an iterable to expand in places where 0 + arguments are expected.It is mostly used in the variable array where there is more than 1 value is expected.It allows us the privilege to obtain a list of parameters from an array.Syntax of Spread operator is the same as the Rest parameter but it works completely opposite of it.
// ES5
function sum(a,b,c){
    console.log(a+b+c);
}
// sum(1,2,3);
var arrVal = [1,2,3];
// sum.apply(null, arrVal);
sum(...arrVal);