document.querySelector("button").addEventListener("click", generateGroups);

let randName;
let females = ["Sarah", "Ann", "Alysse", "Madina", "Jenna", "Laurel", "Gurpreet","Celeste", "Imane", "Lilyann", "Sachie", "Raimi", "Tasneem", "Ace", "Lesley"];
let males = ["Victor", "Ali", "Muhammad", "Alberto", "Ryan", "Bryson", "Carlos","Bob", "Andres", "Zakary", "Michael", "Blake", "Jason", "Dante", "Mohamed"];
let result = document.querySelector("#result");
let type = document.querySelector("#group_type");
let groupSize = document.querySelector("#size");
let order = document.querySelector("#ordered");
let unorder = document.querySelector("#unordered");

groupSize.addEventListener("input", function(){
    result.textContent="";
})

function generateGroups() {
    result.textContent = "";
    let groupType = type.value;
    let size = groupSize.value;
    size = Number(size);
    let ordered = order.checked;
    let unordered = unorder.checked;
    let pic = document.querySelector("#groupPic");

    if(!groupType){
        result.textContent = "Please select group type";
        return;
    }

    if (size <= 0) {
        result.textContent = "Please select a group size";
        return;
    }
    if (!ordered && !unordered || ordered && unordered) {
        result.textContent = "Choose one sorting option";
        return;
    }
    
    let groupNames;

    if (groupType == "Male") {
        groupNames = males;
        pic.src="men.png";
        result.style.backgroundColor = "#d1f0f2";
    }
    else if (groupType == "Female") {
        groupNames = females;
        pic.src="women.png";
        result.style.backgroundColor = "#dfd1f2";

    }
    else if (groupType == "Mix") {
        groupNames = males.concat(females);
        pic.src="mix.png";
        result.style.backgroundColor = "#d1e3f2";

    }

    if (size > groupNames.length) {
        result.textContent = "Please select group size smaller than 15";
        return;
    }
    let group = [];

    while (group.length < size) {
        let rand = Math.floor(Math.random() * groupNames.length);
        randName = groupNames[rand];

        if (!group.includes(randName)) {
            group.push(randName);
        }
    }

    if (ordered) {
        group.sort();
    }

    if(unordered){
        group.reverse();
    }

    result.textContent =  "Generated group: \n" + group.join(' , ');
}