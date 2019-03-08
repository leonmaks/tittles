"use strict"

const importLazy = require("import-lazy")(require)


module.exports = {

  env: importLazy("./tittles/env"),

  array: importLazy("./tittles/array"),
  dicarray: importLazy("./tittles/dicarray"),

  sjoin: importLazy("./tittles/sjoin"),

  string: importLazy("./tittles/string"),

  error: importLazy("./tittles/error"),
  Exception: importLazy("./tittles/Exception"),
}
