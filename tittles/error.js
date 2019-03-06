"use strict"



module.exports = {

  print: (error, separator = "; ") => {

    const result_ = []

    if (error.code) result_.push(`code=${error.code}`)
    if (error.message) result_.push(`message=${error.message}`)
    if (error.stack) result_.push(`stack=${error.stack}`)

    return result_.join(separator)
  },
}
