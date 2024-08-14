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

/***/ "./components/ArtPiecePreview/ArtPiecePreview.js":
/*!*******************************************************!*\
  !*** ./components/ArtPiecePreview/ArtPiecePreview.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/legacy/image */ \"./node_modules/next/legacy/image.js\");\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_legacy_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _FavoriteButton_FavoriteButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FavoriteButton/FavoriteButton */ \"./components/FavoriteButton/FavoriteButton.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: relative;\\n  background-color: #fff;\\n  padding: 2vw;\\n  overflow: hidden;\\n  border: 1px solid black;\\n  border-bottom: 0px;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: relative;\\n  height: 100%;\\n  width: 100%;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: absolute;\\n  top: 1vh;\\n  right: 10px;\\n  z-index: 1; /* Ensures the button layers above the image */\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-family: Helvetica, Arial;\\n  font-size: 1em;\\n  margin-bottom: 1px;\\n  color: #001233;\\n  text-align: justify;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-family: Helvetica, Arial;\\n  font-size: 1.3em;\\n  margin-bottom: 8px;\\n  color: #001233;\\n  text-align: justify;\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n\nconst Section = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].section.withConfig({\n    displayName: \"ArtPiecePreview__Section\",\n    componentId: \"sc-d9b7ae50-0\"\n})(_templateObject());\n_c = Section;\nconst ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n    displayName: \"ArtPiecePreview__ImageWrapper\",\n    componentId: \"sc-d9b7ae50-1\"\n})(_templateObject1());\n_c1 = ImageWrapper;\nconst IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n    displayName: \"ArtPiecePreview__IconWrapper\",\n    componentId: \"sc-d9b7ae50-2\"\n})(_templateObject2());\n_c2 = IconWrapper;\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].h2.withConfig({\n    displayName: \"ArtPiecePreview__Title\",\n    componentId: \"sc-d9b7ae50-3\"\n})(_templateObject3());\n_c3 = Title;\nconst Artist = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].h1.withConfig({\n    displayName: \"ArtPiecePreview__Artist\",\n    componentId: \"sc-d9b7ae50-4\"\n})(_templateObject4());\n_c4 = Artist;\nfunction ArtPiecePreview(param) {\n    let { image, title, artist, slug, isFavorite, onToggleFavorite } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Section, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                href: \"./art-pieces/\".concat(slug),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ImageWrapper, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_legacy_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            layout: \"responsive\",\n                            alt: title,\n                            src: image,\n                            width: 10,\n                            height: 10\n                        }, void 0, false, {\n                            fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPiecePreview/ArtPiecePreview.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(IconWrapper, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_FavoriteButton_FavoriteButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                isFavorite: isFavorite,\n                                onToggleFavorite: onToggleFavorite\n                            }, void 0, false, {\n                                fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPiecePreview/ArtPiecePreview.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPiecePreview/ArtPiecePreview.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPiecePreview/ArtPiecePreview.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            }, slug, false, {\n                fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPiecePreview/ArtPiecePreview.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Artist, {\n                children: artist\n            }, void 0, false, {\n                fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPiecePreview/ArtPiecePreview.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Title, {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPiecePreview/ArtPiecePreview.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPiecePreview/ArtPiecePreview.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_c5 = ArtPiecePreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArtPiecePreview);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Section\");\n$RefreshReg$(_c1, \"ImageWrapper\");\n$RefreshReg$(_c2, \"IconWrapper\");\n$RefreshReg$(_c3, \"Title\");\n$RefreshReg$(_c4, \"Artist\");\n$RefreshReg$(_c5, \"ArtPiecePreview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FydFBpZWNlUHJldmlldy9BcnRQaWVjZVByZXZpZXcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDWTtBQUN3QjtBQUNqQztBQUNVO0FBRXZDLE1BQU1LLFVBQVVELGlFQUFjOzs7O0tBQXhCQztBQVNOLE1BQU1FLGVBQWVILDZEQUFVOzs7O01BQXpCRztBQU1OLE1BQU1FLGNBQWNMLDZEQUFVOzs7O01BQXhCSztBQU9OLE1BQU1DLFFBQVFOLDREQUFTOzs7O01BQWpCTTtBQVFOLE1BQU1FLFNBQVNSLDREQUFTOzs7O01BQWxCUTtBQVFOLFNBQVNFLGdCQUFnQixLQU94QjtRQVB3QixFQUN2QkMsS0FBSyxFQUNMQyxLQUFLLEVBQ0xDLE1BQU0sRUFDTkMsSUFBSSxFQUNKQyxVQUFVLEVBQ1ZDLGdCQUFnQixFQUNqQixHQVB3QjtJQVF2QixxQkFDRSw4REFBQ2Y7OzBCQUNDLDhEQUFDRixrREFBSUE7Z0JBQUNrQixNQUFNLGdCQUFxQixPQUFMSDswQkFDMUIsNEVBQUNYOztzQ0FDQyw4REFBQ04sMERBQUtBOzRCQUNKcUIsUUFBTzs0QkFDUEMsS0FBS1A7NEJBQ0xRLEtBQUtUOzRCQUNMVSxPQUFPOzRCQUNQQyxRQUFROzs7Ozs7c0NBRVYsOERBQUNqQjtzQ0FDQyw0RUFBQ1Asc0VBQWNBO2dDQUNiaUIsWUFBWUE7Z0NBQ1pDLGtCQUFrQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBWmVGOzs7OzswQkFpQnpDLDhEQUFDTjswQkFBUUs7Ozs7OzswQkFDVCw4REFBQ1A7MEJBQU9NOzs7Ozs7Ozs7Ozs7QUFHZDtNQS9CU0Y7QUFpQ1QsK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRQaWVjZVByZXZpZXcvQXJ0UGllY2VQcmV2aWV3LmpzP2NjZDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2xlZ2FjeS9pbWFnZVwiO1xuaW1wb3J0IEZhdm9yaXRlQnV0dG9uIGZyb20gXCIuLi9GYXZvcml0ZUJ1dHRvbi9GYXZvcml0ZUJ1dHRvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDJ2dztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1ib3R0b206IDBweDtcbmA7XG5cbmNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IEljb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDF2aDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHotaW5kZXg6IDE7IC8qIEVuc3VyZXMgdGhlIGJ1dHRvbiBsYXllcnMgYWJvdmUgdGhlIGltYWdlICovXG5gO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMmBcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWw7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gIGNvbG9yOiAjMDAxMjMzO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuYDtcblxuY29uc3QgQXJ0aXN0ID0gc3R5bGVkLmgxYFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbDtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBjb2xvcjogIzAwMTIzMztcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbmA7XG5cbmZ1bmN0aW9uIEFydFBpZWNlUHJldmlldyh7XG4gIGltYWdlLFxuICB0aXRsZSxcbiAgYXJ0aXN0LFxuICBzbHVnLFxuICBpc0Zhdm9yaXRlLFxuICBvblRvZ2dsZUZhdm9yaXRlLFxufSkge1xuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uPlxuICAgICAgPExpbmsgaHJlZj17YC4vYXJ0LXBpZWNlcy8ke3NsdWd9YH0ga2V5PXtzbHVnfT5cbiAgICAgICAgPEltYWdlV3JhcHBlcj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICAgICAgYWx0PXt0aXRsZX1cbiAgICAgICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgICAgICB3aWR0aD17MTB9XG4gICAgICAgICAgICBoZWlnaHQ9ezEwfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEljb25XcmFwcGVyPlxuICAgICAgICAgICAgPEZhdm9yaXRlQnV0dG9uXG4gICAgICAgICAgICAgIGlzRmF2b3JpdGU9e2lzRmF2b3JpdGV9XG4gICAgICAgICAgICAgIG9uVG9nZ2xlRmF2b3JpdGU9e29uVG9nZ2xlRmF2b3JpdGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvSWNvbldyYXBwZXI+XG4gICAgICAgIDwvSW1hZ2VXcmFwcGVyPlxuICAgICAgPC9MaW5rPlxuICAgICAgPEFydGlzdD57YXJ0aXN0fTwvQXJ0aXN0PlxuICAgICAgPFRpdGxlPnt0aXRsZX08L1RpdGxlPlxuICAgIDwvU2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJ0UGllY2VQcmV2aWV3O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJGYXZvcml0ZUJ1dHRvbiIsIkxpbmsiLCJzdHlsZWQiLCJTZWN0aW9uIiwic2VjdGlvbiIsIkltYWdlV3JhcHBlciIsImRpdiIsIkljb25XcmFwcGVyIiwiVGl0bGUiLCJoMiIsIkFydGlzdCIsImgxIiwiQXJ0UGllY2VQcmV2aWV3IiwiaW1hZ2UiLCJ0aXRsZSIsImFydGlzdCIsInNsdWciLCJpc0Zhdm9yaXRlIiwib25Ub2dnbGVGYXZvcml0ZSIsImhyZWYiLCJsYXlvdXQiLCJhbHQiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ArtPiecePreview/ArtPiecePreview.js\n"));

/***/ })

});