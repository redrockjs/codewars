let arr = ['code', 'wars'],
    word = "codewars";


const validWord = (dictionary, word) => {
    let valid = false;
    dictionary.forEach(el => {
        //console.log(el, word, word.match(el))
        if (word.match(el) !== null) valid = true;
    })
    return valid
};

console.log(validWord(arr, word))
//validWord(arr, word)

// TASK
// You are given a sequence of valid words and a string. Test if the string is made up by one or more words from the array.
//
//     Task
// Test if the string can be entirely formed by consecutively concatenating words of the dictionary.
//
//     For example:
//
//     dictionary: ["code", "wars"]
//
// s1:         "codewars" =>  true  -> match 'code', 'wars'
// s2:         "codewar"  =>  false -> match 'code', unmatched 'war'
// One word from the dictionary can be used several times.
//
//
// TEST
// const { assert } = require('chai');
//
// describe('Solution test', () => {
//     const act = ([dictionary, word, expected]) => {
//         const input = `dictionary: [${dictionary}], word: ${word}`;
//         const actual = validWord(dictionary, word);
//         it(`${input}, expected: ${expected}`,
//             () => assert.strictEqual(actual, expected));
//     }
//     describe('Fixed tests', () => {
//         act([['code', 'wars'], 'codewars',true]);
//         act([['wars', 'code'], 'codewars', true]);
//         act([['code', 'wars'], 'codecodewars', true]);
//         act([['code', 'wars'], 'codewar', false]);
//         act([['code', 'wars'], 'codewarscode', true]);
//         act([['code', 'star', 'wars'], 'starwars', true]);
//         act([['Star', 'Code', 'Wars'], 'StarCodeWars', true]);
//         act([['Star', 'Code', 'Wars'], 'WarsStarCode', true]);
//         act([['Star', 'Code', 'Wars'], 'CodeStarsWar', false]);
//         act([[], 'codewars', false]);
//         act([['code', 'wars'], 'code', true]);
//         act([['a', 'b', 'c', 'd', 'e', 'f'], 'abcdef', true]);
//         act([['a', 'b', 'c', 'd', 'e', 'f'], 'abcdefg', false]);
//         act([['ab', 'a', 'bc'], 'abc', true]);
//         act([['ab', 'bc'], 'abc', false]);
//     });
// });