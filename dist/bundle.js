/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_rainbow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/rainbow.js */ \"./src/js/rainbow.js\");\n/* harmony import */ var _js_rainbow_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_rainbow_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/base.scss */ \"./src/scss/base.scss\");\n/* harmony import */ var _scss_base_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_base_scss__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/js/rainbow.js":
/*!***************************!*\
  !*** ./src/js/rainbow.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const rangeInput = document.querySelector('.range__input');\r\nconst rangePercent = document.querySelector('.range__desc--percentage');\r\n\r\nrangeInput.addEventListener('change', () => {\r\n  const percent = rangeInput.value;\r\n  rangePercent.textContent = `${percent} %`;\r\n});\r\n\r\n/// select file\r\n\r\nconst fileInput = document.querySelector('.file__input');\r\nconst fileLabel = document.querySelector('.file');\r\nconst labelVal = fileLabel.innerHTML;\r\n\r\nfileInput.addEventListener('change', (e) => {\r\n  let fileName = '';\r\n  if( this.files && this.files.length > 1 ) {\r\n    fileName = (this.getAttribute('data-multiple-caption') || '')\r\n      .replace('{count}', this.files.count);\r\n  } else {\r\n    fileName = e.target.value.split('\\\\').pop();\r\n  }\r\n\r\n  if(fileName) {\r\n    fileLabel.querySelector('.file__name').innerHTML = fileName;\r\n  } else {\r\n    fileLabel.innerHTML = labelVal;\r\n  }\r\n});\r\n\r\n/// menu items\r\n\r\nconst menuItems = document.querySelectorAll('.menu__link');\r\nconst navigation = document.querySelector('.nav');\r\n\r\nnavigation.addEventListener('click', (e) => {\r\n  e.preventDefault();\r\n\r\n  menuItems.forEach(menuItem => {\r\n    menuItem.classList.remove('menu__link--active');\r\n  });\r\n\r\n  if(e.target.classList.contains('menu__link')) {\r\n    e.target.classList.add('menu__link--active');\r\n  }\r\n});\r\n\r\n/// burger menu\r\n\r\nconst header = document.querySelector('.header');\r\nconst burgerButton = document.querySelector('.burger-menu__button');\r\n\r\nheader.addEventListener('click', (event) => {\r\n  event.preventDefault();\r\n  if(event.target.parentElement === burgerButton || event.target === burgerButton) {\r\n    burgerButton.classList.toggle('burger-menu__button--active');\r\n    navigation.classList.toggle('burger-menu--active');\r\n  } else {\r\n    navigation.classList.remove('burger-menu--active');\r\n    burgerButton.classList.remove('burger-menu__button--active');\r\n  }\r\n});\r\n\r\n/// select\r\n\r\nvar x, i, j, l, ll, selElmnt, a, b, c;\r\n/*look for any elements with the class \"custom-select\":*/\r\nx = document.getElementsByClassName(\"custom-select\");\r\nl = x.length;\r\nfor (i = 0; i < l; i++) {\r\n  selElmnt = x[i].getElementsByTagName(\"select\")[0];\r\n  ll = selElmnt.length;\r\n  /*for each element, create a new DIV that will act as the selected item:*/\r\n  a = document.createElement(\"DIV\");\r\n  a.setAttribute(\"class\", \"select-selected form__input\");\r\n  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;\r\n  x[i].appendChild(a);\r\n  /*for each element, create a new DIV that will contain the option list:*/\r\n  b = document.createElement(\"DIV\");\r\n  b.setAttribute(\"class\", \"select-items select-hide\");\r\n  for (j = 1; j < ll; j++) {\r\n    /*for each option in the original select element,\r\n    create a new DIV that will act as an option item:*/\r\n    c = document.createElement(\"DIV\");\r\n    c.innerHTML = selElmnt.options[j].innerHTML;\r\n    c.addEventListener(\"click\", function(e) {\r\n      /*when an item is clicked, update the original select box,\r\n      and the selected item:*/\r\n      var y, i, k, s, h, sl, yl;\r\n      s = this.parentNode.parentNode.getElementsByTagName(\"select\")[0];\r\n      sl = s.length;\r\n      h = this.parentNode.previousSibling;\r\n      for (i = 0; i < sl; i++) {\r\n        if (s.options[i].innerHTML == this.innerHTML) {\r\n          s.selectedIndex = i;\r\n          h.innerHTML = this.innerHTML;\r\n          y = this.parentNode.getElementsByClassName(\"same-as-selected\");\r\n          yl = y.length;\r\n          for (k = 0; k < yl; k++) {\r\n            y[k].removeAttribute(\"class\");\r\n          }\r\n          this.setAttribute(\"class\", \"same-as-selected\");\r\n          break;\r\n        }\r\n      }\r\n      h.click();\r\n    });\r\n    b.appendChild(c);\r\n  }\r\n  x[i].appendChild(b);\r\n  a.addEventListener(\"click\", function(e) {\r\n    /*when the select box is clicked, close any other select boxes,\r\n    and open/close the current select box:*/\r\n    e.stopPropagation();\r\n    closeAllSelect(this);\r\n    this.nextSibling.classList.toggle(\"select-hide\");\r\n    this.classList.toggle(\"select-arrow-active\");\r\n  });\r\n}\r\nfunction closeAllSelect(elmnt) {\r\n  /*a function that will close all select boxes in the document,\r\n  except the current select box:*/\r\n  var x, y, i, xl, yl, arrNo = [];\r\n  x = document.getElementsByClassName(\"select-items\");\r\n  y = document.getElementsByClassName(\"select-selected\");\r\n  xl = x.length;\r\n  yl = y.length;\r\n  for (i = 0; i < yl; i++) {\r\n    if (elmnt == y[i]) {\r\n      arrNo.push(i)\r\n    } else {\r\n      y[i].classList.remove(\"select-arrow-active\");\r\n    }\r\n  }\r\n  for (i = 0; i < xl; i++) {\r\n    if (arrNo.indexOf(i)) {\r\n      x[i].classList.add(\"select-hide\");\r\n    }\r\n  }\r\n}\r\n/*if the user clicks anywhere outside the select box,\r\nthen close all select boxes:*/\r\ndocument.addEventListener(\"click\", closeAllSelect);\n\n//# sourceURL=webpack:///./src/js/rainbow.js?");

/***/ }),

/***/ "./src/scss/base.scss":
/*!****************************!*\
  !*** ./src/scss/base.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/base.scss?");

/***/ })

/******/ });