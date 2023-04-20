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

// Select comment to add result of each round
const comment = document.querySelector('.comment');

// Select score to change it every round
const score = document.querySelector('.score');


let playerScore = 0;
let computerScore = 0;

function singleRound() {
    // Take innerText and store it in playerChoice
    // In the meantime get computerChoice
    let computerSelection = getComputerChoice();
    let playerSelection = this.textContent;
    console.log(playerSelection);
    console.log(computerSelection);

    // Compare choices
    let singleResult;

    switch (playerSelection) {
        case "Rock":
            if (computerSelection === "Paper") {
                singleResult = "You lose! Paper beats Rock";
            } else if (computerSelection === "Scissors") {
                singleResult = "You win! Rock beats Scissors";
            } else {
                singleResult = "It's a tie! Try again.";
            }
            break;

        case "Paper":
            if (computerSelection === "Scissors") {
                singleResult = "You lose! Scissors beats Paper";
            } else if (computerSelection === "Rock") {
                singleResult = "You win! Paper beats Rock";
            } else {
                singleResult = "It's a tie! Try again.";
            }
            break;

        case "Scissors":
            if (computerSelection === "Rock") {
                singleResult = "You lose! Rock beats Scissors";
            } else if (computerSelection === "Paper") {
                singleResult = "You win! Scissors beats Paper";
            } else {
                singleResult = "It's a tie! Try again.";
            }
            break;
    }

    // Return winner
    console.log (singleResult);
    comment.textContent = singleResult;

    // Update score
    if (singleResult.includes('win')) {
        playerScore++;
    } else if (singleResult.includes('lose')) {
        computerScore ++;
    }
    console.log(`${playerScore} - ${computerScore}`);

    score.textContent = `${playerScore} - ${computerScore}`;
}

function clickTransition () {
    this.classList.add('clicked');
    setTimeout(() => {
        this.classList.remove('clicked');
    }, 500)
}

let roundCounter = 0;
buttons.forEach(button => button.addEventListener('click', () => {
    roundCounter++;
    if (roundCounter > 5) {
        buttons.forEach(button => button.removeEventListener('click', singleRound));
        buttons.forEach(button => button.removeEventListener('click', clickTransition));
        console.log('enough');
    }
    console.log(roundCounter);
}));

buttons.forEach(button => button.addEventListener('click', singleRound));
buttons.forEach(button => button.addEventListener('click', clickTransition));