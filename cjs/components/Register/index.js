"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.map");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.construct");

require("core-js/modules/es.regexp.to-string");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegisterBehaviour = exports.RegisterCommand = exports.RegisterGuide = exports.RegisterGroup = exports.RegisterEdge = exports.RegisterNode = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _Editor = _interopRequireDefault(require("../Base/Editor"));

var _utils = require("../../utils");

var _withGGEditorContext = _interopRequireDefault(require("../../common/context/GGEditorContext/withGGEditorContext"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Register = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Register, _React$Component);

  var _super = _createSuper(Register);

  function Register(props, type) {
    var _this;

    (0, _classCallCheck2["default"])(this, Register);
    _this = _super.call(this, props);
    _this.type = type;

    _this.bindEvent();

    return _this;
  }

  (0, _createClass2["default"])(Register, [{
    key: "bindEvent",
    value: function bindEvent() {
      var _this2 = this;

      var type = this.type;
      var onBeforeAddPage = this.props.onBeforeAddPage;
      onBeforeAddPage(function (_ref) {
        var _host;

        var className = _ref.className;
        var host = _Editor["default"][className];
        var keys = ['name', 'config', 'extend'];

        if (type === 'command') {
          host = _Editor["default"];
        }

        if (type === 'behaviour') {
          keys = ['name', 'behaviour', 'dependences'];
        }

        var args = keys.map(function (key) {
          return _this2.props[key];
        });

        (_host = host)["register".concat((0, _utils.upperFirst)(type))].apply(_host, (0, _toConsumableArray2["default"])(args));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return Register;
}(_react["default"].Component);

Register.create = function (type) {
  var TypedRegister = /*#__PURE__*/function (_Register) {
    (0, _inherits2["default"])(TypedRegister, _Register);

    var _super2 = _createSuper(TypedRegister);

    function TypedRegister(props) {
      (0, _classCallCheck2["default"])(this, TypedRegister);
      return _super2.call(this, props, type);
    }

    return TypedRegister;
  }(Register);

  return (0, _withGGEditorContext["default"])(TypedRegister);
};

var RegisterNode = Register.create('node');
exports.RegisterNode = RegisterNode;
var RegisterEdge = Register.create('edge');
exports.RegisterEdge = RegisterEdge;
var RegisterGroup = Register.create('group');
exports.RegisterGroup = RegisterGroup;
var RegisterGuide = Register.create('guide');
exports.RegisterGuide = RegisterGuide;
var RegisterCommand = Register.create('command');
exports.RegisterCommand = RegisterCommand;
var RegisterBehaviour = Register.create('behaviour');
exports.RegisterBehaviour = RegisterBehaviour;