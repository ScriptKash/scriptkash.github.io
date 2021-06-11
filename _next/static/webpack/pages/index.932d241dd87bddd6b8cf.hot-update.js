self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _theme_colors_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/colors.theme */ "./theme/colors.theme.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\web personal\\web-personal-nextjs\\pages\\index.jsx",
    _this = undefined;





var Home = function Home(_ref) {
  var desktop = _ref.desktop;
  var images = [{
    character: "/assets/images/parallax/ryze-min.png",
    background: "/assets/images/parallax/background.jpg"
  }, {
    character: "/assets/images/parallax/batman-min.png",
    background: "/assets/images/parallax/background.jpg"
  }, {
    character: "/assets/images/parallax/deadpool-min.png",
    background: "/assets/images/parallax/background.jpg"
  }, {
    character: "/assets/images/parallax/spider-min.png",
    background: "/assets/images/parallax/background.jpg"
  }];
  var image = images[Math.floor(Math.random() * images.length)];

  var renderLoader = function renderLoader() {
    return "";
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: desktop ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
          container: true,
          alignItems: "center",
          justify: "center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
            item: true,
            xs: 12,
            md: 3,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Fade, {
              timeout: 500,
              "in": true,
              disableStrictModeCompat: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
                textAlign: "center",
                mr: 2,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  style: {
                    width: "100%",
                    maxWidth: 300,
                    borderRadius: 360,
                    border: "5px solid ".concat(_theme_colors_theme__WEBPACK_IMPORTED_MODULE_2__.colors.blueFernando),
                    backgroundColor: (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.fade)(_theme_colors_theme__WEBPACK_IMPORTED_MODULE_2__.colors.blueFernando, 0.5)
                  },
                  src: "./assets/images/me-min.png",
                  alt: "Fernando Brice\xF1o"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
            item: true,
            xs: 12,
            sm: 6,
            md: 6,
            lg: 4,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Fade, {
              timeout: 500,
              "in": true,
              disableStrictModeCompat: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                  variant: desktop ? "h3" : "h6",
                  component: "h1",
                  children: "I'm Fernando,"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                  variant: desktop ? "h3" : "h6",
                  component: "h2",
                  children: "Software Engineer"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                  variant: "h6",
                  style: {
                    color: (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.fade)(_theme_colors_theme__WEBPACK_IMPORTED_MODULE_2__.colors.white, 0.6)
                  },
                  component: "h3",
                  children: "Frontend Developer"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
                  mb: 1,
                  mt: 3,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                    component: "p",
                    variant: "body2",
                    style: {
                      fontWeight: 600
                    },
                    children: ["I'm ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      className: "about-bold",
                      children: "Fernando Brice\xF1o"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 82,
                      columnNumber: 29
                    }, _this), ", a Software Engineer from", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      className: "about-bold",
                      children: "Costa Rica"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 84,
                      columnNumber: 25
                    }, _this), ", who loves and is passionate about technology and video games. Trained to solve problems with different solutions using programming skills."]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                  component: "p",
                  variant: "body2",
                  style: {
                    fontWeight: 600
                  },
                  children: ["I have experience in", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "about-bold",
                    children: "frontend"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 23
                  }, _this), " and", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "about-bold",
                    children: "backend"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 97,
                    columnNumber: 23
                  }, _this), " technologies"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
          height: "100%",
          width: "100%",
          position: "absolute",
          zIndex: -1,
          bgcolor: (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.fade)(_theme_colors_theme__WEBPACK_IMPORTED_MODULE_2__.colors.black, 0.6)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
          height: "100vh",
          width: "100%",
          textAlign: "center",
          position: "absolute",
          zIndex: -2,
          style: {
            backgroundImage: "url(./assets/images/parallax/background.jpg)"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
          height: "100vh",
          width: "100%",
          position: "absolute",
          zIndex: -2,
          className: "parallax-el",
          style: {
            backgroundImage: "url(".concat(image.character, ")"),
            backgroundSize: "cover"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, _this)
    }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
        style: {
          backgroundImage: "url(./assets/images/parallax/background.jpg)"
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "94vh",
        p: 2,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
          container: true,
          justify: "center",
          alignItems: "center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
            item: true,
            xs: 12,
            md: 3,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Fade, {
              timeout: 500,
              "in": true,
              disableStrictModeCompat: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
                textAlign: "center",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  style: {
                    width: "100%",
                    maxWidth: 150,
                    borderRadius: 360,
                    border: "5px solid ".concat(_theme_colors_theme__WEBPACK_IMPORTED_MODULE_2__.colors.blueFernando),
                    backgroundColor: (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.fade)(_theme_colors_theme__WEBPACK_IMPORTED_MODULE_2__.colors.blueFernando, 0.5)
                  },
                  src: "./assets/images/me-min.png",
                  alt: "Fernando Brice\xF1o"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
            item: true,
            xs: 12,
            md: 9,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Fade, {
              timeout: 500,
              "in": true,
              disableStrictModeCompat: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
                textAlign: "center",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                  variant: desktop ? "h2" : "h5",
                  style: {
                    fontWeight: 800
                  },
                  children: "I'm Fernando,"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                  variant: desktop ? "h2" : "h5",
                  style: {
                    fontWeight: 800
                  },
                  children: "Software Engineer"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                  variant: "h6",
                  style: {
                    color: (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.fade)(_theme_colors_theme__WEBPACK_IMPORTED_MODULE_2__.colors.white, 0.6)
                  },
                  children: "Frontend Developer"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 179,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Fade, {
              timeout: 500,
              "in": true,
              disableStrictModeCompat: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
                mt: 3,
                marginX: 5,
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
                  mb: 1,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                    component: "p",
                    variant: "body2",
                    style: {
                      fontWeight: 600
                    },
                    children: ["I'm ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      className: "about-bold",
                      children: "Fernando Brice\xF1o"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 196,
                      columnNumber: 29
                    }, _this), ", a Software Engineer from", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      className: "about-bold",
                      children: "Costa Rica"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 198,
                      columnNumber: 25
                    }, _this), ", who loves and is passionate about technology and video games. Trained to solve problems with different solutions using programming skills."]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 191,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 190,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                  component: "p",
                  variant: "body2",
                  style: {
                    fontWeight: 600
                  },
                  children: ["I have experience in", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "about-bold",
                    children: "frontend"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 210,
                    columnNumber: 23
                  }, _this), " and", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "about-bold",
                    children: "backend"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 211,
                    columnNumber: 23
                  }, _this), " technologies"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 204,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 11
      }, _this)
    }, void 0, false)
  }, void 0, false);
};

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkhvbWUiLCJkZXNrdG9wIiwiaW1hZ2VzIiwiY2hhcmFjdGVyIiwiYmFja2dyb3VuZCIsImltYWdlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwicmVuZGVyTG9hZGVyIiwid2lkdGgiLCJtYXhXaWR0aCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImNvbG9ycyIsImJhY2tncm91bmRDb2xvciIsImZhZGUiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBaUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDNUIsTUFBTUMsTUFBTSxHQUFHLENBQ2I7QUFDRUMsYUFBUyxFQUFFLHNDQURiO0FBRUVDLGNBQVUsRUFBRTtBQUZkLEdBRGEsRUFLYjtBQUNFRCxhQUFTLEVBQUUsd0NBRGI7QUFFRUMsY0FBVSxFQUFFO0FBRmQsR0FMYSxFQVNiO0FBQ0VELGFBQVMsRUFBRSwwQ0FEYjtBQUVFQyxjQUFVLEVBQUU7QUFGZCxHQVRhLEVBYWI7QUFDRUQsYUFBUyxFQUFFLHdDQURiO0FBRUVDLGNBQVUsRUFBRTtBQUZkLEdBYmEsQ0FBZjtBQW1CQSxNQUFNQyxLQUFLLEdBQUdILE1BQU0sQ0FBQ0ksSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQk4sTUFBTSxDQUFDTyxNQUFsQyxDQUFELENBQXBCOztBQUVBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsV0FBTSxFQUFOO0FBQUEsR0FBckI7O0FBRUEsc0JBQ0U7QUFBQSxjQUNHVCxPQUFPLGdCQUNOO0FBQUEsNkJBQ0UsOERBQUMsa0RBQUQ7QUFDRSxhQUFLLEVB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O0FBQ0UsNkJBQVMsRUFBQyxHQURaO0FBRUUsMkJBQU8sRUFBQyxPQUZWO0FBR0UseUJBQUssRUFBRTtBQUFFSSxnQ0FBVSxFQUFFO0FBQWQscUJBSFQ7QUFBQSxvREFLTTtBQUFNLCtCQUFTLEVBQUMsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBTE4sZ0NBTTZCLEdBTjdCLGVBT0U7QUFBTSwrQkFBUyxFQUFDLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFlRSw4REFBQyx5REFBRDtBQUNFLDJCQUFTLEVBQUMsR0FEWjtBQUVFLHlCQUFPLEVBQUMsT0FGVjtBQUdFLHVCQUFLLEVBQUU7QUFBRUEsOEJBQVUsRUFBRTtBQUFkLG1CQUhUO0FBQUEscURBS3VCLEdBTHZCLGVBTUU7QUFBTSw2QkFBUyxFQUFDLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQU5GLFVBTW1ELEdBTm5ELGVBT0U7QUFBTSw2QkFBUyxFQUFDLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQXpHSixtQkFERjtBQWlNRCxDQXpORDs7S0FBTW5CLEk7QUEyTk4sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTMyZDI0MWRkODdiZGRkNmI4Y2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQm94LCBGYWRlLCBmYWRlLCBHcmlkLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gXCIuLi90aGVtZS9jb2xvcnMudGhlbWVcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoeyBkZXNrdG9wIH0pID0+IHtcclxuICBjb25zdCBpbWFnZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIGNoYXJhY3RlcjogXCIvYXNzZXRzL2ltYWdlcy9wYXJhbGxheC9yeXplLW1pbi5wbmdcIixcclxuICAgICAgYmFja2dyb3VuZDogXCIvYXNzZXRzL2ltYWdlcy9wYXJhbGxheC9iYWNrZ3JvdW5kLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY2hhcmFjdGVyOiBcIi9hc3NldHMvaW1hZ2VzL3BhcmFsbGF4L2JhdG1hbi1taW4ucG5nXCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwiL2Fzc2V0cy9pbWFnZXMvcGFyYWxsYXgvYmFja2dyb3VuZC5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNoYXJhY3RlcjogXCIvYXNzZXRzL2ltYWdlcy9wYXJhbGxheC9kZWFkcG9vbC1taW4ucG5nXCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwiL2Fzc2V0cy9pbWFnZXMvcGFyYWxsYXgvYmFja2dyb3VuZC5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNoYXJhY3RlcjogXCIvYXNzZXRzL2ltYWdlcy9wYXJhbGxheC9zcGlkZXItbWluLnBuZ1wiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcIi9hc3NldHMvaW1hZ2VzL3BhcmFsbGF4L2JhY2tncm91bmQuanBnXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGltYWdlID0gaW1hZ2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGltYWdlcy5sZW5ndGgpXTtcclxuXHJcbiAgY29uc3QgcmVuZGVyTG9hZGVyID0gKCkgPT4gXCJcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtkZXNrdG9wID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgICAgIHpJbmRleD17MTB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17M30+XHJcbiAgICAgICAgICAgICAgICA8RmFkZSB0aW1lb3V0PXs1MDB9IGluPXt0cnVlfSBkaXNhYmxlU3RyaWN0TW9kZUNvbXBhdD5cclxuICAgICAgICAgICAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtcj17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDM2MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgNXB4IHNvbGlkICR7Y29sb3JzLmJsdWVGZXJuYW5kb31gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUoY29sb3JzLmJsdWVGZXJuYW5kbywgMC41KSxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuL2Fzc2V0cy9pbWFnZXMvbWUtbWluLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJGZXJuYW5kbyBCcmljZcOxb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezZ9IGxnPXs0fT5cclxuICAgICAgICAgICAgICAgIDxGYWRlIHRpbWVvdXQ9ezUwMH0gaW49e3RydWV9IGRpc2FibGVTdHJpY3RNb2RlQ29tcGF0PlxyXG4gICAgICAgICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9e2Rlc2t0b3AgPyBcImgzXCIgOiBcImg2XCJ9IGNvbXBvbmVudD1cImgxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBJJ20gRmVybmFuZG8sXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9e2Rlc2t0b3AgPyBcImgzXCIgOiBcImg2XCJ9IGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTb2Z0d2FyZSBFbmdpbmVlclxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBmYWRlKGNvbG9ycy53aGl0ZSwgMC42KSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDNcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEZyb250ZW5kIERldmVsb3BlclxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBtYj17MX0gbXQ9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJJ20gPHNwYW4gY2xhc3NOYW1lPVwiYWJvdXQtYm9sZFwiPkZlcm5hbmRvIEJyaWNlw7FvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAsIGEgU29mdHdhcmUgRW5naW5lZXIgZnJvbXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJvdXQtYm9sZFwiPkNvc3RhIFJpY2E8L3NwYW4+LCB3aG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgbG92ZXMgYW5kIGlzIHBhc3Npb25hdGUgYWJvdXQgdGVjaG5vbG9neSBhbmQgdmlkZW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZXMuIFRyYWluZWQgdG8gc29sdmUgcHJvYmxlbXMgd2l0aCBkaWZmZXJlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc29sdXRpb25zIHVzaW5nIHByb2dyYW1taW5nIHNraWxscy5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFdlaWdodDogNjAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgSSBoYXZlIGV4cGVyaWVuY2UgaW57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYm91dC1ib2xkXCI+ZnJvbnRlbmQ8L3NwYW4+IGFuZHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFib3V0LWJvbGRcIj5iYWNrZW5kPC9zcGFuPiB0ZWNobm9sb2dpZXNcclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXHJcbiAgICAgICAgICAgICAgekluZGV4PXstMX1cclxuICAgICAgICAgICAgICBiZ2NvbG9yPXtmYWRlKGNvbG9ycy5ibGFjaywgMC42KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjEwMHZoXCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXHJcbiAgICAgICAgICAgICAgekluZGV4PXstMn1cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKC4vYXNzZXRzL2ltYWdlcy9wYXJhbGxheC9iYWNrZ3JvdW5kLmpwZylgLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDB2aFwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcclxuICAgICAgICAgICAgICB6SW5kZXg9ey0yfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhcmFsbGF4LWVsXCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2UuY2hhcmFjdGVyfSlgLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoLi9hc3NldHMvaW1hZ2VzL3BhcmFsbGF4L2JhY2tncm91bmQuanBnKWAsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcclxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiOTR2aFwiXHJcbiAgICAgICAgICAgIHA9ezJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17M30+XHJcbiAgICAgICAgICAgICAgICA8RmFkZSB0aW1lb3V0PXs1MDB9IGluPXt0cnVlfSBkaXNhYmxlU3RyaWN0TW9kZUNvbXBhdD5cclxuICAgICAgICAgICAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAxNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMzYwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IGA1cHggc29saWQgJHtjb2xvcnMuYmx1ZUZlcm5hbmRvfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZmFkZShjb2xvcnMuYmx1ZUZlcm5hbmRvLCAwLjUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4vYXNzZXRzL2ltYWdlcy9tZS1taW4ucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkZlcm5hbmRvIEJyaWNlw7FvXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs5fT5cclxuICAgICAgICAgICAgICAgIDxGYWRlIHRpbWVvdXQ9ezUwMH0gaW49e3RydWV9IGRpc2FibGVTdHJpY3RNb2RlQ29tcGF0PlxyXG4gICAgICAgICAgICAgICAgICA8Qm94IHRleHRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PXtkZXNrdG9wID8gXCJoMlwiIDogXCJoNVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFdlaWdodDogODAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgSSdtIEZlcm5hbmRvLFxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17ZGVza3RvcCA/IFwiaDJcIiA6IFwiaDVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDgwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFNvZnR3YXJlIEVuZ2luZWVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IGZhZGUoY29sb3JzLndoaXRlLCAwLjYpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRnJvbnRlbmQgRGV2ZWxvcGVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDwvRmFkZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8RmFkZSB0aW1lb3V0PXs1MDB9IGluPXt0cnVlfSBkaXNhYmxlU3RyaWN0TW9kZUNvbXBhdD5cclxuICAgICAgICAgICAgICAgICAgPEJveCBtdD17M30gbWFyZ2luWD17NX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBtYj17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFdlaWdodDogNjAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEknbSA8c3BhbiBjbGFzc05hbWU9XCJhYm91dC1ib2xkXCI+RmVybmFuZG8gQnJpY2XDsW88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICwgYSBTb2Z0d2FyZSBFbmdpbmVlciBmcm9te1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYm91dC1ib2xkXCI+Q29zdGEgUmljYTwvc3Bhbj4sIHdob1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb3ZlcyBhbmQgaXMgcGFzc2lvbmF0ZSBhYm91dCB0ZWNobm9sb2d5IGFuZCB2aWRlb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lcy4gVHJhaW5lZCB0byBzb2x2ZSBwcm9ibGVtcyB3aXRoIGRpZmZlcmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb2x1dGlvbnMgdXNpbmcgcHJvZ3JhbW1pbmcgc2tpbGxzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBJIGhhdmUgZXhwZXJpZW5jZSBpbntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFib3V0LWJvbGRcIj5mcm9udGVuZDwvc3Bhbj4gYW5ke1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJvdXQtYm9sZFwiPmJhY2tlbmQ8L3NwYW4+IHRlY2hub2xvZ2llc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9