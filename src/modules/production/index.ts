import { Module } from "@medusajs/framework/utils"
import ProductionService from "./service"

export const PRODUCTION_MODULE = "production"

export default Module(PRODUCTION_MODULE, {
  service: ProductionService,
})
