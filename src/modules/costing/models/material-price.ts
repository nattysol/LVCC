// medusa-backend/src/modules/costing/models/material-price.ts

import { model } from "@medusajs/utils"

export const MaterialPrice = model.define("material_price", {
  id: model.id().primaryKey(),
  
  // Link to the Medusa Product/Variant ID for the raw material
  variant_id: model.text().index(), 
  
  // The actual cost data
  price_per_unit: model.bigNumber(), // Stored in smallest denomination (e.g., cents)
  currency_code: model.text(),   // e.g., 'usd'
  unit_of_measure: model.text(), // e.g., 'kg', 'lb', 'tonne'
  
  // Supplier Intelligence
  supplier_id: model.text(),
  supplier_lead_time_days: model.number().default(0),
  
  // Temporal Logic: Ensures historical batches keep their original cost
  effective_date: model.dateTime(),
  expiration_date: model.dateTime().nullable(),
  
  // Enterprise metadata for lot tracking
  lot_number: model.text().nullable(),
  is_active: model.boolean().default(true),
  
  metadata: model.json().nullable(),
})