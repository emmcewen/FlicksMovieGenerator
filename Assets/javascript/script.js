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


for (i = 1; i < 100; i++) {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=74202059f4cf77ba57c6c082dbb67f3d&language=en-US&page=" + i)
        .then(response => response.json())
        .then(function (data) {
            console.log(data)
            for (var i = 0; i < data.results.length; i++) {
                if (data.results[i].genre_ids) {

                    //search for comedy
                    if (data.results[i].genre_ids.includes(35)) {
                        var title = data.results[i].original_title
                        comedyTitleArray.push(title)

                        console.log(comedyTitleArray)
                    }
                    //search for action adventure
                    if (data.results[i].genre_ids.includes(12) || data.results[i].genre_id[0] === 28) {
                        var title = data.results[i].original_title
                        actionTitleArray.push(title)
                    }
                    //search for horror
                    if (data.results[i].genre_ids.includes(27)) {
                        var title = data.results[i].original_title
                        horrorTitleArray.push(title)
                    }
                    //search for romance
                    if (data.results[i].genre_ids.includes(10749)) {
                        var title = data.results[i].original_title
                        romanceTitleArray.push(title)
                    }
                    //search for scifi
                    if (data.results[i].genre_ids.includes(878)) {
                        var title = data.results[i].original_title
                        scifiTitleArray.push(title)
                    }

                }

            }
        })
        .catch(err => console.error(err))

}








