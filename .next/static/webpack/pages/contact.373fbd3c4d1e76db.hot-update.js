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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emailjs-com */ \"./node_modules/emailjs-com/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Form() {\n    _s();\n    const [toSend, setToSend] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        from_name: \"\",\n        email: \"\",\n        subject: \"\",\n        message: \"\"\n    });\n    const onSubmit = (e)=>{\n        e.preventDefault();\n        (0,emailjs_com__WEBPACK_IMPORTED_MODULE_2__.send)(service_cggiti5, template_1cml9lb, toSend, \"User ID\").then((response)=>{\n            console.log(\"SUCCESS!\", response.status, response.text);\n        }).catch((err)=>{\n            console.log(\"FAILED...\", err);\n        });\n    };\n    const handleChange = (e)=>{\n        setToSend({\n            ...toSend,\n            [e.target.name]: e.target.value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-[1240px] m-auto p-4 h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold text-center p-4\",\n                children: \"Let's work together\"\n            }, void 0, false, {\n                fileName: \"/Users/jomar/Desktop/github/nextjs/next_jomar/components/Contact.jsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"max-w-[600px] m-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-2 gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"border shadow-lg p-3\",\n                                name: \"from_name\",\n                                type: \"text\",\n                                placeholder: \"Name\",\n                                value: toSend.from_name,\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"/Users/jomar/Desktop/github/nextjs/next_jomar/components/Contact.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"border shadow-lg p-3\",\n                                name: \"email\",\n                                type: \"email\",\n                                placeholder: \"Email\",\n                                value: toSend.email,\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"/Users/jomar/Desktop/github/nextjs/next_jomar/components/Contact.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jomar/Desktop/github/nextjs/next_jomar/components/Contact.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"border shadow-lg p-3 w-full my-2\",\n                        name: \"subject\",\n                        type: \"text\",\n                        placeholder: \"Subject\",\n                        value: toSend.subject,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/jomar/Desktop/github/nextjs/next_jomar/components/Contact.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: \"border shadow-lg p-3 w-full\",\n                        cols: \"30\",\n                        rows: \"10\",\n                        name: \"message\",\n                        placeholder: \"Message\",\n                        value: toSend.message,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/jomar/Desktop/github/nextjs/next_jomar/components/Contact.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"border shadow-lg p-3 w-full mt-2\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jomar/Desktop/github/nextjs/next_jomar/components/Contact.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jomar/Desktop/github/nextjs/next_jomar/components/Contact.jsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jomar/Desktop/github/nextjs/next_jomar/components/Contact.jsx\",\n        lineNumber: 34,\n        columnNumber: 1\n    }, this);\n}\n_s(Form, \"xMPDNPjRQn4/vRnNIHQRzMot1UM=\");\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRhY3QuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlCO0FBQ1E7QUFDRTtBQUVuQyxTQUFTRyxPQUFPOztJQUNkLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSiwrQ0FBUUEsQ0FBQztRQUNuQ0ssV0FBVztRQUNYQyxPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsU0FBUztJQUNYO0lBRUEsTUFBTUMsV0FBVyxDQUFDQyxJQUFNO1FBQ3RCQSxFQUFFQyxjQUFjO1FBQ2hCVixpREFBSUEsQ0FDRlcsaUJBQ0FDLGtCQUNBVixRQUNBLFdBRUNXLElBQUksQ0FBQyxDQUFDQyxXQUFhO1lBQ2xCQyxRQUFRQyxHQUFHLENBQUMsWUFBWUYsU0FBU0csTUFBTSxFQUFFSCxTQUFTSSxJQUFJO1FBQ3hELEdBQ0NDLEtBQUssQ0FBQyxDQUFDQyxNQUFRO1lBQ2RMLFFBQVFDLEdBQUcsQ0FBQyxhQUFhSTtRQUMzQjtJQUNKO0lBRUEsTUFBTUMsZUFBZSxDQUFDWixJQUFNO1FBQzFCTixVQUFVO1lBQUUsR0FBR0QsTUFBTTtZQUFFLENBQUNPLEVBQUVhLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEVBQUVkLEVBQUVhLE1BQU0sQ0FBQ0UsS0FBSztRQUFDO0lBQ3pEO0lBRUEscUJBQ0YsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNQLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBcUM7Ozs7OzswQkFDbkQsOERBQUNFO2dCQUFLRixXQUFVOztrQ0FDWiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRztnQ0FBTUgsV0FBVTtnQ0FBdUJILE1BQUs7Z0NBQVlPLE1BQUs7Z0NBQU9DLGFBQVk7Z0NBQVdQLE9BQU90QixPQUFPRSxTQUFTO2dDQUFFNEIsVUFBVVg7Ozs7OzswQ0FDL0gsOERBQUNRO2dDQUFNSCxXQUFVO2dDQUF1QkgsTUFBSztnQ0FBUU8sTUFBSztnQ0FBUUMsYUFBWTtnQ0FBWVAsT0FBT3RCLE9BQU9HLEtBQUs7Z0NBQUUyQixVQUFVWDs7Ozs7Ozs7Ozs7O2tDQUU3SCw4REFBQ1E7d0JBQU1ILFdBQVU7d0JBQW1DSCxNQUFLO3dCQUFVTyxNQUFLO3dCQUFPQyxhQUFZO3dCQUFVUCxPQUFPdEIsT0FBT0ksT0FBTzt3QkFBRTBCLFVBQVVYOzs7Ozs7a0NBQ3RJLDhEQUFDWTt3QkFBU1AsV0FBVTt3QkFBOEJRLE1BQUs7d0JBQUtDLE1BQUs7d0JBQUtaLE1BQUs7d0JBQVVRLGFBQVk7d0JBQVVQLE9BQU90QixPQUFPSyxPQUFPO3dCQUFFeUIsVUFBVVg7Ozs7OztrQ0FDNUksOERBQUNlO3dCQUFPTixNQUFLO3dCQUFTSixXQUFVO2tDQUFtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSS9FO0dBMUNTekI7S0FBQUE7QUE0Q1QsK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0LmpzeD9jMmU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc2VuZCB9IGZyb20gJ2VtYWlsanMtY29tJztcblxuZnVuY3Rpb24gRm9ybSgpIHtcbiAgY29uc3QgW3RvU2VuZCwgc2V0VG9TZW5kXSA9IHVzZVN0YXRlKHtcbiAgICBmcm9tX25hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBzdWJqZWN0OiAnJyxcbiAgICBtZXNzYWdlOiAnJyxcbiAgfSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZW5kKFxuICAgICAgc2VydmljZV9jZ2dpdGk1LFxuICAgICAgdGVtcGxhdGVfMWNtbDlsYixcbiAgICAgIHRvU2VuZCxcbiAgICAgICdVc2VyIElEJ1xuICAgIClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnU1VDQ0VTUyEnLCByZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLnRleHQpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdGQUlMRUQuLi4nLCBlcnIpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRUb1NlbmQoeyAuLi50b1NlbmQsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbjxkaXYgY2xhc3NOYW1lPSdtYXgtdy1bMTI0MHB4XSBtLWF1dG8gcC00IGgtc2NyZWVuJz5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0yeGwgZm9udC1ib2xkIHRleHQtY2VudGVyIHAtNCc+TGV0J3Mgd29yayB0b2dldGhlcjwvaDE+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nbWF4LXctWzYwMHB4XSBtLWF1dG8nPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTIgZ2FwLTInPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2JvcmRlciBzaGFkb3ctbGcgcC0zJyBuYW1lPSdmcm9tX25hbWUnIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9J05hbWUnICAgICB2YWx1ZT17dG9TZW5kLmZyb21fbmFtZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2JvcmRlciBzaGFkb3ctbGcgcC0zJyBuYW1lPSdlbWFpbCcgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9J0VtYWlsJyAgICAgdmFsdWU9e3RvU2VuZC5lbWFpbH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdib3JkZXIgc2hhZG93LWxnIHAtMyB3LWZ1bGwgbXktMicgbmFtZT0nc3ViamVjdCcgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj0nU3ViamVjdCcgdmFsdWU9e3RvU2VuZC5zdWJqZWN0fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPSdib3JkZXIgc2hhZG93LWxnIHAtMyB3LWZ1bGwnIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIG5hbWU9J21lc3NhZ2UnIHBsYWNlaG9sZGVyPSdNZXNzYWdlJyB2YWx1ZT17dG9TZW5kLm1lc3NhZ2V9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdib3JkZXIgc2hhZG93LWxnIHAtMyB3LWZ1bGwgbXQtMic+U3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic2VuZCIsIkZvcm0iLCJ0b1NlbmQiLCJzZXRUb1NlbmQiLCJmcm9tX25hbWUiLCJlbWFpbCIsInN1YmplY3QiLCJtZXNzYWdlIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXJ2aWNlX2NnZ2l0aTUiLCJ0ZW1wbGF0ZV8xY21sOWxiIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInRleHQiLCJjYXRjaCIsImVyciIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0ZXh0YXJlYSIsImNvbHMiLCJyb3dzIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Contact.jsx\n"));

/***/ })

});