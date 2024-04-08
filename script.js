var imagenes = document.querySelectorAll('.imagen__oruga');

window.addEventListener('scroll', function() {
    imagenes.forEach(function(imagen) {
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