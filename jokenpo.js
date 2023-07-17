let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateGameScore();

function gameResult(playerMove) {
  computerMove = computerMovement();

  if (playerMove === 'rock') {
    if (playerMove === computerMove) {
      result = 'Tie!!!'
    }
    else if (computerMove === 'paper') {
      result = 'You lose!!!';
    }
    else {
      result = 'You win!!!';
    }
  }

  else if (playerMove === 'paper') {
    if (playerMove === computerMove) {
      result = 'Tie!!!'
    }
    else if (computerMove === 'scissors') {
      result = 'You lose!!!';
    }
    else {
      result = 'You win!!!';
    }
  }

  else {
    if (playerMove === computerMove) {
      result = 'Tie!!!'
    }
    else if (computerMove === 'rock') {
      result = 'You lose!!!';
    }
    else {
      result = 'You win!!!';
    }
  }

  if (result === 'Tie!!!') {
    score.ties++;
  }
  else if (result === 'You win!!!') {
    score.wins++;
  }
  else {
    score.losses++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateGameScore();
  resultDisplay();
  computerMoveImage(computerMove);

  // alert(`You picked ${playerMove}, Computer picked ${computerMove}. ${result}
  // \nScore: Wins: ${score.wins} Losses: ${score.losses} Ties; ${score.ties}`);
}

function updateGameScore() {
  let scoreElement = document.querySelector('.js-score');
  scoreElement.innerHTML = `Wins: ${score.wins} Losses: \n
  ${score.losses} Ties; ${score.ties}`;

  document.querySelector('.player-movement-image').src = '';
  document.querySelector('.computer-movement-image').src = '';

  document.querySelector('.js-player-movement-text').innerHTML = '';
  document.querySelector('.js-computer-movement-text').innerHTML = '';

  document.querySelector('.js-result').innerHTML = '';
}

function resultDisplay() {
  document.querySelector('.js-result').innerHTML = result;
}


function playerMoveImage(playerMove) {
  if (playerMove === 'rock') {
    let imgPath = 'images/rock-emoji.png';
    document.querySelector('.player-movement-image').src = imgPath;

    document.querySelector('.js-player-movement-text').innerHTML
      = 'Your move: ROCK';
  }
  else if (playerMove === 'scissors') {
    let imgPath = 'images/scissors-emoji.png';
    document.querySelector('.player-movement-image').src = imgPath;

    document.querySelector('.js-player-movement-text').innerHTML
      = 'Your move: SCISSORS';
  }
  else {
    let imgPath = 'images/paper-emoji.png';
    document.querySelector('.player-movement-image').src = imgPath;

    document.querySelector('.js-player-movement-text').innerHTML
      = 'Your move: PAPER';
  }
}

function computerMoveImage(computerMove) {
  if (computerMove === 'rock') {
    let imgPath = 'images/rock-emoji.png';
    document.querySelector('.computer-movement-image').src = imgPath;

    document.querySelector('.js-computer-movement-text').innerHTML
      = 'Computer move: ROCK';
  }
  else if (computerMove === 'scissors') {
    let imgPath = 'images/scissors-emoji.png';
    document.querySelector('.computer-movement-image').src = imgPath;

    document.querySelector('.js-computer-movement-text').innerHTML
      = 'Computer move: SCISSORS';
  }
  else {
    let imgPath = 'images/paper-emoji.png';
    document.querySelector('.computer-movement-image').src = imgPath;

    document.querySelector('.js-computer-movement-text').innerHTML
      = 'Computer move: PAPER';
  }
}

function computerMovement() {
  const randomNumber = Math.random();

  console.log(randomNumber);

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  }
  else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  }
  else {
    computerMove = 'scissors';
  }

  return computerMove;
}

