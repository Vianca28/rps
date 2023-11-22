 
 var a="paper";


function getComputerChoice(){
 let randomNumber = Math.floor(Math.random()*3);
 if(randomNumber==0){
    a="rock";
  } else if(randomNumber==1){
    a="paper";
  }
  else{
    a="scissors";
  }
  return a; 
}


function playRound(playerSelection, computerSelection) {
    
   if(playerSelection==computerSelection){
    b="tie";   
   }
   console.log("player :"+playerSelection+"\n"
   +"computer: "+computerSelection+"\n"
   +"result "+b)
  }

  const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

function game(){

}

