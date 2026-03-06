import { defineLink } from "@medusajs/framework/utils"
import OrderModule from "@medusajs/medusa/order"
import ProductionModule from "../modules/production"

export default defineLink(
  OrderModule.linkable.order,
  ProductionModule.linkable.productionBatch
)