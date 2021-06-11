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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/theme */ "./src/theme.js");
/* harmony import */ var _hooks_useLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useLayout */ "./hooks/useLayout.js");
/* harmony import */ var _hooks_useDrawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useDrawer */ "./hooks/useDrawer.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
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
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "viewport",
        content: "minimum-scale=1, initial-scale=1, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__.ThemeProvider, {
      theme: _src_theme__WEBPACK_IMPORTED_MODULE_5__.default,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
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
          lineNumber: 52,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsInByb3BzIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiUmVhY3QiLCJqc3NTdHlsZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJ1c2VMYXlvdXQiLCJwYWdlQWN0aXZlIiwibG9hZGluZyIsImRlc2t0b3AiLCJoYW5kbGVMb2FkaW5nIiwiaGFuZGxlQ2hhbmdlUGFnZSIsInVzZURyYXdlciIsInNldERyYXdlciIsInRvZ2dsZURyYXdlciIsInBvc2l0aW9uRHJhd2VyIiwidHlwZURyYXdlciIsImRyYXdlciIsInRoZW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQUEsTUFDM0JDLFNBRDJCLEdBQ0ZELEtBREUsQ0FDM0JDLFNBRDJCO0FBQUEsTUFDaEJDLFNBRGdCLEdBQ0ZGLEtBREUsQ0FDaEJFLFNBRGdCO0FBR25DQyx3REFBQSxDQUFnQixZQUFNO0FBQ3BCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQWxCOztBQUNBLFFBQUlGLFNBQUosRUFBZTtBQUNiQSxlQUFTLENBQUNHLGFBQVYsQ0FBd0JDLFdBQXhCLENBQW9DSixTQUFwQztBQUNEO0FBQ0YsR0FORCxFQU1HLEVBTkg7O0FBSG1DLG1CQVlqQ0sseURBQVMsRUFad0I7QUFBQSxNQVczQkMsVUFYMkIsY0FXM0JBLFVBWDJCO0FBQUEsTUFXZkMsT0FYZSxjQVdmQSxPQVhlO0FBQUEsTUFXTkMsT0FYTSxjQVdOQSxPQVhNO0FBQUEsTUFXR0MsYUFYSCxjQVdHQSxhQVhIO0FBQUEsTUFXa0JDLGdCQVhsQixjQVdrQkEsZ0JBWGxCOztBQUFBLG1CQWVqQ0MseURBQVMsRUFmd0I7QUFBQSxNQWMzQkMsU0FkMkIsY0FjM0JBLFNBZDJCO0FBQUEsTUFjaEJDLFlBZGdCLGNBY2hCQSxZQWRnQjtBQUFBLE1BY0ZDLGNBZEUsY0FjRkEsY0FkRTtBQUFBLE1BY2NDLFVBZGQsY0FjY0EsVUFkZDtBQUFBLE1BYzBCQyxNQWQxQixjQWMwQkEsTUFkMUI7O0FBaUJuQyxzQkFDRSw4REFBQyx1REFBRDtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQ0UsWUFBSSxFQUFDLFVBRFA7QUFFRSxlQUFPLEVBQUM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFRRSw4REFBQyxtRUFBRDtBQUFlLFdBQUssRUFBRUMsK0NBQXRCO0FBQUEsOEJBRUUsOERBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0UsOERBQUMsdURBQUQ7QUFDRSxrQkFBVSxFQUFFWCxVQURkO0FBRUUsZUFBTyxFQUFFQyxPQUZYO0FBR0UsZUFBTyxFQUFFQyxPQUhYO0FBSUUscUJBQWEsRUFBRUMsYUFKakI7QUFLRSx3QkFBZ0IsRUFBRUMsZ0JBTHBCO0FBTUUsb0JBQVksRUFBRUcsWUFOaEI7QUFPRSxzQkFBYyxFQUFFQyxjQVBsQjtBQVFFLGtCQUFVLEVBQUVDLFVBUmQ7QUFTRSxjQUFNLEVBQUVDLE1BVFY7QUFVRSxpQkFBUyxFQUFFSixTQVZiO0FBQUEsK0JBWUUsOERBQUMsU0FBRCxrQ0FBZWQsU0FBZjtBQUEwQixpQkFBTyxFQUFFVSxPQUFuQztBQUE0QywwQkFBZ0IsRUFBRUU7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTZCRDs7R0E5Q3VCZixLO1VBWXBCVSxxRCxFQUdBTSxxRDs7O0tBZm9CaEIsSztBQWdEeEJBLEtBQUssQ0FBQ3VCLFNBQU4sR0FBa0I7QUFDaEJyQixXQUFTLEVBQUVzQiwwRUFESztBQUVoQnJCLFdBQVMsRUFBRXFCLHFFQUEyQkM7QUFGdEIsQ0FBbEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mYTI5YjU4YmM4ZmRiNTRlNjJiNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3NyYy90aGVtZVwiO1xyXG5pbXBvcnQgdXNlTGF5b3V0IGZyb20gXCIuLi9ob29rcy91c2VMYXlvdXRcIjtcclxuaW1wb3J0IHVzZURyYXdlciBmcm9tIFwiLi4vaG9va3MvdXNlRHJhd2VyXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcChwcm9wcykge1xyXG4gIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHByb3BzO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gUmVtb3ZlIHRoZSBzZXJ2ZXItc2lkZSBpbmplY3RlZCBDU1MuXHJcbiAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pzcy1zZXJ2ZXItc2lkZVwiKTtcclxuICAgIGlmIChqc3NTdHlsZXMpIHtcclxuICAgICAganNzU3R5bGVzLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHsgcGFnZUFjdGl2ZSwgbG9hZGluZywgZGVza3RvcCwgaGFuZGxlTG9hZGluZywgaGFuZGxlQ2hhbmdlUGFnZSB9ID1cclxuICAgIHVzZUxheW91dCgpO1xyXG5cclxuICBjb25zdCB7IHNldERyYXdlciwgdG9nZ2xlRHJhd2VyLCBwb3NpdGlvbkRyYXdlciwgdHlwZURyYXdlciwgZHJhd2VyIH0gPVxyXG4gICAgdXNlRHJhd2VyKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5NeSBwYWdlPC90aXRsZT5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJtaW5pbXVtLXNjYWxlPTEsIGluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgey8qIENzc0Jhc2VsaW5lIGtpY2tzdGFydCBhbiBlbGVnYW50LCBjb25zaXN0ZW50LCBhbmQgc2ltcGxlIGJhc2VsaW5lIHRvIGJ1aWxkIHVwb24uICovfVxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxMYXlvdXRcclxuICAgICAgICAgIHBhZ2VBY3RpdmU9e3BhZ2VBY3RpdmV9XHJcbiAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgZGVza3RvcD17ZGVza3RvcH1cclxuICAgICAgICAgIGhhbmRsZUxvYWRpbmc9e2hhbmRsZUxvYWRpbmd9XHJcbiAgICAgICAgICBoYW5kbGVDaGFuZ2VQYWdlPXtoYW5kbGVDaGFuZ2VQYWdlfVxyXG4gICAgICAgICAgdG9nZ2xlRHJhd2VyPXt0b2dnbGVEcmF3ZXJ9XHJcbiAgICAgICAgICBwb3NpdGlvbkRyYXdlcj17cG9zaXRpb25EcmF3ZXJ9XHJcbiAgICAgICAgICB0eXBlRHJhd2VyPXt0eXBlRHJhd2VyfVxyXG4gICAgICAgICAgZHJhd2VyPXtkcmF3ZXJ9XHJcbiAgICAgICAgICBzZXREcmF3ZXI9e3NldERyYXdlcn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGRlc2t0b3A9e2Rlc2t0b3B9IGhhbmRsZUNoYW5nZVBhZ2U9e2hhbmRsZUNoYW5nZVBhZ2V9IC8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuTXlBcHAucHJvcFR5cGVzID0ge1xyXG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbiAgcGFnZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=