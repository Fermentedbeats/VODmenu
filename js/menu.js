function vodApp() {

var table = renderModel();

// ********************** RENDERING TITLE MENUS **********************
function renderTitleMenu() {
    var activeTitleMenu = $('.selectedNavMenu').attr("id");

    switch (activeTitleMenu) { 
        case 'History': 
        displayHistory();
        break;
        case 'Watchlist': 
        displayWatchList();
        break;      
        case 'Favorites': 
        displayFavorites();
        break;
        case 'AZ': 
        displayByAtoZ();
        break;
        case 'Popularity': 
        displayByRating();
        break;
        case 'Genre': 
        displayByGenre();
        break;
        default:return;
    }
}
// ********************** TITLE MENU DISPLAYS **********************
function displayByGenre() {
    // sort movie results chronologically w/ newest first
    table.sort(sortByYear);
    // start fresh if user switches to this menu
    clearTitleMenu();
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
             ((table[k].year === "2012") && genresList[j] === "Latest")) {
                populateMovieImgs(k, movieImgDiv);
            }

        }
    }
    generateMovieSelector(); 
}

function displayByAtoZ() {
    // start fresh when user switches to this menu
    clearTitleMenu();
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

function displayByRating() {
    // start fresh when user switches to this menu
    clearTitleMenu();
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

function displayHistory() {
    // start fresh when user switches to this menu
    clearTitleMenu();
    var history = ["History"];
    var isThereAMatch;
    // populate a div for watched vids 
    for (var j = 0; j < history.length; j++) {
        var movieImgDiv = populateCategoryTitles(history, j);
            // populate boxCovers
            for (var k = 0; k < table.length; k++) {
                if (table[k].history === true) {
                    isThereAMatch = true;
                    populateMovieImgs(k, movieImgDiv);
                }
            }
        } 
        isThereAMatch ? generateMovieSelector() : displayEmptyTitleMenu("history");    
    }

function displayFavorites() {
    // start fresh when user switches to this menu
    clearTitleMenu();
    var favs = ["Favorites"];
    var isThereAMatch;
    // populate a div for most pop 
    for (var j = 0; j < favs.length; j++) {
    var movieImgDiv = populateCategoryTitles(favs, j);
        // populate boxCovers
        for (var k = 0; k < table.length; k++) {
            if (table[k].favorite === true) {
                isThereAMatch = true;
                populateMovieImgs(k, movieImgDiv);
            }
        }
    }  
    isThereAMatch ? generateMovieSelector() : displayEmptyTitleMenu("favorites");
}

function displayWatchList() {
    // start fresh when user switches to this menu
    clearTitleMenu();
    var watchList = ["Watch List"];
    var isThereAMatch;
    // populate a div for most pop 
    for (var j = 0; j < watchList.length; j++) {
    var movieImgDiv = populateCategoryTitles(watchList, j);
        // populate boxCovers
        for (var k = 0; k < table.length; k++) {
            if (table[k].watchList === true) {
                isThereAMatch = true;
                populateMovieImgs(k, movieImgDiv);
            }
        }
    } 
    isThereAMatch ? generateMovieSelector() : displayEmptyTitleMenu("watchList");
}


function displayEmptyTitleMenu(category) {
    clearDetails();
    var displayText;
    var historyText = "Watch a movie to automatically add it to your History.";
    var favoritesText = "You have no favorites! Push the F key when you see a favorite to add it here.";
    var watchListText = "Find something you want to watch later? Push the W key to add it to your Watchlist.";
    switch(category) {
        case "history":
        displayText = historyText;
        break;
        case "favorites":
        displayText = favoritesText;
        break;
        case "watchList":
        displayText = watchListText;
        break;
    }
     var text = document.getElementsByClassName('detailsText')[0];
     text.innerHTML = "<span id='detailsTitle'><strong>Coming Soon</strong></span><br><br>" + insertStars(10) + "<br><br>" + displayText;
     var img = document.createElement('img');
     img.src = 'assets/boxCovers/coming_soon.png'
     document.getElementsByClassName('detailsImg')[0].appendChild(img);
}

// ********************** TITLE MENU DISPLAY HELPERS **********************

// in the title menu generation loops this populates the boxCovers
function populateMovieImgs(num, parentDiv) {
    var movieImg = document.createElement('img');
    movieImg.src = table[num].boxCover;
    movieImg.id = table[num].title;
    movieImg.className = "movieImg ";
    parentDiv.appendChild(movieImg);
}
// in  title menu generation loops this populates the title bars
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
// in title menu generation loops this clears the last title menu
function clearTitleMenu(){
    $(".propertyTitle").remove();
    $(".moviesByPropertyDiv").remove();
}
// keeps movie options stacked with most recent first
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
    $(".detailsImg").append('<img src=' + '"' + movieObj.boxCover + '"' + '>');
    // add object property text to details box
    var text = document.getElementsByClassName('detailsText')[0];
    text.innerHTML = "<span id='detailsTitle'><strong>" + movieObj.title + "</span><br>Year: </strong>" + movieObj.year + "<br><strong>Genre: </strong>" + movieObj.genre + "<br><strong>Content: </strong>" + movieObj.content + "<br>" + insertStars(movieObj.stars) + "<br><strong>Description: </strong>" + movieObj.plot;
}

// generate star rating star images
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
}

// clear previous detail menu images
function clearDetails() {
    $(".detailsImg").children().remove();
}

// ********************** KEYBOARD EVENTS **********************



// keydown functions
$(document).keydown(function(e) {

// left & right vars
var selected = $(".selected");
var previous = selected.prev();
var next = selected.next();
// up & down vars
var firstImg = $('.movieImg').first();
var lastImg = $('.movieImg').last();
var parent = selected.parent().parent();
var nextParent = parent.next();
var previousParent = parent.prev();
var down = nextParent.children(':first-child').children(':first-child');
var up = previousParent.children(':first-child').children(':first-child');
var firstImgOfLastDiv = parent.siblings().last().children(':first-child').children(':first-child');
var firstImgOfFirstDiv = parent.siblings().first().children(':first-child').children(':first-child');
// title menu vars
    // left & right
    var titleParent = selected.parent().parent();
    // up & down
    var upTitleParent = up.parent().parent();
    var downTitleParent = down.parent().parent();
    var firstFirstParent = firstImgOfFirstDiv.parent().parent()
    var firstLastParent = firstImgOfLastDiv.parent().parent()
    // console.log(firstFirstParent);

// nav menu vars
var navMenus = $('.navMenu');
var selectedNavMenu = $('.selectedNavMenu');
var prevMenu = selectedNavMenu.prev();
// movie obj for video load, history, favorite & watchlist
var movieTitle = selected.attr('id');
var findMovieObj = table.map(function(x) {return x.title;}).indexOf(movieTitle);
var movieObj = table[findMovieObj];

// KEY DOWN ASSIGNMENT
switch(e.which) {
            case 38: // up
            if (up.length) {
                up.addClass("selected");
                up.get(0).scrollIntoView();
                upTitleParent.get(0).scrollIntoView();
                selected.removeClass("selected");
                displayDetails();
            }
            else {
                firstImgOfLastDiv.addClass("selected")
                firstImgOfLastDiv.get(0).scrollIntoView(); 
                firstLastParent.parent().parent().get(0).scrollIntoView();
                selected.removeClass("selected");   
                displayDetails();
            }
            break;

        case 40: // down
        if (down.length) {
            down.addClass("selected");
            down.get(0).scrollIntoView();
            downTitleParent.get(0).scrollIntoView();
            selected.removeClass("selected");
            displayDetails();

        }
        else {
            firstImgOfFirstDiv.addClass("selected")
            firstImgOfFirstDiv.get(0).scrollIntoView();
            firstFirstParent.get(0).scrollIntoView();
            selected.removeClass("selected");   
            displayDetails();
            // console.log(firstImgOfFirstDiv.parent().parent());
        }
        break;

        case 37: // left
        // move selected highlight, keep selected img in view & attach beg/end
        if (previous.length) {
            previous.addClass("selected");
            previous.get(0).scrollIntoView();
            titleParent.get(0).scrollIntoView();
            selected.removeClass("selected");
            displayDetails();
        }
        else {
            selected.siblings(":last").addClass("selected");
            selected.siblings(":last").get(0).scrollIntoView();
            titleParent.get(0).scrollIntoView();
            selected.removeClass("selected");
            displayDetails();
        }
        break;

        case 39: // right
        // move selected highlight, keep selected img in view & attach beg/end
        if (next.length) {
            next.addClass("selected");
            next.get(0).scrollIntoView();
            titleParent.get(0).scrollIntoView();
            selected.removeClass("selected");
            displayDetails();
        }
        else {
            selected.siblings(":first").addClass("selected");
            selected.siblings(":first").get(0).scrollIntoView(); 
            titleParent.get(0).scrollIntoView();
            selected.removeClass("selected");   
            displayDetails();
        }
        break;

        case 77: // "M" // goes right (left to right is prev to new)
        if (prevMenu.length) {
            selectedNavMenu.removeClass("selectedNavMenu");
            prevMenu.addClass("selectedNavMenu");
            renderTitleMenu();
        }
        else {
            selectedNavMenu.removeClass("selectedNavMenu");   
            navMenus.last().addClass("selectedNavMenu");
            renderTitleMenu();
        }
        break;

        case 70: // "F" // favorites
        movieObj.favorite = true;
        keyDownMessage("Favorites", movieObj);
        break;

        case 87: // "W" //  watchList
        movieObj.watchList = true;
        keyDownMessage("Watchlist", movieObj);
        break;

        case 13: // enter
        // find url in movie object & pass to video load function
        var htmlUrl = movieObj.videoUrl;
        var oggUrl = movieObj.videoUrl;
        var flashUrl = movieObj.videoUrl;
        var flashPlaceholder = movieObj.boxCover;
        loadVideo(htmlUrl, oggUrl, flashUrl, flashPlaceholder);
        // add video load to history
        movieObj.history = true;
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

function keyDownMessage(key, movieObj){
    $('#message').html(movieObj.title + ' added to ' + key);
    $('#message').show();
    $('#message').fadeOut(2000);

}

// ********************** VIDEO LOAD **********************

// tree for html5 with ogg & flash back-ups
// (does not work  - only mp4 file in repository)
function loadVideo(htmlUrl, oggUrl, flashUrl, flashPlaceholder){


    w = window.open('../video.html', '', 'fullscreen=yes, scrollbars=auto');
    d = w.document.open('text/html', 'replace');
    d.writeln('<script src="https://cdnjs.cloudflare.com/ajax/libs/screenfull.js/2.0.0/screenfull.js"></script><video id="video" width="100%" autoplay controls><source src=' + htmlUrl + ' type=video/mp4 codecs=avc1.42E01E, mp4a.40.2><source src=' + oggUrl + 'type=video/ogg; codecs=theora, vorbis><object width=100% type=application/x-shockwave-flash data=' + flashUrl + '?image=' + flashPlaceholder + '&file=' + htmlUrl + '><param name=movie value=path/to/swf/player.swf?image=placeholder.jpg&file=path/to/myvideo.mp4/></object>Your browser does not support the video tag.</video><script>var vid = document.getElementById("video");if (screenfull) {screenfull.request(vid);}</script><script>window.onkeydown = function(event) {if ( event.keyCode === 27 || event.keyCode === 8 || event.keyCode === 46 ){window.close();}};</script>');
}



// ********************** INTRO ANIMATION **********************

function hideNonAnimateables() {
        //hide header details on intro animation
        $('.header').hide();
        $('.propertyTitle').css('color', 'black');
    // extend selection div to view all movies / remove negative space
    $('.selections').css('height', '100%');
}



function loadAnimation() {
    displayByAtoZ();
    hideNonAnimateables();

    // var arbitraryCounter = 0;
    var imgs = $('.movieImg');
    for (var i = 0; i < imgs.length; i++) {
        // arbitraryCounter += i;
      img = imgs[i];
    TweenMax.from(img, getRandomInt(3), {width:getRandomInt(400)+'px', ease:"Elastic.easeOut"});
    TweenMax.from(img, getRandomInt(3), {z: getRandomInt(900), ease:"SLowMo.easeOut", delay:0});
    TweenMax.from(img, getRandomInt(3), {y: getRandomInt(500), ease:"SLowMo.easeOut", delay:0});
    TweenMax.from(img, getRandomInt(3), {x: getRandomInt(800),  ease:"SLowMo.easeOut", delay:0});
     }


   // rotationX: 360, rotationY: 720, rotation: 100}
  // callback(arbitraryCounter);
} // end loadAnimation function

function getRandomInt(num) {
    return (Math.random()*num).toString();
}



// ********************** INIT **********************

// instantiate first video as 'selected'
function generateMovieSelector() {
    var selected = $(".movieImg")[0];
    $(selected).addClass("selected");
    displayDetails();
}
function loadNavSelection() {

    displayByAtoZ();

        var imgs = $('.movieImg');
    for (var i = 0; i < imgs.length; i++) {
        // arbitraryCounter += i;
      img = imgs[i];
    TweenMax.from(img, getRandomInt(3), {width:getRandomInt(400)+'px', ease:"Elastic.easeOut"});
    TweenMax.from(img, getRandomInt(3), {z: getRandomInt(900), ease:"Rough.easeOut", delay:0});
    TweenMax.from(img, getRandomInt(3), {y: getRandomInt(500), ease:"Rough.easeOut", delay:0});
    TweenMax.from(img, getRandomInt(3), {x: getRandomInt(800),  ease:"Rough.easeOut", delay:0});
     }
    // reset hidden pieces & instantiate first nav menu option as 'selected'
    $('.navPlaceholder').addClass('nav');
    $('.detailsPlaceholder').addClass('details');
    $('.instructionsPlaceholder').addClass('instructions');
    var selected = $(".navMenu").last();
    $(selected).addClass("selectedNavMenu");
    // reset  visibility after animation
    $('header').show();
    // animate header into place
    var menuAnimation = $('.nav')
    var instructionsAnimation = $('.instructions')
    var deetsAnimation = $('.details')
    var movieImgAnimation = $('.selections')

    TweenMax.from(menuAnimation, 1.5, {x:-1000, ease:"Back.easeOut", delay:3.5});
    TweenMax.from(instructionsAnimation, 1, {y:-1000, ease:"Back.easeOut", delay:3});
    TweenMax.from(deetsAnimation, 2, {x:1000, ease:"Elastic.easeOut", delay:4});
    TweenMax.from(movieImgAnimation, 1, {y:-300, ease:"Back.easeOut", delay:2, onComplete:selectionExpand});
}

function selectionExpand() {
    $('.selections').css('height', '55%');
    // $('.propertyTitle').css('color', 'white');
}
// ********************** CONTROLLER **********************
// call inital menu load
$(document).ready(function() {
// loadAnimation();
// setTimeout(loadNavSelection, 2000);
})

//on Complete
loadNavSelection();

}
vodApp();

