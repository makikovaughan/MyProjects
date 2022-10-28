//Declare the API key, url
const tmdbKey = "f8ac2fdbf0a5910d89b3d0f18e1467c7";
const tmdbBaseUrl = "https://api.themoviedb.org/3";
const playBtn = document.getElementById("playBtn");

//Using API, get the movie genre informaiton
//jsonResponse return the array of genres with id and name(Genre)
const getGenres = async () => {
  const genreRequestEndpoint = "/genre/movie/list";
  const requestParams = `?api_key=${tmdbKey}&language=en-US`;
  const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;

  //Use fetch to get the movie genre information
  //Create a drop down selection from json response's genres
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse.genres;
    }
    throw new Error("Request failed");
  } catch (error) {
    console.log(error);
  }
};

//Using API to get movies by different types of data like average rating, number of votes, genres and certifications.
//Returns all movies based on the specified genre in array of results.
//Selected genre by getSelectedGenre() in helper.js
const getMovies = async () => {
  const discoverMovieEndpoint = "/discover/movie";

  //Get the genre the user selected
  const selectedGenre = getSelectedGenre();
  const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;
  const urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const movies = jsonResponse.results;

      return movies;
    }
    throw new Error("Request failed");
  } catch (error) {
    console.log;
  }
};

//Return a movie information based on the movie id.
const getMovieInfo = async (movie) => {
  const movieId = movie.id;
  const movieEndpoint = `/movie/${movieId}`;
  const requestParams = `?api_key=${tmdbKey}&language=en-US`;
  const urlToFetch = `${tmdbBaseUrl}${movieEndpoint}${requestParams}`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const movieInfo = jsonResponse;
      return movieInfo;
    }
    throw new Error("Response failed!");
  } catch (error) {
    console.log(error);
  }
};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
  const movieInfo = document.getElementById("movieInfo");
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  }
  const movies = await getMovies();
  const randomMovie = getRandomMovie(movies);
  const info = await getMovieInfo(randomMovie);
  displayMovie(info);
};

//Display all genres to the drop down
getGenres().then(populateGenreDropdown);

//When the button is clicked, showRandomMovie is called.
playBtn.onclick = showRandomMovie;
