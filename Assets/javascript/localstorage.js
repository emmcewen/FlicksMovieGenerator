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
    }