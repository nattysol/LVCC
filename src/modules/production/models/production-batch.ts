import { model } from "@medusajs/framework/utils"

export const ProductionBatch = model.define("production_batch", {
  id: model.id().primaryKey(),
  status: model.enum([
    "ROASTING", 
    "CONCHING", 
    "TEMPERING", 
    "PACKAGING", 
    "READY"
  ]).default("ROASTING"),
  metadata: model.json().nullable(),
})