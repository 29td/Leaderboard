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

/***/ "./src/addScores.js":
/*!**************************!*\
  !*** ./src/addScores.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable  import/prefer-default-export */\r\n\r\nconst addScore = async (Name, Score) => {\r\n    const displayScoreSection = document.querySelector('.score-list');\r\n    const row = document.createElement('tr');\r\n    row.innerHTML = `\r\n        <td>${Name}</td>\r\n        <td>${Score}</td>\r\n        `;\r\n    displayScoreSection.appendChild(row);\r\n  };\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addScore);\n\n//# sourceURL=webpack://leaderboard/./src/addScores.js?");

/***/ }),

/***/ "./src/displayScores.js":
/*!******************************!*\
  !*** ./src/displayScores.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addScores_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addScores.js */ \"./src/addScores.js\");\n/* eslint-disable  import/prefer-default-export */\r\n\r\n\r\n\r\nconst displayScores = async () => {\r\n  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FmoE24YVTNvGFm4xwdfb/scores');\r\n  const data = await response.json();\r\n  const displayScore = document.querySelector('.score-list');\r\n  let scoreArray = data.result;\r\n  scoreArray = scoreArray.sort((a, b) => b.score - a.score);\r\n  displayScore.innerHTML = '';\r\n  scoreArray.forEach((score) => {\r\n    (0,_addScores_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(score.user, score.score);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayScores);\n\n//# sourceURL=webpack://leaderboard/./src/displayScores.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayScores_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayScores.js */ \"./src/displayScores.js\");\n/* harmony import */ var _submit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submit.js */ \"./src/submit.js\");\n/* eslint-disable  import/prefer-default-export */\r\n\r\n\r\n\r\n\r\nconst addScore = document.querySelector('#add-score');\r\nconst refreshScoreBtn = document.querySelector('.refresh-btn');\r\n\r\naddScore.addEventListener('submit', (e) => {\r\n  e.preventDefault();\r\n  const playerNameEl = document.getElementById('player-name');\r\n  const playerScoreEl = document.getElementById('player-score');\r\n  const nameValue = playerNameEl.value;\r\n  const scoreValue = playerScoreEl.value;\r\n  (0,_submit_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(nameValue, scoreValue);\r\n  playerNameEl.value = '';\r\n  playerScoreEl.value = '';\r\n});\r\n\r\ndocument.addEventListener('DOMContentLoaded', _displayScores_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\r\nrefreshScoreBtn.addEventListener('click', _displayScores_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\n\n//# sourceURL=webpack://leaderboard/./src/index.js?");

/***/ }),

/***/ "./src/submit.js":
/*!***********************!*\
  !*** ./src/submit.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayScores_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayScores.js */ \"./src/displayScores.js\");\n/* eslint-disable  import/prefer-default-export */\r\n\r\n\r\nconst submitScore = async (name, score) => {\r\n  if (name !== '' && score !== '') {\r\n    const div = document.createElement('div');\r\n    div.className = 'alert success';\r\n    div.innerHTML = '<i class=\"bi bi-check2-all\"></i>';\r\n    div.appendChild(document.createTextNode('Successfully added score'));\r\n\r\n    const container = document.querySelector('#add-score');\r\n    const btn = document.querySelector('.btn-add-score');\r\n    container.insertBefore(div, btn);\r\n    // 3 seconds timeout\r\n    setTimeout(() => document.querySelector('.alert').remove(), 3000);\r\n    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FmoE24YVTNvGFm4xwdfb/scores', {\r\n      method: 'POST',\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n      },\r\n      body: JSON.stringify({\r\n        user: name,\r\n        score,\r\n      }),\r\n    });\r\n  } else if (name === '' && score === '') {\r\n    const div = document.createElement('div');\r\n    div.className = 'alert invalid';\r\n    div.innerHTML = '<i class=\"bi bi-exclamation-octagon-fill\"></i>';\r\n    div.appendChild(document.createTextNode('Please fill in empty space!'));\r\n\r\n    const container = document.querySelector('#add-score');\r\n    const btn = document.querySelector('.btn-add-score');\r\n    container.insertBefore(div, btn);\r\n    // Vanish in 5 seconds\r\n    setTimeout(() => document.querySelector('.alert').remove(), 5000);\r\n  }\r\n  (0,_displayScores_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (submitScore);\n\n//# sourceURL=webpack://leaderboard/./src/submit.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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