let t= require("./first");
let r= require("./greetmodule"); // r contains the function definition.
let s= require("./demo2"); // s contains the function definition.
//whatever value is exported the require function return
console.log("Day-4 - Node Example is ");
console.log(t);
console.log(r);
r();
s.test();