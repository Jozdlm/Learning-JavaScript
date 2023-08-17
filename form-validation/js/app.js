const emailInput = document.getElementById("email");
const asuntoInput = document.getElementById("asunto");
const mensajeInput = document.getElementById("mensaje");

function requiredValidator(e) {
  if (e.target.value.trim() === "") {
    console.log("El campo x es requerido");
  }
}

function emailValidator() {}

function main() {
  emailInput.addEventListener("blur", requiredValidator);
  asuntoInput.addEventListener("blur", requiredValidator);
  mensajeInput.addEventListener("blur", requiredValidator);
}

main();
