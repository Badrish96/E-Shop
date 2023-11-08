const productController = require("../Controllers/product.controller");
const { authMiddleware } = require("../Middlewares");

module.exports = function (app) {
  app.post(
    "/eshop/api/v1/auth/saveproduct",
    authMiddleware.verifyToken,
    authMiddleware.isAdmin,
    productController.saveProduct
  );
  app.get("/eshop/api/v1/auth/findproduct", productController.findAllProducts);
};
