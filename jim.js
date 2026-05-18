// Game state variables
let playerScore = 0;
let computerScore = 0;
const maxScore = 5;

// DOM Elements
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resetBtn = document.getElementById('reset');
const resultEl = document.getElementById('result');
const playerSpan = document.getElementById('playerScore');
const computerSpan = document.getElementById('computerScore');

// Generate computer's choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

// Play a single round
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

  // Update text and points on screen
  resultEl.textContent = message;
  playerSpan.textContent = playerScore;
  computerSpan.textContent = computerScore;

  // Check if someone reached 5 points
  if (playerScore === maxScore) {
    resultEl.textContent = '🎉 You won the game!';
    endGame();
  } else if (computerScore === maxScore) {
    resultEl.textContent = '💻 Computer won the game!';
    endGame();
  }
}

// Disables action buttons and displays the play again button
function endGame() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
  resetBtn.style.display = 'block'; 
}

// Resets scores, resets messages, and enables action buttons
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerSpan.textContent = playerScore;
  computerSpan.textContent = computerScore;
  
  resultEl.textContent = 'First to score 5 points wins!';
  resultEl.className = '';
  
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
  
  resetBtn.style.display = 'none'; 
}

// Event listeners
rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));
resetBtn.addEventListener('click', resetGame);