

function computerPlay(){
  let picked = Math.floor((Math.random()*3));
  let choose = ['rock','scissor','paper'];
  console.log(`complay ${picked} `);
  return(choose[picked]);
}


function playARound (computerSelection, playerSelection) {
  if (computerSelection === "rock") {
    switch (playerSelection){
      case "rock" : 
        return(`comp ${computerSelection} -- user : ${playerSelection} == tie`)
     case "scissor" : 
      return(`comp ${computerSelection} -- user : ${playerSelection} == comp wins`)

     case "paper" :
      return(`comp ${computerSelection} -- user : ${playerSelection} == user wins`)
    }
  }
  if (computerSelection === "scissor") {
    switch(playerSelection){
      case "rock" :
        return(`comp ${computerSelection} -- user : ${playerSelection} == user wins`)
      case "scissor" :
        return(`comp ${computerSelection} -- user : ${playerSelection} == tie`)
      case "paper" :
      return(`comp ${computerSelection} -- user : ${playerSelection} == comp wins`)
    }
  }
  if (computerSelection === "paper") {
    switch(playerSelection){
      case "rock" :
        return(`comp ${computerSelection} -- user : ${playerSelection} == comp wins`)
      case "scissor" :
        return(`comp ${computerSelection} -- user : ${playerSelection} == user wins`)
      case "paper" :
      return(`comp ${computerSelection} -- user : ${playerSelection} == tie`)
    }
  }
}

let playerSelection = "rock";

console.log(playARound(computerPlay(), playerSelection));
