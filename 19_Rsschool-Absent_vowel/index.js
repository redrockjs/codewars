let str = "Bb Smith sent us six neatly arranged range bicycles";

function absentVowel(x) {
    const alphabet = "AEIOU"
    let abcArr = alphabet.toLowerCase().split("");
    let xArr = x.toLowerCase().split("");

    return abcArr.map(el => xArr.some(elem => el === elem)).indexOf(false)
}

console.log(absentVowel(str));

// TASK
// Your job is to figure out the index of which vowel is missing from a given string:
//
//     A has an index of 0,
//     E has an index of 1,
//     I has an index of 2,
//     O has an index of 3,
//     U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowles but one. Also, you won't need to worry about capitals.
//
// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"
//
// TEST
// describe("Tests", () => {
//     it("test", () => {
//         Test.assertEquals(absentVowel("John Doe hs seven red pples under his bsket"), 0);
//         Test.assertEquals(absentVowel("Bb Smith sent us six neatly arranged range bicycles"), 3);
//     });
// });

// BEST
// function absentVowel(x) {
//     return ["a", "e", "i", "o", "u"].findIndex(v => !x.includes(v));
// }