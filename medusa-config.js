const { loadEnv, defineConfig } = require("@medusajs/framework/utils")
const path = require("path")

// 1. Identify the project root based on the container structure
const isCompiledDir = process.cwd().includes(".medusa/server")
const projectRoot = isCompiledDir ? process.cwd() : path.join(process.cwd(), ".medusa", "server")

// 2. Load environment variables
loadEnv(process.env.NODE_ENV || "development", projectRoot)

// 3. Export the configuration
// We explicitly define the config here so the root-level CLI finds a valid object
module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS || "http://localhost:8000",
      adminCors: process.env.ADMIN_CORS || "http://localhost:7001",
      authCors: process.env.AUTH_CORS || "http://localhost:7001",
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
    databaseDriverOptions: process.env.NODE_ENV !== "development" 
      ? { connection: { ssl: { rejectUnauthorized: false } } } 
      : {},
  },
  admin: {
    disable: process.env.DISABLE_MEDUSA_ADMIN === "true",
  },
  modules: [],
})