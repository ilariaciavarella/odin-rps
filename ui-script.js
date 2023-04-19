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
// Select buttons from html and add event listener to each
const buttons = document.querySelectorAll('.choiceBtn');

buttons.forEach(button => button.addEventListener('click', () => {
    // Take innerText and store it in playerChoice
    // In the meantime get computerChoice
    let computerSelection = getComputerChoice();
    let playerSelection = button.textContent;
    console.log(playerSelection);
    console.log(computerSelection);

    // Compare choices
    let singleResult;

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
    }

    // Return winner
    console.log (singleResult);
}))