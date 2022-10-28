//Parent class Media
class Media {
  //title, isCheckedOut, and ratings are common properties
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  //Create a gettter for common properties
  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  //setter for isCheckedOut
  set isCheckedOut(isCheckedOut) {
    this._isCheckedOut = isCheckedOut;
  }

  //Create a method to negate isCheckedOut
  toggleCheckedOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  //Create a method to calculate an average of ratings
  getAverageRating() {
    let ratingsSum = this._ratings.reduce(
      (currentSum, rating) => currentSum + rating,
      0
    );
    return ratingsSum / this._ratings.length;
  }

  //Create a method to add ratings
  addRating(rating) {
    this._ratings.push(rating);
  }
}

//Book: child class of Media
class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  //Create a getter for author and pages
  get autor() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

//Movie: child class of media
class Movie extends Media {
  constructor(director, title, runTime, movieCast, songTitles) {
    super(title);
    this._director = director;
    this._runTime = runTime;
    this._movieCast = movieCast;
    this._songTitles = songTitles;
  }

  //Create a getter for director and runTime
  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }

  get movieCast() {
    return this._movieCast;
  }

  get songTitles() {
    return this._songTitles;
  }

  addMovieCast(movieCast) {
    this._movieCast.push(movieCast);
  }

  addSongTitles(songTitle) {
    this._songTitles.push(songTitle);
  }
}

class CD extends Media {
  constructor(artist, title, year) {
    super(title);
    this._artist = artist;
    this._year = year;
    this._song = [];
  }

  get artist() {
    return this._artist;
  }

  get year() {
    return this._year;
  }

  get song() {
    return this._song.sort(func);
    function func(a, b) {
      return 0.5 - Math.random();
    }
  }
  addSong(song) {
    this._song.push(song);
  }
}

//Create a class Catalog
class Catalog extends Media {
  constructor(title) {
    super(title);
  }
}

//Create a Book instance
const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544
);

//Call .toggleCheckOutStatus() on the historyOfEverything instance.
historyOfEverything.toggleCheckedOutStatus();

//Log isCheckedOut property
console.log(historyOfEverything.isCheckedOut);

//Call .addRating() three times
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

//Log the average rating
console.log(
  `The average Rating of ${
    historyOfEverything.title
  }: ${historyOfEverything.getAverageRating()}`
);

//Create a Movie instance
const speed = new Movie("Jan de Bont", "Speed", 116);

//Call toggleCheckedOutStatus()
speed.toggleCheckedOutStatus();

//Log isCheckedOut property
console.log(speed.isCheckedOut);

//add ratings
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

//Log the average rating
console.log(`The average rating is ${speed.getAverageRating()}`);

//Check CD's song array
const myCD = new CD("Mariah Carey", "Music Box", 1992);

//Add songs to myCD
myCD.addSong("Hero");
myCD.addSong("Dreamlover");
myCD.addSong("Anytime You Need a Friend");
myCD.addSong("Music Box");
myCD.addSong("Without You");

//Log the song array
console.log(`The Music Box songs are ${myCD.song}`);
