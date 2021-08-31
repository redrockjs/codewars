function isTriangle(a,b,c)
{
    if ( (a>0) && (b>0) && (c>0) && (a+b > c) && (b+c > a) && (a+c > b) ) return true
    return false;
}

console.log( isTriangle(7,2,2,))


// TASK Is this a triangle?
// Implement a method that accepts 3 integer values a, b, c.
// The method should return true if a triangle can be built
// with the sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).
// This means that you cannot draw a triangle that has side lengths 2, 7 and 12,
// for instance, since 2 + 7 is less than 12. To get an intuitive feel for this,
// imagine first drawing a line segment 12 cm long
// TESTS
//
// const { assert } = require("chai")
//
// describe("Public tests", () => {
//     it("Testing for fixed tests", () => {
//         assert.strictEqual(isTriangle(1,2,2), true);
//         assert.strictEqual(isTriangle(7,2,2), false);
//     });
// })