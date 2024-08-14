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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SpotlightPage; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Spotlight_Spotlight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Spotlight/Spotlight */ \"./components/Spotlight/Spotlight.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  height: 100vh;\\n  width: 80vw;\\n  margin: 0 auto;\\n  padding: 1vw;\\n  padding-bottom: 6vh;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 50%; /* Adjust width to make it larger */\\n\\n  height: auto; /* Adjust height based on aspect ratio */\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"pages__Container\",\n    componentId: \"sc-8280385a-0\"\n})(_templateObject());\n_c = Container;\nconst SpotlightWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"pages__SpotlightWrapper\",\n    componentId: \"sc-8280385a-1\"\n})(_templateObject1());\n_c1 = SpotlightWrapper;\nfunction SpotlightPage(param) {\n    let { pieces, artPiecesInfo, onToggleFavorite } = param;\n    var _artPiecesInfo_find;\n    if (!pieces || pieces.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/pages/index.js\",\n            lineNumber: 27,\n            columnNumber: 12\n        }, this);\n    }\n    const spotlightPiece = pieces[Math.floor(Math.random() * pieces.length - 1)];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SpotlightWrapper, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Spotlight_Spotlight__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                image: spotlightPiece.imageSource,\n                artist: spotlightPiece.artist,\n                isFavorite: (_artPiecesInfo_find = artPiecesInfo.find((piece)=>piece.slug === spotlightPiece.slug)) === null || _artPiecesInfo_find === void 0 ? void 0 : _artPiecesInfo_find.isFavorite,\n                onToggleFavorite: ()=>onToggleFavorite(spotlightPiece.slug)\n            }, void 0, false, {\n                fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/pages/index.js\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/pages/index.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/pages/index.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_c2 = SpotlightPage;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"SpotlightWrapper\");\n$RefreshReg$(_c2, \"SpotlightPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5RDtBQUNsQjtBQUV2QyxNQUFNRSxZQUFZRCw2REFBVTs7OztLQUF0QkM7QUFXTixNQUFNRSxtQkFBbUJILDZEQUFVOzs7O01BQTdCRztBQU1TLFNBQVNDLGNBQWMsS0FJckM7UUFKcUMsRUFDcENDLE1BQU0sRUFDTkMsYUFBYSxFQUNiQyxnQkFBZ0IsRUFDakIsR0FKcUM7UUFpQjFCRDtJQVpWLElBQUksQ0FBQ0QsVUFBVUEsT0FBT0csTUFBTSxLQUFLLEdBQUc7UUFDbEMscUJBQU8sOERBQUNOO3NCQUFJOzs7Ozs7SUFDZDtJQUNBLE1BQU1PLGlCQUFpQkosTUFBTSxDQUFDSyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBS1AsT0FBT0csTUFBTSxHQUFHLEdBQUc7SUFFNUUscUJBQ0UsOERBQUNQO2tCQUNDLDRFQUFDRTtzQkFDQyw0RUFBQ0osdUVBQVNBO2dCQUNSYyxPQUFPSixlQUFlSyxXQUFXO2dCQUNqQ0MsUUFBUU4sZUFBZU0sTUFBTTtnQkFDN0JDLFVBQVUsR0FDUlYsc0JBQUFBLGNBQWNXLElBQUksQ0FBQyxDQUFDQyxRQUFVQSxNQUFNQyxJQUFJLEtBQUtWLGVBQWVVLElBQUksZUFBaEViLDBDQUFBQSxvQkFDSVUsVUFBVTtnQkFFaEJULGtCQUFrQixJQUFNQSxpQkFBaUJFLGVBQWVVLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEU7TUF6QndCZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcG90bGlnaHQgZnJvbSBcIkAvY29tcG9uZW50cy9TcG90bGlnaHQvU3BvdGxpZ2h0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogODB2dztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDF2dztcbiAgcGFkZGluZy1ib3R0b206IDZ2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBTcG90bGlnaHRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDUwJTsgLyogQWRqdXN0IHdpZHRoIHRvIG1ha2UgaXQgbGFyZ2VyICovXG5cbiAgaGVpZ2h0OiBhdXRvOyAvKiBBZGp1c3QgaGVpZ2h0IGJhc2VkIG9uIGFzcGVjdCByYXRpbyAqL1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3BvdGxpZ2h0UGFnZSh7XG4gIHBpZWNlcyxcbiAgYXJ0UGllY2VzSW5mbyxcbiAgb25Ub2dnbGVGYXZvcml0ZSxcbn0pIHtcbiAgaWYgKCFwaWVjZXMgfHwgcGllY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cbiAgY29uc3Qgc3BvdGxpZ2h0UGllY2UgPSBwaWVjZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcGllY2VzLmxlbmd0aCAtIDEpXTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8U3BvdGxpZ2h0V3JhcHBlcj5cbiAgICAgICAgPFNwb3RsaWdodFxuICAgICAgICAgIGltYWdlPXtzcG90bGlnaHRQaWVjZS5pbWFnZVNvdXJjZX1cbiAgICAgICAgICBhcnRpc3Q9e3Nwb3RsaWdodFBpZWNlLmFydGlzdH1cbiAgICAgICAgICBpc0Zhdm9yaXRlPXtcbiAgICAgICAgICAgIGFydFBpZWNlc0luZm8uZmluZCgocGllY2UpID0+IHBpZWNlLnNsdWcgPT09IHNwb3RsaWdodFBpZWNlLnNsdWcpXG4gICAgICAgICAgICAgID8uaXNGYXZvcml0ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBvblRvZ2dsZUZhdm9yaXRlPXsoKSA9PiBvblRvZ2dsZUZhdm9yaXRlKHNwb3RsaWdodFBpZWNlLnNsdWcpfVxuICAgICAgICAvPlxuICAgICAgPC9TcG90bGlnaHRXcmFwcGVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlNwb3RsaWdodCIsInN0eWxlZCIsIkNvbnRhaW5lciIsImRpdiIsIlNwb3RsaWdodFdyYXBwZXIiLCJTcG90bGlnaHRQYWdlIiwicGllY2VzIiwiYXJ0UGllY2VzSW5mbyIsIm9uVG9nZ2xlRmF2b3JpdGUiLCJsZW5ndGgiLCJzcG90bGlnaHRQaWVjZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImltYWdlIiwiaW1hZ2VTb3VyY2UiLCJhcnRpc3QiLCJpc0Zhdm9yaXRlIiwiZmluZCIsInBpZWNlIiwic2x1ZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});