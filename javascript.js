/* 
Get a random choice:
- create an array of the choices
- create a variable that chooses a random number(index) based on the array length
- return the array index that was randomly chosen

Create a playRound function:
- use the player choice and cpu choice as parameters
- use an if statement
- if the player choice is equal to the cpu choice, return tie
- if any of the player win conditions are true, return player, use OR
- in any other case, return cpu

Create a playFive or playGame or whatever function:
- create a variable for the player score
- create a variable for the cpu score

- create a for loop which loops five times
-- assign a variable to the player choice which prompts for a choice and returns lower case
-- assign a variable to the cpu choice which uses the random choice function
-- create a result variable which plays a round, which will return the result
-- console.log the round number and what you and the cpu chose

- create an if statement in the foor loop
-- if the result (contains return from playing a round) = player, increase the player score and console.log a message saying you won the round
-- if the result = cpu, increase the cpu score and write a message saying the cpu won
-- else, output that it was a draw

- INSIDE the for but OUTSIDE the if:
-- log that the game has ended and output the scores

Call the function which plays the game
*/

function getRandom() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);

    return choices[random];
}

function playRound(playerChoice, cpuChoice) {
    if (playerChoice === cpuChoice) {
        return "tie";
    } else if (playerChoice === "rock" && cpuChoice === "scissors" ||
               playerChoice === "paper" && cpuChoice === "rock" ||
               playerChoice === "scissors" && cpuChoice === "paper") {
        return "player";
    } else {
        return "cpu";
    }
}

function playFive() {
    let playerScore = 0;
    let cpuScore = 0;

    for (i = 0; i < 5; i++) {
        const playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
        const cpuChoice = getRandom();

        const result = playRound(playerChoice, cpuChoice);
        console.log(`Round ${i + 1}: You chose: ${playerChoice} -- CPU chose: ${cpuChoice}`);

        if (result === "player") {
            playerScore++;
            console.log(`You win!`);
        } else if (result === "cpu") {
            cpuScore++;
            console.log(`CPU wins =(`);
        } else {
            console.log(`It's a tie!`)
        }
    }

    console.log(`::Game Over::\nYour Score: ${playerScore}\nCPU Score: ${cpuScore}`);
}

playFive();