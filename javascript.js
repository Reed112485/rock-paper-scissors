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
        return console.log(`It's a tie!`);
    } else if (humanChoice == `rock` && computerChoice == `paper`) {
        return console.log(`You lose!`);
        computerScore++
    } else if (humanChoice == `rock` && computerChoice == `scissors`) {
        return console.log(`You win!`);
        humanScore++
    } else if (humanChoice == `paper` && computerChoice == `rock`) {
        return console.log(`You win!`);
        humanScore++
    } else if (humanChoice == `paper` && computerChoice == `paper`) {
        return console.log(`It's a tie!`);
    } else if (humanChoice == `paper` && computerChoice == `scissors`) {
        return console.log(`You lose!`);
        computerScore++
    } else if (humanChoice == `scissors` && computerChoice == `rock`) {
        return console.log(`You lose!`);
        computerScore++
    } else if (humanChoice == `scissors` && computerChoice == `paper`) {
        return console.log(`You win!`);
        humanScore++
    } else if (humanChoice == `scissors` && computerChoice == `scissors`) {
        return console.log(`It's a tie!`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);