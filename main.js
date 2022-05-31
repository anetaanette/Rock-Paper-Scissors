// console.log("Hello World");

// A function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

let options = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
}
console.log(computerPlay());


// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

function oneRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('ISSSA DRAW!!');
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        console.log('You won!');
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        console.log('You lost!!!');
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        console.log('You won!');
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        console.log('You won!');
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        console.log('You lost!');
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        console.log('You lost!');
    }
}

// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
// Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results: