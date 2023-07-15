'use strict'


const resetGame = () => {
    currentScore = 20;
    secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
    messageEl.textContent = "Start Guessing ...";
    numberEl.textContent = "?";
    inputCheckEl.value  = "";
    scoreEl.textContent = currentScore;
    h1El.textContent = "Guess my number";
    bodyEl.style.backgroundColor = "#222";
    
}
const scoreDecreasingHandler = () =>
{
    currentScore --;
    scoreEl.textContent = currentScore;

}
const showCorrectAnswer = () =>
{
    numberEl.textContent = secretNumber;
}
const highScoreHandler = () => {
    if(currentScore > highScore) {
        highScore = currentScore;
        highscoreEl.textContent = highScore;
    }
}
const showMessage = (typeMessage) => 
{
    if(typeMessage === "low") 
    {
        messageEl.textContent =" Too Low";
    }
    else if (typeMessage === "high") 
    {
        messageEl.textContent =" Too High";
    }
    else if(typeMessage === "correct") 
    {
        messageEl.textContent ="Correct";
    }
    else if(typeMessage === "lose") 
    {
        messageEl.textContent = "lose";
    }
}
const bodyStateHandler = (typeState) => 
{   
    if(typeState === "correct") {
        bodyEl.style.backgroundColor = "green";
    }
    else if(typeState === "lose") {
        bodyEl.style.backgroundColor = "red";
    }
}
const mainGameHandler = () => 
{
    const guessNums = Number(inputCheckEl.value);
    if( guessNums > 0) 
    {
        if(guessNums === secretNumber) 
        {
            showMessage("correct");
            showCorrectAnswer();
            bodyStateHandler("correct");
            h1El.textContent = "CONGRATS BROOO";
        }

        else if (guessNums > secretNumber) 
        {
            if(currentScore > 1) {
                showMessage("high");
                scoreDecreasingHandler();
            } else {
                showMessage("lose");
                showCorrectAnswer();
                bodyStateHandler("lose");
                h1El.textContent = "You LOSE !";
            }
        }

        else if (guessNums < secretNumber) 
        {
            if(currentScore > 1)  { 
                showMessage("low");
                scoreDecreasingHandler();
            } else { 
                showMessage("lose");
                showCorrectAnswer();
                bodyStateHandler("lose");
                h1El.textContent = "You LOSE !";
            }
        }
    }
    else 
    {
        messageEl.textContent = "No Value !";
    }
}
const setupBtnListener = () => 
{   
    btnCheckEl.addEventListener("click", () => {
        mainGameHandler();
    });

    btnAgainEl.addEventListener("click", () => {
        resetGame();
    });
}

let secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
let currentScore = 20;
let highScore = 0;

const btnCheckEl = document.querySelector(".check");
const btnAgainEl = document.querySelector(".again");

const numberEl = document.querySelector(".number");
const messageEl = document.querySelector(".message");
const inputCheckEl = document.querySelector(".guess");
const scoreEl = document.querySelector(".score");
const highscoreEl = document.querySelector(".highscore");
const h1El = document.querySelector("h1");

const bodyEl = document.querySelector("body");
setupBtnListener();