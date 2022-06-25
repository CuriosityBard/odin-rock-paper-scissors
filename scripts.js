const domElements = {
    // putting these in an object for easy access
    playerScore: document.querySelector('#player-points'),
    computerScore: document.querySelector('#computer-points'),

    playerResult: document.querySelector('#player-result'),
    computerResult: document.querySelector('#computer-result'),
    gameResult: document.querySelector('#game-result'),
}

const scoring = {
    playerScore: 0,
    computerScore: 0,
    incrementPlayerScore: function() {
        domElements.gameResult.textContent = "Player wins this round!";

        this.playerScore++;
        domElements.playerScore.textContent = this.playerScore;
    },
    incrementComputerScore: function() {
        domElements.gameResult.textContent = "Computer wins this round!";

        this.computerScore++;
        domElements.computerScore.textContent = this.computerScore;
    }
}

function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    // use random number to choose a sign
    let computerChoice = randomNum === 0 ? 'Rock' : randomNum === 1 ? 'Paper' : 'Scissors'; 
    console.log(computerChoice);
    return computerChoice;
}

function chooseRock() {
    playRound('Rock', computerPlay());
}
function choosePaper() {
    playRound('Paper', computerPlay());
}
function chooseScissors() {
    playRound('Scissors', computerPlay());
}

function playRound(playerSelection, computerSelection) {
    domElements.playerResult.textContent = playerSelection;
    domElements.computerResult.textContent = computerSelection;

    if (playerSelection === computerSelection) {
        domElements.gameResult.textContent = "It's a tie!";
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        scoring.incrementComputerScore();
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        scoring.incrementPlayerScore();
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        scoring.incrementPlayerScore();
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        scoring.incrementComputerScore();
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        scoring.incrementComputerScore();
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        scoring.incrementPlayerScore();
    }  else {
        console.log('Something went wrong!');
    }
}