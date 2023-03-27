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

/***/ "./node_modules/css-loader/dist/cjs.js!./templates/common.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./templates/common.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./logo.png */ \"./templates/logo.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box !important;\\n}\\n\\nbody {\\n  /* width: 100vw; */\\n  font-size: 14px;\\n  background-color: #222222;\\n  color: #fff;\\n}\\n\\nmain {\\n  min-height: 1000px;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  cursor: pointer;\\n}\\n\\ndialog {\\n  padding: 0;\\n  background-color: #212122;\\n}\\n\\n#app {\\n  padding-bottom: 48px;\\n}\\n\\n*:focus {\\n  outline: none;\\n}\\n.item-view,\\n.item-test {\\n  width: 100%;\\n}\\n\\n.item-view {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  max-width: 1200px;\\n  margin: 0 auto;\\n}\\n\\n.item-view h2 {\\n  font-size: 2rem;\\n  font-weight: bold;\\n  user-select: none;\\n}\\n\\n/* https://andrew.hedges.name/experiments/aspect_ratio/ */\\n\\n.item-list {\\n  display: grid;\\n  height: 110%;\\n  margin: 48px 0;\\n  grid-template-columns: repeat(4, 180px);\\n  justify-content: space-between;\\n  grid-row-gap: 48px;\\n}\\n\\n.item-card {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.item-thumbnail {\\n  border-radius: 8px;\\n  width: 180px;\\n  height: 270px;\\n  background-size: contain;\\n}\\n\\n.item-title {\\n  margin-top: 16px;\\n  font-size: 1.2rem;\\n  font-weight: bold;\\n}\\n\\n.item-score {\\n  margin-top: 16px;\\n  font-size: 1.2rem;\\n}\\n\\n.item-score::after {\\n  margin-left: 8px;\\n}\\n\\n.item-title.skeleton::after,\\n.item-score.skeleton::after {\\n  font-size: 0;\\n  content: \\\"loading\\\";\\n}\\n\\n.full-width {\\n  width: 100%;\\n}\\n\\n.last-item {\\n  margin-top: 48px;\\n}\\n\\nbutton.btn {\\n  border: 0;\\n  border-radius: 8px;\\n  height: 30px;\\n  color: #fff;\\n}\\n\\nbutton.primary {\\n  background: #222222;\\n}\\n\\n.modal-poster .skeleton,\\n.item-card .skeleton {\\n  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);\\n  background-size: 400%;\\n  animation: skeleton-animation 5s infinite ease-out;\\n  border-radius: 8px;\\n}\\n\\n@keyframes skeleton-animation {\\n  0% {\\n    background-position: 0% 50%;\\n  }\\n  50% {\\n    background-position: 100% 50%;\\n  }\\n  100% {\\n    background-position: 0% 50%;\\n  }\\n}\\n\\nheader {\\n  width: 100%;\\n  height: 72px;\\n  background-color: #222;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 0 20px;\\n  border-bottom: 1px solid white;\\n  margin-bottom: 48px;\\n}\\n\\nheader h1 {\\n  cursor: pointer;\\n  user-select: none;\\n  font-size: 2rem;\\n  font-weight: bold;\\n  letter-spacing: -0.1rem;\\n  color: #f33f3f;\\n}\\n\\nheader > .search-box {\\n  background: #fff;\\n  padding: 8px;\\n  border-radius: 4px;\\n}\\n\\nheader .search-box > input {\\n  border: 0;\\n}\\n\\nheader .search-box > .search-button {\\n  width: 24px;\\n  height: 14px;\\n  border: 0;\\n  color: black;\\n  text-indent: -1000rem;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") transparent no-repeat 0 1px;\\n  background-size: contain;\\n}\\n\\n/*모달*/\\n\\n.modal-backdrop {\\n  position: fixed;\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n}\\n\\n.modal-content {\\n  position: fixed;\\n  left: 50%;\\n  top: 50%;\\n  transform: translate(-50%, -50%);\\n  width: 100%;\\n  max-width: 826px;\\n  height: 577px;\\n  background: #212122;\\n  color: #f1f1f1;\\n  border-radius: 8px;\\n}\\n\\n.modal-header {\\n  display: flex;\\n  box-sizing: border-box;\\n\\n  position: relative;\\n  height: 60px;\\n\\n  align-items: center;\\n  padding: 20px 24px;\\n  background: #212122;\\n  border-bottom: 1px solid rgba(241, 241, 241, 0.25);\\n}\\n\\n.modal-title {\\n  margin: auto;\\n  font-family: \\\"Roboto\\\";\\n  font-style: normal;\\n  font-weight: 600;\\n  font-size: 20px;\\n  line-height: 24px;\\n  display: flex;\\n  align-items: center;\\n  text-align: center;\\n  letter-spacing: 0.15px;\\n\\n  color: #f1f1f1;\\n}\\n\\n.modal-close {\\n  width: 36px;\\n  height: 36px;\\n  color: #f1f1f1;\\n  background-color: #222;\\n\\n  border-radius: 50%;\\n  border: #212122;\\n}\\n\\n.modal-info-container {\\n  position: relative;\\n  display: flex;\\n  margin-top: 48px;\\n  margin-left: 32px;\\n  margin-right: 32px;\\n}\\n\\n.modal-poster {\\n  height: 433px;\\n  width: 292px;\\n}\\n\\n.modal-info {\\n  width: 422px;\\n  margin-left: 36px;\\n}\\n\\n.modal-genre-rating-container {\\n  display: flex;\\n  width: auto;\\n  height: 24px;\\n\\n  margin-bottom: 12px;\\n\\n  font-family: \\\"Roboto\\\";\\n  font-style: normal;\\n  font-weight: 400;\\n  font-size: 16px;\\n  line-height: 24px;\\n\\n  display: flex;\\n  align-items: center;\\n  letter-spacing: 0.5px;\\n\\n  color: #f1f1f1;\\n}\\n\\n.modal-poster > img {\\n  height: 100%;\\n  width: 100%;\\n}\\n\\n.modal-genre-rating-container > .modal-genre {\\n  margin-right: 24px;\\n}\\n\\n.modal-rating {\\n  width: 24px;\\n  height: 24px;\\n\\n  font-family: \\\"Roboto\\\";\\n  font-style: normal;\\n  font-weight: 400;\\n  font-size: 16px;\\n  line-height: 24px;\\n\\n  display: flex;\\n  align-items: center;\\n  letter-spacing: 0.5px;\\n\\n  color: #f1f1f1;\\n}\\n\\n.modal-rating > img {\\n  margin-right: 8px;\\n  vertical-align: middle;\\n}\\n.modal-description {\\n  font-family: \\\"Roboto\\\";\\n  font-style: normal;\\n  font-weight: 400;\\n  font-size: 16px;\\n  line-height: 24px;\\n  /* identical to box height, or 150% */\\n\\n  display: flex;\\n  align-items: center;\\n  letter-spacing: 0.5px;\\n\\n  color: #f1f1f1;\\n}\\n\\n.my-score-container {\\n  display: flex;\\n  align-items: center;\\n  position: absolute;\\n  border-radius: 16px;\\n  background-color: #383839;\\n  height: 64px;\\n  width: inherit;\\n  bottom: 0px;\\n  padding: 16px;\\n  gap: 12px;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n.empty {\\n  background-color: white;\\n  color: black;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  font-weight: 600;\\n  font-size: 24px;\\n}\\n\\n@media screen and (min-width: 768px) and (max-width: 1023px) {\\n  .item-list {\\n    grid-template-columns: repeat(3, 180px);\\n  }\\n}\\n\\n@media screen and (max-width: 767px) {\\n  .item-list {\\n    grid-template-columns: repeat(2, 180px);\\n  }\\n\\n  .modal-content {\\n    height: 485px;\\n    left: inherit;\\n    bottom: 0;\\n    transform: none;\\n  }\\n\\n  .modal-poster {\\n    display: none;\\n  }\\n\\n  .modal-info-container {\\n    justify-content: center;\\n    margin-left: 0px;\\n    margin-right: 0px;\\n  }\\n\\n  .modal-info {\\n    margin-left: 0px;\\n  }\\n  .my-score-container {\\n    margin-top: 16px;\\n    bottom: initial;\\n  }\\n  .scroe-text {\\n    display: none;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./templates/common.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./templates/reset.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./templates/reset.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/\\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\n\\nhtml,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block;\\n}\\nbody {\\n  line-height: 1;\\n}\\nol,\\nul {\\n  list-style: none;\\n}\\nblockquote,\\nq {\\n  quotes: none;\\n}\\nblockquote:before,\\nblockquote:after,\\nq:before,\\nq:after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\nli {\\n  marker: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./templates/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./templates/common.css":
/*!******************************!*\
  !*** ./templates/common.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./common.css */ \"./node_modules/css-loader/dist/cjs.js!./templates/common.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-movie-review/./templates/common.css?");

/***/ }),

/***/ "./templates/reset.css":
/*!*****************************!*\
  !*** ./templates/reset.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./templates/reset.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-movie-review/./templates/reset.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _api_keywordSearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/keywordSearch */ \"./src/api/keywordSearch.ts\");\n/* harmony import */ var _api_movieDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/movieDetail */ \"./src/api/movieDetail.ts\");\n/* harmony import */ var _api_movieList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/movieList */ \"./src/api/movieList.ts\");\n/* harmony import */ var _components_MovieDetailModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/MovieDetailModal */ \"./src/components/MovieDetailModal.ts\");\n/* harmony import */ var _components_MovieItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/MovieItemList */ \"./src/components/MovieItemList.ts\");\n/* harmony import */ var _components_MyScore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/MyScore */ \"./src/components/MyScore.ts\");\n/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/SearchBox */ \"./src/components/SearchBox.ts\");\n/* harmony import */ var _domain_MovieDataManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./domain/MovieDataManager */ \"./src/domain/MovieDataManager.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\n\n\n\nconst App = () => __awaiter(void 0, void 0, void 0, function* () {\n    var _a, _b;\n    const searchBox = (0,_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const getMoreData = (moreButton, movieItemList, currentPage, getCurrentData) => __awaiter(void 0, void 0, void 0, function* () {\n        const io = new IntersectionObserver((entries) => __awaiter(void 0, void 0, void 0, function* () {\n            entries.forEach((entry) => __awaiter(void 0, void 0, void 0, function* () {\n                if (entry.isIntersecting) {\n                    try {\n                        currentPage++;\n                        const currentData = yield getCurrentData(currentPage);\n                        if (!currentData)\n                            return;\n                        const { results, total_pages } = currentData.data;\n                        const searchResultElement = (0,_domain_MovieDataManager__WEBPACK_IMPORTED_MODULE_7__.generateElement)(results);\n                        movieItemList.addMovies(searchResultElement, total_pages, currentPage);\n                    }\n                    catch (error) {\n                        window.alert(error);\n                    }\n                }\n            }));\n        }), {});\n        io.observe(moreButton);\n    });\n    const getMorePopularMovieResult = (moreButton, movieItemList) => __awaiter(void 0, void 0, void 0, function* () {\n        let currentPage = 1;\n        const getCurrentData = (page) => (0,_api_movieList__WEBPACK_IMPORTED_MODULE_2__.getPopularMovie)(page);\n        yield getMoreData(moreButton, movieItemList, currentPage, getCurrentData);\n    });\n    const getMoreSearchResult = (moreButton, movieItemList, keyword) => __awaiter(void 0, void 0, void 0, function* () {\n        let currentPage = 1;\n        const getCurrentData = (page) => (0,_api_keywordSearch__WEBPACK_IMPORTED_MODULE_0__.getCurrentResult)(keyword, page);\n        yield getMoreData(moreButton, movieItemList, currentPage, getCurrentData);\n    });\n    const showPopularMovies = () => __awaiter(void 0, void 0, void 0, function* () {\n        let popularMovieCurrentPage = 1;\n        const movieItemList = (0,_components_MovieItemList__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"POPULAR\");\n        const popularMovieData = yield (0,_api_movieList__WEBPACK_IMPORTED_MODULE_2__.getPopularMovie)(popularMovieCurrentPage);\n        if (!popularMovieData)\n            return;\n        const { results, total_pages } = popularMovieData.data;\n        const currentPage = popularMovieData.currentPage;\n        popularMovieCurrentPage = currentPage;\n        const movieElement = (0,_domain_MovieDataManager__WEBPACK_IMPORTED_MODULE_7__.generateElement)(results);\n        movieItemList.addMovies(movieElement, total_pages, popularMovieCurrentPage);\n        const moreButton = document.querySelector(\".primary\");\n        getMorePopularMovieResult(moreButton, movieItemList);\n    });\n    const showSearchResult = () => __awaiter(void 0, void 0, void 0, function* () {\n        const keyword = searchBox.getKeyword();\n        const currentSearchMovieData = yield (0,_api_keywordSearch__WEBPACK_IMPORTED_MODULE_0__.getCurrentResult)(keyword, 1);\n        if (!currentSearchMovieData)\n            return;\n        const { results, total_pages } = currentSearchMovieData.data;\n        const currentPage = currentSearchMovieData.currentPage;\n        const searchResultElement = (0,_domain_MovieDataManager__WEBPACK_IMPORTED_MODULE_7__.generateElement)(results);\n        const movieItemList = (0,_components_MovieItemList__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"SEARCH\", keyword);\n        movieItemList.addMovies(searchResultElement, total_pages, currentPage);\n        const moreButton = document.querySelector(\".primary\");\n        getMoreSearchResult(moreButton, movieItemList, keyword);\n    });\n    const onSearchButtonClicked = (e) => __awaiter(void 0, void 0, void 0, function* () {\n        if (!(e instanceof CustomEvent))\n            return;\n        const mainElement = document.querySelector(\"main\");\n        if (!mainElement)\n            return;\n        mainElement.innerHTML = \"\";\n        searchBox.updateKeyword(e.detail.query);\n        yield showSearchResult();\n    });\n    const onMovieItemClicked = (e) => __awaiter(void 0, void 0, void 0, function* () {\n        if (!(e instanceof CustomEvent))\n            return;\n        const movieId = e.detail.movieId;\n        const movieDetailData = (0,_domain_MovieDataManager__WEBPACK_IMPORTED_MODULE_7__.convertToMovieDetailData)(yield (0,_api_movieDetail__WEBPACK_IMPORTED_MODULE_1__.getMovieDetail)(movieId));\n        (0,_components_MovieDetailModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(movieDetailData);\n        const target = document.querySelector(\".modal-info\");\n        (0,_components_MyScore__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(target, movieId);\n    });\n    yield showPopularMovies();\n    (_a = document.querySelector(\".logo\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", () => __awaiter(void 0, void 0, void 0, function* () { return yield showPopularMovies(); }));\n    (_b = document\n        .querySelector(\".search-input\")) === null || _b === void 0 ? void 0 : _b.addEventListener(\"searchButtonClicked\", onSearchButtonClicked);\n    document\n        .addEventListener(\"movieItemClicked\", onMovieItemClicked);\n    return;\n});\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/App.ts?");

/***/ }),

/***/ "./src/api/keywordSearch.ts":
/*!**********************************!*\
  !*** ./src/api/keywordSearch.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCurrentResult\": () => (/* binding */ getCurrentResult)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst BASE_URL = \"https://api.themoviedb.org/3\";\nclass CustomError extends Error {\n}\nconst getCurrentResult = (keyword, currentPage) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const response = yield fetch(`${BASE_URL}/search/movie?api_key=${\"467f40bc698d78a49a5fe841e0b0090f\"}&query=${keyword}&page=${currentPage}`);\n        const data = yield response.json();\n        currentPage++;\n        return { data, currentPage };\n    }\n    catch (error) {\n        if (error instanceof CustomError) {\n            if (error.response && error.response.status >= 500) {\n                alert(\"뭔가 에러가 발생했습니다!!!!!\");\n            }\n            else {\n                console.error(error);\n            }\n        }\n    }\n});\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/api/keywordSearch.ts?");

/***/ }),

/***/ "./src/api/movieDetail.ts":
/*!********************************!*\
  !*** ./src/api/movieDetail.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMovieDetail\": () => (/* binding */ getMovieDetail)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst BASE_URL = \"https://api.themoviedb.org/3\";\nclass CustomError extends Error {\n}\nconst getMovieDetail = (id) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const response = yield fetch(`${BASE_URL}/movie/${id}?api_key=${\"467f40bc698d78a49a5fe841e0b0090f\"}&language=en-US`);\n        const data = yield response.json();\n        return data;\n    }\n    catch (error) {\n        if (error instanceof CustomError) {\n            if (error.response && error.response.status >= 500) {\n                alert(\"뭔가 에러가 발생했습니다!!!!!\");\n            }\n            else {\n                console.error(error);\n            }\n        }\n    }\n});\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/api/movieDetail.ts?");

/***/ }),

/***/ "./src/api/movieList.ts":
/*!******************************!*\
  !*** ./src/api/movieList.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPopularMovie\": () => (/* binding */ getPopularMovie)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst BASE_URL = \"https://api.themoviedb.org/3\";\nclass CustomError extends Error {\n}\nconst getPopularMovie = (currentPage) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const response = yield fetch(`${BASE_URL}/movie/popular?api_key=${\"467f40bc698d78a49a5fe841e0b0090f\"}&page=${currentPage}`);\n        const data = yield response.json();\n        currentPage++;\n        const popularMovieData = { data, currentPage };\n        return popularMovieData;\n    }\n    catch (error) {\n        if (error instanceof CustomError) {\n            if (error.response && error.response.status >= 500) {\n                alert(\"뭔가 에러가 발생했습니다!!!!!\");\n            }\n            else {\n                console.error(error);\n            }\n        }\n    }\n});\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/api/movieList.ts?");

/***/ }),

/***/ "./src/components/MovieDetailModal.ts":
/*!********************************************!*\
  !*** ./src/components/MovieDetailModal.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst MovieDetailModal = (movieDetailData) => {\n    const { title, posterPath, voteAverage, genres, overview } = movieDetailData;\n    const create = () => {\n        return `\n        <div class=\"modal-backdrop\"></div>\n        <div class=\"modal-content\">\n          <section class=\"modal-header\">\n            <div class=\"modal-title\">${title}</div>\n            <button class=\"modal-close\">X</button>\n          </section>\n          <section class=\"modal-info-container\">\n            <div class=\"modal-poster\">\n              <img\n                class=\"skeleton\"\n                src=\"https://image.tmdb.org/t/p/w220_and_h330_face/${posterPath}\"\n              />\n            </div>\n            <div class=\"modal-info\">\n              <div class=\"modal-genre-rating-container\">\n                <span class=\"modal-genre\">${genres}</span>\n                <span class=\"modal-rating\">\n                  <img src=\"./star_filled.png\" />\n                  ${voteAverage}\n                </span>\n              </div>\n              <p class=\"modal-description\">\n                ${overview}\n              </p>\n              \n            </div>\n          </div>\n        </section>\n      </div>\n    `;\n    };\n    const render = () => {\n        var _a;\n        const movieDetailModal = document.createElement(\"dialog\");\n        movieDetailModal.innerHTML = create();\n        (_a = document.querySelector(\"main\")) === null || _a === void 0 ? void 0 : _a.appendChild(movieDetailModal);\n        movieDetailModal.showModal();\n        bindEvent(movieDetailModal);\n    };\n    const bindEvent = (movieDetailModal) => {\n        var _a, _b;\n        const onCloseClick = () => {\n            movieDetailModal === null || movieDetailModal === void 0 ? void 0 : movieDetailModal.close();\n            movieDetailModal.removeEventListener('click', onCloseClick);\n            movieDetailModal.remove();\n        };\n        const onKeydown = (e) => {\n            if (e.keyCode === 27) {\n                onCloseClick();\n                document.removeEventListener('keydown', onKeydown);\n            }\n        };\n        (_a = movieDetailModal.querySelector(\".modal-close\")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', onCloseClick);\n        (_b = movieDetailModal.querySelector(\".modal-backdrop\")) === null || _b === void 0 ? void 0 : _b.addEventListener('click', onCloseClick);\n        document.addEventListener('keydown', onKeydown);\n    };\n    render();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieDetailModal);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieDetailModal.ts?");

/***/ }),

/***/ "./src/components/MovieItem.ts":
/*!*************************************!*\
  !*** ./src/components/MovieItem.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MovieItem\": () => (/* binding */ MovieItem)\n/* harmony export */ });\nconst MovieItem = (movieInfo) => {\n    const { id, title, posterPath, voteAverage } = movieInfo;\n    const thumbnail = posterPath\n        ? `\n    <img\n      class=\"item-thumbnail skeleton\"\n      src=\"https://image.tmdb.org/t/p/w220_and_h330_face${posterPath}\"\n      loading=\"lazy\"\n      alt=\"${title}\"\n    />`\n        : `\n    <div class=\"item-thumbnail empty\">\n      <span>No Image</span>\n    </div>`;\n    return `\n    <li>\n      <a href=\"#${id}\">\n        <div class=\"item-card\">\n          ${thumbnail}\n          <p class=\"item-title \">${title}</p>\n          <p class=\"item-score \"><img src=\"./star_filled.png\" alt=\"별점\" /> ${voteAverage}</p>\n        </div>\n      </a>\n    </li>\n  `;\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieItem.ts?");

/***/ }),

/***/ "./src/components/MovieItemList.ts":
/*!*****************************************!*\
  !*** ./src/components/MovieItemList.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _moreButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moreButton */ \"./src/components/moreButton.ts\");\n\nconst MovieItemList = (currentTab, keyword = '') => {\n    const create = () => {\n        return `<ul class=\"item-list\"></ul>\n    ${(0,_moreButton__WEBPACK_IMPORTED_MODULE_0__.moreButton)()}\n    `;\n    };\n    const deleteAddButton = () => {\n        const moreButton = document.querySelector(\".primary\");\n        moreButton === null || moreButton === void 0 ? void 0 : moreButton.classList.add(\"hidden\");\n    };\n    const addMovies = (movieInfos, totalPages, currentPage) => {\n        var _a;\n        (_a = document\n            .querySelector(\".item-list\")) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML(\"beforeend\", movieInfos);\n        totalPages < currentPage ? deleteAddButton() : null;\n    };\n    const render = () => {\n        var _a;\n        const container = document.createElement(\"section\");\n        container.classList.add(\"item-view\");\n        const currentTabElement = document.createElement(\"h2\");\n        container.innerHTML = create();\n        container.insertAdjacentElement(\"afterbegin\", currentTabElement);\n        if (currentTab == \"POPULAR\")\n            currentTabElement.innerHTML = \"인기 있는 영화\";\n        if (currentTab == \"SEARCH\")\n            currentTabElement.innerHTML = `${keyword} 검색 결과`;\n        (_a = document\n            .querySelector(\"main\")) === null || _a === void 0 ? void 0 : _a.insertAdjacentElement(\"afterbegin\", container);\n    };\n    const bindEvent = () => {\n        const ul = document.querySelector(\".item-list\");\n        if (!ul)\n            return;\n        ul.addEventListener(\"click\", (e) => {\n            const movieCard = e.target.closest(\"a\");\n            if (!movieCard)\n                return;\n            const eventId = movieCard.hash.substring(1);\n            const event = new CustomEvent(\"movieItemClicked\", { detail: { movieId: eventId } });\n            document.dispatchEvent(event);\n        });\n    };\n    render();\n    bindEvent();\n    return {\n        render,\n        addMovies,\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieItemList);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieItemList.ts?");

/***/ }),

/***/ "./src/components/MyScore.ts":
/*!***********************************!*\
  !*** ./src/components/MyScore.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SCORE_COMMENT\": () => (/* binding */ SCORE_COMMENT),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _templates_star_empty_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../templates/star_empty.png */ \"./templates/star_empty.png\");\n\nconst SCORE_COMMENT = {\n    0: \"별점을 입력해주세요\",\n    2: \"최악이예요\",\n    4: \"별로예요\",\n    6: \"보통이에요\",\n    8: \"재미있어요\",\n    10: \"명작이에요\",\n};\nconst MyScore = (target, movieId) => {\n    const score = (localStorage.getItem(String(movieId))) === null ? 0 : localStorage.getItem(String(movieId));\n    const create = () => {\n        console.log(_templates_star_empty_png__WEBPACK_IMPORTED_MODULE_0__);\n        return `\n        <div class=\"my-score\">내 별점</div>\n        <div class=\"stars\">\n        ${Array.from({ length: 5 }).map((_, index) => {\n            const IntScore = Number(score);\n            return index <= (IntScore / 2) - 1 ? `<img class=\"star\" src=\"./star_filled.png\" id=${index} />` : `<img class=\"star\" src=\"./star_empty.png\" id=${index} />`;\n        }).join(\"\")}\n        </div>\n        <div class=\"score-number\">${score}</div>\n        <div class=\"score-text\">${SCORE_COMMENT[Number(score)]}</div>\n    `;\n    };\n    const render = () => {\n        if (document.querySelector('.my-score-container')) {\n            return;\n        }\n        const myScore = document.createElement(\"div\");\n        myScore.classList.add(\"my-score-container\");\n        myScore.innerHTML = create();\n        target.appendChild(myScore);\n        bindEvent();\n    };\n    const bindEvent = () => {\n        const starsList = document.querySelector(\".stars\");\n        if (!starsList)\n            return;\n        starsList.addEventListener(\"click\", (e) => {\n            const target = e.target;\n            if (!target)\n                return;\n            const index = Number(target.closest('.star').id);\n            const newScore = `${(index + 1) * 2}`;\n            updateInfo(index);\n            updateStar(index, Number(newScore));\n            localStorage.setItem(String(movieId), `${(index + 1) * 2}`);\n        });\n    };\n    const updateInfo = (index) => {\n        const scoreNumber = document.querySelector('.score-number');\n        const scoreText = document.querySelector('.score-text');\n        if (!scoreNumber)\n            return;\n        scoreNumber.textContent = `${(index + 1) * 2}`;\n        if (!scoreText)\n            return;\n        const newScore = `${(index + 1) * 2}`;\n        scoreText.textContent = `${SCORE_COMMENT[Number(newScore)]}`;\n    };\n    const updateStar = (index, newScore) => {\n        const stars = document.querySelectorAll(\".star\");\n        stars.forEach((star, starIndex) => {\n            if (starIndex <= (newScore / 2) - 1) {\n                star.src = \"./star_filled.png\";\n            }\n            else {\n                star.src = \"./star_empty.png\";\n            }\n        });\n    };\n    render();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyScore);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MyScore.ts?");

/***/ }),

/***/ "./src/components/SearchBox.ts":
/*!*************************************!*\
  !*** ./src/components/SearchBox.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst SearchBox = () => {\n    const create = () => {\n        return `\n      <input type=\"text\" placeholder=\"검색\" class=\"search-input\"/>\n      <button class=\"search-button\">검색</button>\n    `;\n    };\n    const render = () => {\n        var _a;\n        const searchBox = document.createElement(\"div\");\n        searchBox.classList.add(\"search-box\");\n        searchBox.innerHTML = create();\n        (_a = document.querySelector(\"header\")) === null || _a === void 0 ? void 0 : _a.appendChild(searchBox);\n    };\n    const handleEvent = () => {\n        const searchInput = document.querySelector(\".search-input\");\n        let timer;\n        searchInput === null || searchInput === void 0 ? void 0 : searchInput.addEventListener(\"keyup\", (e) => {\n            e.preventDefault();\n            clearTimeout(timer);\n            timer = setTimeout(() => {\n                onKeyup(e);\n            }, 500);\n        });\n    };\n    const onKeyup = (e) => {\n        const target = e.target;\n        const event = new CustomEvent(\"searchButtonClicked\", {\n            detail: {\n                query: target.value,\n            },\n        });\n        document.querySelector(\".search-input\").dispatchEvent(event);\n        updateKeyword(target.value);\n    };\n    const updateKeyword = (newWord) => {\n        const keywordElement = document.querySelector(\".search-input\");\n        if (keywordElement instanceof HTMLInputElement) {\n            keywordElement.value = newWord;\n        }\n    };\n    const getKeyword = () => {\n        const keywordElement = document.querySelector(\".search-input\");\n        if (keywordElement instanceof HTMLInputElement)\n            return keywordElement.value;\n        return \"\";\n    };\n    render();\n    handleEvent();\n    return { updateKeyword, getKeyword };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBox);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/SearchBox.ts?");

/***/ }),

/***/ "./src/components/moreButton.ts":
/*!**************************************!*\
  !*** ./src/components/moreButton.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"moreButton\": () => (/* binding */ moreButton)\n/* harmony export */ });\nconst moreButton = () => {\n    return `\n    <button class=\"btn primary full-width\"></button>\n    `;\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/moreButton.ts?");

/***/ }),

/***/ "./src/domain/MovieDataManager.ts":
/*!****************************************!*\
  !*** ./src/domain/MovieDataManager.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"convertMovieData\": () => (/* binding */ convertMovieData),\n/* harmony export */   \"convertToMovieDetailData\": () => (/* binding */ convertToMovieDetailData),\n/* harmony export */   \"generateElement\": () => (/* binding */ generateElement)\n/* harmony export */ });\n/* harmony import */ var _components_MovieItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/MovieItem */ \"./src/components/MovieItem.ts\");\n\nconst convertMovieData = (movieItems) => {\n    return movieItems.map((item) => {\n        const id = item.id;\n        const title = item.title;\n        const posterPath = item.poster_path;\n        const voteAverage = item.vote_average;\n        return { id, title, posterPath, voteAverage };\n    });\n};\nconst convertToMovieDetailData = (movieItem) => {\n    var _a;\n    const id = movieItem.id;\n    const title = movieItem.title;\n    const posterPath = movieItem.poster_path;\n    const voteAverage = movieItem.vote_average;\n    const genres = (_a = movieItem.genres) === null || _a === void 0 ? void 0 : _a.map(genre => genre.name);\n    const overview = movieItem.overview;\n    return { id, title, posterPath, voteAverage, genres, overview };\n};\nconst generateElement = (movieData) => {\n    const movieElement = convertMovieData(movieData)\n        .map((item) => (0,_components_MovieItem__WEBPACK_IMPORTED_MODULE_0__.MovieItem)(item))\n        .join(\"\");\n    return movieElement;\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/domain/MovieDataManager.ts?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _templates_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/logo.png */ \"./templates/logo.png\");\n/* harmony import */ var _templates_star_filled_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/star_filled.png */ \"./templates/star_filled.png\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./src/App.ts\");\n/* harmony import */ var _templates_reset_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/reset.css */ \"./templates/reset.css\");\n/* harmony import */ var _templates_common_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../templates/common.css */ \"./templates/common.css\");\n\n\n\n\n\n(0,_App__WEBPACK_IMPORTED_MODULE_2__.App)();\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/index.js?");

/***/ }),

/***/ "./templates/logo.png":
/*!****************************!*\
  !*** ./templates/logo.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"40422730fb09ec2b5aa5.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./templates/logo.png?");

/***/ }),

/***/ "./templates/star_empty.png":
/*!**********************************!*\
  !*** ./templates/star_empty.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ffe8bd2e9c7494f6c1e3.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./templates/star_empty.png?");

/***/ }),

/***/ "./templates/star_filled.png":
/*!***********************************!*\
  !*** ./templates/star_filled.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"966d4a11f15962b42f8b.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./templates/star_filled.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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