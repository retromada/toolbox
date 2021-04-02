const { deprecate } = require('util')
const Heap = require('./Heap.js')

module.exports = {
  File: require('./File.js'),
  Heap,
  Map: deprecate(Heap, 'Map: use Heap instead')
}
