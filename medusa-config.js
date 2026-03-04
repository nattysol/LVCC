const { loadEnv, defineConfig } = require("@medusajs/framework/utils")
const path = require("path")

// Point the environment to the internal folder created during the build phase
const projectRoot = path.join(process.cwd(), ".medusa", "server")
loadEnv(process.env.NODE_ENV || "development", projectRoot)

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    // Redis is recommended for production Medusa v2 setups
    redisUrl: process.env.REDIS_URL,
    http: {
      storeCors: process.env.STORE_CORS || "http://localhost:8000",
      adminCors: process.env.ADMIN_CORS || "http://localhost:7001",
      authCors: process.env.AUTH_CORS || "http://localhost:7001",
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
    // SSL is mandatory for most cloud-hosted PostgreSQL instances
    databaseDriverOptions: process.env.NODE_ENV !== "development" 
      ? { connection: { ssl: { rejectUnauthorized: false } } } 
      : {},
  },
  admin: {
    // Ensuring the admin block is not null prevents 'reading admin' errors
    disable: process.env.DISABLE_MEDUSA_ADMIN === "true",
    path: "/app",
  },
  modules: [],
})