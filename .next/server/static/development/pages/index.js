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
/* harmony import */ var _Navigation_SidebarSecond__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Navigation/SidebarSecond */ "./components/Navigation/SidebarSecond.js");
/* harmony import */ var _Navigation_TopBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Navigation/TopBar */ "./components/Navigation/TopBar.js");






function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation_TopBar__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation_SidebarSecond__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
	"root": "_1vz7CQfPoZHCTWyxZve-ID",
	"main": "_1uebS76EZIESUqVxVRJV5Z"
};

/***/ }),

/***/ "./components/Navigation/NavHeading.js":
/*!*********************************************!*\
  !*** ./components/Navigation/NavHeading.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavHeading_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavHeading.module.scss */ "./components/Navigation/NavHeading.module.scss");
/* harmony import */ var _NavHeading_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_NavHeading_module_scss__WEBPACK_IMPORTED_MODULE_1__);



function NavHeading(_ref) {
  var title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _NavHeading_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.navHeading
  }, title.toUpperCase());
}

/* harmony default export */ __webpack_exports__["default"] = (NavHeading);

/***/ }),

/***/ "./components/Navigation/NavHeading.module.scss":
/*!******************************************************!*\
  !*** ./components/Navigation/NavHeading.module.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"navHeading": "_37K4NO68Qce2FqpFn4xOmj"
};

/***/ }),

/***/ "./components/Navigation/NavLink/NavLink.js":
/*!**************************************************!*\
  !*** ./components/Navigation/NavLink/NavLink.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavLink_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavLink.module.scss */ "./components/Navigation/NavLink/NavLink.module.scss");
/* harmony import */ var _NavLink_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_NavLink_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




function NavLink(_ref) {
  var path = _ref.path,
      title = _ref.title,
      clicked = _ref.clicked,
      icon = _ref.icon;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: path
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: _NavLink_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "".concat(_NavLink_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.linkIcon, " ").concat(icon)
  }), " ", title));
}

/* harmony default export */ __webpack_exports__["default"] = (NavLink);

/***/ }),

/***/ "./components/Navigation/NavLink/NavLink.module.scss":
/*!***********************************************************!*\
  !*** ./components/Navigation/NavLink/NavLink.module.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"link": "BHfcKqFSe3trQS-QbvYPw",
	"linkIcon": "_2_cD_7UOtmPAbxbt2u1f7"
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Sidebar.module.scss */ "./components/Navigation/Sidebar.module.scss");
/* harmony import */ var _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _NavLink_NavLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NavLink/NavLink */ "./components/Navigation/NavLink/NavLink.js");
/* harmony import */ var _NavHeading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NavHeading */ "./components/Navigation/NavHeading.js");
/* harmony import */ var _Typography_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Typography/Typography */ "./components/Typography/Typography.js");













function Profile(_ref) {
  var ppicture = _ref.ppicture,
      username = _ref.username,
      activity = _ref.activity;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.user
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
    src: ppicture,
    className: "".concat(_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.ppicture, " ").concat(_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.unselectable)
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.online
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.about
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
    className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.username
  }, username), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
    className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.activity
  }, activity)));
}

function Friend(_ref2) {
  var ppicture = _ref2.ppicture,
      username = _ref2.username,
      activity = _ref2.activity,
      link = _ref2.link;
  var status;
  var displayActivity;

  if (activity === "on") {
    status = _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.green;
    displayActivity = "Online";
  } else if (activity === "off") {
    status = _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.black;
    displayActivity = "Offline";
  } else if (activity === "dnd") {
    status = _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.red;
    displayActivity = "Do Not Disturb";
  } else {
    status = _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.yellow;
    displayActivity = activity;
  }

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
    href: link,
    className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.friend
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
    src: ppicture,
    className: "".concat(_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.fppicture, " ").concat(_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.unselectable)
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "".concat(_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.fonline, " ").concat(status)
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.fabout
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
    className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.fusername
  }, username), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
    className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.factivity
  }, displayActivity)));
}

var Sidebar =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Sidebar, _Component);

  function Sidebar() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Sidebar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Sidebar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      activeTab: 1
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "switchActiveTab", function (i) {
      _this.setState({
        activeTab: i
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Sidebar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.container
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.division
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Profile, {
        ppicture: "https://ichef.bbci.co.uk/news/660/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg",
        username: "MarkZucc",
        activity: "Playing Minecraft survival"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.sidebar
      }, ["Feed", "Profile", "Settings"].map(function (el) {
        var faIcon;
        var href;

        if (el === "Feed") {
          faIcon = "fas fa-th-list";
          href = "/feed";
        }

        if (el === "Profile") {
          faIcon = "fas fa-user";
          href = "/user/:id";
        }

        if (el === "Settings") {
          faIcon = "fas fa-cog";
          href = "/settings";
        }

        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          key: el,
          className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.sidebarEl
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          path: href,
          title: el,
          icon: faIcon
        }));
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "".concat(_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.division, " ").concat(_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.growdiv)
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a["tab-control"]
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
        active: this.state.activeTab === 1 ? true : false,
        clicked: function clicked() {
          return _this2.switchActiveTab(1);
        },
        variant: "nav-title",
        color: "light"
      }, "Connections"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
        clicked: function clicked() {
          return _this2.switchActiveTab(2);
        },
        active: this.state.activeTab === 2 ? true : false,
        variant: "nav-title",
        color: "light"
      }, "Lobbies")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "style-3",
        className: "".concat(_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.scrollable, " ").concat(_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.tab_body)
      }, ["Faggot", "Big chungus", "Rrrrrrrresi", "Baka prasqui", "Novica"].map(function (el, i) {
        var status = "on";

        if (i % 2 === 0) {
          status = "dnd";
        }

        if (i === 4) status = "off";
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Friend, {
          key: el,
          ppicture: "https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg",
          username: el,
          activity: status,
          link: "lol"
        });
      }))));
    }
  }]);

  return Sidebar;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./components/Navigation/Sidebar.module.scss":
/*!***************************************************!*\
  !*** ./components/Navigation/Sidebar.module.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "_3cw_iLpgEtU0F6CGKUS-ED",
	"unselectable": "_39gkGt6YAYk4-J7xL47uOc",
	"text": "ZBZuGOg0kosmxDSqNhrDo",
	"container": "_3YXQ9eM8q71zIRlzguFU8o",
	"containerRight": "_3zZqG7kjD_APl0KDGaWYtG",
	"division": "IdzUjFPTU5BhBLoZ9MtAi",
	"scrollable": "_3jGDVyv5UwdW24-Sr6HMqB",
	"growdiv": "tm5p_xXr6fJp6UBexxKvv",
	"sidebar": "_3Y2evKrHYXVrygyF4BI1Yr",
	"sidebarEl": "_2fMfc8emLc54RFPieMre6q",
	"sidebar_icon": "KrlgPYtsakN9FmfsrnLx3",
	"user": "_27r2Uk4oW1FofT_SDu9k1H",
	"ppicture": "GFB4rQmfbp2O79gvLuHIr",
	"online": "_2wUeJX5UAFj9CL9A-LSXBq",
	"about": "OSW1ixJBmQ0AEL2d9UmHg",
	"username": "_3JobRsf0NpbChEd__uJTLF",
	"activity": "_2J2uKn8GgmXVVtTriYFMH1",
	"fppicture": "_3FhiERp1S6evqvtVjDych5",
	"friend": "_2I71jWjFw1pqKxJAdrxQeG",
	"fonline": "_1tvsRMNyogso7_KSDJeN0T",
	"fusername": "_1DZLKV2azHKNplJLU967Bw",
	"factivity": "_1FTF9JboywP2SOgGwlvTDl",
	"fabout": "Iv3PVJXkXJsISKaAcbNez",
	"yellow": "_2gZbSF8pxTz5VoMIvxeM6n",
	"red": "CQsOlRRup3w05eYBKs6WG",
	"green": "_148i0dRO86RgBwotRPa_JO",
	"black": "_1n8W3u3DEEI38NoxnfJaY-",
	"gamediv": "_2gg6pL1GISeJLnNWUetgEW",
	"tab-control": "_1lnYtsIVFeHXhcRfTiW3IH",
	"gameicon": "_2RXpXDfJbX2EpxqdnDGBN6",
	"gamename": "_1Gq64PAa8F1ZYt5vrKjKz-",
	"playicon": "yN8rV-RO6lbaP0fK8WPVL"
};

/***/ }),

/***/ "./components/Navigation/SidebarSecond.js":
/*!************************************************!*\
  !*** ./components/Navigation/SidebarSecond.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Sidebar.module.scss */ "./components/Navigation/Sidebar.module.scss");
/* harmony import */ var _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Typography_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Typography/Typography */ "./components/Typography/Typography.js");











function Game(_ref) {
  var icon = _ref.icon,
      name = _ref.name;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.gamediv
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
    src: icon,
    className: "".concat(_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.gameicon, " ").concat(_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.unselectable)
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
    className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.gamename
  }, name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.playicon
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
    className: "fas fa-play"
  })));
}

var SidebarSecond =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SidebarSecond, _Component);

  function SidebarSecond() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SidebarSecond);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SidebarSecond)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      activeTab: 1
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "switchActiveTab", function (i) {
      _this.setState({
        activeTab: i
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SidebarSecond, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.containerRight
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "".concat(_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.division, " ").concat(_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.growdiv)
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a["tab-control"]
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Typography_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        active: this.state.activeTab === 1 ? true : false,
        clicked: function clicked() {
          return _this2.switchActiveTab(1);
        },
        variant: "nav-title",
        color: "light"
      }, "Games"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Typography_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        clicked: function clicked() {
          return _this2.switchActiveTab(2);
        },
        active: this.state.activeTab === 2 ? true : false,
        variant: "nav-title",
        color: "light"
      }, "smth else")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.scrollable
      }, ["Minecraft", "Roblox", "Roblox 2", "Despacito", "Candy crush saga xD"].map(function (el, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Game, {
          icon: "https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg",
          name: el
        });
      }))));
    }
  }]);

  return SidebarSecond;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SidebarSecond);

/***/ }),

/***/ "./components/Navigation/TopBar.js":
/*!*****************************************!*\
  !*** ./components/Navigation/TopBar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TopBar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopBar.module.scss */ "./components/Navigation/TopBar.module.scss");
/* harmony import */ var _TopBar_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TopBar_module_scss__WEBPACK_IMPORTED_MODULE_1__);



function TopBar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _TopBar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.topbar
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _TopBar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.logo
  }, "Lobbia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _TopBar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.isearch
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-compass ".concat(_TopBar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.button_search_icon)
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    placeholder: "Search",
    className: _TopBar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.search
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-search ".concat(_TopBar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.search_icon_input)
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (TopBar);

/***/ }),

/***/ "./components/Navigation/TopBar.module.scss":
/*!**************************************************!*\
  !*** ./components/Navigation/TopBar.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"topbar": "_2J-AXA5bO-gnAB71XqxwiM",
	"logo": "_2t82o8bEKj2penP5hYals9",
	"search": "_3YKw-ugJ0BvKCTJvvZeg6m",
	"search_icon_input": "b0VqGRIQ_JfkeIuuJgbY0",
	"isearch": "hEuH6DfguykbOzdnS3kvm"
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
  var clicked = _ref.clicked,
      active = _ref.active,
      variant = _ref.variant,
      children = _ref.children,
      color = _ref.color;

  switch (variant) {
    case "h1":
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "".concat(_Typography_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.h1, " ").concat(_Typography_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[color])
      }, children);

    case "h2":
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "".concat(_Typography_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.h2, " ").concat(_Typography_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[color])
      }, children);

    case "h3":
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "".concat(_Typography_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.h3, " ").concat(_Typography_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[color])
      }, children);

    case "h4":
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "".concat(_Typography_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.h4, " ").concat(_Typography_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[color])
      }, children);

    case "h5":
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "".concat(_Typography_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.h5, " ").concat(_Typography_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[color])
      }, children);

    case "h6":
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "".concat(_Typography_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.h6, " ").concat(_Typography_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[color])
      }, children);

    case "span":
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "".concat(_Typography_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.span, " ").concat(_Typography_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[color])
      }, children);

    case "nav-title":
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        onClick: clicked,
        className: "".concat(_Typography_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["nav-title"], " ").concat(_Typography_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[color], " ").concat(active === true ? _Typography_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["tab-control-child-active"] : null, " ")
      }, children.toUpperCase());

    default:
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "".concat(_Typography_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.p, " ").concat(_Typography_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[color])
      }, children);
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
	"h1": "_2Gu1oTUFVuVkckVKJWISjr",
	"h2": "_2IG223MdCVeLFWATVFqxRH",
	"h3": "eh1SrU78-PebH_Puue5iR",
	"nav-title": "_1qUEHCiDlTFh_8XDcGOXBR",
	"h4": "_2y4dUru7dL1d1ir-WtNLrc",
	"h5": "_2aL6AOjfLgcmMYJe5-Wb9Q",
	"h6": "_3nvDAxWG6WQXjmQKmfoRAT",
	"p": "_2BsUHfr_BLCEGUQz7QNpD3",
	"light": "_1WorM_LCUZwcyYUJzw-cXJ",
	"dark": "_2R2xHZ4kh-h0UFZFaiQlZM",
	"tab-control-child-active": "_2nMbDsgwvsH90vFA9iyBLk"
};

/***/ }),

/***/ "./config/sass/global.scss":
/*!*********************************!*\
  !*** ./config/sass/global.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "_3c5zKv40aD2qzzFN0EJB78",
	"unselectable": "_301P-G3edSFpBv3xInH_c9",
	"text": "_3xqqT-dldzNrWgExGGtGFf"
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/Page.module.scss":
/*!********************************!*\
  !*** ./pages/Page.module.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"main": "_1Klz4GVyamtS3dplitJ8AJ"
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout/Layout */ "./components/Layout/Layout.js");
/* harmony import */ var _config_sass_global_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config/sass/global.scss */ "./config/sass/global.scss");
/* harmony import */ var _config_sass_global_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_config_sass_global_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Page_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Page.module.scss */ "./pages/Page.module.scss");
/* harmony import */ var _Page_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Page_module_scss__WEBPACK_IMPORTED_MODULE_11__);












var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_10___default()();

var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {});

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _Page_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.main
      })));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, "getInitialProps", function (_ref) {
  var req = _ref.req;
  console.log(req.user);
  return {};
});

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\web-dev\Novica-The-Rapist\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

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

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map