function vodApp() {

// constructor for each movie
function Media(boxCover, title, year, genre, stars, content) {
    this.boxCover = boxCover;
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.stars = stars;
    this.content = content;
}

// defaults
Media.prototype.favorite = false;
Media.prototype.watchList = false;
Media.prototype.history = false;
Media.prototype.trailerUrl = "../assets/videos/movieclip.mp4"
Media.prototype.videoUrl = "../assets/videos/movieclip.mp4"
Media.prototype.plot = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel imperdiet turpis, non commodo ligula. Ut ut risus at leo rhoncus tempor non non dui. Donec nec quam non ipsum laoreet suscipit. Fusce viverra enim massa, tincidunt fringilla lorem condimentum eget. Aenean eu neque quis ex fringilla semper ut sit amet lorem."

// create movie objects && put movie objects into table
var table = [
new Media('../assets/boxcovers/avengers.jpg', "Avengers", "2012", "Action / Adventure", 7, "PG-13"),
new Media('../assets/boxcovers/blade_runner.jpg', "Blade Runner", "1982", "Drama", 8, "R"),
new Media('../assets/boxcovers/brave.jpg', "Brave", "2012", "Family", 8, "G"),
new Media('../assets/boxcovers/django.jpg', "Django Unchained", "2012", "Drama", 9, "R"),
new Media('../assets/boxcovers/finding_nemo.jpg', "Finding Nemo", "2003", "Family", 9, "G"),
new Media('../assets/boxcovers/hobbit.jpg', "Hobbit: An Unexpected Journey", "2012", "Family", 9, "PG"),
new Media('../assets/boxcovers/hotel_transylvania.jpg', "Hotel Transylvania", "2012", "Family", 5, "G"),
new Media('../assets/boxcovers/train_dragon.jpg', "How to Train Your Dragon", "2010", "Family", 7, "G"),
new Media('../assets/boxcovers/hugo.jpg', "Hugo", "2011", "Family", 9, "G"),
new Media('../assets/boxcovers/catching_fire.jpg', "Hunger Games: Catching Fire", "2013", "Drama", 6, "PG-13"),
new Media('../assets/boxcovers/iron_man.jpg', "Iron Man", "2008", "Action / Adventure", 8, "PG-13"),
new Media('../assets/boxcovers/les_mis.jpg', "Les Miserables", "2012", "Drama", 7, "PG"),
new Media('../assets/boxcovers/lorax.jpg', "Lorax", "2012", "Family", 7, "G"),
new Media('../assets/boxcovers/man_of_steel_large.jpg', "Man of Steel", "2013", "Action / Adventure", 6, "PG-13"),
new Media('../assets/boxcovers/monsters_inc.jpg', "Monsters Inc", "2001", "Family", 9, "G"),
new Media('../assets/boxcovers/simpsons_movie_large.jpg', "Simpsons Movie", "2007", "Family", 8, "PG"),
new Media('../assets/boxcovers/skyfall_large.jpg', "Skyfall", "2012", "Action / Adventure", 6, "G"),
new Media('../assets/boxcovers/spider_man.jpg', "Spider-Man", "2012", "Action / Adventure", 7, "PG"),
new Media('../assets/boxcovers/star_trek.jpg', "Star Trek", "2009", "Drama", 8, "PG-13"),
new Media('../assets/boxcovers/new_moon.jpg', "Twilight Saga: New Moon", "2009", "Drama", 6, "PG-13"),
new Media('../assets/boxcovers/wall_e.jpg', "Wall-E", "2008", "Family", 9, "G"),
new Media('../assets/boxcovers/wreck_it_ralph.jpg', "Wreck-It Ralph", "2012", "Family", 7, "G"),
];



// INTRO ANIMATION

// riiiiiiiight




// ********************** MENU DISPLAYS **********************



function displayByGenre() {
    // sort movie results chronologically w/ newest first
    table.sort(sortByYear);
    // start fresh if user switches to this menu
    clearMenu();
    // generate an array of available genres
    var genresList = ["Latest"];
    for (var i = 0; i < table.length; i++) {
        genresList.push(table[i].genre);
    }
    genresList = _.uniq(genresList);

    // create a div for each genre && add a 'new' div on top
    for (var j = 0; j < genresList.length; j++) {
        var movieImgDiv = populateCategoryTitles(genresList, j);

        // populate boxCovers beneath each genre title div
        for (var k = 0; k < table.length; k++) {
            if (table[k].genre === genresList[j] || 
             ((table[k].year === "2013" || "2012") && genresList[j] === "Latest")) {
                populateMovieImgs(k, movieImgDiv);
        }

    }
}
generateMovieSelector(); 
}
//displayByGenre();

function displayByAtoZ() {
    // start fresh when user switches to this menu
    clearMenu();
    var aToZ = ["A-G", "H-P", "Q-Z"];

    // populate a div for alphabet categories
    for (var j = 0; j < aToZ.length; j++) {
        var movieImgDiv = populateCategoryTitles(aToZ, j);

        // populate boxCovers beneath each title div
        for (var k = 0; k < table.length; k++) {
            var movieFirstLetter = table[k].title.split("")[0];
            var categoryFirstLetter = aToZ[j].split("")[0];
            var categoryLastLetter = aToZ[j].split("")[2];
            if (movieFirstLetter >= categoryFirstLetter && movieFirstLetter <= categoryLastLetter) {
                populateMovieImgs(k, movieImgDiv);
            }
        }
    }
    generateMovieSelector(); 

}
//displayByAtoZ();

function displayByRating() {
    // start fresh when user switches to this menu
    clearMenu();
    // return highest rated films in chronological order
    table.sort(sortByYear);
    var pop = ["Best Rated"];
    // populate a div for most pop 
    for (var j = 0; j < pop.length; j++) {
        var movieImgDiv = populateCategoryTitles(pop, j);

        // populate boxCovers
        for (var k = 0; k < table.length; k++) {
            if (table[k].stars >= 8) {
                populateMovieImgs(k, movieImgDiv);
            }
        }
    } 
    generateMovieSelector();   
}
displayByRating();

function displayHistory() {
    // start fresh when user switches to this menu
    clearMenu();
    var history = ["History"];
    // populate a div for most pop 
    for (var j = 0; j < history.length; j++) {
        var movieImgDiv = populateCategoryTitles(history, j);

            // populate boxCovers
            for (var k = 0; k < table.length; k++) {
                if (table[k].history === true) {
                    populateMovieImgs(k, movieImgDiv);
                }
            }
        } 
        generateMovieSelector();    
    }
//displayHistory(); 


function displayFavorites() {
    // start fresh when user switches to this menu
    clearMenu();
    var favs = ["Favorites"];
    // populate a div for most pop 
    for (var j = 0; j < favs.length; j++) {
        var movieImgDiv = populateCategoryTitles(favs, j);

            // populate boxCovers
            for (var k = 0; k < table.length; k++) {
                if (table[k].favorite === true) {
                    populateMovieImgs(k, movieImgDiv);
                }
            }
        }  
        generateMovieSelector();   
    }

    function displayWatchList() {
    // start fresh when user switches to this menu
    clearMenu();
    var watchList = ["Watch List"];
    // populate a div for most pop 
    for (var j = 0; j < watchList.length; j++) {
        var movieImgDiv = populateCategoryTitles(watchList, j);

            // populate boxCovers
            for (var k = 0; k < table.length; k++) {
                if (table[k].watchList === true) {
                    populateMovieImgs(k, movieImgDiv);
                }
            }
        } 
        generateMovieSelector(); 
    }
// ********************** MENU DISPLAY HELPERS **********************


function populateMovieImgs(num, parentDiv) {
    var movieImg = document.createElement('img');
    movieImg.src = table[num].boxCover;
    movieImg.id = table[num].title;
    movieImg.className = "movieImg";
    parentDiv.appendChild(movieImg);
}

function populateCategoryTitles(categoryList, num) {
    var propertyDiv = document.createElement('div');
    var moviesByPropertyDiv = document.createElement('div');
    propertyDiv.className = "propertyTitle";
    document.getElementsByClassName("selections")[0].appendChild(propertyDiv);
    propertyDiv.innerHTML = categoryList[num];
    propertyDiv.appendChild(moviesByPropertyDiv);
    moviesByPropertyDiv.className = "moviesByPropertyDiv";
    return moviesByPropertyDiv;
}
function clearMenu(){
    $(".propertyTitle").remove();
    $(".moviesByPropertyDiv").remove();
}

function sortByYear(a, b){
  if (a.year < b.year) return 1;
  if (a.year > b.year) return -1;
  return 0;
}

// ********************** MOVIE DETAILS DISPLAY **********************

function displayDetails() {
    // clean div
    clearDetails();
    // find corresponding movie obj
    var selectedMovie = $(".selected");
    var movieId = selectedMovie.attr('id');
    var findMovieObj = table.map(function(x) {return x.title; }).indexOf(movieId);
    var movieObj = table[findMovieObj];
    // clone boxCover to details div
    selectedMovie.clone().appendTo(".detailsImg");
    //

    var text = document.getElementsByClassName('detailsText')[0];

    text.innerHTML = "<strong>Title: </strong>" + movieObj.title + "<br>" + movieObj.year + "<br><strong>Genre: </strong>" + movieObj.genre + "<br><strong>Content: </strong>" + movieObj.content + "<br><br>" + insertStars(movieObj.stars) + "<br><strong>Description: </strong>" + movieObj.plot;
}


function insertStars(num) {
    var string = "";
    var istar = "<i class='fa fa-star'></i>"
    var iunstar = "<i class='fa fa-star-o'></i>"
    for (var s = 0; s < 10; s++) {
        if (s < num) {
            string += istar;
        }
        else {
            string += iunstar;
        }
    }
    return string;
    console.log(string);
}


function clearDetails() {
    $(".detailsImg").children().remove();

}

// ********************** KEYBOARD EVENTS **********************

function generateMovieSelector() {
    var selected = $(".movieImg")[0];
    $(selected).addClass("selected");
    displayDetails();
}

$(document).keydown(function(e) {
    var selected = $(".selected");
    var previous = selected.prev();
    var next = selected.next();


    switch(e.which) {
        case 37: // left
        // move selected highlight, keep selected img in view & attach beg/end
        if (previous.length) {
            previous.addClass("selected");
            previous.get(0).scrollIntoView();
            selected.removeClass("selected");
            displayDetails();
        }
        else {
            selected.siblings(":last").addClass("selected");
            selected.siblings(":last").get(0).scrollIntoView();
            selected.removeClass("selected");
            displayDetails();
        }
        break;

        case 38: // up
        break;

        case 39: // right
        // move selected highlight, keep selected img in view & attach beg/end
        if (next.length) {
            next.addClass("selected");
            next.get(0).scrollIntoView();
            selected.removeClass("selected");
            displayDetails();
        }
        else {
            selected.siblings(":first").addClass("selected");
            selected.siblings(":first").get(0).scrollIntoView(); 
            selected.removeClass("selected");   
            displayDetails();
        }
        break;

        case 77: // "M"
        break;

        case 40: // down
        break;

        case 13: // enter
        break;

        case 8 || 46: // backspace & delete
        break;


        case 27: // escape
        break;


        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});


}
vodApp();



