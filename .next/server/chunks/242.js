"use strict";
exports.id = 242;
exports.ids = [242];
exports.modules = {

/***/ 242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ sections_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./sections/Footer.js


const Footer = ()=>/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "px-4 sm:px-6 py-6 mt-24",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "text-center",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "text-sm text-gray-500 inline-flex",
                children: [
                    "\xa9 2021-",
                    new Date().getFullYear(),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "https://github.com/ferdous-mahmud",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "text-blue-600 cursor-pointer hover:text-blue-700",
                            target: "_blank",
                            children: "\xa0Ferdous Mahmud."
                        })
                    }),
                    "\xa0All rights reserved."
                ]
            })
        })
    })
;
/* harmony default export */ const sections_Footer = (Footer);

// EXTERNAL MODULE: external "@heroicons/react/outline"
var outline_ = __webpack_require__(768);
// EXTERNAL MODULE: external "howler"
var external_howler_ = __webpack_require__(386);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(162);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./components/Logo.js



const Logo = ()=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: "/",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            className: "flex items-center space-x-1 text-blue-600",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(outline_.TerminalIcon, {
                    className: "w-8 h-8 flex-shrink-0"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "font-bold text-lg tracking-tight whitespace-nowrap",
                    children: "iOS developer blog"
                })
            ]
        })
    })
;
/* harmony default export */ const components_Logo = (Logo);

;// CONCATENATED MODULE: ./sections/Header.js






const Header = ()=>{
    const { systemTheme , theme , setTheme  } = (0,external_next_themes_.useTheme)();
    const { 0: mounted , 1: setMounted  } = (0,external_react_.useState)(false);
    const playSound = (src)=>{
        const sound = new external_howler_.Howl({
            src,
            html5: true,
            volume: 0.5
        });
        sound.play();
    };
    (0,external_react_.useEffect)(()=>{
        setMounted(true);
    }, []);
    const renderThemeChanger = ()=>{
        if (!mounted) return null;
        const currentTheme = theme === "system" ? systemTheme : theme;
        if (currentTheme === "dark") {
            return(/*#__PURE__*/ jsx_runtime_.jsx(outline_.MoonIcon, {
                className: "w-7 h-7",
                role: "button",
                onClick: ()=>{
                    playSound("/sounds/switch-on.mp3");
                    setTheme("light");
                }
            }));
        } else {
            return(/*#__PURE__*/ jsx_runtime_.jsx(outline_.SunIcon, {
                className: "w-7 h-7",
                role: "button",
                onClick: ()=>{
                    playSound("/sounds/switch-off.mp3");
                    setTheme("dark");
                }
            }));
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "pt-16",
        children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
            className: "border-b border-gray-100 dark:border-gray-700 fixed top-0 inset-x-0 h-16 dark:bg-gray-900 bg-gray-50",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Logo, {}),
                    renderThemeChanger()
                ]
            })
        })
    }));
};
/* harmony default export */ const sections_Header = (Header);

;// CONCATENATED MODULE: ./sections/Layout.js





const Layout = ({ children , pageMeta  })=>{
    const router = (0,router_.useRouter)();
    const meta = {
        title: "iOS developer portfolio",
        description: "Ferdous Mahmud's developer portfolio and iOS swift blog",
        type: "website",
        ...pageMeta
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: meta.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: meta.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: `https://localhost:3000${router.asPath}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: meta.type
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:site_name",
                        content: "Blog for Dev"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: meta.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: meta.title
                    }),
                    meta.date && /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "article:published_time",
                        content: meta.date
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "min-h-screen flex flex-col",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(sections_Header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        className: "flex-grow container mx-auto px-4 sm:px-6",
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(sections_Footer, {})
                ]
            })
        ]
    }));
};
/* harmony default export */ const sections_Layout = (Layout);


/***/ })

};
;