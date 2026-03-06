import { MedusaService } from "@medusajs/framework/utils"
// Explicitly use .js extension for the internal model import
import { ProductionBatch } from "./models/production-batch.js"

class ProductionModuleService extends MedusaService({
  ProductionBatch,
}) {
  // You can add custom manufacturing logic here later, 
  // such as validating if a batch can move from ROASTING to CONCHING
}

export default ProductionModuleService