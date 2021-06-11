self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MyApp; }
/* harmony export */ });
/* harmony import */ var C_web_personal_web_personal_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/theme */ "./src/theme.js");
/* harmony import */ var _hooks_useLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useLayout */ "./hooks/useLayout.js");
/* harmony import */ var _hooks_useDrawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useDrawer */ "./hooks/useDrawer.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../index.css */ "./index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\web personal\\web-personal-nextjs\\pages\\_app.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_web_personal_web_personal_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











function MyApp(props) {
  _s();

  var Component = props.Component,
      pageProps = props.pageProps;
  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function () {
    // Remove the server-side injected CSS.
    var jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  var _useLayout = (0,_hooks_useLayout__WEBPACK_IMPORTED_MODULE_6__.default)(),
      pageActive = _useLayout.pageActive,
      loading = _useLayout.loading,
      desktop = _useLayout.desktop,
      handleLoading = _useLayout.handleLoading,
      handleChangePage = _useLayout.handleChangePage;

  var _useDrawer = (0,_hooks_useDrawer__WEBPACK_IMPORTED_MODULE_7__.default)(),
      setDrawer = _useDrawer.setDrawer,
      toggleDrawer = _useDrawer.toggleDrawer,
      positionDrawer = _useDrawer.positionDrawer,
      typeDrawer = _useDrawer.typeDrawer,
      drawer = _useDrawer.drawer;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("title", {
        children: "My page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "viewport",
        content: "minimum-scale=1, initial-scale=1, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__.ThemeProvider, {
      theme: _src_theme__WEBPACK_IMPORTED_MODULE_5__.default,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_8__.default, {
        pageActive: pageActive,
        loading: loading,
        desktop: desktop,
        handleLoading: handleLoading,
        handleChangePage: handleChangePage,
        toggleDrawer: toggleDrawer,
        positionDrawer: positionDrawer,
        typeDrawer: typeDrawer,
        drawer: drawer,
        setDrawer: setDrawer,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
          desktop: desktop,
          handleChangePage: handleChangePage
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

_s(MyApp, "1iglge0pkyIoEbcTk6bOLGVwiaM=", false, function () {
  return [_hooks_useLayout__WEBPACK_IMPORTED_MODULE_6__.default, _hooks_useDrawer__WEBPACK_IMPORTED_MODULE_7__.default];
});

_c = MyApp;
MyApp.propTypes = {
  Component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType.isRequired),
  pageProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired)
};

var _c;

$RefreshReg$(_c, "MyApp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsInByb3BzIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiUmVhY3QiLCJqc3NTdHlsZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJ1c2VMYXlvdXQiLCJwYWdlQWN0aXZlIiwibG9hZGluZyIsImRlc2t0b3AiLCJoYW5kbGVMb2FkaW5nIiwiaGFuZGxlQ2hhbmdlUGFnZSIsInVzZURyYXdlciIsInNldERyYXdlciIsInRvZ2dsZURyYXdlciIsInBvc2l0aW9uRHJhd2VyIiwidHlwZURyYXdlciIsImRyYXdlciIsInRoZW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUFBLE1BQzNCQyxTQUQyQixHQUNGRCxLQURFLENBQzNCQyxTQUQyQjtBQUFBLE1BQ2hCQyxTQURnQixHQUNGRixLQURFLENBQ2hCRSxTQURnQjtBQUduQ0Msd0RBQUEsQ0FBZ0IsWUFBTTtBQUNwQjtBQUNBLFFBQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUF2QixDQUFsQjs7QUFDQSxRQUFJRixTQUFKLEVBQWU7QUFDYkEsZUFBUyxDQUFDRyxhQUFWLENBQXdCQyxXQUF4QixDQUFvQ0osU0FBcEM7QUFDRDtBQUNGLEdBTkQsRUFNRyxFQU5IOztBQUhtQyxtQkFZakNLLHlEQUFTLEVBWndCO0FBQUEsTUFXM0JDLFVBWDJCLGNBVzNCQSxVQVgyQjtBQUFBLE1BV2ZDLE9BWGUsY0FXZkEsT0FYZTtBQUFBLE1BV05DLE9BWE0sY0FXTkEsT0FYTTtBQUFBLE1BV0dDLGFBWEgsY0FXR0EsYUFYSDtBQUFBLE1BV2tCQyxnQkFYbEIsY0FXa0JBLGdCQVhsQjs7QUFBQSxtQkFlakNDLHlEQUFTLEVBZndCO0FBQUEsTUFjM0JDLFNBZDJCLGNBYzNCQSxTQWQyQjtBQUFBLE1BY2hCQyxZQWRnQixjQWNoQkEsWUFkZ0I7QUFBQSxNQWNGQyxjQWRFLGNBY0ZBLGNBZEU7QUFBQSxNQWNjQyxVQWRkLGNBY2NBLFVBZGQ7QUFBQSxNQWMwQkMsTUFkMUIsY0FjMEJBLE1BZDFCOztBQWlCbkMsc0JBQ0UsOERBQUMsdURBQUQ7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUNFLFlBQUksRUFBQyxVQURQO0FBRUUsZUFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBUUUsOERBQUMsb0VBQUQ7QUFBZSxXQUFLLEVBQUVDLCtDQUF0QjtBQUFBLDhCQUVFLDhEQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFLDhEQUFDLHVEQUFEO0FBQ0Usa0JBQVUsRUFBRVgsVUFEZDtBQUVFLGVBQU8sRUFBRUMsT0FGWDtBQUdFLGVBQU8sRUFBRUMsT0FIWDtBQUlFLHFCQUFhLEVBQUVDLGFBSmpCO0FBS0Usd0JBQWdCLEVBQUVDLGdCQUxwQjtBQU1FLG9CQUFZLEVBQUVHLFlBTmhCO0FBT0Usc0JBQWMsRUFBRUMsY0FQbEI7QUFRRSxrQkFBVSxFQUFFQyxVQVJkO0FBU0UsY0FBTSxFQUFFQyxNQVRWO0FBVUUsaUJBQVMsRUFBRUosU0FWYjtBQUFBLCtCQVlFLDhEQUFDLFNBQUQsa0NBQWVkLFNBQWY7QUFBMEIsaUJBQU8sRUFBRVUsT0FBbkM7QUFBNEMsMEJBQWdCLEVBQUVFO0FBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2QkQ7O0dBOUN1QmYsSztVQVlwQlUscUQsRUFHQU0scUQ7OztLQWZvQmhCLEs7QUFnRHhCQSxLQUFLLENBQUN1QixTQUFOLEdBQWtCO0FBQ2hCckIsV0FBUyxFQUFFc0IsMEVBREs7QUFFaEJyQixXQUFTLEVBQUVxQixxRUFBMkJDO0FBRnRCLENBQWxCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMjBlNDIwMTM0YjU2MjBmMjM5NDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCI7XHJcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3JjL3RoZW1lXCI7XHJcblxyXG5pbXBvcnQgdXNlTGF5b3V0IGZyb20gXCIuLi9ob29rcy91c2VMYXlvdXRcIjtcclxuaW1wb3J0IHVzZURyYXdlciBmcm9tIFwiLi4vaG9va3MvdXNlRHJhd2VyXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcblxyXG5pbXBvcnQgJy4uL2luZGV4LmNzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHByb3BzKSB7XHJcbiAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gcHJvcHM7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBSZW1vdmUgdGhlIHNlcnZlci1zaWRlIGluamVjdGVkIENTUy5cclxuICAgIGNvbnN0IGpzc1N0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanNzLXNlcnZlci1zaWRlXCIpO1xyXG4gICAgaWYgKGpzc1N0eWxlcykge1xyXG4gICAgICBqc3NTdHlsZXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChqc3NTdHlsZXMpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgeyBwYWdlQWN0aXZlLCBsb2FkaW5nLCBkZXNrdG9wLCBoYW5kbGVMb2FkaW5nLCBoYW5kbGVDaGFuZ2VQYWdlIH0gPVxyXG4gICAgdXNlTGF5b3V0KCk7XHJcblxyXG4gIGNvbnN0IHsgc2V0RHJhd2VyLCB0b2dnbGVEcmF3ZXIsIHBvc2l0aW9uRHJhd2VyLCB0eXBlRHJhd2VyLCBkcmF3ZXIgfSA9XHJcbiAgICB1c2VEcmF3ZXIoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk15IHBhZ2U8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgY29udGVudD1cIm1pbmltdW0tc2NhbGU9MSwgaW5pdGlhbC1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGhcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICB7LyogQ3NzQmFzZWxpbmUga2lja3N0YXJ0IGFuIGVsZWdhbnQsIGNvbnNpc3RlbnQsIGFuZCBzaW1wbGUgYmFzZWxpbmUgdG8gYnVpbGQgdXBvbi4gKi99XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPExheW91dFxyXG4gICAgICAgICAgcGFnZUFjdGl2ZT17cGFnZUFjdGl2ZX1cclxuICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICBkZXNrdG9wPXtkZXNrdG9wfVxyXG4gICAgICAgICAgaGFuZGxlTG9hZGluZz17aGFuZGxlTG9hZGluZ31cclxuICAgICAgICAgIGhhbmRsZUNoYW5nZVBhZ2U9e2hhbmRsZUNoYW5nZVBhZ2V9XHJcbiAgICAgICAgICB0b2dnbGVEcmF3ZXI9e3RvZ2dsZURyYXdlcn1cclxuICAgICAgICAgIHBvc2l0aW9uRHJhd2VyPXtwb3NpdGlvbkRyYXdlcn1cclxuICAgICAgICAgIHR5cGVEcmF3ZXI9e3R5cGVEcmF3ZXJ9XHJcbiAgICAgICAgICBkcmF3ZXI9e2RyYXdlcn1cclxuICAgICAgICAgIHNldERyYXdlcj17c2V0RHJhd2VyfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gZGVza3RvcD17ZGVza3RvcH0gaGFuZGxlQ2hhbmdlUGFnZT17aGFuZGxlQ2hhbmdlUGFnZX0gLz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5NeUFwcC5wcm9wVHlwZXMgPSB7XHJcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxuICBwYWdlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==