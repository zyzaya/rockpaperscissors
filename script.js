let computerScore = 0;
let playerScore = 0;

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substr(1, str.length).toLowerCase();
}

function getComputerPlay() {
  let i = Math.floor(Math.random() * 3);
  switch (i) {
    case 0:
      return 'Rock';
      break;
    case 1:
      return 'Paper';
      break;
    case 2:
      return 'Scissors';
      break;
  }
}

function getPlayerInput() {
  let input = '';
  let validInput = false;
  do {
    input = prompt('What will you play?');
    if (input) {
      input = input.toLowerCase();
      if (
        input.toLowerCase() === 'rock' ||
        input === 'paper' ||
        input == 'scissors'
      ) {
        validInput = true;
      }
    }
    if (!validInput) {
      console.log("Invalid input, please enter 'Rock', 'Paper', or 'Scissors'");
    }
  } while (!validInput);
  return capitalize(input);
}

function setOutput(roundResult, player, computer) {
  const results = document.querySelector('#results');
  const playerOutput = document.getElementById('playerScore');
  const computerOutput = document.getElementById('computerScore');
  let output = `You played ${player}.\n Computer played ${computer}.\n`;
  output += roundResult;
  results.textContent = output;
  playerOutput.textContent = `Player: ${playerScore}`;
  computerOutput.textContent = `Computer: ${computerScore}`;
}

function checkForWinner() {
  if (playerScore >= 5 || computerScore >= 5) {
    let winner = playerScore >= 5 ? 'Player' : 'Computer';
    alert(`${winner} reached 5 first! They win!`);
    playerScore = 0;
    computerScore = 0;
  }
}

function playRound(e) {
  let message = '';
  let computer = getComputerPlay();
  let player = capitalize(this.id);
  if (player === computer) {
    message = 'Tie!';
  } else if (
    (player === 'Rock' && computer === 'Scissors') ||
    (player === 'Paper' && computer === 'Rock') ||
    (player === 'Scissors' && computer === 'Paper')
  ) {
    message = `You win! ${player} beats ${computer}.`;
    playerScore++;
  } else {
    message = `You lose! ${computer} beats ${player}.`;
    computerScore++;
  }
  checkForWinner();
  setOutput(message, player, computer);
}

const input = document.querySelectorAll('.input');
input.forEach((button) => button.addEventListener('click', playRound));
