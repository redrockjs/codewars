// const arr = [7, 6, 15, 8]; // => [8, 6, 7, 15]
 let arr = [3, 8, 3, 6, 5, 7, 9, 1]; // => [1, 8, 3, 3, 5, 6, 9, 7]
// let arr = [9,4,5,3,5,7,2,56,8,2,6,8,0]; // => [0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56]


function sortByBit(arr) {

    function countBits (binary) {return binary.split("").reduce((sum, el) => sum + Number(el), 0)};

    arr.sort((a, b) => {
        // if (countBits(a.toString(2)) === countBits(b.toString(2)) && a < b) {
        //     console.log(countBits(a.toString(2)) - countBits(b.toString(2)))
        //     return -1
        // }

        console.log(a, b)
        console.log(a.toString(2), b.toString(2))
        console.log(countBits(a.toString(2)), countBits(b.toString(2)))
        console.log("-----------------")
        return (countBits(a.toString(2)) === countBits(b.toString(2)) && a < b) ? -1 : countBits(a.toString(2)) - countBits(b.toString(2))
        return countBits(a.toString(2)) - countBits(b.toString(2)) || a - b
    })
}

sortByBit(arr)

console.log(arr)

// function sortByBit(arr) {
//     let countBits =(binary)=> binary.split("").reduce((sum, el) => sum + Number(el), 0)
//     arr.sort((a, b) => countBits(a.toString(2)) - countBits(b.toString(2)) || a - b)
// }