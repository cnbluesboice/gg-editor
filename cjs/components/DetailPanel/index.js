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
exports["default"] = exports.CanvasPanel = exports.MultiPanel = exports.GroupPanel = exports.EdgePanel = exports.NodePanel = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../utils");

var _constants = require("../../common/constants");

var _withGGEditorContext = _interopRequireDefault(require("../../common/context/GGEditorContext/withGGEditorContext"));

var _Panel = _interopRequireDefault(require("./Panel"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var DetailPanel = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(DetailPanel, _React$Component);

  var _super = _createSuper(DetailPanel);

  function DetailPanel(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, DetailPanel);
    _this = _super.call(this, props);
    _this.state = {
      status: ''
    };

    _this.bindEvent();

    return _this;
  }

  (0, _createClass2["default"])(DetailPanel, [{
    key: "bindEvent",
    value: function bindEvent() {
      var _this2 = this;

      var onAfterAddPage = this.props.onAfterAddPage;
      onAfterAddPage(function (_ref) {
        var page = _ref.page;

        _this2.setState({
          status: _constants.STATUS_CANVAS_SELECTED
        });

        page.on('statuschange', function (_ref2) {
          var status = _ref2.status;

          _this2.setState({
            status: status
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var status = this.state.status;

      if (!status) {
        return null;
      }

      return /*#__PURE__*/_react["default"].createElement("div", (0, _utils.pick)(this.props, ['style', 'className']), _react["default"].Children.toArray(children).map(function (child) {
        return /*#__PURE__*/_react["default"].cloneElement(child, {
          status: status
        });
      }));
    }
  }]);
  return DetailPanel;
}(_react["default"].Component);

var NodePanel = _Panel["default"].create('node');

exports.NodePanel = NodePanel;

var EdgePanel = _Panel["default"].create('edge');

exports.EdgePanel = EdgePanel;

var GroupPanel = _Panel["default"].create('group');

exports.GroupPanel = GroupPanel;

var MultiPanel = _Panel["default"].create('multi');

exports.MultiPanel = MultiPanel;

var CanvasPanel = _Panel["default"].create('canvas');

exports.CanvasPanel = CanvasPanel;

var _default = (0, _withGGEditorContext["default"])(DetailPanel);

exports["default"] = _default;