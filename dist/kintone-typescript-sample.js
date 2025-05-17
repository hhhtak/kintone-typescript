/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/kintone-typescript-sample.ts":
/*!******************************************!*\
  !*** ./src/kintone-typescript-sample.ts ***!
  \******************************************/
/***/ (() => {

eval("var HANDLE_EVENT = \"app.record.create.show\";\n// @ts-ignore\nkintone.events.on(HANDLE_EVENT, function (event) {\n  event.record.単価.value = \"1\";\n  event.record.ユーザー選択.value = [{\n    name: \"名前\",\n    code: \"コード\"\n  }];\n  return event;\n});\n\n//# sourceURL=webpack://kintone-typescript/./src/kintone-typescript-sample.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/kintone-typescript-sample.ts"]();
/******/ 	
/******/ })()
;