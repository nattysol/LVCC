// medusa-backend/src/modules/costing/models/recipe-bom.ts

import { model } from "@medusajs/utils"

export const RecipeBOM = model.define("recipe_bom", {
  id: model.id().primaryKey(),
  
  // Link to the finished chocolate product
  product_id: model.text().index(),
  
  // Version control (e.g., "v1.0", "v2.1-Spring")
  version_label: model.text(),
  is_active: model.boolean().default(true),

  // Master formulation details
  ingredients: model.json(), // Array of { variant_id: string, ratio: number, loss_factor: number }
  
  // Enterprise Manufacturing Math
  target_yield_kg: model.bigNumber(), 
  estimated_labor_hours: model.number(),
  
  // Instructions & Quality Control
  standard_operating_procedures: model.text().nullable(),
  target_microns: model.number().default(20),
  
  metadata: model.json().nullable(),
})