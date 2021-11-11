

function computerPlay(){
  let picked = Math.floor((Math.random()*3));
  let choose = ['rock','scissor','paper'];
  // console.log(`complay ${picked} `);
  return(choose[picked]);
}

function playerSelection() {
  let choose;
  // = prompt("Enter a valid option [Paper, Rock or Scissor] :", "enter") || "";
  let option = ['rock','paper','scissor'];
  // console.log(choose)
  // if (){
    
  // }

  do {
    choose = prompt("Your Turn enter your choice [Paper, Rock or Scissor] : ")
    // console.log(choose)
  } while(!option.includes(choose.toLowerCase()))
  // while choose is not included in option
  return choose.toLowerCase();
}




function playARound (computerSelection, playerSelection) {
  let output = null;

  if (computerSelection === "rock") {
    switch (playerSelection){
      case "rock" : 
        output = "Its a tie";
        break;

      case "scissor" : 
        output = "You Lose! Rock breaks Scissor";
        break;
     case "paper" :
      output = "You Win! Paper covers rock";
      break;
    }
  }
  if (computerSelection === "scissor") {
    switch(playerSelection){
      case "rock" :
        output ="You Win! Rock breaks Scissor";
        break;

      case "scissor" :
        output = "Its a tie";
        break;

      case "paper" :
        output = "You Lose! Scissor cuts Paper";
        break;
    }
  }

  if (computerSelection === "paper") {
    switch(playerSelection){
      case "rock" :
        output = "You Lose! Paper covers Rock";
        break;
      case "scissor" :
        output = "You Win! Scissor cuts Paper";
        break;
      case "paper" :
        output = "Its a tie";
        break;
    }
  }

  // console.log(output)
  return output;
}


let computerScore = 0;
let playerScore = 0;
let total = 0;
let tie = 0;



function game () {
  
  let decision;
  for (let i = 1; i<=5; i++){
    decision = (playARound(computerPlay(), playerSelection()))
    console.log(decision);
    ++total;
    if (decision.includes("Win")){
      ++playerScore;
      
      // console.log(playerScore)
    }else if ( decision.includes("Lose")){
      ++computerScore;
    
    } else {
      decision = playARound(playARound(computerPlay(), playerSelection()));
      ++tie;
    }
  }

  gameOver(playerScore, computerScore, tie, total)
  
}

gameOver = (playerScore, computerScore, tie, total) => {
  console.log(`
  computer ${computerScore} vs you ${playerScore}
  total runs ${total} and ${tie} ties`)
  console.log(playerScore>computerScore ? "You Win dude! ;D" : "You Lose dude :C")
}
// console.log(playARound(computerPlay(), playerSelection()));
game();