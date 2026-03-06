const { loadEnv, defineConfig } = require("@medusajs/framework/utils");

loadEnv(process.env.NODE_ENV || "development", process.cwd());

// We use a cleaner check here to ensure we don't double-up on directory names
const isProd = process.env.NODE_ENV === "production";
const modulePath = isProd ? "./dist/modules" : "./src/modules";

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL,
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
    // Using modulePath directly to avoid string template nesting issues
    { resolve: modulePath + "/production" },
    { resolve: modulePath + "/formulation" },
    { resolve: modulePath + "/document" }
  ]
});