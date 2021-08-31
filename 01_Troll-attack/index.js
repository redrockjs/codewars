function disemvowel(str) {
    let resultString="";
    for (let i=0; i<(str.length); i++) {
        if (
            (str[i] == "a") ||
            (str[i] == "o") ||
            (str[i] == "e") ||
            (str[i] == "i") ||
            (str[i] == "u") ||
            (str[i] == "A") ||
            (str[i] == "O") ||
            (str[i] == "E") ||
            (str[i] == "I") ||
            (str[i] == "U")
        ) {
            continue;
        }
        resultString += str[i];
    }
    return resultString;
}

console.log( disemvowel("No offense but,\nYour writing is among the worst I've ever read"));


// TESTING https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
// const { assert } = require("chai")
//
// describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//         assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
//         assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
//         assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")
//     })
// })

// Liked!
//
// function disemvowel(str) {
//     return str.replace(/[aeiouAEUIOU]/g, '');
// }