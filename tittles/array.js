"use strict"

module.exports = {

  except: (array1, array2) => array1.filter(entry => array2.indexOf(entry) < 0),
}
