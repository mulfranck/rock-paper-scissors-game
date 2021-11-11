

function computerPlay(){
  let picked = Math.floor((Math.random()*3));
  let choose = ['rock','scissor','paper'];
  console.log(`complay ${picked} `);
  return(choose[picked]);
}


function playARound (computerSelection, playerSelection) {
  if (computerSelection === "rock") {
    if (playerSelection === "rock"){
      return(`comp ${computerSelection} -- user : ${playerSelection} == tie`)
    } else if ( playerSelection === "scissor"){
      return(`comp ${computerSelection} -- user : ${playerSelection} == comp wins`)
    } else if (playerSelection === "paper") {
      return(`comp ${computerSelection} -- user : ${playerSelection} == user wins`)
    }
  }
  
}

let playerSelection = "rock";

console.log(playARound(computerPlay(), playerSelection));
