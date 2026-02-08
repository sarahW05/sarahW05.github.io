console.log("running");

let correctNumber = 6;
let correctMessage = "Good job, you got it right!";
let less = "Too low";
let high = "Too high";
let noInput = "Enter a number";
let guessCount = 0;
let guess = "Total Guesses: ";
let withinLimit = "You guessed within the 7 attempts!";

let guessInput = document.querySelector("#guessInput");
let guessButton = document.querySelector("#guessButton");
let guessResult = document.querySelector("#guessResult");
let totalGuesses = document.querySelector("#totalGuesses");
let targetGuess = document.querySelector("#targetGuess");


guessButton.addEventListener("click", function(){
    if(guessInput.value == correctNumber){
        guessResult.textContent = correctMessage;
        guessResult.style.color = "green";
        guessCount++;
        totalGuesses.textContent = guess + guessCount;
        if(guessCount<7 ){
            targetGuess.textContent = withinLimit;
            targetGuess.style.color = "green";
        }

    }
    else if (guessInput.value < correctNumber){
        guessResult.textContent = less;
        guessResult.style.color = "orange";
        guessCount++;
        totalGuesses.textContent = guess + guessCount;
    }
    else{
        guessResult.textContent = high;
        guessResult.style.color = "red";
        guessCount++;
        totalGuesses.textContent = guess + guessCount;
    }
});
