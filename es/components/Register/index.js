import "core-js/modules/es.array.map";
import "core-js/modules/es.date.to-string";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.reflect.construct";
import "core-js/modules/es.regexp.to-string";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import Editor from "../Base/Editor";
import { upperFirst } from "../../utils";
import withGGEditorContext from "../../common/context/GGEditorContext/withGGEditorContext";

var Register = /*#__PURE__*/function (_React$Component) {
  _inherits(Register, _React$Component);

  var _super = _createSuper(Register);

  function Register(props, type) {
    var _this;

    _classCallCheck(this, Register);

    _this = _super.call(this, props);
    _this.type = type;

    _this.bindEvent();

    return _this;
  }

  _createClass(Register, [{
    key: "bindEvent",
    value: function bindEvent() {
      var _this2 = this;

      var type = this.type;
      var onBeforeAddPage = this.props.onBeforeAddPage;
      onBeforeAddPage(function (_ref) {
        var _host;

        var className = _ref.className;
        var host = Editor[className];
        var keys = ['name', 'config', 'extend'];

        if (type === 'command') {
          host = Editor;
        }

        if (type === 'behaviour') {
          keys = ['name', 'behaviour', 'dependences'];
        }

        var args = keys.map(function (key) {
          return _this2.props[key];
        });

        (_host = host)["register".concat(upperFirst(type))].apply(_host, _toConsumableArray(args));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Register;
}(React.Component);

Register.create = function (type) {
  var TypedRegister = /*#__PURE__*/function (_Register) {
    _inherits(TypedRegister, _Register);

    var _super2 = _createSuper(TypedRegister);

    function TypedRegister(props) {
      _classCallCheck(this, TypedRegister);

      return _super2.call(this, props, type);
    }

    return TypedRegister;
  }(Register);

  return withGGEditorContext(TypedRegister);
};

export var RegisterNode = Register.create('node');
export var RegisterEdge = Register.create('edge');
export var RegisterGroup = Register.create('group');
export var RegisterGuide = Register.create('guide');
export var RegisterCommand = Register.create('command');
export var RegisterBehaviour = Register.create('behaviour');