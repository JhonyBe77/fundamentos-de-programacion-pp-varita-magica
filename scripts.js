//Quitar todos los links
const enlaces = document.querySelectorAll("a");
enlaces.forEach(enlaces => {
    enlaces.addEventListener("click", function(event) {
        event.preventDefault();
    })
}
);


 // 2.1 Al hacer click
 // Imagen Click
 const imagenesUno = document.querySelectorAll("img");
 imagenesUno.forEach(function(imagen) {
     imagen.addEventListener('click', function() {
     imagen.src = "/assets/magic-4.gif";
 });
});

// Texto Click

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

// Bloque Section Click

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
// Imagenes Over
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
//Texto Over
// Selecciona todos los párrafos <p>
const parrafos = document.querySelectorAll('p');

// Añade el evento 'mouseover' para cada párrafo
parrafos.forEach((parrafo) => {
    parrafo.addEventListener('mouseover', () => {
        // Cambia el color del texto a blanco y el fondo a rosa
        parrafo.style.color = 'white';
        parrafo.style.backgroundColor = 'pink';
    });

    // Opcional: restaura el color original cuando el ratón salga del párrafo
    parrafo.addEventListener('mouseout', () => {
        parrafo.style.color = ''; // Vuelve al color original
        parrafo.style.backgroundColor = ''; // Vuelve al fondo original
    });
});

// Bloque Article over

// Selecciona todos los artículos <article>
const articulos = document.querySelectorAll('article');

// Añade el evento 'mouseover' para cada artículo
articulos.forEach((articulo) => {
    articulo.addEventListener('mouseover', () => {
        // Cambia el color de fondo a gris
        articulo.style.backgroundColor = 'gray';
    });

    // Restaura el color original cuando el ratón sale del artículo
    articulo.addEventListener('mouseout', () => {
        articulo.style.backgroundColor = ''; // Vuelve al fondo original
    });
});
