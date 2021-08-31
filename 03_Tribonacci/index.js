const signature = [1, 1, 1]
const n = 4

function tribonacci(signature, n) {
    let result = [];
    if (n > 3) {
        result = signature;
        for (let i = 2; i <= n - 2; i++) {
            let num = signature[i - 2] + signature[i - 1] + signature[i];
            result.push(num);
        }
    } else {
        for (let i = 0; i < n; i++) result.push(signature[i]);
    }
    return result
}

console.log(tribonacci(signature, n))


// Tribonacci https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript
// Tests
// describe("Basic tests",function(){
//     Test.assertSimilar(tribonacci([1,1,1],10),[1,1,1,3,5,9,17,31,57,105])
//     Test.assertSimilar(tribonacci([0,0,1],10),[0,0,1,1,2,4,7,13,24,44])
//     Test.assertSimilar(tribonacci([0,1,1],10),[0,1,1,2,4,7,13,24,44,81])
//     Test.assertSimilar(tribonacci([1,0,0],10),[1,0,0,1,1,2,4,7,13,24])
//     Test.assertSimilar(tribonacci([0,0,0],10),[0,0,0,0,0,0,0,0,0,0])
//     Test.assertSimilar(tribonacci([1,2,3],10),[1,2,3,6,11,20,37,68,125,230])
//     Test.assertSimilar(tribonacci([3,2,1],10),[3,2,1,6,9,16,31,56,103,190])
//     Test.assertSimilar(tribonacci([1,1,1],1),[1])
//     Test.assertSimilar(tribonacci([300,200,100],0),[])
//     Test.assertSimilar(tribonacci([0.5,0.5,0.5],30),[0.5,0.5,0.5,1.5,2.5,4.5,8.5,15.5,28.5,52.5,96.5,177.5,326.5,600.5,1104.5,2031.5,3736.5,6872.5,12640.5,23249.5,42762.5,78652.5,144664.5,266079.5,489396.5,900140.5,1655616.5,3045153.5,5600910.5,10301680.5])
// })