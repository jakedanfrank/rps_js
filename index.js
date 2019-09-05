var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var userChoice;


rock.addEventListener( "click", function(){
  userChoice = "rock";
  document.getElementById("selection").innerHTML = "--- ROCK ---"
  compare(userChoice)
});
paper.addEventListener( "click", function(){
  userChoice = "paper";
  document.getElementById("selection").innerHTML = "--- PAPER ---"
  compare(userChoice)
});
scissors.addEventListener( "click", function(){
  userChoice = "scissors";
    document.getElementById("selection").innerHTML = "--- SCISSORS ---"
  compare(userChoice)
});

function compare(userChoice){
  var battle = ["rock", "paper", "scissors"];
  compChoice = battle[Math.floor(Math.random()*battle.length)];
  if (userChoice === compChoice){
        document.getElementById("outcome").innerHTML = `IT'S A TIE! You chose ${userChoice}, Computer chose ${compChoice}`;
      }
     else if (
      userChoice === "rock" && compChoice === "scissors" ||
      userChoice === "paper" && compChoice === "rock" ||
      userChoice === "scissors" && compChoice === "paper"
      ){ 
        document.getElementById("outcome").innerHTML = `YOU WIN! You chose ${userChoice}, Computer chose ${compChoice}`;

      }
     else {
        document.getElementById("outcome").innerHTML = `YOU LOSE! You chose ${userChoice}, Computer chose ${compChoice}`;
    }
  }

  // get comp choice
  // display those choices to the browser
  // decide who wins 