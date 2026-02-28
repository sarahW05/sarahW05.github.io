async function pageLoad() {

    let url = "https://csumb.space/api/allStatesAPI.php";

    try {
        const reponse = await fetch(url);
        const states = await reponse.json();

        let stateSelection = document.querySelector("#state_selection");

        for (let m = 0; m < states.length; m++) {
            let option = document.createElement("option");
            option.value = states[m].usps;
            option.textContent = states[m].state;
            stateSelection.append(option);
        }

        // selecting state
        stateSelection.addEventListener("change", async function () {

            let countiesUrl =
                `https://csumb.space/api/countyListAPI.php?state=${stateSelection.value}`;

            try {
                const countyResponse = await fetch(countiesUrl);
                const counties = await countyResponse.json();

                let countySelection =document.querySelector("#county_selection");

                // clears out previous counties in the list
                countySelection.innerHTML = "";

                for (let a = 0; a < counties.length; a++) {
                    let chosenCounty = document.createElement("option");
                    chosenCounty.textContent = counties[a].county;
                    countySelection.append(chosenCounty);
                }

            } catch (err) {
                alert("Error in loading counties: " + err);
            }
        });

    } catch (err) {
        alert("Error in loading states: " + err);
    }
}

pageLoad();


let zipCode_input = document.querySelector("#zipCode-input");

zipCode_input.addEventListener("input", async function () {

    let url = `https://csumb.space/api/cityInfoAPI.php?zip=${zipCode_input.value}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Error accessing API endpoint");
        }

        const data = await response.json();
        console.log(data);

        if (!data) {
            document.querySelector("#noZip").textContent = "Zip code not found";
            document.querySelector("#noZip").style.color = "red";
        } else {
            document.querySelector("#noZip").textContent = "";
            document.querySelector("#city-display").textContent = data.city;
            document.querySelector("#latitude-display").textContent = data.latitude;
            document.querySelector("#longitude-display").textContent = data.longitude;
        }

    } catch (err) {
        if (err instanceof TypeError) {
            alert("Error accessing API endpoint (network failure)");
        } else {
            alert(err.message);
        }
    }
});



/* ---------------- PASSWORD SUGGESTION ---------------- */

document.querySelector("#password-input")
    .addEventListener("click", async function () {

        let url ="https://csumb.space/api/suggestedPassword.php?length=8";

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Error accessing API endpoint");
            }

            const data = await response.json();
            console.log(data);

            document.querySelector("#password-suggestion").textContent =`Suggested Password: ${data.password}`;

        } catch (err) {
            if (err instanceof TypeError) {
                alert(`(Password API) Error accessing API endpoint ${err}`);
            } else {
                alert(err.message);
            }
        }
    });



let username = document.querySelector("#username-input");

document.querySelector("#username-input")
    .addEventListener("input", async function () {

        let url = `https://csumb.space/api/usernamesAPI.php?username=${username.value}`;

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Error accessing API endpoint");
            }

            console.log(username);

            const data = await response.json();
            console.log(data);

            let userValidation = document.querySelector("#username-valid");

            if (data.available) {
                userValidation.textContent = "Username is available";
                userValidation.style.color = "green";
            } else {
                userValidation.textContent = "Username is already taken";
                userValidation.style.color = "red";
            }

        } catch (err) {
            if (err instanceof TypeError) {
                alert(`(Password API) Error accessing API endpoint ${err}`);
            } else {
                alert(err.message);
            }
        }
    });

document.querySelector("input[type='submit']").addEventListener("click", function (event) {

        event.preventDefault();

        let username = document.querySelector("#username-input").value;
        let password = document.querySelector("#password-input").value;
        let retype = document.querySelector("#retype").value;
        let errorMessage = document.querySelector("#err-msg");

        errorMessage.textContent = "";
        errorMessage.style.color = "red";

        if (username.length < 3) {
            errorMessage.textContent = "Please make sure username is at least 3 characters";
            return;
        }

        if (password.length < 6) {
            errorMessage.textContent = "Please make sure password is at least 6 characters";
            return;
        }

        if (password != retype) {
            errorMessage.textContent = "Please make sure password and the retype match";
            return;
        }

        location.reload();
    });