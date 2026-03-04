const { loadEnv, defineConfig } = require("@medusajs/framework/utils")
const path = require("path")

// Load the environment variables from the backend folder
loadEnv(process.env.NODE_ENV || "development", path.resolve(__dirname, "backend"))

// Export the configuration from the backend folder
module.exports = require("./backend/medusa-config")