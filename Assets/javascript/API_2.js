//Psuedo Code for OTT details API Documentationrapid API//

/*GET data from OTT

Json the data and store the objects in an array of scores

Loop through the array and check for streaming information (per documentation)*/

//javascript jquery//
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=1",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "5163f66adamsh9a5b7af41166208p183e37jsna4acff3a3926",
		"X-RapidAPI-Host": "ott-details.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});



//javascript fetch//
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5163f66adamsh9a5b7af41166208p183e37jsna4acff3a3926',
		'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
	}
};

fetch('https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=1', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));