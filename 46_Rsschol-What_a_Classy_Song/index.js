class Song {
    constructor(title, artist) {
        this.title = title
        this.artist = artist
        this.listeners = []
        this.prevLenght = 0
    }

    howMany(arr) {
        let tmpArr = arr.map(el => el.toLowerCase())
        tmpArr = [...new Set(tmpArr)]

        this.prevLenght= this.listeners.length
        this.listeners = [...this.listeners, ...tmpArr]
        this.listeners = [...new Set(this.listeners)]

        return this.listeners.length - this.prevLenght
    }
}

//let mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

// mountMoose.howMany(['John', 'Fred', 'Bob', 'Carl', 'RyAn']) //5
// mountMoose.howMany(['JoHn', 'Luke', 'AmAndA'])              //2
// mountMoose.howMany(['Amanda', 'CalEb', 'CarL', 'Furgus'])    //2
// mountMoose.howMany(['JOHN', 'FRED', 'BOB', 'CARL', 'RYAN', 'KATE']), //1

//mountMoose.howMany(['John', 'joHN', 'carl']);

//mountMoose.howMany(['aaa', 'aaA', 'zzz']);

//console.log(mountMoose.listeners)

//TASK
// Your job is to create a class called Song.
//
//     A new Song will take two parameters, title and artist.
//
//     const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');
//
// mountMoose.title => 'Mount Moose'
// mountMoose.artist => 'The Snazzy Moose'
// You will also have to create an instance method named howMany() (or how_many()).
//
// The method takes an array of people who have listened to the song that day. The output should
// be how many new listeners the song gained on that day out of all listeners. Names should be treated
// in a case-insensitive manner, i.e. "John" is the same as "john".
//
//     Example
// const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');
//
// // day 1 (or test 1)
// mountMoose.howMany(['John', 'Fred', 'BOb', 'carl', 'RyAn']); => 5
// // These are all new since they are the first listeners.
//
// // day 2
// mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']); => 2
// // Luke and Amanda are new, john already listened to it the previous day
// Also if the same person listened to it more than once a day it should only count them once.
//
//     Example
// const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');
//
// // day 1
// mountMoose.howMany(['John', 'joHN', 'carl']); => 2
// Good luck!


//TEST
// const chai = require('chai');
// const assert = chai.assert;
//
// let mountMoose = new Song('Mount Moose', 'The Snazzy Moose');
//
// describe('Example Tests', function() {
//     it('Test for title and artist', function() {
//         assert.strictEqual(mountMoose.title, 'Mount Moose');
//         assert.strictEqual(mountMoose.artist, 'The Snazzy Moose');
//     });
//     it(`Given: 'John', 'Fred', 'Bob', 'Carl', 'RyAn'`, function() {
//         assert.strictEqual(mountMoose.howMany(['John', 'Fred', 'Bob', 'Carl', 'RyAn']), 5);
//     });
//     it(`Given: 'JoHn', 'Luke', 'AmAndA'`, function() {
//         assert.strictEqual(mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']), 2);
//     });
//     it(`Given: 'Amanda', 'CalEb', 'CarL', 'Furgus'`, function() {
//         assert.strictEqual(mountMoose.howMany(['Amanda', 'CalEb', 'CarL', 'Furgus']), 2);
//     });
//     it(`Given: 'JOHN', 'FRED', 'BOB', 'CARL', 'RYAN', 'KATE'`, function() {
//         assert.strictEqual(mountMoose.howMany(['JOHN', 'FRED', 'BOB', 'CARL', 'RYAN', 'KATE']), 1);
//     });
//     it(`Given: 'Jack', 'jacK'`, function() {
//         assert.strictEqual(mountMoose.howMany(['Jack', 'jacK']), 1);
//     });
// });
