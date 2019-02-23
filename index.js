"use strict"

const importLazy = require("import-lazy")(require)



module.exports = {

  env: importLazy("./tittles/env"),

  array: importLazy("./tittles/array"),
  dicarray: importLazy("./tittles/dicarray"),

  sjoin: importLazy("./tittles/sjoin"),

  isstring: importLazy("./tittles/isstring"),

  error: importLazy("./tittles/error"),
}
