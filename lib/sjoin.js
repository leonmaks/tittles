"use strict"



module.exports = (value, sep = ", ", fore = "", tail = "") => {

  let result_ = ""

  if (value) {

    if (Array.isArray(value)) {

      if (value.length > 0) {
        // Array value
        result_ = `${fore}${value.filter(x => typeof x === "string" && x.length > 0).join(sep)}${tail}`
      }

    } else if (typeof value === "string" || value instanceof String) {

      if (value.length > 0) {
        // String value
        result_ = `${fore}${value}${tail}`
      }

    } else {
      throw new Error(`Unsupported 'value' type (${typeof value}) - should be 'Array' or 'string'`)
    }
  }
  return result_
}
