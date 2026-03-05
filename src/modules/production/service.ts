import { MedusaService } from "@medusajs/framework/utils"
import { Batch } from "./models/batch"

class ProductionModuleService extends MedusaService({
  Batch,
}) {
}

export default ProductionModuleService
