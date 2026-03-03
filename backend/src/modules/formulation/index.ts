import { Module } from "@medusajs/framework/utils"
import FormulationService from "./service"

export const FORMULATION_MODULE = "formulation"

export default Module(FORMULATION_MODULE, {
  service: FormulationService,
})
