self["webpackHotUpdate_N_E"]("pages/experience",{

/***/ "./pages/experience.jsx":
/*!******************************!*\
  !*** ./pages/experience.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _theme_colors_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/colors.theme */ "./theme/colors.theme.js");
/* harmony import */ var _data_experiences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/experiences */ "./data/experiences.js");
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Head */ "./components/Head.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\web personal\\web-personal-nextjs\\pages\\experience.jsx",
    _this = undefined,
    _s = $RefreshSig$();







var Experience = function Experience(_ref) {
  _s();

  var handleChangePage = _ref.handleChangePage,
      desktop = _ref.desktop;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    handleChangePage(1);
  }, []); //eslint-disable-line

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Head__WEBPACK_IMPORTED_MODULE_4__.default, {
      title: "Experience"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
      width: "100%",
      height: "100vh",
      textAlign: "center",
      position: "absolute",
      className: "parallax-el",
      style: {
        backgroundImage: "url(./assets/images/parallax/figures.png)",
        backgroundSize: 'contain',
        opacity: 0.7
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Slide, {
      direction: "top",
      "in": true,
      mountOnEnter: true,
      unmountOnExit: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
        position: "relative",
        mt: desktop ? 15 : 10,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Container, {
          maxWidth: "lg",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
            mb: 2,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
              variant: "h2",
              children: "Experience"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Grid, {
              container: true,
              spacing: 2,
              children: _data_experiences__WEBPACK_IMPORTED_MODULE_3__.experiences.map(function (exp) {
                var isPresent = exp.time.includes('Present');
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                  item: true,
                  xs: 12,
                  md: 4,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
                    clone: true,
                    height: "100%",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Card, {
                      style: {
                        backgroundColor: isPresent ? (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.fade)(_theme_colors_theme__WEBPACK_IMPORTED_MODULE_2__.colors.blueFernando, 0.5) : _theme_colors_theme__WEBPACK_IMPORTED_MODULE_2__.colors.black,
                        border: "3px solid ".concat(isPresent ? _theme_colors_theme__WEBPACK_IMPORTED_MODULE_2__.colors.blueFernando : _theme_colors_theme__WEBPACK_IMPORTED_MODULE_2__.colors.black),
                        borderRadius: 15
                      },
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.CardContent, {
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                          style: {
                            color: (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.fade)(_theme_colors_theme__WEBPACK_IMPORTED_MODULE_2__.colors.white, 0.6)
                          },
                          gutterBottom: true,
                          children: exp.time
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 60,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                          variant: "h6",
                          component: "h2",
                          style: {
                            color: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_2__.colors.white
                          },
                          children: exp.title
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 64,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
                          minHeight: 70,
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                            variant: "body2",
                            component: "p",
                            style: {
                              color: (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.fade)(_theme_colors_theme__WEBPACK_IMPORTED_MODULE_2__.colors.white, 0.8)
                            },
                            children: exp.description
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 68,
                            columnNumber: 31
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 67,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
                          textAlign: "center",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                            src: exp.image,
                            style: {
                              width: 130
                            },
                            alt: exp.title
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 77,
                            columnNumber: 31
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 76,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 59,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 50,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 23
                  }, _this)
                }, exp.title, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Experience, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Experience;
/* harmony default export */ __webpack_exports__["default"] = (Experience);

var _c;

$RefreshReg$(_c, "Experience");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhwZXJpZW5jZS5qc3giXSwibmFtZXMiOlsiRXhwZXJpZW5jZSIsImhhbmRsZUNoYW5nZVBhZ2UiLCJkZXNrdG9wIiwidXNlRWZmZWN0IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJvcGFjaXR5IiwiZXhwZXJpZW5jZXMiLCJleHAiLCJpc1ByZXNlbnQiLCJ0aW1lIiwiaW5jbHVkZXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmYWRlIiwiY29sb3JzIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJ3aGl0ZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFVQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBbUM7QUFBQTs7QUFBQSxNQUFoQ0MsZ0JBQWdDLFFBQWhDQSxnQkFBZ0M7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDcERDLGtEQUFTLENBQUMsWUFBTTtBQUNkRixvQkFBZ0IsQ0FBQyxDQUFELENBQWhCO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVCxDQURvRCxDQUc1Qzs7QUFFUixzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLHFEQUFEO0FBQWUsV0FBSyxFQUFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLDhEQUFDLGtEQUFEO0FBQ0UsV0FBSyxFQUFDLE1BRFI7QUFFRSxZQUFNLEVBQUMsT0FGVDtBQUdFLGVBQVMsRUFBQyxRQUhaO0FBSUUsY0FBUSxFQUFDLFVBSlg7QUFLRSxlQUFTLEVBQUMsYUFMWjtBQU1FLFdBQUssRUFBRTtBQUNMRyx1QkFBZSw2Q0FEVjtBQUVMQyxzQkFBYyxFQUFFLFNBRlg7QUFHTEMsZUFBTyxFQUFFO0FBSEo7QUFOVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFj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O0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBQVdYLEdBQUcsQ0FBQ1csS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGO0FBcUNELGVBdkNBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkRjtBQUFBLGtCQURGO0FBc0VELENBM0VEOztHQUFNbkIsVTs7S0FBQUEsVTtBQTZFTiwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9leHBlcmllbmNlLjQyYWU2MDMwNmNkMmRiMGRmNzQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBDYXJkLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgU2xpZGUsXHJcbiAgQ29udGFpbmVyLFxyXG4gIGZhZGUsXHJcbiAgR3JpZCxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uL3RoZW1lL2NvbG9ycy50aGVtZSc7XHJcblxyXG5pbXBvcnQgeyBleHBlcmllbmNlcyB9IGZyb20gJy4uL2RhdGEvZXhwZXJpZW5jZXMnO1xyXG5pbXBvcnQgSGVhZENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL0hlYWQnO1xyXG5cclxuY29uc3QgRXhwZXJpZW5jZSA9ICh7IGhhbmRsZUNoYW5nZVBhZ2UsIGRlc2t0b3AgfSkgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBoYW5kbGVDaGFuZ2VQYWdlKDEpO1xyXG4gIH0sIFtdKTsgLy9lc2xpbnQtZGlzYWJsZS1saW5lXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZENvbXBvbmVudCB0aXRsZT1cIkV4cGVyaWVuY2VcIiAvPlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICBoZWlnaHQ9XCIxMDB2aFwiXHJcbiAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJwYXJhbGxheC1lbFwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCguL2Fzc2V0cy9pbWFnZXMvcGFyYWxsYXgvZmlndXJlcy5wbmcpYCxcclxuICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY29udGFpbicsXHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjcsXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPFNsaWRlIGRpcmVjdGlvbj1cInRvcFwiIGluPXt0cnVlfSBtb3VudE9uRW50ZXIgdW5tb3VudE9uRXhpdD5cclxuICAgICAgICA8Qm94IHBvc2l0aW9uPVwicmVsYXRpdmVcIiBtdD17ZGVza3RvcCA/IDE1IDogMTB9PlxyXG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCI+XHJcbiAgICAgICAgICAgIDxCb3ggbWI9ezJ9PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPkV4cGVyaWVuY2U8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgIHtleHBlcmllbmNlcy5tYXAoKGV4cCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBpc1ByZXNlbnQgPSBleHAudGltZS5pbmNsdWRlcygnUHJlc2VudCcpO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGtleT17ZXhwLnRpdGxlfSBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJveCBjbG9uZSBoZWlnaHQ9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNQcmVzZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZmFkZShjb2xvcnMuYmx1ZUZlcm5hbmRvLCAwLjUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY29sb3JzLmJsYWNrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgM3B4IHNvbGlkICR7aXNQcmVzZW50ID8gY29sb3JzLmJsdWVGZXJuYW5kbyA6IGNvbG9ycy5ibGFja31gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3sgY29sb3I6IGZhZGUoY29sb3JzLndoaXRlLCAwLjYpIH19IGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2V4cC50aW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImgyXCIgc3R5bGU9e3sgY29sb3I6IGNvbG9ycy53aGl0ZSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2V4cC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggbWluSGVpZ2h0PXs3MH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogZmFkZShjb2xvcnMud2hpdGUsIDAuOCkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtleHAuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2V4cC5pbWFnZX0gc3R5bGU9e3sgd2lkdGg6IDEzMCB9fSBhbHQ9e2V4cC50aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9TbGlkZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBlcmllbmNlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9