let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0) {
        choice = `rock`;
    } else if (choice == 1) {
        choice = `paper`;
    } else if (choice == 2) {
        choice = `scissors`
    }
    console.log(`CPU chose: ` + choice);

    return choice;
}

function getHumanChoice() {
    let choice = prompt(`Rock, Paper, or Scissors?`);
    choice = choice.toLowerCase();

    console.log(`You chose: ` + choice);

    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == `rock` && computerChoice == `rock`) {
        console.log(`It's a tie!`);
    } else if (humanChoice == `rock` && computerChoice == `paper`) {
        console.log(`You lose!`);
        computerScore++
    } else if (humanChoice == `rock` && computerChoice == `scissors`) {
        console.log(`You win!`);
        humanScore++
    } else if (humanChoice == `paper` && computerChoice == `rock`) {
        console.log(`You win!`);
        humanScore++
    } else if (humanChoice == `paper` && computerChoice == `paper`) {
        console.log(`It's a tie!`);
    } else if (humanChoice == `paper` && computerChoice == `scissors`) {
        console.log(`You lose!`);
        computerScore++
    } else if (humanChoice == `scissors` && computerChoice == `rock`) {
        console.log(`You lose!`);
        computerScore++
    } else if (humanChoice == `scissors` && computerChoice == `paper`) {
        console.log(`You win!`);
        humanScore++
    } else if (humanChoice == `scissors` && computerChoice == `scissors`) {
        console.log(`It's a tie!`);
    }
}

function playGame() {
    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    declareWin();
}

function declareWin() {
    if (humanScore > computerScore) {
        console.log(`Your score was: ${humanScore}
            CPU score was: ${computerScore}
            You win!`)
    } else {
        console.log(`Your score was: ${humanScore}
            CPU score was: ${computerScore}
            You lose!`)
    }
}

playGame();

