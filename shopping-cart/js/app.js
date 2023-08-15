const coursesWrapper = document.querySelector("#courses-wrapper");
const cart = document.querySelector("#carrito");

const courses = [
  {
    thumb: "img/curso1.jpg",
    title: "HTML5, CSS3, JavaScript para Principiantes",
    instructor: "Juan Pedro",
  },
  {
    thumb: "img/curso2.jpg",
    title: "Curso de Comida Vegetariana",
    instructor: "Maria Alvarado",
  },
  {
    thumb: "img/curso3.jpg",
    title: "Guitarra para Principiantes",
    instructor: "Otto Pérez",
  },
  {
    thumb: "img/curso4.jpg",
    title: "Huerto en tu casa",
    instructor: "Estrella de León",
  },
  {
    thumb: "img/curso5.jpg",
    title: "Decoración con productos de tu hogar",
    instructor: "Maria Ortega",
  },
  {
    thumb: "img/curso1.jpg",
    title: "Diseño Web para Principiantes",
    instructor: "Gustavo Hernandez",
  },
  {
    thumb: "img/curso2.jpg",
    title: "Comida Mexicana para principiantes",
    instructor: "Maria Alvarado",
  },
  {
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
          data-id="1"
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