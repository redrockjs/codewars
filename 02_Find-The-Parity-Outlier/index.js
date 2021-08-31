//myArray = [160, 3, 1719, 19, 11, 13, -21];
myArray = [2, 4, 0, 100, 4, 11, 2602, 36];

function isEven(integers) {
    return (integers % 2 === 0) ? true : false;
}

function isEvenArray(arr) {
    let positiveArr = arr.filter(number => isEven(number));
    return positiveArr.length > 1 ? true : false
}

function findOutlier(integers) {
    let result;
    if (isEvenArray(integers)) {
        result = integers.filter(number => !isEven(number));
    } else {
        result = integers.filter(number => isEven(number));
    }
    return result[0]
}

function findOutlier2(integers) {
    let evenArr = integers.filter(number => isEven(number));
    let oddArr = integers.filter(number => !isEven(number));

    return evenArr.length > 1 ? oddArr[0] : evenArr[0]
}


console.log(findOutlier2(myArray));

// Sample tests https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript


// describe("Tests", () => {
//     it("test", () => {
//         Test.assertEquals(findOutlier([0, 1, 2]), 1)
//         Test.assertEquals(findOutlier([1, 2, 3]), 2)
//         Test.assertEquals(findOutlier([2,6,8,10,3]), 3)
//         Test.assertEquals(findOutlier([0,0,3,0,0]), 3)
//         Test.assertEquals(findOutlier([1,1,0,1,1]), 0)
//     });
// });