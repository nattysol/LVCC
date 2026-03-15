import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // --- Orchestrator Logic ---

  // 1. Master Formulator Logic (Mass Balance & Costing)
  app.post("/api/orchestrate/blend", (req, res) => {
    const {
      // Cacao Group
      cacao_nibs = 70,
      cocoa_butter = 10,
      // Sweetener Group
      cane_sugar = 20,
      maple_sugar = 0,
      monk_fruit = 0,
      allulose = 0,
      // Dairy Group
      milk_powder = 0,
      oat_powder = 0,
      coconut_milk_powder = 0,
      // Inclusions
      sea_salt = false,
      vanilla_bean = false,
      espresso_nibs = false,
      // Metadata
      origin = "Madagascar"
    } = req.body;

    // 1. Categorization
    const cacaoGroup = { cacao_nibs, cocoa_butter };
    const sweetenerGroup = { cane_sugar, maple_sugar, monk_fruit, allulose };
    const dairyGroup = { milk_powder, oat_powder, coconut_milk_powder };
    const inclusions = { sea_salt, vanilla_bean, espresso_nibs };

    // 2. Mass Balance Logic (The 100% Base)
    // Base = Cacao + Sweetener + Dairy
    let baseTotal = Object.values(cacaoGroup).reduce((a, b) => a + b, 0) +
                    Object.values(sweetenerGroup).reduce((a, b) => a + b, 0) +
                    Object.values(dairyGroup).reduce((a, b) => a + b, 0);

    let balanced = { ...cacaoGroup, ...sweetenerGroup, ...dairyGroup };

    if (baseTotal !== 100) {
      // If user increased cacao_nibs, we need to adjust.
      // Priority: Subtract from Sweetener Group first, then Dairy Group.
      // Never reduce cocoa_butter unless explicitly requested (we assume input is the request).
      // However, the prompt says "If a user increases cacao_nibs, subtract proportionally from Sweetener then Dairy".
      
      let diff = baseTotal - 100;
      
      if (diff > 0) {
        // Need to reduce
        let sweetenerTotal = Object.values(sweetenerGroup).reduce((a, b) => a + b, 0);
        if (sweetenerTotal >= diff) {
          // Can subtract all from sweetener
          const factor = (sweetenerTotal - diff) / sweetenerTotal;
          balanced.cane_sugar *= factor;
          balanced.maple_sugar *= factor;
          balanced.monk_fruit *= factor;
          balanced.allulose *= factor;
        } else {
          // Subtract all sweetener, then move to dairy
          balanced.cane_sugar = 0;
          balanced.maple_sugar = 0;
          balanced.monk_fruit = 0;
          balanced.allulose = 0;
          diff -= sweetenerTotal;
          
          let dairyTotal = Object.values(dairyGroup).reduce((a, b) => a + b, 0);
          if (dairyTotal >= diff) {
            const factor = (dairyTotal - diff) / dairyTotal;
            balanced.milk_powder *= factor;
            balanced.oat_powder *= factor;
            balanced.coconut_milk_powder *= factor;
          } else {
            // Even dairy isn't enough, we have to scale everything except cocoa_butter?
            // The prompt says "Never reduce cocoa_butter". 
            // If we still have diff, we might have to reduce cacao_nibs or just force it.
            balanced.milk_powder = 0;
            balanced.oat_powder = 0;
            balanced.coconut_milk_powder = 0;
            // Last resort: adjust cacao_nibs to make it 100
            balanced.cacao_nibs = 100 - balanced.cocoa_butter;
          }
        }
      } else {
        // Need to increase (diff is negative)
        // Proportional increase to sweeteners to reach 100
        let sweetenerTotal = Object.values(sweetenerGroup).reduce((a, b) => a + b, 0);
        if (sweetenerTotal > 0) {
          const factor = (sweetenerTotal - diff) / sweetenerTotal;
          balanced.cane_sugar *= factor;
          balanced.maple_sugar *= factor;
          balanced.monk_fruit *= factor;
          balanced.allulose *= factor;
        } else {
          // If no sweetener, add to cane_sugar
          balanced.cane_sugar += Math.abs(diff);
        }
      }
    }

    // Rounding
    Object.keys(balanced).forEach(key => {
      balanced[key] = Number(balanced[key].toFixed(2));
    });

    // 3. Technical Validation
    const totalFat = balanced.cocoa_butter + (balanced.milk_powder * 0.26) + (balanced.coconut_milk_powder * 0.6); // Estimated dairy fats
    const warnings = [];
    if (totalFat < 30) {
      warnings.push("Low lipid profile: Formulation may require specialized conching temperatures.");
    }
    if (balanced.cacao_nibs > 85) {
      warnings.push("High solid density: Expect a firm snap and intense tannic profile.");
    }

    // 4. B2B Costing Logic
    const basePrice = 35.00;
    const originPremiums = { "Madagascar": 7.50, "Peru": 4.00, "Ecuador": 5.50, "Venezuela": 9.00 };
    const sweetenerUpcharges = { monk_fruit: 12.00, allulose: 8.00, maple_sugar: 3.00, cane_sugar: 0 };
    
    let pricePerKg = basePrice + (originPremiums[origin] || 0);
    
    // Sweetener upcharges (applied per kg of final product based on sweetener ratio)
    pricePerKg += (balanced.monk_fruit / 100) * sweetenerUpcharges.monk_fruit;
    pricePerKg += (balanced.allulose / 100) * sweetenerUpcharges.allulose;
    pricePerKg += (balanced.maple_sugar / 100) * sweetenerUpcharges.maple_sugar;

    // Inclusion Flat Fee
    const activeInclusions = Object.values(inclusions).filter(v => v === true).length;
    pricePerKg += activeInclusions * 2.50;

    const quote = {
      price_per_kg: pricePerKg.toFixed(2),
      bulk_tier_50kg: (pricePerKg * 0.95).toFixed(2), // 5% discount
      bulk_tier_100kg: (pricePerKg * 0.90).toFixed(2) // 10% discount
    };

    // 5. Output
    res.json({
      balanced_formulation: balanced,
      technical_specs: {
        fat_content_percentage: totalFat.toFixed(2),
        total_sugar_percentage: (balanced.cane_sugar + balanced.maple_sugar).toFixed(2),
        particle_size_target: "18-22 microns"
      },
      quote,
      production_journal_entry: `This ${origin} expression exhibits a ${balanced.cacao_nibs > 75 ? "robust" : "refined"} structural integrity with a ${totalFat > 35 ? "velvety" : "precise"} melt. ${warnings.join(" ")}`,
      ui_metadata: "Master_Formulator_View"
    });
  });

  // 2. Production Intelligence
  app.get("/api/orchestrate/production/:orderId", (req, res) => {
    const { orderId } = req.params;
    // Mocking Medusa status mapping
    const stages: Record<string, { stage: string; time: string }> = {
      "pending": { stage: "Roasting", time: "12h" },
      "processing": { stage: "Conching", time: "72h" },
      "shipped": { stage: "Tempering & Molding", time: "4h" },
      "completed": { stage: "Dispatched", time: "0h" }
    };

    const status = "processing"; // Mock status from Medusa
    const productionInfo = stages[status];

    res.json({
      order_id: orderId,
      current_stage: productionInfo.stage,
      time_remaining: productionInfo.time,
      ui_metadata: "Production_Row",
      status_note: `Batch ${orderId} is currently undergoing precision conching to develop optimal viscosity.`
    });
  });

  // 3. Inventory Warnings
  app.get("/api/orchestrate/inventory", async (req, res) => {
    // In a real app, we'd fetch from https://chocolate.medusajs.app/inventory-items
    // For now, we mock the response
    const mockInventory = [
      { id: "inv_1", title: "Cacao Beans - Madagascar", stock: 12 },
      { id: "inv_2", title: "Cocoa Butter - Deodorized", stock: 45 },
      { id: "inv_3", title: "Cane Sugar - Organic", stock: 150 }
    ];

    const lowStockItems = mockInventory.filter(item => item.stock < 20);
    
    let predictiveNote = "All reserves currently meet Las Vegas Craft Chocolate's stringent requirements.";
    if (lowStockItems.length > 0) {
      predictiveNote = `Our sensory logs indicate a dwindling reserve of ${lowStockItems.map(i => i.title).join(", ")}. To maintain the integrity of our upcoming seasonal collections, an immediate acquisition is advised.`;
    }

    res.json({
      inventory_status: mockInventory,
      low_stock_warnings: lowStockItems,
      predictive_note: predictiveNote,
      ui_metadata: "Journal_Entry",
      tone: "Luxury Professional"
    });
  });

  // --- Vite Middleware ---
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Las Vegas Craft Chocolate running on http://localhost:${PORT}`);
  });
}

startServer();
