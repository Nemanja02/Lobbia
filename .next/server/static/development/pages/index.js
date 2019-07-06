module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout/Layout.js":
/*!*************************************!*\
  !*** ./components/Layout/Layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navigation_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Navigation/Sidebar */ "./components/Navigation/Sidebar.js");
/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout.module.scss */ "./components/Layout/Layout.module.scss");
/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_2__);




function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.main
  }, props.children));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Layout/Layout.module.scss":
/*!**********************************************!*\
  !*** ./components/Layout/Layout.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"root": "_3kwh7x4ISw2sdc56HmDvZN",
	"main": "_1vO7nIIcRqZ9HZwtzTFdOl"
};

/***/ }),

/***/ "./components/Navigation/Sidebar.js":
/*!******************************************!*\
  !*** ./components/Navigation/Sidebar.js ***!
  \******************************************/
/*! exports provided: Sidebar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return Sidebar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Sidebar.module.scss */ "./components/Navigation/Sidebar.module.scss");
/* harmony import */ var _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6__);








function NavHeading(_ref) {
  var title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
    className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.navHeading
  }, title);
}

function Profile(_ref2) {
  var ppicture = _ref2.ppicture,
      username = _ref2.username,
      activity = _ref2.activity;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.user
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
    src: ppicture,
    className: "".concat(_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.ppicture, " ").concat(_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.unselectable)
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.online
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.about
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
    className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.username
  }, username), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
    className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.activity
  }, activity)));
}

function Friend(_ref3) {
  var ppicture = _ref3.ppicture,
      username = _ref3.username,
      activity = _ref3.activity;
  var status;
  if (activity === "online") status = _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.green;else if (activity === "offline") status = _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.black;else if (activity === "do not disturb") status = _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.red;else status = _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.yellow;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.friend
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
    src: ppicture,
    className: "".concat(_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.fppicture, " ").concat(_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.unselectable)
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "".concat(_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.fonline, " ").concat(status)
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.fabout
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
    className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.fusername
  }, username), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
    className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.factivity
  }, activity)));
}

var Sidebar =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Sidebar, _Component);

  function Sidebar() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Sidebar);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Sidebar).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Sidebar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.container
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.division
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Profile, {
        ppicture: "https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg",
        username: "MarkZucc",
        activity: "Playing Minecraft survival"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.sidebar
      }, ["Feed", "Profile", "Settings"].map(function (el) {
        var faIcon;
        if (el === "Feed") faIcon = "fas fa-th-list";
        if (el === "Profile") faIcon = "fas fa-user";
        if (el === "Settings") faIcon = "fas fa-cog";
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          key: el,
          className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.sidebarEl
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
          className: "".concat(faIcon, " ").concat(_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.sidebar_icon)
        }), " ", el);
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "".concat(_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.division, " ").concat(_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.growdiv)
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavHeading, {
        title: "Friends"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.scrollable
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Friend, {
        ppicture: "https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg",
        username: "MarkZuccClone1",
        activity: "online"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Friend, {
        ppicture: "https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg",
        username: "MarkZuccClone2",
        activity: "offline"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Friend, {
        ppicture: "https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg",
        username: "MarkZuccClone3",
        activity: "playing League of legends"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Friend, {
        ppicture: "https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg",
        username: "MarkZuccClone4",
        activity: "do not disturb"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Friend, {
        ppicture: "https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg",
        username: "MarkZuccClone5",
        activity: "online"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Friend, {
        ppicture: "https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg",
        username: "MarkZuccClone6",
        activity: "offline"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Friend, {
        ppicture: "https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg",
        username: "MarkZuccClone7",
        activity: "playing League of legends"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Friend, {
        ppicture: "https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg",
        username: "MarkZuccClone8",
        activity: "do not disturb"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Friend, {
        ppicture: "https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg",
        username: "MarkZuccClone9",
        activity: "online"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Friend, {
        ppicture: "https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg",
        username: "MarkZuccClone10",
        activity: "offline"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Friend, {
        ppicture: "https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg",
        username: "MarkZuccClone11",
        activity: "playing League of legends"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Friend, {
        ppicture: "https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg",
        username: "MarkZuccClone12",
        activity: "do not disturb"
      }))));
    }
  }]);

  return Sidebar;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./components/Navigation/Sidebar.module.scss":
/*!***************************************************!*\
  !*** ./components/Navigation/Sidebar.module.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "_3XSPO4L4nQMaQnBUs5wOeg",
	"unselectable": "VU3kuLh24lh8VVXEd_3Cf",
	"text": "y1p0a5_MjwInDil1CZRLY",
	"container": "_137uQMmYZ9psIw-Unn1Z-W",
	"division": "nboLf3iydr03j5qHq142M",
	"scrollable": "_3_oby8tj5qLp_ceGqWUjT4",
	"growdiv": "_26jXYsUd1AVjV13b4Kb6L1",
	"navHeading": "UB3gAnnnnk04zsHuXer9F",
	"sidebar": "_2PB3hnb295yNtHiXpLgF6u",
	"sidebarEl": "_3KdhE5TUwN2S40vL_0TYAQ",
	"sidebar_icon": "_1t7N9dhjJQ-zdbUzFRqZCk",
	"user": "_2MiF9MaGaI8XFgW04ERC9i",
	"ppicture": "_2hR-qIuWgort8TuTQy9Qc9",
	"username": "_1Yu9GUNQCcxcZRbsl38eSk",
	"activity": "K5zvaUYf-ZTnzyw_KChs-",
	"online": "_3EhlUHYfBt0LGf-WgYnllf",
	"friend": "_3udlxEOJh_2G9Idomd0xc",
	"fppicture": "_1yVTmLSPP1QpZfR3SXnUaq",
	"fonline": "_3PvKRw8QHObFNgvv6tuA_V",
	"fusername": "_3R3ZKf9PCwnEjjaY5nHsXf",
	"factivity": "cVWiVUlB-zi0y04t-f-5a",
	"fabout": "xeGVY44WjXH835wiNvrOv",
	"yellow": "_105UZ_dBUWctEXUojICb1Y",
	"red": "_2zQ0dUbH2J1F_Je8KU8nhM",
	"green": "NMMcOXZE1vcdGTZ5ArQ8Q",
	"black": "_3RcZrX3cgZJr64QsnsuHBK"
};

/***/ }),

/***/ "./components/Typography/Typography.js":
/*!*********************************************!*\
  !*** ./components/Typography/Typography.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Typography_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Typography.module.scss */ "./components/Typography/Typography.module.scss");
/* harmony import */ var _Typography_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Typography_module_scss__WEBPACK_IMPORTED_MODULE_1__);



function Typography(_ref) {
  var variant = _ref.variant,
      title = _ref.title,
      color = _ref.color;

  switch (variant) {
    case "h1":
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: _Typography_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.h1
      }, title);

    case "h2":
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: _Typography_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.h2
      }, title);

    case "h3":
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: _Typography_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.h3
      }, title);

    case "h4":
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: _Typography_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.h4
      }, title);

    case "h5":
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: _Typography_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.h5
      }, title);

    case "h6":
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: _Typography_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.h6
      }, title);

    case "span":
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _Typography_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.span
      }, title);

    default:
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "".concat(_Typography_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.p, " ").concat(_Typography_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[color])
      }, title);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Typography);

/***/ }),

/***/ "./components/Typography/Typography.module.scss":
/*!******************************************************!*\
  !*** ./components/Typography/Typography.module.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"h1": "_1m-yaVkZe3V6us4CJcB9OD",
	"h2": "WI2ZzuYunNKUnl6SRJhdl",
	"h3": "_3GA1mfDrYIaITQE77uMzH2",
	"h4": "_10MeLdFgr246BYF-GkkEQ_",
	"h5": "_2QKxNHgAtwpyKXhsNoeZdS",
	"h6": "_1ZxEDcby1kp9hErKxjgbdL",
	"p": "_1outjNDd2cnfOa1UOME6mf",
	"light": "_3OqAs04VqHwYfM0Ne7x0-v",
	"dark": "_1Gj8I4Zsu1KitCqwqKbP9Q"
};

/***/ }),

/***/ "./config/sass/global.scss":
/*!*********************************!*\
  !*** ./config/sass/global.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "IoDNnoLrVbc1VFd4LBVVZ",
	"unselectable": "_3LgXwJfEnJK0Z0Hroz_KR4",
	"text": "_2-r-PPrm8SXL7D3EVV5ijx"
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout/Layout */ "./components/Layout/Layout.js");
/* harmony import */ var _components_Typography_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Typography/Typography */ "./components/Typography/Typography.js");
/* harmony import */ var _config_sass_global_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/sass/global.scss */ "./config/sass/global.scss");
/* harmony import */ var _config_sass_global_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config_sass_global_scss__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Open+Sans&display=swap",
    rel: "stylesheet"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://kit.fontawesome.com/8d5f687edf.js"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null));
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/petar/Documents/antisocial/git/Novica-The-Rapist/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map