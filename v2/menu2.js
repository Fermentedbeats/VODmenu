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
    apiCall(this);
}

// favorite, watchlist & history default as false
Media.prototype.favorite = false;
Media.prototype.watchList = false;
Media.prototype.history = false;

// create movie objects
// put movie objects into table
var table = [

new Media('../assets/boxcovers/avengers.jpg', "avengers", "2012")
// ,
// new Media('../assets/boxcovers/blade_runner.jpg', "blade runner", "1982"),
// new Media('../assets/boxcovers/brave.jpg', "brave", "2012"),
// new Media('../assets/boxcovers/catching_fire.jpg', "The Hunger Games: Catching Fire", "2013"),
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
// new Media('../assets/boxcovers/train_dragon.jpg', "How to train your dragon", "2010"),
// new Media('../assets/boxcovers/wall_e.jpg', "wall-e", "2008"),
// new Media('../assets/boxcovers/wreck_it_ralph.jpg', "wreck-it Ralph", "2012"),

];
//console.log(table[0]);


// THIS ERRORS OUT: Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check http://xhr.spec.whatwg.org/.
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "http://www.omdbapi.com/?t=avengers&y=2014&plot=short&r=json", false);
// xhr.send();
// console.log(xhr.statusText);



// API ATTEMPT 2
// jQuery.get( "http://www.omdbapi.com/?t=avengers&y=2014&plot=short&r=json", function( response ) { 
//     // response contains site information
//     console.log(response);
// } );

//ADD API INFO TO MOVIE OBJECT

// for (var i = 0; i < 1; i++) {
//     getTheGoddamnAPI(i);
// }


// function getTheGoddamnAPI(i) {
// 		jQuery.get( "http://www.omdbapi.com/?t=" + table[i].searchName + "&y=" + table[i].year + "&plot=short&r=json", function( response ) { 
//     // response contains site information
//     console.log(response);
//     var obj = response;

    //mergeData(response);


    //jQuery.extend(table[i], response);

    	// for (var property in response) {
    	// 	table[i].push(property);
    	// }
//      });
// }

// API ATTEMPT #3

// var info;

// for (var i = 0; i < 1; i++) {
// 	var link = "http://www.omdbapi.com/?t=" + table[i].searchName + "&y=" + table[i].year + "&plot=short&r=json";
// 	var oReq = new XMLHttpRequest();
// 	oReq.open("get", link, true);
// 	oReq.onload = reqListener;
// 	oReq.send();
// }

// function reqListener () {
// 	var obj = JSON.parse(this.response);
// }

// console.log(table[i]); // this prints no problem
// // table[i].push
// console.log(info); // Uncaught TypeError: table[i].push is not a function

// //API ATTEMPT 4

// foo(function(result) {
// 	console.log(result);
//     // code that depends on `result`
// });

// function foo(callback) {
//     var httpRequest = new XMLHttpRequest();
//     httpRequest.onload = function(){ // when the request is loaded
//        callback(httpRequest.responseText);// we're calling our method
//     };
//     httpRequest.open('GET', link, true);
//     httpRequest.send();
// }

// API ATTEMPT 5
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
        obj.plot = apiReturn.Plor;
        obj.rated = apiReturn.Rated;
        obj.imdbRating = apiReturn.imdbRating;
        obj.runtime = apiReturn.Runtime;
    }
}


// INTRO ANIMATION

// riiiiiiiight


// BUILDING MENUS

// DEFAULT: sort by genre

for (var i = 0; i < table.length; i++) {
	var movieImg = document.createElement('img');
	movieImg.src = table[i].boxCover;
	movieImg.id = table[i].name;
	var home = document.getElementsByClassName("selections");
	home[0].appendChild(movieImg);

}


