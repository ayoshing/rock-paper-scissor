let playerScore = 0;
let compScore = 0;
const playerScoreSpan = document.getElementById('player-score');
const compScoreSpan = document.getElementById('comp-score');
const scoreBoardDiv = document.querySelector('.score-board');
const resultDiv = document.querySelector('.result');
const rockDiv = document.getElementById('r');
const paperDiv = document.getElementById('p');
const scissorDiv = document.getElementById('s');
const actionMsgDiv = document.getElementById('action-msg');

function computerPlay() {
  const selections = ["r","p","s"];
  return (selections[Math.floor(Math.random()*3)]);
}

function convertToWord(letter) {
  switch (letter) {
    case 'r':
      return 'Rock';
      break;
    case 'p':
      return 'Paper';
      break;
    case 's':
      return 'Scissor';
      break;
    }
  }

function win(player, comp) {
  playerScore++;
  playerScoreSpan.innerHTML = playerScore;
  compScoreSpan.innerHTML = compScore;
  resultDiv.innerHTML = `${convertToWord(player)} beats ${convertToWord(comp)}. You win!`;
  document.getElementById(player).classList.remove('hover');
  document.getElementById(player).classList.add('green-glow');
  setTimeout(() => document.getElementById(player).classList.remove('green-glow'), 500);
  setTimeout(() => document.getElementById(player).classList.add('hover'), 700);
  gameCheck();
}

function lose(player, comp) {
  compScore++;
  playerScoreSpan.innerHTML = playerScore;
  compScoreSpan.innerHTML = compScore;
  resultDiv.innerHTML = `${convertToWord(player)} loses to  ${convertToWord(comp)}. Bummer.`;
  document.getElementById(player).classList.remove('hover');
  document.getElementById(player).classList.add('red-glow');
  setTimeout(() => document.getElementById(player).classList.remove('red-glow'), 500);
  setTimeout(() => document.getElementById(player).classList.add('hover'), 700);
  gameCheck();
}

function draw(player, comp) {
  playerScoreSpan.innerHTML = playerScore;
  compScoreSpan.innerHTML = compScore;
  resultDiv.innerHTML = `Draw.`;
  document.getElementById(player).classList.remove('hover');
  document.getElementById(player).classList.add('gray-glow');
  setTimeout(() => document.getElementById(player).classList.remove('gray-glow'), 500);
  setTimeout(() => document.getElementById(player).classList.add('hover'), 700);
}

function game(playerSelection, compSelection) {
  compSelection = computerPlay();
  switch (playerSelection + compSelection) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(playerSelection, compSelection);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(playerSelection, compSelection);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(playerSelection, compSelection);
      break;
    }
}

function gameCheck() {
  if (playerScore == 5) {
    actionMsgDiv.innerHTML = 'You won!';
  }
  else if (compScore == 5) {
    actionMsgDiv.innerHTML = 'You lost, better luck next time.';
  }
}


function playRound() {
  rockDiv.addEventListener('click', () => game('r'));
  paperDiv.addEventListener('click', () => game('p'));
  scissorDiv.addEventListener('click', () => game('s'));
}

playRound();
