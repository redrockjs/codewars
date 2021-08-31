function getSum(a, b) {
    let result = 0;
    if (a < b) {
        let current = a;
        while (current <= b) {
            result += current;
            current++;
        }
    } else if (b < a) {
        let current = b;
        while (current <= a) {
            result += current;
            current++;
        }
    } else {
        result = a;
    }
    return result
}

getSum(4, 2);


// TASK
// Given two integers a and b, which can be positive or negative,
// find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
//
//     Note: a and b are not ordered!
//
//     Examples
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

// TEST
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;
//
// describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//         assert.strictEqual(getSum(0,-1),-1);
//         assert.strictEqual(getSum(0,1),1);
//     })
// });