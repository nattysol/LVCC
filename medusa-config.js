const { loadEnv, defineConfig } = require("@medusajs/framework/utils")

// Load environment variables from the current directory
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
    databaseDriverOptions: { 
      connection: { ssl: { rejectUnauthorized: false } } 
    },
  },
  admin: {
    disable: false,
    path: "/app",
  },
  modules: [
    {
      // We point directly to the source files. 
      // Medusa's loader will handle the compilation at runtime/build.
      resolve: "./src/modules/production",
    },
    {
      resolve: "./src/modules/formulation",
    },
  ],
})