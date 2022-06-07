// console.log("Hello World");

// A function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. Case insensitive result
let computerSelection;

let options = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    return options[~~(Math.random() * options.length)].toUpperCase();
}
console.log(computerPlay());

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
let playerSelection = prompt("Select from rock, paper and scissors").toUpperCase;


function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toUpperCase();
    // playerSelection = playerSelection.toUpperCase();
    if (playerSelection == computerSelection) {
        console.log('ISSSA DRAW!!');
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            console.log('You lost!');
        } else {
            console.log('You win')
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            console.log('You lose');
        } else {
            console.log('You win')
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            console.log('You lose') 
        } else {
            console.log('You win');
        }
    } else {
        console.log('ERROR');
    }
}

console.log(playRound(playerSelection, computerSelection));