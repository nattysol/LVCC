const { loadEnv, defineConfig } = require("@medusajs/framework/utils");

loadEnv(process.env.NODE_ENV || "development", process.cwd());

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL, // Required for B2B Workflows
    databaseDriverOptions: process.env.NODE_ENV !== "development" 
      ? { connection: { ssl: { rejectUnauthorized: false } } } 
      : {},
    http: {
      storeCors: process.env.STORE_CORS || "http://localhost:8000",
      adminCors: process.env.ADMIN_CORS || "http://localhost:7001",
      authCors: process.env.AUTH_CORS || "http://localhost:7001",
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
  },
  admin: {
    disable: process.env.NODE_ENV === "production" ? false : false,
    backendUrl: process.env.MEDUSA_BACKEND_URL,
  },
  modules: [
    // Core infrastructure
    {
      resolve: "@medusajs/medusa/event-bus-redis",
      options: { redisUrl: process.env.REDIS_URL }
    },
    {
      resolve: "@medusajs/medusa/cache-redis",
      options: { redisUrl: process.env.REDIS_URL }
    },
    {
      resolve: "@medusajs/medusa/workflow-engine-redis",
      options: { redisUrl: process.env.REDIS_URL }
    },
    // Custom Modules - Now using the dynamic path
    { resolve: `${moduleBase}/production` },
    { resolve: `${moduleBase}/formulation` },
    { resolve: `${moduleBase}/document` }
  ]
});