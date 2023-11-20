import { getLikedMovies, renderLikedMovies } from "./lib/index.js";

const likedWrapper = document.getElementById('liked-list');

async function main() {
  const likedMovies = getLikedMovies();
  renderLikedMovies(likedMovies, likedWrapper);
}

main();
