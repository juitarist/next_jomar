"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contact",{

/***/ "./components/Contact.jsx":
/*!********************************!*\
  !*** ./components/Contact.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emailjs-com */ \"./node_modules/emailjs-com/es/index.js\");\n\n\n\nconst Contact = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-[1240px] m-auto p-4 h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold text-center p-4\",\n                children: \"Let's work together\"\n            }, void 0, false, {\n                fileName: \"/Users/jomar/Desktop/github/nextjs/next_jomar/components/Contact.jsx\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"max-w-[600px] m-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-2 gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"border shadow-lg p-3\",\n                                type: \"text\",\n                                placeholder: \"Name\",\n                                value: toSend.from_name,\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"/Users/jomar/Desktop/github/nextjs/next_jomar/components/Contact.jsx\",\n                                lineNumber: 10,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"border shadow-lg p-3\",\n                                type: \"email\",\n                                placeholder: \"Email\",\n                                value: toSend.email,\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"/Users/jomar/Desktop/github/nextjs/next_jomar/components/Contact.jsx\",\n                                lineNumber: 11,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jomar/Desktop/github/nextjs/next_jomar/components/Contact.jsx\",\n                        lineNumber: 9,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"border shadow-lg p-3 w-full my-2\",\n                        type: \"text\",\n                        placeholder: \"Subject\",\n                        value: toSend.subject,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/jomar/Desktop/github/nextjs/next_jomar/components/Contact.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: \"border shadow-lg p-3 w-full\",\n                        cols: \"30\",\n                        rows: \"10\",\n                        placeholder: \"Message\",\n                        value: toSend.message,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/jomar/Desktop/github/nextjs/next_jomar/components/Contact.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"border shadow-lg p-3 w-full mt-2\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jomar/Desktop/github/nextjs/next_jomar/components/Contact.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jomar/Desktop/github/nextjs/next_jomar/components/Contact.jsx\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jomar/Desktop/github/nextjs/next_jomar/components/Contact.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRhY3QuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUI7QUFDVTtBQUVuQyxNQUFNRSxVQUFVLElBQU07SUFDcEIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBcUM7Ozs7OzswQkFDbkQsOERBQUNFO2dCQUFLRixXQUFVOztrQ0FDWiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRztnQ0FBTUgsV0FBVTtnQ0FBdUJJLE1BQUs7Z0NBQU9DLGFBQVk7Z0NBQVdDLE9BQU9DLE9BQU9DLFNBQVM7Z0NBQUVDLFVBQVVDOzs7Ozs7MENBQzlHLDhEQUFDUDtnQ0FBTUgsV0FBVTtnQ0FBdUJJLE1BQUs7Z0NBQVFDLGFBQVk7Z0NBQVlDLE9BQU9DLE9BQU9JLEtBQUs7Z0NBQUVGLFVBQVVDOzs7Ozs7Ozs7Ozs7a0NBRWhILDhEQUFDUDt3QkFBTUgsV0FBVTt3QkFBbUNJLE1BQUs7d0JBQU9DLGFBQVk7d0JBQVVDLE9BQU9DLE9BQU9LLE9BQU87d0JBQUVILFVBQVVDOzs7Ozs7a0NBQ3ZILDhEQUFDRzt3QkFBU2IsV0FBVTt3QkFBOEJjLE1BQUs7d0JBQUtDLE1BQUs7d0JBQUtWLGFBQVk7d0JBQVVDLE9BQU9DLE9BQU9TLE9BQU87d0JBQUVQLFVBQVVDOzs7Ozs7a0NBQzdILDhEQUFDTzt3QkFBT2pCLFdBQVU7a0NBQW1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakU7S0FmTUY7QUFpQk4sK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0LmpzeD9jMmU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHNlbmQgfSBmcm9tICdlbWFpbGpzLWNvbSc7XG5cbmNvbnN0IENvbnRhY3QgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J21heC13LVsxMjQwcHhdIG0tYXV0byBwLTQgaC1zY3JlZW4nPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgcC00Jz5MZXQncyB3b3JrIHRvZ2V0aGVyPC9oMT5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdtYXgtdy1bNjAwcHhdIG0tYXV0byc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMiBnYXAtMic+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nYm9yZGVyIHNoYWRvdy1sZyBwLTMnIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9J05hbWUnICAgICB2YWx1ZT17dG9TZW5kLmZyb21fbmFtZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2JvcmRlciBzaGFkb3ctbGcgcC0zJyB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj0nRW1haWwnICAgICB2YWx1ZT17dG9TZW5kLmVtYWlsfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2JvcmRlciBzaGFkb3ctbGcgcC0zIHctZnVsbCBteS0yJyB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdTdWJqZWN0JyB2YWx1ZT17dG9TZW5kLnN1YmplY3R9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9J2JvcmRlciBzaGFkb3ctbGcgcC0zIHctZnVsbCcgY29scz1cIjMwXCIgcm93cz1cIjEwXCIgcGxhY2Vob2xkZXI9J01lc3NhZ2UnIHZhbHVlPXt0b1NlbmQubWVzc2FnZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdib3JkZXIgc2hhZG93LWxnIHAtMyB3LWZ1bGwgbXQtMic+U3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Il0sIm5hbWVzIjpbIlJlYWN0Iiwic2VuZCIsIkNvbnRhY3QiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwidG9TZW5kIiwiZnJvbV9uYW1lIiwib25DaGFuZ2UiLCJoYW5kbGVDaGFuZ2UiLCJlbWFpbCIsInN1YmplY3QiLCJ0ZXh0YXJlYSIsImNvbHMiLCJyb3dzIiwibWVzc2FnZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Contact.jsx\n"));

/***/ })

});