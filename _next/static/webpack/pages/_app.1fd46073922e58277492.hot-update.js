self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/Link.js":
/*!*********************!*\
  !*** ./src/Link.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_web_personal_web_personal_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_web_personal_web_personal_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\web personal\\web-personal-nextjs\\src\\Link.js",
    _s = $RefreshSig$(),
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_web_personal_web_personal_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable jsx-a11y/anchor-has-content */






var NextComposed = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().forwardRef(_c = function NextComposed(props, ref) {
  var as = props.as,
      href = props.href,
      other = (0,C_web_personal_web_personal_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(props, ["as", "href"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
    href: href,
    as: as,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", _objectSpread({
      ref: ref
    }, other), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
});
_c2 = NextComposed;
NextComposed.propTypes = {
  as: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)]),
  href: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)]),
  prefetch: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool)
}; // A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link

function Link(props) {
  _s();

  var href = props.href,
      _props$activeClassNam = props.activeClassName,
      activeClassName = _props$activeClassNam === void 0 ? 'active' : _props$activeClassNam,
      classNameProps = props.className,
      innerRef = props.innerRef,
      naked = props.naked,
      other = (0,C_web_personal_web_personal_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(props, ["href", "activeClassName", "className", "innerRef", "naked"]);

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  var pathname = typeof href === 'string' ? href : href.pathname;
  var className = (0,clsx__WEBPACK_IMPORTED_MODULE_5__.default)(classNameProps, (0,C_web_personal_web_personal_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, activeClassName, router.pathname === pathname && activeClassName));

  if (naked) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NextComposed, _objectSpread({
      className: className,
      ref: innerRef,
      href: href
    }, other), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8__.default, _objectSpread({
    component: NextComposed,
    className: className,
    ref: innerRef,
    href: href
  }, other), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

_s(Link, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];
});

_c3 = Link;
Link.propTypes = {
  activeClassName: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  as: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)]),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  href: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)]),
  naked: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  prefetch: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool)
};
/* harmony default export */ __webpack_exports__["default"] = (_c5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().forwardRef(_c4 = function _c4(props, ref) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Link, _objectSpread(_objectSpread({}, props), {}, {
    innerRef: ref
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 49
  }, _this);
}));

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "NextComposed$React.forwardRef");
$RefreshReg$(_c2, "NextComposed");
$RefreshReg$(_c3, "Link");
$RefreshReg$(_c4, "%default%$React.forwardRef");
$RefreshReg$(_c5, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0xpbmsuanMiXSwibmFtZXMiOlsiTmV4dENvbXBvc2VkIiwiUmVhY3QiLCJwcm9wcyIsInJlZiIsImFzIiwiaHJlZiIsIm90aGVyIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwicHJlZmV0Y2giLCJib29sIiwiTGluayIsImFjdGl2ZUNsYXNzTmFtZSIsImNsYXNzTmFtZVByb3BzIiwiY2xhc3NOYW1lIiwiaW5uZXJSZWYiLCJuYWtlZCIsInJvdXRlciIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwiY2xzeCIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksZ0JBQUdDLHVEQUFBLE1BQWlCLFNBQVNELFlBQVQsQ0FBc0JFLEtBQXRCLEVBQTZCQyxHQUE3QixFQUFrQztBQUFBLE1BQzlEQyxFQUQ4RCxHQUN2Q0YsS0FEdUMsQ0FDOURFLEVBRDhEO0FBQUEsTUFDMURDLElBRDBELEdBQ3ZDSCxLQUR1QyxDQUMxREcsSUFEMEQ7QUFBQSxNQUNqREMsS0FEaUQsOElBQ3ZDSixLQUR1Qzs7QUFHdEUsc0JBQ0UsOERBQUMsa0RBQUQ7QUFBVSxRQUFJLEVBQUVHLElBQWhCO0FBQXNCLE1BQUUsRUFBRUQsRUFBMUI7QUFBQSwyQkFDRTtBQUFHLFNBQUcsRUFBRUQ7QUFBUixPQUFpQkcsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtELENBUm9CLENBQXJCO01BQU1OLFk7QUFVTkEsWUFBWSxDQUFDTyxTQUFiLEdBQXlCO0FBQ3ZCSCxJQUFFLEVBQUVJLDJEQUFBLENBQW9CLENBQUNBLDBEQUFELEVBQW1CQSwwREFBbkIsQ0FBcEIsQ0FEbUI7QUFFdkJILE1BQUksRUFBRUcsMkRBQUEsQ0FBb0IsQ0FBQ0EsMERBQUQsRUFBbUJBLDBEQUFuQixDQUFwQixDQUZpQjtBQUd2QkMsVUFBUSxFQUFFRCx3REFBY0U7QUFIRCxDQUF6QixDLENBTUE7QUFDQTs7QUFDQSxTQUFTQyxJQUFULENBQWNULEtBQWQsRUFBcUI7QUFBQTs7QUFBQSxNQUVqQkcsSUFGaUIsR0FRZkgsS0FSZSxDQUVqQkcsSUFGaUI7QUFBQSw4QkFRZkgsS0FSZSxDQUdqQlUsZUFIaUI7QUFBQSxNQUdqQkEsZUFIaUIsc0NBR0MsUUFIRDtBQUFBLE1BSU5DLGNBSk0sR0FRZlgsS0FSZSxDQUlqQlksU0FKaUI7QUFBQSxNQUtqQkMsUUFMaUIsR0FRZmIsS0FSZSxDQUtqQmEsUUFMaUI7QUFBQSxNQU1qQkMsS0FOaUIsR0FRZmQsS0FSZSxDQU1qQmMsS0FOaUI7QUFBQSxNQU9kVixLQVBjLDhJQVFmSixLQVJlOztBQVVuQixNQUFNZSxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLE9BQU9kLElBQVAsS0FBZ0IsUUFBaEIsR0FBMkJBLElBQTNCLEdBQWtDQSxJQUFJLENBQUNjLFFBQXhEO0FBQ0EsTUFBTUwsU0FBUyxHQUFHTSw2Q0FBSSxDQUFDUCxjQUFELHdJQUNuQkQsZUFEbUIsRUFDREssTUFBTSxDQUFDRSxRQUFQLEtBQW9CQSxRQUFwQixJQUFnQ1AsZUFEL0IsRUFBdEI7O0FBSUEsTUFBSUksS0FBSixFQUFXO0FBQ1Qsd0JBQU8sOERBQUMsWUFBRDtBQUFjLGVBQVMsRUFBRUYsU0FBekI7QUFBb0MsU0FBRyxFQUFFQyxRQUF6QztBQUFtRCxVQUFJLEVBQUVWO0FBQXpELE9BQW1FQyxLQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFFRCxzQkFDRSw4REFBQywyREFBRDtBQUFTLGFBQVMsRUFBRU4sWUFBcEI7QUFBa0MsYUFBUyxFQUFFYyxTQUE3QztBQUF3RCxPQUFHLEVBQUVDLFFBQTdEO0FBQXVFLFFBQUksRUFBRVY7QUFBN0UsS0FBdUZDLEtBQXZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUdEOztHQXZCUUssSTtVQVVRTyxrRDs7O01BVlJQLEk7QUF5QlRBLElBQUksQ0FBQ0osU0FBTCxHQUFpQjtBQUNmSyxpQkFBZSxFQUFFSiwwREFERjtBQUVmSixJQUFFLEVBQUVJLDJEQUFBLENBQW9CLENBQUNBLDBEQUFELEVBQW1CQSwwREFBbkIsQ0FBcEIsQ0FGVztBQUdmTSxXQUFTLEVBQUVOLDBEQUhJO0FBSWZILE1BQUksRUFBRUcsMkRBQUEsQ0FBb0IsQ0FBQ0EsMERBQUQsRUFBbUJBLDBEQUFuQixDQUFwQixDQUpTO0FBS2ZPLFVBQVEsRUFBRVAsMkRBQUEsQ0FBb0IsQ0FBQ0Esd0RBQUQsRUFBaUJBLDBEQUFqQixDQUFwQixDQUxLO0FBTWZRLE9BQUssRUFBRVIsd0RBTlE7QUFPZmEsU0FBTyxFQUFFYix3REFQTTtBQVFmQyxVQUFRLEVBQUVELHdEQUFjRTtBQVJULENBQWpCO0FBV0EsK0RBQWUsbUJBQUFULHVEQUFBLE9BQWlCLGFBQUNDLEtBQUQsRUFBUUMsR0FBUjtBQUFBLHNCQUFnQiw4REFBQyxJQUFELGtDQUFVRCxLQUFWO0FBQWlCLFlBQVEsRUFBRUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFoQjtBQUFBLENBQWpCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xZmQ0NjA3MzkyMmU1ODI3NzQ5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWhhcy1jb250ZW50ICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgTXVpTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcclxuXHJcbmNvbnN0IE5leHRDb21wb3NlZCA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTmV4dENvbXBvc2VkKHByb3BzLCByZWYpIHtcclxuICBjb25zdCB7IGFzLCBocmVmLCAuLi5vdGhlciB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TmV4dExpbmsgaHJlZj17aHJlZn0gYXM9e2FzfT5cclxuICAgICAgPGEgcmVmPXtyZWZ9IHsuLi5vdGhlcn0gLz5cclxuICAgIDwvTmV4dExpbms+XHJcbiAgKTtcclxufSk7XHJcblxyXG5OZXh0Q29tcG9zZWQucHJvcFR5cGVzID0ge1xyXG4gIGFzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXHJcbiAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxyXG4gIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbi8vIEEgc3R5bGVkIHZlcnNpb24gb2YgdGhlIE5leHQuanMgTGluayBjb21wb25lbnQ6XHJcbi8vIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzLyN3aXRoLWxpbmtcclxuZnVuY3Rpb24gTGluayhwcm9wcykge1xyXG4gIGNvbnN0IHtcclxuICAgIGhyZWYsXHJcbiAgICBhY3RpdmVDbGFzc05hbWUgPSAnYWN0aXZlJyxcclxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lUHJvcHMsXHJcbiAgICBpbm5lclJlZixcclxuICAgIG5ha2VkLFxyXG4gICAgLi4ub3RoZXJcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHBhdGhuYW1lID0gdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGhyZWYucGF0aG5hbWU7XHJcbiAgY29uc3QgY2xhc3NOYW1lID0gY2xzeChjbGFzc05hbWVQcm9wcywge1xyXG4gICAgW2FjdGl2ZUNsYXNzTmFtZV06IHJvdXRlci5wYXRobmFtZSA9PT0gcGF0aG5hbWUgJiYgYWN0aXZlQ2xhc3NOYW1lLFxyXG4gIH0pO1xyXG5cclxuICBpZiAobmFrZWQpIHtcclxuICAgIHJldHVybiA8TmV4dENvbXBvc2VkIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSByZWY9e2lubmVyUmVmfSBocmVmPXtocmVmfSB7Li4ub3RoZXJ9IC8+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNdWlMaW5rIGNvbXBvbmVudD17TmV4dENvbXBvc2VkfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gcmVmPXtpbm5lclJlZn0gaHJlZj17aHJlZn0gey4uLm90aGVyfSAvPlxyXG4gICk7XHJcbn1cclxuXHJcbkxpbmsucHJvcFR5cGVzID0ge1xyXG4gIGFjdGl2ZUNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXHJcbiAgaW5uZXJSZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMub2JqZWN0XSksXHJcbiAgbmFrZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxyXG4gIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IDxMaW5rIHsuLi5wcm9wc30gaW5uZXJSZWY9e3JlZn0gLz4pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9