import { z } from "zod"

export const FormulationSchema = z.object({
  beanId: z.string().min(1, "Please select a bean origin"),
  roastProfile: z.enum(["light", "medium", "dark"]),
  inclusions: z.array(z.object({
    id: z.string(),
    percentage: z.number().min(0).max(15)
  })).refine((data) => {
    const total = data.reduce((acc, curr) => acc + curr.percentage, 0)
    return total <= 15
  }, {
    message: "Total inclusions cannot exceed 15% capacity"
  }),
  quantity: z.number().min(500, "Minimum Order Quantity is 500 units"),
})

export type FormulationData = z.infer<typeof FormulationSchema>
