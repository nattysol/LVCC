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
}