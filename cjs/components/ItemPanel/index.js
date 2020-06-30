"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.construct");

require("core-js/modules/es.regexp.to-string");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Item", {
  enumerable: true,
  get: function get() {
    return _Item["default"];
  }
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../utils");

var _withGGEditorContext = _interopRequireDefault(require("../../common/context/GGEditorContext/withGGEditorContext"));

var _Item = _interopRequireDefault(require("./Item"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ItemPanel = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(ItemPanel, _React$Component);

  var _super = _createSuper(ItemPanel);

  function ItemPanel(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ItemPanel);
    _this = _super.call(this, props);
    _this.page = null;

    _this.handleMouseUp = function () {
      _this.page.cancelAdd();
    };

    _this.bindEvent();

    return _this;
  }

  (0, _createClass2["default"])(ItemPanel, [{
    key: "bindEvent",
    value: function bindEvent() {
      var _this2 = this;

      var onAfterAddPage = this.props.onAfterAddPage;
      onAfterAddPage(function (_ref) {
        var page = _ref.page;
        _this2.page = page;
        document.addEventListener('mouseup', _this2.handleMouseUp);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mouseup', this.handleMouseUp);
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        id: this.containerId
      }, (0, _utils.pick)(this.props, ['style', 'className'])), children);
    }
  }]);
  return ItemPanel;
}(_react["default"].Component);

var _default = (0, _withGGEditorContext["default"])(ItemPanel);

exports["default"] = _default;