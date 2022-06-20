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