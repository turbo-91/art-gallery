"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/art-pieces/[slug]",{

/***/ "./pages/art-pieces/[slug].js":
/*!************************************!*\
  !*** ./pages/art-pieces/[slug].js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ArtPieceDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ArtPieceDetail */ \"./components/ArtPieceDetail/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ArtPieceDetailPage(param) {\n    let { pieces } = param;\n    _s();\n    // Dynamic Routing\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { slug } = router.query;\n    const currentPiece = pieces.find((piece)=>piece.slug === slug);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArtPieceDetail__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        image: currentPiece.imageSource,\n        title: currentPiece.name,\n        artist: currentPiece.artist,\n        year: currentPiece.year,\n        genre: currentPiece.genre\n    }, void 0, false, {\n        fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery/pages/art-pieces/[slug].js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(ArtPieceDetailPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = ArtPieceDetailPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArtPieceDetailPage);\nvar _c;\n$RefreshReg$(_c, \"ArtPieceDetailPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcnQtcGllY2VzL1tzbHVnXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlEO0FBQy9CO0FBQ2M7QUFFeEMsU0FBU0csbUJBQW1CLEtBQVU7UUFBVixFQUFFQyxNQUFNLEVBQUUsR0FBVjs7SUFDMUIsa0JBQWtCO0lBQ2xCLE1BQU1DLFNBQVNILHNEQUFTQTtJQUN4QixNQUFNLEVBQUVJLElBQUksRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBQzdCLE1BQU1DLGVBQWVKLE9BQU9LLElBQUksQ0FBQyxDQUFDQyxRQUFVQSxNQUFNSixJQUFJLEtBQUtBO0lBQzNELHFCQUNFLDhEQUFDTixrRUFBY0E7UUFDYlcsT0FBT0gsYUFBYUksV0FBVztRQUMvQkMsT0FBT0wsYUFBYU0sSUFBSTtRQUN4QkMsUUFBUVAsYUFBYU8sTUFBTTtRQUMzQkMsTUFBTVIsYUFBYVEsSUFBSTtRQUN2QkMsT0FBT1QsYUFBYVMsS0FBSzs7Ozs7O0FBRy9CO0dBZFNkOztRQUVRRCxrREFBU0E7OztLQUZqQkM7QUFnQlQsK0RBQWVBLGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcnQtcGllY2VzL1tzbHVnXS5qcz9mNDA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcnRQaWVjZURldGFpbCBmcm9tIFwiQC9jb21wb25lbnRzL0FydFBpZWNlRGV0YWlsXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZnVuY3Rpb24gQXJ0UGllY2VEZXRhaWxQYWdlKHsgcGllY2VzIH0pIHtcbiAgLy8gRHluYW1pYyBSb3V0aW5nXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgY3VycmVudFBpZWNlID0gcGllY2VzLmZpbmQoKHBpZWNlKSA9PiBwaWVjZS5zbHVnID09PSBzbHVnKTtcbiAgcmV0dXJuIChcbiAgICA8QXJ0UGllY2VEZXRhaWxcbiAgICAgIGltYWdlPXtjdXJyZW50UGllY2UuaW1hZ2VTb3VyY2V9XG4gICAgICB0aXRsZT17Y3VycmVudFBpZWNlLm5hbWV9XG4gICAgICBhcnRpc3Q9e2N1cnJlbnRQaWVjZS5hcnRpc3R9XG4gICAgICB5ZWFyPXtjdXJyZW50UGllY2UueWVhcn1cbiAgICAgIGdlbnJlPXtjdXJyZW50UGllY2UuZ2VucmV9XG4gICAgLz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJ0UGllY2VEZXRhaWxQYWdlO1xuIl0sIm5hbWVzIjpbIkFydFBpZWNlRGV0YWlsIiwiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJBcnRQaWVjZURldGFpbFBhZ2UiLCJwaWVjZXMiLCJyb3V0ZXIiLCJzbHVnIiwicXVlcnkiLCJjdXJyZW50UGllY2UiLCJmaW5kIiwicGllY2UiLCJpbWFnZSIsImltYWdlU291cmNlIiwidGl0bGUiLCJuYW1lIiwiYXJ0aXN0IiwieWVhciIsImdlbnJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/art-pieces/[slug].js\n"));

/***/ })

});