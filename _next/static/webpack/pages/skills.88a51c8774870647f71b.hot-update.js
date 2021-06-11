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

  var desktop = _ref.desktop,
      handleChangePage = _ref.handleChangePage;
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
      columnNumber: 5
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
        columnNumber: 7
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
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 13
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
                    columnNumber: 19
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 15
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
                    lineNumber: 235,
                    columnNumber: 19
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 230,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 15
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
                    lineNumber: 243,
                    columnNumber: 19
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 239,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 238,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 11
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
                            lineNumber: 262,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 261,
                          columnNumber: 27
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
                            lineNumber: 279,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 268,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 260,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 254,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 253,
                    columnNumber: 21
                  }, _this)
                }, dev.techologie, false, {
                  fileName: _jsxFileName,
                  lineNumber: 252,
                  columnNumber: 19
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 15
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
                            lineNumber: 304,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 303,
                          columnNumber: 27
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
                            lineNumber: 321,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 310,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 302,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 296,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 295,
                    columnNumber: 21
                  }, _this)
                }, design.techologie, false, {
                  fileName: _jsxFileName,
                  lineNumber: 294,
                  columnNumber: 19
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 292,
              columnNumber: 15
            }, _this), skillActive === 2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Grid, {
              container: true,
              spacing: 2,
              children: softSkills.map(function (soft) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                  item: true,
                  xs: 12,
                  sm: 4,
                  md: 4,
                  lg: 3,
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
                          lineNumber: 345,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 344,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 343,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 337,
                    columnNumber: 21
                  }, _this)
                }, soft.skill, false, {
                  fileName: _jsxFileName,
                  lineNumber: 336,
                  columnNumber: 19
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 334,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 5
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2tpbGxzLmpzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJkaXZpZGVyIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRTaXplIiwiZGV2U2tpbGxzIiwidHJhbnNpdGlvbiIsImN1cnNvciIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwiZmFkZSIsImNvbG9ycyIsImNvbG9yIiwiYm9yZGVyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJsdWVGZXJuYW5kbyIsImRldlNraWxsc0FjdGl2ZSIsImRlc2lnblNraWxscyIsIm9yYW5nZSIsImRlc2lnblNraWxsc0FjdGl2ZSIsInNvZnRTa2lsbHMiLCJyZWRMaWdodCIsInNvZnRTa2lsbHNBY3RpdmUiLCJkZXZCb3giLCJ0ZXh0QWxpZ24iLCJkZXNpZ25Cb3giLCJzb2Z0Qm94IiwiU2tpbGxzIiwiZGVza3RvcCIsImhhbmRsZUNoYW5nZVBhZ2UiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJza2lsbEFjdGl2ZSIsInNldFNraWxsQWN0aXZlIiwiY29sb3JTaGFkb3ciLCJzZXRDb2xvclNoYWRvdyIsInNraWxscyIsImRlc2lnbmVyU2tpbGxzIiwiZGV2U29ydGVkIiwic29ydCIsImEiLCJiIiwic2tpbGwiLCJ1c2VFZmZlY3QiLCJoYW5kbGVDaGFuZ2VTa2lsbCIsIm51bWJlciIsImZvbnRXZWlnaHQiLCJ0ZXh0U2hhZG93IiwiZm9udFNpemUiLCJtYXAiLCJkZXYiLCJ0ZWNob2xvZ2llIiwiaW1nIiwibWluV2lkdGgiLCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzIiwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMiLCJkZXNpZ24iLCJzb2Z0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7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QUFBO0FBQUE7QUFBQSxtQkExQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZBO0FBQUEsa0JBREY7QUFpS0QsQ0F0TUQ7O0dBQU1mLE07VUFDWWpDLFM7OztLQURaaUMsTTtBQXdNTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9za2lsbHMuODhhNTFjODc3NDg3MDY0N2Y3MWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZXR0aW5ncyc7XHJcbmltcG9ydCBCcnVzaEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0JydXNoJztcclxuXHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIGNyZWF0ZVN0eWxlcyxcclxuICBmYWRlLFxyXG4gIEdyaWQsXHJcbiAgbWFrZVN0eWxlcyxcclxuICBUb29sdGlwLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgWm9vbSxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IHNraWxscyB9IGZyb20gJy4uL2RhdGEvc2tpbGxzJztcclxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vdGhlbWUvY29sb3JzLnRoZW1lJztcclxuXHJcbmltcG9ydCBTZW50aW1lbnRWZXJ5U2F0aXNmaWVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VudGltZW50VmVyeVNhdGlzZmllZCc7XHJcbmltcG9ydCBIZWFkQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZCc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT5cclxuICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgZGl2aWRlcjoge1xyXG4gICAgICBoZWlnaHQ6IDE3MCxcclxuICAgICAgYmFja2dyb3VuZDogJ3VybCgvYXNzZXRzL2ltYWdlcy93YXZlLnBuZyknLFxyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgIH0sXHJcbiAgICBkZXZTa2lsbHM6IHtcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCBlYXNlIC4zMHMnLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgaGVpZ2h0OiAxMDAsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMzYwLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUoY29sb3JzLmJsdWVGZXJuYW5kbywgMC40KSxcclxuICAgICAgY29sb3I6IGNvbG9ycy5ibHVlRmVybmFuZG8sXHJcbiAgICAgIGJvcmRlcjogYDJweCBzb2xpZCAke2NvbG9ycy5ibHVlRmVybmFuZG99YCxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIGVhc2UgLjMwcycsXHJcbiAgICAgICAgY29sb3I6IGNvbG9ycy53aGl0ZSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5ibHVlRmVybmFuZG8sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZGV2U2tpbGxzQWN0aXZlOiB7XHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICB3aWR0aDogMTAwLFxyXG4gICAgICBoZWlnaHQ6IDEwMCxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAzNjAsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmJsdWVGZXJuYW5kbyxcclxuICAgICAgY29sb3I6IGNvbG9ycy53aGl0ZSxcclxuICAgICAgYm9yZGVyOiBgMnB4IHNvbGlkICR7Y29sb3JzLmJsdWVGZXJuYW5kb31gLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgZGVzaWduU2tpbGxzOiB7XHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgZWFzZSAuMzBzJyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgIGhlaWdodDogMTAwLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDM2MCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBmYWRlKGNvbG9ycy5vcmFuZ2UsIDAuNCksXHJcbiAgICAgIGNvbG9yOiBjb2xvcnMub3JhbmdlLFxyXG4gICAgICBib3JkZXI6IGAycHggc29saWQgJHtjb2xvcnMub3JhbmdlfWAsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCBlYXNlIC4zMHMnLFxyXG4gICAgICAgIGNvbG9yOiBjb2xvcnMud2hpdGUsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMub3JhbmdlLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGRlc2lnblNraWxsc0FjdGl2ZToge1xyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgaGVpZ2h0OiAxMDAsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMzYwLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5vcmFuZ2UsXHJcbiAgICAgIGNvbG9yOiBjb2xvcnMud2hpdGUsXHJcbiAgICAgIGJvcmRlcjogYDJweCBzb2xpZCAke2NvbG9ycy5vcmFuZ2V9YCxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIHNvZnRTa2lsbHM6IHtcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCBlYXNlIC4zMHMnLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgaGVpZ2h0OiAxMDAsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMzYwLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUoY29sb3JzLnJlZExpZ2h0LCAwLjQpLFxyXG4gICAgICBjb2xvcjogY29sb3JzLnJlZExpZ2h0LFxyXG4gICAgICBib3JkZXI6IGAycHggc29saWQgJHtjb2xvcnMucmVkTGlnaHR9YCxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIGVhc2UgLjMwcycsXHJcbiAgICAgICAgY29sb3I6IGNvbG9ycy53aGl0ZSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5yZWRMaWdodCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzb2Z0U2tpbGxzQWN0aXZlOiB7XHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICB3aWR0aDogMTAwLFxyXG4gICAgICBoZWlnaHQ6IDEwMCxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAzNjAsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLnJlZExpZ2h0LFxyXG4gICAgICBjb2xvcjogY29sb3JzLndoaXRlLFxyXG4gICAgICBib3JkZXI6IGAycHggc29saWQgJHtjb2xvcnMucmVkTGlnaHR9YCxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGRldkJveDoge1xyXG4gICAgICBib3JkZXJSYWRpdXM6IDEwLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIGVhc2UgLjMwcycsXHJcbiAgICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUoY29sb3JzLmJsdWVGZXJuYW5kbywgMC40KSxcclxuICAgICAgY29sb3I6IGNvbG9ycy5ibHVlRmVybmFuZG8sXHJcbiAgICAgIGJvcmRlcjogYDJweCBzb2xpZCAke2NvbG9ycy5ibHVlRmVybmFuZG99YCxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgY29sb3I6IGNvbG9ycy53aGl0ZSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5ibHVlRmVybmFuZG8sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZGVzaWduQm94OiB7XHJcbiAgICAgIGJvcmRlclJhZGl1czogMTAsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgZWFzZSAuMzBzJyxcclxuICAgICAgY3Vyc29yOiAnZGVmYXVsdCcsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogZmFkZShjb2xvcnMub3JhbmdlLCAwLjQpLFxyXG4gICAgICBjb2xvcjogY29sb3JzLm9yYW5nZSxcclxuICAgICAgYm9yZGVyOiBgMnB4IHNvbGlkICR7Y29sb3JzLm9yYW5nZX1gLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBjb2xvcjogY29sb3JzLndoaXRlLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLm9yYW5nZSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzb2Z0Qm94OiB7XHJcbiAgICAgIGJvcmRlclJhZGl1czogMTAsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgZWFzZSAuMzBzJyxcclxuICAgICAgY3Vyc29yOiAnZGVmYXVsdCcsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogZmFkZShjb2xvcnMucmVkTGlnaHQsIDAuNCksXHJcbiAgICAgIGNvbG9yOiBjb2xvcnMucmVkTGlnaHQsXHJcbiAgICAgIGJvcmRlcjogYDJweCBzb2xpZCAke2NvbG9ycy5yZWRMaWdodH1gLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBjb2xvcjogY29sb3JzLndoaXRlLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLnJlZExpZ2h0LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KSxcclxuKTtcclxuXHJcbmNvbnN0IFNraWxscyA9ICh7IGRlc2t0b3AsIGhhbmRsZUNoYW5nZVBhZ2UgfSkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbc2tpbGxBY3RpdmUsIHNldFNraWxsQWN0aXZlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjb2xvclNoYWRvdywgc2V0Q29sb3JTaGFkb3ddID0gdXNlU3RhdGUoY29sb3JzLmJsdWVGZXJuYW5kbyk7XHJcbiAgY29uc3QgeyBkZXZTa2lsbHMsIGRlc2lnbmVyU2tpbGxzLCBzb2Z0U2tpbGxzIH0gPSBza2lsbHM7XHJcblxyXG4gIGNvbnN0IGRldlNvcnRlZCA9IGRldlNraWxscy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICBpZiAoYS5za2lsbCA+IGIuc2tpbGwpIHtcclxuICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcbiAgICBpZiAoYS5za2lsbCA8IGIuc2tpbGwpIHtcclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gICAgLy8gYSBtdXN0IGJlIGVxdWFsIHRvIGJcclxuICAgIHJldHVybiAwO1xyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaGFuZGxlQ2hhbmdlUGFnZSgyKTtcclxuICB9LCBbXSk7IC8vZXNsaW50LWRpc2FibGUtbGluZVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VTa2lsbCA9IChudW1iZXIpID0+IHtcclxuICAgIHNldFNraWxsQWN0aXZlKG51bWJlcik7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChza2lsbEFjdGl2ZSA9PT0gMCkge1xyXG4gICAgICBzZXRDb2xvclNoYWRvdyhjb2xvcnMuYmx1ZUZlcm5hbmRvKTtcclxuICAgIH1cclxuICAgIGlmIChza2lsbEFjdGl2ZSA9PT0gMSkge1xyXG4gICAgICBzZXRDb2xvclNoYWRvdyhjb2xvcnMub3JhbmdlKTtcclxuICAgIH1cclxuICAgIGlmIChza2lsbEFjdGl2ZSA9PT0gMikge1xyXG4gICAgICBzZXRDb2xvclNoYWRvdyhjb2xvcnMucmVkTGlnaHQpO1xyXG4gICAgfVxyXG4gIH0sIFtza2lsbEFjdGl2ZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxIZWFkQ29tcG9uZW50IHRpdGxlPVwiU2tpbGxzXCIgLz5cclxuICAgIDxCb3ggaGVpZ2h0PVwiMTAwJVwiPlxyXG4gICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXZpZGVyfSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yU2hhZG93IH19IC8+XHJcbiAgICAgIDxCb3ggcD17NH0+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCIganVzdGlmeT1cImNlbnRlclwiIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fSBsZz17NH0+XHJcbiAgICAgICAgICAgIDxCb3ggdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoMVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA4MDAsXHJcbiAgICAgICAgICAgICAgICAgIHRleHRTaGFkb3c6IGA0cHggNHB4IDBweCAke2NvbG9yU2hhZG93fWAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFNraWxsc1xyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBtdD17Mn0ganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIkRldmVsb3BlciBTa2lsbHNcIiBwbGFjZW1lbnQ9XCJ0b3BcIiBhcnJvdz5cclxuICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2hhbmdlU2tpbGwoMCl9XHJcbiAgICAgICAgICAgICAgICAgIG1yPXsyfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3NraWxsQWN0aXZlID09PSAwID8gY2xhc3Nlcy5kZXZTa2lsbHNBY3RpdmUgOiBjbGFzc2VzLmRldlNraWxsc31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPFNldHRpbmdzSWNvbiBzdHlsZT17eyBmb250U2l6ZTogJzNyZW0nIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJEZXNpZ25lciBTa2lsbHNcIiBwbGFjZW1lbnQ9XCJ0b3BcIiBhcnJvdz5cclxuICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2hhbmdlU2tpbGwoMSl9XHJcbiAgICAgICAgICAgICAgICAgIG1yPXsyfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3NraWxsQWN0aXZlID09PSAxID8gY2xhc3Nlcy5kZXNpZ25Ta2lsbHNBY3RpdmUgOiBjbGFzc2VzLmRlc2lnblNraWxsc31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEJydXNoSWNvbiBzdHlsZT17eyBmb250U2l6ZTogJzNyZW0nIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJTb2Z0IFNraWxsc1wiIHBsYWNlbWVudD1cInRvcFwiIGFycm93PlxyXG4gICAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDaGFuZ2VTa2lsbCgyKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtza2lsbEFjdGl2ZSA9PT0gMiA/IGNsYXNzZXMuc29mdFNraWxsc0FjdGl2ZSA6IGNsYXNzZXMuc29mdFNraWxsc31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPFNlbnRpbWVudFZlcnlTYXRpc2ZpZWRJY29uIHN0eWxlPXt7IGZvbnRTaXplOiAnM3JlbScgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezh9IGxnPXs4fT5cclxuICAgICAgICAgICAge3NraWxsQWN0aXZlID09PSAwICYmIChcclxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICB7ZGV2U29ydGVkLm1hcCgoZGV2KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGtleT17ZGV2LnRlY2hvbG9naWV9IGl0ZW0geHM9ezZ9IHNtPXs0fSBtZD17NH0gbGc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPXtkZXYudGVjaG9sb2dpZX0gYXJyb3cgcGxhY2VtZW50PVwidG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Wm9vbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0PXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlU3RyaWN0TW9kZUNvbXBhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZGV2Qm94fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHBvc2l0aW9uPVwicmVsYXRpdmVcIiBoZWlnaHQ9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBwPXs1fSB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtkZXYuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2Rldi50ZWNob2xvZ2llfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBtaW5XaWR0aDogMzAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IDYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvcj17Y29sb3JzLmJsdWVGZXJuYW5kb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzAwMDU3MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgc3R5bGU9e3sgZm9udFdlaWdodDogNzAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGV2LnNraWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvWm9vbT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHtza2lsbEFjdGl2ZSA9PT0gMSAmJiAoXHJcbiAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAge2Rlc2lnbmVyU2tpbGxzLm1hcCgoZGVzaWduKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGtleT17ZGVzaWduLnRlY2hvbG9naWV9IGl0ZW0geHM9ezZ9IHNtPXs0fSBtZD17NH0gbGc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPXtkZXNpZ24udGVjaG9sb2dpZX0gYXJyb3cgcGxhY2VtZW50PVwidG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Wm9vbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0PXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlU3RyaWN0TW9kZUNvbXBhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZGVzaWduQm94fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHBvc2l0aW9uPVwicmVsYXRpdmVcIiBoZWlnaHQ9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBwPXs1fSB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtkZXNpZ24uaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2Rlc2lnbi50ZWNob2xvZ2llfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBtaW5XaWR0aDogMzAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IDYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvcj17Y29sb3JzLm9yYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzViNDAwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgc3R5bGU9e3sgZm9udFdlaWdodDogNzAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGVzaWduLnNraWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvWm9vbT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHtza2lsbEFjdGl2ZSA9PT0gMiAmJiAoXHJcbiAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAge3NvZnRTa2lsbHMubWFwKChzb2Z0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGtleT17c29mdC5za2lsbH0gaXRlbSB4cz17MTJ9IHNtPXs0fSBtZD17NH0gbGc9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxab29tXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0PXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVTdHJpY3RNb2RlQ29tcGF0XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc29mdEJveH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Qm94IHBvc2l0aW9uPVwicmVsYXRpdmVcIiBoZWlnaHQ9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggcD17NX0gdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgc3R5bGU9e3sgZm9udFdlaWdodDogNzAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NvZnQuc2tpbGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvWm9vbT5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTa2lsbHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=