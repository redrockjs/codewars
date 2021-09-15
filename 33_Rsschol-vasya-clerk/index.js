const arr = [25,25,25,25,25,25,25,50,50,50,100,100,100,100];

function tickets(peopleInLine) {
    let acc = 0,
        isChange = true;
    peopleInLine.forEach(el => {

        if (el>25 && acc-el<0) {
            isChange = false;
            acc += (25-el)
        } else {

        }

        console.log(acc)
    })
    return isChange ? "YES" : "NO"
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
