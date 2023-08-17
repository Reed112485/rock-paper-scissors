/* 
Get choice of computer
 - use math.random to set a random number between 1-3
 - Assign a choice to each number with an if statement
 - return the choice
 
 Play a round
 - get playerSelection input
 - use computerSelection choice
 - use comparison to determine the winner
 - output a message saying who won
 
 Play five rounds
 - loop through the game with a for statement
 - set score keeping variables
 - increase the score per the winner
 - output the winner
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
    let choice = prompt ("Press 1 for Rock, 2 for Paper, or 3 for Scissors: ");

    if (choice === "1") {
        return "Rock";
    } else if (choice === "2") {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(getComputerChoice, getPlayerChoice) {

    if (getComputerChoice === "Rock" && getPlayerChoice === "Paper") {
        alert (`You picked ${getPlayerChoice}, CPU picked ${getComputerChoice}. You win!`);
    } else if (getComputerChoice === "Paper" && getPlayerChoice === "Scissors") {
        alert (`You picked ${getPlayerChoice}, CPU picked ${getComputerChoice}. You win!`);
    } else if (getComputerChoice === "Scissors" && getPlayerChoice === "Rock") {
        alert (`You picked ${getPlayerChoice}, CPU picked ${getComputerChoice}. You win!`);
    } else if ()
}