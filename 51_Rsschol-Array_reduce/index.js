Array.prototype.reduce = function (process, initial) {
    let result = initial;

    if (initial === undefined) {
        if (typeof this[0] === "string") { result = ""}
        if (typeof this[0] === "number") { result = 0}
    }

    for (let i = 0; i < this.length; i++) {
        // result += this[i]
        // process(result, this[i])
        result = process(result, this[i])
        // console.log(result)
    }
    //console.log(result)
    return result
};

//['a', 'y', '!'].reduce(function (x, y) {return x + y}, 'y');
//[1,2,3].reduce( function(sum, next){return sum+next}, 0);
//['a','b','a'].reduce( function(obj, elem){if(!obj[elem]) obj[elem] = 0; obj[elem] += 1; return obj}, {})

//function sum(x,y){return x+y}
//function sum(x,y) {return x-y}
//function count(obj,elem){  if(!obj[elem]) obj[elem] = 0;  obj[elem] += 1;  return obj}

// ['u','m'].reduce(sum, 's');         // 'sum'
// ['i','rd','ies'].reduce(sum, 'b');  // 'birdies'
// ['fall','aff','les'].reduce(sum);   // 'fallaffles'
//
// [1,2,3,4,5].reduce(sum);  // 15
// [2,3,4,5].reduce(sum, 1); // 15
// [10,5].reduce(sum, 15);  // 0

// ['bird','bee','bird','bird'].reduce(count, {}); //{'bird':3,'bee':1} )
// ['bee','bird','coconut'].reduce(count, {'bird':3,'bee':1}); //{'bird':4,'bee':2, 'coconut':1})
// [].reduce(count, {'bird':3,'bee':100}); //{'bird':3,'bee':100})

//let lst = [1, 2, 3, 4, 5]
//lst.reduce(sum,15), // 30 )
//['l','a','m','a'].reduce(sum, 'l'); //, 'llama')


//TASK
// In this kata, you must define the Array.reduce method.
//
// I have disabled the pre-existing reduce methods.
//
// Here's how it works:
//
// [1,2,3].reduce( function(sum, next){return sum+next}, 0)
// // => 6
//
// ['a','b','a'].reduce( function(obj, elem){if(!obj[elem]) obj[elem] = 0; obj[elem] += 1; return obj}, {})
// // => {'a':2, 'b':1}
// Summary: The reduce method goes through each element of an array, applies the function to whatever the
// function returned last, and returns the last outcome. On the first iteration, it should pass the initial
// value to the function, as well as the first element of the array. If no initial value is passed, skip to the
// first element of the array.
//
// Ruby methods should expect a lambda.

//TEST
//describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals( ['a','y','!'].reduce(function(x,y){return x+y}, 'y'), 'yay!')
//   });
// });

//BEST
//Array.prototype.reduce = function(process, initial) {
//
//   for(const el of this){
//     if(!initial){
//       if(typeof(el) === 'number') initial = 0
//       if(typeof(el) === 'string') initial = ''
//       if(typeof(el) === 'object') initial = {}
//       if(typeof(el) === 'array') initial = []
//     }
//     initial = process(initial, el)
//   }
//   return initial
// }