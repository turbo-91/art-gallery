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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./components/Layout/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./styles.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst fetcher = async function() {\n    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n        args[_key] = arguments[_key];\n    }\n    const response = await fetch(...args);\n    if (!response.ok) {\n        throw new Error(\"Request with \".concat(JSON.stringify(args), \" failed.\"));\n    }\n    return await response.json();\n};\nfunction App(param) {\n    let { Component, pageProps } = param;\n    _s();\n    ////////// DATA FETCHING API ////////////\n    const { data, isLoading, error } = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"https://example-apis.vercel.app/api/art\", fetcher);\n    /////// FAVOR ART PIECES /////////\n    const [artPieces, setArtPieces] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (data && artPieces.length === 0) {\n            setArtPieces(data);\n        }\n    }, [\n        data\n    ]);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-application/pages/_app.js\",\n            lineNumber: 32,\n            columnNumber: 12\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Error loading data\"\n        }, void 0, false, {\n            fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-application/pages/_app.js\",\n            lineNumber: 36,\n            columnNumber: 12\n        }, this);\n    }\n    function handleToggleFavorite(slug) {\n        // See if the art piece is already in the array\n        const info = artPieces.find((art)=>art.slug === slug);\n        if (info) {\n            // If the art piece is already in the array, toggle the isFavorite value\n            const newInfo = artPieces.map((artPiece)=>artPiece.slug === slug ? {\n                    ...artPiece,\n                    isFavorite: !artPiece.isFavorite\n                } : artPiece);\n            setArtPieces(newInfo);\n            console.log(\"afterClickIf\", artPieces);\n        } else {\n            // If the art piece is not in the array already, add it with the favorite as true\n            const newInfo = [\n                ...artPieces,\n                {\n                    slug,\n                    isFavorite: true\n                }\n            ];\n            setArtPieces(newInfo);\n            console.log(\"afterClickElse\", artPieces);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-application/pages/_app.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swr__WEBPACK_IMPORTED_MODULE_3__.SWRConfig, {\n                value: {\n                    fetcher,\n                    refreshInterval: 1000\n                },\n                children: [\n                    artPieces.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps,\n                        pieces: artPieces,\n                        onToggleFavorite: handleToggleFavorite\n                    }, void 0, false, {\n                        fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-application/pages/_app.js\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-application/pages/_app.js\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-application/pages/_app.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-application/pages/_app.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(App, \"rK2pin/A7MPG5J4k8B1kKjh7zc4=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDTDtBQUNKO0FBQ1A7QUFDbUI7QUFFNUMsTUFBTU0sVUFBVTtxQ0FBVUM7UUFBQUE7O0lBQ3hCLE1BQU1DLFdBQVcsTUFBTUMsU0FBU0Y7SUFDaEMsSUFBSSxDQUFDQyxTQUFTRSxFQUFFLEVBQUU7UUFDaEIsTUFBTSxJQUFJQyxNQUFNLGdCQUFxQyxPQUFyQkMsS0FBS0MsU0FBUyxDQUFDTixPQUFNO0lBQ3ZEO0lBQ0EsT0FBTyxNQUFNQyxTQUFTTSxJQUFJO0FBQzVCO0FBRWUsU0FBU0MsSUFBSSxLQUF3QjtRQUF4QixFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRSxHQUF4Qjs7SUFDMUIseUNBQXlDO0lBQ3pDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLEtBQUssRUFBRSxHQUFHakIsK0NBQU1BLENBQ3ZDLDJDQUNBRztJQUdGLGtDQUFrQztJQUNsQyxNQUFNLENBQUNlLFdBQVdDLGFBQWEsR0FBR2pCLCtDQUFRQSxDQUFDLEVBQUU7SUFFN0NELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSWMsUUFBUUcsVUFBVUUsTUFBTSxLQUFLLEdBQUc7WUFDbENELGFBQWFKO1FBQ2Y7SUFDRixHQUFHO1FBQUNBO0tBQUs7SUFFVCxJQUFJQyxXQUFXO1FBQ2IscUJBQU8sOERBQUNLO3NCQUFJOzs7Ozs7SUFDZDtJQUVBLElBQUlKLE9BQU87UUFDVCxxQkFBTyw4REFBQ0k7c0JBQUk7Ozs7OztJQUNkO0lBRUEsU0FBU0MscUJBQXFCQyxJQUFJO1FBQ2hDLCtDQUErQztRQUMvQyxNQUFNQyxPQUFPTixVQUFVTyxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUgsSUFBSSxLQUFLQTtRQUNsRCxJQUFJQyxNQUFNO1lBQ1Isd0VBQXdFO1lBQ3hFLE1BQU1HLFVBQVVULFVBQVVVLEdBQUcsQ0FBQyxDQUFDQyxXQUM3QkEsU0FBU04sSUFBSSxLQUFLQSxPQUNkO29CQUFFLEdBQUdNLFFBQVE7b0JBQUVDLFlBQVksQ0FBQ0QsU0FBU0MsVUFBVTtnQkFBQyxJQUNoREQ7WUFFTlYsYUFBYVE7WUFDYkksUUFBUUMsR0FBRyxDQUFDLGdCQUFnQmQ7UUFDOUIsT0FBTztZQUNMLGlGQUFpRjtZQUNqRixNQUFNUyxVQUFVO21CQUFJVDtnQkFBVztvQkFBRUs7b0JBQU1PLFlBQVk7Z0JBQUs7YUFBRTtZQUMxRFgsYUFBYVE7WUFDYkksUUFBUUMsR0FBRyxDQUFDLGtCQUFrQmQ7UUFDaEM7SUFDRjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ3BCLCtDQUFXQTs7Ozs7MEJBQ1osOERBQUNDLDBDQUFTQTtnQkFDUmtDLE9BQU87b0JBQ0w5QjtvQkFDQStCLGlCQUFpQjtnQkFDbkI7O29CQUVDaEIsVUFBVUUsTUFBTSxHQUFHLGtCQUNsQiw4REFBQ1A7d0JBQ0UsR0FBR0MsU0FBUzt3QkFDYnFCLFFBQVFqQjt3QkFDUmtCLGtCQUFrQmQ7Ozs7OzZDQUdwQiw4REFBQ0Q7a0NBQUk7Ozs7OztrQ0FFUCw4REFBQ3hCLDBEQUFNQTs7Ozs7Ozs7Ozs7OztBQUlmO0dBbEV3QmU7O1FBRWFaLDJDQUFNQTs7O0tBRm5CWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gXCIuLi9zdHlsZXNcIjtcbmltcG9ydCB7IFNXUkNvbmZpZyB9IGZyb20gXCJzd3JcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBmZXRjaGVyID0gYXN5bmMgKC4uLmFyZ3MpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCguLi5hcmdzKTtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcihgUmVxdWVzdCB3aXRoICR7SlNPTi5zdHJpbmdpZnkoYXJncyl9IGZhaWxlZC5gKTtcbiAgfVxuICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAvLy8vLy8vLy8vIERBVEEgRkVUQ0hJTkcgQVBJIC8vLy8vLy8vLy8vL1xuICBjb25zdCB7IGRhdGEsIGlzTG9hZGluZywgZXJyb3IgfSA9IHVzZVNXUihcbiAgICBcImh0dHBzOi8vZXhhbXBsZS1hcGlzLnZlcmNlbC5hcHAvYXBpL2FydFwiLFxuICAgIGZldGNoZXJcbiAgKTtcblxuICAvLy8vLy8vIEZBVk9SIEFSVCBQSUVDRVMgLy8vLy8vLy8vXG4gIGNvbnN0IFthcnRQaWVjZXMsIHNldEFydFBpZWNlc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YSAmJiBhcnRQaWVjZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBzZXRBcnRQaWVjZXMoZGF0YSk7XG4gICAgfVxuICB9LCBbZGF0YV0pO1xuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxkaXY+RXJyb3IgbG9hZGluZyBkYXRhPC9kaXY+O1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlVG9nZ2xlRmF2b3JpdGUoc2x1Zykge1xuICAgIC8vIFNlZSBpZiB0aGUgYXJ0IHBpZWNlIGlzIGFscmVhZHkgaW4gdGhlIGFycmF5XG4gICAgY29uc3QgaW5mbyA9IGFydFBpZWNlcy5maW5kKChhcnQpID0+IGFydC5zbHVnID09PSBzbHVnKTtcbiAgICBpZiAoaW5mbykge1xuICAgICAgLy8gSWYgdGhlIGFydCBwaWVjZSBpcyBhbHJlYWR5IGluIHRoZSBhcnJheSwgdG9nZ2xlIHRoZSBpc0Zhdm9yaXRlIHZhbHVlXG4gICAgICBjb25zdCBuZXdJbmZvID0gYXJ0UGllY2VzLm1hcCgoYXJ0UGllY2UpID0+XG4gICAgICAgIGFydFBpZWNlLnNsdWcgPT09IHNsdWdcbiAgICAgICAgICA/IHsgLi4uYXJ0UGllY2UsIGlzRmF2b3JpdGU6ICFhcnRQaWVjZS5pc0Zhdm9yaXRlIH1cbiAgICAgICAgICA6IGFydFBpZWNlXG4gICAgICApO1xuICAgICAgc2V0QXJ0UGllY2VzKG5ld0luZm8pO1xuICAgICAgY29uc29sZS5sb2coXCJhZnRlckNsaWNrSWZcIiwgYXJ0UGllY2VzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhlIGFydCBwaWVjZSBpcyBub3QgaW4gdGhlIGFycmF5IGFscmVhZHksIGFkZCBpdCB3aXRoIHRoZSBmYXZvcml0ZSBhcyB0cnVlXG4gICAgICBjb25zdCBuZXdJbmZvID0gWy4uLmFydFBpZWNlcywgeyBzbHVnLCBpc0Zhdm9yaXRlOiB0cnVlIH1dO1xuICAgICAgc2V0QXJ0UGllY2VzKG5ld0luZm8pO1xuICAgICAgY29uc29sZS5sb2coXCJhZnRlckNsaWNrRWxzZVwiLCBhcnRQaWVjZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxHbG9iYWxTdHlsZSAvPlxuICAgICAgPFNXUkNvbmZpZ1xuICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgIGZldGNoZXIsXG4gICAgICAgICAgcmVmcmVzaEludGVydmFsOiAxMDAwLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7YXJ0UGllY2VzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgPENvbXBvbmVudFxuICAgICAgICAgICAgey4uLnBhZ2VQcm9wc31cbiAgICAgICAgICAgIHBpZWNlcz17YXJ0UGllY2VzfVxuICAgICAgICAgICAgb25Ub2dnbGVGYXZvcml0ZT17aGFuZGxlVG9nZ2xlRmF2b3JpdGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPExheW91dCAvPlxuICAgICAgPC9TV1JDb25maWc+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiR2xvYmFsU3R5bGUiLCJTV1JDb25maWciLCJ1c2VTV1IiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImZldGNoZXIiLCJhcmdzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImRhdGEiLCJpc0xvYWRpbmciLCJlcnJvciIsImFydFBpZWNlcyIsInNldEFydFBpZWNlcyIsImxlbmd0aCIsImRpdiIsImhhbmRsZVRvZ2dsZUZhdm9yaXRlIiwic2x1ZyIsImluZm8iLCJmaW5kIiwiYXJ0IiwibmV3SW5mbyIsIm1hcCIsImFydFBpZWNlIiwiaXNGYXZvcml0ZSIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZSIsInJlZnJlc2hJbnRlcnZhbCIsInBpZWNlcyIsIm9uVG9nZ2xlRmF2b3JpdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});