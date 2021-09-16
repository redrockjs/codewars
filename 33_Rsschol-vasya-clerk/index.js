//const arr = [25, 25, 25, 25, 50, 100, 50]; //YES
//const arr = [ 25, 100]; // NO
const arr = [25, 25, 25, 100, 25, 25, 50, 100, 25, 25, 50, 100, 25, 25, 50, 100]; // YES

function tickets(peopleInLine) {
    let _25baks = 0,
        _50baks = 0,
        _100baks = 0,
        till = 0,
        hasChange = true;
    peopleInLine.forEach(el => {

            switch (el) {
                case 25: {
                    _25baks++
                    till += 25
                    console.log(`+25 till: ${till} change: 0 ----- 25$:${_25baks} 50$:${_50baks} 100$:${_100baks} hasChange:${hasChange}`)
                    break;
                }
                case 50: {
                    _25baks--
                    _50baks++
                    till += (el - 25)
                    console.log(`+50 till: ${till} change: ${el - 25} ----- 25$:${_25baks} 50$:${_50baks} 100$:${_100baks} hasChange:${hasChange}`)
                    break;
                }
                case 100: {
                    if (_50baks <= 0 && _25baks >= 3) {
                        _25baks -= 3
                        _100baks++
                        till += 25 - el
                        console.log(`+100 till: ${till} change: ${el - 25} ----- 25$:${_25baks} 50$:${_50baks} 100$:${_100baks} hasChange:${hasChange}  "NO 50$"`)
                    } else if (_50baks >= 1 && _25baks >= 1) {
                        _25baks--
                        _50baks--
                        _100baks++
                        till += 25 - el
                        console.log(`+100 till: ${till} change: ${el - 25} ----- 25$:${_25baks} 50$:${_50baks} 100$:${_100baks} hasChange:${hasChange} "HAS 50$"`)
                    } else {
                        hasChange = false
                        console.log(`+100 till: ${till} change: ${el - 25} ----- 25$:${_25baks} 50$:${_50baks} 100$:${_100baks} hasChange:${hasChange} "NO CHANGE - NO CHANCE"`)
                    }
                    break;
                }
                default:
            }

            if (el === 100
                && ((_50baks < 0 && _25baks < 3)
                    || (_50baks >= 1 && _25baks >= 1))) {
                console.log("no change")
                hasChange = false
            }

            if (_25baks < 0 || _50baks < 0 || _100baks < 0) {
                hasChange = false
                console.log("zero till")
            }
        }
    )
    return (hasChange) ? "YES" : "NO"
}


console.log(tickets(arr));
// tickets(arr);

// TASK
// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing
// in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.
//
//     Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
//
//     Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets
//     strictly in the order people queue?
//
//     Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that
//     moment. Otherwise return NO.
//
//     Examples:
// tickets([25, 25, 50]) // => YES
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change
// (you can't make two bills of 25 from one of 50)

// TEST
// const chai = require('chai');
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;
//
// describe("Sample tests", () => {
//
//     let tests = [
//         [[25, 25, 50, 50], "YES"],
//         [[25, 100],        "NO"]
//     ];
//
//     for(let [input, expected] of tests) {
//         it(`People in line: [${input}]`, () => {
//             let actual = tickets([...input]);
//             assert(actual === expected, `Incorrect answer for input: ${input}\nExpected: ${expected}\nActual: ${actual}`);
//         });
//     }
// });

// BEST
// const tickets = peopleInLine => {
//     let [$25, $50] = [0, 0];
//     for (let el of peopleInLine) {
//         el === 25 ? $25++ : el === 50 ? ($50++, $25--) : ($50 ? $50-- : $25 -= 2, $25--);
//         if ($25 < 0) return `NO`;
//     }
//     return `YES`;
// };