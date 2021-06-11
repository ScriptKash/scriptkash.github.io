self["webpackHotUpdate_N_E"]("pages/skills",{

/***/ "./pages/skills.jsx":
/*!**************************!*\
  !*** ./pages/skills.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Settings */ "./node_modules/@material-ui/icons/Settings.js");
/* harmony import */ var _material_ui_icons_Brush__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Brush */ "./node_modules/@material-ui/icons/Brush.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _data_skills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/skills */ "./data/skills.js");
/* harmony import */ var _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/colors.theme */ "./theme/colors.theme.js");
/* harmony import */ var _material_ui_icons_SentimentVerySatisfied__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/SentimentVerySatisfied */ "./node_modules/@material-ui/icons/SentimentVerySatisfied.js");
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Head */ "./components/Head.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\web personal\\web-personal-nextjs\\pages\\skills.jsx",
    _this = undefined,
    _s = $RefreshSig$();









var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.makeStyles)(function (theme) {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.createStyles)({
    divider: {
      height: 170,
      background: 'url(/assets/images/wave.png)',
      backgroundSize: 'cover'
    },
    devSkills: {
      transition: 'all ease .30s',
      cursor: 'pointer',
      width: 100,
      height: 100,
      borderRadius: 360,
      backgroundColor: (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.fade)(_theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.blueFernando, 0.4),
      color: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.blueFernando,
      border: "2px solid ".concat(_theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.blueFernando),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:hover': {
        transition: 'all ease .30s',
        color: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.white,
        backgroundColor: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.blueFernando
      }
    },
    devSkillsActive: {
      cursor: 'pointer',
      width: 100,
      height: 100,
      borderRadius: 360,
      backgroundColor: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.blueFernando,
      color: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.white,
      border: "2px solid ".concat(_theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.blueFernando),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    designSkills: {
      transition: 'all ease .30s',
      cursor: 'pointer',
      width: 100,
      height: 100,
      borderRadius: 360,
      backgroundColor: (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.fade)(_theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.orange, 0.4),
      color: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.orange,
      border: "2px solid ".concat(_theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.orange),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:hover': {
        transition: 'all ease .30s',
        color: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.white,
        backgroundColor: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.orange
      }
    },
    designSkillsActive: {
      cursor: 'pointer',
      width: 100,
      height: 100,
      borderRadius: 360,
      backgroundColor: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.orange,
      color: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.white,
      border: "2px solid ".concat(_theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.orange),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    softSkills: {
      transition: 'all ease .30s',
      cursor: 'pointer',
      width: 100,
      height: 100,
      borderRadius: 360,
      backgroundColor: (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.fade)(_theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.redLight, 0.4),
      color: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.redLight,
      border: "2px solid ".concat(_theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.redLight),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:hover': {
        transition: 'all ease .30s',
        color: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.white,
        backgroundColor: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.redLight
      }
    },
    softSkillsActive: {
      cursor: 'pointer',
      width: 100,
      height: 100,
      borderRadius: 360,
      backgroundColor: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.redLight,
      color: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.white,
      border: "2px solid ".concat(_theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.redLight),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    devBox: {
      borderRadius: 10,
      width: '100%',
      textAlign: 'center',
      transition: 'all ease .30s',
      cursor: 'default',
      backgroundColor: (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.fade)(_theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.blueFernando, 0.4),
      color: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.blueFernando,
      border: "2px solid ".concat(_theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.blueFernando),
      '&:hover': {
        color: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.white,
        backgroundColor: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.blueFernando
      }
    },
    designBox: {
      borderRadius: 10,
      width: '100%',
      textAlign: 'center',
      transition: 'all ease .30s',
      cursor: 'default',
      backgroundColor: (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.fade)(_theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.orange, 0.4),
      color: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.orange,
      border: "2px solid ".concat(_theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.orange),
      '&:hover': {
        color: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.white,
        backgroundColor: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.orange
      }
    },
    softBox: {
      borderRadius: 10,
      width: '100%',
      textAlign: 'center',
      transition: 'all ease .30s',
      cursor: 'default',
      backgroundColor: (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.fade)(_theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.redLight, 0.4),
      color: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.redLight,
      border: "2px solid ".concat(_theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.redLight),
      '&:hover': {
        color: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.white,
        backgroundColor: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.redLight
      }
    }
  });
});

var Skills = function Skills(_ref) {
  _s();

  var handleChangePage = _ref.handleChangePage;
  var classes = useStyles();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      skillActive = _useState[0],
      setSkillActive = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.blueFernando),
      colorShadow = _useState2[0],
      setColorShadow = _useState2[1];

  var devSkills = _data_skills__WEBPACK_IMPORTED_MODULE_2__.skills.devSkills,
      designerSkills = _data_skills__WEBPACK_IMPORTED_MODULE_2__.skills.designerSkills,
      softSkills = _data_skills__WEBPACK_IMPORTED_MODULE_2__.skills.softSkills;
  var devSorted = devSkills.sort(function (a, b) {
    if (a.skill > b.skill) {
      return 1;
    }

    if (a.skill < b.skill) {
      return -1;
    } // a must be equal to b


    return 0;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    handleChangePage(2);
  }, []); //eslint-disable-line

  var handleChangeSkill = function handleChangeSkill(number) {
    setSkillActive(number);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (skillActive === 0) {
      setColorShadow(_theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.blueFernando);
    }

    if (skillActive === 1) {
      setColorShadow(_theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.orange);
    }

    if (skillActive === 2) {
      setColorShadow(_theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.redLight);
    }
  }, [skillActive]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Head__WEBPACK_IMPORTED_MODULE_4__.default, {
      title: "Skills"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
      height: "100%",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
        className: classes.divider,
        style: {
          backgroundColor: colorShadow
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
        p: 4,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Grid, {
          container: true,
          alignItems: "flex-start",
          justify: "center",
          spacing: 2,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Grid, {
            item: true,
            xs: 12,
            md: 4,
            lg: 4,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
              textAlign: "center",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                variant: "h1",
                style: {
                  fontWeight: 800,
                  textShadow: "4px 4px 0px ".concat(colorShadow)
                },
                children: "Skills"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
              display: "flex",
              mt: 2,
              justifyContent: "center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
                title: "Developer Skills",
                placement: "top",
                arrow: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
                  onClick: function onClick() {
                    return handleChangeSkill(0);
                  },
                  mr: 2,
                  className: skillActive === 0 ? classes.devSkillsActive : classes.devSkills,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_6__.default, {
                    style: {
                      fontSize: '3rem'
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 226,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
                title: "Designer Skills",
                placement: "top",
                arrow: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
                  onClick: function onClick() {
                    return handleChangeSkill(1);
                  },
                  mr: 2,
                  className: skillActive === 1 ? classes.designSkillsActive : classes.designSkills,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Brush__WEBPACK_IMPORTED_MODULE_7__.default, {
                    style: {
                      fontSize: '3rem'
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 237,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 230,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
                title: "Soft Skills",
                placement: "top",
                arrow: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
                  onClick: function onClick() {
                    return handleChangeSkill(2);
                  },
                  className: skillActive === 2 ? classes.softSkillsActive : classes.softSkills,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_SentimentVerySatisfied__WEBPACK_IMPORTED_MODULE_8__.default, {
                    style: {
                      fontSize: '3rem'
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 245,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 241,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 240,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Grid, {
            item: true,
            xs: 12,
            md: 8,
            lg: 8,
            children: [skillActive === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Grid, {
              container: true,
              spacing: 2,
              children: devSorted.map(function (dev) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                  item: true,
                  xs: 6,
                  sm: 4,
                  md: 4,
                  lg: 2,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
                    title: dev.techologie,
                    arrow: true,
                    placement: "top",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Zoom, {
                      timeout: 500,
                      "in": true,
                      disableStrictModeCompat: true,
                      className: classes.devBox,
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
                        position: "relative",
                        height: "100%",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
                          p: 5,
                          textAlign: "center",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                            src: dev.img,
                            alt: dev.techologie,
                            style: {
                              width: '100%',
                              minWidth: 30
                            }
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 264,
                            columnNumber: 31
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 263,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
                          style: {
                            borderBottomLeftRadius: 6,
                            borderBottomRightRadius: 6
                          },
                          position: "absolute",
                          width: "100%",
                          bottom: 0,
                          bgcolor: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.blueFernando,
                          color: "#000572",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                            variant: "body2",
                            style: {
                              fontWeight: 700
                            },
                            children: dev.skill
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 281,
                            columnNumber: 31
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 270,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 262,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 256,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 255,
                    columnNumber: 23
                  }, _this)
                }, dev.techologie, false, {
                  fileName: _jsxFileName,
                  lineNumber: 254,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 17
            }, _this), skillActive === 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Grid, {
              container: true,
              spacing: 2,
              children: designerSkills.map(function (design) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                  item: true,
                  xs: 6,
                  sm: 4,
                  md: 4,
                  lg: 2,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
                    title: design.techologie,
                    arrow: true,
                    placement: "top",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Zoom, {
                      timeout: 500,
                      "in": true,
                      disableStrictModeCompat: true,
                      className: classes.designBox,
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
                        position: "relative",
                        height: "100%",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
                          p: 5,
                          textAlign: "center",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                            src: design.img,
                            alt: design.techologie,
                            style: {
                              width: '100%',
                              minWidth: 30
                            }
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 306,
                            columnNumber: 31
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 305,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
                          style: {
                            borderBottomLeftRadius: 6,
                            borderBottomRightRadius: 6
                          },
                          position: "absolute",
                          width: "100%",
                          bottom: 0,
                          bgcolor: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.orange,
                          color: "#5b4000",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                            variant: "body2",
                            style: {
                              fontWeight: 700
                            },
                            children: design.skill
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 323,
                            columnNumber: 31
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 312,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 304,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 298,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 297,
                    columnNumber: 23
                  }, _this)
                }, design.techologie, false, {
                  fileName: _jsxFileName,
                  lineNumber: 296,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 17
            }, _this), skillActive === 2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Grid, {
              container: true,
              spacing: 2,
              children: softSkills.map(function (soft) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                  item: true,
                  xs: 12,
                  sm: 4,
                  md: 4,
                  lg: 4,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Zoom, {
                    timeout: 500,
                    "in": true,
                    disableStrictModeCompat: true,
                    className: classes.softBox,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
                      position: "relative",
                      height: "100%",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
                        p: 5,
                        textAlign: "center",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                          variant: "body2",
                          style: {
                            fontWeight: 700
                          },
                          children: soft.skill
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 347,
                          columnNumber: 29
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 346,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 345,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 339,
                    columnNumber: 23
                  }, _this)
                }, soft.skill, false, {
                  fileName: _jsxFileName,
                  lineNumber: 338,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 336,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Skills, "VKy4g/WdvcPBzYn80P8MDgB957c=", false, function () {
  return [useStyles];
});

_c = Skills;
/* harmony default export */ __webpack_exports__["default"] = (Skills);

var _c;

$RefreshReg$(_c, "Skills");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2tpbGxzLmpzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJkaXZpZGVyIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRTaXplIiwiZGV2U2tpbGxzIiwidHJhbnNpdGlvbiIsImN1cnNvciIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwiZmFkZSIsImNvbG9ycyIsImNvbG9yIiwiYm9yZGVyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJsdWVGZXJuYW5kbyIsImRldlNraWxsc0FjdGl2ZSIsImRlc2lnblNraWxscyIsIm9yYW5nZSIsImRlc2lnblNraWxsc0FjdGl2ZSIsInNvZnRTa2lsbHMiLCJyZWRMaWdodCIsInNvZnRTa2lsbHNBY3RpdmUiLCJkZXZCb3giLCJ0ZXh0QWxpZ24iLCJkZXNpZ25Cb3giLCJzb2Z0Qm94IiwiU2tpbGxzIiwiaGFuZGxlQ2hhbmdlUGFnZSIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsInNraWxsQWN0aXZlIiwic2V0U2tpbGxBY3RpdmUiLCJjb2xvclNoYWRvdyIsInNldENvbG9yU2hhZG93Iiwic2tpbGxzIiwiZGVzaWduZXJTa2lsbHMiLCJkZXZTb3J0ZWQiLCJzb3J0IiwiYSIsImIiLCJza2lsbCIsInVzZUVmZmVjdCIsImhhbmRsZUNoYW5nZVNraWxsIiwibnVtYmVyIiwiZm9udFdlaWdodCIsInRleHRTaGFkb3ciLCJmb250U2l6ZSIsIm1hcCIsImRldiIsInRlY2hvbG9naWUiLCJpbWciLCJtaW5XaWR0aCIsImJvcmRlckJvdHRvbUxlZnRSYWRpdXMiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsImRlc2lnbiIsInNvZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7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QUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQSxrQkFERjtBQW1LRCxDQXhNRDs7R0FBTWQsTTtVQUNZakMsUzs7O0tBRFppQyxNO0FBME1OLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NraWxscy43Mzk3ZWIzNjMzYWU2ODU0NDA4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NldHRpbmdzJztcclxuaW1wb3J0IEJydXNoSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQnJ1c2gnO1xyXG5cclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgY3JlYXRlU3R5bGVzLFxyXG4gIGZhZGUsXHJcbiAgR3JpZCxcclxuICBtYWtlU3R5bGVzLFxyXG4gIFRvb2x0aXAsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBab29tLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgc2tpbGxzIH0gZnJvbSAnLi4vZGF0YS9za2lsbHMnO1xyXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi90aGVtZS9jb2xvcnMudGhlbWUnO1xyXG5cclxuaW1wb3J0IFNlbnRpbWVudFZlcnlTYXRpc2ZpZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZW50aW1lbnRWZXJ5U2F0aXNmaWVkJztcclxuaW1wb3J0IEhlYWRDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PlxyXG4gIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICBkaXZpZGVyOiB7XHJcbiAgICAgIGhlaWdodDogMTcwLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAndXJsKC9hc3NldHMvaW1hZ2VzL3dhdmUucG5nKScsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgfSxcclxuICAgIGRldlNraWxsczoge1xyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIGVhc2UgLjMwcycsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICB3aWR0aDogMTAwLFxyXG4gICAgICBoZWlnaHQ6IDEwMCxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAzNjAsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogZmFkZShjb2xvcnMuYmx1ZUZlcm5hbmRvLCAwLjQpLFxyXG4gICAgICBjb2xvcjogY29sb3JzLmJsdWVGZXJuYW5kbyxcclxuICAgICAgYm9yZGVyOiBgMnB4IHNvbGlkICR7Y29sb3JzLmJsdWVGZXJuYW5kb31gLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgZWFzZSAuMzBzJyxcclxuICAgICAgICBjb2xvcjogY29sb3JzLndoaXRlLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmJsdWVGZXJuYW5kbyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBkZXZTa2lsbHNBY3RpdmU6IHtcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgIGhlaWdodDogMTAwLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDM2MCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuYmx1ZUZlcm5hbmRvLFxyXG4gICAgICBjb2xvcjogY29sb3JzLndoaXRlLFxyXG4gICAgICBib3JkZXI6IGAycHggc29saWQgJHtjb2xvcnMuYmx1ZUZlcm5hbmRvfWAsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBkZXNpZ25Ta2lsbHM6IHtcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCBlYXNlIC4zMHMnLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgaGVpZ2h0OiAxMDAsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMzYwLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUoY29sb3JzLm9yYW5nZSwgMC40KSxcclxuICAgICAgY29sb3I6IGNvbG9ycy5vcmFuZ2UsXHJcbiAgICAgIGJvcmRlcjogYDJweCBzb2xpZCAke2NvbG9ycy5vcmFuZ2V9YCxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIGVhc2UgLjMwcycsXHJcbiAgICAgICAgY29sb3I6IGNvbG9ycy53aGl0ZSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5vcmFuZ2UsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZGVzaWduU2tpbGxzQWN0aXZlOiB7XHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICB3aWR0aDogMTAwLFxyXG4gICAgICBoZWlnaHQ6IDEwMCxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAzNjAsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLm9yYW5nZSxcclxuICAgICAgY29sb3I6IGNvbG9ycy53aGl0ZSxcclxuICAgICAgYm9yZGVyOiBgMnB4IHNvbGlkICR7Y29sb3JzLm9yYW5nZX1gLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgc29mdFNraWxsczoge1xyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIGVhc2UgLjMwcycsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICB3aWR0aDogMTAwLFxyXG4gICAgICBoZWlnaHQ6IDEwMCxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAzNjAsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogZmFkZShjb2xvcnMucmVkTGlnaHQsIDAuNCksXHJcbiAgICAgIGNvbG9yOiBjb2xvcnMucmVkTGlnaHQsXHJcbiAgICAgIGJvcmRlcjogYDJweCBzb2xpZCAke2NvbG9ycy5yZWRMaWdodH1gLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgZWFzZSAuMzBzJyxcclxuICAgICAgICBjb2xvcjogY29sb3JzLndoaXRlLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLnJlZExpZ2h0LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNvZnRTa2lsbHNBY3RpdmU6IHtcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgIGhlaWdodDogMTAwLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDM2MCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMucmVkTGlnaHQsXHJcbiAgICAgIGNvbG9yOiBjb2xvcnMud2hpdGUsXHJcbiAgICAgIGJvcmRlcjogYDJweCBzb2xpZCAke2NvbG9ycy5yZWRMaWdodH1gLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgZGV2Qm94OiB7XHJcbiAgICAgIGJvcmRlclJhZGl1czogMTAsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgZWFzZSAuMzBzJyxcclxuICAgICAgY3Vyc29yOiAnZGVmYXVsdCcsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogZmFkZShjb2xvcnMuYmx1ZUZlcm5hbmRvLCAwLjQpLFxyXG4gICAgICBjb2xvcjogY29sb3JzLmJsdWVGZXJuYW5kbyxcclxuICAgICAgYm9yZGVyOiBgMnB4IHNvbGlkICR7Y29sb3JzLmJsdWVGZXJuYW5kb31gLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBjb2xvcjogY29sb3JzLndoaXRlLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmJsdWVGZXJuYW5kbyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBkZXNpZ25Cb3g6IHtcclxuICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCBlYXNlIC4zMHMnLFxyXG4gICAgICBjdXJzb3I6ICdkZWZhdWx0JyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBmYWRlKGNvbG9ycy5vcmFuZ2UsIDAuNCksXHJcbiAgICAgIGNvbG9yOiBjb2xvcnMub3JhbmdlLFxyXG4gICAgICBib3JkZXI6IGAycHggc29saWQgJHtjb2xvcnMub3JhbmdlfWAsXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGNvbG9yOiBjb2xvcnMud2hpdGUsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMub3JhbmdlLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNvZnRCb3g6IHtcclxuICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCBlYXNlIC4zMHMnLFxyXG4gICAgICBjdXJzb3I6ICdkZWZhdWx0JyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBmYWRlKGNvbG9ycy5yZWRMaWdodCwgMC40KSxcclxuICAgICAgY29sb3I6IGNvbG9ycy5yZWRMaWdodCxcclxuICAgICAgYm9yZGVyOiBgMnB4IHNvbGlkICR7Y29sb3JzLnJlZExpZ2h0fWAsXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGNvbG9yOiBjb2xvcnMud2hpdGUsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMucmVkTGlnaHQsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4pO1xyXG5cclxuY29uc3QgU2tpbGxzID0gKHsgaGFuZGxlQ2hhbmdlUGFnZSB9KSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFtza2lsbEFjdGl2ZSwgc2V0U2tpbGxBY3RpdmVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2NvbG9yU2hhZG93LCBzZXRDb2xvclNoYWRvd10gPSB1c2VTdGF0ZShjb2xvcnMuYmx1ZUZlcm5hbmRvKTtcclxuICBjb25zdCB7IGRldlNraWxscywgZGVzaWduZXJTa2lsbHMsIHNvZnRTa2lsbHMgfSA9IHNraWxscztcclxuXHJcbiAgY29uc3QgZGV2U29ydGVkID0gZGV2U2tpbGxzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgIGlmIChhLnNraWxsID4gYi5za2lsbCkge1xyXG4gICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuICAgIGlmIChhLnNraWxsIDwgYi5za2lsbCkge1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgICAvLyBhIG11c3QgYmUgZXF1YWwgdG8gYlxyXG4gICAgcmV0dXJuIDA7XHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBoYW5kbGVDaGFuZ2VQYWdlKDIpO1xyXG4gIH0sIFtdKTsgLy9lc2xpbnQtZGlzYWJsZS1saW5lXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVNraWxsID0gKG51bWJlcikgPT4ge1xyXG4gICAgc2V0U2tpbGxBY3RpdmUobnVtYmVyKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNraWxsQWN0aXZlID09PSAwKSB7XHJcbiAgICAgIHNldENvbG9yU2hhZG93KGNvbG9ycy5ibHVlRmVybmFuZG8pO1xyXG4gICAgfVxyXG4gICAgaWYgKHNraWxsQWN0aXZlID09PSAxKSB7XHJcbiAgICAgIHNldENvbG9yU2hhZG93KGNvbG9ycy5vcmFuZ2UpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNraWxsQWN0aXZlID09PSAyKSB7XHJcbiAgICAgIHNldENvbG9yU2hhZG93KGNvbG9ycy5yZWRMaWdodCk7XHJcbiAgICB9XHJcbiAgfSwgW3NraWxsQWN0aXZlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZENvbXBvbmVudCB0aXRsZT1cIlNraWxsc1wiIC8+XHJcbiAgICAgIDxCb3ggaGVpZ2h0PVwiMTAwJVwiPlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmRpdmlkZXJ9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY29sb3JTaGFkb3cgfX0gLz5cclxuICAgICAgICA8Qm94IHA9ezR9PlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCIganVzdGlmeT1cImNlbnRlclwiIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9IGxnPXs0fT5cclxuICAgICAgICAgICAgICA8Qm94IHRleHRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImgxXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA4MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFNoYWRvdzogYDRweCA0cHggMHB4ICR7Y29sb3JTaGFkb3d9YCxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgU2tpbGxzXHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIG10PXsyfSBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJEZXZlbG9wZXIgU2tpbGxzXCIgcGxhY2VtZW50PVwidG9wXCIgYXJyb3c+XHJcbiAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDaGFuZ2VTa2lsbCgwKX1cclxuICAgICAgICAgICAgICAgICAgICBtcj17Mn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3NraWxsQWN0aXZlID09PSAwID8gY2xhc3Nlcy5kZXZTa2lsbHNBY3RpdmUgOiBjbGFzc2VzLmRldlNraWxsc31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nc0ljb24gc3R5bGU9e3sgZm9udFNpemU6ICczcmVtJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiRGVzaWduZXIgU2tpbGxzXCIgcGxhY2VtZW50PVwidG9wXCIgYXJyb3c+XHJcbiAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDaGFuZ2VTa2lsbCgxKX1cclxuICAgICAgICAgICAgICAgICAgICBtcj17Mn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2tpbGxBY3RpdmUgPT09IDEgPyBjbGFzc2VzLmRlc2lnblNraWxsc0FjdGl2ZSA6IGNsYXNzZXMuZGVzaWduU2tpbGxzXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJydXNoSWNvbiBzdHlsZT17eyBmb250U2l6ZTogJzNyZW0nIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJTb2Z0IFNraWxsc1wiIHBsYWNlbWVudD1cInRvcFwiIGFycm93PlxyXG4gICAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2hhbmdlU2tpbGwoMil9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtza2lsbEFjdGl2ZSA9PT0gMiA/IGNsYXNzZXMuc29mdFNraWxsc0FjdGl2ZSA6IGNsYXNzZXMuc29mdFNraWxsc31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZW50aW1lbnRWZXJ5U2F0aXNmaWVkSWNvbiBzdHlsZT17eyBmb250U2l6ZTogJzNyZW0nIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17OH0gbGc9ezh9PlxyXG4gICAgICAgICAgICAgIHtza2lsbEFjdGl2ZSA9PT0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgIHtkZXZTb3J0ZWQubWFwKChkZXYpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBrZXk9e2Rldi50ZWNob2xvZ2llfSBpdGVtIHhzPXs2fSBzbT17NH0gbWQ9ezR9IGxnPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPXtkZXYudGVjaG9sb2dpZX0gYXJyb3cgcGxhY2VtZW50PVwidG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxab29tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dD17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVTdHJpY3RNb2RlQ29tcGF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRldkJveH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggcG9zaXRpb249XCJyZWxhdGl2ZVwiIGhlaWdodD1cIjEwMCVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggcD17NX0gdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Rldi5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtkZXYudGVjaG9sb2dpZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBtaW5XaWR0aDogMzAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IDYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IDYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b209ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I9e2NvbG9ycy5ibHVlRmVybmFuZG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzAwMDU3MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDcwMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGV2LnNraWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9ab29tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAge3NraWxsQWN0aXZlID09PSAxICYmIChcclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgICAge2Rlc2lnbmVyU2tpbGxzLm1hcCgoZGVzaWduKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQga2V5PXtkZXNpZ24udGVjaG9sb2dpZX0gaXRlbSB4cz17Nn0gc209ezR9IG1kPXs0fSBsZz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT17ZGVzaWduLnRlY2hvbG9naWV9IGFycm93IHBsYWNlbWVudD1cInRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Wm9vbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ9ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlU3RyaWN0TW9kZUNvbXBhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNpZ25Cb3h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHBvc2l0aW9uPVwicmVsYXRpdmVcIiBoZWlnaHQ9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHA9ezV9IHRleHRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtkZXNpZ24uaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17ZGVzaWduLnRlY2hvbG9naWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgbWluV2lkdGg6IDMwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiA2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiA2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yPXtjb2xvcnMub3JhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiM1YjQwMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBzdHlsZT17eyBmb250V2VpZ2h0OiA3MDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Rlc2lnbi5za2lsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvWm9vbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgIHtza2lsbEFjdGl2ZSA9PT0gMiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgIHtzb2Z0U2tpbGxzLm1hcCgoc29mdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGtleT17c29mdC5za2lsbH0gaXRlbSB4cz17MTJ9IHNtPXs0fSBtZD17NH0gbGc9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFpvb21cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dD17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVN0cmljdE1vZGVDb21wYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNvZnRCb3h9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggcG9zaXRpb249XCJyZWxhdGl2ZVwiIGhlaWdodD1cIjEwMCVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHA9ezV9IHRleHRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgc3R5bGU9e3sgZm9udFdlaWdodDogNzAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c29mdC5za2lsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1pvb20+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNraWxscztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==