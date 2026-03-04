const { loadEnv, defineConfig } = require("@medusajs/framework/utils")
const path = require("path")

// 1. Tell Medusa where the actual project files are
const projectRoot = path.join(process.cwd(), ".medusa", "server")

// 2. Load environment variables for that subfolder
loadEnv(process.env.NODE_ENV || "development", projectRoot)

// 3. Export the compiled config from the build folder
// This makes the root directory 'look' like a valid project to the cloud migrator
try {
  module.exports = require("./.medusa/server/medusa-config")
} catch (e) {
  // Fallback for the build phase when .medusa/server doesn't exist yet
  module.exports = defineConfig({
    projectConfig: {
      databaseUrl: process.env.DATABASE_URL,
      http: {
        storeCors: process.env.STORE_CORS,
        adminCors: process.env.ADMIN_CORS,
        authCors: process.env.AUTH_CORS,
        jwtSecret: process.env.JWT_SECRET,
        cookieSecret: process.env.COOKIE_SECRET,
      },
    },
  })
}