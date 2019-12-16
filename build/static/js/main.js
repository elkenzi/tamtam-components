/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = react;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"header":"Header_header__1v0yI","appInfo":"Header_appInfo__2HO-X","appLogo":"Header_appLogo__280F5","appName":"Header_appName__1A8x5","profile":"Header_profile__yHIKp","expandable":"Header_expandable__3HSQz","dropdown":"Header_dropdown__8OMp8","menuLink":"Header_menuLink__q-HUb"};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./src/components/Icons/Ebox.js
function Ebox(){return external_react_default.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},external_react_default.a.createElement("path",{d:"M24 17.9999C24 18.526 23.852 19.0138 23.6149 19.4429L16.0371 10.9645L23.5328 4.40648C23.8244 4.86921 24 5.41276 24 6.00013V17.9999ZM12 12.5039L22.4299 3.378C22.0019 3.14369 21.52 3 21.0001 3H2.99998C2.47943 3 1.99732 3.14369 1.57104 3.378L12 12.5039ZM14.9078 11.9518L12.4936 14.0656C12.3524 14.1886 12.1765 14.25 12 14.25C11.8234 14.25 11.6476 14.1886 11.5064 14.0656L9.0916 11.9517L1.41796 20.5385C1.87791 20.8271 2.41696 21 2.99993 21H21.0001C21.5829 21 22.1222 20.8271 22.582 20.5385L14.9078 11.9518ZM0.467327 4.40643C0.175792 4.86916 0 5.41271 0 6.00013V18C0 18.5261 0.147301 19.0139 0.385267 19.443L7.96216 10.9631L0.467327 4.40643Z",fill:"#29394D"}));}
// CONCATENATED MODULE: ./src/components/Icons/Profile.js
function Profile(){return external_react_default.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},external_react_default.a.createElement("path",{d:"M23.684 7.90997C23.4545 7.65815 23.1295 7.5145 22.7887 7.5145H1.21125C0.870534 7.5145 0.545439 7.65815 0.31591 7.90997C0.086381 8.16179 -0.0263849 8.49875 0.00522833 8.83802L1.15651 21.2046C1.21452 21.8274 1.73705 22.3036 2.36253 22.3036H21.6374C22.2629 22.3036 22.7854 21.8273 22.8434 21.2046L23.9947 8.83802C24.0263 8.49875 23.9135 8.16179 23.684 7.90997ZM16.0399 19.7671C16.0391 19.767 16.0383 19.767 16.0375 19.7671H7.96255C7.29359 19.7671 6.75132 19.2247 6.75132 18.5559C6.75132 16.911 8.08949 15.5728 9.73435 15.5728H10.6036C9.70964 15.0789 9.10257 14.1266 9.10257 13.0351C9.10257 11.4374 10.4023 10.1376 12.0001 10.1376C13.5978 10.1376 14.8976 11.4373 14.8976 13.0351C14.8976 14.1266 14.2905 15.0789 13.3965 15.5728H14.2658C15.8771 15.5728 17.1941 16.8571 17.2471 18.4558C17.2498 18.4888 17.2513 18.5222 17.2513 18.5559C17.2511 19.2248 16.7089 19.7671 16.0399 19.7671ZM21.6697 5.25955C21.6697 5.76136 21.263 6.16797 20.7613 6.16797H3.23874C2.73705 6.16797 2.33031 5.76136 2.33031 5.25955C2.33031 4.75773 2.73705 4.35112 3.23874 4.35112H20.7613C21.263 4.35112 21.6697 4.75773 21.6697 5.25955ZM19.2715 1.90843C19.2715 2.41024 18.8647 2.81685 18.3631 2.81685H5.63698C5.13529 2.81685 4.72856 2.41024 4.72856 1.90843C4.72856 1.40661 5.13529 1 5.63698 1H18.3629C18.8647 1 19.2715 1.40661 19.2715 1.90843Z",fill:"#29394D"}));}
// CONCATENATED MODULE: ./src/components/Icons/Notifs.js
function Notifs(){return external_react_default.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},external_react_default.a.createElement("path",{d:"M21.9288 20.243L20.2118 17.381C19.4188 16.06 18.9998 14.547 18.9998 13.007V10.5C18.9998 7.335 16.8878 4.65802 13.9998 3.795V2.00002C13.9998 0.897 13.1028 0 11.9998 0C10.8967 0 9.99975 0.897 9.99975 2.00002V3.795C7.11178 4.65802 4.99978 7.335 4.99978 10.5V13.007C4.99978 14.547 4.58076 16.059 3.78876 17.38L2.07178 20.242C1.97878 20.397 1.97676 20.589 2.06578 20.746C2.15479 20.903 2.31979 21 2.49979 21H21.4998C21.6798 21 21.8458 20.9031 21.9348 20.7471C22.0238 20.591 22.0208 20.397 21.9288 20.243Z",fill:"#29394D"}),external_react_default.a.createElement("path",{d:"M8.85083 22C9.41483 23.178 10.6088 24 11.9998 24C13.3908 24 14.5848 23.178 15.1488 22H8.85083Z",fill:"#29394D"}));}
// CONCATENATED MODULE: ./src/components/Icons/Apps.js
function Apps(){return external_react_default.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},external_react_default.a.createElement("path",{d:"M4.59259 22C6.02444 22 7.18518 20.8393 7.18518 19.4074C7.18518 17.9756 6.02444 16.8148 4.59259 16.8148C3.16074 16.8148 2 17.9756 2 19.4074C2 20.8393 3.16074 22 4.59259 22Z",fill:"#29394D"}),external_react_default.a.createElement("path",{d:"M12 22C13.4319 22 14.5926 20.8393 14.5926 19.4074C14.5926 17.9756 13.4319 16.8148 12 16.8148C10.5682 16.8148 9.40741 17.9756 9.40741 19.4074C9.40741 20.8393 10.5682 22 12 22Z",fill:"#29394D"}),external_react_default.a.createElement("path",{d:"M19.4073 22C20.8392 22 21.9999 20.8393 21.9999 19.4074C21.9999 17.9756 20.8392 16.8148 19.4073 16.8148C17.9755 16.8148 16.8147 17.9756 16.8147 19.4074C16.8147 20.8393 17.9755 22 19.4073 22Z",fill:"#29394D"}),external_react_default.a.createElement("path",{d:"M4.59259 14.5926C6.02444 14.5926 7.18518 13.4318 7.18518 12C7.18518 10.5681 6.02444 9.4074 4.59259 9.4074C3.16074 9.4074 2 10.5681 2 12C2 13.4318 3.16074 14.5926 4.59259 14.5926Z",fill:"#29394D"}),external_react_default.a.createElement("path",{d:"M12 14.5926C13.4319 14.5926 14.5926 13.4318 14.5926 12C14.5926 10.5681 13.4319 9.4074 12 9.4074C10.5682 9.4074 9.40741 10.5681 9.40741 12C9.40741 13.4318 10.5682 14.5926 12 14.5926Z",fill:"#29394D"}),external_react_default.a.createElement("path",{d:"M19.4073 14.5926C20.8392 14.5926 21.9999 13.4318 21.9999 12C21.9999 10.5681 20.8392 9.4074 19.4073 9.4074C17.9755 9.4074 16.8147 10.5681 16.8147 12C16.8147 13.4318 17.9755 14.5926 19.4073 14.5926Z",fill:"#29394D"}),external_react_default.a.createElement("path",{d:"M4.59259 7.18518C6.02444 7.18518 7.18518 6.02444 7.18518 4.59259C7.18518 3.16074 6.02444 2 4.59259 2C3.16074 2 2 3.16074 2 4.59259C2 6.02444 3.16074 7.18518 4.59259 7.18518Z",fill:"#29394D"}),external_react_default.a.createElement("path",{d:"M12 7.18518C13.4319 7.18518 14.5926 6.02444 14.5926 4.59259C14.5926 3.16074 13.4319 2 12 2C10.5682 2 9.40741 3.16074 9.40741 4.59259C9.40741 6.02444 10.5682 7.18518 12 7.18518Z",fill:"#29394D"}),external_react_default.a.createElement("path",{d:"M19.4073 7.18518C20.8392 7.18518 21.9999 6.02444 21.9999 4.59259C21.9999 3.16074 20.8392 2 19.4073 2C17.9755 2 16.8147 3.16074 16.8147 4.59259C16.8147 6.02444 17.9755 7.18518 19.4073 7.18518Z",fill:"#29394D"}));}
// CONCATENATED MODULE: ./src/components/Icons/index.js

// EXTERNAL MODULE: ./src/components/Header/Header.module.scss
var Header_module = __webpack_require__(1);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);

// CONCATENATED MODULE: ./src/components/Header/Header.js
// TODO move this
var getUserNameForAvatar=function getUserNameForAvatar(firstName,lastName){var fName=firstName.split(" ");if(fName.length>=3){return extractFirstLettre(fName,3);}else{var lName=lastName.split(" ");return extractFirstLettre(fName.concat(lName),3);}};function extractFirstLettre(arrayStr,length){var result="";for(var i=0;i<arrayStr.length;i++){if(arrayStr[i]){result+=arrayStr[i].substring(0,1);}}return result.toUpperCase();}var Header_Header=/*#__PURE__*/function(_Component){_inherits(Header,_Component);function Header(){_classCallCheck(this,Header);return _possibleConstructorReturn(this,_getPrototypeOf(Header).apply(this,arguments));}_createClass(Header,[{key:"renderLoggedIn",value:function renderLoggedIn(){var _this$props=this.props,avatarUrl=_this$props.avatarUrl,firstName=_this$props.firstName,lastName=_this$props.lastName,profileUrl=_this$props.profileUrl,eboxUrl=_this$props.eboxUrl;return external_react_default.a.createElement(external_react_default.a.Fragment,null,external_react_default.a.createElement("div",{style:{display:"flex",marginLeft:"auto"}},external_react_default.a.createElement("div",{className:Header_module_default.a.menuLink},external_react_default.a.createElement("a",{href:profileUrl},external_react_default.a.createElement(Profile,null))),external_react_default.a.createElement("div",{className:Header_module_default.a.menuLink},external_react_default.a.createElement("a",{href:eboxUrl},external_react_default.a.createElement(Ebox,null))),external_react_default.a.createElement("div",{className:"".concat(Header_module_default.a.menuLink," ").concat(Header_module_default.a.expandable)},external_react_default.a.createElement("span",null,external_react_default.a.createElement(Notifs,null))),external_react_default.a.createElement("div",{className:"".concat(Header_module_default.a.dropdown," ").concat(Header_module_default.a.notifsDropdown)},external_react_default.a.createElement("div",{className:"flex-container social-links__header"},external_react_default.a.createElement("div",{className:"flex-container flex-dir-column infos"},external_react_default.a.createElement("span",null,firstName+" "+lastName)))),external_react_default.a.createElement("div",{className:"".concat(Header_module_default.a.menuLink," ").concat(Header_module_default.a.expandable)},external_react_default.a.createElement("span",null,external_react_default.a.createElement(Apps,null))),external_react_default.a.createElement("div",{className:"".concat(Header_module_default.a.dropdown," ").concat(Header_module_default.a.appsDropdown)},external_react_default.a.createElement("div",{className:"flex-container social-links__header"},external_react_default.a.createElement("div",{className:"flex-container flex-dir-column infos"},external_react_default.a.createElement("span",null,firstName+" "+lastName))))),external_react_default.a.createElement("div",{className:"".concat(Header_module_default.a.profile," ").concat(Header_module_default.a.expandable),style:avatarUrl?{backgroundImage:"url(".concat(avatarUrl,")")}:{}},avatarUrl?"":getUserNameForAvatar(firstName,lastName)),external_react_default.a.createElement("div",{className:"".concat(Header_module_default.a.dropdown," ").concat(Header_module_default.a.profileDropdown)},external_react_default.a.createElement("div",{className:"flex-container social-links__header"},external_react_default.a.createElement("div",{className:"flex-container flex-dir-column infos"},external_react_default.a.createElement("span",null,firstName+" "+lastName)))));}},{key:"renderLoggedOut",value:function renderLoggedOut(){var _this$props2=this.props,language=_this$props2.language,onLanguageChange=_this$props2.onLanguageChange;var languages=["fr","nl","en"];// const tmp = `${TTP_HOME_URL}?goto=${goto}`;
return external_react_default.a.createElement("div",{className:"top-bar-right menu__off"},external_react_default.a.createElement("div",{className:"menu__language"},external_react_default.a.createElement("ul",null,languages.map(function(lng){return external_react_default.a.createElement("li",{id:lng,key:lng,className:lng===language?"selected":"",onClick:function onClick(){return onLanguageChange(lng);}},lng.toUpperCase());}))),external_react_default.a.createElement("a",{className:"sign-in",href:''},external_react_default.a.createElement("i",{className:"icon icon-lock"}),"Sign in / Join"));}},{key:"render",value:function render(){var _this$props3=this.props,_this$props3$loggedIn=_this$props3.loggedIn,loggedIn=_this$props3$loggedIn===void 0?false:_this$props3$loggedIn,appName=_this$props3.appName,appLogoUrl=_this$props3.appLogoUrl,avatarUrl=_this$props3.avatarUrl,firstName=_this$props3.firstName,lastName=_this$props3.lastName,profileUrl=_this$props3.profileUrl,eboxUrl=_this$props3.eboxUrl,otherProps=_objectWithoutProperties(_this$props3,["loggedIn","appName","appLogoUrl","avatarUrl","firstName","lastName","profileUrl","eboxUrl"]);return external_react_default.a.createElement("header",Object.assign({className:Header_module_default.a.header},otherProps),external_react_default.a.createElement("div",{className:Header_module_default.a.appInfo},external_react_default.a.createElement("img",{className:Header_module_default.a.appLogo,src:appLogoUrl,alt:"logo"}),external_react_default.a.createElement("span",{className:Header_module_default.a.appName},appName)),loggedIn?this.renderLoggedIn():this.renderLoggedOut());}}]);return Header;}(external_react_["Component"]);
// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport getUserNameForAvatar */__webpack_require__.d(__webpack_exports__, "getUserNameForAvatar", function() { return getUserNameForAvatar; });
/* concated harmony reexport Header */__webpack_require__.d(__webpack_exports__, "Header", function() { return Header_Header; });


/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map