document.querySelector("#translate").addEventListener("click", translate);
document.querySelector("#numOfQuotes").addEventListener("click", getQuotes);

shuffleLanguageOptions(); 

function shuffleLanguageOptions() {
    let langs = ["Esperanto", "English", "Spanish", "French"];

    //uses fisher-yates shuffle 
    for (let m = langs.length - 1; m > 0; m--) {
        let a = Math.floor(Math.random() * (m + 1));

        let temp = langs[m];
        langs[m] = langs[a];
        langs[a] = temp;
    }

    for (let m of langs) {
        let radioElement = document.createElement("input");
        radioElement.type = "radio";
        radioElement.name = "language";
        radioElement.value = m;

        let labelElement = document.createElement("label");
        labelElement.textContent = m;

        labelElement.prepend(radioElement);
        labelElement.prepend(" ")

        document.querySelector("#languageDiv").append(labelElement);
        console.log(labelElement);
    }
}

function translate(){
    let change = document.querySelector("input[name=language]:checked").value;
    let flag = document.querySelector("#flag");

    if(change == "English"){
        flag.src = "img/english_flag.png"
    }
    else if(change == "Spanish"){
        flag.src = "img/spanish_flag.png"
    }
    else if(change== "Esperanto"){
        flag.src = "img/esperanto_flag.png"
    }
    else if(change == "French"){
        flag.src = "img/french_flag.png"
    }
}

function getQuotes(){
    let amount = document.querySelector("#quoteNum").value;
    console.log(amount);

    if(amount < 1 || amount > 5){
        document.querySelector("#error").textContent = "Please select a number between 1 and 5";
        document.querySelector("#error").style.color = "red";
    }
}