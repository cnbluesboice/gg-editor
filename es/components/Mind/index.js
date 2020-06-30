import "core-js/modules/es.array.concat";
import "core-js/modules/es.date.to-string";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.reflect.construct";
import "core-js/modules/es.regexp.to-string";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _get from "@babel/runtime/helpers/get";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Editor from "../Base/Editor";
import { MIND_CONTAINER, MIND_CLASS_NAME, EVENT_BEFORE_ADD_PAGE, EVENT_AFTER_ADD_PAGE } from "../../common/constants";
import Page from "../Page";
import withGGEditorContext from "../../common/context/GGEditorContext/withGGEditorContext";

var Mind = /*#__PURE__*/function (_Page) {
  _inherits(Mind, _Page);

  var _super = _createSuper(Mind);

  function Mind() {
    _classCallCheck(this, Mind);

    return _super.apply(this, arguments);
  }

  _createClass(Mind, [{
    key: "initPage",
    value: function initPage() {
      var editor = this.props.editor;
      editor.emit(EVENT_BEFORE_ADD_PAGE, {
        className: MIND_CLASS_NAME
      });
      this.page = new Editor.Mind(this.config);
      editor.add(this.page);
      editor.emit(EVENT_AFTER_ADD_PAGE, {
        page: this.page
      });
    }
  }, {
    key: "bindEvent",
    value: function bindEvent() {
      _get(_getPrototypeOf(Mind.prototype), "bindEvent", this).call(this);

      this.bindKeyUpEditLabel();
    }
  }, {
    key: "bindKeyUpEditLabel",
    value: function bindKeyUpEditLabel() {
      var _this = this;

      var editLabel = this.page.get('labelTextArea');
      editLabel.on('keyup', function (e) {
        e.stopPropagation();
        var item = editLabel.focusItem;
        var text = editLabel.textContent;

        _this.page.emit('keyUpEditLabel', {
          item: item,
          text: text
        });
      });
    }
  }, {
    key: "pageId",
    get: function get() {
      var editor = this.props.editor;
      return "".concat(MIND_CONTAINER, "_").concat(editor.id);
    }
  }]);

  return Mind;
}(Page);

export default withGGEditorContext(Mind);