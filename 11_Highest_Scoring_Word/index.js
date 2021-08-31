text = "what time are we climbing up the volcano"

let costOfSymbol = (symb) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArr = alphabet.split("");
    return alphabetArr.indexOf(symb) + 1
}

function getIndexOfMaxOfArray(numArray) {
    return numArray.indexOf(Math.max.apply(null, numArray));
}

function high(x) {
    const wordsArr = x.split(" ");
    let cost = wordsArr.map(el => {
        let symbArr = el.split("")
        let costsArr = symbArr.map(el => costOfSymbol(el))
        return costsArr.reduce((a, b) => a + b)
    })
    return wordsArr[getIndexOfMaxOfArray(cost)]
}

console.log(high(text));

//TASK
// Given a string of words, you need to find the highest scoring word.
//
//     Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
//
//     You need to return the highest scoring word as a string.
//
//     If two words score the same, return the word that appears earliest in the original string.
//
//     All letters will be lowercase and all inputs will be valid.

//TEST
// describe("Example tests",() =>{
//     Test.assertEquals(high('man i need a taxi up to ubud'), 'taxi');
//     Test.assertEquals(high('what time are we climbing up the volcano'), 'volcano');
//     Test.assertEquals(high('take me to semynak'), 'semynak');
//     Test.assertEquals(high('aa b'), 'aa');
//     Test.assertEquals(high('b aa'), 'b');
//     Test.assertEquals(high('bb d'), 'bb');
//     Test.assertEquals(high('d bb'), 'd');
//     Test.assertEquals(high('aaa b'), 'aaa');
// });

//BEST
// function high(x){
//     //transform the input string into array & define a string of alphabetical latin characters
//     var arr = x.split(' ');
//     var str = 'abcdefghijklmnopqrstuvwxyz';
//     //Iterate through the array with input words to find the one with the greatest sum
//     var newArr = arr.map(function(word){
//         var sum = 0;
//         for (var i = 0; i < word.length; i++) {
//             sum += str.indexOf(word[i]);
//         }
//         return sum;
//     });
//     //Return the word with the greatest sum
//     return arr[newArr.indexOf(Math.max(...newArr))];
// }