const { loadEnv } = require("@medusajs/framework/utils")
const path = require("path")

// Point the environment and logic to the internal server folder
const projectRoot = path.join(process.cwd(), ".medusa", "server")
loadEnv(process.env.NODE_ENV || "development", projectRoot)

module.exports = require("./.medusa/server/medusa-config")