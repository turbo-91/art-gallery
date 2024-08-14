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

/***/ "./components/ArtPieces/ArtPieces.js":
/*!*******************************************!*\
  !*** ./components/ArtPieces/ArtPieces.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ArtPiecePreview_ArtPiecePreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ArtPiecePreview/ArtPiecePreview */ \"./components/ArtPiecePreview/ArtPiecePreview.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  max-width: 600px;\\n  margin: 0 auto;\\n  padding: 1vw;\\n  padding-bottom: 6vh;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"ArtPieces__Container\",\n    componentId: \"sc-3ea740b0-0\"\n})(_templateObject());\n_c = Container;\nfunction ArtPieces(param) {\n    let { pieces, artPiecesInfo, onToggleFavorite, addComment } = param;\n    var _pieces;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n        children: (_pieces = pieces) === null || _pieces === void 0 ? void 0 : _pieces.map((piece)=>{\n            var _artPiecesInfo_find, _artPiecesInfo;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ArtPiecePreview_ArtPiecePreview__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                image: piece.imageSource,\n                artist: piece.artist,\n                title: piece.name,\n                slug: piece.slug,\n                isFavorite: (_artPiecesInfo = artPiecesInfo) === null || _artPiecesInfo === void 0 ? void 0 : (_artPiecesInfo_find = _artPiecesInfo.find((artPiece)=>artPiece.slug === piece.slug)) === null || _artPiecesInfo_find === void 0 ? void 0 : _artPiecesInfo_find.isFavorite,\n                onToggleFavorite: ()=>onToggleFavorite(piece.slug),\n                addComment: addComment\n            }, piece.slug, false, {\n                fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPieces/ArtPieces.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPieces/ArtPieces.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c1 = ArtPieces;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArtPieces);\nvar _c, _c1;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"ArtPieces\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FydFBpZWNlcy9BcnRQaWVjZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUN1QztBQUMxQjtBQUV2QyxNQUFNRyxZQUFZRCw2REFBVTs7OztLQUF0QkM7QUFPTixTQUFTRSxVQUFVLEtBQXVEO1FBQXZELEVBQUVDLE1BQU0sRUFBRUMsYUFBYSxFQUFFQyxnQkFBZ0IsRUFBRUMsVUFBVSxFQUFFLEdBQXZEO1FBR1pIO0lBRkwscUJBQ0UsOERBQUNIO21CQUNFRyxVQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVFJLEdBQUcsQ0FBQyxDQUFDQztnQkFRUkoscUJBQUFBO2lDQVBKLDhEQUFDTix3RUFBZUE7Z0JBRWRXLE9BQU9ELE1BQU1FLFdBQVc7Z0JBQ3hCQyxRQUFRSCxNQUFNRyxNQUFNO2dCQUNwQkMsT0FBT0osTUFBTUssSUFBSTtnQkFDakJDLE1BQU1OLE1BQU1NLElBQUk7Z0JBQ2hCQyxVQUFVLEdBQ1JYLGlCQUFBQSwyQkFBQUEsc0NBQUFBLHNCQUFBQSxlQUFlWSxJQUFJLENBQUMsQ0FBQ0MsV0FBYUEsU0FBU0gsSUFBSSxLQUFLTixNQUFNTSxJQUFJLGVBQTlEViwwQ0FBQUEsb0JBQ0lXLFVBQVU7Z0JBRWhCVixrQkFBa0IsSUFBTUEsaUJBQWlCRyxNQUFNTSxJQUFJO2dCQUNuRFIsWUFBWUE7ZUFWUEUsTUFBTU0sSUFBSTs7Ozs7Ozs7Ozs7QUFlekI7TUFwQlNaO0FBc0JULCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXJ0UGllY2VzL0FydFBpZWNlcy5qcz85OWE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcnRQaWVjZVByZXZpZXcgZnJvbSBcIi4uL0FydFBpZWNlUHJldmlldy9BcnRQaWVjZVByZXZpZXdcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxdnc7XG4gIHBhZGRpbmctYm90dG9tOiA2dmg7XG5gO1xuXG5mdW5jdGlvbiBBcnRQaWVjZXMoeyBwaWVjZXMsIGFydFBpZWNlc0luZm8sIG9uVG9nZ2xlRmF2b3JpdGUsIGFkZENvbW1lbnQgfSkge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICB7cGllY2VzPy5tYXAoKHBpZWNlKSA9PiAoXG4gICAgICAgIDxBcnRQaWVjZVByZXZpZXdcbiAgICAgICAgICBrZXk9e3BpZWNlLnNsdWd9XG4gICAgICAgICAgaW1hZ2U9e3BpZWNlLmltYWdlU291cmNlfVxuICAgICAgICAgIGFydGlzdD17cGllY2UuYXJ0aXN0fVxuICAgICAgICAgIHRpdGxlPXtwaWVjZS5uYW1lfVxuICAgICAgICAgIHNsdWc9e3BpZWNlLnNsdWd9XG4gICAgICAgICAgaXNGYXZvcml0ZT17XG4gICAgICAgICAgICBhcnRQaWVjZXNJbmZvPy5maW5kKChhcnRQaWVjZSkgPT4gYXJ0UGllY2Uuc2x1ZyA9PT0gcGllY2Uuc2x1ZylcbiAgICAgICAgICAgICAgPy5pc0Zhdm9yaXRlXG4gICAgICAgICAgfVxuICAgICAgICAgIG9uVG9nZ2xlRmF2b3JpdGU9eygpID0+IG9uVG9nZ2xlRmF2b3JpdGUocGllY2Uuc2x1Zyl9XG4gICAgICAgICAgYWRkQ29tbWVudD17YWRkQ29tbWVudH1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRQaWVjZXM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBcnRQaWVjZVByZXZpZXciLCJzdHlsZWQiLCJDb250YWluZXIiLCJkaXYiLCJBcnRQaWVjZXMiLCJwaWVjZXMiLCJhcnRQaWVjZXNJbmZvIiwib25Ub2dnbGVGYXZvcml0ZSIsImFkZENvbW1lbnQiLCJtYXAiLCJwaWVjZSIsImltYWdlIiwiaW1hZ2VTb3VyY2UiLCJhcnRpc3QiLCJ0aXRsZSIsIm5hbWUiLCJzbHVnIiwiaXNGYXZvcml0ZSIsImZpbmQiLCJhcnRQaWVjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ArtPieces/ArtPieces.js\n"));

/***/ })

});