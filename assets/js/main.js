// ---------------------------------- VARIABLE ----------------------------------
// Variables Buttons rock, paper, scissors
const userBtn = document.querySelectorAll("button");

const rock = document.getElementById("rock").value;
const paper = document.getElementById("paper").value;
const scissors = document.getElementById("scissors").value;

// Variables Rounds
const fiveRounds = document.getElementById("fiveRounds");
const tenRounds = document.getElementById("tenRounds");
const fifteenRounds = document.getElementById("fifteenRounds");
const twentyRounds = document.getElementById("twentyRounds");

// Variables for rounds //TODO
const playedRounds = document.getElementById("playedRounds");
const pickedRound = document.getElementById("pickedRound");
let roundsDisplay = 0;
let pickedRoundDisplay;

// Variables Game score
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
    //Counts the rounds
    roundsDisplay += 1;
    playedRounds.innerText = roundsDisplay;
    console.log(roundsDisplay);

    // RPS
    userChoice.innerText = event.target.value;
    computerChoice2();
    selectRounds();
  });
});

// ---------------------------------- FUNCTION Get a random computer choice ----------------------------------

let computerChoice2 = () => {
  // Computer choice ROCK, PAPER or SCISSORS
  let computerChoice = ["rock", "paper", "scissors"];
  const comp = computerChoice[Math.floor(Math.random() * 3)];
  compChoice.innerText = comp;

  // Compare the two choices, determine a winner AND display the results.
  // TODO innerhtml instead of console.log

  let determineWinner = () => {
    if (comp === userChoice.innerText) {
      console.log("the game was a tie!");
    } else if (
      (userChoice.innerText === "rock" && comp === "paper") ||
      (userChoice.innerText === "paper" && comp === "scissors") ||
      (userChoice.innerText === "scissors" && comp === "rock")
    ) {
      computerScore++;
      displayScoreComp.innerText = computerScore;
      console.log("Computer Won!");
    } else if (
      (userChoice.innerText === "paper" && comp === "rock") ||
      (userChoice.innerText === "scissors" && comp === "paper") ||
      (userChoice.innerText === "rock" && comp === "scissors")
    ) {
      userScore++;
      displayScoreUser.innerText = userScore;
      console.log("You Won!");
    }
  };
  determineWinner();
};

// //TODO Function for rounds? How many rounds?
// If amount of clicks = value of selected radio button -> then stop the game and show the winner

let selectRounds = () => {
  if (roundsDisplay === 5) {
    console.log("EndGAME");
    endGame();
  }
};

// ---------------------------------- FUNCTION Restart Button ----------------------------------

const reloadButton = document.querySelector(".reloadBtn");
reloadButton.addEventListener("click", (event) => {
  event.preventDefault();
  location.reload();
});
