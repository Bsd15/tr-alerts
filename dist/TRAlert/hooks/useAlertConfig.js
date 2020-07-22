"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var alertConfig = {
  heading: '',
  message: '',
  alertType: '',
  show: false
};
var listeners = [];

var useAlertConfig = function useAlertConfig() {
  var shouldListen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var setState = (0, _react.useState)(alertConfig)[1];

  var showAlert = function showAlert(heading, message) {
    var alertType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'primary';
    var timeout = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    alertConfig = {
      message: message,
      alertType: alertType,
      heading: heading,
      show: true
    };
    listeners.forEach(function (listener) {
      listener(alertConfig);
    });

    if (timeout) {
      setTimeout(function () {
        closeAlert();
      }, timeout);
    }
  };

  var closeAlert = function closeAlert() {
    alertConfig = {
      heading: '',
      message: '',
      alertType: '',
      show: false
    };
    listeners.forEach(function (listener) {
      listener(alertConfig);
    });
  };

  (0, _react.useEffect)(function () {
    if (shouldListen) {
      listeners.push(setState);
    }

    return function () {
      if (shouldListen) {
        listeners = listeners.filter(function (listener) {
          return listener !== setState;
        });
      }
    };
  }, [setState, shouldListen]);
  return [alertConfig, showAlert, closeAlert];
};

var _default = useAlertConfig;
exports.default = _default;