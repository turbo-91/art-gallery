"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/art-pieces",{

/***/ "./components/ArtPieces/index.js":
/*!***************************************!*\
  !*** ./components/ArtPieces/index.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ArtPiecePreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ArtPiecePreview */ \"./components/ArtPiecePreview/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction ArtPieces(param) {\n    let { pieces } = param;\n    var _pieces;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: (_pieces = pieces) === null || _pieces === void 0 ? void 0 : _pieces.map((piece)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArtPiecePreview__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    image: piece.imageSource,\n                    artist: piece.artist,\n                    title: piece.name\n                }, void 0, false, {\n                    fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery/components/ArtPieces/index.js\",\n                    lineNumber: 10,\n                    columnNumber: 11\n                }, this)\n            }, piece.slug, false, {\n                fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery/components/ArtPieces/index.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this))\n    }, void 0, false);\n}\n_c = ArtPieces;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArtPieces);\nvar _c;\n$RefreshReg$(_c, \"ArtPieces\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FydFBpZWNlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFDdUI7QUFDcEI7QUFFN0IsU0FBU0csVUFBVSxLQUFVO1FBQVYsRUFBRUMsTUFBTSxFQUFFLEdBQVY7UUFHWkE7SUFGTCxxQkFDRTttQkFDR0EsVUFBQUEsb0JBQUFBLDhCQUFBQSxRQUFRQyxHQUFHLENBQUMsQ0FBQ0Msc0JBQ1osOERBQUNDOzBCQUNDLDRFQUFDTix3REFBZUE7b0JBQ2RPLE9BQU9GLE1BQU1HLFdBQVc7b0JBQ3hCQyxRQUFRSixNQUFNSSxNQUFNO29CQUNwQkMsT0FBT0wsTUFBTU0sSUFBSTs7Ozs7O2VBSlhOLE1BQU1PLElBQUk7Ozs7OztBQVU1QjtLQWRTVjtBQWdCVCwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FydFBpZWNlcy9pbmRleC5qcz80YjcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcnRQaWVjZVByZXZpZXcgZnJvbSBcIi4uL0FydFBpZWNlUHJldmlld1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5mdW5jdGlvbiBBcnRQaWVjZXMoeyBwaWVjZXMgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cGllY2VzPy5tYXAoKHBpZWNlKSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtwaWVjZS5zbHVnfT5cbiAgICAgICAgICA8QXJ0UGllY2VQcmV2aWV3XG4gICAgICAgICAgICBpbWFnZT17cGllY2UuaW1hZ2VTb3VyY2V9XG4gICAgICAgICAgICBhcnRpc3Q9e3BpZWNlLmFydGlzdH1cbiAgICAgICAgICAgIHRpdGxlPXtwaWVjZS5uYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydFBpZWNlcztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkFydFBpZWNlUHJldmlldyIsIkxpbmsiLCJBcnRQaWVjZXMiLCJwaWVjZXMiLCJtYXAiLCJwaWVjZSIsImRpdiIsImltYWdlIiwiaW1hZ2VTb3VyY2UiLCJhcnRpc3QiLCJ0aXRsZSIsIm5hbWUiLCJzbHVnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ArtPieces/index.js\n"));

/***/ })

});