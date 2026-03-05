import { Module } from "@medusajs/framework/utils"
import ProductionModuleService from "./service"

export const PRODUCTION_MODULE = "productionModule"

export default Module(PRODUCTION_MODULE, {
  service: ProductionModuleService,
})
