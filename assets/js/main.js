// ----------------------------------  Variables  ----------------------------------

let userScore = 0;
let computerScore = 0;
let roundsDisplay = 0;

const userBtn = document.querySelectorAll("button");
const selectRound = document.querySelectorAll("input");
const playedRounds = document.getElementById("playedRounds");
const pickedRound = document.getElementById("pickedRound");
const displayScoreUser = document.getElementById("scoreUser");
const displayScoreComp = document.getElementById("scoreComp");
const userChoice = document.getElementById("userChoice");
const compChoice = document.getElementById("compChoice");
const winnerDisplay = document.getElementById("winnerDisplay");
const determineWinner = document.getElementById("determineWinner");

// ---------------------------------- FUNCTION Get the user’s choice ----------------------------------

userBtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    if (pickedRound.innerText == 0) {
      window.alert("You have to choose a round first!");
    } else {
      //Counts the rounds
      roundsDisplay += 1;
      playedRounds.innerText = roundsDisplay;
      console.log(roundsDisplay);
      // RPS
      userChoice.innerText = event.target.value;
      computerChoice2();
      selectRounds();
    }
  });
});

// ---------------------------------- FUNCTION Get a random computer choice ----------------------------------

let computerChoice2 = () => {
  let computerChoice = ["rock", "paper", "scissors"];
  const comp = computerChoice[Math.floor(Math.random() * 3)];
  compChoice.innerText = comp;

  // Compare the two choices, determine a winner AND display the results.
  // TODO Color change

  let determineWinner = () => {
    if (comp === userChoice.innerText) {
      winnerDisplay.innerText = `You both choose ${comp}`;
      winnerDisplay.style.color = "grey";
    } else if (
      (userChoice.innerText === "rock" && comp === "paper") ||
      (userChoice.innerText === "paper" && comp === "scissors") ||
      (userChoice.innerText === "scissors" && comp === "rock")
    ) {
      computerScore++;
      displayScoreComp.innerText = computerScore;
      winnerDisplay.innerText = `Computer won!`;
      winnerDisplay.style.color = "#ff6230";

      // document.body.style.backgroundColor = "red";
    } else if (
      (userChoice.innerText === "paper" && comp === "rock") ||
      (userChoice.innerText === "scissors" && comp === "paper") ||
      (userChoice.innerText === "rock" && comp === "scissors")
    ) {
      userScore++;
      displayScoreUser.innerText = userScore;
      winnerDisplay.innerText = `You won!`;
      winnerDisplay.style.color = "#21cfcb";

      // document.body.style.backgroundColor = "green";
    }
  };
  determineWinner();
};

// ---------------------------------- FUNCTION for rounds ----------------------------------

selectRound.forEach((r) => {
  r.addEventListener("change", (event) => {
    event.preventDefault();
    console.log(+event.target.value);
    pickedRound.innerText = event.target.value;
  });
});

let selectRounds = () => {
  if (roundsDisplay == pickedRound.innerText) {
    endGame();
  }
};

let endGame = () => {
  if (userScore < computerScore) {
    winnerDisplay.innerText = ``;
    determineWinner.innerText = `YOU LOST!`;
    setTimeout(function () {
      window.location.reload();
    }, 5000);
  } else if (userScore > computerScore) {
    winnerDisplay.innerText = ``;
    determineWinner.innerText = `CONGRATULATIONS, YOU WON! `;
    setTimeout(function () {
      window.location.reload();
    }, 5000);
  } else {
    winnerDisplay.innerText = ``;
    determineWinner.innerText = `THIS GAME WAS A TIE!`;
    setTimeout(function () {
      window.location.reload();
    }, 5000);
  }
};

// ---------------------------------- FUNCTION Restart Button ----------------------------------

const reloadButton = document.querySelector(".reloadBtn");
reloadButton.addEventListener("click", (event) => {
  event.preventDefault();
  location.reload();
});
