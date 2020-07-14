import "core-js/modules/es.symbol";
import "core-js/modules/es.array.filter";
import "core-js/modules/es.array.for-each";
import "core-js/modules/es.date.to-string";
import "core-js/modules/es.object.define-properties";
import "core-js/modules/es.object.define-property";
import "core-js/modules/es.object.get-own-property-descriptor";
import "core-js/modules/es.object.get-own-property-descriptors";
import "core-js/modules/es.object.keys";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.reflect.construct";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/web.dom-collections.for-each";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import withGGEditorContext from "../../common/context/GGEditorContext/withGGEditorContext";

var Item = /*#__PURE__*/function (_React$Component) {
  _inherits(Item, _React$Component);

  var _super = _createSuper(Item);

  function Item(props) {
    var _this;

    _classCallCheck(this, Item);

    _this = _super.call(this, props);

    _this.handleMouseDown = function () {
      // console.log(1111);
      var _this$props = _this.props,
          type = _this$props.type,
          size = _this$props.size,
          shape = _this$props.shape,
          model = _this$props.model;

      if (_this.page) {
        _this.page.beginAdd(type, _objectSpread({
          type: type,
          size: size,
          shape: shape
        }, model));
      }
    };

    _this.bindEvent();

    return _this;
  }

  _createClass(Item, [{
    key: "bindEvent",
    value: function bindEvent() {
      var _this2 = this;

      var onAfterAddPage = this.props.onAfterAddPage;
      onAfterAddPage(function (_ref) {
        var page = _ref.page;
        _this2.page = page;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          src = _this$props2.src,
          shape = _this$props2.shape,
          children = _this$props2.children,
          restProps = _objectWithoutProperties(_this$props2, ["src", "shape", "children"]);

      return /*#__PURE__*/React.createElement("div", _extends({
        style: {
          cursor: 'pointer'
        },
        onMouseDown: this.handleMouseDown
      }, restProps), src ? /*#__PURE__*/React.createElement("img", {
        src: src,
        alt: shape
      }) : children);
    }
  }]);

  return Item;
}(React.Component);

export default withGGEditorContext(Item);