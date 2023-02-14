// Write a js program to count a minimum number of notes in a given amount.

let amount = 50746;


let notes = [ 5000, 1000, 500, 100, 50, 20, 10, 5, 1 ];
let noteCounter = Array(9).fill(0);

for (let i = 0; i < 9; i++) {
    if (amount >= notes[i]) {
        noteCounter[i] = Math.floor(amount / notes[i]);
        amount = amount % notes[i];
    }
}

console.log("Currency Count ->");
for (let i = 0; i < 9; i++) {
    if (noteCounter[i] != 0) {
        console.log(notes[i] + " : "
            + noteCounter[i]);
    }
}