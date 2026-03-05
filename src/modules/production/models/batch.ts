import { model } from "@medusajs/framework/utils"

export const Batch = model.define("batch", {
  id: model.id().primaryKey(),
  batch_number: model.text().unique(),
  status: model.enum(["roasting", "conching", "tempering", "packaging", "completed"]).default("roasting"),
  started_at: model.dateTime(),
  formulation_id: model.text(),
})
