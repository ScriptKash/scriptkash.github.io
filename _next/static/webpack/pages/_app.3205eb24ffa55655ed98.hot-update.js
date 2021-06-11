self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);

 // Create a theme instance.

var theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.createMuiTheme)({
  palette: {
    h1: {
      fontWeight: 900,
      fontSize: 32,
      textTransform: "uppercase",
      color: 'black'
    },
    h6: {
      textTransform: "none"
    },
    primary: {
      main: '#fff'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__.red.A400
    },
    background: {
      "default": '#000'
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lLmpzIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwiaDEiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJ0ZXh0VHJhbnNmb3JtIiwiY29sb3IiLCJoNiIsInByaW1hcnkiLCJtYWluIiwic2Vjb25kYXJ5IiwiZXJyb3IiLCJyZWQiLCJBNDAwIiwiYmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHQyx3RUFBYyxDQUFDO0FBQzNCQyxTQUFPLEVBQUU7QUFDUEMsTUFBRSxFQUFFO0FBQ0ZDLGdCQUFVLEVBQUUsR0FEVjtBQUVGQyxjQUFRLEVBQUUsRUFGUjtBQUdGQyxtQkFBYSxFQUFFLFdBSGI7QUFJRkMsV0FBSyxFQUFDO0FBSkosS0FERztBQU9QQyxNQUFFLEVBQUU7QUFDRkYsbUJBQWEsRUFBRTtBQURiLEtBUEc7QUFVUEcsV0FBTyxFQUFFO0FBQ1BDLFVBQUksRUFBRTtBQURDLEtBVkY7QUFhUEMsYUFBUyxFQUFFO0FBQ1RELFVBQUksRUFBRTtBQURHLEtBYko7QUFnQlBFLFNBQUssRUFBRTtBQUNMRixVQUFJLEVBQUVHLDhEQUFRQztBQURULEtBaEJBO0FBbUJQQyxjQUFVLEVBQUU7QUFDVixpQkFBUztBQURDO0FBbkJMO0FBRGtCLENBQUQsQ0FBNUI7QUEwQkEsK0RBQWVmLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zMjA1ZWIyNGZmYTU1NjU1ZWQ5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyByZWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnO1xyXG5cclxuLy8gQ3JlYXRlIGEgdGhlbWUgaW5zdGFuY2UuXHJcbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xyXG4gIHBhbGV0dGU6IHtcclxuICAgIGgxOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IDkwMCxcclxuICAgICAgZm9udFNpemU6IDMyLFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxyXG4gICAgICBjb2xvcjonYmxhY2snXHJcbiAgICB9LFxyXG4gICAgaDY6IHtcclxuICAgICAgdGV4dFRyYW5zZm9ybTogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBtYWluOiAnI2ZmZicsXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgIG1haW46ICcjMTk4NTdiJyxcclxuICAgIH0sXHJcbiAgICBlcnJvcjoge1xyXG4gICAgICBtYWluOiByZWQuQTQwMCxcclxuICAgIH0sXHJcbiAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgIGRlZmF1bHQ6ICcjMDAwJyxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZTsiXSwic291cmNlUm9vdCI6IiJ9