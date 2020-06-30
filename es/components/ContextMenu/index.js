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
import { pick } from "../../utils";
import Editor from "../Base/Editor";
import { CONTEXT_MENU_CONTAINER } from "../../common/constants";
import withGGEditorContext from "../../common/context/GGEditorContext/withGGEditorContext";
import Menu from "./Menu";

var ContextMenu = /*#__PURE__*/function (_React$Component) {
  _inherits(ContextMenu, _React$Component);

  var _super = _createSuper(ContextMenu);

  function ContextMenu() {
    var _this;

    _classCallCheck(this, ContextMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.contextMenu = null;
    return _this;
  }

  _createClass(ContextMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var editor = this.props.editor;
      this.contextMenu = new Editor.Contextmenu({
        container: this.containerId
      });
      editor.add(this.contextMenu);
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/React.createElement("div", _extends({
        id: this.containerId
      }, pick(this.props, ['style', 'className'])), children);
    }
  }, {
    key: "containerId",
    get: function get() {
      var editor = this.props.editor;
      return "".concat(CONTEXT_MENU_CONTAINER, "_").concat(editor.id);
    }
  }]);

  return ContextMenu;
}(React.Component);

export var NodeMenu = Menu.create('node');
export var EdgeMenu = Menu.create('edge');
export var GroupMenu = Menu.create('group');
export var MultiMenu = Menu.create('multi');
export var CanvasMenu = Menu.create('canvas');
export default withGGEditorContext(ContextMenu);