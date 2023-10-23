// Obtén todas las imágenes con la clase "imagen"
const imagenes = document.querySelectorAll('.imagen');

// Asigna un evento clic a cada imagen
imagenes.forEach((imagen) => {
    imagen.addEventListener('click', (event) => {
        event.preventDefault();
        const modalId = imagen.getAttribute('data-modal-target');
        const modal = document.getElementById(modalId);

        modal.style.display = 'block';
    });
});

// Cierra el modal al hacer clic en el botón "Cerrar"
const modales = document.querySelectorAll('.modal');

modales.forEach((modal) => {
    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.style.display = 'none';
    });
});


const toggleButton = document.getElementById('toggleButton');
const menu = document.getElementById('menu');

// Función para alternar la visibilidad del menú y el color del botón
function toggleMenu() {
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        toggleButton.classList.add('active'); // Agrega la clase 'active' al botón
    } else {
        menu.style.display = 'none';
        toggleButton.classList.remove('active'); // Elimina la clase 'active' del botón
    }
}

// Función para manejar el scroll
function handleScroll() {
    const navSection = document.querySelector('.nav-section');
    const menuContainer = document.querySelector('#menu-container');
    const menuHeight = menuContainer.offsetHeight;
    
    if (window.scrollY > navSection.offsetHeight) {
        menu.style.position = 'fixed';
        menu.style.top = '0';
        menu.style.width = '100%';
        navSection.style.marginBottom = menuHeight + 'px';
    } else {
        menu.style.position = 'relative';
        menu.style.width = 'auto';
        navSection.style.marginBottom = '0';
    }
}

// Agregar un evento click al botón para alternar la visibilidad del menú
toggleButton.addEventListener('click', toggleMenu);

// Agregar un evento scroll para manejar la fijación del menú
window.addEventListener('scroll', handleScroll);


document.querySelectorAll(".rating-icon").forEach(function (icon) {
    icon.addEventListener("click", function () {
        var state = icon.getAttribute("data-state");
        
        if (state === "original") {
            // Cambia a la imagen alternativa
            icon.src = icon.getAttribute("data-alternativa");
            icon.setAttribute("data-state", "alternativa");
        } else {
            // Vuelve a la imagen original
            icon.src = icon.getAttribute("data-original");
            icon.setAttribute("data-state", "original");
        }

        // Cambia el borde del ícono seleccionado
        document.querySelectorAll(".rating-icon").forEach(function (otherIcon) {
            otherIcon.classList.remove("selected");
        });

        // Agregar la clase 'selected' al ícono seleccionado
        icon.classList.add("selected");
    });
});
