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
    var links = Object.keys(cssfab).filter(function (link) {
      var _cssfab$link, _cssfab$link$_docs;

      return cssfab === null || cssfab === void 0 ? void 0 : (_cssfab$link = cssfab[link]) === null || _cssfab$link === void 0 ? void 0 : (_cssfab$link$_docs = _cssfab$link._docs) === null || _cssfab$link$_docs === void 0 ? void 0 : _cssfab$link$_docs.attributes;
    });
    return links;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL3V0aWxzLnRzeCJdLCJuYW1lcyI6WyJ1dGlscyIsImlzQXJyYXlPZlR5cGVzIiwiYXJyIiwicmV0IiwiQXJyYXkiLCJpc0FycmF5IiwiZXZlcnkiLCJ4IiwiaXNPYmplY3RPZlR5cGVzIiwiYXJyVmFsdWVzIiwiT2JqZWN0IiwidmFsdWVzIiwiaHRtbFV0aWxzIiwiZW5jbG9zZSIsImNvbnRlbnQiLCJ0YWciLCJ1cmxNb2R1bGUiLCJwYWdlRG9jc05hbWUiLCJwYWdlRGVtb05hbWUiLCJwYWdlRGVtb0NsYXNzTmFtZSIsImZhYnJpY05hdmlnYXRpb24iLCJnZXRIb21lUGFnZXMiLCJnZXRNb2R1bGVEb2NzUGFnZSIsIm1vZHVsZSIsImdldE1vZHVsZUNsYXNzTmFtZXNQYWdlIiwiZ2V0TW9kdWxlRGVtb1BhZ2UiLCJnZXRBY3RpdmVMaW5rcyIsImNzc2ZhYiIsImNvbmZfY3NzZmFicmljIiwibGlua3MiLCJrZXlzIiwiZmlsdGVyIiwibGluayIsIl9kb2NzIiwiYXR0cmlidXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQSxJQUFNQSxLQUFLLEdBQUc7QUFFVkMsZ0JBQWMsRUFBRSx3QkFBQ0MsR0FBRCxFQUFtQjtBQUMvQixRQUFJQyxHQUFHLEdBQUcsRUFBVjs7QUFFQSxRQUFJLENBQUNDLEtBQUssQ0FBQ0MsT0FBTixDQUFjSCxHQUFkLENBQUwsRUFBeUI7QUFDckIsYUFBTyxLQUFQO0FBQ0g7O0FBQ0QsUUFBSUEsR0FBRyxDQUFDSSxLQUFKLENBQVUsVUFBQUMsQ0FBQztBQUFBLGFBQUlILEtBQUssQ0FBQ0MsT0FBTixDQUFjRSxDQUFkLENBQUo7QUFBQSxLQUFYLENBQUosRUFBc0NKLEdBQUcsR0FBRyxRQUFOO0FBQ3RDLFFBQUlELEdBQUcsQ0FBQ0ksS0FBSixDQUFVLFVBQUFDLENBQUM7QUFBQSxhQUFJLE9BQU9BLENBQVAsS0FBYSxRQUFiLElBQXlCLE9B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QUFrQ04sWUFBbEM7QUFDSCxHQU4yQjtBQU81Qk8seUJBQXVCLEVBQUUsaUNBQUNELE1BQUQsRUFBb0I7QUFDekMsc0JBQVdQLFNBQVgsY0FBd0JPLE1BQXhCLGNBQWtDSixpQkFBbEM7QUFDSCxHQVQyQjtBQVU1Qk0sbUJBQWlCLEVBQVEsMkJBQUNGLE1BQUQsRUFBb0I7QUFDekMsc0JBQVdQLFNBQVgsY0FBd0JPLE1BQXhCLGNBQWtDTCxZQUFsQztBQUNILEdBWjJCO0FBYTVCUSxnQkFBYyxFQUFXLDBCQUFNO0FBQzNCLFFBQU1DLE1BQU0sR0FBR0MsOERBQUEsRUFBZjtBQUNBLFFBQU1DLEtBQVUsR0FBR25CLE1BQU0sQ0FBQ29CLElBQVAsQ0FBWUgsTUFBWixFQUFvQkksTUFBcEIsQ0FBMkIsVUFBQ0MsSUFBRDtBQUFBOztBQUFBLGFBQWtCTCxNQUFsQixhQUFrQkEsTUFBbEIsdUNBQWtCQSxNQUFNLENBQUdLLElBQUgsQ0FBeEIsdUVBQWtCLGFBQWdCQyxLQUFsQyx1REFBa0IsbUJBQXVCQyxVQUF6QztBQUFBLEtBQTNCLENBQW5CO0FBRUEsV0FBT0wsS0FBUDtBQUNIO0FBbEIyQixDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jc3NmYWJyaWMtbW9kdWxlcy9bLi4ucGF0aF0uZThiOTM3NDk2MzMxODAyODk3MTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25mX2Nzc2ZhYnJpYyBmcm9tIFwiY3NzZmFicmljXCI7XHJcblxyXG5cclxuY29uc3QgdXRpbHMgPSB7XHJcbiAgICBcclxuICAgIGlzQXJyYXlPZlR5cGVzOiAoYXJyOiBhbnkpOiBhbnkgPT4ge1xyXG4gICAgICAgIGxldCByZXQgPSAnJztcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcnIuZXZlcnkoeCA9PiBBcnJheS5pc0FycmF5KHgpKSkgcmV0ID0gJ2FycmF5cydcclxuICAgICAgICBpZiAoYXJyLmV2ZXJ5KHggPT4gdHlwZW9mIHggPT09ICdudW1iZXInIHx8IHR5cGVvZiB4ID09PSAnc3RyaW5nJykpIHJldCA9ICdzdHJpbmdzJ1xyXG4gICAgICAgIGlmIChhcnIuZXZlcnkoeCA9PiB0eXBlb2YgeCA9PT0gJ3N0cmluZycpKSByZXQgPSAnc3RyaW5ncydcclxuICAgICAgICBpZiAoYXJyLmV2ZXJ5KHggPT4gdHlwZW9mIHggPT09ICdudW1iZXInKSkgcmV0ID0gJ251bWJlcnMnXHJcbiAgICAgICAgaWYgKGFyci5ldmVyeSh4ID0+IHR5cGVvZiB4ID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheSh4KSkpIHJldCA9ICdvYmplY3RzJ1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBpc09iamVjdE9mVHlwZXM6IChhcnI6IGFueSk6IHN0cmluZyB8IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBsZXQgcmV0ICAgICAgID0gJyc7XHJcbiAgICAgICAgbGV0IGFyclZhbHVlcyA9IE9iamVjdC52YWx1ZXMoYXJyKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoYXJyVmFsdWVzLmV2ZXJ5KHggPT4gdHlwZW9mIHggPT09ICdudW1iZXInIHx8IHR5cGVvZiB4ID09PSAnc3RyaW5nJykpIHJldCA9ICdzdHJpbmdzJ1xyXG4gICAgICAgIGlmIChhcnJWYWx1ZXMuZXZlcnkoeCA9PiBBcnJheS5pc0FycmF5KHgpKSkgcmV0ID0gJ2FycmF5cydcclxuICAgICAgICBpZiAoYXJyVmFsdWVzLmV2ZXJ5KHggPT4gdHlwZW9mIHggPT09ICdzdHJpbmcnKSkgcmV0ID0gJ3N0cmluZ3MnXHJcbiAgICAgICAgaWYgKGFyclZhbHVlcy5ldmVyeSh4ID0+IHR5cGVvZiB4ID09PSAnbnVtYmVyJykpIHJldCA9ICdudW1iZXJzJ1xyXG4gICAgICAgIGlmIChhcnJWYWx1ZXMuZXZlcnkoeCA9PiB0eXBlb2YgeCA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoeCkpKSByZXQgPSAnb2JqZWN0cydcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaHRtbFV0aWxzID0ge1xyXG4gICAgZW5jbG9zZTogKGNvbnRlbnQ6IGFueSwgdGFnOiBzdHJpbmcgPSAnZGl2JykgPT4ge1xyXG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e1wiY2VsbC1zcGFjaW5nIGNlbGwtcGFkZGluZ1wifT57Y29udGVudH08L2Rpdj4pXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgdXRpbHM7XHJcblxyXG5cclxuY29uc3QgdXJsTW9kdWxlICAgICAgICAgPSAnY3NzZmFicmljLW1vZHVsZXMnO1xyXG5jb25zdCBwYWdlRG9jc05hbWUgICAgICA9ICdkb2NzJztcclxuY29uc3QgcGFnZURlbW9OYW1lICAgICAgPSAnZGVtbyc7XHJcbmNvbnN0IHBhZ2VEZW1vQ2xhc3NOYW1lID0gJ2NsYXNzbmFtZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZhYnJpY05hdmlnYXRpb24gPSB7XHJcbiAgICBnZXRIb21lUGFnZXM6ICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBgLyR7dXJsTW9kdWxlfWA7XHJcbiAgICB9LFxyXG4gICAgZ2V0TW9kdWxlRG9jc1BhZ2U6ICAgICAgIChtb2R1bGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHJldHVybiBgLyR7dXJsTW9kdWxlfS8ke21vZHVsZX0vJHtwYWdlRG9jc05hbWV9YDtcclxuICAgIH0sXHJcbiAgICBnZXRNb2R1bGVDbGFzc05hbWVzUGFnZTogKG1vZHVsZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGAvJHt1cmxNb2R1bGV9LyR7bW9kdWxlfS8ke3BhZ2VEZW1vQ2xhc3NOYW1lfWA7XHJcbiAgICB9LFxyXG4gICAgZ2V0TW9kdWxlRGVtb1BhZ2U6ICAgICAgIChtb2R1bGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHJldHVybiBgLyR7dXJsTW9kdWxlfS8ke21vZHVsZX0vJHtwYWdlRGVtb05hbWV9YDtcclxuICAgIH0sXHJcbiAgICBnZXRBY3RpdmVMaW5rczogICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNzc2ZhYiA9IGNvbmZfY3NzZmFicmljLmdldE1vZHVsZUxpc3QoKTtcclxuICAgICAgICBjb25zdCBsaW5rczogYW55ID0gT2JqZWN0LmtleXMoY3NzZmFiKS5maWx0ZXIoKGxpbms6IHN0cmluZykgPT4gY3NzZmFiPy5bbGlua10/Ll9kb2NzPy5hdHRyaWJ1dGVzKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gbGlua3M7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=