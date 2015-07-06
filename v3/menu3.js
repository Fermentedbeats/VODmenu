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
Media.prototype.plot = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel imperdiet turpis, non commodo ligula. Ut ut risus at leo rhoncus tempor non non dui. Donec nec quam non ipsum laoreet suscipit. Fusce viverra enim massa, tincidunt fringilla lorem condimentum eget. Aenean eu neque quis ex fringilla semper ut sit amet lorem. Duis scelerisque ex eget dolor finibus, nec vulputate dui venenatis. Nullam a euismod eros, vitae bibendum nulla. Quisque dictum nunc ipsum, vel finibus tortor dapibus sit amet. Maecenas tortor lacus, dignissim ut cursus ac, suscipit at risus. Curabitur id erat dui. Nunc at nunc at mi scelerisque suscipit. Morbi convallis blandit purus."

// create movie objects && put movie objects into table
var table = [
    new Media('../assets/boxcovers/avengers.jpg', "Avengers", "2012", 7, "PG-13"),
    new Media('../assets/boxcovers/blade_runner.jpg', "Blade Runner", "1982", 8, "R"),
    new Media('../assets/boxcovers/brave.jpg', "Brave", "2012", 8, "G"),
    new Media('../assets/boxcovers/catching_fire.jpg', "The Hunger Games: Catching Fire", "2013", 6, "PG-13"),
    new Media('../assets/boxcovers/django.jpg', "Django Unchained", "2012", 9, "R"),
    new Media('../assets/boxcovers/finding_nemo.jpg', "Finding Nemo", "2003", 9, "G"),
    new Media('../assets/boxcovers/hobbit.jpg', "The Hobbit: An Unexpected Journey", "2012", 9, "PG"),
    new Media('../assets/boxcovers/hotel_transylvania.jpg', "Hotel Transylvania", "2012", 5, "G"),
    new Media('../assets/boxcovers/hugo.jpg', "Hugo", "2011", 9, "G"),
    new Media('../assets/boxcovers/iron_man.jpg', "Iron Man", "2008", 8, "PG-13"),
    new Media('../assets/boxcovers/les_mis.jpg', "Les Miserables", "2012", 7, "PG"),
    new Media('../assets/boxcovers/lorax.jpg', "The Lorax", "2012", 7, "G"),
    new Media('../assets/boxcovers/man_of_steel_large.jpg', "Man of Steel", "2013", 6, "PG-13"),
    new Media('../assets/boxcovers/monsters_inc.jpg', "Monsters Inc", "2001", 9, "G"),
    new Media('../assets/boxcovers/new_moon.jpg', "The Twilight Saga: New Moon", "2009", 6, "PG-13"),
    new Media('../assets/boxcovers/simpsons_movie_large.jpg', "The Simpsons Movie", "2007", 8, "PG"),
    new Media('../assets/boxcovers/skyfall_large.jpg', "Skyfall", "2012", 6, "G"),
    new Media('../assets/boxcovers/spider_man.jpg', "Spider-Man", "2012", 7, "PG"),
    new Media('../assets/boxcovers/star_trek.jpg', "Star Trek", "2009", 8, "PG-13"),
    new Media('../assets/boxcovers/train_dragon.jpg', "How to Train Your Dragon", "2010", 7, "G"),
    new Media('../assets/boxcovers/wall_e.jpg', "Wall-E", "2008", 9, "G"),
    new Media('../assets/boxcovers/wreck_it_ralph.jpg', "Wreck-It Ralph", "2012", 7, "G"),
];


// INTRO ANIMATION

// riiiiiiiight


// BUILDING MENUS

function buildMenus(table) {

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

}
vodApp();


