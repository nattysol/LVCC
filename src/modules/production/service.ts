import { MedusaService } from "@medusajs/framework/utils"
import { Batch } from "./models/batch.js"

class ProductionModuleService extends MedusaService({
  Batch,
}) {
}

export default ProductionModuleService
