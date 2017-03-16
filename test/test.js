var myFunction = require("../test/myFuction");


var objTest = [];

var test = myFunction.findall(1,'bent',2010,'patipan',1);
var test2 = myFunction.findall(2,'toshiro',1234,'toshi',1);

objTest.push(test);
objTest.push(test2);

console.log("obj full = >" , objTest);
console.log("objTest0 = >" , objTest[0]);
console.log("objTest1 = >" , objTest[1]);