import { model } from "@medusajs/framework/utils"

export const ChocolateFormula = model.define("chocolate_formula", {
  id: model.id().primaryKey(),
  name: model.text(), // e.g., "Partner A - Signature Dark"
  cocoa_percentage: model.number(), // 50-100
  roast_profile: model.enum(["LIGHT", "MEDIUM", "DARK", "EXTRA_DARK"]),
  bean_origin: model.text(), // e.g., "Madagascar Sambirano"
  inclusions: model.json(), // e.g., ["Sea Salt", "Cocoa Nibs"]
  moq: model.number().default(500), // Minimum Order Quantity
  metadata: model.json().nullable(),
})