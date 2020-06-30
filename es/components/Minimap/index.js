import "core-js/modules/es.array.concat";
import "core-js/modules/es.date.to-string";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.reflect.construct";
import "core-js/modules/es.regexp.to-string";
import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import G6 from '@antv/g6';
import { pick } from "../../utils";
import { MINIMAP_CONTAINER } from "../../common/constants";
import withGGEditorContext from "../../common/context/GGEditorContext/withGGEditorContext";

require('@antv/g6/build/plugin.tool.minimap');

var G6Minimap = G6.Components.Minimap;

var Minimap = /*#__PURE__*/function (_React$Component) {
  _inherits(Minimap, _React$Component);

  var _super = _createSuper(Minimap);

  _createClass(Minimap, [{
    key: "containerId",
    get: function get() {
      var editor = this.props.editor;
      return "".concat(MINIMAP_CONTAINER, "_").concat(editor.id);
    }
  }, {
    key: "currentPage",
    get: function get() {
      var editor = this.props.editor;
      return editor.getCurrentPage();
    }
  }]);

  function Minimap(props) {
    var _this;

    _classCallCheck(this, Minimap);

    _this = _super.call(this, props);
    _this.minimap = null;

    _this.bindEvent();

    return _this;
  }

  _createClass(Minimap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init();
      this.bindPage();
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$container = _this$props.container,
          container = _this$props$container === void 0 ? this.containerId : _this$props$container,
          width = _this$props.width,
          height = _this$props.height,
          viewportWindowStyle = _this$props.viewportWindowStyle,
          viewportBackStyle = _this$props.viewportBackStyle;

      var _document$getElementB = document.getElementById(container),
          clientWidth = _document$getElementB.clientWidth,
          clientHeight = _document$getElementB.clientHeight;

      this.minimap = new G6Minimap({
        container: container,
        width: width || clientWidth,
        height: height || clientHeight,
        viewportWindowStyle: viewportWindowStyle,
        viewportBackStyle: viewportBackStyle
      });

      this.minimap.getGraph = function () {
        return _this2.currentPage.getGraph();
      };
    }
  }, {
    key: "bindPage",
    value: function bindPage() {
      if (!this.minimap || !this.currentPage) {
        return;
      }

      var graph = this.currentPage.getGraph();
      this.minimap.bindGraph(graph);
      this.minimap.debounceRender();
    }
  }, {
    key: "bindEvent",
    value: function bindEvent() {
      var _this3 = this;

      var onAfterAddPage = this.props.onAfterAddPage;
      onAfterAddPage(function () {
        _this3.bindPage();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var container = this.props.container;

      if (container) {
        return null;
      }

      return /*#__PURE__*/React.createElement("div", _extends({
        id: this.containerId
      }, pick(this.props, ['style', 'className'])));
    }
  }]);

  return Minimap;
}(React.Component);

export default withGGEditorContext(Minimap);