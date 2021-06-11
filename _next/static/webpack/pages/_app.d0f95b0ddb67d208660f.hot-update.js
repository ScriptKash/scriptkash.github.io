self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Layout.jsx":
/*!*******************************!*\
  !*** ./components/Layout.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_web_personal_web_personal_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/colors.theme */ "./theme/colors.theme.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_LinearScale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/LinearScale */ "./node_modules/@material-ui/icons/LinearScale.js");
/* harmony import */ var _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Star */ "./node_modules/@material-ui/icons/Star.js");
/* harmony import */ var _material_ui_icons_Brightness7__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Brightness7 */ "./node_modules/@material-ui/icons/Brightness7.js");
/* harmony import */ var _material_ui_icons_Computer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Computer */ "./node_modules/@material-ui/icons/Computer.js");
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/LinkedIn */ "./node_modules/@material-ui/icons/LinkedIn.js");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/GitHub */ "./node_modules/@material-ui/icons/GitHub.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _src_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Link */ "./src/Link.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\web personal\\web-personal-nextjs\\components\\Layout.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_web_personal_web_personal_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.makeStyles)(function (theme) {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.createStyles)({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2),
      outline: 'none'
    },
    title: {
      flexGrow: 1,
      color: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.white,
      fontWeight: 800,
      textTransform: 'uppercase'
    },
    logo: {
      borderRadius: 360,
      width: 50
    },
    menu: {
      padding: 5,
      transition: 'all ease .20s',
      cursor: 'pointer',
      '&:hover': {
        transition: 'all ease .20s',
        backgroundColor: (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.fade)(_theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.blueFernando, 0.5),
        borderRadius: 10
      }
    },
    menuActive: {
      padding: 5,
      cursor: 'pointer',
      backgroundColor: (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.fade)(_theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.blueFernando, 0.5),
      borderRadius: 10,
      color: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.blueFernando,
      border: "2px solid ".concat(_theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.blueFernando)
    },
    menuSocials: {
      padding: 5,
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#000',
        borderRadius: 10
      }
    },
    drawerPaper: {
      padding: 10,
      backgroundColor: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.black,
      backgroundPosition: 'top center'
    },
    anchorLeft: {
      width: 300
    }
  });
});

var Layout = function Layout(_ref) {
  _s();

  var children = _ref.children,
      pageActive = _ref.pageActive,
      loading = _ref.loading,
      desktop = _ref.desktop,
      handleChangePage = _ref.handleChangePage,
      toggleDrawer = _ref.toggleDrawer,
      positionDrawer = _ref.positionDrawer,
      setDrawer = _ref.setDrawer,
      drawer = _ref.drawer;
  var classes = useStyles();
  var menuItem = [{
    name: 'Home',
    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }, _this),
    url: '/'
  }, {
    name: 'Experience',
    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_LinearScale__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }, _this),
    url: '/experience'
  }, {
    name: 'Skills',
    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }, _this),
    url: '/skills'
  }, {
    name: 'Certificates',
    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Brightness7__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }, _this),
    url: '/certificates'
  }, {
    name: 'Projects',
    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Computer__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }, _this),
    url: '/projects'
  }];
  var socials = [{
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/scriptkash/',
    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }, _this)
  }, {
    name: 'GitHub',
    url: 'https://github.com/ScriptKash',
    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }, _this)
  } // {
  //   name: "Blog",
  //   url: "https://www.fernando.gg/blog/",
  //   icon: <FavoriteIcon />,
  // },
  ];

  var closeDrawer = function closeDrawer(number) {
    setDrawer(_objectSpread(_objectSpread({}, drawer), {}, (0,C_web_personal_web_personal_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, positionDrawer, false)));
    handleChangePage(number);
  };

  var openNewTab = function openNewTab(url) {
    window.open(url, '_blank', 'noopener');
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: desktop ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
      display: "flex",
      width: "100%",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
        flexDirection: "column",
        height: "100vh",
        bgcolor: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.black,
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between",
        p: 1,
        style: {
          borderBottomRightRadius: 10
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
          mt: 3,
          onClick: function onClick() {
            return handleChangePage(0);
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Link__WEBPACK_IMPORTED_MODULE_4__.default, {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "./assets/images/logo.png",
              className: classes.logo,
              alt: "Logo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
          children: menuItem.map(function (item, index) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Link__WEBPACK_IMPORTED_MODULE_4__.default, {
              href: item.url,
              style: {
                color: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.white
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
                arrow: true,
                placement: "right",
                title: item.name,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
                  onClick: function onClick() {
                    return handleChangePage(index);
                  },
                  display: "relative",
                  mb: 4,
                  className: pageActive === index ? classes.menuActive : classes.menu,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
                    children: item.icon
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 186,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 180,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 19
              }, _this)
            }, item.name, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
          children: socials.map(function (item) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
              onClick: function onClick() {
                return openNewTab(item.url);
              },
              display: "relative",
              mb: 2,
              className: classes.menuSocials,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
                arrow: true,
                placement: "right",
                title: item.name,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
                  children: item.icon
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 202,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 201,
                columnNumber: 19
              }, _this)
            }, item.name, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 11
      }, _this), loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "loader",
        className: "loader-container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "loader"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "load-text",
          children: "Loading..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 13
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
        width: "100%",
        position: "relative",
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 9
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "loader",
        className: "loader-container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "loader"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "load-text",
          children: "Loading..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 13
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes.root,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.AppBar, {
            style: {
              height: 60,
              backgroundColor: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.black
            },
            position: "fixed",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Toolbar, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.IconButton, {
                onClick: toggleDrawer('left', true, 'principal-menu'),
                edge: "start",
                className: classes.menuButton,
                color: "inherit",
                "aria-label": "menu",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 243,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 236,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Link__WEBPACK_IMPORTED_MODULE_4__.default, {
                href: "/",
                style: {
                  textDecoration: 'none'
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                  onClick: function onClick() {
                    return handleChangePage(0);
                  },
                  variant: "body1",
                  className: classes.title,
                  children: "Fernando.GG"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 246,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 245,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                children: socials.map(function (item) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
                    onClick: function onClick() {
                      return openNewTab(item.url);
                    },
                    mr: 2,
                    style: {
                      cursor: 'pointer'
                    },
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
                      children: item.icon
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 262,
                      columnNumber: 27
                    }, _this)
                  }, item.name, false, {
                    fileName: _jsxFileName,
                    lineNumber: 256,
                    columnNumber: 25
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 254,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 235,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 234,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
          mt: "60px",
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Drawer, {
          classes: {
            paper: classes.drawerPaper,
            paperAnchorLeft: classes.anchorLeft
          },
          anchor: "left",
          open: drawer[positionDrawer],
          onClose: toggleDrawer(positionDrawer, false),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
              textAlign: "center",
              mt: 3,
              mb: 3,
              onClick: function onClick() {
                return closeDrawer(0);
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Link__WEBPACK_IMPORTED_MODULE_4__.default, {
                href: "/",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: "./assets/images/logo.png",
                  style: {
                    width: 100,
                    borderRadius: 360
                  },
                  alt: "Logo"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 284,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 283,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 282,
              columnNumber: 19
            }, _this), menuItem.map(function (item, index) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Link__WEBPACK_IMPORTED_MODULE_4__.default, {
                href: item.url,
                style: {
                  color: _theme_colors_theme__WEBPACK_IMPORTED_MODULE_3__.colors.white,
                  textDecoration: 'none'
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.MenuList, {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {
                    onClick: function onClick() {
                      return closeDrawer(index);
                    },
                    className: pageActive === index ? classes.menuActive : classes.menu,
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.ListItemIcon, {
                      children: item.icon
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 302,
                      columnNumber: 27
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                      style: {
                        fontWeight: 700
                      },
                      children: item.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 303,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 298,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 297,
                  columnNumber: 23
                }, _this)
              }, item.name, false, {
                fileName: _jsxFileName,
                lineNumber: 292,
                columnNumber: 21
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 281,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 15
        }, _this)]
      }, void 0, true)
    }, void 0, false)
  }, void 0, false);
};

_s(Layout, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJmbGV4R3JvdyIsIm1lbnVCdXR0b24iLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJvdXRsaW5lIiwidGl0bGUiLCJjb2xvciIsImNvbG9ycyIsImZvbnRXZWlnaHQiLCJ0ZXh0VHJhbnNmb3JtIiwibG9nbyIsImJvcmRlclJhZGl1cyIsIndpZHRoIiwibWVudSIsInBhZGRpbmciLCJ0cmFuc2l0aW9uIiwiY3Vyc29yIiwiYmFja2dyb3VuZENvbG9yIiwiZmFkZSIsIm1lbnVBY3RpdmUiLCJib3JkZXIiLCJtZW51U29jaWFscyIsImRyYXdlclBhcGVyIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYW5jaG9yTGVmdCIsIkxheW91dCIsImNoaWxkcmVuIiwicGFnZUFjdGl2ZSIsImxvYWRpbmciLCJkZXNrdG9wIiwiaGFuZGxlQ2hhbmdlUGFnZSIsInRvZ2dsZURyYXdlciIsInBvc2l0aW9uRHJhd2VyIiwic2V0RHJhd2VyIiwiZHJhd2VyIiwiY2xhc3NlcyIsIm1lbnVJdGVtIiwibmFtZSIsImljb24iLCJ1cmwiLCJzb2NpYWxzIiwiY2xvc2VEcmF3ZXIiLCJudW1iZXIiLCJvcGVuTmV3VGFiIiwid2luZG93Iiwib3BlbiIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwibWFwIiwiaXRlbSIsImluZGV4Iiwid2hpdGUiLCJoZWlnaHQiLCJibGFjayIsInRleHREZWNvcmF0aW9uIiwicGFwZXIiLCJwYXBlckFuY2hvckxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFlQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsNkRB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QUFDLHVEQUFEO0FBQUEseUNBQ0UsOERBQUMsdURBQUQ7QUFDRSwyQkFBTyxFQUFFO0FBQUEsNkJBQU1aLFdBQVcsQ0FBQ1EsS0FBRCxDQUFqQjtBQUFBLHFCQURYO0FBRUUsNkJBQVMsRUFBRXRCLFVBQVUsS0FBS3NCLEtBQWYsR0FBdUJkLE9BQU8sQ0FBQ2hCLFVBQS9CLEdBQTRDZ0IsT0FBTyxDQUFDdEIsSUFGakU7QUFBQSw0Q0FJRSw4REFBQywyREFBRDtBQUFBLGdDQUFlbUMsSUFBSSxDQUFDVjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUpGLGVBS0UsOERBQUMseURBQUQ7QUFBWSwyQkFBSyxFQUFFO0FBQUU5QixrQ0FBVSxFQUFFO0FBQWQsdUJBQW5CO0FBQUEsZ0NBQXlDd0MsSUFBSSxDQUFDWDtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRixpQkFDT1csSUFBSSxDQUFDWCxJQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRFk7QUFBQSxhQUFiLENBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF4Q0Y7QUFBQTtBQVRKO0FBbkVKLG1CQURGO0FBaUtELENBck9EOztHQUFNWixNO1VBV1k5QixTOzs7S0FYWjhCLE07QUF1T04sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kMGY5NWIwZGRiNjdkMjA4NjYwZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBBcHBCYXIsXHJcbiAgQm94LFxyXG4gIGNyZWF0ZVN0eWxlcyxcclxuICBEcmF3ZXIsXHJcbiAgZmFkZSxcclxuICBJY29uQnV0dG9uLFxyXG4gIExpc3RJdGVtSWNvbixcclxuICBtYWtlU3R5bGVzLFxyXG4gIE1lbnVJdGVtLFxyXG4gIE1lbnVMaXN0LFxyXG4gIFRvb2xiYXIsXHJcbiAgVG9vbHRpcCxcclxuICBUeXBvZ3JhcGh5LFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vdGhlbWUvY29sb3JzLnRoZW1lJztcclxuXHJcbmltcG9ydCBIb21lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZSc7XHJcbmltcG9ydCBMaW5lYXJTY2FsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xpbmVhclNjYWxlJztcclxuaW1wb3J0IFN0YXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdGFyJztcclxuXHJcbmltcG9ydCBCcmlnaHRuZXNzN0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0JyaWdodG5lc3M3JztcclxuaW1wb3J0IENvbXB1dGVySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ29tcHV0ZXInO1xyXG5pbXBvcnQgTGlua2VkSW5JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9MaW5rZWRJbic7XHJcblxyXG5pbXBvcnQgR2l0SHViSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvR2l0SHViJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcclxuaW1wb3J0IExpbmsgZnJvbSAnLi4vc3JjL0xpbmsnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICB9LFxyXG4gICAgbWVudUJ1dHRvbjoge1xyXG4gICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICBjb2xvcjogY29sb3JzLndoaXRlLFxyXG4gICAgICBmb250V2VpZ2h0OiA4MDAsXHJcbiAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG4gICAgfSxcclxuICAgIGxvZ286IHtcclxuICAgICAgYm9yZGVyUmFkaXVzOiAzNjAsXHJcbiAgICAgIHdpZHRoOiA1MCxcclxuICAgIH0sXHJcbiAgICBtZW51OiB7XHJcbiAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgZWFzZSAuMjBzJyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgZWFzZSAuMjBzJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUoY29sb3JzLmJsdWVGZXJuYW5kbywgMC41KSxcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDEwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1lbnVBY3RpdmU6IHtcclxuICAgICAgcGFkZGluZzogNSxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogZmFkZShjb2xvcnMuYmx1ZUZlcm5hbmRvLCAwLjUpLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDEwLFxyXG4gICAgICBjb2xvcjogY29sb3JzLmJsdWVGZXJuYW5kbyxcclxuICAgICAgYm9yZGVyOiBgMnB4IHNvbGlkICR7Y29sb3JzLmJsdWVGZXJuYW5kb31gLFxyXG4gICAgfSxcclxuICAgIG1lbnVTb2NpYWxzOiB7XHJcbiAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwJyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDEwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGRyYXdlclBhcGVyOiB7XHJcbiAgICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5ibGFjayxcclxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAndG9wIGNlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgYW5jaG9yTGVmdDoge1xyXG4gICAgICB3aWR0aDogMzAwLFxyXG4gICAgfSxcclxuICB9KSxcclxuKTtcclxuXHJcbmNvbnN0IExheW91dCA9ICh7XHJcbiAgY2hpbGRyZW4sXHJcbiAgcGFnZUFjdGl2ZSxcclxuICBsb2FkaW5nLFxyXG4gIGRlc2t0b3AsXHJcbiAgaGFuZGxlQ2hhbmdlUGFnZSxcclxuICB0b2dnbGVEcmF3ZXIsXHJcbiAgcG9zaXRpb25EcmF3ZXIsXHJcbiAgc2V0RHJhd2VyLFxyXG4gIGRyYXdlcixcclxufSkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgbWVudUl0ZW0gPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdIb21lJyxcclxuICAgICAgaWNvbjogPEhvbWVJY29uIC8+LFxyXG4gICAgICB1cmw6ICcvJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdFeHBlcmllbmNlJyxcclxuICAgICAgaWNvbjogPExpbmVhclNjYWxlSWNvbiAvPixcclxuICAgICAgdXJsOiAnL2V4cGVyaWVuY2UnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ1NraWxscycsXHJcbiAgICAgIGljb246IDxTdGFySWNvbiAvPixcclxuICAgICAgdXJsOiAnL3NraWxscycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnQ2VydGlmaWNhdGVzJyxcclxuICAgICAgaWNvbjogPEJyaWdodG5lc3M3SWNvbiAvPixcclxuICAgICAgdXJsOiAnL2NlcnRpZmljYXRlcycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnUHJvamVjdHMnLFxyXG4gICAgICBpY29uOiA8Q29tcHV0ZXJJY29uIC8+LFxyXG4gICAgICB1cmw6ICcvcHJvamVjdHMnLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBzb2NpYWxzID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnTGlua2VkSW4nLFxyXG4gICAgICB1cmw6ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vc2NyaXB0a2FzaC8nLFxyXG4gICAgICBpY29uOiA8TGlua2VkSW5JY29uIC8+LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0dpdEh1YicsXHJcbiAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9TY3JpcHRLYXNoJyxcclxuICAgICAgaWNvbjogPEdpdEh1Ykljb24gLz4sXHJcbiAgICB9LFxyXG4gICAgLy8ge1xyXG4gICAgLy8gICBuYW1lOiBcIkJsb2dcIixcclxuICAgIC8vICAgdXJsOiBcImh0dHBzOi8vd3d3LmZlcm5hbmRvLmdnL2Jsb2cvXCIsXHJcbiAgICAvLyAgIGljb246IDxGYXZvcml0ZUljb24gLz4sXHJcbiAgICAvLyB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGNsb3NlRHJhd2VyID0gKG51bWJlcikgPT4ge1xyXG4gICAgc2V0RHJhd2VyKHsgLi4uZHJhd2VyLCBbcG9zaXRpb25EcmF3ZXJdOiBmYWxzZSB9KTtcclxuICAgIGhhbmRsZUNoYW5nZVBhZ2UobnVtYmVyKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvcGVuTmV3VGFiID0gKHVybCkgPT4ge1xyXG4gICAgd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJywgJ25vb3BlbmVyJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtkZXNrdG9wID8gKFxyXG4gICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiB3aWR0aD1cIjEwMCVcIj5cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjEwMHZoXCJcclxuICAgICAgICAgICAgYmdjb2xvcj17Y29sb3JzLmJsYWNrfVxyXG4gICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgICAgICAgIHA9ezF9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IDEwLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Qm94IG10PXszfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDaGFuZ2VQYWdlKDApfT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmdcIiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb30gYWx0PVwiTG9nb1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgICB7bWVudUl0ZW0ubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPExpbmsga2V5PXtpdGVtLm5hbWV9IGhyZWY9e2l0ZW0udXJsfSBzdHlsZT17eyBjb2xvcjogY29sb3JzLndoaXRlIH19PlxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBhcnJvdyBwbGFjZW1lbnQ9XCJyaWdodFwiIHRpdGxlPXtpdGVtLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNoYW5nZVBhZ2UoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheT1cInJlbGF0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG1iPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwYWdlQWN0aXZlID09PSBpbmRleCA/IGNsYXNzZXMubWVudUFjdGl2ZSA6IGNsYXNzZXMubWVudX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Qm94PntpdGVtLmljb259PC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAge3NvY2lhbHMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5OZXdUYWIoaXRlbS51cmwpfVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgZGlzcGxheT1cInJlbGF0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgbWI9ezJ9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51U29jaWFsc31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgYXJyb3cgcGxhY2VtZW50PVwicmlnaHRcIiB0aXRsZT17aXRlbS5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94PntpdGVtLmljb259PC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibG9hZGVyXCIgY2xhc3NOYW1lPVwibG9hZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWQtdGV4dFwiPkxvYWRpbmcuLi48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8Qm94IHdpZHRoPVwiMTAwJVwiIHBvc2l0aW9uPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2FkZXJcIiBjbGFzc05hbWU9XCJsb2FkZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZC10ZXh0XCI+TG9hZGluZy4uLjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgICAgICA8QXBwQmFyIHN0eWxlPXt7IGhlaWdodDogNjAsIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmJsYWNrIH19IHBvc2l0aW9uPVwiZml4ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcignbGVmdCcsIHRydWUsICdwcmluY2lwYWwtbWVudScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJtZW51XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2hhbmdlUGFnZSgwKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGZXJuYW5kby5HR1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPVwiMTAwJVwiIGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3NvY2lhbHMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcGVuTmV3VGFiKGl0ZW0udXJsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtcj17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveD57aXRlbS5pY29ufTwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPEJveCBtdD1cIjYwcHhcIj57Y2hpbGRyZW59PC9Cb3g+XHJcblxyXG4gICAgICAgICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgICAgcGFwZXI6IGNsYXNzZXMuZHJhd2VyUGFwZXIsXHJcbiAgICAgICAgICAgICAgICAgIHBhcGVyQW5jaG9yTGVmdDogY2xhc3Nlcy5hbmNob3JMZWZ0LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGFuY2hvcj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgb3Blbj17ZHJhd2VyW3Bvc2l0aW9uRHJhd2VyXX1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RvZ2dsZURyYXdlcihwb3NpdGlvbkRyYXdlciwgZmFsc2UpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICAgIDxCb3ggdGV4dEFsaWduPVwiY2VudGVyXCIgbXQ9ezN9IG1iPXszfSBvbkNsaWNrPXsoKSA9PiBjbG9zZURyYXdlcigwKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDEwMCwgYm9yZGVyUmFkaXVzOiAzNjAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiTG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgIHttZW51SXRlbS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogY29sb3JzLndoaXRlLCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjbG9zZURyYXdlcihpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwYWdlQWN0aXZlID09PSBpbmRleCA/IGNsYXNzZXMubWVudUFjdGl2ZSA6IGNsYXNzZXMubWVudX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+e2l0ZW0uaWNvbn08L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzdHlsZT17eyBmb250V2VpZ2h0OiA3MDAgfX0+e2l0ZW0ubmFtZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L01lbnVMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==