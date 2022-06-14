/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Exo:400,700);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100vh;\r\n  width: 100%;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n.todo-list {\r\n  width: 50%;\r\n  border: 1px solid #fff;\r\n  background-color: #fff;\r\n  box-shadow: 2px 2px 8px rgb(148, 148, 148);\r\n}\r\n\r\n.title {\r\n  border-bottom: 1px solid rgb(196, 196, 196);\r\n  width: 100%;\r\n  height: 30px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.title p {\r\n  padding-left: 10px;\r\n  font-size: 20px;\r\n  margin: 1px;\r\n}\r\n\r\n.input-section {\r\n  height: 35px;\r\n  width: 100%;\r\n  border-bottom: 1px solid rgb(196, 196, 196);\r\n}\r\n\r\n.todo-input {\r\n  width: 90%;\r\n  height: 90%;\r\n  border: transparent;\r\n  padding-left: 10px;\r\n  font-style: italic;\r\n}\r\n\r\n.lists {\r\n  border-bottom: 1px solid rgb(196, 196, 196);\r\n  list-style: none;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.list {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.list:hover {\r\n  background-color: #edac1f;\r\n}\r\n\r\n.list:hover .desc {\r\n  background-color: #edac1f;\r\n}\r\n\r\n.list p {\r\n  margin: 1px;\r\n}\r\n\r\n.li-div {\r\n  display: flex;\r\n}\r\n\r\n#btn {\r\n  background-color: lightgrey;\r\n  border: transparent;\r\n  height: 30px;\r\n  width: 100%;\r\n}\r\n\r\n.draggable {\r\n  cursor: move;\r\n}\r\n\r\n.line {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.fa {\r\n  cursor: pointer;\r\n}\r\n\r\ninput {\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n.area {\r\n  background: bisque;\r\n  background: linear-gradient(to left, rgb(212, 203, 192), bisque);\r\n  width: 100%;\r\n  height: 100vh;\r\n  top: 0;\r\n  position: absolute;\r\n  z-index: -1;\r\n}\r\n\r\n.circles {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.circles li {\r\n  background-color: #1b6d69;\r\n  position: absolute;\r\n  display: block;\r\n  list-style: none;\r\n  width: 20px;\r\n  height: 20px;\r\n  animation: animate 25s linear infinite;\r\n  bottom: -150px;\r\n}\r\n\r\n.circles li:nth-child(1) {\r\n  left: 25%;\r\n  width: 80px;\r\n  height: 80px;\r\n  animation-delay: 0s;\r\n}\r\n\r\n.circles li:nth-child(2) {\r\n  left: 10%;\r\n  width: 20px;\r\n  height: 20px;\r\n  animation-delay: 2s;\r\n  animation-duration: 12s;\r\n}\r\n\r\n.circles li:nth-child(3) {\r\n  left: 70%;\r\n  width: 20px;\r\n  height: 20px;\r\n  animation-delay: 4s;\r\n}\r\n\r\n.circles li:nth-child(4) {\r\n  left: 40%;\r\n  width: 60px;\r\n  height: 60px;\r\n  animation-delay: 0s;\r\n  animation-duration: 18s;\r\n}\r\n\r\n.circles li:nth-child(5) {\r\n  left: 65%;\r\n  width: 20px;\r\n  height: 20px;\r\n  animation-delay: 0s;\r\n}\r\n\r\n.circles li:nth-child(6) {\r\n  left: 75%;\r\n  width: 110px;\r\n  height: 110px;\r\n  animation-delay: 3s;\r\n}\r\n\r\n.circles li:nth-child(7) {\r\n  left: 35%;\r\n  width: 150px;\r\n  height: 150px;\r\n  animation-delay: 7s;\r\n}\r\n\r\n.circles li:nth-child(8) {\r\n  left: 50%;\r\n  width: 25px;\r\n  height: 25px;\r\n  animation-delay: 15s;\r\n  animation-duration: 45s;\r\n}\r\n\r\n.circles li:nth-child(9) {\r\n  left: 20%;\r\n  width: 15px;\r\n  height: 15px;\r\n  animation-delay: 2s;\r\n  animation-duration: 35s;\r\n}\r\n\r\n.circles li:nth-child(10) {\r\n  left: 85%;\r\n  width: 150px;\r\n  height: 150px;\r\n  animation-delay: 0s;\r\n  animation-duration: 11s;\r\n}\r\n\r\n@keyframes animate {\r\n  0% {\r\n    transform: translateY(0) rotate(0deg);\r\n    opacity: 1;\r\n    border-radius: 0;\r\n  }\r\n\r\n  100% {\r\n    transform: translateY(-1000px) rotate(720deg);\r\n    opacity: 0;\r\n    border-radius: 50%;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,WAAW;EACX,iCAAiC;AACnC;;AAEA;EACE,UAAU;EACV,sBAAsB;EACtB,sBAAsB;EACtB,0CAA0C;AAC5C;;AAEA;EACE,2CAA2C;EAC3C,WAAW;EACX,YAAY;EACZ,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,2CAA2C;AAC7C;;AAEA;EACE,UAAU;EACV,WAAW;EACX,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,2CAA2C;EAC3C,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,2BAA2B;EAC3B,mBAAmB;EACnB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAIA;EACE,kBAAkB;EAClB,gEAAgE;EAChE,WAAW;EACX,aAAa;EACb,MAAM;EACN,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,cAAc;EACd,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,sCAAsC;EACtC,cAAc;AAChB;;AAEA;EACE,SAAS;EACT,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,SAAS;EACT,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,SAAS;EACT,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,WAAW;EACX,YAAY;EACZ,oBAAoB;EACpB,uBAAuB;AACzB;;AAEA;EACE,SAAS;EACT,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,SAAS;EACT,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE;IACE,qCAAqC;IACrC,UAAU;IACV,gBAAgB;EAClB;;EAEA;IACE,6CAA6C;IAC7C,UAAU;IACV,kBAAkB;EACpB;AACF","sourcesContent":["body {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100vh;\r\n  width: 100%;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n.todo-list {\r\n  width: 50%;\r\n  border: 1px solid #fff;\r\n  background-color: #fff;\r\n  box-shadow: 2px 2px 8px rgb(148, 148, 148);\r\n}\r\n\r\n.title {\r\n  border-bottom: 1px solid rgb(196, 196, 196);\r\n  width: 100%;\r\n  height: 30px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.title p {\r\n  padding-left: 10px;\r\n  font-size: 20px;\r\n  margin: 1px;\r\n}\r\n\r\n.input-section {\r\n  height: 35px;\r\n  width: 100%;\r\n  border-bottom: 1px solid rgb(196, 196, 196);\r\n}\r\n\r\n.todo-input {\r\n  width: 90%;\r\n  height: 90%;\r\n  border: transparent;\r\n  padding-left: 10px;\r\n  font-style: italic;\r\n}\r\n\r\n.lists {\r\n  border-bottom: 1px solid rgb(196, 196, 196);\r\n  list-style: none;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.list {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.list:hover {\r\n  background-color: #edac1f;\r\n}\r\n\r\n.list:hover .desc {\r\n  background-color: #edac1f;\r\n}\r\n\r\n.list p {\r\n  margin: 1px;\r\n}\r\n\r\n.li-div {\r\n  display: flex;\r\n}\r\n\r\n#btn {\r\n  background-color: lightgrey;\r\n  border: transparent;\r\n  height: 30px;\r\n  width: 100%;\r\n}\r\n\r\n.draggable {\r\n  cursor: move;\r\n}\r\n\r\n.line {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.fa {\r\n  cursor: pointer;\r\n}\r\n\r\ninput {\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n@import url(\"https://fonts.googleapis.com/css?family=Exo:400,700\");\r\n\r\n.area {\r\n  background: bisque;\r\n  background: linear-gradient(to left, rgb(212, 203, 192), bisque);\r\n  width: 100%;\r\n  height: 100vh;\r\n  top: 0;\r\n  position: absolute;\r\n  z-index: -1;\r\n}\r\n\r\n.circles {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.circles li {\r\n  background-color: #1b6d69;\r\n  position: absolute;\r\n  display: block;\r\n  list-style: none;\r\n  width: 20px;\r\n  height: 20px;\r\n  animation: animate 25s linear infinite;\r\n  bottom: -150px;\r\n}\r\n\r\n.circles li:nth-child(1) {\r\n  left: 25%;\r\n  width: 80px;\r\n  height: 80px;\r\n  animation-delay: 0s;\r\n}\r\n\r\n.circles li:nth-child(2) {\r\n  left: 10%;\r\n  width: 20px;\r\n  height: 20px;\r\n  animation-delay: 2s;\r\n  animation-duration: 12s;\r\n}\r\n\r\n.circles li:nth-child(3) {\r\n  left: 70%;\r\n  width: 20px;\r\n  height: 20px;\r\n  animation-delay: 4s;\r\n}\r\n\r\n.circles li:nth-child(4) {\r\n  left: 40%;\r\n  width: 60px;\r\n  height: 60px;\r\n  animation-delay: 0s;\r\n  animation-duration: 18s;\r\n}\r\n\r\n.circles li:nth-child(5) {\r\n  left: 65%;\r\n  width: 20px;\r\n  height: 20px;\r\n  animation-delay: 0s;\r\n}\r\n\r\n.circles li:nth-child(6) {\r\n  left: 75%;\r\n  width: 110px;\r\n  height: 110px;\r\n  animation-delay: 3s;\r\n}\r\n\r\n.circles li:nth-child(7) {\r\n  left: 35%;\r\n  width: 150px;\r\n  height: 150px;\r\n  animation-delay: 7s;\r\n}\r\n\r\n.circles li:nth-child(8) {\r\n  left: 50%;\r\n  width: 25px;\r\n  height: 25px;\r\n  animation-delay: 15s;\r\n  animation-duration: 45s;\r\n}\r\n\r\n.circles li:nth-child(9) {\r\n  left: 20%;\r\n  width: 15px;\r\n  height: 15px;\r\n  animation-delay: 2s;\r\n  animation-duration: 35s;\r\n}\r\n\r\n.circles li:nth-child(10) {\r\n  left: 85%;\r\n  width: 150px;\r\n  height: 150px;\r\n  animation-delay: 0s;\r\n  animation-duration: 11s;\r\n}\r\n\r\n@keyframes animate {\r\n  0% {\r\n    transform: translateY(0) rotate(0deg);\r\n    opacity: 1;\r\n    border-radius: 0;\r\n  }\r\n\r\n  100% {\r\n    transform: translateY(-1000px) rotate(720deg);\r\n    opacity: 0;\r\n    border-radius: 50%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/addremoveedit.js":
/*!******************************!*\
  !*** ./src/addremoveedit.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowAll": () => (/* binding */ ShowAll),
/* harmony export */   "addActivity": () => (/* binding */ addActivity),
/* harmony export */   "eliminateOne": () => (/* binding */ eliminateOne),
/* harmony export */   "removeCompleteds": () => (/* binding */ removeCompleteds),
/* harmony export */   "removeone": () => (/* binding */ removeone),
/* harmony export */   "saveone": () => (/* binding */ saveone)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");


const theBigList = document.querySelector('.lists');

function ShowAll(element) {
  while (element.lastElementChild) {
    element.removeChild(element.lastElementChild);
  }
}

function removeCompleteds() {
  const actualtodo = (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.load)();
  const result = actualtodo.filter((activity) => activity.completed === false);
  for (let i = 0; i < result.length; i += 1) {
    result[i].index = i;
  }
  (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.save)(result);
}

function addActivity(text) {
  const actualtodo = (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.load)();
  const { length } = actualtodo;
  const newActivity = {
    description: text,
    completed: false,
    id: Date(),
    index: length,
  };
  actualtodo[length] = newActivity;
  (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.save)(actualtodo);
}

function eliminateOne(element) {
  // eliminate one
  const { id } = element;
  const actualtodo = (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.load)();
  const result = actualtodo.filter((activity) => activity.id === id);
  element.parentNode.removeChild(element);
  const e = theBigList.querySelectorAll('.list');
  for (let i = 0; i < result.length; i += 1) {
    result[i].index = i;
    e[i].id = i;
  }
  (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.save)(result);
}

function saveone(element) {
  const todolist = (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.load)();
  const index = element.parentNode.parentNode.id;
  todolist[index].description = element.value;
  (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.save)(todolist);
  return todolist;
}

function removeone(element) {
  const todolist = (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.load)();
  const index = element.parentNode.id;
  todolist.splice(index, 1);
  (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.save)(todolist);
  return todolist;
}


/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compare": () => (/* binding */ compare),
/* harmony export */   "load": () => (/* binding */ load),
/* harmony export */   "save": () => (/* binding */ save),
/* harmony export */   "storageAvailable": () => (/* binding */ storageAvailable)
/* harmony export */ });
let todov = 0;
const defaultTodo = [];

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException
      && (e.code === 22
        || e.code === 1014
        || e.name === 'QuotaExceededError'
        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      && storage
      && storage.length !== 0
    );
  }
}

if (storageAvailable('localStorage')) {
  todov = JSON.parse(localStorage.getItem('information'));
  if (todov === null) {
    todov = defaultTodo;
  }
} else {
  todov = defaultTodo;
}
function save(variable) {
  localStorage.setItem('information', JSON.stringify(variable));
}
function load() {
  let variable = JSON.parse(localStorage.getItem('information'));
  if (variable === null) {
    variable = [];
  }
  return variable;
}
function compare(a, b) {
  return a.index - b.index;
}


/***/ }),

/***/ "./src/dragdrop.js":
/*!*************************!*\
  !*** ./src/dragdrop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeContainer": () => (/* binding */ makeContainer),
/* harmony export */   "makeDrageable": () => (/* binding */ makeDrageable)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");


const theBigList = document.querySelector('.lists');

function getDragAfterElement(tdle, y) {
  const dragableElements = [...tdle.querySelectorAll('.list:not(.dragging)')];

  return dragableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset, element: child };
    } return closest;
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function hold(element) {
  element.classList.add('dragging');
}

function drag(element) {
  element.classList.remove('dragging');
}

function makeDrageable(element) {
  const newTodo = [];
  element.addEventListener('dragstart', () => { hold(element); });
  element.addEventListener('dragend', () => {
    drag(element);
    const e = theBigList.querySelectorAll('.list');
    let list = (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.load)();

    list.sort(_data_js__WEBPACK_IMPORTED_MODULE_0__.compare);
    for (let i = 0; i < e.length; i += 1) {
      const otherId = parseInt(e[i].id, 10);
      newTodo[i] = list[otherId];
      newTodo[i].index = i;
      e[i].id = [i];
    }
    (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.save)(newTodo);
    list = (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.load)(list);
  });
}

function makeContainer(tdl) {
  tdl.addEventListener('dragover', (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(tdl, e.clientY);
    const dragable = document.querySelector('.dragging');
    if (afterElement == null) {
      tdl.appendChild(dragable);
    } else {
      tdl.insertBefore(dragable, afterElement);
    }
  });
}

/***/ }),

/***/ "./src/status.js":
/*!***********************!*\
  !*** ./src/status.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "updateStatus": () => (/* binding */ updateStatus)
/* harmony export */ });
function updateStatus(event) {
  event.target.nextElementSibling.classList.toggle('completed');
  const status = JSON.parse(localStorage.getItem('information'));
  if (status[event.target.parentNode.parentNode.id].completed === true) {
    status[event.target.parentNode.parentNode.id].completed = false;
  } else {
    status[event.target.parentNode.parentNode.id].completed = true;
  }
  localStorage.setItem('information', JSON.stringify(status));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateStatus);

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status.js */ "./src/status.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _dragdrop_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dragdrop.js */ "./src/dragdrop.js");
/* harmony import */ var _addremoveedit_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addremoveedit.js */ "./src/addremoveedit.js");






let todolist = [];
if (localStorage.getItem('information') === null) {
  localStorage.setItem('information', '[]');
}
class Tasks {
  constructor() {
    this.toDoList = null;
  }

  setTodo(todolist) {
    this.todo = todolist;
  }

  getTodo() {
    return this.todo;
  }
}
const lists = new Tasks();
const todoDiv = document.querySelector('.lists');
(0,_dragdrop_js__WEBPACK_IMPORTED_MODULE_3__.makeContainer)(todoDiv);
let i = 0;
const getTodoList = () => {
  todolist.forEach((list) => {
    const li = document.createElement('li');
    (0,_dragdrop_js__WEBPACK_IMPORTED_MODULE_3__.makeDrageable)(li);
    li.classList.add('list');
    li.classList.add('draggable');
    li.id = i;
    li.draggable = true;
    const liDiv = document.createElement('div');
    liDiv.classList.add('li-div');
    // create checkbox
    const checkbox = document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.type = 'checkbox';
    checkbox.checked = list.completed;
    liDiv.appendChild(checkbox);
    // create description
    const desc = document.createElement('input');
    desc.classList.add('desc');
    desc.value = list.description;
    desc.onchange = () => {
      (0,_addremoveedit_js__WEBPACK_IMPORTED_MODULE_4__.saveone)(desc);
    };
    liDiv.appendChild(desc);
    checkbox.addEventListener('change', function check() {
      if (this.checked) {
        desc.classList.add('line');
      } else {
        desc.classList.remove('line');
      }
    });
    li.appendChild(liDiv);
    // create 3 vertical dots
    const dots = document.createElement('i');
    dots.classList.add('fa');
    dots.classList.add('fa-ellipsis-v');
    li.appendChild(dots);
    todoDiv.appendChild(li);
    // create trashcan
    const trash = document.createElement('i');
    trash.classList.add('fa');
    trash.id = `trashcan${i}`;
    trash.classList.add('fa-trash');
    trash.addEventListener('click', () => {
      todolist = (0,_addremoveedit_js__WEBPACK_IMPORTED_MODULE_4__.removeone)(trash);
      (0,_addremoveedit_js__WEBPACK_IMPORTED_MODULE_4__.ShowAll)(todoDiv);
      window.location.reload();
    });
    dots.addEventListener('click', () => {
      dots.classList.add('hidden');
      trash.classList.remove('hidden');
    });
    trash.classList.add('hidden');
    li.appendChild(trash);
    todoDiv.appendChild(li);
    i += 1;
  });
  const cbox = document.querySelectorAll('.checkbox');
  cbox.forEach((chbox) => {
    chbox.addEventListener('change', _status_js__WEBPACK_IMPORTED_MODULE_1__.updateStatus);
  });
};
const todoInput = document.getElementById('todo-input');
todoInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    (0,_addremoveedit_js__WEBPACK_IMPORTED_MODULE_4__.addActivity)(todoInput.value);
    (0,_addremoveedit_js__WEBPACK_IMPORTED_MODULE_4__.ShowAll)(todoDiv);
    const get = (0,_data_js__WEBPACK_IMPORTED_MODULE_2__.load)();
    lists.setTodo(get);
    window.location.reload();
  }
});
const clearBtn = document.getElementById('btn');
clearBtn.addEventListener('click', () => {
  (0,_addremoveedit_js__WEBPACK_IMPORTED_MODULE_4__.removeCompleteds)();
  const get = (0,_data_js__WEBPACK_IMPORTED_MODULE_2__.load)();
  (0,_addremoveedit_js__WEBPACK_IMPORTED_MODULE_4__.ShowAll)(todoDiv);
  lists.setTodo(get);
  window.location.reload();
});
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('information')) {
    todolist = JSON.parse(localStorage.getItem('information'));
  } else {
    localStorage.setItem(
      'information',
      JSON.stringify(todolist.sort((a, b) => +a.index - +b.index)),
    );
  }

  getTodoList(todolist.sort((a, b) => +a.index - +b.index));
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0Q7QUFDQTtBQUNBLEVBQUUsbUVBQWdCO0FBQ2xCLGNBQWMsOENBQUk7QUFDbEIsRUFBRSwwREFBTztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWRkcmVtb3ZlZWRpdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZHJhZ2Ryb3AuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0YXR1cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUV4bzo0MDAsNzAwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggOHB4IHJnYigxNDgsIDE0OCwgMTQ4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTk2LCAxOTYsIDE5Nik7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi50aXRsZSBwIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIG1hcmdpbjogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtc2VjdGlvbiB7XFxyXFxuICBoZWlnaHQ6IDM1cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTk2LCAxOTYsIDE5Nik7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWlucHV0IHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBoZWlnaHQ6IDkwJTtcXHJcXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi5saXN0cyB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE5NiwgMTk2LCAxOTYpO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRhYzFmO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdDpob3ZlciAuZGVzYyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRhYzFmO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdCBwIHtcXHJcXG4gIG1hcmdpbjogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGktZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbiNidG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcclxcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJhZ2dhYmxlIHtcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmUge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFyZWEge1xcclxcbiAgYmFja2dyb3VuZDogYmlzcXVlO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYigyMTIsIDIwMywgMTkyKSwgYmlzcXVlKTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG5cXHJcXG4uY2lyY2xlcyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY2lyY2xlcyBsaSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI2ZDY5O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBhbmltYXRpb246IGFuaW1hdGUgMjVzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG4gIGJvdHRvbTogLTE1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2lyY2xlcyBsaTpudGgtY2hpbGQoMSkge1xcclxcbiAgbGVmdDogMjUlO1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxuICBoZWlnaHQ6IDgwcHg7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2lyY2xlcyBsaTpudGgtY2hpbGQoMikge1xcclxcbiAgbGVmdDogMTAlO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDJzO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMnM7XFxyXFxufVxcclxcblxcclxcbi5jaXJjbGVzIGxpOm50aC1jaGlsZCgzKSB7XFxyXFxuICBsZWZ0OiA3MCU7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogNHM7XFxyXFxufVxcclxcblxcclxcbi5jaXJjbGVzIGxpOm50aC1jaGlsZCg0KSB7XFxyXFxuICBsZWZ0OiA0MCU7XFxyXFxuICB3aWR0aDogNjBweDtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDE4cztcXHJcXG59XFxyXFxuXFxyXFxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDUpIHtcXHJcXG4gIGxlZnQ6IDY1JTtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXHJcXG59XFxyXFxuXFxyXFxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDYpIHtcXHJcXG4gIGxlZnQ6IDc1JTtcXHJcXG4gIHdpZHRoOiAxMTBweDtcXHJcXG4gIGhlaWdodDogMTEwcHg7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDNzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2lyY2xlcyBsaTpudGgtY2hpbGQoNykge1xcclxcbiAgbGVmdDogMzUlO1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogN3M7XFxyXFxufVxcclxcblxcclxcbi5jaXJjbGVzIGxpOm50aC1jaGlsZCg4KSB7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMTVzO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0NXM7XFxyXFxufVxcclxcblxcclxcbi5jaXJjbGVzIGxpOm50aC1jaGlsZCg5KSB7XFxyXFxuICBsZWZ0OiAyMCU7XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMnM7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDM1cztcXHJcXG59XFxyXFxuXFxyXFxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDEwKSB7XFxyXFxuICBsZWZ0OiA4NSU7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTFzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDBkZWcpO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMHB4KSByb3RhdGUoNzIwZGVnKTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFdBQVc7RUFDWCxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0MsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0MsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUlBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdFQUFnRTtFQUNoRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLE1BQU07RUFDTixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixzQ0FBc0M7RUFDdEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0U7SUFDRSxxQ0FBcUM7SUFDckMsVUFBVTtJQUNWLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLDZDQUE2QztJQUM3QyxVQUFVO0lBQ1Ysa0JBQWtCO0VBQ3BCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggOHB4IHJnYigxNDgsIDE0OCwgMTQ4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTk2LCAxOTYsIDE5Nik7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi50aXRsZSBwIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIG1hcmdpbjogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtc2VjdGlvbiB7XFxyXFxuICBoZWlnaHQ6IDM1cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTk2LCAxOTYsIDE5Nik7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWlucHV0IHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBoZWlnaHQ6IDkwJTtcXHJcXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi5saXN0cyB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE5NiwgMTk2LCAxOTYpO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRhYzFmO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdDpob3ZlciAuZGVzYyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRhYzFmO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdCBwIHtcXHJcXG4gIG1hcmdpbjogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGktZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbiNidG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcclxcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJhZ2dhYmxlIHtcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmUge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1FeG86NDAwLDcwMFxcXCIpO1xcclxcblxcclxcbi5hcmVhIHtcXHJcXG4gIGJhY2tncm91bmQ6IGJpc3F1ZTtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2IoMjEyLCAyMDMsIDE5MiksIGJpc3F1ZSk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNpcmNsZXMge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNpcmNsZXMgbGkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiNmQ2OTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYW5pbWF0aW9uOiBhbmltYXRlIDI1cyBsaW5lYXIgaW5maW5pdGU7XFxyXFxuICBib3R0b206IC0xNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDEpIHtcXHJcXG4gIGxlZnQ6IDI1JTtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbiAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXHJcXG59XFxyXFxuXFxyXFxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIGxlZnQ6IDEwJTtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTJzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2lyY2xlcyBsaTpudGgtY2hpbGQoMykge1xcclxcbiAgbGVmdDogNzAlO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDRzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2lyY2xlcyBsaTpudGgtY2hpbGQoNCkge1xcclxcbiAgbGVmdDogNDAlO1xcclxcbiAgd2lkdGg6IDYwcHg7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxOHM7XFxyXFxufVxcclxcblxcclxcbi5jaXJjbGVzIGxpOm50aC1jaGlsZCg1KSB7XFxyXFxuICBsZWZ0OiA2NSU7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxyXFxufVxcclxcblxcclxcbi5jaXJjbGVzIGxpOm50aC1jaGlsZCg2KSB7XFxyXFxuICBsZWZ0OiA3NSU7XFxyXFxuICB3aWR0aDogMTEwcHg7XFxyXFxuICBoZWlnaHQ6IDExMHB4O1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAzcztcXHJcXG59XFxyXFxuXFxyXFxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDcpIHtcXHJcXG4gIGxlZnQ6IDM1JTtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGhlaWdodDogMTUwcHg7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDdzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2lyY2xlcyBsaTpudGgtY2hpbGQoOCkge1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDE1cztcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNDVzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2lyY2xlcyBsaTpudGgtY2hpbGQoOSkge1xcclxcbiAgbGVmdDogMjAlO1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDJzO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzNXM7XFxyXFxufVxcclxcblxcclxcbi5jaXJjbGVzIGxpOm50aC1jaGlsZCgxMCkge1xcclxcbiAgbGVmdDogODUlO1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDExcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBhbmltYXRlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMDBweCkgcm90YXRlKDcyMGRlZyk7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBzYXZlLCBsb2FkIH0gZnJvbSAnLi9kYXRhLmpzJztcclxuXHJcbmNvbnN0IHRoZUJpZ0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdHMnKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTaG93QWxsKGVsZW1lbnQpIHtcclxuICB3aGlsZSAoZWxlbWVudC5sYXN0RWxlbWVudENoaWxkKSB7XHJcbiAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ29tcGxldGVkcygpIHtcclxuICBjb25zdCBhY3R1YWx0b2RvID0gbG9hZCgpO1xyXG4gIGNvbnN0IHJlc3VsdCA9IGFjdHVhbHRvZG8uZmlsdGVyKChhY3Rpdml0eSkgPT4gYWN0aXZpdHkuY29tcGxldGVkID09PSBmYWxzZSk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIHJlc3VsdFtpXS5pbmRleCA9IGk7XHJcbiAgfVxyXG4gIHNhdmUocmVzdWx0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEFjdGl2aXR5KHRleHQpIHtcclxuICBjb25zdCBhY3R1YWx0b2RvID0gbG9hZCgpO1xyXG4gIGNvbnN0IHsgbGVuZ3RoIH0gPSBhY3R1YWx0b2RvO1xyXG4gIGNvbnN0IG5ld0FjdGl2aXR5ID0ge1xyXG4gICAgZGVzY3JpcHRpb246IHRleHQsXHJcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgaWQ6IERhdGUoKSxcclxuICAgIGluZGV4OiBsZW5ndGgsXHJcbiAgfTtcclxuICBhY3R1YWx0b2RvW2xlbmd0aF0gPSBuZXdBY3Rpdml0eTtcclxuICBzYXZlKGFjdHVhbHRvZG8pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZWxpbWluYXRlT25lKGVsZW1lbnQpIHtcclxuICAvLyBlbGltaW5hdGUgb25lXHJcbiAgY29uc3QgeyBpZCB9ID0gZWxlbWVudDtcclxuICBjb25zdCBhY3R1YWx0b2RvID0gbG9hZCgpO1xyXG4gIGNvbnN0IHJlc3VsdCA9IGFjdHVhbHRvZG8uZmlsdGVyKChhY3Rpdml0eSkgPT4gYWN0aXZpdHkuaWQgPT09IGlkKTtcclxuICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XHJcbiAgY29uc3QgZSA9IHRoZUJpZ0xpc3QucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QnKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgcmVzdWx0W2ldLmluZGV4ID0gaTtcclxuICAgIGVbaV0uaWQgPSBpO1xyXG4gIH1cclxuICBzYXZlKHJlc3VsdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlb25lKGVsZW1lbnQpIHtcclxuICBjb25zdCB0b2RvbGlzdCA9IGxvYWQoKTtcclxuICBjb25zdCBpbmRleCA9IGVsZW1lbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkO1xyXG4gIHRvZG9saXN0W2luZGV4XS5kZXNjcmlwdGlvbiA9IGVsZW1lbnQudmFsdWU7XHJcbiAgc2F2ZSh0b2RvbGlzdCk7XHJcbiAgcmV0dXJuIHRvZG9saXN0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3Zlb25lKGVsZW1lbnQpIHtcclxuICBjb25zdCB0b2RvbGlzdCA9IGxvYWQoKTtcclxuICBjb25zdCBpbmRleCA9IGVsZW1lbnQucGFyZW50Tm9kZS5pZDtcclxuICB0b2RvbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIHNhdmUodG9kb2xpc3QpO1xyXG4gIHJldHVybiB0b2RvbGlzdDtcclxufVxyXG4iLCJsZXQgdG9kb3YgPSAwO1xyXG5jb25zdCBkZWZhdWx0VG9kbyA9IFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xyXG4gIGxldCBzdG9yYWdlO1xyXG4gIHRyeSB7XHJcbiAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xyXG4gICAgY29uc3QgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcclxuICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcclxuICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb25cclxuICAgICAgJiYgKGUuY29kZSA9PT0gMjJcclxuICAgICAgICB8fCBlLmNvZGUgPT09IDEwMTRcclxuICAgICAgICB8fCBlLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InXHJcbiAgICAgICAgfHwgZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKVxyXG4gICAgICAmJiBzdG9yYWdlXHJcbiAgICAgICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XHJcbiAgdG9kb3YgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbmZvcm1hdGlvbicpKTtcclxuICBpZiAodG9kb3YgPT09IG51bGwpIHtcclxuICAgIHRvZG92ID0gZGVmYXVsdFRvZG87XHJcbiAgfVxyXG59IGVsc2Uge1xyXG4gIHRvZG92ID0gZGVmYXVsdFRvZG87XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmUodmFyaWFibGUpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW5mb3JtYXRpb24nLCBKU09OLnN0cmluZ2lmeSh2YXJpYWJsZSkpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkKCkge1xyXG4gIGxldCB2YXJpYWJsZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luZm9ybWF0aW9uJykpO1xyXG4gIGlmICh2YXJpYWJsZSA9PT0gbnVsbCkge1xyXG4gICAgdmFyaWFibGUgPSBbXTtcclxuICB9XHJcbiAgcmV0dXJuIHZhcmlhYmxlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlKGEsIGIpIHtcclxuICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XHJcbn1cclxuIiwiaW1wb3J0IHsgc2F2ZSwgbG9hZCwgY29tcGFyZSB9IGZyb20gJy4vZGF0YS5qcyc7XHJcblxyXG5jb25zdCB0aGVCaWdMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RzJyk7XHJcblxyXG5mdW5jdGlvbiBnZXREcmFnQWZ0ZXJFbGVtZW50KHRkbGUsIHkpIHtcclxuICBjb25zdCBkcmFnYWJsZUVsZW1lbnRzID0gWy4uLnRkbGUucXVlcnlTZWxlY3RvckFsbCgnLmxpc3Q6bm90KC5kcmFnZ2luZyknKV07XHJcblxyXG4gIHJldHVybiBkcmFnYWJsZUVsZW1lbnRzLnJlZHVjZSgoY2xvc2VzdCwgY2hpbGQpID0+IHtcclxuICAgIGNvbnN0IGJveCA9IGNoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0geSAtIGJveC50b3AgLSBib3guaGVpZ2h0IC8gMjtcclxuICAgIGlmIChvZmZzZXQgPCAwICYmIG9mZnNldCA+IGNsb3Nlc3Qub2Zmc2V0KSB7XHJcbiAgICAgIHJldHVybiB7IG9mZnNldCwgZWxlbWVudDogY2hpbGQgfTtcclxuICAgIH0gcmV0dXJuIGNsb3Nlc3Q7XHJcbiAgfSwgeyBvZmZzZXQ6IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSB9KS5lbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBob2xkKGVsZW1lbnQpIHtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYWcoZWxlbWVudCkge1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VEcmFnZWFibGUoZWxlbWVudCkge1xyXG4gIGNvbnN0IG5ld1RvZG8gPSBbXTtcclxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsICgpID0+IHsgaG9sZChlbGVtZW50KTsgfSk7XHJcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4ge1xyXG4gICAgZHJhZyhlbGVtZW50KTtcclxuICAgIGNvbnN0IGUgPSB0aGVCaWdMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0Jyk7XHJcbiAgICBsZXQgbGlzdCA9IGxvYWQoKTtcclxuXHJcbiAgICBsaXN0LnNvcnQoY29tcGFyZSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGUubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgY29uc3Qgb3RoZXJJZCA9IHBhcnNlSW50KGVbaV0uaWQsIDEwKTtcclxuICAgICAgbmV3VG9kb1tpXSA9IGxpc3Rbb3RoZXJJZF07XHJcbiAgICAgIG5ld1RvZG9baV0uaW5kZXggPSBpO1xyXG4gICAgICBlW2ldLmlkID0gW2ldO1xyXG4gICAgfVxyXG4gICAgc2F2ZShuZXdUb2RvKTtcclxuICAgIGxpc3QgPSBsb2FkKGxpc3QpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZUNvbnRhaW5lcih0ZGwpIHtcclxuICB0ZGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgYWZ0ZXJFbGVtZW50ID0gZ2V0RHJhZ0FmdGVyRWxlbWVudCh0ZGwsIGUuY2xpZW50WSk7XHJcbiAgICBjb25zdCBkcmFnYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmFnZ2luZycpO1xyXG4gICAgaWYgKGFmdGVyRWxlbWVudCA9PSBudWxsKSB7XHJcbiAgICAgIHRkbC5hcHBlbmRDaGlsZChkcmFnYWJsZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0ZGwuaW5zZXJ0QmVmb3JlKGRyYWdhYmxlLCBhZnRlckVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVN0YXR1cyhldmVudCkge1xyXG4gIGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkJyk7XHJcbiAgY29uc3Qgc3RhdHVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5mb3JtYXRpb24nKSk7XHJcbiAgaWYgKHN0YXR1c1tldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkXS5jb21wbGV0ZWQgPT09IHRydWUpIHtcclxuICAgIHN0YXR1c1tldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkXS5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICB9IGVsc2Uge1xyXG4gICAgc3RhdHVzW2V2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWRdLmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgfVxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbmZvcm1hdGlvbicsIEpTT04uc3RyaW5naWZ5KHN0YXR1cykpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZVN0YXR1czsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgdXBkYXRlU3RhdHVzIH0gZnJvbSAnLi9zdGF0dXMuanMnO1xyXG5pbXBvcnQgeyBsb2FkIH0gZnJvbSAnLi9kYXRhLmpzJztcclxuaW1wb3J0IHsgbWFrZUNvbnRhaW5lciwgbWFrZURyYWdlYWJsZSB9IGZyb20gJy4vZHJhZ2Ryb3AuanMnO1xyXG5pbXBvcnQge1xyXG4gIGFkZEFjdGl2aXR5LFxyXG4gIFNob3dBbGwsXHJcbiAgcmVtb3ZlQ29tcGxldGVkcyxcclxuICBzYXZlb25lLFxyXG4gIHJlbW92ZW9uZSxcclxufSBmcm9tICcuL2FkZHJlbW92ZWVkaXQuanMnO1xyXG5cclxubGV0IHRvZG9saXN0ID0gW107XHJcbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5mb3JtYXRpb24nKSA9PT0gbnVsbCkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbmZvcm1hdGlvbicsICdbXScpO1xyXG59XHJcbmNsYXNzIFRhc2tzIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudG9Eb0xpc3QgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgc2V0VG9kbyh0b2RvbGlzdCkge1xyXG4gICAgdGhpcy50b2RvID0gdG9kb2xpc3Q7XHJcbiAgfVxyXG5cclxuICBnZXRUb2RvKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9kbztcclxuICB9XHJcbn1cclxuY29uc3QgbGlzdHMgPSBuZXcgVGFza3MoKTtcclxuY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0cycpO1xyXG5tYWtlQ29udGFpbmVyKHRvZG9EaXYpO1xyXG5sZXQgaSA9IDA7XHJcbmNvbnN0IGdldFRvZG9MaXN0ID0gKCkgPT4ge1xyXG4gIHRvZG9saXN0LmZvckVhY2goKGxpc3QpID0+IHtcclxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIG1ha2VEcmFnZWFibGUobGkpO1xyXG4gICAgbGkuY2xhc3NMaXN0LmFkZCgnbGlzdCcpO1xyXG4gICAgbGkuY2xhc3NMaXN0LmFkZCgnZHJhZ2dhYmxlJyk7XHJcbiAgICBsaS5pZCA9IGk7XHJcbiAgICBsaS5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgY29uc3QgbGlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxpRGl2LmNsYXNzTGlzdC5hZGQoJ2xpLWRpdicpO1xyXG4gICAgLy8gY3JlYXRlIGNoZWNrYm94XHJcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xyXG4gICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgICBjaGVja2JveC5jaGVja2VkID0gbGlzdC5jb21wbGV0ZWQ7XHJcbiAgICBsaURpdi5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcbiAgICAvLyBjcmVhdGUgZGVzY3JpcHRpb25cclxuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgZGVzYy5jbGFzc0xpc3QuYWRkKCdkZXNjJyk7XHJcbiAgICBkZXNjLnZhbHVlID0gbGlzdC5kZXNjcmlwdGlvbjtcclxuICAgIGRlc2Mub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgIHNhdmVvbmUoZGVzYyk7XHJcbiAgICB9O1xyXG4gICAgbGlEaXYuYXBwZW5kQ2hpbGQoZGVzYyk7XHJcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiBjaGVjaygpIHtcclxuICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xyXG4gICAgICAgIGRlc2MuY2xhc3NMaXN0LmFkZCgnbGluZScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlc2MuY2xhc3NMaXN0LnJlbW92ZSgnbGluZScpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGxpLmFwcGVuZENoaWxkKGxpRGl2KTtcclxuICAgIC8vIGNyZWF0ZSAzIHZlcnRpY2FsIGRvdHNcclxuICAgIGNvbnN0IGRvdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBkb3RzLmNsYXNzTGlzdC5hZGQoJ2ZhJyk7XHJcbiAgICBkb3RzLmNsYXNzTGlzdC5hZGQoJ2ZhLWVsbGlwc2lzLXYnKTtcclxuICAgIGxpLmFwcGVuZENoaWxkKGRvdHMpO1xyXG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICAvLyBjcmVhdGUgdHJhc2hjYW5cclxuICAgIGNvbnN0IHRyYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgdHJhc2guY2xhc3NMaXN0LmFkZCgnZmEnKTtcclxuICAgIHRyYXNoLmlkID0gYHRyYXNoY2FuJHtpfWA7XHJcbiAgICB0cmFzaC5jbGFzc0xpc3QuYWRkKCdmYS10cmFzaCcpO1xyXG4gICAgdHJhc2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRvZG9saXN0ID0gcmVtb3Zlb25lKHRyYXNoKTtcclxuICAgICAgU2hvd0FsbCh0b2RvRGl2KTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfSk7XHJcbiAgICBkb3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBkb3RzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICB0cmFzaC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIH0pO1xyXG4gICAgdHJhc2guY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICBsaS5hcHBlbmRDaGlsZCh0cmFzaCk7XHJcbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKGxpKTtcclxuICAgIGkgKz0gMTtcclxuICB9KTtcclxuICBjb25zdCBjYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94Jyk7XHJcbiAgY2JveC5mb3JFYWNoKChjaGJveCkgPT4ge1xyXG4gICAgY2hib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdXBkYXRlU3RhdHVzKTtcclxuICB9KTtcclxufTtcclxuY29uc3QgdG9kb0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8taW5wdXQnKTtcclxudG9kb0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xyXG4gIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgYWRkQWN0aXZpdHkodG9kb0lucHV0LnZhbHVlKTtcclxuICAgIFNob3dBbGwodG9kb0Rpdik7XHJcbiAgICBjb25zdCBnZXQgPSBsb2FkKCk7XHJcbiAgICBsaXN0cy5zZXRUb2RvKGdldCk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgfVxyXG59KTtcclxuY29uc3QgY2xlYXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuJyk7XHJcbmNsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHJlbW92ZUNvbXBsZXRlZHMoKTtcclxuICBjb25zdCBnZXQgPSBsb2FkKCk7XHJcbiAgU2hvd0FsbCh0b2RvRGl2KTtcclxuICBsaXN0cy5zZXRUb2RvKGdldCk7XHJcbiAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG59KTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbmZvcm1hdGlvbicpKSB7XHJcbiAgICB0b2RvbGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luZm9ybWF0aW9uJykpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgJ2luZm9ybWF0aW9uJyxcclxuICAgICAgSlNPTi5zdHJpbmdpZnkodG9kb2xpc3Quc29ydCgoYSwgYikgPT4gK2EuaW5kZXggLSArYi5pbmRleCkpLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldFRvZG9MaXN0KHRvZG9saXN0LnNvcnQoKGEsIGIpID0+ICthLmluZGV4IC0gK2IuaW5kZXgpKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==