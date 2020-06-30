import "core-js/modules/es.date.to-string";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.reflect.construct";
import "core-js/modules/es.regexp.to-string";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import { pick } from "../../utils";

var Panel = /*#__PURE__*/function (_React$Component) {
  _inherits(Panel, _React$Component);

  var _super = _createSuper(Panel);

  function Panel(props, type) {
    var _this;

    _classCallCheck(this, Panel);

    _this = _super.call(this, props);
    _this.type = type;
    return _this;
  }

  _createClass(Panel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          status = _this$props.status,
          children = _this$props.children;
      var type = this.type;

      if ("".concat(type, "-selected") !== status) {
        return null;
      }

      return /*#__PURE__*/React.createElement("div", pick(this.props, ['style', 'className']), children);
    }
  }]);

  return Panel;
}(React.Component);

Panel.create = function (type) {
  return /*#__PURE__*/function (_Panel) {
    _inherits(TypedPanel, _Panel);

    var _super2 = _createSuper(TypedPanel);

    function TypedPanel(props) {
      _classCallCheck(this, TypedPanel);

      return _super2.call(this, props, type);
    }

    return TypedPanel;
  }(Panel);
};

export default Panel;