let randomNumber;
let attempts = 0;
let win = 0;
let lose = 0;

document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

initializeGame();

function initializeGame(){
    randomNumber = Math.floor(Math.random()*99)+1;
    console.log("randomNumber: " + randomNumber);
    attempts = 0;

    //hide Reset button
    document.querySelector("#resetBtn").style.display = "none";
    //show guess button
    document.querySelector("#guessBtn").style.display = "inline";

    let playerGuess = document.querySelector("playerGuess");
    playerGuess.focus(); //add focus to textbox
    playerGuess.value = ""; // clear textbox

    let feedback = document.querySelector("#feedback");
    feedback.textContent = ""; //clear feedback
    let guess = document.querySelector("#guesses");
    guess.textContent = "";
}

function checkGuess(){
    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";
    let guess = document.querySelector("#playerGuess").value;
    let remainder = document.querySelector("#numOfAttempts");
    let wins = document.querySelector("#wins");
    wins.textContent = "";
    let loss = document.querySelector("#loss");
    loss.textContent = "";
    remainder.textContent = "";
    console.log("Player guess: " + guess);
    if(guess<1 || guess>99){
        feedback.textContent = "Enter a number between 1 and 99";
        feedback.style.color = "red";
        return;
    }
    attempts++;
    remainder.textContent = "Num of attempts: " + attempts;
    console.log("Attempts:" + attempts);
    feedback.style.color = "orange";
    if(guess == randomNumber){
        feedback.textContent = "That's right! You win!!";
        feedback.style.color = "darkgreen";
        win++;
        wins.textContent = "Num of wins: " + win;
        gameOver();
    }
    else{
        document.querySelector("#guesses").textContent += guess + " ";
        if (attempts == 7){
            feedback.textContent = "You lose :( " + randomNumber;
            feedback.style.color = "darkred";
            lose++;
            loss.textContent = "Num of losses: " + lose;
            gameOver();
        }
        else if (guess > randomNumber){
            feedback.textContent = "Guess was too high";
        }else{
            feedback.textContent = "Guess was too low";
        }
    }
}

function gameOver(){
    let guessBtn = document.querySelector("#guessBtn");
    let resetBtn = document.querySelector("#resetBtn");

    guessBtn.style.display = "none"; //this hides the guess button
    resetBtn.style.display = "inline"; //displays reset button
}
