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

let x, i, j, l, ll, selElmnt, a, b, c;

x = document.getElementsByClassName("custom-select");
l = x.length;

for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;

  a = document.createElement("DIV");
  a.setAttribute("class", "select--selected form__input");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);

  b = document.createElement("DIV");
  b.setAttribute("class", "select__items select--hide");
  for (j = 1; j < ll; j++) {

    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {

      let y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("select--checked");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "select--checked");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {

    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select--hide");
    this.classList.toggle("select__item--active");
  });
}
function closeAllSelect(elmnt) {

  let x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select__items");
  y = document.getElementsByClassName("select--selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select__item--active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select--hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);