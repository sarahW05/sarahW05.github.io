async function getMovieData(){
    try{
        let url = "https://www.omdbapi.com/?apikey=12215ee6&s=super%20mario"

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

getMovieData();