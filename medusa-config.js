const { loadEnv, defineConfig } = require("@medusajs/framework/utils")
const path = require("path")

// 1. Identify the project root
const isServerFolder = process.cwd().includes(path.join(".medusa", "server"))
const projectRoot = isServerFolder ? process.cwd() : path.join(process.cwd(), ".medusa", "server")

// 2. Load environment variables
loadEnv(process.env.NODE_ENV || "development", projectRoot)

// 3. Export the configuration
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
    // This stops the 'Could not find index.html' error
   path: "/app",
    disable: true, 
  },
  modules: [],
})