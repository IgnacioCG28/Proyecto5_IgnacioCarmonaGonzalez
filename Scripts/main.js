/**
 * @author Nacho Carmona Gonzalez;
 * @github @IgnacioCG28
 * @version 1.0.0
 */

// Llamamos datos del html
const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const mensaje = document.querySelector("#mensaje");
const telefono = document.querySelector("#telefono");
const apellido = document.querySelector("#apellido");
const enviar = document.querySelector("#enviar");
const errores = document.querySelector("#errores");

let mensajesErrores = [];

const validar = (event) => {
  event.preventDefault();
  mensajesErrores = [];

  nombre.value.trim().length === 0 &&
    mensajesErrores.push("El nombre es un campo obligatorio");
  !/^[a-zA-Z]*$/.test(nombre.value.trim()) &&
    mensajesErrores.push("El nombre no tiene caracteres válidos");

  correo.value.trim().length === 0 &&
    mensajesErrores.push("El correo es un campo obligatorio");
  !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    correo.value.trim()
  ) &&
    mensajesErrores.push(
      "Introduce una dirección de correo electrónico válida"
    );

  telefono.value.trim().length === 0 &&
    mensajesErrores.push("El teléfono es un campo obligatorio");
  !/^[0-9]*$/.test(telefono.value.trim()) &&
    mensajesErrores.push("El teléfono no tiene caracteres válidos");
  telefono.value.trim().length < 9 &&
    mensajesErrores.push("El teléfono es demasiado corto");

  apellido.value.trim().length === 0 &&
    mensajesErrores.push("El apellido es un campo obligatorio");
  !/^[a-zA-Z]*$/.test(apellido.value.trim()) &&
    mensajesErrores.push("El apellido no tiene caracteres válidos");

  mensaje.value.trim().length === 0 &&
    mensajesErrores.push("El mensaje es un campo obligatorio");
  mensaje.value.trim().length < 10 &&
    mensajesErrores.push("Mensaje demasiado corto");

  if (
    mensajesErrores.length === 0 &&
    confirm("¿Enviar datos a TERRA CORPORATION?")
  ) {
    formulario.submit();
  } else if (mensajesErrores.length > 0) {
    errores.textContent = "";
    console.log(mensajesErrores);
    mensajesErrores.forEach(function (mensaje) {
      const printErrors = document.createElement("li");
      printErrors.textContent = mensaje;
      errores.appendChild(printErrors);
      printErrors.classList.add("colorW");
    });
  }
};

formulario.addEventListener("submit", validar);
