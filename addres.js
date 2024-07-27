/*
function name (parameters){
    //body......
}
*/

//การชื่อ ฟังชั่น
// function adder(a,b) {
//     console.log(a + b);

// }
// adder(7,9);

/// variable scope
// function showMessage() {
//     let message = "Hello World!";
//     console.log(message);
// }
// showMessage(); // show message
// console.log(message);
 /* show error message
ReferenceError: message is not defined
    at Object.<anonymous> (C:\Wed\class1-nodejs\addres.js:20:13)
    at Module._compile (node:internal/modules/cjs/loader:1504:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1588:10)
    at Module.load (node:internal/modules/cjs/loader:1282:32)
    at Module._load (node:internal/modules/cjs/loader:1098:12)
    at TracingChannel.traceSync (node:diagnostics_channel:315:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:215:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:158:5)
    at node:internal/main/run_main_module:30:49

*/

// global variables
/*
let name ="John";
function showMessage(){
    console.log(`Hello World ${name} ` );
}

showMessage();

console.log(name); // show name

*/
// parameters

function showMessage(message , toUpper=false) {
    toUpper ? console.log(message.toUpperCase()) : console.log(message);
}

showMessage("Hello 1");// show message

showMessage("Hello 2", true); // show message in uppercase

showMessage("Hello 3", toUpper=true);



//Return value

function multipy(a,b) {
    return a * b;
}
console.log(multipy(4,3));


function multipy(a,b) {
    return a * b;
}
const result = multipy(4,3);

console.log(result);