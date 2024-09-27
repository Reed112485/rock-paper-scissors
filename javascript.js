let humanScore = 0;
let computerScore = 0;

let rockButton = document.querySelector(".rockButton");
let paperButton = document.querySelector(".paperButton");
let scissorsButton = document.querySelector(".scissorsButton");

rockButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();

    playRound("rock", computerChoice);
});

paperButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();

    playRound("paper", computerChoice);
})

scissorsButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();

    playRound("scissors", computerChoice);
})

let results = document.querySelector(".results");
let score = document.querySelector(".score");

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
        results.textContent = `It's a tie!`;
    } else if (humanChoice == `rock` && computerChoice == `paper`) {
        results.textContent = `You lose!`;
        computerScore++
    } else if (humanChoice == `rock` && computerChoice == `scissors`) {
        results.textContent = `You win!`;
        humanScore++
    } else if (humanChoice == `paper` && computerChoice == `rock`) {
        results.textContent = `You win!`;
        humanScore++
    } else if (humanChoice == `paper` && computerChoice == `paper`) {
        results.textContent = `It's a tie!`;
    } else if (humanChoice == `paper` && computerChoice == `scissors`) {
        results.textContent = `You lose!`;
        computerScore++
    } else if (humanChoice == `scissors` && computerChoice == `rock`) {
        results.textContent = `You lose!`;
        computerScore++
    } else if (humanChoice == `scissors` && computerChoice == `paper`) {
        results.textContent = `You win!`;
        humanScore++
    } else if (humanChoice == `scissors` && computerChoice == `scissors`) {
        results.textContent = `It's a tie!`;
    }

    score.textContent = `Your score: ${humanScore}, CPU score: ${computerScore}`;

    if (humanScore >= 5) {
        results.textContent = ``;
        score.textContent = `Congrats, you win!`;
    } else if (computerScore >= 5) {
        results.textContent = ``;
        score.textContent = `You suck, CPU wins!`;
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

