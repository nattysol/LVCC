const { loadEnv, defineConfig } = require("@medusajs/framework/utils")
const path = require("path")

// Point the environment and logic to the internal server folder created during build
const projectRoot = path.join(process.cwd(), ".medusa", "server")
loadEnv(process.env.NODE_ENV || "development", projectRoot)

// This exports the compiled config from the build folder
module.exports = require("./.medusa/server/medusa-config")