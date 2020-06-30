import "core-js/modules/es.array.concat";
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

import Editor from "../Base/Editor";
import { KONI_CONTAINER, KONI_CLASS_NAME, EVENT_BEFORE_ADD_PAGE, EVENT_AFTER_ADD_PAGE } from "../../common/constants";
import Page from "../Page";
import withGGEditorContext from "../../common/context/GGEditorContext/withGGEditorContext";

var Koni = /*#__PURE__*/function (_Page) {
  _inherits(Koni, _Page);

  var _super = _createSuper(Koni);

  function Koni() {
    _classCallCheck(this, Koni);

    return _super.apply(this, arguments);
  }

  _createClass(Koni, [{
    key: "initPage",
    value: function initPage() {
      var editor = this.props.editor;
      editor.emit(EVENT_BEFORE_ADD_PAGE, {
        className: KONI_CLASS_NAME
      });
      this.page = new Editor.Koni(this.config); // console.log(this.page, 'this.page');
      // console.log(this.page.addGroup(), 'this.page.add');
      // console.log(this.page.newGroup(), 'this.page.newGroup');

      editor.add(this.page);
      editor.emit(EVENT_AFTER_ADD_PAGE, {
        page: this.page
      });
    }
  }, {
    key: "pageId",
    get: function get() {
      var editor = this.props.editor;
      return "".concat(KONI_CONTAINER, "_").concat(editor.id);
    }
  }]);

  return Koni;
}(Page);

Koni.defaultProps = {
  data: {
    nodes: [],
    edges: []
  }
};
export default withGGEditorContext(Koni);