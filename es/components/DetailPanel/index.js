import "core-js/modules/es.array.map";
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
import { STATUS_CANVAS_SELECTED } from "../../common/constants";
import withGGEditorContext from "../../common/context/GGEditorContext/withGGEditorContext";
import Panel from "./Panel";

var DetailPanel = /*#__PURE__*/function (_React$Component) {
  _inherits(DetailPanel, _React$Component);

  var _super = _createSuper(DetailPanel);

  function DetailPanel(props) {
    var _this;

    _classCallCheck(this, DetailPanel);

    _this = _super.call(this, props);
    _this.state = {
      status: ''
    };

    _this.bindEvent();

    return _this;
  }

  _createClass(DetailPanel, [{
    key: "bindEvent",
    value: function bindEvent() {
      var _this2 = this;

      var onAfterAddPage = this.props.onAfterAddPage;
      onAfterAddPage(function (_ref) {
        var page = _ref.page;

        _this2.setState({
          status: STATUS_CANVAS_SELECTED
        });

        page.on('statuschange', function (_ref2) {
          var status = _ref2.status;

          _this2.setState({
            status: status
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var status = this.state.status;

      if (!status) {
        return null;
      }

      return /*#__PURE__*/React.createElement("div", pick(this.props, ['style', 'className']), React.Children.toArray(children).map(function (child) {
        return /*#__PURE__*/React.cloneElement(child, {
          status: status
        });
      }));
    }
  }]);

  return DetailPanel;
}(React.Component);

export var NodePanel = Panel.create('node');
export var EdgePanel = Panel.create('edge');
export var GroupPanel = Panel.create('group');
export var MultiPanel = Panel.create('multi');
export var CanvasPanel = Panel.create('canvas');
export default withGGEditorContext(DetailPanel);