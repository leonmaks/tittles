"use strict"

const { isstring } = require("./string")

module.exports = (value, {
  sep = ", ", fore = "", tail = "", dflt = ""
} = {}) => {
  let result_ = dflt
  if (value) {
    if (Array.isArray(value)) {
      // Array value
      if (value.length > 0) {
        result_ = `${fore}${value.filter(x => typeof x === "string" && x.length > 0).join(sep)}${tail}`
      }
    } else if (isstring(value)) {
      // String value
      if (value.length > 0) {
        result_ = `${fore}${value}${tail}`
      }
    } else {
      throw new Error(`Unsupported 'value' type (${typeof value}) - should be 'Array' or 'string'`)
    }
  }
  return result_
}
