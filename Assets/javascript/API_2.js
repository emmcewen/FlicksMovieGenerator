
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
var imdbIDArray = []
var imdbPlaceHolder = ""




function getimdbID() {


	var counter = 1
	var cardSelectText = document.getElementById("card-title" + counter).textContent
	console.log(cardSelectText)


	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '1ab8fc21bbmshf492ce26bc4e2cfp1e925bjsn0b2cd4d69346',
			'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'

		}
	}


	var prom = fetch('https://ott-details.p.rapidapi.com/search?title=' + cardSelectText + '&page=1', options)
		.then(response => response.json())
		.then(function (data) {
			if (data.results[0].imdbid) {
				imdbIDArray.length = 0

				var imdbID = data.results[0].imdbid
				imdbIDArray.push(imdbID);

			}




		})
		.catch(err => console.log(err))
	promiseArray.push(prom)







	clearInterval()
	getimdbOnScreen();




}

function getimdbOnScreen() {
	Promise.allSettled(promiseArray)
		.then(function () {
			var cardSelect = document.getElementById("ratings1")
			cardSelect.innerHTML = "Imdb ID: " + imdbIDArray[0]

		})
}






