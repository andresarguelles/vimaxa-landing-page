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

// Mostrar el botón de WhatsApp al hacer scroll, con diferentes valores según el tamaño de pantalla
function updateWhatsappButtonVisibility() {
    const btn = document.querySelector('.whatsapp-float');
    if (!btn) return;
    const isMobile = window.innerWidth <= 768;
    const scrollLimit = isMobile ? 420 : -1;
    if (window.scrollY > scrollLimit) {
        btn.style.display = 'flex';
    } else {
        btn.style.display = 'none';
    }
}

window.addEventListener('scroll', updateWhatsappButtonVisibility);
window.addEventListener('resize', updateWhatsappButtonVisibility);

// Ocultar inicialmente y actualizar visibilidad al cargar
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector('.whatsapp-float');
    if (btn) btn.style.display = 'none';
    updateWhatsappButtonVisibility();
});