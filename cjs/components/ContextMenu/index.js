"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.construct");

require("core-js/modules/es.regexp.to-string");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CanvasMenu = exports.MultiMenu = exports.GroupMenu = exports.EdgeMenu = exports.NodeMenu = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../utils");

var _Editor = _interopRequireDefault(require("../Base/Editor"));

var _constants = require("../../common/constants");

var _withGGEditorContext = _interopRequireDefault(require("../../common/context/GGEditorContext/withGGEditorContext"));

var _Menu = _interopRequireDefault(require("./Menu"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ContextMenu = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(ContextMenu, _React$Component);

  var _super = _createSuper(ContextMenu);

  function ContextMenu() {
    var _this;

    (0, _classCallCheck2["default"])(this, ContextMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.contextMenu = null;
    return _this;
  }

  (0, _createClass2["default"])(ContextMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var editor = this.props.editor;
      this.contextMenu = new _Editor["default"].Contextmenu({
        container: this.containerId
      });
      editor.add(this.contextMenu);
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        id: this.containerId
      }, (0, _utils.pick)(this.props, ['style', 'className'])), children);
    }
  }, {
    key: "containerId",
    get: function get() {
      var editor = this.props.editor;
      return "".concat(_constants.CONTEXT_MENU_CONTAINER, "_").concat(editor.id);
    }
  }]);
  return ContextMenu;
}(_react["default"].Component);

var NodeMenu = _Menu["default"].create('node');

exports.NodeMenu = NodeMenu;

var EdgeMenu = _Menu["default"].create('edge');

exports.EdgeMenu = EdgeMenu;

var GroupMenu = _Menu["default"].create('group');

exports.GroupMenu = GroupMenu;

var MultiMenu = _Menu["default"].create('multi');

exports.MultiMenu = MultiMenu;

var CanvasMenu = _Menu["default"].create('canvas');

exports.CanvasMenu = CanvasMenu;

var _default = (0, _withGGEditorContext["default"])(ContextMenu);

exports["default"] = _default;