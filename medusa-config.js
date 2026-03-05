const { loadEnv, defineConfig } = require("@medusajs/framework/utils")
const path = require("path")

// 1. Identify the project root
const isCompiledDir = process.cwd().includes(path.join(".medusa", "server"))
const projectRoot = isCompiledDir ? process.cwd() : path.join(process.cwd(), ".medusa", "server")

loadEnv(process.env.NODE_ENV || "development", projectRoot)

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
    databaseDriverOptions: { connection: { ssl: { rejectUnauthorized: false } } },
  },
  admin: {
    disable: false,
    path: "/app",
  },
  modules: [
    {
      // Using absolute paths ensures the Medusa loader finds the modules 
      // regardless of the current working directory.
      resolve: path.join(projectRoot, "src", "modules", "production"),
    },
    {
      resolve: path.join(projectRoot, "src", "modules", "formulation"),
    },
  ],
})