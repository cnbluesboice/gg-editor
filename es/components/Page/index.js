import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.for-each";
import "core-js/modules/es.date.to-string";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.reflect.construct";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/web.dom-collections.for-each";
import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import { pick, merge } from "../../utils";
import { GRAPH_MOUSE_EVENTS, GRAPH_OTHER_EVENTS, PAGE_EVENTS, GRAPH_MOUSE_REACT_EVENTS, GRAPH_OTHER_REACT_EVENTS, PAGE_REACT_EVENTS } from "../../common/constants";

var Page = /*#__PURE__*/function (_React$Component) {
  _inherits(Page, _React$Component);

  var _super = _createSuper(Page);

  function Page() {
    var _this;

    _classCallCheck(this, Page);

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

  _createClass(Page, [{
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
      merge(this.config, this.props, {
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
      GRAPH_MOUSE_EVENTS.forEach(function (event) {
        // console.log(event, '1234456');
        var eventName = GRAPH_MOUSE_REACT_EVENTS[event];
        addListener(_this2.graph, "".concat(event), _this2.props["on".concat(eventName)]);
        addListener(_this2.graph, "node:".concat(event), _this2.props["onNode".concat(eventName)]);
        addListener(_this2.graph, "edge:".concat(event), _this2.props["onEdge".concat(eventName)]);
        addListener(_this2.graph, "group:".concat(event), _this2.props["onGroup".concat(eventName)]);
        addListener(_this2.graph, "guide:".concat(event), _this2.props["onGuide".concat(eventName)]);
        addListener(_this2.graph, "anchor:".concat(event), _this2.props["onAnchor".concat(eventName)]);
      });
      GRAPH_OTHER_EVENTS.forEach(function (event) {
        addListener(_this2.graph, [event], _this2.props[GRAPH_OTHER_REACT_EVENTS[event]]);
      });
      PAGE_EVENTS.forEach(function (event) {
        addListener(_this2.page, [event], _this2.props[PAGE_REACT_EVENTS[event]]);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var page = this.page,
          pageId = this.pageId;
      var children = this.props.children;
      return /*#__PURE__*/React.createElement("div", _extends({
        id: pageId
      }, pick(this.props, ['style', 'className'])), page ? children : null);
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
}(React.Component);

export default Page;