"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Spotlight/Spotlight.js":
/*!*******************************************!*\
  !*** ./components/Spotlight/Spotlight.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/legacy/image */ \"./node_modules/next/legacy/image.js\");\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_legacy_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _FavoriteButton_FavoriteButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FavoriteButton/FavoriteButton */ \"./components/FavoriteButton/FavoriteButton.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: relative;\\n  background-color: #fff;\\n  padding: 2vw;\\n  overflow: hidden;\\n  border: 1px solid black;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: relative;\\n  width: 100%;\\n  height: auto;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: absolute;\\n  top: 1vh;\\n  right: 10px;\\n  z-index: 1; /* Ensures the button layers above the image */\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-family: Helvetica, Arial;\\n  font-size: 1em;\\n  margin-bottom: 1px;\\n  color: #001233;\\n  text-align: justify;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-family: Helvetica, Arial;\\n  font-size: 1.3em;\\n  margin-bottom: 8px;\\n  color: #001233;\\n  text-align: justify;\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\nconst Section = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].section.withConfig({\n    displayName: \"Spotlight__Section\",\n    componentId: \"sc-180d36ed-0\"\n})(_templateObject());\n_c = Section;\nconst ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n    displayName: \"Spotlight__ImageWrapper\",\n    componentId: \"sc-180d36ed-1\"\n})(_templateObject1());\n_c1 = ImageWrapper;\nconst IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n    displayName: \"Spotlight__IconWrapper\",\n    componentId: \"sc-180d36ed-2\"\n})(_templateObject2());\n_c2 = IconWrapper;\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].h2.withConfig({\n    displayName: \"Spotlight__Title\",\n    componentId: \"sc-180d36ed-3\"\n})(_templateObject3());\nconst Artist = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].h1.withConfig({\n    displayName: \"Spotlight__Artist\",\n    componentId: \"sc-180d36ed-4\"\n})(_templateObject4());\n_c3 = Artist;\nfunction Spotlight(param) {\n    let { image, artist, isFavorite, onToggleFavorite } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Section, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ImageWrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_legacy_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        layout: \"responsive\",\n                        alt: artist,\n                        src: image,\n                        width: 300,\n                        height: 300\n                    }, void 0, false, {\n                        fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/Spotlight/Spotlight.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(IconWrapper, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_FavoriteButton_FavoriteButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            isFavorite: isFavorite,\n                            onToggleFavorite: onToggleFavorite\n                        }, void 0, false, {\n                            fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/Spotlight/Spotlight.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/Spotlight/Spotlight.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/Spotlight/Spotlight.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Artist, {\n                children: artist\n            }, void 0, false, {\n                fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/Spotlight/Spotlight.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/Spotlight/Spotlight.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_c4 = Spotlight;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Spotlight);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"Section\");\n$RefreshReg$(_c1, \"ImageWrapper\");\n$RefreshReg$(_c2, \"IconWrapper\");\n$RefreshReg$(_c3, \"Artist\");\n$RefreshReg$(_c4, \"Spotlight\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nwb3RsaWdodC9TcG90bGlnaHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1k7QUFDd0I7QUFDdkI7QUFFdkMsTUFBTUksVUFBVUQsaUVBQWM7Ozs7S0FBeEJDO0FBUU4sTUFBTUUsZUFBZUgsNkRBQVU7Ozs7TUFBekJHO0FBTU4sTUFBTUUsY0FBY0wsNkRBQVU7Ozs7TUFBeEJLO0FBT04sTUFBTUMsUUFBUU4sNERBQVM7Ozs7QUFRdkIsTUFBTVEsU0FBU1IsNERBQVM7Ozs7TUFBbEJRO0FBUU4sU0FBU0UsVUFBVSxLQUErQztRQUEvQyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsVUFBVSxFQUFFQyxnQkFBZ0IsRUFBRSxHQUEvQztJQUNqQixxQkFDRSw4REFBQ2I7OzBCQUNDLDhEQUFDRTs7a0NBQ0MsOERBQUNMLDBEQUFLQTt3QkFDSmlCLFFBQU87d0JBQ1BDLEtBQUtKO3dCQUNMSyxLQUFLTjt3QkFDTE8sT0FBTzt3QkFDUEMsUUFBUTs7Ozs7O2tDQUVWLDhEQUFDZDtrQ0FDQyw0RUFBQ04sc0VBQWNBOzRCQUNiYyxZQUFZQTs0QkFDWkMsa0JBQWtCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXhCLDhEQUFDTjswQkFBUUk7Ozs7Ozs7Ozs7OztBQUdmO01BckJTRjtBQXVCVCwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Nwb3RsaWdodC9TcG90bGlnaHQuanM/NzdlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvbGVnYWN5L2ltYWdlXCI7XG5pbXBvcnQgRmF2b3JpdGVCdXR0b24gZnJvbSBcIi4uL0Zhdm9yaXRlQnV0dG9uL0Zhdm9yaXRlQnV0dG9uXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMnZ3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbmA7XG5cbmNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbmA7XG5cbmNvbnN0IEljb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDF2aDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHotaW5kZXg6IDE7IC8qIEVuc3VyZXMgdGhlIGJ1dHRvbiBsYXllcnMgYWJvdmUgdGhlIGltYWdlICovXG5gO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMmBcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWw7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gIGNvbG9yOiAjMDAxMjMzO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuYDtcblxuY29uc3QgQXJ0aXN0ID0gc3R5bGVkLmgxYFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbDtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBjb2xvcjogIzAwMTIzMztcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbmA7XG5cbmZ1bmN0aW9uIFNwb3RsaWdodCh7IGltYWdlLCBhcnRpc3QsIGlzRmF2b3JpdGUsIG9uVG9nZ2xlRmF2b3JpdGUgfSkge1xuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uPlxuICAgICAgPEltYWdlV3JhcHBlcj5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgICAgYWx0PXthcnRpc3R9XG4gICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICB3aWR0aD17MzAwfVxuICAgICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICAvPlxuICAgICAgICA8SWNvbldyYXBwZXI+XG4gICAgICAgICAgPEZhdm9yaXRlQnV0dG9uXG4gICAgICAgICAgICBpc0Zhdm9yaXRlPXtpc0Zhdm9yaXRlfVxuICAgICAgICAgICAgb25Ub2dnbGVGYXZvcml0ZT17b25Ub2dnbGVGYXZvcml0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0ljb25XcmFwcGVyPlxuICAgICAgPC9JbWFnZVdyYXBwZXI+XG4gICAgICA8QXJ0aXN0PnthcnRpc3R9PC9BcnRpc3Q+XG4gICAgPC9TZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTcG90bGlnaHQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsIkZhdm9yaXRlQnV0dG9uIiwic3R5bGVkIiwiU2VjdGlvbiIsInNlY3Rpb24iLCJJbWFnZVdyYXBwZXIiLCJkaXYiLCJJY29uV3JhcHBlciIsIlRpdGxlIiwiaDIiLCJBcnRpc3QiLCJoMSIsIlNwb3RsaWdodCIsImltYWdlIiwiYXJ0aXN0IiwiaXNGYXZvcml0ZSIsIm9uVG9nZ2xlRmF2b3JpdGUiLCJsYXlvdXQiLCJhbHQiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Spotlight/Spotlight.js\n"));

/***/ })

});