// let counterModule = (function () {
//     let instance,
//         counter = 0;
//
//     let getCounter = function () {
//         return counter;
//     }
//
//     let increaseCounter = function () {
//         counter ++;
//     }
//
//     let createInstance = function () {
//         return {
//             getCounter: getCounter,
//             increaseCounter: increaseCounter
//         }
//     }
//
//     return {
//         getInstance: function () {
//             return instance || (instance = createInstance());
//         }
//     }
// })();
//
// console.log(counterModule.getInstance().getCounter())
// counterModule.getInstance().increaseCounter()
// console.log(counterModule.getInstance().getCounter())

let Singleton = (function () {
    let instance; //prevent modification of "instance" variable
    function Singleton() {
        if (instance) return instance;
        instance = this;
        //Singleton initialization code
    }
    // Instance accessor
    Singleton.getInstance = function () {
        return instance || new Singleton();
    }
    return Singleton;
}());

let obj1 = new Singleton();
let obj2 = new Singleton();
console.log(obj1 === obj2); // => true
obj1.test = 1;
console.log(obj2.test); // => 1


//TASK
// In software engineering, the singleton pattern is a design pattern that restricts the instantiation
// of a class to one object. This is useful when exactly one object is needed to coordinate actions
// across the system.
//
// Create an Singleton pattern, so there is one object in system.
//
// Example:
//
// var obj1 = new Singleton();
// var obj2 = new Singleton();
// obj1 === obj2; // => true
// obj1.test = 1;
// obj2.test; // => 1

//TEST
//// Since Node 10, we're using Mocha.
// // You can use `chai` for assertions.
// const chai = require("chai");
// const assert = chai.assert;
// // Uncomment the following line to disable truncating failure messages for deep equals, do:
// // chai.config.truncateThreshold = 0;
// // Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// // Uncomment the following to use the old assertions:
// // const Test = require("@codewars/test-compat");
//
// describe("Solution", function() {
//   it("should test for something", function() {
//     // Test.assertEquals(1 + 1, 2);
//     // assert.strictEqual(1 + 1, 2);
//   });
// });

//BEST
//var Singleton = function(){
//   if(Singleton.__instance) {
//     return Singleton.__instance;
//   }
//
//   Singleton.__instance = this;
// };