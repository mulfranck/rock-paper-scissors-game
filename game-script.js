

function computerPlay(){
  let picked = Math.floor((Math.random()*3));
  let choose = ['rock','scissor','paper'];
  // console.log(`complay ${picked} `);
  return(choose[picked]);
}

function playerSelection() {
  let choose = prompt("Your Turn enter your choice [Paper, Rock or Scissor] :", "enter") || "";
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
