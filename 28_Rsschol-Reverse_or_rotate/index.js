
let str = "733049910872815764"
let cz = 5

let chunkReverser = (chunkArr) => {
    let sum = 0,
        result = [];
    for (let i = 0; i < chunkArr.length; i++) {
        sum += chunkArr[i] ** 3
    }
    if ((sum / 2) % Math.trunc(sum / 2) === 0) {
        result = [...chunkArr.reverse()]
        console.log("reverse elements")
    } else {
        let tmp = chunkArr.shift()
        result = [...chunkArr,...tmp]
        console.log("shift element")
    }
    return result
}

function revrot(str, sz) {
    if (str <= 0 || str === "" || sz === 0 || str.length < sz) return ""
    let arrStr = str.split(""),
        chunk = [],
        startNum = 0,
        endNum = sz,
        result = [];

    for (let j=1; j<=arrStr.length/sz; j++) {
        //console.log(startNum,endNum)
        for (let i = startNum, k=0; i < endNum; i++, k++) chunk[k] = str[i]
        console.log(chunk);
        startNum = startNum+sz;
        endNum = endNum+sz;
        result = [...result, ...chunkReverser(chunk)]
    }
//        console.log(result);
    return result.join("");

}

console.log(revrot(str, cz));

// TASK
// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string)
// of size sz (ignore the last chunk if its size is less than sz).
//
// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk;
// otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.
//
//     If
//
// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
//     Examples:
// revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> ""
// revrot("563000655734469485", 4) --> "0365065073456944"
// Example of a string rotated to the left by one position:
//     s = "123456" gives "234561".
// TEST
// function testing(actual, expected) {
//     Test.assertEquals(actual, expected)
// }
//
// describe("revrot",function() {
//     it("Basic tests",function() {
//         testing(revrot("1234", 0), "")
//         testing(revrot("", 0), "")
//         testing(revrot("1234", 5), "")
//         s = "733049910872815764"
//         testing(revrot(s, 5), "330479108928157")
//     })})

// BEST
// function revrot(str, sz) {
//     if (sz < 1 || sz > str.length)
//         return '';
//
//     let reverse = s => s.split('').reverse().join('');
//     let rotate  = s => s.slice(1) + s.slice(0, 1);
//     let sum_cubes = c => c.split('').reduce((a, b) => a + +b ** 3, 0);
//
//     return str
//         .match(new RegExp('.{' + sz + '}', 'g'))
//         .map(c => sum_cubes(c) % 2 ? rotate(c) : reverse(c))
//         .join('');
// }