/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/scroll/ScrollToTop.js":
/*!******************************************!*\
  !*** ./components/scroll/ScrollToTop.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ScrollToTop\": () => (/* binding */ ScrollToTop)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/outline */ \"@heroicons/react/outline\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst classNames = (...classes)=>{\n    return classes.filter(Boolean).join(' ');\n};\nconst ScrollToTop = ()=>{\n    const { 0: isVisible , 1: setIsVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const toggleVisibility = ()=>{\n        if (window.pageYOffset > 300) {\n            setIsVisible(true);\n        } else {\n            setIsVisible(false);\n        }\n    };\n    const scrollToTop = ()=>{\n        window.scrollTo({\n            top: 0,\n            behavior: 'smooth'\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        window.addEventListener('scroll', toggleVisibility);\n        return ()=>{\n            window.removeEventListener('scroll', toggleVisibility);\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed bottom-2 right-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            onClick: scrollToTop,\n            className: classNames(isVisible ? 'opacity-100' : 'opacity-0', 'inline-flex items-center p-3 rounded-full shadow-sm text-gray-50 bg-blue-600 transition-opacity hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-500'),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.ChevronDoubleUpIcon, {\n                className: \"h-5 w-5\",\n                \"aria-hidden\": \"true\"\n            }, void 0, false, {\n                fileName: \"/Users/ferdous/Desktop/portfolio-blog/components/scroll/ScrollToTop.js\",\n                lineNumber: 44,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/ferdous/Desktop/portfolio-blog/components/scroll/ScrollToTop.js\",\n            lineNumber: 36,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ferdous/Desktop/portfolio-blog/components/scroll/ScrollToTop.js\",\n        lineNumber: 35,\n        columnNumber: 7\n    }, undefined));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Njcm9sbC9TY3JvbGxUb1RvcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4RDtBQUNuQjtBQUUzQyxLQUFLLENBQUNHLFVBQVUsT0FBT0MsT0FBTyxHQUFLLENBQUM7SUFDaEMsTUFBTSxDQUFDQSxPQUFPLENBQUNDLE1BQU0sQ0FBQ0MsT0FBTyxFQUFFQyxJQUFJLENBQUMsQ0FBRztBQUMzQyxDQUFDO0FBRU0sS0FBSyxDQUFDQyxXQUFXLE9BQVMsQ0FBQztJQUM5QixLQUFLLE1BQUVDLFNBQVMsTUFBRUMsWUFBWSxNQUFJUiwrQ0FBUSxDQUFDLEtBQUs7SUFFaEQsS0FBSyxDQUFDUyxnQkFBZ0IsT0FBUyxDQUFDO1FBQzlCLEVBQUUsRUFBRUMsTUFBTSxDQUFDQyxXQUFXLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDN0JILFlBQVksQ0FBQyxJQUFJO1FBQ25CLENBQUMsTUFBTSxDQUFDO1lBQ05BLFlBQVksQ0FBQyxLQUFLO1FBQ3BCLENBQUM7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDSSxXQUFXLE9BQVMsQ0FBQztRQUN6QkYsTUFBTSxDQUFDRyxRQUFRLENBQUMsQ0FBQztZQUNmQyxHQUFHLEVBQUUsQ0FBQztZQUNOQyxRQUFRLEVBQUUsQ0FBUTtRQUNwQixDQUFDO0lBQ0gsQ0FBQztJQUVEaEIsZ0RBQVMsS0FBTyxDQUFDO1FBQ2ZXLE1BQU0sQ0FBQ00sZ0JBQWdCLENBQUMsQ0FBUSxTQUFFUCxnQkFBZ0I7UUFFbEQsTUFBTSxLQUFPLENBQUM7WUFDWkMsTUFBTSxDQUFDTyxtQkFBbUIsQ0FBQyxDQUFRLFNBQUVSLGdCQUFnQjtRQUN2RCxDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLE1BQU0sNkVBQ0hTLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQXdCOzhGQUNwQ0MsQ0FBTTtZQUNMQyxJQUFJLEVBQUMsQ0FBUTtZQUNiQyxPQUFPLEVBQUVWLFdBQVc7WUFDcEJPLFNBQVMsRUFBRWxCLFVBQVUsQ0FDbkJNLFNBQVMsR0FBRyxDQUFhLGVBQUcsQ0FBVyxZQUN2QyxDQUEyTDtrR0FHNUxULHlFQUFtQjtnQkFBQ3FCLFNBQVMsRUFBQyxDQUFTO2dCQUFDSSxDQUFXLGNBQUMsQ0FBTTs7Ozs7Ozs7Ozs7Ozs7OztBQUluRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLWJsb2cvLi9jb21wb25lbnRzL3Njcm9sbC9TY3JvbGxUb1RvcC5qcz83ODAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoZXZyb25Eb3VibGVVcEljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoLi4uY2xhc3NlcykgPT4ge1xuICAgIHJldHVybiBjbGFzc2VzLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG59O1xuXG5leHBvcnQgY29uc3QgU2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XG4gICAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgXG4gICAgY29uc3QgdG9nZ2xlVmlzaWJpbGl0eSA9ICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAzMDApIHtcbiAgICAgICAgc2V0SXNWaXNpYmxlKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0SXNWaXNpYmxlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuICBcbiAgICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgfSk7XG4gICAgfTtcbiAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0b2dnbGVWaXNpYmlsaXR5KTtcbiAgXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdG9nZ2xlVmlzaWJpbGl0eSk7XG4gICAgICB9O1xuICAgIH0sIFtdKTtcbiAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaXhlZCBib3R0b20tMiByaWdodC0yJz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICBvbkNsaWNrPXtzY3JvbGxUb1RvcH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICBpc1Zpc2libGUgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktMCcsXG4gICAgICAgICAgICAnaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHAtMyByb3VuZGVkLWZ1bGwgc2hhZG93LXNtIHRleHQtZ3JheS01MCBiZy1ibHVlLTYwMCB0cmFuc2l0aW9uLW9wYWNpdHkgaG92ZXI6YmctYmx1ZS03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLW9mZnNldC0xIGZvY3VzOnJpbmctYmx1ZS01MDAnXG4gICAgICAgICAgKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDaGV2cm9uRG91YmxlVXBJY29uIGNsYXNzTmFtZT0naC01IHctNScgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTsiXSwibmFtZXMiOlsiQ2hldnJvbkRvdWJsZVVwSWNvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY2xhc3NOYW1lcyIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIlNjcm9sbFRvVG9wIiwiaXNWaXNpYmxlIiwic2V0SXNWaXNpYmxlIiwidG9nZ2xlVmlzaWJpbGl0eSIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG9Ub3AiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsImFyaWEtaGlkZGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/scroll/ScrollToTop.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nextjs-progressbar */ \"nextjs-progressbar\");\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_scroll_ScrollToTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/scroll/ScrollToTop */ \"./components/scroll/ScrollToTop.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {\n        enableSystem: true,\n        attribute: \"class\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((nextjs_progressbar__WEBPACK_IMPORTED_MODULE_2___default()), {\n                color: \"#2863EB\",\n                height: 2,\n                options: {\n                    showSpinner: false\n                }\n            }, void 0, false, {\n                fileName: \"/Users/ferdous/Desktop/portfolio-blog/pages/_app.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/ferdous/Desktop/portfolio-blog/pages/_app.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_scroll_ScrollToTop__WEBPACK_IMPORTED_MODULE_3__.ScrollToTop, {}, void 0, false, {\n                fileName: \"/Users/ferdous/Desktop/portfolio-blog/pages/_app.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ferdous/Desktop/portfolio-blog/pages/_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ0c7QUFDZ0I7QUFDaEM7U0FFckJHLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sNkVBQ0hMLHNEQUFhO1FBQUNNLFlBQVksRUFBRSxJQUFJO1FBQUVDLFNBQVMsRUFBQyxDQUFPOzt3RkFDakROLDJEQUFhO2dCQUNaTyxLQUFLLEVBQUMsQ0FBUztnQkFDZkMsTUFBTSxFQUFFLENBQUM7Z0JBQ1RDLE9BQU8sRUFBRSxDQUFDO29CQUNOQyxXQUFXLEVBQUUsS0FBSztnQkFDcEIsQ0FBQzs7Ozs7O3dGQUVKUCxTQUFTO21CQUFLQyxTQUFTOzs7Ozs7d0ZBQ3ZCSCx1RUFBVzs7Ozs7Ozs7Ozs7QUFHbEIsQ0FBQztBQUVELGlFQUFlQyxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLWJsb2cvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ25leHQtdGhlbWVzJztcbmltcG9ydCBOZXh0TlByb2dyZXNzIGZyb20gJ25leHRqcy1wcm9ncmVzc2Jhcic7XG5pbXBvcnQgeyBTY3JvbGxUb1RvcCB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2Nyb2xsL1Njcm9sbFRvVG9wJztcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgZW5hYmxlU3lzdGVtPXt0cnVlfSBhdHRyaWJ1dGU9XCJjbGFzc1wiPlxuICAgICAgPE5leHROUHJvZ3Jlc3NcbiAgICAgICAgY29sb3I9XCIjMjg2M0VCXCJcbiAgICAgICAgaGVpZ2h0PXsyfVxuICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICBzaG93U3Bpbm5lcjogZmFsc2VcbiAgICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDxTY3JvbGxUb1RvcCAvPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJUaGVtZVByb3ZpZGVyIiwiTmV4dE5Qcm9ncmVzcyIsIlNjcm9sbFRvVG9wIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJlbmFibGVTeXN0ZW0iLCJhdHRyaWJ1dGUiLCJjb2xvciIsImhlaWdodCIsIm9wdGlvbnMiLCJzaG93U3Bpbm5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@heroicons/react/outline":
/*!*******************************************!*\
  !*** external "@heroicons/react/outline" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ "nextjs-progressbar":
/*!*************************************!*\
  !*** external "nextjs-progressbar" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("nextjs-progressbar");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();