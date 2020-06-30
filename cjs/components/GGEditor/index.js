"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

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

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _Editor = _interopRequireDefault(require("../Base/Editor"));

var _constants = require("../../common/constants");

var _utils = require("../../utils");

var _Global = _interopRequireDefault(require("../../common/Global"));

var _GGEditorContext = _interopRequireDefault(require("../../common/context/GGEditorContext"));

var _PropsAPIContext = _interopRequireDefault(require("../../common/context/PropsAPIContext"));

var _propsAPI = _interopRequireDefault(require("../../common/context/PropsAPIContext/propsAPI"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var GGEditor = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(GGEditor, _React$Component);

  var _super = _createSuper(GGEditor);

  (0, _createClass2["default"])(GGEditor, [{
    key: "currentPage",
    get: function get() {
      return this.editor.getCurrentPage();
    }
  }], [{
    key: "setTrackable",
    value: function setTrackable(value) {
      _Global["default"].set('trackable', Boolean(value));
    }
  }]);

  function GGEditor(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, GGEditor);
    _this = _super.call(this, props);
    _this.editor = null;

    _this.addListener = function (target, eventName, handler) {
      if (typeof handler === 'function') target.on(eventName, handler);
    };

    _this.handleBeforeAddPage = function (func) {
      _this.editor.on(_constants.EVENT_BEFORE_ADD_PAGE, func);
    };

    _this.handleAfterAddPage = function (func) {
      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          page = _assertThisInitialize.currentPage;

      if (page) {
        func({
          page: page
        });
        return;
      }

      _this.editor.on(_constants.EVENT_AFTER_ADD_PAGE, func);
    };

    _this.init();

    _this.bindEvent();

    return _this;
  }

  (0, _createClass2["default"])(GGEditor, [{
    key: "init",
    value: function init() {
      this.editor = new _Editor["default"]();
      this.ggEditor = {
        editor: this.editor,
        onBeforeAddPage: this.handleBeforeAddPage,
        onAfterAddPage: this.handleAfterAddPage
      };
      this.propsAPI = new _propsAPI["default"](this.editor);
    }
  }, {
    key: "bindEvent",
    value: function bindEvent() {
      var _this2 = this;

      _constants.EDITOR_EVENTS.forEach(function (event) {
        _this2.addListener(_this2.editor, [event], _this2.props[_constants.EDITOR_REACT_EVENTS[event]]);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.editor.destroy();
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/_react["default"].createElement(_GGEditorContext["default"].Provider, {
        value: this.ggEditor
      }, /*#__PURE__*/_react["default"].createElement(_PropsAPIContext["default"].Provider, {
        value: this.propsAPI
      }, /*#__PURE__*/_react["default"].createElement("div", (0, _utils.pick)(this.props, ['style', 'className']), children)));
    }
  }]);
  return GGEditor;
}(_react["default"].Component);

var _default = GGEditor;
exports["default"] = _default;