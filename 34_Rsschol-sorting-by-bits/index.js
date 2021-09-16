//const arr = [7, 6, 15, 8]; // => [8, 6, 7, 15] // passed
//const arr = [3, 8, 3, 6, 5, 7, 9, 1]; // => [1, 8, 3, 3, 5, 6, 9, 7] //failed
const arr = [9,4,5,3,5,7,2,56,8,2,6,8,0]; // => [0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56]// failed
//                                              [0, 2, 2, 4, 8, 8, 9, 5, 5, 3, 6, 7, 56]


let countBits =(binary)=> {
    let result = binary.split("").reduce((sum, el) => sum+el,0)
    return result
}

function sortByBit(arr) {
// program to convert decimal to binary

    // take input
//    let number = parseInt(3);
    // convert to binary
//    let result = number.toString(2);

    let binArr = arr.map( el=> {
        return parseInt(el).toString(2)
    })
    console.log("Source array:",arr)
    console.log("Bin array:",binArr)
    console.log(countBits(binArr[0]))
    binArr.sort()
    let result = binArr.map( el => parseInt(el,2))
    console.log("Sorted array:",result)

}

sortByBit(arr)

// TASK
// In this kata you're expected to sort an array of 32-bit integers in ascending order of the number of on bits they have.
//
// E.g Given the array [7, 6, 15, 8]
//
// 7 has 3 on bits (000...0111)
// 6 has 2 on bits (000...0011)
// 15 has 4 on bits (000...1111)
// 8 has 1 on bit (000...1000)
// So the array in sorted order would be [8, 6, 7, 15].
//
//     In cases where two numbers have the same number of bits, compare their real values instead.
//
//     E.g between 10 (...1010) and 12 (...1100), they both have the same number of on bits '2' but the integer 10 is less than 12 so it comes first in sorted order.
//
//     Your task is to write the function sortBybit() that takes an array of integers and sort them as described above.
//
//     Note: Your function should modify the input rather than creating a new array.
//
// sortByBit([3, 8, 3, 6, 5, 7, 9, 1]) // => [1, 8, 3, 3, 5, 6, 9, 7]
//
// TEST
// // Basic test
//
// let a = [3, 8, 3, 6, 5, 7, 9, 1];
// sortByBit(a);
//
// Test.assertDeepEquals(a, [1, 8, 3, 3, 5, 6, 9, 7]);
//
// let b = [9,4,5,3,5,7,2,56,8,2,6,8,0];
// sortByBit(b);
//
// Test.assertDeepEquals(b, [0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56]);