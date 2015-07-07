function vodApp() {

    var module = module || {};

// constructor for each movie
function Media(boxCover, searchName, year) {
    this.boxCover = boxCover;
    this.searchName = searchName;
    this.year = year;
    this.title = "";
    this.genre = "";
    this.plot = "";
    this.rated = "";
    this.imdbRating = "";
    this.runtime = "";
    module.apiCall(this, module.init);
}

// defaults
Media.prototype.favorite = false;
Media.prototype.watchList = false;
Media.prototype.history = false;
Media.prototype.trailerUrl = "../assets/videos/movieclip.mp4"
Media.prototype.videoUrl = "../assets/videos/movieclip.mp4"


module = {
// API CALL
apiCall: function(obj, callback){
    var link = "http://www.omdbapi.com/?t=" + obj.searchName + "&y=" + obj.year + "&plot=short&r=json";
    var oReq = new XMLHttpRequest();
    oReq.open("get", link, true);
    oReq.onload = reqListener;
    oReq.send();
    function reqListener() {
        var apiReturn = JSON.parse(this.response);
        obj.title = apiReturn.Title;
        obj.genre = apiReturn.Genre;
        obj.plot = apiReturn.Plot;
        obj.rated = apiReturn.Rated;
        obj.imdbRating = apiReturn.imdbRating;
        obj.runtime = apiReturn.Runtime;
        callback(module);
    }
}, // end of apiCall function


// create movie objects
// put movie objects into table

makeMovieObjects: function() {

module.table = [
    new Media('../assets/boxcovers/avengers.jpg', "Avengers", "2012"),
    new Media('../assets/boxcovers/blade_runner.jpg', "Blade Runner", "1982"),
    new Media('../assets/boxcovers/brave.jpg', "Brave", "2012"),
    new Media('../assets/boxcovers/catching_fire.jpg', "The Hunger Games: Catching Fire", "2013"),
// new Media('../assets/boxcovers/django.jpg', "Django Unchained", "2012"),
// new Media('../assets/boxcovers/finding_nemo.jpg', "Finding Nemo", "2003"),
// new Media('../assets/boxcovers/hobbit.jpg', "The Hobbit: An Unexpected Journey", "2012"),
// new Media('../assets/boxcovers/hotel_transylvania.jpg', "Hotel Transylvania", "2012"),
// new Media('../assets/boxcovers/hugo.jpg', "Hugo", "2011"),
// new Media('../assets/boxcovers/iron_man.jpg', "Iron Man", "2008"),
// new Media('../assets/boxcovers/les_mis.jpg', "Les Miserables", "2012"),
// new Media('../assets/boxcovers/lorax.jpg', "The Lorax", "2012"),
// new Media('../assets/boxcovers/man_of_steel_large.jpg', "Man of Steel", "2013"),
// new Media('../assets/boxcovers/monsters_inc.jpg', "Monsters Inc", "2001"),
// new Media('../assets/boxcovers/new_moon.jpg', "The Twilight Saga: New Moon", "2009"),
// new Media('../assets/boxcovers/simpsons_movie_large.jpg', "The Simpsons Movie", "2007"),
// new Media('../assets/boxcovers/skyfall_large.jpg', "Skyfall", "2012"),
// new Media('../assets/boxcovers/spider_man.jpg', "Spider-Man", "2012"),
// new Media('../assets/boxcovers/star_trek.jpg', "Star Trek", "2009"),
// new Media('../assets/boxcovers/train_dragon.jpg', "How to Train Your Dragon", "2010"),
// new Media('../assets/boxcovers/wall_e.jpg', "Wall-E", "2008"),
// new Media('../assets/boxcovers/wreck_it_ralph.jpg', "Wreck-It Ralph", "2012"),
  ];
}, // end of makeMovieObjects function


// INTRO ANIMATION

// riiiiiiiight


// BUILDING MENUS


init: function(){

    var genresList = [];
    function sortByGenre() {
        // scoop up genres & create a uniq sorted array
        for (var i = 0; i < module.table.length; i++) {
            var genreCandidatesArray = module.table[i].genre.split(", ");
            genresList = $.merge(genresList, genreCandidatesArray);
        }
        console.log(genresList);
        genresList = _.uniq(genresList);
        console.log(genresList);
        genresList.sort();
        console.log(genresList);
        // create div for each genre type & display movies
        for (var j = 0; j < genresList.length; j++) {
            var genreDiv = document.createElement('div');
            var moviesByGenreDiv = document.createElement('div');
            genreDiv.className = "genre";
            document.getElementsByClassName("selections")[0].appendChild(genreDiv);
            genreDiv.innerHTML = genresList[j];
            genreDiv.appendChild(moviesByGenreDiv);
            // for (var k = 0[ k < module.table.length; k++]) {
            //     if (module.table[k].genre) {

            //     }

            // }

        }
    }

            //  for (var j = 0; j < genreCandidatesArray.length; j++) {
            //      if (genreCandidatesArray[j] in genresList === false) {
            //          genresList.push(genreCandidatesArray[j]);
            //      }
            //      if (genreCandidatesArray[j] in genresList) {
            //          console.log("whoo");
            //      }
            //  }
            // ZsList.push(table[i].genre)
            // bRatingsList.push(table[i].)
    // }

// console.log(genresList);
    // DEFAULT: sort by genre


// DISPLAY BOXCOVERS
//     for (var k = 0; k < table.length; k++) {
//         var movieImg = document.createElement('img');
//         movieImg.src = table[k].boxCover;
//         movieImg.id = table[k].name;
//         var home = document.getElementsByClassName("selections");
//         home[0].appendChild(movieImg);
//     }
  } //end of init function
}
module.makeMovieObjects();
}
vodApp();


