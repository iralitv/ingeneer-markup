const rangeInput = document.querySelector('.range__input');
const rangePercent = document.querySelector('.range__desc--percentage');

rangeInput.addEventListener('change', () => {
  const percent = rangeInput.value;
  rangePercent.textContent = `${percent} %`;
});

/// select file

const fileInput = document.querySelector('.file__input');
const fileLabel = document.querySelector('.file');
const labelVal = fileLabel.innerHTML;

fileInput.addEventListener('change', (e) => {
  let fileName = '';
  if( this.files && this.files.length > 1 ) {
    fileName = (this.getAttribute('data-multiple-caption') || '')
      .replace('{count}', this.files.count);
  } else {
    fileName = e.target.value.split('\\').pop();
  }

  if(fileName) {
    fileLabel.querySelector('.file__name').innerHTML = fileName;
  } else {
    fileLabel.innerHTML = labelVal;
  }
});

/// menu items

const menuItems = document.querySelectorAll('.menu__link');
const navigation = document.querySelector('.nav');

navigation.addEventListener('click', (e) => {
  e.preventDefault();

  menuItems.forEach(menuItem => {
    menuItem.classList.remove('menu__link--active');
  });

  if(e.target.classList.contains('menu__link')) {
    e.target.classList.add('menu__link--active');
  }
});

/// burger menu

const header = document.querySelector('.header');
const burgerButton = document.querySelector('.burger-menu__button');

header.addEventListener('click', (event) => {
  event.preventDefault();
  if(event.target.parentElement === burgerButton || event.target === burgerButton) {
    burgerButton.classList.toggle('burger-menu__button--active');
    navigation.classList.toggle('burger-menu--active');
  } else {
    navigation.classList.remove('burger-menu--active');
    burgerButton.classList.remove('burger-menu__button--active');
  }
});

/// select