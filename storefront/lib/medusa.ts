import Medusa from "@medusajs/js-sdk"

// Use your Medusa Cloud URL from your environment variables
export const sdk = new Medusa({
  baseUrl: process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "https://your-medusa-url.com",
  debug: process.env.NODE_ENV === "development",
})