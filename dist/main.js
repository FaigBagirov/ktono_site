/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bobir_site/./src/css/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n// import _ from 'lodash';\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n\r\n//Navigation bar style change on scroll algorythm (optimized)\r\n    let nav = document.getElementById(\"myNav\"),\r\n        menuItemBlack = document.querySelectorAll('.menu-item__black'),\r\n        scrollDetector = document.getElementById(\"scroll-start-detector\");\r\n\r\n    //function handles callback when observer fires \"observing/notObserving\" events\r\n    function handleIntersection(entriesArray) {\r\n        entriesArray.map((entry) => {\r\n            if (entry.isIntersecting) {\r\n                // nav.classList.remove('visible');\r\n                nav.style.padding = \"34px 0\";\r\n\r\n                // nav.style.backgroundColor = \"#f4fafd\";\r\n                nav.classList.remove('nav__sticky');\r\n                // menuItemBlack.forEach((item)=>{\r\n                //     item.classList.remove('menu-item__white');\r\n                // });\r\n            } else {\r\n                // nav.classList.add('visible');\r\n                nav.style.padding = \"30px 0\";\r\n\r\n                // nav.style.backgroundColor = \"rgb(5, 55, 123, 0.4)\";\r\n                // nav.style.backgroundColor = \"rgb(4, 28, 40, 0.5)\";\r\n                nav.classList.add('nav__sticky');\r\n                // menuItemBlack.forEach((item)=>{\r\n                //     item.classList.add('menu-item__white');\r\n                // });\r\n                \r\n            }\r\n        });\r\n    }\r\n    \r\n    //creates new observer with our callback func passed as an argument\r\n    const observer = new IntersectionObserver(handleIntersection);\r\n\r\n    //starts observing specified element\r\n    observer.observe(scrollDetector);\r\n\r\n//See more butotn for products    \r\n    let seeMore = document.querySelector(\".products-heading__more\"),\r\n        moreProductNavs = document.querySelector(\".more-product-navs\");\r\n\r\n    seeMore.addEventListener('click', () => {\r\n        seeMore.classList.add('hide');\r\n        moreProductNavs.classList.remove('hide');\r\n    });\r\n\r\n//Main Sandwich functionality\r\n    let mainSandwich = document.querySelector(\".main-sandwich\"),\r\n        mainMenu = document.querySelector(\".main-menu\"),\r\n        sandwichLine = document.querySelector(\".sandwich-line\"),\r\n        sandwichX = document.querySelector(\".main-sandwich-x\"),\r\n        screenSize = window.matchMedia(\"(max-width: 767px)\");\r\n    \r\n            \r\n        sandwichX.addEventListener('click', (event) => {\r\n            mainMenu.classList.remove('menu-active');\r\n            mainSandwich.style.display = 'block';\r\n            sandwichX.style.display = 'none';\r\n        });\r\n\r\n        nav.addEventListener('click', (event) => {\r\n            console.log(event.currentTarget);\r\n            let theTarget = event.target;\r\n            if(screenSize.matches \r\n                && theTarget.tagName === 'A'){\r\n                mainMenu.classList.remove('menu-active');\r\n                mainSandwich.style.display = 'block';\r\n                sandwichX.style.display = 'none';\r\n            }\r\n    \r\n        });\r\n\r\n    mainSandwich.addEventListener('click', () => {\r\n            mainMenu.classList.add('menu-active');\r\n            mainSandwich.style.display = 'none';\r\n            sandwichX.style.display = 'block';\r\n    });\r\n    // mainSandwich.addEventListener('click', () => {\r\n    //     mainMenu.classList.add('menu-active');\r\n    //     mainSandwich.style.display = 'none';\r\n    //     sandwichX.style.display = 'block';\r\n    // });\r\n\r\n\r\n\r\n//Modal window's functionality\r\nlet modalButtons = document.querySelectorAll('.modal__button'),\r\nproductModal = document.querySelector('.product-modal'),\r\nmodalImage = productModal.querySelector('img'),\r\nmodalHeader = productModal.querySelector('.modal-content__header'),\r\nmodalTxt = productModal.querySelector('p'),\r\nmodalWrapper = productModal.querySelector('.modal-wrapper'),\r\nmodalOverlay = document.querySelector('.modal-overlay'),\r\nmodalCloseBtn = document.querySelector('.modal-close'),\r\nmodalContent = productModal.querySelector('.modal-content'),\r\ntheHtml = document.querySelector('html');\r\n\r\nfunction openModal(button, target){\r\n    let showImage;\r\n    if (target instanceof HTMLImageElement){\r\n        showImage = target\r\n    }\r\n    else if(target.previousElementSibling instanceof HTMLImageElement){\r\n        showImage = target.previousElementSibling;\r\n    }\r\n    else{\r\n        showImage = target.parentElement.parentElement.getElementsByTagName('img')[0];\r\n    }\r\n        productModal.style.display = \"block\";\r\n\r\n    setTimeout(() => {\r\n        productModal.classList.add('modal__checked');\r\n        modalWrapper.classList.add('modal-active');\r\n        theHtml.classList.add('hide__scroll');\r\n\r\n        //if there's some elements inside figcaptionthen it's a gallery\r\n        if (showImage.nextElementSibling.firstElementChild){\r\n            modalImage.classList.add(\"gallery__img\");\r\n        }\r\n\r\n        modalImage.src = showImage.src;\r\n\r\n        if (button.dataset.fig !== undefined){\r\n            let content = document.querySelector('#' + button.dataset.fig),\r\n            text = content.querySelector('p');\r\n\r\n            // console.log('text', text);\r\n            modalHeader.innerHTML = content.firstElementChild.innerHTML;\r\n            modalTxt.innerHTML = text.innerHTML;\r\n            modalContent.classList.add('show__content');\r\n        }\r\n    }, 100);\r\n \r\n}\r\n\r\nlet closeModal = ()=> {\r\n    productModal.classList.remove('modal__checked');\r\n    modalWrapper.classList.remove('modal-active');\r\n    // modalOverlay.classList.remove('overlay-active');\r\n    theHtml.classList.remove('hide__scroll');\r\n    modalContent.classList.remove('show__content');\r\n\r\n    if(modalImage.classList.contains('gallery__img')){\r\n        modalImage.classList.remove('gallery__img');\r\n    }\r\n    setTimeout(() => {\r\n        productModal.style.display = \"none\";\r\n    }, 500);\r\n    \r\n}\r\n\r\nmodalButtons.forEach((element)=>{\r\n    element.addEventListener('click', (event)=>{\r\n        let trgt = event.target;\r\n        openModal(element, trgt)\r\n    });\r\n});\r\nmodalCloseBtn. addEventListener('click', (event)=>{closeModal()});\r\n\r\n// Sorting algorythm for the gallery\r\n    let gallerySortingNames = document.querySelectorAll(\".gallery-sorting__name\"),\r\n        allItems = document.querySelectorAll(\".product-card__size__sm\");\r\n\r\n        function showHideAll(command) {\r\n        if (command === \"show\") {\r\n            allItems.forEach( (item) => {\r\n                item.style.display = \"block\";\r\n                 setTimeout(function () {\r\n                    item.classList.remove(\"gallery-hide\")\r\n                }, 10);\r\n            });\r\n            console.log(\"show all completed\");\r\n\r\n        }\r\n        else if (command === \"hide\") {\r\n            allItems.forEach(async (item) => {\r\n                item.classList.add(\"gallery-hide\")\r\n            });\r\n             setTimeout(function () {\r\n                allItems.forEach((item) => { item.style.display = \"none\" });\r\n            }, 500);\r\n            console.log(\"hide all completed\");\r\n        }\r\n    }\r\n\r\n    function gallerySorting() {\r\n        gallerySortingNames.forEach((element, i) => {\r\n            element.addEventListener(\"click\", async () => {\r\n                gallerySortingNames.forEach((name)=>{\r\n                    name.classList.remove('sorting-name__active');\r\n                });\r\n                element.classList.add('sorting-name__active');\r\n\r\n                if (element.dataset.name === \"js-hamisi\") {\r\n                    showHideAll(\"hide\");\r\n\r\n                    await setTimeout(function () {\r\n                        showHideAll(\"show\");\r\n                    }, 500);\r\n                }\r\n                else {\r\n                    \r\n                    showHideAll(\"hide\");\r\n\r\n                    let sorted = document.querySelectorAll(\".\" + element.dataset.name);\r\n\r\n                    await setTimeout(function () {\r\n                        sorted.forEach((item) => {\r\n                            item.style.display = \"block\"\r\n                            setTimeout(function () {\r\n                                item.classList.remove(\"gallery-hide\")\r\n                            }, 10);\r\n                        });\r\n                    }, 500);\r\n\r\n                }\r\n            });\r\n\r\n        });\r\n    }\r\n\r\n    gallerySorting();\r\n\r\n});\r\n\r\n//should stay at the end of the file\r\nif (false) {}\n\n//# sourceURL=webpack://bobir_site/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;