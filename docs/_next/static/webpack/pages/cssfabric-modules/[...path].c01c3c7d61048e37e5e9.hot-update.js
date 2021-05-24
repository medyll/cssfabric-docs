self["webpackHotUpdate_N_E"]("pages/cssfabric-modules/[...path]",{

/***/ "./src/pages/cssfabric-modules/[...path].tsx":
/*!***************************************************!*\
  !*** ./src/pages/cssfabric-modules/[...path].tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_boulot_app_node_cssfabric_docs_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Docs_Docs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Docs/Docs */ "./src/components/Docs/Docs.tsx");
/* harmony import */ var _components_Docs_DocsClassNames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Docs/DocsClassNames */ "./src/components/Docs/DocsClassNames.tsx");
/* harmony import */ var _components_Docs_DocsDemo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Docs/DocsDemo */ "./src/components/Docs/DocsDemo.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var cssfabric__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cssfabric */ "../cssfabric/lib/index.js");
/* harmony import */ var cssfabric__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(cssfabric__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_components_Headers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/components/Headers */ "./src/components/Headers/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/Menu */ "./src/components/Menu.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\boulot\\app-node\\cssfabric-docs\\src\\pages\\cssfabric-modules\\[...path].tsx",
    _this = undefined,
    _s = $RefreshSig$();













var ModulePath = function ModulePath(props) {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_10___default().useState(),
      _React$useState2 = (0,D_boulot_app_node_cssfabric_docs_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      activeModule = _React$useState2[0],
      setActiveModule = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_10___default().useState(),
      _React$useState4 = (0,D_boulot_app_node_cssfabric_docs_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState3, 2),
      activeAction = _React$useState4[0],
      setActiveAction = _React$useState4[1];

  var cssfabricModuleList = props.cssfabricModuleList;
  var path = router.query.path;
  var links = Object.keys(cssfabricModuleList);
  var moduleTag;
  var DynamicComponent;
  var tagProperties = {};
  var staticModule = '';
  var staticAction = '';

  if (path) {
    staticModule = path[0];
    staticAction = path[1];
    tagProperties = cssfabric__WEBPACK_IMPORTED_MODULE_8___default().getModuleMetaData(staticModule); // init(path);
  }

  function init(path) {
    // console.log(router)
    var module = path[0];
    var action = path[1]; // setActiveModule(module);
    // setActiveAction(action);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "grid-v   h-full content-start overflow-auto",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: [staticModule, " cssfabric"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-full w-sm-main theme-bg-primary-light pos-sticky ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components_Headers__WEBPACK_IMPORTED_MODULE_9__.HeaderSiteTitle, {
        title: "cssfabric",
        title_tag: "just.fabric.it",
        description: "Welcome"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "grid-h dsp-none",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dsp-none dsp-sm-block",
          children: "sm"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dsp-md-block dsp-none ",
          children: "md"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dsp-lg-block dsp-none",
          children: "lg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dsp-none dsp-xl-block dsp-none",
          children: "xl"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dsp-none dsp-xxl-block dsp-none",
          children: "xxl"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "grid-sm-v grid-h  h-full ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("aside", {
        className: "w-lg-16",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
          className: "pad-all-8",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "menu-lg-h menu-v",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "Css"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 29
            }, _this), Object.values(links).map(function (key, index) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "menu-item",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                  href: _utils_utils__WEBPACK_IMPORTED_MODULE_12__.fabricNavigation.getModuleDemoPage(key),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      children: "".concat(key)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 91,
                      columnNumber: 49
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 45
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 41
                }, _this)
              }, key, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 37
              }, _this);
            }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "Components"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: "grid-main pad-all-8",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components_Headers__WEBPACK_IMPORTED_MODULE_9__.Header, {
          title: "." + tagProperties.title,
          tag: "fabric.css." + tagProperties.title,
          description: tagProperties.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "grid-h marg-t-8",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "marg-t-8",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_11__.default, {
              module: staticModule
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pad-l-8 grid-main",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components_Headers__WEBPACK_IMPORTED_MODULE_9__.SubHeader, {
                title: staticModule + '.' + staticAction
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [staticModule && !staticAction && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Docs_Docs__WEBPACK_IMPORTED_MODULE_4__.default, {
                module: staticModule
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 67
              }, _this), staticModule && staticAction === 'docs' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Docs_Docs__WEBPACK_IMPORTED_MODULE_4__.default, {
                module: staticModule
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 79
              }, _this), staticModule && staticAction === 'classnames' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Docs_DocsClassNames__WEBPACK_IMPORTED_MODULE_5__.default, {
                module: staticModule
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 34
              }, _this), staticModule && staticAction === 'demo' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Docs_DocsDemo__WEBPACK_IMPORTED_MODULE_6__.default, {
                module: staticModule
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 79
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 9
  }, _this);
};

_s(ModulePath, "414osCIAfY2EIUtH73XFe/8YBHc=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = ModulePath;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (ModulePath);

var _c;

$RefreshReg$(_c, "ModulePath");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Nzc2ZhYnJpYy1tb2R1bGVzL1suLi5wYXRoXS50c3giXSwibmFtZXMiOlsiTW9kdWxlUGF0aCIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiUmVhY3QiLCJhY3RpdmVNb2R1bGUiLCJzZXRBY3RpdmVNb2R1bGUiLCJhY3RpdmVBY3Rpb24iLCJzZXRBY3RpdmVBY3Rpb24iLCJjc3NmYWJyaWNNb2R1bGVMaXN0IiwicGF0aCIsInF1ZXJ5IiwibGlua3MiLCJPYmplY3QiLCJrZXlzIiwibW9kdWxlVGFnIiwiRHluYW1pY0NvbXBvbmVudCIsInRhZ1Byb3BlcnRpZXMiLCJzdGF0aWNNb2R1bGUiLCJzdGF0aWNBY3Rpb24iLCJjb25mX2Nzc2ZhYnJpYyIsImluaXQiLCJtb2R1bGUiLCJhY3Rpb24iLCJ2YWx1ZXMiLCJtYXAiLCJrZXkiLCJpbmRleCIsImZhYnJpY05hdmlnYXRpb24iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFFQTs7QUFNQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQTZCO0FBQUE7O0FBRTVDLE1BQU1DLE1BQU0sR0FBNEJDLHNEQUFTLEVBQWpEOztBQUY0Qyx3QkFHSkMsc0RBQUEsRUFISTtBQUFBO0FBQUEsTUFHckNDLFlBSHFDO0FBQUEsTUFHdkJDLGVBSHVCOztBQUFBLHlCQUlKRixzREFBQSxFQUpJO0FBQUE7QUFBQSxNQUlyQ0csWUFKcUM7QUFBQSxNQUl2QkMsZUFKdUI7O0FBQUEsTUFNckNDLG1CQU5xQyxHQU1kUixLQU5jLENBTXJDUSxtQkFOcUM7QUFBQSxNQVFyQ0MsSUFScUMsR0FRcEJSLE1BQU0sQ0FBQ1MsS0FSYSxDQVFyQ0QsSUFScUM7QUFTNUMsTUFB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RUFLS0EsWUFBWSxJQUFLQyxZQUFZLEtBQUssTUFBbEMsaUJBQTZDLDhEQUFDLDhEQUFEO0FBQVUsc0JBQU0sRUFBRUQ7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFMbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9FSCxDQTFHRDs7R0FBTWxCLFU7VUFFc0NHLGtEOzs7S0FGdENILFU7O0FBbUlOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Nzc2ZhYnJpYy1tb2R1bGVzL1suLi5wYXRoXS5jMDFjM2M3ZDYxMDQ4ZTM3ZTVlOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9ICAgIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGluayAgICAgICAgICAgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgZHluYW1pYyAgICAgICAgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5pbXBvcnQgRG9jcyAgICAgICAgICAgZnJvbSBcIkAvY29tcG9uZW50cy9Eb2NzL0RvY3NcIjtcclxuaW1wb3J0IERvY3NDbGFzc05hbWVzIGZyb20gXCJAL2NvbXBvbmVudHMvRG9jcy9Eb2NzQ2xhc3NOYW1lc1wiO1xyXG5pbXBvcnQgRG9jc0RlbW8gICAgICAgZnJvbSBcIkAvY29tcG9uZW50cy9Eb2NzL0RvY3NEZW1vXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IGNvbmZfY3NzZmFicmljIGZyb20gXCJjc3NmYWJyaWNcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBIZWFkZXIsXHJcbiAgICBIZWFkZXJTaXRlVGl0bGUsIFN1YkhlYWRlcixcclxufSAgICAgICAgICAgIGZyb20gXCJzcmMvY29tcG9uZW50cy9IZWFkZXJzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1lbnUgIGZyb20gXCJAL2NvbXBvbmVudHMvTWVudVwiO1xyXG5cclxuaW1wb3J0IHV0aWxzLCB7ZmFicmljTmF2aWdhdGlvbn0gZnJvbSBcIkAvdXRpbHMvdXRpbHNcIjtcclxuXHJcbmludGVyZmFjZSBJTW9kdWxlUGF0aFByb3BzIHtcclxuICAgIGNzc2ZhYnJpY01vZHVsZUxpc3Q6IFJlY29yZDxzdHJpbmcsIGFueT5cclxufVxyXG5cclxuY29uc3QgTW9kdWxlUGF0aCA9IChwcm9wczogSU1vZHVsZVBhdGhQcm9wcykgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCByb3V0ZXIgICAgICAgICAgICAgICAgICAgICAgICAgID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbYWN0aXZlTW9kdWxlLCBzZXRBY3RpdmVNb2R1bGVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPigpO1xyXG4gICAgY29uc3QgW2FjdGl2ZUFjdGlvbiwgc2V0QWN0aXZlQWN0aW9uXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oKTtcclxuICAgIFxyXG4gICAgY29uc3Qge2Nzc2ZhYnJpY01vZHVsZUxpc3R9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIGNvbnN0IHtwYXRofSAgICAgICAgICA9IHJvdXRlci5xdWVyeTtcclxuICAgIGNvbnN0IGxpbmtzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKGNzc2ZhYnJpY01vZHVsZUxpc3QpXHJcbiAgICBcclxuICAgIGxldCBtb2R1bGVUYWc7XHJcbiAgICBsZXQgRHluYW1pY0NvbXBvbmVudDtcclxuICAgIGxldCB0YWdQcm9wZXJ0aWVzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XHJcbiAgICBcclxuICAgIGxldCBzdGF0aWNNb2R1bGU6IHN0cmluZyA9ICcnO1xyXG4gICAgbGV0IHN0YXRpY0FjdGlvbjogc3RyaW5nID0gJyc7XHJcbiAgICBcclxuICAgIFxyXG4gICAgaWYgKHBhdGgpIHtcclxuICAgIFxyXG4gICAgICAgIHN0YXRpY01vZHVsZSA9IHBhdGhbMF07XHJcbiAgICAgICAgc3RhdGljQWN0aW9uID0gcGF0aFsxXTtcclxuICAgIFxyXG4gICAgICAgIHRhZ1Byb3BlcnRpZXMgPSBjb25mX2Nzc2ZhYnJpYy5nZXRNb2R1bGVNZXRhRGF0YShzdGF0aWNNb2R1bGUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGluaXQocGF0aCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGluaXQocGF0aDogc3RyaW5nIHwgc3RyaW5nW10pIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyb3V0ZXIpXHJcbiAgICAgICAgY29uc3QgbW9kdWxlID0gcGF0aFswXTtcclxuICAgICAgICBjb25zdCBhY3Rpb24gPSBwYXRoWzFdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHNldEFjdGl2ZU1vZHVsZShtb2R1bGUpO1xyXG4gICAgICAgIC8vIHNldEFjdGl2ZUFjdGlvbihhY3Rpb24pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImdyaWQtdiAgIGgtZnVsbCBjb250ZW50LXN0YXJ0IG92ZXJmbG93LWF1dG9cIn0+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPntzdGF0aWNNb2R1bGV9IGNzc2ZhYnJpYzwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widy1mdWxsIHctc20tbWFpbiB0aGVtZS1iZy1wcmltYXJ5LWxpZ2h0IHBvcy1zdGlja3kgXCJ9PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlclNpdGVUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiY3NzZmFicmljXCJcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZV90YWc9e1wianVzdC5mYWJyaWMuaXRcIn1cclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJXZWxjb21lXCJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZ3JpZC1oIGRzcC1ub25lXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImRzcC1ub25lIGRzcC1zbS1ibG9ja1wifT5zbTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImRzcC1tZC1ibG9jayBkc3Atbm9uZSBcIn0+bWQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJkc3AtbGctYmxvY2sgZHNwLW5vbmVcIn0+bGc8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJkc3Atbm9uZSBkc3AteGwtYmxvY2sgZHNwLW5vbmVcIn0+eGw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJkc3Atbm9uZSBkc3AteHhsLWJsb2NrIGRzcC1ub25lXCJ9Pnh4bDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJncmlkLXNtLXYgZ3JpZC1oICBoLWZ1bGwgXCJ9PlxyXG4gICAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT17XCJ3LWxnLTE2XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtcInBhZC1hbGwtOFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17XCJtZW51LWxnLWggbWVudS12XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNzczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LnZhbHVlcyhsaW5rcykubWFwKChrZXk6IHN0cmluZywgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2tleX0gY2xhc3NOYW1lPXtcIm1lbnUtaXRlbVwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2ZhYnJpY05hdmlnYXRpb24uZ2V0TW9kdWxlRGVtb1BhZ2Uoa2V5KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntgJHtrZXl9YH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Db21wb25lbnRzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e1wiZ3JpZC1tYWluIHBhZC1hbGwtOFwifT5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcIi5cIiArIHRhZ1Byb3BlcnRpZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZz17XCJmYWJyaWMuY3NzLlwiICsgdGFnUHJvcGVydGllcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3RhZ1Byb3BlcnRpZXMuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJncmlkLWggbWFyZy10LThcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm1hcmctdC04XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUgbW9kdWxlPXtzdGF0aWNNb2R1bGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInBhZC1sLTggZ3JpZC1tYWluXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3ViSGVhZGVyIHRpdGxlPXtzdGF0aWNNb2R1bGUgKyAnLicgKyBzdGF0aWNBY3Rpb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGljTW9kdWxlICYmICFzdGF0aWNBY3Rpb24gJiYgPERvY3MgbW9kdWxlPXtzdGF0aWNNb2R1bGV9Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRpY01vZHVsZSAmJiAoc3RhdGljQWN0aW9uID09PSAnZG9jcycpICYmIDxEb2NzIG1vZHVsZT17c3RhdGljTW9kdWxlfS8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0aWNNb2R1bGUgJiYgKHN0YXRpY0FjdGlvbiA9PT0gJ2NsYXNzbmFtZXMnKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RG9jc0NsYXNzTmFtZXMgbW9kdWxlPXtzdGF0aWNNb2R1bGV9Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRpY01vZHVsZSAmJiAoc3RhdGljQWN0aW9uID09PSAnZGVtbycpICYmIDxEb2NzRGVtbyBtb2R1bGU9e3N0YXRpY01vZHVsZX0vPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgXHJcbiAgICBjb25zdCBsaW5rczogYW55ICAgICAgPSBjb25mX2Nzc2ZhYnJpYy5nZXRNb2R1bGVMaXN0KClcclxuICAgIGNvbnN0IG91dFBhdGhzOiBhbnlbXSA9IFtdO1xyXG4gICAgXHJcbiAgICBPYmplY3Qua2V5cyhsaW5rcykuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgICAgIG91dFBhdGhzLnB1c2goe3BhcmFtczoge3BhdGg6IFtsaW5rLCAnZG9jcyddfX0pO1xyXG4gICAgICAgIG91dFBhdGhzLnB1c2goe3BhcmFtczoge3BhdGg6IFtsaW5rLCAnZGVtbyddfX0pO1xyXG4gICAgICAgIG91dFBhdGhzLnB1c2goe3BhcmFtczoge3BhdGg6IFtsaW5rLCAnY2xhc3NuYW1lcyddfX0pO1xyXG4gICAgfSlcclxuICAgIHJldHVybiB7cGF0aHM6IG91dFBhdGhzLCBmYWxsYmFjazogZmFsc2V9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBjc3NmYWJyaWNNb2R1bGVMaXN0OiBjb25mX2Nzc2ZhYnJpYy5nZXRNb2R1bGVMaXN0KClcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2R1bGVQYXRoO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9