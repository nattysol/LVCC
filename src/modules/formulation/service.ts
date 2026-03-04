import { MedusaService } from "@medusajs/framework/utils"

class FormulationService extends MedusaService({}) {
  async getIngredients() {
    return {
      beans: [
        { id: "bean_1", name: "Madagascar Sambirano", origin: "Madagascar", price_per_kg: 12 },
        { id: "bean_2", name: "Ecuador Arriba Nacional", origin: "Ecuador", price_per_kg: 15 }
      ],
      inclusions: [
        { id: "inc_1", name: "Sea Salt", price_per_kg: 5 },
        { id: "inc_2", name: "Roasted Nibs", price_per_kg: 8 },
        { id: "inc_3", name: "Vanilla Bean", price_per_kg: 45 }
      ]
    }
  }
}

export default FormulationService
