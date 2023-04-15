const rps = ["Rock", "Paper", "Scissors"]

// Get computer's selection using random and store it in a variable
// First get random index of array

// Get player's selection using prompt and store it in a variable
let playerSelection = prompt("Rock, paper or scissors?", "");
console.log(playerSelection);

// Compare every case (rock vs paper, rock vs scissors, paper vs scissors, rock vs rock, paper vs paper, scissors vs scissors)
// Return winner
// Iterate 5 times
// Count times each winning
// Return final winner