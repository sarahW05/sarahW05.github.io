document.querySelector("button").addEventListener("click", gradeQuiz);

let mostMilk = "Latte"
let rightCountry = "Brazil"
let rightBrew = "pour-over"
let rightNum = 2
let correctOption = "Good Job!"
let wrongOption = "Wrong!"
let firstResult = document.querySelector("#firstResult");
let secondResult = document.querySelector("#secondResult");
let thirdResult = document.querySelector("#thirdResult");
let fourthResult = document.querySelector("#fourthResult");

shuffleQ1Answers();

function checkStatus(){
    var checkBox = document.getElementById("tOrf");
    var outputText = document.getElementById("fifthResult");
    if(checkBox.checked){
        outputText.textContent = correctOption;
        outputText.style.color = "green";
    }
    else{
        outputText.textContent = wrongOption;
        outputText.style.color = "red";
    }
}

function shuffleQ1Answers(){
    let qOptions = ["Latte", "Cortado", "Cold Brew"];

    for(let m of qOptions){
        let radioElement = document.createElement("input");
        radioElement.type = "radio";
        radioElement.name = "q1";
        radioElement.value = m;

        let labelElement = document.createElement("label");
        labelElement.textContent = m;

        labelElement.prepend(radioElement);
        labelElement.prepend(" ")

        document.querySelector("#q1optionsDiv").append(labelElement);
        console.log(labelElement);
    }
}

function gradeQuiz(){
    let userAnswer1 = document.querySelector("input[name=q1]:checked").value;
    let userAnswer2 = document.querySelector("#answerInput").value;
    let userAnswer3 = document.querySelector("#brews").value;
    let userAnswer4 = document.querySelector("#numInput").value;

    if(userAnswer1 == mostMilk){
        firstResult.textContent = correctOption;
        firstResult.style.color = "green";

    }
    else{
        firstResult.textContent = wrongOption;
        firstResult.style.color = "red";
    }
    if(userAnswer2 == rightCountry){
        secondResult.textContent = correctOption;
        secondResult.style.color = "green";
    }
    else{
        secondResult.textContent = wrongOption;
        secondResult.style.color = "red";
    }
    if(userAnswer3 == rightBrew){
        thirdResult.textContent = correctOption;
        thirdResult.style.color = "green";
    }
    else{
        thirdResult.textContent = wrongOption;
        thirdResult.style.color = "red";
    }
    if(userAnswer4 == rightNum){
        fourthResult.textContent = correctOption;
        fourthResult.style.color = "green";
    }
    else{
        fourthResult.textContent = wrongOption;
        fourthResult.style.color = "red";
    }

    checkStatus();

    
}