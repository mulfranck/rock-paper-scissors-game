

function computerPlay(){
  let picked = Math.floor((Math.random()*3));
  let choose = ['rock','scissor','paper'];
  // console.log(`complay ${picked} `);
  return(choose[picked]);
}


function playARound (computerSelection, playerSelection) {
  if (computerSelection === "rock") {
    switch (playerSelection.toLowerCase()){
      case "rock" : 
        return (`Its a tie`);

     case "scissor" : 
      return(`You Lose! Rock breaks Scissor`);

     case "paper" :
      return(`You Win! Paper covers rock`);
    }
  }
  if (computerSelection === "scissor") {
    switch(playerSelection.toLowerCase()){
      case "rock" :
        return(`You Win! Rock breaks Scissor`);

      case "scissor" :
        return(`Its a tie`);

      case "paper" :
      return(`You Lose! Scissor cuts Paper`);
    }
  }

  if (computerSelection === "paper") {
    switch(playerSelection.toLowerCase()){
      case "rock" :
        return(`You Lose! Paper covers Rock`)
      case "scissor" :
        return(`You Win! Scissor cuts Paper`)
      case "paper" :
      return(`Its a tie`)
    }
  }
}

let playerSelection = prompt("Your Turn enter your choice [Paper, Rock or Scissor] :", "enter");

console.log(playARound(computerPlay(), playerSelection));
