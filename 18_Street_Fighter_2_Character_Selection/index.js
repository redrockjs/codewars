let fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]
let initial_position = [0, 0]

let moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']
//let moves = ['up', 'down', 'up', 'up', 'down']

let result = ['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']

function streetFighterSelection(fighters, position, moves) {
    let [posH,posV] = [0,0]

    for (let i = 0; i < moves.length; i++) {
        console.log(i, moves[i], posH, posV)

        if (moves[i] === 'up' && posV===0) { posV ===1; continue}
        if (moves[i] === 'up' && posV===1) { posV === 0; continue}

        if ((moves[i] === 'down') && (posV === 0)) { posV = 1; continue}
        if ((moves[i] === 'down') && (posV === 1)) { posV = 0; continue}

        if (moves[i] === 'right' && posH >= 0 && posH <= 4) {posH++ ; continue }
        if (moves[i] === 'right' && posH === 5 && posV === 0) {
            posH = 0;
            posV = 1;
            continue;
        }
        if (moves[i] === 'right' && posH === 5 && posV === 1) {
            posH = 0;
            posV = 0;
            continue;
        }

        if (moves[i] === 'left' && posH >= 1 && posH <= 5) posH--
        if (moves[i] === 'left' && posH === 0 && posV === 0) {
            posH = 5;
            posV = 1;
            continue;
        }
        if (moves[i] === 'left' && posH === 0 && posV === 1) {
            posH = 5;
            posV = 0;
            continue;
        }


    }

    return "";
}

// console.log(streetFighterSelection(fighters,initial_position,moves))
streetFighterSelection(fighters, initial_position, moves)

// TASK
// Short Intro
//
// Some of you might remember spending afternoons playing Street Fighter 2 in some Arcade back in the 90s or emulating it nowadays with the numerous emulators for retro consoles.
//
//     Can you solve this kata? Suuure-You-Can!
//
//     UPDATE: a new kata's harder version is available here.
//
// The Kata
//
// You'll have to simulate the video game's character selection screen behaviour, more specifically the selection grid. Such screen looks like this:
//
// Screen: https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.fightersgeneration.com%2Fnp5%2Fgm%2Fsf2ce-s2.jpg&f=1
// Selection Grid Layout in text:
//
// | Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
// | Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |
// Input
//
// the list of game characters in a 2x6 grid;
// the initial position of the selection cursor (top-left is (0,0));
// a list of moves of the selection cursor (which are up, down, left, right);
// Output
//
// the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, wether successful or not, see tests);
// Rules
//
// Selection cursor is circular horizontally but not vertically!
//
//     As you might remember from the game, the selection cursor rotates horizontally but not vertically; that means that if I'm in the leftmost and I try to go left again I'll get to the rightmost (examples: from Ryu to Vega, from Ken to M.Bison) and vice versa from rightmost to leftmost.
//
//     Instead, if I try to go further up from the upmost or further down from the downmost, I'll just stay where I am located (examples: you can't go lower than lowest row: Ken, Chun Li, Zangief, Dhalsim, Sagat and M.Bison in the above image; you can't go upper than highest row: Ryu, E.Honda, Blanka, Guile, Balrog and Vega in the above image).
//
// Test
//
// For this easy version the fighters grid layout and the initial position will always be the same in all tests, only the list of moves change.
//
//     Notice: changing some of the input data might not help you.
//
//     Examples
//
// 1.
//
// fighters = [
//     ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//     ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
// ]
// initial_position = (0,0)
// moves = ['up', 'left', 'right', 'left', 'left']
// then I should get:
//
//     ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
//     as the characters I've been hovering with the selection cursor during my moves. Notice: Ryu is the first just because it "fails" the first up See test cases for more examples.
//
// 2.
//
// fighters = [
//     ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//     ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
// ]
// initial_position = (0,0)
// moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']
// Result:
//
//     ['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']

//TEST
// fighters = [
//     ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//     ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
// ];
//
// moves = ['up', 'left', 'right', 'left', 'left'];
// describe("Solution", function(){
//     it("should work with few moves", function(){
//         Test.assertSimilar(streetFighterSelection(fighters, [0,0], moves),['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']);
//     });
// });
//
// moves = [];
// describe("Solution", function(){
//     it("should work with no selection cursor moves", function(){
//         Test.assertSimilar(streetFighterSelection(fighters, [0,0], moves),[]);
//     });
// });
//
// moves = ["left","left","left","left","left","left","left","left"];
// describe("Solution", function(){
//     it("should work when always moving left", function(){
//         Test.assertSimilar(streetFighterSelection(fighters, [0,0], moves),['Vega', 'Balrog', 'Guile', 'Blanka', 'E.Honda', 'Ryu', 'Vega', 'Balrog']);
//     });
// });
//
// moves = ["right","right","right","right","right","right","right","right"];
// describe("Solution", function(){
//     it("should work when always moving right", function(){
//         Test.assertSimilar(streetFighterSelection(fighters, [0,0], moves),['E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega', 'Ryu', 'E.Honda', 'Blanka']);
//     });
// });
//
// moves = ["up","left","down","right","up","left","down","right"];
// describe("Solution", function(){
//     it("should use all 4 directions clockwise twice", function(){
//         Test.assertSimilar(streetFighterSelection(fighters, [0,0], moves),['Ryu', 'Vega', 'M.Bison', 'Ken', 'Ryu', 'Vega', 'M.Bison', 'Ken']);
//     });
// });
//
// moves = ["down","down","down","down"];
// describe("Solution", function(){
//     it("should work when always moving down", function(){
//         Test.assertSimilar(streetFighterSelection(fighters, [0,0], moves), ['Ken', 'Ken', 'Ken', 'Ken']);
//     });
// });
//
// moves = ["up","up","up","up"];
// describe("Solution", function(){
//     it("should work when always moving up", function(){
//         Test.assertSimilar(streetFighterSelection(fighters, [0,0], moves), ['Ryu', 'Ryu', 'Ryu', 'Ryu']);
//     });
// });