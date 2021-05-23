self["webpackHotUpdate_N_E"]("pages/cssfabric-modules/[...path]",{

/***/ "./src/utils/utils.tsx":
/*!*****************************!*\
  !*** ./src/utils/utils.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "htmlUtils": function() { return /* binding */ htmlUtils; },
/* harmony export */   "fabricNavigation": function() { return /* binding */ fabricNavigation; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cssfabric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cssfabric */ "../cssfabric/lib/index.js");
/* harmony import */ var cssfabric__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cssfabric__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\boulot\\app-node\\cssfabric-docs\\src\\utils\\utils.tsx",
    _this = undefined;


var utils = {
  isArrayOfTypes: function isArrayOfTypes(arr) {
    var ret = '';

    if (!Array.isArray(arr)) {
      return false;
    }

    if (arr.every(function (x) {
      return Array.isArray(x);
    })) ret = 'arrays';
    if (arr.every(function (x) {
      return typeof x === 'number' || typeof x === 'string';
    })) ret = 'strings';
    if (arr.every(function (x) {
      return typeof x === 'string';
    })) ret = 'strings';
    if (arr.every(function (x) {
      return typeof x === 'number';
    })) ret = 'numbers';
    if (arr.every(function (x) {
      return typeof x === 'object' && !Array.isArray(x);
    })) ret = 'objects';
    return ret;
  },
  isObjectOfTypes: function isObjectOfTypes(arr) {
    if (Array.isArray(arr)) {
      return false;
    }

    var ret = '';
    var arrValues = Object.values(arr);
    if (arrValues.every(function (x) {
      return typeof x === 'number' || typeof x === 'string';
    })) ret = 'strings';
    if (arrValues.every(function (x) {
      return Array.isArray(x);
    })) ret = 'arrays';
    if (arrValues.every(function (x) {
      return typeof x === 'string';
    })) ret = 'strings';
    if (arrValues.every(function (x) {
      return typeof x === 'number';
    })) ret = 'numbers';
    if (arrValues.every(function (x) {
      return typeof x === 'object' && !Array.isArray(x);
    })) ret = 'objects';
    return ret;
  }
};
var htmlUtils = {
  enclose: function enclose(content) {
    var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'div';
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "cell-spacing cell-padding",
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }, _this);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (utils);
var urlModule = 'cssfabric-modules';
var pageDocsName = 'docs';
var pageDemoName = 'demo';
var pageDemoClassName = 'classnames';
var fabricNavigation = {
  getHomePages: function getHomePages() {
    return "/".concat(urlModule);
  },
  getModuleDocsPage: function getModuleDocsPage(module) {
    return "/".concat(urlModule, "/").concat(module, "/").concat(pageDocsName);
  },
  getModuleClassNamesPage: function getModuleClassNamesPage(module) {
    return "/".concat(urlModule, "/").concat(module, "/").concat(pageDemoClassName);
  },
  getModuleDemoPage: function getModuleDemoPage(module) {
    return "/".concat(urlModule, "/").concat(module, "/").concat(pageDemoName);
  },
  getActiveLinks: function getActiveLinks() {
    var cssfab = cssfabric__WEBPACK_IMPORTED_MODULE_1___default().getModuleList();
    return Object.keys(cssfab).filter(function (link) {
      var _cssfab$link, _cssfab$link$_docs;

      return cssfab === null || cssfab === void 0 ? void 0 : (_cssfab$link = cssfab[link]) === null || _cssfab$link === void 0 ? void 0 : (_cssfab$link$_docs = _cssfab$link._docs) === null || _cssfab$link$_docs === void 0 ? void 0 : _cssfab$link$_docs.attributes;
    });
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL3V0aWxzLnRzeCJdLCJuYW1lcyI6WyJ1dGlscyIsImlzQXJyYXlPZlR5cGVzIiwiYXJyIiwicmV0IiwiQXJyYXkiLCJpc0FycmF5IiwiZXZlcnkiLCJ4IiwiaXNPYmplY3RPZlR5cGVzIiwiYXJyVmFsdWVzIiwiT2JqZWN0IiwidmFsdWVzIiwiaHRtbFV0aWxzIiwiZW5jbG9zZSIsImNvbnRlbnQiLCJ0YWciLCJ1cmxNb2R1bGUiLCJwYWdlRG9jc05hbWUiLCJwYWdlRGVtb05hbWUiLCJwYWdlRGVtb0NsYXNzTmFtZSIsImZhYnJpY05hdmlnYXRpb24iLCJnZXRIb21lUGFnZXMiLCJnZXRNb2R1bGVEb2NzUGFnZSIsIm1vZHVsZSIsImdldE1vZHVsZUNsYXNzTmFtZXNQYWdlIiwiZ2V0TW9kdWxlRGVtb1BhZ2UiLCJnZXRBY3RpdmVMaW5rcyIsImNzc2ZhYiIsImNvbmZfY3NzZmFicmljIiwia2V5cyIsImZpbHRlciIsImxpbmsiLCJfZG9jcyIsImF0dHJpYnV0ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0EsSUFBTUEsS0FBSyxHQUFHO0FBRVZDLGdCQUFjLEVBQUUsd0JBQUNDLEdBQUQsRUFBbUI7QUFDL0IsUUFBSUMsR0FBRyxHQUFHLEVBQVY7O0FBRUEsUUFBSSxDQUFDQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0gsR0FBZCxDQUFMLEVBQXlCO0FBQ3JCLGFBQU8sS0FBUDtBQUNIOztBQUNELFFBQUlBLEdBQUcsQ0FBQ0ksS0FBSixDQUFVLFVBQUFDLENBQUM7QUFBQSxhQUFJSCxLQUFLLENBQUNDLE9BQU4sQ0FBY0UsQ0FBZCxDQUFKO0FBQUEsS0FBWCxDQUFKLEVBQXNDSixHQUFHLEdBQUcsUUFBTjtBQUN0QyxRQUFJRCxHQUFHLENBQUNJLEtBQUosQ0FBVSxVQUFBQyxDQUFDO0FBQUEsYUFBSSxPQUFPQSxDQUFQLEtBQWEsUUFBYixJQUF5QixPQUFPQSxDQUFQ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QWxDO0FBQ0gsR0FOMkI7QUFPNUJPLHlCQUF1QixFQUFFLGlDQUFDRCxNQUFELEVBQW9CO0FBQ3pDLHNCQUFXUCxTQUFYLGNBQXdCTyxNQUF4QixjQUFrQ0osaUJBQWxDO0FBQ0gsR0FUMkI7QUFVNUJNLG1CQUFpQixFQUFRLDJCQUFDRixNQUFELEVBQW9CO0FBQ3pDLHNCQUFXUCxTQUFYLGNBQXdCTyxNQUF4QixjQUFrQ0wsWUFBbEM7QUFDSCxHQVoyQjtBQWE1QlEsZ0JBQWMsRUFBVywwQkFBZ0I7QUFDckMsUUFBTUMsTUFBTSxHQUFPQyw4REFBQSxFQUFuQjtBQUNBLFdBQU9sQixNQUFNLENBQUNtQixJQUFQLENBQVlGLE1BQVosRUFBb0JHLE1BQXBCLENBQTJCLFVBQUNDLElBQUQ7QUFBQTs7QUFBQSxhQUFrQkosTUFBbEIsYUFBa0JBLE1BQWxCLHVDQUFrQkEsTUFBTSxDQUFHSSxJQUFILENBQXhCLHVFQUFrQixhQUFnQkMsS0FBbEMsdURBQWtCLG1CQUF1QkMsVUFBekM7QUFBQSxLQUEzQixDQUFQO0FBQ0g7QUFoQjJCLENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Nzc2ZhYnJpYy1tb2R1bGVzL1suLi5wYXRoXS4wMGY3MWMxOWRmN2VlMjU4YTFkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZfY3NzZmFicmljIGZyb20gXCJjc3NmYWJyaWNcIjtcclxuXHJcblxyXG5jb25zdCB1dGlscyA9IHtcclxuICAgIFxyXG4gICAgaXNBcnJheU9mVHlwZXM6IChhcnI6IGFueSk6IGFueSA9PiB7XHJcbiAgICAgICAgbGV0IHJldCA9ICcnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyci5ldmVyeSh4ID0+IEFycmF5LmlzQXJyYXkoeCkpKSByZXQgPSAnYXJyYXlzJ1xyXG4gICAgICAgIGlmIChhcnIuZXZlcnkoeCA9PiB0eXBlb2YgeCA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHggPT09ICdzdHJpbmcnKSkgcmV0ID0gJ3N0cmluZ3MnXHJcbiAgICAgICAgaWYgKGFyci5ldmVyeSh4ID0+IHR5cGVvZiB4ID09PSAnc3RyaW5nJykpIHJldCA9ICdzdHJpbmdzJ1xyXG4gICAgICAgIGlmIChhcnIuZXZlcnkoeCA9PiB0eXBlb2YgeCA9PT0gJ251bWJlcicpKSByZXQgPSAnbnVtYmVycydcclxuICAgICAgICBpZiAoYXJyLmV2ZXJ5KHggPT4gdHlwZW9mIHggPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHgpKSkgcmV0ID0gJ29iamVjdHMnXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGlzT2JqZWN0T2ZUeXBlczogKGFycjogYW55KTogc3RyaW5nIHwgYm9vbGVhbiA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCByZXQgICAgICAgPSAnJztcclxuICAgICAgICBsZXQgYXJyVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhhcnIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChhcnJWYWx1ZXMuZXZlcnkoeCA9PiB0eXBlb2YgeCA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHggPT09ICdzdHJpbmcnKSkgcmV0ID0gJ3N0cmluZ3MnXHJcbiAgICAgICAgaWYgKGFyclZhbHVlcy5ldmVyeSh4ID0+IEFycmF5LmlzQXJyYXkoeCkpKSByZXQgPSAnYXJyYXlzJ1xyXG4gICAgICAgIGlmIChhcnJWYWx1ZXMuZXZlcnkoeCA9PiB0eXBlb2YgeCA9PT0gJ3N0cmluZycpKSByZXQgPSAnc3RyaW5ncydcclxuICAgICAgICBpZiAoYXJyVmFsdWVzLmV2ZXJ5KHggPT4gdHlwZW9mIHggPT09ICdudW1iZXInKSkgcmV0ID0gJ251bWJlcnMnXHJcbiAgICAgICAgaWYgKGFyclZhbHVlcy5ldmVyeSh4ID0+IHR5cGVvZiB4ID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheSh4KSkpIHJldCA9ICdvYmplY3RzJ1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBodG1sVXRpbHMgPSB7XHJcbiAgICBlbmNsb3NlOiAoY29udGVudDogYW55LCB0YWc6IHN0cmluZyA9ICdkaXYnKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17XCJjZWxsLXNwYWNpbmcgY2VsbC1wYWRkaW5nXCJ9Pntjb250ZW50fTwvZGl2PilcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCB1dGlscztcclxuXHJcblxyXG5jb25zdCB1cmxNb2R1bGUgICAgICAgICA9ICdjc3NmYWJyaWMtbW9kdWxlcyc7XHJcbmNvbnN0IHBhZ2VEb2NzTmFtZSAgICAgID0gJ2RvY3MnO1xyXG5jb25zdCBwYWdlRGVtb05hbWUgICAgICA9ICdkZW1vJztcclxuY29uc3QgcGFnZURlbW9DbGFzc05hbWUgPSAnY2xhc3NuYW1lcyc7XHJcblxyXG5leHBvcnQgY29uc3QgZmFicmljTmF2aWdhdGlvbiA9IHtcclxuICAgIGdldEhvbWVQYWdlczogICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGAvJHt1cmxNb2R1bGV9YDtcclxuICAgIH0sXHJcbiAgICBnZXRNb2R1bGVEb2NzUGFnZTogICAgICAgKG1vZHVsZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGAvJHt1cmxNb2R1bGV9LyR7bW9kdWxlfS8ke3BhZ2VEb2NzTmFtZX1gO1xyXG4gICAgfSxcclxuICAgIGdldE1vZHVsZUNsYXNzTmFtZXNQYWdlOiAobW9kdWxlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICByZXR1cm4gYC8ke3VybE1vZHVsZX0vJHttb2R1bGV9LyR7cGFnZURlbW9DbGFzc05hbWV9YDtcclxuICAgIH0sXHJcbiAgICBnZXRNb2R1bGVEZW1vUGFnZTogICAgICAgKG1vZHVsZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGAvJHt1cmxNb2R1bGV9LyR7bW9kdWxlfS8ke3BhZ2VEZW1vTmFtZX1gO1xyXG4gICAgfSxcclxuICAgIGdldEFjdGl2ZUxpbmtzOiAgICAgICAgICAoKTogc3RyaW5nW10gPT4ge1xyXG4gICAgICAgIGNvbnN0IGNzc2ZhYiAgICAgPSBjb25mX2Nzc2ZhYnJpYy5nZXRNb2R1bGVMaXN0KCk7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGNzc2ZhYikuZmlsdGVyKChsaW5rOiBzdHJpbmcpID0+IGNzc2ZhYj8uW2xpbmtdPy5fZG9jcz8uYXR0cmlidXRlcyk7IFxyXG4gICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9