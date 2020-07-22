"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _useAlertConfig3 = _interopRequireDefault(require("./hooks/useAlertConfig"));

require("./index.css");

var _TRAlertModule = _interopRequireDefault(require("./TRAlert.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TRAlert = function TRAlert() {
  var _useAlertConfig = (0, _useAlertConfig3.default)(),
      _useAlertConfig2 = _slicedToArray(_useAlertConfig, 3),
      alertConfig = _useAlertConfig2[0],
      closeAlert = _useAlertConfig2[2];

  var alertType = {
    primary: 'border-blue-500',
    danger: 'border-red-600',
    info: 'border-yellow-500',
    success: 'border-green-500'
  };
  return /*#__PURE__*/_react.default.createElement("article", {
    className: "fixed bottom-0 left-0 right-0 mx-auto container w-full lg:w-1/2 p-2 bg-white shadow-2xl border-t-8 ".concat(alertType[alertConfig.alertType], " ").concat(_TRAlertModule.default.alertBox, " ").concat(alertConfig.show ? _TRAlertModule.default.alertBoxShow : '')
  }, /*#__PURE__*/_react.default.createElement("section", {
    className: "grid grid-row-2",
    id: "content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: " h-8 text-lg font-bold overflow-hidden",
    id: "heading"
  }, alertConfig.heading), /*#__PURE__*/_react.default.createElement("div", {
    id: "closeButton",
    onClick: function onClick() {
      return closeAlert();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "w-6 h-6"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    // height="512pt"
    viewBox: "0 0 512 512" // width="512pt"
    ,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0",
    fill: "#f44336"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0",
    fill: "#fafafa"
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    id: "message",
    className: "h-20 overflow-y-auto"
  }, alertConfig.message)));
};

var _default = TRAlert;
exports.default = _default;