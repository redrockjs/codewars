let str = "Dermatoglyphics";
//let str = "aba";

function isIsogram(str){
    let strArr = str.toLowerCase().split("");
    let counter = 0;
    let isIso = true;

    for (let i=0; i<str.length;i++) {
        strArr.forEach(el => {
            if (el === strArr[i]) {
                counter++;
                console.log(str[i], counter)
            }
            if (counter >= 2) {
                console.log("break!!!")
                isIso = false
            }
        });
        counter = 0;
    }
    return isIso? true : false
}

console.log(isIsogram(str));
//isIsogram(str);

// Optimized
// function isIsogram(str){
//     let strArr = str.toLowerCase().split("");
//     let isIso = true;
//
//     for (let i=0; i<str.length;i++) {
//         let counter = 0;
//         strArr.forEach(el => {
//             if (el === strArr[i]) counter++;
//             if (counter >= 2) isIso = false
//         });
//
//     }
//     return isIso? true : false
// }

// TASK
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case
//
// TEST
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;
//
// describe("Tests", () => {
//     it("test", () => {
//         assert.strictEqual( isIsogram("Dermatoglyphics"), true );
//         assert.strictEqual( isIsogram("isogram"), true );
//         assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
//         assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
//         assert.strictEqual( isIsogram("isIsogram"), false );
//         assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );
//     });
// });