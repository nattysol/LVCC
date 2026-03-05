import { 
  MedusaRequest, 
  MedusaResponse 
} from "@medusajs/framework/http"
import { FORMULATION_MODULE } from "../../../modules/formulation"

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
