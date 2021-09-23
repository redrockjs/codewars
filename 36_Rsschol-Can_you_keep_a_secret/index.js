function createSecretHolder(secret) {
    let secretKey = secret
    let getSecret = () => secretKey
    let setSecret = (param) => secretKey = param

    return {
        getSecret,
        setSecret
    }
}

obj = createSecretHolder(5)

console.log(obj.getSecret())
obj.setSecret(2)
console.log(obj.getSecret())

//TASK
// There's no such thing as private properties on a coffeescript object! But, maybe there are?
//
// Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods
//
// getSecret() which returns the secret
// setSecret() which sets the secret
// obj = createSecretHolder(5)
// obj.getSecret() # returns 5
// obj.setSecret(2)
// obj.getSecret() # returns 2

//TEST
//// Since Node 10, we're using Mocha.
//// You can use `chai` for assertions.
// const chai = require("chai");
// const assert = chai.assert;
// // Uncomment the following line to disable truncating failure messages for deep equals, do:
// // chai.config.truncateThreshold = 0;
// // Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// // Uncomment the following to use the old assertions:
// // const Test = require("@codewars/test-compat");
//
// describe("Solution", function() {
//     it("should test for something", function() {
//         // Test.assertEquals(1 + 1, 2);
//         // assert.strictEqual(1 + 1, 2);
//     });
// });
//BEST
// function createSecretHolder(secret) {
//     return {
//         getSecret: function() { return secret; },
//         setSecret: function(v) { secret = v; }
//     };
// }