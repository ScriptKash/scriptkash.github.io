self["webpackHotUpdate_N_E"]("pages/404",{

/***/ "./hooks/useLayout.js":
/*!****************************!*\
  !*** ./hooks/useLayout.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _s = $RefreshSig$();




var useLayout = function useLayout() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      pageActive = _useState2[0],
      setPageActive = _useState2[1];

  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
  var desktop = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)(theme.breakpoints.up("md"));

  var handleLoading = function handleLoading(value) {
    setLoading(value);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (loading) {
      setTimeout(function () {
        return setLoading(false);
      }, 1000);
    }
  }, [loading]);

  var handleChangePage = function handleChangePage(number) {
    setPageActive(number);
  };

  return {
    loading: loading,
    desktop: desktop,
    pageActive: pageActive,
    handleLoading: handleLoading,
    handleChangePage: handleChangePage
  };
};

_s(useLayout, "SXeeyjyGN7xDpwqXSzZHn9DLpos=", false, function () {
  return [_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.useTheme, _material_ui_core__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery];
});

/* harmony default export */ __webpack_exports__["default"] = (useLayout);

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


/***/ }),

/***/ "./pages/404.jsx":
/*!***********************!*\
  !*** ./pages/404.jsx ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useLayout */ "./hooks/useLayout.js");
/* harmony import */ var _src_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Link */ "./src/Link.js");
/* harmony import */ var _theme_colors_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/colors.theme */ "./theme/colors.theme.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\web personal\\web-personal-nextjs\\pages\\404.jsx",
    _this = undefined,
    _s = $RefreshSig$();







var NotFound = function NotFound() {
  _s();

  var _useLayout = (0,_hooks_useLayout__WEBPACK_IMPORTED_MODULE_2__.default)(),
      pageActive = _useLayout.pageActive,
      loading = _useLayout.loading,
      desktop = _useLayout.desktop,
      handleLoading = _useLayout.handleLoading,
      handleChangePage = _useLayout.handleChangePage;

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    handleChangePage(10);
  }, []); //eslint-disable-line

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
        variant: "h3",
        style: {
          fontWeight: 800
        },
        children: "Error 404"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
        variant: "body1",
        style: {
          color: (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.fade)(_theme_colors_theme__WEBPACK_IMPORTED_MODULE_4__.colors.white, 0.5)
        },
        children: "This page not exists"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Link__WEBPACK_IMPORTED_MODULE_3__.default, {
        href: "/",
        style: {
          textDecoration: "none"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Button, {
          onClick: function onClick() {
            return handleChangePage(0);
          },
          variant: "contained",
          color: "primary",
          style: {
            backgroundColor: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_4__.colors.blueFernando,
            fontWeight: 700,
            color: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_4__.colors.white,
            outline: "none",
            borderRadius: 20,
            marginTop: 10
          },
          children: "Go to home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, _this);
};

_s(NotFound, "lxccMV9cpGJk+0u2VNp3mfAPw54=", false, function () {
  return [_hooks_useLayout__WEBPACK_IMPORTED_MODULE_2__.default];
});

_c = NotFound;
/* harmony default export */ __webpack_exports__["default"] = (NotFound);

var _c;

$RefreshReg$(_c, "NotFound");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlTGF5b3V0LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy80MDQuanN4Il0sIm5hbWVzIjpbInVzZUxheW91dCIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwYWdlQWN0aXZlIiwic2V0UGFnZUFjdGl2ZSIsInRoZW1lIiwidXNlVGhlbWUiLCJkZXNrdG9wIiwidXNlTWVkaWFRdWVyeSIsImJyZWFrcG9pbnRzIiwidXAiLCJoYW5kbGVMb2FkaW5nIiwidmFsdWUiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwiaGFuZGxlQ2hhbmdlUGFnZSIsIm51bWJlciIsIk5vdEZvdW5kIiwiZm9udFdlaWdodCIsImNvbG9yIiwiZmFkZSIsImNvbG9ycyIsInRleHREZWNvcmF0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwib3V0bGluZSIsImJvcmRlclJhZGl1cyIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNRQywrQ0FBUSxDQUFDLEtBQUQsQ0FEaEI7QUFBQSxNQUNmQyxPQURlO0FBQUEsTUFDTkMsVUFETTs7QUFBQSxtQkFHY0YsK0NBQVEsQ0FBQyxDQUFELENBSHRCO0FBQUEsTUFHZkcsVUFIZTtBQUFBLE1BR0hDLGFBSEc7O0FBS3RCLE1BQU1DLEtBQUssR0FBR0MsMkRBQVEsRUFBdEI7QUFFQSxNQUFNQyxPQUFPLEdBQUdDLGdFQUFhLENBQUNILEtBQUssQ0FBQ0ksV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxDQUE3Qjs7QUFFQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBVztBQUMvQlYsY0FBVSxDQUFDVSxLQUFELENBQVY7QUFDRCxHQUZEOztBQUlBQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJ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ay9wYWdlcy80MDQuNDg4NTUyZDBlYTFlMDgwNDhmMTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1lZGlhUXVlcnksIHVzZVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IHVzZUxheW91dCA9ICgpID0+IHtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtwYWdlQWN0aXZlLCBzZXRQYWdlQWN0aXZlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcblxyXG4gIGNvbnN0IGRlc2t0b3AgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIikpO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2FkaW5nID0gKHZhbHVlKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHZhbHVlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRMb2FkaW5nKGZhbHNlKSwgMTAwMCk7XHJcbiAgICB9XHJcbiAgfSwgW2xvYWRpbmddKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlUGFnZSA9IChudW1iZXIpID0+IHtcclxuICAgIHNldFBhZ2VBY3RpdmUobnVtYmVyKTtcclxuICB9O1xyXG5cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGxvYWRpbmcsXHJcbiAgICBkZXNrdG9wLFxyXG4gICAgcGFnZUFjdGl2ZSxcclxuICAgIGhhbmRsZUxvYWRpbmcsXHJcbiAgICBoYW5kbGVDaGFuZ2VQYWdlLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VMYXlvdXQ7XHJcbiIsImltcG9ydCB7IEJveCwgQnV0dG9uLCBmYWRlLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZUxheW91dCBmcm9tIFwiLi4vaG9va3MvdXNlTGF5b3V0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJy4uL3NyYy9MaW5rJztcclxuXHJcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gXCIuLi90aGVtZS9jb2xvcnMudGhlbWVcIjtcclxuXHJcbmNvbnN0IE5vdEZvdW5kID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgcGFnZUFjdGl2ZSwgbG9hZGluZywgZGVza3RvcCwgaGFuZGxlTG9hZGluZywgaGFuZGxlQ2hhbmdlUGFnZSB9ID1cclxuICB1c2VMYXlvdXQoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGhhbmRsZUNoYW5nZVBhZ2UoMTApO1xyXG4gIH0sIFtdKTsgLy9lc2xpbnQtZGlzYWJsZS1saW5lXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgaGVpZ2h0PVwiMTAwdmhcIlxyXG4gICAgICBkaXNwbGF5PVwiZmxleFwiXHJcbiAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXHJcbiAgICA+XHJcbiAgICAgIDxCb3g+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgc3R5bGU9e3sgZm9udFdlaWdodDogODAwIH19PlxyXG4gICAgICAgICAgRXJyb3IgNDA0XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHN0eWxlPXt7IGNvbG9yOiBmYWRlKGNvbG9ycy53aGl0ZSwgMC41KSB9fT5cclxuICAgICAgICAgIFRoaXMgcGFnZSBub3QgZXhpc3RzXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDaGFuZ2VQYWdlKDApfVxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5ibHVlRmVybmFuZG8sXHJcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiBjb2xvcnMud2hpdGUsXHJcbiAgICAgICAgICAgICAgb3V0bGluZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyMCxcclxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEwLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBHbyB0byBob21lXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9