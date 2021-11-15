
let computerScore = 0;
let playerScore = 0;
let total = 0;
let tie = 0;

function computerPlay(){
  let picked = Math.floor((Math.random()*3));
  let choose = ['rock','scissor','paper'];
  return(choose[picked]);
}

function playerSelection() {
  let choose;
  // = prompt("Enter a valid option [Paper, Rock or Scissor] :", "enter") || "";
  let option = ['rock','paper','scissor'];

  do {
    choose = prompt("Your Turn enter your choice [Paper, Rock or Scissor] : ")
    // console.log(choose)
  } while(!option.includes(choose.toLowerCase()))
  // while choose is not included in option
  return choose.toLowerCase();
}




function playARound (computerSelection, playerSelection){
  let winner = "";

  console.log(computerSelection, playerSelection)
  

  //player wins
  if((computerSelection === 'rock' && playerSelection === 'paper') || //paper covers
     (computerSelection === 'paper' && playerSelection === 'scissor') || //scissor cuts
     (computerSelection === 'scissor') && playerSelection === 'rock') { //rock breaks
        winner = "player";
        ++playerScore;
  }
  //computer wins 
  if((computerSelection === 'paper' && playerSelection === 'rock') || //paper covers
     (computerSelection === 'scissor' && playerSelection === 'paper') || //scissor cuts
     (computerSelection === 'rock') && playerSelection === 'scissor') { //rock breaks
        winner = "computer";
        ++computerScore;
  }

  if (computerSelection == playerSelection){
    ++tie;  
    console.log(`tie is ${tie}`)
    // playARound(computerSelection, playerSelection);
  }
  console.log(winner);
}



// console.log(playARound(computerPlay(), playerSelection()))

function game () {
  for (let i = 1; i<=5; i++){
    playARound(computerPlay(), playerSelection());
    ++total;
  }

  gameOver()
  
}

gameOver = () => {
  console.log(`
  computer ${computerScore} vs you ${playerScore}
  total runs ${total} and ${tie} ties`)
  console.log(playerScore>computerScore ? "You Win dude! ;D" : "You Lose dude :C")
}
game();