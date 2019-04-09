"use strict"

module.exports = {

  // Rounding Decimals in JavaScript:
  // http://www.jacklmoore.com/notes/rounding-in-javascript/
  round: (value, decimals) => Number(`${Math.round(`${value}e${decimals}`)}e-${decimals}`),

  dec_2_null_dash: value => (value % 1) ? value.toFixed(2) : (value || "-"),
}
