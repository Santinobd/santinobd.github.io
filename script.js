// Función para hacer el navbar responsive
function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Cierre del menú al hacer clic en un enlace (opcional)
var navLinks = document.querySelectorAll('.nav-links li a');
navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        var navLinks = document.querySelector('.nav-links');
        navLinks.classList.remove('active');
    });
});
