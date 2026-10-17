let boxes = document.querySelectorAll(".box"); //array containing boxes with indices from 0 to 8
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newGame");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let count = 0;

let turnO = true; //playerX, playerO
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO === false) {
      box.innerText = "X";
      turnO = true;
      box.style.color = "#b0413e"; 
    } else {
      box.innerText = "O";
      turnO = false;
      box.style.color = "#473335"; 
    }
     
    box.disabled = true;
    count++;

    checkWinner();
  });
});

const drawGame = () => {
  msg.innerText = "The Game was a Draw!";
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}!`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log(`${pos1} has won!`);
        showWinner(pos1);
      }
    }
  }
  if (count === 9) {
    drawGame();
  }
};

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
  count = 0;
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
