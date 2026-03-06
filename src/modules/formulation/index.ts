import { Module } from "@medusajs/framework/utils"
import FormulationModuleService from "./service.js"

export const FORMULATION_MODULE = "formulationModule"

export default Module(FORMULATION_MODULE, {
  service: FormulationModuleService,
})
