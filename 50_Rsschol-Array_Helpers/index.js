Array.prototype.square = function () {
    if (this.length !== 0) {
        return this.map(el => el ** 2)
    } else {
        return 0
    }
};

Array.prototype.cube = function () {
    if (this.length !== 0) {
        return this.map(el => el ** 3)
    } else {
        return 0
    }
};
Array.prototype.average = function () {
    if (this.length !== 0) {
        return this.reduce((sum, el) => sum + el) / this.length
    } else {
        return NaN
    }
};

Array.prototype.sum = function () {
    if (this.length !== 0) {
        return this.reduce((sum, el) => sum + el)
    } else {
        return 0
    }
};
// четный
Array.prototype.even = function () {
    if (this.length !== 0) {
        let result = this.map((el, idx) => {
            if (idx % 2 !== 0) return el
        })
        return result.filter(el => el)
    } else {
        return 0
    }
};
// нечетный
Array.prototype.odd = function () {
    if (this.length !== 0) {
        let result = this.map((el, idx) => {
            if (idx % 2 === 0) return el
        })
        return result.filter(el => el)
    } else {
        return 0
    }
};

//let numbers = [1, 2, 3, 4, 5];
let numbers = [];

console.log(numbers.square())  // must return [1, 4, 9, 16, 25]
console.log(numbers.cube())    // must return [1, 8, 27, 64, 125]
console.log(numbers.average()) // must return 3)
console.log(numbers.sum()) // must return 15
console.log(numbers.even())    // must return [2, 4]
console.log(numbers.odd())     // must return [1, 3, 5]

//TASK
//This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().
//
// Explanation:
//
// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers
// Note: the original array must not be changed in any case!
//
// Example
// var numbers = [1, 2, 3, 4, 5];
//
// numbers.square();  // must return [1, 4, 9, 16, 25]
// numbers.cube();    // must return [1, 8, 27, 64, 125]
// numbers.average(); // must return 3
// numbers.sum();     // must return 15
// numbers.even();    // must return [2, 4]
// numbers.odd();     // must return [1, 3, 5]

//TEST
//describe("Tests", () => {
//   it("test", () => {
// var numbers = [1, 2, 3, 4, 5];
// Test.assertSimilar(numbers.square(), [1, 4, 9, 16, 25]);
// Test.assertSimilar(numbers.cube(), [1, 8, 27, 64, 125]);
// Test.assertEquals(numbers.sum(), 15, 'Wrong sum');
// Test.assertEquals(numbers.average(), 3, 'Wrong average');
// Test.assertSimilar(numbers.even(), [2, 4], 'Wrong result for even()');
// Test.assertSimilar(numbers.odd(), [1, 3, 5], 'Wrong result for odd()');
//   });
// });