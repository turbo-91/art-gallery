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

/***/ "./components/CommentForm/CommentForm.js":
/*!***********************************************!*\
  !*** ./components/CommentForm/CommentForm.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  flex-direction: column; /* Arrange label, textarea, and button vertically */\\n  max-width: 30vw; /* Limit form width */\\n  margin-top: 3vw;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  margin-bottom: 0.5rem;\\n  font-size: 0.7rem;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  margin-bottom: 0.2rem; /* Space between textarea and button */\\n  padding: 0.2rem;\\n  border: 1px solid black; /* Light border */\\n  font-size: 0.5em; /* Slightly smaller font size */\\n  resize: none;\\n  font-family: Helvetica, Arial;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  align-self: flex-end; /* Align button to the left */\\n  padding: 0.2rem 0.2rem; /* Padding for button */\\n  background-color: black; /* Primary color for the button */\\n  color: white; /* Text color for the button */\\n  border: none; /* Remove default border */\\n  font-size: 0.9em; /* Slightly smaller font size */\\n  cursor: pointer; /* Pointer cursor on hover */\\n\\n  &:hover {\\n    transform: translateX(5px); /* Move 5px to the right */\\n  }\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\n\nCommentForm;\n\n\nconst Form = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].form.withConfig({\n    displayName: \"CommentForm__Form\",\n    componentId: \"sc-539a52b0-0\"\n})(_templateObject());\n_c = Form;\nconst Label = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].label.withConfig({\n    displayName: \"CommentForm__Label\",\n    componentId: \"sc-539a52b0-1\"\n})(_templateObject1());\nconst Textarea = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].textarea.withConfig({\n    displayName: \"CommentForm__Textarea\",\n    componentId: \"sc-539a52b0-2\"\n})(_templateObject2());\n_c1 = Textarea;\nconst Button = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button.withConfig({\n    displayName: \"CommentForm__Button\",\n    componentId: \"sc-539a52b0-3\"\n})(_templateObject3());\n_c2 = Button;\nfunction CommentForm(param) {\n    let { addComment, artPiecesInfo, slug } = param;\n    function handleSubmit(event) {\n        event.preventDefault();\n        const { comment_comment, comment_user } = event.target.elements;\n        addComment(slug, comment_comment.value, comment_user.value);\n        event.target.reset();\n        console.log(comment_comment.value);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Form, {\n        onSubmit: handleSubmit,\n        \"aria-label\": \"add comments about art piece\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Textarea, {\n                placeholder: \"Your name\",\n                id: \"comment_user\",\n                name: \"comment_user\",\n                rows: \"1\",\n                required: true\n            }, void 0, false, {\n                fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/CommentForm/CommentForm.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Textarea, {\n                placeholder: \"Add a comment\",\n                id: \"comment_comment\",\n                name: \"comment_comment\",\n                rows: \"3\",\n                required: true\n            }, void 0, false, {\n                fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/CommentForm/CommentForm.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Button, {\n                type: \"submit\",\n                children: \"Send\"\n            }, void 0, false, {\n                fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/CommentForm/CommentForm.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/torbenjost/Documents/newRepo/art-gallery-app/components/CommentForm/CommentForm.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_c3 = CommentForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentForm);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Form\");\n$RefreshReg$(_c1, \"Textarea\");\n$RefreshReg$(_c2, \"Button\");\n$RefreshReg$(_c3, \"CommentForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1lbnRGb3JtL0NvbW1lbnRGb3JtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQTtBQUUwQjtBQUNhO0FBRXZDLE1BQU1HLE9BQU9ELDhEQUFXOzs7O0tBQWxCQztBQU9OLE1BQU1FLFFBQVFILCtEQUFZOzs7O0FBSzFCLE1BQU1LLFdBQVdMLGtFQUFlOzs7O01BQTFCSztBQVNOLE1BQU1FLFNBQVNQLGdFQUFhOzs7O01BQXRCTztBQWNOLFNBQVNULFlBQVksS0FBbUM7UUFBbkMsRUFBRVcsVUFBVSxFQUFFQyxhQUFhLEVBQUVDLElBQUksRUFBRSxHQUFuQztJQUNuQixTQUFTQyxhQUFhQyxLQUFLO1FBQ3pCQSxNQUFNQyxjQUFjO1FBQ3BCLE1BQU0sRUFBRUMsZUFBZSxFQUFFQyxZQUFZLEVBQUUsR0FBR0gsTUFBTUksTUFBTSxDQUFDQyxRQUFRO1FBQy9EVCxXQUFXRSxNQUFNSSxnQkFBZ0JJLEtBQUssRUFBRUgsYUFBYUcsS0FBSztRQUMxRE4sTUFBTUksTUFBTSxDQUFDRyxLQUFLO1FBQ2xCQyxRQUFRQyxHQUFHLENBQUNQLGdCQUFnQkksS0FBSztJQUNuQztJQUVBLHFCQUNFLDhEQUFDbEI7UUFBS3NCLFVBQVVYO1FBQWNZLGNBQVc7OzBCQUN2Qyw4REFBQ25CO2dCQUNDb0IsYUFBWTtnQkFDWkMsSUFBRztnQkFDSEMsTUFBSztnQkFDTEMsTUFBSztnQkFDTEMsUUFBUTs7Ozs7OzBCQUVWLDhEQUFDeEI7Z0JBQ0NvQixhQUFZO2dCQUNaQyxJQUFHO2dCQUNIQyxNQUFLO2dCQUNMQyxNQUFLO2dCQUNMQyxRQUFROzs7Ozs7MEJBRVYsOERBQUN0QjtnQkFBT3VCLE1BQUs7MEJBQVM7Ozs7Ozs7Ozs7OztBQUc1QjtNQTVCU2hDO0FBOEJULCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29tbWVudEZvcm0vQ29tbWVudEZvcm0uanM/YWY3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJDb21tZW50Rm9ybTtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBBcnJhbmdlIGxhYmVsLCB0ZXh0YXJlYSwgYW5kIGJ1dHRvbiB2ZXJ0aWNhbGx5ICovXG4gIG1heC13aWR0aDogMzB2dzsgLyogTGltaXQgZm9ybSB3aWR0aCAqL1xuICBtYXJnaW4tdG9wOiAzdnc7XG5gO1xuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbGBcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBmb250LXNpemU6IDAuN3JlbTtcbmA7XG5cbmNvbnN0IFRleHRhcmVhID0gc3R5bGVkLnRleHRhcmVhYFxuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07IC8qIFNwYWNlIGJldHdlZW4gdGV4dGFyZWEgYW5kIGJ1dHRvbiAqL1xuICBwYWRkaW5nOiAwLjJyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAvKiBMaWdodCBib3JkZXIgKi9cbiAgZm9udC1zaXplOiAwLjVlbTsgLyogU2xpZ2h0bHkgc21hbGxlciBmb250IHNpemUgKi9cbiAgcmVzaXplOiBub25lO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbDtcbmA7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kOyAvKiBBbGlnbiBidXR0b24gdG8gdGhlIGxlZnQgKi9cbiAgcGFkZGluZzogMC4ycmVtIDAuMnJlbTsgLyogUGFkZGluZyBmb3IgYnV0dG9uICovXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAvKiBQcmltYXJ5IGNvbG9yIGZvciB0aGUgYnV0dG9uICovXG4gIGNvbG9yOiB3aGl0ZTsgLyogVGV4dCBjb2xvciBmb3IgdGhlIGJ1dHRvbiAqL1xuICBib3JkZXI6IG5vbmU7IC8qIFJlbW92ZSBkZWZhdWx0IGJvcmRlciAqL1xuICBmb250LXNpemU6IDAuOWVtOyAvKiBTbGlnaHRseSBzbWFsbGVyIGZvbnQgc2l6ZSAqL1xuICBjdXJzb3I6IHBvaW50ZXI7IC8qIFBvaW50ZXIgY3Vyc29yIG9uIGhvdmVyICovXG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7IC8qIE1vdmUgNXB4IHRvIHRoZSByaWdodCAqL1xuICB9XG5gO1xuXG5mdW5jdGlvbiBDb21tZW50Rm9ybSh7IGFkZENvbW1lbnQsIGFydFBpZWNlc0luZm8sIHNsdWcgfSkge1xuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgY29tbWVudF9jb21tZW50LCBjb21tZW50X3VzZXIgfSA9IGV2ZW50LnRhcmdldC5lbGVtZW50cztcbiAgICBhZGRDb21tZW50KHNsdWcsIGNvbW1lbnRfY29tbWVudC52YWx1ZSwgY29tbWVudF91c2VyLnZhbHVlKTtcbiAgICBldmVudC50YXJnZXQucmVzZXQoKTtcbiAgICBjb25zb2xlLmxvZyhjb21tZW50X2NvbW1lbnQudmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBhcmlhLWxhYmVsPVwiYWRkIGNvbW1lbnRzIGFib3V0IGFydCBwaWVjZVwiPlxuICAgICAgPFRleHRhcmVhXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCJcbiAgICAgICAgaWQ9XCJjb21tZW50X3VzZXJcIlxuICAgICAgICBuYW1lPVwiY29tbWVudF91c2VyXCJcbiAgICAgICAgcm93cz1cIjFcIlxuICAgICAgICByZXF1aXJlZFxuICAgICAgLz5cbiAgICAgIDxUZXh0YXJlYVxuICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIGNvbW1lbnRcIlxuICAgICAgICBpZD1cImNvbW1lbnRfY29tbWVudFwiXG4gICAgICAgIG5hbWU9XCJjb21tZW50X2NvbW1lbnRcIlxuICAgICAgICByb3dzPVwiM1wiXG4gICAgICAgIHJlcXVpcmVkXG4gICAgICAvPlxuICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2VuZDwvQnV0dG9uPlxuICAgIDwvRm9ybT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEZvcm07XG4iXSwibmFtZXMiOlsiQ29tbWVudEZvcm0iLCJSZWFjdCIsInN0eWxlZCIsIkZvcm0iLCJmb3JtIiwiTGFiZWwiLCJsYWJlbCIsIlRleHRhcmVhIiwidGV4dGFyZWEiLCJCdXR0b24iLCJidXR0b24iLCJhZGRDb21tZW50IiwiYXJ0UGllY2VzSW5mbyIsInNsdWciLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29tbWVudF9jb21tZW50IiwiY29tbWVudF91c2VyIiwidGFyZ2V0IiwiZWxlbWVudHMiLCJ2YWx1ZSIsInJlc2V0IiwiY29uc29sZSIsImxvZyIsIm9uU3VibWl0IiwiYXJpYS1sYWJlbCIsInBsYWNlaG9sZGVyIiwiaWQiLCJuYW1lIiwicm93cyIsInJlcXVpcmVkIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CommentForm/CommentForm.js\n"));

/***/ })

});