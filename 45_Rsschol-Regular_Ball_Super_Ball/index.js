class Ball {
    constructor(balltype = "regular") {
        this.ballType = balltype
    }
}

ball1 = new Ball();
ball2 = new Ball("super");

console.log(ball1.ballType)     //=> "regular"
console.log(ball2.ballType)     //=> "super"


// TASK
// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.
//
//     If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

//TEST
// describe("Tests", () => {
//     it("test", () => {
// // Create your own tests here. These are some of the methods available:
// //  Test.expect(boolean, [optional] message)
// //  Test.assertEquals(actual, expected, [optional] message)
// //  Test.assertSimilar(actual, expected, [optional] message)
// //  Test.assertNotEquals(actual, expected, [optional] message)
//         Test.assertEquals(new Ball().ballType, "regular");
//         Test.assertEquals(new Ball("super").ballType, "super");
//     });
// });