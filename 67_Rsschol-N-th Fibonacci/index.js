const nthFibo = (a) => {
    if (a === 0) {
        return 0;
    }
    if (a === 1) {
        return 1;
    }

    let prev = 0;
    let curr = 1;

    for (let i = 2; i < a; i++) {
        console.log(prev, curr);
        curr = curr + prev;
        prev = curr;
    }

    return curr
}


console.log(nthFibo(10));


//TASK
// I love Fibonacci numbers in general, but I must admit I love some more than others.
// I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.
// For example:
//
//    nthFibo(4) == 2
//
// Because 2 is the 4th number in the Fibonacci Sequence.
// For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

//TEST
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Tests", function(){
//   it("tests", function(){
//     assert.strictEqual(nthFibo(1), 0,"1-st Fibo");
//     assert.strictEqual(nthFibo(2), 1,"2-nd Fibo");
//     assert.strictEqual(nthFibo(3), 1,"3-rd Fibo");
//     assert.strictEqual(nthFibo(4), 2,"4-th Fibo");
//   });
// });