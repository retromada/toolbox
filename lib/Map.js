module.exports = class extends Map {
  constructor () {
    super()

    Object.defineProperty(this, '_array', { value: null, writable: true, configurable: true })
  }

  set (key, value) {
    this._array = null
    return super.set(key, value)
  }

  array () {
    if (!this._array || this._array.length !== this.size) this._array = [...this.values()]
    return this._array
  }
}
