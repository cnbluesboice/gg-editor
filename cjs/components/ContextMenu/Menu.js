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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Menu = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Menu, _React$Component);

  var _super = _createSuper(Menu);

  function Menu(props, type) {
    var _this;

    (0, _classCallCheck2["default"])(this, Menu);
    _this = _super.call(this, props);
    _this.type = type;
    return _this;
  }

  (0, _createClass2["default"])(Menu, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      var type = this.type;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "menu",
        "data-status": "".concat(type, "-selected")
      }, children);
    }
  }]);
  return Menu;
}(_react["default"].Component);

Menu.create = function (type) {
  return /*#__PURE__*/function (_Menu) {
    (0, _inherits2["default"])(TypedMenu, _Menu);

    var _super2 = _createSuper(TypedMenu);

    function TypedMenu(props) {
      (0, _classCallCheck2["default"])(this, TypedMenu);
      return _super2.call(this, props, type);
    }

    return TypedMenu;
  }(Menu);
};

var _default = Menu;
exports["default"] = _default;