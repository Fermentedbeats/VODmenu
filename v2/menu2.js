function vodApp() {

// constructor for each movie
function Media(boxCover, trailerUrl, movieUrl, searchName, year) {
    this.boxCover = boxCover;
    this.trailerUrl = trailerUrl;
    this.movieUrl = movieUrl;
    this.searchName = searchName;
    this.year = year;
    this.title = "";
    this.genre = "";
    this.plot = "";
    this.rated = "";
    this.imdbRating = "";
    this.runtime = "";
    apiCall(this);
}

// favorite, watchlist & history default as false
Media.prototype.favorite = false;
Media.prototype.watchList = false;
Media.prototype.history = false;

// API CALL
function apiCall(obj){
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
        console.log(obj);
    }
} // end of apiCall function

var video = '../assets/videos/movieclip.mp4';

// create movie objects
// put movie objects into table

function makeMovieObjects(callback) {

    var table = [
new Media('../assets/boxcovers/avengers.jpg', video, video, "Avengers", "2012"),
new Media('../assets/boxcovers/blade_runner.jpg', video, video, "Blade Runner", "1982"),
new Media('../assets/boxcovers/brave.jpg', video, video, "Brave", "2012"),
new Media('../assets/boxcovers/catching_fire.jpg', video, video, "The Hunger Games: Catching Fire", "2013"),
new Media('../assets/boxcovers/django.jpg', video, video, "Django Unchained", "2012"),
new Media('../assets/boxcovers/finding_nemo.jpg', video, video, "Finding Nemo", "2003"),
new Media('../assets/boxcovers/hobbit.jpg', video, video, "The Hobbit: An Unexpected Journey", "2012"),
new Media('../assets/boxcovers/hotel_transylvania.jpg', video, video, "Hotel Transylvania", "2012"),
new Media('../assets/boxcovers/hugo.jpg', video, video, "Hugo", "2011"),
new Media('../assets/boxcovers/iron_man.jpg', video, video, "Iron Man", "2008"),
new Media('../assets/boxcovers/les_mis.jpg', video, video, "Les Miserables", "2012"),
new Media('../assets/boxcovers/lorax.jpg', video, video, "The Lorax", "2012"),
new Media('../assets/boxcovers/man_of_steel_large.jpg', video, video, "Man of Steel", "2013"),
new Media('../assets/boxcovers/monsters_inc.jpg', video, video, "Monsters Inc", "2001"),
new Media('../assets/boxcovers/new_moon.jpg', video, video, "The Twilight Saga: New Moon", "2009"),
new Media('../assets/boxcovers/simpsons_movie_large.jpg', video, video, "The Simpsons Movie", "2007"),
new Media('../assets/boxcovers/skyfall_large.jpg', video, video, "Skyfall", "2012"),
new Media('../assets/boxcovers/spider_man.jpg', video, video, "Spider-Man", "2012"),
new Media('../assets/boxcovers/star_trek.jpg', video, video, "Star Trek", "2009"),
new Media('../assets/boxcovers/train_dragon.jpg', video, video, "How to Train Your Dragon", "2010"),
new Media('../assets/boxcovers/wall_e.jpg', video, video, "Wall-E", "2008"),
new Media('../assets/boxcovers/wreck_it_ralph.jpg', video, video, "Wreck-It Ralph", "2012"),
];
callback;
return table;
} // end of makeMovieObjects function


// INTRO ANIMATION

// riiiiiiiight


// BUILDING MENUS


function init(table) {

//console.log(table[0].genre);

    var genresList = [];
    var aToZsList = [];
    var imdbRatingsList = [];

    // for (var i = 0; i < table.length; i++) {

    //     console.log(table[i].title);
    //     console.log(table[i].year);
        // var genreCandidatesArray = table[i].genre.split("");
        // console.log(table[i].genre);

        // for (var j = 0; j < genreCandidatesArray.length; j++) {
        //     if (genreCandidatesArray[j] in genresList === false) {
        //         genresList.push(genreCandidatesArray[j]);
        //     }
        //     if (genreCandidatesArray[j] in genresList) {
        //         console.log("whoo");
        //     }
        // }
    // aToZsList.push(table[i].genre)
    // imdbRatingsList.push(table[i].)
}

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
// } //end of init function

makeMovieObjects(init(table));
}
vodApp();


