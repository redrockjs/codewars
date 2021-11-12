

function generateName()
{
    let alphabet = []
    let result =''

    for (let i=0; i<26; i++) alphabet.push(String.fromCharCode(65 + i));

    for (let j=0; j<6; j++) result += alphabet[Math.round(Math.random()*25)]

    return result
}

generateName()

// for(var i = 0;i<10;i++)
// {
//   let name = generateName();
//
// console.log(typeof name) //, "string" , "Name has to be a string.");
// //photoManager.nameWasUnique(name), true, "Name has to be unique.");
// console.log(name.length) //, 6, "Name has to be 6 digits long.");
// }

// TASK
// You are developing an image hosting website.
//
// You have to create a function for generating random and unique image filenames.
//
// Create a function for generating a random 6 character string which will be used to access the photo URL.
//
// To make sure the name is not already in use, you are given access to an PhotoManager object.
//
// You can call it like so to make sure the name is unique
//
// // at this point, the website has only one photo, hosted on the 'ABCDEF' url
// photoManager.nameExists('ABCDEF'); // returns true
// photoManager.nameExists('BBCDEF'); // returns false
// Note: We consider two names with same letters but different cases to be unique.

//TEST
// describe("Tests", () => {
//   it("test", () => {
// for(var i = 0;i<10;i++)
// {
//   var name = generateName();
//
//   Test.assertEquals(typeof name, "string" , "Name has to be a string.");
//   Test.assertEquals(photoManager.nameWasUnique(name), true, "Name has to be unique.");
//   Test.assertEquals(name.length, 6, "Name has to be 6 digits long.");
// }
//   });
// });