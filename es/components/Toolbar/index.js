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
import Editor from "../Base/Editor";
import { pick } from "../../utils";
import { TOOLBAR_CONTAINER } from "../../common/constants";
import withGGEditorContext from "../../common/context/GGEditorContext/withGGEditorContext";

var Toolbar = /*#__PURE__*/function (_React$Component) {
  _inherits(Toolbar, _React$Component);

  var _super = _createSuper(Toolbar);

  _createClass(Toolbar, [{
    key: "containerId",
    get: function get() {
      var editor = this.props.editor;
      return "".concat(TOOLBAR_CONTAINER, "_").concat(editor.id);
    }
  }]);

  function Toolbar(props) {
    var _this;

    _classCallCheck(this, Toolbar);

    _this = _super.call(this, props);
    _this.toolbar = null;
    var editor = props.editor,
        onAfterAddPage = props.onAfterAddPage;
    onAfterAddPage(function () {
      _this.toolbar = new Editor.Toolbar({
        container: _this.containerId
      });
      editor.add(_this.toolbar);
    });
    return _this;
  }

  _createClass(Toolbar, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/React.createElement("div", _extends({
        id: this.containerId
      }, pick(this.props, ['style', 'className'])), children);
    }
  }]);

  return Toolbar;
}(React.Component);

export default withGGEditorContext(Toolbar);