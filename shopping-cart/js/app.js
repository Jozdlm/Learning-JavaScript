const coursesWrapper = document.querySelector("#courses-wrapper");
const cart = document.querySelector("#carrito");

const courses = [
  {
    thumb: "img/curso1.jpg",
    title: "HTML5, CSS3, JavaScript para Principiantes",
    instructor: "Juan Pedro",
  },
];

function main() {
  courses.forEach(item => {
    const course = `
      <div class="card">
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
      </div>
    `;

    const nodeElement = document.createElement('div');
    nodeElement.className = 'four columns';
    nodeElement.innerHTML = course;

    coursesWrapper.appendChild(nodeElement);
  });
}

main();