module.exports = class extends Map {
  constructor (iterable) {
    super(iterable)

    Object.defineProperty(this, '_array', { value: null, writable: true, configurable: true })
  }

  /**
   * Sets a new element with a specified key and a value to a Map object
   * @param {any} key 
   * @param {any} value 
   * @returns {Map}
   */
  set (key, value) {
    this._array = null
    return super.set(key, value)
  }

  /**
   * Create an Array, and cache it internally
   * @returns {Array}
   */
  array () {
    if (!this._array || this._array.length !== this.size) this._array = [...this.values()]
    return this._array
  }
}
