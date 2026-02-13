let colorButton = document.querySelector("#colorButton").addEventListener("click", changeColor);

function changeColor(){

    let textColor=document.querySelector("#textColor").value;

    document.querySelector("body").style.color = textColor;
}

let sizeButton = document.querySelector("#sizeButton").addEventListener("click", changeSize);

function changeSize(){
    let textSize = document.querySelector("#textSize").value;
    document.querySelector("body").style.fontSize = textSize + "em";
}

let bgButton = document.querySelector("#bgButton").addEventListener("click", changeBg);

function changeBg(){
    let bgColor = document.querySelector("#bgColor").value;
    document.querySelector("body").style.backgroundColor = bgColor;
}