import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  // 1. Resolve your custom Production Module
  // We cast to 'any' to bypass the missing property error
  const productionModuleService = req.scope.resolve("productionModuleService") as any

  try {
    // 2. Fetch the data
    // Medusa generates 'listAndCount[EntityName]s' automatically
    const [batches, count] = await productionModuleService.listAndCountProductionBatches(
      {}, // Filters
      { take: 10 } // Config
    )

    // 3. Return the JSON
    res.json({
      production_batches: batches,
      count
    })
  } catch (error) {
    res.status(500).json({ 
      message: "Module service error", 
      error: error instanceof Error ? error.message : "Unknown error" 
    })
  }
}