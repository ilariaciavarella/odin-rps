const rps = ["Rock", "Paper", "Scissors"];

// Get computer's selection using random and store it in a variable
// First get random index of array
function getIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}

//Use index to get choice from array
function getComputerChoice() {
    let choiceInd = getIndex(rps);
    return rps[choiceInd];
}

//Store computer's choice in variable
let computerSelection = getComputerChoice();

console.log(computerSelection);

// Get player's selection using prompt and store it in a variable
let playerSelection = prompt("Rock, paper or scissors?", "");

console.log(playerSelection);

// Compare every case (rock vs paper, rock vs scissors, paper vs scissors, rock vs rock, paper vs paper, scissors vs scissors)
// First check playerSelection 
function singleRound(computerSelection, playerSelection) {
    let result;
    switch (playerSelection.toLowerCase()) {
        case "rock":
            if (computerSelection === "Paper") {
                result = "You lose! Paper beats Rock";
            } else if (computerSelection === "Scissors") {
                result = "You won! Rock beats Scissors";
            } else {
                result = "It's a tie! Try again.";
            }
            break;

        case "paper":
            if (computerSelection === "Scissors") {
                result = "You lose! Scissors beats Paper";
            } else if (computerSelection === "Rock") {
                result = "You won! Paper beats Rock";
            } else {
                result = "It's a tie! Try again.";
            }
            break;

        case "scissors":
            if (computerSelection === "Rock") {
                result = "You lose! Rock beats Scissors";
            } else if (computerSelection === "Paper") {
                result = "You won! Scissors beats Paper";
            } else {
                result = "It's a tie! Try again.";
            }
            break;

        default:
            result = "What you entered is not valid, try again.";
    }

// Return winner
    return result;
    console.log(result);
}

singleRound(computerSelection, playerSelection);

// Iterate 5 times
// Count times each winning
// Return final winner