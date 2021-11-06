"use strict"

const cosmiconfig = require("cosmiconfig")

const { print } = require("./error")
const { access } = require("./nested")

module.exports.read = async (moduleName, {
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
    return (result_ && result_.config) || {}

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

  } catch (ex_) {
    console.error(`Unable to read configuration from [${searchPlaces}]`, print(ex_))
    throw ex_
  }
}

module.exports.value = (name, { confPath = null, dflt = null, required = false } = {}, config = null) => {
  const value_ = (name && process.env[name]) || (confPath && config && access(confPath, config))
  if (value_) return value_
  if (dflt) return dflt
  if (required) throw new Error(`${name || "UNDEFINED"} is undefined`)
  return undefined
}

module.exports.initParams = (params, config = null) => {
  for (const [name, def] of Object.entries(params)) {
    params[name].value = module.exports.value(name, def, config)
  }
}
