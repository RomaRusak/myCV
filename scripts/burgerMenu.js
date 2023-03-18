const burgerMenu = document.querySelector('.burger-menu-wrapper');
const navMenu = document.querySelector('.nav-list');

document.querySelector('.burger-menu-wrapper').addEventListener('click', () => {
  document.querySelector('.nav-list').classList.toggle('nav-list-show');
  document
    .querySelector('.burger-menu-wrapper')
    .classList.toggle('burger-menu-close');
});

window.addEventListener('resize', () => {
  if (
    window.screen.width > 1024 &&
    burgerMenu.classList.contains('burger-menu-close')
  ) {
    burgerMenu.classList.toggle('burger-menu-close');
    navMenu.classList.toggle('nav-list-show');
  }
});
