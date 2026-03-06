import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { PRODUCTION_MODULE } from "../../../../../modules/production/index.js"
import ProductionModuleService from "../../../../../modules/production/service.js"

export const POST = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const { id } = req.params
  
  // Define exactly what statuses are allowed to match your model
  const { status } = req.body as { 
    status: "ROASTING" | "CONCHING" | "TEMPERING" | "PACKAGING" | "READY" 
  }

  const productionModule = req.scope.resolve(PRODUCTION_MODULE) as ProductionModuleService

  // Now TypeScript knows 'status' is safe to use here
  const batch = await productionModule.updateProductionBatches({
    id,
    status
  })

  res.json({
    batch
  })
}