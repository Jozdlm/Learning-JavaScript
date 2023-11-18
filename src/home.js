import { getMovies } from "./lib/index.js";

async function main() {
  const movies = await getMovies();
  console.log(movies);
}

main();
