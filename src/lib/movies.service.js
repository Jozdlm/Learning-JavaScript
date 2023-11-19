import { API_URL } from "./constants.js";
import { addToLikedList } from "./liked.service.js";

export const getMovies = async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data.movies;
  } catch (err) {
    throw new Error(err);
  }
};

export const renderMovies = (movies, wrapper) => {
  const fragment = document.createDocumentFragment();

  movies.forEach((item) => {
    const movie = `
      <div class="movie">
        <div class="movie__header">
          <p class="movie__thumb">${item.thumbnail}</p>
          <div class="movie__buttons">
            <button>Liked</button>
            <button>Add</button>
          </div>
        </div>
        <div class="movie__info">
          <p class="movie__title">${item.name}</p>
          <p class="movie__rating">${item.rating}</p>
        </div>
      </div>
    `;

    const nodeElement = document.createElement("div");
    nodeElement.innerHTML = movie;

    const buttons = nodeElement.getElementsByTagName('button');
    buttons[0].onclick = () => addToLikedList(item.id);

    // TODO: Add the onclick envent to collection button

    fragment.appendChild(nodeElement);
  });

  wrapper.innerHTML = "";
  wrapper.appendChild(fragment);
};
