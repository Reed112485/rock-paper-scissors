/* 
Get choice of computer
 - use math.random to set a random number between 1-3
 - Assign a choice to each number with an if statement
 - return the choice
 
 Get choice of player
 - prompt for choice
 - use if statement to determine choice
 - return the choice

 Compare choices for a winner
 - assign computer choice to a variable by calling function, using return value
 - assign player choice to a variable by calling function, using return value

Keep track of the score
- assign winner function to a variable
- use that variable to accrue a score for each player
-- if the winner was cpu, add to cpu score. Otherwise add to p1 score.
- return the scores
 
 Play five rounds and then terminate
 - loop through the game five times with a for statement
 - use score keeping function to keep score
 - output the winner and the scores
 */

 function getComputerChoice() {
    const choice = Math.floor(Math.random() * (4 - 1) + 1);

    if (choice === 1) {
        return "Rock";
    } else if (choice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
 }

function getPlayerChoice() {
    let choice = prompt ("Press 1 for Rock, 2 for Paper, or 3 for Scissors ");

    if (choice === "1") {
        return "Rock";
    } else if (choice === "2") {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(computerChoice, playerChoice) {

    if (computerChoice === "Rock" && playerChoice === "Rock") {
        console.log(`Player chose Rock, CPU chose Rock.`);
        return "It's a Tie!";
    } else if (computerChoice === "Rock" && playerChoice === "Paper") {
        console.log(`Player chose Paper, CPU chose Rock.`);
        return "Player wins!";
    } else if (computerChoice === "Rock" && playerChoice === "Scissors") {
        console.log(`Player chose Scissors, CPU chose Rock.`);
        return "CPU wins!";
    }

    if (computerChoice === "Paper" && playerChoice === "Rock") {
        console.log(`Player chose Rock, CPU chose Paper.`);
        return "CPU wins!";
    } else if (computerChoice === "Paper" && playerChoice === "Paper") {
        console.log(`Player chose Paper, CPU chose Paper.`);
        return "It's a Tie!";
    } else if (computerChoice === "Paper" && playerChoice === "Scissors") {
        console.log(`Player chose Scissors, CPU chose Paper.`);
        return "Player wins!";
    }

    if (computerChoice === "Scissors" && playerChoice === "Rock") {
        console.log(`Player chose Rock, CPU chose Scissors.`);
        return "Player wins!";
    } else if (computerChoice === "Scissors" && playerChoice === "Paper") {
        console.log(`Player chose Paper, CPU chose Scissors.`);
        return "CPU wins!";
    } else if (computerChoice === "Scissors" && playerChoice === "Scissors") {
        console.log(`Player chose Scissors, CPU chose Scissors.`);
        return "It's a Tie!";
    }
}

playRound(getComputerChoice(), getPlayerChoice());