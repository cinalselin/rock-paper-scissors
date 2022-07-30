// ---------------------------------- VARIABLE ----------------------------------
// Variabels Buttons rock, paper, scissors
const userBtn = document.querySelectorAll("button");

const rock = document.getElementById("rock").value;
const paper = document.getElementById("paper").value;
const scissors = document.getElementById("scissors").value;

// Variabels Rounds
const fiveRounds = document.getElementById("fiveRounds");
const tenRounds = document.getElementById("tenRounds");
const fifteenRounds = document.getElementById("fifteenRounds");
const twentyRounds = document.getElementById("twentyRounds");

// Variabels Game score
const displayScoreUser = document.getElementById("scoreUser");
const displayScoreComp = document.getElementById("scoreComp");
//User and Comp Scores
let userScore = 0;
let computerScore = 0;

// Variables user and comp choice
const userChoice = document.getElementById("userChoice");
const compChoice = document.getElementById("compChoice");

// ---------------------------------- FUNCTION Get the user’s choice ----------------------------------

userBtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    userChoice.innerText = event.target.value;
    computerChoice2();
  });
});

// ---------------------------------- FUNCTION Get a random computer choice ----------------------------------

let computerChoice2 = () => {
  // Comp Choice Rock Paper Scissors
  let computerChoice = ["rock", "paper", "scissors"];
  const comp = computerChoice[Math.floor(Math.random() * 3)];
  compChoice.innerText = comp;

  // Compare the two choices + determine a winner + display the results.

  let determineWinner = () => {
    if (comp === userChoice.innerText) {
      console.log("the game was a tie!");
    } else if (userChoice.innerText === "rock" && comp === "paper") {
      computerScore++;
      displayScoreComp.innerText = computerScore;
      console.log("Computer Won!");
    } else if (userChoice.innerText === "paper" && comp === "rock") {
      userScore++;
      displayScoreUser.innerText = userScore;
      console.log("You Won!");
    } else if (userChoice.innerText === "paper" && comp === "scissors") {
      computerScore++;
      displayScoreComp.innerText = computerScore;
      console.log("Computer Won!");
    } else if (userChoice.innerText === "scissors" && comp === "paper") {
      userScore++;
      displayScoreUser.innerText = userScore;
      console.log("You Won!");
    } else if (userChoice.innerText === "scissors" && comp === "rock") {
      computerScore++;
      displayScoreComp.innerText = computerScore;
      console.log("Computer Won!");
    } else if (userChoice.innerText === "rock" && comp === "scissors") {
      userScore++;
      displayScoreUser.innerText = userScore;
      console.log("You Won!");
    }
  };
  determineWinner();
};

// Function for rounds? How many rounds?
//TODO
// Restart Button
//TODO
// location.reload();
// return false;

//Style CSS
//TODO
