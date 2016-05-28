export default class Util {

  static fetchWithkey(key, value, obj) {
    let item = {};
    for (item of obj) {
      if (item.hasOwnProperty(key) && item[key].toString() === value.toString()) {
        return item;
      }
    }

    throw new Error('key not found');
  }
};
