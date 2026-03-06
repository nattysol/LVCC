
import { model } from "@medusajs/framework/utils"

export const ChocolateFormula = model.define("chocolate_formula", {
  id: model.id().primaryKey(),
  name: model.text(),
  cocoa_percentage: model.number(),
  roast_profile: model.text(), // e.g., "Medium-Dark"
  inclusions: model.json(), // e.g., ["Sea Salt", "Nibs"]
})