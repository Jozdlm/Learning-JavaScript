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

export const renderMovies = (movies, wrapper) => {
  const fragment = document.createDocumentFragment();

  movies.forEach((item) => {
    const movie = `
      <p>${item.name}</p>
    `;

    const nodeElement = document.createElement("div");
    nodeElement.innerHTML = movie;

    fragment.appendChild(nodeElement);
  });

  wrapper.innerHTML = "";
  wrapper.appendChild(fragment);
};
