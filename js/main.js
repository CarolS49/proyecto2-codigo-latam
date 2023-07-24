const menuToggle = document.getElementById('menu-toggle');
const navList = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('show'); // Agrega o quita la clase 'show' al menú (El cual esta almacenado en navList)
});

