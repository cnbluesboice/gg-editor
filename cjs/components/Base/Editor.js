"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.construct");

require("core-js/modules/es.regexp.to-string");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _ggEditorCore = _interopRequireDefault(require("gg-editor-core"));

var _constants = require("../../common/constants");

var _track = _interopRequireDefault(require("../../helpers/track"));

var _utils = require("../../utils");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Editor = /*#__PURE__*/function (_GGEditorCore) {
  (0, _inherits2["default"])(Editor, _GGEditorCore);

  var _super = _createSuper(Editor);

  function Editor(options) {
    var _this;

    (0, _classCallCheck2["default"])(this, Editor);
    _this = _super.call(this, options); // console.log(this, 'this');
    // console.log(this.addListeners(), 'this.addListeners');
    // console.log(this.on(), 'this');
    // console.log(this.off(), 'off');

    _this.id = (0, _utils.uniqueId)();

    _this.on(_constants.EVENT_BEFORE_ADD_PAGE, function (_ref) {
      var className = _ref.className;
      (0, _track["default"])({
        c1: className
      });
    });

    return _this;
  }

  return Editor;
}(_ggEditorCore["default"]);

exports["default"] = Editor;