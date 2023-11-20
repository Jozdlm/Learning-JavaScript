import { getLikedMovies } from "./lib/liked.service.js";

async function main() {
  const likedMovies = getLikedMovies();
  console.log(likedMovies);
}

main();
