import { API_URL } from "./constants.js";

export const getMovies = async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data.movies;
  } catch (err) {
    throw new Error(err);
  }
};
