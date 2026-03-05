import { model } from "@medusajs/framework/utils"

export const Formulation = model.define("formulation", {
  id: model.id().primaryKey(),
  name: model.text(),
  bean_origin: model.text(),
  roast_profile: model.enum(["light", "medium", "dark"]),
  cocoa_percentage: model.number(),
  inclusions: model.array(),
})

export const Ingredient = model.define("ingredient", {
  id: model.id().primaryKey(),
  name: model.text(),
  type: model.enum(["bean", "inclusion", "sugar"]),
  stock_level: model.number(),
})
