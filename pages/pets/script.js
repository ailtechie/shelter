// Burger menu

const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');
const burgerItem = document.querySelectorAll('.burger-item');
const burgerWrapper = document.querySelector('.burger-wrapper')

function toggleBurger() {
  burger.classList.toggle('active');
  burgerMenu.classList.toggle('active');
  burgerWrapper.classList.toggle('burger-wrapper-dark');
  stopScroll();
}

function stopScroll() {
  document.body.style.overflow = burgerWrapper.classList.contains('burger-wrapper-dark') ?  "hidden" : "auto";
}

function closeMenu() {
  burger.classList.remove('active');
  burgerMenu.classList.remove('active');
}

function closeMenuOutside(e) {
  const click = e.composedPath().includes(burgerWrapper);
  if ( click ) {
    burgerWrapper.classList.remove('burger-wrapper-dark');
    closeMenu();
    stopScroll();
  }
}

burgerItem.forEach((el) => el.addEventListener('click', closeMenu));
burger.addEventListener('click', toggleBurger);
document.addEventListener('click', closeMenuOutside);