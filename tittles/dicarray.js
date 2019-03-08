"use strict"


const list_prefixed_values = (dicarray, key, prefix = "") => {
  const values_ = []
  dicarray.forEach(d_ => {
    if (d_[key]) {
      values_.push(`${prefix}${d_[key]}`)
    }
  })
  return values_
}


const is_empty = dicarray => {
  for (const key in dicarray) {
    if (Object.prototype.hasOwnProperty(dicarray, key)) return false
  }
  return true
}


module.exports = {

  is_empty,

  list_prefixed_values,
  lpv: (dicarray, key, prefix) => list_prefixed_values(dicarray, key, prefix),

  list_values: (dicarray, key) => list_prefixed_values(dicarray, key),
  lv: (dicarray, key) => list_prefixed_values(dicarray, key),
}
