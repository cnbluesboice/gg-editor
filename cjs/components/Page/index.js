"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.construct");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
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

var _constants = require("../../common/constants");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Page = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Page, _React$Component);

  var _super = _createSuper(Page);

  function Page() {
    var _this;

    (0, _classCallCheck2["default"])(this, Page);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.page = void 0;
    _this.config = {};

    _this.addListener = function (target, eventName, handler) {
      if (typeof handler === 'function') target.on(eventName, handler);
    };

    return _this;
  }

  (0, _createClass2["default"])(Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init();
      this.bindEvent();
      this.forceUpdate();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(props) {
      var newData = props.data;
      var oldData = this.props.data;

      var _ref = props.graph || {},
          newMode = _ref.mode;

      var _ref2 = this.props.graph || {},
          oldMode = _ref2.mode;

      if (newMode !== oldMode) {
        this.page.changeMode(newMode);
      }

      if (newData !== oldData) {
        this.page.read(newData);
        return true;
      }

      return false;
    }
  }, {
    key: "initPage",
    value: function initPage() {}
  }, {
    key: "readData",
    value: function readData() {
      var data = this.config.data;

      if (data) {
        this.page.read(data);
      }
    }
  }, {
    key: "init",
    value: function init() {
      (0, _utils.merge)(this.config, this.props, {
        graph: {
          container: this.pageId
        }
      });
      this.initPage();
      this.readData();
    }
  }, {
    key: "bindEvent",
    value: function bindEvent() {
      var _this2 = this;

      var addListener = this.addListener;

      _constants.GRAPH_MOUSE_EVENTS.forEach(function (event) {
        // console.log(event, '1234456');
        var eventName = _constants.GRAPH_MOUSE_REACT_EVENTS[event];
        addListener(_this2.graph, "".concat(event), _this2.props["on".concat(eventName)]);
        addListener(_this2.graph, "node:".concat(event), _this2.props["onNode".concat(eventName)]);
        addListener(_this2.graph, "edge:".concat(event), _this2.props["onEdge".concat(eventName)]);
        addListener(_this2.graph, "group:".concat(event), _this2.props["onGroup".concat(eventName)]);
        addListener(_this2.graph, "guide:".concat(event), _this2.props["onGuide".concat(eventName)]);
        addListener(_this2.graph, "anchor:".concat(event), _this2.props["onAnchor".concat(eventName)]);
      });

      _constants.GRAPH_OTHER_EVENTS.forEach(function (event) {
        addListener(_this2.graph, [event], _this2.props[_constants.GRAPH_OTHER_REACT_EVENTS[event]]);
      });

      _constants.PAGE_EVENTS.forEach(function (event) {
        addListener(_this2.page, [event], _this2.props[_constants.PAGE_REACT_EVENTS[event]]);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var page = this.page,
          pageId = this.pageId;
      var children = this.props.children;
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        id: pageId
      }, (0, _utils.pick)(this.props, ['style', 'className'])), page ? children : null);
    }
  }, {
    key: "pageId",
    get: function get() {
      return '';
    }
  }, {
    key: "graph",
    get: function get() {
      return this.page.getGraph();
    }
  }]);
  return Page;
}(_react["default"].Component);

var _default = Page;
exports["default"] = _default;