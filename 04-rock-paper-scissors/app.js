let userScore = document.querySelector("#player");
let compScore = document.querySelector("#comp");

const choices = document.querySelectorAll(".gesture");
let msg = document.querySelector("#msg");

const genCompChoice = () => {
  //rock, paper, scissors
  const options = ["rock", "paper", "scissors"];
  const i = Math.floor(Math.random() * 3);
  return options[i];
};

const drawGame = () => {
  msg.innerText = "Draw!\nSelect Again...";
};

const playGame = (userChoice) => {
  //generate computer choice -> modular
  const compChoice = genCompChoice();
  let userWin = true;

  if (userChoice === compChoice) {
    drawGame();
    return;
  } else {
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
  }
  showWinner(userWin);
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore.innerText = `${Number(userScore.innerText)+1}`;
    msg.innerText = "You win!\nSelect Again...";
    msg.style.backgroundColor = "green";
  } else {
    compScore.innerText = `${Number(compScore.innerText)+1}`;
    msg.innerText = "You loose!\nSelect Again...";
    msg.style.backgroundColor = "red";
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
