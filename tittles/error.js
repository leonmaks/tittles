"use strict"

module.exports = {

  print: (error, {
    separator = "; ", code = true, message = true, stack = true
  } = {}) => {
    const result_ = []
    if (error.code && code) result_.push(`code=${error.code}`)
    if (error.message && message) result_.push(`message=${error.message}`)
    if (error.stack && stack) result_.push(`stack=${error.stack}`)
    return result_.join(separator)
  },
}
