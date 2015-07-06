// constructor for each movie
function Media(name, boxCover) {
	this.name = name;
	this.boxCover = boxCover;
};

// favorite, watchlist & history default as false
Media.prototype.favorite = false;
Media.prototype.watchList = false;
Media.prototype.history = false;


// create movie objects
// put movie objects into table
var table = [

new Media("avengers",'../assets/boxcovers/avengers.jpg'),
new Media("blade_runner",'../assets/boxcovers/blade_runner.jpg'),
new Media("brave",'../assets/boxcovers/brave.jpg'),
new Media("catching_fire",'../assets/boxcovers/catching_fire.jpg'),
new Media("django",'../assets/boxcovers/django.jpg'),
new Media("finding_nemo",'../assets/boxcovers/finding_nemo.jpg'),
new Media("hobbit",'../assets/boxcovers/hobbit.jpg'),
new Media("hotel_transylvania",'../assets/boxcovers/hotel_transylvania.jpg'),
new Media("hugo",'../assets/boxcovers/hugo.jpg'),
new Media("iron_man",'../assets/boxcovers/iron_man.jpg'),
new Media("les_mis",'../assets/boxcovers/les_mis.jpg'),
new Media("lorax",'../assets/boxcovers/lorax.jpg'),
new Media("man_of_steel",'../assets/boxcovers/man_of_steel_large.jpg'),
new Media("monsters_inc",'../assets/boxcovers/monsters_inc.jpg'),
new Media("new_moon",'../assets/boxcovers/new_moon.jpg'),
new Media("simpsons_movie",'../assets/boxcovers/simpsons_movie_large.jpg'),
new Media("skyfall",'../assets/boxcovers/skyfall_large.jpg'),
new Media("spider_man",'../assets/boxcovers/spider_man.jpg'),
new Media("star_trek",'../assets/boxcovers/star_trek.jpg'),
new Media("train_dragon",'../assets/boxcovers/train_dragon.jpg'),
new Media("wall_e",'../assets/boxcovers/wall_e.jpg'),
new Media("wreck_it_ralph",'../assets/boxcovers/wreck_it_ralph.jpg'),

];

var ugly = 'http://www.omdbapi.com/?t=avengers&y=2014&plot=short&r=json';
console.log(ugly);


// THIS ERRORS OUT: Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check http://xhr.spec.whatwg.org/.
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "http://www.omdbapi.com/?t=avengers&y=2014&plot=short&r=json", false);
// xhr.send();
// console.log(xhr.statusText);



// API ATTEMPT 2
jQuery.get( "http://public-api.wordpress.com/rest/v1/sites/en.blog.wordpress.com/", function( response ) { 
    // response contains site information
} );




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
};


