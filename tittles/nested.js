// Based on https://medium.com/javascript-inside/safely-accessing-deeply-nested-values-in-javascript-99bf72a0855a
module.exports.access = (path, nested) => (
  path ? path.reduce((current, key) => (current && current[key]) ? current[key] : null, nested) : null
)
