"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(162);
;// CONCATENATED MODULE: external "nextjs-progressbar"
const external_nextjs_progressbar_namespaceObject = require("nextjs-progressbar");
var external_nextjs_progressbar_default = /*#__PURE__*/__webpack_require__.n(external_nextjs_progressbar_namespaceObject);
// EXTERNAL MODULE: external "@heroicons/react/outline"
var outline_ = __webpack_require__(768);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./components/scroll/ScrollToTop.js



const classNames = (...classes)=>{
    return classes.filter(Boolean).join(' ');
};
const ScrollToTop = ()=>{
    const { 0: isVisible , 1: setIsVisible  } = (0,external_react_.useState)(false);
    const toggleVisibility = ()=>{
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    (0,external_react_.useEffect)(()=>{
        window.addEventListener('scroll', toggleVisibility);
        return ()=>{
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "fixed bottom-2 right-2",
        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
            type: "button",
            onClick: scrollToTop,
            className: classNames(isVisible ? 'opacity-100' : 'opacity-0', 'inline-flex items-center p-3 rounded-full shadow-sm text-gray-50 bg-blue-600 transition-opacity hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-500'),
            children: /*#__PURE__*/ jsx_runtime_.jsx(outline_.ChevronDoubleUpIcon, {
                className: "h-5 w-5",
                "aria-hidden": "true"
            })
        })
    }));
};

;// CONCATENATED MODULE: ./pages/_app.js





function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_next_themes_.ThemeProvider, {
        enableSystem: true,
        attribute: "class",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((external_nextjs_progressbar_default()), {
                color: "#2863EB",
                height: 2,
                options: {
                    showSpinner: false
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ScrollToTop, {})
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 768:
/***/ ((module) => {

module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ 162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(278));
module.exports = __webpack_exports__;

})();