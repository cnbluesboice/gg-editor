import "core-js/modules/es.date.to-string";
import "core-js/modules/es.function.name";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.reflect.construct";
import "core-js/modules/es.regexp.to-string";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';

var Command = /*#__PURE__*/function (_React$Component) {
  _inherits(Command, _React$Component);

  var _super = _createSuper(Command);

  function Command() {
    _classCallCheck(this, Command);

    return _super.apply(this, arguments);
  }

  _createClass(Command, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          children = _this$props.children,
          restProps = _objectWithoutProperties(_this$props, ["name", "children"]);

      return /*#__PURE__*/React.createElement("div", _extends({
        className: "command",
        "data-command": name
      }, restProps), children);
    }
  }]);

  return Command;
}(React.Component);

export default Command;