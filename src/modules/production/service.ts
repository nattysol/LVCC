import { MedusaService } from "@medusajs/framework/utils"

class ProductionService extends MedusaService({
  // In a real app, we would define data models here
  // For this scaffold, we'll use a simplified service
}) {
  async listBatches() {
    return [
      { id: "batch_1", status: "roasting", name: "LV-402", progress: 60 },
      { id: "batch_2", status: "conching", name: "LV-403", progress: 25 }
    ]
  }
}

export default ProductionService
