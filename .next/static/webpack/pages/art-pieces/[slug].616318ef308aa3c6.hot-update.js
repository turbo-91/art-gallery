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

/***/ "./components/ArtPieceDetail/ArtPieceDetail.js":
/*!*****************************************************!*\
  !*** ./components/ArtPieceDetail/ArtPieceDetail.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _FavoriteButton_FavoriteButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FavoriteButton/FavoriteButton */ \"./components/FavoriteButton/FavoriteButton.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _CommentForm_CommentForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../CommentForm/CommentForm */ \"./components/CommentForm/CommentForm.js\");\n/* harmony import */ var _Comments_Comments__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Comments/Comments */ \"./components/Comments/Comments.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 2rem;\\n  height: 2rem;\\n  background-color: \",\n        \";\\n  border-radius: 20%;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: relative;\\n  background-color: #fff;\\n  padding: 2vw;\\n  overflow: hidden;\\n  border: 1px solid black;\\n  border-bottom: 0px;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: relative;\\n  width: 100%;\\n  height: auto;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: absolute;\\n  top: 1vh;\\n  right: 10px;\\n  z-index: 1; /* Ensures the button layers above the image */\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-family: Helvetica, Arial;\\n  font-size: 1em;\\n  margin-bottom: 1px;\\n  color: #001233;\\n  text-align: justify;\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-family: Helvetica, Arial;\\n  font-size: 1.3em;\\n  margin-bottom: 8px;\\n  color: #001233;\\n  text-align: justify;\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Color = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].li.withConfig({\n    displayName: \"ArtPieceDetail__Color\",\n    componentId: \"sc-61d54e3-0\"\n})(_templateObject(), (props)=>props.color);\n_c = Color;\nconst Section = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].section.withConfig({\n    displayName: \"ArtPieceDetail__Section\",\n    componentId: \"sc-61d54e3-1\"\n})(_templateObject1());\n_c1 = Section;\nconst ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n    displayName: \"ArtPieceDetail__ImageWrapper\",\n    componentId: \"sc-61d54e3-2\"\n})(_templateObject2());\n_c2 = ImageWrapper;\nconst IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n    displayName: \"ArtPieceDetail__IconWrapper\",\n    componentId: \"sc-61d54e3-3\"\n})(_templateObject3());\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].h2.withConfig({\n    displayName: \"ArtPieceDetail__Title\",\n    componentId: \"sc-61d54e3-4\"\n})(_templateObject4());\nconst Artist = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].h1.withConfig({\n    displayName: \"ArtPieceDetail__Artist\",\n    componentId: \"sc-61d54e3-5\"\n})(_templateObject5());\nfunction ArtPieceDetail(param) {\n    let { image, title, artist, year, genre, isFavorite, onToggleFavorite, artPiecesInfo, addComment, colors } = param;\n    var _colors;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const { slug } = router.query;\n    function getCommentsForArtPiece(slug, artPiecesInfo) {\n        var _artPiecesInfo, _artPiece;\n        const artPiece = (_artPiecesInfo = artPiecesInfo) === null || _artPiecesInfo === void 0 ? void 0 : _artPiecesInfo.find((artPiece)=>artPiece.slug === slug);\n        return ((_artPiece = artPiece) === null || _artPiece === void 0 ? void 0 : _artPiece.comments) || [];\n    }\n    const comments = getCommentsForArtPiece(slug, artPiecesInfo);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Section, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ImageWrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        alt: title,\n                        src: image,\n                        width: 300,\n                        height: 400\n                    }, void 0, false, {\n                        fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPieceDetail/ArtPieceDetail.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_FavoriteButton_FavoriteButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        isFavorite: isFavorite,\n                        onToggleFavorite: onToggleFavorite\n                    }, void 0, false, {\n                        fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPieceDetail/ArtPieceDetail.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPieceDetail/ArtPieceDetail.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPieceDetail/ArtPieceDetail.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                children: artist\n            }, void 0, false, {\n                fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPieceDetail/ArtPieceDetail.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: [\n                    year,\n                    \", \",\n                    genre\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPieceDetail/ArtPieceDetail.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_FavoriteButton_FavoriteButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                isFavorite: isFavorite,\n                onToggleFavorite: onToggleFavorite\n            }, void 0, false, {\n                fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPieceDetail/ArtPieceDetail.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            comments && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Comments_Comments__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                comments: comments\n            }, void 0, false, {\n                fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPieceDetail/ArtPieceDetail.js\",\n                lineNumber: 94,\n                columnNumber: 20\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_CommentForm_CommentForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                addComment: addComment,\n                artPiecesInfo: artPiecesInfo,\n                slug: slug\n            }, void 0, false, {\n                fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPieceDetail/ArtPieceDetail.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                children: (_colors = colors) === null || _colors === void 0 ? void 0 : _colors.map((color, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Color, {\n                        color: color,\n                        \"aria-label\": color\n                    }, index, false, {\n                        fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPieceDetail/ArtPieceDetail.js\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPieceDetail/ArtPieceDetail.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: \"/art-pieces\",\n                children: \"Back\"\n            }, void 0, false, {\n                fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPieceDetail/ArtPieceDetail.js\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPieceDetail/ArtPieceDetail.js\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, this);\n}\n_s(ArtPieceDetail, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c3 = ArtPieceDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArtPieceDetail);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Color\");\n$RefreshReg$(_c1, \"Section\");\n$RefreshReg$(_c2, \"ImageWrapper\");\n$RefreshReg$(_c3, \"ArtPieceDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FydFBpZWNlRGV0YWlsL0FydFBpZWNlRGV0YWlsLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0s7QUFDRjtBQUNpQztBQUN0QjtBQUNhO0FBQ1Q7QUFDTDtBQUV2QyxNQUFNUSxRQUFRRCw0REFBUzs7O3NCQUdELENBQUNHLFFBQVVBLE1BQU1DLEtBQUs7S0FIdENIO0FBT04sTUFBTUksVUFBVUwsaUVBQWM7Ozs7TUFBeEJLO0FBU04sTUFBTUUsZUFBZVAsNkRBQVU7Ozs7TUFBekJPO0FBTU4sTUFBTUUsY0FBY1QsNkRBQVU7Ozs7QUFPOUIsTUFBTVUsUUFBUVYsNERBQVM7Ozs7QUFRdkIsTUFBTVksU0FBU1osNERBQVM7Ozs7QUFReEIsU0FBU2MsZUFBZSxLQVd2QjtRQVh1QixFQUN0QkMsS0FBSyxFQUNMQyxLQUFLLEVBQ0xDLE1BQU0sRUFDTkMsSUFBSSxFQUNKQyxLQUFLLEVBQ0xDLFVBQVUsRUFDVkMsZ0JBQWdCLEVBQ2hCQyxhQUFhLEVBQ2JDLFVBQVUsRUFDVkMsTUFBTSxFQUNQLEdBWHVCO1FBOENmQTs7SUFsQ1AsTUFBTUMsU0FBUzVCLHNEQUFTQTtJQUN4QixNQUFNLEVBQUU2QixJQUFJLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUM3QixTQUFTQyx1QkFBdUJGLElBQUksRUFBRUosYUFBYTtZQUNoQ0EsZ0JBQ1ZPO1FBRFAsTUFBTUEsWUFBV1AsaUJBQUFBLDJCQUFBQSxxQ0FBQUEsZUFBZVEsSUFBSSxDQUFDLENBQUNELFdBQWFBLFNBQVNILElBQUksS0FBS0E7UUFDckUsT0FBT0csRUFBQUEsWUFBQUEsc0JBQUFBLGdDQUFBQSxVQUFVRSxRQUFRLEtBQUksRUFBRTtJQUNqQztJQUNBLE1BQU1BLFdBQVdILHVCQUF1QkYsTUFBTUo7SUFFOUMscUJBQ0UsOERBQUNqQjs7MEJBQ0MsOERBQUNFOztrQ0FDQyw4REFBQ2IsbURBQUtBO3dCQUFDc0MsS0FBS2hCO3dCQUFPaUIsS0FBS2xCO3dCQUFPbUIsT0FBTzt3QkFBS0MsUUFBUTs7Ozs7O2tDQUNuRCw4REFBQ3ZDLHNFQUFjQTt3QkFDYndCLFlBQVlBO3dCQUNaQyxrQkFBa0JBOzs7Ozs7Ozs7Ozs7MEJBSXRCLDhEQUFDVjswQkFBSUs7Ozs7OzswQkFDTCw4REFBQ29COzBCQUFJbkI7Ozs7OzswQkFDTCw4REFBQ29COztvQkFDRW5CO29CQUFLO29CQUFHQzs7Ozs7OzswQkFFWCw4REFBQ3ZCLHNFQUFjQTtnQkFDYndCLFlBQVlBO2dCQUNaQyxrQkFBa0JBOzs7Ozs7WUFFbkJVLDBCQUFZLDhEQUFDaEMsMERBQVFBO2dCQUFDZ0MsVUFBVUE7Ozs7OzswQkFDakMsOERBQUNqQyxnRUFBV0E7Z0JBQ1Z5QixZQUFZQTtnQkFDWkQsZUFBZUE7Z0JBQ2ZJLE1BQU1BOzs7Ozs7MEJBRVIsOERBQUN4QjsyQkFDRXNCLFVBQUFBLG9CQUFBQSw4QkFBQUEsUUFBUWMsR0FBRyxDQUFDLENBQUNsQyxPQUFPbUMsc0JBQ25CLDhEQUFDdEM7d0JBQWtCRyxPQUFPQTt3QkFBT29DLGNBQVlwQzt1QkFBakNtQzs7Ozs7Ozs7OzswQkFHaEIsOERBQUM1QyxrREFBSUE7Z0JBQUM4QyxNQUFLOzBCQUFjOzs7Ozs7Ozs7Ozs7QUFHL0I7R0FyRFMzQjs7UUFZUWpCLGtEQUFTQTs7O01BWmpCaUI7QUF1RFQsK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRQaWVjZURldGFpbC9BcnRQaWVjZURldGFpbC5qcz82OTQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEZhdm9yaXRlQnV0dG9uIGZyb20gXCIuLi9GYXZvcml0ZUJ1dHRvbi9GYXZvcml0ZUJ1dHRvblwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSBcIi4uL0NvbW1lbnRGb3JtL0NvbW1lbnRGb3JtXCI7XG5pbXBvcnQgQ29tbWVudHMgZnJvbSBcIi4uL0NvbW1lbnRzL0NvbW1lbnRzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBDb2xvciA9IHN0eWxlZC5saWBcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLmNvbG9yfTtcbiAgYm9yZGVyLXJhZGl1czogMjAlO1xuYDtcblxuY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDJ2dztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1ib3R0b206IDBweDtcbmA7XG5cbmNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbmA7XG5cbmNvbnN0IEljb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDF2aDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHotaW5kZXg6IDE7IC8qIEVuc3VyZXMgdGhlIGJ1dHRvbiBsYXllcnMgYWJvdmUgdGhlIGltYWdlICovXG5gO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMmBcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWw7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gIGNvbG9yOiAjMDAxMjMzO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuYDtcblxuY29uc3QgQXJ0aXN0ID0gc3R5bGVkLmgxYFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbDtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBjb2xvcjogIzAwMTIzMztcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbmA7XG5cbmZ1bmN0aW9uIEFydFBpZWNlRGV0YWlsKHtcbiAgaW1hZ2UsXG4gIHRpdGxlLFxuICBhcnRpc3QsXG4gIHllYXIsXG4gIGdlbnJlLFxuICBpc0Zhdm9yaXRlLFxuICBvblRvZ2dsZUZhdm9yaXRlLFxuICBhcnRQaWVjZXNJbmZvLFxuICBhZGRDb21tZW50LFxuICBjb2xvcnMsXG59KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeTtcbiAgZnVuY3Rpb24gZ2V0Q29tbWVudHNGb3JBcnRQaWVjZShzbHVnLCBhcnRQaWVjZXNJbmZvKSB7XG4gICAgY29uc3QgYXJ0UGllY2UgPSBhcnRQaWVjZXNJbmZvPy5maW5kKChhcnRQaWVjZSkgPT4gYXJ0UGllY2Uuc2x1ZyA9PT0gc2x1Zyk7XG4gICAgcmV0dXJuIGFydFBpZWNlPy5jb21tZW50cyB8fCBbXTtcbiAgfVxuICBjb25zdCBjb21tZW50cyA9IGdldENvbW1lbnRzRm9yQXJ0UGllY2Uoc2x1ZywgYXJ0UGllY2VzSW5mbyk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbj5cbiAgICAgIDxJbWFnZVdyYXBwZXI+XG4gICAgICAgIDxJbWFnZSBhbHQ9e3RpdGxlfSBzcmM9e2ltYWdlfSB3aWR0aD17MzAwfSBoZWlnaHQ9ezQwMH0gLz5cbiAgICAgICAgPEZhdm9yaXRlQnV0dG9uXG4gICAgICAgICAgaXNGYXZvcml0ZT17aXNGYXZvcml0ZX1cbiAgICAgICAgICBvblRvZ2dsZUZhdm9yaXRlPXtvblRvZ2dsZUZhdm9yaXRlfVxuICAgICAgICAvPlxuICAgICAgPC9JbWFnZVdyYXBwZXI+XG5cbiAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgIDxoMz57YXJ0aXN0fTwvaDM+XG4gICAgICA8cD5cbiAgICAgICAge3llYXJ9LCB7Z2VucmV9XG4gICAgICA8L3A+XG4gICAgICA8RmF2b3JpdGVCdXR0b25cbiAgICAgICAgaXNGYXZvcml0ZT17aXNGYXZvcml0ZX1cbiAgICAgICAgb25Ub2dnbGVGYXZvcml0ZT17b25Ub2dnbGVGYXZvcml0ZX1cbiAgICAgIC8+XG4gICAgICB7Y29tbWVudHMgJiYgPENvbW1lbnRzIGNvbW1lbnRzPXtjb21tZW50c30gLz59XG4gICAgICA8Q29tbWVudEZvcm1cbiAgICAgICAgYWRkQ29tbWVudD17YWRkQ29tbWVudH1cbiAgICAgICAgYXJ0UGllY2VzSW5mbz17YXJ0UGllY2VzSW5mb31cbiAgICAgICAgc2x1Zz17c2x1Z31cbiAgICAgIC8+XG4gICAgICA8bGk+XG4gICAgICAgIHtjb2xvcnM/Lm1hcCgoY29sb3IsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPENvbG9yIGtleT17aW5kZXh9IGNvbG9yPXtjb2xvcn0gYXJpYS1sYWJlbD17Y29sb3J9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9saT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvYXJ0LXBpZWNlc1wiPkJhY2s8L0xpbms+XG4gICAgPC9TZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRQaWVjZURldGFpbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiTGluayIsIkZhdm9yaXRlQnV0dG9uIiwidXNlUm91dGVyIiwiQ29tbWVudEZvcm0iLCJDb21tZW50cyIsInN0eWxlZCIsIkNvbG9yIiwibGkiLCJwcm9wcyIsImNvbG9yIiwiU2VjdGlvbiIsInNlY3Rpb24iLCJJbWFnZVdyYXBwZXIiLCJkaXYiLCJJY29uV3JhcHBlciIsIlRpdGxlIiwiaDIiLCJBcnRpc3QiLCJoMSIsIkFydFBpZWNlRGV0YWlsIiwiaW1hZ2UiLCJ0aXRsZSIsImFydGlzdCIsInllYXIiLCJnZW5yZSIsImlzRmF2b3JpdGUiLCJvblRvZ2dsZUZhdm9yaXRlIiwiYXJ0UGllY2VzSW5mbyIsImFkZENvbW1lbnQiLCJjb2xvcnMiLCJyb3V0ZXIiLCJzbHVnIiwicXVlcnkiLCJnZXRDb21tZW50c0ZvckFydFBpZWNlIiwiYXJ0UGllY2UiLCJmaW5kIiwiY29tbWVudHMiLCJhbHQiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImgzIiwicCIsIm1hcCIsImluZGV4IiwiYXJpYS1sYWJlbCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ArtPieceDetail/ArtPieceDetail.js\n"));

/***/ })

});