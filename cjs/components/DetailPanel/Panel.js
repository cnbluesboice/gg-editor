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

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../utils");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Panel = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Panel, _React$Component);

  var _super = _createSuper(Panel);

  function Panel(props, type) {
    var _this;

    (0, _classCallCheck2["default"])(this, Panel);
    _this = _super.call(this, props);
    _this.type = type;
    return _this;
  }

  (0, _createClass2["default"])(Panel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          status = _this$props.status,
          children = _this$props.children;
      var type = this.type;

      if ("".concat(type, "-selected") !== status) {
        return null;
      }

      return /*#__PURE__*/_react["default"].createElement("div", (0, _utils.pick)(this.props, ['style', 'className']), children);
    }
  }]);
  return Panel;
}(_react["default"].Component);

Panel.create = function (type) {
  return /*#__PURE__*/function (_Panel) {
    (0, _inherits2["default"])(TypedPanel, _Panel);

    var _super2 = _createSuper(TypedPanel);

    function TypedPanel(props) {
      (0, _classCallCheck2["default"])(this, TypedPanel);
      return _super2.call(this, props, type);
    }

    return TypedPanel;
  }(Panel);
};

var _default = Panel;
exports["default"] = _default;