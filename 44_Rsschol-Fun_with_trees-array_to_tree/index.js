var TreeNode = function (value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
};
var arr = [17, 0, -4, 3, 15]; //-> new TreeNode(17, new TreeNode(0, new TreeNode(3), new TreeNode(15)), new TreeNode(-4));


function arrayToTree(array) {

};

console.log(arrayToTree(arr))

// TASK
// You are given a non-null array of integers. Implement the method arrayToTree which creates
// a binary tree from its values in accordance to their order, while creating nodes by depth
// from left to right.
//
//     For example, given the array [17, 0, -4, 3, 15] you should create the following tree:
//
//     17
//     /  \
//   0   -4
//   / \
// 3   15
// The class TreeNode is available for you:
//
// var TreeNode = function(value, left, right) {
//     this.value = value;
//     this.left = left;
//     this.right = right;
// };

//TEST
// describe("arrayToTree", function() {
//
//     it("empty array", function() {
//         var array = [];
//         var expected = undefined;
//         test(array, expected);
//     });
//
//     it("array with multiple elements", function() {
//         var array = [17, 0, -4, 3, 15];
//         var expected = new TreeNode(17, new TreeNode(0, new TreeNode(3), new TreeNode(15)), new TreeNode(-4));
//         test(array, expected);
//     });
// });
//
// function test(array, expected) {
//     Test.assertEquals(JSON.stringify(arrayToTree(array)), JSON.stringify(expected));
// };