// medusa-backend/src/workflows/calculate-batch-cost.ts

import { 
  createWorkflow, 
  WorkflowResponse, 
  transform 
} from "@medusajs/workflows-sdk";
import { useRemoteQueryStep } from "@medusajs/medusa/core-flows"; // Ensure correct import path

export const calculateBatchCostWorkflow = createWorkflow(
  "calculate-batch-cost",
  function (input: { product_id: string; batch_quantity: number }) {
    
    // 1. Fetch the Active Recipe BOM
    // FIX: Using the correct entry point for remote query
    const recipe = useRemoteQueryStep({
      entry_point: "recipe_bom",
      fields: ["id", "ingredients", "estimated_labor_hours", "target_yield_kg"],
      variables: {
        filters: { product_id: input.product_id, is_active: true },
        take: 1
      },
    });

    // 2. Fetch current Material Prices
    const materialPrices = useRemoteQueryStep({
      entry_point: "material_price",
      fields: ["variant_id", "price_per_unit", "unit_of_measure"],
      variables: {
        filters: { is_active: true }
      }
    });

    // 3. The "Industrial Math" Step
    const result = transform(
      { recipe, materialPrices, input },
      (data) => {
        // Handle empty recipe cases gracefully
        if (!data.recipe || data.recipe.length === 0) {
          throw new Error("No active Recipe BOM found for this product.");
        }

        let ingredientTotal = 0;
        const recipeData = data.recipe[0];
        const ingredients = recipeData.ingredients; 

        ingredients.forEach((ing: any) => {
          const priceRecord = data.materialPrices.find(
            (p: any) => p.variant_id === ing.variant_id
          );
          
          if (priceRecord) {
            // Enterprise Math: (Ratio * Batch Size) * (1 + Loss) * Price
            const lossMultiplier = 1 + (ing.loss_factor || 0);
            const amountNeeded = (ing.ratio * data.input.batch_quantity) * lossMultiplier;
            ingredientTotal += amountNeeded * Number(priceRecord.price_per_unit);
          }
        });

        const laborCost = (recipeData.estimated_labor_hours || 0) * 2500; // $25.00/hr

        return {
          raw_material_total: ingredientTotal,
          labor_total: laborCost,
          grand_total: ingredientTotal + laborCost,
          currency_code: "usd"
        };
      }
    );

    return new WorkflowResponse(result);
  }
);