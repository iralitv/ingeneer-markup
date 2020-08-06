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

eval("const rangeInput = document.querySelector('.range__input');\r\nconst rangePercent = document.querySelector('.range__desc--percentage');\r\n\r\nrangeInput.addEventListener('change', () => {\r\n  const percent = rangeInput.value;\r\n  rangePercent.textContent = `${percent} %`;\r\n});\r\n\r\n/// select file\r\n\r\nconst fileInput = document.querySelector('.file__input');\r\nconst fileLabel = document.querySelector('.file');\r\nconst labelVal = fileLabel.innerHTML;\r\n\r\nfileInput.addEventListener('change', (e) => {\r\n  let fileName = '';\r\n  if( this.files && this.files.length > 1 ) {\r\n    fileName = (this.getAttribute('data-multiple-caption') || '')\r\n      .replace('{count}', this.files.count);\r\n  } else {\r\n    fileName = e.target.value.split('\\\\').pop();\r\n  }\r\n\r\n  if(fileName) {\r\n    fileLabel.querySelector('.file__name').innerHTML = fileName;\r\n  } else {\r\n    fileLabel.innerHTML = labelVal;\r\n  }\r\n});\r\n\r\n/// menu items\r\n\r\nconst menuItems = document.querySelectorAll('.menu__link');\r\nconst navigation = document.querySelector('.nav');\r\n\r\nnavigation.addEventListener('click', (e) => {\r\n  e.preventDefault();\r\n\r\n  menuItems.forEach(menuItem => {\r\n    menuItem.classList.remove('menu__link--active');\r\n  });\r\n\r\n  if(e.target.classList.contains('menu__link')) {\r\n    e.target.classList.add('menu__link--active');\r\n  }\r\n});\r\n\r\n/// burger menu\r\n\r\nconst header = document.querySelector('.header');\r\nconst burgerButton = document.querySelector('.burger-menu__button');\r\n\r\nheader.addEventListener('click', (event) => {\r\n  event.preventDefault();\r\n  if(event.target.parentElement === burgerButton || event.target === burgerButton) {\r\n    burgerButton.classList.toggle('burger-menu__button--active');\r\n    navigation.classList.toggle('burger-menu--active');\r\n  } else {\r\n    navigation.classList.remove('burger-menu--active');\r\n    burgerButton.classList.remove('burger-menu__button--active');\r\n  }\r\n});\r\n\r\n/// select\n\n//# sourceURL=webpack:///./src/js/rainbow.js?");

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