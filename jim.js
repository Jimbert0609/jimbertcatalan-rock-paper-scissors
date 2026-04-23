// script.js - Game logic
let playerScore = 0;
let computerScore = 0;
const maxScore = 5;

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultEl = document.getElementById('result');
const playerSpan = document.getElementById('playerScore');
const computerSpan = document.getElementById('computerScore');

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  let message = '';

  if (playerChoice === computerChoice) {
    message = `Tie! Both chose ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;
    resultEl.className = 'tie';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    message = `You win! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
    resultEl.className = 'win';
    playerScore++;
  } else {
    message = `Computer wins! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;
    resultEl.className = 'lose';
    computerScore++;
  }

  resultEl.textContent = message;
  playerSpan.textContent = playerScore;
  computerSpan.textContent = computerScore;

  if (playerScore === maxScore) {
    resultEl.textContent = '🎉 You won the game! Reload to play again.';
    disableButtons();
  } else if (computerScore === maxScore) {
    resultEl.textContent = '💻 Computer won the game! Reload to play again.';
    disableButtons();
  }
}

function disableButtons() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

// Event listeners
rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));