
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

var promiseArray = []

for (var i = 1; i < 6; i++) {
	var cardSelect = document.getElementById("card-" + i).value
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '5163f66adamsh9a5b7af41166208p183e37jsna4acff3a3926',
			'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'

		}
	}

	fetch('https://ott-details.p.rapidapi.com/search?title=' + cardSelect + '&page=1', options)
		.then(response => response.json())
		.then(function (data) {
			var imdbID = response.results[0].imdbid
			data.results[0].imdbid = id;
			
			



		})

	fetch("https://api.themoviedb.org/3/movie/popular?api_key=74202059f4cf77ba57c6c082dbb67f3d&language=en-US&page=1")
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err))
}