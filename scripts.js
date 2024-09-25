//Quitar todos los links
const enlaces = document.querySelectorAll("a");
enlaces.forEach(enlaces => {
    enlaces.addEventListener("click", function(event) {
        event.preventDefault();
    })
}
);


 // 2.1 Al hacer click
 // Imagen
 const imagenesUno = document.querySelectorAll("img");
 imagenesUno.forEach(function(imagen) {
     imagen.addEventListener('click', function() {
     imagen.src = "/assets/magic-4.gif";
 });
});

// Texto

document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los elementos <p>
    const parrafos = document.querySelectorAll('p');

    // Recorre cada elemento <p> y añade un evento de clic
    parrafos.forEach(function(parrafo) {
        parrafo.addEventListener('click', function() {
            // Cambia el color de fondo y el color del texto
            parrafo.style.backgroundColor = 'yellow'; // Cambia 'yellow' por el color que desees
            parrafo.style.color = 'red'; // Cambia 'red' por el color que desees
        });
    });
});

// Section

document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los elementos <section>
    const secciones = document.querySelectorAll('section');

    // Recorre cada elemento <section> y añade un evento de clic
    secciones.forEach(function(seccion) {
        seccion.addEventListener('click', function() {
            // Cambia el color de fondo del elemento <section>
            seccion.style.backgroundColor = 'lightblue'; // Cambia 'lightblue' por el color que desees
        });
    });
});

 // 3.1 Al hacer Over
// Imagenes
 let selectorImagenes = document.querySelectorAll("main > article:nth-child(2) img");
    // establecemos un atributo dataset.imgOriginal a todas las imagenes con su imagen actual
    for(let i=0; i < selectorImagenes.length; i++){
        selectorImagenes[i].dataset.imgOriginal = selectorImagenes[i].src;
    }
    // En el evento 'mouseover', sustituimos la imagen actual por la imagen 'abracadabra.gif'
    for(let i=0; i < selectorImagenes.length; i++){
        selectorImagenes[i].addEventListener('mouseover', function() {
            this.setAttribute('src', './assets/abracadabra.gif');
        });
    }
    // En el evento 'mouseout', sustituimos la imagen 'abracadabra.gif' por su imagen original
    for(let i=0; i < selectorImagenes.length; i++){
        selectorImagenes[i].addEventListener('mouseout', function() {
            this.setAttribute('src', selectorImagenes[i].dataset.imgOriginal);
        });
    }

