// Notice the explicitly added .js extension here!
import { FORMULATION_MODULE } from "../../../modules/formulation/index.js";
export const GET = async (req, res) => {
    const formulationModule = req.scope.resolve(FORMULATION_MODULE);
    const ingredients = await formulationModule.listIngredients({
        type: ["bean", "inclusion"]
    });
    res.json({
        ingredients
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2luZ3JlZGllbnRzL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLGtEQUFrRDtBQUNsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQTtBQUUxRSxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUN0QixHQUFrQixFQUNsQixHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxpQkFBaUIsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBUSxDQUFBO0lBRXRFLE1BQU0sV0FBVyxHQUFHLE1BQU0saUJBQWlCLENBQUMsZUFBZSxDQUFDO1FBQzFELElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUM7S0FDNUIsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLFdBQVc7S0FDWixDQUFDLENBQUE7QUFDSixDQUFDLENBQUEifQ==