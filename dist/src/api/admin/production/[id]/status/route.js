import { PRODUCTION_MODULE } from "../../../../../modules/production/index.js";
export const POST = async (req, res) => {
    const { id } = req.params;
    // Define exactly what statuses are allowed to match your model
    const { status } = req.body;
    const productionModule = req.scope.resolve(PRODUCTION_MODULE);
    // Now TypeScript knows 'status' is safe to use here
    const batch = await productionModule.updateProductionBatches({
        id,
        status
    });
    res.json({
        batch
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL3Byb2R1Y3Rpb24vW2lkXS9zdGF0dXMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUE7QUFHOUUsTUFBTSxDQUFDLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFDdkIsR0FBa0IsRUFDbEIsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFBO0lBRXpCLCtEQUErRDtJQUMvRCxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLElBRXRCLENBQUE7SUFFRCxNQUFNLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUE0QixDQUFBO0lBRXhGLG9EQUFvRDtJQUNwRCxNQUFNLEtBQUssR0FBRyxNQUFNLGdCQUFnQixDQUFDLHVCQUF1QixDQUFDO1FBQzNELEVBQUU7UUFDRixNQUFNO0tBQ1AsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLEtBQUs7S0FDTixDQUFDLENBQUE7QUFDSixDQUFDLENBQUEifQ==