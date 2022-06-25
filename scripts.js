const domElements = {
    // putting these in an object for easy access
    playerScore: document.querySelector('#player-points'),
    computerScore: document.querySelector('#computer-points'),

    playerResult: document.querySelector('#player-result'),
    computerResult: document.querySelector('#computer-result'),
    gameResult: document.querySelector('#game-result'),

    playerResultArea: document.querySelector('#player-result-area'),
    computerResultArea: document.querySelector('#computer-result-area'),

    hideResults: function() {
        this.playerResultArea.classList.add('hide');
        this.computerResultArea.classList.add('hide');
    }
}

const scoring = {
    playerScore: 0,
    computerScore: 0,

    firstRound: true,

    checkForWin: function() {
        if (this.playerScore === 5) {
            domElements.gameResult.textContent = "Player wins the game!"
            domElements.gameResult.classList.add('game-over');

            domElements.hideResults();
            this.firstRound = true;
        } else if (this.computerScore === 5) {
            domElements.gameResult.textContent = "Computer wins the game!"
            domElements.gameResult.classList.add('game-over');

            domElements.hideResults();
            this.firstRound = true;
        }
    },

    incrementPlayerScore: function() {
        domElements.gameResult.textContent = "Player wins this round!";

        this.playerScore++;
        domElements.playerScore.textContent = this.playerScore;

        this.checkForWin();
    },
    incrementComputerScore: function() {
        domElements.gameResult.textContent = "Computer wins this round!";

        this.computerScore++;
        domElements.computerScore.textContent = this.computerScore;

        this.checkForWin();
    },

    resetScores: function() {
        this.playerScore = 0;
        this.computerScore = 0;
        domElements.computerScore.textContent = this.computerScore;
        domElements.playerScore.textContent = this.playerScore;
    }
}

function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    // use random number to choose a sign
    let computerChoice = randomNum === 0 ? 'Rock' : randomNum === 1 ? 'Paper' : 'Scissors'; 
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

    // remove 'hide' class from player and computer results if it's the first round
    if (scoring.firstRound) {
        domElements.playerResultArea.classList.remove('hide');
        domElements.computerResultArea.classList.remove('hide');

        scoring.resetScores();

        scoring.firstRound = false;
    }

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