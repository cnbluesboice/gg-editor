"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var PropsAPI = /*#__PURE__*/function () {
  function PropsAPI(editor) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, PropsAPI);
    this.editor = null;
    this.editor = editor;
    ['executeCommand'].forEach(function (key) {
      _this[key] = function () {
        var _this$editor;

        return (_this$editor = _this.editor)[key].apply(_this$editor, arguments);
      };
    });
    ['read', 'save', 'add', 'find', 'update', 'remove', 'getSelected'].forEach(function (key) {
      _this[key] = function () {
        var _this$currentPage;

        return (_this$currentPage = _this.currentPage)[key].apply(_this$currentPage, arguments);
      };
    });
  }

  (0, _createClass2["default"])(PropsAPI, [{
    key: "currentPage",
    get: function get() {
      return this.editor.getCurrentPage();
    }
  }]);
  return PropsAPI;
}();

var _default = PropsAPI;
exports["default"] = _default;