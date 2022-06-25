var comedyTitleArray = []
var horrorTitleArray = []
var scifiTitleArray = []
var romanceTitleArray = []
var actionTitleArray = []

var promiseArray = []
var imdbIDArray = []





function getimdbID() {

	//select the title from the first card
	
	var cardSelectText = document.getElementById("card-title1").textContent
	console.log(cardSelectText)


	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '1ab8fc21bbmshf492ce26bc4e2cfp1e925bjsn0b2cd4d69346',
			'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'

		}
	}

//API call to find the imdb id of the top title
	var prom = fetch('https://ott-details.p.rapidapi.com/search?title=' + cardSelectText + '&page=1', options)
		.then(response => response.json())
		.then(function (data) {
			if (data.results[0].imdbid) {
				//empty array
				imdbIDArray.length = 0
				var imdbID = data.results[0].imdbid
				imdbIDArray.push(imdbID);

			}




		})
		.catch(err => console.log(err))
	promiseArray.push(prom)






	getimdbOnScreen();




}

function getimdbOnScreen() {
	Promise.allSettled(promiseArray)
		.then(function () {
			var cardSelect = document.getElementById("ratings1")
			cardSelect.innerHTML = "Imdb ID: " + imdbIDArray[0]

		})
}






