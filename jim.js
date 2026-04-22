let playerScore = 0;
let computerScore = 0;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultDiv = document.getElementById("result");
const playerSpan = document.getElementById("playerScore");
const computerSpan = document.getElementById("computerScore");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randIndex = Math.floor(Math.random() * 3);
  return choices[randIndex];
}

function updateScores() {
  playerSpan.textContent = playerScore;
  computerSpan.textContent = computerScore;
}

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  let resultMessage = `You chose ${playerChoice}. Computer chose ${computerChoice}. `;

  if (playerChoice === computerChoice) {
    resultMessage += "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    resultMessage += "You win this round!";
    playerScore++;
  } else {
    resultMessage += "Computer wins this round!";
    computerScore++;
  }

  resultDiv.textContent = resultMessage;
  updateScores();
}

// Attach event listeners
rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));