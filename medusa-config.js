const { loadEnv, defineConfig } = require("@medusajs/framework/utils")
const path = require("path")

// Check if we are in the Cloud's special WORKDIR
const isCloud = process.cwd().includes(".medusa/server")

// Load env from the current directory
loadEnv(process.env.NODE_ENV || "development", process.cwd())

const config = {
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL,
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
    path: "/app",
  },
  modules: [],
}

module.exports = defineConfig(config)