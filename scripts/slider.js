const slider = document.querySelector('.my-photo-slider');
const myPhotos = document.querySelectorAll('.my-photo-img');
const nextButton = document.querySelector('.next-button-slider');
const prevButton = document.querySelector('.prev-button-slider');
const buttonsSlider = document.querySelectorAll('.button-slider');
const leftPart = document.querySelector('.left');

let count = 0;
let width;

const moveSlider = () => {
  slider.style.left = `-${count * width}px`;
};

const init = () => {
  width = document.querySelector('.slider').offsetWidth;
  slider.style.width = width * 3 + 'px';
  myPhotos.forEach(
    (photo) => (
      (photo.style.width = width + 'px'),
      (photo.style.height = 'auto'),
      buttonsSlider.forEach(
        (button) => (button.style.width = width / 7.2 + 'px')
      )
    )
  );
  moveSlider();
};

init();

window.addEventListener('resize', () => {
  setTimeout(() => {
    init();
    if (
      window.screen.width > 1024 &&
      leftPart.classList.contains('left-menu-open')
    ) {
      leftPart.classList.toggle('left-menu-open');
    }
  }, 300);
});

prevButton.addEventListener('click', () => {
  count++;
  if (count >= myPhotos.length) count = 0;
  moveSlider();
});

nextButton.addEventListener('click', () => {
  count--;
  if (count < 0) count = myPhotos.length - 1;
  moveSlider();
});

const leftMenuToggle = () => {
  document.querySelector('.left').classList.toggle('left-menu-open');
};

document.querySelector('.left-menu-handler').addEventListener('click', () => {
  leftMenuToggle();
});

document.querySelector('.left-menu-close').addEventListener('click', () => {
  leftMenuToggle();
});
