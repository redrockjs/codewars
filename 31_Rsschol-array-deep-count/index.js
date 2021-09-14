const arr = [1, 2, [3, 4, [5]]]
let cnt = 0

function deepCount(a) {
    a.forEach(el => {
        if (typeof el === "object") deepCount(el)
        cnt++
    })
    return cnt
}

//console.log(deepCount(arr))

deepCount(arr)

// TASK
//
// Array.prototype.length will give you the number of top-level elements in an array.
//
//     Your task is to create a function deepCount that returns the number of ALL elements within an array, including any within inner-level arrays.
//
//     For example:
//
//     deepCount([1, 2, 3]);
// //>>>>> 3
// deepCount(["x", "y", ["z"]]);
// //>>>>> 4
// deepCount([1, 2, [3, 4, [5]]]);
// //>>>>> 7
// The input will always be an array.

// TEST
// describe("Tests", () => {
//     it("test", () => {
//         Test.assertEquals(deepCount([]), 0, "Expected 0")
//         Test.assertEquals(deepCount([1, 2, 3]), 3, "Expected 3")
//         Test.assertEquals(deepCount(["x", "y", ["z"]]), 4, "Expected 4")
//         Test.assertEquals(deepCount([1, 2, [3, 4, [5]]]), 7, "Expected 7")
//         Test.assertEquals(deepCount([[[[[[[[[]]]]]]]]]), 8, "Expected 8")
//     });
// });

// BEST
// function deepCount (a) {
//     return a
//         .reduce((acc, val) => {
//             return acc + (Array.isArray(val) ? deepCount(val) : 0);
//         }, a.length);
// };