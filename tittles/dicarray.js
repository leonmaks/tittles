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



module.exports = {

  list_prefixed_values,
  lpv: (dicarray, key, prefix) => list_prefixed_values(dicarray, key, prefix),

  list_values: (dicarray, key) => list_prefixed_values(dicarray, key),
  lv: (dicarray, key) => list_prefixed_values(dicarray, key),
}
