import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    // 1. Log to Cloud Console so we can see what's happening
    console.log("[DEBUG] Resolving Production Module Service...")
    
    // Try to resolve the service - common keys are 'productionModuleService' or 'productionService'
    const productionModuleService = req.scope.resolve("productionModuleService") as any

    if (!productionModuleService) {
      throw new Error("Service 'productionModuleService' not found in container")
    }

    const [batches, count] = await productionModuleService.listAndCountProductionBatches({}, { take: 10 })

    res.json({ production_batches: batches, count })
  } catch (error: any) {
    // This log will appear in your Medusa Cloud "Logs" tab
    console.error(`[BACKEND ERROR] ${error.message}`)
    
    res.status(500).json({ 
      message: "Internal Server Error", 
      details: error.message 
    })
  }
}