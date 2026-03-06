import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk";
export const submitLabInquiryWorkflow = createWorkflow("submit-lab-inquiry", (input) => {
    // Workflow logic for submitting an inquiry
    // This would typically involve creating a record or sending an email
    return new WorkflowResponse({
        success: true,
        message: "Inquiry submitted successfully"
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWl0LWxhYi1pbnF1aXJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9zdWJtaXQtbGFiLWlucXVpcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFBO0FBRXBGLE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUFHLGNBQWMsQ0FDcEQsb0JBQW9CLEVBQ3BCLENBQUMsS0FJQSxFQUFFLEVBQUU7SUFDSCwyQ0FBMkM7SUFDM0MscUVBQXFFO0lBQ3JFLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQztRQUMxQixPQUFPLEVBQUUsSUFBSTtRQUNiLE9BQU8sRUFBRSxnQ0FBZ0M7S0FDMUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUNGLENBQUEifQ==