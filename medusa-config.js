const { loadEnv, defineConfig } = require("@medusajs/framework/utils");
const path = require("path");

loadEnv(process.env.NODE_ENV || "development", process.cwd());

// This helper ensures we use the correct absolute path regardless of environment
const resolveModule = (relPath) => {
  return path.resolve(process.cwd(), process.env.NODE_ENV === "production" ? "dist" : "src", "modules", relPath);
};

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
    // We use the resolveModule helper to get the exact absolute path
    { resolve: resolveModule("production") },
    { resolve: resolveModule("formulation") },
    { resolve: resolveModule("document") }
  ]
});