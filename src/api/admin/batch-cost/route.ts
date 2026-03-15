// medusa-backend/src/api/admin/batch-cost/route.ts

import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { calculateBatchCostWorkflow } from "../../../workflows/calculate-batch-cost";

export const POST = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  // 1. Get the data from the request body
  // Note: req.body is used in v2, but typing it ensures safety
  const { product_id, batch_quantity } = req.body as {
    product_id: string;
    batch_quantity: number;
  };

  // 2. Execute the Enterprise Costing Workflow using the workflow engine
  // In v2, we run the workflow and pass the container (scope)
  const { result } = await calculateBatchCostWorkflow(req.scope).run({
    input: {
      product_id,
      batch_quantity,
    },
  });

  // 3. Return the financial data
  res.status(200).json({
    costing: result
  });
};