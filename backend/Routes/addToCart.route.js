const cartController = require("../Controllers/cart.controller");
const { authMiddleware } = require("../Middlewares");

module.exports = function (app) {
  app.post(
    "/eshop/api/v1/auth/addtocart/:id",
    authMiddleware.verifyToken,
    cartController.addToCart
  );
  app.get(
    "/eshop/api/v1/auth/getcartdata",
    authMiddleware.verifyToken,
    cartController.getCartData
  );
};
