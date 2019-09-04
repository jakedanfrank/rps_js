var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var userChoice;


rock.addEventListener( "click", function(){
  userChoice = "rock";
  compare(userChoice)
});
paper.addEventListener( "click", function(){
  userChoice = "paper";
  compare(userChoice)
});
scissors.addEventListener( "click", function(){
  userChoice = "scissors";
  compare(userChoice)
});

function compare(userChoice){
  var battle = ["rock", "paper", "scissors"];
  compChoice = battle[Math.floor(Math.random()*battle.length)];
  if (userChoice === compChoice){
        document.getElementById("outcome").innerHTML = "TIE";
      }
     else if (
      userChoice === "rock" && compChoice === "scissors" ||
      userChoice === "paper" && compChoice === "rock" ||
      userChoice === "scissors" && compChoice === "paper"
      ){ 
        document.getElementById("outcome").innerHTML = "WINNER";
      }
     else {
        document.getElementById("outcome").innerHTML = "YOU LOSE!";
    }
  }

  // get comp choice
  // display those choices to the browser
  // decide who wins 