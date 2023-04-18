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

// Get player's selection using buttons
const buttons = document.querySelectorAll('.btn');

function clickTr (e) {
    console.log(e.target);
    e.target.classList.add('clicked');
}

function getPlayerChoice (e) {
    console.log('Returned');
    console.log(e.target.innerHTML);
    return e.target.innerHTML;
}

buttons.forEach(button => button.addEventListener('click', clickTr));
buttons.forEach(button => button.addEventListener('click', getPlayerChoice));
buttons.forEach(button => button.addEventListener('click', singleRound));

// Compare every case (rock vs paper, rock vs scissors, paper vs scissors, rock vs rock, paper vs paper, scissors vs scissors)
function singleRound(computerSelection, playerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();

    switch (playerSelection) {
        case "Rock":
            if (computerSelection === "Paper") {
                singleResult = "You lose! Paper beats Rock";
            } else if (computerSelection === "Scissors") {
                singleResult = "You won! Rock beats Scissors";
            } else {
                singleResult = "It's a tie! Try again.";
            }
            break;

        case "Paper":
            if (computerSelection === "Scissors") {
                singleResult = "You lose! Scissors beats Paper";
            } else if (computerSelection === "Rock") {
                singleResult = "You won! Paper beats Rock";
            } else {
                singleResult = "It's a tie! Try again.";
            }
            break;

        case "Scissors":
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
    console.log(singleResult);
}