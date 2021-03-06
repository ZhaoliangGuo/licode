/* global unescape, L */
this.L = this.L || {};

L.Map = () => {
  const that = {};
  const values = {};

  that.add = (id, value) => {
    values[id] = value;
  };

  that.get = id => values[id];

  that.has = id => values[id] !== undefined;

  that.forEach = (func) => {
    const keys = Object.keys(values);
    for (let index = 0; index < keys.length; index += 1) {
      const key = keys[index];
      const value = values[key];
      func(value, key);
    }
  };

  that.remove = (id) => {
    delete values[id];
  };

  return that;
};
