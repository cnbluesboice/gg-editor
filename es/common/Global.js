var global = {
  trackable: process.env.NODE_ENV === 'production',
  version: undefined
};
export default {
  get: function get(key) {
    return global[key];
  },
  set: function set(key, value) {
    global[key] = value;
  }
};