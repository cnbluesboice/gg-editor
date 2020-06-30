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

var Menu = /*#__PURE__*/function (_React$Component) {
  _inherits(Menu, _React$Component);

  var _super = _createSuper(Menu);

  function Menu(props, type) {
    var _this;

    _classCallCheck(this, Menu);

    _this = _super.call(this, props);
    _this.type = type;
    return _this;
  }

  _createClass(Menu, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      var type = this.type;
      return /*#__PURE__*/React.createElement("div", {
        className: "menu",
        "data-status": "".concat(type, "-selected")
      }, children);
    }
  }]);

  return Menu;
}(React.Component);

Menu.create = function (type) {
  return /*#__PURE__*/function (_Menu) {
    _inherits(TypedMenu, _Menu);

    var _super2 = _createSuper(TypedMenu);

    function TypedMenu(props) {
      _classCallCheck(this, TypedMenu);

      return _super2.call(this, props, type);
    }

    return TypedMenu;
  }(Menu);
};

export default Menu;