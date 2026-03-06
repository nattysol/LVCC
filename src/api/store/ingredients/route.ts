import { 
  MedusaRequest, 
  MedusaResponse 
} from "@medusajs/framework/http"
// We explicitly point to the index file here to satisfy Node.js ESM rules
import { FORMULATION_MODULE } from "../../../modules/formulation/index"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const formulationModule = req.scope.resolve(FORMULATION_MODULE) as any
  
  const ingredients = await formulationModule.listIngredients({
    type: ["bean", "inclusion"]
  })

  res.json({
    ingredients
  })
}