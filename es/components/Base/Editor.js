import "core-js/modules/es.date.to-string";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.reflect.construct";
import "core-js/modules/es.regexp.to-string";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import GGEditorCore from 'gg-editor-core';
import { EVENT_BEFORE_ADD_PAGE } from "../../common/constants";
import track from "../../helpers/track";
import { uniqueId } from "../../utils";

var Editor = /*#__PURE__*/function (_GGEditorCore) {
  _inherits(Editor, _GGEditorCore);

  var _super = _createSuper(Editor);

  function Editor(options) {
    var _this;

    _classCallCheck(this, Editor);

    _this = _super.call(this, options); // console.log(this, 'this');
    // console.log(this.addListeners(), 'this.addListeners');
    // console.log(this.on(), 'this');
    // console.log(this.off(), 'off');

    _this.id = uniqueId();

    _this.on(EVENT_BEFORE_ADD_PAGE, function (_ref) {
      var className = _ref.className;
      track({
        c1: className
      });
    });

    return _this;
  }

  return Editor;
}(GGEditorCore);

export { Editor as default };