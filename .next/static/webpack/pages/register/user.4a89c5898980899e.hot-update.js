"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register/user",{

/***/ "./components/Registration/UserRegistration/UserRegistration.js":
/*!**********************************************************************!*\
  !*** ./components/Registration/UserRegistration/UserRegistration.js ***!
  \**********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserRegistration; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shared_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared-components/Button */ \"./shared-components/Button/index.js\");\n/* harmony import */ var _shared_components_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared-components/Input */ \"./shared-components/Input/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _shared_components_Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared-components/Label */ \"./shared-components/Label/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction UserRegistration(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), firstName = ref[0], setFirstName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), lastName = ref1[0], setLastName = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"formbox\",\n        __source: {\n            fileName: \"D:\\\\Projects\\\\Clone frontend redbus\\\\cloneFrontend\\\\components\\\\Registration\\\\UserRegistration\\\\UserRegistration.js\",\n            lineNumber: 11,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                __source: {\n                    fileName: \"D:\\\\Projects\\\\Clone frontend redbus\\\\cloneFrontend\\\\components\\\\Registration\\\\UserRegistration\\\\UserRegistration.js\",\n                    lineNumber: 12,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_Label__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        text: \"First Name:  \",\n                        htmlFor: \"\",\n                        __source: {\n                            fileName: \"D:\\\\Projects\\\\Clone frontend redbus\\\\cloneFrontend\\\\components\\\\Registration\\\\UserRegistration\\\\UserRegistration.js\",\n                            lineNumber: 13,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        value: firstName,\n                        onChange: function(e) {\n                            return setFirstName(e.target.value);\n                        },\n                        __source: {\n                            fileName: \"D:\\\\Projects\\\\Clone frontend redbus\\\\cloneFrontend\\\\components\\\\Registration\\\\UserRegistration\\\\UserRegistration.js\",\n                            lineNumber: 14,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                __source: {\n                    fileName: \"D:\\\\Projects\\\\Clone frontend redbus\\\\cloneFrontend\\\\components\\\\Registration\\\\UserRegistration\\\\UserRegistration.js\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_Label__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        text: \"Last Name:  \",\n                        htmlFor: \"\",\n                        __source: {\n                            fileName: \"D:\\\\Projects\\\\Clone frontend redbus\\\\cloneFrontend\\\\components\\\\Registration\\\\UserRegistration\\\\UserRegistration.js\",\n                            lineNumber: 21,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        value: lastName,\n                        onChange: function(e) {\n                            return setLastName(e.target.value);\n                        },\n                        __source: {\n                            fileName: \"D:\\\\Projects\\\\Clone frontend redbus\\\\cloneFrontend\\\\components\\\\Registration\\\\UserRegistration\\\\UserRegistration.js\",\n                            lineNumber: 22,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Register\",\n                type: \"button\",\n                btnStyle: \"primaryOutline\",\n                onClick: function() {\n                    return console.log(firstName + \" \" + lastName);\n                },\n                __source: {\n                    fileName: \"D:\\\\Projects\\\\Clone frontend redbus\\\\cloneFrontend\\\\components\\\\Registration\\\\UserRegistration\\\\UserRegistration.js\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                },\n                __self: this\n            })\n        ]\n    }));\n};\n_s(UserRegistration, \"RbrO7EvaECjsVDQyExqmmCjcan0=\");\n_c = UserRegistration;\nvar _c;\n$RefreshReg$(_c, \"UserRegistration\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlZ2lzdHJhdGlvbi9Vc2VyUmVnaXN0cmF0aW9uL1VzZXJSZWdpc3RyYXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUNGO0FBQ3BCO0FBQ29COztBQUVyQyxRQUFRLENBQUNJLGdCQUFnQixDQUFDQyxLQUFLLEVBQUUsQ0FBQzs7SUFDL0MsR0FBSyxDQUE2QkgsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBdENJLFNBQVMsR0FBa0JKLEdBQVksS0FBNUJLLFlBQVksR0FBSUwsR0FBWTtJQUM5QyxHQUFLLENBQTJCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUFwQ00sUUFBUSxHQUFpQk4sSUFBWSxLQUEzQk8sV0FBVyxHQUFJUCxJQUFZO0lBRTVDLE1BQU0sdUVBQ0hRLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQVM7Ozs7Ozs7O2tGQUNyQkQsQ0FBRzs7Ozs7Ozs7eUZBQ0RQLGdFQUFLO3dCQUFDUyxJQUFJLEVBQUUsQ0FBZTt3QkFBRUMsT0FBTyxFQUFFLENBQUU7Ozs7Ozs7O3lGQUN4Q1osZ0VBQUs7d0JBQ0phLEtBQUssRUFBRVIsU0FBUzt3QkFDaEJTLFFBQVEsRUFBRSxRQUFRLENBQVBDLENBQUM7NEJBQUtULE1BQU0sQ0FBTkEsWUFBWSxDQUFDUyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7a0ZBSS9DSixDQUFHOzs7Ozs7Ozt5RkFDRFAsZ0VBQUs7d0JBQUNTLElBQUksRUFBRSxDQUFjO3dCQUFFQyxPQUFPLEVBQUUsQ0FBRTs7Ozs7Ozs7eUZBQ3ZDWixnRUFBSzt3QkFBQ2EsS0FBSyxFQUFFTixRQUFRO3dCQUFFTyxRQUFRLEVBQUUsUUFBUSxDQUFQQyxDQUFDOzRCQUFLUCxNQUFNLENBQU5BLFdBQVcsQ0FBQ08sQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7O2lGQUdwRWQsaUVBQU07Z0JBQ0xZLElBQUksRUFBRSxDQUFVO2dCQUNoQk0sSUFBSSxFQUFFLENBQVE7Z0JBQ2RDLFFBQVEsRUFBRSxDQUFnQjtnQkFDMUJDLE9BQU8sRUFBRSxRQUFRO29CQUFGQyxNQUFNLENBQU5BLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDaEIsU0FBUyxHQUFHLENBQUcsS0FBR0UsUUFBUTs7Ozs7Ozs7Ozs7QUFJN0QsQ0FBQztHQTNCdUJKLGdCQUFnQjtLQUFoQkEsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUmVnaXN0cmF0aW9uL1VzZXJSZWdpc3RyYXRpb24vVXNlclJlZ2lzdHJhdGlvbi5qcz83Y2M2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC1jb21wb25lbnRzL0J1dHRvblwiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC1jb21wb25lbnRzL0lucHV0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkLWNvbXBvbmVudHMvTGFiZWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJSZWdpc3RyYXRpb24ocHJvcHMpIHtcclxuICBjb25zdCBbZmlyc3ROYW1lLCBzZXRGaXJzdE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xhc3ROYW1lLCBzZXRMYXN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybWJveFwiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxMYWJlbCB0ZXh0PXtcIkZpcnN0IE5hbWU6ICBcIn0gaHRtbEZvcj17XCJcIn0gLz5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHZhbHVlPXtmaXJzdE5hbWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZpcnN0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxMYWJlbCB0ZXh0PXtcIkxhc3QgTmFtZTogIFwifSBodG1sRm9yPXtcIlwifSAvPlxyXG4gICAgICAgIDxJbnB1dCB2YWx1ZT17bGFzdE5hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TGFzdE5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICB0ZXh0PXtcIlJlZ2lzdGVyXCJ9XHJcbiAgICAgICAgdHlwZT17XCJidXR0b25cIn1cclxuICAgICAgICBidG5TdHlsZT17XCJwcmltYXJ5T3V0bGluZVwifVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKGZpcnN0TmFtZSArIFwiIFwiICsgbGFzdE5hbWUpfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiSW5wdXQiLCJ1c2VTdGF0ZSIsIkxhYmVsIiwiVXNlclJlZ2lzdHJhdGlvbiIsInByb3BzIiwiZmlyc3ROYW1lIiwic2V0Rmlyc3ROYW1lIiwibGFzdE5hbWUiLCJzZXRMYXN0TmFtZSIsImRpdiIsImNsYXNzTmFtZSIsInRleHQiLCJodG1sRm9yIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0eXBlIiwiYnRuU3R5bGUiLCJvbkNsaWNrIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Registration/UserRegistration/UserRegistration.js\n");

/***/ })

});