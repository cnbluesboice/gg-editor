"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const global = {
  trackable: process.env.NODE_ENV === 'production',
  version: process.env.GG_EDITOR_VERSION
};
var _default = {
  get(key) {
    return global[key];
  },

  set(key, value) {
    global[key] = value;
  }

};
exports.default = _default;