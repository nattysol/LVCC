import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { FORMULATION_MODULE } from "../../modules/formulation"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const formulationService = req.scope.resolve(FORMULATION_MODULE)
  const ingredients = await formulationService.getIngredients()
  
  res.json({
    ingredients
  })
}
