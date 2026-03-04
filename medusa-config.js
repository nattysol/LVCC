const { loadEnv } = require("@medusajs/framework/utils")
const path = require("path")

// This points the environment to the internal folder created during build
const projectRoot = path.join(process.cwd(), ".medusa", "server")
loadEnv(process.env.NODE_ENV || "development", projectRoot)

// Redirect the CLI to the actual config located in the server folder
module.exports = require("./.medusa/server/medusa-config")