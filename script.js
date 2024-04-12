var imagenes = document.querySelectorAll(".imagen__oruga");

window.addEventListener("scroll", function () {
  imagenes.forEach(function (imagen) {
    var scrollPos = window.scrollY;
    var windowHeight = window.innerHeight;
    var imagePos = imagen.getBoundingClientRect().top;

    if (imagePos < windowHeight / 2) {
      // Si la parte superior de la imagen está en la mitad inferior de la ventana,
      // la imagen debe desaparecer gradualmente
      var opacity = 1 - (windowHeight / 2 - imagePos) / (windowHeight / 2);
      imagen.style.opacity = opacity;
    } else {
      // Si la parte superior de la imagen está en la mitad superior de la ventana,
      // la imagen debe tener opacidad completa
      imagen.style.opacity = 1;
    }
  });
});

// Validación campo nombre

const userName = document.querySelector("#nombre");
const nombreError = document.querySelector("#nombreError");

userName.addEventListener("blur", function (event) {
  const field = event.target;
  const nameValue = event.target.value;

  if (nameValue.length === 0) {
    field.classList.add("invalid");
    nombreError.classList.add("error");
    nombreError.innerText = "El nombre de usuario es requerido";
  } else if (nameValue.length > 50) {
    field.classList.add("invalid");
    nombreError.classList.add("error");
    nombreError.innerText =
      "El campo Nombre no debe tener más de 50 caracteres.";
  } else {
    field.classList.remove("invalid");
    nombreError.classList.remove("error");
    nombreError.innerText = "";
  }
});

// Validación campo email

const userEmail = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

userEmail.addEventListener("blur", function (event) {
  const field = event.target;
  const emailValue = event.target.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue.length === 0) {
    field.classList.add("invalid");
    emailError.classList.add("error");
    emailError.innerText = "El correo electrónico es requerido";
  } else if (!emailRegex.test(emailValue)) {
    field.classList.add("invalid");
    emailError.classList.add("error");
    emailError.innerText = "El campo E-mail debe tener un formato válido.";
  } else {
    field.classList.remove("invalid");
    emailError.classList.remove("error");
    emailError.innerText = "";
  }
});

// Validación campo asunto

const asunto = document.querySelector("#asunto");
const asuntoError = document.querySelector("#asuntoError");

asunto.addEventListener("blur", function (event) {
  const field = event.target;
  const asuntoValue = event.target.value;

  if (asuntoValue.length === 0) {
    field.classList.add("invalid");
    asuntoError.classList.add("error");
    asuntoError.innerText = "El campo Asunto es obligatorio.";
  } else if (asuntoValue.length > 50) {
    field.classList.add("invalid");
    asuntoError.classList.add("error");
    asuntoError.innerText =
      "El campo Asunto no debe tener más de 50 caracteres.";
  } else {
    field.classList.remove("invalid");
    asuntoError.classList.remove("error");
    asuntoError.innerText = "";
  }
});

// Función para validar el campo Mensaje

const mensaje = document.querySelector("#mensaje");
const mensajeError = document.querySelector("#mensajeError");

mensaje.addEventListener("blur", function (event) {
  const field = event.target;
  const mensajeValue = event.target.value;

  if (mensajeValue.length === 0) {
    field.classList.add("invalid");
    mensajeError.classList.add("error");
    mensajeError.innerText = "El campo Mensaje es obligatorio.";
  } else if (mensajeValue.length > 300) {
    field.classList.add("invalid");
    mensajeError.classList.add("error");
    mensajeError.innerText =
      "El campo Mensaje no debe tener más de 300 caracteres";
  } else {
    field.classList.remove("invalid");
    mensajeError.classList.remove("error");
    mensajeError.innerText = "";
  }
});

// BTN

const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const asuntoInput = document.getElementById("asunto");
const mensajeInput = document.getElementById("mensaje");
const enviarBtn = document.getElementById("enviarBtn");

// Función para comprobar si todos los campos están llenos
function validarCampos() {
    return nombreInput.value && emailInput.value && asuntoInput.value && mensajeInput.value;
}

// Agregar un event listener para cada campo que escucha cambios en su valor
nombreInput.addEventListener("input", function() {
    enviarBtn.disabled = !validarCampos();
});

emailInput.addEventListener("input", function() {
    enviarBtn.disabled = !validarCampos();
});

asuntoInput.addEventListener("input", function() {
    enviarBtn.disabled = !validarCampos();
});

mensajeInput.addEventListener("input", function() {
    enviarBtn.disabled = !validarCampos();
});

enviarBtn.addEventListener("click", function(event) {
    // Prevenir el comportamiento predeterminado del botón de enviar
    event.preventDefault();
  
    if (validarCampos()) {
      modal.style.display = "block";
    }
  });

// MODAL

// Obtener el modal y el botón para cerrarlo
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario haga clic en el botón, mostrar el modal
enviarBtn.addEventListener("click", function() {
  if (validarCampos()) {
    modal.style.display = "block";
  }
});

// Cuando el usuario haga clic en la 'x', cerrar el modal
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando el usuario haga clic fuera del modal, cerrar el modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


