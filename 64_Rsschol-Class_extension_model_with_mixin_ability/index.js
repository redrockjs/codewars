function base(){
    this.name = 'base';
}

function mixin(){
    this.addProp=function(p){};
    this.getProp=function(p){};
}

function extend(className, superClass, mixin, scope){
    className = new superClass()
}

extend('child', base);
let c = new child();
c.name //,'base', 'Child name is still "base"');


//TASK
//I always wanted to be able to extend my classes in a way closer to the classic programming languages
// and also to have the ability to decorate new classes with some other utility classes methods without
// having to add them in the inheritence chain.
//
// Idealy if I want to have a new class named className extended from superClass and having all the methods
// in the mixin as well, I should get it like this:
//
// extend(className, superClass[, mixin, scope]);
//
// where :
//
// {String} className is the name of the class I want to define
// {Function} superClass is the class I am extending from
// {Function} mixin is an optional class from which, when specified, I am copying all the methods
// {Object} scope is an optional argument giving the scope where the class should be defined. If not
// specified the global scope will be used.
// Your task will be to write this extend function.

//TEST
// describe("Tests", () => {
//   it("test", () => {
// function base(){
//   this.name = 'base';
// }
//
// function mixin(){
//   this.addProp=function(p){};
//   this.getProp=function(p){};
// }
//
// //Test inheritance
// extend('child', base);
// var c = new child();
// Test.assertEquals(c.name,'base', 'Child name is still "base"');
//
// //Test the mixin
// extend('child', base, mixin);
// var c = new child();
// Test.assertEquals(typeof(c.addProp), 'function', 'Child has a method addProp');
//
//
// //Test scope
// var ns={};
// extend('child', base, mixin, ns);
// var c = new child();
// Test.assertEquals(typeof(ns['child']), 'function', 'Child declared in the scope');
//
//   });
// });