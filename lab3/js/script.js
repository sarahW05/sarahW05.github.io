document.querySelector("button").addEventListener("click", gradeQuiz);

let mostMilk = "Latte"
let rightCountry = "Brazil"
let rightBrew = "pour-over"
let rightNum = 2


let firstResult = document.querySelector("#firstResult");
let secondResult = document.querySelector("#secondResult");
let thirdResult = document.querySelector("#thirdResult");
let fourthResult = document.querySelector("#fourthResult");
let fifthResult = document.querySelector("#fifthResult");

shuffleQ1Answers();
getQuotes.addEventListener("input", function(){
    result.textContent="";
})

function shuffleQ1Answers() {
    let qOptions = ["Latte", "Cortado", "Cold Brew"];

    //uses fisher-yates shuffle 
    for (let m = qOptions.length - 1; m > 0; m--) {
        let a = Math.floor(Math.random() * (m + 1));

        let temp = qOptions[m];
        qOptions[m] = qOptions[a];
        qOptions[a] = temp;
    }

    for (let m of qOptions) {
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

function gradeQuiz() {
    let grade = 0;
    let userAnswer1 = document.querySelector("input[name=q1]:checked").value;
    let userAnswer2 = document.querySelector("#answerInput").value;
    let userAnswer3 = document.querySelector("#brews").value;
    let userAnswer4 = document.querySelector("#numInput").value;
    let trueCheck = document.querySelector("#true").checked;
    let falseCheck = document.querySelector("#false").checked;

    let res1 = document.querySelector("#res1");
    let res2 = document.querySelector("#res2");
    let res3 = document.querySelector("#res3");
    let res4 = document.querySelector("#res4");
    let res5 = document.querySelector("#res5");

    if (userAnswer1 == mostMilk) {
        firstResult.textContent = "Correct!";
        firstResult.style.color = "green";
        res1.src = "img/correct.png";
        grade += 20;
    }
    else {
        firstResult.textContent = "Wrong!";
        firstResult.style.color = "red";
        res1.src = "img/wrong.png";
    }
    if (userAnswer2 == rightCountry) {
        secondResult.textContent = "Correct!";
        secondResult.style.color = "green";
        res2.src = "img/correct.png";
        grade += 20;

    }
    else {
        secondResult.textContent = "Wrong!";
        secondResult.style.color = "red";
        res2.src = "img/wrong.png";
    }
    if (userAnswer3 == rightBrew) {
        thirdResult.textContent = "Correct!";
        thirdResult.style.color = "green";
        res3.src = "img/correct.png";
        grade += 20;
    }
    else {
        thirdResult.textContent = "Wrong!";
        thirdResult.style.color = "red";
        res3.src = "img/wrong.png";
    }
    if (userAnswer4 == rightNum) {
        fourthResult.textContent = "Correct!";
        fourthResult.style.color = "green";
        res4.src = "img/correct.png";
        grade += 20;
    }
    else {
        fourthResult.textContent = "Wrong!";
        fourthResult.style.color = "red";
        res4.src = "img/wrong.png";
    }

    if (falseCheck && !trueCheck) {
        fifthResult.textContent = "Correct!";
        fifthResult.style.color = "green";
        res5.src = "img/correct.png";
        grade += 20;
    }
    else {
        fifthResult.textContent = "Wrong!";
        fifthResult.style.color = "red";
        res5.src = "img/wrong.png";
    }


    if (grade > 80) {
        document.querySelector("#highGrade").textContent = "Congrats you passed with a high score!";
    }

    document.querySelector("#score").textContent = "Total Score: " + grade + "%";

    let repeats = document.querySelector("#repeats");

    let taken = localStorage.getItem("count");
    if (taken == null) {
        taken = 0;
    }

    taken++;

    localStorage.setItem("count", taken);

    repeats.textContent = "You have taken the quiz: " + taken + " times";


}