import { getMovieById } from "./movies.service.js";

const likedMovies = [];

const saveListChanges = () => {
  localStorage.setItem("liked-movies", JSON.stringify(likedMovies));
};

export const getLikedMovies = () => {
  return JSON.parse(localStorage.getItem("liked-movies") || "");
};

export const addToLikedList = async (movieId) => {
  // TODO: watch if the movie is already exist on the liked-list
  const movie = await getMovieById(movieId);
  likedMovies.push(movie);
  saveListChanges();
};

export const renderLikedMovies = (likedMovies, wrapper) => {
  const fragment = document.createDocumentFragment();

  likedMovies.forEach((item) => {
    const movie = `
      <div class="movie">
        <div class="movie__header">
          <p class="movie__thumb">${item.thumbnail}</p>
          <div class="movie__buttons">
            <button>Delete</button>
          </div>
        </div>
        <div class="movie__info">
          <p class="movie__title">${item.name}</p>
          <p class="movie__rating">${item.rating}</p>
        </div>
      </div>
    `;

    const element = new DOMParser().parseFromString(movie, 'text/html');

    const buttons = element.body.getElementsByTagName('button');
    buttons[0].onclick = () => alert(`Delete movie ${item.id}`);

    fragment.appendChild(element.body.firstChild);
  });

  wrapper.innerHTML = "";
  wrapper.appendChild(fragment);
};