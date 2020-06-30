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
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Editor = _interopRequireDefault(require("../Base/Editor"));

var _constants = require("../../common/constants");

var _Page2 = _interopRequireDefault(require("../Page"));

var _withGGEditorContext = _interopRequireDefault(require("../../common/context/GGEditorContext/withGGEditorContext"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Flow = /*#__PURE__*/function (_Page) {
  (0, _inherits2["default"])(Flow, _Page);

  var _super = _createSuper(Flow);

  function Flow() {
    (0, _classCallCheck2["default"])(this, Flow);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Flow, [{
    key: "initPage",
    value: function initPage() {
      var editor = this.props.editor;
      editor.emit(_constants.EVENT_BEFORE_ADD_PAGE, {
        className: _constants.FLOW_CLASS_NAME
      });
      this.page = new _Editor["default"].Flow(this.config);
      editor.add(this.page);
      editor.emit(_constants.EVENT_AFTER_ADD_PAGE, {
        page: this.page
      });
    }
  }, {
    key: "pageId",
    get: function get() {
      var editor = this.props.editor;
      return "".concat(_constants.FLOW_CONTAINER, "_").concat(editor.id);
    }
  }]);
  return Flow;
}(_Page2["default"]);

Flow.defaultProps = {
  data: {
    nodes: [],
    edges: []
  }
};

var _default = (0, _withGGEditorContext["default"])(Flow);

exports["default"] = _default;