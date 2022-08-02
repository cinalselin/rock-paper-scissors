// ---------------------------------- VARIABLE ----------------------------------

// Variables Buttons rock, paper, scissors
const userBtn = document.querySelectorAll("button");

// Variables Rounds
const selectRound = document.querySelectorAll("input");

// Variables for rounds
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

// ---------------------------------- FUNCTION Rounds ----------------------------------

selectRound.forEach((r) => {
  r.addEventListener("change", (event) => {
    event.preventDefault();
    console.log(+event.target.value);
    pickedRound.innerText = event.target.value;
  });
});

let selectRounds = () => {
  if (roundsDisplay == pickedRound.innerText) {
    console.log("GAME OVER");
    // endGame();
    //TODO write endGame() function -> if 5/5 or 10/10 etc. -> then Display Winner with innerhtml (computerScore < userScore then xy.. ), and restart/ reload page after 3-5 seconds?
  }
};

// ---------------------------------- FUNCTION Restart Button ----------------------------------

const reloadButton = document.querySelector(".reloadBtn");
reloadButton.addEventListener("click", (event) => {
  event.preventDefault();
  location.reload();
});
