"use strict"

const path = require("path")



module.exports = {

  config: (env_file = ".env", example = ".example") => {
    // TODO: set file priority over environment variables (default - env)
    // 190228 2040 - this TODO's in question (lema)
    const p_ = path.isAbsolute(env_file) ? env_file : path.resolve(process.cwd(), env_file)
    return require("dotenv-safe").config({
      path: p_,
      example: `${p_}${example}`,
    })
  },
}
