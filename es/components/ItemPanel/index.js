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
import withGGEditorContext from "../../common/context/GGEditorContext/withGGEditorContext";
import Item from "./Item";

var ItemPanel = /*#__PURE__*/function (_React$Component) {
  _inherits(ItemPanel, _React$Component);

  var _super = _createSuper(ItemPanel);

  function ItemPanel(props) {
    var _this;

    _classCallCheck(this, ItemPanel);

    _this = _super.call(this, props);
    _this.page = null;

    _this.handleMouseUp = function () {
      _this.page.cancelAdd();
    };

    _this.bindEvent();

    return _this;
  }

  _createClass(ItemPanel, [{
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
      return /*#__PURE__*/React.createElement("div", _extends({
        id: this.containerId
      }, pick(this.props, ['style', 'className'])), children);
    }
  }]);

  return ItemPanel;
}(React.Component);

export { Item };
export default withGGEditorContext(ItemPanel);