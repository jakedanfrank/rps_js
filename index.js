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

// var compChoice;
// rock.addEventListener( function(){
//   compChoice = this.id;
// });
// paper.addEventListener( function(){
//   compChoice = this.id;
// });
// scissors.addEventListener( function(){
//   compChoice = this.id;
// });

function compare(userChoice){
  var battle = ["rock", "paper", "scissors"];
  compChoice = battle[Math.floor(Math.random()*battle.length)];
  if (userChoice === compChoice){
    return "Ah Rats it's a Tie"
    } else if (
      userChoice === "rock" && compChoice === "scissors" ||
      userChoice === "paper" && compChoice === "rock" ||
      userChoice === "scissors" && compChoice === "paper"
      ){
        return "You Win"

    } else {
      return "You Lose"
    }
  }



  // get comp choice
  // display those choices to the browser
  // decide who wins 