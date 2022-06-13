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
/* harmony import */ var _addremoveedit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addremoveedit.js */ "./src/addremoveedit.js");





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
let i = 0;
const getTodoList = () => {
  todolist.forEach((list) => {
    const li = document.createElement('li');
    li.classList.add('list');
    li.id = i;
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
      (0,_addremoveedit_js__WEBPACK_IMPORTED_MODULE_3__.saveone)(desc);
    }; // edit file
    liDiv.appendChild(desc);
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
      todolist = (0,_addremoveedit_js__WEBPACK_IMPORTED_MODULE_3__.removeone)(trash);
      (0,_addremoveedit_js__WEBPACK_IMPORTED_MODULE_3__.ShowAll)(todoDiv);
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
    (0,_addremoveedit_js__WEBPACK_IMPORTED_MODULE_3__.addActivity)(todoInput.value);
    (0,_addremoveedit_js__WEBPACK_IMPORTED_MODULE_3__.ShowAll)(todoDiv);
    const get = (0,_data_js__WEBPACK_IMPORTED_MODULE_2__.load)();
    lists.setTodo(get);
    window.location.reload();
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDBEQUFPO0FBQ2IsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsRUFBRTtBQUM1QjtBQUNBO0FBQ0EsaUJBQWlCLDREQUFTO0FBQzFCLE1BQU0sMERBQU87QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLHFDQUFxQyxvREFBWTtBQUNqRCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhEQUFXO0FBQ2YsSUFBSSwwREFBTztBQUNYLGdCQUFnQiw4Q0FBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWRkcmVtb3ZlZWRpdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RhdHVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RXhvOjQwMCw3MDApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3Qge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggcmdiKDE0OCwgMTQ4LCAxNDgpO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxOTYsIDE5NiwgMTk2KTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHAge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbWFyZ2luOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1zZWN0aW9uIHtcXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxOTYsIDE5NiwgMTk2KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taW5wdXQge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogOTAlO1xcclxcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3RzIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTk2LCAxOTYsIDE5Nik7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5saXN0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGFjMWY7XFxyXFxufVxcclxcblxcclxcbi5saXN0OmhvdmVyIC5kZXNjIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGFjMWY7XFxyXFxufVxcclxcblxcclxcbi5saXN0IHAge1xcclxcbiAgbWFyZ2luOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5saS1kaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuI2J0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxyXFxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5kcmFnZ2FibGUge1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGluZSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJlYSB7XFxyXFxuICBiYWNrZ3JvdW5kOiBiaXNxdWU7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiKDIxMiwgMjAzLCAxOTIpLCBiaXNxdWUpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbi5jaXJjbGVzIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5jaXJjbGVzIGxpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjZkNjk7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGFuaW1hdGlvbjogYW5pbWF0ZSAyNXMgbGluZWFyIGluZmluaXRlO1xcclxcbiAgYm90dG9tOiAtMTUwcHg7XFxyXFxufVxcclxcblxcclxcbi5jaXJjbGVzIGxpOm50aC1jaGlsZCgxKSB7XFxyXFxuICBsZWZ0OiAyNSU7XFxyXFxuICB3aWR0aDogODBweDtcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxyXFxufVxcclxcblxcclxcbi5jaXJjbGVzIGxpOm50aC1jaGlsZCgyKSB7XFxyXFxuICBsZWZ0OiAxMCU7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMnM7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDEycztcXHJcXG59XFxyXFxuXFxyXFxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDMpIHtcXHJcXG4gIGxlZnQ6IDcwJTtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiA0cztcXHJcXG59XFxyXFxuXFxyXFxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDQpIHtcXHJcXG4gIGxlZnQ6IDQwJTtcXHJcXG4gIHdpZHRoOiA2MHB4O1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMThzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2lyY2xlcyBsaTpudGgtY2hpbGQoNSkge1xcclxcbiAgbGVmdDogNjUlO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2lyY2xlcyBsaTpudGgtY2hpbGQoNikge1xcclxcbiAgbGVmdDogNzUlO1xcclxcbiAgd2lkdGg6IDExMHB4O1xcclxcbiAgaGVpZ2h0OiAxMTBweDtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogM3M7XFxyXFxufVxcclxcblxcclxcbi5jaXJjbGVzIGxpOm50aC1jaGlsZCg3KSB7XFxyXFxuICBsZWZ0OiAzNSU7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiA3cztcXHJcXG59XFxyXFxuXFxyXFxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDgpIHtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAxNXM7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDQ1cztcXHJcXG59XFxyXFxuXFxyXFxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDkpIHtcXHJcXG4gIGxlZnQ6IDIwJTtcXHJcXG4gIHdpZHRoOiAxNXB4O1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMzVzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2lyY2xlcyBsaTpudGgtY2hpbGQoMTApIHtcXHJcXG4gIGxlZnQ6IDg1JTtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGhlaWdodDogMTUwcHg7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMXM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoMGRlZyk7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAwcHgpIHJvdGF0ZSg3MjBkZWcpO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsV0FBVztFQUNYLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBSUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0VBQWdFO0VBQ2hFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsTUFBTTtFQUNOLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNDQUFzQztFQUN0QyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtJQUNFLHFDQUFxQztJQUNyQyxVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsNkNBQTZDO0lBQzdDLFVBQVU7SUFDVixrQkFBa0I7RUFDcEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3Qge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggcmdiKDE0OCwgMTQ4LCAxNDgpO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxOTYsIDE5NiwgMTk2KTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHAge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbWFyZ2luOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1zZWN0aW9uIHtcXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxOTYsIDE5NiwgMTk2KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taW5wdXQge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogOTAlO1xcclxcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3RzIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTk2LCAxOTYsIDE5Nik7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5saXN0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGFjMWY7XFxyXFxufVxcclxcblxcclxcbi5saXN0OmhvdmVyIC5kZXNjIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGFjMWY7XFxyXFxufVxcclxcblxcclxcbi5saXN0IHAge1xcclxcbiAgbWFyZ2luOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5saS1kaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuI2J0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxyXFxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5kcmFnZ2FibGUge1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGluZSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUV4bzo0MDAsNzAwXFxcIik7XFxyXFxuXFxyXFxuLmFyZWEge1xcclxcbiAgYmFja2dyb3VuZDogYmlzcXVlO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYigyMTIsIDIwMywgMTkyKSwgYmlzcXVlKTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG5cXHJcXG4uY2lyY2xlcyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY2lyY2xlcyBsaSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI2ZDY5O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBhbmltYXRpb246IGFuaW1hdGUgMjVzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG4gIGJvdHRvbTogLTE1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2lyY2xlcyBsaTpudGgtY2hpbGQoMSkge1xcclxcbiAgbGVmdDogMjUlO1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxuICBoZWlnaHQ6IDgwcHg7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2lyY2xlcyBsaTpudGgtY2hpbGQoMikge1xcclxcbiAgbGVmdDogMTAlO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDJzO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMnM7XFxyXFxufVxcclxcblxcclxcbi5jaXJjbGVzIGxpOm50aC1jaGlsZCgzKSB7XFxyXFxuICBsZWZ0OiA3MCU7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogNHM7XFxyXFxufVxcclxcblxcclxcbi5jaXJjbGVzIGxpOm50aC1jaGlsZCg0KSB7XFxyXFxuICBsZWZ0OiA0MCU7XFxyXFxuICB3aWR0aDogNjBweDtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDE4cztcXHJcXG59XFxyXFxuXFxyXFxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDUpIHtcXHJcXG4gIGxlZnQ6IDY1JTtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXHJcXG59XFxyXFxuXFxyXFxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDYpIHtcXHJcXG4gIGxlZnQ6IDc1JTtcXHJcXG4gIHdpZHRoOiAxMTBweDtcXHJcXG4gIGhlaWdodDogMTEwcHg7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDNzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2lyY2xlcyBsaTpudGgtY2hpbGQoNykge1xcclxcbiAgbGVmdDogMzUlO1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogN3M7XFxyXFxufVxcclxcblxcclxcbi5jaXJjbGVzIGxpOm50aC1jaGlsZCg4KSB7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMTVzO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0NXM7XFxyXFxufVxcclxcblxcclxcbi5jaXJjbGVzIGxpOm50aC1jaGlsZCg5KSB7XFxyXFxuICBsZWZ0OiAyMCU7XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMnM7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDM1cztcXHJcXG59XFxyXFxuXFxyXFxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDEwKSB7XFxyXFxuICBsZWZ0OiA4NSU7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTFzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDBkZWcpO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMHB4KSByb3RhdGUoNzIwZGVnKTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHNhdmUsIGxvYWQgfSBmcm9tICcuL2RhdGEuanMnO1xyXG5cclxuY29uc3QgdGhlQmlnTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0cycpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNob3dBbGwoZWxlbWVudCkge1xyXG4gIHdoaWxlIChlbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQpIHtcclxuICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5sYXN0RWxlbWVudENoaWxkKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDb21wbGV0ZWRzKCkge1xyXG4gIGNvbnN0IGFjdHVhbHRvZG8gPSBsb2FkKCk7XHJcbiAgY29uc3QgcmVzdWx0ID0gYWN0dWFsdG9kby5maWx0ZXIoKGFjdGl2aXR5KSA9PiBhY3Rpdml0eS5jb21wbGV0ZWQgPT09IGZhbHNlKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgcmVzdWx0W2ldLmluZGV4ID0gaTtcclxuICB9XHJcbiAgc2F2ZShyZXN1bHQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQWN0aXZpdHkodGV4dCkge1xyXG4gIGNvbnN0IGFjdHVhbHRvZG8gPSBsb2FkKCk7XHJcbiAgY29uc3QgeyBsZW5ndGggfSA9IGFjdHVhbHRvZG87XHJcbiAgY29uc3QgbmV3QWN0aXZpdHkgPSB7XHJcbiAgICBkZXNjcmlwdGlvbjogdGV4dCxcclxuICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICBpZDogRGF0ZSgpLFxyXG4gICAgaW5kZXg6IGxlbmd0aCxcclxuICB9O1xyXG4gIGFjdHVhbHRvZG9bbGVuZ3RoXSA9IG5ld0FjdGl2aXR5O1xyXG4gIHNhdmUoYWN0dWFsdG9kbyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbGltaW5hdGVPbmUoZWxlbWVudCkge1xyXG4gIC8vIGVsaW1pbmF0ZSBvbmVcclxuICBjb25zdCB7IGlkIH0gPSBlbGVtZW50O1xyXG4gIGNvbnN0IGFjdHVhbHRvZG8gPSBsb2FkKCk7XHJcbiAgY29uc3QgcmVzdWx0ID0gYWN0dWFsdG9kby5maWx0ZXIoKGFjdGl2aXR5KSA9PiBhY3Rpdml0eS5pZCA9PT0gaWQpO1xyXG4gIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuICBjb25zdCBlID0gdGhlQmlnTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdCcpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICByZXN1bHRbaV0uaW5kZXggPSBpO1xyXG4gICAgZVtpXS5pZCA9IGk7XHJcbiAgfVxyXG4gIHNhdmUocmVzdWx0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVvbmUoZWxlbWVudCkge1xyXG4gIGNvbnN0IHRvZG9saXN0ID0gbG9hZCgpO1xyXG4gIGNvbnN0IGluZGV4ID0gZWxlbWVudC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQ7XHJcbiAgdG9kb2xpc3RbaW5kZXhdLmRlc2NyaXB0aW9uID0gZWxlbWVudC52YWx1ZTtcclxuICBzYXZlKHRvZG9saXN0KTtcclxuICByZXR1cm4gdG9kb2xpc3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVvbmUoZWxlbWVudCkge1xyXG4gIGNvbnN0IHRvZG9saXN0ID0gbG9hZCgpO1xyXG4gIGNvbnN0IGluZGV4ID0gZWxlbWVudC5wYXJlbnROb2RlLmlkO1xyXG4gIHRvZG9saXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgc2F2ZSh0b2RvbGlzdCk7XHJcbiAgcmV0dXJuIHRvZG9saXN0O1xyXG59XHJcbiIsImxldCB0b2RvdiA9IDA7XHJcbmNvbnN0IGRlZmF1bHRUb2RvID0gW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XHJcbiAgbGV0IHN0b3JhZ2U7XHJcbiAgdHJ5IHtcclxuICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XHJcbiAgICBjb25zdCB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xyXG4gICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xyXG4gICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvblxyXG4gICAgICAmJiAoZS5jb2RlID09PSAyMlxyXG4gICAgICAgIHx8IGUuY29kZSA9PT0gMTAxNFxyXG4gICAgICAgIHx8IGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcidcclxuICAgICAgICB8fCBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpXHJcbiAgICAgICYmIHN0b3JhZ2VcclxuICAgICAgJiYgc3RvcmFnZS5sZW5ndGggIT09IDBcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5pZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcclxuICB0b2RvdiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luZm9ybWF0aW9uJykpO1xyXG4gIGlmICh0b2RvdiA9PT0gbnVsbCkge1xyXG4gICAgdG9kb3YgPSBkZWZhdWx0VG9kbztcclxuICB9XHJcbn0gZWxzZSB7XHJcbiAgdG9kb3YgPSBkZWZhdWx0VG9kbztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZSh2YXJpYWJsZSkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbmZvcm1hdGlvbicsIEpTT04uc3RyaW5naWZ5KHZhcmlhYmxlKSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWQoKSB7XHJcbiAgbGV0IHZhcmlhYmxlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5mb3JtYXRpb24nKSk7XHJcbiAgaWYgKHZhcmlhYmxlID09PSBudWxsKSB7XHJcbiAgICB2YXJpYWJsZSA9IFtdO1xyXG4gIH1cclxuICByZXR1cm4gdmFyaWFibGU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmUoYSwgYikge1xyXG4gIHJldHVybiBhLmluZGV4IC0gYi5pbmRleDtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gdXBkYXRlU3RhdHVzKGV2ZW50KSB7XHJcbiAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKTtcclxuICBjb25zdCBzdGF0dXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbmZvcm1hdGlvbicpKTtcclxuICBpZiAoc3RhdHVzW2V2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWRdLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xyXG4gICAgc3RhdHVzW2V2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWRdLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzdGF0dXNbZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZF0uY29tcGxldGVkID0gdHJ1ZTtcclxuICB9XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2luZm9ybWF0aW9uJywgSlNPTi5zdHJpbmdpZnkoc3RhdHVzKSk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlU3RhdHVzOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyB1cGRhdGVTdGF0dXMgfSBmcm9tICcuL3N0YXR1cy5qcyc7XHJcbmltcG9ydCB7IGxvYWQgfSBmcm9tICcuL2RhdGEuanMnO1xyXG5pbXBvcnQge1xyXG4gIGFkZEFjdGl2aXR5LCBTaG93QWxsLCBzYXZlb25lLCByZW1vdmVvbmUsXHJcbn0gZnJvbSAnLi9hZGRyZW1vdmVlZGl0LmpzJztcclxuXHJcbmxldCB0b2RvbGlzdCA9IFtdO1xyXG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luZm9ybWF0aW9uJykgPT09IG51bGwpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW5mb3JtYXRpb24nLCAnW10nKTtcclxufVxyXG5jbGFzcyBUYXNrcyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRvRG9MaXN0ID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHNldFRvZG8odG9kb2xpc3QpIHtcclxuICAgIHRoaXMudG9kbyA9IHRvZG9saXN0O1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9kbygpIHtcclxuICAgIHJldHVybiB0aGlzLnRvZG87XHJcbiAgfVxyXG59XHJcbmNvbnN0IGxpc3RzID0gbmV3IFRhc2tzKCk7XHJcbmNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdHMnKTtcclxubGV0IGkgPSAwO1xyXG5jb25zdCBnZXRUb2RvTGlzdCA9ICgpID0+IHtcclxuICB0b2RvbGlzdC5mb3JFYWNoKChsaXN0KSA9PiB7XHJcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBsaS5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XHJcbiAgICBsaS5pZCA9IGk7XHJcbiAgICBjb25zdCBsaURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGlEaXYuY2xhc3NMaXN0LmFkZCgnbGktZGl2Jyk7XHJcbiAgICAvLyBjcmVhdGUgY2hlY2tib3hcclxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XHJcbiAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcclxuICAgIGNoZWNrYm94LmNoZWNrZWQgPSBsaXN0LmNvbXBsZXRlZDtcclxuICAgIGxpRGl2LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuICAgIC8vIGNyZWF0ZSBkZXNjcmlwdGlvblxyXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBkZXNjLmNsYXNzTGlzdC5hZGQoJ2Rlc2MnKTtcclxuICAgIGRlc2MudmFsdWUgPSBsaXN0LmRlc2NyaXB0aW9uO1xyXG4gICAgZGVzYy5vbmNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgc2F2ZW9uZShkZXNjKTtcclxuICAgIH07IC8vIGVkaXQgZmlsZVxyXG4gICAgbGlEaXYuYXBwZW5kQ2hpbGQoZGVzYyk7XHJcbiAgICBsaS5hcHBlbmRDaGlsZChsaURpdik7XHJcbiAgICAvLyBjcmVhdGUgMyB2ZXJ0aWNhbCBkb3RzXHJcbiAgICBjb25zdCBkb3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgZG90cy5jbGFzc0xpc3QuYWRkKCdmYScpO1xyXG4gICAgZG90cy5jbGFzc0xpc3QuYWRkKCdmYS1lbGxpcHNpcy12Jyk7XHJcbiAgICBsaS5hcHBlbmRDaGlsZChkb3RzKTtcclxuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgLy8gY3JlYXRlIHRyYXNoY2FuXHJcbiAgICBjb25zdCB0cmFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIHRyYXNoLmNsYXNzTGlzdC5hZGQoJ2ZhJyk7XHJcbiAgICB0cmFzaC5pZCA9IGB0cmFzaGNhbiR7aX1gO1xyXG4gICAgdHJhc2guY2xhc3NMaXN0LmFkZCgnZmEtdHJhc2gnKTtcclxuICAgIHRyYXNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB0b2RvbGlzdCA9IHJlbW92ZW9uZSh0cmFzaCk7XHJcbiAgICAgIFNob3dBbGwodG9kb0Rpdik7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0pO1xyXG4gICAgZG90cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgZG90cy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgdHJhc2guY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICB9KTtcclxuICAgIHRyYXNoLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgbGkuYXBwZW5kQ2hpbGQodHJhc2gpO1xyXG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICBpICs9IDE7XHJcbiAgfSk7XHJcbiAgY29uc3QgY2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveCcpO1xyXG4gIGNib3guZm9yRWFjaCgoY2hib3gpID0+IHtcclxuICAgIGNoYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHVwZGF0ZVN0YXR1cyk7XHJcbiAgfSk7XHJcbn07XHJcbmNvbnN0IHRvZG9JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWlucHV0Jyk7XHJcbnRvZG9JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgIGFkZEFjdGl2aXR5KHRvZG9JbnB1dC52YWx1ZSk7XHJcbiAgICBTaG93QWxsKHRvZG9EaXYpO1xyXG4gICAgY29uc3QgZ2V0ID0gbG9hZCgpO1xyXG4gICAgbGlzdHMuc2V0VG9kbyhnZXQpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH1cclxufSk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5mb3JtYXRpb24nKSkge1xyXG4gICAgdG9kb2xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbmZvcm1hdGlvbicpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgICdpbmZvcm1hdGlvbicsXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHRvZG9saXN0LnNvcnQoKGEsIGIpID0+ICthLmluZGV4IC0gK2IuaW5kZXgpKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRUb2RvTGlzdCh0b2RvbGlzdC5zb3J0KChhLCBiKSA9PiArYS5pbmRleCAtICtiLmluZGV4KSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=