"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.construct");

require("core-js/modules/es.regexp.to-string");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("./"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _default(WrappedComponent) {
  var InjectGGEditorContext = /*#__PURE__*/function (_React$Component) {
    (0, _inherits2["default"])(InjectGGEditorContext, _React$Component);

    var _super = _createSuper(InjectGGEditorContext);

    function InjectGGEditorContext() {
      (0, _classCallCheck2["default"])(this, InjectGGEditorContext);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(InjectGGEditorContext, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            forwardRef = _this$props.forwardRef,
            rest = (0, _objectWithoutProperties2["default"])(_this$props, ["forwardRef"]);
        return /*#__PURE__*/_react["default"].createElement(_["default"].Consumer, null, function (context) {
          return /*#__PURE__*/_react["default"].createElement(WrappedComponent, (0, _extends2["default"])({
            ref: forwardRef
          }, rest, context));
        });
      }
    }]);
    return InjectGGEditorContext;
  }(_react["default"].Component);

  return /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
    return /*#__PURE__*/_react["default"].createElement(InjectGGEditorContext, (0, _extends2["default"])({}, props, {
      forwardRef: ref
    }));
  });
}