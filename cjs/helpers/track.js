"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.object.define-properties");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.timers");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Global = _interopRequireDefault(require("../common/Global"));

var _utils = require("../utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var BASE_URL = 'http://gm.mmstat.com/fsp.1.1';

var track = function track(options) {
  var trackable = _Global["default"].get('trackable');

  var version = _Global["default"].get('version');

  if (!trackable) {
    return;
  }

  var _window = window,
      location = _window.location,
      navigator = _window.navigator;
  var image = new Image();
  var params = (0, _utils.toQueryString)(_objectSpread({
    pid: 'ggeditor',
    code: '11',
    msg: 'syslog',
    page: "".concat(location.protocol, "//").concat(location.host).concat(location.pathname),
    hash: location.hash,
    ua: navigator.userAgent,
    rel: version
  }, options));
  image.src = "".concat(BASE_URL, "?").concat(params);
};

var _default = function _default(options) {
  setTimeout(function () {
    track(options);
  }, 1000);
};

exports["default"] = _default;