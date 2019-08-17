module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./pages/dash.js":
/*!***********************!*\
  !*** ./pages/dash.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShareThought; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Form */ "react-bootstrap/Form");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Container */ "react-bootstrap/Container");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__);







const {
  useState
} = __webpack_require__(/*! react */ "react");

function ShareThought() {
  const [message, setMessage] = useState("");

  async function submit(event) {
    event.preventDefault();
    await fetch("/api/thoughts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
        message
      })
    });
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/");
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
    class: "table table-hover"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    scope: "col"
  }, "Type"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    scope: "col"
  }, "Column heading"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    scope: "col"
  }, "Column heading"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    scope: "col"
  }, "Column heading"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    class: "table-active"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    scope: "row"
  }, "Active"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Column content")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    scope: "row"
  }, "Default"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Column content")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    class: "table-primary"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    scope: "row"
  }, "Primary"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Column content")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    class: "table-secondary"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    scope: "row"
  }, "Secondary"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Column content")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    class: "table-success"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    scope: "row"
  }, "Success"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Column content")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    class: "table-danger"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    scope: "row"
  }, "Danger"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Column content")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    class: "table-warning"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    scope: "row"
  }, "Warning"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Column content")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    class: "table-info"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    scope: "row"
  }, "Info"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Column content")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    class: "table-light"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    scope: "row"
  }, "Light"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Column content")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    class: "table-dark"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    scope: "row"
  }, "Dark"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Column content")))));
}

/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/dash.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Von\Documents\classNext\src\pages\dash.js */"./pages/dash.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Button":
/*!*****************************************!*\
  !*** external "react-bootstrap/Button" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ "react-bootstrap/Container":
/*!********************************************!*\
  !*** external "react-bootstrap/Container" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ "react-bootstrap/Form":
/*!***************************************!*\
  !*** external "react-bootstrap/Form" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Form");

/***/ })

/******/ });
//# sourceMappingURL=dash.js.map