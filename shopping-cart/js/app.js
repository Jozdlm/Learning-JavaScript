const coursesWrapper = document.querySelector("#lista-cursos");
const cart = document.querySelector("#carrito");

const courses = [
  {
    id: 1,
    thumb: "img/curso1.jpg",
    title: "HTML5, CSS3, JavaScript para Principiantes",
    instructor: "Juan Pedro",
  },
  {
    id: 2,
    thumb: "img/curso2.jpg",
    title: "Curso de Comida Vegetariana",
    instructor: "Maria Alvarado",
  },
  {
    id: 3,
    thumb: "img/curso3.jpg",
    title: "Guitarra para Principiantes",
    instructor: "Otto Pérez",
  },
  {
    id: 4,
    thumb: "img/curso4.jpg",
    title: "Huerto en tu casa",
    instructor: "Estrella de León",
  },
  {
    id: 5,
    thumb: "img/curso5.jpg",
    title: "Decoración con productos de tu hogar",
    instructor: "Maria Ortega",
  },
  {
    id: 6,
    thumb: "img/curso1.jpg",
    title: "Diseño Web para Principiantes",
    instructor: "Gustavo Hernandez",
  },
  {
    id: 7,
    thumb: "img/curso2.jpg",
    title: "Comida Mexicana para principiantes",
    instructor: "Maria Alvarado",
  },
  {
    id: 8,
    thumb: "img/curso3.jpg",
    title: "Estudio Musical en tu casa",
    instructor: "Juan Pedro",
  },
];

function main() {
  courses.forEach(item => {
    const course = `
      <img src="${item.thumb}" class="imagen-curso u-full-width" />
      <div class="info-card">
        <h4>${item.title}</h4>
        <p>${item.instructor}</p>
        <img src="img/estrellas.png" />
        <p class="precio">$200 <span class="u-pull-right">$15</span></p>
        <a
          href="#"
          class="u-full-width button-primary button input agregar-carrito"
          data-id="${item.id}"
          >Agregar Al Carrito</a
        >
      </div>
    `;

    const nodeElement = document.createElement('div');
    nodeElement.className = 'card';
    nodeElement.innerHTML = course;

    coursesWrapper.appendChild(nodeElement);
  });
}

main();