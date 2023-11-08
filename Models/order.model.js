////File for schema of order model

const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  orderDate: {
    type: Date,
    default: () => {
      return Date.now();
    },
    immutable: true,
  },
  productId: {
    type: Number,
    required: true,
  },
  shippingAddressId: {
    type: Number,
    required: true,
  },
  userID: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);
