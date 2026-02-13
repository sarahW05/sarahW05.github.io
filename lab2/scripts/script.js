let correctNumber;
let guessCount = 0;
let wins = 0;
let losses = 0;

let guessInput = document.querySelector("#guessInput");
let guessButton = document.querySelector("#guessButton");
let guessResult = document.querySelector("#guessResult");
let totalGuesses = document.querySelector("#totalGuesses");
let tries = document.querySelector("#numOfAttempts");
let winner = document.querySelector("#wins");
let loser = document.querySelector("#loss");
let resetBtn = document.querySelector("#resetButton");


initializeGame();

guessButton.addEventListener("click", function(){
    guessResult.textContent = "";

    let userGuess = guessInput.value;
    if(userGuess < 1 || userGuess > 99){
        guessResult.textContent = "Enter a number between 1 and 99";
        guessResult.style.color = "red";
        return;
    }

    guessCount++;
    tries.textContent = "Num of attempts: " + guessCount;

    if(userGuess == correctNumber){ 
        guessResult.textContent = "That's right! You win!!";
        guessResult.style.color = "darkgreen";
        wins++;
        winner.textContent = "Num of wins: " + wins;
        gameOver();
    }
    else{
        totalGuesses.textContent += userGuess + " ";

        if(guessCount == 7){
            guessResult.textContent = "You lose :( " + correctNumber;
            guessResult.style.color = "darkred";
            losses++;
            loser.textContent = "Num of losses: " + losses;
            gameOver();
        }
        else if(userGuess > correctNumber){
            guessResult.textContent = "Guess was too high";
            guessResult.style.color = "orange";
        }
        else{
            guessResult.textContent = "Guess was too low";
            guessResult.style.color = "orange";
        }
    }
});

resetBtn.addEventListener("click", initializeGame);

function initializeGame(){
    resetBtn.style.display = "none";
    correctNumber = Math.floor(Math.random()*99)+1;
    guessCount = 0;

    guessInput.value = "";
    guessInput.focus();

    guessResult.textContent = "";
    totalGuesses.textContent = "";
    tries.textContent = "";
    winner.textContent = "";
    loser.textContent = "";

    guessButton.style.display = "inline";
    resetBtn.style.display = "none";
}

function gameOver(){
    guessButton.style.display = "none";
    resetBtn.style.display = "inline";
}


