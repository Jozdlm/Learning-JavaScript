const emailInput = document.getElementById("email");
const asuntoInput = document.getElementById("asunto");
const mensajeInput = document.getElementById("mensaje");
const contactForm = document.getElementById("formulario");

function requiredValidator(e) {
  const { name, value } = e.target;

  if (value.trim() === "") {
    showAlert(`El campo ${name} es requerido`);
  }
}

function emailValidator() {}

function showAlert(message) {
  const error = document.createElement("p");
  error.textContent = message;
  error.classList.add("bg-red-600", "text-white", "p-2", "text-center");

  contactForm.appendChild(error);
}

function main() {
  emailInput.addEventListener("blur", requiredValidator);
  asuntoInput.addEventListener("blur", requiredValidator);
  mensajeInput.addEventListener("blur", requiredValidator);
}

main();
