const coursesWrapper = document.querySelector("#lista-cursos");
const cartWrapper = document.querySelector("#lista-carrito");
const cart = document.querySelector("#carrito");

const COURSES = [
  {
    id: 1,
    thumb: "img/curso1.jpg",
    title: "HTML5, CSS3, JavaScript para Principiantes",
    instructor: "Juan Pedro",
    price: 15
  },
  {
    id: 2,
    thumb: "img/curso2.jpg",
    title: "Curso de Comida Vegetariana",
    instructor: "Maria Alvarado",
    price: 15
  },
  {
    id: 3,
    thumb: "img/curso3.jpg",
    title: "Guitarra para Principiantes",
    instructor: "Otto Pérez",
    price: 15
  },
  {
    id: 4,
    thumb: "img/curso4.jpg",
    title: "Huerto en tu casa",
    instructor: "Estrella de León",
    price: 15
  },
  {
    id: 5,
    thumb: "img/curso5.jpg",
    title: "Decoración con productos de tu hogar",
    instructor: "Maria Ortega",
    price: 15
  },
  {
    id: 6,
    thumb: "img/curso1.jpg",
    title: "Diseño Web para Principiantes",
    instructor: "Gustavo Hernandez",
    price: 15
  },
  {
    id: 7,
    thumb: "img/curso2.jpg",
    title: "Comida Mexicana para principiantes",
    instructor: "Maria Alvarado",
    price: 15
  },
  {
    id: 8,
    thumb: "img/curso3.jpg",
    title: "Estudio Musical en tu casa",
    instructor: "Juan Pedro",
    price: 15
  },
];

let shoppingCart = [];

function renderCourses(courses) {
  courses.forEach(item => {
    const course = `
      <img src="${item.thumb}" class="imagen-curso u-full-width" />
      <div class="info-card">
        <h4>${item.title}</h4>
        <p>${item.instructor}</p>
        <img src="img/estrellas.png" />
        <p class="precio">$200 <span class="u-pull-right">$15</span></p>
        <button
          href="#"
          class="u-full-width button-primary button input agregar-carrito"
          onclick="addToCart(${item.id})"
        >
          Agregar Al Carrito
        </button>
      </div>
    `;

    const nodeElement = document.createElement('div');
    nodeElement.className = 'card';
    nodeElement.innerHTML = course;

    coursesWrapper.appendChild(nodeElement);
  });
}

function renderCart() {
  cartWrapper.innerHTML = "";

  shoppingCart.forEach(item => {
    const cartItem = `
      <td>
        <img src="${item.thumb}" class="img-item" />
      </td>
      <td>${item.title}</td>
      <td>${item.quantity}</td>
      <td>${item.price}</td>
      <td>
        <button>x</button>
      </td>
    `;

    const nodeElement = document.createElement('tr');
    nodeElement.innerHTML = cartItem;

    cartWrapper.appendChild(nodeElement);
  })
}

function addToCart(itemId) {
  const cartItem = shoppingCart.find(item => item.id == itemId);
  const course = COURSES.find(item => item.id == itemId);

  if (cartItem) {
    shoppingCart = shoppingCart.map(item => {
      if (item.id != cartItem.id) return item;

      const quantity = item.quantity + 1;
      const price = quantity * item.price;

      item = {...item, quantity, price};

      return item;
    })
  } else {
    let newItem = {...course, quantity: 1} 

    shoppingCart = [...shoppingCart, newItem];
  }

  renderCart();
}

function main() {
  renderCourses(COURSES);
}

main();