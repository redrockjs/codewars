class Fly {
    move(unit) {
        return unit.position+=10
    }
}

class Walk {
    move(unit) {
        return unit.position+=1
    }
}

class Viking {
    constructor() {
        this.position=0
        this.moveBehavior=new Walk()
    }

    move() {
        return this.moveBehavior.move(this)
    }
}

let viking = new Viking();

viking.move();
console.log(viking.position)
viking.move(viking.position);
console.log(viking.position)
viking.move(viking.position);


//TASK
// The Strategy Design Pattern can be used, for example, to determine how a unit moves in
// the StarCraft game.
//
// The pattern consists in having a different strategy to one functionality. A unit, for example,
// could move by walking or flying.
//
// Your Task
// Complete the code so that when a Viking is flying its position increases by 10 each time it
// moves. If it is walking then the position is increased by 1.
//
// In this Kata, Viking starts as a ground unit when it is created.
//
// You have 3 classes:
//
// Viking: has a position, moveBehavior and move method.
// Fly and Walk: the move behaviors with the move(unit) method. Fly has to move 10 positions at a
// time and Walk has to move 1.

//TEST
// describe('Strategy', () => {
//   it('Walk Move', () => {
//     let viking = new Viking();
//
//     viking.move();
//     Test.assertEquals(viking.position, 1);
//     viking.move();
//     Test.assertEquals(viking.position, 2);
//   });
//
//   it('Fly Move', () => {
//     let viking = new Viking();
//     viking.moveBehavior = new Fly();
//
//     viking.move();
//     Test.assertEquals(viking.position, 10);
//     viking.move();
//     Test.assertEquals(viking.position, 20);
//   });
//
//   it('Mix Move', () => {
//     let viking = new Viking();
//
//     viking.move();
//     Test.assertEquals(viking.position, 1);
//     viking.moveBehavior = new Fly();
//     viking.move();
//     Test.assertEquals(viking.position, 11);
//   });
// });