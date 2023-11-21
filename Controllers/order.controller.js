const orderModel = require("../Models/order.model");
const User = require("../Models/user.model");
const addressModel = require("../Models/address.model");
const productModel = require("../Models/product.model");

exports.createOrder = async (req, res) => {
  try {
    const { productId, addressId, quantity } = req.body;

    if (!productId || !addressId || !quantity) {
      return res.status(400).json({
        message: "Please provide productId, addressId, and quantity.",
      });
    }

    const user = await User.find({ userId: req.userId });

    const product = await productModel.findOne({ productId });
    if (!product) {
      return res.status(404).json({
        message: `No Product found for ID ${productId}`,
      });
    }

    if (product.availableItems < quantity) {
      return res.status(400).json({
        message: `Product with ID ${productId} is currently out of stock!`,
      });
    }

    const address = await addressModel.findOne({ addressId });
    if (!address) {
      return res.status(404).json({
        message: `No Address found for ID ${addressId}`,
      });
    }
    const saveOrder = await orderModel.create({
      productId,
      addressId,
      quantity,
    });

    res.status(201).json({ user, product, address, saveOrder });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Some error occurred while creating Order" });
  }
};
