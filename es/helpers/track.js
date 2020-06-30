import "core-js/modules/es.symbol";
import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.filter";
import "core-js/modules/es.array.for-each";
import "core-js/modules/es.object.define-properties";
import "core-js/modules/es.object.define-property";
import "core-js/modules/es.object.get-own-property-descriptor";
import "core-js/modules/es.object.get-own-property-descriptors";
import "core-js/modules/es.object.keys";
import "core-js/modules/web.dom-collections.for-each";
import "core-js/modules/web.timers";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import Global from "../common/Global";
import { toQueryString } from "../utils";
var BASE_URL = 'http://gm.mmstat.com/fsp.1.1';

var track = function track(options) {
  var trackable = Global.get('trackable');
  var version = Global.get('version');

  if (!trackable) {
    return;
  }

  var _window = window,
      location = _window.location,
      navigator = _window.navigator;
  var image = new Image();
  var params = toQueryString(_objectSpread({
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

export default (function (options) {
  setTimeout(function () {
    track(options);
  }, 1000);
});