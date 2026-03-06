import { MedusaService } from "@medusajs/framework/utils"
import { Formulation, Ingredient } from "./models/formulation.js"

class FormulationModuleService extends MedusaService({
  Formulation,
  Ingredient,
}) {
}

export default FormulationModuleService
