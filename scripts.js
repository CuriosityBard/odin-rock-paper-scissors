function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    // use random number to choose a sign
    let computerChoice = randomNum === 0 ? 'Rock' : randomNum === 1 ? 'Paper' : 'Scissors'; 
    return computerChoice;
}

function playerChoice() {
    playerChoice = prompt("Please enter rock, paper, or scissors.");
    // return the response with only the first letter capitalized
    return playerChoice.slice(0,1).toUpperCase() + playerChoice.slice(1).toLowerCase();
}

function compareChoices(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! You both chose ${playerSelection}`;
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return 'You lose! Paper beats Rock.';
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'You win! Paper beats Rock.';
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'You win! Rock beats Scissors.';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return 'You lose! Rock beats Scissors.';
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return 'You lose! Scissors beat Paper.';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return 'You win! Scissors beat Paper.';
    }  else {
        return 'Something went wrong!';
    }
}