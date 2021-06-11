self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/home.jsx":
/*!************************!*\
  !*** ./pages/home.jsx ***!
  \************************/
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



var _jsxFileName = "C:\\web personal\\web-personal-nextjs\\pages\\home.jsx",
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


/***/ }),

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
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./pages/home.jsx");
/* harmony import */ var _hooks_useLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useLayout */ "./hooks/useLayout.js");
/* harmony import */ var _hooks_useDrawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useDrawer */ "./hooks/useDrawer.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\web personal\\web-personal-nextjs\\pages\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();







var Index = function Index() {
  _s();

  var _useLayout = (0,_hooks_useLayout__WEBPACK_IMPORTED_MODULE_3__.default)(),
      pageActive = _useLayout.pageActive,
      loading = _useLayout.loading,
      desktop = _useLayout.desktop,
      handleLoading = _useLayout.handleLoading,
      handleChangePage = _useLayout.handleChangePage;

  var _useDrawer = (0,_hooks_useDrawer__WEBPACK_IMPORTED_MODULE_4__.default)(),
      setDrawer = _useDrawer.setDrawer,
      toggleDrawer = _useDrawer.toggleDrawer,
      positionDrawer = _useDrawer.positionDrawer,
      typeDrawer = _useDrawer.typeDrawer,
      drawer = _useDrawer.drawer;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__.default, {
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
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(Index, "gJPysG3SUiQYar3DY+V9ekUG3s0=", false, function () {
  return [_hooks_useLayout__WEBPACK_IMPORTED_MODULE_3__.default, _hooks_useDrawer__WEBPACK_IMPORTED_MODULE_4__.default];
});

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJIb21lIiwiZGVza3RvcCIsImltYWdlcyIsImNoYXJhY3RlciIsImJhY2tncm91bmQiLCJpbWFnZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsInJlbmRlckxvYWRlciIsIndpZHRoIiwibWF4V2lkdGgiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJjb2xvcnMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmYWRlIiwiY29sb3IiLCJmb250V2VpZ2h0IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJJbmRleCIsInVzZUxheW91dCIsInBhZ2VBY3RpdmUiLCJsb2FkaW5nIiwiaGFuZGxlTG9hZGluZyIsImhhbmRsZUNoYW5nZVBhZ2UiLCJ1c2VEcmF3ZXIiLCJzZXREcmF3ZXIiLCJ0b2dnbGVEcmF3ZXIiLCJwb3NpdGlvbkRyYXdlciIsInR5cGVEcmF3ZXIiLCJkcmF3ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQzVCLE1BQU1DLE1BQU0sR0FBRyxDQUNiO0FBQ0VDLGFBQVMsRUFBRSxzQ0FEYjtBQUVFQyxjQUFVLEVBQUU7QUFGZCxHQURhLEVBS2I7QUFDRUQsYUFBUyxFQUFFLHdDQURiO0FBRUVDLGNBQVUsRUFBRTtBQUZkLEdBTGEsRUFTYjtBQUNFRCxhQUFTLEVBQUUsMENBRGI7QUFFRUMsY0FBVSxFQUFFO0FBRmQsR0FUYSxFQWFiO0FBQ0VELGFBQVMsRUFBRSx3Q0FEYjtBQUVFQyxjQUFVLEVBQUU7QUFGZCxHQWJhLENBQWY7QUFtQkEsTUFBTUMsS0FBSyxHQUFHSCxNQUFNLENBQUNJLElBQUksQ0FBQ0Ms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QUFrQkQsQ0F6QkQ7O0dBQU1QLEs7VUFFRkMscUQsRUFHQUsscUQ7OztLQUxFTixLO0FBMkJOLCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjlmZWM2NmRjMGEwZTdkZDQyOTg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJveCwgRmFkZSwgZmFkZSwgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tIFwiLi4vdGhlbWUvY29sb3JzLnRoZW1lXCI7XHJcblxyXG5jb25zdCBIb21lID0gKHsgZGVza3RvcCB9KSA9PiB7XHJcbiAgY29uc3QgaW1hZ2VzID0gW1xyXG4gICAge1xyXG4gICAgICBjaGFyYWN0ZXI6IFwiL2Fzc2V0cy9pbWFnZXMvcGFyYWxsYXgvcnl6ZS1taW4ucG5nXCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwiL2Fzc2V0cy9pbWFnZXMvcGFyYWxsYXgvYmFja2dyb3VuZC5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNoYXJhY3RlcjogXCIvYXNzZXRzL2ltYWdlcy9wYXJhbGxheC9iYXRtYW4tbWluLnBuZ1wiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcIi9hc3NldHMvaW1hZ2VzL3BhcmFsbGF4L2JhY2tncm91bmQuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjaGFyYWN0ZXI6IFwiL2Fzc2V0cy9pbWFnZXMvcGFyYWxsYXgvZGVhZHBvb2wtbWluLnBuZ1wiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcIi9hc3NldHMvaW1hZ2VzL3BhcmFsbGF4L2JhY2tncm91bmQuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjaGFyYWN0ZXI6IFwiL2Fzc2V0cy9pbWFnZXMvcGFyYWxsYXgvc3BpZGVyLW1pbi5wbmdcIixcclxuICAgICAgYmFja2dyb3VuZDogXCIvYXNzZXRzL2ltYWdlcy9wYXJhbGxheC9iYWNrZ3JvdW5kLmpwZ1wiLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBpbWFnZSA9IGltYWdlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpbWFnZXMubGVuZ3RoKV07XHJcblxyXG4gIGNvbnN0IHJlbmRlckxvYWRlciA9ICgpID0+IFwiXCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7ZGVza3RvcCA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICB6SW5kZXg9ezEwfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezN9PlxyXG4gICAgICAgICAgICAgICAgPEZhZGUgdGltZW91dD17NTAwfSBpbj17dHJ1ZX0gZGlzYWJsZVN0cmljdE1vZGVDb21wYXQ+XHJcbiAgICAgICAgICAgICAgICAgIDxCb3ggdGV4dEFsaWduPVwiY2VudGVyXCIgbXI9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDMwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAzNjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDVweCBzb2xpZCAke2NvbG9ycy5ibHVlRmVybmFuZG99YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBmYWRlKGNvbG9ycy5ibHVlRmVybmFuZG8sIDAuNSksXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi9hc3NldHMvaW1hZ2VzL21lLW1pbi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiRmVybmFuZG8gQnJpY2XDsW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IG1kPXs2fSBsZz17NH0+XHJcbiAgICAgICAgICAgICAgICA8RmFkZSB0aW1lb3V0PXs1MDB9IGluPXt0cnVlfSBkaXNhYmxlU3RyaWN0TW9kZUNvbXBhdD5cclxuICAgICAgICAgICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PXtkZXNrdG9wID8gXCJoM1wiIDogXCJoNlwifSBjb21wb25lbnQ9XCJoMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgSSdtIEZlcm5hbmRvLFxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PXtkZXNrdG9wID8gXCJoM1wiIDogXCJoNlwifSBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU29mdHdhcmUgRW5naW5lZXJcclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogZmFkZShjb2xvcnMud2hpdGUsIDAuNikgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgzXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBGcm9udGVuZCBEZXZlbG9wZXJcclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggbWI9ezF9IG10PXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSSdtIDxzcGFuIGNsYXNzTmFtZT1cImFib3V0LWJvbGRcIj5GZXJuYW5kbyBCcmljZcOxbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLCBhIFNvZnR3YXJlIEVuZ2luZWVyIGZyb217XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFib3V0LWJvbGRcIj5Db3N0YSBSaWNhPC9zcGFuPiwgd2hvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvdmVzIGFuZCBpcyBwYXNzaW9uYXRlIGFib3V0IHRlY2hub2xvZ3kgYW5kIHZpZGVvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVzLiBUcmFpbmVkIHRvIHNvbHZlIHByb2JsZW1zIHdpdGggZGlmZmVyZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvbHV0aW9ucyB1c2luZyBwcm9ncmFtbWluZyBza2lsbHMuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEkgaGF2ZSBleHBlcmllbmNlIGlue1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJvdXQtYm9sZFwiPmZyb250ZW5kPC9zcGFuPiBhbmR7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYm91dC1ib2xkXCI+YmFja2VuZDwvc3Bhbj4gdGVjaG5vbG9naWVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxyXG4gICAgICAgICAgICAgIHpJbmRleD17LTF9XHJcbiAgICAgICAgICAgICAgYmdjb2xvcj17ZmFkZShjb2xvcnMuYmxhY2ssIDAuNil9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDB2aFwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxyXG4gICAgICAgICAgICAgIHpJbmRleD17LTJ9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCguL2Fzc2V0cy9pbWFnZXMvcGFyYWxsYXgvYmFja2dyb3VuZC5qcGcpYCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwdmhcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXHJcbiAgICAgICAgICAgICAgekluZGV4PXstMn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYXJhbGxheC1lbFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlLmNoYXJhY3Rlcn0pYCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKC4vYXNzZXRzL2ltYWdlcy9wYXJhbGxheC9iYWNrZ3JvdW5kLmpwZylgLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjk0dmhcIlxyXG4gICAgICAgICAgICBwPXsyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezN9PlxyXG4gICAgICAgICAgICAgICAgPEZhZGUgdGltZW91dD17NTAwfSBpbj17dHJ1ZX0gZGlzYWJsZVN0cmljdE1vZGVDb21wYXQ+XHJcbiAgICAgICAgICAgICAgICAgIDxCb3ggdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogMTUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDM2MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgNXB4IHNvbGlkICR7Y29sb3JzLmJsdWVGZXJuYW5kb31gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUoY29sb3JzLmJsdWVGZXJuYW5kbywgMC41KSxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuL2Fzc2V0cy9pbWFnZXMvbWUtbWluLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJGZXJuYW5kbyBCcmljZcOxb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17OX0+XHJcbiAgICAgICAgICAgICAgICA8RmFkZSB0aW1lb3V0PXs1MDB9IGluPXt0cnVlfSBkaXNhYmxlU3RyaWN0TW9kZUNvbXBhdD5cclxuICAgICAgICAgICAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17ZGVza3RvcCA/IFwiaDJcIiA6IFwiaDVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDgwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEknbSBGZXJuYW5kbyxcclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e2Rlc2t0b3AgPyBcImgyXCIgOiBcImg1XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250V2VpZ2h0OiA4MDAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTb2Z0d2FyZSBFbmdpbmVlclxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBmYWRlKGNvbG9ycy53aGl0ZSwgMC42KSB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEZyb250ZW5kIERldmVsb3BlclxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICA8L0ZhZGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZhZGUgdGltZW91dD17NTAwfSBpbj17dHJ1ZX0gZGlzYWJsZVN0cmljdE1vZGVDb21wYXQ+XHJcbiAgICAgICAgICAgICAgICAgIDxCb3ggbXQ9ezN9IG1hcmdpblg9ezV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggbWI9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJJ20gPHNwYW4gY2xhc3NOYW1lPVwiYWJvdXQtYm9sZFwiPkZlcm5hbmRvIEJyaWNlw7FvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAsIGEgU29mdHdhcmUgRW5naW5lZXIgZnJvbXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJvdXQtYm9sZFwiPkNvc3RhIFJpY2E8L3NwYW4+LCB3aG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgbG92ZXMgYW5kIGlzIHBhc3Npb25hdGUgYWJvdXQgdGVjaG5vbG9neSBhbmQgdmlkZW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZXMuIFRyYWluZWQgdG8gc29sdmUgcHJvYmxlbXMgd2l0aCBkaWZmZXJlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc29sdXRpb25zIHVzaW5nIHByb2dyYW1taW5nIHNraWxscy5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFdlaWdodDogNjAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgSSBoYXZlIGV4cGVyaWVuY2UgaW57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYm91dC1ib2xkXCI+ZnJvbnRlbmQ8L3NwYW4+IGFuZHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFib3V0LWJvbGRcIj5iYWNrZW5kPC9zcGFuPiB0ZWNobm9sb2dpZXNcclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCB1c2VMYXlvdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUxheW91dFwiO1xyXG5pbXBvcnQgdXNlRHJhd2VyIGZyb20gXCIuLi9ob29rcy91c2VEcmF3ZXJcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgcGFnZUFjdGl2ZSwgbG9hZGluZywgZGVza3RvcCwgaGFuZGxlTG9hZGluZywgaGFuZGxlQ2hhbmdlUGFnZSB9ID1cclxuICAgIHVzZUxheW91dCgpO1xyXG5cclxuICBjb25zdCB7IHNldERyYXdlciwgdG9nZ2xlRHJhd2VyLCBwb3NpdGlvbkRyYXdlciwgdHlwZURyYXdlciwgZHJhd2VyIH0gPVxyXG4gICAgdXNlRHJhd2VyKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGF5b3V0XHJcbiAgICAgICAgcGFnZUFjdGl2ZT17cGFnZUFjdGl2ZX1cclxuICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgIGRlc2t0b3A9e2Rlc2t0b3B9XHJcbiAgICAgICAgaGFuZGxlTG9hZGluZz17aGFuZGxlTG9hZGluZ31cclxuICAgICAgICBoYW5kbGVDaGFuZ2VQYWdlPXtoYW5kbGVDaGFuZ2VQYWdlfVxyXG4gICAgICAgIHRvZ2dsZURyYXdlcj17dG9nZ2xlRHJhd2VyfVxyXG4gICAgICAgIHBvc2l0aW9uRHJhd2VyPXtwb3NpdGlvbkRyYXdlcn1cclxuICAgICAgICB0eXBlRHJhd2VyPXt0eXBlRHJhd2VyfVxyXG4gICAgICAgIGRyYXdlcj17ZHJhd2VyfVxyXG4gICAgICAgIHNldERyYXdlcj17c2V0RHJhd2VyfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEhvbWUgLz5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=