let obj = {"Java": 10, "Ruby": 80, "Python": 65}

function myLanguages(results) {
    let arr = []
    for (let item in results) {
        if (results[item]>=60) arr.push([item,results[item]])
    }
    arr.sort((a,b) => b[1]-a[1])
    return  arr.map(el=>el[0])
}


console.log(myLanguages(obj))


//TASK
// Task
// You are given a dictionary/hash/object containing some languages and your test results in
// the given languages. Return the list of languages where your test score is at least 60,
// in descending order of the results.
//
//     Note: the scores will always be unique (so no duplicate values)
//
// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

//TEST
// describe("myLanguages", function(){
//     it("Fixed tests", function(){
//         Test.assertDeepEquals(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}), ["Ruby", "Python"])
//         Test.assertDeepEquals(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}), ["Dutch", "Greek", "Hindi"])
//         Test.assertDeepEquals(myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20}), [])
//     });
// });

//BEST
// function myLanguages(a) {
//     return Object.keys(a).filter(x=>a[x]>=60).sort((x,y)=>a[y]-a[x])
// }