export default {
    type: "link",
    isList: true,
    linkable: {
        order: {
            serviceName: "order",
            field: "order_id",
            linkable: "order",
            primaryKey: "id",
        },
        productionBatch: {
            serviceName: "productionModule",
            field: "production_batch_id",
            linkable: "productionBatch",
            primaryKey: "id",
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcHJvZHVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saW5rcy9vcmRlci1wcm9kdWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWU7SUFDYixJQUFJLEVBQUUsTUFBTTtJQUNaLE1BQU0sRUFBRSxJQUFJO0lBQ1osUUFBUSxFQUFFO1FBQ1IsS0FBSyxFQUFFO1lBQ0wsV0FBVyxFQUFFLE9BQU87WUFDcEIsS0FBSyxFQUFFLFVBQVU7WUFDakIsUUFBUSxFQUFFLE9BQU87WUFDakIsVUFBVSxFQUFFLElBQUk7U0FDakI7UUFDRCxlQUFlLEVBQUU7WUFDZixXQUFXLEVBQUUsa0JBQWtCO1lBQy9CLEtBQUssRUFBRSxxQkFBcUI7WUFDNUIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixVQUFVLEVBQUUsSUFBSTtTQUNqQjtLQUNGO0NBQ0YsQ0FBQSJ9