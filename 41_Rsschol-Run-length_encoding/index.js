let str = "hello world!" //=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]

let runLengthEncoding = (str) => {
    let arr = str.split(""),
        resultArr = []
    let tmp = [];
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
            //console.log("if-1")
            resultArr.push([1, arr[i]])
            //continue
        }

        if (arr[i] !== arr[i - 1] && arr[i] === arr[i + 1]) {
            //console.log("if-2")
            resultArr.push([1, arr[i]])
            //continue
        }
        if (arr[i] === arr[i + 1]) {
            tmp = resultArr.pop()
            //console.log("if-3")
            resultArr.push([tmp[0]+1, arr[i]])
            //console.log("pop -1")
        }
    }
    return resultArr // << fix this
}

console.log(runLengthEncoding(str))
//runLengthEncoding(str)

// TASK
// Run-length encoding (RLE) is a very simple form of data compression in which runs of data
// (that is, sequences in which the same data value occurs in many consecutive data elements)
// are stored as a single data value and count, rather than as the original run. Wikipedia
//
// Task
// Your task is to write such a run-length encoding. For a given string, return a list (or array)
// of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct the
// original string by replicating the character sx ix times and concatening all those strings.
// Your run-length encoding should be minimal, ie. for all i the values si and si+1 should differ.
//
//     Examples
// As the article states, RLE is a very simple form of data compression. It's only suitable
// for runs of data, as one can see in the following example:
//
// runLengthEncoding("hello world!")
// //=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
// It's very effective if the same data value occurs in many consecutive data elements:
//
// runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
// // => [[34,'a'], [3,'b']]

//TEST
// var randomString = function(n){
//     var i, s = "";
//     for(i = 0; i < n; ++i)
//         s += (new Array((Math.random() * 5 + 1) | 0)).join(String.fromCharCode((Math.random() * 26 + "A".charCodeAt(0)) | 0));
//     return s;
// }
//
// describe("runLengthEncoding",function(){
//     it("should work for some examples",function(){
//         Test.assertSimilar(runLengthEncoding(""), []);
//         Test.assertSimilar(runLengthEncoding("abc"), [[1,'a'],[1,'b'],[1,'c']]);
//         Test.assertSimilar(runLengthEncoding("aab"), [[2,'a'],[1,'b']]);
//         Test.assertSimilar(runLengthEncoding("hello world!"),
//             [[1,'h'],[1,'e'],[2,'l'],[1,'o'],[1,' '],[1,'w'],[1,'o'],[1,'r'],[1,'l'],[1,'d'],[1,'!']]);
//         Test.assertSimilar(runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"),
//             [[34,'a'], [3,'b']]);
//         Test.assertSimilar(
//             runLengthEncoding("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW"),
//             [[12,'W'],[1,'B'],[12,'W'],[3,'B'],[24,'W'],[1,'B'],[14,'W']]
//         );
//     });
// });
// describe("inverse operations",function(){
//     it("should return the original string",function(){
//         var i, inversRLE = function(arr){
//             return arr.reduce(function(p,e){ return p += (new Array(e[0] + 1).join(e[1])); }, "");
//         }, s;
//         for(i = 0;  i < 100; ++i){
//             s = randomString(20);
//             Test.assertEquals(inversRLE(runLengthEncoding(s)), s);
//         }
//     });
// });

//BEST
// function runLengthEncoding(str) {
//     var arr = [],
//         counter = 1;
//
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === str[i + 1]) {
//             counter++;
//         } else {
//             arr.push([counter, str[i]]);
//             counter = 1;
//         }
//     }
//
//     return arr;
// }