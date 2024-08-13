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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./components/Layout/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./styles.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction App(param) {\n    let { Component, pageProps } = param;\n    _s();\n    ////////// DATA FETCHING API ////////////\n    const fetcher = async function() {\n        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n            args[_key] = arguments[_key];\n        }\n        const response = await fetch(...args);\n        if (!response.ok) {\n            throw new Error(\"Request with \".concat(JSON.stringify(args), \" failed.\"));\n        }\n        return await response.json();\n    };\n    const { data, isLoading, error } = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"https://example-apis.vercel.app/api/art\", fetcher);\n    /////// FAVOR ART PIECES /////////\n    const [artPiecesInfo, setArtPiecesInfo] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (data && artPieces.length === 0) {\n            setArtPieces(data);\n        }\n    }, [\n        data\n    ]);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-application/pages/_app.js\",\n            lineNumber: 31,\n            columnNumber: 12\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Error loading data\"\n        }, void 0, false, {\n            fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-application/pages/_app.js\",\n            lineNumber: 35,\n            columnNumber: 12\n        }, this);\n    }\n    function handleToggleFavorite(slug) {\n        // See if the art piece is already in the array\n        const info = artPieces.find((art)=>art.slug === slug);\n        if (info) {\n            // If the art piece is already in the array, toggle the isFavorite value\n            const newInfo = artPieces.map((artPiece)=>artPiece.slug === slug ? {\n                    ...artPiece,\n                    isFavorite: !artPiece.isFavorite\n                } : artPiece);\n            setArtPieces(newInfo);\n            console.log(\"afterClickIf\", artPieces);\n        } else {\n            // If the art piece is not in the array already, add it with the favorite as true\n            const newInfo = [\n                ...artPieces,\n                {\n                    slug,\n                    isFavorite: true\n                }\n            ];\n            setArtPieces(newInfo);\n            console.log(\"afterClickElse\", artPieces);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-application/pages/_app.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swr__WEBPACK_IMPORTED_MODULE_3__.SWRConfig, {\n                value: {\n                    fetcher,\n                    refreshInterval: 1000\n                },\n                children: [\n                    artPieces.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps,\n                        pieces: artPiecesInfo,\n                        onToggleFavorite: handleToggleFavorite\n                    }, void 0, false, {\n                        fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-application/pages/_app.js\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-application/pages/_app.js\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-application/pages/_app.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-application/pages/_app.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(App, \"6d49iKkJ6+pu+8a+HP+MsDZeF2E=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDTDtBQUNKO0FBQ1A7QUFDbUI7QUFFN0IsU0FBU00sSUFBSSxLQUF3QjtRQUF4QixFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRSxHQUF4Qjs7SUFDMUIseUNBQXlDO0lBQ3pDLE1BQU1DLFVBQVU7eUNBQVVDO1lBQUFBOztRQUN4QixNQUFNQyxXQUFXLE1BQU1DLFNBQVNGO1FBQ2hDLElBQUksQ0FBQ0MsU0FBU0UsRUFBRSxFQUFFO1lBQ2hCLE1BQU0sSUFBSUMsTUFBTSxnQkFBcUMsT0FBckJDLEtBQUtDLFNBQVMsQ0FBQ04sT0FBTTtRQUN2RDtRQUNBLE9BQU8sTUFBTUMsU0FBU00sSUFBSTtJQUM1QjtJQUNBLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLEtBQUssRUFBRSxHQUFHakIsK0NBQU1BLENBQ3ZDLDJDQUNBTTtJQUdGLGtDQUFrQztJQUNsQyxNQUFNLENBQUNZLGVBQWVDLGlCQUFpQixHQUFHakIsK0NBQVFBLENBQUMsRUFBRTtJQUVyREQsZ0RBQVNBLENBQUM7UUFDUixJQUFJYyxRQUFRSyxVQUFVQyxNQUFNLEtBQUssR0FBRztZQUNsQ0MsYUFBYVA7UUFDZjtJQUNGLEdBQUc7UUFBQ0E7S0FBSztJQUVULElBQUlDLFdBQVc7UUFDYixxQkFBTyw4REFBQ087c0JBQUk7Ozs7OztJQUNkO0lBRUEsSUFBSU4sT0FBTztRQUNULHFCQUFPLDhEQUFDTTtzQkFBSTs7Ozs7O0lBQ2Q7SUFFQSxTQUFTQyxxQkFBcUJDLElBQUk7UUFDaEMsK0NBQStDO1FBQy9DLE1BQU1DLE9BQU9OLFVBQVVPLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJSCxJQUFJLEtBQUtBO1FBQ2xELElBQUlDLE1BQU07WUFDUix3RUFBd0U7WUFDeEUsTUFBTUcsVUFBVVQsVUFBVVUsR0FBRyxDQUFDLENBQUNDLFdBQzdCQSxTQUFTTixJQUFJLEtBQUtBLE9BQ2Q7b0JBQUUsR0FBR00sUUFBUTtvQkFBRUMsWUFBWSxDQUFDRCxTQUFTQyxVQUFVO2dCQUFDLElBQ2hERDtZQUVOVCxhQUFhTztZQUNiSSxRQUFRQyxHQUFHLENBQUMsZ0JBQWdCZDtRQUM5QixPQUFPO1lBQ0wsaUZBQWlGO1lBQ2pGLE1BQU1TLFVBQVU7bUJBQUlUO2dCQUFXO29CQUFFSztvQkFBTU8sWUFBWTtnQkFBSzthQUFFO1lBQzFEVixhQUFhTztZQUNiSSxRQUFRQyxHQUFHLENBQUMsa0JBQWtCZDtRQUNoQztJQUNGO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDdEIsK0NBQVdBOzs7OzswQkFDWiw4REFBQ0MsMENBQVNBO2dCQUNSb0MsT0FBTztvQkFDTDdCO29CQUNBOEIsaUJBQWlCO2dCQUNuQjs7b0JBRUNoQixVQUFVQyxNQUFNLEdBQUcsa0JBQ2xCLDhEQUFDakI7d0JBQ0UsR0FBR0MsU0FBUzt3QkFDYmdDLFFBQVFuQjt3QkFDUm9CLGtCQUFrQmQ7Ozs7OzZDQUdwQiw4REFBQ0Q7a0NBQUk7Ozs7OztrQ0FFUCw4REFBQzFCLDBEQUFNQTs7Ozs7Ozs7Ozs7OztBQUlmO0dBekV3Qk07O1FBU2FILDJDQUFNQTs7O0tBVG5CRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gXCIuLi9zdHlsZXNcIjtcbmltcG9ydCB7IFNXUkNvbmZpZyB9IGZyb20gXCJzd3JcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIC8vLy8vLy8vLy8gREFUQSBGRVRDSElORyBBUEkgLy8vLy8vLy8vLy8vXG4gIGNvbnN0IGZldGNoZXIgPSBhc3luYyAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goLi4uYXJncyk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZXF1ZXN0IHdpdGggJHtKU09OLnN0cmluZ2lmeShhcmdzKX0gZmFpbGVkLmApO1xuICAgIH1cbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICB9O1xuICBjb25zdCB7IGRhdGEsIGlzTG9hZGluZywgZXJyb3IgfSA9IHVzZVNXUihcbiAgICBcImh0dHBzOi8vZXhhbXBsZS1hcGlzLnZlcmNlbC5hcHAvYXBpL2FydFwiLFxuICAgIGZldGNoZXJcbiAgKTtcblxuICAvLy8vLy8vIEZBVk9SIEFSVCBQSUVDRVMgLy8vLy8vLy8vXG4gIGNvbnN0IFthcnRQaWVjZXNJbmZvLCBzZXRBcnRQaWVjZXNJbmZvXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhICYmIGFydFBpZWNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldEFydFBpZWNlcyhkYXRhKTtcbiAgICB9XG4gIH0sIFtkYXRhXSk7XG5cbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPGRpdj5FcnJvciBsb2FkaW5nIGRhdGE8L2Rpdj47XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVUb2dnbGVGYXZvcml0ZShzbHVnKSB7XG4gICAgLy8gU2VlIGlmIHRoZSBhcnQgcGllY2UgaXMgYWxyZWFkeSBpbiB0aGUgYXJyYXlcbiAgICBjb25zdCBpbmZvID0gYXJ0UGllY2VzLmZpbmQoKGFydCkgPT4gYXJ0LnNsdWcgPT09IHNsdWcpO1xuICAgIGlmIChpbmZvKSB7XG4gICAgICAvLyBJZiB0aGUgYXJ0IHBpZWNlIGlzIGFscmVhZHkgaW4gdGhlIGFycmF5LCB0b2dnbGUgdGhlIGlzRmF2b3JpdGUgdmFsdWVcbiAgICAgIGNvbnN0IG5ld0luZm8gPSBhcnRQaWVjZXMubWFwKChhcnRQaWVjZSkgPT5cbiAgICAgICAgYXJ0UGllY2Uuc2x1ZyA9PT0gc2x1Z1xuICAgICAgICAgID8geyAuLi5hcnRQaWVjZSwgaXNGYXZvcml0ZTogIWFydFBpZWNlLmlzRmF2b3JpdGUgfVxuICAgICAgICAgIDogYXJ0UGllY2VcbiAgICAgICk7XG4gICAgICBzZXRBcnRQaWVjZXMobmV3SW5mbyk7XG4gICAgICBjb25zb2xlLmxvZyhcImFmdGVyQ2xpY2tJZlwiLCBhcnRQaWVjZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiB0aGUgYXJ0IHBpZWNlIGlzIG5vdCBpbiB0aGUgYXJyYXkgYWxyZWFkeSwgYWRkIGl0IHdpdGggdGhlIGZhdm9yaXRlIGFzIHRydWVcbiAgICAgIGNvbnN0IG5ld0luZm8gPSBbLi4uYXJ0UGllY2VzLCB7IHNsdWcsIGlzRmF2b3JpdGU6IHRydWUgfV07XG4gICAgICBzZXRBcnRQaWVjZXMobmV3SW5mbyk7XG4gICAgICBjb25zb2xlLmxvZyhcImFmdGVyQ2xpY2tFbHNlXCIsIGFydFBpZWNlcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICA8U1dSQ29uZmlnXG4gICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgZmV0Y2hlcixcbiAgICAgICAgICByZWZyZXNoSW50ZXJ2YWw6IDEwMDAsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHthcnRQaWVjZXMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICA8Q29tcG9uZW50XG4gICAgICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICAgICAgcGllY2VzPXthcnRQaWVjZXNJbmZvfVxuICAgICAgICAgICAgb25Ub2dnbGVGYXZvcml0ZT17aGFuZGxlVG9nZ2xlRmF2b3JpdGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPExheW91dCAvPlxuICAgICAgPC9TV1JDb25maWc+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiR2xvYmFsU3R5bGUiLCJTV1JDb25maWciLCJ1c2VTV1IiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImZldGNoZXIiLCJhcmdzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsImRhdGEiLCJpc0xvYWRpbmciLCJlcnJvciIsImFydFBpZWNlc0luZm8iLCJzZXRBcnRQaWVjZXNJbmZvIiwiYXJ0UGllY2VzIiwibGVuZ3RoIiwic2V0QXJ0UGllY2VzIiwiZGl2IiwiaGFuZGxlVG9nZ2xlRmF2b3JpdGUiLCJzbHVnIiwiaW5mbyIsImZpbmQiLCJhcnQiLCJuZXdJbmZvIiwibWFwIiwiYXJ0UGllY2UiLCJpc0Zhdm9yaXRlIiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwicmVmcmVzaEludGVydmFsIiwicGllY2VzIiwib25Ub2dnbGVGYXZvcml0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});