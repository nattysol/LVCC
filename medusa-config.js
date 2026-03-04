const { loadEnv } = require("@medusajs/framework/utils")
const path = require("path")

loadEnv(process.env.NODE_ENV || "development", process.cwd())

// This tells the CLI that the real config is the .ts file next to it
module.exports = require("./medusa-config.ts")