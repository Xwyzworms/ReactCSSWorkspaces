"use strict";

const WIN_VALUE = 100;
/**
 *  Just some Constant variabels for player 1
 */
const player1 = document.querySelectorAll(".player")[0];
const player1Name = document.getElementById("name--0");
const player1Score = document.getElementById("score--0");
const player1CurrentScore = document.getElementById("current--0");

let player1ScoreValue = 0;
let player1CurrentScoreValue = 0;
//

/**
 *  Just some Constant variabels for player 2
 */
const player2 = document.querySelectorAll(".player")[1];
const player2Name = document.getElementById("name--1");
const player2Score = document.getElementById("score--1");
const player2CurrentScore = document.getElementById("current--1");

let player2ScoreValue = 0;
let player2CurrentScoreValue = 0;
//*
// Rolls variabels
//
let currentDice = 0;
const diceElement = document.querySelector(".dice");

//*
// Rolls variabels
//
const newGameEl = document.querySelector(".btn--new");
const rollDiceEl = document.querySelector(".btn--roll");
const holdDiceEl = document.querySelector(".btn--hold");

const mainPlayerRolls = () => {};

const mainUserHoldScore = () => {};


const generateRandomDice = () => {
  currentDice = Number(Math.trunc(Math.random() * 6 ) + 1 );
};

const displayDiceRoll = () => {
  switch (currentDice) {
    case 1:
      diceElement.setAttribute("src", "dice-1.png");
      break;
    case 2:
      diceElement.setAttribute("src", "dice-2.png");
      break;
    case 3:
      diceElement.setAttribute("src", "dice-3.png");
      break;
    case 4:
      diceElement.setAttribute("src", "dice-4.png");
      break;
    case 5:
      diceElement.setAttribute("src", "dice-5.png");
      break;
    default:
      diceElement.setAttribute("src", "dice-6.png");
      break;
  }
};


const displayNewScore = (typePlayer) => {
  if (typePlayer === player1Name.textContent) {
    player1CurrentScore.textContent  = player1CurrentScoreValue;
    player1Score.textContent = player1ScoreValue;
  } else if (typePlayer === player2Name.textContent) {
    player2CurrentScore.textContent  = player2CurrentScoreValue;
    player2Score.textContent = player2ScoreValue;
  }
};

const resetGame = () => {
    resetPlayer1();
    resetPlayer2();
    enableMainButton();
    player1.classList.add("player--active");
  
    player1.classList.remove("player--winner");
    player2.classList.remove("player--winner");
};

const resetPlayer1 = () => {
    player1CurrentScoreValue = 0;
    player1ScoreValue = 0;

    player1Score.textContent = player1ScoreValue;
    player1CurrentScore.textContent = player1CurrentScoreValue;
    player1.classList.remove("player--active");
};

const resetPlayer2 = () => {

    player2CurrentScoreValue = 0;
    player2ScoreValue = 0;

    player2Score.textContent = player2ScoreValue;
    player2CurrentScore.textContent = player2CurrentScoreValue;
    player2.classList.remove("player--active");
};
const resetPlayer = (typeOfPlayer) => 
{
    if(typeOfPlayer === player1Name.textContent) {
        resetPlayer1();
        player2.classList.add("player--active");
    }
    else if(typeOfPlayer === player2Name.textContent) {
        resetPlayer2();
        player1.classList.add("player--active");
    }
};


const addScoreToCurrentPlayer = (typePlayer) => {
  if (typePlayer === player1Name.textContent) {
    player1ScoreValue = currentDice;
    player1CurrentScoreValue = player1CurrentScoreValue + player1ScoreValue;
  } else {
    player2ScoreValue = currentDice;
    player2CurrentScoreValue = player2CurrentScoreValue + player2ScoreValue;
  }
};

const checkWinningConditions = () => {
    let activePlayer = getActivePlayer();
    let winning = false;
    if(activePlayer === player1Name.textContent && player1CurrentScoreValue >= WIN_VALUE) 
    {
        player1.classList.add("player--winner");
        winning = true;
    } 
    else if (activePlayer === player2Name.textContent && player2CurrentScoreValue >= WIN_VALUE) 
    {
        player2.classList.add("player--winner");
        winning = true;
    }

    if(winning) {
        disableMainButton();
    }
}

const disableMainButton = () =>
{
    rollDiceEl.disabled = true;
    holdDiceEl.disabled = true;
}
const enableMainButton = () => {

    rollDiceEl.disabled = false;
    holdDiceEl.disabled = false;
}

const newGameEventHandler = (event) => {
  resetGame();
};
const getActivePlayer = () =>
{
    if(player1.classList.contains("player--active")) 
    {
        return player1Name.textContent;
    }
    return player2Name.textContent;
}
const rollDiceEventHandler = (event) => {
  let activePlayer = getActivePlayer();
  
  generateRandomDice();
  displayDiceRoll();
  
  if (currentDice != 1) {
        addScoreToCurrentPlayer(activePlayer);
    } else {
    resetPlayer(activePlayer);
    // reset player
  }
  displayNewScore(activePlayer);
  checkWinningConditions();
};

const holdDiceEventHandler = (event) => 
{
   changePlayer();
};

const changePlayer = () => {
  let activePlayer = getActivePlayer();
  if(activePlayer === player1Name.textContent) {
    player1.classList.remove("player--active");
    player2.classList.add("player--active");
  }
  else {
    player2.classList.remove("player--active");
    player1.classList.add("player--active");
  }
}

const setupOnClickListener = () => {
  newGameEl.addEventListener("click", newGameEventHandler);
  rollDiceEl.addEventListener("click", rollDiceEventHandler);
  holdDiceEl.addEventListener("click", holdDiceEventHandler);
};

setupOnClickListener();