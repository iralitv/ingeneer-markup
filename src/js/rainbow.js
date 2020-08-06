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

var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected form__input");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
      /*when an item is clicked, update the original select box,
      and the selected item:*/
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /*when the select box is clicked, close any other select boxes,
    and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);