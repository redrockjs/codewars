function rowSumOddNumbers(n) {
    let result = 0;
    let nums = 1;
    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= row; col++) {
            // console.log(`${nums}`);
            if (row === n) result = result + nums
            nums = nums + 2;
        }
        // console.log(`rows - ${row}`);
    }
    // console.log(`result - ${result}`);
    return result
}

console.log(rowSumOddNumbers(1));

// TASK
// Given the triangle of consecutive odd numbers:
//
//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.:
//
// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8

// TESTS
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;
//
// describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//         assert.strictEqual(rowSumOddNumbers(1), 1);
//         assert.strictEqual(rowSumOddNumbers(42), 74088);
//     });
// });

// BEST
// function rowSumOddNumbers(n) {
//     return n*n*n
// }
