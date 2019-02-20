"use strict"

/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable global-require */

const __path = require("path")



module.exports = (path = ".env", example = ".example") => {

  const path_ = __path.isAbsolute(path) ? path : __path.resolve(process.cwd(), path)

  require("dotenv-safe").config({
    path: path_,
    example: `${path_}${example}`,
  })
}
