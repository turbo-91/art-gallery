"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./components/Layout/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./styles.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction App(param) {\n    let { Component, pageProps } = param;\n    _s();\n    ////////// DATA FETCHING API ////////////\n    const fetcher = async function() {\n        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n            args[_key] = arguments[_key];\n        }\n        const response = await fetch(...args);\n        if (!response.ok) {\n            throw new Error(\"Request with \".concat(JSON.stringify(args), \" failed.\"));\n        }\n        return await response.json();\n    };\n    const { data, isLoading, error } = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"https://example-apis.vercel.app/api/art\", fetcher);\n    /////// FAVOR ART PIECES /////////\n    const [artPieces, setArtPieces] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (data && artPieces.length === 0) {\n            setArtPieces(data);\n        }\n    }, [\n        data\n    ]);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-application/pages/_app.js\",\n            lineNumber: 31,\n            columnNumber: 12\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Error loading data\"\n        }, void 0, false, {\n            fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-application/pages/_app.js\",\n            lineNumber: 35,\n            columnNumber: 12\n        }, this);\n    }\n    function handleToggleFavorite(slug) {\n        // See if the art piece is already in the array\n        const info = artPieces.find((art)=>art.slug === slug);\n        if (info) {\n            // If the art piece is already in the array, toggle the isFavorite value\n            const newInfo = artPieces.map((artPiece)=>artPiece.slug === slug ? {\n                    ...artPiece,\n                    isFavorite: !artPiece.isFavorite\n                } : artPiece);\n            setArtPieces(newInfo);\n            console.log(\"afterClickIf\", artPieces);\n        } else {\n            // If the art piece is not in the array already, add it with the favorite as true\n            const newInfo = [\n                ...artPieces,\n                {\n                    slug,\n                    isFavorite: true\n                }\n            ];\n            setArtPieces(newInfo);\n            console.log(\"afterClickElse\", artPieces);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-application/pages/_app.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swr__WEBPACK_IMPORTED_MODULE_3__.SWRConfig, {\n                value: {\n                    fetcher,\n                    refreshInterval: 1000\n                },\n                children: [\n                    artPieces.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps,\n                        pieces: artPieces,\n                        onToggleFavorite: handleToggleFavorite\n                    }, void 0, false, {\n                        fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-application/pages/_app.js\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-application/pages/_app.js\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-application/pages/_app.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-application/pages/_app.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(App, \"rK2pin/A7MPG5J4k8B1kKjh7zc4=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDTDtBQUNKO0FBQ1A7QUFDbUI7QUFFN0IsU0FBU00sSUFBSSxLQUF3QjtRQUF4QixFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRSxHQUF4Qjs7SUFDMUIseUNBQXlDO0lBQ3pDLE1BQU1DLFVBQVU7eUNBQVVDO1lBQUFBOztRQUN4QixNQUFNQyxXQUFXLE1BQU1DLFNBQVNGO1FBQ2hDLElBQUksQ0FBQ0MsU0FBU0UsRUFBRSxFQUFFO1lBQ2hCLE1BQU0sSUFBSUMsTUFBTSxnQkFBcUMsT0FBckJDLEtBQUtDLFNBQVMsQ0FBQ04sT0FBTTtRQUN2RDtRQUNBLE9BQU8sTUFBTUMsU0FBU00sSUFBSTtJQUM1QjtJQUNBLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLEtBQUssRUFBRSxHQUFHakIsK0NBQU1BLENBQ3ZDLDJDQUNBTTtJQUdGLGtDQUFrQztJQUNsQyxNQUFNLENBQUNZLFdBQVdDLGFBQWEsR0FBR2pCLCtDQUFRQSxDQUFDLEVBQUU7SUFFN0NELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSWMsUUFBUUcsVUFBVUUsTUFBTSxLQUFLLEdBQUc7WUFDbENELGFBQWFKO1FBQ2Y7SUFDRixHQUFHO1FBQUNBO0tBQUs7SUFFVCxJQUFJQyxXQUFXO1FBQ2IscUJBQU8sOERBQUNLO3NCQUFJOzs7Ozs7SUFDZDtJQUVBLElBQUlKLE9BQU87UUFDVCxxQkFBTyw4REFBQ0k7c0JBQUk7Ozs7OztJQUNkO0lBRUEsU0FBU0MscUJBQXFCQyxJQUFJO1FBQ2hDLCtDQUErQztRQUMvQyxNQUFNQyxPQUFPTixVQUFVTyxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUgsSUFBSSxLQUFLQTtRQUNsRCxJQUFJQyxNQUFNO1lBQ1Isd0VBQXdFO1lBQ3hFLE1BQU1HLFVBQVVULFVBQVVVLEdBQUcsQ0FBQyxDQUFDQyxXQUM3QkEsU0FBU04sSUFBSSxLQUFLQSxPQUNkO29CQUFFLEdBQUdNLFFBQVE7b0JBQUVDLFlBQVksQ0FBQ0QsU0FBU0MsVUFBVTtnQkFBQyxJQUNoREQ7WUFFTlYsYUFBYVE7WUFDYkksUUFBUUMsR0FBRyxDQUFDLGdCQUFnQmQ7UUFDOUIsT0FBTztZQUNMLGlGQUFpRjtZQUNqRixNQUFNUyxVQUFVO21CQUFJVDtnQkFBVztvQkFBRUs7b0JBQU1PLFlBQVk7Z0JBQUs7YUFBRTtZQUMxRFgsYUFBYVE7WUFDYkksUUFBUUMsR0FBRyxDQUFDLGtCQUFrQmQ7UUFDaEM7SUFDRjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ3BCLCtDQUFXQTs7Ozs7MEJBQ1osOERBQUNDLDBDQUFTQTtnQkFDUmtDLE9BQU87b0JBQ0wzQjtvQkFDQTRCLGlCQUFpQjtnQkFDbkI7O29CQUVDaEIsVUFBVUUsTUFBTSxHQUFHLGtCQUNsQiw4REFBQ2hCO3dCQUNFLEdBQUdDLFNBQVM7d0JBQ2I4QixRQUFRakI7d0JBQ1JrQixrQkFBa0JkOzs7Ozs2Q0FHcEIsOERBQUNEO2tDQUFJOzs7Ozs7a0NBRVAsOERBQUN4QiwwREFBTUE7Ozs7Ozs7Ozs7Ozs7QUFJZjtHQXpFd0JNOztRQVNhSCwyQ0FBTUE7OztLQVRuQkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBHbG9iYWxTdHlsZSBmcm9tIFwiLi4vc3R5bGVzXCI7XG5pbXBvcnQgeyBTV1JDb25maWcgfSBmcm9tIFwic3dyXCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAvLy8vLy8vLy8vIERBVEEgRkVUQ0hJTkcgQVBJIC8vLy8vLy8vLy8vL1xuICBjb25zdCBmZXRjaGVyID0gYXN5bmMgKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKC4uLmFyZ3MpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUmVxdWVzdCB3aXRoICR7SlNPTi5zdHJpbmdpZnkoYXJncyl9IGZhaWxlZC5gKTtcbiAgICB9XG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgfTtcbiAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcsIGVycm9yIH0gPSB1c2VTV1IoXG4gICAgXCJodHRwczovL2V4YW1wbGUtYXBpcy52ZXJjZWwuYXBwL2FwaS9hcnRcIixcbiAgICBmZXRjaGVyXG4gICk7XG5cbiAgLy8vLy8vLyBGQVZPUiBBUlQgUElFQ0VTIC8vLy8vLy8vL1xuICBjb25zdCBbYXJ0UGllY2VzLCBzZXRBcnRQaWVjZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEgJiYgYXJ0UGllY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2V0QXJ0UGllY2VzKGRhdGEpO1xuICAgIH1cbiAgfSwgW2RhdGFdKTtcblxuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgfVxuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8ZGl2PkVycm9yIGxvYWRpbmcgZGF0YTwvZGl2PjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVRvZ2dsZUZhdm9yaXRlKHNsdWcpIHtcbiAgICAvLyBTZWUgaWYgdGhlIGFydCBwaWVjZSBpcyBhbHJlYWR5IGluIHRoZSBhcnJheVxuICAgIGNvbnN0IGluZm8gPSBhcnRQaWVjZXMuZmluZCgoYXJ0KSA9PiBhcnQuc2x1ZyA9PT0gc2x1Zyk7XG4gICAgaWYgKGluZm8pIHtcbiAgICAgIC8vIElmIHRoZSBhcnQgcGllY2UgaXMgYWxyZWFkeSBpbiB0aGUgYXJyYXksIHRvZ2dsZSB0aGUgaXNGYXZvcml0ZSB2YWx1ZVxuICAgICAgY29uc3QgbmV3SW5mbyA9IGFydFBpZWNlcy5tYXAoKGFydFBpZWNlKSA9PlxuICAgICAgICBhcnRQaWVjZS5zbHVnID09PSBzbHVnXG4gICAgICAgICAgPyB7IC4uLmFydFBpZWNlLCBpc0Zhdm9yaXRlOiAhYXJ0UGllY2UuaXNGYXZvcml0ZSB9XG4gICAgICAgICAgOiBhcnRQaWVjZVxuICAgICAgKTtcbiAgICAgIHNldEFydFBpZWNlcyhuZXdJbmZvKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXJDbGlja0lmXCIsIGFydFBpZWNlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIHRoZSBhcnQgcGllY2UgaXMgbm90IGluIHRoZSBhcnJheSBhbHJlYWR5LCBhZGQgaXQgd2l0aCB0aGUgZmF2b3JpdGUgYXMgdHJ1ZVxuICAgICAgY29uc3QgbmV3SW5mbyA9IFsuLi5hcnRQaWVjZXMsIHsgc2x1ZywgaXNGYXZvcml0ZTogdHJ1ZSB9XTtcbiAgICAgIHNldEFydFBpZWNlcyhuZXdJbmZvKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXJDbGlja0Vsc2VcIiwgYXJ0UGllY2VzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgIDxTV1JDb25maWdcbiAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICBmZXRjaGVyLFxuICAgICAgICAgIHJlZnJlc2hJbnRlcnZhbDogMTAwMCxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2FydFBpZWNlcy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICAgICAgICBwaWVjZXM9e2FydFBpZWNlc31cbiAgICAgICAgICAgIG9uVG9nZ2xlRmF2b3JpdGU9e2hhbmRsZVRvZ2dsZUZhdm9yaXRlfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxMYXlvdXQgLz5cbiAgICAgIDwvU1dSQ29uZmlnPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxheW91dCIsIkdsb2JhbFN0eWxlIiwiU1dSQ29uZmlnIiwidXNlU1dSIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJmZXRjaGVyIiwiYXJncyIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb24iLCJkYXRhIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJhcnRQaWVjZXMiLCJzZXRBcnRQaWVjZXMiLCJsZW5ndGgiLCJkaXYiLCJoYW5kbGVUb2dnbGVGYXZvcml0ZSIsInNsdWciLCJpbmZvIiwiZmluZCIsImFydCIsIm5ld0luZm8iLCJtYXAiLCJhcnRQaWVjZSIsImlzRmF2b3JpdGUiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJyZWZyZXNoSW50ZXJ2YWwiLCJwaWVjZXMiLCJvblRvZ2dsZUZhdm9yaXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});