const emailInput = document.getElementById("email");
const asuntoInput = document.getElementById("asunto");
const mensajeInput = document.getElementById("mensaje");
const contactForm = document.getElementById("formulario");
const submitButton = document.getElementById("send-button");

const formValues = {
  email: emailInput.value,
  asunto: asuntoInput.value,
  mensaje: mensajeInput.value
}

function requiredValidator(e) {
  const { name, value } = e.target;
  const wrapperRef = e.target.parentElement;

  if (value.trim() === "") {
    showAlert(`El campo ${name} es requerido`, wrapperRef);
    return;
  }

  formValues[name] = value;
  validateForm();
  hideAlert(wrapperRef);
}

function emailValidator(e) {
  const { value, name, parentElement } = e.target;
  const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  if (!regex.test(value)) {
    showAlert(`Debe ingresar un email valido`, parentElement);
    return;
  }

  formValues[name] = value.toLowerCase();
  validateForm();
  hideAlert(parentElement);
}

function hideAlert(wrapperRef) {
  const currError = wrapperRef.querySelector(".bg-red-600");
  currError.remove();
}

function showAlert(message, wrapperRef) {
  const currError = wrapperRef.querySelector(".bg-red-600");

  if (currError) {
    currError.remove();
  }

  const error = document.createElement("p");
  error.textContent = message;
  error.classList.add("bg-red-600", "text-white", "p-2", "text-center");

  wrapperRef.appendChild(error);
}

function validateForm() {
  const isValid = !Object.values(formValues).includes('');

  console.dir(submitButton);
  console.dir(isValid);

  if (isValid) {
    submitButton.disabled = false;
    return;
  }

  submitButton.disabled = true;
}

function main() {
  emailInput.addEventListener("blur", emailValidator);
  asuntoInput.addEventListener("blur", requiredValidator);
  mensajeInput.addEventListener("blur", requiredValidator);
}

main();
