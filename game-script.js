
let computerScore = 0;
let playerScore = 0;
let total = 0;
let tie = 0;
let playerSelection = ""

let $body = document.querySelector('body')
let $btns = document.querySelectorAll('.playGround img');
let $playGround = document.querySelector('.playGround');
let $playerScoreHolder = document.querySelector('#player-score');
let $computerScoreHolder = document.querySelector('#computer-score');

function computerPlay(){
  let picked = Math.floor((Math.random()*3));
  let choose = ['rock','scissor','paper'];
  return(choose[picked]);
}

function playARound(playerSelection, computerSelection){
  ++total;
  //player wins
  if((computerSelection === 'rock' && playerSelection === 'paper') || //paper covers
     (computerSelection === 'paper' && playerSelection === 'scissor') || //scissor cuts
     (computerSelection === 'scissor') && playerSelection === 'rock') { //rock breaks
        ++playerScore;
  }
  //computer wins 
  if((computerSelection === 'paper' && playerSelection === 'rock') || //paper covers
     (computerSelection === 'scissor' && playerSelection === 'paper') || //scissor cuts
     (computerSelection === 'rock') && playerSelection === 'scissor') { //rock breaks
        ++computerScore;
  }

  if (computerSelection == playerSelection){
    ++tie;
  }
}

const endGame = () => {
  if (playerScore === 5) {
    gameOver('Win')
  } 
  if (computerScore === 5) {
    gameOver('Lost')
  }

}

function updateScore() {
  $computerScoreHolder.textContent = computerScore;
  $playerScoreHolder.textContent = playerScore;
}

const gameOver = (byWinner) => {
  $body.innerHTML += `
  <section class="endOption">
    <h2 class="end"> You ${byWinner} after playing ${total} rounds with ${tie} ties </h2>
  </section>
  `;
}


$btns.forEach($btn => {
  $btn.addEventListener('click', function(e){
    playerSelection = e.target.id;
    computerSelection = computerPlay();
    console.log(computerSelection + ' Vs ' + playerSelection)
    playARound((playerSelection).toLowerCase(), computerSelection)
    updateScore();
    endGame();
  })
})