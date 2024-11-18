// Función para cargar el contenido de un archivo HTML en un contenedor
function loadHTML(containerId, fileName, callback) {
    fetch(fileName)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
            if (callback) callback();  // Ejecuta la función de callback si se proporciona
        })
        .catch(error => console.log('Error al cargar el archivo: ', error));
}

// Cargar el encabezado y asignar los eventos después de la carga
loadHTML('header-container', 'html/header.html', () => {
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");

    abrir.addEventListener("click", () => {
        nav.classList.add("visible");
    });

    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
    });

    // JavaScript para abrir/cerrar menú desplegable en la versión responsive
    const dropdown = document.querySelector(".dropdown");
    dropdown.addEventListener("click", (event) => {
        event.stopPropagation(); // Evitar que el evento se propague
        dropdown.classList.toggle("expanded");
    });

    // Cerrar el menú desplegable si se hace clic fuera
    document.addEventListener("click", () => {
        dropdown.classList.remove("expanded");
    });
});

// Cargar el pie de página sin necesidad de un callback
loadHTML('footer-container', 'html/footer.html');

// Slider Servicios en Index //
let sliderInner = document.querySelector(".slider-inner");
let images = sliderInner.querySelectorAll("img");
let index = 0;

function showImage(index) {
    let percentage = index * -100;
    sliderInner.style.transform = "translateX(" + percentage + "%)";
}

document.querySelector(".left-arrow").addEventListener("click", function() {
    index = (index === 0) ? images.length - 1 : index - 1;
    showImage(index);
});

document.querySelector(".right-arrow").addEventListener("click", function() {
    index = (index === images.length - 1) ? 0 : index + 1;
    showImage(index);
});

// Configuración del auto-slide
setInterval(function() {
    index = (index + 1) % images.length;
    showImage(index);
}, 5000);
