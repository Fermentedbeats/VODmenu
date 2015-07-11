function renderModel() {

// constructor for each movie
function Media(boxCover, title, year, genre, stars, content) {
    this.boxCover = boxCover;
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.stars = stars;
    this.content = content;
}

// prototype defaults
Media.prototype.favorite = false;
Media.prototype.watchList = false;
Media.prototype.history = false;
Media.prototype.trailerUrl = "assets/videos/movieclip.mp4"
Media.prototype.videoUrl = "assets/videos/movieclip.mp4"
Media.prototype.plot = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel imperdiet turpis, non commodo ligula. Ut ut risus at leo rhoncus tempor non non dui."

// create movie objects && put movie objects into table
var table = [
new Media('assets/boxcovers/avengers.jpg', "Avengers", "2012", "Action / Adventure", 7, "PG-13"),
new Media('assets/boxcovers/blade_runner.jpg', "Blade Runner", "1982", "Drama", 8, "R"),
new Media('assets/boxcovers/brave.jpg', "Brave", "2012", "Family", 8, "G"),
new Media('assets/boxcovers/django.jpg', "Django Unchained", "2012", "Drama", 9, "R"),
new Media('assets/boxcovers/finding_nemo.jpg', "Finding Nemo", "2003", "Family", 9, "G"),
new Media('assets/boxcovers/hobbit.jpg', "Hobbit: An Unexpected Journey", "2012", "Family", 9, "PG"),
new Media('assets/boxcovers/hotel_transylvania.jpg', "Hotel Transylvania", "2012", "Family", 5, "G"),
new Media('assets/boxcovers/train_dragon.jpg', "How to Train Your Dragon", "2010", "Family", 7, "G"),
new Media('assets/boxcovers/hugo.jpg', "Hugo", "2011", "Family", 9, "G"),
new Media('assets/boxcovers/catching_fire.jpg', "Hunger Games: Catching Fire", "2013", "Drama", 6, "PG-13"),
new Media('assets/boxcovers/iron_man.jpg', "Iron Man", "2008", "Action / Adventure", 8, "PG-13"),
new Media('assets/boxcovers/les_mis.jpg', "Les Miserables", "2012", "Drama", 7, "PG"),
new Media('assets/boxcovers/lorax.jpg', "Lorax", "2012", "Family", 7, "G"),
new Media('assets/boxcovers/man_of_steel_large.jpg', "Man of Steel", "2013", "Action / Adventure", 6, "PG-13"),
new Media('assets/boxcovers/monsters_inc.jpg', "Monsters Inc", "2001", "Family", 9, "G"),
new Media('assets/boxcovers/simpsons_movie_large.jpg', "Simpsons Movie", "2007", "Family", 8, "PG"),
new Media('assets/boxcovers/skyfall_large.jpg', "Skyfall", "2012", "Action / Adventure", 6, "G"),
new Media('assets/boxcovers/spider_man.jpg', "Spider-Man", "2012", "Action / Adventure", 7, "PG"),
new Media('assets/boxcovers/star_trek.jpg', "Star Trek", "2009", "Drama", 8, "PG-13"),
new Media('assets/boxcovers/new_moon.jpg', "Twilight Saga: New Moon", "2009", "Drama", 6, "PG-13"),
new Media('assets/boxcovers/wall_e.jpg', "Wall-E", "2008", "Family", 9, "G"),
new Media('assets/boxcovers/wreck_it_ralph.jpg', "Wreck-It Ralph", "2012", "Family", 7, "G"),
];

return table;
}