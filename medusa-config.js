// This file exists to help Medusa Cloud find the project in the /backend folder
const path = require("path");
const { loadEnv, defineConfig } = require("@medusajs/framework/utils");

loadEnv(process.env.NODE_ENV || "development", path.resolve(__dirname, "backend"));

module.exports = require("./backend/medusa-config");