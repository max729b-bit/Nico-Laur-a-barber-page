/**
 * BarberShop - Script Principal
 * Contiene la lógica para el navbar, menú móvil y animaciones al scroll.
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ========================================================
       1. EFECTO DE NAVBAR AL HACER SCROLL
       ======================================================== */
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* ========================================================
       2. MENÚ MÓVIL (Menú hamburguesa)
       ======================================================== */
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    // Abrir/Cerrar menú
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Cambiar icono de barras a cruz
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Cerrar menú móvil al hacer click en un enlace
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    /* ========================================================
       3. ANIMACIONES AL APARECER ELEMENTOS (FADE IN ON SCROLL)
       ======================================================== */
    // Seleccionar todos los elementos con la clase "fade-in-section"
    const fadeElements = document.querySelectorAll('.fade-in-section');

    // Usar Intersection Observer para mayor rendimiento
    const appearOptions = {
        threshold: 0.15, // Ejecutar cuando el 15% del elemento sea visible
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return; // Si no está en pantalla, no hacer nada
            } else {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Dejar de observar una vez que ya apareció
            }
        });
    }, appearOptions);

    // Observar cada elemento
    fadeElements.forEach(element => {
        appearOnScroll.observe(element);
    });

});
