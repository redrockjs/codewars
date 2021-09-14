function solution(number) {
    let result = 0;
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) result += i
    }
    return result
}
console.log(solution(10))


// TASK
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
//
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number
// passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
//
// Note: If the number is a multiple of both 3 and 5, only count it once.
//
//     Courtesy of projecteuler.net (Problem 1)
//
// TEST
// const { assert } = require("chai")
//
// function test(n, expected) {
//     let actual = solution(n)
//     it(`Expected ${expected}, got ${actual}`, () => {
//         assert.strictEqual(actual, expected)
//     })
// }
//
// describe("basic tests", function(){
//     test(10,23)
// })