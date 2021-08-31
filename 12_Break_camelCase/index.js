text = "camelCasing"

let isUpperCase = (symb) => (symb === symb.toUpperCase()) ? true : false

// complete the function
function solution(string) {
    let symbArr = string.split("");
    let newString = [];

    symbArr.forEach((el) => {
            if (isUpperCase(el)) {
                newString.push(" ");
                newString.push(el);
            } else {
                newString.push(el);
            }
        }
    )
    return newString.join("")
}

console.log(solution(text))

//console.log(solution(text))

// TASK
// Complete the solution so that the function will break up camel casing, using a space between words.
//
//     Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


//TEST
// describe("Tests", () => {
//     it("test", () => {
//         Test.assertEquals(solution('camelCasing'), 'camel Casing', 'Unexpected result')
//         Test.assertEquals(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')
//
//     });
// });

//BEST
// complete the function
// function solution(string) {
//     return(string.replace(/([A-Z])/g, ' $1'));
// }