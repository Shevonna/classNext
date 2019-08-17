webpackHotUpdate("static\\development\\pages\\dash.js",{

/***/ "./pages/dash.js":
/*!***********************!*\
  !*** ./pages/dash.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShareThought; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Form */ "../node_modules/react-bootstrap/Form.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Button */ "../node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Container */ "../node_modules/react-bootstrap/Container.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_8__);










var _require = __webpack_require__(/*! react */ "../node_modules/react/index.js"),
    useState = _require.useState;

function ShareThought() {
  var _useState = useState(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      message = _useState2[0],
      setMessage = _useState2[1];

  function submit(_x) {
    return _submit.apply(this, arguments);
  }

  function _submit() {
    _submit = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              _context.next = 3;
              return fetch("/api/thoughts", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                  message: message
                })
              });

            case 3:
              next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/");

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _submit.apply(this, arguments);
  }

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_8___default.a, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("table", {
    "class": "table table-hover"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    scope: "col"
  }, "Type"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    scope: "col"
  }, "Column heading"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    scope: "col"
  }, "Column heading"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    scope: "col"
  }, "Column heading"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
    "class": "table-active"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    scope: "row"
  }, "Active"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Column content")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    scope: "row"
  }, "Default"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Column content")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
    "class": "table-primary"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    scope: "row"
  }, "Primary"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Column content")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
    "class": "table-secondary"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    scope: "row"
  }, "Secondary"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Column content")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
    "class": "table-success"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    scope: "row"
  }, "Success"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Column content")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
    "class": "table-danger"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    scope: "row"
  }, "Danger"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Column content")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
    "class": "table-warning"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    scope: "row"
  }, "Warning"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Column content")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
    "class": "table-info"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    scope: "row"
  }, "Info"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Column content")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
    "class": "table-light"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    scope: "row"
  }, "Light"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Column content")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
    "class": "table-dark"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    scope: "row"
  }, "Dark"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Column content"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Column content")))));
}

/***/ })

})
//# sourceMappingURL=dash.js.0faf4510f37d2387b55e.hot-update.js.map