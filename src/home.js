import { getMovies, renderMovies } from "./lib/index.js";

const moviesListWrapper = document.getElementById('movies-list');

async function main() {
  const movies = await getMovies();
  renderMovies(movies, moviesListWrapper);
}

main();
