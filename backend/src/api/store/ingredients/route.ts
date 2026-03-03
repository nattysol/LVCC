import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import  FormulationModuleService from "../../../modules/formulation/service"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const formulationService = req.scope.resolve("formulationModuleService") as FormulationModuleService
  const ingredients = await formulationService.getIngredients()
  
  res.json({
    ingredients
  })
}
