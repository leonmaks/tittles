"use strict"

const cosmiconfig = require("cosmiconfig")

const { print } = require("./error")

module.exports = {

  read: async (moduleName, {
    // '.yaml' & '.json' extensions
    searchPlaces = [
      `${moduleName}.yaml`,
      `${moduleName}.json`,
    ],
    // current dir only
    stopDir = __dirname,
  } = {}) => {

    try {
      const explorer = cosmiconfig(moduleName, { searchPlaces, stopDir })
      const result_ = await explorer.search()
      return result_ && result_.config

      // const config = require("./config.json")
      // // baseline config is 'production'
      // const defaultConfig = config.production
      // // default environment assume to be 'development'
      // const environment = process.env.NODE_ENV || "development"
      // const environmentConfig = config[environment]
      // // environment config - to override baseline config
      // const finalConfig = _.merge(defaultConfig, environmentConfig)

      // // as a best practice
      // // all global variables should be referenced via global. syntax
      // // and their names should always begin with g
      // global.config = finalConfig

      // // log global.config
      // console.log(`global.config: ${JSON.stringify(global.config, undefined, global.config.json_indentation)}`)

    } catch (exc) {
      console.error(`Unable to read configuration from [${searchPlaces}]`, print(exc))
      throw exc
    }
  }
}
