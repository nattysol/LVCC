const { loadEnv, defineConfig } = require("@medusajs/framework/utils")

// Load environment variables
loadEnv(process.env.NODE_ENV || "development", process.cwd())

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
    disable: false,
    path: "/app"
  },
  modules: [
    {
      // Point directly to the source folder; Medusa handles the build resolution
      resolve: "./src/modules/production",
    },
    {
      resolve: "./src/modules/formulation",
    }
  ],
})