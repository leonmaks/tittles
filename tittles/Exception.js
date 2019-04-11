"use strict"

class Exception extends Error {

  // Default http_code=500 means
  // server cannot process the request
  // for an unknown reason.
  constructor(http_code = 500, ...params) {

    // Pass remaining arguments
    // (including vendor specific ones)
    // to parent constructor
    super(...params)

    // Maintains proper stack trace
    // for where our error was thrown
    // (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, Exception)
    }

    // Custom debugging information
    this.http_code = http_code
  }
}


module.exports = Exception
