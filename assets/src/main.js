document.addEventListener("DOMContentLoaded", function() {
  const burgerMenu = document.querySelector('.burger-menu');
  const dropdownMenuNav = document.querySelector('.dropdown-menu-nav');

  burgerMenu.addEventListener('click', function() {
    dropdownMenuNav.classList.toggle('visible');
  });

  window.addEventListener('resize', function() {
    if (window.innerWidth > 1024) {
      dropdownMenuNav.classList.remove('visible');
    }
  });
});
