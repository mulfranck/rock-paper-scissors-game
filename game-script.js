
let computerScore = 0;
let playerScore = 0;
let total = 0;
let tie = 0;

let playerSelection = ""
let btns = document.querySelectorAll('.btn');
let playGround = document.querySelector('.playGround');
let playerScoreHolder = document.querySelector('#player-score');
let computerScoreHolder = document.querySelector('#computer-score');

function computerPlay(){
  let picked = Math.floor((Math.random()*3));
  let choose = ['rock','scissor','paper'];
  return(choose[picked]);
}

function playARound (playerSelection, computerSelection){
  let winner = "";

  // console.log(typeof playerSelection)
  

  //player wins
  if((computerSelection === 'rock' && playerSelection === 'paper') || //paper covers
     (computerSelection === 'paper' && playerSelection === 'scissor') || //scissor cuts
     (computerSelection === 'scissor') && playerSelection === 'rock') { //rock breaks
        winner = `You win, ${playerSelection} beats ${computerSelection}`;
        ++playerScore;
  }
  //computer wins 
  if((computerSelection === 'paper' && playerSelection === 'rock') || //paper covers
     (computerSelection === 'scissor' && playerSelection === 'paper') || //scissor cuts
     (computerSelection === 'rock') && playerSelection === 'scissor') { //rock breaks
        winner = "You Lost!";
        ++computerScore;
  }

  if (computerSelection == playerSelection){
    ++tie;  
    console.log(`tie is ${tie}`)
    // playARound(computerSelection, playerSelection);
  }
  console.log(winner);
}

const endGame = () => {
  if (playerScore === 2 || computerScore === 3) {
    gameOver();
  }
}

function updateScore() {
  console.log(playerScore)
  computerScoreHolder.textContent = computerScore;
  playerScoreHolder.textContent = playerScore;
}
const gameOver = () => {
  playGround.classList.toggle('mute');
}

btns.forEach(btn => {
  btn.addEventListener('click', function(e){
     playerSelection = e.target.textContent;
     computerSelection = computerPlay();



    playARound((playerSelection).toLowerCase(), computerSelection)
    updateScore();
    endGame();
  })
})