let choice = document.querySelector("#drop");
choice.addEventListener("input", getImage);

async function getImage(){
    let pic = choice.value
    try{
        let url = `https://pixabay.com/api/?key=20426927-497d14db9c234faf7d0df8317&per_page=50&orientation=horizontal&q=${pic}`

//use await because both the bottom two lines execute at the same time 
        let response = await fetch(url);
        let data = await response.json();

        console.log(data);

    }catch(err){
        if(err instanceof TypeError){
            alert("ERROR! API can't be accessed")
        }
        alert(err)
    }

}
