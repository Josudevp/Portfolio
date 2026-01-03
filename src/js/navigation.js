// 1. Seleccionamos los elementos por su ID
const menuBtn = document.getElementById('navIcon'); // El icono de abrir
const closeBtn = document.getElementById('close-menu');        // El icono de cerrar
const mobileMenu = document.getElementById('mobile-menu');    // El contenedor del menú

// 2. Función para abrir el menú
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('-translate-x-full'); // Quita la clase que lo esconde
});

// 3. Función para cerrar el menú
closeBtn.addEventListener('click', () => {
    mobileMenu.classList.add('-translate-x-full');    // Pone la clase que lo esconde
});

// 4. Cerrar menú al hacer clic en un enlace (opcional)
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('-translate-x-full');
    });
});