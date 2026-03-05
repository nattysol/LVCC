import { MedusaService } from "@medusajs/framework/utils"
import { Formulation, Ingredient } from "./models/formulation"

class FormulationModuleService extends MedusaService({
  Formulation,
  Ingredient,
}) {
}

export default FormulationModuleService
