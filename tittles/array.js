"use strict"

module.exports = {
  diff: (array1, array2) => array1.filter(i => array2.indexOf(i) < 0),
}
