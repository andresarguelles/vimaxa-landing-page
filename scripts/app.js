document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menuIcon = document.getElementById('menu-icon');
    const menuCloseIcon = document.getElementById('close-icon');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        menuIcon.classList.toggle('hidden');
        menuCloseIcon.classList.toggle('active');
    });

    // Opcional: Cierra el menú al hacer clic en un enlace
    document.querySelectorAll('.nav-menu-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuIcon.classList.remove('hidden');
            menuCloseIcon.classList.remove('active');
        });
    });
});