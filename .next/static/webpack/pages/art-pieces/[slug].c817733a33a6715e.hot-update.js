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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/legacy/image */ \"./node_modules/next/legacy/image.js\");\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_legacy_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _FavoriteButton_FavoriteButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FavoriteButton/FavoriteButton */ \"./components/FavoriteButton/FavoriteButton.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _CommentForm_CommentForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../CommentForm/CommentForm */ \"./components/CommentForm/CommentForm.js\");\n/* harmony import */ var _Comments_Comments__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Comments/Comments */ \"./components/Comments/Comments.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 1.5rem;\\n  height: 1.5rem;\\n  background-color: \",\n        \";\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  max-width: 100% /* Increased max-width for better layout */\\n  margin: 0 auto;\\n  padding: 1vw;\\n  padding-bottom: 2vh;\\n  display: flex;\\n  flex-direction: row; /* Horizontal layout */\\n  align-items: flex-start; /* Align items at the top */\\n  text-align: left; /* Align text to the left */\\n  overflow: hidden;\\n  border: 1px solid black;\\n   @media (max-width: 768px) {\\n    margin-top: 5vh;\\n  }\\n  \\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  flex: 1; /* Allows this section to take up available space */\\n  padding-right: 1vw; /* Added space between content and image */\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  flex: 1; /* Allows this section to take up available space */\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: relative;\\n  width: 300px; /* Fixed width for the image */\\n  height: auto;\\n  flex-shrink: 0; /* Prevents the image from shrinking */\\n  @media (max-width: 768px) {\\n    width: 80%; /* Adjust width for smaller screens */\\n  }\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: absolute;\\n  top: 1vh; /* Positioned at 10px from the top */\\n  right: 1vw;\\n  z-index: 1; /* Ensures the button layers above the image */\\n  @media (max-width: 768px) {\\n    top: -45vh;\\n    right: 1px;\\n    position: relative;\\n  }\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-family: Helvetica, Arial, sans-serif;\\n  font-size: 0.9em; /* Reduced font size */\\n  margin-bottom: 1px;\\n  color: #001233;\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-family: Helvetica, Arial, sans-serif;\\n  font-size: 1.2em; /* Reduced font size */\\n  margin-bottom: 8px;\\n  color: #001233;\\n\"\n    ]);\n    _templateObject7 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-size: 0.9em; /* Reduced font size */\\n  color: #333;\\n  margin: 10px 0;\\n\"\n    ]);\n    _templateObject8 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject9() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: block;\\n  margin-top: 20px;\\n  color: black;\\n  text-decoration: none;\\n  font-weight: bold;\\n  text-align: right;\\n  text-decoration: none;\\n  &:hover {\\n    transform: translateX(-10px); /* Move 10px to the right */\\n  }\\n\"\n    ]);\n    _templateObject9 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject10() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  flex-wrap: wrap; /* Wrap colors to the next line if needed */\\n  list-style: none;\\n  padding: 0;\\n  margin: 10px 0;\\n\"\n    ]);\n    _templateObject10 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Color = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].li.withConfig({\n    displayName: \"ArtPieceDetail__Color\",\n    componentId: \"sc-e1239021-0\"\n})(_templateObject(), (props)=>props.color);\n_c = Color;\nconst Section = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].section.withConfig({\n    displayName: \"ArtPieceDetail__Section\",\n    componentId: \"sc-e1239021-1\"\n})(_templateObject1());\n_c1 = Section;\nconst ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n    displayName: \"ArtPieceDetail__ContentWrapper\",\n    componentId: \"sc-e1239021-2\"\n})(_templateObject2());\n_c2 = ContentWrapper;\nconst CommentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n    displayName: \"ArtPieceDetail__CommentWrapper\",\n    componentId: \"sc-e1239021-3\"\n})(_templateObject3());\n_c3 = CommentWrapper;\nconst ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n    displayName: \"ArtPieceDetail__ImageWrapper\",\n    componentId: \"sc-e1239021-4\"\n})(_templateObject4());\n_c4 = ImageWrapper;\nconst IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n    displayName: \"ArtPieceDetail__IconWrapper\",\n    componentId: \"sc-e1239021-5\"\n})(_templateObject5());\n_c5 = IconWrapper;\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].h2.withConfig({\n    displayName: \"ArtPieceDetail__Title\",\n    componentId: \"sc-e1239021-6\"\n})(_templateObject6());\n_c6 = Title;\nconst Artist = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].h1.withConfig({\n    displayName: \"ArtPieceDetail__Artist\",\n    componentId: \"sc-e1239021-7\"\n})(_templateObject7());\n_c7 = Artist;\nconst Details = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].p.withConfig({\n    displayName: \"ArtPieceDetail__Details\",\n    componentId: \"sc-e1239021-8\"\n})(_templateObject8());\n_c8 = Details;\nconst BackLink = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((next_link__WEBPACK_IMPORTED_MODULE_4___default())).withConfig({\n    displayName: \"ArtPieceDetail__BackLink\",\n    componentId: \"sc-e1239021-9\"\n})(_templateObject9());\n_c9 = BackLink;\nconst ColorList = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].ul.withConfig({\n    displayName: \"ArtPieceDetail__ColorList\",\n    componentId: \"sc-e1239021-10\"\n})(_templateObject10());\n_c10 = ColorList;\nfunction ArtPieceDetail(param) {\n    let { image, title, artist, year, genre, isFavorite, onToggleFavorite, artPiecesInfo, addComment, colors } = param;\n    var _colors;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const { slug } = router.query;\n    function getCommentsForArtPiece(slug, artPiecesInfo) {\n        var _artPiecesInfo, _artPiece;\n        const artPiece = (_artPiecesInfo = artPiecesInfo) === null || _artPiecesInfo === void 0 ? void 0 : _artPiecesInfo.find((artPiece)=>artPiece.slug === slug);\n        return ((_artPiece = artPiece) === null || _artPiece === void 0 ? void 0 : _artPiece.comments) || [];\n    }\n    const comments = getCommentsForArtPiece(slug, artPiecesInfo);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Section, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ContentWrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Artist, {\n                        children: artist\n                    }, void 0, false, {\n                        fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPieceDetail/ArtPieceDetail.js\",\n                        lineNumber: 130,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Title, {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPieceDetail/ArtPieceDetail.js\",\n                        lineNumber: 131,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Details, {\n                        children: [\n                            year,\n                            \", \",\n                            genre\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPieceDetail/ArtPieceDetail.js\",\n                        lineNumber: 132,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ColorList, {\n                        children: (_colors = colors) === null || _colors === void 0 ? void 0 : _colors.map((color, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Color, {\n                                color: color,\n                                \"aria-label\": color\n                            }, index, false, {\n                                fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPieceDetail/ArtPieceDetail.js\",\n                                lineNumber: 137,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPieceDetail/ArtPieceDetail.js\",\n                        lineNumber: 135,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CommentWrapper, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_CommentForm_CommentForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                addComment: addComment,\n                                artPiecesInfo: artPiecesInfo,\n                                slug: slug\n                            }, void 0, false, {\n                                fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPieceDetail/ArtPieceDetail.js\",\n                                lineNumber: 141,\n                                columnNumber: 11\n                            }, this),\n                            comments && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Comments_Comments__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                comments: comments\n                            }, void 0, false, {\n                                fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPieceDetail/ArtPieceDetail.js\",\n                                lineNumber: 146,\n                                columnNumber: 24\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPieceDetail/ArtPieceDetail.js\",\n                        lineNumber: 140,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPieceDetail/ArtPieceDetail.js\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ImageWrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_legacy_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        layout: \"responsive\",\n                        alt: title,\n                        src: image,\n                        width: 100,\n                        height: 100\n                    }, void 0, false, {\n                        fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPieceDetail/ArtPieceDetail.js\",\n                        lineNumber: 151,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(IconWrapper, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_FavoriteButton_FavoriteButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            isFavorite: isFavorite,\n                            onToggleFavorite: onToggleFavorite\n                        }, void 0, false, {\n                            fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPieceDetail/ArtPieceDetail.js\",\n                            lineNumber: 159,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPieceDetail/ArtPieceDetail.js\",\n                        lineNumber: 158,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(BackLink, {\n                        href: \"/art-pieces\",\n                        children: \"← Back\"\n                    }, void 0, false, {\n                        fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPieceDetail/ArtPieceDetail.js\",\n                        lineNumber: 164,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPieceDetail/ArtPieceDetail.js\",\n                lineNumber: 150,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/ArtPieceDetail/ArtPieceDetail.js\",\n        lineNumber: 128,\n        columnNumber: 5\n    }, this);\n}\n_s(ArtPieceDetail, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c11 = ArtPieceDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArtPieceDetail);\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;\n$RefreshReg$(_c, \"Color\");\n$RefreshReg$(_c1, \"Section\");\n$RefreshReg$(_c2, \"ContentWrapper\");\n$RefreshReg$(_c3, \"CommentWrapper\");\n$RefreshReg$(_c4, \"ImageWrapper\");\n$RefreshReg$(_c5, \"IconWrapper\");\n$RefreshReg$(_c6, \"Title\");\n$RefreshReg$(_c7, \"Artist\");\n$RefreshReg$(_c8, \"Details\");\n$RefreshReg$(_c9, \"BackLink\");\n$RefreshReg$(_c10, \"ColorList\");\n$RefreshReg$(_c11, \"ArtPieceDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FydFBpZWNlRGV0YWlsL0FydFBpZWNlRGV0YWlsLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1k7QUFDVDtBQUNpQztBQUN0QjtBQUNhO0FBQ1Q7QUFDTDtBQUV2QyxNQUFNUSxRQUFRRCw0REFBUzs7O3NCQUdELENBQUNHLFFBQVVBLE1BQU1DLEtBQUs7S0FIdENIO0FBTU4sTUFBTUksVUFBVUwsaUVBQWM7Ozs7TUFBeEJLO0FBaUJOLE1BQU1FLGlCQUFpQlAsNkRBQVU7Ozs7TUFBM0JPO0FBS04sTUFBTUUsaUJBQWlCVCw2REFBVTs7OztNQUEzQlM7QUFJTixNQUFNQyxlQUFlViw2REFBVTs7OztNQUF6QlU7QUFVTixNQUFNQyxjQUFjWCw2REFBVTs7OztNQUF4Qlc7QUFZTixNQUFNQyxRQUFRWiw0REFBUzs7OztNQUFqQlk7QUFPTixNQUFNRSxTQUFTZCw0REFBUzs7OztNQUFsQmM7QUFPTixNQUFNRSxVQUFVaEIsMkRBQVE7Ozs7TUFBbEJnQjtBQU1OLE1BQU1FLFdBQVdsQiw2REFBTUEsQ0FBQ0wsa0RBQUlBOzs7O01BQXRCdUI7QUFhTixNQUFNQyxZQUFZbkIsNERBQVM7Ozs7T0FBckJtQjtBQVFOLFNBQVNFLGVBQWUsS0FXdkI7UUFYdUIsRUFDdEJDLEtBQUssRUFDTEMsS0FBSyxFQUNMQyxNQUFNLEVBQ05DLElBQUksRUFDSkMsS0FBSyxFQUNMQyxVQUFVLEVBQ1ZDLGdCQUFnQixFQUNoQkMsYUFBYSxFQUNiQyxVQUFVLEVBQ1ZDLE1BQU0sRUFDUCxHQVh1QjtRQStCYkE7O0lBbkJULE1BQU1DLFNBQVNuQyxzREFBU0E7SUFDeEIsTUFBTSxFQUFFb0MsSUFBSSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFFN0IsU0FBU0MsdUJBQXVCRixJQUFJLEVBQUVKLGFBQWE7WUFDaENBLGdCQUNWTztRQURQLE1BQU1BLFlBQVdQLGlCQUFBQSwyQkFBQUEscUNBQUFBLGVBQWVRLElBQUksQ0FBQyxDQUFDRCxXQUFhQSxTQUFTSCxJQUFJLEtBQUtBO1FBQ3JFLE9BQU9HLEVBQUFBLFlBQUFBLHNCQUFBQSxnQ0FBQUEsVUFBVUUsUUFBUSxLQUFJLEVBQUU7SUFDakM7SUFFQSxNQUFNQSxXQUFXSCx1QkFBdUJGLE1BQU1KO0lBRTlDLHFCQUNFLDhEQUFDeEI7OzBCQUNDLDhEQUFDRTs7a0NBQ0MsOERBQUNPO2tDQUFRVTs7Ozs7O2tDQUNULDhEQUFDWjtrQ0FBT1c7Ozs7OztrQ0FDUiw4REFBQ1A7OzRCQUNFUzs0QkFBSzs0QkFBR0M7Ozs7Ozs7a0NBRVgsOERBQUNQO21DQUNFWSxVQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVFRLEdBQUcsQ0FBQyxDQUFDbkMsT0FBT29DLHNCQUNuQiw4REFBQ3ZDO2dDQUFrQkcsT0FBT0E7Z0NBQU9xQyxjQUFZckM7K0JBQWpDb0M7Ozs7Ozs7Ozs7a0NBR2hCLDhEQUFDL0I7OzBDQUNDLDhEQUFDWCxnRUFBV0E7Z0NBQ1ZnQyxZQUFZQTtnQ0FDWkQsZUFBZUE7Z0NBQ2ZJLE1BQU1BOzs7Ozs7NEJBRVBLLDBCQUFZLDhEQUFDdkMsMERBQVFBO2dDQUFDdUMsVUFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJckMsOERBQUM1Qjs7a0NBQ0MsOERBQUNoQiwwREFBS0E7d0JBQ0pnRCxRQUFPO3dCQUNQQyxLQUFLcEI7d0JBQ0xxQixLQUFLdEI7d0JBQ0x1QixPQUFPO3dCQUNQQyxRQUFROzs7Ozs7a0NBRVYsOERBQUNuQztrQ0FDQyw0RUFBQ2Ysc0VBQWNBOzRCQUNiK0IsWUFBWUE7NEJBQ1pDLGtCQUFrQkE7Ozs7Ozs7Ozs7O2tDQUd0Qiw4REFBQ1Y7d0JBQVM2QixNQUFLO2tDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJckM7R0EvRFMxQjs7UUFZUXhCLGtEQUFTQTs7O09BWmpCd0I7QUFpRVQsK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRQaWVjZURldGFpbC9BcnRQaWVjZURldGFpbC5qcz82OTQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9sZWdhY3kvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBGYXZvcml0ZUJ1dHRvbiBmcm9tIFwiLi4vRmF2b3JpdGVCdXR0b24vRmF2b3JpdGVCdXR0b25cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IENvbW1lbnRGb3JtIGZyb20gXCIuLi9Db21tZW50Rm9ybS9Db21tZW50Rm9ybVwiO1xuaW1wb3J0IENvbW1lbnRzIGZyb20gXCIuLi9Db21tZW50cy9Db21tZW50c1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgQ29sb3IgPSBzdHlsZWQubGlgXG4gIHdpZHRoOiAxLjVyZW07XG4gIGhlaWdodDogMS41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMuY29sb3J9O1xuYDtcblxuY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBtYXgtd2lkdGg6IDEwMCUgLyogSW5jcmVhc2VkIG1heC13aWR0aCBmb3IgYmV0dGVyIGxheW91dCAqL1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMXZ3O1xuICBwYWRkaW5nLWJvdHRvbTogMnZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93OyAvKiBIb3Jpem9udGFsIGxheW91dCAqL1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgLyogQWxpZ24gaXRlbXMgYXQgdGhlIHRvcCAqL1xuICB0ZXh0LWFsaWduOiBsZWZ0OyAvKiBBbGlnbiB0ZXh0IHRvIHRoZSBsZWZ0ICovXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgbWFyZ2luLXRvcDogNXZoO1xuICB9XG4gIFxuYDtcblxuY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBmbGV4OiAxOyAvKiBBbGxvd3MgdGhpcyBzZWN0aW9uIHRvIHRha2UgdXAgYXZhaWxhYmxlIHNwYWNlICovXG4gIHBhZGRpbmctcmlnaHQ6IDF2dzsgLyogQWRkZWQgc3BhY2UgYmV0d2VlbiBjb250ZW50IGFuZCBpbWFnZSAqL1xuYDtcblxuY29uc3QgQ29tbWVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBmbGV4OiAxOyAvKiBBbGxvd3MgdGhpcyBzZWN0aW9uIHRvIHRha2UgdXAgYXZhaWxhYmxlIHNwYWNlICovXG5gO1xuXG5jb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzMDBweDsgLyogRml4ZWQgd2lkdGggZm9yIHRoZSBpbWFnZSAqL1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsZXgtc2hyaW5rOiAwOyAvKiBQcmV2ZW50cyB0aGUgaW1hZ2UgZnJvbSBzaHJpbmtpbmcgKi9cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgd2lkdGg6IDgwJTsgLyogQWRqdXN0IHdpZHRoIGZvciBzbWFsbGVyIHNjcmVlbnMgKi9cbiAgfVxuYDtcblxuY29uc3QgSWNvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXZoOyAvKiBQb3NpdGlvbmVkIGF0IDEwcHggZnJvbSB0aGUgdG9wICovXG4gIHJpZ2h0OiAxdnc7XG4gIHotaW5kZXg6IDE7IC8qIEVuc3VyZXMgdGhlIGJ1dHRvbiBsYXllcnMgYWJvdmUgdGhlIGltYWdlICovXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHRvcDogLTQ1dmg7XG4gICAgcmlnaHQ6IDFweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbmA7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgyYFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjllbTsgLyogUmVkdWNlZCBmb250IHNpemUgKi9cbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICBjb2xvcjogIzAwMTIzMztcbmA7XG5cbmNvbnN0IEFydGlzdCA9IHN0eWxlZC5oMWBcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS4yZW07IC8qIFJlZHVjZWQgZm9udCBzaXplICovXG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgY29sb3I6ICMwMDEyMzM7XG5gO1xuXG5jb25zdCBEZXRhaWxzID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogMC45ZW07IC8qIFJlZHVjZWQgZm9udCBzaXplICovXG4gIGNvbG9yOiAjMzMzO1xuICBtYXJnaW46IDEwcHggMDtcbmA7XG5cbmNvbnN0IEJhY2tMaW5rID0gc3R5bGVkKExpbmspYFxuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpOyAvKiBNb3ZlIDEwcHggdG8gdGhlIHJpZ2h0ICovXG4gIH1cbmA7XG5cbmNvbnN0IENvbG9yTGlzdCA9IHN0eWxlZC51bGBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwOyAvKiBXcmFwIGNvbG9ycyB0byB0aGUgbmV4dCBsaW5lIGlmIG5lZWRlZCAqL1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDEwcHggMDtcbmA7XG5cbmZ1bmN0aW9uIEFydFBpZWNlRGV0YWlsKHtcbiAgaW1hZ2UsXG4gIHRpdGxlLFxuICBhcnRpc3QsXG4gIHllYXIsXG4gIGdlbnJlLFxuICBpc0Zhdm9yaXRlLFxuICBvblRvZ2dsZUZhdm9yaXRlLFxuICBhcnRQaWVjZXNJbmZvLFxuICBhZGRDb21tZW50LFxuICBjb2xvcnMsXG59KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeTtcblxuICBmdW5jdGlvbiBnZXRDb21tZW50c0ZvckFydFBpZWNlKHNsdWcsIGFydFBpZWNlc0luZm8pIHtcbiAgICBjb25zdCBhcnRQaWVjZSA9IGFydFBpZWNlc0luZm8/LmZpbmQoKGFydFBpZWNlKSA9PiBhcnRQaWVjZS5zbHVnID09PSBzbHVnKTtcbiAgICByZXR1cm4gYXJ0UGllY2U/LmNvbW1lbnRzIHx8IFtdO1xuICB9XG5cbiAgY29uc3QgY29tbWVudHMgPSBnZXRDb21tZW50c0ZvckFydFBpZWNlKHNsdWcsIGFydFBpZWNlc0luZm8pO1xuXG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb24+XG4gICAgICA8Q29udGVudFdyYXBwZXI+XG4gICAgICAgIDxBcnRpc3Q+e2FydGlzdH08L0FydGlzdD5cbiAgICAgICAgPFRpdGxlPnt0aXRsZX08L1RpdGxlPlxuICAgICAgICA8RGV0YWlscz5cbiAgICAgICAgICB7eWVhcn0sIHtnZW5yZX1cbiAgICAgICAgPC9EZXRhaWxzPlxuICAgICAgICA8Q29sb3JMaXN0PlxuICAgICAgICAgIHtjb2xvcnM/Lm1hcCgoY29sb3IsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8Q29sb3Iga2V5PXtpbmRleH0gY29sb3I9e2NvbG9yfSBhcmlhLWxhYmVsPXtjb2xvcn0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Db2xvckxpc3Q+XG4gICAgICAgIDxDb21tZW50V3JhcHBlcj5cbiAgICAgICAgICA8Q29tbWVudEZvcm1cbiAgICAgICAgICAgIGFkZENvbW1lbnQ9e2FkZENvbW1lbnR9XG4gICAgICAgICAgICBhcnRQaWVjZXNJbmZvPXthcnRQaWVjZXNJbmZvfVxuICAgICAgICAgICAgc2x1Zz17c2x1Z31cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtjb21tZW50cyAmJiA8Q29tbWVudHMgY29tbWVudHM9e2NvbW1lbnRzfSAvPn1cbiAgICAgICAgPC9Db21tZW50V3JhcHBlcj5cbiAgICAgIDwvQ29udGVudFdyYXBwZXI+XG5cbiAgICAgIDxJbWFnZVdyYXBwZXI+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICAgIGFsdD17dGl0bGV9XG4gICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICAvPlxuICAgICAgICA8SWNvbldyYXBwZXI+XG4gICAgICAgICAgPEZhdm9yaXRlQnV0dG9uXG4gICAgICAgICAgICBpc0Zhdm9yaXRlPXtpc0Zhdm9yaXRlfVxuICAgICAgICAgICAgb25Ub2dnbGVGYXZvcml0ZT17b25Ub2dnbGVGYXZvcml0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0ljb25XcmFwcGVyPlxuICAgICAgICA8QmFja0xpbmsgaHJlZj1cIi9hcnQtcGllY2VzXCI+4oaQIEJhY2s8L0JhY2tMaW5rPlxuICAgICAgPC9JbWFnZVdyYXBwZXI+XG4gICAgPC9TZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRQaWVjZURldGFpbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiTGluayIsIkZhdm9yaXRlQnV0dG9uIiwidXNlUm91dGVyIiwiQ29tbWVudEZvcm0iLCJDb21tZW50cyIsInN0eWxlZCIsIkNvbG9yIiwibGkiLCJwcm9wcyIsImNvbG9yIiwiU2VjdGlvbiIsInNlY3Rpb24iLCJDb250ZW50V3JhcHBlciIsImRpdiIsIkNvbW1lbnRXcmFwcGVyIiwiSW1hZ2VXcmFwcGVyIiwiSWNvbldyYXBwZXIiLCJUaXRsZSIsImgyIiwiQXJ0aXN0IiwiaDEiLCJEZXRhaWxzIiwicCIsIkJhY2tMaW5rIiwiQ29sb3JMaXN0IiwidWwiLCJBcnRQaWVjZURldGFpbCIsImltYWdlIiwidGl0bGUiLCJhcnRpc3QiLCJ5ZWFyIiwiZ2VucmUiLCJpc0Zhdm9yaXRlIiwib25Ub2dnbGVGYXZvcml0ZSIsImFydFBpZWNlc0luZm8iLCJhZGRDb21tZW50IiwiY29sb3JzIiwicm91dGVyIiwic2x1ZyIsInF1ZXJ5IiwiZ2V0Q29tbWVudHNGb3JBcnRQaWVjZSIsImFydFBpZWNlIiwiZmluZCIsImNvbW1lbnRzIiwibWFwIiwiaW5kZXgiLCJhcmlhLWxhYmVsIiwibGF5b3V0IiwiYWx0Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ArtPieceDetail/ArtPieceDetail.js\n"));

/***/ })

});