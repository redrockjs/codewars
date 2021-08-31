var moveZeros = function (arr) {
    // TODO: Program me
    let result=[];
    let cnt=0;

    for (let i=0; i<=arr.length-1;i++){
        if (arr[i] === 0) {
            cnt++;
            continue
        }
        result.push(arr[i])
    }
    for (let j=0; j<cnt; j++) result.push(0)
    return result
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))

// TASK Moving Zeros To The End
//
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
//
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
//
// TESTS
// describe("Tests", () => {
//     it("test", () => {
//         Test.assertEquals(
//             JSON.stringify(moveZeros([1,2,0,1,0,1,0,3,0,1])),
//             JSON.stringify([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])
//         );
//     });
// });


// BEST
// var moveZeros = function (arr) {
//     return arr
//         .filter((val) => val !== 0)
//         .concat(arr.filter((val) => val === 0));
// }