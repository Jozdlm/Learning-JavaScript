import { getMovieById } from "./movies.service.js";

const likedMovies = [];

export const addToLikedList = async (movieId) => {
  const movie = await getMovieById(movieId);
  likedMovies.push(movie);
};
