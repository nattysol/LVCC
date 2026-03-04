const { loadEnv, defineConfig } = require("@medusajs/framework/utils")
const path = require("path")

// Detect if we are running in the compiled server directory
const isCompiled = process.cwd().includes(".medusa/server")
const projectRoot = isCompiled ? process.cwd() : path.join(process.cwd(), ".medusa", "server")

loadEnv(process.env.NODE_ENV || "development", projectRoot)

module.exports = defineConfig({
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
})