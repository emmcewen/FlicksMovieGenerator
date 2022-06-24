

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
//for loop to grab multiple pages of movies
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
    //settle promises
    Promise.all(promiseArray)

        .then(function () {

            //get the value of the dropdown genre selected
            var selectText = document.getElementById("list").value;

            if (selectText === "Action/Adventure") {

                //for each card
                for (var i = 1; i < 6; i++) {
                    //random index number to access array
                    var randomIndex = Math.floor(Math.random() * actionTitleArray.length)
                    var cardSelect = document.getElementById("card-title" + i)
                    var cardSelectDescr = document.getElementById("description-" + i)
                    cardSelect.innerHTML = actionTitleArray[randomIndex]
                    //deal with possible empty description
                    if (actionDescrArray[randomIndex] === "") {
                        var noDescr = "No description available"
                        cardSelectDescr.innerHTML = noDescr
                    } else { cardSelectDescr.innerHTML = actionDescrArray[randomIndex] }


                }

            }
            else if (selectText === "Romance") {

                for (var i = 1; i < 6; i++) {
                    var randomIndex = Math.floor(Math.random() * romanceTitleArray.length)
                    var cardSelect = document.getElementById("card-title" + i)
                    var cardSelectDescr = document.getElementById("description-" + i)
                    cardSelect.innerHTML = romanceTitleArray[randomIndex]
                    if (romanceDescrArray[randomIndex] === "") {
                        var noDescr = "No description available"
                        cardSelectDescr.innerHTML = noDescr
                    } else { cardSelectDescr.innerHTML = romanceDescrArray[randomIndex] }
                }

            }
            else if (selectText === "Sci-Fi") {

                for (var i = 1; i < 6; i++) {
                    var randomIndex = Math.floor(Math.random() * scifiTitleArray.length)
                    var cardSelect = document.getElementById("card-title" + i)
                    var cardSelectDescr = document.getElementById("description-" + i)
                    cardSelect.innerHTML = scifiTitleArray[randomIndex]
                    if (scifiDescrArray[randomIndex] === "") {
                        var noDescr = "No description available"
                        cardSelectDescr.innerHTML = noDescr
                    } else { cardSelectDescr.innerHTML = scifiDescrArray[randomIndex] }
                }

            }
            else if (selectText === "Horror") {

                for (var i = 1; i < 6; i++) {
                    var randomIndex = Math.floor(Math.random() * horrorTitleArray.length)
                    var cardSelect = document.getElementById("card-title" + i)
                    var cardSelectDescr = document.getElementById("description-" + i)
                    cardSelect.innerHTML = horrorTitleArray[randomIndex]
                    if (horrorDescrArray[randomIndex] === "") {
                        var noDescr = "No description available"
                        cardSelectDescr.innerHTML = noDescr
                    } else { cardSelectDescr.innerHTML = horrorDescrArray[randomIndex] }
                }

            }
            else if (selectText === "Comedy") {

                for (var i = 1; i < 6; i++) {
                    var randomIndex = Math.floor(Math.random() * comedyTitleArray.length)
                    var cardSelect = document.getElementById("card-title" + i)
                    var cardSelectDescr = document.getElementById("description-" + i)
                    cardSelect.innerHTML = comedyTitleArray[randomIndex]
                    if (comedyDescrArray[randomIndex] === "") {
                        var noDescr = "No description available"
                        cardSelectDescr.innerHTML = noDescr
                    } else { cardSelectDescr.innerHTML = comedyDescrArray[randomIndex] }
                }

            }

        })
        .then(function () {
            putDropDownValueIntoLocalStorage();
            getimdbID();

        })
}
