import { getMovieById } from "./movies.service.js";

const likedMovies = [];

const saveListChanges = () => {
  localStorage.setItem('liked-movies', JSON.stringify(likedMovies));
};

export const addToLikedList = async (movieId) => {
  // TODO: watch if the movie is already exist on the liked-list
  const movie = await getMovieById(movieId);
  likedMovies.push(movie);
  saveListChanges();
};
