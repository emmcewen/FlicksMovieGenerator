var actionBtn = document.querySelector("#action")
var romanceBtn = document.querySelector("#romance")
var scifiBtn = document.querySelector("#scifi")
var comedyBtn = document.querySelector("#comedy")
var horrorBtn = document.querySelector("#horror")
var card1El = document.querySelector(".card-1")
var card2El = document.querySelector(".card-2")
var card3El = document.querySelector(".card-3")
var card4El = document.querySelector(".card-4")
var card5El = document.querySelector(".card-5")
var description1El = document.querySelector("#description-1")
var description2El = document.querySelector("#description-2")
var description3El = document.querySelector("#description-3")
var description4El = document.querySelector("#description-4")
var description5El = document.querySelector("#description-5")
var comedyTitleArray = []
var horrorTitleArray = []
var scifiTitleArray = []
var romanceTitleArray = []
var actionTitleArray = []

var comedyDescrArray = []
var horrorDescrArray = []
var scifiDescrArray = []
var romanceDescrArray = []
var actionDescrArray = []

var promiseArray = []

for (i = 1; i < 100; i++) {

    var prom = fetch("https://api.themoviedb.org/3/movie/popular?api_key=74202059f4cf77ba57c6c082dbb67f3d&language=en-US&page=" + i)
        .then(response => response.json())
        .then(function (data) {

            for (var i = 0; i < data.results.length; i++) {
                //genre ids
                if (data.results[i].genre_ids) {

                    //search for comedy
                    if (data.results[i].genre_ids[0] === 35) {
                        var descriptionData = data.results[i].overview
                        var title = data.results[i].original_title
                        comedyTitleArray.push(title)
                        comedyDescrArray.push(descriptionData)





                    }
                    //search for action adventure
                    else if (data.results[i].genre_ids[0] === 12 || data.results[i].genre_ids[0] === 28) {
                        var descriptionData = data.results[i].overview
                        var title = data.results[i].original_title
                        actionTitleArray.push(title)
                        actionDescrArray.push(descriptionData)


                    }
                    //search for horror
                    else if (data.results[i].genre_ids[0] === 27) {
                        var descriptionData = data.results[i].overview
                        var title = data.results[i].original_title
                        horrorTitleArray.push(title)
                        horrorDescrArray.push(descriptionData)


                    }
                    //search for romance
                    else if (data.results[i].genre_ids[0] === 10749) {
                        var descriptionData = data.results[i].overview
                        var title = data.results[i].original_title
                        romanceTitleArray.push(title)
                        romanceDescrArray.push(descriptionData)


                    }
                    //search for scifi
                    else if (data.results[i].genre_ids[0] === 878) {
                        var descriptionData = data.results[i].overview
                        var title = data.results[i].original_title
                        scifiTitleArray.push(title)
                        scifiDescrArray.push(descriptionData)



                    }






                }
               


            }
        })
        .catch(err => console.error(err))
    promiseArray.push(prom)

}
console.log(promiseArray)

function displayMovie() {
    Promise.all(promiseArray)

        .then(function () {


            var selectText = document.getElementById("my-text").value;
            
            if (selectText === "Action/Adventure") {
                
                for (var i = 1; i < 6; i++) {
                    var randomIndex = Math.floor(Math.random() *actionTitleArray.length)
                    console.log(randomIndex)
                    console.log(actionTitleArray[randomIndex])
                    var cardSelect = document.getElementById("card-title" + i)
                    var cardSelectDescr = document.getElementById("description-"+i)
                    console.log(cardSelect)
                    cardSelect.innerHTML = actionTitleArray[randomIndex]
                    cardSelectDescr.innerHTML=actionDescrArray[randomIndex]
                    
                }

            }
            else if (selectText === "Romance") {
               
                for (var i = 1; i < 6; i++) {
                    var randomIndex = Math.floor(Math.random() * romanceTitleArray.length)
                    var cardSelect = document.getElementById("card-title" + i)
                    var cardSelectDescr = document.getElementById("description-"+i)
                    cardSelect.innerHTML = romanceTitleArray[randomIndex]
                    cardSelectDescr.innerHTML=romanceDescrArray[randomIndex]
                }

            }
            else if (selectText === "Sci-Fi") {
                
                for (var i = 1; i < 6; i++) {
                    var randomIndex = Math.floor(Math.random() *scifiTitleArray.length )
                    var cardSelect = document.getElementById("card-title" + i)
                    var cardSelectDescr = document.getElementById("description-"+i)
                    cardSelect.innerHTML = scifiTitleArray[randomIndex]
                    cardSelectDescr.innerHTML=scifiDescrArray[randomIndex]
                }

            }
            else if (selectText === "Horror") {
                
                for (var i = 1; i < 6; i++) {
                    var randomIndex = Math.floor(Math.random() * horrorTitleArray.length)
                    var cardSelect = document.getElementById("card-title" + i)
                    var cardSelectDescr = document.getElementById("description-"+i)
                    cardSelect.innerHTML = horrorTitleArray[randomIndex]
                    cardSelectDescr.innerHTML=horrorDescrArray[randomIndex]
                }

            }
            else if (selectText === "Comedy") {
                
                for (var i = 1; i < 6; i++) {
                    var randomIndex = Math.floor(Math.random() * comedyTitleArray.length)
                    var cardSelect = document.getElementById("card-title" + i)
                    var cardSelectDescr = document.getElementById("description-"+i)
                    cardSelect.innerHTML = comedyTitleArray[randomIndex]
                    cardSelectDescr.innerHTML =comedyDescrArray[randomIndex]
                }

            }

        })

        putDropDownValueIntoLocalStorage()
}












