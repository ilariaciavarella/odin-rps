const rps = ["Rock", "Paper", "Scissors"];
let singleResult;

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

// Get player's selection using prompt and store it in a variable
function getPlayerChoice() {
    return prompt("Rock, paper or scissors?", "");
}


// Compare every case (rock vs paper, rock vs scissors, paper vs scissors, rock vs rock, paper vs paper, scissors vs scissors)
// First check playerSelection 
function singleRound(computerSelection, playerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();

    switch (playerSelection.toLowerCase()) {
        case "rock":
            if (computerSelection === "Paper") {
                singleResult = "You lose! Paper beats Rock";
            } else if (computerSelection === "Scissors") {
                singleResult = "You won! Rock beats Scissors";
            } else {
                singleResult = "It's a tie! Try again.";
            }
            break;

        case "paper":
            if (computerSelection === "Scissors") {
                singleResult = "You lose! Scissors beats Paper";
            } else if (computerSelection === "Rock") {
                singleResult = "You won! Paper beats Rock";
            } else {
                singleResult = "It's a tie! Try again.";
            }
            break;

        case "scissors":
            if (computerSelection === "Rock") {
                singleResult = "You lose! Rock beats Scissors";
            } else if (computerSelection === "Paper") {
                singleResult = "You won! Scissors beats Paper";
            } else {
                singleResult = "It's a tie! Try again.";
            }
            break;

        default:
            singleResult = "What you entered is not valid, try again.";
    }

    // Return winner
    return singleResult;
}

// Iterate 5 times
// For each round I want to give a point to whoever wins, at the end of the five rounds I want to compare the points and return the final winner
function game () {
    let playerPoints = 0;
    let computerPoints = 0;

    for (let i = 0; i < 5; i++) {
        singleRound();

        // Count times each winning
        if (singleResult.includes("won")) {
            playerPoints++;
        } else if (singleResult.includes("lose")) {
            computerPoints++;
        }
        console.log(singleResult);
        console.log("Score: " + playerPoints + " - " + computerPoints);
    }

    // Return final winner
    if (playerPoints > computerPoints) {
        console.log("You made it! You're the ultimate winner");
    } else if (playerPoints < computerPoints){
        console.log("I'm sorry, you'll be luckier next time");
    } else if (playerPoints == computerPoints) {
        console.log("No winners or losers this time");
    }
}

game();