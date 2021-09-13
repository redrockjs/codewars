const nums = "312";

function explode(s) {
    let result = "";
    s.split("").forEach(el => {
        for (let i = 0; i < Number(el); i++) result += el
    })
    return result
}

//console.log(explode(nums))
console.log(explode(nums))

// TASK
// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
//
//     Examples
// Digits.Explode("312") = "333122"
// Digits.Explode("102269") = "12222666666999999999"

// TEST
// describe("Testing", function(){
//     it("Example tests", function(){
//         var tests = [["312", "333122"],["102269","12222666666999999999"],["0", ""],["000", ""],["123", "122333"]];
//         for(let i = 0; i < tests.length; i++) {
//             Test.assertEquals(explode(tests[i][0]), tests[i][1], 'Input: ' + tests[i][0]);
//         }
//     });
// });

// BEST
// function explode(s) {
//     return s.split("").map((e) => e.repeat(+e)).join("");
// }