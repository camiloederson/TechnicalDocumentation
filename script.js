document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.createElement('button');
    menuToggle.textContent = '☰'; // Icono de menú
    menuToggle.classList.add('menu-toggle');
  
    // Añadir el botón de menú a la barra de navegación
    navbar.prepend(menuToggle);
  
    const links = navbar.querySelectorAll('.nav-link');
  
    // Alternar el menú
    menuToggle.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });
  
    // Cerrar el menú al hacer clic en un enlace
    links.forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.remove('active');
      });
    });
  });
  