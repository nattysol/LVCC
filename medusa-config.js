const { loadEnv, defineConfig } = require("@medusajs/framework/utils")
const path = require("path")

const isServerFolder = process.cwd().includes(path.join(".medusa", "server"))
const projectRoot = isServerFolder ? process.cwd() : path.join(process.cwd(), ".medusa", "server")

loadEnv(process.env.NODE_ENV || "development", projectRoot)

// Determine the base path for modules: 'dist' for production, 'src' for development
const moduleBase = process.env.NODE_ENV === "production" ? "dist" : "src"

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
      // resolve dynamically points to src/ during build and dist/ during runtime
      resolve: path.join(projectRoot, moduleBase, "modules", "production"),
    },
    {
      resolve: path.join(projectRoot, moduleBase, "modules", "formulation"),
    },
  ],
})